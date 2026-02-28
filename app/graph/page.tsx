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
  NodeMouseHandler,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { graphNodes, graphEdges } from "@/lib/data/graph";
import { skillsBySlug } from "@/lib/data/skills";
import { CATEGORY_META } from "@/lib/constants";
import { Category } from "@/lib/types";

// Colors for highlight states
const UPSTREAM_COLOR = "#10B981";   // green — feeds into selected
const DOWNSTREAM_COLOR = "#F59E0B"; // amber — selected feeds into
const SELECTED_COLOR = "#343CED";   // glean blue — the clicked node
const DIM_OPACITY = 0.12;

const categoryPositions: Record<Category, { x: number; y: number }> = {
  strategic: { x: 0, y: 0 },
  planning: { x: 700, y: 0 },
  execution: { x: 350, y: 550 },
  "agent-first": { x: 1050, y: 550 },
  analysis: { x: 0, y: 550 },
};

const NODE_COL_GAP = 260;
const NODE_ROW_GAP = 120;
const COLS_PER_ROW = 3;

function baseNodes(): Node[] {
  const idx: Record<string, number> = {};
  return graphNodes.map((n) => {
    if (!idx[n.category]) idx[n.category] = 0;
    const i = idx[n.category]++;
    const base = categoryPositions[n.category];
    return {
      id: n.id,
      position: {
        x: base.x + (i % COLS_PER_ROW) * NODE_COL_GAP,
        y: base.y + Math.floor(i / COLS_PER_ROW) * NODE_ROW_GAP,
      },
      data: { label: n.label, category: n.category },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };
  });
}

function baseEdges(): Edge[] {
  return graphEdges.map((e, i) => ({
    id: `e-${i}`,
    source: e.source,
    target: e.target,
    type: "default",
  }));
}

function styleNode(node: Node, selected: string | null, upstreamIds: Set<string>, downstreamIds: Set<string>): Node {
  const cat = node.data.category as Category;
  const catColor = CATEGORY_META[cat].color;

  let background = "#fff";
  let borderColor = catColor;
  let opacity = 1;
  let shadow = "0 1px 3px rgba(0,0,0,0.04)";
  let borderWidth = "2px";

  if (selected) {
    if (node.id === selected) {
      background = SELECTED_COLOR + "12";
      borderColor = SELECTED_COLOR;
      borderWidth = "3px";
      shadow = `0 0 0 3px ${SELECTED_COLOR}20, 0 2px 8px rgba(0,0,0,0.08)`;
    } else if (upstreamIds.has(node.id)) {
      background = UPSTREAM_COLOR + "12";
      borderColor = UPSTREAM_COLOR;
      borderWidth = "3px";
      shadow = `0 0 0 2px ${UPSTREAM_COLOR}20`;
    } else if (downstreamIds.has(node.id)) {
      background = DOWNSTREAM_COLOR + "12";
      borderColor = DOWNSTREAM_COLOR;
      borderWidth = "3px";
      shadow = `0 0 0 2px ${DOWNSTREAM_COLOR}20`;
    } else {
      opacity = DIM_OPACITY;
    }
  }

  return {
    ...node,
    style: {
      background,
      border: `${borderWidth} solid ${borderColor}`,
      borderRadius: "16px",
      padding: "8px 16px",
      fontSize: "11px",
      fontWeight: 600,
      color: selected && node.id !== selected && !upstreamIds.has(node.id) && !downstreamIds.has(node.id)
        ? catColor
        : node.id === selected ? SELECTED_COLOR
        : upstreamIds.has(node.id) ? UPSTREAM_COLOR
        : downstreamIds.has(node.id) ? DOWNSTREAM_COLOR
        : catColor,
      width: "180px",
      textAlign: "center" as const,
      boxShadow: shadow,
      opacity,
      transition: "all 0.25s ease",
      cursor: "pointer",
    },
  };
}

function styleEdge(edge: Edge, selected: string | null, upstreamIds: Set<string>, downstreamIds: Set<string>): Edge {
  if (!selected) {
    return { ...edge, style: { stroke: "#e5e7eb", strokeWidth: 1 }, animated: false };
  }

  // Upstream edge: source is upstream, target is selected or upstream
  const isUpstreamEdge = upstreamIds.has(edge.source) && (edge.target === selected || upstreamIds.has(edge.target));
  // Downstream edge: source is selected or downstream, target is downstream
  const isDownstreamEdge = (edge.source === selected || downstreamIds.has(edge.source)) && downstreamIds.has(edge.target);

  if (isUpstreamEdge) {
    return { ...edge, style: { stroke: UPSTREAM_COLOR, strokeWidth: 2.5 }, animated: true };
  }
  if (isDownstreamEdge) {
    return { ...edge, style: { stroke: DOWNSTREAM_COLOR, strokeWidth: 2.5 }, animated: true };
  }

  return { ...edge, style: { stroke: "#e5e7eb", strokeWidth: 1, opacity: DIM_OPACITY }, animated: false };
}

