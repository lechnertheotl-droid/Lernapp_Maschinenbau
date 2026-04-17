import { useRef } from 'react'

/**
 * Minimaler Swipe-Hook für Touch-Geräte. Feuert `onSwipeLeft` / `onSwipeRight`
 * NUR bei überwiegend horizontaler Bewegung, damit normales vertikales Scrollen
 * weiterhin funktioniert.
 *
 * @param {{ onSwipeLeft?: () => void, onSwipeRight?: () => void, threshold?: number }} opts
 *   `threshold` = minimale horizontale Distanz in Pixeln (Default 60).
 */
export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 60 } = {}) {
  const start = useRef(null)

  const onTouchStart = (e) => {
    const t = e.touches[0]
    if (!t) return
    start.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchEnd = (e) => {
    if (!start.current) return
    const t = e.changedTouches[0]
    if (!t) return
    const dx = t.clientX - start.current.x
    const dy = t.clientY - start.current.y
    // Horizontale Bewegung muss sowohl den Threshold überschreiten als auch
    // deutlich größer als die vertikale sein, sonst war es Scrollen.
    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) onSwipeLeft?.()
      else        onSwipeRight?.()
    }
    start.current = null
  }

  return { onTouchStart, onTouchEnd }
}
