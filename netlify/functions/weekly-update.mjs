import { updateAllInformation } from "../../server/update-core.js";
import { createBlobUpdateStorage } from "../../server/netlify-blob-storage.js";
import { errorResponse, jsonResponse } from "../shared/responses.js";
import { getNetlifyUpdateOptions } from "../shared/update-options.js";

export default async (request) => {
  try {
    const payload = await readJsonBody(request);
    const snapshot = await updateAllInformation({
      reason: "netlify-weekly-scheduled",
      dryRun: false,
      storage: createBlobUpdateStorage(),
      updatedBy: "netlify-scheduled-function",
      ...getNetlifyUpdateOptions(),
    });

    return jsonResponse({
      ok: snapshot.status.successCount > 0,
      nextRun: payload.next_run || null,
      status: snapshot.status,
    });
  } catch (error) {
    return errorResponse(error);
  }
};

async function readJsonBody(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}
