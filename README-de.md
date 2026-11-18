# Free VPS und günstige Server für OpenClaw

**Recherche: 18.11.2026.** Diese Ergänzung vergleicht 56 Angebote/Fundstellen weltweit: echte VM-Freikontingente, kleine Community-VPS, unbestätigte Kandidaten, Testguthaben, günstige Bezahlserver und klar abgegrenzte Alternativen. Das sind **keine 56 bestätigten dauerhaft kostenlosen VPS**. Eine vollständige Erfassung jedes weltweiten Anbieters lässt sich nicht garantieren. Freie Kapazität, Länderberechtigung und Bedingungen können sich ändern.

## Direkt zu den Ergebnissen

- [Anbieterkatalog mit Registrierung, Setup, Kosten, Karte und Erfahrungen](docs/ANBIETER-de.md)
- [Mining, KI, Krypto, Trading und Traffic je Angebot](docs/NUTZUNGSREGELN-de.md)
- [Gemeinsame Einrichtung ab SSH-Zugang](docs/EINRICHTUNG-de.md)
- [OpenClaw, Automaton und Kubernetes über Anbietergrenzen](docs/OPENCLAW-INTEGRATION-de.md)
- [Codex-Prompt für das OpenClaw-Repository](prompts/CODEX-OPENCLAW-VPS-de.md)
- [Wöchentliche Pflege und ihr Betriebsnachweis](docs/AKTUALISIERUNG-de.md)
- [GitHub-Listen und Setup-Werkzeuge](docs/GITHUB-WERKZEUGE-de.md)
- [YouTube: Videos, Prüfung und praktische Ideen](docs/YOUTUBE-de.md)
- [Nachprüfbare Erfahrungen und Bewertungsmethode](docs/ERFAHRUNGEN-de.md)
- [Überarbeitete Fundsammlung](1-de.md), [weitere interessante Links](interessante-de.md)

Die maschinenlesbare Grundlage ist [data/anbieter-de.json](data/anbieter-de.json). Jede Karte enthält Ressourcen, Standort, Karte/Identitätsprüfung, Folgekosten, Verlängerung, Traffic, Port, IP/NAT, GPU, Kubernetes, mehrere Konten, Agentenregistrierung, Mining, KI, Krypto, Validatoren, Trading, gewerbliche Nutzung, Regeln, Backups und Quellen. Nicht öffentlich bestätigte Angaben bleiben ausdrücklich offen.

## Was für dieses Setup tatsächlich passt

Für einen kleinen dauerhaften Cloud-Koordinator kommen insbesondere Oracle Always Free (bei erfolgreicher Registrierung/Kapazität) oder ein ausreichend großer günstiger Bezahl-VPS in Betracht. Community-Angebote wie FreeVPS.org und FOSSVPS sind Alternativen mit eigenen Bewerbungs-, Nutzungs- und Bestandsbedingungen. 192-MB-Container, Shared-Webhosting und CI-Runner ersetzen keine Kubernetes-Control-Plane.

Das ergänzte Hauptprojekt ist [OpenClaw-AI_Infrastructure-_Ultimate_Setup](https://github.com/dwhr-pi/OpenClaw-AI_Infrastructure-_Ultimate_Setup/). Seine Architektur sieht Cloud-Koordination, private Verbindungen und lokale GPU-Arbeit vor. Die hier ausgewertete Fassung verlangt native Installation aus geprüften Quellen; keine neue Docker-/Compose-Installation als Ausweichweg. Kubernetes nutzt seine CRI-Laufzeit gesondert. [Installationsrichtlinie](https://github.com/dwhr-pi/OpenClaw-AI_Infrastructure-_Ultimate_Setup/blob/main/docs/INSTALLATION_POLICY.md)

**Automaton kann derzeit nicht einfach bei allen Hostern selbst Konten anlegen und VPS installieren.** Im geprüften Setup sind Runtime/Provisionierung gesperrt; ein allgemeiner Provideradapter fehlt. Nach legitimer Einrichtung eines Kontos können offizielle APIs, cloud-init und SSH/Ansible die technische Bereitstellung weitgehend automatisieren. Der [Codex-Prompt](prompts/CODEX-OPENCLAW-VPS-de.md) beschreibt dafür einen prüfbaren Ausbau und wird in die Wochenpflege einbezogen.

## Wichtige Korrekturen gegenüber den Originalen

- Oracle dokumentiert für Always-Free-Tenancies aktuell 2 A1-OCPU/12 GB statt der verbreiteten alten 4/24-Angabe. PAYG, bestehende Konten und tatsächliche Quoten getrennt prüfen. [OCI-Dokumentation](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)
- Neue AWS-Konten haben den kreditbasierten Free Plan bis sechs Monate; die alte pauschale 12-Monats-EC2-Beschreibung ist für neue Konten überholt. [AWS-Pläne](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html)
- IONOS und dogado beschreiben Geld-zurück-Angebote. Das ist ein kostenpflichtiger Vertrag mit Erstattungsbedingungen, kein bedingungsloser Gratisserver.
- Die ursprüngliche VPSWala-Adresse leitete beim Abruf zu einem Kamatera-Affiliateziel; sie wird nicht als weiterer eigener Gratisanbieter gezählt.
- GitHub Codespaces hat Kontingente, Idle-Stopp und Speicherabrechnung. GitHub Actions ist für projektbezogene CI vorgesehen. Beide sind keine zugesicherten Lifetime-VPS.

Die gewünschten Verweise bleiben gut sichtbar: [dwhr-pi/github-vps](https://github.com/dwhr-pi/github-vps) und [dwhr-pi/FreeVPS_by_Github-Action](https://github.com/dwhr-pi/FreeVPS_by_Github-Action). Ihre Anleitungen sind gegen aktuelle GitHub-Regeln zu prüfen, bevor Workflows gestartet werden.

## Originalschutz und Nachweise

Die ursprünglichen drei Dateien wurden nur umbenannt: `README-en.md`, `1-en.md`, `interessante-en.md`. Inhalt und SHA-256 stehen im [Originalmanifest](data/originale-manifest.json). Alte, unzutreffende Werbeaussagen bleiben ausschließlich als historische Quelle erhalten. Die deutschen Fassungen korrigieren die Einordnung.

`node scripts/pruefen-de.mjs` prüft Archivhashes, Datenstruktur, relative Dokumentlinks und die erzeugten Katalogdateien. Öffentliche Recherche ersetzt keine tatsächliche Registrierung, Server-/Lastprobe oder Wiederherstellung. Es wurden keine Providerkonten eröffnet und keine Cloudserver bestellt.
