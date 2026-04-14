'use client'

import { motion } from 'framer-motion'
import {
  Building2, Users, FileText,
  ClipboardList, BellRing, Globe2,
} from 'lucide-react'
import { features, type Feature } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Building2:     <Building2     size={22} />,
  Users:         <Users         size={22} />,
  FileText:      <FileText      size={22} />,
  ClipboardList: <ClipboardList size={22} />,
  BellRing:      <BellRing      size={22} />,
  Globe2:        <Globe2        size={22} />,
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-50">
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
            Platform features
          </span>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Everything your entity needs, in one place
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Legal Flow One covers the full lifecycle — from formation through ongoing governance and maintenance.
          </p>
        </motion.div>

        {/* feature grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f: Feature) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group bg-white rounded-2xl p-7 border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-indigo-100 hover:-translate-y-1 transition-all duration-250 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                {iconMap[f.icon]}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              <div className="mt-5 text-xs font-semibold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                Learn more <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
