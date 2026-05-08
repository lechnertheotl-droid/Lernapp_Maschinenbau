// ═══════════════════════════════════════════════════════════════════════════
// Python & Matlab — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching } from './_helpers'

export const pythonMatlabSubGoalTasks = {

  // ───────────────────────────────────────────────────────────────────────
  // py-1-1 — Variablen & Datentypen  (4 subGoals)
  // 24 Aufgaben mit pedagogy-Tags (stage × subGoal × type × uses),
  // deckt alle 20 Matrix-Zeilen + 4 Bonus.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-1': {
    // ── SG 0 — `dyn-typing` — Dynamische Typisierung ────────────────────
    0: [
      // Row 1 · recognize · true-false · uses=[dyn-typing]
      tf(
        "In Python ändert eine erneute Zuweisung wie `x = 5` gefolgt von `x = 'fünf'` den Datentyp von `int` zu `str`.",
        true,
        `**Ansatz:** Python ist dynamisch typisiert — der Typ klebt am aktuellen Wert, nicht am Variablennamen. Eine Neuzuweisung kann jederzeit den Typ wechseln.

**Rechnung:** Nach $x = 5$ zeigt der Name $x$ auf einen $\\text{int}$-Wert. Die zweite Zeile $x = \\text{'fünf'}$ richtet den Namen auf einen neuen Stringwert — der alte int-Wert wird verworfen, $\\text{type}(x) = \\text{str}$.

**Probe:** $\\text{print}(\\text{type}(x))$ liefert nach Zeile 2 buchstäblich \`<class 'str'>\`.

**Typischer Fehler:** Zu denken, eine als int initialisierte Variable bleibe int — das wäre statische Typisierung wie in C/Java. In Python ist genau das anders.`,
        [
          'Python deklariert keinen Typ — woher kommt der Typ dann?',
          'Welcher Wert steht zuletzt im Namen $x$?',
          'Letzte Zuweisung gewinnt: erst int, dann str.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[dyn-typing]
      mc(
        "Du schreibst in Python `wert = 42` und in der nächsten Zeile `wert = 'Antwort'`. Was liefert `print(type(wert))` am Ende?",
        ["`<class 'int'>`", "`<class 'str'>`", "`<class 'NoneType'>`", '`TypeError`'],
        1,
        `**Ansatz:** Bei dynamischer Typisierung gilt: der Typ folgt dem zuletzt zugewiesenen Wert.

**Rechnung:** Zeile 1 setzt $\\text{wert}$ auf den int $42$. Zeile 2 weist denselben Namen einem String zu. $\\text{type}$ schaut den AKTUELLEN Wert an, also den String 'Antwort' — Ergebnis \`<class 'str'>\`.

**Probe:** Im Interpreter ausgeführt: \`>>> wert = 42; wert = 'Antwort'; print(type(wert))\` → \`<class 'str'>\`. ✓

**Typischer Fehler:** Annehmen, der erste Typ "bleibe haften". Python merkt sich nicht, mit welchem Typ eine Variable das erste Mal belegt wurde.`,
        [
          'Welcher Wert ist zuletzt im Namen?',
          '$\\text{type}()$ liest den aktuellen Wert ab, nicht die Historie.',
          'Letzte Zuweisung war ein String — also $\\text{str}$.',
        ],
        {
          '0': "`<class 'int'>` würde gelten, wenn die zweite Zeile fehlte. Mit der Neuzuweisung ist der int-Wert weg — Python speichert keine Typ-Historie.",
          '2': "`<class 'NoneType'>` käme nur, wenn `wert = None` zugewiesen würde. Hier steht stattdessen ein nicht-leerer String, also nie `None`.",
          '3': '`TypeError` tritt auf, wenn man Operationen mit inkompatiblen Typen mischt (z.B. `"a" + 1`). Eine reine Neuzuweisung ist nie ein TypeError — Python erlaubt jedem Namen jeden Typ.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Row 3 · apply-independent · multiple-choice · uses=[dyn-typing]
      mc(
        'Welchen Typ hat `c` nach Ausführung von `a = 10; b = 2.5; c = a + b` in Python?',
        ['`int`', '`float`', '`str`', '`complex`'],
        1,
        `**Ansatz:** Bei gemischten Operationen gilt die Type-Promotion-Regel: der "größere" Typ gewinnt. $\\text{int} + \\text{float} \\rightarrow \\text{float}$.

**Rechnung:** $a = 10$ ist int, $b = 2{,}5$ ist float. $c = 10 + 2{,}5 = 12{,}5$ — das Ergebnis ist ein float, weil mindestens ein Operand float ist. $\\text{type}(c) = \\text{float}$.

**Probe:** \`>>> type(10 + 2.5)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** Glauben, weil $a$ int ist, sei das Ergebnis int. Sobald EIN Operand float ist, ist das ganze Ergebnis float — Python rundet nicht ab.`,
        [
          'Welchen Typ haben $a$ und $b$ einzeln?',
          'Welche Type-Promotion-Regel gilt bei int + float?',
          'Mindestens ein float im Ausdruck → Ergebnis ist float.',
        ],
        {
          '0': '`int` würde gelten, wenn beide Operanden int wären. $b = 2{,}5$ ist aber float — und $\\text{int} + \\text{float} \\rightarrow \\text{float}$.',
          '2': '`str` käme nur, wenn beide Operanden Strings wären (Konkatenation). Hier sind es Zahlen — Addition, nicht Konkatenation.',
          '3': '`complex` entsteht nur, wenn ein Operand eine komplexe Zahl wie `2 + 3j` ist. Reine Real-Zahlen liefern keinen complex.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[dyn-typing]
      mc(
        'Ein Studierender schreibt in Python: `int x = 5`. Was passiert beim Ausführen?',
        [
          '`SyntaxError` — die Form `Typ Variable = Wert` ist Java/C-Syntax; Python erlaubt keine Typdeklaration vor dem Variablennamen.',
          'Funktioniert: `x` wird als int mit Wert 5 erzeugt.',
          '`NameError` — `x` ist nicht definiert.',
          '`ValueError` — `int` darf nicht 5 als Wert haben.',
        ],
        0,
        `**Ansatz:** Python kennt keine Typdeklaration. Der Parser sieht \`int x = 5\` als drei Tokens und kann sie nicht zu einem Statement zusammenfügen.

**Rechnung:** Korrekte Python-Syntax ist einfach $x = 5$. Python erkennt automatisch $\\text{type}(x) = \\text{int}$ aus dem Wert. \`int x = 5\` wirft \`SyntaxError: invalid syntax\`.

**Probe:** Test im Interpreter: \`>>> int x = 5\` → \`SyntaxError: invalid syntax\`. ✓ Optional: Type-Hints wie \`x: int = 5\` sind erlaubt, werden aber zur Laufzeit NICHT erzwungen.

**Typischer Fehler:** Java/C/C++-Syntax in Python übernehmen. In Python ist die Typangabe vor dem Namen kein gültiges Statement — der Typ kommt automatisch aus dem Wert.`,
        [
          'Welche Sprache braucht $\\text{int}$ vor dem Namen?',
          'Wie lautet die korrekte Python-Form?',
          '$x = 5$ reicht aus — Python erkennt int automatisch.',
        ],
        {
          '1': 'Funktioniert NICHT — `int x = 5` ist nicht parsebar. Python würde stattdessen einfach `x = 5` schreiben.',
          '2': 'Ein NameError tritt nur auf, wenn man eine NICHT zugewiesene Variable LIEST. Hier wird zugewiesen — der Fehler liegt bei der Syntax, bevor `x` überhaupt entstehen könnte.',
          '3': 'ValueError gilt für ungültige Werte (`int("abc")`), nicht für ungültige Syntax. Der Parser bricht hier vor der Wertprüfung ab.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[dyn-typing]
      mc(
        'Welche Aussage über Variablen-Deklaration in Python und Matlab ist KORREKT?',
        [
          'Python ist dynamisch typisiert (Typ folgt dem Wert); Matlab nutzt standardmäßig den Typ `double` für alle Zahlen.',
          'Beide Sprachen verlangen `int x = 5` als Syntax.',
          'Python ist statisch typisiert wie Java.',
          'Matlab erzwingt für jede Variable eine explizite Typdeklaration.',
        ],
        0,
        `**Ansatz:** Python und Matlab gehören beide zu den dynamisch typisierten Sprachen — keine Typangabe nötig. In Matlab ist der Default-Zahlentyp aber speziell: alle Zahlen sind \`double\` (64-bit float), sofern man nichts anderes wählt (z.B. \`int32\`).

**Rechnung:** Python: \`x = 5\` → int, \`y = 3.14\` → float, \`s = "hi"\` → str. Matlab: \`x = 5\` → \`double\`, \`y = 3.14\` → \`double\`, \`s = "hi"\` → \`string\` (oder \`char\`).

**Probe:** In Matlab: \`>> class(5)\` liefert \`'double'\`. In Python: \`>>> type(5)\` liefert \`<class 'int'>\`. ✓

**Typischer Fehler:** Python und Matlab als statisch-typisiert wie Java/C einordnen. Beide kommen ohne Typdeklaration aus.`,
        [
          'Welche Sprachen kennst du, die KEINE Typdeklaration brauchen?',
          'Was ist der Default-Zahlentyp in Matlab?',
          'Python: int/float/str je nach Wert; Matlab: alles standardmäßig double.',
        ],
        {
          '1': '`int x = 5` ist Java/C-Syntax. Weder Python noch Matlab unterstützen das.',
          '2': 'Python ist NICHT statisch typisiert. Die Variable kann jederzeit einen anderen Typ annehmen — genau das ist der Unterschied zu Java.',
          '3': 'Matlab erzwingt KEINE Typdeklaration. `x = 5` reicht — der Typ ist automatisch `double`.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Bonus · recognize · true-false · uses=[dyn-typing]
      tf(
        "Auch der umgekehrte Weg ist erlaubt: nach `x = 'Hallo'` (str) darf `x = 42` (int) folgen — der Typ wechselt mit jedem neuen Wert.",
        true,
        `**Ansatz:** Dynamische Typisierung ist symmetrisch: jeder Typenwechsel ist erlaubt, in beide Richtungen.

**Rechnung:** Nach Zeile 1 ist $\\text{type}(x) = \\text{str}$. Zeile 2 überschreibt $x$ mit einem int — $\\text{type}(x) = \\text{int}$.

**Probe:** Auch nach $x = 3{,}14$ würde der Typ wieder wechseln — diesmal zu $\\text{float}$. ✓

**Typischer Fehler:** Glauben, der erste Typ sei "fixiert". Python merkt sich keine Typ-Historie — nur den aktuellen Wert.`,
        [
          'Gibt es in Python eine Typ-Historie pro Variable?',
          'Was zählt: erste Zuweisung oder aktuelle Zuweisung?',
          'Aktuelle Zuweisung gewinnt — egal welcher Typ.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['dyn-typing'] },
      ),
    ],

    // ── SG 1 — `type-funkt` — Typprüfung mit `type(x)` ──────────────────
    1: [
      // Row 6 · recognize · true-false · uses=[type-funkt]
      tf(
        "`type(3.14)` gibt in Python `<class 'float'>` zurück.",
        true,
        `**Ansatz:** $\\text{type}(x)$ liefert die Klasse des aktuellen Wertes — bei einem Literal mit Dezimalpunkt also $\\text{float}$.

**Rechnung:** $3{,}14$ hat einen Punkt → Python wertet das Literal als $\\text{float}$ aus → $\\text{type}(3{,}14)$ liefert \`<class 'float'>\`.

**Probe:** \`>>> type(3.14)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** Erwarten, dass $\\text{type}()$ nur den Namen "float" liefert. Tatsächlich kommt das ganze Klassen-Objekt: \`<class 'float'>\`. Den nackten Namen bekommt man mit \`type(3.14).__name__\`.`,
        [
          'Was liefert $\\text{type}()$ als Datentyp?',
          'Welches Literal hat einen Dezimalpunkt?',
          'Punkt im Literal → float-Klasse.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[type-funkt]
      mc(
        'Was liefert `type(2 + 3)` in Python?',
        ["`<class 'int'>`", "`<class 'float'>`", "`<class 'str'>`", "`<class 'bool'>`"],
        0,
        `**Ansatz:** $\\text{type}()$ schaut den AUSGEWERTETEN Wert an — wir müssen also zuerst $2 + 3$ rechnen.

**Rechnung:** $2 + 3 = 5$. Beide Operanden sind int, daher ist auch das Ergebnis int. $\\text{type}(5) = \\text{int}$ → \`<class 'int'>\`.

**Probe:** \`>>> type(2 + 3)\` → \`<class 'int'>\`. ✓

**Typischer Fehler:** Glauben, $\\text{type}()$ analysiere den Ausdruck syntaktisch. $\\text{type}()$ wertet zuerst aus und prüft dann den Typ des Ergebnisses.`,
        [
          'Was wird zuerst gerechnet: $\\text{type}()$ oder $2+3$?',
          'Welchen Typ haben $2$ und $3$ einzeln?',
          'int + int → int.',
        ],
        {
          '1': 'float käme nur, wenn ein Operand float wäre (z.B. $2 + 3{,}0$). Hier sind beide int.',
          '2': 'str käme nur bei Stringwerten ("2" + "3"). Hier sind 2 und 3 Zahlen, kein String.',
          '3': 'bool käme nur bei Wahrheitswerten (`True`/`False`). Reine Zahlen sind nicht bool.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Row 8 · apply-independent · multiple-choice · uses=[type-funkt]
      mc(
        'Code: `x = "42"` und `y = type(x)`. Was steht in `y`?',
        ["`<class 'str'>`", "`<class 'int'>`", '`42`', '`Error`'],
        0,
        `**Ansatz:** Anführungszeichen entscheiden — \`"42"\` ist ein String, kein Integer.

**Rechnung:** $x = \\text{'42'}$ → $\\text{type}(x) = \\text{str}$ → $y = $ \`<class 'str'>\`. Der Inhalt der Quotes spielt keine Rolle, solange Quotes da sind.

**Probe:** \`>>> type("42")\` → \`<class 'str'>\`. ✓

**Typischer Fehler:** Die Ziffern im String sehen wie eine Zahl aus, aber Anführungszeichen machen daraus IMMER einen String. Erst eine explizite Konvertierung wie $\\text{int}('42')$ liefert wieder eine Zahl.`,
        [
          'Was bedeuten die Anführungszeichen?',
          'Ist "42" eine Zahl oder ein String?',
          'Quotes → str, ohne Quotes → int.',
        ],
        {
          '1': '`int` käme nur bei `x = 42` ohne Quotes. Mit Quotes ist es ein String — der Inhalt liest sich nur wie eine Zahl.',
          '2': '`42` ist der Wert — aber `type()` liefert NICHT den Wert, sondern die Klasse. Frage war nach `y`, nicht nach `x`.',
          '3': '`type()` wirft keinen Error für gültige Werte — nur wenn man falsche Argumente übergibt (`type()` ohne Argument). Hier ist das Argument ein gültiger String.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[type-funkt]
      mc(
        'Ein Lerner behauptet: "Da `False == 0` in Python gilt, muss `type(False)` ebenfalls `<class \'int\'>` liefern." Was ist daran falsch?',
        [
          'Falsch — `type()` liefert die KONKRETE Klasse, nicht die Basisklasse. `type(False)` ergibt `<class \'bool\'>`, auch wenn `bool` intern Subtyp von `int` ist.',
          'Richtig — die Behauptung ist korrekt.',
          '`type(False)` wirft einen TypeError.',
          '`type(False)` liefert `<class \'integer\'>`.',
        ],
        0,
        `**Ansatz:** $\\text{type}(x)$ und Vergleich mit $==$ haben unterschiedliche Semantik. $==$ vergleicht WERTE (mit Type-Promotion), $\\text{type}()$ liefert die KLASSE.

**Rechnung:** $\\text{type}(\\text{False}) = \\text{bool}$ → \`<class 'bool'>\`. Zwar ist $\\text{bool}$ Unterklasse von $\\text{int}$ (deshalb $\\text{False} == 0 \\rightarrow \\text{True}$), aber $\\text{type}()$ gibt immer die SPEZIELLSTE Klasse zurück, nicht die Basisklasse. Wenn man die Subtyp-Beziehung prüfen will, nimmt man $\\text{isinstance}(\\text{False}, \\text{int}) \\rightarrow \\text{True}$.

**Probe:** \`>>> type(False)\` → \`<class 'bool'>\`. \`>>> isinstance(False, int)\` → \`True\`. Beide Aussagen vertragen sich. ✓

**Typischer Fehler:** Wertgleichheit ($==$) mit Typgleichheit verwechseln. Zwei verschiedene Typen können denselben Wert vergleichen, aber $\\text{type}()$ unterscheidet sie trotzdem.`,
        [
          'Was vergleicht $==$ — Werte oder Klassen?',
          'Was liefert $\\text{type}()$ — Basisklasse oder konkrete Klasse?',
          '$\\text{type}()$ ist immer am spezifischsten — also $\\text{bool}$, nicht $\\text{int}$.',
        ],
        {
          '1': 'Die Behauptung ist falsch. `type(False)` liefert `<class \'bool\'>`, nicht `<class \'int\'>` — auch wenn `False == 0`.',
          '2': '`type()` wirft KEINEN TypeError für `False` — `False` ist ein gültiges Argument.',
          '3': 'Den Klassennamen `integer` gibt es in Python nicht — der int-Typ heißt `int`, der bool-Typ heißt `bool`.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Row 10 · transfer · matching · uses=[type-funkt]
      matching(
        'Ordne jedem Python-Wert den korrekten `type()`-Output zu.',
        [
          { left: '`42`', right: "`<class 'int'>`" },
          { left: '`3.14`', right: "`<class 'float'>`" },
          { left: '`"42"`', right: "`<class 'str'>`" },
          { left: '`True`', right: "`<class 'bool'>`" },
        ],
        `**Ansatz:** Jedes Literal ist eindeutig einem Grundtyp zugeordnet:
- Ziffer ohne Punkt, ohne Quotes → \`int\`
- Ziffer mit Punkt, ohne Quotes → \`float\`
- Mit Quotes → \`str\` (egal was drinsteht)
- Schlüsselwort \`True\`/\`False\` → \`bool\`

**Rechnung:** $\\text{type}(42)$ → int · $\\text{type}(3{,}14)$ → float · $\\text{type}('42')$ → str · $\\text{type}(\\text{True})$ → bool.

**Probe:** Im Interpreter sind alle vier Outputs reproduzierbar — \`<class 'int'>\` ≠ \`<class 'float'>\` etc. ✓

**Typischer Fehler:** \`"42"\` und \`42\` als gleichen Typ einordnen. Quotes ändern alles — ein String mit Ziffern bleibt str.`,
        [
          'Punkt im Literal → welcher Typ?',
          'Quotes um den Wert → welcher Typ?',
          'Schlüsselwort True/False → welcher Typ?',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Bonus · apply-independent · multiple-choice · uses=[type-funkt]
      mc(
        'Was ergibt `type(3) == type(3.0)` in Python?',
        ['`False`', '`True`', '`Error`', '`None`'],
        0,
        `**Ansatz:** $\\text{type}(3)$ ist int, $\\text{type}(3.0)$ ist float — zwei verschiedene Klassen. Der Vergleich der Klassen mit $==$ liefert False.

**Rechnung:** $\\text{type}(3) = $ \`<class 'int'>\`. $\\text{type}(3.0) = $ \`<class 'float'>\`. \`<class 'int'>\` $\\neq$ \`<class 'float'>\` → False.

**Probe:** \`>>> type(3) == type(3.0)\` → \`False\`. Aber \`>>> 3 == 3.0\` → \`True\` (Wertgleichheit mit Type-Promotion). ✓

**Typischer Fehler:** Wertvergleich ($3 == 3.0$ ist True) mit Typvergleich gleichsetzen. Zwei Werte können wertgleich sein, aber unterschiedliche Typen haben.`,
        [
          'Welchen Typ liefert $\\text{type}(3)$ vs. $\\text{type}(3{,}0)$?',
          'Sind die beiden Klassen identisch?',
          'int $\\neq$ float — also False.',
        ],
        {
          '1': 'True würde bedeuten, dass int und float dieselbe Klasse sind. Sind sie nicht.',
          '2': '`type()` wirft keinen Error für Zahlen.',
          '3': '`None` käme nur, wenn die Funktion bewusst nichts zurückgibt. Vergleichsoperatoren liefern immer bool.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['type-funkt'] },
      ),
    ],

    // ── SG 2 — `konvertier` — explizite Konvertierung ───────────────────
    2: [
      // Row 11 · recognize · true-false · uses=[konvertier]
      tf(
        "`int('3.14')` wirft in Python einen `ValueError`, weil `int()` keine Strings mit Dezimalpunkt parsen kann.",
        true,
        `**Ansatz:** \`int(s)\` parst nur Strings, die EXAKT eine ganze Zahl darstellen — Vorzeichen + Ziffern. Ein Dezimalpunkt ist nicht zulässig.

**Rechnung:** \`int('3.14')\` versucht, den String '3.14' als ganze Zahl zu lesen. Der Punkt ist kein gültiges int-Zeichen → \`ValueError: invalid literal for int() with base 10: '3.14'\`.

**Probe:** Korrekte Reihenfolge für str → int mit Dezimalstellen: erst $\\text{float}('3.14') = 3.14$, dann $\\text{int}(3.14) = 3$ (schneidet ab). ✓

**Typischer Fehler:** Annehmen, \`int()\` runde Strings automatisch. \`int()\` rundet nur bei float-Argumenten (\`int(3.7) = 3\`), nicht bei Strings.`,
        [
          'Welche Zeichen erlaubt $\\text{int}(s)$ im String?',
          'Was passiert, wenn ein Punkt drinsteht?',
          'Strings mit Punkt → ValueError. Korrekt: $\\text{int}(\\text{float}(s))$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['konvertier'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[konvertier]
      mc(
        'Was ergibt `float("2.5")` in Python?',
        ['`2.5` (float)', '`2` (int)', '`ValueError`', '`"2.5"` (str)'],
        0,
        `**Ansatz:** \`float(s)\` parst einen String als Gleitkommazahl. Punkt im String ist erlaubt und wird als Dezimaltrenner gelesen.

**Rechnung:** \`float("2.5")\` → $2{,}5$ als float. $\\text{type}(\\text{float}('2.5')) = \\text{float}$.

**Probe:** \`>>> float("2.5")\` → \`2.5\` mit \`type(...)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** \`float()\` und \`int()\` verwechseln. \`int("2.5")\` würde ValueError werfen — aber \`float("2.5")\` funktioniert problemlos.`,
        [
          'Was parst $\\text{float}()$?',
          'Ist der Punkt im String erlaubt?',
          'Ergebnis ist float, nicht int oder str.',
        ],
        {
          '1': '`2` (int) entstünde nur, wenn man danach `int(...)` aufruft. `float()` allein liefert immer float.',
          '2': '`ValueError` bekäme `int("2.5")`, weil `int()` keinen Punkt akzeptiert. `float()` akzeptiert ihn aber.',
          '3': '`"2.5"` (str) wäre der Eingabewert — `float()` konvertiert ihn aber, gibt also keinen String zurück.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['konvertier'] },
      ),
      // Row 13 · apply-independent · multiple-choice · uses=[konvertier]
      mc(
        'Welche der folgenden Konvertierungen läuft in Python OHNE Fehler durch?',
        [
          '`int(3.14)`',
          '`int("3.14")`',
          '`int("hallo")`',
          '`int(None)`',
        ],
        0,
        `**Ansatz:** \`int()\` akzeptiert (a) ganze Zahlen, (b) floats (schneidet ab), (c) Strings, die genau eine ganze Zahl darstellen — sonst Fehler.

**Rechnung:**
- \`int(3.14)\` → $3$ ✓ (float-Argument, Dezimalteil wird abgeschnitten, NICHT gerundet).
- \`int("3.14")\` → ValueError (String mit Punkt).
- \`int("hallo")\` → ValueError (String, der keine Zahl ist).
- \`int(None)\` → TypeError (NoneType ist kein gültiges Argument).

**Probe:** \`>>> int(3.14)\` → \`3\` ✓. Die anderen drei produzieren reproduzierbar Errors.

**Typischer Fehler:** \`int(3.14) = 3\` mit \`round(3.14) = 3\` verwechseln. \`int()\` schneidet IMMER zur Null hin ab: \`int(-3.7) = -3\`, NICHT \`-4\`.`,
        [
          'Welche Argumente erlaubt $\\text{int}()$ ohne Fehler?',
          'Bei float: schneidet ab oder rundet?',
          'Nur das float-Argument läuft durch — die anderen werfen Errors.',
        ],
        {
          '1': '`int("3.14")` wirft ValueError — Strings dürfen keinen Punkt enthalten.',
          '2': '`int("hallo")` wirft ValueError — der String muss eine ganze Zahl darstellen.',
          '3': '`int(None)` wirft TypeError — `NoneType` ist kein konvertierbares Argument.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['konvertier'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[konvertier]
      mc(
        'Ein Lerner schreibt `wert = int("12.5")` und erwartet `12` oder `13`. Tatsächlich kommt ein `ValueError`. Was ist die Ursache?',
        [
          '`int()` parst Strings buchstäblich — ein Punkt im String ist nicht zulässig. Korrekt: `int(float("12.5"))` ergibt `12`.',
          'Der Wert "12.5" ist zu groß.',
          'Anführungszeichen sind bei `int()` verboten.',
          'Python kann keine Dezimalzahlen darstellen.',
        ],
        0,
        `**Ansatz:** \`int(s)\` und \`int(x)\` für float \`x\` sind zwei verschiedene Pfade. Strings müssen syntaktisch eine ganze Zahl sein.

**Rechnung:** \`int("12.5")\` → ValueError, weil "12.5" als int-Literal nicht gültig ist. Lösung: erst float-konvertieren, dann int: \`float("12.5")\` → $12{,}5$, dann \`int(12.5)\` → $12$ (Abschneiden zur Null hin).

**Probe:** \`>>> int(float("12.5"))\` → \`12\`. ✓ Wer aufrunden will: \`round(12.5) = 12\` (banker's rounding!) oder \`math.ceil(12.5) = 13\`.

**Typischer Fehler:** Glauben, \`int()\` rufe intern \`round()\` oder \`float()\` auf. Tut es nicht — der String wird buchstäblich geparst.`,
        [
          'Was erlaubt $\\text{int}()$ als String — nur Ganzzahlen oder auch Dezimalzahlen?',
          'Welcher Zwischenschritt löst das Problem?',
          'Erst float, dann int — zwei Aufrufe statt einer.',
        ],
        {
          '1': '"12.5" ist ein winziger Wert für int (Python-int hat keine Größengrenze). Das Problem ist das Format, nicht der Wert.',
          '2': 'Anführungszeichen sind erlaubt — `int("12")` funktioniert ja. Der Punkt ist das Problem.',
          '3': 'Python kann sehr wohl Dezimalzahlen — als float. Das Problem ist nur die String→int-Konvertierung mit Punkt.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['konvertier'] },
      ),
      // Row 15 · transfer · multiple-choice · uses=[konvertier]
      mc(
        'Ein Sensor liefert die Spannung als String `"5.7"`. Welche Zeile speichert sie korrekt als float in `u`?',
        [
          '`u = float("5.7")`',
          '`u = int("5.7")`',
          '`u = str(5.7)`',
          '`u = "5.7"`',
        ],
        0,
        `**Ansatz:** Ziel: aus dem String "5.7" eine Zahl vom Typ float gewinnen. Genau das macht \`float(s)\`.

**Rechnung:** \`float("5.7")\` parst den String und liefert $5{,}7$ als float. $\\text{type}(u) = \\text{float}$ ✓.

**Probe:** \`>>> u = float("5.7"); type(u)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** \`int("5.7")\` schreiben — wirft ValueError. Oder \`u = "5.7"\` ohne Konvertierung — bleibt String. Mit einem String kann man nicht rechnen: \`"5.7" * 2\` ergibt \`"5.75.7"\` (Konkatenation), nicht \`11.4\`.`,
        [
          'Welche Funktion macht "String → float"?',
          'Was passiert ohne Konvertierung mit dem String "5.7"?',
          'Nur $\\text{float}()$ liefert das, was man messen wollte.',
        ],
        {
          '1': '`int("5.7")` wirft ValueError. Selbst wenn es ginge, würde der Dezimalteil verloren gehen.',
          '2': '`str(5.7)` macht den umgekehrten Weg: float → str. Hier ist die Eingabe schon String, also doppelt verkehrt.',
          '3': '`u = "5.7"` lässt den String unverändert — keine Konvertierung. `u` wäre ein str, kein float.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['konvertier'] },
      ),
      // Bonus · apply-independent · multiple-choice · uses=[konvertier]
      mc(
        'Was steht nach Ausführung in `n`?\n```\ns = "42"\nn = int(s) + 1\n```',
        ['`43`', '`"421"`', '`"43"`', '`TypeError`'],
        0,
        `**Ansatz:** Schritt 1: $\\text{int}(s)$ konvertiert "42" zu int $42$. Schritt 2: $42 + 1 = 43$.

**Rechnung:** \`int("42")\` → $42$ (int). $42 + 1 = 43$ (int + int = int). $n = 43$.

**Probe:** \`>>> n = int("42") + 1\` → \`n == 43\`. ✓

**Typischer Fehler:** Konkatenation ohne Konvertierung: \`"42" + "1" = "421"\` (str + str). Oder \`"42" + 1\` → TypeError (str + int). Erst konvertieren, dann rechnen!`,
        [
          'Welcher Operator wird zuerst ausgeführt — $\\text{int}()$ oder $+$?',
          'Was liefert $\\text{int}(\\text{"42"})$?',
          'Dann normaler Integer-Plus: $42 + 1$.',
        ],
        {
          '1': '`"421"` entsteht durch String-Konkatenation `"42" + "1"`. Hier konvertieren wir aber zu int, bevor wir addieren.',
          '2': '`"43"` wäre nur das Ergebnis, wenn man am Schluss wieder zu str konvertiert. `n = int(s) + 1` liefert aber int.',
          '3': '`TypeError` käme bei `"42" + 1` (str + int). Hier ist `int(s)` schon int, also kein Typenkonflikt.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['konvertier'] },
      ),
    ],

    // ── SG 3 — `naming-conv` — Namenskonventionen ────────────────────────
    3: [
      // Row 16 · recognize · true-false · uses=[naming-conv]
      tf(
        'Die Python-Konvention (PEP 8) für mehrwortige Variablennamen ist `snake_case` mit Kleinbuchstaben und Unterstrich, z.B. `kraft_in_newton`.',
        true,
        `**Ansatz:** PEP 8 ist der offizielle Style-Guide für Python und definiert die Namenskonventionen.

**Rechnung:** Variablen in Python: snake_case → \`kraft_in_newton\`, \`anzahl_iterationen\`. Konstanten: SCREAMING_SNAKE_CASE → \`MAX_KRAFT\`. Klassen: PascalCase → \`KraftBerechner\`. Matlab dagegen nutzt typischerweise camelCase: \`kraftInNewton\`.

**Probe:** Ein Blick in die Python Standard-Library: \`os.path.join\`, \`numpy.linalg.solve\` — alles snake_case. ✓

**Typischer Fehler:** camelCase aus Java/Matlab in Python übernehmen — funktioniert technisch (Python akzeptiert beide), gilt aber als Stilbruch und ärgert Code-Reviewer.`,
        [
          'Wer schreibt den Style-Guide für Python?',
          'snake_case oder camelCase in Python?',
          'snake_case mit Unterstrich für Variablen.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[naming-conv]
      mc(
        'Welcher Variablenname für "die maximale Spannung in MPa" entspricht der Python-Konvention?',
        [
          '`max_spannung_mpa`',
          '`maxSpannungMPa`',
          '`MaxSpannungMPa`',
          '`max-spannung-mpa`',
        ],
        0,
        `**Ansatz:** Python nutzt snake_case: alles kleingeschrieben, Wörter mit Unterstrich getrennt. Bindestriche sind in Identifiern nicht erlaubt.

**Rechnung:** "maximale Spannung in MPa" → drei Wörter → \`max_spannung_mpa\`. Alle Buchstaben klein, dazwischen \`_\`.

**Probe:** Konsistent mit \`numpy.linalg.solve\`, \`scipy.optimize.curve_fit\` — Standard-Library-Stil. ✓

**Typischer Fehler:** camelCase oder PascalCase statt snake_case (Java/Matlab-Stil). Oder Bindestriche, die Python als Subtraktion liest.`,
        [
          'snake oder camel?',
          'Klein oder groß geschrieben?',
          'Unterstrich oder Bindestrich?',
        ],
        {
          '1': 'camelCase ist Matlab-Stil, nicht Python. Funktioniert technisch (gültiger Bezeichner), gilt aber als unpythonisch.',
          '2': 'PascalCase ist in Python für KLASSEN reserviert (z.B. `KraftBerechner`). Für Variablen wirkt das wie ein Klassenname.',
          '3': 'Bindestriche sind in Python-Identifiern nicht erlaubt — Python parst `max-spannung-mpa` als Subtraktionsausdruck.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[naming-conv]
      mc(
        'Welcher der folgenden Python-Variablennamen ist sowohl SYNTAKTISCH gültig als auch konventionsgerecht?',
        [
          '`kraft_in_n`',
          '`1_kraft`',
          '`kraftInN`',
          '`kraft-in-n`',
        ],
        0,
        `**Ansatz:** Zwei Anforderungen sind zu erfüllen: (a) gültiger Python-Identifier (beginnt mit Buchstabe oder \`_\`, danach Buchstaben/Ziffern/\`_\`); (b) snake_case-Konvention.

**Rechnung:**
- \`kraft_in_n\` — gültig + snake_case ✓
- \`1_kraft\` — Identifier dürfen NICHT mit Ziffer beginnen → SyntaxError.
- \`kraftInN\` — gültig, aber camelCase (Matlab-Stil), nicht snake_case.
- \`kraft-in-n\` — Bindestrich verboten → SyntaxError.

**Probe:** \`>>> 1_kraft = 5\` → SyntaxError. \`>>> kraft_in_n = 5\` läuft durch. ✓

**Typischer Fehler:** "Funktioniert" mit "konventionsgerecht" verwechseln. \`kraftInN\` läuft, ist aber unpythonisch.`,
        [
          'Welche Zeichen sind erlaubt — am Anfang, in der Mitte?',
          'Welche Schreibweise ist Python-Konvention?',
          'snake_case + gültiger Identifier = beide Bedingungen.',
        ],
        {
          '1': '`1_kraft` ist syntaktisch UNGÜLTIG — Identifier dürfen nicht mit Ziffer beginnen.',
          '2': '`kraftInN` ist syntaktisch gültig, aber camelCase (Matlab) statt snake_case (Python).',
          '3': '`kraft-in-n` ist syntaktisch UNGÜLTIG — Bindestrich ist nicht erlaubt.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[naming-conv]
      mc(
        'Ein Studierender schreibt `mein-wert = 5` in Python. Was meldet der Interpreter?',
        [
          '`SyntaxError` — Python parst `mein-wert` als Subtraktionsausdruck `(mein - wert)`; eine Zuweisung an einen Ausdruck ist nicht zulässig.',
          'Funktioniert: Bindestriche sind in Python-Variablen erlaubt.',
          '`NameError` — `mein` ist nicht definiert.',
          '`IndentationError`',
        ],
        0,
        `**Ansatz:** Python kennt nur \`-\` als Operator (Subtraktion). Ein Bindestrich in einem geplanten Identifier wird als Subtraktion interpretiert.

**Rechnung:** Parser sieht \`mein-wert\` als $\\text{mein} - \\text{wert}$. Die Zeile heißt also "weise einem Ausdruck den Wert 5 zu" → SyntaxError: \`cannot assign to expression\` (bzw. \`cannot assign to operator\`).

**Probe:** Im Interpreter testen: \`>>> mein-wert = 5\` → SyntaxError. ✓ Lösung: \`mein_wert = 5\` (Unterstrich).

**Typischer Fehler:** Bindestrich-getrennte Namen aus HTML/CSS/Kebab-Case in Python übernehmen. In Python ist \`-\` immer Operator.`,
        [
          'Was bedeutet \`-\` für Python?',
          'Wie liest der Parser \`a-b\`?',
          'Bindestrich → Subtraktion → Ausdruck → SyntaxError bei Zuweisung.',
        ],
        {
          '1': 'Bindestriche sind NIE in Python-Identifiern erlaubt — egal an welcher Stelle.',
          '2': 'Selbst wenn `mein` und `wert` definiert wären, würde dieselbe Zeile SyntaxError werfen — nicht NameError. Das Parsen scheitert vor der Namensauflösung.',
          '3': 'IndentationError tritt nur bei falscher Einrückung auf, nicht bei Bindestrichen.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Row 20 · transfer · matching · uses=[naming-conv]
      matching(
        'Ordne die Beschreibung dem konventionsgerechten Variablennamen zu.',
        [
          { left: 'Variable in Python (snake_case)', right: '`anzahl_iterationen`' },
          { left: 'Variable in Matlab (camelCase)', right: '`numIterations`' },
          { left: 'Konstante in Python (PEP 8)', right: '`MAX_KRAFT`' },
          { left: 'Privater Hilfsname in Python (mit Underscore-Prefix)', right: '`_temp`' },
        ],
        `**Ansatz:** Jede Sprache und jeder Kontext hat eine eigene Konvention. PEP 8 definiert für Python:
- normale Variable → snake_case (\`anzahl_iterationen\`)
- Konstante → SCREAMING_SNAKE_CASE (\`MAX_KRAFT\`)
- privater/intern genutzter Name → führender Underscore (\`_temp\`)

Matlab dagegen nutzt camelCase: \`numIterations\`.

**Rechnung:** Vier Beschreibungen, vier eindeutige Namen. Mapping ist eindeutig, weil jede Schreibweise zu genau einer Rolle passt.

**Probe:** Cross-Check mit Standard-Bibliotheken: NumPy (\`np.linalg.norm\`), Matlab (\`numIter\`), Python-Konstante (\`math.pi\` ist Sonderfall, aber \`math.inf\` und benutzerdefinierte \`MAX_*\` folgen PEP 8). ✓

**Typischer Fehler:** Konstanten-Stil und normale-Variable-Stil verwechseln (\`MAX_KRAFT\` vs. \`max_kraft\`). Kleinschreibung = änderbar, Großschreibung = konstant.`,
        [
          'Welche Schreibweise ist Python-Default für Variablen?',
          'Wie kennzeichnet PEP 8 Konstanten?',
          'Was bedeutet ein führender Underscore?',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Bonus · recognize · true-false · uses=[naming-conv]
      tf(
        'In Matlab ist `mein_wert` ein syntaktisch gültiger Variablenname, aber die typische Matlab-Konvention nutzt camelCase wie `meinWert`.',
        true,
        `**Ansatz:** Matlab erlaubt Unterstriche in Identifiern (anders als manche älteren Sprachen), die Convention der Matlab-Community ist aber camelCase.

**Rechnung:** \`>> mein_wert = 5\` läuft in Matlab problemlos durch. Trotzdem bevorzugen Matlab-Code-Style-Guides (z.B. MathWorks-Doku) camelCase: \`meinWert\`. So sieht man Matlab-typischen Code von Python-typischem auf einen Blick.

**Probe:** Matlab-Standardfunktionen: \`zeros\`, \`linspace\`, \`numel\` — kurze, oft camelCase-Namen. ✓

**Typischer Fehler:** Annehmen, snake_case sei in Matlab "verboten". Es ist nur unüblich, nicht ungültig.`,
        [
          'Erlaubt Matlab Unterstriche in Identifiern?',
          'Was ist die Matlab-Style-Konvention?',
          'Beides geht — Konvention bevorzugt camelCase.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['naming-conv'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // py-1-2 — Operatoren & Ausdrücke  (5 subGoals)
  // 30 Aufgaben mit pedagogy-Tags · alle 25 Matrix-Zeilen + 5 Bonus.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-2': {
    // ── SG 0 — `div-op` — `/` Float, `//` Integer, `%` Modulo ────────────
    0: [
      // Row 1 · recognize · true-false · uses=[div-op]
      tf(
        'In Python 3 liefert `/` IMMER einen `float`, auch wenn beide Operanden int sind: `4 / 2` ergibt `2.0`, nicht `2`.',
        true,
        `**Ansatz:** Python 3 hat \`/\` und \`//\` strikt getrennt: \`/\` ist die "echte" Division mit float-Ergebnis, \`//\` die Ganzzahldivision (rundet ab).

**Rechnung:** \`4 / 2\` wertet als $4 \\div 2 = 2{,}0$ (float), \`type(4 / 2)\` ist \`<class 'float'>\`. Will man int, schreibt man \`4 // 2\` oder \`int(4 / 2)\`.

**Probe:** \`>>> 4 / 2\` → \`2.0\` (mit Punkt). \`>>> type(4 / 2)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** Aus Python 2 oder C den Reflex mitbringen, dass int / int → int gilt. Python 3 hat das absichtlich geändert — sicherer, weil man bei Division selten "abrunden" will.`,
        [
          'Welcher Typ kommt bei int / int in Python 3 raus?',
          'Was ist der Unterschied zwischen `/` und `//`?',
          '`/` immer float, `//` int (bei int-Operanden).',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['div-op'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[div-op]
      mc(
        'Was ergibt `25 / 4` in Python 3?',
        ['`6.25`', '`6`', '`6.0`', '`"25/4"`'],
        0,
        `**Ansatz:** \`/\` ist die echte Division — Ergebnis ist float, auch wenn beide Operanden int sind.

**Rechnung:** $25 \\div 4 = 6{,}25$. Python liefert \`6.25\` als float.

**Probe:** \`>>> 25 / 4\` → \`6.25\`. ✓ Im Vergleich: \`>>> 25 // 4\` → \`6\` (int), \`>>> 25 % 4\` → \`1\` (Rest).

**Typischer Fehler:** Dezimalstellen weglassen ("$25 / 4 = 6$ Rest 1") und 6 als Antwort schreiben — das wäre Ganzzahldivision.`,
        [
          'Welcher Operator wird verwendet — `/` oder `//`?',
          'Liefert `/` bei int-Operanden int oder float?',
          '$25 \\div 4 = 6{,}25$ exakt.',
        ],
        {
          '1': '`6` wäre das Ergebnis von `25 // 4` (Ganzzahldivision). Hier steht aber `/`, also volle Division mit Dezimalanteil.',
          '2': '`6.0` würde nur entstehen, wenn $25 / 4$ exakt $6$ wäre — ist es aber nicht. $25 / 4 = 6{,}25$, der Dezimalanteil $0{,}25$ wird beibehalten.',
          '3': 'Python wertet `/` als arithmetische Division aus, nicht als String-Konkatenation. Das wäre nur bei Strings (`"25" + "/" + "4"`) der Fall.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['div-op'] },
      ),
      // Row 3 · apply-independent · number-input · uses=[div-op]
      ni(
        'Berechne den Wert von `23 // 4` in Python.',
        5, 0, '',
        `**Ansatz:** \`//\` ist die Ganzzahldivision — sie gibt den abgerundeten Quotienten zurück.

**Rechnung:** $23 \\div 4 = 5{,}75$. \`//\` schneidet zur Null hin ab → $5$. Identitätsprobe: $23 = 5 \\cdot 4 + 3$ (Quotient 5, Rest 3).

**Probe:** \`>>> 23 // 4\` → \`5\`. \`>>> 23 % 4\` → \`3\`. \`>>> 5 * 4 + 3\` → \`23\` ✓.

**Typischer Fehler:** Aufrunden statt abrunden — \`23 // 4\` ist NICHT 6. Bei positiven Werten ist \`//\` immer "Math.floor".`,
        [
          'Wie oft passt 4 ganz in 23?',
          'Quotient · Divisor + Rest = Dividend.',
          '$23 = 5 \\cdot 4 + 3$ → Quotient 5.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['div-op'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[div-op]
      mc(
        'Ein Lerner schreibt in Python 3 `n = 7 / 2` und erwartet `n == 3`. Tatsächlich liefert die Zeile `n = 3.5`. Was ist der Fehler?',
        [
          'In Python 3 ist `/` immer float-Division. Für die ganze Zahl ohne Rest muss `//` verwendet werden: `n = 7 // 2` → `3`.',
          '`7 / 2` ist syntaktisch ungültig in Python.',
          'Python rundet Floats automatisch zur nächsten ganzen Zahl.',
          'Der Fehler liegt bei `n` als Variablenname.',
        ],
        0,
        `**Ansatz:** \`/\` (echte Division) und \`//\` (Ganzzahldivision) sind in Python 3 verschiedene Operatoren mit unterschiedlichem Ergebnistyp.

**Rechnung:** \`7 / 2\` → $3{,}5$ (float). \`7 // 2\` → $3$ (int). Wer "wie oft passt 2 ganz in 7?" rechnen will, braucht \`//\`.

**Probe:** \`>>> type(7 / 2)\` → float, \`>>> type(7 // 2)\` → int. Die Ergebnisse stimmen mit der Python-3-Spezifikation überein. ✓

**Typischer Fehler:** Aus Python 2 oder C/Java mitnehmen, dass int / int → int. Python 3 brach diese Konvention bewusst, um Bugs durch unbeabsichtigtes Abrunden zu vermeiden.`,
        [
          'Welcher Operator schneidet den Rest ab?',
          'Was unterscheidet `/` und `//`?',
          'Für ganze Zahl: `//` benutzen.',
        ],
        {
          '1': '`7 / 2` ist gültig — es ergibt nur eben float, nicht int. Kein Syntaxfehler.',
          '2': 'Python rundet NICHT automatisch — `/` liefert exakt $3{,}5$. Wer runden will, ruft `round()` auf.',
          '3': '`n` ist ein gültiger Variablenname. Das Problem liegt am Operator, nicht am Namen.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['div-op'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[div-op]
      mc(
        'Eine Messung dauert 200 Minuten. Welche Python-Zeile berechnet die Anzahl voller Stunden (als ganze Zahl)?',
        [
          '`stunden = 200 // 60`',
          '`stunden = 200 / 60`',
          '`stunden = 200 % 60`',
          '`stunden = 60 // 200`',
        ],
        0,
        `**Ansatz:** "Volle Stunden" = ganzzahliger Quotient von Minuten/60. Genau dafür ist \`//\` da.

**Rechnung:** \`200 // 60\` → $3$ (denn $3 \\cdot 60 = 180$, Rest $20$). Die übrigen $20$ Minuten kommen mit \`200 % 60\` heraus.

**Probe:** $3 \\cdot 60 + 20 = 200$ ✓. Die typische Zeit-Aufteilung: \`stunden, minuten = divmod(200, 60)\` liefert \`(3, 20)\` in einem Aufruf.

**Typischer Fehler:** \`/\` statt \`//\` nimmt — das Ergebnis $3{,}333\\ldots$ ist kein "ganze Stunden". Oder \`%\` statt \`//\` — das gibt den Rest, nicht den Quotienten.`,
        [
          'Was bedeutet "volle Stunden" mathematisch?',
          'Welcher Operator schneidet ab?',
          '$200 //\\ 60$ → wieviele 60er passen ganz?',
        ],
        {
          '1': '`200 / 60` liefert $3{,}333\\ldots$ — keine ganze Zahl. Erwartet ist aber "volle Stunden".',
          '2': '`200 % 60` liefert $20$ — das ist der REST in Minuten, nicht die Anzahl Stunden.',
          '3': '`60 // 200` liefert $0$ — falsche Reihenfolge der Operanden. Die Anzahl Stunden braucht Minuten/60, nicht 60/Minuten.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['div-op'] },
      ),
      // Bonus · apply-independent · number-input · uses=[div-op]
      ni(
        'Was ergibt `17 % 6` in Python?',
        5, 0, '',
        `**Ansatz:** \`%\` liefert den Rest der Ganzzahldivision $a //\\ b$.

**Rechnung:** $17 //\\ 6 = 2$ (denn $2 \\cdot 6 = 12$). Rest = $17 - 12 = 5$. Also \`17 % 6 = 5\`.

**Probe:** Identität: $17 = 2 \\cdot 6 + 5$ ✓.

**Typischer Fehler:** $17 //\\ 6$ als $3$ schätzen ($3 \\cdot 6 = 18 > 17$ — zu groß). Die nächstkleinere ganze Zahl ist $2$.`,
        [
          'Wie oft passt 6 ganz in 17?',
          'Rest = $17 - (\\text{Quotient} \\cdot 6)$.',
          '$2 \\cdot 6 = 12$, Rest $5$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['div-op'] },
      ),
    ],

    // ── SG 1 — `pot-op` — Python `**`, Matlab `^` / `.^` ─────────────────
    1: [
      // Row 6 · recognize · true-false · uses=[pot-op]
      tf(
        'In Python schreibt man Potenzierung mit `**` (z.B. `2 ** 3 = 8`); Matlab nutzt für skalare Werte `^` und für elementweise Array-Potenz `.^`.',
        true,
        `**Ansatz:** Drei Operatoren über zwei Sprachen — wichtig zum Cross-Lesen von Code.

**Rechnung:** Python: \`2 ** 3\` = $8$. Matlab Skalar: \`2^3\` = $8$. Matlab Array: \`A.^2\` quadriert jedes Element von $A$, während \`A^2\` die Matrix-Potenz $A \\cdot A$ wäre (nur für quadratische Matrizen).

**Probe:** Matlab \`>> A = [1 2; 3 4]; A.^2\` → \`[1 4; 9 16]\` (elementweise). \`>> A^2\` → \`[7 10; 15 22]\` (Matrix-Multiplikation). Unterschiedliche Ergebnisse, gleiche Dimensions-Erwartung. ✓

**Typischer Fehler:** In Python \`^\` schreiben — das ist dort der bitweise XOR-Operator, kein Potenz. \`2 ^ 3\` in Python ergibt $1$ (XOR), nicht $8$.`,
        [
          'Welches Symbol hat Python für Potenz?',
          'Wie unterscheidet Matlab Skalar- und Array-Potenz?',
          '\`**\` Python · \`^\` Matlab Skalar · \`.^\` Matlab elementweise.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['pot-op'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[pot-op]
      mc(
        'Was ergibt `3 ** 4` in Python?',
        ['`81`', '`12`', '`64`', '`7`'],
        0,
        `**Ansatz:** \`a ** b\` ist Python-Notation für $a^b$.

**Rechnung:** $3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 9 \\cdot 9 = 81$.

**Probe:** \`>>> 3 ** 4\` → \`81\`. ✓ Auch über Logarithmen: $\\ln(81) = 4 \\ln(3) \\approx 4 \\cdot 1{,}0986 \\approx 4{,}394$, $e^{4{,}394} \\approx 81$ ✓.

**Typischer Fehler:** \`**\` als Multiplikation lesen ($3 \\cdot 4 = 12$) — typisch, wenn man XOR/Bitoperatoren aus C übernimmt oder \`*\` und \`**\` verwechselt.`,
        [
          'Was bedeutet \`**\` in Python?',
          'Multiplikation oder Potenz?',
          '$3$ vier mal mit sich selbst multipliziert.',
        ],
        {
          '1': '`12` wäre $3 \\cdot 4$ (Multiplikation). \`**\` ist Potenz, nicht Mal.',
          '2': '`64` ist $4^3$, also Basis und Exponent vertauscht. \`a ** b\` heißt $a^b$, nicht $b^a$.',
          '3': '`7` ist $3 + 4$ (Addition). Ganz andere Operation.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['pot-op'] },
      ),
      // Row 8 · apply-independent · number-input · uses=[pot-op]
      ni(
        'Was ergibt `5 ** 4` in Python?',
        625, 0, '',
        `**Ansatz:** $5^4 = 5 \\cdot 5 \\cdot 5 \\cdot 5$.

**Rechnung:** $5^2 = 25$, $25^2 = 625$. Also $5^4 = 625$.

**Probe:** \`>>> 5 ** 4\` → \`625\`. ✓ Quersumme der Ziffern: $6+2+5 = 13$. Fehlerprobe: $25 \\cdot 25 = 625$ (per Hand: $25 \\cdot 25 = 25 \\cdot (20 + 5) = 500 + 125 = 625$) ✓.

**Typischer Fehler:** $5 \\cdot 4 = 20$ rechnen (Multiplikation statt Potenz) oder $4^5 = 1024$ (Basis und Exponent vertauscht).`,
        [
          'Wieviele Faktoren $5$?',
          'Schreibe als $5^2 \\cdot 5^2$.',
          '$25 \\cdot 25 = 625$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pot-op'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[pot-op]
      mc(
        'Ein Studierender schreibt in Python `result = 2 ^ 5` und erwartet `32`, bekommt aber `7`. Was ist passiert?',
        [
          'In Python ist `^` der bitweise XOR-Operator, nicht Potenz: `2 ^ 5` rechnet `010 XOR 101 = 111 = 7`. Korrekt für Potenz: `2 ** 5 = 32`.',
          'Python rundet Potenzen ab.',
          '`^` in Python liefert immer 7.',
          'Der Fehler liegt bei `result` als Variablenname.',
        ],
        0,
        `**Ansatz:** \`^\` und \`**\` sind in Python verschiedene Operatoren — \`^\` bitweises XOR, \`**\` Potenz.

**Rechnung:** Binärdarstellung: $2 = 010_2$, $5 = 101_2$. XOR bit-für-bit: $0 \\oplus 1 = 1$, $1 \\oplus 0 = 1$, $0 \\oplus 1 = 1$ → $111_2 = 7$. Mit \`**\`: $2^5 = 32$.

**Probe:** \`>>> 2 ** 5\` → \`32\` ✓. \`>>> 2 ^ 5\` → \`7\` (XOR). Die beiden sind nur bei sehr speziellen Bit-Mustern gleich, in der Regel verschieden.

**Typischer Fehler:** Matlab-Reflex (\`^\` für Skalar-Potenz) auf Python übertragen. In Matlab funktioniert \`2^5 = 32\`, in Python NICHT.`,
        [
          'Welche Bedeutung hat \`^\` in Python?',
          'Welcher Operator macht in Python Potenzieren?',
          'Matlab-Reflex: in Python ist \`**\` für Potenz.',
        ],
        {
          '1': 'Python rundet keine Potenzen — \`2 ** 5\` ist exakt $32$. Das Ergebnis $7$ kommt vom XOR.',
          '2': '\`^\` liefert nur dann 7, wenn die Bit-Muster genau XOR-7 ergeben — bei anderen Zahlen kommt anderes raus. Es ist ein bitweiser Operator, kein konstanter Rückgabewert.',
          '3': '\`result\` ist ein gültiger Name. Das Problem liegt allein beim Operator.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['pot-op'] },
      ),
      // Row 10 · transfer · multiple-choice · uses=[pot-op]
      mc(
        'Was ergibt `(-2) ** 3` in Python?',
        ['`-8`', '`8`', '`6`', '`-6`'],
        0,
        `**Ansatz:** $(-2)^3 = (-2) \\cdot (-2) \\cdot (-2)$. Drei negative Faktoren → Vorzeichen bleibt negativ.

**Rechnung:** $(-2) \\cdot (-2) = 4$, $4 \\cdot (-2) = -8$. Allgemein: bei ungeradem Exponenten bleibt das Vorzeichen, bei geradem wird es positiv: $(-2)^4 = +16$.

**Probe:** \`>>> (-2) ** 3\` → \`-8\` ✓. \`>>> (-2) ** 4\` → \`16\` ✓.

**Typischer Fehler 1:** Klammer weglassen: \`-2 ** 3\` wertet als \`-(2 ** 3) = -8\` — selbes Ergebnis hier, aber bei geradem Exponenten unterschiedlich: \`-2 ** 2\` liefert \`-4\` (nicht $4$), weil Potenz vor unärem Minus bindet. **Typischer Fehler 2:** Vorzeichen vergessen und $8$ schreiben.`,
        [
          'Wieviele negative Faktoren entstehen?',
          'Ungerader Exponent → Vorzeichen?',
          'Drei mal $-2$ → Vorzeichen bleibt negativ.',
        ],
        {
          '1': '`8` wäre $2^3$ ohne Vorzeichen oder $(-2)^4$ mit gerader Potenz. Hier ist Exponent ungerade — Vorzeichen bleibt negativ.',
          '2': '`6` entstünde durch $-2 - 2 - 2$ mit Subtraktion oder durch Multiplikation falsch interpretiert. Potenz heißt aber wiederholte Multiplikation.',
          '3': '`-6` wäre $-(2+2+2)$. Auch falsch — Potenz ist Multiplikation, nicht Addition.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['pot-op'] },
      ),
      // Bonus · apply-independent · number-input · uses=[pot-op]
      ni(
        'Was ergibt `9 ** 0.5` in Python?',
        3, 0.001, '',
        `**Ansatz:** $a^{1/2} = \\sqrt{a}$. Mit \`**\` lassen sich Wurzeln als Potenzen schreiben.

**Rechnung:** $9^{0{,}5} = \\sqrt{9} = 3$.

**Probe:** \`>>> 9 ** 0.5\` → \`3.0\` (float). $3 \\cdot 3 = 9$ ✓.

**Typischer Fehler:** $9 \\cdot 0{,}5 = 4{,}5$ rechnen — das wäre Multiplikation. \`**\` ist Potenz, $9^{0{,}5}$ ist Quadratwurzel.`,
        [
          'Was bedeutet ein Exponent $1/2$?',
          'Schreibe um in Wurzelnotation.',
          '$\\sqrt{9} = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pot-op'] },
      ),
    ],

    // ── SG 2 — `log-op` — Logische Operatoren ────────────────────────────
    2: [
      // Row 11 · recognize · true-false · uses=[log-op]
      tf(
        'In Python heißen die logischen Operatoren `and`, `or`, `not` (Wörter); in Matlab nutzt man `&&`, `||`, `~` für Skalare.',
        true,
        `**Ansatz:** Python wählt englische Wörter als Operatoren (lesefreundlich), Matlab nutzt Symbole (näher an C/Java).

**Rechnung:** Python: \`if x > 0 and x < 10:\`. Matlab: \`if x > 0 && x < 10\`. Bei Arrays in Matlab elementweise: \`&\`, \`|\`, \`~\`.

**Probe:** Python akzeptiert \`&&\` NICHT — \`if x > 0 && x < 10:\` wirft \`SyntaxError\`. Matlab akzeptiert \`and\` als Funktion (\`and(a, b)\`), aber nicht als Infix-Operator. ✓

**Typischer Fehler:** \`&\` und \`|\` in Python für logische Verknüpfung benutzen — das sind dort BITWEISE Operatoren auf int (z.B. \`5 & 3 = 1\`), nicht logische. Funktioniert für bool zufällig oft, kann aber falsche Ergebnisse liefern bei int-Werten.`,
        [
          'Wörter oder Symbole in Python?',
          'Was schreibt Matlab für skalares "und"?',
          'Python: and/or/not · Matlab: \`&&\`/\`||\`/\`~\`.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['log-op'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[log-op]
      mc(
        'Was ergibt `(5 > 3) and (2 < 1)` in Python?',
        ['`False`', '`True`', '`None`', '`SyntaxError`'],
        0,
        `**Ansatz:** Bei \`A and B\` wird zuerst $A$ ausgewertet, dann $B$. Ergebnis ist nur dann \`True\`, wenn BEIDE wahr sind.

**Rechnung:** $5 > 3$ → True. $2 < 1$ → False. \`True and False\` → False.

**Probe:** Wahrheitstabelle: T ∧ F = F. ✓ Verifikation: \`>>> (5 > 3) and (2 < 1)\` → \`False\`.

**Typischer Fehler:** Nur den ersten Vergleich ansehen ($5 > 3$ ist wahr → Gesamtergebnis True). \`and\` braucht BEIDE Seiten wahr.`,
        [
          'Werte beide Vergleiche einzeln aus.',
          'Was ist die Wahrheitstabelle für AND?',
          'True AND False → ?',
        ],
        {
          '1': 'True würde bedeuten, beide Vergleiche sind wahr. Aber $2 < 1$ ist False.',
          '2': 'None entsteht nicht aus Vergleichen oder Logik — Python liefert immer bool zurück.',
          '3': 'Die Syntax ist gültig (Klammern + and). Kein SyntaxError.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['log-op'] },
      ),
      // Row 13 · apply-independent · multiple-choice · uses=[log-op]
      mc(
        'Was ergibt `not (False or True)` in Python?',
        ['`False`', '`True`', '`0`', '`1`'],
        0,
        `**Ansatz:** Klammern zuerst: \`False or True\`. Dann \`not\` auf das Ergebnis.

**Rechnung:** \`False or True\` → True (denn ein Operand wahr → or wahr). \`not True\` → False.

**Probe:** Negation: \`>>> not True\` → \`False\` ✓. Verifikation: \`>>> not (False or True)\` → \`False\`.

**Typischer Fehler:** \`not\` zuerst auf \`False\` anwenden: \`(not False) or True\` → \`True or True\` → True. Aber \`not\` bindet hier auf die KLAMMER, nicht nur auf \`False\`.`,
        [
          'Klammern zuerst auswerten.',
          'Was ergibt $\\text{False} \\lor \\text{True}$?',
          '$\\lnot \\text{True} = ?$',
        ],
        {
          '1': '`True` würde bedeuten, das or-Ergebnis sei False — aber `False or True` ist True, und `not True` ist False.',
          '2': '`0` ist zwar gleich `False`, aber `not (...)` liefert IMMER bool, nicht int. Python schreibt das als `False`.',
          '3': '`1` würde der Wahrheitswert True entsprechen — wäre nur korrekt, wenn das Gesamtergebnis True wäre. Ist es nicht.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['log-op'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[log-op]
      mc(
        'Ein Studierender schreibt in Python `if x > 0 && x < 10:`. Was passiert?',
        [
          '`SyntaxError` — Python verwendet `and` für logisches UND, nicht `&&`. Korrekt: `if x > 0 and x < 10:`.',
          'Funktioniert: `&&` wird als `and` interpretiert.',
          '`x` muss ein bool sein.',
          '`NameError` — `&&` ist nicht definiert.',
        ],
        0,
        `**Ansatz:** Python's Lexer kennt \`&&\` nicht — er sieht ein einzelnes \`&\` (bitweises UND), erwartet danach einen Ausdruck und stolpert beim zweiten \`&\`.

**Rechnung:** Korrekte Schreibweise:
- Python: \`if x > 0 and x < 10:\` — oder eleganter mit verkettetem Vergleich: \`if 0 < x < 10:\`.
- Matlab: \`if x > 0 && x < 10\`.

**Probe:** Im Python-Interpreter: \`>>> if x > 0 && x < 10:\` → \`SyntaxError: invalid syntax\`. ✓

**Typischer Fehler:** Matlab/C/Java-Reflex auf Python übertragen. Python war eine bewusste Designentscheidung, Wörter statt Symbole zu nutzen.`,
        [
          'Welche Sprache nutzt \`&&\`?',
          'Wie schreibt Python das?',
          'Wort \`and\`, nicht Symbol.',
        ],
        {
          '1': 'Python interpretiert \`&&\` NICHT als \`and\` — es wirft SyntaxError, da der Lexer das Doppel-Symbol nicht kennt.',
          '2': 'Der Typ von \`x\` spielt für die Syntax keine Rolle — der Fehler kommt vor dem Auswerten.',
          '3': 'Python wirft hier SyntaxError beim Parsen, nicht NameError. NameError gäbe es nur, wenn der Parser fertig wäre und der Name nicht definiert wäre.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['log-op'] },
      ),
      // Row 15 · transfer · matching · uses=[log-op]
      matching(
        'Ordne jedem Anwendungsfall die korrekte Schreibweise zu.',
        [
          { left: 'Python — logisches UND zwischen zwei bool-Bedingungen', right: '`a and b`' },
          { left: 'Matlab — UND zwischen zwei skalaren Bedingungen (Kurzschluss)', right: '`a && b`' },
          { left: 'Matlab — elementweises UND zwischen zwei bool-Arrays', right: '`a & b`' },
          { left: 'Python — logisches NICHT', right: '`not a`' },
        ],
        `**Ansatz:** Vier verschiedene Kontexte, vier verschiedene Schreibweisen — gleicher logischer Inhalt, aber Sprache und Datenform entscheiden.

**Rechnung:** Matlab unterscheidet Skalar- und Array-Operatoren: \`&&\` und \`||\` sind nur für Skalare (mit Kurzschluss-Auswertung), \`&\` und \`|\` arbeiten elementweise auf Arrays. Python kennt diese Unterscheidung nicht — \`and\`/\`or\` sind immer skalar mit Kurzschluss; für elementweise auf NumPy-Arrays nutzt man \`&\`/\`|\` (oder \`np.logical_and\`).

**Probe:** Matlab \`>> [1 0 1] & [0 1 1]\` → \`[0 0 1]\` (elementweise). \`>> 1 && 0\` → \`0\` (Skalar). ✓

**Typischer Fehler:** \`&\` in Python für \`and\` benutzen — das ist bitweises UND. Bei int-Werten kann das stille falsche Ergebnisse liefern: \`5 & 3 = 1\`, aber als bool wäre \`bool(5) and bool(3)\` = True.`,
        [
          'Skalar oder Array? Sprache Python oder Matlab?',
          'Wörter (Python) oder Symbole (Matlab)?',
          '\`&&\` Skalar Matlab · \`&\` Array Matlab.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['log-op'] },
      ),
      // Bonus · recognize · true-false · uses=[log-op]
      tf(
        'Python erlaubt verkettete Vergleiche: `if 0 < x < 10:` ist gültiger Python-Code und entspricht `if (0 < x) and (x < 10):`.',
        true,
        `**Ansatz:** Python ist eine der wenigen Sprachen mit echten Vergleichsketten — die intuitive mathematische Schreibweise funktioniert.

**Rechnung:** \`0 < x < 10\` wird intern als \`(0 < x) and (x < 10)\` ausgewertet, mit dem Vorteil, dass \`x\` nur EINMAL berechnet wird (wichtig bei Funktionsaufrufen).

**Probe:** \`>>> x = 5; 0 < x < 10\` → \`True\`. \`>>> x = 15; 0 < x < 10\` → \`False\`. ✓

**Typischer Fehler:** Glauben, Matlab könne das auch — kann es nicht. Matlab \`if 0 < x < 10\` liest sich als \`((0 < x) < 10)\` (immer True wegen $0$/$1 < 10$) — fast immer ein stiller Bug.`,
        [
          'Funktioniert die mathematische Notation $0 < x < 10$ in Python?',
          'Wie wird sie intern aufgelöst?',
          'Verkette mit \`and\` zwischen den Vergleichen.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['log-op'] },
      ),
    ],

    // ── SG 3 — `float-cmp` — Float-Vergleich mit Toleranz ────────────────
    3: [
      // Row 16 · recognize · true-false · uses=[float-cmp]
      tf(
        'Wegen IEEE-754-Rundungsfehlern liefert `0.1 + 0.2 == 0.3` in Python `False`.',
        true,
        `**Ansatz:** Floats können viele Dezimalbrüche nicht exakt darstellen — $0{,}1$ und $0{,}2$ sind beide unendliche Binärbrüche, gerundet auf 53 Bit.

**Rechnung:** Tatsächlich ist \`0.1 + 0.2\` in Python $0{,}30000000000000004$ (sichtbar mit \`format(0.1 + 0.2, '.17f')\`). Verglichen mit dem float $0{,}3$ (selbst gerundet, aber ANDERS gerundet) ist das nicht gleich.

**Probe:** \`>>> 0.1 + 0.2\` → \`0.30000000000000004\`. \`>>> 0.1 + 0.2 == 0.3\` → \`False\`. ✓ Robuste Lösung: \`abs((0.1 + 0.2) - 0.3) < 1e-9\` → \`True\`.

**Typischer Fehler:** Floats für Geld oder exakte Buchhaltung nutzen. Für solche Fälle ist \`decimal.Decimal\` oder \`fractions.Fraction\` gedacht.`,
        [
          'Können Floats $0{,}1$ exakt darstellen?',
          'Was passiert bei $0{,}1 + 0{,}2$?',
          'Vergleich mit Toleranz statt \`==\`.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[float-cmp]
      mc(
        'Was liefert `(0.1 + 0.2) == 0.3` in Python?',
        ['`False`', '`True`', '`SyntaxError`', '`None`'],
        0,
        `**Ansatz:** Beide Seiten als float darstellbar prüfen. \`0.1\`, \`0.2\` und \`0.3\` sind alle gerundete Binärbrüche.

**Rechnung:** \`0.1 + 0.2\` ergibt $0{,}30000000000000004$ (nach Rundung der Summe). \`0.3\` (alleine) ist $0{,}29999999999999998\\ldots$ (anders gerundet). Beide sind nicht gleich — daher \`False\`.

**Probe:** \`>>> (0.1 + 0.2) - 0.3\` → \`5.55e-17\` (winziger Unterschied). \`>>> abs((0.1 + 0.2) - 0.3) < 1e-9\` → \`True\` (mit Toleranz).

**Typischer Fehler:** Bauchmäßig "$0{,}3 = 0{,}3$, also True" — vergisst, dass Float-Arithmetik und Float-Literale beide Rundungen durchführen, oft auf unterschiedliche Werte.`,
        [
          'Können beide Seiten exakt sein?',
          'Was machen IEEE-754-Rundungen?',
          '\`==\` ist bei Floats unzuverlässig.',
        ],
        {
          '1': 'True würde gelten, wenn Floats $0{,}1$, $0{,}2$ und $0{,}3$ exakt darstellbar wären — sind sie aber nicht.',
          '2': 'Die Syntax ist gültig — Klammern und Vergleichsoperator. Kein Fehler beim Parsen.',
          '3': 'Vergleichsoperatoren liefern in Python immer bool, nicht None.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[float-cmp]
      mc(
        'Welche Zeile prüft zwei float-Werte `a` und `b` ROBUST auf "ungefähr gleich" mit Toleranz $10^{-9}$?',
        [
          '`abs(a - b) < 1e-9`',
          '`a == b`',
          '`int(a) == int(b)`',
          '`a is b`',
        ],
        0,
        `**Ansatz:** Robuster Float-Vergleich nutzt eine Toleranz auf der Differenz, statt direkter Gleichheit.

**Rechnung:** \`abs(a - b) < 1e-9\` liefert True, wenn der Unterschied unter $10^{-9}$ liegt — egal, ob die Floats minimal verschieden gerundet wurden. Standard-Bibliothek: \`math.isclose(a, b, abs_tol=1e-9)\`.

**Probe:** \`a = 0.1 + 0.2; b = 0.3\` → \`abs(a - b) = 5.55e-17\`. Das ist kleiner als $10^{-9}$ → True. ✓

**Typischer Fehler:** Schwellenwert zu klein wählen — z.B. \`< 1e-20\` ist enger als die float-Auflösung selbst und liefert oft False. Faustregel: \`1e-9\` für allgemein, \`1e-6\` bei akkumulierten Rechenfehlern.`,
        [
          'Wie definiert man "ungefähr gleich" mathematisch?',
          'Toleranz auf welcher Größe?',
          'Differenz absolut, dann Schwellwertvergleich.',
        ],
        {
          '1': '\`a == b\` ist genau das, was bei Floats unzuverlässig ist (siehe \`0.1 + 0.2 == 0.3\`).',
          '2': '\`int(a) == int(b)\` schneidet die Nachkommastellen ab und vergleicht ganzen Anteil — verliert Information und unterscheidet $1{,}9$ von $1{,}1$ nicht.',
          '3': '\`a is b\` testet OBJEKT-Identität, nicht Wertgleichheit. Bei Floats fast immer False.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[float-cmp]
      mc(
        'Ein numerischer Algorithmus terminiert nicht, weil `if x == 0.0:` nie True wird — `x` ist nach vielen Iterationen $1 \\cdot 10^{-16}$. Welcher Fix ist korrekt?',
        [
          '`if abs(x) < 1e-9:` — Vergleich mit Toleranz statt exaktem Wert.',
          '`if x = 0.0:` — Zuweisung statt Vergleich.',
          '`if x:` — implizite bool-Konvertierung.',
          '`if int(x) == 0:` — Casten zu int.',
        ],
        0,
        `**Ansatz:** Numerische Algorithmen erreichen aufgrund von Rundungsfehlern nie exakt $0$. Abbruchkriterium braucht eine Toleranz.

**Rechnung:** \`abs(x) < 1e-9\` testet, ob $|x|$ unter der Toleranz liegt — robust gegen Akkumulation kleiner Rundungsfehler. Alternative: \`math.isclose(x, 0.0, abs_tol=1e-9)\`.

**Probe:** Bei $x = 10^{-16}$: \`abs(x) < 1e-9\` → True ✓. Bei $x = 0.5$: \`abs(x) < 1e-9\` → False ✓.

**Typischer Fehler:** Zuweisung \`=\` und Vergleich \`==\` verwechseln. Oder \`if x:\` schreiben, das auch andere falsy-Werte (None, leere Liste) als $0$ behandelt.`,
        [
          'Wann ist ein float "praktisch null"?',
          'Wie definiert man die Schwelle?',
          'Toleranz mit \`abs(x) < eps\`.',
        ],
        {
          '1': '\`if x = 0.0:\` ist syntaktisch ungültig — \`=\` ist Zuweisung, in \`if\` muss ein Ausdruck stehen.',
          '2': '\`if x:\` ist \`True\` für jeden nicht-null-Wert — schließt aber auch \`None\`, leere Listen etc. ein. Hier wollen wir nur Zahlennähe zu null prüfen.',
          '3': '\`int(1e-16)\` ist $0$, also würde der Test False liefern. Aber: bei kleinen positiven Werten wie $0{,}5$ wäre \`int(0.5) == 0\` ebenfalls True — das ist zu lax.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Row 20 · transfer · multiple-choice · uses=[float-cmp]
      mc(
        'Newton-Verfahren für $f(x) = 0$: warum bricht man bei `abs(f(x)) < 1e-10` ab und nicht bei `f(x) == 0`?',
        [
          'Floats erreichen wegen Rundungsfehlern fast nie exakt $0$ — eine absolute Toleranz akzeptiert "praktisch null" und vermeidet Endlosschleifen.',
          '`==` ist langsamer als `<` bei Floats.',
          '`f(x)` ist immer positiv.',
          'Newton-Verfahren konvergiert nur bei `<`.',
        ],
        0,
        `**Ansatz:** Numerische Verfahren produzieren immer kleine Rundungsfehler. Die Abbruchbedingung muss diese Realität abbilden.

**Rechnung:** Bei jedem Schritt $x_{n+1} = x_n - f(x_n)/f'(x_n)$ gibt es Float-Rundung. Selbst wenn $x^*$ die exakte Wurzel wäre, könnte $f(x^*)$ als $\\pm 10^{-16}$ statt $0$ landen — oder $x_n$ konvergiert um die Wurzel "herum", trifft aber nie exakt.

**Probe:** Beispiel: $f(x) = x^2 - 2$, exakte Wurzel $\\sqrt 2$. Floats können $\\sqrt 2$ nicht exakt darstellen, daher ist $f(\\sqrt 2)$ in Floats $\\approx 4 \\cdot 10^{-16}$ — \`f(x) == 0\` wäre nie True. \`abs(f(x)) < 1e-10\` ✓.

**Typischer Fehler:** Newton ohne Abbruch-Toleranz schreiben — das Verfahren läuft entweder ewig (sehr selten exakt $0$) oder bricht zufällig ab, je nach Start- und Rundungsverhalten.`,
        [
          'Was passiert bei \`f(x) == 0\` in Floats?',
          'Wie nah liegt der iterierte Wert an der Lösung?',
          'Toleranz statt exakter Gleichheit.',
        ],
        {
          '1': 'Performance ist kein Argument — beide Operatoren brauchen ähnlich viel Zeit. Das ist nicht der Grund.',
          '2': '\`f(x)\` kann sehr wohl negativ werden — Newton testet Vorzeichen NICHT, sondern Größe.',
          '3': 'Newton konvergiert (lokal quadratisch) unter Bedingungen — \`<\` vs. \`==\` hat damit nichts zu tun. Es geht um die Repräsentation von $0$ in Floats.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Bonus · recognize · true-false · uses=[float-cmp]
      tf(
        'Pythons `math.isclose(a, b)` ist die Standard-Funktion für robusten Float-Vergleich; Default-Toleranzen sind `rel_tol=1e-09` und `abs_tol=0.0`.',
        true,
        `**Ansatz:** \`math.isclose(a, b)\` ist seit Python 3.5 in der Standardlib — bessere Wahl als selbstgebauter Vergleich, weil sie sowohl absolute als auch relative Toleranz kombiniert.

**Rechnung:** Default-Verhalten: zwei Floats sind "close", wenn $|a - b| \\le \\max(\\text{rel\\_tol} \\cdot \\max(|a|, |b|),\\ \\text{abs\\_tol})$. Mit \`rel_tol=1e-09\` und \`abs_tol=0.0\` wird die relative Toleranz dominant — der Vergleich skaliert mit der Größe der Werte.

**Probe:** \`>>> import math; math.isclose(0.1 + 0.2, 0.3)\` → \`True\` ✓. Achtung beim Vergleich mit $0$: \`math.isclose(1e-12, 0)\` → \`False\` (relative Toleranz greift nicht bei $0$). Workaround: \`math.isclose(a, 0, abs_tol=1e-9)\`.

**Typischer Fehler:** Beim Vergleich gegen exakt $0$ \`math.isclose(x, 0)\` ohne \`abs_tol\` — das schlägt fehl, weil $0$ keine relative Toleranz hat.`,
        [
          'Welches Modul stellt \`isclose\` bereit?',
          'Welche zwei Toleranzen kombiniert die Funktion?',
          'Default: rel_tol=1e-9, abs_tol=0.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['float-cmp'] },
      ),
    ],

    // ── SG 4 — `bool-int` — bool ist Subtyp von int ─────────────────────
    4: [
      // Row 21 · recognize · true-false · uses=[bool-int]
      tf(
        'In Python sind `True == 1` und `False == 0` jeweils `True`, weil `bool` ein Subtyp von `int` ist.',
        true,
        `**Ansatz:** Python's Klassen-Hierarchie: \`bool\` erbt von \`int\`. Vergleiche und Arithmetik nutzen die int-Werte $1$ (für \`True\`) und $0$ (für \`False\`).

**Rechnung:** \`isinstance(True, int)\` → True (Subtyp-Beziehung). Daher \`True == 1\` → True und \`False == 0\` → True. Konsequenz: \`True + 1 == 2\`, \`False * 5 == 0\`, \`sum([True, False, True]) == 2\`.

**Probe:** \`>>> True == 1\` → \`True\`. \`>>> False == 0\` → \`True\`. \`>>> 1 + True\` → \`2\`. ✓

**Typischer Fehler:** Glauben, \`True == 1\` sei ein Tippfehler oder undefiniert — ist tatsächlich gewollter Sprachdesign-Punkt (genauso in C/C++/Java).`,
        [
          'Welche Beziehung haben \`bool\` und \`int\` in Python?',
          'Welche int-Werte stehen für \`True\` / \`False\`?',
          '\`True\` ↔ $1$, \`False\` ↔ $0$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['bool-int'] },
      ),
      // Row 22 · apply-guided · multiple-choice · uses=[bool-int]
      mc(
        'Was ergibt `True + True` in Python?',
        ['`2`', '`True`', '`TypeError`', '`"TrueTrue"`'],
        0,
        `**Ansatz:** \`bool\` ist Subtyp von \`int\` mit \`True == 1\`. Bei \`+\` werden bool-Werte zu int promoviert.

**Rechnung:** \`True + True\` → $1 + 1 = 2$ (int). $\\text{type}(\\text{True} + \\text{True}) = \\text{int}$.

**Probe:** \`>>> True + True\` → \`2\`. \`>>> type(True + True)\` → \`<class 'int'>\`. ✓

**Typischer Fehler:** \`True + True\` als logische ODER-Operation \`True or True == True\` lesen — das wäre korrekt für \`or\`, aber \`+\` macht Arithmetik, kein Logik.`,
        [
          'Welche Operation ist \`+\`?',
          'Welche int-Werte haben \`True\`?',
          '$1 + 1 = ?$',
        ],
        {
          '1': 'True würde der Logik \`True or True\` entsprechen. Hier steht aber arithmetisches \`+\`, nicht logisches \`or\`.',
          '2': 'TypeError gäbe es bei inkompatiblen Typen — \`bool\` und \`bool\` sind beide int-Subtypen, also kompatibel.',
          '3': '\`"TrueTrue"\` wäre das Ergebnis bei String-Konkatenation \`"True" + "True"\`. \`True\` ohne Quotes ist aber bool, kein String.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['bool-int'] },
      ),
      // Row 23 · apply-independent · multiple-choice · uses=[bool-int]
      mc(
        'Was ergibt `sum([True, False, True, True, False])` in Python?',
        ['`3`', '`5`', '`2`', '`TypeError`'],
        0,
        `**Ansatz:** \`sum\` addiert alle Listenelemente. Da \`bool\` Subtyp von \`int\` ist, summieren sich \`True\` zu $1$ und \`False\` zu $0$.

**Rechnung:** $1 + 0 + 1 + 1 + 0 = 3$. Drei \`True\`-Einträge → Summe $3$.

**Probe:** \`>>> sum([True, False, True, True, False])\` → \`3\`. ✓ Diese Idee ist die Standard-Methode, um Bedingungen zu zählen: \`sum(x > 0 for x in werte)\` zählt positive Werte.

**Typischer Fehler:** $5$ als "Anzahl Elemente" angeben (Listenlänge \`len(...)\`) — \`sum\` summiert WERTE, nicht Elemente. Bei [True, True, True] wäre \`sum\` = 3 = \`len\`, aber bei [False, False] ist \`sum\` = 0 ≠ \`len\` = 2.`,
        [
          'Was machen \`bool\`-Werte bei \`sum()\`?',
          'Wieviele \`True\` sind in der Liste?',
          'Drei mal $1$, zwei mal $0$.',
        ],
        {
          '1': '$5$ ist die LÄNGE der Liste (\`len\`), nicht die SUMME. \`sum\` summiert Werte.',
          '2': '$2$ wäre die Anzahl \`False\` — die werden aber als $0$ gezählt, nicht subtrahiert.',
          '3': '\`sum\` akzeptiert bool-Listen problemlos, weil \`bool\` Subtyp von \`int\` ist. Kein TypeError.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['bool-int'] },
      ),
      // Row 24 · error-analysis · multiple-choice · uses=[bool-int]
      mc(
        'Ein Lerner glaubt, `if 0:` und `if False:` verhielten sich unterschiedlich. Wie ist die korrekte Einschätzung?',
        [
          'Beide Bedingungen werden NICHT ausgeführt — `0` und `False` sind in Python "falsy" und gleichwertig, weil `False == 0` und `bool` Subtyp von `int` ist.',
          '`if 0:` führt den Block aus, `if False:` nicht.',
          '`if 0:` wirft einen TypeError.',
          'Beide führen den Block IMMER aus.',
        ],
        0,
        `**Ansatz:** Python's "Truthiness"-Regel: bei \`if\` wird der Wert in bool konvertiert. \`bool(0)\` → False, \`bool(False)\` → False. Beide gleichwertig.

**Rechnung:** Wahrheitstabelle der "falsy"-Werte: \`0\`, \`0.0\`, \`False\`, \`None\`, leerer String \`""\`, leere Liste \`[]\`, leeres Dict \`{}\`. Alles andere ist truthy.

**Probe:** \`>>> if 0: print('drin')\` → kein Output. \`>>> if False: print('drin')\` → kein Output. ✓ \`>>> bool(0) == bool(False)\` → \`True\`.

**Typischer Fehler:** Aus Java/C den Reflex mitnehmen, dass \`int\` und \`bool\` ganz verschiedene Typen seien und 0 etwas anderes als False sei. In Python gibt es eine durchdachte Konvertierung.`,
        [
          'Welche Werte sind in Python "falsy"?',
          'Wie konvertiert Python \`int\` zu \`bool\`?',
          '$0 \\equiv$ False, alles andere $\\equiv$ True.',
        ],
        {
          '1': '\`if 0:\` führt den Block NICHT aus — \`0\` ist falsy. Würde nur stimmen, wenn \`0\` truthy wäre (ist es nicht).',
          '2': 'TypeError gäbe es bei inkompatiblen Typen — \`int\` ist als bool-Konvertierung wohldefiniert.',
          '3': '\`if False:\` führt definitiv NICHT aus. Beide Blöcke werden übersprungen, nicht ausgeführt.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['bool-int'] },
      ),
      // Row 25 · transfer · multiple-choice · uses=[bool-int]
      mc(
        'Wie viele positive Werte enthält die Liste `werte = [3, -1, 5, -2, 7]`? Welche Python-Zeile zählt das mit dem bool-int-Trick?',
        [
          '`sum(x > 0 for x in werte)`',
          '`len(werte)`',
          '`max(werte)`',
          '`werte.count(True)`',
        ],
        0,
        `**Ansatz:** Jeder Vergleich \`x > 0\` liefert \`True\` (1) oder \`False\` (0). \`sum\` über diese bool-Werte zählt die Treffer.

**Rechnung:** Für \`werte = [3, -1, 5, -2, 7]\`: \`x > 0\` liefert \`[True, False, True, False, True]\`. \`sum\` = $1+0+1+0+1 = 3$.

**Probe:** \`>>> sum(x > 0 for x in [3, -1, 5, -2, 7])\` → \`3\` ✓. Direkt überprüfbar: 3, 5, 7 sind positiv → 3 Werte.

**Typischer Fehler:** Schleife mit Zähler schreiben — funktioniert, aber das pythonische Idiom ist \`sum(condition for x in iterable)\`. Sehr lesbar, sehr knapp.`,
        [
          'Was liefert \`x > 0\` als Wert?',
          'Wie zählt man \`True\` mit arithmetischem \`sum\`?',
          'Generator-Expression mit Vergleich, dann \`sum\`.',
        ],
        {
          '1': '\`len(werte)\` ist 5 — Anzahl ALLER Elemente, nicht nur der positiven.',
          '2': '\`max(werte)\` ist 7 — der größte Wert, nicht die Anzahl.',
          '3': '\`werte.count(True)\` zählt, wie oft \`True\` (oder $1$, was bool-äquivalent ist) als Wert in der Liste vorkommt — wäre $0$, da keine \`True\`-Einträge in [3,-1,5,-2,7] sind.',
        },
        { stage: 'transfer', subGoal: 4, uses: ['bool-int'] },
      ),
      // Bonus · recognize · true-false · uses=[bool-int]
      tf(
        '`type(True) == type(1)` liefert in Python `False`, weil `type()` die KONKRETE Klasse zurückgibt — `bool` ist zwar Subtyp von `int`, aber eine andere Klasse.',
        true,
        `**Ansatz:** \`==\` (Wertgleichheit) und \`type()\` (Klassengleichheit) prüfen verschiedene Dinge.

**Rechnung:** \`type(True)\` → \`<class 'bool'>\`. \`type(1)\` → \`<class 'int'>\`. \`<class 'bool'>\` $\\neq$ \`<class 'int'>\` → False.

**Probe:** \`>>> type(True) == type(1)\` → \`False\`. \`>>> isinstance(True, int)\` → \`True\` (Subtyp-Beziehung). Beide Aussagen sind konsistent: bool ist Subtyp, aber eine eigenständige Klasse. ✓

**Typischer Fehler:** Aus \`True == 1\` (Wertgleichheit) auf \`type(True) == type(1)\` (Klassengleichheit) schließen. Das verwechselt zwei verschiedene Vergleichs-Ebenen.`,
        [
          'Was vergleicht \`==\` zwischen Klassen?',
          'Liefert \`type()\` Basisklasse oder konkrete Klasse?',
          'bool ist eigene Klasse, auch als int-Subtyp.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['bool-int'] },
      ),
    ],
  },


  // ───────────────────────────────────────────────────────────────────────
  // py-1-5 — Funktionen definieren  (5 subGoals)
  // 25 Aufgaben mit pedagogy-Tags · alle 25 Matrix-Zeilen.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-5': {
    // ── SG 0 — `def-syntax` — `def name(param):` vs Matlab `function` ────
    0: [
      // Row 1 · recognize · true-false · uses=[def-syntax]
      tf(
        'Eine Python-Funktion wird mit `def name(param):` definiert; der Body ist eingerückt; ein abschließendes `end` gibt es nicht (im Gegensatz zu Matlab).',
        true,
        `**Ansatz:** Python folgt der Block-Syntax mit Doppelpunkt + Einrückung — auch für Funktionsdefinitionen. Matlab nutzt \`function ... end\`.

**Rechnung:** Minimal-Beispiel:
\`\`\`
def quadrat(x):
    return x ** 2
\`\`\`
Drei Pflicht-Elemente: \`def\`, Funktions-Header mit \`:\`, eingerückter Body. Kein \`end\` am Schluss.

**Probe:** \`>>> def f(x): return x*2\\n>>> f(5)\` → \`10\` ✓. Matlab-Pendant in \`f.m\`: \`function y = f(x)\\n    y = x*2;\\nend\`.

**Typischer Fehler:** Matlab-Stil mit \`end\` übernehmen — Python erkennt \`end\` nicht als Block-Marker. Oder Doppelpunkt vergessen → SyntaxError.`,
        [
          'Welches Schlüsselwort startet eine Python-Funktion?',
          'Was steht am Ende der \`def\`-Zeile?',
          'Doppelpunkt + Einrückung, kein \`end\`.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['def-syntax'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[def-syntax]
      mc(
        'Welche Python-Zeile definiert KORREKT eine Funktion `quadrat`, die einen Parameter `x` nimmt?',
        ['`def quadrat(x):`', '`function quadrat(x):`', '`def quadrat: x`', '`quadrat(x) = ...`'],
        0,
        `**Ansatz:** Python-Funktions-Header: \`def\` + Name + Parameter in \`()\` + Doppelpunkt.

**Rechnung:** Korrekt: \`def quadrat(x):\` mit anschließend eingerücktem Body (z.B. \`return x ** 2\`).

**Probe:** \`>>> def quadrat(x):\\n...     return x*x\\n>>> quadrat(3)\` → \`9\` ✓.

**Typischer Fehler:** Matlab-/JavaScript-\`function\` statt \`def\` schreiben — Python kennt \`function\` nicht als Schlüsselwort. Oder Klammern um den Parameter weglassen.`,
        [
          'Mit welchem Schlüsselwort beginnt die Python-Funktion?',
          'Wo stehen die Parameter?',
          '\`def Name(...)\:\`.',
        ],
        {
          '1': '\`function\` ist Matlab/JavaScript-Stil. Python nutzt \`def\`.',
          '2': 'Hier fehlen Klammern um den Parameter — \`def quadrat: x\` ist syntaktisch ungültig.',
          '3': 'Math-Stil \`f(x) = ...\` ist nicht direkt Python — funktioniert nicht.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['def-syntax'] },
      ),
      // Row 3 · apply-independent · multiple-choice · uses=[def-syntax]
      mc(
        'Was passiert beim Ausführen?\n```\ndef gruss(name):\n    print(f"Hallo {name}")\n\ngruss("Theo")\n```',
        ['Druckt `Hallo Theo`', 'Druckt nichts (nur definiert)', '`TypeError`', 'Druckt `{name}`'],
        0,
        `**Ansatz:** Zwei Schritte — erst die Funktion definieren, dann aufrufen. Beim Aufruf wird der Body mit dem aktuellen Argument ausgeführt.

**Rechnung:** \`gruss("Theo")\` setzt \`name = "Theo"\` und führt \`print(f"Hallo {name}")\` aus. F-String setzt \`{name}\` ein → \`Hallo Theo\`.

**Probe:** \`>>> def gruss(name): print(f"Hallo {name}")\\n>>> gruss("Theo")\` → \`Hallo Theo\` ✓.

**Typischer Fehler:** Glauben, die \`def\`-Zeile allein druckt etwas. Sie definiert nur — der Aufruf ist nötig. Oder den F-String-Mechanismus nicht kennen und denken, \`{name}\` bleibt als Literal stehen.`,
        [
          'Was passiert bei \`def ...\` allein?',
          'Was bewirkt der Aufruf \`gruss("Theo")\`?',
          'F-String setzt Variablen ein.',
        ],
        {
          '1': 'Die \`def\`-Zeile allein druckt nichts. Aber \`gruss("Theo")\` IST ein Aufruf — also wird gedruckt.',
          '2': '\`gruss\` akzeptiert ein String-Argument. Kein Typenkonflikt.',
          '3': 'F-Strings (\`f"..."\`) ersetzen \`{name}\` durch den Wert von \`name\`. Würde stehen bleiben, wenn das \`f\`-Präfix fehlte.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['def-syntax'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[def-syntax]
      mc(
        'Ein Lerner schreibt:\n```\ndef quadrat(x)\n    return x ** 2\n```\nWelchen Fehler meldet Python?',
        [
          '`SyntaxError` — der Doppelpunkt am Ende der `def`-Zeile fehlt.',
          'Funktioniert.',
          '`IndentationError`',
          '`NameError`',
        ],
        0,
        `**Ansatz:** Jede Block-Header-Zeile in Python (def/if/for/while) braucht ein abschließendes \`:\`.

**Rechnung:** Korrekt: \`def quadrat(x):\\n    return x ** 2\`. Ohne \`:\` → \`SyntaxError: expected ':'\`.

**Probe:** Test im REPL: \`>>> def quadrat(x)\` → \`SyntaxError\` ✓.

**Typischer Fehler:** Matlab-/JavaScript-Stil ohne Doppelpunkt übernehmen.`,
        [
          'Welches Symbol fehlt am Ende der \`def\`-Zeile?',
          'Doppelpunkt nach dem Header.',
          '\`def name(x)\`**:** ← Pflicht.',
        ],
        {
          '1': 'Funktioniert NICHT — fehlender Doppelpunkt ist SyntaxError.',
          '2': 'IndentationError tritt auf bei falscher Einrückung — hier scheitert das Parsen schon an der \`def\`-Zeile.',
          '3': 'NameError wäre Laufzeit. Hier scheitert schon das Parsen.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['def-syntax'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[def-syntax]
      mc(
        'Du übersetzt diese Matlab-Funktion nach Python:\n```\nfunction y = doppel(x)\n    y = 2 * x;\nend\n```\nWelche Python-Form ist KORREKT?',
        [
          '`def doppel(x):`<br>`    return 2 * x`',
          '`def doppel(x) -> y:`<br>`    y = 2 * x`',
          '`function doppel(x):`<br>`    return 2 * x`',
          '`def doppel(x):`<br>`    y = 2 * x`<br>`end`',
        ],
        0,
        `**Ansatz:** Vier Migrationsregeln Matlab → Python für Funktionen: Schlüsselwort \`function\` → \`def\`, kein \`end\`, expliziter \`return\` statt Zuweisung an Output, Doppelpunkt + Einrückung.

**Rechnung:**
- \`function\` → \`def\` ✓
- Output-Variable \`y\` aus Header → \`return\`-Statement ✓
- \`end\` weg ✓
- \`:\` an Header + Body eingerückt ✓

**Probe:** \`>>> def doppel(x): return 2 * x\\n>>> doppel(7)\` → \`14\` ✓.

**Typischer Fehler:** \`end\` in Python schreiben — wird zur Laufzeit entweder als undefinierter Name (NameError) oder still ignoriert, wenn \`end\` im Scope existiert.`,
        [
          'Was wird aus \`function\` in Python?',
          'Wo kommt der Rückgabewert hin?',
          '\`def\`, \`return\`, kein \`end\`, kein Header-Output-Name.',
        ],
        {
          '1': 'Type-Annotation \`-> y\` mit Variablennamen ist ungültig — Python nutzt Typen wie \`-> int\`, nicht Variablen. Plus: \`y = ...\` ohne \`return\` gibt None zurück.',
          '2': '\`function\` ist nicht Pythons Schlüsselwort. Heißt \`def\`.',
          '3': '\`end\` ist Matlab-Syntax. In Python überflüssig (und potenziell NameError).',
        },
        { stage: 'transfer', subGoal: 0, uses: ['def-syntax'] },
      ),
    ],

    // ── SG 1 — `rueckgabe` — Python `return`, Matlab Output-Variable ─────
    1: [
      // Row 6 · recognize · true-false · uses=[rueckgabe]
      tf(
        'Eine Python-Funktion gibt einen Wert mit `return` zurück; eine Matlab-Funktion weist den Wert an die im Header deklarierte Output-Variable zu (z.B. `function y = f(x)` plus `y = ...`).',
        true,
        `**Ansatz:** Beide Sprachen lösen das gleiche Problem unterschiedlich. Python: Rückgabe per Schlüsselwort. Matlab: Rückgabe per Zuweisung an benannte Output-Variable.

**Rechnung:**

Python:
\`\`\`
def f(x):
    return x ** 2
\`\`\`

Matlab:
\`\`\`
function y = f(x)
    y = x ^ 2;
end
\`\`\`

**Probe:** Beide liefern \`f(3) = 9\`. ✓

**Typischer Fehler:** Matlab-Stil in Python: \`def f(x): y = x**2\` (kein \`return\`!) — die Funktion liefert dann \`None\`, nicht den berechneten Wert.`,
        [
          'Welches Schlüsselwort gibt in Python einen Wert zurück?',
          'Wie macht Matlab das?',
          'Python: \`return\`, Matlab: Zuweisung an Header-Variable.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['rueckgabe'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[rueckgabe]
      mc(
        'Was gibt diese Funktion zurück?\n```\ndef add(a, b):\n    return a + b\n\nadd(3, 4)\n```',
        ['`7`', '`(3, 4)`', '`"34"`', '`None`'],
        0,
        `**Ansatz:** Die Funktion addiert die Argumente und gibt das Ergebnis zurück.

**Rechnung:** \`add(3, 4)\` setzt \`a = 3\`, \`b = 4\`. Body: \`return a + b\` → \`return 3 + 4\` → \`return 7\`.

**Probe:** \`>>> def add(a, b): return a + b\\n>>> add(3, 4)\` → \`7\` ✓.

**Typischer Fehler:** Annehmen, die Funktion gebe ein Tupel \`(3, 4)\` zurück. Komma im \`return\`-Statement würde das tun, hier aber explizit \`a + b\` (eine Zahl). Oder mit String-Konkatenation verwechseln (\`"34"\`) — geht nur, wenn Operanden Strings wären.`,
        [
          'Was tut der \`+\`-Operator hier?',
          'Sind die Operanden Zahlen oder Strings?',
          '$3 + 4 = ?$',
        ],
        {
          '1': '\`(3, 4)\` wäre die Eingabe als Tupel — \`return a + b\` liefert aber den ADDITIVEN Wert, nicht das Tupel.',
          '2': '\`"34"\` käme aus String-Konkatenation. \`a\` und \`b\` sind hier Zahlen, nicht Strings.',
          '3': 'Die Funktion HAT ein \`return\` — gibt also nicht \`None\` zurück.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['rueckgabe'] },
      ),
      // Row 8 · apply-independent · multiple-choice · uses=[rueckgabe]
      mc(
        'Was gibt eine Python-Funktion OHNE expliziten `return`-Befehl zurück?',
        ['`None`', '`0`', '`TypeError` beim Aufruf', 'Den Wert des letzten Statements'],
        0,
        `**Ansatz:** Python hat einen impliziten Default-Rückgabewert — und das ist NICHT der letzte Ausdruck (anders als in Ruby/Lisp).

**Rechnung:** \`def f(): pass\\nresult = f()\\nprint(result)\` → \`None\`.

**Probe:** \`>>> def f(x): x*2\\n>>> print(f(5))\` → \`None\` ✓ (der Wert \`10\` wird berechnet, aber nicht zurückgegeben).

**Typischer Fehler:** Aus Ruby/Lisp/CoffeeScript kommen, wo der letzte Ausdruck implizit zurückgegeben wird. Python verlangt explizites \`return\`.`,
        [
          'Was ist der Python-Default ohne \`return\`?',
          'Liefert Python implizit den letzten Wert?',
          'Ohne \`return\` → \`None\`, immer.',
        ],
        {
          '1': '\`0\` wäre der Java-/C-Default für \`int\`. Python hat \`None\` für "nichts".',
          '2': 'TypeError gibt es nicht beim Aufruf einer Funktion ohne \`return\` — sie liefert einfach \`None\`.',
          '3': 'Python ist NICHT Ruby/Lisp — der letzte Wert wird NICHT implizit zurückgegeben. \`return\` muss explizit sein.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['rueckgabe'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[rueckgabe]
      mc(
        'Ein Lerner schreibt:\n```\ndef quadrat(x):\n    x ** 2\n\nresult = quadrat(5)\nprint(result)\n```\nWas wird gedruckt?',
        [
          '`None` — `return` fehlt; `x ** 2` wird zwar berechnet, aber nicht zurückgegeben.',
          '`25`',
          'nichts',
          '`TypeError`',
        ],
        0,
        `**Ansatz:** Ohne explizites \`return\` liefert Python \`None\`. Der Lerner-Fehler: das \`return\`-Schlüsselwort vergessen.

**Rechnung:** Body \`x ** 2\` ist ein Ausdruck, der berechnet, aber nicht zurückgegeben wird (kein Side Effect). \`quadrat(5)\` liefert \`None\`. \`print(None)\` druckt \`None\`.

**Probe:** Korrektur: \`def quadrat(x): return x ** 2\`. Dann gibt \`quadrat(5)\` → \`25\` ✓.

**Typischer Fehler:** Den Wert berechnen, aber nicht returnen — sehr häufig bei Anfängern. Plus: \`print(None)\` druckt das Wort \`None\` (keine leere Ausgabe).`,
        [
          'Wo fehlt das Schlüsselwort \`return\`?',
          'Was passiert mit dem Wert von \`x ** 2\`?',
          'Berechnet, nicht zurückgegeben → \`None\`.',
        ],
        {
          '1': '\`25\` wäre die Antwort, wenn \`return\` davor stünde. Tut es nicht.',
          '2': '\`print(None)\` druckt das Wort "None" — also nicht "nichts".',
          '3': 'Kein TypeError — die Berechnung läuft, der Wert wird nur nicht zurückgegeben.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['rueckgabe'] },
      ),
      // Row 10 · transfer · multiple-choice · uses=[rueckgabe]
      mc(
        'Eine Python-Funktion soll SUMME und DIFFERENZ zweier Zahlen zurückgeben, sodass der Aufruf `s, d = f(a, b)` direkt entpackt werden kann. Welche Lösung ist KORREKT?',
        [
          '`def f(a, b):`<br>`    return a+b, a-b`',
          '`def f(a, b):`<br>`    print(a+b, a-b)`',
          '`def f(a, b):`<br>`    a+b, a-b`',
          '`def f(a, b):`<br>`    return a+b`<br>`    return a-b`',
        ],
        0,
        `**Ansatz:** \`return a, b\` packt zwei Werte in ein Tupel. Auf der Aufrufseite kann das Tupel mit \`x, y = f(...)\` entpackt werden.

**Rechnung:** \`return a+b, a-b\` → Tupel \`(a+b, a-b)\`. Der Aufruf \`s, d = f(3, 1)\` setzt \`s = 4\`, \`d = 2\`.

**Probe:** \`>>> def f(a, b): return a+b, a-b\\n>>> s, d = f(10, 3)\\n>>> (s, d)\` → \`(13, 7)\` ✓.

**Typischer Fehler:** Zwei separate \`return\`-Statements schreiben — Python verlässt die Funktion beim ERSTEN \`return\`, das zweite wird nie ausgeführt. Oder \`print\` statt \`return\` — druckt, aber gibt \`None\` zurück.`,
        [
          'Was bedeutet \`return a, b\`?',
          'Wo wird der zweite Wert verarbeitet?',
          'Komma → Tupel, eine Zeile.',
        ],
        {
          '1': '\`print\` druckt zur Konsole, gibt aber \`None\` zurück. \`s, d = f(...)\` → \`s, d = None\` → ValueError beim Entpacken.',
          '2': 'Ohne \`return\` werden die berechneten Werte verworfen. Funktion liefert \`None\`.',
          '3': 'Erstes \`return\` verlässt die Funktion sofort — das zweite \`return a-b\` wird nie erreicht.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['rueckgabe'] },
      ),
    ],

    // ── SG 2 — `default-par` — Default-Parameter ────────────────────────
    2: [
      // Row 11 · recognize · true-false · uses=[default-par]
      tf(
        'Default-Parameter erlauben es, eine Python-Funktion auch ohne dieses Argument aufzurufen — der Standardwert wird in der Signatur mit `=` angegeben (z.B. `def f(x, y=0):`).',
        true,
        `**Ansatz:** Default-Parameter machen Argumente OPTIONAL. Wird das Argument beim Aufruf weggelassen, springt der Standardwert ein.

**Rechnung:** \`def f(x, y=0): return x + y\`. Aufruf \`f(5)\` → $5 + 0 = 5$. Aufruf \`f(5, 3)\` → $5 + 3 = 8$.

**Probe:** \`>>> def f(x, y=0): return x + y\\n>>> f(5)\` → \`5\`. \`>>> f(5, 3)\` → \`8\`. ✓

**Typischer Fehler:** Defaults vor Pflicht-Parameter setzen (\`def f(x=0, y):\`) → \`SyntaxError: non-default argument follows default argument\`. Defaults müssen IMMER hinten stehen.`,
        [
          'Was bewirkt \`y=0\` im Header?',
          'Was passiert, wenn \`y\` weggelassen wird?',
          '\`y\` ist optional — Default greift.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['default-par'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[default-par]
      mc(
        'Was liefert `power(3)` bei dieser Funktion?\n```\ndef power(base, exp=2):\n    return base ** exp\n```',
        ['`9`', '`3`', '`1`', '`TypeError`'],
        0,
        `**Ansatz:** Default \`exp=2\` greift, weil der Aufruf nur \`base\` angibt.

**Rechnung:** \`power(3)\` → \`base = 3\`, \`exp = 2\` (default). Body: \`return 3 ** 2\` → \`9\`.

**Probe:** \`>>> power(3)\` → \`9\` ✓. Mit explizitem zweiten Argument: \`power(3, 4)\` → \`81\`.

**Typischer Fehler:** Annehmen, der Aufruf ohne zweites Argument wirft \`TypeError\` — Default-Parameter machen das Argument optional.`,
        [
          'Was ist der Default-Wert von \`exp\`?',
          'Welche Operation führt \`return base ** exp\` aus?',
          '$3^2 = ?$',
        ],
        {
          '1': '\`3\` wäre nur, wenn Body z.B. \`return base * 1\` wäre. Hier steht aber \`** exp\` mit \`exp = 2\`.',
          '2': '\`1\` wäre $3^0$ (exp=0). Default ist aber 2.',
          '3': 'Kein TypeError — Default-Parameter erlauben den Aufruf ohne zweites Argument.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['default-par'] },
      ),
      // Row 13 · apply-independent · multiple-choice · uses=[default-par]
      mc(
        'Was liefert `greeting("Theo", "Hi")`?\n```\ndef greeting(name, msg="Hallo"):\n    return f"{msg}, {name}!"\n```',
        ['`"Hi, Theo!"`', '`"Hallo, Theo!"`', '`"Hi, Hallo!"`', '`TypeError`'],
        0,
        `**Ansatz:** Wird ein Argument explizit übergeben, überschreibt es den Default. Reihenfolge zählt: erstes Argument → erster Parameter (\`name\`), zweites → zweiter (\`msg\`).

**Rechnung:** \`greeting("Theo", "Hi")\` → \`name = "Theo"\`, \`msg = "Hi"\` (überschreibt Default "Hallo"). Body: \`return f"Hi, Theo!"\`.

**Probe:** \`>>> greeting("Theo", "Hi")\` → \`'Hi, Theo!'\` ✓. Mit Default: \`greeting("Theo")\` → \`'Hallo, Theo!'\`.

**Typischer Fehler:** Glauben, Default kann nicht überschrieben werden. Default ist NUR der Fallback, wenn nichts angegeben wird.`,
        [
          'Was passiert, wenn \`msg\` explizit übergeben wird?',
          'Default oder explizites Argument — wer gewinnt?',
          'Explizites Argument überschreibt Default.',
        ],
        {
          '1': '"Hallo" wäre der DEFAULT — wird hier aber durch "Hi" überschrieben.',
          '2': 'Beide Werte sind nicht im selben Slot. \`msg\` hat \`"Hi"\`, nicht beides.',
          '3': 'Kein TypeError — beide Argumente sind valide.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['default-par'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[default-par]
      mc(
        'Ein Lerner schreibt:\n```\ndef f(x=0, y):\n    return x + y\n```\nWas meldet Python?',
        [
          '`SyntaxError: non-default argument follows default argument` — Default-Parameter müssen NACH den Pflicht-Parametern stehen.',
          'Funktioniert.',
          '`TypeError` beim Aufruf.',
          '`IndentationError`',
        ],
        0,
        `**Ansatz:** Python verlangt: Pflicht-Parameter zuerst, dann Defaults. Sonst ist beim Aufruf nicht eindeutig, welches Argument welchen Slot füllt.

**Rechnung:** \`def f(x=0, y):\` ist syntaktisch ungültig. Korrekt umsortiert: \`def f(y, x=0):\` — \`y\` ist Pflicht, \`x\` optional.

**Probe:** \`>>> def f(x=0, y): return x + y\` → \`SyntaxError: non-default argument follows default argument\` ✓.

**Typischer Fehler:** Reihenfolge willkürlich wählen, ohne die Pflicht/Optional-Trennung zu beachten.`,
        [
          'Welche Reihenfolge verlangt Python?',
          'Können Pflicht-Parameter NACH Default-Parametern stehen?',
          'Pflicht zuerst, Default dahinter.',
        ],
        {
          '1': 'Funktioniert NICHT — SyntaxError schon beim Parsen.',
          '2': 'Der Fehler entsteht schon BEIM PARSEN, nicht erst beim Aufruf.',
          '3': 'IndentationError gilt für falsche Einrückung — das Problem hier ist die Parameter-Reihenfolge.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['default-par'] },
      ),
      // Row 15 · transfer · multiple-choice · uses=[default-par]
      mc(
        'Was wird gedruckt?\n```\ndef append_value(x, lst=[]):\n    lst.append(x)\n    return lst\n\nprint(append_value(1))\nprint(append_value(2))\n```',
        [
          '`[1]` und `[1, 2]` (mutable Default wird zwischen Aufrufen geteilt).',
          '`[1]` und `[2]`',
          '`[1]` und `[1]`',
          '`TypeError`',
        ],
        0,
        `**Ansatz:** Eine berühmte Python-Falle: mutable Defaults (Listen, Dicts, Sets) werden EINMAL beim Definieren erzeugt und zwischen Aufrufen GETEILT.

**Rechnung:** Aufruf 1: \`lst\` ist die einzige Default-Liste \`[]\`. Append \`1\` → \`[1]\`. Aufruf 2: \`lst\` ist DIESELBE Liste \`[1]\`. Append \`2\` → \`[1, 2]\`. Output: \`[1]\` dann \`[1, 2]\`.

**Probe:** Sichere Variante: \`def append_value(x, lst=None):\\n    if lst is None: lst = []\\n    lst.append(x)\\n    return lst\`. Erzeugt jedes Mal eine neue Liste.

**Typischer Fehler:** Annehmen, der Default \`[]\` werde bei JEDEM Aufruf neu evaluiert. Tut er NICHT — nur einmal beim Definieren.`,
        [
          'Wann wird ein Default-Wert ausgewertet?',
          'Wird die Liste pro Aufruf neu erzeugt?',
          'Mutable Default → einmalige Liste, geteilt zwischen Aufrufen.',
        ],
        {
          '1': 'Würde gelten, wenn jede Aufruf eine NEUE Liste bekäme. Tut er aber nicht.',
          '2': 'Würde gelten, wenn der Default unverändert bliebe — er wird aber zwischen Aufrufen verändert.',
          '3': 'Kein TypeError — der Code läuft, nur das Verhalten überrascht.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['default-par'] },
      ),
    ],

    // ── SG 3 — `lambda` — Lambda-Funktionen ────────────────────────────
    3: [
      // Row 16 · recognize · true-false · uses=[lambda]
      tf(
        'Eine Lambda-Funktion in Python ist eine kompakte, anonyme Inline-Funktion: `quadrat = lambda x: x**2` definiert eine Funktion mit Parameter `x`, die `x**2` zurückgibt — der Body ist auf einen Ausdruck beschränkt.',
        true,
        `**Ansatz:** \`lambda\` erzeugt ein Funktionsobjekt ohne Namen — meist genutzt für kurze Einzeiler oder als Argument an höhere Funktionen wie \`sorted\`, \`map\`, \`filter\`.

**Rechnung:** \`quadrat = lambda x: x**2\` ist äquivalent zu:
\`\`\`
def quadrat(x):
    return x ** 2
\`\`\`
Aber: KEIN \`return\` (implizit), KEIN Block (nur ein Ausdruck), KEIN Body mit Statements.

**Probe:** \`>>> sqr = lambda x: x*x\\n>>> sqr(5)\` → \`25\` ✓. \`>>> type(sqr)\` → \`<class 'function'>\` (ist also eine echte Funktion).

**Typischer Fehler:** \`return\` in einem Lambda schreiben → SyntaxError. Oder mehrzeiliges Verhalten erwarten — Lambda kann nur EINEN Ausdruck.`,
        [
          'Was ist der Body eines Lambdas — Statement oder Ausdruck?',
          'Braucht Lambda \`return\`?',
          'Kein \`return\`, ein Ausdruck, anonym.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['lambda'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[lambda]
      mc(
        'Was liefert dieser Code?\n```\nsqr = lambda x: x ** 2\nsqr(5)\n```',
        ['`25`', '`5`', '`10`', '`TypeError`'],
        0,
        `**Ansatz:** \`sqr\` ist eine Funktion, die \`x\` quadriert. Aufruf mit \`5\` liefert $5^2 = 25$.

**Rechnung:** \`sqr(5)\` → \`x = 5\` → Body: \`x ** 2\` → \`25\`.

**Probe:** \`>>> sqr = lambda x: x ** 2; sqr(5)\` → \`25\` ✓.

**Typischer Fehler:** Glauben, Lambda sei "etwas anderes" als eine Funktion — ist es nicht. Identisches Verhalten wie \`def\`.`,
        [
          'Was tut \`x ** 2\` für $x = 5$?',
          '$5^2 = ?$',
          '$5 \\cdot 5 = 25$.',
        ],
        {
          '1': '\`5\` wäre, wenn der Body nur \`x\` zurückgäbe (ohne Quadrieren).',
          '2': '\`10\` wäre $2x = 5 \\cdot 2$, also Multiplikation. Body ist aber \`** 2\` (Potenz).',
          '3': 'Kein TypeError — Lambda mit einem Argument akzeptiert eine Zahl.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['lambda'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[lambda]
      mc(
        'Was liefert `add(3, 7)` bei `add = lambda a, b: a + b`?',
        ['`10`', '`(3, 7)`', '`21`', '`"37"`'],
        0,
        `**Ansatz:** Lambda mit ZWEI Parametern. Body addiert beide.

**Rechnung:** \`add(3, 7)\` → \`a = 3\`, \`b = 7\` → \`return a + b\` → \`10\`.

**Probe:** \`>>> add = lambda a, b: a + b; add(3, 7)\` → \`10\` ✓.

**Typischer Fehler:** Mehrere Argumente als Tupel verstehen — Lambdas können beliebig viele Parameter haben.`,
        [
          'Wie viele Parameter hat das Lambda?',
          '$3 + 7 = ?$',
          'Zwei Parameter, addieren.',
        ],
        {
          '1': '\`(3, 7)\` wäre die Eingabe — die Funktion gibt aber das ADDITIVE Ergebnis zurück.',
          '2': '\`21\` ist $3 \\cdot 7$ (Multiplikation). Body ist aber \`+\`.',
          '3': '\`"37"\` wäre String-Konkatenation. Hier sind \`a, b\` Zahlen.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['lambda'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[lambda]
      mc(
        'Welcher der folgenden Lambda-Ausdrücke ist UNGÜLTIG?',
        [
          '`f = lambda x: return x ** 2`',
          '`f = lambda x: x ** 2`',
          '`f = lambda: 42`',
          '`f = lambda x, y: x + y`',
        ],
        0,
        `**Ansatz:** Der Body eines Lambdas muss ein AUSDRUCK sein, kein Statement. \`return\` ist ein Statement → SyntaxError.

**Rechnung:** Korrekte Lambda-Form: \`lambda <params>: <ausdruck>\`. \`return\` davor ist falsch — der Wert wird IMPLIZIT zurückgegeben.

**Probe:** \`>>> f = lambda x: return x*2\` → \`SyntaxError: invalid syntax\` ✓. Korrektur: \`lambda x: x*2\` (ohne return).

**Typischer Fehler:** \`def\`-Stil ins Lambda übertragen. Lambda ist absichtlich kompakt — kein \`return\`, kein Block, ein Ausdruck.`,
        [
          'Was ist der Body eines Lambdas?',
          'Darf \`return\` darin stehen?',
          'Lambda-Body = Ausdruck, kein \`return\`.',
        ],
        {
          '1': 'Standard-Lambda mit einem Parameter und Ausdruck — gültig.',
          '2': 'Lambda OHNE Parameter (\`lambda:\` direkt mit Body) — gültig. Aufruf: \`f()\` → \`42\`.',
          '3': 'Lambda mit zwei Parametern — gültig.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['lambda'] },
      ),
      // Row 20 · transfer · multiple-choice · uses=[lambda]
      mc(
        'Welche Funktion sortiert eine Liste von Tupeln nach dem ZWEITEN Element jedes Tupels?',
        [
          '`sorted(lst, key=lambda t: t[1])`',
          '`sorted(lst, key=t[1])`',
          '`sorted(lst).by(t[1])`',
          '`lst.sort(2)`',
        ],
        0,
        `**Ansatz:** \`sorted\` akzeptiert eine \`key\`-Funktion, die zu jedem Element den Sortierwert liefert. Lambdas sind die idiomatische Wahl für solche Inline-Schlüssel-Extraktoren.

**Rechnung:** \`sorted(lst, key=lambda t: t[1])\` ruft für jedes Tupel \`t\` die Lambda-Funktion auf und sortiert nach \`t[1]\` (zweites Element).

**Probe:** \`>>> sorted([(3, 'b'), (1, 'c'), (2, 'a')], key=lambda t: t[1])\` → \`[(2, 'a'), (3, 'b'), (1, 'c')]\` (nach \`'a'\`/\`'b'\`/\`'c'\` sortiert) ✓.

**Typischer Fehler:** \`key\` direkt auf einen Wert setzen — \`key\` braucht eine FUNKTION. Oder Methodenkette wie \`.by(...)\` — gibt es nicht in Python.`,
        [
          'Wie liefert man \`sorted\` einen Sortierschlüssel?',
          'Was tut die Lambda-Funktion mit einem Tupel?',
          '\`key=lambda t: t[1]\` für 2. Element.',
        ],
        {
          '1': '\`key=t[1]\` ist kein Ausdruck im Scope — \`t\` ist nicht definiert. Plus: \`key\` braucht eine FUNKTION, nicht einen einzelnen Wert.',
          '2': '\`.by(...)\` gibt es in Python nicht. Andere Sprachen (Kotlin, Ruby) haben \`sortBy\`.',
          '3': '\`lst.sort(2)\` macht nichts Definiertes — \`sort\` akzeptiert keine Zahl als Argument.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['lambda'] },
      ),
    ],

    // ── SG 4 — `doc-str` — Docstring/Header-Kommentar ───────────────────
    4: [
      // Row 21 · recognize · true-false · uses=[doc-str]
      tf(
        'Ein Python-Docstring ist ein String direkt nach der `def`-Zeile (typisch in `"""triple-quotes"""`); er beschreibt, was die Funktion tut, und kann mit `help(funktion)` oder `funktion.__doc__` abgerufen werden.',
        true,
        `**Ansatz:** Docstrings sind eine Konvention der Python-Community (PEP 257) — eine standardisierte Stelle für Funktionsdokumentation, die von Tools (\`help()\`, IDE-Tooltips, Sphinx) gelesen wird.

**Rechnung:**
\`\`\`
def kraft(m, a):
    """Berechnet die Kraft F = m · a."""
    return m * a

print(kraft.__doc__)   # → "Berechnet die Kraft F = m · a."
help(kraft)            # zeigt Signatur + Docstring
\`\`\`

**Probe:** Triple-quotes erlauben Mehrzeiler ohne Escape: \`"""Erste Zeile.\\n\\nDetails ..."""\` ✓.

**Typischer Fehler:** \`#\`-Kommentar als Docstring nehmen — wird NICHT als Docstring erkannt, fehlt in \`__doc__\` (\`None\`).`,
        [
          'Wo steht der Docstring in der Funktion?',
          'Welche Quoting-Form ist Konvention?',
          'Erstes Statement nach \`def\` als triple-quoted String.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['doc-str'] },
      ),
      // Row 22 · apply-guided · multiple-choice · uses=[doc-str]
      mc(
        'Wo gehört der Docstring in einer Python-Funktion hin?\n```\ndef f(x):\n    [Position?]\n    return x ** 2\n```',
        [
          'Direkt nach der `def`-Zeile, als ERSTES Statement (vor `return`).',
          'Vor der `def`-Zeile.',
          'Am Ende der Funktion (nach `return`).',
          'In einem `#`-Kommentar.',
        ],
        0,
        `**Ansatz:** Per PEP-257-Konvention ist der Docstring das ERSTE Statement nach \`def\`. Nur dann erkennt Python ihn als Docstring und legt ihn in \`__doc__\` ab.

**Rechnung:**
\`\`\`
def f(x):
    """Quadrat von x."""
    return x ** 2

print(f.__doc__)  # → "Quadrat von x."
\`\`\`

**Probe:** Andere Position: vor \`def\` ist nur ein toter String, nach \`return\` UNERREICHBAR (Funktion ist da schon weg). Beides landet NICHT in \`__doc__\`.

**Typischer Fehler:** Docstring nach Statement-Code platzieren — wird zwar als String-Literal erstellt, aber nicht als Docstring registriert.`,
        [
          'An welcher Position erkennt Python einen Docstring?',
          'Erstes Statement, vor allem anderen Code.',
          'Direkt nach \`def\`-Header.',
        ],
        {
          '1': 'Vor \`def\` ist der String im Module-Scope, nicht im Funktions-Scope — kein Docstring der Funktion.',
          '2': 'Nach \`return\` ist die Zeile UNERREICHBAR. Plus: nicht erstes Statement.',
          '3': '\`#\`-Kommentare sind keine Docstrings. \`__doc__\` bleibt \`None\`.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['doc-str'] },
      ),
      // Row 23 · apply-independent · multiple-choice · uses=[doc-str]
      mc(
        'Was liefert `f.__doc__` für:\n```\ndef f(x):\n    """Liefert das Quadrat von x."""\n    return x ** 2\n```',
        [
          '`"Liefert das Quadrat von x."`',
          '`None`',
          'Den gesamten Quellcode der Funktion.',
          '`TypeError`',
        ],
        0,
        `**Ansatz:** \`__doc__\` ist ein automatisch gesetztes Attribut jeder Funktion mit Docstring — enthält genau den String aus dem ersten Statement nach \`def\`.

**Rechnung:** Docstring \`"""Liefert das Quadrat von x."""\` → \`f.__doc__\` ist \`"Liefert das Quadrat von x."\` (ohne triple-quotes, die sind nur Quoting).

**Probe:** \`>>> f.__doc__\` → \`'Liefert das Quadrat von x.'\` ✓. \`>>> help(f)\` zeigt zusätzlich die Signatur \`f(x)\` plus den Docstring.

**Typischer Fehler:** Erwarten, dass \`__doc__\` Source Code liefert (das macht \`inspect.getsource(f)\`). Oder dass \`None\` käme — nur ohne Docstring.`,
        [
          'Wo speichert Python den Docstring?',
          'Welcher String wird ohne Quotes zurückgegeben?',
          '\`__doc__\` enthält genau den Docstring.',
        ],
        {
          '1': '\`None\` käme nur, wenn die Funktion KEINEN Docstring hätte. Hier ist klar einer da.',
          '2': 'Source Code liefert \`inspect.getsource(f)\`, nicht \`__doc__\`. Letzteres ist NUR der Doc-String.',
          '3': 'Kein Fehler — \`__doc__\` ist Standard-Attribut jeder Funktion.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['doc-str'] },
      ),
      // Row 24 · error-analysis · multiple-choice · uses=[doc-str]
      mc(
        'Welche der folgenden Praktiken erzeugt KEINEN gültigen Python-Docstring?',
        [
          'Eine Zeile `# Berechnet ...` direkt nach `def f(x):`.',
          '`"""Berechnet das Quadrat."""` als erstes Statement.',
          '`"""Mehrzeiliger`<br>`Docstring."""` über mehrere Zeilen.',
          '`\'Single-quoted Docstring\'` als erstes Statement.',
        ],
        0,
        `**Ansatz:** Docstrings müssen STRING-LITERALE sein, kein \`#\`-Kommentar. Kommentare und Docstrings sind verschiedene Mechanismen.

**Rechnung:** \`#\`-Kommentar nach \`def\` wird vom Parser ignoriert — der erste echte Statement-Code danach (z.B. \`return\`) lässt \`__doc__ = None\` zurück. String-Literale (Single, Double, Triple-Quotes) werden hingegen als Docstring erkannt, sofern sie das ERSTE Statement sind.

**Probe:** \`>>> def f(x):\\n...     # Berechnet was\\n...     return x*2\\n>>> f.__doc__\` → \`None\` (kein Docstring!). Mit String stattdessen: \`>>> def f(x):\\n...     "Berechnet was"\\n...     return x*2\\n>>> f.__doc__\` → \`'Berechnet was'\` ✓.

**Typischer Fehler:** \`#\`-Kommentar mit Docstring verwechseln. Nur String-Literale (mit Quotes!) werden als Docstring erkannt.`,
        [
          'Was unterscheidet einen Kommentar von einem Docstring?',
          'Welche Notation erkennt Python als Docstring?',
          'Kommentare beginnen mit \`#\` — Docstrings sind String-Literale.',
        ],
        {
          '1': 'Triple-quoted String als erstes Statement — Standard-Konvention für Docstrings. Gültig.',
          '2': 'Mehrzeiliger Docstring mit triple-quotes — gültig und idiomatisch.',
          '3': 'Single-quoted String als erstes Statement IST gültiger Docstring (PEP-257 empfiehlt aber triple-quotes für Konsistenz).',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['doc-str'] },
      ),
      // Row 25 · transfer · matching · uses=[doc-str]
      matching(
        'Ordne der Sprache die typische Form der Funktions-Dokumentation zu.',
        [
          { left: 'Python (PEP 257)', right: '`"""triple-quoted string"""` als erstes Statement nach `def`' },
          { left: 'Matlab (MathWorks-Konvention)', right: '`%`-Kommentarzeilen direkt nach dem `function`-Header' },
          { left: 'C / C++', right: '`/* ... */` Block-Kommentar über der Funktion' },
          { left: 'Java (Javadoc)', right: '`/** ... */` Kommentar mit `@param`/`@return`-Tags' },
        ],
        `**Ansatz:** Jede Sprache hat eine eigene Doc-Konvention, von Tools (\`help()\`, \`javadoc\`, IDE-Tooltips) lesbar.

**Rechnung:**
- Python: \`def f(x):\\n    """..."""\\n    ...\` — abrufbar mit \`help(f)\` oder \`f.__doc__\`.
- Matlab: \`function y = f(x)\\n    % ...\\n    y = ...\` — abrufbar mit \`help f\`.
- C/C++: \`/* ... */\` direkt vor der Funktion (Doxygen erkennt das mit \`/** ... */\`).
- Java: \`/** @param x ... @return ... */\` — Javadoc generiert HTML-Dokumentation daraus.

**Probe:** Vier Konventionen, vier eindeutige Formen. Tools für jede Sprache bauen auf diese Konvention auf. ✓

**Typischer Fehler:** Konventionen vermischen — z.B. \`#\`-Kommentar in Python für Docs nutzen (verständlich, aber \`__doc__\` bleibt \`None\`).`,
        [
          'Welches Quoting-Symbol nutzt Python?',
          'Wie kommentiert Matlab?',
          'C/C++ vs. Java: \`/*\` vs. \`/**\`?',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['doc-str'] },
      ),
    ],
  },
}
