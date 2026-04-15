import { useState, useMemo } from 'react'
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'

interface SortingExercise {
  question: string
  items: string[]
  correctOrder: number[]
}

export interface SortingAnswer {
  order: number[]
}

interface Props {
  exercise: SortingExercise
  onSubmit: (answer: SortingAnswer) => void
  disabled?: boolean
}

export function validate(answer: SortingAnswer, exercise: SortingExercise) {
  if (!answer.order || answer.order.length !== exercise.correctOrder.length) {
    return { isCorrect: false }
  }
  const correct = answer.order.every((val, i) => val === exercise.correctOrder[i])
  return { isCorrect: correct }
}

function initialShuffle(items: string[], seed: number): number[] {
  const indices = items.map((_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor((((seed + i * 13) % 97) / 97) * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return indices
}

function SortableItem({
  itemIdx, pos, text, disabled,
}: {
  itemIdx: number
  pos: number
  text: string
  disabled?: boolean
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: itemIdx, disabled })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'flex items-center gap-2 min-h-[52px] px-3 py-2 border-2 border-ink rounded-retro shadow-hard-sm bg-white dark:bg-surface-800 transition-shadow',
        isDragging && 'shadow-hard-lemon z-10 cursor-grabbing',
        disabled && 'opacity-60'
      )}
    >
      <span className="w-7 h-7 rounded-sm border-2 border-ink bg-paper dark:bg-surface-900 flex items-center justify-center text-xs font-mono font-black text-ink dark:text-paper flex-shrink-0">
        {pos + 1}
      </span>

      <MathText className="flex-1 text-sm font-semibold text-ink dark:text-paper font-mono">{text}</MathText>

      <button
        type="button"
        disabled={disabled}
        className={cn(
          'w-8 h-9 flex items-center justify-center border-2 border-ink rounded-retro text-base font-black tap-highlight-none select-none touch-none flex-shrink-0',
          disabled
            ? 'bg-surface-100 dark:bg-surface-700 text-ink-soft cursor-not-allowed'
            : 'bg-lemon text-ink shadow-hard-lemon cursor-grab active:cursor-grabbing'
        )}
        aria-label="Zum Verschieben ziehen"
        {...attributes}
        {...listeners}
      >
        ⋮⋮
      </button>
    </div>
  )
}

export function Sorting({ exercise, onSubmit, disabled }: Props) {
  const shuffled = useMemo(
    () => initialShuffle(exercise.items, 51),
    [exercise.items]
  )
  const [order, setOrder] = useState<number[]>(shuffled)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setOrder((prev) => {
      const oldIndex = prev.indexOf(active.id as number)
      const newIndex = prev.indexOf(over.id as number)
      if (oldIndex === -1 || newIndex === -1) return prev
      return arrayMove(prev, oldIndex, newIndex)
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <MathText className="text-base font-black text-ink dark:text-paper leading-relaxed block">
        {exercise.question}
      </MathText>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={order} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-2">
            {order.map((itemIdx, pos) => (
              <SortableItem
                key={itemIdx}
                itemIdx={itemIdx}
                pos={pos}
                text={exercise.items[itemIdx]}
                disabled={disabled}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <Button
        fullWidth
        size="lg"
        disabled={disabled}
        onClick={() => onSubmit({ order: [...order] })}
      >
        Antwort prüfen
      </Button>
    </div>
  )
}
