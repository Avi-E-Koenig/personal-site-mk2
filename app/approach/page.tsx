import type { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/translations'
import { 
  Lightbulb, 
  ChevronsLeftRight, 
  Shield, 
  TrendingUp, 
  Database, 
  Zap,
  Users,
  Target
} from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-site-mk2.vercel.app'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('approach')

  const title = `${t('title')} - Avi Koenig`
  const description = t('subtitle')

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/approach`,
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

export default async function Approach() {
  const t = await getTranslations('approach')

  const principles = [
    { key: 'principle1', icon: ChevronsLeftRight },
    { key: 'principle2', icon: Shield },
    { key: 'principle3', icon: TrendingUp },
    { key: 'principle4', icon: Target },
    { key: 'principle5', icon: Lightbulb },
    { key: 'principle6', icon: Database },
    { key: 'principle7', icon: Zap },
  ]

  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-6">
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary">
            {t('subtitle')}
          </p>
        </header>

        <div className="space-y-section-tight">
          {/* Intro Section */}
          <section className="bg-accent-50 border border-border-default rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-background-paper text-amber-600 flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-accent-500" />
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t('intro')}
              </p>
            </div>
          </section>

          {/* Core Principles */}
          <section>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6">
              {t('corePrinciples.title')}
            </h2>
            <div className="space-y-section-tight">
              {principles.map((principle, index) => {
                const Icon = principle.icon
                return (
                  <div
                    key={principle.key}
                    className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6"
                  >
                    <h3 className="text-h3 md:text-h3-md text-text-primary font-semibold mb-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent-50 text-accent-600 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span>
                        {index + 1}. {t(`corePrinciples.${principle.key}.title`)}
                      </span>
                    </h3>
                    <div className="text-base text-text-secondary leading-relaxed space-y-3">
                      <p>{t(`corePrinciples.${principle.key}.content`)}</p>
                      {t(`corePrinciples.${principle.key}.items`, { returnObjects: true }) && (
                        <ul className="list-disc list-inside space-y-2 mt-3">
                          {(t(`corePrinciples.${principle.key}.items`, { returnObjects: true }) as string[]).map(
                            (item: string, itemIndex: number) => (
                              <li key={itemIndex}>{item}</li>
                            )
                          )}
                        </ul>
                      )}
                      {t(`corePrinciples.${principle.key}.closing`) && (
                        <p>{t(`corePrinciples.${principle.key}.closing`)}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* How This Benefits Teams */}
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-50 text-accent-600 flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              {t('benefitsTeams.title')}
            </h2>
            <div className="text-base text-text-secondary leading-relaxed space-y-3">
              <p>{t('benefitsTeams.content')}</p>
              {t('benefitsTeams.items', { returnObjects: true }) && (
                <ul className="list-disc list-inside space-y-2 mt-3">
                  {(t('benefitsTeams.items', { returnObjects: true }) as string[]).map(
                    (item: string, itemIndex: number) => (
                      <li key={itemIndex}>{item}</li>
                    )
                  )}
                </ul>
              )}
            </div>
          </section>

          {/* In Short */}
          <section className="bg-background-paper border border-border-default rounded-lg p-4 sm:p-6">
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-50 text-accent-600 flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              {t('inShort.title')}
            </h2>
            <div className="text-base text-text-secondary leading-relaxed space-y-3">
              <p>{t('inShort.content')}</p>
              {t('inShort.items', { returnObjects: true }) && (
                <ul className="list-disc list-inside space-y-2 mt-3">
                  {(t('inShort.items', { returnObjects: true }) as string[]).map(
                    (item: string, itemIndex: number) => (
                      <li key={itemIndex}>{item}</li>
                    )
                  )}
                </ul>
              )}
              {t('inShort.closing') && (
                <p>{t('inShort.closing')}</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
