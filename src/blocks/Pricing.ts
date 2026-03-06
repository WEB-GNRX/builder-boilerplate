import type { Block } from 'payload'

export const PricingBlock: Block = {
  slug: 'pricing',
  labels: { singular: 'Pricing', plural: 'Pricing Sections' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'showToggle', type: 'checkbox', defaultValue: true, admin: { description: 'Show monthly/yearly toggle' } },
    {
      name: 'plans',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'description', type: 'text' },
        { name: 'priceMonthly', type: 'text', required: true },
        { name: 'priceYearly', type: 'text' },
        { name: 'popular', type: 'checkbox', defaultValue: false },
        {
          name: 'features',
          type: 'array',
          fields: [
            { name: 'feature', type: 'text', required: true },
            { name: 'included', type: 'checkbox', defaultValue: true },
          ],
        },
        {
          name: 'cta',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', defaultValue: 'Get Started' },
            { name: 'url', type: 'text' },
          ],
        },
      ],
    },
  ],
}
