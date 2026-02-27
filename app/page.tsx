"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, GitBranch, FlaskConical, ArrowRight, ExternalLink, TrendingUp, Zap, BarChart3, Radio } from "lucide-react";
import { skills } from "@/lib/data/skills";
import { signals } from "@/lib/data/signals";
import { graphEdges } from "@/lib/data/graph";
import DemoLabel from "@/components/shared/DemoLabel";

const sourceFilters = ["All", "github", "hackernews", "reddit", "news", "internal"] as const;
const sourceLabels: Record<string, string> = {
  All: "All",
  github: "GitHub",
  hackernews: "Hacker News",
  reddit: "Reddit",
  news: "News",
  internal: "Internal",
};
const sourceColors: Record<string, string> = {
  github: "bg-gray-800 text-white",
  hackernews: "bg-orange-500 text-white",
  reddit: "bg-red-500 text-white",
  news: "bg-blue-500 text-white",
  internal: "bg-emerald-500 text-white",
};
const relevanceColors: Record<string, string> = {
  high: "bg-red-50 text-red-700 border-red-200",
  medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  low: "bg-gray-50 text-gray-600 border-gray-200",
};

const metrics = [
  { label: "PM Skills", value: skills.length, icon: BookOpen, color: "text-glean-blue" },
  { label: "Signal Sources", value: 6, icon: Radio, color: "text-emerald-600" },
  { label: "Categories", value: 5, icon: BarChart3, color: "text-glean-purple" },
  { label: "Connections", value: graphEdges.length, icon: GitBranch, color: "text-amber-600" },
];

const quickActions = [
  { label: "Skill Library", desc: "Browse 30 PM reasoning frameworks", href: "/skills", icon: BookOpen, color: "bg-glean-blue" },
  { label: "Dependency Graph", desc: "Explore skill connections", href: "/graph", icon: GitBranch, color: "bg-glean-purple" },
  { label: "Workspace", desc: "See a skill execution output", href: "/workspace", icon: FlaskConical, color: "bg-emerald-600" },
];

export default function Dashboard() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? signals : signals.filter((s) => s.source === filter);

  return (
    <div className="space-y-8 pt-8 md:pt-0">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Product Command Center</h1>
          <DemoLabel />
        </div>
        <p className="text-gray-500 max-w-2xl">
          Ingest signals from everywhere. Structure them through PM reasoning frameworks. Produce decision-ready artifacts.
        </p>
      </motion.div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
          >
            <div className="flex items-center justify-between">
              <m.icon size={20} className={m.color} />
              <span className="text-2xl font-bold text-gray-900">{m.value}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-3 gap-4">
        {quickActions.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-200 transition-all"
          >
            <div className={`w-10 h-10 rounded-lg ${a.color} flex items-center justify-center mb-3`}>
              <a.icon size={20} className="text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-glean-blue transition-colors">{a.label}</h3>
            <p className="text-sm text-gray-500 mt-1">{a.desc}</p>
            <div className="flex items-center gap-1 mt-3 text-sm text-glean-blue opacity-0 group-hover:opacity-100 transition-opacity">
              Explore <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>

      {/* Signal Feed */}
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-900">Signal Feed</h2>
            <DemoLabel text="Curated Signals" />
          </div>
          <div className="flex gap-1 flex-wrap">
            {sourceFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filter === f ? "bg-glean-blue text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {sourceLabels[f]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((signal, i) => (
            <motion.div
              key={signal.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${sourceColors[signal.source]}`}>
                      {sourceLabels[signal.source]}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${relevanceColors[signal.relevance]}`}>
                      {signal.relevance}
                    </span>
                    <span className="text-[11px] text-gray-400">{signal.date}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm">{signal.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{signal.summary}</p>
                  <div className="flex gap-1.5 mt-2 flex-wrap">
                    {signal.suggestedSkills.map((slug) => (
                      <Link
                        key={slug}
                        href={`/skills/${slug}`}
                        className="text-[11px] text-glean-blue bg-glean-blue/5 px-2 py-0.5 rounded hover:bg-glean-blue/10 transition-colors"
                      >
                        {slug}
                      </Link>
                    ))}
                  </div>
                </div>
                <Zap size={16} className="text-gray-300 flex-shrink-0 mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
