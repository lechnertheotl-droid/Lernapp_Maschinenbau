import { useState } from 'react'
import { createPortal } from 'react-dom'

// ── Variable database ────────────────────────────────────────────────────────
const VARIABLES = {
  // ── Mechanik ──
  F: { name: 'Kraft', unit: 'N', desc: 'Kraft in Newton. 1 N = 1 kg·m/s². F = m·a' },
  m: { name: 'Masse', unit: 'kg', desc: 'Masse des Körpers in Kilogramm' },
  a: { name: 'Beschleunigung', unit: 'm/s²', desc: 'Änderungsrate der Geschwindigkeit. a = F/m' },
  g: { name: 'Erdbeschleunigung', unit: 'm/s²', desc: 'g ≈ 9,81 m/s² auf der Erdoberfläche' },
  v: { name: 'Geschwindigkeit', unit: 'm/s', desc: 'Momentangeschwindigkeit des Körpers' },
  s: { name: 'Weg / Strecke', unit: 'm', desc: 'Zurückgelegter Weg oder Verschiebung' },
  t: { name: 'Zeit', unit: 's', desc: 'Zeitvariable in Sekunden' },
  W: { name: 'Arbeit', unit: 'J', desc: 'Mechanische Arbeit. W = F·s·cos(α). 1 J = 1 Nm' },
  P: { name: 'Leistung', unit: 'W', desc: 'Arbeit pro Zeit. P = W/t = F·v. 1 W = 1 J/s' },
  M: { name: 'Drehmoment', unit: 'Nm', desc: 'Moment = Kraft × senkrechter Hebelarm. M = F·l⊥' },
  'ω': { name: 'Winkelgeschwindigkeit', unit: 'rad/s', desc: 'Kreisfrequenz. ω = 2πf = 2π/T = 2πn/60' },
  'α': { name: 'Winkel', unit: 'rad / °', desc: 'Winkel in Radiant oder Grad. π rad = 180°' },
  'μ': { name: 'Reibkoeffizient', unit: '–', desc: 'Verhältnis Reibkraft/Normalkraft. FR = μ·FN' },
  'FG': { name: 'Gewichtskraft', unit: 'N', desc: 'FG = m·g. Kraft durch Schwerkraft' },
  'FR': { name: 'Reibkraft', unit: 'N', desc: 'FR = μ·FN. Reibung an Kontaktfläche' },
  'FN': { name: 'Normalkraft', unit: 'N', desc: 'Kraft senkrecht zur Oberfläche' },
  'Ekin': { name: 'Kinetische Energie', unit: 'J', desc: 'Ekin = ½·m·v². Bewegungsenergie' },
  'Epot': { name: 'Potentielle Energie', unit: 'J', desc: 'Epot = m·g·h. Lageenergie' },

  // ── Festigkeitslehre ──
  'σ': { name: 'Normalspannung', unit: 'MPa', desc: 'Kraft pro Querschnittsfläche. σ = F/A. 1 MPa = 1 N/mm²' },
  'τ': { name: 'Schubspannung', unit: 'MPa', desc: 'Tangentiale Spannung. τ = Fs/A' },
  'ε': { name: 'Dehnung', unit: '–', desc: 'Relative Längenänderung. ε = Δl/l₀ (dimensionslos)' },
  E: { name: 'E-Modul', unit: 'MPa', desc: 'Elastizitätsmodul (Steifigkeit). Stahl: ~210.000 MPa. σ = E·ε' },
  A: { name: 'Querschnittsfläche', unit: 'mm²', desc: 'Fläche des Querschnitts senkrecht zur Kraft' },
  I: { name: 'Flächenmoment 2. Grades', unit: 'mm⁴', desc: 'Flächenträgheitsmoment. Rechteck: I = bh³/12' },
  Wb: { name: 'Widerstandsmoment', unit: 'mm³', desc: 'W = I/e. Rechteck: W = bh²/6. Kreis: W = πd³/32' },
  'σy': { name: 'Streckgrenze', unit: 'MPa', desc: 'Beginn der plastischen Verformung. S235: σy = 235 MPa' },
  S: { name: 'Sicherheitsfaktor', unit: '–', desc: 'S = σzul/σvorh. Muss > 1 sein für sicheren Betrieb' },
  D: { name: 'Dämpfungsgrad', unit: '–', desc: 'D = d/(2√(km)). D < 1: unterdämpft, D = 1: kritisch, D > 1: überdämpft' },
  'σv': { name: 'Vergleichsspannung', unit: 'MPa', desc: 'Von Mises: σv = √(σ² + 3τ²)' },
  'σb': { name: 'Biegespannung', unit: 'MPa', desc: 'σb = Mb/Wb. Max. an der Randfaser' },
  'Mb': { name: 'Biegemoment', unit: 'Nm', desc: 'Moment das Biegung verursacht' },
  Re: { name: 'Streckgrenze (Werkstoff)', unit: 'MPa', desc: 'Mindeststreckgrenze. S235 → Re = 235 MPa' },
  Rm: { name: 'Zugfestigkeit', unit: 'MPa', desc: 'Maximale Spannung im Zugversuch' },
  Wp: { name: 'Polares Widerstandsmoment', unit: 'mm³', desc: 'Für Torsion. Kreis: Wp = πd³/16. Doppelt so groß wie axiales W bei Vollkreis' },
  Mt: { name: 'Torsionsmoment', unit: 'Nm', desc: 'Moment um die Längsachse. τ = Mt/Wp' },

  // ── Thermodynamik ──
  T: { name: 'Temperatur', unit: 'K', desc: 'Absolute Temperatur in Kelvin. T = °C + 273,15' },
  p: { name: 'Druck', unit: 'Pa', desc: 'Kraft pro Fläche. 1 bar = 100.000 Pa = 100 kPa' },
  V: { name: 'Volumen', unit: 'm³', desc: 'Rauminhalt in Kubikmeter' },
  Q: { name: 'Wärme', unit: 'J', desc: 'Übertragene Wärmemenge in Joule' },
  U: { name: 'Innere Energie', unit: 'J', desc: 'Thermodynamische innere Energie. ΔU = Q − W' },
  'η': { name: 'Wirkungsgrad', unit: '–', desc: 'η = Pnutz/Pzu = Enutz/Ezu (0 bis 1, bzw. 0% bis 100%)' },
  R: { name: 'Gaskonstante', unit: 'J/(mol·K)', desc: 'Universelle Gaskonstante R = 8,314 J/(mol·K)' },
  n: { name: 'Stoffmenge', unit: 'mol', desc: 'Anzahl der Mole. pV = nRT' },
  'γ': { name: 'Isentropenexponent', unit: '–', desc: 'γ = cp/cv. Luft: γ ≈ 1,4. Für pVγ = const (Adiabat)' },
  cp: { name: 'Spez. Wärme (p=const)', unit: 'J/(kg·K)', desc: 'Spezifische Wärmekapazität bei konstantem Druck' },
  cv: { name: 'Spez. Wärme (V=const)', unit: 'J/(kg·K)', desc: 'Spezifische Wärmekapazität bei konstantem Volumen' },
  'ηC': { name: 'Carnot-Wirkungsgrad', unit: '–', desc: 'ηC = 1 − Tkalt/Twarm. Maximal möglicher Wirkungsgrad' },
  COP: { name: 'Leistungszahl', unit: '–', desc: 'Coefficient of Performance. Wärmepumpe: COPWP = Qab/Wzu. Kältemaschine: COPK = Qzu/Wzu' },
  'κ': { name: 'Adiabatenexponent', unit: '–', desc: 'κ = cp/cv. Luft: κ ≈ 1,4. Für Adiabat: pVκ = const' },

  // ── Fluidmechanik ──
  'ρ': { name: 'Dichte', unit: 'kg/m³', desc: 'Masse pro Volumen. Wasser: ~1000 kg/m³, Luft: ~1,2 kg/m³' },
  'Re_fluid': { name: 'Reynolds-Zahl', unit: '–', desc: 'Re = ρvd/μ. Laminar: Re < 2300, turbulent: Re > 4000' },
  FA: { name: 'Auftriebskraft', unit: 'N', desc: 'FA = ρFluid·g·Vverdrängt (Archimedes)' },
  'μ_dyn': { name: 'Dynamische Viskosität', unit: 'Pa·s', desc: 'Maß für Zähflüssigkeit. Wasser: ~0,001 Pa·s' },
  'Vdot': { name: 'Volumenstrom', unit: 'm³/s', desc: 'V̇ = A·v. Volumen pro Zeiteinheit' },

  // ── Maschinenelemente ──
  i: { name: 'Übersetzung', unit: '–', desc: 'i = z₂/z₁ = n₁/n₂. i > 1: Untersetzung (langsamer, stärker)' },
  z: { name: 'Zähnezahl', unit: '–', desc: 'Anzahl der Zähne eines Zahnrads' },
  d: { name: 'Durchmesser', unit: 'mm', desc: 'Durchmesser (Welle, Zahnrad, Rohr, etc.)' },
  k: { name: 'Federsteifigkeit', unit: 'N/m', desc: 'Federkonstante. F = k·x (Hookesches Federgesetz)' },
  Ft: { name: 'Umfangskraft', unit: 'N', desc: 'Ft = 2M/d. Tangentialkraft am Zahnrad' },
  'n_dreh': { name: 'Drehzahl', unit: '1/min', desc: 'Umdrehungen pro Minute. ω = 2πn/60' },
  FV: { name: 'Vorspannkraft', unit: 'N', desc: 'Schraubenvorspannung nach Anziehen. FV = σ·As. Muss bei Betriebslasten erhalten bleiben' },
  MA: { name: 'Anziehdrehmoment', unit: 'Nm', desc: 'Drehmoment beim Anziehen der Schraube. MA ≈ K·FV·d mit K ≈ 0,2 (K ≈ 0,12 geölt)' },
  As: { name: 'Spannungsquerschnitt', unit: 'mm²', desc: 'Tragender Gewindequerschnitt der Schraube. Immer kleiner als πd²/4 (steht in DIN-Tabellen)' },

  // ── Schwingungen ──
  'ω0': { name: 'Eigenkreisfrequenz', unit: 'rad/s', desc: 'ω₀ = √(k/m). Frequenz der freien Schwingung' },
  f: { name: 'Frequenz', unit: 'Hz', desc: 'Schwingungen pro Sekunde. f = 1/T = ω/(2π)' },
  'T_per': { name: 'Periodendauer', unit: 's', desc: 'Dauer einer Schwingung. T = 1/f = 2π/ω' },

  // ── Mathematik ──
  x: { name: 'Variable x', unit: '–', desc: 'Unabhängige Variable / Unbekannte' },
  y: { name: 'Variable y', unit: '–', desc: 'Abhängige Variable / Funktionswert' },
  'π': { name: 'Kreiszahl Pi', unit: '–', desc: 'π ≈ 3,14159. Umfang = π·d. Fläche = π·r²' },
  e: { name: 'Eulersche Zahl', unit: '–', desc: 'e ≈ 2,71828. Basis des natürlichen Logarithmus ln' },
  b: { name: 'Breite', unit: 'mm', desc: 'Breite (z.B. eines Querschnitts)' },
  h: { name: 'Höhe', unit: 'mm / m', desc: 'Höhe (Querschnittshöhe, Fallhöhe, etc.)' },
  r: { name: 'Radius', unit: 'mm / m', desc: 'Abstand vom Mittelpunkt' },
  L: { name: 'Länge', unit: 'm', desc: 'Gesamtlänge (Balken, Stab, Rohr, etc.)' },
  l: { name: 'Hebelarm / Länge', unit: 'm', desc: 'Senkrechter Abstand oder Teillänge' },
}

