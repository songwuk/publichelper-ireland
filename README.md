<p align="center">
  <img src="public/logo.svg" alt="Public Service Guide Ireland logo" width="360" />
</p>

<h1 align="center">Public Service Guide Ireland</h1>

Independent Vue 3 + Vite guide for Irish public services. It provides official service links, life-event checklists, agency information, multilingual UI, local checklist progress, PWA assets, and a Netlify Functions backend for weekly source checks.

This is not a government website. Always verify important actions on the official source.

## Features

- Vue 3 + Vite frontend
- Languages: English, Chinese, Portuguese, Italian
- Browser language auto-detection with manual language switch
- Clean history URLs, for example `/guides` and `/guide/moving-to-ireland`
- Searchable official service links
- Life-event checklists with local progress storage
- Agency directory and source notes
- PWA manifest, service worker, icon, and logo
- Netlify Functions API for status, source snapshots, and manual updates
- Netlify Scheduled Function for weekly official-source checks
- Netlify Blobs storage for latest update status and source snapshots
- System update timestamp loaded from the backend at runtime

## Project Structure

```text
publichelper-ireland/
  netlify/
    functions/            Netlify Functions backend endpoints
    shared/               Shared function helpers
  public/                 Static assets, manifest, service worker
  server/                 Shared update logic and local Node update service
  src/
    data/                 Content and update status JSON
    i18n/                 Translation dictionaries
    App.vue               Main Vue app
    main.js               Vue bootstrap and service worker registration
    styles.css            Global styling
```

## Local Development

Frontend only:

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

Frontend plus Netlify Functions:

```bash
npx netlify dev
```

Use `.env.example` as the starting point for local environment variables.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Update Service

The update logic checks all official source URLs, records the latest system update time, and stores a source snapshot.

For local Node runs, status is written to:

```text
src/data/update-status.json
```

Commands:

```bash
npm run update:dry-run   # Validate update flow without fetching remote pages
npm run update:once      # Fetch sources once and update status/snapshots
npm run update:service   # Start local Node service with weekly interval
```

Local Node service endpoints:

```text
GET  http://127.0.0.1:8787/health
GET  http://127.0.0.1:8787/status
GET  http://127.0.0.1:8787/sources
POST http://127.0.0.1:8787/update
```

Generated source snapshots are ignored by Git under `server/data/`.

Netlify backend endpoints:

```text
GET  /api/health
GET  /api/status
GET  /api/sources
POST /api/update
POST /api/update?dryRun=true
```

Netlify stores update status and source snapshots in the `publichelper-ie-updates` Blobs store by default. The frontend calls `/api/status` at runtime; if the API is unavailable, it falls back to the checked-in `src/data/update-status.json`.

## Netlify Deployment

This project deploys the frontend and backend as one Netlify site.

The repository already includes `netlify.toml`:

```text
Build command: npm run build
Publish directory: dist
Functions directory: netlify/functions
```

Clean URL routing is handled by the fallback redirect in `netlify.toml`, after the `/api/*` function redirect:

```text
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Deployment steps:

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Netlify, create a new project from the Git repository.
3. If this project is inside a larger repository, set the base directory:

```text
Base directory: publichelper-ireland
```

4. Keep the build settings from `netlify.toml`.
5. Add environment variables in Netlify Project configuration > Environment variables:

```text
UPDATE_BLOB_STORE=publichelper-ie-updates
UPDATE_FETCH_TIMEOUT_MS=5000
UPDATE_FETCH_CONCURRENCY=15
UPDATE_FUNCTION_SECRET=<long random secret>
```

`UPDATE_FUNCTION_SECRET` is optional but recommended. When set, manual updates require:

```bash
curl -X POST "https://YOUR-SITE.netlify.app/api/update" \
  -H "Authorization: Bearer YOUR_SECRET"
```

6. Deploy the site.
7. After the first deploy, seed the backend status by running the `weekly-update` scheduled function from the Netlify Functions UI, or call `/api/update` manually.

Weekly backend updates are configured in `netlify.toml`:

```toml
[functions."weekly-update"]
  schedule = "@weekly"
```

Netlify runs `@weekly` schedules on Sunday at 00:00 UTC.

## Notes

- Checklist progress and language choice are stored in browser `localStorage`.
- The service worker is only registered in production builds and does not cache `/api/*` responses.
- Official service names are often kept in English inside translations so users can match them with government websites.
