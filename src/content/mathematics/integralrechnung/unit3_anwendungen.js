// ── Integralrechnung Unit 3: Anwendungen ──────────────────────────────────────

export const exercises_int_u3 = {
  // ── Lesson 1: Flächenberechnung ───────────────────────────────────────────
  'ex-int-3-1-a': {
    id: 'ex-int-3-1-a', lessonId: 'int-3-1', type: 'multiple-choice',
    question: 'Wie berechnet man die Fläche zwischen f(x) und g(x) auf [a, b], wenn f(x) ≥ g(x)?',
    options: [
      '∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx',
      '∫ₐᵇ [f(x) − g(x)] dx',
      '∫ₐᵇ f(x) · g(x) dx',
      '∫ₐᵇ |f(x)| dx − ∫ₐᵇ |g(x)| dx',
    ],
    correctIndex: 1,
    explanation: 'Die Fläche zwischen zwei Kurven ist ∫ₐᵇ [f(x) − g(x)] dx, wobei f(x) ≥ g(x) im Intervall gelten muss. Man integriert die Differenz der oberen minus der unteren Funktion. Geometrisch: Die Fläche unter f minus die Fläche unter g ergibt die Fläche dazwischen.',
    hints: ['Obere Funktion minus untere Funktion.'],
  },
  'ex-int-3-1-b': {
    id: 'ex-int-3-1-b', lessonId: 'int-3-1', type: 'number-input',
    question: 'Berechne die Fläche zwischen f(x) = x² und der x-Achse (g(x) = 0) auf dem Intervall [0, 3].',
    correctValue: 9,
    tolerance: 0.01,
    unit: '',
    explanation: 'A = ∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9. Da x² ≥ 0 auf [0,3], ist das Integral direkt die Fläche.',
    hints: ['∫x² dx = x³/3.', 'Grenzen einsetzen: 3³/3 − 0³/3 = 9.'],
  },
  'ex-int-3-1-c': {
    id: 'ex-int-3-1-c', lessonId: 'int-3-1', type: 'number-input',
    question: 'Berechne die Fläche zwischen f(x) = x und g(x) = x² auf [0, 1].',
    correctValue: 0.17,
    tolerance: 0.02,
    unit: '',
    explanation: 'Auf [0,1] gilt x ≥ x² (prüfe z.B. bei x = 0,5: 0,5 > 0,25). A = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = (1/2 − 1/3) − 0 = 3/6 − 2/6 = 1/6 ≈ 0,167.',
    hints: ['Welche Funktion ist auf [0,1] oben?', 'A = ∫₀¹ (x − x²) dx. Integriere gliedweise.'],
  },
  'ex-int-3-1-d': {
    id: 'ex-int-3-1-d', lessonId: 'int-3-1', type: 'multiple-choice',
    question: 'Die Fläche A, die von f(x) = sin(x) und der x-Achse auf [0, 2π] eingeschlossen wird, ist:',
    options: [
      '0',
      '2',
      '4',
      'π',
    ],
    correctIndex: 2,
    explanation: '∫₀²π sin(x) dx = 0, weil positive und negative Fläche sich aufheben! Aber die FLÄCHE (Betrag) ist: ∫₀π sin(x) dx + |∫π²π sin(x) dx| = 2 + 2 = 4. Achtung: Fläche ≠ Integral, wenn die Funktion das Vorzeichen wechselt!',
    hints: ['sin(x) ist auf [0,π] positiv und auf [π,2π] negativ.', 'Für die Fläche muss man die Abschnitte getrennt berechnen und Beträge nehmen.'],
  },
  'ex-int-3-1-mastery': {
    id: 'ex-int-3-1-mastery', lessonId: 'int-3-1', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne die Fläche, die von f(x) = 4 − x² und der x-Achse eingeschlossen wird. (Tipp: Nullstellen bei x = ±2)',
    correctValue: 10.67,
    tolerance: 0.02,
    unit: '',
    explanation: 'Nullstellen: 4 − x² = 0 → x = ±2. Auf [−2, 2] gilt f(x) ≥ 0. A = ∫₋₂² (4 − x²) dx = [4x − x³/3]₋₂² = (8 − 8/3) − (−8 + 8/3) = (16/3) − (−16/3) = 32/3 ≈ 10,67.',
    hints: ['Finde die Nullstellen: 4 − x² = 0.', 'Nutze die Symmetrie: A = 2 · ∫₀² (4 − x²) dx.'],
  },

  // ── Lesson 2: Rotationskörper ─────────────────────────────────────────────
  'ex-int-3-2-a': {
    id: 'ex-int-3-2-a', lessonId: 'int-3-2', type: 'multiple-choice',
    question: 'Wie berechnet man das Volumen eines Rotationskörpers bei Drehung um die x-Achse?',
    options: [
      'V = ∫ₐᵇ f(x) dx',
      'V = π · ∫ₐᵇ [f(x)]² dx',
      'V = 2π · ∫ₐᵇ f(x) dx',
      'V = π · ∫ₐᵇ f(x) dx',
    ],
    correctIndex: 1,
    explanation: 'Bei Rotation um die x-Achse ergibt jeder Querschnitt eine Kreisscheibe mit Radius f(x) und Fläche π·[f(x)]². Das Volumen ist die Summe aller Scheiben: V = π · ∫ₐᵇ [f(x)]² dx. Dies nennt man die Scheibenmethode (Disk Method).',
    hints: ['Denke an Kreisscheiben mit Radius r = f(x).', 'Kreisfläche = π·r².'],
  },
  'ex-int-3-2-b': {
    id: 'ex-int-3-2-b', lessonId: 'int-3-2', type: 'number-input',
    question: 'Berechne das Volumen des Kegels, der entsteht, wenn f(x) = x auf [0, 3] um die x-Achse rotiert. Ergebnis als Vielfaches von π angeben (also V/(π) berechnen).',
    correctValue: 9,
    tolerance: 0.01,
    unit: '',
    explanation: 'V = π · ∫₀³ x² dx = π · [x³/3]₀³ = π · (27/3) = 9π. Also V/π = 9. Das ist tatsächlich ein Kegel mit Radius 3 und Höhe 3. Probe mit Kegelformel: V = (1/3)·π·r²·h = (1/3)·π·9·3 = 9π ✓',
    hints: ['V = π · ∫₀³ x² dx.', '∫₀³ x² dx = [x³/3]₀³ = 9.'],
  },
  'ex-int-3-2-c': {
    id: 'ex-int-3-2-c', lessonId: 'int-3-2', type: 'number-input',
    question: 'Berechne das Volumen der Kugel mit Radius R = 2 (Halbkreis f(x) = √(4 − x²) um x-Achse rotiert). Ergebnis auf 2 Nachkommastellen.',
    correctValue: 33.51,
    tolerance: 0.1,
    unit: '',
    explanation: 'V = π · ∫₋₂² (4 − x²) dx = π · [4x − x³/3]₋₂² = π · [(8 − 8/3) − (−8 + 8/3)] = π · 32/3 ≈ 33,51. Probe mit Kugelformel: V = (4/3)·π·r³ = (4/3)·π·8 = 32π/3 ≈ 33,51 ✓',
    hints: ['f(x)² = 4 − x² (kein Wurzelziehen nötig!).', 'V = π · ∫₋₂² (4 − x²) dx.'],
  },
  'ex-int-3-2-mastery': {
    id: 'ex-int-3-2-mastery', lessonId: 'int-3-2', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] f(x) = √x wird auf [0, 4] um die x-Achse rotiert. Berechne V/π.',
    correctValue: 8,
    tolerance: 0.01,
    unit: '',
    explanation: 'V = π · ∫₀⁴ (√x)² dx = π · ∫₀⁴ x dx = π · [x²/2]₀⁴ = π · (16/2) = 8π. Also V/π = 8.',
    hints: ['(√x)² = x — das vereinfacht sich!', 'V/π = ∫₀⁴ x dx.'],
  },

  // ── Lesson 3: Technische Anwendungen ──────────────────────────────────────
  'ex-int-3-3-a': {
    id: 'ex-int-3-3-a', lessonId: 'int-3-3', type: 'multiple-choice',
    question: 'Wie berechnet man die Arbeit W, wenn eine ortsabhängige Kraft F(x) längs des Weges von a bis b wirkt?',
    options: [
      'W = F · s (Kraft mal Weg)',
      'W = ∫ₐᵇ F(x) dx',
      'W = F(b) − F(a)',
      'W = d/dx F(x)',
    ],
    correctIndex: 1,
    explanation: 'Wenn die Kraft vom Ort abhängt (nicht konstant ist), gilt W = ∫ₐᵇ F(x) dx. Die einfache Formel W = F·s gilt nur für konstante Kräfte. Das Integral "summiert" die Arbeitsbeiträge F(x)·dx über den gesamten Weg.',
    hints: ['W = F·s gilt nur für konstante Kraft.', 'Bei veränderlicher Kraft muss man "aufaddieren" → Integral.'],
  },
  'ex-int-3-3-b': {
    id: 'ex-int-3-3-b', lessonId: 'int-3-3', type: 'number-input',
    question: 'Eine Feder hat die Federkraft F(x) = 200·x [N] (Hookesches Gesetz mit k = 200 N/m). Berechne die Arbeit (in Joule), um die Feder von x = 0 auf x = 0,1 m zu dehnen.',
    correctValue: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'W = ∫₀^0,1 200x dx = 200 · [x²/2]₀^0,1 = 200 · (0,01/2) = 200 · 0,005 = 1 J. Alternativ: W = (1/2)·k·x² = (1/2)·200·0,01 = 1 J.',
    hints: ['W = ∫₀^0,1 200x dx.', '∫200x dx = 100x².'],
  },
  'ex-int-3-3-c': {
    id: 'ex-int-3-3-c', lessonId: 'int-3-3', type: 'multiple-choice',
    question: 'Der x-Schwerpunkt einer homogenen Fläche unter f(x) auf [a,b] ist gegeben durch:',
    options: [
      'x̄ = (1/A) · ∫ₐᵇ x · f(x) dx, wobei A = ∫ₐᵇ f(x) dx',
      'x̄ = ∫ₐᵇ f(x) dx',
      'x̄ = (a + b) / 2',
      'x̄ = f((a+b)/2)',
    ],
    correctIndex: 0,
    explanation: 'Der Schwerpunkt wird berechnet durch x̄ = (1/A) · ∫ₐᵇ x · f(x) dx. Dabei ist A = ∫ₐᵇ f(x) dx die Gesamtfläche. Anschaulich: Jeder schmale Streifen bei x hat die "Masse" f(x)·dx. Der Schwerpunkt ist der gewichtete Mittelwert aller x-Positionen.',
    hints: ['Schwerpunkt = gewichteter Mittelwert der Position.', 'Jeder Streifen bei x hat die Fläche f(x)·dx.'],
  },
  'ex-int-3-3-mastery': {
    id: 'ex-int-3-3-mastery', lessonId: 'int-3-3', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Eine Kraft F(x) = 3x² [N] wirkt auf einen Körper von x = 0 bis x = 2 m. Berechne die verrichtete Arbeit W in Joule.',
    correctValue: 8,
    tolerance: 0.01,
    unit: '',
    explanation: 'W = ∫₀² 3x² dx = [x³]₀² = 8 − 0 = 8 J.',
    hints: ['W = ∫₀² 3x² dx.', '∫3x² dx = x³.'],
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

Wenn $f(x) \\geq 0$ auf $[a,b]$, dann ist die Fläche zwischen $f$ und der x-Achse:
$$A = \\int_a^b f(x)\\,dx$$

**Achtung bei negativen Funktionswerten:**

Wenn $f(x) < 0$ in einem Teilintervall, liefert das Integral einen negativen Beitrag. Für die **Fläche** (immer positiv!) muss man:
1. Die Nullstellen finden (dort wechselt das Vorzeichen)
2. Auf jedem Teilintervall getrennt integrieren
3. Die Beträge addieren

$$A = \\left|\\int_a^{x_0} f(x)\\,dx\\right| + \\left|\\int_{x_0}^b f(x)\\,dx\\right|$$

**Fläche zwischen zwei Kurven:**

Wenn $f(x) \\geq g(x)$ auf $[a,b]$:
$$A = \\int_a^b \\bigl[f(x) - g(x)\\bigr]\\,dx$$

**Schritt für Schritt:**
1. Schnittpunkte finden: $f(x) = g(x)$ lösen → das ergibt die Grenzen
2. Prüfen, welche Funktion oben liegt
3. Integral von (oben − unten) berechnen

**Beispiel:** Fläche zwischen $f(x) = x$ und $g(x) = x^2$ auf $[0, 1]$:
$$A = \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$`,
      },
      {
        id: 'int-3-1-s2', type: 'visualization', title: 'Fläche zwischen f(x) = x und g(x) = x²',
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
        content: `**Rotationskörper** entstehen, wenn man eine Kurve $y = f(x)$ um die x-Achse dreht.

**Stell dir vor:** Du nimmst den Graphen von $f(x)$ und drehst ihn wie ein Töpfer auf der Scheibe um die x-Achse. Es entsteht ein dreidimensionaler Körper.

**Scheibenmethode (Disk Method):**

Bei der Stelle $x$ hat der Rotationskörper einen kreisförmigen Querschnitt mit:
- Radius $r = f(x)$
- Kreisfläche $A(x) = \\pi \\cdot [f(x)]^2$

Das Volumen ist die "Summe" aller infinitesimalen Scheiben:

$$V = \\pi \\int_a^b [f(x)]^2\\,dx$$

**Wichtige Spezialfälle:**

| Kurve | Rotationskörper | Volumen |
|-------|----------------|---------|
| $f(x) = R$ (Konstante) | Zylinder | $\\pi R^2 \\cdot (b-a)$ |
| $f(x) = \\frac{R}{h}x$ (Gerade) | Kegel | $\\frac{1}{3}\\pi R^2 h$ |
| $f(x) = \\sqrt{R^2 - x^2}$ (Halbkreis) | Kugel | $\\frac{4}{3}\\pi R^3$ |

**Beispiel — Kegel:** $f(x) = x$ auf $[0, 3]$:
$$V = \\pi \\int_0^3 x^2\\,dx = \\pi \\left[\\frac{x^3}{3}\\right]_0^3 = \\pi \\cdot 9 = 9\\pi$$`,
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

$$W = \\int_a^b F(x)\\,dx$$

**Beispiel Feder (Hookesches Gesetz):** $F(x) = k \\cdot x$

$$W = \\int_0^s k \\cdot x\\,dx = \\frac{1}{2} k s^2$$

Das ist die bekannte Formel für die Federenergie!

**2. Schwerpunkt (Flächenschwerpunkt):**

Für eine homogene Fläche unter $f(x) \\geq 0$ auf $[a, b]$:

$$\\bar{x} = \\frac{1}{A} \\int_a^b x \\cdot f(x)\\,dx$$

$$\\bar{y} = \\frac{1}{2A} \\int_a^b [f(x)]^2\\,dx$$

wobei $A = \\int_a^b f(x)\\,dx$ die Gesamtfläche ist.

**Anschaulich:** Der Schwerpunkt ist der Punkt, an dem man die Fläche auf einer Nadelspitze ausbalancieren könnte. Der $\\bar{x}$-Wert ist der "gewichtete Mittelwert" der x-Positionen.

**Beispiel:** Dreieck unter $f(x) = x$ auf $[0, 2]$:
- $A = \\int_0^2 x\\,dx = 2$
- $\\bar{x} = \\frac{1}{2}\\int_0^2 x \\cdot x\\,dx = \\frac{1}{2}\\int_0^2 x^2\\,dx = \\frac{1}{2} \\cdot \\frac{8}{3} = \\frac{4}{3}$`,
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
