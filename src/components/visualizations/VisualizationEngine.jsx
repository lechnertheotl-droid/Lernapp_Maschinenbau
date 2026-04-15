import { UnitCircle } from './UnitCircle'
import { FunctionGraph } from './FunctionGraph'
import { DerivativeGraph } from './DerivativeGraph'
import { VectorDiagram } from './VectorDiagram'
import { TrigExplorer } from './TrigExplorer'
import { LimitExplorer } from './LimitExplorer'
import { SinWaveExplorer } from './SinWaveExplorer'
import { ForceParallelogram } from './ForceParallelogram'
import { BeamReactions } from './BeamReactions'
import { InteractiveBeam } from './InteractiveBeam'
import { IntegralArea } from './IntegralArea'
import { ComplexPlane } from './ComplexPlane'
import { TaylorApproximation } from './TaylorApproximation'
import { FreeBodyDiagram } from './FreeBodyDiagram'
import { EigenvectorViz } from './EigenvectorViz'
import { LagerIllustration } from './LagerIllustration'
import { Vector3D } from './Vector3D'
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
  'interactive-beam': InteractiveBeam,
  'integral-area':    IntegralArea,
  'complex-plane':    ComplexPlane,
  'taylor-approx':    TaylorApproximation,
  'free-body-diagram': FreeBodyDiagram,
  'eigenvector-viz':   EigenvectorViz,
  'lager-illustration': LagerIllustration,
  'vector-3d':         Vector3D,
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
