// ── Vektoren Unit 2: Geraden und Ebenen im Raum ─────────────────────────────

export const exercises_vek_u2 = {
  // ── Lesson 1: Geradengleichung ──
  'ex-vek-2-1-a': {
    id: 'ex-vek-2-1-a', lessonId: 'vek-2-1', type: 'multiple-choice',
    question: 'Welche Form hat eine Geradengleichung in Parameterform?',
    options: [
      '$\\vec{r} = \\vec{p} + t \\cdot \\vec{v}$',
      '$\\vec{r} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$',
      '$\\vec{n} \\cdot \\vec{r} = d$',
      '$a x + b y = c$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Eine Gerade ist ein 1D-Objekt im Raum — sie hat *eine* Richtung.

**Formel:** $\\vec{r} = \\vec{p} + t \\cdot \\vec{v}$ mit Stützpunkt $\\vec{p}$, Richtungsvektor $\\vec{v}$ und Parameter $t \\in \\mathbb{R}$.

**Probe:** Für $t = 0$ ist $\\vec{r} = \\vec{p}$ (Stützpunkt selbst). Für $t = 1$ ist $\\vec{r} = \\vec{p} + \\vec{v}$ (ein Schritt in Richtung $\\vec{v}$). ✓

**Typischer Fehler:**
- Option B mit *zwei* Richtungsvektoren beschreibt eine **Ebene**, nicht eine Gerade.
- Option C ist die **Normalenform einer Ebene**.
- Option D ist die Koordinatenform einer Ebene (in 2D: Gerade, in 3D: Ebene).`,
    hints: [
      'Wie viele Freiheitsgrade hat eine Gerade? Genau einer — also ein Parameter.',
      'Eine Gerade braucht einen Punkt (Stützpunkt) und genau eine Richtung.',
      'Unterscheide: 1 Richtung $\\to$ Gerade, 2 Richtungen $\\to$ Ebene.',
    ],
  },
  'ex-vek-2-1-b': {
    id: 'ex-vek-2-1-b', lessonId: 'vek-2-1', type: 'multiple-choice',
    question: 'Gerade $g\\colon \\vec{r} = (1,2,3) + t \\cdot (2,0,1)$. Welcher Punkt liegt auf $g$?',
    options: ['$(3, 2, 4)$', '$(2, 0, 1)$', '$(1, 2, 1)$', '$(3, 4, 5)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Setze einen Wert für $t$ ein und rechne die drei Komponenten aus. Ein Punkt liegt auf $g$, wenn es *ein* $t$ gibt, das ihn liefert.

**Rechnung für $t = 1$:**
$$\\vec{r} = (1, 2, 3) + 1 \\cdot (2, 0, 1) = (1+2,\\; 2+0,\\; 3+1) = (3, 2, 4).$$

**Gegenprobe für Option B $(2, 0, 1)$:** Das ist der *Richtungsvektor* $\\vec{v}$, nicht ein Punkt auf $g$. Um diesen Punkt zu erhalten, müsste $\\vec{p} + t\\vec{v} = (2,0,1)$ gelten — also $1+2t = 2$, $2 = 0$ (Widerspruch). Nicht auf $g$.

**Typischer Fehler:** Den Richtungsvektor $\\vec{v} = (2, 0, 1)$ mit einem Punkt auf der Geraden verwechseln. $\\vec{v}$ beschreibt die *Richtung*, nicht eine Position.`,
    hints: [
      'Teste jede Option: gibt es ein $t$, das den Punkt liefert?',
      'Setze $t = 1$: $(1+2, 2+0, 3+1) = ?$',
      'Richtungsvektor $\\vec{v} = (2,0,1)$ ist *kein* Punkt auf der Geraden.',
    ],
  },
  'ex-vek-2-1-c': {
    id: 'ex-vek-2-1-c', lessonId: 'vek-2-1', type: 'multiple-choice',
    question: 'Zwei Geraden haben Richtungsvektoren $\\vec{v}_1 = (1, 2, 3)$ und $\\vec{v}_2 = (2, 4, 6)$. Wie liegen die Geraden zueinander?',
    options: [
      'Sie schneiden sich in einem Punkt',
      'Sie sind windschief',
      'Sie sind parallel (oder identisch)',
      'Sie stehen senkrecht',
    ],
    correctIndex: 2,
    explanation: `**Ansatz:** Parallelitätstest für Geraden: Ist $\\vec{v}_2 = k \\cdot \\vec{v}_1$ für ein $k \\in \\mathbb{R}$?

**Rechnung:** $\\vec{v}_2 = (2, 4, 6) = 2 \\cdot (1, 2, 3) = 2 \\cdot \\vec{v}_1$. Ja — Faktor $k = 2$ passt für alle drei Komponenten. Also sind $\\vec{v}_1$ und $\\vec{v}_2$ **linear abhängig**.

**Schlussfolgerung:** Die Geraden sind **parallel**. Sie sind identisch, falls zusätzlich ein Punkt gemeinsam ist — sonst parallel und verschieden.

**Probe Kreuzprodukt:** $\\vec{v}_1 \\times \\vec{v}_2 = \\vec{0}$ bestätigt Parallelität. Test: $(2 \\cdot 6 - 3 \\cdot 4,\\; 3 \\cdot 2 - 1 \\cdot 6,\\; 1 \\cdot 4 - 2 \\cdot 2) = (0, 0, 0)$. ✓

**Typischer Fehler:** "Senkrecht" wäre $\\vec{v}_1 \\cdot \\vec{v}_2 = 0$. Hier: $1 \\cdot 2 + 2 \\cdot 4 + 3 \\cdot 6 = 28 \\neq 0$ — also nicht senkrecht. "Windschief" ist ausgeschlossen, solange die Richtungsvektoren parallel sind.`,
    hints: [
      'Was ist das Kriterium für parallele Geraden? Parallele Richtungsvektoren.',
      'Prüfe: Gibt es $k$ mit $\\vec{v}_2 = k \\cdot \\vec{v}_1$?',
      'Alternativ: $\\vec{v}_1 \\times \\vec{v}_2 = \\vec{0}$ $\\Leftrightarrow$ parallel.',
    ],
  },
  'ex-vek-2-1-mastery': {
    id: 'ex-vek-2-1-mastery', lessonId: 'vek-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Zwei Geraden im Raum sind weder parallel noch schneiden sie sich. Wie nennt man diese Lage?',
    options: ['Identisch', 'Orthogonal', 'Windschief', 'Kollinear'],
    correctIndex: 2,
    explanation: `**Ansatz:** Systematische Fallunterscheidung für zwei Geraden im 3D-Raum.

**Vollständige Klassifikation:**

| Richtungsvektoren | Schnittpunkt | Lage |
|-------------------|--------------|------|
| parallel | (beliebig) + gemeinsamer Punkt | identisch |
| parallel | kein gemeinsamer Punkt | parallel (verschieden) |
| nicht parallel | einen gemeinsamen Punkt | schneidend |
| nicht parallel | keinen gemeinsamen Punkt | **windschief** |

**Kernaussage:** **Windschief** gibt es nur in 3D (im Raum). In der Ebene (2D) gilt: zwei nicht-parallele Geraden schneiden sich *immer*.

**Typischer Fehler:**
- "Orthogonal" = senkrecht (Spezialfall von schneidend) — sagt nichts über Parallelität/Schnittpunkt-Existenz aus.
- "Kollinear" = auf einer Linie liegend = identische Gerade.`,
    hints: [
      'In 2D gibt es nur zwei Fälle: parallel oder schneidend. In 3D kommt ein dritter dazu.',
      'Wie heißt der 3D-Fall, der in 2D unmöglich ist?',
      'Windschief = "schief zueinander, aber nicht parallel" — ein rein räumliches Phänomen.',
    ],
  },

  // ── Lesson 2: Ebenengleichung ──
  'ex-vek-2-2-a': {
    id: 'ex-vek-2-2-a', lessonId: 'vek-2-2', type: 'multiple-choice',
    question: 'Wie viele Richtungsvektoren braucht die Parameterform einer Ebene?',
    options: ['Keinen', 'Einen', 'Zwei', 'Drei'],
    correctIndex: 2,
    explanation: `**Ansatz:** Eine Ebene ist ein 2D-Objekt — sie hat zwei Freiheitsgrade.

**Formel:** $\\vec{r} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$ mit $s, t \\in \\mathbb{R}$.

Dabei sind $\\vec{u}$ und $\\vec{v}$ zwei **linear unabhängige** (also nicht parallele) Richtungsvektoren, die in der Ebene liegen.

**Geometrisch:** Eine Ebene ist wie ein Blatt Papier im Raum. Um jeden Punkt auf dem Blatt zu erreichen, brauchst du zwei unabhängige Richtungen (z.B. "rechts" und "oben" auf dem Blatt).

**Typischer Fehler:**
- *Ein* Richtungsvektor liefert nur eine Gerade (1D).
- *Drei* Richtungsvektoren sind im 3D-Raum immer linear abhängig — überflüssig.`,
    hints: [
      'Wie viele Dimensionen hat eine Ebene? Welche Dimension steckt in einem Parameter?',
      'Gerade $\\to$ 1 Richtung. Fläche $\\to$ wie viele?',
      'Die beiden Richtungen dürfen nicht parallel sein — sonst bleibt es eine Gerade.',
    ],
  },
  'ex-vek-2-2-b': {
    id: 'ex-vek-2-2-b', lessonId: 'vek-2-2', type: 'multiple-choice',
    question: 'Was beschreibt die Normalenform $\\vec{n} \\cdot (\\vec{r} - \\vec{p}) = 0$?',
    options: [
      'Alle Punkte $\\vec{r}$, deren Verbindung zu $\\vec{p}$ senkrecht auf $\\vec{n}$ steht',
      'Alle Punkte $\\vec{r}$, die parallel zu $\\vec{n}$ liegen',
      'Nur den Punkt $\\vec{p}$ selbst',
      'Eine Gerade in Richtung $\\vec{n}$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Interpretation des Skalarprodukts: $\\vec{a} \\cdot \\vec{b} = 0 \\;\\Leftrightarrow\\; \\vec{a} \\perp \\vec{b}$.

**Rechnung:** Die Gleichung $\\vec{n} \\cdot (\\vec{r} - \\vec{p}) = 0$ besagt: Der Verbindungsvektor $\\vec{r} - \\vec{p}$ vom Stützpunkt $\\vec{p}$ zum beliebigen Punkt $\\vec{r}$ ist **senkrecht** zum Normalvektor $\\vec{n}$.

**Geometrisch:** Alle Punkte $\\vec{r}$, für die $\\vec{r} - \\vec{p}$ in der zu $\\vec{n}$ senkrechten Ebene liegt, bilden genau diese **Ebene**.

**Typischer Fehler:**
- "Nur den Punkt $\\vec{p}$": Gilt zwar auch ($\\vec{0} \\cdot \\vec{n} = 0$), aber es gibt unendlich viele weitere Lösungen.
- "Parallel zu $\\vec{n}$": Genau das Gegenteil — der Verbindungsvektor steht senkrecht zu $\\vec{n}$, nicht parallel.`,
    hints: [
      'Welche Bedeutung hat $\\vec{a} \\cdot \\vec{b} = 0$? Orthogonalität.',
      'Der Verbindungsvektor $\\vec{r} - \\vec{p}$ muss senkrecht auf $\\vec{n}$ stehen.',
      'Alle solchen Punkte $\\vec{r}$ bilden eine *Ebene* senkrecht zu $\\vec{n}$ durch $\\vec{p}$.',
    ],
  },
  'ex-vek-2-2-c': {
    id: 'ex-vek-2-2-c', lessonId: 'vek-2-2', type: 'multiple-choice',
    question: 'Welche Koordinatenform gehört zum Normalvektor $\\vec{n} = (2, -1, 3)$ und Stützpunkt $\\vec{p} = (1, 0, 1)$?',
    options: [
      '$2x - y + 3z = 5$',
      '$2x - y + 3z = 0$',
      '$x - y + z = 5$',
      '$2x + y + 3z = 5$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Die Koordinatenform ist $\\vec{n} \\cdot \\vec{r} = \\vec{n} \\cdot \\vec{p}$, d.h. $a x + b y + c z = d$ mit $(a, b, c) = \\vec{n}$ und $d = \\vec{n} \\cdot \\vec{p}$.

**Rechnung:**
- Koeffizienten: direkt aus $\\vec{n}$: $a = 2$, $b = -1$, $c = 3$.
- Konstante: $d = \\vec{n} \\cdot \\vec{p} = 2 \\cdot 1 + (-1) \\cdot 0 + 3 \\cdot 1 = 2 + 0 + 3 = 5$.
- Ergebnis: $2x - y + 3z = 5$.

**Probe:** Setze $\\vec{p} = (1, 0, 1)$ ein: $2 \\cdot 1 - 0 + 3 \\cdot 1 = 5$. ✓

**Typischer Fehler:**
- Option B ($d = 0$): Würde bedeuten, dass die Ebene durch den Ursprung geht — das gilt nur für $\\vec{n} \\cdot \\vec{p} = 0$, hier aber $= 5$.
- Option D hat ein Vorzeichen-Fehler bei $b$: $+y$ statt $-y$.`,
    hints: [
      'Koordinatenform: $a x + b y + c z = d$ mit $(a,b,c) = \\vec{n}$.',
      'Berechne $d = \\vec{n} \\cdot \\vec{p}$.',
      '$d = 2 \\cdot 1 + (-1) \\cdot 0 + 3 \\cdot 1 = 5$.',
    ],
  },
  'ex-vek-2-2-d': {
    id: 'ex-vek-2-2-d', lessonId: 'vek-2-2', type: 'true-false',
    statement: 'Aus der Parameterform einer Ebene erhält man den Normalvektor durch das Kreuzprodukt der beiden Richtungsvektoren.',
    correct: true,
    explanation: `**Wahr.** Das ist genau der Zweck des Kreuzprodukts!

**Ansatz:** Wenn die Ebene $\\vec{r} = \\vec{p} + s \\vec{u} + t \\vec{v}$ lautet, spannen $\\vec{u}$ und $\\vec{v}$ die Ebene auf. Ein Normalvektor steht *senkrecht* auf beiden — genau das liefert $\\vec{u} \\times \\vec{v}$.

**Formel:** $\\vec{n} = \\vec{u} \\times \\vec{v}$.

**Probe:** Nach Definition des Kreuzprodukts gilt $\\vec{n} \\cdot \\vec{u} = 0$ und $\\vec{n} \\cdot \\vec{v} = 0$ — der Normalvektor steht senkrecht auf der ganzen Ebene. ✓

**Achtung:** $\\vec{u}$ und $\\vec{v}$ müssen linear unabhängig sein (nicht parallel), sonst wäre $\\vec{u} \\times \\vec{v} = \\vec{0}$ und der "Normalvektor" wäre undefiniert.

**Umgekehrte Richtung — Parameter aus Normalform:** Zwei beliebige Vektoren wählen, die $\\vec{n} \\cdot \\vec{u} = 0$ und $\\vec{n} \\cdot \\vec{v} = 0$ erfüllen.`,
    hints: [
      'Welche Operation liefert einen Vektor senkrecht zu zwei anderen?',
      'Das Kreuzprodukt $\\vec{u} \\times \\vec{v}$ steht senkrecht auf $\\vec{u}$ und $\\vec{v}$.',
      'Das ist genau die Eigenschaft, die ein Normalvektor braucht.',
    ],
  },
  'ex-vek-2-2-mastery': {
    id: 'ex-vek-2-2-mastery', lessonId: 'vek-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ebene $E\\colon 3x + 2y - z = 6$. Was ist der Normalvektor?',
    options: ['$(3, 2, -1)$', '$(3, 2, 6)$', '$(6, 0, 0)$', '$(1, 1, -1)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** In der Koordinatenform $a x + b y + c z = d$ sind die Koeffizienten vor $x, y, z$ direkt der Normalvektor: $\\vec{n} = (a, b, c)$.

**Rechnung:** $3x + 2y - z = 6 \\Rightarrow a = 3,\\; b = 2,\\; c = -1,\\; d = 6$. Also $\\vec{n} = (3, 2, -1)$.

**Probe:** Wähle einen Punkt in der Ebene, z.B. $\\vec{p} = (2, 0, 0)$ (da $3 \\cdot 2 = 6$). Verbindungsvektor zu $\\vec{r} = (0, 3, 0)$ (da $2 \\cdot 3 = 6$): $\\vec{r} - \\vec{p} = (-2, 3, 0)$. Skalarprodukt: $\\vec{n} \\cdot (\\vec{r} - \\vec{p}) = 3 \\cdot (-2) + 2 \\cdot 3 + (-1) \\cdot 0 = -6 + 6 = 0$. ✓

**Typischer Fehler:**
- $(3, 2, 6)$: Verwechslung — die $6$ ist $d$ (Abstand $\\cdot |\\vec{n}|$), nicht eine Komponente von $\\vec{n}$.
- Vorzeichenfehler beim $z$-Koeffizienten: $-z$ liefert $-1$, nicht $+1$.`,
    hints: [
      'Koordinatenform: $a x + b y + c z = d$.',
      'Die Koeffizienten $(a, b, c)$ vor $x, y, z$ bilden den Normalvektor.',
      'Achte auf das Vorzeichen: $-z$ bedeutet Koeffizient $-1$.',
    ],
  },

  // ── Lesson 3: Abstände und Schnitte ──
  'ex-vek-2-3-a': {
    id: 'ex-vek-2-3-a', lessonId: 'vek-2-3', type: 'multiple-choice',
    question: 'Wie berechnet man den Abstand eines Punktes $Q$ zu einer Ebene mit Normalvektor $\\vec{n}$ und Stützpunkt $P$?',
    options: [
      '$d = \\dfrac{|\\vec{n} \\cdot (\\vec{Q} - \\vec{P})|}{|\\vec{n}|}$',
      '$d = |\\vec{n} \\times (\\vec{Q} - \\vec{P})|$',
      '$d = |\\vec{Q} - \\vec{P}|$',
      '$d = \\vec{n} \\cdot \\vec{Q}$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Der Abstand Punkt–Ebene ist die Projektion des Verbindungsvektors $\\vec{Q} - \\vec{P}$ auf die Normalenrichtung — also der "senkrechte" Anteil.

**Formel:**
$$d = \\frac{|\\vec{n} \\cdot (\\vec{Q} - \\vec{P})|}{|\\vec{n}|}$$

**Bedeutung der Bestandteile:**
- $\\vec{n} \\cdot (\\vec{Q} - \\vec{P})$: Länge der Projektion $\\times |\\vec{n}|$
- Division durch $|\\vec{n}|$: normiert den Normalvektor (auf Länge 1)
- Betragsstriche: Abstand ist immer $\\geq 0$

**Typischer Fehler:**
- $|\\vec{n} \\times (\\vec{Q} - \\vec{P})|$: Diese Formel liefert den Abstand Punkt–**Gerade**, nicht Punkt–Ebene.
- $|\\vec{Q} - \\vec{P}|$: Ist einfach die Entfernung der beiden Punkte — das ist *nicht* der senkrechte Abstand zur Ebene.`,
    hints: [
      'Welche Operation projiziert auf die Normalenrichtung? Skalarprodukt.',
      'Formel: $d = \\dfrac{|\\vec{n} \\cdot (\\vec{Q} - \\vec{P})|}{|\\vec{n}|}$.',
      'Kreuzprodukt gehört zu Punkt–Gerade, nicht Punkt–Ebene.',
    ],
  },
  'ex-vek-2-3-b': {
    id: 'ex-vek-2-3-b', lessonId: 'vek-2-3', type: 'number-input',
    question: 'Ebene $E\\colon 2x + 2y + z = 9$. Punkt $Q = (1, 1, 1)$. Berechne den Abstand $d$ von $Q$ zu $E$.',
    correctValue: 1.33,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Hessesche Normalform direkt aus der Koordinatenform: $d = \\dfrac{|a q_x + b q_y + c q_z - d_0|}{\\sqrt{a^{2} + b^{2} + c^{2}}}$.

**Rechnung:**
- Zähler: $|2 \\cdot 1 + 2 \\cdot 1 + 1 \\cdot 1 - 9| = |2 + 2 + 1 - 9| = |-4| = 4$.
- Nenner: $|\\vec{n}| = \\sqrt{2^{2} + 2^{2} + 1^{2}} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$.
- $d = \\dfrac{4}{3} \\approx 1{,}33$.

**Probe:** $|\\vec{n}| = 3$ ist sauber, das deutet auf eine Prüfungsaufgabe mit "schöner" Lösung hin. Das Vorzeichen in $2+2+1-9 = -4$ zeigt, dass $Q$ auf der Seite liegt, die der Normalvektor *nicht* zeigt — aber für den Abstand ist nur der Betrag relevant.

**Typischer Fehler:**
- Wurzel im Nenner vergessen: $d = 4/9$ — falsche Einheit.
- Vorzeichen: $2+2+1-9 = -4$, manche schreiben $+4$ im Zähler. Durch die Betragsstriche egal — aber ohne Betrag würde das Vorzeichen zu einem negativen Abstand führen.`,
    hints: [
      'Formel: $d = \\dfrac{|a q_x + b q_y + c q_z - d_0|}{\\sqrt{a^{2} + b^{2} + c^{2}}}$.',
      'Zähler: $|2 + 2 + 1 - 9| = 4$. Nenner: $\\sqrt{4+4+1} = 3$.',
      '$d = 4/3 \\approx 1{,}33$.',
    ],
  },
  'ex-vek-2-3-c': {
    id: 'ex-vek-2-3-c', lessonId: 'vek-2-3', type: 'multiple-choice',
    question: 'Gerade $g\\colon \\vec{r} = (0, 0, 0) + t \\cdot (1, 1, 1)$. Ebene $E\\colon x + y + z = 6$. Für welchen Parameter $t$ schneidet $g$ die Ebene $E$?',
    options: ['$t = 0$', '$t = 1$', '$t = 2$', '$t = 3$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Punkte der Geraden in die Ebenengleichung einsetzen und nach $t$ auflösen.

**Rechnung:**
- Geradenpunkte: $x = t$, $y = t$, $z = t$.
- In $E$ einsetzen: $t + t + t = 6 \\;\\Rightarrow\\; 3t = 6 \\;\\Rightarrow\\; t = 2$.

**Schnittpunkt:** $\\vec{r}(2) = (2, 2, 2)$.

**Probe:** $2 + 2 + 2 = 6$. ✓

**Typischer Fehler:** $t = 6$ entsteht, wenn man $3t = 6$ vergisst und stattdessen $t = 6$ liest. $t = 3$ würde dem Ergebnis $t + t + t = 9$ entsprechen — falsche Gleichung.`,
    hints: [
      'Schnittpunkt Gerade–Ebene: Geradenpunkte in Ebenengleichung einsetzen.',
      'Aus $\\vec{r} = (t, t, t)$ wird $t + t + t = 6$.',
      '$3t = 6 \\;\\Rightarrow\\; t = 2$.',
    ],
  },
  'ex-vek-2-3-d': {
    id: 'ex-vek-2-3-d', lessonId: 'vek-2-3', type: 'number-input',
    question: 'Gerade $g\\colon \\vec{r} = (1, 0, 0) + t \\cdot (1, 1, 1)$. Ebene $E\\colon x + y + z = 6$. Berechne den Parameter $t$ des Schnittpunkts.',
    correctValue: 1.67,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Geradenpunkte in Ebenengleichung einsetzen, nach $t$ auflösen.

**Rechnung:**
- Geradenpunkte: $x = 1 + t$, $y = 0 + t = t$, $z = 0 + t = t$.
- In $E$ einsetzen: $(1 + t) + t + t = 6 \\;\\Rightarrow\\; 1 + 3t = 6 \\;\\Rightarrow\\; 3t = 5 \\;\\Rightarrow\\; t = \\dfrac{5}{3} \\approx 1{,}67$.

**Schnittpunkt:** $\\vec{r}(5/3) = (1 + 5/3,\\; 5/3,\\; 5/3) = (8/3,\\; 5/3,\\; 5/3)$.

**Probe:** $8/3 + 5/3 + 5/3 = 18/3 = 6$. ✓

**Typischer Fehler:** Stützpunkt vergessen: Nur $t + t + t = 6$ statt $1 + 3t = 6$ — liefert $t = 2$ statt $5/3$.`,
    hints: [
      'Geradenpunkte: $x = 1 + t$, $y = t$, $z = t$.',
      'In $x + y + z = 6$ einsetzen: $(1+t) + t + t = 6$.',
      '$1 + 3t = 6 \\;\\Rightarrow\\; t = 5/3$.',
    ],
  },
  'ex-vek-2-3-mastery': {
    id: 'ex-vek-2-3-mastery', lessonId: 'vek-2-3', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Abstand des Punktes $Q = (2, 0, 3)$ von der Ebene $E\\colon 2x - y + 2z = 1$. Gib den Abstand an.',
    correctValue: 3,
    tolerance: 0.01,
    unit: '',
    explanation: `**Strategie:** Hessesche Normalform. Für Ebene $a x + b y + c z = d_0$ und Punkt $Q$ gilt:
$$d = \\frac{|a q_x + b q_y + c q_z - d_0|}{\\sqrt{a^{2} + b^{2} + c^{2}}}.$$

**Rechnung:**
- Zähler: $|2 \\cdot 2 + (-1) \\cdot 0 + 2 \\cdot 3 - 1| = |4 + 0 + 6 - 1| = |9| = 9$.
- Nenner: $|\\vec{n}| = \\sqrt{2^{2} + (-1)^{2} + 2^{2}} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$.
- $d = \\dfrac{9}{3} = 3$.

**Probe:** Der Normalvektor $\\vec{n} = (2,-1,2)$ hat Betrag $3$. Ein Punkt auf der Ebene ist z.B. $(1/2, 0, 0)$ (da $2 \\cdot 1/2 = 1$). Verbindungsvektor: $(2, 0, 3) - (1/2, 0, 0) = (3/2, 0, 3)$. Projektion auf $\\vec{n}$: $\\vec{n} \\cdot (3/2, 0, 3) / |\\vec{n}| = (3 - 0 + 6)/3 = 9/3 = 3$. ✓

**Typischer Fehler:**
- Wurzel vergessen: $d = 9/9 = 1$.
- Vorzeichenfehler: $-y$-Koeffizient ist $-1$, Quadrat aber $+1$ — das Quadrat macht das Vorzeichen irrelevant im Nenner, nicht jedoch im Zähler.`,
    hints: [
      'Hessesche Normalform: $d = \\dfrac{|a q_x + b q_y + c q_z - d_0|}{\\sqrt{a^{2}+b^{2}+c^{2}}}$.',
      'Zähler: $|4 - 0 + 6 - 1| = 9$. Nenner: $\\sqrt{4+1+4} = 3$.',
      '$d = 9/3 = 3$.',
    ],
  },

  // ── Lesson 4: Prüfungsaufgaben Analytische Geometrie ──
  'ex-vek-2-4-a': {
    id: 'ex-vek-2-4-a', lessonId: 'vek-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] $g_1\\colon \\vec{r} = (1, 0, 2) + t \\cdot (1, 1, 0)$, $g_2\\colon \\vec{r} = (0, 1, 2) + s \\cdot (-1, 1, 0)$. Wie liegen die Geraden zueinander?',
    options: ['Parallel', 'Identisch', 'Schneidend', 'Windschief'],
    correctIndex: 2,
    explanation: `**Strategie:** 1) Parallelitätstest der Richtungsvektoren. 2) Wenn nicht parallel: Gleichungssystem lösen.

**Schritt 1 — Parallel?** $\\vec{v}_1 = (1,1,0)$, $\\vec{v}_2 = (-1,1,0)$. Gibt es $k$ mit $\\vec{v}_2 = k \\vec{v}_1$? $-1 = k \\cdot 1 \\Rightarrow k = -1$. Prüfen: $1 = -1 \\cdot 1 = -1$? Nein. Also **nicht parallel**.

**Schritt 2 — Gleichsetzen:**
$$\\begin{aligned}
1 + t &= -s \\quad &(\\text{I}) \\\\
0 + t &= 1 + s \\quad &(\\text{II}) \\\\
2 &= 2 \\quad &(\\text{III, trivial erfüllt})
\\end{aligned}$$

Aus (II): $s = t - 1$. In (I): $1 + t = -(t - 1) = -t + 1 \\;\\Rightarrow\\; 2t = 0 \\;\\Rightarrow\\; t = 0$, $s = -1$.

**Schnittpunkt:** $\\vec{r}_1(0) = (1, 0, 2)$. Probe mit $g_2$: $(0, 1, 2) + (-1)(-1, 1, 0) = (1, 0, 2)$. ✓

**Ergebnis:** Die Geraden **schneiden** sich im Punkt $(1, 0, 2)$.

**Typischer Fehler:** "Windschief" ohne die z-Komponente zu prüfen. Hier ist Gl. (III) trivial ($2 = 2$), also *kann* ein Schnittpunkt existieren — und wir haben ihn berechnet.`,
    hints: [
      'Erst Parallelität prüfen: $\\vec{v}_2 = k \\vec{v}_1$? Hier: nein.',
      'Dann Gleichsetzen und Gleichungssystem lösen (3 Gleichungen, 2 Unbekannte).',
      'Wenn das System lösbar ist $\\to$ schneidend. Sonst $\\to$ windschief.',
    ],
  },
  'ex-vek-2-4-b': {
    id: 'ex-vek-2-4-b', lessonId: 'vek-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Gegeben: Ebene $E\\colon 2x - y + 2z = 10$ und Punkt $P = (1, 2, 3)$. Welcher Punkt auf $E$ liegt $P$ am nächsten?',
    options: [
      '$(1, 2, 3)$ — $P$ liegt auf $E$',
      '$(3, 0, 5)$',
      'Der Fußpunkt $F$ des Lotes von $P$ auf $E$',
      '$(2, -1, 2)$',
    ],
    correctIndex: 2,
    explanation: `**Ansatz:** Der kürzeste Weg von einem Punkt zu einer Ebene ist immer *senkrecht* zur Ebene — in Richtung des Normalvektors.

**Konstruktion des Lotfußpunkts $F$:**
1. Hilfsgerade $h\\colon \\vec{r} = P + \\lambda \\vec{n}$ durch $P$ in Richtung Normalvektor aufstellen.
2. $\\lambda$ berechnen, bei dem $h$ die Ebene $E$ schneidet.
3. $F = P + \\lambda \\vec{n}$ einsetzen — der Fußpunkt.

**Konkret hier:** $\\vec{n} = (2, -1, 2)$, $|\\vec{n}| = 3$. Hilfsgerade: $(1+2\\lambda, 2-\\lambda, 3+2\\lambda)$. In $E$: $2(1+2\\lambda) - (2-\\lambda) + 2(3+2\\lambda) = 10 \\Rightarrow 2 + 4\\lambda - 2 + \\lambda + 6 + 4\\lambda = 10 \\Rightarrow 9\\lambda = 4 \\Rightarrow \\lambda = 4/9$. $F = (1+8/9,\\; 2-4/9,\\; 3+8/9) = (17/9,\\; 14/9,\\; 35/9)$.

**Merke:** Der Fußpunkt des Lots ist *definitionsgemäß* der nächste Punkt — das ist ein allgemeines Prinzip.

**Typischer Fehler:** Option A: Prüfen, ob $P$ in $E$ liegt: $2 \\cdot 1 - 2 + 2 \\cdot 3 = 6 \\neq 10$. $P \\notin E$.`,
    hints: [
      'Der kürzeste Weg zu einer Ebene ist immer senkrecht — also parallel zum Normalvektor.',
      'Konstruiere das Lot von $P$ in Richtung $\\vec{n}$ und schneide es mit $E$.',
      'Der Schnittpunkt heißt Lotfußpunkt $F$ und ist der nächste Punkt.',
    ],
  },
  'ex-vek-2-4-c': {
    id: 'ex-vek-2-4-c', lessonId: 'vek-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Zwei Ebenen $E_1\\colon x + y + z = 1$ und $E_2\\colon 2x + 2y + 2z = 5$. Wie liegen sie zueinander?',
    options: ['Identisch', 'Parallel (verschieden)', 'Schneiden sich in einer Geraden', 'Senkrecht zueinander'],
    correctIndex: 1,
    explanation: `**Strategie:** 1) Normalvektoren vergleichen. 2) Wenn parallel: prüfen, ob identisch.

**Schritt 1 — Normalvektoren:** $\\vec{n}_1 = (1, 1, 1)$, $\\vec{n}_2 = (2, 2, 2) = 2 \\vec{n}_1$. → Normalvektoren parallel → **Ebenen parallel**.

**Schritt 2 — Identisch?** Bringe $E_2$ auf gleiche Normalenlänge: Dividiere $E_2$ durch 2: $x + y + z = 5/2$. Vergleich mit $E_1\\colon x + y + z = 1$: rechte Seiten unterschiedlich ($1 \\neq 5/2$) → **verschieden**.

**Ergebnis:** Die Ebenen sind **parallel und verschieden** (also *nicht* identisch, *nicht* schneidend).

**Probe — Abstand:**
$$d = \\frac{|5/2 - 1|}{\\sqrt{3}} = \\frac{3/2}{\\sqrt{3}} = \\frac{\\sqrt{3}}{2} \\approx 0{,}87 > 0.$$

Abstand $> 0$ bestätigt: nicht identisch.

**Typischer Fehler:**
- "Identisch": Verführerisch, weil $\\vec{n}_2 = 2 \\vec{n}_1$. Aber die Konstanten $d$ müssen ebenfalls im gleichen Verhältnis stehen: $2 \\cdot 1 = 2 \\neq 5$.
- "Senkrecht": Wäre $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$. Hier $= 6 \\neq 0$.`,
    hints: [
      'Parallelität: Sind die Normalvektoren Vielfache voneinander?',
      'Identisch: Zusätzlich müssen die Konstanten im gleichen Verhältnis stehen.',
      'Hier: $\\vec{n}_2 = 2 \\vec{n}_1$, aber $d_2 = 5 \\neq 2 \\cdot 1$ $\\Rightarrow$ parallel, nicht identisch.',
    ],
  },
  'ex-vek-2-4-d': {
    id: 'ex-vek-2-4-d', lessonId: 'vek-2-4', type: 'number-input',
    question: '[PRÜFUNG] Abstand der parallelen Ebenen $E_1\\colon x + y + z = 1$ und $E_2\\colon x + y + z = 4$. Berechne den Abstand.',
    correctValue: 1.73,
    tolerance: 0.02,
    unit: '',
    explanation: `**Strategie:** Für parallele Ebenen mit *identischem* Normalvektor:
$$d = \\frac{|d_2 - d_1|}{|\\vec{n}|}.$$

**Rechnung:**
- $\\vec{n} = (1, 1, 1)$, $|\\vec{n}| = \\sqrt{1^{2} + 1^{2} + 1^{2}} = \\sqrt{3}$.
- $d = \\dfrac{|4 - 1|}{\\sqrt{3}} = \\dfrac{3}{\\sqrt{3}} = \\sqrt{3} \\approx 1{,}73$.

**Probe — über einen Punkt:** Wähle $\\vec{p}_1 = (1, 0, 0) \\in E_1$. Abstand zu $E_2$: $d = |1 \\cdot 1 + 0 + 0 - 4| / \\sqrt{3} = 3/\\sqrt{3} = \\sqrt{3}$. ✓

**Achtung — gleiche Normalvektor-Form:** Falls die Ebenen z.B. als $2x + 2y + 2z = 8$ gegeben wären, erst durch 2 teilen (auf gleiche Form wie $E_1$ bringen), dann die Formel anwenden.

**Typischer Fehler:** $d = |4 - 1| = 3$ — Wurzel-Nenner vergessen.`,
    hints: [
      'Formel: $d = \\dfrac{|d_2 - d_1|}{|\\vec{n}|}$ (bei identischem Normalvektor).',
      '$|\\vec{n}| = \\sqrt{1+1+1} = \\sqrt{3}$.',
      '$d = 3 / \\sqrt{3} = \\sqrt{3} \\approx 1{,}73$.',
    ],
  },
  'ex-vek-2-4-e': {
    id: 'ex-vek-2-4-e', lessonId: 'vek-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Gerade steht senkrecht auf einer Ebene. Welcher Zusammenhang gilt zwischen Richtungsvektor $\\vec{v}$ der Geraden und Normalvektor $\\vec{n}$ der Ebene?',
    options: [
      '$\\vec{v}$ und $\\vec{n}$ sind parallel: $\\vec{v} = k \\cdot \\vec{n}$',
      '$\\vec{v}$ und $\\vec{n}$ stehen senkrecht: $\\vec{v} \\cdot \\vec{n} = 0$',
      '$\\vec{v} \\cdot \\vec{n} = 1$',
      '$|\\vec{v}| = |\\vec{n}|$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Der Normalvektor steht *per Definition* senkrecht auf der Ebene. Eine Gerade, die ebenfalls senkrecht zur Ebene steht, muss daher *parallel* zum Normalvektor sein.

**Geometrisch:** Gerade ⊥ Ebene heißt: die Gerade verläuft in *genau der Richtung*, die der Normalvektor angibt. Das ist Parallelität, nicht Orthogonalität zwischen $\\vec{v}$ und $\\vec{n}$.

**Formel:** $\\vec{v} = k \\cdot \\vec{n}$ für ein $k \\neq 0$.

**Test:** Richtungsvektor und Normalvektor kollinear $\\Leftrightarrow$ $\\vec{v} \\times \\vec{n} = \\vec{0}$.

**Typischer Fehler:** Intuitiv "senkrecht auf der Ebene" $\\to$ "senkrecht auf etwas, das zur Ebene gehört" $\\to$ $\\vec{v} \\cdot \\vec{n} = 0$. Falsch! Der Normalvektor steht schon senkrecht auf der Ebene — alles parallel dazu ist ebenfalls senkrecht zur Ebene.`,
    hints: [
      'Visualisiere: Der Normalvektor $\\vec{n}$ zeigt senkrecht aus der Ebene heraus.',
      'Eine Gerade senkrecht zur Ebene zeigt in dieselbe Richtung wie $\\vec{n}$.',
      'Dieselbe Richtung $\\Rightarrow$ parallel: $\\vec{v} = k \\cdot \\vec{n}$.',
    ],
  },
  'ex-vek-2-4-mastery': {
    id: 'ex-vek-2-4-mastery', lessonId: 'vek-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Schnittgerade zweier Ebenen $E_1\\colon x + y = 2$ und $E_2\\colon y + z = 3$. Der Richtungsvektor der Schnittgeraden ist:',
    options: ['$(1, -1, 1)$', '$(1, 1, 1)$', '$(0, 1, 0)$', '$(1, 0, -1)$'],
    correctIndex: 0,
    explanation: `**Strategie:** Die Schnittgerade liegt in *beiden* Ebenen und ist daher *senkrecht zu beiden Normalvektoren*. Der Richtungsvektor ergibt sich aus dem Kreuzprodukt: $\\vec{v} = \\vec{n}_1 \\times \\vec{n}_2$.

**Rechnung:**
- Normalvektoren aus den Koordinatenformen: $\\vec{n}_1 = (1, 1, 0)$, $\\vec{n}_2 = (0, 1, 1)$.
- Kreuzprodukt:
$$\\vec{v} = \\vec{n}_1 \\times \\vec{n}_2 = \\begin{pmatrix} 1 \\cdot 1 - 0 \\cdot 1 \\\\ 0 \\cdot 0 - 1 \\cdot 1 \\\\ 1 \\cdot 1 - 1 \\cdot 0 \\end{pmatrix} = (1,\\, -1,\\, 1).$$

**Probe:** $\\vec{v} \\cdot \\vec{n}_1 = 1 \\cdot 1 + (-1) \\cdot 1 + 1 \\cdot 0 = 0$ ✓. $\\vec{v} \\cdot \\vec{n}_2 = 1 \\cdot 0 + (-1) \\cdot 1 + 1 \\cdot 1 = 0$ ✓. Senkrecht zu beiden Normalen $\\Rightarrow$ parallel zu beiden Ebenen $\\Rightarrow$ liegt in der Schnittgeraden.

**Typischer Fehler:**
- $(1, 1, 1)$: Summe der Normalvektoren — keine geometrische Bedeutung für die Schnittgerade.
- $(1, 0, -1)$: Vorzeichenfehler im Kreuzprodukt, typisch bei fehlender "zyklischer Reihenfolge" der Komponenten.`,
    hints: [
      'Die Schnittgerade liegt in beiden Ebenen $\\Rightarrow$ senkrecht zu beiden Normalvektoren.',
      'Welche Operation liefert einen Vektor senkrecht zu zwei anderen? Kreuzprodukt.',
      '$\\vec{v} = \\vec{n}_1 \\times \\vec{n}_2 = (1,1,0) \\times (0,1,1)$.',
    ],
  },
}

