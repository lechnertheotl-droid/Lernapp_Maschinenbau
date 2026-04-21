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
      masteryWrongAnswerExplanations: {
        "1": '$R_m$ ist die Zugfestigkeit, also die höchste erreichte Spannung im Zugversuch. Sie liegt deutlich nach dem Übergang elastisch → plastisch. Verwechslung $R_e$ (Streckgrenze) vs. $R_m$ (Zugfestigkeit) ist häufig — Eselsbrücke: $e$ wie "elastisch-Ende", $m$ wie "maximum".',
        "2": '$A$ ist die Bruchdehnung in % — sie beschreibt, wie stark sich die Probe insgesamt bis zum Bruch gedehnt hat, nicht den Übergang. Sie wird am Ende des Versuchs ermittelt, nicht beim Fließbeginn.',
        "3": '$E$ ist der Elastizitätsmodul — die Steigung der Geraden im elastischen Bereich ($\\sigma = E \\cdot \\varepsilon$). $E$ charakterisiert den elastischen Bereich, markiert aber keinen Übergang. Der Punkt, an dem dieser Bereich endet, ist $R_e$.',
      },
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
      masteryWrongAnswerExplanations: {
        "0": 'Polyethylen (PE) erweicht bereits bei ca. 100–130 °C und hat eine sehr geringe Härte. Bei einer hochtemperaturfesten Gleitführung würde PE schmelzen oder fliessen. Kunststoffe taugen nur für geringe Temperatur- und Druckbelastung.',
        "1": 'Stahl S235 ist ein weicher Baustahl (ca. 120–150 HV). Für eine verschleißarme Gleitführung fehlt ihm die Härte, zusätzlich verliert er oberhalb ~500 °C spürbar an Festigkeit. Ohne Härtung oder Beschichtung nicht für diese Anwendung geeignet.',
        "3": 'Kupfer ist ein sehr weicher Werkstoff (~40–60 HV) und wird bei hoher Temperatur noch weicher. Er ist gut wärmeleitend, aber verschleißanfällig — genau das Gegenteil von dem, was eine Hochtemperatur-Gleitführung braucht.',
      },
      nextLessonId: 'werk-2-1',
    }),
  ],
})

