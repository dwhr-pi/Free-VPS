# Portable Entwicklungsumgebung

Stand: **21.11.2026**. Ziel sind reproduzierbare Arbeitsschritte für Dokumentation und lokale Tests. Kein Server, Tunnel, Scheduler oder Cloudkonto wird durch diese Umgebung gestartet.

## Native CLI als einfachster Weg

1. Eigenen Checkout dieses Repositorys verwenden und `AGENTS.md` lesen. Benötigt werden Git und eine unterstützte Node.js-Version mit eingebautem Test-Runner; die optionale Vorlage verwendet Node 22.
2. Im Repository `node scripts/pruefen-de.mjs` ausführen. Das prüft Archivhashes, Anbieterfelder, Quellenentscheidungen und lokale Links ohne Providerzugriff.
3. Nach Quellenrecherche Daten/Markdown bearbeiten. `node scripts/katalog-de.mjs` erzeugt Anbieter- und Regelmatrix neu.
4. `node --test tests/wissensquellen-de.test.mjs` und erneut `node scripts/pruefen-de.mjs` ausführen. `git diff --check` und den fachlichen Diff ansehen.
5. Ergebnisse lokal prüfen. Kein automatischer Commit, Push, Anbieterlogin oder Infrastruktur-Apply.

Es werden keine npm-Abhängigkeiten benötigt. Die Windows-Wochenpflege benötigt zusätzlich PowerShell und eine funktionierende Codex-CLI-Anmeldung; sie ist im Container nicht automatisch eingerichtet.

## Optional: VS Code Dev-Container

Die [.devcontainer-Vorlage](../.devcontainer/devcontainer.json) nutzt das [offizielle Node-Entwicklungsimage](https://github.com/devcontainers/images/blob/main/src/javascript-node/README.md). Auf einem bereits vorhandenen lokalen Containerhost mit VS Code und Dev-Containers-Erweiterung das Repository öffnen und „Dev Containers: Reopen in Container“ wählen. Alternativ ist ein eigener entsprechend erlaubter VM-/VPS-Entwicklungshost möglich. Dieses Projekt installiert dafür keine Containerlaufzeit.

Die Konfiguration arbeitet als `node`, fordert keine privilegierte Ausführung an, definiert keine Ports und startet beim Einrichten nur die lokale Prüfung. Sie montiert keinen Docker-Socket und enthält keine Cloudschlüssel. Das Upstream-Image enthält Entwicklungswerkzeuge und sudo; diese Vorlage ist keine Sicherheits-Sandbox. Editor-/Hosteinstellungen können zusätzliche Berechtigungen oder Weiterleitungen aktivieren und müssen separat geprüft werden.

Der Tag `22-bookworm` legt Node-Hauptversion und Distribution fest, bleibt aber veränderlich. Für bitgenaue Wiederholung vor einem freigegebenen Build den aktuellen Image-Digest und Werkzeugversionen dokumentieren und das Image auf `@sha256:…` pinnen. Hier wird kein nicht geprüfter Digest erfunden. Ein Containerstart oder Image-Pull wurde in dieser Iteration nicht ausgeführt.

## Headless, GUI und Codespaces

Die CLI ist der ressourcensparende Standard. Der VS-Code-Client bietet die optionale grafische Bearbeitung; eine komplette Remote-Desktop-/noVNC-Installation ist nicht nötig. Für isolierte Security-/CTF-Labore eine eigene autorisierte VM verwenden; keine Scanner im Standardimage.

Codespaces kann diese Konfiguration als reguläre Entwicklungsumgebung verwenden. Vorher eigenes legitimes Konto, Abrechnung, Kontingente und Organisationsrichtlinien prüfen. Innerhalb einer Arbeitssitzung entwickeln/testen, danach normal stoppen und benötigte Änderungen sichern. Keine Keepalive-Schleife, keinen Tunnel und kein produktives Hosting ergänzen. Die [GitHub-Grenzen](GITHUB-KONFORMITAET-de.md) gelten unabhängig von der technischen Startfähigkeit.

Grundlagen: [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) und [GitHub-Projektkonfiguration](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces). Diese Entwicklungsoption gilt für FreeVPS. Für das OpenClaw-Hauptprojekt gilt weiterhin dessen eigener nativer Installationsvertrag.
