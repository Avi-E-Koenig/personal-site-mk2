'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Download, Mail } from 'lucide-react'
import LinkedInIcon from '@/components/LinkedInIcon'

export default function CTASection() {
  const t = useTranslations('home.cta')

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        href="/resume"
        className="btn-primary flex items-center justify-center gap-2"
      >
        <Download className="w-5 h-5" />
        {t('resume')}
      </Link>
      <Link
        href="/contact"
        className="btn-secondary flex items-center justify-center gap-2"
      >
        <Mail className="w-5 h-5" />
        {t('contact')}
      </Link>
      <a
        href="https://www.linkedin.com/in/avi-koenig/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary flex items-center justify-center gap-2"
      >
        <LinkedInIcon className="w-5 h-5 text-blue-600" />
        {t('linkedin')}
      </a>
    </div>
  )
}
