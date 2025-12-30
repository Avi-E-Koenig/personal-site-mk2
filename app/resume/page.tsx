import { getTranslations } from '@/lib/i18n/translations'

export default async function Resume() {
  const t = await getTranslations('resume')

  return (
    <div className="section">
      <div className="container-content">
        <div className="bg-background-paper border border-border-default rounded-lg p-6">
          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-h2 md:text-h2-md text-text-primary font-semibold">
              {t('title')}
            </h1>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                {t('openInNewTab')}
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-primary text-center"
              >
                {t('download')}
              </a>
            </div>
          </div>
          <div className="w-full h-[60vh] sm:h-[70vh] md:h-[calc(100vh-12rem)] border border-border-default rounded-md overflow-hidden">
            <iframe
              src="/resume.pdf#toolbar=0"
              className="w-full h-full border-0"
              title={t('title')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

