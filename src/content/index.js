import { trigonometryTopic } from './mathematics/trigonometry/index'
import { ableitungTopic }    from './mathematics/ableitung/index'
import { vektorenTopic }     from './mathematics/vektoren/index'
import { algebraTopic }          from './mathematics/algebra/index'
import { lineareAlgebraTopic }   from './mathematics/lineare_algebra/index'
import { integralrechnungTopic } from './mathematics/integralrechnung/index'
import { dglTopic }             from './mathematics/dgl/index'
import { komplexeZahlenTopic }  from './mathematics/komplexe_zahlen/index'
import { reihenFolgenTopic }    from './mathematics/reihen_folgen/index'
import { mehrdimAnalysisTopic } from './mathematics/mehrdim_analysis/index'
import { numerikTopic }         from './mathematics/numerik/index'
import { statistikTopic }       from './mathematics/statistik/index'
import { fourierLaplaceTopic }  from './mathematics/fourier_laplace/index'
import { engineeringTopics } from './engineering/maschinenbau'
import { werkstoffkundeTopic }  from './engineering/werkstoffkunde/index'
import { pythonMatlabTopic }  from './programming/python_matlab'
import { trigonometrySupplements } from './supplements/trigonometry'
import { algebraSupplements } from './supplements/algebra'
import { ableitungSupplements } from './supplements/ableitung'
import { vektorenSupplements } from './supplements/vektoren'
import { integralrechnungSupplements } from './supplements/integralrechnung'
import { dglSupplements } from './supplements/dgl'
import { lineareAlgebraSupplements } from './supplements/lineare_algebra'
import { pythonMatlabSupplements } from './supplements/python_matlab'
import { mechanikSupplements } from './supplements/mechanik'
import { festigkeitSupplements } from './supplements/festigkeit'
import { thermodynamikSupplements } from './supplements/thermodynamik'
import { fluidmechanikSupplements } from './supplements/fluidmechanik'
import { maschinenelementeSupplements } from './supplements/maschinenelemente'
import { elektrotechnikSupplements } from './supplements/elektrotechnik'
import { regelungstechnikSupplements } from './supplements/regelungstechnik'
import { fourierLaplaceSupplements } from './supplements/fourier_laplace'
import { werkstoffkundeSupplements } from './supplements/werkstoffkunde'
import { algebraSubGoalTasks } from './subgoal_tasks/algebra'
import { MIN_EXERCISES_PER_LESSON, MIN_TASKS_PER_SUB_GOAL } from './curriculum'

// ── Registry ──────────────────────────────────────────────────────────────────
const MANUAL_SUPPLEMENTS = {
  ...trigonometrySupplements,
  ...algebraSupplements,
  ...ableitungSupplements,
  ...vektorenSupplements,
  ...integralrechnungSupplements,
  ...dglSupplements,
  ...lineareAlgebraSupplements,
  ...pythonMatlabSupplements,
  ...mechanikSupplements,
  ...festigkeitSupplements,
  ...thermodynamikSupplements,
  ...fluidmechanikSupplements,
  ...maschinenelementeSupplements,
  ...elektrotechnikSupplements,
  ...regelungstechnikSupplements,
  ...fourierLaplaceSupplements,
  ...werkstoffkundeSupplements,
}

// Sub-Goal-Zielaufgaben: pro Lesson ein Array, Index = Position im `subGoals`-Array
// der Lesson. Pipeline prüft in `goalTaskExercises`, dass die Länge exakt matcht.
const SUBGOAL_EXERCISES = {
  ...algebraSubGoalTasks,
  // trigonometry, vektoren, ableitung, … folgen in Folge-Sessions
}

function countExerciseSteps(lesson) {
  return (lesson.steps ?? []).filter((step) => step.type === 'exercise' || step.type === 'mastery-check').length
}

// ─── Supplementals (nur aus MANUAL_SUPPLEMENTS — kein Template-Generator mehr)
//
// HISTORIE: Bis April 2026 existierte hier eine `lessonProfile`-Funktion mit
// ~350 Zeilen generischer Keyword-Templates, die Lessons mit zu wenig Aufgaben
// automatisch mit slop-Aufgaben auffüllte ("Welche Antwort beschreibt einen
// typischen Fehler…", "Bringe die Prüfungsstrategie in Reihenfolge…"). Diese
// auto-generierten Aufgaben hatten keinen inhaltlichen Bezug zur Lesson und
// wurden als Slop entfernt.
//
// Supplementals kommen jetzt ausschließlich aus
// `src/content/supplements/<topic>.js` — dort stehen handgeschriebene,
// lessonspezifische Aufgaben. Lessons ohne manuelle Supplements werden in
// STATUS.md als Lücke gelistet und müssen manuell befüllt werden.

