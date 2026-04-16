import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'rf-unit-1',
  title: 'Folgen, Reihen & Konvergenz',
  order: 1,
  lessons: [
    makeLesson({
      id: 'rf-1-1',
      title: 'Folgen und Grenzwerte',
      estimatedMinutes: 12,
      learningGoals: [
        'Folgen als Funktionen $\\mathbb{N} \\to \\mathbb{R}$ verstehen',
        'Konvergenz und Grenzwert definieren',
        'Monotonie und Beschränktheit prüfen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Eine Folge nähert sich einem Wert an',
      intuitionContent:
        'Eine **Folge** $(a_n)$ ist eine unendliche Liste von Zahlen: $a_1, a_2, a_3, \\ldots$ ' +
        'Sie heißt **konvergent** mit Grenzwert $L$, wenn die Folgenglieder für große $n$ beliebig nah an $L$ liegen.\n\n' +
        'Analogie: Ein Auto nähert sich einer Mauer — irgendwann ist der Abstand kleiner als jede beliebige Toleranz.',
      formulaTitle: 'Grenzwert-Definition',
      formulaContent:
        '$$\\lim_{n\\to\\infty} a_n = L \\iff \\forall \\varepsilon > 0 \\; \\exists N : |a_n - L| < \\varepsilon \\; \\forall n \\geq N$$\n\n' +
        '**Monoton + beschränkt ⇒ konvergent** (wichtiges Kriterium ohne Grenzwert zu kennen).',
      masteryQuestion: 'Welchen Grenzwert hat $a_n = \\frac{1}{n}$?',
      masteryOptions: ['0', '1', '∞', 'existiert nicht'],
      correctIndex: 0,
      masteryExplanation: '$1/n$ wird für große $n$ beliebig klein, also $\\lim_{n\\to\\infty} 1/n = 0$.',
      masteryHints: ['Werte einsetzen: 1, 1/2, 1/3, 1/4, ...'],
      masteryVisualization: {
        id: 'number-line',
        params: {
          range: [-0.1, 1.2],
          step: 0.2,
          marks: [
            { value: 1, label: 'a₁=1', filled: true },
            { value: 0.5, label: 'a₂=½', filled: true },
            { value: 0.333, label: 'a₃=⅓', filled: true },
            { value: 0.25, label: 'a₄=¼', filled: true },
            { value: 0, label: 'L=0', filled: false },
          ],
        },
        caption: 'Folge 1/n nähert sich dem Grenzwert 0',
        alt: 'Zahlenstrahl mit den ersten Folgegliedern 1/n, die sich 0 nähern',
      },
      nextLessonId: 'rf-1-2',
    }),
    makeLesson({
      id: 'rf-1-2',
      title: 'Taylor-Polynome',
      estimatedMinutes: 14,
      learningGoals: [
        'Taylor-Polynom vom Grad $n$ um einen Entwicklungspunkt $x_0$ aufstellen',
        'Taylorentwicklung für $e^x$, $\\sin x$, $\\cos x$ kennen',
        'Restglied nach Lagrange abschätzen',
      ],
      createdAt: '2026-04-15',
      intuitionTitle: 'Funktion durch Polynom ersetzen',
      intuitionContent:
        'Viele Funktionen lassen sich lokal durch ein Polynom annähern: $\\sin(x) \\approx x$ für kleine $x$. ' +
        'Ein **Taylor-Polynom** vom Grad $n$ nutzt die ersten $n$ Ableitungen an einem Punkt $x_0$, ' +
        'um die Funktion lokal zu approximieren. Je höher der Grad, desto besser die Näherung.\n\n' +
        'Beispiel: $e^x \\approx 1 + x + x^2/2 + x^3/6$ um $x_0 = 0$ (Grad 3). ' +
        'An der Stelle $x = 0{,}5$: $e^{0{,}5} \\approx 1{,}646$ (exakt: $1{,}6487$).',
      formulaTitle: 'Taylor-Polynom und Restglied',
      formulaContent:
        '$$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!}\\,(x - x_0)^k$$\n\n' +
        '**Wichtige Entwicklungen** um $x_0 = 0$:\n' +
        '$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$\n' +
        '$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots, \\qquad \\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$\n\n' +
        '**Restglied nach Lagrange:** $R_n(x) = \\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$ für ein $\\xi$ zwischen $x_0$ und $x$.',
      masteryQuestion: 'Taylor-Polynom 2. Grades von $f(x) = e^x$ um $x_0 = 0$?',
      masteryOptions: [
        '$1 + x + \\dfrac{x^2}{2}$',
        '$1 + x + x^2$',
        '$e + ex + ex^2$',
        '$x + \\dfrac{x^2}{2}$',
      ],
      correctIndex: 0,
      masteryExplanation:
        '$f(0) = 1$, $f\'(0) = 1$, $f\'\'(0) = 1$. Also $T_2(x) = \\frac{1}{0!} + \\frac{1}{1!}x + \\frac{1}{2!}x^2 = 1 + x + x^2/2$.',
      masteryHints: [
        'Ableitungen von $e^x$ sind alle wieder $e^x$.',
        'Bei $x_0 = 0$: alle $f^{(k)}(0) = 1$.',
      ],
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => Math.exp(x), color: '#3b82f6', label: 'eˣ (exakt)' },
            { fn: (x) => 1 + x + x * x / 2, color: '#ef4444', label: 'T₂ = 1+x+x²/2' },
            { fn: (x) => 1 + x + x * x / 2 + (x * x * x) / 6, color: '#22c55e', label: 'T₃ = T₂+x³/6' },
          ],
          xRange: [-2, 2],
          yRange: [-1, 8],
          showGrid: true,
        },
        caption: 'Taylor-Polynome T₂ und T₃ nähern sich eˣ um x₀=0 an',
        alt: 'Graph von eˣ mit Taylor-Polynomen Grad 2 und 3',
      },
      prerequisites: ['rf-1-1'],
      nextLessonId: 'rf-pruefung-1',
    }),
  ],
})

