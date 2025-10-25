'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import {
  Brain,
  Zap,
  Terminal,
  Box,
  GitBranch,
  MessageSquare,
  Cpu,
  ArrowRight,
  CheckCircle,
  Download,
  Copy,
  Play,
  Settings,
  AlertTriangle
} from 'lucide-react';

type Tab = 'principles' | 'ai-tool' | 'visuals' | 'triggers';

export default function SwarmToolkit() {
  const [activeTab, setActiveTab] = useState<Tab>('ai-tool');
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-mono selection:bg-amber-900">
      <Head>
        <title>SwarmOS | Narrative Toolkit v2.1</title>
        <meta name="description" content="Digital assets and AI-assisted tools for engineered storytelling." />
      </Head>

      {/* Dashboard Layout */}
      <div className="flex h-screen overflow-hidden">
        
        {/* Sidebar Navigation */}
        <aside className="w-20 md:w-64 bg-slate-900 border-r border-slate-800 flex-shrink-0 flex flex-col justify-between">
          <div>
            <div className="h-20 flex items-center justify-center md:justify-start md:px-6 border-b border-slate-800">
              <Zap className="w-8 h-8 text-amber-500" />
              <span className="hidden md:block ml-3 font-bold text-slate-100 tracking-widest">SWARM_OS</span>
            </div>
            <nav className="p-4 space-y-2">
              <NavButton active={activeTab === 'principles'} onClick={() => setActiveTab('principles')} icon={Brain} label="Core Kernel" />
              <NavButton active={activeTab === 'ai-tool'} onClick={() => setActiveTab('ai-tool')} icon={Cpu} label="Narrative AI" />
              <NavButton active={activeTab === 'visuals'} onClick={() => setActiveTab('visuals')} icon={Box} label="Visual Assets" />
              <NavButton active={activeTab === 'triggers'} onClick={() => setActiveTab('triggers')} icon={Zap} label="Action Triggers" />
            </nav>
          </div>
          <div className="p-4">
            <div className="hidden md:flex items-center gap-3 p-3 bg-slate-950 rounded border border-slate-800 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="opacity-60">System Online</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-slate-950 relative">
          {/* Background Grid Effect */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-dotted.png')] opacity-20 pointer-events-none" />
          
          <header className="h-20 bg-slate-900/50 backdrop-blur border-b border-slate-800 flex items-center px-8 sticky top-0 z-10">
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              {activeTab === 'principles' && <><Brain className="text-amber-500" /> The Swarm Kernel: Operating Principles</>}
              {activeTab === 'ai-tool' && <><Cpu className="text-amber-500" /> Neural Narrative Validator</>}
              {activeTab === 'visuals' && <><Box className="text-amber-500" /> Cognitive Visual Assets</>}
              {activeTab === 'triggers' && <><Zap className="text-amber-500" /> Kinetic Action Triggers</>}
            </h1>
          </header>

          <div className="p-8 max-w-6xl mx-auto relative z-0">
            {activeTab === 'principles' && <PrinciplesView />}
            {activeTab === 'ai-tool' && <AiToolView />}
            {activeTab === 'visuals' && <VisualsView />}
            {activeTab === 'triggers' && <TriggersView />}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------------
   COMPONENTS & VIEWS
---------------------------------------------------------------------------------- */

function NavButton({ active, onClick, icon: Icon, label }: { active: boolean, onClick: () => void, icon: any, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 rounded-md transition-all duration-200 group ${active ? 'bg-amber-500/10 text-amber-400 border border-amber-500/50' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-200'}`}
    >
      <Icon className={`w-5 h-5 ${active ? 'text-amber-500' : 'group-hover:text-slate-200'}`} />
      <span className="hidden md:block font-medium">{label}</span>
      {active && <ArrowRight className="ml-auto w-4 h-4 hidden md:block opacity-50" />}
    </button>
  );
}

/* --- View 1: Principles --- */
function PrinciplesView() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="col-span-2 mb-8">
        <p className="text-lg text-slate-400 max-w-3xl">
          Before accessing the tools, install these core operating principles into your mental model. Violation of these principles results in "Polite Failure" (applause without action).
        </p>
      </div>
      <PrincipleCard 
        icon={GitBranch}
        title="01. The Biological Imperative"
        rule="Logic informs. Emotion moves."
        desc="Technical audiences believe they are purely rational. They are lying to themselves. You must provide a logical justification for an emotional decision they've already made."
      />
      <PrincipleCard 
        icon={AlertTriangle}
        title="02. Signal-to-Noise Ratio"
        rule="If everything is important, nothing is."
        desc="Swarm movement requires a single, clear pheromone trail. Every data point you include that doesn't directly support your ONE Call to Action is noise that disperses the swarm."
      />
      <PrincipleCard 
        icon={Terminal}
        title="03. The Vulnerability Bridge"
        rule="Perfection creates distance. Flaws create connection."
        desc="To lead a swarm, you must be part of it. Admitting a technical failure or uncertainty early in your talk builds the trust required for them to follow your later commands."
      />
      <PrincipleCard 
        icon={Zap}
        title="04. Kinetic Closing"
        rule="Don't summarize. Catalyze."
        desc="Never end on a 'Thank You' slide. End on a physical imperative. Give them something to DO the second they leave their seats."
      />
    </div>
  );
}

function PrincipleCard({ icon: Icon, title, rule, desc }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-colors group">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-950 border border-slate-800 rounded-lg group-hover:border-amber-500/30 transition-colors">
          <Icon className="w-6 h-6 text-amber-500" />
        </div>
        <h3 className="font-bold text-slate-100">{title}</h3>
      </div>
      <div className="text-amber-500 font-medium mb-4 text-sm border-l-2 border-amber-500 pl-3 py-1">
        "{rule}"
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

/* --- View 2: AI Simulator Tool --- */
function AiToolView() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulated AI function - in a real app this would call an LLM API
  const processSwarmNarrative = () => {
    if (!input) return;
    setIsProcessing(true);
    setTimeout(() => {
      // Simple template replacement for demo purposes
      const swarmVersion = 
        `⚠️ URGENT SIGNAL DETECTED ⚠️\n\n` +
        `THE CONFLICT: We are currently facing [${input.substring(0, 20)}...] which is bleeding our resources.\n\n` +
        `THE STAKES: If we do nothing, we don't just lose time, we lose our competitive edge in Q4.\n\n` +
        `THE ACTION: I need this team to swarm on the solution today. Not tomorrow. Today.`;
      
      setOutput(swarmVersion);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Input: The "Boring" Update</h3>
          <p className="text-sm text-slate-400 mb-4">
            Paste your standard, dry technical status update or data point here. The neural net will search for the hidden narrative conflict.
          </p>
          <textarea 
            className="w-full h-64 bg-slate-900 border border-slate-800 rounded-xl p-4 text-slate-300 focus:border-amber-500 focus:outline-none resize-none font-mono text-sm"
            placeholder="e.g., We have observed a 12% increase in latency on the auth-service due to recent commits in the user-profile module. We recommend a rollback..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button 
          onClick={processSwarmNarrative}
          disabled={isProcessing || !input}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isProcessing ? 'bg-slate-800 text-slate-500' : 'bg-amber-500 hover:bg-amber-400 text-slate-950'}`}
        >
          {isProcessing ? <Cpu className="animate-spin" /> : <Zap fill="currentColor" />}
          {isProcessing ? 'ANALYZING NARRATIVE VECTORS...' : 'GENERATE SWARM SIGNAL'}
        </button>
      </div>

      <div className="lg:col-span-3">
        <h3 className="text-xl font-bold text-white mb-2">Output: Swarm Signal</h3>
        <p className="text-sm text-slate-400 mb-4">
          Your re-engineered narrative designed to trigger immediate action.
        </p>
        <div className="h-64 bg-slate-950 border-2 border-amber-500/30 rounded-xl p-6 relative overflow-hidden flex flex-col">
          {output ? (
            <>
              <pre className="whitespace-pre-wrap font-mono text-amber-300 text-sm leading-relaxed">
                {output}
              </pre>
              <button className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors" title="Copy to Clipboard">
                <Copy className="w-5 h-5" />
              </button>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-700 flex-col gap-4">
              <Terminal className="w-16 h-16 opacity-20" />
              <p>Awaiting Input Stream...</p>
            </div>
          )}
          
          {/* Decorative Scanline */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-amber-500/5 to-transparent animate-scan" />
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-500 uppercase">Urgency Score</div>
            <div className="text-2xl font-bold text-amber-500">{output ? '94/100' : '--'}</div>
          </div>
          <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-500 uppercase">Jargon Density</div>
            <div className="text-2xl font-bold text-green-500">{output ? 'Low' : '--'}</div>
          </div>
          <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-500 uppercase">Action Clarity</div>
            <div className="text-2xl font-bold text-amber-500">{output ? 'High' : '--'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- View 3: Visual Assets --- */
function VisualsView() {
  return (
    <div>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Cognitive Visual Library</h2>
          <p className="text-slate-400 max-w-2xl">
            Stop using bullet points. Use these CSS/React animation concepts in your slide decks to visually represent the "Swarm" movement. 
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded hover:border-amber-500 text-sm transition-colors">
          <Download className="w-4 h-4" /> Download Keynote/PPT Assets
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Asset 1: Chaos to Order */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="font-bold text-white">Asset 01: The Alignment</h3>
            <span className="text-xs bg-slate-800 px-2 py-1 rounded text-amber-500">Use for: Strategy Shifts</span>
          </div>
          <div className="h-64 bg-slate-950 rounded-xl border border-slate-800 mb-6 relative overflow-hidden flex items-center justify-center group">
            {/* This is a conceptual CSS animation representation */}
            <div className="relative w-full max-w-xs h-32">
                {/* Chaos dots */}
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`absolute w-3 h-3 bg-slate-600 rounded-full transition-all duration-1000 ease-in-out group-hover:bg-amber-500 group-hover:top-1/2 group-hover:left-${i*8} group-hover:scale-x-[3] group-hover:rounded-sm`}
                       style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                ))}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500">
                    <ArrowRight className="w-32 h-32 text-amber-500/20" />
                </div>
            </div>
            <div className="absolute bottom-3 text-xs text-slate-600 uppercase tracking-widest">Hover to preview animation</div>
          </div>
          <p className="text-sm text-slate-400">
            Visually demonstrates scattered individual contributor efforts converging into a single swarm vector.
          </p>
        </div>

        {/* Asset 2: The Open Loop */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="mb-4 flex justify-between items-center">
             <h3 className="font-bold text-white">Asset 02: The Tension Loop</h3>
             <span className="text-xs bg-slate-800 px-2 py-1 rounded text-amber-500">Use for: Problem Intro</span>
          </div>
          <div className="h-64 bg-slate-950 rounded-xl border border-slate-800 mb-6 relative overflow-hidden flex items-center justify-center group">
            <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#334155" strokeWidth="8" fill="none" />
                    <circle 
                      cx="50" cy="50" r="40" 
                      stroke="#f59e0b" 
                      strokeWidth="8" 
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="60" // Intentionally leaving a gap (open loop)
                      strokeLinecap="round"
                      className="animate-[spin_4s_linear_infinite]"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-amber-500 animate-pulse">
                    ?
                </div>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            A continuously rotating, never-closing circle. Creates subconscious tension that demands resolution (your solution).
          </p>
        </div>
      </div>
    </div>
  );
}

/* --- View 4: Action Triggers --- */
function TriggersView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-2">Kinetic Action Triggers (KATs)</h2>
        <p className="text-slate-400 max-w-2xl">
          Copy-paste these closing patterns. They are engineered to bypass passive listening and trigger physical movement.
        </p>
      </div>

      <div className="space-y-4">
        <TriggerCard 
          title="The Binary Choice"
          pattern="We can either continue to [PAINFUL STATUS QUO], or we can [IMMEDIATE FIRST STEP] today. Which future are we building?"
          example="We can either continue to patch this legacy system every weekend, or we can allocate two engineers to the migration pilot today. Which future are we building?"
        />
        <TriggerCard 
          title="The Physical Imperative"
          pattern="If you agree that [CORE THESIS], then I need you to [PHYSICAL ACTION] before you leave this room."
          example="If you agree that security cannot wait for Q3, then I need you to open your laptop right now and approve the budget request I just sent."
        />
        <TriggerCard 
          title="The 24-Hour Challenge"
          pattern="Don't tell me you support this. Show me. You have 24 hours to [SMALL, SPECIFIC ACTION]."
          example="Don't tell me you support the new API standard. Show me. You have 24 hours to migrate one single endpoint in your service as a proof of concept."
        />
      </div>
    </div>
  );
}

function TriggerCard({ title, pattern, example }: any) {
  return (
    <div className="bg-slate-900/50 border-l-4 border-amber-500 rounded-r-xl p-6 hover:bg-slate-900 transition-colors">
      <h3 className="font-bold text-white mb-4 flex items-center gap-2">
        <Zap className="w-4 h-4 text-amber-500" />
        {title}
      </h3>
      <div className="space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">The Pattern</div>
          <div className="font-mono text-sm text-amber-300 bg-amber-500/5 p-3 rounded border border-amber-500/20">
            {pattern}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">Technical Example</div>
          <div className="text-sm text-slate-300 italic p-3">
            "{example}"
          </div>
        </div>
      </div>
    </div>
  );
}
