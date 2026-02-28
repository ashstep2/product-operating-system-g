"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, GitBranch, FlaskConical, FileText, FolderOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Skills", href: "/skills", icon: BookOpen },
  { label: "Graph", href: "/graph", icon: GitBranch },
  { label: "Workspace", href: "/workspace", icon: FlaskConical },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-5 left-5 z-50 md:hidden bg-[#FAFAFA] rounded-full p-2.5 shadow-sm border border-gray-100"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/10 z-30 md:hidden backdrop-blur-sm" onClick={() => setOpen(false)} />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 h-full w-[240px] bg-[#FAFAFA] border-r border-gray-200/60 flex flex-col transition-transform duration-300 ease-out md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-glean-blue to-glean-purple flex items-center justify-center">
              <span className="text-white font-bold text-xs">OS</span>
            </div>
            <span className="font-semibold text-[15px] text-gray-900 tracking-tight">Product OS</span>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-glean-blue text-white shadow-sm shadow-glean-blue/20"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/80"
                }`}
              >
                <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                {item.label}
              </Link>
            );
          })}

          {/* Download PRD - directly after nav items */}
          <a
            href="/PRD.md"
            download
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-gray-500 hover:text-glean-blue hover:bg-gray-100/80 transition-all duration-200"
          >
            <FileText size={16} strokeWidth={2} />
            Download PRD
          </a>

          {/* Glean skill outputs on GitHub */}
          <a
            href="https://github.com/TODO/glean-takehome/tree/main/outputs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-gray-500 hover:text-glean-blue hover:bg-gray-100/80 transition-all duration-200"
          >
            <FolderOpen size={16} strokeWidth={2} />
            Glean Skill Outputs
          </a>
        </nav>
      </aside>
    </>
  );
}
