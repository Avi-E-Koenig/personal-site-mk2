'use client'

import { setLocaleCookie, locales, type Locale } from '@/lib/i18n/client'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const locale = useLocale()

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale) return
    
    setLocaleCookie(newLocale)
    // Use full page reload for cookie-based i18n to ensure server components re-render
    window.location.reload()
  }

  return (
    <div className="flex items-center gap-2 rtl:gap-reverse">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`
            px-4 py-2 text-sm font-medium rounded-md transition-colors
            min-h-[44px] min-w-[44px]
            ${
              locale === loc
                ? 'bg-accent-500 text-text-inverse font-semibold ring-2 ring-accent-500 ring-offset-2 ring-offset-background-primary'
                : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary'
            }
          `}
          aria-label={`Switch to ${loc === 'en' ? 'English' : 'Hebrew'}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

