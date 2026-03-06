'use client'

import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal, fadeIn } from '../motion'

interface HeroProps {
  eyebrow?: string | null
  heading: string
  subheading?: string | null
  primaryCTA?: { label?: string | null; url?: string | null } | null
  secondaryCTA?: { label?: string | null; url?: string | null } | null
  variant?: 'default' | 'withImage' | 'withVideo' | 'minimal' | null
  alignment?: 'left' | 'center' | 'right' | null
  backgroundImage?: { url?: string } | null
  backgroundVideo?: string | null
}

export function HeroSection({
  eyebrow,
  heading,
  subheading,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  alignment = 'center',
}: HeroProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[alignment || 'center']

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-accent-500/8 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-wide relative z-10 py-32">
        <div className={`flex flex-col ${alignClass} max-w-4xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-caption uppercase tracking-widest text-primary-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse-slow" />
                {eyebrow}
              </span>
            </motion.div>
          )}

          {/* Heading */}
          <h1 className="text-display-xl md:text-display-2xl font-display mb-6 text-balance">
            <TextReveal text={heading} />
          </h1>

          {/* Subheading */}
          {subheading && (
            <ScrollReveal delay={0.3}>
              <p className="text-body-xl text-neutral-400 max-w-2xl mb-10 text-balance">
                {subheading}
              </p>
            </ScrollReveal>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {primaryCTA?.label && primaryCTA?.url && (
              <a href={primaryCTA.url} className="group btn-primary relative overflow-hidden">
                <span className="relative z-10">{primaryCTA.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            )}
            {secondaryCTA?.label && secondaryCTA?.url && (
              <a href={secondaryCTA.url} className="btn-secondary">
                {secondaryCTA.label}
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  )
}
