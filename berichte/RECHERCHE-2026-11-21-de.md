# Recherche und Integration vom 21.11.2026

Diese Iteration erweitert das lokale Repository `C:\Users\danie\Documents\GitHub\Free-VPS`. Änderungen sind lokal reviewbar; es wurde weder committet noch gepusht. Das OpenClaw-Hauptprojekt und die drei geschützten Originalarchive wurden nicht bearbeitet.

## Inhalt und Quellen

- [l0n3m4n/github-vps](https://github.com/l0n3m4n/github-vps): README, Root-Dateiliste und Metadaten geprüft. Portable CLI-/Entwicklungsidee als eigene Dokumentation und optionale Dev-Container-Vorlage integriert. VPS-/Tunnel-/Privilegierungsansätze ausgeschlossen.
- [hostvpshub/free-vps](https://github.com/hostvpshub/free-vps): nur README im gelesenen Root, kein prüfbarer Anwendungscode oder Lizenzdatei. Inventar, Ressourcenübersicht, Backup-/Restore-Nachweise, Firewall und Erweiterungsmodule als eigener Entwurf dokumentiert. Keine Dashboardinstallation behauptet.
- [GitHub-Zusatzbedingungen](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features), [AUP](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) und [Codespaces-Abrechnung](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces) in den relevanten Abschnitten geprüft. Zwei GitHub-Anbieterkarten enthalten jetzt das ausdrücklich dokumentierte Miningverbot und einen separaten Regelprüfstand vom 21.11.; sonstige Tarifprüfstände nicht pauschal angehoben.
- Aktuelle Suche nach FreeVPS GitHub 2026 und regulärer Entwicklungsnutzung durchgeführt. Offizielles älteres Codespaces-Video anhand Metadaten aufgenommen; direkter Videoabruf fehlgeschlagen, kein Transkript-/Befehlsaudit. Jüngere 24/7-VPS-Fundstelle als Kandidat ohne Übernahme erfasst. [Quellenpflege](../docs/QUELLENPFLEGE-de.md).
- Datierte GitHub-Ankündigung vom 29.01.2026 zur damaligen Enterprise-Datenresidenz-Preview eingeordnet; kein daraus erfundener heutiger Produktstatus oder neuer Gratis-VPS.

## Laufende Pflege

Neun Wissensquellen sind getrennt vom unverändert 56 Einträge umfassenden Angebotsbestand erfasst. Der Monitor beobachtet bekannte Wissens-/Anbieterquellen; der aktualisierte Wochenauftrag recherchiert zusätzlich neue Fundstellen. Strukturprüfer und Regressionstests prüfen Evidenzfelder und Übernahmegrenzen. Der Auftrag darf seine ausführbaren Skripte und seinen Scheduler weiterhin nicht selbst verändern.

Der vorhandene Windows-Task `Free-VPS-Wochenpflege` wurde am 21.11.2026 lesend als `Ready` bestätigt. Nächster Termin laut Task Scheduler: **23.11.2026, 09:00 Uhr, Europe/Berlin**. Letzter Laufzeitwert entspricht keinem bereits beobachteten erfolgreichen Wochenlauf. Kein Doppeljob angelegt; keine automatische Veröffentlichung. Rechner, Benutzeranmeldung, Netzwerk und Codex-Nutzung bleiben Voraussetzungen.

## ToS-Einordnung und Grenzen

Die Ergänzung enthält ausschließlich legitime Projektentwicklung, öffentliche Recherche und einen Verwaltungsentwurf für eigene Infrastruktur. Keine GitHub-Dauer-VPS-Workflows, Keepalives, Reverse-Tunnel, Mining-/Missbrauchsfunktionen oder Quoten-/Accountumgehungen ergänzt. Keine Providerregistrierung, Bestellung, Cloudressource, Secretübergabe, Installation oder Dienste gestartet. Der optionale Dev-Container wurde nicht gestartet; dessen Image-Tag ist veränderlich und noch nicht durch einen verifizierten Digest gepinnt. Das ist kein Nachweis bitgenauer Builds oder einer Sicherheits-Sandbox.

Die redaktionelle Konformitätsbewertung ist keine Garantie gegen eine GitHub-Maßnahme. Struktur-/Offlineprüfungen belegen weder die Richtigkeit jeder externen Behauptung noch eine funktionierende VM, ein Dashboard, einen Restore oder einen künftig erfolgreichen Codex-Wochenlauf.

## Prüfung dieser Iteration

- `node --test tests/wissensquellen-de.test.mjs`: **5 Tests bestanden**, einschließlich blockierter Kandidatenübernahme, fehlender Prüfung, Metadatenbegrenzung, ungültiger Daten/URLs/Pfade und veralteter Evidenz.
- `node scripts/katalog-de.mjs`: **56 Angebote** und Regelmatrix neu erzeugt; nur zwei GitHub-Regelkarten inhaltlich verändert.
- `node scripts/pruefen-de.mjs`: Anbieterfelder, **9 Wissensquellen**, Dokumentziele, lokale Markdownlinks und **Originalhashes erfolgreich geprüft**.
- JavaScript-Syntax der geänderten Prüf-/Monitor-/Validierungsdateien sowie PowerShell-Parserprüfung des Wochenhelfers erfolgreich. Dev-Container-Konfiguration und Inventarbeispiel als JSON erfolgreich gelesen.
- `powershell.exe -NoProfile -File scripts/wochenpflege-de.ps1 -CheckOnly`: **erfolgreich**, Codex meldet vorhandene ChatGPT-Anmeldung. Kein KI-Pflegelauf dadurch gestartet.
- `node scripts/quellenmonitor-de.mjs --wissen --max=3`: drei bekannte Wissensquellen erfolgreich mit HTTP 200 beobachtet; [maschineller Abrufbericht](quellenmonitor-2026-11-21T14-09-40.661Z.json). Diese Probe ändert keine fachlichen Prüfzeitstempel und bestätigt allein keine Inhalte.
- `git diff --check`: erfolgreich; neue Dateien zusätzlich lokal auf Format und Verlinkung geprüft.

Provider-Laufzeitprüfungen, ein vollständiger Videoaudit und ein vollständiger KI-Wochenlauf sind nicht Teil dieses Nachweises. Weitere neue Anbieter wurden in dieser fokussierten Referenzintegration nicht als bestätigt hinzugefügt.
