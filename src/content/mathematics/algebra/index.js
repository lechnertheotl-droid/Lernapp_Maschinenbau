import { alg_unit0 } from './unit0_rechnen_brueche'
import { alg_unit1 } from './unit1_potenzen'
import { alg_unit2 } from './unit2_gleichungen'
import { alg_unit3 } from './unit3_funktionen'
import { alg_unit4 } from './unit4_pruefung'

export const algebraTopic = {
  id: 'algebra',
  title: 'Algebra & Funktionen',
  description: 'Rechnen, Brüche, Potenzen, Gleichungen, Funktionen — ground-up Grundlagen für alle technischen Fächer',
  subject: 'mathematics',
  icon: '🔢',
  color: 'orange',
  estimatedHours: 7,
  difficulty: 1,
  level: 'grundlagen',
  units: [alg_unit0, alg_unit1, alg_unit2, alg_unit3, alg_unit4],
  prerequisites: [],
}
