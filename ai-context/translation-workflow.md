# Translation Workflow

**Purpose:** Guide for translating website content from English (canonical) to Hebrew  
**Principle:** Preserve meaning and tone, not literal wording

---

## Overview

The website uses **cookie-based i18n** with same URLs for all languages. English is the canonical source. Hebrew translations must maintain:

* Professional tone
* Technical accuracy
* Corporate-compatible language
* Clear, direct communication

---

## Translation Principles

### 1. Meaning Over Literal Translation

❌ **Don't:** Translate word-for-word  
✅ **Do:** Understand the intent and express it naturally in Hebrew

**Example:**
- English: "I build and evolve production systems"
- Literal (bad): "אני בונה ומפתח מערכות ייצור"
- Natural (good): "אני מפתח ומשפר מערכות ייצור" or "אני בונה ומשדרג מערכות ייצור"

### 2. Technical Terms

**Keep in English:**
- Technology names: TypeScript, Node.js, NestJS, GraphQL, REST
- Framework names: React, Vue, Next.js
- Database names: Oracle, MSSQL, MongoDB
- Industry terms: CRMs, APIs, CI/CD

**Translate:**
- Common concepts: "backend", "full-stack", "refactoring" (if natural Hebrew exists)
- Descriptive phrases: "production systems", "legacy systems"
- Process descriptions: "understanding behavior", "incremental improvement"

**Decision Rule:** If the term is commonly used in English in Israeli tech industry, keep it. Otherwise, translate naturally.

### 3. Tone Preservation

**English Tone:**
- Calm, professional, quietly confident
- Engineer-to-engineer
- Corporate-compatible

**Hebrew Tone:**
- Professional but not overly formal
- Clear and direct
- Avoid slang or very "high Hebrew"
- Match the calm, confident English tone

### 4. Sentence Structure

**English:** Can be longer, more complex  
**Hebrew:** Prefer shorter, clearer sentences

**Example:**
- English: "I treat refactoring as a controlled process that involves capturing existing behavior, introducing safeguards, and preferring small, reversible steps."
- Hebrew: Break into 2-3 shorter sentences for clarity

### 5. Avoid Idioms

**Don't use:**
- English idioms that don't translate: "drop me in", "on fire"
- Hebrew idioms that don't match tone: overly casual expressions

**Do use:**
- Clear, direct language
- Professional phrasing

---

## Workflow Steps

### Step 1: Content Preparation

1. ✅ English content is finalized (see `content-inventory.md`)
2. ✅ Review English content for clarity
3. ✅ Identify technical terms that should remain in English
4. ✅ Note any cultural references that need adaptation

### Step 2: Translation Process

1. **Translate section by section** (not word by word)
2. **Read the entire English section first** to understand context
3. **Write Hebrew version** focusing on meaning
4. **Review for:**
   - Natural Hebrew phrasing
   - Professional tone
   - Technical accuracy
   - Clarity

### Step 3: Review & Refinement

1. **Self-review:**
   - Does it sound natural in Hebrew?
   - Does it maintain the professional tone?
   - Are technical terms handled correctly?

2. **Native speaker review:**
   - Get feedback from native Hebrew speaker
   - Preferably someone familiar with tech industry
   - Check for natural phrasing

3. **Tone check:**
   - Compare Hebrew tone to English tone
   - Ensure consistency across pages

### Step 4: Implementation

1. **Add to translation files:**
   - Use JSON structure (see structure below)
   - Maintain same key structure as English
   - Test with i18n system

2. **RTL testing:**
   - Verify layout works with RTL
   - Check spacing and alignment
   - Test on different screen sizes

3. **Final review:**
   - Read entire Hebrew site
   - Check for consistency
   - Verify all content is translated

---

## Translation File Structure

### JSON Structure

```json
{
  "en": {
    "nav": {
      "home": "Home",
      "howIWork": "How I Work",
      "experience": "Experience",
      "resume": "Resume",
      "contact": "Contact"
    },
    "home": {
      "hero": {
        "name": "Avi Koenig",
        "title": "Senior Backend-Oriented Full-Stack Developer",
        "tagline": "I build and evolve production systems..."
      }
    }
  },
  "he": {
    "nav": {
      "home": "בית",
      "howIWork": "איך אני עובד",
      "experience": "ניסיון",
      "resume": "קורות חיים",
      "contact": "יצירת קשר"
    },
    "home": {
      "hero": {
        "name": "אבי קוניג",
        "title": "מפתח Full-Stack בכיר המתמחה ב-Backend",
        "tagline": "[Hebrew translation]"
      }
    }
  }
}
```

