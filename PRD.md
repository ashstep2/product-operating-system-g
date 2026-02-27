# AI Product Intelligence Platform
### From Scattered Signals to Shipped Decisions

**Author:** Ashka Stephen | **Date:** February 2026 | **Status:** Draft

---

## 1. The Problem

Product organizations are drowning. Not in a lack of data — in a flood of *unstructured signals* scattered across 15+ tools.

**The daily reality of a PM at a growth-stage B2B company:**
- GitHub issues pile up with feature requests, bug reports, and integration demands — each one a potential signal, none of them triaged against strategy
- Hacker News and Reddit surface competitive threats and user pain points in real-time, but no one monitors them systematically
- Customer discovery interviews produce rich qualitative data that lives in Google Docs, rarely synthesized into actionable frameworks
- Competitive moves happen weekly — pricing changes, feature launches, partnership announcements — tracked in ad-hoc spreadsheets
- Internal data from Amplitude, Mixpanel, and Salesforce sits in dashboards that nobody connects to product strategy

**The cost isn't time — it's missed signals.** PMs spend 15+ hours/week on information gathering and synthesis. But the real damage is the competitive threat that went unnoticed for 6 weeks, the customer segment that churned because discovery insights never reached the roadmap, the feature that shipped without the market context that would have changed its priority.

The tools PMs use today — Notion, Linear, Jira, Confluence — are *storage* tools, not *reasoning* tools. They hold information but don't structure it into decisions. AI summarization tools (Notion AI, ChatGPT) reduce volume but produce generic outputs that PMs don't trust for strategic decisions.

**The gap:** No tool connects signal ingestion → structured PM reasoning → decision-ready artifacts in a single workflow.

---

## 2. North Star Vision

**12-month vision:** An AI platform that ingests signals from everywhere a product team operates, structures them through battle-tested PM reasoning frameworks, and produces decision-ready artifacts that teams actually use.

**The key insight: value is in *structured reasoning*, not summarization.**

Anyone can summarize a Slack thread. The value is in running that signal through a competitive response framework that classifies the threat, evaluates your moat, and produces a response strategy with trade-off documentation. That's what experienced PMs do — they apply *frameworks* to *signals* to produce *decisions*.

**Our approach: a library of 30 PM reasoning skills** — codified frameworks covering strategic analysis, planning, execution, agent-first product design, and research analysis. Each skill is:
- **Principled:** Built on documented best practices with cited sources
- **Structured:** Step-by-step instructions that produce specific artifacts (scored matrices, trade-off docs, roadmaps)
- **Connected:** Skills feed into each other via a dependency graph (e.g., competitive-response → feature-prioritization → writing-prds-for-ai)
- **Contextual:** Skills ingest signals and company context to produce tailored, not generic, outputs

**This skill library is the moat.** Competitors can build signal ingestion (commodity). They can build AI summarization (commodity). They cannot easily replicate 30 interconnected reasoning frameworks that encode how the best PMs actually think, each producing specific artifact types that plug into the next skill in the chain.

**Platform architecture:**

```
Signals (GitHub, HN, Reddit, News, Internal)
    ↓
Signal Processing & Relevance Scoring
    ↓
Skill Library (30 reasoning frameworks)
    ↓  ← Company context (products, verticals, competitors)
Decision Workspace (artifacts, trade-offs, roadmaps)
    ↓
Export & Share (PRDs, briefs, presentations)
```

---

## 3. Target Users

**Primary persona: The Growth-Stage PM**
- Works at a B2B SaaS company (50-500 employees)
- Manages 1-3 product areas, reports to VP Product or CPO
- Spends 40% of time on information gathering they wish were automated
- Uses 8+ tools daily (Slack, Linear, Notion, Amplitude, GitHub, Figma, Google Docs, Salesforce)
- Has tried ChatGPT/Claude for PM work but found outputs "too generic" for strategic decisions

**Why this persona:** Large enough company to have signal overload, small enough that one PM can champion a new tool without procurement bureaucracy. The PM feels the pain personally and has authority to adopt tools.

**Entry motion:**
1. Individual PM discovers the platform → runs their first skill (competitive-response on a real competitor)
2. Output quality surprises them — it's structured, cited, decision-ready, not a generic summary
3. PM shares the artifact in a strategy review → team sees the quality difference
4. Team lead requests access → 3-5 PMs adopt → org-level conversation

**Secondary persona: The VP Product** — cares about consistency of PM output quality across the team, reducing time-to-decision, and having a system of record for product strategy decisions.

---

## 4. MVP Scope (3 Engineers, 3 Months)

