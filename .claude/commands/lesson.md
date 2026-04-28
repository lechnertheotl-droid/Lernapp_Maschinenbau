---
description: Lesson-Aufgaben handgeschrieben ausbauen (Audit + Matrix-Lücken + Bonus + Verifikation + Commit)
argument-hint: <lessonId>  (z. B. alg-2-4, trig-3-1)
---

Du arbeitest am Lernapp_Maschinenbau-Repo. Schreibe handgeschriebene Aufgaben höchster Qualität für **eine** Lesson nach folgendem Workflow. Keine Template-Generatoren, keine Slop-Aufgaben, keine generischen Distraktoren.

**Lesson:** `$ARGUMENTS`

## 0. Vorbereitung

1. `CLAUDE.md` als Qualitätskontrakt vergegenwärtigen.
2. `npm run status` laufen lassen — STATUS.md aktualisieren.
3. Matrix-Card der Lesson `$ARGUMENTS` aus STATUS.md lesen (Sektion `## Auftragsliste für Claude Code`).
4. Lesson-Blueprint lesen: `src/content/<kategorie>/<topic>/unit<N>_*.js` — `lesson.blueprint` mit `prerequisites`, `concepts`, `subGoalConcepts`, `taskPlan` ist die Single Source of Truth.

## 1. Audit der bestehenden Aufgaben (PFLICHT vor jedem Schreiben)

Lies **alle** Aufgaben dieser Lesson — Lesson-Path-Aufgaben in `unit*.js` UND Goal-Tasks in `subgoal_tasks/<topic>.js` unter `'$ARGUMENTS': { ... }`. Pro Aufgabe prüfen:

| Kriterium | Standard |
|---|---|
| **4-Block-Erklärung** | EXAKT `**Ansatz:**` / `**Rechnung:**` / `**Probe:**` / `**Typischer Fehler:**` — Subtitel wie `**Rechnung (pq-Formel):**` oder `**Schritt 1**` matchen die Regex NICHT. |
| **Hints** | ≥ 3, gestaffelt (Konzept → Methode → konkreter Schritt). Keine Floskeln. |
| **MC mit ≥ 3 Optionen** | `wrongAnswerExplanations` für JEDEN falschen Index, benennt den Lerner-Fehler. |
| **Mathematik** | KaTeX in paarigen `$...$` oder `$$...$$`. KEINE Unicode-Hochzahlen wie `x⁵`. |
| **Sub-Goal-Zuordnung** | Frage enthält die Aufgabe selbst, OHNE `Sub-Goal "...":`-Prefix (UI rendert das automatisch). |
| **Pedagogy-Tag** | Bei BLUEPRINT_ENFORCED_TOPICS: `{ stage, subGoal, uses }` mit gültigen Werten aus dem Blueprint. |
| **Inhalt** | Konkrete Zahlen, fachlich korrekt. Distraktoren benennen plausible Fehler. |
| **Prüfungs-Units** | Frage beginnt mit `[PRÜFUNG] `. |

**Entscheidung pro Aufgabe:** ✅ behalten · 🔧 fixen (Form-Mangel inline edit) · 🗑 löschen (inhaltlich falsch, Slop, Stilbruch).

Schreibe dem User in 5–10 Zeilen das Audit-Ergebnis: `N behalten · N gefixt · N gelöscht · Matrix-Bezug · Visualisierungs-Status`.

## 2. Lücken aus der Matrix-Card schließen

Pro 🔴/🟡-Zeile mindestens `qty` Aufgaben schreiben — gerne mehr:

- **Kombination muss exakt matchen:** `pedagogy.stage === Stufe`, `pedagogy.subGoal === SG`, `ex.type === Typ`, `pedagogy.uses ⊇ Nutzt`.
- **Mengen-Regel:** ≥ 20 pro Lesson, ≥ 5 pro Sub-Goal. Untergrenze, kein Cap. Lieber eine zu viel als eine zu wenig.
- **Typen-Rotation pro Sub-Goal:** Mischung aus mc/ni/tf/matching/sorting.
- **Konzept-Reihenfolge:** `pedagogy.uses` darf nur Konzepte enthalten, die im Blueprint zum Einsatzzeitpunkt eingeführt sind.
- **Visualisierung:** Wenn `recommendedVisualizations` empfohlen ist und passt → `type: 'visualization'`-Step in `lesson.steps` einbauen. Nur die 21 vorhandenen aus `AVAILABLE_VISUALIZATIONS` nutzen.

**Ablage:** `src/content/subgoal_tasks/<topic>.js` unter `'$ARGUMENTS': { 0: [...], 1: [...], ... }`. Helfer aus `./_helpers.js`:

```js
tag(
  ni(
    'Berechne $\\log_2 32$.',
    5, 0, '',  // correctValue, tolerance, unit
    `**Ansatz:** Schreibe als $2^? = 32$.

**Rechnung:** $2^5 = 32 \\Rightarrow \\log_2 32 = 5$.

**Probe:** $2^5 = 32$ ✓.

