import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

/**
 * Scrollt bei Routenwechsel automatisch nach oben. React Router v6 tut das
 * nicht von sich aus — ohne diesen Effekt bleibt die Scroll-Position der
 * vorigen Seite erhalten, was nach einem Tab-Wechsel meist falsch wirkt.
 */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export function AppLayout() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-paper bg-graph-paper">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-8">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  )
}
