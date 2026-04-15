'use client'

import { motion } from 'framer-motion'
import {
  Building2, AlertCircle, FileText, CheckCircle2,
  Clock, Eye, Users, ShieldAlert, Bell, Calendar,
  Zap, TrendingUp, CheckSquare, ArrowRight,
  Lock, HardDrive, Globe2,
} from 'lucide-react'

export function ProductShowcase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  return (
    <section className="py-28 px-6 bg-slate-900 relative overflow-hidden">
      {/* gradient orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* header */}
        <motion.div {...fadeInUp} className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
            Platform walkthrough
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            See the platform in action
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Your complete workspace for entity setup, governance, documents, and ongoing compliance — all in one unified interface.
          </p>
        </motion.div>

        {/* dashboard mockup */}
        <motion.div
          {...fadeInUp}
          className="rounded-2xl border border-slate-700/50 bg-slate-800/80 backdrop-blur overflow-hidden shadow-2xl"
        >
          {/* top nav bar */}
          <div className="border-b border-slate-700/50 bg-slate-800/40 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 size={20} className="text-indigo-400" />
              <div>
                <div className="text-sm font-semibold text-white">Acme Corp Inc.</div>
                <div className="text-xs text-slate-400">Delaware | Active</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded bg-green-500/20 border border-green-500/50">
                <span className="text-xs font-semibold text-green-400">In Good Standing</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 min-h-[600px]">
            {/* ──────────────────────────────────────────────────────────────────────── */}
            {/* LEFT SIDEBAR: Entity List & Quick Access */}
            {/* ──────────────────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-1 border-r border-slate-700/50 bg-slate-800/60 p-5 space-y-6 overflow-y-auto">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                  Your entities
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Acme Corp Inc.', active: true },
                    { name: 'Acme EU GmbH', active: false },
                    { name: 'Acme Asia Pte.', active: false },
                  ].map((entity, i) => (
                    <button
                      key={i}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        entity.active
                          ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                          : 'text-slate-400 hover:bg-slate-700/40 hover:text-slate-300'
                      }`}
                    >
                      <div className="font-medium">{entity.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {entity.active ? '3 tasks' : '1 task'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                  Quick actions
                </div>
                <div className="space-y-2">
                  {[
                    { icon: FileText, label: 'Generate docs' },
                    { icon: CheckSquare, label: 'New task' },
                    { icon: Users, label: 'Manage team' },
                  ].map((action, i) => (
                    <button
                      key={i}
                      className="w-full flex items-center gap-2 text-sm text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-700/40 transition-all duration-200"
                    >
                      <action.icon size={16} className="text-slate-500" />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ──────────────────────────────────────────────────────────────────────── */}
            {/* MAIN CONTENT: Dashboard with Tabs */}
            {/* ──────────────────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-4 flex flex-col">
              {/* tab navigation */}
              <div className="border-b border-slate-700/50 px-6 py-4 flex items-center gap-8 overflow-x-auto bg-slate-800/30">
                {['Overview', 'Obligations', 'Documents', 'Approvals'].map((tab, i) => (
                  <button
                    key={i}
                    className={`text-sm font-medium whitespace-nowrap py-2 border-b-2 transition-all duration-200 ${
                      i === 0
                        ? 'text-indigo-400 border-indigo-500'
                        : 'text-slate-400 border-transparent hover:text-slate-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* content area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-5">
                {/* status overview cards */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: Eye, label: 'Upcoming obligations', value: '3', color: 'amber' },
                    { icon: FileText, label: 'Documents ready', value: '7', color: 'blue' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-slate-700/40 border border-slate-600/50 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700/60 transition-all duration-200"
                    >
                      <div>
                        <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                        <div className={`text-2xl font-bold mt-1 ${
                          stat.color === 'amber' ? 'text-amber-400' : 'text-blue-400'
                        }`}>
                          {stat.value}
                        </div>
                      </div>
                      <stat.icon
                        size={28}
                        className={stat.color === 'amber' ? 'text-amber-500/30' : 'text-blue-500/30'}
                      />
                    </div>
                  ))}
                </div>

                {/* obligations list */}
                <div>
                  <div className="text-sm font-semibold text-white mb-3">Next up: Upcoming obligations</div>
                  <div className="space-y-2">
                    {[
                      { task: 'Q2 Board meeting', date: 'Apr 28', priority: 'high' },
                      { task: 'Annual tax return (IRS)', date: 'May 15', priority: 'high' },
                      { task: 'Shareholder communications', date: 'May 30', priority: 'medium' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-slate-700/20 border border-slate-600/30 rounded-lg p-3 flex items-center justify-between hover:bg-slate-700/40 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            item.priority === 'high' ? 'bg-amber-400' : 'bg-blue-400'
                          }`} />
                          <div>
                            <div className="text-sm font-medium text-white">{item.task}</div>
                            <div className="text-xs text-slate-500">Due {item.date}</div>
                          </div>
                        </div>
                        <Clock size={16} className="text-slate-500" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* documents section */}
                <div>
                  <div className="text-sm font-semibold text-white mb-3">Recent documents</div>
                  <div className="space-y-2">
                    {[
                      { name: 'Q1 Board Resolutions', date: 'Apr 2, 2024' },
                      { name: 'Director Appointment Letter', date: 'Mar 28, 2024' },
                      { name: 'Shareholder Agreement', date: 'Jan 15, 2024' },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="bg-slate-700/20 border border-slate-600/30 rounded-lg p-3 flex items-center justify-between hover:bg-slate-700/40 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <FileText size={16} className="text-indigo-400" />
                          <div>
                            <div className="text-sm font-medium text-white">{doc.name}</div>
                            <div className="text-xs text-slate-500">{doc.date}</div>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-slate-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right sidebar: alerts & quick info */}
          <div className="lg:hidden border-t border-slate-700/50 px-6 py-4 space-y-4 bg-slate-800/30">
            <div>
              <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Bell size={16} className="text-amber-400" />
                Active alerts
              </div>
              <div className="space-y-2">
                {[
                  { title: 'Board meeting due in 2 weeks', type: 'warning' },
                  { title: 'Team member access expired', type: 'info' },
                ].map((alert, i) => (
                  <div
                    key={i}
                    className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-2 flex items-start gap-2"
                  >
                    <AlertCircle size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-300">{alert.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* capability highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              icon: ShieldAlert,
              title: 'Complete entity visibility',
              description: 'See all entities, obligations, documents, and approvals at a glance. Multi-entity oversight without context switching.',
            },
            {
              icon: Zap,
              title: 'Proactive obligation tracking',
              description: 'Automated alerts surface upcoming deadlines, filings, renewals, and governance actions before they become critical.',
            },
            {
              icon: CheckCircle2,
              title: 'Structured workflows & automation',
              description: 'Document generation, task creation, and governance workflows replace manual processes and email chains.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300"
            >
              <item.icon size={28} className="text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
