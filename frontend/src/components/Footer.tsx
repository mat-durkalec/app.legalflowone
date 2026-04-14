import { siteConfig } from '@/lib/data'

const footerLinks = {
  Product: [
    { label: 'Features',     href: '#features'    },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Use Cases',    href: '#use-cases'    },
    { label: 'Benefits',     href: '#benefits'     },
  ],
  Company: [
    { label: 'About',        href: '#why-lfo'    },
    { label: 'Contact',      href: '#contact'    },
    { label: 'Book a demo',  href: '#demo'       },
  ],
  Legal: [
    { label: 'Privacy Policy',    href: '#' },
    { label: 'Terms of Service',  href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">

        {/* top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-white/8">

          {/* brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">LF</span>
              </div>
              <span className="font-semibold text-white text-sm tracking-tight">{siteConfig.name}</span>
            </a>
            <p className="text-sm leading-relaxed mb-5">
              The operating system for modern corporate governance.
            </p>
            <a
              href={siteConfig.linkedin}
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{group}</p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for modern corporate governance.</p>
        </div>
      </div>
    </footer>
  )
}
