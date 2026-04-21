#!/usr/bin/env node
/**
 * Generiert LERNZIELE.md — zentrale Matrix aller Lernziele (Topic → Unit →
 * Lesson → SubGoal), aufgelöst nach Studienphase (Vorkurs / Semester 1 /
 * Semester 2 / Vertiefung), plus Coverage-Report.
 *
 * Wird automatisch vom Prebuild-Hook aufgerufen:
 *   npm run lernziele
 */

import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { getAllTopics } from '../src/content/index.js'
import { getTopicMeta, getStudienbeginPhase } from '../src/utils/topicGraph.ts'
import {
  collectTopicMetrics,
  collectLessonMetrics,
  percent,
} from './lib/content-metrics.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const outputFile = path.join(repoRoot, 'LERNZIELE.md')

// Mapping von Topic zu Studienphase. Bevorzugt Topic.phase (explizit gesetzt),
// fällt sonst auf topicGraph.studienbeginPriority zurück.
const PHASE_ORDER = ['vorkurs', 'semester-1', 'semester-2', 'vertiefung']
const PHASE_LABELS = {
  vorkurs: 'Phase 0 — Vorkurs',
  'semester-1': 'Phase 1 — Semester 1',
  'semester-2': 'Phase 2 — Semester 2',
  vertiefung: 'Phase 3 — Vertiefung',
}
const PHASE_INTROS = {
  vorkurs:
    'Basiskompetenzen vor Studienbeginn: Rechnen, Einheiten, Grundbegriffe. Diese Inhalte tauchen in jeder späteren Prüfung als stille Voraussetzung auf.',
  'semester-1':
    'Die fünf Grundsäulen des 1. Semesters: Mathe 1, Mechanik 1 (Statik), Werkstoffkunde 1, Elektrotechnik, Programmieren.',
  'semester-2':
    'Aufbau auf Semester 1: erweiterte Mathematik, Festigkeitslehre, Thermodynamik 1, Maschinenelemente 1.',
  vertiefung:
    'Spezialisierungs- und Vertiefungsfächer ab dem 3. Semester. Prüfungsrelevanz hängt von der gewählten Studienrichtung ab.',
}

function topicPhase(topic) {
  if (topic.phase && PHASE_ORDER.includes(topic.phase)) return topic.phase
  const prio = getStudienbeginPhase(topic.id)
  if (prio === 1) return 'semester-1'
  if (prio === 2) return 'semester-2'
  return 'vertiefung'
}

function examRelevanceLabel(topic) {
  if (topic.examRelevance === 'pflicht') return '**Pflicht**'
  if (topic.examRelevance === 'wahl') return 'Wahl'
  if (topic.examRelevance === 'grundlage') return 'Grundlage'
  return '—'
}

function subGoalBadge(sg) {
  const weight = sg.examRelevance
  if (weight === 'hoch') return '[HOCH]'
  if (weight === 'mittel') return '[MITTEL]'
  if (weight === 'niedrig') return '[NIEDRIG]'
  return '[—]'
}

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

// ── Topics nach Phase gruppieren ────────────────────────────────────────────

const topics = getAllTopics()
const topicsByPhase = Object.fromEntries(PHASE_ORDER.map((p) => [p, []]))
for (const topic of topics) {
  topicsByPhase[topicPhase(topic)].push(topic)
}
for (const phase of PHASE_ORDER) {
  topicsByPhase[phase].sort(
    (a, b) => (getTopicMeta(a.id).order ?? 999) - (getTopicMeta(b.id).order ?? 999)
  )
}

// ── Gesamt-Metriken ─────────────────────────────────────────────────────────

let totalLessons = 0
let totalLessonsWithSubGoals = 0
let totalTopicsWithGoals = 0
let totalExercises = 0
let totalManual = 0
let totalFourBlock = 0
let totalWithExplanation = 0

for (const topic of topics) {
  const m = collectTopicMetrics(topic)
  totalExercises += m.total
  totalManual += m.manual
  totalFourBlock += m.fourBlock
  totalWithExplanation += m.withExplanation
  if (Array.isArray(topic.topicGoals) && topic.topicGoals.length > 0) {
    totalTopicsWithGoals += 1
  }
  for (const unit of topic.units ?? []) {
    for (const lesson of unit.lessons ?? []) {
      totalLessons += 1
      if (Array.isArray(lesson.subGoals) && lesson.subGoals.length > 0) {
        totalLessonsWithSubGoals += 1
      }
    }
  }
}

// ── Markdown generieren ─────────────────────────────────────────────────────

const now = new Date().toISOString().slice(0, 10)
const lines = []

lines.push('# Lernziele — Maschinenbau TU Wien')
lines.push('')
lines.push(`> **Automatisch generiert** am ${now} via \`npm run lernziele\`.`)
lines.push('> Nicht manuell bearbeiten — bei Content-Änderungen neu generieren.')
lines.push('')
lines.push(
  'Die Datei bündelt alle Lernziele der App nach Studienphase. Jedes Topic, jede Unit und jede Lesson listet, was danach beherrscht werden soll. Die Sub-Goals markieren kleinteilige Prüfungs-Mikrothemen (HOCH/MITTEL/NIEDRIG).'
)
lines.push('')

