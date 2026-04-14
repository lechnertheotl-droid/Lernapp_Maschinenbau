// ── Integralrechnung Unit 4: Prüfungsaufgaben ─────────────────────────────────
// Aufgaben auf TU Wien Prüfungsniveau

const exercises_int_u4 = {

  // ── Lektion 4-1: Prüfung Integrationstechniken ───────────────────────────

  'ex-int-4-1-a': {
    id: 'ex-int-4-1-a', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: ∫ x · e^(x²) dx',
    options: [
      'e^(x²) + C',
      '(1/2) · e^(x²) + C',
      'x² · e^(x²) + C',
      '2x · e^(x²) + C',
    ],
    correctIndex: 1,
    explanation: 'Substitution: u = x², du = 2x dx → x dx = du/2. Das Integral wird: ∫ eᵘ · (du/2) = (1/2)·eᵘ + C = (1/2)·e^(x²) + C. Probe: ((1/2)·e^(x²))\' = (1/2)·e^(x²)·2x = x·e^(x²) ✓',
    hints: ['Setze u = x². Was ist dann du?', 'du = 2x dx → x dx = du/2'],
  },

  'ex-int-4-1-b': {
    id: 'ex-int-4-1-b', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: ∫ x · ln(x) dx',
    options: [
      'x²·ln(x)/2 − x²/4 + C',
      'x²·ln(x)/2 + x²/4 + C',
      'x·ln(x) − x + C',
      'ln(x)²/2 + C',
    ],
    correctIndex: 0,
    explanation: 'Partielle Integration: u = ln(x) → u\' = 1/x; v\' = x → v = x²/2. ∫x·ln(x) dx = (x²/2)·ln(x) − ∫(x²/2)·(1/x) dx = (x²/2)·ln(x) − (1/2)∫x dx = (x²/2)·ln(x) − x²/4 + C.',
    hints: ['Wähle u = ln(x) (wird beim Ableiten einfacher) und v\' = x.', 'u\' = 1/x, v = x²/2. Einsetzen in ∫u·v\' = u·v − ∫u\'·v.'],
  },

  'ex-int-4-1-c': {
    id: 'ex-int-4-1-c', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Zerlege in Partialbrüche und berechne: ∫ 1/(x²−1) dx',
    options: [
      '(1/2)·ln|x−1| − (1/2)·ln|x+1| + C',
      '(1/2)·ln|x−1| + (1/2)·ln|x+1| + C',
      'ln|x²−1| + C',
      '−1/(2(x²−1)) + C',
    ],
    correctIndex: 0,
    explanation: '1/(x²−1) = 1/((x−1)(x+1)) = A/(x−1) + B/(x+1). Ansatz: 1 = A(x+1) + B(x−1). x=1: A=1/2; x=−1: B=−1/2. Also: ∫[(1/2)/(x−1) − (1/2)/(x+1)] dx = (1/2)·ln|x−1| − (1/2)·ln|x+1| + C.',
    hints: ['1/(x²−1) = 1/((x−1)(x+1))', 'Partialbruchansatz: A/(x−1) + B/(x+1). Einsetzen von x=1 und x=−1 liefert A und B.'],
  },

  'ex-int-4-1-d': {
    id: 'ex-int-4-1-d', lessonId: 'int-4-1', type: 'number-input',
    question: '[PRÜFUNG] Berechne das bestimmte Integral: ∫₀¹ x·eˣ dx. Runde auf 2 Dezimalstellen.',
    correctAnswer: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'Partielle Integration: u = x → u\' = 1; v\' = eˣ → v = eˣ. [x·eˣ − eˣ]₀¹ = [eˣ(x−1)]₀¹ = e¹·(1−1) − e⁰·(0−1) = 0 − (−1) = 1.',
    hints: ['Partielle Integration mit u = x, v\' = eˣ.', 'Ergebnis: [eˣ(x−1)]₀¹ = e·0 − 1·(−1) = 1.'],
  },

  'ex-int-4-1-e': {
    id: 'ex-int-4-1-e', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: ∫ sin²(x) dx',
    options: [
      '−(1/2)·cos(2x) + C',
      'x/2 − sin(2x)/4 + C',
      'x/2 + sin(2x)/4 + C',
      '−cos(x)·sin(x) + C',
    ],
    correctIndex: 1,
    explanation: 'Nutze die Halbwinkelformel: sin²(x) = (1 − cos(2x))/2. Dann: ∫(1 − cos(2x))/2 dx = x/2 − sin(2x)/4 + C.',
    hints: ['sin²(x) = (1 − cos(2x))/2 — Halbwinkelformel anwenden.', '∫cos(2x) dx = sin(2x)/2'],
  },

  'ex-int-4-1-f': {
    id: 'ex-int-4-1-f', lessonId: 'int-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Es gilt: ∫₋₁¹ x³ dx = 0, weil x³ eine ungerade Funktion ist.',
    correct: true,
    explanation: 'Korrekt! Eine ungerade Funktion f(x) erfüllt f(−x) = −f(x). Für ein symmetrisches Intervall [−a, a] gilt daher stets ∫₋ₐᵃ f(x) dx = 0. Da x³ ungerade ist, heben sich die Flächenanteile auf.',
    hints: ['Ungerade Funktion: f(−x) = −f(x). Was bedeutet das für symmetrische Integrale?', '∫₋ₐᵃ f(x) dx = 0 für ungerade f — oder nachrechnen: [x⁴/4]₋₁¹ = 1/4 − 1/4 = 0. Warte — ∫x³ dx = x⁴/4, ist das richtig? x³ ist ungerade, x⁴/4 ist gerade. [x⁴/4]₋₁¹ = 1/4 − 1/4 = 0. ✓'],
  },

  'ex-int-4-1-g': {
    id: 'ex-int-4-1-g', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Substitution ist am geeignetsten für ∫ √(1−x²) dx?',
    options: [
      'u = 1 − x²',
      'x = sin(t)',
      'x = tan(t)',
      'u = x²',
    ],
    correctIndex: 1,
    explanation: 'Die Substitution x = sin(t) verwandelt √(1−x²) in √(1−sin²(t)) = √(cos²(t)) = cos(t). Dann gilt dx = cos(t) dt und das Integral wird ∫cos²(t) dt — lösbar mit der Halbwinkelformel. Das Ergebnis ist (1/2)(arcsin(x) + x√(1−x²)) + C.',
    hints: ['√(1−x²) erinnert an die Identität sin²+cos²=1.', 'Setze x = sin(t), dann wird 1−x² = cos²(t).'],
  },

  'ex-int-4-1-h': {
    id: 'ex-int-4-1-h', lessonId: 'int-4-1', type: 'number-input',
    question: '[PRÜFUNG] Berechne: ∫₁ᵉ ln(x) dx. (Tipp: Partielle Integration mit u = ln(x), v\' = 1)',
    correctAnswer: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'Partielle Integration: u = ln(x) → u\' = 1/x; v\' = 1 → v = x. [x·ln(x) − x]₁ᵉ = (e·1 − e) − (1·0 − 1) = 0 − (−1) = 1.',
    hints: ['u = ln(x), v\' = 1 → v = x. Dann: x·ln(x) − ∫x·(1/x) dx = x·ln(x) − x.', 'Grenzen einsetzen: [x·ln(x) − x]₁ᵉ = (e − e) − (0 − 1) = 1.'],
  },

  'ex-int-4-1-i': {
    id: 'ex-int-4-1-i', lessonId: 'int-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Die Partialbruchzerlegung von 1/(x(x+1)) lautet: 1/x − 1/(x+1).',
    correct: true,
    explanation: '1/(x(x+1)) = A/x + B/(x+1). Multipliziere mit x(x+1): 1 = A(x+1) + Bx. x=0: A=1. x=−1: B=−1. Also: 1/x − 1/(x+1). Probe: (x+1 − x)/(x(x+1)) = 1/(x(x+1)) ✓',
    hints: ['Ansatz: A/x + B/(x+1). Multipliziere beide Seiten mit x(x+1).', 'Setze x=0 für A und x=−1 für B ein.'],
  },

  'ex-int-4-1-j': {
    id: 'ex-int-4-1-j', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: ∫ x²·eˣ dx',
    options: [
      'x²·eˣ − 2x·eˣ + 2eˣ + C',
      'x²·eˣ + 2x·eˣ + 2eˣ + C',
      'x²·eˣ − 2eˣ + C',
      '(x² − 2)·eˣ + C',
    ],
    correctIndex: 0,
    explanation: 'Zweifache partielle Integration. Runde 1: u=x², v\'=eˣ → x²·eˣ − ∫2x·eˣ dx. Runde 2: u=2x, v\'=eˣ → 2x·eˣ − ∫2eˣ dx = 2x·eˣ − 2eˣ. Gesamt: x²·eˣ − (2x·eˣ − 2eˣ) + C = x²·eˣ − 2x·eˣ + 2eˣ + C = eˣ(x²−2x+2) + C.',
    hints: ['Zweimal partielle Integration: zuerst u=x², v\'=eˣ, dann u=2x, v\'=eˣ.', 'Jedes Mal nimmt der Grad des Polynoms um 1 ab.'],
  },

  'ex-int-4-1-mastery': {
    id: 'ex-int-4-1-mastery', lessonId: 'int-4-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne: ∫₀^(π/2) sin(x)·cos(x) dx',
    options: ['0', '1/4', '1/2', '1'],
    correctIndex: 2,
    explanation: 'Methode 1 (Substitution): u = sin(x), du = cos(x) dx. Grenzen: x=0→u=0, x=π/2→u=1. Integral: ∫₀¹ u du = [u²/2]₀¹ = 1/2. Methode 2 (Identität): sin(x)·cos(x) = sin(2x)/2. ∫₀^(π/2) sin(2x)/2 dx = [−cos(2x)/4]₀^(π/2) = (1/4) − (−1/4) = 1/2.',
    hints: ['Nutze u = sin(x) oder die Identität sin(x)·cos(x) = sin(2x)/2.', 'Vergiss nicht, bei der Substitution auch die Grenzen umzurechnen.'],
  },

  // ── Lektion 4-2: Prüfung Anwendungen ─────────────────────────────────────

  'ex-int-4-2-a': {
    id: 'ex-int-4-2-a', lessonId: 'int-4-2', type: 'number-input',
    question: '[PRÜFUNG] Berechne die Fläche, die von f(x) = x² − 4 und der x-Achse eingeschlossen wird. (Tipp: Nullstellen bei x = ±2)',
    correctAnswer: 10.67,
    tolerance: 0.02,
    unit: 'FE',
    explanation: 'Nullstellen: x² − 4 = 0 → x = ±2. Auf [−2, 2] gilt f(x) ≤ 0, also A = |∫₋₂² (x²−4) dx| = |[x³/3 − 4x]₋₂²| = |(8/3 − 8) − (−8/3 + 8)| = |−16/3 − 16/3| = 32/3 ≈ 10,67 FE.',
    hints: ['f(x) = x²−4 ist auf [−2, 2] negativ — Betrag des Integrals nehmen!', 'Nutze Symmetrie: A = 2·|∫₀² (x²−4) dx|.'],
  },

  'ex-int-4-2-b': {
    id: 'ex-int-4-2-b', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Volumen des Rotationskörpers, der entsteht, wenn f(x) = √x auf [0, 4] um die x-Achse gedreht wird, berechnet sich zu:',
    options: [
      'V = π · ∫₀⁴ x dx = 8π',
      'V = π · ∫₀⁴ √x dx = (16π/3)',
      'V = π · ∫₀⁴ x² dx = (64π/3)',
      'V = 2π · ∫₀⁴ x·√x dx = (128π/5)',
    ],
    correctIndex: 0,
    explanation: 'Scheibenformel: V = π·∫ₐᵇ [f(x)]² dx = π·∫₀⁴ (√x)² dx = π·∫₀⁴ x dx = π·[x²/2]₀⁴ = π·8 = 8π.',
    hints: ['Rotationsvolumen um x-Achse: V = π·∫[f(x)]² dx.', '(√x)² = x. Dann ist das Integral einfach.'],
  },

  'ex-int-4-2-c': {
    id: 'ex-int-4-2-c', lessonId: 'int-4-2', type: 'number-input',
    question: '[PRÜFUNG] Berechne die Fläche zwischen f(x) = x² und g(x) = x auf [0, 1].',
    correctAnswer: 0.17,
    tolerance: 0.02,
    unit: 'FE',
    explanation: 'Auf [0, 1] gilt g(x) = x ≥ x² = f(x). A = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6 ≈ 0,167 FE.',
    hints: ['Welche Funktion ist auf (0,1) größer? Prüfe z.B. bei x=0,5: 0,5 > 0,25.', 'A = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹.'],
  },

  'ex-int-4-2-d': {
    id: 'ex-int-4-2-d', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Der x-Schwerpunkt einer homogenen Fläche unter f(x) ≥ 0 auf [a, b] berechnet sich als:',
    options: [
      'x̄ = ∫ₐᵇ x·f(x) dx',
      'x̄ = (∫ₐᵇ x·f(x) dx) / (∫ₐᵇ f(x) dx)',
      'x̄ = (1/2)·∫ₐᵇ [f(x)]² dx / ∫ₐᵇ f(x) dx',
      'x̄ = (b + a) / 2',
    ],
    correctIndex: 1,
    explanation: 'Der Schwerpunkt (Flächenschwerpunkt) in x-Richtung ist: x̄ = Mₓ / A = (∫ₐᵇ x·f(x) dx) / (∫ₐᵇ f(x) dx). Dabei ist A die Gesamtfläche und Mₓ das statische Moment. Das entspricht dem gewichteten Mittelwert von x, gewichtet mit f(x).',
    hints: ['x̄ = Moment / Fläche.', 'Das statische Moment Mₓ = ∫x·f(x) dx, die Fläche A = ∫f(x) dx.'],
  },

  'ex-int-4-2-e': {
    id: 'ex-int-4-2-e', lessonId: 'int-4-2', type: 'true-false',
    statement: '[PRÜFUNG] Der Schwerpunkt der Fläche unter f(x) = x auf [0, 2] liegt bei x̄ = 4/3.',
    correct: true,
    explanation: 'Fläche: A = ∫₀² x dx = [x²/2]₀² = 2. Statisches Moment: Mₓ = ∫₀² x·x dx = ∫₀² x² dx = [x³/3]₀² = 8/3. Schwerpunkt: x̄ = Mₓ/A = (8/3)/2 = 4/3 ✓',
    hints: ['Berechne A = ∫₀² x dx und Mₓ = ∫₀² x·x dx.', 'x̄ = Mₓ / A.'],
  },

  'ex-int-4-2-f': {
    id: 'ex-int-4-2-f', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein Bauteil hat das Querschnittsprofil f(x) = 2 auf [0, 3] (Rechteck). Welche Schnittgröße erhält man durch ∫₀³ f(x) dx?',
    options: [
      'Die Fläche des Querschnitts A = 6 m²',
      'Das Flächenträgheitsmoment I',
      'Den Schwerpunkt x̄',
      'Das Volumen eines Zylinders mit Radius 2',
    ],
    correctIndex: 0,
    explanation: '∫₀³ 2 dx = [2x]₀³ = 6. Das Integral einer konstanten Profil-Funktion über die Breite ergibt die Querschnittsfläche A. Für f(x) = 2 (Höhe 2, Breite 3) erhält man A = 2 · 3 = 6 m².',
    hints: ['Was bedeutet das Integral geometrisch?', 'Das bestimmte Integral = Fläche unter dem Graphen.'],
  },

  'ex-int-4-2-g': {
    id: 'ex-int-4-2-g', lessonId: 'int-4-2', type: 'number-input',
    question: '[PRÜFUNG] Berechne das Volumen des Rotationskörpers, der entsteht, wenn f(x) = 2 auf [0, 3] um die x-Achse gedreht wird. Gib das Ergebnis als Vielfaches von π an.',
    correctAnswer: 12,
    tolerance: 0.01,
    unit: '·π m³',
    explanation: 'V = π·∫₀³ [f(x)]² dx = π·∫₀³ 4 dx = π·[4x]₀³ = 12π m³. Das ist ein Zylinder mit Radius 2 und Länge 3: V = π·r²·l = π·4·3 = 12π ✓',
    hints: ['V = π·∫[f(x)]² dx = π·∫₀³ 2² dx.', 'Das Ergebnis ist ein Zylinder: V = π·r²·h.'],
  },

  'ex-int-4-2-h': {
    id: 'ex-int-4-2-h', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Kraft wirkt ortsabhängig: F(x) = 3x² N (x in Metern). Welche Arbeit verrichtet sie auf dem Weg von x = 0 bis x = 2 m?',
    options: ['W = 6 J', 'W = 8 J', 'W = 12 J', 'W = 24 J'],
    correctIndex: 1,
    explanation: 'Arbeit = ∫ F(x) dx. W = ∫₀² 3x² dx = [x³]₀² = 8 − 0 = 8 J. Allgemein: W = ∫ₐᵇ F(x) dx — das Integral der Kraft über den Weg ergibt die Arbeit.',
    hints: ['Arbeit = Integral der Kraft über den Weg: W = ∫ F(x) dx.', '∫3x² dx = x³.'],
  },

  'ex-int-4-2-i': {
    id: 'ex-int-4-2-i', lessonId: 'int-4-2', type: 'true-false',
    statement: '[PRÜFUNG] Das Flächenträgheitsmoment Iₓ = ∫∫ y² dA eines Rechtecks (Breite b, Höhe h) um die x-Achse ist Iₓ = b·h³/12.',
    correct: true,
    explanation: 'Für ein Rechteck (Querschnitt) mit Breite b und Höhe h, mittig auf der x-Achse zentriert: Iₓ = ∫₋ₕ/₂^(h/2) b·y² dy = b·[y³/3]₋ₕ/₂^(h/2) = b·(h³/24 − (−h³/24)) = b·h³/12. Dies ist eine zentrale Formel in der Technischen Mechanik.',
    hints: ['Iₓ = b·∫₋ₕ/₂^(h/2) y² dy. Das ist ein einfaches Integral.', '[y³/3]₋ₕ/₂^(h/2) = h³/24 − (−h³/24) = h³/12. Dann mal b.'],
  },

  'ex-int-4-2-j': {
    id: 'ex-int-4-2-j', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne die Bogenlänge von f(x) = x^(3/2) auf [0, 4]. Die Formel lautet L = ∫ₐᵇ √(1 + [f\'(x)]²) dx.',
    options: [
      'L = ∫₀⁴ √(1 + (9/4)x) dx',
      'L = ∫₀⁴ √(1 + x) dx',
      'L = ∫₀⁴ (1 + (3/2)√x) dx',
      'L = ∫₀⁴ √(1 + (3/2)x^(1/2)) dx',
    ],
    correctIndex: 0,
    explanation: 'f\'(x) = (3/2)·x^(1/2). [f\'(x)]² = (9/4)·x. Also L = ∫₀⁴ √(1 + (9/4)x) dx. (Das Ergebnis nach Substitution u = 1 + (9/4)x ist L = (8/27)·[(1 + (9/4)x)^(3/2)]₀⁴ ≈ 9,07.)',
    hints: ['f\'(x) = (3/2)·√x. Was ist [f\'(x)]²?', '(3/2)² = 9/4, also [f\'(x)]² = (9/4)·x.'],
  },

  'ex-int-4-2-mastery': {
    id: 'ex-int-4-2-mastery', lessonId: 'int-4-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Eine Parabel f(x) = −x² + 4 und g(x) = 0 begrenzen eine Fläche. Berechne das Volumen des Rotationskörpers (Drehung um x-Achse).',
    options: [
      'V = π·∫₋₂² (−x² + 4)² dx = (512π/15)',
      'V = π·∫₋₂² (x² − 4) dx',
      'V = 2π·∫₀² (−x² + 4) dx = 16π',
      'V = π·∫₀² (−x² + 4)² dx = (256π/15)',
    ],
    correctIndex: 0,
    explanation: 'f(x) = −x²+4 hat Nullstellen bei x=±2. Scheibenformel: V = π·∫₋₂² (−x²+4)² dx. (−x²+4)² = x⁴−8x²+16. ∫₋₂²(x⁴−8x²+16) dx = 2·∫₀²(x⁴−8x²+16) dx (Symmetrie) = 2·[x⁵/5−8x³/3+16x]₀² = 2·(32/5−64/3+32) = 2·(256/15) = 512/15. V = 512π/15.',
    hints: ['Scheibenformel: V = π·∫[f(x)]² dx. Nullstellen bestimmen die Grenzen.', '(−x²+4)² = x⁴−8x²+16. Nutze die Symmetrie um x=0.'],
  },

  // ── Lektion 4-3: Uneigentliche & numerische Integration ────────────────────
  'ex-int-4-3-a': {
    id: 'ex-int-4-3-a', lessonId: 'int-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Aussage zu uneigentlichen Integralen ist KORREKT?',
    options: [
      'Ein uneigentliches Integral konvergiert, wenn der Grenzwert $\\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$ existiert',
      'Uneigentliche Integrale haben nie einen endlichen Wert',
      'Sie sind dasselbe wie unbestimmte Integrale',
      'Sie sind nur über symmetrische Bereiche definiert',
    ],
    correctIndex: 0,
    explanation: 'Uneigentliche Integrale entstehen, wenn der Integrationsbereich unbeschränkt ist ($\\infty$) oder der Integrand bei einer Grenze divergiert. Sie konvergieren, wenn der Grenzwert existiert und endlich ist. Beispiel: $\\int_1^\\infty x^{-2} dx = 1$ konvergiert, $\\int_1^\\infty x^{-1} dx$ divergiert.',
    hints: ['Definition über Grenzwert.', 'Konvergenz hängt vom Abklingverhalten des Integranden ab.'],
  },
  'ex-int-4-3-b': {
    id: 'ex-int-4-3-b', lessonId: 'int-4-3', type: 'number-input',
    question: '[PRÜFUNG] Berechne $\\int_1^\\infty \\frac{1}{x^2}\\,dx$.',
    correctAnswer: 1,
    tolerance: 0.001,
    unit: '',
    explanation: '$\\int_1^b x^{-2}\\,dx = [-x^{-1}]_1^b = -1/b + 1$. Grenzwert für $b \\to \\infty$: $0 + 1 = 1$. Konvergent.',
    hints: ['Stammfunktion von $x^{-2}$ ist $-x^{-1}$.', 'Grenzwert für $b \\to \\infty$ bilden.'],
  },
  'ex-int-4-3-c': {
    id: 'ex-int-4-3-c', lessonId: 'int-4-3', type: 'true-false',
    statement: '[PRÜFUNG] Das Integral $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ ist uneigentlich (Singularität an der unteren Grenze) und konvergiert mit Wert $2$.',
    correct: true,
    explanation: 'Bei $x = 0$ wird $1/\\sqrt{x}$ unendlich. $\\int_a^1 x^{-1/2} dx = [2\\sqrt{x}]_a^1 = 2 - 2\\sqrt{a}$. Für $a \\to 0$: $2 - 0 = 2$. Konvergiert. Allgemein: $\\int_0^1 x^{-p} dx$ konvergiert für $p < 1$.',
    hints: ['Singularität bei der unteren Grenze: Grenzwert $a \\to 0^+$ bilden.', 'Stammfunktion: $2\\sqrt{x}$.'],
  },
  'ex-int-4-3-d': {
    id: 'ex-int-4-3-d', lessonId: 'int-4-3', type: 'matching',
    question: '[PRÜFUNG] Ordne die Vergleichskriterien für die Konvergenz von $\\int_1^\\infty x^{-p} dx$ zu.',
    pairs: [
      { left: '$p > 1$', right: 'Konvergent (Wert $1/(p-1)$)' },
      { left: '$p = 1$', right: 'Divergent ($\\ln$-Wachstum)' },
      { left: '$p < 1$', right: 'Divergent ($x^{1-p}$ wächst unbeschränkt)' },
      { left: '$p = 2$', right: 'Konvergent, Wert $1$' },
    ],
    explanation: 'Die p-Integrale sind die Standardvergleiche für Konvergenzfragen. Über $[1,\\infty)$: konvergent gdw. $p > 1$. Über $(0,1]$: konvergent gdw. $p < 1$ (umgekehrt!).',
    hints: ['Schlüsselgrenze ist $p = 1$ (Logarithmus).', 'Im Unendlichen: schnelles Abklingen nötig.'],
  },
  'ex-int-4-3-e': {
    id: 'ex-int-4-3-e', lessonId: 'int-4-3', type: 'number-input',
    question: '[PRÜFUNG] Numerische Integration mit Trapezregel: $\\int_0^1 x^2\\,dx$, Schrittweite $h = 0{,}5$ (3 Stützstellen). Berechne den Trapez-Näherungswert.',
    correctAnswer: 0.375,
    tolerance: 0.001,
    unit: '',
    explanation: 'Stützstellen: $x_0=0$, $x_1=0{,}5$, $x_2=1$ mit $f$-Werten $0$, $0{,}25$, $1$. Trapez: $T = h \\cdot (f_0/2 + f_1 + f_2/2) = 0{,}5 \\cdot (0 + 0{,}25 + 0{,}5) = 0{,}5 \\cdot 0{,}75 = 0{,}375$. Exakter Wert: $1/3 \\approx 0{,}333$ — Trapez überschätzt bei konvexen Funktionen.',
    hints: ['Trapezregel: $T = h \\cdot (f_0/2 + f_1 + \\ldots + f_{n-1} + f_n/2)$.', 'Bei nur 3 Punkten: $T = h(f_0/2 + f_1 + f_2/2)$.'],
  },
  'ex-int-4-3-f': {
    id: 'ex-int-4-3-f', lessonId: 'int-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Methode ist für $\\int_0^1 \\sqrt{1 - x^2}\\,dx$ am effizientesten?',
    options: [
      'Trigonometrische Substitution $x = \\sin u$ — liefert $\\pi/4$ (Viertelkreis-Fläche)',
      'Partielle Integration',
      'Partialbrüche',
      'Direkte Stammfunktion mit der Potenzregel',
    ],
    correctIndex: 0,
    explanation: '$x = \\sin u$, $dx = \\cos u\\,du$, $\\sqrt{1-x^2} = \\cos u$. Grenzen: $u = 0$ bis $\\pi/2$. Integral: $\\int_0^{\\pi/2} \\cos^2 u\\,du = \\pi/4$. Geometrisch: Viertel des Einheitskreises mit Fläche $\\pi/4$.',
    hints: ['$\\sqrt{1 - x^2}$ schreit nach trigonometrischer Substitution.', 'Geometrische Interpretation: Viertelkreis.'],
  },
  'ex-int-4-3-g': {
    id: 'ex-int-4-3-g', lessonId: 'int-4-3', type: 'sorting',
    question: '[PRÜFUNG] Bringe die Schritte zur Konvergenzprüfung eines uneigentlichen Integrals in die richtige Reihenfolge.',
    items: [
      'Singularitäten und unbeschränkte Bereiche identifizieren',
      'Integral als Grenzwert eines bestimmten Integrals schreiben',
      'Stammfunktion $F(x)$ ermitteln',
      'Grenzwert $\\lim F$ bilden',
      'Wenn Grenzwert endlich → konvergent; sonst divergent',
    ],
    correctOrder: [0, 1, 2, 3, 4],
    explanation: 'Grenzwertbildung ist der entscheidende Schritt. Bei mehreren Singularitäten: Integral aufteilen und jede Stelle separat prüfen.',
    hints: ['Erst die Singularitäten finden.', 'Stammfunktion → Grenzwert.'],
  },
  'ex-int-4-3-h': {
    id: 'ex-int-4-3-h', lessonId: 'int-4-3', type: 'number-input',
    question: '[PRÜFUNG] Berechne $\\int_0^\\infty e^{-x}\\,dx$.',
    correctAnswer: 1,
    tolerance: 0.001,
    unit: '',
    explanation: '$\\int_0^b e^{-x}\\,dx = [-e^{-x}]_0^b = -e^{-b} + 1$. Grenzwert $b \\to \\infty$: $-0 + 1 = 1$. Konvergiert. Diese Form taucht in der Wärmelehre, Diffusion und Wahrscheinlichkeitstheorie ständig auf.',
    hints: ['Stammfunktion: $-e^{-x}$.', '$e^{-b} \\to 0$ für $b \\to \\infty$.'],
  },
  'ex-int-4-3-i': {
    id: 'ex-int-4-3-i', lessonId: 'int-4-3', type: 'true-false',
    statement: '[PRÜFUNG] Die Simpson-Regel ist genauer als die Trapezregel, weil sie Polynome bis Grad 3 exakt integriert.',
    correct: true,
    explanation: 'Simpson nutzt eine quadratische Interpolation (3 Punkte → Parabel) und integriert diese exakt. Daher liefert sie Polynome bis Grad 3 fehlerfrei. Lokaler Fehler: $O(h^5)$, global $O(h^4)$ — deutlich besser als Trapez ($O(h^3)$ lokal, $O(h^2)$ global).',
    hints: ['Simpson basiert auf Parabel-Interpolation.', 'Höhere Konvergenzordnung als Trapez.'],
  },
  'ex-int-4-3-j': {
    id: 'ex-int-4-3-j', lessonId: 'int-4-3', type: 'number-input',
    question: '[PRÜFUNG] Berechne $\\int_0^\\infty x \\cdot e^{-x}\\,dx$ (uneigentlich, partielle Integration).',
    correctAnswer: 1,
    tolerance: 0.005,
    unit: '',
    explanation: 'Partielle Integration: $u = x$, $v\' = e^{-x}$, $u\' = 1$, $v = -e^{-x}$. $\\int x e^{-x}\\,dx = -x e^{-x} + \\int e^{-x}\\,dx = -x e^{-x} - e^{-x} = -(x+1)e^{-x}$. Bestimmtes Integral: $[-(x+1)e^{-x}]_0^\\infty = 0 - (-1) = 1$ (mit $\\lim_{x \\to \\infty} (x+1)e^{-x} = 0$).',
    hints: ['Partielle Integration mit $u = x$, $v\' = e^{-x}$.', 'Grenzwert $x e^{-x} \\to 0$ schneller als $x \\to \\infty$.'],
  },
  'ex-int-4-3-mastery': {
    id: 'ex-int-4-3-mastery', lessonId: 'int-4-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welche Aussage zu $\\int_0^\\infty \\frac{1}{1+x^2}\\,dx$ ist korrekt?',
    options: [
      'Konvergent mit Wert $\\pi/2$ (Stammfunktion: $\\arctan x$)',
      'Divergent, weil $1/(1+x^2)$ nicht abklingt',
      'Konvergent mit Wert $\\pi$',
      'Konvergent mit Wert $1$',
    ],
    correctIndex: 0,
    explanation: 'Stammfunktion: $\\arctan x$. $[\\arctan x]_0^b = \\arctan b - 0$. Grenzwert: $\\arctan(\\infty) = \\pi/2$. Konvergent. Dieses Integral spielt in der Wahrscheinlichkeit (Cauchy-Verteilung) und Signalverarbeitung eine zentrale Rolle.',
    hints: ['Stammfunktion: $\\arctan x$.', '$\\arctan(\\infty) = \\pi/2$.'],
  },
}

const lessons_int_u4 = [
  {
    id: 'int-4-1', unitId: 'int-unit-4',
    title: 'Prüfung: Integrationstechniken',
    order: 1, estimatedMinutes: 25,
    learningGoals: [
      'Substitution, partielle Integration und Partialbrüche auf Prüfungsniveau anwenden',
      'Bestimmte Integrale sicher berechnen',
      'Die geeignete Integrationsmethode erkennen und einsetzen',
    ],
    prerequisites: [],
    nextLessonId: 'int-4-2',
    steps: [
      {
        id: 'int-4-1-s1', type: 'explanation-formal', title: 'Prüfungsstrategie Integrationstechniken',
        content: `**Prüfungsaufgaben Integrationstechniken** — Erkennungsmuster:

**1. Substitution** — wenn der Integrand eine innere Funktion hat, deren Ableitung (bis auf Konstante) ebenfalls vorkommt:
$$\\int f(g(x)) \\cdot g'(x)\\,dx \\xrightarrow{u = g(x)} \\int f(u)\\,du$$

**2. Partielle Integration** — bei Produkten aus Polynom·Exponential, Polynom·Trig oder Polynom·ln:
$$\\int u \\cdot v'\\,dx = u \\cdot v - \\int u' \\cdot v\\,dx$$
Merkregel für u: **L**ogarithmus > **I**nvers-trig > **P**olynom > **T**rigonometrie > **E**xponential

**3. Partialbrüche** — bei gebrochenrationalen Funktionen (Zählergrad < Nennergrad):
$$\\frac{1}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$$

**4. Halbwinkelformeln** — für sin²(x) oder cos²(x):
$$\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}, \\quad \\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$$

**Wichtig bei bestimmten Integralen:** Bei Substitution auch die Grenzen umrechnen!`,
      },
      { id: 'int-4-1-s2', type: 'exercise', title: 'Aufgabe 1 — Substitution', exerciseRef: 'ex-int-4-1-a' },
      { id: 'int-4-1-s3', type: 'exercise', title: 'Aufgabe 2 — Partielle Integration', exerciseRef: 'ex-int-4-1-b' },
      { id: 'int-4-1-s4', type: 'exercise', title: 'Aufgabe 3 — Partialbrüche', exerciseRef: 'ex-int-4-1-c' },
      { id: 'int-4-1-s5', type: 'exercise', title: 'Aufgabe 4 — Bestimmtes Integral', exerciseRef: 'ex-int-4-1-d' },
      { id: 'int-4-1-s6', type: 'exercise', title: 'Aufgabe 5 — Halbwinkelformel', exerciseRef: 'ex-int-4-1-e' },
      { id: 'int-4-1-s7', type: 'exercise', title: 'Aufgabe 6 — Symmetrie', exerciseRef: 'ex-int-4-1-f' },
      { id: 'int-4-1-s8', type: 'exercise', title: 'Aufgabe 7 — Trigonometrische Substitution', exerciseRef: 'ex-int-4-1-g' },
      { id: 'int-4-1-s9', type: 'exercise', title: 'Aufgabe 8 — ln-Integral', exerciseRef: 'ex-int-4-1-h' },
      { id: 'int-4-1-s10', type: 'exercise', title: 'Aufgabe 9 — Partialbrüche True/False', exerciseRef: 'ex-int-4-1-i' },
      { id: 'int-4-1-s11', type: 'exercise', title: 'Aufgabe 10 — Zweifache partielle Integration', exerciseRef: 'ex-int-4-1-j' },
      { id: 'int-4-1-s12', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-int-4-1-mastery' },
    ],
  },
  {
    id: 'int-4-2', unitId: 'int-unit-4',
    title: 'Prüfung: Anwendungen der Integralrechnung',
    order: 2, estimatedMinutes: 25,
    learningGoals: [
      'Flächen zwischen Kurven und Rotationsvolumina berechnen',
      'Schwerpunkte und technische Kenngrößen mit Integralen bestimmen',
      'Technische Anwendungen (Arbeit, Trägheitsmoment, Bogenlänge) lösen',
    ],
    prerequisites: [],
    nextLessonId: 'int-4-3',
    steps: [
      {
        id: 'int-4-2-s1', type: 'explanation-intuitive', title: 'Anwendungen in der Prüfung',
        content: `**Technische Anwendungen der Integralrechnung** — die häufigsten Prüfungsaufgaben:

**Flächenberechnung** (zwischen zwei Kurven):
$$A = \\int_a^b [f(x) - g(x)]\\,dx \\quad \\text{mit } f(x) \\geq g(x)$$
Achtung: Vorzeichenwechsel berücksichtigen — Betrag nehmen!

**Rotationsvolumen** (Scheibenformel, Drehung um x-Achse):
$$V = \\pi \\cdot \\int_a^b [f(x)]^2\\,dx$$

**Schwerpunkt** einer Fläche unter f(x) ≥ 0:
$$\\bar{x} = \\frac{\\int_a^b x \\cdot f(x)\\,dx}{\\int_a^b f(x)\\,dx}, \\quad \\bar{y} = \\frac{\\frac{1}{2}\\int_a^b [f(x)]^2\\,dx}{\\int_a^b f(x)\\,dx}$$

**Arbeit** einer ortsabhängigen Kraft:
$$W = \\int_{x_1}^{x_2} F(x)\\,dx$$

**Flächenträgheitsmoment** (Rechteck, Breite b, Höhe h):
$$I_x = \\frac{b \\cdot h^3}{12}$$

**Bogenlänge**:
$$L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$$`,
      },
      { id: 'int-4-2-s2', type: 'exercise', title: 'Aufgabe 1 — Fläche unter Parabel', exerciseRef: 'ex-int-4-2-a' },
      { id: 'int-4-2-s3', type: 'exercise', title: 'Aufgabe 2 — Rotationsvolumen', exerciseRef: 'ex-int-4-2-b' },
      { id: 'int-4-2-s4', type: 'exercise', title: 'Aufgabe 3 — Fläche zwischen Kurven', exerciseRef: 'ex-int-4-2-c' },
      { id: 'int-4-2-s5', type: 'exercise', title: 'Aufgabe 4 — Schwerpunktformel', exerciseRef: 'ex-int-4-2-d' },
      { id: 'int-4-2-s6', type: 'exercise', title: 'Aufgabe 5 — Schwerpunkt berechnen', exerciseRef: 'ex-int-4-2-e' },
      { id: 'int-4-2-s7', type: 'exercise', title: 'Aufgabe 6 — Technische Interpretation', exerciseRef: 'ex-int-4-2-f' },
      { id: 'int-4-2-s8', type: 'exercise', title: 'Aufgabe 7 — Rotationsvolumen Zylinder', exerciseRef: 'ex-int-4-2-g' },
      { id: 'int-4-2-s9', type: 'exercise', title: 'Aufgabe 8 — Arbeit einer Kraft', exerciseRef: 'ex-int-4-2-h' },
      { id: 'int-4-2-s10', type: 'exercise', title: 'Aufgabe 9 — Trägheitsmoment', exerciseRef: 'ex-int-4-2-i' },
      { id: 'int-4-2-s11', type: 'exercise', title: 'Aufgabe 10 — Bogenlänge', exerciseRef: 'ex-int-4-2-j' },
      { id: 'int-4-2-s12', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-int-4-2-mastery' },
    ],
  },
  {
    id: 'int-4-3', unitId: 'int-unit-4',
    title: 'Prüfung: Uneigentliche & numerische Integrale',
    order: 3, estimatedMinutes: 30,
    learningGoals: [
      'Uneigentliche Integrale erkennen und auf Konvergenz prüfen',
      'p-Integrale als Vergleichsmaßstab nutzen',
      'Numerische Integration (Trapez, Simpson) anwenden und Fehler abschätzen',
      'Komplexe Integrale durch Methodenmix lösen',
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'int-4-3-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Uneigentliche & numerische Integrale',
        content: `**Uneigentliche Integrale** entstehen, wenn:
- Der Integrationsbereich unbeschränkt ist: $\\int_a^\\infty f(x)\\,dx$
- Der Integrand bei einer Grenze divergiert: $\\int_a^b f(x)\\,dx$ mit $f(x) \\to \\infty$ bei $x \\to a$ oder $b$

**Definition über Grenzwert:**
$$\\int_a^\\infty f(x)\\,dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$$

Existiert der Grenzwert und ist endlich → konvergent. Sonst → divergent.

**p-Integrale (Standardvergleich):**

| $\\int_1^\\infty x^{-p} dx$ | $\\int_0^1 x^{-p} dx$ |
|---|---|
| $p > 1$: konvergent ($1/(p-1)$) | $p < 1$: konvergent |
| $p \\leq 1$: divergent | $p \\geq 1$: divergent |

---

**Numerische Integration** — wenn keine elementare Stammfunktion existiert oder nur Messwerte vorliegen:

**Trapezregel:** $T = h \\cdot \\left( \\frac{f_0 + f_n}{2} + \\sum_{i=1}^{n-1} f_i \\right)$, Fehler $O(h^2)$

**Simpson-Regel** (nur für gerades $n$): $S = \\frac{h}{3} \\left( f_0 + 4 \\sum_{\\text{ungerade}} f_i + 2 \\sum_{\\text{gerade}} f_i + f_n \\right)$, Fehler $O(h^4)$

Simpson ist deutlich genauer — integriert Polynome bis Grad 3 exakt.

---

**Standard-uneigentliche Integrale (auswendig):**

| Integral | Wert |
|---|---|
| $\\int_0^\\infty e^{-x}\\,dx$ | $1$ |
| $\\int_0^\\infty x \\cdot e^{-x}\\,dx$ | $1$ |
| $\\int_{-\\infty}^\\infty \\frac{1}{1+x^2}\\,dx$ | $\\pi$ |
| $\\int_0^\\infty e^{-x^2}\\,dx$ | $\\sqrt{\\pi}/2$ |

**Prüfungsfallen:**
- Konvergenz übersehen → falsche Anwendung der Stammfunktion ohne Grenzwert
- Trapezregel-Endfaktoren $1/2$ vergessen
- Simpson nur mit gerader Anzahl Teilintervallen anwendbar`,
      },
      { id: 'int-4-3-s2', type: 'exercise', title: 'Aufgabe 1: Konvergenzdefinition', exerciseRef: 'ex-int-4-3-a' },
      { id: 'int-4-3-s3', type: 'exercise', title: 'Aufgabe 2: Konvergente p-Integrale', exerciseRef: 'ex-int-4-3-b' },
      { id: 'int-4-3-s4', type: 'exercise', title: 'Aufgabe 3: Singularität bei 0', exerciseRef: 'ex-int-4-3-c' },
      { id: 'int-4-3-s5', type: 'exercise', title: 'Aufgabe 4: p-Vergleich', exerciseRef: 'ex-int-4-3-d' },
      { id: 'int-4-3-s6', type: 'exercise', title: 'Aufgabe 5: Trapezregel anwenden', exerciseRef: 'ex-int-4-3-e' },
      { id: 'int-4-3-s7', type: 'exercise', title: 'Aufgabe 6: Trigonometrische Substitution', exerciseRef: 'ex-int-4-3-f' },
      { id: 'int-4-3-s8', type: 'exercise', title: 'Aufgabe 7: Konvergenzanalyse-Schritte', exerciseRef: 'ex-int-4-3-g' },
      { id: 'int-4-3-s9', type: 'exercise', title: 'Aufgabe 8: Exponential bis ∞', exerciseRef: 'ex-int-4-3-h' },
      { id: 'int-4-3-s10', type: 'exercise', title: 'Aufgabe 9: Trapez vs. Simpson', exerciseRef: 'ex-int-4-3-i' },
      { id: 'int-4-3-s11', type: 'exercise', title: 'Aufgabe 10: Partielle Integration uneigentlich', exerciseRef: 'ex-int-4-3-j' },
      { id: 'int-4-3-s12', type: 'mastery-check', title: 'Prüfungsfrage: Cauchy-Integral', exerciseRef: 'ex-int-4-3-mastery' },
    ],
  },
]

export const int_unit4 = {
  id: 'int-unit-4',
  title: 'Prüfungsaufgaben',
  order: 4,
  description: 'Aufgaben auf TU Wien Prüfungsniveau — Integrationstechniken und technische Anwendungen',
  lessons: lessons_int_u4,
  exercises: exercises_int_u4,
}
