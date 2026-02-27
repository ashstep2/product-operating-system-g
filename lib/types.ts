export type Category = "strategic" | "planning" | "execution" | "agent-first" | "analysis";

export interface Skill {
  slug: string;
  name: string;
  description: string;
  category: Category;
  feedsInto: string[];
  readsFrom: string[];
}

export interface Signal {
  id: string;
  title: string;
  source: "github" | "hackernews" | "reddit" | "news" | "internal";
  summary: string;
  relevance: "high" | "medium" | "low";
  date: string;
  url?: string;
  suggestedSkills: string[];
}

export interface GraphNode {
  id: string;
  label: string;
  category: Category;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export interface WorkspaceSection {
  id: string;
  title: string;
  content: string;
  collapsed?: boolean;
}
