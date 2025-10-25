'use client';

import React, { useState, useRef } from 'react';
import {
  CheckCircle2,
  BrainCircuit,
  Target,
  Zap,
  ChevronRight,
  Lock,
  TrendingUp,
  Users,
  X,
  ArrowRight,
  PauseOctagon
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Utility for cleaner tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function LandingPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30">
      <Header onOpenQuiz={() => setIsQuizOpen(true)} />
      <main>
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
        <Agitation />
        <SolutionMechanismIntro />
        <AnimatedMechanism />
        <SocialProof />
        <FinalCTA onOpenQuiz={() => setIsQuizOpen(true)} />
      </main>
      <Footer />
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}

// --- Components ---

function Header({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold tracking-tighter text-white">
          ARTHUR <span className="text-amber-500">ZARD</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#mechanism" className="hover:text-amber-400 transition-colors">The Mechanism</a>
          <a href="#results" className="hover:text-amber-400 transition-colors">Results</a>
          <button
            onClick={onOpenQuiz}
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-all"
          >
            Apply for Cohort
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 mb-8">
          <Lock className="h-3.5 w-3.5" />
          Private Executive Cohort • Applications Closing Friday
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          <span className="text-slate-400">Already</span> the top performer, <br className="hidden md:block" />
          <span className="text-amber-500">still</span> waiting for someone <br className="hidden md:block" />
          to find you out?
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
          Stop letting Imposter Syndrome limit your leadership ceiling.
          Master the <strong className="text-white">"Swarm Effect"</strong>—Arthur’s proprietary
          system used by 7-figure earners to permanently eliminate the gap between competence and confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuiz}
            className="w-full sm:w-auto group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-amber-500 px-8 font-bold text-slate-950 transition-all hover:bg-amber-400"
          >
            <span className="mr-2">Secure Your Spot</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-sm text-slate-400 flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            Only 12 seats per cohort
          </p>
        </div>
      </div>
    </section>
  );
}

