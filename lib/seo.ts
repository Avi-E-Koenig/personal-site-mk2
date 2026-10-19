export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-site-mk2.vercel.app'

/**
 * Builds canonical + hreflang alternates for a route.
 * `path` is the locale-agnostic pathname ('' for home, '/case-studies', …).
 * English lives at the root, Hebrew under /he — both fully indexed.
 */
export function localeAlternates(path: string, locale: string) {
  const enUrl = `${baseUrl}${path}`
  const heUrl = `${baseUrl}/he${path}`
  return {
    canonical: locale === 'he' ? heUrl : enUrl,
    languages: {
      en: enUrl,
      he: heUrl,
      'x-default': enUrl,
    },
  }
}
