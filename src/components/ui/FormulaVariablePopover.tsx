import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import katex from 'katex'
import { extractVariables, type ExtractedVariable } from '@/utils/extractVariables'
import { useFormulaPopover } from '@/utils/formulaPopoverContext'

interface Props {
  latex: string | null
  onClose: () => void
  onOpenGlossary?: () => void
}

export function FormulaVariablePopover({ latex, onClose, onOpenGlossary }: Props) {
  const { topicId } = useFormulaPopover()
  const [expandedKey, setExpandedKey] = useState<string | null>(null)

  useEffect(() => {
    if (!latex) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [latex])

  if (!latex) return null

  const variables = extractVariables(latex, { topicId })

  let renderedFormula: string | null = null
  try {
    renderedFormula = katex.renderToString(latex, {
      throwOnError: false,
      displayMode: true,
      output: 'html',
    })
  } catch {
    renderedFormula = null
  }

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-paper dark:bg-surface-900 border-t-2 border-x-2 border-ink rounded-t-retro animate-slide-in-up shadow-hard-xl max-h-[calc(100dvh-5rem-env(safe-area-inset-bottom))] md:max-h-[70dvh] flex flex-col min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-ink border-b-2 border-ink flex-shrink-0">
          <span className="text-lemon font-mono font-black text-sm tracking-widest">
            {variables.length > 0 ? `${variables.length} VARIABLE${variables.length === 1 ? '' : 'N'}` : 'VARIABLEN'}
          </span>
          <button
            onClick={onClose}
            className="text-surface-400 hover:text-lemon text-lg font-mono transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="Schließen"
          >
            ✕
          </button>
        </div>

        {/* Formula display */}
        {renderedFormula && (
          <div
            className="px-4 py-3 border-b-2 border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 flex-shrink-0 overflow-x-auto text-center"
            dangerouslySetInnerHTML={{ __html: renderedFormula }}
          />
        )}

        {/* Variables list */}
        <div
          className="overflow-y-auto overscroll-contain flex-1 min-h-0 p-4 flex flex-col gap-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {variables.length === 0 ? (
            <div className="text-center py-4 flex flex-col gap-3 items-center">
              <p className="text-sm text-ink-soft dark:text-surface-400">
                Keine bekannten Variablen erkannt.
              </p>
              {onOpenGlossary && (
                <button
                  type="button"
                  onClick={() => { onClose(); onOpenGlossary() }}
                  className="px-3 h-9 border-2 border-ink rounded-retro bg-lemon text-ink shadow-hard-lemon font-mono text-[11px] font-black uppercase tracking-wider retro-press"
                >
                  Volles Glossar →
                </button>
              )}
            </div>
          ) : (
            variables.map((v) => (
              <VariableCard
                key={v.key}
                v={v}
                expanded={expandedKey === v.key}
                onToggle={() => setExpandedKey(expandedKey === v.key ? null : v.key)}
              />
            ))
          )}
        </div>

        <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </div>,
    document.body
  )
}

function VariableCard({
  v,
  expanded,
  onToggle,
}: {
  v: ExtractedVariable
  expanded: boolean
  onToggle: () => void
}) {
  const showAlternates = expanded && v.ambiguous && v.alternates && v.alternates.length > 0
  return (
    <div className="flex flex-col rounded-retro border border-surface-200 dark:border-surface-700 px-3 py-2 bg-white dark:bg-surface-800">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono font-black text-sm text-ink dark:text-paper min-w-[36px]">
          {v.displayLabel}
        </span>
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <span className="text-xs text-ink-soft dark:text-surface-200 truncate">{v.name}</span>
          {v.unit && (
            <span className="font-mono text-[10px] text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/50 px-1.5 py-0.5 rounded flex-shrink-0">
              {v.unit}
            </span>
          )}
        </div>
      </div>
      <p className="text-xs text-ink-soft dark:text-surface-400 mt-1 leading-relaxed border-t border-surface-100 dark:border-surface-700 pt-1">
        {v.desc}
      </p>

      {v.ambiguous && v.alternates && v.alternates.length > 0 && (
        <button
          type="button"
          onClick={onToggle}
          className="mt-1.5 self-start text-[10px] font-mono font-black text-primary-700 dark:text-primary-300 uppercase tracking-wider hover:underline"
          aria-expanded={expanded}
        >
          {expanded ? '↑ Andere Bedeutungen ausblenden' : `↓ ${v.alternates.length} weitere Bedeutung${v.alternates.length === 1 ? '' : 'en'}`}
        </button>
      )}

      {showAlternates && (
        <div className="mt-2 flex flex-col gap-1.5 pl-2 border-l-2 border-surface-300 dark:border-surface-600">
          {v.alternates!.map((alt, i) => (
            <div key={i} className="text-[11px]">
              <span className="font-black text-ink dark:text-surface-100">{alt.name}</span>
              {alt.unit && <span className="font-mono text-ink-soft dark:text-surface-400 ml-1">[{alt.unit}]</span>}
              <p className="text-ink-soft dark:text-surface-400 leading-snug">{alt.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
