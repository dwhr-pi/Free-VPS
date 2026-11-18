# Anbieter, Bedingungen und Einrichtung

Recherche: **2026-11-18**. Angebote, keine behauptete Vollerfassung aller weltweiten Anbieter. Nicht belegt bedeutet weder erlaubt noch verboten. Quellenabruf ist kein Betriebstest.

Diese Datei wird aus [anbieter-de.json](../data/anbieter-de.json) mit `node scripts/katalog-de.mjs` erzeugt. Inhaltliche Änderungen dort pflegen. Alle Anmeldeschritte sind Anleitungen, keine erfolgreich durchgeführten Registrierungen. Nach der Bereitstellung folgt der [gemeinsame SSH-/Setup-Pfad](EINRICHTUNG-de.md).

**Bewertung:** „gratis“ bezeichnet das Angebotsmodell, keine Vertrauensgarantie oder heutige freie Kapazität. „Kandidat“ wird nicht als bestätigter kostenloser Root-VPS gezählt. „Nicht belegt“ ist keine Erlaubnis und kein nachgewiesenes Verbot. Preise sind Momentaufnahmen mit jeweils genannter Währung; ohne eindeutige Steuerangabe ist der Checkout zu prüfen.

## Dauerhafte Freikontingente und Community-Angebote (8)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [Oracle Cloud Always Free](#oracle) | VM (AMD64 oder ARM64); Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | In der Regel Kredit-/geeignete Debitkarte und Telefon für Identitätsprüfung. | 0 innerhalb Limits; Trial 300 USD/30 Tage separat. Nach bewusster PAYG-Umstellung werden Mehrverbrauch und Zusatzprodukte berechnet. |
| [Google Cloud Compute Engine](#gcp) | VM (AMD64); Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Abrechnungskonto erforderlich; unterstütztes Zahlungsmittel/Identitätsprüfung im Registrierungsland. | VM innerhalb Freikontingent 0; IPv4, andere Disk-Typen, Snapshots, Cloud NAT, Egress und Mehrverbrauch können kostenpflichtig sein. Trial 300 USD/90 Tage getrennt. |
| [FreeVPS.org](#freevps) | NAT-KVM-VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Keine Karte laut Anbieter. | Regulär 0; optionale Spende ab 5 USD für Donor-Zuteilung. Manche Regionen nur mit Spende. |
| [FOSSVPS](#fossvps) | Gesponserter VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Kein Kartenbeleg erforderlich gefunden; Bewerbung statt Bezahlbestellung. | 0 für akzeptierte FOSS-Entwickler; nicht kommerziell; Förderung zeitlich abhängig vom Sponsor. |
| [EUserv VS2-free](#euserv) | Linux-Systemcontainer, Root; Historisch dokumentiert; heutige Neubestellung offen | Nicht abschließend belegt; Bestell-/Verifikationsweg prüfen. | IPv6-Basis als kostenlos beschrieben; heutige Neubestellbarkeit, Einrichtungsgebühr, Verlängerung und Zusatz-IPs nicht bestätigt. |
| [HAX](#hax) | IPv6-VPS, Technik je nach Node; Direktabruf fehlgeschlagen; aktuelle Verfügbarkeit offen | Historisch ohne Karte; aktuelle Anmeldung nicht getestet. | Gratisbehauptung/Community-Nutzung belegt; heutige Zusatzkosten nicht geklärt. |
| [Woiden](#woiden) | NAT-/Systemcontainer-VPS; Direktabruf fehlgeschlagen; aktuelle Verfügbarkeit offen | Historisch ohne Karte; aktuelle Anmeldung nicht getestet. | Gratisbehauptung/Community-Nutzung belegt; heutige Zusatzkosten nicht geklärt. |
| [Openworld](#openworld) | Linux-Systemcontainer mit Root/systemd; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Keine Karte; Discord-Login. | 0 mit regelmäßiger Verlängerung; bezahlte Upgrades optional. |

## Unbestätigte oder widersprüchliche Kandidaten (8)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [VPSFree.io](#vpsfreeio) | LXC/Systemcontainer laut Bedingungen; Marketing nennt teils KVM; Widersprüchliche Angaben; nicht als vertrauenswürdig bestätigt | Laut Anbieter keine Karte/KYC. | 0 nach Sponsor-Schritt; werbefreie Verlängerungsoption kostenpflichtig. |
| [TheUltraHost Student VPS](#ultrahost) | Beworbene KVM-VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Keine Karte mit Studentenverifikation. | 0; Upgrades freiwillig kostenpflichtig. |
| [vyce.cloud](#vyce) | Beworbenes Root-/VM-Angebot, ungeprüft; Unbestätigter Kandidat; keine Empfehlung | Keine Karte beworben; tatsächlich notwendige Verifikation offen. | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| [Verta Cloud](#verta) | Beworbenes Root-/VM-Angebot, ungeprüft; Unbestätigter Kandidat; keine Empfehlung | Keine Karte beworben; tatsächlich notwendige Verifikation offen. | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| [GratisVPS](#gratisvps) | Beworbenes Root-/VM-Angebot, ungeprüft; Unbestätigter Kandidat; keine Empfehlung | Keine Karte beworben; tatsächlich notwendige Verifikation offen. | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| [AlaVPS](#alavps) | Beworbenes Root-/VM-Angebot, ungeprüft; Unbestätigter Kandidat; keine Empfehlung | Keine Karte beworben; tatsächlich notwendige Verifikation offen. | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| [FreeVPS.edu.pl](#freevpsedu) | Beworbenes Root-/VM-Angebot, ungeprüft; Unbestätigter Kandidat; keine Empfehlung | Keine Karte beworben; tatsächlich notwendige Verifikation offen. | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| [FreeVPSHostings.com](#freevpshostings) | Vermittlungs-/Trialangebot mit widersprüchlicher Rootwerbung; Nicht als eigenständiger kostenloser Root-VPS bestätigt | Je Zielangebot offen; Werbetitel ist kein Beleg. | Learner nur 7 Tage; Premium erster Monat 0, danach ab 4 USD laut Seite. Nicht dauerhaft kostenlos. |

## Zeitlich begrenzte Tests und Guthaben (11)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [AWS Free Plan / EC2](#aws) | VM (EC2); Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Bei Standardregistrierung Zahlungsmittel und Telefonprüfung; land-/kontospezifisch. | Free Plan bis 6 Monate oder Guthabenende ohne Nutzungsgebühr; Paid Plan kann Mehrkosten verursachen. Keine pauschale 12-Monats-EC2-Zusage für neue Konten. |
| [Microsoft Azure Free Account](#azure) | VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Telefon und nicht vorausbezahlte Kredit-/Debitkarte; Länderabweichungen. | Kein automatischer kostenpflichtiger Wechsel ohne bewusste PAYG-Umstellung; danach können VM, Disk, IP, Egress und Zusatzdienste kostenpflichtig werden. |
| [Azure for Students](#azure-students) | Berechtigungsgebundenes Cloudguthaben; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Keine Kreditkarte; verifizierter Hochschulstatus. | 0 im berechtigten Guthabenrahmen; Upgrade/PAYG bewusst getrennt. Kosten bei entfernten Ausgabenlimits möglich. |
| [DigitalOcean Droplets](#do) | VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Gültiges Zahlungsmittel; aktuelle Methoden bei Kontoerstellung. | Nur tatsächlich eingebuchtes Guthaben als gratis rechnen. Danach reguläre VM-Kosten; neuere v5-IPv4 separat. Abschalten beendet nicht zwingend Abrechnung. |
| [Vultr Cloud Compute](#vultr) | VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Karte mit 0-USD-Verknüpfungsoption; andere Methoden können Einzahlung verlangen. | Guthaben befristet; danach normale Tarife und Zusatzkosten. Kein kostenloser Dauertarif bestätigt. |
| [Akamai Cloud / Linode](#akamai) | VM; Anbieter/Preisseite geprüft; aktuelle Trialhöhe nicht bestätigt | Zahlungsmittel und Betrugs-/Kontoprüfung. | Historisches 100-USD/60-Tage-Angebot nicht als aktuelle Garantie übernommen; nach Promo reguläre Kosten. |
| [Kamatera](#kamatera) | VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Karte erforderlich; in bestimmten Fällen rückzahlbare PayPal-Kaution als Alternative. | Nach 30 Tagen automatische Berechnung bei Weiterbetrieb; Mehrverbrauch kann schon im Trial kostenpflichtig sein. |
| [Alibaba Cloud ECS](#alibaba) | VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Konto und Karte/PayPal laut offizieller ECS-Anleitung. | Nur aktivierten Trial buchen; danach ECS, öffentliche Bandbreite, Disks und Snapshots regulär. Auto-Renew im Auftrag prüfen. |
| [OVHcloud Public Cloud Trial](#ovh-trial) | VM / OpenStack; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Gültige Zahlungsmethode erforderlich. | Nach Verbrauch/Ende automatische reguläre Abrechnung der verbleibenden Ressourcen. |
| [Prepaid-Hoster Testserver](#prepaid) | VM mit IPv4/Root; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Keine Kartenzwangsangabe im Testformular; persönliche Prüfung. | Test 0, keine versteckten Abos laut Seite; bezahlte Übernahme durch Entfernen der Kündigung. |
| [1Free.eu VPS S](#1free) | Root-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Keine Karte/Stripe für 30-Tage-Test laut Seite. | 30 Tage 0, danach 5 PLN/Monat oder 60 PLN/Jahr per einmaliger Zahlung; kein Abo laut Angebot. |

## Kostenpflichtig mit Rückerstattung (2)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [IONOS VPS](#ionos) | Kostenpflichtige VM mit Geld-zurück-Garantie; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; konkrete Kartenzwangsfrage im Checkout offen. | Beispiel S+: 2 EUR/Monat für 3 Monate, danach 5 EUR; 10 EUR Einrichtung laut Seite. 30-Tage-Erstattung nach Bedingungen, keine bedingungslose Gratis-VM. |
| [dogado VPS](#dogado) | Kostenpflichtige VM mit Geld-zurück-Garantie; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; genaue Auswahl im Checkout. | 30 Tage Geld-zurück, bei Unzufriedenheit kündigen und Erstattung erhalten; danach regulärer Tarif. |

## Günstige Bezahlangebote (12)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [Hetzner Cloud](#hetzner) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Offizielle Preisanpassung ab Juni 2026: CX23 in DE/FI 5,49 EUR/Monat netto ohne IPv4; bei 19% MwSt. ca. 6,53 EUR, Extras zusätzlich. |
| [netcup](#netcup) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Gelesene Seite zeigt bei 12 Monaten 8,26 EUR/Monat sowie 9,50 EUR als weiteren Preis; Bruttobetrag/Laufzeit im gewählten Länder-Checkout verbindlich prüfen. |
| [Contabo](#contabo) | Kostenpflichtiger Root-VPS / VM; Produktseite nicht lesbar; Bedingungen/FAQ geprüft | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Kein verlässlicher aktueller Einstiegspreis im Direktabruf (403); Setupgebühren beim kleinen Core-/Storage-Tarif möglich. Nicht als billigster Anbieter eingestuft. |
| [OVHcloud VPS](#ovh-vps) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Mehrere Produktgenerationen und Aktionspreise sichtbar; aktuellen Endpreis des Landes-Checkouts verwenden, keine alte 3,81-/4,49-EUR-Zusage. |
| [Time4VPS](#time4vps) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Linux 1 2,99 EUR/Monat laut Seite; Linux 2 Aktion 2,88 EUR, Verlängerung 5,77 EUR bei einem angezeigten Abrechnungszeitraum. Steuer/Laufzeit prüfen. |
| [AlphaVPS](#alphavps) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | UK-Seite bewirbt ab 2,54 EUR/Monat; monatliche vs. jährliche Zahlung und Steuern prüfen. |
| [BuyVM / Frantech](#buyvm) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Slice 512 24 USD/Jahr (=2 USD/Monat rechnerisch, jährlich vorab); Slice 1024 3,50 USD/Monat; Backup extra. |
| [WebHorizon NAT VPS](#webhorizon) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Aktuellen Bündelgesamtpreis prüfen; 0-USD-Unterpositionen sind kein Beleg für kostenlosen Gesamtvertrag. |
| [GreenCloud VPS](#greencloud) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Regulär ab 6 USD/Monat; gelesener Sale 25 USD/Jahr für 4-GB-Varianten, teils ausverkauft, ohne Erstattung. Sale nicht als zugesicherter Regelpreis. |
| [HostHatch](#hosthatch) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | NVMe 2 GB ab 4 USD/Monat laut Produktseite; Region, Steuern und Abrechnungszyklus prüfen. |
| [RackNerd](#racknerd) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. | Regel-SKU 512 MB 26,99 USD/Jahr; Sonderangebote separat, Verlängerungsbetrag und Refund-Regeln prüfen. |
| [Sakura VPS](#sakura) | Kostenpflichtiger Root-VPS / VM; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Regionale Konto-/Zahlungsmethoden und mögliche Adresse-/Telefonprüfung vor Registrierung klären. | 512-MB-Tarif je Standort ab ca. 643 JPY/Monat laut aktueller Funktions-/Preisliste; Zahlungsperiode und Steuer im japanischen Checkout prüfen. |

## App-Hosting und Entwicklungsumgebungen (8)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [Render](#render) | App-/Shared-Hosting, kein allgemeiner Root-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Free-Nutzung ohne Karte teils möglich; aktuelle Anti-Abuse-/Billingprüfung beachten. | Freier Webservice innerhalb Limits; zusätzliche Dienste/Pipelines/Traffic können kostenpflichtig sein. |
| [Koyeb](#koyeb) | App-/Shared-Hosting, kein allgemeiner Root-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Kartenerfordernis für aktuellen Onboarding-/Organisationstarif nicht eindeutig bestätigt. | Freie Instanz separat von kostenpflichtigen Organisationstarifen und Extras. |
| [Railway](#railway) | App-/Shared-Hosting, kein allgemeiner Root-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Free-Nutzung ohne Karte teils möglich; aktuelle Anti-Abuse-/Billingprüfung beachten. | Free 0 USD mit 1 USD Verbrauchsguthaben/Monat; Hobby 5 USD Grundpreis plus Verbrauchsmodell. |
| [Fly.io](#fly) | App-/Shared-Hosting, kein allgemeiner Root-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Probe ohne Karte möglich; Fortbetrieb verlangt Zahlungsmittel. | Neue Konten: nur kurze Probe; altes dauerhaftes 3-VM-Freikontingent nicht als aktuelle Zusage. |
| [serv00](#serv00) | App-/Shared-Hosting, kein allgemeiner Root-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Free-Nutzung ohne Karte teils möglich; aktuelle Anti-Abuse-/Billingprüfung beachten. | Kostenlos; Premiumhost ist anderes Angebot. |
| [HelioHost](#heliohost) | App-/Shared-Hosting, kein allgemeiner Root-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Free-Nutzung ohne Karte teils möglich; aktuelle Anti-Abuse-/Billingprüfung beachten. | Gratis-Webhosting; bestimmte bevorzugte Accounts gegen Spende, VPS regulär kostenpflichtig. |
| [GitHub Codespaces](#codespaces) | Entwicklungsumgebung, kein dauerhafter VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Freikontingent persönlich ohne kostenpflichtigen Zusatz möglich; Anti-Abuse-/Kontoprüfung. | Über Freimengen nur mit aktivierter Abrechnung; Speicher zählt auch bei gestoppter Umgebung. |
| [GitHub Actions / FreeVPS_by_Github-Action](#actions) | Kurzlebiger CI-Runner; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Konto-/Abrechnungsprüfung nach Tarif; kein eigener VPS-Vertrag. | Nur projektbezogene CI im jeweiligen Plan; externer Dauerdienst nicht als Gratis-VPS bewerten. |

## Brokergebundene Trading-Angebote (4)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [ForexVPS brokerfinanziert](#forexvps) | Windows-Trading-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | VPS-Seite nennt keine Zahlungsdetails nötig; Brokerkonto erfordert eigene Prüfung/Kapital. | Nur bei Broker-Mindestkapital und Handelsvolumen gratis; bei Fehlvolumen anteilige VPS-Gebühr möglich. Spreads/Provisionen und Verluste zählen zusätzlich. |
| [RoboForex VPS](#roboforex) | Windows-Trading-VPS; Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe | Brokerkonto, Identitätsprüfung und Kapital; keine anonyme Registrierung. | Regelangebot mindestens 300 USD Equity und 3 Standardlots/Monat; bei Fehlvolumen 5 USD Monatsgebühr bei aktivierter Bezahlverlängerung. Länderverfügbarkeit prüfen. |
| [Orbex Forex VPS](#orbex) | Brokergebundener Trading-VPS; Direktabruf fehlgeschlagen; heute nicht vollständig prüfbar | Persönliches Brokerkonto mit KYC; Kapitalbedingungen. | Kostenfreiheit von Equity/Handelsbedingungen abhängig; konkrete heutige Zahlen nicht pauschal bestätigt. |
| [Admirals Forex VPS](#admirals) | Brokergebundener Trading-VPS; Angebotsseite abrufbar; individuelle Berechtigung offen | Persönliches Brokerkonto mit KYC; Kapitalbedingungen. | Kostenfreiheit von Equity/Handelsbedingungen abhängig; konkrete heutige Zahlen nicht pauschal bestätigt. |

## Historische oder ausgeschiedene Angebote (2)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [FreeMach](#freemach) | KVM-VM, historisch; Veralteter Fund; aktuell nicht als verfügbar gezählt | Nicht belegt. | Historisch kostenlos; Seite zeigt 0 freie Slots und einen 2021 abgelaufenen Sponsorzeitraum. |
| [FreeLiVPS](#freelivps) | Ehemalige Trialwerbung; Ausgeschieden: aktuelle Seite ist Domainauktion | Nicht anwendbar. | Direktabruf zeigt Domain-Auktionsseite; alte 7-/30-Tage-Trialangaben sind überholt. |

## Nicht als eigener Gratisanbieter bestätigt (1)

| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |
| --- | --- | --- | --- |
| [VPSWala](#vpswala) | Weiterleitungs-/Vermittlungsseite; Als eigenständiger Gratisanbieter ausgeschlossen | Zielangebot kann Karte verlangen. | Direktabruf leitete auf Kamatera-Affiliateziel; dessen Trialbedingungen gelten. |

<a id="oracle"></a>

## Oracle Cloud Always Free

[Offizieller Einstieg](https://www.oracle.com/cloud/free/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM (AMD64 oder ARM64) |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Aktuelle OCI-Dokumentation: A1 gesamt 2 OCPU/12 GB für Always-Free-Tenancies; alternativ bis zu 2 AMD-Micro-VMs mit je 1 GB. 200 GB Blockspeicher-Kontingent gemeinsam planen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Gewählte OCI-Heimatregion; Kapazität nicht garantiert, auch europäische Regionen. |
| Karte / Verifikation | In der Regel Kredit-/geeignete Debitkarte und Telefon für Identitätsprüfung. |
| Kosten / Folgepreis | 0 innerhalb Limits; Trial 300 USD/30 Tage separat. Nach bewusster PAYG-Umstellung werden Mehrverbrauch und Zusatzprodukte berechnet. |
| Laufzeit / Verlängerung | Keine periodische Werbeverlängerung; inaktive Konten können gesperrt werden. |
| Inklusivtraffic | 10 TB/Monat ausgehend als gemeinsames Always-Free-Kontingent laut aktueller OCI-Dokumentation. |
| Port / Drosselung | Shape-abhängig, kein zugesicherter dedizierter Port. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | A1 als kleiner K3s-Server grundsätzlich plausibel; AMD-Micro eher schlanker Dienst. Tatsächlichen CPU-Anteil und Architektur prüfen. |
| Mehrere Konten | Ausdrücklich maximal ein Free-Trial-/Always-Free-Konto pro Person; mehrere freie Konten auch versuchsweise verboten. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | OCI API/CLI und Terraform-Provider nach Kontoprüfung; kein Ersatz für die Erstregistrierung. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Kleine Anwendungen/Koordination im Free-Tier vorgesehen; konkrete KI-Last durch Ressourcen und AUP begrenzt. Kein kostenloser GPU-Anspruch. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Freie Ressourcen können kapazitäts-/inaktivitätsbedingt entfallen; eigene Restore-Probe. |

### Von der Registrierung bis zum ersten Dienst

1. Auf offizieller Free-Tier-Seite Start for Free wählen.
2. E-Mail, echte Kontaktdaten, Telefon und Zahlungsmittel prüfen lassen; Heimatregion bewusst wählen.
3. In Compute eine ausdrücklich Always-Free-fähige Ubuntu-VM mit öffentlichem SSH-Key erstellen; Kontingente für alle Volumes summieren.
4. Kostenansicht prüfen und anschließend den gemeinsamen SSH-Einstieg nutzen.

### Erfahrungen und Quellen

Konkrete Nutzerberichte über Karten-/Registrierungsprobleme; Einzelfälle, keine zugesicherte Verfügbarkeit.

Angebots-/Regelbelege: [Quelle 1](https://www.oracle.com/cloud/free/faq/) · [Quelle 2](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier.htm) · [Quelle 3](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://www.reddit.com/r/oraclecloud/comments/1nnjx3d/tutorial_on_how_to_setup_an_alwaysfree_server/). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="gcp"></a>

## Google Cloud Compute Engine

[Offizieller Einstieg](https://cloud.google.com/free/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM (AMD64) |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Ein e2-micro-Zeitkontingent; 30 GB-Monate Standard Persistent Disk. Keine kostenlose GPU. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Nur us-west1, us-central1, us-east1 für die Compute-Freistufe. |
| Karte / Verifikation | Abrechnungskonto erforderlich; unterstütztes Zahlungsmittel/Identitätsprüfung im Registrierungsland. |
| Kosten / Folgepreis | VM innerhalb Freikontingent 0; IPv4, andere Disk-Typen, Snapshots, Cloud NAT, Egress und Mehrverbrauch können kostenpflichtig sein. Trial 300 USD/90 Tage getrennt. |
| Laufzeit / Verlängerung | Free Tier ohne festes Enddatum; nach Trial für Fortbetrieb Abrechnungsstatus prüfen. |
| Inklusivtraffic | 1 GB/Monat aus Nordamerika, China/Australien ausgenommen; regionale Preise gesondert prüfen. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | 1 GB RAM: kein empfohlener Control-Plane-Host; kleiner externer Dienst, Worker nur nach Lasttest. |
| Mehrere Konten | Google untersagt Konten-/Projektaufteilung zum Umgehen von Gebühren oder Quoten. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | gcloud, Compute API, cloud-init und Terraform/OpenTofu nach legitimer Registrierung. |
| Mining | Im Free Trial verboten; im allgemeinen GCP-Vertrag nur mit vorheriger schriftlicher Google-Erlaubnis. |
| KI / Inferenz / Training | KI-APIs werden separat tarifiert. Kleine eigene Anwendungen nur im Ressourcenrahmen; kein Freibrief für Training. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Auf offizieller Free-Seite mit Google-Konto registrieren und Billing-Verifikation abschließen.
2. Projekt und Budgetwarnungen anlegen; Warnung ist keine harte Kostensperre.
3. Compute Engine aktivieren: e2-micro in einer der drei Free-Regionen, Standard-Disk wählen und Netzwerk-Kosten einzeln prüfen.
4. SSH-Key und restriktive Firewall einrichten; Kostenbericht nach erstem Betriebstag kontrollieren.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://docs.cloud.google.com/free/docs/free-cloud-features) · [Quelle 2](https://cloud.google.com/vpc/network-pricing) · [Quelle 3](https://cloud.google.com/terms/) · [Quelle 4](https://cloud.google.com/signup-faqs).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="freevps"></a>

## FreeVPS.org

[Offizieller Einstieg](https://www.freevps.org/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | NAT-KVM-VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Regulär 1 Fair-Share-Kern, 1 GB RAM (begründet mehr), 20 GB Disk (begründet mehr). Nicht einzelne Sponsorstandorte als eigene Anbieter zählen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Community-Sponsoren u. a. USA, Großbritannien, Schweden, Japan, Singapur, Neuseeland. |
| Karte / Verifikation | Keine Karte laut Anbieter. |
| Kosten / Folgepreis | Regulär 0; optionale Spende ab 5 USD für Donor-Zuteilung. Manche Regionen nur mit Spende. |
| Laufzeit / Verlängerung | Forumsvoraussetzungen und freie Kapazität; keine feste Laufzeitgarantie. |
| Inklusivtraffic | Regulär 250 GB/Monat; Sonderregionen abweichend. |
| Port / Drosselung | Regulär 150 Mbit/s Port; Fair Share. |
| IP / NAT / Kernel | 20 weitergeleitete IPv4-Ports; IPv6 /64 oder /80. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Regulär zu knapp für K3s-Server; kleine Dienste. Privates VPN nur wenn Node-AUP dies erlaubt. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Nein als verlässlich vollautonomer Weg: gewachsene Community-Reputation und individuelle Zuteilung nötig. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Öffentliche VPNs, TOR, Torrents, Mail-Relays und Weiterverkauf verboten; zusätzlich jeweilige Sponsor-AUP. |
| Backup / SLA | Kein SLA, keine feste Bestandsgarantie; Support öffentlich im Forum. |

### Von der Registrierung bis zum ersten Dienst

1. LowEndTalk oder LowEndSpirit aufrufen und ein echtes Community-Profil anlegen.
2. Mindestens 3 Monate Profilalter, 50 inhaltliche Beiträge und 25 erhaltene Thanks erfüllen; keine automatischen Scheinbeiträge.
3. Über den von FreeVPS verlinkten Forumsthread mit Einsatzzweck bewerben.
4. Nach Zuteilung Node-AUP, NAT-Ports, IPv6 und SSH-Zugang prüfen.

### Erfahrungen und Quellen

Öffentlich nachvollziehbare Community und verlinkte Benchmarks; Sponsor-/Betreiberbeiträge sind keine unabhängigen Langzeittests.

Angebots-/Regelbelege: [Quelle 1](https://www.freevps.org/).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://lowendtalk.com/discussion/214984/new-project) · [Bericht 2](https://kangserver.id/). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="fossvps"></a>

## FOSSVPS

[Offizieller Einstieg](https://fossvps.org/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Gesponserter VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Angebotsseite nennt 2 vCPU, 4 GiB RAM, 64 GiB HDD. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Deutschland, Moldau, Rumänien, USA; teils bereits abgelaufene oder bald endende Sponsoringtermine. |
| Karte / Verifikation | Kein Kartenbeleg erforderlich gefunden; Bewerbung statt Bezahlbestellung. |
| Kosten / Folgepreis | 0 für akzeptierte FOSS-Entwickler; nicht kommerziell; Förderung zeitlich abhängig vom Sponsor. |
| Laufzeit / Verlängerung | Aktuelle Betreiber-Mitteilung: alle bestehenden Gratisnutzer müssen sich erneut bewerben; Frist 23. November. US-MSATT-Sponsoring wird beendet. |
| Inklusivtraffic | Keine belastbare Inklusivmenge veröffentlicht. |
| Port / Drosselung | Nicht beziffert; übermäßige CPU-, Disk- und Netzlast ausgeschlossen. |
| IP / NAT / Kernel | NAT IPv4 eingeschränkt plus IPv6 /128 oder /96 standortabhängig. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Ressourcen für kleinen K3s-Labortest plausibel, doch Laufzeit-/CPU-Genehmigung nötig; keine stabile Produktionsbasis. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Nicht vollständig selbstständig: persönliche Projekt-/Reputationsprüfung und Betreiberentscheidung. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Nicht kommerziell. |
| Weitere Erlaubnisse / Verbote | Nur FOSS-Entwicklung, White Hat, nicht kommerziell, keine exzessive Last. |
| Backup / SLA | Kein SLA; Förderung kann auslaufen. |

### Von der Registrierung bis zum ersten Dienst

1. Auf FOSSVPS die Regeln und Standortlaufzeiten lesen.
2. Auf LET/LES eigenes Open-Source-Vorhaben und Reputation nachvollziehbar machen.
3. Antrag im verlinkten Community-Kontext mit Projekt und gewünschtem Standort stellen; bestehende Nutzer beim Betreiber erneuern.
4. Erst nach Zusage SSH einrichten, Sponsoringende notieren und externe Backups testen.

### Erfahrungen und Quellen

Betreiberupdate mit konkreter Rücknahme-/Erneuerungsankündigung; Diskussion öffentlich, aber keine unabhängige Verfügbarkeitsgarantie.

Angebots-/Regelbelege: [Quelle 1](https://fossvps.org/).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://lowendtalk.com/discussion/222975/fossvps-important-update) · [Bericht 2](https://lowendtalk.com/discussion/213098/stable-free-vps-for-open-source-developers). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="euserv"></a>

## EUserv VS2-free

[Offizieller Einstieg](https://www.euserv.com/en/virtual-private-server/root-vserver/v2/vs2-free.php) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Linux-Systemcontainer, Root |
| Nachweisstand | Historisch dokumentiert; heutige Neubestellung offen |
| CPU / RAM / Disk | 1 Kern @ 1 GHz, 1 GB RAM, 10 GB HDD laut weiterhin abrufbarer Produktseite. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Deutschland. |
| Karte / Verifikation | Nicht abschließend belegt; Bestell-/Verifikationsweg prüfen. |
| Kosten / Folgepreis | IPv6-Basis als kostenlos beschrieben; heutige Neubestellbarkeit, Einrichtungsgebühr, Verlängerung und Zusatz-IPs nicht bestätigt. |
| Laufzeit / Verlängerung | Historischer Tarif: keine bestätigte aktuelle Sofortzuteilung. |
| Inklusivtraffic | 1 TB/Monat, danach laut Seite auf 1 Mbit/s gedrosselt, falls kein Traffic nachgekauft. |
| Port / Drosselung | 1 Gbit/s geteilter Hostanschluss, keine garantierte Einzelrate. |
| IP / NAT / Kernel | Eine IPv6 /128; keine kostenlose IPv4. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Kein zugesagter eigener Kernel/TUN/cgroups; K3s nicht freigegeben. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle VS2-free-Seite und Warenkorb auf heutige Verfügbarkeit prüfen.
2. Nur bei nachvollziehbarer 0-Euro-Bestellung Kundenkonto erstellen und echte Identität verifizieren.
3. Gebühren und Vertragsverlängerung vor Abschluss schriftlich klären.
4. Nach tatsächlicher Zuteilung IPv6-fähigen Client und SSH nutzen; keine Kernelrechte unterstellen.

### Erfahrungen und Quellen

Technischer Anwenderbericht zu IPv6/IPv4 von 2020 vorhanden; belegt den damaligen Betrieb, keine Verfügbarkeit 2026.

Angebots-/Regelbelege: [Quelle 1](https://www.euserv.com/en/virtual-private-server/root-vserver/v2/vs2-free.php).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://yoursunny.com/t/2020/EUserv-IPv4/). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="hax"></a>

## HAX

[Offizieller Einstieg](https://hax.co.id/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | IPv6-VPS, Technik je nach Node |
| Nachweisstand | Direktabruf fehlgeschlagen; aktuelle Verfügbarkeit offen |
| CPU / RAM / Disk | Aktuelle RAM-/CPU-/Disk-Zuteilung nicht zuverlässig abrufbar. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Node-/Bestandsabhängig. |
| Karte / Verifikation | Historisch ohne Karte; aktuelle Anmeldung nicht getestet. |
| Kosten / Folgepreis | Gratisbehauptung/Community-Nutzung belegt; heutige Zusatzkosten nicht geklärt. |
| Laufzeit / Verlängerung | Verlängerungsregeln im heutigen Panel prüfen; keine Zusage zu 24/7. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine Empfehlung als Control Plane; Kernel/TUN/cgroups und RAM offen. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Telegram-Anmeldung/Verifikation und heutige Anti-Abuse-Schritte: vollständige Autonomie nicht nachgewiesen. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite aufrufen und aktuelle Regeln lesen; bei Nichterreichbarkeit warten.
2. Vorgesehenen Telegram-/Identitätsweg mit rechtmäßig vorhandenem Konto prüfen.
3. Nur tatsächlich angezeigten freien Tarif wählen und Verlängerungsfrist notieren.
4. Nach Zuteilung SSH und IPv6/NAT testen; keine automatischen CAPTCHA-/Keepalive-Umgehungen.

### Erfahrungen und Quellen

Community-Thread mit technischen Hinweisen; älter und als Langzeitnachweis begrenzt. Offizieller Telegram-Kanal berichtet auch Datenverlust nach Neuinstallation.

Angebots-/Regelbelege: [Quelle 1](https://hax.co.id/) · [Quelle 2](https://t.me/s/haxserver).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://lowendspirit.com/discussion/8959/free-vps). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="woiden"></a>

## Woiden

[Offizieller Einstieg](https://woiden.id/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | NAT-/Systemcontainer-VPS |
| Nachweisstand | Direktabruf fehlgeschlagen; aktuelle Verfügbarkeit offen |
| CPU / RAM / Disk | Aktuelle RAM-/CPU-/Disk-Zuteilung nicht zuverlässig abrufbar. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Node-/Bestandsabhängig. |
| Karte / Verifikation | Historisch ohne Karte; aktuelle Anmeldung nicht getestet. |
| Kosten / Folgepreis | Gratisbehauptung/Community-Nutzung belegt; heutige Zusatzkosten nicht geklärt. |
| Laufzeit / Verlängerung | Verlängerungsregeln im heutigen Panel prüfen; keine Zusage zu 24/7. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine Empfehlung als Control Plane; Kernel/TUN/cgroups und RAM offen. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Telegram-Anmeldung/Verifikation und heutige Anti-Abuse-Schritte: vollständige Autonomie nicht nachgewiesen. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite aufrufen und aktuelle Regeln lesen; bei Nichterreichbarkeit warten.
2. Vorgesehenen Telegram-/Identitätsweg mit rechtmäßig vorhandenem Konto prüfen.
3. Nur tatsächlich angezeigten freien Tarif wählen und Verlängerungsfrist notieren.
4. Nach Zuteilung SSH und IPv6/NAT testen; keine automatischen CAPTCHA-/Keepalive-Umgehungen.

### Erfahrungen und Quellen

Community-Thread mit technischen Hinweisen; älter und als Langzeitnachweis begrenzt. Offizieller Telegram-Kanal berichtet auch Datenverlust nach Neuinstallation.

Angebots-/Regelbelege: [Quelle 1](https://woiden.id/) · [Quelle 2](https://t.me/s/haxserver).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://lowendspirit.com/discussion/4045/free-nat-vps-dedicated-ipv6-shared-ipv4). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="openworld"></a>

## Openworld

[Offizieller Einstieg](https://openworld.eu.org/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Linux-Systemcontainer mit Root/systemd |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Ressourcen im aktuellen Panel prüfen; öffentlich keine verbindlichen Zahlen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Nodeauswahl im Panel. |
| Karte / Verifikation | Keine Karte; Discord-Login. |
| Kosten / Folgepreis | 0 mit regelmäßiger Verlängerung; bezahlte Upgrades optional. |
| Laufzeit / Verlängerung | 7 Tage; manuell frühzeitig verlängern, sonst Suspendierung. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Dedizierte öffentliche IPv6 und NAT IPv4 laut FAQ. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Kein bestätigter K3s-Host; Systemcontainerrechte erst testen. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | FAQ erlaubt u. a. Bots; konkrete KI-Inferenz-/Trainingslast nicht ausdrücklich freigegeben. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Get started auf offizieller Seite öffnen.
2. Mit eigenem Discord-Konto anmelden und aktuelle Bedingungen lesen.
3. Freien Node und OS auswählen; SSH-Key setzen, sofern angeboten.
4. Nach Zuteilung NAT-/IPv6-Zugang prüfen und Verlängerung rechtzeitig im Panel erledigen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://openworld.eu.org/) · [Quelle 2](https://openworld.eu.org/faq).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="vpsfreeio"></a>

## VPSFree.io

[Offizieller Einstieg](https://vpsfree.io/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | LXC/Systemcontainer laut Bedingungen; Marketing nennt teils KVM |
| Nachweisstand | Widersprüchliche Angaben; nicht als vertrauenswürdig bestätigt |
| CPU / RAM / Disk | 192 MB RAM + 256 MB Swap, 1 vCPU-Anteil, 3 GB NVMe laut Seite. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Amsterdam, weitere Tarife Frankfurt; gratis Nodebestand prüfen. |
| Karte / Verifikation | Laut Anbieter keine Karte/KYC. |
| Kosten / Folgepreis | 0 nach Sponsor-Schritt; werbefreie Verlängerungsoption kostenpflichtig. |
| Laufzeit / Verlängerung | 10 Tage mit erneuter Sponsoraktivierung. |
| Inklusivtraffic | 100 GB laut kleinstem Tarif. |
| Port / Drosselung | 30 Mbit/s laut kleinstem Tarif. |
| IP / NAT / Kernel | Geteilte IPv4 und 20 Ports; kleinster Gratisplan laut Angebot ohne IPv6. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | 192 MB: ungeeignet für K3s; nur sehr kleine Testdienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Angebot und Terms vergleichen; ungeklärte Betreiberidentität zuerst klären.
2. Bei eigener Entscheidung E-Mail-Konto registrieren und fristgerecht bestätigen.
3. Nur den ausdrücklich kostenlosen LXC-Tarif auswählen; Sponsorbedingungen nicht umgehen.
4. Erst nach realer SSH-Zuteilung prüfen; keinerlei Produktionsgeheimnisse hinterlegen.

### Erfahrungen und Quellen

Keine belastbaren unabhängigen Langzeittests gefunden. Terms enthalten Platzhalter für Firma, Anschrift und Mindestalter; außerdem Windows-/KVM-Widersprüche zur Startseite.

Angebots-/Regelbelege: [Quelle 1](https://vpsfree.io/) · [Quelle 2](https://vpsfree.io/terms).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="ultrahost"></a>

## TheUltraHost Student VPS

[Offizieller Einstieg](https://theultrahost.com/free-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Beworbene KVM-VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | 1 Shared-vCPU, 1 GB RAM, 15 GB NVMe. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Konkreter Standort bei Zuteilung prüfen. |
| Karte / Verifikation | Keine Karte mit Studentenverifikation. |
| Kosten / Folgepreis | 0; Upgrades freiwillig kostenpflichtig. |
| Laufzeit / Verlängerung | Alle 30 Tage Bestätigung; später Pause/Löschung bei Nichtverlängerung. |
| Inklusivtraffic | 250 GB/Monat. |
| Port / Drosselung | Keine verbindliche Portgeschwindigkeit gefunden. |
| IP / NAT / Kernel | IPv6 /64 + 20 NAT-IPv4-Ports; ausgehender Port 25 gesperrt. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | 1 GB zu knapp für Control Plane; kleiner Bot oder API. |
| Mehrere Konten | Explizit ein Gratis-VPS je verifiziertem Studenten. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Explizit verboten. |
| KI / Inferenz / Training | Kleine Bots/API als Einsatz beworben; stundenlange CPU-Volllast ausgeschlossen, daher kein belastbarer Trainingshost. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Kein Mining, Mailserver, öffentliche Proxys oder ausdauernde CPU-Volllast. |
| Backup / SLA | Keine automatischen Backups. |

### Von der Registrierung bis zum ersten Dienst

1. Claim free VPS öffnen und Kundenkonto anlegen.
2. Studentenstatus per Hochschul-E-Mail oder Nachweis verifizieren lassen.
3. Freies OS wählen und Zuteilung abwarten.
4. SSH sichern; 30-Tage-Bestätigung und eigene Backups vorsehen.

### Erfahrungen und Quellen

Kein unabhängiger Langzeittest dieses Gratisplans gefunden. Seite zeigt zudem einen WHMCS-Platzhalterhinweis; Zuteilung nicht bestätigt.

Angebots-/Regelbelege: [Quelle 1](https://theultrahost.com/free-vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="vyce"></a>

## vyce.cloud

[Offizieller Einstieg](https://vyce.cloud/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Beworbenes Root-/VM-Angebot, ungeprüft |
| Nachweisstand | Unbestätigter Kandidat; keine Empfehlung |
| CPU / RAM / Disk | Root-VPS beworben; 4-GB-Werbeangabe nicht durch vollständigen Direktabruf validiert. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Beworbene Standorte nicht unabhängig bestätigt. |
| Karte / Verifikation | Keine Karte beworben; tatsächlich notwendige Verifikation offen. |
| Kosten / Folgepreis | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| Laufzeit / Verlängerung | Ungeklärt; keine Dauerbetriebszusage. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine Empfehlung für Cluster oder produktive Daten. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Zunächst Betreiber, Terms, Datenschutz und unabhängige Erfahrungen prüfen.
2. Erst bei geklärten Bedingungen über das offizielle Portal registrieren; keine wiederverwendeten Passwörter.
3. Tarifpreis, Ablauf, Reklamationsweg und Zahlungsforderung vor Abschluss kontrollieren.
4. Nur nach erfolgreicher Zuteilung SSH testen; bei endlosen Werbe-/Aktivierungsschleifen abbrechen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://vyce.cloud/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="verta"></a>

## Verta Cloud

[Offizieller Einstieg](https://portal.vertacloud.biz/index.php?rp=/store/free-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Beworbenes Root-/VM-Angebot, ungeprüft |
| Nachweisstand | Unbestätigter Kandidat; keine Empfehlung |
| CPU / RAM / Disk | Gratis-Linux-VPS mit 4 GB beworben; Bestellbarkeit und Bedingungen nicht bestätigt. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Beworbene Standorte nicht unabhängig bestätigt. |
| Karte / Verifikation | Keine Karte beworben; tatsächlich notwendige Verifikation offen. |
| Kosten / Folgepreis | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| Laufzeit / Verlängerung | Ungeklärt; keine Dauerbetriebszusage. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine Empfehlung für Cluster oder produktive Daten. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Zunächst Betreiber, Terms, Datenschutz und unabhängige Erfahrungen prüfen.
2. Erst bei geklärten Bedingungen über das offizielle Portal registrieren; keine wiederverwendeten Passwörter.
3. Tarifpreis, Ablauf, Reklamationsweg und Zahlungsforderung vor Abschluss kontrollieren.
4. Nur nach erfolgreicher Zuteilung SSH testen; bei endlosen Werbe-/Aktivierungsschleifen abbrechen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://portal.vertacloud.biz/index.php?rp=/store/free-vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="gratisvps"></a>

## GratisVPS

[Offizieller Einstieg](https://gratisvps.net/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Beworbenes Root-/VM-Angebot, ungeprüft |
| Nachweisstand | Unbestätigter Kandidat; keine Empfehlung |
| CPU / RAM / Disk | Root-/RDP-VPS beworben; widersprüchliche Drittangaben zu Trial und dauerhaft gratis. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Beworbene Standorte nicht unabhängig bestätigt. |
| Karte / Verifikation | Keine Karte beworben; tatsächlich notwendige Verifikation offen. |
| Kosten / Folgepreis | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| Laufzeit / Verlängerung | Ungeklärt; keine Dauerbetriebszusage. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine Empfehlung für Cluster oder produktive Daten. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Zunächst Betreiber, Terms, Datenschutz und unabhängige Erfahrungen prüfen.
2. Erst bei geklärten Bedingungen über das offizielle Portal registrieren; keine wiederverwendeten Passwörter.
3. Tarifpreis, Ablauf, Reklamationsweg und Zahlungsforderung vor Abschluss kontrollieren.
4. Nur nach erfolgreicher Zuteilung SSH testen; bei endlosen Werbe-/Aktivierungsschleifen abbrechen.

### Erfahrungen und Quellen

Mehrere konkrete Nutzerbeschwerden über ausbleibende Aktivierung, Nichterreichbarkeit oder Werbung gefunden. Kleine, nicht repräsentative Stichprobe; Vorwürfe sind keine gerichtsfesten Betrugsnachweise. Keine positive Vertrauensempfehlung.

Angebots-/Regelbelege: [Quelle 1](https://gratisvps.net/).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://www.trustpilot.com/review/gratisvps.net). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="alavps"></a>

## AlaVPS

[Offizieller Einstieg](https://alavps.com/vps.html) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Beworbenes Root-/VM-Angebot, ungeprüft |
| Nachweisstand | Unbestätigter Kandidat; keine Empfehlung |
| CPU / RAM / Disk | Bewirbt 2 Kerne, 8 GB und 128 GB; Bereitstellung nicht nachgewiesen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Beworbene Standorte nicht unabhängig bestätigt. |
| Karte / Verifikation | Keine Karte beworben; tatsächlich notwendige Verifikation offen. |
| Kosten / Folgepreis | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| Laufzeit / Verlängerung | Ungeklärt; keine Dauerbetriebszusage. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine Empfehlung für Cluster oder produktive Daten. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Zunächst Betreiber, Terms, Datenschutz und unabhängige Erfahrungen prüfen.
2. Erst bei geklärten Bedingungen über das offizielle Portal registrieren; keine wiederverwendeten Passwörter.
3. Tarifpreis, Ablauf, Reklamationsweg und Zahlungsforderung vor Abschluss kontrollieren.
4. Nur nach erfolgreicher Zuteilung SSH testen; bei endlosen Werbe-/Aktivierungsschleifen abbrechen.

### Erfahrungen und Quellen

Mehrere konkrete Nutzerbeschwerden über ausbleibende Aktivierung, Nichterreichbarkeit oder Werbung gefunden. Kleine, nicht repräsentative Stichprobe; Vorwürfe sind keine gerichtsfesten Betrugsnachweise. Keine positive Vertrauensempfehlung.

Angebots-/Regelbelege: [Quelle 1](https://alavps.com/vps.html).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://www.trustpilot.com/review/alavps.com). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="freevpsedu"></a>

## FreeVPS.edu.pl

[Offizieller Einstieg](https://freevps.edu.pl/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Beworbenes Root-/VM-Angebot, ungeprüft |
| Nachweisstand | Unbestätigter Kandidat; keine Empfehlung |
| CPU / RAM / Disk | Studenten-/Windows-/Linux-VPS beworben; heutige zuverlässige Bereitstellung nicht nachgewiesen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Beworbene Standorte nicht unabhängig bestätigt. |
| Karte / Verifikation | Keine Karte beworben; tatsächlich notwendige Verifikation offen. |
| Kosten / Folgepreis | Gratiswerbung ist kein Kosten-/Liefernachweis; Vertragsdaten vor Registrierung prüfen. |
| Laufzeit / Verlängerung | Ungeklärt; keine Dauerbetriebszusage. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine Empfehlung für Cluster oder produktive Daten. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Zunächst Betreiber, Terms, Datenschutz und unabhängige Erfahrungen prüfen.
2. Erst bei geklärten Bedingungen über das offizielle Portal registrieren; keine wiederverwendeten Passwörter.
3. Tarifpreis, Ablauf, Reklamationsweg und Zahlungsforderung vor Abschluss kontrollieren.
4. Nur nach erfolgreicher Zuteilung SSH testen; bei endlosen Werbe-/Aktivierungsschleifen abbrechen.

### Erfahrungen und Quellen

Mehrere konkrete Nutzerbeschwerden über ausbleibende Aktivierung, Nichterreichbarkeit oder Werbung gefunden. Kleine, nicht repräsentative Stichprobe; Vorwürfe sind keine gerichtsfesten Betrugsnachweise. Keine positive Vertrauensempfehlung.

Angebots-/Regelbelege: [Quelle 1](https://freevps.edu.pl/).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://www.trustpilot.com/review/freevps.edu.pl). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="freemach"></a>

## FreeMach

[Offizieller Einstieg](https://freemach.rowe.sh/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | KVM-VM, historisch |
| Nachweisstand | Veralteter Fund; aktuell nicht als verfügbar gezählt |
| CPU / RAM / Disk | EU: 2 vCPU/2 GB/25 GB; USA: 2 vCPU/3 GB/120 GB laut alter Seite. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Bulgarien, USA. |
| Karte / Verifikation | Nicht belegt. |
| Kosten / Folgepreis | Historisch kostenlos; Seite zeigt 0 freie Slots und einen 2021 abgelaufenen Sponsorzeitraum. |
| Laufzeit / Verlängerung | Kein aktuelles Angebot bestätigt. |
| Inklusivtraffic | Historisch 1 TB/Monat. |
| Port / Drosselung | Historisch 1 Gbit/s. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht für neue Infrastruktur einplanen. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Communityalter, FraudRecord-Prüfung und individuelle Bewerbung verhindern zugesicherte Vollautonomie. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Kein SLA; alte US-Seite nennt RAID0. |

### Von der Registrierung bis zum ersten Dienst

1. Historische Angebotsseite lesen.
2. Zuerst aktuelle Wiederaufnahme beim Betreiber prüfen; kein Konto nur aufgrund alter Angaben erstellen.
3. Bei bestätigter Wiederaufnahme Communityprofil und konkreten Lernzweck über Antragsformular vorlegen.
4. Erst nach individueller Zusage heutigen Tarif und SSH-Daten prüfen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://freemach.rowe.sh/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="vpswala"></a>

## VPSWala

[Offizieller Einstieg](https://vpswala.org/blog/get/free-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Weiterleitungs-/Vermittlungsseite |
| Nachweisstand | Als eigenständiger Gratisanbieter ausgeschlossen |
| CPU / RAM / Disk | Keine eigene Gratis-VM-Zuteilung nachgewiesen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Keine bestätigten eigenen Standorte. |
| Karte / Verifikation | Zielangebot kann Karte verlangen. |
| Kosten / Folgepreis | Direktabruf leitete auf Kamatera-Affiliateziel; dessen Trialbedingungen gelten. |
| Laufzeit / Verlängerung | Kein eigener Gratis-Dauerbetrieb belegt. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht als zusätzlicher unabhängiger VPS zählen. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Weiterleitungsziel prüfen.
2. Bei Interesse direkt offizielle Kamatera-Seite nutzen.
3. Dort Zahlungsprüfung und Trial-/Kündigungsbedingungen beachten.
4. Keine Registrierung als eigener VPS-Anbieter empfehlen.

### Erfahrungen und Quellen

Konkrete Weiterleitungsbeschwerden auf Trustpilot passen zum beobachteten Affiliate-Redirect. Das ersetzt keine rechtliche Bewertung.

Angebots-/Regelbelege: [Quelle 1](https://vpswala.org/blog/get/free-vps).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://www.trustpilot.com/review/vpswala.org). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="aws"></a>

## AWS Free Plan / EC2

[Offizieller Einstieg](https://aws.amazon.com/free/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM (EC2) |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Neue Konten: 100 USD Startguthaben, weitere bis zu 100 USD durch Aktivitäten; VM-Auswahl und Ressourcen verbrauchen Guthaben. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Weltweite AWS-Regionen, Free-Plan-/Serviceverfügbarkeit prüfen. |
| Karte / Verifikation | Bei Standardregistrierung Zahlungsmittel und Telefonprüfung; land-/kontospezifisch. |
| Kosten / Folgepreis | Free Plan bis 6 Monate oder Guthabenende ohne Nutzungsgebühr; Paid Plan kann Mehrkosten verursachen. Keine pauschale 12-Monats-EC2-Zusage für neue Konten. |
| Laufzeit / Verlängerung | Free Plan endet automatisch spätestens nach 6 Monaten; Ressourcen-/Datenzugriff entfällt. |
| Inklusivtraffic | Tarif-/Region-/Dienstabhängig; öffentliche IPv4, Volumes und Egress in der Kostenansicht prüfen. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nur befristetes Lerncluster; größere Instanz verbraucht Guthaben schneller. |
| Mehrere Konten | Gratisguthaben nicht für mehrere Konten derselben Person/Organisation vervielfachen; AWS Organizations aggregiert Nutzung. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | AWS CLI, SDK, EC2 API, cloud-init und OpenTofu nach legitimer Registrierung. |
| Mining | Unter Free-Tier-Angeboten ausdrücklich verboten; mögliche Nachberechnung und Sperre. |
| KI / Inferenz / Training | AWS bewirbt KI-/Agentenentwicklung; Modell-APIs, Training und GPU-Ressourcen nicht automatisch vom EC2-Guthaben abgedeckt. |
| Krypto-Werkzeuge / Full Nodes | AWS beschreibt selbstverwaltete Blockchain-Nodes auf EC2/EKS offiziell; konkrete Free-Plan-Verfügbarkeit, Speicher und Kosten getrennt prüfen. |
| Staking / Validatoren | Offizielle EC2-Validator-Anleitung vorhanden; kein Nachweis, dass deren Ressourcen gratis oder für dieses kleine Kontingent passend sind. |
| Trading-Bots / Analyse | Offizielle AWS-Referenzarchitektur für Digital-Asset-Exchanges vorhanden; kein Freibrief für jede Strategie oder Konto-/Börsennutzung. |
| Öffentliche Tradingplattform | Als AWS-Anwendungsfall dokumentiert, vorbehaltlich Vertrag, Berechtigung und erforderlicher Betreiberzulassung; keine pauschale Rechtsfreigabe. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle AWS-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Free Plan ausdrücklich vom Paid Plan unterscheiden.
3. Eine im aktuellen Free Plan verfügbare EC2-Instanz mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html) · [Quelle 2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-free-tier-usage.html) · [Quelle 3](https://aws.amazon.com/free/terms/) · [Quelle 4](https://aws.amazon.com/blogs/web3/build-a-digital-assets-exchange-on-aws-a-reference-architecture-2/) · [Quelle 5](https://aws.amazon.com/blogs/database/automate-ethereum-node-validator-deployment-on-amazon-ec2-using-aws-cdk/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="azure"></a>

## Microsoft Azure Free Account

[Offizieller Einstieg](https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | 200 USD für 30 Tage; ausgewählte VM-Mengen bis 12 Monate, konkrete SKU im aktuellen Angebot prüfen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Weltweite Regionen; kostenlose SKU regional begrenzt. |
| Karte / Verifikation | Telefon und nicht vorausbezahlte Kredit-/Debitkarte; Länderabweichungen. |
| Kosten / Folgepreis | Kein automatischer kostenpflichtiger Wechsel ohne bewusste PAYG-Umstellung; danach können VM, Disk, IP, Egress und Zusatzdienste kostenpflichtig werden. |
| Laufzeit / Verlängerung | Nach Guthaben/30 Tagen ohne Umstellung deaktiviert; ausgewählte Freimengen sind keine dauerhafte Gratis-VM. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Befristetes Labor; für Control Plane ausreichend großen bezahlten/freigedeckten Tarif wählen. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Azure CLI, ARM/Bicep, API und OpenTofu nach menschlicher Kontoverifikation. |
| Mining | Im gelesenen Azure-Plan-Angebot ausdrücklich ausgeschlossen. |
| KI / Inferenz / Training | Azure bewirbt KI-Dienste, jedoch sind Modell-APIs und Rechenressourcen getrennt zu prüfen; keine allgemeine Gratis-KI. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Microsoft Azure-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Spending Limit beibehalten, wenn kein bezahlter Fortbetrieb gewünscht.
3. Eine ausdrücklich im Abo kostenlose Linux-VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account) · [Quelle 2](https://azure.microsoft.com/en-gb/pricing/offers/ms-azr-0017g).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="azure-students"></a>

## Azure for Students

[Offizieller Einstieg](https://azure.microsoft.com/en-us/free/students/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Berechtigungsgebundenes Cloudguthaben |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | 100 USD für 12 Monate, ausgewählte freie Dienste; Students Starter ist ein anderes Angebot. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Länder-/Hochschul-/Regionsberechtigung beachten. |
| Karte / Verifikation | Keine Kreditkarte; verifizierter Hochschulstatus. |
| Kosten / Folgepreis | 0 im berechtigten Guthabenrahmen; Upgrade/PAYG bewusst getrennt. Kosten bei entfernten Ausgabenlimits möglich. |
| Laufzeit / Verlängerung | Jährlich erneuerbar bei weiterem Studentenstatus; keine Garantie über Ausbildung hinaus. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Zeitlich begrenztes Labor; VM und Netzwerk konkret budgetieren. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Nicht unabhängig vom Menschen: nachzuweisender Studentenstatus und persönliches Konto. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | KI-/Lernanwendungen werden ausdrücklich beworben; Zusatzprodukte und Ressourcen einzeln budgetieren. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Students-Seite öffnen und das volle Azure-for-Students-Angebot auswählen.
2. Microsoft-/GitHub-Konto und berechtigte Hochschuladresse bzw. Studentenstatus verifizieren.
3. 100-USD-Guthaben und Ablauf im Portal prüfen; kleine Linux-VM mit SSH-Key wählen.
4. Kostenlimits beibehalten und den gemeinsamen SSH-Einstieg nutzen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://azure.microsoft.com/en-us/free/students/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="do"></a>

## DigitalOcean Droplets

[Offizieller Einstieg](https://www.digitalocean.com/products/droplets) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Kleine Droplets ab beworbenen 4 USD/Monat; Trialguthaben ist aktions-/kontospezifisch. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | USA, Europa und Asien; gewählte Region und Tarifgeneration prüfen. |
| Karte / Verifikation | Gültiges Zahlungsmittel; aktuelle Methoden bei Kontoerstellung. |
| Kosten / Folgepreis | Nur tatsächlich eingebuchtes Guthaben als gratis rechnen. Danach reguläre VM-Kosten; neuere v5-IPv4 separat. Abschalten beendet nicht zwingend Abrechnung. |
| Laufzeit / Verlängerung | Guthabenfrist laut Billing; Droplet und Zusatzressourcen vor Ablauf löschen, wenn kein Fortbetrieb gewünscht. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Kleinster Tarif eher Einzelservice; für K3s mindestens 2 Kerne/2 GB plus Reserve. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | doctl, API, cloud-init und OpenTofu. |
| Mining | Ohne ausdrückliche schriftliche Erlaubnis verboten. |
| KI / Inferenz / Training | KI/automatisierte Systeme in AUP berücksichtigt; Datenrechte und Missbrauchsregeln gelten, keine Gratis-GPU. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle DigitalOcean-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Guthabenhöhe und Enddatum nicht aus alten 200-USD/60-Tage-Listen übernehmen.
3. Droplet mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.digitalocean.com/products/droplets) · [Quelle 2](https://docs.digitalocean.com/products/droplets/details/pricing/) · [Quelle 3](https://www.digitalocean.com/legal/acceptable-use-policy).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="vultr"></a>

## Vultr Cloud Compute

[Offizieller Einstieg](https://docs.vultr.com/platform/create-an-account) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Trial-/Promo-Angebote variieren; aktuelle Anleitung nennt Credits bis 30 Tage. OpenClaw-Sonderangebot nennt 7 Tage/max. 25 USD. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Weltweite Standorte, konkrete Tarifverfügbarkeit prüfen. |
| Karte / Verifikation | Karte mit 0-USD-Verknüpfungsoption; andere Methoden können Einzahlung verlangen. |
| Kosten / Folgepreis | Guthaben befristet; danach normale Tarife und Zusatzkosten. Kein kostenloser Dauertarif bestätigt. |
| Laufzeit / Verlängerung | Nicht benötigte Ressourcen vor Creditende deprovisionieren. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Befristet je Größe; keine kostenfreie Dauer-Control-Plane. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | OpenClaw-Nutzung im gesonderten Anbieterangebot ausdrücklich beworben; keine Freigabe beliebiger Trainingslast daraus ableiten. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Vultr-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Coupon tatsächlich einlösen und aktuelle Konditionen im Billing festhalten.
3. Cloud-Compute-VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://docs.vultr.com/platform/create-an-account) · [Quelle 2](https://discover.vultr.com/openclaw-offer).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="akamai"></a>

## Akamai Cloud / Linode

[Offizieller Einstieg](https://www.akamai.com/cloud/pricing) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM |
| Nachweisstand | Anbieter/Preisseite geprüft; aktuelle Trialhöhe nicht bestätigt |
| CPU / RAM / Disk | Kleine Shared-CPU-VMs; heutiger Einstiegspreis/Promo im aktuellen Konto prüfen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Weltweite Standorte. |
| Karte / Verifikation | Zahlungsmittel und Betrugs-/Kontoprüfung. |
| Kosten / Folgepreis | Historisches 100-USD/60-Tage-Angebot nicht als aktuelle Garantie übernommen; nach Promo reguläre Kosten. |
| Laufzeit / Verlängerung | Guthabenende bzw. laufender Tarif; Löschen statt nur Abschalten prüfen. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif K3s denkbar; Nanode-Größe kein Control-Plane-Standard. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Akamai/Linode-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Aktuelle Promo und Produktpreis bestätigen.
3. Shared-CPU-VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Älterer konkreter Communityfall bestätigt automatische Weiterberechnung nach Promofrist; nicht als heutiger Preisnachweis verwendet.

Angebots-/Regelbelege: [Quelle 1](https://www.akamai.com/cloud/pricing).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://www.linode.com/community/questions/20773/promotional-credit-expiration). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="kamatera"></a>

## Kamatera

[Offizieller Einstieg](https://www.kamatera.com/free-trial/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Ein Testserver bis 100 USD Konfigurationswert, 30 Tage; keine beliebig vielen Gratis-VMs. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Weltweite Standorte; Verfügbarkeit/Trafficpreis nach Region. |
| Karte / Verifikation | Karte erforderlich; in bestimmten Fällen rückzahlbare PayPal-Kaution als Alternative. |
| Kosten / Folgepreis | Nach 30 Tagen automatische Berechnung bei Weiterbetrieb; Mehrverbrauch kann schon im Trial kostenpflichtig sein. |
| Laufzeit / Verlängerung | Vor Ablauf Server terminieren, falls kein bezahlter Fortbetrieb gewünscht. |
| Inklusivtraffic | 1 TB inklusive ein-/ausgehend im Trial. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Befristetes Testcluster; Rechnungslimits und Einzelservergrenze beachten. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Kamatera-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Konfiguration innerhalb 100-USD-Trialgrenze halten.
3. Einen Testserver mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.kamatera.com/faq/answer/what-are-the-terms-of-the-free-trial/) · [Quelle 2](https://www.kamatera.com/faq/answer/can-i-sign-up-for-the-free-trial-without-a-credit-card/) · [Quelle 3](https://www.kamatera.com/knowledgebase/how-to-deploy-a-kamatera-server/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="alibaba"></a>

## Alibaba Cloud ECS

[Offizieller Einstieg](https://www.alibabacloud.com/en/free) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Neukunden-/ECS-Trial aktionsabhängig; offizielle ECS-Anleitung nennt bis 3 Monate, nicht universell für jede SKU. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Weltweit; Festlandchina kann zusätzliche Identitäts-/Websiteanforderungen haben. |
| Karte / Verifikation | Konto und Karte/PayPal laut offizieller ECS-Anleitung. |
| Kosten / Folgepreis | Nur aktivierten Trial buchen; danach ECS, öffentliche Bandbreite, Disks und Snapshots regulär. Auto-Renew im Auftrag prüfen. |
| Laufzeit / Verlängerung | Ablauf und Verlängerung in ECS/Billing kontrollieren. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Befristetes Labor; Region-/Bandbreitenpaket in Planung einbeziehen. |
| Mehrere Konten | Neukundenaktion setzt Konto ohne historische Bestellung voraus; daraus keine Mehrfachkontoerlaubnis. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Offizielle Cloud-/OpenClaw-Angebote vorhanden; konkrete ECS-Trainings-/Miningbedingungen nicht abschließend geprüft. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Alibaba Cloud-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Angebot aktivieren, bevor reguläre kostenpflichtige ECS-Bestellung erstellt wird.
3. Trialberechtigte ECS-Linux-Instanz mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.alibabacloud.com/en/free) · [Quelle 2](https://www.alibabacloud.com/help/en/ecs/user-guide/quickly-purchase-a-windows-instance-and-build-an-iis-service) · [Quelle 3](https://www.alibabacloud.com/help/en/cloud-migration-guide-for-beginners/latest/where-is-aliyun-official-website-search).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="ovh-trial"></a>

## OVHcloud Public Cloud Trial

[Offizieller Einstieg](https://www.ovhcloud.com/asia/public-cloud/free-trial/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM / OpenStack |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Einmonatiges Neukundenguthaben; Währung und Höhe regional (z. B. 200 USD) unterschiedlich. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Weltweite Public-Cloud-Regionen, Konto-/Produktregion prüfen. |
| Karte / Verifikation | Gültige Zahlungsmethode erforderlich. |
| Kosten / Folgepreis | Nach Verbrauch/Ende automatische reguläre Abrechnung der verbleibenden Ressourcen. |
| Laufzeit / Verlängerung | Ressourcen und Projekt-Abrechnung vor Ende prüfen; kein automatisches Gratis-Dauerangebot. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Für Labor mit Budget geeignet; separater kostenpflichtiger OVH-VPS ist anderes Produkt. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Laut offizieller Blockchain-Produktseite keine PoW-Blockchain-Anwendungen oder Mining; Trial ist keine Ausnahme. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | RPC/API-Nodes und Web3-Anwendungen auf Public Cloud ausdrücklich als Einsatz beschrieben; Freiguthaben-/Tarifressourcen gesondert prüfen. |
| Staking / Validatoren | PoS-Validatoren/Staking im OVH-Portfolio unterstützt; Empfehlungen überwiegend Dedicated-Server, keine Zusage für einen kleinen Trial-VPS. |
| Trading-Bots / Analyse | Offizielle Blockchainseite zeigt Krypto-Trading-Infrastruktur als Kundenanwendung; konkrete Vertrags-/Ressourcenbedingungen weiter prüfen. |
| Öffentliche Tradingplattform | Exchanges/DeFi als Public-Cloud-Anwendungsfall beworben; dies ersetzt weder lokalen Tarifvertrag noch nötige Betreiber-/Finanzaufsichtserlaubnisse. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle OVHcloud-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Voucher im ersten berechtigten Projekt aktivieren und Autoabrechnung beachten.
3. Public-Cloud-Instanz mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.ovhcloud.com/asia/public-cloud/free-trial/) · [Quelle 2](https://us.ovhcloud.com/solutions/blockchain/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="prepaid"></a>

## Prepaid-Hoster Testserver

[Offizieller Einstieg](https://www.prepaid-hoster.de/vserver/vserver-testen-neu.html) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | VM mit IPv4/Root |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | 7 Tage; Anbieter nennt auswählbar 2–6 Kerne, 2–8 GB RAM, 50 GB SSD. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Deutschland; konkretes Rechenzentrum bestätigen. |
| Karte / Verifikation | Keine Kartenzwangsangabe im Testformular; persönliche Prüfung. |
| Kosten / Folgepreis | Test 0, keine versteckten Abos laut Seite; bezahlte Übernahme durch Entfernen der Kündigung. |
| Laufzeit / Verlängerung | Einmaliger Test pro Haushalt und Konto; Formular aktuell in Wartung, Kontaktweg genannt. |
| Inklusivtraffic | 2,5 TB laut Testserver-FAQ. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Eigene IPv4 und Root laut Angebot. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Zeitlich begrenzter K3s-Test bei passender Zuteilung möglich. |
| Mehrere Konten | Test ausdrücklich nur einmal pro Haushalt und Account. |
| Registrierung ohne Menschen | Nicht vollautonom zugesichert: manuelle Antragsprüfung. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Testseite öffnen; aktuell den angegebenen Kontaktweg statt defektem Formular nutzen.
2. Echte Kontaktdaten und Einsatzzweck einreichen; persönliche Freigabe abwarten.
3. Zugewiesenen Tarif, Testende und automatische Kündigung prüfen.
4. SSH-Key einrichten; nur bewusst kostenpflichtig übernehmen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.prepaid-hoster.de/vserver/vserver-testen-neu.html).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="1free"></a>

## 1Free.eu VPS S

[Offizieller Einstieg](https://www.1free.eu/en) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Root-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | 1 vCPU, 1 GB RAM, 20 GB SSD laut Aktionsseite. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Standort beim Anbieter bestätigen. |
| Karte / Verifikation | Keine Karte/Stripe für 30-Tage-Test laut Seite. |
| Kosten / Folgepreis | 30 Tage 0, danach 5 PLN/Monat oder 60 PLN/Jahr per einmaliger Zahlung; kein Abo laut Angebot. |
| Laufzeit / Verlängerung | Aktion laut Seite nur bis 30.11.2026; Verlängerung bewusst bezahlen. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | 1 GB: Einzelservice statt Control Plane. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Auf offizieller Seite zum VPS-S-Test wechseln; Gratis-Webhosting ist anderes Produkt.
2. Konto anlegen und E-Mail verifizieren; Aktionsgültigkeit und 0-Preis bestätigen.
3. OS/SSH-Zugang nach Bereitstellung einrichten.
4. Zum Ablauf sichern und bewusste Bezahlverlängerung entscheiden.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.1free.eu/en).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="freelivps"></a>

## FreeLiVPS

[Offizieller Einstieg](https://freelivps.com/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Ehemalige Trialwerbung |
| Nachweisstand | Ausgeschieden: aktuelle Seite ist Domainauktion |
| CPU / RAM / Disk | Kein aktueller VPS-Tarif erkennbar. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Keine bestätigten Standorte. |
| Karte / Verifikation | Nicht anwendbar. |
| Kosten / Folgepreis | Direktabruf zeigt Domain-Auktionsseite; alte 7-/30-Tage-Trialangaben sind überholt. |
| Laufzeit / Verlängerung | Nicht als heute verfügbar gezählt. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Ungeeignet. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Domain prüfen.
2. Bei Auktions-/Parkseite keine VPS-Registrierung beginnen.
3. Anderen bestätigten Anbieter aus dem Katalog wählen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://freelivps.com/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="ionos"></a>

## IONOS VPS

[Offizieller Einstieg](https://www.ionos.de/server/free-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtige VM mit Geld-zurück-Garantie |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Beispiel S+: 1 vCore, 2 GB RAM, 60 GB NVMe laut gelesener Seite. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | EU, USA, Großbritannien laut Produktseite. |
| Karte / Verifikation | Zahlungsmethode erforderlich; konkrete Kartenzwangsfrage im Checkout offen. |
| Kosten / Folgepreis | Beispiel S+: 2 EUR/Monat für 3 Monate, danach 5 EUR; 10 EUR Einrichtung laut Seite. 30-Tage-Erstattung nach Bedingungen, keine bedingungslose Gratis-VM. |
| Laufzeit / Verlängerung | Laufzeit, Kündigung und Erstattungsumfang im individuellen Vertrag prüfen. |
| Inklusivtraffic | Als unbegrenzt beworben; Tarif-/Missbrauchsregeln bleiben relevant. |
| Port / Drosselung | Bis zu 1 Gbit/s laut Seite. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | 2-GB/1-Kern-Einstieg unter K3s-Server-Mindestkernzahl; größere Variante wählen. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | OpenClaw-/Agenten-Apps als Einsatz ausdrücklich beworben; vorgefertigte Images passen nicht automatisch zur nativen OpenClaw-Installationsrichtlinie. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle IONOS-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Kostenpflichtigen Vertrag und Erstattungsbedingungen statt Gratisversprechen bewerten.
3. Unmanaged Linux-VPS mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.ionos.de/server/free-vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="dogado"></a>

## dogado VPS

[Offizieller Einstieg](https://www.dogado.de/vps/vserver-bei-dogado/vserver-kostenlos-testen) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtige VM mit Geld-zurück-Garantie |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Aktuelles VPS-Paket auswählen; keine Gratis-Ressourcenzusage. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Tarifstandort prüfen. |
| Karte / Verifikation | Zahlungsmethode erforderlich; genaue Auswahl im Checkout. |
| Kosten / Folgepreis | 30 Tage Geld-zurück, bei Unzufriedenheit kündigen und Erstattung erhalten; danach regulärer Tarif. |
| Laufzeit / Verlängerung | Monatliche Vertragslaufzeit laut Artikel; Bestellung maßgeblich. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif K3s möglich; keine kostenlose Dauerinfrastruktur. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle dogado-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Preis, Erstattung und Kündigung schriftlich festhalten.
3. Linux-VPS mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.dogado.de/vps/vserver-bei-dogado/vserver-kostenlos-testen).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="freevpshostings"></a>

## FreeVPSHostings.com

[Offizieller Einstieg](https://freevpshostings.com/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Vermittlungs-/Trialangebot mit widersprüchlicher Rootwerbung |
| Nachweisstand | Nicht als eigenständiger kostenloser Root-VPS bestätigt |
| CPU / RAM / Disk | Learner nennt 1 Kern/1 GB/500 MB, zugleich ausdrücklich kein Root und nur WordPress. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Keine eigenen Standorte unabhängig bestätigt. |
| Karte / Verifikation | Je Zielangebot offen; Werbetitel ist kein Beleg. |
| Kosten / Folgepreis | Learner nur 7 Tage; Premium erster Monat 0, danach ab 4 USD laut Seite. Nicht dauerhaft kostenlos. |
| Laufzeit / Verlängerung | Tatsächlichen Vertragspartner und Autoabrechnung vor Abschluss klären. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Learner ungeeignet: kein Root. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Tarifdetails statt Lifetime-Titel lesen.
2. Vertragspartner und Ziel des Bestellbuttons klären.
3. Nur bei bestätigten Bedingungen Konto beim tatsächlichen Leistungserbringer anlegen.
4. Bei Root-Bedarf Learner nicht buchen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://freevpshostings.com/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="render"></a>

## Render

[Offizieller Einstieg](https://render.com/docs/free) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | App-/Shared-Hosting, kein allgemeiner Root-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Free-Webservice; keine persistente Gratisdisk. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Plattformregion auswählen; kein Anspruch auf freie VM-Standortwahl. |
| Karte / Verifikation | Free-Nutzung ohne Karte teils möglich; aktuelle Anti-Abuse-/Billingprüfung beachten. |
| Kosten / Folgepreis | Freier Webservice innerhalb Limits; zusätzliche Dienste/Pipelines/Traffic können kostenpflichtig sein. |
| Laufzeit / Verlängerung | Sleep nach 15 Minuten ohne eingehenden Traffic; Free-Postgres endet nach 30 Tagen. |
| Inklusivtraffic | 750 Instanzstunden je Workspace/Monat; Egress/Pipelinekontingente separat. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht als eigener Kubernetes-Knoten verwendbar. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Kleine HTTP-/Bot-Anwendung nur im angebotenen Laufzeitmodell denkbar; keine pauschale Trainingsfreigabe. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Lokale Dateien gehen bei Neustart/Deploy/Sleep verloren; keine Datenbank-Dauerzusage. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite öffnen und Konto mit E-Mail oder vorgesehenem OAuth anmelden.
2. Freies Projekt/App-Angebot ausdrücklich auswählen und notwendige Kontoüberprüfung abschließen.
3. Quellrepository oder unterstützten nativen Buildpfad verbinden, Umgebungsvariablen separat als Secrets hinterlegen.
4. Sleep-, Speicher-, Egress- und Kostenlimits testen; keine Kubernetes-/Rootrechte unterstellen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://render.com/docs/free).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="koyeb"></a>

## Koyeb

[Offizieller Einstieg](https://www.koyeb.com/docs) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | App-/Shared-Hosting, kein allgemeiner Root-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Free Instance: 512 MB, 0,1 vCPU, 2 GB SSD laut Dokumentation. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Plattformregion auswählen; kein Anspruch auf freie VM-Standortwahl. |
| Karte / Verifikation | Kartenerfordernis für aktuellen Onboarding-/Organisationstarif nicht eindeutig bestätigt. |
| Kosten / Folgepreis | Freie Instanz separat von kostenpflichtigen Organisationstarifen und Extras. |
| Laufzeit / Verlängerung | Sleep-/Scale-to-zero-Regeln und Regionswahl prüfen. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht als eigener Kubernetes-Knoten verwendbar. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Kleine HTTP-/Bot-Anwendung nur im angebotenen Laufzeitmodell denkbar; keine pauschale Trainingsfreigabe. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite öffnen und Konto mit E-Mail oder vorgesehenem OAuth anmelden.
2. Freies Projekt/App-Angebot ausdrücklich auswählen und notwendige Kontoüberprüfung abschließen.
3. Quellrepository oder unterstützten nativen Buildpfad verbinden, Umgebungsvariablen separat als Secrets hinterlegen.
4. Sleep-, Speicher-, Egress- und Kostenlimits testen; keine Kubernetes-/Rootrechte unterstellen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.koyeb.com/docs).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="railway"></a>

## Railway

[Offizieller Einstieg](https://docs.railway.com/pricing/plans) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | App-/Shared-Hosting, kein allgemeiner Root-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Free: bis 0,5 GB RAM/1 vCPU; tatsächliche Laufzeit durch Guthaben begrenzt. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Plattformregion auswählen; kein Anspruch auf freie VM-Standortwahl. |
| Karte / Verifikation | Free-Nutzung ohne Karte teils möglich; aktuelle Anti-Abuse-/Billingprüfung beachten. |
| Kosten / Folgepreis | Free 0 USD mit 1 USD Verbrauchsguthaben/Monat; Hobby 5 USD Grundpreis plus Verbrauchsmodell. |
| Laufzeit / Verlängerung | Guthaben-/Verbrauchslimit, kein pauschaler kostenloser Dauer-Server. |
| Inklusivtraffic | Egress laut Preisdokument 0,05 USD/GB; verbraucht Budget. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht als eigener Kubernetes-Knoten verwendbar. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | CLI/API nach rechtmäßiger Registrierung; Agentenprodukte sind kein Beleg für botbasierte Kontoneuanlage. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Kleine HTTP-/Bot-Anwendung nur im angebotenen Laufzeitmodell denkbar; keine pauschale Trainingsfreigabe. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite öffnen und Konto mit E-Mail oder vorgesehenem OAuth anmelden.
2. Freies Projekt/App-Angebot ausdrücklich auswählen und notwendige Kontoüberprüfung abschließen.
3. Quellrepository oder unterstützten nativen Buildpfad verbinden, Umgebungsvariablen separat als Secrets hinterlegen.
4. Sleep-, Speicher-, Egress- und Kostenlimits testen; keine Kubernetes-/Rootrechte unterstellen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://docs.railway.com/pricing/plans).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="fly"></a>

## Fly.io

[Offizieller Einstieg](https://fly.io/docs/about/free-trial/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | App-/Shared-Hosting, kein allgemeiner Root-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Trial-MicroVMs für Apps, kein allgemeiner K3s-Rootserver. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Plattformregion auswählen; kein Anspruch auf freie VM-Standortwahl. |
| Karte / Verifikation | Probe ohne Karte möglich; Fortbetrieb verlangt Zahlungsmittel. |
| Kosten / Folgepreis | Neue Konten: nur kurze Probe; altes dauerhaftes 3-VM-Freikontingent nicht als aktuelle Zusage. |
| Laufzeit / Verlängerung | 2 VM-Stunden oder 7 Tage, je nachdem früher; Trial-Maschinen stoppen nach 5 Minuten. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht als eigener Kubernetes-Knoten verwendbar. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Kurztests im Trialrahmen; ungeeignet für kontinuierliche Inferenz/Training. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite öffnen und Konto mit E-Mail oder vorgesehenem OAuth anmelden.
2. Freies Projekt/App-Angebot ausdrücklich auswählen und notwendige Kontoüberprüfung abschließen.
3. Quellrepository oder unterstützten nativen Buildpfad verbinden, Umgebungsvariablen separat als Secrets hinterlegen.
4. Sleep-, Speicher-, Egress- und Kostenlimits testen; keine Kubernetes-/Rootrechte unterstellen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://fly.io/docs/about/free-trial/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="serv00"></a>

## serv00

[Offizieller Einstieg](https://www.serv00.com/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | App-/Shared-Hosting, kein allgemeiner Root-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Shared FreeBSD-Hosting: 512 MB, 3 GB Disk, 15 Prozesse, 3 TCP/UDP-Ports; SSH ohne Root. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Plattformregion auswählen; kein Anspruch auf freie VM-Standortwahl. |
| Karte / Verifikation | Free-Nutzung ohne Karte teils möglich; aktuelle Anti-Abuse-/Billingprüfung beachten. |
| Kosten / Folgepreis | Kostenlos; Premiumhost ist anderes Angebot. |
| Laufzeit / Verlängerung | Aktuelle Aktivitäts-/Kontoregeln lesen; keine VM-Dauerzusage. |
| Inklusivtraffic | Als unbegrenzt beworben; Prozess-/Port-/AUP-Grenzen gelten. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht als eigener Kubernetes-Knoten verwendbar. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Registrierungsseite nennt manuelle Prüfung bis etwa 72 Stunden; vollständige Autonomie nicht belegt. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Kleine HTTP-/Bot-Anwendung nur im angebotenen Laufzeitmodell denkbar; keine pauschale Trainingsfreigabe. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Register-account-Seite öffnen und echte Kontodaten eintragen.
2. Aktuelle Bedingungen und Registrierungsanforderungen lesen; manuelle Prüfung abwarten.
3. Nach Freigabe DevilWEB und SSH mit bereitgestelltem Hostnamen nutzen.
4. Nur unterstützte FreeBSD-Programme installieren; kein Linux-Kernel/K3s.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.serv00.com/) · [Quelle 2](https://www.serv00.com/register-account/) · [Quelle 3](https://forum.serv00.com/d/1565-unable-to-register-for-free-vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="heliohost"></a>

## HelioHost

[Offizieller Einstieg](https://heliohost.org/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | App-/Shared-Hosting, kein allgemeiner Root-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Gratis-Webhosting einer gemeinnützigen Organisation; eigene VPS kostenpflichtig. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Plattformregion auswählen; kein Anspruch auf freie VM-Standortwahl. |
| Karte / Verifikation | Free-Nutzung ohne Karte teils möglich; aktuelle Anti-Abuse-/Billingprüfung beachten. |
| Kosten / Folgepreis | Gratis-Webhosting; bestimmte bevorzugte Accounts gegen Spende, VPS regulär kostenpflichtig. |
| Laufzeit / Verlängerung | Anmeldefenster, Warteschlange und Aktivitätsregeln prüfen. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht als eigener Kubernetes-Knoten verwendbar. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Kleine HTTP-/Bot-Anwendung nur im angebotenen Laufzeitmodell denkbar; keine pauschale Trainingsfreigabe. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite öffnen und Konto mit E-Mail oder vorgesehenem OAuth anmelden.
2. Freies Projekt/App-Angebot ausdrücklich auswählen und notwendige Kontoüberprüfung abschließen.
3. Quellrepository oder unterstützten nativen Buildpfad verbinden, Umgebungsvariablen separat als Secrets hinterlegen.
4. Sleep-, Speicher-, Egress- und Kostenlimits testen; keine Kubernetes-/Rootrechte unterstellen.

### Erfahrungen und Quellen

Offizielle Community/Support vorhanden; in dieser Recherche kein unabhängiger Test der aktuellen Gratiszuteilung.

Angebots-/Regelbelege: [Quelle 1](https://heliohost.org/) · [Quelle 2](https://heliohost.org/signup/?error=closed).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="hetzner"></a>

## Hetzner Cloud

[Offizieller Einstieg](https://www.hetzner.com/cloud/cost-optimized/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | CX23 bzw. ARM CAX je aktueller Verfügbarkeit. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Deutschland/Finnland, andere Produktserien USA/Singapur. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Offizielle Preisanpassung ab Juni 2026: CX23 in DE/FI 5,49 EUR/Monat netto ohne IPv4; bei 19% MwSt. ca. 6,53 EUR, Extras zusätzlich. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | hcloud, API, cloud-init und OpenTofu nach Kontofreigabe. |
| Mining | Ausdrücklich verboten laut aktuellen AGB. |
| KI / Inferenz / Training | Anwendungshosting/Koordination technisch plausibel; konkrete CPU-Dauerlast und KI-Inhalte nach aktuellem Vertrag prüfen. |
| Krypto-Werkzeuge / Full Nodes | Keine allgemeine Freigabe für Nodes/Blockchain-Daten abgeleitet; frühere breite Supportaussagen rechtfertigen aktuelle schriftliche Klärung. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Für Krypto-Trading wegen dokumentierter früherer Einschränkungen aktuelle schriftliche Freigabe einholen; normale Analyse nicht damit gleichsetzen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Hetzner Cloud-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.hetzner.com/cloud/cost-optimized/) · [Quelle 2](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/) · [Quelle 3](https://www.hetzner.com/legal/terms-and-conditions/) · [Quelle 4](https://www.hetzner.com/legal/system-policies/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="netcup"></a>

## netcup

[Offizieller Einstieg](https://www.netcup.com/de/server/vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Beispiel VPS 500 G12.5: 2 vCore, 4 GB, 64 GB SSD. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Standortangebot je Produkt und Bestellung. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Gelesene Seite zeigt bei 12 Monaten 8,26 EUR/Monat sowie 9,50 EUR als weiteren Preis; Bruttobetrag/Laufzeit im gewählten Länder-Checkout verbindlich prüfen. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Traffic inklusive beworben; konkrete Fair-Use-/Drosselschwellen pro Tarif prüfen. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Server-Control-Panel/API und Installationsimages; kein selbstständiger Identitätsersatz. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle netcup-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.netcup.com/de/server/vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="contabo"></a>

## Contabo

[Offizieller Einstieg](https://contabo.com/en/vps/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Produktseite nicht lesbar; Bedingungen/FAQ geprüft |
| CPU / RAM / Disk | Cloud-/Core-VPS: aktuelle Einstiegsressourcen im Checkout. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Weltweite Standorte; Standortzuschläge möglich. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Kein verlässlicher aktueller Einstiegspreis im Direktabruf (403); Setupgebühren beim kleinen Core-/Storage-Tarif möglich. Nicht als billigster Anbieter eingestuft. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Auf VPS ausdrücklich verboten; VDS-/Dedicated-Regeln nicht auf VPS übertragen. |
| KI / Inferenz / Training | Kein allgemeines KI-Verbot in der gelesenen Nutzungs-FAQ; CPU-/Missbrauchsgrenzen trotzdem prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Contabo-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://contabo.com/en/vps/) · [Quelle 2](https://help.contabo.com/en/support/solutions/articles/103000398194-why-is-there-a-setup-fee-on-my-core-vps-4-storage-vps-10-order-) · [Quelle 3](https://contabo.com/blog/can-i-use-contabo-servers-for-crypto/) · [Quelle 4](https://help.contabo.com/en/support/solutions/articles/103000271238-are-there-any-restrictions-on-the-content-allowed-on-my-server-).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="ovh-vps"></a>

## OVHcloud VPS

[Offizieller Einstieg](https://www.ovhcloud.com/de/vps/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | VPS-1 und größere Modelle; konkrete Generation beachten. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Europa/USA/APAC, produktabhängig. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Mehrere Produktgenerationen und Aktionspreise sichtbar; aktuellen Endpreis des Landes-Checkouts verwenden, keine alte 3,81-/4,49-EUR-Zusage. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | APAC teilweise feste Kontingente, z. B. 500 GB für VPS-1; Europa-Werbung nicht auf APAC übertragen. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Offizielle Blockchain-Produktseite schließt PoW und Mining aus; konkrete VPS-Vertragsfassung zusätzlich prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | OVH unterstützt Blockchain-Workloads im Portfolio; daraus keine pauschale Leistungs-/Tariffreigabe für den kleinsten VPS ableiten. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle OVHcloud VPS-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.ovhcloud.com/de/vps/) · [Quelle 2](https://www.ovhcloud.com/fr/vps/best-vps/) · [Quelle 3](https://us.ovhcloud.com/solutions/blockchain/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="time4vps"></a>

## Time4VPS

[Offizieller Einstieg](https://www.time4vps.com/Linux-vps/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Linux 1: 1 Kern/1 GB/10 GB; Linux 2: 2 GB/25 GB. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Litauen / genauer Standort laut Vertrag. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Linux 1 2,99 EUR/Monat laut Seite; Linux 2 Aktion 2,88 EUR, Verlängerung 5,77 EUR bei einem angezeigten Abrechnungszeitraum. Steuer/Laufzeit prüfen. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Linux 1 1 TB, Linux 2 4 TB laut Seite. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Backups optional kostenpflichtig; Erstattung nicht mit dauerhaft gratis verwechseln. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Time4VPS-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.time4vps.com/Linux-vps/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="alphavps"></a>

## AlphaVPS

[Offizieller Einstieg](https://alphavps.com/uk-vps/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | KVM-/Storage-Varianten; nicht denselben Einstiegspreis für alle Standorte unterstellen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Bulgarien, Großbritannien, USA u. a. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | UK-Seite bewirbt ab 2,54 EUR/Monat; monatliche vs. jährliche Zahlung und Steuern prüfen. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle AlphaVPS-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Konkreter Communitybericht zu langsamer Provisionierung gefunden, später vom Nutzer eingeordnet; kein Langzeitnachweis.

Angebots-/Regelbelege: [Quelle 1](https://alphavps.com/uk-vps/) · [Quelle 2](https://alphavps.com/storage-vps/).

Erfahrungs-/Diskussionsbelege: [Bericht 1](https://www.reddit.com/r/VPS/comments/1upnbt1/is_alphavps_a_scam_bought_a_cloud_vps_12_hours/). Einzelberichte und Betreiberbeiträge getrennt bewerten.

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="buyvm"></a>

## BuyVM / Frantech

[Offizieller Einstieg](https://buyvm.net/kvm-dedicated-server-slices) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Slice 512: 512 MB/10 GB; Slice 1024: 1 GB/20 GB, Shared CPU. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Standort und aktueller Bestand im Panel. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Slice 512 24 USD/Jahr (=2 USD/Monat rechnerisch, jährlich vorab); Slice 1024 3,50 USD/Monat; Backup extra. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Unmetered laut Produktseite; AUP/Fair Share gilt. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Eine IPv4 enthalten laut Slice-Seite; weitere Netzdetails vor Bestellung. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Ressourcenmissbrauch zulasten anderer Kunden verboten; für hohe Last Supportanfrage vorgesehen. |
| Backup / SLA | Backup-Zusatzkosten; SLA laut Wiki mit Ausnahmen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle BuyVM / Frantech-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://buyvm.net/kvm-dedicated-server-slices) · [Quelle 2](https://buyvm.net/acceptable-use-policy/) · [Quelle 3](https://wiki.buyvm.net/doku.php/faq).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="webhorizon"></a>

## WebHorizon NAT VPS

[Offizieller Einstieg](https://my.webhorizon.net/order/main/index/nat) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Kleine NAT-/OpenVZ-VPS und Bündel. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Europa, Nordamerika, Chile, Südafrika und Asien laut Bestellliste. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Aktuellen Bündelgesamtpreis prüfen; 0-USD-Unterpositionen sind kein Beleg für kostenlosen Gesamtvertrag. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | NAT IPv4/weitergeleitete Ports, IPv6 und TUN pro Node prüfen. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Kleine Systemcontainer regelmäßig ungeeignet; 256-MB-Namen kein Kubernetes-Versprechen. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle WebHorizon NAT VPS-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://my.webhorizon.net/order/main/index/nat) · [Quelle 2](https://webhorizon.net/aup).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="greencloud"></a>

## GreenCloud VPS

[Offizieller Einstieg](https://greencloudvps.com/budget-kvm-vps.php) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | SSDKVM-1 1 GB/1 Kern/15 GB; zeitweise Budget-Sales 4 GB/2 Kerne/35 GB. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | USA, Europa, APAC; Bestände und Kontingente regional verschieden. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Regulär ab 6 USD/Monat; gelesener Sale 25 USD/Jahr für 4-GB-Varianten, teils ausverkauft, ohne Erstattung. Sale nicht als zugesicherter Regelpreis. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Regulär kleinster Plan 1,5 TB; APAC 750 GB laut Tarifseite. Sale 4-GB-Beispiel 4 TB. |
| Port / Drosselung | Bis 10 Gbit/s geteilter Port; ToS begrenzen längere hohe Nutzung, u. a. >100 Mbit/s über 6 Stunden. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Mehrere Konten laut gelesenen ToS verboten. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Durch CPU-Regeln stark begrenzt: durchschnittlich höchstens 30%, Bursts nach ToS; keine Freigabe dauernden Trainings. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | ToS u. a. gegen Spam, TOR, IRC, bestimmte Spiele-/Streamingdienste; CPU- und Trafficabuse kann Sperre auslösen. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle GreenCloud VPS-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://greencloudvps.com/budget-kvm-vps.php) · [Quelle 2](https://greencloudvps.com/billing/store/budget-kvm-sale) · [Quelle 3](https://greencloudvps.com/terms-of-service.php).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="hosthatch"></a>

## HostHatch

[Offizieller Einstieg](https://hosthatch.com/products) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | NVMe 2 GB: 1 Shared-EPYC-Kern, 2 GB RAM, 10 GB NVMe. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Europa, USA, Hongkong, Singapur, Seoul, Tokio, Sydney u. a. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | NVMe 2 GB ab 4 USD/Monat laut Produktseite; Region, Steuern und Abrechnungszyklus prüfen. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | 1 TB im kleinen Beispieltarif. |
| Port / Drosselung | Rechenzentrum-Matrix nennt 10/40/100-GbE-Uplinks; das ist keine garantierte VM-Portleistung. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Je Tarif: mindestens 2 Kerne/2 GB für K3s-Server, vorzugsweise 4 GB+ und SSD; kleine Tarife nur Dienste. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle HostHatch-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://hosthatch.com/products) · [Quelle 2](https://docs.hosthatch.com/features/) · [Quelle 3](https://docs.hosthatch.com/api/orders-and-payment/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="racknerd"></a>

## RackNerd

[Offizieller Einstieg](https://www.racknerd.com/kvm-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Kleines Regelangebot: 1 vCore, 512 MB, 30 GB SSD. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | USA und weitere in Produktliste genannte Standorte; Planbestand prüfen. |
| Karte / Verifikation | Zahlungsmethode erforderlich; ohne expliziten Beleg kein Kreditkartenzwang behauptet. |
| Kosten / Folgepreis | Regel-SKU 512 MB 26,99 USD/Jahr; Sonderangebote separat, Verlängerungsbetrag und Refund-Regeln prüfen. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | 500 GB/Monat beim 512-MB-Regeltarif. |
| Port / Drosselung | 1 Gbit/s Port beworben, kein dedizierter Durchsatz. |
| IP / NAT / Kernel | Eine dedizierte IP laut Produktseite. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | 512 MB kein Control Plane; selbst Worker ohne Workloadreserve knapp. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle RackNerd-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.racknerd.com/kvm-vps) · [Quelle 2](https://my.racknerd.com/index.php?rp=/store/kvm-vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="sakura"></a>

## Sakura VPS

[Offizieller Einstieg](https://vps.sakura.ad.jp/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kostenpflichtiger Root-VPS / VM |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Kleine Japan-VPS; 512-MB-Einstieg laut Tarifseite. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Japan: Ishikari, Osaka, Tokio. |
| Karte / Verifikation | Regionale Konto-/Zahlungsmethoden und mögliche Adresse-/Telefonprüfung vor Registrierung klären. |
| Kosten / Folgepreis | 512-MB-Tarif je Standort ab ca. 643 JPY/Monat laut aktueller Funktions-/Preisliste; Zahlungsperiode und Steuer im japanischen Checkout prüfen. |
| Laufzeit / Verlängerung | Abrechnung, Mindestlaufzeit, Kündigung und Wiederverlängerung des gewählten Tarifs beachten. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | 512 MB ungeeignet für Control Plane; größere VM nötig. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Vollautonome Neuregistrierung ohne menschlichen Kontoinhaber nicht belegt; E-Mail-/Identitätsprüfung und Vertragsannahme können Menschen erfordern. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Sakura VPS-Seite öffnen, Konto mit echten Daten erstellen, E-Mail/MFA und verlangte Zahlungs-/Identitätsprüfung abschließen.
2. Im Abrechnungsbereich aktives Guthaben, Ablauf und den tatsächlich gewählten Tarif kontrollieren; Bruttopreis, Setup, IPv4, Backup, Traffic und Verlängerung vor Bestellung addieren.
3. Linux-VPS/VM mit Ubuntu/Debian und SSH-Key anlegen; kostenpflichtige Extras vor Erstellung abwählen.
4. Gemeinsamen SSH-Einstieg abarbeiten; Ablaufdatum und Löschung aller abrechenbaren Restressourcen einplanen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://vps.sakura.ad.jp/) · [Quelle 2](https://vps.sakura.ad.jp/functions/storage-change-option/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="codespaces"></a>

## GitHub Codespaces

[Offizieller Einstieg](https://github.com/dwhr-pi/github-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Entwicklungsumgebung, kein dauerhafter VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | GitHub Free: 120 Core-Stunden/Monat und 15 GB-Monate Speicher laut aktueller Planübersicht. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | GitHub-Regions-/Maschinenauswahl. |
| Karte / Verifikation | Freikontingent persönlich ohne kostenpflichtigen Zusatz möglich; Anti-Abuse-/Kontoprüfung. |
| Kosten / Folgepreis | Über Freimengen nur mit aktivierter Abrechnung; Speicher zählt auch bei gestoppter Umgebung. |
| Laufzeit / Verlängerung | Idle-Stopp, Quoten und automatische Löschung; kein Lifetime-/24/7-Server. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nur temporäres Entwicklungslabor. |
| Mehrere Konten | GitHub verlangt menschliche Kontoeinrichtung und begrenzt Gratis-Konten; keine Quotenvervielfachung durch Bots. |
| Registrierung ohne Menschen | Keine autonome Bot-Neuregistrierung: menschliche Kontoerstellung laut GitHub-Accountbedingungen. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Keine Mining-Erlaubnis für dieses Entwicklungsangebot nachgewiesen. |
| KI / Inferenz / Training | Entwicklung und Tests im Quotenrahmen; keine Zusage für Dauerinferenz. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Eigenes GitHub-Konto rechtmäßig erstellen/verifizieren.
2. Verlinktes Repository und dessen Skripte prüfen.
3. Code > Codespaces öffnen, kleine Maschine und Budget auswählen.
4. Umgebung nach Arbeit stoppen; benötigten Zustand extern sichern.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://github.com/dwhr-pi/github-vps) · [Quelle 2](https://docs.github.com/en/billing/reference/product-usage-included) · [Quelle 3](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-included-usage) · [Quelle 4](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="actions"></a>

## GitHub Actions / FreeVPS_by_Github-Action

[Offizieller Einstieg](https://github.com/dwhr-pi/FreeVPS_by_Github-Action) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Kurzlebiger CI-Runner |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Jobzeit-, Abrechnungs- und Speicherkontingente nach GitHub-Plan. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Runnerangebot GitHub. |
| Karte / Verifikation | Konto-/Abrechnungsprüfung nach Tarif; kein eigener VPS-Vertrag. |
| Kosten / Folgepreis | Nur projektbezogene CI im jeweiligen Plan; externer Dauerdienst nicht als Gratis-VPS bewerten. |
| Laufzeit / Verlängerung | Jobende beendet Runner; keine Serverpersistenz. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Kein dauerhafter Clusterknoten. |
| Mehrere Konten | Keine Accounts zur Quotenvervielfachung; menschliche GitHub-Kontoeinrichtung nötig. |
| Registrierung ohne Menschen | Kein zulässiger Bot-Signupweg belegt. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Keine Freigabe; allgemeines Mining ist kein projektbezogener CI-Zweck. |
| KI / Inferenz / Training | Projektbezogene Softwaretests denkbar; allgemeiner KI-Hostingdienst nicht daraus erlaubt. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | GitHub-hosted Runner nur für Produktion, Tests, Deployment oder Veröffentlichung des zugehörigen Softwareprojekts; allgemeines Hosting unabhängig davon fällt nicht darunter. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. GitHub-Konto rechtmäßig einrichten.
2. Workflow und Skripte vor Aktivierung lesen.
3. Nur zulässige, zum Repository gehörige Build-/Testaufgaben über Actions starten.
4. Keine Keepalive-Ketten oder automatische Neuplanung für allgemeinen VPS-Dauerbetrieb.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://github.com/dwhr-pi/FreeVPS_by_Github-Action) · [Quelle 2](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features) · [Quelle 3](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="forexvps"></a>

## ForexVPS brokerfinanziert

[Offizieller Einstieg](https://www.forexvps.net/free-forex-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Windows-Trading-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | Beispiel Core: 2 Kerne/4 GB/100 GB laut Angebot. |
| OS / Architektur | Windows laut Angebot; Images prüfen. |
| Standorte | Brokernahe Standorte; konkret auswählen. |
| Karte / Verifikation | VPS-Seite nennt keine Zahlungsdetails nötig; Brokerkonto erfordert eigene Prüfung/Kapital. |
| Kosten / Folgepreis | Nur bei Broker-Mindestkapital und Handelsvolumen gratis; bei Fehlvolumen anteilige VPS-Gebühr möglich. Spreads/Provisionen und Verluste zählen zusätzlich. |
| Laufzeit / Verlängerung | Monatliche Erfüllung der Brokerbedingungen. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Kein Ersatz für Linux-K3s. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Nein als unabhängige persönliche Registrierung: KYC und Brokervertrag. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Freigabe von MetaTrader/EA ist keine Freigabe für beliebige Krypto-Nodes oder Börsen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Expert Advisors/Trading ausdrücklich beworben, aber nur vertragsgemäß. |
| Öffentliche Tradingplattform | Nicht freigegeben; eigenes öffentliches Börsenhosting nicht Gegenstand des Angebots. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite öffnen und teilnehmenden Broker samt Länderzulassung prüfen.
2. Brokerkonto persönlich und mit KYC eröffnen; keine Einzahlung nur für Gratis-VPS veranlassen.
3. Mindestkapital, Monatsvolumen und Gebühren im konkreten Vertrag lesen.
4. VPS beantragen, RDP sichern, nur erlaubte Trading-Anwendungen installieren.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.forexvps.net/free-forex-vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="roboforex"></a>

## RoboForex VPS

[Offizieller Einstieg](https://roboforex.com/clients/services/forex-vps/) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Windows-Trading-VPS |
| Nachweisstand | Angebotsseite gelesen; keine Registrierung oder Laufzeitprobe |
| CPU / RAM / Disk | 1 Kern, 1 GB RAM, 30 GB HDD, Windows Server/RDP laut Seite. |
| OS / Architektur | Windows laut Angebot; Images prüfen. |
| Standorte | Standort im Kundenbereich prüfen. |
| Karte / Verifikation | Brokerkonto, Identitätsprüfung und Kapital; keine anonyme Registrierung. |
| Kosten / Folgepreis | Regelangebot mindestens 300 USD Equity und 3 Standardlots/Monat; bei Fehlvolumen 5 USD Monatsgebühr bei aktivierter Bezahlverlängerung. Länderverfügbarkeit prüfen. |
| Laufzeit / Verlängerung | Sonderaktion MT5: 500 USD Einzahlung bis 31.12.2026 gesondert; keine dauerhafte Zusage. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Nicht für Linux-K3s. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | KYC/Brokervertrag erfordern Menschen; kein unabhängiger Agentenweg. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Tradingterminals und Expert Advisors ausdrücklich vorgesehen. |
| Öffentliche Tradingplattform | Eigenes öffentliches Börsen-/Brokerhosting daraus nicht erlaubt. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle VPS-Seite und lokale Brokerberechtigung prüfen.
2. Konto mit echten Daten verifizieren; Kapital-/Handelsanforderungen eigenständig bewerten.
3. Im Bereich Your VPS 2.0 Antrag stellen und Tarifbedingungen prüfen.
4. RDP-Zugang sichern; EA nur nach Broker- und VPS-Regeln nutzen.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://roboforex.com/clients/services/forex-vps/).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="orbex"></a>

## Orbex Forex VPS

[Offizieller Einstieg](https://www.orbex.com/en/trading-tools/free-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Brokergebundener Trading-VPS |
| Nachweisstand | Direktabruf fehlgeschlagen; heute nicht vollständig prüfbar |
| CPU / RAM / Disk | Aktuellen Windows-/Tradingtarif und Limits individuell prüfen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Broker-/Vertragsregion. |
| Karte / Verifikation | Persönliches Brokerkonto mit KYC; Kapitalbedingungen. |
| Kosten / Folgepreis | Kostenfreiheit von Equity/Handelsbedingungen abhängig; konkrete heutige Zahlen nicht pauschal bestätigt. |
| Laufzeit / Verlängerung | Monatliche Berechtigung und mögliche Gebühren prüfen. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine allgemeine Linux-Kubernetes-Infrastruktur. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Keine Registrierung ohne menschlichen Kontoinhaber/KYC zugesichert. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Forex-Trading als Einsatzzweck beworben; jeweilige Instrumente und Brokerregeln maßgeblich. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite und Länderangebot prüfen.
2. Vor Registrierung Brokervertrag, KYC und VPS-Berechtigung lesen.
3. Nur bei eigener berechtigter Tradingnutzung VPS im Kundenbereich beantragen.
4. RDP/Tradingterminal nach offiziellen Vorgaben einrichten.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://www.orbex.com/en/trading-tools/free-vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

<a id="admirals"></a>

## Admirals Forex VPS

[Offizieller Einstieg](https://admiralmarkets.com/trading-platforms/forex-vps) · recherchiert 2026-11-18

| Merkmal | Einordnung |
| --- | --- |
| Typ / Rootgrenze | Brokergebundener Trading-VPS |
| Nachweisstand | Angebotsseite abrufbar; individuelle Berechtigung offen |
| CPU / RAM / Disk | Aktuellen Windows-/Tradingtarif und Limits individuell prüfen. |
| OS / Architektur | Im aktuellen Produkt/Panel prüfen; Linux-/Windows-Lizenz und ARM64/AMD64 unterscheiden. |
| Standorte | Broker-/Vertragsregion. |
| Karte / Verifikation | Persönliches Brokerkonto mit KYC; Kapitalbedingungen. |
| Kosten / Folgepreis | Kostenfreiheit von Equity/Handelsbedingungen abhängig; konkrete heutige Zahlen nicht pauschal bestätigt. |
| Laufzeit / Verlängerung | Monatliche Berechtigung und mögliche Gebühren prüfen. |
| Inklusivtraffic | Nicht verlässlich beziffert. |
| Port / Drosselung | Nicht verlässlich beziffert. |
| IP / NAT / Kernel | Im konkreten Tarif prüfen: IPv4, IPv6, NAT, UDP, TUN und Kernelrechte. |
| GPU | Keine kostenlose/dedizierte GPU für diesen Eintrag nachgewiesen. |
| Kubernetes-Eignung | Keine allgemeine Linux-Kubernetes-Infrastruktur. |
| Mehrere Konten | Nicht geklärt; keine Erlaubnis zur Vervielfachung von Gratis-Kontingenten ableitbar. |
| Registrierung ohne Menschen | Keine Registrierung ohne menschlichen Kontoinhaber/KYC zugesichert. |
| Einrichtung automatisierbar | Nach legitimer Kontoeinrichtung: SSH und vorhandene offizielle API getrennt prüfen. |
| Mining | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| KI / Inferenz / Training | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Krypto-Werkzeuge / Full Nodes | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Staking / Validatoren | Nicht getrennt verbindlich belegt; Miningregel allein entscheidet nicht über Staking/Validatoren. |
| Trading-Bots / Analyse | Forex-Trading als Einsatzzweck beworben; jeweilige Instrumente und Brokerregeln maßgeblich. |
| Öffentliche Tradingplattform | Nicht belegt; vor Nutzung aktuelle AUP und gegebenenfalls schriftliche Anbieterfreigabe prüfen. |
| Kommerzielle Nutzung | Kommerzielle Nutzung und Weiterverkauf in aktuellem Tarifvertrag gesondert prüfen. |
| Weitere Erlaubnisse / Verbote | Es gelten AUP, Gesetze, Ressourcenlimits und tarifliche Zweckbindung; keine pauschale Nutzungsfreigabe. |
| Backup / SLA | Eigene externe Backups vorsehen; Tarif-SLA gesondert prüfen. |

### Von der Registrierung bis zum ersten Dienst

1. Offizielle Seite und Länderangebot prüfen.
2. Vor Registrierung Brokervertrag, KYC und VPS-Berechtigung lesen.
3. Nur bei eigener berechtigter Tradingnutzung VPS im Kundenbereich beantragen.
4. RDP/Tradingterminal nach offiziellen Vorgaben einrichten.

### Erfahrungen und Quellen

Kein belastbarer, unabhängiger Langzeitbericht für genau diesen Tarif in dieser Recherche gefunden.

Angebots-/Regelbelege: [Quelle 1](https://admiralmarkets.com/trading-platforms/forex-vps).

Öffentliche Quellenrecherche; kein Konto eröffnet, kein Server gebucht, keine Installation/Last-/Restoreprobe beim Anbieter.

