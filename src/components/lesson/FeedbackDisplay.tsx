import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { MarkdownContent } from './MarkdownContent'

interface Exercise {
  explanation?: string
  wrongAnswerExplanations?: Record<string, string>
  relatedFormulaId?: string
}

interface FeedbackDisplayProps {
  isCorrect: boolean
  exercise: Exercise
  userAnswer?: unknown
  onNext: () => void
  onRetry?: () => void
  onOpenFormulas?: (formulaId?: string) => void
}

function pickDistractorExplanation(
  exercise: Exercise,
  userAnswer: unknown
): string | null {
  if (!exercise.wrongAnswerExplanations) return null
  const map = exercise.wrongAnswerExplanations
  if (typeof userAnswer === 'object' && userAnswer !== null) {
    const a = userAnswer as Record<string, unknown>
    // multiple-choice: { selectedIndex }
    if (typeof a.selectedIndex === 'number' && map[String(a.selectedIndex)]) {
      return map[String(a.selectedIndex)]
    }
    // true-false: { value: boolean }
    if (typeof a.value === 'boolean' && map[String(a.value)]) {
      return map[String(a.value)]
    }
    // number-input: { value: number }
    if (typeof a.value === 'number' && map[String(a.value)]) {
      return map[String(a.value)]
    }
    // free-text: { value: string }
    if (typeof a.value === 'string' && map[a.value]) return map[a.value]
  }
  return null
}

export function FeedbackDisplay({
  isCorrect,
  exercise,
  userAnswer,
  onNext,
  onRetry,
  onOpenFormulas,
}: FeedbackDisplayProps) {
  const distractor = isCorrect ? null : pickDistractorExplanation(exercise, userAnswer)

  return (
    <div
      className={cn(
        'rounded-retro border-2 p-4 flex flex-col gap-3 animate-slide-up shadow-hard-sm',
        isCorrect
          ? 'bg-green-50 dark:bg-green-950/40 border-green-800 dark:border-green-400'
          : 'bg-red-50 dark:bg-red-950/40 border-red-800 dark:border-red-400 animate-shake'
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            'w-7 h-7 rounded-full border-2 flex items-center justify-center font-mono font-black text-sm flex-shrink-0',
            isCorrect
              ? 'bg-green-600 border-green-800 text-white'
              : 'bg-red-600 border-red-800 text-white'
          )}
          aria-hidden
        >
          {isCorrect ? '✓' : '✗'}
        </span>
        <span
          className={cn(
            'font-black text-sm',
            isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'
          )}
        >
          {isCorrect ? 'Richtig!' : 'Nicht ganz richtig'}
        </span>
      </div>

      {distractor && (
        <div className="border-l-4 border-red-500 dark:border-red-400 bg-white/70 dark:bg-surface-900/60 px-3 py-2 rounded">
          <p className="font-mono text-[10px] font-black text-red-700 dark:text-red-300 uppercase tracking-widest mb-1">
            // Warum nicht diese Antwort?
          </p>
          <MarkdownContent className="text-ink dark:text-paper">{distractor}</MarkdownContent>
        </div>
      )}

      {exercise.explanation && (
        <div className="border-l-4 border-ink dark:border-surface-400 bg-white/70 dark:bg-surface-900/60 px-3 py-2 rounded">
          <p className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest mb-1">
            // {isCorrect ? 'Erklärung' : 'Lösungsweg'}
          </p>
          <MarkdownContent className="text-ink dark:text-paper">{exercise.explanation}</MarkdownContent>
        </div>
      )}

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {!isCorrect && onRetry && (
          <Button variant="secondary" size="lg" className="flex-1" onClick={onRetry}>
            Nochmal üben
          </Button>
        )}
        {!isCorrect && onOpenFormulas && exercise.relatedFormulaId && (
          <Button
            variant="lemon"
            size="lg"
            className="flex-1"
            onClick={() => onOpenFormulas(exercise.relatedFormulaId)}
          >
            Zur Formel ↗
          </Button>
        )}
        <Button
          variant={isCorrect ? 'success' : 'dark'}
          size="lg"
          className="flex-1"
          onClick={onNext}
        >
          Weiter →
        </Button>
      </div>
    </div>
  )
}
