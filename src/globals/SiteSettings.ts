import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'My Website',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'colors',
      type: 'group',
      fields: [
        { name: 'primary', type: 'text', defaultValue: '#5c7cfa' },
        { name: 'secondary', type: 'text', defaultValue: '#f06595' },
        { name: 'accent', type: 'text', defaultValue: '#20c997' },
      ],
    },
    {
      name: 'companyInfo',
      type: 'group',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'address', type: 'textarea' },
        { name: 'phone', type: 'text' },
        { name: 'email', type: 'text' },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'TikTok', value: 'tiktok' },
          ],
        },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'scripts',
      type: 'group',
      fields: [
        { name: 'headerScripts', type: 'code', admin: { language: 'html', description: 'Scripts injected in <head>' } },
        { name: 'footerScripts', type: 'code', admin: { language: 'html', description: 'Scripts injected before </body>' } },
        { name: 'googleAnalyticsId', type: 'text' },
        { name: 'metaPixelId', type: 'text' },
      ],
    },
  ],
}
