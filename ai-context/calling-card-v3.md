# Avi Koenig

## Custom software, integrations & practical AI for your business

**I help businesses replace manual work, connect disconnected systems, and build software their teams can rely on every day.**

I'm a backend-focused full-stack developer with 8+ years of experience building and maintaining production software. I take projects all the way from understanding the business problem to architecture, development, deployment and ongoing support.

I've worked in manufacturing, telecom, financial systems, order management and SaaS. I'm most useful when a project needs someone who understands how the business runs, can work across the whole technical stack, and owns the delivery.

## What I can help you with

- **Custom business applications:** internal tools, management dashboards, operational portals and workflows, built around how your team actually works.
- **Integrations and automation:** connecting your ERP, APIs, databases and outside services, so your team re-enters less data and the information matches across systems.
- **Priority ERP and manufacturing software:** production tracking, inventory visibility, barcode workflows, packing, label printing and production apps connected to Priority. I write to the ERP only through its official API and check every write afterwards. That matters because Priority can report success on a write that actually failed.
- **AI connected to business data:** assistants that let authorized staff ask questions in plain language and generate reports, with access controls and an audit log of every query.
- **Existing systems and legacy modernization:** tracking down production issues, improving performance, untangling old code, and modernizing applications one manageable step at a time, leaving clean, logical code that's easy to maintain and extend.
- **Project continuity and handover:** documentation of the architecture and business rules that any developer, supplier or internal team can pick up, plus stabilizing systems so the handover goes smoothly.

## Services, and where I've delivered them

### Production software connected to your ERP

I build the apps your production teams run on: production reporting, packing, pallet and stock tracking, label printing and dashboards. They work on a tablet at the machine, and they write straight to your ERP.

**Delivered:** for about 18 months I've led development of a manufacturer's custom software platform: management apps, production tools, backend services and Priority ERP integrations. Staff across the company use it every day, from management to production.

**3,100+ commits across 13 repositories and about 20 production modules**, released through a staging → production pipeline. That's part of **10,000+ GitHub contributions since 2019**, most of them in private client repositories. I own it from requirements and architecture through deployment and live support.

| Module | What it does for the business |
|---|---|
| **CNC planning & schematic** | Sends orders to a cutting optimizer, then lets operators report pieces and advance production with a tap on an interactive sheet view |
| **Packing** | Scan-based packing documents created at the packing station, with draft review and finalize, written directly to the ERP |
| **Pallets & label printing** | One reliable source for pallet and stock tracking, plus the labels printed from it |
| **Production metrics** | Order-progress dashboards by area and weight, with history over time |
| **Ops tooling** | Monitoring of failed ERP transfers, admin tools for data refreshes, user and role management |

### AI assistant over your business data

I can add a chat assistant to your systems. Your managers ask questions about ERP and database information in plain language and download reports with charts, without waiting for a developer.

**Delivered:** I shipped one in production (Claude + MCP) inside a business application. Data access is read-only, permissions are role-based, and every query goes to an audit log.

### Integrations & legacy modernization

I connect systems that don't talk to each other, and I modernize aging applications step by step without stopping the business.

**Delivered:** backend services and integrations for real-time order management and financial systems. I modernized legacy applications, including an 18-year-old business system, and moved services from C# and Oracle to Node.js.

### Technical training & mentoring

I help developers and teams understand the technology they work with, build practical skills, and become more independent. I can provide developer training, one-on-one mentoring, team onboarding and knowledge transfer, especially in JavaScript, TypeScript, React, Node.js and full-stack development.

I teach from real production experience, so concepts are tied to actual applications, architectural decisions and everyday debugging, not just textbook examples.

**Delivered:** lecturing and one-on-one mentoring at Israeli colleges, teaching as a **civilian contractor at Unit 8200**, and creating a **React training program for several development teams at Partner Telecom**.

## How I work

**Understand the process. Define a useful first deliverable. Build it, put it into use, and improve it.**

I work directly with the people who use the software to understand the workflow and its edge cases. I study the existing systems and data, clarify scope, and choose technology that fits the business. Testing, deployment, documentation and maintainability are part of the delivery.

