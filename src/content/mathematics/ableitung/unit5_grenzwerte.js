import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

export const abl_unit5 = makeUnit({
  id: 'abl-unit-5',
  title: 'Grenzwerte und Stetigkeit',
  order: 4,
  unitGoals: [
    'Grenzwerte rechnerisch durch Umformen, Faktorisieren und Kürzen ermitteln',
    'L\'Hôpital bei unbestimmten Ausdrücken $0/0$ und $\\infty/\\infty$ anwenden',
    'Stetigkeit an einer Stelle prüfen: links-, rechts- und Funktionswert müssen übereinstimmen',
    'Unstetigkeitsstellen klassifizieren (hebbar / Sprung / Pol)',
  ],
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
        'Mit $u = 3x$: $\\lim_{x\\to 0} 3\\cdot\\frac{\\sin(3x)}{3x} = 3 \\cdot 1 = 3$.',
      ],
      masteryWrongAnswerExplanations: {
        1: 'Der Standardgrenzwert $\\lim_{u\\to 0}\\sin(u)/u = 1$ wurde direkt übernommen, ohne den Innenfaktor $3$ zu berücksichtigen. Hier ist das Argument $3x$, der Nenner nur $x$ — der Faktor $3$ muss herausgezogen werden: Ergebnis $3\\cdot 1 = 3$.',
        2: 'Das wäre richtig, wenn man $\\sin(3x)$ als $0$ ignorierte. Aber der Grenzwert $\\sin(3x)/x$ entspricht der Steigung von $\\sin$ bei 0, skaliert mit $3$ — also endlicher Wert, nicht null.',
        3: 'Der Grenzwert existiert sehr wohl: Taylor-Reihe $\\sin(3x) = 3x - (3x)^3/6 + \\ldots$, geteilt durch $x$ ergibt $3 - 9x^2/2 + \\ldots \\to 3$ für $x\\to 0$.',
      },
      exercises: [
        {
          id: 'ex-abl-5-1-a',
          type: 'multiple-choice',
          question: 'Welche Voraussetzung muss erfüllt sein, damit die Regel von L\'Hôpital direkt anwendbar ist?',
          options: [
            'Der Grenzwert ergibt einen unbestimmten Ausdruck $0/0$ oder $\\infty/\\infty$',
            'Der Grenzwert existiert in jedem Fall',
            'Zähler und Nenner müssen differenzierbar bei $a$ sein — sonst Abbruch',
            'Der Nenner muss positiv sein',
          ],
          correctIndex: 0,
          explanation: `**Ansatz:** L'Hôpital ist ein Werkzeug für **unbestimmte Formen** — ohne solche Form kein Anspruch auf die Regel.

**Rechnung:** Anwendbar, wenn $\\lim \\frac{f(x)}{g(x)}$ formal $\\frac{0}{0}$ oder $\\frac{\\pm\\infty}{\\pm\\infty}$ ergibt. Weitere Voraussetzung: $f, g$ differenzierbar in einer Umgebung von $a$, und $\\lim \\frac{f'(x)}{g'(x)}$ existiert.

**Probe:** Bei $\\lim_{x\\to 0} \\frac{\\sin x}{x}$: oben $0$, unten $0$ → unbestimmt → L'Hôpital liefert $\\lim \\frac{\\cos x}{1} = 1$. ✓

**Typischer Fehler:** L'Hôpital auch bei bestimmten Formen ($\\frac{5}{3}$) anwenden — dort liefert die Regel Unsinn und ist unnötig.`,
          wrongAnswerExplanations: {
            1: 'L\'Hôpital garantiert nicht die Existenz des Grenzwerts — sie überträgt nur die Aufgabe auf $\\lim f\'/g\'$. Dieser Grenzwert könnte ebenfalls nicht existieren. Voraussetzung ist die *unbestimmte Form* $0/0$ oder $\\infty/\\infty$.',
            2: 'Differenzierbarkeit ist zwar nötig, aber nicht hinreichend. Ohne unbestimmte Form ($0/0$ etc.) liefert L\'Hôpital falsche Ergebnisse — z.B. $\\lim_{x\\to 0}\\frac{x+1}{x+2} = 1/2$, aber $\\lim \\frac{1}{1} = 1$.',
            3: 'Das Vorzeichen des Nenners ist irrelevant. Die Regel gilt für beliebige Vorzeichen, solange die unbestimmte Form vorliegt.',
          },
          hints: [
            'Wann greift L\'Hôpital überhaupt ein?',
            'Bei direktem Einsetzen: welcher Ausdruck muss rauskommen?',
            'Nur bei $0/0$ oder $\\infty/\\infty$.',
          ],
        },
        {
          id: 'ex-abl-5-1-b',
          type: 'number-input',
          question: 'Berechne $\\lim_{x \\to 0} \\dfrac{e^{x} - 1 - x}{x^{2}}$ mit zweifacher Anwendung von L\'Hôpital.',
          correctValue: 0.5,
          tolerance: 0.001,
          unit: '',
          explanation: `**Ansatz:** Einsetzen liefert $\\frac{0}{0}$ (beide Terme null). L'Hôpital anwenden.

**Rechnung:**
Erste Ableitung: $\\lim_{x\\to 0} \\dfrac{e^{x} - 1}{2x}$. Wieder $\\frac{0}{0}$.
Zweite Ableitung: $\\lim_{x\\to 0} \\dfrac{e^{x}}{2} = \\dfrac{1}{2}$.

**Probe (Taylor-Reihe):** $e^{x} = 1 + x + \\frac{x^{2}}{2} + O(x^{3})$, also $e^{x} - 1 - x = \\frac{x^{2}}{2} + O(x^{3})$. Geteilt durch $x^{2}$: $\\frac{1}{2}$. ✓

**Typischer Fehler:** Nach der ersten Anwendung aufhören und $\\frac{0}{0}$ als Ergebnis hinschreiben — man muss L'Hôpital wiederholen, bis ein bestimmter Ausdruck herauskommt.`,
          hints: [
            'Einsetzen bei $x = 0$: $e^{0} - 1 - 0 = 0$ oben, $0$ unten → unbestimmt.',
            'Erste Ableitung oben: $e^{x} - 1$; unten: $2x$. Immer noch $0/0$.',
            'Zweite Ableitung oben: $e^{x}$ (bei $x=0$: $1$); unten: $2$. Grenzwert $1/2$.',
          ],
        },
        {
          id: 'ex-abl-5-1-c',
          type: 'true-false',
          statement: 'Der Grenzwert $\\lim_{x \\to \\infty} \\dfrac{x}{e^{x}}$ kann mit L\'Hôpital berechnet werden und ergibt $0$.',
          correct: true,
          explanation: `**Ansatz:** Form $\\frac{\\infty}{\\infty}$ bei $x \\to \\infty$ — L'Hôpital anwendbar.

**Rechnung:** $\\lim \\frac{x}{e^{x}} \\stackrel{L'H}{=} \\lim \\frac{1}{e^{x}} = 0$ (da $e^{x} \\to \\infty$).

**Probe:** Wachstumshierarchie: $e^{x}$ wächst schneller als jedes Polynom. Daher schrumpft $\\frac{x}{e^{x}}$ gegen $0$.

**Typischer Fehler:** Denken, $\\frac{\\infty}{\\infty}$ wäre „unbestimmt = existiert nicht". Tatsächlich ist genau das die Klasse, wo L'Hôpital die Sache auflöst.`,
          hints: [
            'Form bei $x \\to \\infty$: Zähler und Nenner — was passiert?',
            '$\\infty / \\infty$ ist unbestimmt → L\'Hôpital.',
            'Ableiten: oben $1$, unten $e^{x}$ → Grenzwert $1/\\infty = 0$.',
          ],
        },
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
        'Hebbare Unstetigkeit: $\\lim_{x\\to a} f(x)$ existiert, $f(a)$ fehlt oder weicht ab.',
      ],
      masteryWrongAnswerExplanations: {
        1: 'Das ist die Definition einer *Sprungstelle*: links- und rechtsseitiger Grenzwert existieren, stimmen aber nicht überein. Sprungstellen sind *nicht* hebbar — kein einzelner Wert kann die Funktion dort stetig machen.',
        2: 'Das beschreibt eine *Polstelle* ($|f| \\to \\infty$). Auch Pole sind nicht hebbar, da kein endlicher Grenzwert existiert. Hebbar: endlicher Grenzwert bei falschem/fehlendem $f(a)$.',
        3: 'Differenzierbarkeit impliziert Stetigkeit — eine Funktion kann nicht gleichzeitig differenzierbar und unstetig sein. Diese Antwortoption ist logisch widersprüchlich.',
      },
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
