# Speed Court V1.5

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
