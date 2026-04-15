'use client'

import { signOut } from 'next-auth/react'

interface HeaderProps {
  user?: {
    email?: string | null
    name?: string | null
    image?: string | null
  }
}

export function Header({ user }: HeaderProps) {
  const userInitial = user?.email?.[0]?.toUpperCase() || '?'

  return (
    <header className="bg-white border-b border-slate-200 px-6 h-16 flex items-center justify-between sticky top-0 z-40">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
          LF
        </div>
        <span className="font-semibold text-slate-900 hidden sm:inline">Legal Flow One</span>
      </div>

      {/* Right: User menu + Logout */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-semibold">
            {userInitial}
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-slate-500">Signed in as</p>
            <p className="text-sm font-medium text-slate-900 break-all max-w-xs">
              {user?.email}
            </p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-all"
        >
          Sign out
        </button>
      </div>
    </header>
  )
}
