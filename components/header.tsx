'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { label: 'Messages', href: '/messages' },
  { label: 'About', href: '/about' },
  { label: 'Ministries', href: '/ministries' },
  { label: 'Events', href: '/events' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'What We Believe', href: '/faith' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary-foreground" fill="currentColor">
              <path d="M11 2v7H4v2h7v11h2V11h7V9h-7V2z" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-semibold font-serif text-primary tracking-tight">
              Truth &amp; Life
            </span>
            <span className="block text-[10px] font-medium tracking-[0.1em] uppercase text-muted-foreground">
              Christian Church
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3.5 py-2 text-[13px] font-medium transition-colors relative ${
                isActive(item.href)
                  ? 'text-primary after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-accent'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/visit"
            className="px-5 py-2 bg-accent text-white text-[13px] font-medium tracking-wide hover:bg-accent/90 transition-colors"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 border border-border text-foreground text-[13px] font-medium hover:bg-secondary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2 -mr-1 text-foreground hover:text-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center py-3 text-sm font-medium border-b border-border/50 last:border-0 transition-colors ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground/75 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-2">
              <Link
                href="/visit"
                onClick={() => setOpen(false)}
                className="w-full text-center py-2.5 bg-accent text-white text-sm font-medium tracking-wide"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full text-center py-2.5 border border-border text-foreground text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
