import { la_unit1 } from './unit1_matrizen'
import { la_unit2 } from './unit2_gleichungssysteme'
import { la_unit3 } from './unit3_pruefung'

export const lineareAlgebraTopic = {
  id: 'lineare-algebra',
  title: 'Lineare Algebra',
  description: 'Matrizen, Determinanten, lineare Gleichungssysteme und Eigenwerte',
  subject: 'mathematics',
  icon: '\u25A6',
  color: 'teal',
  estimatedHours: 5,
  difficulty: 3,
  level: 'vertiefung',
  phase: 'semester-2',
  examRelevance: 'pflicht',
  topicGoals: [
    'Matrizen addieren, multiplizieren und transponieren, ohne Dimensionsregeln zu vergessen',
    'Determinanten bis 3×3 per Sarrus, höher per Laplace-Entwicklung oder Zeilenumformung berechnen',
    'Lineare Gleichungssysteme mit Gauß-Jordan in Normalform bringen und Lösungstyp (eindeutig/frei/keine) erkennen',
    'Invertierbarkeit prüfen und $A^{-1}$ über das erweiterte Schema $[A\\,|\\,I] \\to [I\\,|\\,A^{-1}]$ bestimmen',
    'Eigenwerte und Eigenvektoren aus $\\det(A - \\lambda I) = 0$ ableiten und geometrisch als Streckachsen deuten',
    'Rang einer Matrix bestimmen und daraus die Dimension von Kern und Bild folgern',
  ],
  units: [la_unit1, la_unit2, la_unit3],
  prerequisites: ['algebra'],
}
