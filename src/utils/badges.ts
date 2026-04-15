export interface Badge {
  id: string
  title: string
  description: string
  icon: string
  earned: boolean
}

interface BadgeContext {
  completedLessonsTotal: number
  correctAnswersTotal: number
  streakLongest: number
  streakCurrent: number
  completedTopicIds: string[]
  points: number
}

export function computeBadges(ctx: BadgeContext): Badge[] {
  return [
    {
      id: 'first-lesson',
      title: 'Einsteiger',
      description: 'Erste Lektion abgeschlossen',
      icon: '🌱',
      earned: ctx.completedLessonsTotal >= 1,
    },
    {
      id: 'hundred-correct',
      title: '100 Antworten',
      description: '100 Aufgaben richtig beantwortet',
      icon: '🎯',
      earned: ctx.correctAnswersTotal >= 100,
    },
    {
      id: 'streak-7',
      title: '7-Tage-Streak',
      description: 'Sieben Tage in Folge gelernt',
      icon: '🔥',
      earned: ctx.streakLongest >= 7,
    },
    {
      id: 'streak-30',
      title: '30-Tage-Streak',
      description: 'Einen ganzen Monat am Ball',
      icon: '⚡',
      earned: ctx.streakLongest >= 30,
    },
    {
      id: 'differentialrechnung-master',
      title: 'Differentialrechnung gemeistert',
      description: 'Das Thema Ableitung abgeschlossen',
      icon: '∂',
      earned: ctx.completedTopicIds.includes('ableitung'),
    },
    {
      id: 'algebra-master',
      title: 'Algebra gemeistert',
      description: 'Das Thema Algebra & Funktionen abgeschlossen',
      icon: '±',
      earned: ctx.completedTopicIds.includes('algebra'),
    },
    {
      id: 'mechanik-master',
      title: 'Mechanik gemeistert',
      description: 'Technische Mechanik abgeschlossen',
      icon: '⚙',
      earned: ctx.completedTopicIds.includes('technische-mechanik'),
    },
    {
      id: 'points-500',
      title: '500 Punkte',
      description: 'Insgesamt 500 Punkte gesammelt',
      icon: '✦',
      earned: ctx.points >= 500,
    },
  ]
}
