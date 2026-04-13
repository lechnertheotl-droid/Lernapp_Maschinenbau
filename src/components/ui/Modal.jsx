import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

      {/* Panel — retro card style */}
      <div
        className={cn(
          'relative bg-paper w-full border-2 border-ink shadow-hard-lg rounded-retro animate-slide-in-up',
          sizes[size]
        )}
      >
        {/* Retro header bar */}
        {title && (
          <div className="flex items-center justify-between px-5 py-3.5 border-b-2 border-ink bg-ink">
            <h2 className="text-base font-bold text-lemon font-mono tracking-wide">{title}</h2>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center border border-surface-600 text-surface-400 hover:text-lemon hover:border-lemon rounded transition-colors text-sm"
              aria-label="Schließen"
            >
              ✕
            </button>
          </div>
        )}
        <div className="p-5 bg-graph-paper-sm">{children}</div>
      </div>
    </div>,
    document.body
  )
}
