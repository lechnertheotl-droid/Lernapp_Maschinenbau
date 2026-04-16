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
      masteryHints: [
        'y wie eine Konstante behandeln.',
        'Potenzregel auf x² anwenden.',
        '$f(x,y)=x^2+3y$: Ableitung von $x^2$ nach $x$ ist $2x$, Term $3y$ verschwindet.',
      ],
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
        'Hier: $\\det=4>0$ und $f_{xx}=2>0$ → lokales Minimum.',
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
      masteryHints: [
        'Gradient null setzen.',
        'Hesse-Determinante prüfen.',
        '$(0,0)$: $H=\\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}$, $\\det=4>0$, $f_{xx}=2>0$ → Minimum.',
      ],
      prerequisites: ['mdim-1-2'],
      nextLessonId: 'mdim-pruefung-2',
    }),
    makeLesson({
      id: 'mdim-pruefung-2',
      title: 'Prüfung: Fehlerfortpflanzung & totales Differential',
      estimatedMinutes: 20,
      isExam: true,
      learningGoals: [
        '[PRÜFUNG] Totales Differential $df = f_x dx + f_y dy$ berechnen',
        '[PRÜFUNG] Maximale Fehlerabschätzung mit Teilfehlern',
        '[PRÜFUNG] Gauß\'sche Fehlerfortpflanzung anwenden',
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Wie pflanzen sich Messfehler fort?',
      intuitionContent:
        'Wenn $y = f(x_1, x_2, \\ldots)$ von fehlerbehafteten Messgrößen abhängt, ' +
        'pflanzt sich der Fehler gemäß dem **totalen Differential** fort:\n\n' +
        '$$\\Delta y \\approx \\left|\\frac{\\partial f}{\\partial x_1}\\right| \\Delta x_1 + \\left|\\frac{\\partial f}{\\partial x_2}\\right| \\Delta x_2 + \\cdots$$\n\n' +
        '**Gauß:** $\\Delta y = \\sqrt{\\left(\\frac{\\partial f}{\\partial x_1}\\Delta x_1\\right)^2 + \\left(\\frac{\\partial f}{\\partial x_2}\\Delta x_2\\right)^2 + \\cdots}$ (realistischer).',
      formulaTitle: 'Totales Differential & Fehlerformeln',
      formulaContent:
        '**Totales Differential:**\n' +
        '$$df = \\frac{\\partial f}{\\partial x}\\,dx + \\frac{\\partial f}{\\partial y}\\,dy$$\n\n' +
        '**Maximale Fehlerabschätzung:**\n' +
        '$$\\Delta z_{\\max} = \\left|f_x\\right|\\Delta x + \\left|f_y\\right|\\Delta y$$\n\n' +
        '**Gauß\'sche Fehlerfortpflanzung:**\n' +
        '$$\\Delta z_{\\text{Gauß}} = \\sqrt{(f_x \\Delta x)^2 + (f_y \\Delta y)^2}$$',
      masteryQuestion:
        '[PRÜFUNG] $z = x \\cdot y$, $x = 3 \\pm 0{,}1$, $y = 4 \\pm 0{,}2$. Maximaler absoluter Fehler $\\Delta z$?',
      masteryOptions: ['$1{,}0$', '$0{,}4$', '$0{,}6$', '$1{,}4$'],
      correctIndex: 0,
      masteryExplanation:
        '$\\partial z/\\partial x = y = 4$, $\\partial z/\\partial y = x = 3$. ' +
        '$\\Delta z = |4| \\cdot 0{,}1 + |3| \\cdot 0{,}2 = 0{,}4 + 0{,}6 = 1{,}0$.',
      masteryHints: [
        'Partielle Ableitungen: $z_x = y$, $z_y = x$.',
        'Maximale Fehlerabschätzung: $\\Delta z = |z_x|\\Delta x + |z_y|\\Delta y$.',
        '$|4| \\cdot 0{,}1 + |3| \\cdot 0{,}2 = 0{,}4 + 0{,}6 = 1{,}0$.',
      ],
      prerequisites: ['mdim-pruefung-1'],
      nextLessonId: 'mdim-pruefung-3',
    }),
    makeLesson({
      id: 'mdim-pruefung-3',
      title: 'Prüfung: Lagrange & Gesamtaufgaben',
      estimatedMinutes: 22,
      isExam: true,
      learningGoals: [
        '[PRÜFUNG] Lagrange-Multiplikatoren vollständig durchrechnen',
        '[PRÜFUNG] Typ des Extremums mit Hesse-Matrix bestimmen',
        '[PRÜFUNG] Gemischte Aufgaben aus partieller Ableitung, Extrema, Fehler',
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Gesamtstrategie für Prüfungsaufgaben',
      intuitionContent:
        '**Extrema ohne NB:** $\\nabla f = \\mathbf{0}$ → kritische Punkte → Hesse-Matrix auswerten.\n\n' +
        '**Extrema mit NB:** Lagrange-Ansatz $\\nabla f = \\lambda \\nabla g$, zusammen mit $g=0$ ein LGS lösen.\n\n' +
        '**Fehlerfortpflanzung:** Partielle Ableitungen berechnen, mit Messfehlern gewichten.',
      formulaTitle: 'Lagrange vollständig',
      formulaContent:
        '**Lagrange:** Zu maximieren/minimieren: $f(x,y)$ unter $g(x,y)=0$.\n\n' +
        '**Bedingungen:**\n' +
        '$$\\frac{\\partial f}{\\partial x} = \\lambda \\frac{\\partial g}{\\partial x}, \\quad ' +
        '\\frac{\\partial f}{\\partial y} = \\lambda \\frac{\\partial g}{\\partial y}, \\quad g(x,y) = 0$$\n\n' +
        '→ 3 Gleichungen für 3 Unbekannte $(x, y, \\lambda)$.\n\n' +
        '**Hesse-Kurztest:** $\\det(H) > 0$ und $f_{xx} > 0$: Minimum; $f_{xx} < 0$: Maximum; $\\det(H)<0$: Sattel.',
      masteryQuestion:
        '[PRÜFUNG] $f(x,y) = x^2 + y^2$ auf $x + y = 2$. Wo liegt das Minimum?',
      masteryOptions: ['$(1, 1)$', '$(2, 0)$', '$(0, 2)$', '$(0, 0)$'],
      correctIndex: 0,
      masteryExplanation:
        'Lagrange: $2x = \\lambda$, $2y = \\lambda$, $x+y=2$. Aus ersten zwei: $x = y$. ' +
        'Einsetzen: $2x = 2 \\Rightarrow x = y = 1$. Minimum bei $(1,1)$, $f(1,1) = 2$.',
      masteryHints: [
        'Lagrange-Bedingungen: $f_x = \\lambda g_x$, $f_y = \\lambda g_y$, $g = 0$.',
        'Aus $2x = \\lambda$ und $2y = \\lambda$ folgt $x = y$.',
        'Mit $x = y$ in $x + y = 2$ einsetzen: $2x = 2$, also $x = y = 1$.',
      ],
      prerequisites: ['mdim-pruefung-2'],
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
