import type { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/translations'
import { 
  Server, 
  Database, 
  Briefcase, 
  RefreshCw, 
  AlertCircle, 
  Users, 
  CheckCircle2,
  Github
} from 'lucide-react'

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
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-accent-50 text-accent-600 flex-shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                  {t('existingSystems.title')}
                </h2>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('existingSystems.intro')}
            </p>
            <ul className="list-none space-y-2 text-text-secondary mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{t('existingSystems.item1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{t('existingSystems.item2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{t('existingSystems.item3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{t('existingSystems.item4')}</span>
              </li>
            </ul>
            <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded-r-lg mb-4">
              <p className="text-sm font-semibold text-accent-900 mb-2">
                {t('existingSystems.role')}
              </p>
              <ul className="list-none space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 font-bold">•</span>
                  <span>{t('existingSystems.roleItem1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 font-bold">•</span>
                  <span>{t('existingSystems.roleItem2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 font-bold">•</span>
                  <span>{t('existingSystems.roleItem3')}</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                  {t('backendSystems.title')}
                </h2>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('backendSystems.intro')}
            </p>
            <ul className="list-none space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{t('backendSystems.item1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{t('backendSystems.item2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{t('backendSystems.item3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{t('backendSystems.item4')}</span>
              </li>
            </ul>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-green-50 text-green-600 flex-shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                  {t('internalTools.title')}
                </h2>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('internalTools.intro')}
            </p>
            <ul className="list-none space-y-2 text-text-secondary mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{t('internalTools.item1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{t('internalTools.item2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{t('internalTools.item3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{t('internalTools.item4')}</span>
              </li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('internalTools.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600 flex-shrink-0">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                  {t('refactoring.title')}
                </h2>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('refactoring.intro')}
            </p>
            <ul className="list-none space-y-2 text-text-secondary mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>{t('refactoring.item1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>{t('refactoring.item2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>{t('refactoring.item3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>{t('refactoring.item4')}</span>
              </li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('refactoring.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-orange-50 text-orange-600 flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                  {t('constraints.title')}
                </h2>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('constraints.intro')}
            </p>
            <ul className="list-none space-y-2 text-text-secondary mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{t('constraints.item1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{t('constraints.item2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{t('constraints.item3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{t('constraints.item4')}</span>
              </li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('constraints.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                  {t('collaboration.title')}
                </h2>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('collaboration.intro')}
            </p>
            <ul className="list-none space-y-2 text-text-secondary mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>{t('collaboration.item1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>{t('collaboration.item2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>{t('collaboration.item3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>{t('collaboration.item4')}</span>
              </li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('collaboration.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-accent-50 text-accent-600 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                  {t('summary.title')}
                </h2>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {t('summary.intro')}
            </p>
            <ul className="list-none space-y-2 text-text-secondary mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{t('summary.item1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{t('summary.item2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{t('summary.item3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{t('summary.item4')}</span>
              </li>
            </ul>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('summary.closing')}
            </p>
          </section>

          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-gray-50 text-gray-600 flex-shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                  {t('github.title')}
                </h2>
              </div>
            </div>
            <p className="text-base text-text-secondary leading-relaxed">
              {t('github.text')}{' '}
              <a
                href="https://github.com/Avi-E-Koenig"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-accent-500 hover:text-accent-600 font-semibold"
              >
                {t('github.linkText')}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
