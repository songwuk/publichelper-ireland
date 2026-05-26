import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  agencies,
  guides,
  services,
  sourceNotes,
} from "../src/data/content.js";

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const PORT = Number(process.env.UPDATE_SERVICE_PORT || 8787);
const FETCH_TIMEOUT_MS = Number(process.env.UPDATE_FETCH_TIMEOUT_MS || 15000);
const args = new Set(process.argv.slice(2));
const runOnce = args.has("--once");
const dryRun = args.has("--dry-run");
const updateOnStart = process.env.UPDATE_ON_START !== "false";

const statusPath = fileURLToPath(new URL("../src/data/update-status.json", import.meta.url));
const snapshotPath = fileURLToPath(new URL("./data/source-snapshots.json", import.meta.url));

function collectSources() {
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

  return [...sources.values()].sort((a, b) => a.url.localeCompare(b.url));
}

function parseTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return "";
  return match[1].replace(/\s+/g, " ").trim();
}

function contentHash(content) {
  return createHash("sha256").update(content).digest("hex");
}

async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  const tmpPath = `${path}.tmp`;
  await writeFile(tmpPath, `${JSON.stringify(value, null, 2)}\n`);
  await rename(tmpPath, path);
}

async function fetchSource(source) {
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
        "user-agent": "PublicHelperIrelandUpdater/0.1 (+local weekly verification service)",
      },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
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

async function updateAllInformation(reason = "scheduled") {
  const startedAt = new Date();
  const sources = collectSources();
  const results = [];

  for (const source of sources) {
    results.push(await fetchSource(source));
  }

  const successCount = results.filter((result) => result.ok).length;
  const failureCount = results.length - successCount;
  const completedAt = new Date();
  const status = {
    status: failureCount === 0 ? "updated" : "updated-with-errors",
    lastSystemUpdateAt: completedAt.toISOString(),
    lastAttemptAt: completedAt.toISOString(),
    lastSuccessfulUpdateAt: successCount > 0 ? completedAt.toISOString() : null,
    nextScheduledUpdateAt: new Date(completedAt.getTime() + WEEK_MS).toISOString(),
    sourceCount: results.length,
    successCount,
    failureCount,
    updatedBy: "node-weekly-update-service",
    message: dryRun
      ? "Dry run completed. No remote pages were fetched."
      : `Checked ${results.length} official source URLs for current information.`,
  };

  const snapshot = {
    reason,
    dryRun,
    startedAt: startedAt.toISOString(),
    completedAt: completedAt.toISOString(),
    durationMs: completedAt.getTime() - startedAt.getTime(),
    status,
    results,
  };

  await writeJson(snapshotPath, snapshot);
  await writeJson(statusPath, status);
  return snapshot;
}

async function getStatus() {
  return readJson(statusPath, {
    status: "missing",
    lastSystemUpdateAt: null,
    lastAttemptAt: null,
    lastSuccessfulUpdateAt: null,
    nextScheduledUpdateAt: null,
    sourceCount: 0,
    successCount: 0,
    failureCount: 0,
    updatedBy: "node-weekly-update-service",
    message: "No update status file exists yet.",
  });
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  response.end(`${JSON.stringify(payload, null, 2)}\n`);
}

function startHttpService() {
  let runningUpdate = null;

  const server = createServer(async (request, response) => {
    try {
      if (request.method === "GET" && request.url === "/health") {
        sendJson(response, 200, { ok: true, service: "publichelper-ireland-update-service" });
        return;
      }

      if (request.method === "GET" && request.url === "/status") {
        sendJson(response, 200, await getStatus());
        return;
      }

      if (request.method === "GET" && request.url === "/sources") {
        sendJson(response, 200, await readJson(snapshotPath, { results: [] }));
        return;
      }

      if (request.method === "POST" && request.url === "/update") {
        if (!runningUpdate) {
          runningUpdate = updateAllInformation("manual-http").finally(() => {
            runningUpdate = null;
          });
        }
        sendJson(response, 200, await runningUpdate);
        return;
      }

      sendJson(response, 404, { error: "Not found" });
    } catch (error) {
      sendJson(response, 500, {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  });

  server.listen(PORT, "127.0.0.1", () => {
    console.log(`Update service listening at http://127.0.0.1:${PORT}`);
  });

  return server;
}

if (runOnce) {
  updateAllInformation(dryRun ? "manual-dry-run" : "manual-once")
    .then((snapshot) => {
      console.log(JSON.stringify(snapshot.status, null, 2));
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
} else {
  startHttpService();

  if (updateOnStart) {
    updateAllInformation("service-start").catch((error) => {
      console.error("Initial update failed:", error);
    });
  }

  setInterval(() => {
    updateAllInformation("weekly-scheduled").catch((error) => {
      console.error("Scheduled update failed:", error);
    });
  }, WEEK_MS);
}
