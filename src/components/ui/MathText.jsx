import { useMemo } from 'react'
import katex from 'katex'
import { cn } from '@/utils/cn'
import { useFormulaPopover } from '@/utils/formulaPopoverContext'

const SPLIT_RE = /(\$\$[^$]+\$\$|\$[^$]+\$)/g

function renderMath(latex, displayMode) {
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

export function MathText({ children, className, block = false }) {
  const text = typeof children === 'string' ? children : String(children ?? '')
  const { setOpenLatex } = useFormulaPopover()

  const parts = useMemo(() => {
    if (!text) return []
    return text.split(SPLIT_RE).filter(Boolean).map((segment, i) => {
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
            className={cn(
              'clickable-math',
              part.display && 'clickable-math--block'
            )}
            onClick={(e) => { e.stopPropagation(); setOpenLatex(part.source) }}
            dangerouslySetInnerHTML={{ __html: part.html }}
          />
        )
      )}
    </Wrapper>
  )
}
