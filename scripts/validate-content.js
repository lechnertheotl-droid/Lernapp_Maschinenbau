#!/usr/bin/env node
/**
 * Content-Integrität — bricht den Build ab, wenn Pflichtfelder fehlen.
 * Pflicht:
 *   - lesson.id, lesson.title
 *   - lesson.estimatedMinutes (number > 0)
 *   - lesson.learningGoals (non-empty array of strings)
 *   - lesson.steps (non-empty array)
 *   - topic.difficulty (number or Difficulty-string)
 * Warnungen (nicht-blockierend):
 *   - lesson.prerequisites fehlend (OK bei Einstiegsthemen)
 *   - lesson.createdAt fehlend
 */

import { getAllTopics } from '../src/content/index.js'
import { BLUEPRINT_ENFORCED_TOPICS, PEDAGOGY_STAGES } from '../src/content/curriculum.js'

const VALID_EXERCISE_TYPES = new Set([
  'multiple-choice',
  'number-input',
  'true-false',
  'matching',
  'sorting',
])

/**
 * Validiert den Blueprint einer Lesson gegen die Invarianten aus curriculum.js.
 * Sammelt Fehler in `bucket`. Rückgabe: Set der "zum Zeitpunkt X" eingeführten
 * Konzept-IDs je Sub-Goal — wird für die Exercise-Validierung wiederverwendet.
 */
function validateBlueprint(lesson, lp, bucket) {
  const bp = lesson.blueprint
  if (!bp || typeof bp !== 'object') {
    bucket.push(`${lp}: Blueprint-Pflicht — lesson.blueprint fehlt (Topic ist in BLUEPRINT_ENFORCED_TOPICS).`)
    return { availableBySubGoal: new Map(), allConcepts: new Set() }
  }

  const prereqConcepts = new Set()
  if (Array.isArray(bp.prerequisites)) {
    for (const p of bp.prerequisites) {
      if (Array.isArray(p?.concepts)) for (const c of p.concepts) prereqConcepts.add(c)
    }
  }

  const conceptList = Array.isArray(bp.concepts) ? bp.concepts : []
  if (conceptList.length === 0) {
    bucket.push(`${lp}: blueprint.concepts muss ein nicht-leeres Array sein.`)
  }

  const conceptIds = new Set()
  const seenSoFar = new Set([...prereqConcepts])
  for (let i = 0; i < conceptList.length; i++) {
    const c = conceptList[i]
    if (!c || typeof c.id !== 'string' || !c.id.trim()) {
      bucket.push(`${lp}: blueprint.concepts[${i}] braucht ein nicht-leeres String-Feld 'id'.`)
      continue
    }
    if (conceptIds.has(c.id)) {
      bucket.push(`${lp}: blueprint.concepts — doppelte Konzept-ID "${c.id}".`)
    }
    if (typeof c.title !== 'string' || !c.title.trim()) {
      bucket.push(`${lp}: blueprint.concepts[${i}] (${c.id}) braucht ein Feld 'title'.`)
    }
    const deps = Array.isArray(c.dependsOn) ? c.dependsOn : []
    for (const dep of deps) {
      if (!seenSoFar.has(dep)) {
        bucket.push(`${lp}: Konzept "${c.id}" hängt von "${dep}" ab — das ist weder vorher eingeführt noch in prerequisites.concepts.`)
      }
    }
    conceptIds.add(c.id)
    seenSoFar.add(c.id)
  }

  const subGoals = Array.isArray(lesson.subGoals) ? lesson.subGoals : []
  const sgc = bp.subGoalConcepts ?? {}
  const coveredConcepts = new Set()
  const availableBySubGoal = new Map()
  const runningAvailable = new Set([...prereqConcepts])
  for (let i = 0; i < subGoals.length; i++) {
    const raw = sgc[i] ?? sgc[String(i)]
    if (!Array.isArray(raw)) {
      bucket.push(`${lp}: blueprint.subGoalConcepts[${i}] fehlt oder ist kein Array.`)
      availableBySubGoal.set(i, new Set(runningAvailable))
      continue
    }
    for (const cid of raw) {
      if (!conceptIds.has(cid)) {
        bucket.push(`${lp}: subGoalConcepts[${i}] referenziert unbekanntes Konzept "${cid}".`)
      } else {
        coveredConcepts.add(cid)
        runningAvailable.add(cid)
      }
    }
    availableBySubGoal.set(i, new Set(runningAvailable))
  }
  for (const cid of conceptIds) {
    if (!coveredConcepts.has(cid)) {
      bucket.push(`${lp}: Konzept "${cid}" wird von keinem Sub-Goal abgedeckt.`)
    }
  }

  const taskPlan = Array.isArray(bp.taskPlan) ? bp.taskPlan : []
  if (taskPlan.length === 0) {
    bucket.push(`${lp}: blueprint.taskPlan muss ein nicht-leeres Array sein.`)
  }
  for (let k = 0; k < taskPlan.length; k++) {
    const row = taskPlan[k]
    const rp = `${lp}/taskPlan[${k}]`
    if (!Number.isInteger(row?.subGoal) || row.subGoal < 0 || row.subGoal >= subGoals.length) {
      bucket.push(`${rp}: subGoal ${row?.subGoal} außerhalb [0, ${subGoals.length - 1}].`)
      continue
    }
    if (!PEDAGOGY_STAGES.includes(row.stage)) {
      bucket.push(`${rp}: stage "${row.stage}" ungültig (erlaubt: ${PEDAGOGY_STAGES.join(', ')}).`)
    }
    if (!VALID_EXERCISE_TYPES.has(row.type)) {
      bucket.push(`${rp}: type "${row.type}" ungültig.`)
    }
    const qty = row.qty ?? 1
    if (!Number.isInteger(qty) || qty < 1) {
      bucket.push(`${rp}: qty muss ganzzahlig ≥ 1 sein (${qty}).`)
    }
    const avail = availableBySubGoal.get(row.subGoal) ?? new Set()
    const uses = Array.isArray(row.uses) ? row.uses : []
    if (uses.length === 0) {
      bucket.push(`${rp}: uses ist leer — jede taskPlan-Zeile muss mindestens ein Konzept testen.`)
    }
    for (const u of uses) {
      if (!avail.has(u)) {
        bucket.push(`${rp}: uses "${u}" ist zum Zeitpunkt Sub-Goal ${row.subGoal} noch nicht eingeführt (weder in früheren subGoalConcepts noch in prerequisites).`)
      }
    }
  }

  return { availableBySubGoal, allConcepts: seenSoFar }
}

