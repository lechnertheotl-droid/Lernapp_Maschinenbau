import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getDueItems } from '@/utils/reviewScheduler'
import { getLessonById } from '@/content/index'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function ReviewArea() {
  const state    = useAppState()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const due      = getDueItems(state.review.queue, Date.now())

  const [activeIdx, setActiveIdx] = useState(0)
  const [done, setDone]           = useState([])

  if (due.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-10 flex flex-col items-center gap-6 text-center">
        <div className="w-20 h-20 bg-green-600 border-2 border-ink rounded-retro shadow-hard-green flex items-center justify-center text-white font-mono font-black text-4xl">
          ✓
        </div>
        <div>
          <p className="font-mono text-[10px] font-black text-primary-700 uppercase tracking-widest mb-1">// Wiederholung</p>
          <h1 className="text-2xl font-black text-ink">Alles erledigt</h1>
          <p className="text-ink-soft text-sm mt-1">Keine Wiederholungen fällig. Schau später wieder vorbei.</p>
        </div>

        <div className="w-full bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-3 text-left">
          <p className="font-mono text-[10px] font-black text-ink-soft uppercase tracking-widest">Nächste Termine</p>
          {state.review.queue.slice(0, 5).map((item) => {
            const lookup = getLessonById(item.lessonId)
            const lesson = lookup?.lesson
            return (
              <button
                key={item.lessonId}
                type="button"
                onClick={() => lookup && navigate(`/topics/${lookup.topicId}/${item.lessonId}`)}
                className="w-full flex items-center justify-between gap-3 border border-surface-200 rounded-retro px-3 py-2 hover:bg-surface-50 tap-highlight-none"
              >
                <span className="text-sm font-semibold text-ink truncate">{lesson?.title ?? item.lessonId}</span>
                <span className="num text-xs text-ink-soft flex-shrink-0">{item.dueDate}</span>
              </button>
            )
          })}
          {state.review.queue.length === 0 && (
            <p className="text-sm text-ink-soft">Noch keine Lektionen in der Wiederholungsliste.</p>
          )}
        </div>
      </div>
    )
  }

  const currentItem = due[activeIdx]
  if (!currentItem) {
    // All done
    return (
      <div className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
        <div className="w-20 h-20 bg-lemon border-2 border-ink rounded-retro shadow-hard-lemon flex items-center justify-center font-mono font-black text-4xl text-ink">
          ★
        </div>
        <div>
          <h1 className="text-2xl font-black text-ink">Alle {done.length} Wiederholungen erledigt</h1>
          <p className="text-ink-soft text-sm mt-1">Dein Wiederholungsplan ist für heute sauber.</p>
        </div>
        <Button variant="secondary" size="lg" onClick={() => navigate('/')}>Zum Dashboard</Button>
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
    <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">
      <div className="bg-ink border-2 border-ink rounded-retro shadow-hard-lg px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="font-mono text-[10px] font-black text-surface-500 uppercase tracking-widest mb-0.5">// Spaced Repetition</p>
            <h1 className="text-xl font-black text-white">Wiederholungen</h1>
          </div>
          <span className="num text-lemon font-black text-lg">{done.length}/{due.length}</span>
        </div>
        <div className="w-full bg-surface-800 border border-surface-600 rounded-sm h-3 overflow-hidden">
          <div className="bg-lemon h-full transition-all duration-500" style={{ width: `${(done.length / due.length) * 100}%` }} />
        </div>
      </div>

      <div className="bg-white border-2 border-ink rounded-retro shadow-hard p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] text-ink-soft uppercase tracking-widest font-black mb-1">Lektion</p>
            <h2 className="font-black text-ink leading-tight">{lesson?.title ?? currentItem.lessonId}</h2>
          </div>
          {masteryEntry && <Badge status={masteryEntry.status} />}
        </div>

        <p className="text-ink-soft text-sm leading-relaxed">
          Erinnerst du dich noch an die Inhalte dieser Lektion? Beantworte ehrlich:
        </p>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="success" size="lg" fullWidth onClick={() => handleResult(true)}>
            Gewusst ✓
          </Button>
          <Button variant="danger" size="lg" fullWidth onClick={() => handleResult(false)}>
            Nochmal ✗
          </Button>
        </div>
      </div>

      {lessonLookup && (
        <button
          type="button"
          onClick={() => navigate(`/topics/${lessonLookup.topicId}/${currentItem.lessonId}`)}
          className="text-center font-mono text-xs font-bold text-primary-700 hover:text-primary-900 underline underline-offset-4 tap-highlight-none"
        >
          Lektion vorher ansehen
        </button>
      )}

      {/* Remaining */}
      {due.length - done.length - 1 > 0 && (
        <p className="text-center text-ink-soft text-sm">
          Noch {due.length - done.length - 1} weitere Wiederholung{due.length - done.length - 1 > 1 ? 'en' : ''}
        </p>
      )}
    </div>
  )
}
