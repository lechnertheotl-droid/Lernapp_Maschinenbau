function mc(question, options, correctIndex, explanation, hints = [], visualization = undefined, wrongAnswerExplanations = undefined) {
  return {
    type: 'multiple-choice',
    question,
    options,
    correctIndex,
    explanation,
    hints,
    ...(visualization ? { visualization } : {}),
    ...(wrongAnswerExplanations ? { wrongAnswerExplanations } : {}),
  }
}

function ni(question, correctValue, tolerance, unit, explanation, hints = [], visualization = undefined) {
  return { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints, ...(visualization ? { visualization } : {}) }
}

function tf(statement, correct, explanation, hints = []) {
  return { type: 'true-false', statement, correct, explanation, hints }
}

function matching(question, pairs, explanation, hints = []) {
  return { type: 'matching', question, pairs, explanation, hints }
}

function sorting(question, items, correctOrder, explanation, hints = []) {
  return { type: 'sorting', question, items, correctOrder, explanation, hints }
}

function withExamPrefix(exercise, exam) {
  if (!exam) return exercise
  if (exercise.question && !exercise.question.includes('[PRÜFUNG]')) {
    return { ...exercise, question: `[PRÜFUNG] ${exercise.question}` }
  }
  if (exercise.statement && !exercise.statement.includes('[PRÜFUNG]')) {
    return { ...exercise, statement: `[PRÜFUNG] ${exercise.statement}` }
  }
  return exercise
}

function bank(profile) {
  const exercises = [
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints, profile.conceptVisualization, profile.conceptWrongAnswers),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints, profile.calcVisualization),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints),
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints, undefined, profile.errorWrongAnswers),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
  return exercises.map((exercise) => withExamPrefix(exercise, profile.exam))
}

