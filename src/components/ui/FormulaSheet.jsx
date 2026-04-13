import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

// ── Formula databases per topic ───────────────────────────────────────────────
const FORMULAS = {
  trigonometry: {
    title: 'Trigonometrie',
    sections: [
      {
        name: 'Grunddefinitionen',
        items: [
          { label: 'sin α',  formula: 'Gegenkathete / Hypotenuse' },
          { label: 'cos α',  formula: 'Ankathete / Hypotenuse' },
          { label: 'tan α',  formula: 'sin α / cos α' },
        ],
      },
      {
        name: 'Wichtige Werte',
        items: [
          { label: 'sin 0° = sin 0',   formula: '0' },
          { label: 'sin 30° = sin π/6', formula: '1/2' },
          { label: 'sin 45° = sin π/4', formula: '√2/2' },
          { label: 'sin 60° = sin π/3', formula: '√3/2' },
          { label: 'sin 90° = sin π/2', formula: '1' },
        ],
      },
      {
        name: 'Pythagoreischer Satz',
        items: [
          { label: 'sin²α + cos²α', formula: '= 1' },
          { label: '1 + tan²α',     formula: '= 1/cos²α' },
        ],
      },
      {
        name: 'Additionstheoreme',
        items: [
          { label: 'sin(α±β)', formula: 'sin α cos β ± cos α sin β' },
          { label: 'cos(α±β)', formula: 'cos α cos β ∓ sin α sin β' },
          { label: 'sin(2α)',  formula: '2 sin α cos α' },
          { label: 'cos(2α)',  formula: 'cos²α − sin²α' },
        ],
      },
      {
        name: 'Umwandlung',
        items: [
          { label: 'Grad → Rad', formula: 'rad = grad × π / 180' },
          { label: 'Rad → Grad', formula: 'grad = rad × 180 / π' },
        ],
      },
    ],
  },
  ableitung: {
    title: 'Differentialrechnung',
    sections: [
      {
        name: 'Grundregeln',
        items: [
          { label: "(xⁿ)'",   formula: 'n·xⁿ⁻¹' },
          { label: "(c)'",    formula: '0' },
          { label: "(f+g)'",  formula: "f' + g'" },
          { label: "(c·f)'",  formula: "c·f'" },
        ],
      },
      {
        name: 'Produktregel',
        items: [
          { label: "(f·g)'", formula: "f'·g + f·g'" },
        ],
      },
      {
        name: 'Quotientenregel',
        items: [
          { label: "(f/g)'", formula: "(f'·g − f·g') / g²" },
        ],
      },
      {
        name: 'Kettenregel',
        items: [
          { label: "(f(g(x)))'", formula: "f'(g(x)) · g'(x)" },
        ],
      },
      {
        name: 'Wichtige Ableitungen',
        items: [
          { label: "(sin x)'",  formula: 'cos x' },
          { label: "(cos x)'",  formula: '−sin x' },
          { label: "(eˣ)'",     formula: 'eˣ' },
          { label: "(ln x)'",   formula: '1/x' },
          { label: "(aˣ)'",     formula: 'aˣ · ln a' },
        ],
      },
      {
        name: 'Extremwerte',
        items: [
          { label: 'Notwendig',   formula: "f'(x₀) = 0" },
          { label: 'Maximum',     formula: "f''(x₀) < 0" },
          { label: 'Minimum',     formula: "f''(x₀) > 0" },
          { label: 'Wendepunkt',  formula: "f''(x₀) = 0, f'''(x₀) ≠ 0" },
        ],
      },
    ],
  },
  vektoren: {
    title: 'Vektorrechnung',
    sections: [
      {
        name: 'Grundoperationen',
        items: [
          { label: 'a⃗ + b⃗',   formula: '(a₁+b₁, a₂+b₂, a₃+b₃)' },
          { label: 'λ·a⃗',      formula: '(λa₁, λa₂, λa₃)' },
          { label: '|a⃗|',      formula: '√(a₁²+a₂²+a₃²)' },
        ],
      },
      {
        name: 'Skalarprodukt',
        items: [
          { label: 'a⃗·b⃗',     formula: 'a₁b₁ + a₂b₂ + a₃b₃' },
          { label: 'a⃗·b⃗',     formula: '|a⃗|·|b⃗|·cos α' },
          { label: 'Winkel α', formula: 'cos α = (a⃗·b⃗)/(|a⃗||b⃗|)' },
          { label: 'Orthogonal', formula: 'a⃗·b⃗ = 0' },
        ],
      },
      {
        name: 'Kreuzprodukt',
        items: [
          { label: 'a⃗×b⃗',    formula: '(a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁)' },
          { label: '|a⃗×b⃗|',  formula: '|a⃗|·|b⃗|·sin α' },
          { label: 'Fläche',   formula: '|a⃗×b⃗|' },
        ],
      },
    ],
  },
  algebra: {
    title: 'Algebra & Potenzen',
    sections: [
      {
        name: 'Potenzgesetze',
        items: [
          { label: 'xᵃ · xᵇ',  formula: 'x^(a+b)' },
          { label: 'xᵃ / xᵇ',  formula: 'x^(a−b)' },
          { label: '(xᵃ)ᵇ',    formula: 'x^(a·b)' },
          { label: '(x·y)ⁿ',   formula: 'xⁿ·yⁿ' },
          { label: 'x⁻ⁿ',      formula: '1/xⁿ' },
          { label: 'x⁰',       formula: '1' },
          { label: 'x^(m/n)',   formula: '(ⁿ√x)^m' },
        ],
      },
      {
        name: 'Logarithmengesetze',
        items: [
          { label: 'ln(a·b)',  formula: 'ln(a) + ln(b)' },
          { label: 'ln(a/b)',  formula: 'ln(a) − ln(b)' },
          { label: 'ln(aⁿ)',   formula: 'n·ln(a)' },
          { label: 'ln(eˣ)',   formula: 'x' },
          { label: 'e^ln(x)',  formula: 'x' },
        ],
      },
    ],
  },
}

// ── Component ─────────────────────────────────────────────────────────────────
export function FormulaSheet({ isOpen, onClose, topicId }) {
  const data = FORMULAS[topicId]

  if (!isOpen || !data) return null

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-paper border-t-2 border-x-2 border-ink rounded-t-retro animate-slide-in-up shadow-hard-xl max-h-[80dvh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-ink border-b-2 border-ink flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-lemon font-mono font-black text-sm tracking-widest">FORMELN</span>
            <span className="text-surface-400 font-mono text-xs">{data.title}</span>
          </div>
          <button
            onClick={onClose}
            className="text-surface-400 hover:text-lemon text-lg font-mono transition-colors w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-4 flex flex-col gap-4">
          {data.sections.map((section) => (
            <div key={section.name}>
              <p className="text-[10px] font-mono font-bold text-primary-700 uppercase tracking-widest mb-2 border-b border-primary-200 pb-1">
                {section.name}
              </p>
              <div className="flex flex-col gap-1.5">
                {section.items.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-3">
                    <span className="font-mono text-xs text-ink-soft flex-shrink-0 pt-0.5">{item.label}</span>
                    <span className="font-mono text-xs font-bold text-ink text-right">{item.formula}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Safe area */}
        <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </div>,
    document.body
  )
}

// Check if a topic has formulas available
export function hasFormulas(topicId) {
  return !!FORMULAS[topicId]
}
