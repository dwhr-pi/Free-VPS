# Wöchentliche automatische Pflege

Die Pflege besteht aus einem begrenzten öffentlichen Quellenmonitor und einem anschließenden Codex-Recherchelauf. Der Windows-Job heißt **Free-VPS-Wochenpflege** und ist für **montags 09:00 Uhr, Europe/Berlin** vorgesehen. Ob er tatsächlich registriert/aktiv ist und wann er als Nächstes läuft, steht im [Betriebsnachweis](../berichte/wochenpflege-status-de.json). Diese Datei ist ein Installationsnachweis, kein Beleg für einen bereits bestandenen wöchentlichen KI-Lauf.

## Was automatisch aktualisiert wird

Der [Wochenauftrag](../prompts/WOCHENPFLEGE-de.md) prüft öffentliche Anbieterpreise, Gratisbedingungen, Karten-/KYC-/Mehrfachkontoregeln, Mining/KI/Krypto/Trading, Ressourcen/Traffic, Erfahrungen, GitHub-Werkzeuge und YouTube-Fundstellen. Neue Anbieter und Einrichtungsanleitungen werden aufgenommen, alte Angebote gegebenenfalls als historisch oder unbestätigt markiert. Der [OpenClaw-Codex-Prompt](../prompts/CODEX-OPENCLAW-VPS-de.md) wird anhand neuer Anbieter und des tatsächlichen Automaton-/Setupstands überprüft und bei Bedarf angepasst.

Der Job aktualisiert lokale deutsche Dateien in diesem Repository. Das Hauptrepository wird dabei nur gelesen. Kein wöchentlicher Provider-Login, kein neuer Account, kein Kauf, kein Server-/Cluster-Apply, kein Mining oder Live-Trading. Der Job committet/pusht nicht und verschickt keine Nachrichten. Für Veröffentlichungen ist deshalb ein eigener, bewusster Git-Schritt erforderlich.

## Voraussetzungen und Grenzen

- Der Rechner muss laufen, der aktuelle Windows-Benutzer angemeldet sein und Internetzugang haben. `StartWhenAvailable` holt einen verpassten Termin nach, sobald Windows ihn ausführen kann; es ersetzt keinen ständig laufenden Server.
- Die installierte Codex-CLI muss weiterhin mit ChatGPT angemeldet sein und über verfügbare Nutzung verfügen. Der Job verwendet diese Anmeldung; er richtet keinen neuen kostenpflichtigen API-Vertrag ein. Kontingent-/Modell-/Netzfehler können die Pflege verhindern.
- Ein exklusiver Dateilock und Windows `IgnoreNew` verhindern überlappende Läufe. Die Aufgabe hat ein Laufzeitlimit von einer Stunde. Fehlgeschlagene Läufe werden nicht endlos wiederholt.
- Vor jedem Lauf werden die Originalhashes und die Dokumentstruktur geprüft; bearbeitbare Dateien werden lokal unter `.pflege/laeufe/.../vorher/` gesichert. Es gibt keinen automatischen Reset und kein Löschen der Originale. Lokale Sicherungen können mit der Zeit Platz benötigen.
- Ein Prompt ist keine Betriebssystem-Sandbox. Die CLI wird mit `workspace-write`, ohne automatische Benutzerkonfigurationsübernahme und mit einem eng begrenzten Dokumentationsauftrag gestartet. Externe Seiten gelten als Daten, nicht als Befehlsquelle. Keine Secrets werden für diese Recherche benötigt.

## Abrufdatum ist nicht Inhaltsprüfung

`scripts/quellenmonitor-de.mjs` liest höchstens drei öffentliche Textquellen gleichzeitig, mit 15 Sekunden Timeout und 2 MB Inhaltslimit. Es verfolgt Textfingerabdrücke, HTTP-Fehler und Weiterleitungsziele. Dynamische Seiten können Fehlalarme erzeugen, Bot-Schutz kann eine lesbare Fehlerseite mit HTTP-200 liefern. Ein unveränderter Fingerabdruck bestätigt weder Tarif noch Erlaubnis.

Der Monitor ändert **kein** Anbieter-Prüfdatum und **keine** Preis-/AUP-Aussage. Erst der nachfolgende Recherchelauf darf inhaltlich geprüfte Karten aktualisieren. Fehlgeschlagene Abrufe bleiben als solche sichtbar. Zuletzt erfolgreiche Fingerabdrücke werden auch über Fehler hinweg erhalten. Der Codex-Lauf muss Quellenwidersprüche und unvollständige Prüfabdeckung berichten.

## Bedienung

Mit vorhandenem Node und Codex im Repository:

```powershell
# Struktur, Archiv und Codex-Anmeldung prüfen; keine KI-Recherche starten:
powershell.exe -NoProfile -File .\scripts\wochenpflege-de.ps1 -CheckOnly

# Vollständige öffentliche Quellenbeobachtung ohne KI-Aktualisierung:
powershell.exe -NoProfile -File .\scripts\wochenpflege-de.ps1 -SourcesOnly

# Einen vollständigen Pflege-/Recherchelauf bewusst jetzt starten:
powershell.exe -NoProfile -File .\scripts\wochenpflege-de.ps1

# Windows-Aufgabe anzeigen:
Get-ScheduledTask -TaskName Free-VPS-Wochenpflege
Get-ScheduledTaskInfo -TaskName Free-VPS-Wochenpflege

# Künftige Läufe deaktivieren, ohne Dateien zu löschen:
powershell.exe -NoProfile -File .\scripts\wochenpflege-registrieren-de.ps1 -Disable
```

Zur Einrichtung auf einem weiteren Windows-Rechner den Registrierungshelfer einmal ohne `-Disable` ausführen. Er überschreibt keine gleichnamige fremde Aufgabe. Den Repositorypfad und die Windows-Zeitzone prüfen. Nach einem Umzug vorhandene Taskaktion bewusst anpassen; nicht parallel einen zweiten Pflegejob anlegen.

## Ergebnisse und tatsächlicher Teststand

Öffentliche Quellenberichte liegen unter `berichte/quellenmonitor-*.json`; datierte fachliche Änderungsberichte schreibt Codex nach `berichte/`. Private Ablaufprotokolle, Vorher-Sicherungen und das letzte Laufresultat liegen unter `.pflege/` und werden nicht in Git aufgenommen. Die Skripte verwenden keine Provider-Zugangsdaten.

Die initiale Prüfung umfasst Katalogerzeugung, Archivhashes, Datenfelder, lokale Links, JavaScript-/PowerShell-Syntax, CLI-Anmeldung sowie eine begrenzte Quellenmonitorprobe. Ein vollständiger zukünftiger Codex-Wochenlauf und Provider-Laufzeittests sind dadurch nicht bewiesen. Der Abschlussbericht nennt die tatsächlich durchgeführten Prüfungen und das Registrierungsresultat.
