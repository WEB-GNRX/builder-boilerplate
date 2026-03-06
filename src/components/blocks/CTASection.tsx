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

export function CTASection({ heading, description, primaryButton, secondaryButton }: CTAProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated gradient bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-neutral-950 to-secondary-900/50" />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container-tight relative z-10">
        <ScrollReveal className="text-center">
          <h2 className="text-display-lg md:text-display-xl font-display mb-6 text-balance">{heading}</h2>
          {description && (
            <p className="text-body-xl text-neutral-400 mb-10 max-w-2xl mx-auto">{description}</p>
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            {primaryButton?.label && primaryButton?.url && (
              <motion.a
                href={primaryButton.url}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-lg px-10 py-4 relative"
              >
                <span className="relative z-10">{primaryButton.label}</span>
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full animate-ping bg-primary-500/20" style={{ animationDuration: '2s' }} />
              </motion.a>
            )}
            {secondaryButton?.label && secondaryButton?.url && (
              <a href={secondaryButton.url} className="btn-secondary text-lg px-10 py-4">
                {secondaryButton.label}
              </a>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
