#!/usr/bin/env node
/**
 * STATUS.md — Single Source of Truth für den Content-Stand.
 * Ersetzt frühere Einzeldateien (LERNZIELE.md, CONTENT_OVERVIEW.md,
 * src/content/subgoal_tasks/PROGRESS.md).
 *
 * Aggregiert pro Topic und pro Lesson:
 *   · Kennzahlen (Aufg. total, manuell, supplemental, 4-Block-Coverage)
 *   · Sub-Goals + Goal-Task-Verknüpfung
 *   · MC-wrongAnswerExplanations-Coverage
 *   · Practice-Exercises-Zahl
 *   · Prüfungs-Unit-Check
 *   · Priorisierte Lücken
 *
 * Aufruf:  npm run status
 */

import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  getAllTopics,
  getAllLessons,
  getTopic,
  getAgentTasks,
} from '../src/content/index.js'
import { TOPIC_GRAPH, getStudienbeginPhase } from '../src/utils/topicGraph.ts'
import { getPracticeExercisesForTopic } from '../src/content/practice/index.ts'
import {
  CURRICULUM_INTRO,
  CURRICULUM_PHASES,
  CURRICULUM_TIPS,
  TOPIC_GUIDES,
  PLANNED_TOPICS,
  MIN_EXERCISES_PER_LESSON,
} from '../src/content/curriculum.js'
import {
  hasFourBlockExplanation,
  isMcWithCompleteWae,
  collectTopicMetrics,
  percent,
} from './lib/content-metrics.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT = path.resolve(__dirname, '..', 'STATUS.md')

// ── Helpers ──────────────────────────────────────────────────────────────────

function statusIcon(value, total, { ok = 1, warn = 0.6 } = {}) {
  if (total === 0) return '—'
  const r = value / total
  if (r >= ok) return '✅'
  if (r >= warn) return '🟡'
  return '🔴'
}

function phaseLabel(topicId) {
  const p = getStudienbeginPhase(topicId)
  if (p === 1) return '1. Sem'
  if (p === 2) return '2. Sem'
  return 'Vertiefung'
}

function exerciseSteps(lesson) {
  return (lesson.steps ?? []).filter(
    (s) => s.type === 'exercise' || s.type === 'mastery-check',
  )
}

function getExerciseFromUnit(unit, ref) {
  return unit.exercises?.[ref] ?? null
}

function findUnitForLesson(topic, lessonId) {
  return (topic.units ?? []).find((u) => u.lessons?.some((l) => l.id === lessonId))
}

function lessonMetrics(topic, lesson) {
  const unit = findUnitForLesson(topic, lesson.id)
  const steps = exerciseSteps(lesson)

  let total = 0
  let fourBlock = 0
  let mcTotal = 0
  let mcWithWae = 0
  const typeCount = {}
  const subGoalsCovered = new Set()

  for (const step of steps) {
    const ex = unit ? getExerciseFromUnit(unit, step.exerciseRef) : null
    if (!ex) continue
    total += 1
    typeCount[ex.type] = (typeCount[ex.type] ?? 0) + 1
    if (hasFourBlockExplanation(ex)) fourBlock += 1
    if (ex.type === 'multiple-choice' && Array.isArray(ex.options) && ex.options.length >= 3) {
      mcTotal += 1
      if (isMcWithCompleteWae(ex)) mcWithWae += 1
    }
    if (ex.isGoalTask && typeof ex.subGoalIndex === 'number') {
      subGoalsCovered.add(ex.subGoalIndex)
    }
  }

  const subGoals = Array.isArray(lesson.subGoals) ? lesson.subGoals : []
  const goalCoverage = subGoals.length === 0
    ? 1
    : subGoalsCovered.size / subGoals.length

  return {
    total,
    fourBlock,
    mcTotal,
    mcWithWae,
    typeCount,
    subGoalsCount: subGoals.length,
    subGoalsCovered: subGoalsCovered.size,
    goalCoverage,
    hasMastery: steps.some((s) => s.type === 'mastery-check'),
  }
}

function practiceCountForTopic(topicId) {
  try {
    return getPracticeExercisesForTopic(topicId).length
  } catch {
    return 0
  }
}

// ── Aggregation ──────────────────────────────────────────────────────────────

