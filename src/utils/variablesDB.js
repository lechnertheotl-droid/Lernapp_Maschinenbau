/**
 * Variablen-Datenbank für das Glossar und das Formel-Variablen-Popover.
 *
 * Jeder Schlüssel mappt auf ein **Array** von Bedeutungen. Mehrdeutige Symbole
 * (z.B. `E` = E-Modul / Energie / Eulersche Zahl) haben mehrere Einträge und
 * können über das `topics`-Feld pro Lektion sinnvoll disambiguiert werden.
 *
 * Einwertige Symbole behalten weiterhin ein 1-Element-Array — Konsumenten
 * gehen über `getVariableEntries(key, topicId?)`.
 */

const e = (entry) => entry // tiny helper for readability

export const VARIABLES = {
  // ── Mechanik ──
  F: [e({ name: 'Kraft', unit: 'N', desc: 'Kraft in Newton. 1 N = 1 kg·m/s². F = m·a',
          topics: ['technische-mechanik', 'festigkeitslehre', 'maschinenelemente', 'fluidmechanik'] })],
  m: [e({ name: 'Masse', unit: 'kg', desc: 'Masse des Körpers in Kilogramm' })],
  a: [e({ name: 'Beschleunigung', unit: 'm/s²', desc: 'Änderungsrate der Geschwindigkeit. a = F/m' })],
  g: [
    e({ name: 'Gegenkathete', unit: '–', desc: 'Dem Winkel α gegenüberliegende Seite im rechtwinkligen Dreieck. sin(α) = g/h',
        topics: ['trigonometry'] }),
    e({ name: 'Erdbeschleunigung', unit: 'm/s²', desc: 'g ≈ 9,81 m/s² auf der Erdoberfläche',
        topics: ['technische-mechanik', 'festigkeitslehre', 'maschinenelemente', 'fluidmechanik', 'schwingungen', 'thermodynamik'] }),
  ],
  v: [e({ name: 'Geschwindigkeit', unit: 'm/s', desc: 'Momentangeschwindigkeit des Körpers' })],
  s: [e({ name: 'Weg / Strecke', unit: 'm', desc: 'Zurückgelegter Weg oder Verschiebung' })],
  t: [e({ name: 'Zeit', unit: 's', desc: 'Zeitvariable in Sekunden' })],
  W: [e({ name: 'Arbeit', unit: 'J', desc: 'Mechanische Arbeit. W = F·s·cos(α). 1 J = 1 Nm' })],
  P: [e({ name: 'Leistung', unit: 'W', desc: 'Arbeit pro Zeit. P = W/t = F·v. 1 W = 1 J/s' })],
  M: [
    e({ name: 'Biegemoment', unit: 'Nm', desc: 'Schnittgröße M(x) am Balken. Maximum an der gefährlichen Stelle.',
        topics: ['technische-mechanik', 'festigkeitslehre'] }),
    e({ name: 'Drehmoment', unit: 'Nm', desc: 'Moment = Kraft × senkrechter Hebelarm. M = F·l⊥',
        topics: ['maschinenelemente', 'technische-mechanik'] }),
  ],
  'ω': [e({ name: 'Winkelgeschwindigkeit', unit: 'rad/s', desc: 'Kreisfrequenz. ω = 2πf = 2π/T = 2πn/60' })],
  'α': [e({ name: 'Winkel', unit: 'rad / °', desc: 'Winkel in Radiant oder Grad. π rad = 180°' })],
  'μ': [e({ name: 'Reibkoeffizient', unit: '–', desc: 'Verhältnis Reibkraft/Normalkraft. FR = μ·FN' })],
  FG: [e({ name: 'Gewichtskraft', unit: 'N', desc: 'FG = m·g. Kraft durch Schwerkraft' })],
  FR: [e({ name: 'Reibkraft', unit: 'N', desc: 'FR = μ·FN. Reibung an Kontaktfläche' })],
  FN: [e({ name: 'Normalkraft', unit: 'N', desc: 'Kraft senkrecht zur Oberfläche' })],
  Ekin: [e({ name: 'Kinetische Energie', unit: 'J', desc: 'Ekin = ½·m·v². Bewegungsenergie' })],
  Epot: [e({ name: 'Potentielle Energie', unit: 'J', desc: 'Epot = m·g·h. Lageenergie' })],

  // ── Festigkeitslehre ──
  'σ': [e({ name: 'Normalspannung', unit: 'MPa', desc: 'Kraft pro Querschnittsfläche. σ = F/A. 1 MPa = 1 N/mm²' })],
  'τ': [e({ name: 'Schubspannung', unit: 'MPa', desc: 'Tangentiale Spannung. τ = Fs/A' })],
  'ε': [e({ name: 'Dehnung', unit: '–', desc: 'Relative Längenänderung. ε = Δl/l₀ (dimensionslos)' })],
  E: [
    e({ name: 'E-Modul', unit: 'MPa', desc: 'Elastizitätsmodul (Steifigkeit). Stahl: ~210.000 MPa. σ = E·ε',
        topics: ['festigkeitslehre', 'werkstoffkunde', 'maschinenelemente'] }),
    e({ name: 'Energie', unit: 'J', desc: 'Innere oder mechanische Energie. ΔU = Q − W',
        topics: ['thermodynamik', 'technische-mechanik'] }),
    e({ name: 'Eulersche Zahl', unit: '–', desc: 'e ≈ 2,71828. Basis des natürlichen Logarithmus ln',
        topics: ['ableitung', 'integralrechnung', 'differentialgleichungen', 'komplexe-zahlen', 'reihen-folgen'] }),
  ],
  A: [
    e({ name: 'Ankathete', unit: '–', desc: 'An den Winkel α anliegende Kathete im rechtwinkligen Dreieck. cos(α) = A/h',
        topics: ['trigonometry'] }),
    e({ name: 'Querschnittsfläche', unit: 'mm²', desc: 'Fläche des Querschnitts senkrecht zur Kraft',
        topics: ['technische-mechanik', 'festigkeitslehre', 'maschinenelemente', 'fluidmechanik', 'thermodynamik'] }),
  ],
  I: [e({ name: 'Flächenmoment 2. Grades', unit: 'mm⁴', desc: 'Flächenträgheitsmoment. Rechteck: I = bh³/12' })],
  Wb: [e({ name: 'Widerstandsmoment', unit: 'mm³', desc: 'W = I/e. Rechteck: W = bh²/6. Kreis: W = πd³/32' })],
  'σy': [e({ name: 'Streckgrenze', unit: 'MPa', desc: 'Beginn der plastischen Verformung. S235: σy = 235 MPa' })],
  S: [e({ name: 'Sicherheitsfaktor', unit: '–', desc: 'S = σzul/σvorh. Muss > 1 sein für sicheren Betrieb' })],
  D: [e({ name: 'Dämpfungsgrad', unit: '–', desc: 'D = d/(2√(km)). D < 1: unterdämpft, D = 1: kritisch, D > 1: überdämpft' })],
  'σv': [e({ name: 'Vergleichsspannung', unit: 'MPa', desc: 'Von Mises: σv = √(σ² + 3τ²)' })],
  'σb': [e({ name: 'Biegespannung', unit: 'MPa', desc: 'σb = Mb/Wb. Max. an der Randfaser' })],
  Mb: [e({ name: 'Biegemoment', unit: 'Nm', desc: 'Moment das Biegung verursacht' })],
  Re: [e({ name: 'Streckgrenze (Werkstoff)', unit: 'MPa', desc: 'Mindeststreckgrenze. S235 → Re = 235 MPa' })],
  Rm: [e({ name: 'Zugfestigkeit', unit: 'MPa', desc: 'Maximale Spannung im Zugversuch' })],
  Wp: [e({ name: 'Polares Widerstandsmoment', unit: 'mm³', desc: 'Für Torsion. Kreis: Wp = πd³/16. Doppelt so groß wie axiales W bei Vollkreis' })],
  Mt: [e({ name: 'Torsionsmoment', unit: 'Nm', desc: 'Moment um die Längsachse. τ = Mt/Wp' })],

  // ── Thermodynamik ──
  T: [
    e({ name: 'Temperatur', unit: 'K', desc: 'Absolute Temperatur in Kelvin. T = °C + 273,15',
        topics: ['thermodynamik', 'fluidmechanik', 'werkstoffkunde'] }),
    e({ name: 'Periodendauer', unit: 's', desc: 'Dauer einer Schwingung. T = 1/f = 2π/ω',
        topics: ['technische-mechanik', 'maschinenelemente'] }),
  ],
  p: [e({ name: 'Druck', unit: 'Pa', desc: 'Kraft pro Fläche. 1 bar = 100.000 Pa = 100 kPa' })],
  V: [e({ name: 'Volumen', unit: 'm³', desc: 'Rauminhalt in Kubikmeter' })],
  Q: [e({ name: 'Wärme', unit: 'J', desc: 'Übertragene Wärmemenge in Joule' })],
  U: [e({ name: 'Innere Energie', unit: 'J', desc: 'Thermodynamische innere Energie. ΔU = Q − W' })],
  'η': [e({ name: 'Wirkungsgrad', unit: '–', desc: 'η = Pnutz/Pzu = Enutz/Ezu (0 bis 1, bzw. 0% bis 100%)' })],
  R: [
    e({ name: 'Gaskonstante', unit: 'J/(mol·K)', desc: 'Universelle Gaskonstante R = 8,314 J/(mol·K)',
        topics: ['thermodynamik'] }),
    e({ name: 'Reaktionskraft', unit: 'N', desc: 'Lagerreaktion. Z.B. RA, RB an Stützstellen eines Balkens.',
        topics: ['technische-mechanik', 'festigkeitslehre'] }),
    e({ name: 'Radius', unit: 'm', desc: 'Abstand vom Mittelpunkt. Synonym zu r.',
        topics: ['vektoren', 'trigonometry', 'integralrechnung'] }),
  ],
  n: [e({ name: 'Stoffmenge / Drehzahl', unit: 'mol bzw. 1/min', desc: 'In Thermo: Mole. In Maschinenbau: Drehzahl. ω = 2πn/60' })],
  'γ': [e({ name: 'Isentropenexponent', unit: '–', desc: 'γ = cp/cv. Luft: γ ≈ 1,4. Für pVγ = const (Adiabat)' })],
  cp: [e({ name: 'Spez. Wärme (p=const)', unit: 'J/(kg·K)', desc: 'Spezifische Wärmekapazität bei konstantem Druck' })],
  cv: [e({ name: 'Spez. Wärme (V=const)', unit: 'J/(kg·K)', desc: 'Spezifische Wärmekapazität bei konstantem Volumen' })],
  'ηC': [e({ name: 'Carnot-Wirkungsgrad', unit: '–', desc: 'ηC = 1 − Tkalt/Twarm. Maximal möglicher Wirkungsgrad' })],
  COP: [e({ name: 'Leistungszahl', unit: '–', desc: 'Coefficient of Performance. Wärmepumpe: COPWP = Qab/Wzu' })],
  'κ': [e({ name: 'Adiabatenexponent', unit: '–', desc: 'κ = cp/cv. Luft: κ ≈ 1,4. Für Adiabat: pVκ = const' })],

  // ── Fluidmechanik ──
  'ρ': [e({ name: 'Dichte', unit: 'kg/m³', desc: 'Masse pro Volumen. Wasser: ~1000 kg/m³, Luft: ~1,2 kg/m³' })],
  Re_fluid: [e({ name: 'Reynolds-Zahl', unit: '–', desc: 'Re = ρvd/μ. Laminar: Re < 2300, turbulent: Re > 4000' })],
  FA: [e({ name: 'Auftriebskraft', unit: 'N', desc: 'FA = ρFluid·g·Vverdrängt (Archimedes)' })],
  μ_dyn: [e({ name: 'Dynamische Viskosität', unit: 'Pa·s', desc: 'Maß für Zähflüssigkeit. Wasser: ~0,001 Pa·s' })],
  Vdot: [e({ name: 'Volumenstrom', unit: 'm³/s', desc: 'V̇ = A·v. Volumen pro Zeiteinheit' })],

  // ── Maschinenelemente ──
  i: [e({ name: 'Übersetzung', unit: '–', desc: 'i = z₂/z₁ = n₁/n₂. i > 1: Untersetzung (langsamer, stärker)' })],
  z: [
    e({ name: 'Zähnezahl', unit: '–', desc: 'Anzahl der Zähne eines Zahnrads',
        topics: ['maschinenelemente'] }),
    e({ name: 'Komplexe Zahl', unit: '–', desc: 'z = a + bi (kartesisch) oder z = r·e^(iφ) (polar)',
        topics: ['komplexe-zahlen', 'differentialgleichungen'] }),
  ],
  d: [e({ name: 'Durchmesser', unit: 'mm', desc: 'Durchmesser (Welle, Zahnrad, Rohr, etc.)' })],
  k: [e({ name: 'Federsteifigkeit', unit: 'N/m', desc: 'Federkonstante. F = k·x (Hookesches Federgesetz)' })],
  Ft: [e({ name: 'Umfangskraft', unit: 'N', desc: 'Ft = 2M/d. Tangentialkraft am Zahnrad' })],
  n_dreh: [e({ name: 'Drehzahl', unit: '1/min', desc: 'Umdrehungen pro Minute. ω = 2πn/60' })],
  FV: [e({ name: 'Vorspannkraft', unit: 'N', desc: 'Schraubenvorspannung nach Anziehen. FV = σ·As. Muss bei Betriebslasten erhalten bleiben' })],
  MA: [e({ name: 'Anziehdrehmoment', unit: 'Nm', desc: 'Drehmoment beim Anziehen der Schraube. MA ≈ K·FV·d mit K ≈ 0,2 (K ≈ 0,12 geölt)' })],
  As: [e({ name: 'Spannungsquerschnitt', unit: 'mm²', desc: 'Tragender Gewindequerschnitt der Schraube. Immer kleiner als πd²/4 (steht in DIN-Tabellen)' })],

  // ── Schwingungen ──
  ω0: [e({ name: 'Eigenkreisfrequenz', unit: 'rad/s', desc: 'ω₀ = √(k/m). Frequenz der freien Schwingung' })],
  f: [e({ name: 'Frequenz', unit: 'Hz', desc: 'Schwingungen pro Sekunde. f = 1/T = ω/(2π)' })],
  T_per: [e({ name: 'Periodendauer', unit: 's', desc: 'Dauer einer Schwingung. T = 1/f = 2π/ω' })],

  // ── Mathematik ──
  x: [e({ name: 'Variable x', unit: '–', desc: 'Unabhängige Variable / Unbekannte' })],
  y: [e({ name: 'Variable y', unit: '–', desc: 'Abhängige Variable / Funktionswert' })],
  'π': [e({ name: 'Kreiszahl Pi', unit: '–', desc: 'π ≈ 3,14159. Umfang = π·d. Fläche = π·r²' })],
  'e_const': [e({ name: 'Eulersche Zahl', unit: '–', desc: 'e ≈ 2,71828. Basis des natürlichen Logarithmus ln' })],
  b: [e({ name: 'Breite', unit: 'mm', desc: 'Breite (z.B. eines Querschnitts)' })],
  h: [
    e({ name: 'Hypotenuse', unit: '–', desc: 'Längste Seite im rechtwinkligen Dreieck — gegenüber dem rechten Winkel. h² = g² + A²',
        topics: ['trigonometry'] }),
    e({ name: 'Höhe', unit: 'mm / m', desc: 'Höhe (Querschnittshöhe, Fallhöhe, etc.)' }),
  ],
  r: [e({ name: 'Radius', unit: 'mm / m', desc: 'Abstand vom Mittelpunkt' })],
  L: [e({ name: 'Länge', unit: 'm', desc: 'Gesamtlänge (Balken, Stab, Rohr, etc.)' })],
  l: [e({ name: 'Hebelarm / Länge', unit: 'm', desc: 'Senkrechter Abstand oder Teillänge' })],

  // ── Komplexe Zahlen ──
  i_imag: [e({ name: 'Imaginäre Einheit', unit: '–', desc: 'i² = −1. Definierende Eigenschaft der komplexen Zahlen.',
              topics: ['komplexe-zahlen', 'differentialgleichungen'] })],
}

