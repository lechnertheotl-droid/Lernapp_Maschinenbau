import { int_unit1 } from './unit1_grundlagen'
import { int_unit2 } from './unit2_techniken'
import { int_unit3 } from './unit3_anwendungen'
import { int_unit4 } from './unit4_pruefung'

export const integralrechnungTopic = {
  id: 'integralrechnung',
  title: 'Integralrechnung',
  description: 'Stammfunktionen, Integrationstechniken, bestimmte Integrale und Anwendungen',
  subject: 'mathematics',
  icon: '∫',
  color: 'green',
  estimatedHours: 6,
  difficulty: 3,
  units: [int_unit1, int_unit2, int_unit3, int_unit4],
  prerequisites: ['ableitung'],
}
