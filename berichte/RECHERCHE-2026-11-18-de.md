# Recherche- und Umsetzungsstand vom 18.11.2026

## Ergebnis

56 Angebote/Fundstellen erfasst: acht dauerhafte Freimodelle/Community-Funde, acht unbestätigte Kandidaten, elf Tests/Guthaben, zwei Rückerstattungsangebote, zwölf Bezahlangebote, acht Entwicklungs-/Hostingalternativen, vier brokergebundene Angebote sowie drei historische/ausgeschlossene Funde. Die Kategorien belegen keine garantierte heutige Zuteilung. Nicht alle Einträge sind unterschiedliche Firmen; Produktvarianten wie Azure Students oder OVH Public Cloud/VPS sind getrennt ausgewiesen.

Quellen und Anmeldeschritte stehen im [Katalog](../docs/ANBIETER-de.md). Mining, KI, Krypto, Validatoren, Trading und öffentliche Plattformen werden getrennt bewertet. Für viele kleinere Anbieter fehlen belastbare aktuelle unabhängige Langzeitberichte; das bleibt sichtbar. Nicht veröffentlichte Zahlen zu Traffic, Bandbreite, API-Registrierung oder Nutzungsrechten wurden nicht erfunden.

## Wesentliche Befunde

- Aktuelle OCI-Dokumentation reduziert die pauschale alte A1-Angabe für Always-Free-Tenancies auf 2 OCPU/12 GB; tatsächliche Kontingente/PAYG separat betrachten.
- Neue AWS-Free-Konten sind kreditbasiert und befristet. Kosten-/Miningregeln haben Vorrang vor älteren 12-Monats-Listen.
- FOSSVPS verlangt laut aktueller Betriebsmitteilung erneute Bewerbung; Sponsorfristen und Standortänderungen sind relevant.
- FreeMach enthält alte Laufzeitangaben, FreeLiVPS zeigt eine Domain-Auktionsseite, VPSWala leitete auf ein Affiliateziel weiter.
- VPSFree.io enthält widersprüchliche Produkt-/Terms-Angaben und rechtliche Platzhalter. AlaVPS, GratisVPS und FreeVPS.edu.pl bleiben angesichts fehlender Liefernachweise bzw. konkreter Beschwerden ohne positive Empfehlung.
- OVH beschreibt PoS-/RPC-/Web3-Anwendungen ausdrücklich, schließt aber PoW/Mining aus. AWS dokumentiert EC2-Blockchain-/Exchange-Architekturen; daraus folgt keine pauschale Gratis-/Rechtsfreigabe.
- Hetzner und Contabo-VPS untersagen Mining; DigitalOcean und GCP verlangen hierfür schriftliche Erlaubnis bzw. verbieten es im Trial. Bei übrigen Angeboten bleibt die konkret nicht belegte Regel offen.

## OpenClaw und Automaton

Die gelesenen Dateistände sind im [OpenClaw-Nachweis](../data/openclaw-nachweis-de.json) festgehalten. Automaton ist im geprüften Setup ein optionaler Quellbuild plus separater Offline-Prüfer, kein fertiger universeller Cloud-Signup-/Provisionierungsadapter. Runtime-/Provisionierungssperren wurden nicht geändert. Das Hauptrepository wurde nur gelesen.

Der [deutsche Codex-Prompt](../prompts/CODEX-OPENCLAW-VPS-de.md) beschreibt den prüfbaren Ausbau: Anbieterwissen, legitime Konto-/Verifikationswege, API-/SSH-Adapter, native Installation, Kosten- und Ressourcenprüfung, private Clusterverbindung und Tests. Die wöchentliche Pflege berücksichtigt neue Anbieter und Anleitungen und hält diesen Prompt mit dem tatsächlich belegten Hauptprojektstand konsistent.

## Originale

Alle drei vorhandenen Dateien wurden bytegenau unter den Namen `README-en.md`, `1-en.md`, `interessante-en.md` erhalten. [SHA-256-Manifest](../data/originale-manifest.json). Neue deutsche Fassungen und ein deutscher Einstieg wurden ergänzt. Die ursprünglichen Notizen waren teilweise bereits deutsch; das Archiv wurde nicht nachträglich übersetzt oder inhaltlich korrigiert.

## Ausgeführte lokale Prüfungen

Katalog- und Regelmatrix-Erzeugung; Prüfung der Originalhashes, Pflichtfelder, eindeutigen IDs, Datums-/Quellenformate und relativen Dokumentlinks; JavaScript-Syntax; PowerShell-Syntax; Codex-Anmeldestatus und `-CheckOnly`. Die Quellenmonitorprobe las drei offizielle Oracle-Seiten erfolgreich und speicherte sie ausdrücklich ohne fachliches Prüfkennzeichen. Der Monitor setzte keine Anbieter-Prüfdaten neu.

Die Windows-Aufgabe wurde als `Free-VPS-Wochenpflege` registriert und mit Zustand `Ready` sowie nächstem Lauf am 23.11.2026, 09:00 Uhr, Berlin beobachtet. [Registrierungsnachweis](wochenpflege-status-de.json). Die Aufgabe verwendet den angemeldeten Benutzer, vorhandene Codex-Anmeldung, maximal eine Stunde Laufzeit und einen exklusiven Lock. Sie wurde nicht als vollständiger KI-Wochenlauf gestartet; dieser zukünftige Ablauf ist noch nicht Ende-zu-Ende nachgewiesen.

## Offene Betriebsnachweise

Keine Providerregistrierung, Zahlung, VM-Zuteilung, SSH-/VPN-/K3s-Installation, Mining-, KI-Trainings-, Trading-, Last- oder Wiederherstellungsprobe bei einem Anbieter durchgeführt. Keine Vollerfassung des weltweiten Marktes, keine pauschale Produktionsfreigabe. Das lokale Repository wurde nicht committet oder gepusht. Ohne laufenden Rechner, Benutzeranmeldung, Internet und verfügbare Codex-Nutzung kann die lokale Wochenpflege nicht recherchieren.
