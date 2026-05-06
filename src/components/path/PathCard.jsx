import { useEffect, useMemo, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { StreakBadge } from '@/components/ui/StreakBadge'
import { LevelIndicator } from '@/components/gamification/LevelIndicator'
import { useAppState } from '@/context/AppContext'
import { cn } from '@/utils/cn'

function findTopic(topics, topicId) {
  return topics.find((t) => t.id === topicId) ?? null
}

// Etappen aus Steps in Topic-Reihenfolge ihres ersten Vorkommens.
// Pro Etappe: total/done, ob current (= currentIndex liegt darin).
function buildStages(steps, doneFlags, currentIndex) {
  const map = new Map()
  steps.forEach((step, i) => {
    const existing = map.get(step.topicId)
    if (!existing) {
      map.set(step.topicId, {
        topicId: step.topicId,
        topicTitle: step.topicTitle,
        total: 1,
        done: doneFlags[i] ? 1 : 0,
        firstStepIndex: i,
        lastStepIndex: i,
        isCurrent: i === currentIndex,
        phase: step.phase,
      })
    } else {
      existing.total++
      if (doneFlags[i]) existing.done++
      existing.lastStepIndex = i
      if (i === currentIndex) existing.isCurrent = true
    }
  })
  const stages = Array.from(map.values())
  // Markiere Etappen als "complete" wenn alle Steps darin done sind und keine current
  for (const s of stages) {
    s.isComplete = s.done >= s.total
  }
  return stages
}

// Kurzform für Topic-Titel auf engen Mobile-Screens.
function shortTitle(t) {
  if (!t) return ''
  // Erstes Wort nehmen, max 12 Zeichen
  const w = t.split(/\s|·|—|–/)[0]
  return w.length > 12 ? w.slice(0, 11) + '…' : w
}

export function PathCard({ topics, pathProgress, streak }) {
  const appState = useAppState()
  const xp = appState.gamification.xp
  const freezes = appState.gamification.streakFreezes
  const navigate = useNavigate()
  const trackRef = useRef(null)
  const currentNodeRef = useRef(null)

  const { steps, currentIndex, doneCount, totalCount, doneFlags } = pathProgress
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0
  const current = currentIndex >= 0 ? steps[currentIndex] : null
  const currentTopic = current ? findTopic(topics, current.topicId) : null

  const showStreak = (streak?.current ?? 0) > 0

  const stages = useMemo(
    () => buildStages(steps, doneFlags, currentIndex),
    [steps, doneFlags, currentIndex],
  )

  // Auto-scroll zur aktuellen Etappe (oder der ersten unerledigten).
  useEffect(() => {
    const node = currentNodeRef.current
    const track = trackRef.current
    if (!node || !track) return
    // scrollIntoView block:'nearest' verhindert Sprünge in der Page-Höhe
    node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [currentIndex])

  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard overflow-hidden animate-fade-in">

      {/* Header: nur Level + Streak, eine Zeile, ohne Label-Text */}
      <div className="px-4 pt-3 pb-3 flex items-center justify-between gap-2">
        <LevelIndicator xp={xp} size="md" href="/profil" />
        {showStreak && (
          <Link to="/erfolge" aria-label="Erfolge ansehen">
            <StreakBadge current={streak.current} longest={streak.longest} freezes={freezes} size="sm" />
          </Link>
        )}
      </div>

      {/* Etappen-Track */}
      {stages.length > 0 && (
        <div className="relative border-t-2 border-ink bg-paper/40 dark:bg-surface-900/40 py-4 pl-4 pr-2">
          {/* Track-Linie hinter den Knoten — bewusst dezent gestrichelt */}
          <div
            aria-hidden
            className="absolute left-4 right-4 border-t-2 border-dashed border-ink/30 pointer-events-none"
            style={{ top: 'calc(1rem + 22px)' }}
          />
          <div
            ref={trackRef}
            className="relative flex gap-3 overflow-x-auto snap-x scroll-px-4 pb-1 -mb-1"
            style={{ scrollbarWidth: 'none' }}
          >
            <style>{`.path-track::-webkit-scrollbar { display: none; }`}</style>
            {stages.map((stage) => {
              const topic = findTopic(topics, stage.topicId)
              const isCurrent = stage.isCurrent
              const isDone = stage.isComplete
              return (
                <button
                  key={stage.topicId}
                  type="button"
                  ref={isCurrent ? currentNodeRef : null}
                  onClick={() => navigate(`/topics/${stage.topicId}`)}
                  aria-label={`Etappe ${stage.topicTitle}, ${stage.done} von ${stage.total} abgeschlossen${isCurrent ? ' (aktuell)' : ''}`}
                  className="group relative flex flex-col items-center gap-1.5 snap-center flex-shrink-0 w-[68px] tap-highlight-none"
                >
                  {/* Knoten */}
                  <span
                    className={cn(
                      'relative w-11 h-11 rounded-retro border-2 border-ink flex items-center justify-center transition-all',
                      isDone && !isCurrent && 'bg-lemon shadow-hard-sm',
                      isCurrent && 'bg-lemon shadow-hard',
                      !isDone && !isCurrent && 'bg-white dark:bg-surface-800 shadow-hard-sm opacity-80 group-hover:opacity-100',
                    )}
                  >
                    {/* Topic-Icon, oder Häkchen wenn done und nicht current */}
                    {isDone && !isCurrent ? (
                      <span aria-hidden className="font-mono font-black text-ink text-lg leading-none">✓</span>
                    ) : (
                      <span className="text-ink dark:text-paper [&>*]:!w-6 [&>*]:!h-6">
                        <TopicIcon topic={topic} size="sm" />
                      </span>
                    )}
                    {/* Mini-Progress-Pill rechts unten am Knoten */}
                    {!isCurrent && stage.total > 1 && (
                      <span
                        aria-hidden
                        className={cn(
                          'absolute -bottom-1 -right-1 px-1 py-px rounded-sm border border-ink font-mono text-[8px] font-black tabular-nums leading-none',
                          isDone ? 'bg-ink text-lemon' : 'bg-white dark:bg-surface-700 text-ink dark:text-paper',
                        )}
                      >
                        {stage.done}/{stage.total}
                      </span>
                    )}
                  </span>
                  {/* Titel + Progress unter dem Knoten */}
                  <span
                    className={cn(
                      'font-mono text-[9px] uppercase tracking-wider truncate max-w-[72px] text-center leading-tight',
                      isCurrent ? 'text-ink dark:text-paper font-black' : 'text-ink-soft dark:text-surface-400',
                    )}
                  >
                    {shortTitle(stage.topicTitle)}
                  </span>
                  {isCurrent && (
                    <span className="font-mono text-[9px] tabular-nums text-ink dark:text-paper font-black leading-none">
                      {stage.done}/{stage.total}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Aktueller Schritt: kompakte Anzeige unter dem Track */}
      {current ? (
        <div className="px-4 pt-3 pb-3 flex items-start gap-3 border-t-2 border-ink">
          <TopicIcon topic={currentTopic} size="md" />
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-mono text-ink-soft dark:text-surface-300 uppercase tracking-widest">
              {currentTopic?.title}
            </p>
            <p className="font-black text-ink dark:text-paper text-sm leading-snug mt-0.5">
              {current.kind === 'lesson'
                ? current.lessonTitle
                : `Prüfungsübung — ${current.practiceCount} Aufgabe${current.practiceCount === 1 ? '' : 'n'}`}
            </p>
            <ProgressBar value={pct} size="sm" tone="primary" className="mt-2" />
            <p className="num text-[10px] text-ink-soft dark:text-surface-100 mt-1 tabular-nums">
              {doneCount}/{totalCount} Schritte · {pct}%
            </p>
          </div>
        </div>
      ) : (
        <div className="px-4 pt-3 pb-3 flex items-center gap-3 border-t-2 border-ink bg-green-50 dark:bg-green-900/20">
          <span className="text-2xl flex-shrink-0" aria-hidden>🎉</span>
          <div className="flex-1 min-w-0">
            <p className="font-black text-ink dark:text-paper text-sm leading-snug">Pfad abgeschlossen</p>
            <p className="text-ink-soft dark:text-surface-100 text-xs mt-0.5">
              Alle {totalCount} Schritte aus Lektionen und Prüfungsübungen geschafft.
            </p>
          </div>
        </div>
      )}

      {/* Primärer CTA */}
      {current && (
        <button
          onClick={() => {
            if (current.kind === 'lesson') navigate(`/topics/${current.topicId}/${current.lessonId}`)
            else navigate(`/üben?topic=${encodeURIComponent(current.topicId)}`)
          }}
          className="w-full py-3 bg-primary-700 text-lemon font-mono font-black text-xs uppercase tracking-widest hover:bg-primary-800 transition-colors tap-highlight-none border-t-2 border-ink"
        >
          {current.kind === 'lesson' ? 'Weiter lernen →' : 'Prüfungsübung starten →'}
        </button>
      )}

      {/* Sekundär: Pfad-Übersicht */}
      <Link
        to="/pfad"
        className="block w-full py-2.5 text-center bg-white dark:bg-surface-800 text-ink dark:text-paper font-mono font-bold text-[11px] uppercase tracking-widest hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors tap-highlight-none border-t border-surface-200 dark:border-surface-700"
      >
        Ganzen Pfad ansehen →
      </Link>
    </div>
  )
}
