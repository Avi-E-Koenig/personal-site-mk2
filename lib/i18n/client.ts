'use client'

export const locales = ['en', 'he'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export function setLocaleCookie(locale: Locale) {
  if (typeof document !== 'undefined') {
    document.cookie = `locale=${locale}; path=/; max-age=31536000` // 1 year
  }
}

