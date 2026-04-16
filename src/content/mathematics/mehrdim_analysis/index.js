import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'mdim-unit-1',
  title: 'Partielle Ableitungen & Gradient',
  order: 1,
  lessons: [
    makeLesson({
      id: 'mdim-1-1',
      title: 'Partielle Ableitung verstehen',
      estimatedMinutes: 14,
      learningGoals: [
        'Funktionen mehrerer Variablen verstehen',
        'Partielle Ableitung ∂f/∂x, ∂f/∂y berechnen',
        'Gradient als Vektor interpretieren',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Eine Richtung nach der anderen',
      intuitionContent:
        'Bei einer Funktion $f(x,y)$ von **zwei** Variablen fragt man: Wie stark ändert sich $f$, wenn ich **nur x** ändere (und y konstant halte)? ' +
        'Das ist die partielle Ableitung $\\partial f/\\partial x$. Analog für $y$.\n\n' +
        'Alltags-Analogie: Ein Berg als Funktion von Nord-Süd- und Ost-West-Position. ' +
        '$\\partial f/\\partial x$ = Steigung in Ost-Richtung, $\\partial f/\\partial y$ = Steigung in Nord-Richtung.',
      formulaTitle: 'Partielle Ableitungen + Gradient',
      formulaContent:
        '**Partielle Ableitungen** (alle anderen Variablen als Konstanten behandeln):\n' +
        '$$\\frac{\\partial f}{\\partial x}, \\quad \\frac{\\partial f}{\\partial y}$$\n\n' +
        '**Gradient-Vektor:**\n' +
        '$$\\nabla f = \\begin{pmatrix} \\partial f/\\partial x \\\\ \\partial f/\\partial y \\end{pmatrix}$$\n\n' +
        'Der Gradient zeigt in die Richtung des **steilsten Anstiegs**. Sein Betrag gibt die maximale Steigung an.',
      masteryQuestion: 'Für $f(x,y) = x^2 + 3y$: Was ist $\\partial f/\\partial x$?',
      masteryOptions: ['$2x$', '$2x + 3$', '$3$', '$x^2$'],
      correctIndex: 0,
      masteryExplanation:
        '$y$ wird als Konstante behandelt. $3y$ differenziert nach $x$ ergibt $0$. Bleibt $\\partial/\\partial x (x^2) = 2x$.',
      masteryHints: ['y wie eine Konstante behandeln.', 'Potenzregel auf x² anwenden.'],
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => x * x + 3, color: '#3b82f6', label: 'f(x,1) = x²+3 (y=1 fix)' },
            { fn: (x) => 2 * x, color: '#ef4444', label: '∂f/∂x = 2x (Steigung)' },
          ],
          xRange: [-3, 3],
          yRange: [-2, 10],
          showGrid: true,
        },
        caption: 'Schnitt bei y=1: Steigung = ∂f/∂x = 2x',
        alt: 'Graph von f(x,y)=x²+3y bei festem y=1 und partielle Ableitung 2x',
      },
      nextLessonId: 'mdim-1-2',
    }),
    makeLesson({
      id: 'mdim-1-2',
      title: 'Hesse-Matrix und Lagrange-Multiplikatoren',
      estimatedMinutes: 16,
      learningGoals: [
        'Hesse-Matrix aufstellen und Extrema in 2D klassifizieren',
        'Lagrange-Multiplikatoren bei einer Nebenbedingung anwenden',
        'Sattel- von Extrempunkten unterscheiden',
      ],
      createdAt: '2026-04-15',
      intuitionTitle: 'Krümmung entscheidet — Einschränkung erzwingt',
      intuitionContent:
        '**Extrema in 2D:** Wo der Gradient null ist ($\\nabla f = \\mathbf{0}$), liegt ein kritischer Punkt. ' +
        'Die **Hesse-Matrix** der zweiten Ableitungen bestimmt, ob es ein Minimum, Maximum oder Sattelpunkt ist — ' +
        'analog zur zweiten Ableitung in 1D.\n\n' +
        '**Optimierung mit Nebenbedingung** $g(x,y) = 0$: Im Extremum sind $\\nabla f$ und $\\nabla g$ parallel: ' +
        '$\\nabla f = \\lambda\\,\\nabla g$. Den Faktor $\\lambda$ nennt man **Lagrange-Multiplikator**. ' +
        'Beispiel: maximale Rechteckfläche bei festem Umfang.',
      formulaTitle: 'Hesse-Matrix & Lagrange-Ansatz',
      formulaContent:
        '**Hesse-Matrix** (symmetrisch):\n' +
        '$$H = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{pmatrix}$$\n\n' +
        'Klassifikation bei $\\nabla f = \\mathbf{0}$:\n' +
        '- $\\det(H) > 0$, $f_{xx} > 0$: lokales **Minimum**\n' +
        '- $\\det(H) > 0$, $f_{xx} < 0$: lokales **Maximum**\n' +
        '- $\\det(H) < 0$: **Sattelpunkt**\n\n' +
        '**Lagrange-Ansatz** (Nebenbedingung $g(x,y) = 0$):\n' +
        '$$\\nabla f = \\lambda\\,\\nabla g \\quad \\text{und} \\quad g(x,y) = 0 \\quad \\Rightarrow \\text{ LGS lösen}$$',
      masteryQuestion:
        'Für $f(x,y) = x^2 + y^2$ ist $H = \\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}$ bei $(0,0)$. Klassifikation?',
      masteryOptions: [
        'Minimum ($\\det H > 0$, $f_{xx} > 0$)',
        'Maximum ($\\det H > 0$, $f_{xx} < 0$)',
        'Sattelpunkt ($\\det H < 0$)',
        'Nicht klassifizierbar',
      ],
      correctIndex: 0,
      masteryExplanation:
        '$\\det(H) = 2\\cdot 2 - 0^2 = 4 > 0$ und $f_{xx} = 2 > 0$: lokales Minimum. ' +
        'Tatsächlich ist $(0,0)$ das globale Minimum von $f(x,y) = x^2 + y^2$.',
      masteryHints: [
        '$\\det(H) = f_{xx}f_{yy} - f_{xy}^2$.',
        'Positives $\\det(H)$: Vorzeichen von $f_{xx}$ entscheidet zwischen Min und Max.',
      ],
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'f(x,0)=x² (Schnitt y=0)' },
          ],
          xRange: [-3, 3],
          yRange: [-1, 9],
          showGrid: true,
        },
        caption: 'Schnitt bei y=0: f(x,0)=x² hat Minimum bei x=0',
        alt: 'Parabel x² als Schnitt durch das globale Minimum von f(x,y)=x²+y²',
      },
      prerequisites: ['mdim-1-1'],
      nextLessonId: 'mdim-pruefung-1',
    }),
  ],
})

