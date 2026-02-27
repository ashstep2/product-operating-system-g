"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { skills } from "@/lib/data/skills";
import { CATEGORY_META } from "@/lib/constants";
import { Category } from "@/lib/types";
import CategoryBadge from "@/components/shared/CategoryBadge";
import DemoLabel from "@/components/shared/DemoLabel";

const categories: (Category | "all")[] = ["all", "strategic", "planning", "execution", "agent-first", "analysis"];

export default function SkillLibrary() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchesSearch = search === "" || s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "all" || s.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [search, categoryFilter]);

  return (
    <div className="space-y-6 pt-8 md:pt-0">
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Skill Library</h1>
        <DemoLabel text={`${skills.length} Skills`} />
      </div>
      <p className="text-gray-500 max-w-2xl">
        Battle-tested PM reasoning frameworks. Each skill ingests signals and context to produce structured, decision-ready artifacts.
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-glean-blue/20 focus:border-glean-blue"
          />
        </div>
        <div className="flex gap-1 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategoryFilter(c)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                categoryFilter === c ? "bg-glean-blue text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {c === "all" ? "All" : CATEGORY_META[c].label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((skill, i) => (
          <motion.div
            key={skill.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02 }}
          >
            <Link
              href={`/skills/${skill.slug}`}
              className="group block bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-200 transition-all h-full"
            >
              <div className="flex items-start justify-between mb-3">
                <CategoryBadge category={skill.category} />
                <span className="text-xs text-gray-400">{skill.feedsInto.length + skill.readsFrom.length} connections</span>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-glean-blue transition-colors mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3">{skill.description}</p>
              <div className="flex items-center gap-1 mt-4 text-sm text-glean-blue opacity-0 group-hover:opacity-100 transition-opacity">
                View details <ArrowRight size={14} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">No skills match your search.</div>
      )}
    </div>
  );
}
