import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getAllTopics, getAllLessons } from '@/content/index'
import { getDueItems } from '@/utils/reviewScheduler'
import { computeTopicProgress } from '@/utils/progressLogic'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { StreakBadge } from '@/components/ui/StreakBadge'
import {
  getTopicMeta,
  computeTopicStatus,
  nextRecommendedTopic,
} from '@/utils/topicGraph'
import { LEVEL_HEADINGS, groupTopicsByLevel } from '@/utils/topicLevels'

function greeting(name) {
  const h = new Date().getHours()
  if (h < 5)  return `Noch wach, ${name}?`
  if (h < 12) return `Guten Morgen, ${name}!`
  if (h < 18) return `Hallo, ${name}!`
  return `Guten Abend, ${name}!`
}

const DIFF_LABEL = ['', 'Einsteiger', 'Grundlagen', 'Mittel', 'Fortgeschr.', 'Experte']

export function Dashboard() {
  const state    = useAppState()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const topics   = getAllTopics()
  const [showReset, setShowReset] = useState(false)
  const due      = getDueItems(state.review.queue, Date.now())

  const lastActive = Object.entries(state.progress.topicProgress)
    .map(([topicId, tp]) => ({ topicId, ...tp }))
    .filter((tp) => tp.currentLessonId)
    .at(0)

  const totalCompleted = Object.values(state.progress.topicProgress)
    .flatMap((tp) => tp.completedLessons ?? []).length

  // Compute recommended next topic from skill-tree
  const completionByTopic = Object.fromEntries(
    topics.map((topic) => {
      const total = getAllLessons(topic.id).length
      const done = state.progress.topicProgress[topic.id]?.completedLessons?.length ?? 0
      return [topic.id, total > 0 ? done / total : 0]
    })
  )
  const statusByTopic = Object.fromEntries(
    topics.map((topic) => {
      const ratio = completionByTopic[topic.id] ?? 0
      const prereqs = getTopicMeta(topic.id).prerequisiteTopics
      const prereqDone = prereqs.every((pid) => (completionByTopic[pid] ?? 0) >= 1)
      return [topic.id, computeTopicStatus(topic.id, ratio, prereqDone)]
    })
  )
  const recommendedId = lastActive
    ? null
    : nextRecommendedTopic(topics.map((t) => t.id), statusByTopic)
  const recommendedTopic = recommendedId ? topics.find((t) => t.id === recommendedId) : null

  return (
    <div className="max-w-2xl mx-auto px-4 pt-6 pb-2 flex flex-col gap-5">

      {/* ── Greeting bar ─────────────────────────────────────────── */}
      <div className="bg-ink border-2 border-ink rounded-retro shadow-hard-lg px-5 py-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-surface-500 font-mono text-xs uppercase tracking-widest mb-0.5">
            {new Date().toLocaleDateString('de-AT', { weekday: 'short', day: 'numeric', month: 'short' })}
          </p>
          <h1 className="text-xl font-black text-white leading-tight">
            {greeting(state.user.name ?? 'du')}
          </h1>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {(state.streak?.current ?? 0) > 0 && (
            <Link to="/erfolge" aria-label="Erfolge ansehen">
              <StreakBadge current={state.streak.current} longest={state.streak.longest} size="md" />
            </Link>
          )}
          {totalCompleted > 0 && (
            <Link
              to="/erfolge"
              className="flex flex-col items-center bg-lemon border-2 border-lemon-dark rounded-retro shadow-hard-lemon px-3 py-2 min-w-[56px] retro-press"
              aria-label={`${totalCompleted} Lektionen abgeschlossen — Erfolge ansehen`}
            >
              <span className="num text-xl font-black text-ink leading-none">{totalCompleted}</span>
              <span className="font-mono text-[9px] font-bold text-ink-soft uppercase tracking-wide mt-0.5">Lekt.</span>
            </Link>
          )}
          <Link
            to="/settings"
            aria-label="Einstellungen"
            title="Einstellungen"
            className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-surface-600 text-lemon hover:border-lemon font-mono text-base transition-colors"
          >
            ⚙
          </Link>
        </div>
      </div>

      {/* ── Review CTA ───────────────────────────────────────────── */}
      {due.length > 0 && (
        <button
          onClick={() => navigate('/review')}
          className="w-full text-left bg-lemon border-2 border-lemon-dark rounded-retro shadow-hard-lemon p-4 flex items-center gap-3 retro-press tap-highlight-none"
        >
          <span className="text-2xl flex-shrink-0 font-mono font-black">↻</span>
          <div className="flex-1 min-w-0">
            <p className="font-black text-ink text-sm">
              {due.length} Wiederholung{due.length > 1 ? 'en' : ''} fällig
            </p>
            <p className="text-ink-soft text-xs font-mono mt-0.5">Jetzt Wissen festigen →</p>
          </div>
          <span className="font-mono font-black text-ink text-lg">›</span>
        </button>
      )}

      {/* ── Continue card ────────────────────────────────────────── */}
      {lastActive && (() => {
        const topic = topics.find((t) => t.id === lastActive.topicId)
        const tp    = state.progress.topicProgress[lastActive.topicId]
        const total = getAllLessons(lastActive.topicId).length
        const pct   = computeTopicProgress(tp?.completedLessons ?? [], total)
        return (
          <div className="bg-white border-2 border-ink rounded-retro shadow-hard overflow-hidden animate-fade-in">
            <div className="px-4 pt-4 pb-3 flex items-start gap-3">
              <TopicIcon topic={topic} size="md" />
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] font-bold text-primary-700 uppercase tracking-widest mb-1">
                  // Weitermachen
                </p>
                <p className="font-black text-ink text-sm leading-snug">{topic?.title}</p>
                <div className="mt-2.5 h-3 bg-surface-100 border border-ink rounded-sm overflow-hidden">
                  <div className="h-full bg-primary-700 transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
                <p className="num text-[11px] text-ink-soft mt-1">
                  {pct}% · {tp?.completedLessons?.length ?? 0}/{total} Lektionen
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate(`/topics/${lastActive.topicId}/${lastActive.currentLessonId}`)}
              className="w-full py-3 bg-primary-700 text-lemon font-mono font-black text-xs uppercase tracking-widest hover:bg-primary-800 transition-colors tap-highlight-none border-t-2 border-ink"
            >
              Weiter lernen →
            </button>
          </div>
        )
      })()}

      {/* ── Recommended next (when no active lesson) ─────────────── */}
      {!lastActive && recommendedTopic && (
        <button
          onClick={() => navigate(`/topics/${recommendedTopic.id}`)}
          className="w-full text-left bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex items-center gap-3 retro-press tap-highlight-none animate-fade-in"
        >
          <TopicIcon topic={recommendedTopic} size="md" />
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-0.5">
              // Empfohlener Start
            </p>
            <p className="font-black text-ink dark:text-paper text-sm leading-snug line-clamp-2">
              {recommendedTopic.title}
            </p>
            <p className="text-ink-soft dark:text-surface-400 text-[11px] mt-0.5 line-clamp-1">
              {recommendedTopic.description}
            </p>
          </div>
          <span className="font-mono font-black text-ink dark:text-paper text-lg">›</span>
        </button>
      )}

      {/* ── Topics grid ──────────────────────────────────────────── */}
      <div>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-mono font-black text-[11px] text-ink-soft uppercase tracking-widest">
            // Themenbereiche
          </h2>
          <div className="flex gap-3">
            <Link
              to="/lernpfad"
              className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-wider hover:underline"
            >
              Lernpfad →
            </Link>
            <Link
              to="/formelsammlung"
              className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-wider hover:underline"
            >
              Formeln →
            </Link>
          </div>
        </div>
        {(() => {
          let globalIndex = 0
          return (
            <div className="flex flex-col gap-4">
              {groupTopicsByLevel(topics).map(([level, group]) => (
                <section key={level}>
                  <p className="font-mono text-[10px] font-black text-primary-700 dark:text-lemon uppercase tracking-widest mb-2 pb-1 border-b-2 border-primary-200 dark:border-surface-700">
                    {LEVEL_HEADINGS[level]}
                  </p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                    {group.map((topic) => {
                      const tp      = state.progress.topicProgress[topic.id]
                      const total   = getAllLessons(topic.id).length
                      const pct     = tp ? computeTopicProgress(tp.completedLessons, total) : 0
                      const started = (tp?.completedLessons?.length ?? 0) > 0
                      const i       = globalIndex++

                      return (
                        <button
                          key={topic.id}
                          onClick={() => navigate(`/topics/${topic.id}`)}
                          className="text-left bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-3.5 flex flex-col gap-2.5 tap-highlight-none retro-press hover:bg-surface-50 dark:hover:bg-surface-700 animate-pop"
                          style={{ animationDelay: `${i * 60}ms` }}
                        >
                          <div className="flex items-start justify-between">
                            <TopicIcon topic={topic} size="sm" />
                            {started && (
                              <span className="num text-[10px] font-black text-primary-700 bg-primary-50 border border-primary-200 rounded px-1.5 py-0.5">
                                {pct}%
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="font-black text-ink dark:text-paper text-sm leading-tight line-clamp-2 break-words">{topic.title}</p>
                            <p className="font-mono text-[10px] text-ink-soft dark:text-surface-300 mt-0.5 uppercase tracking-wider">
                              {DIFF_LABEL[topic.difficulty] ?? ''} · {total} Lekt.
                            </p>
                          </div>
                          <div className="h-2 bg-surface-100 dark:bg-surface-700 border border-ink rounded-sm overflow-hidden">
                            <div className="h-full bg-primary-700 transition-all duration-500" style={{ width: `${pct}%` }} />
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>
          )
        })()}
      </div>

      {/* ── Reset progress ───────────────────────────────────────── */}
      <div className="mt-2 mb-6">
        {!showReset ? (
          <button
            onClick={() => setShowReset(true)}
            className="w-full text-center font-mono text-xs text-ink-soft hover:text-red-600 transition-colors py-2"
          >
            Fortschritt zurücksetzen…
          </button>
        ) : (
          <div className="bg-red-50 border-2 border-red-600 rounded-retro p-4 shadow-hard-red animate-pop">
            <p className="font-black text-red-700 text-sm mb-1">Alles zurücksetzen?</p>
            <p className="text-xs text-red-600/80 mb-3">
              Alle Lektionen, Aufgaben und der Wiederholungsplan werden gelöscht. Dein Name bleibt erhalten.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => { dispatch({ type: ACTIONS.RESET_PROGRESS }); setShowReset(false) }}
                className="flex-1 py-2.5 bg-red-600 text-white font-mono font-black text-xs uppercase tracking-wider rounded-retro border-2 border-red-800 shadow-hard-red retro-press"
              >
                Ja, zurücksetzen
              </button>
              <button
                onClick={() => setShowReset(false)}
                className="flex-1 py-2.5 bg-white text-ink font-mono font-black text-xs uppercase tracking-wider rounded-retro border-2 border-ink shadow-hard-sm retro-press"
              >
                Abbrechen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
