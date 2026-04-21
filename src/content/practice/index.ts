// Registry aller Prüfungs-Übungsaufgaben. Themen werden einzeln importiert
// und hier gebündelt, damit die UI per topicId filtern kann.
//
// Wichtig: Die Aufgaben sollen bewusst KEINE Lektionsinhalte erklären, sondern
// ausschließlich bereits Gelerntes auf Klausur-Niveau abfragen.
import type { PracticeExercise } from '@/types/practice'

import { trigonometryPractice }          from './trigonometry'
import { ableitungPractice }             from './ableitung'
import { vektorenPractice }              from './vektoren'
import { algebraPractice }               from './algebra'
import { lineareAlgebraPractice }        from './lineare_algebra'
import { integralrechnungPractice }      from './integralrechnung'
import { dglPractice }                   from './dgl'
import { komplexeZahlenPractice }        from './komplexe_zahlen'
import { reihenFolgenPractice }          from './reihen_folgen'
import { mehrdimAnalysisPractice }       from './mehrdim_analysis'
import { numerikPractice }               from './numerik'
import { statistikPractice }             from './statistik'
import { fourierLaplacePractice }        from './fourier_laplace'
import { mechanikPractice }              from './mechanik'
import { festigkeitslehrePractice }      from './festigkeitslehre'
import { thermodynamikPractice }         from './thermodynamik'
import { fluidmechanikPractice }         from './fluidmechanik'
import { maschinenelementePractice }     from './maschinenelemente'
import { elektrotechnikPractice }        from './elektrotechnik'
import { regelungstechnikPractice }      from './regelungstechnik'
import { werkstoffkundePractice }        from './werkstoffkunde'
import { pythonMatlabPractice }          from './python_matlab'

const ALL_PRACTICE_EXERCISES: PracticeExercise[] = [
  ...trigonometryPractice,
  ...ableitungPractice,
  ...vektorenPractice,
  ...algebraPractice,
  ...lineareAlgebraPractice,
  ...integralrechnungPractice,
  ...dglPractice,
  ...komplexeZahlenPractice,
  ...reihenFolgenPractice,
  ...mehrdimAnalysisPractice,
  ...numerikPractice,
  ...statistikPractice,
  ...fourierLaplacePractice,
  ...mechanikPractice,
  ...festigkeitslehrePractice,
  ...thermodynamikPractice,
  ...fluidmechanikPractice,
  ...maschinenelementePractice,
  ...elektrotechnikPractice,
  ...regelungstechnikPractice,
  ...werkstoffkundePractice,
  ...pythonMatlabPractice,
]

const BY_ID: Record<string, PracticeExercise> = Object.fromEntries(
  ALL_PRACTICE_EXERCISES.map((ex) => [ex.id, ex])
)

const BY_TOPIC: Record<string, PracticeExercise[]> = ALL_PRACTICE_EXERCISES.reduce<Record<string, PracticeExercise[]>>(
  (acc, ex) => {
    if (!acc[ex.topicId]) acc[ex.topicId] = []
    acc[ex.topicId].push(ex)
    return acc
  },
  {}
)

/** Alle Prüfungsaufgaben eines Themas (stabil sortiert nach Schwierigkeit). */
export function getPracticeExercisesForTopic(topicId: string): PracticeExercise[] {
  const list = BY_TOPIC[topicId] ?? []
  const order: Record<string, number> = {
    'klausur-einstieg': 0,
    'klausur':          1,
    'klausur-plus':     2,
  }
  return [...list].sort((a, b) => (order[a.difficulty] ?? 99) - (order[b.difficulty] ?? 99))
}

/** Eine einzelne Aufgabe über ihre ID abrufen. */
export function getPracticeExercise(id: string): PracticeExercise | null {
  return BY_ID[id] ?? null
}

/** Alle topic-IDs, für die mindestens eine Prüfungsaufgabe existiert. */
export function getPracticeTopicIds(): string[] {
  return Object.keys(BY_TOPIC)
}

/** Gesamtanzahl aller Prüfungsaufgaben (für Stats). */
export function getTotalPracticeCount(): number {
  return ALL_PRACTICE_EXERCISES.length
}
