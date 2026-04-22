# CLAUDE.md — Arbeitsanleitung für Claude Code

Dieses Dokument ist die zentrale Anlaufstelle, wenn Claude (oder ein anderer Coding-Agent) am Content dieser Lernapp arbeitet. Zuerst lesen, dann handeln.

---

## Mission in einem Satz

**Den Lehrplan vollständig mit handgeschriebenen, qualitativ hochwertigen Aufgaben füllen — Minima sind Untergrenzen, kein Cap. Kein Slop, keine Template-Generatoren.**

### Mengen-Regel (gilt IMMER, bei jeder Session)

- **Pro Lesson:** **≥ 20 Aufgaben** (Minimum).
- **Pro Sub-Goal:** **≥ 5 Aufgaben** (Minimum).
- **Nach oben kein Limit.** Schreib so viele Aufgaben pro Sub-Goal wie du inhaltlich sinnvoll variieren kannst — andere Zahlen, andere Kontexte, andere Typen, andere Fehlerquellen in Distraktoren. Bei prüfungsrelevanten oder fehleranfälligen Sub-Goals sind 8, 10 oder mehr Aufgaben besser als 5. **Lieber eine mehr als eine zu wenig.**
- Wenn ein User "eine Lesson" oder "ein Topic" in Auftrag gibt: **alle Sub-Goals** dieser Lesson(s) so weit ausbauen, bis man die Kompetenz wirklich sicher kann — nicht nur, bis die Minima formal erreicht sind.

---

## Wo steht, was zu tun ist?

**`/STATUS.md`** ist die lebendige Auftragsliste. Sie wird aus dem Code automatisch generiert (`npm run status`) und enthält:

1. **Lehrplan** (aus `src/content/curriculum.js`) — Phasen 0–3, Fächer, pro-Topic-Lernpfade mit `mustKnow` / `commonMistakes` / `examFocus` / `studyTips`.
2. **Gesamt-Kennzahlen** — wie viele Topics, Lessons, Aufgaben, 4-Block-Coverage, Sub-Goal-Tasks.
3. **Pro Topic** — pro Lesson eine Tabelle mit Typ-Histogramm (mc/ni/tf/matching/sorting) und offenen Lücken.
4. **Auftragsliste für Claude Code** — **224 Task-Cards** (Stand zuletzt), nach Priorität sortiert (🔴 kritisch · 🟠 hoch · 🟡 mittel · 🟢 niedrig). Jede Task-Card ist stand-alone vollständig: was fehlt, welche Typen-Rotation, welche Sub-Goal-Labels, welche Dateien, welcher Topic-Guide-Kontext.

**Workflow für eine Aufgabenergänzung:**

1. `npm run status` laufen lassen, damit STATUS.md aktuell ist.
2. In STATUS.md unter `## Auftragsliste für Claude Code` die nächste Task-Card aussuchen (nach Priorität).
3. Die Aufgaben in die in der Task-Card angegebene Datei schreiben (`supplements/<topic>.js` oder `subgoal_tasks/<topic>.js`).
4. `npm run validate:content && npm run status && npm test && npm run build` ausführen.
5. Commit + Push + PR.

---

## Qualitätskontrakt pro Aufgabe

Keine Aufgabe wird akzeptiert, die nicht **alle** Punkte erfüllt:

- **4-Block-Erklärung** in `explanation`: alle vier Markdown-Headings müssen vorkommen
  ```
  **Ansatz:** …
  **Rechnung:** …
  **Probe:** …
  **Typischer Fehler:** …
  ```
- **≥ 3 Hints**, inhaltlich gestaffelt (Konzept → Methode → konkreter Schritt).
- **Multiple-Choice:** ≥ 3 Optionen, `wrongAnswerExplanations` für JEDEN falschen Index (1–2 Sätze, benennt den vermuteten Fehler des Lernenden).
- **Number-Input:** `correctValue`, `tolerance`, `unit` (letzteres leer nur bei einheitenlosen Größen).
- **True-False:** Feld `correct: boolean` (nicht `isTrue`).
- **Matching / Sorting:** ≥ 2 Paare bzw. Items, Rich-Text mit KaTeX-Mathematik erlaubt.
- **Math-Delimiter:** LaTeX-Formeln immer in paarigen `$...$` (inline) oder `$$...$$` (display). Unbalancierte `$` werden vom Content-Validator geblockt — keine einzelnen `$` in Fließtext.
- **Prüfungs-Units:** Frage/Statement beginnt mit `[PRÜFUNG] `.
- **Goal-Tasks** (in `subgoal_tasks/<topic>.js`): Sub-Goal-Label **wörtlich** in der Frage zitiert, z. B. `Sub-Goal "Hauptnenner bei ungleichnamigen Brüchen finden (kgV)": …`.
- **Typen-Rotation pro Lesson:** Mischung aus mc/ni/tf/matching/sorting — nicht 5× MC in Folge.
- **100 % manuell, fachlich korrekt, konkret** — keine Platzhalter, keine generischen Templates.
- **Visualisierungen einbauen, wenn sie dem Stoff helfen** (siehe nächster Abschnitt).

