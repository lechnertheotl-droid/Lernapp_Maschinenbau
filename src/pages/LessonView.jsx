import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getLesson, getAllLessons } from '@/content/index'
import { LessonStep } from '@/components/lesson/LessonStep'
import { LessonToolStrip } from '@/components/lesson/LessonToolStrip'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { hasFormulas } from '@/components/ui/formulaTopics'
import { NotFound } from '@/components/NotFound'
import { Confetti } from '@/components/ui/Confetti'
import { LessonCompleteBadge } from '@/components/lesson/LessonCompleteBadge'
import { useFormulaPopover } from '@/utils/formulaPopoverContext'
import { useSwipe } from '@/hooks/useSwipe'

const SEGMENTED_PROGRESS_MAX = 7

// Tool-Modals sind klassische On-Demand-UI: Nutzer öffnet sie per Icon-Klick.
// Lazy-Loading hält Calculator (mathjs), FormulaSheet und VariableGlossary
// aus dem initialen Lesson-Bundle raus.
const Calculator       = lazy(() => import('@/components/ui/Calculator')       .then((m) => ({ default: m.Calculator })))
const FormulaSheet     = lazy(() => import('@/components/ui/FormulaSheet')     .then((m) => ({ default: m.FormulaSheet })))
const VariableGlossary = lazy(() => import('@/components/ui/VariableGlossary') .then((m) => ({ default: m.VariableGlossary })))

