import { useParams, useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getTopic } from '@/content/index'
import { isLessonUnlocked } from '@/utils/progressLogic'
import { Badge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

export function TopicDetail() {
  const { topicId } = useParams()
  const navigate    = useNavigate()
  const state       = useAppState()
  const topic       = getTopic(topicId)

  if (!topic) return (
    <div className="p-6 text-center text-surface-400">Thema nicht gefunden: {topicId}</div>
  )

  const mastery = state.mastery
  const tp      = state.progress.topicProgress[topicId]
  const completedLessons = tp?.completedLessons ?? []
  const totalLessons = topic.units.flatMap((u) => u.lessons).length
  const progress = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6">
      {/* Back */}
      <button onClick={() => navigate('/topics')} className="flex items-center gap-1 text-surface-500 text-sm hover:text-surface-700 self-start">
        ← Zurück
      </button>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="text-4xl">{topic.icon}</div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-surface-900">{topic.title}</h1>
          <p className="text-surface-500 text-sm mt-0.5">{topic.description}</p>
          <div className="mt-3">
            <ProgressBar value={progress} />
            <p className="text-xs text-surface-400 mt-1">{completedLessons.length} von {totalLessons} Lektionen abgeschlossen</p>
          </div>
        </div>
      </div>

      {/* Units */}
      {topic.units.map((unit) => (
        <div key={unit.id}>
          <h2 className="font-semibold text-surface-800 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-xs flex items-center justify-center font-bold">{unit.order}</span>
            {unit.title}
          </h2>

          <div className="flex flex-col gap-2">
            {unit.lessons.map((lesson) => {
              const m = mastery[lesson.id]
              const status = m?.status ?? 'not-started'
              const unlocked = isLessonUnlocked(lesson.prerequisites, mastery)
              const isCurrent = tp?.currentLessonId === lesson.id

              return (
                <button
                  key={lesson.id}
                  disabled={!unlocked}
                  onClick={() => navigate(`/topics/${topicId}/${lesson.id}`)}
                  className={cn(
                    'w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-150 tap-highlight-none',
                    unlocked
                      ? 'bg-white border-surface-200 hover:border-primary-300 hover:bg-primary-50 cursor-pointer'
                      : 'bg-surface-50 border-surface-100 opacity-50 cursor-not-allowed',
                    isCurrent && 'border-primary-400 bg-primary-50'
                  )}
                >
                  <span className="text-lg">
                    {!unlocked ? '🔒' : status === 'secure' ? '✅' : status === 'not-started' ? '⭕' : '🔵'}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-surface-900 text-sm">{lesson.title}</p>
                    <p className="text-surface-400 text-xs">{lesson.estimatedMinutes} Min.</p>
                  </div>
                  <Badge status={status} />
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
