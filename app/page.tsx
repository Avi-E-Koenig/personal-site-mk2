import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from '@/lib/i18n/translations'
import SectionHeadingMarker from '@/components/SectionHeadingMarker'
import TechStack from '@/components/TechStack'
import MetricsSection from '@/components/MetricsSection'
import CTASection from '@/components/CTASection'
import GitHubShowcase from '@/components/GitHubShowcase'
import { Award, Search, Workflow, CheckCircle2 } from 'lucide-react'

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

  return (
    <div className="section">
      <div className="container-content">
        {/* Hero */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div className="flex-shrink-0 relative">
              <Image
                src="/assets/profile-pic.jpg"
                alt={t('hero.name')}
                width={160}
                height={160}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-accent-200 shadow-xl ring-4 ring-accent-50"
                priority
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 border border-accent-200 rounded-full">
                  <Award className="w-4 h-4 text-accent-600" />
                  <span className="text-sm font-semibold text-accent-700">
                    {t('hero.credibility')}
                  </span>
                </div>
              </div>
              <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-2">
                {t('hero.name')}
              </h1>
              <p className="text-lg sm:text-xl text-accent-500 mb-4 font-bold">
                {t('hero.title')}
              </p>
              <p className="text-base sm:text-lg text-text-primary max-w-2xl font-medium leading-relaxed mb-4">
                {t('hero.tagline')}
              </p>
              <CTASection />
            </div>
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
            <SectionHeadingMarker />
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
              <SectionHeadingMarker />
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
              <SectionHeadingMarker />
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
          <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-6 flex items-center gap-3">
            <SectionHeadingMarker />
            Code & Projects
          </h2>
          <GitHubShowcase />
        </section>
      </div>
    </div>
  )
}

