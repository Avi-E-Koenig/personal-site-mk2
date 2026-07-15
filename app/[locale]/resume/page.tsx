import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'resume' })
  const title = `${t('title')} - Avi Koenig`
  const description =
    'Resume and professional experience of Avi Koenig, Senior Backend-Oriented Full-Stack Developer.'

  return {
    title,
    description,
    alternates: localeAlternates('/resume', locale),
    openGraph: { title, description, type: 'website', siteName: 'Avi Koenig' },
    twitter: { card: 'summary', title, description },
  }
}

export default async function Resume({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'resume' })

  return (
    <div className="section">
      <div className="container-content">
        <div className="card p-4 sm:p-6">
          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-h2 md:text-h2-md text-text-primary font-semibold">{t('title')}</h1>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                {t('openInNewTab')}
              </a>
              <a href="/resume.pdf" download className="btn-primary text-center">
                {t('download')}
              </a>
            </div>
          </div>
          <div className="w-full h-[60vh] sm:h-[70vh] md:h-[calc(100vh-12rem)] border border-border-default rounded-md overflow-hidden">
            <iframe src="/resume.pdf#toolbar=0" className="w-full h-full border-0" title={t('title')} />
          </div>
        </div>
      </div>
    </div>
  )
}
