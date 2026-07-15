/**
 * Case Studies — the site's primary proof-of-work unit.
 * Each is anonymized (no employer names) and follows the shape
 * Headline → Situation → Approach → Outcome → Stack.
 *
 * NOTE (Milestone 1): content is English-only for now. Hebrew translations
 * are intentionally deferred until Avi has fact-checked the English — no point
 * translating provisional copy. `provisional: true` marks studies whose
 * details/outcomes still need Avi's confirmation (esp. metrics).
 */

export interface CaseStudy {
  slug: string
  featured?: boolean
  provisional?: boolean
  headline: string
  role: string
  situation: string
  approach: string
  outcome: string
  stack: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'factory-mes',
    featured: true,
    headline: 'Digitized a 50-year-old factory, single-handed',
    role: 'Sole developer — end-to-end owner',
    situation:
      "A 50-year metal-cladding and CNC manufacturer ran production and inventory on manual, disconnected processes. Business data lived in a Priority ERP on SQL Server, but the production data that existed was effectively trapped — there was no way to use it to actually run the floor. There was no engineering team; I was the only developer.",
    approach:
      'Over roughly 16 months I built a Priority-ERP-integrated Manufacturing Execution System as the sole engineer: a Next.js/React management app, a real-time Vue 3 shop-floor PWA (live station monitoring, offline support, full Hebrew/RTL for factory tablets), and typed Node/Express services over SQL Server. I led a full JavaScript → TypeScript modernization, integrated CNC sheet-nesting optimization with automated write-back into the ERP, and shipped supporting services — a Python/FastAPI OCR microservice and a React Native barcode-scanner app — plus end-to-end auth/RBAC and Docker + GitHub Actions CI/CD.',
    outcome:
      'Adopted across the entire company — roughly 50 people, from management and planners to inventory managers and the shop floor (everyone but accounting). It became the single system of record that made production and inventory measurable and actionable for the first time: live order status, real inventory counts, traceability, and material/CNC visibility the business simply could not see before.',
    stack: [
      'Next.js',
      'React',
      'Vue 3',
      'Node/Express',
      'TypeScript',
      'MS SQL Server',
      'Priority ERP',
      'Python/FastAPI',
      'React Native',
      'Docker',
    ],
  },
  {
    slug: 'realtime-orders',
    provisional: true,
    headline: 'Kept a high-volume order platform fast under real-time load',
    role: 'Backend / Integrations Developer',
    situation:
      'A real-time order-management platform for a high-volume food-ordering business had to ingest and reconcile data from many disparate sources while staying responsive under heavy order traffic. Manual data-synchronization steps were slow and error-prone, and query/API latency directly affected the live ordering experience.',
    approach:
      'Built scalable backend services in Node.js and TypeScript, using MongoDB as the operational store and ElasticSearch for fast lookup, engineered to hold up under load. Designed integrations that kept orders and their supporting data consistent across systems in real time, profiled and optimized the hot database queries and API workflows, and automated data-synchronization tasks that had been manual.',
    outcome:
      'Lower response times on the optimized paths and a recurring source of manual, error-prone work removed through automation. (Provisional — concrete figures pending confirmation.)',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'ElasticSearch', 'API integrations'],
  },
  {
    slug: 'legacy-dotnet-to-node',
    provisional: true,
    headline: 'Led a national telecom off legacy C#/.NET + PL/SQL onto Node.js',
    role: 'Full-Stack Tech Lead',
    situation:
      'A national telecom operator ran core services on C#/.NET with heavy business logic locked inside Oracle PL/SQL. The tightly-coupled stored-procedure logic made services hard to change and slow to onboard new engineers onto, and the delivery process around them was dated.',
    approach:
      'As tech lead, migrated C#/.NET + Oracle PL/SQL services to Node.js — deliberately decoupling business logic out of the database rather than lifting it as-is — and standardized the stack on Node.js and Docker for reproducible builds. Introduced Agile and CI/CD to tighten the delivery loop.',
    outcome:
      'Better service performance and a codebase the team could onboard into and change more easily, on a more consistent, automated delivery pipeline. (Provisional — scope and figures pending confirmation.)',
    stack: ['Node.js', 'Docker', 'CI/CD', 'Oracle PL/SQL', 'C#/.NET (migrated from)'],
  },
]

export const featuredCaseStudies = caseStudies.filter((c) => c.featured)
