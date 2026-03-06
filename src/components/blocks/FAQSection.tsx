'use client'

import { ScrollReveal, StaggerChildren, fadeInUp } from '../motion'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  items?: FAQItem[] | null
}

export function FAQSection({ eyebrow, heading, description, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!items?.length) return null

  return (
    <section className="section-padding relative">
      <div className="container-tight">
        <ScrollReveal className="text-center mb-16">
          {eyebrow && <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>}
          {heading && <h2 className="text-display-lg font-display mb-4">{heading}</h2>}
          {description && <p className="text-body-lg text-neutral-400">{description}</p>}
        </ScrollReveal>

        <StaggerChildren className="space-y-3">
          {items.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-body-lg font-medium pr-4">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-neutral-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 text-body-md text-neutral-400 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
