import { useParams, useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getTopic, isExamCompleted } from '@/content/index'
import { cn } from '@/utils/cn'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { NotFound } from '@/components/NotFound'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { LessonMetaBadges } from '@/components/ui/LessonMetaBadges'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { getLessonDifficulty } from '@/utils/lessonMeta'

const STATUS_CONFIG = {
  'secure':     { icon: '✓', label: 'Sicher',     dot: 'bg-green-500',   text: 'text-green-700 dark:text-green-400'   },
  'practiced':  { icon: '●', label: 'Geübt',      dot: 'bg-blue-500',    text: 'text-blue-700 dark:text-blue-400'     },
  'understood': { icon: '◕', label: 'Verstanden', dot: 'bg-teal-500',    text: 'text-teal-700 dark:text-teal-400'     },
  'started':    { icon: '◑', label: 'Begonnen',   dot: 'bg-yellow-500',  text: 'text-yellow-700 dark:text-yellow-300' },
  'not-started':{ icon: '○', label: 'Neu',        dot: 'bg-surface-300', text: 'text-surface-500 dark:text-surface-400' },
}

export function TopicDetail() {
  const { topicId } = useParams()
  const navigate    = useNavigate()
  const state       = useAppState()
  const topic       = getTopic(topicId)

  if (!topic) return (
    <NotFound
      title="Thema nicht gefunden"
      message="Das angeforderte Thema existiert nicht oder wurde umbenannt."
      detail={topicId}
    />
  )

  const mastery          = state.mastery
  const tp               = state.progress.topicProgress[topicId]
  const completedLessons = tp?.completedLessons ?? []
  const totalLessons     = topic.units.flatMap((u) => u.lessons).length
  const pct              = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0
  const examDone         = isExamCompleted(topicId, completedLessons)

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 flex flex-col gap-5">

      {/* ── Breadcrumbs ──────────────────────────────────────────── */}
      <Breadcrumbs items={[
        { label: 'Start', to: '/' },
        { label: topic.title },
      ]} />

      {/* ── Back ─────────────────────────────────────────────────── */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1.5 text-ink-soft dark:text-surface-100 text-sm font-mono hover:text-ink dark:hover:text-paper self-start tap-highlight-none transition-colors"
      >
        ← Zurück zu allen Themen
      </button>

      {/* ── Topic header ─────────────────────────────────────────── */}
      <div className={cn('border-2 rounded-retro shadow-hard-lg overflow-hidden', examDone ? 'bg-lemon-dark border-lemon-dark' : 'bg-ink border-ink')}>
        {examDone && (
          <div className="px-5 py-2 bg-lemon text-ink font-mono font-black text-xs uppercase tracking-widest text-center border-b-2 border-lemon-dark">
            Prüfung bestanden
          </div>
        )}
        <div className="px-5 py-4 flex items-start gap-4">
          <TopicIcon topic={topic} size="lg" className="mt-0.5" />
          <div className="flex-1 min-w-0">
            <h1 className="font-black text-white text-xl leading-tight">{topic.title}</h1>
            <p className="text-surface-400 text-xs leading-snug mt-1">{topic.description}</p>
          </div>
        </div>
        {/* Progress bar */}
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-surface-500 uppercase tracking-wider">
              {completedLessons.length}/{totalLessons} Lektionen
            </span>
            <span className="num font-black text-lemon text-sm">{pct}%</span>
          </div>
          <ProgressBar value={pct} size="lg" tone="dark-lemon" />
        </div>
      </div>

      {/* ── Units & Lessons ───────────────────────────────────────── */}
      {topic.units.map((unit, ui) => {
        const isExamUnit = /prüfung/i.test(unit.title)
        const unitDone = isExamUnit && unit.lessons.every((l) => completedLessons.includes(l.id))
        return (
        <div key={unit.id}>
          {/* Unit header */}
          <div className="flex items-center gap-2.5 mb-2.5 px-0.5">
            <div className={cn('w-6 h-6 rounded-sm font-mono font-black text-xs flex items-center justify-center flex-shrink-0', unitDone ? 'bg-lemon text-ink' : 'bg-ink text-lemon')}>
              {unitDone ? '✓' : unit.order}
            </div>
            <h2 className="font-black text-ink text-sm uppercase tracking-wide">{unit.title}</h2>
            {unitDone && <span className="stamp text-lemon-dark">Bestanden</span>}
            <div className="flex-1 h-px bg-ink/20 ml-1" />
          </div>

          <div className="flex flex-col gap-2">
            {unit.lessons.map((lesson, li) => {
              const m         = mastery[lesson.id]
              const status    = m?.status ?? 'not-started'
              const cfg       = STATUS_CONFIG[status] ?? STATUS_CONFIG['not-started']
              const isCurrent = tp?.currentLessonId === lesson.id

              return (
                <button
                  key={lesson.id}
                  onClick={() => navigate(`/topics/${topicId}/${lesson.id}`)}
                  className={cn(
                    'w-full text-left flex items-center gap-3 px-4 py-3.5',
                    'border-2 rounded-retro transition-all tap-highlight-none retro-press',
                    'animate-slide-up',
                    isCurrent
                      ? 'bg-lemon border-lemon-dark shadow-hard-lemon'
                      : 'bg-white border-ink shadow-hard-sm hover:bg-surface-50',
                  )}
                  style={{ animationDelay: `${(ui * 3 + li) * 40}ms` }}
                >
                  {/* Status dot */}
                  <span className={cn('w-3 h-3 rounded-full flex-shrink-0', cfg.dot)} />

                  <div className="flex-1 min-w-0">
                    <p className={cn('font-bold text-sm leading-snug', isCurrent ? 'text-ink' : 'text-ink')}>
                      {lesson.title}
                    </p>
                    <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                      <LessonMetaBadges
                        minutes={lesson.estimatedMinutes}
                        difficulty={getLessonDifficulty(topic, unit, lesson)}
                      />
                      <span className="font-mono text-[10px] text-ink-soft uppercase tracking-wide">
                        · {lesson.steps?.length ?? 0} Schritte
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={cn('stamp', cfg.text)}>{cfg.label}</span>
                    <span className="font-mono font-black text-ink-soft">›</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )})}
    </div>
  )
}
