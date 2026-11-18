# Codex-Auftrag: VPS-Anbieter und begrenzte Automaton-Bereitstellung

**Aktualisiert: 18.11.2026.** Diesen gesamten Prompt in einem Codex-Chat im Checkout von `dwhr-pi/OpenClaw-AI_Infrastructure-_Ultimate_Setup` verwenden. Der Prompt wird von der Wochenpflege des ergänzenden Free-VPS-Repositories überprüft und bei belegten Änderungen fortgeschrieben. Sein bloßes Vorhandensein installiert keinen Adapter.

```text
Arbeite im Repository https://github.com/dwhr-pi/OpenClaw-AI_Infrastructure-_Ultimate_Setup/.
Das Ergänzungsrepository ist https://github.com/dwhr-pi/Free-VPS/; lokal liegt es derzeit unter
C:\Users\danie\Documents\GitHub\Free-VPS. Suche den tatsächlich verfügbaren Checkout,
statt einen vorhandenen fremden Ordner zu überschreiben. Verwende dessen aktuelle
data/anbieter-de.json sowie deutsche Anbieter-, Regel- und Einrichtungsdokumentation.
Lies vor Änderungen lokale AGENTS.md-Dateien und vorhandene Installations-/Betriebsrichtlinien.

Ziel: Eine überprüfbare, datenerhaltende Integration entwickeln, mit der OpenClaw bzw.
ein gesonderter begrenzter Adapter geeignete VPS-Angebote auswählen, planen und nach
gültiger Autorisierung über offizielle Provider-APIs und SSH einrichten kann. Bestehende
Conway-Automaton-Sperren nicht stillschweigend entfernen. Cloudkonto-Eröffnung,
VM-Provisionierung und Serverkonfiguration sind getrennte Fähigkeiten.

1. Zuerst aktuellen Iststand belegen
Prüfe docs/tools/automaton.md, tools/automaton/review.py,
config/automaton.policy.example.json, scripts/tools/helpers/automaton_common.sh,
ansible/vps_bootstrap.yml, docs/INSTALLATION_POLICY.md, docs/GITOPS_SMALL_VPS.md
und den vorhandenen GitOps-/Releasepfad. Erfasse Commit, Funktionen und echte Tests.
Am 18.11.2026 erlaubte der Wrapper nur Build/Status/Doctor/Deaktivierung;
Runtime, Init und Provisionierung waren gesperrt. Der Offline-Prüfer war keine
Ausführungsbrücke; eine Policy-JSON war kein Upstream-Sandboxschalter. Prüfe, was
sich inzwischen geändert hat, und korrigiere den Plan anhand der tatsächlichen Quellen.

2. Anbieterwissen aktuell einlesen und erweitern
Beziehe kostenlose und günstige Anbieter weltweit ein, ohne Vollständigkeit oder
Gratisverfügbarkeit zu behaupten. Bestätigte VM-Angebote von LXC-/OpenVZ-Containern,
App-Hosting, Shared-/Shell-Accounts, CI-Runnern, Trials, Geld-zurück-Angeboten,
Brokerfinanzierung und unbestätigten Marketingseiten trennen. Quellen zuerst beim
Anbieter, danach konkrete unabhängige Erfahrungen suchen. Verfügbarkeit nur als
beobachtet/dokumentiert markieren, niemals als erfolgreich gebucht erfinden.
Je Angebot: Prüfdatum, Regionen, Landesberechtigung, CPU-Anteil/Architektur, RAM,
Disk/IOPS, OS, Root/Kernel/cgroups/TUN, GPU, IPv4/IPv6/NAT/Ports/UDP,
Trafficvolumen und Zählrichtung, Portgeschwindigkeit/Fair Use/Drosselung,
Einrichtungsgebühr/Steuer/Mindestlaufzeit/Verlängerung/Egress/Backups/SLA,
Karte/Kaution/Telefon/KYC/MFA/CAPTCHA, Mehrfachkonten, API-/SSH-Fähigkeiten,
Mining, KI-Client/Inferenz/Training, Krypto-Nodes/Validatoren, private Trading-Bots,
öffentliche Tradingplattform, gewerbliche Nutzung und weitere AUP-Regeln erfassen.
Nicht belegt bedeutet weder erlaubt noch verboten. Kritische ungeklärte Bedingungen
blockieren nur den betreffenden Einsatzzweck, nicht die gesamte Dokumentationsarbeit.
Bei widersprüchlichen Quellen beide nennen; Kosten nicht aus alten Affiliatevideos übernehmen.

3. Registrierungsfähigkeiten ehrlich modellieren
Nutze Zustände wie supported_official_api, existing_account_required,
human_action_required, unavailable, terms_unclear und unsupported.
Eine VM-API ist kein Nutzerregistrierungs-API. Vollautonome Registrierung erst als
unterstützt kennzeichnen, wenn der Anbieter gerade diesen Weg ausdrücklich erlaubt
und ein passender Adapter tatsächlich getestet ist. Andernfalls Unterlagen vorbereiten
und an der konkret nötigen menschlichen Aktion anhalten: Vertragsidentität, Mail,
Telefon, Karte, KYC, MFA, CAPTCHA, Studenten- oder Communitynachweis.
Keine CAPTCHA-/KYC-Umgehung, Identitätserfindung, Wegwerfaccounts, Accountrotation,
Quotenvervielfachung, Schein-Forumaktivität oder versteckte Werbe-/Keepalive-Schleifen.
Mehrere legitime Nodes möglichst in einem Konto oder über verschiedene zulässige
Provider bereitstellen; ein Cluster macht verbotene Mehrfachkonten nicht zulässig.

4. Eigenständigen Adaptervertrag implementieren
Vorhandene APIs/SDKs bevorzugen. Zunächst nur für geeignete dokumentierte Anbieter
(z. B. OCI, GCP oder einen günstigen Bezahlprovider) feste typisierte Adapter bauen;
keine generische LLM-Shell und keine Browserklicks als angeblich stabile Signup-API.
Unterstütze plan/validate, ausdrücklich autorisiertes provision, status, configure,
verify und eine nicht destruktive Vorschau für teardown. CLI-/Dateinamen bei Bedarf neu
anlegen und klar als neue Funktion dokumentieren, nicht als schon vorhanden ausgeben.
Jeder Plan enthält exakten Provider/Kontoreferenz/Region/SKU/OS-Architektur, Preise,
Laufzeit, Zusatzressourcen und Nutzungstyp. Standardbudget null, keine Ressourcen
bei ungeklärtem Preis; für bezahlte Nutzung einen ausdrücklich gesetzten Betrag und
Zeitumfang technisch durchsetzen. Warnbudget ist keine harte Kostensperre.
Keine Wallet-, Handels- oder Cloud-Adminschlüssel im Repository, Prompt oder Log.
Nur externe Secretreferenzen, minimal nötige Rechte, feste Befehle, Prozess-/Zeitlimits,
wenige begrenzte Retries und Idempotenzschlüssel verwenden. Bei Providerfehlern keine
erneute kostenpflichtige VM anlegen, ohne bisherigen Zustand zu klären. Eigene
Ressourcen markieren und Besitz vor Wartung/Löschung prüfen. Kein automatisches
Löschen fremder Server/Volumes/IPs; keine destruktiven Recovery-Versuche.
Bestehende gültige, auf Scope und Budget begrenzte Betreiberautorisierung wiederverwenden;
nicht bei jedem idempotenten Folgelauf dieselbe Zustimmung verlangen. Fehlende
Provider-/Personenverifikation kann diese Autorisierung nicht ersetzen.

5. Einrichtung in vorhandene native Pfade integrieren
Geprüfte Git-Quellen und signierte/gehashte Artefakte gemäß aktuellem Repositoryvertrag,
keine Docker-Engine-/Compose-Neuinstallation und kein Docker-Fallback. Bestehende
Container und Benutzerdaten erhalten. CRI/containerd für ausdrücklich gewähltes K3s
gesondert behandeln. Frische dedizierte Hosts über vorhandenes Ansible vorbereiten;
Host-Key-Pinning, getrennte Administration, zweiter getesteter SSH-Zugang, restriktive
Firewall, Sicherheitsupdates, DNS/Zeit und Neustart prüfen. Ansible-Check und zweiter
unveränderter Lauf; keine globale Firewall-/SSH-Änderung ohne getesteten Recoverypfad.
K3s nur bei ausreichenden Kernen/RAM/SSD, unterstützten Kernelrechten und passender
Architektur. Keine 192-MB-Container oder CI-Jobs zur Control Plane erklären. Private
WireGuard-Transportwege, MTU, NAT/UDP, CNI, APIzugang und Latenz vor Join prüfen.
Keine etcd-Mehrheitsgruppe oder verteilten Datenspeicher über unzuverlässige globale
Gratisnodes als Standard. Lokale GPU-Worker für Modelle bevorzugen. Kein automatischer
Modell-, Mining-, Broker-/Börsen-, Live-Order- oder Automaton-Walletstart durch diesen Auftrag.

6. Einrichtungshilfen und Videos prüfen
Neue GitHub-Werkzeuge nach Herkunft, Lizenz, Wartung, Pins, Privilegien, Architektur,
Kostenwirkung und Kompatibilität mit dem nativen Installationsweg beurteilen.
https://github.com/dwhr-pi/github-vps und
https://github.com/dwhr-pi/FreeVPS_by_Github-Action immer verlinken, mit korrekten
Codespaces-/Actions-Grenzen; keine Anleitung zum allgemeinen Runner-Dauerhosting.
YouTube nach hilfreichen Registrierungs-, IPv6/NAT-, WireGuard-, Ansible- und K3s-
Erklärungen durchsuchen. Titel/Kanal/Datum/URL und konkret prüfbare Idee aufnehmen;
bei fehlendem Transkript nicht behaupten, das ganze Video oder Befehle geprüft zu haben.
Aktuelle Verträge und Dokumentation haben Vorrang vor Lifetime-/Mining-/GPU-Versprechen.

7. Tests und Dokumentation
Offline testen: Pflichtfelder und Staleness, AUP-/Budgetentscheidungen, blockierte
Registrierungsschritte, Preiswidersprüche, Providerzeitouts/429, Wiederaufnahme ohne
Doppelbuchung, Secretredaktion, falscher Host-Key, fehlende Kernelrechte und
datenerhaltende Rollbackgrenzen. Gefälschte Providerantworten nie als Live-Erfolg ausgeben.
Reale Konto-/Kosten-/SSH-/VPN-/Clusterprüfungen ausschließlich für bereits autorisierte
konkrete Ziele; fehlt ein solches Ziel, Mocks und klare offene Abnahme liefern.
Deutsch dokumentieren: Fähigkeiten pro Provider, Schritte ab Registrierung, nötige
Menschenaktionen, Nachweise und offene Fragen. Originale erhalten und Änderungen
reviewbar halten. Keine pauschale Produktionsfreigabe aus grünen Offline-Tests.

8. Wöchentliche Pflege im Hauptprojekt ergänzen
Bestehenden Scheduler zuerst prüfen, Doppeljobs vermeiden. Ein wöchentlicher Recherchejob
soll Anbieter, günstige Preise, AUP, Mining/KI/Krypto/Trading, Signup/APIs, Erfahrungen,
YouTube und Setupänderungen neu prüfen, neue Anbieter ergänzen und diesen Prompt
aktualisieren. Abrufdatum und inhaltliches Prüfdatum getrennt speichern. Ein HTTP-200
oder Hashwechsel bestätigt keine Tarif-/Nutzungserlaubnis. Bei fehlendem Zugang die
letzte Evidenz erhalten und als veraltet/ungeprüft markieren. Kein wöchentlicher
automatischer Signup, Kauf, Cluster-Apply, Mining- oder Live-Tradinglauf.
Rechercheänderungen und Adaptercode getrennt halten; wöchentliche Forschung darf
keine Betriebsfreigaben erweitern. Lokale Pflege oder PR-Entwurf; keine Veröffentlichung,
kein Push und keine Nachricht an Dritte ohne entsprechenden Auftrag.

Lieferung: implementierte lokale Änderungen, kurze Fähigkeitsmatrix, deutsche Anleitung,
Quellen mit Datum, sinnvolle Testergebnisse und präzise verbleibende Menschenaktionen.
Nicht beim Plan stehenbleiben: autorisierte, lokal überprüfbare Implementierung fertigstellen.
Aktuelle Provideraccounts, Geldflüsse und Produktionssysteme bleiben bis zum konkreten
betriebsbezogenen Auftrag unberührt.
```
