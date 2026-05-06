import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { MobileNav } from './MobileNav'
import { useGamificationSync } from '@/hooks/useGamificationSync'
import { LevelUpModal } from '@/components/gamification/LevelUpModal'

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

const LESSON_PATH_RE = /^\/topics\/[^/]+\/[^/]+(\/|$)/

export function AppLayout() {
  const { pathname } = useLocation()
  // Nur das erste Segment als Fade-Key, damit In-Page-Navigation (z.B. Step-Wechsel
  // innerhalb einer Lektion via querystring/hash) nicht bei jedem Sub-State neu fadet.
  const fadeKey = '/' + (pathname.split('/')[1] ?? '')
  const inLesson = LESSON_PATH_RE.test(pathname)

  const { pendingLevelUp, acknowledgeLevelUp } = useGamificationSync()

  // iOS Safari behält nach `orientationchange` (Landscape→Portrait) gelegentlich
  // einen Layout-Zoom > 1.0. Toggle-Trick: kurzzeitig `maximum-scale=1` setzen
  // zwingt den Layout-Viewport zurück auf 1.0, danach Original wiederherstellen.
  useEffect(() => {
    const reset = () => {
      const vp = document.querySelector('meta[name="viewport"]')
      if (!vp) return
      const original = vp.getAttribute('content') ?? ''
      vp.setAttribute('content', original + ', maximum-scale=1')
      requestAnimationFrame(() => vp.setAttribute('content', original))
    }
    window.addEventListener('orientationchange', reset)
    return () => window.removeEventListener('orientationchange', reset)
  }, [])

  return (
    <div className="min-h-[100dvh] flex flex-col bg-paper bg-graph-paper">
      <ScrollToTop />
      <Header />
      <main
        key={fadeKey}
        className={
          inLesson
            ? 'flex-1 motion-safe:animate-fade-in'
            : 'flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-8 motion-safe:animate-fade-in'
        }
      >
        <Outlet />
      </main>
      {!inLesson && <MobileNav />}
      <LevelUpModal
        isOpen={!!pendingLevelUp}
        onClose={acknowledgeLevelUp}
        level={pendingLevelUp?.to ?? 1}
        rank={pendingLevelUp?.rank ?? ''}
      />
    </div>
  )
}
