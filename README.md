# Lernapp_Maschinenbau

Interaktive Lern-Vorbereitungsapp für das Maschinenbau-Studium an der TU Wien.

## Tech-Stack

- **React 18 + Vite** (TypeScript schrittweise migriert; neue Komponenten in `.tsx`, Alt-Code in `.jsx` verbleibt bis zur natürlichen Anpassung)
- **Tailwind CSS** mit eigenen Retro-Tokens (`shadow-hard`, `bg-lemon`, `border-ink`)
- **React Router 6** (`react-router-dom`)
- **Context + useReducer** für globalen State, persistiert via `localStorage` (debounced)
- **KaTeX** für Formel-Rendering
- **shiki** (lazy) für Code-Syntax-Highlighting
- **mathjs** (lazy) für algebraische/numerische Aufgaben-Auswertung
- **@dnd-kit** für Drag & Drop in Sorting-/Matching-Aufgaben
- **Vitest + RTL + jest-axe** für Tests

## Stack-Entscheidungen

### React bleibt

Eine Migration zu Solid/Svelte/Vue für ~100 bestehende Komponenten kostet 80–120h und bringt **keinen Nutzergewinn**, solange die App nicht performance-limitiert ist (aktuell First-Paint < 1.5s, kein gemessenes Render-Bottleneck). Identifizierte Bundle-Wins (mathjs Lazy-Load: −175 KB Main-Bundle gzip) bringen praktisch mehr UX-Verbesserung als ein Framework-Wechsel.

Re-Evaluation, wenn sich das Performance-Profil deutlich verschlechtert oder echte 3D-Workflows (`react-three-fiber`) zu Bottlenecks führen.

### Bibliotheks-Schwergewichte

| Lib | Größe (gzip) | Status | Begründung |
|---|---|---|---|
| react + dom | ~45 KB | Main | Kern-Framework |
| katex | ~78 KB | Main | Industrie-Standard für Math-Rendering, kein gleichwertiger Ersatz |
| react-markdown + plugins | ~45 KB | Main | Stabil und wartungsarm |
| mathjs | ~210 KB | **Lazy** (eigener Chunk, lädt bei Free-Text-/Multi-Step-Exercises) | Zu groß für Main-Bundle |
| shiki + wasm | ~250 KB | **Lazy** (lädt erst bei Code-Block) | Zu groß für Main-Bundle |
| @dnd-kit | ~18 KB | Main | Schlank, gute Touch-Unterstützung |

## Skripte

```bash
npm run dev              # Vite Dev-Server
npm run build            # Production Build (mit Content-Validator als Pre-Hook)
npm run preview          # Production Build lokal anschauen
npm test                 # Vitest run (Unit + Integration)
npm run test:watch       # Vitest watch mode
npm run typecheck        # tsc --noEmit
npm run validate:content # Content-Audit (Pflichtfelder pro Lektion)
```

## Projektstruktur

```
src/
  components/
    exercises/      # 8 Aufgaben-Typen (MC, TrueFalse, NumberInput, Matching,
                    # Sorting, FreeText, FillInBlank, MultiStep)
    lesson/         # FormelBlock, HerleitungAccordion, FehlerBlock, CodeBlock,
                    # MarkdownContent, FeedbackDisplay, HintSystem
    ui/             # Button, Modal, Toast, Calculator, FormulaSheet,
                    # VariableGlossary, FormulaVariablePopover, StreakBadge,
                    # LessonMetaBadges, Breadcrumbs, ...
    visualizations/ # 18 Canvas/SVG-Vizs (TrigExplorer, ComplexPlane,
                    # TaylorApproximation, FreeBodyDiagram, EigenvectorViz,
                    # InteractiveBeam, IntegralArea, Vector3D, ...)
    skilltree/      # TopicNode für /lernpfad
    layout/         # AppLayout, Header, MobileNav
  content/
    mathematics/    # Algebra, Trigonometrie, Vektoren, Ableitung, Integral,
                    # Lin. Algebra, DGL, Komplexe Zahlen, Reihen, Mehrdim,
                    # Numerik, Statistik
    engineering/    # Tech. Mechanik, Festigkeit, Thermodynamik, Fluid,
                    # Maschinenelemente, Werkstoffkunde
    programming/    # Python/Matlab
    supplements/    # Manuelle Ergänzungs-Lektionen
    _helpers/       # makeLesson(), makeUnit() — Lektions-Scaffold-Helper
  context/          # AppContext (State + Dispatch, typsicher), appReducer
  pages/            # Dashboard, LessonView, LessonSummary, TopicDetail,
                    # TopicOverview, Skilltree, Formelsammlung, Achievements,
                    # TopicEntryQuiz, ReviewArea, Onboarding, Settings
  utils/            # storage, masteryCheck, reviewScheduler, feedbackGenerator,
                    # progressLogic, streakLogic, badges, topicGraph, lessonMeta,
                    # answerParser, numericTolerance, extractVariables,
                    # variablesDB, glossaryTooltips, formulaIndex
  hooks/            # useBreakpoint
  test/             # Vitest setup
  types/            # content.ts (Datenmodell-Kontrakt)

scripts/
  validate-content.js  # Pre-build Content-Audit
```

## Persistenz

State liegt in `localStorage` unter `lernapp_state`. Schreibvorgänge sind 250ms-debounced; ein synchroner Flush läuft auf `pagehide` und `visibilitychange: hidden`, sodass beim Tab-Wechsel/Hintergrund nichts verloren geht.

## Content-Pflichten

Vor jedem Build prüft `scripts/validate-content.js`, dass jede Lektion `id`, `title`, `estimatedMinutes`, `learningGoals`, `steps` enthält und die letzte Unit jedes Topics eine Prüfungs-Unit ist. Siehe auch `src/types/content.ts` für den vollständigen Datenmodell-Kontrakt.
