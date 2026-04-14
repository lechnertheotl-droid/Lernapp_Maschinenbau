import { useFormulaPopover } from '@/utils/formulaPopoverContext'
import { FormulaVariablePopover } from '@/components/ui/FormulaVariablePopover'

export function FormulaPopoverRoot() {
  const { openLatex, setOpenLatex } = useFormulaPopover()
  if (!openLatex) return null
  return <FormulaVariablePopover latex={openLatex} onClose={() => setOpenLatex(null)} />
}
