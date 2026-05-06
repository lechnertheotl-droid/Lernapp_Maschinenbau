import { useMemo, type CSSProperties } from 'react'

const COLORS = ['#FFD60A', '#003DA5', '#166534', '#ef4444', '#8b5cf6', '#14b8a6']

// variant 'mini' = 8 Partikel, kürzere Distanz — für Combo-Milestones in der Lesson.
// variant 'normal' = 20 Partikel — für Lesson-Abschluss (reduziert von vorher 30).
type Variant = 'mini' | 'normal'

const VARIANTS: Record<Variant, { count: number; baseDur: number; drift: number; fall: number }> = {
  mini:   { count: 8,  baseDur: 1.0, drift: 60,  fall: 40 },
  normal: { count: 20, baseDur: 1.6, drift: 120, fall: 110 },
}

interface Props {
  variant?: Variant
  count?: number
}

export function Confetti({ variant = 'normal', count }: Props) {
  const cfg = VARIANTS[variant] ?? VARIANTS.normal
  const total = count ?? cfg.count
  const pieces = useMemo(() => {
    return Array.from({ length: total }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duration: cfg.baseDur + Math.random() * 1.2,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 6,
      rotate: Math.random() * 360,
      driftX: (Math.random() - 0.5) * cfg.drift,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, variant])

  const fallVh = `${cfg.fall}vh`

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 block will-change-transform"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.6}px`,
            backgroundColor: p.color,
            borderRadius: '2px',
            animation: `confettiFall ${p.duration}s cubic-bezier(0.22, 1, 0.36, 1) ${p.delay}s forwards`,
            '--drift-x': `${p.driftX}px`,
            '--rot': `${p.rotate}deg`,
            '--fall-vh': fallVh,
          } as CSSProperties}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translate3d(0, -20px, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate3d(var(--drift-x), var(--fall-vh), 0) rotate(var(--rot));
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  )
}
