import { updateAllInformation } from "../../server/update-core.js";
import { createBlobUpdateStorage } from "../../server/netlify-blob-storage.js";
import { errorResponse, jsonResponse, methodNotAllowed } from "../shared/responses.js";
import { getNetlifyUpdateOptions, isManualUpdateAuthorized } from "../shared/update-options.js";

export default async (request) => {
  if (request.method !== "POST") {
    return methodNotAllowed(["POST"]);
  }

  if (!isManualUpdateAuthorized(request)) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  try {
    const url = new URL(request.url);
    const snapshot = await updateAllInformation({
      reason: "netlify-manual-function",
      dryRun: url.searchParams.get("dryRun") === "true",
      storage: createBlobUpdateStorage(),
      updatedBy: "netlify-manual-function",
      ...getNetlifyUpdateOptions(),
    });

    return jsonResponse(snapshot);
  } catch (error) {
    return errorResponse(error);
  }
};
