import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

export function AppLayout() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-paper bg-graph-paper">
      <Header />
      <main className="flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-8">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  )
}
