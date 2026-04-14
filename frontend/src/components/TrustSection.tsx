'use client'

import { motion } from 'framer-motion'
import { Lock, FileCheck, Users2, Globe2 } from 'lucide-react'
import { trustSignals, type TrustSignal } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Lock:      <Lock      size={20} />,
  FileCheck: <FileCheck size={20} />,
  Users2:    <Users2    size={20} />,
  Globe2:    <Globe2    size={20} />,
}

export function TrustSection() {
  return (
    <section id="trust" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 block">
              Enterprise ready
            </span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Built for serious businesses and real governance
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Legal Flow One is designed with the structure, clarity, and reliability that legal and operational teams require.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              From role-based access to complete audit trails, the platform is built to support due diligence, investor review, and internal governance standards — at any scale.
            </p>
          </motion.div>

          {/* right: trust cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {trustSignals.map((signal: TrustSignal, i) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  {iconMap[signal.icon]}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{signal.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{signal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
