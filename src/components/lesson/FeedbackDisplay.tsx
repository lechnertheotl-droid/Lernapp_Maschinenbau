import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { MarkdownContent } from './MarkdownContent'

interface Exercise {
  explanation?: string
  wrongAnswerExplanations?: Record<string, string>
  relatedFormulaId?: string
}

/**
 * Feedback-Happen-Segmentierung: zerlegt Erklärungen nach dem Schema
 *   **Ansatz:** … **Rechnung:** … **Probe:** … **Typischer Fehler:** …
 * in vier farbige Sub-Boxen. Fällt auf Single-Block zurück, wenn keine Marker
 * gefunden werden (Rückwärtskompatibilität für alte Erklärungen).
 */
interface ExplanationBlock {
  key: 'ansatz' | 'rechnung' | 'probe' | 'fehler'
  label: string
  body: string
}

const BLOCK_ORDER: ExplanationBlock['key'][] = ['ansatz', 'rechnung', 'probe', 'fehler']
const BLOCK_LABELS: Record<ExplanationBlock['key'], string> = {
  ansatz: 'Ansatz',
  rechnung: 'Rechnung',
  probe: 'Probe',
  fehler: 'Typischer Fehler',
}
const BLOCK_STYLES: Record<ExplanationBlock['key'], string> = {
  ansatz:   'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/40',
  rechnung: 'border-amber-500 dark:border-amber-400 bg-amber-50 dark:bg-amber-950/40',
  probe:    'border-green-600 dark:border-green-400 bg-green-50 dark:bg-green-950/40',
  fehler:   'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-950/40',
}
const BLOCK_LABEL_COLORS: Record<ExplanationBlock['key'], string> = {
  ansatz:   'text-blue-800 dark:text-blue-200',
  rechnung: 'text-amber-800 dark:text-amber-200',
  probe:    'text-green-800 dark:text-green-200',
  fehler:   'text-red-800 dark:text-red-200',
}

export function parseExplanationBlocks(text: string): ExplanationBlock[] | null {
  if (typeof text !== 'string') return null
  // Regex matcht **Label:** gefolgt von Inhalt bis zum nächsten Label oder Ende.
  const regex = /\*\*(Ansatz|Rechnung|Probe|Typischer Fehler)\s*:\*\*\s*([\s\S]*?)(?=\n\s*\*\*(?:Ansatz|Rechnung|Probe|Typischer Fehler)\s*:\*\*|$)/gi
  const blocks: ExplanationBlock[] = []
  let match: RegExpExecArray | null
  while ((match = regex.exec(text)) !== null) {
    const labelRaw = match[1].toLowerCase()
    const key: ExplanationBlock['key'] =
      labelRaw === 'ansatz' ? 'ansatz'
      : labelRaw === 'rechnung' ? 'rechnung'
      : labelRaw === 'probe' ? 'probe'
      : 'fehler'
    blocks.push({ key, label: BLOCK_LABELS[key], body: match[2].trim() })
  }
  if (blocks.length < 2) return null // weniger als 2 Marker → Single-Block-Fallback
  // In kanonischer Reihenfolge sortieren
  blocks.sort((a, b) => BLOCK_ORDER.indexOf(a.key) - BLOCK_ORDER.indexOf(b.key))
  return blocks
}

interface FeedbackContentProps {
  isCorrect: boolean
  exercise: Exercise
  userAnswer?: unknown
}

interface FeedbackActionsProps {
  isCorrect: boolean
  exercise: Exercise
  onNext: () => void
  onRetry?: () => void
  onOpenFormulas?: (formulaId?: string) => void
}

interface FeedbackDisplayProps extends FeedbackContentProps, Omit<FeedbackActionsProps, 'isCorrect' | 'exercise'> {}

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

/**
 * Scrollbarer Inhalt des Feedback-Panels: Header, Distraktor-Box, Erklärung.
 * Wird im `ExerciseEngine` zusammen mit `FeedbackActions` gerendert, damit
 * die Action-Buttons immer sichtbar bleiben, auch wenn die Erklärung lang ist.
 */
export function FeedbackContent({ isCorrect, exercise, userAnswer }: FeedbackContentProps) {
  const distractor = isCorrect ? null : pickDistractorExplanation(exercise, userAnswer)

  return (
    <div
      className={cn(
        'rounded-retro border-2 p-4 flex flex-col gap-3 animate-slide-up shadow-hard-sm',
        isCorrect
          ? 'bg-green-50 dark:bg-green-950 border-green-800 dark:border-green-400'
          : 'bg-red-50 dark:bg-red-950 border-red-800 dark:border-red-400 animate-shake'
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
        <div className="border-l-4 border-red-500 dark:border-red-400 bg-white/70 dark:bg-surface-900 px-3 py-2 rounded">
          <p className="font-mono text-[10px] font-black text-red-700 dark:text-red-300 uppercase tracking-widest mb-1">
            // Warum nicht diese Antwort?
          </p>
          <MarkdownContent className="text-ink dark:text-paper">{distractor}</MarkdownContent>
        </div>
      )}

      {exercise.explanation && (() => {
        const blocks = parseExplanationBlocks(exercise.explanation)
        if (!blocks) {
          return (
            <div className="border-l-4 border-ink dark:border-surface-400 bg-white/70 dark:bg-surface-900 px-3 py-2 rounded">
              <p className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest mb-1">
                // {isCorrect ? 'Erklärung' : 'Lösungsweg'}
              </p>
              <MarkdownContent className="text-ink dark:text-paper">{exercise.explanation!}</MarkdownContent>
            </div>
          )
        }
        return (
          <div className="flex flex-col gap-2">
            {blocks.map((block) => (
              <div
                key={block.key}
                className={cn('border-l-4 px-3 py-2 rounded', BLOCK_STYLES[block.key])}
              >
                <p className={cn('font-mono text-[10px] font-black uppercase tracking-widest mb-1', BLOCK_LABEL_COLORS[block.key])}>
                  // {block.label}
                </p>
                <MarkdownContent className="text-ink dark:text-paper">{block.body}</MarkdownContent>
              </div>
            ))}
          </div>
        )
      })()}
    </div>
  )
}

/**
 * Action-Buttons des Feedback-Panels (Nochmal, Formel, Weiter). Wird vom
 * `ExerciseEngine` OUTSIDE des Scroll-Containers gerendert, damit der
 * „Weiter"-Button auch bei langen Erklärungen ohne Scrollen sichtbar ist.
 */
export function FeedbackActions({
  isCorrect,
  exercise,
  onNext,
  onRetry,
  onOpenFormulas,
}: FeedbackActionsProps) {
  return (
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
  )
}

/**
 * Kombinierte Variante für Aufrufer, die beide Teile als ein Ganzes wollen.
 * `ExerciseEngine` verwendet die Split-Variante für das Fixed-Panel-Layout.
 */
export function FeedbackDisplay({
  isCorrect,
  exercise,
  userAnswer,
  onNext,
  onRetry,
  onOpenFormulas,
}: FeedbackDisplayProps) {
  return (
    <div className="flex flex-col gap-3">
      <FeedbackContent isCorrect={isCorrect} exercise={exercise} userAnswer={userAnswer} />
      <FeedbackActions
        isCorrect={isCorrect}
        exercise={exercise}
        onNext={onNext}
        onRetry={onRetry}
        onOpenFormulas={onOpenFormulas}
      />
    </div>
  )
}
