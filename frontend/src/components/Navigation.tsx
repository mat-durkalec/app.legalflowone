'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '@/lib/data'

const navLinks = [
  { label: 'Product',      href: '#solution' },
  { label: 'Solutions',    href: '#use-cases' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Benefits',     href: '#benefits' },
  { label: 'Contact',      href: '#contact' },
]

export function Navigation() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shadow-sm group-hover:bg-indigo-700 transition-colors">
            <span className="text-white text-[11px] font-bold tracking-tight">LF</span>
          </div>
          <span className="font-semibold text-slate-900 text-sm tracking-tight">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-1.5"
          >
            Talk to us
          </a>
          <a
            href="#demo"
            className="text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all shadow-sm hover:shadow-indigo-200 hover:shadow-md"
          >
            Book a demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-200"
          >
            <div className="max-w-7xl mx-auto px-6 pt-3 pb-5 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-indigo-600 py-2.5 border-b border-slate-100 last:border-0 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href="#contact"
                  className="text-sm font-medium text-slate-700 border border-slate-200 rounded-lg py-2.5 text-center hover:bg-slate-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Talk to us
                </a>
                <a
                  href="#demo"
                  className="text-sm font-semibold bg-indigo-600 text-white rounded-lg py-2.5 text-center hover:bg-indigo-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
