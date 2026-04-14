'use client'

// ─── Presentational product mockup — no real data ────────────────────────────

const entities = [
  { name: 'Acme Holdings Ltd',    jurisdiction: 'United Kingdom', status: 'active',    tasks: 2 },
  { name: 'TechVentures Inc.',    jurisdiction: 'Delaware, US',   status: 'attention', tasks: 1 },
  { name: 'European Branch SA',   jurisdiction: 'France',         status: 'active',    tasks: 0 },
]

const obligations = [
  { title: 'Annual confirmation statement', entity: 'Acme Holdings',   due: '15 Dec',  type: 'upcoming' },
  { title: 'Board resolution — Q4 approval', entity: 'TechVentures',   due: 'Overdue', type: 'overdue'  },
  { title: 'Director appointment filing',   entity: 'European Branch', due: '3 Jan',   type: 'pending'  },
]

const statusDot: Record<string, string> = {
  active:    'bg-emerald-500',
  attention: 'bg-amber-500',
}

const duePill: Record<string, string> = {
  upcoming: 'text-indigo-600 bg-indigo-50',
  overdue:  'text-red-600 bg-red-50',
  pending:  'text-slate-500 bg-slate-100',
}

export function HeroDashboard() {
  return (
    <div className="relative select-none">
      {/* ambient glow */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-indigo-100/60 via-white/0 to-indigo-50/40 blur-2xl" />

      {/* card */}
      <div className="relative rounded-2xl border border-slate-200/70 bg-white shadow-2xl overflow-hidden">

        {/* window chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50/80 border-b border-slate-200/60">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-md px-2.5 py-1">
            <div className="w-3 h-3 rounded-sm bg-indigo-600" />
            <span className="text-[11px] font-semibold text-slate-600 tracking-tight">Legal Flow One</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-[10px] font-bold text-indigo-600">JD</span>
          </div>
        </div>

        {/* dashboard header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Dashboard</p>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">Entity Overview</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
              1 alert
            </span>
            <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
              3 entities
            </span>
          </div>
        </div>

        {/* two-column content */}
        <div className="grid grid-cols-2 divide-x divide-slate-100">

          {/* left: entity list */}
          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Entities</p>
            <div className="space-y-1">
              {entities.map(e => (
                <div
                  key={e.name}
                  className="flex items-start gap-2.5 px-2.5 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group"
                >
                  <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${statusDot[e.status]}`} />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-800 leading-tight truncate">{e.name}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{e.jurisdiction}</p>
                    {e.tasks > 0 && (
                      <span className="text-[11px] text-indigo-500 font-medium">
                        {e.tasks} task{e.tasks > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* documents mini-card */}
            <div className="mt-4 flex items-center gap-2.5 p-2.5 bg-slate-50 border border-slate-100 rounded-xl">
              <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center text-sm flex-shrink-0">
                📄
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-700">Documents</p>
                <p className="text-[11px] text-slate-400">3 pending review</p>
              </div>
            </div>
          </div>

          {/* right: obligations */}
          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Obligations</p>
            <div className="space-y-2">
              {obligations.map(o => (
                <div
                  key={o.title}
                  className="p-2.5 bg-slate-50/80 border border-slate-100 rounded-xl"
                >
                  <p className="text-xs font-semibold text-slate-800 leading-snug">{o.title}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{o.entity}</p>
                  <div className="mt-1.5">
                    <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-md ${duePill[o.type]}`}>
                      {o.due}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* status bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-50/60 border-t border-slate-100">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 2 active
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> 1 needs attention
            </span>
          </div>
          <span className="text-[11px] font-semibold text-indigo-500 hover:text-indigo-600 cursor-pointer transition-colors">
            View all →
          </span>
        </div>
      </div>
    </div>
  )
}
