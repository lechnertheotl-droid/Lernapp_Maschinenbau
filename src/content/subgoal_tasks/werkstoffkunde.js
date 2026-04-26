// ═══════════════════════════════════════════════════════════════════════════
// Werkstoffkunde — Zielaufgaben pro Sub-Goal
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

export const werkstoffkundeSubGoalTasks = {

  // ── werk-1-1 (5 subGoals) ───────────────────────────────────────────────────
  // 'werk-1-1': {
  //   0: [], // $R_e$ = Streckgrenze (Ende elastisch); $R_m$ = Zugfestigkeit (Maximum); nic
  //   1: [], // $R_{p0,2}$ = 0,2-%-Dehngrenze bei Werkstoffen ohne ausgeprägte Streckgrenze
  //   2: [], // E-Modul = Steigung im linearen (Hookeschen) Bereich: $E = \\sigma/\\varepsi
  //   3: [], // Bruchdehnung $A$ in %: $(l_u - l_0)/l_0 \\cdot 100$ — zäh vs. spröde
  //   4: [], // Sicherheit $S = R_m/\\sigma_\\text{zul}$ bzw. $R_e/\\sigma_\\text{zul}$ — w
  // },

  // ── werk-1-2 (5 subGoals) ───────────────────────────────────────────────────
  // 'werk-1-2': {
  //   0: [], // Metalle: zäh, gut umformbar, gut wärmeleitend — tragende Konstruktionen
  //   1: [], // Keramik: hart, hitzebeständig, spröde — **nicht auf Zug** belasten
  //   2: [], // Kunststoffe: leicht, korrosionsfest, niedriger E-Modul — Gehäuse, Gleitlage
  //   3: [], // Verbunde (CFK, GFK): hohe spezifische Steifigkeit $E/\\rho$ — Leichtbau
  //   4: [], // Spezifische Steifigkeit $E/\\rho$ als Leichtbau-Kennzahl (Titan, CFK, Alu >
  // },

  // ── werk-2-1 (4 subGoals) ───────────────────────────────────────────────────
  // 'werk-2-1': {
  //   0: [], // Vickers (HV): Diamantpyramide, universell für hart und dünn; Brinell (HB): 
  //   1: [], // Rockwell (HRC): direkt ablesbar am Messgerät — schnellste Prüfmethode in de
  //   2: [], // Faustformel Stahl: $R_m \\approx 3{,}5 \\cdot HV$ in MPa — Härte korreliert
  //   3: [], // Prüfkraft und Probendicke müssen zusammen passen, sonst verfälscht Untergru
  // },

  // ── werk-2-2 (5 subGoals) ───────────────────────────────────────────────────
  // 'werk-2-2': {
  //   0: [], // Charpy-Versuch: Pendel bricht gekerbte Probe, $KV = mg(h_0 - h_1)$ in Joule
  //   1: [], // Hohe $KV$ → zäh, niedrige $KV$ → spröde
  //   2: [], // Kritischer Grenzwert Stahlbau: $KV \\geq 27$ J bei Einsatztemperatur
  //   3: [], // Übergangstemperatur $T_\\ddot{U}$: Abfall von $KV$ unterhalb → Sprödbruchge
  //   4: [], // Stahlbezeichnungen: J0 bei 0°C, J2 bei −20°C, K2 bei −40°C geprüft
  // },

  // ── werk-2-3 (6 subGoals) ───────────────────────────────────────────────────
  // 'werk-2-3': {
  //   0: [], // Ferrit (α, krz): weich/zäh; Austenit (γ, kfz): nur bei hoher T; Perlit (lam
  //   1: [], // Eutektoider Punkt: $0{,}83\\%$ C bei $723°$C — Austenit → Perlit
  //   2: [], // Härtbarkeit: $0{,}3$–$0{,}8\\%$ C nötig (zu wenig = kein Martensit, zu viel
  //   3: [], // Wärmebehandlungen: Glühen (Gefüge-Gleichgewicht), Härten (abschrecken), Ver
  //   4: [], // Vergüten: hohe Festigkeit + Zähigkeit durch angelassenen Martensit (z.B. 42
  //   5: [], // Langsames Abkühlen → Diffusion → Perlit; Schnelles Abschrecken → diffusions
  // },
}