const topics = [...getAllTopics()].sort((a, b) => {
  const oA = TOPIC_GRAPH[a.id]?.order ?? 999
  const oB = TOPIC_GRAPH[b.id]?.order ?? 999
  return oA - oB || a.title.localeCompare(b.title, 'de')
})

let gTotal = 0, gFourBlock = 0, gMcTotal = 0, gMcWae = 0
let gSubGoals = 0, gSubGoalsCovered = 0
let gLessons = 0, gUnits = 0
let gPracticeOk = 0
const gaps = []

const PRACTICE_BASELINE = 3

const perTopic = topics.map((topic) => {
  const lessons = getAllLessons(topic.id)
  const topicMetrics = collectTopicMetrics(topic)

  let tSubGoals = 0
  let tSubGoalsCovered = 0
  const perLesson = lessons.map((lesson) => {
    const m = lessonMetrics(topic, lesson)
    tSubGoals += m.subGoalsCount
    tSubGoalsCovered += m.subGoalsCovered
    return { lesson, m }
  })

  const practiceCount = practiceCountForTopic(topic.id)
  if (practiceCount >= PRACTICE_BASELINE) gPracticeOk += 1
  else if (practiceCount < PRACTICE_BASELINE) {
    gaps.push({
      kind: 'practice',
      topicId: topic.id,
      short: `Practice < ${PRACTICE_BASELINE}`,
      detail: `${topic.id}: ${practiceCount}/${PRACTICE_BASELINE} Practice-Exercises`,
    })
  }

  if (tSubGoalsCovered < tSubGoals) {
    gaps.push({
      kind: 'goal',
      topicId: topic.id,
      short: 'Goal-Tasks',
      detail: `${topic.id}: ${tSubGoalsCovered}/${tSubGoals} Sub-Goals verknüpft`,
    })
  }
  if (topicMetrics.fourBlock < topicMetrics.total) {
    gaps.push({
      kind: '4block',
      topicId: topic.id,
      short: '4-Block',
      detail: `${topic.id}: ${topicMetrics.fourBlock}/${topicMetrics.total} (${percent(topicMetrics.fourBlock, topicMetrics.total)} %) mit 4-Block`,
    })
  }

  gTotal += topicMetrics.total
  gFourBlock += topicMetrics.fourBlock
  gMcTotal += topicMetrics.mcTotal
  gMcWae += topicMetrics.mcWithWae
  gSubGoals += tSubGoals
  gSubGoalsCovered += tSubGoalsCovered
  gLessons += lessons.length
  gUnits += (topic.units ?? []).length

  return { topic, topicMetrics, perLesson, practiceCount, tSubGoals, tSubGoalsCovered }
})

// ── Rendering ────────────────────────────────────────────────────────────────

const today = new Date().toISOString().slice(0, 10)
const out = []

out.push(`# Lernapp Status — Lehrplan & Content`)
out.push(``)
out.push(`_auto-generiert · ${today} · \`npm run status\`_`)
out.push(``)
out.push(`Single Source of Truth: Lehrplan (Phasen, Fächer, Tipps) **und** Content-Kennzahlen ` +
  `(Topics, Lessons, Aufgaben, Goal-Tasks, Qualitätsgaps). Quelle für den Lehrplan-Teil ist ` +
  `\`src/content/curriculum.js\` — dieselbe Datei, aus der auch die UI-Seite \`/lehrplan\` rendert.`)
out.push(``)

// ── Lehrplan (aus curriculum.js) ────────────────────────────────────────────
out.push(`## Lehrplan (TU Wien Maschinenbau)`)
out.push(``)
out.push(CURRICULUM_INTRO)
out.push(``)

function topicBadge(topicId) {
  const t = getTopic(topicId)
  if (!t) return `\`${topicId}\` _(fehlt)_`
  return `[${t.title}](#${topicId})`
}

for (const phase of CURRICULUM_PHASES) {
  out.push(`### ${phase.label}`)
  out.push(``)
  out.push(`_${phase.subtitle}_ — ${phase.description}`)
  out.push(``)
  out.push(`| Fach | Topics | Hinweis |`)
  out.push(`| --- | --- | --- |`)
  for (const s of phase.subjects) {
    const links = s.topicIds.map(topicBadge).join(' · ')
    out.push(`| **${s.subject}** | ${links} | ${s.hint ?? ''} |`)
  }
  out.push(``)
}

