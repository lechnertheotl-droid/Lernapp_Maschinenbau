import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getTopic } from '@/content/index'
import {
  getPracticeTopicIds,
  getPracticeExercisesForTopic,
} from '@/content/practice/index'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { Button } from '@/components/ui/Button'
import { PracticeRunner } from '@/components/practice/PracticeRunner'

// Sortier-Reihenfolge für die Schwierigkeitsfilter-Pills.
const DIFFICULTIES = ['alle', 'klausur-einstieg', 'klausur', 'klausur-plus']
const DIFFICULTY_LABEL = {
  'alle':             'Alle',
  'klausur-einstieg': 'Einstieg',
  'klausur':          'Klausur',
  'klausur-plus':     'Plus',
}

function statusIcon(summary) {
  if (!summary)                return { char: '○', color: 'text-surface-400', label: 'offen' }
  if (summary.lastCorrect)     return { char: '✓', color: 'text-green-700 dark:text-green-400', label: 'gelöst' }
  return { char: '•', color: 'text-amber-600 dark:text-amber-300', label: 'versucht' }
}

export function PracticePage() {
  const state    = useAppState()
  const navigate = useNavigate()

  const [topicId,   setTopicId]   = useState(null)
  const [exerciseId, setExerciseId] = useState(null)
  const [difficulty, setDifficulty] = useState('alle')

  const attempts = state.practice?.attempts ?? {}

  // Nur Themen, für die Prüfungsaufgaben existieren.
  const topicEntries = useMemo(() => {
    const allTopics = getAllTopics()
    const registered = new Set(getPracticeTopicIds())
    return allTopics
      .filter((t) => registered.has(t.id))
      .map((topic) => {
        const list = getPracticeExercisesForTopic(topic.id)
        const solved = list.filter((ex) => attempts[ex.id]?.lastCorrect).length
        return { topic, count: list.length, solved }
      })
  }, [attempts])

  // ── Aktive Aufgabe ───────────────────────────────────────────
  if (topicId && exerciseId) {
    const list = getPracticeExercisesForTopic(topicId)
    const index   = list.findIndex((ex) => ex.id === exerciseId)
    const current = list[index]
    if (!current) {
      setExerciseId(null)
      return null
    }
    const hasNext = index >= 0 && index < list.length - 1

    return (
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-5">
        <button
          type="button"
          onClick={() => setExerciseId(null)}
          className="self-start font-mono text-xs font-bold text-primary-700 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-200 underline underline-offset-4 tap-highlight-none"
        >
          ← Zurück zur Aufgabenliste
        </button>

        <PracticeRunner
          exercise={current}
          onFinished={() => {}}
          onNext={() => {
            if (hasNext) setExerciseId(list[index + 1].id)
          }}
          onChooseOther={() => setExerciseId(null)}
          hasNext={hasNext}
        />
      </div>
    )
  }

  // ── Aufgabenliste eines Themas ───────────────────────────────
  if (topicId) {
    const topic = getTopic(topicId)
    const list  = getPracticeExercisesForTopic(topicId)
    const filtered = difficulty === 'alle'
      ? list
      : list.filter((ex) => ex.difficulty === difficulty)

    return (
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-5">
        <div className="bg-ink border-2 border-ink rounded-retro shadow-hard-lg px-5 py-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-surface-500 font-mono text-xs uppercase tracking-widest mb-0.5">
              // Prüfungsniveau · Üben
            </p>
            <h1 className="text-xl font-black text-white leading-tight truncate">
              {topic?.title ?? topicId}
            </h1>
            <p className="font-mono text-[10px] text-surface-400 mt-0.5">
              {list.length} Aufgabe{list.length === 1 ? '' : 'n'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setTopicId(null)}
            className="h-9 px-3 inline-flex items-center gap-1 rounded-retro border-2 border-lemon bg-ink text-lemon font-mono font-black text-xs uppercase tracking-wider hover:bg-surface-900 tap-highlight-none"
          >
            ← Themen
          </button>
        </div>

        {/* Schwierigkeits-Filter */}
        <div className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((d) => {
            const isActive = d === difficulty
            return (
              <button
                key={d}
                type="button"
                onClick={() => setDifficulty(d)}
                className={`h-8 px-3 rounded-retro border-2 font-mono text-[11px] font-black uppercase tracking-wider retro-press ${
                  isActive
                    ? 'bg-lemon border-lemon-dark text-ink shadow-hard-sm'
                    : 'bg-white dark:bg-surface-800 border-ink text-ink-soft dark:text-surface-200'
                }`}
              >
                {DIFFICULTY_LABEL[d]}
              </button>
            )
          })}
        </div>

        {/* Aufgabenkarten */}
        {filtered.length === 0 ? (
          <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-5 text-center">
            <p className="text-ink-soft dark:text-surface-200 text-sm">
              Keine Aufgaben in dieser Schwierigkeitsstufe.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3 list-none">
            {filtered.map((ex) => {
              const st = statusIcon(attempts[ex.id])
              const best = attempts[ex.id]?.bestPoints ?? 0
              return (
                <li key={ex.id}>
                  <button
                    type="button"
                    onClick={() => setExerciseId(ex.id)}
                    className="w-full text-left bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex items-start gap-3 retro-press tap-highlight-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1"
                  >
                    <span
                      className={`text-2xl leading-none font-mono font-black flex-shrink-0 ${st.color}`}
                      aria-label={st.label}
                    >
                      {st.char}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-1">
                        // {ex.difficulty.replace('-', ' ')}
                      </p>
                      <p className="font-black text-ink dark:text-paper text-sm leading-snug">
                        {ex.title}
                      </p>
                      <p className="font-mono text-[10px] text-ink-soft dark:text-surface-300 mt-1">
                        {ex.points} P · {ex.estimatedMinutes} min · {ex.subtasks.length} Teilschritte
                        {best > 0 && ` · Best: ${best}/${ex.points}`}
                      </p>
                    </div>
                    <span className="font-mono font-black text-ink dark:text-paper text-lg flex-shrink-0">›</span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }

  // ── Themenliste ──────────────────────────────────────────────
  const total = topicEntries.reduce((s, e) => s + e.count, 0)
  const solved = topicEntries.reduce((s, e) => s + e.solved, 0)

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-5">
      <div className="bg-ink border-2 border-ink rounded-retro shadow-hard-lg px-5 py-4">
        <p className="text-surface-500 font-mono text-xs uppercase tracking-widest mb-0.5">
          // Prüfungsniveau
        </p>
        <h1 className="text-xl font-black text-white leading-tight">Üben</h1>
        <p className="font-mono text-[11px] text-surface-400 mt-1">
          Klausuraufgaben im TU-Wien-Stil. {solved}/{total} gelöst.
        </p>
      </div>

      {topicEntries.length === 0 ? (
        <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-5 text-center">
          <p className="text-ink-soft dark:text-surface-200 text-sm">
            Noch keine Prüfungsaufgaben verfügbar.
          </p>
          <Button className="mt-3" variant="secondary" onClick={() => navigate('/')}>
            Zur Startseite
          </Button>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
          {topicEntries.map(({ topic, count, solved }) => (
            <li key={topic.id}>
              <button
                type="button"
                onClick={() => { setTopicId(topic.id); setDifficulty('alle') }}
                className="w-full h-full text-left bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex items-start gap-3 retro-press tap-highlight-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1"
              >
                <TopicIcon topic={topic} size="md" />
                <div className="flex-1 min-w-0">
                  <p className="font-black text-ink dark:text-paper text-sm leading-snug line-clamp-2">
                    {topic.title}
                  </p>
                  <p className="font-mono text-[10px] text-ink-soft dark:text-surface-300 mt-1">
                    {solved}/{count} gelöst · {count} Aufgabe{count === 1 ? '' : 'n'}
                  </p>
                </div>
                <span className="font-mono font-black text-ink dark:text-paper text-lg flex-shrink-0">›</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="h-4" />
    </div>
  )
}

