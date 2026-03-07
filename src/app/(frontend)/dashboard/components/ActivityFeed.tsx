import Link from 'next/link'

interface Page {
  id: string
  title: string
  slug?: string
  updatedAt: string
}

interface ActivityFeedProps {
  pages: Page[]
}

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

export function ActivityFeed({ pages }: ActivityFeedProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#eaedf2] shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-[#eaedf2] flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-[#1a1d2b]">Recent Activity</h2>
          <p className="text-[12px] text-[#6b7280] mt-0.5">Latest page updates</p>
        </div>
        <Link
          href="/admin/collections/pages"
          className="text-[12px] font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          View all →
        </Link>
      </div>

      {pages.length === 0 ? (
        <div className="px-6 py-10 text-center">
          <div className="text-4xl mb-3">📄</div>
          <p className="text-[14px] font-medium text-[#1a1d2b] mb-1">No pages yet</p>
          <p className="text-[13px] text-[#6b7280]">Create your first page to get started.</p>
          <Link
            href="/admin/collections/pages/create"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary-500 text-white text-[13px] font-medium hover:bg-primary-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create page
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-[#eaedf2]">
          {pages.map((page) => (
            <li key={page.id}>
              <Link
                href={`/admin/collections/pages/${page.id}`}
                className="flex items-center gap-4 px-6 py-3.5 hover:bg-neutral-50 transition-colors group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-50 text-primary-500 shrink-0 text-[14px]">
                  📄
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1a1d2b] truncate group-hover:text-primary-600 transition-colors">
                    {page.title || 'Untitled'}
                  </p>
                  {page.slug && (
                    <p className="text-[11px] text-[#6b7280] truncate mt-0.5">/{page.slug}</p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[11px] text-[#6b7280]">{timeAgo(page.updatedAt)}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent-600 bg-accent-50 px-1.5 py-0.5 rounded-full">
                    Updated
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
