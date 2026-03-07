import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

interface HeaderProps {
  breadcrumbs: Crumb[]
}

export function Header({ breadcrumbs }: HeaderProps) {
  return (
    <header className="h-14 flex items-center justify-between px-6 bg-[#fafbfc] border-b border-[#eaedf2] sticky top-0 z-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[13px]">
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-[#6b7280]">/</span>}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="text-[#6b7280] hover:text-[#1a1d2b] transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="font-medium text-[#1a1d2b]">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      {/* Quick actions */}
      <div className="flex items-center gap-2">
        <Link
          href="/admin/collections/pages/create"
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary-500 text-white text-[12px] font-medium hover:bg-primary-600 transition-colors shadow-sm min-h-[36px]"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Page
        </Link>
        <Link
          href="/admin"
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#eaedf2] bg-white text-[#6b7280] text-[12px] font-medium hover:bg-neutral-50 hover:text-[#1a1d2b] transition-colors min-h-[36px]"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Admin
        </Link>
      </div>
    </header>
  )
}
