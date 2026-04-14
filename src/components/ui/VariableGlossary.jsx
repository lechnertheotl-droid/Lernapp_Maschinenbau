import { useState } from 'react'
import { createPortal } from 'react-dom'
import { VARIABLES, CATEGORIES, DISPLAY_LABELS } from '@/utils/variablesDB'

export function VariableGlossary({ isOpen, onClose }) {
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)

  if (!isOpen) return null

  const lc = search.toLowerCase()
  const filtered = lc
    ? CATEGORIES.map((cat) => ({
        ...cat,
        keys: cat.keys.filter((k) => {
          const v = VARIABLES[k]
          if (!v) return false
          return k.toLowerCase().includes(lc) || v.name.toLowerCase().includes(lc) || v.desc.toLowerCase().includes(lc)
        }),
      })).filter((cat) => cat.keys.length > 0)
    : CATEGORIES

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-end justify-center" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-paper border-t-2 border-x-2 border-ink rounded-t-retro animate-slide-in-up shadow-hard-xl max-h-[80dvh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-ink border-b-2 border-ink flex-shrink-0">
          <span className="text-lemon font-mono font-black text-sm tracking-widest">VARIABLEN</span>
          <button onClick={onClose} className="text-surface-400 hover:text-lemon text-lg font-mono transition-colors w-8 h-8 flex items-center justify-center">✕</button>
        </div>

        {/* Search */}
        <div className="px-4 py-2 border-b-2 border-surface-200 flex-shrink-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Variable suchen…"
            className="w-full px-3 py-2 border-2 border-ink rounded-retro font-mono text-sm bg-white focus:outline-none focus:border-primary-700"
            autoFocus
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-4 flex flex-col gap-4">
          {filtered.map((cat) => (
            <div key={cat.name}>
              <p className="text-[10px] font-mono font-bold text-primary-700 uppercase tracking-widest mb-2 border-b border-primary-200 pb-1">
                {cat.name}
              </p>
              <div className="flex flex-col gap-1">
                {cat.keys.map((k) => {
                  const v = VARIABLES[k]
                  if (!v) return null
                  const isExpanded = expanded === k
                  const displayKey = DISPLAY_LABELS[k] || k
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : k)}
                      className="w-full text-left flex flex-col rounded-retro border border-surface-200 hover:border-primary-300 px-3 py-2 transition-colors tap-highlight-none"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-black text-sm text-ink min-w-[32px]">{displayKey}</span>
                        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                          <span className="text-xs text-ink-soft truncate">{v.name}</span>
                          <span className="font-mono text-[10px] text-primary-700 bg-primary-50 px-1.5 py-0.5 rounded flex-shrink-0">{v.unit}</span>
                        </div>
                      </div>
                      {isExpanded && (
                        <p className="text-xs text-ink-soft mt-1.5 leading-relaxed border-t border-surface-100 pt-1.5">{v.desc}</p>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-ink-soft text-center py-4">Keine Variable gefunden.</p>
          )}
        </div>

        <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </div>,
    document.body
  )
}
