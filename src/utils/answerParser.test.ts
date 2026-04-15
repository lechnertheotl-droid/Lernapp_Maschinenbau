import { describe, it, expect, beforeAll } from 'vitest'
import {
  compareAlgebraic,
  compareNumericEquivalent,
  compareAnswer,
  normalizeAlgebraic,
  preloadParser,
} from './answerParser'

beforeAll(async () => {
  await preloadParser()
})

describe('compareAlgebraic', () => {
  it('accepts trivial exact match', () => {
    expect(compareAlgebraic('6x+5', ['6x+5'])).toBe(true)
  })

  it('accepts different ordering of terms', () => {
    expect(compareAlgebraic('5+6x', ['6x+5'])).toBe(true)
    expect(compareAlgebraic('6x + 5', ['5+6x'])).toBe(true)
  })

  it('accepts Unicode multiplication dot', () => {
    expect(compareAlgebraic('6·x+5', ['6x+5'])).toBe(true)
  })

  it('accepts × as multiplication', () => {
    expect(compareAlgebraic('6×x+5', ['6x+5'])).toBe(true)
  })

  it('accepts equivalent polynomials after simplification', () => {
    expect(compareAlgebraic('(x+1)^2', ['x^2+2x+1'])).toBe(true)
    expect(compareAlgebraic('x^2+2x+1', ['(x+1)^2'])).toBe(true)
  })

  it('rejects wrong answers', () => {
    expect(compareAlgebraic('6x+4', ['6x+5'])).toBe(false)
    expect(compareAlgebraic('5x+6', ['6x+5'])).toBe(false)
  })

  it('gracefully handles broken input', () => {
    expect(compareAlgebraic('??', ['6x+5'])).toBe(false)
    expect(compareAlgebraic('', ['6x+5'])).toBe(false)
  })

  it('accepts multiple alternate solutions', () => {
    expect(compareAlgebraic('2x', ['x+x', '2*x', '2x'])).toBe(true)
  })

  it('handles derivatives of simple functions', () => {
    // d/dx[x^2] = 2x
    expect(compareAlgebraic('2x', ['2*x'])).toBe(true)
    expect(compareAlgebraic('2*x', ['2x'])).toBe(true)
  })
})

describe('compareNumericEquivalent', () => {
  it('accepts exact numeric value', () => {
    expect(compareNumericEquivalent('0.5', ['0.5'])).toBe(true)
  })

  it('handles pi and sqrt notation', () => {
    expect(compareNumericEquivalent('pi/2', ['1.5707963267948966'])).toBe(true)
    expect(compareNumericEquivalent('π/2', ['pi/2'])).toBe(true)
  })

  it('recognises sqrt(2)/2 as 1/sqrt(2)', () => {
    expect(compareNumericEquivalent('sqrt(2)/2', ['1/sqrt(2)'])).toBe(true)
    expect(compareNumericEquivalent('√2/2', ['1/sqrt(2)'])).toBe(true)
  })

  it('respects tolerance', () => {
    // 0.333 differs from 1/3 by ~3.3e-4, outside default 1e-6 tolerance
    expect(compareNumericEquivalent('0.333', ['1/3'])).toBe(false)
    expect(compareNumericEquivalent('0.333', ['1/3'], 1e-3)).toBe(true)
    // 15 digits of precision: well within tolerance
    expect(compareNumericEquivalent('0.333333333333333', ['1/3'])).toBe(true)
  })

  it('rejects nonsense', () => {
    expect(compareNumericEquivalent('abc', ['1'])).toBe(false)
    expect(compareNumericEquivalent('', ['1'])).toBe(false)
  })
})

describe('compareAnswer dispatcher', () => {
  it('routes numeric mode to numeric comparator', () => {
    expect(compareAnswer('pi', ['3.14159265358979'], 'numeric')).toBe(true)
  })
  it('routes trig mode to numeric comparator', () => {
    expect(compareAnswer('sqrt(2)/2', ['sin(pi/4)'], 'trig')).toBe(true)
  })
  it('defaults to algebraic', () => {
    expect(compareAnswer('2x+1', ['1+2x'])).toBe(true)
  })
})

describe('normalizeAlgebraic', () => {
  it('returns canonical form', () => {
    expect(normalizeAlgebraic('6x+5')).toBe(normalizeAlgebraic('5+6x'))
  })
  it('returns empty string for empty input', () => {
    expect(normalizeAlgebraic('')).toBe('')
  })
})
