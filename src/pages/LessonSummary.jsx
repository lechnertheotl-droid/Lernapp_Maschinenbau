import { useParams, useNavigate, Link } from 'react-router-dom'
import { getLesson, getTopic } from '@/content/index'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { NotFound } from '@/components/NotFound'
import { MarkdownContent } from '@/components/lesson/MarkdownContent'
import { FormelBlock } from '@/components/lesson/FormelBlock'
import { LessonMetaBadges } from '@/components/ui/LessonMetaBadges'
import { getLessonDifficulty } from '@/utils/lessonMeta'
import { Button } from '@/components/ui/Button'

export function LessonSummary() {
  const { topicId, lessonId } = useParams()
  const navigate = useNavigate()
  const lesson = getLesson(topicId, lessonId)
  const topic  = getTopic(topicId)

  if (!lesson || !topic) {
    return (
      <NotFound
        title="Lektion nicht gefunden"
        message="Zusammenfassung konnte nicht erstellt werden."
        primaryTo={`/topics/${topicId ?? ''}`}
        primaryLabel="Zurück zum Thema"
      />
    )
  }

  const unit = topic.units?.find((u) => u.lessons?.some((l) => l.id === lessonId)) ?? {}
  const difficulty = getLessonDifficulty(topic, unit, lesson)

  const formalSteps = (lesson.steps ?? []).filter(
    (s) => s.type === 'explanation-formal'
  )

  return (
    <div className="max-w-xl mx-auto px-4 py-5 flex flex-col gap-5 min-h-[100dvh]">
      <Breadcrumbs items={[
        { label: 'Themen', to: '/topics' },
        { label: topic.title, to: `/topics/${topicId}` },
        { label: lesson.title, to: `/topics/${topicId}/${lessonId}` },
        { label: 'Zusammenfassung' },
      ]} />

      <header className="border-2 border-ink rounded-retro bg-white dark:bg-surface-800 shadow-hard p-4 flex flex-col gap-3">
        <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest">
          // Zusammenfassung
        </p>
        <h1 className="font-black text-ink dark:text-paper text-xl leading-tight">
          {lesson.title}
        </h1>
        <LessonMetaBadges
          minutes={lesson.estimatedMinutes}
          difficulty={difficulty}
        />
      </header>

      {lesson.learningGoals?.length > 0 && (
        <section className="border-2 border-ink rounded-retro bg-lemon-light shadow-hard-sm p-4">
          <p className="font-mono text-[10px] font-black text-ink uppercase tracking-widest mb-2">
            // Lernziele
          </p>
          <ul className="flex flex-col gap-1.5">
            {lesson.learningGoals.map((g, i) => (
              <li key={i} className="text-ink text-sm flex items-start gap-2">
                <span className="text-primary-700 flex-shrink-0 mt-0.5 font-mono font-black">→</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {formalSteps.length === 0 ? (
        <p className="text-ink-soft dark:text-surface-300 text-sm italic">
          Diese Lektion enthält keine formelzentrierten Abschnitte zum Zusammenfassen.
        </p>
      ) : (
        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
            // Kernformeln
          </h2>
          {formalSteps.map((step) => (
            <FormelBlock key={step.id} title={step.title} priority={step.priority ?? 'wichtig'}>
              <MarkdownContent className="text-ink dark:text-paper">{step.content}</MarkdownContent>
            </FormelBlock>
          ))}
        </section>
      )}

      <div className="flex flex-col sm:flex-row gap-2 pt-2">
        <Button
          size="lg"
          variant="dark"
          className="flex-1"
          onClick={() => navigate(`/topics/${topicId}/${lessonId}`)}
        >
          Zur Lektion
        </Button>
        <Link to={`/topics/${topicId}`} className="flex-1">
          <Button size="lg" variant="secondary" fullWidth>
            Zum Thema
          </Button>
        </Link>
      </div>
    </div>
  )
}
