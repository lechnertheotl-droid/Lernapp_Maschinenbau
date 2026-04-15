import { describe, it, expect } from 'vitest'
import { decimalsOf, roundTo, isNumericMatch } from './numericTolerance'

describe('decimalsOf', () => {
  it('counts decimal digits with point separator', () => {
    expect(decimalsOf('7.7')).toBe(1)
    expect(decimalsOf('7.6712')).toBe(4)
    expect(decimalsOf('293')).toBe(0)
  })
  it('counts decimal digits with comma separator', () => {
    expect(decimalsOf('7,7')).toBe(1)
    expect(decimalsOf('5,06')).toBe(2)
  })
  it('handles whitespace', () => {
    expect(decimalsOf('  7.7  ')).toBe(1)
  })
  it('returns 0 for integers', () => {
    expect(decimalsOf('42')).toBe(0)
  })
})

describe('roundTo', () => {
  it('rounds to given decimals (half-up)', () => {
    expect(roundTo(7.6712, 1)).toBeCloseTo(7.7, 9)
    expect(roundTo(7.6712, 2)).toBeCloseTo(7.67, 9)
    expect(roundTo(293.15, 0)).toBe(293)
    expect(roundTo(293.5, 0)).toBe(294)
  })
  it('handles negative numbers', () => {
    expect(roundTo(-1.55, 1)).toBeCloseTo(-1.6, 9)
  })
})

describe('isNumericMatch', () => {
  // Pfad 1: klassische Toleranz
  it('accepts answer within absolute tolerance', () => {
    expect(isNumericMatch('7.67', 7.6712, 0.01)).toBe(true)
    expect(isNumericMatch('7.66', 7.6712, 0.05)).toBe(true)
  })

  it('rejects answer outside tolerance and precision-mismatch', () => {
    // 7.6 vs 7.6712, tolerance 0.01:
    //   classic |7.6 - 7.6712| = 0.0712 > 0.01 → fail
    //   precision 1, rounded(7.6712, 1) = 7.7 ≠ 7.6 → fail
    expect(isNumericMatch('7.6', 7.6712, 0.01)).toBe(false)
  })

  // Pfad 2: Präzisions-Match
  it('accepts when student rounded correctly to fewer decimals', () => {
    expect(isNumericMatch('7.7', 7.6712, 0.01)).toBe(true)         // 1-stellig
    expect(isNumericMatch('293', 293.15, 0.001)).toBe(true)        // 0-stellig
    expect(isNumericMatch('293.2', 293.15, 0.001)).toBe(true)      // 1-stellig (293.15 → 293.2)
    expect(isNumericMatch('5.1', 5.06, 0.001)).toBe(true)          // 1-stellig (5.06 → 5.1)
  })

  it('accepts comma as decimal separator', () => {
    expect(isNumericMatch('7,7', 7.6712, 0.01)).toBe(true)
    expect(isNumericMatch('5,06', 5.06, 0.01)).toBe(true)
  })

  it('rejects empty / non-numeric input', () => {
    expect(isNumericMatch('', 5, 0.1)).toBe(false)
    expect(isNumericMatch('   ', 5, 0.1)).toBe(false)
    expect(isNumericMatch('abc', 5, 0.1)).toBe(false)
  })

  it('handles negative numbers', () => {
    expect(isNumericMatch('-1.6', -1.55, 0.01)).toBe(true) // precision 1: -1.55 → -1.6
    expect(isNumericMatch('-1.55', -1.55, 0.001)).toBe(true)
  })

  it('zero-tolerance still accepts precision-rounded answers', () => {
    expect(isNumericMatch('7.7', 7.6712, 0)).toBe(true)   // 7.6712 → 1 dec = 7.7
    expect(isNumericMatch('7.67', 7.6712, 0)).toBe(true)  // 7.6712 → 2 dec = 7.67
    expect(isNumericMatch('7.6', 7.6712, 0)).toBe(false)  // weder klassisch noch Präzision
  })

  it('rejects when precision is too high to capture (>6 decimals)', () => {
    // 7.6712 mit 7 Nachkommastellen → 7.6712000, vergleicht exakt mit 7.6712 → akzeptiert klassisch
    expect(isNumericMatch('7.67120000', 7.6712, 0)).toBe(true)
  })

  describe('fractions', () => {
    it('accepts simple fractions equal to correct value', () => {
      expect(isNumericMatch('1/2', 0.5, 0.001)).toBe(true)
      expect(isNumericMatch('3/4', 0.75, 0.001)).toBe(true)
      expect(isNumericMatch('-2/5', -0.4, 0.001)).toBe(true)
    })
    it('accepts equivalent fractions', () => {
      expect(isNumericMatch('2/4', 0.5, 0.001)).toBe(true)
      expect(isNumericMatch('6/8', 0.75, 0.001)).toBe(true)
    })
    it('accepts comma-decimal fractions', () => {
      expect(isNumericMatch('1,5/3', 0.5, 0.001)).toBe(true)
    })
    it('rejects malformed fraction-like and expression input', () => {
      expect(isNumericMatch('1//2', 0.5, 0.1)).toBe(false)
      expect(isNumericMatch('1/', 0.5, 0.1)).toBe(false)
      expect(isNumericMatch('sqrt(2)', 1.4142, 0.1)).toBe(false)
      expect(isNumericMatch('1+2', 3, 0.1)).toBe(false)
    })
  })
})
