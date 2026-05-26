export function jsonResponse(payload, status = 200, headers = {}) {
  return new Response(`${JSON.stringify(payload, null, 2)}\n`, {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...headers,
    },
  });
}

export function methodNotAllowed(allowedMethods) {
  return jsonResponse(
    {
      error: "Method not allowed",
      allowedMethods,
    },
    405,
    {
      allow: allowedMethods.join(", "),
    },
  );
}

export function errorResponse(error, status = 500) {
  return jsonResponse(
    {
      error: error instanceof Error ? error.message : String(error),
    },
    status,
  );
}
