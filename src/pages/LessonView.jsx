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
import { VariableGlossary } from '@/components/ui/VariableGlossary'
import { NotFound } from '@/components/NotFound'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Confetti } from '@/components/ui/Confetti'
import { LessonCompleteBadge } from '@/components/lesson/LessonCompleteBadge'
import { getTopic } from '@/content/index'
import { useFormulaPopover } from '@/utils/formulaPopoverContext'

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
  const topic = getTopic(topicId)

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
          <p className="font-mono text-[10px] font-bold text-ink-soft uppercase tracking-widest line-clamp-2 leading-tight">{lesson.title}</p>
          {/* Progress bar — segmented, visited steps clickable */}
          <div className="flex items-center gap-2 mt-1.5">
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
            <span className="num text-[11px] text-ink-soft flex-shrink-0">{safeIndex + 1}/{totalSteps}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowVariables(true)}
            className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink bg-white shadow-hard-sm text-ink tap-highlight-none retro-press font-mono text-[11px] font-black"
            aria-label="Variablen-Glossar öffnen"
            title="Variablen-Glossar"
          >
            x,y
          </button>
          {canShowFormulas && (
            <button
              type="button"
              onClick={() => setShowFormulaSheet(true)}
              className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink bg-lemon shadow-hard-lemon text-ink tap-highlight-none retro-press font-mono font-black"
              aria-label="Formelsammlung öffnen"
              title="Formelsammlung"
            >
              f
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowCalculator(true)}
            className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink bg-white shadow-hard-sm text-ink tap-highlight-none retro-press font-mono font-black"
            aria-label="Taschenrechner öffnen"
            title="Taschenrechner"
          >
            =
          </button>
          <button
            type="button"
            onClick={() => navigate(`/topics/${topicId}/${lessonId}/zusammenfassung`)}
            className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink bg-white shadow-hard-sm text-ink tap-highlight-none retro-press font-mono text-[10px] font-black"
            aria-label="Zusammenfassung der Lektion öffnen"
            title="Zusammenfassung"
          >
            ∑
          </button>
        </div>
      </div>

      {/* Step content — scrollable */}
      <div className="flex-1 px-4 py-5 overflow-y-auto">

        {/* Breadcrumbs */}
        <Breadcrumbs
          className="mb-3"
          items={[
            { label: 'Start', to: '/' },
            { label: topic?.title ?? topicId, to: `/topics/${topicId}` },
            { label: lesson.title },
          ]}
        />

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
          <p className="text-surface-600 text-sm leading-relaxed text-center">
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

      <Calculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
      <FormulaSheet
        isOpen={showFormulaSheet}
        onClose={() => setShowFormulaSheet(false)}
        topicId={topicId}
      />
      <VariableGlossary isOpen={showVariables} onClose={() => setShowVariables(false)} />
    </div>
  )
}