### Key Naming Convention

- Use camelCase for keys
- Match English structure exactly
- Keep keys descriptive but concise

---

## Common Translation Challenges

### Challenge 1: "Backend-Oriented Full-Stack Developer"

**Options:**
1. Keep English terms: "מפתח Full-Stack בכיר המתמחה ב-Backend"
2. Translate fully: "מפתח Full-Stack בכיר עם התמחות ב-Backend"
3. Hybrid: "מפתח Backend/Full-Stack בכיר"

**Recommendation:** Option 1 or 3 - keep technical terms in English as they're commonly used in Israeli tech industry.

### Challenge 2: "Understanding Before Changing"

**Translation:** "הבנה לפני שינוי" or "להבין לפני לשנות"

**Consider:** Which sounds more natural? Test with native speaker.

### Challenge 3: "Behavior Over Elegance"

**Translation:** "התנהגות מעל אלגנטיות" or "תפקוד מעל יופי"

**Consider:** May need to explain the concept rather than literal translation.

### Challenge 4: Corporate Language

**English:** "stakeholders", "delivery constraints", "business priorities"  
**Hebrew:** "בעלי עניין", "אילוצי אספקה", "עדיפויות עסקיות"

**Note:** Ensure these sound natural in Hebrew corporate context.

---

## Quality Checklist

Before marking translation as complete:

- [ ] All English content has Hebrew equivalent
- [ ] Technical terms handled consistently
- [ ] Tone matches English (calm, professional)
- [ ] Sentences are clear and natural in Hebrew
- [ ] No idioms or cultural references that don't translate
- [ ] Reviewed by native Hebrew speaker
- [ ] RTL layout tested
- [ ] All pages translated consistently
- [ ] Navigation and UI elements translated
- [ ] Meta tags (title, description) translated

---

## Tools & Resources

### Translation Tools

- **Google Translate:** Use for initial draft, but always refine
- **DeepL:** Often better for professional/technical content
- **Native speaker:** Essential for final review

### Reference Materials

- [Hebrew Tech Terms Dictionary](https://www.techopedia.com) - if available
- Industry-standard Hebrew tech blogs/articles
- Other professional Hebrew websites for tone reference

### Testing Tools

- Browser RTL testing
- Screen reader testing (if applicable)
- Mobile device testing

---

## Maintenance

### When to Update Translations

1. **English content changes** - Update Hebrew immediately
2. **New pages added** - Translate as part of implementation
3. **Tone adjustments** - Review Hebrew to ensure consistency
4. **Technical term evolution** - Update if industry standard changes

### Version Control

- Keep English and Hebrew in sync
- Document translation decisions
- Note any intentional differences between languages

---

## Notes for Translators

1. **Context matters** - Read the entire section before translating
2. **Ask questions** - If meaning is unclear, ask rather than guess
3. **Test readability** - Read Hebrew version aloud to check flow
4. **Maintain consistency** - Use same terms/phrases throughout
5. **Preserve intent** - The goal is to communicate the same message, not use the same words

---

## Example: Full Section Translation

### English (Source)

**Section: Understanding Before Changing**

Most systems aren't greenfield. They're production systems with history, constraints, and business-critical behavior.

Before making changes, I focus on understanding how the system behaves today, which workflows matter most, and where assumptions are undocumented.

### Hebrew (Translation)

**Section: הבנה לפני שינוי**

רוב המערכות אינן מערכות חדשות. אלו מערכות ייצור עם היסטוריה, אילוצים והתנהגות קריטית לעסק.

לפני ביצוע שינויים, אני מתמקד בהבנת איך המערכת מתנהגת היום, אילו תהליכי עבודה חשובים ביותר, והיכן יש הנחות לא מתועדות.

### Translation Notes

- "greenfield" → "מערכות חדשות" (new systems) - clearer than literal translation
- "production systems" → "מערכות ייצור" - standard term
- "business-critical" → "קריטית לעסק" - natural Hebrew phrasing
- "workflows" → "תהליכי עבודה" - clear translation
- "assumptions are undocumented" → "הנחות לא מתועדות" - preserves meaning

---

## Contact for Translation Questions

If you have questions about:
- Technical term handling
- Tone decisions
- Cultural adaptations
- Specific phrasing

Document the question and decision for future reference.

---

**Last Updated:** Based on PRD v1.0  
**Status:** Workflow defined, translations pending