function supplementalExplanation(lesson, unit) {
  const manual = MANUAL_SUPPLEMENTS[lesson.id]
  if (!manual?.explanation) return null
  const prefix = /prüfung/i.test(unit.title) ? '[PRÜFUNG] ' : ''
  return {
    id: `${lesson.id}-supp-explanation`,
    type: 'explanation-formal',
    title: `${prefix}Vertiefung: Prüfungsstrategie`,
    content: manual.explanation,
  }
}

function supplementalExercise(lesson, index) {
  const manual = MANUAL_SUPPLEMENTS[lesson.id]?.exercises?.[index]
  if (!manual) return null
  return {
    ...manual,
    id: `ex-${lesson.id}-manual-${index + 1}`,
    lessonId: lesson.id,
    isSupplemental: true,
  }
}


// Zielaufgaben pro Sub-Goal — eine Aufgabe pro Eintrag in `lesson.subGoals`.
// Der Content liegt manuell in `src/content/subgoal_tasks/<topic>.js` und
// landet per Registry (SUBGOAL_EXERCISES) hier.
/**
 * Akzeptiert zwei Formate für Goal-Tasks pro Lesson:
 *
 * A) Objekt-Format (empfohlen — mehrere Aufgaben pro Sub-Goal möglich):
 *    'lessonId': { 0: [mc(...), ni(...), tf(...)], 1: [ni(...), matching(...)], ... }
 *
 * B) Array-Format (Legacy — genau eine Aufgabe pro Sub-Goal, Index=Position):
 *    'lessonId': [mc(...), ni(...), tf(...), matching(...)]
 *    → wird intern zu { 0: [mc], 1: [ni], 2: [tf], 3: [matching] } aufgelöst.
 *
 * Ausgabe: flache Liste von Exercises mit korrekter subGoalIndex-Zuweisung.
 * Empfohlen werden ≥ MIN_TASKS_PER_SUB_GOAL Aufgaben pro Sub-Goal (siehe
 * curriculum.js) — kein harter Fehler, aber in STATUS.md als Lücke sichtbar.
 */
function goalTaskExercises(lesson) {
  const raw = SUBGOAL_EXERCISES[lesson.id]
  if (!raw) return []
  const subGoals = lesson.subGoals ?? []

  // Normalisieren auf Map<subGoalIndex, Exercise[]>
  let bucketsByIndex
  if (Array.isArray(raw)) {
    if (raw.length !== subGoals.length) {
      throw new Error(
        `goalTaskExercises: Drift in Lesson "${lesson.id}" — subGoals=${subGoals.length}, Array-Länge=${raw.length}. ` +
        `Array-Format erwartet genau eine Aufgabe pro Sub-Goal (Index=Position). ` +
        `Nutze stattdessen das Objekt-Format \`{ 0: [ex, ex], 1: [ex], ... }\`, ` +
        `um mehrere Aufgaben pro Sub-Goal zu ermöglichen.`,
      )
    }
    bucketsByIndex = new Map(raw.map((ex, i) => [i, [ex]]))
  } else if (raw && typeof raw === 'object') {
    bucketsByIndex = new Map()
    for (const [key, value] of Object.entries(raw)) {
      const idx = Number(key)
      if (!Number.isInteger(idx) || idx < 0 || idx >= subGoals.length) {
        throw new Error(
          `goalTaskExercises: ungültiger Sub-Goal-Index "${key}" in Lesson "${lesson.id}" ` +
          `(gültig: 0..${subGoals.length - 1}).`,
        )
      }
      if (!Array.isArray(value) || value.length === 0) {
        throw new Error(
          `goalTaskExercises: Sub-Goal-Index ${idx} in Lesson "${lesson.id}" braucht ein nicht-leeres Array.`,
        )
      }
      bucketsByIndex.set(idx, value)
    }
  } else {
    throw new Error(`goalTaskExercises: unbekanntes Format für Lesson "${lesson.id}".`)
  }

  // In deterministische, flache Liste serialisieren: zuerst nach Sub-Goal-Index,
  // dann nach Position im Array innerhalb desselben Sub-Goals.
  const out = []
  const sortedIndices = [...bucketsByIndex.keys()].sort((a, b) => a - b)
  for (const idx of sortedIndices) {
    const list = bucketsByIndex.get(idx)
    list.forEach((ex, localIdx) => {
      out.push({
        ...ex,
        id: `ex-${lesson.id}-goal-sg${idx}-${localIdx + 1}`,
        lessonId: lesson.id,
        isSupplemental: true,
        isGoalTask: true,
        subGoalIndex: idx,
        subGoalLabel: subGoals[idx].label,
        subGoalWeight: subGoals[idx].examRelevance,
      })
    })
  }
  return out
}

