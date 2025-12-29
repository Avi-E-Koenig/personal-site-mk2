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
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`
            px-3 py-1 text-sm font-medium rounded-md transition-colors
            ${
              locale === loc
                ? 'bg-accent-500 text-text-inverse'
                : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary'
            }
          `}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

