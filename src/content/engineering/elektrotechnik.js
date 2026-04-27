// ── elektrotechnik — Topic-Definition (kompakter Scaffold) ─────────────────

export const elektrotechnikTopicDef = 
// ─── Elektrotechnik ───────────────────────────────────────────────────────
{
  topic: {
    id: 'elektrotechnik',
    title: 'Elektrotechnik',
    description: 'Gleichstrom, Wechselstrom, Kirchhoffsche Gesetze und elektrische Leistung.',
    subject: 'engineering',
    icon: 'ELT',
    color: 'yellow',
    estimatedHours: 5,
    difficulty: 3,
    level: 'grundlagen',
    prerequisites: ['algebra'],
    phase: 'semester-1',
    examRelevance: 'pflicht',
    topicGoals: [
      'Ohm-Gesetz $U = R\\,I$ und Leistung $P = U\\,I = I^2 R = U^2/R$ sicher ineinander umformen',
      'Kirchhoffsche Knoten- und Maschenregel strukturiert auf Netzwerke mit mehreren Schleifen anwenden',
      'Reihen- und Parallelschaltung von Widerständen zu Ersatzwiderständen zusammenfassen',
      'Effektivwert $U_\\text{eff} = \\hat U/\\sqrt 2$, Scheitelwert, Frequenz und Kreisfrequenz $\\omega = 2\\pi f$ in Wechselstromaufgaben identifizieren',
      'Impedanzen $Z_R = R$, $Z_L = j\\omega L$, $Z_C = 1/(j\\omega C)$ komplex addieren und als Zeiger darstellen',
      'Wirk-, Blind- und Scheinleistung sowie Leistungsfaktor $\\cos\\varphi$ interpretieren und berechnen',
    ],
  },
  units: [
    {
      id: 'et-unit-1',
      title: 'Gleichstromkreise',
      description: 'Ohmsches Gesetz, Kirchhoff und Leistung.',
      lessons: [
        // ── et-1-1 ────────────────────────────────────────────────────────
        {
          id: 'et-1-1',
          title: 'Ohmsches Gesetz und Grundbegriffe',
          estimatedMinutes: 12,
          learningGoals: [
            'Das Ohmsche Gesetz $U = R \\cdot I$ anwenden',
            'Reihen- und Parallelschaltungen berechnen',
          ],
          subGoals: [
            { label: 'Ohmsches Gesetz $U = R \\cdot I$ — Dreieck-Merkhilfe: eine Größe abdecken, die anderen beiden ergeben sie', examRelevance: 'hoch' },
            { label: 'Einheiten-Konsistenz: V, A, $\\Omega$ — mA und k$\\Omega$ immer vor der Rechnung umrechnen', examRelevance: 'hoch' },
            { label: 'Reihenschaltung: Widerstände addieren sich, Strom ist überall gleich', examRelevance: 'hoch' },
            { label: 'Parallelschaltung: Kehrwerte addieren ($1/R_{ges} = \\sum 1/R_i$), Spannung überall gleich', examRelevance: 'hoch' },
            { label: 'Spezialfall zwei Parallelwiderstände: $R_{ges} = R_1 R_2 / (R_1 + R_2)$ (Produkt-durch-Summe)', examRelevance: 'mittel' },
          ],
          content: String.raw`## Ohmsches Gesetz und Grundbegriffe

Das **Ohmsche Gesetz** beschreibt den Zusammenhang zwischen Spannung, Widerstand und Strom:

$$U = R \cdot I$$

| Größe | Symbol | Einheit |
|-------|--------|---------|
| Spannung | $U$ | Volt (V) |
| Strom | $I$ | Ampere (A) |
| Widerstand | $R$ | Ohm ($\Omega$) |

### Reihenschaltung

$$R_\text{ges} = R_1 + R_2 + \ldots + R_n$$

### Parallelschaltung

$$\frac{1}{R_\text{ges}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}$$

Für zwei Widerstände gilt: $R_\text{ges} = \frac{R_1 \cdot R_2}{R_1 + R_2}$
`,
          exercises: [
            {
              type: 'number-input',
              question: 'Ein Widerstand $R = 470\\,\\Omega$ wird von einem Strom $I = 20\\,\\text{mA}$ durchflossen. Welche Spannung $U$ liegt an?',
              correctValue: 9.4,
              tolerance: 0.05,
              unit: 'V',
              explanation: '$U = R \\cdot I = 470\\,\\Omega \\cdot 0{,}02\\,\\text{A} = 9{,}4\\,\\text{V}$',
              hints: [
                '$U = R \\cdot I$',
                'Strom in Ampere umrechnen: $20\\,\\text{mA} = 0{,}02\\,\\text{A}$',
                '$470 \\cdot 0{,}02 = 9{,}4$',
              ],
            },
            {
              type: 'true-false',
              statement: 'Zwei gleiche Widerstände $R$ in Parallelschaltung ergeben einen Gesamtwiderstand von $R/2$.',
              correct: true,
              explanation: '$\\frac{1}{R_\\text{ges}} = \\frac{1}{R} + \\frac{1}{R} = \\frac{2}{R} \\Rightarrow R_\\text{ges} = \\frac{R}{2}$',
              hints: [
                '$\\frac{1}{R_\\text{ges}} = \\frac{1}{R_1} + \\frac{1}{R_2}$',
                '$\\frac{1}{R} + \\frac{1}{R} = \\frac{2}{R}$',
                '$R_\\text{ges} = R/2$',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Reihenschaltung $R_1 = 100\\,\\Omega$ und $R_2 = 150\\,\\Omega$ an $U = 12\\,\\text{V}$. Wie groß ist der Strom $I$ in Ampere?',
              correctValue: 0.048,
              tolerance: 0.001,
              unit: 'A',
              explanation: '$R_\\text{ges} = 100 + 150 = 250\\,\\Omega$. $I = U/R_\\text{ges} = 12/250 = 0{,}048\\,\\text{A}$',
              hints: [
                'Reihe: $R_\\text{ges} = R_1 + R_2$',
                '$I = U / R_\\text{ges}$',
                '$12 / 250 = 0{,}048\\,\\text{A}$',
              ],
            },
          ],
        },
        // ── et-1-2 ────────────────────────────────────────────────────────
        {
          id: 'et-1-2',
          title: 'Kirchhoffsche Gesetze',
          estimatedMinutes: 13,
          learningGoals: [
            'Den Knotensatz (KCL) anwenden: $\\sum I = 0$',
            'Den Maschensatz (KVL) anwenden: $\\sum U = 0$',
          ],
          subGoals: [
            { label: 'Knotensatz (KCL): An jedem Knoten ist die Summe zu- und abfließender Ströme null — Folge der Ladungserhaltung', examRelevance: 'hoch' },
            { label: 'Maschensatz (KVL): In jeder geschlossenen Masche ist die Summe aller Spannungsabfälle null — Folge der Energieerhaltung', examRelevance: 'hoch' },
            { label: 'Vorzeichenkonvention: Umlaufrichtung festlegen; in Umlaufrichtung Spannungsquelle positiv, Widerstand-Abfall negativ (oder konsistent umgekehrt)', examRelevance: 'hoch' },
            { label: 'Spannungsteiler: $U_2 = U \\cdot R_2 / (R_1 + R_2)$ — direkter Spezialfall des Maschensatzes bei Reihenschaltung', examRelevance: 'mittel' },
          ],
          content: String.raw`## Kirchhoffsche Gesetze

### 1. Kirchhoffsches Gesetz — Knotensatz (KCL)

Die Summe aller Ströme an einem Knoten ist null:

$$\sum I = 0$$

Zufliesende Ströme positiv, abfliesende negativ (oder umgekehrt — konsistent bleiben):

$$I_1 = I_2 + I_3$$

### 2. Kirchhoffsches Gesetz — Maschensatz (KVL)

Die Summe aller Spannungen in einem geschlossenen Umlauf ist null:

$$\sum U = 0$$

Beispiel: $U_q - U_{R1} - U_{R2} = 0 \Rightarrow U_q = U_{R1} + U_{R2}$
`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Was besagt der Knotensatz (KCL) von Kirchhoff?',
              options: [
                'Die Summe aller Ströme an einem Knoten ist null',
                'Die Summe aller Spannungen in einem Zweig ist null',
                'Leistung ist Strom mal Spannung',
                'Widerstand ist Spannung durch Strom',
              ],
              correctIndex: 0,
              explanation: 'KCL beruht auf der Ladungserhaltung: Was in einen Knoten hineinfließt, muss auch wieder herausfließen.',
              hints: [
                'KCL = Knotenstromsatz',
                'Ladungserhaltung am Knoten',
                '$\\sum I_\\text{ein} = \\sum I_\\text{aus}$',
              ],
              wrongAnswerExplanations: {
                1: 'Das ist der Maschensatz (KVL), nicht der Knotensatz. KVL: $\\sum U = 0$ im geschlossenen Umlauf; KCL: $\\sum I = 0$ am Knoten.',
                2: 'Das ist die Leistungsformel $P = U \\cdot I$, nicht eines der Kirchhoffschen Gesetze.',
                3: 'Das ist das Ohmsche Gesetz $R = U/I$, nicht Kirchhoff. KCL und KVL sind Bilanzgleichungen für Ströme bzw. Spannungen.',
              },
            },
            {
              type: 'number-input',
              question: 'An einem Knoten fließt $I_1 = 3\\,\\text{A}$ zu und $I_2 = 1\\,\\text{A}$ ab. Wie groß ist der dritte Strom $I_3$ (abfließend) in Ampere?',
              correctValue: 2,
              tolerance: 0.01,
              unit: 'A',
              explanation: 'KCL: $I_1 = I_2 + I_3 \\Rightarrow I_3 = 3 - 1 = 2\\,\\text{A}$',
              hints: [
                'KCL: $\\sum I = 0$ am Knoten',
                '$I_1 = I_2 + I_3$',
                '$3 = 1 + I_3$',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] In einer Masche gilt $U_q = 9\\,\\text{V}$ und $U_{R1} = 4\\,\\text{V}$. Wie groß ist $U_{R2}$ nach KVL in Volt?',
              correctValue: 5,
              tolerance: 0.01,
              unit: 'V',
              explanation: 'KVL: $U_q - U_{R1} - U_{R2} = 0 \\Rightarrow U_{R2} = 9 - 4 = 5\\,\\text{V}$',
              hints: [
                'KVL: $\\sum U = 0$ im Umlauf',
                '$U_q = U_{R1} + U_{R2}$',
                '$9 = 4 + U_{R2}$',
              ],
            },
          ],
        },
        // ── et-1-3 ────────────────────────────────────────────────────────
        {
          id: 'et-1-3',
          title: 'Elektrische Leistung und Wirkungsgrad',
          estimatedMinutes: 12,
          learningGoals: [
            'Elektrische Leistung mit $P = U \\cdot I$ berechnen',
            'Wirkungsgrad $\\eta = P_\\text{ab}/P_\\text{zu}$ anwenden',
          ],
          subGoals: [
            { label: 'Leistung: $P = U \\cdot I = U^2/R = I^2 R$ (drei äquivalente Formen)', examRelevance: 'hoch' },
            { label: 'Energie: $W = P \\cdot t$ (Einheit Joule oder Wattstunden)', examRelevance: 'hoch' },
            { label: 'Wirkungsgrad: $\\eta = P_\\text{ab}/P_\\text{zu}$, immer $\\leq 1$', examRelevance: 'hoch' },
            { label: 'Wärmeverlust im Widerstand: $P_R = I^2 R$ (Stromwärmegesetz)', examRelevance: 'hoch' },
            { label: 'Nennspannungen Haushalt: 230 V (einphasig), 400 V (Drehstrom)', examRelevance: 'mittel' },
          ],
          content: String.raw`## Elektrische Leistung und Wirkungsgrad

### Leistungsformeln

$$P = U \cdot I = \frac{U^2}{R} = I^2 \cdot R$$

Einheit: Watt (W). Energie: $W = P \cdot t$ (Joule).

### Wirkungsgrad

$$\eta = \frac{P_\text{ab}}{P_\text{zu}} \quad (0 < \eta \leq 1)$$

### Wärmeverlust im Widerstand

$$P_R = I^2 \cdot R$$
`,
          exercises: [
            {
              type: 'number-input',
              question: 'An einem Verbraucher liegt $U = 230\\,\\text{V}$ an und es fließt $I = 5\\,\\text{A}$. Wie groß ist die Leistung $P$ in Watt?',
              correctValue: 1150,
              tolerance: 1,
              unit: 'W',
              explanation: '$P = U \\cdot I = 230 \\cdot 5 = 1150\\,\\text{W}$',
              hints: [
                '$P = U \\cdot I$',
                '$P$ in Watt',
                '$230 \\cdot 5 = 1150$',
              ],
            },
            {
              type: 'multiple-choice',
              question: 'Eine Glühlampe hat $R = 529\\,\\Omega$ an $U = 230\\,\\text{V}$. Welche Leistung hat sie?',
              options: ['100 W', '230 W', '529 W', '43 W'],
              correctIndex: 0,
              explanation: '$P = U^2/R = 230^2/529 = 52900/529 = 100\\,\\text{W}$',
              hints: [
                '$P = U^2 / R$',
                '$230^2 = 52900$',
                '$52900 / 529 = 100$',
              ],
              wrongAnswerExplanations: {
                1: '230 W wäre nur die Spannung in Volt mit Watt verwechselt. Korrekt: $P = U \\cdot I = U \\cdot (U/R) = U^2/R$, also $230^2/529 = 100$ W.',
                2: '529 ist der Widerstand in Ohm, kein Leistungswert. Die Formel $P = U^2/R$ liefert $52900/529 = 100$ W.',
                3: '43 W entstünde bei $P = U/R \\cdot I$ oder anderem Fehler. Richtig: $P = U^2/R$, nicht $U/R$, und $230^2/529 = 100$ W.',
              },
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Ein Motor hat eine Eingangsleistung $P_\\text{zu} = 2\\,\\text{kW}$ und einen Wirkungsgrad $\\eta = 0{,}8$. Wie groß ist die abgegebene Nutzleistung $P_\\text{ab}$ in Watt?',
              correctValue: 1600,
              tolerance: 1,
              unit: 'W',
              explanation: '$P_\\text{ab} = \\eta \\cdot P_\\text{zu} = 0{,}8 \\cdot 2000 = 1600\\,\\text{W}$',
              hints: [
                '$\\eta = P_\\text{ab} / P_\\text{zu}$',
                '$P_\\text{ab} = \\eta \\cdot P_\\text{zu}$',
                '$0{,}8 \\cdot 2000 = 1600$',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'et-unit-2',
      title: 'Wechselstrom',
      description: 'Impedanz, Phasenverschiebung und Leistungsfaktor.',
      lessons: [
        // ── et-2-1 ────────────────────────────────────────────────────────
        {
          id: 'et-2-1',
          title: 'Wechselstromgrundlagen und Impedanz',
          estimatedMinutes: 14,
          learningGoals: [
            'Wechselspannung und Kreisfrequenz $\\omega = 2\\pi f$ verstehen',
            'Impedanzen $Z_R$, $Z_C$, $Z_L$ berechnen',
          ],
          subGoals: [
            { label: 'Wechselspannung: $u(t) = \\hat u \\sin(\\omega t + \\varphi)$ mit $\\omega = 2\\pi f$', examRelevance: 'hoch' },
            { label: 'Effektivwert: $U = \\hat u/\\sqrt 2$ (Sinussignal)', examRelevance: 'hoch' },
            { label: 'Impedanzen: $Z_R = R$, $Z_L = j\\omega L$, $Z_C = 1/(j\\omega C)$', examRelevance: 'hoch' },
            { label: '|Z_L| = ωL steigt mit Frequenz, |Z_C| = 1/(ωC) fällt mit Frequenz', examRelevance: 'hoch' },
            { label: 'Phasenverschiebung: Spule $+90°$ (Strom eilt nach), Kondensator $-90°$ (Strom eilt voraus)', examRelevance: 'hoch' },
          ],
          content: String.raw`## Wechselstromgrundlagen und Impedanz

### Wechselspannung

$$u(t) = \hat{u} \cdot \sin(\omega t + \varphi), \quad \omega = 2\pi f$$

**Effektivwert:** $U = \hat{u}/\sqrt{2}$

### Impedanz (komplexer Widerstand)

| Bauelement | Impedanz | Betrag |
|-----------|----------|--------|
| Ohmscher Widerstand | $Z_R = R$ | $R$ |
| Kondensator | $Z_C = \frac{1}{j\omega C}$ | $\frac{1}{\omega C}$ |
| Spule | $Z_L = j\omega L$ | $\omega L$ |

Der **Betrag** der Impedanz gibt das Verhältnis $|Z| = U/I$ an.
`,
          exercises: [
            {
              type: 'number-input',
              question: 'Ein Kondensator $C = 10\\,\\mu\\text{F}$ wird mit $f = 50\\,\\text{Hz}$ betrieben. Wie groß ist der Impedanzbetrag $|Z_C|$ in Ohm?',
              correctValue: 318,
              tolerance: 5,
              unit: 'Ohm',
              explanation: '$|Z_C| = \\frac{1}{\\omega C} = \\frac{1}{2\\pi \\cdot 50 \\cdot 10^{-5}} \\approx 318\\,\\Omega$',
              hints: [
                '$Z_C = 1/(j\\omega C)$',
                '$|Z_C| = 1/(\\omega C)$',
                '$\\omega = 2\\pi \\cdot 50 \\approx 314\\,\\text{rad/s}$',
              ],
            },
            {
              type: 'true-false',
              statement: 'Der Effektivwert einer Sinusspannung beträgt $\\hat{u}/\\sqrt{2}$.',
              correct: true,
              explanation: 'Für reine Sinussignale gilt $U_\\text{eff} = \\hat{u}/\\sqrt{2} \\approx 0{,}707\\,\\hat{u}$.',
              hints: [
                '$U_\\text{eff} = \\hat{u}/\\sqrt{2}$',
                'Für Sinus-Signale gilt diese Beziehung',
                '$\\sqrt{2} \\approx 1{,}414$',
              ],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Eine Spule $L = 0{,}1\\,\\text{H}$ liegt an $f = 50\\,\\text{Hz}$. Wie groß ist $|Z_L|$?',
              options: [
                '$\\approx 31{,}4\\,\\Omega$',
                '$\\approx 5\\,\\Omega$',
                '$\\approx 100\\,\\Omega$',
                '$\\approx 314\\,\\Omega$',
              ],
              correctIndex: 0,
              explanation: '$|Z_L| = \\omega L = 2\\pi \\cdot 50 \\cdot 0{,}1 = 10\\pi \\approx 31{,}4\\,\\Omega$',
              hints: [
                '$Z_L = j\\omega L$',
                '$|Z_L| = \\omega L$',
                '$\\omega = 2\\pi \\cdot 50 \\approx 314 \\Rightarrow 314 \\cdot 0{,}1 = 31{,}4$',
              ],
              wrongAnswerExplanations: {
                1: '5 Ω entsteht, wenn $|Z_L| = f \\cdot L = 50 \\cdot 0{,}1$ gerechnet wird. Falsch — der Faktor $2\\pi$ fehlt: $|Z_L| = \\omega L = 2\\pi f L$.',
                2: '100 Ω wäre $f \\cdot L \\cdot 20$ oder $\\omega^2 \\cdot L \\cdot 0{,}5$ — unklar, aber nicht korrekt. $|Z_L| = 2\\pi \\cdot 50 \\cdot 0{,}1 \\approx 31{,}4$ Ω.',
                3: '314 Ω entsteht, wenn nur $\\omega \\approx 314$ rad/s hingeschrieben und $L = 0{,}1$ vergessen wird (d.h. mit $L = 1$ gerechnet). Korrekt: $\\omega \\cdot L = 314 \\cdot 0{,}1 = 31{,}4$ Ω.',
              },
            },
          ],
        },
        // ── et-2-2 ────────────────────────────────────────────────────────
        {
          id: 'et-2-2',
          title: 'RC- und RL-Schaltungen',
          estimatedMinutes: 14,
          learningGoals: [
            'Grenzfrequenz eines RC-Tiefpasses berechnen',
            'Impedanz einer RL-Schaltung bestimmen',
            'Leistungsfaktor $\\cos\\varphi$ verstehen',
          ],
          subGoals: [
            { label: 'RC-Grenzfrequenz: $f_g = 1/(2\\pi RC)$', examRelevance: 'hoch' },
            { label: 'Zeitkonstanten: RC $\\tau = RC$, RL $\\tau = L/R$', examRelevance: 'hoch' },
            { label: 'RL-Impedanz-Betrag: $|Z| = \\sqrt{R^2 + (\\omega L)^2}$', examRelevance: 'hoch' },
            { label: 'Leistungsfaktor: $\\cos\\varphi = R/|Z|$, $P = S \\cos\\varphi$', examRelevance: 'hoch' },
            { label: 'Bei $f_g$: Betrag auf $1/\\sqrt 2 \\approx 0{,}707$ abgefallen (−3 dB)', examRelevance: 'hoch' },
          ],
          content: String.raw`## RC- und RL-Schaltungen

### RC-Tiefpass

$$|G(j\omega)| = \frac{1}{\sqrt{1+(\omega RC)^2}}$$

**Grenzfrequenz:** $f_g = \frac{1}{2\pi RC}$ (bei $f_g$: Betrag auf $1/\sqrt{2} \approx 0{,}707$ abgefallen)

### RL-Schaltung

Zeitkonstante: $\tau = L/R$

Impedanzbetrag: $|Z| = \sqrt{R^2 + (\omega L)^2}$

### Leistungsfaktor

$$\cos\varphi = \frac{R}{|Z|}, \quad P = S \cdot \cos\varphi$$

$\cos\varphi = 1$: rein ohmsche Last, keine Blindleistung.
`,
          exercises: [
            {
              type: 'number-input',
              question: 'RC-Tiefpass mit $R = 1\\,\\text{k}\\Omega$ und $C = 10\\,\\mu\\text{F}$. Wie groß ist die Grenzfrequenz $f_g$ in Hz?',
              correctValue: 15.9,
              tolerance: 0.5,
              unit: 'Hz',
              explanation: '$f_g = \\frac{1}{2\\pi RC} = \\frac{1}{2\\pi \\cdot 1000 \\cdot 10^{-5}} \\approx 15{,}9\\,\\text{Hz}$',
              hints: [
                '$f_g = 1/(2\\pi R C)$',
                '$R \\cdot C = 1000 \\cdot 10^{-5} = 0{,}01\\,\\text{s}$',
                '$1/(2\\pi \\cdot 0{,}01) \\approx 15{,}9$',
              ],
            },
            {
              type: 'true-false',
              statement: 'Bei $\\cos\\varphi = 1$ ist die gesamte Scheinleistung Wirkleistung (kein Blindanteil).',
              correct: true,
              explanation: '$\\cos\\varphi = 1 \\Rightarrow \\varphi = 0°$, d.h. Strom und Spannung sind phasengleich. $P = S \\cdot 1 = S$.',
              hints: [
                '$\\cos\\varphi = 1 \\Rightarrow \\varphi = 0°$ (kein Phasenversatz)',
                '$P = S \\cdot \\cos\\varphi = S$',
                'Nur bei rein ohmscher Last',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] RL-Schaltung: $R = 50\\,\\Omega$, $L = 0{,}2\\,\\text{H}$, $f = 50\\,\\text{Hz}$. Wie groß ist der Impedanzbetrag $|Z|$ in Ohm?',
              correctValue: 80.3,
              tolerance: 1,
              unit: 'Ohm',
              explanation: '$\\omega L = 2\\pi \\cdot 50 \\cdot 0{,}2 \\approx 62{,}8\\,\\Omega$. $|Z| = \\sqrt{50^2 + 62{,}8^2} = \\sqrt{2500 + 3944} \\approx 80{,}3\\,\\Omega$',
              hints: [
                '$|Z| = \\sqrt{R^2 + (\\omega L)^2}$',
                '$\\omega L = 2\\pi \\cdot 50 \\cdot 0{,}2 \\approx 62{,}8\\,\\Omega$',
                '$\\sqrt{50^2 + 62{,}8^2} = \\sqrt{6447} \\approx 80{,}3$',
              ],
            },
          ],
        },
        // ── et-2-3 ────────────────────────────────────────────────────────
        {
          id: 'et-2-3',
          title: 'Drehstrom & 3-Phasensystem',
          estimatedMinutes: 15,
          learningGoals: [
            'Stern- (Y) und Dreieckschaltung ($\\Delta$) unterscheiden',
            'Verkettete Spannung $U_{LL} = \\sqrt{3} \\cdot U_{LN}$ anwenden',
            'Wirkleistung im Drehstromsystem berechnen',
          ],
          subGoals: [
            { label: 'Stern: $U_{LL} = \\sqrt 3 U_{LN}$, $I_L = I_\\text{Strang}$', examRelevance: 'hoch' },
            { label: 'Dreieck: $U_{LL} = U_\\text{Strang}$, $I_L = \\sqrt 3 I_\\text{Strang}$', examRelevance: 'hoch' },
            { label: 'Drehstrom-Leistung: $P = \\sqrt 3 U_{LL} I_L \\cos\\varphi$', examRelevance: 'hoch' },
            { label: 'Haushaltsnetz: $U_{LN} = 230$ V, $U_{LL} = 400$ V', examRelevance: 'hoch' },
            { label: 'Y/$\\Delta$-Anlauf: in Stern nur 1/3 Leistung → kleinerer Anlaufstrom', examRelevance: 'mittel' },
          ],
          content: String.raw`## Drehstrom (Dreiphasensystem)

Ein Drehstromnetz besteht aus drei um $120°$ phasenverschobenen Wechselspannungen. Es gibt zwei Standard-Verschaltungen:

### Sternschaltung (Y)

Die drei Stränge sind an einem gemeinsamen **Sternpunkt** (Neutralleiter) zusammengeführt.

- **Strangspannung** (Phase-Neutral): $U_{LN}$, z.B. $230\,\text{V}$
- **Verkettete Spannung** (zwischen zwei Außenleitern): $U_{LL} = \sqrt{3} \cdot U_{LN}$, z.B. $400\,\text{V}$
- **Strangstrom = Außenleiterstrom**

### Dreieckschaltung ($\Delta$)

Die drei Stränge bilden ein Dreieck — kein Neutralleiter.

- **Strangspannung = verkettete Spannung** $U_{LL}$
- **Außenleiterstrom** $I_L = \sqrt{3} \cdot I_\text{Strang}$

### Wirkleistung im symmetrischen Drehstromsystem

Unabhängig von der Schaltungsart:

$$P = \sqrt{3} \cdot U_{LL} \cdot I_L \cdot \cos\varphi$$

mit $U_{LL}$ der verketteten Spannung, $I_L$ dem Außenleiterstrom, $\cos\varphi$ dem Leistungsfaktor.

### Stern-Dreieck-Anlauf (Motor)

Drehstrom-Asynchronmotoren werden beim Anlauf in Y betrieben (niedrigerer Strang-Strom und damit kleinerer Einschaltstrom), dann auf $\Delta$ umgeschaltet (volle Leistung). Im Stern ist die Leistung nur **1/3** der Dreieck-Leistung bei gleichem Netz — ein guter Kompromiss für den Anlauf großer Motoren.`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Ein Drehstrommotor ist in Stern geschaltet und an einem Netz mit $U_{LN} = 230\\,\\text{V}$ angeschlossen. Wie groß ist die verkettete Spannung $U_{LL}$ zwischen zwei Außenleitern?',
              options: [
                '$\\approx 400\\,\\text{V}$ ($\\sqrt{3} \\cdot 230$)',
                '$230\\,\\text{V}$ (gleich wie $U_{LN}$)',
                '$115\\,\\text{V}$ (halb so groß)',
                '$690\\,\\text{V}$ ($3 \\cdot 230$)',
              ],
              correctIndex: 0,
              explanation: `**Ansatz:** In Sternschaltung gilt $U_{LL} = \\sqrt{3} \\cdot U_{LN}$.

**Rechnung:** $U_{LL} = \\sqrt{3} \\cdot 230\\,\\text{V} \\approx 1{,}732 \\cdot 230\\,\\text{V} \\approx 400\\,\\text{V}$.

**Probe:** Das Standardnetz in Europa hat $230/400\\,\\text{V}$ — die verkettete Spannung $400\\,\\text{V}$ ist der Wert zwischen zwei Außenleitern, $230\\,\\text{V}$ zwischen Außenleiter und Neutralleiter.

**Typischer Fehler:** $U_{LL} = 3 \\cdot U_{LN}$ statt $\\sqrt{3}$ — Faktor $\\sqrt{3} \\approx 1{,}73$, nicht 3.`,
              hints: [
                'In Y-Schaltung ist zwischen zwei Außenleitern ein Faktor $\\sqrt{3}$ mehr Spannung als zwischen Außenleiter und Sternpunkt.',
                '$\\sqrt{3} \\approx 1{,}732$.',
                '$\\sqrt{3} \\cdot 230 \\approx 400$.',
              ],
              wrongAnswerExplanations: {
                1: 'In Sternschaltung sind Strang- und verkettete Spannung **nicht** gleich. Gleich wären sie nur in Dreieckschaltung. Zwischen zwei Außenleitern liegt hier das vektorielle Differenzsignal der um $120°$ phasenverschobenen Stränge — das gibt Faktor $\\sqrt{3}$.',
                2: 'Eine Halbierung tritt nicht auf — die verkettete Spannung ist **größer** als die Strangspannung. Faktor $\\sqrt{3} \\approx 1{,}73$.',
                3: '$3 \\cdot 230 = 690\\,\\text{V}$ ist der falsche Faktor. Die Stränge sind um $120°$ phasenverschoben, nicht in Phase — dadurch ergibt der Vektor-Unterschied nur Faktor $\\sqrt{3}$, nicht $3$.',
              },
            },
            {
              type: 'number-input',
              question: 'Ein Drehstrommotor läuft an $U_{LL} = 400\\,\\text{V}$, zieht Strangstrom $I = 10\\,\\text{A}$ und hat Leistungsfaktor $\\cos\\varphi = 0{,}9$. Wie groß ist die Wirkleistung $P$ in Watt?',
              correctValue: 6235,
              tolerance: 30,
              unit: 'W',
              explanation: `**Ansatz:** Drehstrom-Wirkleistung: $P = \\sqrt{3} \\cdot U_{LL} \\cdot I \\cdot \\cos\\varphi$.

**Rechnung:** $P = \\sqrt{3} \\cdot 400 \\cdot 10 \\cdot 0{,}9 = 1{,}732 \\cdot 4000 \\cdot 0{,}9 \\approx 6235\\,\\text{W}$.

**Probe:** $\\approx 6{,}2\\,\\text{kW}$ — passt zu einem mittelgroßen Motor.

**Typischer Fehler:** Den Faktor $\\sqrt{3}$ vergessen ($P = 4000 \\cdot 0{,}9 = 3600\\,\\text{W}$, ca. $1{,}7$-fach zu klein) oder $\\cos\\varphi$ weglassen.`,
              hints: [
                'Formel: $P = \\sqrt{3} \\cdot U_{LL} \\cdot I \\cdot \\cos\\varphi$.',
                '$\\sqrt{3} \\approx 1{,}732$.',
                '$1{,}732 \\cdot 400 \\cdot 10 \\cdot 0{,}9 \\approx 6235\\,\\text{W}$.',
              ],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Warum wird ein großer Drehstrom-Asynchronmotor beim Anlauf in Stern und im Betrieb in Dreieck geschaltet?',
              options: [
                'Im Stern ist der Anlaufstrom um Faktor 3 kleiner — der Motor zieht das Netz nicht zu stark ein',
                'Im Dreieck wäre der Motor mechanisch überlastet',
                'Stern liefert mehr Drehmoment als Dreieck',
                'Stern ist die Standardschaltung für niedrige Spannungen',
              ],
              correctIndex: 0,
              explanation: `**Ansatz:** In Y liegt an jedem Strang nur $U_{LL}/\\sqrt{3}$ (statt $U_{LL}$ wie in $\\Delta$). Strom durch jeden Strang sinkt um Faktor $\\sqrt{3}$, und der Leiterstrom am Netz sinkt insgesamt um Faktor **3**.

**Rechnung:** Leistung in Y ist $P_Y = P_\\Delta / 3$, Drehmoment ebenfalls — das Drehmoment am Anlauf reicht aber meist, da $M \\propto U^2$ bedeutet bei niedrigerer Belastung.

**Probe:** Ein $10$-kW-Motor in $\\Delta$ zieht ca. $18\\,\\text{A}$; beim direkten Anlauf ginge der **Anlaufstrom** aber auf das 5- bis 8-fache, also $\\approx 100$ A — in Y auf ca. $33$ A reduziert.

**Typischer Fehler:** Glauben, in Y sei die Leistung höher; tatsächlich ist sie im Anlauf nur ein Drittel — das reduziert Netzbelastung.`,
              hints: [
                'Der **Einschaltstrom** ist das Problem, nicht die Dauerleistung.',
                'In Y fällt an jedem Strang nur $U_{LL}/\\sqrt{3}$, Ströme sinken.',
                'Faktor 3 kleinere Leistung und Strom in Y vs. $\\Delta$.',
              ],
              wrongAnswerExplanations: {
                1: 'Mechanische Überlastung tritt nicht direkt auf — problematisch ist der **elektrische** Einschaltstromstoß (5–8-fach). Der Stern-Anlauf reduziert genau diesen Einschaltstrom.',
                2: 'Umgekehrt: Im Stern sind Spannung pro Strang und damit das Drehmoment deutlich **kleiner** als im Dreieck (Faktor 3). Deshalb wechselt man nach dem Hochlauf auf $\\Delta$.',
                3: '$400\\,\\text{V}$-Netze sind der Standard — Y und $\\Delta$ sind Motoranschlüsse, keine Netzstandards. Die Wahl hängt am Motor, nicht am Netz.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'et-unit-3',
      title: 'Prüfungsaufgaben',
      description: 'Klausurrelevante Elektrotechnik-Aufgaben.',
      lessons: [
        // ── et-3-1 ────────────────────────────────────────────────────────
        {
          id: 'et-3-1',
          title: 'Gleichstrom Prüfungsaufgaben',
          estimatedMinutes: 20,
          learningGoals: [
            'Kirchhoffsche Gesetze in komplexen Schaltungen anwenden',
            'Spannungsteiler und Stromteiler berechnen',
            'Elektrische Energie und Leistung klausurfertig lösen',
          ],
          subGoals: [
            { label: 'Reihe: $R_\\text{ges} = \\sum R_i$; Parallel: $1/R_\\text{ges} = \\sum 1/R_i$', examRelevance: 'hoch' },
            { label: 'Spannungsteiler: $U_1 = U \\cdot R_1/(R_1 + R_2)$', examRelevance: 'hoch' },
            { label: 'Stromteiler: $I_k = I_\\text{ges} \\cdot R_\\text{par}/R_k$ (umgekehrt proportional)', examRelevance: 'hoch' },
            { label: 'Energie: $W = P \\cdot t$; 1 kWh = 3{,}6 MJ', examRelevance: 'hoch' },
            { label: 'Kirchhoff-Methode: Maschen + Knoten → LGS für mehrere unbekannte Ströme', examRelevance: 'hoch' },
          ],
          content: String.raw`## [PRÜFUNG] Gleichstromkreise — Klausuraufgaben

### Wichtige Formeln

**Kirchhoff:**
- KCL (Knoten): $\sum I = 0$
- KVL (Masche): $\sum U = 0$

**Schaltungen:**
- Reihenschaltung: $R_\text{ges} = \sum R_i$
- Parallelschaltung: $\frac{1}{R_\text{ges}} = \sum \frac{1}{R_i}$

**Leistung:** $P = U \cdot I = \frac{U^2}{R} = I^2 R$

**Spannungsteiler:**
$$U_1 = U \cdot \frac{R_1}{R_1 + R_2}$$

**Stromteiler:** Größerer Widerstand → kleinerer Teilstrom (umgekehrt proportional).
`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] Spannungsteiler: $U = 12\\,\\text{V}$, $R_1 = 300\\,\\Omega$, $R_2 = 700\\,\\Omega$. Wie groß ist die Spannung $U_2$ an $R_2$ in Volt?',
              correctValue: 8.4,
              tolerance: 0.05,
              unit: 'V',
              explanation: '$U_2 = U \\cdot \\frac{R_2}{R_1 + R_2} = 12 \\cdot \\frac{700}{1000} = 8{,}4\\,\\text{V}$',
              hints: [
                'Spannungsteiler: $U_2 = U \\cdot R_2/(R_1 + R_2)$',
                '$R_1 + R_2 = 1000\\,\\Omega$',
                '$12 \\cdot 700/1000 = 8{,}4$',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Parallelschaltung $R_1 = 60\\,\\Omega$ und $R_2 = 40\\,\\Omega$. Wie groß ist $R_\\text{ges}$ in Ohm?',
              correctValue: 24,
              tolerance: 0.1,
              unit: 'Ohm',
              explanation: '$\\frac{1}{R_\\text{ges}} = \\frac{1}{60} + \\frac{1}{40} = \\frac{2}{120} + \\frac{3}{120} = \\frac{5}{120} \\Rightarrow R_\\text{ges} = 24\\,\\Omega$',
              hints: [
                '$1/R_\\text{ges} = 1/R_1 + 1/R_2$',
                '$1/60 + 1/40 = 5/120$',
                '$R_\\text{ges} = 120/5 = 24$',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Heizwiderstand $R = 23\\,\\Omega$ an $U = 230\\,\\text{V}$ läuft 1 Stunde. Wie viel Energie $W$ wird verbraucht in kWh?',
              correctValue: 2.3,
              tolerance: 0.05,
              unit: 'kWh',
              explanation: '$P = U^2/R = 230^2/23 = 2300\\,\\text{W}$. $W = P \\cdot t = 2300\\,\\text{W} \\cdot 1\\,\\text{h} = 2{,}3\\,\\text{kWh}$',
              hints: [
                '$P = U^2/R = 52900/23 = 2300\\,\\text{W}$',
                '$W = P \\cdot t$',
                'kWh: $2300\\,\\text{W} \\cdot 1\\,\\text{h} = 2{,}3\\,\\text{kWh}$',
              ],
            },
            {
              type: 'true-false',
              statement: '[PRÜFUNG] Ein Stromteiler teilt den Strom umgekehrt proportional zu den Widerständen auf (größerer Widerstand → kleinerer Teilstrom).',
              correct: true,
              explanation: '$I_k = I_\\text{ges} \\cdot \\frac{R_\\text{parallel}}{R_k}$. Der Strom fließt bevorzugt durch den kleineren Widerstand.',
              hints: [
                '$I_k = I_\\text{ges} \\cdot R_\\text{parallel}/R_k$',
                'Kleinerer Widerstand → größerer Anteil',
                'Umgekehrt proportional',
              ],
            },
          ],
        },
        // ── et-3-2 ────────────────────────────────────────────────────────
        {
          id: 'et-3-2',
          title: 'Wechselstrom Prüfungsaufgaben',
          estimatedMinutes: 20,
          learningGoals: [
            'Resonanzfrequenz eines RLC-Kreises berechnen',
            'Leistungsfaktor und Wirkleistung bestimmen',
            'Tiefpass-Übertragungsverhalten klausurfertig beherrschen',
          ],
          subGoals: [
            { label: 'RLC-Reihe Impedanz: $Z = R + j(\\omega L - 1/(\\omega C))$', examRelevance: 'hoch' },
            { label: 'Resonanzfrequenz: $\\omega_0 = 1/\\sqrt{LC}$, $f_0 = 1/(2\\pi\\sqrt{LC})$', examRelevance: 'hoch' },
            { label: 'Güte $Q = \\omega_0 L/R = 1/(\\omega_0 RC)$', examRelevance: 'mittel' },
            { label: 'Wirk-/Blind-/Scheinleistung: $P = S\\cos\\varphi$, $Q = S\\sin\\varphi$, $S = UI$', examRelevance: 'hoch' },
            { label: 'Tiefpass $-20$ dB/Dekade oberhalb $f_g$, Hochpass umgekehrt', examRelevance: 'mittel' },
          ],
          content: String.raw`## [PRÜFUNG] Wechselstromkreise — Klausuraufgaben

### Wichtige Formeln

**Impedanzen:** $|Z_R| = R$, $|Z_C| = \frac{1}{\omega C}$, $|Z_L| = \omega L$

**RLC-Reihenschaltung:**
$$Z_\text{ges} = R + j\!\left(\omega L - \frac{1}{\omega C}\right), \quad |Z_\text{ges}| = \sqrt{R^2 + X^2}$$

mit Reaktanz $X = \omega L - \frac{1}{\omega C}$

**Resonanz:** $\omega_0 = \frac{1}{\sqrt{LC}}, \quad f_0 = \frac{1}{2\pi\sqrt{LC}}$

**Leistungsfaktor:** $\cos\varphi = \frac{R}{|Z|}$, $\quad P = S \cdot \cos\varphi$
`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] RLC-Reihenschaltung: $R = 100\\,\\Omega$, $L = 0{,}1\\,\\text{H}$, $C = 100\\,\\mu\\text{F}$. Wie groß ist die Resonanzfrequenz $f_0$ in Hz?',
              correctValue: 50.3,
              tolerance: 1,
              unit: 'Hz',
              explanation: '$f_0 = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi\\sqrt{0{,}1 \\cdot 10^{-4}}} = \\frac{1}{2\\pi \\cdot 0{,}00316} \\approx 50{,}3\\,\\text{Hz}$',
              hints: [
                '$f_0 = 1/(2\\pi\\sqrt{LC})$',
                '$L \\cdot C = 0{,}1 \\cdot 10^{-4} = 10^{-5}$',
                '$1/(2\\pi \\cdot \\sqrt{10^{-5}}) \\approx 50{,}3\\,\\text{Hz}$',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] RC-Tiefpass bei der Grenzfrequenz $f = f_g$. Wie groß ist der Übertragungsbetrags $|G|$?',
              correctValue: 0.707,
              tolerance: 0.005,
              unit: '',
              explanation: 'Bei $f = f_g$ gilt $\\omega RC = 1$: $|G| = 1/\\sqrt{1+1^2} = 1/\\sqrt{2} \\approx 0{,}707$ (der $-3\\,\\text{dB}$-Punkt).',
              hints: [
                'Bei $f = f_g$ gilt $\\omega RC = 1$',
                '$|G| = 1/\\sqrt{1+(\\omega RC)^2}$',
                '$1/\\sqrt{2} \\approx 0{,}707$ ($-3\\,\\text{dB}$-Punkt)',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Scheinleistung $S = 5\\,\\text{kVA}$, Leistungsfaktor $\\cos\\varphi = 0{,}8$. Wie groß ist die Wirkleistung $P$ in Watt?',
              correctValue: 4000,
              tolerance: 10,
              unit: 'W',
              explanation: '$P = S \\cdot \\cos\\varphi = 5000 \\cdot 0{,}8 = 4000\\,\\text{W}$',
              hints: [
                '$P = S \\cdot \\cos\\varphi$',
                '$S = 5000\\,\\text{VA}$',
                '$5000 \\cdot 0{,}8 = 4000\\,\\text{W}$',
              ],
            },
          ],
        },
      ],
    },
  ],
}

