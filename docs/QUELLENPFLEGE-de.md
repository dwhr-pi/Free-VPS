# Artikel, Videos und Release-Notes laufend einordnen

Stand: **21.11.2026**. Das [Quellenregister](../data/wissensquellen-de.json) ergänzt den Anbieterbestand; es ist keine Liste zusätzlicher bestätigter Gratis-VPS. Ältere Quellen bleiben auf ihrem damaligen Prüfstand, bis sie einzeln erneut geprüft werden.

## Neue Einordnung dieser Iteration

| Quelle | Datum / Nachweis | Ergebnis |
| --- | --- | --- |
| [GitHub-Zusatzbedingungen](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features) | Gelesen am 21.11.2026; Seite nennt Wirksamkeit 27.08.2026 | Grundlage für Zweckbindung und ausdrücklich dokumentiertes Miningverbot in den zwei GitHub-Karten |
| [l0n3m4n/github-vps](https://github.com/l0n3m4n/github-vps) | README und Dateiliste am 21.11.2026 | Nur portable Entwicklungs-/CLI-Ideen übernommen; VPS-/Tunnelmethoden ausgeschlossen |
| [hostvpshub/free-vps](https://github.com/hostvpshub/free-vps) | README und Root-Dateiliste am 21.11.2026 | Managementkonzepte übernommen; Anwendungscode und Lizenzdatei nicht nachgewiesen |
| [GitHub-Artikel zur Datenresidenz](https://github.blog/changelog/2026-01-29-codespaces-is-now-in-public-preview-for-github-enterprise-with-data-residency/) | Veröffentlicht 29.01.2026, am 21.11.2026 gelesen | Damalige Enterprise-Preview-Ankündigung: Eigentümer, Region und Organisationsrichtlinien einplanen. Keine Free-VPS-Neuigkeit und kein Nachweis des heutigen GA-Status |
| [Offizielles Codespaces-Video](https://www.youtube.com/watch?v=_01iCF9sO1c) | GitHub, 26.03.2024 laut Suchindex; am 21.11.2026 neu eingeordnet | Lernhinweis zur Entwicklung; kein vollständiger Video-/Befehlsaudit |

Die aktuelle Suche nach `Free VPS GitHub 2026` und Codespaces-Entwicklung fand auch jüngere 24/7-/GPU-Werbevideos. Eine [Fundstelle vom 27.08.2026](https://www.youtube.com/watch?v=sh6CABpimfg) bleibt im Register als **Kandidat ohne Übernahme**: Metadaten allein klären Hoster und Regeln nicht. Daraus wird weder eine Empfehlung noch eine unbelegte Behauptung eines konkreten Verstoßes. Fremde Verzeichnisse, Werbeseiten und ungesehene Videos gelten nicht als technische Abnahme.

## Datenvertrag

Jede neue Quelle erhält eine stabile ID, HTTPS-URL, Titel, Herausgeber/Kanal, Typ und Veröffentlichungsdatum oder `null`. `geprueft_am` bezeichnet eine tatsächliche redaktionelle Prüfung; `pruefumfang` trennt `inhalte`, `metadaten` und `offen`. Der Status bestimmt die Verwendung:

- `kandidat`: zur weiteren Prüfung erfasst; keine übernommenen Ideen oder aktiven Dokumentziele.
- `freigegeben`: benannte Ideen nach Inhaltsprüfung verwendbar; kein pauschales Zertifikat für das ganze fremde Projekt.
- `teilweise`: nur ausdrücklich benannte Ideen verwendbar, ausgeschlossene Methoden/Grenzen müssen angegeben sein.
- `verworfen`: Methode nicht übernommen; datierte Begründung und Quellen erhalten. Keine ausführbaren Umgehungsanleitungen archivieren.

`uebernehmen`, `ausschliessen`, `begruendung`, `belege` und `eingearbeitet_in` machen die Entscheidung nachvollziehbar. Fehlende historische Veröffentlichungsdaten bleiben `null`. Der Strukturprüfer lehnt fehlende Evidenz, ungeprüfte Übernahmen und vollständige Freigaben aus Metadaten ab. Er meldet Prüfungen nach mehr als 30 Tagen zur erneuten Sichtung. Er prüft keine Videoaussagen oder Vertragstexte selbst.

## Wöchentlicher Ablauf

Der bestehende Windows-Job liest bei jedem Start den aktuellen [Wochenauftrag](../prompts/WOCHENPFLEGE-de.md). Er beobachtet bekannte Anbieter- und Wissensquellen begrenzt auf Textänderungen und startet anschließend die öffentliche Recherche nach neuen Anbietern, Artikeln, Release-Notes und Videos. Ein Kandidat wird niemals allein durch HTTP-200 oder einen unveränderten Hash freigegeben. Ein Suchauftrag garantiert keine vollständige weltweite Erfassung.

Zuerst Regeln und Infrastruktur prüfen, dann Erkenntnisse einarbeiten, schließlich Katalog/Struktur prüfen und Changelog/Recherchenachweis datieren. Veraltete Methoden mit Datum einordnen und aktive Empfehlungen korrigieren; Originalarchive bleiben geschützt und als historisch gekennzeichnet. Auf öffentliche Suchzugriffe begrenzen, keine Login-/CAPTCHA-Umgehung und keine Volltextkopien fremder Artikel oder Transkripte.

Nur die neue Quellenklasse beobachten, ohne Codex oder Provideraktionen:

```powershell
node scripts/quellenmonitor-de.mjs --wissen --max=3
```

Ohne diese Optionen beobachtet der Monitor alle bekannten Quellen, weiterhin mit drei parallelen Abrufen, Zeit-/Größenlimit und ohne Änderung von Inhaltsprüfzeitstempeln. Die [Betriebsdokumentation](AKTUALISIERUNG-de.md) nennt Voraussetzungen, Termin und Grenzen der laufenden Pflege. Ein beobachteter künftiger Erfolg wird nicht vorweggenommen.