// Group variables by category for display
const CATEGORIES = [
  { name: 'Mechanik', keys: ['F', 'FG', 'FN', 'FR', 'm', 'a', 'g', 'v', 's', 't', 'W', 'P', 'M', 'ω', 'α', 'μ', 'Ekin', 'Epot'] },
  { name: 'Festigkeitslehre', keys: ['σ', 'σb', 'σv', 'σy', 'τ', 'ε', 'E', 'A', 'I', 'Wb', 'Wp', 'Mb', 'Mt', 'Re', 'Rm', 'S', 'D'] },
  { name: 'Thermodynamik', keys: ['T', 'p', 'V', 'Q', 'U', 'η', 'ηC', 'COP', 'R', 'n', 'γ', 'κ', 'cp', 'cv'] },
  { name: 'Fluidmechanik', keys: ['ρ', 'Re_fluid', 'FA', 'μ_dyn', 'Vdot'] },
  { name: 'Maschinenelemente', keys: ['i', 'z', 'd', 'k', 'Ft', 'n_dreh', 'FV', 'MA', 'As'] },
  { name: 'Schwingungen', keys: ['ω0', 'f', 'T_per'] },
  { name: 'Geometrie / Mathe', keys: ['x', 'y', 'π', 'e', 'b', 'h', 'r', 'L', 'l'] },
]

