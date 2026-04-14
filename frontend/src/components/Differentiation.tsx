'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { diffItems, type DiffItem } from '@/lib/data'

export function Differentiation() {
  return (
    <section id="why-lfo" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-4"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
            Why Legal Flow One
          </span>
          <h2 className="text-4xl font-bold text-white leading-tight tracking-tight mb-5">
            Not just where you store documents.
            <br />
            <span className="text-indigo-400">Where the work gets done.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Legal Flow One is broader than a compliance tool, more scalable than manual workflows, and more operational than static legal support.
          </p>
        </motion.div>

        {/* comparison table */}
        <div className="mt-12 overflow-x-auto">
          {/* column headers */}
          <div className="grid grid-cols-3 gap-4 mb-4 min-w-[640px]">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Alternative approach</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">What&apos;s missing</div>
            <div className="flex items-center gap-2 px-1">
              <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[9px] font-bold">LF</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Legal Flow One</span>
            </div>
          </div>

          {/* rows */}
          <div className="space-y-3 min-w-[640px]">
            {diffItems.map((item: DiffItem, i) => (
              <motion.div
                key={item.alternative}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
                className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={10} className="text-slate-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-200">{item.alternative}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{item.limitation}</p>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={10} className="text-indigo-400" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.lfoAdvantage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
