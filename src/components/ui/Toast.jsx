import { createContext, useContext, useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

const ToastContext = createContext(null)

const toneConfig = {
  encouraging: { bg: 'bg-green-600 border-green-800', icon: '✓' },
  corrective:  { bg: 'bg-red-600 border-red-800',   icon: '✗' },
  celebratory: { bg: 'bg-primary-700 border-primary-900', icon: '★' },
  info:        { bg: 'bg-ink border-ink-light',      icon: 'i' },
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const showToast = useCallback(({ message, tone = 'info', duration = 2800 }) => {
    const id = ++idRef.current
    setToasts((prev) => [...prev, { id, message, tone }])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), duration)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {createPortal(
        <div className="fixed bottom-24 md:bottom-8 left-0 right-0 flex flex-col items-center gap-2 z-[60] pointer-events-none px-4">
          {toasts.map((t) => {
            const cfg = toneConfig[t.tone] ?? toneConfig.info
            return (
              <div
                key={t.id}
                className={cn(
                  'flex items-center gap-2.5 px-4 py-3 rounded-retro border-2 text-white text-sm font-semibold',
                  'shadow-hard max-w-sm w-full animate-pop',
                  cfg.bg
                )}
              >
                <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-xs flex-shrink-0 font-mono font-bold">
                  {cfg.icon}
                </span>
                <span className="flex-1">{t.message}</span>
              </div>
            )
          })}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
