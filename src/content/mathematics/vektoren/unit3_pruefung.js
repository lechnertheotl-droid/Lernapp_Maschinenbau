// ── Vektoren Unit 3: Prüfungsvorbereitung Vektoren ──────────────────────────

export const exercises_vek_u3 = {
  // ── Lesson 1: Gemischte Aufgaben Skalar- und Kreuzprodukt ──
  'ex-vek-3-1-a': {
    id: 'ex-vek-3-1-a', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\vec{a} = (1, 2, 2)$, $\\vec{b} = (2, 1, 1)$. Berechne $\\vec{a} \\cdot \\vec{b}$.',
    options: ['$4$', '$6$', '$0$', '$(2, 2, 2)$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Skalarprodukt im 3D: Komponenten multiplizieren und *summieren* — Ergebnis ist eine Zahl.

**Formel:** $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y + a_z b_z$.

**Rechnung:** $\\vec{a} \\cdot \\vec{b} = 1 \\cdot 2 + 2 \\cdot 1 + 2 \\cdot 1 = 2 + 2 + 2 = 6$.

**Probe — Winkel plausibel?** $|\\vec{a}| = \\sqrt{1+4+4} = 3$, $|\\vec{b}| = \\sqrt{4+1+1} = \\sqrt{6}$. $\\cos(\\varphi) = 6 / (3 \\sqrt{6}) = 2/\\sqrt{6} \\approx 0{,}816$ → $\\varphi \\approx 35°$, spitzer Winkel. Passt zu positivem Skalarprodukt. ✓

**Typischer Fehler:**
- $(2, 2, 2)$: Das wäre das *komponentenweise Produkt* — weder Skalar- noch Kreuzprodukt.
- $0$: Das würde Orthogonalität bedeuten — hier nicht erfüllt.`,
    hints: [
      'Welche Operation liefert eine einzige Zahl? Skalarprodukt.',
      'Formel: $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y + a_z b_z$.',
      'Rechne: $1 \\cdot 2 + 2 \\cdot 1 + 2 \\cdot 1$.',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast einen Summanden vergessen: $1\\cdot 2 + 2\\cdot 1 = 4$ berücksichtigt nur die ersten zwei Komponenten. Das Skalarprodukt summiert alle drei: $\\vec{a} \\cdot \\vec{b} = 1\\cdot 2 + 2\\cdot 1 + 2\\cdot 1 = 6$.',
      2: '$0$ würde bedeuten, dass $\\vec{a} \\perp \\vec{b}$ — hier aber ist $1\\cdot 2 + 2\\cdot 1 + 2\\cdot 1 = 6 \\neq 0$. Die Vektoren sind nicht orthogonal.',
      3: '$(2, 2, 2)$ ist das *komponentenweise Produkt* $(a_x b_x, a_y b_y, a_z b_z)$ — weder Skalar- noch Kreuzprodukt. Das Skalarprodukt summiert diese drei Werte zu einer Zahl: $2 + 2 + 2 = 6$.',
    },
  },
  'ex-vek-3-1-b': {
    id: 'ex-vek-3-1-b', lessonId: 'vek-3-1', type: 'number-input',
    question: '[PRÜFUNG] $\\vec{a} = (3, 0, 4)$. Berechne den Betrag $|\\vec{a}|$.',
    correctValue: 5,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Betrag in 3D via Pythagoras (Quadratsumme der Komponenten, dann Wurzel).

**Formel:** $|\\vec{a}| = \\sqrt{a_x^{2} + a_y^{2} + a_z^{2}}$.

**Rechnung:** $|\\vec{a}| = \\sqrt{3^{2} + 0^{2} + 4^{2}} = \\sqrt{9 + 0 + 16} = \\sqrt{25} = 5$.

**Probe:** Der Vektor liegt in der xz-Ebene (wegen $a_y = 0$) und bildet das 3-4-5-Dreieck. ✓

**Typischer Fehler:**
- $7 = 3 + 4$: Einfaches Addieren statt Pythagoras.
- $25$: Quadrate summiert, aber Wurzel vergessen.`,
    hints: [
      'Formel in 3D: $|\\vec{a}| = \\sqrt{a_x^{2} + a_y^{2} + a_z^{2}}$.',
      'Quadrate: $9 + 0 + 16 = 25$.',
      'Wurzel nicht vergessen: $\\sqrt{25} = 5$.',
    ],
  },
  'ex-vek-3-1-c': {
    id: 'ex-vek-3-1-c', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\vec{a} = (1, 0, 0)$, $\\vec{b} = (0, 1, 0)$. Was ist $\\vec{a} \\times \\vec{b}$?',
    options: ['$(0, 0, 1)$', '$(0, 0, -1)$', '$(1, 1, 0)$', '$0$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Komponentenformel oder zyklische Einheitsvektor-Regel.

**Formel:** $\\vec{a} \\times \\vec{b} = (a_y b_z - a_z b_y,\\; a_z b_x - a_x b_z,\\; a_x b_y - a_y b_x)$.

**Rechnung:** $\\vec{a} \\times \\vec{b} = (0 \\cdot 0 - 0 \\cdot 1,\\; 0 \\cdot 0 - 1 \\cdot 0,\\; 1 \\cdot 1 - 0 \\cdot 0) = (0, 0, 1)$.

**Zyklische Regel:** $\\hat{e}_1 \\times \\hat{e}_2 = \\hat{e}_3$. ✓

**Probe:** Rechte-Hand-Regel: Zeigefinger x-Achse, Mittelfinger y-Achse, Daumen zeigt in $+z$-Richtung, also $(0, 0, 1)$. ✓

**Typischer Fehler:**
- $(0, 0, -1)$: Ergebnis von $\\hat{e}_2 \\times \\hat{e}_1$ — Reihenfolge vertauscht.
- $0$: Das Kreuzprodukt liefert einen **Vektor**, nicht einen Skalar. Hier wäre das der Nullvektor $\\vec{0}$, der nur bei parallelen Vektoren auftritt.`,
    hints: [
      'Zyklische Regel: $\\hat{e}_1 \\times \\hat{e}_2 = ?$',
      'Komponentenformel oder Rechte-Hand-Regel nutzen.',
      'Ergebnis: Einheitsvektor in z-Richtung.',
    ],
    wrongAnswerExplanations: {
      1: '$(0, 0, -1)$ ergibt sich aus $\\hat{e}_2 \\times \\hat{e}_1$ — Reihenfolge vertauscht. Das Kreuzprodukt ist antikommutativ: $\\hat{e}_1 \\times \\hat{e}_2 = -(\\hat{e}_2 \\times \\hat{e}_1)$. Hier zyklisch vorwärts, also $+\\hat{e}_3 = (0,0,1)$.',
      2: '$(1, 1, 0)$ ist die komponentenweise Summe $\\hat{e}_1 + \\hat{e}_2$ — das hat mit dem Kreuzprodukt nichts zu tun. Die Komponentenformel liefert $(0\\cdot 0 - 0\\cdot 1,\\; 0\\cdot 0 - 1\\cdot 0,\\; 1\\cdot 1 - 0\\cdot 0) = (0, 0, 1)$.',
      3: '$0$ (als Skalar) ist dimensional falsch — das Kreuzprodukt liefert einen *Vektor*. Außerdem entsteht der Nullvektor nur bei parallelen Ausgangsvektoren; $\\hat{e}_1$ und $\\hat{e}_2$ sind aber senkrecht, also $\\sin(90°) = 1$ und das Ergebnis $\\hat{e}_3 = (0,0,1)$.',
    },
  },
  'ex-vek-3-1-d': {
    id: 'ex-vek-3-1-d', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\vec{a} = (2, 1, -1)$, $\\vec{b} = (1, 3, 2)$. Was ist $\\vec{a} \\times \\vec{b}$?',
    options: ['$(5, -5, 5)$', '$(5, 5, 5)$', '$(-5, 5, -5)$', '$(5, -5, -5)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Kreuzprodukt-Komponentenformel Schritt für Schritt.

**Formel:** $\\vec{a} \\times \\vec{b} = (a_y b_z - a_z b_y,\\; a_z b_x - a_x b_z,\\; a_x b_y - a_y b_x)$.

**Rechnung:**
- $(a \\times b)_x = 1 \\cdot 2 - (-1) \\cdot 3 = 2 + 3 = 5$
- $(a \\times b)_y = (-1) \\cdot 1 - 2 \\cdot 2 = -1 - 4 = -5$
- $(a \\times b)_z = 2 \\cdot 3 - 1 \\cdot 1 = 6 - 1 = 5$
- $\\vec{a} \\times \\vec{b} = (5, -5, 5)$

**Probe (Orthogonalität):**
- $(5, -5, 5) \\cdot (2, 1, -1) = 10 - 5 - 5 = 0$ ✓
- $(5, -5, 5) \\cdot (1, 3, 2) = 5 - 15 + 10 = 0$ ✓

Das Ergebnis steht senkrecht auf beiden Ausgangsvektoren — wie es sich für das Kreuzprodukt gehört.

**Typischer Fehler:**
- $(-5, 5, -5)$: Alle Vorzeichen umgekehrt — das wäre $\\vec{b} \\times \\vec{a}$ (Antikommutativität).
- $(5, 5, 5)$: Vorzeichenfehler bei der y-Komponente (Minus von $a_z = -1$ vergessen).`,
    hints: [
      'Formel: $(a_y b_z - a_z b_y,\\; a_z b_x - a_x b_z,\\; a_x b_y - a_y b_x)$.',
      'x-Komponente: $1 \\cdot 2 - (-1) \\cdot 3 = 5$.',
      'Vorzeichenkontrolle: $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{a} = 0$ muss gelten.',
    ],
    wrongAnswerExplanations: {
      1: 'Vorzeichenfehler bei der $y$-Komponente: du hast das Minus von $a_z = -1$ vergessen. Richtig: $(a\\times b)_y = a_z b_x - a_x b_z = (-1)\\cdot 1 - 2\\cdot 2 = -5$, nicht $+5$.',
      2: 'Alle Vorzeichen sind umgekehrt — das entspricht $\\vec{b} \\times \\vec{a}$ (Antikommutativität). Gefragt ist $\\vec{a} \\times \\vec{b}$, und dafür ergibt die Komponentenformel $(5, -5, 5)$.',
      3: 'Vorzeichenfehler in der $z$-Komponente: $(a\\times b)_z = a_x b_y - a_y b_x = 2\\cdot 3 - 1\\cdot 1 = 5$, nicht $-5$. Die $y$-Komponente ist korrekt negativ, aber $z$ bleibt positiv.',
    },
  },
  'ex-vek-3-1-e': {
    id: 'ex-vek-3-1-e', lessonId: 'vek-3-1', type: 'true-false',
    statement: '[PRÜFUNG] Das Kreuzprodukt ist kommutativ: $\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{a}$.',
    correct: false,
    explanation: `**Falsch.** Das Kreuzprodukt ist **antikommutativ**:
$$\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a}).$$

**Warum?** In der Komponentenformel steht z.B. $a_x b_y - a_y b_x$. Tauscht man $\\vec{a}$ und $\\vec{b}$, wird daraus $b_x a_y - b_y a_x = -(a_x b_y - a_y b_x)$ — Vorzeichen kehrt sich um.

**Rechte-Hand-Regel visualisiert:** Zeigefinger $\\vec{a}$, Mittelfinger $\\vec{b}$ → Daumen zeigt nach oben. Tauschst du Zeige- und Mittelfinger → Daumen zeigt nach unten (Gegenrichtung).

**Praktische Bedeutung:** Beim Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$ ist die *Reihenfolge* wichtig — $\\vec{F} \\times \\vec{r}$ ergibt das Drehmoment in die *falsche* Richtung.

**Kontrast zu Skalarprodukt:** Das Skalarprodukt $\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$ ist *kommutativ* — die Reihenfolge spielt dort keine Rolle.`,
    hints: [
      'Test mit den Einheitsvektoren: $\\hat{e}_1 \\times \\hat{e}_2 = \\hat{e}_3$. Was ist $\\hat{e}_2 \\times \\hat{e}_1$?',
      'Anti* = Vorzeichenumkehr.',
      'Merke: Skalarprodukt kommutativ, Kreuzprodukt antikommutativ.',
    ],
  },
  'ex-vek-3-1-mastery': {
    id: 'ex-vek-3-1-mastery', lessonId: 'vek-3-1', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Winkel zwischen $\\vec{a} = (1, 1, 0)$ und $\\vec{b} = (0, 1, 1)$ in Grad. Runde auf ganze Grad.',
    correctValue: 60,
    tolerance: 1,
    unit: '',
    explanation: `**Strategie:** Für den Winkel zwischen Vektoren immer Skalarprodukt (nicht Kreuzprodukt):
$$\\cos(\\varphi) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}.$$

**Rechnung:**
- $\\vec{a} \\cdot \\vec{b} = 1 \\cdot 0 + 1 \\cdot 1 + 0 \\cdot 1 = 1$
- $|\\vec{a}| = \\sqrt{1^{2} + 1^{2} + 0^{2}} = \\sqrt{2}$
- $|\\vec{b}| = \\sqrt{0^{2} + 1^{2} + 1^{2}} = \\sqrt{2}$
- $\\cos(\\varphi) = \\dfrac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\dfrac{1}{2}$
- $\\varphi = \\arccos(1/2) = 60°$

**Probe:** $\\cos(60°) = 1/2$. ✓

**Typischer Fehler:**
- $90°$: Entsteht, wenn man versehentlich $\\vec{a} \\cdot \\vec{b} = 0$ annimmt, obwohl $= 1$.
- $45°$: Würde $\\cos(\\varphi) = 1/\\sqrt{2}$ voraussetzen — Nenner falsch berechnet.
- Kreuzprodukt statt Skalarprodukt genommen — wäre ein Vektor, kein Winkel.`,
    hints: [
      'Winkel $\\to$ Skalarprodukt (nicht Kreuzprodukt).',
      '$\\vec{a} \\cdot \\vec{b} = 1$. $|\\vec{a}| = |\\vec{b}| = \\sqrt{2}$.',
      '$\\cos(\\varphi) = 1/2 \\;\\Rightarrow\\; \\varphi = 60°$.',
    ],
  },

  // ── Lesson 2: Flächen- und Volumenberechnung ──
  'ex-vek-3-2-a': {
    id: 'ex-vek-3-2-a', lessonId: 'vek-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Die Fläche des von $\\vec{a}$ und $\\vec{b}$ aufgespannten Parallelogramms ist:',
    options: [
      '$|\\vec{a} \\cdot \\vec{b}|$',
      '$|\\vec{a} \\times \\vec{b}|$',
      '$\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$',
      '$|\\vec{a}| + |\\vec{b}|$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Fläche eines Parallelogramms = Grundseite $\\cdot$ Höhe = $|\\vec{a}| \\cdot (|\\vec{b}| \\sin \\varphi)$. Genau das liefert der Betrag des Kreuzprodukts.

**Formel:** $A = |\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\varphi)$.

**Probe mit Spezialfall:** $\\vec{a} = (1,0,0)$, $\\vec{b} = (0,1,0)$. Einheitsquadrat mit Fläche $1$. $\\vec{a} \\times \\vec{b} = (0,0,1)$, $|\\ldots| = 1$. ✓

**Wichtige Abgrenzungen:**

| Formel | Bedeutung |
|--------|-----------|
| $|\\vec{a} \\times \\vec{b}|$ | **Fläche Parallelogramm** |
| $\\tfrac{1}{2} \\|\\vec{a} \\times \\vec{b}\\|$ | Fläche Dreieck |
| $|\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$ | Volumen Spat (3 Vektoren) |
| $\\vec{a} \\cdot \\vec{b}$ | Projektion / Winkel |

**Typischer Fehler:** $|\\vec{a} \\cdot \\vec{b}|$ ist der Betrag des Skalarprodukts (Zahl) und beschreibt *Projektionslänge*, keine Fläche.`,
    hints: [
      'Fläche $\\to$ Kreuzprodukt, Winkel $\\to$ Skalarprodukt.',
      'Formel: $A = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\varphi) = |\\vec{a} \\times \\vec{b}|$.',
      'Für ein Parallelogramm aus $\\vec{a}$ und $\\vec{b}$ brauchst du kein $\\vec{c}$.',
    ],
    wrongAnswerExplanations: {
      0: '$|\\vec{a} \\cdot \\vec{b}|$ ist der Betrag des Skalarprodukts — beschreibt Projektionslänge, nicht Fläche. Das Skalarprodukt enthält $\\cos\\varphi$ (maximal bei paralleler Lage), die Fläche braucht aber $\\sin\\varphi$: $A = |\\vec{a} \\times \\vec{b}|$.',
      2: '$\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$ ist das Spatprodukt und liefert das *Volumen* eines Parallelepipeds aus drei Vektoren — nicht die Fläche. Hier braucht es nur zwei Vektoren und das Kreuzprodukt $|\\vec{a} \\times \\vec{b}|$.',
      3: '$|\\vec{a}| + |\\vec{b}|$ ist die Längensumme der Seitenvektoren und entspricht keinem geometrischen Flächenmaß. Die Parallelogrammfläche ist $A = |\\vec{a}||\\vec{b}|\\sin\\varphi = |\\vec{a} \\times \\vec{b}|$.',
    },
  },
  'ex-vek-3-2-b': {
    id: 'ex-vek-3-2-b', lessonId: 'vek-3-2', type: 'number-input',
    question: '[PRÜFUNG] $\\vec{a} = (3, 0, 0)$, $\\vec{b} = (0, 4, 0)$. Berechne die Parallelogrammfläche $A = |\\vec{a} \\times \\vec{b}|$.',
    correctValue: 12,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Kreuzprodukt berechnen, dann Betrag.

**Rechnung:**
- $\\vec{a} \\times \\vec{b} = (0 \\cdot 0 - 0 \\cdot 4,\\; 0 \\cdot 0 - 3 \\cdot 0,\\; 3 \\cdot 4 - 0 \\cdot 0) = (0, 0, 12)$.
- $|\\vec{a} \\times \\vec{b}| = \\sqrt{0^{2} + 0^{2} + 12^{2}} = 12$.

**Probe (geometrisch):** $\\vec{a}$ zeigt in x-Richtung mit Länge 3, $\\vec{b}$ in y-Richtung mit Länge 4. Sie stehen senkrecht ($\\varphi = 90°$, $\\sin 90° = 1$), also $A = 3 \\cdot 4 \\cdot 1 = 12$. Einfaches Rechteck. ✓

**Typischer Fehler:**
- $7 = 3 + 4$: Addition der Beträge — falsche Formel.
- $0$: Wenn man $\\vec{a} \\parallel \\vec{b}$ annimmt (was hier nicht stimmt).`,
    hints: [
      'Kreuzprodukt berechnen, dann Betrag nehmen.',
      'Die beiden Vektoren stehen senkrecht $\\Rightarrow$ $\\sin \\varphi = 1$.',
      'Alternativ: $A = |\\vec{a}| \\cdot |\\vec{b}| = 3 \\cdot 4 = 12$ (nur wenn senkrecht).',
    ],
  },
  'ex-vek-3-2-c': {
    id: 'ex-vek-3-2-c', lessonId: 'vek-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Volumen eines Spats (Parallelepiped) aus $\\vec{a}, \\vec{b}, \\vec{c}$ wird berechnet durch:',
    options: [
      '$V = |\\vec{a} \\times \\vec{b}|$',
      '$V = \\vec{a} \\cdot \\vec{b} \\cdot \\vec{c}$',
      '$V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$',
      '$V = |\\vec{a}| \\cdot |\\vec{b}| \\cdot |\\vec{c}|$',
    ],
    correctIndex: 2,
    explanation: `**Ansatz:** Volumen = Grundfläche $\\cdot$ Höhe. Das **Spatprodukt** kombiniert beide Schritte:

**Formel:** $V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$.

**Bedeutung Schritt für Schritt:**
1. $\\vec{b} \\times \\vec{c}$ ergibt einen Vektor, dessen Betrag = Grundfläche (Parallelogramm aus $\\vec{b}, \\vec{c}$) und Richtung = Normalvektor dieser Fläche.
2. $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$ projiziert $\\vec{a}$ auf diesen Normalvektor → Höhe × Grundfläche = Volumen.

**Betragsstriche:** Das Spatprodukt kann negativ werden (bei "Linkssystem"). Betrag macht das Volumen immer $\\geq 0$.

**Typischer Fehler:**
- $V = |\\vec{a}| \\cdot |\\vec{b}| \\cdot |\\vec{c}|$: Gilt nur, wenn alle drei Vektoren paarweise senkrecht stehen (Quader). Allgemein falsch.
- $V = \\vec{a} \\cdot \\vec{b} \\cdot \\vec{c}$: Unsinn — man kann nicht drei Vektoren einfach "multiplizieren". Skalarprodukt braucht zwei Vektoren und liefert eine Zahl.`,
    hints: [
      'Volumen braucht Fläche $\\times$ Höhe. Was liefert Fläche? Kreuzprodukt.',
      'Die Höhe ist die Projektion des dritten Vektors auf den Normalvektor der Grundfläche.',
      'Spatprodukt: $V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$.',
    ],
    wrongAnswerExplanations: {
      0: '$|\\vec{a} \\times \\vec{b}|$ liefert nur die Parallelogrammfläche (2D-Maß) — für Volumen fehlt die Höhe bzw. der dritte Vektor. Das Spatprodukt kombiniert Grundfläche und Höhe: $V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$.',
      1: '$\\vec{a} \\cdot \\vec{b} \\cdot \\vec{c}$ ist mathematisch nicht definiert — das Skalarprodukt braucht zwei Vektoren und liefert eine Zahl, danach kann man keinen weiteren Vektor multiplizieren. Korrekt: Kreuzprodukt zuerst, dann Skalarprodukt: $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$.',
      3: '$|\\vec{a}| \\cdot |\\vec{b}| \\cdot |\\vec{c}|$ gilt nur, wenn alle drei Vektoren paarweise senkrecht stehen (Quader) — allgemein zu groß, weil Winkel ignoriert werden. Das Spatprodukt enthält implizit den $\\sin \\cdot \\cos$-Term: $V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$.',
    },
  },
  'ex-vek-3-2-mastery': {
    id: 'ex-vek-3-2-mastery', lessonId: 'vek-3-2', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\vec{a} = (1, 0, 0)$, $\\vec{b} = (0, 1, 0)$, $\\vec{c} = (0, 0, 3)$. Berechne das Spatvolumen $V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$.',
    correctValue: 3,
    tolerance: 0.01,
    unit: '',
    explanation: `**Strategie:** Erst $\\vec{b} \\times \\vec{c}$, dann Skalarprodukt mit $\\vec{a}$, zuletzt Betrag.

**Schritt 1 — Kreuzprodukt $\\vec{b} \\times \\vec{c}$:**
$$\\vec{b} \\times \\vec{c} = (1 \\cdot 3 - 0 \\cdot 0,\\; 0 \\cdot 0 - 0 \\cdot 3,\\; 0 \\cdot 0 - 1 \\cdot 0) = (3, 0, 0).$$

**Schritt 2 — Skalarprodukt mit $\\vec{a}$:**
$$\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = 1 \\cdot 3 + 0 \\cdot 0 + 0 \\cdot 0 = 3.$$

**Schritt 3 — Betrag:** $V = |3| = 3$.

**Probe:** Die drei Vektoren sind paarweise senkrecht (Einheitsrichtungen), bilden also einen **Quader** mit Kantenlängen $1, 1, 3$. $V = 1 \\cdot 1 \\cdot 3 = 3$. ✓

**Tipp:** Bei achsenparallelen Vektoren kann das Spatprodukt auch über die Determinante berechnet werden:
$$\\det\\!\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix} = 3.$$

**Typischer Fehler:**
- $|\\vec{a}| \\cdot |\\vec{b}| \\cdot |\\vec{c}| = 1 \\cdot 1 \\cdot 3 = 3$ gibt hier zufällig das gleiche Ergebnis — funktioniert aber nur bei paarweise senkrechten Vektoren. Allgemein braucht es das Spatprodukt.`,
    hints: [
      'Schritt 1: $\\vec{b} \\times \\vec{c}$ berechnen.',
      'Schritt 2: Skalarprodukt mit $\\vec{a}$ bilden.',
      'Schritt 3: Betrag nehmen. Hier: $V = 1 \\cdot 1 \\cdot 3 = 3$ (Quader).',
    ],
  },

  // ── Lesson 3: Technische Anwendungen ──
  'ex-vek-3-3-a': {
    id: 'ex-vek-3-3-a', lessonId: 'vek-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Drehmoment wird berechnet durch:',
    options: [
      '$\\vec{M} = \\vec{r} \\cdot \\vec{F}$',
      '$\\vec{M} = \\vec{r} \\times \\vec{F}$',
      '$\\vec{M} = |\\vec{r}| \\cdot |\\vec{F}|$',
      '$\\vec{M} = \\vec{F} \\times \\vec{r}$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Das Drehmoment ist eine *Vektorgröße*. Nur das Kreuzprodukt liefert einen Vektor aus zwei Vektoren.

**Formel:** $\\vec{M} = \\vec{r} \\times \\vec{F}$.

**Bestandteile:**
- $\\vec{r}$: Ortsvektor vom Drehpunkt zum Angriffspunkt der Kraft (Hebelarm).
- $\\vec{F}$: Kraftvektor.
- $\\vec{M}$: Drehmoment — zeigt in die Richtung der Drehachse (Rechte-Hand-Regel).

**Betrag:** $|\\vec{M}| = |\\vec{r}| \\cdot |\\vec{F}| \\cdot \\sin(\\alpha)$ mit Winkel $\\alpha$ zwischen $\\vec{r}$ und $\\vec{F}$. Maximales Drehmoment bei $\\alpha = 90°$ (Kraft senkrecht zum Hebel).

**Achtung Reihenfolge:** $\\vec{F} \\times \\vec{r} = -(\\vec{r} \\times \\vec{F})$ — das liefert das Drehmoment in Gegenrichtung und ist *falsch*.

**Typischer Fehler:**
- $\\vec{r} \\cdot \\vec{F}$: Skalarprodukt ergibt eine Zahl — das ist Arbeit, nicht Drehmoment.
- $|\\vec{r}| \\cdot |\\vec{F}|$: Vergisst den Winkel zwischen Hebelarm und Kraft. Nur bei $\\alpha = 90°$ korrekt.`,
    hints: [
      'Drehmoment ist ein Vektor $\\Rightarrow$ Kreuzprodukt, nicht Skalarprodukt.',
      'Reihenfolge: Hebelarm zuerst, Kraft zweitens.',
      'Formel: $\\vec{M} = \\vec{r} \\times \\vec{F}$.',
    ],
    wrongAnswerExplanations: {
      0: '$\\vec{r} \\cdot \\vec{F}$ ist das Skalarprodukt — liefert eine Zahl, keine Drehachse. Das wäre die Formel für *Arbeit* $W = \\vec{F} \\cdot \\vec{s}$. Drehmoment ist ein Vektor, also Kreuzprodukt: $\\vec{M} = \\vec{r} \\times \\vec{F}$.',
      2: '$|\\vec{r}| \\cdot |\\vec{F}|$ ist nur der Betrag bei $\\sin\\varphi = 1$ (senkrechter Hebel). Allgemein gilt $|\\vec{M}| = |\\vec{r}||\\vec{F}|\\sin\\varphi$, und zusätzlich fehlt die *Richtung* des Drehmoments. Nur das Kreuzprodukt liefert den vollen Vektor.',
      3: '$\\vec{F} \\times \\vec{r} = -(\\vec{r} \\times \\vec{F})$ (Antikommutativität) — das ergibt das Drehmoment mit falschem Vorzeichen bzw. in Gegenrichtung. Die physikalische Konvention ist $\\vec{M} = \\vec{r} \\times \\vec{F}$, Hebelarm zuerst.',
    },
  },
  'ex-vek-3-3-b': {
    id: 'ex-vek-3-3-b', lessonId: 'vek-3-3', type: 'number-input',
    question: '[PRÜFUNG] Hebelarm $\\vec{r} = (0{,}5,\\, 0,\\, 0)\\,\\text{m}$, Kraft $\\vec{F} = (0,\\, 100,\\, 0)\\,\\text{N}$. Berechne $|\\vec{M}| = |\\vec{r} \\times \\vec{F}|$ in Nm.',
    correctValue: 50,
    tolerance: 0.1,
    unit: '',
    explanation: `**Ansatz:** Kreuzprodukt berechnen, dann Betrag. Alternativ: da $\\vec{r} \\perp \\vec{F}$, gilt $|\\vec{M}| = |\\vec{r}| \\cdot |\\vec{F}|$.

**Rechnung (Komponentenformel):**
$$\\vec{r} \\times \\vec{F} = (0 \\cdot 0 - 0 \\cdot 100,\\; 0 \\cdot 0 - 0{,}5 \\cdot 0,\\; 0{,}5 \\cdot 100 - 0 \\cdot 0) = (0,\\, 0,\\, 50).$$

$|\\vec{M}| = 50\\,\\text{Nm}$. Die Drehung wirkt um die z-Achse.

**Alternative Rechnung (geometrisch):** $|\\vec{r}| = 0{,}5$, $|\\vec{F}| = 100$, $\\varphi = 90°$, $\\sin 90° = 1$.
$$|\\vec{M}| = 0{,}5 \\cdot 100 \\cdot 1 = 50\\,\\text{Nm}. \\checkmark$$

**Einheit prüfen:** $\\text{m} \\cdot \\text{N} = \\text{Nm}$. ✓

**Typischer Fehler:**
- $100\\,\\text{Nm}$: $|\\vec{F}|$ nur abgelesen, Hebel vergessen.
- $0$: Skalarprodukt statt Kreuzprodukt ($\\vec{r} \\cdot \\vec{F} = 0$, weil senkrecht).`,
    hints: [
      'Da $\\vec{r} \\perp \\vec{F}$: $|\\vec{M}| = |\\vec{r}| \\cdot |\\vec{F}|$.',
      '$|\\vec{r}| = 0{,}5$, $|\\vec{F}| = 100$.',
      '$|\\vec{M}| = 0{,}5 \\cdot 100 = 50\\,\\text{Nm}$.',
    ],
  },
  'ex-vek-3-3-c': {
    id: 'ex-vek-3-3-c', lessonId: 'vek-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Gewichtskraft $|\\vec{G}| = 100\\,\\text{N}$ wirkt vertikal auf einen Körper auf einer Rampe mit Neigungswinkel $\\alpha = 30°$. Wie groß ist die Hangabtriebskraft (parallel zur Rampe)?',
    options: [
      '$100 \\cdot \\cos(30°) \\approx 86{,}6\\,\\text{N}$',
      '$100 \\cdot \\sin(30°) = 50\\,\\text{N}$',
      '$100 \\cdot \\tan(30°) \\approx 57{,}7\\,\\text{N}$',
      '$100\\,\\text{N}$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Zerlege die Gewichtskraft in eine Komponente parallel zur Rampe (Hangabtrieb) und eine senkrecht zur Rampe (Normalkraft).

**Formeln für die Rampenzerlegung:**
- **Hangabtriebskraft** (parallel zur Rampe): $F_{\\parallel} = G \\cdot \\sin(\\alpha)$
- **Normalkraft** (senkrecht zur Rampe): $F_{\\perp} = G \\cdot \\cos(\\alpha)$

**Rechnung:** $F_{\\parallel} = 100 \\cdot \\sin(30°) = 100 \\cdot 0{,}5 = 50\\,\\text{N}$.

**Merkhilfe:** "Sinus zieht hinab" — die Hangabtriebskraft wird mit $\\sin$ berechnet, weil sie bei kleinem $\\alpha$ klein ist und bei $\\alpha = 90°$ (senkrechte Wand) gleich der vollen Gewichtskraft. $\\sin(0°) = 0$, $\\sin(90°) = 1$ passt.

**Probe — Pythagoras:** $F_{\\parallel}^{2} + F_{\\perp}^{2} = (G \\sin \\alpha)^{2} + (G \\cos \\alpha)^{2} = G^{2}(\\sin^{2} + \\cos^{2}) = G^{2}$. ✓

**Typischer Fehler:** $\\cos$ und $\\sin$ vertauscht (Antwort A). Merke: Bei der Rampe ist $\\sin$ für den Hang, $\\cos$ für die Normale.`,
    hints: [
      'Zerlege $\\vec{G}$ in Rampenrichtung und Rampen-Normalrichtung.',
      'Hangabtrieb: $F_{\\parallel} = G \\sin(\\alpha)$. Normalkraft: $F_{\\perp} = G \\cos(\\alpha)$.',
      '$\\sin(30°) = 0{,}5 \\Rightarrow F_{\\parallel} = 50\\,\\text{N}$.',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast $\\sin$ und $\\cos$ vertauscht: $G \\cos(30°) = 86{,}6$ ist die *Normalkraft* (drückt senkrecht auf die Rampe), nicht der Hangabtrieb. Merkhilfe: Bei $\\alpha = 0°$ (flach) muss Hangabtrieb $0$ sein — das liefert $\\sin(0°) = 0$, nicht $\\cos(0°) = 1$.',
      2: '$G \\tan(\\alpha)$ entspricht keiner physikalischen Kraftkomponente an der Rampe. Die Rampenzerlegung nutzt $\\sin$ für hangparallel und $\\cos$ für hangsenkrecht — $\\tan$ tritt nicht auf.',
      3: '$100\\,\\text{N}$ wäre die volle Gewichtskraft — nur bei $\\alpha = 90°$ (senkrechte Wand) würde die ganze Gewichtskraft hangabwärts ziehen. Bei $\\alpha = 30°$ wird sie auf $G \\sin 30° = 50\\,\\text{N}$ reduziert.',
    },
  },
  'ex-vek-3-3-mastery': {
    id: 'ex-vek-3-3-mastery', lessonId: 'vek-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Kran hebt eine Last mit $\\vec{F} = (0, 0, -500)\\,\\text{N}$. Der Seilansatzpunkt liegt bei $\\vec{r} = (3, 4, 0)\\,\\text{m}$ vom Drehpunkt. Welches Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$ wirkt?',
    options: [
      '$\\vec{M} = (-2000, 1500, 0)\\,\\text{Nm}$',
      '$\\vec{M} = (2000, -1500, 0)\\,\\text{Nm}$',
      '$\\vec{M} = (0, 0, -2500)\\,\\text{Nm}$',
      '$|\\vec{M}| = 2500\\,\\text{Nm}$ (nur Betrag, keine Richtung)',
    ],
    correctIndex: 0,
    explanation: `**Strategie:** Komponentenweise Kreuzprodukt-Formel, dann Plausibilitätscheck.

**Formel:** $\\vec{M} = \\vec{r} \\times \\vec{F} = (r_y F_z - r_z F_y,\\; r_z F_x - r_x F_z,\\; r_x F_y - r_y F_x)$.

**Rechnung mit $\\vec{r} = (3, 4, 0)$, $\\vec{F} = (0, 0, -500)$:**
- $M_x = r_y F_z - r_z F_y = 4 \\cdot (-500) - 0 \\cdot 0 = -2000$
- $M_y = r_z F_x - r_x F_z = 0 \\cdot 0 - 3 \\cdot (-500) = 1500$
- $M_z = r_x F_y - r_y F_x = 3 \\cdot 0 - 4 \\cdot 0 = 0$
- $\\vec{M} = (-2000, 1500, 0)\\,\\text{Nm}$

**Probe (Orthogonalität):**
- $\\vec{M} \\cdot \\vec{r} = -2000 \\cdot 3 + 1500 \\cdot 4 + 0 = -6000 + 6000 = 0$ ✓
- $\\vec{M} \\cdot \\vec{F} = 0 + 0 + 0 \\cdot (-500) = 0$ ✓

**Probe (Betrag):** $|\\vec{M}| = \\sqrt{2000^{2} + 1500^{2}} = \\sqrt{4\\,000\\,000 + 2\\,250\\,000} = \\sqrt{6\\,250\\,000} = 2500\\,\\text{Nm}$. Die Last kippt den Kran um eine Achse in der xy-Ebene.

**Typischer Fehler:**
- Option B: Alle Vorzeichen umgekehrt — entspricht $\\vec{F} \\times \\vec{r}$ (Reihenfolge vertauscht).
- Option C: $M_z = -2500$ — richtiges Betragsquadrat falsch als z-Komponente eingesetzt.
- Option D: Nur Betrag; die *Richtung* des Drehmoments fehlt (Prüfung fragt nach Vektor).`,
    hints: [
      'Formel: $\\vec{M} = \\vec{r} \\times \\vec{F}$ (Reihenfolge beachten!).',
      '$M_x = r_y F_z - r_z F_y = 4 \\cdot (-500) - 0 = -2000$.',
      'Plausibilitätscheck: $\\vec{M} \\cdot \\vec{r} = 0$ und $\\vec{M} \\cdot \\vec{F} = 0$.',
    ],
    wrongAnswerExplanations: {
      1: 'Alle Vorzeichen sind umgekehrt — das entspricht $\\vec{F} \\times \\vec{r}$ (Reihenfolge vertauscht) wegen der Antikommutativität $\\vec{F} \\times \\vec{r} = -(\\vec{r} \\times \\vec{F})$. Gefragt ist $\\vec{r} \\times \\vec{F} = (-2000, 1500, 0)\\,\\text{Nm}$.',
      2: '$(0, 0, -2500)$ entsteht wohl aus dem Betrag $|\\vec{M}| = 2500$ mit falschem Vorzeichen, in die $z$-Komponente gesetzt. Die korrekte Komponentenformel liefert aber $M_z = r_x F_y - r_y F_x = 3\\cdot 0 - 4\\cdot 0 = 0$, nicht $-2500$.',
      3: 'Nur den Betrag anzugeben verliert die *Richtung* des Drehmoments — und die Aufgabe fragt explizit nach dem Vektor $\\vec{M} = \\vec{r} \\times \\vec{F}$. Betrag $2500$ stimmt zwar ($\\sqrt{2000^{2} + 1500^{2}} = 2500$), aber der komplette Vektor ist $(-2000, 1500, 0)\\,\\text{Nm}$.',
    },
  },
}

const lessons_vek_u3 = [
  {
    id: 'vek-3-1', unitId: 'vek-unit-3',
    title: 'Gemischte Aufgaben Skalar- und Kreuzprodukt',
    order: 1, estimatedMinutes: 20,
    learningGoals: ['Skalar- und Kreuzprodukt sicher unterscheiden', 'Winkel zwischen Vektoren bestimmen', 'Rechenregeln (Kommutativität, Antikommutativität) sicher anwenden'],
    subGoals: [
      { label: 'Skalarprodukt liefert **Zahl**, Kreuzprodukt liefert **Vektor** (nur in 3D)', examRelevance: 'hoch' },
      { label: 'Winkel: $\\cos\\varphi = (\\vec a \\cdot \\vec b)/(|\\vec a||\\vec b|)$', examRelevance: 'hoch' },
      { label: 'Orthogonalitätstest: $\\vec a \\cdot \\vec b = 0$; Parallelitätstest: $\\vec a \\times \\vec b = \\vec 0$', examRelevance: 'hoch' },
      { label: 'Skalarprodukt kommutativ: $\\vec a \\cdot \\vec b = \\vec b \\cdot \\vec a$', examRelevance: 'hoch' },
      { label: 'Kreuzprodukt **anti**kommutativ: $\\vec a \\times \\vec b = -(\\vec b \\times \\vec a)$', examRelevance: 'hoch' },
      { label: 'Arbeit $W = \\vec F \\cdot \\vec s$ (Skalar), Drehmoment $\\vec M = \\vec r \\times \\vec F$ (Vektor)', examRelevance: 'hoch' },
    ],
    prerequisites: ['vek-1-4'],
    nextLessonId: 'vek-3-2',
    steps: [
      {
        id: 'vek-3-1-s1', type: 'explanation-intuitive', title: 'Strategieblock: Skalar- oder Kreuzprodukt?',
        content: `In der Prüfung ist die häufigste Stolperstelle bei Vektoren: **Welches Produkt brauche ich?**

**Entscheidungshilfe:**

| Frage in der Aufgabe | Werkzeug | Warum? |
|----------------------|----------|--------|
| "Winkel zwischen $\\vec{a}$ und $\\vec{b}$?" | **Skalarprodukt** | $\\cos \\varphi = (\\vec{a}\\cdot\\vec{b}) / (|\\vec{a}||\\vec{b}|)$ |
| "Senkrecht? Orthogonal?" | **Skalarprodukt** $= 0$ | $\\cos 90° = 0$ |
| "Arbeit einer Kraft?" | **Skalarprodukt** | $W = \\vec{F} \\cdot \\vec{s}$ |
| "Projektionslänge?" | **Skalarprodukt** | Projektion = Zahl |
| "Normalvektor einer Ebene?" | **Kreuzprodukt** | Ergebnis ⊥ beide Ausgangsvektoren |
| "Fläche Parallelogramm/Dreieck?" | **Kreuzprodukt** | $|\\vec{a}\\times\\vec{b}| = $ Fläche |
| "Drehmoment?" | **Kreuzprodukt** | $\\vec{M} = \\vec{r} \\times \\vec{F}$ |
| "Parallel?" | **Kreuzprodukt** $= \\vec{0}$ | $\\sin 0° = 0$ |

**Merke die Dimensionen:**
- Skalarprodukt: Vektor $\\times$ Vektor $\\to$ **Zahl** (Skalar).
- Kreuzprodukt: Vektor $\\times$ Vektor $\\to$ **Vektor** (nur in 3D).

**Prüfungs-Check nach der Rechnung:**
1. Dimension richtig? (Winkel $\\to$ Zahl; Drehmoment $\\to$ Vektor)
2. Vorzeichen plausibel?
3. Orthogonalitätstest: $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{a} = 0$?`,
      },
      { id: 'vek-3-1-s2', type: 'exercise', title: 'Aufgabe 1 — Skalarprodukt 3D', exerciseRef: 'ex-vek-3-1-a' },
      { id: 'vek-3-1-s3', type: 'exercise', title: 'Aufgabe 2 — Betrag 3D', exerciseRef: 'ex-vek-3-1-b' },
      { id: 'vek-3-1-s4', type: 'exercise', title: 'Aufgabe 3 — Kreuzprodukt Einheitsvektoren', exerciseRef: 'ex-vek-3-1-c' },
      { id: 'vek-3-1-s5', type: 'exercise', title: 'Aufgabe 4 — Kreuzprodukt allgemein', exerciseRef: 'ex-vek-3-1-d' },
      { id: 'vek-3-1-s6', type: 'exercise', title: 'Aufgabe 5 — Antikommutativität', exerciseRef: 'ex-vek-3-1-e' },
      { id: 'vek-3-1-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-3-1-mastery' },
    ],
  },
  {
    id: 'vek-3-2', unitId: 'vek-unit-3',
    title: 'Flächen- und Volumenberechnung',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Parallelogrammfläche mit Kreuzprodukt berechnen', 'Dreiecksfläche als halbes Kreuzprodukt', 'Spatprodukt für Volumen anwenden'],
    subGoals: [
      { label: 'Parallelogrammfläche: $A = |\\vec a \\times \\vec b|$', examRelevance: 'hoch' },
      { label: 'Dreiecksfläche: $A = \\tfrac{1}{2} |\\vec a \\times \\vec b|$', examRelevance: 'hoch' },
      { label: 'Spatvolumen: $V = |\\vec a \\cdot (\\vec b \\times \\vec c)|$ (Spatprodukt)', examRelevance: 'hoch' },
      { label: 'Tetraedervolumen: $V = \\tfrac{1}{6} |\\vec a \\cdot (\\vec b \\times \\vec c)|$', examRelevance: 'hoch' },
      { label: 'Spatprodukt $= 0 \\iff$ Vektoren komplanar (kein Volumen)', examRelevance: 'hoch' },
      { label: 'Vorzeichen ohne Betrag: $>0$ Rechtssystem, $<0$ Linkssystem', examRelevance: 'mittel' },
    ],
    prerequisites: ['vek-3-1'],
    nextLessonId: 'vek-3-3',
    steps: [
      {
        id: 'vek-3-2-s1', type: 'explanation-formal', title: 'Flächen und Volumen mit Vektoren — Strategieblock',
        content: `Vektoren sind ideal, um Flächen und Volumen zu berechnen — das ist eine der häufigsten Anwendungen in Prüfungen.

**Parallelogrammfläche** (aufgespannt von $\\vec{a}$ und $\\vec{b}$):
$$A = |\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\varphi)$$

**Dreiecksfläche** = halbe Parallelogrammfläche:
$$A_{\\triangle} = \\tfrac{1}{2} \\left|\\vec{a} \\times \\vec{b}\\right|$$

**Spatprodukt** (Volumen des Parallelepipeds aus $\\vec{a}, \\vec{b}, \\vec{c}$):
$$V = \\left|\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})\\right|$$

**Strategie:** Erst $\\vec{b} \\times \\vec{c}$ (Flächenvektor). Dann Skalarprodukt mit $\\vec{a}$ (projiziert $\\vec{a}$ auf die Normale → Höhe). Ergebnis = Höhe $\\cdot$ Fläche = Volumen.

**Tetraedervolumen** = ein Sechstel des Spatvolumens:
$$V_{\\text{Tetraeder}} = \\tfrac{1}{6} \\left|\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})\\right|$$

**Vorzeicheninterpretation des Spatprodukts (ohne Betrag):**
- $> 0$: Rechtssystem (Rechte-Hand-Regel).
- $< 0$: Linkssystem (gespiegelt).
- $= 0$: Die drei Vektoren liegen in einer Ebene (komplanar, kein Volumen).

**Prüfungs-Check:** Einheiten stimmen (Fläche $\\to$ $\\text{m}^{2}$, Volumen $\\to$ $\\text{m}^{3}$)? Betrag genommen (positiv)?`,
      },
      { id: 'vek-3-2-s2', type: 'exercise', title: 'Aufgabe 1 — Parallelogrammfläche', exerciseRef: 'ex-vek-3-2-a' },
      { id: 'vek-3-2-s3', type: 'exercise', title: 'Aufgabe 2 — Fläche berechnen', exerciseRef: 'ex-vek-3-2-b' },
      { id: 'vek-3-2-s4', type: 'exercise', title: 'Aufgabe 3 — Spatprodukt', exerciseRef: 'ex-vek-3-2-c' },
      { id: 'vek-3-2-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-3-2-mastery' },
    ],
  },
  {
    id: 'vek-3-3', unitId: 'vek-unit-3',
    title: 'Technische Anwendungen',
    order: 3, estimatedMinutes: 18,
    learningGoals: ['Drehmoment als Kreuzprodukt berechnen', 'Kräftezerlegung an der schiefen Ebene', 'Vektoren in technischen Aufgaben anwenden'],
    subGoals: [
      { label: 'Schiefe Ebene: Hangabtrieb $F_H = G \\sin\\alpha$, Normalkraft $F_N = G \\cos\\alpha$', examRelevance: 'hoch' },
      { label: 'Drehmoment $\\vec M = \\vec r \\times \\vec F$: Betrag $|M| = r F \\sin\\alpha$, max bei $\\alpha = 90°$', examRelevance: 'hoch' },
      { label: 'Drehmoment-Richtung via Rechte-Hand-Regel (Daumen = $\\vec r$, Zeige = $\\vec F$, Mittel = $\\vec M$)', examRelevance: 'hoch' },
      { label: 'Einheiten: Kraft N, Hebel m, Moment Nm, Arbeit Nm = J', examRelevance: 'hoch' },
      { label: 'Gleichgewicht: $\\sum \\vec F = 0$ UND $\\sum \\vec M = 0$ (alle Momentensummen um beliebigen Punkt)', examRelevance: 'hoch' },
    ],
    prerequisites: ['vek-3-2'],
    nextLessonId: null,
    steps: [
      {
        id: 'vek-3-3-s1', type: 'explanation-intuitive', title: 'Strategieblock: Vektoren im Maschinenbau',
        content: `Vektoren sind das **Handwerkszeug** des Ingenieurs. Zwei zentrale Anwendungen müssen auf Prüfungsniveau sicher sitzen:

**1. Kräftezerlegung an der schiefen Ebene (Rampe)**

Eine Gewichtskraft $\\vec{G}$ zeigt senkrecht nach unten. Auf einer Rampe mit Neigungswinkel $\\alpha$ zerlegt man sie in zwei Komponenten:

| Komponente | Formel | Wirkung |
|------------|--------|---------|
| Hangabtriebskraft $F_{\\parallel}$ | $G \\cdot \\sin(\\alpha)$ | zieht nach unten die Rampe |
| Normalkraft $F_{\\perp}$ | $G \\cdot \\cos(\\alpha)$ | drückt auf die Rampe |

Merke: "Sinus hangab, Kosinus drückt auf."

**2. Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$**

Denk an einen Schraubenschlüssel: Je länger der Hebel ($\\vec{r}$) und je stärker du drückst ($\\vec{F}$), desto größer das Drehmoment. Und am effektivsten ist's, wenn du senkrecht zum Hebel drückst.

$$|\\vec{M}| = |\\vec{r}| \\cdot |\\vec{F}| \\cdot \\sin(\\alpha)$$

- $\\alpha = 90°$ (senkrecht): Maximales Drehmoment.
- $\\alpha = 0°$ (parallel): Kein Drehmoment.
- Vektorrichtung $\\vec{M}$: Drehachse (Rechte-Hand-Regel).

**Prüfungs-Check für technische Aufgaben:**
1. Skizze zur Orientierung — welche Richtungen zeigen wohin?
2. Vektoren in ein klares Koordinatensystem legen (z.B. x = horizontal, z = vertikal).
3. Einheiten kontrollieren: Kraft in N, Hebel in m, Moment in Nm.
4. Vorzeichen-Plausibilität: Last nach unten $\\to$ $F_z < 0$.`,
      },
      { id: 'vek-3-3-s2', type: 'exercise', title: 'Aufgabe 1 — Drehmoment-Formel', exerciseRef: 'ex-vek-3-3-a' },
      { id: 'vek-3-3-s3', type: 'exercise', title: 'Aufgabe 2 — Drehmoment-Betrag', exerciseRef: 'ex-vek-3-3-b' },
      { id: 'vek-3-3-s4', type: 'exercise', title: 'Aufgabe 3 — Hangabtriebskraft', exerciseRef: 'ex-vek-3-3-c' },
      { id: 'vek-3-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-3-3-mastery' },
    ],
  },
]

export const vek_unit3 = {
  id: 'vek-unit-3',
  title: 'Prüfungsvorbereitung Vektoren',
  order: 3,
  description: 'Gemischte Aufgaben, Flächen- und Volumenberechnung, technische Anwendungen',
  unitGoals: [
    'Flächen von Dreiecken/Parallelogrammen über $|\\vec{a} \\times \\vec{b}|$ berechnen',
    'Volumen von Spaten über Spatprodukt $\\det(\\vec{a}, \\vec{b}, \\vec{c})$ bestimmen',
    'Mehrschritt-Prüfungsaufgaben mit Mix aus Geraden, Ebenen, Winkeln und Abständen lösen',
  ],
  lessons: lessons_vek_u3,
  exercises: exercises_vek_u3,
}
