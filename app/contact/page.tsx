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
        <header className="mb-10">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-secondary whitespace-pre-line leading-relaxed mb-6">
            {t('body')}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-accent-700">
              Usually respond within 24 hours
            </span>
          </div>
        </header>

        <div className="space-y-6">
          <ContactLinks variant="page" />
        </div>
      </div>
    </div>
  )
}

