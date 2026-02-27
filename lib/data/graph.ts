import { GraphNode, GraphEdge } from "../types";
import { skills } from "./skills";

export const graphNodes: GraphNode[] = skills.map((s) => ({
  id: s.slug,
  label: s.name,
  category: s.category,
}));

export const graphEdges: GraphEdge[] = skills.flatMap((s) =>
  s.feedsInto.map((target) => ({
    source: s.slug,
    target,
  }))
);
