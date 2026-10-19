/**
 * Services — what Avi offers prospective clients, each backed where possible
 * by a Case Study. Sourced from the calling card (ai-context/calling-card-v3.md).
 *
 * Bilingual by construction: the `en`/`he` fields are both required by the
 * type, so the Services page can't ship half-translated.
 */

import { caseStudies } from './case-studies'

export interface TitledText {
  title: string
  text: string
}

export interface Offering {
  title: string
  description: string[]
  delivered: string[]
}

export interface ServicesLocaleContent {
  headline: string
  lead: string
  intro: string[]
  helpWith: TitledText[]
  offerings: {
    production: Offering
    ai: Offering
    integrations: Offering
    training: Offering
  }
  modules: TitledText[]
  howIWork: { lead: string; body: string; points: TitledText[] }
  cicd: { lead: string; points: TitledText[] }
  monitoring: { lead: string; points: TitledText[] }
  engagements: string[]
  cta: { body: string[] }
}

type OfferingKey = keyof ServicesLocaleContent['offerings']

/** Case Studies that back each offering, linked from its "Delivered" note. */
const offeringCaseStudies: Record<OfferingKey, string[]> = {
  production: ['factory-mes'],
  ai: [],
  integrations: ['realtime-orders', 'legacy-dotnet-to-node'],
  training: [],
}

export const offeringOrder: OfferingKey[] = ['production', 'ai', 'integrations', 'training']

