import { createContext, useContext, useState, type ReactNode } from 'react'

interface FormulaPopoverContextValue {
  openLatex: string | null
  setOpenLatex: (latex: string | null) => void
  topicId: string | null
  setTopicId: (id: string | null) => void
}

const FormulaPopoverContext = createContext<FormulaPopoverContextValue | null>(null)

export function FormulaPopoverProvider({ children }: { children: ReactNode }) {
  const [openLatex, setOpenLatex] = useState<string | null>(null)
  const [topicId, setTopicId] = useState<string | null>(null)

  return (
    <FormulaPopoverContext.Provider value={{ openLatex, setOpenLatex, topicId, setTopicId }}>
      {children}
    </FormulaPopoverContext.Provider>
  )
}

export function useFormulaPopover(): FormulaPopoverContextValue {
  const ctx = useContext(FormulaPopoverContext)
  if (!ctx) throw new Error('useFormulaPopover must be used inside FormulaPopoverProvider')
  return ctx
}
