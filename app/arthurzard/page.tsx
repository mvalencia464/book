'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Play,
  Mic2,
  Users,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Quote,
  Menu,
  X,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Head>
        <title>Arthur Zard | TEDx Speaker - Storytelling for Technical Leaders</title>
        <meta name="description" content="Harnessing The Swarm Effect to turn complex technical data into compelling narratives." />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter flex items-center gap-2">
            <BrainCircuit className="text-amber-500 w-8 h-8" />
            <span>ARTHUR ZARD</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
            <button onClick={() => scrollToSection('concept')} className="hover:text-amber-400 transition-colors">The Swarm Effect</button>
            <button onClick={() => scrollToSection('talk')} className="hover:text-amber-400 transition-colors">TEDx Talk</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Workshops</button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-amber-500 text-slate-950 font-bold rounded-sm hover:bg-amber-400 transition-all">
              Book Now
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-slate-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 border-b border-slate-800 py-8 px-6 flex flex-col gap-6 text-center backdrop-blur-md">
             <button onClick={() => scrollToSection('concept')} className="text-xl font-medium hover:text-amber-400">The Swarm Effect</button>
            <button onClick={() => scrollToSection('talk')} className="text-xl font-medium hover:text-amber-400">TEDx Talk</button>
            <button onClick={() => scrollToSection('services')} className="text-xl font-medium hover:text-amber-400">Workshops</button>
            <button onClick={() => scrollToSection('contact')} className="text-xl font-bold text-amber-500">Book Now</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Available for 2025 Keynotes
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Transcend the Code. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 block">
                Tell the Story.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Helping technical leaders harness <span className="text-slate-200 font-semibold">"The Swarm Effect"</span> to turn complex data into compelling narratives that move audiences to action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-amber-500 text-slate-950 text-lg font-bold rounded-sm hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group">
                Inquire for Speaking
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('talk')} className="px-8 py-4 bg-transparent border-2 border-slate-700 text-slate-200 text-lg font-bold rounded-sm hover:border-slate-500 transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch TEDx Talk
              </button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>50k+ Impacted</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic2 className="w-5 h-5" />
                <span>100+ Keynotes</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[500px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-slate-900/0 rounded-2xl transform rotate-3 border border-slate-800/50 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-500">
               <img
                 src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68fadd7e9b2f6327010fdd3a.webp"
                 alt="Arthur Zard speaking on stage"
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Logos */}
      <section className="py-12 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-8 font-medium">Trusted by technical teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
             {['MICROSOFT', 'DATADOG', 'NVIDIA', 'TEDx', 'MIT'].map((brand) => (
               <div key={brand} className="text-xl md:text-2xl font-bold tracking-tighter text-slate-300">{brand}</div>
             ))}
          </div>
        </div>
      </section>

      {/* The Swarm Effect Concept */}
      <section id="concept" className="py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The <span className="text-amber-500">Swarm Effect</span> Methodology</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6" />
            <p className="text-xl text-slate-400 leading-relaxed">
              Why do brilliantly engineered products often fail to get buy-in? Because data doesn't make decisions—people do.
            </p>
          </div>

          <div className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <BrainCircuit className="w-16 h-16 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">From Isolated Data to Collective Intelligence</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Inspired by Arthur Zards' principles of swarm intelligence, my methodology teaches technical leaders that raw data points are like isolated bees—directionless on their own.
                </p>
                <p className="text-slate-300 font-medium leading-relaxed">
                  To move the "hive" (your stakeholders, customers, or teams), you must release <span className="text-amber-400">Signal Stories</span>—simple, relatable narratives that act like pheromones, aligning the group instantly toward a complex, unified goal.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-800 p-2 rounded-full">
                    <X className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">The Old Way (Noise)</h4>
                    <p className="text-sm text-slate-400">Dumping spreadsheets, complex jargon, features without context. Result: Confusion & inaction.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">The Swarm Way (Signal)</h4>
                    <p className="text-sm text-slate-400">Architecting a core narrative that simplifies complexity and triggers collective movement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEDx Showcase */}
      <section id="talk" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-2 bg-red-600 text-white font-bold tracking-wider text-sm rounded-sm">
                TEDx SIGNATURE TALK
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                The Story That Started <br/> The Movement
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                "Re-engineering Human Connection." In this talk, viewed by over 2 million people, I break down exactly how technical minds can use vulnerabilities as their greatest communication asset.
              </p>
              <div className="flex gap-8 py-4">
                <div>
                  <div className="text-3xl font-bold text-slate-100">2.1M+</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wider">Views</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-100">45k+</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wider">Shares</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              {/* TEDx Video Embed */}
              <div className="aspect-video w-full bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
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
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Work with Arthur</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Bring the principles of 'The Swarm Effect' to your organization through high-impact engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-0 group-hover:bg-amber-500/10 transition-colors" />
              <Mic2 className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">The Keynote</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                A 45-60 minute high-energy talk perfect for technical conferences, all-hands meetings, and leadership summits. Inspires engineers to embrace storytelling.
              </p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Customized to your industry</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Actionable frameworks</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Highly interactive elements</li>
              </ul>
              <button className="w-full py-3 bg-slate-800 text-slate-200 font-bold rounded-sm hover:bg-slate-700 transition-colors">
                View Topics
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <Users className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Corporate Workshops</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Half-day or full-day deep dives. Your team will bring their actual technical presentations and leave with rewritten, story-driven narratives ready for stakeholders.
              </p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Hands-on "Swarm" exercises</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Limited to 30 participants</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Includes workbook materials</li>
              </ul>
              <button className="w-full py-3 bg-amber-500 text-slate-950 font-bold rounded-sm hover:bg-amber-400 transition-colors">
                Request Syllabus
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-0 group-hover:bg-amber-500/10 transition-colors" />
              <BrainCircuit className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Executive Coaching</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                1-on-1 intensive coaching for CTOs, VPs of Engineering, and Technical Founders preparing for high-stakes presentations, board meetings, or IPO roadshows.
              </p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Private video reviews</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Slide deck reconstruction</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Delivery & presence training</li>
              </ul>
              <button className="w-full py-3 bg-slate-800 text-slate-200 font-bold rounded-sm hover:bg-slate-700 transition-colors">
                Apply for Coaching
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-12">
                <Quote className="w-12 h-12 text-amber-500 mb-6 opacity-50" />
                <h2 className="text-3xl font-bold">What Leaders Say</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 relative">
                    <p className="text-lg text-slate-300 italic leading-relaxed mb-6">
                        "Arthur completely transformed how our Data Science team presents to the board. We went from glazing eyes to standing ovations. The 'Swarm Effect' metaphor just clicked for our engineers."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-800 rounded-full border-2 border-amber-500/20" />
                        <div>
                            <div className="font-bold text-slate-200">Sarah Chen</div>
                            <div className="text-sm text-amber-500">VP of Engineering, FinTech Co.</div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 relative">
                    <p className="text-lg text-slate-300 italic leading-relaxed mb-6">
                        "The most valuable workshop we've ran in three years. Arthur doesn't just teach storytelling; he teaches how to architect information for maximum cognitive impact."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-800 rounded-full border-2 border-amber-500/20" />
                        <div>
                            <div className="font-bold text-slate-200">Marcus Johnson</div>
                            <div className="text-sm text-amber-500">Director of Product, CloudScale</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="max-w-3xl mx-auto px-6 bg-slate-900/80 p-8 md:p-12 rounded-3xl border border-slate-800 backdrop-blur-lg shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Start the Conversation</h2>
            <p className="text-slate-400">
              Currently accepting booking inquiries for Q3 & Q4 2025.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Jane Doe"
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="jane@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Engagement Type</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                <option>Keynote Speaking</option>
                <option>Corporate Workshop</option>
                <option>Executive Coaching</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Tell me about your event/team</label>
              <textarea 
                rows={4}
                placeholder="We have an annual engineering summit..."
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-lg font-bold rounded-md hover:opacity-90 transition-opacity">
              Submit Inquiry
            </button>
            <p className="text-center text-xs text-slate-500 pt-2">
              Typically responds within 48 hours.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="font-bold text-xl tracking-tighter flex items-center justify-center md:justify-start gap-2 mb-4">
              <BrainCircuit className="text-amber-500 w-6 h-6" />
              <span>ARTHUR ZARD</span>
            </div>
            <p className="text-slate-500 max-w-sm mx-auto md:mx-0">
              Empowering technical leaders to find their voice and drive collective action through the power of narrative intelligence.
            </p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
               <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-amber-500 transition-colors">
                 <Linkedin size={20} />
               </a>
               <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-amber-500 transition-colors">
                 <Twitter size={20} />
               </a>
               <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-amber-500 transition-colors">
                 <Mail size={20} />
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-200 mb-6">Navigation</h4>
            <ul className="space-y-3 text-slate-500">
              <li><button onClick={() => scrollToSection('concept')} className="hover:text-amber-500 transition-colors">Methodology</button></li>
              <li><button onClick={() => scrollToSection('talk')} className="hover:text-amber-500 transition-colors">TEDx Talk</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-500 transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-6">Resources</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Speaker Rider</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">"Swarm Effect" PDF</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Arthur Zard International. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
