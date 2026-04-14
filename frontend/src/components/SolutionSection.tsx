'use client'

import { motion } from 'framer-motion'
import {
  Building2, FileText, CheckSquare,
  Users, Bell, LayoutDashboard,
} from 'lucide-react'
import { solutionFeatures, type SolutionFeature } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Building2:       <Building2       size={18} />,
  FileText:        <FileText        size={18} />,
  CheckSquare:     <CheckSquare     size={18} />,
  Users:           <Users           size={18} />,
  Bell:            <Bell            size={18} />,
  LayoutDashboard: <LayoutDashboard size={18} />,
}

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 block">
              The solution
            </span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              A single operating layer for company governance
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Legal Flow One brings together every part of entity management — formation, governance, documents, obligations, and oversight — into one structured, automated platform.
            </p>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              Instead of coordinating across advisors, email threads, and spreadsheets, your team works from one place. Processes are clear, records are current, and nothing gets missed.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-all shadow-sm"
            >
              See it in action
            </a>
          </motion.div>

          {/* right: feature list */}
          <div className="grid sm:grid-cols-2 gap-4">
            {solutionFeatures.map((f: SolutionFeature, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
                className="p-5 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                  {iconMap[f.icon]}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
