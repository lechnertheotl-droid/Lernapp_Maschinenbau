import { MarkdownContent } from './MarkdownContent'
import { MathText } from '@/components/ui/MathText'

interface FehlerBlockProps {
  wrong: string
  right: string
  hint?: string
  title?: string
}

export function FehlerBlock({ wrong, right, hint, title = 'Typischer Fehler' }: FehlerBlockProps) {
  return (
    <div className="border-2 border-red-600 bg-red-50 dark:bg-red-950/30 rounded-retro shadow-hard-sm p-4">
      <MathText className="font-mono text-[10px] font-black text-red-700 dark:text-red-300 uppercase tracking-widest mb-3 block">
        {`// ${title}`}
      </MathText>
      <div className="space-y-2">
        <div className="flex gap-2 items-start">
          <span className="font-mono font-black text-red-700 dark:text-red-300 mt-0.5" aria-hidden>✗</span>
          <div className="flex-1 min-w-0 [&_.markdown-content]:text-red-900 dark:[&_.markdown-content]:text-red-200">
            <MarkdownContent>{wrong}</MarkdownContent>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <span className="font-mono font-black text-green-700 dark:text-green-400 mt-0.5" aria-hidden>✓</span>
          <div className="flex-1 min-w-0 [&_.markdown-content]:text-green-900 dark:[&_.markdown-content]:text-green-200">
            <MarkdownContent>{right}</MarkdownContent>
          </div>
        </div>
        {hint && (
          <p className="text-sm text-ink-soft dark:text-surface-300 italic mt-2 pt-2 border-t border-red-200 dark:border-red-900">
            {hint}
          </p>
        )}
      </div>
    </div>
  )
}
