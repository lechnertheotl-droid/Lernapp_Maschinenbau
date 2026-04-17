import { useState } from 'react'
import { MarkdownContent } from './MarkdownContent'
import { MathText } from '@/components/ui/MathText'
import type { DerivationStep } from '@/types/content'

interface HerleitungAccordionProps {
  title?: string
  steps: DerivationStep[]
  defaultOpen?: boolean
}

export function HerleitungAccordion({
  title = 'Herleitung',
  steps,
  defaultOpen = false,
}: HerleitungAccordionProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <details
      className="border-2 border-ink rounded-retro shadow-hard-sm bg-white dark:bg-surface-800"
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className="cursor-pointer p-3 font-mono font-black text-xs uppercase tracking-widest list-none flex items-center justify-between select-none gap-2">
        <MathText className="text-primary-700 dark:text-primary-300">
          {`// ${title}`}
        </MathText>
        <span
          className="w-6 h-6 flex items-center justify-center rounded border-2 border-ink bg-lemon-light dark:bg-surface-700 text-sm"
          aria-hidden
        >
          {open ? '−' : '+'}
        </span>
      </summary>
      <ol className="p-4 pt-0 flex flex-col gap-4 border-t-2 border-ink mt-1 pt-3">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="font-mono font-black text-primary-700 dark:text-primary-300 flex-shrink-0">
              {i + 1}.
            </span>
            <div className="flex-1 min-w-0 space-y-2">
              <MarkdownContent>{s.explanation}</MarkdownContent>
              {s.formula && (
                <div className="formula-box">
                  <MarkdownContent>{`$$${s.formula}$$`}</MarkdownContent>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </details>
  )
}