// ── Executive Summary ───────────────────────────────────────────────────────

lines.push('## Kennzahlen')
lines.push('')
lines.push('| Metrik | Wert |')
lines.push('|---|---|')
lines.push(`| Topics | ${topics.length} |`)
lines.push(
  `| Topics mit expliziten \`topicGoals\` | ${totalTopicsWithGoals} / ${topics.length} (${percent(totalTopicsWithGoals, topics.length)}%) |`
)
lines.push(`| Lessons insgesamt | ${totalLessons} |`)
lines.push(
  `| Lessons mit \`subGoals\` | ${totalLessonsWithSubGoals} / ${totalLessons} (${percent(totalLessonsWithSubGoals, totalLessons)}%) |`
)
lines.push(
  `| Aufgaben (manuell/gesamt) | ${totalManual} / ${totalExercises} (${percent(totalManual, totalExercises)}% manuell) |`
)
lines.push(
  `| Aufgaben mit 4-Block-Erklärung | ${totalFourBlock} / ${totalWithExplanation} (${percent(totalFourBlock, totalWithExplanation)}%) |`
)
lines.push('')

// ── Phasen-Übersicht ────────────────────────────────────────────────────────

lines.push('## Übersicht nach Studienphase')
lines.push('')
lines.push('| Phase | Topic | Units | Lessons | Aufg. manuell/gesamt | 4-Block | Prüfung |')
lines.push('|---|---|---|---|---|---|---|')

for (const phase of PHASE_ORDER) {
  for (const topic of topicsByPhase[phase]) {
    const m = collectTopicMetrics(topic)
    const units = (topic.units ?? []).length
    const lessons = (topic.units ?? []).reduce((sum, u) => sum + (u.lessons?.length ?? 0), 0)
    lines.push(
      `| ${PHASE_LABELS[phase].split('—')[0].trim()} | [${topic.title}](#${slugify(topic.id)}) | ${units} | ${lessons} | ${m.manual}/${m.total} | ${m.fourBlock}/${m.withExplanation} (${percent(m.fourBlock, m.withExplanation)}%) | ${examRelevanceLabel(topic)} |`
    )
  }
}
lines.push('')

// ── Lehrplan-Alignment ──────────────────────────────────────────────────────

lines.push('## Lehrplan-Alignment')
lines.push('')
lines.push(
  'Quelle: `src/content/lehrplan/tu-wien-maschinenbau.md`. Jede Phase unten entspricht einem Abschnitt dieses Lehrplans; fehlen Topics, ist das ein offener Punkt.'
)
lines.push('')

// ── Pro Phase: Detail-Breakdown ─────────────────────────────────────────────

for (const phase of PHASE_ORDER) {
  const phaseTopics = topicsByPhase[phase]
  if (phaseTopics.length === 0) continue

  lines.push(`## ${PHASE_LABELS[phase]}`)
  lines.push('')
  lines.push(`*${PHASE_INTROS[phase]}*`)
  lines.push('')

  for (const topic of phaseTopics) {
    const m = collectTopicMetrics(topic)
    lines.push(`<a id="${slugify(topic.id)}"></a>`)
    lines.push(`### ${topic.title} \`${topic.id}\``)
    lines.push('')
    lines.push(`**Prüfungsrelevanz:** ${examRelevanceLabel(topic)}  `)
    lines.push(
      `**Aufgaben:** ${m.total} gesamt · ${m.manual} manuell · ${m.supplemental} auto-supplemental · ${m.fourBlock} mit 4-Block-Erklärung (${percent(m.fourBlock, m.withExplanation)}%)`
    )
    lines.push('')

    if (Array.isArray(topic.topicGoals) && topic.topicGoals.length > 0) {
      lines.push('**Topic-Lernziele (nach Abschluss):**')
      for (const g of topic.topicGoals) lines.push(`- ${g}`)
      lines.push('')
    } else {
      lines.push('> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.')
      lines.push('')
    }

    for (const unit of topic.units ?? []) {
      const unitTitle = unit.title ?? unit.id ?? '—'
      lines.push(`#### ${/prüfung/i.test(unitTitle) ? '🏁 ' : ''}${unitTitle}`)
      lines.push('')
      if (Array.isArray(unit.unitGoals) && unit.unitGoals.length > 0) {
        lines.push('**Unit-Lernziele:**')
        for (const g of unit.unitGoals) lines.push(`- ${g}`)
        lines.push('')
      }

      for (const lesson of unit.lessons ?? []) {
        const lm = collectLessonMetrics(topic, lesson)
        lines.push(
          `##### ${lesson.title} \`${lesson.id}\` · ${lesson.estimatedMinutes ?? '?'} min`
        )
        if (Array.isArray(lesson.learningGoals) && lesson.learningGoals.length > 0) {
          lines.push('')
          lines.push('**Nach dieser Lesson kannst du:**')
          for (const g of lesson.learningGoals) lines.push(`- ${g}`)
        }
        if (Array.isArray(lesson.subGoals) && lesson.subGoals.length > 0) {
          lines.push('')
          lines.push('**Kleine Themen (Sub-Goals):**')
          for (const sg of lesson.subGoals) {
            lines.push(`- ${subGoalBadge(sg)} ${sg.label}`)
          }
        }
        lines.push('')
        lines.push(
          `*Aufgaben-Coverage:* ${lm.total} gesamt · ${lm.manual} manuell / ${lm.supplemental} auto-supp · ${lm.fourBlock} mit 4-Block-Erklärung`
        )
        lines.push('')
      }
    }
  }
}

