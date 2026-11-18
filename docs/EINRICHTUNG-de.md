# Vom Anbieterformular zum eingerichteten Server

Die [Anbieterkarten](ANBIETER-de.md) beschreiben den jeweiligen Anmeldeweg ab der offiziellen Website. Dieser gemeinsame Teil beginnt nach erfolgreicher rechtmäßiger Zuteilung. Er ist eine Anleitung, kein ausgeführter Serverumbau. Fehlende API-/Konto-/Kapazitätsnachweise werden nicht durch erfundene Schritte ersetzt.

## 1. Registrierung und Kosten vor dem Bestellabschluss

1. Vom offiziellen Link der Karte starten. Bei Weiterleitungen den tatsächlichen Vertragspartner feststellen.
2. Land, Namen, Kontakt, Telefonnummer und Berechtigung korrekt angeben. Nur einen legitimen Kontoinhaber einsetzen. E-Mail/MFA, Karte, KYC oder Studentenstatus über den vorgesehenen Weg bestätigen.
3. Den konkreten Tarif unterscheiden: dauerhaftes Freikontingent, manuell verlängerter Community-VPS, einmaliger Trial, Brokerfinanzierung, Geld-zurück-Vertrag oder Bezahlserver.
4. Gesamtbetrag festhalten: Steuer, Einrichtung, IPv4, Disk, Backups, Snapshots, Traffic, Überschreitung und Laufzeit. Budgetwarnungen sind häufig keine Ausgabensperren.
5. Beim Provider die konkrete Nutzung klären: privates WireGuard, KI-Koordination/Inferenz/Training, Krypto-Node, Validator oder Trading. „Root“ bedeutet keine Erlaubnis jeder Last.
6. OS und Architektur wählen. Für das vorhandene OpenClaw-Bootstrap sind frische dedizierte Ubuntu-22.04/24.04-Hosts dokumentiert. ARM64 erfordert passende native Abhängigkeiten und Artefakte. Windows-RDP-/FreeBSD-Hosting fällt nicht darunter.

## 2. SSH-Schlüssel auf dem eigenen Client

Beispiel für PowerShell, Linux oder macOS; existierende Schlüssel nicht überschreiben:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/freevps_lab
```

Eine Passphrase wählen. Nur die öffentliche Datei `freevps_lab.pub` im Anbieterpanel hinterlegen. Private Schlüssel, Recovery-Codes, Cloud-API-Keys und Zahlungsdaten bleiben außerhalb des Repositories. Den Host-Fingerprint über die Providerkonsole oder einen anderen unabhängigen Weg vergleichen; SSH-Host-Key-Prüfung nicht deaktivieren.

In der eigenen SSH-Konfiguration, angepasst an die tatsächliche Zuteilung:

```sshconfig
Host vps-labor
    HostName ERSETZEN_DURCH_ECHTEN_HOST
    User ERSETZEN_DURCH_IMAGE_BENUTZER
    Port 22
    IdentityFile ~/.ssh/freevps_lab
    IdentitiesOnly yes
    StrictHostKeyChecking ask
