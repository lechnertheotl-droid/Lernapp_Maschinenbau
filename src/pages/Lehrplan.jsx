import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { MarkdownContent } from '@/components/lesson/MarkdownContent'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons, getTopic } from '@/content/index'
import { getTopicMeta } from '@/utils/topicGraph'
import {
  CURRICULUM_INTRO,
  CURRICULUM_PHASES,
  CURRICULUM_TIPS,
  TOPIC_GUIDES,
  PLANNED_TOPICS,
  MIN_EXERCISES_PER_LESSON,
} from '@/content/curriculum'

// Phasen-Zuordnung (aus topicGraph.studienbeginPriority abgeleitet).
// `null` = Vertiefung (Phase 3).
function phaseOf(topicId) {
  const priority = getTopicMeta(topicId).studienbeginPriority
  if (priority === 1) return 1
  if (priority === 2) return 2
  return 3
}

const PHASE_CARD_META = {
  1: { label: '1. Semester', tone: 'primary' },
  2: { label: '2. Semester', tone: 'lemon' },
  3: { label: 'Vertiefung',  tone: 'green' },
}

// Max. Anzahl Ziele, die pro Phase angezeigt werden — Rest wird mit
// "+N weitere" zusammengefasst.
const PHASE_GOAL_LIMIT = 6

