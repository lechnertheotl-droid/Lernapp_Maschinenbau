// ═══════════════════════════════════════════════════════════════════════════
// Technische Mechanik — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: { [subGoalIndex]: Exercise[] }
// Qualitätskontrakt siehe CLAUDE.md:
//   - Sub-Goal-Label wörtlich zitiert
//   - 4-Block-Erklärung (Ansatz / Rechnung / Probe / Typischer Fehler)
//   - ≥ 3 Hints, gestaffelt
//   - MC ≥ 3 Optionen mit wrongAnswerExplanations für jeden falschen Index
//   - Typen-Rotation pro Sub-Goal
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting, tag } from './_helpers'

export const technischeMechanikSubGoalTasks = {

  // ────────────────────────────────────────────────────────────────────────
  // mech-0-1 — SI-Basiseinheiten & Präfixe  (3 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-0-1': {

    // ── [0] SI-Präfixe giga, mega, kilo, milli, mikro, nano zuordnen ────
    0: [
      tf(
        'Der Präfix mega (M) entspricht dem Faktor $10^{6}$.',
        true,
        `**Ansatz:** Im Präfix-Kalender steigt jeder Schritt um Faktor $1000$: kilo ($10^{3}$) → mega ($10^{6}$) → giga ($10^{9}$).

**Rechnung:** mega liegt zwei Stufen über „keinem Präfix": $10^{0} \\cdot 1000 \\cdot 1000 = 10^{6}$.

**Probe:** $1\\,\\text{MW} = 10^{6}\\,\\text{W} = 1\\,000\\,000\\,\\text{W}$ — entspricht der Leistung mehrerer Großverbraucher. ✓

**Typischer Fehler:** mega mit giga ($10^{9}$) verwechseln — beide Großbuchstaben (M/G), aber Faktor $1000$ Unterschied.`,
        [
          'Ein Schritt im Präfix-Kalender ist Faktor $1000$.',
          'Zähle vom Grundwert ($10^{0}$): kilo, mega, giga.',
          'mega = zwei Stufen über $10^{0}$ = $10^{6}$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['praefixe-1000'] },
      ),
      mc(
        'Wie viele Watt sind $5\\,\\text{MW}$?',
        [
          '$5 \\cdot 10^{6}\\,\\text{W}$',
          '$5 \\cdot 10^{3}\\,\\text{W}$',
          '$5 \\cdot 10^{9}\\,\\text{W}$',
          '$5 \\cdot 10^{-6}\\,\\text{W}$',
        ],
        0,
        `**Ansatz:** Präfix M = mega = $10^{6}$. Die Zahl bleibt erhalten, das Symbol wird durch die Zehnerpotenz ersetzt.

**Rechnung:** $5\\,\\text{MW} = 5 \\cdot 10^{6}\\,\\text{W} = 5\\,000\\,000\\,\\text{W}$.

**Probe:** Eine Windkraftanlage hat typischerweise $2$–$5\\,\\text{MW}$, also Millionen Watt — Größenordnung passt. ✓

**Typischer Fehler:** mega ($10^{6}$) mit kilo ($10^{3}$) oder giga ($10^{9}$) verwechseln — alle drei sind positive Präfixe, der Faktor unterscheidet sich aber jeweils um $1000$.`,
        [
          'Präfix M steht für mega.',
          'mega entspricht dem Faktor $10^{6}$.',
          '$5\\,\\text{MW}$ heißt: Zahl mal $10^{6}$ in der Einheit Watt.',
        ],
        {
          1: 'Das wäre $5\\,\\text{kW}$ (kilo, $10^{3}$). M steht für mega, nicht kilo.',
          2: 'Das wäre $5\\,\\text{GW}$ (giga, $10^{9}$). Faktor $1000$ zu groß.',
          3: 'Hier wurde mega mit mikro ($10^{-6}$) verwechselt. Großbuchstabe M = mega, Kleinbuchstabe „µ" = mikro.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['praefixe-1000'] },
      ),
      ni(
        'Wie viele Watt sind $0{,}25\\,\\text{GW}$? Gib das Ergebnis in $\\text{W}$ an.',
        250000000, 1, 'W',
        `**Ansatz:** Präfix G = giga = $10^{9}$. Zahl mal Zehnerpotenz.

**Rechnung:** $0{,}25\\,\\text{GW} = 0{,}25 \\cdot 10^{9}\\,\\text{W} = 2{,}5 \\cdot 10^{8}\\,\\text{W} = 250\\,000\\,000\\,\\text{W}$.

**Probe:** $0{,}25\\,\\text{GW} = 250\\,\\text{MW}$ (Faktor $1000$ kleiner). $250\\,\\text{MW} = 250 \\cdot 10^{6}\\,\\text{W} = 2{,}5 \\cdot 10^{8}\\,\\text{W}$. ✓

**Typischer Fehler:** giga mit mega ($10^{6}$) verwechseln — dann käme nur $250\\,000\\,\\text{W}$ heraus (Faktor $1000$ zu klein).`,
        [
          'G = giga = $10^{9}$.',
          'Schreibe $0{,}25 \\cdot 10^{9}$ als Dezimalzahl — neun Stellen verschieben.',
          'Das Komma wandert um neun Stellen nach rechts; Nullen auffüllen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['praefixe-1000'] },
      ),
      mc(
        'Ein Studierender rechnet: $4\\,\\text{MJ} = 4 \\cdot 10^{9}\\,\\text{J}$. Welcher Fehler liegt vor?',
        [
          'M (mega) wurde mit G (giga) verwechselt — richtig ist $4 \\cdot 10^{6}\\,\\text{J}$.',
          'M und G unterscheiden sich nur in der Schreibweise — beide stehen für $10^{9}$.',
          'Korrekt — $\\text{MJ}$ bedeutet immer $10^{9}\\,\\text{J}$.',
          'Die Mantisse $4$ ist falsch; richtig wäre $40 \\cdot 10^{9}\\,\\text{J}$.',
        ],
        0,
        `**Ansatz:** mega = $10^{6}$, giga = $10^{9}$. Beide Großbuchstaben (M/G), aber Faktor $1000$ Unterschied.

**Rechnung:** $4\\,\\text{MJ} = 4 \\cdot 10^{6}\\,\\text{J} = 4\\,000\\,000\\,\\text{J}$. Der Studierende hat den Exponenten $9$ statt $6$ angesetzt.

**Probe:** $1\\,\\text{MJ}$ ist die Energie zum Heben von $\\approx 100\\,\\text{kg}$ um $1000\\,\\text{m}$ — eine alltägliche Größenordnung. $1\\,\\text{GJ} = 1000\\,\\text{MJ}$ wäre ein viel größerer Energiebetrag. ✓

**Typischer Fehler:** Bei Großbuchstaben (M, G, T, P) den Exponenten raten, statt den Präfix-Kalender abzulesen.`,
        [
          'Präfix-Kalender: kilo $10^{3}$, mega $10^{6}$, giga $10^{9}$.',
          'M und G sind nicht dasselbe — vergleiche die Faktoren.',
          'Welcher Exponent gehört zu M (mega)?',
        ],
        {
          1: 'Falsch — M und G unterscheiden sich um Faktor $1000$. M = mega = $10^{6}$, G = giga = $10^{9}$.',
          2: 'Falsch — $\\text{MJ}$ bedeutet $10^{6}\\,\\text{J}$, nicht $10^{9}\\,\\text{J}$.',
          3: 'Die Mantisse $4$ ist korrekt; der Fehler liegt im Exponenten, nicht in der Vorzahl.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['praefixe-1000'] },
      ),
      matching(
        'Ordne jeder Zeitangabe ihren Wert in Sekunden zu.',
        [
          { left: '$5\\,\\text{ns}$', right: '$5 \\cdot 10^{-9}\\,\\text{s}$' },
          { left: '$5\\,\\text{µs}$', right: '$5 \\cdot 10^{-6}\\,\\text{s}$' },
          { left: '$5\\,\\text{ms}$', right: '$5 \\cdot 10^{-3}\\,\\text{s}$' },
          { left: '$5\\,\\text{ks}$', right: '$5 \\cdot 10^{3}\\,\\text{s}$' },
          { left: '$5\\,\\text{Ms}$', right: '$5 \\cdot 10^{6}\\,\\text{s}$' },
        ],
        `**Ansatz:** Jede Präfix-Stufe ändert den Exponenten um $\\pm 3$. Negative Exponenten = Bruchteile, positive = Vielfache.

**Rechnung:** n $= 10^{-9}$, µ $= 10^{-6}$, m $= 10^{-3}$, k $= 10^{3}$, M $= 10^{6}$.

**Probe:** Quervergleich: $5\\,\\text{ms}$ ist eine typische Reaktionszeit (Bruchteil einer Sekunde), $5\\,\\text{Ms}$ sind etwa $58\\,$ Tage — passt zu $5 \\cdot 10^{6}\\,\\text{s}$. ✓

**Typischer Fehler:** Klein-„m" (milli) mit Groß-„M" (mega) verwechseln — beide schreibt man im Symbol, der Größen-Unterschied ist Faktor $10^{9}$.`,
        [
          'Negative Exponenten gehören zu Präfixen kleiner als $1$ (n, µ, m).',
          'Positive Exponenten gehören zu Präfixen größer als $1$ (k, M, G).',
          'Schreibweise zählt: m (klein) = milli = $10^{-3}$, M (groß) = mega = $10^{6}$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['praefixe-1000'] },
      ),
      sorting(
        'Sortiere die Präfixe nach **steigendem** Faktor (kleinster zuerst).',
        ['nano (n)', 'mikro (µ)', 'milli (m)', 'kilo (k)', 'mega (M)', 'giga (G)'],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Präfixe stehen in Faktoren von $1000$ auseinander. Negative Exponenten zuerst, dann positive.

**Rechnung:** n $10^{-9}$ < µ $10^{-6}$ < m $10^{-3}$ < k $10^{3}$ < M $10^{6}$ < G $10^{9}$.

**Probe:** Ein $\\text{nm}$ ist deutlich kleiner als ein $\\text{km}$ — die Reihenfolge passt zur physikalischen Anschauung. ✓

**Typischer Fehler:** mikro und milli vertauschen — milli ist $1000$-fach größer als mikro.`,
        [
          'Negative Exponenten kommen vor positiven.',
          'Innerhalb beider Gruppen: kleiner Exponent = kleinerer Wert.',
          'Reihenfolge: n, µ, m, (kein Präfix), k, M, G.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['praefixe-1000'] },
      ),
    ],

    // ── [1] Kilogramm als einzige SI-Basiseinheit mit Präfix ─────────────
    1: [
      tf(
        'Das Kilogramm ist die einzige SI-Basiseinheit, die bereits einen dezimalen Präfix im Namen trägt.',
        true,
        `**Ansatz:** Liste der sieben SI-Basiseinheiten durchgehen: m, kg, s, A, K, mol, cd. Nur „kg" enthält den Präfix „k" (kilo).

**Rechnung:** m, s, A, K, mol, cd haben keinen Präfix. kg hat „kilo" (= $10^{3}$) bereits eingebaut. Konsequenz: $1\\,\\text{g} = 10^{-3}\\,\\text{kg}$, nicht umgekehrt.

**Probe:** Wenn man Tonnen umrechnet, gilt $1\\,\\text{t} = 10^{3}\\,\\text{kg} = 10^{6}\\,\\text{g}$ — die Umrechnung über die Basiseinheit kg läuft sauber. ✓

**Typischer Fehler:** Annehmen, Gramm sei die Basiseinheit. Historisch wurde das Kilogramm als Urkilogramm (Platin-Iridium) festgelegt — daher der Präfix-Sonderfall.`,
        [
          'SI-Basiseinheiten: m, kg, s, A, K, mol, cd — sieben Stück.',
          'Welche dieser sieben Symbole enthält einen Präfix-Buchstaben?',
          'Nur „kg" — das „k" ist der Präfix kilo.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['kg-anomalie'] },
      ),
      mc(
        'Welche der folgenden Aussagen über Gramm und Kilogramm ist **richtig**?',
        [
          '$1\\,\\text{g} = 10^{-3}\\,\\text{kg}$ — das Gramm ist die abgeleitete Einheit, das Kilogramm die SI-Basiseinheit.',
          '$1\\,\\text{g} = 10^{3}\\,\\text{kg}$ — Gramm und Kilogramm verhalten sich umgekehrt.',
          'Gramm und Kilogramm sind beide SI-Basiseinheiten, je nach Anwendung.',
          'Gramm ist die SI-Basiseinheit, Kilogramm ist daraus mit dem Präfix „k" abgeleitet.',
        ],
        0,
        `**Ansatz:** Im SI ist genau das Kilogramm Basiseinheit der Masse. Das Gramm ist daraus über den Präfix milli abgeleitet — als wäre das kg „milli-mal" genommen.

**Rechnung:** $1\\,\\text{g} = 1\\,\\text{m kg} = 10^{-3}\\,\\text{kg}$.

**Probe:** $500\\,\\text{g} = 0{,}5\\,\\text{kg}$ — das passt zu unserer Alltagsanschauung von Gewichtsangaben. ✓

**Typischer Fehler:** Annehmen, das Gramm sei die Grundeinheit. Genau umgekehrt — und genau diese Anomalie ist das Lernziel.`,
        [
          'Welche der sieben SI-Basiseinheiten betrifft Masse?',
          'Es ist das Kilogramm — nicht das Gramm.',
          'Folge: Gramm = $10^{-3}\\,\\text{kg}$ ist abgeleitet.',
        ],
        {
          1: 'Vorzeichen des Exponenten falsch — $1\\,\\text{kg}$ ist $1000$ mal so schwer wie $1\\,\\text{g}$, also $1\\,\\text{g} = 10^{-3}\\,\\text{kg}$.',
          2: 'Falsch — eine SI-Größe hat genau eine Basiseinheit. Für Masse ist das das Kilogramm.',
          3: 'Genau umgekehrt — das Kilogramm ist die historisch festgelegte Basiseinheit, das Gramm leitet sich daraus ab.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['kg-anomalie', 'si-basis-7'] },
      ),
      mc(
        'Welche der sieben SI-Basiseinheiten enthält bereits einen dezimalen Präfix im Symbol?',
        [
          'kg (Kilogramm)',
          'm (Meter)',
          's (Sekunde)',
          'mol (Mol)',
        ],
        0,
        `**Ansatz:** Symbol für Symbol prüfen, ob ein Präfix-Buchstabe (k, M, G, m, µ, n, …) am Anfang steht.

**Rechnung:** „kg" beginnt mit „k" = kilo (Präfix). „m", „s", „mol" enthalten keinen Präfix-Buchstaben (das „m" in „mol" ist Teil des Wortes, nicht der Präfix milli).

**Probe:** $1\\,\\text{kg} = 10^{3}\\,\\text{g}$ — der Präfix wirkt also tatsächlich. ✓

**Typischer Fehler:** Das „m" in „mol" oder „min" als Präfix milli interpretieren. Symbole sind atomar — nur das Kilogramm hat tatsächlich einen Präfix als Bestandteil.`,
        [
          'Präfixe sind: k (kilo), M (mega), G (giga), m (milli), µ (mikro), n (nano) und einige mehr.',
          'Welches Basiseinheiten-Symbol beginnt mit einem dieser Buchstaben?',
          'Nur „kg" — das „k" ist hier echt der Präfix kilo.',
        ],
        {
          1: '„m" ist das Symbol Meter — kein Präfix, sondern selbst eine Basiseinheit.',
          2: '„s" ist das Symbol Sekunde — kein Präfix.',
          3: '„mol" beginnt zwar mit „m", aber „mol" ist atomar — das „m" ist nicht der Präfix milli.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['kg-anomalie'] },
      ),
      mc(
        'Eine Studentin rechnet: „$5\\,\\text{Mg} = 5 \\cdot 10^{6}\\,\\text{kg}$". Welcher Fehler liegt vor?',
        [
          'Das Mega-Präfix wirkt auf das Gramm, nicht auf das Kilogramm: $5\\,\\text{Mg} = 5 \\cdot 10^{6}\\,\\text{g} = 5 \\cdot 10^{3}\\,\\text{kg}$ ($= 5\\,\\text{t}$).',
          'Sie hat die Faktoren $10^{6}$ und $10^{9}$ verwechselt — richtig wäre $5 \\cdot 10^{9}\\,\\text{kg}$.',
          'Das Mega-Präfix wirkt auf das Kilogramm — die Rechnung stimmt.',
          'Der Präfix M bedeutet hier mikro, also $5\\,\\text{Mg} = 5 \\cdot 10^{-6}\\,\\text{kg}$.',
        ],
        0,
        `**Ansatz:** „Mg" wird gelesen als „mega-gramm" — der Präfix M ($10^{6}$) wirkt auf die Buchstabenfolge „g" (Gramm). Nicht auf das Kilogramm.

**Rechnung:** $5\\,\\text{Mg} = 5 \\cdot 10^{6}\\,\\text{g} = 5 \\cdot 10^{6} \\cdot 10^{-3}\\,\\text{kg} = 5 \\cdot 10^{3}\\,\\text{kg} = 5000\\,\\text{kg} = 5\\,\\text{t}$.

**Probe:** $1\\,\\text{Mg} = 1\\,\\text{t}$ ist eine ingenieurübliche Schreibweise (z. B. Tragfähigkeit von Kränen). $5\\,\\text{Mg} = 5\\,\\text{t}$ — sinnvolle Größenordnung. ✓

**Typischer Fehler:** Den Präfix M auf das volle Symbol „kg" anwenden, statt zu erkennen, dass der Präfix nur das „g" trifft. Daraus entstehen Fehler um Faktor $1000$.`,
        [
          'Was bedeutet das Symbol „Mg" wörtlich? Welcher Buchstabe ist Präfix, welcher die Einheit?',
          'M = mega = $10^{6}$, g = Gramm. Mg heißt also $10^{6}\\,\\text{g}$.',
          'Umrechnung in kg: $10^{6}\\,\\text{g} = 10^{3}\\,\\text{kg}$.',
        ],
        {
          1: 'Faktoren stimmen nicht — der Präfix mega ist $10^{6}$, das Endergebnis in kg ist $10^{3}$ wegen der g↔kg-Umrechnung.',
          2: 'Genau das ist der Fehler — der Präfix M wirkt auf das Gramm, nicht auf das Kilogramm.',
          3: 'M (groß) ist mega, nicht mikro. Mikro hätte das Symbol µ (klein).',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['kg-anomalie'] },
      ),
      mc(
        'Welche der folgenden Größen wird **nicht** in einer SI-Basiseinheit gemessen?',
        [
          'Kraft',
          'Lichtstärke',
          'Stoffmenge',
          'thermodynamische Temperatur',
        ],
        0,
        `**Ansatz:** Sieben SI-Basiseinheiten: m (Länge), kg (Masse), s (Zeit), A (Stromstärke), K (Temperatur), mol (Stoffmenge), cd (Lichtstärke).

**Rechnung:** Lichtstärke (cd), Stoffmenge (mol) und Temperatur (K) gehören zu den sieben Basisgrößen. Kraft hingegen ist abgeleitet: $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$.

**Probe:** Newton lässt sich durch kg, m, s ausdrücken — also abgeleitet, nicht Basis. ✓

**Typischer Fehler:** Annehmen, dass Kraft eine Basisgröße sei, weil sie so oft vorkommt. SI-Basisgrößen sind aber die mengen-mäßig elementarsten — Kraft setzt Masse und Beschleunigung zusammen.`,
        [
          'Liste der sieben SI-Basiseinheiten durchgehen.',
          'Kraft hat die Einheit Newton — N. Steht N in der Liste?',
          'Nein. Kraft ist abgeleitet aus kg, m, s.',
        ],
        {
          1: 'Lichtstärke wird in Candela (cd) gemessen — eine der sieben Basiseinheiten.',
          2: 'Stoffmenge wird in mol gemessen — eine der sieben Basiseinheiten.',
          3: 'Thermodynamische Temperatur wird in Kelvin (K) gemessen — eine der sieben Basiseinheiten.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['si-basis-7'] },
      ),
      matching(
        'Ordne jeder SI-Basisgröße ihre Basiseinheit zu.',
        [
          { left: 'Länge', right: 'Meter (m)' },
          { left: 'Masse', right: 'Kilogramm (kg)' },
          { left: 'Zeit', right: 'Sekunde (s)' },
          { left: 'elektrische Stromstärke', right: 'Ampere (A)' },
          { left: 'thermodynamische Temperatur', right: 'Kelvin (K)' },
          { left: 'Stoffmenge', right: 'Mol (mol)' },
          { left: 'Lichtstärke', right: 'Candela (cd)' },
        ],
        `**Ansatz:** Sieben Basisgrößen, sieben Basiseinheiten — jeweils 1:1 zugeordnet.

**Rechnung:** Länge → m, Masse → kg, Zeit → s, Stromstärke → A, Temperatur → K, Stoffmenge → mol, Lichtstärke → cd.

**Probe:** Jede andere physikalische Größe lässt sich aus diesen sieben kombinieren — z. B. Kraft = $\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$, Energie = $\\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$. ✓

**Typischer Fehler:** Gramm statt Kilogramm bei Masse angeben — kg ist Basiseinheit, das Gramm $10^{-3}\\,\\text{kg}$ daraus abgeleitet.`,
        [
          'Sieben Größen, sieben Symbole — keine doppelte Zuordnung.',
          'Die mechanischen Größen Länge, Masse, Zeit haben m, kg, s.',
          'Die nicht-mechanischen Größen sind A (Strom), K (Temperatur), mol (Stoff), cd (Licht).',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['si-basis-7'] },
      ),
    ],

    // ── [2] Wissenschaftliche Notation $a \cdot 10^n$ sicher schreiben ──
    2: [
      tf(
        'Die Zahl $4500$ in wissenschaftlicher Notation lautet $4{,}5 \\cdot 10^{3}$.',
        true,
        `**Ansatz:** Wissenschaftliche Notation verlangt $1 \\leq |a| < 10$. Komma so verschieben, dass genau eine Vorkomma-Ziffer übrig bleibt — der Exponent zählt die Verschiebungen.

**Rechnung:** $4500 \\to 4{,}500 \\to 4{,}5$. Komma um $3$ Stellen nach links → Exponent $+3$. Also $4{,}5 \\cdot 10^{3}$.

**Probe:** Rückrechnung: $4{,}5 \\cdot 10^{3} = 4500$. ✓

**Typischer Fehler:** Mantisse $45$ wählen ($45 \\cdot 10^{2}$) — das ist nicht normiert, weil $|a|$ kleiner als $10$ sein muss.`,
        [
          'Normierungsregel: $1 \\leq |a| < 10$.',
          'Komma so verschieben, dass eine Vorkommaziffer steht.',
          'Anzahl der Verschiebungen = Exponent (nach links: positiv).',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['sci-notation'] },
      ),
      mc(
        'Welche der folgenden Schreibweisen ist die **korrekte** wissenschaftliche Notation von $0{,}000045$?',
        [
          '$4{,}5 \\cdot 10^{-5}$',
          '$45 \\cdot 10^{-6}$',
          '$4{,}5 \\cdot 10^{5}$',
          '$0{,}45 \\cdot 10^{-4}$',
        ],
        0,
        `**Ansatz:** Komma so verschieben, dass die erste Vorkommaziffer zwischen $1$ und $9$ liegt. Bei einer Zahl $<1$ wird der Exponent negativ.

**Rechnung:** $0{,}000045 \\to 4{,}5$. Komma um $5$ Stellen nach **rechts** → Exponent $-5$. Also $4{,}5 \\cdot 10^{-5}$.

**Probe:** Rückrechnung: $4{,}5 \\cdot 10^{-5} = 4{,}5/100\\,000 = 0{,}000045$. ✓

**Typischer Fehler:** Vorzeichen des Exponenten umkehren, weil das Komma "rechts" verschoben wurde. Merke: $<1$ → negativer Exponent, $\\geq 10$ → positiver Exponent.`,
        [
          'Bei Zahlen kleiner als $1$ ist der Exponent negativ.',
          'Komma so verschieben, dass eine Vorkommaziffer übrig ist (zwischen $1$ und $9$).',
          'Zähle die Verschiebungen.',
        ],
        {
          1: 'Mantisse nicht normiert: $|a|$ muss zwischen $1$ und $10$ liegen, nicht $45$.',
          2: 'Vorzeichen-Fehler: $0{,}000045 < 1$, also negativer Exponent. $4{,}5 \\cdot 10^{5} = 450\\,000$ — viel zu groß.',
          3: 'Mantisse nicht normiert: $0{,}45 < 1$. Korrekt verschieben: $0{,}45 \\cdot 10^{-4} = 4{,}5 \\cdot 10^{-5}$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['sci-notation'] },
      ),
      ni(
        'Schreibe die Zahl $7\\,200\\,000$ in der Form $a \\cdot 10^{n}$ mit $1 \\leq a < 10$. Welcher Wert hat der Exponent $n$?',
        6, 0, '',
        `**Ansatz:** Komma so verschieben, dass nur eine Vorkommaziffer steht. Die Anzahl der Schritte nach links liefert den Exponenten.

**Rechnung:** $7\\,200\\,000 = 7{,}2 \\cdot 10^{6}$. Komma um $6$ Stellen nach links verschoben → $n = 6$.

**Probe:** $7{,}2 \\cdot 10^{6} = 7{,}2 \\cdot 1\\,000\\,000 = 7\\,200\\,000$. ✓

**Typischer Fehler:** $n = 7$ angeben (Anzahl der Stellen statt Anzahl der Verschiebungen). Die Mantisse $7{,}2$ steht **vor** der Verschiebung — daher zählt jede Verschiebung um eine Stelle als $+1$.`,
        [
          'Mantisse: $7{,}2$ (eine Vorkommaziffer).',
          'Wie viele Stellen wurde das Komma nach links verschoben?',
          'Genau diese Anzahl ist der Exponent $n$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['sci-notation'] },
      ),
      mc(
        'Ein Schüler schreibt: „$0{,}0034 = 3{,}4 \\cdot 10^{3}$". Welcher Fehler liegt vor?',
        [
          'Bei einer Zahl $<1$ ist der Exponent negativ — richtig: $3{,}4 \\cdot 10^{-3}$.',
          'Die Mantisse $3{,}4$ ist nicht normiert; sie muss zwischen $0$ und $1$ liegen.',
          'Die Schreibweise ist korrekt — $3{,}4 \\cdot 10^{3}$ ergibt $0{,}0034$.',
          'Statt $10^{3}$ müsste $10^{2}$ stehen, weil das Komma um $2$ Stellen verschoben wurde.',
        ],
        0,
        `**Ansatz:** Vorzeichen des Exponenten überprüfen: $0{,}0034 < 1$ → Exponent muss negativ sein.

**Rechnung:** $0{,}0034 \\to 3{,}4$. Komma um $3$ Stellen nach **rechts** → Exponent $-3$. Korrekt: $3{,}4 \\cdot 10^{-3}$.

**Probe:** Rückrechnung Schüler: $3{,}4 \\cdot 10^{3} = 3400$ — nicht $0{,}0034$. Klarer Vorzeichenfehler. ✓

**Typischer Fehler:** Beim Komma-Verschieben das Vorzeichen vergessen. Faustregel: kleiner als $1$ → negativer Exponent; größer-gleich $10$ → positiver Exponent.`,
        [
          'Vergleiche: ist $0{,}0034$ kleiner oder größer als $1$?',
          'Bei Zahlen $<1$ muss der Exponent negativ sein.',
          'Anzahl der Komma-Schritte hier: $3$ — Vorzeichen kommt aus der Größe der Zahl.',
        ],
        {
          1: 'Die Normierungsregel ist $1 \\leq |a| < 10$ — $3{,}4$ ist also korrekt normiert.',
          2: 'Rückrechnung: $3{,}4 \\cdot 10^{3} = 3400$, nicht $0{,}0034$. Die Schreibweise ist also nicht korrekt.',
          3: 'Die Anzahl der Verschiebungen ist tatsächlich $3$ — nur das Vorzeichen ist falsch, nicht der Betrag.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['sci-notation'] },
      ),
      ni(
        'Eine Spannung von $4{,}5\\,\\text{kV}$ soll in der Einheit V als $a \\cdot 10^{n}$ mit $1 \\leq a < 10$ geschrieben werden. Welcher Wert hat der Exponent $n$?',
        3, 0, '',
        `**Ansatz:** Erst Präfix auflösen ($\\text{kV} \\to \\text{V}$), dann normieren.

**Rechnung:** $4{,}5\\,\\text{kV} = 4{,}5 \\cdot 10^{3}\\,\\text{V}$. Mantisse $4{,}5$ liegt bereits in $[1; 10)$ → keine weitere Verschiebung nötig. Also $n = 3$.

**Probe:** $4{,}5 \\cdot 10^{3}\\,\\text{V} = 4500\\,\\text{V} = 4{,}5\\,\\text{kV}$. ✓

**Typischer Fehler:** Den Präfix kilo nicht auflösen und $n = 0$ angeben. Oder: die Mantisse zusätzlich verschieben und $4{,}5 \\cdot 10^{3} = 0{,}45 \\cdot 10^{4}$ schreiben — das wäre nicht normiert.`,
        [
          'Erst kV → V umrechnen: Faktor $10^{3}$.',
          'Prüfen, ob die Mantisse $4{,}5$ schon zwischen $1$ und $10$ liegt.',
          'Falls ja: $n$ entspricht direkt dem Präfix-Exponenten.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['sci-notation', 'praefixe-1000'] },
      ),
      sorting(
        'Sortiere die Zahlen nach **steigendem** Wert (kleinste zuerst).',
        [
          '$9 \\cdot 10^{-3}$',
          '$1{,}5 \\cdot 10^{-1}$',
          '$2 \\cdot 10^{0}$',
          '$5 \\cdot 10^{1}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Bei wissenschaftlicher Notation entscheidet zuerst der **Exponent**: kleinerer Exponent = kleinere Zahl. Bei gleichem Exponenten zählt die Mantisse.

**Rechnung:** Werte: $0{,}009$ < $0{,}15$ < $2$ < $50$. Reihenfolge nach Exponent: $-3 < -1 < 0 < 1$ — alle Exponenten verschieden, Mantisse-Vergleich nicht nötig.

**Probe:** Dezimalwerte einsetzen: $9 \\cdot 10^{-3} = 0{,}009$, $1{,}5 \\cdot 10^{-1} = 0{,}15$, $2 \\cdot 10^{0} = 2$, $5 \\cdot 10^{1} = 50$. Reihenfolge stimmt. ✓

**Typischer Fehler:** Nur die Mantisse vergleichen (z. B. „$9$ ist größer als $1{,}5$, also kommt $9 \\cdot 10^{-3}$ später"). Bei unterschiedlichen Exponenten zählt zuerst die Zehnerpotenz.`,
        [
          'Bei verschiedenen Exponenten zählt der Exponent zuerst.',
          'Wandle bei Bedarf alle Werte in Dezimalzahlen um zum Vergleich.',
          'Negative Exponenten gehören zu Werten kleiner als $1$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['sci-notation'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-0-2 — Abgeleitete Einheiten (N, J, Pa, W)  (4 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-0-2': {

    // ── [0] Newton zerlegen: $1\,\text{N} = 1\,\text{kg}\cdot\text{m}/\text{s}^2$ ─
    0: [
      tf(
        '$1\\,\\text{N}$ entspricht der Einheit $1\\,\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$.',
        true,
        `**Ansatz:** Newton ist abgeleitete Einheit aus dem 2. Newtonschen Gesetz $F = m\\cdot a$. Einheit der Masse: kg. Einheit der Beschleunigung: $\\text{m}/\\text{s}^{2}$.

**Rechnung:** $[F] = [m]\\cdot[a] = \\text{kg}\\cdot\\text{m}/\\text{s}^{2}$. Diese Kombination heißt $1\\,\\text{N}$.

**Probe:** Eine Masse von $1\\,\\text{kg}$ unter Erdanziehung ($g\\approx 9{,}81\\,\\text{m}/\\text{s}^{2}$) erfährt $F\\approx 9{,}81\\,\\text{kg}\\cdot\\text{m}/\\text{s}^{2}=9{,}81\\,\\text{N}$. ✓

**Typischer Fehler:** $\\text{s}^{2}$ in den Zähler ziehen ($\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{2}$) — das wäre nicht Newton, sondern eine völlig andere Größe.`,
        [
          'Newton-Definition aus $F = m\\cdot a$.',
          'Welche Einheit hat $a$? — $\\text{m}/\\text{s}^{2}$ — und welche $m$? — $\\text{kg}$.',
          'Multiplikation der Einheiten: $\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['newton-zerlegung'] },
      ),
      mc(
        'Ein Körper mit Masse $m = 5\\,\\text{kg}$ wird mit $a = 4\\,\\text{m}/\\text{s}^{2}$ beschleunigt. Welche Kraft wirkt auf ihn?',
        [
          '$20\\,\\text{N}$',
          '$1{,}25\\,\\text{N}$',
          '$9\\,\\text{N}$',
          '$0{,}8\\,\\text{N}$',
        ],
        0,
        `**Ansatz:** Newtonsches Grundgesetz $F = m\\cdot a$. Einheiten: $\\text{kg}\\cdot\\text{m}/\\text{s}^{2} = \\text{N}$.

**Rechnung:** $F = 5\\,\\text{kg}\\cdot 4\\,\\text{m}/\\text{s}^{2} = 20\\,\\text{N}$.

**Probe:** Einheitencheck: $\\text{kg}\\cdot\\text{m}/\\text{s}^{2} = \\text{N}$ ✓.

**Typischer Fehler:** Masse durch Beschleunigung dividieren ($5/4 = 1{,}25$) statt zu multiplizieren — Verwechslung mit der umgekehrten Aufgabenstellung.`,
        [
          '$F = m\\cdot a$ — Multiplikation, nicht Division.',
          'Setze $m = 5$ und $a = 4$ ein.',
          'Einheit: $\\text{kg}\\cdot\\text{m}/\\text{s}^{2} = \\text{N}$.',
        ],
        {
          1: 'Hier wurde dividiert ($5/4$) statt multipliziert. $F = m\\cdot a$ verlangt das **Produkt**.',
          2: 'Hier wurde addiert ($5+4$). Newtonsches Gesetz ist multiplikativ.',
          3: 'Hier wurde Beschleunigung durch Masse dividiert ($4/5$) — falsche Operation **und** falsche Reihenfolge.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['newton-zerlegung'] },
      ),
      ni(
        'Auf eine Masse von $m = 3\\,\\text{kg}$ wirkt die Kraft $F = 12\\,\\text{N}$. Welche Beschleunigung erfährt der Körper in $\\text{m}/\\text{s}^{2}$?',
        4, 0.01, 'm/s²',
        `**Ansatz:** Aus $F = m\\cdot a$ folgt durch Umstellung $a = F/m$.

**Rechnung:** $a = 12\\,\\text{N}/3\\,\\text{kg} = 4\\,\\text{m}/\\text{s}^{2}$. Einheit: $\\text{N}/\\text{kg} = (\\text{kg}\\cdot\\text{m}/\\text{s}^{2})/\\text{kg} = \\text{m}/\\text{s}^{2}$ ✓.

**Probe:** Rückrechnung: $F = m\\cdot a = 3\\cdot 4 = 12\\,\\text{N}$. ✓

**Typischer Fehler:** $a = m\\cdot F$ rechnen ($36$) statt zu dividieren — die Umstellung der Formel.`,
        [
          'Stelle $F = m\\cdot a$ nach $a$ um.',
          '$a = F/m$.',
          'Einheit: $\\text{N}/\\text{kg} = \\text{m}/\\text{s}^{2}$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['newton-zerlegung'] },
      ),
      mc(
        'Ein Studierender schreibt: „$F = m\\cdot a = 8\\,\\text{kg}\\cdot 5\\,\\text{m}/\\text{s}^{2} = 40\\,\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{2}$". Welcher Fehler liegt vor?',
        [
          'Die Einheit ist falsch — $\\text{s}^{2}$ steht im **Nenner**: $\\text{kg}\\cdot\\text{m}/\\text{s}^{2} = \\text{N}$.',
          'Die Zahl ist falsch — richtig wäre $13\\,\\text{N}$ (Addition statt Multiplikation).',
          'Korrekt — die Einheit $\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{2}$ ist äquivalent zu Newton.',
          'Die Masse muss in g angegeben werden, nicht in kg.',
        ],
        0,
        `**Ansatz:** Die Beschleunigung hat Einheit $\\text{m}/\\text{s}^{2}$ — also $\\text{s}^{2}$ im **Nenner**. Beim Multiplizieren bleibt das so.

**Rechnung:** $F = 8\\,\\text{kg}\\cdot 5\\,\\text{m}/\\text{s}^{2} = 40\\,\\text{kg}\\cdot\\text{m}/\\text{s}^{2} = 40\\,\\text{N}$. Der Studierende hat die Einheit $\\text{s}^{2}$ in den Zähler gezogen.

**Probe:** Definition: $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$ — Sekunden im Nenner. ✓

**Typischer Fehler:** Beim Übertragen von Einheiten Brüche ignorieren — $\\text{m}/\\text{s}^{2}$ ist ein Bruch, nicht $\\text{m}\\cdot\\text{s}^{2}$.`,
        [
          'Was ist die Einheit der Beschleunigung? Achte auf den Bruch.',
          'Beim Multiplizieren: Zähler-Faktoren bleiben oben, Nenner-Faktoren unten.',
          'Vergleiche: Zahl $40$ stimmt — passt die Einheit zu Newton?',
        ],
        {
          1: 'Die Zahl $8\\cdot 5 = 40$ ist korrekt — der Fehler liegt in der Einheit, nicht in der Zahl.',
          2: '$\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{2}$ ist nicht Newton — Newton hat $\\text{s}^{2}$ im Nenner.',
          3: 'In der Mechanik wird Masse in kg verwendet — das ist die SI-Basiseinheit. kg ist hier korrekt.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['newton-zerlegung'] },
      ),
      matching(
        'Auf jeden Körper (Masse $m = 2\\,\\text{kg}$) wirkt eine andere Kraft. Ordne jeder Kraft die richtige Beschleunigung zu.',
        [
          { left: '$F = 10\\,\\text{N}$', right: '$5\\,\\text{m}/\\text{s}^{2}$' },
          { left: '$F = 20\\,\\text{N}$', right: '$10\\,\\text{m}/\\text{s}^{2}$' },
          { left: '$F = 50\\,\\text{N}$', right: '$25\\,\\text{m}/\\text{s}^{2}$' },
          { left: '$F = 100\\,\\text{N}$', right: '$50\\,\\text{m}/\\text{s}^{2}$' },
        ],
        `**Ansatz:** $a = F/m$. Mit $m = 2\\,\\text{kg}$ wird $a = F/2$.

**Rechnung:** $10/2 = 5$, $20/2 = 10$, $50/2 = 25$, $100/2 = 50$. Einheit: $\\text{N}/\\text{kg} = \\text{m}/\\text{s}^{2}$.

**Probe:** Größere Kraft → größere Beschleunigung (linear) — alle Werte passen zur halben Kraft. ✓

**Typischer Fehler:** Statt $a = F/m$ die Formel $a = F\\cdot m$ anwenden — dann wären die Werte um Faktor $4$ daneben.`,
        [
          '$a = F/m$ und $m = 2\\,\\text{kg}$ ist konstant.',
          'Die Beschleunigung ist immer die halbe Zahl der Kraft (in passenden Einheiten).',
          'Einheit: $\\text{N}/\\text{kg} = \\text{m}/\\text{s}^{2}$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['newton-zerlegung'] },
      ),
      mc(
        'Welche der folgenden Kombinationen aus Basiseinheiten ist die SI-Zerlegung der Einheit Newton?',
        [
          '$\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$',
          '$\\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$',
          '$\\text{kg}/(\\text{m}\\cdot\\text{s}^{2})$',
          '$\\text{kg}/\\text{s}$',
        ],
        0,
        `**Ansatz:** $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$ — direkt aus $F = m\\cdot a$.

**Rechnung:** Masse $\\text{kg}$ × Beschleunigung $\\text{m}/\\text{s}^{2}$ = $\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$.

**Probe:** Energie $\\text{J} = \\text{N}\\cdot\\text{m} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$ — eine $\\text{m}$-Potenz höher als Newton. ✓

**Typischer Fehler:** Newton mit Joule (Energie) oder Pascal (Druck) verwechseln — alle drei nutzen kg, m, s, aber in verschiedenen Potenzen.`,
        [
          'Newton = Kraft = Masse $\\cdot$ Beschleunigung.',
          'Beschleunigung hat $\\text{m}^{1}/\\text{s}^{2}$, nicht $\\text{m}^{2}$.',
          'Das Ergebnis hat $\\text{m}^{1}$ im Zähler.',
        ],
        {
          1: 'Das ist Joule (Energie): $\\text{J} = \\text{N}\\cdot\\text{m}$ — eine $\\text{m}$-Potenz mehr.',
          2: 'Das ist Pascal (Druck): $\\text{Pa} = \\text{N}/\\text{m}^{2}$ — Newton mit zusätzlicher Fläche im Nenner.',
          3: 'Das wäre eine Massenstrom-Einheit, keine Kraft.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['newton-zerlegung'] },
      ),
    ],

    // ── [1] $1\,\text{MPa} = 1\,\text{N}/\text{mm}^{2}$ ───────────────────
    1: [
      tf(
        'Die Spannungseinheit $1\\,\\text{MPa}$ ist identisch mit $1\\,\\text{N}/\\text{mm}^{2}$.',
        true,
        `**Ansatz:** $1\\,\\text{MPa} = 10^{6}\\,\\text{Pa} = 10^{6}\\,\\text{N}/\\text{m}^{2}$. Fläche umrechnen: $1\\,\\text{m}^{2} = 10^{6}\\,\\text{mm}^{2}$.

**Rechnung:** $10^{6}\\,\\text{N}/\\text{m}^{2} = 10^{6}\\,\\text{N}/(10^{6}\\,\\text{mm}^{2}) = 1\\,\\text{N}/\\text{mm}^{2}$. Die beiden Faktoren $10^{6}$ kürzen sich.

**Probe:** Stahl S235 hat $R_{e} = 235\\,\\text{MPa} = 235\\,\\text{N}/\\text{mm}^{2}$ — beide Schreibweisen sind in Maschinenbau-Tabellen üblich. ✓

**Typischer Fehler:** Den Präfix mega ($10^{6}$) mit dem Flächenfaktor ($10^{6}$ wegen quadratischer Umrechnung) verwechseln — die kürzen sich nur, weil der Exponent zufällig gleich ist.`,
        [
          '$\\text{MPa} = 10^{6}\\,\\text{Pa}$.',
          '$1\\,\\text{m}^{2} = (10^{3}\\,\\text{mm})^{2} = 10^{6}\\,\\text{mm}^{2}$ — Fläche ist quadratisch!',
          'Beide Faktoren $10^{6}$ heben sich exakt auf.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['mpa-nmm2'] },
      ),
      mc(
        'Stahl S355 hat eine Streckgrenze von $355\\,\\text{N}/\\text{mm}^{2}$. Wie groß ist diese Spannung in $\\text{MPa}$?',
        [
          '$355\\,\\text{MPa}$',
          '$0{,}355\\,\\text{MPa}$',
          '$355\\,000\\,\\text{MPa}$',
          '$3{,}55\\,\\text{MPa}$',
        ],
        0,
        `**Ansatz:** $1\\,\\text{N}/\\text{mm}^{2} = 1\\,\\text{MPa}$ — die Werte sind direkt austauschbar (Ingenieur-Konvention).

**Rechnung:** $355\\,\\text{N}/\\text{mm}^{2} = 355\\,\\text{MPa}$.

**Probe:** Andersrum gerechnet: $355\\,\\text{MPa} = 355\\cdot 10^{6}\\,\\text{Pa} = 355\\cdot 10^{6}\\,\\text{N}/\\text{m}^{2} = 355\\,\\text{N}/\\text{mm}^{2}$. ✓

**Typischer Fehler:** Annehmen, der Wert müsse durch $1000$ oder $10^{6}$ skaliert werden, weil „Präfix M" und „mm" beides Faktoren bringen — sie kürzen sich aber.`,
        [
          'Identitäts-Regel: $1\\,\\text{N}/\\text{mm}^{2} \\equiv 1\\,\\text{MPa}$.',
          'Die Zahl bleibt unverändert.',
          'Probe: $\\text{m}^{2}\\to\\text{mm}^{2}$ bringt Faktor $10^{6}$, $\\text{Pa}\\to\\text{MPa}$ ebenfalls — sie kürzen sich.',
        ],
        {
          1: 'Hier wurde durch $1000$ geteilt — falscher Faktor. $\\text{N}/\\text{mm}^{2}$ und MPa sind exakt gleich.',
          2: 'Hier wurde mit $1000$ multipliziert — auch falsch. Kein Skalierungsfaktor nötig.',
          3: 'Hier wurde durch $100$ geteilt — keine sinnvolle Umrechnung in dieser Einheiten-Familie.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['mpa-nmm2'] },
      ),
      ni(
        'Eine Schraube mit Querschnittsfläche $A = 20\\,\\text{mm}^{2}$ wird mit der Zugkraft $F = 15\\,\\text{kN}$ belastet. Welche Spannung herrscht im Querschnitt in $\\text{MPa}$?',
        750, 0.5, 'MPa',
        `**Ansatz:** Spannung $\\sigma = F/A$. In Ingenieur-Einheiten: $F$ in N, $A$ in $\\text{mm}^{2}$ → Ergebnis automatisch in $\\text{N}/\\text{mm}^{2} = \\text{MPa}$.

**Rechnung:** $F = 15\\,\\text{kN} = 15\\,000\\,\\text{N}$. $\\sigma = 15\\,000\\,\\text{N}/20\\,\\text{mm}^{2} = 750\\,\\text{N}/\\text{mm}^{2} = 750\\,\\text{MPa}$.

**Probe:** Werkstoffeinordnung: $750\\,\\text{MPa}$ liegt im Bereich hochfester Schraubenstähle (z. B. Festigkeitsklasse $8.8$ hat $R_{m}\\approx 800\\,\\text{MPa}$). ✓

**Typischer Fehler:** $15\\,\\text{kN}$ in N umrechnen vergessen und $15/20 = 0{,}75\\,\\text{MPa}$ angeben — Faktor $1000$ daneben.`,
        [
          'Spannung = Kraft pro Fläche, $\\sigma = F/A$.',
          'Ingenieur-Trick: $\\text{N}/\\text{mm}^{2} = \\text{MPa}$ direkt.',
          'Vorher kN in N umrechnen: Faktor $10^{3}$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['mpa-nmm2'] },
      ),
      mc(
        'Ein Studierender schreibt: „$\\sigma = 200\\,\\text{MPa} = 200\\,\\text{N}/\\text{m}^{2}$". Welcher Fehler liegt vor?',
        [
          '$1\\,\\text{MPa} = 10^{6}\\,\\text{N}/\\text{m}^{2}$ — der Faktor $10^{6}$ wurde vergessen, richtig: $200\\cdot 10^{6}\\,\\text{N}/\\text{m}^{2}$.',
          'Korrekt — MPa und $\\text{N}/\\text{m}^{2}$ sind dasselbe.',
          'Der Faktor $10^{3}$ wurde vergessen — richtig wäre $200\\,000\\,\\text{N}/\\text{m}^{2}$.',
          'MPa ist nur für Drücke definiert, nicht für mechanische Spannungen.',
        ],
        0,
        `**Ansatz:** Präfix mega = $10^{6}$. Pa = $\\text{N}/\\text{m}^{2}$. Also $1\\,\\text{MPa} = 10^{6}\\,\\text{N}/\\text{m}^{2}$.

**Rechnung:** Korrekt: $200\\,\\text{MPa} = 200\\cdot 10^{6}\\,\\text{N}/\\text{m}^{2} = 2\\cdot 10^{8}\\,\\text{N}/\\text{m}^{2}$. Der Studierende hat Präfix M ignoriert.

**Probe:** $200\\,\\text{MPa} = 200\\,\\text{N}/\\text{mm}^{2}$ (Ingenieur-Konvention). Umrechnung in $\\text{m}^{2}$: $200\\,\\text{N}/\\text{mm}^{2} = 200\\cdot 10^{6}\\,\\text{N}/\\text{m}^{2}$ — Fläche bringt Faktor $10^{6}$. ✓

**Typischer Fehler:** Den Präfix M weglassen, weil er „bei Stahl-Spannungen halt immer dabei" steht. M ist immer $10^{6}$.`,
        [
          'Schreibe MPa explizit als $10^{6}\\,\\text{Pa}$.',
          'Pa ist $\\text{N}/\\text{m}^{2}$.',
          'Setze ein und prüfe, ob beide Seiten gleiche Größenordnung haben.',
        ],
        {
          1: 'Die beiden sind nicht dasselbe — MPa hat den Faktor $10^{6}$.',
          2: 'Falscher Faktor — der Präfix mega ist $10^{6}$, nicht $10^{3}$.',
          3: 'MPa ist dieselbe Einheit für Druck **und** mechanische Spannung — beide haben Dimension Kraft/Fläche.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['mpa-nmm2'] },
      ),
      ni(
        'Eine Werkstoffprobe hat eine Streckgrenze $R_{e} = 240\\,\\text{MPa}$. Welcher minimale Querschnitt $A$ in $\\text{mm}^{2}$ ist nötig, damit eine Last von $F = 60\\,\\text{kN}$ die Streckgrenze gerade erreicht?',
        250, 1, 'mm²',
        `**Ansatz:** Spannung $\\sigma = F/A$. Bedingung $\\sigma = R_{e}$ — nach $A$ umstellen: $A = F/R_{e}$.

**Rechnung:** $F = 60\\,\\text{kN} = 60\\,000\\,\\text{N}$. Mit $R_{e} = 240\\,\\text{MPa} = 240\\,\\text{N}/\\text{mm}^{2}$: $A = 60\\,000\\,\\text{N}/(240\\,\\text{N}/\\text{mm}^{2}) = 250\\,\\text{mm}^{2}$.

**Probe:** Rückrechnung: $\\sigma = 60\\,000/250 = 240\\,\\text{N}/\\text{mm}^{2} = 240\\,\\text{MPa} = R_{e}$. ✓

**Typischer Fehler:** Kraft nicht in N umrechnen ($60$ statt $60\\,000$) — $A$ wäre dann $0{,}25\\,\\text{mm}^{2}$, viel zu klein.`,
        [
          'Stelle $\\sigma = F/A$ nach $A$ um.',
          'Setze die Einheiten passend: $F$ in N, $\\sigma$ in $\\text{N}/\\text{mm}^{2}$.',
          'Vergiss nicht: $\\text{kN}\\to\\text{N}$ ist Faktor $10^{3}$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['mpa-nmm2'] },
      ),
      matching(
        'Ordne jeden Spannungswert seinem korrekten Wert in $\\text{N}/\\text{mm}^{2}$ zu.',
        [
          { left: '$1\\,\\text{Pa}$', right: '$10^{-6}\\,\\text{N}/\\text{mm}^{2}$' },
          { left: '$1\\,\\text{kPa}$', right: '$10^{-3}\\,\\text{N}/\\text{mm}^{2}$' },
          { left: '$1\\,\\text{MPa}$', right: '$1\\,\\text{N}/\\text{mm}^{2}$' },
          { left: '$1\\,\\text{GPa}$', right: '$1000\\,\\text{N}/\\text{mm}^{2}$' },
        ],
        `**Ansatz:** $1\\,\\text{Pa} = 1\\,\\text{N}/\\text{m}^{2}$. Mit $1\\,\\text{m}^{2} = 10^{6}\\,\\text{mm}^{2}$ folgt $1\\,\\text{Pa} = 10^{-6}\\,\\text{N}/\\text{mm}^{2}$. Alle anderen über Präfixe.

**Rechnung:** kPa hat Faktor $10^{3}$ → $10^{-3}\\,\\text{N}/\\text{mm}^{2}$. MPa hat Faktor $10^{6}$ → $1\\,\\text{N}/\\text{mm}^{2}$. GPa hat Faktor $10^{9}$ → $10^{3}\\,\\text{N}/\\text{mm}^{2} = 1000\\,\\text{N}/\\text{mm}^{2}$.

**Probe:** Werkstoff-E-Modul: Stahl $E\\approx 210\\,\\text{GPa} = 210\\,000\\,\\text{N}/\\text{mm}^{2}$ — passt. ✓

**Typischer Fehler:** Den Flächenfaktor $10^{6}$ vergessen — dann wären die Zahlen alle um $10^{6}$ daneben.`,
        [
          '$1\\,\\text{Pa} = 1\\,\\text{N}/\\text{m}^{2}$ und $1\\,\\text{m}^{2} = 10^{6}\\,\\text{mm}^{2}$.',
          'Die MPa-Stufe ist die „natürliche" — $1\\,\\text{MPa} = 1\\,\\text{N}/\\text{mm}^{2}$.',
          'Andere Stufen verschieben um Faktoren $10^{3}$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['mpa-nmm2'] },
      ),
    ],

    // ── [2] bar $\leftrightarrow$ Pa: $1\,\text{bar} = 10^5\,\text{Pa}$ ─
    2: [
      tf(
        '$1\\,\\text{bar} = 10^{5}\\,\\text{Pa}$.',
        true,
        `**Ansatz:** Bar ist eine ingenieurübliche Druckeinheit, definiert als $1\\,\\text{bar} = 100\\,000\\,\\text{Pa} = 10^{5}\\,\\text{Pa}$.

**Rechnung:** $1\\,\\text{bar} = 10^{5}\\,\\text{Pa} = 10^{5}\\,\\text{N}/\\text{m}^{2} = 0{,}1\\,\\text{MPa} = 100\\,\\text{kPa}$.

**Probe:** Atmosphärischer Luftdruck: $\\approx 1{,}013\\,\\text{bar} \\approx 1{,}013\\cdot 10^{5}\\,\\text{Pa} \\approx 101{,}3\\,\\text{kPa}$. ✓

**Typischer Fehler:** $1\\,\\text{bar} = 10^{6}\\,\\text{Pa}$ (Verwechslung mit MPa) oder $10^{3}\\,\\text{Pa}$ (Verwechslung mit kPa).`,
        [
          'Atmosphärendruck als Anker: $\\approx 1\\,\\text{bar}$.',
          '$1\\,\\text{Atm}\\approx 100\\,\\text{kPa}$ — also $10^{5}\\,\\text{Pa}$.',
          '$1\\,\\text{bar} = 10^{5}\\,\\text{Pa}$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['bar-pa'] },
      ),
      mc(
        'Ein Reifen ist mit $2{,}5\\,\\text{bar}$ befüllt. Wie viel Pa entspricht das?',
        [
          '$250\\,000\\,\\text{Pa}$',
          '$2500\\,\\text{Pa}$',
          '$25\\,000\\,\\text{Pa}$',
          '$2{,}5\\cdot 10^{8}\\,\\text{Pa}$',
        ],
        0,
        `**Ansatz:** $1\\,\\text{bar} = 10^{5}\\,\\text{Pa}$. Zahl mal Faktor.

**Rechnung:** $2{,}5\\,\\text{bar} = 2{,}5\\cdot 10^{5}\\,\\text{Pa} = 250\\,000\\,\\text{Pa}$.

**Probe:** $250\\,000\\,\\text{Pa} = 250\\,\\text{kPa} = 0{,}25\\,\\text{MPa}$ — typischer Reifendruck (PKW: $\\approx 200$–$300\\,\\text{kPa}$). ✓

**Typischer Fehler:** bar mit dem Faktor $10^{3}$ (kPa) verwechseln — dann wäre das Ergebnis $1000$-fach zu klein.`,
        [
          'Faustregel: $1\\,\\text{bar} = 10^{5}\\,\\text{Pa}$.',
          'Multipliziere die Zahl mit $10^{5}$.',
          'Komma um $5$ Stellen nach rechts verschieben.',
        ],
        {
          1: 'Hier wurde der Faktor $10^{3}$ verwendet — $\\text{bar}$ ist aber $10^{5}\\,\\text{Pa}$, nicht $10^{3}$.',
          2: 'Hier wurde der Faktor $10^{4}$ verwendet — auch falsch.',
          3: 'Hier wurde der Faktor $10^{8}$ verwendet — Faktor $1000$ zu groß. bar ist nicht GPa.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['bar-pa'] },
      ),
      ni(
        'Im Hydraulikzylinder herrscht ein Druck von $7\\,\\text{bar}$. Wie groß ist der Druck in Pa?',
        700000, 1, 'Pa',
        `**Ansatz:** $1\\,\\text{bar} = 10^{5}\\,\\text{Pa}$ — direkt einsetzen.

**Rechnung:** $7\\,\\text{bar} = 7\\cdot 10^{5}\\,\\text{Pa} = 700\\,000\\,\\text{Pa}$.

**Probe:** $700\\,000\\,\\text{Pa} = 0{,}7\\,\\text{MPa} = 700\\,\\text{kPa}$ — sinnvolle Größenordnung für einen Niederdruck-Hydraulikzylinder. ✓

**Typischer Fehler:** $7\\cdot 10^{6}\\,\\text{Pa}$ rechnen (Verwechslung bar↔MPa) — dann liegt das Ergebnis um Faktor $10$ daneben.`,
        [
          '$1\\,\\text{bar} = 10^{5}\\,\\text{Pa}$.',
          'Multipliziere $7$ mit $10^{5}$.',
          'Schreibe als Dezimalzahl: $7$ und fünf Nullen.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['bar-pa'] },
      ),
      mc(
        'Ein Lernender schreibt: „$1\\,\\text{mbar} = 1\\,\\text{Pa}$". Welcher Fehler liegt vor?',
        [
          '$1\\,\\text{mbar} = 10^{-3}\\,\\text{bar} = 10^{-3}\\cdot 10^{5}\\,\\text{Pa} = 100\\,\\text{Pa}$.',
          '$1\\,\\text{mbar} = 1000\\,\\text{Pa}$ — der Präfix m bedeutet $10^{3}$.',
          'Korrekt — m und bar gleichen sich aus.',
          '$1\\,\\text{mbar} = 10^{-5}\\,\\text{Pa}$.',
        ],
        0,
        `**Ansatz:** Der Präfix m (milli) bedeutet $10^{-3}$ — wirkt auf die Einheit dahinter. „mbar" $= 10^{-3}\\,\\text{bar}$.

**Rechnung:** $1\\,\\text{mbar} = 10^{-3}\\,\\text{bar} = 10^{-3}\\cdot 10^{5}\\,\\text{Pa} = 10^{2}\\,\\text{Pa} = 100\\,\\text{Pa}$.

**Probe:** Wetterbericht: Luftdruck z. B. $1013\\,\\text{mbar} \\approx 1013\\cdot 100\\,\\text{Pa} = 101\\,300\\,\\text{Pa}$ — passt zu $1{,}013\\,\\text{bar}$. ✓

**Typischer Fehler:** Annehmen, $\\text{mbar}$ und $\\text{Pa}$ seien gleich, weil sie „beide kleine Druckeinheiten" sind. Tatsächlich gilt $1\\,\\text{mbar} = 100\\,\\text{Pa}$.`,
        [
          'Lese „mbar" als „milli mal bar".',
          'milli ist $10^{-3}$, bar ist $10^{5}\\,\\text{Pa}$.',
          'Multipliziere die beiden: Ergebnis $100\\,\\text{Pa}$.',
        ],
        {
          1: 'milli (m) ist $10^{-3}$, nicht $10^{3}$. Vorzeichen des Exponenten verwechselt.',
          2: 'Faktor $100$ Unterschied — $1\\,\\text{mbar} = 100\\,\\text{Pa}$, nicht gleich.',
          3: 'Falscher Faktor: $10^{-3}\\cdot 10^{5} = 10^{2}$, nicht $10^{-5}$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['bar-pa'] },
      ),
      matching(
        'Ordne jedem Druckwert die korrekte Umrechnung in Pa zu.',
        [
          { left: '$1\\,\\text{mbar}$', right: '$100\\,\\text{Pa}$' },
          { left: '$1\\,\\text{kPa}$', right: '$1000\\,\\text{Pa}$' },
          { left: '$1\\,\\text{bar}$', right: '$10^{5}\\,\\text{Pa}$' },
          { left: '$1\\,\\text{MPa}$', right: '$10^{6}\\,\\text{Pa}$' },
        ],
        `**Ansatz:** Faktor jeder Einheit zu Pa: mbar $= 10^{-3}\\cdot 10^{5} = 10^{2}$; kPa $= 10^{3}$; bar $= 10^{5}$; MPa $= 10^{6}$.

**Rechnung:** $1\\,\\text{mbar} = 100\\,\\text{Pa}$, $1\\,\\text{kPa} = 1000\\,\\text{Pa}$, $1\\,\\text{bar} = 10^{5}\\,\\text{Pa}$, $1\\,\\text{MPa} = 10^{6}\\,\\text{Pa}$.

**Probe:** Größenordnung steigend: mbar < kPa < bar < MPa — passt. ✓

**Typischer Fehler:** mbar und kPa für gleich groß halten — tatsächlich liegt zwischen ihnen Faktor $10$ ($1\\,\\text{kPa} = 10\\,\\text{mbar}$).`,
        [
          'Trick: erst alles über bar gehen, dann bar = $10^{5}\\,\\text{Pa}$ einsetzen.',
          'mbar = $10^{-3}\\,\\text{bar}$; MPa = $10^{6}\\,\\text{Pa}$ direkt.',
          'kPa = $10^{3}\\,\\text{Pa}$ — hat keinen Bezug zu bar, nur zu Pa.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['bar-pa'] },
      ),
      ni(
        'Ein Reifenhersteller gibt den Reifendruck in kPa an. Wie viel kPa entsprechen $2{,}5\\,\\text{bar}$?',
        250, 0.5, 'kPa',
        `**Ansatz:** Erst in Pa, dann in kPa.

**Rechnung:** $2{,}5\\,\\text{bar} = 2{,}5\\cdot 10^{5}\\,\\text{Pa} = 250\\,000\\,\\text{Pa} = 250\\,\\text{kPa}$.

**Probe:** Faustregel: $1\\,\\text{bar} = 100\\,\\text{kPa}$. Also $2{,}5\\,\\text{bar} = 250\\,\\text{kPa}$. ✓

**Typischer Fehler:** bar mit kPa direkt gleichsetzen ($2{,}5\\,\\text{kPa}$ statt $250\\,\\text{kPa}$) — der Faktor $100$ zwischen bar und kPa fehlt.`,
        [
          'Faustregel: $1\\,\\text{bar} = 100\\,\\text{kPa}$.',
          'Oder: bar $\\to$ Pa $\\to$ kPa.',
          'Multipliziere die Zahl mit $100$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['bar-pa'] },
      ),
    ],

    // ── [3] Dimensionsanalyse als Kontrollschritt ────────────────────────
    3: [
      tf(
        'In einer korrekten physikalischen Gleichung müssen auf beiden Seiten dieselben Einheiten stehen.',
        true,
        `**Ansatz:** Eine Gleichung $A = B$ macht physikalisch nur Sinn, wenn beide Seiten dieselbe Größe (und damit Einheit) haben.

**Rechnung:** Beispiel: $E = mc^{2}$. Links: $\\text{J} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$. Rechts: $\\text{kg}\\cdot(\\text{m}/\\text{s})^{2} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$. ✓

**Probe:** Wenn die Einheiten **nicht** stimmen, kann man die Gleichung sofort als falsch verwerfen — ohne Zahlen einzusetzen.

**Typischer Fehler:** Annehmen, dass Einheiten „später schon irgendwie passen". Dimensionsanalyse ist immer der erste Plausibilitäts-Check.`,
        [
          'Eine Gleichung gleichsetzt **Größen**, nicht nur Zahlen.',
          'Größen mit unterschiedlichen Einheiten sind nicht gleich.',
          'Daher: links und rechts muss dieselbe Einheit stehen.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['dim-check'] },
      ),
      mc(
        'Welche der folgenden Formeln ist dimensional konsistent für die potentielle Energie?',
        [
          '$E = m\\cdot g\\cdot h$ mit $m$ in kg, $g$ in $\\text{m}/\\text{s}^{2}$, $h$ in m',
          '$E = m\\cdot v$ mit $m$ in kg, $v$ in $\\text{m}/\\text{s}$',
          '$E = F + s$ mit $F$ in N, $s$ in m',
          '$E = m/t$ mit $m$ in kg, $t$ in s',
        ],
        0,
        `**Ansatz:** Energie hat Einheit $\\text{J} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$. Rechte Seite muss diese Einheit liefern.

**Rechnung:** $m\\cdot g\\cdot h$: $\\text{kg}\\cdot(\\text{m}/\\text{s}^{2})\\cdot\\text{m} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2} = \\text{J}$. ✓

**Probe:** $E_\\text{pot} = mgh$ ist die bekannte Formel — passt zur Anschauung (Masse hochheben kostet Energie). ✓

**Typischer Fehler:** Größen einfach addieren ($F + s$) — Addition setzt voraus, dass beide Summanden **dieselbe** Einheit haben. $\\text{N} + \\text{m}$ ist dimensional sinnlos.`,
        [
          'Energie hat Einheit $\\text{J} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$.',
          'Für jede Option Einheiten der Faktoren multiplizieren.',
          'Welche Option ergibt $\\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$?',
        ],
        {
          1: '$m\\cdot v$ hat Einheit $\\text{kg}\\cdot\\text{m}/\\text{s}$ — das ist Impuls, nicht Energie. Eine $\\text{m}/\\text{s}$-Potenz fehlt.',
          2: '$\\text{N} + \\text{m}$ ist nicht definiert — Addition verlangt gleiche Einheiten. Die Formel ist nicht dimensional konsistent.',
          3: '$m/t$ hat Einheit $\\text{kg}/\\text{s}$ — das ist ein Massenstrom, nicht Energie.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['dim-check'] },
      ),
      mc(
        'Welche Kombination der angegebenen Größen liefert die Einheit Watt?',
        [
          '$F\\cdot v$ (Kraft mal Geschwindigkeit)',
          '$F\\cdot s$ (Kraft mal Strecke)',
          '$m\\cdot a$ (Masse mal Beschleunigung)',
          '$F/A$ (Kraft pro Fläche)',
        ],
        0,
        `**Ansatz:** Watt = Leistung = Energie/Zeit = $\\text{J}/\\text{s} = \\text{N}\\cdot\\text{m}/\\text{s}$.

**Rechnung:** $F\\cdot v = \\text{N}\\cdot(\\text{m}/\\text{s}) = \\text{N}\\cdot\\text{m}/\\text{s} = \\text{W}$. ✓

**Probe:** Anschauliches Beispiel: Auto fährt mit $F = 500\\,\\text{N}$ Vortrieb bei $v = 20\\,\\text{m}/\\text{s}$ — Leistung $P = 10\\,000\\,\\text{W} = 10\\,\\text{kW}$. Plausibel. ✓

**Typischer Fehler:** $F\\cdot s$ (Arbeit, $\\text{J}$) mit $F\\cdot v$ (Leistung, $\\text{W}$) verwechseln — eine Zeit-Dimension Unterschied.`,
        [
          'Watt $= \\text{J}/\\text{s}$ — Leistung ist Energie pro Zeit.',
          'Suche eine Operation, deren Einheit $\\text{N}\\cdot\\text{m}/\\text{s}$ ergibt.',
          'Geschwindigkeit hat Einheit $\\text{m}/\\text{s}$ — Multiplikation mit Kraft passt.',
        ],
        {
          1: '$F\\cdot s$ hat Einheit $\\text{N}\\cdot\\text{m} = \\text{J}$ — das ist Arbeit/Energie, nicht Leistung.',
          2: '$m\\cdot a$ hat Einheit $\\text{kg}\\cdot\\text{m}/\\text{s}^{2} = \\text{N}$ — das ist Kraft, nicht Leistung.',
          3: '$F/A$ hat Einheit $\\text{N}/\\text{m}^{2} = \\text{Pa}$ — das ist Druck/Spannung, nicht Leistung.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['dim-check'] },
      ),
      mc(
        'Ein Studierender setzt in $E_\\text{kin} = \\tfrac{1}{2}mv^{2}$ ein: $m = 2\\,\\text{kg}$, $v = 30\\,\\text{km/h}$ und erhält $E = 900\\,\\text{J}$. Welcher Fehler liegt vor?',
        [
          'Geschwindigkeit nicht in $\\text{m}/\\text{s}$ umgerechnet — $30\\,\\text{km/h}\\approx 8{,}33\\,\\text{m}/\\text{s}$, korrekt $E\\approx 69{,}4\\,\\text{J}$.',
          'Die Masse muss in g angegeben werden — richtig wäre $E = 1{,}8\\,\\text{J}$.',
          'Korrekt — km/h und m/s sind in der Energieformel gleichwertig.',
          'Die Formel müsste $\\tfrac{1}{2}mv^{3}$ heißen.',
        ],
        0,
        `**Ansatz:** Kinetische Energie: $E_\\text{kin} = \\tfrac{1}{2}mv^{2}$. Damit das Ergebnis in Joule herauskommt, muss $v$ in $\\text{m}/\\text{s}$ stehen.

**Rechnung:** Korrekt: $v = 30\\,\\text{km/h} = 30/3{,}6\\,\\text{m}/\\text{s} \\approx 8{,}33\\,\\text{m}/\\text{s}$. $E = \\tfrac{1}{2}\\cdot 2\\cdot 8{,}33^{2} \\approx 69{,}4\\,\\text{J}$.

**Probe:** Mit km/h gerechnet: $\\tfrac{1}{2}\\cdot 2\\cdot 30^{2} = 900$ — aber Einheit wäre $\\text{kg}\\cdot(\\text{km/h})^{2}$, nicht J. Faktor $3{,}6^{2}\\approx 13$ daneben. ✓

**Typischer Fehler:** Im Kopf rechnen, ohne erst die Einheit von $v$ in SI ($\\text{m}/\\text{s}$) zu bringen.`,
        [
          'Welche Einheit muss $v$ haben, damit $\\tfrac{1}{2}mv^{2}$ in Joule herauskommt?',
          '$\\text{m}/\\text{s}$, weil $\\text{kg}\\cdot(\\text{m}/\\text{s})^{2} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2} = \\text{J}$.',
          'Umrechnung: $1\\,\\text{km/h} = 1/3{,}6\\,\\text{m}/\\text{s}$.',
        ],
        {
          1: 'Die Masse $2\\,\\text{kg}$ ist bereits in der SI-Einheit — kg ist die SI-Basiseinheit der Masse.',
          2: 'Falsch — die Einheiten passen nicht zusammen, also ist die Rechnung dimensional inkonsistent.',
          3: 'Die Formel ist gesichert $\\tfrac{1}{2}mv^{2}$ — der Exponent passt zur Einheit Joule.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['dim-check'] },
      ),
      mc(
        'Welche Einheit hat der Ausdruck $\\sqrt{l/g}$ mit $l$ in m und $g$ in $\\text{m}/\\text{s}^{2}$ (typisch für die Schwingungsdauer eines Fadenpendels)?',
        [
          'Sekunde (s)',
          'Meter (m)',
          'Hertz ($1/\\text{s}$)',
          'Quadratmeter ($\\text{m}^{2}$)',
        ],
        0,
        `**Ansatz:** Einheit unter der Wurzel ausrechnen, dann Wurzel ziehen.

**Rechnung:** $[l/g] = \\text{m}/(\\text{m}/\\text{s}^{2}) = \\text{m}\\cdot\\text{s}^{2}/\\text{m} = \\text{s}^{2}$. Wurzel: $\\sqrt{\\text{s}^{2}} = \\text{s}$.

**Probe:** Schwingungsdauer eines Fadenpendels: $T = 2\\pi\\sqrt{l/g}$ — Ergebnis in Sekunden, passt zum Pendel-Experiment. ✓

**Typischer Fehler:** Die Wurzel ignorieren und $\\text{s}^{2}$ als Einheit angeben — die Wurzel halbiert den Exponenten der Zeit.`,
        [
          'Erst Einheiten getrennt behandeln: $[l]$ und $[g]$.',
          '$\\text{m}/(\\text{m}/\\text{s}^{2}) = \\text{s}^{2}$ (Doppelbruch auflösen).',
          'Wurzel: $\\sqrt{\\text{s}^{2}} = \\text{s}$.',
        ],
        {
          1: 'Meter wäre, wenn die Wurzel auf $\\text{m}^{2}$ wirkte — aber unter der Wurzel steht $\\text{s}^{2}$, nicht $\\text{m}^{2}$.',
          2: 'Hertz ist $1/\\text{s}$ — das wäre der Kehrwert. Schwingungsdauer und Frequenz sind reziprok zueinander.',
          3: 'Quadratmeter wäre, wenn die Längen multipliziert würden, ohne Wurzel.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['dim-check'] },
      ),
      matching(
        'Ordne jeder abgeleiteten Einheit ihre Zerlegung in SI-Basiseinheiten zu.',
        [
          { left: '$\\text{N}$ (Kraft)', right: '$\\text{kg}\\cdot\\text{m}/\\text{s}^{2}$' },
          { left: '$\\text{J}$ (Energie)', right: '$\\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$' },
          { left: '$\\text{W}$ (Leistung)', right: '$\\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{3}$' },
          { left: '$\\text{Pa}$ (Druck)', right: '$\\text{kg}/(\\text{m}\\cdot\\text{s}^{2})$' },
        ],
        `**Ansatz:** Jede abgeleitete Einheit aus ihrer Definition zerlegen.

**Rechnung:** $\\text{N} = \\text{kg}\\cdot\\text{m}/\\text{s}^{2}$ (aus $F = m a$). $\\text{J} = \\text{N}\\cdot\\text{m} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{2}$. $\\text{W} = \\text{J}/\\text{s} = \\text{kg}\\cdot\\text{m}^{2}/\\text{s}^{3}$. $\\text{Pa} = \\text{N}/\\text{m}^{2} = \\text{kg}/(\\text{m}\\cdot\\text{s}^{2})$.

**Probe:** Querbeziehung: $\\text{W}\\cdot\\text{s} = \\text{J}$ — eine Sekunde Leistung ergibt eine Energieportion, Exponent von s steigt um $1$. ✓

**Typischer Fehler:** Joule und Watt verwechseln — beide nutzen $\\text{kg}\\cdot\\text{m}^{2}$, aber $\\text{W}$ hat $\\text{s}^{3}$ im Nenner (eine Zeit-Potenz mehr).`,
        [
          'Ankerformel: $\\text{N} = \\text{kg}\\cdot\\text{m}/\\text{s}^{2}$.',
          'Energie = Kraft mal Weg → eine $\\text{m}$-Potenz mehr.',
          'Leistung = Energie pro Zeit → eine $\\text{s}$-Potenz mehr im Nenner.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['dim-check'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-0-3 — Dimensionsanalyse / Einheitencheck  (4 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-0-3': {

    // ── [0] Dimensionskonsistenz ─────────────────────────────────────────
    0: [
      ni(
        'Welche ganze Zahl $n$ muss in der Formel $E_\\text{kin} = \\tfrac{1}{2}\\,m\\,v^n$ stehen, damit die Gleichung auf kinetische Energie in Joule führt?',
        2, 0, '',
        `**Ansatz:** Zieleinheit links: $[E] = \\text{J} = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$. Einheit rechts ohne Vorfaktor: $[m]\\cdot[v]^n = \\text{kg}\\cdot(\\text{m}/\\text{s})^n$. Die beiden müssen gleich sein.

**Rechnung:** $\\text{kg}\\cdot \\text{m}^n / \\text{s}^n \\stackrel{!}{=} \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$ ⇒ $n = 2$.

**Probe:** $E_\\text{kin} = \\tfrac{1}{2}mv^2$ ist die bekannte Formel; für $m = 2\\,\\text{kg}, v = 3\\,\\text{m/s}$ ⇒ $E = 9\\,\\text{J}$, Einheit stimmt.

**Typischer Fehler:** $n = 1$ wählen ("Masse mal Geschwindigkeit = Energie") — das ist **Impuls** $p = mv$, Einheit $\\text{kg}\\cdot\\text{m/s}$, **nicht** Energie.`,
        [
          'Zieleinheit: J = kg·m²/s².',
          'Rechte Seite: kg·(m/s)^n.',
          'Exponentenvergleich an m und s.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['dim-konsistenz'] },
      ),
      mc(
        'Welche dieser Formeln ist **dimensional korrekt** für die Leistung $P$?',
        [
          '$P = F \\cdot v$',
          '$P = F \\cdot s$',
          '$P = F / v$',
          '$P = m \\cdot g \\cdot h$',
        ],
        0,
        `**Ansatz:** Leistung hat Einheit $\\text{W} = \\text{J/s} = \\text{N}\\cdot\\text{m/s}$. Rechte Seite muss dieselbe Einheit liefern.

**Rechnung:** $F \\cdot v = \\text{N}\\cdot\\text{m/s} = \\text{W}$ ✓.

**Probe:** Anschaulich: Arbeit pro Zeit, oder Kraft mal Geschwindigkeit — genau dieselbe Größe.

**Typischer Fehler:** $P = F \\cdot s$ (das ist Arbeit / Energie, nicht Leistung) oder $P = F/v$ (Einheit $\\text{N}\\cdot\\text{s/m} = \\text{kg/s}$, sinnlos für Leistung).`,
        [
          'W = J/s = N·m/s.',
          'Welche Operation liefert N·m/s aus N und m/s?',
          'Multiplikation.',
        ],
        {
          1: '$F \\cdot s$ hat Einheit $\\text{N}\\cdot\\text{m} = \\text{J}$ — das ist **Arbeit/Energie**, nicht Leistung (es fehlt die Zeit im Nenner).',
          2: '$F/v$ hat Einheit $\\text{N}/(\\text{m/s}) = \\text{N}\\cdot\\text{s/m} = \\text{kg/s}$ — das ist keine Leistungseinheit.',
          3: '$m\\cdot g\\cdot h$ hat Einheit $\\text{kg}\\cdot(\\text{m/s}^2)\\cdot\\text{m} = \\text{J}$ — das ist potentielle **Energie**, nicht Leistung.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['dim-konsistenz'] },
      ),
      tf(
        'Die Formel $a = v \\cdot t$ für die Beschleunigung ist dimensional konsistent.',
        false,
        `**Ansatz:** Links $[a] = \\text{m/s}^2$. Rechts $[v]\\cdot[t] = (\\text{m/s})\\cdot\\text{s} = \\text{m}$. Einheiten stimmen nicht überein.

**Rechnung:** $\\text{m/s}^2 \\neq \\text{m}$ ⇒ Formel ist **dimensional falsch**.

**Probe:** Richtige Formel: $a = v/t$ bzw. $a = \\Delta v/\\Delta t$. Einheitencheck: $(\\text{m/s})/\\text{s} = \\text{m/s}^2$ ✓.

**Typischer Fehler:** Multiplikation und Division der Zeit vertauschen — Dimensionsanalyse fängt das sofort ab, ohne das Ergebnis überhaupt auszurechnen.`,
        [
          'Links: m/s².',
          'Rechts: (m/s)·s = m.',
          'Sind m und m/s² gleich?',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['dim-konsistenz'] },
      ),
      matching(
        'Welche Einheit hat die **rechte Seite** jeweils?',
        [
          { left: '$F\\cdot v$ (mit $[F]=\\text{N}$, $[v]=\\text{m/s}$)', right: 'W (Leistung)' },
          { left: '$m\\cdot v$ (mit $[m]=\\text{kg}$, $[v]=\\text{m/s}$)', right: 'kg·m/s (Impuls)' },
          { left: '$\\tfrac{1}{2}m v^2$ (kg, m/s)', right: 'J (Energie)' },
          { left: '$F/A$ (mit $[F]=\\text{N}$, $[A]=\\text{m}^2$)', right: 'Pa (Druck/Spannung)' },
        ],
        `**Ansatz:** Jede Zeile: Einheiten der Faktoren einsetzen, mit den Rechenoperationen verknüpfen.

**Rechnung:** (1) N·m/s = W. (2) kg·m/s (Impuls — hat eigene Einheit, kein eigener Name). (3) kg·(m/s)² = kg·m²/s² = J. (4) N/m² = Pa.

**Probe:** Passen die Größen inhaltlich? Kraft×Geschwindigkeit=Leistung ✓, Kraft/Fläche=Druck ✓.

**Typischer Fehler:** $m\\cdot v$ mit kinetischer Energie verwechseln. Impuls = Masse × Geschwindigkeit; Energie = Masse × Geschwindigkeit² /2 — die Quadratur macht aus Impuls Energie.`,
        [
          'Je Zeile Einheiten der Faktoren multiplizieren.',
          'v² ≠ v — ein Faktor m/s mehr.',
          'N = kg·m/s² in Basiseinheiten.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['dim-konsistenz'] },
      ),
      sorting(
        'Ordne die Schritte einer Dimensionsprüfung.',
        [
          'Zieleinheit der linken Seite festhalten (z. B. N, J, Pa)',
          'Für jede Größe auf der rechten Seite die Einheit notieren',
          'Einheiten gemäß den Rechenoperationen verknüpfen (× / Potenzen)',
          'Einheiten auf Basis-SI reduzieren, damit sie vergleichbar sind',
          'Mit der Zieleinheit vergleichen — stimmt sie, ist die Formel dimensional OK',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Systematisch: Ziel festlegen, dann rechte Seite aufbauen, dann vergleichen.

**Rechnung:** Schritt 4 ist oft der entscheidende — zwei Einheiten können verschieden aussehen, aber dieselbe sein (N/m² vs. kg/(m·s²)).

**Probe:** Wer Schritt 4 auslässt, übersieht z. B. dass $\\text{J/m}^3 = \\text{Pa}$.

**Typischer Fehler:** Mit der Rechnung loslegen, ohne vorher die Zieleinheit festzulegen — dann weiß man am Ende gar nicht, wohin der Vergleich laufen soll.`,
        [
          'Ziel zuerst.',
          'Rechte Seite danach.',
          'Basiseinheiten-Reduktion vor dem Vergleich.',
        ],
        { stage: 'apply-guided', subGoal: 0, uses: ['dim-konsistenz'] },
      ),
      mc(
        'In welcher Aussage steckt ein **dimensionaler Fehler**?',
        [
          'Federkraft: $F = k\\cdot x$ mit $[k] = \\text{N/m}$, $[x]=\\text{m}$ ⇒ $[F] = \\text{N}$.',
          'Beschleunigung: $a = F/m^2$ mit $[F]=\\text{N}$, $[m]=\\text{kg}$ ⇒ $[a] = \\text{m/s}^2$.',
          'Kinetische Energie: $E = \\tfrac{1}{2} m v^2$ mit $[m]=\\text{kg}$, $[v]=\\text{m/s}$ ⇒ $[E]=\\text{kg}\\cdot\\text{m}^2/\\text{s}^2 = \\text{J}$.',
          'Druck: $p = F/A$ mit $[F]=\\text{N}$, $[A]=\\text{m}^2$ ⇒ $[p]=\\text{N/m}^2 = \\text{Pa}$.',
        ],
        1,
        `**Ansatz:** Jede Aussage einzeln nachrechnen — Einheit der rechten Seite mit der angegebenen Zieleinheit vergleichen.

**Rechnung:** Aussage 2: $[F/m^2] = \\text{N}/\\text{kg}^2 = (\\text{kg}\\cdot\\text{m/s}^2)/\\text{kg}^2 = \\text{m}/(\\text{kg}\\cdot\\text{s}^2)$ — das ist **nicht** $\\text{m/s}^2$. Die korrekte Form wäre $a = F/m$ (Newton 2. Gesetz).

**Probe:** $a = F/m$: $[F/m] = \\text{N/kg} = (\\text{kg}\\cdot\\text{m/s}^2)/\\text{kg} = \\text{m/s}^2$ ✓.

**Typischer Fehler:** Bei Newton 2. Gesetz $m$ quadrieren — sieht zahlenmäßig oft "richtig" aus, ist aber dimensional sofort entlarvbar.`,
        [
          'Pro Aussage: Einheit links mit Einheit rechts vergleichen.',
          'Bei Newton 2. Gesetz: nur einfaches $m$ im Nenner.',
          '$\\text{N}/\\text{kg}^2 \\neq \\text{m/s}^2$.',
        ],
        {
          0: 'Korrekt: $[k\\cdot x] = (\\text{N/m})\\cdot\\text{m} = \\text{N}$ — Einheiten passen.',
          2: 'Korrekt: $[m\\cdot v^2] = \\text{kg}\\cdot(\\text{m/s})^2 = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2 = \\text{J}$.',
          3: 'Korrekt: $[F/A] = \\text{N/m}^2 = \\text{Pa}$ per Definition.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['dim-konsistenz'] },
      ),
      mc(
        'Eine Formel für die Schwingdauer $T$ eines Feder-Masse-Schwingers wird gesucht. Welcher der vier Ausdrücke hat **Einheit Sekunde**, wenn $[m]=\\text{kg}$ und $[k]=\\text{N/m}$?',
        [
          '$\\sqrt{m/k}$',
          '$\\sqrt{k/m}$',
          '$m\\cdot k$',
          '$m/k$',
        ],
        0,
        `**Ansatz:** Reine Dimensionsanalyse — Einheit jedes Ausdrucks bestimmen und mit $\\text{s}$ vergleichen.

**Rechnung:** $[m/k] = \\text{kg}/(\\text{N/m}) = \\text{kg}\\cdot\\text{m}/\\text{N} = \\text{kg}\\cdot\\text{m}/(\\text{kg}\\cdot\\text{m/s}^2) = \\text{s}^2$ ⇒ $\\sqrt{m/k}$ hat Einheit $\\text{s}$ ✓.

**Probe:** Die bekannte Formel $T = 2\\pi\\sqrt{m/k}$ (Federpendel) hat genau diese Einheit. Vorfaktor $2\\pi$ ist dimensionslos.

**Typischer Fehler:** $\\sqrt{k/m}$ ($\\omega_0$-Eigenkreisfrequenz, Einheit $\\text{s}^{-1}$) und $T$ verwechseln. $T$ ist die Dauer (s), $\\omega$ die Kreisfrequenz (1/s).`,
        [
          '$T$ hat Einheit Sekunde.',
          'Aus $m$ (kg) und $k$ (N/m) Einheit Sekunde bilden — welche Kombination?',
          '$\\text{kg}/(\\text{N/m}) = \\text{s}^2$ aufrollen.',
        ],
        {
          1: '$\\sqrt{k/m}$ hat Einheit $\\text{s}^{-1}$ — das ist die Eigenkreisfrequenz $\\omega_0$, nicht die Schwingdauer.',
          2: '$m\\cdot k$ hat Einheit $\\text{kg}\\cdot\\text{N/m} = \\text{N}\\cdot\\text{kg/m}$ — keine Sekunde.',
          3: '$m/k$ hat Einheit $\\text{s}^2$, nicht $\\text{s}$. Erst die Wurzel macht daraus eine Sekunde.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['dim-konsistenz'] },
      ),
    ],

    // ── [1] Basis-SI-Einheiten ───────────────────────────────────────────
    1: [
      mc(
        'Welche der folgenden Einheiten ist **keine** SI-Basiseinheit?',
        [
          'Meter (m)',
          'Kilogramm (kg)',
          'Newton (N)',
          'Sekunde (s)',
        ],
        2,
        `**Ansatz:** Die 7 SI-Basiseinheiten sind: **m, kg, s, A, K, mol, cd**. Alles andere ist abgeleitet.

**Rechnung:** Newton ist eine **abgeleitete** Einheit: $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m/s}^2$. Sie wird aus drei Basiseinheiten aufgebaut.

**Probe:** Weitere abgeleitete Einheiten (aus den 7 Basiseinheiten): J, W, Pa, V, Ω, Hz, F (Farad), T (Tesla) …

**Typischer Fehler:** Alles mit eigenem Namen (N, J, Pa) als Basiseinheit ansehen. Der eigene Name ist eine Abkürzung — die Einheit ist trotzdem "abgeleitet".`,
        [
          'Es gibt genau 7 SI-Basiseinheiten.',
          'Zu ihnen gehört alles, was Länge, Masse, Zeit, Strom, Temperatur, Stoffmenge, Lichtstärke direkt misst.',
          'Kraft ist keine eigene Grundgröße — sie folgt aus Masse × Beschleunigung.',
        ],
        {
          0: 'Meter ist die Basiseinheit der Länge — einer der 7 Grundbausteine.',
          1: 'Kilogramm ist die Basiseinheit der Masse — ebenfalls in der Liste der 7.',
          3: 'Sekunde ist die Basiseinheit der Zeit — ebenfalls Basis-SI.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['basis-aufbau'] },
      ),
      matching(
        'Ordne jeder physikalischen Grundgröße ihre SI-Basiseinheit zu.',
        [
          { left: 'Länge', right: 'm (Meter)' },
          { left: 'Masse', right: 'kg (Kilogramm)' },
          { left: 'Zeit', right: 's (Sekunde)' },
          { left: 'Stromstärke', right: 'A (Ampere)' },
          { left: 'Thermodynamische Temperatur', right: 'K (Kelvin)' },
        ],
        `**Ansatz:** Sieben SI-Basiseinheiten. Hier die fünf wichtigsten für den Maschinenbau.

**Rechnung:** Darüber hinaus: mol (Stoffmenge) und cd (Lichtstärke) — im Maschinenbau seltener.

**Probe:** Alle anderen Einheiten (N, J, W, Pa, V, Ω …) sind Produkte/Quotienten dieser sieben.

**Typischer Fehler:** Celsius als Basiseinheit annehmen. Basis-SI für Temperatur ist **Kelvin**. $T[\\text{K}] = \\vartheta[°\\text{C}] + 273{,}15$. Temperaturdifferenzen sind numerisch gleich, Absolutwerte nicht.`,
        [
          'Basis-Einheit = unabhängig definiert, nicht abgeleitet.',
          'Temperatur: Kelvin, nicht Celsius.',
          'Strom: Ampere.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['basis-aufbau'] },
      ),
      tf(
        'Das SI-System hat genau **sieben** Basiseinheiten, aus denen alle anderen Einheiten zusammengesetzt werden.',
        true,
        `**Ansatz:** SI-Basiseinheiten: m, kg, s, A, K, mol, cd — das sind 7.

**Rechnung:** Zählen: Länge, Masse, Zeit, Strom, Temperatur, Stoffmenge, Lichtstärke = 7 Grundgrößen.

**Probe:** Alle anderen Einheiten wie N = kg·m/s², J = N·m, W = J/s, Pa = N/m² werden aus Produkten/Potenzen der Basiseinheiten gebildet.

**Typischer Fehler:** Glauben, jede Einheit mit eigenem Namen (N, J, V, Ω, Pa …) sei "Basis". Eigener Name ≠ Basis — es gibt genau 7 Basiseinheiten.`,
        [
          'Zählen: m, kg, s, A, K, mol, cd.',
          'Das sind sieben Einheiten.',
          'Alles andere ist abgeleitet.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['basis-aufbau'] },
      ),
      ni(
        'Drücke die Einheit **Newton** ausschließlich in SI-Basiseinheiten aus: $1\\,\\text{N} = 1\\,\\text{kg}^a \\cdot \\text{m}^b \\cdot \\text{s}^c$. Gib $a + b + |c|$ an.',
        4, 0, '',
        `**Ansatz:** $F = m\\cdot a$ ⇒ $[F] = [m]\\cdot[a] = \\text{kg}\\cdot\\text{m/s}^2 = \\text{kg}^1\\cdot\\text{m}^1\\cdot\\text{s}^{-2}$.

**Rechnung:** $a = 1$, $b = 1$, $c = -2$. Also $a + b + |c| = 1 + 1 + 2 = 4$.

**Probe:** Umgekehrte Richtung: Kraft auf 1 kg, die 1 m/s² Beschleunigung erzeugt — genau die SI-Definition des Newton.

**Typischer Fehler:** $c = +2$ ansetzen (Zeit im Zähler). Beschleunigung hat $\\text{s}$ im Nenner quadriert — also negativer Exponent.`,
        [
          '$F = m\\cdot a$.',
          '$[a] = \\text{m/s}^2$.',
          'Zeit-Exponent ist −2.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['basis-aufbau'] },
      ),
      sorting(
        'Ordne die Einheiten von "direkte Basiseinheit" zu "drei Schritte abgeleitet".',
        [
          'Meter (m) — Basiseinheit Länge',
          'Newton (N) — kg·m/s² (1 Schritt: aus F = m·a)',
          'Joule (J) — N·m = kg·m²/s² (2 Schritte: Kraft × Weg)',
          'Watt (W) — J/s = kg·m²/s³ (3 Schritte: Energie pro Zeit)',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Jede abgeleitete Einheit baut auf einer einfacheren auf. Hierarchie: Länge → Kraft → Energie → Leistung.

**Rechnung:** m ist Basis. N = kg·m/s² braucht schon m, kg, s. J = N·m setzt N voraus. W = J/s setzt J voraus.

**Probe:** In Basis-SI: Pa = kg/(m·s²), V = kg·m²/(A·s³) — je komplexer, desto mehr Basis-Potenzen.

**Typischer Fehler:** Joule mit Watt verwechseln — beide haben eigene Namen, aber Joule = Energie (kg·m²/s²), Watt = Leistung (kg·m²/s³) — Unterschied: ein Faktor 1/s.`,
        [
          'Basis = direkt definiert.',
          'Jede Ableitungsstufe fügt Multiplikation/Division hinzu.',
          'Watt enthält Joule enthält Newton enthält Meter.',
        ],
        { stage: 'apply-guided', subGoal: 1, uses: ['basis-aufbau'] },
      ),
      mc(
        'Eine physikalische Größe hat in Basis-SI die Einheit $\\text{kg}\\cdot\\text{m}^2/\\text{s}^3$. Um welche Größe handelt es sich?',
        [
          'Energie (J)',
          'Leistung (W)',
          'Kraft (N)',
          'Druck (Pa)',
        ],
        1,
        `**Ansatz:** Jede Größe einmal in Basis-SI zerlegen und vergleichen.

**Rechnung:** Energie $\\text{J} = \\text{N}\\cdot\\text{m} = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$. Leistung $\\text{W} = \\text{J/s} = \\text{kg}\\cdot\\text{m}^2/\\text{s}^3$ ✓. Kraft $\\text{N} = \\text{kg}\\cdot\\text{m/s}^2$. Druck $\\text{Pa} = \\text{N/m}^2 = \\text{kg}/(\\text{m}\\cdot\\text{s}^2)$.

**Probe:** Leistung = Energie/Zeit ⇒ $\\text{J/s}$. Im Vergleich zu $\\text{J}$ ein zusätzliches $1/\\text{s}$ — also $\\text{s}^3$ statt $\\text{s}^2$ im Nenner.

**Typischer Fehler:** Joule und Watt verwechseln — sie unterscheiden sich nur um einen Faktor $1/\\text{s}$. Wer nicht auf die Zeit-Potenz achtet, liegt schnell daneben.`,
        [
          '$\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$ = Joule (Energie).',
          '$\\text{s}^3$ statt $\\text{s}^2$ heißt: ein Mal $/\\text{s}$ mehr.',
          'Energie/Zeit = Leistung.',
        ],
        {
          0: 'Energie hat $\\text{s}^2$ im Nenner ($\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$), nicht $\\text{s}^3$. Der Unterschied zu Watt ist genau ein Faktor Zeit.',
          2: 'Kraft hat in Basis-SI $\\text{kg}\\cdot\\text{m}/\\text{s}^2$ — nur **eine** Potenz von $\\text{m}$, nicht zwei.',
          3: 'Druck ist $\\text{kg}/(\\text{m}\\cdot\\text{s}^2)$ — Meter steht im **Nenner**, nicht im Zähler quadriert.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['basis-aufbau'] },
      ),
      mc(
        'Studentin behauptet: "Joule lässt sich in Basis-SI als $\\text{kg}\\cdot\\text{m/s}^2$ schreiben." Was ist korrekt?',
        [
          'Stimmt — $1\\,\\text{J} = 1\\,\\text{kg}\\cdot\\text{m/s}^2$.',
          '$\\text{kg}\\cdot\\text{m/s}^2$ ist die Einheit Newton, nicht Joule. Joule = N·m = $\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$.',
          'Joule ist eine SI-Basiseinheit und wird nicht weiter zerlegt.',
          'Die richtige Zerlegung wäre $\\text{kg/s}^2$.',
        ],
        1,
        `**Ansatz:** Joule ist abgeleitet: $\\text{J} = \\text{N}\\cdot\\text{m}$. Newton selbst ist $\\text{kg}\\cdot\\text{m/s}^2$. Beim Auflösen NICHT den zweiten Faktor $\\text{m}$ vergessen.

**Rechnung:** $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m} = (1\\,\\text{kg}\\cdot\\text{m/s}^2)\\cdot 1\\,\\text{m} = 1\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$.

**Probe:** Aus der Energieformel: $E = \\tfrac12 m v^2 \\Rightarrow [\\text{kg}]\\cdot[\\text{m/s}]^2 = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$ ✓.

**Typischer Fehler:** Newton $\\text{kg}\\cdot\\text{m/s}^2$ und Joule $\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$ gleichsetzen — der zweite Meter aus $\\text{N}\\cdot\\text{m}$ wird unterschlagen.`,
        [
          'Joule = N·m, nicht einfach N.',
          'N selbst hat schon $\\text{kg}\\cdot\\text{m/s}^2$.',
          'Beim Auflösen kommt **noch ein** $\\text{m}$ dazu.',
        ],
        {
          0: 'Falsch — $\\text{kg}\\cdot\\text{m/s}^2$ ist Newton (Kraft), nicht Joule. Es fehlt der zweite Faktor $\\text{m}$ aus $\\text{J} = \\text{N}\\cdot\\text{m}$.',
          2: 'Joule ist **nicht** Basis-SI. Basis-SI sind nur m, kg, s, A, K, mol, cd. J ist abgeleitet.',
          3: '$\\text{kg/s}^2$ wäre weder Kraft noch Energie — diese Einheit hat in der Mechanik keine direkte Standardgröße.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['basis-aufbau'] },
      ),
    ],

    // ── [2] Pascal-Einheit ───────────────────────────────────────────────
    2: [
      ni(
        'Wie viele Pascal sind $1\\,\\text{MPa}$?',
        1000000, 1, 'Pa',
        `**Ansatz:** $1\\,\\text{M} = 10^6$. Präfix "Mega" multipliziert mit Faktor eine Million.

**Rechnung:** $1\\,\\text{MPa} = 10^6\\,\\text{Pa} = 1\\,000\\,000\\,\\text{Pa}$.

**Probe:** Äquivalent: $1\\,\\text{MPa} = 1\\,\\text{N/mm}^2$. Beides sind die üblichen Festigkeits-Einheiten im Maschinenbau — derselbe Zahlenwert, andere Schreibweise.

**Typischer Fehler:** $1\\,\\text{MPa} = 10^3\\,\\text{Pa}$ setzen (das wäre kPa) oder mit $10^9$ (das wäre GPa). Die Präfixe auswendig: k = $10^3$, M = $10^6$, G = $10^9$.`,
        [
          'Präfix Mega = 10^6.',
          '1 MPa = 10^6 Pa.',
          'Als Zahl: 1 000 000.',
        ],
        { stage: 'apply-guided', subGoal: 2, uses: ['pa-zerlegung'] },
      ),
      mc(
        'Welche Einheit ist **nicht** äquivalent zu Pascal?',
        [
          'N/m²',
          'kg/(m·s²)',
          'J/m³',
          'N·m',
        ],
        3,
        `**Ansatz:** Pascal ist Druck/Spannung. Zieleinheit: $\\text{kg}/(\\text{m}\\cdot\\text{s}^2)$.

**Rechnung:** (1) N/m² = Pa per Definition. (2) kg/(m·s²) = (kg·m/s²)/m² = N/m² = Pa. (3) J/m³ = (N·m)/m³ = N/m² = Pa (Energiedichte hat dieselbe Einheit wie Druck!). (4) N·m = J — das ist **Energie**, nicht Druck.

**Probe:** Energiedichte = Druck ist ein wichtiger Zusammenhang (z. B. kinetische Energiedichte in Strömungen = dynamischer Druck).

**Typischer Fehler:** N·m mit N/m² verwechseln — Multiplikation/Division vertauscht. N·m = Arbeit, N/m² = Druck.`,
        [
          'Pa = N/m² per Definition.',
          'J/m³ auflösen: N·m/m³ = N/m².',
          'N·m ist das Produkt, nicht der Quotient.',
        ],
        {
          0: 'Das ist die Standarddefinition: $1\\,\\text{Pa} = 1\\,\\text{N/m}^2$.',
          1: '$\\text{kg}/(\\text{m}\\cdot\\text{s}^2) = (\\text{kg}\\cdot\\text{m/s}^2)/\\text{m}^2 = \\text{N/m}^2 = \\text{Pa}$ — genau die Basis-SI-Darstellung von Pascal.',
          2: '$\\text{J/m}^3 = (\\text{N}\\cdot\\text{m})/\\text{m}^3 = \\text{N/m}^2 = \\text{Pa}$. Energiedichte und Druck haben dieselbe Einheit.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['pa-zerlegung'] },
      ),
      tf(
        'Der Wert $1\\,\\text{N/mm}^2$ entspricht exakt $1\\,\\text{MPa}$.',
        true,
        `**Ansatz:** Umrechnen auf Pascal: $1\\,\\text{N/mm}^2 = 1\\,\\text{N}/(10^{-3}\\,\\text{m})^2 = 1\\,\\text{N}/10^{-6}\\,\\text{m}^2 = 10^6\\,\\text{N/m}^2 = 10^6\\,\\text{Pa} = 1\\,\\text{MPa}$.

**Rechnung:** $10^6\\,\\text{Pa} = 1\\,\\text{MPa}$ ✓.

**Probe:** Deshalb wechseln Werkstoffkennwerte je nach Quelle zwischen MPa und N/mm² — es sind genau dieselben Zahlen. $E_\\text{Stahl} = 210\\,000\\,\\text{N/mm}^2 = 210\\,000\\,\\text{MPa} = 210\\,\\text{GPa}$.

**Typischer Fehler:** Einen Faktor $10^3$ erwarten, weil "mm hat nur $10^{-3}$". Der Faktor wird **quadriert**, weil die Fläche mm² hat.`,
        [
          '1 mm = 10⁻³ m.',
          '1 mm² = 10⁻⁶ m².',
          '1/10⁻⁶ = 10⁶.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['pa-zerlegung'] },
      ),
      ni(
        'Ein Überdruck von $2{,}5\\,\\text{bar}$ entspricht wie vielen Kilopascal?',
        250, 0.5, 'kPa',
        `**Ansatz:** $1\\,\\text{bar} = 10^5\\,\\text{Pa} = 100\\,\\text{kPa}$.

**Rechnung:** $2{,}5\\,\\text{bar} \\cdot 100\\,\\text{kPa/bar} = 250\\,\\text{kPa}$.

**Probe:** $250\\,\\text{kPa} = 250\\,000\\,\\text{Pa} = 2{,}5\\cdot 10^5\\,\\text{Pa}$ ✓. Das entspricht etwa dem Reifendruck eines Pkw (ca. $2{,}0$–$2{,}5\\,\\text{bar}$ Überdruck).

**Typischer Fehler:** $1\\,\\text{bar} = 1\\,\\text{kPa}$ setzen (Faktor $100$ fehlt) oder mit $10^6$ (das wäre MPa — also in MPa wären es $0{,}25$, nicht $250$).`,
        [
          '1 bar = 100 kPa.',
          '2,5 × 100 = 250.',
          'bar ≈ Atmosphäre ≈ 100 kPa.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['pa-zerlegung'] },
      ),
      matching(
        'Ordne jede Druckangabe ihrem Wert in Pa zu.',
        [
          { left: '1 hPa', right: '$10^2\\,\\text{Pa} = 100\\,\\text{Pa}$' },
          { left: '1 kPa', right: '$10^3\\,\\text{Pa} = 1000\\,\\text{Pa}$' },
          { left: '1 bar', right: '$10^5\\,\\text{Pa} = 100\\,000\\,\\text{Pa}$' },
          { left: '1 MPa', right: '$10^6\\,\\text{Pa} = 1\\,000\\,000\\,\\text{Pa}$' },
          { left: '1 N/mm²', right: '$10^6\\,\\text{Pa} = 1\\,000\\,000\\,\\text{Pa}$' },
        ],
        `**Ansatz:** Präfixe und Flächenbezug konsequent anwenden.

**Rechnung:** h = $10^2$, k = $10^3$, M = $10^6$. bar ist eine "alte" Einheit = $10^5\\,\\text{Pa}$. N/mm² = $10^6\\,\\text{Pa}$ wegen quadrierter mm.

**Probe:** MPa und N/mm² sind **identisch** ($10^6\\,\\text{Pa}$) — darum nutzt man sie synonym in Festigkeitsangaben.

**Typischer Fehler:** bar und Pa gleichsetzen ("bar ist die SI-Druckeinheit") — nein, bar ist kein SI, sondern eine abgeleitete Nicht-SI-Einheit gleich $10^5\\,\\text{Pa}$.`,
        [
          'SI-Präfixe auswendig (h, k, M).',
          'bar = 10⁵ Pa.',
          '1 N/mm² = 1 MPa.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['pa-zerlegung'] },
      ),
      mc(
        'Drücke $1\\,\\text{Pa}$ vollständig in **SI-Basiseinheiten** aus, indem du den Weg $\\text{Pa} = \\text{N/m}^2$ und $\\text{N} = \\text{kg}\\cdot\\text{m/s}^2$ gehst.',
        [
          '$\\text{kg}/(\\text{m}\\cdot\\text{s}^2)$',
          '$\\text{kg}\\cdot\\text{m/s}^2$',
          '$\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$',
          '$\\text{kg}/(\\text{m}^2\\cdot\\text{s}^2)$',
        ],
        0,
        `**Ansatz:** Schrittweise einsetzen: $\\text{Pa} = \\text{N/m}^2$, dann $\\text{N}$ ersetzen.

**Rechnung:** $\\text{Pa} = \\dfrac{\\text{N}}{\\text{m}^2} = \\dfrac{\\text{kg}\\cdot\\text{m/s}^2}{\\text{m}^2} = \\dfrac{\\text{kg}}{\\text{m}\\cdot\\text{s}^2}$.

**Probe:** Eine Potenz von $\\text{m}$ kürzt sich (Zähler $\\text{m}$ gegen Nenner $\\text{m}^2$ ⇒ $1/\\text{m}$). Übrig bleibt eine $1/\\text{m}$, kombiniert mit $\\text{kg}/\\text{s}^2$.

**Typischer Fehler:** Nur eine Potenz von $\\text{m}$ kürzen, dann landet man bei $\\text{kg}/\\text{s}^2$ (zu wenige Meter im Nenner). Sauber rechnen: $\\text{m}/\\text{m}^2 = 1/\\text{m}$.`,
        [
          'Pa = N/m².',
          'N = kg·m/s² in N einsetzen.',
          'Dann m im Zähler gegen m² im Nenner kürzen.',
        ],
        {
          1: '$\\text{kg}\\cdot\\text{m/s}^2$ ist Newton, **nicht** Pascal. Es fehlt die Division durch eine Fläche.',
          2: '$\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$ ist Joule (Energie), nicht Druck.',
          3: 'Zu viele Meter im Nenner. Im Zähler von $\\text{N}$ steht $\\text{m}^1$, im Nenner $\\text{m}^2$ — Differenz: $\\text{m}^{-1}$, nicht $\\text{m}^{-2}$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['pa-zerlegung'] },
      ),
      mc(
        'Auf einen Kolben mit Querschnittsfläche $A = 0{,}5\\,\\text{m}^2$ wirkt ein Druck $p = 200\\,\\text{kPa}$. Wie groß ist die resultierende Kraft auf den Kolben?',
        [
          '$400\\,\\text{N}$',
          '$1\\,000\\,\\text{N}$',
          '$100\\,000\\,\\text{N}$',
          '$400\\,000\\,\\text{N}$',
        ],
        2,
        `**Ansatz:** $p = F/A \\Rightarrow F = p\\cdot A$. Druck und Fläche müssen in konsistenten Einheiten stehen — Pa = N/m² verlangt $A$ in m² und $p$ in Pa.

**Rechnung:** $p = 200\\,\\text{kPa} = 200\\,000\\,\\text{Pa}$. $F = 200\\,000\\,\\text{Pa}\\cdot 0{,}5\\,\\text{m}^2 = 100\\,000\\,\\text{N} = 100\\,\\text{kN}$.

**Probe:** Einheitencheck: $\\text{Pa}\\cdot\\text{m}^2 = (\\text{N/m}^2)\\cdot\\text{m}^2 = \\text{N}$ ✓.

**Typischer Fehler:** Druck in kPa belassen ($200\\cdot 0{,}5 = 100$ — als $100\\,\\text{N}$ interpretieren). Tatsächlich liefert $\\text{kPa}\\cdot\\text{m}^2 = \\text{kN}$, also $100\\,\\text{kN} = 100\\,000\\,\\text{N}$.`,
        [
          'Pa = N/m², deshalb erst kPa → Pa.',
          'F = p·A.',
          '200 000 · 0,5 = 100 000.',
        ],
        {
          0: 'Da steckt ein Faktor $250$ zu wenig — vermutlich $200/0{,}5 = 400$ statt $200\\cdot 0{,}5 = 100$ gerechnet (Operation falsch).',
          1: 'Faktor 100 zu wenig: kPa wurde nicht in Pa umgerechnet — $200\\cdot 0{,}5\\cdot 10$ statt $\\cdot 1000$.',
          3: 'Faktor 4 zu groß — vermutlich $0{,}5\\,\\text{m}^2$ als $2\\,\\text{m}^2$ interpretiert (Kehrwert).',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['pa-zerlegung'] },
      ),
      mc(
        'Eine Formelsammlung gibt für die Energiedichte des elektrischen Feldes $w = \\tfrac{1}{2}\\varepsilon_0 E^2$ die Einheit $\\text{J/m}^3$ an. Welche **äquivalente** Druck-Einheit hat dieselbe Größe?',
        [
          'Pa',
          'N',
          'W',
          'm',
        ],
        0,
        `**Ansatz:** Energiedichte hat Einheit Energie/Volumen. Mit $\\text{J} = \\text{N}\\cdot\\text{m}$ aufrollen.

**Rechnung:** $\\text{J/m}^3 = (\\text{N}\\cdot\\text{m})/\\text{m}^3 = \\text{N/m}^2 = \\text{Pa}$.

**Probe:** Auch in Basis-SI: $\\text{J/m}^3 = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2/\\text{m}^3 = \\text{kg}/(\\text{m}\\cdot\\text{s}^2) = \\text{Pa}$ ✓.

**Typischer Fehler:** "Energiedichte" hört sich an wie Energie — ist aber dimensional dieselbe Größe wie Druck. Dieser Zusammenhang taucht beim dynamischen Druck $p_\\text{dyn} = \\tfrac12\\rho v^2$ wieder auf (auch dort: kinetische Energiedichte = Druck).`,
        [
          'J = N·m.',
          'J/m³ = (N·m)/m³.',
          'm im Zähler gegen ein m³ im Nenner kürzen ⇒ N/m².',
        ],
        {
          1: 'N ist Kraft, nicht Energie pro Volumen. Es fehlt der Bezug zur Fläche.',
          2: 'W ist Leistung (Energie/Zeit), nicht Energie/Volumen. Falscher Nenner.',
          3: 'm ist eine reine Längeneinheit — Energiedichte hat Volumen im Nenner, nicht nichts.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['pa-zerlegung'] },
      ),
    ],

    // ── [3] Umrechnungen vor dem Einsetzen ──────────────────────────────
    3: [
      ni(
        'Eine Querschnittsfläche beträgt $A = 250\\,\\text{mm}^2$. Wie viele m² sind das? (wissenschaftliche Schreibweise erlaubt)',
        0.00025, 0.0000001, 'm²',
        `**Ansatz:** $1\\,\\text{mm} = 10^{-3}\\,\\text{m}$ ⇒ $1\\,\\text{mm}^2 = (10^{-3})^2\\,\\text{m}^2 = 10^{-6}\\,\\text{m}^2$.

**Rechnung:** $A = 250\\,\\text{mm}^2 \\cdot 10^{-6}\\,\\text{m}^2/\\text{mm}^2 = 250\\cdot 10^{-6}\\,\\text{m}^2 = 2{,}5\\cdot 10^{-4}\\,\\text{m}^2 = 0{,}00025\\,\\text{m}^2$.

**Probe:** Gegencheck: $250\\,\\text{mm}^2$ entspricht einem Quadrat mit Kantenlänge $\\sqrt{250}\\approx 15{,}8\\,\\text{mm}\\approx 0{,}0158\\,\\text{m}$. Fläche: $0{,}0158^2 \\approx 2{,}5\\cdot 10^{-4}\\,\\text{m}^2$ ✓.

**Typischer Fehler:** Nur den **linearen** Faktor $10^{-3}$ verwenden ⇒ $0{,}25\\,\\text{m}^2$ (um Faktor $10^3$ zu groß). Bei Flächen wird der Faktor **quadriert**.`,
        [
          '1 mm = 10⁻³ m.',
          'Bei Fläche Faktor quadrieren.',
          '250 × 10⁻⁶ = 2,5·10⁻⁴.',
        ],
        { stage: 'apply-guided', subGoal: 3, uses: ['einheit-umform'] },
      ),
      ni(
        'Eine Stange hat $A = 100\\,\\text{mm}^2$ und trägt $F = 50\\,\\text{kN}$. Normalspannung $\\sigma = F/A$ in **MPa**?',
        500, 1, 'MPa',
        `**Ansatz:** Praktiker-Trick: in MPa landet man direkt, wenn $F$ in **N** und $A$ in **mm²** eingesetzt wird — $1\\,\\text{N/mm}^2 = 1\\,\\text{MPa}$.

**Rechnung:** $F = 50\\,\\text{kN} = 50\\,000\\,\\text{N}$. $\\sigma = 50\\,000\\,\\text{N}/100\\,\\text{mm}^2 = 500\\,\\text{N/mm}^2 = 500\\,\\text{MPa}$.

**Probe:** Alternative in SI: $F = 50\\,000\\,\\text{N}$, $A = 100\\cdot 10^{-6}\\,\\text{m}^2 = 10^{-4}\\,\\text{m}^2$. $\\sigma = 50\\,000/10^{-4} = 5\\cdot 10^{8}\\,\\text{Pa} = 500\\,\\text{MPa}$ ✓.

**Typischer Fehler:** $F$ in kN, $A$ in mm² lassen ⇒ "$50/100 = 0{,}5$ kN/mm²" — als $0{,}5\\,\\text{MPa}$ interpretieren. Tatsächlich ist $1\\,\\text{kN/mm}^2 = 1000\\,\\text{MPa}$, also $0{,}5\\,\\text{kN/mm}^2 = 500\\,\\text{MPa}$.`,
        [
          'kN → N: ×1000.',
          'N und mm² passen direkt: N/mm² = MPa.',
          '50000/100 = 500.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['einheit-umform'] },
      ),
      mc(
        'Welche Umrechnung ist **falsch**?',
        [
          '$150\\,\\text{kN} = 150\\,000\\,\\text{N}$',
          '$250\\,\\text{MPa} = 2{,}5\\cdot 10^8\\,\\text{Pa}$',
          '$1\\,\\text{kN/mm}^2 = 1\\,\\text{MPa}$',
          '$100\\,\\text{mm}^2 = 10^{-4}\\,\\text{m}^2$',
        ],
        2,
        `**Ansatz:** Jede Umrechnung einzeln prüfen.

**Rechnung:** (a) k = $10^3$, also $150\\cdot 10^3 = 150\\,000$ ✓. (b) M = $10^6$, also $250\\cdot 10^6 = 2{,}5\\cdot 10^8$ ✓. (c) $1\\,\\text{kN/mm}^2 = 10^3\\,\\text{N}/10^{-6}\\,\\text{m}^2 = 10^9\\,\\text{Pa} = 1\\,\\text{GPa} = 1000\\,\\text{MPa}$ — **nicht** 1 MPa. (d) $100\\cdot 10^{-6} = 10^{-4}$ ✓.

**Probe:** Merkregel: $1\\,\\text{N/mm}^2 = 1\\,\\text{MPa}$, aber $1\\,\\text{kN/mm}^2 = 1\\,\\text{GPa}$ — Faktor 1000 mehr.

**Typischer Fehler:** kN/mm² und N/mm² gleichsetzen. Das ist **der** klassische Umrechnungsfehler in Festigkeitsrechnungen — kostet Faktor 1000.`,
        [
          'Präfixe einzeln: k, M, G.',
          'Flächen: Faktor quadrieren.',
          'kN/mm² ist GPa, nicht MPa.',
        ],
        {
          0: 'kN → N: Faktor $10^3$. $150\\cdot 1000 = 150\\,000$ — korrekt.',
          1: 'MPa → Pa: Faktor $10^6$. $250\\cdot 10^6 = 2{,}5\\cdot 10^8$ — korrekt.',
          3: 'mm² → m²: Faktor $10^{-6}$. $100\\cdot 10^{-6} = 10^{-4}$ — korrekt.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['einheit-umform'] },
      ),
      tf(
        'Die Einheiten "N/mm²" und "MPa" haben denselben Zahlenwert — ein Stab mit $\\sigma = 350\\,\\text{MPa}$ trägt also $350\\,\\text{N/mm}^2$.',
        true,
        `**Ansatz:** $1\\,\\text{N/mm}^2 = 1\\,\\text{N}/(10^{-3}\\,\\text{m})^2 = 10^6\\,\\text{N/m}^2 = 10^6\\,\\text{Pa} = 1\\,\\text{MPa}$.

**Rechnung:** Beide Einheiten entsprechen exakt $10^6\\,\\text{Pa}$ ⇒ Zahlenwerte identisch.

**Probe:** $350\\,\\text{MPa} = 350\\cdot 10^6\\,\\text{Pa} = 3{,}5\\cdot 10^8\\,\\text{Pa}$ und gleichzeitig $350\\,\\text{N/mm}^2$. Beide Schreibweisen tauchen in Datenblättern gleichermaßen auf.

**Typischer Fehler:** Die beiden Einheiten als verschieden wahrnehmen (Panikmoment in der Klausur!). Sie sind identisch — nur zwei Namen für dieselbe Größe.`,
        [
          'Ein mm² ist 10⁻⁶ m².',
          'N/mm² = 10⁶ N/m² = 10⁶ Pa.',
          '10⁶ Pa = 1 MPa.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['einheit-umform'] },
      ),
      sorting(
        'Bringe die Arbeitsschritte einer sauberen Rechnung in die Reihenfolge, die Fehler vermeidet.',
        [
          'Einheitensystem wählen (z. B. alles in SI-Basis, oder alles in N/mm²-Praxis)',
          'Jede Eingabegröße explizit in dieses System umrechnen',
          'Formel mit den umgerechneten Zahlen einsetzen',
          'Einheiten am Ergebnis dimensional prüfen',
          'Plausibilitätscheck mit erwarteter Größenordnung',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Erst konsistentes Einheitensystem, dann erst rechnen. Wer zwischendurch Einheiten mischt, baut die Fehlerquelle aktiv ein.

**Rechnung:** Schritt 1 ist die strategische Entscheidung. Im Maschinenbau oft: N, mm, MPa (direkt kompatibel für Festigkeit). In Physik: kg, m, s, Pa.

**Probe:** Die Dimensionsprüfung (Schritt 4) fängt Faktor-1000-Fehler zuverlässig ab. Nie auslassen.

**Typischer Fehler:** Direkt aus dem Aufgabenzettel in den Taschenrechner tippen — mit Einheitenmix (MPa, kN, mm²). Liefert zahlenmäßig fast immer etwas, das "irgendwie plausibel aussieht", ist aber falsch.`,
        [
          'Zuerst System festlegen.',
          'Dann umrechnen.',
          'Dimensionsprüfung am Ende, nicht am Anfang.',
        ],
        { stage: 'apply-guided', subGoal: 3, uses: ['einheit-umform'] },
      ),
      mc(
        'Du sollst die Federenergie $E = \\tfrac{1}{2}\\,k\\,x^2$ berechnen. Gegeben: $k = 200\\,\\text{N/cm}$, $x = 5\\,\\text{cm}$. Was ist der **erste richtige Schritt**?',
        [
          'Erst Einheiten harmonisieren: $k = 200\\,\\text{N/cm} = 20\\,000\\,\\text{N/m}$, $x = 0{,}05\\,\\text{m}$, dann in $E = \\tfrac{1}{2}kx^2$ einsetzen.',
          'Direkt einsetzen: $E = \\tfrac{1}{2}\\cdot 200\\cdot 5^2 = 2\\,500$ — Einheit ergibt sich am Ende automatisch.',
          'Nur $x$ in mm umrechnen, $k$ in N/cm belassen — die Längeneinheiten kürzen sich später.',
          'Einheiten ignorieren — sie kürzen sich am Ende automatisch heraus.',
        ],
        0,
        `**Ansatz:** Vor dem Einsetzen alles in **ein** konsistentes System bringen — hier SI ($\\text{N}, \\text{m}$), damit das Ergebnis direkt in Joule herauskommt.

**Rechnung:** $k = 200\\,\\text{N/cm} = 200\\cdot 100\\,\\text{N/m} = 20\\,000\\,\\text{N/m}$. $x = 5\\,\\text{cm} = 0{,}05\\,\\text{m}$. $E = \\tfrac12\\cdot 20\\,000\\cdot 0{,}05^2 = \\tfrac12\\cdot 20\\,000\\cdot 0{,}0025 = 25\\,\\text{J}$.

**Probe:** Einheitencheck: $(\\text{N/m})\\cdot\\text{m}^2 = \\text{N}\\cdot\\text{m} = \\text{J}$ ✓.

**Typischer Fehler:** Direkt $\\tfrac12\\cdot 200\\cdot 25 = 2\\,500$ rechnen und das Ergebnis als J interpretieren. Tatsächlich ist die Einheit $\\text{N/cm}\\cdot\\text{cm}^2 = \\text{N}\\cdot\\text{cm} = 0{,}01\\,\\text{N}\\cdot\\text{m} = 0{,}01\\,\\text{J}$, also $2\\,500\\cdot 0{,}01 = 25\\,\\text{J}$ — derselbe Wert, aber nur, weil cm² hier zufällig kompatibel ist. Bei $E = \\tfrac12 m v^2$ mit gemischten Einheiten geht das gnadenlos schief.`,
        [
          'Konsistente Einheiten ZUERST.',
          'cm in m: $\\cdot 10^{-2}$ für Längen, $\\cdot 10^2$ für N/cm ⇒ N/m.',
          'Erst dann einsetzen.',
        ],
        {
          1: 'Direktes Einsetzen mit gemischten Einheiten ist die häufigste Fehlerquelle. Der Zahlenwert wird von der gewählten Einheit abhängig — ohne Einheit ist die "$2\\,500$" wertlos.',
          2: 'Einheiten "kürzen sich automatisch" stimmt nur, wenn sie konsistent sind. cm bei $x$ und cm bei $k$ sind hier zwar kompatibel, aber spätestens beim Quadrat $x^2$ in cm² wird es heikel.',
          3: '"Einheiten ignorieren" ist genau das, was Dimensionsanalyse zu verhindern versucht. Liefert Zahlenwerte, die auf falschen Einheiten basieren.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['einheit-umform'] },
      ),
      ni(
        'Eine Schraube mit Spannungsquerschnitt $A_S = 84{,}3\\,\\text{mm}^2$ wird mit der Vorspannkraft $F_V = 25\\,\\text{kN}$ belastet. Berechne die Vorspannungs-Spannung $\\sigma = F_V/A_S$ in **MPa** (auf 1 Nachkommastelle).',
        296.6, 0.5, 'MPa',
        `**Ansatz:** Praktiker-Trick: $\\text{N}/\\text{mm}^2 = \\text{MPa}$. Also $F_V$ in Newton, $A_S$ in mm² einsetzen — Ergebnis steht direkt in MPa.

**Rechnung:** $F_V = 25\\,\\text{kN} = 25\\,000\\,\\text{N}$. $\\sigma = 25\\,000\\,\\text{N}/84{,}3\\,\\text{mm}^2 = 296{,}56\\dots\\,\\text{N/mm}^2 \\approx 296{,}6\\,\\text{MPa}$.

**Probe:** Gegenrechnung in Basis-SI: $A_S = 84{,}3\\cdot 10^{-6}\\,\\text{m}^2 = 8{,}43\\cdot 10^{-5}\\,\\text{m}^2$. $\\sigma = 25\\,000/8{,}43\\cdot 10^{-5} \\approx 2{,}966\\cdot 10^{8}\\,\\text{Pa} = 296{,}6\\,\\text{MPa}$ ✓.

**Typischer Fehler:** $F_V$ in kN belassen ($25/84{,}3 \\approx 0{,}30$) — als $0{,}30\\,\\text{MPa}$ interpretieren. Tatsächlich ist $\\text{kN}/\\text{mm}^2 = 1000\\,\\text{MPa} = \\text{GPa}$ — der Wert wäre $0{,}30\\,\\text{GPa} = 300\\,\\text{MPa}$ (Faktor 1000 Differenz).`,
        [
          'kN → N: Faktor 1000.',
          'N/mm² = MPa direkt.',
          '25 000 / 84,3 ≈ 296,6.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['einheit-umform'] },
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-1-1 — Kräfte und Freikörperbild  (4 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-1-1': {

    // ── [0] Freikörperbild — Körper isolieren, alle äußeren Kräfte ─────
    0: [
      tf(
        'Innere Kontaktkräfte zwischen den Bauteilen eines abgeschlossenen Systems gehören NICHT in das Freikörperbild des Gesamtsystems.',
        true,
        `**Ansatz:** Im FKB werden nur **äußere** Einwirkungen auf das freigeschnittene System eingetragen. Die Frage ist immer: Was wirkt von **außen** auf den abgegrenzten Körper?

**Rechnung:** Innere Kräfte treten paarweise mit Gegenkraft auf (Newton 3.: actio = reactio) und heben sich beim Aufstellen von $\\sum F$ und $\\sum M$ am Gesamtsystem gegenseitig weg. Sie liefern keinen Beitrag.

**Probe:** Schneidet man hingegen ein einzelnes Bauteil aus dem System heraus, werden die vormals inneren Kräfte zu äußeren Kräften an diesem Teilsystem und müssen ins FKB des Teilsystems.

**Typischer Fehler:** Innere Kontakte zwischen verbundenen Körpern in das FKB des Gesamtsystems eintragen — produziert systematische Doppelzählung und verfälschte Reaktionskräfte.`,
        [
          'FKB = nur äußere Einwirkungen auf das freigeschnittene System.',
          'Innere Kräfte: actio + reactio im selben System.',
          'Sie heben sich paarweise weg, tragen nichts zu $\\sum F = 0$ bei.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['fkb'] },
      ),
      mc(
        'Ein homogener Balken ($m = 20\\,\\text{kg}$, $g = 9{,}81\\,\\text{m/s}^2$) liegt waagrecht auf einem **Festlager A** (links) und einem **Loslager B** (rechts). Welche Kräfte gehören vollständig in das FKB des Balkens?',
        [
          'Gewichtskraft $G = 196{,}2\\,\\text{N}$ im Schwerpunkt + $A_x, A_y$ am Festlager + $B_y$ am Loslager.',
          'Nur $G$ sowie $A_y$ und $B_y$ — Horizontalkomponenten weglassen, weil keine horizontale Last wirkt.',
          '$G + A_x, A_y + B_x, B_y$ — am Loslager wird zusätzlich eine Horizontalreaktion mitgeführt.',
          'Nur die Auflagerreaktionen $A_y$ und $B_y$ — Gewichtskraft wirkt im Schwerpunkt und ist deshalb keine äußere Kraft.',
        ],
        0,
        `**Ansatz:** Festlager liefert in 2D **2 Reaktionen** ($A_x, A_y$), Loslager **1 Reaktion** senkrecht zur Lauffläche ($B_y$). Eigengewicht greift im Schwerpunkt an. Alle drei Punkte sind Pflicht im FKB.

**Rechnung:** $G = m\\cdot g = 20\\cdot 9{,}81 = 196{,}2\\,\\text{N}$. Insgesamt 4 unbekannte/bekannte Kraftpfeile: $G, A_x, A_y, B_y$ — bei 3 Gleichgewichtsbedingungen ist das System trotzdem statisch bestimmt, weil $A_x = 0$ aus $\\sum F_x = 0$ herausfällt.

**Probe:** Anzahl Reaktionen = gehemmte Freiheitsgrade. Festlager hemmt 2 (horiz. + vert.), Loslager 1 (vert.). Summe der Reaktionen = 3 = 2D-Gleichgewichtsbedingungen — passt.

**Typischer Fehler:** $A_x$ weglassen, "weil ja keine horizontale Last anliegt". Im FKB werden alle **möglichen** Reaktionen eingetragen; die Rechnung zeigt dann, dass $A_x = 0$ ist. Wer $A_x$ gar nicht erst einzeichnet, vergisst es bei horizontalen Lastfällen.`,
        [
          'Festlager-Anzahl Reaktionen in 2D?',
          'Loslager-Anzahl?',
          'Gewichtskraft im Schwerpunkt nicht vergessen.',
        ],
        {
          1: 'Im FKB gehören **alle möglichen** Reaktionen eines Lagers — auch wenn die Rechnung später $A_x = 0$ liefert. Das vorzeitige Weglassen ist eine häufige Fehlerquelle.',
          2: 'Loslager überträgt nur **eine** Reaktion (senkrecht zur Lauffläche), keine Horizontalkomponente. $B_x$ einzutragen wäre eine Überbestimmung.',
          3: 'Eigengewicht ist eine **äußere** Kraft (Gravitation), wirkt im Schwerpunkt und gehört unbedingt ins FKB.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['fkb'] },
      ),
      mc(
        'Eine 50-kg-Last hängt frei an einem vertikalen Seil ($g = 9{,}81\\,\\text{m/s}^2$). Beim Aufbau des FKB der Last vergisst ein Studierender die Seilkraft. Welche Konsequenz hat das?',
        [
          'Das Gleichgewicht $\\sum F_y = 0$ liefert nur noch $-G = 0 \\Rightarrow G = 0$ — die Last erscheint rechnerisch gewichtslos.',
          'Das Momentengleichgewicht ist betroffen, $\\sum F_y$ stimmt aber weiterhin.',
          'Das Vorzeichen der Gewichtskraft kehrt sich automatisch um, das Endergebnis bleibt korrekt.',
          'Der Fehler bemerkt sich erst bei der Schnittkraftberechnung, nicht beim FKB.',
        ],
        0,
        `**Ansatz:** Korrektes FKB: Gewichtskraft $G = m\\cdot g \\downarrow$ und Seilkraft $S \\uparrow$. Gleichgewicht: $S - G = 0 \\Rightarrow S = G = 50\\cdot 9{,}81 = 490{,}5\\,\\text{N}$.

**Rechnung:** Ohne Seilkraft im FKB bleibt nur $-G$ übrig. $\\sum F_y = -G = 0 \\Rightarrow G = 0$ — physikalisch unsinnig.

**Probe:** Eine fehlende Lager- oder Bindungskraft macht das Gleichgewicht **strukturell** falsch — kein nachträglicher Plausibilitätscheck rettet das.

**Typischer Fehler:** Bindungs-/Seilkräfte vergessen, weil sie "nicht offensichtlich am Körper angreifen". Jede gedachte Schnitt- oder Kontaktstelle ist eine **Quelle einer Reaktionskraft**.`,
        [
          'Korrektes FKB: $G \\downarrow$ und $S \\uparrow$.',
          'Was passiert mit $\\sum F_y$, wenn $S$ fehlt?',
          '$-G = 0 \\Rightarrow G = 0$ — Widerspruch.',
        ],
        {
          1: 'Der Fehler tritt bei der Translation auf, nicht erst beim Moment. $\\sum F_y$ ist unmittelbar betroffen.',
          2: 'Es findet keine "automatische" Vorzeichenkorrektur statt. Eine fehlende Kraft hinterlässt ein strukturelles Loch.',
          3: 'Falsch — der Fehler manifestiert sich sofort beim Aufstellen der Gleichgewichtsgleichung, nicht später.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['fkb'] },
      ),
      matching(
        'Wie viele Kräfte/Momente werden im FKB jeder Situation eingetragen? (Eigengewicht jeweils mitzählen.)',
        [
          { left: 'Klotz in Ruhe auf horizontalem, glattem Boden', right: '2: $G$ und Normalkraft $N$' },
          { left: 'Klotz gleitet auf rauer schiefer Ebene', right: '3: $G$, $N$, Reibkraft $F_R$' },
          { left: 'Balken auf Festlager A + Loslager B mit Eigengewicht', right: '4: $G$, $A_x$, $A_y$, $B_y$' },
          { left: 'Eingespannter Kragträger mit Endlast $F$', right: '5: $G$, $F$, $A_x$, $A_y$, $M_A$' },
        ],
        `**Ansatz:** Anzahl Kräfte = Eigengewicht + eingeprägte Lasten + Lagerreaktionen passend zum Lagertyp.

**Rechnung:** (1) Klotz auf glattem Boden: $G \\downarrow$ + $N \\uparrow$ = 2. (2) Mit Reibung: zusätzliche $F_R$ parallel zur Ebene = 3. (3) Festlager (2) + Loslager (1) + $G$ = 4. (4) Einspannung (3: $A_x, A_y, M_A$) + $G$ + Endlast $F$ = 5.

**Probe:** Anzahl unbekannte Reaktionen darf 3 nicht überschreiten (sonst statisch unbestimmt). Festlager+Loslager: 2+1 = 3 ✓. Einspannung allein: 3 ✓ (Last $F$ und $G$ sind bekannt, keine Unbekannten).

**Typischer Fehler:** Eigengewicht vergessen oder Lagerreaktionen falsch zählen — beides macht das FKB unvollständig.`,
        [
          'Pro Lager Reaktionsgrößen abzählen.',
          'Eigengewicht zählt als Einzelkraft im Schwerpunkt.',
          'Reibkraft nur, wenn die Oberfläche rau ist.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['fkb'] },
      ),
      sorting(
        'Bringe die Schritte zum systematischen Aufbau eines FKB in die richtige Reihenfolge.',
        [
          'Bauteil gedanklich aus dem System freischneiden',
          'Koordinatensystem und positive Zählrichtungen festlegen',
          'Eigengewicht $G$ im Schwerpunkt eintragen (falls nicht zu vernachlässigen)',
          'Lagerreaktionen passend zum Lagertyp eintragen (Fest-/Loslager/Einspannung)',
          'Externe Lasten und Kontaktkräfte ergänzen (Punktlasten, Streckenlasten, Seilkräfte)',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Konsequente Reihenfolge verhindert, dass Kräfte vergessen werden.

**Rechnung:** Erst freischneiden — dann Koordinatensystem (festlegt Vorzeichenkonvention) — dann Eigengewicht (immer da) — dann Lagerreaktionen (an jeder geschnittenen Lagerstelle) — schließlich eingeprägte Lasten.

**Probe:** Wer dieselbe Reihenfolge konsequent anwendet, hat keine Lücken im FKB.

**Typischer Fehler:** Mit den eingeprägten Lasten anfangen und am Ende die Lagerreaktionen vergessen — gerade die unbekannten Reaktionen sind aber das Ziel der ganzen Übung.`,
        [
          'Erst freischneiden, dann Pfeile setzen.',
          'Koordinatensystem ZUERST — sonst sind Vorzeichen unklar.',
          'Lagerreaktionen kommen vor den eingeprägten Lasten.',
        ],
        { stage: 'apply-guided', subGoal: 0, uses: ['fkb'] },
      ),
    ],

    // ── [1] Kraft = Vektor (Betrag + Richtung) ─────────────────────────
    1: [
      tf(
        'Eine Kraft ist vollständig durch ihren Betrag beschrieben — Richtung und Angriffspunkt sind nur Zusatzinformationen.',
        false,
        `**Ansatz:** Kraft ist ein **Vektor** — Betrag UND Richtung gehören zur vollständigen Beschreibung. Der Angriffspunkt entscheidet zusätzlich über die **Momentenwirkung**.

**Rechnung:** Zwei Kräfte mit gleichem Betrag aber entgegengesetzter Richtung haben völlig unterschiedliche Wirkung: gleiche Linie, gleicher Angriffspunkt → Aufhebung. Senkrecht zueinander → Resultierende über Pythagoras.

**Probe:** $\\vec F = F\\cdot\\hat e$ mit Betrag $F$ und Einheitsvektor $\\hat e$. Beides ist Pflicht.

**Typischer Fehler:** Kraft wie eine skalare Größe (Masse, Temperatur) behandeln. In der Statik führt das sofort zu falschen Gleichgewichtsbilanzen.`,
        [
          'Vektor = Betrag + Richtung.',
          'Zwei Kräfte mit gleichem Betrag, anderer Richtung — gleiche Wirkung?',
          '$\\vec F = F\\cdot\\hat e$ — beides nötig.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['kraft-vektor'] },
      ),
      mc(
        'Eine Kraft mit Betrag $F = 100\\,\\text{N}$ wirkt unter $30°$ über der Horizontalen (gegen den Uhrzeiger). Wie groß sind die Komponenten $F_x$ und $F_y$?',
        [
          '$F_x = 100\\,\\text{N}, F_y = 0$ — die Kraft ist horizontal.',
          '$F_x \\approx 86{,}6\\,\\text{N}, F_y = 50\\,\\text{N}$',
          '$F_x = 50\\,\\text{N}, F_y \\approx 86{,}6\\,\\text{N}$',
          '$F_x \\approx 86{,}6\\,\\text{N}, F_y \\approx -50\\,\\text{N}$',
        ],
        1,
        `**Ansatz:** Standard-Zerlegung relativ zur $x$-Achse: $F_x = F\\cos\\alpha$, $F_y = F\\sin\\alpha$. Winkel oberhalb der $x$-Achse (gegen Uhrzeiger) ⇒ $F_y > 0$.

**Rechnung:** $F_x = 100\\cdot\\cos 30° = 100\\cdot\\frac{\\sqrt{3}}{2} \\approx 86{,}6\\,\\text{N}$. $F_y = 100\\cdot\\sin 30° = 100\\cdot 0{,}5 = 50\\,\\text{N}$.

**Probe:** $\\sqrt{F_x^2 + F_y^2} = \\sqrt{86{,}6^2 + 50^2} = \\sqrt{7500 + 2500} = \\sqrt{10000} = 100\\,\\text{N}$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen. Merkregel: $\\cos$ ist auf der **An**liegenden Seite (zur Bezugsachse), $\\sin$ auf der **Gegen**überliegenden.`,
        [
          'Komponenten relativ zur x-Achse: $\\cos$ für x, $\\sin$ für y.',
          '$\\cos 30° \\approx 0{,}866$, $\\sin 30° = 0{,}5$.',
          'Probe via Pythagoras: Beträge wieder zur Resultierenden zusammensetzen.',
        ],
        {
          0: 'Falsch — bei $30°$ über der Horizontalen ist $F_y \\neq 0$. Die Kraft hat eine deutliche Vertikalkomponente.',
          2: '$\\sin$ und $\\cos$ vertauscht: $F_x = F\\cos\\alpha$ (anliegend), $F_y = F\\sin\\alpha$ (gegenüberliegend), nicht andersrum.',
          3: 'Falsches Vorzeichen: Winkel **über** der $x$-Achse ⇒ $F_y$ positiv. Negativ wäre die Kraft unterhalb (nach unten gerichtet).',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['kraft-vektor'] },
      ),
      mc(
        'Eine Kraft $F = 200\\,\\text{N}$ wirkt unter $60°$ **unterhalb** der Horizontalen (also schräg nach unten-rechts). Studierender setzt $F_x = 200\\sin 60°$ und $F_y = 200\\cos 60°$ ein. Was ist falsch?',
        [
          '$\\sin$ und $\\cos$ sind vertauscht — Standard ist $F_x = F\\cos\\alpha, F_y = F\\sin\\alpha$ relativ zur $x$-Achse. Außerdem fehlt das Minuszeichen vor $F_y$, weil die Kraft **nach unten** zeigt.',
          'Der Winkel $60°$ muss zuerst in Bogenmaß umgerechnet werden — sonst funktionieren die Winkelfunktionen nicht.',
          'Der Fehler ist nur kosmetisch — beide Komponenten haben numerisch denselben Betrag, weil $\\sin 60° = \\cos 60°$.',
          'Es gibt keinen Fehler: $\\sin$ und $\\cos$ sind in der Statik austauschbar.',
        ],
        0,
        `**Ansatz:** Korrekte Zerlegung: $F_x = F\\cos\\alpha = 200\\cos 60° = 100\\,\\text{N}$. $F_y = -F\\sin\\alpha = -200\\sin 60° \\approx -173{,}2\\,\\text{N}$ (Minus, weil unterhalb der $x$-Achse).

**Rechnung:** Mit der falschen Formel: $F_x = 200\\sin 60° \\approx 173{,}2$ (zu groß), $F_y = 200\\cos 60° = 100$ (Vorzeichen falsch und Wert vertauscht). Die Resultante hätte trotzdem Betrag 200 — aber Komponenten und Vorzeichen sind völlig falsch.

**Probe:** Bei $\\alpha = 60°$ unterhalb der $x$-Achse zeigt $\\vec F$ in Richtung $(\\cos 60°, -\\sin 60°) = (0{,}5,\\ -0{,}866)$. Komponenten: $F_x = +100$, $F_y \\approx -173{,}2$.

**Typischer Fehler:** Mit dem Komplement-Winkel ($30°$ zur $y$-Achse) rechnen, ohne die Konvention zu klären — das vertauscht $\\sin$ und $\\cos$. Außerdem Richtung "unterhalb" beim $F_y$-Vorzeichen verschwiegen.`,
        [
          '$F_x = F\\cos\\alpha$, $F_y = F\\sin\\alpha$ — relativ zur $x$-Achse.',
          'Unterhalb der $x$-Achse: $F_y < 0$.',
          'Bei $60°$ ist $\\cos 60° = 0{,}5$, $\\sin 60° \\approx 0{,}866$ — ungleich.',
        ],
        {
          1: 'Bogenmaß ist nur für analytische Ableitungen Pflicht. Taschenrechner und Winkelfunktionen verarbeiten Grad direkt — daran liegt es nicht.',
          2: '$\\sin 60°$ und $\\cos 60°$ sind **nicht** gleich: $\\sin 60° \\approx 0{,}866$, $\\cos 60° = 0{,}5$. Verwechslung ändert die Werte massiv.',
          3: 'Falsch — $\\sin$ und $\\cos$ sind **nicht** austauschbar. Die Konvention $F_x = F\\cos\\alpha$ ist eindeutig.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['kraft-vektor'] },
      ),
      ni(
        'Drei Kräfte greifen am gleichen Punkt an: $\\vec F_1 = (40\\ |\\ 30)\\,\\text{N}$, $\\vec F_2 = (-20\\ |\\ 15)\\,\\text{N}$, $\\vec F_3 = (10\\ |\\ -25)\\,\\text{N}$. Wie groß ist der Betrag der Resultierenden $\\vec R$ in Newton (auf 2 Nachkommastellen)?',
        36.06, 0.1, 'N',
        `**Ansatz:** Komponentenweise addieren, dann Pythagoras.

**Rechnung:** $R_x = 40 + (-20) + 10 = 30\\,\\text{N}$. $R_y = 30 + 15 + (-25) = 20\\,\\text{N}$. $|R| = \\sqrt{30^2 + 20^2} = \\sqrt{900 + 400} = \\sqrt{1300} \\approx 36{,}06\\,\\text{N}$.

**Probe:** $\\sqrt{1300} = 10\\sqrt{13}$, $\\sqrt{13} \\approx 3{,}606$ ⇒ $|R| \\approx 36{,}06\\,\\text{N}$ ✓.

**Typischer Fehler:** Beträge der Einzelkräfte einfach addieren ($\\sqrt{40^2+30^2} + \\sqrt{20^2+15^2} + \\sqrt{10^2+25^2} = 50 + 25 + 26{,}9 \\approx 101{,}9$) — ist falsch, weil Vektor- nicht Skalaraddition.`,
        [
          'Erst Komponenten getrennt summieren.',
          '$R_x$ und $R_y$ einzeln berechnen.',
          'Dann Pythagoras: $|R| = \\sqrt{R_x^2 + R_y^2}$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['kraft-vektor'] },
      ),
      ni(
        'Eine Kraft hat in der Ebene die Komponenten $F_x = 60\\,\\text{N}$ und $F_y = 80\\,\\text{N}$. Wie groß ist ihr Betrag (in N)?',
        100, 0.5, 'N',
        `**Ansatz:** Pythagoras: $|F| = \\sqrt{F_x^2 + F_y^2}$.

**Rechnung:** $|F| = \\sqrt{60^2 + 80^2} = \\sqrt{3600 + 6400} = \\sqrt{10000} = 100\\,\\text{N}$.

**Probe:** Klassisches 3-4-5-Pythagoras-Tripel, hier um Faktor 20 skaliert: $60 = 3\\cdot 20$, $80 = 4\\cdot 20$, $100 = 5\\cdot 20$ ✓.

**Typischer Fehler:** $|F| = F_x + F_y = 140\\,\\text{N}$ (lineare Addition). Das wäre nur korrekt, wenn beide Komponenten in dieselbe Richtung zeigten — bei senkrechtem Stand quadratisch.`,
        [
          'Pythagoras im rechtwinkligen Dreieck.',
          '$\\sqrt{F_x^2 + F_y^2}$.',
          '$60$ und $80$ → $\\sqrt{10000} = 100$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['kraft-vektor'] },
      ),
    ],

    // ── [2] Lagersymbole — Festlager / Loslager / Einspannung ─────────
    2: [
      tf(
        'Ein Loslager (Rollenlager) überträgt in 2D **eine** Reaktionskraft, ein Festlager **zwei** Reaktionskräfte und eine Einspannung **drei** Reaktionsgrößen.',
        true,
        `**Ansatz:** Anzahl Reaktionen = Anzahl gehemmte Freiheitsgrade. Ein Starrkörper in 2D hat 3 FG (2× Translation, 1× Rotation).

**Rechnung:** Loslager hemmt 1 FG (verhindert Eindringen senkrecht zur Lauffläche): 1 Reaktion. Festlager hemmt 2 (beide Translationen): 2 Reaktionen ($A_x, A_y$). Einspannung hemmt 3 (alles): 2 Kräfte + 1 Moment ($A_x, A_y, M_A$).

**Probe:** Festlager + Loslager = 2 + 1 = 3 Reaktionen = 3 Gleichgewichtsbedingungen ⇒ statisch bestimmt.

**Typischer Fehler:** Loslager mit 2 Reaktionen ansetzen — dann ist das Tragwerk statisch unbestimmt (4 Unbekannte, 3 Gleichungen). Andersrum: Einspannung mit nur 2 Reaktionen — dann fehlt das Einspannmoment.`,
        [
          '2D-Starrkörper: 3 Freiheitsgrade.',
          'Reaktionen = gehemmte Freiheitsgrade.',
          'Loslager 1, Festlager 2, Einspannung 3.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['lagersymbole'] },
      ),
      mc(
        'Ein Balken ist in 2D links durch eine **Einspannung** (Mauer) befestigt und rechts frei (Kragträger). Wie viele unbekannte Auflagerreaktionen treten an der Einspannung auf?',
        ['1', '2', '3', '4'],
        2,
        `**Ansatz:** Eine 2D-Einspannung hemmt alle 3 Freiheitsgrade des Starrkörpers: zwei Translationen + eine Rotation.

**Rechnung:** $A_x$ (horizontale Translation), $A_y$ (vertikale Translation), $M_A$ (Rotation um $A$). Macht 3 unbekannte Reaktionsgrößen.

**Probe:** Statisch bestimmt? Kragträger hat 3 Unbekannte und 3 Gleichgewichtsgleichungen ⇒ ja, immer eindeutig lösbar.

**Typischer Fehler:** Das Einspannmoment $M_A$ vergessen — typisch bei Studierenden, die "Lager" nur mit Kraftsymbolen verbinden. Eine Einspannung blockiert auch die Rotation.`,
        [
          'Einspannung verhindert auch Rotation.',
          'Wie viele Freiheitsgrade hat ein 2D-Starrkörper?',
          '$A_x + A_y + M_A$ = 3 Reaktionen.',
        ],
        {
          0: 'Zu wenig — eine Einspannung ist deutlich starrer als ein Loslager (1 Reaktion).',
          1: 'Zwei Reaktionen entspricht einem Festlager (gelenkig). Bei einer Einspannung kommt das Einspannmoment hinzu.',
          3: 'Zu viele — in 2D gibt es nur 3 Freiheitsgrade, mehr als 3 Reaktionen wären überbestimmt.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['lagersymbole'] },
      ),
      mc(
        'Ein 2D-Träger hat ein **Festlager A** (links) und ein **Loslager B** (rechts). Wie viele unbekannte Auflagerreaktionen sind insgesamt aufzustellen — und ist das Tragwerk statisch bestimmt?',
        [
          '2 Unbekannte — statisch unterbestimmt.',
          '3 Unbekannte ($A_x, A_y, B_y$) — statisch bestimmt (3 Gleichungen, 3 Unbekannte).',
          '4 Unbekannte — statisch unbestimmt vom Grad 1.',
          '5 Unbekannte — statisch unbestimmt vom Grad 2.',
        ],
        1,
        `**Ansatz:** Festlager: 2 Reaktionen ($A_x, A_y$). Loslager: 1 Reaktion ($B_y$). Summe = 3 Unbekannte. 2D-Gleichgewicht stellt 3 Gleichungen ($\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M = 0$) bereit.

**Rechnung:** $n_\\text{unbek} = 3$, $n_\\text{Gl} = 3$ ⇒ Differenz 0 ⇒ statisch bestimmt.

**Probe:** Klassisches Beispiel "Einfeldträger". Genau 3 Unbekannte sind die Voraussetzung dafür, dass die Aufgabe ohne zusätzliche Kompatibilitätsbedingungen lösbar ist.

**Typischer Fehler:** Loslager mit 2 Reaktionen ansetzen ⇒ 4 Unbekannte ⇒ statisch unbestimmt. Oder Festlager mit 1 Reaktion ⇒ 2 Unbekannte ⇒ unterbestimmt (System bewegt sich).`,
        [
          'Festlager: 2 Reaktionen.',
          'Loslager: 1 Reaktion.',
          '2D-Gleichgewicht: 3 Gleichungen.',
        ],
        {
          0: '2 Reaktionen wäre nur Festlager allein — dann wäre der Balken nicht in der Ebene fixiert (kann sich drehen).',
          2: '4 Unbekannte entstünde, wenn das Loslager fälschlich als Festlager (2 Reaktionen) angesetzt wird.',
          3: '5 Unbekannte hieße zwei Festlager + eine zusätzliche Bindung — kommt bei Einfeldträgern nicht vor.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['lagersymbole'] },
      ),
      mc(
        'Ein 2D-Balken ist beidseitig fest **eingespannt** (z. B. links und rechts in Beton vergossen). Studentin setzt insgesamt 4 Auflagerreaktionen an (2 pro Einspannung). Was ist der Fehler?',
        [
          'Pro 2D-Einspannung sind es **3** Reaktionen ($A_x, A_y, M_A$). Insgesamt also $6$ Unbekannte. Mit nur 3 Gleichgewichtsbedingungen ist das System **3-fach statisch unbestimmt** — mit Statik allein nicht lösbar.',
          'Es sind genau 4 — das Einspannmoment fließt nicht in die Auflagerreaktion ein.',
          'Es sind 5 — die zweite Einspannung benötigt nur 2 Reaktionen.',
          'Die Anzahl ist egal, solange $\\sum F = 0$ aufgestellt wird.',
        ],
        0,
        `**Ansatz:** Eine Einspannung hemmt 3 Freiheitsgrade ⇒ 3 Reaktionen pro Lager. Zwei Einspannungen ⇒ $2\\cdot 3 = 6$ Reaktionen.

**Rechnung:** $n_\\text{unbek} = 6$, $n_\\text{Gl} = 3$ ⇒ Differenz $+3$ ⇒ 3-fach statisch unbestimmt. Lösbar nur mit zusätzlichen Verformungsbedingungen (Festigkeitslehre).

**Probe:** Beidseitig eingespannte Balken sind klassische Aufgaben der Festigkeitslehre — in der reinen Statik (nur Gleichgewicht) tatsächlich nicht lösbar.

**Typischer Fehler:** Das Einspannmoment $M_A$ als "weiches" Reaktionselement übersehen und nur die Kraft-Komponenten zählen.`,
        [
          'Pro Einspannung: 3 Reaktionen, nicht 2.',
          'Beide Einspannungen zusammen: $2\\cdot 3 = 6$.',
          '6 Unbekannte vs. 3 Gleichungen ⇒ statisch unbestimmt.',
        ],
        {
          1: 'Falsch — das Einspannmoment ist eine vollwertige Reaktionsgröße. Pro 2D-Einspannung gibt es 3, nicht 2.',
          2: 'Beide Einspannungen sind gleichwertig: jeweils 3 Reaktionen ⇒ insgesamt 6.',
          3: 'Die Anzahl entscheidet, ob das System statisch bestimmt, unter- oder überbestimmt ist — unverzichtbar für die Lösbarkeit.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['lagersymbole'] },
      ),
      matching(
        'Ordne jedem Lagertyp die Anzahl bzw. Art der unbekannten Reaktionsgrößen in 2D zu.',
        [
          { left: 'Loslager (Rolle, verschieblich)', right: '1 Reaktion senkrecht zur Lauffläche' },
          { left: 'Festlager (gelenkig, Pendelstütze)', right: '2 Reaktionen ($A_x, A_y$)' },
          { left: 'Einspannung (eingemauert)', right: '3 Reaktionen ($A_x, A_y, M_A$)' },
          { left: 'Pendelstab (gelenkig beidseitig, biegestarr)', right: '1 Reaktion entlang der Stabachse' },
        ],
        `**Ansatz:** Für jeden Lagertyp die gehemmten Freiheitsgrade auflisten — jeder gehemmte FG = eine Reaktionsgröße.

**Rechnung:** Loslager: senkrecht zur Lauffläche (1). Festlager: beide Translationen (2). Einspannung: alles (3). Pendelstab: nur Längskraft (1, aber **entlang der Achse** — nicht senkrecht!).

**Probe:** Pendelstab und Loslager liefern beide 1 Reaktion — aber mit unterschiedlicher Richtung. Diese Unterscheidung ist klausurkritisch.

**Typischer Fehler:** Pendelstab mit Loslager verwechseln und seine Reaktion senkrecht zur Stabachse ansetzen — dann steht das Gleichgewicht falsch.`,
        [
          'Reaktionen = gehemmte Freiheitsgrade.',
          'Pendelstab überträgt nur Kräfte entlang der Stabachse.',
          'Loslager-Reaktion: senkrecht zur Lauffläche.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['lagersymbole'] },
      ),
    ],

    // ── [3] 2D-Gleichgewicht $\\sum F_x = \\sum F_y = \\sum M = 0$ ──────
    3: [
      mc(
        'Ein masseloser Balken ($L = 4\\,\\text{m}$) liegt auf Festlager A (links) und Loslager B (rechts). In der **Mitte** greift eine vertikale Last $F = 1000\\,\\text{N}$ nach unten an. Bestimme $A_y$ und $B_y$.',
        [
          '$A_y = 500\\,\\text{N}, B_y = 500\\,\\text{N}$',
          '$A_y = 1000\\,\\text{N}, B_y = 0$',
          '$A_y = 250\\,\\text{N}, B_y = 750\\,\\text{N}$',
          '$A_y = 1000\\,\\text{N}, B_y = 1000\\,\\text{N}$',
        ],
        0,
        `**Ansatz:** Drei Gleichgewichtsbedingungen aufstellen. Bei symmetrischer Mittellast erwartet man Symmetrie der Reaktionen — Probe via $\\sum M = 0$.

**Rechnung:** $\\sum M_A = 0$: $-F\\cdot \\frac{L}{2} + B_y\\cdot L = 0 \\Rightarrow B_y = \\frac{F}{2} = 500\\,\\text{N}$. $\\sum F_y = 0$: $A_y + B_y - F = 0 \\Rightarrow A_y = 1000 - 500 = 500\\,\\text{N}$.

**Probe:** $\\sum M_B = 0$: $A_y\\cdot L - F\\cdot \\frac{L}{2} = 0 \\Rightarrow A_y = F/2 = 500\\,\\text{N}$ ✓. Symmetrie bestätigt.

**Typischer Fehler:** Annehmen, dass das ganze Gewicht auf einem Lager landet, oder die Hebelarme falsch ansetzen (z. B. Gesamtlänge $L$ statt halber Länge $L/2$ für die Mittellast).`,
        [
          'Symmetrische Mittellast → symmetrische Reaktionen.',
          '$\\sum M_A = 0$ um Festlager A → $B_y$ direkt.',
          'Dann $\\sum F_y = 0$ liefert $A_y$.',
        ],
        {
          1: 'Das ganze Gewicht auf ein Lager wäre nur korrekt, wenn die Last direkt **über** dem Lager A angreifen würde.',
          2: 'Falscher Hebelarm: Mittellast greift bei $L/2$ an, nicht bei $L/4$ oder $3L/4$.',
          3: 'Doppelzählung — Summe der Reaktionen muss gleich Last sein ($A_y + B_y = F = 1000$).',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['gleichgew-2d'] },
      ),
      ni(
        'Ein einseitig (links) eingespannter Kragträger der Länge $L = 2\\,\\text{m}$ trägt am freien Ende eine vertikale Last $F = 500\\,\\text{N}$ nach unten. Wie groß ist das **Einspannmoment** $M_A$ (in N·m)?',
        1000, 1, 'N·m',
        `**Ansatz:** Momentengleichgewicht um den Einspannpunkt $A$. Die Last $F$ erzeugt am Hebelarm $L$ ein Drehmoment, das durch $M_A$ kompensiert werden muss.

**Rechnung:** $\\sum M_A = 0$: $-F\\cdot L + M_A = 0 \\Rightarrow M_A = F\\cdot L = 500\\cdot 2 = 1000\\,\\text{N\\cdot m}$.

**Probe:** Einheitencheck: $\\text{N}\\cdot\\text{m}$ ✓. Plausibilität: Größeres $F$ oder größeres $L$ erhöht $M_A$ linear — passt.

**Typischer Fehler:** Hebelarm nur halb ansetzen ($L/2$ statt $L$) — das gilt nur, wenn die Last in der Mitte angreift, nicht am Ende. Oder Vorzeichen verwechseln und $M_A$ negativ ansetzen.`,
        [
          'Momentensumme um den Einspannpunkt.',
          '$M_A = F\\cdot L$ (Punktlast am Endpunkt).',
          '$500\\cdot 2 = 1000$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['gleichgew-2d'] },
      ),
      mc(
        'Ein 2D-Balken ist **links** auf einem Festlager $A$ gelagert und **rechts** in eine Wand eingespannt ($B$). Studentin setzt $2 + 3 = 5$ unbekannte Reaktionen an. Wie viele Gleichgewichtsbedingungen gibt es in 2D — und was bedeutet das?',
        [
          '3 Bedingungen ($\\sum F_x, \\sum F_y, \\sum M$). Mit 5 Unbekannten ist das System **2-fach statisch unbestimmt** und ohne Verformungsbetrachtung nicht lösbar.',
          '5 Bedingungen — das System ist statisch bestimmt.',
          '6 Bedingungen, weil pro Lager eine Bedingung.',
          '2 Bedingungen — Momentengleichgewicht gilt nur in 3D.',
        ],
        0,
        `**Ansatz:** In 2D gibt es 3 Freiheitsgrade ⇒ 3 unabhängige Gleichgewichtsbedingungen. Vergleich mit Anzahl Unbekannter entscheidet über statische Bestimmtheit.

**Rechnung:** $n_\\text{Gl} = 3$, $n_\\text{unbek} = 5$ ⇒ Differenz $5 - 3 = 2$ ⇒ 2-fach statisch unbestimmt. Klassische Festigkeitslehre-Aufgabe.

**Probe:** Gegenprobe Festlager + Loslager: $2 + 1 = 3 = n_\\text{Gl}$ ⇒ statisch bestimmt. Festlager + Einspannung übersteigt das.

**Typischer Fehler:** Glauben, "mehr Lager = stabiler = besser". Aus Statik-Sicht ist überbestimmt **nicht** lösbar (mit reinen Gleichgewichtsbedingungen).`,
        [
          '2D: $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M = 0$.',
          '3 Gleichungen vs. 5 Unbekannte.',
          'Differenz = Grad der statischen Unbestimmtheit.',
        ],
        {
          1: 'Anzahl der Gleichgewichtsbedingungen ist eine Eigenschaft des **Raums** (2D ⇒ 3, 3D ⇒ 6), nicht der Anzahl der Lager.',
          2: 'Pro Lager gibt es **Reaktionen**, keine zusätzlichen Gleichgewichtsbedingungen. Bedingungen kommen aus Newton 1.',
          3: 'Momentengleichgewicht gilt auch in 2D — sogar einfacher, weil nur eine skalare Gleichung statt drei Komponenten.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['gleichgew-2d'] },
      ),
      ni(
        'Ein masseloser Balken ($L = 6\\,\\text{m}$, Festlager A links bei $x = 0$, Loslager B rechts bei $x = L$) trägt eine Punktlast $F_1 = 800\\,\\text{N}$ bei $x_1 = 2\\,\\text{m}$ und $F_2 = 1200\\,\\text{N}$ bei $x_2 = 5\\,\\text{m}$ (beide vertikal nach unten). Berechne die Vertikalreaktion $B_y$ am Loslager (auf 2 Nachkommastellen, in N).',
        1266.67, 1, 'N',
        `**Ansatz:** Momentengleichgewicht um $A$ (eliminiert die unbekannten $A_x, A_y$): $\\sum M_A = 0$.

**Rechnung:** $-F_1\\cdot x_1 - F_2\\cdot x_2 + B_y\\cdot L = 0$. $B_y = \\dfrac{F_1\\cdot x_1 + F_2\\cdot x_2}{L} = \\dfrac{800\\cdot 2 + 1200\\cdot 5}{6} = \\dfrac{1600 + 6000}{6} = \\dfrac{7600}{6} \\approx 1266{,}67\\,\\text{N}$.

**Probe:** $\\sum F_y = 0 \\Rightarrow A_y = F_1 + F_2 - B_y = 800 + 1200 - 1266{,}67 = 733{,}33\\,\\text{N}$. $\\sum M_B = 0$ als Cross-Check: $A_y\\cdot L - F_1\\cdot(L - x_1) - F_2\\cdot(L - x_2) = 733{,}33\\cdot 6 - 800\\cdot 4 - 1200\\cdot 1 = 4400 - 3200 - 1200 = 0$ ✓.

**Typischer Fehler:** Hebelarme von rechts statt von links messen und dabei nicht spiegelverkehrt umrechnen — gibt einen Faktor-Fehler. Oder das Vorzeichen der Lasten vergessen ($F_1, F_2$ negativ in $\\sum F_y$).`,
        [
          'Momentensumme um $A$ — eliminiert unbekannte $A_x, A_y$.',
          '$B_y\\cdot L = \\sum F_i\\cdot x_i$ (Lasten nach unten, Hebelarme von $A$).',
          '$(800\\cdot 2 + 1200\\cdot 5)/6 = 7600/6$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['gleichgew-2d'] },
      ),
      tf(
        'Im 2D-Gleichgewicht reichen die zwei Bedingungen $\\sum F_x = 0$ und $\\sum F_y = 0$ aus, um Auflagerreaktionen eindeutig zu bestimmen.',
        false,
        `**Ansatz:** Ein 2D-Starrkörper hat **drei** Freiheitsgrade — zwei Translationen und eine Rotation. Entsprechend braucht es **drei** Gleichgewichtsbedingungen.

**Rechnung:** Ohne $\\sum M = 0$ kann der Drehzustand nicht erfasst werden. Beispiel Balken mit symmetrischer Mittellast: aus $\\sum F_y = 0$ folgt nur $A_y + B_y = F$ — die Aufteilung ist erst über $\\sum M_A = 0$ ermittelbar.

**Probe:** Mathematisch: zwei Gleichungen mit drei Unbekannten ($A_x, A_y, B_y$ z. B.) sind unterbestimmt — eine Lösung gibt es erst mit der dritten Gleichung.

**Typischer Fehler:** Das Momenten-Gleichgewicht weglassen, weil "ich keine Drehung sehe". Auch ein **statischer** Balken erfüllt $\\sum M = 0$ — diese Bedingung ist Voraussetzung für Statik, nicht ein Sonderfall.`,
        [
          '2D-Starrkörper: 3 Freiheitsgrade.',
          '3 unabhängige Gleichgewichtsbedingungen nötig.',
          '$\\sum M = 0$ ist nicht optional.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['gleichgew-2d'] },
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-1-2 — Momente und Hebelarm  (4 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-1-2': {

    // ── [0] Moment $M = F\cdot l_\perp$ — senkrechter Abstand ──────────
    0: [
      tf(
        'Bei einer Kraft, die senkrecht auf einen geraden Hebel wirkt, ist der wirksame Hebelarm gleich der vollen Hebellänge.',
        true,
        `**Ansatz:** $l_\\perp$ ist der **senkrechte** Abstand vom Drehpunkt zur Wirkungslinie der Kraft.

**Rechnung:** Wirkt die Kraft senkrecht zum Hebel, läuft ihre Wirkungslinie senkrecht zur Hebelachse. Der Lotabstand vom Drehpunkt auf diese Wirkungslinie ist exakt die Hebellänge $l$.

**Probe:** Kraft schief unter Winkel $\\alpha$ zur Hebelachse: $l_\\perp = l\\cdot\\sin\\alpha < l$ (außer bei $\\alpha = 90°$).

**Typischer Fehler:** Bei schief angreifender Kraft trotzdem die volle Hebellänge als Hebelarm verwenden — das Moment wird zu groß angesetzt.`,
        [
          '$l_\\perp$ = senkrechter Abstand zum Drehpunkt.',
          'Senkrecht angreifende Kraft → Wirkungslinie ⊥ Hebelachse.',
          'Lotabstand = Hebellänge.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['moment-formel'] },
      ),
      mc(
        'Eine Kraft $F = 50\\,\\text{N}$ wirkt am Ende eines Hebels (Länge $l = 0{,}8\\,\\text{m}$) unter dem Winkel $\\alpha = 60°$ zur Hebelachse. Berechne das Moment um den Drehpunkt.',
        [
          '$M = 50\\cdot 0{,}8 = 40\\,\\text{Nm}$',
          '$M = 50\\cdot 0{,}8\\cdot\\sin 60° \\approx 34{,}6\\,\\text{Nm}$',
          '$M = 50\\cdot 0{,}8\\cdot\\cos 60° = 20\\,\\text{Nm}$',
          '$M = 50\\cdot 0{,}8\\cdot\\tan 60° \\approx 69{,}3\\,\\text{Nm}$',
        ],
        1,
        `**Ansatz:** Bei schiefer Kraft ist der wirksame Hebelarm $l_\\perp = l\\cdot\\sin\\alpha$ ($\\alpha$ = Winkel zwischen Kraftvektor und Hebelachse).

**Rechnung:** $l_\\perp = 0{,}8\\cdot\\sin 60° = 0{,}8\\cdot\\frac{\\sqrt{3}}{2} \\approx 0{,}693\\,\\text{m}$. $M = F\\cdot l_\\perp = 50\\cdot 0{,}693 \\approx 34{,}6\\,\\text{Nm}$.

**Probe:** Alternativ: nur die Komponente der Kraft senkrecht zum Hebel zerlegen — $F_\\perp = F\\sin\\alpha = 50\\sin 60° \\approx 43{,}3\\,\\text{N}$. Dann $M = F_\\perp\\cdot l = 43{,}3\\cdot 0{,}8 \\approx 34{,}6\\,\\text{Nm}$ ✓.

**Typischer Fehler:** Volle Hebellänge ohne $\\sin\\alpha$ ⇒ $40\\,\\text{Nm}$ (zu groß). Oder $\\sin$/$\\cos$ vertauschen ⇒ $20\\,\\text{Nm}$.`,
        [
          'Bei schiefer Kraft: $l_\\perp = l\\sin\\alpha$.',
          '$\\sin 60° \\approx 0{,}866$.',
          '$50\\cdot 0{,}8\\cdot 0{,}866 \\approx 34{,}6$.',
        ],
        {
          0: 'Volle Hebellänge ohne Winkelfaktor — gilt nur, wenn die Kraft senkrecht zum Hebel angreift ($\\alpha = 90°$). Hier $\\alpha = 60°$.',
          2: '$\\sin$ und $\\cos$ vertauscht: für den Winkel zur **Hebelachse** ist $\\sin\\alpha$ der richtige Faktor. $\\cos$ wäre korrekt, wenn $\\alpha$ zur Senkrechten gemessen würde.',
          3: '$\\tan\\alpha$ kommt in der Drehmoment-Formel nicht vor. Hebelarm ist eine reine Längen-Projektion ($\\sin\\alpha$).',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['moment-formel'] },
      ),
      ni(
        'Eine Kraft $F = 200\\,\\text{N}$ wirkt **senkrecht** auf einen Hebel der Länge $l = 0{,}3\\,\\text{m}$. Wie groß ist das Moment um den Drehpunkt am anderen Hebelende (in Nm)?',
        60, 0.1, 'Nm',
        `**Ansatz:** Senkrechte Krafteinleitung ⇒ $l_\\perp = l$.

**Rechnung:** $M = F\\cdot l = 200\\cdot 0{,}3 = 60\\,\\text{Nm}$.

**Probe:** Einheit: $\\text{N}\\cdot\\text{m} = \\text{Nm}$ ✓. Skalierung: bei verdoppelter Hebellänge ($l = 0{,}6$) wäre $M = 120\\,\\text{Nm}$ — linear.

**Typischer Fehler:** Hebelarm in cm einsetzen ($30$) statt in Meter ($0{,}3$) ⇒ $6000$, dann fälschlich als $\\text{Nm}$ bezeichnet (wäre tatsächlich $\\text{N\\cdot cm}$, nicht $\\text{Nm}$).`,
        [
          'Senkrecht angreifend ⇒ Hebelarm = Hebellänge.',
          '$M = F\\cdot l$ direkt.',
          '$200\\cdot 0{,}3 = 60$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['moment-formel'] },
      ),
      mc(
        'An einem Schlüssel der Länge $l = 0{,}25\\,\\text{m}$ wird eine Kraft $F = 40\\,\\text{N}$ unter $\\alpha = 30°$ zur Schlüsselachse aufgebracht. Studierende rechnet $M = F\\cdot l = 40\\cdot 0{,}25 = 10\\,\\text{Nm}$. Wo steckt der Fehler?',
        [
          'Der senkrechte Hebelarm ist $l_\\perp = l\\sin 30° = 0{,}125\\,\\text{m}$, also $M = 40\\cdot 0{,}125 = 5\\,\\text{Nm}$. Bei schiefer Krafteinleitung ist die volle Schlüssellänge nicht der wirksame Hebelarm.',
          'Der Fehler ist die Einheit — es muss $\\text{N\\cdot mm}$ heißen, nicht $\\text{Nm}$.',
          'Kein Fehler — bei kleinen Winkeln kann $\\sin\\alpha \\approx 1$ angenommen werden.',
          'Die Kraft müsste in $\\text{kN}$ umgerechnet werden, sonst ist das Ergebnis um Faktor $1000$ zu klein.',
        ],
        0,
        `**Ansatz:** Hebelarm ist $l_\\perp = l\\sin\\alpha$ — bei $\\alpha = 30°$ also nur die halbe Schlüssellänge.

**Rechnung:** $l_\\perp = 0{,}25\\cdot\\sin 30° = 0{,}25\\cdot 0{,}5 = 0{,}125\\,\\text{m}$. $M = 40\\cdot 0{,}125 = 5\\,\\text{Nm}$.

**Probe:** Für $\\alpha = 90°$ wäre $M = 40\\cdot 0{,}25 = 10\\,\\text{Nm}$ — das wäre dann das gerechnete Ergebnis. Bei $30°$ ist es genau halb so groß.

**Typischer Fehler:** Sin-Faktor weglassen, weil "kleiner Winkel". $30°$ ist nicht klein — $\\sin 30° = 0{,}5$, das halbiert das Moment.`,
        [
          '$l_\\perp = l\\sin\\alpha$, nicht $l$ allein.',
          '$\\sin 30° = 0{,}5$.',
          '$40\\cdot 0{,}25\\cdot 0{,}5 = 5$.',
        ],
        {
          1: 'Die Einheit $\\text{Nm}$ ist korrekt — Fehler liegt im Hebelarm, nicht in der Einheit.',
          2: 'Bei $\\alpha = 30°$ ist $\\sin\\alpha = 0{,}5$ — keinesfalls $\\approx 1$. Die Näherung gilt nur für sehr kleine Winkel ($< 10°$).',
          3: 'Die Krafteinheit Newton stimmt; das Ergebnis ist nicht um Faktor 1000 falsch, sondern um Faktor 2 (durch Sin-Faktor).',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['moment-formel'] },
      ),
      ni(
        'Ein Drehmomentschlüssel mit Hebellänge $l = 0{,}5\\,\\text{m}$ wird verwendet. Beim Anziehen einer Schraube wird die Kraft so aufgebracht, dass sie unter $\\alpha = 80°$ zur Schlüsselachse steht. Welche Kraft $F$ ist nötig, um $M = 200\\,\\text{Nm}$ zu erzeugen (auf 1 Nachkommastelle, in N)?',
        406.2, 0.5, 'N',
        `**Ansatz:** $M = F\\cdot l\\sin\\alpha$ nach $F$ umstellen: $F = M/(l\\sin\\alpha)$.

**Rechnung:** $\\sin 80° \\approx 0{,}9848$. $l\\sin\\alpha = 0{,}5\\cdot 0{,}9848 = 0{,}4924\\,\\text{m}$. $F = 200/0{,}4924 \\approx 406{,}2\\,\\text{N}$.

**Probe:** Gegenrechnung: $M = 406{,}2\\cdot 0{,}5\\cdot 0{,}9848 \\approx 200{,}0\\,\\text{Nm}$ ✓. Vergleich mit senkrechter Krafteinleitung ($\\alpha = 90°$): da wäre $F = 200/0{,}5 = 400\\,\\text{N}$ — bei $80°$ knapp 6 N mehr nötig.

**Typischer Fehler:** $\\sin 80°$ ignorieren und $F = 200/0{,}5 = 400\\,\\text{N}$ ansetzen — unterschätzt die nötige Kraft. Oder $\\cos 80° \\approx 0{,}1736$ verwenden ⇒ $F \\approx 2304\\,\\text{N}$ (massiv zu hoch).`,
        [
          '$M = F\\cdot l\\sin\\alpha$ nach $F$ auflösen.',
          '$\\sin 80° \\approx 0{,}985$.',
          '$200/(0{,}5\\cdot 0{,}985) \\approx 406$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['moment-formel'] },
      ),
    ],

    // ── [1] Drehsinn-Konvention ─────────────────────────────────────────
    1: [
      tf(
        'Im Maschinenbau gilt die Konvention: Drehmomente, die gegen den Uhrzeigersinn wirken, werden positiv gezählt; Drehmomente im Uhrzeigersinn negativ.',
        true,
        `**Ansatz:** Standard-Vorzeichenkonvention der ebenen Statik (rechte-Hand-Regel mit $z$-Achse aus der Zeichenebene heraus).

**Rechnung:** $\\vec M = \\vec r\\times\\vec F$. Bei Aufsicht von $+z$ rotiert ein positiver $z$-Anteil des Moments **gegen** den Uhrzeigersinn — das ist die Konvention "CCW = positiv".

**Probe:** Beispiel: $\\vec r = (1,0,0)$, $\\vec F = (0,1,0)$ ⇒ $\\vec r\\times\\vec F = (0,0,+1)$ — Kraft nach oben am rechten Hebelende dreht CCW = positiv ✓.

**Typischer Fehler:** Beim Bauingenieurwesen gibt es teilweise die umgekehrte Konvention (CW positiv). Innerhalb einer Aufgabe muss man konsequent **eine** Konvention durchhalten — Wechseln führt zu Vorzeichenchaos.`,
        [
          'Konvention: CCW = positiv.',
          'Folgt aus rechter-Hand-Regel mit $+z$ aus der Zeichenebene.',
          'Innerhalb einer Aufgabe konsequent.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['drehsinn'] },
      ),
      mc(
        'Ein horizontaler Balken wird durch zwei Kräfte belastet: links ($x = 0$) wirkt $F_1 = 100\\,\\text{N}$ **nach unten**, rechts ($x = 2\\,\\text{m}$) wirkt $F_2 = 100\\,\\text{N}$ **nach oben**. Welcher Drehsinn entsteht für das resultierende Kräftepaar bezüglich der Balkenmitte (Konvention: CCW = positiv)?',
        [
          'Im Uhrzeigersinn (negativ).',
          'Gegen den Uhrzeigersinn (positiv).',
          'Es entsteht kein Moment, weil sich die Kräfte aufheben.',
          'Drehsinn unbestimmt ohne weiteren Bezugspunkt.',
        ],
        1,
        `**Ansatz:** Beide Momentbeiträge um die Balkenmitte berechnen und vorzeichenrichtig summieren.

**Rechnung:** $\\vec r_1 = (-1,0,0)$ (links), $\\vec F_1 = (0,-100,0)$ (nach unten) ⇒ $r_{1x} F_{1y} - r_{1y} F_{1x} = (-1)(-100) - 0 = +100\\,\\text{Nm}$. $\\vec r_2 = (1,0,0)$ (rechts), $\\vec F_2 = (0,+100,0)$ (nach oben) ⇒ $(1)(100) - 0 = +100\\,\\text{Nm}$. Gesamtmoment $M_\\text{ges} = +200\\,\\text{Nm}$ ⇒ CCW (positiv).

**Probe:** Anschaulich: Linke Seite drückt nach unten, rechte Seite hebt — der Balken rotiert "rechte-Seite-hoch" um die Mitte. Vom Standpunkt $+z$ aus betrachtet ist das CCW.

**Typischer Fehler:** Annahme, dass sich Kräfte mit gleichem Betrag und entgegengesetzten Richtungen aufheben — die **Kräfte** heben sich auf ($\\sum F_y = 0$), die **Momente** addieren sich aber zum Kräftepaar.`,
        [
          'Pro Kraft Moment um Balkenmitte berechnen.',
          'Vorzeichen aus $r\\times F$ (z-Komponente).',
          'Beide Beiträge gleichgerichtet.',
        ],
        {
          0: 'Falsch — die Beiträge beider Kräfte sind beide CCW (positiv). Vorzeichen aus $\\vec r\\times\\vec F$ konsequent ausrechnen.',
          2: 'Die Kraftsumme ist null ($-100 + 100 = 0$), aber das Momentensystem ist nicht null. Das ist genau die Definition eines **Kräftepaars**.',
          3: 'Der Bezugspunkt **ist** angegeben (Balkenmitte). Bei einem reinen Kräftepaar ist das Moment ohnehin unabhängig vom Bezugspunkt — beide Wahlen liefern $+200\\,\\text{Nm}$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['drehsinn'] },
      ),
      mc(
        'An einem T-förmigen Hebel greifen drei Momentbeiträge an: $M_1 = 100\\,\\text{N}\\cdot 0{,}4\\,\\text{m}$ **gegen Uhrzeiger**, $M_2 = 80\\,\\text{N}\\cdot 0{,}5\\,\\text{m}$ **gegen Uhrzeiger**, $M_3 = 200\\,\\text{N}\\cdot 0{,}3\\,\\text{m}$ **im Uhrzeigersinn**. Wie groß ist das **resultierende** Moment (Vorzeichen + Betrag, CCW = positiv)?',
        [
          '$+20\\,\\text{Nm}$',
          '$-20\\,\\text{Nm}$',
          '$+140\\,\\text{Nm}$',
          '$-140\\,\\text{Nm}$',
        ],
        0,
        `**Ansatz:** Jedes Einzelmoment vorzeichenrichtig berechnen (CCW $\\to +$, CW $\\to -$), dann summieren.

**Rechnung:** $M_1 = +100\\cdot 0{,}4 = +40\\,\\text{Nm}$. $M_2 = +80\\cdot 0{,}5 = +40\\,\\text{Nm}$. $M_3 = -200\\cdot 0{,}3 = -60\\,\\text{Nm}$. $M_\\text{res} = 40 + 40 - 60 = +20\\,\\text{Nm}$.

**Probe:** Vorzeichen-Plausibilität: zwei kleinere CCW-Beiträge schlagen knapp den größeren CW-Beitrag — Differenz $+20\\,\\text{Nm}$. Größenordnung passt.

**Typischer Fehler:** Beträge ohne Vorzeichen addieren ⇒ $40 + 40 + 60 = 140\\,\\text{Nm}$, Drehsinn rätselhaft. Oder das CW-Moment positiv mitschleppen.`,
        [
          'CCW positiv, CW negativ.',
          'Beiträge einzeln, dann summieren.',
          '$+40 + 40 - 60 = +20$.',
        ],
        {
          1: 'Vorzeichen falsch — zwei CCW-Beiträge ($+40, +40$) überwiegen das einzelne CW-Moment ($-60$).',
          2: 'Beträge ohne Vorzeichen summiert ($40 + 40 + 60 = 140$). Das CW-Moment muss mit Minus eingehen.',
          3: 'Alle Beiträge als negativ behandelt — die beiden CCW-Momente sind aber positiv.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['drehsinn'] },
      ),
      mc(
        'Ein Studierender berechnet zwei Momente an einem Hebel und schreibt $+30\\,\\text{Nm}$ und $+25\\,\\text{Nm}$. Beide drehen den Hebel **im Uhrzeigersinn** (Konvention: CCW positiv). Was ist falsch?',
        [
          'Beide Momente sind tatsächlich negativ ($-30$ und $-25$); die Summe ist $-55\\,\\text{Nm}$. Vorzeichen wurden bei beiden vergessen.',
          'Die Vorzeichen sind richtig, das Endergebnis ist $+55\\,\\text{Nm}$.',
          'Eines der Momente ist positiv, das andere negativ — sie heben sich teilweise auf.',
          'Bei gleichgerichteten Momenten muss man Beträge subtrahieren statt addieren.',
        ],
        0,
        `**Ansatz:** Konvention: CCW = positiv, CW = negativ. CW-Drehsinn muss als negatives Moment eingetragen werden.

**Rechnung:** Korrekte Werte: $M_1 = -30\\,\\text{Nm}$, $M_2 = -25\\,\\text{Nm}$. Summe: $-55\\,\\text{Nm}$ (insgesamt CW).

**Probe:** Plausibilität: Wenn beide Beiträge CW drehen, muss die Resultierende ebenfalls CW sein — also negativ. Positives Vorzeichen wäre ein Widerspruch.

**Typischer Fehler:** Die Konvention beim Aufschreiben "vergessen" — Beträge ablesen und das Vorzeichen erst am Ende manuell einfügen. Sicherer: bei jedem Moment direkt das passende Vorzeichen aus dem Drehsinn ableiten.`,
        [
          'CW = negativ.',
          'Beide Beiträge CW ⇒ beide negativ.',
          'Summe gleichgerichteter Beiträge: Beträge addieren, Vorzeichen behalten.',
        ],
        {
          1: '$+55\\,\\text{Nm}$ wäre CCW — das widerspricht der Vorgabe "beide drehen CW".',
          2: 'Die Aussage "beide drehen CW" schließt aus, dass eines positiv (CCW) ist. Beide müssen das gleiche Vorzeichen tragen.',
          3: 'Subtraktion ist nur bei **entgegengesetzten** Drehsinnen sinnvoll. Gleichgerichtete Beiträge addieren sich vom Betrag her.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['drehsinn'] },
      ),
      mc(
        'In einem Getriebe rotiert die Antriebswelle gegen den Uhrzeigersinn (positiv). Das **Antriebsmoment** beträgt $M_\\text{an} = +50\\,\\text{Nm}$. Welche Drehrichtung und welchen Betrag muss das **Reaktionsmoment** am Lager haben, damit das Gehäuse nicht mitrotiert?',
        [
          'Im Uhrzeigersinn ($-50\\,\\text{Nm}$), damit $\\sum M = 0$ gilt.',
          'Gegen den Uhrzeigersinn ($+50\\,\\text{Nm}$), damit das Antriebsmoment verstärkt wird.',
          'Gleicher Drehsinn, aber halber Betrag ($+25\\,\\text{Nm}$).',
          'Das Lager überträgt grundsätzlich keine Momente.',
        ],
        0,
        `**Ansatz:** Das Gehäuse befindet sich im statischen Gleichgewicht ⇒ $\\sum M = 0$. Antriebs- und Reaktionsmoment müssen sich gerade aufheben.

**Rechnung:** $M_\\text{an} + M_\\text{lager} = 0 \\Rightarrow M_\\text{lager} = -M_\\text{an} = -50\\,\\text{Nm}$ (Vorzeichen umgekehrt = entgegengesetzter Drehsinn).

**Probe:** Anschaulich: Wenn das Drehmoment den Rotor CCW dreht, müssen die Lager das Gehäuse mit gleichem Betrag CW "festhalten" — sonst würde das Gehäuse selbst zu rotieren beginnen.

**Typischer Fehler:** Reaktionsmoment in dieselbe Richtung ansetzen — verdoppelt das Antriebsmoment statt es zu kompensieren. Klassischer Vorzeichen-Fehler bei Lagerreaktions-Aufgaben.`,
        [
          'Gleichgewicht: $\\sum M = 0$.',
          'Reaktion = $-$(Aktion).',
          'Vorzeichen umgekehrt = anderer Drehsinn, gleicher Betrag.',
        ],
        {
          1: 'Reaktion mit gleichem Vorzeichen würde sich addieren ($+100\\,\\text{Nm}$ gesamt) — das Gehäuse würde rotieren, also kein Gleichgewicht.',
          2: 'Halber Betrag bricht $\\sum M = 0$ — Restmoment bliebe und würde das Gehäuse beschleunigen.',
          3: 'Lager **können** Momente übertragen — bei Einspannungen oder festen Lagerschalen sehr wohl. Bei einem rotierenden Wälzlager wird das Reaktionsmoment auf das Gehäuse übertragen.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['drehsinn'] },
      ),
    ],

    // ── [2] Bezugspunkt frei wählbar — klug wählen ─────────────────────
    2: [
      tf(
        'Bei der Aufstellung der Momentenbedingung in der ebenen Statik kann der Bezugspunkt frei gewählt werden — auch außerhalb des Bauteils.',
        true,
        `**Ansatz:** Im statischen Gleichgewicht gilt $\\sum M = 0$ um **jeden** Punkt der Ebene. Der Bezugspunkt ist eine reine Rechenwahl.

**Rechnung:** Mathematisch folgt das aus der Identität: Verschiebt man den Bezugspunkt um $\\vec d$, ändert sich jedes Einzelmoment um $\\vec d\\times\\vec F_i$. Summiert über alle $i$ gibt $\\vec d\\times\\sum\\vec F_i = \\vec d\\times\\vec 0 = \\vec 0$ (im Gleichgewicht ist die Kraftsumme bereits null).

**Probe:** Klügste Wahl: ein Punkt, durch den möglichst viele unbekannte Kräfte verlaufen — diese fallen aus der Momentenbilanz heraus und es bleiben weniger Unbekannte.

**Typischer Fehler:** Glauben, der Bezugspunkt müsse "physikalisch sinnvoll" oder "auf dem Körper" liegen. Mathematisch ist jeder Punkt erlaubt — Lösungen sind identisch.`,
        [
          'Gleichgewicht: $\\sum M = 0$ um jeden Punkt.',
          'Bezugspunkt-Verschiebung ändert nichts.',
          'Klügste Wahl eliminiert Unbekannte.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['bezugspunkt'] },
      ),
      mc(
        'Ein Balken mit Festlager A (links), Loslager B (rechts) und einer Punktlast $F$ in der Mitte soll auf $A_y$ und $B_y$ gerechnet werden. Welcher Bezugspunkt für die Momentenbilanz führt am schnellsten zu $B_y$?',
        [
          'Festlager A — eliminiert $A_x$ und $A_y$ aus der Momentenbilanz, sodass nur noch $B_y$ und $F$ verbleiben.',
          'Loslager B — eliminiert $B_y$, gibt aber $A_y$ direkt.',
          'Mitte des Balkens (Lastangriffspunkt) — eliminiert $F$, lässt aber $A_y$ und $B_y$ stehen.',
          'Beliebig — Bezugspunkt ist egal, es kommt immer dasselbe heraus.',
        ],
        0,
        `**Ansatz:** Klüge Bezugspunktwahl = Punkt, durch den möglichst viele unbekannte Kräfte verlaufen. Bei Festlager A gehen $A_x, A_y$ direkt durch den Bezugspunkt ⇒ Hebelarm $= 0$ ⇒ keine Beiträge zur Momentenbilanz.

**Rechnung:** $\\sum M_A = 0$: $-F\\cdot\\frac{L}{2} + B_y\\cdot L = 0 \\Rightarrow B_y = F/2$. Eine Gleichung, eine Unbekannte.

**Probe:** Im Gegenzug: Wahl Punkt $B$ liefert $A_y$ direkt — ebenfalls geschickt, aber für $B_y$ nicht optimal.

**Typischer Fehler:** Bezugspunkt am Lastangriff wählen — eliminiert $F$, lässt aber sowohl $A_y$ als auch $B_y$ in der Bilanz stehen, was eine zweite Gleichung erfordert.`,
        [
          'Welche Unbekannten verlaufen durch welchen Punkt?',
          'Punkt durch unbekannte Kraft ⇒ Beitrag = 0.',
          'Festlager A: $A_x, A_y$ haben Hebelarm $0$.',
        ],
        {
          1: 'Korrekt für die Bestimmung von $A_y$, nicht $B_y$. Die Frage zielt explizit auf $B_y$.',
          2: 'Eliminiert $F$, aber beide Lagerreaktionen bleiben stehen — eine Gleichung mit zwei Unbekannten reicht nicht.',
          3: 'Mathematisch korrekt (Lösungen identisch), aber praktisch deutlich aufwendiger — schlechte Wahl bringt gekoppelte Gleichungen.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['bezugspunkt'] },
      ),
      ni(
        'Ein masseloser Balken ($L = 5\\,\\text{m}$) liegt auf Festlager A (links bei $x = 0$) und Loslager B (rechts bei $x = 5\\,\\text{m}$). Eine Punktlast $F = 600\\,\\text{N}$ greift bei $x_F = 4\\,\\text{m}$ vertikal nach unten an. Berechne $A_y$ direkt durch geschickte Wahl des Bezugspunkts (in N).',
        120, 0.5, 'N',
        `**Ansatz:** Um $A_y$ direkt zu erhalten, Bezugspunkt **B** wählen — dann fallen $B_y$ aus der Bilanz heraus.

**Rechnung:** $\\sum M_B = 0$: $-A_y\\cdot L + F\\cdot(L - x_F) = 0$. Einsetzen: $-A_y\\cdot 5 + 600\\cdot 1 = 0 \\Rightarrow A_y = 600/5 = 120\\,\\text{N}$.

**Probe:** Gegenrechnung über $A$: $\\sum M_A = 0$ liefert $B_y\\cdot 5 = 600\\cdot 4 = 2400 \\Rightarrow B_y = 480\\,\\text{N}$. $A_y + B_y = 120 + 480 = 600 = F$ ✓.

**Typischer Fehler:** Hebelarm der Last falsch herum messen ($x_F = 4$ statt $L - x_F = 1$ als Abstand zu B) — das Vorzeichen oder die Größe wird falsch.`,
        [
          'Bezugspunkt B → eliminiert $B_y$.',
          'Hebelarm der Last bzgl. B: $L - x_F = 1\\,\\text{m}$.',
          '$A_y\\cdot 5 = 600\\cdot 1$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['bezugspunkt', 'moment-formel'] },
      ),
      mc(
        'Bei einem Balken (Festlager A links, Loslager B rechts, Last $F$ in der Mitte) berechnet eine Studentin $\\sum M_A = 0$ und kommt auf $B_y = F$. Wo steckt der Fehler?',
        [
          'Sie hat den Hebelarm der Last falsch angesetzt — die Last greift bei $L/2$, nicht bei $L$, was zu $B_y = F/2$ führen muss.',
          'Der Bezugspunkt $A$ war falsch gewählt — er muss bei $B$ liegen.',
          'Die Momentenbilanz benötigt zusätzlich $\\sum F = 0$, sonst ist sie unvollständig.',
          'Symmetrische Lasten haben kein Moment, $B_y = 0$ wäre korrekt.',
        ],
        0,
        `**Ansatz:** Korrekte Momentenbilanz um $A$: $-F\\cdot\\frac{L}{2} + B_y\\cdot L = 0 \\Rightarrow B_y = \\frac{F\\cdot L/2}{L} = F/2$.

**Rechnung:** Wer $B_y = F$ erhält, hat den Hebelarm der Last als $L$ (statt $L/2$) angesetzt: $F\\cdot L = B_y\\cdot L \\Rightarrow B_y = F$ — falscher Hebelarm.

**Probe:** Plausibilität: Bei mittiger Last muss aus Symmetrie $A_y = B_y = F/2$ folgen. Wenn $B_y = F$, wäre $A_y = 0$ — würde bedeuten, dass das Lager A überhaupt nichts trägt, was bei mittiger Last absurd ist.

**Typischer Fehler:** Die Last "in die Berechnung am Ende des Balkens" platzieren statt am tatsächlichen Angriffspunkt $L/2$ — ein simpler Geometrie-Fehler mit großen Folgen.`,
        [
          'Hebelarm der Last ist $L/2$, nicht $L$.',
          '$\\sum M_A = -F\\cdot\\frac{L}{2} + B_y\\cdot L = 0$.',
          'Symmetrie: $A_y = B_y = F/2$.',
        ],
        {
          1: 'Bezugspunkt A ist eine **gute** Wahl, um $B_y$ direkt zu bekommen — der Fehler liegt nicht im Bezugspunkt, sondern im Hebelarm.',
          2: '$\\sum F = 0$ ergänzt das System, ist hier aber nicht das Problem. Die Momentenbilanz allein liefert bei richtigem Hebelarm das korrekte $B_y$.',
          3: '"Symmetrische Lasten haben kein Moment" ist falsch — symmetrische Aufteilung der Reaktionen ist gemeint. Beide Lager tragen $F/2$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['bezugspunkt'] },
      ),
      ni(
        'Ein masseloser Balken auf Festlager A (links bei $x = 0$) und Loslager B (rechts bei $x = 8\\,\\text{m}$) trägt zwei Lasten: $F_1 = 1500\\,\\text{N}$ bei $x_1 = 3\\,\\text{m}$ und $F_2 = 2000\\,\\text{N}$ bei $x_2 = 6\\,\\text{m}$ (beide vertikal nach unten). Berechne $A_y$ über die Momentenbilanz um Bezugspunkt $B$ (in N, auf 1 Nachkommastelle).',
        1437.5, 1, 'N',
        `**Ansatz:** Momentenbilanz um $B$ eliminiert $B_y$. Hebelarme der Lasten = Abstand vom jeweiligen Angriffspunkt zu $B$.

**Rechnung:** $\\sum M_B = 0$: $-A_y\\cdot L + F_1\\cdot(L-x_1) + F_2\\cdot(L-x_2) = 0$. Einsetzen: $-A_y\\cdot 8 + 1500\\cdot 5 + 2000\\cdot 2 = 0$. $A_y\\cdot 8 = 7500 + 4000 = 11500$. $A_y = 11500/8 = 1437{,}5\\,\\text{N}$.

**Probe:** $\\sum F_y = 0$: $A_y + B_y = F_1 + F_2 = 3500 \\Rightarrow B_y = 3500 - 1437{,}5 = 2062{,}5\\,\\text{N}$. Cross-Check $\\sum M_A = 0$: $-1500\\cdot 3 - 2000\\cdot 6 + 2062{,}5\\cdot 8 = -4500 - 12000 + 16500 = 0$ ✓.

**Typischer Fehler:** Hebelarme von links statt rechts messen ($x_1$ statt $L - x_1$) — gibt einen anderen, falschen $A_y$-Wert. Bei Wahl des Bezugspunkts B muss der Abstand **bis B** gemessen werden.`,
        [
          'Bezugspunkt $B$ wählen → $B_y$ fällt heraus.',
          'Hebelarm jeder Last = $L - x_i$.',
          '$A_y\\cdot 8 = 1500\\cdot 5 + 2000\\cdot 2 = 11500$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['bezugspunkt'] },
      ),
    ],

    // ── [3] Kreuzprodukt-Variante $\vec M = \vec r \times \vec F$ ──────
    3: [
      tf(
        'In 3D oder bei schief angreifenden Kräften gilt $\\vec M = \\vec r \\times \\vec F$, wobei $\\vec r$ der Ortsvektor vom Bezugspunkt zum Kraftangriffspunkt ist.',
        true,
        `**Ansatz:** Vektorielle Definition des Drehmoments — verallgemeinert die skalare Formel $M = F\\cdot l_\\perp$ auf 3D und beliebige Vektorrichtungen.

**Rechnung:** Komponentenformel: $\\vec r\\times\\vec F = (r_y F_z - r_z F_y,\\ r_z F_x - r_x F_z,\\ r_x F_y - r_y F_x)$. Der Betrag ist $|\\vec M| = |\\vec r||\\vec F|\\sin\\theta$, wobei $\\theta$ der Winkel zwischen $\\vec r$ und $\\vec F$ ist.

**Probe:** In 2D mit $\\vec r = (l, 0, 0)$ und $\\vec F = (0, F, 0)$ (senkrecht angreifend): $\\vec r\\times\\vec F = (0, 0, lF)$ — Betrag $lF$, exakt das skalare Ergebnis ✓.

**Typischer Fehler:** $\\vec r$ als Vektor vom Kraftangriff zum Bezugspunkt ansetzen (umgekehrt) — vertauscht das Vorzeichen, weil $\\vec r\\times\\vec F = -(\\vec F\\times\\vec r)$.`,
        [
          'Definition: $\\vec M = \\vec r\\times\\vec F$.',
          '$\\vec r$ vom Bezugspunkt zum Kraftangriff.',
          'Reduziert sich in 2D auf $M = F\\cdot l_\\perp$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['m-kreuz'] },
      ),
      mc(
        'Berechne $\\vec r\\times\\vec F$ für $\\vec r = (2,\\ 0,\\ 0)\\,\\text{m}$ und $\\vec F = (0,\\ 5,\\ 0)\\,\\text{N}$.',
        [
          '$(0,\\ 0,\\ 10)\\,\\text{Nm}$',
          '$(10,\\ 0,\\ 0)\\,\\text{Nm}$',
          '$(0,\\ 10,\\ 0)\\,\\text{Nm}$',
          '$(0,\\ 0,\\ -10)\\,\\text{Nm}$',
        ],
        0,
        `**Ansatz:** Komponentenformel $\\vec r\\times\\vec F = (r_y F_z - r_z F_y,\\ r_z F_x - r_x F_z,\\ r_x F_y - r_y F_x)$.

**Rechnung:** $r_y F_z - r_z F_y = 0 - 0 = 0$. $r_z F_x - r_x F_z = 0 - 0 = 0$. $r_x F_y - r_y F_x = 2\\cdot 5 - 0 = 10$. Ergebnis: $(0,\\ 0,\\ 10)\\,\\text{Nm}$.

**Probe:** Beide Vektoren liegen in der $xy$-Ebene — das Moment muss senkrecht dazu (in $z$-Richtung) zeigen. Vorzeichen aus rechte-Hand-Regel: Daumen $\\vec r$ (in $+x$), Zeigefinger $\\vec F$ (in $+y$) ⇒ Mittelfinger zeigt in $+z$ ✓.

**Typischer Fehler:** Komponentenweise multiplizieren ($r_x F_x, r_y F_y, r_z F_z$) — das ist **kein** Kreuzprodukt, sondern eine Hadamard-Produkt-artige Operation. Liefert hier $(0, 0, 0)$.`,
        [
          'Komponentenformel des Kreuzprodukts.',
          'Beide Vektoren in $xy$-Ebene → Moment in $z$.',
          'Rechte-Hand-Regel zur Vorzeichen-Probe.',
        ],
        {
          1: 'Falsche Komponente — Moment senkrecht zu $\\vec r$ und $\\vec F$ stehen, also nicht in $x$-Richtung.',
          2: 'Auch falsche Komponente — Moment muss senkrecht zur Ebene der beiden Vektoren stehen, nicht entlang $\\vec F$.',
          3: 'Vorzeichen falsch — rechte-Hand-Regel: $+x\\times +y = +z$, nicht $-z$. $\\vec F\\times\\vec r$ würde $-z$ ergeben.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['m-kreuz'] },
      ),
      ni(
        'Eine Kraft $\\vec F = (0,\\ 0,\\ 100)\\,\\text{N}$ greift am Punkt $\\vec r = (3,\\ 4,\\ 0)\\,\\text{m}$ relativ zum Bezugspunkt an. Welchen Betrag $|\\vec M|$ hat das Moment um den Bezugspunkt (in Nm)?',
        500, 1, 'Nm',
        `**Ansatz:** $\\vec M = \\vec r\\times\\vec F$ ausrechnen, dann Betrag bilden.

**Rechnung:** $\\vec M = (r_y F_z - r_z F_y,\\ r_z F_x - r_x F_z,\\ r_x F_y - r_y F_x) = (4\\cdot 100 - 0,\\ 0 - 3\\cdot 100,\\ 0 - 0) = (400,\\ -300,\\ 0)\\,\\text{Nm}$. $|\\vec M| = \\sqrt{400^2 + 300^2} = \\sqrt{160000 + 90000} = \\sqrt{250000} = 500\\,\\text{Nm}$.

**Probe:** Alternativ über Betragsformel $|\\vec M| = |\\vec r||\\vec F|\\sin\\theta$. $|\\vec r| = \\sqrt{9 + 16} = 5$, $|\\vec F| = 100$. Hier stehen $\\vec r$ und $\\vec F$ senkrecht zueinander ($\\theta = 90°, \\sin\\theta = 1$) ⇒ $|\\vec M| = 5\\cdot 100\\cdot 1 = 500\\,\\text{Nm}$ ✓.

**Typischer Fehler:** Beträge der einzelnen Komponenten $r_x F_z, r_y F_z$ addieren ($300 + 400 = 700$) statt Pythagoras anwenden. Liefert zu großen Wert.`,
        [
          '$\\vec M = \\vec r\\times\\vec F$ komponentenweise.',
          '$|\\vec M|$ via Pythagoras über die Komponenten.',
          '$\\sqrt{400^2 + 300^2} = 500$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['m-kreuz'] },
      ),
      mc(
        'Studierende berechnet $\\vec r\\times\\vec F$ mit $\\vec r = (1, 2, 3)$, $\\vec F = (4, 5, 6)$ und schreibt $\\vec r\\times\\vec F = (1\\cdot 4,\\ 2\\cdot 5,\\ 3\\cdot 6) = (4,\\ 10,\\ 18)$. Wo steckt der Fehler?',
        [
          'Das ist nicht das Kreuzprodukt, sondern komponentenweise Multiplikation. Korrekt: $\\vec r\\times\\vec F = (r_y F_z - r_z F_y,\\ r_z F_x - r_x F_z,\\ r_x F_y - r_y F_x) = (12-15,\\ 12-6,\\ 5-8) = (-3,\\ 6,\\ -3)$.',
          'Die Reihenfolge ist falsch — Kreuzprodukt heißt $\\vec F\\times\\vec r$, nicht $\\vec r\\times\\vec F$.',
          'Kein Fehler — das Kreuzprodukt ist die komponentenweise Multiplikation.',
          'Es fehlt ein $\\sin\\alpha$-Faktor, weil das Kreuzprodukt einen Winkel benötigt.',
        ],
        0,
        `**Ansatz:** Kreuzprodukt ist **nicht** komponentenweise — es mischt die Komponenten nach der Determinanten-Formel.

**Rechnung:** $\\vec r\\times\\vec F = \\det\\begin{pmatrix}\\vec i & \\vec j & \\vec k\\\\ 1 & 2 & 3\\\\ 4 & 5 & 6\\end{pmatrix} = \\vec i(2\\cdot 6 - 3\\cdot 5) - \\vec j(1\\cdot 6 - 3\\cdot 4) + \\vec k(1\\cdot 5 - 2\\cdot 4) = \\vec i(-3) - \\vec j(-6) + \\vec k(-3) = (-3, 6, -3)$.

**Probe:** Skalarprodukte $\\vec r\\cdot\\vec M = 1(-3) + 2(6) + 3(-3) = -3 + 12 - 9 = 0$ ✓ (Moment senkrecht zu $\\vec r$). $\\vec F\\cdot\\vec M = 4(-3) + 5(6) + 6(-3) = -12 + 30 - 18 = 0$ ✓.

**Typischer Fehler:** Aus dem Skalarprodukt $\\vec a\\cdot\\vec b = \\sum a_i b_i$ wird fälschlich abgeleitet, dass das Vektor-Kreuzprodukt komponentenweise sei. Sind aber zwei völlig unterschiedliche Operationen.`,
        [
          'Kreuzprodukt mischt Komponenten kreuzweise.',
          'Determinantenformel mit $\\vec i, \\vec j, \\vec k$.',
          'Probe: $\\vec M$ steht senkrecht auf $\\vec r$ und $\\vec F$.',
        ],
        {
          1: '$\\vec F\\times\\vec r = -\\vec r\\times\\vec F = (3, -6, 3)$ — auch nicht das, was die Studierende geschrieben hat. Das Vorzeichen wäre umgekehrt.',
          2: 'Falsch — Kreuzprodukt und komponentenweise Multiplikation sind verschiedene Operationen mit unterschiedlichem Ergebnis.',
          3: 'Den $\\sin\\alpha$-Faktor enthält die Komponentenformel implizit. $\\sin$ explizit auftauchen lassen wäre nur in der Betragsformel $|\\vec r\\times\\vec F| = |\\vec r||\\vec F|\\sin\\theta$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['m-kreuz'] },
      ),
      ni(
        'An einem Punkt $\\vec r = (2,\\ 1,\\ 0)\\,\\text{m}$ greift eine Kraft $\\vec F = (0,\\ 0,\\ 50)\\,\\text{N}$ an. Berechne den Betrag des Drehmoments $|\\vec M|$ um den Ursprung (in Nm, auf 2 Nachkommastellen).',
        111.80, 0.1, 'Nm',
        `**Ansatz:** $\\vec M = \\vec r\\times\\vec F$ komponentenweise, dann $|\\vec M|$.

**Rechnung:** $\\vec M = (r_y F_z - r_z F_y,\\ r_z F_x - r_x F_z,\\ r_x F_y - r_y F_x) = (1\\cdot 50 - 0,\\ 0 - 2\\cdot 50,\\ 0 - 0) = (50,\\ -100,\\ 0)\\,\\text{Nm}$. $|\\vec M| = \\sqrt{50^2 + 100^2} = \\sqrt{2500 + 10000} = \\sqrt{12500} = 50\\sqrt{5} \\approx 111{,}80\\,\\text{Nm}$.

**Probe:** Alternativ: $|\\vec r| = \\sqrt{4+1} = \\sqrt{5}$, $|\\vec F| = 50$, $\\vec r$ liegt in $xy$-Ebene und $\\vec F$ in $z$-Richtung ⇒ Winkel $90°$. $|\\vec M| = \\sqrt{5}\\cdot 50\\cdot 1 = 50\\sqrt{5} \\approx 111{,}80$ ✓.

**Typischer Fehler:** Komponentenweise einfach addieren statt Pythagoras ⇒ $50 + 100 = 150$ — falsche Vektor-Addition.`,
        [
          'Komponentenformel des Kreuzprodukts.',
          '$|\\vec M| = \\sqrt{M_x^2 + M_y^2 + M_z^2}$.',
          '$\\sqrt{12500} = 50\\sqrt{5}$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['m-kreuz'] },
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-1-3 — Schnittkräfte N(x), Q(x), M(x)  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-1-3': {

    // ── [0] Drei Schnittgrößen $N, Q, M$ ───────────────────────────────
    0: [
      tf(
        'Die drei Schnittgrößen am Balken sind: Normalkraft $N(x)$ in Balkenachse, Querkraft $Q(x)$ senkrecht zur Achse, und Biegemoment $M(x)$ um die Querachse.',
        true,
        `**Ansatz:** Schnittprinzip: An jedem gedachten Querschnitt müssen drei Schnittgrößen wirken, damit beide Hälften des Balkens für sich im Gleichgewicht stehen.

**Rechnung:** $N(x)$ — entlang der Balkenachse (Zug/Druck). $Q(x)$ — senkrecht zur Balkenachse (Scherbeanspruchung). $M(x)$ — Moment um die Querachse (Biegung).

**Probe:** Drei Schnittgrößen passen genau zu den drei 2D-Gleichgewichtsbedingungen ($\\sum F_x, \\sum F_y, \\sum M$) für jede Balkenhälfte.

**Typischer Fehler:** $N$ und $Q$ vertauschen — $N$ ist **längs**, $Q$ ist **quer**. Merkregel: "Normal" wie "in Normalrichtung der Schnittfläche" = entlang der Balkenachse.`,
        [
          'Drei Schnittgrößen pro Schnitt.',
          '$N$ längs, $Q$ quer, $M$ Moment.',
          'Drei Gleichgewichtsbedingungen → drei Schnittgrößen.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['schnittgr-3'] },
      ),
      mc(
        'Welche Schnittgröße entspricht einer reinen Druck- oder Zugbeanspruchung in **Längsrichtung** des Balkens?',
        ['$N(x)$ — Normalkraft', '$Q(x)$ — Querkraft', '$M(x)$ — Biegemoment', 'Keine — Druck/Zug entstehen erst durch Spannungen $\\sigma$.'],
        0,
        `**Ansatz:** Schnittgrößen sind nach ihrer Wirkrichtung relativ zur Balkenachse benannt: längs ($N$), quer ($Q$), drehend ($M$).

**Rechnung:** Reine Längsbeanspruchung (Zug/Druck entlang der Balkenachse) wird durch die Normalkraft $N$ getragen. Sie erzeugt eine über den Querschnitt gleichmäßige Normalspannung $\\sigma = N/A$.

**Probe:** Beispiel Pendelstab: trägt nur $N$ (Zug oder Druck), keine $Q$ und $M$. Definitionsgemäß biegestarr aber ohne Biegung.

**Typischer Fehler:** $Q$ als "Druck" deuten — $Q$ ist Quer-, nicht Längskraft.`,
        [
          'Längs = entlang der Balkenachse.',
          'Quer = senkrecht dazu.',
          'Druck/Zug ⇒ Normalkraft.',
        ],
        {
          1: '$Q$ wirkt **senkrecht** zur Balkenachse — sie erzeugt Schub, nicht Druck/Zug in Längsrichtung.',
          2: '$M$ ist ein Moment (Drehwirkung), keine reine Längskraft. Verursacht Biegespannungen.',
          3: 'Spannung $\\sigma$ entsteht **aus** der Schnittgröße $N$ ($\\sigma = N/A$). Ohne $N$ gäbe es keine Längsspannung.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['schnittgr-3'] },
      ),
      mc(
        'An einem horizontalen Einfeldträger (Festlager A links, Loslager B rechts, $L = 6\\,\\text{m}$) hängt zwischen $A$ und $B$ eine vertikale Last $F = 1200\\,\\text{N}$ bei $x = 2\\,\\text{m}$. Welche Schnittgröße ist auf der Strecke $0 < x < 2\\,\\text{m}$ **konstant ungleich null**?',
        ['Nur $N$', 'Nur $Q$', 'Nur $M$', '$N$ und $M$ gleichzeitig'],
        1,
        `**Ansatz:** Im Bereich vor der Last gibt es nur die Auflagerreaktion $R_A$ als äußere Vertikalkraft. Schnittprinzip auf das linke Stück anwenden.

**Rechnung:** $R_A = F\\cdot(L-a)/L = 1200\\cdot 4/6 = 800\\,\\text{N}$. $\\sum F_y = 0$ am linken Stück: $R_A - Q(x) = 0 \\Rightarrow Q(x) = +R_A = 800\\,\\text{N}$ (konstant). $M(x) = R_A\\cdot x$ — linear, nicht konstant. $N(x) = 0$, weil keine horizontale Last.

**Probe:** Bei $x = 0$: $M = 0$ (Randbedingung Festlager). Bei $x = 2$: $M = R_A\\cdot 2 = 1600\\,\\text{Nm}$ — beweist, dass $M$ nicht konstant ist.

**Typischer Fehler:** $M$ als "konstant" wahrnehmen, weil "die Last erst bei $x = 2$ kommt". $M$ wächst aber linear bereits ab $x = 0$, weil $R_A$ am Hebelarm $x$ wirkt.`,
        [
          '$R_A$ ist die einzige äußere Kraft am linken Stück.',
          '$\\sum F_y = 0$ liefert $Q(x)$.',
          '$M(x) = R_A\\cdot x$ ist linear, nicht konstant.',
        ],
        {
          0: '$N$ ist null in diesem Bereich (keine Längskräfte). Konstant null ist nicht "konstant ungleich null".',
          2: '$M(x) = R_A\\cdot x$ wächst linear mit $x$ — also nicht konstant.',
          3: '$N$ ist hier null, $M$ ist nicht konstant. Beide treffen die Bedingung "konstant ungleich null" nicht.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['schnittgr-3'] },
      ),
      mc(
        'Studentin schreibt: "Die Querkraft $Q$ hat dieselbe Einheit wie das Biegemoment $M$." Was ist falsch?',
        [
          '$Q$ ist eine **Kraft** (Einheit N), $M$ ist ein **Moment** (Einheit N·m). Sie unterscheiden sich um den Faktor Hebelarm.',
          'Stimmt — beide sind Schnittgrößen, also gleiche Einheit.',
          '$Q$ ist in N/m (Streckenlast), $M$ in N·m.',
          'Beide sind dimensionslos, weil sie aus dem Gleichgewicht folgen.',
        ],
        0,
        `**Ansatz:** Einheit folgt aus der Definition: $Q$ ist die senkrechte Schnittkraft, $M$ das resultierende Schnittmoment.

**Rechnung:** $[Q] = \\text{N}$, $[M] = \\text{N}\\cdot\\text{m}$. Aus dem Differentialzusammenhang $Q = dM/dx$: $[Q] = [M]/[x] = \\text{N\\cdot m}/\\text{m} = \\text{N}$ ✓.

**Probe:** Streckenlast $q$: $[q] = \\text{N/m}$ (Kraft pro Längeneinheit). $q = -dQ/dx$ ergibt $[q] = [Q]/[x] = \\text{N/m}$ ✓.

**Typischer Fehler:** "Schnittgrößen haben alle dieselbe Einheit" — falsch, $N$, $Q$ in N, $M$ in N·m, $q$ in N/m. Vier verschiedene Einheiten.`,
        [
          'Einheiten aus den Definitionen.',
          'Kraft N, Moment N·m.',
          'Differentialzusammenhang $Q = dM/dx$.',
        ],
        {
          1: 'Schnittgrößen haben **unterschiedliche** Einheiten — N, N·m, N/m. "Alle gleich" ist falsch.',
          2: '$Q$ ist eine Punktgröße in N, nicht eine Streckenlast in N/m. Letztere wäre $q$.',
          3: 'Schnittgrößen haben **physikalische** Einheiten, sie sind **nicht** dimensionslos.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['schnittgr-3'] },
      ),
      matching(
        'Ordne jede Schnitt- bzw. Belastungsgröße ihrer Einheit und physikalischen Bedeutung zu.',
        [
          { left: 'Normalkraft $N(x)$', right: '$[\\text{N}]$, Längsbelastung (Zug/Druck) entlang der Balkenachse' },
          { left: 'Querkraft $Q(x)$', right: '$[\\text{N}]$, Querbelastung senkrecht zur Balkenachse' },
          { left: 'Biegemoment $M(x)$', right: '$[\\text{N}\\cdot\\text{m}]$, Biegebelastung um die Querachse' },
          { left: 'Streckenlast $q(x)$', right: '$[\\text{N/m}]$, verteilte Belastung pro Längeneinheit' },
        ],
        `**Ansatz:** Einheit jeder Größe direkt aus der Definition.

**Rechnung:** $N, Q$: Kräfte ⇒ N. $M$: Moment ⇒ N·m. $q$: Kraft pro Längeneinheit (Streckenlast) ⇒ N/m.

**Probe:** Aus Differentialbeziehungen: $q = -dQ/dx$ ⇒ $[q] = [Q]/[x] = \\text{N/m}$ ✓. $Q = dM/dx$ ⇒ $[Q] = [M]/[x] = \\text{N}$ ✓.

**Typischer Fehler:** $Q$ und $q$ verwechseln (groß vs. klein) — verschiedene Größen mit verschiedenen Einheiten. $Q$ ist Punktquerkraft, $q$ Streckenlast.`,
        [
          '$N, Q$: Kraft.',
          '$M$: Moment (Kraft × Länge).',
          '$q$: Kraft pro Länge (Streckenlast).',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['schnittgr-3'] },
      ),
    ],

    // ── [1] Differentialzusammenhang $Q = dM/dx$, $q = -dQ/dx$ ─────────
    1: [
      tf(
        'Die Querkraft $Q(x)$ ist die Ableitung des Biegemoments $M(x)$ nach $x$.',
        true,
        `**Ansatz:** Differentialform der Gleichgewichtsbedingungen am infinitesimalen Balkenelement.

**Rechnung:** Aus $\\sum M = 0$ am Element der Länge $dx$ folgt $dM = Q\\cdot dx \\Rightarrow Q = dM/dx$. Analog aus $\\sum F_y = 0$: $dQ = -q\\cdot dx \\Rightarrow q = -dQ/dx$.

**Probe:** Praktisch: An Stellen mit konstantem $Q$ ist $M$ linear. An Stellen mit konstantem $q$ (Streckenlast) ist $Q$ linear und $M$ parabolisch.

**Typischer Fehler:** Vorzeichen vertauschen: $q = +dQ/dx$ ist falsch. Konvention: $q$ nach unten = positiv ⇒ Querkraft nimmt ab ⇒ Minuszeichen.`,
        [
          'Aus Gleichgewicht am infinitesimalen Element.',
          '$Q = dM/dx$ und $q = -dQ/dx$.',
          'Folge: konstantes $Q$ ⇒ lineares $M$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['schnitt-diff'] },
      ),
      mc(
        'Auf einem unbelasteten Balkenabschnitt ($q = 0$) ist die Querkraft $Q$ konstant. Was folgt für $M(x)$ auf diesem Abschnitt?',
        ['$M$ ist konstant.', '$M$ verläuft linear in $x$.', '$M$ verläuft quadratisch in $x$.', '$M$ ist null.'],
        1,
        `**Ansatz:** $Q = dM/dx$. Wenn $Q$ konstant, dann ist $dM/dx$ konstant ⇒ $M$ linear.

**Rechnung:** $M(x) = M_0 + Q\\cdot x$ — Geradengleichung mit Steigung $Q$ und Anfangsmoment $M_0$.

**Probe:** Numerisch: $Q = 500\\,\\text{N}$ konstant von $x = 0$ ($M = 0$) bis $x = 2\\,\\text{m}$ ergibt $M(2) = 0 + 500\\cdot 2 = 1000\\,\\text{Nm}$ (lineare Zunahme).

**Typischer Fehler:** Konstantes $Q$ mit konstantem $M$ verwechseln. Konstantes $Q$ heißt $M$ wächst gleichmäßig (linear), nicht dass $M$ konstant ist.`,
        [
          '$Q = dM/dx$.',
          'Konstante Ableitung ⇒ lineare Funktion.',
          '$M(x) = M_0 + Q\\cdot x$.',
        ],
        {
          0: 'Konstant $M$ würde $dM/dx = 0 = Q$ bedeuten. Das widerspricht "$Q$ konstant ungleich null".',
          2: 'Quadratisches $M$ entsteht bei **konstanter Streckenlast** (linear $Q$, parabolisch $M$). Hier ist $q = 0$, also $Q$ konstant ⇒ $M$ linear.',
          3: '$M = 0$ widerspricht der Annahme einer Belastung. Außerdem $M_0$ kann ungleich null sein.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['schnitt-diff'] },
      ),
      ni(
        'Bei einem Balken gilt $M(x) = 200x - 50x^2$ (in Nm, $x$ in m). Wie groß ist $Q(x = 1\\,\\text{m})$ in Newton?',
        100, 0.5, 'N',
        `**Ansatz:** $Q(x) = dM/dx$ — Polynom-Ableitung anwenden.

**Rechnung:** $Q(x) = M'(x) = 200 - 100x$. Bei $x = 1$: $Q(1) = 200 - 100 = 100\\,\\text{N}$.

**Probe:** Einheiten: $[M]/[x] = \\text{Nm/m} = \\text{N}$ ✓. Plausibilität: $Q(0) = 200\\,\\text{N}$ (am Auflager A), $Q(2) = 0$ (Vorzeichenwechsel — gefährliche Stelle), $Q(4) = -200\\,\\text{N}$ (am Auflager B).

**Typischer Fehler:** $M(1)$ statt $M'(1)$ ausrechnen ⇒ $M(1) = 200 - 50 = 150\\,\\text{Nm}$. Das ist der Momentenwert, nicht die Querkraft.`,
        [
          '$Q(x) = dM/dx$.',
          'Polynom-Ableitung: $200 - 100x$.',
          'Bei $x = 1$: $200 - 100 = 100$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['schnitt-diff'] },
      ),
      mc(
        'Studentin behauptet: "$q(x) = +dQ/dx$." Wo steckt der Fehler?',
        [
          'Vorzeichen falsch — die Standardkonvention lautet $q(x) = -dQ/dx$. Eine nach unten wirkende Streckenlast (positives $q$) lässt die Querkraft mit zunehmendem $x$ abnehmen.',
          'Kein Fehler — beide Vorzeichen sind in unterschiedlichen Konventionen üblich.',
          'Es muss $q(x) = +dM/dx$ heißen, nicht über $Q$.',
          'Die Beziehung gilt nur für konstante Streckenlasten.',
        ],
        0,
        `**Ansatz:** Vorzeichen folgt aus dem Gleichgewicht am infinitesimalen Element bei nach unten gerichteter $q$.

**Rechnung:** $\\sum F_y = 0$ am Element: $Q(x) - Q(x+dx) - q\\cdot dx = 0 \\Rightarrow dQ/dx = -q$. Also $q = -dQ/dx$.

**Probe:** Konstante Streckenlast $q > 0$: $Q$ nimmt linear ab ($dQ/dx = -q < 0$). Bei $q = 0$ (lastfrei): $Q$ konstant ($dQ/dx = 0$) ✓.

**Typischer Fehler:** Beim Aufstellen von $\\sum F_y = 0$ das Vorzeichen der Streckenlast vergessen — $q$ wirkt nach unten, $Q$ wird dadurch reduziert.`,
        [
          'Konvention: $q$ nach unten = positiv.',
          'Bei positivem $q$ nimmt $Q$ ab.',
          'Daher: $q = -dQ/dx$.',
        ],
        {
          1: 'Es ist eine **eindeutige** Konvention — Vorzeichen folgen aus den Definitionen, nicht aus persönlicher Wahl.',
          2: '$dM/dx = Q$, nicht $q$. Verwechslung der beiden Differentialbeziehungen.',
          3: 'Die Beziehung $q = -dQ/dx$ gilt **lokal** für jede stetige Streckenlast — auch für veränderliche.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['schnitt-diff'] },
      ),
      ni(
        'Bei einem Balken mit konstanter Streckenlast $q = 100\\,\\text{N/m}$ und $Q(0) = 600\\,\\text{N}$: Wie groß ist $Q(x = 4\\,\\text{m})$ in Newton?',
        200, 0.5, 'N',
        `**Ansatz:** $dQ/dx = -q$. Integrieren: $Q(x) = Q(0) - q\\cdot x$.

**Rechnung:** $Q(4) = 600 - 100\\cdot 4 = 200\\,\\text{N}$.

**Probe:** Bei $x = 6$ wäre $Q(6) = 600 - 600 = 0$ — das ist die "gefährliche Stelle" mit $M_\\text{max}$ (sofern $x = 6$ im Balken liegt).

**Typischer Fehler:** Plus-Zeichen einsetzen ($Q(4) = 600 + 400 = 1000\\,\\text{N}$) — wäre nur korrekt, wenn $q$ nach oben wirken würde (negative Streckenlast).`,
        [
          'Konvention: $dQ/dx = -q$.',
          'Lineare Abnahme von $Q$ um $q$ pro Meter.',
          '$Q(x) = Q_0 - q\\cdot x$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['schnitt-diff'] },
      ),
    ],

    // ── [2] Sprung in $Q$ und Knick in $M$ bei Einzellast ─────────────
    2: [
      tf(
        'An der Stelle, wo eine Einzellast $F$ (nach unten) angreift, springt die Querkraft $Q(x)$ um $-F$ — gleichzeitig erhält das Biegemoment $M(x)$ einen Knick.',
        true,
        `**Ansatz:** Einzellast als Dirac-artige Konzentration der Streckenlast — verursacht Sprung in $Q$ und Knick (Steigungswechsel) in $M$.

**Rechnung:** Sprung in $Q$: $Q(a^+) - Q(a^-) = -F$ (Vorzeichen-Konvention: $F$ nach unten = positiv). $M$ ist stetig (kein Sprung in $M$), aber die Steigung $dM/dx = Q$ ändert sich abrupt — das ist der Knick.

**Probe:** Einfeldträger mit Einzellast $F$ bei $x = a$: $Q(a^-) = +R_A$, $Q(a^+) = -R_B$. Differenz $= -R_A - R_B = -F$ (wegen $R_A + R_B = F$) ✓.

**Typischer Fehler:** $M$ ebenfalls als unstetig zeichnen — $M$ ist stetig, hat aber einen Knick. Sprung gibt es nur bei einem **konzentrierten Moment** (z. B. eingeleitetes Drehmoment), nicht bei Einzelkraft.`,
        [
          'Einzellast = Konzentration von $q$.',
          'Sprung in $Q$, Knick in $M$.',
          'Sprung-Betrag = Lastbetrag.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['sprung-knick'] },
      ),
      mc(
        'Bei einem Einfeldträger mit einer Einzellast $F = 800\\,\\text{N}$ bei $x = a$: Was passiert mit $Q(x)$ am Lastangriff?',
        [
          '$Q$ springt um $-800\\,\\text{N}$ — von $+R_A$ auf $-R_B$.',
          '$Q$ ist stetig — eine Einzellast beeinflusst nur das Moment.',
          '$Q$ wird null an dieser Stelle.',
          '$Q$ verdoppelt sich.',
        ],
        0,
        `**Ansatz:** Sprungbetrag von $Q$ ist immer gleich der Last (mit Vorzeichen).

**Rechnung:** $\\Delta Q = -F = -800\\,\\text{N}$. Beispiel mit $L = 4\\,\\text{m}, a = 1\\,\\text{m}$: $R_A = 800\\cdot 3/4 = 600\\,\\text{N}$, $R_B = 800\\cdot 1/4 = 200\\,\\text{N}$. $Q(a^-) = +600, Q(a^+) = -200 \\Rightarrow \\Delta Q = -800$ ✓.

**Probe:** Auch wenn $Q(a)$ den Wert null annimmt (z. B. mittige Last bei symmetrischer Belastung), ist der Sprung trotzdem $-F$ — er führt von $+F/2$ auf $-F/2$.

**Typischer Fehler:** "Einzellast nur Moment" — Einzellast wirkt erst aufs Gleichgewicht, dann auf Schnittgrößen. Querkraft springt **immer** an Einzellast.`,
        [
          'Sprungbetrag = Last (mit Vorzeichen).',
          '$Q$ vor: $+R_A$, nach: $-R_B$.',
          'Differenz: $-F$.',
        ],
        {
          1: 'Falsch — Einzellasten erzeugen den charakteristischen $Q$-Sprung. Das Moment hat parallel dazu einen Knick.',
          2: '$Q$ kann zwar null werden (z. B. bei mittiger Last), aber der **Sprung** ist trotzdem $-F$ — von $+F/2$ auf $-F/2$.',
          3: 'Verdopplung wäre Sprung um $+F$ statt $-F$. Das Vorzeichen ist negativ (Last reduziert die Querkraft).',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['sprung-knick'] },
      ),
      mc(
        'An einem Einfeldträger ($L = 5\\,\\text{m}$) wirkt eine Einzellast $F = 1500\\,\\text{N}$ nach unten bei $x = 2\\,\\text{m}$. Wie groß ist der **Sprungbetrag** $|\\Delta Q|$ am Lastangriff?',
        ['$1500\\,\\text{N}$', '$0$', 'hängt von Hebelarmen ab', '$3000\\,\\text{N}$'],
        0,
        `**Ansatz:** Sprung von $Q$ entspricht **immer** dem Betrag der Einzellast — unabhängig vom Hebelarm oder der Position.

**Rechnung:** $|\\Delta Q| = |F| = 1500\\,\\text{N}$.

**Probe:** Mit konkreten Werten: $R_A = 1500\\cdot 3/5 = 900\\,\\text{N}$, $R_B = 1500\\cdot 2/5 = 600\\,\\text{N}$. $Q(a^-) = 900$, $Q(a^+) = 900 - 1500 = -600$. $|\\Delta Q| = |-600 - 900| = 1500\\,\\text{N}$ ✓.

**Typischer Fehler:** Glauben, der Sprung hänge von der Position der Last ab — Position bestimmt nur den Wert von $Q$ vor und nach dem Sprung, aber der **Sprungbetrag** ist immer gleich $|F|$.`,
        [
          'Sprungbetrag = Lastbetrag.',
          'Unabhängig von $a$ und $L$.',
          '$|\\Delta Q| = |F|$.',
        ],
        {
          1: '"Null Sprung" wäre eine stetige $Q$-Funktion — gilt nur bei lastfreiem Abschnitt.',
          2: 'Hebelarme bestimmen $R_A, R_B$ (und damit $Q$-Werte), aber nicht den **Sprung** — der ist immer $|F|$.',
          3: 'Doppelter Lastbetrag wäre nur, wenn die Last "doppelt wirkt" — z. B. zwei aufeinanderliegende Lasten.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['sprung-knick'] },
      ),
      mc(
        'Studierender skizziert $M(x)$ für einen Einfeldträger mit einer Einzellast und zeichnet die Linie als geschwungene (glatte) Kurve. Was ist falsch?',
        [
          '$M(x)$ ist zwischen Auflagern und Lastangriff **linear** (weil $Q$ konstant) — die Linie muss aus zwei Geradenstücken mit Knick unter der Last bestehen.',
          'Die Kurve sollte glatt sein — Einzellasten verursachen keine Knicke.',
          '$M(x)$ sollte quadratisch sein — wie bei Streckenlast.',
          '$M(x)$ sollte konstant sein zwischen den Auflagern.',
        ],
        0,
        `**Ansatz:** $M(x)$-Verlauf folgt aus $Q(x)$: $M = \\int Q\\,dx$. Konstantes $Q$ ⇒ lineares $M$.

**Rechnung:** Bei Einfeldträger mit Einzellast: $Q = +R_A$ konstant für $0 < x < a$ ⇒ $M$ linear, $M(0)=0, M(a)=R_A\\cdot a$. Dann $Q = -R_B$ konstant für $a < x < L$ ⇒ wieder linear, von $M(a) = R_A\\cdot a$ auf $M(L) = 0$. Zwei Geradenstücke mit Knick bei $x = a$.

**Probe:** Der Knick in $M$ entspricht dem Sprung in $Q$ (= Steigungssprung von $+R_A$ auf $-R_B$).

**Typischer Fehler:** $M$-Verlauf wie eine Streckenlast-Parabel zeichnen, obwohl Einzellast vorliegt. Geradenstücke erkennen, parabolische Form nur bei verteilten Lasten.`,
        [
          '$Q$ konstant ⇒ $M$ linear (Geradenstücke).',
          'Sprung in $Q$ ⇒ Knick in $M$.',
          'Parabolisches $M$ nur bei Streckenlast.',
        ],
        {
          1: 'Glatte Kurve würde $Q$ stetig bedeuten — bei Einzellast aber gibt es einen Sprung in $Q$ und damit einen Knick in $M$.',
          2: 'Quadratisch (Parabel) gilt für **Streckenlast**, nicht für Einzellast. Einzellast führt zu linearen Stücken.',
          3: 'Konstantes $M$ würde $Q = 0$ bedeuten — widerspricht den von null verschiedenen Lagerreaktionen.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['sprung-knick'] },
      ),
      mc(
        'Auf einen Einfeldträger ($L = 6\\,\\text{m}$) wirken zwei Einzellasten $F_1 = 500\\,\\text{N}$ bei $x_1 = 2\\,\\text{m}$ und $F_2 = 300\\,\\text{N}$ bei $x_2 = 4\\,\\text{m}$ (beide nach unten). Wie viele **Knicke** hat der $M(x)$-Verlauf?',
        ['$0$', '$1$', '$2$', '$3$'],
        2,
        `**Ansatz:** Pro Einzellast ein Knick in $M$ (bzw. ein Sprung in $Q$).

**Rechnung:** Zwei Einzellasten → zwei Knicke. Zwischen den Lasten und an den Rändern verläuft $M$ stückweise linear.

**Probe:** Konkret: drei lineare Stücke ($0 < x < 2$, $2 < x < 4$, $4 < x < 6$), getrennt durch zwei Knicke bei $x = 2$ und $x = 4$. An den gelenkigen Lagern $x = 0$ und $x = 6$ ist $M = 0$.

**Typischer Fehler:** "Drei Knicke" zählen, indem man die Auflager mitzählt — an den Auflagern ist $M = 0$, aber das ist eine **Randbedingung**, kein Knick im üblichen Sinn.`,
        [
          'Pro Einzellast ein Knick.',
          'Zwei Lasten → zwei Knicke.',
          'Auflager sind Randbedingungen, keine Knicke.',
        ],
        {
          0: '"Null Knicke" wäre eine glatte Funktion — gilt nur bei stetigen Belastungen ohne Punktlasten.',
          1: 'Ein Knick wäre richtig bei einer einzelnen Einzellast. Hier sind zwei Lasten.',
          3: 'Drei Knicke entsprächen drei Einzellasten. Hier nur zwei.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['sprung-knick'] },
      ),
    ],

    // ── [3] $M_{max}$ liegt bei $Q = 0$ (gefährliche Stelle) ──────────
    3: [
      tf(
        'An der Stelle, wo die Querkraft $Q(x)$ ihr Vorzeichen wechselt (bzw. $Q = 0$ wird), liegt das Biegemoment $M(x)$ bei einem lokalen Extremum.',
        true,
        `**Ansatz:** Aus dem Differentialzusammenhang $Q = dM/dx$. Lokale Extrema einer Funktion liegen dort, wo die Ableitung null wird (notwendige Bedingung).

**Rechnung:** $dM/dx = 0 \\Leftrightarrow Q(x) = 0$. Vorzeichenwechsel von $Q$ ⇒ entsprechender Vorzeichenwechsel von $dM/dx$ ⇒ Extremum.

**Probe:** Einfeldträger mit Einzellast bei $a$: $Q = +R_A$ links, $-R_B$ rechts. $Q$ wechselt Vorzeichen exakt bei der Last ⇒ $M_\\text{max}$ liegt unter der Last ✓.

**Typischer Fehler:** Maximum von $M$ an der Stelle suchen, wo $M = 0$ wird (Nullstelle) — Maximum liegt aber dort, wo $M' = Q = 0$.`,
        [
          'Extrema: $dM/dx = 0$.',
          '$Q = dM/dx$.',
          'Querkraft-Nullstelle = Momenten-Extremum.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['m-max'] },
      ),
      mc(
        'Auf einem Einfeldträger mit gleichmäßig verteilter Streckenlast $q$ liegt das maximale Biegemoment ...',
        ['... in der Balkenmitte ($x = L/2$).', '... am Festlager.', '... am Loslager.', '... nahe einem Auflager (Asymmetrie).'],
        0,
        `**Ansatz:** Stelle mit $Q(x) = 0$ finden. Bei symmetrischer Belastung liegt sie in der Mitte.

**Rechnung:** $R_A = R_B = qL/2$. $Q(x) = R_A - q\\cdot x = qL/2 - qx$. Nullstelle: $qL/2 - qx = 0 \\Rightarrow x = L/2$. Dort $M_\\text{max} = qL^2/8$.

**Probe:** Symmetrie: Aus $R_A = R_B$ und gleichmäßiger Last folgt symmetrischer $M$-Verlauf — Maximum muss in der Symmetrieachse $x = L/2$ liegen.

**Typischer Fehler:** "Am Auflager" wegen größter Lagerreaktion — aber die Lagerreaktion ist eine **Querkraft**, kein Moment. An gelenkigen Auflagern ist $M = 0$.`,
        [
          'Symmetrie ⇒ $M_\\text{max}$ in der Mitte.',
          '$Q(x) = 0$ finden.',
          '$M_\\text{max} = qL^2/8$.',
        ],
        {
          1: 'Am Festlager ist $M = 0$ (Randbedingung). Festlager überträgt nur Kräfte, keine Momente.',
          2: 'Wie beim Festlager: $M(L) = 0$ am Loslager (gelenkig).',
          3: 'Asymmetrie tritt nur bei asymmetrischer Last auf. Bei gleichmäßiger Streckenlast ist $M$-Verlauf symmetrisch ⇒ Maximum mittig.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['m-max'] },
      ),
      ni(
        'Ein Einfeldträger ($L = 8\\,\\text{m}$) trägt eine konstante Streckenlast $q = 200\\,\\text{N/m}$. Wie groß ist $M_\\text{max}$ in der Balkenmitte (in N·m)?',
        1600, 1, 'Nm',
        `**Ansatz:** Bei symmetrischer Streckenlast: $M_\\text{max} = qL^2/8$ in der Mitte.

**Rechnung:** $M_\\text{max} = 200\\cdot 8^2/8 = 200\\cdot 64/8 = 200\\cdot 8 = 1600\\,\\text{Nm}$.

**Probe:** Über $R_A = qL/2 = 800\\,\\text{N}$ und Schnitt bei $x = 4$: $M(4) = R_A\\cdot 4 - q\\cdot 4\\cdot 2 = 800\\cdot 4 - 200\\cdot 8 = 3200 - 1600 = 1600\\,\\text{Nm}$ ✓ (Hebelarm der Resultierenden der Last bis $x = 4$ ist $4/2 = 2$).

**Typischer Fehler:** Formel $qL^2/4$ verwenden (Faktor 2 statt 8 im Nenner) ⇒ $3200\\,\\text{Nm}$. Standardformel: $qL^2/8$ für Streckenlast auf Einfeldträger.`,
        [
          'Streckenlast auf Einfeldträger: $M_\\text{max} = qL^2/8$.',
          '$200\\cdot 64/8 = 1600$.',
          'Maximum mittig.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['m-max'] },
      ),
      mc(
        'Studentin sucht $M_\\text{max}$, indem sie überall $M(x) = 0$ setzt und nach $x$ auflöst. Wo steckt der Fehler?',
        [
          'Sie sucht **Nullstellen** von $M$, nicht Extrema. Korrekt: $M_\\text{max}$ liegt dort, wo $dM/dx = Q(x) = 0$ — also Querkraft-Nullstellen, nicht Momenten-Nullstellen.',
          'Kein Fehler — Maxima fallen in der Statik mit Nullstellen zusammen.',
          'Sie muss $M\'\'(x) = 0$ setzen, das gibt Wendepunkte.',
          'Die Suche nach $M_\\text{max}$ funktioniert nur grafisch, nicht analytisch.',
        ],
        0,
        `**Ansatz:** Standardvorgehen aus der Analysis: Extrema einer Funktion bei Nullstellen ihrer **Ableitung**.

**Rechnung:** $M_\\text{max}$ erfüllt $\\frac{dM}{dx} = 0 \\Leftrightarrow Q(x) = 0$. Wer $M(x) = 0$ setzt, findet die **Lager** (gelenkige Auflager mit $M = 0$).

**Probe:** Einfeldträger, Streckenlast: $M(0) = M(L) = 0$ (Auflager) — keine Maxima. Maximum liegt bei $L/2$, dort ist aber $M \\neq 0$.

**Typischer Fehler:** Mathematisches Standardvorgehen vergessen, weil "Schnittgrößen ungewohnt sind". Die Analysis bleibt dieselbe: Maximum = Ableitung null setzen.`,
        [
          'Maxima: Ableitung null setzen.',
          '$M\' = Q$.',
          'Querkraft-Nullstellen, nicht Momenten-Nullstellen.',
        ],
        {
          1: 'Maxima und Nullstellen sind grundsätzlich verschiedene Konzepte. Bei $M$ liegen Nullstellen an den Lagern, das Maximum liegt dazwischen.',
          2: '$M\'\'(x) = 0$ wären **Wendepunkte**, nicht Maxima. Korrekt: erste Ableitung ($M\' = Q$) null setzen.',
          3: 'Falsch — die analytische Methode ($Q = 0$) liefert das Maximum exakt, ist sogar präziser als grafisch.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['m-max'] },
      ),
      ni(
        'Ein Einfeldträger ($L = 4\\,\\text{m}$) hat eine Einzellast $F = 800\\,\\text{N}$ bei $x = 1{,}5\\,\\text{m}$. Berechne $M_\\text{max}$ (in N·m).',
        750, 1, 'Nm',
        `**Ansatz:** Bei Einzellast: $M_\\text{max} = R_A\\cdot a$ (Maximum direkt unter der Last).

**Rechnung:** $R_A = F\\cdot(L-a)/L = 800\\cdot 2{,}5/4 = 500\\,\\text{N}$. $M_\\text{max} = R_A\\cdot a = 500\\cdot 1{,}5 = 750\\,\\text{Nm}$.

**Probe:** Standardformel $F\\cdot a(L-a)/L = 800\\cdot 1{,}5\\cdot 2{,}5/4 = 800\\cdot 3{,}75/4 = 750\\,\\text{Nm}$ ✓.

**Typischer Fehler:** Hebelarm $L$ statt $a$ verwenden ⇒ $R_A\\cdot L = 500\\cdot 4 = 2000\\,\\text{Nm}$ — viel zu groß. $M_\\text{max}$ liegt **unter der Last**, nicht am gegenüberliegenden Auflager.`,
        [
          '$R_A = F(L-a)/L$.',
          '$M_\\text{max} = R_A\\cdot a$.',
          'Maximum unter der Last.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['m-max'] },
      ),
    ],

    // ── [4] Randbedingung am gelenkigen Auflager: $M = 0$ ─────────────
    4: [
      tf(
        'An einem gelenkigen Auflager (Festlager oder Loslager) eines Balkens gilt als Randbedingung $M = 0$.',
        true,
        `**Ansatz:** Gelenk = Verbindung, die kein Moment übertragen kann. Daher kann an einem gelenkigen Auflager auch kein Biegemoment $M$ bestehen.

**Rechnung:** Bei einem Festlager (gelenkig) werden nur **Kräfte** übertragen ($A_x, A_y$), kein Moment. Also $M(0) = 0$ als Randbedingung beim Aufstellen der $M(x)$-Funktion.

**Probe:** Probe mit Einfeldträger: Bei $x = 0$ (Festlager A) und $x = L$ (Loslager B) ist $M = 0$. Maximum liegt **dazwischen**.

**Typischer Fehler:** Mit Einspannung verwechseln — dort ist $M_A \\neq 0$ (Einspannmoment). Gelenkige Lager und Einspannungen liefern unterschiedliche Randbedingungen.`,
        [
          'Gelenk überträgt kein Moment.',
          'Festlager und Loslager sind beide gelenkig.',
          'Randbedingung: $M = 0$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['rb-gelenk'] },
      ),
      mc(
        'Bei einem Einfeldträger auf Festlager A (links) und Loslager B (rechts) gilt für das Biegemoment ...',
        ['$M(0) = 0$ und $M(L) = 0$ — an beiden gelenkigen Auflagern.', '$M(0) = M_A \\neq 0$ (Einspannmoment).', '$M(0) = R_A$ (gleich der Lagerreaktion).', 'Randbedingung gilt nur am Festlager, nicht am Loslager.'],
        0,
        `**Ansatz:** Fest- und Loslager sind beide **gelenkig** — sie übertragen Kräfte, aber keine Momente.

**Rechnung:** $M(0) = 0$ wegen Festlager (gelenkig). $M(L) = 0$ wegen Loslager (gelenkig). Beides Randbedingungen.

**Probe:** Numerisch: Einfeldträger mit Einzellast: $M(x) = R_A\\cdot x - F\\cdot\\langle x-a\\rangle^1$ — bei $x = 0$ und $x = L$ wird $M = 0$ direkt verifiziert.

**Typischer Fehler:** $M$ und Lagerreaktion verwechseln. $R_A$ ist die **Kraft** am Lager (Newton), $M$ ist das Moment (N·m) — verschiedene Größen.`,
        [
          'Beide Lagertypen sind gelenkig.',
          '$M = 0$ als Randbedingung.',
          '$R_A$ ist eine Kraft, nicht $M$.',
        ],
        {
          1: 'Einspannmoment $M_A$ tritt nur bei einer **Einspannung** auf, nicht bei einem gelenkigen Lager.',
          2: 'Verwechslung: $R_A$ ist eine Kraft (Lagerreaktion in N), $M$ ist ein Moment (N·m). Unterschiedliche Größen.',
          3: 'Falsch — beide gelenkigen Lager (Fest- und Loslager) erzwingen $M = 0$. Sonst wäre Lager-Symbolik inkonsistent.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['rb-gelenk'] },
      ),
      mc(
        'Welcher Lagertyp führt **nicht** automatisch zu $M = 0$ am Lager?',
        ['Festlager (gelenkig)', 'Loslager (Rolle)', 'Einspannung (in Mauer)', 'Internes Gelenk (im Träger)'],
        2,
        `**Ansatz:** Nur Verbindungen ohne Momentübertragung führen zu $M = 0$ — also gelenkige Lager und interne Gelenke.

**Rechnung:** Einspannung überträgt **alle drei** Reaktionsgrößen ($A_x, A_y, M_A$). Das Einspannmoment $M_A$ ist im Allgemeinen $\\neq 0$ — Randbedingung dort lautet anders (z. B. Verformungsbedingung statt Kraftbedingung).

**Probe:** Kragträger mit Endlast $F$: $M_A = -F\\cdot L \\neq 0$ am Einspannpunkt, $M = 0$ am freien Ende. Genau umgekehrt zu einem beidseitig gelenkigen Träger.

**Typischer Fehler:** Einspannung und Festlager gleichsetzen — beide hemmen Verschiebungen, aber nur die Einspannung hemmt zusätzlich Rotation.`,
        [
          'Gelenk = kein Moment.',
          'Einspannung hemmt auch Rotation.',
          '$M_A = $ Einspannmoment $\\neq 0$.',
        ],
        {
          0: 'Festlager (gelenkig) erlaubt Drehung um den Lagerpunkt — kann kein Moment aufnehmen, also $M = 0$.',
          1: 'Loslager ist ebenfalls gelenkig (zusätzlich verschieblich) — kein Momentübertrag, $M = 0$.',
          3: 'Internes Gelenk (Pin im Träger) ist eine Stelle, an der zwei Trägerteile gelenkig verbunden sind — kein Momentübertrag, $M = 0$.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['rb-gelenk'] },
      ),
      mc(
        'Studierende schreibt für einen Einfeldträger (Festlager A links, Loslager B rechts): "$M(0) = R_A$." Was ist falsch?',
        [
          'An gelenkigen Auflagern gilt $M = 0$, nicht $M = R_A$. $R_A$ ist die Lagerreaktion (eine Kraft, Einheit N), nicht das Biegemoment (Einheit N·m).',
          '$M(0) = -R_A$ wäre korrekt — Vorzeichen vergessen.',
          'Bei einem Festlager gilt tatsächlich $M(x) = R_A$ unabhängig von $x$.',
          'Kein Fehler — Lagerreaktion und Moment haben dieselbe Einheit.',
        ],
        0,
        `**Ansatz:** Schnittgröße $M(x)$ am Lager folgt aus dem Schnitt bei $x = 0$. Das gelenkige Lager erzwingt $M(0) = 0$.

**Rechnung:** Schnitt bei $x = 0^+$: Linkes Stück ist null lang — kein Hebelarm für $R_A$. Also $M(0) = 0$. Wer $M(0) = R_A$ schreibt, verwechselt Schnittmoment und Lagerreaktion.

**Probe:** Einheitencheck: $[M] = \\text{N\\cdot m}$, $[R_A] = \\text{N}$. Sie unterscheiden sich um den Faktor Hebelarm — können niemals gleich sein, außer beide null.

**Typischer Fehler:** Bei der Auswertung von $M(x) = R_A\\cdot x$ den Wert bei $x = 0$ nicht null setzen, sondern den Vorfaktor $R_A$ allein nehmen.`,
        [
          'Gelenkiges Lager: $M = 0$.',
          '$R_A$ ist eine Kraft, $M$ ein Moment.',
          'Einheiten unterschiedlich.',
        ],
        {
          1: 'Nicht das Vorzeichen ist das Problem — $M$ ist null, nicht $-R_A$. Vorzeichen-Fehler ist hier kein Faktor.',
          2: '$M(x) = R_A\\cdot x$ ist linear, nicht konstant. $M(0) = 0$ und $M(a) = R_A\\cdot a$.',
          3: 'Falsch — $\\text{N}$ und $\\text{N\\cdot m}$ sind unterschiedliche Einheiten.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['rb-gelenk'] },
      ),
      mc(
        'Bei einem Kragträger (links eingespannt, rechts frei) mit einer Endlast $F$: An welchen Stellen gilt $M = 0$?',
        ['Nur am freien Ende (rechtes Balkenende).', 'Nur am Einspannpunkt $A$.', 'Überall.', 'Nur unter der Last (mittig auf dem Balken).'],
        0,
        `**Ansatz:** Schnittprinzip am freien Ende: rechts vom Schnitt steht nur die Last $F$ am Punkt selbst (kein Hebelarm dahinter) ⇒ $M = 0$.

**Rechnung:** $M(L) = 0$ (am freien Ende). $M(A)$ am Einspannpunkt: alle Lasten links von A bzw. rechts von A erzeugen ein Moment um A — bei Endlast $F$ am Hebelarm $L$ wird $M_A = F\\cdot L \\neq 0$.

**Probe:** Konkret: $F = 100\\,\\text{N}, L = 2\\,\\text{m}$ ⇒ $M_A = 200\\,\\text{Nm}$ (am Einspannpunkt), $M(L) = 0$ (am freien Ende). Linearer Verlauf dazwischen.

**Typischer Fehler:** Kragträger mit Einfeldträger verwechseln — beim Einfeldträger sind beide Auflager gelenkig ($M = 0$ an beiden). Beim Kragträger ist nur ein Ende gelenkig (das freie), das andere fest eingespannt.`,
        [
          'Freies Ende: keine Schnittgrößen rechts → $M = 0$.',
          'Einspannpunkt: $M_A = F\\cdot L \\neq 0$.',
          'Kragträger ≠ Einfeldträger.',
        ],
        {
          1: 'Falsch — am Einspannpunkt ist $M_A = F\\cdot L$ (nicht null). Das ist gerade das Einspannmoment.',
          2: '$M$ verläuft linear vom Einspannpunkt zum freien Ende — nicht überall null.',
          3: 'Beim Kragträger mit Endlast greift die Last am freien Ende, nicht "mittig". $M$ wird in der Mitte zwar nicht null, aber hat keinen besonderen Wert.',
        },
        { stage: 'transfer', subGoal: 4, uses: ['rb-gelenk'] },
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-1-4 — Reibung  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-1-4': {

    // ── [0] Coulombsches Reibgesetz: $F_R = \mu F_N$ ────────────────────
    0: [
      ni(
        'Eine Kiste (m = 25 kg) wird auf horizontalem Boden mit Gleitreibwert $\\mu = 0{,}25$ gezogen. Wie groß ist die Reibkraft? ($g = 9{,}81\\,\\text{m/s}^2$; auf 2 Nachkommastellen in Newton)',
        61.31, 0.1, 'N',
        `**Ansatz:** Auf horizontalem Boden trägt die Normalkraft das volle Gewicht: $F_N = mg$. Coulombsches Reibgesetz: $F_R = \\mu F_N$.

**Rechnung:** $F_N = 25 \\cdot 9{,}81 = 245{,}25\\,\\text{N}$. $F_R = 0{,}25 \\cdot 245{,}25 \\approx 61{,}31\\,\\text{N}$.

**Probe:** Einheitencheck: $[\\mu] \\cdot \\text{N} = \\text{N}$ (dimensionslos × Kraft). ✓ Größenordnung: Reibkraft $\\approx 1/4$ des Gewichts (da $\\mu = 0{,}25$). ✓

**Typischer Fehler:** $F_R$ direkt aus $\\mu \\cdot m$ ohne $g$ rechnen: $0{,}25 \\cdot 25 = 6{,}25$ — bekommt kg statt N, also einheitlich falsch. Das Reibgesetz braucht die **Kraft** $F_N$, nicht die Masse.`,
        [
          'Was ist die Normalkraft auf horizontalem Boden?',
          '$F_N = m \\cdot g$.',
          'Dann $F_R = \\mu \\cdot F_N$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['coulomb'] },
      ),
      mc(
        'Ein Block liegt auf horizontalem Boden. Eine vertikale Zusatzkraft $F_Z = 50\\,\\text{N}$ drückt ihn **zusätzlich** nach unten. Der Block wiegt $mg = 100\\,\\text{N}$ und $\\mu = 0{,}4$. Wie groß ist die Reibkraft beim Gleiten?',
        ['$40\\,\\text{N}$', '$60\\,\\text{N}$', '$20\\,\\text{N}$', '$100\\,\\text{N}$'],
        1,
        `**Ansatz:** Die Normalkraft setzt sich aus **allen** nach unten wirkenden Kräften zusammen. $F_N = mg + F_Z$ wenn $F_Z$ zusätzlich drückt.

**Rechnung:** $F_N = 100 + 50 = 150\\,\\text{N}$. $F_R = \\mu F_N = 0{,}4 \\cdot 150 = 60\\,\\text{N}$.

**Probe:** Freikörperbild: Gewicht $100\\,\\text{N}$↓, Zusatzkraft $50\\,\\text{N}$↓, Normalkraft $F_N$↑. Vertikales Gleichgewicht: $F_N = 150\\,\\text{N}$. ✓

**Typischer Fehler:** $F_N = mg$ automatisch annehmen, ohne Freikörperbild zu prüfen. Jede vertikale Zusatzkraft (drückend oder ziehend) ändert die Normalkraft.`,
        [
          'Zeichne ein Freikörperbild mit allen vertikalen Kräften.',
          'Normalkraft ist die Reaktion auf alles, was nach unten drückt.',
          '$F_N = mg + F_Z$ (bei drückender Zusatzkraft).',
        ],
        {
          0: '$40\\,\\text{N}$ ergibt sich nur bei $F_N = mg = 100\\,\\text{N}$ (Zusatzkraft ignoriert). Die Zusatzkraft drückt den Block stärker auf den Boden und erhöht $F_N$.',
          2: '$20\\,\\text{N}$ wäre korrekt bei $F_N = 50\\,\\text{N}$ — aber die Summe der drückenden Kräfte ist $150\\,\\text{N}$, nicht $50\\,\\text{N}$.',
          3: 'Das ist das Gewicht selbst ($mg = 100\\,\\text{N}$), keine Reibkraft. Reibkraft folgt aus Coulomb mit Faktor $\\mu = 0{,}4$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['coulomb'] },
      ),
      tf(
        'Die Reibkraft $F_R = \\mu F_N$ hängt von der Auflagefläche ab: je größer die Kontaktfläche, desto größer die Reibkraft.',
        false,
        `**Ansatz:** Das Coulombsche Reibgesetz enthält nur Reibwert $\\mu$ und Normalkraft $F_N$ — die Kontaktfläche tritt nicht auf. Die Reibkraft ist **flächenunabhängig**.

**Rechnung:** Mikroskopisch: Die reale Kontaktfläche (Atom-Berührpunkte) ist proportional zum Druck. Bei kleinerer scheinbarer Fläche ist der Druck höher, sodass die reale Berührung gleich bleibt. Netto: $F_R$ hängt nur von $F_N$ und $\\mu$ ab.

**Probe:** Autoreifen-Beispiel: Ein breiter Reifen hat nicht mehr Bremskraft als ein schmaler bei gleicher Last — zumindest nach Coulomb. Praxisabweichungen (Gummi, Temperatur) sind Modellgrenzen.

**Typischer Fehler:** Anschauliche Annahme "größere Fläche = mehr Reibung" — klassischer Alltagsirrtum. Coulomb: nur Normalkraft und Reibwert zählen.`,
        [
          'Schau in die Formel: $F_R = \\mu \\cdot F_N$ — welche Größen stehen drin?',
          'Die Kontaktfläche taucht nicht auf.',
          'Mikroskopisch: reale Kontaktfläche skaliert mit Druck.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['coulomb'] },
      ),
      matching(
        'Ordne jedem Materialpaar den typischen Gleitreibwert zu.',
        [
          { left: 'Stahl / Stahl (trocken)', right: '$\\mu \\approx 0{,}15$' },
          { left: 'Stahl / Stahl (geschmiert)', right: '$\\mu \\approx 0{,}05$' },
          { left: 'Gummi / Asphalt (trocken)', right: '$\\mu \\approx 0{,}8$' },
          { left: 'Eis / Stahl', right: '$\\mu \\approx 0{,}02$' },
        ],
        `**Ansatz:** Reibwerte sind materialpaarabhängig — nicht materialspezifisch pro Körper. Schmierung und Oberflächenbeschaffenheit reduzieren $\\mu$ drastisch.

**Rechnung:** Erfahrungswerte aus Tabellen — Gummi/Asphalt hoch (gute Traktion für Autos), geschmiertes Stahl-Stahl niedrig (Lagerauslegung), Eis extrem niedrig. Die Werte sind Faustregel; in Prüfungen stehen sie meistens in einer Tabelle oder in der Aufgabe.

**Probe:** Fahrzeugbremsweg $\\propto 1/\\mu$: Auf Eis ($\\mu \\approx 0{,}02$) ist der Bremsweg $\\approx 40 \\times$ länger als auf trockenem Asphalt ($\\mu \\approx 0{,}8$). Konsistent mit Alltagserfahrung.

**Typischer Fehler:** Reibwert nur einer Materialkomponente zuordnen ("Reibwert von Stahl") — $\\mu$ ist eine **Paareigenschaft** beider Oberflächen.`,
        [
          'Gummi auf Asphalt ist das Paar mit hoher Traktion.',
          'Schmierung drückt $\\mu$ stark nach unten.',
          'Eis ist berüchtigt niedrig.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['coulomb'] },
      ),
      ni(
        'Ein Werkstück (m = 40 kg) soll auf horizontalem Boden gezogen werden. Welcher **Mindestwert** des Gleitreibwerts $\\mu$ ist mit einer Zugkraft $F_Z = 100\\,\\text{N}$ gerade noch überwindbar? (Antwort auf 3 Nachkommastellen)',
        0.255, 0.002, '',
        `**Ansatz:** Für gleichmäßiges Gleiten: $F_Z = F_R = \\mu F_N$. Auf horizontaler Fläche $F_N = mg$. Nach $\\mu$ auflösen.

**Rechnung:** $\\mu = F_Z / (mg) = 100 / (40 \\cdot 9{,}81) = 100 / 392{,}4 \\approx 0{,}2549$.

**Probe:** Zugkraft-Anteil am Gewicht: $100 / 392{,}4 \\approx 25{,}5\\,\\%$. Bei $\\mu = 0{,}255$ ist genau diese Zugkraft nötig. ✓

**Typischer Fehler:** $\\mu = F_Z / m$ rechnen (Erdbeschleunigung vergessen): $100/40 = 2{,}5$ — unmöglich, weil $\\mu$ in der Praxis fast nie über $1{,}5$ liegt. Immer $F_N = mg$ (mit $g$!) benutzen.`,
        [
          '$F_Z = F_R$ im gerade-noch-überwindbaren Fall.',
          '$F_R = \\mu \\cdot mg$.',
          'Nach $\\mu$ auflösen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['coulomb'] },
      ),
      mc(
        'Studierender berechnet die Reibkraft eines $50$-kg-Blocks auf horizontalem Boden mit $\\mu = 0{,}3$ als $F_R = \\mu \\cdot m = 0{,}3 \\cdot 50 = 15$. Welche Einheit hat dieses Ergebnis und wo steckt der Fehler?',
        [
          'Das Ergebnis hat Einheit kg (weil $\\mu$ dimensionslos × Masse). Korrekt: $F_R = \\mu \\cdot mg = 0{,}3 \\cdot 50 \\cdot 9{,}81 \\approx 147{,}2\\,\\text{N}$ — Erdbeschleunigung $g$ vergessen.',
          'Stimmt — Reibkräfte werden in kg gemessen, das Ergebnis ist physikalisch korrekt.',
          'Der Reibwert wäre $0{,}03$ statt $0{,}3$ — Faktor-10-Fehler bei der Eingabe.',
          'Es muss $F_R = m/\\mu = 166{,}7$ heißen — Reibwert steht im Nenner.',
        ],
        0,
        `**Ansatz:** Coulombsches Reibgesetz: $F_R = \\mu\\cdot F_N$. Auf horizontalem Boden: $F_N = mg$. Einheitencheck mitführen.

**Rechnung:** $F_N = 50\\cdot 9{,}81 = 490{,}5\\,\\text{N}$. $F_R = 0{,}3\\cdot 490{,}5 \\approx 147{,}2\\,\\text{N}$. Der Studierende hat $g$ weggelassen und $\\mu\\cdot m$ gerechnet — das liefert eine Größe mit Einheit kg, kein Newton.

**Probe:** Einheitencheck: $[\\mu] = $ dimensionslos, $[m] = \\text{kg}$, $[F_R]$ soll Newton sein. $[\\mu\\cdot m] = \\text{kg}$, nicht N. Erst $\\mu\\cdot mg$ liefert die richtige Einheit ($\\text{kg}\\cdot\\text{m/s}^2 = \\text{N}$).

**Typischer Fehler:** $g$ in Reibrechnungen vergessen. Merksatz: "Reibung verlangt **Kraft**, nicht Masse" — also immer mit $g$ multiplizieren.`,
        [
          'Welche Einheit hat $\\mu \\cdot m$?',
          'Reibgesetz braucht eine Kraft, nicht eine Masse.',
          '$F_N = m\\cdot g$ erst, dann $F_R = \\mu\\cdot F_N$.',
        ],
        {
          1: 'Reibkraft ist eine Kraft (Newton), nicht eine Masse (kg). Einheitencheck schlägt fehl.',
          2: 'Reibwert wurde laut Aufgabe mit $0{,}3$ angegeben. Der Fehler steckt nicht in $\\mu$, sondern im fehlenden $g$.',
          3: 'Die Coulomb-Formel ist multiplikativ ($F_R = \\mu F_N$), nicht reziprok. Verkleinerung von $F_N$ verkleinert $F_R$ — nicht umgekehrt.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['coulomb'] },
      ),
    ],

    // ── [1] Haftreibung > Gleitreibung ──────────────────────────────────
    1: [
      tf(
        'Um einen ruhenden Körper in Bewegung zu setzen, muss die aufgebrachte Kraft die Haftreibung $\\mu_0 F_N$ überschreiten — sobald der Körper gleitet, reicht die geringere Gleitreibung $\\mu F_N$.',
        true,
        `**Ansatz:** Haftreibwert $\\mu_0$ gilt für den ruhenden Körper (bis zum Losreißen). Sobald der Körper gleitet, sinkt der effektive Reibwert auf den Gleitreibwert $\\mu < \\mu_0$.

**Rechnung:** Maximale Haftkraft $F_{H,\\text{max}} = \\mu_0 F_N$ ist die Schwelle. Darüber: Körper löst sich, Reibung fällt auf $\\mu F_N$.

**Probe:** Klassische Erfahrung: Einen schweren Schrank anschieben erfordert zunächst kraftvolles Drücken, dann gleitet er mit weniger Kraft. Genau $\\mu_0 > \\mu$ beschreibt das.

**Typischer Fehler:** Einen einzigen "Reibwert" annehmen. In Prüfungen wird oft **beides** gefragt: Losreißkraft (Haft) und Gleitreibkraft — mit unterschiedlichen $\\mu$-Werten.`,
        [
          'Welcher Reibwert gilt vor, welcher nach dem Losreißen?',
          'Vergleiche $\\mu_0$ und $\\mu$.',
          'Alltagsbeispiel: schwerer Schrank anschieben.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['haft-gleit'] },
      ),
      ni(
        'Ein Block (m = 20 kg) auf horizontalem Boden hat Haftreibwert $\\mu_0 = 0{,}35$ und Gleitreibwert $\\mu = 0{,}25$. Welche Zugkraft ist **minimal nötig**, um den Block in Bewegung zu setzen? ($g = 9{,}81$, auf 1 Nachkommastelle in N)',
        68.7, 0.2, 'N',
        `**Ansatz:** Zum Losreißen muss die Zugkraft die maximale Haftreibung überschreiten: $F_Z > \\mu_0 F_N$. An der Grenze gilt Gleichheit.

**Rechnung:** $F_N = mg = 20 \\cdot 9{,}81 = 196{,}2\\,\\text{N}$. $F_{Z,\\text{min}} = \\mu_0 \\cdot F_N = 0{,}35 \\cdot 196{,}2 \\approx 68{,}67\\,\\text{N}$.

**Probe:** Nach dem Losreißen genügt $\\mu \\cdot F_N = 0{,}25 \\cdot 196{,}2 \\approx 49{,}05\\,\\text{N}$ zum Gleiterhalten — deutlich weniger. Deshalb kann ein Körper ruckartig starten und dann gleichmäßig gleiten.

**Typischer Fehler:** Den Gleitreibwert $\\mu = 0{,}25$ nehmen und $49{,}05\\,\\text{N}$ angeben — das wäre nicht genug, um ihn überhaupt in Bewegung zu bringen. Losreißen braucht **Haftreibwert**.`,
        [
          'Welcher Reibwert gilt für den ruhenden Körper?',
          '$F_{Z,\\text{min}} = \\mu_0 \\cdot F_N$.',
          '$F_N = m \\cdot g$ auf horizontalem Boden.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['haft-gleit'] },
      ),
      mc(
        'Ein Block steht still. Ein waagerechter Zug $F_Z = 30\\,\\text{N}$ wirkt, während die maximale Haftreibung $\\mu_0 F_N = 50\\,\\text{N}$ beträgt. Wie groß ist die Reibkraft gerade jetzt?',
        ['$30\\,\\text{N}$ (entgegen $F_Z$)', '$50\\,\\text{N}$ (maximale Haft)', '$\\mu F_N$ (Gleitreibung)', '$0\\,\\text{N}$ (keine Bewegung)'],
        0,
        `**Ansatz:** Haftreibung ist eine **passive Zwangskraft** — sie stellt sich gerade so ein, dass Gleichgewicht herrscht, **solange** sie nicht ihre Obergrenze $\\mu_0 F_N$ überschreitet.

**Rechnung:** Da $F_Z = 30\\,\\text{N} < 50\\,\\text{N} = F_{H,\\text{max}}$, bleibt der Block stehen. Reibkraft $= F_Z = 30\\,\\text{N}$ (entgegengerichtet). Sie schöpft die maximal mögliche Haftreibung **nicht aus**.

**Probe:** Kräftegleichgewicht horizontal: $F_Z - F_R = 0$. Die Haftreibung passt sich an. Erst bei $F_Z > 50\\,\\text{N}$ setzt Bewegung ein.

**Typischer Fehler:** Annehmen, Reibkraft sei immer $\\mu_0 F_N$ (also $50\\,\\text{N}$). Das ist die **Obergrenze**, nicht der aktuelle Wert. Wenn kein Zug wirkt, ist die Reibkraft $0$, nicht $50\\,\\text{N}$.`,
        [
          'Ist Haftreibung immer maximal, oder situationsabhängig?',
          'Gleichgewichtsbedingung horizontal.',
          'Haftreibung ist passiv: passt sich Zugkraft an, bis die Grenze erreicht ist.',
        ],
        {
          1: '$50\\,\\text{N}$ ist die **Maximalkraft** der Haftreibung. Aktuell wirkt nur $30\\,\\text{N}$ Zug — Reibung gleicht exakt aus, nicht mehr.',
          2: 'Gleitreibung gilt nur, wenn der Körper gleitet. Hier ruht er (weil $F_Z < F_{H,\\text{max}}$).',
          3: 'Ohne Reibung würde der Block schon bei kleinster Kraft rutschen. Die Reibung wirkt aktiv — sie ist $30\\,\\text{N}$, nicht null.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['haft-gleit'] },
      ),
      sorting(
        'Bei wachsender Zugkraft $F_Z$ auf einen ruhenden Körper — bringe die Phasen in die richtige Reihenfolge.',
        [
          'Phase 1: $F_Z$ klein — Körper ruht, Haftreibung $F_R = F_Z$ (passive Anpassung)',
          'Phase 2: $F_Z$ erreicht $\\mu_0 F_N$ — Haftreibung am Maximum, Körper steht noch',
          'Phase 3: $F_Z$ überschreitet $\\mu_0 F_N$ — Losreißen, Körper beginnt zu gleiten',
          'Phase 4: Körper gleitet — Reibung fällt auf $\\mu F_N < \\mu_0 F_N$ (Sprung nach unten)',
          'Phase 5: $F_Z - \\mu F_N > 0$ bewirkt Beschleunigung nach Newton: $a = (F_Z - \\mu F_N)/m$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Der Übergang Haft → Gleit ist kein stetiger Prozess: Am Losreißpunkt springt die Reibkraft von $\\mu_0 F_N$ auf $\\mu F_N$.

**Rechnung:** Genau in dem Moment des Losreißens führt der Reibkraftabfall dazu, dass bei gleichbleibender $F_Z$ plötzlich eine Netto-Beschleunigung entsteht — der Körper "springt" los.

**Probe:** Diesen Sprung spürt man beim Anschieben schwerer Möbel: erst widerständig, dann plötzlich leichter. Physikalisch der $\\mu_0 \\to \\mu$-Sprung.

**Typischer Fehler:** Phase 3 als stetigen Übergang zeichnen — falsch. In Realität ist das ein Unstetigkeitssprung in $F_R(t)$.`,
        [
          'Vor Losreißen: Haftreibung $\\leq \\mu_0 F_N$, passt sich an.',
          'Bei Losreißen: Reibwert fällt auf $\\mu < \\mu_0$.',
          'Nach Losreißen: Newton bestimmt Beschleunigung.',
        ],
        { stage: 'apply-guided', subGoal: 1, uses: ['haft-gleit'] },
      ),
      matching(
        'Ordne jedem Zustand den zutreffenden Reibwert zu.',
        [
          { left: 'Ruhender Körper, Zugkraft < Grenzwert', right: 'Haftreibung, aktuell $F_R = F_Z < \\mu_0 F_N$' },
          { left: 'Körper kurz vor Losreißen', right: 'Haftreibung am Maximum: $F_R = \\mu_0 F_N$' },
          { left: 'Körper gleitet bereits', right: 'Gleitreibung: $F_R = \\mu F_N < \\mu_0 F_N$' },
          { left: 'Körper rollt (z.B. Kugel ohne Schlupf)', right: 'Rollreibung: meist deutlich kleiner als Gleitreibung' },
        ],
        `**Ansatz:** Reibungszustände unterscheiden sich qualitativ: Haft (passiv, variable Größe), Haft am Maximum (kritische Kraft), Gleit (kinetisch, fest), Roll (besonderer Fall).

**Rechnung:** Größenordnung $\\mu_{\\text{roll}} \\ll \\mu \\approx \\mu_0$ ist der Grund, weshalb Räder und Kugellager in Maschinen eingesetzt werden — sie eliminieren den Gleitreibungs-Anteil fast vollständig.

**Probe:** Beispiel Autoreifen: Solange Rad nicht blockiert, herrscht Rollreibung; beim Blockieren (ABS-Aus) springt es in Gleitreibung, Bremsweg verlängert sich deutlich.

**Typischer Fehler:** Rollreibung und Gleitreibung verwechseln. Rollreibung gilt nur, wenn kein Schlupf auftritt.`,
        [
          'Vor Losreißen: passive Haft.',
          'Am Losreißpunkt: Haft am Maximum.',
          'Nach Losreißen: Gleitreibung.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['haft-gleit'] },
      ),
      mc(
        'An einem ruhenden Block ($F_N = 200\\,\\text{N}$, $\\mu_0 = 0{,}5$, $\\mu = 0{,}3$) greift horizontal eine Zugkraft $F = 80\\,\\text{N}$ an. Welche Aussage stimmt?',
        [
          'Block bleibt in Ruhe; aktuelle Reibkraft = $80\\,\\text{N}$ (passive Anpassung, weil $80 < \\mu_0 F_N = 100$).',
          'Block beginnt zu gleiten; Reibkraft = $\\mu F_N = 60\\,\\text{N}$.',
          'Block bleibt in Ruhe; Reibkraft = $\\mu_0 F_N = 100\\,\\text{N}$ (immer Maximum).',
          'Block bleibt in Ruhe; Reibkraft = $\\mu F_N = 60\\,\\text{N}$ (Gleitreibung gilt auch im Stillstand).',
        ],
        0,
        `**Ansatz:** Erst Schwellenwert prüfen: $F_{H,\\max} = \\mu_0\\cdot F_N$. Wenn $F < F_{H,\\max}$, bleibt der Block stehen und Haftreibung ist **passiv** = $F$.

**Rechnung:** $F_{H,\\max} = 0{,}5\\cdot 200 = 100\\,\\text{N}$. $F = 80\\,\\text{N} < 100\\,\\text{N}$ ⇒ Block ruht. Aktuelle Reibkraft $= F = 80\\,\\text{N}$ (Gleichgewicht horizontal: $F - F_R = 0$).

**Probe:** Bei $F = 100\\,\\text{N}$ (genau Schwelle): Reibkraft am Maximum. Bei $F = 110\\,\\text{N}$: Block reißt los, Reibkraft fällt auf Gleitwert $0{,}3\\cdot 200 = 60\\,\\text{N}$.

**Typischer Fehler:** Annahme, Reibkraft sei **immer** $\\mu_0 F_N$. Falsch — das ist die Obergrenze. Die aktuelle Haftreibung passt sich der angreifenden Kraft an.`,
        [
          'Schwellenwert: $\\mu_0 F_N$.',
          'Solange $F < \\mu_0 F_N$: Block ruht, Reibung passt sich an.',
          '$F_R = F$ (Gleichgewicht).',
        ],
        {
          1: '$F = 80 < 100 = F_{H,\\max}$ — Block bleibt in Ruhe, kein Gleiten. Gleitreibung greift erst nach Losreißen.',
          2: '$\\mu_0 F_N$ ist die **Maximalkraft**, nicht die aktuelle Haftreibung. Im konkreten Fall passt sie sich auf $80\\,\\text{N}$ an.',
          3: 'Gleitreibung gilt nur, wenn der Körper tatsächlich gleitet. Im Stillstand wirkt Haftreibung mit dem aktuellen Wert (hier $80\\,\\text{N}$).',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['haft-gleit'] },
      ),
      mc(
        'Studentin schreibt: "Bei einem Holzklotz auf einem Tisch beträgt die Reibkraft im Stillstand immer $\\mu_0 F_N$." Wo steckt der Fehler?',
        [
          'Im Stillstand stellt sich die Haftreibung **passiv** auf den Wert ein, der zur Haltung nötig ist. $\\mu_0 F_N$ ist die **Maximalkraft**, nicht die aktuelle. Ohne angreifende Zugkraft ist $F_R = 0$.',
          'Stimmt — im Ruhezustand zieht $\\mu_0 F_N$ den Klotz immer in eine bevorzugte Richtung.',
          'Es fehlt der Reibwinkel — korrekt wäre $F_R = \\mu_0 F_N \\sin\\rho$.',
          'Die Aussage gilt nur bei rauen Oberflächen.',
        ],
        0,
        `**Ansatz:** Haftreibung ist eine Zwangskraft — sie reagiert auf die angreifende Zugkraft, **nicht** unabhängig.

**Rechnung:** Liegt ein Klotz frei auf einem Tisch ohne horizontale Last: $\\sum F_x = 0 \\Rightarrow F_R = 0$. Maximalwert $\\mu_0 F_N$ wird nur **erreicht**, wenn die Zugkraft genau diesen Wert hat.

**Probe:** Anschaulich: Ein Klotz auf einem Tisch, niemand zieht — er wandert nicht spontan in eine Richtung. Folge: $F_R = 0$.

**Typischer Fehler:** Aktive vs. passive Kraft verwechseln. Haftreibung ist passiv (reaktiv), nicht aktiv. Erst Coulomb-Maximum bei Schwelle.`,
        [
          'Haftreibung passiv, nicht aktiv.',
          '$\\mu_0 F_N$ = Obergrenze.',
          'Ohne Zugkraft: $F_R = 0$.',
        ],
        {
          1: 'Haftreibung erzeugt **keine eigene Bewegung** — sie reagiert nur. Ein Klotz auf einem Tisch wandert nicht von alleine.',
          2: 'Reibwinkel $\\rho$ tritt in dieser Formel nicht auf. Coulomb-Reibung ist $F_R \\leq \\mu_0 F_N$, ohne $\\sin\\rho$.',
          3: 'Die Aussage stimmt **gar nicht** — auch bei rauen Oberflächen ist die aktuelle Haftreibung im Stillstand kleiner als $\\mu_0 F_N$, solange keine Zugkraft anliegt.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['haft-gleit'] },
      ),
      mc(
        'Ein Auto bremst mit blockierten Rädern (Gleitreibung $\\mu \\approx 0{,}5$). Mit ABS bleibt das Rad knapp unterhalb der Haftgrenze (Haftreibung $\\mu_0 \\approx 0{,}8$). Wie verhält sich der **ABS-Bremsweg** zum **blockierten** Bremsweg?',
        [
          'ABS-Bremsweg $\\approx 5/8 \\cdot s_\\text{blockiert} = 0{,}625\\cdot s_\\text{blockiert}$ (kürzer, weil $\\mu_0 > \\mu$).',
          'ABS-Bremsweg ist $1{,}6\\times s_\\text{blockiert}$ (länger).',
          'Identischer Bremsweg — ABS verbessert nur die Lenkbarkeit.',
          'ABS verlängert den Bremsweg, weil das Rad nicht voll greift.',
        ],
        0,
        `**Ansatz:** Bremsweg-Formel: $s = v^2/(2\\mu g)$ — umgekehrt proportional zum effektiven Reibwert.

**Rechnung:** $s_\\text{ABS}/s_\\text{blockiert} = \\mu/\\mu_0 = 0{,}5/0{,}8 = 0{,}625$. Bei $80\\,\\text{km/h}$ ($\\approx 22{,}2\\,\\text{m/s}$) und blockierten Rädern $s = 22{,}2^2/(2\\cdot 0{,}5\\cdot 9{,}81) \\approx 50{,}3\\,\\text{m}$, mit ABS $\\approx 31{,}4\\,\\text{m}$.

**Probe:** Realität: ABS-Effekt ist signifikant (20-40 % kürzer), zusätzlich bleibt das Auto lenkbar — kombinierter Vorteil.

**Typischer Fehler:** Annahme, dass blockierte Räder "härter" bremsen — aber Gleitreibung ist immer kleiner als Haftreibung, also weniger Bremskraft, längerer Weg.`,
        [
          'Bremsweg $\\propto 1/\\mu$.',
          'ABS hält $\\mu$ nahe $\\mu_0$ (Haft).',
          '$\\mu/\\mu_0 = 0{,}5/0{,}8$.',
        ],
        {
          1: 'Falsche Richtung: ABS-Bremsweg ist **kürzer**, nicht länger. $\\mu_0 > \\mu \\Rightarrow$ größere Bremskraft $\\Rightarrow$ kürzerer Weg.',
          2: 'ABS verbessert tatsächlich beides: Bremsweg UND Lenkbarkeit. Beide Vorteile durch denselben Effekt (Vermeidung des Blockierens).',
          3: 'Falsch — der Begriff "voll greift" ist irreführend. Maximale Bremskraft entsteht bei knapp unterhalb der Haftgrenze, nicht beim Blockieren.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['haft-gleit'] },
      ),
    ],

    // ── [2] Geneigte Ebene: $F_N = mg\cos\alpha$, $F_H = mg\sin\alpha$ ──
    2: [
      ni(
        'Ein Körper (m = 10 kg) liegt auf einer geneigten Ebene mit $\\alpha = 20°$. Wie groß ist die Normalkraft? ($g = 9{,}81$, auf 2 Nachkommastellen in N)',
        92.18, 0.1, 'N',
        `**Ansatz:** Zerlegung der Gewichtskraft $mg$ in Komponenten: senkrecht zur Ebene (Normalkraft) und parallel (Hangabtrieb). Normalkraft $F_N = mg\\cos\\alpha$.

**Rechnung:** $F_N = 10 \\cdot 9{,}81 \\cdot \\cos 20° = 98{,}1 \\cdot 0{,}9397 \\approx 92{,}18\\,\\text{N}$.

**Probe:** Grenzfall $\\alpha = 0°$: $\\cos 0° = 1$, $F_N = mg = 98{,}1\\,\\text{N}$ (horizontale Fläche). Grenzfall $\\alpha = 90°$: $\\cos 90° = 0$, $F_N = 0$ (senkrechte Wand, Körper fällt frei). ✓

**Typischer Fehler:** Sinus und Cosinus vertauschen: $mg\\sin\\alpha = 33{,}55\\,\\text{N}$ angeben. Merke: Bei $\\alpha = 0°$ muss $F_N$ maximal sein (= $mg$). Nur $\\cos$ erfüllt das ($\\cos 0° = 1$).`,
        [
          'Zerlege die Gewichtskraft in Komponenten zur Ebene.',
          'Welche Winkelfunktion liefert den senkrechten Anteil?',
          'Merkregel: Bei $\\alpha = 0°$ muss $F_N = mg$ sein → $\\cos$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['schiefe-zerleg-mech'] },
      ),
      ni(
        'Gleicher Körper (m = 10 kg) auf $\\alpha = 20°$ Ebene. Wie groß ist die Hangabtriebskraft? (auf 2 Nachkommastellen in N)',
        33.55, 0.1, 'N',
        `**Ansatz:** Hangabtrieb $F_H$ = Komponente der Gewichtskraft **entlang** der Ebene abwärts. $F_H = mg\\sin\\alpha$.

**Rechnung:** $F_H = 10 \\cdot 9{,}81 \\cdot \\sin 20° = 98{,}1 \\cdot 0{,}342 \\approx 33{,}55\\,\\text{N}$.

**Probe:** Grenzfall $\\alpha = 0°$: $\\sin 0° = 0$, $F_H = 0$ (horizontale Fläche, kein Hangabtrieb). ✓ Grenzfall $\\alpha = 90°$: $\\sin 90° = 1$, $F_H = mg$ (freier Fall entlang senkrechter Richtung). ✓

**Probe Pythagoras:** $F_H^2 + F_N^2 = 33{,}55^2 + 92{,}18^2 = 1125{,}6 + 8497{,}2 = 9622{,}8 \\approx (mg)^2 = 98{,}1^2 = 9623{,}6$. ✓

**Typischer Fehler:** Den Winkel zwischen Gewichtskraft und Ebene falsch messen. Korrekt: $\\alpha$ ist der Neigungswinkel der Ebene zur Horizontalen — derselbe Winkel taucht im Zerlegungsdreieck wieder auf (Wechselwinkel).`,
        [
          'Welche Richtung hat der Hangabtrieb?',
          '$F_H = mg \\sin\\alpha$.',
          'Bei $\\alpha = 0°$ muss $F_H = 0$ sein → $\\sin$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['schiefe-zerleg-mech'] },
      ),
      mc(
        'Wieso taucht **derselbe Winkel** $\\alpha$ im Zerlegungsdreieck des Gewichtsvektors auf wie der Neigungswinkel der Ebene?',
        [
          'Wechselwinkel: zwei parallele Linien (Gewichtsrichtung vertikal, Normale zur Ebene) schneiden durch eine dritte Linie (Ebene) — Winkel auf der geneigten Seite sind gleich',
          'Nur Zufall, meistens ist er leicht anders',
          'Weil die Reibung den Winkel fixiert',
          'Weil das Gewicht immer senkrecht zur Ebene wirkt',
        ],
        0,
        `**Ansatz:** Geometrie der parallelen Linien. Die Gewichtsrichtung ist vertikal, die Normale zur Ebene steht senkrecht zur Ebene. Der Winkel zwischen Gewichtsvektor und Normale ist gleich dem Neigungswinkel $\\alpha$ (Wechsel-/Stufenwinkel).

**Rechnung:** Formal: Die Ebene hat Neigung $\\alpha$ zur Horizontalen. Ihre Normale hat dieselbe Neigung $\\alpha$ zur Vertikalen. Gewichtsvektor zeigt entlang der Vertikalen → Winkel zwischen Gewicht und Normale ist $\\alpha$.

**Probe:** Skizze anfertigen: geneigte Ebene, Gewichtsvektor senkrecht nach unten, Normalen-Komponente entlang Normale, Hangabtrieb entlang Ebene. Zerlegungsdreieck zeigt $\\alpha$ am Ausgangspunkt — nicht zufällig, sondern geometrisch notwendig.

**Typischer Fehler:** "Winkel einfach einsetzen" ohne die Geometrie zu verstehen — führt bei komplexeren Szenarien (Schnürung, Rolle auf Ebene) zu Fehlern, weil die Winkelbeziehung nicht richtig abgeleitet wird.`,
        [
          'Zeichne die Ebene, die Vertikale (Gewichtsrichtung) und die Normale.',
          'Betrachte die beiden Dreiecke: geneigte Ebene und Zerlegungsdreieck.',
          'Wechsel-/Stufenwinkel an parallelen Linien.',
        ],
        {
          1: 'Der Winkel ist geometrisch exakt gleich — nicht zufällig, nicht ungefähr.',
          2: 'Reibung hat nichts mit dem Zerlegungsdreieck zu tun — die Zerlegung gilt auch ohne Reibung.',
          3: 'Die **Normalkraft** wirkt senkrecht zur Ebene, nicht die **Gewichtskraft**. Gewicht ist immer vertikal (entlang Schwerkraft).',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['schiefe-zerleg-mech'] },
      ),
      tf(
        'Für einen reibungsfreien Körper auf geneigter Ebene ergibt sich die Beschleunigung zu $a = g\\sin\\alpha$ — unabhängig von der Masse.',
        true,
        `**Ansatz:** Ohne Reibung wirkt nur der Hangabtrieb $F_H = mg\\sin\\alpha$. Nach Newton: $F = ma$, also $mg\\sin\\alpha = ma \\Rightarrow a = g\\sin\\alpha$.

**Rechnung:** $m$ kürzt sich auf beiden Seiten — die Beschleunigung hängt nicht von der Masse ab. Eine Feder und ein Elefant (ohne Luftwiderstand und Reibung) rutschen gleich schnell eine glatte Rampe hinunter.

**Probe:** Grenzfall $\\alpha = 0°$: $a = 0$ (horizontale Fläche, keine Beschleunigung). ✓ Grenzfall $\\alpha = 90°$: $a = g$ (freier Fall). ✓

**Typischer Fehler:** Masse im Ergebnis stehen lassen. Das verschlingt die wichtige physikalische Aussage "Beschleunigung ist massenunabhängig" (Äquivalenzprinzip).`,
        [
          'Newton: $F_{\\text{net}} = ma$. Ohne Reibung ist $F_{\\text{net}} = F_H$.',
          'Stelle nach $a$ um — was passiert mit $m$?',
          'Wenn $m$ auf beiden Seiten: kürzen.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['schiefe-zerleg-mech'] },
      ),
      sorting(
        'Bringe die Schritte der Reibungs-Analyse auf geneigter Ebene in die richtige Reihenfolge.',
        [
          'Freikörperbild: Körper auf Ebene mit Gewicht, Normalkraft, Reibkraft, evtl. Zugkraft',
          'Koordinatensystem wählen: Achse entlang der Ebene, senkrecht dazu',
          'Gewicht in Komponenten zerlegen: $mg\\sin\\alpha$ (parallel) und $mg\\cos\\alpha$ (senkrecht)',
          'Gleichgewicht senkrecht zur Ebene: $F_N = mg\\cos\\alpha$ bestimmen',
          'Coulomb-Bedingung parallel: $F_H$ mit $\\mu F_N$ vergleichen, entscheiden ob Haft/Gleit',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Strukturiertes Vorgehen: FKB, Koordinaten, Zerlegung, Gleichgewicht, Gleitbedingung.

**Rechnung:** Die Reihenfolge ist essentiell — das Koordinatensystem entlang der Ebene macht die Zerlegung einfach. Ohne diesen Schritt müsste man alle Kräfte im Welt-Koordinatensystem rechnen, was unnötig kompliziert wäre.

**Probe:** Im gedrehten System sind zwei Gleichungen entkoppelt: senkrecht $F_N = mg\\cos\\alpha$ (statisch, liefert $F_N$); parallel $F_H - F_R = ma$ (dynamisch, liefert $a$).

**Typischer Fehler:** Im Welt-Koordinatensystem rechnen und sin/cos permanent vermischen. Oder Reibkraft berechnen, bevor $F_N$ feststeht — dann steht $\\mu F_N$ ohne Zahl da.`,
        [
          'Erst Freikörperbild.',
          'Koordinatensystem entlang Ebene.',
          'Zerlegung, Gleichgewicht, Gleitentscheidung.',
        ],
        { stage: 'apply-guided', subGoal: 2, uses: ['schiefe-zerleg-mech'] },
      ),
      mc(
        'Studierender schreibt: "Auf einer geneigten Ebene mit $\\alpha = 30°$ ist die Normalkraft $F_N = mg\\sin 30° = 0{,}5\\,mg$." Wo steckt der Fehler?',
        [
          '$\\sin$ und $\\cos$ vertauscht — korrekt: $F_N = mg\\cos\\alpha$. Bei $\\alpha = 30°$: $F_N = mg\\cos 30° \\approx 0{,}866\\,mg$. Merkregel: $F_N$ muss bei $\\alpha = 0°$ gleich $mg$ sein, das erfüllt nur $\\cos$.',
          '$0{,}5\\,mg$ ist korrekt — bei $30°$ liefern $\\sin$ und $\\cos$ denselben Wert.',
          'Es fehlt der Faktor $\\mu_0$ — $F_N = \\mu_0 mg\\sin\\alpha$.',
          'Korrekt für ruhende Körper, falsch nur bei gleitenden.',
        ],
        0,
        `**Ansatz:** Geometrische Zerlegung des Gewichtsvektors: $F_N$ liegt **senkrecht** zur Ebene. Bei flachem $\\alpha$ ⇒ $F_N \\to mg$, bei steilem $\\alpha \\to 90°$ ⇒ $F_N \\to 0$. Diese Grenzfälle erfüllt **nur** $\\cos$.

**Rechnung:** $F_N = mg\\cos\\alpha$. Bei $\\alpha = 30°$: $F_N = mg\\cdot\\cos 30° = mg\\cdot 0{,}866$. Mit $\\sin$ wäre $F_N(0°) = 0$ — dann würde der Körper schweben, was offensichtlich falsch ist.

**Probe:** $\\sin 30° = 0{,}5$ und $\\cos 30° \\approx 0{,}866$ — **nicht gleich**. Die Werte unterscheiden sich um Faktor $\\sqrt 3 \\approx 1{,}73$.

**Typischer Fehler:** Sin/Cos-Verwechslung. Standardregel: Anliegender Winkel des rechtwinkligen Dreiecks $\\to \\cos$, gegenüberliegender $\\to \\sin$. Hier ist $\\alpha$ der Winkel zwischen Gewicht und Normale ⇒ $F_N = mg\\cos\\alpha$.`,
        [
          'Grenzfall $\\alpha = 0°$: $F_N = mg$.',
          'Welche Funktion erfüllt das?',
          '$\\cos 0° = 1$, $\\sin 0° = 0$.',
        ],
        {
          1: '$\\sin 30° = 0{,}5$ und $\\cos 30° \\approx 0{,}866$ sind **nicht** gleich — Verwechslung wäre folgenreich.',
          2: 'Reibwert $\\mu_0$ tritt erst bei der Reibungs-Bedingung auf, nicht in der Zerlegung. $F_N$ folgt rein geometrisch aus $\\cos\\alpha$.',
          3: 'Die geometrische Zerlegung gilt **unabhängig vom Bewegungszustand** — ob ruhend oder gleitend. Der Fehler ist universell.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['schiefe-zerleg-mech'] },
      ),
    ],

    // ── [3] Selbsthemmung: $\tan\alpha \leq \mu_0$ ──────────────────────
    3: [
      mc(
        'Ein Körper auf einer Ebene mit Haftreibwert $\\mu_0 = 0{,}4$. Bei welcher Neigung beginnt der Körper gerade zu rutschen?',
        ['$\\alpha = 21{,}8°$', '$\\alpha = 40°$', '$\\alpha = 66{,}4°$', '$\\alpha = 90°$'],
        0,
        `**Ansatz:** Selbsthemmung bricht zusammen, wenn $\\tan\\alpha = \\mu_0$. Grenzfall: $\\tan\\alpha_{\\text{krit}} = \\mu_0 \\Rightarrow \\alpha_{\\text{krit}} = \\arctan(\\mu_0)$.

**Rechnung:** $\\alpha = \\arctan(0{,}4) \\approx 21{,}80°$.

**Probe:** Kräftebilanz in der Ebene: $mg\\sin\\alpha \\leq \\mu_0 mg\\cos\\alpha \\Leftrightarrow \\tan\\alpha \\leq \\mu_0$. Bei $\\alpha = 21{,}8°$ gilt Gleichheit — kritischer Grenzfall.

**Typischer Fehler:** $\\mu_0$ direkt als Winkel interpretieren und $\\alpha = 0{,}4 \\cdot 90° = 36°$ rechnen oder $\\alpha = 40°$ (aus $\\mu_0 = 0{,}4$ als Prozent des rechten Winkels) — beides physikalisch sinnlos. Die $\\arctan$-Beziehung ist nötig.`,
        [
          'Stelle die Selbsthemmbedingung $\\tan\\alpha \\leq \\mu_0$ am Grenzfall auf.',
          '$\\tan\\alpha_{\\text{krit}} = \\mu_0$.',
          '$\\alpha_{\\text{krit}} = \\arctan(\\mu_0)$.',
        ],
        {
          1: '$\\alpha = 40°$ entspräche $\\mu_0 = \\tan 40° \\approx 0{,}84$ — doppelt so hoch wie gegeben.',
          2: '$66{,}4°$ wäre der Winkel mit $\\cos 66{,}4° \\approx 0{,}4$ — falscher Bezug. Selbsthemmung nutzt $\\tan$, nicht $\\cos$.',
          3: '$90°$ ist die senkrechte Wand — da rutscht jeder Körper unabhängig von $\\mu_0$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['selbsthemmung'] },
      ),
      ni(
        'Ein Keil mit Neigung $\\alpha = 10°$ klemmt ein Werkstück gegen eine Wand. Wie groß muss $\\mu_0$ **mindestens** sein, damit der Keil nicht herausrutscht? (auf 3 Nachkommastellen)',
        0.176, 0.002, '',
        `**Ansatz:** Selbsthemmung am Keil: Der Keil hält nur, wenn die Rückstellkraft die Haftreibung nicht überschreitet. Grenzfall: $\\tan\\alpha \\leq \\mu_0$.

**Rechnung:** $\\mu_{0,\\text{min}} = \\tan 10° = 0{,}17633$. Jeder höhere Haftreibwert reicht aus.

**Probe:** Bei $\\mu_0 = 0{,}2 > 0{,}176$ ist die Selbsthemmung gegeben. Bei $\\mu_0 = 0{,}1 < 0{,}176$ rutscht der Keil heraus — er muss aktiv gehalten werden.

**Typischer Fehler:** $\\sin$ oder $\\cos$ statt $\\tan$ nehmen und $\\mu_0 \\approx 0{,}174$ (sin) oder $\\approx 0{,}985$ (cos) angeben. Die Faustregel ist $\\tan$, weil beide Komponenten $mg\\sin\\alpha$ und $mg\\cos\\alpha$ durcheinander geteilt werden.`,
        [
          '$\\tan\\alpha \\leq \\mu_0$ ist die Selbsthemmbedingung.',
          'Grenzfall: Gleichheit.',
          '$\\mu_0 = \\tan\\alpha = \\tan 10°$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['selbsthemmung'] },
      ),
      tf(
        'Die Selbsthemmung-Grenze ist massenunabhängig: ob ein 1-kg-Block oder ein 1-Tonnen-Block, die kritische Neigung ist dieselbe.',
        true,
        `**Ansatz:** Gleichgewicht parallel zur Ebene: $mg\\sin\\alpha \\leq \\mu_0 mg\\cos\\alpha$. Masse und $g$ kürzen sich. Übrig: $\\tan\\alpha \\leq \\mu_0$.

**Rechnung:** Formal: $\\frac{F_H}{F_N} = \\frac{mg\\sin\\alpha}{mg\\cos\\alpha} = \\tan\\alpha$. Nur Winkel und Reibwert übrig — $m, g$ aus.

**Probe:** Alltagserfahrung: Auf einer eisigen Straße rutscht ein LKW nicht eher als ein Fahrrad-Reifen (bei gleichen Pneumatiken). Rutschwinkel hängt nur vom Material.

**Typischer Fehler:** Meinen, schwere Körper rutschen leichter (wegen "höherer Gewichtskraft"). Die Normalkraft wächst im gleichen Verhältnis — die Selbsthemmung bleibt gleich.`,
        [
          'Stelle Hangabtrieb und maximale Haftkraft gleich.',
          'Was passiert mit $m$ und $g$?',
          'Bleibt eine rein geometrische Bedingung übrig.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['selbsthemmung'] },
      ),
      mc(
        'Ein Schraubgewinde ist **selbsthemmend**, wenn der Steigungswinkel kleiner als der Reibwinkel ist. Welches Gewinde garantiert sichere Fixierung ohne Kontermutter?',
        [
          'Steigungswinkel $\\alpha = 3°$, Reibwinkel $\\rho = 8°$ (fest, $\\alpha < \\rho$)',
          'Steigungswinkel $\\alpha = 10°$, Reibwinkel $\\rho = 5°$ (rutscht)',
          'Steigungswinkel $\\alpha = 20°$, Reibwinkel $\\rho = 15°$ (rutscht)',
          'Keines — jedes Gewinde rutscht irgendwann',
        ],
        0,
        `**Ansatz:** Selbsthemmung bei Gewinden: $\\alpha < \\rho$, wobei $\\rho = \\arctan\\mu_0$. Metrische Schrauben sind standardmäßig selbsthemmend ($\\alpha \\approx 2-3°$, $\\rho$ je nach Oberfläche $5-10°$).

**Rechnung:** Option A: $3° < 8°$ ✓ (hält fest). Option B und C: $\\alpha > \\rho$ — kein Selbsthemmen, Schraube dreht sich unter Last auf.

**Probe:** Deshalb sind Befestigungsschrauben flach geschnitten ($\\alpha$ klein), während schnelle Bewegungsschrauben (z.B. Werkzeug-Spindel) steiler sind und zusätzliche Sicherung brauchen.

**Typischer Fehler:** Meinen, jede Schraube hält ohne Sicherung. Unter Vibration (z.B. Motor) kann auch eine selbsthemmende Schraube durch Mikrobewegung aufdrehen — dann helfen Kontermutter, Loctite oder Federring.`,
        [
          'Selbsthemmung: Steigungswinkel $<$ Reibwinkel.',
          'Vergleiche $\\alpha$ und $\\rho$ in jedem Beispiel.',
          'Nur bei $\\alpha < \\rho$ hält die Schraube.',
        ],
        {
          1: '$10° > 5°$ — kein Selbsthemmen, Schraube rutscht auf.',
          2: '$20° > 15°$ — kein Selbsthemmen trotz größerem Reibwinkel, weil der Steigungswinkel noch höher ist.',
          3: 'Doch — bei $\\alpha < \\rho$ ist das Gewinde statisch selbsthemmend. Option A erfüllt das.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['selbsthemmung'] },
      ),
      sorting(
        'Bringe die Schritte der Selbsthemm-Prüfung für eine Förderband-Neigung in die richtige Reihenfolge.',
        [
          'Reibwerte recherchieren (Riemen / Paket-Oberfläche), besonders $\\mu_0$',
          'Kritische Neigung berechnen: $\\alpha_{\\text{krit}} = \\arctan(\\mu_0)$',
          'Vergleich: Ist Band-Neigung $\\alpha_{\\text{Band}} < \\alpha_{\\text{krit}}$?',
          'Bei Grenzfall: Sicherheitsfaktor einplanen (z.B. $\\alpha_{\\text{Band}} \\leq 0{,}7 \\cdot \\alpha_{\\text{krit}}$)',
          'Bei Überschreitung: Mitnehmer, Noppen-Riemen oder flachere Neigung planen',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Reibprüfung in der Praxis: Tabellenwerte, Grenzwinkel, Vergleich, Sicherheit, Alternative.

**Rechnung:** Sicherheitsfaktor notwendig, weil $\\mu_0$ stark streut (Feuchtigkeit, Staub, Alterung). Regel: 20-30 % Abstand zur Rutschgrenze.

**Probe:** Bei Förderbändern in Bergwerken oder Hafenanlagen werden typisch $15-18°$ verwendet, obwohl $\\mu_0 > 0{,}3$ und $\\alpha_{\\text{krit}} > 17°$ wäre.

**Typischer Fehler:** Nominalreibwerte aus Tabelle 1:1 verwenden ohne Sicherheitsfaktor — Überraschung bei Regen oder Öl.`,
        [
          'Erst Materialwerte, dann Geometrie.',
          'Dann Vergleich.',
          'Sicherheitsfaktor einplanen.',
        ],
        { stage: 'apply-guided', subGoal: 3, uses: ['selbsthemmung'] },
      ),
      mc(
        'Studierender behauptet: "Ein Körper mit $\\mu_0 = 0{,}3$ rutscht erst bei einer Neigung von $30°$ — weil $0{,}3 \\cdot 100° = 30°$." Wo steckt der Fehler?',
        [
          '$\\mu_0$ ist **nicht** ein Bruchteil der Neigungsskala. Korrekt: $\\alpha_\\text{krit} = \\arctan\\mu_0 = \\arctan 0{,}3 \\approx 16{,}7°$. Reibwert und kritischer Winkel sind durch $\\arctan$ verknüpft, nicht durch lineare Skalierung.',
          'Stimmt — der Reibwert in Prozent der vollen $90°$-Skala ergibt sinnvoll den kritischen Winkel.',
          'Korrekt wäre $\\mu_0 \\cdot 90° = 27°$ statt $30°$.',
          'Selbsthemmung gilt nur bei spezifischer Materialkombination — der Winkel ist nicht aus $\\mu_0$ berechenbar.',
        ],
        0,
        `**Ansatz:** Selbsthemm-Bedingung: $\\tan\\alpha \\leq \\mu_0$. Daraus $\\alpha_\\text{krit} = \\arctan\\mu_0$, **nicht** lineare Multiplikation.

**Rechnung:** $\\arctan 0{,}3 = 16{,}699° \\approx 16{,}7°$. Bei $\\alpha = 16{,}7°$ rutscht der Körper gerade an. Der "$30°$"-Wert wäre korrekt für $\\mu_0 = \\tan 30° \\approx 0{,}577$.

**Probe:** Sonderfälle: $\\mu_0 = 1 \\Rightarrow \\alpha_\\text{krit} = 45°$, $\\mu_0 = \\sqrt 3 \\Rightarrow \\alpha_\\text{krit} = 60°$. Nichtlineare Beziehung — markante Werte beweisen das.

**Typischer Fehler:** Lineare Verwechslung "Reibwert $\\Leftrightarrow$ Winkel". Die Beziehung ist trigonometrisch ($\\arctan$), nicht linear.`,
        [
          'Selbsthemmungsbedingung: $\\tan\\alpha \\leq \\mu_0$.',
          'Auflösen: $\\alpha = \\arctan\\mu_0$.',
          '$\\arctan 0{,}3 \\neq 30°$.',
        ],
        {
          1: 'Lineare Skalierung von $\\mu_0$ auf $90°$ ist physikalisch sinnlos — die Beziehung folgt aus Trigonometrie, nicht aus Skalierung.',
          2: '$\\mu_0\\cdot 90° = 27°$ ist auch lineare Skalierung — falscher Ansatz, nur eine andere falsche Zahl.',
          3: 'Doch — $\\alpha_\\text{krit}$ ist genau aus $\\mu_0$ berechenbar, mittels $\\arctan$. Die Materialkombination geht nur durch $\\mu_0$ ein.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['selbsthemmung'] },
      ),
      ni(
        'Eine Werkbank-Spannvorrichtung soll mit einem Keil ($\\alpha = 8°$) ein Werkstück fixieren. Welcher minimale Haftreibwert $\\mu_0$ ist nötig, damit der Keil im Betrieb durch Erschütterungen nicht herausrutscht (Selbsthemmung)? (auf 3 Nachkommastellen)',
        0.141, 0.002, '',
        `**Ansatz:** Selbsthemm-Bedingung: $\\tan\\alpha \\leq \\mu_0$. Im Grenzfall: $\\mu_{0,\\min} = \\tan\\alpha$.

**Rechnung:** $\\mu_{0,\\min} = \\tan 8° \\approx 0{,}1405 \\approx 0{,}141$.

**Probe:** Bei $\\mu_0 = 0{,}15 > 0{,}141$ ist Selbsthemmung gegeben. Bei $\\mu_0 = 0{,}10 < 0{,}141$ rutscht der Keil. Konkret: Stahl auf Stahl ($\\mu_0 \\approx 0{,}15$) ist gerade noch ausreichend; Schmierung verringert $\\mu_0$ und gefährdet die Selbsthemmung.

**Typischer Fehler:** $\\sin 8°$ statt $\\tan 8°$ verwenden ($\\sin 8° \\approx 0{,}139$, nahe aber nicht gleich). Bei flachen Winkeln ist die Differenz klein, bei steilen Keilen aber signifikant.`,
        [
          'Selbsthemmung: $\\tan\\alpha \\leq \\mu_0$.',
          'Grenzfall: $\\mu_{0,\\min} = \\tan\\alpha$.',
          '$\\tan 8° \\approx 0{,}141$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['selbsthemmung'] },
      ),
    ],

    // ── [4] Reibwinkel $\rho = \arctan\mu$ ──────────────────────────────
    4: [
      ni(
        'Ein Material hat Haftreibwert $\\mu_0 = 0{,}577$. Wie groß ist der Reibwinkel $\\rho$? (in Grad, auf ganze Zahlen)',
        30, 0.5, '°',
        `**Ansatz:** Reibwinkel $\\rho = \\arctan(\\mu_0)$.

**Rechnung:** $\\rho = \\arctan(0{,}577) \\approx 30{,}0°$ (wegen $\\tan 30° = 1/\\sqrt{3} \\approx 0{,}577$).

**Probe:** Erkennbares Sonderverhältnis: $\\tan 30° = \\sqrt{3}/3 \\approx 0{,}577$. Umgekehrt liefert $\\arctan$ genau $30°$.

**Typischer Fehler:** Gradmodus und Bogenmaß verwechseln — Rechner auf RAD gibt $\\arctan(0{,}577) \\approx 0{,}524\\,\\text{rad}$. Vor dem Ablesen Einheit prüfen.`,
        [
          'Definition Reibwinkel.',
          '$\\rho = \\arctan\\mu_0$.',
          'Rechner auf DEG stellen.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['reibwinkel'] },
      ),
      matching(
        'Ordne jedem Haftreibwert den zugehörigen Reibwinkel zu.',
        [
          { left: '$\\mu_0 = 0{,}2$', right: '$\\rho \\approx 11{,}3°$' },
          { left: '$\\mu_0 = 0{,}5$', right: '$\\rho \\approx 26{,}6°$' },
          { left: '$\\mu_0 = 1{,}0$', right: '$\\rho = 45°$' },
          { left: '$\\mu_0 = \\sqrt{3} \\approx 1{,}73$', right: '$\\rho = 60°$' },
        ],
        `**Ansatz:** $\\rho = \\arctan(\\mu_0)$ — monotone Funktion. Größerer Reibwert ⇔ größerer Reibwinkel.

**Rechnung:** Markante Werte auswendig: $\\tan 30° \\approx 0{,}577$, $\\tan 45° = 1$, $\\tan 60° = \\sqrt{3} \\approx 1{,}73$. Zwischenwerte durch $\\arctan$ mit Rechner.

**Probe:** $\\mu_0 = 1$ entspricht $\\rho = 45°$ — das bedeutet: bei einer Neigung von $45°$ rutscht der Körper gerade dann, wenn Haft- und Hangabtriebskraft gleich groß sind. Anschaulicher Grenzfall.

**Typischer Fehler:** $\\rho$ als linear in $\\mu_0$ annehmen. Die Beziehung ist nichtlinear, aber monoton. Insbesondere: $\\mu_0 \\geq 1$ ist möglich (z.B. Gummi/Gummi) und liefert $\\rho \\geq 45°$.`,
        [
          '$\\rho = \\arctan\\mu_0$.',
          'Auswendige Paare: $(1, 45°)$, $(\\sqrt{3}, 60°)$, $(1/\\sqrt{3}, 30°)$.',
          'Monoton steigend, aber nichtlinear.',
        ],
        { stage: 'apply-guided', subGoal: 4, uses: ['reibwinkel'] },
      ),
      tf(
        'Der Reibwinkel ist genau der Winkel zwischen der Richtung der resultierenden Kontaktkraft (Normal + Reibung) und der Flächennormale.',
        true,
        `**Ansatz:** Die resultierende Kontaktkraft hat Normal-Komponente $F_N$ und maximale Reib-Komponente $\\mu_0 F_N$. Winkel zur Normale: $\\tan\\phi = (\\mu_0 F_N)/F_N = \\mu_0 \\Rightarrow \\phi = \\arctan\\mu_0 = \\rho$.

**Rechnung:** Die resultierende Kontaktkraft zeichnet sich innerhalb eines Kegels mit Öffnungswinkel $\\rho$ um die Flächennormale — das ist der **Reibkegel**. Nur solange die angreifende Kraft innerhalb dieses Kegels liegt, herrscht Haftreibung.

**Probe:** Bei horizontaler Unterlage und senkrechtem Gewicht ist der Kontaktkraft-Vektor rein normal ($\\phi = 0$). Wird der Körper geneigt, wandert der Resultierende in Richtung Reibkegelrand — bis bei $\\phi = \\rho$ das Gleiten einsetzt.

**Typischer Fehler:** Reibwinkel als Neigungswinkel der Ebene sehen. Das stimmt im kritischen Fall, allgemein ist $\\rho$ aber der Winkel in der Kontakt-Statik.`,
        [
          'Zeichne $F_N$ und $F_{R,\\max}$ als Vektoren an der Kontaktfläche.',
          'Welchen Winkel bildet die Resultierende mit der Normale?',
          '$\\tan\\phi = F_R/F_N = \\mu$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['reibwinkel'] },
      ),
      mc(
        'Wie ist der Reibwinkel in einem **Selbsthemmungskriterium** zu verwenden?',
        [
          'Selbsthemmung genau, wenn Neigungswinkel $\\alpha \\leq \\rho$',
          'Selbsthemmung genau, wenn $\\alpha > \\rho$',
          'Reibwinkel sagt nichts über Selbsthemmung aus',
          'Selbsthemmung genau, wenn $\\alpha = 90° - \\rho$',
        ],
        0,
        `**Ansatz:** Selbsthemmung: $\\tan\\alpha \\leq \\mu_0$. Mit $\\mu_0 = \\tan\\rho$: $\\tan\\alpha \\leq \\tan\\rho$. Da $\\tan$ auf $[0°, 90°)$ monoton steigt: $\\alpha \\leq \\rho$.

**Rechnung:** Anschaulich: $\\rho$ ist die **kritische Neigung**. Alles darunter hält, alles darüber rutscht.

**Probe:** $\\rho = 20°$ (typisch für Holz/Holz). Eine Ebene mit $\\alpha = 15° < 20°$ ist selbsthemmend — Holzblock bleibt liegen. $\\alpha = 25° > 20°$: Holzblock rutscht.

**Typischer Fehler:** Zeichen umdrehen oder $90° - \\rho$ einsetzen — beides führt zu physikalisch falschen Aussagen (z.B. Selbsthemmung nur bei steilen Flächen).`,
        [
          'Vergleiche die Formeln $\\tan\\alpha \\leq \\mu_0$ und $\\mu_0 = \\tan\\rho$.',
          'Was folgt nach $\\arctan$?',
          'Anschaulich: $\\rho$ ist die Rutschgrenze.',
        ],
        {
          1: 'Umgekehrt: Bei $\\alpha > \\rho$ gleitet der Körper — kein Selbsthemmen.',
          2: 'Reibwinkel ist **genau** das Selbsthemmungskriterium in geometrischer Form. Sehr wohl relevant.',
          3: '$90° - \\rho$ wäre der Komplementärwinkel — taucht weder in der Herleitung noch in der Anwendung auf.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['reibwinkel'] },
      ),
      ni(
        'Ein Versuchsaufbau: Eine Ebene wird so lange geneigt, bis ein aufgelegter Stahlklotz gerade zu rutschen beginnt — bei $\\alpha = 11{,}31°$. Welcher Haftreibwert $\\mu_0$ lässt sich daraus bestimmen? (auf 2 Nachkommastellen)',
        0.2, 0.005, '',
        `**Ansatz:** Der gemessene Rutschwinkel **ist** per Definition der Reibwinkel $\\rho$. Umgekehrt: $\\mu_0 = \\tan\\rho$.

**Rechnung:** $\\mu_0 = \\tan 11{,}31° \\approx 0{,}2000$.

**Probe:** Rückwärts: $\\arctan(0{,}2) \\approx 11{,}31°$. ✓ Konsistent.

**Typischer Fehler:** Den Winkel direkt als $\\mu_0$ übernehmen ($\\mu_0 = 0{,}113$ oder $\\mu_0 = 11{,}31$) — Reibwert und Reibwinkel sind verschiedene Größen, verknüpft durch $\\tan$.`,
        [
          'Der kritische Neigungswinkel ist der Reibwinkel.',
          '$\\mu_0 = \\tan\\rho$.',
          'Rechner: $\\tan 11{,}31°$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['reibwinkel'] },
      ),
      mc(
        'Studentin behauptet: "Der Reibwinkel ist gleich dem Haftreibwert: $\\rho = \\mu_0$." Wo steckt der Fehler?',
        [
          'Reibwinkel und Reibwert sind unterschiedliche Größen, verknüpft durch $\\rho = \\arctan\\mu_0$. Beispiel: $\\mu_0 = 0{,}5 \\Rightarrow \\rho \\approx 26{,}6°$, nicht $0{,}5°$.',
          'Stimmt für kleine Winkel — bei großen Winkeln gilt $\\rho = \\arctan\\mu_0$.',
          '$\\rho = \\mu_0$ wäre richtig in Bogenmaß.',
          'Falsch: korrekt wäre $\\rho = \\sin\\mu_0$.',
        ],
        0,
        `**Ansatz:** Reibwinkel-Definition: $\\rho = \\arctan\\mu_0$. Reibwert ist dimensionslos, Reibwinkel hat Einheit Grad (oder Bogenmaß).

**Rechnung:** Bei $\\mu_0 = 0{,}5$: $\\rho = \\arctan 0{,}5 \\approx 26{,}57°$. Wer $\\rho = \\mu_0 = 0{,}5°$ schreibt, vergisst die $\\arctan$-Beziehung. Die beiden Größen unterscheiden sich um Faktor $\\arctan/$Identität.

**Probe:** Markante Paare: $(\\mu_0, \\rho)$: $(0{,}1, 5{,}71°)$, $(0{,}5, 26{,}57°)$, $(1, 45°)$, $(\\sqrt 3, 60°)$. Klar nichtlinear.

**Typischer Fehler:** Auf einen Blick zwei unterschiedliche Größen gleichsetzen, weil sie konzeptuell zusammengehören. Verbindung über $\\arctan$.`,
        [
          'Reibwinkel-Definition.',
          '$\\rho = \\arctan\\mu_0$.',
          'Beispiel: $\\mu_0 = 0{,}5 \\Rightarrow \\rho \\approx 26{,}6°$.',
        ],
        {
          1: 'Auch für kleine $\\mu_0$ ist $\\rho \\neq \\mu_0$. Allenfalls $\\rho_\\text{rad} \\approx \\mu_0$ in Bogenmaß bei sehr kleinen Werten — aber in Grad nie.',
          2: 'Im Bogenmaß $\\rho_\\text{rad} = \\arctan\\mu_0$, nicht $\\mu_0$ direkt. Für $\\mu_0 = 0{,}5$: $\\rho_\\text{rad} \\approx 0{,}464$, nicht $0{,}5$.',
          3: '$\\sin\\mu_0$ macht keinen Sinn — $\\mu_0$ ist dimensionslos und kein Winkel. Korrekt: $\\arctan\\mu_0$.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['reibwinkel'] },
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-1-5 — Schwerpunkt  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-1-5': {

    // ── [0] Diskrete Massen: $x_S = \sum m_i x_i / \sum m_i$ ────────────
    0: [
      ni(
        'Drei Massen liegen auf einer Stange: $m_1 = 2\\,\\text{kg}$ bei $x_1 = 0\\,\\text{m}$, $m_2 = 3\\,\\text{kg}$ bei $x_2 = 1\\,\\text{m}$, $m_3 = 5\\,\\text{kg}$ bei $x_3 = 4\\,\\text{m}$. Wo liegt der Schwerpunkt? (auf 2 Nachkommastellen)',
        2.3, 0.01, 'm',
        `**Ansatz:** Massengewichtetes Mittel: $x_S = \\sum m_i x_i / \\sum m_i$.

**Rechnung:** Zähler: $2 \\cdot 0 + 3 \\cdot 1 + 5 \\cdot 4 = 0 + 3 + 20 = 23\\,\\text{kg·m}$. Nenner: $2 + 3 + 5 = 10\\,\\text{kg}$. $x_S = 23/10 = 2{,}30\\,\\text{m}$.

**Probe:** Ergebnis liegt zwischen $x_1 = 0$ und $x_3 = 4$. ✓ Näher an $x_3 = 4$, weil dort die größte Masse sitzt. ✓ Hebelcheck: $2 \\cdot 2{,}3 + 3 \\cdot 1{,}3 = 4{,}6 + 3{,}9 = 8{,}5$ (links von $x_S$); $5 \\cdot 1{,}7 = 8{,}5$ (rechts von $x_S$). Momentengleichgewicht erfüllt. ✓

**Typischer Fehler:** Arithmetisches Mittel der Positionen rechnen: $(0+1+4)/3 \\approx 1{,}67\\,\\text{m}$ — ignoriert die Massen. Die Schwerpunkt-Formel gewichtet jeden Beitrag mit **seiner** Masse.`,
        [
          'Schreibe die Formel hin: $x_S = \\sum m_i x_i / \\sum m_i$.',
          'Zähler: jedes $m_i \\cdot x_i$ aufsummieren.',
          'Ergebnis liegt immer zwischen den äußeren Positionen, näher an der größten Masse.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['sp-diskret'] },
      ),
      mc(
        'Zwei Massen auf einer Stange: $m_1 = 4\\,\\text{kg}$ bei $x_1 = 1\\,\\text{m}$ und $m_2 = 1\\,\\text{kg}$ bei $x_2 = 6\\,\\text{m}$. Wo liegt $x_S$?',
        ['$x_S = 2\\,\\text{m}$', '$x_S = 3{,}5\\,\\text{m}$', '$x_S = 5\\,\\text{m}$', '$x_S = 1{,}4\\,\\text{m}$'],
        0,
        `**Ansatz:** $x_S = (m_1 x_1 + m_2 x_2)/(m_1 + m_2)$.

**Rechnung:** $x_S = (4 \\cdot 1 + 1 \\cdot 6)/(4+1) = (4+6)/5 = 10/5 = 2\\,\\text{m}$.

**Probe:** Schwerpunkt näher an $m_1$ (größere Masse bei $x_1 = 1$). Abstand zu $m_1$: $1\\,\\text{m}$. Abstand zu $m_2$: $4\\,\\text{m}$. Hebelgesetz: $m_1 \\cdot 1 = m_2 \\cdot 4$, also $4 = 4$. ✓

**Typischer Fehler:** Arithmetisches Mittel $(1+6)/2 = 3{,}5\\,\\text{m}$ — ignoriert den Massenunterschied $4:1$.`,
        [
          'Massengewichtetes Mittel, nicht arithmetisches.',
          'Hebelgesetz: Schwerpunkt teilt die Strecke im **umgekehrten** Massenverhältnis.',
          'Bei $4:1$ Masse liegt $x_S$ nahe an $m_1$.',
        ],
        {
          1: '$3{,}5\\,\\text{m}$ ist das arithmetische Mittel der Positionen. Bei ungleichen Massen gewichtet man mit der Masse, nicht mit $1$.',
          2: '$5\\,\\text{m}$ wäre der Schwerpunkt, wenn $m_2$ viermal so schwer wie $m_1$ wäre — Verhältnis umgekehrt.',
          3: '$1{,}4\\,\\text{m}$ stammt aus falscher Zähler-Division: vermutlich $(4 \\cdot 1 + 1 \\cdot 6)/(1 + 6) \\approx 1{,}43$, wobei der Nenner die **Positionen** statt der **Massen** addiert.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['sp-diskret'] },
      ),
      ni(
        'Vier gleich schwere Kugeln ($m = 2\\,\\text{kg}$ jede) liegen bei $x = 0, 2, 5, 9\\,\\text{m}$. Wo ist $x_S$?',
        4, 0.01, 'm',
        `**Ansatz:** Bei gleichen Massen reduziert sich die Formel auf das arithmetische Mittel der Positionen: $x_S = (x_1 + x_2 + \\dots + x_n)/n$.

**Rechnung:** Gesamtmasse $4 \\cdot 2 = 8\\,\\text{kg}$. Zähler: $2(0 + 2 + 5 + 9) = 2 \\cdot 16 = 32\\,\\text{kg·m}$. $x_S = 32/8 = 4\\,\\text{m}$. Schneller: $(0+2+5+9)/4 = 16/4 = 4\\,\\text{m}$.

**Probe:** Ergebnis liegt zwischen $x_{\\min} = 0$ und $x_{\\max} = 9$. ✓ Zwischen den beiden mittleren Positionen $2$ und $5$ liegt $x_S = 4$ — plausibel.

**Typischer Fehler:** Gewichtete Formel benutzen und die gemeinsame Masse $m$ im Zähler **und** Nenner vergessen zu kürzen → unnötig komplizierte Rechnung. Bei gleichen Massen einfach Mittelwert der Positionen.`,
        [
          'Was passiert, wenn alle $m_i$ gleich sind?',
          '$m$ kürzt sich im Zähler und Nenner.',
          'Übrig: arithmetisches Mittel der $x_i$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['sp-diskret'] },
      ),
      tf(
        'Die Schwerpunktformel liefert auch für dreidimensionale Massensysteme komponentenweise die Schwerpunktkoordinaten: $x_S, y_S, z_S$ werden mit derselben Formel unabhängig voneinander berechnet.',
        true,
        `**Ansatz:** Vektorwertig: $\\vec r_S = \\sum m_i \\vec r_i / \\sum m_i$. Komponentenweise: $x_S = \\sum m_i x_i / M$, analog $y_S, z_S$. Die drei Gleichungen sind entkoppelt.

**Rechnung:** Bei einem System aus drei Massen im Raum rechnet man drei separate Summen — eine pro Achse. Die Massen bleiben dieselben, nur die Koordinate wechselt.

**Probe:** Beispiel: $m_1 = m_2 = m_3 = 1\\,\\text{kg}$ bei $(0,0,0)$, $(3,0,0)$, $(0,6,9)$. Dann $x_S = (0+3+0)/3 = 1$, $y_S = (0+0+6)/3 = 2$, $z_S = (0+0+9)/3 = 3$. Schwerpunkt: $(1, 2, 3)$.

**Typischer Fehler:** Koordinaten mischen (z.B. $m_i \\cdot y_i$ in der $x_S$-Summe). Die drei Gleichungen sind streng unabhängig.`,
        [
          'Wie sieht die Schwerpunktformel in Vektorform aus?',
          'Komponentenweise lesen: $x_S$ nutzt nur $x_i$.',
          'Drei unabhängige Gleichungen für 3D.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['sp-diskret'] },
      ),
      matching(
        'Ordne jeder Situation die korrekte Schwerpunkt-Aussage zu.',
        [
          { left: 'Zwei gleiche Massen bei $x_1$ und $x_2$', right: '$x_S = (x_1 + x_2)/2$ (arithm. Mittel)' },
          { left: 'Massen $m$ und $3m$ bei $x=0$ und $x=4$', right: '$x_S = 3$ (näher an der größeren Masse)' },
          { left: 'Eine einzige Masse $m$ bei $x_0$', right: '$x_S = x_0$ (trivial)' },
          { left: 'Zwei Massen, Summe verdoppelt', right: '$x_S$ bleibt gleich (Massen kürzen sich)' },
        ],
        `**Ansatz:** Die Schwerpunktformel ist linear in allen $m_i$ — eine gemeinsame Skalierung aller Massen ändert das Ergebnis nicht. Das Schwerpunkt-Teilverhältnis $(x_S - x_1)/(x_2 - x_S) = m_2/m_1$ ist das umgekehrte Hebelverhältnis.

**Rechnung:** Für Masse $m$ bei $0$ und $3m$ bei $4$: $x_S = (m \\cdot 0 + 3m \\cdot 4)/(m + 3m) = 12m/(4m) = 3$. Schwerpunkt teilt die Strecke im Verhältnis $3:1$ (näher zur $3m$-Masse).

**Probe:** Einzelne Masse: $x_S = m \\cdot x_0 / m = x_0$ — trivial. Gleiche Massen: $x_S = m(x_1+x_2)/(2m) = (x_1+x_2)/2$. Die Skalierung $m \\to 2m$ bei **allen** Massen kürzt sich in Zähler und Nenner.

**Typischer Fehler:** Annehmen, dass der Schwerpunkt immer **in der Mitte** liegt. Der liegt genau im Mittelpunkt nur bei gleichen Massen — bei unterschiedlichen Massen teilt er die Strecke im umgekehrten Massenverhältnis.`,
        [
          'Gleiche Massen: arithmetisches Mittel.',
          'Hebelverhältnis umgekehrt zum Massenverhältnis.',
          'Gemeinsame Skalierung aller Massen ändert $x_S$ nicht.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['sp-diskret'] },
      ),
      ni(
        'Fünf Kugeln: $m_1 = 1\\,\\text{kg}$ bei $x=0$, $m_2 = 2\\,\\text{kg}$ bei $x=1$, $m_3 = 3\\,\\text{kg}$ bei $x=2$, $m_4 = 2\\,\\text{kg}$ bei $x=3$, $m_5 = 1\\,\\text{kg}$ bei $x=4$. Wo liegt der Schwerpunkt? (auf 1 Nachkommastelle)',
        2, 0.05, 'm',
        `**Ansatz:** Die Massenverteilung ist symmetrisch um $x = 2$ (gleiche Massen im gleichen Abstand). Daher muss $x_S$ genau auf der Symmetrieachse liegen.

**Rechnung:** Zähler: $1 \\cdot 0 + 2 \\cdot 1 + 3 \\cdot 2 + 2 \\cdot 3 + 1 \\cdot 4 = 0 + 2 + 6 + 6 + 4 = 18$. Nenner: $1+2+3+2+1 = 9$. $x_S = 18/9 = 2{,}0\\,\\text{m}$.

**Probe:** Durch direkte Ausrechnung und durch Symmetrie bestätigt. Paare $(m_1, m_5)$ und $(m_2, m_4)$ heben sich um $x = 2$ auf; die mittlere Masse $m_3$ sitzt direkt auf der Achse.

**Typischer Fehler:** Symmetrie nicht erkennen und unnötig lange Summen aufsetzen — oder Rechnerfehler beim Summieren. Vor dem Rechnen: auf Symmetrie prüfen.`,
        [
          'Sind die Massen um einen Punkt symmetrisch verteilt?',
          'Symmetrie ⇒ Schwerpunkt liegt auf der Achse.',
          'Auch rechnerisch durchführen: $\\sum m_i x_i / \\sum m_i$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['sp-diskret'] },
      ),
      mc(
        'Studierende rechnet bei zwei Massen ($m_1 = 2\\,\\text{kg}$ bei $x = 0$, $m_2 = 8\\,\\text{kg}$ bei $x = 10\\,\\text{m}$) das arithmetische Mittel: $x_S = (0+10)/2 = 5\\,\\text{m}$. Wo steckt der Fehler?',
        [
          'Bei ungleichen Massen muss massengewichtet werden: $x_S = (2\\cdot 0 + 8\\cdot 10)/(2+8) = 80/10 = 8\\,\\text{m}$ — Schwerpunkt liegt nahe der schwereren Masse, nicht in der Mitte.',
          'Stimmt — bei zwei Massen ist das arithmetische Mittel der Schwerpunkt.',
          'Es fehlt nur ein Vorzeichen — korrekt wäre $x_S = -5\\,\\text{m}$.',
          'Korrekt wäre $x_S = (m_1 + m_2)/2 = 5\\,\\text{m}$ — die Massensumme statt der Positionssumme.',
        ],
        0,
        `**Ansatz:** Schwerpunkt-Formel: $x_S = \\sum m_i x_i / \\sum m_i$. Massen-**gewichtet**, nicht arithmetisch.

**Rechnung:** $x_S = (2\\cdot 0 + 8\\cdot 10)/(2+8) = (0 + 80)/10 = 8\\,\\text{m}$. Schwerpunkt liegt **nahe** der schwereren Masse $m_2 = 8\\,\\text{kg}$.

**Probe:** Hebelgesetz: Abstand zu $m_1$ ist $8$, zu $m_2$ ist $2$. Verhältnis $8:2 = 4:1$ — entspricht dem **umgekehrten** Massenverhältnis $8:2 = 4:1$ ✓.

**Typischer Fehler:** Arithmetisches Mittel verwenden, wenn die Massen unterschiedlich sind. Funktioniert **nur** bei gleichen Massen.`,
        [
          'Massengewichtet, nicht arithmetisch.',
          '$x_S$ liegt näher an der größeren Masse.',
          '$80/10 = 8$.',
        ],
        {
          1: 'Arithmetisches Mittel gilt nur bei gleichen Massen. Hier $m_2 = 4 m_1$ — also keinesfalls in der Mitte.',
          2: 'Vorzeichen ist hier nicht das Problem — beide Positionen sind positiv. Der Fehler steckt in der Methode.',
          3: '$(m_1 + m_2)/2$ ergibt eine Masse (kg), keine Position. Einheitenfehler — Schwerpunkt hat Einheit Meter.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['sp-diskret'] },
      ),
    ],

    // ── [1] Zusammengesetzte Flächen: Summenregel ───────────────────────
    1: [
      ni(
        'Ein T-Profil besteht aus einem horizontalen Rechteck $R_1$ ($100 \\times 20\\,\\text{mm}$, $x_{S1} = 50\\,\\text{mm}$, $y_{S1} = 90\\,\\text{mm}$) und einem vertikalen Rechteck $R_2$ ($20 \\times 80\\,\\text{mm}$, $x_{S2} = 50\\,\\text{mm}$, $y_{S2} = 40\\,\\text{mm}$). Berechne $y_S$ des gesamten T-Profils. (auf 1 Nachkommastelle)',
        67.8, 0.2, 'mm',
        `**Ansatz:** Flächengewichtetes Mittel in $y$: $y_S = (A_1 y_{S1} + A_2 y_{S2})/(A_1 + A_2)$. Bei homogenem Material ersetzt $A_i$ die Masse.

**Rechnung:** $A_1 = 100 \\cdot 20 = 2000\\,\\text{mm}^2$, $A_2 = 20 \\cdot 80 = 1600\\,\\text{mm}^2$. $y_S = (2000 \\cdot 90 + 1600 \\cdot 40)/(2000 + 1600) = (180\\,000 + 64\\,000)/3600 = 244\\,000/3600 \\approx 67{,}78\\,\\text{mm}$.

**Probe:** Ergebnis liegt zwischen $y_{S2} = 40$ und $y_{S1} = 90$ — OK. Näher an $y_{S1}$, weil $A_1 > A_2$.

**Typischer Fehler:** Beide Teilschwerpunkte einfach mitteln: $(90+40)/2 = 65\\,\\text{mm}$. Ignoriert den Flächenunterschied.`,
        [
          'Teilflächen berechnen: $A_i = b_i \\cdot h_i$.',
          'Teilschwerpunkte kennst du aus der Aufgabe.',
          'Flächengewichtetes Mittel: $y_S = \\sum A_i y_{S,i} / \\sum A_i$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['sp-flaechen'] },
      ),
      mc(
        'Bei einem Profil aus zwei Rechtecken (gleiche Fläche $A$, Schwerpunkte $x_{S1}$ und $x_{S2}$) — wo liegt der Gesamtschwerpunkt?',
        [
          'In der Mitte zwischen $x_{S1}$ und $x_{S2}$: $x_S = (x_{S1}+x_{S2})/2$',
          'Beim größeren Teilschwerpunkt',
          'Bei $x_{S1}$ (erstes Teil dominiert)',
          'Immer am linken Rand des Profils',
        ],
        0,
        `**Ansatz:** Gleiche Flächen → Gewichtung gleich → arithmetisches Mittel.

**Rechnung:** $x_S = (A \\cdot x_{S1} + A \\cdot x_{S2})/(A + A) = A(x_{S1}+x_{S2})/(2A) = (x_{S1}+x_{S2})/2$.

**Probe:** Sonderfall der allgemeinen Formel $x_S = \\sum A_i x_{S,i}/\\sum A_i$ bei $A_1 = A_2$. Analog zu zwei gleichen Massen.

**Typischer Fehler:** Die Regel "immer in der Mitte" auf ungleiche Flächen übertragen. Nur bei **gleicher Fläche** ist das Mittel das arithmetische Mittel.`,
        [
          'Setze $A_1 = A_2 = A$ in die Formel ein.',
          'Was passiert mit $A$ in Zähler und Nenner?',
          'Bleibt arithmetisches Mittel übrig.',
        ],
        {
          1: 'Die Formel liefert das gewogene Mittel. "Größerer Teilschwerpunkt" ist keine sinnvolle Größe — $x_{S1}$ und $x_{S2}$ sind Positionen, nicht Größen.',
          2: 'Das zweite Teil hat denselben Flächenanteil, dominiert nicht.',
          3: 'Der linke Rand hängt vom konkreten Aufbau ab — hat nichts mit der Schwerpunktformel zu tun.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['sp-flaechen'] },
      ),
      ni(
        'Ein Profil besteht aus einem Quadrat ($100 \\times 100\\,\\text{mm}$, $x_{S1} = 50\\,\\text{mm}$) und einem angesetzten Rechteck ($200 \\times 50\\,\\text{mm}$, Schwerpunkt $x_{S2} = 200\\,\\text{mm}$ rechts vom Quadrat, bezogen auf denselben Ursprung). Wo liegt $x_S$?',
        125, 0.5, 'mm',
        `**Ansatz:** $x_S = (A_1 x_{S1} + A_2 x_{S2})/(A_1 + A_2)$.

**Rechnung:** $A_1 = 100 \\cdot 100 = 10\\,000\\,\\text{mm}^2$. $A_2 = 200 \\cdot 50 = 10\\,000\\,\\text{mm}^2$. Beide gleich → arithmetisches Mittel. $x_S = (50 + 200)/2 = 125\\,\\text{mm}$.

**Probe:** Ergebnis liegt zwischen $50$ und $200$ — OK. Da $A_1 = A_2$, genau in der Mitte.

**Typischer Fehler:** Unterschiedliche Flächen annehmen, ohne die Zahlenwerte zu berechnen. Erst nach Durchrechnen fällt auf, dass $100 \\cdot 100 = 200 \\cdot 50$.`,
        [
          'Flächen $A_i = b_i h_i$ berechnen.',
          'Wenn $A_1 = A_2$, wird die Formel zum arithmetischen Mittel.',
          'Sonst: gewogenes Mittel.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['sp-flaechen'] },
      ),
      tf(
        'Für homogene Platten (konstante Dicke und Dichte) liefert die Flächen-Schwerpunktformel dasselbe Ergebnis wie die Massen-Schwerpunktformel.',
        true,
        `**Ansatz:** Bei homogenem Material gilt $m_i = \\rho \\cdot t \\cdot A_i$ (Dichte $\\rho$, Dicke $t$, Fläche $A_i$). In der Schwerpunktformel kürzen sich $\\rho$ und $t$.

**Rechnung:** $x_S = \\sum m_i x_i / \\sum m_i = \\sum (\\rho t A_i) x_i / \\sum (\\rho t A_i) = \\rho t \\sum A_i x_i / (\\rho t \\sum A_i) = \\sum A_i x_i / \\sum A_i$.

**Probe:** Für ein L-Profil aus Stahl ergibt sich derselbe Schwerpunkt wie aus Aluminium — solange Dicke und Dichte überall gleich sind.

**Typischer Fehler:** Die Regel auch bei inhomogenen Körpern anwenden (verschiedene Materialien, variable Dicke). Dort muss mit der tatsächlichen Masse gewichtet werden — Fläche allein reicht nicht.`,
        [
          'Masse als $m = \\rho \\cdot V = \\rho \\cdot t \\cdot A$ schreiben.',
          'Was kürzt sich in Zähler und Nenner?',
          'Vorsicht bei inhomogenen Körpern.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['sp-flaechen'] },
      ),
      sorting(
        'Bringe die Schritte zur Berechnung des Flächenschwerpunkts eines zusammengesetzten Profils in die richtige Reihenfolge.',
        [
          'Koordinatensystem wählen (Ursprung an markanter Ecke)',
          'Profil in Teilflächen zerlegen (Rechtecke, Dreiecke, Kreissegmente)',
          'Für jede Teilfläche $A_i$ und Teilschwerpunkt ($x_{S,i}$, $y_{S,i}$) bestimmen',
          'Flächengewichtete Summen $\\sum A_i x_{S,i}$ und $\\sum A_i y_{S,i}$ bilden',
          'Durch Gesamtfläche $\\sum A_i$ teilen, um $x_S$ und $y_S$ zu erhalten',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Strukturiertes Vorgehen verhindert Fehler: erst die Geometrie klären (Koordinaten, Zerlegung), dann die Zahlen (Flächen, Teilschwerpunkte), zuletzt die Formel anwenden.

**Rechnung:** Das Koordinatensystem muss **vor** der Zerlegung stehen, damit die Teilschwerpunkte eindeutige Werte haben. Erst Flächen, Teilschwerpunkte — dann Summen, dann Division.

**Probe:** Bei einem L-Profil: (1) Ursprung in der Ecke, (2) Zerlegung in zwei Rechtecke, (3) Flächen und Teilschwerpunkte, (4) Summen, (5) Division. Ergebnis: Gesamtschwerpunkt.

**Typischer Fehler:** Ohne Koordinatensystem starten — dann stehen die $x_{S,i}$ relativ zu verschiedenen Bezugspunkten und werden zu einer sinnlosen Summe addiert.`,
        [
          'Zuerst Geometrie, dann Zahlen.',
          'Koordinatensystem vor der Zerlegung.',
          'Formel am Ende.',
        ],
        { stage: 'apply-guided', subGoal: 1, uses: ['sp-flaechen'] },
      ),
      ni(
        'Ein I-Profil (Doppel-T) besteht aus drei Rechtecken: Obergurt ($120 \\times 15\\,\\text{mm}$, $y_S = 142{,}5\\,\\text{mm}$), Steg ($15 \\times 120\\,\\text{mm}$, $y_S = 75\\,\\text{mm}$), Untergurt ($120 \\times 15\\,\\text{mm}$, $y_S = 7{,}5\\,\\text{mm}$). Wo liegt der Schwerpunkt $y_S$? (auf 1 Nachkommastelle)',
        75, 0.5, 'mm',
        `**Ansatz:** Das I-Profil ist **symmetrisch** um die Mittelebene. Der Schwerpunkt muss dort liegen — hier $y_S = 75\\,\\text{mm}$.

**Rechnung:** $A_1 = A_3 = 120 \\cdot 15 = 1800\\,\\text{mm}^2$, $A_2 = 15 \\cdot 120 = 1800\\,\\text{mm}^2$. Zur Bestätigung: $y_S = (1800 \\cdot 142{,}5 + 1800 \\cdot 75 + 1800 \\cdot 7{,}5)/(1800 \\cdot 3) = (142{,}5 + 75 + 7{,}5)/3 = 225/3 = 75\\,\\text{mm}$. ✓

**Probe:** Aufgrund der Symmetrie von Obergurt und Untergurt um die Mittelebene heben sich ihre Abweichungen von $75$ exakt auf. Der Steg sitzt ohnehin in der Mitte.

**Typischer Fehler:** Aufwendig durchrechnen, ohne die Symmetrie zu sehen. Bei jeder zusammengesetzten Fläche zuerst auf Symmetrie prüfen — spart oft die gesamte Rechnung.`,
        [
          'Liegt eine Symmetrieachse vor?',
          'Obergurt und Untergurt: gleiche Fläche, gleicher Abstand zur Mitte.',
          'Symmetrie ⇒ $y_S$ auf der Mittelebene.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['sp-flaechen'] },
      ),
      mc(
        'Bei einem Profil aus zwei Rechtecken ($A_1 = 2000\\,\\text{mm}^2$ mit $x_{S1} = 20$, $A_2 = 500\\,\\text{mm}^2$ mit $x_{S2} = 80$) rechnet ein Studierender $x_S = (x_{S1} + x_{S2})/2 = 50\\,\\text{mm}$. Wo steckt der Fehler?',
        [
          'Bei ungleichen Flächen muss flächengewichtet werden: $x_S = (2000\\cdot 20 + 500\\cdot 80)/(2000+500) = 80\\,000/2500 = 32\\,\\text{mm}$.',
          'Stimmt — die Mittelwertbildung ist eine etablierte Vereinfachung.',
          'Fehler in den Daten — die Flächen müssten gleich sein, sonst gilt die Formel nicht.',
          'Es muss $x_S = (A_1\\cdot x_{S2} + A_2\\cdot x_{S1})/(A_1 + A_2) = 32{,}8\\,\\text{mm}$ sein (Flächen und Schwerpunkte gekreuzt).',
        ],
        0,
        `**Ansatz:** $x_S = \\sum A_i x_{S,i}/\\sum A_i$ — **flächen**gewichtet. Nur bei gleichen Flächen wird daraus arithmetisches Mittel.

**Rechnung:** $x_S = (2000\\cdot 20 + 500\\cdot 80)/(2000+500) = (40\\,000 + 40\\,000)/2500 = 80\\,000/2500 = 32\\,\\text{mm}$.

**Probe:** Plausibilität: $32 < 50$ — der Schwerpunkt liegt **näher** am größeren Teil ($A_1 = 2000$ bei $x = 20$). Größeres Teil "zieht" den Gesamtschwerpunkt zu sich.

**Typischer Fehler:** Bei augenscheinlich symmetrischer Lage (Mitte zwischen $20$ und $80$) das arithmetische Mittel ansetzen, ohne Flächen anzusehen.`,
        [
          'Flächen sind ungleich — also gewichten.',
          '$x_S = \\sum A_i x_{S,i}/\\sum A_i$.',
          '$80\\,000/2500 = 32$.',
        ],
        {
          1: 'Mittelwertbildung gilt nur bei gleichen Flächen. Hier $A_1 = 4 A_2$ — keine Symmetrie.',
          2: 'Die Formel funktioniert für **beliebige** Flächen — auch bei ungleichen. Sie heißt explizit "flächen**gewichtet**".',
          3: 'Kreuzung von Flächen und Schwerpunkten ergibt physikalisch keinen Sinn. Jede Fläche gewichtet ihren **eigenen** Teilschwerpunkt.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['sp-flaechen'] },
      ),
    ],

    // ── [2] Loch als negative Fläche ────────────────────────────────────
    2: [
      ni(
        'Eine quadratische Platte ($200 \\times 200\\,\\text{mm}$) hat ein kreisrundes Loch (Radius $r = 30\\,\\text{mm}$) mit Mittelpunkt bei $x = 60\\,\\text{mm}$, $y = 100\\,\\text{mm}$. Wo liegt $x_S$ der gelochten Platte? (Ursprung in der linken unteren Ecke, auf 2 Nachkommastellen)',
        103.04, 0.2, 'mm',
        `**Ansatz:** Loch behandeln wie negative Fläche: $x_S = (A_\\text{Voll} \\cdot x_\\text{S,Voll} - A_\\text{Loch} \\cdot x_\\text{S,Loch})/(A_\\text{Voll} - A_\\text{Loch})$.

**Rechnung:** $A_\\text{Voll} = 200^2 = 40\\,000\\,\\text{mm}^2$, $x_\\text{S,Voll} = 100\\,\\text{mm}$. $A_\\text{Loch} = \\pi \\cdot 30^2 = 900\\pi \\approx 2827{,}4\\,\\text{mm}^2$, $x_\\text{S,Loch} = 60\\,\\text{mm}$. $x_S = (40\\,000 \\cdot 100 - 2827{,}4 \\cdot 60)/(40\\,000 - 2827{,}4) = (4\\,000\\,000 - 169\\,646)/37\\,172{,}6 \\approx 103{,}04\\,\\text{mm}$.

**Probe:** Das Loch liegt links der Mitte ($x = 60 < 100$). Entfernen verschiebt den Schwerpunkt **nach rechts** (weg vom Loch). Ergebnis $x_S > 100$ ✓.

**Typischer Fehler:** Das Loch **addieren** statt subtrahieren. Oder die Fläche des Kreises vergessen: $\\pi r^2$, nicht $2\\pi r$ oder $\\pi r$.`,
        [
          'Loch = negative Teilfläche.',
          'Formel: $x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$.',
          'Qualitativ: Schwerpunkt wandert weg vom Loch.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['sp-loch'] },
      ),
      mc(
        'Eine symmetrische Scheibe hat ein rundes Loch **oberhalb** der Mitte gebohrt. In welche Richtung verschiebt sich der Schwerpunkt gegenüber der unversehrten Scheibe?',
        [
          'Nach unten (weg vom Loch)',
          'Nach oben (zum Loch hin)',
          'Er bleibt gleich, weil das Loch klein ist',
          'Horizontal nach links',
        ],
        0,
        `**Ansatz:** Das Loch entspricht negativer Fläche. Subtrahieren negativer $y_L > y_\\text{Voll}$-Terme verschiebt $y_S$ nach **unten**.

**Rechnung:** $y_S = (A_V y_V - A_L y_L)/(A_V - A_L)$. Wenn $y_L > y_V$, ist der Zähler kleiner als $y_V \\cdot (A_V - A_L)$, also $y_S < y_V$. Schwerpunkt sinkt.

**Probe:** Anschaulich: Material oberhalb der Mitte wurde entfernt — die verbleibende Masse ist im Durchschnitt weiter unten. Schwerpunkt folgt der verbleibenden Masse.

**Typischer Fehler:** Intuition "Schwerpunkt wandert zum Loch" — falsch. Er wandert **weg** vom Loch, weil das Loch eine Fehl-Fläche ist, nicht eine Zusatz-Fläche.`,
        [
          'Loch = fehlende Masse.',
          'Schwerpunkt folgt der verbleibenden Masse.',
          'Weg vom Loch, nicht zum Loch.',
        ],
        {
          1: 'Das Loch zieht **nichts** an — im Gegenteil, dort fehlt Material. Der Schwerpunkt wandert weg.',
          2: 'Kleine Löcher haben kleinen Effekt, aber nicht null. Jede entfernte Fläche verschiebt den Schwerpunkt.',
          3: 'Das Loch liegt vertikal oberhalb der Mitte — die Verschiebung ist vertikal, nicht horizontal.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['sp-loch'] },
      ),
      ni(
        'Eine rechteckige Platte ($60 \\times 40\\,\\text{mm}$) hat ein quadratisches Loch ($20 \\times 20\\,\\text{mm}$) mit Mittelpunkt bei $x = 15\\,\\text{mm}$, $y = 20\\,\\text{mm}$ gebohrt (Ursprung in der linken unteren Ecke). Wo liegt $x_S$ der gelochten Platte? (auf 2 Nachkommastellen)',
        33, 0.05, 'mm',
        `**Ansatz:** Negative Fläche: $x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$.

**Rechnung:** $A_V = 60 \\cdot 40 = 2400\\,\\text{mm}^2$, $x_V = 30\\,\\text{mm}$. $A_L = 20 \\cdot 20 = 400\\,\\text{mm}^2$, $x_L = 15\\,\\text{mm}$. $x_S = (2400 \\cdot 30 - 400 \\cdot 15)/(2400 - 400) = (72\\,000 - 6000)/2000 = 66\\,000/2000 = 33\\,\\text{mm}$.

**Probe:** Loch links der Mitte ($x_L = 15 < 30$) → Schwerpunkt wandert nach rechts ($x_S = 33 > 30$). ✓ Verschiebung: $3\\,\\text{mm}$ — vernünftig für ein Loch mit $400/2400 \\approx 17\\,\\%$ der Fläche.

**Typischer Fehler:** $x_L$ in die Vollplatte-Formel einsetzen ohne Vorzeichenwechsel: das Loch wird dann fälschlich als Zusatzfläche gerechnet.`,
        [
          'Minus statt Plus für das Loch.',
          'Formel: $(A_V x_V - A_L x_L)/(A_V - A_L)$.',
          'Plausibilitätscheck: Schwerpunkt weg vom Loch.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['sp-loch'] },
      ),
      matching(
        'Ordne jedem Szenario die richtige Formel zu.',
        [
          { left: 'Platte mit einem Loch', right: '$x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$' },
          { left: 'Zwei angesetzte Flächen', right: '$x_S = (A_1 x_1 + A_2 x_2)/(A_1 + A_2)$' },
          { left: 'Platte mit zwei Löchern', right: '$x_S = (A_V x_V - A_{L1} x_{L1} - A_{L2} x_{L2})/(A_V - A_{L1} - A_{L2})$' },
          { left: 'Platte mit angesetzter Fläche und einem Loch', right: '$x_S = (A_V x_V + A_A x_A - A_L x_L)/(A_V + A_A - A_L)$' },
        ],
        `**Ansatz:** Zusammengesetzte Flächen lassen sich beliebig mischen: addierte Flächen mit Plus, entfernte (Löcher) mit Minus.

**Rechnung:** Jede Teilfläche liefert einen Term $A_i x_{S,i}$ im Zähler und $A_i$ im Nenner — mit passendem Vorzeichen. Zähler und Nenner müssen konsequent mitgezogen werden.

**Probe:** Die Struktur ist additiv-linear. Ein Loch tragt negativ zu **beidem** bei: zum Moment ($A_L x_L$) und zur Gesamtfläche ($A_L$).

**Typischer Fehler:** Nur im Zähler das Minus, im Nenner aber alle Flächen positiv addieren — oder umgekehrt. Das Vorzeichen muss konsistent sein.`,
        [
          'Additiv mit Vorzeichen: Plus für angesetzte, Minus für entfernte Flächen.',
          'Vorzeichen im Zähler und Nenner gleich.',
          'Formel bleibt linear.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['sp-loch'] },
      ),
      tf(
        'Wenn ein Loch **im Schwerpunkt** des Vollkörpers liegt, ändert sich die Schwerpunktposition durch das Loch nicht.',
        true,
        `**Ansatz:** $x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$. Falls $x_L = x_V$: $x_S = (A_V x_V - A_L x_V)/(A_V - A_L) = x_V (A_V - A_L)/(A_V - A_L) = x_V$.

**Rechnung:** Das Loch zieht zwar Fläche ab, aber auch Moment — und beides im gleichen Verhältnis zu $x_V$. Der Quotient bleibt $x_V$.

**Probe:** Anschaulich: Das entfernte Material hatte selbst $x_\\text{Loch-S} = x_V$. Das verschiebt den Restschwerpunkt nicht.

**Typischer Fehler:** Annehmen, "jedes Loch verändert den Schwerpunkt". Nur Löcher **außerhalb** des ursprünglichen Schwerpunkts verschieben ihn.`,
        [
          'Setze $x_L = x_V$ in die Formel ein.',
          'Was passiert, wenn Zähler und Nenner denselben Faktor haben?',
          'Anschaulich: was hat das entfernte Material zum Schwerpunkt beigetragen?',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['sp-loch'] },
      ),
      sorting(
        'Bringe die Schritte zur Berechnung des Schwerpunkts einer gelochten Platte in die richtige Reihenfolge.',
        [
          'Vollkörper und Loch getrennt definieren (Geometrie, Lage)',
          'Fläche und Schwerpunkt des Vollkörpers bestimmen: $A_V$, $x_V$',
          'Fläche und Schwerpunkt des Lochs bestimmen: $A_L$, $x_L$',
          'Momentensumme mit Vorzeichen: $A_V x_V - A_L x_L$',
          'Durch Restfläche teilen: $x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Das Verfahren entkoppelt Vollkörper und Loch — beide werden separat charakterisiert, dann mit Vorzeichen kombiniert.

**Rechnung:** Im Zähler und Nenner das Minus für das Loch nicht vergessen. In der Formel steht das Loch wie eine "negative Masse".

**Probe:** Plausibilitätscheck: $A_V - A_L$ muss positiv sein (sonst existiert kein Restkörper). Und $x_S$ muss innerhalb des Restkörpers liegen.

**Typischer Fehler:** Den letzten Schritt vergessen und nur den Zähler ausrechnen.`,
        [
          'Erst Geometrie, dann Zahlen.',
          'Loch separat wie ein eigenes Teilkörper behandeln.',
          'Vorzeichen konsistent in Zähler und Nenner.',
        ],
        { stage: 'apply-guided', subGoal: 2, uses: ['sp-loch'] },
      ),
      mc(
        'Studentin rechnet den Schwerpunkt einer Platte mit Loch und **addiert** das Loch wie eine zusätzliche Fläche (statt zu subtrahieren). Welche Konsequenz hat das?',
        [
          'Das Loch wird wie zusätzliches Material behandelt — die Restfläche wird zu groß angesetzt und der Schwerpunkt wandert in die **falsche** Richtung (zum Loch hin statt davon weg).',
          'Der Fehler hebt sich automatisch auf, wenn am Ende durch die Restfläche geteilt wird.',
          'Stimmt — Vorzeichen sind in der Schwerpunktformel irrelevant.',
          'Bei kleinen Löchern ist der Unterschied vernachlässigbar.',
        ],
        0,
        `**Ansatz:** Loch = negative Fläche. Im Zähler wirkt es als Subtraktion ($-A_L x_L$), im Nenner ebenso ($-A_L$).

**Rechnung:** Konkret: $A_V = 1000$, $x_V = 50$, $A_L = 200$, $x_L = 80$. Korrekt: $x_S = (1000\\cdot 50 - 200\\cdot 80)/(1000-200) = 34\\,000/800 = 42{,}5$ (weg vom Loch). Falsch addiert: $(1000\\cdot 50 + 200\\cdot 80)/(1000+200) = 66\\,000/1200 = 55$ (zum Loch).

**Probe:** Anschaulich: ein Loch entfernt Masse — die verbleibende Masse "verlagert" den Schwerpunkt weg. Bei falscher Addition wird das Loch wie zusätzliches Material gerechnet, das den Schwerpunkt fälschlich anzieht.

**Typischer Fehler:** Beim Aufstellen der Formel das Vorzeichen für das Loch vergessen — beide Vorzeichen (Zähler und Nenner) müssen negativ sein.`,
        [
          'Loch = negative Fläche, beidseitig minus.',
          'Schwerpunkt verlagert sich **weg** vom Loch.',
          'Falsche Addition kehrt die Richtung um.',
        ],
        {
          1: 'Aufheben würde nur passieren, wenn beide Vorzeichen falsch wären — hier ist nur ein Term betroffen.',
          2: 'Vorzeichen sind essentiell. Plus/Minus entscheidet, ob Material hinzugefügt oder entfernt wird.',
          3: 'Auch kleine Löcher führen zu Verschiebungen — vernachlässigbar wäre nur, wenn $A_L \\to 0$. Hier wird die **Richtung** falsch, was unabhängig von der Größe gilt.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['sp-loch'] },
      ),
      ni(
        'Ein Quadrat ($60\\,\\text{mm}\\times 60\\,\\text{mm}$, Ursprung links unten) hat ein quadratisches Loch ($20\\,\\text{mm}\\times 20\\,\\text{mm}$) mit Mittelpunkt bei $(45, 45)\\,\\text{mm}$. Berechne $y_S$ der gelochten Platte (auf 2 Nachkommastellen).',
        28.13, 0.05, 'mm',
        `**Ansatz:** $y_S = (A_V y_V - A_L y_L)/(A_V - A_L)$.

**Rechnung:** $A_V = 60\\cdot 60 = 3600\\,\\text{mm}^2$, $y_V = 30\\,\\text{mm}$. $A_L = 20\\cdot 20 = 400\\,\\text{mm}^2$, $y_L = 45\\,\\text{mm}$. $y_S = (3600\\cdot 30 - 400\\cdot 45)/(3600 - 400) = (108\\,000 - 18\\,000)/3200 = 90\\,000/3200 = 28{,}125 \\approx 28{,}13\\,\\text{mm}$.

**Probe:** Loch oberhalb der Plattenmitte ($y_L = 45 > y_V = 30$) → Schwerpunkt wandert nach **unten** ($y_S = 28{,}13 < 30$) ✓. Verschiebung: $1{,}88\\,\\text{mm}$ — vernünftig für ein Loch mit $400/3600 \\approx 11\\,\\%$ der Fläche.

**Typischer Fehler:** Im Nenner $A_V + A_L$ einsetzen (Loch addiert statt subtrahiert) — gibt $y_S = (108\\,000 - 18\\,000)/4000 = 22{,}5$, falsch.`,
        [
          'Loch als negative Teilfläche.',
          '$y_S = (A_V y_V - A_L y_L)/(A_V - A_L)$.',
          'Loch oberhalb Mitte → $y_S$ sinkt.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['sp-loch'] },
      ),
    ],

    // ── [3] Symmetrie ausnutzen ─────────────────────────────────────────
    3: [
      tf(
        'Bei einer homogenen Fläche mit zwei zueinander senkrechten Symmetrieachsen liegt der Schwerpunkt exakt im Schnittpunkt beider Achsen.',
        true,
        `**Ansatz:** Jede Symmetrieachse zwingt den Schwerpunkt auf sich. Zwei Achsen → Schnittpunkt ist der einzige Punkt auf beiden.

**Rechnung:** Beispiel Rechteck: horizontale Mittellinie (Symmetrie) zwingt $y_S = h/2$, vertikale Mittellinie zwingt $x_S = b/2$. Schwerpunkt: $(b/2, h/2)$ — Schnittpunkt beider Mittellinien.

**Probe:** Rechteck, Quadrat, Ellipse, Kreis, reguläres Polygon (gerade Eckenzahl) — alle haben mehrere Symmetrieachsen, und der Schwerpunkt ist der Schnittpunkt.

**Typischer Fehler:** Bei einem nicht-homogenen Körper (verschiedene Materialien, Bohrungen) gilt das nicht mehr. Symmetrie der **Form** reicht nicht — es muss Symmetrie der **Massenverteilung** sein.`,
        [
          'Jede Symmetrieachse fixiert eine Koordinate des Schwerpunkts.',
          'Zwei Achsen → beide Koordinaten fixiert.',
          'Vorsicht bei inhomogenen Körpern.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
      mc(
        'Ein gleichseitiges Dreieck (Seitenlänge $a$) ist homogen. Wo liegt der Schwerpunkt?',
        [
          'Im Schnittpunkt der drei Seitenhalbierenden (Schwerpunkt, 1/3 von der Basis)',
          'In der Mitte des Dreiecks (Höhe/2)',
          'Genau in einer der Ecken',
          'Außerhalb des Dreiecks, weil unsymmetrisch',
        ],
        0,
        `**Ansatz:** Ein gleichseitiges Dreieck hat drei Symmetrieachsen — jede Seitenhalbierende. Der Schwerpunkt muss auf **jeder** liegen → Schnittpunkt aller drei.

**Rechnung:** Die Seitenhalbierenden schneiden sich im **Schwerpunkt** (mathematisch bewiesen: Teilungsverhältnis $2:1$ von der Ecke her). Abstand von der Basis: $h/3$ mit $h = a\\sqrt{3}/2$.

**Probe:** Bei symmetrischer Masseverteilung rund um den Schnittpunkt heben sich alle Beiträge paarweise auf.

**Typischer Fehler:** "Mitte des Dreiecks" als Höhe/2 interpretieren — falsch. Der Schwerpunkt liegt bei $h/3$ von der Basis aus, nicht bei $h/2$.`,
        [
          'Wie viele Symmetrieachsen hat ein gleichseitiges Dreieck?',
          'Schwerpunkt muss auf jeder liegen.',
          'Schnittpunkt aller Seitenhalbierenden.',
        ],
        {
          1: '"Mitte" bei $h/2$ wäre beim Rechteck korrekt. Beim Dreieck liegt der Schwerpunkt aber bei $h/3$ von der Basis aus.',
          2: 'Ecken sind Rand- und nicht Schwerpunkte — die Masse verteilt sich ja auf die ganze Fläche.',
          3: 'Bei konvexen Flächen (Dreieck, Rechteck, Kreis) liegt der Schwerpunkt **immer innerhalb**. Nur bei Ringen oder L-Formen kann er außerhalb liegen.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
      ni(
        'Ein Kreisring hat Außenradius $R = 50\\,\\text{mm}$ und Innenradius $r = 20\\,\\text{mm}$. Wie weit liegt der Schwerpunkt vom Mittelpunkt entfernt?',
        0, 0.01, 'mm',
        `**Ansatz:** Ein Kreisring ist **zentralsymmetrisch** (unendlich viele Symmetrieachsen durch den Mittelpunkt). Der Schwerpunkt muss auf allen liegen — nur der Mittelpunkt selbst erfüllt das.

**Rechnung:** Keine Rechnung nötig — die Symmetrie liefert die Antwort direkt. Abstand zum Mittelpunkt: $0$.

**Probe:** Auch für einen Halbkreisring bleibt die Symmetrieachse durch den Mittelpunkt und den höchsten Punkt — dort liegt der Schwerpunkt auf dieser Achse, aber **nicht** im Mittelpunkt ($4r/(3\\pi)$-Regel).

**Typischer Fehler:** Die Flächenformel $A_\\text{Ring} = \\pi(R^2 - r^2)$ für nicht-existente Schwerpunktberechnung benutzen. Bei voller Rotationssymmetrie ist der Schwerpunkt immer im Zentrum.`,
        [
          'Wie viele Symmetrieachsen hat ein Kreisring?',
          'Jede Achse enthält den Schwerpunkt.',
          'Zentralsymmetrie ⇒ Schwerpunkt im Zentrum.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
      matching(
        'Ordne jedem Körper die Lage seines Schwerpunkts zu.',
        [
          { left: 'Homogene Kugel', right: 'Kugelmittelpunkt (Zentralsymmetrie)' },
          { left: 'Homogener Zylinder', right: 'Auf der Zylinderachse, auf halber Höhe' },
          { left: 'Gleichschenkliges Dreieck', right: 'Auf der Symmetrieachse (Mittelsenkrechte auf Basis)' },
          { left: 'I-Profil (Doppel-T)', right: 'Auf der Mittelebene (horizontal-vertikale Symmetrie)' },
        ],
        `**Ansatz:** In jedem Fall erzwingt die Symmetrie die Lage des Schwerpunkts. Höhere Symmetrie → mehr Bedingungen → engere Lokalisierung.

**Rechnung:** Kugel: vollständige Symmetrie → Punktfixierung. Zylinder: Rotationssymmetrie + Spiegelsymmetrie → Linie und Ebene → Punkt auf Achse auf halber Höhe. Dreieck (gleichschenklig): **eine** Symmetrieachse → Schwerpunkt auf dieser Achse (aber nicht in der Mitte!). I-Profil: zwei Achsen → Schnittpunkt.

**Probe:** Zeichne die Körper und markiere alle Symmetrieachsen. Der Schwerpunkt muss der gemeinsame Punkt sein.

**Typischer Fehler:** Symmetrieachsen im 3D-Körper nur auf eine Schnittebene projizieren. Bei Kugel und Zylinder muss man auch die anderen Achsen beachten.`,
        [
          'Symmetrieachsen zählen.',
          'Schwerpunkt auf jeder Achse.',
          'Schnittpunkt aller Achsen.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
      sorting(
        'Bringe die Checkliste "Symmetrie vor Rechnung" in die richtige Reihenfolge.',
        [
          'Körper skizzieren und Geometrie klären',
          'Alle Symmetrieachsen / Symmetrieebenen eintragen',
          'Schnittpunkt / Schnittgerade der Achsen identifizieren',
          'Falls eindeutige Lage: Ergebnis direkt angeben (keine Rechnung nötig)',
          'Falls noch mehrdeutig: gewichtete Schwerpunktformel nur für die verbleibende Koordinate anwenden',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Die beste Schwerpunktrechnung ist oft keine — jede Symmetrieachse spart eine Koordinate.

**Rechnung:** Beispiel gleichschenkliges Dreieck: Symmetrieachse liefert $x_S = 0$ sofort. Nur $y_S$ muss gerechnet werden. Aufwand halbiert.

**Probe:** Bei I-Profil: zwei Symmetrieachsen → Ergebnis ohne jede Rechnung. Nur asymmetrische Profile (L, Z) brauchen die volle Formel.

**Typischer Fehler:** Blind die Formel ansetzen, ohne auf Symmetrie zu achten. Ergebnis stimmt, aber der Weg ist unnötig aufwendig und fehleranfällig.`,
        [
          'Symmetrie ist der schnellste Weg zum Schwerpunkt.',
          'Achsen einzeichnen **vor** der Rechnung.',
          'Nur die nicht durch Symmetrie fixierten Koordinaten rechnen.',
        ],
        { stage: 'apply-guided', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
      ni(
        'Ein symmetrisches T-Profil (Obergurt $100 \\times 10\\,\\text{mm}$ zentriert über Steg $10 \\times 80\\,\\text{mm}$) wird vertikal durch seine Symmetrieachse (Mitte des Stegs) betrachtet. Wie groß ist $x_S$ gemessen vom linken Rand des Obergurts? (auf 1 Nachkommastelle)',
        50, 0.1, 'mm',
        `**Ansatz:** Das T-Profil hat eine **vertikale** Symmetrieachse (Mitte von Obergurt und Steg). Der Schwerpunkt liegt auf dieser Achse.

**Rechnung:** Der Obergurt hat Breite $100\\,\\text{mm}$ → Mitte bei $50\\,\\text{mm}$ vom linken Rand. Die Symmetrieachse des Profils fällt mit $x = 50$ zusammen. Daher $x_S = 50\\,\\text{mm}$.

**Probe:** Alternative Rechnung über die Formel: Obergurt $A_1 = 1000$, $x_{S1} = 50$; Steg $A_2 = 800$, $x_{S2} = 50$ (auch in der Mitte). $x_S = (1000 \\cdot 50 + 800 \\cdot 50)/1800 = 50 \\cdot (1000+800)/1800 = 50$. ✓

**Typischer Fehler:** Über die gewichtete Summe rechnen, obwohl die Symmetrie die Antwort sofort liefert.`,
        [
          'Gibt es eine vertikale Symmetrieachse?',
          'Wo liegt sie relativ zum linken Rand?',
          'Symmetrieachse = $x_S$-Linie.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
      mc(
        'Welche Aussage trifft auf den Schwerpunkt eines homogenen U-Profils zu (Symmetrieachse vertikal durch die Mitte des Stegs)?',
        [
          '$x_S$ liegt auf der Symmetrieachse — das spart die $x$-Rechnung. $y_S$ muss separat über die Flächengewichtung berechnet werden.',
          'Beide Koordinaten müssen über die Flächenformel bestimmt werden — Symmetrie hilft hier nicht.',
          'Der Schwerpunkt liegt im geometrischen Mittelpunkt der Bounding-Box des Profils.',
          'Symmetrie wirkt nur bei geschlossenen Profilen, nicht bei U-Formen.',
        ],
        0,
        `**Ansatz:** Eine vertikale Symmetrieachse fixiert nur die $x$-Koordinate des Schwerpunkts — die $y$-Koordinate hängt von der Flächenverteilung in vertikaler Richtung ab.

**Rechnung:** $x_S = $ Mitte des Stegs (Symmetrie). $y_S$ erfordert flächengewichtete Summation über Boden, beide Schenkel — typischerweise nicht in der Mitte, weil Boden + Schenkel nicht symmetrisch um die horizontale Mittelebene verteilt sind.

**Probe:** Für ein U-Profil mit Bodenbreite $b$, Schenkelhöhe $h$, Wanddicke $t$: $x_S = b/2$ direkt aus Symmetrie. $y_S$ liegt aufgrund des Bodens **näher am Boden** als die geometrische Mitte $h/2$.

**Typischer Fehler:** Annahme, "Symmetrie heißt Schwerpunkt = Mittelpunkt". Eine **einzige** Symmetrieachse fixiert nur **eine** Koordinate.`,
        [
          'Vertikale Symmetrieachse → fixiert $x_S$.',
          '$y_S$ separat rechnen.',
          'Eine Achse, eine fixierte Koordinate.',
        ],
        {
          1: 'Symmetrie hilft sehr wohl — sie spart die $x$-Rechnung. Nur $y_S$ braucht die volle Formel.',
          2: 'Bounding-Box-Mittelpunkt entspricht nur dann dem Schwerpunkt, wenn das Profil **rechteckig vollgefüllt** wäre. Beim U-Profil mit Hohlraum stimmt das nicht.',
          3: 'Symmetrie ist eine geometrische Eigenschaft — sie funktioniert auch bei offenen Profilen (U, T, L mit symmetrischer Form).',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
      mc(
        'Studierender behauptet: "Ein L-Profil hat eine Symmetrieachse durch die Diagonale, also liegt der Schwerpunkt darauf." Wo steckt der Fehler?',
        [
          'Ein L-Profil hat im **Allgemeinen keine** Symmetrieachse. Selbst bei gleichen Schenkellängen und gleicher Wanddicke ist die Diagonale nur dann eine Symmetrieachse, wenn das Profil exakt spiegelbildlich gleich ist — dann liegt der Schwerpunkt auf dieser Achse, allerdings nicht in der Mitte der Diagonale.',
          'Stimmt — jedes L-Profil hat diagonale Symmetrie.',
          'Der Fehler ist die Annahme, dass Schwerpunkt auf der Achse liegt — er liegt immer im Eckpunkt.',
          'Die Diagonalsymmetrie gilt nur bei isotropem Material.',
        ],
        0,
        `**Ansatz:** Symmetrie eines L-Profils prüfen: Spiegelung an der Diagonale ergibt nur dann dasselbe Profil, wenn die beiden Schenkel **identisch** sind (gleiche Länge, gleiche Dicke).

**Rechnung:** Standard-L-Profil im Maschinenbau: gleichseitig (z. B. $50\\times 50\\times 5\\,\\text{mm}$) hat tatsächlich diagonale Symmetrie ⇒ Schwerpunkt auf der Diagonale. Aber: ungleichseitige L-Profile ($50\\times 100\\times 5$) haben **keine** Diagonalsymmetrie und brauchen die volle Flächenformel.

**Probe:** Selbst beim symmetrischen L-Profil liegt der Schwerpunkt **nicht** in der Mitte der Diagonale — er liegt auf der Diagonale, aber näher am Innenwinkel (mehr Material im Eckbereich).

**Typischer Fehler:** Diagonalsymmetrie auf alle L-Profile übertragen. Klausurkritisch: bei ungleichseitigen Profilen Flächenformel zwingend.`,
        [
          'Diagonalsymmetrie nur bei gleichseitigem L-Profil.',
          'Bei ungleichen Schenkeln keine Symmetrie.',
          'Schwerpunkt liegt nicht auf der Diagonale, wenn $b \\neq h$.',
        ],
        {
          1: 'Falsch — nur **gleichseitige** L-Profile haben Diagonalsymmetrie. Ungleichseitige nicht.',
          2: 'Schwerpunkt eines L-Profils liegt **innerhalb** des Profils, nicht im Eckpunkt. Eckpunkt ist Außengrenze, nicht Massenmittelpunkt.',
          3: 'Symmetrie ist eine **geometrische** Eigenschaft, unabhängig vom Material. Isotropes Material hilft nicht.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
      mc(
        'Eine Maschinenkomponente besteht aus einer homogenen Kreisscheibe mit zwei symmetrisch angeordneten Bohrungen (gleicher Radius, gleicher Abstand vom Zentrum, auf gegenüberliegenden Seiten). Wo liegt der Schwerpunkt?',
        [
          'Im Zentrum der Kreisscheibe — die symmetrische Bohrungsanordnung erhält die ursprüngliche Punktsymmetrie.',
          'Auf der Verbindungslinie der zwei Bohrungen, aber nicht im Zentrum.',
          'Außerhalb der Scheibe, weil zwei Löcher den Schwerpunkt verschieben.',
          'Im Mittelpunkt einer der Bohrungen.',
        ],
        0,
        `**Ansatz:** Symmetrie analysieren — die Bohrungen sind punktsymmetrisch zum Zentrum angeordnet. Punktsymmetrie ist die strengste Form.

**Rechnung:** Mathematisch: $x_S = (A_V \\cdot 0 - A_L \\cdot a - A_L \\cdot (-a))/(A_V - 2A_L) = 0$ ($a$ = Abstand der Bohrungen). Beide Bohrungen liefern entgegengesetzte Beiträge, die sich aufheben.

**Probe:** Punktsymmetrie zwingt den Schwerpunkt in das Symmetriezentrum. Egal wie viele Löcher — solange sie punktsymmetrisch zum Zentrum verteilt sind, bleibt $S$ im Zentrum.

**Typischer Fehler:** Aufwendig ausrechnen, ohne die Symmetrie zu erkennen. Zwei symmetrische Löcher heben sich gegenseitig auf — Rechnung überflüssig.`,
        [
          'Punktsymmetrie der Bohrungen erkennen.',
          'Beiträge heben sich auf.',
          'Schwerpunkt im Symmetriezentrum.',
        ],
        {
          1: 'Falsch — die zwei symmetrischen Bohrungen heben sich gegenseitig auf. Verschiebung erfolgt nur bei **un**symmetrischer Anordnung.',
          2: 'Schwerpunkt liegt **immer** innerhalb des konvexen Hülle-Bereichs. Eine Kreisscheibe ist konvex → Schwerpunkt innen.',
          3: 'Schwerpunkt einer einzelnen Bohrung ist deren Mitte, nicht Schwerpunkt der ganzen Komponente. Beide Bohrungen tragen gleichermaßen.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['sp-symmetrie'] },
      ),
    ],

    // ── [4] Standardflächen auswendig ───────────────────────────────────
    4: [
      matching(
        'Ordne jeder Standardfläche ihre Schwerpunkt-Position zu (gemessen entlang der Symmetrieachse von der Basis bzw. vom Mittelpunkt aus).',
        [
          { left: 'Rechteck (Basis $b$, Höhe $h$)', right: 'Schwerpunkt in der Mitte: $h/2$ über der Basis' },
          { left: 'Dreieck (Basis $b$, Höhe $h$)', right: 'Schwerpunkt bei $h/3$ über der Basis (nahe der Basis)' },
          { left: 'Halbkreis (Radius $r$)', right: 'Schwerpunkt bei $4r/(3\\pi) \\approx 0{,}424\\,r$ vom Durchmesser' },
          { left: 'Viertelkreis (Radius $r$)', right: 'Schwerpunkt bei $4r/(3\\pi)$ von jedem der beiden Radien' },
        ],
        `**Ansatz:** Diese Werte sind auswendig zu lernen — sie tauchen in jeder Profil- oder Querschnittsaufgabe auf. Herleitung über Integralrechnung, aber im Maschinenbau-Alltag direkt verwendet.

**Rechnung:** Rechteck: $h/2$ (Symmetrie). Dreieck: $h/3$ über der Basis (oder $2h/3$ von der Spitze). Halbkreis: $4r/(3\\pi) \\approx 0{,}424\\,r$ vom Durchmesser weg. Viertelkreis: $4r/(3\\pi)$ von beiden Radien, gemessen entlang der Symmetriediagonale.

**Probe:** Einheiten: alle Werte sind Längen ($\\propto r$ oder $h$). Der Halbkreis-Schwerpunkt liegt **innerhalb** des Halbkreises ($0{,}424 < 1$), was auch anschaulich stimmt.

**Typischer Fehler:** Dreiecksschwerpunkt bei $h/2$ (falsch, das wäre Rechteck). Oder Halbkreis-Schwerpunkt bei $r/2$ (falsch — richtig ist $4r/(3\\pi) \\approx 0{,}424\\,r$, also etwas näher am Durchmesser als $r/2$). Außerdem: Dreiecksschwerpunkt vom falschen Ende (Spitze statt Basis).`,
        [
          'Rechteck: Mitte.',
          'Dreieck: näher an der Basis als an der Spitze.',
          'Halbkreis: knapp unter halbem Radius.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['sp-standard'] },
      ),
      ni(
        'Wo liegt der Schwerpunkt eines Halbkreises mit Radius $r = 30\\,\\text{mm}$, gemessen vom Durchmesser? (auf 2 Nachkommastellen)',
        12.73, 0.05, 'mm',
        `**Ansatz:** Standardformel: Schwerpunktabstand Halbkreis vom Durchmesser ist $y_S = 4r/(3\\pi)$.

**Rechnung:** $y_S = 4 \\cdot 30/(3 \\pi) = 120/(3\\pi) = 40/\\pi \\approx 12{,}732\\,\\text{mm}$.

**Probe:** Qualitativ: $4/(3\\pi) \\approx 0{,}424$. Schwerpunkt liegt bei $\\approx 42{,}4\\,\\%$ des Radius vom Durchmesser entfernt — etwas weniger als die Hälfte, was zur Masseverteilung (mehr Fläche nahe Durchmesser) passt.

**Typischer Fehler:** $y_S = r/2 = 15\\,\\text{mm}$ annehmen. Das wäre die Mitte eines Rechtecks, kein Halbkreis. Oder $y_S = 2r/(3\\pi)$ (Faktor $2$ vergessen): $\\approx 6{,}37\\,\\text{mm}$.`,
        [
          'Formel auswendig: $y_S = 4r/(3\\pi)$.',
          'Einsetzen: $r = 30$.',
          'Ergebnis: $\\approx 0{,}424\\,r$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['sp-standard'] },
      ),
      mc(
        'Ein Dreieck hat Höhe $h = 90\\,\\text{mm}$. Wo liegt der Schwerpunkt gemessen **von der Spitze** aus?',
        ['$y_S = 60\\,\\text{mm}$ (bei $2h/3$ von der Spitze)', '$y_S = 30\\,\\text{mm}$ (bei $h/3$ von der Spitze)', '$y_S = 45\\,\\text{mm}$ (bei $h/2$)', '$y_S = 90\\,\\text{mm}$ (an der Basis)'],
        0,
        `**Ansatz:** Dreiecksschwerpunkt liegt bei $h/3$ **von der Basis** aus — das entspricht $2h/3$ von der Spitze.

**Rechnung:** $h/3 = 30\\,\\text{mm}$ von der Basis. Spitze ist $h = 90\\,\\text{mm}$ entfernt. Vom Spitzen-Ende: $90 - 30 = 60\\,\\text{mm}$, also $2h/3$.

**Probe:** Das Dreieck hat mehr Fläche an der **Basis** (breit) als an der **Spitze** (schmal). Schwerpunkt wandert zur massereicheren Seite — Richtung Basis → $2h/3$ von der Spitze.

**Typischer Fehler:** Die Angabe "$h/3$" unkritisch als Abstand von der Spitze interpretieren. Die Konvention ist: $h/3$ **von der Basis**. Immer Bezugspunkt klären.`,
        [
          'Schwerpunkt ist näher an der breiteren Seite (Basis).',
          'Abstand zur Basis: $h/3$.',
          'Abstand zur Spitze: $h - h/3 = 2h/3$.',
        ],
        {
          1: 'Das ist $h/3 = 30\\,\\text{mm}$ als Abstand **zur Basis** — korrekt, aber die Frage fragt nach dem Abstand **zur Spitze**.',
          2: '$h/2 = 45\\,\\text{mm}$ wäre der Rechteck-Schwerpunkt, nicht Dreieck.',
          3: 'Der Schwerpunkt liegt **nicht an der Basis**, sondern ein Drittel innerhalb des Dreiecks von der Basis aus.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['sp-standard'] },
      ),
      tf(
        'Der Schwerpunkt eines Halbkreises liegt genau in der Mitte seines Radius, also bei $r/2$ vom Durchmesser aus.',
        false,
        `**Ansatz:** Der Halbkreis-Schwerpunkt liegt bei $4r/(3\\pi) \\approx 0{,}4244\\,r$, **nicht** bei $r/2 = 0{,}5\\,r$.

**Rechnung:** $4/(3\\pi) = 4/9{,}4248 \\approx 0{,}4244$. Der wahre Wert ist **kleiner** als $r/2$ — weil der Halbkreis zum Durchmesser hin breiter wird und dort mehr Fläche hat.

**Probe:** Qualitatives Argument: Die Fläche bei kleinen $y$ (nahe Durchmesser) ist breiter als bei großen $y$ (nahe Kreisrand). Mehr Fläche zieht den Schwerpunkt zum Durchmesser → $y_S < r/2$. ✓

**Typischer Fehler:** "Halbkreis-Mitte" intuitiv bei $r/2$ ansetzen. Diese Intuition stimmt nur für Rechtecke. Bei Flächen mit nicht-konstanter Breite kommt der Schwerpunkt aus einem Integral — hier $4r/(3\\pi)$.`,
        [
          'Vergleiche $4/(3\\pi)$ mit $1/2$.',
          '$3\\pi \\approx 9{,}42$, also $4/9{,}42 \\approx 0{,}42 < 0{,}5$.',
          'Der Halbkreis ist am Durchmesser breiter.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['sp-standard'] },
      ),
      ni(
        'Ein Profil besteht aus einem Rechteck ($60 \\times 40\\,\\text{mm}$) mit einem aufgesetzten Dreieck (Basis $60\\,\\text{mm}$ auf der Oberkante des Rechtecks, Höhe $30\\,\\text{mm}$ nach oben). Wo liegt $y_S$ des Gesamtprofils? (Ursprung in der linken unteren Ecke des Rechtecks, auf 1 Nachkommastelle)',
        28.2, 0.2, 'mm',
        `**Ansatz:** Rechteck-Schwerpunkt $y_{S1} = 20\\,\\text{mm}$ (Mitte). Dreieck-Schwerpunkt $y_{S2} = 40 + h/3 = 40 + 10 = 50\\,\\text{mm}$ (Basis auf Oberkante, $h/3$ darüber). Flächengewichtetes Mittel.

**Rechnung:** $A_1 = 60 \\cdot 40 = 2400\\,\\text{mm}^2$, $y_{S1} = 20\\,\\text{mm}$. $A_2 = \\tfrac{1}{2} \\cdot 60 \\cdot 30 = 900\\,\\text{mm}^2$, $y_{S2} = 50\\,\\text{mm}$. $y_S = (2400 \\cdot 20 + 900 \\cdot 50)/(2400 + 900) = (48\\,000 + 45\\,000)/3300 = 93\\,000/3300 \\approx 28{,}18\\,\\text{mm}$.

**Probe:** Ergebnis $\\approx 28\\,\\text{mm}$ liegt zwischen $20$ und $50$. ✓ Näher an $20$, weil $A_1 > A_2$.

**Typischer Fehler:** Dreieck-Schwerpunkt bei $y = 40 + 15 = 55\\,\\text{mm}$ (mit $h/2$ statt $h/3$). Oder Dreiecksfläche als $b \\cdot h$ statt $\\tfrac{1}{2} b h$.`,
        [
          'Rechteck-Schwerpunkt: Mitte der Höhe.',
          'Dreieck-Schwerpunkt: $h/3$ über der Basis.',
          'Dreiecksfläche: $\\tfrac{1}{2} b h$ — Faktor 1/2 nicht vergessen.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['sp-standard'] },
      ),
      mc(
        'Studierende behauptet: "Bei einem Dreieck liegt der Schwerpunkt bei $h/2$ — wie beim Rechteck." Wo steckt der Fehler?',
        [
          'Beim Dreieck ist der Schwerpunkt bei $h/3$ über der Basis (näher an der breiteren Seite). $h/2$ wäre nur korrekt, wenn Dreieck oben und unten gleich breit wäre — also ein Rechteck.',
          'Stimmt — alle ebenen Flächen haben Schwerpunkt in der Höhenmitte.',
          'Korrekt, aber nur für gleichseitige Dreiecke.',
          'Es fehlt der Faktor $\\sqrt{3}/2$: bei Dreieck ist $h_S = h\\sqrt{3}/2 \\cdot 1/2$.',
        ],
        0,
        `**Ansatz:** Schwerpunkt-Lage hängt von der Massen-Verteilung über die Höhe ab. Beim Rechteck ist die Breite konstant ⇒ Schwerpunkt mittig ($h/2$). Beim Dreieck wächst die Breite linear von $0$ (Spitze) auf $b$ (Basis) ⇒ mehr Material unten ⇒ Schwerpunkt unter der Mitte ($h/3$).

**Rechnung:** Standardformel: $y_S = h/3$ über der Basis (oder $2h/3$ von der Spitze). Allgemein für Flächen: Schwerpunkt aus Integral $\\int y \\cdot b(y)\\,dy / \\int b(y)\\,dy$. Für Rechteck $b(y) = $ const ⇒ $h/2$. Für Dreieck $b(y) = b(1 - y/h)$ ⇒ $h/3$.

**Probe:** Anschaulich: ein Dreieck "kippt" leichter in Richtung Basis, weil dort mehr Material ist. Auch im Hebelversuch: an der Spitze hängend kippt es schon bei kleinem Auslenken.

**Typischer Fehler:** Universelle "$h/2$"-Regel anwenden, weil sie beim Rechteck stimmt. Schwerpunkt-Lage ist **flächenabhängig** und kann je nach Form ganz unterschiedlich liegen.`,
        [
          'Vergleich Rechteck vs. Dreieck.',
          'Konstante Breite vs. linear wachsende Breite.',
          'Mehr Material an der Basis → tieferer Schwerpunkt.',
        ],
        {
          1: 'Falsch — Schwerpunkt-Höhe hängt von der Form ab. Rechteck $h/2$, Dreieck $h/3$, Halbkreis $4r/(3\\pi) \\approx 0{,}424\\,r$ — alle unterschiedlich.',
          2: 'Auch bei gleichseitigen Dreiecken gilt $h/3$, nicht $h/2$. Form bestimmt die Lage.',
          3: 'Der Faktor $\\sqrt 3/2$ tritt bei der Höhenformel des **gleichseitigen Dreiecks** auf ($h = a\\sqrt 3/2$), aber nicht im Schwerpunkt-Verhältnis.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['sp-standard'] },
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-2-1 — Newtonsche Gesetze  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-2-1': {

    // ── [0] 2. Newton: ΣF = m·a (Grundgleichung der Dynamik) ────────────
    0: [
      mc(
        'Auf einen Körper wirkt eine resultierende Kraft von $F = 50\\,\\text{N}$. Mit welcher Beschleunigung bewegt sich eine Masse von $m = 25\\,\\text{kg}$?',
        ['$2\\,\\text{m/s}^2$', '$0{,}5\\,\\text{m/s}^2$', '$25\\,\\text{m/s}^2$', '$1250\\,\\text{m/s}^2$'],
        0,
        `**Ansatz:** 2. Newton nach der Beschleunigung umstellen: $a = F/m$.

**Rechnung:** $a = \\dfrac{50\\,\\text{N}}{25\\,\\text{kg}} = 2\\,\\text{m/s}^2$.

**Probe:** Rückwärts: $F = m \\cdot a = 25 \\cdot 2 = 50\\,\\text{N}$ ✓. Einheiten: $\\text{N}/\\text{kg} = (\\text{kg} \\cdot \\text{m/s}^2)/\\text{kg} = \\text{m/s}^2$ ✓.

**Typischer Fehler:** $F$ und $m$ vertauschen ($m/F$) oder multiplizieren ($F \\cdot m = 1250$). Beschleunigung folgt aus $a = F/m$, nicht aus $m/F$ oder $F \\cdot m$.`,
        [
          '2. Newton aufschreiben und nach $a$ auflösen.',
          '$a = F/m$ — Kraft durch Masse.',
          '$50/25 = ?$',
        ],
        {
          1: '$0{,}5$ entsteht aus $25/50$ — Zähler und Nenner vertauscht. Richtig: $a = F/m = 50/25$.',
          2: '$25$ ist der Wert der Masse, nicht der Beschleunigung. Du hast $m$ direkt eingetragen.',
          3: '$1250 = 50 \\cdot 25$ — du hast multipliziert statt dividiert. $F = m \\cdot a$ ergibt umgestellt $a = F/m$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['newton-2'] },
      ),
      mc(
        'Eine Studentin rechnet für $m = 10\\,\\text{kg}$ und Resultierende $F = 80\\,\\text{N}$: „$a = F \\cdot m = 800\\,\\text{m/s}^2$". Wo steckt der Fehler?',
        [
          'Sie hat multipliziert statt dividiert. Richtig: $a = F/m = 80/10 = 8\\,\\text{m/s}^2$.',
          'Die Rechnung stimmt — $a$ ist tatsächlich $800\\,\\text{m/s}^2$.',
          'Sie hat $g$ vergessen. Richtig: $a = F/(m \\cdot g) \\approx 0{,}82\\,\\text{m/s}^2$.',
          'Sie hat eine falsche Einheit benutzt — der Zahlenwert stimmt aber.',
        ],
        0,
        `**Ansatz:** 2. Newton: $F = m \\cdot a$, umgestellt $a = F/m$. Multiplikation der beiden gegebenen Größen ergibt nicht die Beschleunigung.

**Rechnung:** $a = \\dfrac{80\\,\\text{N}}{10\\,\\text{kg}} = 8\\,\\text{m/s}^2$.

**Probe:** $F = m \\cdot a = 10 \\cdot 8 = 80\\,\\text{N}$ ✓. Einheit-Check: $\\text{N}/\\text{kg} = \\text{m/s}^2$ ✓. $800\\,\\text{m/s}^2$ wäre rund $80\\cdot g$ — physikalisch unrealistisch für eine Resultierende von nur $80\\,\\text{N}$.

**Typischer Fehler:** Aus $F = m \\cdot a$ statt $a = F/m$ direkt $a = F \\cdot m$ machen — Umstellungs-Lücke.`,
        [
          '$F = m \\cdot a$ — wonach muss aufgelöst werden?',
          'Beim Auflösen wird **dividiert**, nicht multipliziert.',
          'Plausibilitäts-Check: $800\\,\\text{m/s}^2 \\approx 80\\,g$ — viel zu viel für $80\\,\\text{N}$.',
        ],
        {
          1: '$800\\,\\text{m/s}^2$ wäre eine extreme Beschleunigung (etwa das 80-fache der Erdbeschleunigung). Das passt nicht zu einer Kraft von nur $80\\,\\text{N}$.',
          2: '$g$ ist hier irrelevant — die Aufgabe gibt die **resultierende** Kraft direkt vor; man dividiert nur durch $m$.',
          3: 'Die Einheit ist nicht das Problem — der Zahlenwert $800$ ist um den Faktor $100$ falsch (multiplikative statt dividierte Kombination).',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['newton-2'] },
      ),
      ni(
        'Ein Auto mit $m = 1500\\,\\text{kg}$ bremst gleichmäßig von $90\\,\\text{km/h}$ auf $0$ in $5\\,\\text{s}$. Wie groß ist die Bremskraft (Betrag)?',
        7500, 5, 'N',
        `**Ansatz:** 1) Geschwindigkeit in m/s umrechnen. 2) Beschleunigung aus $a = \\Delta v/\\Delta t$. 3) Kraft aus $|F| = m \\cdot |a|$.

**Rechnung:** $v_0 = 90\\,\\text{km/h} = 90/3{,}6 = 25\\,\\text{m/s}$. $|a| = 25/5 = 5\\,\\text{m/s}^2$. $|F| = 1500 \\cdot 5 = 7500\\,\\text{N}$.

**Probe:** Plausibilitäts-Check: $7500\\,\\text{N}$ entsprechen rund $\\tfrac{7500}{9{,}81} \\approx 765\\,\\text{kgf}$ — typische Bremskraft eines Pkw bei moderater Bremsung. ✓ Einheiten: $\\text{kg} \\cdot \\text{m/s}^2 = \\text{N}$ ✓.

**Typischer Fehler:** km/h direkt in $a = \\Delta v/\\Delta t$ einsetzen → falscher Zahlenwert um Faktor $3{,}6$. Immer in SI-Einheiten umrechnen, bevor man rechnet.`,
        [
          'Erst Einheiten umrechnen: $90\\,\\text{km/h} \\to \\text{m/s}$.',
          '$a = \\Delta v / \\Delta t$.',
          '$|F| = m \\cdot |a|$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['newton-2'] },
      ),
      mc(
        'Bei gleicher Kraft, aber doppelter Masse — wie ändert sich die Beschleunigung?',
        ['halbiert sich', 'verdoppelt sich', 'bleibt gleich', 'vervierfacht sich'],
        0,
        `**Ansatz:** 2. Newton: $a = F/m$. Bei festem $F$ ist $a$ umgekehrt proportional zu $m$.

**Rechnung:** $a_{\\text{neu}} = F/(2m) = \\tfrac{1}{2} \\cdot F/m = \\tfrac{1}{2} a_{\\text{alt}}$.

**Probe:** Beispiel: $F = 100\\,\\text{N}$, $m = 10\\,\\text{kg}$ → $a = 10\\,\\text{m/s}^2$. Mit $m = 20\\,\\text{kg}$ → $a = 5\\,\\text{m/s}^2$ — halbiert. ✓

**Typischer Fehler:** Direkte statt umgekehrte Proportionalität annehmen ($a$ wachse mit $m$). $a$ und $m$ stehen aber im Nenner verbunden.`,
        [
          'Wo steht $m$ in der Formel $a = F/m$?',
          'Nenner verdoppeln → Quotient halbieren.',
          'Umgekehrt proportional, nicht direkt.',
        ],
        {
          1: 'Verdopplung der Masse vergrößert die Trägheit — Beschleunigung wird **kleiner**, nicht größer.',
          2: 'Bei festem $F$ hängt $a$ von $m$ ab. „Bleibt gleich" gilt nur, wenn auch $F$ entsprechend mitwächst.',
          3: 'Vervierfachung träte ein, wenn $m$ geviertelt würde — hier ist $m$ verdoppelt, nicht geviertelt.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['newton-2'] },
      ),
      ni(
        'Auf eine Masse $m = 5\\,\\text{kg}$ wirken zwei kollineare Kräfte: $F_1 = 30\\,\\text{N}$ nach rechts und $F_2 = 10\\,\\text{N}$ nach links. Welche Beschleunigung ergibt sich (positiv = nach rechts)?',
        4, 0.05, 'm/s^2',
        `**Ansatz:** Erst die **resultierende** Kraft bestimmen ($\\sum F$), dann $a = \\sum F / m$.

**Rechnung:** $\\sum F = F_1 - F_2 = 30 - 10 = 20\\,\\text{N}$ (nach rechts). $a = 20/5 = 4\\,\\text{m/s}^2$.

**Probe:** $F = m \\cdot a = 5 \\cdot 4 = 20\\,\\text{N}$ ✓. Vorzeichen passt: Rechts-Kraft überwiegt → Beschleunigung nach rechts (positiv).

**Typischer Fehler:** Beide Kräfte einfach addieren ($30 + 10 = 40$) statt vorzeichenrichtig. Bei kollinearen Kräften unterschiedlicher Richtung: subtrahieren.`,
        [
          'Einzelkräfte vorzeichenrichtig in eine Achsenrichtung legen.',
          '$\\sum F = F_1 - F_2$, weil $F_2$ entgegengesetzt zeigt.',
          '$a = \\sum F / m$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['newton-2'] },
      ),
    ],

    // ── [1] 1. Newton: Trägheit (ohne Kraft → gleichförmige Bewegung) ──
    1: [
      tf(
        'Wirkt auf einen Körper keine resultierende Kraft, so behält er seinen Bewegungszustand bei: er ruht oder bewegt sich gleichförmig auf einer Geraden.',
        true,
        `**Ansatz:** Das ist exakt das 1. Newton-Gesetz (Trägheitsprinzip).

**Rechnung:** Mathematisch: $\\sum \\vec F = \\vec 0 \\;\\Rightarrow\\; \\vec a = \\vec 0 \\;\\Rightarrow\\; \\vec v = \\text{const}$.

**Probe:** Beispiel reibungsfreier Puck auf Eis: ohne resultierende Kraft gleitet er konstant geradeaus. Beispiel ruhender Stein: $\\vec v = \\vec 0 = \\text{const}$ — auch das ist „gleichförmig".

**Typischer Fehler:** Glauben, dass „Bewegung Kraft braucht". Bewegung **erhält** sich von selbst, **Beschleunigung** braucht eine resultierende Kraft.`,
        [
          'Wie lautet das 1. Newton-Gesetz wörtlich?',
          'Aus $\\sum F = 0$ folgt $a = 0$ — was heißt das für $v$?',
          'Ruhe ist ein Spezialfall gleichförmiger Bewegung ($v = 0 = \\text{const}$).',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['newton-1'] },
      ),
      mc(
        'Ein Eishockey-Puck gleitet auf nahezu reibungsfreiem Eis mit konstanter Geschwindigkeit auf einer Geraden. Welche Aussage über die resultierende Kraft auf den Puck stimmt?',
        [
          '$\\sum \\vec F = \\vec 0$ — keine resultierende Kraft, daher konstante Geschwindigkeit.',
          '$\\sum \\vec F$ zeigt in Bewegungsrichtung und treibt den Puck an.',
          '$\\sum \\vec F = m \\cdot \\vec v$ — Kraft proportional zur Geschwindigkeit.',
          '$\\sum \\vec F$ zeigt entgegen der Bewegungsrichtung — sie hält den Puck gleichmäßig.',
        ],
        0,
        `**Ansatz:** 1. Newton — gleichförmige Bewegung ⇔ resultierende Kraft null.

**Rechnung:** Konstantes $\\vec v$ heißt $\\vec a = \\vec 0$. Mit 2. Newton folgt $\\sum \\vec F = m \\cdot \\vec a = \\vec 0$.

**Probe:** Auf den Puck wirken einzelne Kräfte (Gewichtskraft, Normalkraft des Eises, evtl. minimale Reibung). In Summe heben sie sich auf — sonst würde sich $\\vec v$ ändern.

**Typischer Fehler:** Annehmen, dass Bewegung eine antreibende Kraft erfordert. Das ist Aristoteles, nicht Newton.`,
        [
          'Was sagt das 1. Newton-Gesetz über konstante Geschwindigkeit?',
          'Konstantes $v$ ⇒ $a = 0$ ⇒ $\\sum F = ?$',
          'Antriebskraft braucht es nur für **Beschleunigung**, nicht für **Bewegung**.',
        ],
        {
          1: 'Eine Kraft in Bewegungsrichtung würde den Puck **beschleunigen** — die Geschwindigkeit wäre dann nicht mehr konstant.',
          2: '$F = m \\cdot v$ ist physikalisch nicht das 2. Newton (das wäre $F = m \\cdot a$). Geschwindigkeit allein erzeugt keine Kraft.',
          3: 'Eine entgegengesetzte resultierende Kraft würde den Puck **abbremsen**, nicht „gleichmäßig halten".',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['newton-1'] },
      ),
      mc(
        'Ein Aufzug fährt mit konstanter Geschwindigkeit aufwärts. Eine Person ($m = 75\\,\\text{kg}$) steht auf einer Personenwaage in der Kabine. Was zeigt die Waage an?',
        [
          'Genau die Gewichtskraft auf der Erde, also rund $736\\,\\text{N}$ (bzw. $75\\,\\text{kg}$ in kg-Anzeige).',
          'Mehr als $736\\,\\text{N}$, weil der Aufzug die Person zusätzlich „hochdrückt".',
          'Weniger als $736\\,\\text{N}$, weil die Person beim Aufwärtsfahren leichter wird.',
          '$0\\,\\text{N}$ — die Kabine trägt die Person komplett.',
        ],
        0,
        `**Ansatz:** Konstante Geschwindigkeit ⇒ $\\vec a = \\vec 0$ ⇒ $\\sum F = 0$ am Körper Person.

**Rechnung:** Auf die Person wirken Gewichtskraft $F_G = m \\cdot g$ nach unten und Normalkraft $N$ der Waage nach oben. $\\sum F = N - F_G = 0 \\;\\Rightarrow\\; N = F_G = 75 \\cdot 9{,}81 \\approx 736\\,\\text{N}$.

**Probe:** Die Waage misst die Normalkraft. Bei $a = 0$ ist sie identisch zur Gewichtskraft — egal ob die Kabine ruht, gleichförmig auf- oder abwärts fährt.

**Typischer Fehler:** Aufwärtsfahren mit Aufwärtsbeschleunigung verwechseln. Nur **beschleunigte** Aufzüge (Anfahren/Bremsen) zeigen abweichende Werte; bei konstanter Geschwindigkeit nicht.`,
        [
          'Wie groß ist die Beschleunigung bei konstanter Geschwindigkeit?',
          '$a = 0$ ⇒ $\\sum F = 0$ ⇒ Normalkraft = Gewichtskraft.',
          'Die Personenwaage misst die Normalkraft.',
        ],
        {
          1: 'Mehr Anzeige käme nur bei **Beschleunigung** nach oben (z. B. beim Anfahren). Bei konstantem $v$ ist $a = 0$.',
          2: 'Weniger Anzeige käme bei **Beschleunigung** nach unten (z. B. beim Anhalten oben). Konstantes $v$ heißt $a = 0$.',
          3: '$0\\,\\text{N}$ wäre freier Fall ($a = -g$). Die Kabine trägt die Person nicht — die Waage trägt sie.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['newton-1'] },
      ),
      mc(
        'Ein Schüler argumentiert: „Da das Auto auf der Autobahn $130\\,\\text{km/h}$ konstant fährt, muss eine Antriebskraft konstant in Fahrtrichtung wirken." Wo steckt der Denkfehler?',
        [
          'Bei konstanter Geschwindigkeit ist $\\sum F = 0$. Antriebskraft und Widerstandskräfte (Luft, Roll) heben sich genau auf — netto wirkt keine Kraft, obwohl Antrieb nötig ist.',
          'Der Schüler hat recht — Bewegung erfordert nach Newton immer eine resultierende Kraft.',
          'Die Aussage stimmt, weil $F = m \\cdot v$ gilt: konstante Geschwindigkeit ⇒ konstante Kraft.',
          'Falsch — auf das Auto wirkt nur die Gewichtskraft $m \\cdot g$ nach unten, sonst nichts.',
        ],
        0,
        `**Ansatz:** 1. Newton: konstantes $v$ ⇒ $\\sum F = 0$. Das schließt **einzelne** Kräfte nicht aus — es heißt nur, dass sie sich aufheben.

**Rechnung:** Antriebskraft $F_{\\text{Antrieb}}$ in Fahrtrichtung, Widerstandskräfte $F_{\\text{Wid}}$ (Luft + Roll) entgegen. $\\sum F = F_{\\text{Antrieb}} - F_{\\text{Wid}} = 0 \\;\\Rightarrow\\; F_{\\text{Antrieb}} = F_{\\text{Wid}}$.

**Probe:** Würde der Antrieb wegfallen, bremste das Auto durch Widerstand ab. Würde der Widerstand verschwinden (Vakuum, ideales Lager), liefe das Auto ohne Antrieb gleichförmig — genau wie der Eishockey-Puck.

**Typischer Fehler:** „Keine resultierende Kraft" mit „keine Einzelkräfte" verwechseln. Newton spricht von der **Summe**, nicht von einzelnen Kräften.`,
        [
          'Was sagt $\\sum F = 0$ über einzelne Kräfte aus?',
          'Antrieb und Widerstand können sich aufheben.',
          'Newton lebt nicht in einer reibungsfreien Welt — Antrieb braucht es als **Ausgleich**.',
        ],
        {
          1: 'Das ist die Aristotelische Sicht. Newton sagt: für **Beschleunigung** braucht es Kraft, für gleichförmige Bewegung nicht.',
          2: '$F = m \\cdot v$ ist falsch — Newton lautet $F = m \\cdot a$. Geschwindigkeit erzeugt keine Kraft.',
          3: 'Doch — Antrieb, Widerstand, Normalkräfte der Räder. Die Gewichtskraft ist nur eine von vielen Kräften.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['newton-1'] },
      ),
      mc(
        'Im Bus, der plötzlich bremst, kippen stehende Passagiere nach vorne. Welches Newtonsche Gesetz erklärt das am direktesten?',
        [
          '1. Newton: Die Passagiere wollen ihre Bewegung beibehalten; während der Bus abbremst, gleiten sie ohne Bremskraft am Boden noch mit Anfangsgeschwindigkeit weiter — relativ zum Bus also nach vorn.',
          '2. Newton: Die Bremskraft $F = m \\cdot a$ wirkt auf den Bus und schiebt die Passagiere nach vorn.',
          '3. Newton: Die Bremskraft des Busses erzeugt eine Reaktionskraft, die die Passagiere nach vorn drückt.',
          'Gravitation: Die Erdbeschleunigung $g$ zieht Passagiere beim Bremsen nach vorn.',
        ],
        0,
        `**Ansatz:** Frage zielt auf das Trägheitsprinzip. Die Passagiere bekommen nicht plötzlich eine Vorwärts-Kraft — sie behalten nur ihre alte Geschwindigkeit bei.

**Rechnung:** Bus: $v$ nimmt rasch ab (Bremskraft über Reifen-Boden-Reibung). Passagier auf glattem Boden: $\\sum F \\approx 0$ ⇒ $v$ bleibt zunächst konstant. Im Bus-Bezugssystem fühlt sich das wie eine „Trägheitskraft" nach vorn an.

**Probe:** Die Bremskraft greift nur an den **Rädern** des Busses an, nicht an den Passagieren. Über die Sohlen-Reibung wird ein Teil übertragen — wenn die zu klein ist, kippen die Personen.

**Typischer Fehler:** Eine „Trägheitskraft" als reale Kraft im Inertialsystem deuten. Sie ist nur ein Effekt der Wahl eines beschleunigten Bezugssystems.`,
        [
          'Welche Kraft wirkt direkt auf den Passagier?',
          'Wenn keine wirkt, was sagt das 1. Newton?',
          'Relativ zum bremsenden Bus erscheint das wie ein Vorwärts-„Schub".',
        ],
        {
          1: 'Die Bremskraft $F = m \\cdot a$ wirkt auf den **Bus**, nicht auf die Passagiere. Die müssen erst über Reibung „mitgenommen" werden.',
          2: 'actio = reactio bezieht sich auf Kraftpaare zwischen zwei Körpern, nicht auf Bremsverhalten.',
          3: 'Die Erdbeschleunigung wirkt nach **unten**, nicht nach vorn — sie erklärt nicht das Vorwärtskippen.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['newton-1'] },
      ),
      tf(
        'Ein im All um die Erde kreisender Satellit ohne Antrieb erfährt keine resultierende Kraft und fliegt deshalb laut 1. Newton geradeaus weiter.',
        false,
        `**Ansatz:** 1. Newton gilt nur, wenn $\\sum \\vec F = \\vec 0$. Ein Satellit auf einer Kreisbahn erfährt aber durchgehend die Gravitationskraft der Erde als **Zentripetalkraft**.

**Rechnung:** $\\sum \\vec F = \\vec F_{\\text{Grav}} \\neq \\vec 0$, gerichtet zum Erdmittelpunkt. Diese Kraft erzeugt die Zentripetalbeschleunigung $a = v^2/r$, die die Bahn vom Geradeaus-Pfad ablenkt.

**Probe:** Wäre $\\sum F$ tatsächlich null, würde der Satellit die Erde verlassen (geradlinige Bewegung). Beobachtung: er bleibt im Orbit — also wirkt eine resultierende Kraft.

**Typischer Fehler:** „Schwerelosigkeit" mit „kraftfrei" verwechseln. Der Astronaut **fühlt** keine Stützkraft, aber die Gravitation wirkt sehr wohl auf ihn — er fällt nur frei mit der Kapsel zusammen.`,
        [
          'Wirkt im Orbit eine Kraft auf den Satelliten?',
          'Ohne Kraft → Geradeausflug. Was beobachten wir wirklich?',
          'Schwerelosigkeit ≠ kraftfrei.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['newton-1'] },
      ),
    ],

    // ── [2] 3. Newton: actio = reactio ──────────────────────────────────
    2: [
      tf(
        'Ein Apfel ($F_G = 1\\,\\text{N}$) liegt auf einem Tisch. Die nach unten gerichtete Gewichtskraft $F_G$ und die nach oben gerichtete Normalkraft $N$ des Tisches auf den Apfel bilden zusammen das actio-reactio-Paar nach 3. Newton.',
        false,
        `**Ansatz:** actio-reactio-Paare greifen an **verschiedenen** Körpern an. $F_G$ und $N$ greifen aber **beide** am Apfel an — sie sind ein 1./2.-Newton-Gleichgewicht ($\\sum F = 0$), kein 3.-Newton-Paar.

**Rechnung:** Die korrekten Paare sind:
* zu $F_G$ (Erde → Apfel): Apfel zieht Erde mit gleicher Kraft an (Apfel → Erde).
* zu $N$ (Tisch → Apfel): Apfel drückt Tisch mit gleicher Kraft nach unten (Apfel → Tisch).

**Probe:** Faustregel: actio-reactio-Paare immer nach dem Schema „Körper A → Körper B" und „Körper B → Körper A". Wenn beide Kräfte am gleichen Körper angreifen, ist es **kein** 3.-Newton-Paar.

**Typischer Fehler:** Im Freikörperbild des Apfels die nach oben wirkende Normalkraft als „Gegenkraft" zur Gewichtskraft missverstehen. Beide wirken am Apfel — das ist Gleichgewicht, nicht actio-reactio.`,
        [
          'An welchen Körpern greifen actio und reactio?',
          '$F_G$ und $N$ greifen beide am Apfel an — kann das ein 3.-Newton-Paar sein?',
          'Korrekte Reaktionspartner: Apfel auf Erde (zu $F_G$), Apfel auf Tisch (zu $N$).',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['newton-3'] },
      ),
      mc(
        'Welches der folgenden Kräftepaare ist ein actio-reactio-Paar nach 3. Newton?',
        [
          'Schwimmer drückt Wasser nach hinten — Wasser drückt Schwimmer nach vorn.',
          'Gewichtskraft und Normalkraft auf eine Vase, die auf einem Tisch steht.',
          'Federkraft und Massenträgheit beim schwingenden Pendel.',
          'Auftrieb und Gewichtskraft auf einen schwimmenden Körper.',
        ],
        0,
        `**Ansatz:** Test: greifen die zwei Kräfte an **verschiedenen** Körpern an, sind sie gleich groß und entgegengesetzt?

**Rechnung:** Schwimmer/Wasser: $\\vec F_{\\text{Schw}\\to\\text{Wasser}} = -\\vec F_{\\text{Wasser}\\to\\text{Schw}}$, je eine Kraft pro Körper — exakt 3. Newton.

**Probe:** Die anderen Optionen sind alle **Gleichgewichte** am selben Körper (1./2. Newton mit $\\sum F = 0$).

**Typischer Fehler:** Jedes Kraftpaar gleicher Größe und entgegengesetzter Richtung als actio-reactio fehlinterpretieren — der Punkt ist, dass die Kräfte an **zwei** Körpern angreifen müssen.`,
        [
          'Wie viele Körper sind beteiligt?',
          'actio-reactio ⇒ ein Paar, zwei Körper.',
          'Gleichgewicht am selben Körper ⇒ kein actio-reactio.',
        ],
        {
          1: 'Beide Kräfte greifen an der **Vase** an. Das ist Gleichgewicht ($\\sum F = 0$), nicht actio-reactio.',
          2: '„Massenträgheit" ist keine eigene Kraft im Sinne Newtons — sie beschreibt nur die Tendenz, $\\vec v$ zu erhalten. Echte Kraftpaare zwischen Pendel und Aufhängung wären ein 3.-Newton-Beispiel.',
          3: 'Auftrieb und Gewichtskraft greifen beide am schwimmenden Körper an — Gleichgewicht, nicht actio-reactio.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['newton-3'] },
      ),
      mc(
        'Eine Astronautin ($m_A = 60\\,\\text{kg}$) stößt sich von einer ruhenden Raumkapsel ($m_K = 1500\\,\\text{kg}$) ab. Während des Abstoßes wirkt auf die Astronautin die Stoßkraft $F = 300\\,\\text{N}$. Welche Aussage ist korrekt?',
        [
          'Auf die Kapsel wirkt zur selben Zeit eine Gegenkraft von $300\\,\\text{N}$ (3. Newton). Beschleunigung Astronautin: $a_A = 5\\,\\text{m/s}^2$, Kapsel: $a_K = 0{,}2\\,\\text{m/s}^2$.',
          'Die Kapsel erfährt keine Kraft, weil die Astronautin sich „selbst" abstößt.',
          'Auf die Kapsel wirkt nur ein Bruchteil von $300\\,\\text{N}$ — proportional zum Massenverhältnis.',
          'Astronautin und Kapsel beschleunigen gleich stark, da das 3. Newton gleiche Beschleunigungen erzwingt.',
        ],
        0,
        `**Ansatz:** 3. Newton liefert **gleiche Kräfte** an beiden Körpern. Die Beschleunigungen folgen über 2. Newton aus den jeweiligen Massen.

**Rechnung:** $|F| = 300\\,\\text{N}$ auf jeden Körper.
* Astronautin: $a_A = 300/60 = 5\\,\\text{m/s}^2$.
* Kapsel: $a_K = 300/1500 = 0{,}2\\,\\text{m/s}^2$.
Verhältnis $a_A/a_K = m_K/m_A = 25$ — die kleinere Masse wird stärker beschleunigt.

**Probe:** Impuls-Erhaltung: $m_A \\cdot v_A = m_K \\cdot v_K$ nach gleicher Stoßdauer ⇒ $v_A/v_K = 25$. Konsistent. ✓

**Typischer Fehler:** Glauben, das 3. Newton erzwinge gleiche **Beschleunigungen**. Es erzwingt nur gleiche **Kräfte**; Beschleunigungen unterscheiden sich invers zu den Massen.`,
        [
          'Welche Größe ist nach 3. Newton an beiden Körpern gleich — Kraft oder Beschleunigung?',
          'Beschleunigung: $a = F/m$ — und $m$ ist hier sehr unterschiedlich.',
          '$300/60$ vs. $300/1500$.',
        ],
        {
          1: 'Doch — die Astronautin drückt die Kapsel mit $300\\,\\text{N}$ weg (3. Newton). Sie kann sich nicht „selbst" abstoßen.',
          2: 'Massenverhältnis verändert die **Beschleunigung**, nicht die Kraft. Beide Körper erfahren $300\\,\\text{N}$.',
          3: 'Das 3. Newton erzwingt gleiche **Kräfte**, nicht gleiche Beschleunigungen. Beschleunigungen folgen aus $a = F/m$.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['newton-3'] },
      ),
      mc(
        'Im Freikörperbild eines auf dem Tisch ruhenden Buches zeichnet ein Studierender: „Gewichtskraft $F_G$ nach unten und actio-reactio-Gegenkraft $F_G$ nach oben — also $\\sum F = 0$, das Buch ruht." Wo steckt der Denkfehler?',
        [
          'actio-reactio-Paare greifen an verschiedenen Körpern an. Die Reaktion zu $F_G$ (Erde → Buch) wirkt auf die **Erde** (Buch → Erde), nicht auf das Buch. Die nach oben gerichtete Kraft am Buch ist die Normalkraft des **Tisches**.',
          'Der Studierende hat recht — actio = reactio gilt immer am selben Körper.',
          'Im Freikörperbild darf die Gewichtskraft nicht eingezeichnet werden; nur die Normalkraft.',
          'Das Buch ruht nicht — $F_G$ ist immer größer als jede Reaktion.',
        ],
        0,
        `**Ansatz:** Klassischer 3.-Newton-Fehler. Reaktion zu „Erde → Buch" ist „Buch → Erde", **nicht** eine andere Kraft am Buch.

**Rechnung:** Am Buch wirken zwei Kräfte: $F_G$ (Erde → Buch) nach unten und $N$ (Tisch → Buch) nach oben. $\\sum F = N - F_G = 0$ liefert $N = F_G$ — aber $N$ ist **kein** actio-reactio-Partner zu $F_G$.

**Probe:** Trick: Schreibe „A → B" und „B → A" auf. Reaktion zu $F_{\\text{Erde→Buch}}$ ist $F_{\\text{Buch→Erde}}$ — die wirkt nicht am Buch.

**Typischer Fehler:** Im Freikörperbild Reaktionen als Gegenkräfte am selben Körper einzeichnen. Reaktionen wirken **nie** am selben Körper.`,
        [
          'An welchem Körper wirkt die Reaktion zu $F_G$?',
          'Reaktion: „Buch zieht die Erde an" — Wirkung auf die Erde, nicht auf das Buch.',
          'Was am Buch nach oben wirkt, kommt vom Tisch (Normalkraft).',
        ],
        {
          1: '3. Newton verlangt **explizit**, dass actio und reactio an verschiedenen Körpern angreifen.',
          2: 'Doch — im Freikörperbild des Buches gehört die Gewichtskraft ($F_G$) genauso hinein wie die Normalkraft.',
          3: 'Falsch — am Buch greifen $F_G$ und $N$ an, beide gleich groß; das Buch ruht. Reaktion zu $F_G$ wirkt auf die Erde, nicht am Buch selbst.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['newton-3'] },
      ),
      mc(
        'Ein Pferd zieht eine Kutsche horizontal an einem Seil. Nach 3. Newton zieht die Kutsche das Pferd mit gleicher Kraft entgegengesetzt. Warum bewegt sich die Kutsche dann überhaupt vorwärts?',
        [
          'Die Kräfte greifen an **unterschiedlichen** Körpern. Auf die Kutsche wirken Seilzug nach vorn und Reibung nach hinten — Seilzug überwiegt, also $\\sum F > 0$. Das Pferd treibt sich seinerseits über die Hufreibung am Boden vorwärts.',
          'Das 3. Newton gilt nur bei stehenden Körpern, nicht im Fahrbetrieb.',
          'Die Reaktionskraft ist tatsächlich kleiner als die actio, weil Reibung sie reduziert.',
          'Pferd und Kutsche beschleunigen nicht — der Eindruck täuscht; sie ruhen relativ zum Boden.',
        ],
        0,
        `**Ansatz:** Das Paradox löst sich, sobald man **Freikörperbilder** für Pferd und Kutsche **getrennt** zeichnet. Jeder Körper hat seine eigene resultierende Kraft.

**Rechnung:** Auf die Kutsche: Seilzug $F_S$ (vorwärts) und Reibung $F_{R,K}$ (rückwärts). $\\sum F_K = F_S - F_{R,K} > 0$ ⇒ Beschleunigung. Auf das Pferd: Hufreibung $F_{R,P}$ (vorwärts) und Seilzug $F_S$ (rückwärts) ⇒ $\\sum F_P = F_{R,P} - F_S > 0$.

**Probe:** Beide $\\sum F$ können positiv sein, weil sie verschiedene Reibungskräfte enthalten. Das 3.-Newton-Paar (Seilzug auf Kutsche vs. auf Pferd) hebt sich **systemweit** auf, aber **nicht** an einem einzelnen Körper.

**Typischer Fehler:** Kräftegleichungen für Pferd und Kutsche „in einen Topf werfen". 3.-Newton-Paare auf verschiedenen Körpern dürfen im FKB des einzelnen Körpers nicht gemeinsam stehen.`,
        [
          'FKB für Kutsche und Pferd **getrennt** zeichnen.',
          'Welche Kräfte wirken an der Kutsche? Welche am Pferd?',
          'Die 3.-Newton-Partner stehen in **verschiedenen** FKBs.',
        ],
        {
          1: 'Doch — 3. Newton gilt **immer**, auch bei beschleunigten Körpern. Es ist ein Naturgesetz, kein Sonderfall.',
          2: 'Reaktion ist **immer** gleich groß und entgegengesetzt — Reibung reduziert sie nicht.',
          3: 'Pferd und Kutsche beschleunigen tatsächlich (gleich, weil über Seil verbunden) — das ist im Alltag direkt beobachtbar.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['newton-3'] },
      ),
      matching(
        'Ordne jeder actio-Kraft die korrekte reactio-Kraft (nach 3. Newton) zu.',
        [
          { left: 'Hand schiebt einen Einkaufswagen nach vorn.', right: 'Wagen drückt die Hand mit gleicher Kraft nach hinten.' },
          { left: 'Erde zieht den Mond an.', right: 'Mond zieht die Erde mit gleicher Kraft an.' },
          { left: 'Rakete stößt Verbrennungsgase nach unten aus.', right: 'Gase drücken die Rakete mit gleicher Kraft nach oben.' },
          { left: 'Magnet zieht einen Eisennagel an.', right: 'Eisennagel zieht den Magnet mit gleicher Kraft an.' },
        ],
        `**Ansatz:** Schema „A → B" / „B → A". Beide Kräfte gleich groß, entgegengesetzt, an verschiedenen Körpern.

**Rechnung:** Jedes Paar nutzt das Muster $\\vec F_{AB} = -\\vec F_{BA}$. Der Schwimmer/Wasser-Fall, der Bezugskraft/Gegenkraft-Fall und der Gravitations-Fall folgen alle derselben Logik.

**Probe:** Konsequenz beim Raketenstart: Die nach unten ausgestoßenen Gase tragen einen Impuls; die nach oben gerichtete Reaktion auf die Rakete ist exakt der Antrieb.

**Typischer Fehler:** Die Reaktion „auf den Boden" zu schreiben statt auf den jeweiligen anderen Körper. Beim Magnet: die Reaktion wirkt am Eisennagel auf **den Magneten**, nicht auf eine dritte Instanz.`,
        [
          'Schema „A → B" und „B → A".',
          'Beide Kräfte gleich groß, entgegengesetzt.',
          'Reaktion immer am **anderen** Körper.',
        ],
        { stage: 'apply-guided', subGoal: 2, uses: ['newton-3'] },
      ),
    ],

    // ── [3] Gewichtskraft: F_G = m·g ─────────────────────────────────────
    3: [
      tf(
        'Auf der Erdoberfläche beträgt die Gewichtskraft einer Masse $m$ ungefähr $F_G = m \\cdot 9{,}81\\,\\text{m/s}^2$ — ausgedrückt in Newton.',
        true,
        `**Ansatz:** Definitionsgleichung Gewichtskraft im Schwerefeld der Erde.

**Rechnung:** $F_G = m \\cdot g$ mit $g \\approx 9{,}81\\,\\text{m/s}^2$ auf der Erdoberfläche. Beispiel: $m = 1\\,\\text{kg} \\Rightarrow F_G \\approx 9{,}81\\,\\text{N}$.

**Probe:** Einheiten: $\\text{kg} \\cdot \\text{m/s}^2 = \\text{N}$ ✓.

**Typischer Fehler:** $g$ als „Konstante 10" mitnehmen — das ist nur eine Näherung. In Klausuren wird meist $9{,}81\\,\\text{m/s}^2$ erwartet, sofern nicht anders angegeben.`,
        [
          'Wie ist die Gewichtskraft definiert?',
          'Welcher Wert hat $g$ auf der Erde?',
          'Einheit der Gewichtskraft = Newton.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['gewichtskraft'] },
      ),
      ni(
        'Welche Gewichtskraft wirkt auf eine Masse $m = 75\\,\\text{kg}$ auf der Erde? ($g = 9{,}81\\,\\text{m/s}^2$)',
        735.75, 0.5, 'N',
        `**Ansatz:** $F_G = m \\cdot g$ direkt einsetzen.

**Rechnung:** $F_G = 75\\,\\text{kg} \\cdot 9{,}81\\,\\text{m/s}^2 = 735{,}75\\,\\text{N}$.

**Probe:** Plausibilität — eine $75\\,\\text{kg}$-Person sollte rund $750\\,\\text{N}$ wiegen ($\\approx 75 \\cdot 10$). Stimmt. Einheiten: $\\text{kg} \\cdot \\text{m/s}^2 = \\text{N}$ ✓.

**Typischer Fehler:** Einheit „kg" für die Gewichtskraft notieren — die Antwort wäre dann sprachlich „$75\\,\\text{kg-Gewicht}$", was im SI-System nicht zulässig ist. Korrekt: Newton.`,
        [
          '$F_G = m \\cdot g$.',
          '$m = 75$, $g = 9{,}81$.',
          'Einheit Newton, nicht kg.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['gewichtskraft'] },
      ),
      mc(
        'Eine Studentin rechnet für $m = 5\\,\\text{kg}$: „$F_G = m + g = 5 + 9{,}81 = 14{,}81\\,\\text{N}$." Wo steckt der Fehler?',
        [
          'Masse und Beschleunigung werden **multipliziert**, nicht addiert: $F_G = m \\cdot g = 5 \\cdot 9{,}81 = 49{,}05\\,\\text{N}$. Einheiten kg und m/s² sind nicht addierbar.',
          'Die Rechnung stimmt — $F_G$ beträgt tatsächlich $14{,}81\\,\\text{N}$.',
          'Sie hat $g$ zu hoch angesetzt — richtig wäre $g = 9{,}8\\,\\text{m/s}^2$, der Rest passt.',
          'Sie sollte durch $g$ dividieren: $F_G = m/g \\approx 0{,}51\\,\\text{N}$.',
        ],
        0,
        `**Ansatz:** $F_G = m \\cdot g$ — multiplikative Verknüpfung. Eine Addition hat schon dimensionsmäßig keinen Sinn.

**Rechnung:** $F_G = 5 \\cdot 9{,}81 = 49{,}05\\,\\text{N}$.

**Probe:** Einheitenanalyse $\\text{kg} + \\text{m/s}^2$ ist undefiniert — das hätte sofort auffallen müssen. $\\text{kg} \\cdot \\text{m/s}^2 = \\text{N}$ ist korrekt.

**Typischer Fehler:** Mathematisch oberflächlich rechnen, ohne Einheitencheck. Faustregel: vor jeder Antwort die Einheit prüfen.`,
        [
          'Wie ist $F_G$ definiert: addiert oder multipliziert?',
          'Einheiten-Check: $\\text{kg} + \\text{m/s}^2$ — geht das?',
          '$5 \\cdot 9{,}81 = ?$',
        ],
        {
          1: '$14{,}81$ entstand durch Addition. Einheit $\\text{kg} + \\text{m/s}^2$ ist undefiniert — die „N"-Beschriftung kaschiert den Fehler.',
          2: 'Der Wert von $g$ (ob $9{,}8$ oder $9{,}81$) ändert nichts am Grundfehler — Addition statt Multiplikation.',
          3: 'Division wäre noch unphysikalischer: $\\text{kg}/(\\text{m/s}^2)$ liefert keine Kraft.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['gewichtskraft'] },
      ),
      ni(
        'Auf dem Mond beträgt die Schwerebeschleunigung $g_{\\text{Mond}} \\approx 1{,}62\\,\\text{m/s}^2$. Welche Gewichtskraft hat eine Person mit Masse $m = 80\\,\\text{kg}$ auf dem Mond?',
        129.6, 0.5, 'N',
        `**Ansatz:** $F_G = m \\cdot g$ — auch auf dem Mond, nur mit dem Mond-$g$.

**Rechnung:** $F_G = 80 \\cdot 1{,}62 = 129{,}6\\,\\text{N}$.

**Probe:** Vergleich Erde: $80 \\cdot 9{,}81 = 784{,}8\\,\\text{N}$. Verhältnis $784{,}8/129{,}6 \\approx 6{,}05$ — Mond-Gewichtskraft ist rund $1/6$ der Erd-Gewichtskraft. Stimmt mit der bekannten Faustformel überein. ✓

**Typischer Fehler:** Glauben, $F_G$ sei ortsunabhängig. Nur die **Masse** ist es; die Gewichtskraft skaliert linear mit dem lokalen $g$.`,
        [
          'Welche Größe ändert sich auf dem Mond: $m$ oder $g$?',
          '$F_G = m \\cdot g_{\\text{Mond}}$.',
          '$80 \\cdot 1{,}62$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['gewichtskraft'] },
      ),
      ni(
        'Eine Bauteil-Aufhängung darf maximal $F_G = 2000\\,\\text{N}$ tragen. Welche Masse darf maximal aufgehängt werden? ($g = 9{,}81\\,\\text{m/s}^2$, Antwort in kg auf 2 Nachkommastellen)',
        203.87, 0.05, 'kg',
        `**Ansatz:** $F_G = m \\cdot g$ nach $m$ auflösen: $m = F_G / g$.

**Rechnung:** $m = 2000/9{,}81 \\approx 203{,}87\\,\\text{kg}$.

**Probe:** Rückwärts: $m \\cdot g = 203{,}87 \\cdot 9{,}81 \\approx 1999{,}97\\,\\text{N} \\approx 2000\\,\\text{N}$ ✓.

**Typischer Fehler:** Statt $F_G/g$ direkt $F_G$ als kg-Wert übernehmen ($2000\\,\\text{kg}$) — Verwechslung Gewichtskraft (N) und Masse (kg).`,
        [
          'Aus $F_G = m \\cdot g$ nach $m$ umstellen.',
          '$m = F_G/g$.',
          '$2000/9{,}81$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['gewichtskraft'] },
      ),
    ],

    // ── [4] Masse (kg) vs. Gewichtskraft (N) ────────────────────────────
    4: [
      tf(
        'Die Masse eines Körpers ist auf Erde und Mond gleich, seine Gewichtskraft hingegen ist auf dem Mond etwa sechsmal kleiner als auf der Erde.',
        true,
        `**Ansatz:** Masse ist Eigenschaft des Körpers (ortsunabhängig). Gewichtskraft hängt linear vom lokalen $g$ ab.

**Rechnung:** $g_{\\text{Erde}}/g_{\\text{Mond}} = 9{,}81/1{,}62 \\approx 6{,}05$. Die Gewichtskraft am gleichen Körper skaliert genauso.

**Probe:** $m = 1\\,\\text{kg}$: $F_{G,\\text{Erde}} \\approx 9{,}81\\,\\text{N}$, $F_{G,\\text{Mond}} \\approx 1{,}62\\,\\text{N}$. Verhältnis ≈ $6$.

**Typischer Fehler:** Masse und Gewichtskraft als „dasselbe in unterschiedlichen Einheiten" sehen. Sie sind **physikalisch verschiedene Größen**.`,
        [
          'Was ändert sich beim Ortswechsel: $m$ oder $g$?',
          '$F_G = m \\cdot g$ — bei festem $m$, anderem $g$.',
          'Faktor $g_{\\text{Erde}}/g_{\\text{Mond}} \\approx 6$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['masse-vs-fg'] },
      ),
      mc(
        'Welche Aussage über Masse und Gewichtskraft ist korrekt?',
        [
          'Masse hat die Einheit kg und ist eine Eigenschaft des Körpers; Gewichtskraft hat die Einheit N und hängt vom lokalen Schwerefeld ab.',
          'Masse und Gewichtskraft sind zwei Namen für dieselbe Größe — die Einheiten kg und N sind austauschbar.',
          'Masse ändert sich mit dem Ort (Erde, Mond), Gewichtskraft ist eine Konstante des Körpers.',
          'Masse ist die Trägheit, Gewichtskraft ist nur ein älteres Wort für „Masse" und hat dieselbe Einheit.',
        ],
        0,
        `**Ansatz:** Definitionen: Masse $m$ in kg ist invariant. Gewichtskraft $F_G = m \\cdot g$ in N hängt vom Ort ab.

**Rechnung:** Auf der Erde wiegt $1\\,\\text{kg}$ rund $9{,}81\\,\\text{N}$, auf dem Mond rund $1{,}62\\,\\text{N}$ — die Masse bleibt $1\\,\\text{kg}$.

**Probe:** Eine Balkenwaage misst Masse (vergleicht zwei Massen direkt — funktioniert auch auf dem Mond). Eine Federwaage misst Gewichtskraft (Federauslenkung — zeigt auf dem Mond andere Werte).

**Typischer Fehler:** Im Alltag „Gewicht" und „Masse" synonym verwenden. Physikalisch sind sie verschiedene Größen mit unterschiedlichen Einheiten.`,
        [
          'Welche Einheit hat $m$? Welche $F_G$?',
          'Was bleibt beim Ortswechsel gleich?',
          'Federwaage vs. Balkenwaage als Anschauung.',
        ],
        {
          1: 'kg und N sind verschiedene Einheiten verschiedener Größen — kg = Masse, N = Kraft.',
          2: 'Genau umgekehrt: Masse bleibt konstant, Gewichtskraft ändert sich mit dem Ort.',
          3: '„Trägheit" ist tatsächlich eine Eigenschaft der Masse, aber „Gewichtskraft" ist davon **getrennt** — sie hat die Einheit N, nicht kg.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['masse-vs-fg'] },
      ),
      mc(
        'Eine Sportlerin liest auf einer Personenwaage „$65\\,\\text{kg}$" ab. Welche Aussage trifft physikalisch korrekt zu?',
        [
          'Ihre Masse ist $65\\,\\text{kg}$. Genaugenommen misst die Waage die Gewichtskraft (rund $638\\,\\text{N}$) und rechnet sie in eine kg-Anzeige um, indem sie durch $g$ teilt.',
          'Ihr Gewicht beträgt $65\\,\\text{kg}$.',
          'Ihre Gewichtskraft beträgt $65\\,\\text{kg}$.',
          'Ihre Masse ändert sich beim Aufzugfahren — daher zeigt die Waage in beschleunigten Aufzügen verschiedene Werte.',
        ],
        0,
        `**Ansatz:** Personenwaage = Federwaage. Sie misst die Normalkraft = Gewichtskraft (im Ruhefall) und beschriftet sie als Masse, kalibriert auf $g_{\\text{Erde}}$.

**Rechnung:** Anzeige $65\\,\\text{kg}$: $F_G = 65 \\cdot 9{,}81 = 637{,}65\\,\\text{N}$.

**Probe:** Im beschleunigten Aufzug zeigt die Waage abweichende Werte — nicht weil die Masse sich ändert, sondern weil die Normalkraft (≠ Gewichtskraft) sich ändert: $N = m(g + a)$.

**Typischer Fehler:** Glauben, im Aufzug ändere sich die Masse. Es ändert sich nur die Normalkraft, weil eine zusätzliche Beschleunigung wirkt.`,
        [
          'Was misst die Federwaage physikalisch wirklich?',
          'Warum zeigt sie trotzdem „kg"?',
          'Im Aufzug: ändert sich $m$ oder $a$?',
        ],
        {
          1: '„Gewicht" ist umgangssprachlich. Die Einheit „kg" gehört physikalisch zur **Masse**, nicht zur Gewichtskraft.',
          2: 'Gewichtskraft hat die Einheit N, nicht kg.',
          3: 'Die Masse ist invariant. Im beschleunigten Aufzug ändert sich nicht $m$, sondern die Normalkraft $N = m(g + a)$.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['masse-vs-fg'] },
      ),
      mc(
        'Eine Studierende notiert in einer Aufgabe: „Die Gewichtskraft eines Buches beträgt $0{,}5\\,\\text{kg}$." Was ist der Fehler?',
        [
          'Sie hat die Einheit der **Masse** (kg) für die **Gewichtskraft** (N) verwendet. Bei $m = 0{,}5\\,\\text{kg}$ beträgt die Gewichtskraft $F_G = 0{,}5 \\cdot 9{,}81 \\approx 4{,}9\\,\\text{N}$.',
          'Das Buch ist zu leicht — eine Gewichtskraft kleiner als $1\\,\\text{kg}$ ist physikalisch unmöglich.',
          '$0{,}5\\,\\text{kg}$ ist die Masse — Gewichtskraft ist $g \\cdot m = 9{,}81 \\cdot 0{,}5 = 4{,}9\\,\\text{kg}$.',
          'Die Einheiten kg und N sind im Alltag austauschbar, der Schreibfehler ist unkritisch.',
        ],
        0,
        `**Ansatz:** Klassische Verwechslung Masse-Einheit (kg) mit Kraft-Einheit (N).

**Rechnung:** Die Studierende hat vermutlich die **Masse** $0{,}5\\,\\text{kg}$ aufgeschrieben und „Gewichtskraft" davorgesetzt. Korrekt: $F_G = 0{,}5 \\cdot 9{,}81 \\approx 4{,}9\\,\\text{N}$.

**Probe:** Eine Gewichtskraft hat **immer** die Einheit Newton. Wenn die Einheit kg auftaucht, ist es eine Masse, keine Kraft.

**Typischer Fehler:** Im Alltag ist „kg-Gewicht" gebräuchlich. In der Physik strikt trennen: Masse = kg, Kraft = N.`,
        [
          'Welche Einheit hat eine Kraft im SI-System?',
          'kg ist die Einheit für Masse, N für Kraft.',
          'Wenn der Wert in kg steht, ist es die Masse, nicht die Gewichtskraft.',
        ],
        {
          1: 'Eine Gewichtskraft kann durchaus kleiner als $1\\,\\text{kg-Gewicht}$ sein — aber das Problem ist die **Einheit** kg, nicht der Zahlenwert.',
          2: 'Die Multiplikation $g \\cdot m$ ist richtig, aber die Einheit des Ergebnisses ist N, nicht kg.',
          3: 'In Klausuren und in technischen Berechnungen sind kg und N **nicht** austauschbar — sie haben unterschiedliche Dimensionen.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['masse-vs-fg'] },
      ),
      mc(
        'Ein Astronaut hat auf der Erde $80\\,\\text{kg}$ Masse und damit eine Gewichtskraft von rund $785\\,\\text{N}$. Auf einem Planeten X misst dieselbe Federwaage $320\\,\\text{N}$. Welche Masse hat der Astronaut auf Planet X, und welches $g$ hat Planet X?',
        [
          'Masse bleibt $80\\,\\text{kg}$ (ortsunabhängig). $g_X = F_G/m = 320/80 = 4\\,\\text{m/s}^2$.',
          'Masse sinkt auf $320/9{,}81 \\approx 32{,}6\\,\\text{kg}$, $g_X$ bleibt $9{,}81\\,\\text{m/s}^2$.',
          'Masse $80\\,\\text{kg}$, $g_X = 320 \\cdot 80 = 25\\,600\\,\\text{m/s}^2$.',
          'Sowohl Masse als auch $g$ ändern sich proportional — die Größen sind nicht eindeutig bestimmbar.',
        ],
        0,
        `**Ansatz:** Masse ist ortsunabhängig — sie bleibt $80\\,\\text{kg}$. Gewichtskraft ändert sich linear mit $g$, also liefert $F_G = m \\cdot g$ direkt das lokale $g$.

**Rechnung:** $g_X = F_G/m = 320/80 = 4\\,\\text{m/s}^2$.

**Probe:** Vergleich: $g_X/g_{\\text{Erde}} = 4/9{,}81 \\approx 0{,}41$. Die Gewichtskraft auf Planet X ist also rund $41\\,\\%$ der irdischen — passt zu $320/785 \\approx 0{,}408$. ✓

**Typischer Fehler:** Annehmen, die Masse ändere sich, weil die Federwaage einen anderen Wert zeigt. Die Federwaage misst Kraft, nicht Masse.`,
        [
          'Bleibt die Masse beim Ortswechsel gleich?',
          '$F_G = m \\cdot g$ — was ist hier gegeben, was gesucht?',
          '$g_X = F_G / m$.',
        ],
        {
          1: 'Masse ist invariant — die Federwaage zeigt nicht Masse, sondern Kraft.',
          2: '$g_X = F_G \\cdot m$ wäre dimensional falsch ($\\text{N} \\cdot \\text{kg} \\neq \\text{m/s}^2$). Man muss $F_G$ durch $m$ teilen.',
          3: 'Doch — eindeutig bestimmbar, weil $m$ ortsunabhängig ist und $F_G$ direkt gemessen wurde.',
        },
        { stage: 'transfer', subGoal: 4, uses: ['masse-vs-fg'] },
      ),
      matching(
        'Ordne jeder Beobachtung die korrekte Größe (Masse oder Gewichtskraft) zu.',
        [
          { left: 'Eine Balkenwaage gleicht zwei unbekannte Mengen aus.', right: 'Misst die Masse $m$ (Einheit kg), funktioniert auf jedem Planeten gleich.' },
          { left: 'Eine Federwaage misst die Auslenkung einer geeichten Feder.', right: 'Misst die Gewichtskraft $F_G$ (Einheit N), Anzeige hängt vom lokalen $g$ ab.' },
          { left: 'Astronaut reist vom Mond zur Erde — was ändert sich?', right: 'Gewichtskraft steigt um Faktor rund $6$, Masse bleibt unverändert.' },
          { left: 'Reise vom Pol zum Äquator (kleineres $g$ am Äquator).', right: 'Gewichtskraft sinkt minimal, Masse bleibt unverändert.' },
        ],
        `**Ansatz:** Masse-vs-Kraft-Unterscheidung über das **Messprinzip** des Geräts: Vergleich (Balkenwaage) oder Federauslenkung (Federwaage).

**Rechnung:** Balkenwaage vergleicht $m_1 \\cdot g$ mit $m_2 \\cdot g$ — das $g$ kürzt sich, sie misst direkt das Massenverhältnis. Federwaage misst $F = c \\cdot \\Delta x$, also Kraft.

**Probe:** Astronauten-Beispiel: $80\\,\\text{kg}$ bleiben überall $80\\,\\text{kg}$. Gewichtskraft Mond ≈ $130\\,\\text{N}$, Erde ≈ $785\\,\\text{N}$, Faktor 6.

**Typischer Fehler:** Annehmen, Personenwaagen messen direkt Masse. Sie messen Kraft und teilen durch $g_{\\text{Erde}}$ — das funktioniert nur auf der Erde.`,
        [
          'Wie funktioniert eine Balkenwaage? Was kürzt sich?',
          'Federwaage misst Auslenkung — direkt proportional zur **Kraft**.',
          'Was bleibt beim Ortswechsel invariant?',
        ],
        { stage: 'apply-guided', subGoal: 4, uses: ['masse-vs-fg'] },
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-2-4 — Schwingungen  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-2-4': {

    // ── [0] Eigenkreisfrequenz $\omega_0 = \sqrt{c/m}$, Periode $T = 2\pi/\omega_0$ ─
    0: [
      ni(
        'Ein Feder-Masse-System hat $c = 800\\,\\text{N/m}$ und $m = 2\\,\\text{kg}$. Wie groß ist $\\omega_0$?',
        20, 0.05, 'rad/s',
        `**Ansatz:** Eigenkreisfrequenz des ungedämpften Feder-Masse-Systems: $\\omega_0 = \\sqrt{c/m}$.

**Rechnung:** $c/m = 800/2 = 400\\,\\text{s}^{-2}$. $\\omega_0 = \\sqrt{400} = 20\\,\\text{rad/s}$.

**Probe:** Einheiten: $\\sqrt{(\\text{N/m})/\\text{kg}} = \\sqrt{1/\\text{s}^2} = \\text{rad/s}$. ✓ Zahlenwert plausibel (typische Werte liegen zwischen $1$ und $100\\,\\text{rad/s}$ für mechanische Systeme).

**Typischer Fehler:** Quotient $c/m = 400$ direkt als $\\omega_0$ angeben — Wurzel vergessen. Dimension wäre $\\text{s}^{-2}$ statt $\\text{rad/s}$.`,
        [
          'Formel: $\\omega_0 = \\sqrt{c/m}$.',
          'Erst $c/m$ bilden, dann Wurzel.',
          'Einheit Endergebnis: rad/s.',
        ],
      ),
      mc(
        'Wie ändert sich $\\omega_0$, wenn die Masse bei gleicher Feder **verdoppelt** wird?',
        [
          '$\\omega_0$ wird um den Faktor $1/\\sqrt{2}$ kleiner',
          '$\\omega_0$ wird halbiert',
          '$\\omega_0$ bleibt gleich',
          '$\\omega_0$ wird um den Faktor $\\sqrt{2}$ größer',
        ],
        0,
        `**Ansatz:** Aus $\\omega_0 = \\sqrt{c/m}$ folgt: wenn $m \\to 2m$, dann $\\omega_{0,\\text{neu}} = \\sqrt{c/(2m)} = \\omega_0/\\sqrt{2}$.

**Rechnung:** Verhältnis $\\omega_{0,\\text{neu}}/\\omega_0 = \\sqrt{1/2} = 1/\\sqrt{2} \\approx 0{,}707$. Also: $\\omega_0$ wird um Faktor $0{,}707$ kleiner.

**Probe:** Anschaulich: schwerere Masse → träger → langsamere Schwingung → kleinere Kreisfrequenz und längere Periode. Periode $T = 2\\pi/\\omega_0$ wächst entsprechend um $\\sqrt{2}$.

**Typischer Fehler:** Die Wurzel vergessen und linear rechnen ($\\omega_0$ halbieren). Oder Richtung umdrehen ($\\omega_0$ größer machen).`,
        [
          '$m$ erscheint **unter** der Wurzel im Nenner.',
          '$\\sqrt{1/2} = 1/\\sqrt{2}$.',
          'Mehr Masse = träger = langsamer.',
        ],
        {
          1: 'Halbieren würde $\\omega_{0,\\text{neu}} = \\omega_0/2$ bedeuten — das ignoriert die Wurzel. Die Abhängigkeit ist quadratwurzelförmig, nicht linear.',
          2: 'Die Eigenfrequenz hängt von der Masse ab — größere Masse verschiebt $\\omega_0$ nach unten. "Bleibt gleich" gilt nur beim mathematischen Pendel.',
          3: 'Die Richtung ist falsch. Größere Masse erhöht die Trägheit, die Frequenz sinkt (nicht steigt).',
        },
      ),
      ni(
        '$c = 500\\,\\text{N/m}$, $m = 5\\,\\text{kg}$. Berechne die Schwingungsdauer $T$. (auf 2 Nachkommastellen)',
        0.63, 0.01, 's',
        `**Ansatz:** Erst $\\omega_0 = \\sqrt{c/m}$, dann $T = 2\\pi/\\omega_0$.

**Rechnung:** $\\omega_0 = \\sqrt{500/5} = \\sqrt{100} = 10\\,\\text{rad/s}$. $T = 2\\pi/10 \\approx 0{,}6283\\,\\text{s} \\approx 0{,}63\\,\\text{s}$.

**Probe:** Alternative Formel $T = 2\\pi\\sqrt{m/c} = 2\\pi \\sqrt{0{,}01} = 2\\pi \\cdot 0{,}1 = 0{,}628\\,\\text{s}$. ✓ Einheit: rad/s → $1/\\text{rad/s} \\cdot \\text{rad} = \\text{s}$. ✓

**Typischer Fehler:** $T = 2\\pi \\cdot \\omega_0$ rechnen — liefert $62{,}8\\,\\text{s}$, absurd groß. Oder $T = 1/\\omega_0 = 0{,}1\\,\\text{s}$ (Faktor $2\\pi$ unterschlagen).`,
        [
          '$\\omega_0 = \\sqrt{500/5} = 10\\,\\text{rad/s}$.',
          'Periode: $T = 2\\pi/\\omega_0$ (Division!).',
          '$2\\pi/10 \\approx 0{,}628\\,\\text{s}$.',
        ],
      ),
      tf(
        'Wird die Federsteifigkeit $c$ verdoppelt (Masse gleich), verdoppelt sich auch die Eigenkreisfrequenz $\\omega_0$.',
        false,
        `**Ansatz:** $\\omega_0 = \\sqrt{c/m}$ — Abhängigkeit ist $\\sqrt{c}$, nicht linear in $c$.

**Rechnung:** Bei $c \\to 2c$ ergibt sich $\\omega_{0,\\text{neu}} = \\sqrt{2c/m} = \\sqrt{2} \\cdot \\omega_0$. Also Faktor $\\sqrt{2} \\approx 1{,}414$, nicht $2$.

**Probe:** Konkret: $c = 400$, $m = 1$ → $\\omega_0 = 20\\,\\text{rad/s}$. Verdopple $c$ auf $800$: $\\omega_0 = \\sqrt{800} \\approx 28{,}28\\,\\text{rad/s} = \\sqrt{2} \\cdot 20$. ✓

**Typischer Fehler:** Die Wurzel gedanklich weglassen und linear rechnen. Um $\\omega_0$ zu verdoppeln, müsste $c$ **vervierfacht** werden.`,
        [
          '$\\omega_0 = \\sqrt{c/m}$ — Wurzel beachten.',
          '$\\sqrt{2c} = \\sqrt{2}\\sqrt{c}$.',
          '$\\omega_0$ hängt **sub**linear von $c$ ab.',
        ],
      ),
      matching(
        'Ordne jeder Änderung am Feder-Masse-System die resultierende Änderung von $\\omega_0$ zu.',
        [
          { left: 'Masse $m$ verdoppeln', right: '$\\omega_0$ um Faktor $1/\\sqrt{2}$ kleiner' },
          { left: 'Masse $m$ halbieren', right: '$\\omega_0$ um Faktor $\\sqrt{2}$ größer' },
          { left: 'Federsteifigkeit $c$ verdoppeln', right: '$\\omega_0$ um Faktor $\\sqrt{2}$ größer' },
          { left: 'Federsteifigkeit $c$ vervierfachen', right: '$\\omega_0$ verdoppelt sich' },
        ],
        `**Ansatz:** Aus $\\omega_0 = \\sqrt{c/m}$ liest man die Skalierungen direkt ab: jede Änderung im Radikanden um Faktor $k$ wirkt als $\\sqrt{k}$ auf $\\omega_0$.

**Rechnung:** $m \\to 2m \\Rightarrow \\omega_0/\\sqrt{2}$. $m \\to m/2 \\Rightarrow \\sqrt{2}\\omega_0$. $c \\to 2c \\Rightarrow \\sqrt{2}\\omega_0$. $c \\to 4c \\Rightarrow 2\\omega_0$.

**Probe:** Merkregel — um $\\omega_0$ zu verdoppeln, reicht entweder $c \\times 4$ oder $m \\div 4$. Diese Asymmetrie zwischen $c$ und $m$ (beide wirken unter der Wurzel) ist prüfungsrelevant.

**Typischer Fehler:** Linear statt $\\sqrt{\\cdot}$ skalieren und z. B. denken, Feder verdoppeln verdopple $\\omega_0$.`,
        [
          '$\\omega_0 = \\sqrt{c/m}$ — Faktor unter der Wurzel wirkt als $\\sqrt{\\cdot}$.',
          '$\\sqrt{2} \\approx 1{,}414$, $1/\\sqrt{2} \\approx 0{,}707$.',
          '$\\sqrt{4} = 2$ — darum braucht es Faktor $4$ in $c$, um $\\omega_0$ zu verdoppeln.',
        ],
      ),
      sorting(
        'Bringe die Schritte zur Berechnung der Schwingungsdauer $T$ aus $c$ und $m$ in die richtige Reihenfolge.',
        [
          '$T$ aus $2\\pi/\\omega_0$ ausrechnen und Einheit (Sekunde) prüfen',
          'Formel notieren: $\\omega_0 = \\sqrt{c/m}$',
          'Quotient $c/m$ mit konsistenten Einheiten (N/m und kg) bilden',
          'Wurzel ziehen: $\\omega_0$ in rad/s',
          'Periodenformel $T = 2\\pi/\\omega_0$ aufschreiben',
        ],
        [1, 2, 3, 4, 0],
        `**Ansatz:** Erst Formel, dann Einsetzen, dann Wurzel, dann Periode — sonst schleichen sich Einheitenfehler ein.

**Rechnung:** Logische Reihenfolge: (1) Formel $\\omega_0 = \\sqrt{c/m}$ hinschreiben, (2) $c/m$ einsetzen, (3) Wurzel ziehen, (4) Periodenformel $T = 2\\pi/\\omega_0$ notieren, (5) $T$ ausrechnen und Einheit prüfen.

**Probe:** Ohne Schritt (2) landet man schnell in einem Einheitensalat ($c$ in N/mm statt N/m ist ein Klassiker). Schritt (5) (Einheitencheck) ist die letzte Versicherung gegen grobe Fehler.

**Typischer Fehler:** Direkt zur Periodenformel $T = 2\\pi\\sqrt{m/c}$ springen und die Einheitenprüfung auslassen — wenn $c$ versehentlich in N/mm angegeben wurde, ist $T$ um Faktor $\\sqrt{1000} \\approx 31{,}6$ falsch.`,
        [
          'Formel zuerst, Zahlen danach.',
          'Einheiten vor dem Wurzelziehen prüfen.',
          'Faktor $2\\pi$ erst am Ende.',
        ],
      ),
    ],

    // ── [1] Harmonische Schwingung: $x(t) = A \sin(\omega_0 t + \varphi)$ ──
    1: [
      mc(
        'Was bezeichnet der Parameter $A$ in der Schwingungsgleichung?',
        [
          'Die maximale Auslenkung aus der Ruhelage (Amplitude)',
          'Die Kreisfrequenz in rad/s',
          'Die Periodendauer in Sekunden',
          'Den Phasenwinkel zum Zeitpunkt $t = 0$',
        ],
        0,
        `**Ansatz:** In $x(t) = A \\sin(\\omega_0 t + \\varphi)$ hat der Sinus den Wertebereich $[-1, +1]$. $A$ ist der **Vorfaktor**, also der Maximalwert von $|x(t)|$.

**Rechnung:** $x_\\max = A \\cdot 1 = A$, $x_\\min = -A$. $A$ trägt dieselbe Einheit wie $x$ (meist Meter).

**Probe:** Beispiel $A = 0{,}03\\,\\text{m}$: Masse pendelt zwischen $-30\\,\\text{mm}$ und $+30\\,\\text{mm}$ um die Ruhelage.

**Typischer Fehler:** $A$ mit der Kreisfrequenz $\\omega_0$ oder dem Phasenwinkel $\\varphi$ verwechseln. Merkregel: $A$ steht **vor** dem Sinus, $\\omega_0$ und $\\varphi$ stehen **im** Sinus.`,
        [
          'Im Sinus: $\\omega_0$ und $\\varphi$. Vor dem Sinus: $A$.',
          'Sinus hat Wertebereich $[-1, +1]$.',
          'Einheit von $A$ = Einheit von $x$.',
        ],
        {
          1: 'Die Kreisfrequenz ist $\\omega_0$ — sie steht **im** Sinus-Argument, nicht davor.',
          2: 'Die Periodendauer ergibt sich aus $T = 2\\pi/\\omega_0$. Sie ist kein direkter Parameter in der Schwingungsgleichung.',
          3: 'Der Phasenwinkel ist $\\varphi$ — er steht im Argument neben $\\omega_0 t$.',
        },
      ),
      ni(
        'Gegeben $x(t) = 0{,}05 \\sin(10t + \\pi/6)\\,\\text{m}$. Welche Auslenkung $x(0)$ liegt bei $t = 0$ vor? (auf 3 Nachkommastellen in Meter)',
        0.025, 0.001, 'm',
        `**Ansatz:** $t = 0$ einsetzen: $x(0) = A \\sin(\\varphi)$.

**Rechnung:** $x(0) = 0{,}05 \\cdot \\sin(\\pi/6) = 0{,}05 \\cdot 0{,}5 = 0{,}025\\,\\text{m}$.

**Probe:** $x(0)$ muss im Intervall $[-A, +A] = [-0{,}05; 0{,}05]\\,\\text{m}$ liegen. $0{,}025$ liegt dort. ✓ Außerdem: $\\sin(\\pi/6) = 0{,}5$ ist eine Standardwert-Sicherheit (Prüfungs-Memory).

**Typischer Fehler:** $\\sin(\\pi/6)$ als $\\sqrt{3}/2 \\approx 0{,}866$ (das wäre $\\sin(\\pi/3)$) oder als $\\sqrt{2}/2 \\approx 0{,}707$ (das wäre $\\sin(\\pi/4)$) einsetzen. Oder Winkel im Gradmaß interpretieren statt im Bogenmaß.`,
        [
          '$t = 0$ einsetzen: nur der Phasenterm bleibt.',
          '$\\sin(\\pi/6) = 0{,}5$ (Standardwert!).',
          'Das Argument ist in rad, nicht in Grad.',
        ],
      ),
      tf(
        'Der Phasenwinkel $\\varphi$ verschiebt die Schwingung entlang der Zeitachse, ohne Amplitude oder Frequenz zu verändern.',
        true,
        `**Ansatz:** Mit $\\sin(\\omega_0 t + \\varphi) = \\sin(\\omega_0 (t + \\varphi/\\omega_0))$ ist $\\varphi$ äquivalent zu einer Zeitverschiebung um $\\Delta t = \\varphi/\\omega_0$.

**Rechnung:** Amplitude $A$ steht **vor** dem Sinus — bleibt unverändert. Frequenz $\\omega_0$ multipliziert mit $t$ — bleibt unverändert. Nur die Nulldurchgänge verschieben sich.

**Probe:** Beispiel: $\\varphi = \\pi/2$ macht aus $\\sin$ einen $\\cos$ — dieselbe Kurve, nur um $T/4$ früher.

**Typischer Fehler:** Glauben, $\\varphi$ ändere die Amplitude (nein — $A$ ist unabhängig) oder die Periode (nein — $T = 2\\pi/\\omega_0$ unabhängig von $\\varphi$).`,
        [
          '$\\varphi$ ist additiv im Sinus-Argument.',
          '$\\sin(\\omega_0 t + \\varphi)$ kann als $\\sin(\\omega_0 (t - t_0))$ geschrieben werden.',
          'Amplitude und Frequenz sind vom Phasenwinkel entkoppelt.',
        ],
      ),
      ni(
        'Amplitude $A = 0{,}02\\,\\text{m}$, $\\omega_0 = 50\\,\\text{rad/s}$. Wie groß ist die maximale Geschwindigkeit $v_\\max$?',
        1, 0.01, 'm/s',
        `**Ansatz:** $v(t) = \\dot{x}(t) = A \\omega_0 \\cos(\\omega_0 t + \\varphi)$. Maximum bei $\\cos = 1$: $v_\\max = A \\omega_0$.

**Rechnung:** $v_\\max = 0{,}02 \\cdot 50 = 1{,}0\\,\\text{m/s}$.

**Probe:** Einheiten: $\\text{m} \\cdot \\text{rad/s} = \\text{m/s}$ (rad einheitenlos). ✓ Plausibilität: Schwingung mit $2\\,\\text{cm}$ Amplitude und Periode $T = 2\\pi/50 \\approx 0{,}126\\,\\text{s}$ — schnelle Bewegung, $1\\,\\text{m/s}$ ist realistisch.

**Typischer Fehler:** $v_\\max = A$ (ohne $\\omega_0$) rechnen. Oder die maximale Beschleunigung $a_\\max = A\\omega_0^2$ mit der Geschwindigkeit verwechseln.`,
        [
          'Ableitung des Sinus ergibt Kosinus, plus Kettenregel-Faktor $\\omega_0$.',
          'Maximum des Kosinus ist $1$.',
          '$v_\\max = A \\omega_0$.',
        ],
      ),
      matching(
        'Ordne jedem Parameter die richtige physikalische Bedeutung zu.',
        [
          { left: '$A$', right: 'Amplitude — maximale Auslenkung aus der Ruhelage' },
          { left: '$\\omega_0$', right: 'Eigenkreisfrequenz in rad/s' },
          { left: '$\\varphi$', right: 'Phasenwinkel — Anfangszustand zum Zeitpunkt $t = 0$' },
          { left: '$T = 2\\pi/\\omega_0$', right: 'Periodendauer — Zeit für einen vollen Zyklus' },
        ],
        `**Ansatz:** Jeder Parameter in $x(t) = A\\sin(\\omega_0 t + \\varphi)$ hat genau eine Bedeutung — Standardvokabular der Schwingungslehre.

**Rechnung:** $A$ (Meter) skaliert die Auslenkung. $\\omega_0$ (rad/s) bestimmt, wie schnell die Schwingung "tickt". $\\varphi$ (rad) verschiebt die Nullphase. $T$ ergibt sich abgeleitet aus $\\omega_0$.

**Probe:** Merke: "Amplitude vor dem Sinus, Winkel drinnen" — $A$ außen, $\\omega_0$ und $\\varphi$ innen. Die Periode $T$ ist **kein** Parameter der Gleichung, sondern folgt aus $\\omega_0$.

**Typischer Fehler:** $\\omega_0$ und die technische Frequenz $f_0 = \\omega_0/(2\\pi)$ gleichsetzen. Beide sind "Frequenzen", aber verschiedene Einheiten: rad/s vs. Hz.`,
        [
          'Vor dem Sinus: Amplitude.',
          'Im Sinus-Argument: $\\omega_0 t + \\varphi$ — Frequenz × Zeit plus Phase.',
          'Periode und Kreisfrequenz stehen über $T = 2\\pi/\\omega_0$ in Verbindung.',
        ],
      ),
      mc(
        'Welche Funktion beschreibt die Beschleunigung $a(t) = \\ddot{x}(t)$?',
        [
          '$a(t) = -A \\omega_0^2 \\sin(\\omega_0 t + \\varphi) = -\\omega_0^2 \\, x(t)$',
          '$a(t) = A \\omega_0 \\cos(\\omega_0 t + \\varphi)$',
          '$a(t) = A \\omega_0^2 \\sin(\\omega_0 t + \\varphi)$',
          '$a(t) = -A \\omega_0 \\sin(\\omega_0 t + \\varphi)$',
        ],
        0,
        `**Ansatz:** Zweimal nach $t$ ableiten. $\\dot{x} = A\\omega_0\\cos(\\omega_0 t + \\varphi)$, $\\ddot{x} = -A\\omega_0^2\\sin(\\omega_0 t + \\varphi)$.

**Rechnung:** Jede Ableitung zieht einen Faktor $\\omega_0$ (Kettenregel) und dreht $\\sin \\to \\cos \\to -\\sin$. Nach zweimaliger Ableitung: Vorzeichen negativ, Faktor $\\omega_0^2$.

**Probe:** Setze ein in die DGL: $\\ddot{x} + \\omega_0^2 x = -\\omega_0^2 x + \\omega_0^2 x = 0$ ✓. Das ist genau die ungedämpfte Schwingungsgleichung. $a(t) = -\\omega_0^2 x(t)$ ist eine kompakte Merkregel.

**Typischer Fehler:** Das Vorzeichen vergessen oder nur einen Faktor $\\omega_0$ statt $\\omega_0^2$ herausziehen. Oder die Geschwindigkeit mit der Beschleunigung verwechseln.`,
        [
          'Ableiten: Sinus → Kosinus, Faktor $\\omega_0$ aus Kettenregel.',
          'Zweite Ableitung: Kosinus → –Sinus, weiterer Faktor $\\omega_0$.',
          'Endergebnis enthält $\\omega_0^2$ und Vorzeichenwechsel.',
        ],
        {
          1: 'Das ist die **Geschwindigkeit** $v(t) = \\dot{x}(t)$. Beschleunigung braucht zweite Ableitung.',
          2: 'Der Betrag stimmt, aber das Vorzeichen ist falsch. Zweimal Sinus ableiten ergibt $-\\sin$, nicht $+\\sin$.',
          3: 'Nur ein Faktor $\\omega_0$ — das ist die Geschwindigkeit (mit falschem Vorzeichen). Zweimal ableiten gibt $\\omega_0^2$.',
        },
      ),
    ],

    // ── [2] Resonanz bei $\Omega = \omega_0$ ─────────────────────────────
    2: [
      mc(
        'Wann tritt Resonanz bei einem schwingungsfähigen System auf?',
        [
          'Wenn die Erregerfrequenz $\\Omega$ mit der Eigenfrequenz $\\omega_0$ übereinstimmt',
          'Wenn die Erregerfrequenz $\\Omega$ viel größer als $\\omega_0$ ist',
          'Wenn die Erregerfrequenz $\\Omega$ null ist',
          'Wenn die Masse gegen null geht',
        ],
        0,
        `**Ansatz:** Resonanz ist der Fall, in dem die äußere Anregung phasenrichtig in jeder Periode Energie einspeist — nur möglich, wenn beide Frequenzen übereinstimmen.

**Rechnung:** In der Bewegungsgleichung $\\ddot{x} + \\omega_0^2 x = (F_0/m)\\sin(\\Omega t)$ enthält die partikuläre Lösung einen Faktor $1/(\\omega_0^2 - \\Omega^2)$. Dieser Term divergiert bei $\\Omega \\to \\omega_0$.

**Probe:** Alltag: eine Schaukel im richtigen Takt anschubsen — Amplitude wächst. Zu schnell oder zu langsam: Energie verpufft.

**Typischer Fehler:** Glauben, "hohe Frequenz = Resonanz". Resonanz hängt vom Verhältnis $\\Omega/\\omega_0$ ab, nicht vom Absolutwert.`,
        [
          'Resonanzbedingung: $\\Omega = \\omega_0$.',
          'Schaukel-Analogie: Takt treffen.',
          'Nicht die Absolutfrequenz, sondern das Verhältnis zählt.',
        ],
        {
          1: 'Bei $\\Omega \\gg \\omega_0$ wird die Amplitude sogar **klein**, da die Masse der schnellen Anregung nicht mehr folgen kann.',
          2: '$\\Omega = 0$ entspricht einer statischen Kraft — keine periodische Anregung, keine Resonanz.',
          3: 'Masse nahe null würde $\\omega_0 \\to \\infty$ bedeuten — keine Resonanzbedingung, sondern ein Grenzfall des Systems selbst.',
        },
      ),
      tf(
        'Bei einem vollständig ungedämpften System wächst die Amplitude im Resonanzfall rechnerisch unbegrenzt an.',
        true,
        `**Ansatz:** Im ungedämpften Resonanzfall $\\Omega = \\omega_0$ versagt der Ansatz mit einfacher sinusförmiger partikulärer Lösung — es entsteht ein Term $\\propto t \\cdot \\cos(\\omega_0 t)$, der mit der Zeit linear wächst.

**Rechnung:** Die Lösung ist $x_p(t) = -(F_0/(2 m \\omega_0)) \\cdot t \\cdot \\cos(\\omega_0 t)$ — Amplitude steigt linear mit $t$ an.

**Probe:** In der Realität verhindern Dämpfung, Nichtlinearitäten oder Bauteilbruch das unbegrenzte Anwachsen (Tacoma-Narrows-Brücke, Weinglas zerspringen lassen).

**Typischer Fehler:** Die Linearität in $t$ übersehen und einen stationären Zustand mit großer, aber endlicher Amplitude annehmen. Ohne Dämpfung gibt es diesen stationären Zustand nicht.`,
        [
          'Ungedämpft heißt: keine Energiedissipation.',
          'Die partikuläre Lösung bekommt einen $t$-Faktor.',
          'In der Praxis bremsen Dämpfung, Bruch oder Nichtlinearität.',
        ],
      ),
      ni(
        'Ein Motor hat die Eigenkreisfrequenz $\\omega_0 = 50\\,\\text{rad/s}$. Bei welcher Drehzahl $n$ (in U/min) tritt Resonanz auf? (auf 1 Nachkommastelle)',
        477.5, 1, 'U/min',
        `**Ansatz:** Drehzahl und Kreisfrequenz verknüpft über $\\omega = 2\\pi n/60$. Resonanz bei $\\omega = \\omega_0$.

**Rechnung:** $n = 60 \\omega_0/(2\\pi) = 60 \\cdot 50/(2\\pi) = 3000/(2\\pi) \\approx 477{,}46\\,\\text{U/min}$.

**Probe:** Frequenz $f_0 = \\omega_0/(2\\pi) = 50/(6{,}2832) \\approx 7{,}958\\,\\text{Hz}$. In U/min: $f_0 \\cdot 60 \\approx 477{,}5$. ✓

**Typischer Fehler:** $n = \\omega_0 \\cdot 60 = 3000\\,\\text{U/min}$ rechnen (Faktor $2\\pi$ vergessen). Oder $\\omega_0$ direkt als Drehzahl $n$ ansetzen — unterschiedliche Einheiten (rad/s vs. U/min).`,
        [
          'Einheit: $n$ in U/min, $\\omega_0$ in rad/s.',
          '$\\omega_0 = 2\\pi \\cdot n/60$.',
          '$n = 60 \\omega_0/(2\\pi)$.',
        ],
      ),
      mc(
        'Welche Maßnahme wirkt am **direktesten** gegen Resonanzschäden in einem Maschinengestell?',
        [
          'Betriebsdrehzahl (Erregerfrequenz $\\Omega$) deutlich weg von $\\omega_0$ verlegen',
          'Betriebsdrehzahl exakt auf $\\omega_0$ einstellen',
          'Federsteifigkeit auf null reduzieren',
          'Die Masse des Systems vollständig entfernen',
        ],
        0,
        `**Ansatz:** Resonanz ist an die Koinzidenz $\\Omega = \\omega_0$ gebunden. Die einfachste Gegenmaßnahme: Abstand zur Resonanzfrequenz schaffen.

**Rechnung:** Typische Regel im Maschinenbau: Betriebsfrequenz mindestens $20$–$30\\,\\%$ oberhalb oder unterhalb von $\\omega_0$ wählen. Alternativ: Dämpfer einbauen, um die Resonanzamplitude zu begrenzen — aber die Frequenzlage ist die erste Wahl.

**Probe:** Beispiel: Eine Waschmaschine durchfährt beim Schleudern die Resonanzfrequenz schnell, um sie gar nicht erst stationär anregen zu können.

**Typischer Fehler:** Die Masse "einfach weglassen" — ohne Masse kein System. Oder die Federsteifigkeit reduzieren, was $\\omega_0$ **noch tiefer** legt und oft neue Resonanzen eröffnet.`,
        [
          'Resonanz = $\\Omega \\approx \\omega_0$.',
          'Abstand zur Eigenfrequenz schaffen.',
          'Zweitbeste Option: Dämpfung erhöhen.',
        ],
        {
          1: 'Das **verursacht** die Resonanz — genau das Gegenteil von dem, was gewünscht ist.',
          2: '$c = 0$ bedeutet: keine Rückstellkraft, also kein schwingungsfähiges System mehr — aber auch keine tragfähige Konstruktion.',
          3: '"Masse entfernen" ist im Maschinenbau selten machbar. Abstimmung auf $\\omega_0 \\neq \\Omega$ ist der pragmatische Weg.',
        },
      ),
      sorting(
        'Bringe die physikalischen Phasen beim Aufbau einer Resonanz in die richtige Reihenfolge.',
        [
          'Erregerfrequenz $\\Omega$ nähert sich der Eigenfrequenz $\\omega_0$ an',
          'Externe Kraft speist pro Periode phasenrichtig Energie in das System ein',
          'Amplitude wächst mit der Zeit (bei ungedämpftem System linear in $t$)',
          'Ohne Dämpfung: Bauteilversagen durch Überdehnung, Bruch oder Kontaktverlust',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Resonanz ist ein Prozess über die Zeit, keine Momentaufnahme.

**Rechnung:** Kausalkette: (1) Frequenzanpassung, (2) Phasenrichtige Energiezufuhr, (3) Amplitudenwachstum, (4) im schlimmsten Fall Versagen. Jeder Schritt ist Bedingung für den nächsten.

**Probe:** Tacoma Narrows Bridge (1940): Wind erzeugte aeroelastische Schwingung mit Frequenz nahe Eigenmode → Energieeinkopplung → Amplitudenwachstum → Einsturz. Klassisches Lehrbuchbeispiel.

**Typischer Fehler:** Resonanz als "Moment" betrachten — dabei ist gerade das **zeitliche Aufschwingen** das Wesensmerkmal.`,
        [
          'Resonanz baut sich über Zeit auf.',
          'Zuerst Frequenz, dann Energie, dann Amplitude.',
          'Versagen ist die (mögliche) Konsequenz.',
        ],
      ),
      ni(
        'Ein System hat $\\omega_0 = 40\\,\\text{rad/s}$. Zur sicheren Resonanzvermeidung soll die Erregerfrequenz mindestens $30\\,\\%$ oberhalb von $\\omega_0$ liegen. Welche Mindestfrequenz $\\Omega_\\min$ (in rad/s)?',
        52, 0.1, 'rad/s',
        `**Ansatz:** $30\\,\\%$ Abstand nach oben: $\\Omega_\\min = 1{,}3 \\cdot \\omega_0$.

**Rechnung:** $\\Omega_\\min = 1{,}3 \\cdot 40 = 52\\,\\text{rad/s}$.

**Probe:** Verhältnis $\\Omega/\\omega_0 = 52/40 = 1{,}3$. ✓ Bei schwacher Dämpfung gelten $20$–$30\\,\\%$ Abstand als Daumenregel — darunter wächst der Vergrößerungsfaktor $V = 1/\\sqrt{(1-\\eta^2)^2 + (2D\\eta)^2}$ stark an, wobei $\\eta = \\Omega/\\omega_0$.

**Typischer Fehler:** $30\\,\\%$ **addieren** statt **multiplizieren**: $\\omega_0 + 30 = 70\\,\\text{rad/s}$. Prozent heißt "von welcher Basis" — $30\\,\\%$ von $\\omega_0$ ist $12\\,\\text{rad/s}$.`,
        [
          '$30\\,\\% = 0{,}3$, der Gesamtfaktor ist $1{,}3$.',
          '$\\Omega_\\min = 1{,}3 \\cdot \\omega_0$.',
          'Prozent ist relativ zur Basis, nicht absolut.',
        ],
      ),
    ],

    // ── [3] Dämpfungsgrad $D = d/(2\sqrt{cm})$ ──────────────────────────
    3: [
      ni(
        'System mit $c = 1000\\,\\text{N/m}$, $m = 10\\,\\text{kg}$, $d = 40\\,\\text{Ns/m}$. Berechne $D$. (dimensionslos)',
        0.2, 0.005, '',
        `**Ansatz:** Lehrsches Dämpfungsmaß: $D = d/(2\\sqrt{cm})$.

**Rechnung:** $c \\cdot m = 1000 \\cdot 10 = 10\\,000$. $\\sqrt{10\\,000} = 100$. $D = 40/(2 \\cdot 100) = 40/200 = 0{,}2$.

**Probe:** Einheitencheck: Zähler $\\text{Ns/m} = \\text{kg/s}$. Nenner $\\sqrt{(\\text{N/m})(\\text{kg})} = \\sqrt{(\\text{kg/s}^2)(\\text{kg})} = \\text{kg/s}$. Quotient: dimensionslos. ✓ $D = 0{,}2 < 1$ → schwach gedämpft, System schwingt weiter.

**Typischer Fehler:** Den Faktor $2$ im Nenner vergessen ($D = 40/100 = 0{,}4$). Oder $\\sqrt{c + m}$ statt $\\sqrt{cm}$ (Summe statt Produkt).`,
        [
          'Formel: $D = d/(2\\sqrt{cm})$.',
          '$c \\cdot m$ bilden, dann Wurzel.',
          'Faktor $2$ im Nenner nicht vergessen.',
        ],
      ),
      tf(
        'Für $D < 1$ ist das System schwach (unterkritisch) gedämpft und schwingt mit abnehmender Amplitude weiter.',
        true,
        `**Ansatz:** Lösungsstruktur der gedämpften DGL $m\\ddot{x} + d\\dot{x} + cx = 0$ hängt vom Verhältnis $D$ ab.

**Rechnung:** Charakteristische Gleichung $m\\lambda^2 + d\\lambda + c = 0$. Diskriminante: $d^2 - 4cm = 4cm(D^2 - 1)$. Für $D < 1$ ist die Diskriminante negativ → komplexe Wurzeln → gedämpfte Schwingung $x(t) = A e^{-\\delta t} \\cos(\\omega_d t + \\varphi)$ mit $\\delta = D\\omega_0$, $\\omega_d = \\omega_0\\sqrt{1 - D^2}$.

**Probe:** Im Grenzfall $D = 0$ (keine Dämpfung): ungedämpfte Sinus-Schwingung. Mit wachsendem $D < 1$: Einhüllende $e^{-\\delta t}$ klingt immer schneller ab, aber das System oszilliert noch.

**Typischer Fehler:** $D < 1$ mit aperiodischem Verhalten verwechseln. Aperiodisch beginnt erst bei $D \\geq 1$.`,
        [
          '$D < 1$: komplexe Eigenwerte → Schwingung.',
          '$D = 1$: aperiodischer Grenzfall.',
          '$D > 1$: überkritisch, kriechend.',
        ],
      ),
      mc(
        'Was bedeutet $D = 1$ physikalisch?',
        [
          'Aperiodischer Grenzfall — schnellste Rückkehr zur Ruhelage ohne Überschwingen',
          'Resonanz mit unbegrenzt wachsender Amplitude',
          'Keine Dämpfung — dauerhafte Schwingung mit konstanter Amplitude',
          'Starke Anregung — Amplitude verdoppelt sich pro Periode',
        ],
        0,
        `**Ansatz:** $D = 1$ ist die Grenze zwischen oszillatorisch ($D < 1$) und kriechend ($D > 1$).

**Rechnung:** Charakteristische Gleichung hat bei $D = 1$ eine **doppelte reelle** Wurzel $\\lambda = -\\omega_0$. Lösung: $x(t) = (A + Bt)e^{-\\omega_0 t}$ — keine Schwingung, aber die schnellste Rückkehr zur Nulllage.

**Probe:** Industrieanwendung: präzise Mess- und Waagensysteme werden auf $D \\approx 0{,}7$–$1{,}0$ ausgelegt — kurz genug für Lesbarkeit, ohne Überschwingen.

**Typischer Fehler:** $D = 1$ mit Resonanz verwechseln (Resonanz ist $\\Omega = \\omega_0$ — eine **Frequenz**bedingung, nicht eine **Dämpfungs**bedingung).`,
        [
          '$D = 1$ ist die Grenze zwischen Schwingen und Kriechen.',
          'Aperiodischer Grenzfall: schnellste Beruhigung.',
          'Resonanz ist etwas anderes — hat mit $\\Omega$, nicht mit $D$ zu tun.',
        ],
        {
          1: 'Resonanz betrifft die **Erreger**frequenz $\\Omega$ relativ zu $\\omega_0$, nicht den Dämpfungsgrad. $D = 1$ ist ein rein dämpfungsbezogenes Phänomen.',
          2: 'Keine Dämpfung entspricht $D = 0$, nicht $D = 1$.',
          3: 'Amplitudenwachstum wäre das Gegenteil einer Dämpfung — $D$ beschreibt die Energiedissipation.',
        },
      ),
      matching(
        'Ordne jedem Bereich von $D$ das richtige Systemverhalten zu.',
        [
          { left: '$D = 0$', right: 'Ungedämpft — Amplitude bleibt ewig konstant' },
          { left: '$0 < D < 1$', right: 'Unterkritisch gedämpft — Schwingung klingt exponentiell ab' },
          { left: '$D = 1$', right: 'Aperiodischer Grenzfall — schnellste Rückkehr ohne Schwingen' },
          { left: '$D > 1$', right: 'Überkritisch gedämpft — kriecht langsam zur Ruhelage' },
        ],
        `**Ansatz:** Das Verhalten der Lösung $x(t)$ hängt qualitativ vom Dämpfungsgrad ab — vier klar abgegrenzte Regime.

**Rechnung:** $D = 0$: reine Oszillation. $D < 1$: exponentiell gedämpfte Oszillation mit $\\omega_d = \\omega_0\\sqrt{1 - D^2}$. $D = 1$: Doppelwurzel, keine Oszillation, schnellste Rückkehr. $D > 1$: zwei reelle negative Wurzeln, reines Kriechen.

**Probe:** Praxis-Design: Stoßdämpfer $D \\approx 0{,}2$–$0{,}4$ (Federeigenschaft bleibt spürbar), Messgeräte $D \\approx 0{,}7$ (kein Überschwingen), Türschließer $D \\geq 1$ (sicher geschlossen ohne Zuschlagen).

**Typischer Fehler:** Alle $D > 0$-Werte als "gut gedämpft" zusammenfassen. Die Grenze bei $D = 1$ ist fundamental — sie trennt schwingende von kriechenden Lösungen.`,
        [
          'Grenzen: $0$, $1$ sind die Schlüsselwerte.',
          'Unter $1$: Schwingung noch vorhanden.',
          'Ab $1$: Rückkehr ohne Oszillation.',
        ],
      ),
      ni(
        'Geforderter Dämpfungsgrad $D = 0{,}05$ bei $c = 400\\,\\text{N/m}$ und $m = 1\\,\\text{kg}$. Welchen Dämpfungskoeffizienten $d$ muss der Dämpfer bringen?',
        2, 0.05, 'Ns/m',
        `**Ansatz:** Formel umstellen: $d = 2 D \\sqrt{cm}$.

**Rechnung:** $\\sqrt{cm} = \\sqrt{400 \\cdot 1} = 20$. $d = 2 \\cdot 0{,}05 \\cdot 20 = 2\\,\\text{Ns/m}$.

**Probe:** Einsetzen: $D = 2/(2 \\cdot 20) = 2/40 = 0{,}05$ ✓. Einheit Ns/m = kg/s (aus $F = d\\dot{x}$). $D = 0{,}05$ ist sehr leicht gedämpft — passt zu dieser kleinen $d$-Zahl.

**Typischer Fehler:** Faktor $2$ unterschlagen und $d = D\\sqrt{cm} = 1$ rechnen. Oder $\\sqrt{cm}$ als $\\sqrt{c + m}$ lesen.`,
        [
          'Nach $d$ umstellen: $d = 2D\\sqrt{cm}$.',
          '$\\sqrt{cm} = 20$.',
          'Faktor 2 nicht vergessen.',
        ],
      ),
      mc(
        'Welcher Dämpfungsgrad $D$ ist beim Auto-Stoßdämpfer typischerweise gewünscht?',
        [
          '$D \\approx 0{,}3$–$0{,}4$ — Federverhalten spürbar, aber Schwingungen klingen schnell ab',
          '$D = 0$ — Insassen sollen frei mitschwingen',
          '$D = 2$ — möglichst starre Rückkopplung für sicheres Fahrwerk',
          '$D \\approx 1{,}5$ — sehr langsames Abklingen gewünscht',
        ],
        0,
        `**Ansatz:** Stoßdämpfer-Auslegung balanciert Komfort (Federweg bleibt nutzbar) und Sicherheit (Schwingung klingt ab, bevor die nächste Fahrbahnunebenheit trifft).

**Rechnung:** Typische PKW-Auslegung: $D \\approx 0{,}2$–$0{,}4$. Mehr Dämpfung macht das Fahrwerk "bretthart" (unkomfortabel), weniger lässt das Auto nach Bodenwellen nachschwingen.

**Probe:** Messgeräte werden auf $D \\approx 0{,}7$ getrimmt (kein Überschwingen der Anzeige). Tür-Schließer auf $D \\geq 1$ (aperiodisch, sicher geschlossen). Autos bleiben bei $0{,}2$–$0{,}4$.

**Typischer Fehler:** $D = 1$ als "perfekt" annehmen — das ist der aperiodische Grenzfall, aber im Fahrwerk unerwünscht (kein Federverhalten mehr spürbar).`,
        [
          'Komfort vs. Sicherheit.',
          'PKW-Design: $D \\in [0{,}2; 0{,}4]$.',
          'Messgeräte: $D \\approx 0{,}7$.',
        ],
        {
          1: 'Ohne Dämpfung schwingt das Auto nach jeder Unebenheit lange nach — im Extremfall Kontrollverlust.',
          2: '$D = 2$ macht das Fahrwerk so hart, dass kaum noch Federwirkung bleibt. Unbequem und für die Fahrdynamik schädlich.',
          3: '$D > 1$ bedeutet langsames Kriechen zur Ruhelage — im Fahrwerk unerwünscht, typisch für Türschließer.',
        },
      ),
    ],

    // ── [4] Mathematisches Pendel $\omega_0 = \sqrt{g/l}$ ────────────────
    4: [
      ni(
        'Ein mathematisches Pendel hat die Länge $l = 1\\,\\text{m}$ ($g = 9{,}81\\,\\text{m/s}^2$). Berechne die Periodendauer $T$. (auf 2 Nachkommastellen)',
        2.01, 0.02, 's',
        `**Ansatz:** $\\omega_0 = \\sqrt{g/l}$, dann $T = 2\\pi/\\omega_0 = 2\\pi\\sqrt{l/g}$.

**Rechnung:** $\\omega_0 = \\sqrt{9{,}81/1} = \\sqrt{9{,}81} \\approx 3{,}132\\,\\text{rad/s}$. $T = 2\\pi/3{,}132 \\approx 2{,}006\\,\\text{s} \\approx 2{,}01\\,\\text{s}$.

**Probe:** Direkt: $T = 2\\pi\\sqrt{1/9{,}81} = 2\\pi \\cdot 0{,}3193 \\approx 2{,}006\\,\\text{s}$. ✓ Merke: Pendel mit $l \\approx 1\\,\\text{m}$ hat $T \\approx 2\\,\\text{s}$ — Sekundenpendel!

**Typischer Fehler:** $T = 2\\pi\\sqrt{g/l}$ rechnen (Bruch falsch herum). Oder Wurzel vergessen. Oder mit Gradmaß statt Bogenmaß arbeiten.`,
        [
          '$\\omega_0 = \\sqrt{g/l}$ (Pendel: $g$ oben, $l$ unten).',
          '$T = 2\\pi\\sqrt{l/g}$.',
          'Merke: $l \\approx 1\\,\\text{m}$ → $T \\approx 2\\,\\text{s}$.',
        ],
      ),
      mc(
        'Dasselbe Pendel wird auf den Mond ($g_\\text{Mond} \\approx 1{,}62\\,\\text{m/s}^2$) gebracht. Wie ändert sich die Periodendauer $T$?',
        [
          '$T$ wird länger (Faktor $\\sqrt{g_\\text{Erde}/g_\\text{Mond}} \\approx 2{,}46$)',
          '$T$ wird kürzer (Faktor ~1/6)',
          '$T$ bleibt gleich — Pendelperiode ist ortsunabhängig',
          'Das Pendel schwingt nicht mehr, weil $g$ zu klein ist',
        ],
        0,
        `**Ansatz:** $T = 2\\pi\\sqrt{l/g}$ — $g$ steht **im Nenner** unter der Wurzel. Kleinere Gravitation → längere Periode.

**Rechnung:** $T_\\text{Mond}/T_\\text{Erde} = \\sqrt{g_\\text{Erde}/g_\\text{Mond}} = \\sqrt{9{,}81/1{,}62} \\approx \\sqrt{6{,}056} \\approx 2{,}46$. Also: Pendel schwingt auf dem Mond ca. $2{,}46$-mal langsamer.

**Probe:** Konkret bei $l = 1\\,\\text{m}$: $T_\\text{Mond} = 2\\pi\\sqrt{1/1{,}62} \\approx 4{,}93\\,\\text{s}$ vs. $T_\\text{Erde} \\approx 2{,}01\\,\\text{s}$. Verhältnis: $4{,}93/2{,}01 \\approx 2{,}45$. ✓

**Typischer Fehler:** Richtung verwechseln ("weniger Gravitation → schnellere Schwingung"). Gravitation ist die rücktreibende Kraft — weniger davon macht die Bewegung **träger**.`,
        [
          '$T \\propto 1/\\sqrt{g}$.',
          'Weniger $g$ → größeres $T$.',
          'Wurzelmäßig, nicht linear.',
        ],
        {
          1: 'Die Richtung ist falsch. Kleinere Gravitation verlangsamt die Schwingung (schwächere Rückstellung → träger).',
          2: 'Das Pendel schwingt durchaus, nur langsamer. Auf Apollo-Missionen wurden Pendelversuche tatsächlich durchgeführt.',
          3: 'Eine genügend kleine Auslenkung genügt immer für eine Schwingung, solange $g > 0$. Auch Astronauten-Videos zeigen das.',
        },
      ),
      tf(
        'Die Periodendauer eines mathematischen Pendels hängt bei kleinen Auslenkungen von der Pendelmasse ab.',
        false,
        `**Ansatz:** In $\\omega_0 = \\sqrt{g/l}$ kommt **keine Masse** vor.

**Rechnung:** Die Masse kürzt sich in der Bewegungsgleichung heraus: $m l \\ddot{\\varphi} = -m g \\sin\\varphi \\approx -m g \\varphi$ liefert $\\ddot{\\varphi} + (g/l)\\varphi = 0$. $m$ steht auf beiden Seiten und verschwindet.

**Probe:** Berühmtes Galilei-Experiment: zwei verschieden schwere Pendel gleicher Länge schwingen synchron. Nur die Länge und die lokale Schwerebeschleunigung zählen.

**Typischer Fehler:** Intuition "schwer = langsam" übertragen. Das gilt beim Feder-Masse-System ($\\omega_0 = \\sqrt{c/m}$), **nicht** beim mathematischen Pendel.`,
        [
          'Bewegungsgleichung aufstellen und Masse kürzen.',
          'Nur $g$ und $l$ bleiben übrig.',
          'Galilei: gleiche Länge → gleiche Periode.',
        ],
      ),
      ni(
        'Ein Pendel soll eine Periodendauer von exakt $T = 1{,}0\\,\\text{s}$ haben ($g = 9{,}81\\,\\text{m/s}^2$). Welche Länge $l$ ist nötig? (auf 3 Nachkommastellen in Meter)',
        0.248, 0.003, 'm',
        `**Ansatz:** $T = 2\\pi\\sqrt{l/g}$ → nach $l$ umstellen: $l = g T^2/(4\\pi^2)$.

**Rechnung:** $l = 9{,}81 \\cdot 1^2/(4\\pi^2) = 9{,}81/39{,}478 \\approx 0{,}2485\\,\\text{m}$.

**Probe:** Einsetzen: $T = 2\\pi\\sqrt{0{,}2485/9{,}81} = 2\\pi\\sqrt{0{,}02534} = 2\\pi \\cdot 0{,}1592 \\approx 1{,}000\\,\\text{s}$. ✓

**Typischer Fehler:** Quadrat vergessen: $l = gT/(4\\pi^2)$ ist dimensional falsch. Oder Faktor $4$ unterschlagen: $l = gT^2/\\pi^2 \\approx 0{,}994\\,\\text{m}$ wäre viermal zu groß.`,
        [
          '$T = 2\\pi\\sqrt{l/g}$.',
          'Nach $l$ auflösen: $l = g T^2/(4\\pi^2)$.',
          '$4\\pi^2 \\approx 39{,}48$.',
        ],
      ),
      sorting(
        'Bringe die Herleitungsschritte für $\\omega_0 = \\sqrt{g/l}$ in die richtige Reihenfolge.',
        [
          'Kleinwinkelnäherung $\\sin\\varphi \\approx \\varphi$ für kleine Auslenkungen',
          'Rücktreibende Kraft: $F_r = -m g \\sin\\varphi$ (Tangentialkomponente der Gewichtskraft)',
          'Bogenlänge und Winkelbeschleunigung: $\\ddot{s} = l\\ddot{\\varphi}$',
          'Newton: $m l \\ddot{\\varphi} = -m g \\sin\\varphi$, $m$ kürzen',
          'Vereinfachte DGL: $\\ddot{\\varphi} + (g/l)\\varphi = 0$ → $\\omega_0^2 = g/l$',
        ],
        [1, 2, 3, 0, 4],
        `**Ansatz:** Physik des Pendels Schritt für Schritt: Kraft, Bewegung, Kürzen, Linearisieren, DGL lesen.

**Rechnung:** (1) Tangentialkomponente der Gewichtskraft liefert die rücktreibende Kraft. (2) Bahnbewegung auf Kreisbogen: $\\ddot{s} = l\\ddot{\\varphi}$. (3) Newton einsetzen und $m$ kürzen. (4) Kleinwinkelnäherung anwenden. (5) Standardform $\\ddot{\\varphi} + \\omega_0^2\\varphi = 0$ ablesen.

**Probe:** Nur die Standardform erlaubt den direkten Vergleich mit $\\ddot{x} + \\omega_0^2 x = 0$ — daraus folgt $\\omega_0 = \\sqrt{g/l}$ ohne weitere Rechnung.

**Typischer Fehler:** Kleinwinkelnäherung **vor** dem Aufstellen der Bewegungsgleichung machen — Risiko, den nichtlinearen Charakter des echten Pendels unbemerkt zu verlieren. Oder $m$ nicht kürzen und dann glauben, die Masse stecke noch im Ergebnis.`,
        [
          'Erst Kraft, dann Kinematik, dann Newton.',
          'Linearisierung ist ein **Näherungsschritt** — erst wenn die Form steht.',
          'Standardform der DGL offenbart $\\omega_0^2$.',
        ],
      ),
      matching(
        'Ordne jeder Pendellänge die zugehörige Periodendauer zu ($g = 9{,}81\\,\\text{m/s}^2$).',
        [
          { left: '$l = 0{,}10\\,\\text{m}$', right: '$T \\approx 0{,}63\\,\\text{s}$' },
          { left: '$l = 0{,}25\\,\\text{m}$', right: '$T \\approx 1{,}00\\,\\text{s}$' },
          { left: '$l = 1{,}00\\,\\text{m}$', right: '$T \\approx 2{,}01\\,\\text{s}$' },
          { left: '$l = 4{,}00\\,\\text{m}$', right: '$T \\approx 4{,}01\\,\\text{s}$' },
        ],
        `**Ansatz:** $T = 2\\pi\\sqrt{l/g}$ — Periode skaliert mit $\\sqrt{l}$.

**Rechnung:** $l = 0{,}1$: $T = 2\\pi\\sqrt{0{,}0102} \\approx 0{,}634\\,\\text{s}$. $l = 0{,}25$: $T = 2\\pi\\sqrt{0{,}0255} \\approx 1{,}003\\,\\text{s}$. $l = 1$: $T \\approx 2{,}006\\,\\text{s}$. $l = 4$: $T = 2\\pi\\sqrt{0{,}408} \\approx 4{,}012\\,\\text{s}$.

**Probe:** $l$ um Faktor $4$ erhöhen verdoppelt $T$ (wegen Wurzel). Check: $l$ von $0{,}25 \\to 1\\,\\text{m}$ ist Faktor $4$, $T$ wächst von $1{,}00$ auf $2{,}01\\,\\text{s}$. ✓

**Typischer Fehler:** Lineare Skalierung annehmen: $l$ verzehnfachen würde $T$ verzehnfachen. Tatsächlich: $T$ wächst nur um $\\sqrt{10} \\approx 3{,}16$-fach.`,
        [
          'Wurzel-Skalierung: $T \\propto \\sqrt{l}$.',
          '$l = 0{,}25\\,\\text{m}$ liefert fast genau $T = 1\\,\\text{s}$.',
          'Länge $\\times 4$ → Periode $\\times 2$.',
        ],
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-2-5 — Dynamik starrer Körper  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-2-5': {

    // ── [0] Drallsatz: M = J·α (Rotationsanalog zu F = ma) ─────────────
    0: [
      ni(
        'Ein Elektromotor übt an seiner Welle ein Drehmoment $M = 40\\,\\text{Nm}$ aus. Die Welle hat $J = 0{,}8\\,\\text{kg}\\cdot\\text{m}^2$. Wie groß ist die Winkelbeschleunigung $\\alpha$?',
        50, 0.1, 'rad/s²',
        `**Ansatz:** Drallsatz — das Rotationsanalog zu $F = ma$ — lautet $M = J\\alpha$. Umgestellt: $\\alpha = M/J$.

**Rechnung:** $\\alpha = 40/0{,}8 = 50\\,\\text{rad/s}^2$.

**Probe:** Einheiten: $\\text{Nm}/(\\text{kg}\\cdot\\text{m}^2) = (\\text{kg}\\cdot\\text{m}^2/\\text{s}^2)/(\\text{kg}\\cdot\\text{m}^2) = \\text{s}^{-2} = \\text{rad/s}^2$. ✓ Plausibel: Motorwellen beschleunigen typisch mit $10$–$1000\\,\\text{rad/s}^2$.

**Typischer Fehler:** $\\alpha = M \\cdot J$ rechnen (Produktzustand) — liefert $32$ und die falsche Dimension. Merksatz: $J$ steht **im Nenner**, ganz analog zur Masse bei $a = F/m$.`,
        [
          'Rotationsanalog: $M$ ↔ $F$, $J$ ↔ $m$, $\\alpha$ ↔ $a$.',
          'Drallsatz nach $\\alpha$ umstellen.',
          '$\\alpha = M/J$.',
        ],
      ),
      mc(
        'Bei gleichbleibendem Trägheitsmoment wird das angreifende Moment **verdreifacht**. Wie ändert sich die Winkelbeschleunigung?',
        [
          '$\\alpha$ bleibt gleich',
          '$\\alpha$ wird dreimal so groß',
          '$\\alpha$ wird neunmal so groß',
          '$\\alpha$ wird um den Faktor $\\sqrt{3}$ größer',
        ],
        1,
        `**Ansatz:** $\\alpha = M/J$ ist **linear** im Moment: $M \\to 3M$ ⇒ $\\alpha \\to 3\\alpha$.

**Rechnung:** $\\alpha_\\text{neu}/\\alpha_\\text{alt} = (3M)/J \\cdot J/M = 3$.

**Probe:** Der Drallsatz ist eine lineare Beziehung zwischen $M$ und $\\alpha$ (genau wie $F = ma$). Keine Potenz, keine Wurzel.

**Typischer Fehler:** Quadratischen Zusammenhang annehmen (wie bei Rotationsenergie $E \\propto \\omega^2$) und mit $9$ oder $\\sqrt{3}$ rechnen. Drallsatz ≠ Energiesatz.`,
        [
          'Drallsatz: $\\alpha = M/J$ — wie verhält sich $\\alpha$ zu $M$?',
          'Linear oder quadratisch?',
          'Verdoppelt $M$ ⇒ verdoppelt $\\alpha$.',
        ],
        {
          0: 'Das Moment ist die **Ursache** der Winkelbeschleunigung. Mehr $M$ ⇒ größeres $\\alpha$. „Bleibt gleich" widerspricht direkt dem Drallsatz.',
          2: 'Faktor $9$ entspräche einem quadratischen Gesetz ($\\alpha \\propto M^2$). Der Drallsatz ist jedoch linear.',
          3: '$\\sqrt{3}$ taucht bei Wurzel-Zusammenhängen auf (z. B. $\\omega_0 \\propto \\sqrt{c/m}$). Für $\\alpha(M)$ ist die Abhängigkeit linear.',
        },
      ),
      ni(
        'Eine Schwungscheibe ($J = 2{,}5\\,\\text{kg}\\cdot\\text{m}^2$) wird aus der Ruhe in $t = 4\\,\\text{s}$ auf $n = 600\\,\\text{U/min}$ gebracht. Welches konstante Drehmoment ist dafür nötig? (auf ganze Nm)',
        39, 1, 'Nm',
        `**Ansatz:** Konstantes Moment ⇒ konstante Winkelbeschleunigung. Erst $\\omega_\\text{end}$ in rad/s umrechnen, dann $\\alpha = \\Delta\\omega/\\Delta t$, dann $M = J\\alpha$.

**Rechnung:** $\\omega = 2\\pi n/60 = 2\\pi\\cdot 600/60 = 20\\pi \\approx 62{,}83\\,\\text{rad/s}$. $\\alpha = 62{,}83/4 \\approx 15{,}71\\,\\text{rad/s}^2$. $M = 2{,}5 \\cdot 15{,}71 \\approx 39{,}27\\,\\text{Nm} \\approx 39\\,\\text{Nm}$.

**Probe:** Umgekehrt: Bei $M = 39{,}27$ Nm ist $\\alpha = 39{,}27/2{,}5 = 15{,}71\\,\\text{rad/s}^2$ und nach 4 s ist $\\omega = 4\\cdot 15{,}71 = 62{,}83\\,\\text{rad/s}$ = 600 U/min. ✓

**Typischer Fehler:** $n$ in U/min direkt in den Drallsatz einsetzen — Faktor $2\\pi/60$ zur Umrechnung in rad/s vergessen. Dann wäre $M$ um Faktor $\\approx 9{,}55$ zu klein.`,
        [
          'Drehzahl in rad/s: $\\omega = 2\\pi n/60$.',
          'Gleichförmige Winkelbeschleunigung: $\\alpha = \\Delta\\omega/\\Delta t$.',
          'Drallsatz: $M = J\\alpha$.',
        ],
      ),
      tf(
        'Im Drallsatz $M = J\\alpha$ entspricht das Trägheitsmoment $J$ dem Rotationsanalog zur **Masse** $m$ aus $F = ma$.',
        true,
        `**Ansatz:** Die Gegenüberstellung Translation ↔ Rotation: $F \\leftrightarrow M$, $m \\leftrightarrow J$, $a \\leftrightarrow \\alpha$, $v \\leftrightarrow \\omega$, $p = mv \\leftrightarrow L = J\\omega$.

**Rechnung:** Die Masse misst Translationsträgheit (Widerstand gegen lineare Beschleunigung), das Trägheitsmoment misst Rotationsträgheit (Widerstand gegen Winkelbeschleunigung). Beide stehen an derselben Stelle in ihren Bewegungsgesetzen.

**Probe:** Beispiel: Zwei Scheiben gleicher Masse, eine mit konzentrierter Masse (klein $J$), eine mit Masse am Rand (groß $J$). Bei gleichem Moment wird die mit großem $J$ langsamer beschleunigt — wie die schwerere Masse bei $F = ma$.

**Typischer Fehler:** $J$ mit der Masse gleichsetzen — ist nicht dasselbe. $J$ hängt zusätzlich von der Massenverteilung (Abstand zur Drehachse) ab: $J = \\sum m_i r_i^2$.`,
        [
          'Schreibe beide Gesetze untereinander: $F = ma$ und $M = J\\alpha$.',
          'Welche Größen stehen an den gleichen Plätzen?',
          '$F$↔$M$, $m$↔$J$, $a$↔$\\alpha$.',
        ],
      ),
      matching(
        'Ordne jeder Translationsgröße das passende Rotationsanalog zu.',
        [
          { left: 'Masse $m$', right: 'Trägheitsmoment $J$' },
          { left: 'Kraft $F$', right: 'Drehmoment $M$' },
          { left: 'Beschleunigung $a$', right: 'Winkelbeschleunigung $\\alpha$' },
          { left: 'Impuls $p = mv$', right: 'Drehimpuls $L = J\\omega$' },
          { left: 'kinetische Energie $\\tfrac{1}{2}mv^2$', right: 'Rotationsenergie $\\tfrac{1}{2}J\\omega^2$' },
        ],
        `**Ansatz:** Die Translations-/Rotations-Analogie ist direkt und systematisch: alles mit Masse wird zu Trägheitsmoment, alles mit Geschwindigkeit zu Winkelgeschwindigkeit, Kraft zu Moment.

**Rechnung:** $F = ma \\leftrightarrow M = J\\alpha$. $p = mv \\leftrightarrow L = J\\omega$. $E_\\text{kin} = \\tfrac{1}{2}mv^2 \\leftrightarrow E_\\text{rot} = \\tfrac{1}{2}J\\omega^2$. $W = Fs \\leftrightarrow W = M\\varphi$.

**Probe:** Jede Gleichung auf der rechten Seite lässt sich durch Einsetzen der linken Analoga wiederherstellen — die Struktur ist identisch.

**Typischer Fehler:** $L = m\\omega$ (Masse statt Trägheitsmoment) oder $E_\\text{rot} = \\tfrac{1}{2}J\\alpha^2$ (Winkelbeschleunigung statt -geschwindigkeit). Die Analogie $a \\leftrightarrow \\alpha$ ist nur für die Bewegungsgleichung, **nicht** für Energie oder Impuls.`,
        [
          'Translation hat: $m$, $v$, $a$, $F$, $p = mv$.',
          'Rotation hat die gleichen Rollen mit: $J$, $\\omega$, $\\alpha$, $M$, $L$.',
          'Bei Energie/Impuls steht die **Geschwindigkeit** drin, nicht die Beschleunigung.',
        ],
      ),
    ],

    // ── [1] Standardträgheitsmomente: Vollzylinder ½mR², Stab mL²/12 ──
    1: [
      ni(
        'Vollzylinder, $m = 4\\,\\text{kg}$, $R = 0{,}2\\,\\text{m}$. Bestimme das Massenträgheitsmoment um die Längsachse.',
        0.08, 0.001, 'kg·m²',
        `**Ansatz:** Vollzylinder um die eigene Längsachse (Symmetrieachse): $J = \\tfrac{1}{2}mR^2$.

**Rechnung:** $R^2 = 0{,}04\\,\\text{m}^2$. $J = \\tfrac{1}{2}\\cdot 4 \\cdot 0{,}04 = 2 \\cdot 0{,}04 = 0{,}08\\,\\text{kg}\\cdot\\text{m}^2$.

**Probe:** Einheiten: $\\text{kg} \\cdot \\text{m}^2$. ✓ Größenordnung plausibel (kleine Rolle mit 4 kg und 20 cm Radius).

**Typischer Fehler:** $R$ statt $R^2$ einsetzen: $\\tfrac{1}{2}\\cdot 4\\cdot 0{,}2 = 0{,}4$ — Faktor $5$ zu groß, Einheit fehlerhaft. Oder Faktor $\\tfrac{1}{2}$ vergessen (Hohlzylinder-Formel $mR^2$ angewandt).`,
        [
          'Vollzylinder: $J = \\tfrac{1}{2}mR^2$.',
          'Quadriere zuerst den Radius.',
          '$\\tfrac{1}{2}\\cdot 4 \\cdot 0{,}04$.',
        ],
      ),
      mc(
        'Ein Vollzylinder wird bei gleicher Masse mit **doppeltem** Radius gefertigt. Um welchen Faktor ändert sich $J$?',
        [
          'Faktor $2$',
          'Faktor $4$',
          'Faktor $\\sqrt{2}$',
          'Faktor $8$',
        ],
        1,
        `**Ansatz:** $J = \\tfrac{1}{2}mR^2$ hängt **quadratisch** von $R$ ab (bei festem $m$).

**Rechnung:** $R \\to 2R$ ⇒ $R^2 \\to 4R^2$ ⇒ $J \\to 4J$.

**Probe:** Anschaulich: Die Masse liegt im Mittel weiter außen — jedes Teilchen trägt mit $r^2$ zur Trägheit bei, also dominiert der quadratische Effekt des Radius.

**Typischer Fehler:** Linear rechnen (Faktor 2) oder mit Volumen argumentieren ($V \\propto R^2$, aber hier ist $m$ fest, also greift die Volumenänderung nicht).`,
        [
          '$J = \\tfrac{1}{2}mR^2$ — welche Potenz steht bei $R$?',
          'Quadratische Abhängigkeit.',
          '$R \\to 2R$ ⇒ $R^2 \\to 4R^2$.',
        ],
        {
          0: 'Linear wäre es, wenn $J \\propto R$. Die Formel enthält aber $R^2$ — die Abhängigkeit ist quadratisch.',
          2: '$\\sqrt{2}$ erscheint bei Wurzelzusammenhängen (etwa bei $\\omega_0 \\propto \\sqrt{1/m}$). Hier ist $J$ eine Potenz, keine Wurzel.',
          3: 'Faktor $8$ entspricht $R^3$ (Volumen bei festem Material). $J$ skaliert nur mit $R^2$, weil $m$ laut Aufgabe konstant ist.',
        },
      ),
      ni(
        'Dünner Stab, $m = 6\\,\\text{kg}$, $L = 2\\,\\text{m}$. Trägheitsmoment **um die Schwerpunktachse** senkrecht zum Stab?',
        2, 0.01, 'kg·m²',
        `**Ansatz:** Stab um Schwerpunkt-Querachse: $J_S = \\tfrac{1}{12}mL^2$. Der Faktor $\\tfrac{1}{12}$ unterscheidet sich vom Stab-am-Ende-Wert $\\tfrac{1}{3}mL^2$.

**Rechnung:** $L^2 = 4\\,\\text{m}^2$. $J_S = \\tfrac{1}{12}\\cdot 6 \\cdot 4 = 24/12 = 2\\,\\text{kg}\\cdot\\text{m}^2$.

**Probe:** Stab am Ende wäre $J_E = \\tfrac{1}{3}mL^2 = 8\\,\\text{kg}\\cdot\\text{m}^2$ — also $4\\times$ größer. Konsistent mit Steiner: $J_E = J_S + m(L/2)^2 = 2 + 6 = 8$. ✓

**Typischer Fehler:** Formel für Stab-am-Ende ($\\tfrac{1}{3}mL^2$) benutzen statt Schwerpunktformel ($\\tfrac{1}{12}mL^2$). Ergebnis wäre um Faktor $4$ zu groß.`,
        [
          'Stab um Schwerpunkt: Faktor $\\tfrac{1}{12}$.',
          'Stab am Ende: Faktor $\\tfrac{1}{3}$ — hier nicht gefragt.',
          '$\\tfrac{1}{12}\\cdot 6 \\cdot 4$.',
        ],
      ),
      tf(
        'Bei **gleicher** Masse und gleichem Außenradius hat ein **Hohlzylinder** (dünne Schale) das gleiche Trägheitsmoment um die Längsachse wie ein **Vollzylinder**.',
        false,
        `**Ansatz:** Vollzylinder: $J = \\tfrac{1}{2}mR^2$. Dünner Hohlzylinder (Masse am Radius $R$): $J = mR^2$. Verhältnis $2:1$.

**Rechnung:** Bei gleicher Masse trägt im Vollzylinder ein Teil der Masse bei kleinem $r$ (geringer Beitrag $r^2$), im Hohlzylinder liegt die gesamte Masse bei $r = R$ (maximaler Beitrag).

**Probe:** $J_\\text{Voll}/J_\\text{Hohl} = \\tfrac{1}{2}$ — Vollzylinder hat halb so großes $J$ wie die dünne Hohlzylinderschale.

**Typischer Fehler:** Den Faktor $\\tfrac{1}{2}$ pauschal auf "zylindrische Körper" übertragen. Der Faktor kommt aus der Integration über die radiale Massenverteilung und gilt nur für den Vollzylinder.`,
        [
          'Vollzylinder: $\\tfrac{1}{2}mR^2$. Dünner Hohlzylinder: $mR^2$.',
          'Masse nahe Achse trägt weniger zu $J$ bei.',
          'Hohlzylinder hat Masse am Rand — maximaler Hebel.',
        ],
      ),
      matching(
        'Ordne jedem Körper die richtige Formel für das Massenträgheitsmoment um die angegebene Achse zu.',
        [
          { left: 'Vollzylinder, Längsachse', right: '$\\tfrac{1}{2}mR^2$' },
          { left: 'Dünner Hohlzylinder (Schale), Längsachse', right: '$mR^2$' },
          { left: 'Stab, Querachse durch Schwerpunkt', right: '$\\tfrac{1}{12}mL^2$' },
          { left: 'Stab, Querachse am Ende', right: '$\\tfrac{1}{3}mL^2$' },
          { left: 'Vollkugel, Achse durch Schwerpunkt', right: '$\\tfrac{2}{5}mR^2$' },
        ],
        `**Ansatz:** Standardträgheitsmomente aus der Formelsammlung abrufen. Die Vorfaktoren sind verteilungsabhängig (wie liegt die Masse relativ zur Achse).

**Rechnung:** Herleitung per Integration $J = \\int r^2\\,dm$. Vollzylinder hat Faktor $\\tfrac{1}{2}$, dünner Hohlzylinder $1$ (ganze Masse auf $r = R$), Stab am Schwerpunkt $\\tfrac{1}{12}$, am Ende $\\tfrac{1}{3}$ (Steiner-Differenz $m(L/2)^2 = \\tfrac{1}{4}mL^2$), Vollkugel $\\tfrac{2}{5}$.

**Probe:** Je weiter die Masse im Mittel von der Achse entfernt liegt, desto größer der Vorfaktor. Vollkugel $\\tfrac{2}{5} = 0{,}4$, Vollzylinder $0{,}5$, Hohlzylinder $1$. ✓

**Typischer Fehler:** Stab-Formel verwechseln ($\\tfrac{1}{12}$ vs. $\\tfrac{1}{3}$) oder den Faktor bei der Kugel mit dem Zylinderfaktor verwechseln. Immer fragen: **welche Achse?**`,
        [
          'Jede Formel hat einen geometrischen Vorfaktor.',
          'Stab am Schwerpunkt vs. am Ende unterscheiden.',
          'Vollkugel $\\tfrac{2}{5}$ — kleinster Vorfaktor.',
        ],
      ),
    ],

    // ── [2] Steiner: J_A = J_S + m·d² ──────────────────────────────────
    2: [
      ni(
        'Ein dünner Stab ($m = 4\\,\\text{kg}$, $L = 1\\,\\text{m}$) rotiert um eine Querachse am **Stabende**. Wie groß ist das Trägheitsmoment? (auf 3 Nachkommastellen)',
        1.333, 0.005, 'kg·m²',
        `**Ansatz:** Schwerpunktträgheitsmoment + Steinerscher Anteil. $J_S = \\tfrac{1}{12}mL^2$, Abstand Schwerpunkt–Endachse: $d = L/2$.

**Rechnung:** $J_S = \\tfrac{1}{12}\\cdot 4 \\cdot 1 = 0{,}333\\,\\text{kg}\\cdot\\text{m}^2$. $d^2 = 0{,}25\\,\\text{m}^2$. Steineranteil $m d^2 = 4 \\cdot 0{,}25 = 1{,}0\\,\\text{kg}\\cdot\\text{m}^2$. $J_E = 0{,}333 + 1{,}0 = 1{,}333\\,\\text{kg}\\cdot\\text{m}^2$.

**Probe:** Die Standardformel für Stab am Ende ist $J_E = \\tfrac{1}{3}mL^2 = 4/3 \\approx 1{,}333\\,\\text{kg}\\cdot\\text{m}^2$. ✓ Identisch — Steiner liefert die Formel automatisch.

**Typischer Fehler:** $d = L$ statt $d = L/2$ einsetzen — der Abstand läuft vom **Schwerpunkt** zur Parallelachse, nicht von Ende zu Ende.`,
        [
          'Schwerpunkt liegt in der Stabmitte: $d = L/2$.',
          'Steiner: $J_A = J_S + m d^2$.',
          'Zur Kontrolle: Stab am Ende $= \\tfrac{1}{3}mL^2$.',
        ],
      ),
      mc(
        'Welche Voraussetzung muss erfüllt sein, damit man den Satz von Steiner $J_A = J_S + m d^2$ anwenden darf?',
        [
          'Die Drehachse $A$ muss durch den Schwerpunkt verlaufen.',
          'Die Drehachse $A$ muss **parallel** zur Schwerpunktachse sein.',
          'Der Körper muss rotationssymmetrisch sein.',
          'Die Achse $A$ muss senkrecht zur Schwerpunktachse stehen.',
        ],
        1,
        `**Ansatz:** Steiner verschiebt das Trägheitsmoment von einer Achse durch den Schwerpunkt zu einer **parallelen** Achse im Abstand $d$. Die Parallelität ist die zentrale Bedingung.

**Rechnung:** Herleitung aus $J_A = \\int r_A^2\\,dm$ mit $\\vec{r}_A = \\vec{r}_S + \\vec{d}$ und $\\vec{d}$ konstant (Parallelverschiebung). Nur dann zerfällt der Integrand in $r_S^2 + 2\\vec{r}_S\\cdot\\vec{d} + d^2$, wobei das Mischglied wegen $\\int \\vec{r}_S\\,dm = 0$ (Schwerpunktdefinition) verschwindet.

**Probe:** Für nicht-parallele Achsen gilt der Satz nicht — dort müsste man über den Trägheitstensor und Drehung gehen.

**Typischer Fehler:** Denken, Steiner helfe bei **jeder** Achsverschiebung. Er verschiebt nur parallel — eine Drehung der Achse erfordert den Trägheitstensor.`,
        [
          'In $J_A = J_S + md^2$ taucht nur ein Abstand auf, keine Winkel.',
          'Parallel vs. senkrecht — welche Geometrie?',
          'Steiner wird oft als "Parallelachsensatz" bezeichnet.',
        ],
        {
          0: 'Dann wären $A$ und die Schwerpunktachse identisch, $d = 0$ und $J_A = J_S$ — es gäbe nichts zu verschieben. Steiner ist für **andere** parallele Achsen gedacht.',
          2: 'Rotationssymmetrie ist für Standardformeln ($\\tfrac{1}{2}mR^2$ etc.) praktisch, aber keine Voraussetzung für Steiner. Steiner gilt für beliebige starre Körper, sofern die Achsen parallel sind.',
          3: 'Bei senkrechten Achsen liefert Steiner keine korrekte Aussage — man bräuchte eine vollständige Trägheitstensor-Transformation.',
        },
      ),
      ni(
        'Ein Vollzylinder ($m = 3\\,\\text{kg}$, $R = 0{,}1\\,\\text{m}$) rotiert um eine Achse, die **parallel** zur Zylinderlängsachse verläuft und im Abstand $d = 0{,}1\\,\\text{m}$ zu dieser liegt. Wie groß ist $J_A$? (auf 4 Nachkommastellen)',
        0.045, 0.001, 'kg·m²',
        `**Ansatz:** $J_S$ = Zylinder um Längsachse = $\\tfrac{1}{2}mR^2$. Dann Steiner: $J_A = J_S + m d^2$.

**Rechnung:** $J_S = \\tfrac{1}{2}\\cdot 3 \\cdot 0{,}01 = 0{,}015\\,\\text{kg}\\cdot\\text{m}^2$. Steineranteil: $m d^2 = 3 \\cdot 0{,}01 = 0{,}03\\,\\text{kg}\\cdot\\text{m}^2$. $J_A = 0{,}015 + 0{,}03 = 0{,}045\\,\\text{kg}\\cdot\\text{m}^2$.

**Probe:** Hier ist $d = R$ (Achse tangential am Mantel). Der Steineranteil $mR^2$ ist doppelt so groß wie $J_S = \\tfrac{1}{2}mR^2$. Gesamt: $J_A = \\tfrac{3}{2}mR^2 = 0{,}045$. ✓

**Typischer Fehler:** $d^2$ mit $R^2$ vergessen zu addieren ($J_A = J_S$ → $0{,}015$, Steineranteil ignoriert). Oder $d$ linear statt quadratisch eingehen lassen.`,
        [
          'Erst $J_S$ (Vollzylinder): $\\tfrac{1}{2}mR^2$.',
          'Steiner: $+ m d^2$.',
          '$0{,}015 + 0{,}03$.',
        ],
      ),
      tf(
        'Das Trägheitsmoment um eine beliebige Achse parallel zur Schwerpunktachse ist **immer mindestens so groß** wie das Trägheitsmoment um die Schwerpunktachse selbst.',
        true,
        `**Ansatz:** $J_A = J_S + m d^2$. Da $m > 0$ und $d^2 \\geq 0$ gilt $m d^2 \\geq 0$. Also $J_A \\geq J_S$, mit Gleichheit nur bei $d = 0$.

**Rechnung:** $J_A - J_S = m d^2 \\geq 0$. Strikte Ungleichheit, sobald die Achse nicht durch den Schwerpunkt geht.

**Probe:** Anschaulich: Je weiter die Drehachse vom Schwerpunkt weg liegt, desto mehr Masse "weit draußen" und umso träger die Rotation. Schwerpunktachse ist das **Minimum** aller parallelen Trägheitsmomente.

**Typischer Fehler:** Denken, eine andere Achse könne die Rotation "leichter" machen. Nein — die Schwerpunktachse ist unter allen Parallelachsen die günstigste.`,
        [
          'Steiner addiert $m d^2 \\geq 0$.',
          'Also $J_A \\geq J_S$.',
          'Gleichheit nur bei $d = 0$ (Achse durch Schwerpunkt).',
        ],
      ),
      sorting(
        'Bringe die Rechenschritte zur Berechnung des Trägheitsmoments um eine Parallelachse in die richtige Reihenfolge.',
        [
          'Massenträgheitsmoment um Schwerpunktachse $J_S$ aus der Formelsammlung nachschlagen',
          'Prüfen: Ist die gesuchte Achse parallel zur Schwerpunktachse?',
          'Abstand $d$ zwischen beiden Achsen bestimmen',
          'Steineranteil $m d^2$ berechnen',
          'Trägheitsmoment addieren: $J_A = J_S + m d^2$',
        ],
        [1, 0, 2, 3, 4],
        `**Ansatz:** Reihenfolge: **erst** Parallelität prüfen (Voraussetzung), **dann** $J_S$ und Geometrie, **dann** Rechnung.

**Rechnung:** (1) Parallelitätscheck — sonst gilt Steiner nicht. (2) $J_S$ nachschlagen. (3) Abstand $d$ zwischen den Achsen. (4) Produkt $m d^2$. (5) Summe.

**Probe:** Wenn Schritt 1 fehlschlägt (Achsen nicht parallel), darf man den Satz nicht anwenden und müsste den Trägheitstensor bemühen. Deshalb steht er ganz vorn.

**Typischer Fehler:** Direkt ohne Prüfung rechnen und $J_A$ auch für schräge Achsen mit Steiner berechnen.`,
        [
          'Voraussetzungen kommen vor der Rechnung.',
          'Formelsammlung und Geometrie sind separate Schritte.',
          'Ganz am Ende: addieren.',
        ],
      ),
    ],

    // ── [3] Rotationsenergie E_rot = ½ J ω² ────────────────────────────
    3: [
      ni(
        'Ein Rotor mit $J = 0{,}5\\,\\text{kg}\\cdot\\text{m}^2$ dreht sich mit $\\omega = 10\\,\\text{rad/s}$. Wie groß ist die Rotationsenergie?',
        25, 0.1, 'J',
        `**Ansatz:** $E_\\text{rot} = \\tfrac{1}{2} J \\omega^2$ — formal identisch zu $E_\\text{kin} = \\tfrac{1}{2} m v^2$.

**Rechnung:** $\\omega^2 = 100\\,\\text{rad}^2/\\text{s}^2$. $E = 0{,}5 \\cdot 0{,}5 \\cdot 100 = 25\\,\\text{J}$.

**Probe:** Einheiten: $\\text{kg}\\cdot\\text{m}^2 \\cdot (1/\\text{s})^2 = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2 = \\text{J}$. ✓

**Typischer Fehler:** $\\omega$ linear einsetzen ($E = \\tfrac{1}{2}J\\omega = 2{,}5$) — Quadratvergessen. Oder Faktor $\\tfrac{1}{2}$ vergessen.`,
        [
          'Rotationsenergie: $\\tfrac{1}{2}J\\omega^2$.',
          'Zuerst $\\omega$ quadrieren.',
          '$0{,}5 \\cdot 0{,}5 \\cdot 100 = 25$ J.',
        ],
      ),
      mc(
        'Die Winkelgeschwindigkeit eines Schwungrads wird **verdoppelt**. Wie ändert sich seine Rotationsenergie?',
        [
          'verdoppelt sich',
          'vervierfacht sich',
          'bleibt gleich',
          'wird um $\\sqrt{2}$ größer',
        ],
        1,
        `**Ansatz:** $E_\\text{rot} = \\tfrac{1}{2}J\\omega^2$ — Energie hängt **quadratisch** von $\\omega$ ab.

**Rechnung:** $\\omega \\to 2\\omega$ ⇒ $\\omega^2 \\to 4\\omega^2$ ⇒ $E \\to 4E$.

**Probe:** Anschaulich — gleicher Effekt wie beim Auto: doppelte Geschwindigkeit → vierfache kinetische Energie → vierfacher Bremsweg.

**Typischer Fehler:** Linear rechnen (Faktor 2) oder mit Drehimpuls verwechseln — $L = J\\omega$ skaliert tatsächlich linear.`,
        [
          'In $\\tfrac{1}{2}J\\omega^2$ steht $\\omega$ in welcher Potenz?',
          'Quadratisch!',
          '$(2\\omega)^2 = 4\\omega^2$.',
        ],
        {
          0: 'Linear wäre es bei $L = J\\omega$ (Drehimpuls). Bei Energie steckt $\\omega$ im Quadrat.',
          2: 'Die Aufgabe ändert aktiv $\\omega$ — die Energie ändert sich entsprechend quadratisch. „Bleibt gleich" würde $\\omega$-Unabhängigkeit voraussetzen.',
          3: '$\\sqrt{2}$ wäre der Effekt bei $\\omega \\to \\sqrt{2}\\omega$. Die Aufgabe verdoppelt $\\omega$ direkt.',
        },
      ),
      ni(
        'Ein Schwungrad (Vollzylinder, $m = 10\\,\\text{kg}$, $R = 0{,}3\\,\\text{m}$) rotiert mit $n = 3000\\,\\text{U/min}$. Wieviel Energie ist gespeichert? (auf ganze J)',
        22207, 50, 'J',
        `**Ansatz:** Erst $J = \\tfrac{1}{2}mR^2$, dann $\\omega = 2\\pi n/60$, dann $E = \\tfrac{1}{2}J\\omega^2$.

**Rechnung:** $J = \\tfrac{1}{2}\\cdot 10 \\cdot 0{,}09 = 0{,}45\\,\\text{kg}\\cdot\\text{m}^2$. $\\omega = 2\\pi\\cdot 3000/60 = 100\\pi \\approx 314{,}159\\,\\text{rad/s}$. $\\omega^2 \\approx 98\\,696$. $E = \\tfrac{1}{2}\\cdot 0{,}45 \\cdot 98\\,696 \\approx 22\\,207\\,\\text{J}$.

**Probe:** Überschlag: $\\omega \\approx 300\\,\\text{rad/s}$, $\\omega^2 \\approx 9\\cdot 10^4$, $E \\approx 0{,}5 \\cdot 0{,}45 \\cdot 9\\cdot 10^4 \\approx 2{,}0\\cdot 10^4\\,\\text{J}$. ✓ Energie reicht für starken elektrischen Impuls.

**Typischer Fehler:** Drehzahl $n$ direkt statt $\\omega$ einsetzen — Ergebnis wäre Faktor $(2\\pi/60)^2 \\approx 0{,}011$ zu klein. Oder den Faktor $\\tfrac{1}{2}$ zweimal ($J$ und $E$) zusammenziehen und durcheinanderbringen.`,
        [
          'Vollzylinder: $J = \\tfrac{1}{2}mR^2$.',
          '$\\omega = 2\\pi n/60$ (Umrechnung U/min → rad/s).',
          '$E = \\tfrac{1}{2}J\\omega^2$.',
        ],
      ),
      tf(
        'Bei einem reinen Rollvorgang (Zylinder rollt schlupffrei eine Ebene hinunter) wandelt sich die potenzielle Energie **ausschließlich** in translatorische kinetische Energie $\\tfrac{1}{2}mv^2$ um.',
        false,
        `**Ansatz:** Ein rollender Körper besitzt sowohl Translations- als auch Rotationsenergie: $E_\\text{kin,ges} = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}J\\omega^2$. Beim schlupffreien Rollen ist $v = R\\omega$.

**Rechnung:** Für den Vollzylinder ($J = \\tfrac{1}{2}mR^2$): $E_\\text{rot} = \\tfrac{1}{2}\\cdot\\tfrac{1}{2}mR^2\\cdot(v/R)^2 = \\tfrac{1}{4}mv^2$. Gesamt $\\tfrac{3}{4}mv^2$, davon ein Drittel Rotationsenergie — **nicht** vernachlässigbar.

**Probe:** Rollt ein Zylinder aus Höhe $h$: $mgh = \\tfrac{3}{4}mv^2$ ⇒ $v = \\sqrt{4gh/3}$ — langsamer als der freie Fall $\\sqrt{2gh}$. Die Differenz steckt in der Rotation.

**Typischer Fehler:** Ausschließlich $mgh = \\tfrac{1}{2}mv^2$ ansetzen und Rotation ignorieren — liefert eine zu hohe Endgeschwindigkeit.`,
        [
          'Ein rollender Körper hat zwei kinetische Energien.',
          'Koppelung: $v = R\\omega$.',
          'Energieerhaltung: $mgh = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}J\\omega^2$.',
        ],
      ),
      sorting(
        'Bringe die Schritte zur Berechnung der Rotationsenergie eines Schwungrads (gegeben: $m$, $R$, $n$) in die richtige Reihenfolge.',
        [
          'Trägheitsmoment berechnen: $J = \\tfrac{1}{2}mR^2$ (Vollzylinder)',
          'Drehzahl $n$ in rad/s umrechnen: $\\omega = 2\\pi n/60$',
          '$\\omega$ quadrieren',
          'Rotationsenergie: $E = \\tfrac{1}{2} J \\omega^2$',
          'Einheiten prüfen: Ergebnis in Joule',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Aufbau von innen nach außen. Zuerst die physikalischen Größen, dann der Ausdruck, zuletzt die Prüfung.

**Rechnung:** (1) $J$ aus Geometrie/Masse. (2) $\\omega$ aus Drehzahl. (3) $\\omega^2$ als Zwischenergebnis — oft Quelle von Fehlern, daher eigener Schritt. (4) Einsetzen. (5) Einheiten-Check.

**Probe:** Jeder Zwischenschritt ist numerisch prüfbar: $J$ in $\\text{kg}\\cdot\\text{m}^2$, $\\omega$ in rad/s, $\\omega^2$ in $\\text{rad}^2/\\text{s}^2$, $E$ in $\\text{J} = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$. ✓

**Typischer Fehler:** Einheiten-Check vergessen oder direkt mit U/min arbeiten.`,
        [
          'Physikalische Größen (J und ω) zuerst.',
          'Einheitenumrechnung vor der Endrechnung.',
          'Prüfung am Schluss.',
        ],
      ),
    ],

    // ── [4] Drehimpuls L = J ω, Erhaltung bei M_ext = 0 ────────────────
    4: [
      ni(
        'Eine Schwungscheibe hat $J = 2\\,\\text{kg}\\cdot\\text{m}^2$ und dreht sich mit $\\omega = 15\\,\\text{rad/s}$. Wie groß ist der Drehimpuls?',
        30, 0.1, 'kg·m²/s',
        `**Ansatz:** Drehimpuls: $L = J\\omega$ (Rotationsanalog zu $p = mv$).

**Rechnung:** $L = 2 \\cdot 15 = 30\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$.

**Probe:** Einheiten: $\\text{kg}\\cdot\\text{m}^2 \\cdot \\text{s}^{-1} = \\text{kg}\\cdot\\text{m}^2/\\text{s}$ = $\\text{N}\\cdot\\text{m}\\cdot\\text{s}$. ✓

**Typischer Fehler:** Rotationsenergie $\\tfrac{1}{2}J\\omega^2 = 225\\,\\text{J}$ statt Drehimpuls ausrechnen. $L$ ist **linear** in $\\omega$, $E_\\text{rot}$ ist **quadratisch**.`,
        [
          '$L = J\\omega$.',
          'Direkte Multiplikation, kein Quadrat.',
          '$2 \\cdot 15 = 30$.',
        ],
      ),
      mc(
        'Eine Eiskunstläuferin dreht mit $\\omega_1 = 2\\,\\text{rad/s}$ und $J_1 = 6\\,\\text{kg}\\cdot\\text{m}^2$ (ausgestreckte Arme). Sie zieht die Arme an, neues $J_2 = 2\\,\\text{kg}\\cdot\\text{m}^2$. Mit welcher Winkelgeschwindigkeit dreht sie dann?',
        [
          '$2\\,\\text{rad/s}$',
          '$6\\,\\text{rad/s}$',
          '$12\\,\\text{rad/s}$',
          '$\\tfrac{2}{3}\\,\\text{rad/s}$',
        ],
        1,
        `**Ansatz:** Ohne äußeres Moment (Reibung auf dem Eis gering) bleibt der Drehimpuls erhalten: $J_1\\omega_1 = J_2\\omega_2$.

**Rechnung:** $\\omega_2 = J_1\\omega_1/J_2 = 6\\cdot 2/2 = 6\\,\\text{rad/s}$.

**Probe:** Drehimpuls vorher: $L_1 = 12$. Drehimpuls nachher: $L_2 = 2 \\cdot 6 = 12$. ✓ Energie dagegen steigt: $E_1 = \\tfrac{1}{2}\\cdot 6\\cdot 4 = 12\\,\\text{J}$, $E_2 = \\tfrac{1}{2}\\cdot 2\\cdot 36 = 36\\,\\text{J}$ — die zusätzliche Energie kommt aus der Muskelarbeit beim Arme-Anziehen.

**Typischer Fehler:** $\\omega_2 = \\omega_1$ (Denken, dass Winkelgeschwindigkeit konstant bleibt) oder $\\omega_2 = J_2\\omega_1/J_1$ (Verhältnis umgedreht). Merksatz: **kleineres** $J$ ⇒ **größeres** $\\omega$.`,
        [
          'Bei $M_\\text{ext} = 0$ gilt $L = \\text{const}$.',
          '$J_1\\omega_1 = J_2\\omega_2$.',
          'Verhältnis $J_1/J_2 = 3$ ⇒ $\\omega$ wird $3\\times$ größer.',
        ],
        {
          0: 'Wenn sich $J$ ändert, ändert sich auch $\\omega$ — sonst wäre der Drehimpuls nicht erhalten.',
          2: 'Faktor $6$ wäre richtig, wenn $J_1 \\cdot \\omega_1 = 12$ und $J_2 = 1$. Hier ist $J_2 = 2$, also $\\omega_2 = 12/2 = 6$, nicht $12$.',
          3: 'Das Verhältnis ist vertauscht — man hat $J_2/J_1$ statt $J_1/J_2$ gerechnet. Kleineres $J$ muss größeres $\\omega$ erzeugen.',
        },
      ),
      tf(
        'Wenn die Summe aller äußeren Drehmomente null ist, bleibt der Drehimpuls eines Systems **betrags- und richtungsmäßig** konstant.',
        true,
        `**Ansatz:** Drallsatz in Vektorform: $\\vec{M}_\\text{ext} = d\\vec{L}/dt$. Aus $\\vec{M}_\\text{ext} = \\vec{0}$ folgt $d\\vec{L}/dt = \\vec{0}$, also $\\vec{L} = \\text{const}$.

**Rechnung:** Beides, Betrag $|L|$ und Richtung $\\vec{L}/|L|$, bleiben erhalten — deshalb taumelt ein freier Kreisel stabil um seine Drehachse.

**Probe:** Anwendungsbeispiele: Eiskunstläuferin (Betragserhalt bei wechselndem $J$), Kreiselkompass (Richtungserhalt), Planetenbahnen (Flächensatz folgt aus $L$-Erhaltung).

**Typischer Fehler:** Nur den **Betrag** als erhalten ansehen. Drehimpuls ist ein Vektor — die Richtung ist ebenfalls fixiert (bei $M_\\text{ext} = 0$).`,
        [
          'Drehimpuls ist eine **vektorielle** Erhaltungsgröße.',
          'Drallsatz: $d\\vec{L}/dt = \\vec{M}_\\text{ext}$.',
          'Null Moment ⇒ $\\vec{L}$ konstant (Betrag und Richtung).',
        ],
      ),
      ni(
        'Zwei Drehplattformen: Plattform 1 ($J_1 = 4\\,\\text{kg}\\cdot\\text{m}^2$, $\\omega_1 = 5\\,\\text{rad/s}$) wird auf Plattform 2 ($J_2 = 1\\,\\text{kg}\\cdot\\text{m}^2$, anfangs in Ruhe) abgesetzt und koppelt reibungsschlüssig. Welche gemeinsame Winkelgeschwindigkeit stellt sich ein?',
        4, 0.01, 'rad/s',
        `**Ansatz:** Inelastischer „Rotationsstoß" — Drehimpuls ist erhalten ($M_\\text{ext} = 0$, reine innere Reibung): $J_1\\omega_1 + J_2\\cdot 0 = (J_1 + J_2)\\omega$.

**Rechnung:** $L_\\text{vor} = 4 \\cdot 5 = 20\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Gesamttrageisheit: $J_\\text{ges} = 5\\,\\text{kg}\\cdot\\text{m}^2$. $\\omega = 20/5 = 4\\,\\text{rad/s}$.

**Probe:** $L_\\text{nach} = 5 \\cdot 4 = 20$. ✓ Die Rotationsenergie sinkt dagegen: $E_\\text{vor} = \\tfrac{1}{2}\\cdot 4\\cdot 25 = 50\\,\\text{J}$, $E_\\text{nach} = \\tfrac{1}{2}\\cdot 5\\cdot 16 = 40\\,\\text{J}$. Die $10\\,\\text{J}$ Energieverlust stecken in der Reibungswärme beim Koppeln.

**Typischer Fehler:** Energieerhaltung ansetzen statt Drehimpulserhaltung — liefert eine falsche gemeinsame $\\omega$, weil Energie bei inelastischer Kopplung **nicht** erhalten ist.`,
        [
          'Inelastischer Rotationsstoß: $L$ erhalten, $E$ nicht.',
          '$J_1\\omega_1 = (J_1 + J_2)\\omega$.',
          '$\\omega = L_\\text{vor}/J_\\text{ges}$.',
        ],
      ),
      matching(
        'Ordne jedem Translationsbegriff sein Rotationsanalog zu.',
        [
          { left: 'Impuls $p = m v$', right: 'Drehimpuls $L = J \\omega$' },
          { left: 'Impulserhaltung bei $\\vec{F}_\\text{ext} = 0$', right: 'Drehimpulserhaltung bei $\\vec{M}_\\text{ext} = 0$' },
          { left: 'Kraft $\\vec{F} = d\\vec{p}/dt$', right: 'Drehmoment $\\vec{M} = d\\vec{L}/dt$' },
          { left: 'Inelastischer Stoß: gemeinsame Geschwindigkeit', right: 'Rotationskopplung: gemeinsame Winkelgeschwindigkeit' },
        ],
        `**Ansatz:** Für jede translatorische Impulsaussage gibt es das Drehimpulspendant — mit $m \\to J$, $\\vec{v} \\to \\vec{\\omega}$, $\\vec{F} \\to \\vec{M}$.

**Rechnung:** (1) $p = mv \\leftrightarrow L = J\\omega$. (2) $\\sum\\vec{F}_\\text{ext} = 0 \\Rightarrow \\vec{p} = \\text{const}$ analog zu $\\sum\\vec{M}_\\text{ext} = 0 \\Rightarrow \\vec{L} = \\text{const}$. (3) Dynamische Grundgleichung $\\vec{F} = d\\vec{p}/dt \\leftrightarrow \\vec{M} = d\\vec{L}/dt$. (4) Inelastischer Stoß $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v_\\text{end}$ analog zu $J_1\\omega_1 + J_2\\omega_2 = (J_1 + J_2)\\omega_\\text{end}$.

**Probe:** Alle Rotationsformeln entstehen durch systematisches Ersetzen — man muss sie nicht separat lernen, nur die Translation sicher beherrschen.

**Typischer Fehler:** Bei $L = J\\omega$ die Masse stehen lassen und $L = m\\omega$ schreiben. Oder im inelastischen Rotationsfall die Energieerhaltung anwenden (bei inelastischem Translationsstoß ginge man ja auch über Impuls).`,
        [
          'Alles mit $m$ wird zu etwas mit $J$.',
          'Alles mit $\\vec{v}$ wird zu etwas mit $\\vec{\\omega}$.',
          'Erhaltungssätze haben dieselbe Struktur.',
        ],
      ),
    ],

  },

}