export default function GraphPage() {
  const initialNodes = useMemo(() => baseNodes(), []);
  const initialEdges = useMemo(() => baseEdges(), []);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selected, setSelected] = useState<string | null>(null);
  const [active, setActive] = useState<Set<Category>>(
    new Set<Category>(["strategic", "planning", "execution", "agent-first", "analysis"])
  );

  const toggle = (cat: Category) => {
    const next = new Set(active);
    if (next.has(cat)) next.delete(cat); else next.add(cat);
    setActive(next);
  };

  // Compute upstream (reads_from) and downstream (feeds_into) for selected node
  const { upstreamIds, downstreamIds } = useMemo(() => {
    if (!selected) return { upstreamIds: new Set<string>(), downstreamIds: new Set<string>() };

    const skill = skillsBySlug[selected];
    if (!skill) return { upstreamIds: new Set<string>(), downstreamIds: new Set<string>() };

    // Collect direct + transitive upstream
    const upstream = new Set<string>();
    const collectUpstream = (slug: string) => {
      const s = skillsBySlug[slug];
      if (!s) return;
      for (const dep of s.readsFrom) {
        if (!upstream.has(dep)) {
          upstream.add(dep);
          collectUpstream(dep);
        }
      }
    };
    collectUpstream(selected);

    // Collect direct + transitive downstream
    const downstream = new Set<string>();
    const collectDownstream = (slug: string) => {
      const s = skillsBySlug[slug];
      if (!s) return;
      for (const dep of s.feedsInto) {
        if (!downstream.has(dep)) {
          downstream.add(dep);
          collectDownstream(dep);
        }
      }
    };
    collectDownstream(selected);

    return { upstreamIds: upstream, downstreamIds: downstream };
  }, [selected]);

  // Apply styles based on selection
  const styledNodes = useMemo(() => {
    return nodes
      .filter((n) => active.has(n.data.category as Category))
      .map((n) => styleNode(n, selected, upstreamIds, downstreamIds));
  }, [nodes, selected, upstreamIds, downstreamIds, active]);

  const activeIds = new Set(styledNodes.map((n) => n.id));
  const styledEdges = useMemo(() => {
    return edges
      .filter((e) => activeIds.has(e.source) && activeIds.has(e.target))
      .map((e) => styleEdge(e, selected, upstreamIds, downstreamIds));
  }, [edges, selected, upstreamIds, downstreamIds, activeIds]);

  const onNodeClick: NodeMouseHandler = useCallback((_, node) => {
    setSelected((prev) => (prev === node.id ? null : node.id));
  }, []);

  const onPaneClick = useCallback(() => {
    setSelected(null);
  }, []);

  const selectedSkill = selected ? skillsBySlug[selected] : null;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-shrink-0 space-y-3 pb-4">
        <div>
          <p className="text-sm font-medium text-glean-blue mb-1">Visualization</p>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dependency Graph</h1>
          <p className="text-gray-400 mt-1 text-[14px]">
            Click any skill to highlight its upstream and downstream connections.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {(Object.keys(CATEGORY_META) as Category[]).map((cat) => {
              const on = active.has(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggle(cat)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    on ? "bg-white border border-gray-200 text-gray-700 shadow-sm" : "text-gray-300 border border-transparent"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full transition-opacity"
                    style={{ backgroundColor: CATEGORY_META[cat].color, opacity: on ? 1 : 0.2 }}
                  />
                  {CATEGORY_META[cat].label}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="flex items-center gap-3 text-[11px] font-medium border-l border-gray-200 pl-4 ml-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: UPSTREAM_COLOR }} />
                Reads from ({upstreamIds.size})
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: SELECTED_COLOR }} />
                Selected
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: DOWNSTREAM_COLOR }} />
                Feeds into ({downstreamIds.size})
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 min-h-0 bg-white rounded-2xl border border-gray-100 overflow-hidden relative">
        <ReactFlow
          nodes={styledNodes}
          edges={styledEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
          fitViewOptions={{ padding: 0.15 }}
          attributionPosition="bottom-left"
          minZoom={0.15}
          maxZoom={2}
        >
          <Background color="#f3f4f6" gap={24} size={1} />
          <Controls showInteractive={false} style={{ borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }} />
          <MiniMap
            nodeColor={(node) => {
              if (selected && node.id === selected) return SELECTED_COLOR;
              if (selected && upstreamIds.has(node.id)) return UPSTREAM_COLOR;
              if (selected && downstreamIds.has(node.id)) return DOWNSTREAM_COLOR;
              return CATEGORY_META[(node.data?.category as Category) ?? "strategic"]?.color ?? "#ccc";
            }}
            maskColor="rgba(0,0,0,0.03)"
            style={{ borderRadius: "12px", border: "1px solid #e5e7eb" }}
          />
        </ReactFlow>

        {/* Selected node info panel */}
        {selectedSkill && (
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg p-4 max-w-xs z-10">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Selected</p>
            <p className="text-[14px] font-semibold text-gray-900">{selectedSkill.name}</p>
            <p className="text-[12px] text-gray-400 mt-1 line-clamp-2">{selectedSkill.description}</p>
            <div className="flex gap-4 mt-2 text-[11px]">
              <span style={{ color: UPSTREAM_COLOR }}>
                {upstreamIds.size} upstream
              </span>
              <span style={{ color: DOWNSTREAM_COLOR }}>
                {downstreamIds.size} downstream
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
