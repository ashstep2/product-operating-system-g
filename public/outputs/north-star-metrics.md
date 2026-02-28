# North Star Metrics Framework: Glean

## Company Context

**Glean** is an AI-powered enterprise search and knowledge assistant ($4.6B valuation, Series E). The product connects to 100+ enterprise data sources (Slack, Google Drive, Confluence, Jira, Salesforce, etc.) and gives employees a single interface to find information, get AI-generated answers, and automate knowledge work. Monetization is seat-based SaaS, typically sold top-down to IT/CIO with expansion driven by department-level adoption.

**Core value proposition:** Employees find information and get accurate answers in seconds instead of context-switching across 10+ tools and asking colleagues.

---

## 1. North Star Metric Definition

### Metric: **Weekly Successful Answer Rate (WSAR)**

**Precise definition:** The percentage of employee queries (search + AI assistant) per week that result in a *successful resolution* — defined as the user clicking a result/answer and NOT re-querying the same topic within 5 minutes, OR explicitly rating the answer as helpful.

```
WSAR = (Queries with successful resolution in week W) / (Total queries in week W) x 100
```

**Measurement method:**
- Track every query event (search, AI chat, @Glean mentions in Slack)
- A query is "successfully resolved" if ANY of these occur:
  - User clicks a result and does not re-query the same semantic topic within 5 minutes
  - User copies/pastes from the AI-generated answer
  - User explicitly thumbs-up the response
  - User shares the answer with a colleague
- A query is "unresolved" if:
  - User re-queries the same topic (detected via semantic similarity > 0.85) within 5 minutes
  - User abandons (no click, no interaction) within the session
  - User explicitly thumbs-down the response

**Why this metric (and not alternatives):**

| Alternative considered | Why rejected |
|---|---|
| **Weekly Active Users (WAU)** | Measures adoption but not value delivery. A user could search 50 times and never find anything useful. Glean's value is in *answering*, not just *being used*. |
| **Queries per user per week** | More queries could mean the product is useful OR that it's failing and users keep retrying. Directionally ambiguous. |
| **Time to answer** | Speed matters, but a fast wrong answer is worse than a slightly slower correct one. WSAR captures quality. |
| **NPS / CSAT** | Lagging, survey-dependent, low response rates in enterprise. WSAR is behavioral and measured continuously. |
| **Connector count / integrations** | Input metric. More connectors don't help if the search ranking is bad. |
| **Revenue / seats** | Lagging commercial outcome. By the time revenue drops, you've already lost. WSAR is a leading indicator of retention. |

**Why WSAR is the right NSM for Glean:**
1. **Captures core value exchange.** Glean exists to give employees correct answers. WSAR directly measures whether that's happening.
2. **Aligns all teams.** Engineering improves ranking and AI accuracy (raises WSAR). Sales sells on answer quality (drives WSAR). CS ensures connector health (enables WSAR). Product improves UX (reduces abandonment, raises WSAR).
3. **Leading indicator of commercial outcomes.** Accounts with high WSAR renew. Accounts with declining WSAR churn. The causal chain is tight.
4. **Actionable at every level.** Can be decomposed by customer, department, query type, data source, and time period. Teams can identify and fix specific failure modes.

**What "good" looks like:**

| WSAR Range | Interpretation | Expected Commercial Outcome |
|---|---|---|
| < 55% | Poor — users not getting value | High churn risk, low expansion |
| 55-65% | Below average — significant gaps | Moderate churn, stalled expansion |
| 65-75% | Good — competitive with alternatives | Healthy retention, moderate expansion |
| 75-85% | Strong — users rely on Glean daily | Strong retention, organic expansion |
| > 85% | Exceptional — Glean is the default | Net revenue retention > 130%, viral adoption |

**Current target:** 72% WSAR across all customers (weighted by seats). Top quartile customers at 80%+. Bottom quartile remediation triggered below 60%.

---

## 2. Metric Tree

