# Glean Feature Prioritization — H2 2026 Product Cycle

| Field | Value |
|---|---|
| **Date** | 2026-02-27 |
| **Author** | AI Product Intelligence Platform |
| **Scope** | 10 candidate features for next product cycle |
| **Planning Horizon** | H2 2026 – H1 2027 (12 months) |
| **Strategic Context** | Microsoft Copilot rapidly expanding enterprise AI footprint; Glean must deepen moat in cross-app knowledge and agentic workflows |

---

## 1. Executive Summary

**The core bet:** Glean wins by being the *cross-application intelligence layer* that no single-vendor ecosystem (Microsoft, Google) can replicate. Every prioritization decision flows from this thesis.

### Committing (Ship in next 12 months)
- **F2: Agent Workflows** — Highest-leverage feature. Moves Glean from retrieval to execution, opening new pricing tiers and creating switching costs.
- **F5: SOC 2 Type II + FedRAMP** — Non-negotiable for upmarket expansion. Multiple 7-figure deals are gated on this.
- **F4: Slack/Teams Deep Integration** — Defensive necessity. Copilot's native Teams integration is pulling Glean usage down in chat-heavy orgs.
- **F1: Proactive Insights** — Differentiator that justifies seat expansion. Transforms Glean from pull (you search) to push (it finds you).

### Deferring (H1 2027+ or conditional on data)
- **F6: Analytics Dashboard** — High value for buyer personas (CIOs), but not existential. Ship MVP in Q1 2027.
- **F7: Custom AI Personas** — Strong signal from large accounts, but requires Agent Workflows infrastructure first. Sequence after F2.
- **F8: Real-time Document Sync** — Engineering-heavy, narrow use case. Wait for customer escalation data.

### Killing (Not pursuing this cycle)
- **F3: Knowledge Graph Visualization** — Cool demo, weak retention signal. No evidence users want to *see* the graph; they want answers.
- **F9: Mobile App** — Enterprise knowledge work is desktop-primary. Mobile adds maintenance burden with marginal adoption.
- **F10: API Marketplace** — Premature. Glean's connector library is a moat, but opening it to third parties introduces quality/security risk before the platform is mature enough.

---

## 2. Classified Feature List (LNO Framework)

The LNO framework classifies features by their relationship to effort: **Leverage** features produce outsized returns relative to investment, **Neutral** features return roughly proportional value, and **Overhead** features are necessary costs that don't directly differentiate.

| Feature | Classification | Rationale |
|---|---|---|
| **F1: Proactive Insights** | **Leverage** | Transforms product category from reactive search to proactive intelligence. Creates daily engagement habit. |
| **F2: Agent Workflows** | **Leverage** | Opens entirely new value tier (execution, not just retrieval). Enables premium pricing. Creates deep switching costs. |
| **F3: Knowledge Graph Viz** | **Neutral** | Interesting visualization but doesn't change core value prop. Linear return on investment. |
| **F4: Slack/Teams Integration** | **Overhead** | Defensive. Doesn't create new value — prevents value erosion from Copilot encroachment. Must be done well. |
| **F5: SOC 2 + FedRAMP** | **Overhead** | Table stakes for enterprise expansion. Zero differentiation, but blocks revenue without it. |
| **F6: Analytics Dashboard** | **Neutral** | Serves buyer persona (CIO/IT admin), not end user. Valuable for retention/expansion, proportional ROI. |
| **F7: Custom AI Personas** | **Leverage** | Enables department-level champions, multiplies seats per account. But depends on F2 infrastructure. |
| **F8: Real-time Doc Sync** | **Neutral** | Incremental improvement to existing capability. Matters for specific workflows (live war rooms), not broadly. |
| **F9: Mobile App** | **Overhead** | Checkbox feature for some RFPs. Doesn't drive adoption or differentiation in enterprise knowledge work. |
| **F10: API Marketplace** | **Neutral** | Platform play, but premature. Value scales with ecosystem maturity Glean hasn't reached yet. |

---

## 3. Scoring Criteria & Weights

Five dimensions, weighted to reflect Glean's strategic position as a growth-stage enterprise AI company facing an incumbent platform threat.

