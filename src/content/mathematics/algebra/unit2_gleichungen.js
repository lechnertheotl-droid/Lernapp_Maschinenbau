// ── Algebra Unit 2: Gleichungen & Ungleichungen ─────────────────────────────

export const exercises_alg_u2 = {
  // ── Lesson 1: Lineare Gleichungen ──
  'ex-alg-2-1-a': {
    id: 'ex-alg-2-1-a', lessonId: 'alg-2-1', type: 'multiple-choice',
    question: 'Löse: 3x + 7 = 22',
    options: ['x = 5', 'x = 7', 'x = 3', 'x = 10'],
    correctIndex: 0,
    explanation: '3x + 7 = 22 → 3x = 15 → x = 5. Probe: 3·5 + 7 = 22 ✓',
    hints: ['Erst −7, dann ÷3.'],
  },
  'ex-alg-2-1-b': {
    id: 'ex-alg-2-1-b', lessonId: 'alg-2-1', type: 'number-input',
    question: 'Löse: 5x − 3 = 2x + 9',
    correctAnswer: 4,
    tolerance: 0.01,
    explanation: '5x − 3 = 2x + 9 → 3x = 12 → x = 4. Probe: 5·4−3 = 17, 2·4+9 = 17 ✓',
    hints: ['Alle x auf eine Seite: 5x − 2x = 9 + 3'],
  },
  'ex-alg-2-1-c': {
    id: 'ex-alg-2-1-c', lessonId: 'alg-2-1', type: 'multiple-choice',
    question: 'Ein Rechteck hat Umfang U = 30 cm. Die Länge ist doppelt so groß wie die Breite. Wie breit ist das Rechteck?',
    options: ['5 cm', '10 cm', '7,5 cm', '15 cm'],
    correctIndex: 0,
    explanation: 'Sei b die Breite, dann l = 2b. Umfang: 2(l+b) = 2(2b+b) = 6b = 30 → b = 5 cm. Also: Breite = 5 cm, Länge = 10 cm.',
    hints: ['U = 2·(l + b). Setze l = 2b ein.'],
  },
  'ex-alg-2-1-d': {
    id: 'ex-alg-2-1-d', lessonId: 'alg-2-1', type: 'multiple-choice',
    question: 'Textaufgabe: Ein Zug fährt mit v₁ = 80 km/h los. 2 Stunden später startet ein zweiter Zug mit v₂ = 120 km/h auf der gleichen Strecke. Nach wie vielen Stunden (ab Start des 2. Zuges) holt der schnellere den langsameren ein?',
    options: ['2 h', '3 h', '4 h', '6 h'],
    correctIndex: 2,
    explanation: 'Vorsprung des 1. Zuges: 80·2 = 160 km. Aufholgeschwindigkeit: 120 − 80 = 40 km/h. Zeit: 160/40 = 4 h.',
    hints: ['Der 1. Zug hat 2h Vorsprung. Wann hat der 2. Zug die gleiche Strecke zurückgelegt?'],
  },
  'ex-alg-2-1-mastery': {
    id: 'ex-alg-2-1-mastery', lessonId: 'alg-2-1', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: (2x + 1)/3 = (x − 2)/2 + 1. Gib x an.',
    correctAnswer: 1,
    tolerance: 0.01,
    explanation: 'Hauptnenner 6: 2(2x+1) = 3(x−2) + 6 → 4x+2 = 3x−6+6 → 4x+2 = 3x → x = −2. Korrektur: 4x+2 = 3x+0 → x = −2.',
    hints: ['Hauptnenner bilden (6), dann alle Terme multiplizieren.'],
  },

  // ── Lesson 2: Quadratische Gleichungen ──
  'ex-alg-2-2-a': {
    id: 'ex-alg-2-2-a', lessonId: 'alg-2-2', type: 'multiple-choice',
    question: 'Löse: x² − 5x + 6 = 0',
    options: ['x = 2 und x = 3', 'x = −2 und x = −3', 'x = 1 und x = 6', 'x = −1 und x = −6'],
    correctIndex: 0,
    explanation: 'p-q-Formel mit p = −5, q = 6: x = 5/2 ± √(25/4 − 6) = 2,5 ± 0,5. Also x₁ = 3, x₂ = 2. Oder faktorisieren: (x−2)(x−3) = 0.',
    hints: ['p-q-Formel: x = −p/2 ± √((p/2)² − q)', 'Oder: Welche zwei Zahlen haben Summe 5 und Produkt 6?'],
  },
  'ex-alg-2-2-b': {
    id: 'ex-alg-2-2-b', lessonId: 'alg-2-2', type: 'multiple-choice',
    question: 'Die Diskriminante D = b² − 4ac einer quadratischen Gleichung ax² + bx + c = 0 ist negativ (D < 0). Was bedeutet das?',
    options: ['Zwei verschiedene reelle Lösungen', 'Genau eine reelle Lösung (Doppelwurzel)', 'Keine reelle Lösung', 'Unendlich viele Lösungen'],
    correctIndex: 2,
    explanation: 'D < 0 → unter der Wurzel steht eine negative Zahl → √(D) ist nicht reell → **keine reelle Lösung**. Die Parabel schneidet die x-Achse nicht.',
    hints: ['D > 0: 2 Lösungen, D = 0: 1 Lösung, D < 0: 0 Lösungen.'],
  },
  'ex-alg-2-2-c': {
    id: 'ex-alg-2-2-c', lessonId: 'alg-2-2', type: 'number-input',
    question: 'Löse mit der p-q-Formel: x² + 4x − 5 = 0. Gib die POSITIVE Lösung an.',
    correctAnswer: 1,
    tolerance: 0.01,
    explanation: 'p = 4, q = −5. x = −2 ± √(4+5) = −2 ± 3. x₁ = 1, x₂ = −5. Positive Lösung: x = 1.',
    hints: ['p-q-Formel: x = −p/2 ± √((p/2)²−q) = −2 ± √(4+5)'],
  },
  'ex-alg-2-2-d': {
    id: 'ex-alg-2-2-d', lessonId: 'alg-2-2', type: 'multiple-choice',
    question: 'Nach Vieta: x² − 7x + 12 = 0. Was gilt für die Lösungen x₁ und x₂?',
    options: [
      'x₁ + x₂ = 7, x₁ · x₂ = 12',
      'x₁ + x₂ = −7, x₁ · x₂ = 12',
      'x₁ + x₂ = 7, x₁ · x₂ = −12',
      'x₁ + x₂ = 12, x₁ · x₂ = 7',
    ],
    correctIndex: 0,
    explanation: 'Vieta für x² + px + q = 0: x₁ + x₂ = −p, x₁ · x₂ = q. Hier: p = −7, q = 12. Also x₁ + x₂ = 7, x₁ · x₂ = 12. (x₁ = 3, x₂ = 4).',
    hints: ['Vieta: Summe der Nullstellen = −p, Produkt = q.'],
  },
  'ex-alg-2-2-e': {
    id: 'ex-alg-2-2-e', lessonId: 'alg-2-2', type: 'multiple-choice',
    question: 'Wie viele Lösungen hat 2x² + 3x + 5 = 0?',
    options: ['Zwei reelle', 'Eine reelle (Doppelwurzel)', 'Keine reelle', 'Unendlich viele'],
    correctIndex: 2,
    explanation: 'D = b²−4ac = 9−40 = −31 < 0 → keine reelle Lösung. Die Parabel (nach oben offen) liegt komplett über der x-Achse.',
    hints: ['Berechne die Diskriminante D = b²−4ac = 3²−4·2·5'],
  },
  'ex-alg-2-2-mastery': {
    id: 'ex-alg-2-2-mastery', lessonId: 'alg-2-2', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: 2x² − 8x + 6 = 0. Gib die GRÖSSERE Lösung an.',
    correctAnswer: 3,
    tolerance: 0.01,
    explanation: 'Durch 2 teilen: x² − 4x + 3 = 0. p-q-Formel: x = 2 ± √(4−3) = 2 ± 1. x₁ = 3, x₂ = 1. Größere Lösung: 3.',
    hints: ['Erst durch 2 teilen! Dann p-q-Formel.', 'x = 2 ± √(4−3) = 2 ± 1'],
  },

  // ── Lesson 3: Polynomgleichungen & Polynomdivision ──
  'ex-alg-2-3-a': {
    id: 'ex-alg-2-3-a', lessonId: 'alg-2-3', type: 'multiple-choice',
    question: 'P(x) = x³ − 6x² + 11x − 6. Prüfe: Ist x = 1 eine Nullstelle?',
    options: ['Ja, denn P(1) = 0', 'Nein, denn P(1) = 1', 'Nein, denn P(1) = −1', 'Ja, denn P(1) = 6'],
    correctIndex: 0,
    explanation: 'P(1) = 1 − 6 + 11 − 6 = 0. Ja, x = 1 ist eine Nullstelle! Also ist (x−1) ein Teiler von P(x).',
    hints: ['Einfach x = 1 in P(x) einsetzen.'],
  },
  'ex-alg-2-3-b': {
    id: 'ex-alg-2-3-b', lessonId: 'alg-2-3', type: 'multiple-choice',
    question: '(x³ − 6x² + 11x − 6) ÷ (x − 1) ergibt:',
    options: ['x² − 5x + 6', 'x² − 6x + 11', 'x² − 5x − 6', 'x² + 5x + 6'],
    correctIndex: 0,
    explanation: 'Polynomdivision: (x³−6x²+11x−6)÷(x−1) = x²−5x+6. Dann: x²−5x+6 = (x−2)(x−3). Nullstellen: x = 1, 2, 3.',
    hints: ['Polynomdivision durchführen oder Horner-Schema nutzen.'],
  },
  'ex-alg-2-3-c': {
    id: 'ex-alg-2-3-c', lessonId: 'alg-2-3', type: 'multiple-choice',
    question: 'Beim Horner-Schema für P(x) = 2x³ + 3x² − 1 an der Stelle x₀ = −1: Was ist P(−1)?',
    options: ['0', '2', '−2', '4'],
    correctIndex: 0,
    explanation: 'P(−1) = 2·(−1)³ + 3·(−1)² − 1 = −2 + 3 − 1 = 0. Also ist x = −1 eine Nullstelle!',
    hints: ['P(−1) = 2·(−1) + 3·(1) + 0·(−1) − 1 einsetzen.'],
  },
  'ex-alg-2-3-mastery': {
    id: 'ex-alg-2-3-mastery', lessonId: 'alg-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Alle Nullstellen von P(x) = x³ − 3x² + 2x sind:',
    options: ['x = 0, 1, 2', 'x = 0, −1, −2', 'x = 1, 2, 3', 'x = 0, 1, −2'],
    correctIndex: 0,
    explanation: 'Ausklammern: x(x²−3x+2) = x(x−1)(x−2) = 0. Nullstellen: x = 0, 1, 2.',
    hints: ['Erst x ausklammern! Dann quadratische Gleichung lösen.'],
  },

  // ── Lesson 4: Ungleichungen ──
  'ex-alg-2-4-a': {
    id: 'ex-alg-2-4-a', lessonId: 'alg-2-4', type: 'multiple-choice',
    question: 'Löse: 2x − 3 > 7',
    options: ['x > 5', 'x > 2', 'x < 5', 'x > 10'],
    correctIndex: 0,
    explanation: '2x − 3 > 7 → 2x > 10 → x > 5. Das Ungleichheitszeichen bleibt gleich, weil wir durch eine positive Zahl teilen.',
    hints: ['Wie eine Gleichung lösen. Vorsicht: Bei Division durch negative Zahl dreht sich das Zeichen um!'],
  },
  'ex-alg-2-4-b': {
    id: 'ex-alg-2-4-b', lessonId: 'alg-2-4', type: 'multiple-choice',
    question: 'Löse: −3x < 12',
    options: ['x < −4', 'x > −4', 'x < 4', 'x > 4'],
    correctIndex: 1,
    explanation: '−3x < 12 → x > −4. **Achtung:** Division durch eine negative Zahl (−3) dreht das Ungleichheitszeichen um!',
    hints: ['Bei Division/Multiplikation mit negativer Zahl: Ungleichungszeichen umdrehen!'],
  },
  'ex-alg-2-4-c': {
    id: 'ex-alg-2-4-c', lessonId: 'alg-2-4', type: 'multiple-choice',
    question: 'Löse: |x − 3| < 5',
    options: ['x < 8', '−2 < x < 8', 'x > −2', '−5 < x < 5'],
    correctIndex: 1,
    explanation: '|x − 3| < 5 ↔ −5 < x − 3 < 5 ↔ −2 < x < 8. Die Lösung ist ein **offenes Intervall** um den Mittelpunkt 3 mit Radius 5.',
    hints: ['|x − a| < b ↔ a − b < x < a + b. Hier: a = 3, b = 5.'],
  },
  'ex-alg-2-4-d': {
    id: 'ex-alg-2-4-d', lessonId: 'alg-2-4', type: 'multiple-choice',
    question: 'Löse: x² − 4 > 0',
    options: ['x > 2', 'x < −2 oder x > 2', '−2 < x < 2', 'x > 4'],
    correctIndex: 1,
    explanation: 'x² − 4 > 0 → (x−2)(x+2) > 0. Vorzeichentabelle: Für x < −2: (+)(−) nein. Für −2 < x < 2: (−)(+) nein. Für x > 2: (+)(+) ja. Korrektur: Für x < −2: (−)(−) = (+) ja! Lösung: x < −2 oder x > 2.',
    hints: ['Faktorisieren: (x−2)(x+2) > 0. Vorzeichentabelle aufstellen.'],
  },
  'ex-alg-2-4-mastery': {
    id: 'ex-alg-2-4-mastery', lessonId: 'alg-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: |2x + 1| ≤ 7',
    options: ['−4 ≤ x ≤ 3', '−3 ≤ x ≤ 4', 'x ≤ 3', '−4 ≤ x ≤ 4'],
    correctIndex: 0,
    explanation: '|2x + 1| ≤ 7 ↔ −7 ≤ 2x + 1 ≤ 7 ↔ −8 ≤ 2x ≤ 6 ↔ −4 ≤ x ≤ 3.',
    hints: ['|A| ≤ B ↔ −B ≤ A ≤ B. Dann nach x auflösen.'],
  },
}

