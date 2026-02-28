# Customer Discovery: Glean Proactive Intelligence Expansion

| Field | Detail |
|---|---|
| **Company** | Glean (Enterprise AI Search & Knowledge Platform) |
| **Valuation** | $4.6B (Series E) |
| **Current Product** | AI-powered enterprise search, Q&A, knowledge graph, app builder |
| **Discovery Focus** | Expansion from reactive search/Q&A into proactive intelligence — AI that surfaces insights, risks, and opportunities before users ask |
| **PM** | Ashka Stephen |
| **Date** | February 2026 |
| **Status** | Discovery Complete (Simulated) |

---

## 1. Scope & Framing

### Discovery Objective

Glean currently excels at answering questions users already know to ask. The strategic question is whether there is a large, monetizable opportunity in **proactive intelligence** — an AI layer that monitors enterprise knowledge flows and autonomously surfaces insights, blockers, risks, and opportunities to the right person at the right time, without being prompted.

### What We Are Trying to Learn

1. **Problem Existence**: Do knowledge workers regularly miss critical information that was available somewhere in their organization? How often does this cause real business harm?
2. **Current Workarounds**: How do people currently stay on top of cross-functional information? What rituals, tools, and habits do they use — and where do those break down?
3. **Willingness to Act on AI-Surfaced Insights**: If an AI proactively surfaced something important, would people trust it enough to act? What conditions must be true for trust?
4. **Value Hierarchy**: Which types of proactive insights are highest-value? (e.g., deal risk signals, competitive moves, project blockers, knowledge gaps, org misalignment)
5. **Buyer vs. User Dynamics**: Who would champion this internally — the IC who benefits, or the VP who wants team-wide visibility? What does the procurement path look like?
6. **Noise Tolerance**: How many low-value proactive notifications would kill adoption? What is the acceptable signal-to-noise ratio?
7. **Privacy and Governance Constraints**: What information should the system never surface proactively, even if it is technically accessible? Where are the organizational red lines?

### Scope Boundaries

- **In scope**: Enterprise knowledge workers at companies with 500+ employees, already using 10+ SaaS tools, with cross-functional collaboration patterns.
- **Out of scope**: SMBs, single-tool environments, consumer use cases, vertical-specific compliance workflows (for now).
- **Time horizon**: 0-to-1 product decision within 90 days. This discovery informs whether to invest a dedicated team in building a proactive intelligence layer vs. deepening the existing search/Q&A moat.

### Key Risks to Discovery Validity

- **Desirability bias**: People say they want proactive insights but ignore them in practice (the "unread Slack channel" problem).
- **Hypothetical framing**: Asking about a product that does not exist yet invites aspirational answers. We must anchor to past behavior.
- **Survivorship bias in recruitment**: Power users of Glean are already search-oriented; they may underrepresent the people who never search at all (and who would benefit most from proactive surfacing).

---

## 2. Falsifiable Hypotheses

### H1: The Missed-Information Problem

**Hypothesis**: Knowledge workers at enterprises with 500+ employees miss business-critical information at least once per month because it existed in a tool or document they did not think to search.

**Validation evidence**: 7+ of 12 interviewees describe a specific, recent instance (within 60 days) where they discovered information too late that was available in an existing system. The incident caused measurable harm (missed deadline, duplicated work, lost deal, wrong decision).

**Invalidation evidence**: Fewer than 4 interviewees can recall such an incident, or incidents described are trivial (minor inconvenience, no business impact).

---

### H2: Status Quo Workarounds Are Fragile

**Hypothesis**: The primary way knowledge workers stay informed across functions is through manual rituals — Slack scanning, status meetings, 1:1s, and email monitoring — and these rituals break down at scale (team size >20, tools >10).

**Validation evidence**: Interviewees describe spending 30+ minutes/day on "information gathering rituals" and rate their confidence in catching everything below 6/10. They can name specific categories of information they know they are missing.

**Invalidation evidence**: Interviewees report high confidence (8+/10) in their current information flow, or they have already built automated systems (dashboards, Zapier workflows, custom bots) that solve the problem adequately.

---

### H3: Notification Fatigue Is the Core Risk

**Hypothesis**: Users will reject proactive intelligence if more than 30% of surfaced items are irrelevant to them, regardless of how good the remaining items are.