function withMinimumExercises(topic) {
  return {
    ...topic,
    units: topic.units.map((unit) => {
      const exercises = { ...(unit.exercises ?? {}) }
      const lessons = unit.lessons.map((lesson) => {
        // 1) Zielaufgaben einziehen (pro Sub-Goal eine Aufgabe).
        const goalTasks = goalTaskExercises(lesson)
        const goalSteps = goalTasks.map((exercise, index) => {
          exercises[exercise.id] = exercise
          return {
            id: `${lesson.id}-goal-s${index + 1}`,
            type: 'exercise',
            title: `Zielaufgabe — ${exercise.subGoalLabel}`,
            exerciseRef: exercise.id,
          }
        })

        // 2) ALLE verfügbaren manuellen Supplements einziehen — kein Cap auf
        //    MIN_EXERCISES_PER_LESSON. Mehr Aufgaben = bessere Routine. Lessons
        //    ohne MANUAL_SUPPLEMENTS bleiben auf ihrer tatsächlichen Aufgabenzahl
        //    und werden in STATUS.md als Lücke gelistet (Ziel: ≥ MIN Aufgaben).
        const supplemental = []
        for (let index = 0; ; index++) {
          const ex = supplementalExercise(lesson, index)
          if (!ex) break
          supplemental.push(ex)
        }

        if (goalTasks.length === 0 && supplemental.length === 0) return lesson

        const supplementalSteps = supplemental.map((exercise, index) => {
          exercises[exercise.id] = exercise
          return {
            id: `${lesson.id}-supp-s${index + 1}`,
            type: 'exercise',
            title: `Zusatzaufgabe ${index + 1}`,
            exerciseRef: exercise.id,
          }
        })

        const currentSteps = lesson.steps ?? []
        // Einfügereihenfolge: bestehende Steps → Zielaufgaben → (falls manuelle Supplements vorhanden) Erklärungs-Step + Zusatzaufgaben → mastery-check.
        const explanationStep = supplemental.length > 0 ? supplementalExplanation(lesson, unit) : null
        const supplementBlock = explanationStep ? [explanationStep, ...supplementalSteps] : supplementalSteps
        const masteryIndex = currentSteps.findIndex((step) => step.type === 'mastery-check')
        const steps = masteryIndex >= 0
          ? [...currentSteps.slice(0, masteryIndex), ...goalSteps, ...supplementBlock, ...currentSteps.slice(masteryIndex)]
          : [...currentSteps, ...goalSteps, ...supplementBlock]

        return { ...lesson, steps }
      })

      return { ...unit, exercises, lessons }
    }),
  }
}

const BASE_TOPICS = {
  trigonometry: trigonometryTopic,
  ableitung:    ableitungTopic,
  vektoren:     vektorenTopic,
  algebra:          algebraTopic,
  'lineare-algebra': lineareAlgebraTopic,
  integralrechnung:  integralrechnungTopic,
  differentialgleichungen: dglTopic,
  'komplexe-zahlen':   komplexeZahlenTopic,
  'reihen-folgen':     reihenFolgenTopic,
  'mehrdim-analysis':  mehrdimAnalysisTopic,
  numerik:             numerikTopic,
  statistik:           statistikTopic,
  'fourier-laplace':   fourierLaplaceTopic,
}

const TOPICS = Object.fromEntries(Object.entries({
  ...BASE_TOPICS,
  ...Object.fromEntries(engineeringTopics.map((topic) => [topic.id, topic])),
  werkstoffkunde:   werkstoffkundeTopic,
  'python-matlab': pythonMatlabTopic,
}).map(([id, topic]) => [id, withMinimumExercises(topic)]))