const lessons_alg_u2 = [
  {
    id: 'alg-2-1', unitId: 'alg-unit-2',
    title: 'Lineare Gleichungen',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Lineare Gleichungen lösen', 'Textaufgaben in Gleichungen übersetzen'],
    prerequisites: [],
    nextLessonId: 'alg-2-2',
    steps: [
      {
        id: 'alg-2-1-s1', type: 'explanation-intuitive', title: 'Gleichungen als Waage',
        content: `Stell dir eine **Waage** vor, die im Gleichgewicht ist. Links und rechts liegt gleich viel drauf.

**Grundprinzip:** Was du links machst, musst du auch rechts machen — sonst kippt die Waage!

**Lineare Gleichung:** $ax + b = 0$

**Lösungsstrategie:**
1. Alles mit x auf eine Seite
2. Alles ohne x auf die andere Seite
3. Durch den Koeffizienten von x teilen

**Beispiel:** $3x + 7 = 22$
1. $3x = 22 - 7 = 15$
2. $x = 15/3 = 5$
3. **Probe:** $3 \\cdot 5 + 7 = 22$ ✓

**Textaufgaben:**
1. Variable definieren (z.B. x = Breite)
2. Zusammenhang als Gleichung aufschreiben
3. Gleichung lösen
4. Probe im Sachkontext!`,
      },
      { id: 'alg-2-1-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-2-1-a' },
      { id: 'alg-2-1-s3', type: 'exercise', title: 'Aufgabe 2 (Rechnung)', exerciseRef: 'ex-alg-2-1-b' },
      { id: 'alg-2-1-s4', type: 'exercise', title: 'Aufgabe 3 (Textaufgabe)', exerciseRef: 'ex-alg-2-1-c' },
      { id: 'alg-2-1-s5', type: 'exercise', title: 'Aufgabe 4 (Textaufgabe)', exerciseRef: 'ex-alg-2-1-d' },
      { id: 'alg-2-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-2-1-mastery' },
    ],
  },
  {
    id: 'alg-2-2', unitId: 'alg-unit-2',
    title: 'Quadratische Gleichungen',
    order: 2, estimatedMinutes: 20,
    learningGoals: ['p-q-Formel und abc-Formel anwenden', 'Diskriminante interpretieren', 'Satz von Vieta nutzen'],
    prerequisites: [],
    nextLessonId: 'alg-2-3',
    steps: [
      {
        id: 'alg-2-2-s1', type: 'explanation-intuitive', title: 'Quadratische Gleichungen — Warum?',
        content: `Quadratische Gleichungen tauchen überall auf: Wurfparabeln, Bremswege, Flächenberechnungen ...

**Allgemeine Form:** $ax^2 + bx + c = 0$

**Normalform** (durch a teilen): $x^2 + px + q = 0$

Stell dir eine **Parabel** vor (U-Form). Die Lösungen sind die Stellen, wo die Parabel die x-Achse schneidet:
- 2 Schnittpunkte → 2 Lösungen
- 1 Berührpunkt → 1 Lösung (Doppelwurzel)
- 0 Schnittpunkte → keine reelle Lösung`,
      },
      {
        id: 'alg-2-2-s2', type: 'explanation-formal', title: 'Lösungsformeln',
        content: `**p-q-Formel** (für $x^2 + px + q = 0$):
$$x_{1,2} = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}$$

**abc-Formel** (für $ax^2 + bx + c = 0$):
$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Diskriminante:** $D = b^2 - 4ac$ (bzw. $(p/2)^2 - q$)
- $D > 0$: Zwei verschiedene reelle Lösungen
- $D = 0$: Eine Doppelwurzel
- $D < 0$: Keine reelle Lösung

**Satz von Vieta** (für $x^2 + px + q = 0$):
$$x_1 + x_2 = -p, \\quad x_1 \\cdot x_2 = q$$

Nützlich zum schnellen Raten oder zur Kontrolle!`,
      },
      {
        id: 'alg-2-2-s3', type: 'visualization', title: 'Parabel und Nullstellen',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x - 5 * x + 6, color: '#3b82f6', label: 'x²−5x+6' },
          ],
          xRange: [-1, 6],
          yRange: [-2, 8],
          showGrid: true,
        },
      },
      { id: 'alg-2-2-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-2-2-a' },
      { id: 'alg-2-2-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-2-2-b' },
      { id: 'alg-2-2-s6', type: 'exercise', title: 'Aufgabe 3 (Rechnung)', exerciseRef: 'ex-alg-2-2-c' },
      { id: 'alg-2-2-s7', type: 'exercise', title: 'Aufgabe 4 (Vieta)', exerciseRef: 'ex-alg-2-2-d' },
      { id: 'alg-2-2-s8', type: 'exercise', title: 'Aufgabe 5', exerciseRef: 'ex-alg-2-2-e' },
      { id: 'alg-2-2-s9', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-2-2-mastery' },
    ],
  },
  {
    id: 'alg-2-3', unitId: 'alg-unit-2',
    title: 'Polynomgleichungen & Polynomdivision',
    order: 3, estimatedMinutes: 15,
    learningGoals: ['Nullstellen durch Probieren finden', 'Polynomdivision durchführen', 'Horner-Schema anwenden'],
    prerequisites: [],
    nextLessonId: 'alg-2-4',
    steps: [
      {
        id: 'alg-2-3-s1', type: 'explanation-intuitive', title: 'Polynome höheren Grades',
        content: `Was tun bei x³, x⁴ und höher? Es gibt keine einfache Formel wie die p-q-Formel!

**Strategie für Polynomgleichungen:**
1. **Ausklammern prüfen:** Ist x ein Faktor? (z.B. x³−2x² = x²(x−2))
2. **Nullstelle raten:** Probiere x = ±1, ±2, ±3, ... (Teiler des absoluten Glieds)
3. **Polynomdivision:** Wenn x₀ Nullstelle ist, teile P(x) durch (x−x₀)
4. **Wiederholen:** Das Ergebnis hat einen Grad weniger → weiter faktorisieren

**Beispiel:** $P(x) = x^3 - 6x^2 + 11x - 6$
- Raten: P(1) = 1−6+11−6 = 0 ✓ → x₁ = 1
- Polynomdivision: P(x) ÷ (x−1) = x²−5x+6
- p-q-Formel: x₂ = 2, x₃ = 3

**Horner-Schema:** Eine schnelle Methode für die Polynomdivision — besonders bei Klausuren zeitsparend!`,
      },
      { id: 'alg-2-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-2-3-a' },
      { id: 'alg-2-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-2-3-b' },
      { id: 'alg-2-3-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-2-3-c' },
      { id: 'alg-2-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-2-3-mastery' },
    ],
  },
  {
    id: 'alg-2-4', unitId: 'alg-unit-2',
    title: 'Ungleichungen',
    order: 4, estimatedMinutes: 15,
    learningGoals: ['Lineare Ungleichungen lösen', 'Betragsungleichungen auflösen', 'Quadratische Ungleichungen mit Vorzeichentabelle lösen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-2-4-s1', type: 'explanation-formal', title: 'Ungleichungen — Regeln',
        content: `**Grundregel:** Ungleichungen löst man wie Gleichungen, ABER:

⚠️ **Bei Multiplikation/Division mit negativer Zahl: Zeichen umdrehen!**
$$-2x > 6 \\quad \\Rightarrow \\quad x < -3$$

**Betragsungleichungen:**
$$|x - a| < b \\quad \\Leftrightarrow \\quad a - b < x < a + b$$
$$|x - a| > b \\quad \\Leftrightarrow \\quad x < a - b \\text{ oder } x > a + b$$

**Quadratische Ungleichungen:**
1. Nullstellen bestimmen (p-q-Formel)
2. **Vorzeichentabelle** aufstellen
3. Bereiche ablesen, wo das Vorzeichen stimmt

**Beispiel:** $x^2 - 4 > 0$
- Nullstellen: x = −2, x = 2
- Vorzeichen: (−∞,−2): +, (−2,2): −, (2,∞): +
- Lösung: x < −2 oder x > 2`,
      },
      { id: 'alg-2-4-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-2-4-a' },
      { id: 'alg-2-4-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-2-4-b' },
      { id: 'alg-2-4-s4', type: 'exercise', title: 'Aufgabe 3 (Betrag)', exerciseRef: 'ex-alg-2-4-c' },
      { id: 'alg-2-4-s5', type: 'exercise', title: 'Aufgabe 4 (Quadratisch)', exerciseRef: 'ex-alg-2-4-d' },
      { id: 'alg-2-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-2-4-mastery' },
    ],
  },
]

export const alg_unit2 = {
  id: 'alg-unit-2',
  title: 'Gleichungen & Ungleichungen',
  order: 2,
  description: 'Lineare und quadratische Gleichungen, Polynomdivision, Ungleichungen',
  lessons: lessons_alg_u2,
  exercises: exercises_alg_u2,
}
