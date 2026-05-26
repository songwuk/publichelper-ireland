import { createDefaultStatus, readStoredStatus } from "../../server/update-core.js";
import { createBlobUpdateStorage } from "../../server/netlify-blob-storage.js";
import { errorResponse, jsonResponse, methodNotAllowed } from "../shared/responses.js";

export default async (request) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    return methodNotAllowed(["GET", "HEAD"]);
  }

  try {
    const status = await readStoredStatus(
      createBlobUpdateStorage(),
      createDefaultStatus("netlify-update-function"),
    );
    return jsonResponse(status);
  } catch (error) {
    return errorResponse(error);
  }
};
