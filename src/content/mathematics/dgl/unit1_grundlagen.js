// ── Differentialgleichungen Unit 1: Grundbegriffe & einfache DGL ─────────────

export const exercises_dgl_u1 = {
  'ex-dgl-1-1-a': {
    id: 'ex-dgl-1-1-a', lessonId: 'dgl-1-1', type: 'multiple-choice',
    question: 'Was ist eine Differentialgleichung (DGL)?',
    options: [
      'Eine Gleichung, die nur Zahlen enthält',
      'Eine Gleichung, die eine unbekannte Funktion und ihre Ableitungen enthält',
      'Eine Gleichung mit zwei Unbekannten x und y',
      'Eine Gleichung, die nur Integrale enthält',
    ],
    correctIndex: 1,
    explanation: 'Eine DGL enthält eine gesuchte Funktion y(x) und mindestens eine ihrer Ableitungen y\', y\'\', ... Das Ziel: die Funktion y(x) finden!',
    hints: ['Das Wort "Differential" bezieht sich auf die Ableitung (den Differentialquotienten).'],
  },
  'ex-dgl-1-1-b': {
    id: 'ex-dgl-1-1-b', lessonId: 'dgl-1-1', type: 'multiple-choice',
    question: 'Welche Ordnung hat die DGL $y\'\' + 3y\' - 2y = 0$?',
    options: ['Ordnung 0', 'Ordnung 1', 'Ordnung 2', 'Ordnung 3'],
    correctIndex: 2,
    explanation: 'Die Ordnung einer DGL ist die höchste vorkommende Ableitung. Hier ist $y\'\'$ (zweite Ableitung) die höchste, also Ordnung 2.',
    hints: ['Zähle die Striche bei der höchsten Ableitung: y\'\' hat zwei Striche.'],
  },
  'ex-dgl-1-1-c': {
    id: 'ex-dgl-1-1-c', lessonId: 'dgl-1-1', type: 'true-false',
    statement: 'Die DGL $y\' = y^2 + x$ ist linear.',
    correct: false,
    explanation: 'Die DGL ist nichtlinear, weil $y^2$ vorkommt. Bei einer linearen DGL darf y und seine Ableitungen nur in der 1. Potenz auftreten (also y, y\', y\'\', ... aber nicht y², sin(y), e^y, ...).',
    hints: ['Linear bedeutet: y und seine Ableitungen kommen nur in der 1. Potenz vor.'],
  },
  'ex-dgl-1-1-mastery': {
    id: 'ex-dgl-1-1-mastery', lessonId: 'dgl-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Ein Anfangswertproblem (AWP) besteht aus:',
    options: [
      'Nur einer DGL',
      'Einer DGL plus Anfangsbedingung(en) wie $y(x_0) = y_0$',
      'Zwei verschiedenen DGL',
      'Einer DGL ohne Lösung',
    ],
    correctIndex: 1,
    explanation: 'Ein AWP besteht aus einer DGL zusammen mit Anfangsbedingungen, z.B. $y(0) = 1$. Die Anfangsbedingung wählt eine bestimmte Lösung aus der allgemeinen Lösungsfamilie aus.',
    hints: ['Die DGL allein hat unendlich viele Lösungen. Die Anfangsbedingung fixiert die Konstante C.'],
  },

  'ex-dgl-1-2-a': {
    id: 'ex-dgl-1-2-a', lessonId: 'dgl-1-2', type: 'multiple-choice',
    question: 'Bei der Trennung der Variablen bringt man die DGL $\\frac{dy}{dx} = g(x) \\cdot h(y)$ in welche Form?',
    options: [
      '$\\frac{dy}{h(y)} = g(x)\\,dx$',
      '$dy = g(x) + h(y)\\,dx$',
      '$\\frac{dx}{dy} = g(x) \\cdot h(y)$',
      '$dy \\cdot dx = g(x) \\cdot h(y)$',
    ],
    correctIndex: 0,
    explanation: 'Man trennt die Variablen: alles mit y auf eine Seite, alles mit x auf die andere. Dann integriert man beide Seiten: $\\int \\frac{dy}{h(y)} = \\int g(x)\\,dx$.',
    hints: ['Alle y-Terme (inkl. dy) nach links, alle x-Terme (inkl. dx) nach rechts.'],
  },
  'ex-dgl-1-2-b': {
    id: 'ex-dgl-1-2-b', lessonId: 'dgl-1-2', type: 'multiple-choice',
    question: 'Löse die DGL $y\' = xy$ mit Trennung der Variablen. Welche allgemeine Lösung erhältst du?',
    options: [
      '$y = Ce^{x}$',
      '$y = Ce^{x^2/2}$',
      '$y = Cx^2$',
      '$y = Ce^{-x^2/2}$',
    ],
    correctIndex: 1,
    explanation: 'Trennung: $\\frac{dy}{y} = x\\,dx$. Integration: $\\ln|y| = \\frac{x^2}{2} + C_1$. Auflösen: $y = Ce^{x^2/2}$ mit $C = \\pm e^{C_1}$.',
    hints: ['Schritt 1: $\\frac{dy}{y} = x\\,dx$. Schritt 2: Beide Seiten integrieren.'],
  },
  'ex-dgl-1-2-c': {
    id: 'ex-dgl-1-2-c', lessonId: 'dgl-1-2', type: 'number-input',
    question: 'Gegeben: $y\' = 2y$ mit $y(0) = 3$. Berechne $y(1)$ (auf 2 Dezimalstellen gerundet).',
    correctAnswer: 22.17,
    tolerance: 0.1,
    unit: '',
    explanation: 'Trennung: $\\frac{dy}{y} = 2\\,dx \\Rightarrow \\ln|y| = 2x + C_1 \\Rightarrow y = Ce^{2x}$. Anfangsbedingung: $y(0) = C = 3$. Also $y(1) = 3e^2 \\approx 22.17$.',
    hints: ['Allgemeine Lösung: $y = Ce^{2x}$. Setze $x = 0$ ein, um C zu bestimmen.'],
  },
  'ex-dgl-1-2-mastery': {
    id: 'ex-dgl-1-2-mastery', lessonId: 'dgl-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Löse das AWP: $y\' = -3y$, $y(0) = 5$. Was ist $y(x)$?',
    options: [
      '$y = 5e^{3x}$',
      '$y = 5e^{-3x}$',
      '$y = -3e^{5x}$',
      '$y = 5 - 3x$',
    ],
    correctIndex: 1,
    explanation: 'Trennung: $\\frac{dy}{y} = -3\\,dx \\Rightarrow \\ln|y| = -3x + C_1 \\Rightarrow y = Ce^{-3x}$. AWP: $y(0) = C = 5$. Also $y = 5e^{-3x}$.',
    hints: ['Trennung der Variablen anwenden. Dann C aus der Anfangsbedingung bestimmen.'],
  },

  'ex-dgl-1-3-a': {
    id: 'ex-dgl-1-3-a', lessonId: 'dgl-1-3', type: 'multiple-choice',
    question: 'Die allgemeine lineare DGL 1. Ordnung hat die Form:',
    options: [
      '$y\' = y^2 + p(x)$',
      '$y\' + p(x) \\cdot y = q(x)$',
      '$y\'\' + p(x) \\cdot y = 0$',
      '$y\' \\cdot y = q(x)$',
    ],
    correctIndex: 1,
    explanation: 'Die Standardform ist $y\' + p(x) \\cdot y = q(x)$. Dabei heißt $q(x)$ die Störfunktion. Für $q(x) = 0$ ist die DGL homogen.',
    hints: ['Linear 1. Ordnung: y und y\' kommen nur in der 1. Potenz vor, höchste Ableitung ist y\'.'],
  },
  'ex-dgl-1-3-b': {
    id: 'ex-dgl-1-3-b', lessonId: 'dgl-1-3', type: 'multiple-choice',
    question: 'Wie lautet der integrierende Faktor $\\mu(x)$ für die DGL $y\' + p(x) \\cdot y = q(x)$?',
    options: [
      '$\\mu = e^{\\int q(x)\\,dx}$',
      '$\\mu = e^{\\int p(x)\\,dx}$',
      '$\\mu = \\int p(x)\\,dx$',
      '$\\mu = e^{p(x)}$',
    ],
    correctIndex: 1,
    explanation: 'Der integrierende Faktor ist $\\mu(x) = e^{\\int p(x)\\,dx}$. Multipliziert man die DGL mit $\\mu$, wird die linke Seite zu $(\\mu \\cdot y)\' = \\mu \\cdot q$.',
    hints: ['Der integrierende Faktor hängt nur von $p(x)$ ab, nicht von $q(x)$.'],
  },
  'ex-dgl-1-3-c': {
    id: 'ex-dgl-1-3-c', lessonId: 'dgl-1-3', type: 'multiple-choice',
    question: 'Löse: $y\' + 2y = 0$. Die allgemeine Lösung ist:',
    options: [
      '$y = Ce^{2x}$',
      '$y = Ce^{-2x}$',
      '$y = 2x + C$',
      '$y = C \\cdot \\cos(2x)$',
    ],
    correctIndex: 1,
    explanation: 'Homogene lineare DGL: $y\' = -2y$. Lösung: $y = Ce^{-2x}$. Alternativ: $\\mu = e^{2x}$, dann $(e^{2x} \\cdot y)\' = 0 \\Rightarrow y = Ce^{-2x}$.',
    hints: ['Homogene DGL $y\' + py = 0$ hat die Lösung $y = Ce^{-\\int p\\,dx}$.'],
  },
  'ex-dgl-1-3-d': {
    id: 'ex-dgl-1-3-d', lessonId: 'dgl-1-3', type: 'number-input',
    question: 'DGL: $y\' + y = 3$, AWP: $y(0) = 1$. Berechne $y(1)$ (auf 2 Dezimalstellen).',
    correctAnswer: 2.26,
    tolerance: 0.1,
    unit: '',
    explanation: '$\\mu = e^x$. $(e^x y)\' = 3e^x \\Rightarrow e^x y = 3e^x + C \\Rightarrow y = 3 + Ce^{-x}$. AWP: $y(0) = 1 = 3 + C \\Rightarrow C = -2$. Also $y(x) = 3 - 2e^{-x}$, $y(1) = 3 - 2e^{-1} \\approx 2.26$.',
    hints: ['Integrierender Faktor: $\\mu = e^{\\int 1\\,dx} = e^x$.'],
  },
  'ex-dgl-1-3-mastery': {
    id: 'ex-dgl-1-3-mastery', lessonId: 'dgl-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die allgemeine Lösung von $y\' - 3y = 6$ ist:',
    options: [
      '$y = Ce^{3x} - 2$',
      '$y = Ce^{-3x} + 2$',
      '$y = Ce^{3x} + 6$',
      '$y = 6x + Ce^{3x}$',
    ],
    correctIndex: 0,
    explanation: 'Homogene Lösung: $y_h = Ce^{3x}$. Partikuläre Lösung (Ansatz $y_p = \\text{const}$): $0 - 3y_p = 6 \\Rightarrow y_p = -2$. Allgemein: $y = Ce^{3x} - 2$.',
    hints: ['Homogene Lösung + partikuläre Lösung = allgemeine Lösung.'],
  },

  'ex-dgl-1-4-a': {
    id: 'ex-dgl-1-4-a', lessonId: 'dgl-1-4', type: 'multiple-choice',
    question: 'Für die DGL $ay\'\' + by\' + cy = 0$ macht man den Ansatz $y = e^{\\lambda x}$. Welche Gleichung ergibt sich für $\\lambda$?',
    options: [
      '$a + b + c = 0$',
      '$a\\lambda^2 + b\\lambda + c = 0$',
      '$a\\lambda + b = 0$',
      '$\\lambda^2 = -c/a$',
    ],
    correctIndex: 1,
    explanation: 'Einsetzen von $y = e^{\\lambda x}$, $y\' = \\lambda e^{\\lambda x}$, $y\'\' = \\lambda^2 e^{\\lambda x}$ ergibt nach Kürzen von $e^{\\lambda x}$: $a\\lambda^2 + b\\lambda + c = 0$ (charakteristische Gleichung).',
    hints: ['$y = e^{\\lambda x}$ einsetzen und $e^{\\lambda x} \\neq 0$ kürzen.'],
  },
  'ex-dgl-1-4-b': {
    id: 'ex-dgl-1-4-b', lessonId: 'dgl-1-4', type: 'multiple-choice',
    question: 'Die charakteristische Gleichung hat komplexe Wurzeln $\\lambda = \\alpha \\pm i\\beta$. Welche Form hat die allgemeine Lösung?',
    options: [
      '$y = C_1 e^{\\alpha x} + C_2 e^{\\beta x}$',
      '$y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$',
      '$y = (C_1 + C_2 x)e^{\\alpha x}$',
      '$y = C_1 \\cos(\\alpha x) + C_2 \\sin(\\beta x)$',
    ],
    correctIndex: 1,
    explanation: 'Bei komplexen Wurzeln $\\alpha \\pm i\\beta$ ist die reelle Lösung: $y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$. Das beschreibt eine Schwingung (sin/cos) mit Dämpfung ($e^{\\alpha x}$).',
    hints: ['Komplexe Wurzeln → Schwingung! $\\alpha$ bestimmt die Dämpfung, $\\beta$ die Frequenz.'],
  },
  'ex-dgl-1-4-c': {
    id: 'ex-dgl-1-4-c', lessonId: 'dgl-1-4', type: 'multiple-choice',
    question: 'Löse: $y\'\' + 4y = 0$. Die allgemeine Lösung ist:',
    options: [
      '$y = C_1 e^{2x} + C_2 e^{-2x}$',
      '$y = C_1 \\cos(2x) + C_2 \\sin(2x)$',
      '$y = (C_1 + C_2 x)e^{2x}$',
      '$y = C_1 \\cos(4x) + C_2 \\sin(4x)$',
    ],
    correctIndex: 1,
    explanation: 'Charakteristische Gleichung: $\\lambda^2 + 4 = 0 \\Rightarrow \\lambda = \\pm 2i$. Also $\\alpha = 0$, $\\beta = 2$. Lösung: $y = C_1 \\cos(2x) + C_2 \\sin(2x)$ (reine Schwingung ohne Dämpfung).',
    hints: ['$\\lambda^2 = -4 \\Rightarrow \\lambda = \\pm 2i$. Rein imaginär → ungedämpfte Schwingung.'],
  },
  'ex-dgl-1-4-mastery': {
    id: 'ex-dgl-1-4-mastery', lessonId: 'dgl-1-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $y\'\' - 5y\' + 6y = 0$. Die allgemeine Lösung ist:',
    options: [
      '$y = C_1 e^{2x} + C_2 e^{3x}$',
      '$y = C_1 e^{-2x} + C_2 e^{-3x}$',
      '$y = (C_1 + C_2 x)e^{5x}$',
      '$y = e^{2.5x}(C_1 \\cos(x) + C_2 \\sin(x))$',
    ],
    correctIndex: 0,
    explanation: 'Charakteristische Gleichung: $\\lambda^2 - 5\\lambda + 6 = 0 \\Rightarrow (\\lambda - 2)(\\lambda - 3) = 0 \\Rightarrow \\lambda_1 = 2, \\lambda_2 = 3$. Zwei verschiedene reelle Wurzeln → $y = C_1 e^{2x} + C_2 e^{3x}$.',
    hints: ['$\\lambda^2 - 5\\lambda + 6 = 0$ mit pq-Formel oder Vieta lösen.'],
  },
}

