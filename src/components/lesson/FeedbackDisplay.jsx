import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { MarkdownContent } from './MarkdownContent'

export function FeedbackDisplay({ isCorrect, explanation, onNext }) {
  return (
    <div className={cn(
      'rounded-2xl border-2 p-4 flex flex-col gap-3 animate-slide-up',
      isCorrect
        ? 'bg-green-50 border-green-300'
        : 'bg-red-50 border-red-300'
    )}>
      <div className="flex items-center gap-2">
        <span className="text-xl">{isCorrect ? '✅' : '❌'}</span>
        <span className={cn('font-semibold text-sm', isCorrect ? 'text-green-800' : 'text-red-800')}>
          {isCorrect ? 'Richtig!' : 'Nicht ganz richtig'}
        </span>
      </div>

      {explanation && (
        <MarkdownContent className={cn(isCorrect ? 'text-green-800' : 'text-red-800')}>
          {explanation}
        </MarkdownContent>
      )}

      <Button
        variant={isCorrect ? 'success' : 'secondary'}
        size="lg"
        fullWidth
        onClick={onNext}
      >
        Weiter →
      </Button>
    </div>
  )
}
