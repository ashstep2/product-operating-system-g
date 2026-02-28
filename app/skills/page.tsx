"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { skills } from "@/lib/data/skills";
import { CATEGORY_META } from "@/lib/constants";
import { Category } from "@/lib/types";
import CategoryBadge from "@/components/shared/CategoryBadge";

const categories: (Category | "all")[] = ["all", "strategic", "planning", "execution", "agent-first", "analysis"];

export default function SkillLibrary() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
      const matchCat = cat === "all" || s.category === cat;
      return matchSearch && matchCat;
    });
  }, [search, cat]);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Header — fixed */}
      <div className="flex-shrink-0 space-y-4 pb-4">
        <div>
          <p className="text-sm font-medium text-glean-blue mb-1">Library</p>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Skill Library</h1>
          <p className="text-gray-400 mt-1 text-[14px]">
            {skills.length} PM reasoning frameworks across {Object.keys(CATEGORY_META).length} categories.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              placeholder="Search skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-glean-blue/10 focus:border-glean-blue/30 bg-white transition-all"
            />
          </div>
          <div className="flex gap-1 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  cat === c
                    ? "bg-glean-blue text-white"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                }`}
              >
                {c === "all" ? "All" : CATEGORY_META[c].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid — scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.slug}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.015, duration: 0.3 }}
            >
              <Link
                href={`/skills/${skill.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 p-5 hover:border-glean-blue/20 hover:shadow-md hover:shadow-glean-blue/5 transition-all duration-300 h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <CategoryBadge category={skill.category} />
                  <span className="text-[11px] text-gray-300">{skill.feedsInto.length + skill.readsFrom.length}</span>
                </div>
                <h3 className="font-semibold text-[14px] text-gray-900 group-hover:text-glean-blue transition-colors duration-200 mb-1.5">
                  {skill.name}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-2">{skill.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16 text-gray-300 text-sm">No skills match your search.</p>
        )}
      </div>
    </div>
  );
}