const lessons_dgl_u1 = [
  {
    id: 'dgl-1-1', unitId: 'dgl-unit-1',
    title: 'Was ist eine Differentialgleichung?',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['DGL als Gleichung mit Funktion und Ableitungen verstehen', 'Ordnung und Linearität bestimmen', 'Anfangswertproblem verstehen'],
    prerequisites: [],
    nextLessonId: 'dgl-1-2',
    steps: [
      {
        id: 'dgl-1-1-s1', type: 'explanation-intuitive', title: 'Die Idee hinter Differentialgleichungen',
        content: `Stell dir vor, du beobachtest ein Phänomen in der Natur:

- Ein Pendel schwingt hin und her
- Eine Tasse Kaffee kühlt ab
- Eine Population von Bakterien wächst

In all diesen Fällen kennst du nicht direkt die **Funktion** (z.B. Temperatur als Funktion der Zeit), aber du kennst eine **Regel, wie sich die Funktion ändert**.

**Beispiel Kaffee:** Die Abkühlgeschwindigkeit (= Ableitung der Temperatur) ist proportional zur Temperaturdifferenz zur Umgebung:

$$T'(t) = -k \\cdot (T(t) - T_{\\text{Umgebung}})$$

Das ist eine **Differentialgleichung** (DGL)! Sie enthält:
- Die unbekannte Funktion $T(t)$
- Ihre Ableitung $T'(t)$

**Ziel:** Finde die Funktion $T(t)$, die diese Gleichung erfüllt.

Aus der Physik kennst du das schon: Die Geschwindigkeit $v(t) = s'(t)$ ist die Ableitung des Weges. Wenn du weißt, wie sich die Geschwindigkeit verhält, kannst du den Weg berechnen — das ist im Grunde eine DGL lösen!`,
      },
      {
        id: 'dgl-1-1-s2', type: 'explanation-formal', title: 'Grundbegriffe',
        content: `**Definition:** Eine Differentialgleichung (DGL) ist eine Gleichung, die eine gesuchte Funktion $y(x)$ und mindestens eine ihrer Ableitungen $y', y'', \\ldots$ enthält.

**Ordnung** einer DGL = höchste vorkommende Ableitung:
- $y' = 2y$ → Ordnung **1** (nur $y'$)
- $y'' + 3y' - y = 0$ → Ordnung **2** ($y''$ ist die höchste)
- $y''' = x$ → Ordnung **3**

**Linear vs. nichtlinear:**
Eine DGL ist **linear**, wenn $y$ und seine Ableitungen nur in der **1. Potenz** vorkommen:
- $y' + 2y = x$ → **linear** ✓
- $y' = y^2$ → **nichtlinear** ✗ (wegen $y^2$)
- $y'' \\cdot y = 1$ → **nichtlinear** ✗ (Produkt $y'' \\cdot y$)

**Anfangswertproblem (AWP):**
DGL + Anfangsbedingung(en), z.B.:
$$y' = 2y, \\quad y(0) = 3$$
Die DGL allein hat unendlich viele Lösungen ($y = Ce^{2x}$ für jedes $C$). Die Anfangsbedingung wählt genau eine aus ($C = 3$).`,
      },
      { id: 'dgl-1-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-1-1-a' },
      { id: 'dgl-1-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-1-1-b' },
      { id: 'dgl-1-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-1-1-c' },
      { id: 'dgl-1-1-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-dgl-1-1-mastery' },
    ],
  },
  {
    id: 'dgl-1-2', unitId: 'dgl-unit-1',
    title: 'Trennung der Variablen',
    order: 2, estimatedMinutes: 18,
    learningGoals: ['Methode der Variablentrennung anwenden', 'Einfache DGL 1. Ordnung lösen', 'Anfangswerte einsetzen'],
    prerequisites: [],
    nextLessonId: 'dgl-1-3',
    steps: [
      {
        id: 'dgl-1-2-s1', type: 'explanation-intuitive', title: 'Die Idee: Sortieren und Integrieren',
        content: `Die **Trennung der Variablen** ist die einfachste Methode, um DGL zu lösen. Sie funktioniert, wenn die rechte Seite ein **Produkt** aus einer reinen x-Funktion und einer reinen y-Funktion ist:

$$\\frac{dy}{dx} = g(x) \\cdot h(y)$$

**Die Idee:** Sortiere alles mit $y$ nach links, alles mit $x$ nach rechts, und integriere dann beide Seiten.

**Rezept (Schritt für Schritt):**

1. **Trennen:** $\\frac{dy}{h(y)} = g(x)\\,dx$
2. **Integrieren:** $\\int \\frac{1}{h(y)}\\,dy = \\int g(x)\\,dx$
3. **Auflösen** nach $y$ (wenn möglich)
4. **Anfangsbedingung** einsetzen (falls AWP)

**Beispiel:** $y' = xy$
1. Trennen: $\\frac{dy}{y} = x\\,dx$
2. Integrieren: $\\ln|y| = \\frac{x^2}{2} + C_1$
3. Auflösen: $y = Ce^{x^2/2}$ (mit $C = \\pm e^{C_1}$)`,
      },
      {
        id: 'dgl-1-2-s2', type: 'explanation-formal', title: 'Weiteres Beispiel',
        content: `**Beispiel mit AWP:** $y' = 2ty$, $y(0) = 5$

**Schritt 1 — Trennen:**
$$\\frac{dy}{y} = 2t\\,dt$$

**Schritt 2 — Integrieren:**
$$\\int \\frac{dy}{y} = \\int 2t\\,dt$$
$$\\ln|y| = t^2 + C_1$$

**Schritt 3 — Auflösen:**
$$y = Ce^{t^2}$$

**Schritt 4 — Anfangsbedingung:**
$$y(0) = Ce^0 = C = 5$$

**Ergebnis:** $y(t) = 5e^{t^2}$`,
      },
      { id: 'dgl-1-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-1-2-a' },
      { id: 'dgl-1-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-1-2-b' },
      { id: 'dgl-1-2-s5', type: 'exercise', title: 'Aufgabe 3 — Zahleneingabe', exerciseRef: 'ex-dgl-1-2-c' },
      { id: 'dgl-1-2-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-dgl-1-2-mastery' },
    ],
  },
  {
    id: 'dgl-1-3', unitId: 'dgl-unit-1',
    title: 'Lineare DGL 1. Ordnung',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Lineare DGL 1. Ordnung in Standardform bringen', 'Integrierenden Faktor berechnen', 'Homogene + partikuläre Lösung bestimmen'],
    prerequisites: [],
    nextLessonId: 'dgl-1-4',
    steps: [
      {
        id: 'dgl-1-3-s1', type: 'explanation-intuitive', title: 'Warum ein "integrierender Faktor"?',
        content: `Nicht jede DGL lässt sich durch Trennung der Variablen lösen. Die DGL

$$y' + p(x) \\cdot y = q(x)$$

hat auf der linken Seite eine Mischung aus $y'$ und $y$ — die Variablen lassen sich nicht trennen (es sei denn, $q(x) = 0$).

**Der Trick:** Wir multiplizieren die gesamte Gleichung mit einem geschickt gewählten Faktor $\\mu(x)$, sodass die linke Seite zu einer **Produktregel rückwärts** wird:

$$\\mu \\cdot y' + \\mu \\cdot p \\cdot y = (\\mu \\cdot y)' = \\mu \\cdot q$$

Dann ist es einfach: Integriere beide Seiten!

$$\\mu(x) \\cdot y = \\int \\mu(x) \\cdot q(x)\\,dx + C$$

Der passende Faktor ist: $\\mu(x) = e^{\\int p(x)\\,dx}$.`,
      },
      {
        id: 'dgl-1-3-s2', type: 'explanation-formal', title: 'Methode des integrierenden Faktors',
        content: `**Gegeben:** $y' + p(x) \\cdot y = q(x)$

**Schritt 1 — Integrierenden Faktor berechnen:**
$$\\mu(x) = e^{\\int p(x)\\,dx}$$

**Schritt 2 — Beide Seiten mit $\\mu$ multiplizieren:**
$$(\\mu \\cdot y)' = \\mu \\cdot q(x)$$

**Schritt 3 — Integrieren:**
$$\\mu \\cdot y = \\int \\mu \\cdot q(x)\\,dx + C$$

**Schritt 4 — Nach y auflösen:**
$$y = \\frac{1}{\\mu} \\left( \\int \\mu \\cdot q\\,dx + C \\right)$$

**Beispiel:** $y' + 2y = e^x$
- $p(x) = 2$, $q(x) = e^x$
- $\\mu = e^{2x}$
- $(e^{2x} y)' = e^{2x} \\cdot e^x = e^{3x}$
- $e^{2x} y = \\frac{1}{3}e^{3x} + C$
- $y = \\frac{1}{3}e^{x} + Ce^{-2x}$

Dabei ist $Ce^{-2x}$ die **homogene Lösung** und $\\frac{1}{3}e^x$ die **partikuläre Lösung**.`,
      },
      { id: 'dgl-1-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-1-3-a' },
      { id: 'dgl-1-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-1-3-b' },
      { id: 'dgl-1-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-1-3-c' },
      { id: 'dgl-1-3-s6', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-dgl-1-3-d' },
      { id: 'dgl-1-3-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-dgl-1-3-mastery' },
    ],
  },
  {
    id: 'dgl-1-4', unitId: 'dgl-unit-1',
    title: 'DGL 2. Ordnung mit konstanten Koeffizienten',
    order: 4, estimatedMinutes: 22,
    learningGoals: ['Charakteristische Gleichung aufstellen und lösen', 'Drei Fälle unterscheiden: reelle, doppelte, komplexe Wurzeln', 'Schwingungsverhalten aus der Lösung ablesen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'dgl-1-4-s1', type: 'explanation-intuitive', title: 'Warum Schwingungen?',
        content: `DGL 2. Ordnung beschreiben viele physikalische Phänomene:
- **Pendel:** $\\ddot{\\theta} + \\frac{g}{l}\\theta = 0$
- **Feder-Masse-System:** $m\\ddot{x} + kx = 0$
- **Elektrischer Schwingkreis:** $L\\ddot{q} + R\\dot{q} + \\frac{1}{C}q = 0$

All diese haben die Form:
$$ay'' + by' + cy = 0$$

Die Lösung hängt davon ab, welche Art von Wurzeln die **charakteristische Gleichung** $a\\lambda^2 + b\\lambda + c = 0$ hat:

1. **Zwei verschiedene reelle Wurzeln** $\\lambda_1 \\neq \\lambda_2$: Exponentielles Verhalten
2. **Doppelte reelle Wurzel** $\\lambda_1 = \\lambda_2$: Grenzfall
3. **Komplexe Wurzeln** $\\alpha \\pm i\\beta$: **Schwingung!** (Das ist der spannendste Fall)

Komplexe Wurzeln erzeugen Sinus- und Kosinusfunktionen — das sind die **Schwingungen**, die wir überall in der Technik sehen!`,
      },
      {
        id: 'dgl-1-4-s2', type: 'explanation-formal', title: 'Die drei Fälle',
        content: `**DGL:** $ay'' + by' + cy = 0$
**Ansatz:** $y = e^{\\lambda x}$
**Charakteristische Gleichung:** $a\\lambda^2 + b\\lambda + c = 0$

**Fall 1: Diskriminante $D > 0$ — zwei reelle Wurzeln $\\lambda_1, \\lambda_2$**
$$y = C_1 e^{\\lambda_1 x} + C_2 e^{\\lambda_2 x}$$

**Fall 2: Diskriminante $D = 0$ — doppelte Wurzel $\\lambda_1 = \\lambda_2 = \\lambda$**
$$y = (C_1 + C_2 x) e^{\\lambda x}$$

**Fall 3: Diskriminante $D < 0$ — komplexe Wurzeln $\\lambda = \\alpha \\pm i\\beta$**
$$y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$$

Dabei ist:
- $\\alpha = -\\frac{b}{2a}$ (Dämpfung)
- $\\beta = \\frac{\\sqrt{|D|}}{2a}$ (Kreisfrequenz)

Wenn $\\alpha < 0$: gedämpfte Schwingung (klingt ab)
Wenn $\\alpha = 0$: ungedämpfte Schwingung (schwingt ewig)
Wenn $\\alpha > 0$: aufklingende Schwingung (Amplitude wächst — instabil!)`,
      },
      {
        id: 'dgl-1-4-s3', type: 'visualization', title: 'Schwingungslösungen',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.cos(2 * x), color: '#3b82f6', label: 'ungedämpft: cos(2x)' },
            { fn: (x) => Math.exp(-0.3 * x) * Math.cos(2 * x), color: '#ef4444', label: 'gedämpft: e^(-0.3x)·cos(2x)' },
          ],
          xRange: [0, 15],
          yRange: [-1.5, 1.5],
          showGrid: true,
        },
      },
      { id: 'dgl-1-4-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-1-4-a' },
      { id: 'dgl-1-4-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-1-4-b' },
      { id: 'dgl-1-4-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-1-4-c' },
      { id: 'dgl-1-4-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-dgl-1-4-mastery' },
    ],
  },
]

export const dgl_unit1 = {
  id: 'dgl-unit-1',
  title: 'Grundbegriffe & einfache DGL',
  order: 1,
  description: 'Was ist eine DGL, Trennung der Variablen, lineare DGL 1. und 2. Ordnung',
  lessons: lessons_dgl_u1,
  exercises: exercises_dgl_u1,
}
