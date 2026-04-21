#!/usr/bin/env node
/**
 * Generiert CONTENT_OVERVIEW.md — eine vollständige Übersicht über alle
 * Topics, Units, Lessons und Aufgaben der Lernapp. Die Datei wird automatisch
 * erzeugt und soll nach jeder Content-Änderung neu generiert werden:
 *
 *     npm run content-overview
 *
 * Ziel: Ein einzelnes Markdown-Dokument, aus dem klar hervorgeht, welche
 * Inhalte auf welchem Level und in welchem Detail enthalten sind.
 */

import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { getAllTopics, getAllLessons } from '../src/content/index.js'
import { getTopicMeta, getStudienbeginPhase } from '../src/utils/topicGraph.ts'
import {
  hasFourBlockExplanation,
  isMcWithCompleteWae,
} from './lib/content-metrics.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const outputFile = path.join(repoRoot, 'CONTENT_OVERVIEW.md')

const topics = getAllTopics()

// Sortierung: nach topicGraph.order, dann alphabetisch
const sortedTopics = [...topics].sort((a, b) => {
  const orderA = getTopicMeta(a.id).order ?? 999
  const orderB = getTopicMeta(b.id).order ?? 999
  if (orderA !== orderB) return orderA - orderB
  return a.title.localeCompare(b.title, 'de')
})

// ── Helpers ──────────────────────────────────────────────────────────────────

function phaseLabel(id) {
  const phase = getStudienbeginPhase(id)
  if (phase === 1) return '1. Sem'
  if (phase === 2) return '2. Sem'
  return 'Vertiefung'
}

function levelLabel(topic) {
  if (topic.level === 'grundlagen') return 'Grundlagen'
  if (topic.level === 'vertiefung') return 'Vertiefung'
  return topic.level ?? '—'
}

function countExercisesOfType(topic) {
  const counts = {}
  for (const unit of topic.units) {
    for (const ex of Object.values(unit.exercises ?? {})) {
      counts[ex.type] = (counts[ex.type] ?? 0) + 1
    }
  }
  return counts
}

function exerciseFlags(ex) {
  const flags = []
  if (ex.isMasteryCheck) flags.push('🎯')
  if (ex.isSupplemental) flags.push('➕')
  if (isMcWithCompleteWae(ex) === true) flags.push('wAE')
  if (hasFourBlockExplanation(ex)) flags.push('4B')
  return flags.length > 0 ? flags.join(' ') : ''
}

function typeIcon(t) {
  const map = {
    'multiple-choice': '🔘',
    'number-input': '🔢',
    'true-false': '✅',
    matching: '🔗',
    sorting: '📋',
    'fill-blank': '✏️',
  }
  return map[t] ?? '❓'
}

