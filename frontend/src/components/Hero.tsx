'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { heroTrustPoints } from '@/lib/data'
import { HeroDashboard } from './HeroDashboard'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
      {/* layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #6366f1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* soft orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-sky-100/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

        {/* ── Left column ── */}
        <div>
          {/* badge */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100/80 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              AI-powered entity lifecycle management
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            {...fadeUp(0.08)}
            className="text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6 text-balance"
          >
            One place to launch, manage, and maintain your{' '}
            <span className="text-indigo-600">legal entities</span>
          </motion.h1>

          {/* subheadline */}
          <motion.p
            {...fadeUp(0.16)}
            className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
          >
            Legal Flow One turns fragmented governance work into one structured, automated platform — so you stay in control across every entity and jurisdiction.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.24)}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-indigo-200/60 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
            >
              Talk to us
              <ChevronRight size={15} className="text-slate-400" />
            </a>
          </motion.div>

          {/* trust strip */}
          <motion.div
            {...fadeUp(0.32)}
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {heroTrustPoints.map(point => (
              <span
                key={point}
                className="flex items-center gap-1.5 text-sm text-slate-500"
              >
                <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                {point}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right column: dashboard mockup ── */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0,  scale: 1     }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="hidden lg:block"
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  )
}
