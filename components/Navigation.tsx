'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { cn } from '@/lib/utils/cn'

export default function Navigation() {
  const t = useTranslations('nav')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/how-i-work', label: t('howIWork') },
    { href: '/experience', label: t('experience') },
    { href: '/resume', label: t('resume') },
    { href: '/contact', label: t('contact') },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="border-b border-border-default bg-background-paper">
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex items-center gap-4 md:gap-0">
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    'block px-4 py-3 rounded-md',
                    'text-text-secondary hover:text-text-primary hover:bg-background-secondary',
                    'transition-colors duration-200',
                    'text-base font-medium'
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

