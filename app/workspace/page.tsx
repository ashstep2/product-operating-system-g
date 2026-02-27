"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, FlaskConical } from "lucide-react";
import { workspaceExample } from "@/lib/data/workspace-example";
import DemoLabel from "@/components/shared/DemoLabel";

export default function WorkspacePage() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(workspaceExample.map((s) => s.id)));

  const toggle = (id: string) => {
    const next = new Set(expanded);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpanded(next);
  };

  return (
    <div className="space-y-6 pt-8 md:pt-0">
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Decision Workspace</h1>
        <DemoLabel text="Pre-Generated Output" />
      </div>

      {/* Context Banner */}
      <div className="bg-gradient-to-r from-glean-blue/5 to-glean-purple/5 rounded-xl border border-glean-blue/10 p-5">
        <div className="flex items-start gap-3">
          <FlaskConical size={20} className="text-glean-blue mt-0.5 flex-shrink-0" />
          <div>
            <h2 className="font-semibold text-gray-900">Feature Prioritization — Velora Q3 Roadmap</h2>
            <p className="text-sm text-gray-500 mt-1">
              This is a pre-generated example showing what the <strong>feature-prioritization</strong> skill produces when given product context, competitive signals, and customer discovery data. In production, this output would be generated in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {workspaceExample.map((section, i) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(section.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {expanded.has(section.id) ? (
                  <ChevronDown size={16} className="text-gray-400" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
              </div>
              <span className="text-xs text-gray-400">
                {i + 1} of {workspaceExample.length}
              </span>
            </button>
            {expanded.has(section.id) && (
              <div className="px-5 pb-5 pt-0">
                <div className="prose prose-sm max-w-none text-gray-600 [&_table]:w-full [&_table]:text-xs [&_th]:bg-gray-50 [&_th]:p-2 [&_td]:p-2 [&_th]:text-left [&_tr]:border-b [&_tr]:border-gray-100 [&_strong]:text-gray-900">
                  <MarkdownLite content={section.content} />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MarkdownLite({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table
    if (line.includes("|") && lines[i + 1]?.includes("---")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split("|").filter(Boolean).map((h) => h.trim());
      const rows = tableLines.slice(2).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
      elements.push(
        <div key={i} className="overflow-x-auto my-3">
          <table>
            <thead>
              <tr>{headers.map((h, j) => <th key={j}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>{row.map((cell, ci) => <td key={ci} dangerouslySetInnerHTML={{ __html: inlineMd(cell) }} />)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Code block
    if (line.startsWith("```")) {
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={i} className="bg-gray-50 rounded-lg p-4 text-xs font-mono overflow-x-auto my-3">
          {codeLines.join("\n")}
        </pre>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Bold header-like lines
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<h4 key={i} className="font-semibold text-gray-900 mt-4 mb-1">{line.replace(/\*\*/g, "")}</h4>);
      i++;
      continue;
    }

    // List items
    if (line.startsWith("- ")) {
      elements.push(<p key={i} className="ml-4 my-0.5" dangerouslySetInnerHTML={{ __html: "&#x2022; " + inlineMd(line.slice(2)) }} />);
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(<p key={i} className="my-1" dangerouslySetInnerHTML={{ __html: inlineMd(line) }} />);
    i++;
  }

  return <>{elements}</>;
}

function inlineMd(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-xs">$1</code>');
}
