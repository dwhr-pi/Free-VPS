# YouTube: Videos und Ideen für das eigene Setup

Recherche: 18.11.2026. YouTube liefert anschauliche Erklärungen, aber keine verbindlichen heutigen Gratis-, Mining- oder Registrierungsbedingungen. Für die folgenden Videos wurden öffentliche Suchmetadaten bzw. verlinkte Lernmaterialien geprüft; kein vollständiges Video-/Transkript- oder Befehlsaudit wird behauptet. Die Originalvideos bleiben in [1-de.md](../1-de.md) als gesonderte Fundliste erhalten.

| Video | Herkunft / Alter | Nutzen und Grenze |
| --- | --- | --- |
| [Getting Started with Oracle Cloud Free Tier](https://www.youtube.com/watch?v=YnsN52hB8EY) | Suchindex nennt Oracle Developers, verifizierter Kanal; ungefähr 2023, exaktes Datum hier nicht separat bestätigt | Offizielle Einführung als Orientierung. Aktuelle Formen, Kartenprüfung und Kontingente gegen OCI-Dokumentation prüfen |
| [Kubernetes Tutorial for Beginners – vollständiger Kurs](https://www.youtube.com/watch?v=X48VuDVv0do) | TechWorld with Nana; älterer Kurs, Suchindex etwa 2020 | Grundlagen für Nodes, Pods, Services und YAML. Kein Gratis-VPS-Nachweis; Versions-/Installationsbefehle nicht ungeprüft übernehmen |
| [How I Got a 100% Free Lifetime Server (And You Can Too!)](https://www.youtube.com/watch?v=qVwo2P4uCZM) | Schon im Original verlinkt; Suchindex beschreibt 4 CPUs/24 GB, Kanal/exaktes Datum nicht separat validiert | Beispiel für ein heute kritisch zu prüfendes Gratisversprechen. Aktuelle OCI-Dokumentation nennt für Always-Free-Tenancies 2/12; „Lifetime“ ist keine Garantie |

Für weitere Videoanleitungen gibt es die [eigene Kubernetes-Lernseite von TechWorld with Nana](https://www.techworld-with-nana.com/guides/topics/kubernetes) und deren [Themenübersicht mit Ansible-/GitOps-Inhalten](https://www.techworld-with-nana.com/guides). Diese Quellen erläutern technische Konzepte; sie ersetzen keinen geprüften nativen OpenClaw-Installationspfad.

## Neue Einordnung vom 21.11.2026

[How to Deploy a GitHub Codespace](https://www.youtube.com/watch?v=_01iCF9sO1c), Kanal **GitHub**, veröffentlicht **26.03.2024** laut öffentlichem Suchindex: geeignete offizielle Orientierung zum Anlegen einer Entwicklungsumgebung. Titel, Kanal, Datum und Beschreibung sind Metadaten; direkter Videoabruf scheiterte, ein Transkript-/Befehlsaudit fand nicht statt. Konkrete Einrichtung und Kontingente mit der [heutigen GitHub-Dokumentation](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces) abgleichen. Aus „Deploy“ im Titel folgt kein erlaubtes Produktionshosting in Codespaces.

Die Suche am 21.11.2026 fand auch aktuelle 24/7-/GPU-Versprechen. Eine solche Fundstelle bleibt im [Quellenregister](../data/wissensquellen-de.json) als Kandidat ohne Übernahme. Ungeklärte Infrastruktur und Bedingungen reichen nicht für eine Gratis-VPS-Empfehlung. [Auswahl und Prüfmethode](QUELLENPFLEGE-de.md).

## Praktische Ideen für dieses Repository

Die folgenden Vorschläge sind eigene Ableitungen für das Setup, keine Behauptung über ungesehene Videoinhalte:

1. **Kleiner Cloud-Koordinator, lokale GPU:** VPS hält nur eine schmale Steuer-/Statusschicht; Modelle auf der vorhandenen lokalen GPU. Private Verbindung und explizite Zugriffsrechte zuerst, statt ein großes KI-Modell in einen 1-GB-VPS zu pressen.
2. **IPv6-/NAT-Labor:** SSH über zugewiesenen NAT-Port, IPv6-Erreichbarkeit und erlaubte UDP-Verbindung getrennt dokumentieren. Ein nicht erreichbarer öffentlicher Port wird nicht durch einen zusätzlichen Fakeaccount gelöst.
3. **Einrichtung reproduzierbar machen:** Einen erlaubten kleinen Dienst auf einer frischen VM per geprüftem cloud-init/Ansible einrichten, einen zweiten unveränderten Lauf und Wiederherstellung zeigen. Das ist ein stärkerer Nachweis als ein „success“-Banner.
4. **Paper-Trading statt Schlüsselweitergabe:** Öffentliches Kursmaterial oder synthetische Daten lokal analysieren, noch keine Börsenkeys/Orders. Ein VPS mit erlaubter Analyse ist nicht automatisch für Mining, Validatoren oder einen öffentlichen Broker freigegeben.
5. **Vergänglichen Worker testen:** Einen genehmigten Laborworker über privates Netz verbinden und seinen Ausfall simulieren. Nutzdaten nicht ausschließlich auf einem verlängerungspflichtigen Gratis-Node ablegen.
6. **Tarifänderungsbericht:** Wöchentlich neue AUP-/Preis-/Kapazitätsquellen und Unterschiede zeigen. HTTP-Erreichbarkeit und echte inhaltliche Prüfung getrennt ausweisen.

## Prüfregeln für neue Videos

Upload-/Aktualisierungsdatum, Kanal, offizieller Anbieterbeleg, aktueller Tarif und Weiterleitungsziel feststellen. Skripte aus Videobeschreibungen vor Ausführung lesen; keine ungeprüften Root-Einzeiler, Wallets oder Cloud-Admin-Keys. Bei „unlimited“, „72 cores“, „free GPU forever“, Multiaccount- oder Runner-Keepalive-Tricks zuerst die zugrundeliegende Ressource und deren Regeln prüfen. Sprache und Untertitel können je Video abweichen; sämtliche Einordnungen hier sind deutsch.
