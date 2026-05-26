import { getStore } from "@netlify/blobs";

const STORE_NAME = process.env.UPDATE_BLOB_STORE || "publichelper-ie-updates";
const STATUS_KEY = "status.json";
const SNAPSHOT_KEY = "source-snapshot.json";

export function createBlobUpdateStorage() {
  const store = getStore({ name: STORE_NAME, consistency: "strong" });

  return {
    async readStatus(fallback) {
      return (await store.get(STATUS_KEY, { type: "json", consistency: "strong" })) || fallback;
    },
    async readSnapshot(fallback) {
      return (await store.get(SNAPSHOT_KEY, { type: "json", consistency: "strong" })) || fallback;
    },
    async writeStatus(status) {
      await store.setJSON(STATUS_KEY, status);
    },
    async writeSnapshot(snapshot) {
      await store.setJSON(SNAPSHOT_KEY, snapshot);
    },
  };
}

export const blobStorageInfo = {
  storeName: STORE_NAME,
  statusKey: STATUS_KEY,
  snapshotKey: SNAPSHOT_KEY,
};
