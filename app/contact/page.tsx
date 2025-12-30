import type { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/translations'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-site-mk2.vercel.app'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact')
  
  const title = `${t('title')} - Avi Koenig`
  const description = t('body')
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/contact`,
      siteName: 'Avi Koenig',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

export default async function Contact() {
  const t = await getTranslations('contact')

  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-section-normal">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-secondary">
            {t('body')}
          </p>
        </header>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${t('email')}`}
              className="link text-base text-text-secondary"
              title="Send email"
            >
              {t('email')}
            </a>

            <span className="text-text-muted">|</span>

            <a
              href={t('linkedinProfile')}
              className="link text-base text-text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('linkedinLabel')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

