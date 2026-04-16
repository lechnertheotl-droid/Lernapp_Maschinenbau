// ── Ableitung Unit 2: Ableitungsregeln im Detail ─────────────────────────────

export const exercises_abl_u2 = {
  'ex-abl-2-1-a': {
    id: 'ex-abl-2-1-a', lessonId: 'abl-2-1', type: 'multiple-choice',
    question: 'Produktregel: $(f \\cdot g)\' = $',
    options: ["$f' \\cdot g'$", "$f' \\cdot g + f \\cdot g'$", "$f \\cdot g + f' \\cdot g'$", "$(f + g) \\cdot (f' + g')$"],
    correctIndex: 1,
    explanation: "Produktregel: $(f \\cdot g)' = f' \\cdot g + f \\cdot g'$. Merke: Erst den ersten Faktor ableiten (mal zweiter), dann den zweiten Faktor ableiten (mal erster).",
    hints: ["Nicht einfach beide einzeln ableiten! Es gilt NICHT $(f \\cdot g)' = f' \\cdot g'$."],
  },
  'ex-abl-2-1-b': {
    id: 'ex-abl-2-1-b', lessonId: 'abl-2-1', type: 'multiple-choice',
    question: '$f(x) = x^2 \\cdot \\sin(x)$. Was ist $f\'(x)$?',
    options: [
      '$2x \\cdot \\cos(x)$',
      '$2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x)$',
      '$x^2 \\cdot \\cos(x) - 2x \\cdot \\sin(x)$',
      '$2x \\cdot \\sin(x) - x^2 \\cdot \\cos(x)$',
    ],
    correctIndex: 1,
    explanation: "Produktregel: $f' = (x^2)' \\cdot \\sin(x) + x^2 \\cdot (\\sin(x))' = 2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x)$.",
    hints: ['$f = x^2$ und $g = \\sin(x)$. Produktregel anwenden.'],
  },
  'ex-abl-2-1-c': {
    id: 'ex-abl-2-1-c', lessonId: 'abl-2-1', type: 'multiple-choice',
    question: '$f(x) = e^x \\cdot \\ln(x)$. Was ist $f\'(x)$?',
    options: [
      '$e^x / x$',
      '$e^x \\cdot \\ln(x) + e^x / x$',
      '$e^x \\cdot \\ln(x) + e^x \\cdot x$',
      '$e^x / x + \\ln(x)$',
    ],
    correctIndex: 1,
    explanation: "Produktregel: $f' = (e^x)' \\cdot \\ln(x) + e^x \\cdot (\\ln(x))' = e^x \\cdot \\ln(x) + e^x \\cdot \\frac{1}{x}$.",
    hints: ['$(e^x)\' = e^x$ und $(\\ln x)\' = 1/x$. Produktregel anwenden.'],
  },
  'ex-abl-2-1-d': {
    id: 'ex-abl-2-1-d', lessonId: 'abl-2-1', type: 'number-input',
    question: '$f(x) = x \\cdot e^x$. Berechne $f\'(1)$ (auf 2 Dezimalstellen).',
    correctValue: 5.44,
    tolerance: 0.05,
    unit: '',
    explanation: "Produktregel: $f'(x) = 1 \\cdot e^x + x \\cdot e^x = (1 + x)e^x$. Einsetzen: $f'(1) = 2 \\cdot e^1 = 2e \\approx 5.44$.",
    hints: ["$f'(x) = (1+x)e^x$. Setze $x = 1$ ein."],
  },
  'ex-abl-2-1-mastery': {
    id: 'ex-abl-2-1-mastery', lessonId: 'abl-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = (3x+1) \\cdot \\cos(x)$. Was ist $f\'(x)$?',
    options: [
      '$3\\cos(x) - (3x+1)\\sin(x)$',
      '$3\\cos(x) + (3x+1)\\sin(x)$',
      '$-3\\sin(x)$',
      '$3\\cos(x) \\cdot (-\\sin(x))$',
    ],
    correctIndex: 0,
    explanation: "Produktregel: $f' = 3 \\cdot \\cos(x) + (3x+1) \\cdot (-\\sin(x)) = 3\\cos(x) - (3x+1)\\sin(x)$.",
    hints: ['$(3x+1)\' = 3$ und $(\\cos x)\' = -\\sin x$.'],
  },

  'ex-abl-2-2-a': {
    id: 'ex-abl-2-2-a', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: 'Quotientenregel: $\\left(\\frac{f}{g}\\right)\' = $',
    options: [
      "$\\frac{f'}{g'}$",
      "$\\frac{f' \\cdot g - f \\cdot g'}{g^2}$",
      "$\\frac{f' \\cdot g + f \\cdot g'}{g^2}$",
      "$\\frac{f \\cdot g' - f' \\cdot g}{g^2}$",
    ],
    correctIndex: 1,
    explanation: "Quotientenregel: $\\left(\\frac{f}{g}\\right)' = \\frac{f' \\cdot g - f \\cdot g'}{g^2}$. Merke: **NAZ** — Nenner mal Ableitung Zähler minus Zähler mal Ableitung Nenner, geteilt durch Nenner zum Quadrat.",
    hints: ['Eselsbrücke: NAZ — Nenner × Abl. Zähler − Zähler × Abl. Nenner, alles durch Nenner$^2$.'],
  },
  'ex-abl-2-2-b': {
    id: 'ex-abl-2-2-b', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: '$f(x) = \\frac{x}{x+1}$. Was ist $f\'(x)$?',
    options: [
      '$\\frac{1}{(x+1)^2}$',
      '$\\frac{1}{x+1}$',
      '$\\frac{x}{(x+1)^2}$',
      '$\\frac{-1}{(x+1)^2}$',
    ],
    correctIndex: 0,
    explanation: "Quotientenregel: $f' = \\frac{1 \\cdot (x+1) - x \\cdot 1}{(x+1)^2} = \\frac{x+1-x}{(x+1)^2} = \\frac{1}{(x+1)^2}$.",
    hints: ['Zähler: $f = x$, Nenner: $g = x+1$. $f\' = 1$, $g\' = 1$.'],
  },
  'ex-abl-2-2-c': {
    id: 'ex-abl-2-2-c', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: '$f(x) = \\frac{\\sin(x)}{x}$. Was ist $f\'(x)$?',
    options: [
      '$\\frac{\\cos(x)}{x}$',
      '$\\frac{x\\cos(x) - \\sin(x)}{x^2}$',
      '$\\frac{\\cos(x) - \\sin(x)}{x^2}$',
      '$\\frac{x\\cos(x) + \\sin(x)}{x^2}$',
    ],
    correctIndex: 1,
    explanation: "Quotientenregel: $f' = \\frac{\\cos(x) \\cdot x - \\sin(x) \\cdot 1}{x^2} = \\frac{x\\cos(x) - \\sin(x)}{x^2}$.",
    hints: ['Zähler: $\\sin(x)$, Nenner: $x$. $(\\sin x)\' = \\cos x$, $(x)\' = 1$.'],
  },
  'ex-abl-2-2-d': {
    id: 'ex-abl-2-2-d', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: '$f(x) = \\frac{e^x}{x^2}$. Was ist $f\'(x)$?',
    options: [
      '$\\frac{e^x}{2x}$',
      '$\\frac{e^x(x-2)}{x^3}$',
      '$\\frac{e^x(x^2 - 2x)}{x^4}$',
      '$\\frac{e^x \\cdot x^2 - 2x \\cdot e^x}{x^4}$',
    ],
    correctIndex: 3,
    explanation: "Quotientenregel: $f' = \\frac{e^x \\cdot x^2 - e^x \\cdot 2x}{x^4} = \\frac{e^x(x^2 - 2x)}{x^4} = \\frac{e^x(x-2)}{x^3}$. Antworten B, C und D sind alle äquivalent — D ist die ungekürzte Form.",
    hints: ['$(e^x)\' = e^x$, $(x^2)\' = 2x$. Quotientenregel anwenden, dann kürzen.'],
  },
  'ex-abl-2-2-mastery': {
    id: 'ex-abl-2-2-mastery', lessonId: 'abl-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = \\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$. Leite mit der Quotientenregel ab. $f\'(x) = $',
    options: [
      '$\\frac{1}{\\cos^2(x)}$',
      '$\\frac{1}{\\sin^2(x)}$',
      '$\\frac{\\cos^2(x) + \\sin^2(x)}{\\cos(x)}$',
      '$-\\frac{1}{\\cos^2(x)}$',
    ],
    correctIndex: 0,
    explanation: "$f' = \\frac{\\cos(x) \\cdot \\cos(x) - \\sin(x) \\cdot (-\\sin(x))}{\\cos^2(x)} = \\frac{\\cos^2(x) + \\sin^2(x)}{\\cos^2(x)} = \\frac{1}{\\cos^2(x)}$. Das ist die bekannte Formel $(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$.",
    hints: ['$(\\sin x)\' = \\cos x$, $(\\cos x)\' = -\\sin x$. Nutze $\\cos^2 + \\sin^2 = 1$.'],
  },

  'ex-abl-2-3-a': {
    id: 'ex-abl-2-3-a', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: 'Kettenregel: Bei $f(x) = \\sin(3x^2)$ — was ist die äußere, was die innere Funktion?',
    options: [
      'Äußere: $3x^2$, Innere: $\\sin$',
      'Äußere: $\\sin$, Innere: $3x^2$',
      'Äußere: $x^2$, Innere: $3\\sin$',
      'Äußere: $3$, Innere: $\\sin(x^2)$',
    ],
    correctIndex: 1,
    explanation: 'Die äußere Funktion ist das, was "zuletzt" ausgeführt wird: $\\sin(\\ldots)$. Die innere Funktion ist das Argument: $3x^2$. Äußere ableiten: $\\cos(3x^2)$. Innere ableiten: $6x$. Ergebnis: $6x \\cdot \\cos(3x^2)$.',
    hints: ['Welche Funktion wird als letztes ausgeführt? Das ist die äußere.'],
  },
  'ex-abl-2-3-b': {
    id: 'ex-abl-2-3-b', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: '$f(x) = (5x^3 - 2x)^4$. Was ist $f\'(x)$?',
    options: [
      '$4(5x^3 - 2x)^3$',
      '$4(15x^2 - 2)(5x^3 - 2x)^3$',
      '$4(5x^3 - 2x)^3 \\cdot (15x^2 - 2)$',
      '$(20x^3 - 8x)^3$',
    ],
    correctIndex: 2,
    explanation: 'Äußere: $u^4 \\to 4u^3$. Innere: $5x^3 - 2x \\to 15x^2 - 2$. Kettenregel: $f\'(x) = 4(5x^3 - 2x)^3 \\cdot (15x^2 - 2)$.',
    hints: ['Äußere Funktion: $u^4$. Innere Funktion: $u = 5x^3 - 2x$.'],
  },
  'ex-abl-2-3-c': {
    id: 'ex-abl-2-3-c', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: '$f(x) = e^{\\sin(x)}$. Was ist $f\'(x)$?',
    options: [
      '$e^{\\cos(x)}$',
      '$\\cos(x) \\cdot e^{\\sin(x)}$',
      '$e^{\\sin(x)} \\cdot \\sin(x)$',
      '$\\cos(x) \\cdot e^{\\cos(x)}$',
    ],
    correctIndex: 1,
    explanation: 'Äußere: $e^u \\to e^u$ (bleibt gleich!). Innere: $\\sin(x) \\to \\cos(x)$. Also: $f\'(x) = e^{\\sin(x)} \\cdot \\cos(x)$.',
    hints: ['$(e^u)\' = e^u$. Innere Funktion: $\\sin(x)$, innere Ableitung: $\\cos(x)$.'],
  },
  'ex-abl-2-3-d': {
    id: 'ex-abl-2-3-d', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: '$f(x) = \\ln(x^2 + 1)$. Was ist $f\'(x)$?',
    options: [
      '$\\frac{1}{x^2 + 1}$',
      '$\\frac{2x}{x^2 + 1}$',
      '$\\frac{x}{x^2 + 1}$',
      '$\\frac{2}{x^2 + 1}$',
    ],
    correctIndex: 1,
    explanation: 'Äußere: $\\ln(u) \\to \\frac{1}{u}$. Innere: $x^2 + 1 \\to 2x$. Also: $f\'(x) = \\frac{1}{x^2+1} \\cdot 2x = \\frac{2x}{x^2+1}$.',
    hints: ['$(\\ln u)\' = 1/u$. Innere Ableitung: $(x^2 + 1)\' = 2x$.'],
  },
  'ex-abl-2-3-e': {
    id: 'ex-abl-2-3-e', lessonId: 'abl-2-3', type: 'number-input',
    question: '$f(x) = \\sqrt{4x+1} = (4x+1)^{1/2}$. Berechne $f\'(2)$.',
    correctValue: 0.67,
    tolerance: 0.02,
    unit: '',
    explanation: "$f'(x) = \\frac{1}{2}(4x+1)^{-1/2} \\cdot 4 = \\frac{2}{\\sqrt{4x+1}}$. $f'(2) = \\frac{2}{\\sqrt{9}} = \\frac{2}{3} \\approx 0.67$.",
    hints: ['Äußere: $u^{1/2} \\to \\frac{1}{2}u^{-1/2}$. Innere: $4x+1 \\to 4$.'],
  },
  'ex-abl-2-3-mastery': {
    id: 'ex-abl-2-3-mastery', lessonId: 'abl-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Doppelte Kettenregel: $f(x) = e^{\\cos(3x)}$. Was ist $f\'(x)$?',
    options: [
      '$-3\\sin(3x) \\cdot e^{\\cos(3x)}$',
      '$3\\cos(3x) \\cdot e^{\\cos(3x)}$',
      '$-\\sin(3x) \\cdot e^{\\cos(3x)}$',
      '$e^{-\\sin(3x)} \\cdot 3$',
    ],
    correctIndex: 0,
    explanation: 'Drei Schichten: $e^u$ mit $u = \\cos(v)$ mit $v = 3x$. $f\' = e^{\\cos(3x)} \\cdot (-\\sin(3x)) \\cdot 3 = -3\\sin(3x) \\cdot e^{\\cos(3x)}$.',
    hints: ['Von außen nach innen: $e^u \\to e^u$, $\\cos v \\to -\\sin v$, $3x \\to 3$. Alles multiplizieren!'],
  },

  'ex-abl-2-4-a': {
    id: 'ex-abl-2-4-a', lessonId: 'abl-2-4', type: 'multiple-choice',
    question: '$f(x) = x^2 \\cdot e^{3x}$. Welche Regeln brauchst du?',
    options: [
      'Nur Kettenregel',
      'Nur Produktregel',
      'Produktregel + Kettenregel',
      'Quotientenregel',
    ],
    correctIndex: 2,
    explanation: '$f$ ist ein Produkt aus $x^2$ und $e^{3x}$. Für $e^{3x}$ braucht man zusätzlich die Kettenregel. Also: Produktregel + Kettenregel.',
    hints: ['$f = \\underbrace{x^2}_{\\text{Faktor 1}} \\cdot \\underbrace{e^{3x}}_{\\text{Faktor 2}}$. Faktor 2 ist verkettet.'],
  },
  'ex-abl-2-4-b': {
    id: 'ex-abl-2-4-b', lessonId: 'abl-2-4', type: 'multiple-choice',
    question: '$f(x) = x^2 \\cdot e^{3x}$. Was ist $f\'(x)$?',
    options: [
      '$2x \\cdot e^{3x} + 3x^2 \\cdot e^{3x}$',
      '$6x \\cdot e^{3x}$',
      '$2x \\cdot 3e^{3x}$',
      '$(2x + 3x^2) \\cdot e^{3x}$',
    ],
    correctIndex: 0,
    explanation: "Produktregel: $f' = (x^2)' \\cdot e^{3x} + x^2 \\cdot (e^{3x})' = 2x \\cdot e^{3x} + x^2 \\cdot 3e^{3x}$. Man kann $e^{3x}$ ausklammern: $= (2x + 3x^2)e^{3x} = x(2+3x)e^{3x}$. Antworten A und D sind äquivalent.",
    hints: ['Produktregel: $(x^2)\' = 2x$. Kettenregel für $(e^{3x})\' = 3e^{3x}$.'],
  },
  'ex-abl-2-4-c': {
    id: 'ex-abl-2-4-c', lessonId: 'abl-2-4', type: 'multiple-choice',
    question: '$f(x) = \\frac{\\sin(2x)}{x+1}$. Was ist $f\'(x)$?',
    options: [
      '$\\frac{2\\cos(2x)(x+1) - \\sin(2x)}{(x+1)^2}$',
      '$\\frac{2\\cos(2x)}{x+1}$',
      '$\\frac{\\cos(2x)(x+1) - \\sin(2x)}{(x+1)^2}$',
      '$\\frac{2\\cos(2x) - \\sin(2x)}{(x+1)^2}$',
    ],
    correctIndex: 0,
    explanation: "Quotientenregel + Kettenregel: $(\\sin(2x))' = 2\\cos(2x)$, $(x+1)' = 1$. $f' = \\frac{2\\cos(2x) \\cdot (x+1) - \\sin(2x) \\cdot 1}{(x+1)^2}$.",
    hints: ['Quotientenregel: Zähler = $\\sin(2x)$, Nenner = $x+1$. Für $(\\sin(2x))\'$ brauchst du die Kettenregel.'],
  },
  'ex-abl-2-4-d': {
    id: 'ex-abl-2-4-d', lessonId: 'abl-2-4', type: 'number-input',
    question: '$f(x) = (x+1)^3 \\cdot \\ln(x)$. Berechne $f\'(1)$ (auf 1 Dezimalstelle).',
    correctValue: 8.0,
    tolerance: 0.1,
    unit: '',
    explanation: "$f'(x) = 3(x+1)^2 \\cdot \\ln(x) + (x+1)^3 \\cdot \\frac{1}{x}$. Bei $x = 1$: $f'(1) = 3 \\cdot 4 \\cdot 0 + 8 \\cdot 1 = 8$.",
    hints: ['Produktregel + Kettenregel. $\\ln(1) = 0$ vereinfacht vieles!'],
  },
  'ex-abl-2-4-mastery': {
    id: 'ex-abl-2-4-mastery', lessonId: 'abl-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = \\frac{e^{2x}}{\\sqrt{x}}$. Vereinfache $f\'(x)$.',
    options: [
      '$\\frac{e^{2x}(4x - 1)}{2x\\sqrt{x}}$',
      '$\\frac{2e^{2x}}{\\sqrt{x}}$',
      '$\\frac{e^{2x}(4x + 1)}{2x\\sqrt{x}}$',
      '$\\frac{e^{2x}}{2x\\sqrt{x}}$',
    ],
    correctIndex: 0,
    explanation: "Quotientenregel: $f' = \\frac{2e^{2x} \\cdot \\sqrt{x} - e^{2x} \\cdot \\frac{1}{2\\sqrt{x}}}{x}$. Erweitern mit $2\\sqrt{x}$: $= \\frac{e^{2x}(4x - 1)}{2x\\sqrt{x}}$.",
    hints: ['$(e^{2x})\' = 2e^{2x}$ (Kettenregel). $(\\sqrt{x})\' = \\frac{1}{2\\sqrt{x}}$. Dann Quotientenregel.'],
  },
}

