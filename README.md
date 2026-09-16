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

## V1.9.1
- Neu aufgebaut auf V1.8.18, damit die dortigen Töne exakt erhalten bleiben.
- Positionston: 0,5 s; Zentrumston: 1,5 s.
- Trainingsfeld als Draufsicht auf nur eine Badminton-Feldhälfte.
- Netz oben, hintere Linie unten, sechs Zielpositionen.
- Zentraler Bereich optisch weiter vorn.
- Beim laufenden Training bleibt das Feld die Hauptanzeige.
- Rücklaufzeit wird je nach Zielposition individuell berechnet.
- Die Zufallspause startet erst nach vollständiger Rückkehr ins Zentrum.

## V1.9.2
- Audio-Sequenz sauber verriegelt.
- Positionston und Zentrumston bleiben unverändert aus V1.8.18.
- Nach dem Zentrum wartet die App zuerst die kompletten 1,5 Sekunden des Zentrumstons ab.
- Erst danach beginnt die eingestellte Zufallspause.
- Erst nach dieser Pause folgt die nächste Richtungsansage.
- Feldansicht und individuelle Rücklaufzeiten aus V1.9.1 bleiben unverändert.

## V1.10.0
- Richtungen, Countdown, Los, Rundenpause, Bereit-machen und Trainingsende sind jetzt echte eingebettete WAV-Mediendateien.
- speechSynthesis wird für diese Trainingsansagen nicht mehr verwendet.
- Sprache und Signaltöne laufen dadurch über den normalen Medien-Audiokanal, was die Bluetooth-Box-Kompatibilität verbessert.
- Die Sprachdateien werden in einer Warteschlange nacheinander abgespielt, damit Ansagen sich nicht gegenseitig überlagern.
- Töne, Feldansicht und Trainingsablauf aus V1.9.2 bleiben erhalten.

## V1.10.1
- Position: gesprochenes BUM.
- Zentraler Bereich: gesprochenes ZB (Zett Bee).
- Ablauf: Richtung → Position → BUM → Rückweg → ZB → Pause → nächste Richtung.
- Beide Signale sind echte Media-Audiodateien für Bluetooth-Ausgabe.

## V1.10.2
- Alle Sprachansagen mit weiblicher/höherer deutscher Stimme neu erzeugt.
- ZB deutlich schneller und kürzer gesprochen.
- Schutzzeit nach ZB auf 0,45 s verkürzt.
- Trainingslogik und Feldansicht bleiben unverändert.

## V1.10.3
- Verzerrende, künstlich hochgepitchte Richtungsansagen aus V1.10.2 entfernt.
- Sauberere Media-Sprachdateien für Richtungen/Countdown/Pausen wiederhergestellt.
- Bluetooth-Medienausgabe bleibt aktiv.
- BUM/ZB-Ablauf bleibt erhalten; ZB-Schutzzeit 0,55 s.
- Zusätzlich wurde eine natürlichere KI-Sprachprobe mit dem Voice-Generator erstellt.

## V1.10.4
- ZB wurde im Trainingsablauf durch „MITTE!“ ersetzt.
- Für „MITTE!“ wird exakt die vom Benutzer bereitgestellte MP3 „Mitte Area.mp3“ verwendet.
- Die MP3 ist direkt in index.html eingebettet und benötigt keine zusätzliche Audiodatei auf GitHub.
- Ablauf: Richtungsansage → Position → BUM → Rückweg → MITTE → Pause → nächste Richtung.
- Bluetooth-Medienausgabe bleibt erhalten.
- Feldansicht und übrige Trainingslogik bleiben unverändert.

## V1.10.5
- Alle sechs Richtungsansagen verwenden die hochgeladenen weiblichen MP3-Dateien.
- BUM und MITTE verwenden die hochgeladenen MP3-Dateien.
- Pause verwendet „Pause Command.mp3“.
- „Bereit machen. Nächste Runde.“ verwendet „Nächste Runde Bereit.mp3“.
- „Training beendet.“ verwendet „Training Beendet.mp3“.
- Audio-Test verwendet „Speed Court Test.mp3“.
- Alle genannten MP3s sind direkt in index.html eingebettet; keine zusätzlichen Audio-Dateien auf GitHub nötig.
- Der 3/5/10-Sekunden-Countdown bleibt technisch im exakten Sekundentakt, damit die auswählbaren Countdownlängen weiterhin korrekt funktionieren.

## V1.10.6
- „Vorne links“ wurde durch die neu hochgeladene korrekte Frauenstimmen-MP3 ersetzt.
- „Countdown Start.mp3“ (3–2–1–Los) ist direkt in index.html eingebettet.
- Bei 3-Sekunden-Startcountdown wird die kombinierte Frauenstimmen-Datei verwendet, sofern die Startlogik dies unterstützt.
- Alle übrigen weiblichen Trainingsansagen aus V1.10.5 bleiben erhalten.
- Neuer PWA-Cache speed-court-v1-10-6.

## V1.10.7
- „Vorne links“ ersetzt durch „Position Vorne Links (1).mp3“.
- countdownThenRound() korrigiert: Bei 3 Sekunden wird jetzt tatsächlich die hochgeladene „Countdown Start.mp3“ komplett abgespielt.
- Die Runde startet erst nach dem Ende dieser MP3.
- Veralteter doppelter Countdown-Helfer entfernt.
- 5/10-Sekunden-Countdown bleibt im bisherigen Sekundentakt.
- PWA-Cache auf speed-court-v1-10-7 geändert.

## V1.11.0
- Countdown-Startlogik vollständig neu aufgebaut.
- Auswahl 3 / 5 / 10 Sekunden zählt wieder mit einem unabhängigen JavaScript-Sekundentimer.
- Audio steuert den Trainingsstart nicht mehr und kann ihn daher nicht blockieren.
- Zusätzliche Sicherheitsroutine startet die Runde auch bei Audio-/Bluetooth-Fehlern.
- Die problematische lange Countdown-MP3-Seek-Logik aus V1.10.8 wurde verworfen.
- Vorne-links-Korrektur und die übrigen Frauenstimmen-Audios aus V1.10.7 bleiben erhalten.
- PWA-Cache auf V1.11.0 aktualisiert.

## V1.11.1
- Kritischen Countdown-Fehler aus V1.11.0 behoben.
- countdownTimer wird jetzt global initialisiert.
- Countdown 3 / 5 / 10 Sekunden läuft unabhängig von Sprach-/Bluetooth-Audio.
- „Los!“ startet die Runde über einen separaten Timer; Audio kann den Start nicht blockieren.
- Zusätzlicher Sicherheitsstart nach Ablauf der gewählten Countdownzeit.
- Bestehende Frauenstimmen- und Richtungsdateien bleiben erhalten.
- PWA-Cache auf speed-court-v1-11-1 aktualisiert.
