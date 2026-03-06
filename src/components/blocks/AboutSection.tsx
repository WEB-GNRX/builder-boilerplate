'use client'

import { ScrollReveal, slideInLeft, slideInRight } from '../motion'
import { motion } from 'framer-motion'

interface AboutProps {
  eyebrow?: string | null
  heading: string
  description: string
  image?: { url?: string; alt?: string } | null
  imagePosition?: 'left' | 'right' | null
  stats?: Array<{ value?: string | null; label?: string | null }> | null
  cta?: { label?: string | null; url?: string | null } | null
}

export function AboutSection({ eyebrow, heading, description, image, imagePosition = 'right', stats, cta }: AboutProps) {
  const isLeft = imagePosition === 'left'

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text */}
          <ScrollReveal variants={isLeft ? slideInRight : slideInLeft} className={isLeft ? 'lg:order-2' : ''}>
            {eyebrow && (
              <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>
            )}
            <h2 className="text-display-lg font-display mb-6">{heading}</h2>
            <p className="text-body-lg text-neutral-400 mb-8 leading-relaxed">{description}</p>

            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-display-sm font-display gradient-text">{stat.value}</div>
                    <div className="text-body-sm text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {cta?.label && cta?.url && (
              <a href={cta.url} className="btn-primary">
                {cta.label}
              </a>
            )}
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal variants={isLeft ? slideInLeft : slideInRight} className={isLeft ? 'lg:order-1' : ''}>
            <div className="relative">
              {image?.url ? (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={image.url}
                      alt={image.alt || ''}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent" />
                </motion.div>
              ) : (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="aspect-[4/3] rounded-2xl glass flex items-center justify-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-2xl" />
                </motion.div>
              )}

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary-500/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-secondary-500/10 blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
