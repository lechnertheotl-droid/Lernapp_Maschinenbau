import { useMemo } from 'react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { MarkdownContent } from '@/components/lesson/MarkdownContent'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import { getTopicMeta } from '@/utils/topicGraph'
import lehrplanMd from '@/content/lehrplan/tu-wien-maschinenbau.md?raw'

// Phasen-Zuordnung (aus topicGraph.studienbeginPriority abgeleitet).
// `null` = Vertiefung (Phase 3).
function phaseOf(topicId) {
  const priority = getTopicMeta(topicId).studienbeginPriority
  if (priority === 1) return 1
  if (priority === 2) return 2
  return 3
}

const PHASE_META = {
  1: { label: '1. Semester', tone: 'primary' },
  2: { label: '2. Semester', tone: 'lemon' },
  3: { label: 'Vertiefung',  tone: 'green' },
}

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
          Empfohlene Reihenfolge vom Studienbeginn bis zur Vertiefung. Alles optional —
          die App blockiert keine Inhalte.
        </p>
      </header>

      <section className="grid grid-cols-1 xs:grid-cols-3 gap-3">
        {[1, 2, 3].map((phase) => {
          const { label, tone } = PHASE_META[phase]
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

      <article className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-5">
        <MarkdownContent className="text-ink dark:text-paper">{lehrplanMd}</MarkdownContent>
      </article>
    </div>
  )
}
