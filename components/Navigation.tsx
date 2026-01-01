'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { cn } from '@/lib/utils/cn'

export default function Navigation() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/approach', label: t('approach') },
    { href: '/contact', label: t('contact') },
    { href: '/resume', label: t('resume') },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === ''
    }
    return pathname === href || pathname?.startsWith(`${href}/`)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border-default bg-background-paper">
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isResume = item.href === '/resume'
              if (isResume) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'btn-primary text-sm px-4',
                      'transition-all duration-200',
                      isActive(item.href) && 'ring-2 ring-accent-300'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium',
                    'transition-colors duration-200',
                    'relative',
                    isActive(item.href)
                      ? 'text-text-primary font-semibold'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {item.label}
                  <span 
                    className={cn(
                      'absolute bottom-0 left-0 h-0.5 bg-accent-500 transition-all duration-300 ease-in-out',
                      isActive(item.href) ? 'w-full' : 'w-0'
                    )} 
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex items-center justify-between w-full md:w-auto md:justify-end md:gap-6 gap-4">
            <LanguageSwitcher />
            
            {/* Hamburger Menu Button (Mobile) */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border-default">
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const isResume = item.href === '/resume'
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      'block px-4 py-3 rounded-md',
                      'transition-colors duration-200',
                      'text-base font-medium',
                      isResume
                        ? 'btn-primary text-center'
                        : isActive(item.href)
                        ? 'text-text-primary font-semibold bg-background-secondary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