if (PLANNED_TOPICS.length > 0) {
  out.push(`### Geplante Themen`)
  out.push(``)
  out.push(`Fächer aus dem TU-Wien-Maschinenbau-Bachelor, die das Curriculum ergänzen würden. ` +
    `Noch nicht als Topics in der App angelegt.`)
  out.push(``)
  out.push(`| Thema | Phase | Geplante Units | Begründung |`)
  out.push(`| --- | :---: | --- | --- |`)
  for (const p of PLANNED_TOPICS) {
    out.push(`| **${p.title}** | ${p.phase} | ${p.plannedUnits.join(' · ')} | ${p.reason} |`)
  }
  out.push(``)
}

out.push(`### Lern- & Prüfungstechnik`)
out.push(``)
for (const group of CURRICULUM_TIPS) {
  out.push(`**${group.title}**`)
  out.push(``)
  for (const item of group.items) out.push(`- ${item}`)
  out.push(``)
}

// Gesamt-Kennzahlen
out.push(`## Gesamt-Kennzahlen`)
out.push(``)
out.push(`| Metrik | Wert | Ziel | Status |`)
out.push(`| --- | ---: | ---: | :---: |`)
out.push(`| Topics | ${topics.length} | ${topics.length} | ✅ |`)
out.push(`| Units | ${gUnits} | — | — |`)
out.push(`| Lessons | ${gLessons} | — | — |`)
out.push(`| Aufgaben (gesamt) | ${gTotal} | — | — |`)
out.push(`| Aufgaben mit 4-Block | ${gFourBlock} (${percent(gFourBlock, gTotal)} %) | ${gTotal} (100 %) | ${statusIcon(gFourBlock, gTotal)} |`)
out.push(`| MC mit wrongAnswerExplanations | ${gMcWae} / ${gMcTotal} (${percent(gMcWae, gMcTotal)} %) | 100 % | ${statusIcon(gMcWae, gMcTotal)} |`)
out.push(`| Sub-Goal-Tasks verknüpft | ${gSubGoalsCovered} / ${gSubGoals} (${percent(gSubGoalsCovered, gSubGoals)} %) | 100 % | ${statusIcon(gSubGoalsCovered, gSubGoals)} |`)
out.push(`| Practice-Topics ≥ ${PRACTICE_BASELINE} Exercises | ${gPracticeOk} / ${topics.length} | ${topics.length} / ${topics.length} | ${statusIcon(gPracticeOk, topics.length)} |`)
out.push(``)

// Qualitätskontrakt (permanent, erklärt Ziel)
out.push(`## Qualitätskontrakt pro Aufgabe`)
out.push(``)
out.push(`- 4-Block-Erklärung: **Ansatz** / **Rechnung** / **Probe** / **Typischer Fehler**.`)
out.push(`- ≥ 3 Hints, gestaffelt.`)
out.push(`- Multiple-Choice: \`wrongAnswerExplanations\` für jeden falschen Index.`)
out.push(`- Number-Input: \`unit\` + \`tolerance\` gesetzt.`)
out.push(`- Prüfungs-Unit: Frage/Statement beginnt mit \`[PRÜFUNG] \`.`)
out.push(`- Goal-Tasks: Sub-Goal-Label wörtlich in der Frage zitiert, Typen-Rotation pro Lesson.`)
out.push(``)

// Pro Topic
out.push(`## Pro Topic`)
out.push(``)

