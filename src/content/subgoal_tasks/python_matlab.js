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
}
