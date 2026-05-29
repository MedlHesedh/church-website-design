'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const reduced = useReducedMotion()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={cn(
        'bg-card border-b border-border sticky top-0 z-50 transition-all duration-300',
        scrolled && 'shadow-sm bg-card/95 backdrop-blur-md',
      )}
    >
      <nav
        className={cn(
          'max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-300',
          scrolled ? 'h-[60px]' : 'h-[68px]',
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <Image
            src="/Truth and Life Christian Church.png"
            alt="Truth and Life Christian Church"
            width={44}
            height={44}
            className="rounded-full drop-shadow-sm"
            priority
          />
          <div className="leading-tight">
            <span className="block text-sm font-semibold font-serif text-primary tracking-tight">
              Truth &amp; Life
            </span>
            <span className="block text-[10px] font-medium tracking-[0.1em] uppercase text-muted-foreground">
              Christian Church
            </span>
          </div>
        </Link>

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

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/visit"
            className="px-5 py-2 bg-accent text-white text-[13px] font-medium tracking-wide hover:bg-accent/90 active:scale-[0.97] transition-all duration-150"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 border border-border text-foreground text-[13px] font-medium hover:bg-secondary active:scale-[0.97] transition-all duration-150"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
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

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden border-t border-border bg-card overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-0.5">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduced ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center py-3 text-sm font-medium border-b border-border/50 last:border-0 transition-colors ${
                      isActive(item.href) ? 'text-primary' : 'text-foreground/75 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 pb-2 flex flex-col gap-2">
                <Link
                  href="/visit"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2.5 bg-accent text-white text-sm font-medium tracking-wide active:scale-[0.98] transition-transform"
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2.5 border border-border text-foreground text-sm font-medium active:scale-[0.98] transition-transform"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
