'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { CheckCircle2, Mail, User } from 'lucide-react';

export default function ArthurPage() {
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
        <title>The 5 Biggest Myths of Executive Storytelling | Lab Z</title>
        <meta name="description" content="Turn your next technical presentation into a TED-worthy story that inspires action, wins buy-in, and gets remembered." />
        <meta name="keywords" content="executive storytelling, technical leadership, presentation skills, Lab Z" />
      </Head>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT COLUMN - Opt-in Form */}
        <div className="bg-white text-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded"></div>
              <span className="text-xl font-extrabold tracking-tighter text-slate-900">LAB Z</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-xl">
            <p className="text-sm text-slate-600 uppercase tracking-wider mb-4">
              FOR TECHNICAL LEADERS
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              The 5 Biggest Myths of Executive Storytelling
            </h1>

            <div className="mb-8 space-y-3 text-lg text-slate-700 leading-relaxed">
              <p>You walk into the boardroom.</p>
              <p>Your slides are perfect — your data airtight.</p>
              <p>You've even studied storytelling.</p>
              <p>But five minutes in, you can feel it: eyes glazing over.</p>
              <p>You're losing them.</p>
              <p>It's not your ideas — <strong className="text-slate-900">it's your story</strong>.</p>
              <p>Use this guide to turn your next technical presentation into a TED-worthy story that inspires action, wins buy-in, and gets remembered.</p>
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
                  Check your email for instant access to The 5 Biggest Myths of Executive Storytelling guide!
                </p>
              </div>
            )}

            {/* Privacy Disclaimer */}
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              When you sign up for this free guide, I'll also send you weekly email updates on executive storytelling, leadership communication, and occasional workshop announcements. I'll always respect your privacy.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Offer Details & About */}
        <div className="bg-slate-950 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Offer Details Section - Two Column Layout */}
            <section>
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-6">
                WHAT YOU'LL LEARN IN THIS FREE GUIDE:
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Guide Image Placeholder */}
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 aspect-square flex items-center justify-center border-4 border-slate-800">
                  <div className="text-center">
                    <div className="text-6xl font-extrabold text-slate-900 mb-2">5</div>
                    <div className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                      BIGGEST MYTHS<br />FREE GUIDE
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Discover the <strong className="text-white">#1 mistake</strong> technical leaders make when presenting data
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Learn the <strong className="text-white">5 myths</strong> that are killing your executive presence
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Get <strong className="text-white">proven frameworks</strong> used by Fortune 500 leaders
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* About Arthur Section */}
            <section className="border-t border-slate-800 pt-12">
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-8">
                ABOUT ARTHUR ZARDS
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start mb-8">
                {/* Text Content - Left Side */}
                <div className="flex-1">
                  <p className="text-base text-slate-300 leading-relaxed">
                    Arthur Zards is your expert guide. A recognized <strong className="text-white">TEDx speaker</strong> and executive storytelling coach. Arthur has trained over <strong className="text-white text-lg">4,000 technical leaders</strong> from global companies like AstraZeneca, Evanta, and Gartner C-Level Communities. His viral workshops reached <strong className="text-white text-lg">44 million+ viewers</strong>, proving the formula works for executives communicating complex ideas.
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

              {/* Testimonial */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 mb-8">
                <p className="text-base italic text-slate-300 leading-relaxed mb-3">
                  "His content was fantastic and my team learned lots of new ideas from his session—and that's a team that works with 4,000+ speakers each year!"
                </p>
                <p className="text-sm text-slate-500">
                  - Simeon Turner, CEO Evanta (a Gartner Company)
                </p>
              </div>

              {/* Featured In Logos */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">As Featured In:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['TEDx', 'GARTNER', 'EVANTA', 'ASTRAZENECA'].map((brand) => (
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

