# Zielaufgaben pro Sub-Goal — Fortschritt

Pro Lesson eine Aufgabe pro Sub-Goal. Aktueller Topic-Pool: `algebra`.
Die Pipeline (`goalTaskExercises` in `src/content/index.js`) wirft einen Error,
wenn die Array-Länge in `algebraSubGoalTasks[<lessonId>]` von
`lesson.subGoals.length` abweicht. Lessons ohne Eintrag werden übersprungen
(fallen auf Auto-Supplementals zurück).

## Algebra (18 Lessons · 90 Sub-Goals)

| Unit | Lesson | Sub-Goals | Status |
|------|--------|-----------|--------|
| 0 Rechnen & Brüche | alg-0-1 Grundrechnen, Klammern & Vorrang | 4 | ✅ fertig |
| 0 Rechnen & Brüche | alg-0-2 Bruchrechnen sicher | 4 | ⬜ offen |
| 0 Rechnen & Brüche | alg-0-3 Prozent & Dreisatz | 5 | ⬜ offen |
| 0 Rechnen & Brüche | alg-0-4 Termumformung & Gleichungen | 5 | ⬜ offen |
| 1 Potenzen/Wurzeln/Log | alg-1-1 Potenzgesetze | 4 | ⬜ offen |
| 1 Potenzen/Wurzeln/Log | alg-1-2 Wurzeln & gebrochene Exponenten | 3 | ⬜ offen |
| 1 Potenzen/Wurzeln/Log | alg-1-3 Logarithmen | 7 | ⬜ offen |
| 2 Gleichungen/Ungleichungen | alg-2-1 Lineare Gleichungen | 4 | ⬜ offen |
| 2 Gleichungen/Ungleichungen | alg-2-2 Quadratische Gleichungen | 4 | ⬜ offen |
| 2 Gleichungen/Ungleichungen | alg-2-3 Polynomgleichungen & -division | 6 | ⬜ offen |
| 2 Gleichungen/Ungleichungen | alg-2-4 Ungleichungen | 6 | ⬜ offen |
| 3 Funktionen | alg-3-1 Funktionsbegriff | 3 | ⬜ offen |
| 3 Funktionen | alg-3-2 Elementare Funktionen | 6 | ⬜ offen |
| 3 Funktionen | alg-3-3 Funktionsoperationen | 6 | ⬜ offen |
| 3 Funktionen | alg-3-4 Umkehrfunktionen | 6 | ⬜ offen |
| 4 Prüfung **[PRÜFUNG]** | alg-4-1 Prüfung: Algebra-Grundlagen | 5 | ⬜ offen |
| 4 Prüfung **[PRÜFUNG]** | alg-4-2 Prüfung: Funktionen & Anwendungen | 6 | ⬜ offen |
| 4 Prüfung **[PRÜFUNG]** | alg-4-3 Prüfung: Gleichungssysteme & Technik | 6 | ⬜ offen |

**Fertig:** 1 / 18 Lessons · 4 / 90 Sub-Goals

## Wichtig für die Prüfungs-Unit (alg-4-*)

- Alle Aufgaben **zwingend** mit `[PRÜFUNG] `-Prefix in Frage bzw. Statement
  (Content-Audit bricht sonst ab, siehe `getContentQualityIssues` in
  `src/content/index.js:800`).

## Andere Topics (Folge-Sessions)

| Topic | Lessons | Sub-Goals | Status |
|-------|---------|-----------|--------|
| trigonometry | 18 | 87 | ⬜ offen |
| vektoren | 12 | 62 | ⬜ offen |
| ableitung | 18 | 90 | ⬜ offen |
| integralrechnung | ? | ? | ⬜ offen |
| …restliche 17 Topics | — | ~566 | ⬜ offen |

Pro Topic eigenes File `src/content/subgoal_tasks/<topic>.js`, Import in
`SUBGOAL_EXERCISES` in `src/content/index.js`.

## Qualitätskontrakt (gilt für jede Aufgabe)

- Sub-Goal-Label wörtlich in der Frage zitiert.
- 4-Block-Erklärung: **Ansatz** / **Rechnung** / **Probe** / **Typischer Fehler**.
- ≥ 3 Hints, gestaffelt.
- MC mit ≥ 3 Optionen: `wrongAnswerExplanations` für **jeden** falschen Index.
- Typen-Rotation pro Lesson (mc/ni/tf/matching/sorting — keine Lesson 5× MC in Folge).
- Prüfungs-Unit: `[PRÜFUNG] `-Prefix.
- Inhalt 100 % manuell, differenzierte Zahlen & Fragestämme, keine Clones.
