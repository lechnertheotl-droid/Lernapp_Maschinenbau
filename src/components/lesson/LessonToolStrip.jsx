import { useState, useEffect, useRef } from 'react'
import { ToolButton } from '@/components/ui/ToolButton'

export function LessonToolStrip({
  onOpenVariables,
  onOpenFormulas,
  onOpenCalculator,
  onOpenSummary,
  showFormulas = true,
}) {
  const [open, setOpen] = useState(false)
  const stripRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e) => {
      if (!stripRef.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div
      ref={stripRef}
      className="fixed right-3 z-30 flex flex-col items-end gap-2"
      style={{ bottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
    >
      {open && (
        <>
          <ToolButton
            onClick={() => { onOpenVariables(); close() }}
            label="Variablen-Glossar öffnen"
            className="text-[11px] animate-fade-in"
          >
            x,y
          </ToolButton>
          {showFormulas && (
            <ToolButton
              onClick={() => { onOpenFormulas(); close() }}
              label="Formelsammlung öffnen"
              variant="lemon"
              className="animate-fade-in"
            >
              f
            </ToolButton>
          )}
          <ToolButton
            onClick={() => { onOpenCalculator(); close() }}
            label="Taschenrechner öffnen"
            className="animate-fade-in"
          >
            =
          </ToolButton>
          <ToolButton
            onClick={() => { onOpenSummary(); close() }}
            label="Zusammenfassung der Lektion öffnen"
            className="text-[10px] animate-fade-in"
          >
            ∑
          </ToolButton>
        </>
      )}
      <ToolButton
        onClick={() => setOpen((o) => !o)}
        label={open ? 'Werkzeuge schließen' : 'Werkzeuge öffnen'}
        variant="lemon"
        aria-expanded={open}
      >
        {open ? '×' : '⚙'}
      </ToolButton>
    </div>
  )
}
