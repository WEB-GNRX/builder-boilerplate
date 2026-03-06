'use client'

import {
  HeroSection,
  FeaturesSection,
  AboutSection,
  ServicesSection,
  TestimonialsSection,
  CTASection,
  ContactSection,
  FAQSection,
  StatsSection,
  GallerySection,
  TeamSection,
  LogoCloudSection,
  PricingSection,
} from './blocks'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: Record<string, React.ComponentType<any>> = {
  hero: HeroSection,
  features: FeaturesSection,
  about: AboutSection,
  services: ServicesSection,
  testimonials: TestimonialsSection,
  cta: CTASection,
  contact: ContactSection,
  faq: FAQSection,
  stats: StatsSection,
  gallery: GallerySection,
  team: TeamSection,
  logoCloud: LogoCloudSection,
  pricing: PricingSection,
}

interface Block {
  blockType: string
  id?: string
  [key: string]: unknown
}

interface RenderBlocksProps {
  blocks?: Block[] | null
}

export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks?.length) return null

  return (
    <>
      {blocks.map((block, i) => {
        const Component = blockComponents[block.blockType]
        if (!Component) return null

        return <Component key={block.id || i} {...block} />
      })}
    </>
  )
}
