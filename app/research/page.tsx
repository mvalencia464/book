'use client';

import React from 'react';
import Head from 'next/head';
import {
  Brain,
  Zap,
  Users,
  GitBranch,
  Database,
  Terminal,
  CheckCircle2,
  ArrowRight,
  XCircle,
  Shield,
  Cpu,
  Clock,
  BookOpen
} from 'lucide-react';

export default function ProgramDetails() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-amber-900">
      <Head>
        <title>The Swarm Effect4 Protocol | Executive Idea Propagation</title>
        <meta name="description" content="An expert analysis of Arthur Zards' idea propagation system for executives. Move beyond corporate speak to actualized organizational impact." />
      </Head>

      {/* Header / Nav */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            <span>SWARM EFFECT4</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
             <a href="#crisis" className="hover:text-amber-500 transition-colors">The Crisis</a>
             <a href="#methodology" className="hover:text-amber-500 transition-colors">Methodology</a>
             <a href="#strategies" className="hover:text-amber-500 transition-colors">Core Strategies</a>
             <button className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-sm hover:bg-amber-400 transition-colors">
               Executive Sprint
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-mono text-xs font-bold uppercase tracking-wider mb-8">
            <Terminal className="w-4 h-4" />
            System Analysis: Executive Communication
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-8">
            Don't just inform. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Propagate.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-12">
            The Swarm Effect4 is not a public speaking course. It is an <strong>Idea Propagation System</strong> engineered for executives who need their strategic vision to survive contact with the audience.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">42M+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Views Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Years Research</div>
            </div>
            <div className="col-span-2">
              <div className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <Shield className="text-amber-500 w-5 h-5" />
                Stoic-Backed
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Psychological Certainty Protocol</div>
            </div>
          </div>
        </div>
      </header>

      {/* I. The Crisis & Solution */}
      <section id="crisis" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">I. The Crisis of Executive Communication</h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Modern corporate communication is failing. Traditional "corporate speak" results in ideas that 
                <span className="text-slate-200 font-medium"> "die before the audience applause ends."</span>
              </p>
              <p>
                The market demanded a high-efficiency solution: a model that could convert limited executive time into maximum return on communication capital. The Swarm Effect4 emerged from the TED revolution to meet this need distilling 15 years of world-class communication analysis into a rapid-mastery framework.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 bg-slate-900/50">
              <div className="p-4 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" /> Conventional Corporate
              </div>
              <div className="p-4 flex items-center gap-2 text-amber-500 bg-amber-500/5">
                <CheckCircle2 className="w-4 h-4" /> Swarm Effect4
              </div>
            </div>
            <div className="divide-y divide-slate-900">
               <ComparisonRow label="Goal" oldWay="Passive Information Transfer" newWay="Actionable Impact & Propagation" />
               <ComparisonRow label="Format" oldWay="Lecture / Slide-Driven" newWay="Conversational / Story-Driven" />
               <ComparisonRow label="Lifespan" oldWay="Dies after applause" newWay="Lives & thrives to transform" />
               <ComparisonRow label="Engagement" oldWay="Passive Absorption" newWay="Audience 'Swarming'" />
            </div>
          </div>
        </div>
      </section>

      {/* II. Methodology */}
      <section id="methodology" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-amber-500 font-bold tracking-widest uppercase mb-4">Mechanism of Transformation</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Idea to Actualization Model
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A proprietary framework ensuring executive ideas move rigorously from raw concept to sustained organizational impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 -translate-y-1/2" />
            
            <PhaseCard 
              phase="I"
              title="Discovery Protocol"
              icon={Brain}
              focus="The 'Deeper Truth'"
              desc="We interrogate your idea until we find the singular core element that matters. Anchored in Stoic philosophy to build unshakeable internal certainty."
            />
            <PhaseCard 
              phase="II"
              title="Narrative Architecture"
              icon={GitBranch}
              focus="Structure & Arc"
              desc="Leveraging the 'Storytelling Creation Toolbox' to structure the idea for maximum resonance without needing to become a 'professional storyteller'."
            />
            <PhaseCard 
              phase="III"
              title="Actualization Delivery"
              icon={Zap}
              focus="Swarm Execution"
              desc="Converting the refined idea into a powerful presentation that triggers the 'Swarm'—immediate, widespread organizational adoption."
            />
          </div>
        </div>
      </section>

      {/* III. Core Strategies */}
      <section id="strategies" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">
            III. Core Strategies: The "How-To-Swarm" Blueprint
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <StrategyCard 
              icon={Users}
              title="Conversational Mastery"
              desc="Breaking definitively from rigid formal structures. A versatile style applicable not just to keynotes, but to high-stakes board meetings and sales pitches."
            />
            <StrategyCard 
              icon={Database}
              title="The Engagement Toolkit"
              desc="Solving the 'visually flat' presentation problem. Learn to use powerful visual tools that exist outside the standard slide deck without needing graphic design skills."
            />
            <StrategyCard 
              icon={Cpu}
              title="AI as Strategic Collaborator"
              desc="Using AI not as a replacement for thought, but as a 'new communication muse' to dramatically increase content creation velocity."
            />
            <StrategyCard 
              icon={Brain}
              title="Flow State Activation"
              desc="Cultivating peak performance through focused preparation. The psychological mechanism that guarantees authentic connection and delivery mastery."
            />
          </div>
        </div>
      </section>

      {/* Stoic Philosophy Sidebar/Highlight */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5 -skew-y-3 transform origin-top-left" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-amber-500 font-bold mb-6">
                <BookOpen className="w-5 h-5" />
                <span>THE PHILOSOPHICAL ANCHOR</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Stoicism: The Bedrock of Executive Certainty
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Most programs teach surface-level performance skills. We teach mental mastery.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                By integrating Stoic principles1specifically distinguishing "what is within and without our control"1we build unshakeable psychological security. This internal certainty is what allows an executive to be perceived as competent, authentic, and tough under pressure.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-slate-950 p-8 rounded-xl border border-amber-500/30 shadow-[0_0_40px_-15px_rgba(245,158,11,0.2)]">
              <div className="text-center space-y-4">
                <Shield className="w-16 h-16 mx-auto text-amber-500" />
                <div className="text-white font-bold text-xl">Certainty Protocol</div>
                <p className="text-sm text-slate-400">
                  "Psychological security is not a passive state, but the mind's expression of a degree of certainty in its situation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IV. Impact & Validation */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">IV. Validation: The Swarm in Action</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="text-amber-500 font-bold mb-2">Measurable Reach</div>
              <div className="text-3xl font-bold text-white mb-2">42 Million+</div>
              <div className="text-sm text-slate-400">Collective online views generated by Swarm Effect4 coached speakers.</div>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="text-amber-500 font-bold mb-2">Elite Clientele</div>
              <div className="text-white font-medium">
                Billionaires, Olympians, Astronauts, & C-Suite Leaders
              </div>
              <div className="text-sm text-slate-400 mt-2">Universally adaptable methodology across the highest echelons.</div>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="text-amber-500 font-bold mb-2">Immediate ROI</div>
              <div className="text-white font-medium">
                "Able to apply immediately"
              </div>
              <div className="text-sm text-slate-400 mt-2">Client feedback consistently highlights rapid applicability for busy schedules.</div>
            </div>
          </div>

          {/* Transformation quote */}
          <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Brain className="w-64 h-64 -mr-20 -mt-20" />
            </div>
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl text-slate-200 italic leading-relaxed mb-6">
                "[Arthur] challenged me to go outside of my comfort zone and develop something much more thought provoking and controversial than I would have done on my own."
              </p>
              <footer className="text-amber-500 font-bold flex items-center gap-2">
                <div className="w-8 h-px bg-amber-500" />
                Executive Client
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-dotted.png')] opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to engineer your <br/>
            <span className="text-amber-500">Idea Propagation System?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            The Swarm Effect4 is available as an intensive Executive Sprint for leaders who need rapid mastery.
          </p>
          <button className="px-10 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 text-xl font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20 flex items-center gap-3 mx-auto">
            <Clock className="w-6 h-6" />
            Book Executive Sprint
          </button>
        </div>
      </section>
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function ComparisonRow({ label, oldWay, newWay }: { label: string, oldWay: string, newWay: string }) {
  return (
    <div className="grid grid-cols-2 text-sm">
      <div className="p-6 text-slate-400 flex flex-col">
        <span className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">{label}</span>
        {oldWay}
      </div>
      <div className="p-6 text-white font-medium bg-amber-500/5 flex flex-col">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-500/50 mb-2">{label}</span>
        {newWay}
      </div>
    </div>
  );
}

function PhaseCard({ phase, title, icon: Icon, focus, desc }: any) {
  return (
    <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative z-10 hover:border-amber-500/50 transition-colors group">
      <div className="text-6xl font-black text-slate-800 absolute top-4 right-6 opacity-50 select-none group-hover:text-amber-500/10 transition-colors">
        {phase}
      </div>
      <div className="w-16 h-16 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors">
        <Icon className="w-8 h-8 text-amber-500" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-4">{focus}</div>
      <p className="text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function StrategyCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="flex gap-6 p-6 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900 transition-colors">
      <div className="shrink-0">
        <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">
          <Icon className="w-6 h-6 text-amber-500" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