```
                          WEEKLY SUCCESSFUL ANSWER RATE (WSAR)
                          Target: 72% | Current: [tracked]
                                    |
            +-----------------------+-----------------------+
            |                       |                       |
     QUERY VOLUME            ANSWER QUALITY          COVERAGE BREADTH
     & ENGAGEMENT            & RELEVANCE             & FRESHNESS
            |                       |                       |
     (L1 Driver)             (L1 Driver)             (L1 Driver)
     Target: 8+ queries      Target: 78% relevance   Target: 90% source
     /user/week               score (model-graded)    freshness < 24h
            |                       |                       |
    +-------+-------+      +-------+-------+      +-------+-------+
    |       |       |      |       |       |      |       |       |
   L2a    L2b     L2c    L2a    L2b     L2c    L2a    L2b     L2c
```

### Level 1 Drivers (Leading Indicators)

#### L1-A: Query Volume & Engagement
*"Are employees actually using Glean as their default search?"*

| L2 Input | Definition | Target | Why It Matters |
|---|---|---|---|
| **L2-A1: Weekly Active Queriers (WAQ)** | Unique users who submit 1+ query per week / total licensed seats | 65% of seats | Low WAQ means adoption failure — users revert to old habits (asking on Slack, searching Google Drive directly) |
| **L2-A2: Queries per Active User per Week** | Avg queries submitted by active users in a week | 8-12 queries | Below 5 suggests Glean is a "sometimes" tool, not a habit. Above 15 may indicate frustration (re-queries) |
| **L2-A3: Multi-Modal Usage Rate** | % of active users who use 2+ interfaces (web search, Slack bot, browser extension, AI chat) in a week | 40%+ | Multi-modal users have 2.3x higher retention; signals deep integration into workflow |

**Causal link to WSAR:** More engaged users generate more queries, giving the ranking model more signal, which improves answer quality, which increases WSAR. Virtuous cycle.

#### L1-B: Answer Quality & Relevance
*"When employees ask, does Glean give them the right answer?"*

| L2 Input | Definition | Target | Why It Matters |
|---|---|---|---|
| **L2-B1: AI Answer Accuracy (model-graded)** | % of AI-generated answers rated as factually correct and complete by an automated evaluation model (sampled weekly) | 82%+ | Hallucinated or incomplete answers destroy trust. One bad answer in an executive meeting = user never returns |
| **L2-B2: Search Result Click-Through Rate (CTR)** | % of search queries where user clicks at least one result in the top 5 | 68%+ | Low CTR on search means ranking is failing — the right document exists but isn't surfacing |
| **L2-B3: Zero-Result Rate** | % of queries that return no results or no AI answer | < 5% | Zero-result queries are complete failures. Usually indicates a missing connector or permission misconfiguration |

**Causal link to WSAR:** Quality is the numerator of WSAR. If answers are wrong or missing, WSAR drops directly regardless of how much engagement exists.

#### L1-C: Coverage Breadth & Freshness
*"Does Glean actually have access to the information employees need?"*

| L2 Input | Definition | Target | Why It Matters |
|---|---|---|---|
| **L2-C1: Connected Source Coverage** | % of an org's top-20 knowledge sources that are connected to Glean | 85%+ | If Glean can't see Salesforce and the sales team searches for deal info, the answer will always fail |
| **L2-C2: Index Freshness** | % of indexed documents updated within the last 24 hours (for sources with daily changes) | 90%+ | Stale results are wrong results. An employee finds last quarter's pricing doc instead of this quarter's |
| **L2-C3: Permission Sync Accuracy** | % of access-control decisions (show/hide a result) that match the source system's actual permissions | 99.5%+ | Showing a user a document they shouldn't see is a security incident. Hiding a document they should see is a relevance failure. Both erode trust. |

**Causal link to WSAR:** Coverage is the foundation. Even perfect ranking can't surface a document that was never indexed or is stale. Missing connectors create systematic blind spots that tank WSAR for affected user segments.

