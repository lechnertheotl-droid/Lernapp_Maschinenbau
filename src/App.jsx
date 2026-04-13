import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { useAppState } from '@/context/AppContext'
import { Dashboard } from '@/pages/Dashboard'
import { LessonView } from '@/pages/LessonView'
import { Onboarding } from '@/pages/Onboarding'
import { ReviewArea } from '@/pages/ReviewArea'
import { TopicDetail } from '@/pages/TopicDetail'
import { TopicOverview } from '@/pages/TopicOverview'

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

function NotFoundRedirect() {
  return <Navigate to="/" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/onboarding" element={<OnboardingRoute />} />

      <Route element={<RequireUser />}>
        <Route index element={<Dashboard />} />
        <Route path="topics" element={<TopicOverview />} />
        <Route path="topics/:topicId" element={<TopicDetail />} />
        <Route path="topics/:topicId/:lessonId" element={<LessonView />} />
        <Route path="review" element={<ReviewArea />} />
      </Route>

      <Route path="*" element={<NotFoundRedirect />} />
    </Routes>
  )
}
