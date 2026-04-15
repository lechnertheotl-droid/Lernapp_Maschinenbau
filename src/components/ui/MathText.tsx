import { useMemo, type ReactNode } from 'react'
import katex from 'katex'
import { cn } from '@/utils/cn'
import { useFormulaPopover } from '@/utils/formulaPopoverContext'

const SPLIT_RE = /(\$\$[^$]+\$\$|\$[^$]+\$)/g

function renderMath(latex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode,
      output: 'html',
    })
  } catch {
    return latex
  }
}

type Part =
  | { type: 'text'; value: string; key: number }
  | { type: 'math'; display: boolean; html: string; source: string; key: number }

interface MathTextProps {
  children: ReactNode
  className?: string
  block?: boolean
}

export function MathText({ children, className, block = false }: MathTextProps) {
  const text =
    typeof children === 'string' ? children : String(children ?? '')
  const { setOpenLatex } = useFormulaPopover()

  const parts = useMemo<Part[]>(() => {
    if (!text) return []
    return text
      .split(SPLIT_RE)
      .filter(Boolean)
      .map((segment, i): Part => {
        if (segment.startsWith('$$') && segment.endsWith('$$')) {
          const inner = segment.slice(2, -2).trim()
          return { type: 'math', display: true, html: renderMath(inner, true), source: inner, key: i }
        }
        if (segment.startsWith('$') && segment.endsWith('$')) {
          const inner = segment.slice(1, -1).trim()
          return { type: 'math', display: false, html: renderMath(inner, false), source: inner, key: i }
        }
        return { type: 'text', value: segment, key: i }
      })
  }, [text])

  const Wrapper = block ? 'div' : 'span'

  return (
    <Wrapper className={cn(className)}>
      {parts.map((part) =>
        part.type === 'text' ? (
          <span key={part.key}>{part.value}</span>
        ) : (
          <span
            key={part.key}
            data-latex={part.source}
            className={cn('clickable-math', part.display && 'clickable-math--block')}
            onClick={(e) => {
              e.stopPropagation()
              setOpenLatex(part.source)
            }}
            dangerouslySetInnerHTML={{ __html: part.html }}
          />
        )
      )}
    </Wrapper>
  )
}
