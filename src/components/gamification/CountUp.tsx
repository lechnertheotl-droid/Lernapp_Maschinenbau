// Kleiner Counter, der von 0 zur Zielzahl hochzählt. Respektiert Reduced-Motion.

import { useEffect, useState } from 'react'

interface Props {
  to: number
  durationMs?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function CountUp({ to, durationMs = 700, className, prefix = '', suffix = '' }: Props) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (to <= 0) {
      setValue(0)
      return
    }
    // Reduced-Motion respektieren: Wert direkt setzen.
    if (typeof window !== 'undefined') {
      const reducedAttr = document.documentElement.getAttribute('data-reduced-motion')
      const sysReduced = reducedAttr === 'force'
        || (reducedAttr !== 'off' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
      if (sysReduced) {
        setValue(to)
        return
      }
    }
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(to * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, durationMs])

  return (
    <span className={className}>
      {prefix}
      <span className="num tabular-nums">{value}</span>
      {suffix}
    </span>
  )
}
