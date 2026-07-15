import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { caseStudies } from '@/content/case-studies'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const title = 'Case Studies — Avi Koenig'
  const description =
    'Selected, anonymized case studies: building and safely evolving production systems — from a factory-wide MES to legacy modernization and real-time platforms.'
  return {
    title,
    description,
    alternates: localeAlternates('/case-studies', locale),
    openGraph: { title, description, type: 'website', siteName: 'Avi Koenig' },
    twitter: { card: 'summary', title },
  }
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-1.5">{label}</p>
      <p className="text-text-secondary leading-relaxed">{children}</p>
    </div>
  )
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <div className="section">
      <div className="container-content">
        <header className="mb-10">
          <p className="eyebrow mb-2">Selected work</p>
          <h1 className="text-h1 md:text-h1-md text-text-primary mb-3">Case Studies</h1>
          <p className="text-text-secondary max-w-2xl">
            A few representative engagements. All anonymized — described by the type of system and
            the work, not the client. Each follows the same shape: the situation, what I did, and
            the outcome.
          </p>
        </header>

        <div className="space-y-6">
          {caseStudies.map((cs) => (
            <article
              key={cs.slug}
              id={cs.slug}
              className="card p-6 sm:p-8 scroll-mt-24"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {cs.featured && (
                  <span className="chip border-accent-500/40 text-accent-600 dark:text-accent-400">
                    Flagship
                  </span>
                )}
                <span className="text-xs font-medium text-text-muted">{cs.role}</span>
                {cs.provisional && (
                  <span className="chip" title="Details still being finalized">
                    Draft
                  </span>
                )}
              </div>

              <h2 className="text-h2 md:text-h2-md text-text-primary mb-6">{cs.headline}</h2>

              <div className="space-y-5">
                <Field label="Situation">{cs.situation}</Field>
                <Field label="Approach">{cs.approach}</Field>
                <Field label="Outcome">{cs.outcome}</Field>
              </div>

              <div className="mt-6 pt-5 border-t border-border-subtle flex flex-wrap gap-1.5">
                {cs.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
