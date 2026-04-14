import { useState } from 'react'
import { cn } from '@/utils/cn'

export function validate(answer, exercise) {
  const expected = 'correct' in exercise ? exercise.correct : exercise.isTrue
  return { isCorrect: answer.value === expected }
}

export function TrueFalse({ exercise, onSubmit, disabled }) {
  const [selected, setSelected] = useState(null)

  const submit = (val) => {
    setSelected(val)
    onSubmit({ value: val })
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-base font-black text-ink leading-relaxed">{exercise.statement ?? exercise.question}</p>
      <div className="grid grid-cols-2 gap-3">
        {[{ label: 'Richtig', val: true, color: 'border-green-800 bg-green-600 text-white shadow-hard-green' },
          { label: 'Falsch', val: false, color: 'border-red-800 bg-red-600 text-white shadow-hard-red' }
        ].map(({ label, val, color }) => (
          <button
            key={label}
            disabled={disabled}
            onClick={() => !disabled && submit(val)}
            className={cn(
              'py-5 rounded-retro border-2 text-base font-black transition-all duration-150 tap-highlight-none retro-press',
              selected === val ? color : 'border-ink bg-white text-ink shadow-hard-sm',
              disabled && 'opacity-60 cursor-not-allowed'
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