**Validation evidence**: Interviewees describe abandoning at least one notification-based tool (Slack channels, email digests, dashboard alerts) specifically because signal-to-noise ratio degraded. They articulate a specific threshold ("if more than X out of 10 are noise, I stop looking").

**Invalidation evidence**: Interviewees describe tolerating high-noise systems because the occasional high-value signal justifies the cost, or they describe effective personal filtering strategies that mitigate noise.

---

### H4: Deal and Revenue Risk Is the Highest-Value Use Case

**Hypothesis**: For revenue-facing roles (sales, CS, account management), proactive alerts about deal risk signals — champion job change, competitor mention in support tickets, declining product usage — would be perceived as 3x+ more valuable than general knowledge surfacing.

**Validation evidence**: Revenue-facing interviewees rank deal risk signals as their #1 desired proactive insight category and can quantify the dollar impact of catching these signals 1-2 weeks earlier. They describe at least one deal lost or renewal churned due to a missed signal.

**Invalidation evidence**: Revenue-facing interviewees rank other categories higher (e.g., competitive intelligence, internal alignment), or they report that existing tools (Gainsight, Clari, Gong) already solve deal risk signaling adequately.

---

### H5: Managers Value Proactive Intelligence More Than ICs

**Hypothesis**: People managers (director+ level) with 8+ direct/indirect reports will express 2x higher willingness to pay for proactive intelligence than individual contributors, because they have broader information needs and less time to search.

**Validation evidence**: Manager interviewees describe the information-gap problem as more acute than IC interviewees, spontaneously mention "I need to know what I don't know," and express willingness to pay $50+/user/month for a proactive layer. ICs describe the problem as "nice to have."

**Invalidation evidence**: ICs express equal or higher urgency, or managers report that their direct reports and existing reporting structures already keep them sufficiently informed.

---

### H6: Trust Requires Explainability

**Hypothesis**: Users will not act on a proactively surfaced insight unless the system shows why it surfaced (source documents, reasoning chain, confidence level). A bare recommendation without provenance will be ignored.

**Validation evidence**: Interviewees describe ignoring AI-generated recommendations in other tools because they could not verify the underlying data. They articulate that "showing your work" is a prerequisite for trust. When asked what would make them act on a proactive alert, they spontaneously mention source attribution.

**Invalidation evidence**: Interviewees describe acting on AI recommendations without checking sources (e.g., trusting Copilot suggestions, accepting Glean answers at face value), indicating that brand trust or pattern accuracy is sufficient without per-item explainability.

---

### H7: Privacy Boundaries Are Non-Negotiable and Non-Obvious

**Hypothesis**: At least 50% of interviewees will identify categories of information that should never be surfaced proactively — even if technically accessible via existing permissions — because proactive surfacing changes the social contract around information discovery.

**Validation evidence**: Interviewees express discomfort with specific scenarios (e.g., "the AI told my skip-level that I updated my LinkedIn," "it surfaced a draft performance review to the team lead," "it flagged a Slack DM sentiment pattern"). They draw a clear line between "searchable" and "should be pushed."

**Invalidation evidence**: Interviewees are comfortable with the system surfacing anything that falls within existing permission boundaries, viewing proactive surfacing as functionally equivalent to search.

---

### H8: Cross-Functional Blind Spots Cause the Most Damage

**Hypothesis**: The highest-impact missed information occurs at functional boundaries — engineering not knowing about a sales commitment, marketing not knowing about a product pivot, CS not knowing about a known bug. Within-team information flow is adequate.

**Validation evidence**: 8+ of 12 interviewees describe their worst "missed information" story as cross-functional. They rate within-team information flow at 7+/10 and cross-functional flow at 4 or below.

**Invalidation evidence**: Within-team information gaps are cited as equally or more damaging, or cross-functional gaps are described as a coordination/process problem that technology cannot solve.

---

### H9: Passive Digest Beats Real-Time Push

**Hypothesis**: Users would prefer a daily/weekly proactive intelligence digest (async, scannable) over real-time push notifications, because real-time interruptions conflict with deep work patterns.

**Validation evidence**: Interviewees describe deliberately batching their information consumption (checking email at set times, muting Slack during focus blocks). When presented with delivery format options, 7+/12 choose digest over real-time push.

**Invalidation evidence**: Interviewees describe wanting time-sensitive signals in real time (e.g., "if a key customer files an escalation, I need to know now, not tomorrow morning") and reject the idea that a digest could replace real-time alerting for high-severity items.

