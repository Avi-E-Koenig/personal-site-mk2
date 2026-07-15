'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'
import { cn } from '@/lib/utils/cn'

export default function Navigation() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/case-studies', label: t('caseStudies') },
    { href: '/mindset', label: t('mindset') },
    { href: '/resume', label: t('resume') },
    { href: '/contact', label: t('contact') },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === ''
    }
    return pathname === href || pathname?.startsWith(`${href}/`)
  }

  const toggleMenu = () => setIsMenuOpen((v) => !v)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border-default bg-background-paper/90 backdrop-blur supports-[backdrop-filter]:bg-background-paper/70">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <Link href="/" className="font-semibold text-text-primary tracking-tight shrink-0" onClick={closeMenu}>
            Avi Koenig
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm transition-colors duration-200',
                  isActive(item.href)
                    ? 'text-text-primary font-semibold'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-accent-500 transition-all duration-300 ease-in-out',
                    isActive(item.href) ? 'w-full' : 'w-0'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />

            {/* Hamburger (mobile) */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border-default">
            <div className="py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    'block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200',
                    isActive(item.href)
                      ? 'text-text-primary font-semibold bg-background-secondary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
