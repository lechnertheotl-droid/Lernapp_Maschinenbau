interface Sparkle {
  top: string
  left: string
  size: number
  delay: number
  rotation: number
}

const SPARKLES: Sparkle[] = [
  { top: '4%',  left: '12%', size: 14, delay: 0.6, rotation: 12 },
  { top: '10%', left: '82%', size: 18, delay: 0.9, rotation: -8 },
  { top: '52%', left: '92%', size: 12, delay: 1.2, rotation: 22 },
  { top: '78%', left: '8%',  size: 16, delay: 0.8, rotation: -18 },
  { top: '88%', left: '70%', size: 14, delay: 1.1, rotation: 6 },
  { top: '36%', left: '2%',  size: 10, delay: 1.4, rotation: -25 },
]

function SparkleStar({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="drop-shadow-[1px_1px_0_#1a1a1a]">
      <path
        d="M12 2 L13.8 9.2 L21 12 L13.8 14.8 L12 22 L10.2 14.8 L3 12 L10.2 9.2 Z"
        fill="#FFD60A"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LessonCompleteBadge() {
  return (
    <div
      className="relative w-full flex items-center justify-center py-2"
      aria-hidden="true"
    >
      <div className="relative w-44 h-44">
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="absolute motion-safe:animate-sparkle motion-reduce:opacity-100"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: `${s.delay}s`,
              transform: `rotate(${s.rotation}deg)`,
              opacity: 0,
            }}
          >
            <SparkleStar size={s.size} />
          </span>
        ))}

        <div className="absolute inset-3 rounded-full border-[3px] border-ink bg-lemon shadow-hard-lg flex items-center justify-center motion-safe:opacity-0 motion-safe:animate-stamp-in overflow-hidden">
          <span
            className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/45 blur-sm motion-safe:animate-badge-shine motion-reduce:hidden"
          />
          <svg
            viewBox="0 0 64 64"
            className="w-24 h-24 relative"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M14 34 L28 48 L52 18"
              strokeDasharray="60"
              strokeDashoffset="60"
              className="motion-safe:animate-check-draw motion-reduce:[stroke-dashoffset:0]"
            />
          </svg>
        </div>

        <div
          className="absolute -top-1 -right-2 rotate-[8deg] bg-ink text-lemon font-mono font-black text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-lemon shadow-hard-sm motion-safe:opacity-0 motion-safe:animate-stamp-in"
          style={{ animationDelay: '0.3s' }}
        >
          Geschafft!
        </div>
      </div>
    </div>
  )
}
