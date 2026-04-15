import { auth } from '~/auth'
import { redirect } from 'next/navigation'
import { Header } from '@/components/dashboard/Header'
import { ModuleCard } from '@/components/dashboard/ModuleCard'
import {
  Building2,
  FileText,
  ClipboardList,
  Users,
  Calendar,
  Bell,
} from 'lucide-react'

const modules = [
  {
    title: 'Company Profile',
    description: 'Manage entity details, directors, registered addresses, and organizational structure.',
    icon: Building2,
  },
  {
    title: 'Documents',
    description: 'Upload, organize, and track governance documents and corporate records.',
    icon: FileText,
  },
  {
    title: 'Obligations',
    description: 'Track filings, renewals, and compliance deadlines across all entities.',
    icon: ClipboardList,
  },
  {
    title: 'Shareholders',
    description: 'View and manage your cap table, equity holders, and ownership structure.',
    icon: Users,
  },
  {
    title: 'Calendar',
    description: 'Upcoming AGMs, governance meetings, and regulatory compliance deadlines.',
    icon: Calendar,
  },
  {
    title: 'Notifications',
    description: 'Alerts and activity updates across your workspace and all entities.',
    icon: Bell,
  },
]

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header user={session.user} />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-base text-slate-600">
            Welcome to Legal Flow One – your workspace for company governance, documents, and obligations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => (
            <ModuleCard
              key={module.title}
              title={module.title}
              description={module.description}
              icon={module.icon}
            />
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-200 py-6 px-6 text-center text-xs text-slate-500 mt-12">
        © {new Date().getFullYear()} Legal Flow One. All rights reserved.
      </footer>
    </div>
  )
}
