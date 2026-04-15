import { describe, it, expect } from 'vitest'
import { parseNumericAnswer } from './parseNumericAnswer'

describe('parseNumericAnswer', () => {
  it('parses plain decimals (point and comma)', () => {
    expect(parseNumericAnswer('1.5')).toBe(1.5)
    expect(parseNumericAnswer('1,5')).toBe(1.5)
    expect(parseNumericAnswer('  -3.14  ')).toBe(-3.14)
  })

  it('parses simple fractions', () => {
    expect(parseNumericAnswer('1/2')).toBe(0.5)
    expect(parseNumericAnswer('3/4')).toBe(0.75)
    expect(parseNumericAnswer('-2/5')).toBe(-0.4)
    expect(parseNumericAnswer('6/8')).toBe(0.75)
  })

  it('parses fractions with comma decimals', () => {
    expect(parseNumericAnswer('1,5/3')).toBeCloseTo(0.5, 9)
    expect(parseNumericAnswer('3/0,5')).toBe(6)
  })

  it('parses fractions with whitespace', () => {
    expect(parseNumericAnswer(' 1 / 2 ')).toBe(0.5)
  })

  it('returns null for empty / nullish input', () => {
    expect(parseNumericAnswer('')).toBeNull()
    expect(parseNumericAnswer('   ')).toBeNull()
    // @ts-expect-error testing nullish
    expect(parseNumericAnswer(null)).toBeNull()
    // @ts-expect-error testing undefined
    expect(parseNumericAnswer(undefined)).toBeNull()
  })

  it('returns null for malformed input', () => {
    expect(parseNumericAnswer('1//2')).toBeNull()
    expect(parseNumericAnswer('1/')).toBeNull()
    expect(parseNumericAnswer('abc')).toBeNull()
    expect(parseNumericAnswer('1/0')).toBeNull() // division by zero
    expect(parseNumericAnswer('sqrt(2)')).toBeNull() // expressions not supported
    expect(parseNumericAnswer('1+2')).toBeNull()    // expressions not supported
  })
})
