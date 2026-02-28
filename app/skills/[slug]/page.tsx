"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, GitBranch } from "lucide-react";
import { skillsBySlug } from "@/lib/data/skills";
import CategoryBadge from "@/components/shared/CategoryBadge";

export default function SkillDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const skill = skillsBySlug[slug];

  if (!skill) {
    return (
      <div>
        <Link href="/skills" className="text-glean-blue text-sm flex items-center gap-1 mb-4">
          <ArrowLeft size={14} /> Back
        </Link>
        <p className="text-gray-400">Skill not found.</p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-64px)] overflow-y-auto pr-1">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <Link href="/skills" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-glean-blue transition-colors">
          <ArrowLeft size={14} /> Skills
        </Link>

        <div>
          <CategoryBadge category={skill.category} />
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight mt-3">{skill.name}</h1>
          <p className="text-gray-400 mt-2 text-[15px] leading-relaxed max-w-2xl">{skill.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <ConnectionList
            title="Reads From"
            icon={<GitBranch size={15} className="text-glean-blue" />}
            slugs={skill.readsFrom}
            emptyText="No upstream dependencies"
          />
          <ConnectionList
            title="Feeds Into"
            icon={<ArrowRight size={15} className="text-emerald-500" />}
            slugs={skill.feedsInto}
            emptyText="Terminal skill"
          />
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Produced Artifacts</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {getArtifacts(skill.slug).map((a, i) => (
              <div key={i} className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-gray-50/80">
                <div className="w-1 h-1 rounded-full bg-glean-blue flex-shrink-0" />
                <span className="text-[13px] text-gray-600">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ConnectionList({ title, icon, slugs, emptyText }: { title: string; icon: React.ReactNode; slugs: string[]; emptyText: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
        <span className="text-xs text-gray-300">({slugs.length})</span>
      </div>
      {slugs.length === 0 ? (
        <p className="text-[13px] text-gray-300">{emptyText}</p>
      ) : (
        <div className="space-y-1">
          {slugs.map((s) => {
            const linked = skillsBySlug[s];
            return (
              <Link
                key={s}
                href={`/skills/${s}`}
                className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-medium text-gray-700 group-hover:text-glean-blue transition-colors">
                    {linked?.name ?? s}
                  </span>
                  {linked && <CategoryBadge category={linked.category} />}
                </div>
                <ArrowRight size={12} className="text-gray-200 group-hover:text-glean-blue transition-colors" />
              </Link>
            );
          })}
        </div>
      )}
    </div>
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
