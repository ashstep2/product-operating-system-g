"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, GitBranch, FlaskConical, ArrowRight } from "lucide-react";
import { skills } from "@/lib/data/skills";
import { signals } from "@/lib/data/signals";
import { graphEdges } from "@/lib/data/graph";

const sourceFilters = ["All", "github", "hackernews", "reddit", "news", "internal"] as const;
const sourceLabels: Record<string, string> = {
  All: "All", github: "GitHub", hackernews: "HN", reddit: "Reddit", news: "News", internal: "Internal",
};

const metrics = [
  { label: "Skills", value: skills.length },
  { label: "Sources", value: 6 },
  { label: "Connections", value: graphEdges.length },
  { label: "Signals", value: signals.length },
];

export default function Dashboard() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? signals : signals.filter((s) => s.source === filter);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Top section — fixed */}
      <div className="flex-shrink-0 space-y-6 pb-4">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-sm font-medium text-glean-blue mb-1">Product Operating System</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Product Command Center
          </h1>
          <p className="text-gray-400 mt-2 max-w-lg text-[14px] leading-relaxed">
            Ingest signals. Apply reasoning frameworks. Ship decisions.
          </p>
        </motion.div>

        {/* Metrics + Quick nav row */}
        <div className="flex gap-3 flex-wrap">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white rounded-2xl px-5 py-3 border border-gray-100 min-w-[100px]"
            >
              <p className="text-xl font-bold text-gray-900">{m.value}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{m.label}</p>
            </motion.div>
          ))}
          <div className="flex-1" />
          {[
            { label: "Skills", href: "/skills", icon: BookOpen },
            { label: "Graph", href: "/graph", icon: GitBranch },
            { label: "Workspace", href: "/workspace", icon: FlaskConical },
          ].map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 border border-gray-100 hover:border-glean-blue/20 hover:shadow-sm transition-all duration-200 text-[13px] font-medium text-gray-600 hover:text-glean-blue"
            >
              <a.icon size={15} />
              {a.label}
              <ArrowRight size={12} className="text-gray-300" />
            </Link>
          ))}
        </div>
      </div>

      {/* Signal Feed — scrollable, fills remaining space */}
      <div className="flex-1 min-h-0 flex flex-col">
        <div className="flex items-center justify-between mb-3 flex-shrink-0">
          <h2 className="text-sm font-semibold text-gray-900">Signal Feed</h2>
          <div className="flex gap-1">
            {sourceFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-glean-blue text-white"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                }`}
              >
                {sourceLabels[f]}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto space-y-1.5 pr-1">
          {filtered.map((signal, i) => (
            <motion.div
              key={signal.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className="bg-white rounded-2xl border border-gray-100 px-5 py-3.5 hover:border-gray-200 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                      {sourceLabels[signal.source]}
                    </span>
                    <span className="text-[10px] text-gray-300">{signal.date}</span>
                    {signal.relevance === "high" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-glean-blue" />
                    )}
                  </div>
                  <h3 className="text-[13px] font-medium text-gray-900 leading-snug">{signal.title}</h3>
                  <p className="text-[12px] text-gray-400 mt-0.5 line-clamp-1">{signal.summary}</p>
                  <div className="flex gap-1.5 mt-1.5">
                    {signal.suggestedSkills.slice(0, 2).map((slug) => (
                      <Link
                        key={slug}
                        href={`/skills/${slug}`}
                        className="text-[10px] text-glean-blue/70 hover:text-glean-blue transition-colors"
                      >
                        {slug}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
