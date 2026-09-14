# Speed Court V1

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
