import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { useAppState } from '@/context/AppContext'
import { Dashboard } from '@/pages/Dashboard'
import { LessonView } from '@/pages/LessonView'
import { TopicDetail } from '@/pages/TopicDetail'
import { NotFound } from '@/components/NotFound'

// Eager-loaded: erster Entry (Dashboard), häufigster Flow (TopicDetail, LessonView),
// 404 (klein). Alles andere wird bei Bedarf nachgeladen, um das Initial-Bundle
// schlanker und den First-Paint auf Mobile schneller zu machen.
const lazyNamed = (loader, name) => lazy(() => loader().then((m) => ({ default: m[name] })))

const Onboarding     = lazyNamed(() => import('@/pages/Onboarding'),     'Onboarding')
const PracticePage   = lazyNamed(() => import('@/pages/PracticePage'),   'PracticePage')
const Skilltree      = lazyNamed(() => import('@/pages/Skilltree'),      'Skilltree')
const TopicEntryQuiz = lazyNamed(() => import('@/pages/TopicEntryQuiz'), 'TopicEntryQuiz')
const Formelsammlung = lazyNamed(() => import('@/pages/Formelsammlung'), 'Formelsammlung')
const Achievements   = lazyNamed(() => import('@/pages/Achievements'),   'Achievements')
const More           = lazyNamed(() => import('@/pages/More'),           'More')
const Settings       = lazyNamed(() => import('@/pages/Settings'),       'Settings')
const LessonSummary  = lazyNamed(() => import('@/pages/LessonSummary'),  'LessonSummary')
const Lehrplan       = lazyNamed(() => import('@/pages/Lehrplan'),       'Lehrplan')

/**
 * Dezenter Lade-Platzhalter, wenn eine Route-Chunk gerade nachgeladen wird.
 * Bewusst ohne Spinner — auf Fast-Connections sieht man ihn kaum, auf langsamen
 * gibt er genug Feedback ohne zu flackern.
 */
function RouteFallback() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
      <div className="h-8 w-40 rounded bg-surface-200 dark:bg-surface-700 animate-pulse mb-4" />
      <div className="h-4 w-full rounded bg-surface-200 dark:bg-surface-700 animate-pulse mb-2" />
      <div className="h-4 w-3/4 rounded bg-surface-200 dark:bg-surface-700 animate-pulse" />
    </div>
  )
}

function RequireUser() {
  const { user } = useAppState()

  if (!user?.name) {
    return <Navigate to="/onboarding" replace />
  }

  return <AppLayout />
}

function OnboardingRoute() {
  const { user } = useAppState()

  if (user?.name) {
    return <Navigate to="/" replace />
  }

  return <Onboarding />
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/onboarding" element={<OnboardingRoute />} />

        <Route element={<RequireUser />}>
          <Route index element={<Dashboard />} />
          <Route path="topics" element={<Navigate to="/" replace />} />
          <Route path="lernpfad" element={<Skilltree />} />
          <Route path="lehrplan" element={<Lehrplan />} />
          <Route path="formelsammlung" element={<Formelsammlung />} />
          <Route path="erfolge" element={<Achievements />} />
          <Route path="mehr" element={<More />} />
          <Route path="topics/:topicId" element={<TopicDetail />} />
          <Route path="topics/:topicId/einstiegstest" element={<TopicEntryQuiz />} />
          <Route path="topics/:topicId/:lessonId" element={<LessonView />} />
          <Route path="topics/:topicId/:lessonId/zusammenfassung" element={<LessonSummary />} />
          <Route path="üben" element={<PracticePage />} />
          <Route path="review" element={<Navigate to="/üben" replace />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