### Month 1: Signal Foundation
- **Signal ingestion:** GitHub (issues, PRs, discussions), Hacker News (front page + keyword tracking), Reddit (subreddit monitoring), CSV import for manual data
- **Signal processing:** AI-powered relevance scoring, automatic tagging to skill categories, deduplication
- **Signal feed:** Filterable dashboard showing incoming signals with source, relevance, and suggested skills

### Month 1-2: Core Skills (5 of 30)
- **Customer Discovery** — interview guide generation, hypothesis tracking, synthesis
- **Competitive Response** — threat classification, moat analysis, response strategy
- **Feature Prioritization** — weighted scoring, RICE adaptation, trade-off documentation, sequenced roadmap
- **North Star Metrics** — metric tree design, leading/lagging indicators, dashboard spec
- **User Segmentation** — segment profiling, prioritization matrix, cross-segment insights

*Why these 5:* They form a complete chain (Discovery → Segmentation → Competitive → Prioritization → Metrics) and cover the highest-frequency PM tasks.

### Month 2-3: Decision Workspace
- **Artifact rendering:** Each skill produces structured artifacts (tables, scored matrices, roadmaps) rendered as interactive documents
- **Edit & refine:** PMs can modify AI-generated artifacts, add context, adjust scores
- **Share & export:** PDF export, Notion integration, shareable links with permission controls
- **Skill chaining:** After completing one skill, the platform suggests the next skill in the dependency graph and pre-populates context

### Success Metrics
| Metric | Target | Rationale |
|---|---|---|
| Weekly Active Users | 200 | 50 teams × 4 PMs — validates organic adoption |
| Time-to-Artifact | <15 minutes | Current manual process: 3-4 hours |
| Artifact Quality Rating | 3.8+ / 5.0 | Rated by PMs who use the output in real decisions |
| Skill Completion Rate | >70% | Users finish the full skill flow, not just start it |
| Organic Sharing Rate | >30% | Artifacts shared with at least one team member |

---

## 5. Key Tradeoffs

**5 skills vs. 30 skills at launch**
- *Choosing:* 5 skills, deeply polished
- *Why:* Each skill needs domain-specific prompt engineering, artifact templates, and quality validation. 5 excellent skills > 30 mediocre ones. Expand post-PMF.

**Pre-built connectors vs. API-first**
- *Choosing:* Pre-built connectors (GitHub, HN, Reddit) + CSV import
- *Why:* PMs want zero-setup signal ingestion. API-first serves developers, not our primary persona. Add API in v2 for platform plays.

**Single-player vs. team-first**
- *Choosing:* Single-player with sharing
- *Why:* Adoption starts with one PM. Team features (shared workspaces, role-based access, team dashboards) add complexity that slows individual TTV. Add team features when organic sharing rate exceeds 30%.

**Web app vs. CLI**
- *Choosing:* Web app
- *Why:* Our target persona lives in browsers, not terminals. CLI version exists (pm-playbooks) but serves developer-PMs. Web app is the mass-market path.

**Opinionated frameworks vs. customizable**
- *Choosing:* Opinionated with escape hatches
- *Why:* The value prop is "structured reasoning from proven frameworks." If everything is customizable, we're just another AI text tool. Ship opinionated defaults, allow weight/criteria adjustments within the framework.

---

## 6. Open Questions

1. **Trust calibration:** How much do PMs trust AI-generated strategic artifacts? Our pilot showed 4.1/5 quality ratings, but we need larger N. Plan: instrument trust signals (edit rate, share rate, reuse rate) from day 1.

2. **Framework rigidity vs. flexibility:** Some PMs will want to add custom scoring criteria or skip steps. How much customization before we lose the "structured reasoning" value prop? Plan: start rigid, observe where users consistently override, then open those specific escape hatches.

3. **Pricing model:** Freemium (limited skills) vs. trial (full access, time-limited) vs. usage-based (per artifact)? Leaning freemium — let PMs experience one full skill for free, then gate the library. Need `pricing-and-monetization` analysis with real willingness-to-pay data.

4. **Enterprise data security:** B2B PMs will feed competitive intelligence and internal strategy into the platform. SOC 2 is table stakes. Do we need on-prem deployment option for enterprise? Plan: cloud-only for MVP, evaluate on-prem demand signal at 50+ paying teams.

5. **Skill quality maintenance:** As the library grows to 30+ skills, how do we ensure quality stays high? Each skill needs periodic review against evolving best practices. Plan: version skills, track artifact quality ratings per skill, flag skills below 3.5 threshold for review.

---

*Built with [Product Intelligence Platform](/) — 30 PM reasoning skills, real-time signals, decision-ready artifacts.*
