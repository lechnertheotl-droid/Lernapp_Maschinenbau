import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getLesson, getAllLessons } from '@/content/index'
import { LessonStep } from '@/components/lesson/LessonStep'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Calculator } from '@/components/ui/Calculator'
import { FormulaSheet, hasFormulas } from '@/components/ui/FormulaSheet'

export function LessonView() {
  const { topicId, lessonId } = useParams()
  const navigate       = useNavigate()
  const state          = useAppState()
  const dispatch       = useAppDispatch()
  const lesson         = getLesson(topicId, lessonId)
  const [showComplete, setShowComplete] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showFormulaSheet, setShowFormulaSheet] = useState(false)

  const tp           = state.progress.topicProgress[topicId]
  const currentIndex = tp?.currentStepIndex ?? 0

  useEffect(() => {
    dispatch({ type: ACTIONS.START_LESSON, topicId, lessonId })
  }, [topicId, lessonId]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!lesson) return (
    <div className="p-6 text-center text-surface-400">Lektion nicht gefunden: {lessonId}</div>
  )

  const totalSteps  = lesson.steps.length
  const safeIndex   = Math.min(currentIndex, Math.max(totalSteps - 1, 0))
  const currentStep = lesson.steps[safeIndex]
  const pct         = Math.round((safeIndex / totalSteps) * 100)
  const canShowFormulas = hasFormulas(topicId)

  const handleStepComplete = () => {
    if (safeIndex >= totalSteps - 1) {
      const totalLessons = getAllLessons(topicId).length
      dispatch({ type: ACTIONS.COMPLETE_LESSON, topicId, lessonId, totalLessons })
      setShowComplete(true)
    } else {
      dispatch({ type: ACTIONS.ADVANCE_STEP, topicId })
    }
  }

  const handleBack = () => {
    if (safeIndex > 0) {
      dispatch({ type: ACTIONS.SET_STEP_INDEX, topicId, stepIndex: safeIndex - 1 })
      return
    }
    navigate(`/topics/${topicId}`)
  }

  return (
    <div className="max-w-xl mx-auto flex flex-col min-h-[100dvh]">

      {/* Sticky header */}
      <div className="sticky top-0 z-30 bg-paper/95 backdrop-blur-sm border-b-2 border-ink px-4 py-3 flex items-center gap-3">
        <button
          onClick={handleBack}
          className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink bg-white shadow-hard-sm text-ink flex-shrink-0 tap-highlight-none retro-press font-mono font-black"
          aria-label={safeIndex > 0 ? 'Einen Schritt zurück' : 'Zur Themenübersicht'}
        >
          ←
        </button>
        <div className="flex-1 min-w-0">
          <p className="font-mono text-[10px] font-bold text-ink-soft uppercase tracking-widest truncate">{lesson.title}</p>
          {/* Progress bar */}
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex-1 h-2 bg-white border border-ink rounded-sm overflow-hidden">
              <div
                className="h-full bg-primary-700 transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="num text-[11px] text-ink-soft flex-shrink-0">{safeIndex + 1}/{totalSteps}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {canShowFormulas && (
            <button
              type="button"
              onClick={() => setShowFormulaSheet(true)}
              className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink bg-lemon shadow-hard-lemon text-ink tap-highlight-none retro-press font-mono font-black"
              aria-label="Formelsammlung öffnen"
            >
              f
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowCalculator(true)}
            className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink bg-white shadow-hard-sm text-ink tap-highlight-none retro-press font-mono font-black"
            aria-label="Taschenrechner öffnen"
          >
            =
          </button>
        </div>
      </div>

      {/* Step content — scrollable */}
      <div className="flex-1 px-4 py-5 overflow-y-auto">

        {/* Learning goals on first step */}
        {safeIndex === 0 && lesson.learningGoals?.length > 0 && (
          <div className="bg-lemon-light border-2 border-ink rounded-retro shadow-hard-sm p-3.5 mb-4">
            <p className="font-mono text-[10px] font-black text-ink uppercase tracking-widest mb-2">// Lernziele</p>
            <ul className="flex flex-col gap-1.5">
              {lesson.learningGoals.map((g, i) => (
                <li key={i} className="text-ink text-sm flex items-start gap-2">
                  <span className="text-primary-700 flex-shrink-0 mt-0.5 font-mono font-black">→</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="animate-fade-in" key={currentStep?.id}>
          {safeIndex > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="mb-3 min-h-10 px-3 rounded-retro border-2 border-ink bg-white shadow-hard-sm text-ink font-mono text-[10px] font-black uppercase tracking-wider retro-press tap-highlight-none"
            >
              ← Vorheriger Schritt
            </button>
          )}
          <LessonStep
            step={currentStep}
            topicId={topicId}
            lessonId={lessonId}
            onComplete={handleStepComplete}
          />
        </div>
      </div>

      {/* Completion modal */}
      <Modal
        isOpen={showComplete}
        onClose={() => { setShowComplete(false); navigate(`/topics/${topicId}`) }}
        title="Lektion abgeschlossen"
      >
        <div className="flex flex-col gap-4">
          <p className="text-surface-600 text-sm leading-relaxed">
            Du hast <strong>{lesson.title}</strong> abgeschlossen. Die Lektion wird zur Wiederholung eingeplant.
          </p>
          <div className="flex flex-col gap-2.5">
            {lesson.nextLessonId && (
              <Button
                fullWidth size="lg"
                onClick={() => { setShowComplete(false); navigate(`/topics/${topicId}/${lesson.nextLessonId}`) }}
              >
                Nächste Lektion →
              </Button>
            )}
            <Button
              variant="secondary" fullWidth size="lg"
              onClick={() => { setShowComplete(false); navigate(`/topics/${topicId}`) }}
            >
              Zur Themenübersicht
            </Button>
          </div>
        </div>
      </Modal>

      <Calculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
      <FormulaSheet
        isOpen={showFormulaSheet}
        onClose={() => setShowFormulaSheet(false)}
        topicId={topicId}
      />
    </div>
  )
}