// ── Coverage-Report / Backlog ───────────────────────────────────────────────

lines.push('## Coverage-Report (Backlog)')
lines.push('')

const topicsWithoutGoals = topics.filter(
  (t) => !Array.isArray(t.topicGoals) || t.topicGoals.length === 0
)
lines.push(`### Topics ohne \`topicGoals\` (${topicsWithoutGoals.length})`)
if (topicsWithoutGoals.length === 0) {
  lines.push('*Alle Topics haben Topic-Lernziele. 🎉*')
} else {
  for (const t of topicsWithoutGoals) lines.push(`- \`${t.id}\` — ${t.title}`)
}
lines.push('')

const lessonsWithoutSubGoals = []
for (const topic of topics) {
  for (const unit of topic.units ?? []) {
    for (const lesson of unit.lessons ?? []) {
      if (!Array.isArray(lesson.subGoals) || lesson.subGoals.length === 0) {
        lessonsWithoutSubGoals.push({ topicId: topic.id, lessonId: lesson.id, title: lesson.title })
      }
    }
  }
}
lines.push(`### Lessons ohne \`subGoals\` (${lessonsWithoutSubGoals.length} / ${totalLessons})`)
lines.push('')
if (lessonsWithoutSubGoals.length > 20) {
  lines.push(
    `Gekürzt auf die ersten 20 — die Gesamtliste erscheint erst, wenn < 50 % der Lessons offen sind:`
  )
  lines.push('')
  for (const l of lessonsWithoutSubGoals.slice(0, 20)) {
    lines.push(`- \`${l.topicId}\` / \`${l.lessonId}\` — ${l.title}`)
  }
  lines.push(`- … +${lessonsWithoutSubGoals.length - 20} weitere`)
} else {
  for (const l of lessonsWithoutSubGoals) {
    lines.push(`- \`${l.topicId}\` / \`${l.lessonId}\` — ${l.title}`)
  }
}
lines.push('')

// Topics mit niedrigem 4-Block-Anteil
const fourBlockRanking = topics
  .map((t) => ({ topic: t, metrics: collectTopicMetrics(t) }))
  .filter((x) => x.metrics.withExplanation > 0)
  .sort(
    (a, b) =>
      percent(a.metrics.fourBlock, a.metrics.withExplanation) -
      percent(b.metrics.fourBlock, b.metrics.withExplanation)
  )
  .slice(0, 10)

lines.push('### Niedrigster 4-Block-Anteil (Top-10)')
lines.push('')
lines.push('| Topic | 4-Block / Erklärungen | % |')
lines.push('|---|---|---|')
for (const { topic, metrics } of fourBlockRanking) {
  lines.push(
    `| ${topic.title} (\`${topic.id}\`) | ${metrics.fourBlock} / ${metrics.withExplanation} | ${percent(metrics.fourBlock, metrics.withExplanation)}% |`
  )
}
lines.push('')

// Topics mit hohem Supplemental-Anteil
const supplementalRanking = topics
  .map((t) => ({ topic: t, metrics: collectTopicMetrics(t) }))
  .filter((x) => x.metrics.total > 0)
  .sort(
    (a, b) =>
      percent(b.metrics.supplemental, b.metrics.total) -
      percent(a.metrics.supplemental, a.metrics.total)
  )
  .slice(0, 10)

lines.push('### Höchster Anteil Auto-Supplementals (Top-10)')
lines.push('')
lines.push('| Topic | Supplemental / Gesamt | % |')
lines.push('|---|---|---|')
for (const { topic, metrics } of supplementalRanking) {
  lines.push(
    `| ${topic.title} (\`${topic.id}\`) | ${metrics.supplemental} / ${metrics.total} | ${percent(metrics.supplemental, metrics.total)}% |`
  )
}
lines.push('')

// ── Footer ─────────────────────────────────────────────────────────────────

lines.push('---')
lines.push('')
lines.push(
  `*Generiert mit \`scripts/generate-lernziele.js\` am ${now}. Siehe auch \`CONTENT_OVERVIEW.md\` (detaillierte Aufgaben-Tabellen) und \`src/content/lehrplan/tu-wien-maschinenbau.md\` (Original-Lehrplan TU Wien).*`
)
lines.push('')

writeFileSync(outputFile, lines.join('\n'))
console.log(
  `✓ LERNZIELE.md generiert (${lines.length} Zeilen, ${topics.length} Topics, ${totalLessons} Lessons).`
)
