'use client'

import { motion } from 'framer-motion'
import { Puzzle, Users, AlertTriangle, Globe2 } from 'lucide-react'
import { painPoints, type PainPoint } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Puzzle:        <Puzzle        size={20} />,
  Users:         <Users         size={20} />,
  AlertTriangle: <AlertTriangle size={20} />,
  Globe2:        <Globe2        size={20} />,
}

const stagger = {
  hidden:  {},
  show:    { transition: { staggerChildren: 0.1 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 block">
            The challenge
          </span>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Corporate governance is still fragmented, manual, and hard to scale
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most companies manage their legal entities across a mix of advisors, tools, spreadsheets, and email. It works until it doesn&apos;t.
          </p>
        </motion.div>

        {/* pain point cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {painPoints.map((point: PainPoint) => (
            <motion.div
              key={point.title}
              variants={cardAnim}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                {iconMap[point.icon]}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
