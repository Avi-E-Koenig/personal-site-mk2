# Avi Koenig — Personal Portfolio (v3)

Recruiter-facing bilingual (English / Hebrew) portfolio, live at [koenig.co.il](https://koenig.co.il) on Vercel.

Domain vocabulary (Case Study, Mindset, Anonymized, …) lives in [`CONTEXT.md`](CONTEXT.md); architectural decisions in [`docs/adr/`](docs/adr).

## Tech Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **next-intl** — `[locale]` path routing: English unprefixed (`/`), Hebrew under `/he`, per-locale SEO (ADR 0002)
- **Tailwind CSS 3** with custom design tokens; light default + dark toggle via **next-themes**

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint (next core-web-vitals + typescript)
```

### Environment

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL for metadata, hreflang, sitemap, robots | `https://personal-site-mk2.vercel.app` |

Production sets it to `https://koenig.co.il`.

## Project Structure

```
app/
  [locale]/               # Home, case-studies, mindset, resume, contact (+ layout)
  api/resume/route.ts     # Résumé proxy (Google Doc → PDF, bundled fallback) — ADR 0003
  robots.ts, sitemap.ts   # Generated SEO files
  providers.tsx           # Theme provider
components/               # Navigation, Footer, ContactLinks, Language/Theme switchers
content/case-studies.ts   # Case Study content (EN + HE)
i18n/                     # next-intl routing, request config, locale-aware navigation
lib/seo.ts                # baseUrl + canonical/hreflang helpers
messages/{en,he}.json     # UI strings (keep keys in parity)
proxy.ts                  # next-intl locale routing proxy
public/resume-fallback.pdf
```

## Notes

- `/resume.pdf` is rewritten to `/api/resume`, which serves the live Google Doc export and falls back to `public/resume-fallback.pdf` if Drive is unreachable.
- `ai-context/` holds the original PRD and content-gathering material used to build the site.
