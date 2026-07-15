import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { caseStudies } from '@/content/case-studies'
import { localeAlternates } from '@/lib/seo'

const LINKEDIN_URL = 'https://www.linkedin.com/in/avi-koenig'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  const title = 'Avi Koenig - Senior Backend-Oriented Full-Stack Developer'
  const description = t('hero.tagline')

  return {
    title,
    description,
    alternates: localeAlternates('', locale),
    openGraph: { title, description, type: 'website', siteName: 'Avi Koenig' },
    twitter: { card: 'summary', title, description },
  }
}

const stats = [
  { value: '8+', label: 'Years building production systems' },
  { value: '~50', label: 'People on the platform I built' },
  { value: '3', label: 'Database ecosystems (Oracle · MSSQL · Mongo)' },
  { value: '100%', label: 'Remote-ready' },
]

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'home' })

  return (
    <div className="section">
      <div className="container-wide">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow mb-3">{t('hero.title')}</p>
            <h1 className="text-h1 md:text-h1-md text-text-primary mb-4">{t('hero.name')}</h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mb-3">
              {t('hero.tagline')}
            </p>
            <p className="text-sm sm:text-base text-text-muted max-w-2xl mb-6">
              {t('hero.credibility')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/resume" className="btn-primary">
                Résumé
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in touch
              </Link>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="order-first md:order-none justify-self-start md:justify-self-end">
            <Image
              src="/assets/profile-pic.jpg"
              alt={t('hero.name')}
              width={180}
              height={180}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl object-cover border border-border-default shadow-card"
              priority
            />
          </div>
        </section>

        {/* Credibility stats */}
        <section className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-5">
              <div className="text-3xl font-bold text-text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Selected Work — Case Study teasers */}
        <section className="mt-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="eyebrow mb-1">Selected work</p>
              <h2 className="text-h2 md:text-h2-md text-text-primary">Case Studies</h2>
            </div>
            <Link href="/case-studies" className="link text-sm font-medium shrink-0">
              View all →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies#${cs.slug}`}
                className={`card card-hover p-6 group flex flex-col ${
                  cs.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {cs.featured && <span className="chip border-accent-500/40 text-accent-600 dark:text-accent-400">Flagship</span>}
                  <span className="text-xs font-medium text-text-muted">{cs.role}</span>
                </div>
                <h3 className="text-h3 text-text-primary group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {cs.headline}
                </h3>
                <p className="mt-2 text-sm text-text-secondary line-clamp-3">
                  {cs.featured ? cs.outcome : cs.situation}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cs.stack.slice(0, cs.featured ? 8 : 4).map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick snapshot + looking for + how I work */}
        <section className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="card p-6 md:col-span-2">
            <h2 className="text-h3 md:text-h3-md text-text-primary mb-4">{t('snapshot.title')}</h2>
            <ul className="space-y-2 text-text-secondary">
              {['snapshot.item1', 'snapshot.item2', 'snapshot.item3', 'snapshot.item4'].map((k) => (
                <li key={k} className="flex gap-2">
                  <span className="text-accent-500 mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-h3 md:text-h3-md text-text-primary mb-4">{t('lookingFor.title')}</h2>
            <ul className="space-y-2 text-text-secondary">
              {['lookingFor.item1', 'lookingFor.item2', 'lookingFor.item3'].map((k) => (
                <li key={k} className="flex gap-2">
                  <span className="text-accent-500 mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-h3 md:text-h3-md text-text-primary mb-4">{t('howIWork.title')}</h2>
            <ul className="space-y-2 text-text-secondary">
              {['howIWork.item1', 'howIWork.item2', 'howIWork.item3'].map((k) => (
                <li key={k} className="flex gap-2">
                  <span className="text-accent-500 mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