const lessons_abl_u2 = [
  {
    id: 'abl-2-1', unitId: 'abl-unit-2',
    title: 'Produktregel',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Produktregel verstehen und anwenden', 'Produkte von Funktionen ableiten'],
    prerequisites: [],
    nextLessonId: 'abl-2-2',
    steps: [
      {
        id: 'abl-2-1-s1', type: 'explanation-intuitive', title: 'Die Idee: Fläche eines Rechtecks',
        content: `Stell dir ein Rechteck vor mit den Seiten $f(x)$ und $g(x)$. Die **Fläche** ist $A = f \\cdot g$.

Wenn sich $x$ ein kleines bisschen ändert, ändern sich **beide Seiten** gleichzeitig. Die Flächenänderung setzt sich zusammen aus:

- **Streifen oben:** $f' \\cdot g$ (Seite $f$ wächst, Seite $g$ bleibt)
- **Streifen rechts:** $f \\cdot g'$ (Seite $g$ wächst, Seite $f$ bleibt)
- Ein winziges Eck $f' \\cdot g'$ (vernachlässigbar klein)

Zusammen:
$$(f \\cdot g)' = f' \\cdot g + f \\cdot g'$$

**Merksatz:** "Erster abgeleitet mal Zweiter plus Erster mal Zweiter abgeleitet."

**Achtung:** Es gilt **NICHT** $(f \\cdot g)' = f' \\cdot g'$! Das ist ein häufiger Fehler.`,
      },
      {
        id: 'abl-2-1-s2', type: 'explanation-formal', title: 'Formel und Beispiele',
        content: `**Produktregel:**
$$(f \\cdot g)' = f' \\cdot g + f \\cdot g'$$

**Beispiel 1:** $f(x) = x^3 \\cdot \\sin(x)$
$$f'(x) = 3x^2 \\cdot \\sin(x) + x^3 \\cdot \\cos(x)$$

**Beispiel 2:** $f(x) = x \\cdot e^x$
$$f'(x) = 1 \\cdot e^x + x \\cdot e^x = (1+x) \\cdot e^x$$

**Beispiel 3:** $f(x) = x^2 \\cdot \\ln(x)$
$$f'(x) = 2x \\cdot \\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x$$

**Tipp:** Manchmal kann man nach dem Ableiten Terme zusammenfassen oder ausklammern.`,
      },
      { id: 'abl-2-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-2-1-a' },
      { id: 'abl-2-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-2-1-b' },
      { id: 'abl-2-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-2-1-c' },
      { id: 'abl-2-1-s6', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-abl-2-1-d' },
      { id: 'abl-2-1-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-2-1-mastery' },
    ],
  },
  {
    id: 'abl-2-2', unitId: 'abl-unit-2',
    title: 'Quotientenregel',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Quotientenregel anwenden', 'Brüche von Funktionen ableiten'],
    prerequisites: [],
    nextLessonId: 'abl-2-3',
    steps: [
      {
        id: 'abl-2-2-s1', type: 'explanation-intuitive', title: 'Division ableiten',
        content: `Was, wenn eine Funktion ein **Bruch** ist, also $f(x) = \\frac{\\text{Zähler}}{\\text{Nenner}}$?

Dafür gibt es die **Quotientenregel**. Man kann sie sich aus der Produktregel herleiten (denn $\\frac{f}{g} = f \\cdot g^{-1}$), aber es ist praktischer, die fertige Formel zu nutzen:

$$\\left(\\frac{f}{g}\\right)' = \\frac{f' \\cdot g - f \\cdot g'}{g^2}$$

**Eselsbrücke "NAZ":**
- **N**enner $\\times$ **A**bleitung **Z**ähler
- **minus** **Z**ähler $\\times$ **A**bleitung **N**enner
- alles geteilt durch **N**enner **z**um **Q**uadrat

Oder kurz: "NAZ minus ZAN durch N²"

**Wichtig:** Die Reihenfolge im Zähler ist entscheidend! $f'g - fg'$ ist NICHT das Gleiche wie $fg' - f'g$.`,
      },
      {
        id: 'abl-2-2-s2', type: 'explanation-formal', title: 'Beispiele',
        content: `**Quotientenregel:**
$$\\left(\\frac{f}{g}\\right)' = \\frac{f' \\cdot g - f \\cdot g'}{g^2}$$

**Beispiel 1:** $f(x) = \\frac{x^2}{x+1}$
$$f'(x) = \\frac{2x \\cdot (x+1) - x^2 \\cdot 1}{(x+1)^2} = \\frac{2x^2 + 2x - x^2}{(x+1)^2} = \\frac{x^2 + 2x}{(x+1)^2}$$

**Beispiel 2:** $f(x) = \\frac{e^x}{x}$
$$f'(x) = \\frac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\frac{e^x(x-1)}{x^2}$$

**Tipp:** Manchmal ist es einfacher, den Bruch als Produkt umzuschreiben und die Produktregel + Potenzregel zu nutzen:
$\\frac{1}{g} = g^{-1}$ und dann Kettenregel.`,
      },
      { id: 'abl-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-2-2-a' },
      { id: 'abl-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-2-2-b' },
      { id: 'abl-2-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-2-2-c' },
      { id: 'abl-2-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-abl-2-2-d' },
      { id: 'abl-2-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-2-2-mastery' },
    ],
  },
  {
    id: 'abl-2-3', unitId: 'abl-unit-2',
    title: 'Kettenregel — Schritt für Schritt',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Kettenregel sicher anwenden', 'Innere und äußere Funktion identifizieren', 'Mehrfach verkettete Funktionen ableiten'],
    prerequisites: [],
    nextLessonId: 'abl-2-4',
    steps: [
      {
        id: 'abl-2-3-s1', type: 'explanation-intuitive', title: 'Äußere mal innere Ableitung',
        content: `Die Kettenregel hast du in Unit 1 schon kennengelernt. Hier vertiefen wir sie — denn sie ist die **wichtigste** und **häufigste** Ableitungsregel in Klausuren!

**Wann Kettenregel?** Immer wenn eine Funktion "in einer anderen steckt":
- $\\sin(\\underbrace{3x^2}_{\\text{innere}})$ → äußere: $\\sin$, innere: $3x^2$
- $e^{\\underbrace{x^2+1}_{\\text{innere}}}$ → äußere: $e^u$, innere: $x^2+1$
- $(\\underbrace{2x-5}_{\\text{innere}})^7$ → äußere: $u^7$, innere: $2x-5$

**Schritt-für-Schritt-Rezept:**

1. **Identifiziere** äußere und innere Funktion
2. **Äußere ableiten**, innere "stehen lassen"
3. **Multiplizieren** mit der Ableitung der inneren Funktion

$$[f(g(x))]' = \\underbrace{f'(g(x))}_{\\text{äußere abgeleitet}} \\cdot \\underbrace{g'(x)}_{\\text{innere abgeleitet}}$$

**Merksatz:** "Äußere Ableitung mal innere Ableitung"`,
      },
      {
        id: 'abl-2-3-s2', type: 'explanation-formal', title: 'Beispiele und doppelte Kettenregel',
        content: `**Kettenregel:**
$$[f(g(x))]' = f'(g(x)) \\cdot g'(x)$$

**Beispiel 1:** $h(x) = \\cos(x^3)$
- Äußere: $\\cos(u) \\to -\\sin(u)$
- Innere: $x^3 \\to 3x^2$
- $h'(x) = -\\sin(x^3) \\cdot 3x^2 = -3x^2 \\sin(x^3)$

**Beispiel 2:** $h(x) = \\sqrt{1 + x^2} = (1+x^2)^{1/2}$
- Äußere: $u^{1/2} \\to \\frac{1}{2}u^{-1/2}$
- Innere: $1+x^2 \\to 2x$
- $h'(x) = \\frac{1}{2}(1+x^2)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{1+x^2}}$

**Doppelte Kettenregel** (drei Schichten):
$h(x) = e^{\\sin(2x)}$
- Äußerste: $e^u \\to e^u$
- Mittlere: $\\sin(v) \\to \\cos(v)$
- Innerste: $2x \\to 2$
- $h'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2$`,
      },
      { id: 'abl-2-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-2-3-a' },
      { id: 'abl-2-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-2-3-b' },
      { id: 'abl-2-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-2-3-c' },
      { id: 'abl-2-3-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-abl-2-3-d' },
      { id: 'abl-2-3-s7', type: 'exercise', title: 'Aufgabe 5 — Zahleneingabe', exerciseRef: 'ex-abl-2-3-e' },
      { id: 'abl-2-3-s8', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-2-3-mastery' },
    ],
  },
  {
    id: 'abl-2-4', unitId: 'abl-unit-2',
    title: 'Gemischte Regeln',
    order: 4, estimatedMinutes: 18,
    learningGoals: ['Alle Ableitungsregeln kombiniert anwenden', 'Komplexere Funktionen sicher ableiten'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'abl-2-4-s1', type: 'explanation-formal', title: 'Strategie: Welche Regel zuerst?',
        content: `In Klausuren kommen fast immer Funktionen, die **mehrere Regeln gleichzeitig** erfordern. Die Frage ist: **Welche Regel wende ich zuerst an?**

**Strategie:** Schaue die **äußerste Verknüpfung** an:

| Äußerste Struktur | Regel |
|---|---|
| $f(x) \\cdot g(x)$ (Produkt) | **Produktregel** zuerst |
| $\\frac{f(x)}{g(x)}$ (Quotient) | **Quotientenregel** zuerst |
| $f(g(x))$ (Verkettung) | **Kettenregel** zuerst |

Innerhalb der Regel brauchst du dann oft **weitere Regeln** für die einzelnen Teile.

**Beispiel:** $h(x) = x^2 \\cdot e^{\\sin(x)}$

1. Äußerste Struktur: **Produkt** → Produktregel
2. Für $(e^{\\sin(x)})'$: **Kettenregel** (doppelt!)

$h'(x) = 2x \\cdot e^{\\sin(x)} + x^2 \\cdot e^{\\sin(x)} \\cdot \\cos(x)$
$= x \\cdot e^{\\sin(x)} \\cdot (2 + x\\cos(x))$`,
      },
      { id: 'abl-2-4-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-2-4-a' },
      { id: 'abl-2-4-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-2-4-b' },
      { id: 'abl-2-4-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-2-4-c' },
      { id: 'abl-2-4-s5', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-abl-2-4-d' },
      { id: 'abl-2-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-2-4-mastery' },
    ],
  },
]

export const abl_unit2 = {
  id: 'abl-unit-2',
  title: 'Ableitungsregeln im Detail',
  order: 2,
  description: 'Produktregel, Quotientenregel, Kettenregel vertieft, gemischte Aufgaben',
  lessons: lessons_abl_u2,
  exercises: exercises_abl_u2,
}
