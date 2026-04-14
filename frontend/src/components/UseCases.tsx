'use client'

import { motion } from 'framer-motion'
import {
  Rocket, Scale, ArrowUpRight,
  Building, Handshake,
} from 'lucide-react'
import { useCases, type UseCase } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Rocket:       <Rocket       size={20} />,
  Scale:        <Scale        size={20} />,
  ArrowUpRight: <ArrowUpRight size={20} />,
  Building:     <Building     size={20} />,
  Handshake:    <Handshake    size={20} />,
}

const accentColors = [
  { bg: 'bg-indigo-50',  text: 'text-indigo-600',  hover: 'group-hover:bg-indigo-600' },
  { bg: 'bg-violet-50',  text: 'text-violet-600',  hover: 'group-hover:bg-violet-600' },
  { bg: 'bg-sky-50',     text: 'text-sky-600',     hover: 'group-hover:bg-sky-600'    },
  { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'group-hover:bg-emerald-600'},
  { bg: 'bg-amber-50',   text: 'text-amber-600',   hover: 'group-hover:bg-amber-600'  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 bg-slate-50">
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
            Who it&apos;s for
          </span>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Built for every team that manages legal entities
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you&apos;re a founder setting up your first company or a legal team managing a global group structure — Legal Flow One adapts to your needs.
          </p>
        </motion.div>

        {/* use-case cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc: UseCase, i) => {
            const color = accentColors[i % accentColors.length]
            return (
              <motion.div
                key={uc.audience}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-7 border border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-200 ${color.bg} ${color.text} ${color.hover} group-hover:text-white`}
                >
                  {iconMap[uc.icon]}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${color.text} mb-2 block`}>
                  {uc.audience}
                </span>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{uc.description}</p>
              </motion.div>
            )
          })}

          {/* "and more" card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.42 }}
            className="bg-indigo-600 rounded-2xl p-7 border border-indigo-600 shadow-sm hover:shadow-indigo-200/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-3">Also serving</p>
            <ul className="space-y-2 text-sm text-indigo-100 font-medium">
              <li>→ Tax advisors &amp; accountants</li>
              <li>→ Banks &amp; financial institutions</li>
              <li>→ Law firms &amp; notaries</li>
              <li>→ Investors &amp; fund managers</li>
            </ul>
            <p className="text-indigo-300 text-xs mt-4 leading-relaxed">
              Anyone who needs structured entity data and governance records.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
