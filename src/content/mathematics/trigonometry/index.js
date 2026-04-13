import { unit1 } from './unit1_grundlagen'
import { unit2 } from './unit2_einheitskreis'
import { unit3 } from './unit3_anwendungen'

export const trigonometryTopic = {
  id: 'trigonometry',
  title: 'Trigonometrie',
  description: 'Winkelfunktionen, Einheitskreis und Anwendungen für Maschinenbauingenieure',
  subject: 'mathematics',
  icon: '📐',
  color: 'blue',
  estimatedHours: 5,
  difficulty: 2,
  units: [unit1, unit2, unit3],
  prerequisites: [],
}
