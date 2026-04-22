import { useRef, useEffect, type ReactNode } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { cn } from '@/utils/cn'
import { useFormulaPopover } from '@/utils/formulaPopoverContext'
import { annotateGlossaryTerms } from '@/utils/glossaryTooltips'
import { CodeBlock } from './CodeBlock'

function extractText(node: ReactNode): string {
  if (node == null || node === false) return ''
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (typeof node === 'object' && 'props' in node) {
    const props = (node as { props?: { children?: ReactNode } }).props
    return extractText(props?.children)
  }
  return ''
}

const markdownComponents: Components = {
  table: ({ children }) => (
    <div className="my-3 overflow-x-auto rounded-xl border border-surface-200 dark:border-surface-700">
      <table className="w-full min-w-max border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-surface-100 dark:bg-surface-800">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-surface-200 dark:border-surface-700 px-3 py-2 font-semibold text-surface-800 dark:text-paper">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-surface-100 dark:border-surface-800 px-3 py-2 text-surface-700 dark:text-surface-200 last:border-b-0">
      {children}
    </td>
  ),
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    if (match) {
      const code = extractText(children).replace(/\n$/, '')
      return <CodeBlock code={code} language={match[1]} />
    }
    return (
      <code
        className="font-mono text-[0.85em] bg-surface-100 dark:bg-surface-800 text-ink dark:text-paper px-1 py-0.5 rounded border border-surface-200 dark:border-surface-700"
        {...props}
      >
        {children}
      </code>
    )
  },
  pre: ({ children }) => <>{children}</>,
}

interface MarkdownContentProps {
  children: string
  className?: string
}

export function MarkdownContent({ children, className }: MarkdownContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { setOpenLatex } = useFormulaPopover()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const mathSpans = container.querySelectorAll<HTMLElement>('.katex')
    const handlers: Array<{ span: HTMLElement; handler: (e: Event) => void }> = []

    mathSpans.forEach((span) => {
      const annotation = span.querySelector('annotation[encoding="application/x-tex"]')
      const latex = annotation?.textContent?.trim()
      if (!latex) return

      span.classList.add('clickable-math')
      const handler = (e: Event) => {
        e.stopPropagation()
        setOpenLatex(latex)
      }
      span.addEventListener('click', handler)
      handlers.push({ span, handler })
    })

    return () => {
      handlers.forEach(({ span, handler }) => {
        span.removeEventListener('click', handler)
        span.classList.remove('clickable-math')
      })
    }
  }, [children, setOpenLatex])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const cleanup = annotateGlossaryTerms(container)
    return cleanup
  }, [children])

  return (
    <div
      ref={containerRef}
      className={cn('markdown-content text-sm leading-relaxed text-surface-700 dark:text-surface-200', className)}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, [remarkMath, { singleDollarTextMath: true }]]}
        rehypePlugins={[rehypeKatex]}
        components={markdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