export function LessonView() {
  const { topicId, lessonId } = useParams()
  const navigate       = useNavigate()
  const state          = useAppState()
  const dispatch       = useAppDispatch()
  const lesson         = getLesson(topicId, lessonId)
  const [showComplete, setShowComplete] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showFormulaSheet, setShowFormulaSheet] = useState(false)
  const [showVariables, setShowVariables] = useState(false)

  const tp           = state.progress.topicProgress[topicId]
  const currentIndex = tp?.currentStepIndex ?? 0
  const { setTopicId: setPopoverTopicId } = useFormulaPopover()

  useEffect(() => {
    dispatch({ type: ACTIONS.START_LESSON, topicId, lessonId })
  }, [topicId, lessonId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Topic an Formula-Popover-Context melden, damit Variablen-Disambiguierung funktioniert
  useEffect(() => {
    setPopoverTopicId(topicId ?? null)
    return () => setPopoverTopicId(null)
  }, [topicId, setPopoverTopicId])

  if (!lesson) return (
    <NotFound
      title="Lektion nicht gefunden"
      message="Diese Lektion existiert nicht. Vielleicht wurde sie verschoben oder der Link ist veraltet."
      detail={lessonId}
      primaryTo={`/topics/${topicId}`}
      primaryLabel="Zurück zum Thema"
    />
  )

  const totalSteps  = lesson.steps.length
  const safeIndex   = Math.min(currentIndex, Math.max(totalSteps - 1, 0))
  const currentStep = lesson.steps[safeIndex]
  const canShowFormulas = hasFormulas(topicId)
  const useSegmentedProgress = totalSteps <= SEGMENTED_PROGRESS_MAX
  const progressPct = totalSteps > 0 ? Math.round(((safeIndex + 1) / totalSteps) * 100) : 0

  const handleStepComplete = () => {
    if (safeIndex >= totalSteps - 1) {
      const totalLessons = getAllLessons(topicId).length
      dispatch({ type: ACTIONS.COMPLETE_LESSON, topicId, lessonId, totalLessons })
      setShowComplete(true)
    } else {
      dispatch({ type: ACTIONS.ADVANCE_STEP, topicId })
    }
  }

  const handlePrevStep = () => {
    if (safeIndex > 0) {
      dispatch({ type: ACTIONS.SET_STEP_INDEX, topicId, stepIndex: safeIndex - 1 })
    }
  }

  const handleGotoMenu = () => navigate(`/topics/${topicId}`)

  // Nur Swipe-nach-rechts (= einen Schritt zurück). Swipe-nach-links bewusst
  // NICHT, weil der nächste Step erst nach Abschluss freigeschaltet wird —
  // Swipe würde sonst Confusion beim Versuch den Schritt zu überspringen auslösen.
  const swipeHandlers = useSwipe({
    onSwipeRight: () => { if (safeIndex > 0) handlePrevStep() },
    threshold: 80,
  })

  return (
    <div className="max-w-xl mx-auto flex flex-col min-h-[100dvh]">

      {/* Sticky header — minimal: Menü + Titel + Progress */}
      <div className="sticky top-0 z-30 bg-paper/95 dark:bg-surface-900/95 backdrop-blur-sm border-b-2 border-ink dark:border-surface-500 px-4 py-3 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleGotoMenu}
            aria-label="Zurück zur Themenübersicht"
            className="flex-shrink-0 inline-flex items-center gap-1.5 h-9 px-3 rounded-retro border-2 border-ink bg-white dark:bg-surface-800 dark:text-surface-100 shadow-hard-sm tap-highlight-none retro-press font-mono text-xs font-black uppercase tracking-wider"
          >
            <span aria-hidden className="text-base leading-none">≡</span>
            <span>Menü</span>
          </button>
          <p className="flex-1 min-w-0 font-mono text-[11px] font-bold text-ink-soft uppercase tracking-widest line-clamp-2 leading-tight">
            {lesson.title}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {useSegmentedProgress ? (
            <div className="flex-1 flex items-center gap-0.5">
              {lesson.steps.map((s, i) => {
                const isVisited = i <= safeIndex
                const isCurrent = i === safeIndex
                return (
                  <button
                    key={s.id ?? i}
                    type="button"
                    onClick={() => {
                      if (i <= safeIndex) dispatch({ type: ACTIONS.SET_STEP_INDEX, topicId, stepIndex: i })
                    }}
                    disabled={i > safeIndex}
                    aria-label={`Schritt ${i + 1} von ${totalSteps}${isCurrent ? ' (aktuell)' : isVisited ? ' (besucht)' : ' (noch nicht erreicht)'}`}
                    className={`flex-1 h-2.5 border-2 border-ink rounded-sm transition-colors ${
                      isCurrent
                        ? 'bg-primary-700 dark:bg-primary-400'
                        : isVisited
                        ? 'bg-primary-500 dark:bg-primary-300 hover:bg-primary-600 cursor-pointer'
                        : 'bg-white dark:bg-surface-600 dark:!border-surface-400 cursor-not-allowed'
                    }`}
                  />
                )
              })}
            </div>
          ) : (
            <ProgressBar value={progressPct} size="md" className="flex-1" />
          )}
          <span className="num text-[11px] text-ink-soft flex-shrink-0">{safeIndex + 1}/{totalSteps}</span>
        </div>
      </div>

      {/* Step content — scrollable, mit Swipe-nach-rechts für "zurück" */}
      <div className="flex-1 px-4 py-5 overflow-y-auto" {...swipeHandlers}>

        {/* Learning goals on first step */}
        {safeIndex === 0 && lesson.learningGoals?.length > 0 && (
          <div className="bg-lemon-light border-2 border-ink dark:border-lemon-dark rounded-retro shadow-hard-sm p-3.5 mb-4">
            <p className="font-mono text-[10px] font-black text-ink dark:text-lemon uppercase tracking-widest mb-2">// Lernziele</p>
            <ul className="flex flex-col gap-1.5">
              {lesson.learningGoals.map((g, i) => (
                <li key={i} className="text-ink text-sm flex items-start gap-2">
                  <span className="text-primary-700 dark:text-primary-300 flex-shrink-0 mt-0.5 font-mono font-black">→</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="animate-fade-in" key={currentStep?.id}>
          <LessonStep
            step={currentStep}
            topicId={topicId}
            lessonId={lessonId}
            onComplete={handleStepComplete}
          />
        </div>

        {/* Schritt-zurück am Inhalts-Ende — klar getrennt vom Menü oben */}
        <div className="mt-6 pt-4 border-t border-ink/15 dark:border-surface-700 pb-24 md:pb-4">
          <Button
            size="sm"
            variant="secondary"
            onClick={handlePrevStep}
            disabled={safeIndex === 0}
            className="font-mono uppercase tracking-wider"
          >
            ← Zurück
          </Button>
        </div>
      </div>

      {/* Floating tool strip — alle Lesson-Tools an einer Stelle */}
      <LessonToolStrip
        showFormulas={canShowFormulas}
        onOpenVariables={() => setShowVariables(true)}
        onOpenFormulas={() => setShowFormulaSheet(true)}
        onOpenCalculator={() => setShowCalculator(true)}
        onOpenSummary={() => navigate(`/topics/${topicId}/${lessonId}/zusammenfassung`)}
      />

      {/* Confetti celebration */}
      {showComplete && <Confetti />}

      {/* Completion modal */}
      <Modal
        isOpen={showComplete}
        onClose={() => { setShowComplete(false); navigate(`/topics/${topicId}`) }}
        title="Lektion abgeschlossen"
      >
        <div className="flex flex-col gap-4">
          <LessonCompleteBadge />
          <p className="text-surface-600 dark:text-surface-300 text-sm leading-relaxed text-center">
            {state.user?.name ? <>Super, <strong>{state.user.name}</strong>! </> : null}
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

      {/* Tool-Modals werden erst beim ersten Öffnen geladen — Fallback ist
          leer, weil die Modals selbst ihre Sichtbarkeit über `isOpen` steuern. */}
      <Suspense fallback={null}>
        {showCalculator && <Calculator isOpen onClose={() => setShowCalculator(false)} />}
        {showFormulaSheet && (
          <FormulaSheet isOpen onClose={() => setShowFormulaSheet(false)} topicId={topicId} />
        )}
        {showVariables && <VariableGlossary isOpen onClose={() => setShowVariables(false)} />}
      </Suspense>
    </div>
  )
}
