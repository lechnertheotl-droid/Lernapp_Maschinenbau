// Migriert algebraSupplements → zusätzliche Goal-Tasks mit pedagogy-Tags.
// Jedes Profile hat 7 slots:
//   [0] concept  (mc)    → apply-guided    · SG 0
//   [1] calc     (ni)    → apply-independent · SG 0
//   [2] tf               → recognize       · SG 0
//   [3] matching         → transfer        · SG last
//   [4] sorting          → transfer        · SG 0
//   [5] error    (mc)    → error-analysis  · SG 0
//   [6] transfer (ni)    → transfer        · SG last
//
// Output: ein algebra_extras.js-File mit SG-indizierten Goal-Tasks pro Lesson.

import { algebraSupplements } from '../src/content/supplements/algebra.js'
import { writeFileSync } from 'node:fs'

const SG_CONCEPTS = {
  'alg-1-1': {0: ['pot-mult', 'pot-div'], 1: ['pot-potenz'], 2: ['pot-null', 'pot-negativ'], 3: ['pot-produkt', 'pot-quotient']},
  'alg-1-2': {0: ['wurzel-bruchpot', 'wurzel-def-bereich'], 1: ['wurzel-produkt', 'wurzel-quotient', 'wurzel-summe-nein', 'wurzel-vereinfachen'], 2: ['nenner-rational']},
  'alg-1-3': {0: ['log-def', 'log-spezialfaelle'], 1: ['log-produkt'], 2: ['log-quotient'], 3: ['log-potenz'], 4: ['log-basiswechsel'], 5: ['log-summe-nein'], 6: ['log-umkehr']},
  'alg-2-1': {0: ['lin-form', 'iso-variable'], 1: ['iso-variable', 'koeff-dividieren'], 2: ['text-uebersetzung'], 3: ['probe-einsetzen']},
  'alg-2-2': {0: ['quad-form', 'abc-formel', 'pq-formel'], 1: ['diskriminante'], 2: ['vieta'], 3: ['faktor-form']},
  'alg-2-3': {0: ['rat-wurzel'], 1: ['polydiv'], 2: ['polydiv-rest'], 3: ['horner'], 4: ['linearfaktor'], 5: ['cardano-info']},
  'alg-2-4': {0: ['ungl-zeichen-flip'], 1: ['betrag-kleiner'], 2: ['betrag-groesser'], 3: ['vz-tabelle'], 4: ['intervall-notation'], 5: ['bruch-ungl-pol']},
  'alg-3-1': {0: ['fkt-def', 'fkt-graph'], 1: ['def-bereich', 'wertebereich'], 2: ['injektiv', 'surjektiv', 'bijektiv']},
  'alg-3-2': {0: ['potenz-fkt'], 1: ['exp-fkt'], 2: ['log-fkt'], 3: ['wachstum-hierarchie'], 4: ['euler-zahl'], 5: ['wurzel-fkt']},
  'alg-3-3': {0: ['trafo-hor-verschieben'], 1: ['trafo-vert-verschieben'], 2: ['trafo-vert-streck', 'trafo-hor-streck'], 3: ['trafo-spiegel-x', 'trafo-spiegel-y'], 4: ['trafo-merkregel'], 5: ['fkt-komposition']},
  'alg-3-4': {0: ['umkehr-existenz'], 1: ['umkehr-verfahren'], 2: ['umkehr-graph'], 3: ['umkehr-bereiche'], 4: ['umkehr-identitaet'], 5: ['umkehr-einschraenken']},
}

const SLOTS = [
  { stage: 'apply-guided',      sgTarget: 'first' },
  { stage: 'apply-independent', sgTarget: 'first' },
  { stage: 'recognize',         sgTarget: 'first' },
  { stage: 'transfer',          sgTarget: 'last'  },
  { stage: 'transfer',          sgTarget: 'first' },
  { stage: 'error-analysis',    sgTarget: 'first' },
  { stage: 'transfer',          sgTarget: 'last'  },
]

