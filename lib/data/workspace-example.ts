import { WorkspaceSection } from "../types";

export const workspaceExample: WorkspaceSection[] = [
  {
    id: "exec-summary",
    title: "Executive Summary",
    content: `We are committing to **4 features** this cycle, deferring 3, and explicitly killing 2. The top priority is the **reasoning engine** (AI explanations for every review comment) — it is our primary differentiator against GitHub Copilot and the #1 request from customer discovery.

We are NOT building a VS Code extension, a review dashboard, or PR auto-merge this cycle, despite stakeholder requests.`,
  },
  {
    id: "scored-matrix",
    title: "Scored Feature Matrix",
    content: `| # | Feature | Reach | Impact | Confidence | Strategic Alignment | Effort (pw) | **Score** | Rank |
|---|---|---|---|---|---|---|---|---|
| F1 | Reasoning engine | 3.0 | 3.0 | 0.9 | 5 | 8 | **2.93** | 1 |
| F2 | Confidence scoring | 2.5 | 2.5 | 0.85 | 5 | 4 | **3.53** | 2 |
| F3 | GitLab integration | 1.5 | 2.0 | 0.9 | 4 | 6 | **1.73** | 3 |
| F4 | Team learning model | 2.0 | 2.5 | 0.6 | 5 | 10 | **1.57** | 4 |
| F5 | PR summary gen | 2.5 | 1.5 | 0.8 | 2 | 3 | **1.67** | 6 |
| F6 | Security rule pack | 1.5 | 2.0 | 0.7 | 3 | 5 | **1.37** | 5 |

*Scoring weights: Impact (30%), Strategic Alignment (20%), Reach (20%), Confidence (15%), Effort (15% inverse)*`,
  },
  {
    id: "tradeoffs",
    title: "Trade-Off Documentation",
    content: `**F1: Reasoning Engine**
- *Choosing to:* Invest 8 person-weeks in the AI explanation system.
- *Choosing NOT to:* Ship F5 (PR summaries) or F8 (VS Code extension) this cycle.
- *Key assumption:* "Explains its reasoning" converts trial users to paid.

**F3: GitLab Integration**
- *Choosing to:* Expand platform support to capture a segment Copilot doesn't serve.
- *Choosing NOT to:* Go deeper on GitHub-specific features.
- *Key assumption:* GitLab segment has similar pain points and willingness to pay.

**Explicitly Not Doing:**
- VS Code extension — shifts value prop from "team code review" to "individual developer tool"
- Review analytics dashboard — vanity feature; teams don't buy code review tools for charts
- Auto-merge on green — high risk, conflicts with "AI assists humans" positioning`,
  },
  {
    id: "roadmap",
    title: "Sequenced Roadmap",
    content: `**This Cycle (6 weeks):**

| Feature | Weeks | Engineers | Dependencies |
|---|---|---|---|
| F1: Reasoning engine | Week 1-5 | 3 engineers | None |
| F3: GitLab integration | Week 1-4 | 2 engineers | None (parallel) |
| F2: Confidence scoring | Week 3-6 | 1 engineer | F1 core working |

\`\`\`
Week:  1    2    3    4    5    6
F1:    ████████████████████████████
F3:    ████████████████████
F2:              ████████████████████
F4:                            [validate → next cycle]
\`\`\`

**Next Cycle:** F4 (Team learning — validate first), F7 (Slack — quick win), F6 (Security — if enterprise pipeline grows)`,
  },
  {
    id: "cost-of-delay",
    title: "Cost-of-Delay Analysis",
    content: `| Feature | Delay Profile | Rationale | Adjusted Rank |
|---|---|---|---|
| F1: Reasoning engine | **Urgent** | Copilot improving monthly. Every month without our differentiator, the gap narrows. | 1 (unchanged) |
| F3: GitLab integration | **Urgent** | 3 deals lost last quarter. GitLab's Duo AI is in beta — if they ship first, our advantage disappears. | 2 (promoted) |
| F2: Confidence scoring | **Standard** | Important but no competitive pressure on this specific feature. | 3 (demoted) |
| F4: Team learning model | **Standard** | Moat-building is strategic but not urgent. | 4 (unchanged) |

**Adjusted commit order:** F1 → F3 → F2 → F4`,
  },
  {
    id: "open-questions",
    title: "Open Questions",
    content: `1. **F4 validation:** The team learning model scored high on strategy but 0.6 on confidence. Need a prototype showing "before/after" review quality. Recommend running \`prototype-driven-validation\` before next cycle.

2. **Pricing pressure:** Competitive response identified pricing as a vulnerability. Should we adjust pricing with the GitLab launch? Needs a separate \`pricing-and-monetization\` analysis.

3. **Engineering capacity:** If F4 validates, it's 10 pw — 60% of one cycle's capacity. Need to decide: hire or scope down.`,
  },
];