function getExerciseFromTopic(topic, exerciseId) {
  for (const unit of topic.units) {
    if (unit.exercises?.[exerciseId]) return unit.exercises[exerciseId]
  }
  return null
}

function countUnescapedDollars(str) {
  if (typeof str !== 'string') return 0
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '$') continue
    if (i > 0 && str[i - 1] === '\\') continue
    count++
  }
  return count
}

// Extrahiert den Inhalt jedes balanced $…$-Blocks (paarweise, sequentiell).
// Ignoriert $$-Display-Math (das wird separat verarbeitet).
function extractInlineMathBlocks(str) {
  if (typeof str !== 'string') return []
  const blocks = []
  let open = -1
  let i = 0
  while (i < str.length) {
    if (str[i] === '$' && str[i + 1] === '$') { i += 2; continue }
    if (str[i] === '$' && (i === 0 || str[i - 1] !== '\\')) {
      if (open === -1) open = i
      else { blocks.push(str.slice(open + 1, i)); open = -1 }
    }
    i++
  }
  return blocks
}

// Flaggt verwaiste Mini-LaTeX-Blöcke wie `$= $`, `$ = $`, `$ $` — Inhalt leer
// oder Whitespace-umhüllter Einzel-Operator. Reines `$=$`, `$-$`, `$+$` ohne
// Whitespace ist erlaubt (rendert als saubere Mathe-Operatoren im Text).
function findNonsenseMathBlocks(str) {
  return extractInlineMathBlocks(str).filter((inner) => {
    if (inner.length === 0 || /^\s+$/.test(inner)) return true
    return /^\s/.test(inner) || /\s$/.test(inner)
  }).filter((inner) => /^[\s=+\-,:;.]{1,6}$/.test(inner))
}

function collectVisibleStrings(exercise) {
  const fields = []
  const push = (v) => { if (typeof v === 'string') fields.push(v) }
  push(exercise.question)
  push(exercise.statement)
  push(exercise.explanation)
  push(exercise.questionTemplate)
  if (Array.isArray(exercise.hints)) exercise.hints.forEach(push)
  if (Array.isArray(exercise.options)) exercise.options.forEach(push)
  if (Array.isArray(exercise.items)) exercise.items.forEach(push)
  if (Array.isArray(exercise.pairs)) {
    for (const p of exercise.pairs) { push(p.left); push(p.right) }
  }
  if (Array.isArray(exercise.blanks)) exercise.blanks.forEach((b) => push(b.hint))
  if (exercise.wrongAnswerExplanations && typeof exercise.wrongAnswerExplanations === 'object') {
    Object.values(exercise.wrongAnswerExplanations).forEach(push)
  }
  return fields
}

export function getContentQualityWarnings() {
  const warnings = []

  for (const topic of Object.values(TOPICS)) {
    for (const unit of topic.units) {
      for (const lesson of unit.lessons) {
        const exerciseSteps = (lesson.steps ?? []).filter((step) => step.type === 'exercise' || step.type === 'mastery-check')
        for (const step of exerciseSteps) {
          const exercise = getExerciseFromTopic(topic, step.exerciseRef)
          if (!exercise) continue
          // `wrongAnswerExplanations` Pflicht für MC mit ≥ 3 Optionen.
          if (exercise.type === 'multiple-choice' && Array.isArray(exercise.options) && exercise.options.length >= 3) {
            const wae = exercise.wrongAnswerExplanations
            const wrongIndices = exercise.options
              .map((_, i) => i)
              .filter((i) => i !== exercise.correctIndex)
            if (!wae || typeof wae !== 'object') {
              warnings.push(`${exercise.id}: MC (${exercise.options.length} Optionen) hat keine wrongAnswerExplanations`)
            } else {
              const missing = wrongIndices.filter((i) => typeof wae[String(i)] !== 'string' || wae[String(i)].trim() === '')
              if (missing.length > 0) {
                warnings.push(`${exercise.id}: wrongAnswerExplanations fehlen für Indizes [${missing.join(', ')}]`)
              }
            }
          }
        }
      }
    }
  }

  return warnings
}

export function getLessonsNeedingManualExercises() {
  return getAgentTasks().map((t) => ({
    topicId: t.topicId,
    unitId: t.unitId,
    lessonId: t.lessonId,
    lessonTitle: t.lessonTitle,
    have: t.have,
    target: t.target,
  }))
}

