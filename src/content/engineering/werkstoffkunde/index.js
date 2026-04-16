import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'werk-unit-1',
  title: 'Werkstoffkennwerte',
  order: 1,
  lessons: [
    makeLesson({
      id: 'werk-1-1',
      title: 'Spannungs-Dehnungs-Diagramm',
      estimatedMinutes: 15,
      learningGoals: [
        'Streckgrenze $R_e$, Zugfestigkeit $R_m$, Bruchdehnung $A$ ablesen',
        'Elastisch vs. plastisch unterscheiden',
        'Elastizitätsmodul $E$ als Steigung im Hookeschen Bereich erkennen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Der Fingerabdruck eines Werkstoffs',
      intuitionContent:
        'Beim **Zugversuch** wird eine Probe langsam gedehnt und die nötige Spannung gemessen. ' +
        'Das Ergebnis ist das **Spannungs-Dehnungs-Diagramm** $\\sigma(\\varepsilon)$. Daraus liest man die wichtigsten Kennwerte ab:\n\n' +
        '- **Elastischer Bereich** (gerade, Steigung = E): Probe federt zurück\n' +
        '- **Streckgrenze** $R_e$: ab hier bleibt Verformung dauerhaft\n' +
        '- **Zugfestigkeit** $R_m$: höchste erreichte Spannung\n' +
        '- **Bruchdehnung** $A$: wie stark sich die Probe vor dem Bruch gedehnt hat',
      formulaTitle: 'Hooke + Kennwerte',
      formulaContent:
        '**Hookesches Gesetz** (im elastischen Bereich):\n' +
        '$$\\sigma = E \\cdot \\varepsilon$$\n\n' +
        'mit $\\sigma$ Spannung in MPa, $\\varepsilon = \\Delta l/l_0$ dimensionslos, $E$ Elastizitätsmodul in MPa oder GPa.\n\n' +
        '**Beispiel Stahl S235:** $R_e \\approx 235$ MPa, $R_m \\approx 360$–$510$ MPa, $A \\approx 25\\%$, $E \\approx 210\\,000$ MPa.\n\n' +
        '**Zulässige Spannung:** $\\sigma_\\text{zul} = R_m / S$ mit Sicherheitszahl $S$ (typ. 1,5–3).',
      masteryQuestion: 'Welcher Kennwert markiert den Übergang elastisch → plastisch?',
      masteryOptions: ['$R_e$ (Streckgrenze)', '$R_m$ (Zugfestigkeit)', '$A$ (Bruchdehnung)', '$E$ (E-Modul)'],
      correctIndex: 0,
      masteryExplanation:
        'Bis zur Streckgrenze $R_e$ federt die Probe zurück (elastisch). Ab $R_e$ bleibt nach Entlastung eine plastische Verformung. ' +
        '$R_m$ ist die höchste Spannung (kommt später), $A$ die Bruchdehnung, $E$ die Steigung im elastischen Bereich.',
      masteryHints: [
        'Übergang elastisch → plastisch = ab wann bleibt Verformung dauerhaft.',
        '$R_e$ ist die **Streckgrenze** — vor ihr federt alles zurück.',
        '$R_m$ kommt erst nach $R_e$ — es ist das Maximum, nicht der Übergang.',
      ],
      nextLessonId: 'werk-1-2',
    }),
    makeLesson({
      id: 'werk-1-2',
      title: 'Werkstoffgruppen',
      estimatedMinutes: 14,
      learningGoals: [
        'Stahl, Aluminium, Kunststoff und Keramik qualitativ vergleichen',
        'Anwendungsgebiete aus Werkstoffeigenschaften ableiten',
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Welcher Werkstoff für welchen Job?',
      intuitionContent:
        '**Metalle** (Stahl, Alu, Kupfer) sind zäh und gut verformbar — ideal für tragende Bauteile.\n\n' +
        '**Keramiken** (Al₂O₃, SiC) sind sehr hart und hitzebeständig, aber spröde — kein Zug!\n\n' +
        '**Kunststoffe** (PA, PTFE, POM) sind leicht und korrosionsbeständig, aber weniger steif.\n\n' +
        '**Verbundwerkstoffe** (CFK, GFK) kombinieren hohe Steifigkeit mit geringem Gewicht.',
      formulaTitle: 'Vergleichskennwerte',
      formulaContent:
        '| Werkstoff | E-Modul | $R_m$ | Dichte |\n' +
        '|---|---|---|---|\n' +
        '| Stahl S235 | 210 GPa | 360–510 MPa | 7,85 g/cm³ |\n' +
        '| Alu 6060 | 70 GPa | 150–195 MPa | 2,70 g/cm³ |\n' +
        '| Nylon (PA6) | 3 GPa | 70–80 MPa | 1,14 g/cm³ |\n' +
        '| Al₂O₃ | 380 GPa | (Druck: ~2000 MPa) | 3,9 g/cm³ |\n\n' +
        '**Spezifische Steifigkeit** = $E/\\rho$ — wichtig für Leichtbau.',
      masteryQuestion: 'Welcher Werkstoff ist für eine hochtemperaturfeste, verschleißarme Gleitführung am besten geeignet?',
      masteryOptions: ['Polyethylen (PE)', 'Stahl S235', 'Aluminiumoxid-Keramik (Al₂O₃)', 'Kupfer'],
      correctIndex: 2,
      masteryExplanation:
        'Keramiken wie Al₂O₃ sind extrem hart (hohe Verschleißfestigkeit) und hitzebeständig bis über 1000 °C. ' +
        'Kunststoffe erweichen bei hohen Temperaturen, Stahl und Kupfer haben zu geringe Härte für Gleitführungen unter extremer Belastung.',
      masteryHints: [
        'Hohe Temperatur + hohe Verschleißfestigkeit → Keramik.',
        'Kunststoffe erweichen bei ca. 100–250 °C.',
        'Keramiken sind hart und hitzebeständig, aber spröde.',
      ],
      nextLessonId: 'werk-pruefung-1',
    }),
  ],
})

