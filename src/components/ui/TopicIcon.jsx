import { cn } from '@/utils/cn'

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

function TriangleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M5 43 43 43 43 5Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M37 43 37 33 43 33" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 38 32 38" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
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
      <path d="M6 42 42 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M28 5h15v15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 42h34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      <path d="M6 42V8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function AlgebraIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M5 12h38M5 24h38M5 36h38" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      <text x="24" y="32" textAnchor="middle" className="fill-current font-mono font-black" fontSize="26">xⁿ</text>
    </svg>
  )
}

function IntegralIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M24 4c-7 0-7 9-7 16v8c0 7 0 16-7 16" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M12 24h24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <text x="34" y="18" className="fill-current font-mono font-black" fontSize="13">dx</text>
    </svg>
  )
}

function MatrixIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M8 5v38M8 5H5M8 43H5M40 5v38M40 5h3M40 43h3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="18" cy="15" r="3" fill="currentColor" />
      <circle cx="30" cy="15" r="3" fill="currentColor" />
      <circle cx="18" cy="24" r="3" fill="currentColor" />
      <circle cx="30" cy="24" r="3" fill="currentColor" />
      <circle cx="18" cy="33" r="3" fill="currentColor" />
      <circle cx="30" cy="33" r="3" fill="currentColor" />
    </svg>
  )
}

function DGLIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M4 42h40M7 42V4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <path d="M7 40c5-2 7-22 12-27s7-2 9 3 7 12 13 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <text x="36" y="13" className="fill-current font-mono font-black" fontSize="13">y'</text>
    </svg>
  )
}

function MechanikIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* beam */}
      <rect x="4" y="22" width="40" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* support left - triangle */}
      <path d="M12 29l-5 13h10z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {/* support right - roller */}
      <path d="M36 29v9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="36" cy="40" r="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {/* force arrow */}
      <path d="M24 3v18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M19 16l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FestigkeitIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* specimen */}
      <rect x="16" y="9" width="16" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* stress arrows */}
      <path d="M24 2v7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 7l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 46v-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 41l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* sigma */}
      <text x="24" y="29" textAnchor="middle" className="fill-current font-mono font-black" fontSize="16">σ</text>
    </svg>
  )
}

function ThermoIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* thermometer body */}
      <rect x="18" y="3" width="10" height="32" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* bulb */}
      <circle cx="23" cy="39" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* mercury */}
      <rect x="20.5" y="14" width="5" height="21" rx="2" fill="currentColor" opacity="0.7" />
      <circle cx="23" cy="39" r="4" fill="currentColor" opacity="0.7" />
      {/* heat waves */}
      <path d="M35 13c3-3 3-8 0-11M40 15c4-4 4-12 0-15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function FluidIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* container */}
      <path d="M4 8v36h40V8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* water surface */}
      <path d="M4 19c5-4 10 4 15 0s10 4 15 0 5-4 10 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* flow arrow */}
      <path d="M12 33h22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M29 28l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MaschinenelementeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* gear */}
      <circle cx="24" cy="24" r="11" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      {/* teeth */}
      <path d="M24 3v7M24 38v7M3 24h7M38 24h7M9 9l5 5M34 34l5 5M9 39l5-5M34 14l5-5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* terminal prompt */}
      <rect x="4" y="7" width="40" height="34" rx="3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M11 17l9 7-9 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 34h16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function WerkstoffkundeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* crystal lattice */}
      <circle cx="10" cy="10" r="3" fill="currentColor" />
      <circle cx="24" cy="10" r="3" fill="currentColor" />
      <circle cx="38" cy="10" r="3" fill="currentColor" />
      <circle cx="10" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <circle cx="38" cy="24" r="3" fill="currentColor" />
      <circle cx="10" cy="38" r="3" fill="currentColor" />
      <circle cx="24" cy="38" r="3" fill="currentColor" />
      <circle cx="38" cy="38" r="3" fill="currentColor" />
      <path d="M10 10h28M10 24h28M10 38h28M10 10v28M24 10v28M38 10v28" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
    </svg>
  )
}

function ElektrotechnikIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* lightning bolt */}
      <path d="M26 3L8 28h11l-5 17 22-27H25z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function KomplexIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* axes */}
      <path d="M4 24h40M24 4v40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <path d="M40 22l4 2-4 2M22 8l2-4 2 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      {/* i label and point */}
      <text x="27" y="13" className="fill-current font-mono font-black" fontSize="10">i</text>
      <circle cx="34" cy="14" r="4" fill="currentColor" />
      <path d="M24 24L34 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ReihenIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <text x="24" y="33" textAnchor="middle" className="fill-current font-mono font-black" fontSize="38">Σ</text>
    </svg>
  )
}

function SchwingungenIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M4 42h40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <path d="M4 24c4-18 8 18 12 0s8-18 12 0 8 18 12 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function MesstechnikIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* gauge */}
      <path d="M6 36a18 18 0 0 1 36 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 36h36" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      {/* ticks */}
      <path d="M10 30l2 3M24 22v4M38 30l-2 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* needle */}
      <path d="M24 36L32 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="36" r="3" fill="currentColor" />
    </svg>
  )
}

function KonstruktionIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* drafting triangle */}
      <path d="M6 42L42 42 42 6Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M10 38v-8M14 38v-4M22 38v-6M30 38v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* compass */}
      <circle cx="34" cy="14" r="3" fill="currentColor" />
    </svg>
  )
}

function ChemieIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* flask */}
      <path d="M18 4v14L8 40a3 3 0 0 0 3 4h26a3 3 0 0 0 3-4L30 18V4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M15 4h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* bubbles */}
      <circle cx="20" cy="34" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="28" cy="30" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="26" cy="38" r="2.5" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

function FertigungIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* workpiece */}
      <rect x="4" y="28" width="40" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* tool */}
      <path d="M24 4v20l-6 4h12l-6-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      {/* chips */}
      <circle cx="14" cy="42" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="34" cy="42" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

function MehrdimIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* 3d axes */}
      <path d="M8 40L40 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 40L8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 40L32 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 38l6 2-2-6M6 12l2-6 2 6M28 28l4-4 0 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NumerikIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M4 42h40M8 42V6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      {/* staircase approximation */}
      <path d="M8 38L14 38 14 30 20 30 20 22 26 22 26 16 32 16 32 10 40 10" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* smooth curve underneath */}
      <path d="M8 40c8-5 18-25 32-32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function StatistikIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M4 42h40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <rect x="8" y="28" width="6" height="14" fill="currentColor" opacity="0.7" />
      <rect x="17" y="18" width="6" height="24" fill="currentColor" opacity="0.85" />
      <rect x="26" y="12" width="6" height="30" fill="currentColor" />
      <rect x="35" y="22" width="6" height="20" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

function FourierIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M4 42h40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      {/* two sines */}
      <path d="M4 18c4-10 8 10 12 0s8-10 12 0 8 10 12 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M4 34c2-5 4 5 6 0s4-5 6 0 4 5 6 0 4-5 6 0 4 5 6 0 4-5 6 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function RegelungIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      {/* feedback loop */}
      <rect x="14" y="16" width="20" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M4 22h10M34 22h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 20l2 2-2 2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* feedback arrow */}
      <path d="M40 22v14H8V22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 24L8 22 6 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
  werkstoffkunde: WerkstoffkundeIcon,
  elektrotechnik: ElektrotechnikIcon,
  'komplexe-zahlen': KomplexIcon,
  'reihen-folgen': ReihenIcon,
  schwingungen: SchwingungenIcon,
  messtechnik: MesstechnikIcon,
  konstruktionslehre: KonstruktionIcon,
  'chemie-mb': ChemieIcon,
  fertigungstechnik: FertigungIcon,
  'mehrdim-analysis': MehrdimIcon,
  numerik: NumerikIcon,
  statistik: StatistikIcon,
  'fourier-laplace': FourierIcon,
  regelungstechnik: RegelungIcon,
}

const fallbackTextSize = {
  sm: 'text-[10px]',
  md: 'text-xs',
  lg: 'text-base',
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
        <span className={cn('font-mono font-black uppercase tracking-tight leading-none', fallbackTextSize[size] ?? fallbackTextSize.md)}>
          {(topic?.icon ?? topic?.title ?? '?').slice(0, 3)}
        </span>
      )}
    </span>
  )
}
