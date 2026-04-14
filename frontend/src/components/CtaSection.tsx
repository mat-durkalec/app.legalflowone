'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export function CtaSection() {
  return (
    <section id="demo" className="py-24 px-6 bg-indigo-600 relative overflow-hidden">
      {/* decorative orbs */}
      <div className="absolute top-0 left-1/4  w-96 h-96 rounded-full bg-indigo-500/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-800/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-200 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 animate-pulse" />
            Ready when you are
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Bring your company governance
            <br />into one system
          </h2>

          <p className="text-lg text-indigo-200 leading-relaxed max-w-2xl mx-auto mb-10">
            From formation to ongoing maintenance, Legal Flow One gives teams a clearer, faster, more scalable way to run entity operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-indigo-50 transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a demo
              <ArrowRight size={15} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              id="contact"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              <Mail size={15} />
              Contact us
            </a>
          </div>

          <p className="text-indigo-300 text-sm mt-6">
            No commitment required. We&apos;ll walk you through the platform.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
