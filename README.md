# Speed Court 2.0.0-dev17

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
