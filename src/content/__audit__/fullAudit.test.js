import { describe, it } from 'vitest'
import { getAllTopics, getAllLessons } from '@/content/index'
import { getContentQualityIssues, getContentQualityWarnings } from '@/content/index'
import { getTopicMeta } from '@/utils/topicGraph'

/**
 * Vollständiger Content-Qualitäts-Audit.
 * Gibt strukturierten Report aus — schlägt nur fehl, wenn sich ein Fehler einschleicht,
 * ansonsten nur Informations-Dump über stdout.
 */
describe('Full Content Audit', () => {
  it('report lesson counts, prerequisites, learning goals, feedback-happen coverage', () => {
    const topics = getAllTopics()
    const report = []

    report.push('\n===== CONTENT AUDIT =====\n')

    // 1. Blocking issues (sollten leer sein, sonst würde index.js nicht laden)
    const issues = getContentQualityIssues()
    report.push(`Blocking issues: ${issues.length}`)
    if (issues.length) report.push(issues.slice(0, 20).join('\n'))

    // 2. Warnings (wrongAnswerExplanations-Coverage für MC)
    const warnings = getContentQualityWarnings()
    report.push(`\nMC wrongAnswerExplanations-Warnings: ${warnings.length}`)

    // Aufschlüsselung pro Topic
    const byTopic = {}
    for (const w of warnings) {
      const match = w.match(/^(ex-[a-z0-9-]+?)-/i)
      const prefix = match ? match[1].replace(/^ex-/, '').split('-')[0] : 'unknown'
      byTopic[prefix] = (byTopic[prefix] ?? 0) + 1
    }
    report.push('  Verteilung (Prefix → Anzahl):')
    for (const [k, v] of Object.entries(byTopic).sort((a, b) => b[1] - a[1])) {
      report.push(`    ${k.padEnd(10)} → ${v}`)
    }

    // 3. Pro Topic: Unit-/Lesson-/Exercise-Counts + Prereq-Kette
    report.push('\n----- Pro Topic -----')
    for (const topic of topics) {
      const meta = getTopicMeta(topic.id)
      const totalLessons = getAllLessons(topic.id).length
      const totalExercises = topic.units.flatMap((u) => Object.values(u.exercises ?? {})).length
      const examUnit = topic.units.at(-1)
      const isExamUnit = examUnit && /prüfung/i.test(examUnit.title)
      const lessons = getAllLessons(topic.id)
      const withoutMastery = lessons.filter((l) => !(l.steps ?? []).some((s) => s.type === 'mastery-check'))
      const typesPerLesson = lessons.map((l) => {
        const ex = (l.steps ?? []).filter((s) => s.type === 'exercise' || s.type === 'mastery-check')
        const uniqTypes = new Set()
        for (const step of ex) {
          const refEx = Object.values(topic.units.flatMap((u) => Object.values(u.exercises ?? {}))).find((e) => e.id === step.exerciseRef)
          if (refEx?.type) uniqTypes.add(refEx.type)
        }
        return uniqTypes.size
      })
      const tooFewTypes = typesPerLesson.filter((n) => n < 3).length

      report.push(
        `\n[${topic.id}] ${topic.title}` +
          `\n  Level: ${topic.level ?? '?'} · Priority: ${meta.studienbeginPriority ?? 'null'} · Prereqs: [${meta.prerequisiteTopics.join(', ') || '—'}]` +
          `\n  Units: ${topic.units.length} · Lessons: ${totalLessons} · Exercises: ${totalExercises}` +
          `\n  Prüfungs-Unit am Ende: ${isExamUnit ? '✓' : '✗'}` +
          `\n  Lessons ohne Mastery-Check: ${withoutMastery.length}` +
          `\n  Lessons mit <3 Aufgabentypen: ${tooFewTypes}/${lessons.length}`
      )
    }

    // 4. Lesson-Chains: prerequisites chain intact?
    report.push('\n----- Lesson-Chain-Validierung -----')
    let brokenChains = 0
    for (const topic of topics) {
      const lessonIds = new Set(getAllLessons(topic.id).map((l) => l.id))
      for (const lesson of getAllLessons(topic.id)) {
        for (const pid of lesson.prerequisites ?? []) {
          if (!lessonIds.has(pid)) {
            report.push(`  ${topic.id}/${lesson.id}: prerequisite "${pid}" nicht gefunden`)
            brokenChains++
          }
        }
        if (lesson.nextLessonId && !lessonIds.has(lesson.nextLessonId)) {
          report.push(`  ${topic.id}/${lesson.id}: nextLessonId "${lesson.nextLessonId}" nicht gefunden`)
          brokenChains++
        }
      }
    }
    report.push(`\n  Gebrochene Ketten: ${brokenChains}`)

    // 5. Feedback-Happen-Coverage: Anteil der explanations mit 4-Block-Markern
    report.push('\n----- Feedback-Happen-Coverage -----')
    let totalWithExplanation = 0
    let totalWithAllFourBlocks = 0
    let totalWithSomeBlocks = 0
    for (const topic of topics) {
      for (const unit of topic.units) {
        for (const ex of Object.values(unit.exercises ?? {})) {
          if (!ex.explanation) continue
          totalWithExplanation++
          const hasAnsatz = /\*\*Ansatz\s*:\*\*/i.test(ex.explanation)
          const hasRechnung = /\*\*Rechnung\s*:\*\*/i.test(ex.explanation)
          const hasProbe = /\*\*Probe\s*:\*\*/i.test(ex.explanation)
          const hasFehler = /\*\*Typischer Fehler\s*:\*\*/i.test(ex.explanation)
          const nBlocks = [hasAnsatz, hasRechnung, hasProbe, hasFehler].filter(Boolean).length
          if (nBlocks === 4) totalWithAllFourBlocks++
          if (nBlocks >= 2) totalWithSomeBlocks++
        }
      }
    }
    report.push(
      `  Aufgaben mit Erklärung: ${totalWithExplanation}` +
        `\n  davon alle 4 Blöcke (Ansatz/Rechnung/Probe/Fehler): ${totalWithAllFourBlocks} (${Math.round(100 * totalWithAllFourBlocks / totalWithExplanation)}%)` +
        `\n  davon ≥2 Blöcke: ${totalWithSomeBlocks} (${Math.round(100 * totalWithSomeBlocks / totalWithExplanation)}%)`
    )

    // eslint-disable-next-line no-console
    console.log(report.join('\n'))
  })
})
