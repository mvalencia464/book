'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import {
  Zap,
  Users,
  Brain,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Play,
  Download,
  ChevronDown,
  MessageSquare,
  Target
} from 'lucide-react';

export default function SwarmEffectLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Head>
        <title>The Swarm Effect | Narrative Engineering for Technical Leaders</title>
        <meta name="description" content="Don't just get applause. Get swarmed. The premier storytelling framework for technical leaders who need immediate action." />
      </Head>

      {/* Top Notification Bar - Urgency Driver */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 text-center text-sm font-bold tracking-wide">
        Now booking Q3 2025 Executive Intensives. Limited slots remaining.
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            <span>SWARM EFFECT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#methodology" className="hover:text-amber-500 transition-colors">The Methodology</a>
            <a href="#proof" className="hover:text-amber-500 transition-colors">Proof</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <button onClick={scrollToBooking} className="px-5 py-2 bg-amber-500 text-slate-950 font-bold rounded-sm hover:bg-amber-400 transition-colors">
              Book Strategy Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section: Redefining Success */}
      <header className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-8">
            <span className="animate-pulse">●</span> For CTOs, VPs of Engineering, & Technical Founders
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1] mb-8 text-white">
            DON'T JUST GET APPLAUSE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
              GET SWARMED.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Polite clapping doesn't fund projects. The <strong className="text-white">Swarm Effect</strong> is the moment you step off stage and are immediately surrounded by stakeholders demanding to take action.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToBooking} className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-slate-900 text-lg font-bold rounded-sm hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group">
              Engineer Your Swarm
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#methodology" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-sm border-2 border-slate-800 hover:border-slate-600 transition-all flex items-center justify-center gap-2">
              See How It Works
            </a>
          </div>
        </div>
      </header>

      {/* The Problem: The "Polite Failure" */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              The <span className="text-red-500">"Polite Failure"</span> Mode
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              You delivered the data perfectly. The architecture is sound. The logic is undeniable. You finish your presentation, and you get polite applause. 
            </p>
            <p className="text-lg text-slate-300 font-medium mb-8 leading-relaxed">
              Then everyone goes to lunch, and nothing changes. Your initiative stalls. That is a technical communication failure.
            </p>
            <div className="bg-slate-950 p-6 rounded-lg border border-red-900/30">
              <h3 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Signs your talk failed (even if they clapped):
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">→ You have to send follow-up emails begging for budget approval.</li>
                <li className="flex items-start gap-2">→ Engineers are confused about the "why" behind the "what".</li>
                <li className="flex items-start gap-2">→ Non-technical stakeholders nodded but didn't commit resources.</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
            {/* Abstract visual of isolated speaker vs swarmed speaker */}
            <div className="text-center space-y-2 opacity-50">
              <Users className="w-32 h-32 mx-auto text-slate-800" />
              <p className="text-sm uppercase tracking-widest">Audience Disconnected</p>
            </div>
            {/* Overlay demonstrating the contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* The Solution: Methodology */}
      <section id="methodology" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-amber-500 font-bold tracking-widest uppercase mb-4">The Mechanism</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Engineered Narrative Architecture
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We don't teach "acting." We teach a cognitive framework that engineers can execute reliably to trigger specific behavioral responses in an audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              {
                icon: Brain,
                title: "1. Cognitive Hooks",
                desc: "Replace dry agendas with high-stakes questions that open 'loops' in the listener's mind that they MUST close."
              },
              {
                icon: Target,
                title: "2. The Data Bridge",
                desc: "Stop data-dumping. Learn to use technical specs only as the supporting evidence for an emotional narrative arc."
              },
              {
                icon: Zap,
                title: "3. The Action Trigger",
                desc: "The specific closing sequence that compels the audience to physically move toward you when you finish."
              }
            ].map((step, i) => (
              <div key={i} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:bg-slate-900 hover:border-amber-500/50 transition-all group">
                <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-8 border border-slate-800 group-hover:border-amber-500 transition-colors">
                  <step.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - The "Swarm" in Action */}
      <section id="proof" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-red-600 text-white font-bold text-sm rounded-sm mb-6">
                AS SEEN ON TEDx
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The talk that proved the theory.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                When I debuted "The Swarm Effect" on the TEDx stage, I didn't just talk about it. I engineered the talk itself to trigger it. The result? 2.1 Million views and a backstage area so crowded security had to intervene.
              </p>
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 h-6 w-6" />
                  <span>2.1M+ Views</span>
                </div>
                <div className="h-6 w-px bg-slate-300" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 h-6 w-6" />
                  <span>Top 1% Most Shared</span>
                </div>
              </div>
            </div>
            <div className="relative group">
               <div className="absolute -inset-4 bg-slate-200 rounded-xl -rotate-2 group-hover:rotate-0 transition-all" />
               <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
                 <iframe
                   width="100%"
                   height="100%"
                   src="https://www.youtube.com/embed/ydYG_1l0IjE"
                   title="Arthur Zard TEDx Talk"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                   className="w-full h-full"
                 />
               </div>
            </div>
          </div>

          {/* Metrics proof */}
          <div className="mt-24 p-8 md:p-12 bg-slate-100 rounded-3xl">
            <h3 className="text-center font-bold text-2xl mb-12">Client Results: The "Swarm" Differential</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-black text-amber-600 mb-2">+300%</div>
                <div className="font-medium text-slate-600">Post-talk lead capture</div>
              </div>
              <div>
                <div className="text-5xl font-black text-amber-600 mb-2">18x</div>
                <div className="font-medium text-slate-600">Faster budget approval</div>
              </div>
              <div>
                <div className="text-5xl font-black text-amber-600 mb-2">94%</div>
                <div className="font-medium text-slate-600">Stakeholder alignment score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Marketing Material */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-slate-950">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Download className="w-6 h-6" />
              Steal the Framework
            </h3>
            <p className="font-medium opacity-80">
              Not ready to book? Download the 4-step "Swarm Architecture" PDF tailored for technical presentations.
            </p>
          </div>
          <button className="px-8 py-4 bg-slate-950 text-white font-bold rounded-sm hover:scale-105 transition-transform shrink-0 whitespace-nowrap">
            Download Free Blueprint
          </button>
        </div>
      </section>

      {/* Services / Products */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Engagement Tiers</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We only work with technical leaders serious about mastering influence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">The Keynote</h3>
                <p className="text-amber-500 font-bold text-sm tracking-wider uppercase">Organization-Wide Impact</p>
              </div>
              <p className="text-slate-400 mb-8 flex-grow">
                I come to your engineering all-hands or industry conference and deconstruct the Swarm Effect live. Your team leaves inspired to stop being boring.
              </p>
              <ul className="space-y-4 mb-8 text-slate-300 text-sm font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> 45-60 Minute Signature Talk</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> Live "Swarm" Demonstration</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> Q&A with Leadership</li>
              </ul>
              <button className="w-full py-4 bg-slate-800 text-white font-bold rounded-sm hover:bg-slate-700 transition-colors">Inquire for Fees</button>
            </div>

            {/* Tier 2 - Featured */}
            <div className="bg-slate-900 border-2 border-amber-500 p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-[0_0_50px_-12px_rgba(245,158,11,0.3)]">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-amber-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                MOST POPULAR
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">The Reactor Workshop</h3>
                <p className="text-amber-500 font-bold text-sm tracking-wider uppercase">For Technical Teams (10-30 ppl)</p>
              </div>
              <p className="text-slate-400 mb-8 flex-grow">
                A 1-day intensive where your team brings *actual* upcoming presentations. We tear them down and rebuild them using Swarm Architecture. They leave ready to present.
              </p>
              <ul className="space-y-4 mb-8 text-slate-300 text-sm font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> Hands-on reconstruction</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> Video-recorded drills</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> Workbook & Templates</li>
              </ul>
              <button onClick={scrollToBooking} className="w-full py-4 bg-amber-500 text-slate-950 font-bold rounded-sm hover:bg-amber-400 transition-colors">Check Availability</button>
            </div>

            {/* Tier 3 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Executive Intensive</h3>
                <p className="text-amber-500 font-bold text-sm tracking-wider uppercase">1-on-1 High Stakes Coaching</p>
              </div>
              <p className="text-slate-400 mb-8 flex-grow">
                For the CTO preparing for the board meeting, IPO roadshow, or major conference keynote. Total immersion in your narrative until it's bulletproof.
              </p>
              <ul className="space-y-4 mb-8 text-slate-300 text-sm font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> Private, confidential sessions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> Full slide deck redesign</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500 w-5 h-5" /> On-site rehearsal support</li>
              </ul>
              <button className="w-full py-4 bg-slate-800 text-white font-bold rounded-sm hover:bg-slate-700 transition-colors">Apply for Slot</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Objection Handling */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "I'm an engineer, not an actor. Will this feel inauthentic?",
                a: "Absolutely not. The Swarm Effect is built on engineering principles—structure, logic, and cause-and-effect. We don't ask you to be charismatic; we ask you to be structurally sound in your narrative. It's designed specifically for analytical minds."
              },
              {
                q: "Shouldn't the data just speak for itself?",
                a: "In an ideal world, yes. In the real world, data needs a translator. If data spoke for itself, you wouldn't need meetings. You are the API between the data and human decision-making. We just optimize that API."
              },
              {
                q: "How quickly can we see results?",
                a: "Immediately. In our workshops, participants re-engineer upcoming presentations. The very next time they present that material, they typically see a measurable increase in engagement and follow-through."
              }
            ].map((item, i) => (
              <div key={i} className="border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-900 transition-colors"
                >
                  <span className="font-bold text-slate-200">{item.q}</span>
                  <ChevronDown className={`text-amber-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 text-slate-400 border-t border-slate-800 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Booking CTA */}
      <section id="booking" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-amber-950/20" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Ready to be <br/> swarmed?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Stop leaving opportunity on the table every time you speak. Let's engineer your next defining moment.
          </p>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl max-w-2xl mx-auto text-left">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="text-amber-500" />
              Request Strategy Session
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Work Email</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Biggest Speaking Challenge</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors">
                  <option>Getting budget/buy-in from non-technical leaders</option>
                  <option>Motivating engineering teams to action</option>
                  <option>High-stakes external keynote/conference</option>
                  <option>Board level presentations</option>
                </select>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xl font-bold rounded-sm transition-all mt-4">
                Submit Application
              </button>
              <p className="text-xs text-slate-500 text-center">
                Serious inquiries only. We typically reply within 24 hours to qualified applicants.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-600 text-center text-sm border-t border-slate-900">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <Zap className="w-5 h-5" />
          <span className="font-bold tracking-tighter">SWARM EFFECT</span>
        </div>
        <p>© {new Date().getFullYear()} Narrative Engineering Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
