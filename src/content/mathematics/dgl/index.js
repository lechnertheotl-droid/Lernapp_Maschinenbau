import { dgl_unit1 } from './unit1_grundlagen'
import { dgl_unit2 } from './unit2_loesungsmethoden'
import { dgl_unit3 } from './unit3_pruefung'

export const dglTopic = {
  id: 'differentialgleichungen',
  title: 'Differentialgleichungen',
  description: 'Gewöhnliche DGL: Trennung der Variablen, lineare DGL, Schwingungen',
  subject: 'mathematics',
  icon: 'dy',
  color: 'rose',
  estimatedHours: 5,
  difficulty: 4,
  units: [dgl_unit1, dgl_unit2, dgl_unit3],
  prerequisites: ['ableitung', 'integralrechnung'],
}
