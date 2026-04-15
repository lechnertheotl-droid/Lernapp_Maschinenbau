export type Difficulty =
  | 'einsteiger'
  | 'grundlagen'
  | 'mittel'
  | 'fortgeschritten'
  | 'pruefung'

export type Priority = 'kritisch' | 'wichtig' | 'optional'

export interface DerivationStep {
  explanation: string
  formula?: string
}

export type LessonStep =
  | { type: 'explanation-intuitive'; id: string; title: string; content: string }
  | {
      type: 'explanation-formal'
      id: string
      title: string
      content: string
      priority?: Priority
    }
  | {
      type: 'derivation'
      id: string
      title: string
      steps: DerivationStep[]
      defaultOpen?: boolean
    }
  | {
      type: 'typical-error'
      id: string
      title: string
      wrong: string
      right: string
      hint?: string
    }
  | {
      type: 'visualization'
      id: string
      visualizationId: string
      params?: Record<string, unknown>
    }
  | { type: 'exercise' | 'mastery-check'; id: string; exerciseRef: string }
  | { type: 'reflection'; id: string; title?: string; questions: string[] }

interface ExerciseBase {
  id: string
  question: string
  hints: string[]
  explanation: string
  difficulty: Difficulty
  tags?: string[]
  wrongAnswerExplanations?: Record<string, string>
  relatedFormulaId?: string
}

export interface MultipleChoiceExercise extends ExerciseBase {
  type: 'multiple-choice'
  options: string[]
  correctIndex: number
}

export interface TrueFalseExercise extends ExerciseBase {
  type: 'true-false'
  statement: string
  correct: boolean
}

export interface NumberInputExercise extends ExerciseBase {
  type: 'number-input'
  correctValue: number
  tolerance: number
  unit: string
}

export interface MatchingExercise extends ExerciseBase {
  type: 'matching'
  pairs: { left: string; right: string }[]
}

export interface SortingExercise extends ExerciseBase {
  type: 'sorting'
  items: string[]
  correctOrder: number[]
}

export interface FreeTextExercise extends ExerciseBase {
  type: 'free-text'
  correctAnswers: string[]
  parser: 'algebraic' | 'trig' | 'numeric'
}

export interface FillInBlankExercise extends ExerciseBase {
  type: 'fill-in-blank'
  template: string
  blanks: { id: string; answer: string; tolerance?: number }[]
}

export interface MultiStepExercise extends ExerciseBase {
  type: 'multi-step'
  steps: {
    prompt: string
    answer: string | number
    unit?: string
    explanation: string
  }[]
}

export type Exercise =
  | MultipleChoiceExercise
  | TrueFalseExercise
  | NumberInputExercise
  | MatchingExercise
  | SortingExercise
  | FreeTextExercise
  | FillInBlankExercise
  | MultiStepExercise

export interface Lesson {
  id: string
  title: string
  estimatedMinutes: number
  difficulty: Difficulty
  learningGoals: string[]
  prerequisites: string[]
  createdAt: string
  steps: LessonStep[]
  exercises?: Exercise[]
  nextLessonId?: string
}

export interface Topic {
  id: string
  title: string
  description: string
  order: number
  level: Difficulty
  lessons: Lesson[]
  prerequisiteTopics: string[]
  entryQuiz?: Exercise[]
}

export interface GlossarEintrag {
  symbol: string
  name: string
  unit?: string
  description: string
  category: string
}

export interface StreakState {
  current: number
  longest: number
  lastActiveDate: string
}

export interface UserProgress {
  completedLessons: Record<string, string[]>
  currentLessonId?: string
  streak: StreakState
  bookmarks: string[]
}

export interface QuizAttempt {
  exerciseId: string
  correct: boolean
  wrongAnswer?: unknown
  timeMs: number
  hintUsed: number
  attemptCount: number
}
