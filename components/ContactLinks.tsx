'use client'

import { useTranslations } from 'next-intl'

interface ContactLinksProps {
  variant?: 'footer' | 'page'
}

export default function ContactLinks({ 
  variant = 'page'
}: ContactLinksProps) {
  const t = useTranslations('contact')

  const whatsappMessage = encodeURIComponent(t('whatsappMessage'))
  const whatsappUrl = `https://wa.me/972546912072?text=${whatsappMessage}`
  const phoneUrl = `tel:${t('phone').replace(/\s|-/g, '')}`

  const linkClasses = variant === 'footer' 
    ? 'link text-text-secondary hover:text-text-primary transition-colors text-sm'
    : 'link text-base text-text-secondary'

  const separatorClasses = variant === 'footer'
    ? 'text-text-muted hidden sm:inline'
    : 'text-text-muted'

  const containerClasses = variant === 'footer'
    ? 'flex flex-col sm:flex-row items-center justify-center gap-4'
    : 'flex flex-wrap items-center gap-4'

  const links = [
    { href: `mailto:${t('email')}`, label: t('email'), title: 'Send email' },
    { href: t('linkedinProfile'), label: t('linkedinLabel'), title: 'LinkedIn profile', external: true },
    { href: whatsappUrl, label: t('whatsappLabel'), title: 'Chat on WhatsApp', external: true },
    { href: phoneUrl, label: t('phone'), title: 'Call phone', ltr: true },
  ]

  return (
    <div className={containerClasses}>
      {links.map((link, index) => (
        <span key={link.href} className="contents">
          {index > 0 && <span className={separatorClasses}>|</span>}
          <a
            href={link.href}
            className={linkClasses}
            title={link.title}
            dir={link.ltr ? 'ltr' : undefined}
            {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {link.label}
          </a>
        </span>
      ))}
    </div>
  )
}

