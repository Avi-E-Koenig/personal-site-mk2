import { getTranslations } from '@/lib/i18n/translations'

export default async function HowIWork() {
  const t = await getTranslations('howIWork')

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
          <section>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4">
              {t('understanding.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('understanding.content1')}
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('understanding.content2')}
            </p>
          </section>

          <section>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4">
              {t('behavior.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('behavior.content1')}
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('behavior.content2')}
            </p>
          </section>

          <section>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4">
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

          <section>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4">
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

          <section>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4">
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

          <section>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4">
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

          <section>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4">
              {t('adapting.title')}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('adapting.content')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

