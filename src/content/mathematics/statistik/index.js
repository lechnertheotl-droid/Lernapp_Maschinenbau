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
      prerequisites: ['stat-1-1'],
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
