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
  level: 'vertiefung',
  phase: 'semester-2',
  examRelevance: 'pflicht',
  topicGoals: [
    'Ordnung, Linearität und Homogenität einer DGL auf einen Blick klassifizieren',
    'DGL vom Typ separierbarer Variablen sauber trennen, integrieren und Anfangswerte einsetzen',
    'Lineare DGL 1. Ordnung $y\' + p(x)\\,y = q(x)$ per Variation der Konstanten oder integrierendem Faktor lösen',
    'Homogene lineare DGL 2. Ordnung mit konstanten Koeffizienten über die charakteristische Gleichung lösen (3 Fälle)',
    'Inhomogene lineare DGL 2. Ordnung per Ansatzmethode (Exponential-, Polynom-, Resonanzansatz) behandeln',
    'Schwingungs-DGL $m\\,\\ddot x + d\\,\\dot x + c\\,x = F(t)$ physikalisch in Eigenfrequenz, Dämpfung und Resonanz einordnen',
  ],
  units: [dgl_unit1, dgl_unit2, dgl_unit3],
  prerequisites: ['ableitung', 'integralrechnung'],
}