const profiles = {
  'fl-1-1': {
    explanation: String.raw`**Vertiefung Fourier-Reihen:** Jede periodische Funktion $f(t)$ mit Periode $T$ lässt sich als Summe harmonischer Schwingungen darstellen:

$$f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[a_n \cos(n\omega_0 t) + b_n \sin(n\omega_0 t)\right]$$

mit $\omega_0 = 2\pi/T$ und den Koeffizienten:

$$a_n = \frac{2}{T}\int_0^T f(t)\cos(n\omega_0 t)\,dt, \quad b_n = \frac{2}{T}\int_0^T f(t)\sin(n\omega_0 t)\,dt$$

$a_0/2$ ist der Mittelwert (DC-Anteil).

**Symmetrien:**
- Gerade Funktion ($f(-t) = f(t)$): nur $a_n$
- Ungerade Funktion ($f(-t) = -f(t)$): nur $b_n$

**Typischer Fehler:** Faktor $2/T$ vergessen oder über falsche Periode integriert.`,

    conceptQuestion: 'Was repräsentiert der Koeffizient $a_0/2$ einer Fourier-Reihe?',
    conceptOptions: [
      'Den zeitlichen Mittelwert (Gleichanteil) der Funktion',
      'Die Amplitude der Grundschwingung',
      'Die Phase der 1. Harmonischen',
      'Die Nyquist-Frequenz',
    ],
    conceptCorrect: 0,
    conceptExplanation: '$a_0/2 = (1/T)\\int_0^T f(t)\\,dt$ ist der lineare Mittelwert der Funktion über eine Periode — der DC-Anteil. Eine rein wechselförmige Funktion hat $a_0 = 0$.',
    conceptHints: [
      'Konstantglied der Reihe.',
      'Gleichanteil einer Funktion.',
    ],
    conceptWrongAnswers: {
      1: 'Die Amplitude der Grundschwingung steckt in $a_1$ und $b_1$ (bzw. $\\sqrt{a_1^2+b_1^2}$), nicht in $a_0/2$. $a_0/2$ ist der konstante Anteil ohne Schwingungsfrequenz.',
      2: 'Die Phase der 1. Harmonischen folgt aus $\\arctan(b_1/a_1)$. $a_0/2$ hat mit Phase gar nichts zu tun — es ist ein reiner DC-Wert.',
      3: 'Die Nyquist-Frequenz betrifft zeitdiskrete Abtastung ($f_{\\text{Nyq}} = f_s/2$), nicht Fourier-Reihen. Sie hat mit $a_0$ nichts zu tun.',
    },

    calcQuestion: 'Wie groß ist $a_0$ für die Funktion $f(t) = \\sin(t)$ auf $[0, 2\\pi]$?',
    calcAnswer: 0,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: '$a_0 = (2/T)\\int_0^T \\sin(t)\\,dt = (2/(2\\pi))[-\\cos(t)]_0^{2\\pi} = (1/\\pi)(-1 + 1) = 0$. Der Sinus hat keinen Gleichanteil.',
    calcHints: [
      'Integral von $\\sin$ über eine Periode = 0.',
      'Ungerade Funktion um $\\pi$.',
    ],

    trueFalseStatement: 'Eine ungerade Funktion $f(-t) = -f(t)$ hat nur $b_n$-Koeffizienten (Sinusanteile) in der Fourier-Reihe.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Das Produkt ungerade · gerade (ungerade Funktion · cos) ist ungerade und integriert zu null. Also $a_n = 0$ für alle $n$. Nur Sinusanteile überleben.',
    trueFalseHints: [
      'Symmetrie der Integranden prüfen.',
      'Sinus ist ungerade, Cosinus gerade.',
    ],

    matchingQuestion: 'Ordne Symmetrie-Eigenschaft und Fourier-Koeffizienten zu.',
    matchingPairs: [
      { left: 'Gerade Funktion', right: 'Nur $a_n$ (Cosinus-Anteile)' },
      { left: 'Ungerade Funktion', right: 'Nur $b_n$ (Sinus-Anteile)' },
      { left: 'Halbwellensymmetrie', right: 'Nur ungerade Harmonische ($n = 1, 3, 5, \\dots$)' },
      { left: 'Mittelwertfrei', right: '$a_0 = 0$' },
    ],
    matchingExplanation: 'Symmetrien sparen Rechenarbeit. Vor jeder Fourier-Analyse zunächst prüfen, welche Koeffizienten aus Symmetriegründen null sein müssen.',
    matchingHints: [
      'Symmetrie vor Rechnung.',
      'Halbwellen: nur ungerade n.',
    ],

    sortingQuestion: 'Ordne die Schritte einer Fourier-Analyse.',
    sortingItems: [
      'Periode $T$ und $\\omega_0 = 2\\pi/T$ bestimmen',
      'Symmetrien der Funktion prüfen',
      'Relevante Koeffizienten berechnen ($a_0$, $a_n$, $b_n$)',
      'Reihe in kompakter Form schreiben',
      'Konvergenz und Gibbs-Phänomen diskutieren',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Systematisch: Periode → Symmetrie → Koeffizienten → Reihe → Analyse. Symmetriecheck spart oft 50 % der Rechnung.',
    sortingHints: [
      '$\\omega_0$ immer zuerst.',
      'Symmetrie vor Integration.',
    ],

    errorQuestion: 'Ein Student rechnet $a_n = \\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt$. Was ist falsch?',
    errorOptions: [
      'Vorfaktor $2/T$ fehlt: $a_n = (2/T)\\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt$',
      'Das Integral muss symmetrisch sein',
      '$n$ darf nicht null sein',
      'Der Cosinus ist falsch, es muss Sinus heißen',
    ],
    errorCorrect: 0,
    errorExplanation: 'Häufiger Flüchtigkeitsfehler: Der Normierungsfaktor $2/T$ folgt aus der Orthogonalität der Basisfunktionen. Ohne ihn sind die Koeffizienten um Faktor $T/2$ zu groß.',
    errorHints: [
      'Orthogonalität: $\\int \\cos^2 = T/2$.',
      '$2/T$-Faktor normiert.',
    ],

    transferQuestion: 'Für die Rechteckfunktion $f(t) = 1$ für $0 < t < T/2$, $f(t) = -1$ für $T/2 < t < T$: Wie groß ist $a_0$?',
    transferAnswer: 0,
    transferTolerance: 0.01,
    transferUnit: '',
    transferExplanation: '$a_0 = (2/T)\\int_0^T f\\,dt = (2/T)(T/2 - T/2) = 0$. Der Rechteck hat Mittelwert null.',
    transferHints: [
      'Mittelwert der Rechteckfunktion.',
      'Plus- und Minusteil heben sich auf.',
    ],
  },

  'fl-1-2': {
    explanation: String.raw`**Vertiefung Rechteckimpuls:** Die Fourier-Reihe einer ungeraden Rechteckfunktion mit Amplitude $A$ und Periode $T$ lautet:

$$f(t) = \frac{4A}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)\omega_0 t)}{2k+1}$$

Nur **ungerade** Harmonische erscheinen, weil die Funktion Halbwellensymmetrie besitzt.

**Gibbs-Phänomen:** Bei Unstetigkeiten überschwingt die Partialsumme um ca. 9 % — unabhängig von $N$. Die Überschwinger werden schmaler, aber nicht kleiner.

**Typischer Fehler:** Amplitude $A$ vergessen oder falsche Periode eingesetzt.`,

    conceptQuestion: 'Warum enthält die Fourier-Reihe einer symmetrischen Rechteckfunktion nur ungerade Harmonische?',
    conceptOptions: [
      'Wegen Halbwellensymmetrie $f(t + T/2) = -f(t)$ verschwinden die geraden Harmonischen',
      'Ungerade Harmonische haben höhere Energie',
      'Die Rechenregeln verbieten gerade Harmonische',
      'Der Rechteck ist sinusförmig',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Halbwellensymmetrie $f(t + T/2) = -f(t)$ führt dazu, dass die Integrale $a_{2k}$ und $b_{2k}$ für gerade $n$ verschwinden. Typisch für Rechteck, Dreieck etc.',
    conceptHints: [
      'Halbwellensymmetrie.',
      'Gerade Harmonische fallen weg.',
    ],

    calcQuestion: 'Fourier-Koeffizient $b_1$ einer Rechteckfunktion mit Amplitude $A = 1$, Periode $T = 2\\pi$: $b_1 = (2/T)\\int_0^T f\\sin(t)\\,dt$. Wie groß ist $b_1$?',
    calcAnswer: 1.2732,
    calcTolerance: 0.02,
    calcUnit: '',
    calcExplanation: '$b_1 = (2/(2\\pi))[\\int_0^\\pi \\sin t\\,dt - \\int_\\pi^{2\\pi}\\sin t\\,dt] = (1/\\pi)(2 + 2) = 4/\\pi \\approx 1{,}2732$.',
    calcHints: [
      '$\\int_0^\\pi \\sin = 2$.',
      '$4A/\\pi$ ist die erste Harmonische.',
    ],

    trueFalseStatement: 'Das Gibbs-Phänomen verschwindet, wenn man genügend Harmonische in der Fourier-Reihe berücksichtigt.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Das Gibbs-Überschwingen bleibt bei etwa 9 % — es wird nur schmaler, nicht kleiner. Dies ist eine fundamentale Eigenschaft der Fourier-Rekonstruktion bei Sprungstellen.',
    trueFalseHints: [
      'Überschwinger-Amplitude bleibt konstant.',
      'Nur die Breite geht gegen null.',
    ],

    matchingQuestion: 'Ordne Signalform und Spektralform zu.',
    matchingPairs: [
      { left: 'Rechteck, ungerade', right: 'nur $b_n$, nur ungerade $n$, $\\propto 1/n$' },
      { left: 'Dreieck, ungerade', right: 'nur $b_n$, nur ungerade $n$, $\\propto 1/n^2$' },
      { left: 'Sinus einfach', right: 'nur $b_1 = A$, sonst null' },
      { left: 'Konstante', right: 'nur $a_0/2 = A$' },
    ],
    matchingExplanation: 'Das Spektrum fällt mit $1/n^k$ ab, wobei $k$ von der Glätte der Funktion abhängt. Glatte Signale haben kompaktere Spektren.',
    matchingHints: [
      'Rechteck: $1/n$.',
      'Dreieck: $1/n^2$.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Fourier-Analyse einer Rechteckfunktion.',
    sortingItems: [
      'Periode $T$ und Amplitude $A$ identifizieren',
      'Symmetrien prüfen (ungerade, Halbwelle)',
      'Nur $b_n$ für ungerade $n$ berechnen',
      'Allgemeine Formel $b_n = 4A/(n\\pi)$ für ungerade $n$',
      'Partialsumme aufstellen und visualisieren',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Durch Symmetrien sparsames Vorgehen: Symmetriecheck vor jedem Integral.',
    sortingHints: [
      'Erst Symmetrien.',
      'Allgemeine Formel nutzen.',
    ],

    errorQuestion: 'Ein Student rechnet: "Rechteck mit $A = 5$, $T = 2\\pi$, also $b_1 = 4/\\pi$." Was ist falsch?',
    errorOptions: [
      'Amplitude $A$ fehlt: $b_1 = 4A/\\pi = 20/\\pi \\approx 6{,}37$',
      '$\\pi$ muss im Zähler stehen',
      'Der Faktor $1/n$ wurde vergessen',
      'Rechteck hat keine Fourier-Reihe',
    ],
    errorCorrect: 0,
    errorExplanation: 'Die Amplitude $A$ skaliert jeden Koeffizienten linear. Mit $A = 5$ wird $b_1 = 5 \\cdot 4/\\pi = 20/\\pi$. Einheitencheck: Amplitude bleibt erhalten.',
    errorHints: [
      'Amplitude beachten.',
      '$b_n$ skaliert mit $A$.',
    ],

    transferQuestion: 'Ein Rechteckimpuls mit Amplitude $A = 1$, Periode $T = 4$ s, Tastverhältnis $1/4$ (eingeschaltet $1$ s, ausgeschaltet $3$ s). Wie groß ist $a_0/2$ (Gleichanteil)?',
    transferAnswer: 0.25,
    transferTolerance: 0.01,
    transferUnit: '',
    transferExplanation: '$a_0/2 = (1/T)\\int_0^T f\\,dt = (1/4) \\cdot 1 \\cdot 1 = 0{,}25$. Der Mittelwert ist der Anteil der Einschaltzeit mal Amplitude.',
    transferHints: [
      'Gleichanteil = Mittelwert.',
      'Einschaltzeit mal Amplitude.',
      'Durch Periode teilen.',
    ],
  },

  'fl-1-3': {
    explanation: String.raw`**Vertiefung Fourier-Transformation:** Für nicht-periodische Signale $f(t)$:

$$F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-j\omega t}\,dt$$

$$f(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} F(\omega) e^{j\omega t}\,d\omega$$

**Wichtige Eigenschaften:**
- Linearität: $\mathcal{F}\{af + bg\} = aF + bG$
- Zeitverschiebung: $\mathcal{F}\{f(t-t_0)\} = e^{-j\omega t_0}F(\omega)$
- Skalierung: $\mathcal{F}\{f(at)\} = (1/|a|)F(\omega/a)$
- Faltung ↔ Multiplikation

**Wichtige Paare:**
- $\delta(t) \leftrightarrow 1$
- $1 \leftrightarrow 2\pi \delta(\omega)$
- Rechteck $\leftrightarrow$ Sinc

**Typischer Fehler:** Faktor $2\pi$ in der Rücktransformation vergessen.`,

    conceptQuestion: 'Wie lautet die Fourier-Transformierte der Dirac-Impulsfunktion $\\delta(t)$?',
    conceptOptions: [
      '$F(\\omega) = 1$ (konstant über alle Frequenzen)',
      '$F(\\omega) = \\delta(\\omega)$',
      '$F(\\omega) = 2\\pi$',
      '$F(\\omega) = \\omega$',
    ],
    conceptCorrect: 0,
    conceptExplanation: '$\\int \\delta(t)e^{-j\\omega t}dt = e^{-j\\omega \\cdot 0} = 1$. Die Delta-Funktion hat ein flaches Spektrum — sie enthält alle Frequenzen gleichmäßig. Grundlage der Impulsantwort-Messtechnik.',
    conceptHints: [
      'Ausblendeigenschaft der Delta.',
      'Flaches Spektrum.',
    ],

    calcQuestion: 'Zeitverschiebung: Wenn $\\mathcal{F}\\{f(t)\\} = F(\\omega)$, wie groß ist der Betrag von $\\mathcal{F}\\{f(t-3)\\}$ im Verhältnis zu $|F(\\omega)|$?',
    calcAnswer: 1,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: 'Zeitverschiebung erzeugt Phasenfaktor $e^{-j\\omega \\cdot 3}$. Sein Betrag ist 1 — die Amplitude des Spektrums bleibt unverändert, nur die Phase ändert sich.',
    calcHints: [
      'Verschiebungssatz.',
      'Phasenfaktor vom Betrag 1.',
    ],

    trueFalseStatement: 'Die Fourier-Transformation ist der Sonderfall der Laplace-Transformation, wenn $s = j\\omega$ (also $\\sigma = 0$).',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Mit $s = \\sigma + j\\omega$ wird die Laplace- zur Fourier-Transformation für $\\sigma = 0$ (bei Funktionen, deren Fourier-Integral konvergiert). Laplace ist das mächtigere Werkzeug, Fourier gibt das Frequenzverhalten.',
    trueFalseHints: [
      '$s = j\\omega$.',
      'Konvergenzbereich beachten.',
    ],

    matchingQuestion: 'Ordne $f(t)$ und $F(\\omega)$ zu.',
    matchingPairs: [
      { left: '$\\delta(t)$', right: '$1$' },
      { left: '$1$ (konstant)', right: '$2\\pi \\delta(\\omega)$' },
      { left: 'Rechteckimpuls der Breite $\\tau$', right: '$\\tau \\cdot \\mathrm{sinc}(\\omega\\tau/2)$' },
      { left: '$e^{-at} \\cdot u(t)$', right: '$1/(a + j\\omega)$' },
    ],
    matchingExplanation: 'Zentrale Transformationspaare. Rechteck im Zeitbereich = Sinc im Frequenzbereich und umgekehrt (Dualität).',
    matchingHints: [
      'Delta ↔ konstant.',
      'Rechteck ↔ Sinc.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Anwendung der Fourier-Transformation.',
    sortingItems: [
      'Signal $f(t)$ identifizieren und auf Absolutintegrierbarkeit prüfen',
      'Transformation $F(\\omega) = \\int f(t)e^{-j\\omega t}\\,dt$',
      'Betrag und Phase berechnen',
      'Physikalische Interpretation (Amplitudenspektrum, Phasenspektrum)',
      'Bei Bedarf Rücktransformation',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Typischer Ablauf: Konvergenzcheck → Transformation → Spektrum → Interpretation → ggf. Rücktransformation.',
    sortingHints: [
      'Konvergenz zuerst prüfen.',
      'Betrag/Phase am Ende.',
    ],

    errorQuestion: 'Ein Student rechnet die Rücktransformation: $f(t) = \\int F(\\omega) e^{j\\omega t}\\,d\\omega$. Was fehlt?',
    errorOptions: [
      'Der Faktor $1/(2\\pi)$: $f(t) = (1/(2\\pi))\\int F(\\omega)e^{j\\omega t}\\,d\\omega$',
      'Das Minuszeichen im Exponenten',
      'Das Integral muss komplex sein',
      'Der Faktor $2\\pi$ im Exponenten',
    ],
    errorCorrect: 0,
    errorExplanation: 'Die Symmetrie des Fourier-Paares erfordert den Faktor $1/(2\\pi)$ in der Rücktransformation. Ohne ihn ist die Rücktransformation um $2\\pi$ falsch.',
    errorHints: [
      '$2\\pi$-Normierung.',
      'Symmetrie Hin- und Rücktransformation.',
    ],

    transferQuestion: 'Gegeben $F(\\omega) = 2\\pi\\delta(\\omega - 3)$. Was ist $f(t)$ an der Stelle $t = 0$?',
    transferAnswer: 1,
    transferTolerance: 0.01,
    transferUnit: '',
    transferExplanation: '$f(t) = (1/(2\\pi))\\int 2\\pi\\delta(\\omega - 3)e^{j\\omega t}\\,d\\omega = e^{j \\cdot 3 \\cdot t} = \\cos(3t) + j\\sin(3t)$. Bei $t = 0$: $f(0) = 1$.',
    transferHints: [
      'Ausblendeigenschaft der Delta.',
      '$2\\pi$-Faktor kürzt sich.',
      '$e^{j\\omega t}$ bei $t=0$ = 1.',
    ],
  },

  'fl-2-1': {
    explanation: String.raw`**Vertiefung Laplace-Transformation:** Verallgemeinerung der Fourier-Transformation mit $s = \sigma + j\omega$:

$$F(s) = \mathcal{L}\{f(t)\} = \int_0^{\infty} f(t) e^{-st}\,dt$$

**Warum Laplace statt Fourier?**
- Funktioniert auch für wachsende Signale (Konvergenzbereich)
- Behandelt Anfangsbedingungen elegant
- Wird für Einschaltvorgänge (einseitige Transformation) verwendet
- Basis der Systemtheorie (Übertragungsfunktion)

**Wichtige Paare:**
- $1 \leftrightarrow 1/s$
- $t^n \leftrightarrow n!/s^{n+1}$
- $e^{at} \leftrightarrow 1/(s-a)$
- $\sin(\omega t) \leftrightarrow \omega/(s^2+\omega^2)$
- $\cos(\omega t) \leftrightarrow s/(s^2+\omega^2)$

**Ableitungssatz:** $\mathcal{L}\{f'\} = sF(s) - f(0)$

**Typischer Fehler:** Anfangswert $f(0)$ beim Ableitungssatz übersehen.`,

    conceptQuestion: 'Welcher Vorteil hat die Laplace- gegenüber der Fourier-Transformation bei DGL-Lösung?',
    conceptOptions: [
      'Sie behandelt Anfangsbedingungen systematisch und konvergiert für mehr Signale',
      'Sie ist immer einfacher zu berechnen',
      'Sie eliminiert alle Nichtlinearitäten',
      'Sie benötigt keine Integration',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Der Term $f(0)$ fließt beim Ableitungssatz direkt ein — DGLs mit Anfangsbedingungen werden zu algebraischen Gleichungen. Zudem konvergiert Laplace auch für wachsende Signale (Konvergenzbereich $\\Re(s) > \\sigma_0$).',
    conceptHints: [
      'Anfangsbedingungen automatisch.',
      'Breiterer Konvergenzbereich.',
    ],

    calcQuestion: 'Wie lautet $\\mathcal{L}\\{t^2\\}$ bei $s > 0$? Gib den Wert bei $s = 1$.',
    calcAnswer: 2,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: '$\\mathcal{L}\\{t^n\\} = n!/s^{n+1}$. Für $n = 2$: $\\mathcal{L}\\{t^2\\} = 2!/s^3 = 2/s^3$. Bei $s = 1$: $2/1 = 2$.',
    calcHints: [
      '$\\mathcal{L}\\{t^n\\} = n!/s^{n+1}$.',
      '$2! = 2$.',
    ],

    trueFalseStatement: 'Die Laplace-Transformation ist linear: $\\mathcal{L}\\{af + bg\\} = aF(s) + bG(s)$.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Die Linearität folgt unmittelbar aus der Integraldefinition. Ausnutzen, um komplizierte Funktionen als Summen einfacher Bausteine zu zerlegen.',
    trueFalseHints: [
      'Integral ist linear.',
      'Summen-/Faktorregel.',
    ],

    matchingQuestion: 'Ordne $f(t)$ und $F(s)$ zu.',
    matchingPairs: [
      { left: '$1$ (Sprungfunktion $u(t)$)', right: '$1/s$' },
      { left: '$e^{-at}$', right: '$1/(s + a)$' },
      { left: '$\\sin(\\omega t)$', right: '$\\omega/(s^2 + \\omega^2)$' },
      { left: '$\\cos(\\omega t)$', right: '$s/(s^2 + \\omega^2)$' },
    ],
    matchingExplanation: 'Standard-Transformationspaare aus der Laplace-Tabelle. In der Prüfung auswendig oder griffbereit.',
    matchingHints: [
      'Sinus: $\\omega$ im Zähler.',
      'Cosinus: $s$ im Zähler.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Anwendung der Laplace-Transformation.',
    sortingItems: [
      'DGL aufstellen mit Anfangsbedingungen',
      'Laplace-Transformation gliedweise anwenden',
      'Gleichungssystem algebraisch nach $Y(s)$ lösen',
      'Partialbruchzerlegung bei rationaler $Y(s)$',
      'Rücktransformation gliedweise',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Standard-Workflow. Partialbruchzerlegung ist der kritischste Schritt — hier passieren die meisten Fehler.',
    sortingHints: [
      'DGL → Bildbereich → Lösung → Rücktransformation.',
      'Partialbruchzerlegung ist zentral.',
    ],

    errorQuestion: 'Ein Student schreibt: "$\\mathcal{L}\\{f\'(t)\\} = sF(s)$." Was fehlt?',
    errorOptions: [
      'Der Anfangswert: $\\mathcal{L}\\{f\'\\} = sF(s) - f(0)$',
      'Das Minuszeichen vor $s$',
      'Der Faktor $2\\pi$',
      'Nichts, die Formel stimmt',
    ],
    errorCorrect: 0,
    errorExplanation: 'Beim Ableitungssatz kommt der Anfangswert $f(0)$ ins Spiel. Ohne ihn löst man die DGL mit falschen Anfangsbedingungen — typischer Flüchtigkeitsfehler in der Klausur.',
    errorHints: [
      'Ableitungssatz mit $f(0)$.',
      'Partielle Integration.',
    ],

    transferQuestion: 'Laplace von $f(t) = \\sin(2t) + \\cos(2t)$: Wie groß ist $F(s)$ bei $s = 2$? (Hinweis: $\\mathcal{L}\\{\\sin(\\omega t)\\} = \\omega/(s^2+\\omega^2)$ etc.)',
    transferAnswer: 0.5,
    transferTolerance: 0.02,
    transferUnit: '',
    transferExplanation: '$F(s) = 2/(s^2+4) + s/(s^2+4) = (s+2)/(s^2+4)$. Bei $s = 2$: $(2+2)/(4+4) = 4/8 = 0{,}5$.',
    transferHints: [
      'Linearität.',
      'Beide Transformationen addieren.',
      '$s = 2$ einsetzen.',
    ],
  },

  'fl-2-2': {
    explanation: String.raw`**Vertiefung DGL-Lösung via Laplace:** Systematisches Verfahren für lineare DGLs mit konstanten Koeffizienten.

**Ablauf:**
1. DGL transformieren (inklusive Anfangswerte)
2. Nach $Y(s)$ auflösen
3. $Y(s)$ in Partialbrüche zerlegen
4. Gliedweise rücktransformieren

**Impulsantwort $g(t)$:** Die Antwort eines LTI-Systems auf $\delta(t)$. Es gilt $G(s) = Y(s)/U(s) = \mathcal{L}\{g(t)\}$.

**Stabilität:** Alle Pole von $G(s)$ müssen $\Re < 0$ haben — d. h. in der linken Halbebene liegen.

**Typischer Fehler:** Bei der Partialbruchzerlegung einen Zählerkoeffizienten vergessen, besonders bei komplexen oder mehrfachen Polen.`,

    conceptQuestion: 'Was ist die Impulsantwort $g(t)$ eines linearen, zeitinvarianten Systems?',
    conceptOptions: [
      'Die Antwort des Systems auf einen Dirac-Impuls $\\delta(t)$ am Eingang',
      'Die Antwort auf einen Einheitssprung',
      'Die stationäre Antwort',
      'Der Gleichanteil des Systems',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Da $\\mathcal{L}\\{\\delta(t)\\} = 1$, gilt $Y(s) = G(s) \\cdot 1 = G(s)$, also $g(t) = \\mathcal{L}^{-1}\\{G(s)\\}$. Die Impulsantwort charakterisiert das System vollständig im Zeitbereich.',
    conceptHints: [
      'Delta im Eingang.',
      'Rücktransformierte der Übertragungsfunktion.',
    ],

    calcQuestion: 'Für ein PT1-System $G(s) = 1/(s + 2)$: Wie groß ist $g(t)$ bei $t = 0^+$?',
    calcAnswer: 1,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: '$g(t) = \\mathcal{L}^{-1}\\{1/(s+2)\\} = e^{-2t}$. Bei $t = 0$ ergibt sich $e^0 = 1$.',
    calcHints: [
      'Rücktransformation von $1/(s+a)$.',
      '$e^{-at}$ bei $t=0$ = 1.',
    ],

    trueFalseStatement: 'Ein System ist genau dann stabil, wenn alle Pole seiner Übertragungsfunktion $G(s)$ in der linken Halbebene liegen.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Jeder Pol $s_i$ erzeugt einen Modus $e^{s_i t}$. Nur bei $\\Re(s_i) < 0$ klingt dieser ab. Einzelne Pole auf der imaginären Achse ergeben Grenzstabilität.',
    trueFalseHints: [
      'Polrealteile negativ.',
      'Fundamentalsatz der Stabilität.',
    ],

    matchingQuestion: 'Ordne Pol-Art und Zeitverhalten zu.',
    matchingPairs: [
      { left: 'einfacher reeller Pol $s = -a$', right: '$e^{-at}$' },
      { left: 'doppelter reeller Pol $s = -a$', right: '$t\\,e^{-at}$' },
      { left: 'konj. komplexes Paar', right: 'gedämpfte Schwingung' },
      { left: 'Pol bei $s = 0$', right: 'Sprungfunktion (Integrator)' },
    ],
    matchingExplanation: 'Die Partialbruchzerlegung liefert pro Pol genau diese Zeitmoden. Grundlage jeder DGL-Lösung via Laplace.',
    matchingHints: [
      'Einzelne Pole: $e^{st}$.',
      'Mehrfache Pole: mit $t$-Faktor.',
    ],

    sortingQuestion: 'Ordne die Schritte zur DGL-Lösung via Laplace.',
    sortingItems: [
      'DGL transformieren inkl. Anfangswerte',
      '$Y(s)$ isolieren',
      'Partialbruchzerlegung',
      'Koeffizienten (Residuen) bestimmen',
      'Gliedweise Rücktransformation',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Vor allem Partialbrüche und Residuen sind Übungssache. Wer diesen Schritt sicher beherrscht, löst jede lineare DGL zuverlässig.',
    sortingHints: [
      'Partialbrüche sind der Knackpunkt.',
      'Gliedweise transformieren.',
    ],

    errorQuestion: 'Ein Student zerlegt: "$1/((s+1)(s+2)) = 1/(s+1) + 1/(s+2)$." Was ist falsch?',
    errorOptions: [
      'Residuen fehlen: richtig ist $1/(s+1) - 1/(s+2)$',
      'Die Faktoren müssen multipliziert werden',
      'Das System ist nicht stabil',
      'Nichts, die Formel stimmt',
    ],
    errorCorrect: 0,
    errorExplanation: '$1/((s+1)(s+2)) = A/(s+1) + B/(s+2)$ mit $A = 1/(-1+2) = 1$ und $B = 1/(-2+1) = -1$. Also $1/(s+1) - 1/(s+2)$. Residuen immer mit Zuhaltemethode berechnen.',
    errorHints: [
      'Partialbruchzerlegung: Residuen bestimmen.',
      'Zuhaltemethode.',
    ],

    transferQuestion: 'Sprungantwort eines PT1: $G(s) = 2/(s + 1)$, Eingang $u(t)$ = Sprung, also $U(s) = 1/s$. $Y(s) = 2/(s(s+1)) = 2/s - 2/(s+1)$. Wie groß ist $y(t)$ bei $t = 1$ s?',
    transferAnswer: 1.264,
    transferTolerance: 0.02,
    transferUnit: '',
    transferExplanation: '$y(t) = 2(1 - e^{-t})$. Bei $t = 1$: $y = 2(1 - e^{-1}) = 2(1 - 0{,}368) \\approx 1{,}264$.',
    transferHints: [
      'Partialbrüche zurücktransformieren.',
      '$y(t) = 2 - 2e^{-t}$.',
      '$e^{-1} \\approx 0{,}368$.',
    ],
  },

  'fl-3-1': {
    exam: true,
    explanation: String.raw`**Prüfungsvorbereitung Fourier:**

**Parseval-Theorem:**

$$\int_{-\infty}^{\infty} |f(t)|^2\,dt = \frac{1}{2\pi}\int_{-\infty}^{\infty} |F(\omega)|^2\,d\omega$$

Die Energie ist im Zeit- und Frequenzbereich gleich.

**Eigenschaften zusammengefasst:**
- Linearität: $af + bg \leftrightarrow aF + bG$
- Zeitverschiebung: $f(t-t_0) \leftrightarrow e^{-j\omega t_0}F(\omega)$
- Frequenzverschiebung: $e^{j\omega_0 t}f(t) \leftrightarrow F(\omega - \omega_0)$
- Skalierung: $f(at) \leftrightarrow (1/|a|)F(\omega/a)$
- Faltung: $f * g \leftrightarrow F \cdot G$

**Dualität:** Eine schmale Funktion im Zeitbereich hat ein breites Spektrum und umgekehrt.

**Prüfungstipp:** Bei Aufgaben stets Eigenschaften prüfen, bevor direkt integriert wird.`,

    conceptQuestion: 'Was besagt das Parseval-Theorem für die Fourier-Transformation?',
    conceptOptions: [
      'Die Energie eines Signals ist im Zeit- und im Frequenzbereich gleich',
      'Die Leistung ist immer null',
      'Die Phasen sind konstant',
      'Die Frequenz ist doppelt so groß wie die Zeit',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Parseval: $\\int|f|^2 dt = (1/(2\\pi))\\int|F|^2 d\\omega$. Die Energieerhaltung zwischen Zeit- und Frequenzbereich ist fundamental — etwa in der Signalverarbeitung zur Spektraldichte.',
    conceptHints: [
      'Energieerhaltung.',
      'Zeit- und Frequenzbereich äquivalent.',
    ],

    calcQuestion: 'Ein Signal hat $\\int |f(t)|^2\\,dt = 10$. Was ist $(1/(2\\pi))\\int|F(\\omega)|^2\\,d\\omega$ nach Parseval?',
    calcAnswer: 10,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: 'Nach Parseval sind beide Integrale gleich groß: Die Energie bleibt beim Übergang in den Frequenzbereich erhalten.',
    calcHints: [
      'Energieerhaltung.',
      'Zahlenwerte sind gleich.',
    ],

    trueFalseStatement: 'Die Zeitverschiebung $f(t - t_0)$ ändert das Amplitudenspektrum $|F(\\omega)|$ nicht, nur die Phase.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Verschiebung multipliziert $F(\\omega)$ mit $e^{-j\\omega t_0}$, dessen Betrag 1 ist. Der Amplitudengang bleibt unverändert, der Phasengang dreht sich linear.',
    trueFalseHints: [
      'Phasenfaktor vom Betrag 1.',
      'Amplituden unverändert.',
    ],

    matchingQuestion: 'Ordne Eigenschaft und Formel zu.',
    matchingPairs: [
      { left: 'Linearität', right: '$af + bg \\leftrightarrow aF + bG$' },
      { left: 'Zeitverschiebung', right: '$f(t-t_0) \\leftrightarrow e^{-j\\omega t_0}F(\\omega)$' },
      { left: 'Skalierung', right: '$f(at) \\leftrightarrow (1/|a|)F(\\omega/a)$' },
      { left: 'Faltung', right: '$f * g \\leftrightarrow F \\cdot G$' },
    ],
    matchingExplanation: 'Die vier Grundeigenschaften reichen für die meisten Prüfungsaufgaben. Kombiniert mit der Standardtabelle löst man fast alles ohne direkte Integration.',
    matchingHints: [
      'Standard-Eigenschaften.',
      'Faltung ↔ Multiplikation.',
    ],

    sortingQuestion: 'Ordne die Schritte zur effizienten Prüfungslösung einer Fourier-Aufgabe.',
    sortingItems: [
      'Signal in Standardform bringen',
      'Bekannte Eigenschaften suchen (Verschiebung, Skalierung, ...)',
      'Ggf. Standardpaare aus Tabelle verwenden',
      'Ergebnis zusammenfügen',
      'Plausibilitätscheck (Betrag, Einheiten, Dimensionen)',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Tabellenaufgaben schnell lösen: Standardform → Eigenschaft → Paar → Kombination. Direkte Integration nur, wenn nichts anderes passt.',
    sortingHints: [
      'Tabellenwerte nutzen.',
      'Eigenschaften vor Integration.',
    ],

    errorQuestion: 'Ein Student rechnet die Fourier-Transformierte einer Spannung in Volt und erhält Einheit "$V$". Was fehlt?',
    errorOptions: [
      'Die Einheit muss V $\\cdot$ s bzw. V/Hz sein — die Transformation trägt eine Zeiteinheit',
      'Die Einheit stimmt',
      'V muss durch Hz geteilt werden',
      'Die Einheit ist dimensionslos',
    ],
    errorCorrect: 0,
    errorExplanation: 'Das Integral $\\int V(t)e^{-j\\omega t}dt$ hat Einheit V · s. Spektrale Darstellungen haben daher die Einheit der Zeitgröße multipliziert mit Zeit (oder geteilt durch Frequenz).',
    errorHints: [
      'Einheitenkontrolle.',
      'Transformation verändert Dimension.',
    ],

    transferQuestion: 'Ein Rechteckimpuls der Dauer $T_p = 2$ s und Höhe $A = 1$ hat Energie $E = A^2 T_p$. Wie groß ist $E$?',
    transferAnswer: 2,
    transferTolerance: 0.01,
    transferUnit: '',
    transferExplanation: '$E = \\int_{-T_p/2}^{T_p/2} A^2\\,dt = A^2 T_p = 1 \\cdot 2 = 2$. Nach Parseval muss das Integral des Amplitudenspektrums (mit $1/(2\\pi)$-Vorfaktor) denselben Wert liefern.',
    transferHints: [
      '$E = \\int|f|^2 dt$.',
      'Rechteck: $A^2 \\cdot T_p$.',
      'Parseval-Theorem.',
    ],
  },

  'fl-3-2': {
    exam: true,
    explanation: String.raw`**Prüfungsvorbereitung Laplace / Stabilität:**

**Stabilitätsprüfung über Pole:** Alle Pole von $G(s)$ müssen $\Re < 0$ haben.

**Routh-Hurwitz-Kriterium:** Tabellenverfahren, zählt Vorzeichenwechsel in der ersten Spalte. Ohne Polberechnung anwendbar.

**Endwertsatz:**

$$\lim_{t\to\infty} y(t) = \lim_{s\to 0} s \cdot Y(s)$$

gilt, wenn das System stabil ist (alle Pole in LHP) und der Grenzwert existiert.

**Anfangswertsatz:**

$$\lim_{t\to 0^+} y(t) = \lim_{s\to\infty} s \cdot Y(s)$$

**Typischer Fehler:** Endwertsatz bei instabilem System anwenden — Ergebnis hat keine physikalische Bedeutung.`,

    conceptQuestion: 'Wann ist das lineare System mit $G(s) = (s+3)/((s+1)(s-2))$ stabil?',
    conceptOptions: [
      'Nie — der Pol bei $s = +2$ liegt in der rechten Halbebene',
      'Immer',
      'Nur bei $s = 0$',
      'Wenn die Nullstelle entfernt wird',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Pole sind bei $s = -1$ (stabil) und $s = +2$ (instabil). Ein einziger Pol in RHP reicht für Instabilität. Die Nullstelle bei $s = -3$ ändert daran nichts.',
    conceptHints: [
      'Pole prüfen, nicht Nullstellen.',
      'Jeder Pol muss in LHP liegen.',
    ],

    calcQuestion: 'Regelkreis: $G_o(s) = 4/(s(s+2))$, negative Einheitsrückführung. Endwertsatz: $e_{stat}$ auf Sprung $w_0 = 1$? (Hinweis: für Typ 1 ist $e_{stat}$ bei Sprung null.)',
    calcAnswer: 0,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: 'Systemtyp 1 (ein Pol bei $s = 0$). $e_{stat} = \\lim_{s\\to 0} s E(s) = w_0 / (1 + G_o(0))$. Mit $G_o(0) \\to \\infty$ folgt $e_{stat} = 0$. Ein I-Anteil im offenen Kreis bringt $e_{stat}$ bei Sprung auf null.',
    calcHints: [
      'Systemtyp abzählen.',
      'Endwertsatz anwenden.',
    ],

    trueFalseStatement: 'Das Routh-Hurwitz-Kriterium erlaubt Stabilitätsprüfung eines Polynoms, ohne die Pole explizit zu berechnen.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Das Verfahren erstellt aus den Koeffizienten des charakteristischen Polynoms eine Tabelle. Vorzeichenwechsel in der ersten Spalte = Anzahl der Pole in RHP.',
    trueFalseHints: [
      'Tabellenverfahren.',
      'Koeffizientenzugriff.',
    ],

    matchingQuestion: 'Ordne Systemtyp und Folgeverhalten bei Sprung/Rampe zu.',
    matchingPairs: [
      { left: 'Typ 0', right: 'Sprung: bleibender Fehler; Rampe: unendlicher Fehler' },
      { left: 'Typ 1', right: 'Sprung: $e_{stat} = 0$; Rampe: bleibender Schleppfehler' },
      { left: 'Typ 2', right: 'Sprung und Rampe: $e_{stat} = 0$' },
      { left: 'Instabil', right: 'Endwertsatz nicht anwendbar' },
    ],
    matchingExplanation: 'Die Typzahl (= Pole bei $s = 0$ im offenen Kreis) bestimmt die stationäre Folgegenauigkeit. Wichtig für Reglerauswahl.',
    matchingHints: [
      'Pro Integrator ein Ordnung besser.',
      'Instabil: kein Endwert.',
    ],

    sortingQuestion: 'Ordne die Schritte der Stabilitätsanalyse.',
    sortingItems: [
      'Führungsübertragungsfunktion $T(s)$ oder $Y(s)$ aufstellen',
      'Nennerpolynom / charakteristische Gleichung bestimmen',
      'Routh-Hurwitz-Tabelle aufstellen',
      'Vorzeichenwechsel in 1. Spalte zählen',
      'Schluss: stabil / grenzstabil / instabil',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Systematisches Vorgehen verhindert Fehler. Routh-Hurwitz-Tabellen sind Pflichtstoff in der Regelungstechnik-Klausur.',
    sortingHints: [
      'Nennerpolynom zuerst.',
      'Vorzeichenwechsel zählen.',
    ],

    errorQuestion: 'Ein Student wendet den Endwertsatz auf $Y(s) = K/(s-1)$ an und erhält $y_\\infty = 0$. Was ist problematisch?',
    errorOptions: [
      'Das System hat einen Pol bei $s = +1$ (instabil) — der Endwertsatz gilt nicht',
      'Der Faktor $K$ wurde vergessen',
      '$s = 0$ muss im Nenner stehen',
      'Der Endwertsatz ist immer anwendbar',
    ],
    errorCorrect: 0,
    errorExplanation: 'Endwertsatz nur bei konvergierenden Systemen gültig (alle Pole in LHP und $sY(s)$ hat keinen Pol in RHP bzw. auf $j\\omega$-Achse). Hier wächst $y(t) = Ke^t$ unbegrenzt.',
    errorHints: [
      'Stabilität prüfen.',
      'Pol in RHP → kein Endwert.',
    ],

    transferQuestion: 'Charakteristisches Polynom $s^3 + 3s^2 + 2s + K = 0$. Nach Routh-Hurwitz: Das System ist stabil für $0 < K < ?$ (gib die obere Grenze).',
    transferAnswer: 6,
    transferTolerance: 0.1,
    transferUnit: '',
    transferExplanation: 'Routh-Tabelle: $s^3$-Zeile: 1, 2; $s^2$-Zeile: 3, $K$; $s^1$-Zeile: $(3 \\cdot 2 - K)/3 = (6-K)/3$; $s^0$-Zeile: $K$. Stabilität: alle Einträge der 1. Spalte positiv $\\Rightarrow K > 0$ und $6 - K > 0 \\Rightarrow K < 6$.',
    transferHints: [
      'Routh-Tabelle aufstellen.',
      'Erste Spalte: alle positiv.',
      'Grenze aus $(6-K)/3 > 0$.',
    ],
  },
}

export const fourierLaplaceSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    { explanation: profile.explanation, exercises: bank(profile) },
  ])
)