const unit2 = makeUnit({
  id: 'mdim-unit-2',
  title: 'Prüfung',
  order: 2,
  lessons: [
    makeLesson({
      id: 'mdim-pruefung-1',
      title: 'Prüfung: Extrema, Fehlerfortpflanzung',
      estimatedMinutes: 25,
      isExam: true,
      learningGoals: [
        'Extrema 2D über $\\nabla f = 0$ + Hesse-Matrix klassifizieren',
        'Fehlerfortpflanzung mit totalem Differential rechnen',
        'Lagrange-Multiplikatoren bei Nebenbedingungen einsetzen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Prüfungs-Strategie',
      intuitionContent:
        '**Extrema:** $\\nabla f = 0$ → kritische Punkte. Hesse-Matrix an jedem Punkt auswerten. ' +
        'det(H)>0 und $f_{xx}$>0 → Minimum; det(H)>0 und $f_{xx}$<0 → Maximum; det(H)<0 → Sattel.\n\n' +
        '**Fehlerfortpflanzung:** bei $y = f(x_1, \\ldots)$ mit Messfehlern $\\Delta x_i$: ' +
        '$\\Delta y \\approx \\sum |f_{x_i}| \\cdot \\Delta x_i$ (Max-Abschätzung) oder Gauß-Quadratur.',
      formulaTitle: 'Merkformeln',
      formulaContent:
        '**Gradient/Hesse:**\n' +
        '$$\\nabla f = \\mathbf{0}, \\quad H = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{pmatrix}$$\n\n' +
        '**Totales Differential:**\n' +
        '$$df = f_x\\,dx + f_y\\,dy$$',
      masteryQuestion: '[PRÜFUNG] Für $f(x,y) = x^2 + y^2$: Welchen kritischen Punkt hat $f$?',
      masteryOptions: ['$(0,0)$ — Minimum', '$(0,0)$ — Sattel', 'keinen', '$(1,1)$ — Minimum'],
      correctIndex: 0,
      masteryExplanation:
        '$\\nabla f = (2x, 2y) = \\mathbf{0}$ nur bei $(0,0)$. Hesse = $\\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}$, det=4>0, $f_{xx}$=2>0 → Minimum.',
      masteryHints: ['Gradient null setzen.', 'Hesse-Determinante prüfen.'],
      prerequisites: ['mdim-1-2'],
      nextLessonId: null,
    }),
  ],
})

export const mehrdimAnalysisTopic = {
  id: 'mehrdim-analysis',
  title: 'Mehrdim. Analysis',
  description: 'Partielle Ableitungen, Gradient, Extrema, Mehrfachintegrale — ab 2. Semester zentral',
  subject: 'mathematics',
  icon: '∇',
  color: 'indigo',
  estimatedHours: 4,
  difficulty: 4,
  level: 'vertiefung',
  units: [unit1, unit2],
  prerequisites: ['ableitung', 'integralrechnung', 'vektoren'],
}
