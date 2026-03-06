'use client'

import { StaggerChildren, AnimatedCounter, ScrollReveal, fadeInUp } from '../motion'
import { motion } from 'framer-motion'

interface Stat {
  value: string
  suffix?: string | null
  label: string
}

interface StatsProps {
  eyebrow?: string | null
  heading?: string | null
  stats?: Stat[] | null
  variant?: 'default' | 'dark' | 'gradient' | null
}

export function StatsSection({ eyebrow, heading, stats, variant = 'default' }: StatsProps) {
  if (!stats?.length) return null

  const bgClass =
    variant === 'gradient'
      ? 'bg-gradient-to-r from-primary-900/30 via-neutral-950 to-secondary-900/30'
      : variant === 'dark'
        ? 'bg-neutral-900/50'
        : ''

  return (
    <section className={`section-padding relative overflow-hidden ${bgClass}`}>
      {/* Subtle background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary-500/5 blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {(eyebrow || heading) && (
          <ScrollReveal className="text-center mb-16">
            {eyebrow && (
              <span className="inline-block text-caption uppercase tracking-widest text-primary-400 mb-4 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5">
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2 className="text-display-lg font-display mt-4 text-white">{heading}</h2>
            )}
          </ScrollReveal>
        )}

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ''), 10)
            const isLast = i === stats.length - 1

            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative text-center px-6 py-8 group ${
                  !isLast
                    ? 'border-r border-white/5 md:border-r md:last:border-r-0'
                    : ''
                }`}
              >
                {/* Top glow line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number glow blob */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-24 h-24 rounded-full bg-primary-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Stat value */}
                <div className="relative mb-3">
                  <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-primary-200 to-primary-400 leading-none"
                    style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                    {!isNaN(numericValue) ? (
                      <AnimatedCounter value={numericValue} suffix={stat.suffix || ''} />
                    ) : (
                      <span>
                        {stat.value}
                        {stat.suffix || ''}
                      </span>
                    )}
                  </span>
                  {/* Glow beneath number */}
                  <div className="absolute inset-0 blur-xl opacity-20 font-display font-bold text-primary-400"
                    style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                    aria-hidden>
                    {stat.value}{stat.suffix || ''}
                  </div>
                </div>

                <div className="text-body-sm text-neutral-500 uppercase tracking-wider font-medium group-hover:text-neutral-400 transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </StaggerChildren>

        {/* Horizontal divider */}
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}
