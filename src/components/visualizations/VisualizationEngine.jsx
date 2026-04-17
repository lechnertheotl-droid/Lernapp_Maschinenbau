import { lazy, Suspense } from 'react'

// Lazy-Loading: jede Visualisierung ist ein eigener Bundle-Split, der erst geladen
// wird, wenn eine Lektion sie konkret verwendet. Ohne diesen Split landen alle 21
// Komponenten (Canvas-Rendering, D3-Math, Physik-Sim) im Haupt-Chunk.
const lazyNamed = (loader, name) => lazy(() => loader().then((m) => ({ default: m[name] })))

const VIZ_MAP = {
  'unit-circle':         lazyNamed(() => import('./UnitCircle'),         'UnitCircle'),
  'function-graph':      lazyNamed(() => import('./FunctionGraph'),      'FunctionGraph'),
  'derivative-graph':    lazyNamed(() => import('./DerivativeGraph'),    'DerivativeGraph'),
  'vector-diagram':      lazyNamed(() => import('./VectorDiagram'),      'VectorDiagram'),
  'trig-explorer':       lazyNamed(() => import('./TrigExplorer'),       'TrigExplorer'),
  'limit-explorer':      lazyNamed(() => import('./LimitExplorer'),      'LimitExplorer'),
  'sin-wave-explorer':   lazyNamed(() => import('./SinWaveExplorer'),    'SinWaveExplorer'),
  'force-parallelogram': lazyNamed(() => import('./ForceParallelogram'), 'ForceParallelogram'),
  'beam-reactions':      lazyNamed(() => import('./BeamReactions'),      'BeamReactions'),
  'interactive-beam':    lazyNamed(() => import('./InteractiveBeam'),    'InteractiveBeam'),
  'integral-area':       lazyNamed(() => import('./IntegralArea'),       'IntegralArea'),
  'complex-plane':       lazyNamed(() => import('./ComplexPlane'),       'ComplexPlane'),
  'taylor-approx':       lazyNamed(() => import('./TaylorApproximation'), 'TaylorApproximation'),
  'free-body-diagram':   lazyNamed(() => import('./FreeBodyDiagram'),    'FreeBodyDiagram'),
  'eigenvector-viz':     lazyNamed(() => import('./EigenvectorViz'),     'EigenvectorViz'),
  'lager-illustration':  lazyNamed(() => import('./LagerIllustration'),  'LagerIllustration'),
  'vector-3d':           lazyNamed(() => import('./Vector3D'),           'Vector3D'),
  'stress-strain':       lazyNamed(() => import('./StressStrainDiagram'), 'StressStrainDiagram'),
  'spring-mass-damper':  lazyNamed(() => import('./SpringMassDamper'),   'SpringMassDamper'),
  'mohr-circle':         lazyNamed(() => import('./MohrCircle'),         'MohrCircle'),
  'pv-diagram':          lazyNamed(() => import('./PVDiagram'),          'PVDiagram'),
}

function VizFallback() {
  return (
    <div className="flex items-center justify-center h-48 bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard-sm animate-pulse">
      <span className="font-mono text-xs text-ink-soft dark:text-surface-100 uppercase tracking-widest">Lade Visualisierung…</span>
    </div>
  )
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
  return (
    <Suspense fallback={<VizFallback />}>
      <Viz {...params} />
    </Suspense>
  )
}