export const services: { en: ServicesLocaleContent; he: ServicesLocaleContent } = {
  en: {
    headline: 'Custom software, integrations & practical AI for your business',
    lead: 'I help businesses replace manual work, connect disconnected systems, and build software their teams can rely on every day.',
    intro: [
      "I'm a backend-focused full-stack developer with 8+ years of experience building and maintaining production software. I take projects all the way from understanding the business problem to architecture, development, deployment and ongoing support.",
      "I've worked in manufacturing, telecom, financial systems, order management and SaaS. I'm most useful when a project needs someone who understands how the business runs, can work across the whole technical stack, and owns the delivery.",
    ],
    helpWith: [
      {
        title: 'Custom business applications',
        text: 'Internal tools, management dashboards, operational portals and workflows, built around how your team actually works.',
      },
      {
        title: 'Integrations and automation',
        text: 'Connecting your ERP, APIs, databases and outside services, so your team re-enters less data and the information matches across systems.',
      },
      {
        title: 'Priority ERP and manufacturing software',
        text: 'Production tracking, inventory visibility, barcode workflows, packing, label printing and production apps connected to Priority. I write to the ERP only through its official API and check every write afterwards. That matters because Priority can report success on a write that actually failed.',
      },
      {
        title: 'AI connected to business data',
        text: 'Assistants that let authorized staff ask questions in plain language and generate reports, with access controls and an audit log of every query.',
      },
      {
        title: 'Existing systems and legacy modernization',
        text: "Tracking down production issues, improving performance, untangling old code, and modernizing applications one manageable step at a time, leaving clean, logical code that's easy to maintain and extend.",
      },
      {
        title: 'Project continuity and handover',
        text: 'Documentation of the architecture and business rules that any developer, supplier or internal team can pick up, plus stabilizing systems so the handover goes smoothly.',
      },
    ],
    offerings: {
      production: {
        title: 'Production software connected to your ERP',
        description: [
          'I build the apps your production teams run on: production reporting, packing, pallet and stock tracking, label printing and dashboards. They work on a tablet at the machine, and they write straight to your ERP.',
        ],
        delivered: [
          "For about 18 months I've led development of a manufacturer's custom software platform: management apps, production tools, backend services and Priority ERP integrations. Staff across the company use it every day, from management to production.",
          '3,100+ commits across 13 repositories and about 20 production modules, released through a staging → production pipeline. That\'s part of 10,000+ GitHub contributions since 2019, most of them in private client repositories. I own it from requirements and architecture through deployment and live support.',
        ],
      },
      ai: {
        title: 'AI assistant over your business data',
        description: [
          'I can add a chat assistant to your systems. Your managers ask questions about ERP and database information in plain language and download reports with charts, without waiting for a developer.',
        ],
        delivered: [
          'I shipped one in production (Claude + MCP) inside a business application. Data access is read-only, permissions are role-based, and every query goes to an audit log.',
        ],
      },
      integrations: {
        title: 'Integrations & legacy modernization',
        description: [
          "I connect systems that don't talk to each other, and I modernize aging applications step by step without stopping the business.",
        ],
        delivered: [
          'Backend services and integrations for real-time order management and financial systems. I modernized legacy applications, including an 18-year-old business system, and moved services from C# and Oracle to Node.js.',
        ],
      },
      training: {
        title: 'Technical training & mentoring',
        description: [
          'I help developers and teams understand the technology they work with, build practical skills, and become more independent. I can provide developer training, one-on-one mentoring, team onboarding and knowledge transfer, especially in JavaScript, TypeScript, React, Node.js and full-stack development.',
          'I teach from real production experience, so concepts are tied to actual applications, architectural decisions and everyday debugging, not just textbook examples.',
        ],
        delivered: [
          'Lecturing and one-on-one mentoring at Israeli colleges, teaching as a civilian contractor at Unit 8200, and creating a React training program for several development teams at Partner Telecom.',
        ],
      },
    },
    modules: [
      {
        title: 'CNC planning & schematic',
        text: 'Sends orders to a cutting optimizer, then lets operators report pieces and advance production with a tap on an interactive sheet view',
      },
      {
        title: 'Packing',
        text: 'Scan-based packing documents created at the packing station, with draft review and finalize, written directly to the ERP',
      },
      {
        title: 'Pallets & label printing',
        text: 'One reliable source for pallet and stock tracking, plus the labels printed from it',
      },
      {
        title: 'Production metrics',
        text: 'Order-progress dashboards by area and weight, with history over time',
      },
      {
        title: 'Ops tooling',
        text: 'Monitoring of failed ERP transfers, admin tools for data refreshes, user and role management',
      },
    ],
    howIWork: {
      lead: 'Understand the process. Define a useful first deliverable. Build it, put it into use, and improve it.',
      body: 'I work directly with the people who use the software to understand the workflow and its edge cases. I study the existing systems and data, clarify scope, and choose technology that fits the business. Testing, deployment, documentation and maintainability are part of the delivery.',
      points: [
        {
          title: 'Checked against real data',
          text: 'I test fixes against real data and check UI changes in the running app before I call them done.',
        },
        {
          title: 'Production data handled with care',
          text: "Diagnostics are read-only, data writes happen only through code that went through human PR review, and nothing goes to production without approval. Risky new features ship switched off and are turned on deliberately. A configuration mistake can't switch them on by accident.",
        },
        {
          title: 'Decisions written down',
          text: "Architecture decision records and a knowledge base, so your team isn't dependent on me.",
        },
      ],
    },
    cicd: {
      lead: 'Every change passes automated checks before it reaches your users, and releases are routine instead of risky.',
      points: [
        {
          title: 'Automated pipeline',
          text: 'GitHub Actions run type checks and AI-assisted code review on every pull request, then deploy to self-hosted staging and production servers.',
        },
        {
          title: 'Staging first',
          text: "Changes run on a staging environment against a test copy of the ERP before they're promoted, as a versioned release, to production.",
        },
        {
          title: 'Layered tests',
          text: '200+ automated test files: unit tests (Vitest), integration tests against real databases and the ERP API, and end-to-end browser tests (Playwright) for critical production workflows.',
        },
        {
          title: 'Checks before code is saved',
          text: "Pre-commit hooks lint and format each change before it's committed, so problems are caught on the developer's machine, not in production.",
        },
      ],
    },
    monitoring: {
      lead: "When something goes wrong in production, you hear about it right away, and there's a record showing exactly what happened.",
      points: [
        {
          title: 'Instant alerts',
          text: 'Failed or unusual production actions trigger a Telegram alert to the responsible team in real time. Workers can also press a help button in the app to call for assistance.',
        },
        {
          title: 'Full action history',
          text: 'Every production action, override and AI query is logged to a dedicated logging database: who did it, when, and what the outcome was.',
        },
        {
          title: 'ERP sync monitoring',
          text: 'A dedicated dashboard catches records that failed to transfer to the ERP, before they turn into inventory or billing errors.',
        },
        {
          title: 'Security audit trail',
          text: 'Logins, permission changes and sensitive operations are recorded for accountability.',
        },
        {
          title: 'Never in the way',
          text: "If monitoring itself fails, the worker's action still goes through. Logging never blocks production.",
        },
      ],
    },
    engagements: [
      'A focused project: one integration, workflow, dashboard, or AI pilot.',
      'Ongoing development: building and improving your product or internal systems.',
      'An existing project that needs investigation, stabilization, or a clear path forward.',
      'Remote collaboration with your team or direct delivery as an independent developer.',
    ],
    cta: {
      body: [
        'Have a manual process taking too much time, systems that need to talk to each other, or a software project that needs an experienced developer to move it forward?',
        'Send me a short description of the problem or idea, and we can work out a practical starting point.',
      ],
    },
  },
  he: {
    headline: 'תוכנה מותאמת, אינטגרציות ו-AI מעשי לעסק שלכם',
    lead: 'אני עוזר לעסקים להחליף עבודה ידנית, לחבר מערכות מנותקות ולבנות תוכנה שהצוותים שלהם יכולים לסמוך עליה כל יום.',
    intro: [
      'אני מפתח Full-Stack עם התמחות ב-Backend ויותר מ-8 שנות ניסיון בבנייה ובתחזוקה של תוכנה ב-Production. אני מלווה פרויקטים לכל אורכם: מהבנת הבעיה העסקית, דרך ארכיטקטורה, פיתוח והעלאה לאוויר, ועד תמיכה שוטפת.',
      'עבדתי בתעשייה, בתקשורת, במערכות פיננסיות, בניהול הזמנות וב-SaaS. אני תורם הכי הרבה כשפרויקט צריך מישהו שמבין איך העסק עובד, יכול לעבוד לאורך כל השכבות הטכנולוגיות ולוקח אחריות על האספקה.',
    ],
    helpWith: [
      {
        title: 'אפליקציות עסקיות מותאמות',
        text: 'כלים פנימיים, דשבורדים ניהוליים, פורטלים תפעוליים ותהליכי עבודה, שנבנים סביב הדרך שבה הצוות שלכם באמת עובד.',
      },
      {
        title: 'אינטגרציות ואוטומציה',
        text: 'חיבור ה-ERP, ממשקי API, מסדי נתונים ושירותים חיצוניים, כך שהצוות מקליד פחות נתונים פעמיים והמידע תואם בין המערכות.',
      },
      {
        title: 'Priority ERP ותוכנה לייצור',
        text: 'מעקב ייצור, נראות מלאי, תהליכי ברקוד, אריזה, הדפסת תוויות ואפליקציות ייצור המחוברות ל-Priority. אני כותב ל-ERP רק דרך ה-API הרשמי שלו ומאמת כל כתיבה לאחר מכן. זה חשוב, כי Priority עלול לדווח על הצלחה בכתיבה שבפועל נכשלה.',
      },
      {
        title: 'AI המחובר לנתוני העסק',
        text: 'עוזרים חכמים שמאפשרים לעובדים מורשים לשאול שאלות בשפה טבעית ולהפיק דוחות, עם בקרת הרשאות ותיעוד (audit log) של כל שאילתה.',
      },
      {
        title: 'מערכות קיימות ומודרניזציה של מערכות Legacy',
        text: 'איתור תקלות ב-Production, שיפור ביצועים, פירוק קוד ישן וסבוך ומודרניזציה של אפליקציות צעד אחר צעד, תוך השארת קוד נקי והגיוני שקל לתחזק ולהרחיב.',
      },
      {
        title: 'רציפות פרויקטים והעברת אחריות',
        text: 'תיעוד של הארכיטקטורה ושל הכללים העסקיים, שכל מפתח, ספק או צוות פנימי יכולים להמשיך ממנו, וייצוב המערכות כדי שהעברת האחריות תעבור בצורה חלקה.',
      },
    ],
    offerings: {
      production: {
        title: 'תוכנת ייצור המחוברת ל-ERP שלכם',
        description: [
          'אני בונה את האפליקציות שצוותי הייצור עובדים איתן: דיווחי ייצור, אריזה, מעקב משטחים ומלאי, הדפסת תוויות ודשבורדים. הן עובדות על טאבלט ליד המכונה וכותבות ישירות ל-ERP.',
        ],
        delivered: [
          'כבר כ-18 חודשים אני מוביל את הפיתוח של פלטפורמת תוכנה ייעודית של יצרן: אפליקציות ניהול, כלי ייצור, שירותי Backend ואינטגרציות ל-Priority ERP. עובדים מכל החברה משתמשים בה מדי יום, מההנהלה ועד רצפת הייצור.',
          'יותר מ-3,100 קומיטים ב-13 מאגרי קוד וכ-20 מודולים ב-Production, שמשוחררים דרך תהליך Staging → Production. זה חלק מיותר מ-10,000 תרומות ב-GitHub מאז 2019, רובן במאגרים פרטיים של לקוחות. אני אחראי עליה מהדרישות והארכיטקטורה ועד העלאה לאוויר ותמיכה שוטפת.',
        ],
      },
      ai: {
        title: 'עוזר AI מעל נתוני העסק',
        description: [
          'אני יכול להוסיף למערכות שלכם עוזר צ\'אט. המנהלים שואלים בשפה טבעית על נתוני ה-ERP ומסדי הנתונים ומורידים דוחות עם גרפים, בלי לחכות למפתח.',
        ],
        delivered: [
          'העליתי ל-Production עוזר כזה, מבוסס Claude ו-MCP, בתוך אפליקציה עסקית. הגישה לנתונים היא לקריאה בלבד, ההרשאות מבוססות תפקידים, וכל שאילתה נרשמת ב-audit log.',
        ],
      },
      integrations: {
        title: 'אינטגרציות ומודרניזציה של מערכות Legacy',
        description: [
          'אני מחבר מערכות שלא מדברות זו עם זו, ומחדש אפליקציות מזדקנות צעד אחר צעד, בלי לעצור את העסק.',
        ],
        delivered: [
          'שירותי Backend ואינטגרציות למערכות ניהול הזמנות בזמן אמת ולמערכות פיננסיות. ביצעתי מודרניזציה לאפליקציות Legacy, כולל מערכת עסקית בת 18 שנה, והעברתי שירותים מ-C# ו-Oracle ל-Node.js.',
        ],
      },
      training: {
        title: 'הדרכה טכנית וליווי מקצועי',
        description: [
          'אני עוזר למפתחים ולצוותים להבין את הטכנולוגיה שהם עובדים איתה, לבנות מיומנויות מעשיות ולהפוך לעצמאיים יותר. אני מעביר הדרכות למפתחים, ליווי אישי, קליטת צוותים והעברת ידע, בעיקר ב-JavaScript, TypeScript, React, Node.js ופיתוח Full-Stack.',
          'אני מלמד מתוך ניסיון אמיתי ב-Production, כך שהמושגים קשורים לאפליקציות אמיתיות, להחלטות ארכיטקטורה ולדיבאגינג יומיומי, ולא רק לדוגמאות מספר הלימוד.',
        ],
        delivered: [
          'הרצאות וליווי אישי במכללות בישראל, הוראה כקבלן אזרחי ביחידה 8200, ובניית תוכנית הכשרה ב-React לכמה צוותי פיתוח בפרטנר תקשורת.',
        ],
      },
    },
    modules: [
      {
        title: 'תכנון CNC ושרטוט',
        text: 'שולח הזמנות לאופטימייזר חיתוך, ומאפשר למפעילים לדווח על חלקים ולקדם את הייצור בנגיעה על תצוגת לוח אינטראקטיבית',
      },
      {
        title: 'אריזה',
        text: 'תעודות אריזה מבוססות סריקה שנוצרות בעמדת האריזה, עם שלב טיוטה, בדיקה וסגירה, ונכתבות ישירות ל-ERP',
      },
      {
        title: 'משטחים והדפסת תוויות',
        text: 'מקור אמין אחד למעקב משטחים ומלאי, וממנו גם מודפסות התוויות',
      },
      {
        title: 'מדדי ייצור',
        text: 'דשבורדים של התקדמות הזמנות לפי שטח ומשקל, עם היסטוריה לאורך זמן',
      },
      {
        title: 'כלי תפעול',
        text: 'ניטור העברות שנכשלו ל-ERP, כלי ניהול לרענון נתונים, וניהול משתמשים ותפקידים',
      },
    ],
    howIWork: {
      lead: 'להבין את התהליך. להגדיר תוצר ראשון שימושי. לבנות אותו, להכניס אותו לשימוש ולשפר.',
      body: 'אני עובד ישירות עם האנשים שמשתמשים בתוכנה כדי להבין את תהליך העבודה ואת מקרי הקצה שלו. אני לומד את המערכות והנתונים הקיימים, מחדד את היקף העבודה ובוחר טכנולוגיה שמתאימה לעסק. בדיקות, העלאה לאוויר, תיעוד ותחזוקתיות הם חלק מהאספקה.',
      points: [
        {
          title: 'נבדק מול נתונים אמיתיים',
          text: 'אני בודק תיקונים מול נתונים אמיתיים ובודק שינויי ממשק באפליקציה הרצה לפני שאני קובע שהם גמורים.',
        },
        {
          title: 'זהירות עם נתוני Production',
          text: 'אבחון נעשה בקריאה בלבד, כתיבת נתונים מתבצעת רק דרך קוד שעבר Code Review אנושי, ושום דבר לא עולה ל-Production בלי אישור. פיצ\'רים חדשים ומסוכנים עולים כבויים ומופעלים באופן מכוון, כך שטעות בהגדרות לא יכולה להפעיל אותם בטעות.',
        },
        {
          title: 'החלטות מתועדות',
          text: 'תיעוד החלטות ארכיטקטורה (ADR) ובסיס ידע, כך שהצוות שלכם לא תלוי בי.',
        },
      ],
    },
    cicd: {
      lead: 'כל שינוי עובר בדיקות אוטומטיות לפני שהוא מגיע למשתמשים, ושחרור גרסה הופך לשגרה במקום לסיכון.',
      points: [
        {
          title: 'Pipeline אוטומטי',
          text: 'GitHub Actions מריצים בדיקות טיפוסים ו-Code Review בסיוע AI על כל Pull Request, ואז מעלים לשרתי Staging ו-Production בניהול עצמי.',
        },
        {
          title: 'קודם Staging',
          text: 'שינויים רצים בסביבת Staging מול עותק בדיקות של ה-ERP לפני שהם מקודמים ל-Production כגרסה ממוספרת.',
        },
        {
          title: 'בדיקות בשכבות',
          text: 'יותר מ-200 קובצי בדיקות אוטומטיות: בדיקות יחידה (Vitest), בדיקות אינטגרציה מול מסדי נתונים אמיתיים ו-API של ה-ERP, ובדיקות קצה-לקצה בדפדפן (Playwright) לתהליכי ייצור קריטיים.',
        },
        {
          title: 'בדיקות לפני שמירת הקוד',
          text: 'Pre-commit hooks מריצים lint ועיצוב קוד על כל שינוי לפני ה-commit, כך שבעיות נתפסות על המחשב של המפתח ולא ב-Production.',
        },
      ],
    },
    monitoring: {
      lead: 'כשמשהו משתבש ב-Production, יודעים על זה מיד, ויש תיעוד שמראה בדיוק מה קרה.',
      points: [
        {
          title: 'התראות מיידיות',
          text: 'פעולות ייצור שנכשלו או חריגות שולחות התראת Telegram לצוות האחראי בזמן אמת. עובדים יכולים גם ללחוץ על כפתור עזרה באפליקציה כדי לקרוא לסיוע.',
        },
        {
          title: 'היסטוריית פעולות מלאה',
          text: 'כל פעולת ייצור, עקיפה ידנית ושאילתת AI נרשמות במסד נתונים ייעודי ללוגים: מי ביצע, מתי ומה הייתה התוצאה.',
        },
        {
          title: 'ניטור סנכרון ERP',
          text: 'דשבורד ייעודי מאתר רשומות שלא הועברו ל-ERP, לפני שהן הופכות לטעויות מלאי או חיוב.',
        },
        {
          title: 'תיעוד אבטחה',
          text: 'כניסות למערכת, שינויי הרשאות ופעולות רגישות מתועדים לצורך בקרה.',
        },
        {
          title: 'אף פעם לא מפריע',
          text: 'גם אם הניטור עצמו נכשל, הפעולה של העובד עוברת. רישום לוגים אף פעם לא עוצר את הייצור.',
        },
      ],
    },
    engagements: [
      'פרויקט ממוקד: אינטגרציה אחת, תהליך עבודה, דשבורד או פיילוט AI.',
      'פיתוח שוטף: בנייה ושיפור של המוצר או המערכות הפנימיות שלכם.',
      'פרויקט קיים שצריך חקירה, ייצוב או דרך ברורה קדימה.',
      'עבודה מרחוק יחד עם הצוות שלכם, או אספקה ישירה כמפתח עצמאי.',
    ],
    cta: {
      body: [
        'יש לכם תהליך ידני שגוזל יותר מדי זמן, מערכות שצריכות לדבר זו עם זו, או פרויקט תוכנה שצריך מפתח מנוסה כדי להתקדם?',
        'שלחו לי תיאור קצר של הבעיה או הרעיון, ונגדיר יחד נקודת התחלה מעשית.',
      ],
    },
  },
}

export function localizedServices(locale: string) {
  return services[locale === 'he' ? 'he' : 'en']
}

/**
 * Resolves an offering's backing Case Study slugs. Throws on an unknown slug
 * so a broken proof link fails the build instead of shipping a dead anchor.
 */
export function offeringCaseStudySlugs(key: OfferingKey): string[] {
  return offeringCaseStudies[key].map((slug) => {
    if (!caseStudies.some((cs) => cs.slug === slug)) {
      throw new Error(`Unknown Case Study slug "${slug}" on offering "${key}"`)
    }
    return slug
  })
}
