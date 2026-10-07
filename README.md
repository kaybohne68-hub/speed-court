# Speed Court 2.0.0-dev26

Reparaturversion auf Basis der zuletzt nachweislich vollständigen Trainingsengine (V1.12.2).

## dev12
- Startbutton wieder mit echter Trainingsengine verbunden
- Countdown → Training → BUM → Mitte → Step → nächste Position
- Runden und Rundenpause wieder aktiv
- Spieler anlegen, auswählen, löschen und Verlauf
- Spielerdaten Export/Import als JSON
- Wake Lock während aktivem Training
- Deutsch/Englisch für App und Trainingsansagen getrennt wählbar
- englische Audiodateien unter `audio/en/`
- neuer Service-Worker-Cache `speed-court-2.0.0-dev12`

## dev13
- Abschluss: Noch einmal / Anderen Spieler auswählen / Training beenden.
- Englische Abschlussansage: audio/en/training-complete.mp3.

## dev14
- Fehler aus dev13 behoben: Spielerwechsel- und Beenden-Handler waren versehentlich im 'Noch einmal'-Handler verschachtelt.
- Alle drei Abschlussbuttons besitzen jetzt unabhängige Click-Handler.

## dev15
- Englische Ansagen für die mittleren Positionen korrigiert:
  `Links` -> `audio/en/middle-left.mp3`, `Rechts` -> `audio/en/middle-right.mp3`.
- Englische Abschlussansage korrigiert: `Training beendet.` -> `audio/en/training-complete.mp3`.
- Cache auf dev15 erhöht.

## dev16
- Englische Pausenansage korrigiert.
- `Pause`, `Pause!` und `Pause.` werden bei englischen Trainingsansagen auf `audio/en/pause.mp3` abgebildet.
- Trainingsablauf und Timing unverändert.
- Cache auf dev16 erhöht.

## dev17
- Bestätigte deutsche Pause als audio/de/pause.mp3 eingebaut.
- Korrigierte deutsche Eins als audio/de/1.mp3 eingebaut.
- Trainingslogik/Timing unverändert; Cache auf dev17 erhöht.

## dev18
- Deutsche Eins und Pause direkt in index.html eingebettet; keine separaten Dateipfade mehr nötig.
- Dadurch funktionieren beide Ansagen unabhängig vom GitHub-Upload des audio/de-Ordners.
- Trainingslogik und Timing unverändert; Cache dev18.

## dev19
- Flexibles Rundenende: Nach Ablauf der Sollzeit wird die laufende Bewegungssequenz noch bis Mitte -> Step abgeschlossen; erst danach endet die Runde.
- Es soll nach Ablauf der Sollzeit keine Sequenz mitten im Lauf abgebrochen werden.
- Laufpunkte weiter an die Außenränder des Feldes gesetzt, mit 5 % Sicherheitsabstand.
- Mittelpunkt bleibt zentral; Hinten Mitte liegt weiter unten am Rand.
- Bestehende deutsche/englische Audioanpassungen aus dev18 bleiben erhalten.
- Cache auf dev19 erhöht.

## dev20
- Punktpositionen an den tatsächlich gerenderten Elementen auf 7/93 % verschoben.
- Rundenende wird während Ziel/Mitte nur vorgemerkt und direkt nach Step ausgeführt.
- Cache dev20.

## dev21
- Laufpunkte direkt in den tatsächlich verwendeten CSS-Klassen vl/vr/ml/mr/hl/hm/hr weiter nach außen gesetzt.
- Flexibles Rundenende aus dev20 unverändert beibehalten.
- Cache dev21.

## dev26
- Deadlock-Fix für lange Trainings: Rundenende stoppt keine laufende Zielsequenz mehr.
- Normales Rundenende weiterhin ausschließlich nach Position -> Mitte -> Step.
- 8-Sekunden-Watchdog als Notfall: hängt eine Sequenz nach einer Position, wird sie kontrolliert über Mitte -> Step abgeschlossen.
- Nach Step wird ein vorgemerktes Rundenende sicher ausgeführt.
- Punktpositionen aus dev21 bleiben erhalten.
- Cache auf dev26 erhöht.

## dev26 – Sequenz-Fix
- Nach Start einer Zielbewegung keine Rundendauer-Abbruchprüfung mehr innerhalb der Sequenz.
- Jede gestartete Bewegung läuft vollständig: Ziel -> BUM -> MITTE -> Step.
- Zeitprüfung nur vor einer neuen Bewegung und direkt nach Step.
- Ist die Sollzeit nach Step überschritten, endet die Runde sofort sauber.
- Der bisherige Watchdog wurde entfernt; der eigentliche Ablauf ist korrigiert.
- Außenpositionen aus dev21 bleiben erhalten.

## dev26
- Rundenanzahl von 1 bis 10 auswählbar.
- Sequenz-Fix aus dev23 beibehalten.

## dev26
- Aktive Zeit wird für jede Runde separat ab 0 s angezeigt.
- In der Rundenpause bleibt die aktive Rundenzeit stehen.
- Separate Pause-Anzeige zählt die Pausenzeit herunter.
- Rundenanzeige zeigt aktuelle Runde / Gesamtzahl.

## dev26
- Modusnamen einheitlich auf Punkte umgestellt.
- Kleine Feldvorschau unter der Moduswahl; aktive Laufpunkte leuchten.
- Zwei neue vordere Punkte: Vorn links / Vorn rechts.
- Neuer 8-Punkte-Footwork-Modus nutzt die zwei neuen vorderen Punkte plus die bisherigen sechs Standardpunkte.
- Bestehende Trainingslogik aus dev25 beibehalten.
