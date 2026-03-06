import { notFound } from 'next/navigation'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Metadata } from 'next'
import { PageClient } from './page.client'

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

async function getPage(slug: string) {
  const payload = await getPayload({ config: configPromise })
  
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  return result.docs[0] || null
}

async function getNavigation() {
  const payload = await getPayload({ config: configPromise })
  
  const result = await payload.find({
    collection: 'navigation',
    limit: 1,
  })

  return result.docs[0] || null
}

async function getSiteSettings() {
  const payload = await getPayload({ config: configPromise })
  
  try {
    return await payload.findGlobal({ slug: 'site-settings' })
  } catch {
    return null
  }
}

async function getFooter() {
  const payload = await getPayload({ config: configPromise })
  
  try {
    return await payload.findGlobal({ slug: 'footer' })
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug?.join('/') || 'home'
  const page = await getPage(slug)

  if (!page) return {}

  return {
    title: (page.meta as any)?.title || page.title,
    description: (page.meta as any)?.description || '',
  }
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug?.join('/') || 'home'
  
  const [page, navigation, siteSettings, footer] = await Promise.all([
    getPage(slug),
    getNavigation(),
    getSiteSettings(),
    getFooter(),
  ])

  if (!page) {
    notFound()
  }

  return (
    <PageClient
      page={page}
      navigation={navigation}
      siteSettings={siteSettings}
      footer={footer}
    />
  )
}
