'use client'

import { type ReactNode } from 'react'
import { motion, useReducedMotion, AnimatePresence, type Variants } from 'motion/react'

export { AnimatePresence }

const ease = [0.25, 0.1, 0.25, 1] as const

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom: { duration?: number; delay?: number } = {}) => ({
    opacity: 1,
    y: 0,
    transition: { ease, duration: custom.duration ?? 0.6, delay: custom.delay ?? 0 },
  }),
}

// ── FadeIn ─────────────────────────────────────────────────────────────────
// Wraps a single element; fades + slides up when it enters the viewport.
// Replace the existing wrapper div with this — it renders as motion.div.

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeIn({ children, className, delay = 0, duration = 0.6 }: FadeInProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px' }}
      variants={fadeUpVariants}
      custom={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── FadeInStagger ──────────────────────────────────────────────────────────
// Replaces a grid/flex container div. Children that are FadeInStaggerItem
// animate in sequence. Keeps all layout classNames intact.

interface FadeInStaggerProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function FadeInStagger({
  children,
  className,
  stagger = 0.07,
  delay = 0,
}: FadeInStaggerProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── FadeInStaggerItem ──────────────────────────────────────────────────────
// Replaces an individual item div inside FadeInStagger. The parent
// FadeInStagger controls when this animates via staggerChildren.

interface FadeInStaggerItemProps {
  children: ReactNode
  className?: string
}

export function FadeInStaggerItem({ children, className }: FadeInStaggerItemProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { ease, duration: 0.55 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── ScaleReveal ─────────────────────────────────────────────────────────────
// Subtle scale + fade for image placeholders and feature boxes.

interface ScaleRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScaleReveal({ children, className, delay = 0 }: ScaleRevealProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ ease, duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
