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
    explanation: `**Ansatz:** Die erste Ableitung ist die Steigung der Tangente. Positive Steigung = Funktion wächst.

**Regel:** $f'(x) > 0$ auf $(a,b) \\Rightarrow f$ ist auf $(a,b)$ streng monoton steigend.

**Typischer Fehler:** "Negative Funktionswerte" und "negative Ableitung" werden verwechselt. $f' > 0$ sagt nichts über das Vorzeichen von $f$ selbst.`,
    hints: [
      'Was beschreibt $f\'(x)$ geometrisch?',
      '$f\'(x)$ = Steigung der Tangente. Positiv = bergauf.',
      'Verwechsle nicht das Vorzeichen von $f$ mit dem von $f\'$.',
    ],
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
    explanation: `**Ansatz:** An Hoch- oder Tiefpunkten ist die Tangente waagerecht — also Steigung Null.

**Regel:** Notwendige Bedingung: $f'(x_0) = 0$.

**Wichtig:** Das ist nur notwendig, **nicht hinreichend**. Bei $f(x) = x^3$ ist $f'(0) = 0$, aber kein Extremum, sondern ein **Sattelpunkt**. Hinreichend wird's erst durch $f''(x_0) \\neq 0$ oder Vorzeichenwechsel von $f'$.`,
    hints: [
      'An einem Extremum: Wie verläuft die Tangente?',
      'Waagerechte Tangente bedeutet Steigung = 0.',
      'Welche Ableitung ist die Steigung?',
    ],
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
    explanation: `**Ansatz:** Hinreichende Bedingung mit zweiter Ableitung.

**Regel:**
- $f'(x_0) = 0$ und $f''(x_0) > 0 \\Rightarrow$ lokales **Minimum** ("Schüsselform" $\\cup$)
- $f'(x_0) = 0$ und $f''(x_0) < 0 \\Rightarrow$ lokales **Maximum** ("Hügelform" $\\cap$)

**Merke:** Positives $f''$ = nach oben gekrümmt = Tal = Minimum.

**Typischer Fehler:** Maximum und Minimum verwechseln, weil das Vorzeichen von $f''$ nicht intuitiv mit Min/Max verknüpft wird.`,
    hints: [
      'Was bedeutet $f\'\' > 0$ geometrisch?',
      '$f\'\' > 0$ = linksgekrümmt (wie ein Tal/Schüssel).',
      'Tal-Form bedeutet: tiefster Punkt = Minimum.',
    ],
  },
  'ex-abl-3-1-d': {
    id: 'ex-abl-3-1-d', lessonId: 'abl-3-1', type: 'number-input',
    question: '$f(x) = x^3 - 6x^2 + 9x + 1$. An welcher Stelle $x$ liegt das lokale Maximum?',
    correctValue: 1,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Extremstellen über $f'(x)=0$, Typ über $f''(x_0)$.

**Rechnung:**
$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3) = 0 \\Rightarrow x = 1$ oder $x = 3$.

$f''(x) = 6x - 12$.
- $f''(1) = -6 < 0$ → **Maximum** bei $x = 1$
- $f''(3) = +6 > 0$ → **Minimum** bei $x = 3$

**Probe:** $f(1) = 1 - 6 + 9 + 1 = 5$ ist klar größer als $f(3) = 27 - 54 + 27 + 1 = 1$. ✓`,
    hints: [
      'Erst $f\'(x) = 0$ lösen, dann $f\'\'$ an den Kandidaten prüfen.',
      'Faktorisiere $f\'(x) = 3(x-1)(x-3)$.',
      '$f\'\' < 0$ → Maximum, $f\'\' > 0$ → Minimum.',
    ],
  },
  'ex-abl-3-1-transfer': {
    id: 'ex-abl-3-1-transfer', lessonId: 'abl-3-1', type: 'true-false',
    statement: 'Wenn $f$ auf einem Intervall $f\'(x) \\geq 0$ erfüllt (mit $=0$ nur an einzelnen Punkten), dann ist $f$ dort monoton steigend.',
    correct: true,
    explanation: `**Wahr.** Streng monoton wachsend gilt schon, wenn $f'(x) \\geq 0$ und $f'$ nur an isolierten Stellen Null ist. Das berühmte Beispiel ist $f(x) = x^3$: $f'(x) = 3x^2 \\geq 0$, $f'(0)=0$ — und doch ist $f$ streng monoton steigend (jeder Wert wird genau einmal angenommen).

