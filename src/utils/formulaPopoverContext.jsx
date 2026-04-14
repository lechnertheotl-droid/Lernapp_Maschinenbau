import { createContext, useContext, useState } from 'react'

const FormulaPopoverContext = createContext(null)

export function FormulaPopoverProvider({ children }) {
  const [openLatex, setOpenLatex] = useState(null)

  return (
    <FormulaPopoverContext.Provider value={{ openLatex, setOpenLatex }}>
      {children}
    </FormulaPopoverContext.Provider>
  )
}

export function useFormulaPopover() {
  const ctx = useContext(FormulaPopoverContext)
  if (!ctx) throw new Error('useFormulaPopover must be used inside FormulaPopoverProvider')
  return ctx
}