function validateExercisePedagogy(ex, lesson, ep, availableBySubGoal, bucket) {
  const p = ex?.pedagogy
  if (!p || typeof p !== 'object') {
    bucket.push(`${ep}: pedagogy fehlt — Topic ist blueprint-enforced, jede Aufgabe braucht { stage, subGoal, uses }.`)
    return
  }
  if (!PEDAGOGY_STAGES.includes(p.stage)) {
    bucket.push(`${ep}: pedagogy.stage "${p.stage}" ungültig (erlaubt: ${PEDAGOGY_STAGES.join(', ')}).`)
  }
  const sgLen = Array.isArray(lesson.subGoals) ? lesson.subGoals.length : 0
  if (!Number.isInteger(p.subGoal) || p.subGoal < 0 || p.subGoal >= sgLen) {
    bucket.push(`${ep}: pedagogy.subGoal ${p.subGoal} außerhalb [0, ${sgLen - 1}].`)
    return
  }
  const avail = availableBySubGoal.get(p.subGoal) ?? new Set()
  const uses = Array.isArray(p.uses) ? p.uses : []
  if (uses.length === 0) {
    bucket.push(`${ep}: pedagogy.uses ist leer — jede Aufgabe muss mind. ein Konzept testen.`)
  }
  for (const u of uses) {
    if (!avail.has(u)) {
      bucket.push(`${ep}: pedagogy.uses "${u}" ist zum Zeitpunkt Sub-Goal ${p.subGoal} noch nicht eingeführt.`)
    }
  }
}

const topics = getAllTopics()

const errors = []
const warnings = []

function check(cond, msg, bucket = errors) {
  if (!cond) bucket.push(msg)
}

const VALID_PHASES = new Set(['vorkurs', 'semester-1', 'semester-2', 'vertiefung'])
const VALID_EXAM_RELEVANCE = new Set(['pflicht', 'wahl', 'grundlage'])
const VALID_SUB_GOAL_WEIGHTS = new Set(['niedrig', 'mittel', 'hoch'])