**Konsequenz für die Praxis:** Eine "Plateau-Stelle" mit $f'=0$ unterbricht das Monotonieverhalten nicht, solange das Vorzeichen vor und nach ihr gleich bleibt.`,
    hints: [
      'Denke an $f(x) = x^3$ — die Tangente bei $x = 0$ ist waagerecht.',
      'Hat $x^3$ trotzdem strenges Monotonieverhalten?',
      'Schlüsselbegriff: "isolierte Nullstellen" von $f\'$.',
    ],
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
    explanation: `**Ansatz:** Drei Kandidaten aus $f'(x)=0$, Typ über $f''$.

**Rechnung:**
$f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2) = 0 \\Rightarrow x \\in \\{-2, 0, +2\\}$.

$f''(x) = 12x^2 - 16$:
- $f''(0) = -16 < 0$ → **Maximum** bei $x=0$, $f(0) = 0$
- $f''(\\pm 2) = 48 - 16 = 32 > 0$ → **Minima** bei $x=\\pm 2$, $f(\\pm 2) = 16 - 32 = -16$

**Plausibilität:** $f$ ist achsensymmetrisch ($f(-x)=f(x)$, gerade Funktion), also müssen die beiden Stellen $\\pm 2$ identisches Verhalten zeigen — beide Minima passt.`,
    hints: [
      '$f\'(x) = 4x^3 - 16x = 0$ — was kannst du ausklammern?',
      '$4x(x^2-4) = 4x(x-2)(x+2) = 0 \\Rightarrow$ drei Lösungen.',
      'Setze die drei Werte in $f\'\'(x) = 12x^2 - 16$ ein.',
    ],
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
    explanation: `**Ansatz:** Zweite Ableitung beschreibt Krümmung, nicht Steigung.

**Regel:**
- $f''(x) > 0$ → linksgekrümmt (konkav nach oben, $\\cup$)
- $f''(x) < 0$ → rechtsgekrümmt (konvex nach unten, $\\cap$)

**Typischer Fehler:** "Fallend" beschreibt die Steigung ($f' < 0$), nicht die Krümmung. Krümmung und Monotonie sind unabhängig: $f$ kann linksgekrümmt fallen oder steigen.`,
    hints: [
      'Wovon redet $f\'\'$ eigentlich — Steigung oder Krümmung?',
      '$f\'\' > 0 \\Leftrightarrow$ Steigung nimmt zu $\\Leftrightarrow$ Form $\\cup$.',
      'Linksgekrümmt = "Schüsselform"; rechtsgekrümmt = "Hügelform".',
    ],
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
    explanation: `**Ansatz:** Notwendig allein reicht nicht — die Krümmung muss tatsächlich wechseln.

**Regeln:**
- **Notwendig:** $f''(x_0) = 0$
- **Hinreichend:** $f'''(x_0) \\neq 0$ (Vorzeichenwechsel von $f''$ ist garantiert)

**Gegenbeispiel zur reinen Bedingung $f''=0$:** $f(x) = x^4$ hat $f''(0) = 0$, aber **kein** Wendepunkt — die Krümmung bleibt positiv. Hier ist $f'''(0) = 0$, also greift die hinreichende Bedingung nicht.

**Typischer Fehler:** Antwort A reicht nicht aus.`,
    hints: [
      'Wendepunkt = Wechsel der Krümmung. Reicht $f\'\' = 0$?',
      'Gegenbeispiel: $f(x) = x^4$ hat $f\'\'(0) = 0$, aber keinen Wendepunkt.',
      'Was sichert, dass $f\'\'$ tatsächlich das Vorzeichen wechselt?',
    ],
  },
  'ex-abl-3-2-c': {
    id: 'ex-abl-3-2-c', lessonId: 'abl-3-2', type: 'number-input',
    question: '$f(x) = x^3 - 3x$. An welcher Stelle $x$ liegt der Wendepunkt?',
    correctValue: 0,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Wendepunkt-Kandidaten aus $f''=0$, hinreichend mit $f'''\\neq 0$.

**Rechnung:**
- $f'(x) = 3x^2 - 3$
- $f''(x) = 6x = 0 \\Rightarrow x = 0$
- $f'''(x) = 6 \\neq 0$ ✓ → Wendepunkt bestätigt
- y-Koordinate: $f(0) = 0$. Wendepunkt: $(0, 0)$.

**Probe:** Vor $x=0$: $f''(-1) = -6 < 0$ (rechtsgekrümmt). Nach $x=0$: $f''(1) = 6 > 0$ (linksgekrümmt). Krümmung wechselt — passt!`,
    hints: [
      '$f\'\'(x) = 0$ lösen, Kandidat finden.',
      'Hinreichende Bedingung: $f\'\'\' \\neq 0$ am Kandidaten prüfen.',
      'Alternativ: Vorzeichenwechsel von $f\'\'$ direkt nachweisen.',
    ],
  },
  'ex-abl-3-2-transfer': {
    id: 'ex-abl-3-2-transfer', lessonId: 'abl-3-2', type: 'multiple-choice',
    question: 'Was passiert bei einer Funktion mit $f\'(x_0) = f\'\'(x_0) = 0$ und $f\'\'\'(x_0) \\neq 0$?',
    options: [
      'Lokales Maximum oder Minimum',
      'Sattelpunkt (Wendepunkt mit waagerechter Tangente)',
      'Polstelle',
      'Keine Aussage möglich',
    ],
    correctIndex: 1,
    explanation: `**Sattelpunkt** (auch Terrassenpunkt genannt). Die Tangente ist waagerecht ($f'=0$), und gleichzeitig wechselt die Krümmung ($f''$ wechselt Vorzeichen, garantiert durch $f''' \\neq 0$).

**Klassisches Beispiel:** $f(x) = x^3$ bei $x = 0$: $f'(0) = 0$, $f''(0) = 0$, $f'''(0) = 6 \\neq 0$.

**Warum kein Extremum?** Weil $f''$ Vorzeichen wechselt, kann $f'$ nicht das Vorzeichen wechseln (es bleibt $\\geq 0$ bzw. $\\leq 0$). Ohne Vorzeichenwechsel von $f'$ kein Extremum.`,
    hints: [
      'Drei Bedingungen gleichzeitig — was sagt jede aus?',
      '$f\' = 0$ → waagerechte Tangente. $f\'\'$ wechselt Vorzeichen → Wendepunkt.',
      'Ein Wendepunkt mit waagerechter Tangente heißt …',
    ],
  },
  'ex-abl-3-2-mastery': {
    id: 'ex-abl-3-2-mastery', lessonId: 'abl-3-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = x^4 - 6x^2 + 1$. Wie viele Wendepunkte hat $f$?',
    options: ['0', '1', '2', '3'],
    correctIndex: 2,
    explanation: `**Ansatz:** Kandidaten aus $f''=0$, jeden mit $f'''$ verifizieren.

**Rechnung:**
- $f'(x) = 4x^3 - 12x$
- $f''(x) = 12x^2 - 12 = 12(x^2-1) = 0 \\Rightarrow x = \\pm 1$
- $f'''(x) = 24x$
- $f'''(+1) = 24 \\neq 0$ ✓
- $f'''(-1) = -24 \\neq 0$ ✓

→ **2 Wendepunkte** bei $x = \\pm 1$.

**Plausibilität:** $f$ ist gerade ($f(-x) = f(x)$), also müssen die beiden Wendepunkte symmetrisch zu $x=0$ liegen — passt.`,
    hints: [
      '$f\'\'(x) = 0$ lösen, alle Kandidaten finden.',
      'Faktorisiere: $f\'\'(x) = 12(x-1)(x+1) = 0$.',
      'Pro Kandidat $f\'\'\'$ einsetzen — beide Werte $\\neq 0$?',
    ],
  },

  'ex-abl-3-3-a': {
    id: 'ex-abl-3-3-a', lessonId: 'abl-3-3', type: 'sorting',
    question: 'Bringe die Schritte der vollständigen Kurvendiskussion in die richtige Reihenfolge:',
    items: [
      'Ableitungen berechnen',
      'Extrema bestimmen ($f\' = 0$)',
      'Definitionsbereich bestimmen',
      'Wendepunkte bestimmen ($f\'\' = 0$)',
      'Nullstellen berechnen ($f = 0$)',
      'Verhalten für $x \\to \\pm\\infty$',
      'Graph skizzieren',
      'Symmetrie prüfen',
    ],
    correctOrder: [2, 7, 4, 0, 1, 3, 5, 6],
    explanation: `**Reihenfolge:** 1. Definitionsbereich → 2. Symmetrie → 3. Nullstellen → 4. Ableitungen → 5. Extrema → 6. Wendepunkte → 7. Verhalten $x \\to \\pm\\infty$ → 8. Skizze.

**Warum diese Reihenfolge?**
- Erst $D_f$, weil außerhalb keine sinnvollen Aussagen möglich sind.
- Dann Symmetrie — sie halbiert oft den Aufwand.
- Nullstellen vor Extrema — sie helfen beim Skizzieren.
- Ableitungen erst, wenn man weiß, was gesucht ist.
- Skizze immer am Ende, mit allen Punkten.`,
    hints: [
      'Beginne immer mit dem Definitionsbereich.',
      'Symmetrie kommt vor Nullstellen — sie kann viel Arbeit sparen.',
      'Ableitungen kommen vor Extrema und Wendepunkten — sie sind das Werkzeug dafür.',
    ],
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
    explanation: `**Ansatz:** Teste $f(-x)$ und vergleiche mit $f(x)$ bzw. $-f(x)$.

**Rechnung:** $f(-x) = -x^3 + 3x + 2$.
- Vergleich mit $f(x) = x^3 - 3x + 2$: ungleich → keine Achsensymmetrie
- Vergleich mit $-f(x) = -x^3 + 3x - 2$: ungleich (konstante Glieder unterscheiden sich!) → keine Punktsymmetrie zum Ursprung

→ Keine Symmetrie zur y-Achse oder zum Ursprung.

**Faustregel:** Polynome mit nur geraden Potenzen sind achsensymmetrisch; nur ungerade Potenzen → punktsymmetrisch. Gemischte Polynome (wie hier) haben i.A. keine Symmetrie.`,
    hints: [
      'Berechne $f(-x)$ explizit.',
      'Vergleiche mit $f(x)$ (Achsensym.) und mit $-f(x)$ (Punktsym.).',
      'Ein konstantes Glied wie $+2$ stört oft die Punktsymmetrie zum Ursprung.',
    ],
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
    explanation: `**Ansatz:** Bei Polynomen bestimmt der Term mit der höchsten Potenz das Verhalten im Unendlichen.

**Rechnung:** Höchster Term ist $2x^3$. Für $x \\to +\\infty$: positiver Koeffizient $\\cdot$ ungerade Potenz $\\to +\\infty$.

**Faustregel:**
| Höchster Term | $x \\to +\\infty$ | $x \\to -\\infty$ |
|---------------|------------------|------------------|
| $+x^{\\text{ungerade}}$ | $+\\infty$ | $-\\infty$ |
| $-x^{\\text{ungerade}}$ | $-\\infty$ | $+\\infty$ |
| $+x^{\\text{gerade}}$ | $+\\infty$ | $+\\infty$ |
| $-x^{\\text{gerade}}$ | $-\\infty$ | $-\\infty$ |`,
    hints: [
      'Welcher Term wächst am schnellsten?',
      'Linearterm $-6x$ und Konstante $+1$ sind im Unendlichen vernachlässigbar.',
      'Vorzeichen $\\cdot$ Potenz-Parität entscheidet die Richtung.',
    ],
  },
  'ex-abl-3-3-d': {
    id: 'ex-abl-3-3-d', lessonId: 'abl-3-3', type: 'number-input',
    question: '$f(x) = x^3 - 3x + 2$. Berechne den y-Wert des lokalen Maximums.',
    correctValue: 4,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Erst Extremstelle bestimmen, dann y-Wert einsetzen.

**Rechnung:**
- $f'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$
- $f''(x) = 6x$
- $f''(-1) = -6 < 0$ → **Maximum** bei $x = -1$
- $f''(+1) = +6 > 0$ → Minimum bei $x = +1$

y-Wert: $f(-1) = (-1)^3 - 3(-1) + 2 = -1 + 3 + 2 = 4$.

**Probe:** Beim Skizzieren: bei $x=-1$ ist Funktionswert höher als am Minimum $f(+1) = 1 - 3 + 2 = 0$. ✓`,
    hints: [
      'Extremstellen aus $f\'(x) = 0$.',
      'Mit $f\'\'$ unterscheiden, welche das Maximum ist.',
      'In $f$ einsetzen, nicht in $f\'$ oder $f\'\'$!',
    ],
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
    explanation: `**Ansatz:** Drei Aussagen einzeln nachprüfen.

**Rechnung:**
- $f'(x) = -3x^2 + 6x = -3x(x-2) = 0 \\Rightarrow x = 0$ oder $x = 2$
- $f''(x) = -6x + 6$
- $f''(0) = 6 > 0$ → **Minimum** bei $x=0$ ✓ (i)
- $f''(2) = -6 < 0$ → **Maximum** bei $x=2$ ✓ (ii)
- $f''(x) = 0 \\Rightarrow x = 1$, $f'''(x) = -6 \\neq 0$ ✓ → **Wendepunkt** bei $x=1$ ✓ (iii)

Alle drei Aussagen sind korrekt — Antwort C.

**Plausibilität:** Der Wendepunkt liegt genau in der Mitte zwischen den beiden Extrema (bei $x=1$ zwischen $0$ und $2$) — typisch für kubische Funktionen.`,
    hints: [
      '$f\'(x) = 0$ — was sind die Kandidaten?',
      'Pro Kandidat $f\'\'$ einsetzen: $> 0$ → Min, $< 0$ → Max.',
      'Wendepunkt: $f\'\' = 0$ und $f\'\'\' \\neq 0$.',
    ],
  },

  'ex-abl-3-4-a': {
    id: 'ex-abl-3-4-a', lessonId: 'abl-3-4', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = x^4 - 4x^3$. Bestimme alle lokalen Extrema.',
    options: [
      'Minimum bei $x = 3$, kein Maximum',
      'Maximum bei $x = 0$, Minimum bei $x = 3$',
      'Minimum bei $x = 3$, Sattelpunkt bei $x = 0$',
      'Nur ein Wendepunkt bei $x = 0$',
    ],
    correctIndex: 2,
    explanation: `**Ansatz:** Drei Kandidaten ($f' = 0$), aber bei doppelter Nullstelle vorsichtig sein.

**Rechnung:**
- $f'(x) = 4x^3 - 12x^2 = 4x^2(x-3) = 0 \\Rightarrow x = 0$ (doppelt) oder $x = 3$
- $f''(x) = 12x^2 - 24x$
- $f''(3) = 108 - 72 = 36 > 0$ → **Minimum** bei $x=3$
- $f''(0) = 0$ — Test versagt! → Vorzeichenwechsel von $f'$ prüfen

**Vorzeichen-Test bei $x=0$:** $f'(x) = 4x^2(x-3)$. Für $x \\in (-1, 0)$: $4x^2 > 0$ und $(x-3) < 0$ → $f' < 0$. Für $x \\in (0, 1)$: gleiche Vorzeichen → wieder $f' < 0$. **Kein Vorzeichenwechsel** → **Sattelpunkt**.

**Antwort C ist richtig.**`,
    hints: [
      '$f\'(x) = 4x^2(x-3) = 0$ — beachte die Doppelnullstelle.',
      'Bei $x = 0$ versagt der $f\'\'$-Test ($f\'\' = 0$).',
      'Prüfe Vorzeichenwechsel von $f\'$: bleibt es vor und nach $0$ negativ → kein Extremum.',
    ],
  },
  'ex-abl-3-4-b': {
    id: 'ex-abl-3-4-b', lessonId: 'abl-3-4', type: 'number-input',
    question: '[PRÜFUNG] $f(x) = e^{-x^2}$. An welcher positiven Stelle $x > 0$ liegt der Wendepunkt? (Auf 2 Dezimalstellen.)',
    correctValue: 0.71,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Gauss-Glocke. Wendepunkte sind die Stellen größter Steilheit.

**Rechnung:**
- $f'(x) = -2x \\, e^{-x^2}$
- $f''(x) = (-2 + 4x^2) \\, e^{-x^2}$ (Produktregel)
- $f''(x) = 0$: Da $e^{-x^2} > 0$ stets, muss $4x^2 - 2 = 0 \\Rightarrow x^2 = \\tfrac{1}{2} \\Rightarrow x = \\pm \\tfrac{1}{\\sqrt{2}} \\approx \\pm 0{,}71$.

Positive Stelle: $x = 1/\\sqrt{2} \\approx 0{,}707$.

**Plausibilität:** Bei der Gauss-Glocke (Standardnormalverteilung) liegen die Wendepunkte bei $\\pm \\sigma = \\pm 1/\\sqrt{2}$ — passt.`,
    hints: [
      'Erst $f\'$ mit Kettenregel, dann $f\'\'$ mit Produkt + Kettenregel.',
      '$e^{-x^2}$ ist nie Null — also muss der Klammerausdruck Null werden.',
      '$4x^2 - 2 = 0 \\Rightarrow x = \\pm 1/\\sqrt{2}$.',
    ],
  },
  'ex-abl-3-4-c': {
    id: 'ex-abl-3-4-c', lessonId: 'abl-3-4', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = \\dfrac{x^2}{x^2 + 1}$. Welche Aussage stimmt?',
    options: [
      '$f$ hat ein Maximum bei $x = 0$',
      '$f$ hat ein Minimum bei $x = 0$ und $\\lim_{x \\to \\pm\\infty} f(x) = 1$',
      '$f$ hat keine Extrema',
      '$f$ hat ein Maximum bei $x = 1$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Quotientenregel für $f'$, Grenzwert mit Polynomgrad.

**Rechnung:**
$$f'(x) = \\frac{2x(x^2+1) - x^2 \\cdot 2x}{(x^2+1)^2} = \\frac{2x}{(x^2+1)^2} = 0 \\Rightarrow x = 0.$$

$f(0) = 0$ ist Minimum (für $|x|$ groß ist $f(x) \\approx 1$, also wächst $f$ vom Minimum aus).

**Grenzwert:** Zähler und Nenner durch $x^2$:
$$\\lim_{x \\to \\pm\\infty} \\frac{x^2}{x^2+1} = \\lim \\frac{1}{1 + 1/x^2} = 1.$$

→ Horizontale Asymptote $y = 1$. Antwort B ist richtig.`,
    hints: [
      'Quotientenregel: $\\left(\\dfrac{u}{v}\\right)\' = \\dfrac{u\'v - uv\'}{v^2}$.',
      'Nach Vereinfachung: $f\'(x) = \\dfrac{2x}{(x^2+1)^2}$.',
      'Grenzwert: höchste Potenz im Zähler = höchste Potenz im Nenner → Quotient der Leitkoeffizienten.',
    ],
  },
  'ex-abl-3-4-d': {
    id: 'ex-abl-3-4-d', lessonId: 'abl-3-4', type: 'matching',
    question: '[PRÜFUNG] Ordne die Funktionseigenschaften den richtigen Bedingungen zu:',
    pairs: [
      { left: 'Nullstelle', right: '$f(x_0) = 0$' },
      { left: 'Extremstelle (notwendig)', right: '$f\'(x_0) = 0$' },
      { left: 'Wendestelle (notwendig)', right: '$f\'\'(x_0) = 0$' },
      { left: 'Streng monoton steigend', right: '$f\'(x) > 0$' },
    ],
    explanation: `Jede Eigenschaft hat ihre eigene "Ableitungs-Stufe":

- **Nullstelle**: Funktion selbst wird Null → $f = 0$
- **Extremum**: Tangente ist waagerecht → Steigung Null → $f' = 0$ (notwendig)
- **Wendepunkt**: Krümmung wechselt → zweite Ableitung Null → $f'' = 0$ (notwendig)
- **Monoton steigend**: Tangente zeigt überall nach oben → $f' > 0$

**Merke:** $f$, $f'$, $f''$ — drei "Stufen" für drei Eigenschaftstypen.`,
    hints: [
      'Drei Begriffe + drei Ableitungsstufen — gibt es ein klares Muster?',
      'Tangente waagerecht bedeutet Steigung Null.',
      'Krümmung wechselt bedeutet zweite Ableitung Null.',
    ],
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
    explanation: `**Ansatz:** Symmetrie testen, Extrema und Wendepunkt rechnen.

**Symmetrie:** $f(-x) = -x^3 + 12x = -(x^3 - 12x) = -f(x)$ → **punktsymmetrisch zum Ursprung** (ungerade Funktion), **nicht** achsensymmetrisch. Aussage 4 ist falsch.

**Verifikation der anderen:**
- $f'(x) = 3x^2 - 12 = 0 \\Rightarrow x = \\pm 2$
- $f''(x) = 6x$. $f''(-2) = -12 < 0$ → Max bei $x=-2$, $f(-2) = -8 + 24 = 16$ ✓
- $f''(+2) = +12 > 0$ → Min bei $x=2$, $f(2) = 8 - 24 = -16$ ✓
- $f''(x) = 6x = 0 \\Rightarrow x = 0$, $f'''(0) = 6 \\neq 0$ → WP bei $(0, 0)$ ✓

**Faustregel:** Polynome mit nur ungeraden Potenzen → punktsymmetrisch (nicht achsensymmetrisch).`,
    hints: [
      'Teste die Symmetrie: $f(-x) = ?$',
      'Eine ungerade Potenz wie $x^3$ deutet auf Punktsymmetrie, nicht Achsensymmetrie.',
      'Gerade Funktion: nur gerade Potenzen. Ungerade Funktion: nur ungerade Potenzen.',
    ],
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
    explanation: `**Ansatz:** Produktregel für $f'$, $f''$ für Maximum-Test, Randverhalten für globalen Charakter.

**Rechnung:**
- $f'(x) = e^{-x} - x e^{-x} = (1-x) e^{-x} = 0 \\Rightarrow x = 1$
- $f''(x) = (x-2) e^{-x}$, $f''(1) = -e^{-1} < 0$ → **Maximum** bei $x=1$
- $f(1) = e^{-1} \\approx 0{,}368$

**Globaler Charakter:**
- $f(0) = 0$
- $\\lim_{x \\to \\infty} f(x) = 0$ (Exponentialfaktor dominiert)
- Bei $x=1$ ist $f \\approx 0{,}368 > 0$

→ Globales Maximum bei $x = 1$.

**Anwendung:** Diese Funktion erscheint in Wahrscheinlichkeitsdichten (Exponential-Verteilung mit $\\lambda = 1$, gewichtet) und in der Reaktionskinetik.`,
    hints: [
      'Produktregel: $(uv)\' = u\'v + uv\'$ mit $u = x$, $v = e^{-x}$.',
      '$f\'(x) = (1-x) e^{-x}$ — wann ist das Null?',
      'Vergleiche $f(0)$, $f(1)$, $\\lim_{x\\to\\infty} f$ für globalen Charakter.',
    ],
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

- $f'(x) > 0$ → Funktion **steigt** (bergauf)
- $f'(x) < 0$ → Funktion **fällt** (bergab)
- $f'(x) = 0$ → Funktion hat eine **waagerechte Tangente** (möglicher Hochpunkt, Tiefpunkt oder Sattelpunkt)

**Analogie:** Stell dir eine Achterbahn vor. An den höchsten und tiefsten Punkten ist die Bahn kurz "flach" — das sind die Extrema, wo $f'(x) = 0$.

Aber **Achtung:** $f'(x_0) = 0$ allein reicht nicht! Du musst prüfen, ob es sich wirklich um ein Maximum, Minimum oder nur einen Sattelpunkt handelt.

**Hinreichende Bedingung (2. Ableitung):**
- $f'(x_0) = 0$ und $f''(x_0) > 0$ → lokales **Minimum** (Tal, Schüsselform $\\cup$)
- $f'(x_0) = 0$ und $f''(x_0) < 0$ → lokales **Maximum** (Berg, Hügelform $\\cap$)
- $f'(x_0) = 0$ und $f''(x_0) = 0$ → weitere Untersuchung nötig (Vorzeichenwechsel von $f'$ prüfen)`,
      },
      {
        id: 'abl-3-1-s2', type: 'visualization', title: 'Funktion und ihre Ableitung',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x * x - 3 * x, color: '#3b82f6', label: 'f(x) = x^3 - 3x' },
            { fn: (x) => 3 * x * x - 3, color: '#ef4444', label: "f'(x) = 3x^2 - 3" },
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
      { id: 'abl-3-1-s8', type: 'exercise', title: 'Transferfrage', exerciseRef: 'ex-abl-3-1-transfer' },
      { id: 'abl-3-1-s9', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-3-1-mastery' },
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

- $f''(x) > 0$ → **linksgekrümmt** (konkav nach oben, Schüsselform $\\cup$). Die Steigung **nimmt zu** (Kurve biegt nach oben)
- $f''(x) < 0$ → **rechtsgekrümmt** (konvex, Hügelform $\\cap$). Die Steigung **nimmt ab** (Kurve biegt nach unten)

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
      { id: 'abl-3-2-s6', type: 'exercise', title: 'Transferfrage — Sattelpunkt', exerciseRef: 'ex-abl-3-2-transfer' },
      { id: 'abl-3-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-3-2-mastery' },
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
        id: 'abl-3-4-s1', type: 'explanation-formal', title: 'Strategieblock: So gehst du an Prüfungsaufgaben heran',
        content: `**Prüfungsstrategie Kurvendiskussion (5 Schritte):**

