import { useEffect, useState } from 'react'
import { getHighlighter, normalizeLang } from '@/utils/shikiSingleton'

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = 'text' }: CodeBlockProps) {
  const lang = normalizeLang(language)
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    if (lang === 'text') {
      setHtml(null)
      return
    }
    let cancelled = false
    getHighlighter()
      .then((highlighter) => {
        if (cancelled) return
        const rendered = highlighter.codeToHtml(code, {
          lang,
          themes: { light: 'github-light', dark: 'github-dark' },
          defaultColor: false,
        })
        setHtml(rendered)
      })
      .catch(() => {
        if (!cancelled) setHtml(null)
      })
    return () => {
      cancelled = true
    }
  }, [code, lang])

  if (html) {
    return (
      <div
        className="shiki-wrapper my-3 text-[0.8rem] leading-relaxed border-2 border-ink rounded-retro shadow-hard-sm overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <pre className="my-3 bg-ink text-paper font-mono text-[0.8rem] leading-relaxed border-2 border-ink rounded-retro shadow-hard-sm p-3 overflow-x-auto">
      <code>{code}</code>
    </pre>
  )
}