| Dimension | Weight | Rationale |
|---|---|---|
| **Strategic Moat** | 30% | Highest weight. Glean's survival depends on building defensibility that Microsoft/Google cannot replicate by bundling. Cross-app knowledge graph and agentic capabilities are the moat. |
| **Revenue Impact** | 25% | At Series E ($4.6B), Glean must demonstrate revenue acceleration. Features that unlock new accounts, expand seats, or enable premium tiers matter most. |
| **Customer Demand Signal** | 20% | Enterprise product must be market-pulled, not just vision-pushed. Weighted by deal-blocking frequency and breadth of demand across segments. |
| **Implementation Feasibility** | 15% | Engineering capacity is constrained. Features requiring 12+ months or deep infrastructure rewrites carry execution risk. |
| **Competitive Urgency** | 10% | Lower weight because reacting to competitors is a losing game — but ignoring direct threats (Copilot in Teams) is also fatal. Tiebreaker dimension. |

**Scoring scale:** 1 (low) to 5 (high) for each dimension.

---

## 4. Scored Feature Matrix

| Feature | Strategic Moat (0.30) | Revenue Impact (0.25) | Demand Signal (0.20) | Feasibility (0.15) | Competitive Urgency (0.10) | **Weighted Score** |
|---|---|---|---|---|---|---|
| **F2: Agent Workflows** | 5 | 5 | 4 | 2 | 5 | **4.25** |
| **F1: Proactive Insights** | 5 | 4 | 3 | 3 | 4 | **3.95** |
| **F4: Slack/Teams Integration** | 3 | 4 | 5 | 4 | 5 | **3.90** |
| **F5: SOC 2 + FedRAMP** | 2 | 5 | 5 | 3 | 3 | **3.70** |
| **F7: Custom AI Personas** | 4 | 4 | 4 | 3 | 3 | **3.70** |
| **F6: Analytics Dashboard** | 2 | 3 | 4 | 4 | 2 | **2.90** |
| **F8: Real-time Doc Sync** | 3 | 2 | 3 | 2 | 2 | **2.55** |
| **F10: API Marketplace** | 4 | 2 | 2 | 2 | 1 | **2.55** |
| **F3: Knowledge Graph Viz** | 2 | 1 | 2 | 3 | 1 | **1.80** |
| **F9: Mobile App** | 1 | 1 | 2 | 3 | 1 | **1.55** |

### Scoring Rationale — Top 5

**F2: Agent Workflows (4.25)**
Strategic moat is maximum because multi-step agents that execute across Jira, Salesforce, Google Workspace, and Slack simultaneously require the cross-app knowledge graph only Glean has. Microsoft Copilot can agent within Microsoft apps but cannot orchestrate across ecosystem boundaries. Revenue impact is maximum because this justifies a new pricing tier (estimated 40-60% premium over search-only seats). Feasibility scores lowest — this is a 6-9 month build requiring tool-use infrastructure, permission models, and human-in-the-loop UX — but the payoff warrants the investment.

**F1: Proactive Insights (3.95)**
The shift from reactive search to proactive surfacing changes Glean's engagement model from "open when stuck" to "check daily." This drives the usage frequency that justifies per-seat pricing. Strategic moat is high because proactive insights require deep understanding of user context, org structure, and document relationships — all things Glean's knowledge graph uniquely provides. Demand signal is moderate (3) because users don't explicitly ask for this; it's a vision-led feature that must be validated.

**F4: Slack/Teams Deep Integration (3.90)**
Demand signal is maximum — this is the most-requested feature in enterprise feedback channels. Competitive urgency is maximum because Microsoft Copilot answering questions natively in Teams is the single biggest churn risk for Glean. Feasibility is favorable (existing Slack/Teams bot infrastructure to build on). Strategic moat is moderate because the integration itself is replicable, but the cross-app answer quality flowing through chat is not.

**F5: SOC 2 Type II + FedRAMP (3.70)**
Revenue impact is maximum because multiple confirmed 7-figure pipeline deals (financial services, government) are explicitly gated on these certifications. This is the rare feature where ROI is directly calculable from existing pipeline. Strategic moat is low — compliance is replicable — but it's a necessary precondition for entering segments where Copilot's existing FedRAMP status gives Microsoft an unfair advantage.