---

## Visualisierungen (wenn von Vorteil)

**Regel:** Für jede Lesson prüfen, ob eine interaktive Visualisierung das Konzept klarer macht. Besonders bei abstrakten Begriffen (Grenzwert, Ableitung, Vektor, Schwingung, Spannungs-Dehnungs-Kurve, Fläche unter Graph, komplexe Ebene). Bei rein numerischen Themen (Prozentrechnung, Bruchrechnen) nur dann, wenn wirklich sinnvoll.

**Einbindung** als Lesson-Step in `lesson.steps`:

```js
{
  id: 'lesson-id-s2',
  type: 'visualization',
  title: 'Interaktiver Funktionsgraph',
  visualizationId: 'function-graph',
  params: {
    functions: [{ fn: (x) => x * x, color: '#3b82f6', label: 'x²' }],
    xRange: [-3, 3],
    yRange: [-1, 9],
    showGrid: true,
  },
}
```

**Verfügbare Viz** (21 Stück, siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`):
`unit-circle`, `trig-explorer`, `sin-wave-explorer`, `function-graph`, `derivative-graph`, `limit-explorer`, `integral-area`, `taylor-approx`, `vector-diagram`, `vector-3d`, `complex-plane`, `eigenvector-viz`, `force-parallelogram`, `free-body-diagram`, `beam-reactions`, `interactive-beam`, `stress-strain`, `mohr-circle`, `spring-mass-damper`, `pv-diagram`, `lager-illustration`.

**Pro Topic** sind die passenden Viz-IDs unter `TOPIC_GUIDES[id].recommendedVisualizations` hinterlegt — STATUS.md listet sie in jeder Task-Card direkt mit.

Wenn keine der bestehenden Viz zum Stoff passt, **KEINE neue erfinden** — lieber ohne Viz arbeiten oder in einem separaten Commit eine neue Komponente unter `src/components/visualizations/` anlegen und in `VisualizationEngine.jsx` registrieren.

Vor dem Commit prüft `scripts/validate-content.js`, dass Pflichtfelder sitzen. Aufgaben ohne 4-Block oder ohne Hints erscheinen als Warning im Content-Audit; MC-Aufgaben ohne vollständige `wrongAnswerExplanations` als harter Fehler beim Runtime-Import.

---

## Dateistruktur

### Content-Quellen
```
src/content/
  curriculum.js                — Lehrplan (Phasen, Topic-Guides, Tipps) · Single Source of Truth
  index.js                     — Master-Registry, importiert alle Topics, Supplements, Goal-Tasks
  mathematics/<topic>/
    index.js                   — Topic-Wrapper mit Units
    unit<N>_<slug>.js          — Unit + Lessons + Grundaufgaben
  engineering/<topic>/…        — dto. für Ingenieurs-Topics
  supplements/<topic>.js       — handgeschriebene Vertiefungsaufgaben (bank(profile) → 7 Aufgaben)
  subgoal_tasks/<topic>.js     — eine Aufgabe pro Sub-Goal einer Lesson
  practice/<topic>.ts          — Klausur-Simulationen (separate Registry)
```

### Scripts
```
scripts/
  generate-status.js           — erzeugt STATUS.md (prebuild)
  validate-content.js          — Pflichtfeld-Check (prebuild)
  lib/content-metrics.js       — geteilte Metriken (4-Block, MC-wAE, etc.)
```

### UI-Integration
```
src/pages/Lehrplan.jsx         — rendert curriculum.js
src/content/index.js           — getAgentTasks() liefert strukturierte Task-Daten
```

---

## Neue Aufgaben hinzufügen

### Variante A: Supplements (Standard-Vertiefung)

Neue Datei oder Profil in `src/content/supplements/<topic>.js`. Muster:

```js
const profiles = {
  'alg-1-1': {                                 // Lesson-ID
    explanation: `**Vertiefung zum Thema…**`,  // optional, Vertiefungs-Markdown
    conceptQuestion: 'Welche Regel…?',
    conceptOptions: ['…', '…', '…', '…'],
    conceptCorrect: 0,
    conceptExplanation: '**Ansatz:**…\n\n**Rechnung:**…\n\n**Probe:**…\n\n**Typischer Fehler:**…',
    conceptHints: ['…', '…', '…'],
    conceptWrongAnswers: { 1: '…', 2: '…', 3: '…' },
    calcQuestion: '…', calcAnswer: 3, calcTolerance: 0.001, calcUnit: '',
    calcExplanation: '…', calcHints: ['…', '…', '…'],
    // … weitere 5 Slots (tf, matching, sorting, errorQuestion, transferQuestion)
  },
}
```

`bank(profile)` erzeugt daraus 7 typen-gemischte Aufgaben (MC, NI, TF, Matching, Sorting, MC, NI).

Neue `supplements/<topic>.js`-Datei muss in `src/content/index.js` importiert und in `MANUAL_SUPPLEMENTS` gespreadet werden.

### Variante B: Goal-Tasks (pro Sub-Goal mehrere Aufgaben!)

Datei `src/content/subgoal_tasks/<topic>.js`. **Empfohlenes Format** — Objekt mit Sub-Goal-Index als Key, ARRAY von Aufgaben als Value. Pro Sub-Goal MEHRERE Aufgaben mit Typen-Variation:

```js
import { mc, ni, tf, matching, sorting } from './_helpers'

export const topicSubGoalTasks = {
  'alg-0-2': {
    // Sub-Goal 0 — mindestens 3 Aufgaben, gerne mehr. Typen durchmischen.
    0: [
      ni('Sub-Goal "Hauptnenner bei …": Was ist der Hauptnenner von 5/12 und 7/18?', 36, 0, '', …),
      mc('Sub-Goal "Hauptnenner bei …": Welche Primfaktorzerlegung …', […], …),
      tf('Sub-Goal "Hauptnenner bei …": Das kgV zweier Zahlen ist immer ihr Produkt.', false, …),
      // und gerne noch mehr — 4, 5, 6 Aufgaben sind willkommen
    ],
    // Sub-Goal 1 — dto.
    1: [ … ],
    2: [ … ],
    3: [ … ],
  },
}
```

Legacy-Format (ein Array mit genau `subGoals.length` Einträgen) wird noch unterstützt, aber bei neuen Lessons bitte das Objekt-Format nutzen. Registrierung in `src/content/index.js` unter `SUBGOAL_EXERCISES`.

**Wichtig für jede Sub-Goal-Gruppe:**
- Sub-Goal-Label in **jeder** Aufgabe wörtlich zitieren (`Sub-Goal "…": …`).
- Typen innerhalb einer Sub-Goal-Gruppe variieren (nicht 3× MC hintereinander).
- Andere Zahlen / Kontexte / Fehler-Blickwinkel pro Aufgabe.

### Variante C: Direkte Unit-Aufgaben

Nur für Aufgaben, die Teil des Lernpfads (Lesson-Steps) sein sollen. Ergänze die `exercises`-Map und die entsprechenden `steps` in `src/content/<kategorie>/<topic>/unit<N>_*.js`.

---

## Verifikations-Pipeline

```bash
npm run validate:content   # Pflichtfeld-Check (Warning bei <3 Hints, Error bei fehlender wAE)
npm run status             # STATUS.md regenerieren — Task-Cards schrumpfen
npm test                   # Vitest (84 Tests, inkl. Full-Audit)
npm run build              # Production-Build mit PWA
```

Alle vier müssen grün sein, bevor committed/gemergt wird.

---

## Was NICHT tun

- **Keine Template-Generatoren schreiben.** Der alte `lessonProfile()`-Slop-Fallback wurde bewusst entfernt. Aufgaben müssen handgeschrieben, lessonspezifisch und fachlich korrekt sein.
- **Keine Lesson-IDs umbenennen** ohne zwingenden Grund — das bricht User-Progress (localStorage).
- **Keine Aufgaben mit magischen Template-Indizes** (`templates[i % 8]`) und generischen Distraktoren.
- **Keine Kopien derselben Aufgabe** mit leicht veränderten Zahlen — jede Aufgabe trägt neuen Lerninhalt.

---

## Weiterführende Dokumente

- [STATUS.md](./STATUS.md) — lebendige Auftragsliste + Content-Kennzahlen.
- [src/content/curriculum.js](./src/content/curriculum.js) — Lehrplan-Daten.
- [README.md](./README.md) — Projektübersicht, Tech-Stack, Skripte.
