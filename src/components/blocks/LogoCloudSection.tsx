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

const badgeColors = [
  'border-primary-500/20 bg-primary-500/5 text-primary-300 hover:border-primary-500/50 hover:bg-primary-500/10',
  'border-secondary-500/20 bg-secondary-500/5 text-secondary-300 hover:border-secondary-500/50 hover:bg-secondary-500/10',
  'border-accent-500/20 bg-accent-500/5 text-accent-300 hover:border-accent-500/50 hover:bg-accent-500/10',
  'border-white/10 bg-white/5 text-neutral-300 hover:border-white/25 hover:bg-white/10',
  'border-primary-500/20 bg-primary-500/5 text-primary-300 hover:border-primary-500/50 hover:bg-primary-500/10',
  'border-accent-500/20 bg-accent-500/5 text-accent-300 hover:border-accent-500/50 hover:bg-accent-500/10',
]

function LogoBadge({ logo, index }: { logo: Logo; index: number }) {
  const colorClass = badgeColors[index % badgeColors.length]

  const inner = logo.logo?.url ? (
    <img src={logo.logo.url} alt={logo.name} className="h-6 md:h-7 w-auto" />
  ) : (
    <span className={`text-body-sm font-display font-semibold tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 whitespace-nowrap cursor-default ${colorClass}`}>
      {logo.name}
    </span>
  )

  if (logo.url) {
    return (
      <a
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 transition-transform duration-300 hover:-translate-y-0.5"
      >
        {inner}
      </a>
    )
  }

  return <div className="flex-shrink-0">{inner}</div>
}

export function LogoCloudSection({ heading, logos, variant = 'scroll' }: LogoCloudProps) {
  if (!logos?.length) return null

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle separator lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="container-wide">
        <ScrollReveal className="text-center mb-10">
          {heading && (
            <p className="text-body-sm text-neutral-600 uppercase tracking-widest font-medium">
              {heading}
            </p>
          )}
        </ScrollReveal>

        {variant === 'scroll' ? (
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex animate-marquee gap-5 items-center w-max">
                {/* Double for seamless loop */}
                {[...logos, ...logos].map((logo, i) => (
                  <LogoBadge key={i} logo={logo} index={i % logos.length} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {logos.map((logo, i) =>
              logo.logo?.url ? (
                <div
                  key={i}
                  className="opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <img src={logo.logo.url} alt={logo.name} className="h-8 md:h-10 w-auto" />
                </div>
              ) : (
                <LogoBadge key={i} logo={logo} index={i} />
              ),
            )}
          </div>
        )}
      </div>
    </section>
  )
}