**F7: Custom AI Personas (3.70)**
Enables a powerful land-and-expand motion: once one department (e.g., Sales) adopts "Sales AI," adjacent departments demand their own personas, multiplying seats within an account. Strategic moat is high because persona quality depends on Glean's cross-app knowledge graph understanding department-specific context. Scores lower on feasibility because it depends on Agent Workflows (F2) infrastructure for personas to take actions, not just answer questions.

---

## 5. Trade-Off Documentation

### Trade-Off 1: Agent Workflows (F2) over Real-time Doc Sync (F8)

| Dimension | Detail |
|---|---|
| **Choosing to** | Invest 6-9 months of platform engineering into agentic execution infrastructure, including tool-use framework, permission delegation model, and human-in-the-loop approval UX. |
| **Choosing NOT to** | Improve indexing latency from current ~minutes to sub-second. Live collaboration use cases (simultaneous editing + instant search) remain degraded. |
| **Key assumption** | Users value *doing things* (booking meetings, filing tickets, updating CRMs) more than *slightly faster search freshness*. If customer escalation data shows real-time sync blocking deals, revisit in Q4 2026. |

### Trade-Off 2: Slack/Teams Integration (F4) over Knowledge Graph Visualization (F3)

| Dimension | Detail |
|---|---|
| **Choosing to** | Meet users where they already work (chat). Build inline answer experience in Slack/Teams that matches or exceeds the quality of the Glean web UI. |
| **Choosing NOT to** | Build a differentiated visualization layer that could serve as a sales demo wow-factor and help admins understand their org's knowledge topology. |
| **Key assumption** | Retention is driven by daily active usage in existing workflows, not by novel visualization experiences. Graph viz is a "show once, forget" feature; chat integration is a "use 20x/day" feature. If win-rate data shows graph viz closing deals, revisit. |

### Trade-Off 3: SOC 2 + FedRAMP (F5) over Analytics Dashboard (F6)

| Dimension | Detail |
|---|---|
| **Choosing to** | Prioritize compliance engineering (audits, pen-tests, infrastructure hardening, documentation) to unblock regulated-industry pipeline. |
| **Choosing NOT to** | Give CIOs and IT admins a usage analytics layer that demonstrates ROI of Glean deployment. Buyer personas remain underserved for one more quarter. |
| **Key assumption** | Deals blocked by compliance gaps represent more near-term revenue than deals lost due to lack of admin analytics. The analytics dashboard helps *retain* existing customers; compliance *unlocks* new customers. At Glean's growth stage, new logos are prioritized. |

### Trade-Off 4: Proactive Insights (F1) over Custom AI Personas (F7)

| Dimension | Detail |
|---|---|
| **Choosing to** | Build the intelligence layer that shifts Glean from reactive to proactive — surfacing relevant docs, meeting prep, project updates before users search. |
| **Choosing NOT to** | Let departments customize their own AI assistant personas immediately. Generic Glean assistant serves all departments until H1 2027. |
| **Key assumption** | Proactive value creation (push) changes how users *think* about Glean (from tool to teammate), driving engagement and retention at a fundamental level. Personas are a configuration layer on top; they matter more once the underlying intelligence is strong enough to push relevant context. Additionally, F7 benefits from F2 infrastructure — sequencing F2 before F7 is architecturally sound. |

---

## 6. Cost-of-Delay Analysis

Cost of delay measures what Glean loses *per month* by not shipping a feature. This determines sequencing urgency independent of development effort.

