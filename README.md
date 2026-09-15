# Speed Court V1.8.18

Badminton Sprint- und Footwork-Trainer als kleine Progressive Web App.

## Funktionen
- 6-Ecken-Footwork
- Explosive Sprints
- Split-Step-Reaktion
- Deutsche Sprachansage
- Alternativ Ton oder nur Bildschirm
- Zufällige Signalabstände
- 1/3/5 Runden
- einstellbare Trainings- und Pausenzeit
- Vibration
- einfache Statistik
- Offline-Cache über Service Worker

## Starten
Am einfachsten die Dateien über einen kleinen lokalen Webserver öffnen.

PC/Mac mit Python:
```bash
cd speed-court-v1
python -m http.server 8080
```

Danach im Browser:
http://localhost:8080

Für Nutzung auf dem Smartphone kannst du den Ordner z. B. auf GitHub Pages, Netlify, Cloudflare Pages
oder einen anderen statischen Webhost laden.

Hinweis: Sprachansage nutzt die im Browser vorhandene deutsche Text-to-Speech-Stimme.


## Neu in V1.1
- Start-Countdown wählbar: 3, 5 oder 10 Sekunden
- Große Countdown-Anzeige
- Sprachansage der Zahlen und „Los!“


## Neu in V1.2
- Am Rundenende: Ansage „Pause“ plus eingestellte Pausenlänge
- Vor jeder Folgerunde: „Bereit machen. Nächste Runde.“
- Danach erneut der vollständige Start-Countdown mit „Los!“


## Neu in V1.3
- Sprachansagen werden in einer Warteschlange nacheinander abgespielt
- Countdown wird als eine zusammenhängende Ansage erzeugt
- Nächste Ansage startet erst, wenn die vorherige beendet ist
- Sprachwarteschlange wird beim Stoppen sauber gelöscht


## Neu in V1.4
- Countdown läuft exakt im 1-Sekunden-Takt
- Jede Zahl wird einzeln angesagt
- Nach „Los!“ beginnt die Runde erst nach einem weiteren Sekundentakt


## Neu in V1.5
- Am Trainingsende bleibt der Trainingsbildschirm zunächst sichtbar
- Ansage „Training beendet.“
- Abschlussanzeige „GESCHAFFT ✓“ mit Vibrations-/Tonsignal
- Ergebnisbildschirm erscheint erst nach Ende der Ansage und mindestens 2,2 Sekunden


## Neu in V1.6
- Echter HTML-Medien-Audiokanal für Bluetooth-Kopfhörer und Bluetooth-Lautsprecher
- Button „Bluetooth / Audio testen“
- Medien-Signaltöne für Richtung, Pause, Bereit und Trainingsende
- Audio wird beim Tippen auf „Training starten“ für mobile Browser freigeschaltet
- Audiodateien werden für Offline-Betrieb mit gecacht

Hinweis: Die gesprochenen Wörter verwenden in V1.6 weiterhin die Systemstimme. Die neuen WAV-Signale laufen dagegen über den normalen Medienkanal und dienen auch als zuverlässiger Bluetooth-Routing-Test.


## V1.6.1 – vereinfachter GitHub-Upload
- Kein audio-Ordner mehr erforderlich
- Alle WAV-Signaltöne sind direkt in index.html eingebettet
- Für GitHub müssen nur README.md, index.html, manifest.json und sw.js hochgeladen werden


## Neu in V1.7 – Spielerprofile
- Spieler/in anlegen und auswählen
- Letzte Trainingseinstellungen werden pro Profil automatisch gespeichert und geladen
- Ergebnisse werden pro Spieler/in gespeichert
- Persönlicher Trainingsverlauf mit bis zu 50 Einheiten
- Übersicht über Trainingsanzahl, Gesamtminuten und Signale
- Profile können wieder gelöscht werden
- Daten bleiben lokal im Browser/auf dem Gerät; kein Konto und kein Server nötig


## Neu in V1.7.1
- Minimale Signalpause kann bis 5,0 Sekunden eingestellt werden
- Maximale Signalpause kann bis 5,0 Sekunden eingestellt werden

## Neu in V1.8.1
- Fehler aus V1.8 behoben: Training startet wieder korrekt.
- Keine separaten Regler für Hin- und Rücklaufzeit mehr.
- Minimale und maximale Pause bestimmen jetzt variabel den kompletten Bewegungszyklus.
- Pro Signal wird zufällig eine Zykluszeit zwischen Minimum und Maximum gewählt.
- Nach ca. 45 % ertönt der helle Zielton.
- Nach ca. 85 % ertönt der tiefere Zentrumton.
- Bei 100 % folgt die nächste Richtungsansage.
- Spielerprofile und Ergebnisse bleiben kompatibel.

## Neu in V1.8.2
- Die festen 45-%-/85-%-Zeitpunkte aus V1.8.1 wurden entfernt.
- Pro Bewegung wird ein zufälliger Grundwert zwischen minimaler und maximaler Pause gewählt.
- Zeit zur angesagten Position = 75 % dieses Grundwerts.
- Zeit zurück zum Zentrum = 100 % dieses Grundwerts.
- Nach dem Zentrum wird zusätzlich eine neue unabhängige Zufallspause zwischen Minimum und Maximum gewählt.
- Heller Ton = Zielposition sollte erreicht sein.
- Tiefer Ton = Zentralposition sollte wieder erreicht sein.
- Keine zusätzlichen Zeitregler nötig.

