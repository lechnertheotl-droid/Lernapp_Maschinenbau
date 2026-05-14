import { useCallback, useRef, useState } from 'react'

/**
 * Gesten-Navigation für die Lesson-Ansicht. Unterstützt:
 *   • Horizontales Wischen (links/rechts) → onSwipeLeft / onSwipeRight
 *   • Vertikales Wischen nach unten → onSwipeDown
 *     – nur aktiv, wenn der zugehörige Scroll-Container ganz oben ist
 *       (scrollTop === 0), damit normales Vertikal-Scrollen unangetastet bleibt.
 *
 * Live-Tracking: das Element folgt dem Finger via `translate3d`-Transform;
 * bei genug Strecke ODER Geschwindigkeit wird die Callback ausgelöst und der
 * Inhalt animiert hinaus. Andernfalls federt er zurück.
 *
 * Achs-Entscheidung in den ersten Pixeln der Bewegung — vertikales Scrollen
 * bleibt erhalten, wenn der Hook dort passiv ist.
 *
 * Richtungen ohne Callback erhalten einen iOS-artigen Rubber-Band-Widerstand:
 * man sieht, dass die Geste registriert wird, sie löst aber nichts aus.
 */
export function useGestureNav({
  onSwipeLeft,
  onSwipeRight,
  onSwipeDown,
  // Anteil der Viewport-Breite, der für eine "langsame" Horizontalgeste überschritten werden muss.
  distanceRatio = 0.28,
  // Anteil der Viewport-Höhe für die Down-Geste.
  downDistanceRatio = 0.2,
  // Mindest-Geschwindigkeit in px/ms für eine "schnelle" Geste (Flick).
  velocityThreshold = 0.55,
  // Wie weit (px) bewegt werden muss, bevor die Achse (horizontal vs. vertikal) festgelegt wird.
  decideDistance = 10,
  // Animationsdauer für Commit (Auslösung) und Snap-Back (Zurückfedern).
  commitMs = 220,
  snapBackMs = 180,
  // Optionaler Ref auf den Scroll-Container — nur wenn dessen scrollTop===0,
  // wird Swipe-Down erkannt; sonst soll normales Scrollen weiterlaufen.
  scrollContainerRef = null,
} = {}) {
  const startRef = useRef(null) // { x, y, time, decided, width, height, scrollTopStart }
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [animating, setAnimating] = useState(false)

  const reset = () => {
    startRef.current = null
    setOffsetX(0)
    setOffsetY(0)
    setAnimating(false)
  }

  const onTouchStart = useCallback((e) => {
    if (e.touches.length !== 1) return
    const t = e.touches[0]
    const sc = scrollContainerRef?.current
    startRef.current = {
      x: t.clientX,
      y: t.clientY,
      time: Date.now(),
      decided: null,
      width: window.innerWidth || 360,
      height: window.innerHeight || 640,
      scrollTopStart: sc?.scrollTop ?? 0,
    }
    setOffsetX(0)
    setOffsetY(0)
    setAnimating(false)
  }, [scrollContainerRef])

  const onTouchMove = useCallback((e) => {
    const s = startRef.current
    if (!s) return
    const t = e.touches[0]
    const dx = t.clientX - s.x
    const dy = t.clientY - s.y

    if (s.decided === null) {
      if (Math.abs(dx) < decideDistance && Math.abs(dy) < decideDistance) return
      const horizontal = Math.abs(dx) > Math.abs(dy)
      if (horizontal) {
        s.decided = 'horizontal'
      } else if (dy > 0 && s.scrollTopStart === 0 && onSwipeDown) {
        // Vertikal nach unten + Container oben → wir übernehmen als Pull-Down.
        s.decided = 'down'
      } else {
        // Normales vertikales Scrollen — Hook bleibt für den Rest der Geste passiv.
        s.decided = 'passive'
      }
    }

    if (s.decided === 'horizontal') {
      let drag = dx
      if (drag > 0 && !onSwipeRight) drag = rubberBand(drag, s.width)
      else if (drag < 0 && !onSwipeLeft) drag = -rubberBand(-drag, s.width)
      setOffsetX(drag)
      return
    }
    if (s.decided === 'down') {
      // Nur Bewegung nach unten zulassen; negative dy zurück auf 0 federn lassen.
      const drag = rubberBand(Math.max(0, dy), s.height)
      setOffsetY(drag)
    }
  }, [decideDistance, onSwipeDown, onSwipeLeft, onSwipeRight])

  const finishSnapBack = useCallback(() => {
    setAnimating(true)
    setOffsetX(0)
    setOffsetY(0)
    window.setTimeout(() => setAnimating(false), snapBackMs)
    startRef.current = null
  }, [snapBackMs])

  const commit = useCallback((axis, targetOffset, callback) => {
    setAnimating(true)
    if (axis === 'x') setOffsetX(targetOffset)
    else setOffsetY(targetOffset)
    window.setTimeout(() => {
      try { callback() } finally { reset() }
    }, commitMs)
    startRef.current = null
  }, [commitMs])

  const onTouchEnd = useCallback((e) => {
    const s = startRef.current
    if (!s || s.decided === null || s.decided === 'passive') {
      if (s) reset()
      return
    }
    const t = e.changedTouches[0]
    const dx = t.clientX - s.x
    const dy = t.clientY - s.y
    const elapsed = Math.max(1, Date.now() - s.time)

    if (s.decided === 'horizontal') {
      const velocity = dx / elapsed
      const triggered = Math.abs(dx) > s.width * distanceRatio || Math.abs(velocity) > velocityThreshold
      if (triggered && dx > 0 && onSwipeRight) return commit('x', s.width, onSwipeRight)
      if (triggered && dx < 0 && onSwipeLeft)  return commit('x', -s.width, onSwipeLeft)
      finishSnapBack()
      return
    }
    if (s.decided === 'down') {
      const velocity = dy / elapsed
      const triggered = dy > s.height * downDistanceRatio || velocity > velocityThreshold
      if (triggered && onSwipeDown) return commit('y', s.height, onSwipeDown)
      finishSnapBack()
    }
  }, [commit, distanceRatio, downDistanceRatio, finishSnapBack, onSwipeDown, onSwipeLeft, onSwipeRight, velocityThreshold])

  const onTouchCancel = useCallback(() => {
    if (!startRef.current) return
    finishSnapBack()
  }, [finishSnapBack])

  const style = {
    transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
    transition: animating
      ? `transform ${snapBackMs}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${snapBackMs}ms ease-out`
      : 'none',
    opacity: 1 - Math.min(Math.max(Math.abs(offsetX), offsetY) / 600, 0.35),
    willChange: 'transform',
    touchAction: 'pan-y',
  }

  return {
    handlers: { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel },
    style,
    dragOffsetX: offsetX,
    dragOffsetY: offsetY,
  }
}

// iOS-ähnlicher Rubber-Band-Widerstand: f(x) = (x * d) / (d/c + x), c≈0.55.
function rubberBand(distance, extent) {
  const c = 0.55
  const d = Math.max(1, extent)
  return (distance * d) / (d / c + distance)
}
