import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { MarkdownContent } from './MarkdownContent'

export function FeedbackDisplay({ isCorrect, explanation, onNext }) {
  return (
    <div className={cn(
      'rounded-retro border-2 p-4 flex flex-col gap-3 animate-slide-up shadow-hard-sm',
      isCorrect
        ? 'bg-green-50 border-green-800'
        : 'bg-red-50 border-red-800 animate-shake'
    )}>
      <div className="flex items-center gap-2">
        <span className={cn(
          'w-7 h-7 rounded-full border-2 flex items-center justify-center font-mono font-black text-sm',
          isCorrect ? 'bg-green-600 border-green-800 text-white' : 'bg-red-600 border-red-800 text-white'
        )}>
          {isCorrect ? '✓' : '✗'}
        </span>
        <span className={cn('font-black text-sm', isCorrect ? 'text-green-800' : 'text-red-800')}>
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
