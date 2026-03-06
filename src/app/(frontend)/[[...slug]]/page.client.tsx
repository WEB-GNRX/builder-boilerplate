'use client'

import { Header } from '@/components/layout/Header'
import { FooterLayout } from '@/components/layout/Footer'
import { RenderBlocks } from '@/components/RenderBlocks'

interface PageClientProps {
  page: any
  navigation: any
  siteSettings: any
  footer: any
}

export function PageClient({ page, navigation, siteSettings, footer }: PageClientProps) {
  const siteName = siteSettings?.siteName || 'Builder'

  return (
    <>
      <Header
        siteName={siteName}
        items={navigation?.items || []}
        ctaButton={navigation?.ctaButton}
      />
      
      <main>
        <RenderBlocks blocks={page?.sections} />
      </main>

      <FooterLayout
        siteName={siteName}
        columns={footer?.columns}
        copyright={footer?.copyright}
        bottomLinks={footer?.bottomLinks}
      />
    </>
  )
}