| Feature | Urgency Class | Cost of Delay | Rationale |
|---|---|---|---|
| **F5: SOC 2 + FedRAMP** | **Critical — Fixed Date** | ~$2-4M/month in blocked pipeline | Multiple deals with contractual evaluation deadlines in Q3-Q4 2026. If certs aren't ready, deals go to Copilot (already FedRAMP authorized). Delay is *permanently* lost revenue, not deferred revenue. |
| **F4: Slack/Teams Integration** | **Critical — Urgent** | ~$1-2M/month in churn risk | Every month without deep chat integration, Copilot's native Teams presence converts more Glean champions into "good enough" Copilot users. Churn compounds. |
| **F2: Agent Workflows** | **High — Standard** | ~$500K-1M/month in competitive positioning | Market is moving fast (OpenAI Codex, Copilot Actions). First-mover advantage in cross-app enterprise agents is significant but not perishable on a monthly basis. 3-month delay is tolerable; 9-month delay cedes the category. |
| **F1: Proactive Insights** | **High — Standard** | ~$300-500K/month in engagement opportunity cost | No competitor has shipped proactive enterprise intelligence well yet. Window of opportunity is open but not closing imminently. Value accrues over time as the model learns user patterns. |
| **F7: Custom AI Personas** | **Moderate — Deferrable** | ~$100-200K/month in expansion revenue | Existing customers want this but aren't churning without it. Delay reduces expansion velocity but doesn't lose accounts. |
| **F6: Analytics Dashboard** | **Moderate — Deferrable** | ~$100K/month in renewal risk | CIOs ask for ROI data at renewal. Risk is manageable with manual QBR reports until dashboard ships. |

**Sequencing implication:** F5 and F4 must start immediately due to fixed-date and urgent delay costs. F2 should begin in parallel with a larger team. F1 begins once F4 ships and engineers free up.

---

## 7. Sequenced Roadmap

### Timeline View

```
2026
Q3 (Jul-Sep)          Q4 (Oct-Dec)          2027 Q1 (Jan-Mar)      Q2 (Apr-Jun)
|                      |                      |                      |
|  F5: SOC2/FedRAMP ===========================|                      |
|  [Compliance eng, audit prep, pen-test]      [Cert received]        |
|                      |                      |                      |
|  F4: Slack/Teams =============|              |                      |
|  [Bot framework, inline UX]  [GA]           |                      |
|                      |                      |                      |
|  F2: Agent Workflows ========================================|      |
|  [Tool framework]    [Permission model]     [Human-in-loop] [GA]   |
|                      |                      |                      |
|                      |  F1: Proactive =========================|   |
|                      |  [Context model]     [Push engine]    [GA]  |
|                      |                      |                      |
|                      |                      |  F6: Analytics =======|
|                      |                      |  [MVP dashboard] [GA]|
|                      |                      |                      |
|                      |                      |        F7: Personas ===>
|                      |                      |        [Config layer] |
```

### Dependency Map

```
F5 (SOC2/FedRAMP)  ──> Unblocks regulated-industry deals
       |                    (no technical dependencies)
       |
F4 (Slack/Teams)   ──> Unblocks F1 delivery channel (proactive insights in chat)
       |
       v
F1 (Proactive)     ──> Surfaces insights via chat (F4) + web UI
       |
F2 (Agent Workflows) ──> Provides execution infrastructure
       |
       v
F7 (Custom Personas) ──> Requires F2's tool-use framework for actionable personas
       |
       v
F6 (Analytics)     ──> Benefits from F2/F7 usage data; standalone MVP possible earlier
```

### Resource Allocation (assuming ~60 engineers on product)

| Quarter | F5 | F4 | F2 | F1 | F6 | F7 |
|---|---|---|---|---|---|---|
| **Q3 2026** | 8 eng + security | 10 eng | 15 eng | 2 eng (research) | — | — |
| **Q4 2026** | 4 eng (audit support) | 3 eng (polish) | 15 eng | 10 eng | — | — |
| **Q1 2027** | 1 eng (maintenance) | 2 eng | 12 eng | 10 eng | 6 eng | 2 eng (design) |
| **Q2 2027** | — | 2 eng | 5 eng (polish) | 5 eng | 6 eng | 10 eng |

### Key Milestones

| Date | Milestone | Success Metric |
|---|---|---|
| **Aug 2026** | F4 Slack beta with 10 design partners | >50% of queries answered inline without opening Glean |
| **Sep 2026** | F4 Slack/Teams GA | Chat-originated queries >20% of total query volume within 60 days |
| **Oct 2026** | F5 SOC 2 Type II report received | Unblock 3+ gated pipeline deals |
| **Nov 2026** | F2 Agent Workflows private beta | 5 design partners completing multi-step tasks end-to-end |
| **Dec 2026** | F5 FedRAMP authorization | First federal/regulated deal closed |
| **Jan 2027** | F1 Proactive Insights beta | Daily active "insight viewed" rate >30% of licensed seats |
| **Mar 2027** | F2 Agent Workflows GA | Agent task completion rate >80%, <5% error rate requiring human override |
| **Apr 2027** | F1 Proactive Insights GA | Proactive insight click-through rate >15% |
| **May 2027** | F6 Analytics Dashboard GA | 70% of accounts with >500 seats actively using dashboard |
| **Jun 2027** | F7 Custom Personas beta | 3+ departments per pilot account creating custom personas |

