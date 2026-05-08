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
  // py-1-4 — Kontrollstrukturen  (4 subGoals)
  // 24 Aufgaben mit pedagogy-Tags · alle 20 Matrix-Zeilen + 4 Bonus.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-4': {
    // ── SG 0 — `einrueckung` — Python: Einrückung statt `end` ────────────
    0: [
      // Row 1 · recognize · true-false · uses=[einrueckung]
      tf(
        'In Python definiert KONSISTENTE EINRÜCKUNG (typischerweise 4 Spaces) den Inhalt eines Codeblocks — ein abschließendes `end`-Schlüsselwort wie in Matlab gibt es nicht.',
        true,
        `**Ansatz:** Python erzwingt Einrückung als Teil der Syntax — der Compiler erkennt Blöcke an gleicher Einrücktiefe, nicht an Klammern oder \`end\`.

**Rechnung:** \`if x > 0:\\n    print('positiv')\\n    print('zweite Zeile im Block')\\nprint('außerhalb')\` — die ersten beiden \`print\` gehören zum if-Block (gleiche Einrückung), das dritte nicht. Konvention laut PEP 8: 4 Leerzeichen pro Stufe.

**Probe:** Matlab-Pendant: \`if x > 0\\n    disp('positiv')\\n    disp('zweite Zeile')\\nend\\ndisp('außerhalb')\`. Hier definiert \`end\` das Block-Ende, nicht die Einrückung. ✓

**Typischer Fehler:** Tabs und Spaces mischen — Python wirft \`TabError\` (Python 3) oder \`IndentationError\`. Editor-Einstellungen prüfen, immer entweder Tabs ODER Spaces nutzen.`,
        [
          'Welches Symbol beendet einen Block in Python?',
          'Was definiert die Block-Zugehörigkeit?',
          'Einrückung — kein \`end\`, keine Klammern.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[einrueckung]
      mc(
        'Welcher der folgenden Python-Schnipsel ist syntaktisch KORREKT?',
        [
          '`if x > 0:`<br>`    print("ok")`',
          '`if x > 0`<br>`    print("ok")`<br>`end`',
          '`if x > 0:`<br>`print("ok")`',
          '`if x > 0:`<br>`{`<br>`    print("ok")`<br>`}`',
        ],
        0,
        `**Ansatz:** Korrekte Python-If-Syntax: \`if Bedingung:\` + EINGERÜCKTER Block-Inhalt. Drei Pflicht-Elemente: Bedingung, Doppelpunkt, eingerückter Body.

**Rechnung:** Option A: \`if x > 0:\\n    print("ok")\` — Doppelpunkt ✓, Einrückung ✓.
- B fehlt der Doppelpunkt, hat \`end\` (Matlab).
- C hat Doppelpunkt, aber das \`print\` ist NICHT eingerückt → IndentationError.
- D nutzt geschweifte Klammern (C/Java-Stil) — Python interpretiert \`{\` als Set/Dict, gibt SyntaxError oder unerwartetes Verhalten.

**Probe:** \`>>> x = 5; \\nif x > 0:\\n    print("ok")\` → \`ok\` ✓.

**Typischer Fehler:** Doppelpunkt vergessen oder Einrückung weglassen — beides gibt klare Errors. Selten: Klammern setzen wie in C — Python kommentarlos, aber nicht das Erwartete.`,
        [
          'Welche zwei Markierungen sind Pflicht in Python?',
          'Was passiert ohne Doppelpunkt?',
          'Doppelpunkt + Einrückung — keine Klammern, kein \`end\`.',
        ],
        {
          '1': 'Fehlender Doppelpunkt → \`SyntaxError\`. Plus: \`end\` ist Matlab-Stil, nicht Python.',
          '2': 'Print ohne Einrückung → \`IndentationError: expected an indented block\`. Der Body MUSS eingerückt sein.',
          '3': 'Geschweifte Klammern sind in Python für Sets/Dicts reserviert. \`{...}\` als Codeblock funktioniert nicht.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Row 3 · apply-independent · multiple-choice · uses=[einrueckung]
      mc(
        'Was passiert beim Ausführen dieses Python-Codes?\n```\nif x > 0:\nprint("ok")\n```',
        [
          '`IndentationError: expected an indented block` — der Body muss eingerückt sein.',
          'Funktioniert: gibt "ok" aus.',
          '`SyntaxError: unexpected EOF`',
          '`NameError`',
        ],
        0,
        `**Ansatz:** Nach \`:\` erwartet Python einen eingerückten Block. Der \`print\`-Befehl steht aber auf Spalte 0 (gleiche Einrückung wie \`if\`) — also außerhalb des Blocks.

**Rechnung:** Python's Parser sucht nach \`:\` einen eingerückten Body. Findet er stattdessen eine Zeile ohne Einrückung, wirft er \`IndentationError: expected an indented block after 'if' statement\`.

**Probe:** \`>>> if 1 > 0:\\n... print("ok")\` (mit Spalte 0 für print) → \`IndentationError\`. ✓ Korrektur: \`    print("ok")\` (4 Spaces).

**Typischer Fehler:** Aus C/Java kommen, wo \`if (cond) statement;\` ohne Einrückung gültig ist. Python erzwingt strukturelle Einrückung.`,
        [
          'Was erwartet Python nach dem Doppelpunkt?',
          'Steht \`print\` eingerückt?',
          'Body fehlt → IndentationError.',
        ],
        {
          '1': 'Funktioniert NICHT — der Body ist falsch positioniert. Ohne Einrückung wirft Python \`IndentationError\`.',
          '2': 'EOF-Fehler tritt auf, wenn der String/Block unvollständig ist. Hier ist der Block nicht eingerückt — das ist \`IndentationError\`, nicht \`SyntaxError\`.',
          '3': '\`NameError\` würde gelten, wenn \`x\` oder \`print\` undefined wären. Der Fehler ist hier aber struktureller Art (Einrückung), nicht semantisch.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[einrueckung]
      mc(
        'Ein Lerner schreibt diesen Python-Code:\n```\nif x > 0\n    print("ok")\n```\nWas meldet der Interpreter?',
        [
          '`SyntaxError` — der Doppelpunkt am Ende der `if`-Zeile fehlt.',
          'Funktioniert: \"ok\" wird ausgegeben.',
          '`IndentationError`',
          '`NameError: x is not defined`',
        ],
        0,
        `**Ansatz:** Python verlangt nach \`if Bedingung\` ein \`:\` — sonst ist die Zeile keine gültige if-Anweisung.

**Rechnung:** Korrekt: \`if x > 0:\\n    print("ok")\`. Ohne \`:\` wirft Python \`SyntaxError: expected ':'\` (in neueren Versionen mit Hint), in älteren \`SyntaxError: invalid syntax\`.

**Probe:** Test im REPL: \`>>> if 1 > 0\\n... print("ok")\` → \`SyntaxError\`. ✓

**Typischer Fehler:** Aus Matlab/C++/Java mitnehmen, wo Bedingungen ohne nachfolgenden \`:\` stehen. In Python ist der Doppelpunkt Pflicht für \`if\`/\`elif\`/\`else\`/\`for\`/\`while\`/\`def\`/\`class\`.`,
        [
          'Was muss am Ende der if-Zeile stehen?',
          'Welches Symbol fehlt?',
          'Doppelpunkt \`:\` zwingend.',
        ],
        {
          '1': 'Funktioniert NICHT — Python parst die Zeile nicht als if-Anweisung. Der Doppelpunkt ist Pflicht.',
          '2': '\`IndentationError\` käme erst NACH erfolgreichem Parsen. Hier scheitert das Parsen schon bei der if-Zeile (Doppelpunkt fehlt).',
          '3': '\`x\` mag undefiniert sein, aber das wäre ein Laufzeit-Fehler. Hier kommt schon beim Parsen ein \`SyntaxError\`.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[einrueckung]
      mc(
        'Du übersetzt einen Matlab `if-elseif-else-end`-Block nach Python. Welche Aussage ist KORREKT?',
        [
          'In Python heißt es `elif` statt `elseif`; `end` entfällt; jede `if`/`elif`/`else`-Zeile braucht `:`; Block-Inhalt wird eingerückt.',
          'Der Code ist 1:1 übertragbar — Matlab und Python sind gleich.',
          'In Python heißt es `else if` als zwei getrennte Wörter; `end` muss explizit geschrieben werden.',
          'Python verwendet geschweifte Klammern statt Einrückung.',
        ],
        0,
        `**Ansatz:** Vier Migrationsregeln Matlab → Python für if-Konstrukte: Schlüsselwort, Block-Ende, Doppelpunkt, Einrückung.

**Rechnung:**

\`\`\`
% Matlab                  # Python
if x > 0                  if x > 0:
    y = 1;                    y = 1
elseif x == 0             elif x == 0:
    y = 0;                    y = 0
else                      else:
    y = -1;                   y = -1
end                       (kein end)
\`\`\`

**Probe:** Vier Punkte: \`elseif\` → \`elif\` ✓, \`end\` weg ✓, \`:\` an jede Header-Zeile ✓, Body eingerückt ✓. Semikolons in Matlab unterdrücken Output und sind in Python nicht nötig.

**Typischer Fehler:** \`elseif\` direkt schreiben — Python kennt das nicht (\`SyntaxError\`). Oder Java-\`else if\` mit Leerzeichen — auch nicht gültig in Python.`,
        [
          'Wie heißt \`elseif\` in Python?',
          'Was passiert mit \`end\` bei der Migration?',
          'Vier Regeln: Schlüsselwort, end weg, :, Einrückung.',
        ],
        {
          '1': 'Matlab und Python unterscheiden sich syntaktisch deutlich — keine 1:1-Übertragung möglich.',
          '2': '\`else if\` (zwei Wörter) gibt es in Python nicht — heißt zusammen \`elif\`. \`end\` entfällt komplett.',
          '3': 'Python nutzt EINRÜCKUNG, NICHT geschweifte Klammern. Klammern sind für Sets/Dicts reserviert.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Bonus · recognize · true-false · uses=[einrueckung]
      tf(
        'Python erlaubt sowohl Tabs als auch Spaces zur Einrückung; im selben Codeblock dürfen sie aber NICHT gemischt werden — sonst meldet Python 3 einen `TabError`.',
        true,
        `**Ansatz:** Python ist tolerant bei der Wahl (Tab ODER Spaces), aber strikt bei Konsistenz. Mischung führt zu undefiniertem Block-Layout.

**Rechnung:** PEP 8 empfiehlt 4 Leerzeichen. Python 3 weigert sich, Tabs und Spaces im selben Block zu mischen — wirft \`TabError: inconsistent use of tabs and spaces in indentation\`.

**Probe:** Erste Zeile mit Tab, zweite mit 4 Spaces → \`TabError\`. Beide Zeilen mit 4 Spaces → läuft. ✓

**Typischer Fehler:** In einem Editor mit Auto-Indent verschiedene Einrückungstiefen verwenden, ohne dass die Tab-Setting konsistent ist. Lösung: Editor-Einstellung "Tabs zu Spaces", konsistent 4 Spaces.`,
        [
          'Sind Tabs grundsätzlich verboten?',
          'Was passiert bei Mischung im selben Block?',
          'Konsistenz nötig: nicht mischen, sonst TabError.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['einrueckung'] },
      ),
    ],

    // ── SG 1 — `eq-vs-assign` — `==` Vergleich, `=` Zuweisung ────────────
    1: [
      // Row 6 · recognize · true-false · uses=[eq-vs-assign]
      tf(
        'In Python ist `=` der Zuweisungsoperator (weist einen Wert an einen Namen) und `==` der Vergleichsoperator (liefert `True`/`False`) — eine Verwechslung führt entweder zu `SyntaxError` oder zu einem stillen Bug.',
        true,
        `**Ansatz:** Beide Symbole sehen ähnlich aus, machen aber etwas grundsätzlich Verschiedenes. Pythons strenger Parser hilft, den schlimmsten Fall zu vermeiden.

**Rechnung:** \`x = 5\` setzt $x$ auf $5$ (kein Wert für Ausdrücke). \`x == 5\` testet, ob $x$ gleich $5$ ist, und liefert \`True\` oder \`False\`.

**Probe:** \`>>> x = 5\` → kein Output (Statement). \`>>> x == 5\` → \`True\`. ✓ \`>>> if x = 5:\` → \`SyntaxError: invalid syntax\` ✓.

**Typischer Fehler:** Aus C kommen, wo \`if (x = 5)\` zuweist UND testet. Python verbietet Zuweisung in Bedingungen (außer Walrus \`:=\` ab 3.8) — bewusste Designentscheidung gegen häufige Bugs.`,
        [
          'Was tut \`=\` als Operator?',
          'Was tut \`==\`?',
          'Eines weist zu, das andere vergleicht.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[eq-vs-assign]
      mc(
        'Welche Python-Zeile prüft, ob `x` den Wert `5` HAT (ohne ihn zu verändern)?',
        ['`if x == 5:`', '`if x = 5:`', '`if x is 5:`', '`if x equals 5:`'],
        0,
        `**Ansatz:** Wert-Vergleich in Python = \`==\`. Identitätsvergleich (\`is\`) ist für Objekte gedacht, nicht für Zahlen.

**Rechnung:** \`if x == 5:\` testet Wertgleichheit und liefert \`True\` oder \`False\`. Korrekt für die Frage "hat x den Wert 5?".

**Probe:** \`>>> x = 5\\n>>> if x == 5: print("ja")\` → \`ja\` ✓.

**Typischer Fehler:** \`if x = 5:\` schreiben (C-Stil) — \`SyntaxError\`. Oder \`if x is 5:\` — funktioniert für kleine ints zufällig wegen Integer-Caching, ist aber semantisch falsch (\`is\` testet Identität, nicht Wert) und liefert für andere Werte \`False\`.`,
        [
          'Welcher Operator vergleicht Werte?',
          'Was macht \`=\` allein?',
          '\`==\` für Wertvergleich.',
        ],
        {
          '1': '\`if x = 5:\` gibt \`SyntaxError\` — \`=\` darf NICHT in einer if-Bedingung stehen. Plus: würde es funktionieren, würde es zuweisen, nicht prüfen.',
          '2': '\`is\` testet OBJEKT-Identität, nicht Wertgleichheit. Für kleine ints liefert es zwar oft \`True\` (wegen interner Caches), ist aber semantisch falsch und unzuverlässig (z.B. für $x = 1000$ kann es \`False\` geben).',
          '3': '\`equals\` ist KEIN Python-Schlüsselwort — \`SyntaxError\`. Java hat \`.equals()\` als Methode, Python nutzt \`==\`.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Row 8 · apply-independent · multiple-choice · uses=[eq-vs-assign]
      mc(
        'Welche Aussage über `=` und `==` in Python ist KORREKT?',
        [
          '`x = 5` weist `x` den Wert 5 zu (Statement, kein Wert); `x == 5` vergleicht und liefert True oder False (Ausdruck).',
          'Beide weisen zu — `==` ist nur eine Schreibvariante.',
          'Beide vergleichen — `=` ist veraltet.',
          '`==` weist zu, `=` vergleicht (umgekehrte Konvention).',
        ],
        0,
        `**Ansatz:** Ein Operator weist zu (Seiteneffekt), der andere vergleicht (liefert Wert). Wichtig zu unterscheiden.

**Rechnung:** \`x = 5\` ist ein Statement, hat KEINEN Rückgabewert. \`x == 5\` ist ein Ausdruck, liefert \`bool\`.

**Probe:** \`>>> y = (x = 5)\` → \`SyntaxError\` (Zuweisung ist kein Ausdruck). \`>>> y = (x == 5)\` → läuft, $y$ wird \`True\` oder \`False\`. ✓

**Typischer Fehler:** \`=\` und \`==\` als äquivalent ansehen — gerade bei flüchtigem Lesen. Ein einziges Zeichen Unterschied, aber komplett verschiedene Semantik.`,
        [
          'Welcher Operator hat einen Seiteneffekt (verändert)?',
          'Welcher liefert einen Wahrheitswert?',
          '\`=\` Statement (zuweisen) · \`==\` Ausdruck (vergleichen).',
        ],
        {
          '1': '\`==\` weist NICHTS zu — vergleicht nur. Das wäre fatal, wenn \`==\` zuweisen würde.',
          '2': 'Beide vergleichen ist falsch — \`x = 5\` weist 5 an x zu.',
          '3': 'Die Konvention ist \`=\` zuweisen, \`==\` vergleichen — exakt wie in C/Java/JS. Verwechslung gefährlich.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[eq-vs-assign]
      mc(
        'Ein Lerner schreibt `if x = 5:` in Python, in der Erwartung, dass `x` mit `5` verglichen wird. Was meldet Python?',
        [
          '`SyntaxError` — Python erlaubt KEINE Zuweisung in einer if-Bedingung. Korrekt: `if x == 5:`.',
          'Funktioniert: x wird zu 5 gesetzt und der Block ausgeführt.',
          'Funktioniert: x wird mit 5 verglichen.',
          '`NameError`',
        ],
        0,
        `**Ansatz:** Python's Parser erkennt \`=\` als Zuweisungs-Statement. Inside einer Bedingung erwartet er einen AUSDRUCK. Statement statt Ausdruck → SyntaxError.

**Rechnung:** \`if x = 5:\` wirft \`SyntaxError: invalid syntax\` (oder hilfreicher: \`expected ':' after assignment\` in neueren Versionen). Korrektur: \`if x == 5:\` (Vergleich).

**Probe:** \`>>> x = 3\\n>>> if x = 5: print("ja")\` → \`SyntaxError\` ✓.

**Typischer Fehler:** C-Reflex (dort ist \`if (x = 5)\` legal — weist zu UND testet, weil \`=\` einen Wert liefert). Python verbietet das absichtlich, weil es eine häufige Quelle stiller Bugs ist.`,
        [
          'Welche Operation gehört in eine if-Bedingung?',
          'Erlaubt Python Zuweisung in if?',
          'Ausdruck (Vergleich) erforderlich, kein Statement.',
        ],
        {
          '1': 'Funktioniert NICHT — Python verbietet Zuweisung in if. C macht das, Python nicht.',
          '2': 'Vergleich wäre \`==\`, nicht \`=\`. Plus: in dieser Form geht überhaupt nichts durch.',
          '3': '\`NameError\` käme bei undefinierten Namen zur LAUFZEIT. Hier scheitert Python schon beim Parsen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Row 10 · transfer · multiple-choice · uses=[eq-vs-assign]
      mc(
        'In C kann man `if (x = berechne()) { ... }` schreiben — das weist zu UND testet. Welcher Python-Code erreicht ein äquivalentes Verhalten OHNE den Walrus-Operator?',
        [
          '`x = berechne()`<br>`if x:`<br>`    ...`',
          '`if x = berechne():`<br>`    ...`',
          '`if x == berechne():`<br>`    ...`',
          '`if x in berechne():`<br>`    ...`',
        ],
        0,
        `**Ansatz:** Da Python Zuweisung in if verbietet, splittet man in zwei Zeilen: erst zuweisen, dann testen.

**Rechnung:** Zwei Zeilen lesen sich als "berechne den Wert und speichere in $x$, dann teste, ob er truthy ist". Funktional äquivalent zum C-Idiom.

**Probe:** Mit Walrus (Python 3.8+): \`if x := berechne():\` macht beides in einer Zeile. Ohne Walrus die zweistufige Form.

**Typischer Fehler:** Direkten C-Code übernehmen → \`SyntaxError\`. Oder \`if x == berechne():\` schreiben — vergleicht $x$ mit dem RÜCKGABEWERT, weist aber NICHTS zu (gefährlich, wenn $x$ vorher undefined oder veraltet).`,
        [
          'Wie weist man in Python zu?',
          'Wie testet man in Python?',
          'Splitten: erst \`x = ...\`, dann \`if x:\`.',
        ],
        {
          '1': '\`if x = berechne():\` ist genau das, was Python verbietet — \`SyntaxError\`.',
          '2': '\`if x == berechne():\` vergleicht $x$ mit der Rückgabe, weist aber NICHTS zu. Wenn $x$ vorher 0 oder undefined ist, falsch.',
          '3': '\`in\` testet Containment in einer Sequenz/Container — nicht das, was hier gefragt ist.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Bonus · recognize · true-false · uses=[eq-vs-assign]
      tf(
        'Der Walrus-Operator `:=` (Python 3.8+) erlaubt Zuweisung INNERHALB eines Ausdrucks: `if (n := len(lst)) > 5:` weist `n` den Wert der Länge zu UND prüft die Bedingung.',
        true,
        `**Ansatz:** \`:=\` (formell "Assignment Expression") füllt die Lücke, die \`=\` in Bedingungen offen ließ — aber explizit mit eigenem Operator-Symbol, damit der Parser nicht raten muss.

**Rechnung:** \`if (n := len(lst)) > 5:\` ist äquivalent zu:
\`\`\`
n = len(lst)
if n > 5:
\`\`\`
... aber in einer Zeile. Klammern um \`(n := ...)\` sind in vielen Kontexten nötig.

**Probe:** \`>>> lst = [1, 2, 3, 4, 5, 6]\\n>>> if (n := len(lst)) > 5: print(f"length {n}")\` → \`length 6\` ✓.

**Typischer Fehler:** Walrus mit \`=\` verwechseln — das Doppelpunkt-Gleich \`:=\` ist explizit. Vor 3.8 gibt es das nicht; bei älteren Python-Versionen wirft das \`SyntaxError\`.`,
        [
          'Seit welcher Python-Version gibt es den Walrus?',
          'Was macht \`:=\` semantisch?',
          'Zuweisen UND Wert liefern in einem Ausdruck.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
    ],

    // ── SG 2 — `for-range` — Python 0..n-1, Matlab 1..n ─────────────────
    2: [
      // Row 11 · recognize · true-false · uses=[for-range]
      tf(
        '`for i in range(5)` durchläuft in Python die Werte $i = 0, 1, 2, 3, 4$ — also $n$ Werte ab $0$, der Endwert $n$ ist NICHT enthalten.',
        true,
        `**Ansatz:** \`range(n)\` erzeugt das halboffene Intervall $[0, n)$ — links inklusiv, rechts exklusiv. Identisch zur Slicing-Konvention.

**Rechnung:** \`range(5)\` $\\to \\{0, 1, 2, 3, 4\\}$. Insgesamt $5$ Werte ($n - 0 = 5$).

**Probe:** \`>>> list(range(5))\` → \`[0, 1, 2, 3, 4]\` ✓. Anzahl: $5$ ✓.

**Typischer Fehler:** Matlab-Reflex: \`for i = 1:5\` → $1, 2, 3, 4, 5$. Python startet bei 0 und schließt 5 aus.`,
        [
          'Wie viele Werte produziert \`range(n)\`?',
          'Was ist der erste, was der letzte Wert?',
          '0..n-1 — n Werte gesamt.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['for-range'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[for-range]
      mc(
        'Welche Werte durchläuft `i` in `for i in range(2, 7):`?',
        ['`2, 3, 4, 5, 6`', '`2, 3, 4, 5, 6, 7`', '`1, 2, 3, 4, 5`', '`0, 1, 2, ..., 6`'],
        0,
        `**Ansatz:** \`range(a, b)\` erzeugt das halboffene Intervall $[a, b)$ — also $a, a+1, \\ldots, b-1$.

**Rechnung:** \`range(2, 7)\` → $2, 3, 4, 5, 6$. Anzahl: $7 - 2 = 5$ Werte. Endwert $7$ ist EXKLUSIV.

**Probe:** \`>>> list(range(2, 7))\` → \`[2, 3, 4, 5, 6]\` ✓.

**Typischer Fehler:** Endwert mit-zählen → $2, 3, 4, 5, 6, 7$. Oder bei $1$ statt $2$ starten — falsch um $1$ in beide Richtungen.`,
        [
          'Was ist der Startwert?',
          'Was ist der letzte Wert (vor dem Stop)?',
          'Halb-offen $[a, b)$.',
        ],
        {
          '1': 'Endwert $7$ wäre dabei — die rechte Grenze ist aber EXKLUSIV.',
          '2': 'Startwert ist $a = 2$, nicht $1$. Off-by-one in den Anfang.',
          '3': '$0, 1, \\ldots, 6$ wäre \`range(7)\` mit nur einem Argument. Hier sind aber zwei: Start $2$, Stop $7$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['for-range'] },
      ),
      // Row 13 · apply-independent · number-input · uses=[for-range]
      ni(
        'Wie viele Werte produziert `range(3, 12)` in Python?',
        9, 0, '',
        `**Ansatz:** Anzahl Werte in \`range(a, b)\` ist $b - a$ (für $a \\le b$).

**Rechnung:** $12 - 3 = 9$. Konkret: \`range(3, 12)\` → $3, 4, 5, 6, 7, 8, 9, 10, 11$. Neun Werte.

**Probe:** \`>>> len(list(range(3, 12)))\` → \`9\` ✓. \`>>> list(range(3, 12))\` → \`[3, 4, 5, 6, 7, 8, 9, 10, 11]\` ✓.

**Typischer Fehler:** $12$ einschließen → $10$ Werte. Oder $b - a + 1 = 10$ rechnen (Matlab-Formel).`,
        [
          'Was ist die Anzahl-Formel für \`range(a, b)\`?',
          '$b - a$, nicht $b - a + 1$.',
          '$12 - 3 = 9$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['for-range'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[for-range]
      mc(
        'Ein Lerner möchte mit Python die Zahlen 1 BIS 5 (inklusiv) durchlaufen und schreibt `for i in range(1, 5):`. Was hat er falsch gemacht?',
        [
          'Die rechte Grenze ist EXKLUSIV — `range(1, 5)` durchläuft nur $1, 2, 3, 4$. Korrekt für $1$ bis $5$ inklusive: `range(1, 6)`.',
          '`range` darf nicht mit zwei Argumenten aufgerufen werden.',
          '`for i in` ist falsch — muss `for i =` sein.',
          'Python kann nur ab 0 zählen.',
        ],
        0,
        `**Ansatz:** Python-\`range\` ist halboffen — wenn man bis $b$ INKLUSIVE will, muss man $b + 1$ als Stop angeben.

**Rechnung:** Gewünscht: $1, 2, 3, 4, 5$ (5 Werte). \`range(1, 5)\` → $1, 2, 3, 4$ (4 Werte). \`range(1, 6)\` → $1, 2, 3, 4, 5$ (5 Werte) ✓.

**Probe:** \`>>> list(range(1, 6))\` → \`[1, 2, 3, 4, 5]\` ✓.

**Typischer Fehler:** Aus Matlab kommen, wo \`for i = 1:5\` GENAU $1, 2, 3, 4, 5$ liefert (inklusiv). Python ist exklusiv — Stop muss um $1$ höher.`,
        [
          'Welche Werte produziert \`range(1, 5)\`?',
          'Welche Anpassung macht den Endwert inklusiv?',
          'Stop um $+1$ erhöhen.',
        ],
        {
          '1': '\`range\` mit zwei Argumenten ist gültig (\`range(start, stop)\`). Das ist nicht der Fehler.',
          '2': '\`for i in\` ist die Python-Syntax für for-Schleifen über Iterables. Matlab nutzt \`for i =\`, Python \`for i in\`.',
          '3': '\`range\` kann auch mit anderem Startwert: \`range(5, 10)\` → $5, 6, 7, 8, 9$. Python-Limitation existiert hier nicht.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['for-range'] },
      ),
      // Row 15 · transfer · multiple-choice · uses=[for-range]
      mc(
        'Matlab-Code `for i = 0:4` durchläuft die fünf Werte $0, 1, 2, 3, 4$. Welcher Python-Code macht GENAU dasselbe?',
        ['`for i in range(5):`', '`for i in range(4):`', '`for i in range(0, 4):`', '`for i in range(1, 5):`'],
        0,
        `**Ansatz:** Matlab \`a:b\` ist inklusiv → erzeugt $b - a + 1$ Werte. Python \`range(a, b)\` ist exklusiv → erzeugt $b - a$ Werte. Bei Migration: Stop um $+1$ erhöhen.

**Rechnung:** Matlab \`0:4\` → $0, 1, 2, 3, 4$ (5 Werte). Python-Äquivalent: Werte $0$ bis $4$, also \`range(5)\` (Stop $5$ exklusiv) ODER \`range(0, 5)\`.

**Probe:** \`>>> list(range(5))\` → \`[0, 1, 2, 3, 4]\` ✓. Identisch zu Matlab \`0:4\`. ✓

**Typischer Fehler:** Matlab-Endwert direkt übernehmen → \`range(4)\` (nur $0, 1, 2, 3$ — vier Werte, ein zu wenig).`,
        [
          'Wieviele Werte hat Matlab \`0:4\`?',
          'Welcher Stop in Python liefert dieselbe Menge?',
          'Stop um 1 erhöhen → \`range(5)\`.',
        ],
        {
          '1': '\`range(4)\` → $0, 1, 2, 3$ (vier Werte). Matlab \`0:4\` hat aber FÜNF Werte.',
          '2': '\`range(0, 4)\` ist äquivalent zu \`range(4)\` — vier Werte, immer noch eins zu wenig.',
          '3': '\`range(1, 5)\` → $1, 2, 3, 4$ — startet bei 1 statt 0. Falscher Startwert.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['for-range'] },
      ),
      // Bonus · apply-independent · number-input · uses=[for-range]
      ni(
        'Was ist die Summe aller Werte, die `for i in range(5):` in Python erzeugt?',
        10, 0, '',
        `**Ansatz:** Werte sind $0, 1, 2, 3, 4$ — Summe ausrechnen.

**Rechnung:** $0 + 1 + 2 + 3 + 4 = 10$. Allgemein: $\\sum_{i=0}^{n-1} i = \\frac{n(n-1)}{2}$. Hier: $5 \\cdot 4 / 2 = 10$ ✓.

**Probe:** \`>>> sum(range(5))\` → \`10\` ✓.

**Typischer Fehler:** $1+2+3+4+5 = 15$ rechnen (Matlab-Bereich). Python startet bei 0 und endet bei 4.`,
        [
          'Welche Werte durchläuft \`range(5)\`?',
          'Summen-Formel: $n(n-1)/2$ für $0..n-1$.',
          '$0+1+2+3+4 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['for-range'] },
      ),
    ],

    // ── SG 3 — `while-abbruch` — Endlos-Schleife verhindern ──────────────
    3: [
      // Row 16 · recognize · true-false · uses=[while-abbruch]
      tf(
        'Eine `while`-Schleife in Python braucht zwingend einen Mechanismus, der die Bedingung irgendwann FALSE werden lässt — sonst entsteht eine Endlos-Schleife.',
        true,
        `**Ansatz:** Eine while-Schleife terminiert nur, wenn die Bedingung im Schleifenkörper irgendwann auf False wechselt. Geschieht das nie, läuft sie endlos.

**Rechnung:** Korrekt: \`i = 0\\nwhile i < 10:\\n    print(i)\\n    i += 1\` — \`i\` wird inkrementiert, irgendwann gilt \`i < 10\` nicht mehr. Falsch (Endlos): \`i = 0\\nwhile i < 10:\\n    print(i)\` — \`i\` bleibt 0.

**Probe:** Faustregel: jede while-Schleife muss MINDESTENS eine Variable in der Bedingung verändern. Notausstieg: \`break\` (springt sofort raus).

**Typischer Fehler:** Inkrement vergessen (häufigster Bug bei Anfängern). Oder Inkrement in falschen Block (z.B. außerhalb der while-Body, also nie ausgeführt).`,
        [
          'Was beendet eine while-Schleife?',
          'Was ist nötig, damit die Bedingung false wird?',
          'Variable im Body verändern, die in der Bedingung steht.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[while-abbruch]
      mc(
        'Welche dieser while-Schleifen läuft GENAU 5 Mal durch und terminiert dann?',
        [
          '`i = 0`<br>`while i < 5:`<br>`    print(i)`<br>`    i = i + 1`',
          '`while True:`<br>`    print("hi")`',
          '`i = 0`<br>`while i < 5:`<br>`    print(i)`',
          '`i = 5`<br>`while i < 5:`<br>`    print(i)`<br>`    i = i + 1`',
        ],
        0,
        `**Ansatz:** Drei Eigenschaften prüfen: Startwert, Bedingung, Update im Body. Alle drei zusammen entscheiden über Iterationszahl.

**Rechnung:** Option A: $i = 0$, $i < 5$, $i$ wird inkrementiert.
- iter 1: $i=0$, druckt 0, $i \\to 1$
- iter 2: $i=1$, druckt 1, $i \\to 2$
- iter 3: $i=2$, druckt 2, $i \\to 3$
- iter 4: $i=3$, druckt 3, $i \\to 4$
- iter 5: $i=4$, druckt 4, $i \\to 5$
- check: $5 < 5$ false → exit. Total: 5 Iterationen ✓.

**Probe:** Equivalent: \`for i in range(5): print(i)\` (5 Iterationen). ✓

**Typischer Fehler:** Inkrement-Position oder -Größe falsch wählen. Oder \`while True\` ohne \`break\` schreiben.`,
        [
          'Wie viele Werte durchläuft \`i\`?',
          'Wird \`i\` im Körper aktualisiert?',
          '$i = 0, 1, 2, 3, 4$ — fünf Werte.',
        ],
        {
          '1': '\`while True\` ohne Inkrement oder \`break\` läuft endlos.',
          '2': 'Ohne Update von \`i\` bleibt \`i = 0\` und die Bedingung \`i < 5\` immer wahr → Endlosschleife.',
          '3': 'Schon zu Beginn ist $i = 5$, also \`5 < 5\` false. Schleife läuft 0 mal — terminiert sofort, aber nicht "5 mal".',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[while-abbruch]
      mc(
        'Wie oft wird der Schleifenkörper von folgendem Code ausgeführt?\n```\nn = 5\nwhile n > 0:\n    n = n - 1\n```',
        ['`5`', '`6`', '`4`', 'Endlos'],
        0,
        `**Ansatz:** Schleife terminiert, wenn \`n > 0\` false wird, also bei $n = 0$. Pro Iteration sinkt $n$ um $1$.

**Rechnung:**
- Start: $n = 5$. \`5 > 0\` true → iter 1: $n \\to 4$.
- $n = 4$ > 0 → iter 2: $n \\to 3$.
- $n = 3$ > 0 → iter 3: $n \\to 2$.
- $n = 2$ > 0 → iter 4: $n \\to 1$.
- $n = 1$ > 0 → iter 5: $n \\to 0$.
- Check: \`0 > 0\` false → exit. Total: 5 Iterationen.

**Probe:** Allgemein bei Start $n_0$ und Bedingung \`n > 0\` mit Update \`n -= 1\`: genau $n_0$ Iterationen. ✓

**Typischer Fehler:** $6$ Iterationen zählen (Off-by-one — vergessen, dass die letzte Iteration $n$ auf $0$ setzt, dann wird die Bedingung getestet und es endet). Oder $4$ — vergessen, dass die Iteration mit $n = 1$ noch läuft.`,
        [
          'Bei welchem $n$ stoppt die Schleife?',
          'Wie verändert sich $n$ pro Iteration?',
          'Von $5$ runter bis $0$ — wie viele Schritte?',
        ],
        {
          '1': '$6$ wäre, wenn auch die Iteration mit $n = 0$ liefe — die Bedingung wird aber VOR der Iteration getestet, $0 > 0$ ist false, also kein zusätzlicher Durchlauf.',
          '2': '$4$ würde nur bis $n = 1$ laufen — aber die Bedingung \`1 > 0\` ist wahr, also läuft auch diese Iteration.',
          '3': 'Die Schleife terminiert, weil $n$ in jedem Schritt verringert wird. Endlos wäre nur ohne Update.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[while-abbruch]
      mc(
        'Ein Studierender schreibt:\n```\ni = 0\nwhile i < 10:\n    print(i)\n```\nWas passiert?',
        [
          'ENDLOSSCHLEIFE — `i` wird im Körper nie verändert, daher bleibt `i < 10` immer wahr.',
          'Druckt `0, 1, 2, ..., 9` und terminiert.',
          'Druckt nur `0` und terminiert.',
          '`IndentationError`',
        ],
        0,
        `**Ansatz:** Zähler-Variable in der Bedingung muss im Körper verändert werden — sonst kein Termination.

**Rechnung:** \`i = 0\` und Bedingung \`i < 10\`. Im Körper steht NUR \`print(i)\` — keine Veränderung von \`i\`. Daher bleibt $i = 0$ ewig, die Bedingung bleibt wahr.

**Probe:** Beim Test im REPL würde der Code \`0\` immer wieder drucken, bis man Strg+C drückt. ✓ Korrektur: \`i = i + 1\` (oder kürzer \`i += 1\`) als zweite Zeile im Body.

**Typischer Fehler:** Inkrement im FALSCHEN Block — z.B. AUSSERHALB der while-Body (auf Spalte 0). Dann wird \`i += 1\` nie ausgeführt, weil die while-Schleife vorher endlos ist.`,
        [
          'Welche Variable muss sich verändern?',
          'Wo in der Schleife passiert das?',
          'Inkrement \`i += 1\` fehlt → Endlos.',
        ],
        {
          '1': 'Würde gelten, wenn \`i\` im Körper inkrementiert wäre. Hier fehlt das Update.',
          '2': 'Ohne Update läuft die Iteration mit $i = 0$ unendlich oft — \`0\` wird wiederholt gedruckt.',
          '3': 'Der Code ist syntaktisch korrekt — \`while\` mit \`:\` und eingerücktem Body. Kein IndentationError.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Row 20 · transfer · multiple-choice · uses=[while-abbruch]
      mc(
        'In einem iterativen Algorithmus willst du abbrechen, sobald die Differenz `delta` "klein genug" ist (Toleranz $10^{-9}$). Welche while-Bedingung ist BESSER GEEIGNET?',
        [
          '`while delta > 1e-9:` — läuft, solange Differenz noch zu groß ist; terminiert, wenn sie unter Toleranz fällt.',
          '`while delta == 0:` — Floats erreichen exakt 0 fast nie → potenzielle Endlosschleife.',
          '`while delta:` — bricht nur ab, wenn delta exakt 0 ist; bei Floats fast nie.',
          '`while True:` — Endlosschleife ohne Abbruch.',
        ],
        0,
        `**Ansatz:** Numerische Iteration braucht eine RELATIVE oder ABSOLUTE Toleranz als Abbruchkriterium — nicht exakte Gleichheit (Floats erreichen exakt $0$ fast nie).

**Rechnung:** \`while delta > 1e-9:\` läuft, solange die Differenz größer als die Toleranz ist. Im Körper wird $\\delta$ aktualisiert (z.B. neue Iteration berechnen). Sobald $\\delta \\le 10^{-9}$, terminiert die Schleife.

**Probe:** Newton-Verfahren-Pattern: \`while abs(f(x)) > 1e-10: x = x - f(x)/df(x)\`. ✓

**Typischer Fehler:** \`while delta != 0:\` oder \`while delta == 0:\` — beides ist bei Floats wegen Rundungsfehlern unzuverlässig. Toleranz ist die robuste Lösung.`,
        [
          'Welcher Wert ist "klein genug"?',
          'Toleranz oder exakte Gleichheit?',
          'Toleranz: \`> eps\` als while-Bedingung.',
        ],
        {
          '1': '\`while delta == 0:\` läuft NUR, wenn delta exakt 0 ist. Bei numerischer Iteration startet delta meist groß und sinkt — wird selten exakt 0. Plus: missverstanden — sollte \`!= 0\` sein, aber selbst das hat das gleiche Float-Problem.',
          '2': '\`while delta:\` ist gleichwertig zu \`while delta != 0:\` — testet auf "truthy". Bei Floats fast nie 0, also nahezu Endlos.',
          '3': '\`while True:\` ohne \`break\` ist eine echte Endlosschleife — kein Abbruchmechanismus.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Bonus · recognize · true-false · uses=[while-abbruch]
      tf(
        '`break` in Python verlässt die innerste umschließende Schleife sofort — ein Notausstieg, falls die normale Bedingung nicht greift.',
        true,
        `**Ansatz:** \`break\` ist ein Sprungbefehl: wird er erreicht, springt der Kontrollfluss aus der INNERSTEN Schleife heraus, OHNE die Bedingung erneut zu testen.

**Rechnung:** Beispiel:
\`\`\`
while True:
    eingabe = input()
    if eingabe == 'q':
        break
    print(eingabe)
\`\`\`
Hier ist die while-Bedingung immer wahr — terminiert wird nur über \`break\`.

**Probe:** Bei verschachtelten Schleifen wirkt \`break\` nur auf die DIREKT umgebende Schleife — die äußere läuft weiter. Für Mehrfach-Ausstieg: Flag-Variable oder Funktion mit \`return\`.

**Typischer Fehler:** Annehmen, \`break\` bricht ALLE Schleifen ab — tut es nicht. Plus: \`continue\` mit \`break\` verwechseln (\`continue\` springt zum Anfang der nächsten Iteration, terminiert nicht).`,
        [
          'Was macht \`break\` mit dem Kontrollfluss?',
          'Wie viele Schleifen verlässt es?',
          'Innerste — sofort raus, ohne Bedingung zu prüfen.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['while-abbruch'] },
      ),
    ],
  },
}
