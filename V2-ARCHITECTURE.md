# Speed Court 2.0.0-dev1
Basis: V1.12.2.
Neu: zentrale FREE/PRO-Berechtigungen, separater UI-/Ansagen-Sprachstatus, Deutsch/Englisch-Grundstruktur und Entwickler-Testschalter.
Noch nicht enthalten: echte Käufe/Abos, Store-Codes, englisches Audiopaket, vollständige Übersetzung, Kamera.

## Dev 2
Aktive Deutsch/Englisch-Umschaltung der bestehenden Oberfläche; Ansagensprache bleibt separat.

## Dev 3
- Vollständigerer Deutsch/Englisch-Layer für Spielerbereich, Trainingskonfiguration, Trainingsansicht und Status.
- Select-/Dropdown-Optionen werden separat aus ihren Originalwerten übersetzt.
- Dynamische Werte wie Sekunden, Runden, Reaktionszeit und letzter Trainingsstatus werden übersetzt.
- UI-Sprache und Trainingsansagensprache bleiben unabhängig.

## Dev 4
- Automatische Wort-/Text-Ersetzung aus Dev2/Dev3 entfernt.
- Stabile, explizite Deutsch/Englisch-Begriffe über feste UI-Ziele.
- Keine Umbenennung von „Training“ zu „Schulung“ oder „Mitte“ zu „Zentrum“.
- Modusauswahl logisch sortiert: 4-Ecken, 5-Punkte, 6-Ecken, 7-Positionen, Explosive Sprints, Split-Step Reaktion.
- Interne Moduswerte und Trainingslogik bleiben unverändert.
- Dropdown-Modusnamen werden direkt aus festen Sprachwerten gesetzt.

## Dev 5
- Eine einzige verbindliche I18N-Quelle (SC2.I18N).
- Keine automatische Wortübersetzung mehr.
- Startbutton, Sprachfelder, FREE/PRO-Schalter und Statuszeile fest DE/EN definiert.
- Dropdowns werden anhand ihrer stabilen internen Werte übersetzt.
- Modusreihenfolge bleibt 4, 5, 6, 7, Explosive Sprints, Split-Step.
- UI- und Ansagensprache bleiben getrennt.

## Dev 6
- Alte dev2–dev5-Übersetzungsschichten aus der ausgelieferten Seite entfernt.
- SC6 ist die einzige aktive UI-Lokalisierung.
- Sprachwechsel rendert sofort Deutsch/Englisch.
- Dropdowns werden anhand stabiler interner Werte übersetzt.
- Ansagensprache bleibt unabhängig von der App-Sprache.
- FREE/PRO-Status, Startbutton und Tipp werden explizit lokalisiert.
