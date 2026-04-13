import { vek_unit1 } from './unit1_grundlagen'
import { vek_unit2 } from './unit2_geraden_ebenen'
import { vek_unit3 } from './unit3_pruefung'

export const vektorenTopic = {
  id: 'vektoren',
  title: 'Vektoren & Analytische Geometrie',
  description: 'Vektorrechnung, Geraden, Ebenen, Kreuzprodukt — Grundlage für Statik und Dynamik',
  subject: 'mathematics',
  icon: '➡️',
  color: 'purple',
  estimatedHours: 6,
  difficulty: 2,
  units: [vek_unit1, vek_unit2, vek_unit3],
  prerequisites: [],
}