### Lagging Indicators (Commercial Outcomes)

These are the business results that WSAR *causes*. They validate the NSM but are too slow to steer by.

| Lagging Metric | Definition | Target | Lag Time |
|---|---|---|---|
| **Net Revenue Retention (NRR)** | (Revenue from existing customers at end of period) / (Revenue from same cohort at start) | > 125% | 6-12 months |
| **Gross Retention Rate (GRR)** | Revenue retained from existing customers excluding expansion | > 92% | 6-12 months |
| **Seat Expansion Rate** | New seats added within existing accounts / total seats at period start | > 30% annually | 3-6 months |
| **Logo Churn Rate** | % of customer accounts lost per year | < 5% | 12 months |
| **Time to Value (TTV)** | Median days from contract signed to account reaching 50% WAQ | < 30 days | 1-3 months |

**Validation logic:** If WSAR is increasing but NRR is flat/declining, the NSM definition may need recalibration (the metric is measuring something other than actual value). If WSAR is decreasing and NRR follows 6 months later, the leading-indicator relationship is confirmed.

---

## 3. Counter-Metrics

Counter-metrics prevent Goodhart's Law: "When a measure becomes a target, it ceases to be a good measure."

### 3.1 Quality Counter-Metrics (prevent gaming WSAR via quantity manipulation)

| Counter-Metric | What It Guards Against | Threshold | Response |
|---|---|---|---|
| **Hallucination rate** | AI generating plausible-sounding but wrong answers that users accept (inflating WSAR without delivering real value) | < 3% on sampled audits | Tighten retrieval-augmented generation constraints; increase citation requirements |
| **Answer confidence without citation** | AI answering confidently when it shouldn't — user trusts it, doesn't verify, WSAR looks good but value is illusory | < 8% of AI answers lack source citation | Force "I don't know" responses when retrieval confidence is low |
| **User-reported inaccuracy rate** | Explicit user feedback that an answer was wrong (catches what automated eval misses) | < 2% of rated interactions | Investigate top failure categories; retrain ranking for affected query types |

### 3.2 Security & Compliance Counter-Metrics

| Counter-Metric | What It Guards Against | Threshold | Response |
|---|---|---|---|
| **Permission violation rate** | Surfacing documents a user shouldn't access (could inflate WSAR by showing more results but violating ACLs) | 0 known violations | Immediate incident response; pause affected connector sync |
| **Data leakage in AI answers** | AI synthesizing an answer that includes information from documents the user can't access | 0 known violations | Audit AI answer generation pipeline; enforce per-document permission checks before synthesis |

### 3.3 User Experience Counter-Metrics

| Counter-Metric | What It Guards Against | Threshold | Response |
|---|---|---|---|
| **Query latency (p95)** | Sacrificing speed for comprehensiveness — answers are correct but take 8 seconds | < 2.5s for search, < 6s for AI answers | Optimize retrieval pipeline; add caching for common query patterns |
| **Notification/nudge fatigue** | Driving WSAR by aggressively prompting users to use Glean (boosting queries but annoying users) | Opt-out rate < 3% per month | Reduce notification frequency; make all nudges dismissable |
| **Support ticket volume re: Glean** | Product is "working" by metrics but generating IT helpdesk load | < 0.5 tickets / 100 seats / month | UX audit on top ticket categories |

### 3.4 Business Health Counter-Metrics

| Counter-Metric | What It Guards Against | Threshold | Response |
|---|---|---|---|
| **Compute cost per query** | Optimizing WSAR by throwing expensive LLM inference at every query, destroying unit economics | < $0.03 per query (blended) | Tiered model routing (cheap model for simple queries, expensive for complex) |
| **Seat utilization rate** | High WSAR among power users masking the fact that 60% of seats are shelfware | WAQ > 50% of licensed seats | Trigger CS-led adoption campaigns for low-usage departments |

---

