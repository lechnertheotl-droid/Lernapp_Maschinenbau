// ── Ableitung Unit 3: Kurvendiskussion ───────────────────────────────────────

export const exercises_abl_u3 = {
  'ex-abl-3-1-a': {
    id: 'ex-abl-3-1-a', lessonId: 'abl-3-1', type: 'multiple-choice',
    question: '$f\'(x) > 0$ auf einem Intervall bedeutet:',
    options: [
      '$f$ ist dort negativ',
      '$f$ ist dort streng monoton steigend',
      '$f$ hat dort ein Maximum',
      '$f$ ist dort konkav',
    ],
    correctIndex: 1,
    explanation: 'Positive Ableitung = positive Steigung = Funktion steigt. $f\'(x) > 0 \\Rightarrow f$ ist streng monoton steigend.',
    hints: ['$f\'(x)$ = Steigung der Tangente. Positiv = bergauf.'],
  },
  'ex-abl-3-1-b': {
    id: 'ex-abl-3-1-b', lessonId: 'abl-3-1', type: 'multiple-choice',
    question: 'Notwendige Bedingung für ein lokales Extremum bei $x_0$:',
    options: [
      '$f(x_0) = 0$',
      '$f\'(x_0) = 0$',
      '$f\'\'(x_0) = 0$',
      '$f\'(x_0) > 0$',
    ],
    correctIndex: 1,
    explanation: 'An einem Extremum ist die Tangente waagerecht, also $f\'(x_0) = 0$. Das ist notwendig, aber nicht hinreichend (Sattelpunkt möglich!).',
    hints: ['Extremum → Tangente horizontal → Steigung = 0.'],
  },
  'ex-abl-3-1-c': {
    id: 'ex-abl-3-1-c', lessonId: 'abl-3-1', type: 'multiple-choice',
    question: '$f\'(x_0) = 0$ und $f\'\'(x_0) > 0$. Was liegt bei $x_0$ vor?',
    options: [
      'Lokales Maximum',
      'Lokales Minimum',
      'Wendepunkt',
      'Sattelpunkt',
    ],
    correctIndex: 1,
    explanation: '$f\'(x_0) = 0$ (waagerechte Tangente) und $f\'\'(x_0) > 0$ (linksgekrümmt, nach oben geöffnet) → lokales **Minimum**. Merke: "Smiley-Kurve" $\\cup$ = Minimum.',
    hints: ['$f\'\' > 0$ → linksgekrümmt (wie ein Tal/Schüssel) → Minimum.'],
  },
  'ex-abl-3-1-d': {
    id: 'ex-abl-3-1-d', lessonId: 'abl-3-1', type: 'number-input',
    question: '$f(x) = x^3 - 6x^2 + 9x + 1$. An welcher Stelle $x$ liegt das lokale Maximum?',
    correctAnswer: 1,
    tolerance: 0.01,
    unit: '',
    explanation: "$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3) = 0 \\Rightarrow x = 1$ oder $x = 3$. $f''(x) = 6x - 12$. $f''(1) = -6 < 0$ → Maximum bei $x = 1$. $f''(3) = 6 > 0$ → Minimum bei $x = 3$.",
    hints: ["$f'(x) = 0$ lösen, dann $f''$ prüfen. $f'' < 0$ → Maximum."],
  },
  'ex-abl-3-1-mastery': {
    id: 'ex-abl-3-1-mastery', lessonId: 'abl-3-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = x^4 - 8x^2$. Welche Extrema hat $f$?',
    options: [
      'Maximum bei $x = 0$, Minima bei $x = \\pm 2$',
      'Minimum bei $x = 0$, Maxima bei $x = \\pm 2$',
      'Nur ein Minimum bei $x = 0$',
      'Maximum bei $x = 0$, Minimum bei $x = 2$',
    ],
    correctIndex: 0,
    explanation: "$f'(x) = 4x^3 - 16x = 4x(x^2-4) = 4x(x-2)(x+2) = 0 \\Rightarrow x \\in \\{-2, 0, 2\\}$. $f''(x) = 12x^2 - 16$. $f''(0) = -16 < 0$ → Maximum. $f''(\\pm 2) = 32 > 0$ → Minima.",
    hints: ["$f'(x) = 4x^3 - 16x = 0$. Ausklammern: $4x(x^2-4) = 0$."],
  },

  'ex-abl-3-2-a': {
    id: 'ex-abl-3-2-a', lessonId: 'abl-3-2', type: 'multiple-choice',
    question: '$f\'\'(x) > 0$ bedeutet die Kurve ist:',
    options: [
      'Rechtsgekrümmt (konvex)',
      'Linksgekrümmt (konkav nach oben)',
      'Fallend',
      'An einem Wendepunkt',
    ],
    correctIndex: 1,
    explanation: '$f\'\'(x) > 0$ → linksgekrümmt (konkav nach oben, wie eine Schüssel $\\cup$). Die Steigung nimmt zu. $f\'\'(x) < 0$ → rechtsgekrümmt (konvex, wie ein Hügel $\\cap$).',
    hints: ['$f\'\' > 0$ → "Schüsselform" $\\cup$, $f\'\' < 0$ → "Hügelform" $\\cap$.'],
  },
  'ex-abl-3-2-b': {
    id: 'ex-abl-3-2-b', lessonId: 'abl-3-2', type: 'multiple-choice',
    question: 'Wendepunkt bei $x_0$: Welche Bedingung ist notwendig UND hinreichend?',
    options: [
      '$f\'\'(x_0) = 0$',
      '$f\'(x_0) = 0$',
      '$f\'\'(x_0) = 0$ und $f\'\'\'(x_0) \\neq 0$',
      '$f\'\'\'(x_0) = 0$',
    ],
    correctIndex: 2,
    explanation: 'Notwendig: $f\'\'(x_0) = 0$. Hinreichend: $f\'\'\'(x_0) \\neq 0$ (dann wechselt $f\'\'$ tatsächlich das Vorzeichen). Alternativ: Vorzeichenwechsel von $f\'\'$ bei $x_0$ direkt prüfen.',
    hints: ['Wendepunkt = Wechsel der Krümmung. $f\'\'(x_0) = 0$ allein reicht nicht!'],
  },
  'ex-abl-3-2-c': {
    id: 'ex-abl-3-2-c', lessonId: 'abl-3-2', type: 'number-input',
    question: '$f(x) = x^3 - 3x$. An welcher Stelle $x$ liegt der Wendepunkt?',
    correctAnswer: 0,
    tolerance: 0.01,
    unit: '',
    explanation: "$f'(x) = 3x^2 - 3$. $f''(x) = 6x = 0 \\Rightarrow x = 0$. $f'''(x) = 6 \\neq 0$ → Wendepunkt bei $x = 0$. $f(0) = 0$, also Wendepunkt $(0, 0)$.",
    hints: ["$f''(x) = 0$ lösen. Dann $f'''$ prüfen."],
  },
  'ex-abl-3-2-mastery': {
    id: 'ex-abl-3-2-mastery', lessonId: 'abl-3-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = x^4 - 6x^2 + 1$. Wie viele Wendepunkte hat $f$?',
    options: ['0', '1', '2', '3'],
    correctIndex: 2,
    explanation: "$f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 0 \\Rightarrow x = \\pm 1$. $f'''(x) = 24x$. $f'''(1) = 24 \\neq 0$, $f'''(-1) = -24 \\neq 0$. Also **2 Wendepunkte** bei $x = 1$ und $x = -1$.",
    hints: ["$f''(x) = 0$ lösen. Für jeden Kandidaten $f'''$ prüfen."],
  },

  'ex-abl-3-3-a': {
    id: 'ex-abl-3-3-a', lessonId: 'abl-3-3', type: 'sorting',
    question: 'Bringe die Schritte der vollständigen Kurvendiskussion in die richtige Reihenfolge:',
    items: [
      'Ableitungen berechnen',
      'Extrema bestimmen (f\' = 0)',
      'Definitionsbereich bestimmen',
      'Wendepunkte bestimmen (f\'\' = 0)',
      'Nullstellen berechnen (f = 0)',
      'Verhalten für x → ±∞',
      'Graph skizzieren',
      'Symmetrie prüfen',
    ],
    correctOrder: [2, 7, 4, 0, 1, 3, 5, 6],
    explanation: 'Reihenfolge: 1. Definitionsbereich → 2. Symmetrie → 3. Nullstellen → 4. Ableitungen → 5. Extrema → 6. Wendepunkte → 7. Verhalten x→±∞ → 8. Skizze.',
    hints: ['Beginne immer mit dem Definitionsbereich. Ableiten kommt vor Extrema und Wendepunkten.'],
  },
  'ex-abl-3-3-b': {
    id: 'ex-abl-3-3-b', lessonId: 'abl-3-3', type: 'multiple-choice',
    question: '$f(x) = x^3 - 3x + 2$. Welche Symmetrie hat $f$?',
    options: [
      'Achsensymmetrie (gerade Funktion)',
      'Punktsymmetrie zum Ursprung (ungerade Funktion)',
      'Keine Symmetrie',
      'Punktsymmetrie zu einem anderen Punkt',
    ],
    correctIndex: 2,
    explanation: '$f(-x) = -x^3 + 3x + 2$. Das ist weder $f(x)$ noch $-f(x)$. Also hat $f$ keine Symmetrie bezüglich des Ursprungs oder der y-Achse.',
    hints: ['Teste: $f(-x) = f(x)$ (achsensymmetrisch) oder $f(-x) = -f(x)$ (punktsymmetrisch)?'],
  },
  'ex-abl-3-3-c': {
    id: 'ex-abl-3-3-c', lessonId: 'abl-3-3', type: 'multiple-choice',
    question: 'Für $f(x) = 2x^3 - 6x + 1$: Wie verhält sich $f$ für $x \\to +\\infty$?',
    options: [
      '$f(x) \\to +\\infty$',
      '$f(x) \\to -\\infty$',
      '$f(x) \\to 0$',
      '$f(x) \\to 1$',
    ],
    correctIndex: 0,
    explanation: 'Für $x \\to +\\infty$ dominiert der Term höchster Potenz: $2x^3 \\to +\\infty$. Vorzeichenregel: positiver Koeffizient × ungerade Potenz → $+\\infty$ für $x \\to +\\infty$.',
    hints: ['Der Term mit der höchsten Potenz bestimmt das Verhalten für $x \\to \\pm\\infty$.'],
  },
  'ex-abl-3-3-d': {
    id: 'ex-abl-3-3-d', lessonId: 'abl-3-3', type: 'number-input',
    question: '$f(x) = x^3 - 3x + 2$. Berechne den y-Wert des lokalen Maximums.',
    correctAnswer: 4,
    tolerance: 0.01,
    unit: '',
    explanation: "$f'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $f''(x) = 6x$. $f''(-1) = -6 < 0$ → Maximum bei $x = -1$. $f(-1) = -1 + 3 + 2 = 4$.",
    hints: ["Finde die Extremstellen mit $f'(x) = 0$, bestimme mit $f''$ welche das Maximum ist, setze ein."],
  },
  'ex-abl-3-3-mastery': {
    id: 'ex-abl-3-3-mastery', lessonId: 'abl-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = -x^3 + 3x^2 - 4$. Welche Aussagen sind korrekt? (i) Lokales Min bei $x=0$, (ii) Lokales Max bei $x=2$, (iii) Wendepunkt bei $x=1$.',
    options: [
      'Nur (i) und (ii)',
      'Nur (ii) und (iii)',
      'Alle drei: (i), (ii) und (iii)',
      'Nur (iii)',
    ],
    correctIndex: 2,
    explanation: "$f' = -3x^2 + 6x = -3x(x-2) = 0 \\Rightarrow x = 0, 2$. $f'' = -6x + 6$. $f''(0) = 6 > 0$ → Min. $f''(2) = -6 < 0$ → Max. $f'' = 0 \\Rightarrow x = 1$. $f''' = -6 \\neq 0$ → WP. Alle drei stimmen!",
    hints: ["$f'(x) = 0$ lösen, $f''$ auswerten, Wendepunkt über $f'' = 0$ und $f''' \\neq 0$ prüfen."],
  },

  'ex-abl-3-4-a': {
    id: 'ex-abl-3-4-a', lessonId: 'abl-3-4', type: 'multiple-choice',
    question: '$f(x) = x^4 - 4x^3$. Bestimme alle lokalen Extrema.',
    options: [
      'Minimum bei $x = 3$, kein Maximum',
      'Maximum bei $x = 0$, Minimum bei $x = 3$',
      'Minimum bei $x = 3$, Sattelpunkt bei $x = 0$',
      'Nur ein Wendepunkt bei $x = 0$',
    ],
    correctIndex: 2,
    explanation: "$f' = 4x^3 - 12x^2 = 4x^2(x-3) = 0 \\Rightarrow x = 0$ (doppelt) oder $x = 3$. $f''(x) = 12x^2 - 24x$. $f''(0) = 0$ (kein Extremum, Sattelpunkt). $f''(3) = 36 > 0$ → Minimum.",
    hints: ["$f' = 4x^2(x-3)$. Bei $x = 0$ ist $f'' = 0$, prüfe Vorzeichenwechsel von $f'$."],
  },
  'ex-abl-3-4-b': {
    id: 'ex-abl-3-4-b', lessonId: 'abl-3-4', type: 'number-input',
    question: '$f(x) = e^{-x^2}$. An welcher positiven Stelle $x > 0$ liegt der Wendepunkt? (Auf 2 Dezimalstellen.)',
    correctAnswer: 0.71,
    tolerance: 0.02,
    unit: '',
    explanation: "$f'(x) = -2xe^{-x^2}$. $f''(x) = (-2 + 4x^2)e^{-x^2} = 0 \\Rightarrow 4x^2 - 2 = 0 \\Rightarrow x^2 = 1/2 \\Rightarrow x = \\pm 1/\\sqrt{2} \\approx \\pm 0.71$.",
    hints: ['$f\'\' = 0$ lösen. $e^{-x^2} > 0$ immer, also muss der Klammerausdruck Null werden.'],
  },
  'ex-abl-3-4-c': {
    id: 'ex-abl-3-4-c', lessonId: 'abl-3-4', type: 'multiple-choice',
    question: '$f(x) = \\frac{x^2}{x^2 + 1}$. Welche Aussage stimmt?',
    options: [
      '$f$ hat ein Maximum bei $x = 0$',
      '$f$ hat ein Minimum bei $x = 0$ und $\\lim_{x \\to \\pm\\infty} f(x) = 1$',
      '$f$ hat keine Extrema',
      '$f$ hat ein Maximum bei $x = 1$',
    ],
    correctIndex: 1,
    explanation: "$f'(x) = \\frac{2x(x^2+1) - x^2 \\cdot 2x}{(x^2+1)^2} = \\frac{2x}{(x^2+1)^2} = 0 \\Rightarrow x = 0$. $f(0) = 0$ (Minimum). Für $x \\to \\pm\\infty$: $f(x) \\to \\frac{x^2}{x^2} = 1$ (horizontale Asymptote).",
    hints: ['Quotientenregel anwenden. Grenzwert: Zähler und Nenner durch $x^2$ teilen.'],
  },
  'ex-abl-3-4-d': {
    id: 'ex-abl-3-4-d', lessonId: 'abl-3-4', type: 'matching',
    question: 'Ordne die Funktionseigenschaften den richtigen Bedingungen zu:',
    pairs: [
      { left: 'Nullstelle', right: '$f(x_0) = 0$' },
      { left: 'Extremstelle (notwendig)', right: '$f\'(x_0) = 0$' },
      { left: 'Wendestelle (notwendig)', right: '$f\'\'(x_0) = 0$' },
      { left: 'Streng monoton steigend', right: '$f\'(x) > 0$' },
    ],
    explanation: 'Nullstelle: $f = 0$. Extremum (notwendig): $f\' = 0$. Wendepunkt (notwendig): $f\'\' = 0$. Monoton steigend: $f\' > 0$ im ganzen Intervall.',
    hints: ['Jede Eigenschaft hat ihre eigene "Ableitung-Stufe": $f$, $f\'$, $f\'\'$.'],
  },
  'ex-abl-3-4-e': {
    id: 'ex-abl-3-4-e', lessonId: 'abl-3-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Vollständige Kurvendiskussion: $f(x) = x^3 - 12x$. Welche Aussage ist FALSCH?',
    options: [
      '$f$ hat ein lokales Maximum bei $x = -2$ mit $f(-2) = 16$',
      '$f$ hat ein lokales Minimum bei $x = 2$ mit $f(2) = -16$',
      'Der Wendepunkt liegt bei $(0, 0)$',
      '$f$ ist achsensymmetrisch zur y-Achse',
    ],
    correctIndex: 3,
    explanation: "$f(-x) = -x^3 + 12x = -(x^3 - 12x) = -f(x)$ → $f$ ist **punktsymmetrisch** zum Ursprung (ungerade), nicht achsensymmetrisch. Die anderen Aussagen stimmen: $f' = 3x^2 - 12 = 0 \\Rightarrow x = \\pm 2$.",
    hints: ['Ungerade Potenz (x^3) deutet auf Punktsymmetrie, nicht Achsensymmetrie.'],
  },
  'ex-abl-3-4-mastery': {
    id: 'ex-abl-3-4-mastery', lessonId: 'abl-3-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = xe^{-x}$ für $x \\geq 0$. Wo liegt das globale Maximum?',
    options: [
      '$x = 0$',
      '$x = 1$',
      '$x = e$',
      '$x = 2$',
    ],
    correctIndex: 1,
    explanation: "$f'(x) = e^{-x} - xe^{-x} = (1-x)e^{-x} = 0 \\Rightarrow x = 1$. $f''(x) = (-2+x)e^{-x}$, $f''(1) = -e^{-1} < 0$ → Maximum. $f(1) = e^{-1} \\approx 0.368$. Für $x \\to \\infty$: $f \\to 0$. Also globales Maximum bei $x = 1$.",
    hints: ['Produktregel: $(xe^{-x})\' = e^{-x} + x \\cdot (-e^{-x}) = (1-x)e^{-x}$.'],
  },
}