---

### H10: Existing Glean Users Are the Natural Beachhead

**Hypothesis**: Companies already using Glean for search will adopt proactive intelligence 3x faster than companies evaluating Glean for the first time, because the knowledge graph and connector infrastructure are already in place.

**Validation evidence**: Existing Glean users describe the transition as natural ("if Glean already knows our data, it should tell me what matters"). They express willingness to expand their contract. New prospects, by contrast, describe the proactive pitch as "too much, too fast" and want to start with search.

**Invalidation evidence**: Existing Glean users express skepticism about scope creep ("I just want search to work well") or new prospects are equally excited about proactive intelligence as a standalone value proposition.

---

## 3. Interview Guide

### Preamble (Read to Every Participant)

> Thank you for taking the time. I'm doing research to understand how people at large organizations stay on top of information across teams and tools. There are no right or wrong answers — I'm interested in your actual experience, not opinions about hypothetical products. I'll ask about specific situations you've been in. Everything is confidential and will be anonymized.

### Theme A: Daily Information Flow (Warm-Up)

**Q1**: Walk me through the first 30 minutes of your workday. What do you check, and in what order?

*Goal: Map the current information-gathering ritual without leading toward any product concept.*

**Q2**: How many different tools do you check on a typical day to feel "caught up"? Can you name them?

*Goal: Quantify tool sprawl and identify the information surface area.*

**Q3**: On a scale of 1-10, how confident are you by mid-morning that you know everything important that happened since yesterday? What makes you give that number and not higher?

*Goal: Calibrate perceived information coverage and identify known gaps.*

### Theme B: Missed Information (Past Behavior)

**Q4**: Tell me about the last time you discovered a piece of information too late — something that was available somewhere in your company but you didn't find it in time. What happened?

*Goal: Elicit a specific, recent story. Anchor to facts, not feelings. This is the core Mom Test question — we are asking about their life, not our idea.*

**Q5**: How did you eventually find that information? What would have been different if you had known 2 weeks earlier?

*Goal: Quantify the cost of delay and understand discovery paths.*

**Q6**: How often does something like that happen — where you realize after the fact that the answer was already out there? Once a week? Once a month? Once a quarter?

*Goal: Establish frequency baseline for H1.*

**Q7**: When that happens, is it usually information within your own team, or from another function entirely?

*Goal: Test H8 (cross-functional blind spots).*

### Theme C: Cross-Functional Visibility

**Q8**: Think about a team you collaborate with frequently but are not part of. How do you stay informed about what they are working on? What breaks about that system when things get busy?

*Goal: Map cross-functional information channels and their failure modes.*

**Q9**: Has there ever been a time when your team made a decision that conflicted with something another team was doing — and you only found out after the fact? What was the consequence?

*Goal: Surface concrete cross-functional misalignment stories for H8.*

**Q10**: If you could magically know one thing from every other team in your org each week, what would it be?

*Goal: Identify the single highest-value cross-functional signal per persona.*

### Theme D: Notification and Attention Economics

**Q11**: Tell me about a notification system or alert tool you stopped using. Why did you stop?

*Goal: Test H3 (noise tolerance) by examining past behavior with proactive systems.*

**Q12**: Is there a notification system or alert that you find genuinely valuable — one you always read? What makes it different from the ones you ignore?

*Goal: Identify the design properties of effective proactive signals.*

**Q13**: When you get a useful piece of information pushed to you (not something you searched for), what makes you trust it enough to act on it?

*Goal: Test H6 (trust and explainability) without leading.*

### Theme E: Reactions to Proactive Surfacing (Late in Interview)

**Q14**: Imagine you opened a tool Monday morning and it said: "Three things happened last week that are relevant to your work — here they are, with links to the source." What is your gut reaction?

*Goal: Gauge initial emotional response to the proactive concept. Watch for enthusiasm vs. skepticism vs. anxiety.*

**Q15**: What would have to be true for you to trust that list? What would make you ignore it?

*Goal: Identify trust prerequisites. Do not pitch — let them define the requirements.*

**Q16**: Are there types of information you would not want a system to proactively surface to you — even if it was technically available? Why?

*Goal: Test H7 (privacy boundaries) directly.*

