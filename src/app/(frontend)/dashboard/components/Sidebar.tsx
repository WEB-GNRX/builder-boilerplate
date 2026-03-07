'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

interface SidebarProps {
  userName: string
  userEmail: string
}

const collections = [
  {
    label: 'Pages',
    href: '/admin/collections/pages',
    icon: '📄',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    label: 'Media',
    href: '/admin/collections/media',
    icon: '🖼️',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    label: 'Navigation',
    href: '/admin/collections/navigation',
    icon: '🧭',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    label: 'Users',
    href: '/admin/collections/users',
    icon: '👤',
    color: 'bg-yellow-100 text-yellow-600',
  },
]

const globals = [
  {
    label: 'Site Settings',
    href: '/admin/globals/site-settings',
    icon: '⚙️',
    color: 'bg-neutral-100 text-neutral-600',
  },
  {
    label: 'Footer',
    href: '/admin/globals/footer',
    icon: '🔗',
    color: 'bg-neutral-100 text-neutral-600',
  },
]

const navLinks = [
  { label: 'Dashboard', href: '/dashboard', icon: '◉' },
]

export function Sidebar({ userName, userEmail }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await fetch('/api/users/logout', { method: 'POST' })
    } catch {
      // ignore
    }
    router.push('/admin/login')
  }

  const sidebarContent = (
    <aside className="flex flex-col h-full w-60 bg-white border-r border-[#eaedf2]">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-[#eaedf2]">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary-500 text-white font-bold text-lg font-display shadow-sm">
          B
        </div>
        <span className="text-[#1a1d2b] font-semibold text-[15px] tracking-tight font-display">
          Builder
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {/* Overview */}
        <div>
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all min-h-[44px] ${
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-[#6b7280] hover:bg-neutral-50 hover:text-[#1a1d2b]'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Collections */}
        <div>
          <p className="px-3 mb-1.5 text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider">
            Collections
          </p>
          <div className="space-y-0.5">
            {collections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-[#6b7280] hover:bg-neutral-50 hover:text-[#1a1d2b] transition-all min-h-[44px]"
              >
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-md text-xs ${item.color}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Globals */}
        <div>
          <p className="px-3 mb-1.5 text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider">
            Globals
          </p>
          <div className="space-y-0.5">
            {globals.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-[#6b7280] hover:bg-neutral-50 hover:text-[#1a1d2b] transition-all min-h-[44px]"
              >
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-md text-xs ${item.color}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* User footer */}
      <div className="px-3 py-4 border-t border-[#eaedf2]">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 text-[13px] font-bold shrink-0">
            {userName?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-[#1a1d2b] truncate">{userName}</p>
            <p className="text-[11px] text-[#6b7280] truncate">{userEmail}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-[#6b7280] hover:bg-red-50 hover:text-red-600 transition-all min-h-[44px]"
        >
          <span className="text-base">→</span>
          Sign out
        </button>
      </div>
    </aside>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-60 lg:flex-col lg:fixed lg:inset-y-0 lg:z-20">
        {sidebarContent}
      </div>

      {/* Mobile hamburger */}
      <div className="lg:hidden fixed top-0 left-0 z-30 flex items-center px-4 h-14">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-lg text-[#1a1d2b] hover:bg-neutral-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-20 flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-30 flex flex-col w-60 h-full animate-slide-down">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  )
}
