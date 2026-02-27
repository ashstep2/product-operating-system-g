"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, GitBranch } from "lucide-react";
import { skillsBySlug } from "@/lib/data/skills";
import CategoryBadge from "@/components/shared/CategoryBadge";
import DemoLabel from "@/components/shared/DemoLabel";

export default function SkillDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const skill = skillsBySlug[slug];

  if (!skill) {
    return (
      <div className="pt-8 md:pt-0">
        <Link href="/skills" className="text-glean-blue text-sm flex items-center gap-1 mb-4">
          <ArrowLeft size={14} /> Back to Skills
        </Link>
        <p className="text-gray-500">Skill not found.</p>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pt-8 md:pt-0">
      <Link href="/skills" className="text-glean-blue text-sm flex items-center gap-1 hover:underline">
        <ArrowLeft size={14} /> Back to Skills
      </Link>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <CategoryBadge category={skill.category} />
          <DemoLabel />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">{skill.name}</h1>
        <p className="text-gray-600 leading-relaxed">{skill.description}</p>
      </div>

      {/* Connections */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Reads From */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <GitBranch size={16} className="text-glean-blue" />
            <h2 className="font-semibold text-gray-900">Reads From</h2>
            <span className="text-xs text-gray-400">({skill.readsFrom.length})</span>
          </div>
          {skill.readsFrom.length === 0 ? (
            <p className="text-sm text-gray-400">No upstream dependencies — this skill can run independently.</p>
          ) : (
            <div className="space-y-2">
              {skill.readsFrom.map((s) => {
                const upstream = skillsBySlug[s];
                return (
                  <Link
                    key={s}
                    href={`/skills/${s}`}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{upstream?.name ?? s}</p>
                      {upstream && <CategoryBadge category={upstream.category} />}
                    </div>
                    <ArrowRight size={14} className="text-gray-400" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Feeds Into */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <ArrowRight size={16} className="text-emerald-600" />
            <h2 className="font-semibold text-gray-900">Feeds Into</h2>
            <span className="text-xs text-gray-400">({skill.feedsInto.length})</span>
          </div>
          {skill.feedsInto.length === 0 ? (
            <p className="text-sm text-gray-400">Terminal skill — no downstream skills depend on this output.</p>
          ) : (
            <div className="space-y-2">
              {skill.feedsInto.map((s) => {
                const downstream = skillsBySlug[s];
                return (
                  <Link
                    key={s}
                    href={`/skills/${s}`}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{downstream?.name ?? s}</p>
                      {downstream && <CategoryBadge category={downstream.category} />}
                    </div>
                    <ArrowRight size={14} className="text-gray-400" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Sample Outputs */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-semibold text-gray-900 mb-3">What This Skill Produces</h2>
        <p className="text-sm text-gray-500 mb-4">When executed with your product context and signal data, this skill generates structured artifacts including:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {getArtifacts(skill.slug).map((a, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
              <span className="text-glean-blue mt-0.5">&#x2022;</span>
              <span className="text-sm text-gray-700">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function getArtifacts(slug: string): string[] {
  const map: Record<string, string[]> = {
    "feature-prioritization": ["Classified Feature List (LNO)", "Weighted Scoring Matrix", "Trade-Off Documentation", "Cost-of-Delay Analysis", "Sequenced Roadmap", "Prioritization Rationale Memo"],
    "customer-discovery": ["Interview Guide", "Hypothesis Tracker", "Recruitment Strategy", "Synthesis Framework", "Discovery Report"],
    "competitive-response": ["Threat Classification Matrix", "Moat Analysis", "Response Strategy", "Competitive Timeline", "Win/Loss Analysis"],
    "stakeholder-alignment": ["Stakeholder Map", "RACI Matrix", "Communication Plan", "Decision Framework", "Escalation Paths"],
    "prototype-driven-validation": ["Prototype Brief", "Variation Matrix", "Test Plan", "Feedback Synthesis", "Build/Kill Decision"],
    "north-star-metrics": ["Metric Tree", "Leading Indicators", "Lagging Indicators", "Dashboard Spec", "Measurement Cadence"],
    "user-segmentation": ["Segment Profiles", "Prioritization Matrix", "Cross-Segment Insights", "Targeting Strategy"],
    "experiment-design": ["Experiment Brief", "Statistical Plan", "Growth Loop Design", "Results Synthesis"],
    "writing-prds-for-ai": ["AI Product PRD", "Eval Criteria", "Behavior Spec", "Uncertainty Handling Plan"],
    "zero-to-one-product-launch": ["Launch Checklist", "Channel Strategy", "Success Metrics", "Rollback Plan"],
  };
  return map[slug] ?? ["Structured Analysis Report", "Scored Assessment Matrix", "Prioritized Recommendations", "Action Plan"];
}
