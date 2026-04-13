import { useState } from 'react'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getDueItems } from '@/utils/reviewScheduler'
import { getLessonById } from '@/content/index'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function ReviewArea() {
  const state    = useAppState()
  const dispatch = useAppDispatch()
  const due      = getDueItems(state.review.queue, Date.now())

  const [activeIdx, setActiveIdx] = useState(0)
  const [done, setDone]           = useState([])

  if (due.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
        <span className="text-6xl">✅</span>
        <h1 className="text-2xl font-bold text-surface-900">Alles erledigt!</h1>
        <p className="text-surface-500">Keine Wiederholungen fällig. Schau morgen wieder vorbei.</p>
        <div className="w-full flex flex-col gap-3">
          <p className="text-sm font-medium text-surface-600">Deine nächsten Wiederholungen:</p>
          {state.review.queue.slice(0, 5).map((item) => {
            const lesson = getLessonById(item.lessonId)?.lesson
            return (
              <Card key={item.lessonId} className="p-3 flex items-center justify-between">
                <span className="text-sm text-surface-700">{lesson?.title ?? item.lessonId}</span>
                <span className="text-xs text-surface-400">{item.dueDate}</span>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  const currentItem = due[activeIdx]
  if (!currentItem) {
    // All done
    return (
      <div className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
        <span className="text-6xl">🎉</span>
        <h1 className="text-2xl font-bold text-surface-900">Alle {done.length} Wiederholungen erledigt!</h1>
        <p className="text-surface-500">Super gemacht. Dein Wissen ist jetzt gefestigt.</p>
      </div>
    )
  }

  const lessonLookup = getLessonById(currentItem.lessonId)
  const lesson = lessonLookup?.lesson ?? null
  const masteryEntry = state.mastery[currentItem.lessonId]

  const handleResult = (isCorrect) => {
    dispatch({ type: ACTIONS.COMPLETE_REVIEW, lessonId: currentItem.lessonId, isCorrect })
    setDone((d) => [...d, currentItem.lessonId])
    setActiveIdx((i) => i + 1)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-6">
      <div>
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-surface-900">Wiederholungen</h1>
          <span className="text-sm text-surface-400">{done.length}/{due.length}</span>
        </div>
        <div className="w-full bg-surface-100 rounded-full h-2">
          <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${(done.length / due.length) * 100}%` }} />
        </div>
      </div>

      <Card elevated className="p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-surface-400 uppercase tracking-wide font-medium mb-1">Lektion</p>
            <h2 className="font-semibold text-surface-900">{lesson?.title ?? currentItem.lessonId}</h2>
          </div>
          {masteryEntry && <Badge status={masteryEntry.status} />}
        </div>

        <p className="text-surface-600 text-sm leading-relaxed">
          Erinnerst du dich noch an die Inhalte dieser Lektion? Beantworte ehrlich:
        </p>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="success" size="lg" fullWidth onClick={() => handleResult(true)}>
            Ja, erinnere ich mich ✓
          </Button>
          <Button variant="danger" size="lg" fullWidth onClick={() => handleResult(false)}>
            Nicht mehr gut ✗
          </Button>
        </div>
      </Card>

      {/* Remaining */}
      {due.length - done.length - 1 > 0 && (
        <p className="text-center text-surface-400 text-sm">
          Noch {due.length - done.length - 1} weitere Wiederholung{due.length - done.length - 1 > 1 ? 'en' : ''}
        </p>
      )}
    </div>
  )
}
