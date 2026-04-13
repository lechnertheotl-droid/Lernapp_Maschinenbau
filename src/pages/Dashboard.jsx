import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import { getDueItems } from '@/utils/reviewScheduler'
import { computeTopicProgress } from '@/utils/progressLogic'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Button } from '@/components/ui/Button'

function greeting(name) {
  const h = new Date().getHours()
  if (h < 12) return `Guten Morgen, ${name}! ☀️`
  if (h < 18) return `Guten Tag, ${name}! 📚`
  return `Guten Abend, ${name}! 🌙`
}

export function Dashboard() {
  const state    = useAppState()
  const navigate = useNavigate()
  const topics   = getAllTopics()
  const due      = getDueItems(state.review.queue, Date.now())

  // Find last active lesson across all topics
  const lastActive = Object.entries(state.progress.topicProgress)
    .map(([topicId, tp]) => ({ topicId, ...tp }))
    .filter((tp) => tp.currentLessonId)
    .sort((a, b) => 0)[0] // simple: first found

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-surface-900">{greeting(state.user.name ?? 'du')}</h1>
        <p className="text-surface-500 text-sm mt-1">Bereit zum Lernen?</p>
      </div>

      {/* Review reminder */}
      {due.length > 0 && (
        <Card className="bg-orange-50 border-orange-200 p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔄</span>
            <div>
              <p className="font-semibold text-orange-900">{due.length} Wiederholung{due.length > 1 ? 'en' : ''} fällig</p>
              <p className="text-orange-700 text-xs">Stärke dein Langzeitgedächtnis</p>
            </div>
          </div>
          <Button variant="secondary" size="sm" onClick={() => navigate('/review')}>Starten</Button>
        </Card>
      )}

      {/* Continue learning */}
      {lastActive && (
        <Card elevated className="p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-surface-400 font-medium uppercase tracking-wide mb-1">Weitermachen</p>
            <p className="font-semibold text-surface-900">
              {topics.find((t) => t.id === lastActive.topicId)?.title ?? lastActive.topicId}
            </p>
            <p className="text-sm text-surface-500">{lastActive.currentLessonId}</p>
          </div>
          <Button size="md" onClick={() => navigate(`/topics/${lastActive.topicId}/${lastActive.currentLessonId}`)}>
            Weiter →
          </Button>
        </Card>
      )}

      {/* Topics grid */}
      <div>
        <h2 className="font-semibold text-surface-700 text-sm uppercase tracking-wide mb-3">Alle Themen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {topics.map((topic) => {
            const tp = state.progress.topicProgress[topic.id]
            const totalLessons = getAllLessons(topic.id).length
            const progress = tp ? computeTopicProgress(tp.completedLessons, totalLessons) : 0

            return (
              <Card key={topic.id} onClick={() => navigate(`/topics/${topic.id}`)} className="p-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-2xl">{topic.icon}</span>
                    <h3 className="font-semibold text-surface-900 mt-1">{topic.title}</h3>
                    <p className="text-surface-500 text-xs leading-snug mt-0.5">{topic.description}</p>
                  </div>
                  <span className="text-xs text-surface-400 whitespace-nowrap">{progress}%</span>
                </div>
                <ProgressBar value={progress} size="sm" />
                <p className="text-xs text-surface-400 mt-1.5">
                  {totalLessons} Lektionen · {topic.estimatedHours}h
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