function stripLatex(s) {
  if (typeof s !== 'string') return ''
  return s
    .replace(/\$[^$]*\$/g, (m) => m.replace(/\\/g, '')) // Backslashes in Math entfernen für Lesbarkeit
    .replace(/\n+/g, ' ')
    .replace(/\|/g, '\\|')
    .slice(0, 120)
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

// ── Aggregate Stats ─────────────────────────────────────────────────────────

let totalUnits = 0
let totalLessons = 0
let totalExercises = 0
const typeTotals = {}
let examUnitsTotal = 0
let mcTotal = 0
let mcWithWae = 0
let explWithFourBlocks = 0
let explTotal = 0

for (const topic of sortedTopics) {
  totalUnits += topic.units.length
  for (const unit of topic.units) {
    if (/prüfung/i.test(unit.title)) examUnitsTotal += 1
    totalLessons += unit.lessons.length
    for (const ex of Object.values(unit.exercises ?? {})) {
      totalExercises += 1
      typeTotals[ex.type] = (typeTotals[ex.type] ?? 0) + 1
      if (ex.type === 'multiple-choice' && Array.isArray(ex.options) && ex.options.length >= 3) {
        mcTotal += 1
        if (isMcWithCompleteWae(ex)) mcWithWae += 1
      }
      if (typeof ex.explanation === 'string' && ex.explanation.length > 0) {
        explTotal += 1
        if (hasFourBlockExplanation(ex)) explWithFourBlocks += 1
      }
    }
  }
}

// ── Markdown generieren ─────────────────────────────────────────────────────

const now = new Date().toISOString().slice(0, 10)
const lines = []

lines.push(`# Content-Übersicht — Lernapp Maschinenbau`)
lines.push('')
lines.push(`> **Automatisch generiert** am ${now} via \`npm run content-overview\`.`)
lines.push('> Nicht manuell bearbeiten — bei Content-Änderungen neu generieren.')
lines.push('')
lines.push(`**Legende:** 🎯 Mastery-Check · ➕ Auto-Supplemental · **wAE** hat Distraktor-Erklärungen · **4B** Explanation im Ansatz/Rechnung/Probe/Fehler-Schema · 🔘 MC · 🔢 Number · ✅ True/False · 🔗 Matching · 📋 Sorting · ✏️ Fill-Blank`)
lines.push('')

// ── Executive Summary ───────────────────────────────────────────────────────

lines.push('## Gesamt-Statistik')
lines.push('')
lines.push('| Metrik | Wert |')
lines.push('|---|---|')
lines.push(`| Topics | **${sortedTopics.length}** |`)
lines.push(`| Units (davon Prüfungs-Units) | **${totalUnits}** (${examUnitsTotal}) |`)
lines.push(`| Lektionen | **${totalLessons}** |`)
lines.push(`| Aufgaben gesamt | **${totalExercises}** |`)
for (const [type, count] of Object.entries(typeTotals).sort((a, b) => b[1] - a[1])) {
  lines.push(`| &nbsp;&nbsp;· ${typeIcon(type)} ${type} | ${count} |`)
}
lines.push('| MC mit vollständigen `wrongAnswerExplanations` | ' + mcWithWae + ' / ' + mcTotal + ' (' + Math.round(100 * mcWithWae / Math.max(mcTotal, 1)) + '%) |')
lines.push('| Erklärungen im 4-Block-Schema (Ansatz/Rechnung/Probe/Fehler) | ' + explWithFourBlocks + ' / ' + explTotal + ' (' + Math.round(100 * explWithFourBlocks / Math.max(explTotal, 1)) + '%) |')
lines.push('')

// ── Topic-Überblick ─────────────────────────────────────────────────────────

lines.push('## Topic-Überblick')
lines.push('')
lines.push('| # | Topic | Level | Phase | Units | Lektionen | Aufgaben | Prereqs |')
lines.push('|---|---|---|---|---|---|---|---|')

sortedTopics.forEach((topic, idx) => {
  const meta = getTopicMeta(topic.id)
  const totalLsn = getAllLessons(topic.id).length
  const totalEx = topic.units.reduce((sum, u) => sum + Object.keys(u.exercises ?? {}).length, 0)
  const prereqs = meta.prerequisiteTopics.length > 0 ? meta.prerequisiteTopics.join(', ') : '—'
  lines.push(
    `| ${idx + 1} | [${topic.title}](#${slugify(topic.id)}) (\`${topic.id}\`) | ${levelLabel(topic)} | ${phaseLabel(topic.id)} | ${topic.units.length} | ${totalLsn} | ${totalEx} | ${prereqs} |`
  )
})
lines.push('')

// ── Pro Topic: Detail-Breakdown ─────────────────────────────────────────────

for (const topic of sortedTopics) {
  const meta = getTopicMeta(topic.id)
  const phaseP = phaseLabel(topic.id)
  const level = levelLabel(topic)
  const totalEx = topic.units.reduce((sum, u) => sum + Object.keys(u.exercises ?? {}).length, 0)
  const typeC = countExercisesOfType(topic)
  const typeBadges = Object.entries(typeC)
    .sort((a, b) => b[1] - a[1])
    .map(([t, c]) => `${typeIcon(t)} ${c}`)
    .join(' · ')

  lines.push(`<a id="${slugify(topic.id)}"></a>`)
  lines.push(`## ${topic.title} \`${topic.id}\``)
  lines.push('')
  lines.push(`**Level:** ${level} · **Phase:** ${phaseP} · **Category:** ${meta.category}  `)
  lines.push(`**Prerequisites:** ${meta.prerequisiteTopics.length > 0 ? meta.prerequisiteTopics.map((p) => `\`${p}\``).join(', ') : '—'}  `)
  lines.push(`**${topic.units.length} Units** · **${getAllLessons(topic.id).length} Lektionen** · **${totalEx} Aufgaben** (${typeBadges})`)
  if (topic.description) {
    lines.push('')
    lines.push(`*${topic.description}*`)
  }
  lines.push('')

  for (const unit of topic.units) {
    const unitEx = Object.keys(unit.exercises ?? {}).length
    const isExam = /prüfung/i.test(unit.title)
    lines.push(`### ${isExam ? '🏁 ' : ''}${unit.title}${unit.order !== undefined ? ` (Unit ${unit.order})` : ''}`)
    if (unit.description) lines.push(`*${unit.description}*`)
    lines.push('')
    lines.push(`${unit.lessons.length} Lektionen · ${unitEx} Aufgaben`)
    lines.push('')

    for (const lesson of unit.lessons) {
      const lessonExercises = (lesson.steps ?? [])
        .filter((s) => s.type === 'exercise' || s.type === 'mastery-check')
        .map((s) => {
          const ex = unit.exercises?.[s.exerciseRef]
          return ex ? { step: s, ex } : null
        })
        .filter(Boolean)

      lines.push(`#### ${lesson.title}  \`${lesson.id}\` · ${lesson.estimatedMinutes ?? '?'} min`)

      if (Array.isArray(lesson.learningGoals) && lesson.learningGoals.length > 0) {
        lines.push('')
        lines.push(`**Lernziele:**`)
        for (const g of lesson.learningGoals) lines.push(`- ${stripLatex(g)}`)
      }

      if (lessonExercises.length > 0) {
        lines.push('')
        lines.push('| # | Typ | Titel / Frage | Flags |')
        lines.push('|---|---|---|---|')
        lessonExercises.forEach(({ step, ex }, i) => {
          const qPreview = stripLatex(ex.question ?? ex.statement ?? step.title ?? '')
          lines.push(`| ${i + 1} | ${typeIcon(ex.type)} ${ex.type} | ${qPreview} | ${exerciseFlags(ex)} |`)
        })
      }
      lines.push('')
    }
  }
}

// ── Footer ─────────────────────────────────────────────────────────────────

lines.push('---')
lines.push('')
lines.push(`*Generiert mit \`scripts/generate-content-overview.js\` am ${now}. Für Fragen zum Inhalt: siehe Guidelines in \`~/.claude/projects/.../memory/guidelines_exercises.md\`.*`)
lines.push('')

writeFileSync(outputFile, lines.join('\n'))
console.log(`✓ CONTENT_OVERVIEW.md generiert (${lines.length} Zeilen, ${totalExercises} Aufgaben dokumentiert).`)