## Neu in V1.8.3 – angenehmere Signaltöne
- Position erreicht: kurzer heller, aufsteigender musikalischer Doppelton.
- Zentrum erreicht: weicherer, tieferer, absteigender Doppelton.
- Die Töne bleiben kurz und deutlich unterscheidbar.
- Audio ist weiterhin direkt in index.html eingebettet; kein Audio-Ordner erforderlich.
- Trainingslogik, Spielerprofile und Zeitberechnung aus V1.8.2 bleiben unverändert.

## Neu in V1.8.4 – Gaming-/Sport-Signale
- Position: kurzer elektronischer Power-up-Sweep mit knackigem Abschluss.
- Zentrum: tiefer Sport-Impact mit kurzem digitalen Ready-Signal.
- Keine Glocken-/Klingel- oder musikalischen Doppelpiepser mehr.
- Sounds bleiben kurz, klar unterscheidbar und Bluetooth-tauglich.
- Trainingslogik und Spielerprofile aus V1.8.3 bleiben unverändert.

## Neu in V1.8.5
- Position erreicht: Sound 02 „Smash“.
- Zentrum erreicht: Sound 05 „Impact TOK“.
- Beide Sounds sind direkt in index.html eingebettet.
- Trainingslogik, Profile und Timing bleiben unverändert.

## Neu in V1.8.8
- Zurück zu den sauberen, unverzerrten Sport-Sounds aus V1.8.5.
- Keine aggressive WAV-Kompression und kein Doppelimpuls.
- Nur Position- und Zentrum-Signal werden per Web Audio Gain verstärkt.
- Sprachansagen bleiben vollständig unverändert.
- Trainingslogik, Timing und Spielerprofile bleiben unverändert.


## Neu in V1.8.9
- **Position:** kurzer tiefer **BUM**-Sound.
- **Zentrum:** heller **BEEREN**-Bestätigungston.
- Sprachansagen, Timing und Spielerprofile bleiben unverändert.

## Neu in V1.8.10
- Position erreicht: kurzer tiefer BUM (unverändert).
- Zentrum erreicht: kurzer klarer BEEP.
- Sprachansagen, Timing, Trainingslogik und Spielerprofile bleiben unverändert.

## Neu in V1.8.11
- Position: neu abgestimmter kurzer, trockener BUM mit klarer Attacke.
- Zentrum: deutlich höherer, sauberer 2,65-kHz-BEEP.
- Stärkere akustische Trennung zwischen beiden Trainingssignalen.
- Keine aggressive Kompression, kein Doppelimpuls und kein Nachhall.
- Sprachansagen, Timing, Trainingslogik und Spielerprofile bleiben unverändert.

## Neu in V1.8.18
- Position: deutlich höherer, trockener BOP/POP-Impact im mittleren Frequenzbereich.
- Zentrum: der klare hohe BEEP aus V1.8.11 bleibt unverändert.
- Sprachansagen, Lautstärkesteuerung, Timing, Trainingslogik und Spielerprofile bleiben unverändert.

## Neu in V1.8.18
- Position: BEEP–BEEP mit 0,10 s Abstand.
- Zentrum: derselbe BEEP einmal.
- Trainingslogik und Sprachansagen unverändert.

## V1.8.18
- Position: weicher 1,05-kHz-Ton, 2 Sekunden.
- Zentrum: gleicher Ton, 1 Sekunde.
- Kein Doppelton.

## V1.8.18
- Position: 1 Sekunde Ton.
- Zentrum: 2 Sekunden Ton.
- Sonstige Trainingslogik unverändert.

## V1.8.18
- Position erreicht: Ton auf 0,5 Sekunden verkürzt.
- Zentrum erreicht: 2 Sekunden Ton, unverändert.
- Klang, Sprachansagen, Timing, Trainingslogik und Spielerprofile bleiben ansonsten unverändert.

## V1.8.18
- Grundton von ca. 1.050 Hz auf ca. 750 Hz abgesenkt.
- Weicheres Ein- und Ausblenden für einen angenehmeren Klang.
- Position: 0,5 Sekunden.
- Zentrum: 2 Sekunden.
- Sprachansagen, Timing, Trainingslogik und Spielerprofile bleiben unverändert.

## V1.8.18
- Ton nochmals tiefer: ca. 620 Hz.
- Position: 0,5 Sekunden.
- Zentrum: 1,5 Sekunden.
- Sonstige Trainingslogik unverändert.

## V1.9.0
- Trainingsansicht zeigt nur noch die eigene Badminton-Feldhälfte: Netz bis hintere Linie.
- Feld bleibt beim gestarteten Training im Mittelpunkt; keine Seitenleiste.
- Zentraler Bereich wurde optisch etwas weiter nach vorn gesetzt.
- Pause startet erst nach dem rechnerischen Rückweg ins Zentrum.
- Hin- und Rückwegzeiten werden pro Position individuell berechnet:
  Mitte kürzer, vorne mittel, hinten länger.
- Positionston 0,5 s und Zentrumston 1,5 s sowie der tiefere Klang aus V1.8.18 bleiben erhalten.
