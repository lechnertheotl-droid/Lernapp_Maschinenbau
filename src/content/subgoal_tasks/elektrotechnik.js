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
}