const unit2 = makeUnit({
  id: 'werk-unit-2',
  title: 'Prüfung',
  order: 2,
  lessons: [
    makeLesson({
      id: 'werk-pruefung-1',
      title: 'Prüfung: Werkstoffwahl & Kennwerte',
      estimatedMinutes: 25,
      isExam: true,
      learningGoals: [
        'Aus Anforderungen (Last, Temperatur, Umgebung) Werkstoffgruppe wählen',
        'Kennwerte aus Zugversuch korrekt interpretieren',
        'Zulässige Spannung mit Sicherheitszahl berechnen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Prüfungs-Strategie',
      intuitionContent:
        '**Gegeben/Gesucht:** Last, Geometrie, Umweltbedingungen, zulässige Sicherheit.\n\n' +
        '**Vorgehen:**\n' +
        '1. Beanspruchung (Zug/Druck/Torsion/dynamisch) identifizieren\n' +
        '2. Werkstoffgruppe eingrenzen (Stahl, Alu, Kunststoff, Keramik, Verbund)\n' +
        '3. Kennwert wählen ($R_e$, $R_m$, Dauerfestigkeit, Bruchdehnung)\n' +
        '4. $\\sigma_\\text{zul} = R_m/S$ oder $R_e/S$ berechnen\n\n' +
        '**Kontrolle:** MPa nicht mit N/mm² verwechseln (sind gleich!), Temperatureinfluss beachten.',
      formulaTitle: 'Kennwerte & Sicherheitszahl',
      formulaContent:
        '- Spannung: $\\sigma = F/A$ (MPa)\n' +
        '- Hooke: $\\sigma = E\\cdot\\varepsilon$\n' +
        '- Zulässige Spannung: $\\sigma_\\text{zul} = R_m/S$ oder $R_e/S$\n\n' +
        'Typische S-Werte: statisch $S = 1{,}5$, Schwingbelastung $S = 2$–$3$.',
      masteryQuestion:
        '[PRÜFUNG] Stahl: $R_m = 400$ MPa, $S = 2$. Wie groß ist $\\sigma_\\text{zul}$ in MPa?',
      masteryOptions: ['$200$', '$800$', '$400$', '$100$'],
      correctIndex: 0,
      masteryExplanation: '$\\sigma_\\text{zul} = R_m/S = 400/2 = 200$ MPa.',
      masteryHints: [
        'Sicherheitszahl $S$ steht im Nenner: $\\sigma_\\text{zul} = R_m / S$.',
        '$R_m = 400$ MPa, $S = 2$ → $400/2$.',
        'Ergebnis: 200 MPa — nicht 800 (das wäre Produkt, nicht Quotient).',
      ],
      prerequisites: ['werk-1-1'],
      nextLessonId: null,
    }),
  ],
})

export const werkstoffkundeTopic = {
  id: 'werkstoffkunde',
  title: 'Werkstoffkunde',
  description: 'Zugversuch, Kennwerte, Werkstoffgruppen, Wärmebehandlung — Grundlage 2. Semester',
  subject: 'engineering',
  icon: '⚙︎',
  color: 'slate',
  estimatedHours: 3,
  difficulty: 2,
  level: 'grundlagen',
  units: [unit1, unit2],
  prerequisites: ['algebra'],
}