/**
 * Liefert pro Lesson mit Lücken eine vollständige Task-Karte für einen Coding-Agenten.
 * Jede Karte enthält:
 *   - Lesson-Metadaten (id, title, topic, unit, isExam)
 *   - have / target / missing
 *   - typeHistogram: Wie viele Aufgaben pro Typ bereits existieren
 *   - suggestedTypes: Welche Typen in neuen Aufgaben eingesetzt werden sollen
 *     (Typen-Rotation: bevorzugt unterrepräsentierte Typen)
 *   - subGoals: Labels und examRelevance (Agent kann Goal-Tasks erzeugen)
 *   - subGoalsMissingTasks: Indizes, zu denen noch keine Zielaufgabe existiert
 *   - fourBlockMissing: Aufgaben mit unvollständiger 4-Block-Erklärung
 *   - mcMissingWae: MC-Aufgaben ohne vollständige wrongAnswerExplanations
 *   - targetFile: Vorschlag, wo neue Aufgaben hingeschrieben werden
 *   - priority: 'critical' | 'high' | 'medium' | 'low'
 */
export function getAgentTasks() {
  const ALL_TYPES = ['multiple-choice', 'number-input', 'true-false', 'matching', 'sorting']
  const tasks = []

  for (const topic of Object.values(TOPICS)) {
    for (const unit of topic.units) {
      const isExamUnit = /prüfung/i.test(unit.title)
      for (const lesson of unit.lessons) {
        const exerciseSteps = (lesson.steps ?? []).filter((step) => step.type === 'exercise' || step.type === 'mastery-check')
        const have = exerciseSteps.length
        const missing = Math.max(0, MIN_EXERCISES_PER_LESSON - have)

        // Typen-Histogramm der vorhandenen Aufgaben
        const typeHistogram = Object.fromEntries(ALL_TYPES.map((t) => [t, 0]))
        const exercises = []
        for (const step of exerciseSteps) {
          const ex = getExerciseFromTopic(topic, step.exerciseRef)
          if (!ex) continue
          exercises.push(ex)
          if (typeHistogram[ex.type] !== undefined) typeHistogram[ex.type] += 1
        }

        // Welche Typen sind unterrepräsentiert? (Rotation: zuerst die, die 0× vorkommen)
        const typesRanked = ALL_TYPES.map((t) => [t, typeHistogram[t]]).sort((a, b) => a[1] - b[1])
        const suggestedTypes = typesRanked.slice(0, Math.max(missing, 3)).map(([t]) => t)

        // Sub-Goal-Deckung: wie viele Goal-Tasks existieren pro Sub-Goal?
        // Ziel ist mindestens MIN_TASKS_PER_SUB_GOAL (kein Cap nach oben).
        const subGoals = Array.isArray(lesson.subGoals) ? lesson.subGoals : []
        const tasksPerSubGoal = new Map()
        for (const e of exercises) {
          if (!e.isGoalTask || typeof e.subGoalIndex !== 'number') continue
          tasksPerSubGoal.set(e.subGoalIndex, (tasksPerSubGoal.get(e.subGoalIndex) ?? 0) + 1)
        }
        const subGoalsCoverage = subGoals.map((sg, i) => ({
          index: i,
          label: sg.label,
          examRelevance: sg.examRelevance,
          have: tasksPerSubGoal.get(i) ?? 0,
          target: MIN_TASKS_PER_SUB_GOAL,
        }))
        const subGoalsMissingTasks = subGoalsCoverage.filter((sg) => sg.have < sg.target)

        // 4-Block-Lücken
        const FOUR_BLOCK = [/\*\*Ansatz\s*:\*\*/i, /\*\*Rechnung\s*:\*\*/i, /\*\*Probe\s*:\*\*/i, /\*\*Typischer Fehler\s*:\*\*/i]
        const fourBlockMissing = exercises
          .filter((e) => typeof e.explanation !== 'string' || !FOUR_BLOCK.every((p) => p.test(e.explanation)))
          .map((e) => e.id)

        // MC ohne vollständige wrongAnswerExplanations
        const mcMissingWae = exercises
          .filter((e) => {
            if (e.type !== 'multiple-choice') return false
            if (!Array.isArray(e.options) || e.options.length < 3) return false
            const wae = e.wrongAnswerExplanations
            if (!wae || typeof wae !== 'object') return true
            const wrongIndices = e.options.map((_, i) => i).filter((i) => i !== e.correctIndex)
            return wrongIndices.some((i) => typeof wae[String(i)] !== 'string' || wae[String(i)].trim() === '')
          })
          .map((e) => e.id)

        const needsAny =
          missing > 0 ||
          subGoalsMissingTasks.length > 0 ||
          fourBlockMissing.length > 0 ||
          mcMissingWae.length > 0
        if (!needsAny) continue

        // Ziel-Datei: supplements/<topic>.js (Standard) oder subgoal_tasks/<topic>.js (Goal-Tasks)
        const supplementFileKey = topic.id.replace(/-/g, '_')
        const targetFile = {
          supplements: `src/content/supplements/${supplementFileKey}.js`,
          goalTasks: `src/content/subgoal_tasks/${supplementFileKey}.js`,
        }

        // Priorität: kritisch wenn <5 Aufgaben, hoch wenn <8, mittel sonst
        let priority = 'low'
        if (have < 5) priority = 'critical'
        else if (have < 8) priority = 'high'
        else if (missing > 0 || subGoalsMissingTasks.length > 0) priority = 'medium'
        if (isExamUnit && have < MIN_EXERCISES_PER_LESSON) priority = 'critical'

        tasks.push({
          topicId: topic.id,
          topicTitle: topic.title,
          unitId: unit.id,
          unitTitle: unit.title,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          isExamUnit,
          have,
          target: MIN_EXERCISES_PER_LESSON,
          missing,
          typeHistogram,
          suggestedTypes,
          subGoalsCoverage,
          subGoalsMissingTasks,
          fourBlockMissing,
          mcMissingWae,
          targetFile,
          priority,
        })
      }
    }
  }

  const rank = { critical: 0, high: 1, medium: 2, low: 3 }
  tasks.sort((a, b) => rank[a.priority] - rank[b.priority] || a.have - b.have)
  return tasks
}

