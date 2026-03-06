import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero'
import { FeaturesBlock } from '../blocks/Features'
import { AboutBlock } from '../blocks/About'
import { ServicesBlock } from '../blocks/Services'
import { TestimonialsBlock } from '../blocks/Testimonials'
import { CTABlock } from '../blocks/CTA'
import { ContactBlock } from '../blocks/Contact'
import { FAQBlock } from '../blocks/FAQ'
import { StatsBlock } from '../blocks/Stats'
import { GalleryBlock } from '../blocks/Gallery'
import { TeamBlock } from '../blocks/Team'
import { LogoCloudBlock } from '../blocks/LogoCloud'
import { PricingBlock } from '../blocks/Pricing'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'sections',
      type: 'blocks',
      blocks: [
        HeroBlock,
        FeaturesBlock,
        AboutBlock,
        ServicesBlock,
        TestimonialsBlock,
        CTABlock,
        ContactBlock,
        FAQBlock,
        StatsBlock,
        GalleryBlock,
        TeamBlock,
        LogoCloudBlock,
        PricingBlock,
      ],
    },
  ],
}
