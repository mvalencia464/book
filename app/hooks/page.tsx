'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { Zap, CheckCircle2, Mail, User } from 'lucide-react';

export default function SocialMediaHooksPage() {
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
        <title>99 Social Media Hooks | Free Guide</title>
        <meta name="description" content="Get 99 fill-in-the-blank hook templates from Alex and The Copy Posse to boost your clicks, engagement, and conversions." />
        <meta name="keywords" content="social media hooks, copywriting templates, marketing guide, Copy Posse" />
      </Head>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT COLUMN - Opt-in Form */}
        <div className="bg-white text-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-500" fill="currentColor" />
              <span className="text-xl font-extrabold tracking-tighter text-slate-900">COPY POSSE</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              99 Social Media Hooks That Capture Attention
            </h1>

            <div className="mb-8">
              <p className="text-xl md:text-2xl font-bold text-slate-900 uppercase mb-4">
                GET MORE CLICKS, ENGAGEMENT, & CONVERSIONS
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Use these <strong>fill-in-the-blank hook templates</strong> to write attention-grabbing hooks for your captions, Reel cover photos, headlines, subject lines, ads, YouTube video titles, and sales page openers.
              </p>
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
                  {isSubmitting ? 'SUBMITTING...' : 'GET INSTANT ACCESS'}
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Success!</h3>
                </div>
                <p className="text-green-800">
                  Check your email for instant access to the 99 Social Media Hooks guide!
                </p>
              </div>
            )}

            {/* Privacy Disclaimer */}
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              When you sign up for this free guide, I'll also send you weekly email updates to my latest YouTube episodes, VIP content and the occasional product recommendation. I'll always respect your <strong>privacy and data</strong>.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Offer Details & About */}
        <div className="bg-slate-950 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Offer Details Section - Two Column Layout */}
            <section>
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-6">
                WHAT YOU'LL LEARN IN THIS FREE SWIPE FILE:
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Guide Image Placeholder */}
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 aspect-square flex items-center justify-center border-4 border-slate-800">
                  <div className="text-center">
                    <div className="text-6xl font-extrabold text-slate-900 mb-2">99</div>
                    <div className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                      HOT HOOK<br />TEMPLATES
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Discover the <strong className="text-white">#1 goal your marketing must accomplish</strong>.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Learn when and where a hook is <strong className="text-white">absolutely critical</strong>.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Get <strong className="text-white">99 Posse-approved hook ideas & templates</strong>.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* About Alex Section */}
            <section className="border-t border-slate-800 pt-12">
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-8">
                ABOUT ALEX & THE COPY POSSE
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start mb-8">
                {/* Text Content - Left Side */}
                <div className="flex-1">
                  <p className="text-base text-slate-300 leading-relaxed">
                    Alex is the founder of the <strong className="text-white">Copy Posse</strong>, where she is on a mission to de-douchify the Internet, redefine modern marketing & build an empathy empire. Through her online programs and communities, Alex has helped over <strong className="text-white text-lg">500,000 marketers & business owners</strong> ignite their income with her fun and empathetic approach to branding, marketing and copywriting.
                  </p>
                </div>

                {/* Photo - Right Side */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-3">
                    <div className="bg-slate-900 rounded-xl w-40 h-40 flex items-center justify-center">
                      <User className="w-20 h-20 text-amber-500" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured In Logos */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">As Featured In:</p>
                <div className="grid grid-cols-3 gap-3">
                  {['FOUNDR', 'ADWORLD', 'DIGITALMARKETER', 'FORBES', 'TEACHABLE', 'MINDVALLEY'].map((brand) => (
                    <div
                      key={brand}
                      className="bg-slate-900/50 border border-slate-800 rounded-lg px-3 py-4 flex items-center justify-center"
                    >
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">{brand}</span>
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