function jsVal(v) { return JSON.stringify(v) }

function serializeExercise(ex, pedagogy) {
  const p = `{ stage: ${jsVal(pedagogy.stage)}, subGoal: ${pedagogy.subGoal}, uses: ${jsVal(pedagogy.uses)} }`

  if (ex.type === 'multiple-choice') {
    const wae = ex.wrongAnswerExplanations ? jsVal(ex.wrongAnswerExplanations) : 'undefined'
    return `      mc(${jsVal(ex.question)}, ${jsVal(ex.options)}, ${ex.correctIndex}, ${jsVal(ex.explanation)}, ${jsVal(ex.hints)}, ${wae}, ${p}),`
  }
  if (ex.type === 'number-input') {
    return `      ni(${jsVal(ex.question)}, ${ex.correctValue}, ${ex.tolerance}, ${jsVal(ex.unit)}, ${jsVal(ex.explanation)}, ${jsVal(ex.hints)}, ${p}),`
  }
  if (ex.type === 'true-false') {
    return `      tf(${jsVal(ex.statement)}, ${ex.correct}, ${jsVal(ex.explanation)}, ${jsVal(ex.hints)}, ${p}),`
  }
  if (ex.type === 'matching') {
    return `      matching(${jsVal(ex.question)}, ${jsVal(ex.pairs)}, ${jsVal(ex.explanation)}, ${jsVal(ex.hints)}, ${p}),`
  }
  if (ex.type === 'sorting') {
    return `      sorting(${jsVal(ex.question)}, ${jsVal(ex.items)}, ${jsVal(ex.correctOrder)}, ${jsVal(ex.explanation)}, ${jsVal(ex.hints)}, ${p}),`
  }
  throw new Error('Unknown exercise type: ' + ex.type)
}

const out = []
out.push(`// Automatisch generiert durch scripts/migrate-supplements.mjs`)
out.push(`// Enthält die 77 aus supplements/algebra.js migrierten Aufgaben mit pedagogy-Tags.`)
out.push(`// Struktur identisch zu algebraSubGoalTasks — wird in algebra.js gemerged.`)
out.push(`import { mc, ni, tf, matching, sorting } from './_helpers'`)
out.push('')
out.push('export const algebraSupplementExtras = {')

for (const [lid, data] of Object.entries(algebraSupplements)) {
  const sgc = SG_CONCEPTS[lid]
  if (!sgc) throw new Error('Missing SG_CONCEPTS for ' + lid)
  const sgIndices = Object.keys(sgc).map(Number).sort((a, b) => a - b)
  const firstSg = sgIndices[0]
  const lastSg = sgIndices[sgIndices.length - 1]

  const bySg = new Map()
  data.exercises.forEach((ex, i) => {
    const slot = SLOTS[i]
    const sg = slot.sgTarget === 'last' ? lastSg : firstSg
    // Uses: beschränkt auf Konzepte dieses SG (+ ggf. früherer SGs);
    // da uses[] in pedagogy zum Zeitpunkt dieses SG verfügbar sein muss
    const uses = [sgc[sg][0]] // das erste Konzept der ZielsGroup
    const ped = { stage: slot.stage, subGoal: sg, uses }
    if (!bySg.has(sg)) bySg.set(sg, [])
    bySg.get(sg).push(serializeExercise(ex, ped))
  })

  out.push(`  '${lid}': {`)
  for (const sg of [...bySg.keys()].sort((a, b) => a - b)) {
    out.push(`    ${sg}: [`)
    for (const line of bySg.get(sg)) out.push(line)
    out.push(`    ],`)
  }
  out.push(`  },`)
}

out.push('}')
out.push('')

writeFileSync('src/content/subgoal_tasks/algebra_extras.js', out.join('\n'))
console.log(`Wrote src/content/subgoal_tasks/algebra_extras.js (${Object.keys(algebraSupplements).length} lessons)`)
