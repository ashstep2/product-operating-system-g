import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Product Intelligence Platform",
  description: "From scattered signals to shipped decisions. AI-powered PM reasoning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden">
        <Sidebar />
        <main className="md:ml-[240px] h-full overflow-hidden">
          <div className="h-full overflow-y-auto px-6 sm:px-8 py-8">
            <div className="max-w-6xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