const lessons_vek_u2 = [
  {
    id: 'vek-2-1', unitId: 'vek-unit-2',
    title: 'Geradengleichung',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Parameterform einer Geraden aufstellen', 'Punkte auf einer Geraden testen', 'Lage zweier Geraden sicher klassifizieren'],
    prerequisites: [],
    nextLessonId: 'vek-2-2',
    steps: [
      {
        id: 'vek-2-1-s1', type: 'explanation-intuitive', title: 'Was ist eine Gerade im Raum?',
        content: `Stell dir vor, du stehst an einem Punkt und gehst immer geradeaus in eine bestimmte Richtung. Das ist eine **Gerade** im Raum.

**Analogie:** Du stehst am Bahnhof (Stützpunkt $\\vec{p}$) und gehst entlang der Gleise (Richtungsvektor $\\vec{v}$). Je nachdem, wie weit du gehst (Parameter $t$), erreichst du verschiedene Punkte auf der Geraden.

Die **Parameterform** lautet:
$$\\vec{r} = \\vec{p} + t \\cdot \\vec{v}$$

- $\\vec{p}$ = Stützpunkt (ein bekannter Punkt auf der Geraden)
- $\\vec{v}$ = Richtungsvektor (zeigt die Richtung der Geraden an)
- $t \\in \\mathbb{R}$ = Parameter (durchläuft alle reellen Zahlen)

**Punkt auf Gerade?** Setze das gesuchte $(x, y, z)$ gleich $\\vec{p} + t \\vec{v}$ und prüfe, ob es ein $t$ gibt, das *alle drei* Komponenten gleichzeitig erfüllt.`,
      },
      {
        id: 'vek-2-1-s2', type: 'explanation-formal', title: 'Lage zweier Geraden — Strategie',
        content: `Zwei Geraden $g_1$ und $g_2$ im Raum können genau eine von vier Lagen haben. Gehe **in dieser Reihenfolge** vor:

**Schritt 1 — Parallelitätstest:** Ist $\\vec{v}_2 = k \\cdot \\vec{v}_1$ für ein $k \\in \\mathbb{R}$? Alternativ: $\\vec{v}_1 \\times \\vec{v}_2 = \\vec{0}$.

- Ja $\\to$ **parallel**. Weiter mit Schritt 2.
- Nein $\\to$ nicht parallel. Weiter mit Schritt 3.

**Schritt 2 — Identisch?** Liegt der Stützpunkt $\\vec{p}_1$ von $g_1$ auf $g_2$? Setze $\\vec{p}_1 = \\vec{p}_2 + s \\vec{v}_2$ ein. Lösbar $\\to$ **identisch**. Sonst $\\to$ **parallel (verschieden)**.

**Schritt 3 — Schneidend vs. windschief:** Gleichsetzen $\\vec{p}_1 + t \\vec{v}_1 = \\vec{p}_2 + s \\vec{v}_2$ ergibt ein lineares Gleichungssystem (3 Gleichungen, 2 Unbekannte).

- Lösbar $\\to$ **schneidend**. Der Schnittpunkt liegt bei $\\vec{p}_1 + t^{*} \\vec{v}_1$.
- Nicht lösbar $\\to$ **windschief**.

**Merke — nur 3D:** Windschief gibt es nicht in der Ebene. In 2D gibt es nur parallel (identisch oder verschieden) und schneidend.`,
      },
      {
        id: 'vek-2-1-s3', type: 'visualization', title: 'Gerade im Raum',
        visualizationId: 'vector-diagram',
        params: {
          vectors: [
            { x: 2, y: 1, color: '#3b82f6', label: '$\\vec{p} = (2,1)$' },
            { x: 1, y: 2, color: '#ef4444', label: '$\\vec{v} = (1,2)$' },
          ],
          showGrid: true, showComponents: true,
        },
      },
      { id: 'vek-2-1-s4', type: 'exercise', title: 'Aufgabe 1 — Parameterform', exerciseRef: 'ex-vek-2-1-a' },
      { id: 'vek-2-1-s5', type: 'exercise', title: 'Aufgabe 2 — Punkt auf Gerade', exerciseRef: 'ex-vek-2-1-b' },
      { id: 'vek-2-1-s6', type: 'exercise', title: 'Aufgabe 3 — Lage zweier Geraden', exerciseRef: 'ex-vek-2-1-c' },
      { id: 'vek-2-1-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-2-1-mastery' },
    ],
  },
  {
    id: 'vek-2-2', unitId: 'vek-unit-2',
    title: 'Ebenengleichung',
    order: 2, estimatedMinutes: 18,
    learningGoals: ['Parameter-, Normal- und Koordinatenform einer Ebene aufstellen', 'Zwischen den Darstellungsformen umrechnen', 'Normalvektor aus zwei Richtungsvektoren bestimmen'],
    prerequisites: ['vek-2-1'],
    nextLessonId: 'vek-2-3',
    steps: [
      {
        id: 'vek-2-2-s1', type: 'explanation-intuitive', title: 'Was ist eine Ebene im Raum?',
        content: `Stell dir ein **Blatt Papier** vor, das unendlich groß ist und im Raum schwebt. Das ist eine Ebene.

Um eine Ebene festzulegen, brauchst du:
- Einen **Stützpunkt** $\\vec{p}$ (ein Punkt auf dem Blatt)
- Zwei **Richtungsvektoren** $\\vec{u}$ und $\\vec{v}$ (zwei verschiedene, nicht-parallele Richtungen auf dem Blatt)

**Parameterform:**
$$\\vec{r} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$$

Oder du sagst: Ich kenne den **Normalvektor** $\\vec{n}$ (steht senkrecht auf dem Blatt).

**Normalenform:**
$$\\vec{n} \\cdot (\\vec{r} - \\vec{p}) = 0$$

Das heißt: Jeder Punkt $\\vec{r}$ auf der Ebene hat einen Verbindungsvektor $\\vec{r} - \\vec{p}$, der **senkrecht** auf $\\vec{n}$ steht.`,
      },
      {
        id: 'vek-2-2-s2', type: 'explanation-formal', title: 'Drei Darstellungsformen',
        content: `**1. Parameterform:** $\\vec{r} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$
- Gut zum Punkte finden (beliebige $s, t$ einsetzen)
- Normalvektor aus den Richtungen: $\\vec{n} = \\vec{u} \\times \\vec{v}$

**2. Normalenform:** $\\vec{n} \\cdot (\\vec{r} - \\vec{p}) = 0$
- Gut zum Abstand berechnen
- $\\vec{n}$ steht senkrecht auf der Ebene

**3. Koordinatenform:** $a x + b y + c z = d_0$
- Normalvektor direkt: $\\vec{n} = (a, b, c)$
- Konstante: $d_0 = \\vec{n} \\cdot \\vec{p}$
- Gut zum Einsetzen und Prüfen, ob ein Punkt in der Ebene liegt

**Umrechnungen:**

| Von $\\to$ Nach | Rechnung |
|-----------------|----------|
| Parameter $\\to$ Normal | $\\vec{n} = \\vec{u} \\times \\vec{v}$ |
| Normal $\\to$ Koordinate | $\\vec{n} \\cdot \\vec{r} = \\vec{n} \\cdot \\vec{p}$ ausmultiplizieren |
| Koordinate $\\to$ Normal | $\\vec{n} = (a, b, c)$ ablesen |
| Koordinate $\\to$ Parameter | Stützpunkt $\\vec{p}$ wählen, zwei Richtungen $\\vec{u}, \\vec{v}$ mit $\\vec{n} \\cdot \\vec{u} = \\vec{n} \\cdot \\vec{v} = 0$ finden |`,
      },
      { id: 'vek-2-2-s3', type: 'exercise', title: 'Aufgabe 1 — Parameterform einer Ebene', exerciseRef: 'ex-vek-2-2-a' },
      { id: 'vek-2-2-s4', type: 'exercise', title: 'Aufgabe 2 — Bedeutung der Normalenform', exerciseRef: 'ex-vek-2-2-b' },
      { id: 'vek-2-2-s5', type: 'exercise', title: 'Aufgabe 3 — Normalen- zu Koordinatenform', exerciseRef: 'ex-vek-2-2-c' },
      { id: 'vek-2-2-s6', type: 'exercise', title: 'Aufgabe 4 — Normalvektor aus Richtungen', exerciseRef: 'ex-vek-2-2-d' },
      { id: 'vek-2-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-2-2-mastery' },
    ],
  },
  {
    id: 'vek-2-3', unitId: 'vek-unit-2',
    title: 'Abstände und Schnitte',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Abstand Punkt–Ebene berechnen', 'Abstand Punkt–Gerade berechnen', 'Schnittpunkt Gerade–Ebene bestimmen'],
    prerequisites: ['vek-2-2'],
    nextLessonId: 'vek-2-4',
    steps: [
      {
        id: 'vek-2-3-s1', type: 'explanation-formal', title: 'Abstandsformeln und Schnittberechnung',
        content: `**Abstand Punkt $Q$ zu Ebene** (Koordinatenform $a x + b y + c z = d_0$):
$$d = \\frac{|a q_x + b q_y + c q_z - d_0|}{\\sqrt{a^{2} + b^{2} + c^{2}}}$$

Idee: Projektion des Verbindungsvektors auf den Normalvektor $\\vec{n}$.

**Abstand Punkt $Q$ zu Gerade** $g\\colon \\vec{r} = \\vec{p} + t \\vec{v}$:
$$d = \\frac{|\\vec{v} \\times (\\vec{Q} - \\vec{p})|}{|\\vec{v}|}$$

Idee: Das Kreuzprodukt-Betrag ist die Fläche des Parallelogramms $\\vec{v}$–$(\\vec{Q}-\\vec{p})$. Fläche / Grundseite $|\\vec{v}|$ = Höhe = Abstand.

**Schnitt Gerade–Ebene:**
1. Geradenpunkte $\\vec{r}(t)$ komponentenweise in die Ebenengleichung einsetzen.
2. Lineare Gleichung in $t$ auflösen.
3. $t^{*}$ zurück in Geradengleichung einsetzen $\\to$ Schnittpunkt $\\vec{r}(t^{*})$.

**Mögliche Fälle beim Schnitt:**

| Gleichung | Bedeutung |
|-----------|-----------|
| Eindeutige Lösung für $t$ | Ein Schnittpunkt |
| $0 = 0$ (immer erfüllt) | Gerade liegt *in* der Ebene |
| Widerspruch ($0 = c \\neq 0$) | Gerade ist parallel zur Ebene, kein Schnitt |

**Merke — Abstand zu Ebene oder Gerade?**
- **Ebene:** Skalarprodukt mit Normalvektor.
- **Gerade:** Kreuzprodukt mit Richtungsvektor.`,
      },
      { id: 'vek-2-3-s2', type: 'exercise', title: 'Aufgabe 1 — Abstandsformel', exerciseRef: 'ex-vek-2-3-a' },
      { id: 'vek-2-3-s3', type: 'exercise', title: 'Aufgabe 2 — Abstand berechnen', exerciseRef: 'ex-vek-2-3-b' },
      { id: 'vek-2-3-s4', type: 'exercise', title: 'Aufgabe 3 — Schnittparameter', exerciseRef: 'ex-vek-2-3-c' },
      { id: 'vek-2-3-s5', type: 'exercise', title: 'Aufgabe 4 — Schnittparameter mit Stützpunkt', exerciseRef: 'ex-vek-2-3-d' },
      { id: 'vek-2-3-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-2-3-mastery' },
    ],
  },
  {
    id: 'vek-2-4', unitId: 'vek-unit-2',
    title: 'Prüfungsaufgaben Analytische Geometrie',
    order: 4, estimatedMinutes: 25,
    learningGoals: ['Lagebeziehungen sicher bestimmen', 'Abstands- und Schnittaufgaben lösen', 'Prüfungsniveau erreichen'],
    prerequisites: ['vek-2-3'],
    nextLessonId: null,
    steps: [
      {
        id: 'vek-2-4-s1', type: 'explanation-intuitive', title: 'Strategieblock: Analytische Geometrie auf Prüfungsniveau',
        content: `Diese Lektion bündelt die typischen **Prüfungsaufgaben** zu Geraden und Ebenen. Nutze folgende Strategien:

**A — Lage zweier Geraden (Entscheidungsbaum):**
1. Richtungsvektoren parallel? → parallel oder identisch.
2. Nicht parallel? → Gleichsetzen, LGS lösen → schneidend oder windschief.

**B — Lage zweier Ebenen:**
1. Normalvektoren parallel? → parallel oder identisch (Konstanten-Verhältnis prüfen).
2. Nicht parallel? → Schnittgerade existiert, Richtung = $\\vec{n}_1 \\times \\vec{n}_2$.

**C — Abstand:** Immer Hessesche Normalform einsetzen. Für parallele Ebenen: $d = |d_2 - d_1| / |\\vec{n}|$ (bei *gleichem* $\\vec{n}$!).

**D — Lot/Fußpunkt auf Ebene:** Hilfsgerade durch $P$ in Richtung $\\vec{n}$, Schnitt mit Ebene liefert den Lotfußpunkt $F$.

**E — Senkrechtstehen:**
- Gerade ⊥ Ebene $\\Leftrightarrow$ $\\vec{v}_\\text{Ger} \\parallel \\vec{n}_\\text{Eb}$.
- Gerade $\\parallel$ Ebene $\\Leftrightarrow$ $\\vec{v}_\\text{Ger} \\perp \\vec{n}_\\text{Eb}$, d.h. $\\vec{v} \\cdot \\vec{n} = 0$.

**Prüfungs-Check am Ende jeder Aufgabe:** Vorzeichen? Einheit? Plausibilitätstest mit einem konkreten Punkt?`,
      },
      { id: 'vek-2-4-s2', type: 'exercise', title: 'Aufgabe 1 — Lage zweier Geraden (Prüfung)', exerciseRef: 'ex-vek-2-4-a' },
      { id: 'vek-2-4-s3', type: 'exercise', title: 'Aufgabe 2 — Nächster Punkt auf Ebene (Prüfung)', exerciseRef: 'ex-vek-2-4-b' },
      { id: 'vek-2-4-s4', type: 'exercise', title: 'Aufgabe 3 — Lage zweier Ebenen (Prüfung)', exerciseRef: 'ex-vek-2-4-c' },
      { id: 'vek-2-4-s5', type: 'exercise', title: 'Aufgabe 4 — Abstand paralleler Ebenen (Prüfung)', exerciseRef: 'ex-vek-2-4-d' },
      { id: 'vek-2-4-s6', type: 'exercise', title: 'Aufgabe 5 — Gerade senkrecht zur Ebene (Prüfung)', exerciseRef: 'ex-vek-2-4-e' },
      { id: 'vek-2-4-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-2-4-mastery' },
    ],
  },
]

export const vek_unit2 = {
  id: 'vek-unit-2',
  title: 'Geraden und Ebenen im Raum',
  order: 2,
  description: 'Geradengleichung, Ebenenformen, Abstände und Schnitte',
  lessons: lessons_vek_u2,
  exercises: exercises_vek_u2,
}
