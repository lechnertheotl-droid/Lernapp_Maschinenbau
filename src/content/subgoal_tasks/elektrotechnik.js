// ═══════════════════════════════════════════════════════════════════════════
// Elektrotechnik — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// FORMAT: Objekt { lessonId: { subGoalIndex: [exercise, …] } } — mehrere
// Aufgaben pro Sub-Goal. Helfer aus ./_helpers (mc, ni, tf, matching, sorting,
// tag) bauen die Pflicht-Felder; `tag(..., pedagogy)` bzw. der letzte
// Positions-Parameter aller Helfer setzt das `pedagogy`-Feld
// `{ stage, subGoal, uses }` für den Matrix-Bauplan.
//
// Qualitätskontrakt:
//   - 4-Block-Erklärung: Ansatz / Rechnung / Probe / Typischer Fehler.
//   - ≥ 3 Hints, gestaffelt (Konzept → Methode → Schritt).
//   - MC mit ≥ 3 Optionen: `wrongAnswerExplanations` für JEDEN falschen Index.
//   - Frage enthält die Aufgabe selbst, OHNE `Sub-Goal "...":`-Prefix.
//   - Pedagogy-Tags optional bei elektrotechnik (nicht in BLUEPRINT_ENFORCED_TOPICS),
//     aber gesetzt, damit STATUS.md-Matrix-Zellen korrekt verfüllt werden.
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching } from './_helpers'

