# Résumé is proxied live from a Google Doc, not bundled as a static file

**Status:** accepted

`/resume.pdf` is served by a route handler (`app/api/resume/route.ts`, reached via a `beforeFiles` rewrite) that fetches Avi's résumé from its Google Doc source (`export?format=pdf`) on each request, cached at the edge for 1 hour. This lets Avi edit the résumé in Google Docs and have the live site reflect it within the hour, with no redeploy.

If the Drive fetch fails or returns a suspiciously small response, the route falls back to a bundled last-known-good copy (`public/resume-fallback.pdf`) so a recruiter never sees a broken résumé. The fallback should be refreshed occasionally by re-copying the live export.

## Considered Options

- **Bundle a static PDF in `public/`** — rejected: every résumé edit requires a redeploy, which Avi explicitly wanted to avoid.
- **Client-side iframe pointed directly at the Drive share URL** — rejected: Google-branded UI, weaker SEO/download UX, and breaks entirely if the share link or its permissions ever change.