const unit2 = makeUnit({
  id: 'werk-unit-2',
  title: 'Prüfverfahren',
  order: 2,
  lessons: [
    makeLesson({
      id: 'werk-2-1',
      title: 'Härteprüfung (HV, HB, HRC)',
      estimatedMinutes: 12,
      learningGoals: [
        'Prinzip der Härteprüfung verstehen',
        'Vickers, Brinell, Rockwell unterscheiden',
        'Härte mit Festigkeit korrelieren',
      ],
      createdAt: '2026-04-20',
      intuitionTitle: 'Wie hart ist „hart"?',
      intuitionContent:
        '**Härte** ist der Widerstand eines Werkstoffs gegen das Eindringen eines anderen Körpers. ' +
        'Die üblichen Prüfmethoden drücken einen normierten Eindringkörper (Kugel, Diamantpyramide, Diamantkegel) mit definierter Kraft in die Oberfläche und messen den Abdruck.\n\n' +
        '- **Vickers (HV):** Diamantpyramide, kleiner Eindruck — auch für dünne Proben und harte Werkstoffe geeignet.\n' +
        '- **Brinell (HB):** Kugel aus Hartmetall — für weichere Werkstoffe und größere Proben.\n' +
        '- **Rockwell (HRC / HRB):** Diamantkegel (HRC) oder Kugel (HRB) — sehr schnell, direkt vom Messgerät ablesbar.',
      formulaTitle: 'Kennwerte & Korrelation',
      formulaContent:
        '**Vickers-Härte:** HV $= 0{,}1891 \\cdot F / d^{2}$ (F in N, d als mittlere Diagonale in mm).\n\n' +
        '**Brinell-Härte:** HB $\\approx 0{,}102 \\cdot F / A_\\text{abdruck}$.\n\n' +
        '**Faustformel Stahl:** $R_m \\approx 3{,}5 \\cdot \\text{HB}$ (in MPa). So kann man aus einer schnellen Härteprüfung die Zugfestigkeit grob abschätzen.\n\n' +
        '**Typische Werte:**\n' +
        '- Reineisen: ~100 HV\n' +
        '- Baustahl S235: ~120–150 HV\n' +
        '- Vergütungsstahl 42CrMo4: ~280–320 HV\n' +
        '- Gehärteter Werkzeugstahl: bis 900 HV\n' +
        '- Al₂O₃-Keramik: ~2000 HV',
      masteryQuestion: 'Welches Verfahren eignet sich am besten für eine dünne Oberflächenschicht (z. B. gehärtete Randschicht)?',
      masteryOptions: ['Vickers (HV)', 'Brinell (HB) mit 10 mm Kugel', 'Rockwell B (HRB)', 'Keine der Methoden'],
      correctIndex: 0,
      masteryExplanation:
        '**Ansatz:** Dünne Schicht braucht kleinen Eindruck.\n\n' +
        '**Rechnung:** Vickers mit Diamantpyramide erzeugt sehr kleine Abdrücke (Micro-Vickers: F < 2 N).\n\n' +
        '**Probe:** Brinell mit 10 mm Kugel würde die Schicht durchdrücken und den Grundwerkstoff mitmessen.\n\n' +
        '**Typischer Fehler:** Brinell auch auf harte/dünne Schichten anwenden — das Ergebnis wird verfälscht.',
      masteryHints: [
        'Kleiner Eindruck ist nötig, um nur die dünne Schicht zu messen.',
        'Welches Verfahren hat den kleinsten Eindruck?',
      ],
      masteryWrongAnswerExplanations: {
        "1": 'Brinell mit 10 mm Kugel erzeugt einen vergleichsweise großen Abdruck (Durchmesser mehrere Millimeter, Eindringtiefe zu groß). Die dünne Schicht würde durchdrückt und der weichere Grundwerkstoff verfälscht das Ergebnis. Kleine Eindrücke liefert nur Vickers (insbesondere Micro-Vickers).',
        "2": 'Rockwell B (HRB) nutzt eine Hartmetall-Kugel und höhere Prüfkräfte — der Eindruck ist zu tief für dünne Schichten. HRB ist für weichere, dickere Proben gedacht. Für Randschichten braucht man eine kleine Diamantpyramide wie bei Vickers.',
        "3": 'Es gibt durchaus ein passendes Verfahren: Vickers (insbesondere Micro-/Nano-Vickers) kann mit geringen Prüfkräften auch dünne Randschichten normgerecht charakterisieren. "Keine" ist daher falsch.',
      },
      prerequisites: ['werk-1-2'],
      nextLessonId: 'werk-2-2',
    }),
    makeLesson({
      id: 'werk-2-2',
      title: 'Kerbschlagbiegeversuch',
      estimatedMinutes: 12,
      learningGoals: [
        'Sprödbruch-Risiko erkennen',
        'Übergangstemperatur zwischen zähem und sprödem Verhalten verstehen',
        'Kerbschlagarbeit $KV$ als Kennwert interpretieren',
      ],
      createdAt: '2026-04-20',
      intuitionTitle: 'Zäh oder spröde?',
      intuitionContent:
        'Ein Zugversuch gibt Festigkeit, aber keine Aussage über **Sprödbruch-Empfindlichkeit**. Dafür gibt es den **Kerbschlagbiegeversuch** (nach Charpy): ' +
        'Eine gekerbte Probe wird durch ein Pendel schlagartig gebrochen. Die verbrauchte Energie heißt **Kerbschlagarbeit** $KV$ (in Joule).\n\n' +
        '**Deutung:**\n' +
        '- Hohe $KV$ → **zäher** Bruch (gute Verformung vor Trennung)\n' +
        '- Niedrige $KV$ → **spröder** Bruch (plötzlich, ohne Warnung)\n\n' +
        '**Übergangstemperatur:** Viele Stähle verhalten sich bei warmer Temperatur zäh, werden aber bei Kälte spröde. Unterhalb der **Übergangstemperatur** $T_Ü$ fällt $KV$ stark ab — gefährlich für Kalt-Konstruktionen!',
      formulaTitle: 'Kerbschlagarbeit',
      formulaContent:
        '**Kerbschlagarbeit:** $KV = m \\cdot g \\cdot (h_0 - h_1)$\n\n' +
        '- $h_0$: Anfangshöhe des Pendels\n' +
        '- $h_1$: Endhöhe nach Bruch\n' +
        '- $KV$ in Joule, wird direkt vom Gerät abgelesen\n\n' +
        '**Typische Werte bei Raumtemperatur:**\n' +
        '- Baustahl S235J2: > 27 J (zäh)\n' +
        '- Grauguss: 3–5 J (spröde)\n' +
        '- Vergütungsstahl: 40–100 J\n\n' +
        '**Kritischer Grenzwert:** $KV < 27\\,\\text{J}$ gilt im Stahlbau als sprödbruchgefährdet.',
      masteryQuestion: 'Eine Baustahlprobe hat bei $-20\\,°\\text{C}$ eine Kerbschlagarbeit von $15\\,\\text{J}$. Was bedeutet das für die Konstruktion?',
      masteryOptions: [
        'Sprödbruchgefahr bei tiefen Temperaturen — der Werkstoff ist ungeeignet',
        'Alles in Ordnung — 15 J ist ausreichend',
        'Das Ergebnis lässt sich nicht interpretieren',
        'Höhere Festigkeit als S235',
      ],
      correctIndex: 0,
      masteryExplanation:
        '**Ansatz:** Grenzwert für sprödbruchsichere Konstruktionen ist $KV \\geq 27\\,\\text{J}$.\n\n' +
        '**Rechnung:** $15\\,\\text{J} < 27\\,\\text{J}$ → sprödbruchgefährdet.\n\n' +
        '**Probe:** Stähle mit $J2$-Zusatz sind für $-20\\,°\\text{C}$ geprüft und erreichen ≥27 J — hier offensichtlich nicht erreicht.\n\n' +
        '**Typischer Fehler:** Die Temperatur ignorieren; bei Raumtemperatur wäre derselbe Stahl oft zäh.',
      masteryHints: [
        'Grenzwert für sprödbruchsichere Konstruktionen?',
        '$KV \\geq 27\\,\\text{J}$ ist der kritische Wert im Stahlbau.',
      ],
      masteryWrongAnswerExplanations: {
        "1": '$15\\,\\text{J}$ liegt klar unter dem kritischen Grenzwert von $27\\,\\text{J}$. "Alles in Ordnung" ignoriert die Norm und unterschätzt die Sprödbruchgefahr. Regel: Stähle im Stahlbau müssen $KV \\geq 27\\,\\text{J}$ bei Einsatztemperatur erreichen.',
        "2": 'Das Ergebnis ist sehr wohl interpretierbar: $KV$ in Joule ist direkt vergleichbar mit dem Normwert $27\\,\\text{J}$. Niedrige Werte bedeuten sprödes Bruchverhalten. Das Verfahren liefert gerade diese klare Aussage.',
        "3": 'Kerbschlagarbeit sagt nichts über die Zugfestigkeit aus — sie misst Zähigkeit/Sprödigkeit, nicht Festigkeit. Verwechslung mit $R_m$. Ein niedriger $KV$-Wert bedeutet nur, dass der Werkstoff wenig Energie vor dem Bruch aufnimmt, nicht dass er fester wäre.',
      },
      prerequisites: ['werk-2-1'],
      nextLessonId: 'werk-pruefung-1',
    }),
  ],
})

