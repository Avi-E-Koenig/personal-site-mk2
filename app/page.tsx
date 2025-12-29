import Link from 'next/link'
import { getTranslations } from '@/lib/i18n/translations'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <div className="section">
      <div className="container-content">
        {/* Hero */}
        <section className="text-center mb-section-normal">
          <h1 className="text-h1 text-text-primary font-semibold mb-4">
            {t('hero.name')}
          </h1>
          <p className="text-xl text-text-secondary mb-6">
            {t('hero.title')}
          </p>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('hero.tagline')}
          </p>
        </section>

        {/* Quick Snapshot */}
        <section className="mb-section-normal">
          <h2 className="text-h2 text-text-primary font-semibold mb-6">
            {t('snapshot.title')}
          </h2>
          <div className="space-y-4">
            <p className="text-base text-text-secondary">
              {t('snapshot.item1')}
            </p>
            <p className="text-base text-text-secondary">
              {t('snapshot.item2')}
            </p>
            <p className="text-base text-text-secondary">
              {t('snapshot.item3')}
            </p>
            <p className="text-base text-text-secondary">
              {t('snapshot.item4')}
            </p>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="mb-section-normal">
          <h2 className="text-h2 text-text-primary font-semibold mb-6">
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
          <h2 className="text-h2 text-text-primary font-semibold mb-6">
            {t('howIWork.title')}
          </h2>
          <ul className="space-y-3 list-disc list-inside text-text-secondary">
            <li>{t('howIWork.item1')}</li>
            <li>{t('howIWork.item2')}</li>
            <li>{t('howIWork.item3')}</li>
          </ul>
        </section>

        {/* CTAs */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-4">
            <Link href="/resume" className="btn-primary">
              {t('cta.resume')}
            </Link>
            <Link href="/contact" className="btn-secondary">
              {t('cta.contact')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

