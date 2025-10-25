import Link from "next/link";
import { Zap } from "lucide-react";

export default function Home() {
  const pages = [
    {
      name: "Arthur Zard - TEDx Speaker",
      path: "/arthurzard",
      description: "TEDx Speaker landing page - Storytelling for Technical Leaders"
    },
    {
      name: "Design System",
      path: "/design",
      description: "Swarm Design System - Style guide and design tokens"
    },
    {
      name: "Research & Program",
      path: "/research",
      description: "The Swarm Effect Protocol - Executive Idea Propagation"
    },
    {
      name: "Scrolling Animation",
      path: "/scrolling",
      description: "Animated landing page with interactive mechanism visualizer"
    },
    {
      name: "Swarm Effect Landing",
      path: "/swarmed",
      description: "Narrative Engineering for Technical Leaders"
    },
    {
      name: "Swarm Resources",
      path: "/swarmresources",
      description: "Narrative Toolkit - AI tools and visual assets"
    },
    {
      name: "Action Mechanics",
      path: "/action-mechanics",
      description: "Kinetic Compliance - Engineering Audience Action"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-12 h-12 text-amber-500" fill="currentColor" />
            <h1 className="text-5xl font-extrabold tracking-tighter text-white">
              SWARM PAGES
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Navigate to any of the landing pages below
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                {page.name}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {page.description}
              </p>
              <div className="mt-4 text-amber-500 text-sm font-medium flex items-center gap-2">
                View Page
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-slate-900 border border-slate-800 rounded-lg">
            <p className="text-slate-500 text-sm">
              All pages are now accessible at <code className="text-amber-500">/[page-name]</code>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
