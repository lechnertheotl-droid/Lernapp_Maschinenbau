import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

export const abl_unit5 = makeUnit({
  id: 'abl-unit-5',
  title: 'Grenzwerte und Stetigkeit',
  order: 4,
  lessons: [
    makeLesson({
      id: 'abl-5-1',
      title: 'Grenzwerte von Funktionen',
      estimatedMinutes: 14,
      learningGoals: [
        'Grenzwert $\\lim_{x \\to a} f(x)$ intuitiv und formal verstehen',
        'Links- und rechtsseitigen Grenzwert unterscheiden',
        'Wichtige Grenzwerte berechnen: $\\lim_{x \\to 0} \\frac{\\sin x}{x}$, $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$',
        'Regel von L\'Hôpital bei $0/0$- und $\\infty/\\infty$-Typen anwenden',
      ],
      createdAt: '2026-04-15',
      intuitionTitle: 'Wie verhält sich die Funktion in der Nähe?',
      intuitionContent:
        'Der **Grenzwert** $\\lim_{x \\to a} f(x) = L$ fragt: Gegen welchen Wert strebt $f(x)$, ' +
        'wenn $x$ immer näher an $a$ heranrückt (ohne $a$ selbst zu erreichen)? ' +
        'Entscheidend ist das Verhalten **nahe** $a$, nicht der Funktionswert in $a$.\n\n' +
        'Beispiel: $f(x) = \\frac{x^2 - 4}{x - 2}$ ist bei $x = 2$ nicht definiert (Division durch 0), ' +
        'aber $\\lim_{x \\to 2} \\frac{x^2-4}{x-2} = \\lim_{x \\to 2}(x+2) = 4$.',
      formulaTitle: 'Grenzwertregeln und L\'Hôpital',
      formulaContent:
        '**Grenzwertregeln** (falls beide Grenzwerte existieren):\n' +
        '$$\\lim(f \\pm g) = \\lim f \\pm \\lim g, \\quad \\lim(f \\cdot g) = \\lim f \\cdot \\lim g, \\quad \\lim\\frac{f}{g} = \\frac{\\lim f}{\\lim g} \\text{ (falls } \\lim g \\neq 0\\text{)}$$\n\n' +
        '**Wichtige Grenzwerte:**\n' +
        '$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\qquad \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1, \\qquad \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$\n\n' +
        '**Regel von L\'Hôpital** (bei unbestimmten Ausdrücken $0/0$ oder $\\infty/\\infty$):\n' +
        '$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$$',
      masteryQuestion: 'Was ist $\\lim_{x \\to 0} \\dfrac{\\sin(3x)}{x}$?',
      masteryOptions: ['$3$', '$1$', '$0$', 'existiert nicht'],
      correctIndex: 0,
      masteryExplanation:
        '$\\frac{\\sin(3x)}{x} = 3 \\cdot \\frac{\\sin(3x)}{3x} \\to 3 \\cdot 1 = 3$ ' +
        '(wegen $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$ mit $u = 3x$).',
      masteryHints: [
        '$\\frac{\\sin(3x)}{x} = 3 \\cdot \\frac{\\sin(3x)}{3x}$ — Faktor 3 ausklammern.',
        'Standardgrenzwert: $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$.',
      ],
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => (Math.abs(x) < 1e-9 ? 3 : Math.sin(3 * x) / x), color: '#3b82f6', label: 'sin(3x)/x' },
          ],
          xRange: [-3, 3],
          yRange: [-1.5, 3.5],
          showGrid: true,
        },
        caption: 'sin(3x)/x nähert sich dem Grenzwert 3 für x→0',
        alt: 'Graph von sin(3x)/x mit Grenzwert 3 bei x=0',
      },
      nextLessonId: 'abl-5-2',
    }),
    makeLesson({
      id: 'abl-5-2',
      title: 'Stetigkeit von Funktionen',
      estimatedMinutes: 12,
      learningGoals: [
        'Stetigkeit an einem Punkt und auf einem Intervall definieren',
        'Sprungstellen, hebbare Unstetigkeiten und Polstellen unterscheiden',
        'Zwischenwertsatz anwenden',
      ],
      createdAt: '2026-04-15',
      intuitionTitle: 'Ohne Sprung zeichenbar',
      intuitionContent:
        'Eine Funktion $f$ heißt **stetig** an der Stelle $a$, wenn der Grenzwert existiert und gleich dem Funktionswert ist:\n\n' +
        '$$\\lim_{x \\to a} f(x) = f(a)$$\n\n' +
        'Intuitiv: Der Graph kann an der Stelle $a$ ohne Stiftabsetzen gezeichnet werden. ' +
        'Klassische Unstetigkeiten: **Sprung** (links- und rechtsseitiger Grenzwert verschieden), ' +
        '**hebbare Lücke** (Grenzwert existiert, aber Funktionswert fehlt oder weicht ab), ' +
        '**Pol** ($f(x) \\to \\pm\\infty$).',
      formulaTitle: 'Stetigkeitsdefinition und Zwischenwertsatz',
      formulaContent:
        '**Stetigkeit in $a$:**\n' +
        '$$f \\text{ stetig in } a \\iff \\lim_{x \\to a} f(x) = f(a)$$\n\n' +
        '**Arten von Unstetigkeiten:**\n' +
        '- Hebbare Unstetigkeit: $\\lim_{x\\to a} f(x)$ existiert, aber $f(a) \\neq \\lim f$ (oder $f(a)$ undefiniert)\n' +
        '- Sprungstelle: $\\lim_{x\\to a^-} f(x) \\neq \\lim_{x\\to a^+} f(x)$\n' +
        '- Polstelle: $|f(x)| \\to \\infty$\n\n' +
        '**Zwischenwertsatz:** Ist $f$ stetig auf $[a,b]$ und liegt $y_0$ zwischen $f(a)$ und $f(b)$, ' +
        'dann existiert ein $c \\in (a,b)$ mit $f(c) = y_0$. ' +
        '**Folgerung:** Stetige Funktionen lassen keine Werte aus.',
      masteryQuestion: 'Welche Aussage beschreibt eine **hebbare** Unstetigkeit bei $x = a$?',
      masteryOptions: [
        '$\\lim_{x \\to a} f(x)$ existiert, aber $f(a)$ ist undefiniert oder $\\neq \\lim$',
        '$\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$',
        '$|f(x)| \\to \\infty$ für $x \\to a$',
        '$f$ ist in $a$ differenzierbar, aber nicht stetig',
      ],
      correctIndex: 0,
      masteryExplanation:
        'Eine hebbare Unstetigkeit liegt vor, wenn der beidseitige Grenzwert existiert, ' +
        'aber der Funktionswert nicht oder anders definiert ist — z.B. $f(x) = \\sin(x)/x$ bei $x=0$: ' +
        'Grenzwert 1, aber $f(0)$ undefiniert. Durch Setzen $f(0) := 1$ wird die Lücke „geheilt".',
      masteryHints: [
        '„Hebbar" = man kann die Unstetigkeit durch Umdefinieren eines Punktes beheben.',
        'Bei Sprungstellen ist der Grenzwert nicht eindeutig — nicht hebbar.',
      ],
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            {
              fn: (x) => (Math.abs(x) < 1e-9 ? NaN : Math.sin(x) / x),
              color: '#3b82f6',
              label: 'sin(x)/x (Lücke bei x=0)',
            },
          ],
          xRange: [-6, 6],
          yRange: [-0.5, 1.2],
          showGrid: true,
        },
        caption: 'sin(x)/x: hebbare Unstetigkeit bei x=0 (Grenzwert=1, Wert undefiniert)',
        alt: 'Graph von sin(x)/x mit Lücke bei x=0',
      },
      prerequisites: ['abl-5-1'],
      nextLessonId: null,
    }),
  ],
})
