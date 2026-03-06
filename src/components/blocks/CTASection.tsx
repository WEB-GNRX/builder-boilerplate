'use client'

import { ScrollReveal } from '../motion'
import { motion } from 'framer-motion'

interface CTAProps {
  heading: string
  description?: string | null
  primaryButton?: { label?: string | null; url?: string | null } | null
  secondaryButton?: { label?: string | null; url?: string | null } | null
  variant?: 'gradient' | 'dark' | 'light' | null
}

export function CTASection({
  heading,
  description,
  primaryButton,
  secondaryButton,
}: CTAProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* ── Deep layered background ── */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-neutral-950/80 to-secondary-900/40" />

      {/* ── Animated orbs ── */}
      {/* Large primary orb — top-left */}
      <motion.div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Secondary orb — bottom-right */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-secondary-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4], x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Accent orb — center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Content ── */}
      <div className="container-tight relative z-10">
        <ScrollReveal className="text-center">
          {/* Decorative line above heading */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-500/60" />
            <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse-slow" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-500/60" />
          </div>

          <h2 className="text-display-lg md:text-display-xl font-display mb-6 text-balance text-white leading-tight">
            {heading}
          </h2>

          {description && (
            <p className="text-body-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            {primaryButton?.label && primaryButton?.url && (
              <motion.a
                href={primaryButton.url}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center justify-center px-10 py-4 rounded-full
                           bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold
                           text-body-md shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50
                           transition-shadow duration-300 overflow-hidden group"
              >
                {/* Shimmer sweep */}
                <span
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out
                             bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative z-10">{primaryButton.label}</span>
              </motion.a>
            )}

            {secondaryButton?.label && secondaryButton?.url && (
              <motion.a
                href={secondaryButton.url}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-10 py-4 rounded-full
                           border border-white/15 text-neutral-300 font-medium text-body-md
                           hover:border-white/30 hover:text-white hover:bg-white/5
                           transition-all duration-300"
              >
                {secondaryButton.label}
              </motion.a>
            )}
          </div>

          {/* Social proof nudge */}
          <p className="mt-8 text-body-sm text-neutral-600">
            No credit card required · Free 14-day trial · Cancel anytime
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