const unit2 = makeUnit({
  id: 'rf-unit-2',
  title: 'Prüfung',
  order: 2,
  lessons: [
    makeLesson({
      id: 'rf-pruefung-1',
      title: 'Prüfung: Taylor, Konvergenz, Restglied',
      estimatedMinutes: 20,
      isExam: true,
      learningGoals: [
        'Konvergenz mit passenden Kriterien prüfen',
        'Taylorentwicklung einer Funktion aufstellen',
        'Restglied abschätzen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Prüfungs-Strategie',
      intuitionContent:
        '**Gegeben/Gesucht:** Welche Reihe? Wird Konvergenz, Grenzwert oder Approximation gesucht?\n\n' +
        '**Verfahrenswahl:**\n- Geometrische Reihe → $|q|<1$ und $\\sum q^n = 1/(1-q)$\n' +
        '- Quotientenkriterium für allgemeine Reihen\n' +
        '- Taylor: Ableitungen an Entwicklungspunkt, Koeffizient $f^{(n)}(x_0)/n!$\n\n' +
        '**Kontrolle:** Konvergenzradius testen, Restglied mit Lagrange abschätzen.',
      formulaTitle: 'Taylor-Reihe',
      formulaContent:
        '$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(x_0)}{n!} (x-x_0)^n$$\n\n' +
        'Wichtige Reihen um $x_0=0$:\n' +
        '- $e^x = \\sum x^n/n!$\n' +
        '- $\\sin x = x - x^3/6 + x^5/120 - \\ldots$\n' +
        '- $\\cos x = 1 - x^2/2 + x^4/24 - \\ldots$\n' +
        '- $\\ln(1+x) = x - x^2/2 + x^3/3 - \\ldots \\; (|x|<1)$',
      visualization: {
        visualizationId: 'taylor-approx',
        title: 'Taylor-Näherung — Grad variieren',
      },
      masteryQuestion: '[PRÜFUNG] Grenzwert der geometrischen Reihe $\\sum_{n=0}^\\infty (1/3)^n$?',
      masteryOptions: ['$3/2$', '$1/3$', '$2/3$', 'divergiert'],
      correctIndex: 0,
      masteryExplanation: '$\\sum q^n = 1/(1-q)$ für $|q|<1$. Hier $q = 1/3$, also $1/(1-1/3) = 1/(2/3) = 3/2$.',
      masteryHints: ['Geometrische Reihe: Summe = 1/(1−q).', 'q = 1/3 einsetzen.'],
      prerequisites: ['rf-1-2'],
      nextLessonId: null,
    }),
  ],
})

export const reihenFolgenTopic = {
  id: 'reihen-folgen',
  title: 'Reihen & Folgen',
  description: 'Konvergenz, Potenzreihen, Taylor — essenziell für Analysis und Approximationen',
  subject: 'mathematics',
  icon: 'Σ',
  color: 'teal',
  estimatedHours: 2,
  difficulty: 3,
  level: 'vertiefung',
  units: [unit1, unit2],
  prerequisites: ['ableitung', 'integralrechnung'],
}
