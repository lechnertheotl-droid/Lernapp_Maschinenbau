import { cn } from '@/utils/cn'

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

function TriangleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M10 38 38 38 38 10Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M34 38 34 30 38 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 34 30 34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

function DerivativeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M7 36h34M12 41V8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 34c8-1 10-21 18-22 4-.5 7 4 9 9" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M17 25h20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

function VectorIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M9 38 36 11" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M25 10h12v12" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 38h26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      <path d="M9 38V12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function AlgebraIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M10 15h28M10 24h28M10 33h28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      <text x="24" y="30" textAnchor="middle" className="fill-current font-mono font-black" fontSize="18">xⁿ</text>
    </svg>
  )
}

function IntegralIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M22 6c-6 0-6 8-6 14v8c0 6 0 14-6 14" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M14 24h20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <text x="36" y="20" className="fill-current font-mono font-black" fontSize="12">dx</text>
    </svg>
  )
}

function MatrixIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M12 8v32M12 8h-2M12 40h-2M36 8v32M36 8h2M36 40h2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="16" r="2.5" fill="currentColor" />
      <circle cx="32" cy="16" r="2.5" fill="currentColor" />
      <circle cx="20" cy="24" r="2.5" fill="currentColor" />
      <circle cx="32" cy="24" r="2.5" fill="currentColor" />
      <circle cx="20" cy="32" r="2.5" fill="currentColor" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
    </svg>
  )
}

function DGLIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M6 38h36M10 38V8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <path d="M10 36c4-2 6-18 10-22s6-2 8 2 6 10 10 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <text x="36" y="14" className="fill-current font-mono font-black" fontSize="10">y'</text>
    </svg>
  )
}

function MechanikIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* beam */}
      <rect x="8" y="18" width="32" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* support left - triangle */}
      <path d="M14 24l-4 10h8z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {/* support right - roller */}
      <path d="M34 24v8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="34" cy="34" r="2.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {/* force arrow */}
      <path d="M24 4v14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 14l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FestigkeitIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* specimen */}
      <rect x="18" y="6" width="12" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* stress arrows */}
      <path d="M24 2v6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 6l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 46v-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 42l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* sigma */}
      <text x="24" y="27" textAnchor="middle" className="fill-current font-mono font-black" fontSize="13">σ</text>
    </svg>
  )
}

function ThermoIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* thermometer body */}
      <rect x="20" y="6" width="8" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* bulb */}
      <circle cx="24" cy="38" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* mercury */}
      <rect x="22" y="16" width="4" height="18" rx="2" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="38" r="3.5" fill="currentColor" opacity="0.7" />
      {/* heat waves */}
      <path d="M34 14c2-2 2-6 0-8M38 16c3-3 3-9 0-12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function FluidIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* container */}
      <path d="M8 14v24h32V14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* water surface */}
      <path d="M8 22c4-3 8 3 12 0s8 3 12 0 4-3 8 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* flow arrow */}
      <path d="M16 30h16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 26l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MaschinenelementeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* gear */}
      <circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      {/* teeth */}
      <path d="M24 8v5M24 35v5M8 24h5M35 24h5M13 13l3.5 3.5M31.5 31.5l3.5 3.5M13 35l3.5-3.5M31.5 16.5L35 13" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* terminal prompt */}
      <path d="M8 12h32v28H8z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" rx="3" />
      <path d="M14 20l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 32h10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

const ICONS = {
  trigonometry: TriangleIcon,
  ableitung: DerivativeIcon,
  vektoren: VectorIcon,
  algebra: AlgebraIcon,
  integralrechnung: IntegralIcon,
  'lineare-algebra': MatrixIcon,
  differentialgleichungen: DGLIcon,
  'technische-mechanik': MechanikIcon,
  festigkeitslehre: FestigkeitIcon,
  thermodynamik: ThermoIcon,
  fluidmechanik: FluidIcon,
  maschinenelemente: MaschinenelementeIcon,
  'python-matlab': PythonIcon,
}

export function TopicIcon({ topic, size = 'md', className }) {
  const Icon = ICONS[topic?.id]

  return (
    <span className={cn(
      'inline-flex items-center justify-center rounded-retro border-2 border-ink bg-lemon text-ink shadow-hard-sm flex-shrink-0',
      sizeClasses[size] ?? sizeClasses.md,
      className,
    )}>
      {Icon ? (
        <Icon />
      ) : (
        <span className="font-mono font-black text-sm uppercase tracking-tight">
          {(topic?.icon ?? topic?.title ?? '?').slice(0, 3)}
        </span>
      )}
    </span>
  )
}