**Q17**: Would you prefer to get this kind of thing as a real-time notification, a daily digest, or a weekly summary? Why?

*Goal: Test H9 (digest vs. push) with direct preference elicitation. Triangulate against observed behavior from Q11-Q12.*

### Theme F: Willingness to Pay and Organizational Dynamics

**Q18**: If a tool like this existed and worked well, who in your organization would be the person to champion buying it? Would it be you, your manager, or someone in IT?

*Goal: Map the buyer persona and procurement path.*

**Q19**: What would that person need to see to approve the budget — a demo, a pilot, ROI data, something else?

*Goal: Identify the buying criteria and sales motion.*

**Q20**: What is the closest thing to this that your company has tried before? What happened?

*Goal: Uncover competitive solutions, failed internal projects, and organizational scar tissue.*

### Closing

**Q21**: Is there anything I should have asked about but didn't? Anything else about how information flows (or doesn't) in your organization?

*Goal: Catch blind spots in the interview guide itself.*

---

## 4. Recruitment Strategy

### Target Personas and Sample Sizes

| Persona | Title Range | Why They Matter | Target n |
|---|---|---|---|
| **Knowledge Worker IC** | Senior Engineer, Senior Designer, Staff Analyst | Represent the daily user. Experience tool sprawl firsthand. Can validate H1, H2, H3. | 3 |
| **People Manager** | Engineering Manager, Director of Product, VP of Marketing | Broader information needs, less time to search. Test H5. Control the budget. | 3 |
| **Revenue-Facing IC** | Enterprise AE, CSM, Solutions Engineer | Test H4 (deal risk). High-urgency, high-dollar information gaps. | 3 |
| **IT / Admin Buyer** | Head of IT, Chief of Staff, Director of Business Systems | Control tool procurement. Understand permission models. Test H7, H10. | 2 |
| **Executive** | VP+, C-suite | Strategic buyer. Validate willingness to pay and organizational priority. Test H5 at the extreme. | 1 |

**Total: 12 interviews** (sufficient for qualitative saturation in a focused discovery sprint).

### Recruitment Criteria

**Must-have:**
- Company size 500+ employees
- Organization uses 10+ SaaS tools (Slack, Google Workspace or M365, Salesforce or HubSpot, Jira or Asana, Confluence or Notion, plus others)
- Participant has been in role 6+ months (enough tenure to have experienced information gaps)

**Nice-to-have:**
- Mix of Glean customers (4-5) and non-customers (7-8) to test H10
- Industry diversity: at least 3 of {tech, financial services, healthcare, professional services, retail}
- Company stage diversity: at least 2 public companies, at least 2 late-stage startups

### Recruitment Channels

| Channel | Approach | Expected Yield |
|---|---|---|
| **Glean Customer Success** | Ask CS team to introduce 4-5 power users from existing accounts. Position as "product feedback session." | 4-5 participants |
| **LinkedIn Outreach** | Target senior ICs and managers at companies matching criteria. Use Glean's sales intelligence to identify non-customers in ICP. Cold outreach with $75 Amazon gift card incentive. | 3-4 participants |
| **UserTesting.com / Respondent.io** | Screen for enterprise knowledge workers at 500+ employee companies. $100-150 incentive for 45-minute session. | 2-3 participants |
| **Personal Network / Warm Intros** | Ask Glean's GTM and engineering teams for warm intros to contacts at target companies. | 1-2 participants |

### Scheduling and Logistics

- **Format**: 45-minute video call (Zoom). Record with consent for synthesis.
- **Timeline**: 3 weeks for all 12 interviews (4/week).
- **Incentive**: $75 Amazon gift card for non-customers. Glean customers receive "early access to beta" positioning (no monetary incentive — they are motivated by product influence).

---

## 5. Synthesis Framework

### Per-Interview Processing

For each interview, create a structured summary within 24 hours:

