'use client'

import { ScrollReveal } from '../motion'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role?: string | null
  company?: string | null
  avatar?: { url?: string } | null
  rating?: number | null
}

interface TestimonialsProps {
  eyebrow?: string | null
  heading?: string | null
  testimonials?: Testimonial[] | null
}

export function TestimonialsSection({ eyebrow, heading, testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)
  const items = testimonials || []

  useEffect(() => {
    if (items.length <= 1) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [items.length])

  if (!items.length) return null

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length)
  const next = () => setCurrent((c) => (c + 1) % items.length)

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />

      <div className="container-tight relative z-10">
        <ScrollReveal className="text-center mb-16">
          {eyebrow && <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>}
          {heading && <h2 className="text-display-lg font-display">{heading}</h2>}
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <Quote className="absolute -top-2 -left-4 w-16 h-16 text-primary-500/10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              {items[current].rating && (
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: items[current].rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-display-xs md:text-display-sm font-display text-neutral-200 mb-8 text-balance leading-relaxed">
                &ldquo;{items[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                {items[current].avatar?.url ? (
                  <img
                    src={items[current].avatar!.url}
                    alt={items[current].author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500/20"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                    {items[current].author[0]}
                  </div>
                )}
                <div className="text-left">
                  <div className="font-medium text-white">{items[current].author}</div>
                  <div className="text-body-sm text-neutral-500">
                    {items[current].role}{items[current].company ? ` at ${items[current].company}` : ''}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {items.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button onClick={prev} className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-primary-500' : 'bg-neutral-600 hover:bg-neutral-500'
                    }`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
