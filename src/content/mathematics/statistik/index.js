import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'stat-unit-1',
  title: 'Zufallsvariablen & Verteilungen',
  order: 1,
  lessons: [
    makeLesson({
      id: 'stat-1-1',
      title: 'Erwartungswert und Varianz',
      estimatedMinutes: 14,
      learningGoals: [
        'Erwartungswert und Varianz einer diskreten Zufallsvariablen berechnen',
        'Unterschied zwischen $\\sigma^2$ und $\\sigma$ kennen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Was ist der Durchschnitt auf lange Sicht?',
      intuitionContent:
        'Ein Würfel zeigt im Mittel $(1+2+3+4+5+6)/6 = 3{,}5$. Das ist der **Erwartungswert** $E(X)$. ' +
        'Die **Varianz** misst, wie stark die Werte vom Mittel abweichen; ihre Wurzel ist die **Standardabweichung**.',
      formulaTitle: 'Diskrete Zufallsvariable',
      formulaContent:
        '$$E(X) = \\sum_i x_i\\,p_i, \\qquad \\operatorname{Var}(X) = E((X-E(X))^2) = \\sum_i (x_i - E(X))^2\\,p_i$$\n\n' +
        '$$\\sigma(X) = \\sqrt{\\operatorname{Var}(X)}$$\n\n' +
        '**Kontrolle:** Varianz immer $\\geq 0$, Einheit $(\\text{Einheit von X})^2$.',
      exercises: [
        {
          type: 'number-input',
          question:
            'Eine Münze wird einmal geworfen. $X = 1$ bei Kopf, $X = 0$ bei Zahl. Berechne $E(X)$.',
          correctValue: 0.5,
          tolerance: 0.001,
          unit: '',
          explanation:
            '$E(X) = 1 \\cdot 0{,}5 + 0 \\cdot 0{,}5 = 0{,}5$. Mittelwert auf lange Sicht.',
          hints: [
            '$E(X) = \\sum x_i p_i$.',
            '$x_1 = 1, p_1 = 0{,}5$; $x_2 = 0, p_2 = 0{,}5$.',
            '$0{,}5 + 0 = 0{,}5$.',
          ],
        },
        {
          type: 'multiple-choice',
          question: 'Welche Einheit hat die **Varianz** einer Messgröße in Millimetern?',
          options: ['$\\text{mm}^2$', '$\\text{mm}$', 'dimensionslos', 'N/mm'],
          correctIndex: 0,
          explanation:
            'Varianz ist $E((X - E(X))^2)$ — quadrierte Abweichung. Einheit: (Einheit von X)$^2$. ' +
            'Deshalb wird oft die **Standardabweichung** $\\sigma = \\sqrt{\\operatorname{Var}}$ verwendet, die die gleiche Einheit wie X hat.',
          hints: [
            'Varianz enthält ein Quadrat.',
            'Wenn X in mm, dann $(X - \\mu)^2$ in ...?',
            'Quadrat der Einheit.',
          ],
          wrongAnswerExplanations: {
            '1': 'Das ist die Einheit der Standardabweichung $\\sigma$ (Wurzel aus Varianz). Varianz enthält aber die quadrierte Abweichung $(X-\\mu)^2$, also $\\text{mm}^2$.',
            '2': 'Dimensionslos ist z.B. ein Variationskoeffizient $\\sigma/\\mu$. Varianz ohne Normierung behält die (quadrierte) Einheit der Messgröße.',
            '3': 'N/mm ist eine Kraft/Längen-Einheit — hat nichts mit Statistik zu tun. Varianz hängt nur von der Einheit von $X$ ab, quadriert.',
          },
        },
        {
          type: 'number-input',
          question:
            'Eine Zufallsvariable nimmt Werte $-1, 0, 2$ an mit Wahrscheinlichkeiten $0{,}3,\\, 0{,}5,\\, 0{,}2$. Berechne $E(X)$.',
          correctValue: 0.1,
          tolerance: 0.001,
          unit: '',
          explanation:
            '$E(X) = (-1)\\cdot 0{,}3 + 0 \\cdot 0{,}5 + 2 \\cdot 0{,}2 = -0{,}3 + 0 + 0{,}4 = 0{,}1$.',
          hints: [
            '$E(X) = \\sum x_i p_i$ — jeder Wert mit seiner Wahrscheinlichkeit.',
            'Summe: $-0{,}3 + 0 + 0{,}4$.',
            'Vorzeichen nicht vergessen bei $-1 \\cdot 0{,}3$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            'Varianz kann negativ werden, wenn die Abweichungen großteils negativ sind.',
          correct: false,
          explanation:
            'Falsch. Abweichungen werden **quadriert** vor der Mittelung: $(X - \\mu)^2 \\geq 0$ für jeden Ausgang. ' +
            'Die Varianz ist deshalb immer nicht-negativ; $\\operatorname{Var} = 0$ genau dann, wenn $X$ konstant ist.',
          hints: [
            'Was macht die Quadrierung mit negativen Werten?',
            '$(X - \\mu)^2 \\geq 0$ immer.',
            'Mittelwert nicht-negativer Werte: auch nicht-negativ.',
          ],
        },
        {
          type: 'number-input',
          question:
            'Zufallsvariable $X$ nimmt die Werte $2, 4, 6$ mit gleicher Wahrscheinlichkeit $1/3$ an. Berechne $\\operatorname{Var}(X)$.',
          correctValue: 2.666666667,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$E(X) = (2+4+6)/3 = 4$. $\\operatorname{Var}(X) = \\frac{(2-4)^2 + (4-4)^2 + (6-4)^2}{3} = \\frac{4+0+4}{3} = 8/3 \\approx 2{,}67$.',
          hints: [
            'Erst $E(X) = 4$.',
            'Abweichungen quadrieren: $(2-4)^2 = 4$, $(4-4)^2 = 0$, $(6-4)^2 = 4$.',
            'Mittel: $(4 + 0 + 4)/3 = 8/3$.',
          ],
        },
        {
          type: 'matching',
          question: 'Ordne jeder Kenngröße ihre Eigenschaft zu.',
          pairs: [
            { left: '$E(X)$',   right: 'Mittelwert auf lange Sicht' },
            { left: '$\\operatorname{Var}(X)$', right: 'Mittel der quadratischen Abweichung' },
            { left: '$\\sigma(X)$', right: 'Streuungsmaß in der Einheit von X' },
            { left: '$\\sigma(X)^2$', right: 'Varianz' },
          ],
          explanation:
            'Erwartungswert, Varianz und Standardabweichung sind die drei Grundkenngrößen einer Zufallsvariable. ' +
            '$\\sigma$ hat die Einheit von $X$, $\\sigma^2$ die quadrierte Einheit.',
          hints: [
            'Erwartungswert = Mittel.',
            'Standardabweichung = Wurzel der Varianz.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Welche Regel gilt für $\\operatorname{Var}(aX + b)$ mit Konstanten $a, b$?',
          options: [
            '$\\operatorname{Var}(aX + b) = a^2 \\cdot \\operatorname{Var}(X)$',
            '$\\operatorname{Var}(aX + b) = a \\cdot \\operatorname{Var}(X) + b$',
            '$\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X) + b^2$',
            '$\\operatorname{Var}(aX + b) = |a| \\cdot \\operatorname{Var}(X)$',
          ],
          correctIndex: 0,
          explanation:
            'Konstante $b$ verschiebt die Verteilung, ändert aber **nicht** die Streuung. Der Faktor $a$ skaliert die Abweichungen, die quadriert in die Varianz eingehen: $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$. ' +
            'Typische Fehler: $+b$ vergessen zu eliminieren, oder linear statt quadratisch in $a$.',
          hints: [
            'Konstante $b$ verschiebt — ändert Streuung $b$ die Varianz?',
            'Faktor $a$ skaliert die Abweichungen $(X - \\mu)$; Varianz hat diese quadriert.',
            'Ergebnis enthält $a^2$, kein $b$.',
          ],
          wrongAnswerExplanations: {
            '1': 'Der Faktor $a$ geht linear und $b$ additiv ein — beides falsch. Richtig: $a$ quadriert (weil Abweichung quadriert wird) und $b$ fällt ganz weg (reine Verschiebung).',
            '2': 'Der Term $+b^2$ ist überflüssig — Verschiebung ändert die Streuung nicht. Richtig: $\\operatorname{Var}(aX+b) = a^2\\operatorname{Var}(X)$, ohne $b$.',
            '3': '$|a|$ statt $a^2$ entsteht bei Verwechslung mit Standardabweichung: $\\sigma(aX+b) = |a|\\,\\sigma(X)$. Bei der **Varianz** wird aber quadriert.',
          },
        },
        {
          type: 'sorting',
          question: 'Bringe die Schritte zur Berechnung der Varianz in die richtige Reihenfolge.',
          items: [
            'Erwartungswert $E(X) = \\sum x_i p_i$ berechnen',
            'Abweichungen $(x_i - E(X))$ bilden',
            'Abweichungen quadrieren: $(x_i - E(X))^2$',
            'Quadrate gewichtet summieren: $\\sum (x_i - E(X))^2 p_i$',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Ohne $E(X)$ keine Abweichungen. Ohne Quadrierung heben sich positive und negative Abweichungen auf — deshalb zwingend quadrieren.',
          hints: [
            'Erwartungswert immer zuerst.',
            'Quadrieren kommt vor der Summierung.',
          ],
        },
      ],
      masteryQuestion: 'Zwei Zufallsvariablen $X$ und $Y$ haben denselben Erwartungswert, aber $\\operatorname{Var}(X) > \\operatorname{Var}(Y)$. Welche Aussage ist richtig?',
      masteryOptions: [
        '$X$ streut stärker um den Mittelwert als $Y$',
        '$X$ hat größere Werte als $Y$',
        '$X$ und $Y$ haben unterschiedliche Mittelwerte',
        'Das sagt nichts über die Streuung aus',
      ],
      correctIndex: 0,
      masteryExplanation:
        'Varianz misst die mittlere quadratische **Abweichung** vom Erwartungswert. Gleicher Erwartungswert heißt gleicher Mittelpunkt; ' +
        'größere Varianz bei $X$ bedeutet, dass $X$ stärker um diesen Mittelpunkt streut. Wichtige Interpretation in der Qualitätskontrolle: ' +
        'zwei Maschinen mit gleichem Sollmaß aber unterschiedlicher Präzision.',
      masteryHints: [
        'Erwartungswert = Lage. Varianz = Streuung.',
        'Gleicher Mittelwert, aber unterschiedlich stark gestreut.',
        'Höhere Varianz $\\Rightarrow$ stärkere Abweichungen im Mittel.',
      ],
      nextLessonId: 'stat-1-2',
    }),
    makeLesson({
      id: 'stat-1-2',
      title: 'Normalverteilung',
      estimatedMinutes: 13,
      learningGoals: [
        'Normalverteilung $N(\\mu, \\sigma^2)$ parametrieren und interpretieren',
        '68-95-99{,}7%-Regel anwenden',
        'Standardisierung $Z = (X-\\mu)/\\sigma$ durchführen',
      ],
      createdAt: '2026-04-15',
      intuitionTitle: 'Die Glockenkurve',
      intuitionContent:
        'Viele Messgrößen folgen annähernd einer **Normalverteilung**: Körpergröße, Messfehler, Rauschen in Sensoren. ' +
        'Die Dichte ist eine symmetrische Glockenkurve um den Mittelwert $\\mu$; ' +
        'die Breite steuert $\\sigma$.\n\n' +
        '**68-95-99{,}7-Regel:** Im Intervall $[\\mu \\pm \\sigma]$ liegen $\\approx 68\\,\\%$ der Werte, ' +
        'in $[\\mu \\pm 2\\sigma]$ $\\approx 95\\,\\%$, in $[\\mu \\pm 3\\sigma]$ $\\approx 99{,}7\\,\\%$.',
      formulaTitle: 'Dichte und Standardisierung',
      formulaContent:
        '**Dichtefunktion** der $N(\\mu, \\sigma^2)$:\n' +
        '$$\\varphi(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,\\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$$\n\n' +
        '**Standardisierung** (Transformation auf $N(0,1)$):\n' +
        '$$Z = \\frac{X - \\mu}{\\sigma}, \\quad Z \\sim N(0,1)$$\n\n' +
        '$$P(a \\leq X \\leq b) = \\Phi\\!\\left(\\frac{b-\\mu}{\\sigma}\\right) - \\Phi\\!\\left(\\frac{a-\\mu}{\\sigma}\\right)$$',
      exercises: [
        {
          type: 'number-input',
          question:
            'Körpergröße $X \\sim N(175, 64)$ (cm). Welches $\\sigma$ (cm) hat die Verteilung?',
          correctValue: 8,
          tolerance: 0,
          unit: 'cm',
          explanation:
            '$\\sigma = \\sqrt{\\sigma^2} = \\sqrt{64} = 8\\,\\text{cm}$. Vorsicht: zweite Zahl in $N(\\mu, \\sigma^2)$ ist die Varianz!',
          hints: [
            '$N(\\mu, \\sigma^2)$: zweiter Parameter ist die Varianz.',
            '$\\sigma = \\sqrt{\\text{Varianz}}$.',
            '$\\sqrt{64} = 8$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Messfehler einer Waage ist $N(0, 0{,}04)$ g. Welches Intervall enthält $\\approx 68\\,\\%$ der Fehler?',
          options: ['$[-0{,}2;\\, +0{,}2]$ g', '$[-0{,}04;\\, +0{,}04]$ g', '$[-0{,}5;\\, +0{,}5]$ g', '$[-2;\\, +2]$ g'],
          correctIndex: 0,
          explanation:
            '$\\sigma = \\sqrt{0{,}04} = 0{,}2$. 68-Regel: $\\mu \\pm \\sigma = 0 \\pm 0{,}2 = [-0{,}2;\\, +0{,}2]$.',
          hints: [
            'Varianz $= 0{,}04$, also $\\sigma = 0{,}2$.',
            '68 % in $\\mu \\pm \\sigma$.',
            '$0 \\pm 0{,}2$.',
          ],
          wrongAnswerExplanations: {
            '1': 'Hier wurde die Varianz $0{,}04$ direkt als $\\sigma$ verwendet. Richtig: $\\sigma = \\sqrt{0{,}04} = 0{,}2$ — 68 %-Regel nutzt $\\sigma$, nicht $\\sigma^2$.',
            '2': 'Die Halbbreite ist hier $2{,}5\\,\\sigma$, was eher $98{,}8\\,\\%$ entspricht. Die 68-Regel verlangt genau $\\mu \\pm \\sigma$.',
            '3': 'Das wäre $10\\,\\sigma$ — enthält praktisch 100 % aller Werte. Viel zu breit für die 68-Regel.',
          },
        },
        {
          type: 'number-input',
          question:
            'Standardisiere $x = 85$ für $X \\sim N(70, 100)$. Gib $z$ an.',
          correctValue: 1.5,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$z = (x - \\mu)/\\sigma = (85 - 70)/\\sqrt{100} = 15/10 = 1{,}5$.',
          hints: [
            'Formel: $z = (x - \\mu)/\\sigma$.',
            '$\\sigma = \\sqrt{100} = 10$.',
            '$(85 - 70)/10 = 15/10 = 1{,}5$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            'In einer Normalverteilung $N(\\mu, \\sigma^2)$ sind Mittelwert, Median und Modus gleich.',
          correct: true,
          explanation:
            'Richtig. Die Dichte ist **symmetrisch** um $\\mu$ und hat dort ihr Maximum. Daher fallen Mittelwert, Median und Modus alle auf $\\mu$.',
          hints: [
            'Wie sieht die Glockenkurve aus?',
            'Symmetrie → Mittelwert = Median.',
            'Maximum der Dichte → Modus.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Welche Wahrscheinlichkeit entspricht $P(X > \\mu + 2\\sigma)$ bei einer Normalverteilung?',
          options: ['$\\approx 2{,}5\\,\\%$', '$\\approx 5\\,\\%$', '$\\approx 50\\,\\%$', '$\\approx 16\\,\\%$'],
          correctIndex: 0,
          explanation:
            '95 %-Regel: $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}95$. ' +
            'Verbleibende 5 % verteilen sich symmetrisch: je 2,5 % außerhalb links und rechts. Daher $P(X > \\mu + 2\\sigma) \\approx 2{,}5\\,\\%$.',
          hints: [
            '95 % liegt innerhalb von $\\mu \\pm 2\\sigma$.',
            '5 % liegen außerhalb.',
            'Symmetrie: je 2,5 % auf jeder Seite.',
          ],
          wrongAnswerExplanations: {
            '1': '5 % sind die gesamte Restmasse außerhalb von $\\mu \\pm 2\\sigma$ (beide Seiten zusammen). Gefragt war nur die rechte Seite — also Hälfte davon, $2{,}5\\,\\%$.',
            '2': '50 % entspricht $P(X > \\mu)$ (Median). Bei $\\mu + 2\\sigma$ liegt schon viel weiter rechts, daher deutlich kleiner.',
            '3': '16 % entspricht $P(X > \\mu + \\sigma)$ (Hälfte der 32 % Außenbereich der 68-Regel), nicht $P(X > \\mu + 2\\sigma)$.',
          },
        },
        {
          type: 'number-input',
          question:
            'Produktionsteil $X \\sim N(50, 4)$ mm. Wie viel Prozent liegen zwischen $48$ und $52$ mm? (als Dezimalzahl)',
          correctValue: 0.683,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$\\sigma = \\sqrt{4} = 2$. Intervall $[48, 52] = [\\mu - \\sigma, \\mu + \\sigma]$. Das sind **68,3 %** nach der 68-Regel.',
          hints: [
            '$\\sigma = 2$, Intervallbreite $= 2\\sigma$.',
            '$[50-2, 50+2] = [\\mu \\pm \\sigma]$.',
            '$\\mu \\pm \\sigma$ enthält $\\approx 68\\,\\%$.',
          ],
        },
        {
          type: 'matching',
          question: 'Ordne jeder Quantile (Standardnormal) ihre Wahrscheinlichkeit zu.',
          pairs: [
            { left: '$\\Phi(0)$', right: '$0{,}5$' },
            { left: '$\\Phi(1)$', right: '$0{,}841$' },
            { left: '$\\Phi(1{,}96)$', right: '$0{,}975$' },
            { left: '$\\Phi(2{,}576)$', right: '$0{,}995$' },
          ],
          explanation:
            'Standard-Quantile: $\\Phi(0) = 0{,}5$ (Median), $\\Phi(1) \\approx 0{,}841$ (68 %-Regel-Rand), ' +
            '$\\Phi(1{,}96) = 0{,}975$ (95 %-Quantil), $\\Phi(2{,}576) = 0{,}995$ (99 %-Quantil).',
          hints: [
            '$\\Phi$ ist kumulative Verteilungsfunktion.',
            '$\\Phi(0)$ = halbe Wahrscheinlichkeitsmasse.',
            '1,96 und 2,576 sind Prüfungs-Standardwerte.',
          ],
        },
        {
          type: 'sorting',
          question: 'Schritte zur Berechnung von $P(a \\leq X \\leq b)$ bei $X \\sim N(\\mu, \\sigma^2)$.',
          items: [
            'Grenzen standardisieren: $z_a = (a-\\mu)/\\sigma$, $z_b = (b-\\mu)/\\sigma$',
            'Wahrscheinlichkeiten ablesen: $\\Phi(z_a)$ und $\\Phi(z_b)$',
            'Differenz bilden: $P(a \\leq X \\leq b) = \\Phi(z_b) - \\Phi(z_a)$',
            'Plausibilität prüfen: Ergebnis zwischen 0 und 1',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Standardisieren ist der Brückenschlag zur Tabelle, die nur $\\Phi$ für $N(0,1)$ enthält. Differenz gibt die Wahrscheinlichkeit für das Intervall.',
          hints: [
            'Ohne Standardisierung kein Tabellenwert.',
            'Immer $\\Phi(z_b) - \\Phi(z_a)$, niemals umgekehrt.',
          ],
        },
      ],
      masteryQuestion:
        '$X \\sim N(10, 4)$ (d.h. $\\mu = 10$, $\\sigma = 2$). In welchem Intervall liegen $\\approx 95\\,\\%$ der Werte?',
      masteryOptions: ['$[6,\\,14]$', '$[8,\\,12]$', '$[4,\\,16]$', '$[9,\\,11]$'],
      correctIndex: 0,
      masteryExplanation:
        '$\\sigma = \\sqrt{4} = 2$. 95-%-Regel: $\\mu \\pm 2\\sigma = 10 \\pm 4 = [6, 14]$.',
      masteryHints: [
        '$\\sigma = \\sqrt{\\sigma^2} = \\sqrt{4} = 2$.',
        '95\\,% entspricht $\\mu \\pm 2\\sigma$.',
        '$\\mu \\pm 2\\sigma = 10 \\pm 4 = [6, 14]$.',
      ],
      masteryVisualization: {
        id: 'bell-curve',
        params: {
          mu: 10,
          sigma: 2,
          xRange: [2, 18],
          shade: [6, 14],
          showBands: true,
        },
        caption: 'N(10, 4): 95%-Intervall [6, 14] = μ±2σ',
        alt: 'Glockenkurve mit μ=10, σ=2 und schattiertem 95%-Intervall',
      },
      prerequisites: ['stat-1-1'],
      nextLessonId: 'stat-1-3',
    }),
    makeLesson({
      id: 'stat-1-3',
      title: 'Hypothesentest und Konfidenzintervall',
      estimatedMinutes: 15,
      learningGoals: [
        'Nullhypothese $H_0$ und Alternativhypothese $H_1$ formulieren',
        'p-Wert interpretieren und mit Signifikanzniveau $\\alpha$ vergleichen',
        '95%-Konfidenzintervall für den Mittelwert berechnen',
      ],
      createdAt: '2026-04-15',
      intuitionTitle: 'Ist der Effekt echt oder zufällig?',
      intuitionContent:
        'Ein **Hypothesentest** prüft, ob ein beobachteter Effekt zufällig sein könnte. ' +
        'Man formuliert eine **Nullhypothese** $H_0$ (z.B. „Mittelwert = 5") und berechnet, ' +
        'wie wahrscheinlich das gemessene Ergebnis unter $H_0$ wäre — das ist der **p-Wert**. ' +
        'Ist $p < \\alpha$ (üblich $\\alpha = 0{,}05$), verwirft man $H_0$.\n\n' +
        'Ein **Konfidenzintervall** gibt den Bereich an, in dem der wahre Parameter mit Wahrscheinlichkeit $1-\\alpha$ liegt.',
      formulaTitle: 'Schätzer, KI und t-Test',
      formulaContent:
        '**Stichprobenmittel und -varianz:**\n' +
        '$$\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i, \\qquad s^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2$$\n\n' +
        '**95%-Konfidenzintervall** für $\\mu$ (unbekanntes $\\sigma$, t-Verteilung mit $n-1$ Freiheitsgraden):\n' +
        '$$\\bar{x} \\pm t_{n-1,\\,0{,}975} \\cdot \\frac{s}{\\sqrt{n}}$$\n\n' +
        'Für großes $n$: $t_{n-1,\\,0{,}975} \\approx 1{,}96$.',
      exercises: [
        {
          type: 'multiple-choice',
          question: 'Was ist die **Nullhypothese** $H_0$?',
          options: [
            'Die zu widerlegende Aussage („es gibt keinen Effekt")',
            'Die gesuchte Alternative',
            'Der Mittelwert der Stichprobe',
            'Das Konfidenzintervall',
          ],
          correctIndex: 0,
          explanation:
            '$H_0$ ist die Hypothese, die man prüfen und (bei Signifikanz) verwerfen möchte — meist die „neutrale" Annahme „kein Effekt", „gleich", „identisch".',
          hints: [
            '$H_0$ wird getestet und ggf. abgelehnt.',
            'Die Alternative ist $H_1$ — der vermutete Effekt.',
          ],
          wrongAnswerExplanations: {
            '1': 'Das beschreibt die **Alternativ**hypothese $H_1$. $H_0$ ist die Gegenaussage, die man widerlegen möchte.',
            '2': '$\\bar x$ ist ein Schätzer, keine Hypothese. Hypothesen sind Aussagen über Parameter der Grundgesamtheit, nicht über Stichprobengrößen.',
            '3': 'Das Konfidenzintervall ist ein Bereichsschätzer, keine Hypothese. Verbunden, aber konzeptionell verschieden.',
          },
        },
        {
          type: 'true-false',
          statement:
            'Ein 95%-Konfidenzintervall bedeutet: Mit 95 % Wahrscheinlichkeit liegt der wahre Parameter in diesem konkreten Intervall.',
          correct: false,
          explanation:
            'Falsch (frequentistisch). Das konkrete Intervall enthält $\\mu$ entweder oder nicht. Die korrekte Interpretation: ' +
            '**Bei wiederholter Stichprobennahme würden 95 % der so gebildeten Intervalle** $\\mu$ **enthalten**. ' +
            'Die 95 % beziehen sich auf die Methode, nicht auf das einzelne Ergebnis.',
          hints: [
            'Feinheit der Interpretation: Methode vs. einzelnes Intervall.',
            'Im frequentistischen Rahmen ist $\\mu$ fix, das Intervall zufällig.',
            'Prüfungsrelevant!',
          ],
        },
        {
          type: 'number-input',
          question:
            'Stichprobe: $\\bar x = 50$, $s = 10$, $n = 100$. Berechne die Breite des 95%-Konfidenzintervalls (Gesamtbreite, nicht Halbbreite) mit $t \\approx 1{,}96$.',
          correctValue: 3.92,
          tolerance: 0.05,
          unit: '',
          explanation:
            'Halbbreite: $1{,}96 \\cdot s/\\sqrt{n} = 1{,}96 \\cdot 10/10 = 1{,}96$. Gesamtbreite: $2 \\cdot 1{,}96 = 3{,}92$.',
          hints: [
            'Halbbreite $= 1{,}96 \\cdot s/\\sqrt{n}$.',
            '$s/\\sqrt{n} = 10/10 = 1$.',
            'Gesamtbreite = doppelte Halbbreite.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Bei p-Wert $= 0{,}12$ und Signifikanzniveau $\\alpha = 0{,}05$: Was folgt?',
          options: [
            '$H_0$ **nicht** ablehnen — Ergebnis nicht signifikant',
            '$H_0$ ablehnen — Ergebnis signifikant',
            'Test ist fehlerhaft',
            '$H_1$ ist bewiesen',
          ],
          correctIndex: 0,
          explanation:
            '$p = 0{,}12 > \\alpha = 0{,}05$: Daten liefern **keinen** Grund, $H_0$ zu verwerfen. ' +
            '„Nicht ablehnen" ist nicht dasselbe wie „$H_0$ bestätigt"!',
          hints: [
            'Vergleich: $p$ vs. $\\alpha$.',
            '$p > \\alpha$ bedeutet: nicht signifikant.',
            'Nicht signifikant $\\neq$ $H_0$ wahr.',
          ],
          wrongAnswerExplanations: {
            '1': 'Ablehnung erfordert $p < \\alpha$. Hier gilt $0{,}12 > 0{,}05$, daher **nicht** signifikant.',
            '2': 'Ein hoher p-Wert deutet nicht auf einen Testfehler hin — er bedeutet einfach, dass die Daten mit $H_0$ kompatibel sind.',
            '3': 'Beweis ist in der Statistik nie möglich. Selbst bei $p < \\alpha$ wird $H_0$ nur **abgelehnt**, nicht $H_1$ bewiesen.',
          },
        },
        {
          type: 'number-input',
          question:
            'Halbbreite eines 95%-KI ist $0{,}5$. Stichprobe $n = 64$, $\\sigma$ bekannt. Berechne $\\sigma$ (mit $z = 1{,}96$).',
          correctValue: 2.04,
          tolerance: 0.05,
          unit: '',
          explanation:
            'Halbbreite $= z \\cdot \\sigma/\\sqrt{n}$ → $\\sigma = \\text{Halbbreite} \\cdot \\sqrt{n}/z = 0{,}5 \\cdot 8 / 1{,}96 \\approx 2{,}04$.',
          hints: [
            '$d = z \\cdot \\sigma/\\sqrt{n}$ nach $\\sigma$ umstellen.',
            '$\\sigma = d \\cdot \\sqrt{n}/z$.',
            '$0{,}5 \\cdot 8 = 4$, $4/1{,}96 \\approx 2{,}04$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            'Wenn man mehr Stichproben nimmt (größeres $n$), wird das Konfidenzintervall schmaler.',
          correct: true,
          explanation:
            'Richtig. Halbbreite $\\propto 1/\\sqrt{n}$. Vierfach größere Stichprobe → halb so breites Intervall. ' +
            'Daher: **Präzision** des geschätzten Mittelwerts steigt mit $\\sqrt{n}$.',
          hints: [
            'Wo steht $n$ in der Formel?',
            '$\\sigma/\\sqrt{n}$ — was passiert bei größerem $n$?',
            'Nenner wächst → Bruch sinkt.',
          ],
        },
        {
          type: 'matching',
          question: 'Ordne jedem Symbol seine Bedeutung zu.',
          pairs: [
            { left: '$\\alpha$',  right: 'Signifikanzniveau (Fehler 1. Art)' },
            { left: '$p$',        right: 'p-Wert (Beobachtungswahrscheinlichkeit unter $H_0$)' },
            { left: '$H_0$',       right: 'Nullhypothese' },
            { left: '$H_1$',       right: 'Alternativhypothese' },
          ],
          explanation:
            '$\\alpha$ setzt der Anwender (meist 5 %), $p$ kommt aus den Daten. $p < \\alpha$ → $H_0$ ablehnen.',
          hints: [
            '$\\alpha$ = erlaubte Fehlerrate.',
            '$p$ = beobachtete Wahrscheinlichkeit.',
          ],
        },
        {
          type: 'sorting',
          question: 'Bringe die Schritte eines Hypothesentests in die richtige Reihenfolge.',
          items: [
            'Hypothesen $H_0$ und $H_1$ formulieren',
            'Signifikanzniveau $\\alpha$ festlegen (z.B. $0{,}05$)',
            'Teststatistik aus Stichprobe berechnen',
            'p-Wert bestimmen und mit $\\alpha$ vergleichen; Entscheidung treffen',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Die Reihenfolge verhindert „Cherry Picking": Hypothese und $\\alpha$ **vor** Datenauswertung festlegen. ' +
            'Sonst verfälscht man die Fehlerrate.',
          hints: [
            'Hypothesen vor Datenauswertung.',
            '$\\alpha$ wird VOR dem Test fixiert.',
          ],
        },
      ],
      masteryQuestion:
        'Ein Experiment liefert $p = 0{,}03$ bei $\\alpha = 0{,}05$. Was schlussfolgert man?',
      masteryOptions: [
        '$H_0$ ablehnen — Ergebnis signifikant',
        '$H_0$ beibehalten — Ergebnis nicht signifikant',
        'Ergebnis ist bedeutungslos',
        'Test muss wiederholt werden',
      ],
      correctIndex: 0,
      masteryExplanation:
        '$p = 0{,}03 < \\alpha = 0{,}05$: Das Ergebnis ist statistisch signifikant, $H_0$ wird abgelehnt.',
      masteryHints: [
        'Vergleich: p-Wert vs. Signifikanzniveau $\\alpha$.',
        'Kleiner p-Wert = stärkere Evidenz gegen $H_0$.',
        '$p = 0{,}03 < \\alpha = 0{,}05$: signifikant, $H_0$ ablehnen.',
      ],
      masteryVisualization: {
        id: 'bell-curve',
        params: {
          mu: 0,
          sigma: 1,
          xRange: [-4, 4],
          shade: [1.96, 4],
          showBands: false,
        },
        caption: 'Standardnormalverteilung: Ablehnungsbereich (α=0,05) bei z>1,96',
        alt: 'Standardnormalverteilung mit schattiertem Ablehnungsbereich rechts von z=1,96',
      },
      prerequisites: ['stat-1-2'],
      nextLessonId: 'stat-pruefung-1',
    }),
  ],
})

const unit2 = makeUnit({
  id: 'stat-unit-2',
  title: 'Prüfung',
  order: 2,
  lessons: [
    makeLesson({
      id: 'stat-pruefung-1',
      title: 'Prüfung: Schätzung & Hypothesentest',
      estimatedMinutes: 25,
      isExam: true,
      learningGoals: [
        'Konfidenzintervall für Mittelwert angeben',
        't-Test und $\\chi^2$-Test unterscheiden',
        'p-Wert und Signifikanzniveau interpretieren',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Prüfungs-Strategie',
      intuitionContent:
        '**Konfidenzintervall (95%):** $\\bar x \\pm t \\cdot s/\\sqrt{n}$. Bei großem n und bekanntem $\\sigma$ statt $t$ das $1{,}96$-Quantil.\n\n' +
        '**Hypothesentest:** $H_0$ formulieren, Teststatistik berechnen, p-Wert vs. $\\alpha$ (üblich $0{,}05$) vergleichen. ' +
        'Ablehnung von $H_0$ nur wenn $p < \\alpha$.',
      formulaTitle: 'Schätzer & Intervalle',
      formulaContent:
        '$$\\bar x = \\frac{1}{n}\\sum x_i, \\qquad s^2 = \\frac{1}{n-1}\\sum (x_i-\\bar x)^2$$\n\n' +
        '**95%-KI:** $\\bar x \\pm 1{,}96 \\cdot s/\\sqrt{n}$ (für großes n).',
      exercises: [
        {
          type: 'number-input',
          question: '[PRÜFUNG] Aufwärmaufgabe: Mittelwert von $5$ Messungen: $10, 12, 11, 13, 14$.',
          correctValue: 12,
          tolerance: 0,
          unit: '',
          explanation: '$\\bar x = (10+12+11+13+14)/5 = 60/5 = 12$.',
          hints: [
            'Summe durch Anzahl.',
            '$10+12+11+13+14 = 60$.',
            '$60/5 = 12$.',
          ],
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Stichprobenvarianz $s^2$ von $4, 6, 8$.',
          correctValue: 4,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$\\bar x = 6$. $\\sum (x_i - \\bar x)^2 = (-2)^2 + 0^2 + 2^2 = 8$. $s^2 = 8/(n-1) = 8/2 = 4$.',
          hints: [
            'Erst Mittelwert: $(4+6+8)/3 = 6$.',
            'Abweichungen quadrieren: $4, 0, 4$. Summe: $8$.',
            'Durch $n-1 = 2$ teilen: $s^2 = 4$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Warum wird bei der Stichprobenvarianz durch $n-1$ (nicht $n$) geteilt?',
          options: [
            'Um einen **erwartungstreuen** Schätzer für $\\sigma^2$ zu erhalten (Bessel-Korrektur)',
            'Aus Tradition',
            'Um die Rechnung zu vereinfachen',
            'Weil $n-1$ immer größer ist',
          ],
          correctIndex: 0,
          explanation:
            'Mit $n$ würde $E(s^2) < \\sigma^2$ (Unterschätzung). Die Korrektur $n-1$ heißt **Bessel-Korrektur** und macht $s^2$ erwartungstreu: $E(s^2) = \\sigma^2$.',
          hints: [
            'Stichprobenvarianz vs. wahre Varianz.',
            'Begriff: Erwartungstreu (unbiased).',
            'Bessel-Korrektur — relevant bei Prüfungen.',
          ],
          wrongAnswerExplanations: {
            '1': 'Keine Tradition, sondern Mathematik: Teilen durch $n$ liefert einen systematisch zu kleinen Schätzer. $n-1$ ist theoretisch begründet (Freiheitsgradverlust durch $\\bar x$).',
            '2': 'Teilen durch $n$ wäre rechnerisch einfacher, ist aber statistisch verzerrt. Man akzeptiert die kleine Komplikation, um Erwartungstreue zu erhalten.',
            '3': '$n-1$ ist per Definition **kleiner** als $n$. Der Grund ist statistischer Natur (Freiheitsgrade), nicht arithmetischer.',
          },
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Stichprobe $n = 25$, $\\bar x = 100$, $s = 10$. Halbbreite des 95%-KI (t-Wert $t_{24;0{,}975} \\approx 2{,}064$)?',
          options: ['$\\approx 4{,}13$', '$\\approx 1{,}96$', '$\\approx 10$', '$\\approx 0{,}4$'],
          correctIndex: 0,
          explanation:
            '$d = t \\cdot s/\\sqrt{n} = 2{,}064 \\cdot 10/\\sqrt{25} = 2{,}064 \\cdot 2 = 4{,}128 \\approx 4{,}13$.',
          hints: [
            'Halbbreite $= t \\cdot s/\\sqrt{n}$.',
            '$s/\\sqrt{n} = 10/5 = 2$.',
            '$2{,}064 \\cdot 2 \\approx 4{,}13$.',
          ],
          wrongAnswerExplanations: {
            '1': 'Hier wurde $z = 1{,}96$ statt $t_{24;0{,}975} = 2{,}064$ genommen und außerdem $s/\\sqrt{n} = 1$ angenommen. Beide Fehler kumuliert — richtig: $2{,}064 \\cdot 2 = 4{,}13$.',
            '2': 'Hier ist der Faktor $t$ vergessen — nur $s = 10$ angegeben. Die Halbbreite muss $s$ mit $t/\\sqrt{n}$ multiplizieren, also $10 \\cdot 2{,}064/5 \\approx 4{,}13$.',
            '3': 'Hier wurde $\\sqrt{n}$ mit $n$ verwechselt: $s/n = 10/25 = 0{,}4$, dann $\\cdot\\, 2{,}064 \\approx 0{,}83$ — gerundet $0{,}4$. Die Formel ist $s/\\sqrt{n}$, nicht $s/n$.',
          },
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Bei kleinen Stichproben $n < 30$ sollte für das KI die t-Verteilung statt der Normalverteilung verwendet werden.',
          correct: true,
          explanation:
            'Richtig. Bei kleinem $n$ ist $s$ ungenau — die t-Verteilung berücksichtigt diese Unsicherheit durch etwas schwerere Schwänze ($t > z$). ' +
            'Für $n \\to \\infty$ konvergiert $t \\to z = 1{,}96$.',
          hints: [
            'Warum ist die t-Verteilung „breiter"?',
            'Kleine $n$ → $s$ weniger zuverlässig → mehr Unsicherheit.',
            'Mit größerem $n$ schrumpft der Unterschied.',
          ],
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Wie viele Messungen $n$ sind nötig für eine KI-Halbbreite $\\leq 1$ bei $\\sigma = 5$ und 95%-KI ($z = 1{,}96$)?',
          correctValue: 97,
          tolerance: 2,
          unit: '',
          explanation:
            '$n \\geq (z \\sigma/d)^2 = (1{,}96 \\cdot 5/1)^2 = (9{,}8)^2 = 96{,}04$, also $n \\geq 97$ (aufrunden).',
          hints: [
            '$d = z\\sigma/\\sqrt{n}$ nach $n$ umstellen.',
            '$n \\geq (z\\sigma/d)^2$.',
            '$(1{,}96 \\cdot 5)^2 = 9{,}8^2 \\approx 96$, aufrunden auf $97$.',
          ],
        },
        {
          type: 'matching',
          question:
            '[PRÜFUNG] Ordne jedem Stichproben-Kennwert seine Formel zu.',
          pairs: [
            { left: '$\\bar x$',  right: '$\\frac{1}{n}\\sum x_i$' },
            { left: '$s^2$',      right: '$\\frac{1}{n-1}\\sum (x_i-\\bar x)^2$' },
            { left: '$s$',        right: '$\\sqrt{s^2}$' },
            { left: 'SE',         right: '$s/\\sqrt{n}$' },
          ],
          explanation:
            'SE = Standardfehler des Mittelwerts, ein Maß für die Streuung des Stichprobenmittels. Zentrale Größe für KI: Halbbreite = $z \\cdot SE$.',
          hints: [
            'SE ist Streuung des **Mittelwerts**, nicht der Einzelwerte.',
            '$s/\\sqrt{n}$ — klassischer Ausdruck.',
          ],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Strategie zur KI-Berechnung in Prüfungsaufgabe. Bringe die Schritte in Reihenfolge.',
          items: [
            'Stichprobenkennwerte $\\bar x$ und $s$ berechnen',
            'Standardfehler $SE = s/\\sqrt{n}$ bilden',
            't-Quantil (bzw. $1{,}96$ für großes $n$) aus Tabelle',
            'KI: $\\bar x \\pm t \\cdot SE$',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Reihenfolge stellt sicher, dass alle Bausteine bereit sind, bevor der Schlussformel-Bau erfolgt. ' +
            'Typischer Fehler: $t$ ohne Nachschlagen raten oder den Standardfehler vergessen.',
          hints: [
            'Erst Daten, dann Fehler, dann Quantil, dann KI.',
            'SE und $t$ getrennt!',
          ],
        },
      ],
      masteryQuestion: '[PRÜFUNG] Mittelwert von 4, 5, 6, 7, 8?',
      masteryOptions: ['$6$', '$5$', '$7$', '$4{,}5$'],
      correctIndex: 0,
      masteryExplanation: '$\\bar x = (4+5+6+7+8)/5 = 30/5 = 6$.',
      masteryHints: [
        'Mittelwert: Summe aller Werte geteilt durch Anzahl.',
        'Summe: $4+5+6+7+8 = 30$.',
        '$\\bar x = 30/5 = 6$.',
      ],
      masteryVisualization: {
        id: 'bell-curve',
        params: {
          mu: 6,
          sigma: 1.58,
          xRange: [2, 10],
          shade: [4.42, 7.58],
          showBands: false,
        },
        caption: 'Normalverteilung um Mittelwert μ=6 mit 95%-KI (±1,96σ)',
        alt: 'Glockenkurve mit Mittelwert 6 und schattiertem Konfidenzintervall',
      },
      prerequisites: ['stat-1-3'],
      nextLessonId: 'stat-pruefung-2',
    }),
    makeLesson({
      id: 'stat-pruefung-2',
      title: 'Prüfung: Normalverteilung & Standardisierung',
      estimatedMinutes: 22,
      isExam: true,
      learningGoals: [
        '[PRÜFUNG] Standardisierung $Z=(X-\\mu)/\\sigma$ durchführen',
        '[PRÜFUNG] Wahrscheinlichkeiten mit $\\Phi$-Tabelle berechnen',
        '[PRÜFUNG] 68-95-99,7%-Regel anwenden',
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Umrechnen auf N(0,1)',
      intuitionContent:
        'Jede Normalverteilung $X \\sim N(\\mu, \\sigma^2)$ lässt sich durch Standardisierung ' +
        'auf die **Standardnormalverteilung** $Z \\sim N(0,1)$ zurückführen.\n\n' +
        'Wahrscheinlichkeiten liest man dann aus der $\\Phi$-Tabelle ab: ' +
        '$P(X \\leq x) = \\Phi\\!\\left(\\frac{x-\\mu}{\\sigma}\\right)$.\n\n' +
        '**68-95-99,7-Regel:** $P(\\mu-k\\sigma \\leq X \\leq \\mu+k\\sigma)$ für $k=1,2,3$.',
      formulaTitle: 'Standardisierung & Wahrscheinlichkeiten',
      formulaContent:
        '**Standardisierung:** $Z = \\dfrac{X - \\mu}{\\sigma}$\n\n' +
        '**Wahrscheinlichkeit:**\n' +
        '$$P(a \\leq X \\leq b) = \\Phi\\!\\left(\\frac{b-\\mu}{\\sigma}\\right) - \\Phi\\!\\left(\\frac{a-\\mu}{\\sigma}\\right)$$\n\n' +
        '**Symmetrie:** $\\Phi(-z) = 1 - \\Phi(z)$\n\n' +
        '**Wichtige Quantile:** $\\Phi(1{,}645) = 0{,}95$, $\\Phi(1{,}96) = 0{,}975$, $\\Phi(2{,}576) = 0{,}995$',
      exercises: [
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Aufwärmaufgabe: $X \\sim N(100, 25)$. Standardisiere $x = 110$ zu $z$.',
          correctValue: 2,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$\\sigma = \\sqrt{25} = 5$. $z = (110 - 100)/5 = 10/5 = 2$.',
          hints: [
            '$\\sigma = \\sqrt{\\text{Varianz}} = 5$.',
            '$z = (x - \\mu)/\\sigma$.',
            '$10/5 = 2$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] $X \\sim N(50, 16)$. Berechne $P(X \\leq 42)$ mit $\\Phi(-2) = 1 - \\Phi(2) \\approx 0{,}023$.',
          options: [
            '$\\approx 0{,}023$',
            '$\\approx 0{,}977$',
            '$\\approx 0{,}5$',
            '$\\approx 0{,}159$',
          ],
          correctIndex: 0,
          explanation:
            '$\\sigma = 4$, $z = (42-50)/4 = -2$. $P(X \\leq 42) = \\Phi(-2) = 1 - \\Phi(2) \\approx 1 - 0{,}977 = 0{,}023$.',
          hints: [
            '$\\sigma = \\sqrt{16} = 4$.',
            '$z = -8/4 = -2$.',
            'Symmetrie: $\\Phi(-z) = 1 - \\Phi(z)$.',
          ],
          wrongAnswerExplanations: {
            '1': 'Das ist $\\Phi(+2) = P(Z \\leq 2)$, entstanden durch Vergessen des Vorzeichens bei $z = -2$. Bei $x < \\mu$ ist $z$ negativ und die Wahrscheinlichkeit klein.',
            '2': '$0{,}5$ entspricht $P(X \\leq \\mu) = P(X \\leq 50)$. Hier ist aber $x = 42 < \\mu$, also deutlich kleiner als $0{,}5$.',
            '3': '$0{,}159 = 1 - \\Phi(1)$ entsteht aus $z = -1$ statt $z = -2$. Hier aber: $z = (42-50)/4 = -2$, nicht $-1$.',
          },
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Werkstück-Dicke $X \\sim N(10\\,\\text{mm}, 0{,}25\\,\\text{mm}^2)$. ' +
            'Bei welcher Toleranzbreite $\\Delta$ (symmetrisch um $\\mu$) liegen $\\approx 95\\,\\%$ der Werkstücke? Gib Halbbreite (in mm) an.',
          correctValue: 1,
          tolerance: 0.02,
          unit: 'mm',
          explanation:
            '$\\sigma = \\sqrt{0{,}25} = 0{,}5\\,\\text{mm}$. 95-Regel: $\\mu \\pm 2\\sigma = 10 \\pm 1\\,\\text{mm}$. Halbbreite: $1\\,\\text{mm}$.',
          hints: [
            '$\\sigma = \\sqrt{0{,}25} = 0{,}5$.',
            '95 % → $\\mu \\pm 2\\sigma$.',
            '$2 \\cdot 0{,}5 = 1$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Nach Standardisierung mit $Z = (X-\\mu)/\\sigma$ ist die neue Zufallsvariable Z standardnormalverteilt $N(0, 1)$.',
          correct: true,
          explanation:
            'Richtig. $E(Z) = 0$, $\\operatorname{Var}(Z) = 1$ — Mittelwert und Varianz werden durch lineare Transformation auf die Standardnormalverteilung normiert.',
          hints: [
            '$E(aX + b) = a E(X) + b$, $\\operatorname{Var}(aX) = a^2\\operatorname{Var}(X)$.',
            'Subtraktion von $\\mu$: neuer Mittelwert $0$.',
            'Division durch $\\sigma$: neue Varianz $1$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] $X \\sim N(0, 1)$. Welches $z$ erfüllt $P(Z \\leq z) = 0{,}975$?',
          options: ['$z = 1{,}96$', '$z = 1$', '$z = 2{,}576$', '$z = 0{,}975$'],
          correctIndex: 0,
          explanation:
            '$\\Phi(1{,}96) = 0{,}975$ — zentrale Größe für das 95%-Konfidenzintervall (97,5 % links + 2,5 % rechts außen = 2-seitig 95 %).',
          hints: [
            'Standard-Quantile merken.',
            '1,96 ist DER Prüfungswert.',
          ],
          wrongAnswerExplanations: {
            '1': '$\\Phi(1) \\approx 0{,}841$, nicht $0{,}975$. $z = 1$ gehört zur 68-Regel, nicht zum 95-%-Quantil.',
            '2': '$\\Phi(2{,}576) = 0{,}995$ entspricht dem 99-%-Quantil (bzw. 2-seitig 99 %). Gesucht ist $0{,}975$, also 95 % zweiseitig mit $z = 1{,}96$.',
            '3': 'Verwechslung von Quantil und Wahrscheinlichkeit: $z$ ist das Argument von $\\Phi$, nicht der Funktionswert selbst. $\\Phi(0{,}975) \\approx 0{,}835$, nicht $0{,}975$.',
          },
        },
        {
          type: 'matching',
          question:
            '[PRÜFUNG] Ordne jedem Intervall die zugehörige Wahrscheinlichkeit zu ($X \\sim N(\\mu, \\sigma^2)$).',
          pairs: [
            { left: '$P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma)$',      right: '$\\approx 0{,}683$' },
            { left: '$P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma)$',    right: '$\\approx 0{,}954$' },
            { left: '$P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma)$',    right: '$\\approx 0{,}997$' },
            { left: '$P(X > \\mu + \\sigma)$',                                 right: '$\\approx 0{,}159$' },
          ],
          explanation:
            '68-95-99,7-Regel in drei Zeilen. $P(X > \\mu + \\sigma)$ ist die Hälfte der 32 % Außenbereich.',
          hints: [
            'Die 68-95-99,7-Regel auswendig.',
            'Außenbereich der 68-Regel: $1 - 0{,}683 = 0{,}317$, halbiert $\\approx 0{,}159$.',
          ],
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Glühbirnen $X \\sim N(1000\\,\\text{h}, 2500\\,\\text{h}^2)$. Wahrscheinlichkeit, dass eine Birne **länger als 1100 h** hält? Nutze $\\Phi(2) = 0{,}977$.',
          correctValue: 0.023,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$\\sigma = 50$, $z = (1100 - 1000)/50 = 2$. $P(X > 1100) = 1 - \\Phi(2) \\approx 1 - 0{,}977 = 0{,}023$.',
          hints: [
            '$\\sigma = \\sqrt{2500} = 50$.',
            '$z = 100/50 = 2$.',
            '$P(X > x) = 1 - \\Phi(z)$.',
          ],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Strategie zur Berechnung von $P(X \\leq x)$ bei $X \\sim N(\\mu, \\sigma^2)$. Bringe die Schritte in Reihenfolge.',
          items: [
            'Varianz $\\sigma^2$ ablesen, $\\sigma = \\sqrt{\\sigma^2}$',
            'Standardisieren: $z = (x - \\mu)/\\sigma$',
            '$\\Phi(z)$ aus Tabelle ablesen (oder Symmetrie $\\Phi(-z) = 1 - \\Phi(z)$ nutzen)',
            'Bei $P(X > x)$: $1 - \\Phi(z)$; bei $P(a \\leq X \\leq b)$: $\\Phi(z_b) - \\Phi(z_a)$',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            '$\\sigma$ muss zuerst sauber gezogen werden (typische Stolperstelle: $\\sigma^2$ vs $\\sigma$ verwechseln!). ' +
            'Danach ist das Rezept mechanisch: standardisieren → Tabelle → je nach Fragestellung umrechnen.',
          hints: [
            '$\\sigma^2$ vs. $\\sigma$ — häufiger Fehler.',
            'Immer standardisieren vor der Tabelle.',
          ],
        },
      ],
      masteryQuestion:
        '[PRÜFUNG] $X \\sim N(5, 1)$. Wie groß ist $P(X > 6)$?',
      masteryOptions: [
        '$\\approx 0{,}159$ (= $1-\\Phi(1)$)',
        '$\\approx 0{,}841$',
        '$\\approx 0{,}500$',
        '$\\approx 0{,}023$',
      ],
      correctIndex: 0,
      masteryExplanation:
        'Standardisierung: $z = (6-5)/1 = 1$. $P(X > 6) = 1 - \\Phi(1) \\approx 1 - 0{,}841 = 0{,}159$. ' +
        'Nach der 68%-Regel liegen 68% der Werte in $[\\mu \\pm \\sigma]$, also $32\%/2 = 16\\%$ oberhalb $\\mu+\\sigma$.',
      masteryHints: [
        'Standardisieren: $z = (x - \\mu)/\\sigma = (6-5)/1 = 1$.',
        '$P(X > 6) = P(Z > 1) = 1 - \\Phi(1)$.',
        '$\\Phi(1) \\approx 0{,}841$, also $P(X>6) \\approx 1 - 0{,}841 = 0{,}159$.',
      ],
      masteryVisualization: {
        id: 'bell-curve',
        params: {
          mu: 5,
          sigma: 1,
          xRange: [1, 9],
          shade: [6, 9],
          showBands: true,
        },
        caption: 'N(5,1): schattierter Bereich P(X>6) ≈ 15,9%',
        alt: 'Glockenkurve N(5,1) mit schattiertem Bereich rechts von x=6',
      },
      prerequisites: ['stat-pruefung-1'],
      nextLessonId: 'stat-pruefung-3',
    }),
    makeLesson({
      id: 'stat-pruefung-3',
      title: 'Prüfung: Konfidenzintervall & Gesamtaufgaben',
      estimatedMinutes: 22,
      isExam: true,
      learningGoals: [
        '[PRÜFUNG] 95%-Konfidenzintervall für Mittelwert berechnen',
        '[PRÜFUNG] Stichprobenmittel und -standardabweichung berechnen',
        '[PRÜFUNG] Stichprobenumfang für gewünschte Präzision bestimmen',
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Wie präzise ist der geschätzte Mittelwert?',
      intuitionContent:
        'Aus einer Stichprobe vom Umfang $n$ schätzt man den wahren Mittelwert $\\mu$. ' +
        'Das **95%-Konfidenzintervall** gibt den Bereich an, ' +
        'in dem $\\mu$ mit 95%iger Wahrscheinlichkeit liegt.\n\n' +
        '**Je größer $n$, desto enger das Intervall** — Faktor $1/\\sqrt{n}$.\n\n' +
        '**Stichprobenumfang** für Halbbreite $\\Delta$: $n \\geq (1{,}96 \\cdot \\sigma/\\Delta)^2$.',
      formulaTitle: 'KI und Stichprobenumfang',
      formulaContent:
        '**Stichprobenmittel und -standardabweichung:**\n' +
        '$$\\bar x = \\frac{1}{n}\\sum_{i=1}^n x_i, \\qquad s = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^n(x_i-\\bar x)^2}$$\n\n' +
        '**95%-Konfidenzintervall** (bekanntes $\\sigma$):\n' +
        '$$\\left[\\bar x - 1{,}96\\frac{\\sigma}{\\sqrt{n}},\\; \\bar x + 1{,}96\\frac{\\sigma}{\\sqrt{n}}\\right]$$\n\n' +
        '**Stichprobenumfang** für Halbbreite $\\leq \\Delta$:\n' +
        '$$n \\geq \\left(\\frac{1{,}96 \\cdot \\sigma}{\\Delta}\\right)^2$$',
      exercises: [
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Aufwärmaufgabe: $\\bar x = 20$, $\\sigma = 4$, $n = 16$. Halbbreite des 95%-KI?',
          correctValue: 1.96,
          tolerance: 0.01,
          unit: '',
          explanation:
            'Halbbreite $= 1{,}96 \\cdot \\sigma/\\sqrt{n} = 1{,}96 \\cdot 4/4 = 1{,}96$.',
          hints: [
            'Halbbreite $= z \\cdot \\sigma/\\sqrt{n}$.',
            '$\\sigma/\\sqrt{n} = 4/4 = 1$.',
            '$1{,}96 \\cdot 1 = 1{,}96$.',
          ],
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Wie viele Messungen $n$ für KI-Halbbreite $\\leq 0{,}5$ bei $\\sigma = 2$ (95%-KI)?',
          correctValue: 62,
          tolerance: 2,
          unit: '',
          explanation:
            '$n \\geq (1{,}96 \\cdot 2/0{,}5)^2 = (7{,}84)^2 = 61{,}47 \\to n \\geq 62$.',
          hints: [
            '$n \\geq (z\\sigma/d)^2$.',
            '$(1{,}96 \\cdot 2/0{,}5)^2 = (7{,}84)^2$.',
            'Aufrunden! Etwa $62$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Um das KI auf die **halbe** Breite zu reduzieren, muss $n$ … werden:',
          options: ['ver**vier**facht', 'verdoppelt', 'gleich gelassen', 'geviertelt'],
          correctIndex: 0,
          explanation:
            'Halbbreite $\\propto 1/\\sqrt{n}$. Halbe Breite → $\\sqrt{n_{\\text{neu}}}/\\sqrt{n_{\\text{alt}}} = 2$, also $n_{\\text{neu}} = 4n_{\\text{alt}}$. ' +
            '**Stichprobenumfang quadratisch mit Präzision** — wichtige Faustregel.',
          hints: [
            'Präzision $\\propto 1/\\sqrt{n}$.',
            'Halbe Breite → $\\sqrt{n}$ verdoppeln.',
            '$\\sqrt{4n} = 2\\sqrt{n}$.',
          ],
          wrongAnswerExplanations: {
            '1': 'Verdoppelung von $n$ reduziert die Halbbreite nur um Faktor $\\sqrt{2} \\approx 1{,}41$, nicht um Faktor 2. Für halbe Breite braucht es $4n$.',
            '2': 'Bei unverändertem $n$ bleibt die Halbbreite gleich. Zur Reduktion muss $n$ wachsen.',
            '3': 'Viertelung von $n$ **verdoppelt** die Halbbreite (wegen $1/\\sqrt{n/4} = 2/\\sqrt{n}$), statt sie zu halbieren.',
          },
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Wenn das 95%-KI den Wert $0$ enthält, ist der geschätzte Mittelwert nicht signifikant verschieden von $0$.',
          correct: true,
          explanation:
            'Richtig. Das 95%-KI umfasst Werte, die mit den Daten konsistent sind. Wenn $0$ drin liegt, ' +
            'lässt sich $H_0: \\mu = 0$ auf dem 5%-Niveau nicht verwerfen — also nicht signifikant.',
          hints: [
            'Enger Zusammenhang KI ↔ Hypothesentest.',
            'Wert nicht im KI → signifikant verschieden.',
            'Wert im KI → nicht signifikant.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Messungen: $\\bar x = 5{,}2$, $s = 0{,}4$, $n = 16$. 95%-KI mit $t_{15;0{,}975} = 2{,}131$?',
          options: [
            '$[4{,}99;\\, 5{,}41]$',
            '$[4{,}80;\\, 5{,}60]$',
            '$[5{,}00;\\, 5{,}40]$',
            '$[4{,}79;\\, 5{,}61]$',
          ],
          correctIndex: 0,
          explanation:
            'Halbbreite: $2{,}131 \\cdot 0{,}4/\\sqrt{16} = 2{,}131 \\cdot 0{,}1 = 0{,}2131$. ' +
            'KI: $[5{,}2 - 0{,}213;\\, 5{,}2 + 0{,}213] = [4{,}987;\\, 5{,}413] \\approx [4{,}99;\\, 5{,}41]$.',
          hints: [
            '$s/\\sqrt{n} = 0{,}4/4 = 0{,}1$.',
            '$t \\cdot 0{,}1 = 0{,}213$.',
            'KI: $\\bar x \\pm 0{,}213$.',
          ],
          wrongAnswerExplanations: {
            '1': 'Hier wurde $\\sqrt{n} = 2$ statt $4$ verwendet, was die Halbbreite auf $0{,}4$ verdoppelt. Richtig: $\\sqrt{16} = 4$, Halbbreite $\\approx 0{,}21$.',
            '2': 'Hier wurde $s = 0{,}4$ direkt als Halbbreite genommen, ohne $t$-Faktor und $\\sqrt{n}$. Die Halbbreite muss $t \\cdot s/\\sqrt{n}$ sein, nicht einfach $s$.',
            '3': 'Kombination zweier Fehler: $\\sqrt{n}$ falsch **und** $t$ ignoriert. Die korrekte Halbbreite $\\approx 0{,}21$ weicht deutlich ab.',
          },
        },
        {
          type: 'matching',
          question:
            '[PRÜFUNG] Ordne jedem Effekt auf das KI seine Folge zu.',
          pairs: [
            { left: 'Größeres $n$',                    right: 'schmaleres KI' },
            { left: 'Höheres Konfidenzniveau (99 %)',  right: 'breiteres KI' },
            { left: 'Kleineres $\\sigma$',             right: 'schmaleres KI' },
            { left: 'Kleineres $n$',                    right: 'breiteres KI' },
          ],
          explanation:
            'Halbbreite = $z \\cdot \\sigma / \\sqrt{n}$: steigt mit $z$ und $\\sigma$, fällt mit $\\sqrt{n}$. ' +
            'Für 99 %-KI: $z = 2{,}576$ statt $1{,}96$ → breiter.',
          hints: [
            '$n$ im Nenner — größer ist besser.',
            'Höheres Konfidenzniveau → größeres $z$.',
          ],
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Stichprobe von $25$ Widerständen: $\\bar x = 100{,}5\\,\\Omega$, $s = 2{,}0\\,\\Omega$. ' +
            'Liegt der Sollwert $100\\,\\Omega$ im 95%-KI? ($t_{24;0{,}975} \\approx 2{,}064$.) Gib Halbbreite an.',
          correctValue: 0.8256,
          tolerance: 0.01,
          unit: 'Ω',
          explanation:
            'Halbbreite: $2{,}064 \\cdot 2/\\sqrt{25} = 2{,}064 \\cdot 0{,}4 = 0{,}826\\,\\Omega$. ' +
            'KI: $[100{,}5 - 0{,}83;\\, 100{,}5 + 0{,}83] = [99{,}67;\\, 101{,}33]$. Sollwert $100$ liegt drin → **nicht** signifikant abweichend.',
          hints: [
            '$s/\\sqrt{n} = 2/5 = 0{,}4$.',
            'Halbbreite $= 2{,}064 \\cdot 0{,}4 = 0{,}826$.',
            'Prüfen: liegt $100$ im Intervall $100{,}5 \\pm 0{,}83$?',
          ],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Gesamtstrategie für KI-Aufgabe. Bringe die Schritte in Reihenfolge.',
          items: [
            'Daten sichten: $n$, $\\bar x$, $s$ (oder $\\sigma$), gewünschtes Niveau',
            'Passendes Quantil wählen ($z = 1{,}96$ oder $t_{n-1}$ je nach $n$ und $\\sigma$)',
            'Halbbreite: $q \\cdot s/\\sqrt{n}$ (bzw. $\\sigma/\\sqrt{n}$)',
            'KI angeben: $[\\bar x - d,\\, \\bar x + d]$; bei Hypothesentest vergleichen, ob Sollwert drin liegt',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Reihenfolge ist prüfungsrelevant: erst Daten, dann Quantil, dann Halbbreite, dann KI + Interpretation.',
          hints: [
            'Ohne $\\sigma$ vs. $s$: andere Quantil-Tabelle.',
            'Zuletzt Interpretation — meist punkterelevant.',
          ],
        },
      ],
      masteryQuestion:
        '[PRÜFUNG] $\\bar x = 10$, $\\sigma = 2$, $n = 100$. 95%-Konfidenzintervall?',
      masteryOptions: [
        '$[9{,}608;\\; 10{,}392]$',
        '$[8{,}04;\\; 11{,}96]$',
        '$[9{,}5;\\; 10{,}5]$',
        '$[10 \\pm 2]$',
      ],
      correctIndex: 0,
      masteryExplanation:
        '$1{,}96 \\cdot \\sigma/\\sqrt{n} = 1{,}96 \\cdot 2/\\sqrt{100} = 1{,}96 \\cdot 0{,}2 = 0{,}392$. ' +
        'KI: $[10 - 0{,}392;\\; 10 + 0{,}392] = [9{,}608;\\; 10{,}392]$.',
      masteryHints: [
        'Halbbreite: $1{,}96 \\cdot \\sigma / \\sqrt{n}$.',
        '$\\sigma/\\sqrt{n} = 2/\\sqrt{100} = 2/10 = 0{,}2$.',
        '$1{,}96 \\cdot 0{,}2 = 0{,}392$, also KI: $10 \\pm 0{,}392$.',
      ],
      masteryVisualization: {
        id: 'bell-curve',
        params: {
          mu: 10,
          sigma: 0.2,
          xRange: [9, 11],
          shade: [9.608, 10.392],
          showBands: false,
        },
        caption: '95%-KI: [9,608; 10,392] — Sampling-Verteilung des Mittelwerts',
        alt: 'Schmale Glockenkurve der Stichprobenverteilung mit schattiertem 95%-KI',
      },
      prerequisites: ['stat-pruefung-2'],
      nextLessonId: null,
    }),
  ],
})

export const statistikTopic = {
  id: 'statistik',
  title: 'Statistik & Wahrscheinlichkeit',
  description: 'Zufallsvariablen, Normalverteilung, Schätzen, Hypothesentests — fürs Messdaten-Auswerten',
  subject: 'mathematics',
  icon: 'σ',
  color: 'emerald',
  estimatedHours: 3,
  difficulty: 3,
  level: 'vertiefung',
  units: [unit1, unit2],
  prerequisites: ['algebra', 'integralrechnung'],
}
