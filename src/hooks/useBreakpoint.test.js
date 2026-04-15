import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useBreakpoint } from './useBreakpoint'

function setWidth(w) {
  window.innerWidth = w
  window.dispatchEvent(new Event('resize'))
}

describe('useBreakpoint', () => {
  beforeEach(() => {
    window.innerWidth = 1200
  })

  it('returns md for desktop widths', () => {
    window.innerWidth = 1200
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current).toBe('md')
  })

  it('returns xs for small mobile', () => {
    window.innerWidth = 375
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current).toBe('xs')
  })

  it('returns sm for tablet', () => {
    window.innerWidth = 600
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current).toBe('sm')
  })

  it('updates on resize', () => {
    window.innerWidth = 1200
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current).toBe('md')
    act(() => setWidth(400))
    expect(result.current).toBe('xs')
  })
})
