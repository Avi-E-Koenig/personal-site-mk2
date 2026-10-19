import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ContactLinks from '@/components/ContactLinks'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  const title = `${t('title')} - Avi Koenig`
  const description = t('body')

  return {
    title,
    description,
    alternates: localeAlternates('/contact', locale),
    openGraph: { title, description, type: 'website', siteName: 'Avi Koenig' },
    twitter: { card: 'summary', title, description },
  }
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-10">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-secondary whitespace-pre-line">{t('body')}</p>
        </header>

        <div className="card p-6 sm:p-8">
          <ContactLinks variant="page" />
        </div>
      </div>
    </div>
  )
}
