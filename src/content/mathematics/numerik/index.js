import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'num-unit-1',
  title: 'Nullstellen & Integration',
  order: 1,
  lessons: [
    makeLesson({
      id: 'num-1-1',
      title: 'Newton-Verfahren',
      estimatedMinutes: 14,
      learningGoals: [
        'Newton-Iteration verstehen und anwenden',
        'Startwert und Konvergenz einschätzen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Tangente schneidet x-Achse',
      intuitionContent:
        'Das Newton-Verfahren sucht eine Nullstelle von $f(x) = 0$: ' +
        'Man legt die **Tangente** an den Graphen im aktuellen Punkt, schneidet sie mit der x-Achse — ' +
        'das gibt den nächsten (hoffentlich besseren) Schätzwert. ' +
        'Bei guten Startwerten verdoppelt sich die Zahl der korrekten Stellen pro Schritt (**quadratische Konvergenz**).',
      formulaTitle: 'Newton-Iteration',
      formulaContent:
        '$$x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$$\n\n' +
        '**Voraussetzungen:** $f$ differenzierbar, $f\'(x_n) \\neq 0$, Startwert nah an der Nullstelle.\n\n' +
        '**Abbruch:** $|x_{n+1} - x_n| < \\varepsilon$ oder $|f(x_n)| < \\delta$.',
      masteryQuestion: 'Newton auf $f(x) = x^2 - 2$, Startwert $x_0 = 1$: Wie lautet $x_1$?',
      masteryOptions: ['$1{,}5$', '$2$', '$1{,}41$', '$0{,}5$'],
      correctIndex: 0,
      masteryExplanation:
        '$f(1) = -1$, $f\'(1) = 2$. $x_1 = 1 - (-1)/2 = 1 + 0{,}5 = 1{,}5$. Nach zwei weiteren Iterationen nähert man sich $\\sqrt{2} \\approx 1{,}4142$.',
      masteryHints: ['f(1) = 1² − 2 = −1, f\'(1) = 2.', 'x₁ = x₀ − f(x₀)/f\'(x₀).'],
      nextLessonId: 'num-pruefung-1',
    }),
  ],
})

const unit2 = makeUnit({
  id: 'num-unit-2',
  title: 'Prüfung',
  order: 2,
  lessons: [
    makeLesson({
      id: 'num-pruefung-1',
      title: 'Prüfung: Numerische Methoden kombiniert',
      estimatedMinutes: 25,
      isExam: true,
      learningGoals: [
        'Verfahren dem Problem zuordnen (Newton, Trapez, Simpson, LGS)',
        'Konvergenzordnung und Fehlerabschätzung kennen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Prüfungs-Strategie',
      intuitionContent:
        '**Problem erkennen:** Nullstelle (Newton/Bisektion), Integral (Trapez/Simpson), LGS (Gauß/LU).\n\n' +
        '**Konvergenz/Abbruch:** Iteration nur mit klarem Abbruchkriterium. Rundungsfehler ≠ Verfahrensfehler.',
      formulaTitle: 'Verfahrensübersicht',
      formulaContent:
        '- **Bisektion:** linear, $x_{n+1} = (a+b)/2$, halbiert Intervall\n' +
        '- **Newton:** quadratisch, $x_{n+1} = x_n - f(x_n)/f\'(x_n)$\n' +
        '- **Trapez-Regel:** $\\int_a^b f \\approx (b-a)\\,(f(a)+f(b))/2$\n' +
        '- **Simpson-Regel:** $\\int \\approx h/3\\,(f_0 + 4f_1 + 2f_2 + \\ldots + f_n)$',
      masteryQuestion: '[PRÜFUNG] Welche Konvergenzordnung hat Newton bei einfachen Nullstellen?',
      masteryOptions: ['quadratisch', 'linear', 'kubisch', 'gar keine'],
      correctIndex: 0,
      masteryExplanation:
        'Bei einfachen Nullstellen verdoppelt sich die Zahl korrekter Stellen pro Schritt — quadratische Konvergenz. Bei mehrfachen Nullstellen nur linear.',
      masteryHints: ['„Verdoppelung der korrekten Stellen" deutet auf Ordnung 2.'],
      prerequisites: ['num-1-1'],
      nextLessonId: null,
    }),
  ],
})

export const numerikTopic = {
  id: 'numerik',
  title: 'Numerische Mathematik',
  description: 'Bisektion, Newton, Trapez/Simpson, LGS — Algorithmen statt exakter Lösungen',
  subject: 'mathematics',
  icon: '≈',
  color: 'cyan',
  estimatedHours: 3,
  difficulty: 3,
  units: [unit1, unit2],
  prerequisites: ['algebra', 'ableitung'],
}
