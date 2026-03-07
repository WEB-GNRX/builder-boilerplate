import type { Metadata } from 'next'
import { getAuthenticatedUser } from './auth'
import { Sidebar } from './components/Sidebar'

export const metadata: Metadata = {
  title: 'Dashboard — Builder',
  description: 'Manage your website content',
  robots: { index: false, follow: false },
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = await getAuthenticatedUser()

  const userName =
    typeof user === 'object' && user !== null
      ? (user as { name?: string; email?: string }).name ||
        (user as { email?: string }).email?.split('@')[0] ||
        'User'
      : 'User'

  const userEmail =
    typeof user === 'object' && user !== null
      ? (user as { email?: string }).email || ''
      : ''

  return (
    <div className="min-h-screen bg-[#fafbfc] font-body">
      {/* Sidebar */}
      <Sidebar userName={userName} userEmail={userEmail} />

      {/* Main content offset */}
      <div className="lg:pl-60 flex flex-col min-h-screen">
        {/* Mobile top spacing for hamburger */}
        <div className="lg:hidden h-14 border-b border-[#eaedf2] bg-[#fafbfc] flex items-center justify-end px-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-100 text-primary-600 text-[12px] font-bold">
              {userName?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <span className="text-[13px] font-medium text-[#1a1d2b]">{userName}</span>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
