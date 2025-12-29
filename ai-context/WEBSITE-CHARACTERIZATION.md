# Website Characterization Plan

**Status:** Planning Phase  
**Based on:** PRD v1.0 (Approved)  
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS, next-intl

---

## 1. Visual Character

### 1.1 Overall Aesthetic

**Core Principle:** Professional, trustworthy, quietly confident

**Visual Keywords:**
- Clean
- Spacious
- Professional
- Calm
- Trustworthy
- Uncluttered
- Focused

**Avoid:**
- Flashy animations
- Trendy design patterns
- Over-designed elements
- Distracting visuals
- Corporate clichés

### 1.2 Color Psychology

**Neutral Palette (Primary):**
- **Background:** Near-white (#FAFAFA) - reduces eye strain, feels clean
- **Text:** Deep neutral (#1A1A1A) - high contrast, professional
- **Borders:** Subtle gray (#E5E5E5) - defines without dominating

**Accent Color (Blue #3B82F6):**
- **Why Blue:** Trust, professionalism, stability, technical competence
- **Usage:** Links, CTAs, subtle highlights
- **Restraint:** Use sparingly - not overwhelming

**Color Application:**
- 90% neutral, 10% accent
- Accent only for interactive elements and key information
- No color for decoration

### 1.3 Typography Character

**English (Inter):**
- Clean, modern sans-serif
- Excellent readability
- Professional but approachable
- Works well at all sizes

**Hebrew (Heebo):**
- Professional Hebrew font
- Good RTL support
- Maintains visual consistency with English

**Typography Hierarchy:**
- Clear size differentiation
- Generous line-height (1.6 for body)
- Comfortable reading experience
- No decorative fonts

### 1.4 Spacing & Layout

**Whitespace Philosophy:**
- High whitespace = breathing room = clarity
- Sections separated by generous spacing (5rem standard)
- Content doesn't feel cramped
- Each element has room to be understood

**Content Width:**
- Max-width: 48rem (768px) - optimal reading width
- Centered on larger screens
- Full-width on mobile (with padding)

**Layout Principles:**
- Single column (no sidebars)
- Vertical flow
- Clear section boundaries
- No visual clutter

---

## 2. Component Architecture

### 2.1 Core Components

#### Navigation
- **Type:** Horizontal, minimal
- **Behavior:** Sticky on scroll (optional)
- **Items:** Home | How I Work | Experience | Resume | Contact
- **Language Switcher:** Subtle, top-right
- **Style:** Clean links, no background, underline on hover

#### Hero Section
- **Purpose:** Immediate identification
- **Content:** Name, title, tagline
- **Layout:** Centered, generous top spacing
- **Style:** Large, clear typography
- **No:** Background images, animations, decorative elements

#### Section Container
- **Purpose:** Consistent content wrapper
- **Width:** Max 48rem, centered
- **Padding:** Responsive (mobile: 1rem, desktop: 0)
- **Spacing:** Generous vertical rhythm

#### Card/Pattern Block
- **Purpose:** Experience patterns, content blocks
- **Style:** Subtle border, light background, padding
- **Hover:** Minimal (slight shadow increase)
- **No:** Heavy shadows, gradients, borders

#### Button/Link
- **Primary CTA:** Blue background, white text
- **Secondary:** Transparent, border, text color
- **Link:** Blue text, underline on hover
- **Style:** Rounded corners (0.375rem), comfortable padding

#### Language Switcher
- **Type:** Button group or dropdown
- **Location:** Top-right (desktop), accessible (mobile)
- **Style:** Subtle, doesn't dominate
- **Behavior:** Cookie-based persistence

### 2.2 Page-Specific Components

#### Home Page
- Hero
- Quick Snapshot (skills grid/list)
- What I'm Looking For (simple list)
- How I Work (summary block)
- CTAs (button group)

#### How I Work Page
- Page header (title + subtitle)
- Section blocks (each theme)
- No images, pure content
- Clear hierarchy

#### Experience Page
- Page header
- Pattern cards (5 patterns)
- Each pattern: Situation | Approach | Why it matters
- Consistent structure

#### Resume Page
- PDF viewer (embedded)
- Download button
- Minimal wrapper
- No additional content

#### Contact Page
- Simple list
- Email + LinkedIn
- Minimal copy
- No form

---

## 3. User Experience Flow

### 3.1 First Visit (Recruiter - 30 Second Scan)

**Home Page Flow:**
1. **0-5s:** Hero section - "Who is this?"
   - Name, title, positioning clear
   - Immediate understanding of role

2. **5-15s:** Quick Snapshot
   - Skills and domains
   - Technical competence visible
   - "Can he do the job?"

3. **15-25s:** What I'm Looking For
   - Role alignment check
   - Remote-friendly confirmation
   - "Is this a match?"

4. **25-30s:** CTAs
   - Resume download
   - LinkedIn check
   - "Next step?"

**Decision Point:**
- ✅ Forward to hiring manager
- ✅ Download resume
- ✅ Check LinkedIn
- ❌ Move on (filtered out - good!)

### 3.2 Deep Dive (Hiring Manager)

**Path 1: How I Work**
- Demonstrates judgment
- Shows seniority
- Reduces perceived risk
- "How does he think?"

**Path 2: Experience**
- Pattern-based approach
- Real-world experience
- Anonymous but authentic
- "Can he handle our systems?"

**Path 3: Resume**
- Official CV
- Detailed experience
- "What's his background?"

### 3.3 Language Switching

**Behavior:**
- Cookie persists choice
- Same URL (no redirect)
- Content updates instantly
- RTL layout activates (Hebrew)

**UX:**
- Language switcher always visible
- No page reload needed
- Smooth transition

---

## 4. Technical Implementation Approach

### 4.1 Next.js App Router Structure

```
app/
  layout.tsx              # Root layout (i18n provider, fonts)
  page.tsx                # Home page
  how-i-work/
    page.tsx              # How I Work page
  experience/
    page.tsx              # Experience page
  resume/
    page.tsx              # Resume page
  contact/
    page.tsx              # Contact page
  [locale]/               # If using locale routing (we're not)
  
components/
  Navigation.tsx
  LanguageSwitcher.tsx
  Hero.tsx
  Section.tsx
  PatternCard.tsx
  ResumeViewer.tsx
  
lib/
  i18n/
    config.ts             # i18n configuration
    messages/
      en.json
      he.json
  utils/
    cn.ts                 # Class name utility
    
public/
  resume.pdf              # Resume PDF
  fonts/                  # Custom fonts (if self-hosting)
  
tailwind.config.ts
tsconfig.json
next.config.ts
```

### 4.2 i18n Implementation Strategy

**Cookie-Based Approach:**
- Use `next-intl` or custom solution
- Middleware detects locale from:
  1. Cookie (user preference)
  2. Accept-Language header (fallback)
  3. Default: English

**Implementation:**
```typescript
// Middleware detects and sets locale
// No URL prefixes
// Same route, different content
```

**RTL Support:**
- `dir="rtl"` on Hebrew pages
- Tailwind RTL utilities
- Layout adjustments (spacing, alignment)

### 4.3 Tailwind Configuration

**Based on Design Tokens:**
- Custom colors (neutral + accent)
- Typography scale
- Spacing system
- Component utilities

**Key Config:**
```typescript
// tailwind.config.ts
- Custom color palette
- Font families (Inter, Heebo)
- Extended spacing
- RTL support utilities
```

### 4.4 Performance Strategy

**Optimizations:**
- Static generation where possible
- Minimal JavaScript
- Font optimization (next/font)
- Image optimization (if needed)
- No heavy animations
- Fast initial load

**Lighthouse Goals:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 5. Design System Application

### 5.1 Color Usage Rules

**Background Colors:**
- `bg-background-primary` - Page background
- `bg-background-paper` - Cards, content blocks
- `bg-background-secondary` - Subtle sections

**Text Colors:**
- `text-text-primary` - Main content
- `text-text-secondary` - Supporting text
- `text-text-muted` - Less important
- `text-accent-500` - Links, emphasis

**Border Colors:**
- `border-border-default` - Standard borders
- `border-border-subtle` - Very subtle divisions

**Accent Usage:**
- Links: `text-accent-500 hover:text-accent-600`
- Buttons: `bg-accent-500 hover:bg-accent-600`
- Focus states: `ring-accent-500`

### 5.2 Typography Scale

**Headings:**
- H1: `text-h1` (2.5rem) - Page titles
- H2: `text-h2` (2rem) - Section titles
- H3: `text-h3` (1.5rem) - Subsection titles
- H4: `text-h4` (1.25rem) - Minor headings

**Body:**
- Base: `text-base` (1rem) - Standard text
- Large: `text-lg` (1.125rem) - Emphasis
- Small: `text-sm` (0.875rem) - Supporting

**Line Heights:**
- Headings: 1.2-1.4 (tighter)
- Body: 1.6 (comfortable reading)

### 5.3 Spacing System

**Section Spacing:**
- `py-section-tight` (3rem) - Related sections
- `py-section-normal` (5rem) - Standard sections
- `py-section-loose` (8rem) - Major breaks

**Component Spacing:**
- Padding: `p-4`, `p-6`, `p-8`
- Gaps: `gap-4`, `gap-6`, `gap-8`
- Margins: `mb-4`, `mb-6`, `mb-8`

### 5.4 Component Patterns

**Card Pattern:**
```tsx
<div className="bg-background-paper border border-border-default rounded-lg p-6">
  {/* Content */}
</div>
```

**Section Pattern:**
```tsx
<section className="py-section-normal">
  <div className="max-w-content mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

**Button Pattern:**
```tsx
<a className="bg-accent-500 hover:bg-accent-600 text-text-inverse px-6 py-3 rounded-md font-medium transition-colors">
  Button Text
</a>
```

---

## 6. Responsive Behavior

### 6.1 Breakpoints

**Mobile First:**
- Base: < 640px (mobile)
- sm: 640px+ (mobile landscape)
- md: 768px+ (tablet)
- lg: 1024px+ (desktop)
- xl: 1280px+ (large desktop)

### 6.2 Mobile Adaptations

**Typography:**
- Slightly smaller headings
- Same line-height
- Readable body text

**Spacing:**
- Reduced section spacing
- Tighter padding
- Full-width content

**Navigation:**
- Hamburger menu (if needed)
- Stacked layout
- Touch-friendly targets

**Components:**
- Full-width buttons
- Stacked cards
- Simplified layouts

### 6.3 Desktop Enhancements

**Layout:**
- Centered content
- Max-width constraints
- Generous spacing

**Typography:**
- Larger headings
- Comfortable reading width
- Better visual hierarchy

---

## 7. Accessibility Requirements

### 7.1 WCAG AA Compliance

**Color Contrast:**
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

**Focus States:**
- Visible focus indicators
- Keyboard navigation
- Skip links (if needed)

**Semantic HTML:**
- Proper heading hierarchy
- Landmark regions
- ARIA labels where needed

### 7.2 RTL Accessibility

**Hebrew Support:**
- `dir="rtl"` attribute
- Proper text direction
- Layout mirroring
- Keyboard navigation works

**Language Switching:**
- Clear language indicator
- Accessible switcher
- Screen reader announcements

---

## 8. Content Presentation

### 8.1 Text-Heavy Pages

**How I Work & Experience:**
- Generous whitespace
- Clear section breaks
- Scannable structure
- No walls of text

**Techniques:**
- Short paragraphs (3-4 sentences)
- Bullet points for lists
- Clear headings
- Visual breathing room

### 8.2 Minimal Pages

**Home & Contact:**
- Focused content
- Clear CTAs
- No distractions
- Purpose-driven

### 8.3 Resume Page

**PDF Viewer:**
- Embedded viewer
- Download option
- No wrapper content
- Clean presentation

---

## 9. Interaction Design

### 9.1 Hover States

**Links:**
- Underline on hover
- Color darkens slightly
- Smooth transition

**Buttons:**
- Background darkens
- Slight scale (optional)
- Clear feedback

**Cards:**
- Subtle shadow increase
- No dramatic changes
- Professional feel

### 9.2 Transitions

**Principles:**
- Subtle (150-200ms)
- Ease-in-out
- No bouncy animations
- Professional feel

**Usage:**
- Color changes
- Hover states
- Language switching
- Page transitions (if any)

### 9.3 No Animations

**Explicitly Avoid:**
- Page load animations
- Scroll animations
- Parallax effects
- Decorative animations
- Loading spinners (unless necessary)

**Why:**
- Faster perceived performance
- Less distraction
- Professional tone
- Focus on content

---

## 10. Implementation Checklist

### Phase 1: Foundation
- [ ] Next.js project setup
- [ ] TypeScript configuration
- [ ] Tailwind configuration (with tokens)
- [ ] Font setup (Inter, Heebo)
- [ ] i18n setup (cookie-based)
- [ ] RTL support setup

### Phase 2: Core Components
- [ ] Navigation component
- [ ] Language switcher
- [ ] Layout components
- [ ] Section wrapper
- [ ] Button/Link components

### Phase 3: Pages
- [ ] Home page
- [ ] How I Work page
- [ ] Experience page
- [ ] Resume page
- [ ] Contact page

### Phase 4: Content
- [ ] English content implementation
- [ ] Hebrew translations
- [ ] Content review
- [ ] SEO metadata

### Phase 5: Polish
- [ ] Responsive testing
- [ ] RTL testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Cross-browser testing

---

## 11. Success Metrics

### Visual Success
- ✅ Looks professional and trustworthy
- ✅ Feels calm and confident
- ✅ No design distractions
- ✅ Clear visual hierarchy

### Functional Success
- ✅ Fast load times
- ✅ Smooth language switching
- ✅ RTL works correctly
- ✅ Mobile responsive

### Content Success
- ✅ 30-second scan works
- ✅ Clear positioning
- ✅ Reduces hiring risk perception
- ✅ Filters out mismatches

---

## 12. Design Principles Summary

1. **Clarity over Cleverness** - Clear communication, no gimmicks
2. **Trust over Trends** - Timeless design, not trendy
3. **Content over Decoration** - Content is the hero
4. **Restraint over Excess** - Less is more
5. **Professional over Personal** - Corporate-compatible
6. **Calm over Chaos** - Peaceful, focused experience

---

**Next Steps:**
1. Review this characterization
2. Set up Next.js project
3. Configure Tailwind with tokens
4. Build core components
5. Implement pages

**Status:** Ready for implementation planning

