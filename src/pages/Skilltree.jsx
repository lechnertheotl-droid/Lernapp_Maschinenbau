import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { TopicNode } from '@/components/skilltree/TopicNode'
import {
  getTopicMeta,
  sortTopicsByOrder,
  computeTopicStatus,
  isStudienbeginTopic,
} from '@/utils/topicGraph'

const CATEGORY_LABEL = {
  math: 'Mathematik',
  engineering: 'Ingenieurwissenschaften',
  programming: 'Programmierung',
}

export function Skilltree() {
  const state    = useAppState()
  const navigate = useNavigate()
  const [studienbeginOnly, setStudienbeginOnly] = useState(false)
  const allTopics = getAllTopics()
  const topics    = studienbeginOnly ? allTopics.filter((t) => isStudienbeginTopic(t.id)) : allTopics

  // Compute completion ratio per topic
  const completionByTopic = Object.fromEntries(
    topics.map((topic) => {
      const total = getAllLessons(topic.id).length
      const done = state.progress.topicProgress[topic.id]?.completedLessons?.length ?? 0
      return [topic.id, total > 0 ? done / total : 0]
    })
  )

  // Compute status per topic
  const statusByTopic = Object.fromEntries(
    topics.map((topic) => {
      const ratio = completionByTopic[topic.id] ?? 0
      const prereqIds = getTopicMeta(topic.id).prerequisiteTopics
      const prereqAllComplete = prereqIds.every((pid) => (completionByTopic[pid] ?? 0) >= 1)
      return [topic.id, computeTopicStatus(topic.id, ratio, prereqAllComplete)]
    })
  )

  // Group by category, sorted by order
  const byCategory = { math: [], engineering: [], programming: [] }
  for (const topic of sortTopicsByOrder(topics)) {
    const cat = getTopicMeta(topic.id).category
    byCategory[cat].push(topic)
  }

  const titleById = Object.fromEntries(topics.map((t) => [t.id, t.title]))

  return (
    <div className="max-w-3xl mx-auto px-4 py-5 flex flex-col gap-6">
      <Breadcrumbs items={[{ label: 'Start', to: '/' }, { label: 'Lernpfad' }]} />

      <header className="flex flex-col gap-3">
        <div>
          <h1 className="font-black text-ink dark:text-paper text-2xl leading-tight">Lernpfad</h1>
          <p className="text-ink-soft dark:text-surface-300 text-sm mt-1">
            Empfohlene Reihenfolge nach Voraussetzungen. Gesperrte Themen werden freigeschaltet,
            wenn alle Voraussetzungen abgeschlossen sind.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setStudienbeginOnly(false)}
            className={`font-mono text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-retro border-2 ${
              !studienbeginOnly
                ? 'bg-ink text-paper border-ink'
                : 'bg-white dark:bg-surface-800 text-ink dark:text-paper border-ink dark:border-surface-600'
            }`}
            aria-pressed={!studienbeginOnly}
          >
            Alle Themen
          </button>
          <button
            type="button"
            onClick={() => setStudienbeginOnly(true)}
            className={`font-mono text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-retro border-2 ${
              studienbeginOnly
                ? 'bg-ink text-paper border-ink'
                : 'bg-white dark:bg-surface-800 text-ink dark:text-paper border-ink dark:border-surface-600'
            }`}
            aria-pressed={studienbeginOnly}
          >
            Nur Studienbeginn (1./2. Sem)
          </button>
        </div>
      </header>

      {(['math', 'engineering', 'programming']).map((cat) => {
        const list = byCategory[cat]
        if (list.length === 0) return null
        return (
          <section key={cat} className="flex flex-col gap-3">
            <h2 className="font-mono text-[11px] font-black text-ink dark:text-paper uppercase tracking-widest">
              // {CATEGORY_LABEL[cat]}
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
              {list.map((topic) => {
                const status = statusByTopic[topic.id]
                const ratio = completionByTopic[topic.id] ?? 0
                const prereqIds = getTopicMeta(topic.id).prerequisiteTopics
                const prereqTitles = prereqIds.map((id) => titleById[id] ?? id)
                return (
                  <TopicNode
                    key={topic.id}
                    topic={topic}
                    status={status}
                    progressPct={Math.round(ratio * 100)}
                    prerequisiteTitles={status === 'locked' ? prereqTitles : []}
                    onClick={() => {
                      if (status === 'locked') return
                      navigate(`/topics/${topic.id}`)
                    }}
                  />
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