for (const row of perTopic) {
  const { topic, topicMetrics, perLesson, practiceCount, tSubGoals, tSubGoalsCovered } = row
  const hasExamUnit = (topic.units ?? []).some((u) => /prüfung/i.test(u.title))
  const lastIsExam = /prüfung/i.test(topic.units?.at(-1)?.title ?? '')

  out.push(`<a id="${topic.id}"></a>`)
  out.push(``)
  out.push(`### ${topic.id} · ${topic.title}`)
  out.push(``)
  out.push(`- Phase: **${phaseLabel(topic.id)}** · Level: ${topic.level ?? '—'} · Exam-Relevanz: ${topic.examRelevance ?? '—'}`)
  out.push(`- Units: ${topic.units?.length ?? 0}${hasExamUnit ? (lastIsExam ? ' (Prüfung am Ende ✅)' : ' (⚠ Prüfung nicht letzte Unit)') : ' (⚠ keine Prüfungs-Unit)'}`)
  out.push(`- Lessons: ${perLesson.length}`)
  out.push(`- Aufgaben: **${topicMetrics.total}** (manuell: ${topicMetrics.manual} · supplemental: ${topicMetrics.supplemental})`)
  out.push(`- 4-Block: ${topicMetrics.fourBlock}/${topicMetrics.total} (${percent(topicMetrics.fourBlock, topicMetrics.total)} %) ${statusIcon(topicMetrics.fourBlock, topicMetrics.total)}`)
  out.push(`- MC-wAE: ${topicMetrics.mcWithWae}/${topicMetrics.mcTotal} (${percent(topicMetrics.mcWithWae, topicMetrics.mcTotal)} %) ${statusIcon(topicMetrics.mcWithWae, topicMetrics.mcTotal)}`)
  out.push(`- Sub-Goals: ${tSubGoalsCovered}/${tSubGoals} Goal-Tasks verknüpft ${statusIcon(tSubGoalsCovered, tSubGoals)}`)
  out.push(`- Practice-Exercises: ${practiceCount} ${practiceCount >= PRACTICE_BASELINE ? '✅' : '🟡'}`)
  out.push(``)

  // Lehrplan-Guide (falls definiert) — Kernkompetenzen, Fallen, Prüfungsfokus
  const guide = TOPIC_GUIDES[topic.id]
  if (guide) {
    out.push(`**${guide.summary}**`)
    out.push(``)
    if (guide.whyItMatters) {
      out.push(`_${guide.whyItMatters}_`)
      out.push(``)
    }
    if (guide.roadmap) {
      out.push(`**Empfohlene Reihenfolge**`)
      out.push(``)
      for (let i = 0; i < guide.roadmap.length; i++) {
        const r = guide.roadmap[i]
        const unit = (topic.units ?? []).find((u) => u.id === r.unitId)
        out.push(`${i + 1}. **${unit?.title ?? r.unitId}** — ${r.focus}`)
      }
      out.push(``)
    }
    const sections = [
      ['Das musst du können', guide.mustKnow],
      ['Typische Fehler', guide.commonMistakes],
      ['Klausur-Fokus', guide.examFocus],
      ['Lern-Tipps', guide.studyTips],
    ]
    for (const [title, items] of sections) {
      if (!items || items.length === 0) continue
      out.push(`**${title}**`)
      out.push(``)
      for (const it of items) out.push(`- ${it}`)
      out.push(``)
    }
  }

  out.push(`| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |`)
  out.push(`| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |`)

  for (const { lesson, m } of perLesson) {
    const gaps = []
    if (m.subGoalsCount > 0 && m.subGoalsCovered < m.subGoalsCount) {
      gaps.push(`+${m.subGoalsCount - m.subGoalsCovered} Goal`)
    }
    if (m.total > 0 && m.fourBlock < m.total) {
      gaps.push(`+${m.total - m.fourBlock} 4B`)
    }
    if (m.mcTotal > 0 && m.mcWithWae < m.mcTotal) {
      gaps.push(`+${m.mcTotal - m.mcWithWae} wAE`)
    }
    if (!m.hasMastery) gaps.push('Mastery')
    const gapStr = gaps.length === 0 ? '—' : gaps.join(', ')
    const tc = m.typeCount ?? {}
    const histo = `${tc['multiple-choice'] ?? 0}/${tc['number-input'] ?? 0}/${tc['true-false'] ?? 0}/${tc['matching'] ?? 0}/${tc['sorting'] ?? 0}`
    out.push(
      `| \`${lesson.id}\` ${lesson.title} | ${m.subGoalsCount} | ${m.subGoalsCovered}/${m.subGoalsCount || 0} | ${m.total} | ${histo} | ${m.fourBlock}/${m.total} | ${m.mcTotal > 0 ? `${m.mcWithWae}/${m.mcTotal}` : '—'} | ${m.hasMastery ? '✅' : '🟡'} | ${gapStr} |`,
    )
  }
  out.push(``)
}