| Field | Content |
|---|---|
| **Participant ID** | P01-P12 (anonymized) |
| **Persona** | IC / Manager / Revenue / IT-Admin / Executive |
| **Company Profile** | Size, industry, tool stack, Glean customer (Y/N) |
| **Top 3 Quotes** | Verbatim quotes that capture key insights |
| **Missed-Info Story** | Summary of their most impactful story (Q4-Q5) |
| **Cross-Functional Gap Rating** | Self-reported 1-10 (Q3, Q7) |
| **Notification Graveyard** | Tools they stopped using and why (Q11) |
| **Trust Prerequisites** | What they need to act on proactive info (Q13, Q15) |
| **Privacy Red Lines** | Categories they would not want surfaced (Q16) |
| **Preferred Delivery Format** | Real-time / Daily digest / Weekly summary (Q17) |
| **Buyer Path** | Who champions, what they need to see (Q18-Q19) |
| **Hypothesis Evidence** | For each of H1-H10: supports / contradicts / neutral, with specific evidence |

### Cross-Interview Analysis

**Step 1: Affinity Clustering**
- Print all Top 3 Quotes on cards (physical or Miro board).
- Cluster by emergent theme. Do not use hypothesis labels yet — let themes emerge bottom-up.
- Name each cluster with a participant-language label (their words, not ours).

**Step 2: Hypothesis Scorecard**
- For each hypothesis, tally: Validated (strong evidence) / Partially Validated / Neutral / Contradicted.
- A hypothesis is validated if 7+/12 provide supporting evidence and fewer than 3 provide contradicting evidence.
- A hypothesis is invalidated if 5+/12 provide contradicting evidence.
- Anything in between is "inconclusive — needs more data."

**Step 3: Persona Heat Map**
- Build a matrix: Personas (rows) x Value Themes (columns).
- Score each cell 0-3 based on expressed urgency.
- Identify which persona has the hottest problem (entry point for product).

**Step 4: "Jobs to Be Done" Extraction**
- From the stories and quotes, extract JTBD statements in the format:
  > When [situation], I want to [motivation], so I can [outcome].
- Group by persona. Identify the 3-5 highest-frequency, highest-urgency jobs.

**Step 5: Risk Register**
- Catalog every concern, objection, and "yeah but..." from interviews.
- Categorize: Privacy / Trust / Noise / Organizational / Technical / Pricing.
- Rank by frequency and severity. These become design constraints.

---

## 6. Discovery Report (Simulated — 12 Interviews Completed)

### Participants

| ID | Persona | Company Size | Industry | Glean Customer | Tools Used Daily |
|---|---|---|---|---|---|
| P01 | Engineering Manager | 2,200 | SaaS | Yes | 14 |
| P02 | Senior AE | 8,500 | Financial Services | No | 11 |
| P03 | Director of Product | 1,100 | Healthcare Tech | Yes | 16 |
| P04 | Staff Engineer | 3,400 | DevTools | Yes | 12 |
| P05 | CSM | 5,000 | Enterprise Software | No | 13 |
| P06 | VP of Marketing | 900 | E-commerce | No | 18 |
| P07 | Head of IT | 6,200 | Professional Services | Yes | 22 |
| P08 | Senior Data Analyst | 1,800 | Fintech | No | 10 |
| P09 | Solutions Engineer | 4,100 | Cloud Infrastructure | No | 15 |
| P10 | Engineering Manager | 12,000 | Retail Tech | Yes | 13 |
| P11 | Chief of Staff | 2,500 | AI/ML Startup | No | 17 |
| P12 | Senior Designer | 1,500 | SaaS | No | 11 |

---

### Key Finding 1: The "Unknown Unknowns" Tax Is Real and Expensive

**Evidence strength**: 10/12 participants described a specific incident in the past 60 days where they discovered business-critical information too late. The median estimated cost per incident ranged from 1-2 weeks of wasted work (ICs) to $50K-$200K in deal impact (revenue-facing roles).

**Representative quotes**:

> "We spent three weeks building an integration that another team had already built and deprecated. The deprecation notice was in a Confluence page I never would have thought to search for." — P04 (Staff Engineer)

> "My champion left the account. It was on LinkedIn for two weeks before anyone on our team noticed. By the time I found out, the new VP had already started an RFP with our competitor." — P02 (Senior AE)

> "I made a pricing decision based on competitive data from Q2. Turns out our competitive intel team had updated the analysis in Q3, but it was in a SharePoint folder I didn't know existed." — P06 (VP of Marketing)

**Implication**: H1 is strongly validated. The missed-information problem is not hypothetical — it is frequent, costly, and systemic. The gap is not about information not existing; it is about information not finding the right person.

---

### Key Finding 2: Cross-Functional Boundaries Are the Primary Failure Point

