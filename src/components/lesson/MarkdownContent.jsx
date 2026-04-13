import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { cn } from '@/utils/cn'

const markdownComponents = {
  table: ({ children }) => (
    <div className="my-3 overflow-x-auto rounded-xl border border-surface-200">
      <table className="w-full min-w-max border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-surface-100">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-surface-200 px-3 py-2 font-semibold text-surface-800">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-surface-100 px-3 py-2 text-surface-700 last:border-b-0">
      {children}
    </td>
  ),
}

export function MarkdownContent({ children, className }) {
  return (
    <div className={cn('markdown-content text-sm leading-relaxed text-surface-700', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={markdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
