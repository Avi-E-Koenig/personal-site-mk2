import { getTranslations } from '@/lib/i18n/translations'

export default async function Experience() {
  const t = await getTranslations('experience')

  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-section-normal">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {t('intro')}
          </p>
        </header>

        <div className="space-y-section-tight">
          {/* Pattern 1 */}
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h3 md:text-h3-md text-text-primary font-semibold mb-4">
              {t('pattern1.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern1.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern1.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern1.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern1.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern1.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern1.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pattern 2 */}
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h3 md:text-h3-md text-text-primary font-semibold mb-4">
              {t('pattern2.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern2.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern2.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern2.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern2.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern2.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern2.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pattern 3 */}
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h3 md:text-h3-md text-text-primary font-semibold mb-4">
              {t('pattern3.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern3.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern3.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern3.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern3.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern3.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern3.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pattern 4 */}
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h3 md:text-h3-md text-text-primary font-semibold mb-4">
              {t('pattern4.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern4.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern4.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern4.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern4.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern4.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern4.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pattern 5 */}
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h3 md:text-h3-md text-text-primary font-semibold mb-4">
              {t('pattern5.title')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern5.situation.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern5.situation.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern5.approach.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern5.approach.content')}
                </p>
              </div>
              <div>
                <h3 className="text-h4 md:text-h4-md text-text-primary font-semibold mb-2">
                  {t('pattern5.why.title')}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t('pattern5.why.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="mt-section-normal">
            <p className="text-lg text-text-secondary leading-relaxed">
              {t('closing')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

