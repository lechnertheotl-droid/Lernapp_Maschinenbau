// ── Integralrechnung Unit 3: Anwendungen ──────────────────────────────────────

export const exercises_int_u3 = {
  // ── Lesson 1: Flächenberechnung ───────────────────────────────────────────
  'ex-int-3-1-a': {
    id: 'ex-int-3-1-a', lessonId: 'int-3-1', type: 'multiple-choice',
    question: 'Wie berechnet man die Fläche zwischen $f(x)$ und $g(x)$ auf $[a, b]$, wenn $f(x) \\geq g(x)$?',
    options: [
      '$\\int_{a}^{b} f(x)\\,dx + \\int_{a}^{b} g(x)\\,dx$',
      '$\\int_{a}^{b} [f(x) - g(x)]\\,dx$',
      '$\\int_{a}^{b} f(x) \\cdot g(x)\\,dx$',
      '$\\int_{a}^{b} |f(x)|\\,dx - \\int_{a}^{b} |g(x)|\\,dx$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Fläche zwischen zwei Kurven = Fläche unter der oberen minus Fläche unter der unteren.

**Rechnung:** $A = \\int_{a}^{b} f(x)\\,dx - \\int_{a}^{b} g(x)\\,dx = \\int_{a}^{b} [f(x) - g(x)]\\,dx$.

**Probe:** Test mit $f(x) = 2, g(x) = 1$ auf $[0, 3]$: $A = \\int_{0}^{3}(2-1)\\,dx = 3$. Passt zum Rechteck $3 \\times 1 = 3$. ✓

**Typischer Fehler:** Addition der Integrale (A) — das wäre die Summe der beiden Einzelflächen, nicht die Fläche dazwischen.`,
    hints: [
      'Stell dir zwei Kurven vor: welche liegt oben, welche unten?',
      'Fläche zwischen = Fläche unter der oberen - Fläche unter der unteren.',
      'Integriere die Differenz: $\\int [f(x) - g(x)]\\,dx$.',
    ],
  },
  'ex-int-3-1-b': {
    id: 'ex-int-3-1-b', lessonId: 'int-3-1', type: 'number-input',
    question: 'Berechne die Fläche zwischen $f(x) = x^{2}$ und der $x$-Achse auf dem Intervall $[0, 3]$.',
    correctValue: 9,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** $f(x) \\geq 0$ auf $[0, 3]$, also Fläche = Integral.

**Rechnung:**
- Stammfunktion: $F(x) = \\dfrac{x^{3}}{3}$.
- $A = \\int_{0}^{3} x^{2}\\,dx = \\left[\\dfrac{x^{3}}{3}\\right]_{0}^{3} = \\dfrac{27}{3} - 0 = 9$.

**Probe:** Plausibilität — Parabel wächst von $0$ bis $9$ über Breite $3$. Mittlere Höhe etwa $3$, also Fläche $\\approx 9$. ✓

**Typischer Fehler:** Stammfunktion $x^{3}$ statt $x^{3}/3$ (Faktor vergessen).`,
    hints: [
      '$\\int x^{2}\\,dx = \\dfrac{x^{3}}{3} + C$.',
      'Hauptsatz: $F(3) - F(0)$.',
      '$3^{3}/3 - 0 = 9$.',
    ],
  },
  'ex-int-3-1-c': {
    id: 'ex-int-3-1-c', lessonId: 'int-3-1', type: 'number-input',
    question: 'Berechne die Fläche zwischen $f(x) = x$ und $g(x) = x^{2}$ auf $[0, 1]$ (Ergebnis auf 2 Nachkommastellen).',
    correctValue: 0.17,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Zuerst prüfen, welche Funktion oben liegt. Testwert: bei $x = 0{,}5$ ist $f = 0{,}5$, $g = 0{,}25$, also $f \\geq g$ auf $[0, 1]$.

**Rechnung:**
- $A = \\int_{0}^{1} (x - x^{2})\\,dx = \\left[\\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}\\right]_{0}^{1} = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{3}{6} - \\dfrac{2}{6} = \\dfrac{1}{6} \\approx 0{,}167$.

**Probe:** $1/6 \\approx 0{,}1667$, gerundet $0{,}17$. ✓

**Typischer Fehler:** Falsche Reihenfolge (erst $x^{2}$ statt $x$) — Vorzeichenfehler. Test mit Zwischenwert hilft!`,
    hints: [
      'Prüfe erst: welche Funktion ist auf $(0,1)$ größer? Bei $x = 0{,}5$: $0{,}5 > 0{,}25$.',
      'Also $f - g = x - x^{2}$.',
      'Integration: $\\int_{0}^{1}(x - x^{2})\\,dx = 1/2 - 1/3 = 1/6$.',
    ],
  },
  'ex-int-3-1-d': {
    id: 'ex-int-3-1-d', lessonId: 'int-3-1', type: 'multiple-choice',
    question: 'Die Fläche $A$, die von $f(x) = \\sin(x)$ und der $x$-Achse auf $[0, 2\\pi]$ eingeschlossen wird, ist:',
    options: [
      '$0$',
      '$2$',
      '$4$',
      '$\\pi$',
    ],
    correctIndex: 2,
    explanation: `**Ansatz:** Achtung — $\\sin(x)$ wechselt bei $x = \\pi$ das Vorzeichen! Fläche berechnet sich aus Beträgen.

**Rechnung:**
- $\\int_{0}^{\\pi} \\sin(x)\\,dx = [-\\cos(x)]_{0}^{\\pi} = -(-1) - (-1) = 2$ (positive Hälfte).
- $\\int_{\\pi}^{2\\pi} \\sin(x)\\,dx = [-\\cos(x)]_{\\pi}^{2\\pi} = -1 - 1 = -2$ (negative Hälfte).
- Fläche: $|2| + |-2| = 4$.

**Probe:** $\\int_{0}^{2\\pi} \\sin(x)\\,dx = 0$ (positive und negative Beiträge heben sich), aber Fläche $\\neq 0$!

**Typischer Fehler:** Direkt integrieren und "Fläche $= 0$" schreiben — Integral $\\neq$ Fläche bei Vorzeichenwechsel!`,
    hints: [
      '$\\sin(x)$ ist auf $[0, \\pi]$ positiv, auf $[\\pi, 2\\pi]$ negativ.',
      'Für die Fläche muss man die Abschnitte getrennt berechnen und Beträge addieren.',
      'Jeder "Buckel" hat Fläche $2$, zusammen $4$.',
    ],
  },
  'ex-int-3-1-mastery': {
    id: 'ex-int-3-1-mastery', lessonId: 'int-3-1', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne die Fläche, die von $f(x) = 4 - x^{2}$ und der $x$-Achse eingeschlossen wird. (Tipp: Nullstellen bei $x = \\pm 2$)',
    correctValue: 10.67,
    tolerance: 0.05,
    unit: '',
    explanation: `**Ansatz:** Nullstellen finden $\\to$ Grenzen. Auf $[-2, 2]$ ist $f(x) \\geq 0$ (Parabel nach unten geöffnet, Scheitel bei $(0, 4)$).

**Rechnung:**
- Nullstellen: $4 - x^{2} = 0 \\Rightarrow x = \\pm 2$.
- Stammfunktion: $F(x) = 4x - \\dfrac{x^{3}}{3}$.
- $A = \\int_{-2}^{2} (4 - x^{2})\\,dx = \\left[4x - \\dfrac{x^{3}}{3}\\right]_{-2}^{2}$.
- Bei $x = 2$: $8 - \\dfrac{8}{3} = \\dfrac{24 - 8}{3} = \\dfrac{16}{3}$.
- Bei $x = -2$: $-8 + \\dfrac{8}{3} = -\\dfrac{16}{3}$.
- Differenz: $\\dfrac{16}{3} - \\left(-\\dfrac{16}{3}\\right) = \\dfrac{32}{3} \\approx 10{,}67$.

**Probe (Symmetrie):** $A = 2 \\cdot \\int_{0}^{2}(4 - x^{2})\\,dx = 2 \\cdot \\dfrac{16}{3} = \\dfrac{32}{3}$. ✓

**Typischer Fehler:** Grenzen vertauschen oder Symmetrie übersehen.`,
    hints: [
      'Finde die Nullstellen: $4 - x^{2} = 0 \\Rightarrow x = \\pm 2$.',
      'Nutze die Symmetrie: $A = 2 \\cdot \\int_{0}^{2}(4 - x^{2})\\,dx$.',
      'Stammfunktion: $F(x) = 4x - x^{3}/3$. Ergebnis: $32/3 \\approx 10{,}67$.',
    ],
  },

  // ── Lesson 2: Rotationskörper ─────────────────────────────────────────────
  'ex-int-3-2-a': {
    id: 'ex-int-3-2-a', lessonId: 'int-3-2', type: 'multiple-choice',
    question: 'Wie berechnet man das Volumen eines Rotationskörpers bei Drehung um die $x$-Achse?',
    options: [
      '$V = \\int_{a}^{b} f(x)\\,dx$',
      '$V = \\pi \\cdot \\int_{a}^{b} [f(x)]^{2}\\,dx$',
      '$V = 2\\pi \\cdot \\int_{a}^{b} f(x)\\,dx$',
      '$V = \\pi \\cdot \\int_{a}^{b} f(x)\\,dx$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Scheibenmethode — jeder Querschnitt ist eine Kreisscheibe mit Radius $f(x)$.

**Rechnung:** Kreisfläche $= \\pi \\cdot r^{2} = \\pi \\cdot [f(x)]^{2}$. Das Volumen ist die "Summe" aller infinitesimalen Scheiben: $V = \\pi \\int_{a}^{b} [f(x)]^{2}\\,dx$.

**Probe:** Test — Zylinder mit $f(x) = R$ auf $[0, h]$: $V = \\pi R^{2} h$. Formel reproduziert das korrekt.

**Typischer Fehler:** $\\pi$ vergessen oder Quadrat $[f(x)]^{2}$ vergessen.`,
    hints: [
      'Denke an Kreisscheiben mit Radius $r = f(x)$.',
      'Kreisfläche = $\\pi r^{2}$.',
      'Aufsummieren über das Intervall: Integral von $\\pi \\cdot [f(x)]^{2}$.',
    ],
  },
  'ex-int-3-2-b': {
    id: 'ex-int-3-2-b', lessonId: 'int-3-2', type: 'number-input',
    question: 'Berechne das Volumen des Kegels, der entsteht, wenn $f(x) = x$ auf $[0, 3]$ um die $x$-Achse rotiert. Gib das Ergebnis als Vielfaches von $\\pi$ an (also $V/\\pi$).',
    correctValue: 9,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Scheibenformel anwenden.

**Rechnung:**
- $V = \\pi \\cdot \\int_{0}^{3} x^{2}\\,dx = \\pi \\cdot \\left[\\dfrac{x^{3}}{3}\\right]_{0}^{3} = \\pi \\cdot 9 = 9\\pi$.
- Also $V/\\pi = 9$.

**Probe (Kegelformel):** $V = \\dfrac{1}{3}\\pi r^{2} h = \\dfrac{1}{3} \\cdot \\pi \\cdot 9 \\cdot 3 = 9\\pi$. ✓ (Kegel mit Radius $r = 3$ und Höhe $h = 3$)

**Typischer Fehler:** $[f(x)]^{2}$ und $f(x)$ verwechseln — muss quadriert werden!`,
    hints: [
      '$V = \\pi \\cdot \\int_{0}^{3} [f(x)]^{2}\\,dx = \\pi \\cdot \\int_{0}^{3} x^{2}\\,dx$.',
      '$\\int_{0}^{3} x^{2}\\,dx = [x^{3}/3]_{0}^{3} = 9$.',
      'Also $V = 9\\pi$, und $V/\\pi = 9$.',
    ],
  },
  'ex-int-3-2-c': {
    id: 'ex-int-3-2-c', lessonId: 'int-3-2', type: 'number-input',
    question: 'Berechne das Volumen der Kugel mit Radius $R = 2$ (Halbkreis $f(x) = \\sqrt{4 - x^{2}}$ um $x$-Achse rotiert). Ergebnis auf 2 Nachkommastellen.',
    correctValue: 33.51,
    tolerance: 0.1,
    unit: '',
    explanation: `**Ansatz:** Scheibenformel, Quadrat von Wurzel $\\Rightarrow$ Wurzel entfällt.

**Rechnung:**
- $[f(x)]^{2} = (\\sqrt{4 - x^{2}})^{2} = 4 - x^{2}$.
- $V = \\pi \\cdot \\int_{-2}^{2} (4 - x^{2})\\,dx = \\pi \\cdot \\left[4x - \\dfrac{x^{3}}{3}\\right]_{-2}^{2}$.
- Einsetzen: $\\pi \\cdot \\left[\\left(8 - \\dfrac{8}{3}\\right) - \\left(-8 + \\dfrac{8}{3}\\right)\\right] = \\pi \\cdot \\dfrac{32}{3} \\approx 33{,}51$.

**Probe (Kugelformel):** $V = \\dfrac{4}{3}\\pi R^{3} = \\dfrac{4}{3}\\pi \\cdot 8 = \\dfrac{32\\pi}{3} \\approx 33{,}51$. ✓

**Typischer Fehler:** Wurzel nicht quadrieren und Integration erschweren.`,
    hints: [
      'Die Quadrat-Wurzel hebt sich auf: $(\\sqrt{4 - x^{2}})^{2} = 4 - x^{2}$.',
      'Grenzen $-2$ bis $2$ (Halbkugel bis Halbkugel).',
      'Integration: $V = \\pi \\cdot 32/3 \\approx 33{,}51$.',
    ],
  },
  'ex-int-3-2-mastery': {
    id: 'ex-int-3-2-mastery', lessonId: 'int-3-2', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = \\sqrt{x}$ wird auf $[0, 4]$ um die $x$-Achse rotiert. Berechne $V/\\pi$.',
    correctValue: 8,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Scheibenformel, $(\\sqrt{x})^{2} = x$ vereinfacht das Integral.

**Rechnung:**
- $V = \\pi \\cdot \\int_{0}^{4} (\\sqrt{x})^{2}\\,dx = \\pi \\cdot \\int_{0}^{4} x\\,dx = \\pi \\cdot \\left[\\dfrac{x^{2}}{2}\\right]_{0}^{4} = \\pi \\cdot 8 = 8\\pi$.
- $V/\\pi = 8$.

**Probe:** Rotationsparaboloid — Plausibel, Volumen wächst mit $x$, integriert ergibt halbe Quadratfläche mal $\\pi$. ✓

**Typischer Fehler:** Wurzel nicht quadrieren — dann stünde $\\int \\sqrt{x}\\,dx$ statt $\\int x\\,dx$.`,
    hints: [
      '$(\\sqrt{x})^{2} = x$ — das vereinfacht sich!',
      '$V/\\pi = \\int_{0}^{4} x\\,dx = [x^{2}/2]_{0}^{4}$.',
      'Ergebnis: $16/2 = 8$.',
    ],
  },

  // ── Lesson 3: Technische Anwendungen ──────────────────────────────────────
  'ex-int-3-3-a': {
    id: 'ex-int-3-3-a', lessonId: 'int-3-3', type: 'multiple-choice',
    question: 'Wie berechnet man die Arbeit $W$, wenn eine ortsabhängige Kraft $F(x)$ längs des Weges von $a$ bis $b$ wirkt?',
    options: [
      '$W = F \\cdot s$ (Kraft mal Weg)',
      '$W = \\int_{a}^{b} F(x)\\,dx$',
      '$W = F(b) - F(a)$',
      '$W = \\dfrac{d}{dx} F(x)$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Arbeit = Integral der Kraft über den Weg, wenn Kraft ortsabhängig.

**Rechnung:** $W = \\int_{a}^{b} F(x)\\,dx$ — die einfache Formel $W = F \\cdot s$ gilt nur für konstante Kräfte.

**Probe:** Feder mit $F(x) = kx$, $W = \\int_{0}^{s} kx\\,dx = \\dfrac{1}{2}ks^{2}$ — Federenergieformel. ✓

**Typischer Fehler:** $W = F \\cdot s$ blindlings anwenden, ohne zu prüfen, ob $F$ konstant ist.`,
    hints: [
      '$W = F \\cdot s$ gilt nur für konstante Kraft.',
      'Bei veränderlicher Kraft muss "aufaddiert" werden $\\to$ Integral.',
      'Einheit: Arbeit hat die Einheit $\\mathrm{J} = \\mathrm{N} \\cdot \\mathrm{m}$.',
    ],
  },
  'ex-int-3-3-b': {
    id: 'ex-int-3-3-b', lessonId: 'int-3-3', type: 'number-input',
    question: 'Eine Feder hat die Federkraft $F(x) = 200 \\cdot x\\,\\mathrm{N}$ (Hookesches Gesetz mit $k = 200\\,\\mathrm{N/m}$). Berechne die Arbeit (in Joule), um die Feder von $x = 0$ auf $x = 0{,}1\\,\\mathrm{m}$ zu dehnen.',
    correctValue: 1,
    tolerance: 0.01,
    unit: 'J',
    explanation: `**Ansatz:** Hookesches Gesetz + Integralformel für Arbeit.

**Rechnung:**
- $W = \\int_{0}^{0{,}1} 200x\\,dx = 200 \\cdot \\left[\\dfrac{x^{2}}{2}\\right]_{0}^{0{,}1} = 200 \\cdot \\dfrac{0{,}01}{2} = 200 \\cdot 0{,}005 = 1\\,\\mathrm{J}$.

**Probe (Energieformel):** $W = \\dfrac{1}{2}kx^{2} = \\dfrac{1}{2} \\cdot 200 \\cdot (0{,}1)^{2} = \\dfrac{1}{2} \\cdot 200 \\cdot 0{,}01 = 1\\,\\mathrm{J}$. ✓

**Typischer Fehler:** $W = F \\cdot s = 200 \\cdot 0{,}1 \\cdot 0{,}1 = 2\\,\\mathrm{J}$ (doppelt so groß) — vergisst Faktor $1/2$ bei linearer Feder.`,
    hints: [
      '$W = \\int_{0}^{0{,}1} 200x\\,dx$.',
      '$\\int 200x\\,dx = 100x^{2}$.',
      'Grenzen: $100 \\cdot (0{,}1)^{2} - 0 = 100 \\cdot 0{,}01 = 1\\,\\mathrm{J}$.',
    ],
  },
  'ex-int-3-3-c': {
    id: 'ex-int-3-3-c', lessonId: 'int-3-3', type: 'multiple-choice',
    question: 'Der $x$-Schwerpunkt einer homogenen Fläche unter $f(x)$ auf $[a, b]$ ist gegeben durch:',
    options: [
      '$\\bar{x} = \\dfrac{1}{A} \\cdot \\int_{a}^{b} x \\cdot f(x)\\,dx$, wobei $A = \\int_{a}^{b} f(x)\\,dx$',
      '$\\bar{x} = \\int_{a}^{b} f(x)\\,dx$',
      '$\\bar{x} = \\dfrac{a + b}{2}$',
      '$\\bar{x} = f\\left(\\dfrac{a+b}{2}\\right)$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Schwerpunkt = gewichteter Mittelwert der $x$-Position.

**Rechnung:** Jeder schmale Streifen bei Position $x$ trägt eine "Masse" $f(x)\\,dx$ bei. Das statische Moment ist $M_{x} = \\int_{a}^{b} x \\cdot f(x)\\,dx$. Schwerpunkt: $\\bar{x} = M_{x}/A$.

**Probe:** Für ein Rechteck $f(x) = h$ auf $[a, b]$ ist $\\bar{x} = \\dfrac{h \\cdot (b^{2}-a^{2})/2}{h(b-a)} = \\dfrac{a+b}{2}$ — wie erwartet die Mitte. ✓

**Typischer Fehler:** Option C ($\\bar{x} = (a+b)/2$) stimmt nur für symmetrische/gleichmäßige Flächen.`,
    hints: [
      'Schwerpunkt = gewichteter Mittelwert der Position.',
      'Jeder Streifen bei $x$ hat die Fläche $f(x)\\,dx$ als Gewicht.',
      '$\\bar{x} = \\dfrac{\\text{Moment}}{\\text{Fläche}} = \\dfrac{\\int x \\cdot f(x)\\,dx}{\\int f(x)\\,dx}$.',
    ],
  },
  'ex-int-3-3-mastery': {
    id: 'ex-int-3-3-mastery', lessonId: 'int-3-3', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Eine Kraft $F(x) = 3x^{2}\\,\\mathrm{N}$ wirkt auf einen Körper von $x = 0$ bis $x = 2\\,\\mathrm{m}$. Berechne die verrichtete Arbeit $W$ in Joule.',
    correctValue: 8,
    tolerance: 0.01,
    unit: 'J',
    explanation: `**Ansatz:** Arbeit = Integral der Kraft über den Weg.

**Rechnung:**
- $W = \\int_{0}^{2} 3x^{2}\\,dx = [x^{3}]_{0}^{2} = 8 - 0 = 8\\,\\mathrm{J}$.

**Probe:** Einheitencheck — $[F] = \\mathrm{N}, [dx] = \\mathrm{m}, [W] = \\mathrm{N \\cdot m} = \\mathrm{J}$. ✓

**Typischer Fehler:** $3x^{2}$ direkt integrieren — das gibt $x^{3}$, nicht $x^{3}/3$ (Koeffizient $3$ multipliziert mit $1/3$ der Potenzregel = $1$).`,
    hints: [
      '$W = \\int_{0}^{2} 3x^{2}\\,dx$ — ortsabhängige Kraft integrieren.',
      '$\\int 3x^{2}\\,dx = x^{3}$ (der Faktor $3$ kürzt sich mit $1/3$).',
      'Grenzen einsetzen: $2^{3} - 0 = 8\\,\\mathrm{J}$.',
    ],
  },
}

const lessons_int_u3 = [
  {
    id: 'int-3-1', unitId: 'int-unit-3',
    title: 'Flächenberechnung',
    order: 1, estimatedMinutes: 18,
    learningGoals: ['Fläche unter einer Kurve berechnen', 'Fläche zwischen zwei Kurven berechnen'],
    prerequisites: [],
    nextLessonId: 'int-3-2',
    steps: [
      {
        id: 'int-3-1-s1', type: 'explanation-formal', title: 'Fläche zwischen Kurven',
        content: `**Fläche unter einer Kurve:**

Wenn $f(x) \\geq 0$ auf $[a,b]$, dann ist die Fläche zwischen $f$ und der $x$-Achse:
$$A = \\int_{a}^{b} f(x)\\,dx$$

**Achtung bei negativen Funktionswerten:**

Wenn $f(x) < 0$ in einem Teilintervall, liefert das Integral einen negativen Beitrag. Für die **Fläche** (immer positiv!) muss man:
1. Die Nullstellen finden (dort wechselt das Vorzeichen)
2. Auf jedem Teilintervall getrennt integrieren
3. Die Beträge addieren

$$A = \\left|\\int_{a}^{x_{0}} f(x)\\,dx\\right| + \\left|\\int_{x_{0}}^{b} f(x)\\,dx\\right|$$

**Fläche zwischen zwei Kurven:**

Wenn $f(x) \\geq g(x)$ auf $[a,b]$:
$$A = \\int_{a}^{b} \\bigl[f(x) - g(x)\\bigr]\\,dx$$

**Schritt für Schritt:**
1. Schnittpunkte finden: $f(x) = g(x)$ lösen $\\to$ das ergibt die Grenzen
2. Prüfen, welche Funktion oben liegt (Testwert einsetzen)
3. Integral von (oben $-$ unten) berechnen

**Beispiel:** Fläche zwischen $f(x) = x$ und $g(x) = x^{2}$ auf $[0, 1]$:
$$A = \\int_{0}^{1} (x - x^{2})\\,dx = \\left[\\frac{x^{2}}{2} - \\frac{x^{3}}{3}\\right]_{0}^{1} = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$`,
      },
      {
        id: 'int-3-1-s2', type: 'visualization', title: 'Fläche zwischen $f(x) = x$ und $g(x) = x^{2}$',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x, color: '#3b82f6', label: 'f(x) = x' },
            { fn: (x) => x * x, color: '#ef4444', label: 'g(x) = x²' },
          ],
          xRange: [-0.5, 1.5],
          yRange: [-0.5, 1.5],
          showGrid: true,
          shadedArea: { from: 0, to: 1, color: 'rgba(59, 130, 246, 0.2)' },
        },
      },
      { id: 'int-3-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-3-1-a' },
      { id: 'int-3-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-3-1-b' },
      { id: 'int-3-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-3-1-c' },
      { id: 'int-3-1-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-3-1-d' },
      { id: 'int-3-1-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-3-1-mastery' },
    ],
  },
  {
    id: 'int-3-2', unitId: 'int-unit-3',
    title: 'Rotationskörper',
    order: 2, estimatedMinutes: 16,
    learningGoals: ['Volumen von Rotationskörpern berechnen', 'Scheibenmethode anwenden'],
    prerequisites: [],
    nextLessonId: 'int-3-3',
    steps: [
      {
        id: 'int-3-2-s1', type: 'explanation-formal', title: 'Volumen durch Rotation',
        content: `**Rotationskörper** entstehen, wenn man eine Kurve $y = f(x)$ um die $x$-Achse dreht.

**Stell dir vor:** Du nimmst den Graphen von $f(x)$ und drehst ihn wie ein Töpfer auf der Scheibe um die $x$-Achse. Es entsteht ein dreidimensionaler Körper.

**Scheibenmethode (Disk Method):**

Bei der Stelle $x$ hat der Rotationskörper einen kreisförmigen Querschnitt mit:
- Radius $r = f(x)$
- Kreisfläche $A(x) = \\pi \\cdot [f(x)]^{2}$

Das Volumen ist die "Summe" aller infinitesimalen Scheiben:

$$V = \\pi \\int_{a}^{b} [f(x)]^{2}\\,dx$$

**Wichtige Spezialfälle:**

| Kurve | Rotationskörper | Volumen |
|-------|----------------|---------|
| $f(x) = R$ (Konstante) | Zylinder | $\\pi R^{2} \\cdot (b-a)$ |
| $f(x) = \\dfrac{R}{h}x$ (Gerade) | Kegel | $\\dfrac{1}{3}\\pi R^{2} h$ |
| $f(x) = \\sqrt{R^{2} - x^{2}}$ (Halbkreis) | Kugel | $\\dfrac{4}{3}\\pi R^{3}$ |

**Beispiel — Kegel:** $f(x) = x$ auf $[0, 3]$:
$$V = \\pi \\int_{0}^{3} x^{2}\\,dx = \\pi \\left[\\frac{x^{3}}{3}\\right]_{0}^{3} = \\pi \\cdot 9 = 9\\pi$$`,
      },
      { id: 'int-3-2-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-3-2-a' },
      { id: 'int-3-2-s3', type: 'exercise', title: 'Aufgabe 2 — Kegel', exerciseRef: 'ex-int-3-2-b' },
      { id: 'int-3-2-s4', type: 'exercise', title: 'Aufgabe 3 — Kugel', exerciseRef: 'ex-int-3-2-c' },
      { id: 'int-3-2-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-3-2-mastery' },
    ],
  },
  {
    id: 'int-3-3', unitId: 'int-unit-3',
    title: 'Technische Anwendungen',
    order: 3, estimatedMinutes: 16,
    learningGoals: ['Arbeit mit Integralen berechnen', 'Schwerpunkt einer Fläche bestimmen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'int-3-3-s1', type: 'explanation-formal', title: 'Arbeit und Schwerpunkt',
        content: `Im Maschinenbau werden Integrale ständig gebraucht. Hier sind die zwei wichtigsten Anwendungen:

**1. Arbeit bei ortsabhängiger Kraft:**

Wenn eine Kraft $F(x)$ vom Ort abhängt (nicht konstant ist):

$$W = \\int_{a}^{b} F(x)\\,dx$$

**Beispiel Feder (Hookesches Gesetz):** $F(x) = k \\cdot x$

$$W = \\int_{0}^{s} k \\cdot x\\,dx = \\frac{1}{2} k s^{2}$$

Das ist die bekannte Formel für die Federenergie!

**2. Schwerpunkt (Flächenschwerpunkt):**

Für eine homogene Fläche unter $f(x) \\geq 0$ auf $[a, b]$:

$$\\bar{x} = \\frac{1}{A} \\int_{a}^{b} x \\cdot f(x)\\,dx$$

$$\\bar{y} = \\frac{1}{2A} \\int_{a}^{b} [f(x)]^{2}\\,dx$$

wobei $A = \\int_{a}^{b} f(x)\\,dx$ die Gesamtfläche ist.

**Anschaulich:** Der Schwerpunkt ist der Punkt, an dem man die Fläche auf einer Nadelspitze ausbalancieren könnte. Der $\\bar{x}$-Wert ist der "gewichtete Mittelwert" der $x$-Positionen.

**Beispiel:** Dreieck unter $f(x) = x$ auf $[0, 2]$:
- $A = \\int_{0}^{2} x\\,dx = 2$
- $\\bar{x} = \\dfrac{1}{2}\\int_{0}^{2} x \\cdot x\\,dx = \\dfrac{1}{2}\\int_{0}^{2} x^{2}\\,dx = \\dfrac{1}{2} \\cdot \\dfrac{8}{3} = \\dfrac{4}{3}$`,
      },
      { id: 'int-3-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-3-3-a' },
      { id: 'int-3-3-s3', type: 'exercise', title: 'Aufgabe 2 — Feder', exerciseRef: 'ex-int-3-3-b' },
      { id: 'int-3-3-s4', type: 'exercise', title: 'Aufgabe 3 — Schwerpunkt', exerciseRef: 'ex-int-3-3-c' },
      { id: 'int-3-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-3-3-mastery' },
    ],
  },
]

export const int_unit3 = {
  id: 'int-unit-3',
  title: 'Anwendungen',
  order: 3,
  description: 'Flächenberechnung, Rotationskörper und technische Anwendungen (Arbeit, Schwerpunkt)',
  lessons: lessons_int_u3,
  exercises: exercises_int_u3,
}