export function Lehrplan() {
  const { progress } = useAppState()
  const topics = getAllTopics()

  // Pro Phase: wie viele Topics sind abgeschlossen (completedLessons == alle Lessons)?
  const phaseStats = useMemo(() => {
    const stats = { 1: { done: 0, total: 0 }, 2: { done: 0, total: 0 }, 3: { done: 0, total: 0 } }
    for (const topic of topics) {
      const phase = phaseOf(topic.id)
      stats[phase].total += 1
      const totalLessons = getAllLessons(topic.id).length
      const completedLessons = progress.topicProgress[topic.id]?.completedLessons?.length ?? 0
      if (totalLessons > 0 && completedLessons >= totalLessons) {
        stats[phase].done += 1
      }
    }
    return stats
  }, [topics, progress])

  // Pro Phase: aggregierte Lernziele aus den topicGoals der Topics dieser Phase.
  const phaseGoals = useMemo(() => {
    const goals = { 1: [], 2: [], 3: [] }
    for (const topic of topics) {
      if (!Array.isArray(topic.topicGoals) || topic.topicGoals.length === 0) continue
      const phase = phaseOf(topic.id)
      for (const g of topic.topicGoals) {
        if (typeof g === 'string' && g.trim().length > 0) goals[phase].push(g)
      }
    }
    return goals
  }, [topics])

  return (
    <div className="max-w-3xl mx-auto px-4 py-5 flex flex-col gap-6">
      <Breadcrumbs items={[
        { label: 'Start', to: '/' },
        { label: 'Mehr',  to: '/mehr' },
        { label: 'Lehrplan' },
      ]} />

      <header>
        <h1 className="font-black text-ink dark:text-paper text-2xl leading-tight">
          Lehrplan — TU Wien Maschinenbau
        </h1>
        <p className="text-ink-soft dark:text-surface-300 text-sm mt-1">
          {CURRICULUM_INTRO}
        </p>
      </header>

      <section className="grid grid-cols-1 xs:grid-cols-3 gap-3">
        {[1, 2, 3].map((phase) => {
          const { label, tone } = PHASE_CARD_META[phase]
          const { done, total } = phaseStats[phase]
          const pct = total > 0 ? Math.round((done / total) * 100) : 0
          return (
            <div
              key={phase}
              className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-3 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
                  // Phase {phase}
                </span>
                <span className="font-black text-ink dark:text-paper text-sm">
                  {done}/{total}
                </span>
              </div>
              <p className="font-black text-ink dark:text-paper text-sm leading-tight">{label}</p>
              <ProgressBar value={pct} size="sm" tone={tone} />
            </div>
          )
        })}
      </section>

      {[1, 2, 3].some((p) => phaseGoals[p].length > 0) && (
        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
            // Was du am Ende jeder Phase kannst
          </h2>
          {[1, 2, 3].map((phase) => {
            const goals = phaseGoals[phase]
            if (goals.length === 0) return null
            const visible = goals.slice(0, PHASE_GOAL_LIMIT)
            const hidden = goals.length - visible.length
            const { label } = PHASE_CARD_META[phase]
            return (
              <div
                key={phase}
                className="bg-lemon-light border-2 border-ink dark:border-lemon-dark rounded-retro shadow-hard-sm p-3.5"
              >
                <p className="font-mono text-[10px] font-black text-ink dark:text-lemon uppercase tracking-widest mb-2">
                  // Lernziele — {label}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {visible.map((g, i) => (
                    <li key={i} className="text-ink text-sm flex items-start gap-2">
                      <span className="text-primary-700 dark:text-primary-300 flex-shrink-0 mt-0.5 font-mono font-black">→</span>
                      <span>{g}</span>
                    </li>
                  ))}
                  {hidden > 0 && (
                    <li className="text-ink-soft text-xs font-mono">… +{hidden} weitere</li>
                  )}
                </ul>
              </div>
            )
          })}
        </section>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
          // Phasen &amp; Fächer
        </h2>
        {CURRICULUM_PHASES.map((phase) => (
          <article
            key={phase.id}
            className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-3"
          >
            <header>
              <p className="font-black text-ink dark:text-paper text-base leading-tight">{phase.label}</p>
              <p className="text-ink-soft dark:text-surface-300 text-xs mt-0.5">{phase.subtitle}</p>
              <p className="text-ink dark:text-paper text-sm mt-2">{phase.description}</p>
            </header>
            <ul className="flex flex-col gap-2">
              {phase.subjects.map((s, i) => (
                <li key={i} className="border-l-4 border-primary-600 pl-3 py-1">
                  <p className="font-black text-ink dark:text-paper text-sm">{s.subject}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {s.topicIds.map((tid) => {
                      const t = getTopic(tid)
                      if (!t) {
                        return (
                          <span key={tid} className="text-ink-soft text-xs font-mono">
                            {tid} (fehlt)
                          </span>
                        )
                      }
                      return (
                        <Link
                          key={tid}
                          to={`/topics/${tid}`}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded border-2 border-ink bg-lemon text-ink text-xs font-black font-mono shadow-hard-sm retro-press tap-highlight-none"
                        >
                          {t.title}
                        </Link>
                      )
                    })}
                  </div>
                  {s.hint && (
                    <p className="text-ink-soft dark:text-surface-300 text-xs mt-1 italic">{s.hint}</p>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
          // Pro Thema: Lernpfad
        </h2>
        <p className="text-ink-soft dark:text-surface-300 text-xs">
          Detaillierte Reihenfolge, Pflichtkompetenzen, häufige Fehler und Prüfungsfokus —
          mindestens {MIN_EXERCISES_PER_LESSON} Aufgaben pro Lesson (nach oben kein Limit, mehr ist besser).
        </p>
        {Object.entries(TOPIC_GUIDES).map(([tid, guide]) => {
          const topic = getTopic(tid)
          if (!topic) return null
          return (
            <details
              key={tid}
              className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-3 group"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  <p className="font-black text-ink dark:text-paper text-sm">{topic.title}</p>
                  <p className="text-ink-soft dark:text-surface-300 text-xs">{guide.summary}</p>
                </div>
                <span className="font-mono text-xs text-ink-soft group-open:rotate-90 transition-transform">▸</span>
              </summary>
              <div className="mt-3 flex flex-col gap-3 text-sm text-ink dark:text-paper">
                {guide.whyItMatters && (
                  <p className="italic text-ink-soft dark:text-surface-300">{guide.whyItMatters}</p>
                )}
                {guide.roadmap && (
                  <div>
                    <p className="font-black text-xs uppercase tracking-wider mb-1.5">Empfohlene Reihenfolge</p>
                    <ol className="flex flex-col gap-1.5 list-decimal list-inside">
                      {guide.roadmap.map((r, i) => {
                        const unit = (topic.units ?? []).find((u) => u.id === r.unitId)
                        return (
                          <li key={i} className="text-sm">
                            <span className="font-bold">{unit?.title ?? r.unitId}:</span>{' '}
                            <span className="text-ink-soft dark:text-surface-300">{r.focus}</span>
                          </li>
                        )
                      })}
                    </ol>
                  </div>
                )}
                {guide.mustKnow && (
                  <div>
                    <p className="font-black text-xs uppercase tracking-wider mb-1.5">Das musst du können</p>
                    <ul className="flex flex-col gap-1 list-disc list-inside">
                      {guide.mustKnow.map((m, i) => (
                        <li key={i} className="text-sm">{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {guide.commonMistakes && (
                  <div>
                    <p className="font-black text-xs uppercase tracking-wider mb-1.5 text-red-700 dark:text-red-300">Typische Fehler</p>
                    <ul className="flex flex-col gap-1 list-disc list-inside">
                      {guide.commonMistakes.map((m, i) => (
                        <li key={i} className="text-sm">{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {guide.examFocus && (
                  <div>
                    <p className="font-black text-xs uppercase tracking-wider mb-1.5 text-primary-700 dark:text-primary-300">Klausur-Fokus</p>
                    <ul className="flex flex-col gap-1 list-disc list-inside">
                      {guide.examFocus.map((m, i) => (
                        <li key={i} className="text-sm">{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {guide.studyTips && (
                  <div>
                    <p className="font-black text-xs uppercase tracking-wider mb-1.5 text-green-700 dark:text-green-300">Lern-Tipps</p>
                    <ul className="flex flex-col gap-1 list-disc list-inside">
                      {guide.studyTips.map((m, i) => (
                        <li key={i} className="text-sm">{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link
                  to={`/topics/${tid}`}
                  className="inline-flex self-start items-center gap-1 px-3 py-1 rounded border-2 border-ink bg-primary-600 text-white text-xs font-black font-mono shadow-hard-sm retro-press tap-highlight-none"
                >
                  → Zum Thema
                </Link>
              </div>
            </details>
          )
        })}
      </section>

      {PLANNED_TOPICS.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
            // Geplante Themen
          </h2>
          <p className="text-ink-soft dark:text-surface-300 text-xs">
            Fächer aus dem TU-Wien-Maschinenbau-Bachelor, die das Curriculum ergänzen würden.
            Noch nicht in der App enthalten.
          </p>
          {PLANNED_TOPICS.map((p) => (
            <article
              key={p.id}
              className="bg-surface-100 dark:bg-surface-800 border-2 border-dashed border-ink rounded-retro p-3"
            >
              <div className="flex items-center justify-between">
                <p className="font-black text-ink dark:text-paper text-sm">{p.title}</p>
                <span className="font-mono text-[10px] font-black text-ink-soft uppercase">
                  Phase {p.phase}
                </span>
              </div>
              <p className="text-ink-soft dark:text-surface-300 text-xs mt-1">{p.reason}</p>
              <p className="text-ink dark:text-paper text-xs mt-1.5 font-mono">
                Geplant: {p.plannedUnits.join(' · ')}
              </p>
            </article>
          ))}
        </section>
      )}

      <section className="flex flex-col gap-3">
        <h2 className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
          // Lern- &amp; Prüfungstechnik
        </h2>
        {CURRICULUM_TIPS.map((group) => (
          <article
            key={group.title}
            className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard-sm p-3.5"
          >
            <p className="font-black text-ink dark:text-paper text-sm mb-2">{group.title}</p>
            <ul className="flex flex-col gap-1.5">
              {group.items.map((item, i) => (
                <li key={i} className="text-ink dark:text-paper text-sm flex items-start gap-2">
                  <span className="text-primary-700 dark:text-primary-300 flex-shrink-0 mt-0.5 font-mono font-black">→</span>
                  <MarkdownContent className="flex-1 prose-p:my-0">{item}</MarkdownContent>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}
