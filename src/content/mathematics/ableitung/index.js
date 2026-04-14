import { abl_unit1 } from './unit1_grundlagen'
import { abl_unit2 } from './unit2_rechenregeln'
import { abl_unit3 } from './unit3_kurvendiskussion'
import { abl_unit4 } from './unit4_pruefung'

export const ableitungTopic = {
  id: 'ableitung',
  title: 'Differentialrechnung',
  description: 'Ableitungsbegriff, Rechenregeln, Kurvendiskussion — zentral für technische Anwendungen',
  subject: 'mathematics',
  icon: '📈',
  color: 'indigo',
  estimatedHours: 7,
  difficulty: 3,
  units: [abl_unit1, abl_unit2, abl_unit3, abl_unit4],
  prerequisites: ['algebra'],
}
