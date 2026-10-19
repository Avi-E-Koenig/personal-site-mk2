/**
 * Case Studies — the site's primary proof-of-work unit.
 * Each is anonymized (no employer names) and follows the shape
 * Headline → Situation → Approach → Outcome → Stack.
 *
 * Bilingual by construction: the `en`/`he` fields are both required by the
 * type, so a Case Study can't ship half-translated.
 */

export interface CaseStudyLocaleContent {
  headline: string
  role: string
  situation: string
  approach: string
  outcome: string
}

export interface CaseStudy {
  slug: string
  featured?: boolean
  stack: string[]
  en: CaseStudyLocaleContent
  he: CaseStudyLocaleContent
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'factory-mes',
    featured: true,
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
    en: {
      headline: 'Digitized a 50-year-old factory, single-handed',
      role: 'Sole developer — end-to-end owner',
      situation:
        "A 50-year metal-cladding and CNC manufacturer ran production and inventory on manual, disconnected processes. Business data lived in a Priority ERP on SQL Server, but the production data that existed was effectively trapped — there was no way to use it to actually run the floor. There was no engineering team; I was the only developer.",
      approach:
        'Over roughly 16 months I built a Priority-ERP-integrated Manufacturing Execution System as the sole engineer: a Next.js/React management app, a real-time Vue 3 shop-floor PWA (live station monitoring, offline support, full Hebrew/RTL for factory tablets), and typed Node/Express services over SQL Server. I led a full JavaScript → TypeScript modernization, integrated CNC sheet-nesting optimization with automated write-back into the ERP, and shipped supporting services — a Python/FastAPI OCR microservice and a React Native barcode-scanner app — plus end-to-end auth/RBAC and Docker + GitHub Actions CI/CD.',
      outcome:
        'Adopted across the entire company — roughly 50 people, from management and planners to inventory managers and the shop floor (everyone but accounting). It became the single system of record that made production and inventory measurable and actionable for the first time: live order status, real inventory counts, traceability, and material/CNC visibility the business simply could not see before.',
    },
    he: {
      headline: 'דיגיטציה של מפעל בן 50 שנה, לבד',
      role: 'מפתח יחיד — אחריות מקצה לקצה',
      situation:
        'יצרן מתכת ו-CNC בן 50 שנה ניהל את הייצור והמלאי בתהליכים ידניים ומנותקים. נתוני העסק ישבו במערכת Priority ERP על SQL Server, אך נתוני הייצור שכבר נאספו היו, למעשה, לכודים — לא היה שום דרך להשתמש בהם כדי לנהל בפועל את רצפת הייצור. לא הייתה קיימת קבוצת פיתוח; הייתי המפתח היחיד.',
      approach:
        'במהלך כ-16 חודשים בניתי, כמהנדס יחיד, מערכת Manufacturing Execution System המשולבת ב-Priority ERP: אפליקציית ניהול ב-Next.js/React, PWA בזמן אמת לרצפת הייצור ב-Vue 3 (מעקב חי אחר תחנות, תמיכה במצב לא מקוון, Hebrew/RTL מלא לטאבלטים במפעל), ושירותי Node/Express מוקלדים מעל SQL Server. הובלתי מודרניזציה מלאה מ-JavaScript ל-TypeScript, שילבתי אופטימיזציית ניסור (nesting) ל-CNC עם כתיבה חוזרת אוטומטית אל ה-ERP, ופיתחתי שירותים תומכים — מיקרו-שירות OCR ב-Python/FastAPI ואפליקציית סריקת ברקוד ב-React Native — לצד אימות/הרשאות (auth/RBAC) מקצה לקצה ו-CI/CD עם Docker ו-GitHub Actions.',
      outcome:
        'המערכת אומצה בכל החברה — כ-50 אנשים, מהנהלה ומתכננים ועד מנהלי מלאי ורצפת הייצור (כולם חוץ מהנהלת חשבונות). היא הפכה למערכת הרישום היחידה שהפכה את הייצור והמלאי למדידים ולניתנים לפעולה בפעם הראשונה: סטטוס הזמנות בזמן אמת, ספירות מלאי אמיתיות, מעקב (traceability), ונראות חומרים/CNC שהעסק פשוט לא יכול היה לראות קודם.',
    },
  },
  {
    slug: 'realtime-orders',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'ElasticSearch', 'API integrations'],
    en: {
      headline: 'Kept a high-volume order platform fast under real-time load',
      role: 'Backend / Integrations Developer',
      situation:
        'A real-time order-management platform for a high-volume food-ordering business had to ingest and reconcile data from many disparate sources while staying responsive under heavy order traffic. Manual data-synchronization steps were slow and error-prone, and query/API latency directly affected the live ordering experience.',
      approach:
        'Built scalable backend services in Node.js and TypeScript, using MongoDB as the operational store and ElasticSearch for fast lookup, engineered to hold up under load. Designed integrations that kept orders and their supporting data consistent across systems in real time, profiled and optimized the hot database queries and API workflows, and automated data-synchronization tasks that had been manual.',
      outcome:
        'Lower response times on the optimized paths, and a recurring source of manual, error-prone work removed through automation.',
    },
    he: {
      headline: 'שמירה על ביצועים גבוהים בפלטפורמת הזמנות בזמן אמת',
      role: 'מפתח Backend / אינטגרציות',
      situation:
        'פלטפורמת ניהול הזמנות בזמן אמת עבור עסק הזמנות מזון בנפח גבוה נדרשה לקלוט ולתאם נתונים ממקורות רבים ושונים, תוך שמירה על זמינות תחת עומס הזמנות כבד. שלבי סנכרון נתונים ידניים היו איטיים ורגישים לטעויות, וזמני תגובה של שאילתות/API השפיעו ישירות על חוויית ההזמנה בזמן אמת.',
      approach:
        'בניתי שירותי Backend הניתנים להרחבה ב-Node.js וב-TypeScript, תוך שימוש ב-MongoDB כמאגר הנתונים התפעולי וב-ElasticSearch לחיפוש מהיר, מתוכננים לעמוד בעומס. תכננתי אינטגרציות ששמרו על עקביות ההזמנות והנתונים הנלווים בין המערכות בזמן אמת, ביצעתי פרופיילינג ואופטימיזציה לשאילתות ולתהליכי API הקריטיים, ואוטמתי משימות סנכרון נתונים שהיו ידניות.',
      outcome:
        'זמני תגובה נמוכים יותר בנתיבים שעברו אופטימיזציה, וסילוק מקור חוזר של עבודה ידנית ורגישה לטעויות באמצעות אוטומציה.',
    },
  },
  {
    slug: 'legacy-dotnet-to-node',
    stack: ['Node.js', 'Docker', 'CI/CD', 'Oracle PL/SQL', 'C#/.NET (migrated from)'],
    en: {
      headline: 'Led a national telecom off legacy C#/.NET + PL/SQL onto Node.js',
      role: 'Full-Stack Tech Lead',
      situation:
        'A national telecom operator ran core services on C#/.NET with heavy business logic locked inside Oracle PL/SQL. The tightly-coupled stored-procedure logic made services hard to change and slow to onboard new engineers onto, and the delivery process around them was dated.',
      approach:
        'As tech lead, migrated C#/.NET + Oracle PL/SQL services to Node.js — deliberately decoupling business logic out of the database rather than lifting it as-is — and standardized the stack on Node.js and Docker for reproducible builds. Introduced Agile and CI/CD to tighten the delivery loop.',
      outcome:
        'Better service performance and a codebase the team could onboard into and change more easily, on a more consistent, automated delivery pipeline.',
    },
    he: {
      headline: 'הובלת מעבר של חברת תקשורת ארצית מ-C#/.NET + PL/SQL אל Node.js',
      role: 'ראש צוות Full-Stack',
      situation:
        'ספקית תקשורת ארצית הפעילה שירותי ליבה ב-C#/.NET עם לוגיקה עסקית כבדה נעולה בתוך Oracle PL/SQL. הלוגיקה, הכבולה חזק לתוך פרוצדורות מאוחסנות, הקשתה על ביצוע שינויים בשירותים והאטה את קליטת מפתחים חדשים, ותהליך האספקה סביבם היה מיושן.',
      approach:
        'כראש צוות, הובלתי מעבר של שירותי C#/.NET ו-Oracle PL/SQL אל Node.js — תוך ניתוק מכוון של הלוגיקה העסקית ממסד הנתונים במקום העברתה כמות שהיא — ותקננתי את המחסנית סביב Node.js ו-Docker לבנייה שחוזרת על עצמה. הטמעתי Agile ו-CI/CD כדי לחזק את מעגל האספקה.',
      outcome:
        'ביצועי שירות טובים יותר ובסיס קוד שהצוות יכול היה להיכנס אליו ולשנות בקלות רבה יותר, על גבי תהליך אספקה עקבי ואוטומטי יותר.',
    },
  },
]

export const featuredCaseStudies = caseStudies.filter((c) => c.featured)

export function localizedCaseStudies(locale: string) {
  const lang = locale === 'he' ? 'he' : 'en'
  return caseStudies.map((cs) => ({
    slug: cs.slug,
    featured: cs.featured,
    stack: cs.stack,
    ...cs[lang],
  }))
}
