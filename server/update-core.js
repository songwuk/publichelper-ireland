import { createHash } from "node:crypto";
import { agencies, guideDocumentGuides, guides, services, sourceNotes } from "../src/data/content.js";

export const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
export const DEFAULT_FETCH_TIMEOUT_MS = 15000;
export const DEFAULT_FETCH_CONCURRENCY = 6;
export const DEFAULT_USER_AGENT =
  "PublicHelperIrelandUpdater/0.2 (+weekly official-source verification)";

export function collectSources() {
  const sources = new Map();

  function add(url, label, group) {
    if (!url || !url.startsWith("http")) return;
    if (!sources.has(url)) {
      sources.set(url, { url, label, group });
    }
  }

  sourceNotes.forEach((source) => add(source.url, source.label, "source-note"));
  services.forEach((service) => add(service.url, service.title, "service"));
  agencies.forEach((agency) => add(agency.url, agency.name, "agency"));
  guides.forEach((guide) => {
    guide.steps.forEach((step) => add(step.service, `${guide.title}: ${step.title}`, "guide-step"));
  });
  Object.entries(guideDocumentGuides).forEach(([guideId, documentGuide]) => {
    documentGuide.sources?.forEach((source) => add(source.url, source.label, `guide-document:${guideId}`));
  });

  return [...sources.values()].sort((a, b) => a.url.localeCompare(b.url));
}

export function createDefaultStatus(updatedBy = "weekly-update-service") {
  return {
    status: "missing",
    lastSystemUpdateAt: null,
    lastAttemptAt: null,
    lastSuccessfulUpdateAt: null,
    nextScheduledUpdateAt: null,
    sourceCount: 0,
    successCount: 0,
    failureCount: 0,
    updatedBy,
    message: "No update status exists yet.",
  };
}

export function createDefaultSnapshot() {
  return {
    reason: "missing",
    dryRun: false,
    startedAt: null,
    completedAt: null,
    durationMs: 0,
    status: createDefaultStatus(),
    results: [],
  };
}

function parseTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return "";
  return match[1].replace(/\s+/g, " ").trim();
}

function contentHash(content) {
  return createHash("sha256").update(content).digest("hex");
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  const workerCount = Math.max(1, Math.min(concurrency, items.length));

  await Promise.all(
    Array.from({ length: workerCount }, async () => {
      while (nextIndex < items.length) {
        const currentIndex = nextIndex;
        nextIndex += 1;
        results[currentIndex] = await mapper(items[currentIndex], currentIndex);
      }
    }),
  );

  return results;
}

export async function fetchSource(
  source,
  {
    dryRun = false,
    fetchTimeoutMs = DEFAULT_FETCH_TIMEOUT_MS,
    userAgent = DEFAULT_USER_AGENT,
  } = {},
) {
  const startedAt = new Date().toISOString();

  if (dryRun) {
    return {
      ...source,
      ok: true,
      dryRun: true,
      fetchedAt: startedAt,
      statusCode: 0,
      title: "Dry run",
      contentLength: 0,
      contentHash: null,
      error: null,
    };
  }

  try {
    const response = await fetch(source.url, {
      headers: {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "user-agent": userAgent,
      },
      signal: AbortSignal.timeout(fetchTimeoutMs),
    });
    const text = await response.text();

    return {
      ...source,
      ok: response.ok,
      fetchedAt: startedAt,
      statusCode: response.status,
      title: parseTitle(text),
      contentLength: text.length,
      contentHash: contentHash(text),
      error: response.ok ? null : `HTTP ${response.status}`,
    };
  } catch (error) {
    return {
      ...source,
      ok: false,
      fetchedAt: startedAt,
      statusCode: null,
      title: "",
      contentLength: 0,
      contentHash: null,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function updateAllInformation({
  reason = "scheduled",
  dryRun = false,
  storage = null,
  updatedBy = "weekly-update-service",
  fetchTimeoutMs = DEFAULT_FETCH_TIMEOUT_MS,
  fetchConcurrency = DEFAULT_FETCH_CONCURRENCY,
  userAgent = DEFAULT_USER_AGENT,
} = {}) {
  const previousStatus = storage
    ? await readStoredStatus(storage, createDefaultStatus(updatedBy))
    : createDefaultStatus(updatedBy);
  const startedAt = new Date();
  const sources = collectSources();
  const results = await mapWithConcurrency(sources, fetchConcurrency, (source) =>
    fetchSource(source, { dryRun, fetchTimeoutMs, userAgent }),
  );

  const successCount = results.filter((result) => result.ok).length;
  const failureCount = results.length - successCount;
  const completedAt = new Date();
  const completedAtIso = completedAt.toISOString();
  const hasSuccessfulFetch = !dryRun && successCount > 0;
  const preservedSystemUpdateAt =
    previousStatus.lastSystemUpdateAt || previousStatus.lastSuccessfulUpdateAt || null;
  const lastSystemUpdateAt = hasSuccessfulFetch ? completedAtIso : preservedSystemUpdateAt;
  const lastSuccessfulUpdateAt = hasSuccessfulFetch
    ? completedAtIso
    : previousStatus.lastSuccessfulUpdateAt || preservedSystemUpdateAt;
  const statusKind = dryRun
    ? "dry-run"
    : failureCount === 0
      ? "updated"
      : successCount > 0
        ? "updated-with-errors"
        : "update-failed";
  const message = dryRun
    ? "Dry run completed. No remote pages were fetched."
    : successCount === 0
      ? `Update attempt failed. Preserved the previous successful system update time while checking ${results.length} official source URLs.`
      : `Checked ${results.length} official source URLs for current information.`;
  const status = {
    status: statusKind,
    lastSystemUpdateAt,
    lastAttemptAt: completedAtIso,
    lastSuccessfulUpdateAt,
    nextScheduledUpdateAt: dryRun
      ? previousStatus.nextScheduledUpdateAt
      : new Date(completedAt.getTime() + WEEK_MS).toISOString(),
    sourceCount: results.length,
    successCount,
    failureCount,
    updatedBy,
    message,
  };

  const snapshot = {
    reason,
    dryRun,
    startedAt: startedAt.toISOString(),
    completedAt: completedAtIso,
    durationMs: completedAt.getTime() - startedAt.getTime(),
    status,
    results,
  };

  if (storage && !dryRun) {
    await storage.writeSnapshot(snapshot);
    await storage.writeStatus(status);
  }

  return snapshot;
}

export async function readStoredStatus(storage, fallback = createDefaultStatus()) {
  if (!storage) return fallback;
  return storage.readStatus(fallback);
}

export async function readStoredSnapshot(storage, fallback = createDefaultSnapshot()) {
  if (!storage) return fallback;
  return storage.readSnapshot(fallback);
}
