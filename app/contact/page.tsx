import { getTranslations } from '@/lib/i18n/translations'

export default async function Contact() {
  const t = await getTranslations('contact')

  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-section-normal">
          <h1 className="text-h1 text-text-primary font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-secondary">
            {t('body')}
          </p>
        </header>

        <div className="space-y-4">
          <div>
            <p className="text-base text-text-secondary">
              <strong className="text-text-primary">Email:</strong>{' '}
              <a href="mailto:avi@koenig.co.il" className="link">
                avi@koenig.co.il
              </a>
            </p>
          </div>
          <div>
            <p className="text-base text-text-secondary">
              <strong className="text-text-primary">LinkedIn:</strong>{' '}
              <a href="#" className="link">
                [LinkedIn Profile]
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

