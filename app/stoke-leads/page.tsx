'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { CheckCircle2, Mail, User } from 'lucide-react';
import Image from 'next/image';

export default function StokeLeadsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Head>
        <title>Dominate Google Maps & AI Recommendations | Stoke Leads</title>
        <meta name="description" content="Get Found Instantly in Google Maps & ChatGPT — Grow Your Calls, Leads, and Sales" />
        <meta name="keywords" content="google maps ranking, local SEO, AI recommendations, ChatGPT business, Stoke Leads" />
      </Head>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT COLUMN - Opt-in Form */}
        <div className="bg-white text-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded"></div>
              <span className="text-xl font-extrabold tracking-tighter text-slate-900">STOKE LEADS</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-xl">
            <p className="text-sm text-slate-600 uppercase tracking-wider mb-4">
              FOR LOCAL BUSINESS OWNERS
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
              Get Found Instantly in Google Maps & ChatGPT — Grow Your Calls, Leads, and Sales
            </h1>

            <div className="mb-6 space-y-2 text-base text-slate-700 leading-relaxed">
              <p>Struggling to get noticed while competitors take all the calls?</p>
              <p>Most agencies charge $2,000–$4,000/month and make you wait.</p>
              <p><strong className="text-slate-900">Show up at the top of Google Maps and in AI recommendations like ChatGPT</strong>.</p>
              <p>Dominate your local area for under $10/day with proven strategies and real results.</p>
            </div>

            {/* Opt-in Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none text-slate-900 placeholder-slate-400 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none text-slate-900 placeholder-slate-400 text-lg"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg uppercase py-5 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'BOOK YOUR FREE AUDIT CALL'}
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Success!</h3>
                </div>
                <p className="text-green-800">
                  Check your email for your free Google Business Profile audit!
                </p>
              </div>
            )}

            {/* Privacy Disclaimer */}
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              When you sign up, you'll receive a free in-depth Google Business Profile audit and tips specific to your business. We'll also send occasional emails about local marketing strategies. We respect your privacy — unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Offer Details & About */}
        <div className="bg-slate-950 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Offer Details Section - One Third / Two Thirds Layout */}
            <section>
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-5">
                WHAT YOU'LL GET WITH THIS OFFER:
              </h2>

              <div className="flex gap-6 items-start">
                {/* Guide Image Placeholder - 1/3 width */}
                <div className="w-1/3 flex-shrink-0">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-8 flex items-center justify-center border-4 border-slate-800 h-[240px]">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-slate-900 mb-2">STOKE</div>
                      <div className="text-lg font-bold text-slate-900 uppercase tracking-tight leading-tight">
                        LEADS<br />DOMINATION
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bullet Points - 2/3 width */}
                <ul className="flex-1 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      How to rank in the <strong className="text-white">Google Maps top 3</strong> in your city — where 80% of all clicks go. This is the #1 way local customers find businesses like yours.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      How to get recommended by <strong className="text-white">AI tools like ChatGPT and Perplexity</strong> when customers ask for local services — the new frontier of local search.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Why most competitors are invisible online — and the <strong className="text-white">15 specific things</strong> that actually move the needle for local rankings.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Step-by-step audit and optimization of your Google Business Profile using our proven <strong className="text-white">16-point checklist</strong> — the same system used by our top-performing clients.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">51 verified business listings</strong> built for you across the web — boosting your credibility with Google and AI tools. Normally $500+, included free.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* About Mauricio Valencia Section */}
            <section className="border-t border-slate-800 pt-6">
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-4">
                ABOUT MAURICIO VALENCIA
              </h2>

              <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start mb-6">
                {/* Text Content - Left Side */}
                <div className="flex-1 text-right">
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    Mauricio has helped local businesses across the US dominate their markets with <strong className="text-white">#1 Google Maps rankings and AI recommendations</strong>. His proven system delivers real results fast.
                    <strong className="text-white"> Proven Results:</strong> A hot tub store in Salem showing up in the map pack. Another in Boise with improved tracking. An Anchorage business ranking <strong className="text-white">#1 in both Maps and AI</strong>. A private air charter in Bend hitting <strong className="text-white">#1 in the map pack</strong>. One client texted: <strong className="text-white">"$161K in sales this week"</strong> — all from this system.
                  </p>
                </div>

                {/* Photo - Right Side */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-2">
                    <div className="bg-slate-900 rounded-xl w-32 h-32 overflow-hidden">
                      <Image
                        src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68fd2b025bb5ad211dd145c4.webp"
                        alt="Stoke Leads dashboard and Google Map Pack rankings"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-4">
                <p className="text-sm italic text-slate-300 leading-relaxed mb-2">
                  "161k in sales this week — all after following the Stoke Leads system. We finally show up everywhere customers search."
                </p>
                <p className="text-xs text-slate-500">
                  - Local business client, March testimonial
                </p>
              </div>

              {/* Featured Businesses */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Featured Businesses:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {['Hot Tub Store (Salem/Boise)', 'Private Air Charter (Bend)', 'Deck Builder (Anchorage)'].map((business) => (
                    <div
                      key={business}
                      className="bg-slate-900/50 border border-slate-800 rounded-lg px-2 py-3 flex items-center justify-center"
                    >
                      <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wide text-center">{business}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

