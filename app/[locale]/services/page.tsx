import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ContactLinks from '@/components/ContactLinks'
import SectionHeadingMarker from '@/components/SectionHeadingMarker'
import { localizedCaseStudies } from '@/content/case-studies'
import {
  localizedServices,
  offeringCaseStudySlugs,
  offeringOrder,
  type TitledText,
} from '@/content/services'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })
  const content = localizedServices(locale)
  const title = `${t('metaTitle')} - Avi Koenig`
  const description = content.lead

  return {
    title,
    description,
    alternates: localeAlternates('/services', locale),
    openGraph: { title, description, type: 'website', siteName: 'Avi Koenig' },
    twitter: { card: 'summary', title, description },
  }
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-h2 md:text-h2-md text-text-primary font-semibold mb-4 flex items-center gap-3">
      <SectionHeadingMarker />
      {children}
    </h2>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-text-secondary">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function TitledList({ items }: { items: TitledText[] }) {
  return (
    <ul className="space-y-3 text-text-secondary">
      {items.map((item) => (
        <li key={item.title} className="flex gap-2">
          <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
          <span>
            <strong className="text-text-primary font-semibold">{item.title}:</strong> {item.text}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default async function Services({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'services' })
  const content = localizedServices(locale)
  const caseStudyHeadlines = new Map(
    localizedCaseStudies(locale).map((cs) => [cs.slug, cs.headline])
  )

  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-section-normal">
          <p className="eyebrow mb-3">{t('eyebrow')}</p>
          <h1 className="text-h1 md:text-h1-md text-text-primary font-semibold mb-4">
            {content.headline}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary mb-4">{content.lead}</p>
          {content.intro.map((p) => (
            <p key={p} className="text-base text-text-muted leading-relaxed mb-3">
              {p}
            </p>
          ))}
        </header>

        <div className="space-y-section-tight">
          <section className="card p-5 sm:p-7">
            <SectionHeading>{t('helpWith')}</SectionHeading>
            <TitledList items={content.helpWith} />
          </section>

          <section>
            <SectionHeading>{t('offerings')}</SectionHeading>
            <div className="space-y-5">
              {offeringOrder.map((key) => {
                const offering = content.offerings[key]
                const slugs = offeringCaseStudySlugs(key)
                return (
                  <article key={key} id={key} className="card p-5 sm:p-7 scroll-mt-24">
                    <h3 className="text-h3 md:text-h3-md text-text-primary font-semibold mb-3">
                      {offering.title}
                    </h3>
                    {offering.description.map((p) => (
                      <p key={p} className="text-base text-text-secondary leading-relaxed mb-3">
                        {p}
                      </p>
                    ))}

                    <div className="mt-4 border-s-2 border-accent-500 ps-4">
                      <p className="eyebrow mb-2">{t('delivered')}</p>
                      {offering.delivered.map((p) => (
                        <p key={p} className="text-base text-text-secondary leading-relaxed mb-2">
                          {p}
                        </p>
                      ))}
                      {slugs.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {slugs.map((slug) => (
                            <li key={slug}>
                              <Link href={`/case-studies#${slug}`} className="link text-sm font-medium">
                                {t('caseStudyLink')}: {caseStudyHeadlines.get(slug)} →
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {key === 'production' && (
                      <dl className="mt-6 divide-y divide-border-default border-y border-border-default">
                        <div className="hidden md:grid md:grid-cols-[13rem_1fr] gap-4 py-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                          <dt>{t('moduleName')}</dt>
                          <dd>{t('moduleWhat')}</dd>
                        </div>
                        {content.modules.map((m) => (
                          <div key={m.title} className="grid gap-1 md:grid-cols-[13rem_1fr] md:gap-4 py-3">
                            <dt className="font-semibold text-text-primary">{m.title}</dt>
                            <dd className="text-sm text-text-secondary">{m.text}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </article>
                )
              })}
            </div>
          </section>

          <section className="card p-5 sm:p-7">
            <SectionHeading>{t('howIWork')}</SectionHeading>
            <p className="text-lg text-text-primary font-medium mb-3">{content.howIWork.lead}</p>
            <p className="text-base text-text-secondary leading-relaxed mb-4">{content.howIWork.body}</p>
            <TitledList items={content.howIWork.points} />
          </section>

          <section className="card p-5 sm:p-7">
            <SectionHeading>{t('cicd')}</SectionHeading>
            <p className="text-base text-text-secondary leading-relaxed mb-4">{content.cicd.lead}</p>
            <TitledList items={content.cicd.points} />
          </section>

          <section className="card p-5 sm:p-7">
            <SectionHeading>{t('monitoring')}</SectionHeading>
            <p className="text-base text-text-secondary leading-relaxed mb-4">{content.monitoring.lead}</p>
            <TitledList items={content.monitoring.points} />
          </section>

          <section className="card p-5 sm:p-7">
            <SectionHeading>{t('engagements')}</SectionHeading>
            <BulletList items={content.engagements} />
          </section>

          <section className="card p-5 sm:p-7 border-border-accent">
            <SectionHeading>{t('ctaTitle')}</SectionHeading>
            {content.cta.body.map((p) => (
              <p key={p} className="text-base text-text-secondary leading-relaxed mb-3">
                {p}
              </p>
            ))}
            <div className="mt-5">
              <ContactLinks variant="page" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