**Evidence strength**: 9/12 participants described their worst missed-information incident as cross-functional. Average self-reported scores: within-team information flow 7.4/10, cross-functional information flow 3.8/10.

**Representative quotes**:

> "Inside my team, we're fine. I know what everyone is working on. But Product could be two weeks from shipping something that completely changes my Q1 plan, and I would have no idea until the all-hands." — P05 (CSM)

> "The problem isn't that information is hidden. It's that I don't know what questions to ask other teams, because I don't know what I don't know about their work." — P03 (Director of Product)

**Implication**: H8 is strongly validated. The product should focus on cross-functional information bridging, not within-team knowledge management. This is where existing tools (Slack, standups, Jira boards) systematically fail.

---

### Key Finding 3: Revenue-Facing Roles Have the Most Acute and Quantifiable Pain

**Evidence strength**: All 3 revenue-facing participants (P02, P05, P09) described the problem with the highest urgency and could quantify dollar impact. They independently converged on similar signal categories: champion changes, usage drops, competitor mentions, and contract timeline mismatches.

**Representative quotes**:

> "If someone had told me that my champion updated their LinkedIn title three weeks before renewal, that single signal would have saved the account. That's a $340K ARR account." — P05 (CSM)

> "I need to know when engineering files a P0 bug against a feature my prospect just asked about in the POC. Right now I find out when the prospect finds out, which is the worst possible time." — P09 (Solutions Engineer)

**Implication**: H4 is validated. Deal and revenue risk signals are the highest-value, most quantifiable proactive intelligence use case. This should be the launch wedge — the ROI story writes itself.

---

### Key Finding 4: Managers Want It, But ICs Need It More Than They Realize

**Evidence strength**: Managers (P01, P03, P06, P10) expressed higher willingness to pay and described broader information needs. However, ICs (P04, P08, P12) described more frequent direct impact from missed information. The difference was awareness, not severity.

**Representative quotes**:

> "I would pay for this out of my team's budget tomorrow. I spend 45 minutes every morning in Slack just trying to figure out if anything changed overnight that affects my team's priorities." — P01 (Engineering Manager)

> "Honestly, I don't think I need something like that. [Later in interview]: Actually, now that I think about it, the integration duplication I mentioned — that cost us three weeks. I just... accepted that as normal." — P04 (Staff Engineer)

**Implication**: H5 is partially validated. Managers are the buyers but ICs are the daily users. The product needs a dual value proposition: manager-facing dashboards for team visibility and IC-facing signals for individual productivity. ICs have normalized the problem — they need to be shown the cost before they feel the urgency.

---

### Key Finding 5: Noise Is an Existential Threat — But Thresholds Are Higher Than Expected

**Evidence strength**: 11/12 participants described abandoning at least one notification-based tool. However, the abandonment threshold was more forgiving than hypothesized — participants tolerated up to 40-50% noise if the remaining signals were high-impact. The key variable was not noise ratio but recovery cost: how long does it take to assess and dismiss a false positive?

**Representative quotes**:

> "I don't mind skimming past irrelevant stuff if I can tell in 2 seconds it's not for me. What kills me is when I have to click into something, read three paragraphs, and then realize it's not relevant. That's when I unsubscribe." — P08 (Senior Data Analyst)

> "Slack channels die when the signal-to-noise ratio drops. But my Datadog alerts — those are noisy too, and I never turn them off, because when they fire for real, it matters." — P01 (Engineering Manager)

**Implication**: H3 is partially invalidated. The 30% noise ceiling was too conservative. Users tolerate higher noise if triage cost is near zero. The design implication is critical: each surfaced item must be assessable in under 5 seconds. Lead with a clear headline, relevance tag, and source link. Do not bury the signal.

---

### Key Finding 6: Trust Requires Source Attribution, Not Explanation

**Evidence strength**: 8/12 participants said they need to see the source document or data point behind a proactive insight. However, only 3/12 wanted a full reasoning chain or confidence score. The distinction: "Show me where this came from" (high demand) vs. "Explain your logic" (low demand).

**Representative quotes**:

> "I don't need the AI to explain itself. I need it to link me to the Slack thread or the doc so I can make my own judgment. If it says 'based on 3 signals' and I can click into each one, that's enough." — P03 (Director of Product)

> "Confidence scores are meaningless to me. 87% confident based on what? Just show me the source." — P11 (Chief of Staff)

