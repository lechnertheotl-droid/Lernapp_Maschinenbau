import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getDueItems, getUpcomingItems, getReviewStats } from '@/utils/reviewScheduler'
import { getLessonById } from '@/content/index'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ExerciseEngine } from '@/components/exercises/ExerciseEngine'

export function ReviewArea() {
  const state    = useAppState()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const now      = Date.now()
  const due      = getDueItems(state.review.queue, now)
  const upcoming = getUpcomingItems(state.review.queue, now, 7)
  const stats    = getReviewStats(state.review.queue, state.mastery, now)

  const [activeIdx, setActiveIdx] = useState(0)
  const [done, setDone]           = useState([])
  const [mode, setMode]           = useState('exercise') // 'exercise' | 'self'
  const [showExercise, setShowExercise] = useState(true)

  // Pick a random exercise from the lesson for exercise-based review
  const currentItem = due[activeIdx]
  const lessonLookup = currentItem ? getLessonById(currentItem.lessonId) : null
  const lesson = lessonLookup?.lesson ?? null

  const reviewExerciseRef = useMemo(() => {
    if (!lessonLookup || !currentItem) return null
    const lessonObj = lesson
    if (!lessonObj) return null
    const exerciseRefs = lessonObj.steps
      .filter((s) => s.type === 'exercise' || s.type === 'mastery-check')
      .map((s) => s.exerciseRef)
      .filter(Boolean)
    if (exerciseRefs.length === 0) return null
    return exerciseRefs[Math.floor(Math.random() * exerciseRefs.length)]
  }, [currentItem?.lessonId])

  // ── No items due ──────────────────────────────────────────────────────
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

        {/* Stats */}
        <div className="w-full grid grid-cols-3 gap-2">
          <StatBox label="Streak" value={`${stats.streakDays}d`} color="lemon" />
          <StatBox label="Reviews" value={stats.totalReviewed} color="primary" />
          <StatBox label="Bald fällig" value={stats.upcoming} color="surface" />
        </div>

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <div className="w-full bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-3 text-left">
            <p className="font-mono text-[10px] font-black text-ink-soft uppercase tracking-widest">Demnächst fällig</p>
            {upcoming.slice(0, 5).map((item) => {
              const lookup = getLessonById(item.lessonId)
              return (
                <button
                  key={item.lessonId}
                  type="button"
                  onClick={() => lookup && navigate(`/topics/${lookup.topicId}/${item.lessonId}`)}
                  className="w-full flex items-center justify-between gap-3 border border-surface-200 rounded-retro px-3 py-2 hover:bg-surface-50 tap-highlight-none"
                >
                  <span className="text-sm font-semibold text-ink truncate">{lookup?.lesson?.title ?? item.lessonId}</span>
                  <span className="num text-xs text-ink-soft flex-shrink-0">{formatDate(item.dueDate)}</span>
                </button>
              )
            })}
          </div>
        )}

        {/* Queue overview */}
        <div className="w-full bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-3 text-left">
          <p className="font-mono text-[10px] font-black text-ink-soft uppercase tracking-widest">Alle geplanten Wiederholungen</p>
          {state.review.queue.length === 0 ? (
            <p className="text-sm text-ink-soft">Noch keine Lektionen in der Wiederholungsliste.</p>
          ) : (
            state.review.queue.slice(0, 8).map((item) => {
              const lookup = getLessonById(item.lessonId)
              const mastery = state.mastery[item.lessonId]
              return (
                <div key={item.lessonId} className="flex items-center justify-between gap-3 border border-surface-200 rounded-retro px-3 py-2">
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-ink truncate block">{lookup?.lesson?.title ?? item.lessonId}</span>
                    <span className="font-mono text-[10px] text-ink-soft">
                      Intervall: {item.interval ?? '?'}d · Ease: {(mastery?.easeFactor ?? 2.5).toFixed(1)}
                    </span>
                  </div>
                  <span className="num text-xs text-ink-soft flex-shrink-0">{formatDate(item.dueDate)}</span>
                </div>
              )
            })
          )}
        </div>
      </div>
    )
  }

  // ── All done for today ────────────────────────────────────────────────
  if (!currentItem) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
        <div className="w-20 h-20 bg-lemon border-2 border-ink rounded-retro shadow-hard-lemon flex items-center justify-center font-mono font-black text-4xl text-ink">
          ★
        </div>
        <div>
          <h1 className="text-2xl font-black text-ink">Alle {done.length} Wiederholungen erledigt!</h1>
          <p className="text-ink-soft text-sm mt-1">Dein Wiederholungsplan ist für heute sauber.</p>
        </div>

        <div className="w-full grid grid-cols-3 gap-2">
          <StatBox label="Streak" value={`${stats.streakDays}d`} color="lemon" />
          <StatBox label="Heute" value={`${done.length}✓`} color="green" />
          <StatBox label="Reviews" value={stats.totalReviewed} color="primary" />
        </div>

        <Button variant="secondary" size="lg" onClick={() => navigate('/')}>Zum Dashboard</Button>
      </div>
    )
  }

  // ── Active review ─────────────────────────────────────────────────────
  const masteryEntry = state.mastery[currentItem.lessonId]

  const handleResult = (isCorrect) => {
    dispatch({ type: ACTIONS.COMPLETE_REVIEW, lessonId: currentItem.lessonId, isCorrect })
    setDone((d) => [...d, currentItem.lessonId])
    setActiveIdx((i) => i + 1)
    setShowExercise(true)
  }

  const handleExerciseAttempt = (_exerciseId, _answer, isCorrect) => {
    // After answering the exercise, show self-assessment buttons
    setShowExercise(false)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">
      {/* Header */}
      <div className="bg-ink border-2 border-ink rounded-retro shadow-hard-lg px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="font-mono text-[10px] font-black text-surface-500 uppercase tracking-widest mb-0.5">// Spaced Repetition</p>
            <h1 className="text-xl font-black text-white">Wiederholungen</h1>
          </div>
          <div className="flex items-center gap-3">
            {stats.streakDays > 0 && (
              <span className="font-mono text-xs font-bold text-lemon">🔥{stats.streakDays}d</span>
            )}
            <span className="num text-lemon font-black text-lg">{done.length}/{due.length}</span>
          </div>
        </div>
        <div className="w-full bg-surface-800 border border-surface-600 rounded-sm h-3 overflow-hidden">
          <div className="bg-lemon h-full transition-all duration-500" style={{ width: `${(done.length / due.length) * 100}%` }} />
        </div>
      </div>

      {/* Mode toggle */}
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => { setMode('exercise'); setShowExercise(true) }}
          className={`h-10 rounded-retro border-2 font-mono text-xs font-black uppercase tracking-wider retro-press ${mode === 'exercise' ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon' : 'bg-white border-ink text-ink-soft shadow-hard-sm'}`}
        >
          Mit Aufgabe
        </button>
        <button
          type="button"
          onClick={() => { setMode('self'); setShowExercise(false) }}
          className={`h-10 rounded-retro border-2 font-mono text-xs font-black uppercase tracking-wider retro-press ${mode === 'self' ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon' : 'bg-white border-ink text-ink-soft shadow-hard-sm'}`}
        >
          Selbst bewerten
        </button>
      </div>

      {/* Review card */}
      <div className="bg-white border-2 border-ink rounded-retro shadow-hard p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] text-ink-soft uppercase tracking-widest font-black mb-1">Lektion</p>
            <h2 className="font-black text-ink leading-tight">{lesson?.title ?? currentItem.lessonId}</h2>
            {masteryEntry && (
              <p className="font-mono text-[10px] text-ink-soft mt-1">
                Reviews: {masteryEntry.reviewCount ?? 0} · Ease: {(masteryEntry.easeFactor ?? 2.5).toFixed(1)}
              </p>
            )}
          </div>
          {masteryEntry && <Badge status={masteryEntry.status} />}
        </div>

        {/* Exercise mode: show an exercise from the lesson */}
        {mode === 'exercise' && showExercise && reviewExerciseRef ? (
          <div className="border-t-2 border-surface-200 pt-4 -mx-5 px-5">
            <ExerciseEngine
              exerciseId={reviewExerciseRef}
              topicId={lessonLookup?.topicId}
              lessonId={currentItem.lessonId}
              onComplete={() => setShowExercise(false)}
            />
          </div>
        ) : (
          <>
            <p className="text-ink-soft text-sm leading-relaxed">
              {mode === 'exercise' && !reviewExerciseRef
                ? 'Keine Übung verfügbar. Bewerte dich selbst:'
                : 'Erinnerst du dich an die Inhalte dieser Lektion?'}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="success" size="lg" fullWidth onClick={() => handleResult(true)}>
                Gewusst ✓
              </Button>
              <Button variant="danger" size="lg" fullWidth onClick={() => handleResult(false)}>
                Nochmal ✗
              </Button>
            </div>
          </>
        )}

        {/* After exercise answered, show assessment */}
        {mode === 'exercise' && !showExercise && (
          <div className="border-t-2 border-surface-200 pt-4 flex flex-col gap-3">
            <p className="text-ink-soft text-sm">Wie gut hast du dich erinnert?</p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="success" size="lg" fullWidth onClick={() => handleResult(true)}>
                Gewusst ✓
              </Button>
              <Button variant="danger" size="lg" fullWidth onClick={() => handleResult(false)}>
                Nochmal ✗
              </Button>
            </div>
          </div>
        )}
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

      {due.length - done.length - 1 > 0 && (
        <p className="text-center text-ink-soft text-sm">
          Noch {due.length - done.length - 1} weitere Wiederholung{due.length - done.length - 1 > 1 ? 'en' : ''}
        </p>
      )}
    </div>
  )
}

// ── Helpers ────────────────────────────────────────────────────────────────

function StatBox({ label, value, color }) {
  const bg = {
    lemon: 'bg-lemon border-lemon-dark',
    primary: 'bg-primary-50 border-primary-200',
    green: 'bg-green-50 border-green-200',
    surface: 'bg-surface-50 border-surface-200',
  }[color] ?? 'bg-surface-50 border-surface-200'

  return (
    <div className={`flex flex-col items-center rounded-retro border-2 py-2 ${bg}`}>
      <span className="num text-lg font-black text-ink leading-none">{value}</span>
      <span className="font-mono text-[9px] font-bold text-ink-soft uppercase tracking-wide mt-0.5">{label}</span>
    </div>
  )
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.round((d - today) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'Heute'
  if (diff === 1) return 'Morgen'
  if (diff === -1) return 'Gestern'
  if (diff < 0) return `${-diff}d überfällig`
  if (diff <= 7) return `in ${diff}d`
  return d.toLocaleDateString('de-AT', { day: 'numeric', month: 'short' })
}
