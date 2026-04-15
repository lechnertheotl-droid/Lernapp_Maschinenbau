import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { useAppState } from '@/context/AppContext'
import { Dashboard } from '@/pages/Dashboard'
import { LessonView } from '@/pages/LessonView'
import { LessonSummary } from '@/pages/LessonSummary'
import { Onboarding } from '@/pages/Onboarding'
import { ReviewArea } from '@/pages/ReviewArea'
import { TopicDetail } from '@/pages/TopicDetail'
import { TopicOverview } from '@/pages/TopicOverview'
import { Skilltree } from '@/pages/Skilltree'
import { TopicEntryQuiz } from '@/pages/TopicEntryQuiz'
import { Formelsammlung } from '@/pages/Formelsammlung'
import { Achievements } from '@/pages/Achievements'
import { Settings } from '@/pages/Settings'
import { NotFound } from '@/components/NotFound'

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
    <Routes>
      <Route path="/onboarding" element={<OnboardingRoute />} />

      <Route element={<RequireUser />}>
        <Route index element={<Dashboard />} />
        <Route path="topics" element={<TopicOverview />} />
        <Route path="lernpfad" element={<Skilltree />} />
        <Route path="formelsammlung" element={<Formelsammlung />} />
        <Route path="erfolge" element={<Achievements />} />
        <Route path="topics/:topicId" element={<TopicDetail />} />
        <Route path="topics/:topicId/einstiegstest" element={<TopicEntryQuiz />} />
        <Route path="topics/:topicId/:lessonId" element={<LessonView />} />
        <Route path="topics/:topicId/:lessonId/zusammenfassung" element={<LessonSummary />} />
        <Route path="review" element={<ReviewArea />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