// Unbalancierte $-Delimiter in Content-Strings führen dazu, dass KaTeX nicht
// greift und das $-Zeichen literal in der UI erscheint. Ein Match zählt alle
// $, die NICHT durch einen Backslash escaped wurden (Laufzeit-String: \$).
const UNESCAPED_DOLLAR_RE = /(?<!\\)\$/g
function hasUnbalancedDollars(s) {
  if (typeof s !== 'string' || !s) return false
  const matches = s.match(UNESCAPED_DOLLAR_RE)
  return matches ? matches.length % 2 !== 0 : false
}
function snippet(s) {
  const one = s.replace(/\s+/g, ' ').trim()
  return one.length > 80 ? one.slice(0, 77) + '…' : one
}
function checkDollars(text, label, ep, bucket) {
  if (hasUnbalancedDollars(text)) {
    bucket.push(`${ep}: unbalanciertes $ in ${label} — "${snippet(text)}"`)
  }
}
function checkExerciseDollars(ex, ep, bucket) {
  checkDollars(ex.question, 'question', ep, bucket)
  checkDollars(ex.statement, 'statement', ep, bucket)
  checkDollars(ex.explanation, 'explanation', ep, bucket)
  checkDollars(ex.template, 'template', ep, bucket)
  if (Array.isArray(ex.hints)) {
    ex.hints.forEach((h, i) => checkDollars(h, `hints[${i}]`, ep, bucket))
  }
  if (Array.isArray(ex.options)) {
    ex.options.forEach((opt, i) => {
      const text = typeof opt === 'string' ? opt : opt?.text
      checkDollars(text, `options[${i}]`, ep, bucket)
    })
  }
  if (ex.wrongAnswerExplanations && typeof ex.wrongAnswerExplanations === 'object') {
    for (const [k, v] of Object.entries(ex.wrongAnswerExplanations)) {
      checkDollars(v, `wrongAnswerExplanations[${k}]`, ep, bucket)
    }
  }
  if (Array.isArray(ex.pairs)) {
    ex.pairs.forEach((p, i) => {
      checkDollars(p?.left, `pairs[${i}].left`, ep, bucket)
      checkDollars(p?.right, `pairs[${i}].right`, ep, bucket)
    })
  }
  if (Array.isArray(ex.items)) {
    ex.items.forEach((it, i) => {
      const text = typeof it === 'string' ? it : it?.text
      checkDollars(text, `items[${i}]`, ep, bucket)
    })
  }
}

