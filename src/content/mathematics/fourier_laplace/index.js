import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

// ── Unit 1: Fourier-Reihen ───────────────────────────────────────────────
const unit1Lessons = [
  makeLesson({
    id: 'fl-1-1',
    title: 'Fourier-Reihen — Grundbegriffe',
    estimatedMinutes: 15,
    learningGoals: [
      'Periodische Funktionen als Überlagerung von Sinus/Kosinus erkennen',
      'Fourier-Koeffizienten berechnen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Klang als Summe von Obertönen',
    intuitionContent:
      'Jede periodische Funktion kann als (unendliche) Summe von Sinus- und Kosinusfunktionen dargestellt werden — ' +
      'wie ein Musikstück aus Obertönen zusammengesetzt wird.\n\n' +
      'Das Ziel ist es, die "Rezeptur" zu finden: wie viel von jeder Frequenz steckt im Signal? ' +
      'Die Fourier-Koeffizienten $a_n$ und $b_n$ geben genau diese Anteile an.',
    formulaTitle: 'Fourier-Koeffizienten und Reihe',
    formulaContent:
      'Für eine $T$-periodische Funktion $f(t)$:\n\n' +
      '$$a_0 = \\frac{1}{T}\\int_0^T f(t)\\,dt$$\n\n' +
      '$$a_n = \\frac{2}{T}\\int_0^T f(t)\\cos\\!\\left(\\frac{2\\pi n}{T}t\\right)dt, \\quad n \\ge 1$$\n\n' +
      '$$b_n = \\frac{2}{T}\\int_0^T f(t)\\sin\\!\\left(\\frac{2\\pi n}{T}t\\right)dt$$\n\n' +
      '$$f(t) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left(a_n\\cos\\frac{2\\pi nt}{T} + b_n\\sin\\frac{2\\pi nt}{T}\\right)$$\n\n' +
      '**Symmetrie-Tricks:** Gerade Funktion ($f(-t) = f(t)$) $\\Rightarrow$ nur $a_n$ ($b_n = 0$). ' +
      'Ungerade Funktion ($f(-t) = -f(t)$) $\\Rightarrow$ nur $b_n$ ($a_0 = a_n = 0$).',
    masteryQuestion: 'Eine gerade periodische Funktion $f(t)$ hat in ihrer Fourier-Reihe nur ...',
    masteryOptions: [
      'nur $\\cos$-Terme ($b_n = 0$)',
      'nur $\\sin$-Terme ($a_n = 0$)',
      'nur $a_0$',
      'weder $\\cos$ noch $\\sin$',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Bei geraden Funktionen gilt $b_n = 0$ — alle Sinus-Koeffizienten verschwinden, weil $\\sin$ eine ungerade Funktion ist ' +
      'und das Produkt $f(t)\\cdot\\sin$ über eine volle Periode null ergibt.',
    masteryHints: [
      'Gerade Funktion: $f(-t) = f(t)$.',
      'Sinus ist ungerade: $\\sin(-t) = -\\sin(t)$.',
      'Produkt gerade $\\times$ ungerade = ungerade $\\Rightarrow$ Integral über Periode = 0.',
    ],
    nextLessonId: 'fl-1-2',
  }),

  makeLesson({
    id: 'fl-1-2',
    title: 'Fourier-Reihe Rechteckimpuls',
    estimatedMinutes: 14,
    learningGoals: [
      'Fourier-Koeffizienten eines Rechtecksignals berechnen',
      'Gibbs-Phänomen kennen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Warum braucht ein Rechteck hohe Frequenzen?',
    intuitionContent:
      'Der Rechteckimpuls ist das klassische Beispiel in der Elektrotechnik und Signalverarbeitung. ' +
      'Seine Fourier-Reihe enthält unendlich viele Oberschwingungen — praktisch erklärt, warum schnelle Flanken hohe Frequenzanteile brauchen.\n\n' +
      'Interessant: Egal wie viele Terme man summiert, an Sprungstellen überschwingt die Summe immer um ca. 9 %. ' +
      'Dieses unvermeidliche Überschwingen heißt Gibbs-Phänomen.',
    formulaTitle: 'Fourier-Reihe des Rechteckimpulses',
    formulaContent:
      'Rechteckimpuls mit Periode $T$, Amplitude $A$, Tastverhältnis $D = \\tau/T$:\n\n' +
      '$$a_0 = 2AD, \\quad b_n = 0 \\text{ (gerade Funktion bei symmetrischem Ausschnitt)}$$\n\n' +
      '$$a_n = \\frac{2A}{n\\pi}\\sin(n\\pi D)$$\n\n' +
      'Klassischer Fall ($D = 1/2$, $A = 1$):\n\n' +
      '$$f(t) = \\frac{1}{2} + \\frac{2}{\\pi}\\left(\\sin\\omega_0 t + \\frac{\\sin 3\\omega_0 t}{3} + \\frac{\\sin 5\\omega_0 t}{5} + \\cdots\\right)$$\n\n' +
      '**Gibbs-Phänomen:** An Sprungstellen überschwingt die endliche Summe immer um ca. 9 %, ' +
      'egal wie viele Terme man nimmt.',
    masteryQuestion: 'Warum sind beim Rechteckimpuls nur ungerade Vielfache der Grundfrequenz im Spektrum ($D = 0{,}5$)?',
    masteryOptions: [
      'Wegen der Halbwellensymmetrie $f(t+T/2) = -f(t)$',
      'Weil Rechtecke keine geraden Harmonischen haben',
      'Durch das Gibbs-Phänomen',
      'Wegen des Tastverhältnisses 0,5',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Halbwellensymmetrie $f(t+T/2) = -f(t)$ bewirkt, dass alle geraden Koeffizienten $a_{2k} = b_{2k} = 0$ verschwinden.',
    masteryHints: [
      'Halbwellensymmetrie: $f(t+T/2) = -f(t)$.',
      'Diese Symmetrie löscht alle geradzahligen Fourier-Koeffizienten.',
      'Nur $n = 1, 3, 5, \\ldots$ überleben im Spektrum.',
    ],
    nextLessonId: 'fl-1-3',
  }),

  makeLesson({
    id: 'fl-1-3',
    title: 'Fourier-Transformation',
    estimatedMinutes: 16,
    learningGoals: [
      'Von Fourier-Reihen zur Fourier-Transformation übergehen',
      'Spektrum nicht-periodischer Signale verstehen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Vom diskreten zum kontinuierlichen Spektrum',
    intuitionContent:
      'Die Fourier-Transformation verallgemeinert Fourier-Reihen auf nicht-periodische Signale — ' +
      'aus diskreten Frequenzlinien wird ein kontinuierliches Spektrum $F(\\omega)$.\n\n' +
      'Anschaulich: Lässt man die Periode $T \\to \\infty$, rücken die Frequenzlinien immer enger zusammen ' +
      'und gehen in ein Kontinuum über. Die Summe wird zum Integral.',
    formulaTitle: 'Fourier-Transformation und wichtige Paare',
    formulaContent:
      '**Fourier-Transformation:**\n' +
      '$$F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)\\,e^{-j\\omega t}\\,dt$$\n\n' +
      '**Rücktransformation:**\n' +
      '$$f(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} F(\\omega)\\,e^{j\\omega t}\\,d\\omega$$\n\n' +
      '**Wichtige Paare:**\n\n' +
      '| $f(t)$ | $F(\\omega)$ |\n' +
      '|---|---|\n' +
      '| $\\delta(t)$ | $1$ |\n' +
      '| $1$ | $2\\pi\\cdot\\delta(\\omega)$ |\n' +
      '| $e^{-at}\\cdot u(t)$ | $1/(a+j\\omega)$ |\n' +
      '| $\\operatorname{rect}(t/\\tau)$ | $\\tau\\cdot\\operatorname{sinc}(\\omega\\tau/2)$ |\n\n' +
      '**Eigenschaften:** Linearität, Verschiebungssatz ($e^{j\\omega_0 t}$ im Zeitbereich $\\Rightarrow$ Verschiebung im Spektrum), Parseval.',
    masteryQuestion: '[PRÜFUNG] Die Fourier-Transformierte von $e^{-at}u(t)$ ($a > 0$) lautet:',
    masteryOptions: [
      '$\\dfrac{1}{a + j\\omega}$',
      '$\\dfrac{1}{a - j\\omega}$',
      '$\\dfrac{a}{a^2 + \\omega^2}$',
      '$e^{-a\\omega}$',
    ],
    correctIndex: 0,
    masteryExplanation:
      '$\\mathcal{F}\\{e^{-at}u(t)\\} = \\int_0^\\infty e^{-at}e^{-j\\omega t}\\,dt = \\int_0^\\infty e^{-(a+j\\omega)t}\\,dt = \\frac{1}{a+j\\omega}$ ' +
      '(konvergiert für $a > 0$).',
    masteryHints: [
      'Integral aufstellen: $\\int_0^\\infty e^{-(a+j\\omega)t}\\,dt$.',
      'Exponentialintegral: $\\left[-\\frac{1}{a+j\\omega}e^{-(a+j\\omega)t}\\right]_0^\\infty$.',
      'Bei $t \\to \\infty$ verschwindet der Term wegen $a > 0$, unten bleibt $\\frac{1}{a+j\\omega}$.',
    ],
    nextLessonId: 'fl-2-1',
  }),
]

const unit1 = makeUnit({
  id: 'fl-unit-1',
  title: 'Fourier-Reihen',
  order: 1,
  lessons: unit1Lessons,
})

// ── Unit 2: Laplace-Transformation ──────────────────────────────────────
const unit2Lessons = [
  makeLesson({
    id: 'fl-2-1',
    title: 'Laplace-Grundlagen',
    estimatedMinutes: 15,
    learningGoals: [
      'Laplace-Transformation definieren',
      'Einfache Transformationen aus der Tabelle ablesen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'DGLs werden zu algebraischen Gleichungen',
    intuitionContent:
      'Die Laplace-Transformation wandelt DGLs in algebraische Gleichungen um — statt zu differenzieren und integrieren, ' +
      'multipliziert und dividiert man nur noch in der $s$-Domäne.\n\n' +
      'Das $s = \\sigma + j\\omega$ verallgemeinert die Fourier-Transformation: ' +
      'die Fourier-Transformation ist der Spezialfall $\\sigma = 0$ (rein imaginäre Achse).',
    formulaTitle: 'Definition und wichtige Paare',
    formulaContent:
      '**Definition:**\n' +
      '$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t)\\,e^{-st}\\,dt, \\quad s = \\sigma + j\\omega$$\n\n' +
      '**Wichtige Paare:**\n\n' +
      '| $f(t)$ | $F(s)$ |\n' +
      '|---|---|\n' +
      '| $\\delta(t)$ | $1$ |\n' +
      '| $u(t)$ (Einheitssprung) | $1/s$ |\n' +
      '| $t$ | $1/s^2$ |\n' +
      '| $e^{-at}$ | $1/(s+a)$ |\n' +
      '| $\\sin(\\omega t)$ | $\\omega/(s^2+\\omega^2)$ |\n' +
      '| $\\cos(\\omega t)$ | $s/(s^2+\\omega^2)$ |\n\n' +
      '**Ableitungssatz:** $\\mathcal{L}\\{f\'(t)\\} = s\\,F(s) - f(0^-)$\n\n' +
      '**Verschiebungssatz:** $\\mathcal{L}\\{e^{-at}f(t)\\} = F(s+a)$',
    masteryQuestion: 'Wie lautet $\\mathcal{L}\\{\\sin(\\omega_0 t)\\}$?',
    masteryOptions: [
      '$\\dfrac{\\omega_0}{s^2+\\omega_0^2}$',
      '$\\dfrac{s}{s^2+\\omega_0^2}$',
      '$\\dfrac{1}{s+\\omega_0}$',
      '$\\dfrac{\\omega_0}{s+\\omega_0}$',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Aus der Tabelle: $\\mathcal{L}\\{\\sin(\\omega_0 t)\\} = \\omega_0/(s^2+\\omega_0^2)$. ' +
      'Die Cosinus-Transformierte hat dagegen $s$ im Zähler.',
    masteryHints: [
      'Tabelle: $\\mathcal{L}\\{\\sin(\\omega_0 t)\\} = \\omega_0/(s^2+\\omega_0^2)$.',
      'Vergleiche mit $\\mathcal{L}\\{\\cos\\}$: dort steht $s$ im Zähler.',
      'Merke: $\\sin \\to \\omega_0$, $\\cos \\to s$ im Zähler.',
    ],
    nextLessonId: 'fl-2-2',
  }),

  makeLesson({
    id: 'fl-2-2',
    title: 'Laplace zur DGL-Lösung',
    estimatedMinutes: 16,
    learningGoals: [
      'DGL mit Laplace lösen (Transformieren, algebraisch umformen, rücktransformieren)',
      'Übertragungsfunktion $G(s)$ verstehen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Vier Schritte zur DGL-Lösung',
    intuitionContent:
      'Methode: 1. Gleichung transformieren, 2. nach $Y(s)$ auflösen, 3. Partialbruchzerlegung, 4. rücktransformieren.\n\n' +
      'Die Übertragungsfunktion $G(s) = Y(s)/U(s)$ beschreibt das System ohne konkrete Anfangsbedingungen — ' +
      'sie ist eine reine Systemeigenschaft und die Grundlage der Regelungstechnik.',
    formulaTitle: 'DGL-Lösung Schritt für Schritt',
    formulaContent:
      '**Ableitungssatz anwenden:**\n' +
      '$$y\'\' + 3y\' + 2y = u(t), \\quad y(0)=0,\\; y\'(0)=0$$\n\n' +
      'Transformiert (Anfangsbedingungen = 0):\n' +
      '$$(s^2 + 3s + 2)\\,Y(s) = U(s)$$\n\n' +
      '**Übertragungsfunktion:**\n' +
      '$$G(s) = \\frac{Y(s)}{U(s)} = \\frac{1}{s^2+3s+2} = \\frac{1}{(s+1)(s+2)}$$\n\n' +
      '**Partialbruchzerlegung:**\n' +
      '$$G(s) = \\frac{1}{s+1} - \\frac{1}{s+2}$$\n\n' +
      '**Rücktransformation:**\n' +
      '$$g(t) = e^{-t} - e^{-2t} \\quad (t \\ge 0)$$\n\n' +
      'Dies ist die **Impulsantwort** (Antwort auf $\\delta(t)$).',
    masteryQuestion: '[PRÜFUNG] Übertragungsfunktion $G(s) = \\dfrac{1}{s+3}$. Was ist die Sprungantwort $y(t)$ für $t \\ge 0$?',
    masteryOptions: [
      '$\\dfrac{1}{3}(1-e^{-3t})$',
      '$e^{-3t}$',
      '$\\dfrac{1}{3}e^{-3t}$',
      '$1-e^{-3t}$',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Einheitssprung: $U(s) = 1/s$. Damit $Y(s) = G(s)\\cdot U(s) = \\frac{1}{s(s+3)} = \\frac{1/3}{s} - \\frac{1/3}{s+3}$. ' +
      'Rücktransformation: $y(t) = \\frac{1}{3}(1-e^{-3t})$.',
    masteryHints: [
      'Sprungantwort: $Y(s) = G(s)/s$.',
      'Partialbruchzerlegung: $\\frac{1}{s(s+3)} = \\frac{A}{s} + \\frac{B}{s+3}$.',
      '$A = 1/3$, $B = -1/3$ $\\Rightarrow$ rücktransformieren.',
    ],
    nextLessonId: 'fl-3-1',
  }),
]

const unit2 = makeUnit({
  id: 'fl-unit-2',
  title: 'Laplace-Transformation',
  order: 2,
  lessons: unit2Lessons,
})

// ── Unit 3: Prüfungsaufgaben ─────────────────────────────────────────────
const unit3Lessons = [
  makeLesson({
    id: 'fl-3-1',
    title: 'Fourier Prüfungsaufgaben',
    estimatedMinutes: 22,
    isExam: true,
    learningGoals: [
      'Fourier-Reihen und Spektrum in Prüfungsaufgaben anwenden',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Prüfungsstrategie Fourier',
    intuitionContent:
      'Typisches Vorgehen:\n\n' +
      '1. Periodizität und Symmetrie prüfen (gerade $\\Rightarrow$ nur $\\cos$, ungerade $\\Rightarrow$ nur $\\sin$)\n' +
      '2. $a_0$ durch Mittelwert berechnen\n' +
      '3. $a_n$ oder $b_n$ durch Integral oder Tabelle bestimmen\n' +
      '4. Spektrum bei Fourier-Transformation: Zeitverschiebung $\\Rightarrow$ Phasendrehung, Skalierung $\\Rightarrow$ Stauchung/Streckung',
    formulaTitle: '[PRÜFUNG] Fourier-Schnellübersicht',
    formulaContent:
      '$a_0/2$ = Gleichanteil (Mittelwert)\n\n' +
      'Gerade $f(t)$ $\\Rightarrow$ $b_n = 0$. Ungerade $\\Rightarrow$ $a_n = 0$.\n\n' +
      '$$\\mathcal{F}\\{f(t)\\} = F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)\\,e^{-j\\omega t}\\,dt$$\n\n' +
      '**Zeitverschiebung:** $f(t-t_0) \\leftrightarrow e^{-j\\omega t_0}\\cdot F(\\omega)$',
    masteryQuestion: '[PRÜFUNG] Gegeben sei $f(t) = 3\\cos(2t) + \\sin(4t)$. Was ist der Gleichanteil $a_0/2$?',
    masteryOptions: ['$0$', '$3$', '$1$', '$4$'],
    correctIndex: 0,
    masteryExplanation:
      'Der Gleichanteil ist das Zeitmittel von $f(t)$ über eine Periode. ' +
      '$\\cos$ und $\\sin$ haben beide Mittelwert 0. Also: $a_0/2 = 0$.',
    masteryHints: [
      'Gleichanteil = Zeitmittel über eine Periode.',
      '$\\cos$ und $\\sin$ haben je Mittelwert 0.',
      'Summe von Sinus/Kosinus ohne Konstante $\\Rightarrow$ Mittelwert = 0.',
    ],
    nextLessonId: 'fl-3-2',
  }),

  makeLesson({
    id: 'fl-3-2',
    title: 'Laplace Prüfungsaufgaben',
    estimatedMinutes: 22,
    isExam: true,
    learningGoals: [
      'Übertragungsfunktionen berechnen',
      'DGL per Laplace lösen',
      'Pol-Nullstellen-Stabilität beurteilen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Prüfungsstrategie Laplace',
    intuitionContent:
      'Stabilität: Alle Pole (Nullstellen des Nenners) müssen negativen Realteil haben ' +
      '$\\Rightarrow$ linke Halbebene der $s$-Ebene.\n\n' +
      'Sprungantwort: $Y(s) = G(s)/s$ $\\Rightarrow$ Partialbruchzerlegung $\\Rightarrow$ Rücktransformation\n\n' +
      'Impulsantwort: $Y(s) = G(s)\\cdot 1 = G(s)$ $\\Rightarrow$ direkt rücktransformieren',
    formulaTitle: '[PRÜFUNG] Laplace-Schnellübersicht',
    formulaContent:
      '$$G(s) = \\frac{Y(s)}{U(s)} = \\frac{\\text{Zähler}}{\\text{Nenner}}$$\n\n' +
      'Pol bei $s = -a$ $\\Rightarrow$ $e^{-at}$ in der Zeitdomäne\n\n' +
      '**Stabilität:** $\\operatorname{Re}(\\text{Pole}) < 0 \\Leftrightarrow$ stabiles System\n\n' +
      '**Ableitungssatz:** $\\mathcal{L}\\{y\'\\} = s\\,Y(s) - y(0)$',
    masteryQuestion: '[PRÜFUNG] $G(s) = \\dfrac{2}{s^2+2s+1} = \\dfrac{2}{(s+1)^2}$. Ist das System stabil?',
    masteryOptions: [
      'Ja, Pol bei $s = -1$ (doppelt, linke Halbebene)',
      'Nein, Pol bei $s = +1$',
      'Grenzstabil, da Pol auf imaginärer Achse',
      'Unbestimmbar ohne Eingangssignal',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Der doppelte Pol liegt bei $s = -1$, also in der linken Halbebene ($\\operatorname{Re}(s) < 0$). ' +
      'Das System ist stabil. Zeitantwort: $g(t) = 2t\\,e^{-t}$ (klingt ab).',
    masteryHints: [
      'Stabilität: alle Pole müssen $\\operatorname{Re}(s) < 0$ haben.',
      'Pol bei $s = -1$: $\\operatorname{Re}(-1) = -1 < 0$ $\\checkmark$.',
      'Linke Halbebene = stabil, rechte Halbebene = instabil.',
    ],
    nextLessonId: null,
  }),
]

const unit3 = makeUnit({
  id: 'fl-unit-3',
  title: 'Prüfungsaufgaben',
  order: 3,
  lessons: unit3Lessons,
})

export const fourierLaplaceTopic = {
  id: 'fourier-laplace',
  title: 'Fourier & Laplace',
  description: 'Fourier-Reihen, Fourier-Transformation und Laplace-Transformation für Ingenieure',
  subject: 'mathematics',
  icon: 'FL',
  color: 'violet',
  estimatedHours: 5,
  difficulty: 5,
  level: 'vertiefung',
  units: [unit1, unit2, unit3],
  prerequisites: ['differentialgleichungen', 'komplexe-zahlen'],
}