export const CATEGORIES = [
  { name: 'Mechanik', keys: ['F', 'FG', 'FN', 'FR', 'm', 'a', 'g', 'v', 's', 't', 'W', 'P', 'M', 'ω', 'α', 'μ', 'Ekin', 'Epot'] },
  { name: 'Festigkeitslehre', keys: ['σ', 'σb', 'σv', 'σy', 'τ', 'ε', 'E', 'A', 'I', 'Wb', 'Wp', 'Mb', 'Mt', 'Re', 'Rm', 'S', 'D'] },
  { name: 'Thermodynamik', keys: ['T', 'p', 'V', 'Q', 'U', 'η', 'ηC', 'COP', 'R', 'n', 'γ', 'κ', 'cp', 'cv'] },
  { name: 'Fluidmechanik', keys: ['ρ', 'Re_fluid', 'FA', 'μ_dyn', 'Vdot'] },
  { name: 'Maschinenelemente', keys: ['i', 'z', 'd', 'k', 'Ft', 'n_dreh', 'FV', 'MA', 'As'] },
  { name: 'Schwingungen', keys: ['ω0', 'f', 'T_per'] },
  { name: 'Geometrie / Mathe', keys: ['x', 'y', 'π', 'e_const', 'b', 'h', 'r', 'L', 'l'] },
  { name: 'Komplexe Zahlen', keys: ['i_imag'] },
]

