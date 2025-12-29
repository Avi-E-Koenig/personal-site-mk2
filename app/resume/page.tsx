import { getTranslations } from '@/lib/i18n/translations'

export default async function Resume() {
  const t = await getTranslations('resume')

  return (
    <div className="section">
      <div className="container-content">
        <div className="bg-background-paper border border-border-default rounded-lg p-6">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-h2 text-text-primary font-semibold">
              {t('title')}
            </h1>
            <a
              href="/resume.pdf"
              download
              className="btn-primary"
            >
              {t('download')}
            </a>
          </div>
          <div className="w-full h-[calc(100vh-12rem)] border border-border-default rounded-md overflow-hidden">
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

