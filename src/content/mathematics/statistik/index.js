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
      masteryQuestion: 'Erwartungswert eines fairen Würfels?',
      masteryOptions: ['$3{,}5$', '$3$', '$6$', '$1$'],
      correctIndex: 0,
      masteryExplanation: '$E(X) = \\frac{1+2+3+4+5+6}{6} = 21/6 = 3{,}5$.',
      masteryHints: ['Mittelwert aller Werte bei gleicher Wahrscheinlichkeit.'],
      masteryVisualization: {
        id: 'number-line',
        params: {
          range: [0, 7],
          step: 1,
          marks: [{ value: 3.5, label: 'E(X)=3,5', filled: true }],
          intervals: [{ from: 1, to: 6, closedLeft: true, closedRight: true, label: 'Würfel 1–6', color: '#16a34a' }],
        },
        caption: 'Erwartungswert liegt in der Mitte der möglichen Ausgänge',
        alt: 'Zahlenstrahl mit Würfelausgängen und Erwartungswert.',
      },
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
      masteryQuestion:
        '$X \\sim N(10, 4)$ (d.h. $\\mu = 10$, $\\sigma = 2$). In welchem Intervall liegen $\\approx 95\\,\\%$ der Werte?',
      masteryOptions: ['$[6,\\,14]$', '$[8,\\,12]$', '$[4,\\,16]$', '$[9,\\,11]$'],
      correctIndex: 0,
      masteryExplanation:
        '$\\sigma = \\sqrt{4} = 2$. 95-%-Regel: $\\mu \\pm 2\\sigma = 10 \\pm 4 = [6, 14]$.',
      masteryHints: [
        '$\\sigma = \\sqrt{\\sigma^2} = \\sqrt{4} = 2$.',
        '95\\,% entspricht $\\mu \\pm 2\\sigma$.',
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
      masteryQuestion: '[PRÜFUNG] Mittelwert von 4, 5, 6, 7, 8?',
      masteryOptions: ['$6$', '$5$', '$7$', '$4{,}5$'],
      correctIndex: 0,
      masteryExplanation: '$\\bar x = (4+5+6+7+8)/5 = 30/5 = 6$.',
      masteryHints: ['Summe durch Anzahl.'],
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