1. **Gegeben/Gesucht markieren:** Was ist die Funktion? Was wird konkret gefragt? Manchmal nur Teil-Aufgabe (nur Extrema, nur Wendepunkt, nur Skizze).
2. **Ansatz wählen:**
   - Polynom → klassisches $f', f''$-Schema
   - Quotient $\\frac{u(x)}{v(x)}$ → Quotientenregel + Polstellen + Asymptoten
   - $e$-Funktion → Produktregel + Verhalten $x \\to \\pm\\infty$
   - $\\sin/\\cos$ → Periodizität ausnutzen
3. **Einheitencheck nicht vergessen** (bei Anwendungsaufgaben — z.B. Maximaler Volumenstrom in m³/s).
4. **Saubere Rechnung:** Ableitungen einmal sauber notieren, dann Werte einsetzen — nicht im Kopf.
5. **Plausibilitäts-Check am Ende:** Stimmt die Anzahl der Extrema mit dem Polynomgrad ($\\leq n-1$ Extrema bei Grad $n$)? Liegt der Wendepunkt zwischen zwei Extrema?

**Häufige Funktionstypen in TU-Klausuren:**
- Ganzrationale Funktionen ($x^3, x^4$, ...)
- Gebrochen-rationale Funktionen ($\\frac{p(x)}{q(x)}$)
- $e$-Funktionen ($x \\cdot e^{-x}$, $e^{-x^2}$, $e^{-\\alpha t}$)
- Trigonometrische Funktionen (oft in Schwingungs-Kontext)

**Prüfungsfalle:** $f'(x) = 0$ liefert Kandidaten, aber **vergiss nicht $f''$ zu prüfen** — nicht jede Stelle mit $f' = 0$ ist ein Extremum (Sattelpunkt!). Bei $f''(x_0) = 0$ unbedingt mit Vorzeichenwechsel arbeiten.`,
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
