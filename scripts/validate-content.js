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

      // Exercise-Level-Checks (zusätzlich zu den Runtime-Checks in
      // src/content/index.js getContentQualityIssues()). Hier prüfen wir
      // Felder, die dort noch nicht geprüft werden, um den Build früh zu
      // brechen statt erst beim Laden der App.
      const allExercises = [
        ...Object.values(unit.exercises ?? {}),
        ...Object.values(lesson.exercises ?? {}),
      ]
      for (const ex of allExercises) {
        if (ex.lessonId && ex.lessonId !== lesson.id) continue
        const ep = `${lp}/exercise[${ex.id ?? '?'}]`
        if (Array.isArray(ex.hints) && ex.hints.length < 3) {
          warnings.push(`${ep}: nur ${ex.hints.length} Hint(s), empfohlen ≥ 3`)
        }
        if (typeof ex.subGoalIndex === 'number') {
          const sgLen = Array.isArray(lesson.subGoals) ? lesson.subGoals.length : 0
          check(
            ex.subGoalIndex >= 0 && ex.subGoalIndex < sgLen,
            `${ep}: subGoalIndex ${ex.subGoalIndex} außerhalb [0, ${sgLen - 1}]`
          )
        }
        checkExerciseDollars(ex, ep, errors)
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
