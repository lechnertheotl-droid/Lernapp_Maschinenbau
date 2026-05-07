// ═══════════════════════════════════════════════════════════════════════════
// Vektoren — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting, tag } from './_helpers'

export const vektorenSubGoalTasks = {
  // ───────────────────────────────────────────────────────────────────────
  // Lektion 1-0: Koordinaten, Punkte & Pfeile (Einstieg)
  // SG0: Punkt vs. Vektor · SG1: $\vec{AB}=B-A$ · SG2: Freier Vektor
  // ───────────────────────────────────────────────────────────────────────
  'vek-1-0': {
    // ===== Sub-Goal 0 — Punkt = Ort, Vektor = Verschiebung =====
    0: [
      tag(
        tf(
          'Der Punkt $P=(2,3)$ und der Vektor $\\vec{a}=(2,3)$ sind dasselbe mathematische Objekt — beide beschreiben einfach „2 nach rechts und 3 nach oben".',
          false,
          `**Ansatz:** Schreibweise $\\ne$ Bedeutung. Trenne „Wo liegt etwas?" (Punkt) von „Wie weit/wohin verschiebt sich etwas?" (Vektor).

**Rechnung:** $P=(2,3)$ ist ein **Ort** im Koordinatensystem — fixer Bezug zum Ursprung. $\\vec{a}=(2,3)$ ist eine **Verschiebung** — egal wo gestartet wird, es geht 2 nach rechts und 3 nach oben.

**Probe:** Verschieb $\\vec{a}$ vom Ursprung nach $(5,5)$ — der Pfeil bleibt derselbe Vektor. Verschieb den Punkt $P$ nach $(5,5)$ — er ist ein anderer Punkt.

**Typischer Fehler:** Gleiche Klammernotation $(x,y)$ als „dasselbe Objekt" deuten. Mathematisch sind beide Tupel — aber semantisch trennen wir strikt.`,
          [
            'Frage: Hat das Objekt einen festen Ort, oder beschreibt es nur eine Bewegung?',
            'Punkt $P$ liegt an einer Stelle. Vektor $\\vec{a}$ kann überall starten.',
            'Zwei Pfeile mit Komponenten $(2,3)$, an verschiedenen Stellen gezeichnet, sind derselbe Vektor — zwei Punkte $(2,3)$ und $(5,1)$ sind verschieden.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['punkt-vs-vektor'] },
      ),

      tag(
        mc(
          'Ein Bauteil hat eine **Masse** von $5\\,\\text{kg}$ und ist einer **Gewichtskraft** von $49\\,\\text{N senkrecht nach unten}$ ausgesetzt. Was sind Skalar bzw. Vektor?',
          [
            'Masse ist Skalar (nur Zahl), Gewichtskraft ist Vektor (Betrag $49\\,\\text{N}$ + Richtung „nach unten").',
            'Beide sind Vektoren — Masse zeigt nach unten zur Erde, Gewichtskraft auch.',
            'Beide sind Skalare — beide sind nur Zahlen mit Einheit.',
            'Masse ist Vektor (sie „zieht" nach unten), Gewichtskraft ist Skalar.',
          ],
          0,
          `**Ansatz:** Skalar = nur Betrag. Vektor = Betrag **und** Richtung. Frage: „Ergibt eine Richtungsangabe Sinn?"

**Rechnung:** Masse $m=5\\,\\text{kg}$ — eine Richtungsangabe wäre unsinnig, „Masse nach unten" gibt es nicht. → **Skalar**. Gewichtskraft $\\vec{F}_G$ wirkt auf der Erde immer **nach unten** (Richtung der Erdbeschleunigung) und hat Betrag $49\\,\\text{N}$ → **Vektor**.

**Probe:** Newton $\\vec{F}_G=m\\cdot\\vec{g}$ — links Vektor, rechts Skalar mal Vektor → Vektor. Stimmt.

**Typischer Fehler:** Masse mit Gewicht(skraft) verwechseln. Im Alltag sagt man „mein Gewicht ist $75\\,\\text{kg}$" — physikalisch ist das die **Masse**. Die **Gewichtskraft** wäre $75\\cdot 9{,}81 \\approx 736\\,\\text{N}$.`,
          [
            'Skalar oder Vektor? Frag: „Hat die Größe eine räumliche Richtung?"',
            'Masse ist überall gleich, egal wie das Bauteil orientiert ist. Die Gewichtskraft zeigt aber immer Richtung Erdmittelpunkt.',
            'Im SI-System: Masse in kg (Skalar), Kraft in Newton (Vektor).',
          ],
          {
            1: 'Masse hat keine Richtung — sie ist eine reine Stoffmenge in kg, unabhängig von Lage oder Orientierung. Nur die Gewichts**kraft** zeigt nach unten.',
            2: 'Die Gewichtskraft hat sehr wohl eine Richtung (nach unten zur Erde) — also Vektor, nicht Skalar.',
            3: 'Genau umgekehrt: Masse ist die richtungslose Stoffmenge (Skalar), die Gewichtskraft die nach unten zeigende Kraft (Vektor).',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['punkt-vs-vektor', 'skalar-vs-vektor'] },
      ),

      tag(
        mc(
          'In welchem Quadranten liegt der Punkt $P=(-4,\\,-2)$?',
          ['1. Quadrant', '2. Quadrant', '3. Quadrant', '4. Quadrant'],
          2,
          `**Ansatz:** Vorzeichen von $x$ und $y$ bestimmen den Quadranten — Zählung gegen den Uhrzeigersinn ab rechts oben.

**Rechnung:** $x=-4<0$ und $y=-2<0$ → links unten → **3. Quadrant**.

**Probe:** Q1: $(+,+)$ rechts oben · Q2: $(-,+)$ links oben · Q3: $(-,-)$ links unten · Q4: $(+,-)$ rechts unten. $P=(-4,-2)$ passt zu Q3.

**Typischer Fehler:** Im Uhrzeigersinn statt entgegen zählen — dann landet man auf Q4 statt Q3.`,
          [
            'Vorzeichen-Tabelle: Q1 $(+,+)$ · Q2 $(-,+)$ · Q3 $(-,-)$ · Q4 $(+,-)$.',
            'Welches Vorzeichen hat $x$? Welches $y$?',
            'Beide negativ → links unten → 3. Quadrant.',
          ],
          {
            0: '1. Quadrant wäre $x>0, y>0$ — beide Koordinaten positiv. $P=(-4,-2)$ hat beide negativ.',
            1: '2. Quadrant wäre $x<0, y>0$ — links oben. Hier ist aber auch $y<0$, also nicht Q2.',
            3: '4. Quadrant wäre $x>0, y<0$ — rechts unten. $P$ hat aber $x<0$, liegt also links.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['quadranten', 'koord-2d'] },
      ),

      tag(
        matching(
          'Ordne jede physikalische Größe der richtigen Kategorie (Skalar oder Vektor) zu.',
          [
            { left: 'Geschwindigkeit eines Autos in $\\text{km/h}$ nach Norden', right: 'Vektor (Betrag + Richtung)' },
            { left: 'Temperatur in einer Werkhalle', right: 'Skalar (nur Zahl)' },
            { left: 'Kraft auf einen Balken (Betrag + Wirkungslinie)', right: 'Vektor (mit Wirkungslinie)' },
            { left: 'Volumen eines Behälters', right: 'Skalar (Volumen ist Größe)' },
          ],
          `**Ansatz:** Pro Größe fragen: „Hat sie eine räumliche Richtung?"

**Rechnung:** Geschwindigkeit (km/h **nach Norden**) und Kraft (N entlang einer Wirkungslinie) haben Richtung → Vektoren. Temperatur und Volumen sind reine Zahlen — Richtung wäre unsinnig.

**Probe:** Im Maschinenbau klassisch: Kraft, Geschwindigkeit, Beschleunigung, Verschiebung, Drehmoment = Vektoren. Masse, Volumen, Temperatur, Zeit, Energie = Skalare.

**Typischer Fehler:** Die Einheit als Indikator verwenden. Ein Vektor kann auch eine Einheit haben (N, m/s). Entscheidend ist die Richtungs-Frage, nicht die Einheit.`,
          [
            'Frage pro Begriff: „Kann ich sinnvoll eine Himmelsrichtung dazudenken?"',
            'Wenn ja → Vektor. Wenn nein → Skalar.',
            'Achtung bei Energie: Kinetische Energie $E=\\tfrac{1}{2}mv^2$ ist Skalar, obwohl $v$ Vektor ist (Quadrat hebt Richtung auf).',
          ],
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['skalar-vs-vektor'] },
      ),

      tag(
        ni(
          'In welchem Quadrant liegt der Punkt $P=(7,\\,-3)$? Antworte mit der Quadrantennummer (1, 2, 3 oder 4).',
          4, 0, '',
          `**Ansatz:** Vorzeichenpaar $(x,y)$ → Quadrant ablesen.

**Rechnung:** $x=7>0$ und $y=-3<0$ → rechts unten → **4. Quadrant**.

**Probe:** Bei $y=-3$ liegt $P$ unterhalb der $x$-Achse. Bei $x=7$ rechts der $y$-Achse → Q4.

**Typischer Fehler:** Q4 mit Q2 verwechseln, weil beide ein negatives Vorzeichen tragen — aber Q2 hat $x<0$, Q4 hat $y<0$.`,
          [
            'Quadrantenzählung: gegen den Uhrzeigersinn ab rechts oben (Q1).',
            'Vorzeichenpaar: Q1 $(+,+)$, Q2 $(-,+)$, Q3 $(-,-)$, Q4 $(+,-)$.',
            'Hier: $x>0, y<0$ — welches Vorzeichenpaar passt?',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['quadranten', 'koord-2d'] },
      ),

      tag(
        tf(
          'Wenn man einen Vektor $\\vec{a}=(3,1)$ vom Punkt $A=(2,4)$ aus zeichnet, endet die Pfeilspitze im Punkt $B=(5,5)$.',
          true,
          `**Ansatz:** Anfangspunkt + Verschiebung = Endpunkt. Komponenten von $\\vec{a}$ werden zu den Koordinaten von $A$ addiert.

**Rechnung:** $B = A + \\vec{a} = (2+3,\\;4+1) = (5,5)$.

**Probe:** $\\vec{AB} = B - A = (5-2,\\;5-4) = (3,1) = \\vec{a}$. ✓

**Typischer Fehler:** Vektor und Punkt verwechseln und z. B. die Komponenten subtrahieren $((2-3,4-1)=(-1,3))$ — Subtraktion ist die Umkehr (vom Endpunkt zum Startpunkt).`,
          [
            'Endpunkt = Startpunkt + Vektor.',
            'Komponentenweise: $A_x + a_x$ und $A_y + a_y$.',
            'Probe per Rückrechnung: $B-A$ muss wieder $\\vec{a}$ ergeben.',
          ],
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['punkt-vs-vektor', 'vektor'] },
      ),
    ],

    // ===== Sub-Goal 1 — Verbindungsvektor $\vec{AB} = B - A$ =====
    1: [
      tag(
        tf(
          'Der Vektor von $A$ nach $B$ wird komponentenweise als $\\vec{AB} = B - A$ berechnet — also Endpunkt **minus** Startpunkt.',
          true,
          `**Ansatz:** „Wohin muss ich von $A$ aus gehen, um bei $B$ zu landen?" → genau die Komponentendifferenzen.

**Rechnung:** $\\vec{AB} = (B_x - A_x,\\;B_y - A_y,\\;B_z - A_z)$. Beispiel: $A=(1,2)$, $B=(4,6)$ → $\\vec{AB}=(3,4)$.

**Probe:** Geh von $A$ um $\\vec{AB}$ weiter: $A+\\vec{AB}=(1+3,2+4)=(4,6)=B$. ✓

**Typischer Fehler:** $A-B$ statt $B-A$ rechnen — dann zeigt der Vektor in die **falsche Richtung** (von $B$ nach $A$). Merksatz: „Endpunkt minus Startpunkt — Spitze minus Schaft."`,
          [
            'Eselsbrücke: „Spitze minus Schaft" — wo der Pfeil hinzeigt, minus wo er startet.',
            'Komponentenweise: jede Koordinate einzeln subtrahieren.',
            'Probe per Addition: $A + \\vec{AB} = B$ muss aufgehen.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        mc(
          'Gegeben sind $A=(2,5)$ und $B=(7,3)$. Wie lautet der Verbindungsvektor $\\vec{AB}$?',
          ['$(5,\\,-2)$', '$(-5,\\,2)$', '$(9,\\,8)$', '$(5,\\,2)$'],
          0,
          `**Ansatz:** Formel $\\vec{AB}=B-A$ komponentenweise anwenden.

**Rechnung:** $\\vec{AB} = (7-2,\\;3-5) = (5,\\,-2)$.

**Probe:** $A + \\vec{AB} = (2+5,\\;5+(-2)) = (7,3) = B$. ✓

**Typischer Fehler:** Vorzeichen der $y$-Komponente unterschlagen, weil $|3-5|=2$ optisch gleich aussieht — aber $3-5 = -2$, nicht $+2$.`,
          [
            '$\\vec{AB} = B - A$, jede Koordinate einzeln.',
            'Pass auf das Vorzeichen auf, wenn $A_y > B_y$.',
            'Probe: $A + \\vec{AB}$ muss $B$ ergeben.',
          ],
          {
            1: 'Du hast $A-B$ gerechnet (Startpunkt minus Endpunkt). Das gibt den **Gegenvektor** $\\vec{BA}$ — er zeigt von $B$ nach $A$.',
            2: 'Du hast addiert statt subtrahiert: $(2+7,5+3)$. Verbindungsvektor verlangt **Differenz**, nicht Summe.',
            3: 'Die $x$-Komponente $5$ ist richtig, aber das Vorzeichen der $y$-Komponente fehlt: $3-5=-2$, nicht $+2$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        ni(
          'Gegeben sind $A=(3,\\,-1)$ und $B=(8,\\,7)$ in 2D. Wie groß ist die $y$-Komponente des Verbindungsvektors $\\vec{AB}$?',
          8, 0, '',
          `**Ansatz:** $y$-Komponente von $\\vec{AB}$ ist $B_y - A_y$.

**Rechnung:** $B_y - A_y = 7 - (-1) = 7 + 1 = 8$.

**Probe:** $\\vec{AB} = (8-3,\\;7-(-1)) = (5,8)$. $A + (5,8) = (3+5,\\;-1+8) = (8,7) = B$. ✓

**Typischer Fehler:** Doppeltes Minuszeichen unterschlagen: $7 - (-1) = 6$ rechnen statt $8$. Oder die Reihenfolge $A_y - B_y = -1 - 7 = -8$ vertauschen.`,
          [
            '$y$-Komponente von $\\vec{AB} = B_y - A_y$ — Endpunkt minus Startpunkt.',
            '$A_y$ ist negativ. Doppeltes Minus wird Plus: $7-(-1)=7+1$.',
            'Auf jede Komponente einzeln anwenden, Vorzeichen mitnehmen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        mc(
          'Ein Student berechnet den Vektor von $A=(1,4)$ nach $B=(6,2)$ und schreibt $\\vec{AB} = A - B = (-5,\\,2)$. Welche Antwort ist korrekt — und was ist der Fehler?',
          [
            '$\\vec{AB} = (5,\\,-2)$ — der Student hat Endpunkt und Startpunkt vertauscht; $\\vec{AB}=B-A$, nicht $A-B$.',
            '$\\vec{AB} = (-5,\\,2)$ — die Rechnung des Studenten ist richtig, weil man immer Startpunkt minus Endpunkt nimmt.',
            '$\\vec{AB} = (7,\\,6)$ — man addiert die Komponenten.',
            '$\\vec{AB} = (5,\\,2)$ — man rechnet $|B_x-A_x|$ und $|B_y-A_y|$ (Beträge ohne Vorzeichen).',
          ],
          0,
          `**Ansatz:** Konvention: $\\vec{AB}$ zeigt **von $A$ nach $B$**. Definition: $\\vec{AB} = B - A$ (Spitze minus Schaft).

**Rechnung:** $\\vec{AB} = B - A = (6-1,\\;2-4) = (5,\\,-2)$. Der Student rechnete $A-B = (1-6,\\;4-2) = (-5,\\,2)$ — das ist der **Gegenvektor** $\\vec{BA}$, nicht $\\vec{AB}$.

**Probe:** $A + \\vec{AB} = (1+5,\\;4-2) = (6,\\,2) = B$. ✓ Und $A + (-5,2) = (-4,\\,6) \\ne B$.

**Typischer Fehler:** Vorzeichen-Tausch durch falsche Subtraktionsreihenfolge — der Vektor zeigt dann **rückwärts** und alle weiteren Rechnungen kippen.`,
          [
            'Schreib $\\vec{AB}$ und frag: „Wo zeigt der Pfeil hin?" — zur Spitze $B$.',
            'Definition: Endpunkt minus Startpunkt, nicht andersrum.',
            'Probe: $A + \\vec{AB}$ muss $B$ ergeben — wenn $\\ne B$, hast du falsch herum subtrahiert.',
          ],
          {
            1: 'Genau das ist der Fehler: $A-B$ ergibt $\\vec{BA}$ (Gegenvektor, falsche Richtung). Korrekt ist $\\vec{AB} = B-A = (5,-2)$.',
            2: 'Addition gibt nicht die Verschiebung von $A$ nach $B$, sondern den Ortsvektor zum Mittelpunkt-Doppelten o. Ä. Verbindungsvektor verlangt **Differenz**.',
            3: 'Beträge zu nehmen unterdrückt die Richtung — der Verbindungsvektor hat aber Vorzeichen, die anzeigen, ob es nach links/rechts oder oben/unten geht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        ni(
          'Gegeben sind die 3D-Punkte $A=(-3,\\,5,\\,2)$ und $B=(4,\\,-1,\\,8)$. Wie groß ist die $y$-Komponente des Verbindungsvektors $\\vec{AB}$?',
          -6, 0, '',
          `**Ansatz:** Auch in 3D gilt $\\vec{AB}=B-A$ — komponentenweise, also auch für die $y$-Komponente.

**Rechnung:** $(\\vec{AB})_y = B_y - A_y = -1 - 5 = -6$.

**Probe:** Vollständig: $\\vec{AB} = (4-(-3),\\;-1-5,\\;8-2) = (7,\\,-6,\\,6)$. $A + \\vec{AB} = (-3+7,\\;5+(-6),\\;2+6) = (4,-1,8) = B$. ✓

**Typischer Fehler:** $A_y - B_y = 5 - (-1) = 6$ statt $-6$ (Reihenfolge vertauscht). Oder die Vorzeichen der negativen Komponenten in der Rechnung „verschlucken".`,
          [
            'Die Formel $\\vec{AB} = B - A$ ist dimensionsunabhängig — gilt in 2D, 3D oder höher.',
            'Auf jede Achse einzeln: $x$-Komponenten subtrahieren, dann $y$, dann $z$.',
            'Bei „Endpunkt minus Startpunkt" — und $B_y$ ist negativ, also $-1-5$ rechnen.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        ni(
          'Eine Drohne fliegt vom Startpunkt $A=(2,\\,-4)$ zum Punkt $B=(-3,\\,1)$. Wie groß ist die $x$-Komponente des Flugvektors $\\vec{AB}$? (Negative Antwort möglich.)',
          -5, 0, '',
          `**Ansatz:** Flugvektor = Verbindungsvektor von Start zu Ziel: $\\vec{AB}=B-A$.

**Rechnung:** $(\\vec{AB})_x = B_x - A_x = -3 - 2 = -5$.

**Probe:** Vollständig: $\\vec{AB} = (-3-2,\\;1-(-4)) = (-5,\\,5)$. Negative $x$-Komponente bedeutet: die Drohne fliegt nach **links** (in $-x$-Richtung) — passt, denn $B_x=-3<A_x=2$.

**Typischer Fehler:** Beträge statt Differenzen rechnen ($|B_x-A_x|=5$) — dann verliert man die Information, dass der Flug nach links geht.`,
          [
            'Flugrichtung: Ziel minus Start.',
            '$x$-Komponente isoliert: $B_x - A_x$.',
            'Vorzeichen mitnehmen — eine negative Komponente sagt: Bewegung in die negative Achsenrichtung.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['ab-formel'] },
      ),
    ],

    // ===== Sub-Goal 2 — Freier Vektor =====
    2: [
      tag(
        tf(
          'Zwei Pfeile mit gleicher Länge und gleicher Richtung, an verschiedenen Stellen der Ebene gezeichnet, stellen denselben Vektor dar.',
          true,
          `**Ansatz:** Ein Vektor ist nur durch **Betrag** und **Richtung** definiert — der Startpunkt ist egal.

**Rechnung:** Zeichne $\\vec{a}=(3,2)$ einmal vom Ursprung $(0,0)$ zu $(3,2)$ und einmal von $(5,1)$ zu $(8,3)$. Beide Pfeile haben Komponenten $(3,2)$, also denselben Vektor.

**Probe:** Komponenten testen — $\\vec{AB}=B-A=(3-0,2-0)=(3,2)$ und $\\vec{CD}=D-C=(8-5,3-1)=(3,2)$. Identisch ✓.

**Typischer Fehler:** Vektor wie einen Punkt auf den Anfang fixieren. Vektoren sind „frei" — nur Betrag und Richtung zählen.`,
          [
            'Was definiert einen Vektor? Betrag und Richtung — nicht der Startpunkt.',
            'Wenn die Komponenten gleich sind, sind die Vektoren gleich.',
            'Anschaulich: Pfeile parallel, gleich lang, in gleiche Richtung → identischer Vektor.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['vektor-frei'] },
      ),

      tag(
        mc(
          'Der Pfeil von $A=(1,2)$ nach $B=(5,4)$ stellt den Vektor $\\vec{a}$ dar. An welchem anderen Punktpaar $(C,D)$ ist genau **derselbe** Vektor $\\vec{a}$ eingezeichnet?',
          [
            '$C=(2,3)$, $D=(6,5)$',
            '$C=(0,0)$, $D=(2,4)$',
            '$C=(3,1)$, $D=(7,1)$',
            '$C=(5,4)$, $D=(1,2)$',
          ],
          0,
          `**Ansatz:** Komponenten von $\\vec{a}$ bestimmen, dann jedes Punktpaar prüfen — derselbe freie Vektor liegt vor, wenn $\\vec{CD}=D-C$ komponentenweise gleich $\\vec{a}$ ist.

**Rechnung:** $\\vec{a}=\\vec{AB}=(5-1,\\;4-2)=(4,\\,2)$. Prüfe Optionen:
- $C=(2,3), D=(6,5)$: $\\vec{CD}=(6-2,\\;5-3)=(4,2)$ ✓
- $C=(0,0), D=(2,4)$: $\\vec{CD}=(2,4)$ — $x$ und $y$ vertauscht.
- $C=(3,1), D=(7,1)$: $\\vec{CD}=(4,0)$ — $y$-Komponente fehlt.
- $C=(5,4), D=(1,2)$: $\\vec{CD}=(-4,-2)=-\\vec{a}$ — Gegenvektor.

**Probe:** Pfeil von $(2,3)$ um $(4,2)$ verschoben endet bei $(6,5)$ — deckt sich mit $D$. ✓

**Typischer Fehler:** Augenmaß statt Komponentenrechnung — der Pfeil $C\\to D$ bei Option 4 zeigt zwar in *eine* parallele Richtung, aber **antiparallel** (Gegenvektor) — er ist nicht derselbe Vektor.`,
          [
            'Berechne zuerst $\\vec{a}=B-A$ aus den Originalpunkten.',
            'Dann für jedes Paar $(C,D)$: $\\vec{CD}=D-C$ ausrechnen und mit $\\vec{a}$ vergleichen.',
            'Vorzeichen mitnehmen — antiparallele Pfeile sind nicht derselbe Vektor.',
          ],
          {
            1: '$x$- und $y$-Komponente sind vertauscht: $\\vec{CD}=(2,4)$ statt $(4,2)$. Für „derselbe Vektor" müssen die Komponenten in der gleichen Reihenfolge übereinstimmen.',
            2: '$\\vec{CD}=(4,0)$ — Richtung wäre nur waagrecht, $\\vec{a}$ steigt aber $2$ nach oben. Unterschiedliche Richtung → nicht derselbe Vektor.',
            3: '$\\vec{CD}=(-4,-2)=-\\vec{a}$ — der Pfeil zeigt in die **entgegengesetzte** Richtung. Das ist der Gegenvektor, nicht derselbe Vektor.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['vektor-frei', 'ab-formel'] },
      ),

      tag(
        mc(
          'Welche Eigenschaft ist die einzige, die zwei freie Vektoren als „gleich" charakterisiert?',
          [
            'Gleicher Betrag und gleiche Richtung — Startpunkt egal.',
            'Gleicher Startpunkt und gleicher Endpunkt.',
            'Gleicher Betrag — Richtung egal, solange parallel.',
            'Gleiche Richtung — Betrag egal, solange beide nicht null.',
          ],
          0,
          `**Ansatz:** Definition des freien Vektors: nur **Betrag** und **Richtung** zählen.

**Rechnung:** Zwei freie Vektoren $\\vec{a}$ und $\\vec{b}$ sind gleich, wenn $|\\vec{a}|=|\\vec{b}|$ **und** beide in dieselbe Richtung zeigen — egal, wo sie eingezeichnet werden.

**Probe:** Komponentenweise: $\\vec{a}=\\vec{b}\\iff a_x=b_x \\land a_y=b_y$. Das ist äquivalent zu „gleicher Betrag und gleiche Richtung".

**Typischer Fehler:** Startpunkt als Definitionsmerkmal annehmen. Das gilt für gebundene Vektoren (z. B. Ortsvektor an festen Bezugspunkt), aber nicht für den freien Vektor in der Schulgeometrie.`,
          [
            'Was definiert einen Vektor? Pfeil-Eigenschaften — Länge und Richtung.',
            'Antiparallele Pfeile (gleicher Betrag, entgegengesetzte Richtung) sind nicht gleich, sondern Gegenvektoren.',
            'Komponenten-Test: $\\vec{a}=\\vec{b}\\iff$ alle Komponenten gleich.',
          ],
          {
            1: 'Das wäre ein **gebundener** Vektor mit festem Anfangs- und Endpunkt — aber freie Vektoren sind verschiebbar.',
            2: 'Antiparallele Vektoren (z. B. $(3,4)$ und $(-3,-4)$) haben gleichen Betrag aber entgegengesetzte Richtung — sie sind nicht gleich.',
            3: 'Ein Vektor der Länge $1$ und einer der Länge $5$ in derselben Richtung sind nicht gleich — Betrag muss übereinstimmen.',
          },
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['vektor-frei'] },
      ),

      tag(
        mc(
          'Ein Schüler sagt: „Wenn ich den Vektor $\\vec{a}=(2,3)$ vom Punkt $A=(1,1)$ aus an einer anderen Stelle zeichne, z. B. ab $A\'=(5,5)$, dann habe ich den Vektor verschoben — der neue Pfeil hat dadurch die Komponenten $(7,8)$." Was sagt die Aussage falsch?',
          [
            'Beim Verschieben des Pfeils ändern sich die Komponenten nicht — er bleibt $\\vec{a}=(2,3)$. Verändert hätten sich die Komponenten nur, wenn er den Endpunkt ($A+\\vec{a})=(7,8)$ mit dem Vektor verwechselt.',
            'Das stimmt — der Vektor wird durch Verschieben skaliert, daher $(7,8)$.',
            'Der Vektor ändert sich nur in der Richtung, nicht im Betrag.',
            'Beim Verschieben werden die Komponenten halbiert.',
          ],
          0,
          `**Ansatz:** Freier Vektor — Verschieben ändert **nichts** an den Komponenten. Der Schüler hat den Endpunkt $A'+\\vec{a}=(5+2,5+3)=(7,8)$ mit dem Vektor verwechselt.

**Rechnung:** Egal von welchem Punkt aus gezeichnet — der Vektor $\\vec{a}=(2,3)$ hat immer die Komponenten $(2,3)$. Was sich ändert: der **Endpunkt** des Pfeils. Vom Punkt $A'=(5,5)$ aus liegt die Pfeilspitze bei $(7,8)$, aber der Vektor selbst bleibt $(2,3)$.

**Probe:** $\\vec{A'B'} = B'-A' = (7-5,\\;8-5) = (2,3) = \\vec{a}$. ✓

**Typischer Fehler:** Punkt $\\leftrightarrow$ Vektor verwechseln. Komponenten von Punkten ändern sich beim Verschieben (klar — andere Lage), Komponenten von Vektoren nicht (sie sind frei).`,
          [
            'Frag: Was sind die Komponenten eines Vektors? Differenz Endpunkt-Startpunkt.',
            'Wenn ich Start und Ende **gemeinsam** verschiebe, bleibt die Differenz gleich.',
            'Der Schüler verwechselt den Vektor mit dem **Ortsvektor zum Endpunkt** $(7,8)$.',
          ],
          {
            1: 'Skalierung verändert den Betrag, aber Verschieben ist keine Skalierung — der Vektor ist invariant unter Verschiebung.',
            2: 'Beim Verschieben ändert sich weder Betrag noch Richtung — der Vektor bleibt komplett unverändert.',
            3: 'Halbierung wäre eine Skalarmultiplikation mit $\\tfrac{1}{2}$ — aber Verschieben skaliert nicht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['vektor-frei', 'punkt-vs-vektor'] },
      ),

      tag(
        sorting(
          'Du sollst überprüfen, ob die beiden eingezeichneten Pfeile (von $A$ nach $B$ und von $C$ nach $D$) denselben Vektor darstellen. Bringe die Schritte in die richtige Reihenfolge.',
          [
            'Berechne $\\vec{AB} = B - A$ komponentenweise.',
            'Berechne $\\vec{CD} = D - C$ komponentenweise.',
            'Vergleiche die Komponenten von $\\vec{AB}$ und $\\vec{CD}$.',
            'Stimmen alle Komponenten überein, sind die Pfeile derselbe Vektor.',
          ],
          [0, 1, 2, 3],
          `**Ansatz:** Freier-Vektor-Test über Komponenten — beide Pfeile in Komponentenform bringen, dann vergleichen.

**Rechnung:** Schritt 1: $\\vec{AB}$ ausrechnen. Schritt 2: $\\vec{CD}$ ausrechnen. Schritt 3: komponentenweise gegenüberstellen. Schritt 4: Schlussfolgerung — alle gleich → identischer Vektor; sonst nicht.

**Probe:** Beispiel $A=(1,1), B=(4,3), C=(0,2), D=(3,4)$ → $\\vec{AB}=(3,2)$, $\\vec{CD}=(3,2)$. Übereinstimmung → derselbe Vektor.

**Typischer Fehler:** Sofort optisch entscheiden („sieht parallel aus") ohne Komponenten zu rechnen — bei kleinen Abweichungen täuscht das Auge. Oder $\\vec{AB}$ und $\\vec{CD}$ vergleichen, **bevor** man beide ausgerechnet hat.`,
          [
            'Wir brauchen für jeden Pfeil seine Komponentenform.',
            'Erst beide Vektoren bestimmen, dann vergleichen — nicht parallel.',
            'Logischer Ablauf: zwei separate Rechnungen → ein Vergleich → ein Urteil.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['vektor-frei', 'ab-formel'] },
      ),

      tag(
        tf(
          'Zwei Pfeile mit gleichem Betrag, aber entgegengesetzten Richtungen (z. B. $\\vec{a}=(3,2)$ und $\\vec{b}=(-3,-2)$) stellen denselben freien Vektor dar.',
          false,
          `**Ansatz:** Gleichheit freier Vektoren verlangt **Betrag UND Richtung**. „Entgegengesetzt" verletzt die Richtung.

**Rechnung:** $|\\vec{a}|=\\sqrt{9+4}=\\sqrt{13}=|\\vec{b}|$ — Beträge gleich. Aber $\\vec{b}=-\\vec{a}$ — die Richtungen sind genau umgekehrt. Komponentenweise: $a_x=3 \\ne b_x=-3$. Also **nicht** derselbe Vektor.

**Probe:** Antiparallele Vektoren mit gleichem Betrag heißen **Gegenvektoren** ($\\vec{b}=-\\vec{a}$), nicht gleiche Vektoren.

**Typischer Fehler:** Glauben, „parallele" Vektoren wären immer gleich — dabei kann „parallel" auch antiparallel bedeuten (z. B. zwei Kräfte, die sich genau gegenseitig aufheben).`,
          [
            'Frag: Sind die Komponenten paarweise identisch?',
            'Negatives Vorzeichen bedeutet Richtungsumkehr.',
            '$\\vec{a}$ und $-\\vec{a}$ sind Gegenvektoren — gleicher Betrag, **entgegengesetzte** Richtung, nicht derselbe Vektor.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['vektor-frei'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // Lektion 1-1: Vektoren — Grundbegriffe
  // SG0: Komponenten + Betrag · SG1: Add/Sub/Skalarmul · SG2: Einheitsvektor · SG3: Tech-Größen
  // ───────────────────────────────────────────────────────────────────────
  'vek-1-1': {
    // ===== Sub-Goal 0 — Komponentenform & Betrag =====
    0: [
      tag(
        tf(
          'Der Betrag eines 3D-Vektors $\\vec{v}=(v_x,v_y,v_z)$ ist $|v_x|+|v_y|+|v_z|$ — also einfach die Summe der Beträge der Komponenten.',
          false,
          `**Ansatz:** Betrag = Länge des Pfeils. Pythagoras gilt im Raum, nicht Komponenten-Summe.

**Rechnung:** Korrekt ist $|\\vec{v}|=\\sqrt{v_x^2+v_y^2+v_z^2}$. Beispiel $\\vec{v}=(2,3,6)$: $|\\vec{v}|=\\sqrt{4+9+36}=\\sqrt{49}=7$. Falsche Formel würde $|2|+|3|+|6|=11$ liefern — ein anderer Wert.

**Probe:** Für $(3,4)$ in 2D: Pythagoras $\\sqrt{9+16}=5$ vs. Komponenten-Summe $7$ — beide unterschiedlich, also kann nur die Wurzel-Formel stimmen (3-4-5-Dreieck).

**Typischer Fehler:** „Manhattan-Norm" mit „euklidischer Norm" verwechseln — Manhattan summiert Beträge, Euklid macht Pythagoras. In der Schulgeometrie ist „Betrag" immer die euklidische Länge.`,
          [
            'Betrag eines Vektors = Länge des Pfeils — nicht Summe der Komponenten.',
            'Im 2D liefert die Komponenten-Summe für $(3,4)$ den Wert $7$, der Pythagoras aber $5$. Welche Antwort ist die Pfeillänge?',
            'Korrekt: $|\\vec{v}|=\\sqrt{v_x^2+v_y^2+v_z^2}$ — quadrieren, summieren, Wurzel ziehen.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['betrag'] },
      ),

      tag(
        ni(
          'Berechne den Betrag des Vektors $\\vec{a}=(6,\\,8)$.',
          10, 0, '',
          `**Ansatz:** Pythagoras: $|\\vec{a}|=\\sqrt{a_x^2+a_y^2}$.

**Rechnung:** $|\\vec{a}|=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$.

**Probe:** $6$-$8$-$10$ ist das verdoppelte $3$-$4$-$5$-Tripel — sauberes pythagoreisches Tripel. ✓

**Typischer Fehler:** $6+8=14$ rechnen (Komponenten addiert ohne Wurzel) oder $\\sqrt{6+8}=\\sqrt{14}$ (zu früh gewurzelt — erst quadrieren, dann summieren, dann Wurzel).`,
          [
            'Längenformel via Pythagoras: $\\sqrt{a_x^2+a_y^2}$.',
            'Reihenfolge: erst quadrieren, dann addieren, dann Wurzel ziehen.',
            'Erkenn das pythagoreische Tripel — $6$-$8$-?',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['betrag'] },
      ),

      tag(
        mc(
          'Ein Schüler rechnet den Betrag von $\\vec{a}=(5,\\,12)$ als $|\\vec{a}|=5+12=17$. Welche Antwort ist korrekt — und was ist der Fehler?',
          [
            '$|\\vec{a}|=13$ — der Schüler hat die Wurzel und das Quadrieren übersprungen; richtig ist $\\sqrt{25+144}=\\sqrt{169}=13$.',
            '$|\\vec{a}|=17$ — die Rechnung des Schülers ist richtig, weil man die Komponenten einfach summiert.',
            '$|\\vec{a}|=\\sqrt{17}$ — man muss die Wurzel aus der Komponenten-Summe ziehen.',
            '$|\\vec{a}|=169$ — man quadriert und summiert, ohne die Wurzel zu ziehen.',
          ],
          0,
          `**Ansatz:** Korrekte Formel: $|\\vec{a}|=\\sqrt{a_x^2+a_y^2}$. Reihenfolge: quadrieren, summieren, Wurzel.

**Rechnung:** $|\\vec{a}|=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$. Der Schüler hat sowohl das Quadrieren als auch die Wurzel übersprungen und einfach $5+12$ gerechnet.

**Probe:** $5$-$12$-$13$ ist ein klassisches pythagoreisches Tripel ($25+144=169$). ✓

**Typischer Fehler:** Linearität annehmen — $|\\vec{a}+\\vec{b}|\\ne|\\vec{a}|+|\\vec{b}|$. Pythagoras ist nichtlinear: das rechtwinklige Dreieck mit Katheten $5$ und $12$ hat Hypotenuse $13$, nicht $17$.`,
          [
            'Welche Operationen verlangt die Betragsformel?',
            'Drei Schritte: quadrieren — summieren — Wurzel ziehen. In dieser Reihenfolge.',
            'Pythagoreische Tripel: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$ — diese Werte zu kennen, beschleunigt das Rechnen.',
          ],
          {
            1: 'Genau das ist der Fehler: Komponenten direkt zu addieren ist die „Manhattan-Distanz", nicht die euklidische Länge. Mit Pythagoras kommt $13$ heraus.',
            2: '$\\sqrt{17}\\approx 4{,}12$ — ein viel zu kleiner Wert für einen Vektor mit Komponente $12$. Erst **quadrieren**, dann summieren, dann Wurzel.',
            3: '$169$ ist $|\\vec{a}|^2$ (Summe der Quadrate). Die letzte Operation — die Wurzel — wurde vergessen.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['betrag'] },
      ),

      tag(
        ni(
          'Berechne den Betrag des 3D-Vektors $\\vec{v}=(-2,\\,3,\\,-6)$.',
          7, 0, '',
          `**Ansatz:** Pythagoras im Raum: $|\\vec{v}|=\\sqrt{v_x^2+v_y^2+v_z^2}$. Vorzeichen verschwinden durch das Quadrieren.

**Rechnung:** $|\\vec{v}|=\\sqrt{(-2)^2+3^2+(-6)^2}=\\sqrt{4+9+36}=\\sqrt{49}=7$.

**Probe:** Negative Komponenten ändern den Betrag nicht — nur die Richtung. $|(-2,3,-6)|=|(2,3,6)|=7$. ✓

**Typischer Fehler:** Vorzeichen mit ins Quadrat schleppen ($-2^2=-4$ statt $(-2)^2=4$) — beim Quadrieren werden alle Vorzeichen positiv. Oder die $z$-Komponente vergessen, wenn man unbewusst in 2D rechnet ($\\sqrt{4+9}=\\sqrt{13}$ statt $\\sqrt{49}$).`,
          [
            'Auch in 3D: quadrieren — summieren — Wurzel ziehen.',
            'Negative Komponenten quadrieren zu positiven Werten — sie zählen voll mit.',
            'Hier: $4+9+36=49$, also $\\sqrt{49}=7$.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['betrag'] },
      ),

      tag(
        ni(
          'Berechne den Betrag von $\\vec{a}=(0,\\,-7)$.',
          7, 0, '',
          `**Ansatz:** Bei einer Null-Komponente reduziert sich Pythagoras auf den Betrag der anderen Komponente.

**Rechnung:** $|\\vec{a}|=\\sqrt{0^2+(-7)^2}=\\sqrt{0+49}=\\sqrt{49}=7$.

**Probe:** Anschaulich: $(0,-7)$ ist ein Pfeil, der gerade nach unten zeigt — Länge $7$, unabhängig vom Vorzeichen. ✓

**Typischer Fehler:** Vorzeichen direkt übernehmen und $-7$ als Antwort schreiben — der Betrag ist immer $\\geq 0$ (Längen sind nie negativ).`,
          [
            'Betrag ist die Länge — Längen sind nie negativ.',
            'Vorzeichen verschwindet durch das Quadrat: $(-7)^2=49$.',
            'Bei $0$-Komponenten: Pythagoras vereinfacht sich, das Ergebnis ist der Betrag der nicht-null Komponente.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['betrag'] },
      ),
    ],

    // ===== Sub-Goal 1 — Addition / Subtraktion / Skalarmultiplikation =====
    1: [
      tag(
        tf(
          'Für beliebige Vektoren $\\vec{a}$ und $\\vec{b}$ gilt $\\vec{a}+\\vec{b}=\\vec{b}+\\vec{a}$ — die Reihenfolge bei der Vektoraddition spielt keine Rolle.',
          true,
          `**Ansatz:** Vektoraddition ist komponentenweise — und Zahlen addieren ist kommutativ.

**Rechnung:** $\\vec{a}+\\vec{b}=(a_x+b_x,\\;a_y+b_y)$ und $\\vec{b}+\\vec{a}=(b_x+a_x,\\;b_y+a_y)$. Da $a_x+b_x=b_x+a_x$ usw. (Kommutativgesetz für Zahlen), gilt $\\vec{a}+\\vec{b}=\\vec{b}+\\vec{a}$.

**Probe:** $\\vec{a}=(2,3),\\,\\vec{b}=(1,-1)$: $\\vec{a}+\\vec{b}=(3,2)$, $\\vec{b}+\\vec{a}=(3,2)$. Identisch. ✓ Geometrisch: Parallelogramm — beide Pfeile spannen dieselbe Diagonale auf, egal in welcher Reihenfolge man sie aneinanderhängt.

**Typischer Fehler:** Mit dem **Kreuzprodukt** verwechseln — dort ist $\\vec a\\times\\vec b\\ne\\vec b\\times\\vec a$ (antikommutativ). Aber für Addition gilt das Kommutativgesetz.`,
          [
            'Vektoraddition arbeitet komponentenweise — also auf Zahlen.',
            'Zahlenaddition ist kommutativ: $a+b=b+a$.',
            'Das überträgt sich auf jede einzelne Komponente.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['add-komp', 'vra-axiome'] },
      ),

      tag(
        ni(
          'Gegeben: $\\vec{a}=(1,\\,2)$ und $\\vec{b}=(3,\\,-1)$. Berechne die $x$-Komponente des Vektors $2\\vec{a}+3\\vec{b}$.',
          11, 0, '',
          `**Ansatz:** Erst Skalarmultiplikation komponentenweise, dann Addition komponentenweise.

**Rechnung:** $2\\vec{a}=(2,4)$, $3\\vec{b}=(9,-3)$. Summe: $2\\vec{a}+3\\vec{b}=(2+9,\\;4-3)=(11,\\,1)$. $x$-Komponente: $\\mathbf{11}$.

**Probe:** Kurzweg auf $x$-Komponente: $2\\cdot a_x+3\\cdot b_x=2\\cdot 1+3\\cdot 3=2+9=11$. ✓

**Typischer Fehler:** Skalar nur auf eine Komponente anwenden ($2\\cdot 1+3=5$) — die Skalarmultiplikation muss **alle** Komponenten treffen. Oder Reihenfolge der Operationen falsch (zuerst addieren, dann skalieren) und mit Distributivgesetz kämpfen.`,
          [
            'Reihenfolge: erst $k\\vec{a}$ und $k\\vec{b}$ einzeln ausrechnen, dann addieren.',
            'Pro Komponente: $2 a_x + 3 b_x$.',
            'Hier $x$-Komponente: $2\\cdot 1 + 3\\cdot 3$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['add-komp', 'skalar-mul'] },
      ),

      tag(
        mc(
          'Ein Student rechnet $\\vec{a}-\\vec{b}$ mit $\\vec{a}=(5,\\,2)$ und $\\vec{b}=(3,\\,-4)$ als $(5-3,\\;2-4)=(2,\\,-2)$. Welche Antwort ist korrekt — und was ist der Fehler?',
          [
            '$(2,\\,6)$ — der Student hat das Vorzeichen von $b_y=-4$ ignoriert; richtig ist $2-(-4)=2+4=6$.',
            '$(2,\\,-2)$ — die Rechnung des Studenten ist korrekt.',
            '$(8,\\,-2)$ — Subtraktion entspricht komponentenweiser Addition mit gleichem Vorzeichen.',
            '$(-2,\\,2)$ — bei der Subtraktion zieht man immer den ersten vom zweiten ab.',
          ],
          0,
          `**Ansatz:** $\\vec{a}-\\vec{b}=\\vec{a}+(-\\vec{b})$ — also komponentenweise $a_i-b_i$. Negative Komponenten erfordern doppeltes Vorzeichen.

**Rechnung:** $\\vec{a}-\\vec{b}=(5-3,\\;2-(-4))=(2,\\;2+4)=(2,\\,6)$. Der Student hat $2-4$ statt $2-(-4)$ gerechnet — ein Vorzeichen verschluckt.

**Probe:** $\\vec{b}+(\\vec{a}-\\vec{b})$ muss $\\vec{a}$ ergeben: $(3,-4)+(2,6)=(5,2)=\\vec{a}$. ✓ Mit dem fehlerhaften $(2,-2)$ wäre $(3,-4)+(2,-2)=(5,-6)\\ne(5,2)$.

**Typischer Fehler:** Doppeltes Minus als einfaches Minus interpretieren — bei $a_y - b_y = 2 - (-4)$ wird $-(-4)=+4$, also $2+4=6$. Klammerung beibehalten ist Pflicht.`,
          [
            'Subtraktion: $\\vec{a}-\\vec{b}=(a_x-b_x,\\;a_y-b_y)$.',
            'Wenn $b_y$ negativ ist, wird das Minus zum Plus: $a_y-(-b)=a_y+b$.',
            'Probe per Rückrechnung: $\\vec{b}+(\\vec{a}-\\vec{b})$ muss $\\vec{a}$ sein.',
          ],
          {
            1: 'Genau das ist der Fehler: $2-(-4)$ ist $2+4=6$, nicht $2-4=-2$. Das doppelte Minus muss beachtet werden.',
            2: 'Subtraktion ist **nicht** Addition — die Vorzeichen werden umgekehrt: $\\vec{a}-\\vec{b}=\\vec{a}+(-\\vec{b})$. Dann erst addieren.',
            3: 'Reihenfolge: $\\vec{a}-\\vec{b}$ bedeutet $a-b$ pro Komponente, nicht $b-a$. Das Ergebnis $(-2,2)$ wäre $\\vec{b}-\\vec{a}$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['add-komp', 'sub-komp'] },
      ),

      tag(
        matching(
          'Ordne jeder Vektor-Operation die korrekte geometrische Beschreibung zu.',
          [
            { left: '$2\\vec{a}$ (Skalarmultiplikation mit $k=2$)', right: 'Pfeil doppelt so lang, gleiche Richtung' },
            { left: '$-\\vec{a}$ (Skalarmultiplikation mit $k=-1$)', right: 'Pfeil gleiche Länge, entgegengesetzte Richtung' },
            { left: '$\\vec{a}+\\vec{b}$ (Vektoraddition)', right: 'Pfeile aneinanderhängen, Resultierende vom Start zur Spitze' },
            { left: '$\\vec{a}-\\vec{b}$ (Vektorsubtraktion)', right: 'Addition von $\\vec{a}$ und Gegenvektor von $\\vec{b}$' },
          ],
          `**Ansatz:** Jede Operation hat eine algebraische und eine geometrische Form — geometrisch sind die Auswirkungen am klarsten.

**Rechnung:** Skalarmul mit $k>1$ verlängert (Faktor $|k|$), $k<0$ kehrt zusätzlich die Richtung um, $k=0$ ergibt den Nullvektor. Addition: zwei Pfeile aneinanderhängen, Resultierende = Diagonale eines Parallelogramms. Subtraktion: $\\vec{a}+(-\\vec{b})$ — also den Gegenvektor von $\\vec{b}$ an $\\vec{a}$ anhängen.

**Probe:** Konkret mit $\\vec{a}=(3,1)$: $2\\vec{a}=(6,2)$ doppelt so lang ✓. $-\\vec{a}=(-3,-1)$ Gegenrichtung ✓. Mit $\\vec{b}=(1,2)$: $\\vec{a}+\\vec{b}=(4,3)$ Diagonale ✓.

**Typischer Fehler:** Skalarmul mit Vektoraddition verwechseln (Addition verändert Richtung **und** Länge, Skalarmul nur die Länge bzw. das Vorzeichen). Oder bei $k<0$ vergessen, dass auch die **Richtung** kippt.`,
          [
            'Algebraisch zuerst: Was passiert komponentenweise?',
            'Geometrisch: Skalar streckt/spiegelt, Addition fügt Pfeile zusammen.',
            'Subtraktion = Addition mit Gegenvektor — das löst das Vorzeichen-Problem.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['add-komp', 'add-geo', 'skalar-mul'] },
      ),

      tag(
        ni(
          'Berechne die $y$-Komponente des Vektors $\\vec{c}=4\\vec{a}-2\\vec{b}$ mit $\\vec{a}=(2,\\,-3)$ und $\\vec{b}=(1,\\,5)$.',
          -22, 0, '',
          `**Ansatz:** Linearkombination: erst skalieren, dann subtrahieren — komponentenweise nur auf $y$.

**Rechnung:** $(\\vec{c})_y = 4\\cdot a_y - 2\\cdot b_y = 4\\cdot(-3) - 2\\cdot 5 = -12 - 10 = -22$.

**Probe:** Volle Rechnung: $4\\vec{a}=(8,-12)$, $2\\vec{b}=(2,10)$, $\\vec{c}=4\\vec{a}-2\\vec{b}=(8-2,\\;-12-10)=(6,-22)$. $y$-Komponente $-22$. ✓

**Typischer Fehler:** Vorzeichen verlieren — $-12-10$ statt $-22$ als $-2$ rechnen (Plus statt Minus eingesetzt). Oder Skalar nur auf $\\vec{a}$, nicht auf $\\vec{b}$ anwenden.`,
          [
            'Linearkombinationen: skalieren — dann verknüpfen.',
            'Pro Komponente: $4 a_y - 2 b_y$.',
            'Vorzeichen mitnehmen: $a_y$ ist negativ, also $4\\cdot(-3)=-12$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['add-komp', 'sub-komp', 'skalar-mul'] },
      ),
    ],

    // ===== Sub-Goal 2 — Einheitsvektor =====
    2: [
      tag(
        tf(
          'Ein Einheitsvektor hat per Definition immer Länge $1$ — unabhängig vom Vektor, aus dem er gebildet wird.',
          true,
          `**Ansatz:** Definition des Einheitsvektors: Länge gleich $1$, Richtung wie der Ursprungs-Vektor.

**Rechnung:** Einheitsvektor zu $\\vec{v}\\ne\\vec{0}$: $\\hat{e}=\\vec{v}/|\\vec{v}|$. Dann $|\\hat{e}|=|\\vec{v}|/|\\vec{v}|=1$. ✓ Egal ob $\\vec{v}$ Länge $5$, $13$ oder $0{,}3$ hat — der Einheitsvektor ist normiert auf $1$.

**Probe:** Beispiel $\\vec{v}=(3,4)$, $|\\vec{v}|=5$, $\\hat{e}=(3/5,\\,4/5)=(0{,}6,\\,0{,}8)$. Länge: $\\sqrt{0{,}36+0{,}64}=\\sqrt{1}=1$. ✓

**Typischer Fehler:** „Einheitsvektor heißt: alle Komponenten sind $1$" — falsch. Die Komponenten können beliebige Werte zwischen $-1$ und $1$ annehmen; nur die **Gesamtlänge** ist $1$.`,
          [
            'Was definiert einen Einheitsvektor? Sein Betrag.',
            'Welcher Wert ist das?',
            'Konstruktion über $\\hat{e}=\\vec{v}/|\\vec{v}|$ erzwingt Länge $1$.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['einheitsvektor'] },
      ),

      tag(
        mc(
          'Wie bildet man den Einheitsvektor zum Vektor $\\vec{a}=(3,\\,4)$?',
          [
            '$\\hat{e}=(3/5,\\,4/5)$ — durch den Betrag $|\\vec{a}|=5$ teilen.',
            '$\\hat{e}=(3,\\,4)$ — der Vektor selbst ist schon ein Einheitsvektor.',
            '$\\hat{e}=(3/3,\\,4/4)=(1,\\,1)$ — jede Komponente durch sich selbst teilen.',
            '$\\hat{e}=(3/7,\\,4/7)$ — durch die Komponenten-Summe $3+4=7$ teilen.',
          ],
          0,
          `**Ansatz:** Einheitsvektor = Vektor durch seinen Betrag: $\\hat{e}=\\vec{a}/|\\vec{a}|$.

**Rechnung:** $|\\vec{a}|=\\sqrt{9+16}=5$. $\\hat{e}=(3/5,\\,4/5)=(0{,}6,\\,0{,}8)$.

**Probe:** $|\\hat{e}|=\\sqrt{(3/5)^2+(4/5)^2}=\\sqrt{9/25+16/25}=\\sqrt{25/25}=1$. ✓ Richtung: $(3/5,4/5)$ zeigt in dieselbe Richtung wie $(3,4)$ (positiver Skalar verändert Richtung nicht).

**Typischer Fehler:** Durch eine **Komponente** teilen ($a/a_x$) statt durch den **Betrag** ($a/|\\vec{a}|$). Oder durch die Summe der Komponenten teilen — Manhattan-Norm statt euklidischer.`,
          [
            'Formel: $\\hat{e}=\\vec{a}/|\\vec{a}|$.',
            'Erst $|\\vec{a}|$ ausrechnen — dann durch diese Zahl alle Komponenten teilen.',
            'Hier $3$-$4$-$5$-Tripel: $|\\vec{a}|=5$.',
          ],
          {
            1: '$(3,4)$ hat Länge $5$, nicht $1$. Es ist also kein Einheitsvektor — du musst noch durch $|\\vec a|=5$ teilen.',
            2: 'Du hast jede Komponente durch sich selbst geteilt, das ergibt immer $(1,1)$ — egal welcher Vektor. Aber $(1,1)$ hat Länge $\\sqrt{2}\\ne 1$ und zeigt nicht mehr in dieselbe Richtung wie $\\vec{a}$.',
            3: 'Die **Summe** der Komponenten ist die Manhattan-Norm — die Standardformel verlangt aber den **Betrag** (Pythagoras): $|\\vec{a}|=\\sqrt{9+16}=5$, nicht $7$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['einheitsvektor', 'betrag'] },
      ),

      tag(
        ni(
          'Berechne die $y$-Komponente des Einheitsvektors zu $\\vec{a}=(8,\\,6)$ und runde auf 3 Nachkommastellen.',
          0.6, 0.001, '',
          `**Ansatz:** $\\hat{e}=\\vec{a}/|\\vec{a}|$ — auf jede Komponente einzeln anwenden.

**Rechnung:** $|\\vec{a}|=\\sqrt{64+36}=\\sqrt{100}=10$. $\\hat{e}=(8/10,\\,6/10)=(0{,}8,\\,0{,}6)$. $y$-Komponente: $\\mathbf{0{,}6}$.

**Probe:** $|\\hat{e}|=\\sqrt{0{,}64+0{,}36}=\\sqrt{1}=1$ — Länge stimmt. ✓ Außerdem $6$-$8$-$10$ ist verdoppeltes $3$-$4$-$5$-Tripel.

**Typischer Fehler:** Durch $a_y=6$ statt durch $|\\vec{a}|=10$ teilen. Oder Komponenten vertauschen (vergessen, dass das eine $y$-Komponente ist) — dann liefert man die $x$-Komponente $0{,}8$ ab.`,
          [
            'Formel: $\\hat{e}_y = a_y / |\\vec{a}|$.',
            'Erst $|\\vec{a}|$ via Pythagoras berechnen — hier $\\sqrt{64+36}$.',
            'Dann $a_y$ durch diesen Wert teilen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['einheitsvektor', 'betrag'] },
      ),

      tag(
        mc(
          'Eine Schülerin sucht den Einheitsvektor zu $\\vec{a}=(0,\\,4)$ und rechnet $\\hat{e}=(0/4,\\,4/4)=(0,\\,1)$. Sie hat das Ergebnis zwar richtig, aber den **falschen Weg** genommen. Welche Aussage trifft den Fehler in der Methode?',
          [
            'Sie hat durch die Komponente $a_y=4$ statt durch den Betrag $|\\vec{a}|$ geteilt — das funktioniert hier nur zufällig, weil $|\\vec{a}|=4=a_y$. Bei $\\vec{a}=(3,4)$ würde dieselbe Methode falsch enden.',
            'Sie hat richtig durch den Betrag geteilt — nur die Schreibweise ist ungewöhnlich.',
            'Sie hat die Komponenten getauscht — der korrekte Einheitsvektor wäre $(1,0)$.',
            'Sie hätte gar keinen Einheitsvektor bilden müssen — bei einer Null-Komponente ist die Operation nicht definiert.',
          ],
          0,
          `**Ansatz:** Methode prüfen — nicht nur Endergebnis. Korrekt ist immer $\\hat{e}=\\vec{a}/|\\vec{a}|$, **nicht** $\\vec{a}$ durch eine einzelne Komponente.

**Rechnung:** Hier $|\\vec{a}|=\\sqrt{0+16}=4$. $\\hat{e}=(0/4,\\,4/4)=(0,1)$. Zufall: $|\\vec{a}|=a_y=4$, daher liefert „durch $a_y$ teilen" dasselbe Ergebnis wie „durch Betrag teilen".

**Probe:** Gegenbeispiel $\\vec{a}=(3,4)$: $|\\vec{a}|=5$. Korrekt: $\\hat{e}=(3/5,4/5)$. Falsch (durch $a_y=4$): $(3/4,1)$ — das hat Länge $\\sqrt{9/16+1}=\\sqrt{25/16}=5/4\\ne 1$. Methode versagt also bei nicht-zufälligen Vektoren.

**Typischer Fehler:** Zufallstreffer als bewährte Methode ablegen. Wer aus der Methode lernt, dass „durch eine Komponente teilen" funktioniert, scheitert beim nächsten Vektor. Stets durch den **Betrag** teilen.`,
          [
            'Frag: Wäre die Methode bei jedem Vektor erfolgreich — oder nur bei diesem speziellen?',
            'Test mit $\\vec{a}=(3,4)$: liefert „durch Komponente teilen" einen Einheitsvektor?',
            'Korrekt ist und bleibt: $\\hat{e}=\\vec{a}/|\\vec{a}|$.',
          ],
          {
            1: 'Die Methode „durch eine Komponente teilen" ist **nicht** dasselbe wie „durch den Betrag teilen" — sie liefert hier nur zufällig dasselbe Ergebnis. Bei anderen Vektoren versagt sie.',
            2: 'Der korrekte Einheitsvektor zu $(0,4)$ ist $(0,1)$ — die Schülerin hat richtig, aber aus dem falschen Grund. Komponenten zu tauschen wäre eine zusätzliche Modifikation.',
            3: 'Einheitsvektor ist für **jeden** $\\vec{a}\\ne\\vec{0}$ definiert — auch wenn einzelne Komponenten $0$ sind. Verboten ist nur der Nullvektor.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['einheitsvektor'] },
      ),

      tag(
        ni(
          'Bilde einen Vektor der Länge $7$ in derselben Richtung wie $\\vec{a}=(3,\\,4)$. Wie groß ist die $x$-Komponente dieses Vektors?',
          4.2, 0.001, '',
          `**Ansatz:** Vektor mit Länge $L$ in Richtung $\\vec{a}$: $L\\cdot\\hat{e}_a = L\\cdot\\vec{a}/|\\vec{a}|$.

**Rechnung:** $|\\vec{a}|=\\sqrt{9+16}=5$. $\\hat{e}_a=(3/5,\\,4/5)$. Skaliert mit $L=7$: $7\\hat{e}_a=(7\\cdot 3/5,\\;7\\cdot 4/5)=(21/5,\\,28/5)=(4{,}2,\\,5{,}6)$. $x$-Komponente: $\\mathbf{4{,}2}$.

**Probe:** Länge prüfen: $|7\\hat{e}_a|=\\sqrt{4{,}2^2+5{,}6^2}=\\sqrt{17{,}64+31{,}36}=\\sqrt{49}=7$. ✓

**Typischer Fehler:** Direkt $7\\vec{a}=(21,28)$ rechnen — das hat Länge $7\\cdot|\\vec{a}|=35$, nicht $7$. Erst muss man auf den Einheitsvektor normieren, dann mit $L$ skalieren.`,
          [
            'Strategie: Länge $L$ in Richtung $\\vec{a}$ = $L\\cdot\\hat{e}_a$.',
            'Schritt 1: $|\\vec{a}|$ berechnen, Schritt 2: $\\hat{e}_a=\\vec{a}/|\\vec{a}|$, Schritt 3: $\\hat{e}_a$ mit $L$ skalieren.',
            'Hier: $|\\vec{a}|=5$, $\\hat{e}_a=(3/5,4/5)$, dann $7\\cdot 3/5=21/5$.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['einheitsvektor', 'skalar-mul'] },
      ),

      tag(
        ni(
          'Berechne die $z$-Komponente des Einheitsvektors zu $\\vec{a}=(1,\\,2,\\,2)$ und runde auf 3 Nachkommastellen.',
          0.667, 0.001, '',
          `**Ansatz:** $\\hat{e}=\\vec{a}/|\\vec{a}|$ — gilt auch in 3D.

**Rechnung:** $|\\vec{a}|=\\sqrt{1+4+4}=\\sqrt{9}=3$. $\\hat{e}=(1/3,\\,2/3,\\,2/3)\\approx(0{,}333,\\,0{,}667,\\,0{,}667)$. $z$-Komponente: $\\mathbf{2/3\\approx 0{,}667}$.

**Probe:** Längencheck $|\\hat{e}|=\\sqrt{1/9+4/9+4/9}=\\sqrt{9/9}=1$. ✓

**Typischer Fehler:** Wurzel zu früh ziehen ($\\sqrt{1}+\\sqrt{4}+\\sqrt{4}=5$ statt $\\sqrt{9}=3$) — die Wurzel kommt **nach** der Summenbildung, nicht vorher.`,
          [
            'Auch in 3D: $\\hat{e}=\\vec{a}/|\\vec{a}|$ unverändert.',
            '$|\\vec{a}|$ via 3D-Pythagoras: $\\sqrt{1+4+4}$.',
            '$z$-Komponente von $\\hat{e}$ ist $a_z/|\\vec{a}|$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['einheitsvektor', 'betrag'] },
      ),
    ],

    // ===== Sub-Goal 3 — Tech-Größen (Skalar vs. Vektor in Anwendungen) =====
    3: [
      tag(
        tf(
          'Die Beschleunigung $\\vec{a}$ eines Fahrzeugs ist ein Vektor — sie hat Betrag (in $\\text{m/s}^2$) und Richtung (z. B. tangential zur Fahrbahn).',
          true,
          `**Ansatz:** Beschleunigung ist Änderungsrate der Geschwindigkeit — und Geschwindigkeit ist ein Vektor.

**Rechnung:** $\\vec{a}=\\mathrm{d}\\vec{v}/\\mathrm{d}t$. Da $\\vec{v}$ Richtung trägt, trägt auch $\\vec{a}$ Richtung. Beispiel: Bremsen = Beschleunigung **gegen** die Fahrtrichtung; Kurvenfahrt mit konstantem Tempo = Beschleunigung **senkrecht zur Geschwindigkeit** (Zentripetalbeschleunigung).

**Probe:** Newton-Axiom $\\vec{F}=m\\vec{a}$ — Kraft ist Vektor, Masse ist Skalar, daher muss $\\vec{a}$ ein Vektor sein. ✓

**Typischer Fehler:** Beschleunigung mit Geschwindigkeitsbetrag verwechseln und auf den Skalar $|\\vec{a}|$ ($\\text{m/s}^2$-Wert ohne Richtung) reduzieren — das ist nur der Betrag, nicht die ganze physikalische Größe.`,
          [
            'Beschleunigung = Änderung der Geschwindigkeit pro Zeit.',
            'Geschwindigkeit ist Vektor — also ist auch deren Änderung ein Vektor.',
            'Indikator: Hat „Beschleunigung nach links" einen Sinn? Ja — also Vektor.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['tech-groessen'] },
      ),

      tag(
        matching(
          'Ordne jeder physikalisch-technischen Größe die korrekte Klassifikation samt typischer Notation zu.',
          [
            { left: 'Drehmoment $\\vec{M}=\\vec{r}\\times\\vec{F}$', right: 'Vektor — Größe und Drehachsenrichtung' },
            { left: 'Massendichte $\\rho$ in $\\text{kg/m}^3$', right: 'Skalar — Materialeigenschaft, richtungslos' },
            { left: 'Schwerkraft $\\vec{F}_G=m\\vec{g}$', right: 'Vektor — Betrag $mg$, Richtung zum Erdmittelpunkt' },
            { left: 'Druck $p=F/A$ in $\\text{Pa}$', right: 'Skalar — Kraft pro Fläche, Zahlenwert' },
          ],
          `**Ansatz:** Pro Größe fragen: „Ist eine räumliche Richtung sinnvoll?"

**Rechnung:** Drehmoment ist klassischer Pseudovektor (Richtung = Drehachse via Rechte-Hand-Regel). Schwerkraft zeigt nach unten — Vektor. Massendichte (Stoffeigenschaft) und Druck (Kraft pro Fläche) sind richtungslos — Skalare.

**Probe:** Newton-Gleichungen sind dimensions- und richtungs-konsistent: $\\vec{F}_G=m\\vec{g}$ links Vektor, rechts Skalar mal Vektor → Vektor ✓. $p=F/A$: Skalar = Skalar/Skalar ✓.

**Typischer Fehler:** Druck mit Kraft verwechseln — Druck ist eine skalare Spannung, Kraft ein Vektor. Oder Drehmoment als Skalar behandeln (häufig: man rechnet nur mit dem Betrag $|\\vec{M}|$, vergisst aber die Richtung der Drehachse).`,
          [
            'Frage pro Begriff: „Hat es eine räumliche Richtung?"',
            'Hilft der Einheit zu folgen: $\\text{kg/m}^3$, $\\text{Pa}$ → meist Skalare; $\\text{N}$, $\\text{Nm}$ → meist Vektoren.',
            'Auch Pseudovektoren (Drehmoment, Drehimpuls) sind Vektoren — sie zeigen entlang einer Drehachse.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['tech-groessen'] },
      ),

      tag(
        mc(
          'Auf einer Werkstatt-Aushang steht: „Werkstück $W_1$: Gewicht $5\\,\\text{kg}$." Was ist physikalisch falsch — und wie wäre es korrekt formuliert?',
          [
            '$\\text{kg}$ ist Einheit der **Masse** (Skalar). Die Gewichtskraft (Vektor) hätte Einheit Newton: $|\\vec{F}_G|=m\\cdot g\\approx 5\\cdot 9{,}81\\,\\text{N}\\approx 49{,}1\\,\\text{N}$. Korrekt: „Masse $5\\,\\text{kg}$" oder „Gewichtskraft $\\approx 49{,}1\\,\\text{N}$".',
            'Nichts ist falsch — „Gewicht" und „Masse" sind im Maschinenbau dasselbe.',
            'Falsch ist nur die Einheit: korrekt wäre „Gewicht $5\\,\\text{N}$".',
            'Falsch ist die Größenordnung: Werkstücke wiegen üblicherweise mehrere $100\\,\\text{kg}$.',
          ],
          0,
          `**Ansatz:** Trennung Masse $m$ (Skalar in $\\text{kg}$) von Gewichtskraft $\\vec{F}_G$ (Vektor in $\\text{N}$) konsequent durchhalten.

**Rechnung:** $\\vec{F}_G=m\\vec{g}$. Mit $m=5\\,\\text{kg}$ und $|\\vec{g}|\\approx 9{,}81\\,\\text{m/s}^2$ ergibt sich $|\\vec{F}_G|\\approx 49{,}1\\,\\text{N}$. Die Aussage „Gewicht $5\\,\\text{kg}$" mischt umgangssprachlich Masse und Gewicht — physikalisch ist das eine Größenverwechslung.

**Probe:** Auf dem Mond ändert sich $|\\vec{g}|\\approx 1{,}62\\,\\text{m/s}^2$ — die Masse bleibt $5\\,\\text{kg}$, die Gewichtskraft sinkt auf $\\approx 8{,}1\\,\\text{N}$. Das zeigt: Masse und Gewichtskraft sind unterschiedliche Größen.

**Typischer Fehler:** Umgangssprachliche Identifikation („Mein Gewicht ist $80\\,\\text{kg}$") in technische Texte übernehmen. Im Maschinenbau muss zwischen Masse (Skalar, kg) und Gewichtskraft (Vektor, N) konsequent unterschieden werden.`,
          [
            'Welche Einheit gehört zur Masse, welche zur (Gewichts-)Kraft?',
            'Newton-Definition: $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$ — Kraft hat eine ganz andere Einheit als Masse.',
            'Alltagssprache vs. Technik: „Gewicht $5\\,\\text{kg}$" ist umgangssprachlich, fachlich falsch.',
          ],
          {
            1: 'Genau diese Verwechslung wollten wir aufdecken — Masse (Skalar) und Gewichtskraft (Vektor) sind verschiedene physikalische Größen mit verschiedenen Einheiten.',
            2: '„Gewicht $5\\,\\text{N}$" wäre mit der falschen Größenordnung formuliert (entspricht $\\approx 0{,}5\\,\\text{kg}$). Das eigentliche Problem ist die Verwechslung der Größe selbst, nicht nur der Zahlenwert.',
            3: 'Größenordnung ist nicht der Punkt — auch ein $5\\,\\text{kg}$-Werkstück existiert. Der Fehler liegt im Vermischen von Masse und Gewichtskraft.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['tech-groessen'] },
      ),

      tag(
        sorting(
          'Bringe die Schritte zur Berechnung der Gewichtskraft eines Bauteils mit gegebener Masse in die richtige Reihenfolge.',
          [
            'Masse $m$ aus der Aufgabenstellung als Skalar identifizieren (in $\\text{kg}$).',
            'Erdbeschleunigung als Vektor $\\vec{g}\\approx(0,\\,0,\\,-9{,}81)\\,\\text{m/s}^2$ ansetzen (Richtung: zum Erdmittelpunkt).',
            'Gewichtskraft als Skalarmultiplikation $\\vec{F}_G=m\\cdot\\vec{g}$ bilden — Skalar mal Vektor ergibt Vektor.',
            'Betrag $|\\vec{F}_G|=m\\cdot g$ ($g\\approx 9{,}81\\,\\text{m/s}^2$) für skalare Anwendungen ablesen.',
          ],
          [0, 1, 2, 3],
          `**Ansatz:** Zuerst Skalare und Vektoren in der Aufgabe sauber identifizieren, dann gemäß Newton-Formel kombinieren.

**Rechnung:** Schritt 1 stellt die skalare Größe sicher (Masse). Schritt 2 fixiert die vektorielle Komponente (Erdbeschleunigung mit Richtung). Schritt 3 wendet Skalar-mal-Vektor an. Schritt 4 reduziert das Vektor-Ergebnis auf den Betrag, falls nur dieser gefragt ist.

**Probe:** Beispiel $m=5\\,\\text{kg}$: $\\vec{F}_G=5\\cdot(0,0,-9{,}81)\\,\\text{N}=(0,0,-49{,}05)\\,\\text{N}$, Betrag $\\approx 49{,}1\\,\\text{N}$.

**Typischer Fehler:** Direkt $|\\vec{F}_G|=m\\cdot g$ rechnen, ohne das vektorielle Modell zu klären. Im 1D-Fall reicht das, aber bei mehreren Kräften (Hangabtrieb, Seilkräfte) muss man die Richtung kennen.`,
          [
            'Pädagogische Logik: Größen klassifizieren → Modell ansetzen → Operation anwenden → Endwert ablesen.',
            'Skalar und Vektor müssen vor der Operation als solche erkannt sein.',
            'Erst der vektorielle Ansatz, dann die skalare Vereinfachung — nicht umgekehrt.',
          ],
        ),
        { stage: 'transfer', subGoal: 3, uses: ['tech-groessen'] },
      ),

      tag(
        tf(
          'Druck $p$ in einer hydraulischen Anlage ist ein **Skalar** — er hat zwar eine Einheit ($\\text{Pa}=\\text{N/m}^2$), aber keine räumliche Richtung.',
          true,
          `**Ansatz:** Druck = Kraft pro Fläche. Skalar oder Vektor entscheidet die Richtungs-Frage.

**Rechnung:** $p=F_\\perp/A$ — Kraftbetrag senkrecht zur Fläche durch Fläche. Das Ergebnis ist eine Zahl mit Einheit. Frage: „Druck nach links"? Sinnlos — der Druck wirkt allseitig (Pascal'sches Gesetz). Daher Skalar.

**Probe:** In einem geschlossenen Hydrauliksystem ist der Druck überall gleich groß und allseitig — wäre Druck ein Vektor mit Richtung, hätte das keinen Sinn. Stattdessen: aus dem skalaren Druck $p$ entsteht ein Vektor $\\vec{F}=p\\cdot A\\cdot\\hat{n}$ erst durch Wahl einer Fläche mit Normalvektor $\\hat{n}$.

**Typischer Fehler:** Druck mit Kraft verwechseln — Kraft ist ein Vektor, Druck eine richtungslose Spannung. Oder den Spannungstensor (Tensor 2. Stufe) mit dem Druck (Skalar) gleichsetzen — der Spannungstensor hat tensorielle Struktur, Druck ist nur sein hydrostatischer Anteil.`,
          [
            'Pascalsches Gesetz: Druck wirkt in einem ruhenden Fluid allseitig gleich.',
            'Frage nach Richtung: Hat „Druck nach Norden" einen Sinn? Nein.',
            'Druck $\\rightarrow$ Kraft auf eine konkrete Fläche entsteht erst, wenn man den Flächen-Normalvektor anwendet.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['tech-groessen'] },
      ),
    ],
  },
}
