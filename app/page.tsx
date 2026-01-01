import type { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/translations'
import TechStack from '@/components/TechStack'
import MetricsSection from '@/components/MetricsSection'
import CTASection from '@/components/CTASection'
import GitHubShowcase from '@/components/GitHubShowcase'
import { Search, Workflow, CheckCircle2, Code } from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-site-mk2.vercel.app'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('home')

  const title = 'Avi Koenig - Senior Backend-Oriented Full-Stack Developer'
  const description = t('hero.tagline')

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: baseUrl,
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

export default async function Home() {
  const t = await getTranslations('home')

  // Format credibility text using i18n sub-messages with bold formatting
  const formatCredibilityText = () => {
    const parts = [
      { text: t('hero.credibility.years'), bold: true },
      { text: t('hero.credibility.connector1'), bold: false },
      { text: t('hero.credibility.product'), bold: true },
      { text: t('hero.credibility.connector2'), bold: false },
      { text: t('hero.credibility.consulting'), bold: true },
      { text: t('hero.credibility.connector3'), bold: false },
      { text: t('hero.credibility.internalSystems'), bold: true },
      { text: t('hero.credibility.connector4'), bold: false },
      { text: t('hero.credibility.legacyModernization'), bold: true },
      { text: t('hero.credibility.end'), bold: false },
    ]

    return parts.map((part, index) => {
      return part.bold ? (
        <strong className="text-accent-500" key={index}>{part.text}</strong>
      ) : (
        <span key={index}>{part.text}</span>
      )
    })
  }

  return (
    <div className="section">
      <div className="container-content">
        {/* Hero */}
        <section className="mb-12">
          <div className="max-w-3xl">

            <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-3">
              {t('hero.name')}
            </h1>
            <p className="text-lg sm:text-xl text-accent-500 mb-5 font-bold">
              {t('hero.title')}
            </p>
            <p className="text-base sm:text-lg text-text-primary max-w-2xl font-medium leading-relaxed mb-4">
              {t('hero.tagline')}
            </p>
            <p className="text-base sm:text-lg text-text-primary max-w-2xl font-medium leading-relaxed mb-6">
              {formatCredibilityText()}
            </p>
            <CTASection />
          </div>
        </section>

        <div className="h-px w-full bg-border-default my-8" />

        {/* Metrics Section */}
        <section className="mb-section-normal">
          <MetricsSection />
        </section>

        <div className="h-px w-full bg-border-default my-8" />

        {/* Quick Snapshot */}
        <section className="mb-section-normal">
          <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6 flex items-center gap-3">
            {t('snapshot.title')}
          </h2>
          <TechStack />
        </section>

        {/* What I'm Looking For */}
        <section className="mb-section-normal">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
              <Search className="w-6 h-6" />
            </div>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold flex items-center gap-3">
              {t('lookingFor.title')}
            </h2>
          </div>
          <div className="bg-background-paper border border-border-default rounded-lg p-6">
            <ul className="space-y-3 list-none text-text-secondary">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{t('lookingFor.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{t('lookingFor.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{t('lookingFor.item3')}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How I Work Summary */}
        <section className="mb-section-normal">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 rounded-lg bg-green-50 text-green-600 flex-shrink-0">
              <Workflow className="w-6 h-6" />
            </div>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold flex items-center gap-3">
              {t('howIWork.title')}
            </h2>
          </div>
          <div className="bg-background-paper border border-border-default rounded-lg p-6">
            <ul className="space-y-3 list-none text-text-secondary">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{t('howIWork.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{t('howIWork.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{t('howIWork.item3')}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* GitHub Showcase */}
        <section className="mb-section-normal">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 rounded-lg bg-gray-50 text-gray-600 flex-shrink-0">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold flex items-center gap-3">
              {t('githubShowcase.title')}
            </h2>
          </div>
          <GitHubShowcase />
        </section>
      </div>
    </div>
  )
}

