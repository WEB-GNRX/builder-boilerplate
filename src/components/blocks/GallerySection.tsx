'use client'

import { ScrollReveal, StaggerChildren, fadeInUp } from '../motion'
import { motion } from 'framer-motion'

interface GalleryImage {
  image: { url?: string; alt?: string }
  caption?: string | null
}

interface GalleryProps {
  eyebrow?: string | null
  heading?: string | null
  layout?: 'grid' | 'masonry' | null
  images?: GalleryImage[] | null
}

export function GallerySection({ eyebrow, heading, images }: GalleryProps) {
  if (!images?.length) return null

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-16">
          {eyebrow && <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>}
          {heading && <h2 className="text-display-lg font-display">{heading}</h2>}
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="aspect-square relative">
                {item.image?.url ? (
                  <img
                    src={item.image.url}
                    alt={item.image.alt || ''}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800" />
                )}
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                {item.caption && (
                  <span className="text-body-sm text-white">{item.caption}</span>
                )}
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
