import { unit1 } from './unit1_grundlagen'
import { unit2 } from './unit2_einheitskreis'
import { unit3 } from './unit3_anwendungen'
import { unit4 } from './unit4_pruefung'

export const trigonometryTopic = {
  id: 'trigonometry',
  title: 'Trigonometrie',
  description: 'Winkelfunktionen, Einheitskreis und Anwendungen für Maschinenbauingenieure',
  subject: 'mathematics',
  icon: 'TRI',
  color: 'blue',
  estimatedHours: 6,
  difficulty: 2,
  units: [unit1, unit2, unit3, unit4],
  prerequisites: [],
}
