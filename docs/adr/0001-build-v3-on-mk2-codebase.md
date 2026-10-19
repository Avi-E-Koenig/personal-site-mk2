# Build v3 on the personal-site-mk2 codebase; treat the domain as portable

**Status:** accepted

We chose `personal-site-mk2` as the base for the v3 redesign over `introSite` (which was already deployed at koenig.co.il). mk2 holds the expensive, hard-to-recreate assets — complete bilingual EN/HE content with RTL, per-page SEO metadata, positioning docs, and a fuller information architecture — whereas introSite's only advantages were a handful of self-contained visual components (particles, typewriter, parallax tilt, GitHub contribution calendar) and its existing domain link. Porting those components into mk2 costs a few hours; rebuilding mk2's content, i18n, and SEO into introSite would be expensive and error-prone.

The `koenig.co.il` domain is an account-level Vercel domain that can be reassigned to any project in the account in ~2 minutes with no DNS change or downtime, so it is not a reason to choose a codebase. At cutover we reassign `koenig.co.il` to the mk2 project and retire the `intro-site` project.

## Considered Options

- **introSite as base** — rejected: near-empty content, no i18n, default SEO; the domain advantage is negated by domain portability.
- **Fresh repo from scratch** — rejected: discards mk2's content and i18n for no benefit; both repos are already on the same modern stack.
