"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, GitBranch, FlaskConical, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Skill Library", href: "/skills", icon: BookOpen },
  { label: "Dependency Graph", href: "/graph", icon: GitBranch },
  { label: "Workspace", href: "/workspace", icon: FlaskConical },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white rounded-lg p-2 shadow-md border border-gray-200"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-200 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-glean-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">PI</span>
            </div>
            <div>
              <h1 className="font-semibold text-gray-900 text-sm">Product Intelligence</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">AI Platform</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-glean-blue/10 text-glean-blue"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 font-medium">Prototype Demo</p>
            <p className="text-[10px] text-gray-400 mt-1">Built for Glean FDPM application</p>
          </div>
        </div>
      </aside>
    </>
  );
}
