# GitHub-Listen und Werkzeuge für die Einrichtung

Geprüfte öffentliche Fundstellen vom 18.11.2026. Ein erreichbares Repository oder viele Sterne beweisen weder sichere Skripte noch kostenlose Ressourcen. Vor Nutzung aktuellen Commit, Lizenz, Wartung, Architektur, benötigte Rechte und Kostenwirkung prüfen. Keine dieser Listen ersetzt Anbieterbedingungen.

| Projekt | Wofür es hilft | Grenze für dieses OpenClaw-Setup |
| --- | --- | --- |
| [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) | Große Suchgrundlage für freie Entwicklerdienste | Enthält viele Dienste außerhalb von Root-VPS; Angaben offiziell nachprüfen |
| [build996/actually-free-hosting](https://github.com/build996/actually-free-hosting) | Vergleich von Hostingtypen, Sleep und Ablauf | Suchgrundlage, kein eigener Zuteilungs-/Erfahrungsnachweis |
| [nce/oci-free-cloud-k8s](https://github.com/nce/oci-free-cloud-k8s) | OCI-Infrastruktur und Kubernetes-Beispiel | Aktuelle Kontingente und PAYG-Unterschiede prüfen; fremde GitOps-/Netzarchitektur nicht blind importieren |
| [dorukgezici/k3s-oci-always-free](https://github.com/dorukgezici/k3s-oci-always-free) | OCI/K3s-Beispiel mit aktualisierter 2-OCPU/12-GB-Einordnung | Zusätzliche Tailscale-/Cloudflare-Konten und Recovery-/Storageentscheidungen; kein vorhandener OpenClaw-Adapter |
| [fpetr/oracle-kubernetes-always-free](https://github.com/fpetr/oracle-kubernetes-always-free) | Terraform-Beispiel für OKE | Gelesene Defaults summieren sich auf alte 4 OCPU/24 GB; PVCs können extra kosten. Nicht unverändert als gratis ausführen |
| [alexellis/k3sup](https://github.com/alexellis/k3sup) | K3s auf vorhandenen SSH-Hosts bereitstellen/verbinden | Erstkonto und VM fehlen weiterhin; Installations-/Downloadpfad muss zum Hauptprojekt passen |
| [k3s-io/k3s-ansible](https://github.com/k3s-io/k3s-ansible) | Wiederholbare K3s-Konfiguration mehrerer Hosts | Privilegierte Änderungen; Inventory, Version, Netz und vorhandenen Zustand prüfen |
| [ansible/ansible](https://github.com/ansible/ansible) | Hostkonfiguration mit Inventar und Playbooks | Vorhandenen OpenClaw-Bootstrap bevorzugen; schützt nicht automatisch vor falschen Tasks |
| [canonical/cloud-init](https://github.com/canonical/cloud-init) | Erstkonfiguration unterstützter Cloudimages | Provider-/Imageunterstützung nötig; keine Nutzeregistrierung; keine Secrets in öffentlicher User-Data |
| [opentofu/opentofu](https://github.com/opentofu/opentofu) | Deklarative Infrastruktur mit Provider-APIs | State kann Secrets enthalten; Plan kann reale Kosten auslösen; keine Gratisgarantie |
| [elpy1/vps-secure-baseline](https://github.com/elpy1/vps-secure-baseline) | Ansible-Härtungsbeispiel für frische Linuxhosts | Kein pauschaler Einsatz auf bestehenden Hosts; SSH/Firewall/Updates können Zugriff verändern |
| [kubernetes-sigs/headlamp](https://github.com/kubernetes-sigs/headlamp) | Grafische Sicht auf vorhandene Cluster | Verwaltungsoberfläche, kein Hoster-/Kontoregistrierungsdienst; privat authentifiziert betreiben |
| [kubernetes-sigs/kind](https://github.com/kubernetes-sigs/kind) | Lokale Kubernetes-Labortests | Containerbasierter Laborweg, kein Gratis-Cloudanbieter und kein nativer Standardpfad des Hauptprojekts |
| [k3d-io/k3d](https://github.com/k3d-io/k3d) | Lokales K3s-Labor in Containern | Dockerbasierter Weg; deshalb keine Standardempfehlung für die native Hauptprojektinstallation |
| [dwhr-pi/github-vps](https://github.com/dwhr-pi/github-vps) | Codespaces-bezogene Entwicklungsanleitung | Quoten, Idle-Stopp und Speicher; kein kostenloser Lifetime-Produktionsserver |
| [dwhr-pi/FreeVPS_by_Github-Action](https://github.com/dwhr-pi/FreeVPS_by_Github-Action) | CI-/Runner-Skripte als technische Fundstelle | Nur zulässige projektbezogene CI nutzen; kein allgemeines Dauerhosting auf GitHub-Runnern |

## Empfohlene Reihenfolge für einen eigenen geprüften Ausbau

1. Menschliches Konto/Berechtigung und Anbieterbedingungen klären.
2. Bestehende offizielle API-/CLI-Zugangsdaten mit minimalen Rechten bereitstellen.
3. Infrastrukturplan mit Preis-, Region-, Quoten- und Ressourcenprüfung erstellen.
4. Providerseitig SSH-Key und gegebenenfalls überprüfte cloud-init-Daten setzen.
5. Vorhandenen OpenClaw-Ansible-/Releasepfad idempotent anwenden und Zugang/Restore testen.
6. Optional privates WireGuard und K3s/GitOps ergänzen, falls Tarif und Ressourcen passen.

Tools automatisieren Teilaufgaben. Keine der hier geprüften Fundstellen belegt eine allgemeine erlaubte vollautonome Registrierung bei allen Gratisanbietern.

[GitHub-Nutzungsgrenzen](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features) und [Codespaces-Kontingente](https://docs.github.com/en/billing/reference/product-usage-included) haben Vorrang vor Lifetime-Titeln. Verlinkte Skripte wurden nicht auf einem echten VPS ausgeführt.