## 4. Dashboard Specification

### 4.1 Executive Dashboard ("Glean Pulse")

**Audience:** CEO, CRO, CPO, VP Engineering
**Refresh:** Real-time (5-min lag)
**Format:** Single-page view with drill-down capability

```
+------------------------------------------------------------------+
|  GLEAN PULSE — Executive Dashboard              [Week of Feb 23]  |
+------------------------------------------------------------------+
|                                                                    |
|  NORTH STAR: WSAR                                                  |
|  ╔══════════════════════╗                                          |
|  ║   72.4%  (+1.2pp WoW) ║  [Trend sparkline: 12 weeks]          |
|  ╚══════════════════════╝                                          |
|  Target: 72%  |  Green (on-target)                                 |
|                                                                    |
+------------------+------------------+------------------+-----------+
|  L1-A: ENGAGE    |  L1-B: QUALITY   |  L1-C: COVERAGE  | LAGGING  |
|                  |                  |                  |           |
|  WAQ: 61%        |  AI Accuracy:    |  Source Coverage: | NRR:     |
|  Target: 65%     |  79.3%           |  87%             | 128%     |
|  [AMBER]         |  Target: 82%     |  Target: 85%     | GRR:     |
|                  |  [AMBER]         |  [GREEN]         | 93%      |
|  Queries/user:   |                  |                  |           |
|  9.2/wk          |  Search CTR:     |  Index Fresh:    | Expansion:|
|  Target: 8-12    |  71%             |  92%             | 34%      |
|  [GREEN]         |  Target: 68%     |  Target: 90%     |           |
|                  |  [GREEN]         |  [GREEN]         | Churn:   |
|  Multi-modal:    |                  |                  | 3.8%     |
|  38%             |  Zero-result:    |  Perm Sync:      |           |
|  Target: 40%     |  4.1%            |  99.7%           |           |
|  [AMBER]         |  Target: <5%     |  Target: 99.5%   |           |
|                  |  [GREEN]         |  [GREEN]         |           |
+------------------+------------------+------------------+-----------+
|  COUNTER-METRICS                                                   |
|  Hallucination: 2.1% [G] | Latency p95: 2.1s [G] | Cost/query:   |
|  Perm violations: 0 [G]  | Seat util: 58% [A]    | $0.024 [G]    |
+------------------------------------------------------------------+
|  ALERTS (last 7 days)                                              |
|  [!] WAQ dropped 3pp at Acme Corp — CS investigating              |
|  [!] AI Accuracy below 75% for queries in Japanese — Eng aware    |
+------------------------------------------------------------------+
```

### 4.2 Color Coding & Alert Thresholds

| Status | Criteria | Action |
|---|---|---|
| **GREEN** | Within 5% of target or exceeding | No action needed |
| **AMBER** | 5-15% below target, or 2+ consecutive weeks of decline | Review in weekly meeting; assign owner |
| **RED** | >15% below target, or 3+ consecutive weeks of decline | Escalation to exec team within 24 hours; war room if customer-facing |

### 4.3 Drill-Down Views

- **By Customer:** WSAR per account (sortable by seats, ARR, contract renewal date)
- **By Department:** WSAR broken down by department within an account (identifies pockets of low adoption)
- **By Query Type:** WSAR for search vs. AI chat vs. Slack bot vs. browser extension
- **By Data Source:** WSAR bucketed by which connector the answer came from (reveals connector quality gaps)
- **By Time:** Hourly/daily/weekly trend with anomaly detection

---

## 5. Measurement Cadence

### Daily (Automated)

| Activity | Owner | Output |
|---|---|---|
| WSAR computed across all customers | Data Engineering | Dashboard updated by 6am PT |
| Anomaly detection on WSAR and all L1/L2 metrics | Data Engineering | Slack alert to #metrics-alerts if any metric moves > 2 standard deviations |
| Permission violation scan | Security Engineering | Immediate page to on-call if violation detected |
| AI accuracy spot-check (500 random queries evaluated by grading model) | ML Engineering | Daily accuracy score posted to #ai-quality |

