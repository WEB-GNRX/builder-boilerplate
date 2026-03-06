'use client'

import { ScrollReveal, StaggerChildren, fadeInUp } from '../motion'
import { motion } from 'framer-motion'
import { Zap, Shield, Sparkles, BarChart3, Globe, Lock, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  zap: Zap, shield: Shield, sparkles: Sparkles, chart: BarChart3, globe: Globe, lock: Lock,
}

interface Service {
  icon?: string | null
  title: string
  description: string
  url?: string | null
}

interface ServicesProps {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  services?: Service[] | null
}

export function ServicesSection({ eyebrow, heading, description, services }: ServicesProps) {
  if (!services?.length) return null

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          {eyebrow && <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>}
          {heading && <h2 className="text-display-lg font-display mb-4">{heading}</h2>}
          {description && <p className="text-body-lg text-neutral-400">{description}</p>}
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon ? iconMap[service.icon] || Sparkles : Sparkles
            const Wrapper = service.url ? 'a' : 'div'
            const wrapperProps = service.url ? { href: service.url } : {}

            return (
              <motion.div key={i} variants={fadeInUp}>
                <Wrapper
                  {...wrapperProps}
                  className="group block relative rounded-2xl p-8 gradient-border bg-neutral-950 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 
                                flex items-center justify-center mb-6"
                    >
                      <Icon className="w-7 h-7 text-primary-400" />
                    </motion.div>
                    <h3 className="text-display-xs font-display mb-3">{service.title}</h3>
                    <p className="text-body-md text-neutral-400">{service.description}</p>
                    
                    {service.url && (
                      <div className="mt-4 flex items-center gap-2 text-primary-400 text-body-sm font-medium
                                     opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
