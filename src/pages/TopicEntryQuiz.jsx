import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTopic } from '@/content/index'
import { NotFound } from '@/components/NotFound'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { MultipleChoice, validate as validateMC } from '@/components/exercises/MultipleChoice'
import { TrueFalse, validate as validateTF } from '@/components/exercises/TrueFalse'
import { NumberInput, validate as validateNI } from '@/components/exercises/NumberInput'
import { FreeTextInput, validate as validateFT } from '@/components/exercises/FreeTextInput'
import { FeedbackDisplay } from '@/components/lesson/FeedbackDisplay'
import { getTopicMeta } from '@/utils/topicGraph'

const PASS_THRESHOLD = 0.6

const RUNNERS = {
  'multiple-choice': { Component: MultipleChoice, validate: validateMC },
  'true-false':      { Component: TrueFalse,      validate: validateTF },
  'number-input':    { Component: NumberInput,    validate: validateNI },
  'free-text':       { Component: FreeTextInput,  validate: validateFT },
}

function QuizStep({ exercise, onAnswer }) {
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [lastAnswer, setLastAnswer] = useState(null)
  const runner = RUNNERS[exercise.type] ?? RUNNERS['multiple-choice']
  const { Component, validate } = runner

  const handleSubmit = (answer) => {
    const { isCorrect: correct } = validate(answer, exercise)
    setIsCorrect(correct)
    setLastAnswer(answer)
    setSubmitted(true)
  }

  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-4">
      <Component exercise={exercise} onSubmit={handleSubmit} disabled={submitted} />
      {submitted && (
        <FeedbackDisplay
          isCorrect={isCorrect}
          exercise={exercise}
          userAnswer={lastAnswer}
          onNext={() => onAnswer(isCorrect)}
        />
      )}
    </div>
  )
}

export function TopicEntryQuiz() {
  const { topicId } = useParams()
  const navigate    = useNavigate()
  const topic       = getTopic(topicId)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)

  if (!topic) {
    return <NotFound title="Thema nicht gefunden" primaryTo="/topics" primaryLabel="Alle Themen" />
  }

  const quiz = topic.entryQuiz ?? []
  if (quiz.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-4">
        <Breadcrumbs items={[
          { label: 'Themen', to: '/topics' },
          { label: topic.title, to: `/topics/${topicId}` },
          { label: 'Einstiegs-Check' },
        ]} />
        <div className="border-2 border-ink rounded-retro bg-white dark:bg-surface-800 shadow-hard p-5 flex flex-col gap-3">
          <h1 className="font-black text-ink dark:text-paper text-xl">Kein Einstiegstest verfügbar</h1>
          <p className="text-ink-soft dark:text-surface-300 text-sm">
            Für dieses Thema wurde noch kein Einstiegstest hinterlegt. Du kannst direkt mit der ersten Lektion starten.
          </p>
          <Button size="lg" variant="dark" onClick={() => navigate(`/topics/${topicId}`)}>
            Zum Thema
          </Button>
        </div>
      </div>
    )
  }

  const correctCount = answers.filter(Boolean).length
  const ratio = quiz.length > 0 ? correctCount / quiz.length : 0
  const currentIndex = answers.length

  const handleAnswer = (correct) => {
    const next = [...answers, correct]
    setAnswers(next)
    if (next.length >= quiz.length) setFinished(true)
  }

  if (finished) {
    const passed = ratio >= PASS_THRESHOLD
    const prereqIds = getTopicMeta(topicId).prerequisiteTopics
    return (
      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">
        <Breadcrumbs items={[
          { label: 'Themen', to: '/topics' },
          { label: topic.title, to: `/topics/${topicId}` },
          { label: 'Einstiegs-Check' },
        ]} />
        <div
          className={`border-2 rounded-retro shadow-hard p-5 flex flex-col gap-3 ${
            passed
              ? 'bg-green-50 dark:bg-green-950 border-green-700'
              : 'bg-lemon-light border-ink'
          }`}
        >
          <h1 className="font-black text-ink dark:text-paper text-xl">
            {passed ? 'Du bist bereit!' : 'Voraussetzungen zuerst'}
          </h1>
          <p className="text-ink dark:text-paper text-sm">
            {correctCount} von {quiz.length} richtig ({Math.round(ratio * 100)}%).
          </p>
          <p className="text-ink-soft dark:text-surface-300 text-sm">
            {passed
              ? 'Du kannst direkt mit den Lektionen dieses Themas starten.'
              : 'Einige Grundlagen wirken noch unsicher. Wir empfehlen, zuerst die Voraussetzungen zu wiederholen.'}
          </p>
          {!passed && prereqIds.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
                // Empfohlene Vorbereitung
              </p>
              {prereqIds.map((pid) => (
                <Button
                  key={pid}
                  size="md"
                  variant="secondary"
                  onClick={() => navigate(`/topics/${pid}`)}
                >
                  Zu {getTopic(pid)?.title ?? pid} →
                </Button>
              ))}
            </div>
          )}
          <Button size="lg" variant="dark" className="mt-2" onClick={() => navigate(`/topics/${topicId}`)}>
            {passed ? `Zu ${topic.title} →` : `Trotzdem zu ${topic.title} →`}
          </Button>
        </div>
      </div>
    )
  }

  const currentExercise = quiz[currentIndex]

  return (
    <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5 min-h-[100dvh]">
      <Breadcrumbs items={[
        { label: 'Themen', to: '/topics' },
        { label: topic.title, to: `/topics/${topicId}` },
        { label: 'Einstiegs-Check' },
      ]} />

      <header>
        <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-1">
          // Einstiegs-Check
        </p>
        <h1 className="font-black text-ink dark:text-paper text-xl leading-tight">{topic.title}</h1>
        <p className="text-ink-soft dark:text-surface-300 text-sm mt-1">
          {quiz.length} kurze Fragen zu den Voraussetzungen.
        </p>
      </header>

      <div className="flex items-center gap-1.5">
        {quiz.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-2 border-2 border-ink rounded-sm ${
              i < answers.length
                ? answers[i] ? 'bg-green-600' : 'bg-red-500'
                : i === currentIndex ? 'bg-primary-700 dark:bg-primary-400' : 'bg-white dark:bg-surface-600'
            }`}
          />
        ))}
        <span className="num text-[11px] text-ink-soft dark:text-surface-300 flex-shrink-0 ml-1">
          {currentIndex + 1}/{quiz.length}
        </span>
      </div>

      {currentExercise && (
        <QuizStep
          key={`${currentExercise.id}-${currentIndex}`}
          exercise={currentExercise}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  )
}
