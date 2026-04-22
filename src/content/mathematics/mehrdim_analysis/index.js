import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'mdim-unit-1',
  title: 'Partielle Ableitungen & Gradient',
  order: 1,
  unitGoals: [
    'Partielle Ableitung $\\partial f / \\partial x$ als „andere Variablen konstant halten" mechanisch durchführen',
    'Gradient $\\nabla f = (f_x, f_y, \\ldots)^T$ als Richtung des stärksten Anstiegs interpretieren',
    'Richtungsableitung über $\\nabla f \\cdot \\vec{e}$ (mit Einheitsvektor $\\vec{e}$) berechnen',
    'Hesse-Matrix aufstellen und mit Definitheitskriterium Max/Min/Sattel klassifizieren',
    'Totales Differential $df = f_x dx + f_y dy$ für Fehlerfortpflanzung anwenden',
  ],
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
      subGoals: [
        { label: 'Beim Ableiten nach einer Variable: alle anderen sind **Konstanten**', examRelevance: 'hoch' },
        { label: 'Schreibweisen $f_x$, $\\partial f/\\partial x$, $D_x f$ gleichwertig erkennen', examRelevance: 'mittel' },
        { label: 'Gradient $\\nabla f = (f_x, f_y)^T$ zeigt Richtung des steilsten Anstiegs', examRelevance: 'hoch' },
        { label: 'Gradient $\\perp$ Höhenlinie — Normale an Niveaumengen', examRelevance: 'hoch' },
        { label: 'Satz von Schwarz: $f_{xy} = f_{yx}$ (bei stetigen zweiten Ableitungen)', examRelevance: 'mittel' },
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
      exercises: [
        {
          type: 'multiple-choice',
          question: 'Was ist $\\partial/\\partial y$ von $f(x,y) = x^3 y^2$?',
          options: ['$2x^3 y$', '$3x^2 y^2$', '$x^3$', '$6x^2 y$'],
          correctIndex: 0,
          explanation: '$x^3$ wird als Konstante behandelt. $\\partial/\\partial y (y^2) = 2y$. Ergebnis: $x^3 \\cdot 2y = 2x^3 y$.',
          hints: ['$x$ ist konstant, wenn wir nach $y$ ableiten.', '$(y^2)\' = 2y$.', '$x^3$ bleibt als Faktor stehen.'],
          wrongAnswerExplanations: {
            '1': 'Hier wurde nach $x$ statt nach $y$ abgeleitet: $\\partial/\\partial x (x^3 y^2) = 3x^2 y^2$. Die Aufgabe verlangt $\\partial/\\partial y$, also $y$ als Variable und $x^3$ als Konstante.',
            '2': 'Der Faktor $y^2$ wurde gar nicht abgeleitet, stattdessen nur $x^3$ stehen gelassen. Bei $\\partial/\\partial y$ muss $y^2$ nach der Potenzregel zu $2y$ werden, also $x^3 \\cdot 2y$.',
            '3': 'Gemischte doppelte Ableitung $\\partial^2/(\\partial x \\partial y) = 6x^2 y$ statt einfacher partieller Ableitung. Gefragt ist nur $\\partial/\\partial y$, nicht $\\partial^2/(\\partial x \\partial y)$.',
          },
        },
        {
          type: 'number-input',
          question: 'Für $f(x,y) = x^2 + 2xy$ den Wert $\\partial f/\\partial x$ an $(3, 1)$.',
          correctValue: 8,
          tolerance: 0,
          unit: '',
          explanation: '$\\partial f/\\partial x = 2x + 2y$. An $(3,1)$: $2\\cdot 3 + 2\\cdot 1 = 8$.',
          hints: ['$y$ als Konstante.', 'Ableitung: $2x + 2y$.', 'Einsetzen: $6 + 2 = 8$.'],
        },
        {
          type: 'multiple-choice',
          question: 'Was ist der **Gradient** von $f(x,y) = x^2 + y^2$ am Punkt $(1, 2)$?',
          options: ['$(2, 4)$', '$(1, 2)$', '$(2, 2)$', '$(1, 4)$'],
          correctIndex: 0,
          explanation: '$\\nabla f = (2x, 2y)$. An $(1,2)$: $(2, 4)$.',
          hints: ['Gradient = Vektor der partiellen Ableitungen.', '$(2x, 2y)$ einsetzen.', 'Achtung: zuerst $x$, dann $y$.'],
          wrongAnswerExplanations: {
            '1': 'Die Ableitung wurde vergessen, stattdessen nur der Punkt $(1,2)$ eingetragen. Gradient ist der Vektor der partiellen Ableitungen $(2x, 2y)$, nicht $(x, y)$.',
            '2': 'Die $y$-Komponente ist falsch: $\\partial/\\partial y(y^2) = 2y$, an $y=2$ ergibt das $4$, nicht $2$. Typischer Flüchtigkeitsfehler durch Abschreiben vom ersten Eintrag.',
            '3': 'In der $x$-Komponente wurde die Ableitung vergessen und einfach $x=1$ eingesetzt. Richtig: $2x$ an $x=1$ ergibt $2$, nicht $1$.',
          },
        },
        {
          type: 'true-false',
          statement: 'Der Gradient $\\nabla f$ zeigt **entlang** der Niveaulinien von $f$.',
          correct: false,
          explanation:
            'Falsch — der Gradient zeigt **senkrecht** zu den Niveaulinien, in Richtung des steilsten Anstiegs. ' +
            'Entlang der Niveaulinie bleibt der Funktionswert konstant, die Ableitung in diese Richtung ist 0. ' +
            'Klassische Fangfrage.',
          hints: [
            'Auf einer Niveaulinie ändert sich $f$ nicht — welche Richtungsableitung hat das?',
            'Gradient und Niveaulinie stehen in welchem Winkel zueinander?',
            'Senkrecht. Nicht parallel.',
          ],
        },
        {
          type: 'number-input',
          question: 'Betrag des Gradienten von $f(x,y) = x^2 + y^2$ an $(3, 4)$.',
          correctValue: 10,
          tolerance: 0.01,
          unit: '',
          explanation: '$\\nabla f = (2x, 2y) = (6, 8)$. $|\\nabla f| = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          hints: ['$\\nabla f = (6, 8)$.', '$|\\nabla f| = \\sqrt{6^2 + 8^2}$.', '3-4-5-Tripel, skaliert.'],
        },
        {
          type: 'matching',
          question: 'Ordne jeder Funktion ihren Gradienten zu.',
          pairs: [
            { left: '$f = x + y$',     right: '$(1, 1)$' },
            { left: '$f = xy$',         right: '$(y, x)$' },
            { left: '$f = x^2 + y^2$',  right: '$(2x, 2y)$' },
            { left: '$f = e^x \\cdot y$', right: '$(e^x y, e^x)$' },
          ],
          explanation: 'Bei $xy$ vertauschen sich die Ableitungen: $\\partial/\\partial x = y$, $\\partial/\\partial y = x$.',
          hints: ['Partielle Ableitung jede Variable separat.', 'Bei $e^x \\cdot y$: Produktregel.'],
        },
        {
          type: 'multiple-choice',
          question: 'Ein **Höhenlinienbild** $f(x,y) = $ const zeigt Niveaulinien. Wie steht $\\nabla f$ zur Niveaulinie?',
          options: ['Senkrecht (orthogonal)', 'Parallel', 'Im Winkel von 45°', 'Kein Zusammenhang'],
          correctIndex: 0,
          explanation: 'Der Gradient zeigt zur **stärksten Änderung** — auf einer Höhenlinie ändert sich $f$ nicht, also Richtungsableitung entlang der Linie = 0. Daher $\\nabla f \\perp $ Höhenlinie.',
          hints: ['Auf einer Höhenlinie: $f$ konstant.', 'Richtungsableitung = 0 entlang der Linie.', 'Gradient steht senkrecht.'],
          wrongAnswerExplanations: {
            '1': 'Verwechslung mit Tangente: parallel zur Linie bedeutet Richtungsableitung gleich Betrag des Gradienten — aber entlang einer Niveaulinie ist $f$ konstant, also Richtungsableitung = 0. Das geht nur senkrecht.',
            '2': 'Ein Winkel von 45° ergibt sich aus keiner geometrischen Regel zwischen Gradient und Niveaulinie. Die korrekte Aussage $\\nabla f \\cdot \\vec t = 0$ (mit Tangente $\\vec t$) erzwingt exakt 90°.',
            '3': 'Falsch — der Zusammenhang ist fundamental: der Gradient ist per Definition der Vektor, der senkrecht auf Niveaumengen steht (Satz über implizite Funktionen).',
          },
        },
        {
          type: 'sorting',
          question: 'Bringe die Schritte zur Berechnung der Tangentialebene an $f(x,y)$ im Punkt $(x_0, y_0)$ in Reihenfolge.',
          items: [
            'Funktionswert $f(x_0, y_0)$ berechnen',
            'Partielle Ableitungen $f_x, f_y$ an $(x_0, y_0)$ bestimmen',
            'Tangentialebene: $z = f(x_0, y_0) + f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)$',
            'Falls gewünscht: umformen zu Normalform $Ax + By + Cz = D$',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Tangentialebene ist das mehrdim. Analogon zur Tangente — lokale lineare Approximation.',
          hints: ['Funktionswert zuerst.', 'Ableitungen geben Steigungen in beiden Richtungen.'],
        },
      ],
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
      masteryWrongAnswerExplanations: {
        1: 'Hier wurde $3y$ als $3$ interpretiert (also $y$ ignoriert). Bei $\\partial/\\partial x$ verschwindet der Term $3y$ komplett, da $y$ Konstante ist — es entsteht kein Zusatz-$3$. Ergebnis: nur $2x$.',
        2: 'Das ist die partielle Ableitung nach $y$, nicht nach $x$: $\\partial/\\partial y(3y) = 3$. Gesucht war $\\partial f/\\partial x$, dort wird $3y$ zu null.',
        3: 'Hier wurde nichts abgeleitet — der Term $x^2$ blieb unverändert. Die Potenzregel liefert $(x^2)\' = 2x$, nicht $x^2$.',
      },
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
      subGoals: [
        { label: 'Notwendige Bedingung für Extremum: $\\nabla f = 0$ (kritischer Punkt)', examRelevance: 'hoch' },
        { label: 'Hesse-Matrix $H = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{pmatrix}$ — Symmetrie nutzen', examRelevance: 'hoch' },
        { label: '$\\det H > 0 \\wedge f_{xx} > 0$ → Minimum, $< 0 \\wedge f_{xx} < 0$ → Maximum, $\\det H < 0$ → Sattel', examRelevance: 'hoch' },
        { label: 'Lagrange: $\\nabla f = \\lambda\\,\\nabla g$ bei Nebenbedingung $g(x,y) = 0$', examRelevance: 'hoch' },
        { label: 'Lagrange-System: $\\nabla f - \\lambda \\nabla g = 0$ **und** $g = 0$ gemeinsam lösen', examRelevance: 'mittel' },
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
      exercises: [
        {
          type: 'multiple-choice',
          question: 'Kritische Punkte von $f(x,y) = x^2 - y^2$ ergeben sich aus $\\nabla f = 0$. Wo liegen sie?',
          options: ['nur $(0,0)$', 'entlang $x = y$', '$(1,1)$ und $(-1,-1)$', 'keine'],
          correctIndex: 0,
          explanation: '$\\nabla f = (2x, -2y) = 0 \\Rightarrow x = 0$ und $y = 0$. Ein einziger kritischer Punkt: $(0,0)$.',
          hints: ['Beide Komponenten müssen null sein.', '$2x = 0$ und $-2y = 0$.', 'Schnittpunkt: $(0,0)$.'],
          wrongAnswerExplanations: {
            '1': 'Hier wurden die Komponenten gleichgesetzt ($2x = -2y$), statt beide einzeln null zu setzen. Kritischer Punkt heißt $\\nabla f = \\mathbf{0}$, also jede Komponente für sich null.',
            '2': 'Testweise eingesetzt ergibt $\\nabla f(1,1) = (2, -2) \\neq \\mathbf{0}$. Die Bedingung $\\nabla f = \\mathbf{0}$ ist nicht erfüllt, also keine kritischen Punkte.',
            '3': 'Das System $2x = 0, -2y = 0$ hat offensichtlich eine Lösung $(0,0)$. „Keine" entsteht meist aus einem Rechenfehler (z.B. falsche Ableitung).',
          },
        },
        {
          type: 'multiple-choice',
          question: 'Hesse-Matrix von $f(x,y) = x^2 - y^2$ ist $H = \\begin{pmatrix}2 & 0\\\\ 0 & -2\\end{pmatrix}$. Klassifikation von $(0,0)$?',
          options: ['Sattelpunkt', 'Minimum', 'Maximum', 'nicht klassifizierbar'],
          correctIndex: 0,
          explanation: '$\\det H = 2 \\cdot (-2) - 0 = -4 < 0$ → **Sattelpunkt**. Entlang $x$ Minimum, entlang $y$ Maximum.',
          hints: ['$\\det(H) < 0$ → Sattel.', '$\\det = f_{xx} f_{yy} - f_{xy}^2 = 2 \\cdot (-2) = -4$.'],
          wrongAnswerExplanations: {
            '1': 'Hier wurde nur $f_{xx} = 2 > 0$ beachtet und die Determinante übersehen. Richtig: $\\det H = -4 < 0$ schließt jedes Extremum aus — egal welches Vorzeichen $f_{xx}$ hat.',
            '2': 'Hier wurde $f_{yy} = -2 < 0$ als alleiniges Kriterium gewählt. Die Klassifikation benötigt zuerst $\\det H$; ist $\\det H < 0$, liegt immer ein Sattelpunkt vor.',
            '3': 'Die Hesse ist eindeutig bestimmt ($\\det H = -4 \\neq 0$), deswegen liefert der Standardtest ein eindeutiges Ergebnis. „Nicht klassifizierbar" gilt nur bei $\\det H = 0$.',
          },
        },
        {
          type: 'number-input',
          question: 'Hesse-Determinante von $f = xy$. Berechne $\\det H$.',
          correctValue: -1,
          tolerance: 0,
          unit: '',
          explanation: '$f_x = y$, $f_y = x$, $f_{xx} = 0$, $f_{yy} = 0$, $f_{xy} = 1$. $\\det = 0 \\cdot 0 - 1^2 = -1$ → Sattel überall.',
          hints: ['Zweite Ableitungen: $f_{xx}, f_{yy}, f_{xy}$.', '$\\det = f_{xx} f_{yy} - f_{xy}^2$.', '$0 - 1 = -1$.'],
        },
        {
          type: 'true-false',
          statement: 'Bei einem Sattelpunkt gilt $\\det(H) > 0$ und $f_{xx} = 0$.',
          correct: false,
          explanation: 'Falsch. Sattelpunkte haben $\\det(H) < 0$ — unabhängig von $f_{xx}$.',
          hints: ['Der Test für Sattelpunkt ist eindeutig am $\\det$-Vorzeichen.', '$\\det > 0$ → Extrempunkt, $\\det < 0$ → Sattel.'],
        },
        {
          type: 'multiple-choice',
          question: 'Lagrange: Extremum von $f = x + y$ unter $g = x^2 + y^2 - 2 = 0$. Welche Gleichung ergibt sich?',
          options: ['$1 = 2\\lambda x$ und $1 = 2\\lambda y$', '$x = \\lambda y$', '$x + y = 0$', '$\\lambda = 1$'],
          correctIndex: 0,
          explanation: '$\\nabla f = (1, 1)$, $\\nabla g = (2x, 2y)$. Lagrange: $(1, 1) = \\lambda (2x, 2y)$ → $1 = 2\\lambda x$, $1 = 2\\lambda y$. Dann $x = y$. Mit $x^2+y^2=2$: $x = y = \\pm 1$.',
          hints: ['Lagrange: $\\nabla f = \\lambda \\nabla g$.', '$\\nabla g = (2x, 2y)$.', 'Komponentenweise Gleichungen aufschreiben.'],
          wrongAnswerExplanations: {
            '1': 'Hier wurden die Lagrange-Gleichungen nicht aufgestellt, sondern die Variablen direkt gleichgesetzt. Korrekt: erst $\\nabla f = \\lambda \\nabla g$ komponentenweise, dann $\\lambda$ eliminieren.',
            '2': 'Das ist die Gleichung $\\nabla f = 0$ (Extremum ohne NB). Da es hier aber eine Nebenbedingung gibt, muss der Lagrange-Ansatz $\\nabla f = \\lambda \\nabla g$ verwendet werden.',
            '3': 'Nicht $\\lambda$ gleich Konstante setzen — $\\lambda$ ist Unbekannte. Korrekter Ablauf: $\\nabla f = \\lambda \\nabla g$ liefert Gleichungen, aus denen $\\lambda$ eliminiert wird.',
          },
        },
        {
          type: 'matching',
          question: 'Ordne jedem Hesse-Resultat die Klassifikation zu.',
          pairs: [
            { left: '$\\det H > 0$, $f_{xx} > 0$', right: 'Minimum' },
            { left: '$\\det H > 0$, $f_{xx} < 0$', right: 'Maximum' },
            { left: '$\\det H < 0$',                 right: 'Sattelpunkt' },
            { left: '$\\det H = 0$',                 right: 'kein Test (höhere Analyse nötig)' },
          ],
          explanation: 'Klassifikation ist ein 2-Schritt-Test: zuerst $\\det$, dann Vorzeichen von $f_{xx}$ (falls $\\det > 0$).',
          hints: ['$\\det$-Vorzeichen unterscheidet Extremum vs. Sattel.', '$f_{xx}$-Vorzeichen unterscheidet Max vs. Min.'],
        },
        {
          type: 'multiple-choice',
          question: 'Geometrisch: Am Minimum ist der Gradient zur Niveaulinie …',
          options: ['Null-Vektor', 'parallel', 'senkrecht', 'Winkel von 45°'],
          correctIndex: 0,
          explanation: 'Bei einem lokalen Extremum (Min, Max oder Sattel) gilt $\\nabla f = \\mathbf{0}$ — der Gradient verschwindet. Das ist die notwendige Bedingung erster Ordnung.',
          hints: ['Notwendige Bedingung für Extremum.', '$\\nabla f = 0$.', 'Verschwindender Vektor, keine Richtung.'],
          wrongAnswerExplanations: {
            '1': 'Regel aus anderem Kontext (bedingte Extrema, Lagrange) missverstanden. Am freien Extremum ist $\\nabla f$ nicht parallel zu irgendeiner Linie — er ist schlicht der Nullvektor.',
            '2': 'Gradient $\\perp$ Niveaulinie ist generell richtig, aber am lokalen Extremum verschwindet der Gradient vollständig — Senkrechtheit ist also undefiniert, weil es keine Richtung mehr gibt.',
            '3': 'Der Winkel von 45° wäre willkürlich und entspricht keiner Extremum-Bedingung. Gefordert ist $\\nabla f = \\mathbf{0}$ — keine Richtung, kein Winkel.',
          },
        },
        {
          type: 'sorting',
          question: 'Bringe die Lagrange-Methode in die richtige Reihenfolge.',
          items: [
            'Zielfunktion $f(x,y)$ und Nebenbedingung $g(x,y) = 0$ identifizieren',
            '$\\nabla f = \\lambda \\nabla g$ aufstellen (zwei Gleichungen)',
            'Zusammen mit $g(x,y) = 0$ ein System aus 3 Gleichungen für $(x, y, \\lambda)$ lösen',
            'Extremum klassifizieren oder Funktionswerte vergleichen',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Lagrange ersetzt die direkte Elimination der NB durch einen Hilfsparameter $\\lambda$ — eleganter bei mehreren Variablen.',
          hints: ['Zielfunktion vor Bedingungen.', 'Immer 3 Gleichungen für 2D-Problem.'],
        },
      ],
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
      masteryWrongAnswerExplanations: {
        1: 'Vorzeichen von $f_{xx}$ falsch bewertet: $f_{xx} = 2 > 0$ (nicht $< 0$). Mit $\\det H > 0$ und $f_{xx} > 0$ liegt ein Minimum, kein Maximum.',
        2: 'Die Determinante ist positiv ($4$), nicht negativ. Ein Sattelpunkt erfordert $\\det H < 0$; hier schließt $\\det H = 4 > 0$ einen Sattel aus.',
        3: '$\\det H = 4 \\neq 0$, also eindeutig klassifizierbar. „Nicht klassifizierbar" gilt nur, wenn $\\det H = 0$ — dann braucht es höhere Ableitungen.',
      },
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
  unitGoals: [
    'Extrema unter Nebenbedingungen mit Lagrange-Multiplikator $\\nabla f = \\lambda \\nabla g$ lösen',
    'Gauß\'sche Fehlerfortpflanzung für unabhängige Messgrößen anwenden',
    'Prüfungsaufgaben mit Kombination aus partiellen Ableitungen, Gradient und Hesse-Matrix',
  ],
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
      subGoals: [
        { label: 'Kritische Stellen: $\\nabla f = \\vec 0$ (alle partiellen Ableitungen null)', examRelevance: 'hoch' },
        { label: 'Hesse-Matrix $H$: $\\det H > 0$ und $f_{xx} > 0$ → Min; $\\det H > 0, f_{xx} < 0$ → Max', examRelevance: 'hoch' },
        { label: 'Sattelpunkt: $\\det H < 0$ (Hesse indefinit)', examRelevance: 'hoch' },
        { label: 'Fehlerfortpflanzung (linear): $\\Delta f \\approx |\\partial f/\\partial x_1| \\Delta x_1 + \\ldots$', examRelevance: 'hoch' },
        { label: 'Gauß\'sche Fehlerfortpflanzung (statistisch): $\\sigma_f^2 = \\sum (\\partial f/\\partial x_i)^2 \\sigma_i^2$', examRelevance: 'hoch' },
        { label: 'Lagrange: $\\nabla f = \\lambda \\nabla g$ bei Nebenbedingung $g = 0$', examRelevance: 'hoch' },
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
      exercises: [
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Aufwärmaufgabe: Notwendige Bedingung für Extremum von $f(x,y)$?',
          options: ['$\\nabla f = \\mathbf{0}$', 'Hesse-Matrix positiv', '$f = 0$', '$f > 0$'],
          correctIndex: 0,
          explanation: 'Gradient verschwindet bei jedem lokalen Extremum (und auch am Sattel). Danach entscheidet die Hesse.',
          hints: ['Notwendige vs. hinreichende Bedingung.', 'Gradient = 0 liefert kritische Punkte.'],
          wrongAnswerExplanations: {
            '1': 'Positive Hesse-Matrix ist die hinreichende Bedingung für ein Minimum, nicht die notwendige. Notwendig ist nur $\\nabla f = \\mathbf{0}$; Hesse entscheidet danach über den Typ.',
            '2': '$f = 0$ macht keine Aussage über Extrema — es nennt nur Nullstellen der Funktion. Ein Minimum kann Funktionswert $\\neq 0$ haben (z.B. $f = x^2 + 1$ hat Minimum $1 > 0$).',
            '3': '$f > 0$ sagt nur, dass die Funktion positiv ist, nicht, wo sie Extremstellen hat. Notwendig für Extremum bleibt $\\nabla f = \\mathbf{0}$.',
          },
        },
        {
          type: 'number-input',
          question: '[PRÜFUNG] $f(x,y) = x^2 + xy + y^2$. Anzahl kritischer Punkte?',
          correctValue: 1,
          tolerance: 0,
          unit: '',
          explanation: '$\\nabla f = (2x+y, x+2y) = 0$: $2x + y = 0$, $x + 2y = 0$. Lösung: $x = y = 0$.',
          hints: ['LGS: $2x+y=0$, $x+2y=0$.', 'Aus erster: $y=-2x$, einsetzen: $x+2(-2x)=-3x=0 \\to x=0$.', 'Ein Punkt.'],
        },
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Hesse von $f = x^2 + xy + y^2$ bei $(0,0)$?',
          options: [
            '$\\begin{pmatrix}2 & 1\\\\ 1 & 2\\end{pmatrix}$',
            '$\\begin{pmatrix}2 & 0\\\\ 0 & 2\\end{pmatrix}$',
            '$\\begin{pmatrix}1 & 1\\\\ 1 & 1\\end{pmatrix}$',
            '$\\begin{pmatrix}0 & 0\\\\ 0 & 0\\end{pmatrix}$',
          ],
          correctIndex: 0,
          explanation: '$f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 1$. Hesse: $\\begin{pmatrix}2 & 1\\\\ 1 & 2\\end{pmatrix}$.',
          hints: ['Zweite Ableitungen.', '$\\partial/\\partial x (2x+y) = 2$, $\\partial/\\partial x (x+2y) = 1$.', 'Matrix symmetrisch füllen.'],
          wrongAnswerExplanations: {
            '1': 'Der gemischte Term $xy$ wurde ignoriert, deswegen $f_{xy} = 0$ statt $1$. Korrekt: $\\partial/\\partial y (f_x) = \\partial/\\partial y(2x + y) = 1$, also Nebendiagonale $= 1$.',
            '2': 'Hier wurden zweite und erste Ableitungen verwechselt: $f_{xx} = 1$ stimmt nicht; richtig ist $\\partial/\\partial x(2x+y) = 2$. Die Matrix der ersten Ableitungen wäre auch keine Hesse.',
            '3': 'Die Hesse-Matrix ist nicht Null, denn $f$ enthält quadratische Terme $x^2, y^2$, deren zweite Ableitung je $2$ ergibt. Nur bei linearen $f$ wäre die Hesse die Nullmatrix.',
          },
        },
        {
          type: 'number-input',
          question: '[PRÜFUNG] Bei welchem Winkel im Radiant (im Hauptwert) zeigt $\\nabla f$ für $f(x,y) = x^2 + y^2$ am Punkt $(1, 1)$?',
          correctValue: 0.7854,
          tolerance: 0.01,
          unit: '',
          explanation: '$\\nabla f = (2, 2)$ → Winkel $\\arctan(2/2) = \\arctan(1) = \\pi/4 \\approx 0{,}785$.',
          hints: ['$\\nabla f = (2x, 2y)$ bei $(1,1)$: $(2, 2)$.', 'Winkel: $\\arctan(y/x) = \\arctan(1)$.', '$\\pi/4$.'],
        },
        {
          type: 'true-false',
          statement: '[PRÜFUNG] Wenn $\\nabla f$ und $\\nabla g$ an einem Punkt parallel sind und $g(x,y)=0$ gilt, dann ist der Punkt ein Kandidat für ein Extremum von $f$ unter der Nebenbedingung $g$.',
          correct: true,
          explanation: 'Richtig — das ist die Lagrange-Bedingung. $\\nabla f = \\lambda \\nabla g$ (parallel) plus $g = 0$.',
          hints: ['Lagrange-Multiplikator.', 'Parallelität = gleiche Richtung (bis auf Skalar).'],
        },
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Maximale Rechteckfläche mit Umfang $8$: Welche Methode passt?',
          options: [
            'Lagrange mit $f = xy$, $g = 2x + 2y - 8 = 0$',
            'Newton-Verfahren',
            'Fourier-Analyse',
            'Diagonalisierung',
          ],
          correctIndex: 0,
          explanation: 'Klassisches Lagrange-Problem: Fläche maximieren unter Umfang-Nebenbedingung. Ergebnis: $x = y = 2$ (Quadrat).',
          hints: ['Extremum mit Nebenbedingung.', 'Fläche = $xy$, Umfang-Bedingung eingeschlossen.'],
          wrongAnswerExplanations: {
            '1': 'Newton-Verfahren löst Nullstellen nichtlinearer Gleichungen, keine Extremalprobleme mit Nebenbedingung. Für „max/min unter $g=0$" ist Lagrange der Standardansatz.',
            '2': 'Fourier-Analyse zerlegt periodische Signale in Sinus/Kosinus — kein Optimierungswerkzeug. Hier braucht es Differentialrechnung mit Nebenbedingung.',
            '3': 'Diagonalisierung dient dem Eigenwertproblem in der linearen Algebra, nicht der Optimierung mit Nebenbedingung. Standardmethode hier: Lagrange.',
          },
        },
        {
          type: 'matching',
          question: '[PRÜFUNG] Ordne jede Situation ihrer Methode zu.',
          pairs: [
            { left: 'Extremum ohne Nebenbedingung', right: '$\\nabla f = 0$, Hesse-Test' },
            { left: 'Extremum mit $g(x,y) = 0$',     right: 'Lagrange-Multiplikatoren' },
            { left: 'Fehlerfortpflanzung',            right: 'Totales Differential' },
            { left: 'Steigung in beliebiger Richtung', right: 'Richtungsableitung $\\nabla f \\cdot \\vec v$' },
          ],
          explanation: 'Vier Standardprobleme — jedem seine Standardmethode.',
          hints: ['Ohne NB → Gradient = 0.', 'Mit NB → Lagrange.'],
        },
        {
          type: 'sorting',
          question: '[PRÜFUNG] Strategie zur Extremsuche in 2D. Bringe die Schritte in Reihenfolge.',
          items: [
            'Partielle Ableitungen $f_x, f_y$ aufstellen',
            'Kritische Punkte aus $f_x = 0, f_y = 0$ bestimmen',
            'Hesse-Matrix an jedem kritischen Punkt auswerten',
            'Mit $\\det H$ und $f_{xx}$ klassifizieren (Min / Max / Sattel)',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Systematisch: erste Ableitungen → kritische Punkte → zweite Ableitungen → Klassifikation.',
          hints: ['Erst suchen, dann klassifizieren.', 'Klassifikation ohne kritischen Punkt sinnlos.'],
        },
      ],
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
      masteryWrongAnswerExplanations: {
        1: 'Der Punkt $(0,0)$ ist zwar kritischer Punkt, aber kein Sattel: $\\det H = 4 > 0$ schließt Sattelpunkte aus. Mit $f_{xx} = 2 > 0$ liegt ein Minimum vor.',
        2: 'Kritische Punkte existieren — $\\nabla f = (2x, 2y) = \\mathbf{0}$ hat die eindeutige Lösung $(0,0)$. „Keinen" wäre nur bei einem widersprüchlichen LGS korrekt.',
        3: 'Testweise eingesetzt ergibt $\\nabla f(1,1) = (2, 2) \\neq \\mathbf{0}$ — kein kritischer Punkt. Korrekt: nur $(0,0)$ ist kritischer Punkt.',
      },
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
      subGoals: [
        { label: 'Totales Differential: $df = f_x dx + f_y dy + \\ldots$', examRelevance: 'hoch' },
        { label: 'Maximaler Fehler (linear): $|\\Delta f| \\leq \\sum |f_{x_i}| |\\Delta x_i|$ (obere Schranke)', examRelevance: 'hoch' },
        { label: 'Gauß\'sche (statistisch): $\\sigma_f = \\sqrt{\\sum (f_{x_i})^2 \\sigma_{x_i}^2}$', examRelevance: 'hoch' },
        { label: 'Relativer Fehler: $|\\Delta f/f| \\leq \\sum |\\Delta x_i/x_i|$ bei Produkten', examRelevance: 'hoch' },
        { label: 'Fehlerquelle mit dem größten $f_{x_i} \\Delta x_i$ dominiert — dort zuerst verbessern', examRelevance: 'mittel' },
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
      exercises: [
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Aufwärmaufgabe: Totales Differential von $z = x^2 + y^2$.',
          options: ['$dz = 2x\\,dx + 2y\\,dy$', '$dz = x^2\\,dx$', '$dz = dx + dy$', '$dz = 2(x+y)\\,dx$'],
          correctIndex: 0,
          explanation: '$dz = z_x\\,dx + z_y\\,dy = 2x\\,dx + 2y\\,dy$.',
          hints: ['$dz$-Formel: $f_x dx + f_y dy$.', 'Partielle Ableitungen je Variable.'],
          wrongAnswerExplanations: {
            '1': 'Hier wurde nur nach $x$ abgeleitet und $y$-Term vergessen. Totales Differential summiert **beide** partielle Ableitungen: $dz = z_x\\,dx + z_y\\,dy$.',
            '2': 'Die partiellen Ableitungen wurden gar nicht gebildet — einfach $dx + dy$ ohne Gewichtung. Richtig: jede $dx_i$ mit $\\partial f/\\partial x_i$ multiplizieren.',
            '3': 'Hier wurde $z$ nach $x$ abgeleitet, aber $dy$ vergessen und stattdessen $(x+y)$ als gemeinsamer Faktor verwendet. Totales Differential hat **getrennte** $dx$- und $dy$-Terme.',
          },
        },
        {
          type: 'number-input',
          question: '[PRÜFUNG] $z = x/y$, $x = 10 \\pm 0{,}1$, $y = 2 \\pm 0{,}05$. Max. Fehler $\\Delta z$?',
          correctValue: 0.175,
          tolerance: 0.01,
          unit: '',
          explanation: '$z_x = 1/y = 0{,}5$, $z_y = -x/y^2 = -2{,}5$. $\\Delta z = 0{,}5 \\cdot 0{,}1 + 2{,}5 \\cdot 0{,}05 = 0{,}05 + 0{,}125 = 0{,}175$.',
          hints: ['$\\Delta z = |z_x| \\Delta x + |z_y| \\Delta y$.', '$z_x = 1/y$, $z_y = -x/y^2$.', '$0{,}05 + 0{,}125 = 0{,}175$.'],
        },
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] $V = r^2 \\pi h$ (Zylindervolumen). Welches $\\partial V/\\partial r$?',
          options: ['$2\\pi r h$', '$\\pi h$', '$r^2 \\pi$', '$2r \\pi h + r^2 \\pi$'],
          correctIndex: 0,
          explanation: '$h$ als Konstante. $\\partial V/\\partial r = 2r \\pi h$.',
          hints: ['$h$ wie eine Konstante.', 'Potenzregel: $(r^2)\' = 2r$.', '$\\pi h$ als Faktor.'],
          wrongAnswerExplanations: {
            '1': 'Der Faktor $r^2$ wurde nicht abgeleitet und verschwand komplett. Korrekte Potenzregel: $\\partial/\\partial r(r^2) = 2r$, nicht $1$.',
            '2': 'Hier wurde nach $h$ statt nach $r$ abgeleitet ($\\partial V/\\partial h = r^2\\pi$). Die Aufgabe verlangt $\\partial V/\\partial r$, also $h$ als Konstante behandeln.',
            '3': 'Produktregel auf $r^2 \\cdot h$ angewandt, obwohl $h$ bei $\\partial/\\partial r$ als Konstante gilt. Produktregel ist unnötig; einfach $h \\cdot \\partial(r^2)/\\partial r = 2rh$, mit $\\pi$ ergibt $2r\\pi h$.',
          },
        },
        {
          type: 'true-false',
          statement: '[PRÜFUNG] Die **Gauß-Abschätzung** liefert **kleineren** Fehler als die Max-Abschätzung.',
          correct: true,
          explanation: 'Richtig. Max-Abschätzung summiert Beträge, Gauß quadriert und zieht Wurzel — das ergibt $\\leq$ Summe (Dreiecksungleichung). Realistischer bei unabhängigen Fehlern.',
          hints: ['Max = lineare Summe.', 'Gauß = Wurzel aus Quadratsumme.', 'Wurzel ≤ Summe.'],
        },
        {
          type: 'number-input',
          question: '[PRÜFUNG] Fläche $A = l \\cdot b$. $l = 5 \\pm 0{,}1$, $b = 3 \\pm 0{,}05$. Gauß-Fehler $\\Delta A$?',
          correctValue: 0.403,
          tolerance: 0.02,
          unit: '',
          explanation: '$A_l = b = 3$, $A_b = l = 5$. $\\Delta A_\\text{Gauß} = \\sqrt{(3 \\cdot 0{,}1)^2 + (5 \\cdot 0{,}05)^2} = \\sqrt{0{,}09 + 0{,}0625} = \\sqrt{0{,}1525} \\approx 0{,}39$. Leicht $>$ reine Geometrie: $\\approx 0{,}40$.',
          hints: ['$A_l = b = 3$, $A_b = l = 5$.', 'Jeder Term quadrieren, summieren, Wurzel.', '$\\sqrt{0{,}0025 + 0{,}0625}$ … moment, richtig: $\\sqrt{0{,}09 + 0{,}0625}$.'],
        },
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Bei Fehlerfortpflanzung für Produkte $z = xy$: Welche **relative** Fehler-Formel gilt?',
          options: [
            '$\\Delta z/z = \\Delta x/x + \\Delta y/y$ (Summe der relativen Fehler)',
            '$\\Delta z/z = \\Delta x \\cdot \\Delta y$',
            '$\\Delta z = x\\,\\Delta y + y\\,\\Delta x$',
            '$\\Delta z/z = (\\Delta x)^2 + (\\Delta y)^2$',
          ],
          correctIndex: 0,
          explanation:
            'Für Produkte addieren sich die relativen Fehler (Max-Abschätzung). Herleitung: $\\Delta z = |y|\\Delta x + |x|\\Delta y$, geteilt durch $z = xy$ ergibt Summe der relativen Fehler.',
          hints: ['Bei Produkten gilt eine schöne Regel.', 'Relative Fehler = $\\Delta/\\text{Wert}$.'],
          wrongAnswerExplanations: {
            '1': 'Fehler werden nicht multipliziert. Aus $dz = y\\,dx + x\\,dy$ folgt durch Division durch $z = xy$: $dz/z = dx/x + dy/y$ — eine Summe, kein Produkt.',
            '2': 'Das ist die Formel für den **absoluten** Fehler (totales Differential), nicht den relativen. Die Frage war nach $\\Delta z/z$, nicht $\\Delta z$.',
            '3': 'Quadrieren ist nur bei Gauß-Abschätzung (unabhängige Fehler) relevant, und auch dann relativ: $(\\Delta z/z)^2 = (\\Delta x/x)^2 + (\\Delta y/y)^2$. Max-Abschätzung summiert linear.',
          },
        },
        {
          type: 'matching',
          question: '[PRÜFUNG] Ordne jeder Messformel den richtigen Fehler-Typ zu (relativ vs. absolut).',
          pairs: [
            { left: '$z = x + y$',       right: 'absoluter Fehler addieren' },
            { left: '$z = x \\cdot y$',   right: 'relative Fehler addieren' },
            { left: '$z = x / y$',        right: 'relative Fehler addieren' },
            { left: '$z = x^n$',          right: 'relativer Fehler mal $n$' },
          ],
          explanation: 'Summen: absolut, Produkte/Quotienten/Potenzen: relativ. Dahinter steht immer das totale Differential.',
          hints: ['Log-Ableitung macht Produkte zu Summen.', 'Daher bei Produkten: relative Fehler summieren.'],
        },
        {
          type: 'sorting',
          question: '[PRÜFUNG] Strategie zur Fehlerabschätzung bei $z = f(x, y, \\ldots)$. Bringe in Reihenfolge.',
          items: [
            'Partielle Ableitungen $f_x, f_y, \\ldots$ bestimmen',
            'Ableitungen an Messwerten auswerten',
            'Fehler-Formel wählen: Max-Abschätzung oder Gauß',
            'Absoluten bzw. relativen Fehler berechnen',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Ohne Ableitungen keine Fehler. Bei Prüfungsaufgaben: meist Max-Abschätzung (konservativ) oder Gauß (realistisch) — Angabe aufmerksam lesen.',
          hints: ['Ableitungen zuerst, dann Formel.', 'Max vs. Gauß je nach Aufgabenstellung.'],
        },
      ],
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
      masteryWrongAnswerExplanations: {
        1: 'Hier wurde nur der erste Beitrag $|z_x|\\Delta x = 4 \\cdot 0{,}1 = 0{,}4$ berechnet. Der zweite Term $|z_y|\\Delta y = 3 \\cdot 0{,}2 = 0{,}6$ fehlt — beide Messfehler tragen zum Gesamtfehler bei.',
        2: 'Das ist nur der zweite Teilbeitrag $|z_y|\\Delta y = 0{,}6$. Der Beitrag $|z_x|\\Delta x = 0{,}4$ aus dem Fehler von $x$ fehlt. Gesamt: $0{,}4 + 0{,}6 = 1{,}0$.',
        3: 'Hier wurden die Ableitungen vertauscht: $|z_x|\\cdot\\Delta y + |z_y|\\cdot\\Delta x = 4\\cdot 0{,}2 + 3\\cdot 0{,}1 = 0{,}8 + 0{,}3 = 1{,}1$ — dicht an $1{,}4$. Jeder Messfehler $\\Delta x_i$ muss mit *seiner eigenen* partiellen Ableitung multipliziert werden.',
      },
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
      subGoals: [
        { label: 'Lagrange-LGS: $f_x = \\lambda g_x$, $f_y = \\lambda g_y$, $g = 0$ (3 Gl. für 3 Unb.)', examRelevance: 'hoch' },
        { label: 'Hesse-Test: $D = f_{xx}f_{yy} - f_{xy}^2$; $D>0, f_{xx}>0$ Min; $D>0, f_{xx}<0$ Max; $D<0$ Sattel', examRelevance: 'hoch' },
        { label: 'Bei $D = 0$: keine Entscheidung via Hesse, höhere Ordnungen nötig', examRelevance: 'mittel' },
        { label: 'Mehrere NB: $\\nabla f = \\sum \\lambda_i \\nabla g_i$', examRelevance: 'mittel' },
        { label: 'Richtungsableitung: $D_{\\vec u} f = \\nabla f \\cdot \\vec u / |\\vec u|$', examRelevance: 'hoch' },
        { label: 'Gradient zeigt in Richtung stärksten Anstiegs, Betrag = maximale Steigung', examRelevance: 'hoch' },
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
      exercises: [
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Aufwärmaufgabe: $f(x,y) = x + 2y$ unter NB $x^2 + y^2 = 5$. Bei welchen Punkten liegen Extrema?',
          options: ['$(1, 2)$ und $(-1, -2)$', '$(0, 0)$', '$(\\sqrt 5, 0)$', 'Keine'],
          correctIndex: 0,
          explanation:
            'Lagrange: $1 = 2\\lambda x$, $2 = 2\\lambda y$. Dann $y = 2x$. In $x^2 + 4x^2 = 5$: $x^2 = 1$, also $x = \\pm 1$, $y = \\pm 2$.',
          hints: ['$\\nabla f = (1, 2)$, $\\nabla g = (2x, 2y)$.', 'Aus Lagrange: $y = 2x$.', 'In NB einsetzen.'],
          wrongAnswerExplanations: {
            '1': '$(0,0)$ erfüllt die Nebenbedingung $x^2 + y^2 = 5$ nicht ($0 \\neq 5$). Lagrange-Kandidaten müssen immer auf der Nebenbedingungskurve liegen.',
            '2': 'Hier wurde nur die Nebenbedingung getestet ($(\\sqrt 5)^2 + 0^2 = 5$ passt), aber die Lagrange-Gleichung $y = 2x$ ignoriert. Beide Bedingungen müssen gleichzeitig gelten.',
            '3': 'Zwei Lösungen existieren auf jeden Fall: aus $y = 2x$ und $x^2 + y^2 = 5$ folgt $x = \\pm 1$. Das System ist konsistent und hat Extrema.',
          },
        },
        {
          type: 'number-input',
          question: '[PRÜFUNG] Rechteck maximaler Fläche mit Umfang $12$: Welche Seitenlänge $x$?',
          correctValue: 3,
          tolerance: 0,
          unit: '',
          explanation: 'NB: $2x + 2y = 12 \\to y = 6 - x$. $A = xy = x(6-x)$. $A\'(x) = 6 - 2x = 0 \\to x = 3$. Also Quadrat mit $x = y = 3$.',
          hints: ['Umfang auflösen: $y = 6 - x$.', 'Einsetzen: $A(x) = x(6-x)$.', '$A\' = 0$ bei $x = 3$.'],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] $f(x,y) = x^2 y$ unter $x + y = 1$. Welche Gleichung folgt aus Lagrange?',
          options: [
            '$2xy = \\lambda$ und $x^2 = \\lambda$',
            '$2x = \\lambda$ und $y = \\lambda$',
            '$y = \\lambda$ und $x^2 = \\lambda$',
            '$x^2 y = 0$',
          ],
          correctIndex: 0,
          explanation:
            '$\\nabla f = (2xy, x^2)$, $\\nabla g = (1, 1)$. Lagrange: $2xy = \\lambda \\cdot 1$, $x^2 = \\lambda \\cdot 1$. Dann $2xy = x^2$, also $y = x/2$ (falls $x \\neq 0$).',
          hints: ['$f_x = 2xy$, $f_y = x^2$.', '$g_x = g_y = 1$.', 'Beide gleich $\\lambda$ setzen.'],
          wrongAnswerExplanations: {
            '1': 'Hier wurden die partiellen Ableitungen falsch gebildet: $\\partial/\\partial x(x^2 y) = 2xy$, nicht $2x$, und $\\partial/\\partial y(x^2 y) = x^2$, nicht $y$.',
            '2': 'In der ersten Gleichung $f_x = \\lambda g_x$ steht $2xy$, nicht $y$. Der Faktor $2x$ wurde bei der Ableitung von $x^2$ vergessen.',
            '3': '$f = 0$ ist keine Lagrange-Bedingung, sondern die Gleichung „$f$ verschwindet". Lagrange verlangt $\\nabla f = \\lambda \\nabla g$, nicht $f = 0$.',
          },
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Bei Lagrange muss man **alle drei** Gleichungen ($f_x = \\lambda g_x$, $f_y = \\lambda g_y$, $g = 0$) zusammen lösen.',
          correct: true,
          explanation:
            'Richtig. 3 Unbekannte $(x, y, \\lambda)$ erfordern 3 Gleichungen. Oft eliminiert man $\\lambda$, um ein 2x2-System in $(x,y)$ zu bekommen.',
          hints: ['Zählen: 3 Variablen, 3 Gleichungen.', 'Nebenbedingung immer mitnehmen.'],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Geometrische Bedeutung der Lagrange-Bedingung $\\nabla f = \\lambda \\nabla g$ am Extremum?',
          options: [
            'Niveaulinien von $f$ und die Nebenbedingungskurve $g = 0$ berühren sich tangential',
            'Die Nebenbedingung verschwindet',
            '$f$ und $g$ sind identisch',
            '$\\lambda = 0$',
          ],
          correctIndex: 0,
          explanation:
            'Am Extremum sind Gradienten parallel → die Niveaulinien $f = c$ berühren die Kurve $g = 0$ tangential. Am Berührpunkt: gemeinsame Normalenrichtung.',
          hints: ['Gradient = Normale zu Niveaulinie.', 'Parallele Gradienten → parallele Normalen.', 'Parallele Normalen → Tangentenberührung.'],
          wrongAnswerExplanations: {
            '1': 'Die Nebenbedingung bleibt aktiv — sie muss am Kandidatenpunkt gelten: $g(x,y) = 0$. Sie verschwindet nicht, sondern wird im LGS mit aufgenommen.',
            '2': 'Identität wäre $f = g$ als Funktionen — hat mit der Lagrange-Bedingung nichts zu tun. Die Bedingung betrifft nur die **Gradienten**, nicht die Funktionen selbst.',
            '3': '$\\lambda = 0$ würde $\\nabla f = \\mathbf{0}$ bedeuten (freies Extremum). Im Allgemeinen Lagrange-Fall ist $\\lambda \\neq 0$ und gibt den „Preis" der Nebenbedingung an.',
          },
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] $f(x,y) = xy$ unter $x^2 + y^2 = 2$. Maximum von $f$?',
          correctValue: 1,
          tolerance: 0,
          unit: '',
          explanation:
            'Lagrange: $y = 2\\lambda x$, $x = 2\\lambda y$. Multiplizieren: $xy = 4\\lambda^2 xy$ → $\\lambda^2 = 1/4$ → $\\lambda = \\pm 1/2$. Dann $x^2 = y^2$, also $x = \\pm y$. In NB: $x = y = 1$ (Extremum). $f(1,1) = 1$.',
          hints: ['$\\nabla f = (y, x)$, $\\nabla g = (2x, 2y)$.', 'Aus Lagrange: $x^2 = y^2$.', 'In NB: $2x^2 = 2 \\to x = \\pm 1$, dann $f = xy = 1$.'],
        },
        {
          type: 'matching',
          question: '[PRÜFUNG] Ordne jede Aufgabe ihrem Lösungsansatz zu.',
          pairs: [
            { left: 'Extremum ohne NB',                    right: '$\\nabla f = 0$, Hesse' },
            { left: 'Extremum mit $g(x,y) = 0$',          right: 'Lagrange' },
            { left: 'Steigung in Richtung $\\vec v$',      right: 'Richtungsableitung $\\nabla f \\cdot \\vec v$' },
            { left: 'Linearisierung bei $(x_0, y_0)$',     right: 'Tangentialebene' },
          ],
          explanation: 'Jedes Problem hat seinen Standardansatz. Methoden sind nicht austauschbar — falsche Wahl = falsche Aufgabe.',
          hints: ['Mit NB → Lagrange.', 'Richtungsableitung = Skalarprodukt.'],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Strategie für Prüfungsaufgabe „Extremum unter Nebenbedingung". Bringe in Reihenfolge.',
          items: [
            'Zielfunktion $f$ und Nebenbedingung $g$ identifizieren',
            'Lagrange-Gleichungen aufstellen: $\\nabla f = \\lambda \\nabla g$, $g = 0$',
            'System lösen für $(x, y, \\lambda)$ — Kandidaten finden',
            'Extremum klassifizieren (Werte vergleichen, Randpunkte prüfen)',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Typische Lagrange-Aufgabe ist vollständig algorithmisch. Am Ende unbedingt alle Kandidaten vergleichen — Max und Min können bei unterschiedlichen Punkten liegen.',
          hints: ['Ziel vor Bedingung.', 'Alle Kandidaten am Ende vergleichen.'],
        },
      ],
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
      masteryWrongAnswerExplanations: {
        1: '$(2,0)$ erfüllt zwar $x+y=2$, aber $f(2,0) = 4 > 2 = f(1,1)$ — also ist $(2,0)$ nicht das Minimum, sondern weiter vom Ursprung entfernt. Lagrange liefert $x=y=1$.',
        2: 'Symmetrisch zu Option 1: $f(0,2) = 4 > 2$. Randpunkt auf der Geraden, aber nicht das Minimum. Das Minimum liegt dort, wo die Gerade dem Ursprung am nächsten ist — auf der Mittelpunkts-Loten.',
        3: '$(0,0)$ liegt nicht auf der Nebenbedingungsgeraden $x+y=2$ (es gilt $0+0=0\\neq 2$). Der Punkt muss immer die NB erfüllen, sonst ist er kein Kandidat.',
      },
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
  phase: 'vertiefung',
  examRelevance: 'pflicht',
  topicGoals: [
    'Partielle Ableitungen $f_x$, $f_y$ fehlerfrei nach jeder Variable bilden, die anderen als Konstante behandeln',
    'Den Gradienten $\\nabla f$ als Vektor des steilsten Anstiegs geometrisch und als Normale von Höhenlinien lesen',
    'Totale Ableitung und Tangentialebene $z = f(x_0, y_0) + \\nabla f \\cdot (x-x_0, y-y_0)^T$ formulieren',
    'Lokale Extrema über $\\nabla f = 0$ und die Hesse-Matrix (Definitheit) klassifizieren — inkl. Sattelpunkt',
    'Extrema unter Nebenbedingungen mit Lagrange-Multiplikatoren ($\\nabla f = \\lambda\\,\\nabla g$) lösen',
    'Doppel- und Dreifachintegrale über rechteckige, polare und zylindrische Bereiche aufstellen und in Iterationen zerlegen',
  ],
  units: [unit1, unit2],
  prerequisites: ['ableitung', 'integralrechnung', 'vektoren'],
}
