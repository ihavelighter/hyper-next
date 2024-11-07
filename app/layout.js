import './globals.css'
import 'tailwindcss/tailwind.css'
import { cookies } from 'next/headers'

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export default async function Layout({ children }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'
  return (
    <html lang="en">
      <body className="sky-300">
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main>
            <SidebarTrigger />

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
