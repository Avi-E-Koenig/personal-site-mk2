'use client'

import { useTranslations } from 'next-intl'

interface ContactLinksProps {
  variant?: 'footer' | 'page'
}

export default function ContactLinks({
  variant = 'page'
}: ContactLinksProps) {
  const t = useTranslations('contact')

  const phoneDigits = t('phone').replace(/[\s-]/g, '') // e.g. "+972 54-691-2072" -> "+972546912072"
  const whatsappMessage = encodeURIComponent(t('whatsappMessage'))
  const whatsappUrl = `https://wa.me/${phoneDigits.replace('+', '')}?text=${whatsappMessage}`
  const phoneUrl = `tel:${phoneDigits}`

  const linkClasses = variant === 'footer'
    ? 'link text-text-secondary hover:text-text-primary transition-colors text-sm'
    : 'link text-base text-text-secondary hover:text-text-primary transition-colors'

  const separatorClasses = variant === 'footer'
    ? 'text-text-muted hidden sm:inline'
    : 'text-text-muted'

  const containerClasses = variant === 'footer'
    ? 'flex flex-col sm:flex-row items-center justify-center gap-4'
    : 'flex flex-col gap-4'

  const links = [
    { href: t('linkedinProfile'), label: t('linkedinLabel'), title: 'LinkedIn profile', external: true },
    { href: 'https://github.com/Avi-E-Koenig', label: t('githubLabel'), title: 'GitHub profile', external: true },
    { href: whatsappUrl, label: t('whatsappLabel'), title: 'Chat on WhatsApp', external: true },
    { href: `mailto:${t('email')}`, label: `${t('emailLabel')}: ${t('email')}`, title: 'Send email' },
    { href: phoneUrl, label: `${t('phoneLabel')}: ${t('phone')}`, title: 'Call phone' },
  ]

  return (
    <div className={containerClasses}>
      {links.map((link, index) => (
        <span key={link.href} className="contents">
          {variant === 'footer' && index > 0 && <span className={separatorClasses}>|</span>}
          <a
            href={link.href}
            className={linkClasses}
            title={link.title}
            {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {variant === 'page' && <span className="text-accent-500 font-bold mr-2">{'> '}</span>}
            {link.label}
          </a>
        </span>
      ))}
    </div>
  )
}

