'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Linkedin, Github, MessageCircle, Mail, Phone } from 'lucide-react'

interface ContactLinksProps {
  variant?: 'footer' | 'page'
}

export default function ContactLinks({
  variant = 'page'
}: ContactLinksProps) {
  const t = useTranslations('contact')
  const locale = useLocale()
  const isLTR = locale === 'en'

  const phoneNumber = isLTR ? '+972546912070' : '0546912070'

  const whatsappMessage = encodeURIComponent(t('whatsappMessage'))
  const whatsappUrl = `https://wa.me/972546912072?text=${whatsappMessage}`
  const phoneUrl = `tel:${t('phone').replace(/\s|-/g, '')}`

  const links = [
    { 
      href: t('linkedinProfile'), 
      label: t('linkedinLabel'), 
      value: 'LinkedIn',
      title: 'LinkedIn profile', 
      external: true,
      icon: Linkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    { 
      href: 'https://github.com/Avi-E-Koenig', 
      label: t('githubLabel'), 
      value: 'GitHub',
      title: 'GitHub profile', 
      external: true,
      icon: Github,
      color: 'text-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
    },
    { 
      href: whatsappUrl, 
      label: t('whatsappLabel'), 
      value: 'WhatsApp',
      title: 'Chat on WhatsApp', 
      external: true,
      icon: MessageCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    { 
      href: `mailto:${t('email')}`, 
      label: t('emailLabel'), 
      value: t('email'),
      title: 'Send email',
      icon: Mail,
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
    },
    { 
      href: phoneUrl, 
      label: t('phoneLabel'), 
      value: phoneNumber,
      title: 'Call phone',
      icon: Phone,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ]

  // Footer variant - simple links
  if (variant === 'footer') {
    const linkClasses = 'link text-text-secondary hover:text-text-primary transition-colors text-sm'
    const separatorClasses = 'text-text-muted hidden sm:inline'

    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {links.map((link, index) => (
          <span key={link.href} className="contents">
            {index > 0 && <span className={separatorClasses}>|</span>}
            <a
              href={link.href}
              className={linkClasses}
              title={link.title}
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    )
  }

  // Page variant - visual cards
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.href}
            href={link.href}
            title={link.title}
            className={`
              ${link.bgColor} ${link.borderColor}
              border rounded-lg p-5
              transition-all duration-200
              hover:shadow-lg hover:scale-[1.02]
              group
            `}
            {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <div className="flex items-center gap-4">
              <div className={`
                ${link.color}
                p-3 rounded-lg bg-background-paper
                group-hover:scale-110 transition-transform
              `}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-muted mb-1">
                  {link.label}
                </p>
                <p className="text-base font-semibold text-text-primary group-hover:text-accent-600 transition-colors">
                  {link.value}
                </p>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

