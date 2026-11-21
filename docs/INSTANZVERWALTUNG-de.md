# Instanzverwaltung: modularer Ausbau für eigene Server

Stand: **21.11.2026**. Dies ist ein Architektur-/Datenentwurf, angeregt durch die Dashboardbeschreibung von [HostVPSHub](REFERENZEN-de.md). FreeVPS ist derzeit eine recherchierte Dokumentationsbasis mit Quellenmonitor; ein Live-Dashboard, Provideradapter, Backupdienst und automatische Ressourcenmessung sind hier **nicht implementiert**.

## Daten und Grenzen

Der öffentliche Anbieterkatalog beschreibt Angebote, keine privaten Konten oder existierenden Server. [examples/instanzen.example.json](../examples/instanzen.example.json) beschreibt ausschließlich eine erfundene lokale Labor-VM. Eine echte Kopie außerhalb des Repositorys oder unter dem ignorierten `.pflege/instanzen.private.json` halten; keine Konto-IDs, Endpunkte oder Secrets veröffentlichen. `provider_api_secret_ref` ist höchstens eine Referenz auf einen externen Secret-Store, niemals der Schlüssel selbst. Auch private Exporte/Backups können sensible Metadaten enthalten.

`null` bedeutet unbekannt oder nicht gemessen, niemals null Verbrauch, unbegrenztes Budget oder gesunden Zustand. Beispielressourcen sind keine Mindestgarantie für Kubernetes. Kapazität, Nutzung und Tarifgrenze getrennt anzeigen. `budget_monat_eur: 0` untersagt neue kostenpflichtige Ressourcen; eine UI-Zahl allein setzt diese Grenze beim Hoster nicht technisch durch.

## Getrennte Module

| Modul | Vertrag und sicherer Standard | Abnahme vor echtem Betrieb |
| --- | --- | --- |
| Inventar | Stabile interne ID, Provider-/Kontoreferenz, Region, Zweck, Besitz und Vertragsstand; zunächst nur vorhandene Server | Doppelte IDs und unbekannten Besitz ablehnen; keine Instanz aus einem Werbeeintrag erfinden |
| Status / Ressourcen | Lesezugriff über einen expliziten offiziellen API-/SSH-Adapter; Messzeit und Herkunft speichern | CPU-Messintervall, RAM-Metrik und Disk-Mount benennen; veraltete Werte sichtbar als veraltet markieren |
| Netzwerk / Kosten | Monats-Traffic, Zählrichtung, Portgeschwindigkeit, IP/NAT, Fair Use und Zusatzkosten separat | GB/GiB und Mbit/s/Gbit/s unterscheiden; Mess-/Abrechnungsdifferenzen zeigen |
| Backups | Explizite Host-/Datenfreigabe, verschlüsselte externe Kopie, definierte Aufbewahrung | Backupdatum und echter isolierter Restore-Test getrennt; RPO/RTO-Ziel nicht als bestanden melden |
| Sicherheit | Verwaltung privat und authentifiziert; minimale Rollen, Host-Key-Prüfung, Audit ohne Secrets | Firewall und Provider-Sicherheitsgruppe gemeinsam prüfen; zweiter SSH-/Recoveryzugang vor Änderungen |
| Bereitstellung | Getrennter späterer Plan-/Apply-Adapter; kein Signup und kein One-Click-Kauf als Default | Preis, Budget, Idempotenz, Besitz und Providerbedingungen testen; keine Sperren im Hauptprojekt entfernen |

Ein künftiges Dashboard liest nur normalisierte Daten. Es führt keine freien Shelltexte aus JSON, Webseiten oder Video-Titeln aus. Adapter erhalten nur die jeweils nötigen Rechte und feste Operationen mit Zeitlimits. Ein ausgefallener Adapter führt zu `unbekannt`/`veraltet`, nicht zu einer neuen Ersatzbuchung. Monitoring zunächst sparsam, beispielsweise alle fünf Minuten mit Provider-Rate-Limit und begrenzten Wiederholungen; das ist ein Vorschlag, kein aktivierter Job.

## Umsetzung und Backup-/Firewallablauf

1. Bestehenden legitimen Server, Besitzer, Tarif und gewünschten Einsatzzweck erfassen. Keine Accounts oder Kontingente vervielfachen.
2. Nur lesenden Adapter gegen synthetische Antworten testen und dann für einen konkret autorisierten Host prüfen. API-Monitoring ist weder Signup noch eine Bereitstellungsfreigabe.
3. Eine kleine private Übersicht mit Zeitstempeln erstellen. Das HostVPSHub-README liefert dafür Ideen, aber keinen hier installierbaren Backendcode.
4. Vor Wartung Datenumfang, RPO/RTO, unabhängiges Backupziel und Schlüsselzugang bestimmen. Wiederherstellung in einem separaten Testziel prüfen; keine produktiven Volumes überschreiben.
5. Bestehende Firewallregeln lesen, private Verwaltung planen und Recoveryzugang testen. Erst danach ausdrücklich beauftragte Änderungen anwenden; kein globales `flush` und keine vorschnelle SSH-Sperre.
6. Weitere Funktionen jeweils als getrennten Adapter mit Tests und eigener Betriebsfreigabe ergänzen. Der Wochenjob aktualisiert Wissen, niemals diese Infrastruktur.

Für OpenClaw den [vorhandenen Integrationspfad](OPENCLAW-INTEGRATION-de.md) und [Codex-Prompt](../prompts/CODEX-OPENCLAW-VPS-de.md) verwenden. Der separate FreeVPS-Dev-Container wird nicht als Docker-/Compose-Ausweichinstallation in das Hauptprojekt übernommen. Ein GitHub-Runner oder Codespace wird weder als Inventar-VPS noch als produktiver Monitoringhost geführt.
