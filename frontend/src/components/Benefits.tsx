'use client'

import { motion } from 'framer-motion'
import {
  Clock, Eye, ShieldCheck,
  FolderOpen, Minimize2, TrendingUp,
} from 'lucide-react'
import { benefits, type Benefit } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Clock:       <Clock       size={20} />,
  Eye:         <Eye         size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  FolderOpen:  <FolderOpen  size={20} />,
  Minimize2:   <Minimize2   size={20} />,
  TrendingUp:  <TrendingUp  size={20} />,
}

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 block">
              Why it matters
            </span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Better outcomes for your legal operations
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Legal Flow One isn&apos;t just about organization — it&apos;s about running your entities better. Less friction, more visibility, fewer risks.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
            >
              Book a demo to see how
            </a>
          </motion.div>

          {/* right: benefit list */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b: Benefit, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {iconMap[b.icon]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">{b.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
