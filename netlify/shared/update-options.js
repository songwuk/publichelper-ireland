const NETLIFY_FETCH_TIMEOUT_MS = 5000;
const NETLIFY_FETCH_CONCURRENCY = 15;

export function getNetlifyUpdateOptions() {
  return {
    fetchTimeoutMs: readNumberEnv("UPDATE_FETCH_TIMEOUT_MS", NETLIFY_FETCH_TIMEOUT_MS),
    fetchConcurrency: readNumberEnv("UPDATE_FETCH_CONCURRENCY", NETLIFY_FETCH_CONCURRENCY),
    userAgent:
      process.env.UPDATE_USER_AGENT ||
      "PublicHelperIrelandUpdater/0.2 (+Netlify Functions weekly verification)",
  };
}

export function isManualUpdateAuthorized(request) {
  const secret = process.env.UPDATE_FUNCTION_SECRET;
  if (!secret) return true;

  const authHeader = request.headers.get("authorization") || "";
  const headerSecret = request.headers.get("x-update-secret") || "";
  return authHeader === `Bearer ${secret}` || headerSecret === secret;
}

function readNumberEnv(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}
