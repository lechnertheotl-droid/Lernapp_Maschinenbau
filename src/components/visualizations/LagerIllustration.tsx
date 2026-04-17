import { useState } from 'react'

type LagerKind = 'festlager' | 'loslager' | 'einspannung'

interface LagerInfo {
  name: string
  reactions: string
  freiheiten: string
  description: string
}

const LAGER: Record<LagerKind, LagerInfo> = {
  festlager: {
    name: 'Festlager (Pin)',
    reactions: 'Fₓ, F_y',
    freiheiten: 'verhindert x- und y-Verschiebung, Drehung frei',
    description: 'Nimmt Kräfte in beide Richtungen auf. Kann aber nicht drehen blockieren.',
  },
  loslager: {
    name: 'Loslager (Roller)',
    reactions: 'F_y (nur senkrecht zur Rollbahn)',
    freiheiten: 'verhindert nur y-Verschiebung, x und Drehung frei',
    description: 'Nimmt nur eine Kraft senkrecht zur Gleitfläche auf. Keine Horizontalkraft, kein Moment.',
  },
  einspannung: {
    name: 'Einspannung',
    reactions: 'Fₓ, F_y, M',
    freiheiten: 'verhindert alle drei Bewegungen',
    description: 'Nimmt beide Kraftrichtungen und ein Einspannmoment auf. Vollständig „eingemauert".',
  },
}

function FestlagerSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" role="img" aria-label="Festlager — Kräfte in x und y">
      {/* Beam stump */}
      <rect x="40" y="32" width="40" height="10" fill="#e2e8f0" stroke="#1a1a1a" strokeWidth="2" />
      {/* Pin triangle */}
      <polygon points="60,46 40,78 80,78" fill="#3b82f6" stroke="#1a1a1a" strokeWidth="2" />
      {/* Ground */}
      <line x1="20" y1="82" x2="100" y2="82" stroke="#1a1a1a" strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1={24 + i * 10} y1="82" x2={18 + i * 10} y2="92" stroke="#94a3b8" strokeWidth="1" />
      ))}
      {/* Reaction arrows Fx, Fy */}
      <g stroke="#dc2626" strokeWidth="2" fill="#dc2626">
        <line x1="60" y1="62" x2="100" y2="62" />
        <polygon points="100,62 94,58 94,66" />
        <text x="102" y="64" fontFamily="ui-monospace" fontWeight="700" fontSize="10" fill="#dc2626">Fx</text>
        <line x1="60" y1="62" x2="60" y2="22" />
        <polygon points="60,22 56,28 64,28" />
        <text x="44" y="20" fontFamily="ui-monospace" fontWeight="700" fontSize="10" fill="#dc2626">Fy</text>
      </g>
    </svg>
  )
}

function LoslagerSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" role="img" aria-label="Loslager — nur F_y">
      <rect x="40" y="32" width="40" height="10" fill="#e2e8f0" stroke="#1a1a1a" strokeWidth="2" />
      {/* Triangle */}
      <polygon points="60,46 44,72 76,72" fill="#ef4444" stroke="#1a1a1a" strokeWidth="2" />
      {/* Rollers */}
      <circle cx="50" cy="78" r="5" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="70" cy="78" r="5" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
      {/* Ground */}
      <line x1="20" y1="85" x2="100" y2="85" stroke="#1a1a1a" strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1={24 + i * 10} y1="85" x2={18 + i * 10} y2="95" stroke="#94a3b8" strokeWidth="1" />
      ))}
      {/* Only Fy */}
      <g stroke="#dc2626" strokeWidth="2" fill="#dc2626">
        <line x1="60" y1="62" x2="60" y2="22" />
        <polygon points="60,22 56,28 64,28" />
        <text x="44" y="20" fontFamily="ui-monospace" fontWeight="700" fontSize="10" fill="#dc2626">Fy</text>
      </g>
      {/* Strike-through Fx to show it doesn't exist */}
      <g stroke="#94a3b8" strokeWidth="1" fill="#94a3b8">
        <line x1="60" y1="62" x2="95" y2="62" strokeDasharray="4 3" />
        <text x="100" y="64" fontFamily="ui-monospace" fontSize="9" fill="#94a3b8">Fx = 0</text>
      </g>
    </svg>
  )
}

function EinspannungSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" role="img" aria-label="Einspannung — Fx, Fy und Moment">
      {/* Wall */}
      <rect x="10" y="20" width="16" height="80" fill="#94a3b8" stroke="#1a1a1a" strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <line key={i} x1="10" y1={24 + i * 9} x2="2" y2={30 + i * 9} stroke="#1a1a1a" strokeWidth="1" />
      ))}
      {/* Beam */}
      <rect x="26" y="54" width="80" height="12" fill="#e2e8f0" stroke="#1a1a1a" strokeWidth="2" />
      {/* Reactions */}
      <g stroke="#dc2626" strokeWidth="2" fill="#dc2626">
        <line x1="26" y1="60" x2="60" y2="60" />
        <polygon points="60,60 54,56 54,64" />
        <text x="38" y="56" fontFamily="ui-monospace" fontWeight="700" fontSize="10" fill="#dc2626">Fx</text>
        <line x1="26" y1="60" x2="26" y2="28" />
        <polygon points="26,28 22,34 30,34" />
        <text x="30" y="28" fontFamily="ui-monospace" fontWeight="700" fontSize="10" fill="#dc2626">Fy</text>
      </g>
      {/* Moment arc */}
      <g stroke="#16a34a" strokeWidth="2" fill="none">
        <path d="M 26 85 A 15 15 0 0 1 38 92" />
        <polygon points="38,92 32,91 35,96" fill="#16a34a" />
        <text x="14" y="106" fontFamily="ui-monospace" fontWeight="700" fontSize="10" fill="#16a34a">M</text>
      </g>
    </svg>
  )
}

export function LagerIllustration({ initialKind = 'festlager' as LagerKind }) {
  const [kind, setKind] = useState<LagerKind>(initialKind)
  const info = LAGER[kind]

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1.5 flex-wrap" role="radiogroup" aria-label="Lagertyp">
        {(Object.keys(LAGER) as LagerKind[]).map((k) => (
          <button
            key={k}
            type="button"
            role="radio"
            aria-checked={kind === k}
            onClick={() => setKind(k)}
            className={`px-3 h-9 border-2 border-ink rounded-retro font-mono text-[11px] font-black uppercase retro-press ${
              kind === k
                ? 'bg-primary-700 text-white shadow-hard-sm dark:bg-primary-400 dark:text-ink'
                : 'bg-white dark:bg-surface-800 text-ink dark:text-paper shadow-hard-sm'
            }`}
          >
            {LAGER[k].name.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-surface-100 border-2 border-ink dark:border-surface-500 rounded-retro shadow-hard-sm p-3">
        <div className="aspect-square w-full max-w-[260px] mx-auto">
          {kind === 'festlager' && <FestlagerSVG />}
          {kind === 'loslager' && <LoslagerSVG />}
          {kind === 'einspannung' && <EinspannungSVG />}
        </div>
      </div>

      <div className="border-2 border-ink bg-lemon-light rounded-retro shadow-hard-sm p-3">
        <p className="font-mono text-[10px] font-black text-ink uppercase tracking-widest mb-1">
          // {info.name}
        </p>
        <dl className="text-sm text-ink space-y-1">
          <div>
            <dt className="inline font-black">Reaktionen:</dt>{' '}
            <dd className="inline font-mono">{info.reactions}</dd>
          </div>
          <div>
            <dt className="inline font-black">Freiheiten:</dt>{' '}
            <dd className="inline">{info.freiheiten}</dd>
          </div>
        </dl>
        <p className="text-ink-soft text-[12px] mt-2">{info.description}</p>
      </div>
    </div>
  )
}