// Topic-Level-Kurzzusammenfassung (Practice-Baseline) — zeigt nur noch die
// topic-weiten Lücken, die nicht in den per-Lesson-Task-Cards auftauchen.
const practiceGaps = gaps.filter((g) => g.kind === 'practice')
if (practiceGaps.length > 0) {
  out.push(`## Topic-Level-Lücken`)
  out.push(``)
  out.push(`Practice-Topics mit weniger als ${PRACTICE_BASELINE} Exercises:`)
  out.push(``)
  for (const g of practiceGaps) out.push(`- ${g.detail}`)
  out.push(``)
}

// ─── Agenten-Auftragsliste ──────────────────────────────────────────────────
// Alles, was ein Coding-Agent (Claude Code) braucht, um fehlende Aufgaben zu
// schreiben, in kopierbaren Task-Cards.

const agentTasks = getAgentTasks()

if (agentTasks.length > 0) {
  out.push(`## Auftragsliste für Claude Code`)
  out.push(``)
  out.push(`**Ziel:** Handgeschriebene Aufgaben in Menge ergänzen. Keine Template-Generatoren, keine Slop-Aufgaben.`)
  out.push(``)
  out.push(`**Mengen-Regel:** ${MIN_EXERCISES_PER_LESSON} Aufgaben pro Lesson sind das **Minimum** — keine Obergrenze. Viele Aufgaben = bessere Routine. Wenn eine Lesson 7 Grund-Aufgaben hat, sind weitere 7–10 Supplements kein "zu viel", sondern gut.`)
  out.push(``)
  out.push(`### Qualitätsvorgaben pro Aufgabe`)
  out.push(``)
  out.push(`- **4-Block-Erklärung:** \`**Ansatz:**\` / \`**Rechnung:**\` / \`**Probe:**\` / \`**Typischer Fehler:**\` — alle vier Markdown-Headings müssen in \`explanation\` vorkommen.`)
  out.push(`- **≥ 3 Hints**, inhaltlich gestaffelt (Konzept → Methode → konkreter Schritt).`)
  out.push(`- **Multiple-Choice:** ≥ 3 Optionen, \`wrongAnswerExplanations\` für JEDEN falschen Index (1-2 Sätze, benennt den vermuteten Fehler).`)
  out.push(`- **Number-Input:** \`correctValue\`, \`tolerance\`, \`unit\` gesetzt (leer nur bei einheitenlosen Größen).`)
  out.push(`- **True-False:** Feld \`correct: boolean\` (nicht \`isTrue\`).`)
  out.push(`- **Typen-Rotation pro Lesson:** nicht 5× MC hintereinander — Mischung aus mc/ni/tf/matching/sorting.`)
  out.push(`- **Prüfungs-Units:** Frage/Statement beginnt mit \`[PRÜFUNG] \`.`)
  out.push(`- **Goal-Tasks:** Sub-Goal-Label wörtlich in der Frage zitiert (\`Sub-Goal "…": …\`).`)
  out.push(`- **Inhalt 100 % manuell** — konkrete Zahlen, fachlich korrekt, keine Platzhalter.`)
  out.push(``)
  out.push(`### Ablage-Orte`)
  out.push(``)
  out.push(`- **Supplement-Aufgaben (Standard-Vertiefung):** \`src/content/supplements/<topic>.js\` im Profile-Format (s. vorhandene Dateien als Vorlage; \`bank(profile)\` erzeugt 7 typen-gemischte Aufgaben + Erklärung pro Lesson).`)
  out.push(`- **Goal-Tasks (pro Sub-Goal eine Aufgabe):** \`src/content/subgoal_tasks/<topic>.js\` mit Helfern aus \`./_helpers.js\` (\`mc/ni/tf/matching/sorting\`). Array-Länge MUSS \`lesson.subGoals.length\` entsprechen.`)
  out.push(`- **Registrierung:** Neues Supplement-File in \`src/content/index.js\` importieren und in \`MANUAL_SUPPLEMENTS\` spreaden; neues Goal-Task-File entsprechend in \`SUBGOAL_EXERCISES\`.`)
  out.push(``)
  out.push(`### Nach dem Schreiben verifizieren`)
  out.push(``)
  out.push(`\`\`\``)
  out.push(`npm run validate:content   # Pflichtfeld-Check`)
  out.push(`npm run status             # STATUS.md neu generieren, Task-Karten sollen schrumpfen`)
  out.push(`npm test                   # Audit-Tests laufen lassen`)
  out.push(`npm run build              # abschließender End-zu-End-Check`)
  out.push(`\`\`\``)
  out.push(``)

  // Gruppiert nach Priorität
  const byPriority = { critical: [], high: [], medium: [], low: [] }
  for (const t of agentTasks) byPriority[t.priority].push(t)

  const priLabel = {
    critical: '🔴 Kritisch (< 5 Aufgaben oder Prüfung unvollständig)',
    high: '🟠 Hoch (< 8 Aufgaben)',
    medium: '🟡 Mittel (Baseline nicht erreicht oder Goal-Tasks fehlen)',
    low: '🟢 Niedrig (4-Block / wAE nachziehen)',
  }

  for (const prio of ['critical', 'high', 'medium', 'low']) {
    const bucket = byPriority[prio]
    if (bucket.length === 0) continue
    out.push(`### ${priLabel[prio]} — ${bucket.length} Lessons`)
    out.push(``)

    for (const t of bucket) {
      out.push(`#### \`${t.lessonId}\` · ${t.lessonTitle}`)
      out.push(``)
      out.push(`- **Topic:** \`${t.topicId}\` (${t.topicTitle}) · **Unit:** ${t.unitTitle}${t.isExamUnit ? ' · **[PRÜFUNG]**' : ''}`)
      out.push(`- **Aufgaben aktuell:** ${t.have} (Minimum: ${t.target}) · **fehlen mindestens:** ${t.missing} — mehr ist besser`)
      const histParts = Object.entries(t.typeHistogram)
        .filter(([, n]) => n > 0)
        .map(([type, n]) => `${type} ×${n}`)
      out.push(`- **Typen vorhanden:** ${histParts.length > 0 ? histParts.join(', ') : '— (leer)'}`)
      out.push(`- **Typen einsetzen (Rotation):** ${t.suggestedTypes.join(', ')}`)

      if (t.subGoals.length > 0) {
        out.push(`- **Sub-Goals dieser Lesson:**`)
        for (let i = 0; i < t.subGoals.length; i++) {
          const sg = t.subGoals[i]
          const covered = !t.subGoalsMissingTasks.some((m) => m.index === i)
          out.push(`  - [${covered ? 'x' : ' '}] [${i}] (${sg.examRelevance}) ${sg.label}`)
        }
      }

      if (t.subGoalsMissingTasks.length > 0) {
        out.push(`- **Goal-Tasks fehlen für Sub-Goal-Indizes:** ${t.subGoalsMissingTasks.map((m) => m.index).join(', ')}`)
        out.push(`  - Ablage: \`${t.targetFile.goalTasks}\``)
      }
      if (t.missing > 0) {
        out.push(`- **Zusatz-Aufgaben fehlen (mindestens):** ${t.missing} — gerne mehr, keine Obergrenze`)
        out.push(`  - Ablage: \`${t.targetFile.supplements}\``)
      }
      if (t.fourBlockMissing.length > 0) {
        out.push(`- **4-Block-Erklärung fehlt bei:** ${t.fourBlockMissing.slice(0, 8).map((id) => `\`${id}\``).join(', ')}${t.fourBlockMissing.length > 8 ? ` … (+${t.fourBlockMissing.length - 8} weitere)` : ''}`)
      }
      if (t.mcMissingWae.length > 0) {
        out.push(`- **MC-wAE fehlt bei:** ${t.mcMissingWae.slice(0, 8).map((id) => `\`${id}\``).join(', ')}${t.mcMissingWae.length > 8 ? ` … (+${t.mcMissingWae.length - 8} weitere)` : ''}`)
      }
      out.push(``)
    }
  }
}

if (gaps.length === 0 && agentTasks.length === 0) {
  out.push(`✅ Alle Ziele erreicht.`)
  out.push(``)
}

writeFileSync(OUTPUT, out.join('\n'), 'utf8')
console.log(`✓ STATUS.md geschrieben (${topics.length} Topics, ${gLessons} Lessons, ${gTotal} Aufgaben).`)
