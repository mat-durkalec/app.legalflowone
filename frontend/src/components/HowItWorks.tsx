'use client'

import { motion } from 'framer-motion'
import { steps, type Step } from '@/lib/data'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 block">
            How it works
          </span>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Up and running in three steps
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Legal Flow One is built for clarity. Getting started is structured, fast, and requires no legal expertise.
          </p>
        </motion.div>

        {/* steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px bg-slate-200" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step: Step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
                className="relative text-center lg:text-left"
              >
                {/* number circle */}
                <div className="relative z-10 inline-flex w-14 h-14 rounded-2xl bg-indigo-600 text-white font-bold text-lg items-center justify-center mb-5 shadow-md shadow-indigo-200">
                  {step.number}
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-sm hover:shadow-indigo-200/60 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get started today
          </a>
          <p className="text-xs text-slate-400 mt-3">No technical setup required. Ready from day one.</p>
        </motion.div>
      </div>
    </section>
  )
}
