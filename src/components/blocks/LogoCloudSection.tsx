'use client'

import { ScrollReveal } from '../motion'

interface Logo {
  name: string
  logo?: { url?: string; alt?: string } | null
  url?: string | null
}

interface LogoCloudProps {
  heading?: string | null
  logos?: Logo[] | null
  variant?: 'scroll' | 'grid' | null
}

export function LogoCloudSection({ heading, logos, variant = 'scroll' }: LogoCloudProps) {
  if (!logos?.length) return null

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-10">
          {heading && <p className="text-body-md text-neutral-500 uppercase tracking-wider">{heading}</p>}
        </ScrollReveal>

        {variant === 'scroll' ? (
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

            <div className="overflow-hidden">
              <div className="flex animate-marquee gap-16 items-center">
                {/* Double the logos for seamless loop */}
                {[...logos, ...logos].map((logo, i) => (
                  <div key={i} className="flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0">
                    {logo.logo?.url ? (
                      <img src={logo.logo.url} alt={logo.name} className="h-8 md:h-10 w-auto" />
                    ) : (
                      <span className="text-body-lg font-display font-bold text-neutral-400 whitespace-nowrap">{logo.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo, i) => (
              <div key={i} className="opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0">
                {logo.logo?.url ? (
                  <img src={logo.logo.url} alt={logo.name} className="h-8 md:h-10 w-auto" />
                ) : (
                  <span className="text-body-lg font-display font-bold text-neutral-400">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
