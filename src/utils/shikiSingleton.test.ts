import { describe, it, expect } from 'vitest'
import { normalizeLang } from './shikiSingleton'

describe('normalizeLang', () => {
  it('returns text for undefined/empty', () => {
    expect(normalizeLang(undefined)).toBe('text')
    expect(normalizeLang('')).toBe('text')
  })

  it('maps shorthand aliases', () => {
    expect(normalizeLang('py')).toBe('python')
    expect(normalizeLang('js')).toBe('javascript')
    expect(normalizeLang('ts')).toBe('typescript')
    expect(normalizeLang('sh')).toBe('bash')
    expect(normalizeLang('shell')).toBe('bash')
  })

  it('passes through supported langs', () => {
    expect(normalizeLang('python')).toBe('python')
    expect(normalizeLang('matlab')).toBe('matlab')
    expect(normalizeLang('JSON')).toBe('json')
  })

  it('falls back to text for unsupported langs', () => {
    expect(normalizeLang('haskell')).toBe('text')
    expect(normalizeLang('brainfuck')).toBe('text')
  })
})
