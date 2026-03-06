import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

const SEED_KEY = 'builder-seed-2026'

const homeSections = [
  {
    blockType: 'hero',
    variant: 'default',
    eyebrow: 'Welcome to the future',
    heading: 'We Build Digital Experiences That Matter',
    subheading:
      'Transform your business with cutting-edge web solutions. We combine stunning design with powerful technology to create websites that convert visitors into customers.',
    primaryCTA: { label: 'Get Started', url: '/contact' },
    secondaryCTA: { label: 'Learn More', url: '/about' },
    alignment: 'center',
  },
  {
    blockType: 'logoCloud',
    heading: 'Trusted by industry leaders',
    logos: [
      { name: 'Acme Corp' },
      { name: 'Globex' },
      { name: 'Soylent' },
      { name: 'Initech' },
      { name: 'Umbrella' },
      { name: 'Hooli' },
    ],
    variant: 'scroll',
  },
  {
    blockType: 'features',
    eyebrow: 'Why choose us',
    heading: 'Everything you need to succeed online',
    description:
      'Our platform provides all the tools and features you need to build, launch, and grow your digital presence.',
    layout: 'grid',
    features: [
      {
        icon: 'zap',
        title: 'Lightning Fast',
        description:
          'Built on Next.js for blazing performance. Your site loads in milliseconds, keeping visitors engaged.',
      },
      {
        icon: 'shield',
        title: 'Enterprise Security',
        description:
          'Bank-level security with SSL, DDoS protection, and regular security audits to keep your data safe.',
      },
      {
        icon: 'sparkles',
        title: 'AI-Powered',
        description:
          'Leverage artificial intelligence to optimize content, personalize experiences, and drive conversions.',
      },
      {
        icon: 'chart',
        title: 'Analytics Built-in',
        description:
          'Comprehensive analytics dashboard to track visitors, conversions, and ROI in real-time.',
      },
      {
        icon: 'globe',
        title: 'Global CDN',
        description:
          'Content delivered from edge servers worldwide. Fast load times no matter where your visitors are.',
      },
      {
        icon: 'lock',
        title: 'GDPR Compliant',
        description:
          'Full GDPR and privacy compliance built-in. Cookie consent, data handling, and more.',
      },
    ],
  },
  {
    blockType: 'stats',
    heading: 'Numbers that speak for themselves',
    stats: [
      { value: '500', suffix: '+', label: 'Happy Clients' },
      { value: '98', suffix: '%', label: 'Satisfaction Rate' },
      { value: '50', suffix: 'M+', label: 'Revenue Generated' },
      { value: '24', suffix: '/7', label: 'Support Available' },
    ],
    variant: 'gradient',
  },
  {
    blockType: 'cta',
    heading: 'Ready to transform your digital presence?',
    description:
      "Let's create something extraordinary together. Get a free consultation and see how we can help your business grow.",
    primaryButton: { label: 'Start Your Project', url: '/contact' },
    secondaryButton: { label: 'View Our Work', url: '/gallery' },
    variant: 'gradient',
  },
]

const aboutSections = [
  {
    blockType: 'hero',
    variant: 'minimal',
    eyebrow: 'About us',
    heading: "We're on a Mission to Democratize the Web",
    subheading:
      'We believe every business deserves a stunning online presence. Our team combines creativity with technology to make that happen.',
    alignment: 'center',
  },
  {
    blockType: 'about',
    eyebrow: 'Our story',
    heading: 'From startup to industry leader',
    description:
      'Founded in 2016 with a simple mission: make beautiful, high-performance websites accessible to every business. Today, we serve clients across 30+ countries.',
    imagePosition: 'right',
    stats: [
      { value: '2016', label: 'Founded' },
      { value: '30+', label: 'Countries Served' },
      { value: '50+', label: 'Team Members' },
    ],
  },
]

const contactSections = [
  {
    blockType: 'hero',
    variant: 'minimal',
    eyebrow: 'Contact',
    heading: "Let's Start a Conversation",
    subheading:
      "Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.",
    alignment: 'center',
  },
  {
    blockType: 'contact',
    heading: 'Get in touch',
    description: "Fill out the form below and we'll get back to you within 24 hours.",
    contactInfo: [
      {
        icon: 'mail',
        label: 'Email',
        value: 'hello@example.com',
        url: 'mailto:hello@example.com',
      },
    ],
    formFields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'John Doe' },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'john@example.com',
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        required: true,
        placeholder: 'Tell us about your project...',
      },
    ],
    submitLabel: 'Send Message',
  },
]

