'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import {
  Palette,
  Type,
  Layout,
  Zap,
  Copy,
  CheckCircle2,
  Terminal,
  ArrowRight,
  MessageSquare,
  ShieldAlert
} from 'lucide-react';

type Section = 'tokens' | 'components' | 'patterns' | 'voice';

export default function StyleGuide() {
  const [activeSection, setActiveSection] = useState<Section>('tokens');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Head>
        <title>Swarm Design System | v1.0</title>
        <meta name="description" content="Official design protocols for Narrative Engineering interfaces." />
      </Head>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 flex-shrink-0 flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-slate-800 font-bold tracking-tighter text-white gap-2">
            <Zap className="w-5 h-5 text-amber-500" fill="currentColor" />
            SWARM_DS
          </div>
          <nav className="p-4 space-y-2">
            <NavButton active={activeSection === 'tokens'} onClick={() => setActiveSection('tokens')} icon={Palette} label="Design Tokens" />
            <NavButton active={activeSection === 'components'} onClick={() => setActiveSection('components')} icon={Layout} label="Core Components" />
            <NavButton active={activeSection === 'patterns'} onClick={() => setActiveSection('patterns')} icon={Zap} label="Narrative Patterns" />
            <NavButton active={activeSection === 'voice'} onClick={() => setActiveSection('voice')} icon={MessageSquare} label="Voice & Tone" />
          </nav>
          <div className="mt-auto p-6 text-xs text-slate-500 font-mono">
            v1.0.4 stable
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <header className="py-12 px-8 border-b border-slate-900 bg-slate-950/50 backdrop-blur sticky top-0 z-10">
            <div className="max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <Terminal className="w-4 h-4" />
                Internal Documentation
              </div>
              <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
                Narrative Engineering Design System
              </h1>
              <p className="text-slate-400 text-lg">
                The definitive guide to recreating the "Swarm Effect" aesthetic.
              </p>
            </div>
          </header>

          <div className="p-8 max-w-5xl mx-auto">
            {activeSection === 'tokens' && <TokensView />}
            {activeSection === 'components' && <ComponentsView />}
            {activeSection === 'patterns' && <PatternsView />}
            {activeSection === 'voice' && <VoiceView />}
          </div>
        </main>
      </div>
    </div>
  );
}

/* --- SECTION VIEWS --- */

