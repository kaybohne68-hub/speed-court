# Speed Court V1.8

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


## Neu in V1.8 – Lauf- und Rückkehrsignale
- Einstellbare Zeit bis zur angesagten Feldposition: 0,5–5,0 s
- Einstellbare Zeit zurück zum Zentrum: 0,5–5,0 s
- Heller Doppelton = Zielposition sollte erreicht sein
- Tiefer Doppelton = Spieler/in sollte wieder im Zentrum stehen
- Erst danach beginnt die zufällige Pause bis zur nächsten Richtungsansage
- Beide Zeiten werden pro Spielerprofil gespeichert
- Töne sind direkt in index.html eingebettet; kein Audio-Ordner nötig
