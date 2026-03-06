// Seed script - run with: npm run seed
// This creates example pages with block data

import { getPayload } from 'payload'
import config from '../payload.config'

const homeSections = [
  {
    blockType: 'hero',
    variant: 'default',
    eyebrow: 'Welcome to the future',
    heading: 'We Build Digital Experiences That Matter',
    subheading: 'Transform your business with cutting-edge web solutions. We combine stunning design with powerful technology to create websites that convert visitors into customers.',
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
    description: 'Our platform provides all the tools and features you need to build, launch, and grow your digital presence.',
    layout: 'grid',
    features: [
      { icon: 'zap', title: 'Lightning Fast', description: 'Built on Next.js for blazing performance. Your site loads in milliseconds, keeping visitors engaged.' },
      { icon: 'shield', title: 'Enterprise Security', description: 'Bank-level security with SSL, DDoS protection, and regular security audits to keep your data safe.' },
      { icon: 'sparkles', title: 'AI-Powered', description: 'Leverage artificial intelligence to optimize content, personalize experiences, and drive conversions.' },
      { icon: 'chart', title: 'Analytics Built-in', description: 'Comprehensive analytics dashboard to track visitors, conversions, and ROI in real-time.' },
      { icon: 'globe', title: 'Global CDN', description: 'Content delivered from edge servers worldwide. Fast load times no matter where your visitors are.' },
      { icon: 'lock', title: 'GDPR Compliant', description: 'Full GDPR and privacy compliance built-in. Cookie consent, data handling, and more.' },
    ],
  },
  {
    blockType: 'about',
    eyebrow: 'About us',
    heading: 'A decade of digital excellence',
    description: 'We\'re a team of passionate designers, developers, and strategists who believe in the power of great digital experiences. Since 2016, we\'ve helped over 200 businesses transform their online presence and achieve measurable results.',
    imagePosition: 'right',
    stats: [
      { value: '200+', label: 'Projects Delivered' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '15M+', label: 'Users Reached' },
    ],
    cta: { label: 'Our Story', url: '/about' },
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
    blockType: 'testimonials',
    eyebrow: 'Testimonials',
    heading: 'What our clients say',
    testimonials: [
      {
        quote: 'Working with this team transformed our online presence completely. Our conversion rate increased by 340% within the first three months.',
        author: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechFlow',
        rating: 5,
      },
      {
        quote: 'The attention to detail and design quality is unmatched. They delivered a website that truly represents our brand and exceeds our expectations.',
        author: 'Marcus Chen',
        role: 'Marketing Director',
        company: 'InnovateCo',
        rating: 5,
      },
      {
        quote: 'Fast, reliable, and incredibly creative. The best investment we made for our digital strategy this year.',
        author: 'Emma Williams',
        role: 'Founder',
        company: 'GreenLeaf',
        rating: 5,
      },
    ],
  },
  {
    blockType: 'cta',
    heading: 'Ready to transform your digital presence?',
    description: 'Let\'s create something extraordinary together. Get a free consultation and see how we can help your business grow.',
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
    heading: 'We\'re on a Mission to Democratize the Web',
    subheading: 'We believe every business deserves a stunning online presence. Our team combines creativity with technology to make that happen.',
    alignment: 'center',
  },
  {
    blockType: 'team',
    eyebrow: 'Our team',
    heading: 'Meet the people behind the magic',
    description: 'A diverse team of thinkers, makers, and dreamers dedicated to crafting exceptional digital experiences.',
    members: [
      { name: 'Alex Rivera', role: 'CEO & Founder', bio: 'Visionary leader with 15+ years in digital transformation.' },
      { name: 'Sarah Kim', role: 'Head of Design', bio: 'Award-winning designer focused on human-centered experiences.' },
      { name: 'Marcus Johnson', role: 'Lead Developer', bio: 'Full-stack architect specializing in Next.js and React.' },
      { name: 'Emma Chen', role: 'Strategy Director', bio: 'Data-driven strategist turning insights into growth.' },
    ],
  },
  {
    blockType: 'about',
    eyebrow: 'Our story',
    heading: 'From startup to industry leader',
    description: 'Founded in 2016 with a simple mission: make beautiful, high-performance websites accessible to every business. Today, we serve clients across 30+ countries and have been recognized by Awwwards, CSS Design Awards, and FWA for our work.',
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
    heading: 'Let\'s Start a Conversation',
    subheading: 'Have a project in mind? We\'d love to hear about it. Get in touch and let\'s create something amazing together.',
    alignment: 'center',
  },
  {
    blockType: 'contact',
    heading: 'Get in touch',
    description: 'Fill out the form below and we\'ll get back to you within 24 hours.',
    contactInfo: [
      { icon: 'mail', label: 'Email', value: 'hello@example.com', url: 'mailto:hello@example.com' },
      { icon: 'phone', label: 'Phone', value: '+1 (555) 123-4567', url: 'tel:+15551234567' },
      { icon: 'location', label: 'Office', value: '123 Innovation Street, Tech City, TC 12345' },
    ],
    formFields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'John Doe' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'john@example.com' },
      { name: 'phone', label: 'Phone', type: 'tel', required: false, placeholder: '+1 (555) 000-0000' },
      { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Tell us about your project...' },
    ],
    submitLabel: 'Send Message',
  },
  {
    blockType: 'faq',
    eyebrow: 'FAQ',
    heading: 'Frequently asked questions',
    description: 'Can\'t find the answer you\'re looking for? Reach out to our team.',
    items: [
      { question: 'How long does a typical project take?', answer: 'Most projects are completed within 4-8 weeks, depending on complexity. We\'ll provide a detailed timeline during our initial consultation.' },
      { question: 'What is your pricing model?', answer: 'We offer project-based pricing tailored to your specific needs. Contact us for a free quote and we\'ll provide a transparent breakdown of costs.' },
      { question: 'Do you provide ongoing support?', answer: 'Yes! We offer various maintenance and support packages to ensure your website stays updated, secure, and performing at its best.' },
      { question: 'Can you help with SEO and marketing?', answer: 'Absolutely. Every website we build is optimized for search engines. We also offer additional SEO and digital marketing services.' },
      { question: 'What technologies do you use?', answer: 'We primarily work with Next.js, React, TypeScript, and Payload CMS. Our tech stack is modern, performant, and built to scale.' },
    ],
  },
]

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting seed...')

  // Create admin user
  try {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@builder.dev',
        password: 'builder2026',
      },
    })
    console.log('✅ Admin user created')
  } catch {
    console.log('ℹ️ Admin user already exists')
  }

  // Create pages
  const pages = [
    { title: 'Home', slug: 'home', sections: homeSections },
    { title: 'About', slug: 'about', sections: aboutSections },
    { title: 'Contact', slug: 'contact', sections: contactSections },
  ]

  for (const page of pages) {
    try {
      const existing = await payload.find({ collection: 'pages', where: { slug: { equals: page.slug } } })
      if (existing.docs.length > 0) {
        await payload.update({ collection: 'pages', id: existing.docs[0].id, data: page as any })
        console.log(`✅ Updated page: ${page.title}`)
      } else {
        await payload.create({ collection: 'pages', data: page as any })
        console.log(`✅ Created page: ${page.title}`)
      }
    } catch (e) {
      console.error(`❌ Error with page ${page.title}:`, e)
    }
  }

  // Create navigation
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
    console.log('✅ Navigation created')
  } catch (e) {
    console.error('❌ Navigation error:', e)
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
    console.log('✅ Site settings updated')
  } catch (e) {
    console.error('❌ Site settings error:', e)
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
              { label: 'Careers', url: '/careers' },
              { label: 'Blog', url: '/blog' },
            ],
          },
          {
            title: 'Services',
            links: [
              { label: 'Web Design', url: '/services/design' },
              { label: 'Development', url: '/services/development' },
              { label: 'SEO', url: '/services/seo' },
            ],
          },
          {
            title: 'Support',
            links: [
              { label: 'Contact', url: '/contact' },
              { label: 'FAQ', url: '/contact#faq' },
              { label: 'Documentation', url: '/docs' },
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
    console.log('✅ Footer updated')
  } catch (e) {
    console.error('❌ Footer error:', e)
  }

  console.log('\n🎉 Seed complete!')
  process.exit(0)
}

seed().catch(console.error)