### Weekly (Monday Metrics Review)

| Activity | Owner | Output |
|---|---|---|
| **Metrics standup** (30 min) | Product Analytics lead | Walk through WSAR trend, L1 drivers, counter-metrics. Identify amber/red items. |
| **Bottom-10 accounts review** | CS team lead | List of accounts with lowest WSAR. Action plan for each (connector fix, training, enablement). |
| **AI quality review** | ML Engineering lead | Top failure categories from AI answers. Ranking model update roadmap. |
| **Publish weekly metrics digest** | Product Analytics | Email/Slack summary to all-hands with WSAR trend, wins, and areas of focus |

### Monthly (First-Week Business Review)

| Activity | Owner | Output |
|---|---|---|
| **NSM deep dive** (60 min) | CPO + VP Engineering | Cohort analysis of WSAR by customer vintage, industry, size. Correlation analysis between WSAR and renewal/expansion. |
| **Counter-metric audit** | Product Analytics | Are counter-metrics healthy? Any signs of gaming? Cost-per-query trend. |
| **Connector health report** | Platform Engineering | Connector uptime, sync latency, coverage gaps across customer base. |
| **WSAR → NRR correlation update** | Finance + Analytics | Updated regression: does WSAR still predict commercial outcomes? Recalibrate if needed. |

### Quarterly (Board-Level)

| Activity | Owner | Output |
|---|---|---|
| **NSM recalibration** | CPO | Should the WSAR definition change? Are thresholds still right? New counter-metrics needed? |
| **Target adjustment** | CEO + CPO | Raise WSAR targets based on product improvements. Set next-quarter L1 targets. |
| **Competitive benchmark** | Product Strategy | How does Glean's answer quality compare to alternatives (Moveworks, Guru, native search in Google Workspace / Microsoft 365 Copilot)? |

### Escalation Triggers

| Trigger | Severity | Response |
|---|---|---|
| WSAR drops > 3pp in a single week (any customer segment) | P1 | War room within 4 hours. Root cause identified within 24 hours. |
| WSAR drops > 5pp in a single week (aggregate) | P0 | All-hands incident. CEO briefed. Customer communication within 48 hours if user-facing. |
| Any permission violation detected | P0 | Immediate connector pause. Security incident protocol. Customer notified within 24 hours. |
| AI accuracy drops below 70% for any language/region | P1 | ML team stops feature work. Focus on accuracy regression until resolved. |
| Seat utilization drops below 40% for an account with renewal in < 90 days | P1 | CS + AE joint intervention. Executive sponsor meeting within 1 week. |

---

## 6. Metric Pitfalls

### 6.1 How WSAR Could Be Gamed

| Gaming Vector | How It Works | Detection Method | Guardrail |
|---|---|---|---|
| **Lowering the re-query threshold** | Change the "5-minute re-query" window to 2 minutes — fewer re-queries detected, WSAR inflates | Track re-query rates at multiple time windows (2, 5, 10 min). If they diverge, definition may be masking failures. | Lock re-query window definition; changes require CPO approval with data justification |
| **Encouraging easy queries** | Nudge users toward queries Glean knows it can answer (e.g., people search) rather than hard knowledge queries | Segment WSAR by query complexity (simple lookup vs. multi-document synthesis). If simple queries grow disproportionately, investigate. | Report WSAR by query complexity tier. Target each tier independently. |
| **Inflating "successful" signals** | Auto-expand the first search result, so every query technically has a "click" | Monitor dwell time after click. Clicks with < 3s dwell are likely not genuine engagement. | Require minimum 5s dwell time for a click to count as resolution |
| **Suppressing hard queries** | If Glean detects a query it can't answer well, show a "try rephrasing" prompt instead of a bad result — the original query isn't counted | Track "deflection rate" — % of queries redirected to rephrasing. Alert if > 10%. | Count deflected queries as unresolved in WSAR calculation |
| **Hallucination acceptance** | AI gives a confident, well-formatted but wrong answer. User accepts it (no re-query). WSAR looks great but value is negative. | Regular human audit of accepted AI answers (sample 200/week). Track downstream corrections. | Hallucination rate counter-metric with hard ceiling. Mandatory citation for all AI answers. |

