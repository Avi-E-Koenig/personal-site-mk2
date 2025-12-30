import type { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/translations'
import SectionHeadingMarker from '@/components/SectionHeadingMarker'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-site-mk2.vercel.app'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('experience')
  
  const title = `${t('title')} - Avi Koenig`
  const description = t('intro')
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/experience`,
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

export default async function Experience() {
  const t = await getTranslations('experience')

  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-section-normal">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary mb-4">
            {t('subtitle')}
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {t('intro')}
          </p>
        </header>

        <div className="space-y-section-tight">
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('existingSystems.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('existingSystems.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
              <li>{t('existingSystems.item1')}</li>
              <li>{t('existingSystems.item2')}</li>
              <li>{t('existingSystems.item3')}</li>
              <li>{t('existingSystems.item4')}</li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('existingSystems.role')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>{t('existingSystems.roleItem1')}</li>
              <li>{t('existingSystems.roleItem2')}</li>
              <li>{t('existingSystems.roleItem3')}</li>
            </ul>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('backendSystems.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('backendSystems.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>{t('backendSystems.item1')}</li>
              <li>{t('backendSystems.item2')}</li>
              <li>{t('backendSystems.item3')}</li>
              <li>{t('backendSystems.item4')}</li>
            </ul>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('internalTools.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('internalTools.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
              <li>{t('internalTools.item1')}</li>
              <li>{t('internalTools.item2')}</li>
              <li>{t('internalTools.item3')}</li>
              <li>{t('internalTools.item4')}</li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('internalTools.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('refactoring.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('refactoring.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
              <li>{t('refactoring.item1')}</li>
              <li>{t('refactoring.item2')}</li>
              <li>{t('refactoring.item3')}</li>
              <li>{t('refactoring.item4')}</li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('refactoring.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('constraints.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('constraints.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
              <li>{t('constraints.item1')}</li>
              <li>{t('constraints.item2')}</li>
              <li>{t('constraints.item3')}</li>
              <li>{t('constraints.item4')}</li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('constraints.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('collaboration.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('collaboration.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
              <li>{t('collaboration.item1')}</li>
              <li>{t('collaboration.item2')}</li>
              <li>{t('collaboration.item3')}</li>
              <li>{t('collaboration.item4')}</li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('collaboration.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('summary.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('summary.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
              <li>{t('summary.item1')}</li>
              <li>{t('summary.item2')}</li>
              <li>{t('summary.item3')}</li>
              <li>{t('summary.item4')}</li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('summary.closing')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