- **Checked against real data.** I test fixes against real data and check UI changes in the running app before I call them done.
- **Production data handled with care.** Diagnostics are read-only, data writes happen only through code that went through human PR review, and nothing goes to production without approval. Risky new features ship switched off and are turned on deliberately. A configuration mistake can't switch them on by accident.
- **Decisions written down.** Architecture decision records and a knowledge base, so your team isn't dependent on me.

## CI/CD and testing

Every change passes automated checks before it reaches your users, and releases are routine instead of risky.

- **Automated pipeline:** GitHub Actions run type checks and AI-assisted code review on every pull request, then deploy to self-hosted staging and production servers.
- **Staging first:** changes run on a staging environment against a test copy of the ERP before they're promoted, as a versioned release, to production.
- **Layered tests:** 200+ automated test files: unit tests (Vitest), integration tests against real databases and the ERP API, and end-to-end browser tests (Playwright) for critical production workflows.
- **Checks before code is saved:** pre-commit hooks lint and format each change before it's committed, so problems are caught on the developer's machine, not in production.
- **Live verification:** UI changes are checked in the running app, and data fixes are tested against real data before release.

## Logging and real-time monitoring

When something goes wrong in production, you hear about it right away, and there's a record showing exactly what happened.

- **Instant alerts:** failed or unusual production actions trigger a Telegram alert to the responsible team in real time. Workers can also press a help button in the app to call for assistance.
- **Full action history:** every production action, override and AI query is logged to a dedicated logging database: who did it, when, and what the outcome was.
- **ERP sync monitoring:** a dedicated dashboard catches records that failed to transfer to the ERP, before they turn into inventory or billing errors.
- **Security audit trail:** logins, permission changes and sensitive operations are recorded for accountability.
- **Never in the way:** if monitoring itself fails, the worker's action still goes through. Logging never blocks production.

## Ways we can work together

- A focused project: one integration, workflow, dashboard, or AI pilot.
- Ongoing development: building and improving your product or internal systems.
- An existing project that needs investigation, stabilization, or a clear path forward.
- Remote collaboration with your team or direct delivery as an independent developer.

## Technical toolkit

**Core:** TypeScript, JavaScript, Node.js, React, Next.js, Express, NestJS, SQL, and SQL Server.  
**Also experienced with:** Vue, Python/FastAPI, MongoDB, Oracle, GraphQL, REST APIs, real-time applications, Docker, GitHub Actions, Vitest, and Playwright.  
**Specialized experience:** Priority ERP integration (OData), manufacturing workflows, AI assistants (Claude API, MCP, tool-calling agents), role-based access, and Hebrew/RTL applications.

**Languages:** Native Hebrew and English, conversational French and Portuguese.

## AI-assisted development

I work daily with Claude Code agents, running parallel sessions in isolated git worktrees, with custom skills and automated code review. I keep project knowledge in an Obsidian knowledge base and use code maps (graphify) so both I and the AI tools understand a large codebase quickly. Result: faster delivery without lowering the review bar. I take **full responsibility** for the software that comes out.

## Let's talk about what you need

Have a manual process taking too much time, systems that need to talk to each other, or a software project that needs an experienced developer to move it forward?

Send me a short description of the problem or idea, and we can work out a practical starting point.

**Email:** [avi@koenig.co.il](mailto:avi@koenig.co.il)  
**Phone / WhatsApp:** [+972 54 691 2072](https://wa.me/972546912072)  
**Website:** [koenig.co.il](https://koenig.co.il)  
**LinkedIn:** [linkedin.com/in/avi-koenig](https://www.linkedin.com/in/avi-koenig)

---

## Short introduction to forward

Avi Koenig is a full-stack developer with 8+ years of experience who helps businesses build custom applications, automate manual processes, connect systems, and add practical AI capabilities. He has owned production systems from requirements through deployment and support. Most recently he spent about 18 months leading a manufacturer's Priority-integrated platform (about 20 production modules), and his particular depth is in backend development, Priority ERP integrations and manufacturing operations. Available for remote projects and ongoing collaboration. Contact: avi@koenig.co.il · +972 54 691 2072 · https://koenig.co.il
