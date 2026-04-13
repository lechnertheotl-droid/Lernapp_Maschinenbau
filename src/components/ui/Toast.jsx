import { createContext, useContext, useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

const ToastContext = createContext(null)

const toneStyles = {
  encouraging:  'bg-green-600 text-white',
  corrective:   'bg-red-600 text-white',
  celebratory:  'bg-primary-700 text-white',
  info:         'bg-surface-800 text-white',
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
        <div className="fixed bottom-20 md:bottom-6 left-0 right-0 flex flex-col items-center gap-2 z-50 pointer-events-none px-4">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={cn(
                'px-4 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in max-w-sm w-full text-center',
                toneStyles[t.tone]
              )}
            >
              {t.message}
            </div>
          ))}
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
