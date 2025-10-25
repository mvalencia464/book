'use client';

import React from 'react';
import Head from 'next/head';
import {
  Zap,
  Brain,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Terminal,
  MousePointerClick,
  Lock
} from 'lucide-react';

export default function ActionMechanicsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Head>
        <title>Kinetic Compliance | Engineering Audience Action</title>
        <meta name="description" content="The precise mechanics of turning technical presentations into immediate organizational movement." />
      </Head>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            <span>SWARM MECHANICS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <span className="text-slate-500">Action Protocols v2.1</span>
            <button className="px-5 py-2 bg-amber-500 text-slate-950 font-bold rounded-sm hover:bg-amber-400 transition-colors">
              Master Class
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/20 text-amber-500 font-mono text-xs uppercase mb-8">
            <Terminal className="w-4 h-4" />
            Narrative Engineering Protocol
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-white">
            Stop begging for approval. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Engineer their movement.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The difference between a "good talk" and a "swarm" isn't charisma. It's mechanics. You must replace passive information transfer with <strong className="text-slate-100">Kinetic Action Triggers</strong>.
          </p>
        </div>
      </header>

      {/* Core Concept: The Kinetic Gap */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">The Failure Mode: "Passive Agreement"</h2>
          <p className="text-lg text-slate-400 mb-8">
            Most technical leaders achieve passive agreement. The audience nods. They understand the data. They agree with your logic. 
            <span className="text-amber-500 font-bold block mt-4">But they do not move.</span>
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-8 p-6 bg-slate-950 rounded-xl border border-slate-800">
              <div className="text-center opacity-50">
                <Brain className="w-12 h-12 mx-auto mb-2" />
                <div className="text-sm uppercase">Logical Buy-in</div>
              </div>
              <ArrowRight className="w-8 h-8 text-red-500" />
              <div className="text-center opacity-50">
                <Zap className="w-12 h-12 mx-auto mb-2" />
                <div className="text-sm uppercase">Physical Action</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-red-400 mt-4 font-mono">Error: Connection Timed Out. No Kinetic Bridge detected.</p>
        </div>
      </section>

      {/* THE MEAT: Side by Side Examples */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">The 3 Kinetic Shifts</h2>
            <p className="text-xl text-slate-400">Standard Operating Procedure vs. Swarm Architecture</p>
          </div>

          <div className="space-y-24">
            {/* Shift 1: The Hook */}
            <ComparisonSection 
              number="01"
              title="The Opening Protocol"
              subtitle="Stop starting with 'The Agenda'. Start with 'The Pain'."
              icon={ShieldAlert}
              badExample={{
                title: "The Anti-Pattern (Agenda Driven)",
                content: "Good morning. Today I want to talk about our Q3 Kubernetes migration, discuss the latency metrics we're seeing in us-east-1, and finally review the budget implications for new instances.",
                whyItFails: "Creates zero cognitive tension. The audience feels they can check email until the 'budget' section."
              }}
              goodExample={{
                title: "The Swarm Pattern (Stakes Driven)",
                content: "Right now, we are burning $12,000 an hour because of latency in us-east-1. Every second I talk, we lose another $3. By the end of this 10-minute talk, we need to decide if we're going to stop that bleeding today.",
                whyItWorks: "Immediate financial stakes. Opens a 'cognitive loop' that can only be closed by paying attention."
              }}
            />

            {/* Shift 2: The Evidence */}
            <ComparisonSection 
              number="02"
              title="Data Utilization"
              subtitle="Data is not the story. Data is the weapon you use to defend the story."
              icon={Terminal}
              badExample={{
                title: "The Anti-Pattern (The Data Dump)",
                content: "[Presenter shows a Grafana dashboard with 30 different metrics tightly packed] 'As you can see here, CPU is up, but memory is stable, and if you look at this bottom left chart, throughput is choppy...'",
                whyItFails: "Cognitive overload. When you show everything, you emphasize nothing. The audience disengages to protect their brain energy."
              }}
              goodExample={{
                title: "The Swarm Pattern (The Signal)",
                content: "[Presenter shows a black slide with a SINGLE red trend line going up] 'Ignore everything else. This red line is customer churn. If this line doesn't flatten in 14 days, we miss our Q4 OKRs. Here is the one fix that flattens it...'",
                whyItWorks: "Radical focus. It forces the entire room to look at the exact same single problem simultaneously."
              }}
            />

            {/* Shift 3: The Close */}
            <ComparisonSection 
              number="03"
              title="The Kinetic Close"
              subtitle="Never end with 'Questions?'. End with a command."
              icon={MousePointerClick}
              badExample={{
                title: "The Anti-Pattern (Polite Failure)",
                content: "'So, that's our proposal for the new API gateway. It should help us long-term. Thanks for listening. Does anyone have any questions?'",
                whyItFails: "Releases all built-up tension without channeling it into action. Passes total control back to the audience to delay or dismiss."
              }}
              goodExample={{
                title: "The Swarm Pattern (Immediate Action)",
                content: "'We agree the current API is unsustainable. I have pushed a Pull Request (#4902) that implements this fix. I need a Senior Principal to approve that PR before we break for lunch today. Who is taking it?'",
                whyItWorks: "Specific, immediate, and binary. It forces a public commitment in real-time. It is uncomfortable, which is why it works."
              }}
            />
          </div>
        </div>
      </section>

      {/* Deep Dive: The Psychology of Kinetic Compliance */}
      <section className="py-24 bg-amber-500 text-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block border-2 border-slate-950 px-4 py-1 font-bold text-sm uppercase tracking-widest mb-6">
              Advanced Mechanics
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              The "Micro-Commitment" Principle
            </h2>
            <p className="text-lg font-medium mb-6 leading-relaxed">
              A "Swarm" doesn't happen all at once. It starts with one engineered movement that triggers the rest.
            </p>
            <p className="text-lg opacity-80 leading-relaxed mb-8">
              If you want a massive budget approved, don't ask for the massive budget at the end of the talk. Ask for a <strong>micro-commitment</strong> right now.
            </p>
            <ul className="space-y-4 font-bold">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                "Open your calendars right now and block 2pm on Thursday."
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                "Raise your hand if you agree this is our P0 priority."
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                "Slack me the word 'GO' if you want in on the pilot."
              </li>
            </ul>
          </div>
          <div className="bg-slate-950 p-8 rounded-3xl text-slate-200 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-white text-slate-950 w-16 h-16 rounded-full flex items-center justify-center font-bold rotate-12 shadow-lg">
              TIP
            </div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Why this works on engineers</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Technical minds value consistency. Once they have physically taken a small action (raising a hand, sending a Slack), their brain must align their future larger actions with that initial small commitment to remain logically consistent.
            </p>
            <div className="flex gap-4 items-center text-sm opacity-50">
              <Lock className="w-4 h-4" />
              <span>Psychological Consistency Lock-in</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to weaponize your narrative?</h2>
        <button className="px-10 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xl font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
          Book the "Kinetic Mechanics" Workshop
        </button>
      </section>
    </div>
  );
}