export const DISPLAY_LABELS = {
  FG: 'F_G', FN: 'F_N', FR: 'F_R', FA: 'F_A', Ft: 'F_t',
  Ekin: 'E_kin', Epot: 'E_pot',
  σb: 'σ_b', σv: 'σ_v', σy: 'σ_y',
  Wb: 'W_b', Mb: 'M_b', Rm: 'R_m', Re: 'R_e',
  Re_fluid: 'Re', μ_dyn: 'μ', Vdot: 'V̇',
  ω0: 'ω₀', T_per: 'T', n_dreh: 'n',
  cp: 'c_p', cv: 'c_v', ηC: 'η_C',
  e_const: 'e', i_imag: 'i',
}

/**
 * Returns the best-matching variable entry for a key + optional topic context.
 * If multiple entries are tagged with the topic, returns the first one and
 * lists the rest as `alternates` with `ambiguous: true`.
 *
 * Returns `null` if the key is unknown.
 *
 * @param {string} key
 * @param {string|null} [topicId]
 * @returns {{primary: {name: string, unit?: string, desc: string, topics?: string[]}, alternates: Array<{name: string, unit?: string, desc: string, topics?: string[]}>, ambiguous: boolean} | null}
 */
export function getVariableEntries(key, topicId = null) {
  const list = VARIABLES[key]
  if (!list || list.length === 0) return null
  if (list.length === 1) return { primary: list[0], alternates: [], ambiguous: false }

  // Score each entry: 2 for topic match, 1 for no-topics-restriction, 0 for restricted-different
  const scored = list.map((entry) => {
    if (!entry.topics || entry.topics.length === 0) return { entry, score: 1 }
    if (topicId && entry.topics.includes(topicId)) return { entry, score: 2 }
    return { entry, score: 0 }
  })

  scored.sort((a, b) => b.score - a.score)
  const primary = scored[0].entry
  const alternates = scored.slice(1).map((s) => s.entry).filter((alt) => alt !== primary)
  return { primary, alternates, ambiguous: alternates.length > 0 }
}
