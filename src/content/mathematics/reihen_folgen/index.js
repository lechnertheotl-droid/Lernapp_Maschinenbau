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
      prerequisites: ['rf-1-1'],
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
  units: [unit1, unit2],
  prerequisites: ['ableitung', 'integralrechnung'],
}
