import { useEffect, useState } from 'react'

function resolve(width) {
  if (width < 480) return 'xs'
  if (width < 768) return 'sm'
  return 'md'
}

export function useBreakpoint() {
  const [bp, setBp] = useState(() =>
    typeof window !== 'undefined' ? resolve(window.innerWidth) : 'md'
  )
  useEffect(() => {
    const onResize = () => setBp(resolve(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return bp
}
