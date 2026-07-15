# Bilingual i18n uses [locale] path routing with full per-locale SEO

**Status:** accepted

We replaced mk2's cookie-based, no-URL-segment i18n (both languages served at the same URL) with idiomatic Next.js / next-intl **`[locale]` path routing**: English is the **unprefixed default** (`/`, `/case-studies`) and Hebrew is served under **`/he`** (`/he`, `/he/case-studies`). Both locales are server-rendered; the previous custom server-side translation hybrid is removed in favour of next-intl's server APIs, keeping client components to a minimum (RSC-first).

Both languages are **first-class for SEO**: each locale has its own indexable URLs, per-locale metadata and Open Graph, reciprocal `hreflang` alternates, and both appear in the sitemap.

The **visual discretion** constraint on the language toggle applies to the **on-page UI only** — the toggle is kept subtle/unobtrusive — and does **not** translate into any SEO treatment. Hebrew is indexed optimally, exactly like English; there is no `noindex` or de-amplification.

## Considered Options

- **Keep cookie / no-segment (mk2's original design)** — rejected: only one language is ever indexable, no `hreflang`, and it forces a client-side cookie swap + `router.refresh()`.
- **`[locale]` routing but `noindex` Hebrew** — rejected: the discretion is a visual/UX consideration for visitors, not an SEO decision. Hebrew is to be indexed optimally.
