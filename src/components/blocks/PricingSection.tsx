'use client'

import { ScrollReveal, StaggerChildren, fadeInUp } from '../motion'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, X } from 'lucide-react'

interface Feature {
  feature: string
  included?: boolean | null
}

interface Plan {
  name: string
  description?: string | null
  priceMonthly: string
  priceYearly?: string | null
  popular?: boolean | null
  features?: Feature[] | null
  cta?: { label?: string | null; url?: string | null } | null
}

interface PricingProps {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  showToggle?: boolean | null
  plans?: Plan[] | null
}

export function PricingSection({ eyebrow, heading, description, showToggle = true, plans }: PricingProps) {
  const [yearly, setYearly] = useState(false)

  if (!plans?.length) return null

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          {eyebrow && <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>}
          {heading && <h2 className="text-display-lg font-display mb-4">{heading}</h2>}
          {description && <p className="text-body-lg text-neutral-400">{description}</p>}

          {showToggle && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-body-md transition-colors ${!yearly ? 'text-white' : 'text-neutral-500'}`}>Monthly</span>
              <button
                onClick={() => setYearly(!yearly)}
                className="relative w-14 h-7 rounded-full bg-neutral-800 transition-colors hover:bg-neutral-700"
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 rounded-full bg-primary-500"
                  animate={{ left: yearly ? '1.75rem' : '0.25rem' }}
                  transition={{ duration: 0.2 }}
                />
              </button>
              <span className={`text-body-md transition-colors ${yearly ? 'text-white' : 'text-neutral-500'}`}>
                Yearly <span className="text-accent-400 text-body-sm">Save 20%</span>
              </span>
            </div>
          )}
        </ScrollReveal>

        <StaggerChildren className={`grid gap-6 items-stretch ${
          plans.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 
          plans.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? 'glass border-primary-500/30 shadow-lg shadow-primary-500/10'
                  : 'glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-body-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-display-xs font-display mb-2">{plan.name}</h3>
                {plan.description && <p className="text-body-sm text-neutral-500">{plan.description}</p>}
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-display-lg font-display">
                    {yearly && plan.priceYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-body-sm text-neutral-500">/{yearly ? 'year' : 'month'}</span>
                </div>
              </div>

              {plan.features && plan.features.length > 0 && (
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      {feature.included !== false ? (
                        <Check className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-body-sm ${feature.included !== false ? 'text-neutral-300' : 'text-neutral-600'}`}>
                        {feature.feature}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {plan.cta?.label && plan.cta?.url && (
                <motion.a
                  href={plan.cta.url}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-center py-3 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'glass glass-hover'
                  }`}
                >
                  {plan.cta.label}
                </motion.a>
              )}
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
