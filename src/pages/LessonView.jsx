import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getLesson, getAllLessons } from '@/content/index'
import { LessonStep } from '@/components/lesson/LessonStep'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'

export function LessonView() {
  const { topicId, lessonId } = useParams()
  const navigate  = useNavigate()
  const state     = useAppState()
  const dispatch  = useAppDispatch()
  const lesson    = getLesson(topicId, lessonId)
  const [showComplete, setShowComplete] = useState(false)

  const tp           = state.progress.topicProgress[topicId]
  const currentIndex = tp?.currentStepIndex ?? 0

  // Init lesson on mount
  useEffect(() => {
    dispatch({ type: ACTIONS.START_LESSON, topicId, lessonId })
  }, [topicId, lessonId]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!lesson) return (
    <div className="p-6 text-center text-surface-400">Lektion nicht gefunden: {lessonId}</div>
  )

  const totalSteps   = lesson.steps.length
  const currentStep  = lesson.steps[currentIndex]
  const progress     = Math.round((currentIndex / totalSteps) * 100)

  const handleStepComplete = () => {
    if (currentIndex >= totalSteps - 1) {
      // Lesson complete
      const totalLessons = getAllLessons(topicId).length
      dispatch({ type: ACTIONS.COMPLETE_LESSON, topicId, lessonId, totalLessons })
      setShowComplete(true)
    } else {
      dispatch({ type: ACTIONS.ADVANCE_STEP, topicId })
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(`/topics/${topicId}`)}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-100 text-surface-500 flex-shrink-0"
        >
          ←
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-surface-400 truncate">{lesson.title}</p>
          <div className="flex items-center gap-2 mt-1">
            <ProgressBar value={progress} size="sm" className="flex-1" />
            <span className="text-xs text-surface-400 whitespace-nowrap">{currentIndex + 1}/{totalSteps}</span>
          </div>
        </div>
      </div>

      {/* Learning goals (only on first step) */}
      {currentIndex === 0 && lesson.learningGoals?.length > 0 && (
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-3">
          <p className="text-xs font-semibold text-primary-700 uppercase tracking-wide mb-2">Lernziele</p>
          <ul className="flex flex-col gap-1">
            {lesson.learningGoals.map((g, i) => (
              <li key={i} className="text-primary-800 text-sm flex items-start gap-1.5">
                <span className="mt-0.5">→</span><span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Step content */}
      <div className="animate-fade-in">
        <LessonStep
          key={currentStep?.id}
          step={currentStep}
          topicId={topicId}
          lessonId={lessonId}
          onComplete={handleStepComplete}
        />
      </div>

      {/* Completion modal */}
      <Modal isOpen={showComplete} onClose={() => { setShowComplete(false); navigate(`/topics/${topicId}`) }} title="Lektion abgeschlossen! 🎉">
        <div className="flex flex-col gap-4">
          <p className="text-surface-600 text-sm">
            Du hast <strong>{lesson.title}</strong> erfolgreich abgeschlossen. Diese Lektion wurde zur Wiederholungsliste hinzugefügt.
          </p>
          <div className="flex flex-col gap-2">
            {lesson.nextLessonId && (
              <Button
                fullWidth
                onClick={() => { setShowComplete(false); navigate(`/topics/${topicId}/${lesson.nextLessonId}`) }}
              >
                Nächste Lektion →
              </Button>
            )}
            <Button
              variant="secondary"
              fullWidth
              onClick={() => { setShowComplete(false); navigate(`/topics/${topicId}`) }}
            >
              Zur Themenübersicht
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
