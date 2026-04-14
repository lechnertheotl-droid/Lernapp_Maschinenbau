// ── Python & Matlab für Maschinenbau ────────────────────────────────────────
// Praxisrelevante Programmier-Skills für TU Wien MB-Studium.

function exerciseId(lessonId, index) {
  return `ex-${lessonId}-${String.fromCharCode(97 + index)}`
}

function expandExplanation(lesson) {
  return `${lesson.content}

**Arbeitsmuster für Programmieraufgaben:**
1. Kläre zuerst Eingaben, Ausgabe und Datentypen.
2. Schreibe die Lösung in kleinen Schritten: Variablen anlegen, Berechnung, Ausgabe/Plot.
3. Prüfe Indizes bewusst: Python startet bei 0, Matlab bei 1.
4. Teste den Code mit kleinen Zahlen, deren Ergebnis du im Kopf prüfen kannst.
5. Vergleiche bei NumPy/Matlab elementweise Operatoren mit Matrixoperationen.

**Typische Fehler:** Zuweisung mit Vergleich verwechseln, Stern statt Matrixmultiplikation in NumPy nutzen, in Matlab Potenz statt elementweiser Potenz schreiben, Schleifengrenzen falsch lesen oder Plots ohne Achsen-/Einheitenkontext interpretieren.`
}

function buildTopic(def) {
  const allLessons = def.units.flatMap((unit) => unit.lessons)
  const nextById = Object.fromEntries(allLessons.map((lesson, index) => [lesson.id, allLessons[index + 1]?.id ?? null]))

  const units = def.units.map((unit, unitIndex) => {
    const exercises = {}
    const lessons = unit.lessons.map((lesson, lessonIndex) => {
      const exerciseSteps = lesson.exercises.map((exercise, exerciseIndex) => {
        const id = exerciseId(lesson.id, exerciseIndex)
        exercises[id] = {
          id,
          lessonId: lesson.id,
          isMasteryCheck: exerciseIndex === lesson.exercises.length - 1,
          hints: exercise.hints ?? [],
          ...exercise,
        }
        return {
          id: `${lesson.id}-s${exerciseIndex + 3}`,
          type: exerciseIndex === lesson.exercises.length - 1 ? 'mastery-check' : 'exercise',
          title: exerciseIndex === lesson.exercises.length - 1 ? 'Verständnischeck' : `Aufgabe ${exerciseIndex + 1}`,
          exerciseRef: id,
        }
      })

      return {
        id: lesson.id,
        unitId: unit.id,
        title: lesson.title,
        order: lessonIndex + 1,
        estimatedMinutes: lesson.estimatedMinutes ?? 10,
        learningGoals: lesson.learningGoals,
        prerequisites: lesson.prerequisites ?? [],
        nextLessonId: nextById[lesson.id],
        steps: [
          {
            id: `${lesson.id}-s1`,
            type: lesson.type ?? 'explanation-formal',
            title: lesson.explanationTitle ?? lesson.title,
            content: expandExplanation(lesson),
          },
          ...exerciseSteps,
        ],
      }
    })

    return {
      id: unit.id,
      title: unit.title,
      order: unitIndex + 1,
      description: unit.description,
      lessons,
      exercises,
    }
  })

  return { ...def.topic, units }
}

// ─────────────────────────────────────────────────────────────────────────────

