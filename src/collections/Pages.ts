import type { CollectionConfig } from 'payload'
import {
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
} from '../blocks'

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
