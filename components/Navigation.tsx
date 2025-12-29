'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { cn } from '@/lib/utils/cn'

export default function Navigation() {
  const t = useTranslations('nav')

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/how-i-work', label: t('howIWork') },
    { href: '/experience', label: t('experience') },
    { href: '/resume', label: t('resume') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <nav className="border-b border-border-default bg-background-paper">
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-text-secondary hover:text-text-primary',
                  'transition-colors duration-200',
                  'text-sm font-medium'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