**Implication**: H6 is partially validated — trust does require transparency, but the mechanism is source attribution, not algorithmic explainability. This is a major design simplification. Each insight should link directly to the 1-3 source artifacts. No need to build confidence scoring or reasoning chain UX at launch.

---

### Key Finding 7: Privacy Boundaries Are Real, Contextual, and Political

**Evidence strength**: 8/12 participants identified at least one category of information they would not want proactively surfaced. The most commonly cited red lines were HR-adjacent signals (performance reviews, compensation discussions, PIP indicators, job-search behavior). Notably, 4/12 raised concerns about power asymmetry — information surfaced to managers that employees did not know was being surfaced.

**Representative quotes**:

> "If this thing tells my VP that I've been updating my LinkedIn, I'm uninstalling it and emailing legal." — P04 (Staff Engineer)

> "There's a difference between 'this document is accessible to you' and 'we're going to wave it in your face.' Proactive surfacing changes the social contract." — P07 (Head of IT)

> "I'd want to know exactly what my manager sees that I don't see. If there's an asymmetry, it's surveillance, not intelligence." — P12 (Senior Designer)

**Implication**: H7 is strongly validated. The product must have a clear, auditable, user-visible policy about what it will and will not proactively surface. Users must be able to see what others see about them. This is not just a feature — it is a trust architecture decision that will make or break adoption. Recommendation: default to symmetric visibility (if the AI surfaces something about you to your manager, you see that it did so).

---

### Hypothesis Scorecard

| # | Hypothesis | Result | Tally |
|---|---|---|---|
| H1 | Missed information is frequent and costly | **Validated** | 10 support / 1 neutral / 1 contradict |
| H2 | Manual rituals break at scale | **Validated** | 9 support / 2 neutral / 1 contradict |
| H3 | 30% noise threshold kills adoption | **Partially Invalidated** | 4 support / 3 neutral / 5 contradict (threshold is higher, ~40-50%, if triage is fast) |
| H4 | Deal risk is highest-value use case | **Validated** | 8 support / 3 neutral / 1 contradict |
| H5 | Managers value it more than ICs | **Partially Validated** | 6 support / 4 neutral / 2 contradict (managers buy it, ICs need it) |
| H6 | Trust requires explainability | **Partially Validated** | 8 support with nuance: source attribution yes, reasoning chain no |
| H7 | Privacy boundaries are non-negotiable | **Validated** | 8 support / 3 neutral / 1 contradict |
| H8 | Cross-functional gaps cause most damage | **Validated** | 9 support / 2 neutral / 1 contradict |
| H9 | Digest beats real-time push | **Inconclusive** | 5 support / 2 neutral / 5 contradict (users want both: digest for trends, real-time for urgent) |
| H10 | Existing Glean users adopt faster | **Validated** | 4/5 Glean customers support / 1 neutral among Glean users |

---

### Surprising Insights (Not Covered by Original Hypotheses)

**Surprise 1: "Anti-Notification" Framing Wins**

Three participants (P03, P08, P11) spontaneously reframed the value proposition. They did not want "more notifications" — they wanted "fewer meetings." The proactive intelligence layer's most compelling pitch may be: "Replace your Monday status meeting with a 2-minute read." This reframing shifts the value from "more information" to "less time spent gathering information."

**Surprise 2: The "New Employee" Use Case Is Underrated**

P10 (Engineering Manager, 12,000-person company) described onboarding as the most acute information discovery problem: "New hires spend their first 90 days not knowing what they don't know. If the system could proactively tell a new engineer 'here are the 5 decisions your team made last quarter that you should understand,' that would cut ramp time in half." This was echoed by P07 (Head of IT). Onboarding may be a compelling secondary use case with a clear, measurable ROI metric (time-to-productivity).

**Surprise 3: People Want to Control Their "Interest Profile"**

6/12 participants, without prompting, described wanting to tell the system what they care about — not just relying on AI inference. P06: "I'd want to say: 'I care about competitor pricing changes, anything from the product team about mobile, and any customer escalation over $100K. Don't guess — let me tell you.'" This suggests a hybrid model: AI-inferred relevance + user-declared interest topics. Explicit user input reduces noise and increases trust simultaneously.

**Surprise 4: The IT Buyer Cares About Governance, Not Features**