/* --- REUSABLE COMPARISON COMPONENT --- */
interface ComparisonProps {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badExample: { title: string; content: string; whyItFails: string; };
  goodExample: { title: string; content: string; whyItWorks: string; };
}

function ComparisonSection({ number, title, subtitle, icon: Icon, badExample, goodExample }: ComparisonProps) {
  return (
    <div className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-amber-500 font-mono text-xl opacity-50">/{number}</span>
        <h3 className="text-3xl font-bold text-white flex items-center gap-3">
          <Icon className="text-amber-500 w-8 h-8" />
          {title}
        </h3>
      </div>
      <p className="text-xl text-slate-400 mb-12 max-w-3xl">
        {subtitle}
      </p>

      <div className="grid md:grid-cols-2 gap-6 relative">
        {/* VS Badge in the middle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-800 text-slate-200 font-bold rounded-full w-12 h-12 flex items-center justify-center border-4 border-slate-950 hidden md:flex">
          VS
        </div>

        {/* BAD SIDE */}
        <div className="bg-slate-900/50 rounded-2xl border-2 border-red-900/30 overflow-hidden flex flex-col">
          <div className="bg-red-900/10 p-4 border-b border-red-900/30 flex items-center gap-3">
            <XCircle className="text-red-500 w-5 h-5" />
            <h4 className="font-bold text-red-400">{badExample.title}</h4>
          </div>
          <div className="p-8 flex-grow">
            <div className="font-mono text-sm text-slate-300 bg-slate-950 p-6 rounded-lg border border-slate-800 mb-6 italic opacity-70">
              "{badExample.content}"
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-red-400 font-bold mb-2">Why it fails:</div>
              <p className="text-slate-400 leading-relaxed">{badExample.whyItFails}</p>
            </div>
          </div>
        </div>

        {/* GOOD SIDE */}
        <div className="bg-slate-900/50 rounded-2xl border-2 border-amber-500/30 overflow-hidden flex flex-col shadow-[0_0_50px_-20px_rgba(245,158,11,0.2)]">
          <div className="bg-amber-500/10 p-4 border-b border-amber-500/30 flex items-center gap-3">
            <CheckCircle2 className="text-amber-500 w-5 h-5" />
            <h4 className="font-bold text-amber-400">{goodExample.title}</h4>
          </div>
          <div className="p-8 flex-grow">
            <div className="font-mono text-base text-white bg-slate-950 p-6 rounded-lg border border-amber-500/20 mb-6 font-medium relative">
              <Zap className="absolute -top-3 -right-3 w-6 h-6 text-amber-500 fill-current" />
              "{goodExample.content}"
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-500 font-bold mb-2">Why it works:</div>
              <p className="text-slate-300 leading-relaxed font-medium">{goodExample.whyItWorks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
