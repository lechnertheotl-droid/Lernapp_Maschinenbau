import { UnitCircle } from './UnitCircle'
import { FunctionGraph } from './FunctionGraph'
import { DerivativeGraph } from './DerivativeGraph'
import { VectorDiagram } from './VectorDiagram'

const VIZ_MAP = {
  'unit-circle':      UnitCircle,
  'function-graph':   FunctionGraph,
  'derivative-graph': DerivativeGraph,
  'vector-diagram':   VectorDiagram,
}

export function VisualizationEngine({ visualizationId, params = {} }) {
  const Viz = VIZ_MAP[visualizationId]
  if (!Viz) {
    return (
      <div className="flex items-center justify-center h-32 bg-white border-2 border-ink rounded-retro shadow-hard-sm text-ink-soft text-sm font-mono">
        Visualisierung '{visualizationId}' nicht gefunden
      </div>
    )
  }
  return <Viz {...params} />
}
