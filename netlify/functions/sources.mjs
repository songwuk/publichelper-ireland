import { createDefaultSnapshot, readStoredSnapshot } from "../../server/update-core.js";
import { createBlobUpdateStorage } from "../../server/netlify-blob-storage.js";
import { errorResponse, jsonResponse, methodNotAllowed } from "../shared/responses.js";

export default async (request) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    return methodNotAllowed(["GET", "HEAD"]);
  }

  try {
    const snapshot = await readStoredSnapshot(createBlobUpdateStorage(), createDefaultSnapshot());
    return jsonResponse(snapshot);
  } catch (error) {
    return errorResponse(error);
  }
};
