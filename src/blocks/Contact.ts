import type { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
  labels: { singular: 'Contact', plural: 'Contact Sections' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'contactInfo',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text' },
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'formFields',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'tel' },
            { label: 'Textarea', value: 'textarea' },
          ],
          defaultValue: 'text',
        },
        { name: 'required', type: 'checkbox', defaultValue: false },
        { name: 'placeholder', type: 'text' },
      ],
    },
    {
      name: 'submitLabel',
      type: 'text',
      defaultValue: 'Send Message',
    },
  ],
}
