import type { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/translations'
import SectionHeadingMarker from '@/components/SectionHeadingMarker'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-site-mk2.vercel.app'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('home')
  
  const title = 'Avi Koenig - Senior Backend-Oriented Full-Stack Developer'
  const description = t('hero.tagline')
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: baseUrl,
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

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <div className="section">
      <div className="container-content">
        {/* Hero */}
        <section className="mb-6">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-2">
            {t('hero.name')}
          </h1>
          <p className="text-lg sm:text-xl text-accent-500 mb-3 font-bold">
            {t('hero.title')}
          </p>
          <p className="text-sm sm:text-base text-text-muted max-w-2xl px-4 sm:px-0 mt-4">
            {t('hero.tagline')}
          </p>
          <p className="text-sm sm:text-base text-text-muted max-w-2xl px-4 sm:px-0 mt-4">
            {t('hero.credibility')}
          </p>
        </section>

        <div className="h-px w-full bg-border-default my-6" />

        {/* Quick Snapshot */}
        <section className="mb-section-normal">
          <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6 flex items-center gap-3">
            <SectionHeadingMarker />
            {t('snapshot.title')}
          </h2>
          <div className="space-y-4">
            {[
              { key: 'snapshot.item1', splitAt: '(' },
              { key: 'snapshot.item2', splitAt: ':' },
              { key: 'snapshot.item3', splitAt: ':' },
              { key: 'snapshot.item4', splitAt: ':' },
            ].map((item, idx) => {
              const text = t(item.key)
              const splitIndex = text.indexOf(item.splitAt)
              if (splitIndex === -1) {
                return (
                  <p key={idx} className="text-base text-text-secondary">
                    {text}
                  </p>
                )
              }
              const category = text.substring(0, splitIndex + (item.splitAt === ':' ? 1 : 0)).trim()
              const content = text.substring(splitIndex + (item.splitAt === ':' ? 1 : 0)).trim()
              return (
                <p key={idx} className="text-base text-text-secondary">
                  <span className="font-medium text-text-primary">{category}</span>{' '}
                  <span>{content}</span>
                </p>
              )
            })}
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="mb-section-normal">
          <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6 flex items-center gap-3">
            <SectionHeadingMarker />
            {t('lookingFor.title')}
          </h2>
          <ul className="space-y-3 list-disc list-inside text-text-secondary">
            <li>{t('lookingFor.item1')}</li>
            <li>{t('lookingFor.item2')}</li>
            <li>{t('lookingFor.item3')}</li>
          </ul>
        </section>

        {/* How I Work Summary */}
        <section className="mb-section-normal">
          <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6 flex items-center gap-3">
            <SectionHeadingMarker />
            {t('howIWork.title')}
          </h2>
          <ul className="space-y-3 list-disc list-inside text-text-secondary">
            <li>{t('howIWork.item1')}</li>
            <li>{t('howIWork.item2')}</li>
            <li>{t('howIWork.item3')}</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

