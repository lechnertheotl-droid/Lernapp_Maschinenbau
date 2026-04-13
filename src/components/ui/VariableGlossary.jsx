import { useState } from 'react'
import { createPortal } from 'react-dom'

// ── Variable database ────────────────────────────────────────────────────────
const VARIABLES = {
  // Mechanics
  F: { name: 'Kraft', unit: 'N', desc: 'Kraft in Newton. 1 N = 1 kg·m/s²' },
  m: { name: 'Masse', unit: 'kg', desc: 'Masse des Körpers in Kilogramm' },
  a: { name: 'Beschleunigung', unit: 'm/s²', desc: 'Änderungsrate der Geschwindigkeit' },
  g: { name: 'Erdbeschleunigung', unit: 'm/s²', desc: 'g ≈ 9,81 m/s² auf der Erdoberfläche' },
  v: { name: 'Geschwindigkeit', unit: 'm/s', desc: 'Momentangeschwindigkeit' },
  s: { name: 'Weg/Strecke', unit: 'm', desc: 'Zurückgelegter Weg oder Verschiebung' },
  t: { name: 'Zeit', unit: 's', desc: 'Zeitvariable in Sekunden' },
  W: { name: 'Arbeit', unit: 'J', desc: 'Mechanische Arbeit. 1 J = 1 Nm' },
  P: { name: 'Leistung', unit: 'W', desc: 'Arbeit pro Zeit. 1 W = 1 J/s' },
  M: { name: 'Drehmoment', unit: 'Nm', desc: 'Moment = Kraft × Hebelarm' },
  ω: { name: 'Winkelgeschw.', unit: 'rad/s', desc: 'Kreisfrequenz ω = 2πf = 2π/T' },
  α: { name: 'Winkel', unit: 'rad / °', desc: 'Winkel in Radiant oder Grad' },
  μ: { name: 'Reibkoeffizient', unit: '–', desc: 'Verhältnis Reibkraft/Normalkraft' },

  // Strength of materials
  σ: { name: 'Normalspannung', unit: 'MPa', desc: 'Kraft pro Querschnittsfläche σ = F/A' },
  τ: { name: 'Schubspannung', unit: 'MPa', desc: 'Tangentiale Spannung τ = F_s/A' },
  ε: { name: 'Dehnung', unit: '–', desc: 'Relative Längenänderung ε = Δl/l₀' },
  E: { name: 'E-Modul', unit: 'MPa', desc: 'Elastizitätsmodul (Steifigkeit). Stahl: ~210.000 MPa' },
  A: { name: 'Querschnittsfläche', unit: 'mm²', desc: 'Fläche des Querschnitts' },
  I: { name: 'Flächenmoment', unit: 'mm⁴', desc: 'Flächenträgheitsmoment 2. Grades' },
  'W_b': { name: 'Widerstandsmoment', unit: 'mm³', desc: 'W = I/e, Biegewiderstand des Querschnitts' },
  'σ_y': { name: 'Streckgrenze', unit: 'MPa', desc: 'Beginn der plastischen Verformung' },
  S: { name: 'Sicherheitsfaktor', unit: '–', desc: 'S = σ_zul / σ_vorh (muss > 1 sein)' },
  D: { name: 'Dämpfungsgrad', unit: '–', desc: 'D = d/(2√(km)). D < 1: unterdämpft' },

  // Thermodynamics
  T: { name: 'Temperatur', unit: 'K', desc: 'Absolute Temperatur in Kelvin. T = °C + 273,15' },
  p: { name: 'Druck', unit: 'Pa', desc: 'Druck in Pascal. 1 bar = 100.000 Pa' },
  V: { name: 'Volumen', unit: 'm³', desc: 'Volumen in Kubikmeter' },
  Q: { name: 'Wärme', unit: 'J', desc: 'Übertragene Wärmemenge' },
  U: { name: 'Innere Energie', unit: 'J', desc: 'Thermodynamische innere Energie' },
  η: { name: 'Wirkungsgrad', unit: '–', desc: 'η = P_nutz / P_zu (0 bis 1)' },
  R: { name: 'Gaskonstante', unit: 'J/(mol·K)', desc: 'R = 8,314 J/(mol·K)' },
  n: { name: 'Stoffmenge', unit: 'mol', desc: 'Anzahl der Mole' },
  γ: { name: 'Isentropenexp.', unit: '–', desc: 'γ = cp/cv. Luft: γ ≈ 1,4' },

  // Fluid mechanics
  ρ: { name: 'Dichte', unit: 'kg/m³', desc: 'Masse pro Volumen. Wasser: ~1000 kg/m³' },
  'Re': { name: 'Reynolds-Zahl', unit: '–', desc: 'Re = ρvL/μ. Laminar: Re < 2300' },

  // Mathematics
  x: { name: 'Variable', unit: '–', desc: 'Unabhängige Variable' },
  y: { name: 'Variable', unit: '–', desc: 'Abhängige Variable / Funktionswert' },
  π: { name: 'Kreiszahl Pi', unit: '–', desc: 'π ≈ 3,14159. Verhältnis Umfang/Durchmesser' },
  e: { name: 'Eulersche Zahl', unit: '–', desc: 'e ≈ 2,71828. Basis des natürlichen Logarithmus' },

  // Gears / Machine elements
  i: { name: 'Übersetzung', unit: '–', desc: 'Übersetzungsverhältnis i = z₂/z₁ = n₁/n₂' },
  z: { name: 'Zähnezahl', unit: '–', desc: 'Anzahl der Zähne eines Zahnrads' },
  d: { name: 'Durchmesser', unit: 'mm', desc: 'Durchmesser (Welle, Zahnrad, etc.)' },
  k: { name: 'Federsteifigkeit', unit: 'N/m', desc: 'Federkonstante. F = k·x' },
}

