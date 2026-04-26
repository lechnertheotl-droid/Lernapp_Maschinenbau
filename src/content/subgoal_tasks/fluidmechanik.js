// ═══════════════════════════════════════════════════════════════════════════
// Fluidmechanik — Zielaufgaben pro Sub-Goal
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

export const fluidmechanikSubGoalTasks = {

  // ── fluid-1-1 (4 subGoals) ──────────────────────────────────────────────────
  // 'fluid-1-1': {
  //   0: [], // $p = \\rho g h$ — linearer Zusammenhang nur bei konstanter Dichte (Flüssigk
  //   1: [], // Überdruck vs. absoluter Druck: $p_\\text{abs} = p_\\text{atm} + p_\\text{hy
  //   2: [], // Druck in Flüssigkeit hängt nur von der Höhe ab, **nicht** von der Behälterf
  //   3: [], // Einheiten: 1 bar ≈ 10 m Wassersäule; 1 mbar ≈ 1 cm H₂O
  // },

  // ── fluid-1-2 (4 subGoals) ──────────────────────────────────────────────────
  // 'fluid-1-2': {
  //   0: [], // $F_A = \\rho_\\text{Fluid}\\,g\\,V_\\text{verdrängt}$ — Dichte des **Fluids
  //   1: [], // Schwimmen: $F_A = F_G$ → $V_\\text{verdrängt} = m_\\text{Körper}/\\rho_\\te
  //   2: [], // Vollständig getaucht: $V_\\text{verdrängt} = V_\\text{Körper}$
  //   3: [], // Dichte-Vergleich: Körper schwimmt, wenn $\\rho_\\text{Körper} < \\rho_\\tex
  // },

  // ── fluid-2-1 (5 subGoals) ──────────────────────────────────────────────────
  // 'fluid-2-1': {
  //   0: [], // Kontinuität (inkompressibel): $A_1 v_1 = A_2 v_2 = \\dot V$
  //   1: [], // Volumenstrom: $\\dot V = A \\cdot v$, Einheit m³/s
  //   2: [], // Massenstrom (kompressibel): $\\dot m = \\rho A v$
  //   3: [], // Querschnitt kleiner → Geschwindigkeit größer ($v \\propto 1/A$)
  //   4: [], // Umrechnung: Kreisquerschnitt $A = \\pi d^2/4$
  // },

  // ── fluid-2-2 (5 subGoals) ──────────────────────────────────────────────────
  // 'fluid-2-2': {
  //   0: [], // Bernoulli: $p + \\tfrac{1}{2}\\rho v^2 + \\rho g z = $ const (entlang Strom
  //   1: [], // Drei Druckarten: statisch $p$, dynamisch $\\tfrac{1}{2}\\rho v^2$, geodätis
  //   2: [], // Voraussetzungen: inkompressibel, stationär, reibungsfrei
  //   3: [], // Torricelli: $v = \\sqrt{2gh}$ (Ausflussgeschwindigkeit aus Behälter)
  //   4: [], // Mit Verlusten: $+ \\Delta p_V$ auf rechter Seite
  // },

  // ── fluid-2-3 (5 subGoals) ──────────────────────────────────────────────────
  // 'fluid-2-3': {
  //   0: [], // Darcy-Weisbach: $\\Delta p = \\lambda (L/d)(\\rho v^2/2)$
  //   1: [], // Reynolds-Zahl: $Re = \\rho v d/\\mu$; laminar $<2300$, turbulent $>4000$
  //   2: [], // Hagen-Poiseuille (laminar): $\\Delta p = 128 \\mu L \\dot V/(\\pi d^4)$
  //   3: [], // Laminares Profil parabolisch, turbulent näherungsweise Blockprofil mit Rand
  //   4: [], // Hydraulischer Durchmesser $d_h = 4A/U$ für Nicht-Kreisquerschnitte
  // },

  // ── fluid-2-4 (5 subGoals) ──────────────────────────────────────────────────
  // 'fluid-2-4': {
  //   0: [], // Pumpengesetze: $\\dot V \\propto n$, $H \\propto n^2$, $P \\propto n^3$
  //   1: [], // Reynolds für Ähnlichkeit: Modell- und Prototyp-Re gleich halten
  //   2: [], // Froude-Zahl: $Fr = v/\\sqrt{gL}$ (Schwerewellen, offene Gerinne)
  //   3: [], // Euler-Zahl: $Eu = \\Delta p/(\\rho v^2)$ (Druckabfall)
  //   4: [], // Leistung verdoppeln bedeutet Drehzahl $\\sqrt[3]{2} \\approx 1{,}26$-fach
  // },

  // ── fluid-2-5 (5 subGoals) ──────────────────────────────────────────────────
  // 'fluid-2-5': {
  //   0: [], // Laminar: $\\lambda = 64/Re$ (unabhängig von Rauhigkeit)
  //   1: [], // Turbulent glatt (Blasius, $Re < 10^5$): $\\lambda = 0{,}316/Re^{0{,}25}$
  //   2: [], // Turbulent rau: Moody-Diagramm oder Colebrook-Gleichung
  //   3: [], // Relative Rauhigkeit $\\varepsilon/d$: Materialkennwert aus Tabelle ablesen
  //   4: [], // Bei voll-turbulenter Strömung: $\\lambda$ Re-unabhängig (nur $\\varepsilon/
  // },

  // ── fluid-3-1 (5 subGoals) ──────────────────────────────────────────────────
  // 'fluid-3-1': {
  //   0: [], // Bernoulli vollständig: $p_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g z_1 = p_2 
  //   1: [], // Staudruck/Pitot: $v = \\sqrt{2\\Delta p/\\rho}$
  //   2: [], // Kontinuität + Bernoulli kombiniert für Düsen/Verengungen
  //   3: [], // Torricelli-Ausfluss: $v = \\sqrt{2gh}$ (freies Ausströmen unter Wasserhöhe)
  //   4: [], // Reynolds-Zahl entscheidet Strömungsregime; laminar/turbulent bestimmt $\\la
  // },

  // ── fluid-3-2 (5 subGoals) ──────────────────────────────────────────────────
  // 'fluid-3-2': {
  //   0: [], // Erweiterte Bernoulli mit Verlust: $+ \\Delta p_V$ auf Senkeseite
  //   1: [], // Pumpenleistung: $P = \\rho g \\dot V H / \\eta_P$
  //   2: [], // Reihenschaltung Rohre: $\\Delta p_\\text{ges} = \\sum \\Delta p_i$
  //   3: [], // Einzelverluste: $\\Delta p = \\zeta (\\rho v^2/2)$ ($\\zeta$ aus Tabelle fü
  //   4: [], // Pumpenkennlinie × Anlagenkennlinie = Betriebspunkt
  // },
}