export const elektrotechnikSubGoalTasks = {

  // ───────────────────────────────────────────────────────────────────────
  // et-1-1 — Ohmsches Gesetz und Grundbegriffe  (5 subGoals)
  // 25 Matrix-Aufgaben (5 × 5: Sub-Goal × Stage), Typen rotieren je Sub-Goal.
  // Konzepte: ohm · einheiten-uia · reihe-r · parallel-r · r-prod-sum.
  // ───────────────────────────────────────────────────────────────────────
  'et-1-1': {

    // ═════════════════════════════════════════════════════════════════════
    // [0] Ohmsches Gesetz $U = R\cdot I$ — Dreieck-Merkhilfe (concept: ohm)
    // ═════════════════════════════════════════════════════════════════════
    0: [
      // Zeile 1: recognize · true-false · uses=[ohm]
      tf(
        'Wenn der Widerstand verdoppelt wird und die Spannung konstant bleibt, halbiert sich der Strom.',
        true,
        `**Ansatz:** Ohmsches Gesetz nach $I$ umstellen: $I = U/R$.

**Rechnung:** Mit $R' = 2R$ und $U$ konstant folgt $I' = U/(2R) = \\tfrac{1}{2}\\cdot U/R = I/2$. Der Strom halbiert sich also.

**Probe:** Bei $U = 12\\,\\text{V}$, $R = 100\\,\\Omega$ → $I = 0{,}12\\,\\text{A}$. Mit $R = 200\\,\\Omega$ → $I = 0{,}06\\,\\text{A} = I/2$ ✓.

**Typischer Fehler:** Annahme einer linearen Verdoppelung des Stroms ($I' = 2I$) — das wäre der Fall, wenn die Spannung verdoppelt würde, nicht der Widerstand.`,
        [
          'Stelle das Ohmsche Gesetz nach $I$ um.',
          'Setze $R_\\text{neu} = 2R$ in $I = U/R$ ein.',
          '$I_\\text{neu} = U/(2R)$ — vergleiche mit dem ursprünglichen $I$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['ohm'] },
      ),

      // Zeile 2: apply-guided · multiple-choice · uses=[ohm]
      mc(
        'An einem Widerstand $R = 8\\,\\Omega$ liegt eine Spannung $U = 24\\,\\text{V}$. Welcher Strom $I$ fließt?',
        ['$3\\,\\text{A}$', '$192\\,\\text{A}$', '$0{,}333\\,\\text{A}$', '$32\\,\\text{A}$'],
        0,
        `**Ansatz:** Ohmsches Gesetz nach $I$ umstellen: $I = U/R$.

**Rechnung:** $I = 24\\,\\text{V}/8\\,\\Omega = 3\\,\\text{A}$.

**Probe:** $U = R\\cdot I = 8 \\cdot 3 = 24\\,\\text{V}$ ✓.

**Typischer Fehler:** $U$ und $R$ multipliziert ($192$) statt dividiert.`,
        [
          'Welche Größe ist gesucht — $U$, $R$ oder $I$?',
          'Stelle $U = R\\cdot I$ nach $I$ um.',
          'Teile $24$ durch $8$.',
        ],
        {
          1: '$U \\cdot R = 192$ — Du hast die Werte multipliziert. Gesucht ist aber $U/R$.',
          2: '$R/U = 8/24 \\approx 0{,}333$ — du hast Zähler und Nenner vertauscht.',
          3: '$U + R = 32$ — eine Addition ist hier nicht zulässig (verschiedene Einheiten).',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['ohm'] },
      ),

      // Zeile 3: apply-independent · number-input · uses=[ohm]
      ni(
        'Ein Widerstand $R = 240\\,\\Omega$ liegt an einer Spannung $U = 12\\,\\text{V}$. Welcher Strom $I$ fließt? Antwort in Ampere.',
        0.05, 0.001, 'A',
        `**Ansatz:** Ohmsches Gesetz nach $I$ umgestellt: $I = U/R$.

**Rechnung:** $I = 12\\,\\text{V}/240\\,\\Omega = 0{,}05\\,\\text{A}$.

**Probe:** $R\\cdot I = 240 \\cdot 0{,}05 = 12\\,\\text{V}$ ✓.

**Typischer Fehler:** Antwort als $50$ statt $0{,}05$ angegeben — das wären $50\\,\\text{A}$, nicht $50\\,\\text{mA}$. Achte auf die geforderte Einheit (Ampere, nicht mA).`,
        [
          '$I = U/R$ — Spannung durch Widerstand.',
          'Alle Werte sind bereits in V und $\\Omega$ — keine Umrechnung nötig.',
          '$12/240 = 1/20 = 0{,}05$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['ohm'] },
      ),

      // Zeile 4: error-analysis · multiple-choice · uses=[ohm]
      mc(
        'Bei $U = 12\\,\\text{V}$ und $R = 240\\,\\Omega$ rechnet ein Lerner $I = 240/12 = 20\\,\\text{A}$. Welcher Fehler liegt vor?',
        [
          '$U$ und $R$ im Quotienten vertauscht — er rechnet $R/U$ statt $U/R$.',
          'Spannung in mV statt V eingesetzt.',
          'Strom in mA statt A angegeben.',
          '$P = U\\cdot I$ statt Ohm verwendet.',
        ],
        0,
        `**Ansatz:** Ohmsches Gesetz korrekt: $I = U/R$. Hier wurde $R/U$ statt $U/R$ gebildet.

**Rechnung:** Korrekt $I = 12/240 = 0{,}05\\,\\text{A}$. Lerner-Wert $240/12 = 20\\,\\text{A}$ — Zähler und Nenner vertauscht.

**Probe:** Größenordnungs-Check: An $240\\,\\Omega$ können bei nur $12\\,\\text{V}$ niemals $20\\,\\text{A}$ fließen ($U$ wäre dann $240\\cdot 20 = 4800\\,\\text{V}$).

**Typischer Fehler:** Im "U-R-I-Dreieck" abgedeckt → falscher Bruch herausgelesen.`,
        [
          'Setze die Lerner-Rechnung in $U = R\\cdot I$ ein und prüfe, ob die Spannung passt.',
          'Vergleiche das Lerner-Ergebnis mit $I = U/R$.',
          'Welche Reihenfolge im Bruch hat er gewählt?',
        ],
        {
          1: 'Beide Werte sind in V bzw. $\\Omega$, keine mV-Umrechnung nötig — und sie würde das Ergebnis nur weiter verschieben, nicht den Faktor $400$ erklären.',
          2: 'Der Lerner gibt $20\\,\\text{A}$ an, also fehlt es nicht an einer mA-Umrechnung.',
          3: 'Die Leistungsformel $P = U\\cdot I$ ergäbe Watt, nicht Ampere — der Lerner hat formal $U/R$ angesetzt, nur Zähler und Nenner getauscht.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['ohm'] },
      ),

      // Zeile 5: transfer · number-input · uses=[ohm]
      ni(
        'Ein Heizdraht zieht bei $U = 230\\,\\text{V}$ einen Strom $I = 5\\,\\text{A}$. Welcher Widerstand $R$ liegt vor? Antwort in Ohm.',
        46, 0.5, 'Ω',
        `**Ansatz:** Ohmsches Gesetz nach $R$ umgestellt: $R = U/I$.

**Rechnung:** $R = 230\\,\\text{V}/5\\,\\text{A} = 46\\,\\Omega$.

**Probe:** $U = R\\cdot I = 46 \\cdot 5 = 230\\,\\text{V}$ ✓.

**Typischer Fehler:** $R = U\\cdot I = 1150$ angesetzt (Multiplikation statt Division) — das wäre die Leistung $P = 1150\\,\\text{W}$, nicht der Widerstand.`,
        [
          'Welche Größe ist gesucht? Was ist gegeben?',
          'Stelle $U = R\\cdot I$ nach $R$ um: $R = U/I$.',
          '$230/5 = 46$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['ohm'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [1] Einheiten-Konsistenz V/A/Ω (concept: einheiten-uia)
    // ═════════════════════════════════════════════════════════════════════
    1: [
      // Zeile 6: recognize · true-false · uses=[einheiten-uia]
      tf(
        '$5\\,\\text{mA}$ entsprechen $0{,}005\\,\\text{A}$.',
        true,
        `**Ansatz:** Vorsatz "milli-" bedeutet $10^{-3}$, also $1\\,\\text{mA} = 0{,}001\\,\\text{A}$.

**Rechnung:** $5\\,\\text{mA} = 5 \\cdot 10^{-3}\\,\\text{A} = 0{,}005\\,\\text{A}$.

**Probe:** Rückwärts $0{,}005\\,\\text{A} \\cdot 1000 = 5\\,\\text{mA}$ ✓.

**Typischer Fehler:** Komma um eine Stelle falsch verschoben — $0{,}05\\,\\text{A}$ wäre $50\\,\\text{mA}$.`,
        [
          'milli- (m) heißt: durch $1000$ teilen, um in die Basiseinheit zu kommen.',
          '$5\\,\\text{mA} = 5/1000\\,\\text{A}$.',
          'Drei Nachkomma-Nullen: $0{,}005$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['einheiten-uia'] },
      ),

      // Zeile 7: apply-guided · multiple-choice · uses=[einheiten-uia]
      mc(
        'Wie viele Ohm sind $2{,}2\\,\\text{k}\\Omega$?',
        ['$2200\\,\\Omega$', '$220\\,\\Omega$', '$22000\\,\\Omega$', '$0{,}0022\\,\\Omega$'],
        0,
        `**Ansatz:** Vorsatz "kilo-" (k) bedeutet $10^{3}$, also $1\\,\\text{k}\\Omega = 1000\\,\\Omega$.

**Rechnung:** $2{,}2\\,\\text{k}\\Omega = 2{,}2 \\cdot 1000\\,\\Omega = 2200\\,\\Omega$.

**Probe:** Rückwärts $2200/1000 = 2{,}2\\,\\text{k}\\Omega$ ✓.

**Typischer Fehler:** Komma nur um eine statt drei Stellen verschoben.`,
        [
          'Was bedeutet der Vorsatz "k" (kilo)?',
          'k$\\Omega$ → $\\Omega$: mit $1000$ multiplizieren.',
          '$2{,}2 \\cdot 1000 = 2200$.',
        ],
        {
          1: 'Du hast nur mit $100$ multipliziert. "kilo-" ist aber $10^{3} = 1000$.',
          2: 'Du hast mit $10000$ multipliziert. "kilo-" ist nur $1000$, nicht $10^{4}$.',
          3: 'Du hast durch $1000$ geteilt statt multipliziert — das ist die Umrechnung in MΩ, nicht in $\\Omega$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['einheiten-uia'] },
      ),

      // Zeile 8: apply-independent · number-input · uses=[einheiten-uia]
      ni(
        'An einem Widerstand $R = 3\\,\\text{k}\\Omega$ liegt $U = 15\\,\\text{V}$. Welcher Strom fließt? Antwort in mA.',
        5, 0.05, 'mA',
        `**Ansatz:** Erst $R$ in $\\Omega$ umrechnen, dann Ohmsches Gesetz $I = U/R$, am Schluss in mA umrechnen.

**Rechnung:** $R = 3\\,\\text{k}\\Omega = 3000\\,\\Omega$. $I = 15/3000\\,\\text{A} = 0{,}005\\,\\text{A} = 5\\,\\text{mA}$.

**Probe:** $U = R\\cdot I = 3000 \\cdot 0{,}005 = 15\\,\\text{V}$ ✓.

**Typischer Fehler:** $R$ als $3$ in die Formel gesteckt → $I = 15/3 = 5\\,\\text{A} = 5000\\,\\text{mA}$ — Faktor $1000$ zu groß.`,
        [
          'Schritt 1: $\\text{k}\\Omega$ in $\\Omega$ umrechnen.',
          'Schritt 2: $I = U/R$ in der SI-Einheit Ampere ausrechnen.',
          'Schritt 3: A in mA = mit $1000$ multiplizieren.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['einheiten-uia'] },
      ),

      // Zeile 9: error-analysis · multiple-choice · uses=[einheiten-uia]
      mc(
        'Bei $R = 470\\,\\Omega$ und $I = 50\\,\\text{mA}$ rechnet ein Lerner $U = R\\cdot I = 470 \\cdot 50 = 23500\\,\\text{V}$. Welcher Fehler liegt vor?',
        [
          'mA wurde nicht in A umgerechnet — korrekt sind $470 \\cdot 0{,}05 = 23{,}5\\,\\text{V}$.',
          'Die Formel $U = R\\cdot I$ ist falsch — richtig wäre $U = R/I$.',
          '$R$ wurde in $\\text{k}\\Omega$ statt $\\Omega$ angenommen.',
          '$U$ und $I$ wurden vertauscht.',
        ],
        0,
        `**Ansatz:** $U = R\\cdot I$ ist korrekt — der Fehler steckt in der Stromeinheit.

**Rechnung:** $50\\,\\text{mA} = 0{,}05\\,\\text{A}$, also $U = 470 \\cdot 0{,}05 = 23{,}5\\,\\text{V}$. Lerner setzte $50$ direkt ein → Faktor $1000$ zu groß.

**Probe:** Größenordnung: $23500\\,\\text{V}$ wäre Hochspannung — bei einem $470\\,\\Omega$-Widerstand und Bauteilstrom unrealistisch.

**Typischer Fehler:** "Einheiten ignoriert" — der Klassiker bei mA, kΩ, mV.`,
        [
          'Setze beide Werte mit Einheiten in die Formel ein.',
          'Welche SI-Einheit verlangt $U = R\\cdot I$ für $I$?',
          'Wandle $50\\,\\text{mA}$ in A um.',
        ],
        {
          1: 'Die Formel $U = R\\cdot I$ ist korrekt; ein anderer Faktor $1000$ erklärt die Diskrepanz.',
          2: '$R$ ist mit $\\Omega$ angegeben — keine k$\\Omega$. Der Faktor-1000-Fehler kommt aus $I$, nicht $R$.',
          3: 'Die Werte $470$ und $50$ wurden in der Reihenfolge $R\\cdot I$ verwendet — eine Vertauschung würde dasselbe Produkt ergeben (Multiplikation ist kommutativ).',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['einheiten-uia'] },
      ),

      // Zeile 10: transfer · matching · uses=[einheiten-uia]
      matching(
        'Ordne jede Größe ihrer richtigen Umrechnung in die Basiseinheit (oder umgekehrt) zu.',
        [
          { left: '$1{,}5\\,\\text{k}\\Omega$', right: '$1500\\,\\Omega$' },
          { left: '$250\\,\\text{mA}$',         right: '$0{,}25\\,\\text{A}$' },
          { left: '$12\\,\\text{mV}$',          right: '$0{,}012\\,\\text{V}$' },
          { left: '$0{,}05\\,\\text{A}$',       right: '$50\\,\\text{mA}$' },
        ],
        `**Ansatz:** Vorsätze sicher kennen: kilo- = $10^{3}$, milli- = $10^{-3}$.

**Rechnung:**
- $1{,}5\\,\\text{k}\\Omega = 1{,}5 \\cdot 1000\\,\\Omega = 1500\\,\\Omega$.
- $250\\,\\text{mA} = 250/1000\\,\\text{A} = 0{,}25\\,\\text{A}$.
- $12\\,\\text{mV} = 12/1000\\,\\text{V} = 0{,}012\\,\\text{V}$.
- $0{,}05\\,\\text{A} = 0{,}05 \\cdot 1000\\,\\text{mA} = 50\\,\\text{mA}$.

**Probe:** Jeder Wert hin- und zurückgewandelt ergibt wieder den Ausgangswert.

**Typischer Fehler:** Bei "milli" mit $10^{3}$ multiplizieren statt mit $10^{-3}$ — Vorsatz-Richtung verwechselt.`,
        [
          'kilo (k) = $10^{3}$ → mit $1000$ multiplizieren beim Wechsel in die Basiseinheit.',
          'milli (m) = $10^{-3}$ → durch $1000$ teilen beim Wechsel in die Basiseinheit.',
          'Vom kleineren zum größeren Vielfachen → Wert wird kleiner; umgekehrt → größer.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['einheiten-uia'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [2] Reihenschaltung — Widerstände addieren (concept: reihe-r)
    // ═════════════════════════════════════════════════════════════════════
    2: [
      // Zeile 11: recognize · true-false · uses=[reihe-r]
      tf(
        'In einer Reihenschaltung von Widerständen ist der Strom in jedem Widerstand gleich groß.',
        true,
        `**Ansatz:** In Reihe gibt es nur einen Strompfad — derselbe Ladungsstrom durchquert nacheinander alle Widerstände.

**Rechnung:** Aus dem Knotensatz folgt $I_1 = I_2 = \\ldots = I_n = I$. Die Spannungen $U_i = R_i \\cdot I$ sind dagegen unterschiedlich (jeweils proportional zum Einzelwiderstand).

**Probe:** Bei $R_1 = 100\\,\\Omega$, $R_2 = 200\\,\\Omega$ in Reihe an $U = 6\\,\\text{V}$: $R_\\text{ges} = 300\\,\\Omega$, $I = 0{,}02\\,\\text{A}$ — derselbe Wert für beide Widerstände ✓.

**Typischer Fehler:** "Strom teilt sich auf" — das gilt für Parallelschaltung, nicht für Reihe.`,
        [
          'Wie viele Strompfade gibt es in einer Reihenschaltung?',
          'Knotensatz: An jedem Punkt fließt soviel hinein wie heraus.',
          'Strom überall gleich, Spannungen teilen sich auf.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['reihe-r'] },
      ),

      // Zeile 12: apply-guided · multiple-choice · uses=[reihe-r]
      mc(
        'Drei Widerstände $R_1 = 100\\,\\Omega$, $R_2 = 200\\,\\Omega$, $R_3 = 300\\,\\Omega$ sind in Reihe geschaltet. Wie groß ist der Gesamtwiderstand?',
        ['$600\\,\\Omega$', '$200\\,\\Omega$', '$54{,}5\\,\\Omega$', '$50\\,\\Omega$'],
        0,
        `**Ansatz:** Reihenschaltung → einfache Addition: $R_\\text{ges} = R_1 + R_2 + R_3$.

**Rechnung:** $R_\\text{ges} = 100 + 200 + 300 = 600\\,\\Omega$.

**Probe:** Größenordnungs-Check: Reihen-Gesamtwiderstand ist immer **größer** als jeder Einzelwiderstand — $600 > 300$ ✓.

**Typischer Fehler:** Parallelschaltungs-Formel angewendet ($\\approx 54{,}5\\,\\Omega$).`,
        [
          'Welche Formel gilt für die Reihenschaltung?',
          'Einfach addieren — kein Kehrwert.',
          '$100 + 200 + 300 = 600$.',
        ],
        {
          1: '$200\\,\\Omega$ ist nur das arithmetische Mittel — Reihen-Gesamtwiderstand summiert alle Werte.',
          2: '$54{,}5\\,\\Omega$ ist das Ergebnis der Parallelschaltung ($1/(1/100 + 1/200 + 1/300) = 600/11 \\approx 54{,}5$). Hier liegt aber Reihe vor.',
          3: '$50\\,\\Omega$ entspricht keiner sinnvollen Schaltung — vermutlich einfach die kleinste Hälfte geraten.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['reihe-r'] },
      ),

      // Zeile 13: apply-independent · number-input · uses=[reihe-r]
      ni(
        'Zwei Widerstände $R_1 = 2{,}2\\,\\text{k}\\Omega$ und $R_2 = 4{,}7\\,\\text{k}\\Omega$ sind in Reihe geschaltet. Wie groß ist $R_\\text{ges}$ in k$\\Omega$?',
        6.9, 0.05, 'kΩ',
        `**Ansatz:** Reihenschaltung addiert Widerstände direkt — die k-Einheit darf hier mitgenommen werden, da beide Werte in derselben Einheit angegeben sind.

**Rechnung:** $R_\\text{ges} = 2{,}2\\,\\text{k}\\Omega + 4{,}7\\,\\text{k}\\Omega = 6{,}9\\,\\text{k}\\Omega$.

**Probe:** In Ohm umgerechnet: $2200 + 4700 = 6900\\,\\Omega = 6{,}9\\,\\text{k}\\Omega$ ✓.

**Typischer Fehler:** Werte vertauscht subtrahiert ($4{,}7 - 2{,}2 = 2{,}5$) — bei Reihe wird nie subtrahiert.`,
        [
          'In Reihe addieren sich Widerstände.',
          'Beide Werte sind in k$\\Omega$ — direkt addieren, k$\\Omega$ bleibt als Einheit erhalten.',
          '$2{,}2 + 4{,}7 = 6{,}9$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['reihe-r'] },
      ),

      // Zeile 14: error-analysis · multiple-choice · uses=[reihe-r]
      mc(
        'Aufgabe: $R_1 = 100\\,\\Omega$, $R_2 = 400\\,\\Omega$ in Reihe — gesucht $R_\\text{ges}$. Ein Lerner rechnet $\\frac{1}{R_\\text{ges}} = \\frac{1}{100} + \\frac{1}{400} = \\frac{5}{400}$ und erhält $R_\\text{ges} = 80\\,\\Omega$. Welcher Fehler liegt vor?',
        [
          'Parallelschaltungs-Formel statt Reihen-Formel verwendet.',
          'Hauptnenner falsch gebildet.',
          'Statt $R_1 + R_2$ wurde $R_1 \\cdot R_2$ gerechnet.',
          '$R_\\text{ges}$ ist immer der kleinere der beiden Widerstände.',
        ],
        0,
        `**Ansatz:** In Reihe addieren sich Widerstände direkt — der Lerner hat aber Kehrwerte addiert (Parallel-Formel).

**Rechnung:** Korrekt $R_\\text{ges} = 100 + 400 = 500\\,\\Omega$. Lerner-Wert $80\\,\\Omega$ entspricht der Parallel-Schaltung ($\\frac{100\\cdot 400}{500} = 80$).

**Probe:** Größenordnung: Reihen-$R$ muss **größer** als der größte Einzelwert sein. $80 < 400$ — also kann es keine Reihe sein.

**Typischer Fehler:** Reihe und Parallel verwechselt — passiert besonders, wenn die Schaltskizze fehlt.`,
        [
          'Welche Formel hat der Lerner tatsächlich angesetzt?',
          'Vergleiche das Ergebnis mit $R_1 + R_2$ und mit $R_1 R_2/(R_1+R_2)$.',
          'Welche Schaltungstyp passt zu Kehrwert-Addition?',
        ],
        {
          1: 'Die Bruchrechnung selbst ist korrekt: $1/100 + 1/400 = 4/400 + 1/400 = 5/400$, Kehrwert $= 80$. Der Fehler liegt davor: Parallel- statt Reihen-Ansatz.',
          2: 'Die Formel $R_1 \\cdot R_2 = 40000$ wurde hier nicht verwendet — der Lerner hat Kehrwerte addiert.',
          3: 'Der Reihen-Gesamtwiderstand ist immer **größer** als jeder Einzelwiderstand, nicht kleiner. Das Problem ist die falsche Formelwahl.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['reihe-r'] },
      ),

      // Zeile 15: transfer · number-input · uses=[reihe-r]
      ni(
        'Drei Widerstände $R_1 = 47\\,\\Omega$, $R_2 = 68\\,\\Omega$, $R_3 = 100\\,\\Omega$ sind in Reihe an einer Spannungsquelle $U = 9\\,\\text{V}$ angeschlossen. Welcher Strom $I$ fließt? Antwort in mA.',
        41.86, 0.1, 'mA',
        `**Ansatz:** Reihe → Widerstände addieren, dann $I = U/R_\\text{ges}$.

**Rechnung:** $R_\\text{ges} = 47 + 68 + 100 = 215\\,\\Omega$. $I = 9\\,\\text{V}/215\\,\\Omega \\approx 0{,}04186\\,\\text{A} = 41{,}86\\,\\text{mA}$.

**Probe:** Spannungssumme: $U_1 + U_2 + U_3 = (47 + 68 + 100) \\cdot 0{,}04186 \\approx 9{,}0\\,\\text{V}$ ✓ (Maschensatz).

**Typischer Fehler:** Antwort als $0{,}042$ statt $41{,}86$ — die geforderte Einheit (mA) übersehen.`,
        [
          'Schritt 1: Reihen-Gesamtwiderstand $R_\\text{ges} = R_1 + R_2 + R_3$.',
          'Schritt 2: $I = U/R_\\text{ges}$ in Ampere.',
          'Schritt 3: A → mA mit $1000$ multiplizieren.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['reihe-r', 'ohm'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [3] Parallelschaltung — Kehrwerte addieren (concept: parallel-r)
    // ═════════════════════════════════════════════════════════════════════
    3: [
      // Zeile 16: recognize · true-false · uses=[parallel-r]
      tf(
        'Bei einer Parallelschaltung von Widerständen liegt an allen Widerständen die gleiche Spannung an.',
        true,
        `**Ansatz:** In Parallel-Schaltungen sind alle Widerstände an dieselben zwei Knoten angeschlossen — die Knoten haben jeweils ein eindeutiges Potenzial.

**Rechnung:** Aus $U_\\text{Knoten\\,A} - U_\\text{Knoten\\,B} = U$ für jeden Zweig folgt $U_1 = U_2 = \\ldots = U_n = U$.

**Probe:** $R_1 = 100\\,\\Omega$, $R_2 = 200\\,\\Omega$ parallel an $U = 12\\,\\text{V}$ — beide Widerstände sehen $12\\,\\text{V}$, Ströme sind verschieden ($0{,}12\\,\\text{A}$ bzw. $0{,}06\\,\\text{A}$).

**Typischer Fehler:** "Spannung teilt sich auf" — das gilt für Reihe, nicht für Parallel.`,
        [
          'An welche Knoten sind parallele Zweige angeschlossen?',
          'Eine Spannung ist eine Potenzialdifferenz zwischen zwei Knoten.',
          'Gleiche Knoten → gleiche Spannung an allen Zweigen.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['parallel-r'] },
      ),

      // Zeile 17: apply-guided · multiple-choice · uses=[parallel-r]
      mc(
        'Drei gleiche Widerstände $R = 30\\,\\Omega$ werden parallel geschaltet. Wie groß ist der Gesamtwiderstand?',
        ['$10\\,\\Omega$', '$90\\,\\Omega$', '$30\\,\\Omega$', '$0{,}1\\,\\Omega$'],
        0,
        `**Ansatz:** $n$ gleiche Widerstände parallel: $R_\\text{ges} = R/n$.

**Rechnung:** $\\dfrac{1}{R_\\text{ges}} = \\dfrac{3}{30} = \\dfrac{1}{10} \\Rightarrow R_\\text{ges} = 10\\,\\Omega$.

**Probe:** Plausibilität: Parallel-Resultat muss kleiner als der kleinste Einzelwert sein. $10 < 30$ ✓.

**Typischer Fehler:** Wie Reihe addiert ($30 + 30 + 30 = 90$).`,
        [
          'Bei Parallelschaltung addieren sich die **Kehrwerte**.',
          '$\\dfrac{1}{R_\\text{ges}} = \\dfrac{1}{30} + \\dfrac{1}{30} + \\dfrac{1}{30} = \\dfrac{3}{30}$.',
          'Kehrwert nehmen: $R_\\text{ges} = 30/3$.',
        ],
        {
          1: '$90\\,\\Omega$ wäre die Reihensumme — Parallel-Resultat ist immer kleiner als jeder Einzelwiderstand.',
          2: '$30\\,\\Omega$ ist der Wert eines einzelnen Widerstands — die Parallelschaltung verkleinert ihn.',
          3: '$0{,}1$ ist die Summe der Kehrwerte ($3/30 = 0{,}1$) — du hast vergessen, am Ende den Kehrwert zu nehmen.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['parallel-r'] },
      ),

      // Zeile 18: apply-independent · number-input · uses=[parallel-r]
      ni(
        'Vier gleiche Widerstände $R = 100\\,\\Omega$ werden parallel geschaltet. Wie groß ist $R_\\text{ges}$ in Ohm?',
        25, 0.1, 'Ω',
        `**Ansatz:** $n$ gleiche Widerstände parallel ergeben $R_\\text{ges} = R/n$.

**Rechnung:** $\\dfrac{1}{R_\\text{ges}} = \\dfrac{4}{100} \\Rightarrow R_\\text{ges} = 100/4 = 25\\,\\Omega$.

**Probe:** $25 < 100$ — Parallel-Resultat kleiner als Einzelwiderstand ✓. Ohmscher Test: bei $U = 10\\,\\text{V}$ fließt durch jeden Zweig $0{,}1\\,\\text{A}$, Gesamtstrom $0{,}4\\,\\text{A}$, also $R_\\text{ges} = 10/0{,}4 = 25\\,\\Omega$ ✓.

**Typischer Fehler:** $R/n^{2} = 6{,}25$ angenommen oder Kehrwert vergessen ($1/R_\\text{ges} = 0{,}04$).`,
        [
          'Wie ändert sich $R_\\text{ges}$, wenn $n$ gleiche Widerstände parallelgeschaltet werden?',
          'Setze $1/R_\\text{ges} = n/R$ an.',
          '$1/R_\\text{ges} = 4/100$ → $R_\\text{ges} = 25$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['parallel-r'] },
      ),

      // Zeile 19: error-analysis · multiple-choice · uses=[parallel-r]
      mc(
        'Aufgabe: $R_1 = 200\\,\\Omega$ und $R_2 = 600\\,\\Omega$ parallel — gesucht $R_\\text{ges}$. Ein Lerner rechnet korrekt $\\frac{1}{R_\\text{ges}} = \\frac{1}{200} + \\frac{1}{600} \\approx 0{,}00667$ und gibt als Ergebnis $R_\\text{ges} = 0{,}00667\\,\\Omega$ an. Welcher Fehler liegt vor?',
        [
          'Vergessen, am Ende den Kehrwert zu bilden — angegeben wurde $1/R_\\text{ges}$, nicht $R_\\text{ges}$.',
          'Beide Brüche falsch addiert.',
          'Parallel- mit Reihenformel verwechselt.',
          '$R_\\text{ges}$ als arithmetisches Mittel angesetzt.',
        ],
        0,
        `**Ansatz:** Korrekt wäre $1/R_\\text{ges} = 4/600 = 1/150$, also $R_\\text{ges} = 150\\,\\Omega$. Der Lerner hat $1/R_\\text{ges} \\approx 0{,}00667$ als Endergebnis hingeschrieben.

**Rechnung:** Bruchrechnung des Lerners ist richtig: $1/200 + 1/600 = 3/600 + 1/600 = 4/600 \\approx 0{,}00667$. Kehrwert vergessen → korrekt: $R_\\text{ges} = 1/0{,}00667 \\approx 150\\,\\Omega$.

**Probe:** Größenordnung: Ein Widerstand von $0{,}007\\,\\Omega$ bei zwei parallelen Widerständen $\\geq 200\\,\\Omega$ ist unmöglich. Parallel-Resultat liegt zwischen $0$ und dem kleinsten Einzelwert, hier also $< 200\\,\\Omega$, aber sicher nicht im Milliohm-Bereich.

**Typischer Fehler:** Letzten Schritt der Parallel-Formel vergessen.`,
        [
          'Vergleiche den Lerner-Wert mit dem kleinsten Einzelwiderstand.',
          'Was steht links in der Parallelformel — $R_\\text{ges}$ oder $1/R_\\text{ges}$?',
          'Welche Operation ist nach der Kehrwert-Summe noch nötig?',
        ],
        {
          1: 'Die Brüche wurden korrekt addiert: $1/200 + 1/600 = 4/600$. Der Fehler kommt erst danach.',
          2: 'Reihen-Formel wäre $R_1 + R_2 = 800$. Das Lerner-Ergebnis $0{,}00667$ kann daraus nicht entstehen.',
          3: 'Mittelwert wäre $(200+600)/2 = 400$. Das Lerner-Ergebnis $0{,}00667$ folgt daraus nicht.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['parallel-r'] },
      ),

      // Zeile 20: transfer · number-input · uses=[parallel-r]
      ni(
        'Drei Widerstände $R_1 = 100\\,\\Omega$, $R_2 = 200\\,\\Omega$ und $R_3 = 200\\,\\Omega$ sind parallel geschaltet. Wie groß ist $R_\\text{ges}$ in Ohm?',
        50, 0.5, 'Ω',
        `**Ansatz:** Parallelschaltung von drei Widerständen — Kehrwerte addieren, dann Kehrwert nehmen.

**Rechnung:** $\\dfrac{1}{R_\\text{ges}} = \\dfrac{1}{100} + \\dfrac{1}{200} + \\dfrac{1}{200} = \\dfrac{2}{200} + \\dfrac{1}{200} + \\dfrac{1}{200} = \\dfrac{4}{200} = \\dfrac{1}{50}$. Also $R_\\text{ges} = 50\\,\\Omega$.

**Probe:** $50 < 100$ — kleiner als der kleinste Einzelwert ✓. Stromcheck bei $U = 10\\,\\text{V}$: $I_1 = 0{,}1$, $I_2 = 0{,}05$, $I_3 = 0{,}05$, $I = 0{,}2\\,\\text{A}$ → $R_\\text{ges} = 10/0{,}2 = 50\\,\\Omega$ ✓.

**Typischer Fehler:** Hauptnenner $200$ vergessen, $1/100 + 1/200 + 1/200 = 1/500$ angenommen.`,
        [
          'Bilde den Hauptnenner ($200$) für alle drei Brüche.',
          '$1/100 = 2/200$ — beide Hälften zusammenzählen.',
          'Summe der Kehrwerte $= 4/200 = 1/50$, Kehrwert $= 50$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['parallel-r'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [4] Spezialfall 2 Parallelwiderstände — Produkt durch Summe (r-prod-sum)
    // ═════════════════════════════════════════════════════════════════════
    4: [
      // Zeile 21: recognize · true-false · uses=[r-prod-sum]
      tf(
        'Für genau zwei parallel geschaltete Widerstände gilt $R_\\text{ges} = \\dfrac{R_1 \\cdot R_2}{R_1 + R_2}$.',
        true,
        `**Ansatz:** Aus $\\dfrac{1}{R_\\text{ges}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}$ ergibt sich nach Hauptnenner-Bildung die "Produkt-durch-Summe"-Formel.

**Rechnung:** $\\dfrac{1}{R_\\text{ges}} = \\dfrac{R_2 + R_1}{R_1 R_2}$, Kehrwert: $R_\\text{ges} = \\dfrac{R_1 R_2}{R_1 + R_2}$.

**Probe:** Für $R_1 = R_2 = R$: $R_\\text{ges} = R^{2}/(2R) = R/2$ ✓ (klassischer Spezialfall).

**Typischer Fehler:** Formel auf drei oder mehr Widerstände angewendet — gilt **nur** für genau zwei.`,
        [
          'Wie sieht $1/R_\\text{ges}$ als Bruch mit Hauptnenner aus?',
          'Forme $1/R_1 + 1/R_2$ zu einem einzigen Bruch um.',
          'Kehrwert nehmen → "Produkt durch Summe".',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['r-prod-sum'] },
      ),

      // Zeile 22: apply-guided · multiple-choice · uses=[r-prod-sum]
      mc(
        'Zwei Widerstände $R_1 = 12\\,\\Omega$ und $R_2 = 4\\,\\Omega$ werden parallel geschaltet. Wie groß ist der Gesamtwiderstand?',
        ['$3\\,\\Omega$', '$16\\,\\Omega$', '$8\\,\\Omega$', '$48\\,\\Omega$'],
        0,
        `**Ansatz:** Produkt-durch-Summe: $R_\\text{ges} = \\dfrac{R_1 R_2}{R_1 + R_2}$.

**Rechnung:** $R_\\text{ges} = \\dfrac{12 \\cdot 4}{12 + 4} = \\dfrac{48}{16} = 3\\,\\Omega$.

**Probe:** Plausibilität: $3 < 4$ — kleiner als der kleinste Einzelwiderstand ✓. Kehrwert-Test: $1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3$, Kehrwert $= 3$ ✓.

**Typischer Fehler:** Reihen-Formel $R_1 + R_2 = 16$ — gilt nicht für Parallel.`,
        [
          'Welche Formel passt für genau zwei Parallelwiderstände?',
          '$R_\\text{ges} = R_1 R_2 / (R_1 + R_2)$.',
          'Zähler: $12 \\cdot 4 = 48$. Nenner: $12 + 4 = 16$.',
        ],
        {
          1: '$16\\,\\Omega$ ist die Reihen-Summe $R_1 + R_2$ — bei Parallel niemals zulässig.',
          2: '$8\\,\\Omega$ ist das arithmetische Mittel — keine korrekte Schaltungs-Formel.',
          3: '$48\\,\\Omega$ ist nur das Produkt der beiden — du hast vergessen, durch die Summe zu teilen.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['r-prod-sum'] },
      ),

      // Zeile 23: apply-independent · number-input · uses=[r-prod-sum]
      ni(
        'Zwei Widerstände $R_1 = 10\\,\\text{k}\\Omega$ und $R_2 = 15\\,\\text{k}\\Omega$ sind parallel geschaltet. Wie groß ist $R_\\text{ges}$ in k$\\Omega$?',
        6, 0.05, 'kΩ',
        `**Ansatz:** Produkt-durch-Summe — die k$\\Omega$-Einheit darf direkt mitgezogen werden, da beide Werte in derselben Einheit angegeben sind.

**Rechnung:** $R_\\text{ges} = \\dfrac{10 \\cdot 15}{10 + 15} = \\dfrac{150}{25} = 6\\,\\text{k}\\Omega$.

**Probe:** $6 < 10$ — kleiner als der kleinste Einzelwiderstand ✓. In Ohm gerechnet: $\\dfrac{10000 \\cdot 15000}{25000} = 6000\\,\\Omega = 6\\,\\text{k}\\Omega$ ✓.

**Typischer Fehler:** Mit gemischten Einheiten gerechnet (z. B. einer in $\\Omega$, anderer in k$\\Omega$) → Ergebnis um Faktor $1000$ daneben.`,
        [
          'Beide Werte sind in k$\\Omega$ — du kannst die Einheit als gemeinsamen Faktor stehen lassen.',
          'Zähler $= R_1 \\cdot R_2 = 150$, Nenner $= R_1 + R_2 = 25$.',
          '$150/25 = 6$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['r-prod-sum'] },
      ),

      // Zeile 24: error-analysis · multiple-choice · uses=[r-prod-sum]
      mc(
        'Aufgabe: $R_1 = 4\\,\\Omega$ und $R_2 = 12\\,\\Omega$ parallel. Ein Lerner schreibt versehentlich $R_\\text{ges} = \\dfrac{R_1 + R_2}{R_1 \\cdot R_2}$ statt $\\dfrac{R_1 \\cdot R_2}{R_1 + R_2}$. Welches (falsche) Ergebnis erhält er?',
        ['$\\approx 0{,}333\\,\\Omega$', '$3\\,\\Omega$', '$16\\,\\Omega$', '$48\\,\\Omega$'],
        0,
        `**Ansatz:** Lerner setzt Bruch umgekehrt an, also $\\dfrac{4+12}{4\\cdot 12}$ — er erhält den **Kehrwert** des korrekten Ergebnisses.

**Rechnung:** Lerner-Wert: $\\dfrac{16}{48} = \\dfrac{1}{3} \\approx 0{,}333\\,\\Omega$. Korrekt wäre $\\dfrac{48}{16} = 3\\,\\Omega$.

**Probe:** Größenordnungs-Check: $0{,}333\\,\\Omega \\ll 4\\,\\Omega$ — selbst Parallel-Resultat darf nicht kleiner als der nächste sinnvolle physikalische Wert sein. Hier ist $0{,}333$ zwar mathematisch < kleinster Einzelwert, aber die Formel selbst ist falsch herum.

**Typischer Fehler:** Bruch beim Aufschreiben gespiegelt — passiert oft beim hastigen Umstellen oder bei "vertauschten Indizes" in der Skizze.`,
        [
          'Setze $4$ und $12$ in die vom Lerner verwendete Formel ein.',
          'Zähler $= 4 + 12 = 16$, Nenner $= 4\\cdot 12 = 48$.',
          'Vergleiche das Ergebnis mit dem korrekten ($48/16 = 3$) — siehst du den Kehrwert?',
        ],
        {
          1: '$3\\,\\Omega$ ist das **korrekte** Ergebnis (Produkt durch Summe). Frage zielt aber auf den Lerner-Wert nach falschem Bruch.',
          2: '$16\\,\\Omega$ ist nur die Summe $R_1 + R_2$ — das wäre der Zähler im falschen Bruch, ohne Division.',
          3: '$48\\,\\Omega$ ist nur das Produkt $R_1 \\cdot R_2$ — das wäre der Nenner im falschen Bruch, ohne Division.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['r-prod-sum'] },
      ),

      // Zeile 25: transfer · number-input · uses=[r-prod-sum]
      ni(
        'Welcher zweite Widerstand $R_2$ muss zu $R_1 = 300\\,\\Omega$ parallel geschaltet werden, damit ein Gesamtwiderstand $R_\\text{ges} = 120\\,\\Omega$ entsteht? Antwort in Ohm.',
        200, 0.5, 'Ω',
        `**Ansatz:** Produkt-durch-Summe nach $R_2$ umstellen oder direkt über die Kehrwert-Formel: $\\dfrac{1}{R_2} = \\dfrac{1}{R_\\text{ges}} - \\dfrac{1}{R_1}$.

**Rechnung:** $\\dfrac{1}{R_2} = \\dfrac{1}{120} - \\dfrac{1}{300} = \\dfrac{5}{600} - \\dfrac{2}{600} = \\dfrac{3}{600} = \\dfrac{1}{200}$. Also $R_2 = 200\\,\\Omega$.

**Probe:** $\\dfrac{300 \\cdot 200}{300 + 200} = \\dfrac{60000}{500} = 120\\,\\Omega$ ✓.

**Typischer Fehler:** $1/R_1 - 1/R_\\text{ges}$ statt $1/R_\\text{ges} - 1/R_1$ — liefert negativen Wert, weil $1/R_\\text{ges} > 1/R_1$ (denn $R_\\text{ges} < R_1$).`,
        [
          'Nutze $1/R_\\text{ges} = 1/R_1 + 1/R_2$ und stelle nach $R_2$ um.',
          'Hauptnenner für $1/120$ und $1/300$ ist $600$ — bring beide Brüche darauf.',
          '$5/600 - 2/600 = 3/600 = 1/200$, Kehrwert $= 200$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['r-prod-sum'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // et-1-2 — Kirchhoffsche Gesetze  (4 subGoals)
  // 20 Matrix-Aufgaben (4 × 5: Sub-Goal × Stage), Typen rotieren je Sub-Goal.
  // Konzepte: kcl · kvl · umlauf-vz · spann-teiler.
  // Prerequisites (aus et-1-1): ohm, reihe-r.
  // ───────────────────────────────────────────────────────────────────────
  'et-1-2': {

    // ═════════════════════════════════════════════════════════════════════
    // [0] Knotensatz (KCL) — $\sum I_\text{Knoten} = 0$ (concept: kcl)
    // ═════════════════════════════════════════════════════════════════════
    0: [
      // Zeile 1: recognize · true-false · uses=[kcl]
      tf(
        'An jedem Knoten in einem Netzwerk gilt: Die Summe aller zufließenden Ströme ist gleich der Summe aller abfließenden Ströme.',
        true,
        `**Ansatz:** Das ist die alltagsnahe Formulierung des Knotensatzes (KCL).

**Rechnung:** Aus Ladungserhaltung folgt $\\sum I_\\text{ein} = \\sum I_\\text{aus}$ — gleichbedeutend mit $\\sum I = 0$, wenn man zufließende positiv und abfließende negativ zählt.

**Probe:** An einem T-Knoten mit $I_1 = 4\\,\\text{A}$ zu, $I_2 = 1{,}5\\,\\text{A}$ und $I_3 = 2{,}5\\,\\text{A}$ ab gilt $4 = 1{,}5 + 2{,}5$ ✓.

**Typischer Fehler:** "$\\sum I = 0$" mit "alle Ströme positiv addiert" verwechselt — die Vorzeichen kommen aus der Richtung am Knoten.`,
        [
          'Was passiert mit Ladung an einem Knoten — wird sie gespeichert oder erzeugt?',
          'Welcher Erhaltungssatz steckt hinter KCL?',
          'Zähle die hineinfließenden Ströme positiv, die herausfließenden negativ.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['kcl'] },
      ),

      // Zeile 2: apply-guided · multiple-choice · uses=[kcl]
      mc(
        'An einem Knoten fließen $I_1 = 2\\,\\text{A}$ und $I_2 = 3\\,\\text{A}$ zu, während $I_3$ und $I_4 = 4\\,\\text{A}$ abfließen. Wie groß ist $I_3$?',
        ['$1\\,\\text{A}$', '$5\\,\\text{A}$', '$9\\,\\text{A}$', '$-1\\,\\text{A}$'],
        0,
        `**Ansatz:** KCL: $\\sum I_\\text{ein} = \\sum I_\\text{aus}$.

**Rechnung:** $I_1 + I_2 = I_3 + I_4 \\Rightarrow 2 + 3 = I_3 + 4 \\Rightarrow I_3 = 1\\,\\text{A}$.

**Probe:** Einsetzen: $5 = 1 + 4 = 5$ ✓ (Bilanz erfüllt).

**Typischer Fehler:** Nur die zufließenden Ströme summiert ($2 + 3 = 5$) und das als Antwort gegeben — der zweite abfließende Strom $I_4$ wurde übersehen.`,
        [
          'Notiere alle vier Ströme mit Richtung (zu/ab).',
          'KCL als Bilanzgleichung: zufließende = abfließende.',
          '$2 + 3 = I_3 + 4$.',
        ],
        {
          1: '$5\\,\\text{A}$ ist die Summe der zufließenden Ströme — du hast den zweiten abfließenden Strom $I_4 = 4\\,\\text{A}$ vergessen abzuziehen.',
          2: '$9\\,\\text{A}$ ist $I_1 + I_2 + I_4$ — du hast alle drei mit dem gleichen Vorzeichen addiert, ohne KCL anzuwenden.',
          3: '$-1\\,\\text{A}$ ergibt sich aus $I_4 - (I_1 + I_2) = 4 - 5$ — du hast die KCL-Gleichung mit umgekehrtem Vorzeichen aufgelöst.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['kcl'] },
      ),

      // Zeile 3: apply-independent · number-input · uses=[kcl]
      ni(
        'An einem Knoten fließen $I_1 = 5\\,\\text{A}$ und $I_2 = 2\\,\\text{A}$ zu. Es fließt nur ein einziger Strom $I_3$ ab. Wie groß ist $I_3$ in Ampere?',
        7, 0.01, 'A',
        `**Ansatz:** KCL: zufließende Ströme summieren sich zum einzig abfließenden Strom.

**Rechnung:** $I_3 = I_1 + I_2 = 5 + 2 = 7\\,\\text{A}$.

**Probe:** $I_1 + I_2 - I_3 = 5 + 2 - 7 = 0$ ✓ (KCL erfüllt).

**Typischer Fehler:** $I_3 = I_1 - I_2 = 3\\,\\text{A}$ — nur ein Strom als zufließend gewertet, der zweite irrtümlich als abfließend.`,
        [
          'Beide Ströme fließen zu, einer ab — also Bilanz "zufließend = abfließend".',
          '$I_1 + I_2 = I_3$.',
          'Einfach addieren: $5 + 2$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['kcl'] },
      ),

      // Zeile 4: error-analysis · multiple-choice · uses=[kcl]
      mc(
        'An einem Knoten fließen $8\\,\\text{A}$ und $3\\,\\text{A}$ zu, $7\\,\\text{A}$ und $4\\,\\text{A}$ ab. Ein Lerner schreibt $\\sum I = 8 + 3 + 7 + 4 = 22\\,\\text{A}$ und folgert, KCL sei verletzt. Welcher Fehler liegt vor?',
        [
          'Vorzeichen nicht beachtet — abfließende Ströme müssen negativ gezählt werden, dann ergibt sich $8+3-7-4 = 0$.',
          'Die Werte stimmen nicht — der Knoten hat in Wirklichkeit nur drei Anschlüsse.',
          '$\\sum I = 0$ gilt nur für zwei Ströme an einem Knoten.',
          'Stromrichtungen wurden falsch gemessen.',
        ],
        0,
        `**Ansatz:** KCL: $\\sum I = 0$ am Knoten **mit Vorzeichen**: zufließend $+$, abfließend $-$ (oder konsistent umgekehrt).

**Rechnung:** Korrekt: $8 + 3 - 7 - 4 = 0$ ✓ — KCL ist erfüllt. Lerner hat alle vier Beträge addiert und das Vorzeichen ignoriert.

**Probe:** $\\sum I_\\text{ein} = 8 + 3 = 11\\,\\text{A}$, $\\sum I_\\text{aus} = 7 + 4 = 11\\,\\text{A}$ — Bilanz stimmt.

**Typischer Fehler:** "$\\sum I = 0$" wörtlich als "alle Beträge zu null" interpretiert — übersieht, dass die Vorzeichen aus der Richtung kommen.`,
        [
          'Wie wird "Summe gleich null" für gerichtete Größen formal aufgeschrieben?',
          'Setze konkrete Vorzeichen für zufließend/abfließend.',
          'Vergleiche $\\sum I_\\text{ein}$ mit $\\sum I_\\text{aus}$.',
        ],
        {
          1: 'Die Anzahl der Anschlüsse am Knoten passt zur Aufgabe — KCL gilt für beliebig viele Ströme.',
          2: 'KCL gilt für jede beliebige Anzahl von Strömen am Knoten, nicht nur für zwei.',
          3: 'Die Aufgabe nennt explizite Richtungen — eine Mess-Frage entzieht sich der KCL-Bilanz nicht.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['kcl'] },
      ),

      // Zeile 5: transfer · number-input · uses=[kcl]
      ni(
        'An einem Knoten gibt es vier Ströme: $I_1 = 12\\,\\text{A}$ fließt zu, $I_2 = 2\\,\\text{A}$ und $I_3 = 4\\,\\text{A}$ fließen ab, und $I_4$ fließt ebenfalls ab. Wie groß ist $I_4$ in Ampere?',
        6, 0.01, 'A',
        `**Ansatz:** KCL als Bilanz: ein zufließender Strom muss alle drei abfließenden gemeinsam decken.

**Rechnung:** $I_1 = I_2 + I_3 + I_4 \\Rightarrow 12 = 2 + 4 + I_4 \\Rightarrow I_4 = 6\\,\\text{A}$.

**Probe:** $I_2 + I_3 + I_4 = 2 + 4 + 6 = 12 = I_1$ ✓.

**Typischer Fehler:** Nur einen abfließenden Strom abgezogen ($12 - 2 = 10\\,\\text{A}$ oder $12 - 4 = 8\\,\\text{A}$) — beide vorhandenen Abflüsse müssen aber zusammen subtrahiert werden.`,
        [
          'Wie viele Ströme fließen ab, wie viele zu?',
          'Bilanz: $I_1 = I_2 + I_3 + I_4$.',
          '$12 - 2 - 4 = 6$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['kcl'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [1] Maschensatz (KVL) — $\sum U_\text{Masche} = 0$ (concept: kvl)
    // ═════════════════════════════════════════════════════════════════════
    1: [
      // Zeile 6: recognize · true-false · uses=[kvl]
      tf(
        'In jeder geschlossenen Masche ist die Summe aller Spannungen — mit korrekten Vorzeichen — entlang des Umlaufs gleich null.',
        true,
        `**Ansatz:** Das ist der Maschensatz (KVL) im Wortlaut.

**Rechnung:** $\\sum U_\\text{Masche} = 0$ folgt aus der Energieerhaltung: Nach einem geschlossenen Umlauf ist man wieder am Ausgangspotenzial, der Energie-Saldo pro Ladung ist null.

**Probe:** Quelle $U_q = 12\\,\\text{V}$ mit zwei Widerständen $U_{R1} = 4\\,\\text{V}$ und $U_{R2} = 8\\,\\text{V}$ → $12 - 4 - 8 = 0$ ✓.

**Typischer Fehler:** "Summe der Spannungen" ohne Vorzeichen verstanden — KVL braucht eine konsistente Umlaufrichtung mit Plus/Minus-Konvention.`,
        [
          'Welcher Erhaltungssatz steckt hinter KVL?',
          'Eine Masche ist ein geschlossener Umlauf in einem Netzwerk.',
          'Die Spannung ist Energie pro Ladung — nach einem geschlossenen Umlauf bist du wieder am Anfang.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['kvl'] },
      ),

      // Zeile 7: apply-guided · multiple-choice · uses=[kvl]
      mc(
        'Eine Masche besteht aus einer Spannungsquelle $U_q = 12\\,\\text{V}$, einem Widerstand mit Spannungsabfall $U_{R1} = 3\\,\\text{V}$ und einem zweiten Widerstand $R_2$. Welcher Spannungsabfall $U_{R2}$ liegt an $R_2$?',
        ['$9\\,\\text{V}$', '$15\\,\\text{V}$', '$12\\,\\text{V}$', '$3\\,\\text{V}$'],
        0,
        `**Ansatz:** KVL: $U_q - U_{R1} - U_{R2} = 0$.

**Rechnung:** $U_{R2} = U_q - U_{R1} = 12 - 3 = 9\\,\\text{V}$.

**Probe:** $U_{R1} + U_{R2} = 3 + 9 = 12 = U_q$ ✓.

**Typischer Fehler:** Quelle und Spannungsabfall mit gleichem Vorzeichen addiert ($U_q + U_{R1} = 15\\,\\text{V}$) — das verletzt KVL.`,
        [
          'Stelle KVL als Gleichung auf: $U_q$ in eine Richtung, Abfälle in die andere.',
          'Quelle und Spannungsabfälle haben entgegengesetztes Vorzeichen.',
          '$U_q = U_{R1} + U_{R2}$ → $U_{R2} = 12 - 3$.',
        ],
        {
          1: 'Du hast Quelle und Spannungsabfall addiert — KVL erfordert aber entgegengesetzte Vorzeichen ($U_q - U_{R1} - U_{R2} = 0$).',
          2: 'Du hast die Quellspannung selbst genommen — das wäre $U_{R2}$ nur, wenn $R_1 = 0$ wäre.',
          3: 'Du hast den ersten Spannungsabfall wiederholt statt den zweiten zu berechnen.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['kvl'] },
      ),

      // Zeile 8: apply-independent · number-input · uses=[kvl]
      ni(
        'Eine Masche enthält eine Quelle $U_q = 24\\,\\text{V}$ und drei in Reihe liegende Widerstände mit den Spannungsabfällen $U_{R1} = 10\\,\\text{V}$, $U_{R2} = 8\\,\\text{V}$ und $U_{R3}$. Wie groß ist $U_{R3}$ in Volt?',
        6, 0.01, 'V',
        `**Ansatz:** KVL: $U_q - U_{R1} - U_{R2} - U_{R3} = 0$.

**Rechnung:** $U_{R3} = U_q - U_{R1} - U_{R2} = 24 - 10 - 8 = 6\\,\\text{V}$.

**Probe:** Spannungssumme: $10 + 8 + 6 = 24 = U_q$ ✓ (Maschensatz).

**Typischer Fehler:** Nur einen Spannungsabfall abgezogen ($24 - 10 = 14$ oder $24 - 8 = 16$) — bei drei Widerständen müssen alle abgezogen werden.`,
        [
          'KVL: Summe der Spannungsabfälle = Quellspannung.',
          '$U_q = U_{R1} + U_{R2} + U_{R3}$.',
          '$24 - 10 - 8 = 6$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['kvl'] },
      ),

      // Zeile 9: error-analysis · multiple-choice · uses=[kvl]
      mc(
        'In einer Masche steht eine Quelle $U_q = 20\\,\\text{V}$. Auf zwei Widerständen fallen $U_{R1} = 8\\,\\text{V}$ und $U_{R2} = 12\\,\\text{V}$ ab. Ein Lerner schreibt KVL als $U_q + U_{R1} + U_{R2} = 0$ und kommt auf $U_q = -20\\,\\text{V}$. Welcher Fehler liegt vor?',
        [
          'Spannungsabfälle und Quelle mit gleichem Vorzeichen aufaddiert — beim KVL-Umlauf werden Quelle und Abfälle entgegengesetzt durchquert und tragen daher unterschiedliche Vorzeichen.',
          'Die Spannungsabfälle wurden in falscher Reihenfolge eingesetzt.',
          'Der Maschensatz ist hier nicht anwendbar.',
          'Die Werte $8\\,\\text{V}$ und $12\\,\\text{V}$ ergeben keine $20\\,\\text{V}$.',
        ],
        0,
        `**Ansatz:** Korrektes KVL: $U_q - U_{R1} - U_{R2} = 0 \\Rightarrow U_q = U_{R1} + U_{R2} = 8 + 12 = 20\\,\\text{V}$ ✓.

**Rechnung:** Lerner hat alle drei Spannungen mit "+" addiert: $20 + 8 + 12 = 40 \\ne 0$, hat dann durch Vorzeichenwechsel formal $U_q = -20\\,\\text{V}$ erzwungen — physikalisch sinnlos.

**Probe:** Spannungssumme im Umlauf: einmal "Energie aufgenommen" (Quelle, $-$ nach $+$), zweimal "Energie abgegeben" (Widerstände in Stromrichtung). Die Beträge balancieren mit entgegengesetzten Vorzeichen.

**Typischer Fehler:** "$\\sum U = 0$" wörtlich als "alle Beträge addieren" — KVL ist eine **vorzeichenbehaftete** Bilanz entlang einer gewählten Umlaufrichtung.`,
        [
          'Wie kommen die Vorzeichen in $\\sum U = 0$ zustande?',
          'Was passiert beim Umlauf an einer Quelle vs. an einem Widerstand?',
          'Vergleiche das Lerner-Ergebnis mit der Plausibilität: $U_q = -20\\,\\text{V}$ widerspricht dem Bauteilwert $+20\\,\\text{V}$.',
        ],
        {
          1: 'Reihenfolge spielt für eine Summe keine Rolle — der Fehler liegt im Vorzeichen, nicht in der Reihenfolge.',
          2: 'Der Maschensatz gilt für jeden geschlossenen Umlauf — auch hier.',
          3: '$8 + 12 = 20$ stimmt — die Spannungssumme passt zur Quelle, der Lerner hat nur die Vorzeichen falsch gesetzt.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['kvl'] },
      ),

      // Zeile 10: transfer · number-input · uses=[kvl]
      ni(
        'Zwei Spannungsquellen $U_{q1} = 12\\,\\text{V}$ und $U_{q2} = 4\\,\\text{V}$ sind in Reihe addierend geschaltet (beide pumpen Strom in dieselbe Richtung). Sie speisen einen einzigen ohmschen Verbraucher mit Spannungsabfall $U_R$. Wie groß ist $U_R$ in Volt?',
        16, 0.01, 'V',
        `**Ansatz:** KVL im Umlauf: $U_{q1} + U_{q2} - U_R = 0$ (beide Quellen addieren sich, Spannungsabfall am Widerstand mit umgekehrtem Vorzeichen).

**Rechnung:** $U_R = U_{q1} + U_{q2} = 12 + 4 = 16\\,\\text{V}$.

**Probe:** Mit $U_R = 16\\,\\text{V}$: $12 + 4 - 16 = 0$ ✓ (KVL erfüllt).

**Typischer Fehler:** Quellen subtrahiert statt addiert ($12 - 4 = 8\\,\\text{V}$) — gilt nur, wenn die Quellen GEGENEINANDER geschaltet sind.`,
        [
          '"Reihe addierend" heißt: Pluspol der einen mit Minuspol der nächsten verbunden.',
          'Gesamtquelle = Summe der beiden Einzelquellen.',
          'KVL: $U_R = U_{q1} + U_{q2}$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['kvl'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [2] Vorzeichenkonvention beim Umlauf (concept: umlauf-vz)
    // ═════════════════════════════════════════════════════════════════════
    2: [
      // Zeile 11: recognize · true-false · uses=[umlauf-vz]
      tf(
        'Die Wahl der Umlaufrichtung beim Maschensatz ist physikalisch beliebig — dreht man die Richtung um, kehren sich alle Vorzeichen konsistent um, und das Endergebnis bleibt unverändert.',
        true,
        `**Ansatz:** Die Umlaufrichtung ist eine Rechenkonvention, kein physikalischer Parameter.

**Rechnung:** Aus $\\sum U = 0$ wird bei umgekehrter Richtung $-\\sum U = 0$ — beide Gleichungen sind äquivalent.

**Probe:** Masche $U_q - U_{R1} - U_{R2} = 0$ wird im Gegen-Umlauf zu $-U_q + U_{R1} + U_{R2} = 0$, also wieder $U_q = U_{R1} + U_{R2}$ ✓.

**Typischer Fehler:** Annahme, der Strom oder die Spannung "ändere sich" mit der Wahl — sie ändert sich nicht; nur die Buchhaltung in der Gleichung.`,
        [
          'Ist die Umlaufrichtung eine physikalische Größe oder eine Konvention?',
          'Was passiert mit allen Termen in $\\sum U = 0$ beim Richtungs-Wechsel?',
          'Multipliziere eine Gleichung mit $-1$ — bleibt die Lösung gleich?',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['umlauf-vz'] },
      ),

      // Zeile 12: apply-guided · multiple-choice · uses=[umlauf-vz]
      mc(
        'Beim Durchlauf einer Masche im Uhrzeigersinn überquerst du einen Widerstand in Stromrichtung (Spannungspfeil zeigt in Umlaufrichtung). Mit welchem Vorzeichen geht der Spannungsabfall $U_R$ in $\\sum U = 0$ ein?',
        ['$-U_R$', '$+U_R$', '$0$', 'Vorzeichen ist beliebig'],
        0,
        `**Ansatz:** Konvention: Spannung in Umlaufrichtung ist eine Energieabgabe pro Ladung — geht in $\\sum U = 0$ als negativer Beitrag ein, weil das Potenzial fällt.

**Rechnung:** Spannungsabfall in Stromrichtung = Potenzial fällt in Umlaufrichtung → Beitrag $-U_R$ in der Maschengleichung.

**Probe:** Klassisches Beispiel mit Quelle und Widerstand: Umlauf von $-$ über Quelle nach $+$ ($+U_q$), durch Widerstand zurück nach $-$ ($-U_R$) → $U_q - U_R = 0$, also $U_q = U_R$ ✓.

**Typischer Fehler:** Vorzeichen am Widerstand mit dem an der Quelle gleichgesetzt — Quelle hebt das Potenzial ($+$ in Umlauf von $-$ nach $+$), Widerstand senkt es ($-$ in Stromrichtung).`,
        [
          'Was passiert physikalisch beim Durchqueren eines Widerstands in Stromrichtung mit dem Potenzial?',
          'Steigt oder fällt das Potenzial in Umlaufrichtung?',
          'Konvention: fallendes Potenzial → negativer Beitrag.',
        ],
        {
          1: '$+U_R$ wäre richtig, wenn du den Widerstand GEGEN die Stromrichtung durchquerst — hier ist es aber in Stromrichtung.',
          2: '$0$ würde bedeuten, der Widerstand trägt nichts zur Maschengleichung bei — das gilt nur für $R = 0$ oder $I = 0$.',
          3: 'Es gibt eine eindeutige Konvention: in Stromrichtung durchquert → $-U_R$. "Beliebig" ist hier nicht zulässig.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['umlauf-vz'] },
      ),

      // Zeile 13: apply-independent · multiple-choice · uses=[umlauf-vz]
      mc(
        'Beim Umlauf einer Masche werden in Reihenfolge angetroffen: $+U_q = +10\\,\\text{V}$ (Quelle, von $-$ nach $+$ durchquert), $-U_1 = -3\\,\\text{V}$ (Widerstand in Stromrichtung), $-U_2 = -?$ (zweiter Widerstand in Stromrichtung). Welcher Wert muss $U_2$ haben, damit KVL erfüllt ist?',
        ['$7\\,\\text{V}$', '$13\\,\\text{V}$', '$-7\\,\\text{V}$', '$3\\,\\text{V}$'],
        0,
        `**Ansatz:** KVL als $\\sum U = 0$ mit den explizit gegebenen Vorzeichen einsetzen.

**Rechnung:** $+10 - 3 - U_2 = 0 \\Rightarrow U_2 = 7\\,\\text{V}$.

**Probe:** $10 - 3 - 7 = 0$ ✓ (Bilanz im Umlauf).

**Typischer Fehler:** Vorzeichen "von außen" addiert ($10 + 3 + U_2 = 0 \\Rightarrow U_2 = -13$) — die Vorzeichen stehen aber explizit in der Aufgabe.`,
        [
          'Setze die drei Beträge mit ihren Vorzeichen in $\\sum U = 0$ ein.',
          '$10 + (-3) + (-U_2) = 0$.',
          'Stelle nach $U_2$ um.',
        ],
        {
          1: '$13\\,\\text{V}$ entsteht, wenn du $-U_1$ als $+U_1$ behandelst und so $10 + 3 = U_2$ rechnest.',
          2: '$-7\\,\\text{V}$ wäre $U_2$ als negativer Wert — die Aufgabe definiert $U_2$ aber als Beträge eines Spannungsabfalls (positiv), das Vorzeichen steht schon vor.',
          3: '$3\\,\\text{V}$ ist der Wert von $U_1$ — du hast nur die erste Bilanz $10 - 3$ aufgelöst, ohne $U_2$ zu berechnen.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['umlauf-vz'] },
      ),

      // Zeile 14: error-analysis · multiple-choice · uses=[umlauf-vz]
      mc(
        'Ein Lerner stellt für eine Masche mit Quelle $U_q = 24\\,\\text{V}$ und zwei Widerständen ($U_{R1} = 8\\,\\text{V}$ in Stromrichtung, $U_{R2} = 16\\,\\text{V}$ in Stromrichtung) die Gleichung $U_q + U_{R1} + U_{R2} = 0$ auf und folgert $U_q = -24\\,\\text{V}$. Welcher Fehler liegt vor?',
        [
          'Beim Umlauf werden Quelle ($-$ nach $+$, also $+U_q$) und Widerstandsabfälle (in Stromrichtung, also $-U_R$) entgegengesetzt durchquert — der Lerner hat alle drei mit gleichem Vorzeichen gezählt.',
          'Die Maschengleichung muss multipliziert statt addiert werden.',
          'Das Ohmsche Gesetz wurde an dieser Stelle vergessen.',
          'Die Quelle wird in Wirklichkeit von $+$ nach $-$ durchquert.',
        ],
        0,
        `**Ansatz:** Korrektes KVL: $U_q - U_{R1} - U_{R2} = 0 \\Rightarrow U_q = 24\\,\\text{V}$ ✓ — der Wert stimmt, der Lerner verfälscht ihn nur durch die falsche Vorzeichen-Konvention.

**Rechnung:** Im Lerner-Ansatz $U_q + U_{R1} + U_{R2} = 0$ wird $U_q = -(U_{R1} + U_{R2}) = -24\\,\\text{V}$ — physikalisch unsinnig, weil das Bauteil $+24\\,\\text{V}$ liefert.

**Probe:** Plausibilität: Eine Spannungsquelle mit Bezeichnung "$U_q = 24\\,\\text{V}$" hat den Betrag $24\\,\\text{V}$ — ein Vorzeichen-Vorzeichen-Wechsel im Endergebnis ist immer ein Hinweis auf falsche Konvention.

**Typischer Fehler:** "$\\sum U = 0$" als reine Beträge-Summe missverstanden statt als vorzeichenbehaftete Bilanz entlang der Umlaufrichtung.`,
        [
          'Welche Vorzeichen gehören zu Quelle vs. Widerstand beim Umlauf?',
          'Vergleiche $U_q + U_{R1} + U_{R2} = 0$ (Lerner) mit $U_q - U_{R1} - U_{R2} = 0$ (korrekt).',
          'Was sagt das Endergebnis $U_q = -24\\,\\text{V}$ über die Sinnhaftigkeit der Konvention aus?',
        ],
        {
          1: 'KVL ist additiv ($\\sum U = 0$), nicht multiplikativ — das Wort "Multiplikation" passt hier nicht.',
          2: 'Das Ohmsche Gesetz ist hier nicht das Problem — die Spannungswerte sind bereits gegeben, der Fehler liegt allein in den Vorzeichen.',
          3: 'Die Aufgabe lässt die Quellrichtung offen, die übliche Konvention ($-$ nach $+$ im Umlauf) führt zur korrekten Bilanz.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['umlauf-vz'] },
      ),

      // Zeile 15: transfer · multiple-choice · uses=[umlauf-vz]
      mc(
        'Welche der folgenden Maschengleichungen ist äquivalent zu $U_q - U_{R1} - U_{R2} = 0$ (Quelle in Umlaufrichtung von $-$ nach $+$, beide Widerstände in Stromrichtung durchquert)?',
        [
          '$U_q = U_{R1} + U_{R2}$',
          '$U_{R1} + U_{R2} + U_q = 0$',
          '$U_q = U_{R1} - U_{R2}$',
          '$U_{R2} = U_q + U_{R1}$',
        ],
        0,
        `**Ansatz:** Algebraisches Umstellen — alle Spannungen auf eine Seite, Vorzeichen mitnehmen.

**Rechnung:** $U_q - U_{R1} - U_{R2} = 0 \\Leftrightarrow U_q = U_{R1} + U_{R2}$ ✓.

**Probe:** Mit Beispielwerten $U_q = 12\\,\\text{V}$, $U_{R1} = 5\\,\\text{V}$, $U_{R2} = 7\\,\\text{V}$: $12 - 5 - 7 = 0$ und $12 = 5 + 7$ — beide Gleichungen wahr.

**Typischer Fehler:** Vorzeichen beim Umstellen vergessen, sodass z. B. die Quelle auf der falschen Seite landet.`,
        [
          'Bringe $U_{R1}$ und $U_{R2}$ auf die andere Seite.',
          'Vorzeichen drehen sich beim Wechsel der Seite.',
          'Probe mit konkreten Zahlen.',
        ],
        {
          1: 'Das wäre $\\sum U = 0$ ohne Vorzeichen-Beachtung — Quelle und Abfälle wurden mit gleichem Vorzeichen aufgenommen.',
          2: 'Hier wurde $U_{R2}$ vom Quellbetrag subtrahiert statt addiert — entspricht dem Fall, dass $R_2$ gegen die Stromrichtung durchquert würde.',
          3: 'Vorzeichen falsch: $U_{R2} = U_q - U_{R1}$ wäre korrekt; hier addiert $U_{R1}$.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['umlauf-vz'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [3] Spannungsteiler — $U_2 = U \cdot R_2/(R_1+R_2)$ (concept: spann-teiler)
    // ═════════════════════════════════════════════════════════════════════
    3: [
      // Zeile 16: recognize · true-false · uses=[spann-teiler]
      tf(
        'Beim unbelasteten Spannungsteiler aus zwei Widerständen $R_1$ und $R_2$ in Reihe gilt für die Spannung an $R_2$: $U_2/U = R_2/(R_1 + R_2)$.',
        true,
        `**Ansatz:** Spannungsteiler ist ein Spezialfall des Maschensatzes bei Reihenschaltung.

**Rechnung:** Mit $I = U/(R_1+R_2)$ folgt $U_2 = R_2 \\cdot I = U \\cdot R_2/(R_1+R_2)$.

**Probe:** Bei $R_1 = R_2$ wird $U_2/U = R_2/(2R_2) = 1/2$ — die Spannung halbiert sich gleichmäßig ✓.

**Typischer Fehler:** Formel mit $R_1$ im Zähler verwendet, wenn $U_2$ an $R_2$ gefragt ist — der gefragte Widerstand steht IMMER im Zähler.`,
        [
          'Welcher Strom fließt im Reihenkreis aus $R_1$ und $R_2$?',
          'Wende $U_2 = R_2 \\cdot I$ an.',
          'Setze $I$ in $U_2$ ein und vereinfache.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['spann-teiler'] },
      ),

      // Zeile 17: apply-guided · multiple-choice · uses=[spann-teiler]
      mc(
        'An einer Eingangsspannung $U = 12\\,\\text{V}$ liegt ein Spannungsteiler aus $R_1 = R_2 = 100\\,\\Omega$ in Reihe. Welche Spannung $U_2$ fällt an $R_2$ ab?',
        ['$6\\,\\text{V}$', '$12\\,\\text{V}$', '$3\\,\\text{V}$', '$24\\,\\text{V}$'],
        0,
        `**Ansatz:** Spannungsteiler-Formel: $U_2 = U \\cdot R_2/(R_1 + R_2)$.

**Rechnung:** $U_2 = 12 \\cdot 100/(100 + 100) = 12 \\cdot 1/2 = 6\\,\\text{V}$.

**Probe:** $U_1 + U_2 = 6 + 6 = 12 = U$ ✓ (Maschensatz, beide Widerstände gleich → Spannung halbiert).

**Typischer Fehler:** Gesamtspannung als Antwort gegeben ($12\\,\\text{V}$) — die Spannung am Einzelwiderstand ist kleiner als die Gesamtspannung.`,
        [
          'Welcher Anteil der Gesamtspannung fällt an einem Widerstand ab, wenn beide gleich sind?',
          'Spannungsteiler-Formel: $U_2/U = R_2/(R_1+R_2)$.',
          '$R_2/(R_1+R_2) = 100/200 = 1/2$.',
        ],
        {
          1: '$12\\,\\text{V}$ ist die Gesamtspannung $U$ — die Teilspannung am Einzelwiderstand muss kleiner sein.',
          2: '$3\\,\\text{V}$ ergibt sich aus $U/4$ — du hast vermutlich $R_1+R_2 = 4 \\cdot R_1$ angenommen oder einen Faktor doppelt geteilt.',
          3: '$24\\,\\text{V}$ ist $2\\cdot U$ — Spannungsteiler verkleinert die Spannung, vergrößert sie nie.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['spann-teiler'] },
      ),

      // Zeile 18: apply-independent · number-input · uses=[spann-teiler]
      ni(
        'An einer Eingangsspannung $U = 24\\,\\text{V}$ liegt ein Spannungsteiler aus $R_1 = 200\\,\\Omega$ und $R_2 = 400\\,\\Omega$ in Reihe. Welche Spannung $U_2$ fällt an $R_2$ ab in Volt?',
        16, 0.05, 'V',
        `**Ansatz:** Spannungsteiler-Formel mit dem gefragten Widerstand $R_2$ im Zähler.

**Rechnung:** $U_2 = U \\cdot R_2/(R_1 + R_2) = 24 \\cdot 400/(200 + 400) = 24 \\cdot 400/600 = 24 \\cdot 2/3 = 16\\,\\text{V}$.

**Probe:** $U_1 = 24 \\cdot 200/600 = 8\\,\\text{V}$, $U_1 + U_2 = 8 + 16 = 24 = U$ ✓.

**Typischer Fehler:** $R_1$ statt $R_2$ im Zähler ($U_2 = 24 \\cdot 200/600 = 8\\,\\text{V}$) — das wäre der Spannungsabfall an $R_1$, nicht an $R_2$.`,
        [
          'Welcher Widerstand muss im Zähler stehen, wenn $U_2$ gefragt ist?',
          'Nenner = $R_1 + R_2 = 600$.',
          '$24 \\cdot 400/600 = 16$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['spann-teiler'] },
      ),

      // Zeile 19: error-analysis · multiple-choice · uses=[spann-teiler]
      mc(
        'Bei einem Spannungsteiler mit $U = 20\\,\\text{V}$, $R_1 = 100\\,\\Omega$ und $R_2 = 400\\,\\Omega$ rechnet ein Lerner $U_2 = U \\cdot R_1/(R_1 + R_2) = 20 \\cdot 100/500 = 4\\,\\text{V}$ und gibt $4\\,\\text{V}$ als Spannung an $R_2$ an. Welcher Fehler liegt vor?',
        [
          '$R_1$ und $R_2$ im Zähler vertauscht — die Spannung an $R_2$ ist proportional zu $R_2$, nicht zu $R_1$.',
          'Der Nenner $R_1 + R_2 = 500\\,\\Omega$ wurde falsch berechnet.',
          'Spannungsteiler-Formel ist hier nicht anwendbar.',
          'Ohmsches Gesetz wurde nicht angewendet.',
        ],
        0,
        `**Ansatz:** Korrekt: $U_2 = 20 \\cdot 400/500 = 16\\,\\text{V}$. Lerner hat $R_1$ in den Zähler gesetzt → er hat tatsächlich $U_1$ statt $U_2$ berechnet.

**Rechnung:** $U_1 = U \\cdot R_1/(R_1+R_2) = 4\\,\\text{V}$ (was der Lerner ausgerechnet hat). $U_2 = U - U_1 = 16\\,\\text{V}$.

**Probe:** Plausibilität: $R_2$ ist 4-mal so groß wie $R_1$, also fällt an $R_2$ auch 4-mal so viel Spannung ab ($16 = 4 \\cdot 4$) ✓.

**Typischer Fehler:** Merkregel ignoriert: "Der Widerstand, an dem die gefragte Spannung abfällt, steht im Zähler."`,
        [
          'Welche Spannung ist gefragt — $U_1$ oder $U_2$?',
          'Welcher Widerstand steht entsprechend im Zähler?',
          'Vergleiche das Lerner-Ergebnis mit $U \\cdot R_2/(R_1 + R_2)$.',
        ],
        {
          1: 'Der Nenner $100 + 400 = 500$ ist korrekt — der Fehler liegt im Zähler.',
          2: 'Spannungsteiler ist hier definitionsgemäß anwendbar (zwei Widerstände in Reihe ohne Last).',
          3: 'Die Spannungsteiler-Formel ist eine direkte Konsequenz des Ohmschen Gesetzes — der Lerner hat sie nicht "vergessen", sondern falsch angewendet.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['spann-teiler'] },
      ),

      // Zeile 20: transfer · number-input · uses=[spann-teiler]
      ni(
        'Welcher Widerstand $R_2$ muss zu $R_1 = 300\\,\\Omega$ in Reihe geschaltet werden, damit bei einer Eingangsspannung $U = 10\\,\\text{V}$ am Widerstand $R_2$ genau $U_2 = 4\\,\\text{V}$ abfallen? Antwort in Ohm.',
        200, 0.5, 'Ω',
        `**Ansatz:** Spannungsteiler-Formel nach $R_2$ umstellen.

**Rechnung:** $U_2 = U \\cdot R_2/(R_1+R_2) \\Rightarrow 4 = 10 \\cdot R_2/(300+R_2)$. Beide Seiten mit $(300+R_2)$ multiplizieren: $4 \\cdot (300+R_2) = 10\\,R_2 \\Rightarrow 1200 + 4R_2 = 10R_2 \\Rightarrow 6R_2 = 1200 \\Rightarrow R_2 = 200\\,\\Omega$.

**Probe:** Einsetzen: $U_2 = 10 \\cdot 200/(300+200) = 10 \\cdot 200/500 = 4\\,\\text{V}$ ✓.

**Typischer Fehler:** "$R_2$ aus Verhältnis $4/10$ direkt gleich $R_1$ multipliziert" ($R_2 = 0{,}4 \\cdot 300 = 120$) — das ignoriert, dass auch der Nenner von $R_2$ abhängt.`,
        [
          'Stelle die Spannungsteiler-Formel als Gleichung mit Unbekannter $R_2$ auf.',
          'Multipliziere mit dem Nenner $(R_1+R_2)$, dann nach $R_2$ sortieren.',
          '$4 \\cdot 300 = (10 - 4) \\cdot R_2 \\Rightarrow R_2 = 1200/6 = 200$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['spann-teiler'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // et-1-3 — Elektrische Leistung und Wirkungsgrad  (5 subGoals)
  // 25 Matrix-Aufgaben (5 × 5: Sub-Goal × Stage), Typen rotieren je Sub-Goal.
  // Konzepte: p-ui · w-pt · eta-et · p-r-i2r · haushalt-u.
  // Prerequisites (aus et-1-1): ohm.
  // ───────────────────────────────────────────────────────────────────────
  'et-1-3': {

    // ═════════════════════════════════════════════════════════════════════
    // [0] Leistung $P = UI = U^2/R = I^2 R$ (concept: p-ui)
    // ═════════════════════════════════════════════════════════════════════
    0: [
      // Zeile 1: recognize · true-false · uses=[p-ui]
      tf(
        'Die Leistung an einem ohmschen Widerstand kann sowohl als $P = U \\cdot I$, als auch als $P = U^{2}/R$ und $P = I^{2} \\cdot R$ ausgedrückt werden — alle drei Formeln sind äquivalent.',
        true,
        `**Ansatz:** Aus $U = R\\cdot I$ folgen die drei Schreibweisen direkt durch Einsetzen.

**Rechnung:** $P = U\\cdot I$. Mit $I = U/R$: $P = U \\cdot (U/R) = U^{2}/R$. Mit $U = R\\cdot I$: $P = R\\cdot I \\cdot I = I^{2} R$. Alle drei sind algebraisch gleichwertig.

**Probe:** Bei $U = 12\\,\\text{V}$, $R = 4\\,\\Omega$, $I = 3\\,\\text{A}$: $UI = 36$, $U^{2}/R = 144/4 = 36$, $I^{2}R = 9\\cdot 4 = 36$ — alle ergeben $36\\,\\text{W}$ ✓.

**Typischer Fehler:** Annahme, die Formeln gelten nur für ohmsche Bauteile — am Wechselstrom kommt zusätzlich ein Phasenfaktor hinzu, das ist hier aber außerhalb des Scope.`,
        [
          'Wie hängen $U$, $R$, $I$ über das Ohmsche Gesetz zusammen?',
          'Setze $I = U/R$ in $P = U\\,I$ ein.',
          'Setze $U = R\\,I$ in $P = U\\,I$ ein.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['p-ui'] },
      ),

      // Zeile 2: apply-guided · multiple-choice · uses=[p-ui]
      mc(
        'An einem Verbraucher liegt eine Spannung $U = 12\\,\\text{V}$ an, durch ihn fließt ein Strom $I = 2\\,\\text{A}$. Welche elektrische Leistung wird umgesetzt?',
        ['$24\\,\\text{W}$', '$6\\,\\text{W}$', '$14\\,\\text{W}$', '$144\\,\\text{W}$'],
        0,
        `**Ansatz:** Mit $U$ und $I$ → direkt $P = U \\cdot I$.

**Rechnung:** $P = 12 \\cdot 2 = 24\\,\\text{W}$.

**Probe:** Querprobe: bei $24\\,\\text{W}$ und $U = 12\\,\\text{V}$ folgt $I = P/U = 24/12 = 2\\,\\text{A}$ ✓.

**Typischer Fehler:** Division statt Multiplikation ($U/I = 6$, ergibt den Widerstand in Ohm) oder Addition ($U + I = 14$, hat keine physikalische Bedeutung).`,
        [
          'Welche zwei Größen sind gegeben?',
          '$P = U \\cdot I$.',
          '$12 \\cdot 2$.',
        ],
        {
          1: '$U/I = 12/2 = 6\\,\\Omega$ ist der Widerstand, nicht die Leistung. Du hast dividiert statt multipliziert.',
          2: '$U + I = 12 + 2 = 14$ — Addition unterschiedlicher Einheiten ist physikalisch nicht zulässig.',
          3: '$U^{2} = 144$ wäre der Zähler in $P = U^{2}/R$; ohne Division durch $R$ ist es kein Leistungswert.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['p-ui'] },
      ),

      // Zeile 3: apply-independent · number-input · uses=[p-ui]
      ni(
        'Welche Leistung hat ein Verbraucher mit $R = 100\\,\\Omega$ an $U = 20\\,\\text{V}$? Antwort in Watt.',
        4, 0.05, 'W',
        `**Ansatz:** Mit $U$ und $R$ → $P = U^{2}/R$ (kein Umweg über $I$).

**Rechnung:** $P = 20^{2}/100 = 400/100 = 4\\,\\text{W}$.

**Probe:** Über den Strom: $I = U/R = 20/100 = 0{,}2\\,\\text{A}$, dann $P = U\\cdot I = 20 \\cdot 0{,}2 = 4\\,\\text{W}$ ✓.

**Typischer Fehler:** $U^{2}$ vergessen ($P = U/R = 0{,}2$) — das wäre der Strom in Ampere, nicht die Leistung.`,
        [
          'Welche Formelvariante passt, wenn $U$ und $R$ gegeben sind?',
          '$P = U^{2}/R$ — Spannung wird quadriert.',
          '$20^{2} = 400$, geteilt durch $100$ ergibt $4$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['p-ui'] },
      ),

      // Zeile 4: error-analysis · multiple-choice · uses=[p-ui]
      mc(
        'Bei $U = 10\\,\\text{V}$ und $R = 5\\,\\Omega$ rechnet ein Lerner $P = U \\cdot R = 10 \\cdot 5 = 50\\,\\text{W}$. Welcher Fehler liegt vor?',
        [
          '$U \\cdot R$ ist keine Leistungsformel — korrekt sind $P = U^{2}/R$ oder $P = U \\cdot I$ mit $I = U/R$.',
          'Die Werte $U$ und $R$ wurden vertauscht.',
          'Die Einheit Watt ist falsch — es müsste Voltampere sein.',
          'Der Strom $I$ wurde nicht berücksichtigt, ergibt aber zufällig denselben Wert.',
        ],
        0,
        `**Ansatz:** Korrekt: $I = U/R = 2\\,\\text{A}$, $P = U \\cdot I = 20\\,\\text{W}$ oder direkt $P = U^{2}/R = 100/5 = 20\\,\\text{W}$.

**Rechnung:** Lerner: $U\\cdot R = 50\\,\\text{W}$ — das Produkt aus Spannung und Widerstand hat die Einheit $\\text{V}\\cdot\\Omega = \\text{V}^{2}/\\text{A}$, was kein Watt ist.

**Probe:** Einheiten-Check: $[U\\cdot R] = \\text{V}\\cdot\\Omega \\ne \\text{W}$. Der Lerner-Ansatz ist schon dimensionsmäßig falsch.

**Typischer Fehler:** Aus den drei korrekten Formeln $UI$, $U^{2}/R$, $I^{2}R$ versehentlich $UR$ konstruiert — keine davon enthält $U \\cdot R$ ohne Quadrat oder Bruch.`,
        [
          'Prüfe die Einheiten: $\\text{V}\\cdot\\Omega = ?$',
          'Welche der drei Leistungsformeln enthält $U$ und $R$ direkt?',
          'Vergleiche $U\\cdot R$ mit $U^{2}/R$.',
        ],
        {
          1: 'Auch bei vertauschten Werten ($R \\cdot U$) bleibt das Produkt $50\\,\\text{V}\\cdot\\Omega$ — die Einheit ist nicht Watt.',
          2: 'Voltampere (VA) ist im Wechselstrom die Scheinleistung, hier aber DC — die Einheit Watt ist korrekt. Der Fehler liegt in der Formel.',
          3: 'Zufällig kommt nichts heraus: $U\\cdot R = 50$, korrekt ist $20$ — kein Übereinstimmungs-Zufall.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['p-ui'] },
      ),

      // Zeile 5: transfer · number-input · uses=[p-ui]
      ni(
        'Eine LED-Lampe trägt die Aufschrift "$P = 8\\,\\text{W}$". Sie wird an $U = 230\\,\\text{V}$ Netzspannung betrieben. Welcher Strom $I$ in mA fließt durch die Lampe?',
        34.78, 0.2, 'mA',
        `**Ansatz:** Aus $P = U\\cdot I$ folgt $I = P/U$. Ergebnis am Schluss in mA umrechnen.

**Rechnung:** $I = P/U = 8\\,\\text{W}/230\\,\\text{V} = 0{,}03478\\,\\text{A} = 34{,}78\\,\\text{mA}$.

**Probe:** Rückwärts $P = U\\cdot I = 230 \\cdot 0{,}03478 \\approx 8{,}0\\,\\text{W}$ ✓.

**Typischer Fehler:** Direkt $230/8 = 28{,}75$ ausgerechnet (Werte vertauscht) — würde die Einheit $\\text{V}/\\text{W} = \\Omega/\\text{V}$ ergeben, nicht Ampere.`,
        [
          'Welche Größe ist gesucht? Was ist gegeben?',
          'Stelle $P = U\\cdot I$ nach $I$ um.',
          'Antwort von A in mA umrechnen (×1000).',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['p-ui'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [1] Energie $W = P \cdot t$ (concept: w-pt)
    // ═════════════════════════════════════════════════════════════════════
    1: [
      // Zeile 6: recognize · true-false · uses=[w-pt]
      tf(
        'Die elektrische Energie $W$ ist das Produkt aus Leistung und Zeit: $W = P \\cdot t$.',
        true,
        `**Ansatz:** Definitions-Identität: Energie = Leistung integriert über Zeit; bei konstanter Leistung also einfach Produkt.

**Rechnung:** $W = P\\cdot t$ mit $[W] = \\text{W}\\cdot\\text{s} = \\text{J}$ oder in der Praxis $\\text{kWh}$.

**Probe:** Bei $P = 100\\,\\text{W}$ über $t = 10\\,\\text{s}$: $W = 1000\\,\\text{J} = 1\\,\\text{kJ}$ ✓.

**Typischer Fehler:** $W = P/t$ — das wäre die Leistung pro Zeit-Einheit (Leistungs-Änderungsrate), keine Energie.`,
        [
          'Wie hängen Energie und Leistung über die Zeit zusammen?',
          'Was ist die Einheit von Energie? ($\\text{W}\\cdot\\text{s} = \\text{J}$.)',
          'Bei konstanter Leistung wird das Integral zur Multiplikation.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['w-pt'] },
      ),

      // Zeile 7: apply-guided · multiple-choice · uses=[w-pt]
      mc(
        'Eine $100\\,\\text{W}$-Glühbirne brennt $5$ Stunden lang. Welche elektrische Energie wurde verbraucht?',
        ['$500\\,\\text{Wh}$', '$20\\,\\text{Wh}$', '$105\\,\\text{Wh}$', '$500\\,\\text{W}$'],
        0,
        `**Ansatz:** $W = P\\cdot t$, Zeit darf in Stunden eingesetzt werden, dann ist die Einheit Wh.

**Rechnung:** $W = 100\\,\\text{W} \\cdot 5\\,\\text{h} = 500\\,\\text{Wh}$.

**Probe:** Umrechnung in Joule: $500\\,\\text{Wh} = 500 \\cdot 3600\\,\\text{J} = 1{,}8 \\cdot 10^{6}\\,\\text{J}$ — passt zu $100 \\cdot 18000 = 1{,}8\\cdot 10^{6}\\,\\text{J}$ ✓.

**Typischer Fehler:** Watt als Energieeinheit verwendet ($500\\,\\text{W}$) — Watt ist Leistung, nicht Energie. Korrekte Einheit: Wh oder J.`,
        [
          'Welche Formel liefert die Energie aus Leistung und Zeit?',
          'Setze $P$ in W und $t$ in h ein → Ergebnis in Wh.',
          '$100 \\cdot 5 = 500$, Einheit Wh.',
        ],
        {
          1: '$P/t = 100/5 = 20$ — Division statt Multiplikation, ergibt eine Größe ohne physikalische Bedeutung.',
          2: '$P + t = 100 + 5 = 105$ — Addition ungleicher Einheiten ist physikalisch unzulässig.',
          3: 'Watt ist die Einheit der Leistung, nicht der Energie. Energie wird in Wh oder J angegeben.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['w-pt'] },
      ),

      // Zeile 8: apply-independent · number-input · uses=[w-pt]
      ni(
        'Ein Heizgerät mit $P = 2\\,\\text{kW}$ läuft $30\\,\\text{min}$. Wie viel Energie verbraucht es in kWh?',
        1, 0.01, 'kWh',
        `**Ansatz:** $W = P\\cdot t$. Beide Größen in passende Einheiten bringen — kW und h ergeben direkt kWh.

**Rechnung:** $30\\,\\text{min} = 0{,}5\\,\\text{h}$, also $W = 2\\,\\text{kW} \\cdot 0{,}5\\,\\text{h} = 1\\,\\text{kWh}$.

**Probe:** In SI: $2000\\,\\text{W} \\cdot 1800\\,\\text{s} = 3{,}6 \\cdot 10^{6}\\,\\text{J} = 1\\,\\text{kWh}$ ✓.

**Typischer Fehler:** Zeit in Minuten direkt eingesetzt ($2 \\cdot 30 = 60$, mit Einheit "kW·min" — unüblich, müsste durch $60$ geteilt werden, um auf kWh zu kommen).`,
        [
          'Bringe die Zeit auf Stunden, bevor du multiplizierst.',
          '$30\\,\\text{min} = 0{,}5\\,\\text{h}$.',
          '$2 \\cdot 0{,}5 = 1$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['w-pt'] },
      ),

      // Zeile 9: error-analysis · multiple-choice · uses=[w-pt]
      mc(
        'Aufgabe: Eine $60\\,\\text{W}$-Lampe leuchtet $2$ Stunden — gesucht ist die Energie in Joule. Ein Lerner schreibt $W = 60 \\cdot 2 = 120\\,\\text{J}$. Welcher Fehler liegt vor?',
        [
          'Zeit in Stunden statt Sekunden eingesetzt — für Joule muss $t$ in Sekunden, also $t = 7200\\,\\text{s}$ und $W = 432\\,000\\,\\text{J}$.',
          'Leistung mit Watt statt Kilowatt verwechselt.',
          'Die Formel $W = P\\cdot t$ ist hier nicht anwendbar.',
          'Bei einer Glühbirne entsteht keine elektrische Energie.',
        ],
        0,
        `**Ansatz:** $W = P\\cdot t$ liefert Joule **nur**, wenn $P$ in Watt und $t$ in Sekunden eingesetzt wird.

**Rechnung:** $60\\,\\text{W} \\cdot 7200\\,\\text{s} = 432\\,000\\,\\text{J} = 432\\,\\text{kJ}$. Lerner-Ergebnis $120\\,\\text{J}$ ist um den Faktor $3600$ zu klein.

**Probe:** In Wh: $60 \\cdot 2 = 120\\,\\text{Wh}$ — das ist der Lerner-Wert, nur die Einheit ist falsch (Wh statt J). Faktor $3600$ ist genau die Sekunden-pro-Stunde-Umrechnung.

**Typischer Fehler:** Einheit "Joule" gefordert, aber mit Stunden gerechnet — wird nur in Wh richtig.`,
        [
          'Welche Einheit hat $1\\,\\text{J}$ in Watt mal Sekunde?',
          'Wandle $2\\,\\text{h}$ in Sekunden um.',
          '$60 \\cdot 7200 = ?$.',
        ],
        {
          1: 'Die Aufgabe nennt $60\\,\\text{W}$ ausdrücklich — keine Verwechslung mit kW. Der Faktor $1000$ tritt nicht auf.',
          2: 'Die Formel $W = P\\cdot t$ ist die Standard-Formel für konstante Leistung. Sie ist hier sehr wohl anwendbar.',
          3: 'Eine Glühbirne wandelt elektrische Energie zwar (überwiegend) in Wärme/Licht um, der Verbrauch an elektrischer Energie ist aber genau $W = P\\cdot t$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['w-pt'] },
      ),

      // Zeile 10: transfer · number-input · uses=[w-pt]
      ni(
        'Wie lange muss ein Wasserkocher mit $P = 2\\,\\text{kW}$ laufen, um genau $W = 0{,}5\\,\\text{kWh}$ Energie zu liefern? Antwort in Minuten.',
        15, 0.05, 'min',
        `**Ansatz:** $W = P\\cdot t$ nach $t$ umgestellt: $t = W/P$.

**Rechnung:** $t = 0{,}5\\,\\text{kWh}/2\\,\\text{kW} = 0{,}25\\,\\text{h} = 15\\,\\text{min}$.

**Probe:** $P\\cdot t = 2\\,\\text{kW} \\cdot 0{,}25\\,\\text{h} = 0{,}5\\,\\text{kWh}$ ✓.

**Typischer Fehler:** $t = P/W = 4$ angesetzt — Bruch umgekehrt, würde "$\\text{kW/kWh} = 1/\\text{h}$" liefern, nicht Stunden.`,
        [
          'Stelle $W = P\\cdot t$ nach $t$ um.',
          'Beide Größen in kW bzw. kWh — kürzt sich zu Stunden.',
          'Stunden in Minuten umrechnen (×60).',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['w-pt'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [2] Wirkungsgrad $\eta = P_{ab}/P_{zu}$ (concept: eta-et)
    // ═════════════════════════════════════════════════════════════════════
    2: [
      // Zeile 11: recognize · true-false · uses=[eta-et]
      tf(
        'Der Wirkungsgrad eines realen Energiewandlers ist immer kleiner als $1$, weil ein Teil der zugeführten Energie als Verlust (meist Wärme) abgegeben wird.',
        true,
        `**Ansatz:** Energieerhaltung in Verbindung mit dem zweiten Hauptsatz: nicht alle Energie kann verlustfrei in die gewünschte Form umgewandelt werden.

**Rechnung:** $\\eta = P_\\text{ab}/P_\\text{zu}$ mit $P_\\text{ab} \\le P_\\text{zu}$, also $\\eta \\le 1$. Realer Wandler: $P_\\text{V} = P_\\text{zu} - P_\\text{ab} > 0$, daraus $\\eta < 1$.

**Probe:** Typische Werte: Elektromotor $\\eta \\approx 0{,}9$, Glühbirne $\\eta \\approx 0{,}05$ (Rest ist Wärme), Solarzelle $\\eta \\approx 0{,}2$.

**Typischer Fehler:** "$\\eta = 1$ ist möglich" angenommen — gilt nur idealisiert (z. B. Supraleiter ohne Lager-Verluste); reale Geräte haben immer $\\eta < 1$.`,
        [
          'Was geschieht mit der Differenz $P_\\text{zu} - P_\\text{ab}$?',
          'Welcher physikalische Erhaltungssatz steckt dahinter?',
          'Wirkungsgrad-Werte typischer Geräte recherchieren — sind sie kleiner oder größer als 1?',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['eta-et'] },
      ),

      // Zeile 12: apply-guided · multiple-choice · uses=[eta-et]
      mc(
        'Ein Gerät zieht aus dem Netz die Leistung $P_\\text{zu} = 500\\,\\text{W}$ und gibt mechanisch $P_\\text{ab} = 400\\,\\text{W}$ ab. Wie groß ist der Wirkungsgrad?',
        ['$0{,}80$', '$1{,}25$', '$0{,}20$', '$100\\,\\text{W}$'],
        0,
        `**Ansatz:** Direkt Definitionsformel anwenden: $\\eta = P_\\text{ab}/P_\\text{zu}$.

**Rechnung:** $\\eta = 400/500 = 0{,}80$.

**Probe:** Plausibilität: $\\eta < 1$, Verlustleistung $P_\\text{V} = 500 - 400 = 100\\,\\text{W}$, das sind $20\\,\\%$ — passt zu $1 - 0{,}8 = 0{,}2$ ✓.

**Typischer Fehler:** Bruch umgekehrt ($P_\\text{zu}/P_\\text{ab} = 1{,}25$) — würde $\\eta > 1$ ergeben, physikalisch unmöglich.`,
        [
          'Welche Größe steht im Zähler — abgegeben oder zugeführt?',
          '$\\eta = P_\\text{ab}/P_\\text{zu}$.',
          '$400/500 = 0{,}8$.',
        ],
        {
          1: '$1{,}25 = P_\\text{zu}/P_\\text{ab}$ — Bruch umgekehrt. Ein realer Wirkungsgrad kann nicht $> 1$ sein.',
          2: '$0{,}20 = (P_\\text{zu} - P_\\text{ab})/P_\\text{zu}$ — das ist der Verlust-Anteil, nicht der Wirkungsgrad.',
          3: '$100\\,\\text{W}$ ist die Verlustleistung $P_\\text{V}$, kein Wirkungsgrad. Wirkungsgrad ist eine dimensionslose Verhältniszahl.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['eta-et'] },
      ),

      // Zeile 13: apply-independent · number-input · uses=[eta-et]
      ni(
        'Ein Motor hat einen Wirkungsgrad $\\eta = 0{,}9$ und gibt mechanisch $P_\\text{ab} = 1{,}8\\,\\text{kW}$ ab. Welche elektrische Eingangsleistung $P_\\text{zu}$ in Watt benötigt er?',
        2000, 1, 'W',
        `**Ansatz:** $\\eta = P_\\text{ab}/P_\\text{zu}$ nach $P_\\text{zu}$ umstellen.

**Rechnung:** $P_\\text{zu} = P_\\text{ab}/\\eta = 1800\\,\\text{W}/0{,}9 = 2000\\,\\text{W}$.

**Probe:** Querprobe: $\\eta = 1800/2000 = 0{,}9$ ✓.

**Typischer Fehler:** $P_\\text{zu} = \\eta \\cdot P_\\text{ab} = 0{,}9 \\cdot 1800 = 1620\\,\\text{W}$ — Bruch umgekehrt, Eingang wäre dann sogar kleiner als der Ausgang (Wirkungsgrad $> 1$).`,
        [
          'Welche Größe ist gesucht? Welche Definition kannst du nutzen?',
          'Stelle $\\eta = P_\\text{ab}/P_\\text{zu}$ nach $P_\\text{zu}$ um.',
          '$1800/0{,}9 = 2000$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['eta-et'] },
      ),

      // Zeile 14: error-analysis · multiple-choice · uses=[eta-et]
      mc(
        'Bei $P_\\text{zu} = 1000\\,\\text{W}$ und $P_\\text{ab} = 750\\,\\text{W}$ rechnet ein Lerner $\\eta = 1000/750 \\approx 1{,}33$. Welcher Fehler liegt vor?',
        [
          'Bruch umgekehrt — $\\eta = P_\\text{ab}/P_\\text{zu}$, also $750/1000 = 0{,}75$. Ein Wirkungsgrad $> 1$ ist physikalisch unmöglich.',
          'Die Werte $1000$ und $750$ sind in der Aufgabe vertauscht.',
          'Wirkungsgrad wird in Prozent statt als Dezimalzahl angegeben.',
          'Das Gerät hat keinen Wirkungsgrad, weil es keine Energie umwandelt.',
        ],
        0,
        `**Ansatz:** $\\eta$ ist immer "Nutzen geteilt durch Aufwand" — der Aufwand ($P_\\text{zu}$) steht im Nenner.

**Rechnung:** Korrekt: $\\eta = 750/1000 = 0{,}75 = 75\\,\\%$. Lerner-Wert $1{,}33 = 4/3$ ist der Kehrwert.

**Probe:** Plausibilitäts-Check: jeder Wirkungsgrad-Wert $> 1$ entlarvt einen Vorzeichen- oder Bruch-Fehler — bei realen Geräten gilt immer $\\eta \\le 1$.

**Typischer Fehler:** "$\\eta = $ größer/kleiner durch größer/kleiner" intuitiv falsch zugeordnet.`,
        [
          'Welche Größe gehört in den Zähler, welche in den Nenner?',
          'Plausibilitäts-Check: Welcher Wert von $\\eta$ ist physikalisch möglich?',
          'Vergleiche $1000/750$ mit $750/1000$.',
        ],
        {
          1: 'Die Werte stehen so in der Aufgabe — der Fehler liegt in der Reihenfolge im Bruch, nicht in den Werten selbst.',
          2: 'Die Prozent-Schreibweise $75\\,\\%$ entspricht $0{,}75$ — der Fehler des Lerners hat damit nichts zu tun.',
          3: 'Das Gerät wandelt durchaus Energie um — die $250\\,\\text{W}$ Differenz sind Verluste (typischerweise Wärme).',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['eta-et'] },
      ),

      // Zeile 15: transfer · number-input · uses=[eta-et]
      ni(
        'Eine Pumpe hat einen Wirkungsgrad $\\eta = 0{,}6$ und entnimmt aus dem Netz die Leistung $P_\\text{zu} = 500\\,\\text{W}$. Wie viel Leistung $P_\\text{V}$ wird in Wärme verloren? In Watt.',
        200, 1, 'W',
        `**Ansatz:** Verlustleistung = Eingangsleistung minus Nutzleistung; oder direkt $P_\\text{V} = (1-\\eta)\\cdot P_\\text{zu}$.

**Rechnung:** $P_\\text{ab} = \\eta\\cdot P_\\text{zu} = 0{,}6 \\cdot 500 = 300\\,\\text{W}$. $P_\\text{V} = 500 - 300 = 200\\,\\text{W}$. Direkt: $(1 - 0{,}6) \\cdot 500 = 0{,}4 \\cdot 500 = 200\\,\\text{W}$.

**Probe:** Bilanz: $P_\\text{ab} + P_\\text{V} = 300 + 200 = 500 = P_\\text{zu}$ ✓ (Energieerhaltung).

**Typischer Fehler:** $P_\\text{V} = \\eta \\cdot P_\\text{zu} = 300$ — verwechselt Verlust mit Nutzleistung.`,
        [
          'Was bedeuten die Worte "in Wärme verloren" — ist das die Nutzleistung oder der Rest?',
          '$P_\\text{V} = P_\\text{zu} - P_\\text{ab}$ oder $P_\\text{V} = (1-\\eta)\\cdot P_\\text{zu}$.',
          '$0{,}4 \\cdot 500 = 200$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['eta-et'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [3] Stromwärme $P_R = I^2 R$ (concept: p-r-i2r)
    // ═════════════════════════════════════════════════════════════════════
    3: [
      // Zeile 16: recognize · true-false · uses=[p-r-i2r]
      tf(
        'Die im Widerstand in Wärme umgesetzte Verlustleistung ist $P_R = I^{2}\\cdot R$ — sie wächst mit dem Quadrat des Stroms.',
        true,
        `**Ansatz:** Aus $P = U\\cdot I$ und $U = R\\cdot I$ folgt $P = (RI)\\cdot I = I^{2}R$.

**Rechnung:** Bei doppeltem Strom: $P_R(2I) = (2I)^{2}\\cdot R = 4 I^{2} R = 4\\,P_R(I)$ — Vervierfachung der Verlustleistung.

**Probe:** $I = 1\\,\\text{A}$, $R = 10\\,\\Omega$ → $P_R = 10\\,\\text{W}$. $I = 2\\,\\text{A}$ → $P_R = 40\\,\\text{W}$ (Faktor 4) ✓.

**Typischer Fehler:** Linearer Zusammenhang $P_R = I\\cdot R$ angenommen — lässt sich aus dem Ohmschen Gesetz NICHT herleiten und ergibt eine falsche Einheit.`,
        [
          'Welche Größe wird quadriert?',
          'Setze $U = R\\,I$ in $P = U\\,I$ ein.',
          'Wie skaliert $P_R$, wenn $I$ verdoppelt wird?',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['p-r-i2r'] },
      ),

      // Zeile 17: apply-guided · multiple-choice · uses=[p-r-i2r]
      mc(
        'Durch einen Widerstand $R = 20\\,\\Omega$ fließt ein Strom $I = 3\\,\\text{A}$. Welche Leistung wird im Widerstand in Wärme umgesetzt?',
        ['$180\\,\\text{W}$', '$60\\,\\text{W}$', '$23\\,\\text{W}$', '$9\\,\\text{W}$'],
        0,
        `**Ansatz:** Stromwärme-Formel: $P_R = I^{2}\\cdot R$.

**Rechnung:** $P_R = 3^{2}\\cdot 20 = 9 \\cdot 20 = 180\\,\\text{W}$.

**Probe:** Querprobe via $U = R\\,I = 60\\,\\text{V}$, dann $P = U\\,I = 60 \\cdot 3 = 180\\,\\text{W}$ ✓.

**Typischer Fehler:** Quadrieren vergessen ($I\\cdot R = 60$, ergibt eine Spannung in Volt) oder $I+R = 23$ addiert.`,
        [
          'Welche Formel passt für die Verlustleistung im Widerstand?',
          '$P = I^{2}\\cdot R$ — vergiss das Quadrat nicht.',
          '$3^{2} = 9$, dann mal $20$.',
        ],
        {
          1: '$60$ ist $I \\cdot R$ — eine Spannung in Volt, nicht eine Leistung. Du hast das Quadrat vergessen.',
          2: '$23 = I + R$ — Addition unterschiedlicher Einheiten ist nicht erlaubt.',
          3: '$9 = I^{2}$ ohne Multiplikation mit $R$. Du hast den letzten Schritt vergessen.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['p-r-i2r'] },
      ),

      // Zeile 18: apply-independent · number-input · uses=[p-r-i2r]
      ni(
        'Wie groß ist die Verlustleistung an einem Leiter mit $R = 2\\,\\Omega$, durch den ein Strom $I = 10\\,\\text{A}$ fließt? Antwort in Watt.',
        200, 0.5, 'W',
        `**Ansatz:** Stromwärme-Gesetz: $P_R = I^{2}\\cdot R$.

**Rechnung:** $P_R = 10^{2}\\cdot 2 = 100 \\cdot 2 = 200\\,\\text{W}$.

**Probe:** Über Spannung: $U = R\\,I = 20\\,\\text{V}$, $P = UI = 20\\cdot 10 = 200\\,\\text{W}$ ✓.

**Typischer Fehler:** $R$ doppelt angesetzt ($I\\cdot R^{2} = 40$) oder $I^{2}/R = 50$ statt $\\cdot R$.`,
        [
          '$P_R = I^{2}\\cdot R$ — Strom quadriert.',
          '$10^{2} = 100$.',
          '$100 \\cdot 2 = 200$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['p-r-i2r'] },
      ),

      // Zeile 19: error-analysis · multiple-choice · uses=[p-r-i2r]
      mc(
        'Bei $R = 4\\,\\Omega$ und $I = 5\\,\\text{A}$ rechnet ein Lerner die Verlustleistung als $P = I\\cdot R = 5 \\cdot 4 = 20\\,\\text{W}$. Welcher Fehler liegt vor?',
        [
          'Strom nicht quadriert — korrekt $P_R = I^{2}\\cdot R = 25 \\cdot 4 = 100\\,\\text{W}$.',
          'Die Werte $R$ und $I$ sind vertauscht.',
          'Die Verlustleistung tritt nur bei Wechselstrom auf.',
          'Die Einheit muss Volt sein, nicht Watt.',
        ],
        0,
        `**Ansatz:** Korrekt $P_R = I^{2}\\cdot R$, der Lerner hat das Quadrat vergessen.

**Rechnung:** Lerner: $5 \\cdot 4 = 20$, das ist tatsächlich $U = R\\cdot I$ in Volt — also eine Spannung mit "Watt" beschriftet, nicht die Leistung. Korrekt: $25 \\cdot 4 = 100\\,\\text{W}$.

**Probe:** Über $P = U\\cdot I = 20\\,\\text{V} \\cdot 5\\,\\text{A} = 100\\,\\text{W}$ ✓ — die korrekte Leistung ist also fünfmal so groß wie der Lerner-Wert.

**Typischer Fehler:** Aus drei äquivalenten Formeln (UI, U²/R, I²R) versehentlich $UR$ gebildet — das hat keine Leistungs-Bedeutung.`,
        [
          'Vergleiche das Lerner-Ergebnis mit $I^{2}\\cdot R$.',
          'Welche Einheit hat $I\\cdot R$?',
          'Wie kommt $5 \\cdot 4$ in physikalischer Sprache zustande?',
        ],
        {
          1: '$5\\cdot 4$ und $4\\cdot 5$ ergeben dasselbe — Vertauschung erklärt den Fehler nicht.',
          2: 'Das Stromwärmegesetz gilt für Gleichstrom direkt; bei Wechselstrom mit Effektivwert ebenso. Der Fehler liegt unabhängig davon im Quadrat.',
          3: 'Watt ist die korrekte Einheit für Leistung; der Wert $20\\,\\text{V}$ entspricht eben $U = R\\,I$, nicht $P_R$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['p-r-i2r'] },
      ),

      // Zeile 20: transfer · number-input · uses=[p-r-i2r]
      ni(
        'Verdoppelt man den Strom durch einen Widerstand bei sonst gleichen Bedingungen, um welchen Faktor steigt die im Widerstand umgesetzte Verlustleistung? (Antwort als reine Zahl ohne Einheit.)',
        4, 0.001, '',
        `**Ansatz:** Quadratische Abhängigkeit $P_R \\propto I^{2}$ ausnutzen.

**Rechnung:** $P_R(2I)/P_R(I) = (2I)^{2}\\cdot R / (I^{2}\\cdot R) = 4 I^{2}/I^{2} = 4$.

**Probe:** Konkret: bei $I = 1\\,\\text{A}$, $R = 5\\,\\Omega$ ist $P_R = 5\\,\\text{W}$. Bei $I = 2\\,\\text{A}$ → $P_R = 20\\,\\text{W} = 4\\cdot 5\\,\\text{W}$ ✓.

**Typischer Fehler:** Linear gedacht (Faktor $2$) — die Quadrat-Abhängigkeit von $I$ wird oft übersehen, ist aber praxis-relevant (Hochspannungs-Übertragung minimiert $I$, um $I^{2}R$-Verluste klein zu halten).`,
        [
          'Wie geht $I$ in $P_R = I^{2}\\,R$ ein?',
          'Bilde das Verhältnis $(2I)^{2}/I^{2}$.',
          '$2^{2} = 4$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['p-r-i2r'] },
      ),
    ],

    // ═════════════════════════════════════════════════════════════════════
    // [4] Haushaltsspannungen 230 V / 400 V (concept: haushalt-u)
    // ═════════════════════════════════════════════════════════════════════
    4: [
      // Zeile 21: recognize · true-false · uses=[haushalt-u]
      tf(
        'In österreichischen und deutschen Wohnhäusern beträgt die Effektivspannung an einer Schuko-Steckdose $230\\,\\text{V}$ und die verkettete Drehstrom-Spannung $400\\,\\text{V}$.',
        true,
        `**Ansatz:** Standardisierte Netzspannungen im europäischen Niederspannungsnetz.

**Rechnung:** Einphasig (Außenleiter gegen Neutralleiter): $U = 230\\,\\text{V}$. Verkettet (Außenleiter gegen Außenleiter): $U_\\text{LL} = 230 \\cdot \\sqrt{3} \\approx 400\\,\\text{V}$.

**Probe:** $230 \\cdot 1{,}732 \\approx 398{,}4\\,\\text{V}$ — Normwert wird zu $400\\,\\text{V}$ aufgerundet.

**Typischer Fehler:** USA-Werte ($120\\,\\text{V}$, $60\\,\\text{Hz}$) angenommen — gelten nicht in Europa.`,
        [
          'Welche Standard-Steckdose hat zu Hause die rote/eine Phase?',
          'Effektivwert ist der "üblicherweise angegebene" Wert — nicht der Spitzenwert.',
          'Faktor zwischen $230$ und $400$: $\\sqrt{3} \\approx 1{,}732$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['haushalt-u'] },
      ),

      // Zeile 22: apply-guided · multiple-choice · uses=[haushalt-u]
      mc(
        'Welche Spannung steht an einer typischen Haushaltssteckdose (Schuko) zur Verfügung?',
        ['$230\\,\\text{V}$', '$110\\,\\text{V}$', '$400\\,\\text{V}$', '$12\\,\\text{V}$'],
        0,
        `**Ansatz:** Einphasige Niederspannung in Europa: $230\\,\\text{V}$ (Effektivwert).

**Rechnung:** Schuko = Schutzkontakt-Steckdose, ein Außenleiter (L) plus Neutralleiter (N) plus Schutzleiter (PE). Spannung L-N: $230\\,\\text{V}$.

**Probe:** Spitzenwert für Bauteilauslegung: $230\\cdot\\sqrt{2}\\approx 325\\,\\text{V}$ — passt zur typischen Bauteil-Bemessung "$300\\,\\text{V}$ DC nicht ausreichend, $400\\,\\text{V}$ reicht".

**Typischer Fehler:** USA-Wert $110\\,\\text{V}$ (eigentlich $120\\,\\text{V}$, $60\\,\\text{Hz}$) auf Europa übertragen.`,
        [
          'Welche Norm gilt im europäischen Wohnungsnetz?',
          'Schuko vs. Drehstrom — welcher Anschluss bringt $400\\,\\text{V}$?',
          'Effektivwert in Europa ist $230\\,\\text{V}$.',
        ],
        {
          1: '$110\\,\\text{V}$ (genauer $120\\,\\text{V}$) ist die nordamerikanische Netzspannung. In Europa gelten $230\\,\\text{V}$.',
          2: '$400\\,\\text{V}$ ist die verkettete Drehstrom-Spannung — nicht an einer normalen Schuko-Steckdose verfügbar.',
          3: '$12\\,\\text{V}$ ist Niederspannung (z. B. KFZ, Halogen-Trafo), nicht das normale Hausnetz.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['haushalt-u'] },
      ),

      // Zeile 23: apply-independent · multiple-choice · uses=[haushalt-u]
      mc(
        'An welcher Anschluss-Art liegt im Haushalt typischerweise die Drehstrom-Spannung von $400\\,\\text{V}$ verkettet an?',
        [
          'CEE-Drehstrom-Steckdose (rot, "Kraftstrom", z. B. CEE-16A oder CEE-32A)',
          'Schuko-Schutzkontakt-Steckdose',
          'USB-Buchse (z. B. an einem USB-Ladegerät)',
          'Lichtschalter im Wohnzimmer',
        ],
        0,
        `**Ansatz:** Drehstrom-Verbraucher (E-Herd, Wallbox, Kreissäge) brauchen drei Außenleiter — diese werden über CEE-Industriesteckdosen ("Kraftstrom") angeschlossen.

**Rechnung:** CEE-Stecker führen drei Phasen $L_1, L_2, L_3$ — jeweils $230\\,\\text{V}$ gegen Neutralleiter, $400\\,\\text{V}$ verkettet.

**Probe:** E-Herd-Anschlussklemme im Verteilerkasten: meist 5 Adern (3× L + N + PE) — typisches Drehstromnetz.

**Typischer Fehler:** Schuko mit Drehstrom verwechselt — Schuko hat nur einen Außenleiter und führt $230\\,\\text{V}$.`,
        [
          'Welcher Anschluss hat drei Phasen?',
          'Drehstrom-Steckdose ist meist rot/blau und größer als Schuko.',
          'Welche Geräte brauchen 400 V (E-Herd, Wallbox)?',
        ],
        {
          1: 'Schuko führt nur $230\\,\\text{V}$ (eine Phase + N) — Drehstrom $400\\,\\text{V}$ braucht drei Phasen.',
          2: 'USB liefert über Trafo Kleinspannung ($5\\,\\text{V}$ oder $9$/$12$/$20\\,\\text{V}$ bei USB-PD) — nichts mit Drehstrom.',
          3: 'Ein Lichtschalter schaltet einen Außenleiter — daran liegen $230\\,\\text{V}$ einphasig, kein Drehstrom.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['haushalt-u'] },
      ),

      // Zeile 24: error-analysis · multiple-choice · uses=[haushalt-u]
      mc(
        'Ein Lerner glaubt: "Drehstrom $400\\,\\text{V}$ bedeutet, dass jede der drei Phasen einzeln $400\\,\\text{V}$ gegen Erde führt." Welcher Fehler liegt vor?',
        [
          '$400\\,\\text{V}$ ist die verkettete Spannung zwischen zwei Außenleitern; jede einzelne Phase gegen Neutralleiter (≈ Erde) führt $230\\,\\text{V}$. Es gilt $400 = 230\\cdot\\sqrt{3}$.',
          'Der Effektivwert wurde mit dem Spitzenwert verwechselt.',
          'Drehstrom hat in Wirklichkeit nur zwei Außenleiter.',
          'Die Spannung beträgt nur kurzzeitig $400\\,\\text{V}$.',
        ],
        0,
        `**Ansatz:** Drehstrom-System hat drei um $120^{\\circ}$ phasenverschobene Außenleiter — $400\\,\\text{V}$ ist die Differenzspannung zwischen zwei Außenleitern.

**Rechnung:** Phase gegen Neutralleiter (Sternspannung): $U_\\text{Stern} = 230\\,\\text{V}$. Phase gegen Phase (Dreiecksspannung, verkettet): $U_\\text{LL} = U_\\text{Stern}\\cdot\\sqrt{3} = 230 \\cdot 1{,}732 \\approx 400\\,\\text{V}$.

**Probe:** Würde jede Phase einzeln $400\\,\\text{V}$ gegen Erde führen, wäre die verkettete Spannung $400\\cdot\\sqrt{3} \\approx 693\\,\\text{V}$ — das gibt es im Niederspannungsnetz nicht.

**Typischer Fehler:** Stern- mit Dreiecksspannung verwechselt; meist aus Unkenntnis der $\\sqrt{3}$-Beziehung im Drehstromsystem.`,
        [
          'Wo wird "verkettete Spannung" gemessen?',
          'Welche Beziehung gilt zwischen Stern- und Dreiecksspannung?',
          'Plausibilität: würde Phase gegen Erde wirklich $400\\,\\text{V}$ sein, wäre eine Schuko-Steckdose lebensgefährlicher.',
        ],
        {
          1: 'Spitzenwert verkettet wäre $400\\cdot\\sqrt{2}\\approx 566\\,\\text{V}$ — der Lerner-Fehler liegt aber im Verständnis von "verkettet", nicht in Effektiv-/Spitzenwert.',
          2: 'Drehstrom hat per Definition drei um $120^{\\circ}$ phasenverschobene Außenleiter — zwei wären keine "Drei-Phasen-Spannung".',
          3: 'Die $400\\,\\text{V}$ liegen kontinuierlich an (Effektivwert) — keine Spitzen-Erscheinung.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['haushalt-u'] },
      ),

      // Zeile 25: transfer · matching · uses=[haushalt-u]
      matching(
        'Ordne jede Anwendung der typisch zugehörigen Spannung zu (alle Werte in Europa, alle Effektivwerte falls nicht anders angegeben).',
        [
          { left: 'Glühlampe an Schuko-Steckdose',                         right: '$230\\,\\text{V}$' },
          { left: 'E-Herd-Drehstromanschluss (verkettet)',                 right: '$400\\,\\text{V}$' },
          { left: 'Spitzenwert einer Schuko-Steckdose ($\\hat u$)',        right: '$\\approx 325\\,\\text{V}$' },
          { left: 'Halogen-Niederspannungs-Lichtsystem',                   right: '$12\\,\\text{V}$' },
        ],
        `**Ansatz:** Effektivwert vs. Spitzenwert, einphasig vs. verkettet, Hochspannung vs. Niederspannung.

**Rechnung:**
- Schuko-Lampe: einphasiger Effektivwert $= 230\\,\\text{V}$.
- E-Herd-Drehstrom: verketteter Effektivwert $= 230\\cdot\\sqrt{3} \\approx 400\\,\\text{V}$.
- Spitzenwert einphasig: $\\hat u = 230\\cdot\\sqrt{2} \\approx 325\\,\\text{V}$.
- Halogen-Niederspannung: per Trafo herabgesetzt auf $12\\,\\text{V}$.

**Probe:** Faktoren stimmen: $325/230 \\approx \\sqrt{2}$, $400/230 \\approx \\sqrt{3}$ ✓.

**Typischer Fehler:** Effektiv- und Spitzenwert verwechselt — der Spitzenwert $325\\,\\text{V}$ taucht in Bauteildaten auf, nicht in Steckdosen-Beschriftungen.`,
        [
          'Effektivwert ist der "übliche" angegebene Wert; Spitzenwert ist um $\\sqrt{2}$ größer.',
          'Verkettete Drehstrom-Spannung ist um $\\sqrt{3}$ größer als die Sternspannung.',
          'Niederspannungs-Geräte (LED-Strips, Halogen) brauchen Trafo auf 12 V.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['haushalt-u'] },
      ),
    ],
  },
}
