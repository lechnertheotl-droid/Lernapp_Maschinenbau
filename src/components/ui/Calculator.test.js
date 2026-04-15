import { describe, it, expect } from 'vitest'
import { solveEquation, solveWithVars } from './Calculator'

describe('Calculator — single-variable solver', () => {
  it('löst eine einfache lineare Gleichung mit x', () => {
    const r = solveEquation('2*x + 3 = 11', false)
    expect(r.variable).toBe('x')
    expect(r.value).toBeCloseTo(4, 6)
  })

  it('wählt x (statt a) bei mehreren Kandidaten — wenn andere Variable einen Wert hat', () => {
    const r = solveWithVars('a*x + 27 = 83 - 2*x', [{ name: 'a', value: '3' }], 'x', false)
    expect(r.variable).toBe('x')
    expect(r.value).toBeCloseTo(11.2, 4)
  })

  it('löst quadratisch (mindestens eine Wurzel)', () => {
    const r = solveEquation('x**2 = 9', false)
    expect(r.variable).toBe('x')
    expect(Math.abs(r.value)).toBeCloseTo(3, 4)
  })

  it('meldet fehlende Variable im SYSTEM-Modus', () => {
    const r = solveWithVars('a*x + 27 = 83 - 2*x', [], 'x', false)
    expect(r.error).toMatch(/Unbekannte Variable/)
    expect(r.error).toMatch(/a/)
  })

  it('löst Gasgesetz V2/V1 = T2/T1 für V2', () => {
    const r = solveWithVars(
      'V2/V1 = T2/T1',
      [{ name: 'V1', value: '1' }, { name: 'T1', value: '300' }, { name: 'T2', value: '600' }],
      'V2',
      false
    )
    expect(r.variable).toBe('V2')
    expect(r.value).toBeCloseTo(2, 4)
  })

  it('meldet Widerspruch bei 0=1', () => {
    const r = solveEquation('x - x + 1 = 0', false)
    expect(r.error).toBeDefined()
  })
})
