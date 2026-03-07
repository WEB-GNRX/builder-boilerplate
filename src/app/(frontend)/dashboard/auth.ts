import { headers, cookies } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'
import { redirect } from 'next/navigation'

export async function getAuthenticatedUser() {
  const payload = await getPayload({ config })
  const headersList = await headers()
  const cookieStore = await cookies()

  // Get Payload token from cookies
  const token = cookieStore.get('payload-token')?.value

  if (!token) {
    redirect('/admin/login?redirect=/dashboard')
  }

  try {
    // Verify token and get user
    const { user } = await payload.auth({ headers: headersList })
    if (!user) redirect('/admin/login?redirect=/dashboard')
    return { user, payload }
  } catch {
    redirect('/admin/login?redirect=/dashboard')
  }
}
