import { UnitCircle } from './UnitCircle'
import { FunctionGraph } from './FunctionGraph'

const VIZ_MAP = {
  'unit-circle':    UnitCircle,
  'function-graph': FunctionGraph,
}

export function VisualizationEngine({ visualizationId, params = {} }) {
  const Viz = VIZ_MAP[visualizationId]
  if (!Viz) {
    return (
      <div className="flex items-center justify-center h-32 bg-surface-100 rounded-xl text-surface-400 text-sm">
        Visualisierung '{visualizationId}' nicht gefunden
      </div>
    )
  }
  return <Viz {...params} />
}
