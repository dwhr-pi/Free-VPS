# Referenzen: geprüfte Ideen und ausgeschlossene Methoden

Stand: **21.11.2026**. Es wurde kein fremder Installer ausgeführt und kein Referenzcode kopiert. Die folgenden Konzepte sind eigenständig für das vorhandene Dokumentations-/Node-Projekt ausgearbeitet.

## l0n3m4n/github-vps

Geprüft wurden [Repository-Metadaten und Dateiliste](https://github.com/l0n3m4n/github-vps) sowie [readme.md](https://github.com/l0n3m4n/github-vps/blob/main/readme.md). Die Schreibweise ist klein; ein Abruf von `README.md` ergab 404. Gelesener README-Blob: `54329d427879adfb2abc886a8bfae043da38f636` (Git-Blob-ID, kein Commit-Pin). Die API meldet MIT; eine Codeübernahme wäre dennoch am konkreten Stand samt Lizenz zu prüfen.

**Übernommen:** portable Projektumgebungen, klarer CLI-Pfad, Trennung zwischen ressourcensparender Headless-Arbeit und optionaler GUI sowie sichtbare RAM-/Speichergrenzen. Umsetzung: [Entwicklungsumgebung](ENTWICKLUNGSUMGEBUNG-de.md) und [.devcontainer/devcontainer.json](../.devcontainer/devcontainer.json).

**Ausgeschlossen:** Lifetime-VPS-Positionierung, privilegierte Container als Standard, Root-Passwort-/Tunnel-Anleitungen sowie noVNC-/SSH-Dauerbetrieb auf Codespaces. Die README enthält solche weitergehenden Ansätze; ihre Existenz belegt keine Zulässigkeit. Es werden keine entsprechenden Befehle oder Skripte importiert.

Security-/CTF-Arbeit gehört in ein isoliertes, autorisiertes Labor auf eigener VM/VPS. Ein Dev-Container isoliert nicht automatisch das Netzwerk und ersetzt weder eine Berechtigung noch eine Sandboxprüfung. Die FreeVPS-Standardumgebung enthält keine Pentesting-Werkzeuge.

## hostvpshub/free-vps

Geprüft wurden [Repository-Dateiliste](https://github.com/hostvpshub/free-vps) und [README.md](https://github.com/hostvpshub/free-vps/blob/main/README.md). Gelesener README-Blob: `41200d2bd1658270f864a17ec1c0b0b4e84dc173`.

Die zugängliche Root-Dateiliste enthält **nur die README**. Beschriebene React-/Node-/Express-/PostgreSQL-Komponenten, Compose-Dateien und API-Adapter sind dort nicht als Implementierung verfügbar. Platzhalter wie `example.com` und `your-username` stehen in der Anleitung. Der Text nennt MIT, aber die API meldet keine erkannte Lizenz und die gelesene Dateiliste keine LICENSE-Datei. Daher keine Softwareinstallation, kein Lizenz-/Sicherheitsnachweis und keine Codeübernahme daraus ableiten. Der verlinkte Hostinganbieter ist keine unabhängige Erfahrungsquelle.

**Übernommen:** ein gemeinsames Inventar verschiedener Provider, Status und Ressourcen, Backup-/Restore-Nachweise, Firewallhinweise sowie getrennte Erweiterungsmodule. Umsetzung: [Instanzverwaltung](INSTANZVERWALTUNG-de.md) und [synthetisches Inventarbeispiel](../examples/instanzen.example.json).

Das sind ein Datenentwurf und ein Umsetzungskonzept für FreeVPS, **kein bereits laufendes Dashboard** und keine universelle One-Click-Provisionierung. Bestehende Katalogdaten bleiben in `data/anbieter-de.json`; private Instanzen und Zugangsdaten gehören nicht dort hinein.

## Verbindung zu OpenClaw

FreeVPS bleibt die ergänzende Recherche-/Planungsschicht. Die [Integration](OPENCLAW-INTEGRATION-de.md) und der [Codex-Auftrag](../prompts/CODEX-OPENCLAW-VPS-de.md) trennen Recherche, Kontoeröffnung, VM-API und Serverkonfiguration. Der optionale Dev-Container dient nur der Arbeit an FreeVPS; er ersetzt keine native OpenClaw-Installation und lockert keine Automaton-Sperren.

Die gewünschten Links [dwhr-pi/github-vps](https://github.com/dwhr-pi/github-vps) und [dwhr-pi/FreeVPS_by_Github-Action](https://github.com/dwhr-pi/FreeVPS_by_Github-Action) bleiben als kritisch einzuordnende Fundstellen erhalten. Sie sind keine Empfehlung, dortige VPS-Workflows zu aktivieren. Maßgeblich sind die [Projektgrenzen](GITHUB-KONFORMITAET-de.md).
