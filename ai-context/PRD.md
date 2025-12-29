# 📄 Product Requirements Document (PRD)

## Personal Website – Avi Koenig

**Version:** 1.0  
**Status:** Approved for implementation  
**Primary Goal:** Hiring conversion (remote-first)  
**Secondary Goal:** Passive freelance credibility  
**Stack:** Next.js (latest stable), TypeScript, Tailwind, cookie-based i18n

---

## 1. Background & Context

Avi Koenig is a **senior backend-oriented full-stack developer** with extensive experience in:

* Legacy systems
* Database-heavy internal tools
* CRMs, dashboards, and operational systems
* Safe refactoring under real-world constraints

The existing CV is intentionally compressed and optimized for recruiters.
This website exists to **expand on what the CV omits**, without contradicting it.

The site must:

* Reinforce trust
* Reduce perceived hiring risk
* Communicate judgment, not hype
* Be corporate-compatible without being corporate-performative

---

## 2. Goals & Non-Goals

### 2.1 Primary Goals

* Support recruiters in confidently shortlisting the candidate
* Support hiring managers in deciding to interview
* Position Avi as a **safe, senior hire** for complex systems
* Support **remote-first opportunities** without geography bias

### 2.2 Secondary Goals

* Passively reassure potential freelance clients
* Serve as a durable professional presence (multi-year lifespan)

### 2.3 Explicit Non-Goals

The website is **not**:

* A design portfolio
* A blog platform
* A freelance services landing page
* A thought-leadership or opinion outlet
* A place to experiment with edgy tone or trends

---

## 3. Target Audience

### Primary Audience

* Technical recruiters
* Hiring managers
* Engineering leads / CTOs

### Secondary Audience

* Founders evaluating senior engineers
* Peer engineers reviewing experience

### Explicitly Excluded Audience

* Design-focused evaluators
* Marketing recruiters
* Non-technical audiences

---

## 4. Positioning & Messaging

### 4.1 Core Positioning (internal)

> Senior backend-oriented full-stack developer specializing in understanding, stabilizing, and safely evolving existing production systems under real-world constraints.

### 4.2 Key Messaging Pillars

* Behavior before refactoring
* Correctness over elegance
* Incremental improvement over rewrites
* Pragmatic trade-offs
* Accountability and ownership
* AI as an assistive tool, not a crutch

---

## 5. Tone & Voice

### 5.1 Tone

* Calm
* Professional
* Quietly confident
* Engineer-to-engineer
* Corporate-compatible

### 5.2 Voice Rules

* Clear, declarative sentences
* Minimal adjectives
* Concrete language
* Explain *why*, not just *what*

### 5.3 Forbidden

* Anti-corporate language
* Cynicism or snark
* Buzzwords without substance
* Self-praise or hype
* "AI-first", "10x", "rockstar" language

---

## 6. Language & Localization (i18n)

### 6.1 Languages

* English (default)
* Hebrew (first-class alternative)

### 6.2 Locale Strategy

* **Same URL for all languages**
* Locale determined via:
  * Cookie (persisted user choice)
  * Fallback to browser language
* No locale prefixes in URLs

### 6.3 RTL Support

* Hebrew rendered with `dir="rtl"`
* Layout must support RTL without breaking structure
* Typography adjusted per locale if needed

### 6.4 Translation Rules

* English is the canonical source
* Hebrew translations preserve **meaning and tone**, not literal wording
* Avoid idioms that do not translate cleanly

---

## 7. Information Architecture

### 7.1 Routes / Pages

```
/
  Home
/how-i-work
/experience
/resume
/contact
```

No additional pages in v1.

---

## 8. Page-Level Requirements

### 8.1 Home (`/`)

**Purpose:**
Immediate qualification and reassurance (30-second scan)

**Must Answer:**

* Who is this?
* What kind of engineer is he?
* Why is he safe to interview?
* Is he remote-compatible?

**Required Sections:**

* Hero (name, role, positioning)
* Quick Snapshot (skills & domains)
* What I'm Looking For (roles & environments)
* How I Work (short summary)
* CTAs (Resume → LinkedIn → Email)

**Constraints:**

* No location mentioned
* No explicit freelance pitch
* No excessive detail

---

### 8.2 How I Work (`/how-i-work`)

**Purpose:**
Primary differentiator. Demonstrates judgment and seniority.

**Core Themes (mandatory):**

* Understanding before changing
* Behavior over elegance
* Safe, incremental refactoring
* Working within constraints
* Ownership and handover
* AI as a supportive workflow tool
* Adaptability to teams and technologies

**AI Positioning Rules:**

* AI presented as assistive tooling
* Emphasis on human judgment and responsibility
* No productivity hype
* No tool evangelism

---

### 8.3 Experience Beyond the CV (`/experience`)

**Purpose:**
Reframe omitted freelance and fragmented experience as a strength.

**Structure:**

* Intro explaining pattern-based approach
* Anonymous experience patterns:
  * Legacy systems that can't be rewritten
  * Database-heavy operational systems
  * Low-context / drop-in environments
  * Stabilization and debugging
  * Mentorship and standards

**Constraints:**

* No client names
* No sensitive metrics
* No internal system exposure
* Focus on approach, not outcomes

---

### 8.4 Resume (`/resume`)

**Purpose:**
Single source of truth for recruiters.

**Requirements:**

* Embedded PDF viewer
* Download button
* PDF must match official CV exactly
* No additional commentary

---

### 8.5 Contact (`/contact`)

**Purpose:**
Low-friction communication.

**Requirements:**

* Email
* LinkedIn
* Minimal copy
* No forms required

---

## 9. Technical Requirements

### 9.1 Stack

* Next.js (latest stable)
* App Router
* TypeScript
* Tailwind CSS
* next-intl (or equivalent) for i18n

### 9.2 Design System

* Neutral palette
* Single accent color
* High whitespace
* Max content width (`max-w-3xl` or similar)
* Accessible contrast
* Mobile-readable, desktop-first

### 9.3 Performance

* Fast initial load
* No heavy animations
* Minimal JS where possible

---

## 10. Success Criteria

The product is successful if:

* Recruiters can confidently forward the profile
* Hiring managers feel reduced risk
* Interviews align with backend / systems work
* Fewer irrelevant opportunities appear
* Site remains relevant for multiple years

---

## 11. Future Considerations (Explicitly Out of Scope for v1)

* Blog or writing section
* Public case studies with client attribution
* Speaking / teaching content
* Analytics beyond basic traffic
* Design experimentation

---

## 12. Final Notes

This website is a **conversion tool**, not a playground.

Clarity > cleverness  
Trust > trends  
Judgment > volume

---

## Document History

* **v1.0** - Initial PRD based on comprehensive discovery and content development process
* Extracted from `content-chat.md` conversation transcript