const lessons_abl_u3 = [
  {
    id: 'abl-3-1', unitId: 'abl-unit-3',
    title: 'Monotonie und Extremwerte',
    order: 1, estimatedMinutes: 18,
    learningGoals: ['Monotonie mit f\' bestimmen', 'Lokale Extrema mit f\' und f\'\' bestimmen'],
    prerequisites: [],
    nextLessonId: 'abl-3-2',
    steps: [
      {
        id: 'abl-3-1-s1', type: 'explanation-intuitive', title: 'Steigung verrät alles!',
        content: `Die Ableitung $f'(x)$ ist wie ein **Kompass** für den Verlauf der Funktion:

- $f'(x) > 0$ → Funktion **steigt** (bergauf) 📈
- $f'(x) < 0$ → Funktion **fällt** (bergab) 📉
- $f'(x) = 0$ → Funktion hat eine **waagerechte Tangente** (möglicher Hochpunkt, Tiefpunkt oder Sattelpunkt)

**Analogie:** Stell dir eine Achterbahn vor. An den höchsten und tiefsten Punkten ist die Bahn kurz "flach" — das sind die Extrema, wo $f'(x) = 0$.

Aber **Achtung:** $f'(x_0) = 0$ allein reicht nicht! Du musst prüfen, ob es sich wirklich um ein Maximum, Minimum oder nur einen Sattelpunkt handelt.

**Hinreichende Bedingung (2. Ableitung):**
- $f'(x_0) = 0$ und $f''(x_0) > 0$ → lokales **Minimum** (Tal, Schüsselform $\\cup$)
- $f'(x_0) = 0$ und $f''(x_0) < 0$ → lokales **Maximum** (Berg, Hügelform $\\cap$)
- $f'(x_0) = 0$ und $f''(x_0) = 0$ → weitere Untersuchung nötig!`,
      },
      {
        id: 'abl-3-1-s2', type: 'visualization', title: 'Funktion und ihre Ableitung',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x * x - 3 * x, color: '#3b82f6', label: 'f(x) = x³ - 3x' },
            { fn: (x) => 3 * x * x - 3, color: '#ef4444', label: "f'(x) = 3x² - 3" },
          ],
          xRange: [-3, 3],
          yRange: [-5, 5],
          showGrid: true,
        },
      },
      {
        id: 'abl-3-1-s3', type: 'explanation-formal', title: 'Zusammenfassung der Kriterien',
        content: `**Notwendige Bedingung:** $f'(x_0) = 0$

**Hinreichende Bedingung (Methode 1 — zweite Ableitung):**
- $f'(x_0) = 0$ und $f''(x_0) < 0$ → lokales **Maximum**
- $f'(x_0) = 0$ und $f''(x_0) > 0$ → lokales **Minimum**

**Hinreichende Bedingung (Methode 2 — Vorzeichenwechsel):**
- $f'$ wechselt von $+$ nach $-$ → **Maximum**
- $f'$ wechselt von $-$ nach $+$ → **Minimum**
- Kein Vorzeichenwechsel → **Sattelpunkt** (z.B. bei $f(x) = x^3$, Stelle $x = 0$)`,
      },
      { id: 'abl-3-1-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-3-1-a' },
      { id: 'abl-3-1-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-3-1-b' },
      { id: 'abl-3-1-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-3-1-c' },
      { id: 'abl-3-1-s7', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-abl-3-1-d' },
      { id: 'abl-3-1-s8', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-3-1-mastery' },
    ],
  },
  {
    id: 'abl-3-2', unitId: 'abl-unit-3',
    title: 'Krümmung und Wendepunkte',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Krümmungsverhalten mit f\'\' analysieren', 'Wendepunkte berechnen'],
    prerequisites: [],
    nextLessonId: 'abl-3-3',
    steps: [
      {
        id: 'abl-3-2-s1', type: 'explanation-intuitive', title: 'Was sagt die zweite Ableitung?',
        content: `Die **zweite Ableitung** $f''(x)$ beschreibt die **Krümmung** der Kurve:

- $f''(x) > 0$ → **linksgekrümmt** (konkav nach oben, Schüsselform $\\cup$)
  Die Steigung **nimmt zu** (Kurve biegt nach oben)

- $f''(x) < 0$ → **rechtsgekrümmt** (konvex, Hügelform $\\cap$)
  Die Steigung **nimmt ab** (Kurve biegt nach unten)

**Wendepunkt** = Wechsel der Krümmungsrichtung!

Stell dir eine Straße vor: An einem Wendepunkt wechselt die Kurve von einer Linkskurve in eine Rechtskurve (oder umgekehrt). Der Fahrer muss das Lenkrad von links nach rechts drehen.

**Bedingungen für Wendepunkt bei $x_0$:**
- **Notwendig:** $f''(x_0) = 0$
- **Hinreichend:** $f'''(x_0) \\neq 0$ (oder: $f''$ wechselt bei $x_0$ das Vorzeichen)`,
      },
      {
        id: 'abl-3-2-s2', type: 'explanation-formal', title: 'Berechnung',
        content: `**Wendepunkte berechnen:**

1. $f''(x) = 0$ lösen → Kandidaten $x_0$
2. Prüfe: $f'''(x_0) \\neq 0$ → Wendepunkt bestätigt
3. Koordinaten: $(x_0, f(x_0))$

**Beispiel:** $f(x) = x^4 - 6x^2 + 1$
- $f'(x) = 4x^3 - 12x$
- $f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 0 \\Rightarrow x = \\pm 1$
- $f'''(x) = 24x$
- $f'''(1) = 24 \\neq 0$ ✓ und $f'''(-1) = -24 \\neq 0$ ✓
- Wendepunkte bei $x = 1$ und $x = -1$
- $f(1) = 1 - 6 + 1 = -4$ → WP $(1, -4)$
- $f(-1) = 1 - 6 + 1 = -4$ → WP $(-1, -4)$

**Sonderfall: Terrassenpunkt (Sattelpunkt)**
Bei $f(x) = x^3$: $f'(0) = 0$, $f''(0) = 0$, $f'''(0) = 6 \\neq 0$.
→ Wendepunkt UND waagerechte Tangente = **Sattelpunkt**.`,
      },
      { id: 'abl-3-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-3-2-a' },
      { id: 'abl-3-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-3-2-b' },
      { id: 'abl-3-2-s5', type: 'exercise', title: 'Aufgabe 3 — Zahleneingabe', exerciseRef: 'ex-abl-3-2-c' },
      { id: 'abl-3-2-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-3-2-mastery' },
    ],
  },
  {
    id: 'abl-3-3', unitId: 'abl-unit-3',
    title: 'Vollständige Kurvendiskussion',
    order: 3, estimatedMinutes: 22,
    learningGoals: ['Alle Schritte der Kurvendiskussion durchführen', 'Systematisch vorgehen'],
    prerequisites: [],
    nextLessonId: 'abl-3-4',
    steps: [
      {
        id: 'abl-3-3-s1', type: 'explanation-formal', title: 'Das vollständige Rezept',
        content: `**Vollständige Kurvendiskussion — Schritt für Schritt:**

**1. Definitionsbereich** $D_f$
Wo ist $f$ definiert? (Nenner $\\neq 0$, Radikand $\\geq 0$, Logarithmus-Argument $> 0$)

**2. Symmetrie**
- $f(-x) = f(x)$ → achsensymmetrisch (gerade)
- $f(-x) = -f(x)$ → punktsymmetrisch (ungerade)

**3. Nullstellen:** $f(x) = 0$ lösen

**4. Ableitungen berechnen:** $f'(x)$ und $f''(x)$

**5. Extrema:**
- $f'(x) = 0$ lösen → Kandidaten
- $f''(x_0)$ prüfen: $> 0$ → Min, $< 0$ → Max
- y-Werte: $f(x_0)$

**6. Wendepunkte:**
- $f''(x) = 0$ lösen → Kandidaten
- $f'''(x_0) \\neq 0$ prüfen
- y-Werte: $f(x_0)$

**7. Verhalten für $x \\to \\pm\\infty$**
(Bei Polynomen: führender Term entscheidet)

**8. Graph skizzieren** (alle Punkte einzeichnen, verbinden)`,
      },
      {
        id: 'abl-3-3-s2', type: 'explanation-formal', title: 'Durchgerechnetes Beispiel',
        content: `**Beispiel:** $f(x) = x^3 - 3x + 2$

**1. $D_f = \\mathbb{R}$** (Polynom)

**2. Symmetrie:** $f(-x) = -x^3 + 3x + 2 \\neq f(x)$ und $\\neq -f(x)$ → keine Symmetrie

**3. Nullstellen:** $f(x) = x^3 - 3x + 2 = (x-1)^2(x+2) = 0$
→ $x_1 = 1$ (doppelt), $x_2 = -2$

**4. Ableitungen:** $f'(x) = 3x^2 - 3$, $f''(x) = 6x$, $f'''(x) = 6$

**5. Extrema:** $f'(x) = 3(x^2-1) = 0 \\Rightarrow x = \\pm 1$
- $f''(-1) = -6 < 0$ → **Maximum** bei $(-1, 4)$
- $f''(1) = 6 > 0$ → **Minimum** bei $(1, 0)$

**6. Wendepunkt:** $f''(x) = 6x = 0 \\Rightarrow x = 0$
- $f'''(0) = 6 \\neq 0$ ✓ → WP bei $(0, 2)$

**7. Verhalten:** $x \\to +\\infty: f \\to +\\infty$; $x \\to -\\infty: f \\to -\\infty$`,
      },
      { id: 'abl-3-3-s3', type: 'exercise', title: 'Aufgabe 1 — Sortierung', exerciseRef: 'ex-abl-3-3-a' },
      { id: 'abl-3-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-3-3-b' },
      { id: 'abl-3-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-3-3-c' },
      { id: 'abl-3-3-s6', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-abl-3-3-d' },
      { id: 'abl-3-3-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-3-3-mastery' },
    ],
  },
  {
    id: 'abl-3-4', unitId: 'abl-unit-3',
    title: 'Prüfungsaufgaben Kurvendiskussion',
    order: 4, estimatedMinutes: 25,
    learningGoals: ['Prüfungsniveau-Aufgaben lösen', 'Alle Methoden sicher kombinieren'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'abl-3-4-s1', type: 'explanation-formal', title: 'Tipps für die Prüfung',
        content: `**Prüfungsstrategie Kurvendiskussion:**

1. **Lies die Aufgabe genau:** Manchmal wird nur ein Teil verlangt (z.B. nur Extrema).
2. **Schema abarbeiten:** Halte dich an die Reihenfolge, dann vergisst du nichts.
3. **Nebenrechnungen sauber:** Ableitungen in einer Tabelle sammeln.
4. **Ausklammern!** Oft kann man $f'(x)$ faktorisieren, was das Nullsetzen vereinfacht.
5. **Plausibilitäts-Check:** Stimmt der Graph mit den berechneten Werten überein?

**Häufige Funktionstypen in Klausuren:**
- Ganzrationale Funktionen ($x^3, x^4$, ...)
- Gebrochen-rationale Funktionen ($\\frac{p(x)}{q(x)}$)
- $e$-Funktionen ($x \\cdot e^{-x}$, $e^{-x^2}$, ...)
- Trigonometrische Funktionen

**Typischer Fehler:** $f'(x) = 0$ liefert Kandidaten, aber vergiss nicht $f''$ zu prüfen! Nicht jede Stelle mit $f' = 0$ ist ein Extremum.`,
      },
      { id: 'abl-3-4-s2', type: 'exercise', title: 'Prüfungsaufgabe 1', exerciseRef: 'ex-abl-3-4-a' },
      { id: 'abl-3-4-s3', type: 'exercise', title: 'Prüfungsaufgabe 2 — Zahleneingabe', exerciseRef: 'ex-abl-3-4-b' },
      { id: 'abl-3-4-s4', type: 'exercise', title: 'Prüfungsaufgabe 3', exerciseRef: 'ex-abl-3-4-c' },
      { id: 'abl-3-4-s5', type: 'exercise', title: 'Prüfungsaufgabe 4 — Zuordnung', exerciseRef: 'ex-abl-3-4-d' },
      { id: 'abl-3-4-s6', type: 'exercise', title: 'Prüfungsaufgabe 5', exerciseRef: 'ex-abl-3-4-e' },
      { id: 'abl-3-4-s7', type: 'mastery-check', title: 'Abschlusscheck', exerciseRef: 'ex-abl-3-4-mastery' },
    ],
  },
]

export const abl_unit3 = {
  id: 'abl-unit-3',
  title: 'Kurvendiskussion',
  order: 3,
  description: 'Monotonie, Extremwerte, Wendepunkte, vollständige Kurvendiskussion',
  lessons: lessons_abl_u3,
  exercises: exercises_abl_u3,
}
