import { createPortal } from 'react-dom'
import katex from 'katex'
import { extractVariables } from '@/utils/extractVariables'

export function FormulaVariablePopover({ latex, onClose }) {
  if (!latex) return null

  const variables = extractVariables(latex)

  let renderedFormula = null
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
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-paper border-t-2 border-x-2 border-ink rounded-t-retro animate-slide-in-up shadow-hard-xl max-h-[70dvh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-ink border-b-2 border-ink flex-shrink-0">
          <span className="text-lemon font-mono font-black text-sm tracking-widest">VARIABLEN</span>
          <button
            onClick={onClose}
            className="text-surface-400 hover:text-lemon text-lg font-mono transition-colors w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Formula display */}
        {renderedFormula && (
          <div
            className="px-4 py-3 border-b-2 border-surface-200 bg-surface-50 flex-shrink-0 overflow-x-auto text-center"
            dangerouslySetInnerHTML={{ __html: renderedFormula }}
          />
        )}

        {/* Variables list */}
        <div className="overflow-y-auto flex-1 p-4 flex flex-col gap-2">
          {variables.length === 0 ? (
            <p className="text-sm text-ink-soft text-center py-4">
              Keine bekannten Variablen erkannt.
            </p>
          ) : (
            variables.map(({ key, displayLabel, name, unit, desc }) => (
              <div
                key={key}
                className="flex flex-col rounded-retro border border-surface-200 px-3 py-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-black text-sm text-ink min-w-[36px]">{displayLabel}</span>
                  <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                    <span className="text-xs text-ink-soft truncate">{name}</span>
                    <span className="font-mono text-[10px] text-primary-700 bg-primary-50 px-1.5 py-0.5 rounded flex-shrink-0">{unit}</span>
                  </div>
                </div>
                <p className="text-xs text-ink-soft mt-1 leading-relaxed border-t border-surface-100 pt-1">{desc}</p>
              </div>
            ))
          )}
        </div>

        <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </div>,
    document.body
  )
}
