import { useState } from 'react'
import { cn } from '@/utils/cn'

export function validate(answer, exercise) {
  return { isCorrect: answer.value === exercise.isTrue }
}

export function TrueFalse({ exercise, onSubmit, disabled }) {
  const [selected, setSelected] = useState(null)

  const submit = (val) => {
    setSelected(val)
    onSubmit({ value: val })
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-base font-medium text-surface-900 leading-relaxed">{exercise.question}</p>
      <div className="grid grid-cols-2 gap-3">
        {[{ label: 'Richtig', val: true, color: 'border-green-400 bg-green-50 text-green-800 hover:bg-green-100' },
          { label: 'Falsch', val: false, color: 'border-red-400 bg-red-50 text-red-800 hover:bg-red-100' }
        ].map(({ label, val, color }) => (
          <button
            key={label}
            disabled={disabled}
            onClick={() => !disabled && submit(val)}
            className={cn(
              'py-5 rounded-2xl border-2 text-base font-semibold transition-all duration-150 tap-highlight-none',
              selected === val ? color : 'border-surface-200 bg-white text-surface-700',
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
