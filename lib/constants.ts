import { Category } from "./types";

export const CATEGORY_META: Record<Category, { label: string; color: string; bgLight: string; textColor: string }> = {
  strategic: { label: "Strategic", color: "#343CED", bgLight: "bg-blue-50", textColor: "text-blue-700" },
  planning: { label: "Planning", color: "#8B5CF6", bgLight: "bg-purple-50", textColor: "text-purple-700" },
  execution: { label: "Execution", color: "#10B981", bgLight: "bg-emerald-50", textColor: "text-emerald-700" },
  "agent-first": { label: "Agent-First", color: "#F59E0B", bgLight: "bg-amber-50", textColor: "text-amber-700" },
  analysis: { label: "Analysis", color: "#EC4899", bgLight: "bg-pink-50", textColor: "text-pink-700" },
};

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: "LayoutDashboard" },
  { label: "Skill Library", href: "/skills", icon: "BookOpen" },
  { label: "Dependency Graph", href: "/graph", icon: "GitBranch" },
  { label: "Workspace", href: "/workspace", icon: "FlaskConical" },
] as const;