const pythonMatlabTopic = buildTopic({
  topic: {
    id: 'python-matlab',
    title: 'Python & Matlab',
    description: 'Programmier-Grundlagen und numerische Methoden für Maschinenbau an der TU Wien.',
    subject: 'programming',
    icon: 'PY',
    color: 'blue',
    estimatedHours: 10,
    difficulty: 2,
    prerequisites: [],
  },
  units: [
    // ── Unit 1: Python Grundlagen ──────────────────────────────────────
    {
      id: 'py-unit-1',
      title: 'Python Grundlagen',
      description: 'Variablen, Datentypen, Kontrollstrukturen und Funktionen.',
      lessons: [
        {
          id: 'py-1-1',
          title: 'Variablen & Datentypen',
          learningGoals: ['Variablen zuweisen und benennen', 'int, float, string und bool unterscheiden', 'Typumwandlungen durchführen'],
          content: String.raw`In Python brauchst du **keinen Typ** bei der Deklaration — der Interpreter erkennt ihn automatisch.

**Grundtypen:**
| Typ | Beispiel | Beschreibung |
|---|---|---|
| \`int\` | \`x = 42\` | Ganze Zahl |
| \`float\` | \`y = 3.14\` | Dezimalzahl |
| \`str\` | \`s = "Hallo"\` | Zeichenkette |
| \`bool\` | \`b = True\` | Wahrheitswert |

**Typumwandlung:**

\`\`\`python
x = int("42")      # str → int
y = float(7)       # int → float
s = str(3.14)      # float → str
\`\`\`

**Namenskonventionen:** Variablennamen in Python sind \`snake_case\` (Kleinbuchstaben + Unterstriche): \`mein_wert\`, \`kraft_in_newton\`.

**Matlab-Vergleich:** In Matlab gibt es keine explizite Typdeklaration ähnlich wie in Python. Alles ist standardmäßig \`double\`. Strings: \`s = "Hallo"\` oder \`s = 'Hallo'\`.`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welchen Typ hat `x` nach `x = 3.0` in Python?',
              options: ['int', 'float', 'str', 'double'],
              correctIndex: 1,
              explanation: '`3.0` hat einen Dezimalpunkt, daher ist der Typ `float`.',
              hints: ['Achte auf den Dezimalpunkt.'],
            },
            {
              type: 'multiple-choice',
              question: 'Was ergibt `type(True)` in Python?',
              options: ['<class \'int\'>', '<class \'bool\'>', '<class \'str\'>', '<class \'logical\'>'],
              correctIndex: 1,
              explanation: '`True` und `False` sind vom Typ `bool`.',
              hints: ['True und False sind die beiden Wahrheitswerte in Python.'],
            },
            {
              type: 'true-false',
              statement: 'In Python muss man den Datentyp einer Variable bei der Deklaration angeben.',
              correct: false,
              explanation: 'Python ist dynamisch typisiert — der Typ wird automatisch erkannt.',
              hints: ['Python ist eine dynamisch typisierte Sprache.'],
            },
          ],
        },
        {
          id: 'py-1-2',
          title: 'Operatoren & Ausdrücke',
          learningGoals: ['Arithmetische Operatoren anwenden', 'Ganzzahldivision und Modulo verstehen', 'Vergleichs- und logische Operatoren verwenden'],
          content: String.raw`**Arithmetische Operatoren:**
| Operator | Python | Matlab | Bedeutung |
|---|---|---|---|
| Addition | \`+\` | \`+\` | Summe |
| Subtraktion | \`-\` | \`-\` | Differenz |
| Multiplikation | \`*\` | \`*\` | Produkt |
| Division | \`/\` | \`/\` | Quotient (float) |
| Ganzzahldivision | \`//\` | \`floor(a/b)\` | Abgerundeter Quotient |
| Modulo | \`%\` | \`mod(a,b)\` | Rest der Division |
| Potenz | \`**\` | \`^\` | Potenzierung |

**Wichtig:** In Python liefert \`/\` immer ein \`float\`: \`7 / 2 = 3.5\`. Für den ganzzahligen Anteil: \`7 // 2 = 3\`.

**Vergleichsoperatoren:** \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` — liefern \`True\` oder \`False\`.

**Logische Operatoren:**
- Python: \`and\`, \`or\`, \`not\`
- Matlab: \`&&\`, \`||\`, \`~\`

**Operatorreihenfolge:** Wie in Mathe: Klammern → Potenz → Punkt → Strich. Im Zweifel: Klammern setzen!`,
          exercises: [
            {
              type: 'number-input',
              question: 'Was ergibt `17 // 5` in Python?',
              correctAnswer: 3,
              tolerance: 0,
              unit: '',
              explanation: '`17 // 5 = 3` — Ganzzahldivision rundet ab (17 ÷ 5 = 3.4 → 3).',
              hints: ['`//` rundet immer nach unten ab.', '17 ÷ 5 = 3 Rest 2'],
            },
            {
              type: 'number-input',
              question: 'Was ergibt `17 % 5` in Python?',
              correctAnswer: 2,
              tolerance: 0,
              unit: '',
              explanation: '`17 % 5 = 2` — der Rest der Division (17 = 3×5 + 2).',
              hints: ['`%` gibt den Rest der Division zurück.'],
            },
            {
              type: 'multiple-choice',
              question: 'Was ergibt `2 ** 3 + 1` in Python?',
              options: ['7', '8', '9', '16'],
              correctIndex: 2,
              explanation: '`2 ** 3 = 8`, dann `8 + 1 = 9`. Potenz wird vor Addition ausgewertet.',
              hints: ['Potenz hat höhere Priorität als Addition.'],
            },
          ],
        },
        {
          id: 'py-1-3',
          title: 'Listen & Arrays',
          learningGoals: ['Python-Listen erstellen und manipulieren', 'Slicing und Indizierung verstehen', 'NumPy Arrays für Berechnungen nutzen'],
          content: String.raw`**Python-Listen:**
\`\`\`python
werte = [1, 2, 3, 4, 5]
werte[0]       # → 1  (erstes Element!)
werte[-1]      # → 5  (letztes Element)
werte[1:3]     # → [2, 3]  (Slicing: Index 1 bis 2)
werte.append(6)  # → [1, 2, 3, 4, 5, 6]
len(werte)     # → 6
\`\`\`

**WICHTIG:** Python zählt ab **0**, Matlab ab **1**!

| Operation | Python | Matlab |
|---|---|---|
| Erstes Element | \`a[0]\` | \`a(1)\` |
| Letztes Element | \`a[-1]\` | \`a(end)\` |
| Bereich | \`a[1:4]\` | \`a(2:4)\` |
| Länge | \`len(a)\` | \`length(a)\` |

**NumPy Arrays** — der Standard für numerisches Rechnen:
\`\`\`python
import numpy as np
a = np.array([1, 2, 3, 4])
a * 2          # → array([2, 4, 6, 8])  — elementweise!
a ** 2         # → array([1, 4, 9, 16])
np.sum(a)      # → 10
np.mean(a)     # → 2.5
\`\`\`

In **Matlab** sind alle Variablen standardmäßig Arrays/Matrizen:
\`\`\`matlab
a = [1, 2, 3, 4];
a * 2      % → [2, 4, 6, 8]
a .^ 2     % → [1, 4, 9, 16]  (Punkt = elementweise!)
sum(a)     % → 10
mean(a)    % → 2.5
\`\`\``,
          exercises: [
            {
              type: 'number-input',
              question: 'Gegeben: `a = [10, 20, 30, 40, 50]`. Was ergibt `a[2]` in Python?',
              correctAnswer: 30,
              tolerance: 0,
              unit: '',
              explanation: 'Python zählt ab 0: a[0]=10, a[1]=20, a[2]=30.',
              hints: ['Python beginnt die Indizierung bei 0, nicht bei 1.'],
            },
            {
              type: 'true-false',
              statement: 'In Matlab gibt `a(0)` das erste Element eines Arrays zurück.',
              correct: false,
              explanation: 'Matlab zählt ab 1! Das erste Element ist `a(1)`. `a(0)` gibt einen Fehler.',
              hints: ['Matlab beginnt bei einem anderen Index als Python.'],
            },
            {
              type: 'multiple-choice',
              question: 'Welcher Befehl erzeugt in Python ein NumPy-Array mit den Werten 1 bis 5?',
              options: ['np.array(1, 5)', 'np.arange(1, 6)', 'np.range(1, 5)', 'np.linspace(1, 5)'],
              correctIndex: 1,
              explanation: '`np.arange(1, 6)` erzeugt `[1, 2, 3, 4, 5]`. Der Endwert ist exklusiv!',
              hints: ['`arange` funktioniert ähnlich wie `range` — der Endwert ist nicht enthalten.'],
            },
          ],
        },
        {
          id: 'py-1-4',
          title: 'Kontrollstrukturen',
          learningGoals: ['if/elif/else Verzweigungen schreiben', 'for- und while-Schleifen anwenden', 'Unterschiede zwischen Python und Matlab kennen'],
          content: String.raw`**If-Verzweigung:**
\`\`\`python
# Python                        # Matlab
if x > 0:                       # if x > 0
    print("positiv")            #     disp('positiv')
elif x == 0:                    # elseif x == 0
    print("null")               #     disp('null')
else:                           # else
    print("negativ")            #     disp('negativ')
                                # end
\`\`\`

**Wichtig:** Python nutzt **Einrückung** statt \`end\`! Matlab nutzt \`end\` zum Schließen.

**For-Schleife:**
\`\`\`python
# Python                        # Matlab
for i in range(5):              # for i = 0:4
    print(i)                    #     disp(i)
                                # end
\`\`\`

**While-Schleife:**
\`\`\`python
# Python                        # Matlab
n = 1                           # n = 1;
while n < 100:                  # while n < 100
    n = n * 2                   #     n = n * 2;
                                # end
\`\`\`

**Häufigster Fehler:** Vergessener Doppelpunkt \`:\` am Ende der if/for/while-Zeile in Python!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Was gibt dieser Code aus?\n```python\nfor i in range(3):\n    print(i)\n```',
              options: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'],
              correctIndex: 1,
              explanation: '`range(3)` erzeugt 0, 1, 2 — drei Werte, startend bei 0.',
              hints: ['`range(n)` beginnt bei 0 und endet bei n-1.'],
            },
            {
              type: 'true-false',
              statement: 'In Python wird ein Codeblock durch geschweifte Klammern `{}` definiert.',
              correct: false,
              explanation: 'Python nutzt Einrückung (Indentation) statt Klammern für Codeblöcke.',
              hints: ['Welche Sprache nutzt Klammern, welche Einrückung?'],
            },
            {
              type: 'multiple-choice',
              question: 'Wie lautet das Matlab-Äquivalent zu `for i in range(1, 6):`?',
              options: ['for i = 1:6', 'for i = 1:5', 'for i = 0:5', 'for i in 1:5'],
              correctIndex: 1,
              explanation: '`range(1, 6)` gibt 1,2,3,4,5. In Matlab: `for i = 1:5` (Endwert inklusive).',
              hints: ['In Matlab ist der Endwert inklusive, in Python exklusiv.'],
            },
          ],
        },
        {
          id: 'py-1-5',
          title: 'Funktionen definieren',
          learningGoals: ['Eigene Funktionen schreiben', 'Parameter und Rückgabewerte verstehen', 'Lambda-Ausdrücke kennen'],
          content: String.raw`**Python-Funktion:**
\`\`\`python
def kraft(masse, beschleunigung=9.81):
    """Berechnet die Kraft F = m · a."""
    return masse * beschleunigung

# Aufruf:
f = kraft(10)        # → 98.1  (Standard g)
f = kraft(10, 5)     # → 50
\`\`\`

**Matlab-Funktion** (in eigener Datei \`kraft.m\`):
\`\`\`matlab
function F = kraft(m, a)
    if nargin < 2
        a = 9.81;
    end
    F = m * a;
end
\`\`\`

**Default-Parameter:** Python erlaubt Standardwerte direkt in der Signatur. In Matlab nutzt man \`nargin\`.

**Lambda-Funktionen** (Einzeiler):
\`\`\`python
quadrat = lambda x: x ** 2
quadrat(5)  # → 25
\`\`\`

Matlab-Äquivalent — **Anonymous Functions:**
\`\`\`matlab
quadrat = @(x) x.^2;
quadrat(5)  % → 25
\`\`\`

**Tipp:** Nutze Funktionen, um Berechnungen wiederverwendbar zu machen. Jede Formel aus dem Maschinenbau kann eine Funktion werden!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Was gibt `kraft(5)` zurück, wenn `def kraft(m, a=9.81): return m * a`?',
              options: ['5', '9.81', '49.05', 'Fehler'],
              correctIndex: 2,
              explanation: '`kraft(5)` nutzt den Standardwert `a=9.81`: 5 × 9.81 = 49.05.',
              hints: ['Wenn `a` nicht angegeben wird, wird der Standardwert verwendet.'],
            },
            {
              type: 'multiple-choice',
              question: 'Wie definiert man in Matlab eine anonyme Funktion f(x) = sin(x)/x?',
              options: ['f = @(x) sin(x)/x', 'f = lambda x: sin(x)/x', 'def f(x) = sin(x)/x', 'function f = sin(x)/x'],
              correctIndex: 0,
              explanation: 'In Matlab: `@(x)` definiert eine anonyme Funktion mit Parameter `x`.',
              hints: ['Matlab nutzt das `@`-Symbol für anonyme Funktionen.'],
            },
            {
              type: 'true-false',
              statement: 'Eine Python-Funktion kann mehrere Werte gleichzeitig zurückgeben.',
              correct: true,
              explanation: 'Ja! `return a, b, c` gibt ein Tuple zurück: `x, y, z = funktion()`.',
              hints: ['Denke an Tuples.'],
            },
          ],
        },
      ],
    },

    // ── Unit 2: Numerisches Rechnen ────────────────────────────────────
    {
      id: 'py-unit-2',
      title: 'Numerisches Rechnen',
      description: 'NumPy, Plotting und numerische Methoden für technische Berechnungen.',
      lessons: [
        {
          id: 'py-2-1',
          title: 'NumPy Grundlagen',
          learningGoals: ['NumPy importieren und Arrays erzeugen', 'Elementweise Operationen durchführen', 'Matrizen erstellen und multiplizieren'],
          content: String.raw`**NumPy** ist die Grundlage für numerisches Rechnen in Python — das Äquivalent zur Matlab-Grundumgebung.

**Arrays erzeugen:**
\`\`\`python
import numpy as np

a = np.array([1, 2, 3])           # aus Liste
z = np.zeros(5)                    # [0, 0, 0, 0, 0]
e = np.ones((3, 3))               # 3×3 Einser-Matrix
I = np.eye(3)                      # 3×3 Einheitsmatrix
x = np.linspace(0, 10, 100)       # 100 Punkte von 0 bis 10
r = np.arange(0, 2*np.pi, 0.01)   # wie range, aber für floats
\`\`\`

**Matlab-Vergleich:**
| Python (NumPy) | Matlab | Beschreibung |
|---|---|---|
| \`np.zeros((3,3))\` | \`zeros(3,3)\` | Nullmatrix |
| \`np.ones((2,4))\` | \`ones(2,4)\` | Einsermatrix |
| \`np.eye(3)\` | \`eye(3)\` | Einheitsmatrix |
| \`np.linspace(0,1,50)\` | \`linspace(0,1,50)\` | Gleichverteilte Punkte |
| \`a.shape\` | \`size(a)\` | Dimensionen |
| \`a @ b\` | \`a * b\` | Matrixmultiplikation |
| \`a * b\` | \`a .* b\` | Elementweise Multiplikation |

**Achtung:** In Python ist \`*\` elementweise und \`@\` die Matrixmultiplikation. In Matlab ist es genau umgekehrt!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welcher Befehl erzeugt eine 3×3 Einheitsmatrix in NumPy?',
              options: ['np.ones((3,3))', 'np.eye(3)', 'np.identity((3,3))', 'np.unit(3)'],
              correctIndex: 1,
              explanation: '`np.eye(3)` erzeugt die 3×3 Einheitsmatrix (1 auf Diagonale, 0 sonst).',
              hints: ['eye = I = Identitätsmatrix'],
            },
            {
              type: 'true-false',
              statement: 'In NumPy führt `A * B` eine Matrixmultiplikation durch.',
              correct: false,
              explanation: '`A * B` ist elementweise! Für Matrixmultiplikation: `A @ B` oder `np.dot(A, B)`.',
              hints: ['Was bedeutet `*` vs `@` in NumPy?'],
            },
            {
              type: 'multiple-choice',
              question: 'Was ist das Matlab-Äquivalent zu `np.linspace(0, 2*np.pi, 100)`?',
              options: ['arange(0, 2*pi, 100)', 'linspace(0, 2*pi, 100)', 'range(0, 2*pi, 100)', '0:0.01:2*pi'],
              correctIndex: 1,
              explanation: '`linspace` funktioniert in beiden Sprachen gleich — Startpunkt, Endpunkt, Anzahl Punkte.',
              hints: ['Diese Funktion heißt in beiden Sprachen gleich.'],
            },
          ],
        },
        {
          id: 'py-2-2',
          title: 'Matplotlib — Daten visualisieren',
          learningGoals: ['Linien- und Scatterplots erstellen', 'Achsen beschriften und formatieren', 'Mehrere Kurven in einem Plot darstellen'],
          content: String.raw`**Matplotlib** ist die Standard-Plotbibliothek — funktioniert sehr ähnlich wie Matlab:

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2*np.pi, 100)
y1 = np.sin(x)
y2 = np.cos(x)

plt.figure(figsize=(8, 4))
plt.plot(x, y1, 'b-', label='sin(x)')
plt.plot(x, y2, 'r--', label='cos(x)')
plt.xlabel('x [rad]')
plt.ylabel('y')
plt.title('Trigonometrische Funktionen')
plt.legend()
plt.grid(True)
plt.savefig('trig.png', dpi=150)
plt.show()
\`\`\`

**Matlab-Vergleich:**
\`\`\`matlab
x = linspace(0, 2*pi, 100);
plot(x, sin(x), 'b-', x, cos(x), 'r--')
xlabel('x [rad]')
ylabel('y')
title('Trigonometrische Funktionen')
legend('sin(x)', 'cos(x)')
grid on
\`\`\`

**Plottypen:**
| Typ | Python | Matlab |
|---|---|---|
| Linie | \`plt.plot(x, y)\` | \`plot(x, y)\` |
| Punkte | \`plt.scatter(x, y)\` | \`scatter(x, y)\` |
| Balken | \`plt.bar(x, y)\` | \`bar(x, y)\` |
| Histogramm | \`plt.hist(data)\` | \`histogram(data)\` |
| 3D-Fläche | \`ax.plot_surface\` | \`surf(X, Y, Z)\` |`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welcher Befehl fügt eine Legende zu einem Matplotlib-Plot hinzu?',
              options: ['plt.label()', 'plt.legend()', 'plt.annotate()', 'plt.describe()'],
              correctIndex: 1,
              explanation: '`plt.legend()` zeigt die Legende an (Labels aus den `label`-Parametern).',
              hints: ['Der Befehl heißt auch in Matlab so.'],
            },
            {
              type: 'sorting',
              question: 'Bringe die Schritte zum Erstellen eines Plots in die richtige Reihenfolge:',
              items: ['Daten berechnen (y = np.sin(x))', 'plt.figure() aufrufen', 'plt.plot(x, y) aufrufen', 'Achsen beschriften', 'plt.show() aufrufen'],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Erst Daten, dann Figur erstellen, plotten, formatieren, und zuletzt anzeigen.',
              hints: ['Imports müssen zuerst kommen.', '`plt.show()` ist immer der letzte Schritt.'],
            },
            {
              type: 'true-false',
              statement: 'In Matplotlib speichert man einen Plot mit `plt.savefig()` VOR `plt.show()`.',
              correct: true,
              explanation: '`plt.show()` leert die aktuelle Figur — danach ist nichts mehr zum Speichern da.',
              hints: ['Was passiert mit der Figur nach show()?'],
            },
          ],
        },
        {
          id: 'py-2-3',
          title: 'Gleichungen lösen & Optimierung',
          learningGoals: ['Nullstellen mit fsolve finden', 'Lineare Gleichungssysteme lösen', 'Minima/Maxima numerisch finden'],
          content: String.raw`**SciPy** erweitert NumPy um wissenschaftliche Algorithmen — das Matlab-Äquivalent für Solver.

**Nullstellensuche:**
\`\`\`python
from scipy.optimize import fsolve

def f(x):
    return x**3 - 2*x - 5

x0 = fsolve(f, 2.0)    # Startwert 2.0
print(x0)               # → [2.0946]
\`\`\`

Matlab: \`fzero(@(x) x^3 - 2*x - 5, 2)\`

**Lineares Gleichungssystem Ax = b:**
\`\`\`python
import numpy as np
A = np.array([[2, 1], [1, 3]])
b = np.array([5, 10])
x = np.linalg.solve(A, b)   # → [1., 3.]
\`\`\`

Matlab: \`x = A \ b\`

**Minimierung:**
\`\`\`python
from scipy.optimize import minimize

def kosten(x):
    return (x[0] - 1)**2 + (x[1] - 2.5)**2

result = minimize(kosten, [0, 0])
print(result.x)  # → [1., 2.5]
\`\`\`

Matlab: \`fminunc(@(x) (x(1)-1)^2 + (x(2)-2.5)^2, [0, 0])\`

**Anwendung im MB:** Festigkeitsnachweise, Auslegungsoptimierung, Strömungsberechnung — überall braucht man Solver!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Wie löst man `Ax = b` in NumPy?',
              options: ['np.solve(A, b)', 'np.linalg.solve(A, b)', 'np.inv(A) * b', 'scipy.solve(A, b)'],
              correctIndex: 1,
              explanation: '`np.linalg.solve(A, b)` löst das System direkt (effizienter als Inverse berechnen).',
              hints: ['Die lineare Algebra-Funktionen sind in `np.linalg`.'],
            },
            {
              type: 'multiple-choice',
              question: 'Was ist das Matlab-Äquivalent zu `np.linalg.solve(A, b)`?',
              options: ['solve(A, b)', 'A \\ b', 'inv(A) * b', 'linsolve(A, b)'],
              correctIndex: 1,
              explanation: 'Der Backslash-Operator `A \\ b` ist Matlabs elegantester Weg für lineare Systeme.',
              hints: ['Matlab hat einen speziellen Operator dafür.'],
            },
            {
              type: 'true-false',
              statement: '`scipy.optimize.fsolve` kann nur Funktionen mit einer Variable lösen.',
              correct: false,
              explanation: '`fsolve` kann auch Gleichungssysteme lösen — die Funktion muss dann einen Vektor zurückgeben.',
              hints: ['Was passiert, wenn man einen Vektor als Startwert gibt?'],
            },
          ],
        },
        {
          id: 'py-2-4',
          title: 'Numerische Integration & DGL',
          learningGoals: ['Integrale numerisch berechnen', 'Gewöhnliche DGL mit solve_ivp lösen', 'Ergebnisse plotten und interpretieren'],
          content: String.raw`**Numerische Integration:**
\`\`\`python
from scipy.integrate import quad

def f(x):
    return np.sin(x)**2

ergebnis, fehler = quad(f, 0, np.pi)
print(ergebnis)  # → 1.5708 (= π/2)
\`\`\`

Matlab: \`integral(@(x) sin(x).^2, 0, pi)\`

**Gewöhnliche Differentialgleichungen** — z.B. gedämpfter Schwinger:

$m\ddot{x} + d\dot{x} + kx = 0$ → als System 1. Ordnung:

\`\`\`python
from scipy.integrate import solve_ivp

def schwinger(t, y, m, d, k):
    x, v = y
    return [v, (-d*v - k*x) / m]

m, d, k = 1.0, 0.5, 10.0
sol = solve_ivp(schwinger, [0, 20], [1, 0],
                args=(m, d, k), dense_output=True,
                t_eval=np.linspace(0, 20, 500))

plt.plot(sol.t, sol.y[0])  # Auslenkung über Zeit
\`\`\`

Matlab: \`[t, y] = ode45(@(t,y) schwinger(t, y, m, d, k), [0 20], [1; 0])\`

**Schlüsselkonzept:** Jede DGL höherer Ordnung wird in ein System 1. Ordnung umgeschrieben!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welche SciPy-Funktion berechnet ein bestimmtes Integral numerisch?',
              options: ['scipy.integrate.solve', 'scipy.integrate.quad', 'scipy.integrate.trapz', 'scipy.integrate.odeint'],
              correctIndex: 1,
              explanation: '`quad` berechnet ∫f(x)dx numerisch mit adaptiver Quadratur.',
              hints: ['quad = Quadratur = numerische Integration'],
            },
            {
              type: 'true-false',
              statement: 'Um eine DGL 2. Ordnung mit solve_ivp zu lösen, muss man sie in ein System 1. Ordnung umschreiben.',
              correct: true,
              explanation: 'solve_ivp (und ode45 in Matlab) lösen nur Systeme 1. Ordnung: y\' = f(t, y).',
              hints: ['Was für Systeme kann solve_ivp direkt lösen?'],
            },
            {
              type: 'multiple-choice',
              question: 'Was ist das Matlab-Äquivalent zu `solve_ivp`?',
              options: ['ode23', 'ode45', 'dsolve', 'integrate'],
              correctIndex: 1,
              explanation: '`ode45` ist der Standard-ODE-Solver in Matlab (Runge-Kutta 4/5).',
              hints: ['Der meistgenutzte ODE-Solver in Matlab.'],
            },
          ],
        },
      ],
    },

    // ── Unit 3: Maschinenbau-Anwendungen ────────────────────────────────
    {
      id: 'py-unit-3',
      title: 'MB-Anwendungen',
      description: 'Praxisnahe Programmieraufgaben aus dem Maschinenbau-Studium.',
      lessons: [
        {
          id: 'py-3-1',
          title: 'Festigkeitsberechnung',
          learningGoals: ['Spannungsberechnung programmieren', 'Querschnittswerte automatisiert berechnen', 'Ergebnisse grafisch darstellen'],
          content: String.raw`**Beispiel: Biegebalken — Spannungsverteilung**

Ein Balken mit Rechteckquerschnitt (b × h) wird durch ein Biegemoment $M_b$ belastet.

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Querschnittswerte
b, h = 0.04, 0.08          # Breite × Höhe [m]
I = b * h**3 / 12          # Flächenträgheitsmoment
W = b * h**2 / 6           # Widerstandsmoment

# Biegemoment (z.B. über Balkenlänge)
L = 2.0                    # Balkenlänge [m]
F = 1000                   # Einzellast [N]
x = np.linspace(0, L, 200)
M = F * x * (L - x) / L   # Momentenverlauf (Einfeldt.)

# Maximale Biegespannung
sigma_max = M / W

plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(x, M, 'b-', linewidth=2)
plt.fill_between(x, M, alpha=0.2)
plt.xlabel('x [m]'); plt.ylabel('M [Nm]')
plt.title('Momentenverlauf'); plt.grid(True)

plt.subplot(1, 2, 2)
plt.plot(x, sigma_max / 1e6, 'r-', linewidth=2)
plt.xlabel('x [m]'); plt.ylabel('σ [MPa]')
plt.title('Biegespannung'); plt.grid(True)
plt.tight_layout()
plt.show()
\`\`\`

**Matlab-Version:**
\`\`\`matlab
b = 0.04; h = 0.08;
I = b*h^3/12; W = b*h^2/6;
x = linspace(0, 2, 200);
M = 1000 * x .* (2 - x) / 2;
sigma = M / W;
subplot(1,2,1); plot(x, M); title('Moment');
subplot(1,2,2); plot(x, sigma/1e6); title('Spannung');
\`\`\``,
          exercises: [
            {
              type: 'number-input',
              question: 'Ein Rechteckquerschnitt hat b = 40 mm und h = 80 mm. Wie groß ist das Widerstandsmoment W = bh²/6 in mm³? (Ganzzahl)',
              correctAnswer: 42667,
              tolerance: 1,
              unit: 'mm³',
              explanation: 'W = 40 × 80² / 6 = 40 × 6400 / 6 ≈ 42667 mm³.',
              hints: ['W = b·h²/6', 'Setze b = 40 und h = 80 ein.'],
            },
            {
              type: 'multiple-choice',
              question: 'Welches NumPy-Feature macht Festigkeitsberechnungen besonders effizient?',
              options: ['Symbolisches Rechnen', 'Elementweise Array-Operationen', 'Automatische Einheitenkonvertierung', 'Machine Learning'],
              correctIndex: 1,
              explanation: 'Elementweise Operationen erlauben es, ganze Spannungsverteilungen in einer Zeile zu berechnen.',
              hints: ['Was passiert, wenn man ein Array durch eine Zahl teilt?'],
            },
            {
              type: 'true-false',
              statement: 'In der Matlab-Version muss man `.^` statt `^` für elementweise Potenzierung verwenden.',
              correct: true,
              explanation: 'In Matlab ist `^` Matrixpotenz, `.^` elementweise Potenz. Bei Vektoren braucht man den Punkt!',
              hints: ['Was bedeutet der Punkt vor Operatoren in Matlab?'],
            },
          ],
        },
        {
          id: 'py-3-2',
          title: 'Datenauswertung & Messdaten',
          learningGoals: ['CSV-Dateien einlesen', 'Statistische Auswertung durchführen', 'Messdaten fitten und interpolieren'],
          content: String.raw`Im MB-Studium wertet man häufig Messdaten aus Laboren aus.

**CSV-Datei einlesen:**
\`\`\`python
import numpy as np
import pandas as pd

# Mit NumPy (einfach):
data = np.loadtxt('messdaten.csv', delimiter=',', skiprows=1)
zeit = data[:, 0]
kraft = data[:, 1]

# Mit Pandas (komfortabler):
df = pd.read_csv('messdaten.csv')
zeit = df['Zeit'].values
kraft = df['Kraft'].values
\`\`\`

Matlab: \`data = readmatrix('messdaten.csv')\`

**Statistik:**
\`\`\`python
mittel = np.mean(kraft)
std = np.std(kraft)
maximum = np.max(kraft)
\`\`\`

**Kurvenanpassung (Curve Fitting):**
\`\`\`python
from numpy.polynomial import polynomial as P

# Polynom-Fit 2. Grades
koeffizienten = np.polyfit(zeit, kraft, 2)
p = np.poly1d(koeffizienten)

# Plot
plt.scatter(zeit, kraft, s=5, label='Messdaten')
t_fit = np.linspace(zeit.min(), zeit.max(), 200)
plt.plot(t_fit, p(t_fit), 'r-', label='Fit')
plt.legend()
\`\`\`

Matlab: \`p = polyfit(zeit, kraft, 2); plot(zeit, polyval(p, zeit))\``,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welche Python-Bibliothek ist am besten für tabellarische Messdaten geeignet?',
              options: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib'],
              correctIndex: 1,
              explanation: 'Pandas bietet DataFrames — ideal für spaltenbasierte Messdaten mit Headern.',
              hints: ['Welche Bibliothek hat DataFrames?'],
            },
            {
              type: 'sorting',
              question: 'Bringe die Schritte der Messdatenauswertung in die richtige Reihenfolge:',
              items: ['Datei einlesen', 'Daten auf Ausreißer prüfen', 'Statistik berechnen', 'Kurve fitten', 'Ergebnis plotten'],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Erst einlesen, dann prüfen, analysieren, modellieren, visualisieren.',
              hints: ['Daten müssen vorhanden sein bevor man sie auswertet.', 'Visualisierung kommt nach der Analyse.'],
            },
            {
              type: 'true-false',
              statement: '`np.polyfit(x, y, 3)` fittet ein Polynom 3. Grades an die Daten.',
              correct: true,
              explanation: 'Der dritte Parameter gibt den Grad des Polynoms an.',
              hints: ['Was bedeutet der dritte Parameter von polyfit?'],
            },
          ],
        },
        {
          id: 'py-3-3',
          title: 'Simulation: Feder-Masse-Dämpfer',
          learningGoals: ['Schwingungssystem modellieren', 'Parametervariation durchführen', 'Resonanz erkennen und visualisieren'],
          content: String.raw`Das **Feder-Masse-Dämpfer-System** ist ein Kernmodell der technischen Mechanik.

**Bewegungsgleichung:** $m\ddot{x} + d\dot{x} + kx = F_0 \cos(\Omega t)$

\`\`\`python
import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

def fmd_system(t, y, m, d, k, F0, omega):
    x, v = y
    return [v, (F0*np.cos(omega*t) - d*v - k*x) / m]

# Parameter
m = 1.0      # Masse [kg]
k = 100.0    # Federsteifigkeit [N/m]
d = 2.0      # Dämpfung [Ns/m]
F0 = 10.0    # Anregungsamplitude [N]

omega_0 = np.sqrt(k/m)  # Eigenkreisfrequenz

# Variation der Anregungsfrequenz
omegas = np.linspace(0.1, 20, 50)
amplituden = []

for omega in omegas:
    sol = solve_ivp(fmd_system, [0, 50], [0, 0],
                    args=(m, d, k, F0, omega),
                    t_eval=np.linspace(40, 50, 1000))
    amplituden.append(np.max(np.abs(sol.y[0])))

plt.plot(omegas, amplituden, 'b-', linewidth=2)
plt.axvline(omega_0, color='r', linestyle='--', label=f'ω₀ = {omega_0:.1f}')
plt.xlabel('Anregungsfrequenz ω [rad/s]')
plt.ylabel('Amplitude [m]')
plt.title('Frequenzgang — Feder-Masse-Dämpfer')
plt.legend(); plt.grid(True); plt.show()
\`\`\`

**Erkenntnis:** Bei $\Omega \approx \omega_0$ tritt **Resonanz** auf — die Amplitude wird maximal!

**Eigenfrequenz:** $\omega_0 = \sqrt{k/m}$ bzw. $f_0 = \omega_0 / (2\pi)$

**Dämpfungsgrad:** $D = d / (2\sqrt{km})$ — bei $D < 1$ schwingt das System.`,
          exercises: [
            {
              type: 'number-input',
              question: 'Berechne die Eigenkreisfrequenz ω₀ für m = 2 kg und k = 200 N/m.',
              correctAnswer: 10,
              tolerance: 0.1,
              unit: 'rad/s',
              explanation: 'ω₀ = √(k/m) = √(200/2) = √100 = 10 rad/s.',
              hints: ['ω₀ = √(k/m)', 'Setze die Werte ein und ziehe die Wurzel.'],
            },
            {
              type: 'multiple-choice',
              question: 'Was passiert bei Resonanz (Ω ≈ ω₀)?',
              options: ['Das System steht still', 'Die Amplitude wird minimal', 'Die Amplitude wird maximal', 'Die Frequenz verdoppelt sich'],
              correctIndex: 2,
              explanation: 'Bei Resonanz überträgt die Anregung maximal Energie → maximale Amplitude.',
              hints: ['Resonanz ist ein kritischer Zustand für Ingenieure.'],
            },
            {
              type: 'number-input',
              question: 'Berechne den Dämpfungsgrad D für m = 1 kg, d = 4 Ns/m, k = 100 N/m.',
              correctAnswer: 0.2,
              tolerance: 0.01,
              unit: '',
              explanation: 'D = d / (2√(km)) = 4 / (2√(100·1)) = 4 / 20 = 0.2.',
              hints: ['D = d / (2√(km))', '√(100·1) = 10'],
            },
          ],
        },
      ],
    },

    // ── Unit 4: Prüfungsaufgaben ──────────────────────────────────────
    {
      id: 'py-unit-4',
      title: 'Prüfungsaufgaben',
      description: 'Prüfungsrelevante Programmieraufgaben auf TU-Wien-Niveau.',
      lessons: [
        {
          id: 'py-4-1',
          title: 'Prüfung: Code-Verständnis & Fehlersuche',
          learningGoals: ['Typische Prüfungsfragen zur Programmierung lösen', 'Code lesen und Ausgaben vorhersagen', 'Fehler in Code finden'],
          type: 'explanation-intuitive',
          content: String.raw`**[PRÜFUNG] — Typische Aufgabenformate:**

1. **Code-Verständnis:** "Was gibt dieser Code aus?"
2. **Fehlersuche:** "Finde den Fehler im Code."
3. **Vervollständigung:** "Ergänze die fehlende Zeile."
4. **Vergleich:** "Übersetze Python-Code nach Matlab (oder umgekehrt)."

**Tipp für die Prüfung:**
- Arbeite den Code **Zeile für Zeile** durch
- Schreibe den Wert jeder Variable neben den Code
- Achte besonders auf **Indizierung** (0 vs 1), **Operatoren** (* vs @) und **Schleifen**
- Bei Matlab: Vergiss nicht den **Strichpunkt** (;) — ohne ihn wird alles ausgegeben!`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt folgender Code aus?\n```python\na = [2, 4, 6, 8, 10]\ns = 0\nfor i in range(1, 4):\n    s += a[i]\nprint(s)\n```',
              correctAnswer: 18,
              tolerance: 0,
              unit: '',
              explanation: 'range(1,4) → i = 1, 2, 3. a[1]=4, a[2]=6, a[3]=8. Summe: 4+6+8 = 18.',
              hints: ['range(1,4) erzeugt 1, 2, 3.', 'a[1] = 4, a[2] = 6, a[3] = 8'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Welcher Fehler ist in diesem Matlab-Code?\n```matlab\nx = [1 2 3 4 5];\ny = x^2;\nplot(x, y)\n```',
              options: ['plot-Befehl falsch', '`^` statt `.^` — nicht elementweise', 'x muss transponiert werden', 'Semikolon vergessen'],
              correctIndex: 1,
              explanation: '`x^2` versucht Matrixquadrierung. Für elementweise Potenz: `x.^2`.',
              hints: ['Was passiert, wenn man ^ auf einen Vektor anwendet?'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt `np.dot(np.array([1,2,3]), np.array([4,5,6]))` zurück?',
              correctAnswer: 32,
              tolerance: 0,
              unit: '',
              explanation: 'Skalarprodukt: 1×4 + 2×5 + 3×6 = 4 + 10 + 18 = 32.',
              hints: ['np.dot berechnet das Skalarprodukt zweier Vektoren.', '1·4 + 2·5 + 3·6 = ?'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Wie übersetzt man `A \\ b` (Matlab) nach Python/NumPy?',
              options: ['A / b', 'np.linalg.solve(A, b)', 'np.divide(A, b)', 'A ** (-1) @ b'],
              correctIndex: 1,
              explanation: 'Der Backslash-Operator in Matlab löst Ax=b. In NumPy: `np.linalg.solve(A, b)`.',
              hints: ['Was löst A\\b in Matlab?'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt folgender Code aus?\n```python\nimport numpy as np\nA = np.array([[1,2],[3,4]])\nprint(np.trace(A))\n```',
              correctAnswer: 5,
              tolerance: 0,
              unit: '',
              explanation: 'np.trace berechnet die Spur (Summe der Diagonalelemente): 1 + 4 = 5.',
              hints: ['Die Spur ist die Summe der Hauptdiagonale.'],
            },
            {
              type: 'true-false',
              statement: '[PRÜFUNG] In Python beginnt die Indizierung bei 0, in Matlab bei 1.',
              correct: true,
              explanation: 'Korrekt. a[0] in Python entspricht a(1) in Matlab.',
              hints: ['Denke an den ersten Zugriff auf ein Array.'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt folgender Code aus?\n```python\nx = 10\nfor i in range(3):\n    x = x // 2\nprint(x)\n```',
              correctAnswer: 1,
              tolerance: 0,
              unit: '',
              explanation: 'Iteration 1: 10//2=5. Iteration 2: 5//2=2. Iteration 3: 2//2=1.',
              hints: ['// ist ganzzahlige Division.', 'Schritt für Schritt durchgehen.'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Welche Funktion löst in SciPy ein Anfangswertproblem (ODE)?',
              options: ['scipy.optimize.fsolve', 'scipy.integrate.solve_ivp', 'scipy.linalg.solve', 'scipy.signal.ode'],
              correctIndex: 1,
              explanation: 'solve_ivp (Initial Value Problem) ist die Standard-Funktion für gewöhnliche DGL in SciPy.',
              hints: ['IVP = Initial Value Problem.'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt `len([x for x in range(10) if x % 3 == 0])` zurück?',
              correctAnswer: 4,
              tolerance: 0,
              unit: '',
              explanation: 'range(10) = 0..9. Durch 3 teilbar: 0, 3, 6, 9 → 4 Elemente.',
              hints: ['Welche Zahlen von 0 bis 9 sind durch 3 teilbar?'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Was ist der Unterschied zwischen `*` und `@` bei NumPy-Arrays?',
              options: ['Kein Unterschied', '* ist Matrixmultiplikation, @ ist elementweise', '* ist elementweise, @ ist Matrixmultiplikation', '@ funktioniert nur mit Skalaren'],
              correctIndex: 2,
              explanation: 'Bei NumPy-Arrays: * multipliziert elementweise, @ führt Matrixmultiplikation durch.',
              hints: ['Denke an A * B vs A @ B für 2D-Arrays.'],
            },
          ],
        },
      ],
    },
  ],
})

export { pythonMatlabTopic }
