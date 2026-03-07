import { getAuthenticatedUser } from './auth'
import { StatCard } from './components/StatCard'
import { ActivityFeed } from './components/ActivityFeed'
import { Header } from './components/Header'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const collectionCards = [
  {
    key: 'pages' as const,
    label: 'Pages',
    icon: '📄',
    iconBg: 'bg-primary-50 text-primary-500',
    accent: 'bg-primary-50 text-primary-600',
    viewHref: '/admin/collections/pages',
    createHref: '/admin/collections/pages/create',
  },
  {
    key: 'media' as const,
    label: 'Media Files',
    icon: '🖼️',
    iconBg: 'bg-secondary-50 text-secondary-500',
    accent: 'bg-secondary-50 text-secondary-600',
    viewHref: '/admin/collections/media',
    createHref: '/admin/collections/media/create',
  },
  {
    key: 'navigation' as const,
    label: 'Navigations',
    icon: '🧭',
    iconBg: 'bg-accent-50 text-accent-500',
    accent: 'bg-accent-50 text-accent-600',
    viewHref: '/admin/collections/navigation',
    createHref: '/admin/collections/navigation/create',
  },
  {
    key: 'users' as const,
    label: 'Users',
    icon: '👤',
    iconBg: 'bg-yellow-50 text-yellow-600',
    accent: 'bg-yellow-50 text-yellow-700',
    viewHref: '/admin/collections/users',
    createHref: '/admin/collections/users/create',
  },
]

const globalCards = [
  {
    label: 'Site Settings',
    href: '/admin/globals/site-settings',
    icon: '⚙️',
    description: 'SEO, social, analytics',
    iconBg: 'bg-neutral-100',
  },
  {
    label: 'Footer',
    href: '/admin/globals/footer',
    icon: '🔗',
    description: 'Links & legal text',
    iconBg: 'bg-neutral-100',
  },
]

export default async function DashboardPage() {
  const { user, payload } = await getAuthenticatedUser()

  const [pagesCount, mediaCount, navigationCount, usersCount] = await Promise.all([
    payload.count({ collection: 'pages' }),
    payload.count({ collection: 'media' }),
    payload.count({ collection: 'navigation' }),
    payload.count({ collection: 'users' }),
  ])

  const recentPagesResult = await payload.find({
    collection: 'pages',
    limit: 5,
    sort: '-updatedAt',
  })

  const counts = {
    pages: pagesCount.totalDocs,
    media: mediaCount.totalDocs,
    navigation: navigationCount.totalDocs,
    users: usersCount.totalDocs,
  }

  const userName =
    typeof user === 'object' && user !== null
      ? (user as { name?: string; email?: string }).name ||
        (user as { email?: string }).email?.split('@')[0] ||
        'there'
      : 'there'

  const recentPages = recentPagesResult.docs.map((page) => ({
    id: String(page.id),
    title: (page as { title?: string }).title || 'Untitled',
    slug: (page as { slug?: string }).slug,
    updatedAt: page.updatedAt,
  }))

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div>
      <Header breadcrumbs={[{ label: 'Builder', href: '/dashboard' }, { label: 'Overview' }]} />

      <div className="px-6 py-8 max-w-7xl mx-auto">
        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="text-[24px] font-bold text-[#1a1d2b] font-display tracking-tight mb-1">
            {greeting}, {userName} 👋
          </h1>
          <p className="text-[14px] text-[#6b7280]">
            Here&apos;s what&apos;s happening with your website today.
          </p>
        </div>

        {/* Quick stats banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Total Pages', value: counts.pages, color: 'text-primary-600', bg: 'bg-primary-50' },
            { label: 'Media Files', value: counts.media, color: 'text-secondary-600', bg: 'bg-secondary-50' },
            { label: 'Navigations', value: counts.navigation, color: 'text-accent-600', bg: 'bg-accent-50' },
            { label: 'Team Members', value: counts.users, color: 'text-yellow-600', bg: 'bg-yellow-50' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.bg} rounded-xl px-4 py-3 flex items-center gap-3`}
            >
              <div className="flex-1">
                <p className={`text-[22px] font-bold ${stat.color} font-display leading-none`}>
                  {stat.value}
                </p>
                <p className="text-[11px] font-medium text-[#6b7280] mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Collections grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px] font-semibold text-[#1a1d2b]">Collections</h2>
            <Link
              href="/admin"
              className="text-[12px] font-medium text-[#6b7280] hover:text-[#1a1d2b] transition-colors"
            >
              Open admin →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {collectionCards.map((card) => (
              <StatCard
                key={card.key}
                label={card.label}
                count={counts[card.key]}
                icon={card.icon}
                iconBg={card.iconBg}
                accent={card.accent}
                viewHref={card.viewHref}
                createHref={card.createHref}
              />
            ))}
          </div>
        </div>

        {/* Bottom grid: globals + activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Globals */}
          <div className="lg:col-span-1">
            <h2 className="text-[16px] font-semibold text-[#1a1d2b] mb-4">Globals</h2>
            <div className="space-y-3">
              {globalCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-4 bg-white rounded-2xl border border-[#eaedf2] px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl text-xl ${item.iconBg} shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-[#1a1d2b]">{item.label}</p>
                    <p className="text-[12px] text-[#6b7280] mt-0.5">{item.description}</p>
                  </div>
                  <svg
                    className="w-4 h-4 text-[#6b7280] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}

              {/* Quick links */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-5 text-white">
                <p className="text-[13px] font-semibold mb-1">Need help?</p>
                <p className="text-[12px] text-primary-100 mb-3">
                  Access Payload docs or your admin panel.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://payloadcms.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[12px] font-medium text-white/90 hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Payload Docs ↗
                  </a>
                  <Link
                    href="/admin"
                    className="flex items-center gap-2 text-[12px] font-medium text-white/90 hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Admin Panel →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Activity feed */}
          <div className="lg:col-span-2">
            <h2 className="text-[16px] font-semibold text-[#1a1d2b] mb-4">Recent Pages</h2>
            <ActivityFeed pages={recentPages} />
          </div>
        </div>
      </div>
    </div>
  )
}
