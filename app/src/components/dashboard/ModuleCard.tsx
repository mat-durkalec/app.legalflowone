interface ModuleCardProps {
  title: string
  description: string
  icon: any // lucide-react icon component
}

export function ModuleCard({ title, description, icon: Icon }: ModuleCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-sm transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
          <Icon size={20} className="text-indigo-600" />
        </div>
        <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
          Coming soon
        </span>
      </div>
      <h3 className="text-sm font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}