for (const topic of topics) {
  const tp = `topic[${topic.id ?? '?'}]`
  check(!!topic.id, `${tp}: fehlt id`)
  check(!!topic.title, `${tp}: fehlt title`)
  check(
    typeof topic.difficulty === 'number' ||
      typeof topic.difficulty === 'string',
    `${tp}: fehlt difficulty`
  )

  // Optionales neues Feld topicGoals: wenn gesetzt, müssen alle Einträge
  // nicht-leere Strings sein. Fehlen sie, entsteht nur eine Warnung.
  if (topic.topicGoals !== undefined) {
    check(
      Array.isArray(topic.topicGoals) && topic.topicGoals.length > 0,
      `${tp}: topicGoals muss ein nicht-leeres Array sein, wenn gesetzt`
    )
    if (Array.isArray(topic.topicGoals)) {
      for (const g of topic.topicGoals) {
        check(
          typeof g === 'string' && g.trim().length > 0,
          `${tp}: topicGoals enthält leeren oder nicht-String-Eintrag`
        )
      }
    }
  } else {
    warnings.push(`${tp}: topicGoals fehlen (Backlog)`)
  }

  if (topic.phase !== undefined) {
    check(VALID_PHASES.has(topic.phase), `${tp}: phase muss einer von ${[...VALID_PHASES].join('|')} sein`)
  }
  if (topic.examRelevance !== undefined) {
    check(
      VALID_EXAM_RELEVANCE.has(topic.examRelevance),
      `${tp}: examRelevance muss einer von ${[...VALID_EXAM_RELEVANCE].join('|')} sein`
    )
  }

  const units = topic.units ?? []
  check(units.length > 0, `${tp}: keine Units`)

  for (const unit of units) {
    const up = `${tp}/unit[${unit.id ?? unit.title ?? '?'}]`
    check(!!unit.id || !!unit.title, `${up}: fehlt id/title`)
    if (unit.unitGoals !== undefined) {
      check(
        Array.isArray(unit.unitGoals) && unit.unitGoals.length > 0,
        `${up}: unitGoals muss ein nicht-leeres Array sein, wenn gesetzt`
      )
    }
    const lessons = unit.lessons ?? []
    check(lessons.length > 0, `${up}: keine Lektionen`)

    for (const lesson of lessons) {
      const lp = `${up}/lesson[${lesson.id ?? lesson.title ?? '?'}]`
      check(!!lesson.id, `${lp}: fehlt id`)
      check(!!lesson.title, `${lp}: fehlt title`)
      check(
        typeof lesson.estimatedMinutes === 'number' && lesson.estimatedMinutes > 0,
        `${lp}: fehlt estimatedMinutes (>0)`
      )
      check(
        Array.isArray(lesson.learningGoals) && lesson.learningGoals.length > 0,
        `${lp}: fehlt learningGoals (nicht-leeres Array)`
      )
      check(
        Array.isArray(lesson.steps) && lesson.steps.length > 0,
        `${lp}: fehlt steps`
      )
      check(
        lesson.prerequisites === undefined || Array.isArray(lesson.prerequisites),
        `${lp}: prerequisites muss Array oder fehlend sein`
      )
      check(
        lesson.createdAt === undefined || /^\d{4}-\d{2}-\d{2}/.test(lesson.createdAt),
        `${lp}: createdAt muss ISO-Datum sein`,
        warnings
      )

      // Optionales neues Feld subGoals: Validierung erfolgt nur wenn gesetzt.
      if (lesson.subGoals !== undefined) {
        check(
          Array.isArray(lesson.subGoals) && lesson.subGoals.length > 0,
          `${lp}: subGoals muss ein nicht-leeres Array sein, wenn gesetzt`
        )
        if (Array.isArray(lesson.subGoals)) {
          for (const sg of lesson.subGoals) {
            check(
              sg && typeof sg.label === 'string' && sg.label.trim().length > 0,
              `${lp}: subGoals[].label fehlt oder leer`
            )
            if (sg?.examRelevance !== undefined) {
              check(
                VALID_SUB_GOAL_WEIGHTS.has(sg.examRelevance),
                `${lp}: subGoals[].examRelevance muss einer von ${[...VALID_SUB_GOAL_WEIGHTS].join('|')} sein`
              )
            }
          }
        }
      }

      // Blueprint-Pflicht für Topics in BLUEPRINT_ENFORCED_TOPICS.
      const enforceBlueprint = BLUEPRINT_ENFORCED_TOPICS.includes(topic.id)
      let availableBySubGoal = new Map()
      if (enforceBlueprint) {
        const res = validateBlueprint(lesson, lp, errors)
        availableBySubGoal = res.availableBySubGoal
      }

      // Exercise-Level-Checks (zusätzlich zu den Runtime-Checks in
      // src/content/index.js getContentQualityIssues()). Hier prüfen wir
      // Felder, die dort noch nicht geprüft werden, um den Build früh zu
      // brechen statt erst beim Laden der App.
      const lessonExerciseIds = new Set(
        (lesson.steps ?? [])
          .filter((s) => s.type === 'exercise' || s.type === 'mastery-check')
          .map((s) => s.exerciseRef)
          .filter(Boolean)
      )
      const allExercises = [
        ...Object.values(unit.exercises ?? {}),
        ...Object.values(lesson.exercises ?? {}),
      ]
      for (const ex of allExercises) {
        if (ex.lessonId && ex.lessonId !== lesson.id) continue
        // Für enforced topics: nur Aufgaben dieser Lesson prüfen (über Step-Refs);
        // vermeidet False-Positives bei unit-geteilten Exercises.
        if (enforceBlueprint && !lessonExerciseIds.has(ex.id)) continue
        const ep = `${lp}/exercise[${ex.id ?? '?'}]`
        if (Array.isArray(ex.hints) && ex.hints.length < 3) {
          warnings.push(`${ep}: nur ${ex.hints.length} Hint(s), empfohlen ≥ 3`)
        }
        // Sub-Goal-Label soll NICHT in der Frage stehen — der UI-Header
        // zeigt es separat. Wörtliches Zitat in der Frage ist repetitiv.
        const questionText = ex.question ?? ex.statement ?? ''
        if (/^Sub-Goal\s+"[^"]+":\s*/.test(questionText)) {
          warnings.push(`${ep}: Frage beginnt mit 'Sub-Goal "…":' — bitte entfernen (UI rendert subGoalLabel als Header)`)
        }
        if (typeof ex.subGoalIndex === 'number') {
          const sgLen = Array.isArray(lesson.subGoals) ? lesson.subGoals.length : 0
          check(
            ex.subGoalIndex >= 0 && ex.subGoalIndex < sgLen,
            `${ep}: subGoalIndex ${ex.subGoalIndex} außerhalb [0, ${sgLen - 1}]`
          )
        }
        checkExerciseDollars(ex, ep, errors)

        if (enforceBlueprint) {
          validateExercisePedagogy(ex, lesson, ep, availableBySubGoal, errors)
        }
      }
    }
  }
}

if (warnings.length > 0) {
  console.warn(`\n⚠ ${warnings.length} Content-Warnungen:`)
  for (const w of warnings) console.warn('  ·', w)
}

if (errors.length > 0) {
  console.error(`\n✗ ${errors.length} Content-Fehler:`)
  for (const e of errors) console.error('  ·', e)
  console.error('\nBuild abgebrochen. Bitte Felder ergänzen.\n')
  process.exit(1)
}

console.log(`\n✓ Content-Audit OK: ${topics.length} Topics, alle Lektionen gültig.`)