```

Bei NAT-VPS den tatsächlich zugewiesenen externen SSH-Port setzen; intern kann SSH weiter Port 22 benutzen. Bei IPv6 muss auch der Client oder ein legitimer Transportweg IPv6 unterstützen. Nicht ohne Beleg einen öffentlichen IPv4-Endpunkt versprechen.

## 3. Erst nur lesen und Zugang testen

```bash
ssh vps-labor
uname -m
cat /etc/os-release
id
free -h
df -h
ip -brief address
ss -lntup
```

Die Angaben mit Tarif und Installationsziel vergleichen. Für Systemcontainer zusätzlich Kernel-/cgroup-/TUN-Rechte beim Anbieter klären. Eine erfolgreiche SSH-Sitzung belegt noch keine K3s-, VPN- oder GPU-Fähigkeit.

Eine zweite SSH-Sitzung und die Providerkonsole offenhalten. Zuerst einen eigenen Administratorzugang mit Key und passendem sudo-Recht testen. Erst danach Passwort-/Root-Login nach dem konkreten Image und bestehenden Zugriffspfad härten. Keine pauschalen Firewall-Resets; bei NAT die internen Zielports berücksichtigen.

## 4. Bestehenden OpenClaw-Pfad weiterverwenden

Das Hauptrepository besitzt bereits [Ansible-Bootstrap](https://github.com/dwhr-pi/OpenClaw-AI_Infrastructure-_Ultimate_Setup/blob/main/ansible/vps_bootstrap.yml), [Produktionsbaseline](https://github.com/dwhr-pi/OpenClaw-AI_Infrastructure-_Ultimate_Setup/blob/main/docs/PRODUCTION_BASELINE.md) und [signierten Installationsweg](https://github.com/dwhr-pi/OpenClaw-AI_Infrastructure-_Ultimate_Setup/blob/main/docs/INSTALL_SIGNED_RELEASE.md). Den aktuellen Stand und dessen Vertrauensanker lesen; keinen ungeprüften `main`-Installer als Root ausführen.

Auf dem Verwaltungsrechner private Inventory-/Variablendateien außerhalb von Git anlegen. Mit vorhandener, geprüfter Ansible-Installation und geprüftem Checkout:

```bash
ansible-playbook -i /privat/inventory.ini ansible/vps_bootstrap.yml \
  --extra-vars @/privat/bootstrap-vars.yml --syntax-check
ansible-playbook -i /privat/inventory.ini ansible/vps_bootstrap.yml \
  --extra-vars @/privat/bootstrap-vars.yml --check --diff
```

Die Variablennamen und Bestätigungsfelder aus der aktuellen Baseline übernehmen. Check-Modus kann die Erstinstallation von Paketen nicht vollständig simulieren. Nach erfolgreicher Prüfung denselben genau verstandenen Aufruf bewusst ohne `--check --diff` ausführen. Der unveränderte Folgelauf soll idempotent sein. Native Builds können auf kleinen VPS zu groß sein; fehlende Ressourcen führen zum Stopp, nicht zum Docker-Fallback.

## 5. Ein erster Dienst und gegebenenfalls Kubernetes

Zunächst nur einen kleinen, für den Tarif erlaubten Dienst einrichten. Interne APIs bleiben privat. OpenClaw/Ollama, Datenbanken und Managementschnittstellen nicht durch pauschale Portfreigabe veröffentlichen. Systemd-Dienstkonto und minimale Rechte verwenden; keine Agenten mit dauerhaften Cloud-Adminrechten.

K3s dokumentiert mindestens 2 Kerne/2 GB für den Server und 1 Kern/512 MB für einen Agenten, jeweils ohne komfortable Workloadreserve. Für dieses Setup sind 4 GB+ auf dem Koordinator und lokale GPU-Worker sinnvoller Planungsraum. CPU-Fair-Share ist nicht gleich garantierte Kerne. [K3s-Voraussetzungen](https://docs.k3s.io/installation/requirements)

Über Providergrenzen private WireGuard-Adressen, Routing, MTU, DNS und Firewallpfade zuerst testen. API 6443 und sonstige Clusterpfade nur im privaten Netz. Kein kostenloser Load-Balancer-/Public-IP-Anspruch. Die [bestehenden GitOps-Anleitungen](https://github.com/dwhr-pi/OpenClaw-AI_Infrastructure-_Ultimate_Setup/blob/main/docs/GITOPS_SMALL_VPS.md) verlangen explizite Pins/Hashes und einen bewussten Apply; nicht durch einen allgemeinen Einzeiler ersetzen.

## 6. Abnahme und Ende eines Tests

- Echte Loginprobe, Neustart und erneuter Zugang; keine Erfolgsmeldung allein aus einem Installer-Exitcode.
- RAM/CPU/Steal, Disk, Transfer und Kosten beobachten. Nur genehmigte kleine Lastproben, keine automatischen Volllastbenchmarks auf Communityservern.
- Einen konsistenten Dienst-/Datastore-Backupstand verschlüsselt extern sichern und auf einem getrennten Ziel wiederherstellen.
- Trialende, Community-Erneuerung oder Vertragskündigung dokumentieren. „Stoppen“ beendet bei manchen Hostern die Rechnung nicht: VM, Disks, Snapshots, reservierte IPs und andere Zusatzressourcen einzeln prüfen.
