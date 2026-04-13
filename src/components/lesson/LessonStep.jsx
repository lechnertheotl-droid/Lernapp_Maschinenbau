import ReactMarkdown from 'react-markdown'
import { VisualizationEngine } from '@/components/visualizations/VisualizationEngine'
import { ExerciseEngine } from '@/components/exercises/ExerciseEngine'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export function LessonStep({ step, topicId, lessonId, onComplete }) {
  const [reflectionDone, setReflectionDone] = useState(false)

  if (!step) return null

  switch (step.type) {
    case 'explanation-intuitive':
      return (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-surface-900">{step.title}</h3>
          <div className="prose prose-sm max-w-none text-surface-700 leading-relaxed">
            <ReactMarkdown>{step.content}</ReactMarkdown>
          </div>
          <Button size="lg" fullWidth onClick={onComplete}>Verstanden, weiter →</Button>
        </div>
      )

    case 'explanation-formal':
      return (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-surface-900">{step.title}</h3>
          <div className="bg-surface-50 border border-surface-200 rounded-2xl p-4">
            <div className="prose prose-sm max-w-none text-surface-800 leading-relaxed">
              <ReactMarkdown>{step.content}</ReactMarkdown>
            </div>
          </div>
          <Button size="lg" fullWidth onClick={onComplete}>Verstanden, weiter →</Button>
        </div>
      )

    case 'visualization':
      return (
        <div className="flex flex-col gap-4">
          {step.title && <h3 className="font-semibold text-surface-900">{step.title}</h3>}
          <VisualizationEngine visualizationId={step.visualizationId} params={step.params ?? {}} />
          <Button size="lg" fullWidth onClick={onComplete}>Weiter →</Button>
        </div>
      )

    case 'exercise':
    case 'mastery-check':
      return (
        <div className="flex flex-col gap-4">
          {step.type === 'mastery-check' && (
            <div className="bg-primary-50 border border-primary-200 rounded-xl px-3 py-2 flex items-center gap-2">
              <span>🎯</span>
              <span className="text-primary-800 text-sm font-medium">Verständnischeck</span>
            </div>
          )}
          <ExerciseEngine
            exerciseId={step.exerciseRef}
            topicId={topicId}
            lessonId={lessonId}
            onComplete={onComplete}
          />
        </div>
      )

    case 'reflection':
      return (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-surface-900">{step.title ?? 'Reflexion'}</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 flex flex-col gap-2">
            {(step.questions ?? []).map((q, i) => (
              <p key={i} className="text-purple-800 text-sm font-medium">🤔 {q}</p>
            ))}
          </div>
          <Button
            size="lg"
            fullWidth
            variant={reflectionDone ? 'success' : 'secondary'}
            onClick={() => { setReflectionDone(true); onComplete() }}
          >
            {reflectionDone ? 'Weiter →' : 'Ich habe darüber nachgedacht ✓'}
          </Button>
        </div>
      )

    default:
      return (
        <div className="text-surface-400 text-sm p-4">
          Unbekannter Schritttyp: {step.type}
        </div>
      )
  }
}
