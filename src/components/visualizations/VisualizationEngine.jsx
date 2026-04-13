import { UnitCircle } from './UnitCircle'
import { FunctionGraph } from './FunctionGraph'
import { DerivativeGraph } from './DerivativeGraph'
import { VectorDiagram } from './VectorDiagram'
import { TrigExplorer } from './TrigExplorer'
import { LimitExplorer } from './LimitExplorer'
import { SinWaveExplorer } from './SinWaveExplorer'
import { ForceParallelogram } from './ForceParallelogram'
import { BeamReactions } from './BeamReactions'
import { StressStrainDiagram } from './StressStrainDiagram'
import { SpringMassDamper } from './SpringMassDamper'
import { MohrCircle } from './MohrCircle'
import { PVDiagram } from './PVDiagram'

const VIZ_MAP = {
  'unit-circle':      UnitCircle,
  'function-graph':   FunctionGraph,
  'derivative-graph': DerivativeGraph,
  'vector-diagram':   VectorDiagram,
  'trig-explorer':    TrigExplorer,
  'limit-explorer':   LimitExplorer,
  'sin-wave-explorer': SinWaveExplorer,
  'force-parallelogram': ForceParallelogram,
  'beam-reactions':   BeamReactions,
  'stress-strain':    StressStrainDiagram,
  'spring-mass-damper': SpringMassDamper,
  'mohr-circle':      MohrCircle,
  'pv-diagram':       PVDiagram,
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
