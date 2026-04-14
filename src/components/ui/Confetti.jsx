import { useMemo } from 'react'

const COLORS = ['#FFD60A', '#003DA5', '#166534', '#ef4444', '#8b5cf6', '#14b8a6']

export function Confetti({ count = 30 }) {
  const pieces = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duration: 1.6 + Math.random() * 1.4,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 6,
      rotate: Math.random() * 360,
      driftX: (Math.random() - 0.5) * 120,
    }))
  }, [count])

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
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translate3d(0, -20px, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate3d(var(--drift-x), 110vh, 0) rotate(var(--rot));
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  )
}