// Group variables by category for display
const CATEGORIES = [
  { name: 'Mechanik', keys: ['F', 'm', 'a', 'g', 'v', 's', 't', 'W', 'P', 'M', 'ω', 'α', 'μ'] },
  { name: 'Festigkeitslehre', keys: ['σ', 'τ', 'ε', 'E', 'A', 'I', 'W_b', 'σ_y', 'S', 'D'] },
  { name: 'Thermodynamik', keys: ['T', 'p', 'V', 'Q', 'U', 'η', 'R', 'n', 'γ'] },
  { name: 'Fluidmechanik', keys: ['ρ', 'Re'] },
  { name: 'Maschinenelemente', keys: ['i', 'z', 'd', 'k'] },
  { name: 'Mathematik', keys: ['x', 'y', 'π', 'e'] },
]

// ── Component ────────────────────────────────────────────────────────────────
export function VariableGlossary({ isOpen, onClose }) {
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)

  if (!isOpen) return null

  const lc = search.toLowerCase()
  const filtered = lc
    ? CATEGORIES.map((cat) => ({
        ...cat,
        keys: cat.keys.filter((k) => {
          const v = VARIABLES[k]
          return k.toLowerCase().includes(lc) || v.name.toLowerCase().includes(lc) || v.desc.toLowerCase().includes(lc)
        }),
      })).filter((cat) => cat.keys.length > 0)
    : CATEGORIES

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-paper border-t-2 border-x-2 border-ink rounded-t-retro animate-slide-in-up shadow-hard-xl max-h-[80dvh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-ink border-b-2 border-ink flex-shrink-0">
          <span className="text-lemon font-mono font-black text-sm tracking-widest">VARIABLEN</span>
          <button onClick={onClose} className="text-surface-400 hover:text-lemon text-lg font-mono transition-colors w-8 h-8 flex items-center justify-center">✕</button>
        </div>

        {/* Search */}
        <div className="px-4 py-2 border-b-2 border-surface-200 flex-shrink-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Variable suchen…"
            className="w-full px-3 py-2 border-2 border-ink rounded-retro font-mono text-sm bg-white focus:outline-none focus:border-primary-700"
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-4 flex flex-col gap-4">
          {filtered.map((cat) => (
            <div key={cat.name}>
              <p className="text-[10px] font-mono font-bold text-primary-700 uppercase tracking-widest mb-2 border-b border-primary-200 pb-1">
                {cat.name}
              </p>
              <div className="flex flex-col gap-1">
                {cat.keys.map((k) => {
                  const v = VARIABLES[k]
                  const isExpanded = expanded === k
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : k)}
                      className="w-full text-left flex flex-col rounded-retro border border-surface-200 hover:border-primary-300 px-3 py-1.5 transition-colors tap-highlight-none"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-black text-sm text-ink">{k.replace('_', '')}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-ink-soft">{v.name}</span>
                          <span className="font-mono text-[10px] text-primary-700 bg-primary-50 px-1.5 py-0.5 rounded">{v.unit}</span>
                        </div>
                      </div>
                      {isExpanded && (
                        <p className="text-xs text-ink-soft mt-1 leading-relaxed">{v.desc}</p>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-ink-soft text-center py-4">Keine Variable gefunden.</p>
          )}
        </div>

        <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </div>,
    document.body
  )
}
