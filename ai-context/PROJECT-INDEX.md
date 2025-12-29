# Project Index

**Personal Website - Avi Koenig**  
**Status:** Planning Complete, Ready for Implementation  
**Last Updated:** Based on comprehensive discovery and PRD v1.0

---

## Quick Links

- [PRD.md](./PRD.md) - Complete Product Requirements Document
- [content-inventory.md](./content-inventory.md) - All website copy (English + Hebrew placeholders)
- [tailwind-tokens.md](./tailwind-tokens.md) - Design system tokens
- [translation-workflow.md](./translation-workflow.md) - Translation guidelines
- [content-chat.md](./content-chat.md) - Full conversation transcript (reference)

---

## Project Overview

### Purpose
Personal website to support hiring conversion (remote-first) and provide passive freelance credibility.

### Stack
- Next.js (latest stable)
- TypeScript
- Tailwind CSS
- next-intl (cookie-based i18n)
- English + Hebrew (RTL support)

### Key Pages
1. `/` - Home (30-second recruiter scan)
2. `/how-i-work` - Primary differentiator
3. `/experience` - Pattern-based experience showcase
4. `/resume` - PDF viewer + download
5. `/contact` - Minimal contact info

---

## Document Structure

### 1. PRD.md
**What it contains:**
- Complete product requirements
- Goals and non-goals
- Target audience
- Positioning and messaging
- Tone and voice guidelines
- Technical requirements
- Page-level specifications
- Success criteria

**Use when:**
- Starting implementation
- Making design/feature decisions
- Need to understand project scope
- Onboarding new developers

---

### 2. content-inventory.md
**What it contains:**
- All English copy (finalized)
- Hebrew translation placeholders
- Page-by-page content breakdown
- Navigation text
- Meta content (titles, descriptions)
- Translation status tracking

**Use when:**
- Implementing pages
- Creating translation files
- Reviewing content
- Updating copy

---

### 3. tailwind-tokens.md
**What it contains:**
- Color palette (neutral + accent)
- Typography system
- Spacing scale
- Layout tokens
- Component-specific tokens
- RTL support tokens
- Tailwind config example

**Use when:**
- Setting up Tailwind
- Creating components
- Ensuring design consistency
- Implementing RTL support

---

### 4. translation-workflow.md
**What it contains:**
- Translation principles
- Workflow steps
- Quality checklist
- Common challenges and solutions
- Example translations
- Maintenance guidelines

**Use when:**
- Translating content to Hebrew
- Reviewing translations
- Making translation decisions
- Onboarding translators

---

### 5. content-chat.md
**What it contains:**
- Full conversation transcript (4,413 lines)
- Discovery process
- Resume refinement iterations
- Content development process
- Strategic decisions and rationale

**Use when:**
- Understanding decision history
- Need context for why something was decided
- Reference for future changes
- Learning the thought process

---

## Implementation Roadmap

### Phase 1: Setup ✅
- [x] PRD finalized
- [x] Content inventory created
- [x] Design tokens defined
- [x] Translation workflow documented

### Phase 2: Development (Next)
- [ ] Next.js project setup
- [ ] i18n configuration (cookie-based)
- [ ] Tailwind configuration
- [ ] RTL support setup
- [ ] Component structure

### Phase 3: Content Implementation
- [ ] English content implementation
- [ ] Hebrew translations
- [ ] Translation review
- [ ] Content refinement

### Phase 4: Polish & Launch
- [ ] Design refinement
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] RTL testing
- [ ] Launch

---

## Key Decisions Summary

### Strategic
- **Primary goal:** Hiring conversion (remote-first)
- **Tone:** Quietly confident, engineer-to-engineer, corporate-compatible
- **Positioning:** Backend-oriented full-stack developer specializing in legacy systems

### Technical
- **i18n:** Cookie-based (same URLs, no prefixes)
- **Design:** Neutral palette, single accent, high whitespace
- **Performance:** Fast load, minimal JS, no heavy animations

### Content
- **CV relationship:** Website expands on CV, doesn't contradict
- **Experience format:** Pattern-based, anonymous
- **AI positioning:** Assistive tool, not decision-maker

---

## Content Status

### English ✅
- Home page: Finalized
- How I Work: Finalized
- Experience: Finalized
- Contact: Finalized
- Resume: PDF ready

### Hebrew ⏳
- All pages: Pending translation
- See `content-inventory.md` for placeholders
- Follow `translation-workflow.md` for process

---

## Design System Status

### Colors ✅
- Neutral palette defined
- Accent color (blue) defined
- Contrast ratios specified

### Typography ✅
- Font families selected (Inter, Heebo)
- Font sizes defined
- Weights specified

### Spacing ✅
- Base scale defined
- Section spacing defined
- Component spacing specified

### Components ⏳
- Tokens defined, components pending implementation

---

## Next Steps

1. **Review PRD.md** - Ensure understanding of requirements
2. **Set up Next.js project** - Use latest stable version
3. **Configure i18n** - Cookie-based locale detection
4. **Set up Tailwind** - Use tokens from `tailwind-tokens.md`
5. **Implement English content** - Use `content-inventory.md`
6. **Create components** - Follow design tokens
7. **Implement Hebrew** - Follow `translation-workflow.md`
8. **Test RTL** - Ensure layout works in Hebrew
9. **Polish & launch** - Final refinements

---

## Important Notes

### Do's ✅
- Follow PRD strictly
- Use design tokens consistently
- Preserve tone in translations
- Test RTL thoroughly
- Keep content inventory updated

### Don'ts ❌
- Don't add features not in PRD
- Don't deviate from tone guidelines
- Don't skip translation workflow
- Don't ignore RTL considerations
- Don't add scope creep

---

## Resources

### External
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Inter Font](https://rsms.me/inter/)
- [Heebo Font](https://fonts.google.com/specimen/Heebo)

### Internal
- PRD.md - Requirements
- content-inventory.md - All copy
- tailwind-tokens.md - Design system
- translation-workflow.md - Translation guide

---

## Questions?

If you need clarification on:
- **Requirements:** See PRD.md
- **Content:** See content-inventory.md
- **Design:** See tailwind-tokens.md
- **Translation:** See translation-workflow.md
- **Context/History:** See content-chat.md

---

**Project Status:** Ready for implementation  
**Last Updated:** Based on PRD v1.0 approval

