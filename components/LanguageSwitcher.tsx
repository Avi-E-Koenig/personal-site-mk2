'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

/**
 * Deliberately discreet: a small "EN / HE" text toggle rather than a
 * prominent control. Switches locale on the current route via next-intl
 * navigation (URL-based: / ↔ /he).
 */
export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center text-sm">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && (
            <span className="text-border-accent" aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => handleLocaleChange(loc)}
            aria-current={locale === loc ? 'true' : undefined}
            aria-label={`Switch to ${loc === 'en' ? 'English' : 'Hebrew'}`}
            className={`px-2 min-h-[40px] rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
              locale === loc
                ? 'text-text-primary font-semibold'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
