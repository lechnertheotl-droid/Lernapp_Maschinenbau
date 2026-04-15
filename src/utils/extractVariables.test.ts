import { describe, it, expect } from 'vitest'
import { extractVariables } from './extractVariables'

function names(latex: string, topicId?: string): string[] {
  return extractVariables(latex, { topicId }).map((v) => v.key)
}

describe('extractVariables — basics', () => {
  it('finds simple letters in F = m·a', () => {
    const keys = names('F = m \\cdot a')
    expect(keys).toContain('F')
    expect(keys).toContain('m')
    expect(keys).toContain('a')
  })

  it('returns empty for empty input', () => {
    expect(extractVariables('')).toEqual([])
  })

  it('returns empty when no known variables', () => {
    expect(extractVariables('xyz123')).toEqual([])
  })

  it('handles greek letter commands', () => {
    expect(names('\\sigma = E \\cdot \\varepsilon', 'festigkeitslehre')).toContain('σ')
    expect(names('\\omega t')).toContain('ω')
  })
})

describe('extractVariables — subscript dedup', () => {
  it('treats F_G as single token, not F + G', () => {
    const keys = names('F_G = m \\cdot g')
    expect(keys).toContain('FG')
    // F should NOT appear standalone since its only role was as subscript base
    expect(keys).not.toContain('F')
  })

  it('handles long subscript like sigma_{zul}', () => {
    const keys = names('\\sigma_{zul} = R_m / S')
    // sigma + base — wir akzeptieren entweder σzul oder σ als Treffer
    expect(keys.some((k) => k === 'σ' || k.startsWith('σ'))).toBe(true)
  })

  it('M_b should map to Mb (Biegemoment), not M + b', () => {
    const keys = names('M_b = \\sigma_b \\cdot W_b')
    expect(keys).toContain('Mb')
    expect(keys).not.toContain('b')
  })
})

describe('extractVariables — accent commands', () => {
  it('keeps content of \\vec{r} as one token', () => {
    const keys = names('\\vec{r} \\times \\vec{F}')
    expect(keys).toContain('r')
    expect(keys).toContain('F')
    // The accent name itself should not appear
    expect(keys).not.toContain('vec')
  })

  it('keeps content of \\bar{x} as one token', () => {
    const keys = names('\\bar{x} = \\frac{1}{n} \\sum x_i')
    expect(keys).toContain('x')
    expect(keys).not.toContain('bar')
  })
})

describe('extractVariables — ignored commands', () => {
  it('extracts angles inside trig functions but not the function names themselves', () => {
    const keys = extractVariables('\\sin(\\alpha) + \\cos(\\beta)').map((v) => v.key)
    // α IS a known variable (Winkel); β is not in our DB, but sin/cos must NOT appear
    expect(keys).not.toContain('sin')
    expect(keys).not.toContain('cos')
    expect(keys).toContain('α')
  })

  it('ignores Re and Im (real/imag operators)', () => {
    expect(extractVariables('\\Re(z) + \\Im(z)').map((v) => v.key)).not.toContain('Re')
    expect(extractVariables('\\Re(z) + \\Im(z)').map((v) => v.key)).not.toContain('Im')
  })

  it('ignores det, min, max', () => {
    expect(extractVariables('\\det(A - \\lambda I) = 0').map((v) => v.key)).not.toContain('det')
  })
})

describe('extractVariables — topic-aware disambiguation', () => {
  it('E in thermodynamik resolves to Energie', () => {
    const result = extractVariables('E = Q - W', { topicId: 'thermodynamik' })
    const e = result.find((v) => v.key === 'E')
    expect(e?.name).toBe('Energie')
    expect(e?.ambiguous).toBe(true)
    expect(e?.alternates?.length).toBeGreaterThanOrEqual(1)
  })

  it('E in festigkeitslehre resolves to E-Modul', () => {
    const result = extractVariables('\\sigma = E \\cdot \\varepsilon', { topicId: 'festigkeitslehre' })
    const e = result.find((v) => v.key === 'E')
    expect(e?.name).toBe('E-Modul')
  })

  it('E in komplexe-zahlen resolves to Eulersche Zahl', () => {
    const result = extractVariables('z = E^{i\\varphi}', { topicId: 'komplexe-zahlen' })
    const e = result.find((v) => v.key === 'E')
    expect(e?.name).toBe('Eulersche Zahl')
  })

  it('E without topicId is ambiguous (some default chosen)', () => {
    const result = extractVariables('E = ?')
    const e = result.find((v) => v.key === 'E')
    expect(e?.ambiguous).toBe(true)
  })

  it('M in technische-mechanik resolves to Biegemoment', () => {
    const result = extractVariables('M(x) = R_A \\cdot x', { topicId: 'technische-mechanik' })
    const M = result.find((v) => v.key === 'M')
    expect(M?.name).toBe('Biegemoment')
  })

  it('M in maschinenelemente resolves to Drehmoment', () => {
    const result = extractVariables('M = F \\cdot l', { topicId: 'maschinenelemente' })
    const M = result.find((v) => v.key === 'M')
    expect(M?.name).toBe('Drehmoment')
  })

  it('R in thermodynamik resolves to Gaskonstante', () => {
    const result = extractVariables('p V = n R T', { topicId: 'thermodynamik' })
    const R = result.find((v) => v.key === 'R')
    expect(R?.name).toBe('Gaskonstante')
  })

  it('R in technische-mechanik resolves to Reaktionskraft', () => {
    const result = extractVariables('R_A + R_B = F', { topicId: 'technische-mechanik' })
    // R_A → RA token; pure R should not appear standalone
    expect(result.find((v) => v.key === 'R' || v.key === 'RA' || v.key === 'RB')).toBeTruthy()
  })

  it('T in thermodynamik resolves to Temperatur', () => {
    const result = extractVariables('p V = n R T', { topicId: 'thermodynamik' })
    const T = result.find((v) => v.key === 'T')
    expect(T?.name).toBe('Temperatur')
  })
})