const unit3 = makeUnit({
  id: 'werk-unit-3',
  title: 'Prüfung',
  order: 3,
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
      masteryWrongAnswerExplanations: {
        "1": '$800\\,\\text{MPa}$ entsteht durch $R_m \\cdot S = 400 \\cdot 2$ — das ist das Produkt statt des Quotienten. Die Sicherheitszahl $S$ soll die zulässige Spannung *verkleinern*, daher steht sie im Nenner: $\\sigma_\\text{zul} = R_m / S$.',
        "2": '$400\\,\\text{MPa}$ ist $R_m$ selbst, ohne Sicherheitsabzug. Im Bauteil darf man aber niemals bis zur Zugfestigkeit belasten — dafür ist $S$ da. Die Sicherheitszahl wurde hier ignoriert.',
        "3": '$100\\,\\text{MPa}$ entspricht $R_m / 4$ (also $S = 4$) — der angegebene Sicherheitsfaktor ist aber $S = 2$. Wahrscheinlich mit anderem typischen $S$-Wert verwechselt. Korrekt: $400 / 2 = 200\\,\\text{MPa}$.',
      },
      prerequisites: ['werk-1-1', 'werk-2-2'],
      nextLessonId: null,
    }),
  ],
})

export const werkstoffkundeTopic = {
  id: 'werkstoffkunde',
  title: 'Werkstoffkunde',
  description: 'Zugversuch, Härteprüfung, Kerbschlag, Werkstoffgruppen — Grundlage 1./2. Semester',
  subject: 'engineering',
  icon: '⚙︎',
  color: 'slate',
  estimatedHours: 4,
  difficulty: 2,
  level: 'grundlagen',
  units: [unit1, unit2, unit3],
  prerequisites: ['algebra'],
}
