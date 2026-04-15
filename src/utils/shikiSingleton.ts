import type { HighlighterCore } from 'shiki/core'

let _highlighterPromise: Promise<HighlighterCore> | null = null

export function getHighlighter(): Promise<HighlighterCore> {
  if (!_highlighterPromise) {
    _highlighterPromise = (async () => {
      const [{ createHighlighterCore }, { createOnigurumaEngine }] =
        await Promise.all([import('shiki/core'), import('shiki/engine/oniguruma')])
      const [python, matlab, javascript, typescript, bash, json, githubLight, githubDark, wasm] =
        await Promise.all([
          import('shiki/langs/python.mjs'),
          import('shiki/langs/matlab.mjs'),
          import('shiki/langs/javascript.mjs'),
          import('shiki/langs/typescript.mjs'),
          import('shiki/langs/bash.mjs'),
          import('shiki/langs/json.mjs'),
          import('shiki/themes/github-light.mjs'),
          import('shiki/themes/github-dark.mjs'),
          import('shiki/wasm'),
        ])
      return createHighlighterCore({
        themes: [githubLight.default, githubDark.default],
        langs: [python.default, matlab.default, javascript.default, typescript.default, bash.default, json.default],
        engine: createOnigurumaEngine(wasm.default),
      })
    })()
  }
  return _highlighterPromise
}

const SUPPORTED = new Set([
  'python',
  'matlab',
  'javascript',
  'typescript',
  'bash',
  'json',
])

export function normalizeLang(lang: string | undefined): string {
  if (!lang) return 'text'
  const l = lang.toLowerCase()
  if (l === 'py') return 'python'
  if (l === 'js') return 'javascript'
  if (l === 'ts') return 'typescript'
  if (l === 'sh' || l === 'shell') return 'bash'
  return SUPPORTED.has(l) ? l : 'text'
}
