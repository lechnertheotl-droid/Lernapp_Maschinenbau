import { VARIABLES } from './variablesDB'

interface GlossaryEntry {
  term: string
  desc: string
  unit?: string
}

let _index: GlossaryEntry[] | null = null
let _re: RegExp | null = null

function buildIndex(): { index: GlossaryEntry[]; re: RegExp } {
  if (_index && _re) return { index: _index, re: _re }
  const entries: GlossaryEntry[] = []
  const seen = new Set<string>()
  for (const key of Object.keys(VARIABLES)) {
    const list = (VARIABLES as Record<string, Array<{ name?: string; desc?: string; unit?: string }>>)[key]
    if (!Array.isArray(list)) continue
    for (const v of list) {
      if (!v?.name || !v?.desc) continue
      // Skip too-short names to avoid false positives (e.g. 'E', 'R')
      if (v.name.length < 4) continue
      const term = v.name
      const termLower = term.toLowerCase()
      if (seen.has(termLower)) continue
      seen.add(termLower)
      entries.push({ term, desc: v.desc, unit: v.unit })
    }
  }
  entries.sort((a, b) => b.term.length - a.term.length) // longest first for greedy
  const escaped = entries.map((e) => e.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const re = new RegExp(`\\b(${escaped.join('|')})\\b`, 'g')
  _index = entries
  _re = re
  return { index: entries, re }
}

const SKIP_SELECTORS = ['.katex', 'code', 'pre', 'abbr', 'a', '[data-no-glossary]']

function shouldSkip(node: Node): boolean {
  let el: Element | null = node.parentElement
  while (el) {
    for (const sel of SKIP_SELECTORS) {
      if (el.matches(sel)) return true
    }
    el = el.parentElement
  }
  return false
}

/**
 * Walks the text nodes inside `root` and wraps the FIRST occurrence
 * (per text node) of each glossary term with an <abbr title> element.
 * Returns a cleanup function that removes the annotations.
 */
export function annotateGlossaryTerms(root: HTMLElement): () => void {
  const { index, re } = buildIndex()
  const termByLower = new Map(index.map((e) => [e.term.toLowerCase(), e]))
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      shouldSkip(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  })

  const toReplace: Array<{ node: Text; fragment: DocumentFragment }> = []
  const seenPerBlock = new WeakMap<Element, Set<string>>()
  let current: Text | null = walker.nextNode() as Text | null
  while (current) {
    const text = current.data
    re.lastIndex = 0
    const match = re.exec(text)
    if (match) {
      const parentBlock = current.parentElement?.closest('p, li, td, th, div') ?? root
      const already = seenPerBlock.get(parentBlock) ?? new Set<string>()
      const termLower = match[1].toLowerCase()
      if (!already.has(termLower)) {
        const entry = termByLower.get(termLower)
        if (entry) {
          const fragment = document.createDocumentFragment()
          fragment.appendChild(document.createTextNode(text.slice(0, match.index)))
          const abbr = document.createElement('abbr')
          abbr.textContent = match[1]
          abbr.title = entry.unit
            ? `${entry.desc} [${entry.unit}]`
            : entry.desc
          abbr.className = 'glossary-term'
          fragment.appendChild(abbr)
          fragment.appendChild(document.createTextNode(text.slice(match.index + match[1].length)))
          toReplace.push({ node: current, fragment })
          already.add(termLower)
          seenPerBlock.set(parentBlock, already)
        }
      }
    }
    current = walker.nextNode() as Text | null
  }

  const replacements: Array<{ parent: Node; oldNodes: Node[] }> = []
  for (const { node, fragment } of toReplace) {
    const parent = node.parentNode
    if (!parent) continue
    const newNodes = Array.from(fragment.childNodes)
    const oldNodes: Node[] = [node]
    parent.replaceChild(fragment, node)
    replacements.push({ parent, oldNodes: newNodes })
    void oldNodes
  }

  return () => {
    for (const { parent, oldNodes } of replacements) {
      // Flatten back: replace each child of `parent` that we inserted with
      // its textContent. We use a marker class `glossary-term` to find them.
      for (const n of oldNodes) {
        if (n instanceof Element && n.classList?.contains('glossary-term')) {
          const text = document.createTextNode(n.textContent ?? '')
          n.replaceWith(text)
        }
      }
      void parent
    }
  }
}
