// ═══════════════════════════════════════════════════════════════════════════
// Python & Matlab — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: { [lessonId]: { [subGoalIndex]: Exercise[] } }
// Qualitätskontrakt (CLAUDE.md):
//   - Sub-Goal-Label wörtlich in der Frage zitieren
//   - 4-Block-Erklärung (Ansatz / Rechnung / Probe / Typischer Fehler)
//   - ≥ 3 Hints gestaffelt  ·  MC: wrongAnswerExplanations für alle falschen
//   - ≥ 5 Aufgaben pro Sub-Goal  ·  Typen-Rotation
//
// Workflow: gewünschten Lesson-Block unkommentieren → Aufgaben eintragen
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

export const pythonMatlabSubGoalTasks = {

  // ── py-1-1 (4 subGoals) ─────────────────────────────────────────────────────
  // 'py-1-1': {
  //   0: [], // Dynamische Typisierung: keine Typangabe nötig, aber Typ ändert sich mit dem
  //   1: [], // int/float/str/bool mit `type(x)` prüfen
  //   2: [], // Explizite Konvertierung `int("42")`, `float(3)`, `str(3.14)` — `int("3.14")
  //   3: [], // `snake_case` für Variablen in Python; Matlab nutzt `camelCase` oder Unterst
  // },

  // ── py-1-2 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-1-2': {
  //   0: [], // `/` = Gleitkomma-Division, `//` = Ganzzahl-Division, `%` = Modulo
  //   1: [], // Python: `**` für Potenz; Matlab: `^` (bei Arrays: `.^` elementweise)
  //   2: [], // Logische Operatoren: Python `and/or/not`, Matlab `&&/||/~` (skalar) bzw. `&
  //   3: [], // Float-Vergleich mit `==` unzuverlässig — stattdessen `abs(a - b) < 1e-9`
  //   4: [], // `0 == False` und `1 == True` in Python — bool ist Subtyp von int
  // },

  // ── py-1-3 (4 subGoals) ─────────────────────────────────────────────────────
  // 'py-1-3': {
  //   0: [], // Python indiziert ab 0, Matlab ab 1 — Off-by-one-Fehler ist Quelle Nr. 1
  //   1: [], // Slicing `liste[a:b]` liefert Elemente $a$ bis $b-1$ (rechte Grenze exklusiv
  //   2: [], // NumPy-Arrays: vektorisiert (elementweise `+ - * /`), viel schneller als rei
  //   3: [], // Python-Listen können gemischte Typen; NumPy-Arrays nur einen Datentyp (dtyp
  // },

  // ── py-1-4 (4 subGoals) ─────────────────────────────────────────────────────
  // 'py-1-4': {
  //   0: [], // Python: Einrückung (4 Spaces) definiert Block — kein `end`; Matlab: immer `
  //   1: [], // Vergleiche: `==` prüft Gleichheit, `=` weist zu — Verwechslung erzeugt stum
  //   2: [], // For-Schleife: `for i in range(n)` (0..n-1) in Python, `for i = 1:n` (1..n) 
  //   3: [], // While-Schleife braucht zwingend einen Abbruch-Mechanismus (Zähler, Bedingun
  // },

  // ── py-1-5 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-1-5': {
  //   0: [], // Python: `def name(param):`, Matlab: `function y = name(x)` ... `end`
  //   1: [], // Rückgabe: Python `return`, Matlab über Zuweisung an Ausgabevariable
  //   2: [], // Default-Parameter: `def f(x, y=0):` — bei Aufruf nicht zwingend angeben
  //   3: [], // Lambda: `sqr = lambda x: x**2` für kurze Inline-Funktionen
  //   4: [], // Docstring (Python) oder Kommentare nach Function-Header (Matlab) dokumentie
  // },

  // ── py-2-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-2-1': {
  //   0: [], // Array erzeugen: `np.array([...])`, `np.zeros`, `np.ones`, `np.eye`, `np.lin
  //   1: [], // Elementweise: `*` in NumPy, `.*` in Matlab; Matrixmultiplikation: `@` bzw. 
  //   2: [], // Formen: `a.shape` (NumPy), `size(a)` (Matlab)
  //   3: [], // Vektorisierung statt Schleifen: $10$–$100\\times$ schneller
  //   4: [], // Broadcasting: $(n, 1) + (1, m) \\to (n, m)$ automatisch
  // },

  // ── py-2-2 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-2-2': {
  //   0: [], // Basis-Plot: `plt.plot(x, y)`, Titel, `xlabel`, `ylabel`, `legend`, `grid`
  //   1: [], // Farbe/Linienstil: `\
  //   2: [], // Mehrere Kurven: mehrere `plt.plot()`-Aufrufe nacheinander
  //   3: [], // Speichern: `plt.savefig(\
  //   4: [], // Plots ohne Achsen-/Einheiten-Beschriftung verlieren in Berichten Punkte
  // },

  // ── py-2-3 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-2-3': {
  //   0: [], // Nullstelle: `scipy.optimize.fsolve(f, x0)` — Startwert sollte nah an Lösung
  //   1: [], // LGS: `np.linalg.solve(A, b)` statt `np.linalg.inv(A) @ b` (schneller, stabi
  //   2: [], // Matlab-Pendant: Backslash-Operator `A \\ b`
  //   3: [], // Optimierung: `scipy.optimize.minimize(f, x0)` für Minima (Maxima: `-f`)
  //   4: [], // Dimensionen prüfen vor Solve: `A.shape == (n, n)`, `b.shape == (n,)`
  // },

  // ── py-2-4 (3 subGoals) ─────────────────────────────────────────────────────
  // 'py-2-4': {
  //   0: [], // Bestimmtes Integral: `scipy.integrate.quad(f, a, b)` (adaptive Quadratur)
  //   1: [], // Matlab-Pendant: `integral(@(x) f(x), a, b)`
  //   2: [], // DGL 2. Ordnung → System 1. Ordnung umschreiben, dann `solve_ivp` / `ode45`
  // },

  // ── py-3-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-3-1': {
  //   0: [], // Rechteck: $I = bh^3/12$, $W = bh^2/6$ als Funktion
  //   1: [], // Biegespannung $\\sigma_b = M_b/W$ entlang Balken berechnen (Vektor-Operatio
  //   2: [], // Kritische Stelle: $M_\\text{max}$ via `np.max(np.abs(M))`
  //   3: [], // Verschiedene Querschnitte als Funktionen kapseln (DRY-Prinzip)
  //   4: [], // Ergebnis-Plot: Spannungsverlauf über $x$ mit Skalierung & Einheit
  // },

  // ── py-3-2 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-3-2': {
  //   0: [], // CSV lesen: `np.loadtxt` (einfach), `pd.read_csv` (mit Headern und Typen)
  //   1: [], // Statistik: `np.mean`, `np.std`, `np.median`, `np.max`, `np.min`
  //   2: [], // Polynom-Fit: `np.polyfit(x, y, n)` → Koeffizienten
  //   3: [], // Pandas DataFrames: `df[\
  //   4: [], // Scatter + Fit-Kurve zusammen plotten (Mess vs. Modell)
  // },

  // ── py-3-3 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-3-3': {
  //   0: [], // Bewegungsgleichung $m\\ddot x + d\\dot x + kx = F(t)$ als System 1. Ordnung
  //   1: [], // Eigenkreisfrequenz $\\omega_0 = \\sqrt{k/m}$, Dämpfungsgrad $D = d/(2\\sqrt
  //   2: [], // Frequenzgang: Amplitude über $\\Omega$ plotten, Resonanzspitze bei $\\Omega
  //   3: [], // Parameter-Loop: Schleife über $\\Omega$, pro Wert ODE lösen
  //   4: [], // Einschwingvorgang ignorieren: nur zweite Hälfte der Zeitreihe auswerten
  // },

  // ── py-4-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'py-4-1': {
  //   0: [], // Indizierung: Python 0-basiert, Matlab 1-basiert (Off-by-one-Fehler!)
  //   1: [], // Operatoren: `*` vs `@`, `^` vs `.^` — elementweise vs. Matrix
  //   2: [], // Python `range(a, b)`: $a, a+1, \\ldots, b-1$; Matlab `a:b`: $a, a+1, \\ldot
  //   3: [], // Code Zeile-für-Zeile verfolgen, Variablenwerte neben Code notieren
  //   4: [], // Typische Fehler: `=` vs `==`, fehlendes `:` in Python, Semikolon-Ausgabe in
  // },
}
