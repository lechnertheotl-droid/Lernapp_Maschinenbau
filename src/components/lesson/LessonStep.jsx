import { VisualizationEngine } from '@/components/visualizations/VisualizationEngine'
import { ExerciseEngine } from '@/components/exercises/ExerciseEngine'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'
import { useState } from 'react'
import { MarkdownContent } from './MarkdownContent'
import { FormelBlock } from './FormelBlock'
import { HerleitungAccordion } from './HerleitungAccordion'
import { FehlerBlock } from './FehlerBlock'

export function LessonStep({ step, topicId, lessonId, onComplete }) {
  const [reflectionDone, setReflectionDone] = useState(false)

  if (!step) return null

  switch (step.type) {
    case 'explanation-intuitive':
      return (
        <div className="flex flex-col gap-4">
          <div className="bg-white border-2 border-ink rounded-retro shadow-hard p-4">
            <p className="font-mono text-[10px] font-black text-primary-700 uppercase tracking-widest mb-2">// Intuition</p>
            <MathText className="font-black text-ink dark:text-paper text-lg leading-tight mb-3 block">{step.title}</MathText>
            <MarkdownContent className="text-ink-soft">{step.content}</MarkdownContent>
          </div>
          <Button size="lg" variant="dark" fullWidth onClick={onComplete}>Verstanden, weiter →</Button>
        </div>
      )

    case 'explanation-formal':
      return (
        <div className="flex flex-col gap-4">
          <FormelBlock title={step.title} priority={step.priority ?? 'wichtig'}>
            <MarkdownContent className="text-ink dark:text-paper">{step.content}</MarkdownContent>
          </FormelBlock>
          <Button size="lg" variant="dark" fullWidth onClick={onComplete}>Verstanden, weiter →</Button>
        </div>
      )

    case 'derivation':
      return (
        <div className="flex flex-col gap-4">
          <HerleitungAccordion
            title={step.title ?? 'Herleitung'}
            steps={step.steps ?? []}
            defaultOpen={step.defaultOpen ?? false}
          />
          <Button size="lg" variant="dark" fullWidth onClick={onComplete}>Verstanden, weiter →</Button>
        </div>
      )

    case 'typical-error':
      return (
        <div className="flex flex-col gap-4">
          <FehlerBlock
            wrong={step.wrong}
            right={step.right}
            hint={step.hint}
            title={step.title}
          />
          <Button size="lg" variant="dark" fullWidth onClick={onComplete}>Verstanden, weiter →</Button>
        </div>
      )

    case 'visualization':
      return (
        <div className="flex flex-col gap-4">
          {step.title && <MathText className="font-semibold text-surface-900 dark:text-paper block">{step.title}</MathText>}
          <VisualizationEngine visualizationId={step.visualizationId} params={step.params ?? {}} />
          <Button size="lg" variant="dark" fullWidth onClick={onComplete}>Weiter →</Button>
        </div>
      )

    case 'exercise':
    case 'mastery-check':
      return (
        <div className="flex flex-col gap-4">
          {step.type === 'mastery-check' && (
            <div className="bg-lemon-light border-2 border-ink rounded-retro shadow-hard-sm px-3 py-2 flex items-center gap-2">
              <span className="font-mono font-black text-ink">✓</span>
              <span className="text-ink text-sm font-black">Verständnischeck</span>
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
          <MathText className="font-semibold text-surface-900 dark:text-paper block">{step.title ?? 'Reflexion'}</MathText>
          <div className="bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-2">
            {(step.questions ?? []).map((q, i) => (
              <p key={i} className="text-ink-soft text-sm font-semibold">? {q}</p>
            ))}
          </div>
          <Button
            size="lg"
            fullWidth
            variant={reflectionDone ? 'success' : 'dark'}
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