**Typischer Fehler:** Basis und Argument verwechselt.`,
    [
      'Logarithmus = "Welcher Exponent?".',
      'Schreibe $32$ als Potenz von $2$.',
      'Zähle die Zweier-Faktoren.',
    ],
  ),
  { stage: 'apply-independent', subGoal: 0, uses: ['log-def'] },
)
```

Signaturen: `mc(question, options, correctIndex, explanation, hints, wrongAnswerExplanations?, pedagogy?)` · `ni(question, correctValue, tolerance, unit, explanation, hints, pedagogy?)` · `tf(statement, correct, explanation, hints, pedagogy?)` · `matching(question, pairs, explanation, hints, pedagogy?)` · `sorting(question, items, correctOrder, explanation, hints, pedagogy?)`. `mc` und `sorting` permutieren intern deterministisch — die richtige Antwort steht NICHT mehr an Position 0 nach dem Helper.

## Stolperfallen aus früheren Sessions (Pflichtlektüre)

1. **4-Block-Regex ist streng:** `**Rechnung:**` matched, `**Rechnung (pq-Formel):**` matched NICHT. Subtitel als Inline-Text in den Block schreiben, nicht als eigenen Markdown-Header. Gleiches Problem mit `**Schritt 1 — Ausklammern:**` statt `**Rechnung:**`.
2. **Eigene Aufgaben SELBST nachrechnen, bevor abgeschickt:** Bei `ni` muss `correctValue` zur Frage passen. Beim Schreiben der Erklärung das Ergebnis durchrechnen und mit `correctValue` abgleichen. Ich hatte schon: $\frac{1}{2}x^2-x-4=5$ mit $x=5$ als „korrekt" angegeben (richtig wäre $x = 19/3$, oder rechte Seite zu $4$ ändern), und Horner $P(-2)$ als $13$ statt $17$.
3. **`ni`-Aufgaben brauchen eindeutige Antwort:** „Die einzige negative Nullstelle" funktioniert nur, wenn das Polynom GENAU EINE negative Nullstelle hat. Vor dem Schreiben alle Nullstellen durchprüfen.
4. **`matching`-Aufgaben: rechte Seiten eindeutig.** Wenn `right` mehrfach auftaucht (z. B. $x = 3$ bei drei verschiedenen Gleichungen), ist die Zuordnung mehrdeutig — Polynome/Werte so wählen, dass jede Lösung nur einmal vorkommt.
5. **`type: 'visualization'`-Steps rendern KEIN `content`-Feld** — nur `title`, `visualizationId`, `params`. Wenn du Erklärtext zur Viz willst: separaten `type: 'explanation-intuitive'`-Step DAVOR setzen.
6. **Lesson-Path-Tags sind häufig pauschal `subGoal: 0, uses: ['<erstes-konzept>']`** — Audit zeigt fast immer: inhaltlich gehören b/c/d/mastery zu anderen SGs. Tags inhaltlich angleichen, nicht 1:1 übernehmen.
7. **Slop-Distraktoren in Bestandsaufgaben:** „Nicht nötig.", „Alle richtig.", „Es kommt darauf an." sind verboten. Wenn du sowas im Audit findest → 🗑 oder 🔧 mit echtem Distraktor ersetzen.
8. **Bei Verifikations-Warnings:** `<3 Hints` → Hints aufstocken (Konzept → Methode → Schritt). MC ohne `wrongAnswerExplanations` → harter Fehler beim Runtime-Import, nicht ignorierbar.
9. **PR bereits offen?** `gh pr list --head <branch>` prüfen vor `gh pr create`. Bestehenden Draft mit `gh pr edit <num>` aktualisieren — nicht neuen anlegen.
10. **Niemals `Sub-Goal "...":`-Prefix in der Frage** — UI rendert das automatisch als Header. Bestandsaufgaben mit Prefix sind 🔧.

## 3. Verifikation (PFLICHT, alles grün)

```
npm run validate:content
npm run status
npm test
npm run build
```

Bei Fehlern: Ursache fixen, nicht umgehen.

## 4. Commit & PR

- Branch: bestehend, **nicht** main.
- Commit-Title: `$ARGUMENTS ausgebaut: <Vorher> → <Nachher> Aufgaben + <Kurzbeschreibung>`.
- Commit-Body: Audit-Zahlen + Bonus-Aufgaben + Status-Diff (3–4 Zeilen).
- PR: bestehender Draft-PR aktualisieren (Titel + Body), nicht neuen anlegen.

## Was NICHT tun

- **Keine Aufgabe ohne vorherigen Audit-Schritt.**
- **Keine Aufgabe „pflege ich später nach"** — sofort vollständig oder weglassen.
- **Keine Lesson-IDs umbenennen** (bricht User-Progress in localStorage).
- **Keine Slop-Distraktoren:** "Keine der Antworten", "Alle richtig", "Kommt darauf an" — verboten.
- **Keine kopierten Aufgaben mit nur veränderten Zahlen** — jede Aufgabe trägt neuen Lerninhalt.
- **Keine generischen Erklärungen** ("Reihenfolge ist wichtig") — konkret, fachlich, mit Beispielzahl.

Wenn `$ARGUMENTS` leer ist: nimm die oberste 🔴-Karte aus `STATUS.md` und frage zur Bestätigung.