function Agitation() {
  return (
    <section className="bg-slate-900 py-20 px-6 border-y border-slate-800">
      <div className="mx-auto max-w-4xl">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              You've mastered the industry, but you <span className="text-red-400">still dread</span> the boardroom.
            </h2>
            <p className="text-lg text-slate-300">
              You are objectively competent. Yet, every time the spotlight hits, your internal system crashes.
            </p>
            <p className="text-slate-400 leading-relaxed">
              You are the high-performing executive who gets passed over for the C-Suite simply because your brilliance dies silently in the meeting room.
              It's not incompetent; it's <strong className="text-slate-200">self-silencing</strong>.
            </p>
            <div className="p-4 border-l-2 border-red-500 bg-red-500/5">
              <p className="text-red-200 font-medium">
                "How many promotions will anxiety cost you before you solve the root problem?"
              </p>
            </div>
          </div>
          <div className="md:col-span-2 bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-400" />
              The Cost of Inaction
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <span>Lost influence during critical stakeholder meetings.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <span>Passed over for high-visibility speaking roles (TedX, Keynotes).</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <span>Millions in potential career earnings left on the table.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionMechanismIntro() {
  return (
    <section id="mechanism" className="pt-24 pb-12 px-6">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-4">The Unique Mechanism</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Why Generic Coaching Fails.
        </h3>
        <p className="text-lg text-slate-300 leading-relaxed">
          Traditional methods treat symptoms—they tell you to "just breathe deeply" or "practice more."
          These are temporary band-aids that fail under actual pressure.
        </p>
        <p className="mt-4 text-lg text-white font-medium">
          Arthur’s program attacks the root cause: the subconscious wiring that creates fear.
        </p>
      </div>

      <div className="mx-auto max-w-5xl mb-24">
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20">
          <div className="absolute top-0 right-0 p-4">
            <BrainCircuit className="h-16 w-16 text-blue-500/20" />
          </div>
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Introducing: The 3-Phase Neuro-Linguistic Repatterning System™
            </h4>
            <p className="text-slate-300 max-w-3xl text-lg">
              The only system built specifically for high-achievers who require a surgical, permanent solution to performance anxiety.
              We don't teach you *how* to speak. We recode *why* you're afraid to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Animated Mechanism Section ---

function AnimatedMechanism() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 1,
      title: "Diagnostic Disruption",
      icon: Target,
      description: "We don't guess. We use forensic-level analysis to identify the exact neurological 'glitch' causing your anxiety. This isn't about 'lack of confidence'—it's a specific, identifiable script running in your subconscious.",
      outcome: "Permanent separation from the root cause of your fear."
    },
    {
      id: 2,
      title: "Predictive Performance Mapping",
      icon: BrainCircuit,
      description: "Once the glitch is removed, we install a new operating system. We map out exactly how you will feel, think, and react under high pressure before you ever step into the room.",
      outcome: "Unshakeable stability in high-stakes environments."
    },
    {
      id: 3,
      title: "Influence Automation (The Swarm Effect)",
      icon: Zap,
      description: "The final phase is offense. We automate your new high-performance script so authority becomes your default setting. This creates the 'Swarm Effect'—where your sheer presence compels others to align with you.",
      outcome: "Hearers eagerly swarming you to take action."
    }
  ];

  return (
    <section className="pb-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Animation Visualizer */}
          <div className="hidden md:block sticky top-32 h-[500px] bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden">
             <MechanismVisualizer activePhase={activePhase} />
          </div>

          {/* Right Column: Scrolling Text Content */}
          <div className="space-y-32 md:py-24">
            {phases.map((phase, index) => (
              <PhaseTextBlock 
                key={phase.id} 
                phase={phase} 
                index={index + 1} 
                onInView={() => setActivePhase(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseTextBlock({ phase, index, onInView }: { phase: any, index: number, onInView: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  React.useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isInView ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 border-l-2 border-slate-800"
    >
      <span className={cn(
        "absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors duration-500",
        isInView ? "border-amber-500 bg-amber-500 text-slate-950" : "border-slate-800 bg-slate-950 text-slate-500"
      )}>
        {index}
      </span>
      <div className="pt-1">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          {phase.title}
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          {phase.description}
        </p>
        <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-800/50 inline-block">
          <span className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Outcome</span>
          <p className="text-white font-medium">
            {phase.outcome}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function MechanismVisualizer({ activePhase }: { activePhase: number }) {
  // 0 = none, 1 = chaos clearing, 2 = structure building, 3 = swarm incoming

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-950">
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20" />

      <svg className="w-full h-full max-w-[400px] max-h-[400px]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* PHASE 1: CHAOS (Red jagged lines) - Fades OUT when phase > 1 */}
        <motion.g animate={{ opacity: activePhase === 1 ? 1 : 0.1, scale: activePhase === 1 ? 1 : 0.9 }} transition={{ duration: 1 }}>
           <motion.path 
              d="M50,200 Q100,150 150,200 T250,200 T350,200"
              stroke="#ef4444" strokeWidth="2" fill="none" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: activePhase === 1 ? [0, 1, 1, 0] : 0,
                opacity: activePhase === 1 ? [0, 1, 1, 0] : 0,
                pathOffset: activePhase === 1 ? [0, 0, 1, 1] : 0
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           />
           {/* Static chaos representing the 'before' state */}
           <motion.path 
              d="M180,180 L220,220 M180,220 L220,180 M150,200 L250,200 M200,150 L200,250"
              stroke="#ef4444" strokeWidth="3" strokeLinecap="round"
              animate={{ 
                 rotate: activePhase === 1 ? [0, 360] : 0,
                 scale: activePhase === 1 ? [1, 1.2, 0] : 0,
                 opacity: activePhase === 1 ? [1, 1, 0] : 0 
              }}
              transition={{ duration: 2, times: [0, 0.8, 1] }}
           />
        </motion.g>

        {/* CORE SELF (Amber Circle) - Always present, gets stronger */}
        <motion.circle 
          cx="200" cy="200" r="30" 
          fill="#0f172a" 
          stroke="#f59e0b"
          strokeWidth="4"
          animate={{ 
            r: activePhase >= 2 ? 40 : 30,
            strokeOpacity: activePhase >= 1 ? 1 : 0.3,
            fillOpacity: 1
          }}
          transition={{ duration: 0.8, type: "spring" }}
        />
        {/* Core Pulse */}
        <motion.circle 
          cx="200" cy="200" r="30" 
          stroke="#f59e0b"
          strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          animate={ activePhase >= 2 ? {
            scale: [1, 1.5],
            opacity: [0.5, 0]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* PHASE 2: STRUCTURE (Blue/Amber circuits) - Grows IN when phase >= 2 */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: activePhase >= 2 ? 1 : 0 }} transition={{ duration: 0.8 }}>
          {/* Top connection */}
          <motion.path d="M200,160 L200,100" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" 
            initial={{ pathLength: 0 }} animate={{ pathLength: activePhase >= 2 ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.circle cx="200" cy="100" r="8" fill="#3b82f6" initial={{ scale: 0 }} animate={{ scale: activePhase >= 2 ? 1 : 0 }} transition={{ delay: 0.9 }} />
          
          {/* Right connection */}
          <motion.path d="M240,200 L300,200" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" 
            initial={{ pathLength: 0 }} animate={{ pathLength: activePhase >= 2 ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          />
           <motion.circle cx="300" cy="200" r="8" fill="#3b82f6" initial={{ scale: 0 }} animate={{ scale: activePhase >= 2 ? 1 : 0 }} transition={{ delay: 1.1 }} />

          {/* Bottom connection */}
          <motion.path d="M200,240 L200,300" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" 
            initial={{ pathLength: 0 }} animate={{ pathLength: activePhase >= 2 ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          />
           <motion.circle cx="200" cy="300" r="8" fill="#3b82f6" initial={{ scale: 0 }} animate={{ scale: activePhase >= 2 ? 1 : 0 }} transition={{ delay: 1.3 }} />

          {/* Left connection */}
          <motion.path d="M160,200 L100,200" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" 
             initial={{ pathLength: 0 }} animate={{ pathLength: activePhase >= 2 ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          />
           <motion.circle cx="100" cy="200" r="8" fill="#3b82f6" initial={{ scale: 0 }} animate={{ scale: activePhase >= 2 ? 1 : 0 }} transition={{ delay: 1.5 }} />
        </motion.g>

        {/* PHASE 3: SWARM (White particles incoming) - Active only when phase === 3 */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: activePhase === 3 ? 1 : 0 }} transition={{ duration: 0.5 }}>
           {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
             <motion.circle 
               key={i}
               r="4"
               fill="#fff"
               initial={{ cx: 200 + Math.cos(angle * Math.PI / 180) * 180, cy: 200 + Math.sin(angle * Math.PI / 180) * 180, opacity: 0 }}
               animate={activePhase === 3 ? {
                 cx: 200 + Math.cos(angle * Math.PI / 180) * 60,
                 cy: 200 + Math.sin(angle * Math.PI / 180) * 60,
                 opacity: [0, 1, 0]
               } : {}}
               transition={{
                 duration: 2,
                 repeat: Infinity,
                 delay: i * 0.2,
                 ease: "easeInOut"
               }}
             />
           ))}
        </motion.g>

        {/* Phase Label placed inside the visualizer */}
        <text x="200" y="360" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold" letterSpacing="0.1em">
          {activePhase === 0 ? "SCROLL TO SEE MECHANISM" : 
           activePhase === 1 ? "PHASE I: DISRUPTION" : 
           activePhase === 2 ? "PHASE II: MAPPING" :
           "PHASE III: THE SWARM"}
        </text>
      </svg>
    </div>
  )
}

function SocialProof() {
  return (
    <section id="results" className="py-24 bg-slate-900 px-6 border-y border-slate-800 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
           <Users className="h-12 w-12 text-amber-500 mx-auto mb-6 opacity-50" />
           <h2 className="text-3xl font-bold text-white">
             Trusted by Fortune 500 Executives
           </h2>
        </div>
        
        <blockquote className="relative p-8 md:p-12 text-xl md:text-3xl font-medium leading-relaxed text-white">
          <span className="absolute top-0 left-0 text-6xl text-slate-700 font-serif">"</span>
          I went from paralyzing fear before every board meeting to leading the room with complete control—the Repatterning System™ delivered results where years of standard coaching failed. My promotion followed 90 days later.
          <span className="absolute bottom-0 right-0 text-6xl text-slate-700 font-serif leading-[0]">"</span>
        </blockquote>
        <div className="mt-8 flex flex-col items-center">
          {/* Placeholder for Headshot if needed, using initials for now */}
          <div className="h-16 w-16 rounded-full bg-slate-700 flex items-center justify-center text-xl font-bold text-slate-300 mb-4 border-2 border-amber-500">
            JD
          </div>
          <cite className="not-italic">
            <span className="block text-lg font-bold text-white">James D.</span>
            <span className="block text-slate-400">Executive Vice President, Fortune 500 Tech</span>
          </cite>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          This Is Not A General Training Program.
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          We only accept <span className="text-amber-500 font-bold">12 clients</span> per cohort to ensure bespoke attention.
          If you are ready to permanently fix your performance anxiety and master the Swarm Effect, apply now.
        </p>
        
        <div className="bg-slate-900/50 border border-amber-500/30 p-6 rounded-xl mb-10 inline-block">
          <p className="text-amber-400 font-medium flex items-center justify-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Current Cohort Applications Close This Friday at Midnight.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <button
            onClick={onOpenQuiz}
            className="w-full md:w-auto text-lg group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-amber-500 px-10 font-bold text-slate-950 transition-all hover:bg-amber-400 hover:scale-105"
          >
            SECURE YOUR SPOT NOW
          </button>
          
          <p className="text-slate-400 text-sm mt-4">or take the <button onClick={onOpenQuiz} className="underline hover:text-white">2-minute qualification quiz</button> to see if you're a fit.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-slate-900 text-center md:text-left">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-lg font-bold tracking-tighter text-white mb-2">
            ARTHUR <span className="text-amber-500">ZARD</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Swarm Effect Program. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
          <a href="#" className="hover:text-slate-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// --- Interactive Quiz Modal ---

function QuizModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  if (!isOpen) return null;

  const questions = [
    "Do you feel technically competent but experience anxiety when spotlighted by leadership?",
    "Have you ever passed up a high-visibility speaking opportunity due to this anxiety?",
    "Are you willing to invest significantly to permanently resolve this neurological block?"
  ];

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Move to results
    }
  };

  const isQualified = answers.filter(Boolean).length >= 2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/90 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950">
          <h3 className="text-lg font-bold text-white">
            {step < questions.length ? `Qualification Check (${step + 1}/${questions.length})` : "Results"}
          </h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {step < questions.length ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                {questions[step]}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleAnswer(false)}
                  className="py-4 px-6 rounded-xl border-2 border-slate-800 text-slate-300 font-bold hover:border-slate-600 hover:bg-slate-800 transition-all"
                >
                  No
                </button>
                <button
                  onClick={() => handleAnswer(true)}
                  className="py-4 px-6 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-all"
                >
                  Yes
                </button>
              </div>
            </motion.div>
          ) : (
            /* Results State */
            <div className="text-center">
              {isQualified ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">You Are A Fit.</h4>
                  <p className="text-slate-300 mb-8">
                    Your profile matches our successful executives. Due to high demand, we recommend securing your interview slot immediately.
                  </p>
                  <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2">
                    Proceed to Application <ArrowRight className="h-5 w-5" />
                  </button>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h4 className="text-xl font-bold text-white mb-4">Thank you for your interest.</h4>
                  <p className="text-slate-300 mb-8">
                    Based on your responses, the Swarm Effect Program might not be the right fit for your current needs. We recommend subscribing to Arthur's newsletter for free resources.
                  </p>
                  <button
                    onClick={onClose}
                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl"
                  >
                    Return to Homepage
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>
        
        {/* Progress Bar */}
        {step < questions.length && (
          <div className="h-1.5 w-full bg-slate-950">
            <motion.div
              className="h-full bg-amber-500"
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