function TokensView() {
  return (
    <div className="space-y-16">
      <section>
        <SectionHeader title="Color Architecture" description="We use a strict dark mode palette. Amber is the ONLY primary action color. Red is exclusively for 'anti-patterns' or failure modes." />
        
        <div className="grid gap-8">
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Base / Canvas (Slate)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="bg-slate-950" tw="bg-slate-950" hex="#020617" use="Main page background" />
              <ColorSwatch name="bg-slate-900" tw="bg-slate-900" hex="#0f172a" use="Card / Section background" />
              <ColorSwatch name="bg-slate-800" tw="bg-slate-800" hex="#1e293b" use="Borders / Secondary hover" />
              <ColorSwatch name="text-slate-400" tw="bg-slate-400" hex="#94a3b8" use="Body text" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Action / Signal (Amber)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="bg-amber-500" tw="bg-amber-500" hex="#f59e0b" use="Primary Buttons / Icons" />
              <ColorSwatch name="text-amber-400" tw="bg-amber-400" hex="#fbbf24" use="Highlights / Gradients" />
              <ColorSwatch name="bg-amber-500/10" tw="bg-amber-500/10" hex="Opacity" use="Subtle backgrounds / Badges" />
              <ColorSwatch name="Gradient" tw="bg-gradient-to-r from-amber-500 to-orange-600" hex="Gradient" use="Hero Text / Critical CTA" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="Typography Protocol" description="High contrast between heading and body tracking. Headings are tight and heavy; labels are wide and light." />
        
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-8">
          <div>
            <div className="text-sm text-slate-500 font-mono mb-2">font-sans font-extrabold tracking-tighter leading-tight</div>
            <div className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
              Hero Heading Engineer
            </div>
          </div>
          
          <div>
            <div className="text-sm text-slate-500 font-mono mb-2">font-bold tracking-tight</div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Section Heading (H2)
            </div>
          </div>

          <div>
            <div className="text-sm text-slate-500 font-mono mb-2">text-xl text-slate-400 leading-relaxed</div>
            <div className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Lead paragraph text used directly under H1/H2s. It has slightly larger size and relaxed leading for readability against the dark background.
            </div>
          </div>

          <div>
            <div className="text-sm text-slate-500 font-mono mb-2">text-base text-slate-300 (Standard Body)</div>
            <div className="text-base text-slate-300 max-w-2xl">
              Standard body copy. Used inside cards or less critical sections. Maintains good contrast but recedes visually compared to headings.
            </div>
          </div>

          <div>
             <div className="text-sm text-slate-500 font-mono mb-2">uppercase tracking-widest font-bold text-xs</div>
             <div className="uppercase tracking-widest font-bold text-xs text-amber-500">
               eyebrow label / micro-header
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ComponentsView() {
  return (
    <div className="space-y-16">
      <section>
        <SectionHeader title="Kinetic Buttons" description="Buttons must feel pressable and heavy. Avoid generic rounded-full pills unless it's a tag." />
        <div className="flex flex-wrap gap-6 p-8 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="space-y-2 text-center">
            <button className="px-8 py-4 bg-amber-500 text-slate-950 text-lg font-bold rounded-sm hover:bg-amber-400 transition-all flex items-center gap-2 group">
              Primary Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs font-mono text-slate-500">rounded-sm / bold / group-hover</div>
          </div>

          <div className="space-y-2 text-center">
            <button className="px-8 py-4 bg-transparent border-2 border-slate-700 text-slate-200 text-lg font-bold rounded-sm hover:border-slate-500 transition-all flex items-center gap-2">
              Secondary Action
            </button>
            <div className="text-xs font-mono text-slate-500">border-2 / slate-700</div>
          </div>

          <div className="space-y-2 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-lg font-bold rounded-sm hover:opacity-90 transition-opacity shadow-xl shadow-amber-500/20">
              High Stakes CTA
            </button>
            <div className="text-xs font-mono text-slate-500">gradient / shadow-xl</div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="Container Protocols" description="Standardized cards for featuring content. Note the specific border and hover states." />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
            <Zap className="w-8 h-8 text-amber-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Standard Feature Card</h3>
            <p className="text-slate-400 leading-relaxed">
              Uses `bg-slate-900` and `border-slate-800`. The critical interaction is `hover:border-amber-500/50` which creates a subtle "activation" effect.
            </p>
          </div>

          <div className="bg-slate-950 border-2 border-amber-500/30 p-8 rounded-2xl relative shadow-[0_0_50px_-12px_rgba(245,158,11,0.3)]">
             <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-amber-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                HIGHLIGHTED
              </div>
            <h3 className="text-2xl font-bold text-white mb-4">Featured / Active Card</h3>
            <p className="text-slate-400 leading-relaxed">
              Used for the "most popular" or recommended option. Uses a permanent amber border (low opacity) and a shadow glow.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="Badges & Signals" description="Used to create urgency or establish authority." />
        <div className="flex flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Live Signal Badge
          </div>

          <div className="inline-block px-4 py-1 bg-red-600 text-white font-bold tracking-wider text-xs rounded-sm">
            FAILURE MODE / ANTI-PATTERN
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-slate-500" />
            Technical Label
          </div>
        </div>
      </section>
    </div>
  );
}

function PatternsView() {
  return (
    <div className="space-y-16">
      <section>
        <SectionHeader title="The 'Before/After' Kinetic Comparison" description="Our core persuasive pattern. Pits a passive 'anti-pattern' against our active 'swarm pattern'." />
        
        {/* Actual rendered example of the pattern */}
        <div className="bg-slate-950 p-8 border border-slate-800 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6 relative">
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-800 text-slate-200 font-bold rounded-full w-10 h-10 flex items-center justify-center border-4 border-slate-950 hidden md:flex text-xs">
              VS
            </div>
            {/* BAD SIDE */}
            <div className="bg-slate-900/50 rounded-xl border-2 border-red-900/30 overflow-hidden flex flex-col">
              <div className="bg-red-900/10 px-4 py-3 border-b border-red-900/30 flex items-center gap-3">
                <ShieldAlert className="text-red-500 w-4 h-4" />
                <h4 className="font-bold text-red-400 text-sm">The Passive Way</h4>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm leading-relaxed">Static information delivery that results in polite applause and zero action.</p>
              </div>
            </div>
            {/* GOOD SIDE */}
            <div className="bg-slate-900/50 rounded-xl border-2 border-amber-500/30 overflow-hidden flex flex-col shadow-[0_0_30px_-15px_rgba(245,158,11,0.3)]">
              <div className="bg-amber-500/10 px-4 py-3 border-b border-amber-500/30 flex items-center gap-3">
                <CheckCircle2 className="text-amber-500 w-4 h-4" />
                <h4 className="font-bold text-amber-400 text-sm">The Swarm Way</h4>
              </div>
              <div className="p-6">
                <p className="text-slate-300 text-sm leading-relaxed font-medium">Engineered narrative loops that trigger immediate physical movement from the audience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="Visual Effects & Backgrounds" description="We use specific textures to avoid flat 'corporate' dark mode." />
        <div className="grid md:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
          <div className="h-32 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden p-4">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <span className="relative z-10">Carbon Fibre Texture (opacity-20)</span>
          </div>
          <div className="h-32 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden p-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/30 blur-[50px] rounded-full" />
             <span className="relative z-10">Amber Glow Orb (blur-[50px]+)</span>
          </div>
          <div className="h-32 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-950" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-dotted.png')] opacity-30" />
             <span className="relative z-10">Dotted Grid (Technical feel)</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function VoiceView() {
  return (
    <div className="space-y-16">
      <section>
        <SectionHeader title="Tone of Voice Principles" description="We do not 'suggest'. We 'engineer'. Our copy must feel like a technical specification for human behavior." />
        
        <div className="grid md:grid-cols-2 gap-8">
          <DoDontCard 
            type="do"
            title="Use Engineering Metaphors"
            examples={["Architecting the narrative", "High signal-to-noise ratio", "Cognitive load", "Failure mode"]}
          />
          <DoDontCard 
            type="dont"
            title="Use Soft 'Soft Skills' Language"
            examples={["Telling better stories", "Being more inspiring", "Connecting with hearts", "Charisma tips"]}
          />
          <DoDontCard 
            type="do"
            title="Create Binary Choices"
            examples={["You can either [Status Quo] OR you can [Swarm Action].", "Stop [Bad Behavior]. Start [Good Behavior]."]}
          />
          <DoDontCard 
            type="dont"
            title="Be Passive or Apologetic"
            examples={["We hope you'll consider...", "Maybe try this technique...", "If you have time..."]}
          />
        </div>
      </section>
    </div>
  );
}

/* --- UTILITY COMPONENTS --- */

function SectionHeader({ title, description }: { title: string, description: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-slate-400 max-w-3xl">{description}</p>
      <div className="h-px w-full bg-slate-800 mt-8" />
    </div>
  );
}

function NavButton({ active, onClick, icon: Icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 rounded-md transition-all duration-200 ${active ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}

function ColorSwatch({ name, tw, hex, use }: any) {
  return (
    <div className="space-y-2">
      <div className={`h-24 rounded-lg border border-slate-800 shadow-xl ${tw} flex items-end p-2`}>
        <span className="font-mono text-[10px] text-white/50 uppercase">{hex}</span>
      </div>
      <div>
        <div className="font-mono text-xs text-amber-500 font-bold">{name}</div>
        <div className="text-xs text-slate-500">{use}</div>
      </div>
    </div>
  );
}

function DoDontCard({ type, title, examples }: { type: 'do' | 'dont', title: string, examples: string[] }) {
  const isDo = type === 'do';
  const Icon = isDo ? CheckCircle2 : ShieldAlert;
  return (
    <div className={`p-6 rounded-xl border ${isDo ? 'bg-slate-900/50 border-green-900/30' : 'bg-slate-950 border-red-900/30'}`}>
      <div className={`flex items-center gap-2 mb-4 font-bold ${isDo ? 'text-green-500' : 'text-red-500'}`}>
        <Icon className="w-5 h-5" />
        {title}
      </div>
      <ul className="space-y-2">
        {examples.map((ex, i) => (
          <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
            <span className="opacity-50">{isDo ? '→' : '×'}</span> {ex}
          </li>
        ))}
      </ul>
    </div>
  );
}
