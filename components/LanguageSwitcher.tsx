'use client'

import { setLocaleCookie, locales, type Locale } from '@/lib/i18n/client'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale) return
    
    setLocaleCookie(newLocale)
    // Refresh server components without full page reload
    router.refresh()
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

