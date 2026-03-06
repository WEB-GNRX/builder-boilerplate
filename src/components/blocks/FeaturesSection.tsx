'use client'

import { ScrollReveal, StaggerChildren, fadeInUp } from '../motion'
import { motion } from 'framer-motion'
import { Zap, Shield, Sparkles, BarChart3, Globe, Lock, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  zap: Zap, shield: Shield, sparkles: Sparkles, chart: BarChart3, globe: Globe, lock: Lock,
}

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

export function FeaturesSection({ eyebrow, heading, description, features, layout = 'grid' }: FeaturesProps) {
  if (!features?.length) return null

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          {eyebrow && (
            <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>
          )}
          {heading && <h2 className="text-display-lg font-display mb-4">{heading}</h2>}
          {description && <p className="text-body-lg text-neutral-400">{description}</p>}
        </ScrollReveal>

        {/* Features grid */}
        <StaggerChildren className={`grid gap-6 ${
          layout === 'bento'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {features.map((feature, i) => {
            const Icon = feature.icon ? iconMap[feature.icon] || Sparkles : Sparkles
            const isBento = layout === 'bento' && (i === 0 || i === 3)

            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`group relative rounded-2xl glass glass-hover p-8 ${
                  isBento ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Icon with glow */}
                <div className="relative mb-6 inline-flex">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center
                                  group-hover:bg-primary-500/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-xl bg-primary-500/20 blur-xl opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-display-xs font-display mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-body-md text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover gradient line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
