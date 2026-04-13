import { UnitCircle } from './UnitCircle'
import { FunctionGraph } from './FunctionGraph'
import { DerivativeGraph } from './DerivativeGraph'
import { VectorDiagram } from './VectorDiagram'
import { TrigExplorer } from './TrigExplorer'
import { LimitExplorer } from './LimitExplorer'
import { SinWaveExplorer } from './SinWaveExplorer'

const VIZ_MAP = {
  'unit-circle':      UnitCircle,
  'function-graph':   FunctionGraph,
  'derivative-graph': DerivativeGraph,
  'vector-diagram':   VectorDiagram,
  'trig-explorer':    TrigExplorer,
  'limit-explorer':   LimitExplorer,
  'sin-wave-explorer': SinWaveExplorer,
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