// Display labels for variable keys (show nicer symbols)
const DISPLAY_LABELS = {
  FG: 'F_G', FN: 'F_N', FR: 'F_R', FA: 'F_A', Ft: 'F_t',
  Ekin: 'E_kin', Epot: 'E_pot',
  σb: 'σ_b', σv: 'σ_v', σy: 'σ_y',
  Wb: 'W_b', Mb: 'M_b', Rm: 'R_m', Re: 'R_e',
  Re_fluid: 'Re', μ_dyn: 'μ', Vdot: 'V̇',
  ω0: 'ω₀', T_per: 'T', n_dreh: 'n',
  cp: 'c_p', cv: 'c_v', ηC: 'η_C',
}

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
          if (!v) return false
          return k.toLowerCase().includes(lc) || v.name.toLowerCase().includes(lc) || v.desc.toLowerCase().includes(lc)
        }),
      })).filter((cat) => cat.keys.length > 0)
    : CATEGORIES

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-end justify-center" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
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
            autoFocus
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
                  if (!v) return null
                  const isExpanded = expanded === k
                  const displayKey = DISPLAY_LABELS[k] || k
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : k)}
                      className="w-full text-left flex flex-col rounded-retro border border-surface-200 hover:border-primary-300 px-3 py-2 transition-colors tap-highlight-none"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-black text-sm text-ink min-w-[32px]">{displayKey}</span>
                        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                          <span className="text-xs text-ink-soft truncate">{v.name}</span>
                          <span className="font-mono text-[10px] text-primary-700 bg-primary-50 px-1.5 py-0.5 rounded flex-shrink-0">{v.unit}</span>
                        </div>
                      </div>
                      {isExpanded && (
                        <p className="text-xs text-ink-soft mt-1.5 leading-relaxed border-t border-surface-100 pt-1.5">{v.desc}</p>
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
