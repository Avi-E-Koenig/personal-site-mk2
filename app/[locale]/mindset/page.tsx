import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import SectionHeadingMarker from '@/components/SectionHeadingMarker'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'mindset' })
  const title = `${t('title')} - Avi Koenig`
  const description = t('subtitle')

  return {
    title,
    description,
    alternates: localeAlternates('/mindset', locale),
    openGraph: { title, description, type: 'website', siteName: 'Avi Koenig' },
    twitter: { card: 'summary', title, description },
  }
}

export default async function Mindset({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'mindset' })

  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-section-normal">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary">
            {t('subtitle')}
          </p>
        </header>

        <div className="space-y-section-tight">
          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('understanding.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('understanding.content1')}
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('understanding.content2')}
            </p>
          </section>

          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('behavior.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('behavior.content1')}
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('behavior.content2')}
            </p>
          </section>

          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('refactoring.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('refactoring.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>{t('refactoring.item1')}</li>
              <li>{t('refactoring.item2')}</li>
              <li>{t('refactoring.item3')}</li>
              <li>{t('refactoring.item4')}</li>
            </ul>
          </section>

          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('ai.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('ai.content1')}
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('ai.content2')}
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('ai.content3')}
            </p>
          </section>

          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('constraints.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('constraints.content1')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
              <li>{t('constraints.item1')}</li>
              <li>{t('constraints.item2')}</li>
              <li>{t('constraints.item3')}</li>
              <li>{t('constraints.item4')}</li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('constraints.content2')}
            </p>
          </section>

          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('ownership.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('ownership.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>{t('ownership.item1')}</li>
              <li>{t('ownership.item2')}</li>
              <li>{t('ownership.item3')}</li>
            </ul>
          </section>

          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('adapting.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('adapting.content')}
            </p>
          </section>

          {/* Experience Patterns Section */}
          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('experience.title')}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {t('experience.intro')}
            </p>
          </section>

          {/* Pattern 1 */}
          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('experience.pattern1.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern1.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern1.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern1.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern1.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern1.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern1.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pattern 2 */}
          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('experience.pattern2.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern2.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern2.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern2.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern2.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern2.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern2.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pattern 3 */}
          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('experience.pattern3.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern3.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern3.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern3.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern3.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern3.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern3.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pattern 4 */}
          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('experience.pattern4.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern4.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern4.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern4.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern4.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern4.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern4.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pattern 5 */}
          <section className="card p-5 sm:p-7">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <SectionHeadingMarker />
              {t('experience.pattern5.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern5.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern5.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern5.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern5.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('experience.pattern5.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('experience.pattern5.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="card p-5 sm:p-7">
            <p className="text-lg text-text-secondary leading-relaxed">
              {t('experience.closing')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

