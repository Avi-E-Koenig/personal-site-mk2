# Personal Website - Avi Koenig

Personal website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (with custom design tokens)
- **next-intl** (cookie-based i18n)
- **React 19**

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
app/
  layout.tsx              # Root layout
  page.tsx                # Home page
  how-i-work/page.tsx     # How I Work page
  experience/page.tsx     # Experience page
  resume/page.tsx         # Resume page
  contact/page.tsx        # Contact page
  globals.css             # Global styles
  providers.tsx           # i18n provider

components/
  Navigation.tsx          # Main navigation
  LanguageSwitcher.tsx    # Language switcher

lib/
  i18n/
    config.ts             # i18n configuration
  utils/
    cn.ts                 # Class name utility

messages/
  en.json                 # English translations
  he.json                 # Hebrew translations (TODO)

public/
  resume.pdf              # Resume PDF
```

## Features

- ✅ Next.js App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom design tokens
- ✅ Cookie-based i18n (English + Hebrew)
- ✅ RTL support for Hebrew
- ✅ Responsive design
- ✅ Accessibility (WCAG AA)

## Documentation

See `ai-context/` folder for:
- PRD.md - Product Requirements Document
- WEBSITE-CHARACTERIZATION.md - Design and UX characterization
- tailwind-tokens.md - Design system tokens
- content-inventory.md - Content inventory
- translation-workflow.md - Translation guidelines

## Next Steps

1. Complete Hebrew translations in `messages/he.json`
2. Add resume PDF to `public/resume.pdf`
3. Update LinkedIn link in contact page
4. Test RTL layout
5. Deploy

