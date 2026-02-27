"use client";

import { useCallback, useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { skills } from "@/lib/data/skills";
import { graphNodes, graphEdges } from "@/lib/data/graph";
import { CATEGORY_META } from "@/lib/constants";
import { Category } from "@/lib/types";
import DemoLabel from "@/components/shared/DemoLabel";

const categoryPositions: Record<Category, { x: number; y: number }> = {
  strategic: { x: 0, y: 0 },
  planning: { x: 400, y: 0 },
  execution: { x: 200, y: 300 },
  "agent-first": { x: 600, y: 300 },
  analysis: { x: 0, y: 300 },
};

function layoutNodes(): Node[] {
  const categoryIndices: Record<string, number> = {};
  return graphNodes.map((n) => {
    const catKey = n.category;
    if (!categoryIndices[catKey]) categoryIndices[catKey] = 0;
    const idx = categoryIndices[catKey]++;
    const base = categoryPositions[catKey];
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    return {
      id: n.id,
      position: { x: base.x + col * 220, y: base.y + row * 100 },
      data: { label: n.label, category: n.category },
      style: {
        background: CATEGORY_META[catKey].color + "15",
        border: `2px solid ${CATEGORY_META[catKey].color}`,
        borderRadius: "12px",
        padding: "8px 16px",
        fontSize: "12px",
        fontWeight: 600,
        color: CATEGORY_META[catKey].color,
        minWidth: "160px",
        textAlign: "center" as const,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };
  });
}

function layoutEdges(): Edge[] {
  return graphEdges.map((e, i) => ({
    id: `e-${i}`,
    source: e.source,
    target: e.target,
    type: "default",
    animated: false,
    style: { stroke: "#d1d5db", strokeWidth: 1.5 },
  }));
}

export default function GraphPage() {
  const initialNodes = useMemo(() => layoutNodes(), []);
  const initialEdges = useMemo(() => layoutEdges(), []);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [activeCategories, setActiveCategories] = useState<Set<Category>>(
    new Set<Category>(["strategic", "planning", "execution", "agent-first", "analysis"])
  );

  const toggleCategory = (cat: Category) => {
    const next = new Set(activeCategories);
    if (next.has(cat)) next.delete(cat);
    else next.add(cat);
    setActiveCategories(next);
  };

  const filteredNodes = useMemo(
    () => nodes.filter((n) => activeCategories.has(n.data.category as Category)),
    [nodes, activeCategories]
  );
  const activeNodeIds = new Set(filteredNodes.map((n) => n.id));
  const filteredEdges = useMemo(
    () => edges.filter((e) => activeNodeIds.has(e.source) && activeNodeIds.has(e.target)),
    [edges, activeNodeIds]
  );

  return (
    <div className="space-y-4 pt-8 md:pt-0">
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Skill Dependency Graph</h1>
        <DemoLabel text={`${graphNodes.length} Skills, ${graphEdges.length} Edges`} />
      </div>
      <p className="text-gray-500 max-w-2xl">
        Interactive visualization of how PM skills connect. Skills feed outputs into downstream skills, creating reasoning chains.
      </p>

      {/* Category filters */}
      <div className="flex gap-2 flex-wrap">
        {(Object.keys(CATEGORY_META) as Category[]).map((cat) => {
          const active = activeCategories.has(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                active ? "border-gray-300 bg-white text-gray-900" : "border-gray-200 bg-gray-50 text-gray-400"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: CATEGORY_META[cat].color, opacity: active ? 1 : 0.3 }} />
              {CATEGORY_META[cat].label}
            </button>
          );
        })}
      </div>

      {/* Graph */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm" style={{ height: "70vh" }}>
        <ReactFlow
          nodes={filteredNodes}
          edges={filteredEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-left"
          minZoom={0.2}
          maxZoom={2}
        >
          <Background color="#e5e7eb" gap={20} size={1} />
          <Controls />
          <MiniMap
            nodeColor={(node) => CATEGORY_META[(node.data?.category as Category) ?? "strategic"]?.color ?? "#ccc"}
            maskColor="rgba(0,0,0,0.05)"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
