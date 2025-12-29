import Link from 'next/link'
import { getTranslations } from '@/lib/i18n/translations'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <div className="section">
      <div className="container-content">
        {/* Hero */}
        <section className="text-center mb-section-normal">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {t('hero.name')}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary mb-6">
            {t('hero.title')}
          </p>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto px-4 sm:px-0">
            {t('hero.tagline')}
          </p>
        </section>

        {/* Quick Snapshot */}
        <section className="mb-section-normal">
          <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6">
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
          <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6">
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
          <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6">
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link href="/resume" className="btn-primary">
              {t('cta.resume')}
            </Link>
            <Link href="/contact" className="btn-secondary">
              {t('cta.contact')}
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/avi-koenig/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-text-secondary hover:text-text-primary transition-colors"
            >
              {t('cta.linkedin')}
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