export async function GET(request: NextRequest) {
  // Verify secret header
  const seedKey = request.headers.get('x-seed-key')
  if (seedKey !== SEED_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await getPayload({ config })
    const results: string[] = []

    // Create admin user
    try {
      const existing = await payload.find({
        collection: 'users',
        where: { email: { equals: 'admin@builder.dev' } },
      })
      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'users',
          data: { email: 'admin@builder.dev', password: 'builder2026' },
        })
        results.push('✅ Admin user created')
      } else {
        results.push('ℹ️ Admin user already exists')
      }
    } catch (e) {
      results.push(`⚠️ Admin user: ${e instanceof Error ? e.message : 'unknown error'}`)
    }

    // Create pages
    const pages = [
      { title: 'Home', slug: 'home', sections: homeSections },
      { title: 'About', slug: 'about', sections: aboutSections },
      { title: 'Contact', slug: 'contact', sections: contactSections },
    ]

    for (const page of pages) {
      try {
        const existing = await payload.find({
          collection: 'pages',
          where: { slug: { equals: page.slug } },
        })
        if (existing.docs.length > 0) {
          await payload.update({
            collection: 'pages',
            id: existing.docs[0].id,
            data: page as any,
          })
          results.push(`✅ Updated page: ${page.title}`)
        } else {
          await payload.create({ collection: 'pages', data: page as any })
          results.push(`✅ Created page: ${page.title}`)
        }
      } catch (e) {
        results.push(
          `❌ Page ${page.title}: ${e instanceof Error ? e.message : 'unknown error'}`,
        )
      }
    }

    // Navigation
    try {
      const nav = await payload.find({ collection: 'navigation' })
      const navData = {
        name: 'Main Navigation',
        items: [
          { label: 'Home', url: '/' },
          { label: 'About', url: '/about' },
          { label: 'Contact', url: '/contact' },
        ],
        ctaButton: { label: 'Get Started', url: '/contact', style: 'primary' },
      }
      if (nav.docs.length > 0) {
        await payload.update({ collection: 'navigation', id: nav.docs[0].id, data: navData })
      } else {
        await payload.create({ collection: 'navigation', data: navData })
      }
      results.push('✅ Navigation created')
    } catch (e) {
      results.push(`❌ Navigation: ${e instanceof Error ? e.message : 'unknown error'}`)
    }

    // Site settings
    try {
      await payload.updateGlobal({
        slug: 'site-settings',
        data: {
          siteName: 'Builder',
          colors: { primary: '#5c7cfa', secondary: '#f06595', accent: '#20c997' },
          companyInfo: {
            name: 'Builder Agency',
            email: 'hello@builder.dev',
            phone: '+1 (555) 123-4567',
            address: '123 Innovation Street\nTech City, TC 12345',
          },
        } as any,
      })
      results.push('✅ Site settings updated')
    } catch (e) {
      results.push(`❌ Site settings: ${e instanceof Error ? e.message : 'unknown error'}`)
    }

    // Footer
    try {
      await payload.updateGlobal({
        slug: 'footer',
        data: {
          columns: [
            {
              title: 'Company',
              links: [
                { label: 'About', url: '/about' },
                { label: 'Contact', url: '/contact' },
              ],
            },
            {
              title: 'Services',
              links: [
                { label: 'Web Design', url: '/services/design' },
                { label: 'Development', url: '/services/development' },
              ],
            },
          ],
          copyright: '© 2026 Builder Agency. All rights reserved.',
          bottomLinks: [
            { label: 'Privacy Policy', url: '/privacy' },
            { label: 'Terms of Service', url: '/terms' },
          ],
        },
      })
      results.push('✅ Footer updated')
    } catch (e) {
      results.push(`❌ Footer: ${e instanceof Error ? e.message : 'unknown error'}`)
    }

    return NextResponse.json({ success: true, results })
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Seed failed' },
      { status: 500 },
    )
  }
}