export function getContentQualityIssues() {
  const issues = []

  for (const topic of Object.values(TOPICS)) {
    const lastUnit = topic.units.at(-1)
    if (!lastUnit || !/prüfung/i.test(lastUnit.title)) {
      issues.push(`${topic.id}: letzte Unit ist keine Prüfungs-Unit`)
    }

    for (const unit of topic.units) {
      const isExamUnit = /prüfung/i.test(unit.title)
      for (const lesson of unit.lessons) {
        const exerciseSteps = (lesson.steps ?? []).filter((step) => step.type === 'exercise' || step.type === 'mastery-check')
        // MIN_EXERCISES_PER_LESSON wird nicht mehr als Fehler geworfen — seit
        // Entfernung des Slop-Generators ist "zu wenige Aufgaben" ein legitimer
        // Zustand, der in STATUS.md als Lücke gelistet wird (siehe
        // getLessonsNeedingManualExercises()).
        if (!exerciseSteps.some((step) => step.type === 'mastery-check')) {
          issues.push(`${lesson.id}: kein mastery-check`)
        }

        for (const step of exerciseSteps) {
          const exercise = getExerciseFromTopic(topic, step.exerciseRef)
          if (!exercise) {
            issues.push(`${lesson.id}: exerciseRef fehlt (${step.exerciseRef})`)
            continue
          }

          if (!exercise.explanation) issues.push(`${exercise.id}: explanation fehlt`)
          if (!Array.isArray(exercise.hints) || exercise.hints.length === 0) issues.push(`${exercise.id}: hints fehlen`)
          if (isExamUnit) {
            const text = exercise.question ?? exercise.statement ?? ''
            if (!text.includes('[PRÜFUNG]')) issues.push(`${exercise.id}: Prüfungsaufgabe ohne [PRÜFUNG]`)
          }

          for (const field of collectVisibleStrings(exercise)) {
            if (countUnescapedDollars(field) % 2 !== 0) {
              issues.push(`${exercise.id}: ungerade Anzahl \`$\` in String (nicht-geschlossenes $...$): ${JSON.stringify(field.slice(0, 80))}`)
            }
            const nonsense = findNonsenseMathBlocks(field)
            if (nonsense.length > 0) {
              issues.push(`${exercise.id}: sinnloser $...$-Block ${JSON.stringify(nonsense[0])} in ${JSON.stringify(field.slice(0, 80))}`)
            }
          }

          if (exercise.type === 'true-false') {
            if ('isTrue' in exercise) issues.push(`${exercise.id}: true-false darf kein Feld \`isTrue\` mehr haben — nutze \`correct: boolean\``)
            if (typeof exercise.correct !== 'boolean') issues.push(`${exercise.id}: true-false braucht correct:boolean`)
            if (!exercise.statement) issues.push(`${exercise.id}: true-false braucht statement`)
          }
          if (exercise.type === 'number-input') {
            if ('correctAnswer' in exercise) issues.push(`${exercise.id}: number-input darf kein Feld \`correctAnswer\` mehr haben — nutze \`correctValue: number\``)
            if (typeof exercise.correctValue !== 'number') issues.push(`${exercise.id}: number-input braucht correctValue:number`)
            if (!('unit' in exercise)) issues.push(`${exercise.id}: number-input braucht unit`)
            if (!('tolerance' in exercise)) issues.push(`${exercise.id}: number-input braucht tolerance`)
          }
          if (exercise.type === 'multiple-choice') {
            if (!Array.isArray(exercise.options) || exercise.options.length < 2) issues.push(`${exercise.id}: multiple-choice braucht Optionen`)
            if (!Number.isInteger(exercise.correctIndex)) issues.push(`${exercise.id}: multiple-choice braucht correctIndex`)
          }
          if (exercise.type === 'matching' && (!Array.isArray(exercise.pairs) || exercise.pairs.length < 2)) {
            issues.push(`${exercise.id}: matching braucht mindestens zwei pairs`)
          }
          if (exercise.type === 'sorting' && (!Array.isArray(exercise.items) || !Array.isArray(exercise.correctOrder))) {
            issues.push(`${exercise.id}: sorting braucht items und correctOrder`)
          }
        }
      }
    }
  }

  return issues
}