### 6.2 How WSAR Could Be Misinterpreted

| Misinterpretation | Reality | How to Avoid |
|---|---|---|
| "WSAR is 75%, so 75% of our users are happy" | WSAR measures query-level resolution, not user satisfaction. A user could have 10 resolved queries and 1 catastrophically wrong answer that erodes all trust. | Supplement with periodic user satisfaction surveys (quarterly). Track "trust incidents" (user reports wrong answer to manager/IT). |
| "Account A has higher WSAR than Account B, so A is healthier" | Account A might only use Glean for simple people search (easy queries, high WSAR). Account B uses it for complex knowledge work (harder queries, lower WSAR but more value). | Always segment by query complexity. Normalize for use-case mix. |
| "WSAR went up after we launched feature X, so X works" | Correlation is not causation. WSAR could have risen due to a new connector going live, a seasonal change in query patterns, or a cohort shift. | Use controlled experiments (A/B tests) for feature launches. Run difference-in-differences analysis for non-randomizable changes. |
| "WSAR is stable, so nothing is wrong" | Stable WSAR can mask offsetting trends: power users getting better results while new users struggle. Aggregate stability hides segment-level problems. | Always decompose WSAR by user tenure, department, account, and query type. Set alerts on segment-level divergence. |

### 6.3 Structural Limitations of WSAR

| Limitation | Impact | Mitigation |
|---|---|---|
| **Only measures querying users** | Non-users (who gave up on Glean entirely) don't generate queries and are invisible to WSAR | Pair WSAR with seat utilization rate. Low utilization + high WSAR = you're only measuring survivors. |
| **Doesn't capture proactive value** | Glean's future may include proactive knowledge delivery (e.g., "here's a doc you should read before your meeting"). WSAR only measures reactive queries. | As proactive features launch, define a parallel metric: "Proactive Engagement Rate" — % of proactive suggestions acted upon. Fold into NSM definition at next quarterly review. |
| **Enterprise heterogeneity** | A single WSAR target may not be appropriate for a 500-person startup vs. a 100,000-seat enterprise with complex permission structures | Set WSAR targets by customer tier (SMB, Mid-Market, Enterprise). Weight aggregate WSAR by ARR, not by query volume. |
| **Doesn't measure time saved** | Two queries could both be "resolved" but one saved 30 seconds and another saved 30 minutes. WSAR treats them equally. | Track estimated "time saved per query" as a companion metric (based on query complexity and alternative resolution paths). Use for ROI storytelling, not for steering. |

---

## Summary

| Element | Value |
|---|---|
| **North Star Metric** | Weekly Successful Answer Rate (WSAR) |
| **Target** | 72% (aggregate), 80%+ (top quartile accounts) |
| **L1 Drivers** | Query Volume & Engagement, Answer Quality & Relevance, Coverage Breadth & Freshness |
| **Key Counter-Metrics** | Hallucination rate, permission violations, seat utilization, cost per query |
| **Review Cadence** | Daily (automated), Weekly (metrics standup), Monthly (deep dive), Quarterly (recalibration) |
| **Primary Escalation** | WSAR drops > 3pp in a week triggers P1 war room |

WSAR works as Glean's NSM because it sits at the intersection of product quality, user value, and commercial outcomes. It is measurable daily, decomposable to the team level, and predictive of the lagging metrics (NRR, GRR, churn) that the board cares about. The counter-metrics and pitfalls framework ensures that optimizing WSAR doesn't come at the cost of accuracy, security, or sustainable unit economics.
