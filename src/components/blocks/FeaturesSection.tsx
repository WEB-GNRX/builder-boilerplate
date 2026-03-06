'use client'

import { ScrollReveal, StaggerChildren, fadeInUp } from '../motion'
import { motion } from 'framer-motion'
import { Zap, Shield, Sparkles, BarChart3, Globe, Lock, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  shield: Shield,
  sparkles: Sparkles,
  chart: BarChart3,
  globe: Globe,
  lock: Lock,
}

const iconGradients = [
  'from-primary-500/20 to-primary-600/10 text-primary-400',
  'from-secondary-500/20 to-secondary-600/10 text-secondary-400',
  'from-accent-500/20 to-accent-600/10 text-accent-400',
  'from-primary-500/20 to-secondary-500/10 text-primary-400',
  'from-accent-500/20 to-primary-500/10 text-accent-400',
  'from-secondary-500/20 to-accent-500/10 text-secondary-400',
]

const glowColors = [
  'group-hover:shadow-primary-500/20',
  'group-hover:shadow-secondary-500/20',
  'group-hover:shadow-accent-500/20',
  'group-hover:shadow-primary-500/20',
  'group-hover:shadow-accent-500/20',
  'group-hover:shadow-secondary-500/20',
]

interface Feature {
  icon?: string | null
  title: string
  description: string
}

interface FeaturesProps {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  features?: Feature[] | null
  layout?: 'grid' | 'bento' | null
}

export function FeaturesSection({
  eyebrow,
  heading,
  description,
  features,
  layout = 'grid',
}: FeaturesProps) {
  if (!features?.length) return null

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
          {eyebrow && (
            <span className="inline-block text-caption uppercase tracking-widest text-primary-400 mb-4 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5">
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2 className="text-display-lg font-display mb-5 mt-4 text-white">{heading}</h2>
          )}
          {description && <p className="text-body-lg text-neutral-400 leading-relaxed">{description}</p>}
        </ScrollReveal>

        {/* Features grid */}
        <StaggerChildren
          className={`grid gap-5 ${
            layout === 'bento'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon ? iconMap[feature.icon] || Sparkles : Sparkles
            const isBento = layout === 'bento' && (i === 0 || i === 3)
            const gradientClass = iconGradients[i % iconGradients.length]
            const glowClass = glowColors[i % glowColors.length]

            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`group relative rounded-2xl overflow-hidden ${
                  isBento ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Gradient border wrapper */}
                <div className="gradient-border absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card body */}
                <div
                  className={`relative h-full p-8 glass glass-hover rounded-2xl transition-all duration-500 group-hover:shadow-2xl ${glowClass}`}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/[0.03] to-transparent -translate-y-16 translate-x-16 pointer-events-none" />

                  {/* Icon */}
                  <div className="relative mb-7 inline-flex">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center
                                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    {/* Icon glow */}
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-br from-primary-500/30 to-secondary-500/20" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-6 right-6 text-caption font-display font-bold text-white/10 text-4xl leading-none select-none">
                    0{i + 1}
                  </div>

                  <h3 className="text-display-xs font-display mb-3 text-white group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-body-md text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
