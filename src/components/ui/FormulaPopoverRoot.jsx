import { useState } from 'react'
import { useFormulaPopover } from '@/utils/formulaPopoverContext'
import { FormulaVariablePopover } from '@/components/ui/FormulaVariablePopover'
import { VariableGlossary } from '@/components/ui/VariableGlossary'

export function FormulaPopoverRoot() {
  const { openLatex, setOpenLatex } = useFormulaPopover()
  const [showGlossary, setShowGlossary] = useState(false)
  return (
    <>
      {openLatex && (
        <FormulaVariablePopover
          latex={openLatex}
          onClose={() => setOpenLatex(null)}
          onOpenGlossary={() => setShowGlossary(true)}
        />
      )}
      <VariableGlossary isOpen={showGlossary} onClose={() => setShowGlossary(false)} />
    </>
  )
}