---

## 8. Open Questions

### Must Resolve Before Q3 2026 Kickoff

| # | Question | Why It Matters | Resolution Method | Deadline |
|---|---|---|---|---|
| 1 | **What is the actual pipeline value gated on FedRAMP?** | If <$10M, F5 drops below F1 in priority. If >$30M, F5 gets more resources. | Sales leadership to tag all compliance-gated opportunities in CRM. | Jun 15, 2026 |
| 2 | **Can Agent Workflows ship a useful v1 without full permission delegation?** | If yes, F2 can GA 2 months earlier with a "suggest actions, human executes" model. Reduces feasibility risk dramatically. | Eng prototype + 5 customer interviews on human-in-the-loop tolerance. | Jun 30, 2026 |
| 3 | **What is Glean's current churn rate in orgs that heavily use Microsoft Teams?** | Quantifies the urgency of F4. If Teams-heavy orgs churn 2x the baseline, F4 is existential, not just defensive. | Customer success to segment churn data by primary collaboration tool. | Jun 15, 2026 |
| 4 | **Does Copilot's agent roadmap include cross-app orchestration?** | If Microsoft announces cross-app agents at Build 2026, F2 urgency escalates to critical. | Competitive intelligence monitoring of Microsoft Build and Ignite. | Ongoing |

### Must Resolve Before Committing to H1 2027 Scope

| # | Question | Why It Matters | Resolution Method | Deadline |
|---|---|---|---|---|
| 5 | **Do proactive insights increase engagement or create notification fatigue?** | F1 could backfire if users feel spammed. Determines push frequency and channel strategy. | A/B test with Q4 2026 beta cohort. Measure DAU and NPS delta. | Dec 2026 |
| 6 | **Is there a viable "Analytics Dashboard Lite" that takes 4 weeks instead of 12?** | If a simple usage heatmap satisfies 80% of CIO needs, F6 can ship sooner and free capacity for F7. | PM to interview 10 CIO buyers on minimum viable admin dashboard. | Nov 2026 |
| 7 | **What is the right abstraction for Custom Personas — prompt templates or fine-tuned models?** | Determines whether F7 is a 2-month config project or a 6-month ML project. Dramatically changes sequencing. | Eng spike comparing prompt-template personas vs. RAG-persona hybrid. | Jan 2027 |
| 8 | **Should Glean build or partner for the mobile experience?** | F9 was killed, but if a major deal requires mobile, a white-label partnership (responsive PWA) could be a 4-week project vs. a 6-month native build. | Track mobile as a deal-blocker in CRM. Revisit if >5 enterprise deals cite it in Q3-Q4. | Dec 2026 |

---

## Appendix: Decision Principles Applied

1. **Cross-app is the moat.** Any feature that deepens Glean's advantage as the only platform that understands *all* of a company's tools gets extra weight. Microsoft and Google will always be better within their own ecosystems. Glean wins in the spaces between.

2. **Execution > Retrieval.** The market is shifting from "find information" to "do the work." Agent Workflows is not a feature — it is the next product category. Glean must lead here or become a search commodity.

3. **Meet users where they are.** The best enterprise product is invisible. Slack/Teams integration is not exciting, but it is where knowledge workers spend 4+ hours per day. Glean must be present in those surfaces.

4. **Compliance unlocks revenue; it doesn't create differentiation.** SOC 2 and FedRAMP are taxes on selling to enterprises. Pay them early, pay them once, and move on to features that actually win.

5. **Kill features that optimize for demos over daily use.** Knowledge Graph Visualization is a demo darling. It impresses in a 30-minute sales call. It does not get opened on Day 31 of a deployment. Prioritize features with daily engagement loops.
