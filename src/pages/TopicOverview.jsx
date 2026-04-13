import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import { computeTopicProgress } from '@/utils/progressLogic'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'

export function TopicOverview() {
  const state    = useAppState()
  const navigate = useNavigate()
  const topics   = getAllTopics()

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-surface-900 mb-1">Alle Themen</h1>
      <p className="text-surface-500 text-sm mb-6">{topics.length} Themenbereiche</p>

      <div className="flex flex-col gap-3">
        {topics.map((topic) => {
          const tp = state.progress.topicProgress[topic.id]
          const totalLessons = getAllLessons(topic.id).length
          const completed = tp?.completedLessons?.length ?? 0
          const progress = computeTopicProgress(tp?.completedLessons ?? [], totalLessons)

          const status = !tp?.started ? 'not-started'
            : progress === 100        ? 'secure'
            : progress > 0            ? 'started'
            : 'not-started'

          return (
            <Card key={topic.id} onClick={() => navigate(`/topics/${topic.id}`)} elevated className="p-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{topic.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h2 className="font-semibold text-surface-900">{topic.title}</h2>
                    <Badge status={status} />
                  </div>
                  <p className="text-surface-500 text-xs leading-snug mb-3">{topic.description}</p>
                  <ProgressBar value={progress} size="sm" />
                  <div className="flex gap-3 mt-1.5 text-xs text-surface-400">
                    <span>{completed}/{totalLessons} Lektionen</span>
                    <span>·</span>
                    <span>{topic.estimatedHours}h geschätzt</span>
                    <span>·</span>
                    <span>Schwierigkeit {topic.difficulty}/5</span>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
