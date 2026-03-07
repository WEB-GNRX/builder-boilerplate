import Link from 'next/link'

interface StatCardProps {
  label: string
  count: number
  icon: string
  iconBg: string
  viewHref: string
  createHref: string
  accent: string
}

export function StatCard({
  label,
  count,
  icon,
  iconBg,
  viewHref,
  createHref,
  accent,
}: StatCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-[#eaedf2] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between mb-5">
        <div className={`flex items-center justify-center w-11 h-11 rounded-xl text-xl ${iconBg}`}>
          {icon}
        </div>
        <span
          className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${accent}`}
        >
          Collection
        </span>
      </div>

      <div className="mb-5">
        <p className="text-[28px] font-bold text-[#1a1d2b] font-display leading-none mb-1.5">
          {count.toLocaleString()}
        </p>
        <p className="text-[14px] font-medium text-[#6b7280]">{label}</p>
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-[#eaedf2]">
        <Link
          href={viewHref}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-medium text-[#6b7280] hover:bg-neutral-50 hover:text-[#1a1d2b] transition-colors min-h-[36px]"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          View all
        </Link>
        <div className="w-px h-5 bg-[#eaedf2]" />
        <Link
          href={createHref}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-medium text-primary-600 hover:bg-primary-50 transition-colors min-h-[36px]"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create new
        </Link>
      </div>
    </div>
  )
}
