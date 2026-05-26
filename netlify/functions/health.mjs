import { collectSources } from "../../server/update-core.js";
import { blobStorageInfo } from "../../server/netlify-blob-storage.js";
import { jsonResponse, methodNotAllowed } from "../shared/responses.js";

export default async (request) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    return methodNotAllowed(["GET", "HEAD"]);
  }

  return jsonResponse({
    ok: true,
    service: "publichelper-ireland-netlify-functions",
    storage: blobStorageInfo.storeName,
    sourceCount: collectSources().length,
  });
};
