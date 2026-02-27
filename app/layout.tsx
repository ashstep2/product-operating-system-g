import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Product Intelligence Platform | AI-Powered PM Decisions",
  description: "From scattered signals to shipped decisions. 30 PM reasoning skills, real-time signal ingestion, decision-ready artifacts.",
  openGraph: {
    title: "AI Product Intelligence Platform",
    description: "From scattered signals to shipped decisions.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Sidebar />
        <main className="md:ml-64 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
