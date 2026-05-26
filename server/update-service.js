import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  DEFAULT_FETCH_CONCURRENCY,
  DEFAULT_FETCH_TIMEOUT_MS,
  collectSources,
  createDefaultSnapshot,
  createDefaultStatus,
  readStoredSnapshot,
  readStoredStatus,
  updateAllInformation,
} from "./update-core.js";

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const PORT = Number(process.env.UPDATE_SERVICE_PORT || 8787);
const FETCH_TIMEOUT_MS = Number(process.env.UPDATE_FETCH_TIMEOUT_MS || DEFAULT_FETCH_TIMEOUT_MS);
const FETCH_CONCURRENCY = Number(process.env.UPDATE_FETCH_CONCURRENCY || DEFAULT_FETCH_CONCURRENCY);
const args = new Set(process.argv.slice(2));
const runOnce = args.has("--once");
const dryRun = args.has("--dry-run");
const updateOnStart = process.env.UPDATE_ON_START !== "false";

const statusPath = fileURLToPath(new URL("../src/data/update-status.json", import.meta.url));
const snapshotPath = fileURLToPath(new URL("./data/source-snapshots.json", import.meta.url));

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

function createFileUpdateStorage() {
  return {
    readStatus: (fallback = createDefaultStatus("node-weekly-update-service")) =>
      readJson(statusPath, fallback),
    readSnapshot: (fallback = createDefaultSnapshot()) => readJson(snapshotPath, fallback),
    writeStatus: (status) => writeJson(statusPath, status),
    writeSnapshot: (snapshot) => writeJson(snapshotPath, snapshot),
  };
}

function runUpdate(reason) {
  return updateAllInformation({
    reason,
    dryRun,
    storage: createFileUpdateStorage(),
    updatedBy: "node-weekly-update-service",
    fetchTimeoutMs: FETCH_TIMEOUT_MS,
    fetchConcurrency: FETCH_CONCURRENCY,
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
  const storage = createFileUpdateStorage();

  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);

      if (request.method === "GET" && url.pathname === "/health") {
        sendJson(response, 200, {
          ok: true,
          service: "publichelper-ireland-update-service",
          sourceCount: collectSources().length,
        });
        return;
      }

      if (request.method === "GET" && url.pathname === "/status") {
        sendJson(response, 200, await readStoredStatus(storage, createDefaultStatus("node-weekly-update-service")));
        return;
      }

      if (request.method === "GET" && url.pathname === "/sources") {
        sendJson(response, 200, await readStoredSnapshot(storage));
        return;
      }

      if (request.method === "POST" && url.pathname === "/update") {
        if (!runningUpdate) {
          runningUpdate = runUpdate("manual-http").finally(() => {
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
  runUpdate(dryRun ? "manual-dry-run" : "manual-once")
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
    runUpdate("service-start").catch((error) => {
      console.error("Initial update failed:", error);
    });
  }

  setInterval(() => {
    runUpdate("weekly-scheduled").catch((error) => {
      console.error("Scheduled update failed:", error);
    });
  }, WEEK_MS);
}
