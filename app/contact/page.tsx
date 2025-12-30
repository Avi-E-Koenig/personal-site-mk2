import type { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/translations'
import ContactLinks from '@/components/ContactLinks'

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
          <ContactLinks variant="page" />
        </div>
      </div>
    </div>
  )
}

