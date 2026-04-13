import { useRef, useEffect } from 'react'

/**
 * Custom hook that manages a Canvas element with:
 * - Device Pixel Ratio scaling for crisp rendering on retina displays
 * - IntersectionObserver to pause rAF when off-screen (saves CPU/battery)
 *
 * @param {Function} draw  (ctx, width, height, params) => void
 * @param {any}      params  Any value — the effect re-runs when this changes
 * @returns {React.RefObject}  Attach to <canvas ref={canvasRef} />
 */
export function useCanvas(draw, params) {
  const canvasRef    = useRef(null)
  const animFrameRef = useRef(null)
  const isVisibleRef = useRef(false)
  const observerRef  = useRef(null)
  const drawRef      = useRef(draw)

  // Keep the latest draw function without restarting the effect
  useEffect(() => { drawRef.current = draw }, [draw])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const w = rect.width  || canvas.offsetWidth  || 300
      const h = rect.height || canvas.offsetHeight || 200
      canvas.width  = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function loop() {
      if (!isVisibleRef.current) return
      const w = canvas.offsetWidth  || 300
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
      } else {
        cancelAnimationFrame(animFrameRef.current)
      }
    }, { threshold: 0.1 })

    observerRef.current.observe(canvas)

    const resizeObserver = new ResizeObserver(() => { resize(); })
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      observerRef.current?.disconnect()
      resizeObserver.disconnect()
    }
  }, [params]) // Re-run when params change so new draw values propagate

  return canvasRef
}
