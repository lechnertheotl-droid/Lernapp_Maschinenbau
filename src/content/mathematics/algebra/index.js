import { alg_unit1 } from './unit1_potenzen'
import { alg_unit2 } from './unit2_gleichungen'
import { alg_unit3 } from './unit3_funktionen'

export const algebraTopic = {
  id: 'algebra',
  title: 'Algebra & Funktionen',
  description: 'Potenzen, Gleichungen, Funktionen — Grundlagen für alle technischen Fächer',
  subject: 'mathematics',
  icon: '🔢',
  color: 'orange',
  estimatedHours: 5,
  difficulty: 1,
  units: [alg_unit1, alg_unit2, alg_unit3],
  prerequisites: [],
}
