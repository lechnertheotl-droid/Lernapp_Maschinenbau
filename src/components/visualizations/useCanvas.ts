import { useRef, useEffect, type RefObject } from 'react'

export type CanvasDrawFn<P> = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  params: P
) => void

/**
 * Custom hook für Canvas-Komponenten:
 *  - DPR-skaliertes Rendering (scharfes Bild auf Retina)
 *  - IntersectionObserver pausiert rAF, wenn off-screen
 *  - ResizeObserver triggert resize bei Container-Änderungen
 *
 * Generic `<P>` repräsentiert die `params`-Shape, die an `draw` durchgereicht wird.
 * Beispiel: `useCanvas<{angle: number}>(drawFn, { angle: 45 })`.
 */
export function useCanvas<P>(
  draw: CanvasDrawFn<P>,
  params: P
): RefObject<HTMLCanvasElement> {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number | null>(null)
  const isVisibleRef = useRef(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const drawRef = useRef(draw)

  useEffect(() => { drawRef.current = draw }, [draw])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas || !ctx) return
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const w = rect.width || canvas.offsetWidth || 300
      const h = rect.height || canvas.offsetHeight || 200
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function loop() {
      if (!isVisibleRef.current) return
      if (!canvas || !ctx) return
      const w = canvas.offsetWidth || 300
      const h = canvas.offsetHeight || 200
      ctx.clearRect(0, 0, w, h)
      drawRef.current(ctx, w, h, params)
      animFrameRef.current = requestAnimationFrame(loop)
    }

    resize()

    observerRef.current = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting
      if (entry.isIntersecting) {
        loop()
      } else if (animFrameRef.current != null) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }, { threshold: 0.1 })

    observerRef.current.observe(canvas)

    const resizeObserver = new ResizeObserver(() => { resize() })
    resizeObserver.observe(canvas)

    return () => {
      if (animFrameRef.current != null) cancelAnimationFrame(animFrameRef.current)
      observerRef.current?.disconnect()
      resizeObserver.disconnect()
    }
  }, [params])

  return canvasRef
}