Both IT-adjacent participants (P07, P11) spent the majority of their interview discussing governance, audit trails, and access control — not the intelligence features themselves. P07: "I don't care how smart it is. I care whether I can explain to our CISO exactly what data flows where, who sees what, and how we turn it off if something goes wrong." The admin console and governance layer may be as important as the end-user experience for enterprise sales.

---

### Recommended Next Steps

#### 1. Define the MVP Scope: "Proactive Briefings for Revenue Teams"

Based on findings, the highest-conviction launch wedge is:
- **Persona**: CSMs and AEs at existing Glean customers
- **Core feature**: Weekly account health briefing that synthesizes signals across CRM, support tickets, product usage, and internal Slack — surfaces risk signals and opportunities per account
- **Format**: Monday morning digest email/in-app briefing, with each item scannable in <5 seconds and linked to source artifacts
- **Why this wedge**: quantifiable ROI (retention/expansion revenue), existing data connectors, clear buyer (VP of CS/Sales), and the smallest trust surface area (less privacy sensitivity than cross-org intelligence)

#### 2. Run a 4-Week Design Sprint

- Week 1: JTBD prioritization workshop with PM, design, and engineering leads. Map the top 5 jobs-to-be-done from this discovery to specific product surfaces.
- Week 2: Low-fidelity prototype of the Monday briefing. Paper test with 5 of the 12 interview participants (offer early access).
- Week 3: Build a "Wizard of Oz" version — manually curated briefings for 3 Glean customer accounts to test engagement and signal value before investing in AI automation.
- Week 4: Analyze Wizard of Oz results. Decide go/no-go on engineering investment.

#### 3. Establish the Trust Architecture Early

Before building features, publish an internal design doc that answers:
- What data sources does the proactive layer read?
- What is the visibility model? (Symmetric: if the AI surfaces something about you, you know.)
- What categories are excluded by default? (HR data, compensation, PIP-adjacent signals.)
- How does a user mute, adjust, or opt out?
- How does an admin audit what was surfaced to whom?

This document becomes the "constitution" of the proactive intelligence product. It should be reviewed by legal, security, and the CISO before any user-facing work begins.

#### 4. Instrument the Baseline

Before launching any proactive feature, instrument the current state:
- How many Glean searches per user per day?
- What is the average time-to-answer?
- How often do users search for information that another user accessed recently? (Proxy for "information that could have been surfaced proactively.")
- What is the cross-functional search pattern? (User in Eng searching for Sales artifacts, etc.)

These baselines become the "before" measurement for the proactive intelligence ROI case.

#### 5. Plan a Follow-Up Discovery Round

This initial discovery focused on breadth. The next round should go deep on two areas:
- **Revenue team workflow integration**: Shadow 3-5 CSMs and AEs for a full day. Map every moment where proactive intelligence would have changed their behavior. Identify the exact insertion point in their workflow.
- **IT governance requirements**: Conduct 4-5 interviews exclusively with CISOs and Heads of IT at Fortune 500 companies. Map the governance requirements that would block or enable procurement.

---

### Appendix: Jobs to Be Done (Extracted)

| # | JTBD Statement | Persona | Frequency | Urgency |
|---|---|---|---|---|
| 1 | When a key stakeholder at my account changes roles, I want to know within 48 hours, so I can protect the relationship before a competitor gets in. | CSM / AE | Monthly | Critical |
| 2 | When another team makes a decision that affects my roadmap, I want to know before I commit resources, so I can avoid wasted work. | PM / EM | Bi-weekly | High |
| 3 | When I start my week, I want a summary of what changed across my areas of responsibility, so I can reprioritize without attending 5 status meetings. | Manager (all functions) | Weekly | High |
| 4 | When a customer-facing bug is filed, I want the revenue team to know immediately, so I can get ahead of the customer's frustration. | Solutions Engineer / CSM | Weekly | Critical |
| 5 | When I join a new team, I want to understand the key decisions and context from the past 90 days, so I can contribute faster without asking everyone to repeat themselves. | New hire (all functions) | Once per role | High |
| 6 | When competitive intelligence is updated, I want to know which of my active deals are affected, so I can adjust my positioning before the next call. | AE | Monthly | Medium |
| 7 | When a project I depend on is delayed or rescoped, I want to know before I discover it in a standup, so I can adjust my own commitments. | IC Engineer / Designer | Bi-weekly | High |
