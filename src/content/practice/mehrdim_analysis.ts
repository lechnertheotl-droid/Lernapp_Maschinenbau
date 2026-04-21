import type { PracticeExercise } from '@/types/practice'

export const mehrdimAnalysisPractice: PracticeExercise[] = [
  {
    id: 'pr-mda-1',
    topicId: 'mehrdim-analysis',
    title: 'Gradient, Tangentialebene und Richtungsableitung',
    difficulty: 'klausur',
    points: 10,
    estimatedMinutes: 10,
    context: `Gegeben ist das Skalarfeld
$$f(x,y) = x^2 y + y^3.$$
Betrachtet wird der Punkt $P = (2;\\,1)$.`,
    subtasks: [
      {
        id: 'a',
        prompt: 'a) Wert $f(2;1)$?',
        answer: 5,
        unit: '',
        tolerance: 1e-3,
        points: 2,
        explanation: `$f(2;1) = 4 + 1 = 5$.`,
      },
      {
        id: 'b',
        prompt: 'b) $\\partial f / \\partial x$ an $P$?',
        answer: 4,
        unit: '',
        tolerance: 1e-3,
        points: 2,
        explanation: `$\\partial_x f = 2xy$, in $P$: $4$.`,
      },
      {
        id: 'c',
        prompt: 'c) $\\partial f / \\partial y$ an $P$?',
        answer: 7,
        unit: '',
        tolerance: 1e-3,
        points: 2,
        explanation: `$\\partial_y f = x^2 + 3y^2$, in $P$: $4 + 3 = 7$.`,
      },
      {
        id: 'd',
        prompt: 'd) Richtungsableitung in Richtung $\\vec r = (1;1)$ (normiert!) — Zahlenwert auf 3 Nachkommastellen.',
        answer: 7.778,
        unit: '',
        tolerance: 0.02,
        points: 4,
        explanation: `$\\nabla f(P) = (4;7)$. Einheitsvektor $\\hat r = (1;1)/\\sqrt 2$. $D_{\\hat r} f = (4+7)/\\sqrt 2 = 11/\\sqrt 2 \\approx 7{,}778$.`,
      },
    ],
    hints: [
      'Gradient immer komponentenweise partiell ableiten.',
      'Richtung muss auf Einheitslänge normiert werden.',
    ],
    tags: ['gradient', 'richtungsableitung'],
  },
  {
    id: 'pr-mda-2',
    topicId: 'mehrdim-analysis',
    title: 'Extremwerte im Zweidimensionalen',
    difficulty: 'klausur',
    points: 10,
    estimatedMinutes: 12,
    context: `Untersuchen Sie
$$f(x,y) = x^2 + y^2 - xy - 3x$$
auf Extrema.`,
    subtasks: [
      {
        id: 'a',
        prompt: 'a) $\\partial_x f = 0$ und $\\partial_y f = 0$ liefert einen kritischen Punkt. $x$-Koordinate?',
        answer: 2,
        unit: '',
        tolerance: 1e-3,
        points: 3,
        explanation: `$\\partial_x f = 2x - y - 3 = 0$, $\\partial_y f = 2y - x = 0 \\Rightarrow x = 2y$. Einsetzen: $4y - y - 3 = 0 \\Rightarrow y = 1$, $x = 2$.`,
      },
      {
        id: 'b',
        prompt: 'b) $y$-Koordinate?',
        answer: 1,
        unit: '',
        tolerance: 1e-3,
        points: 1,
        explanation: `Siehe a).`,
      },
      {
        id: 'c',
        prompt: 'c) Determinante der Hesse-Matrix?',
        answer: 3,
        unit: '',
        tolerance: 1e-3,
        points: 3,
        explanation: `$H = \\begin{pmatrix}2 & -1\\\\ -1 & 2\\end{pmatrix}$, $\\det H = 4 - 1 = 3 > 0$.`,
      },
      {
        id: 'd',
        prompt: 'd) Art: $1$ = Minimum, $2$ = Maximum, $0$ = Sattel?',
        answer: 1,
        unit: '',
        tolerance: 0.3,
        points: 3,
        explanation: `$\\det H > 0$ und $f_{xx} = 2 > 0$ → lokales Minimum.`,
      },
    ],
    hints: [
      'Kritische Punkte: Gradient = 0.',
      'Hesse-Determinante > 0 ∧ $f_{xx} > 0$: Minimum; > 0 ∧ $f_{xx} < 0$: Maximum; < 0: Sattelpunkt.',
    ],
    tags: ['extrema', 'hesse', 'zweidimensional'],
  },
]
