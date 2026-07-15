import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'he'],
  defaultLocale: 'en',
  // English is unprefixed (/, /case-studies); Hebrew is served under /he.
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]
