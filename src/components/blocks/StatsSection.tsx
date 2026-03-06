'use client'

import { StaggerChildren, AnimatedCounter, fadeInUp } from '../motion'
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

  const bgClass = variant === 'gradient'
    ? 'bg-gradient-to-r from-primary-900/30 via-neutral-950 to-secondary-900/30'
    : variant === 'dark'
    ? 'bg-neutral-900/50'
    : ''

  return (
    <section className={`section-padding relative ${bgClass}`}>
      <div className="container-wide">
        {(eyebrow || heading) && (
          <div className="text-center mb-16">
            {eyebrow && <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>}
            {heading && <h2 className="text-display-lg font-display">{heading}</h2>}
          </div>
        )}

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ''), 10)
            return (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <div className="text-display-xl md:text-display-2xl font-display gradient-text mb-2">
                  {!isNaN(numericValue) ? (
                    <AnimatedCounter value={numericValue} suffix={stat.suffix || ''} />
                  ) : (
                    <span>{stat.value}{stat.suffix || ''}</span>
                  )}
                </div>
                <div className="text-body-md text-neutral-500">{stat.label}</div>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