const CONTENT_QUALITY_ISSUES = getContentQualityIssues()
if (CONTENT_QUALITY_ISSUES.length > 0) {
  throw new Error(`Content quality audit failed:\n${CONTENT_QUALITY_ISSUES.join('\n')}`)
}

// Warnings (nicht blockierend) — fehlende wrongAnswerExplanations bei MC-Aufgaben.
// Hilft sichtbar zu machen, wo noch nachgepflegt werden muss, bricht aber nichts.
if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
  const warnings = getContentQualityWarnings()
  if (warnings.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(
      `[content-audit] ${warnings.length} fehlende wrongAnswerExplanations:\n` +
        warnings.slice(0, 20).join('\n') +
        (warnings.length > 20 ? `\n… (+${warnings.length - 20} weitere)` : '')
    )
  }
}

export function getAllTopics() {
  return Object.values(TOPICS)
}

export function getTopic(topicId) {
  return TOPICS[topicId] ?? null
}

/** Flattens all lessons across all units of a topic. */
export function getAllLessons(topicId) {
  const topic = getTopic(topicId)
  if (!topic) return []
  return topic.units.flatMap((u) => u.lessons)
}

export function getLesson(topicId, lessonId) {
  return getAllLessons(topicId).find((l) => l.id === lessonId) ?? null
}

export function getLessonById(lessonId) {
  for (const topic of getAllTopics()) {
    const lesson = getLesson(topic.id, lessonId)
    if (lesson) return { topicId: topic.id, lesson }
  }
  return null
}

export function getExercise(topicId, exerciseId) {
  const topic = getTopic(topicId)
  if (!topic) return null
  return getExerciseFromTopic(topic, exerciseId)
}

/** Returns all lesson IDs for a topic (used for progress calculation). */
export function getLessonIds(topicId) {
  return getAllLessons(topicId).map((l) => l.id)
}

/** Returns lesson IDs from exam units (units with "Prüfung" in the title). */
export function getExamLessonIds(topicId) {
  const topic = getTopic(topicId)
  if (!topic) return []
  return topic.units
    .filter((u) => /prüfung/i.test(u.title))
    .flatMap((u) => u.lessons.map((l) => l.id))
}

/** Returns true if the topic has exam units and ALL exam lessons are completed. */
export function isExamCompleted(topicId, completedLessons) {
  const examIds = getExamLessonIds(topicId)
  if (examIds.length === 0) return false
  return examIds.every((id) => completedLessons.includes(id))
}
