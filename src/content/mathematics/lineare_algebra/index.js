import { la_unit1 } from './unit1_matrizen'
import { la_unit2 } from './unit2_gleichungssysteme'

export const lineareAlgebraTopic = {
  id: 'lineare-algebra',
  title: 'Lineare Algebra',
  description: 'Matrizen, Determinanten, lineare Gleichungssysteme und Eigenwerte',
  subject: 'mathematics',
  icon: '\u25A6',
  color: 'teal',
  estimatedHours: 5,
  difficulty: 3,
  units: [la_unit1, la_unit2],
  prerequisites: ['algebra'],
}
