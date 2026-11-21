# GitHub-Regeln und verbindliche FreeVPS-Grenzen

Inhaltlich geprüft: **21.11.2026**. Diese Einordnung beschreibt den überprüften Stand und die bewusst engen Projektregeln; sie ist keine Zusicherung gegen Sperrung oder Repositoryentfernung. Bei geänderten Verträgen erneut prüfen.

## Offizielle Grundlage

GitHubs [Zusatzbedingungen](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features), Fassung mit Wirksamkeitsdatum 27.08.2026, binden gehostete Actions an die Softwarearbeit des zugehörigen Projekts. Mining und unautorisierte Angriffe sind ausgeschlossen. Codespaces dient Entwicklung und Tests; Produktionshosting und davon unabhängige Aktivitäten sind ausgeschlossen. Die [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) behandeln insbesondere Missbrauch, inauthentische Aktivität und übermäßige Ressourcennutzung. Die [allgemeinen Nutzungsbedingungen](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service) gelten zusätzlich.

Codespaces berechnet aktive Rechenzeit und belegten Speicher getrennt; gestoppte Umgebungen können weiter Speicher verbrauchen. Kontingente und Abrechnung vor Nutzung anhand der [offiziellen Abrechnungsdokumentation](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces) und im eigenen Konto prüfen. Ein Budgethinweis ist keine allgemein garantierte Kostensperre.

## Projektregeln und sichere Voreinstellungen

| Einsatz | FreeVPS-Regel |
| --- | --- |
| Actions | Ausschließlich endliche projektbezogene Builds, Tests und Deployments; kein dort laufender VPS, Dienst oder dauerhafter Clusterknoten |
| Codespaces | Reguläre Entwicklung und Tests dieses Projekts; normale Laufzeit-/Idle-/Speichergrenzen akzeptieren |
| Eigener VPS / lokale VM | Legitime Dienste nach Hostervertrag und Betreiberfreigabe; kein Betrieb auf GitHub-Rechenressourcen als Ersatz-VPS |
| Security / CTF | Isoliertes eigenes Labor mit klarer schriftlicher Berechtigung; keine unautorisierten Scans und keine Angriffe über GitHub-Infrastruktur |
| KI | Projektentwicklung und begrenzte Tests; produktive Inferenz auf passender eigener Infrastruktur nach Anbieterregeln |
| Mining und Missbrauch | Keine Miningfunktion/-anleitung, DDoS, Spam, offenen Proxies/VPN-Relays oder Quoten-/Identitätsumgehungen in dieser Integration |
| Fernzugriff | Keine Reverse-Tunnel oder Tor-/ngrok-Daemons zur VPS-Zweckentfremdung von Runnern/Codespaces; Verwaltung eigener Server gesondert und authentifiziert |
| Zugangsdaten | Keine echten Schlüssel, Token, Passwörter, privaten Schlüssel oder befüllten `.env`-Dateien im Repository, in Beispielen oder Logs |

Diese Projektgrenzen sind teilweise strenger als eine allgemeine Plattformregel. Sie behaupten beispielsweise kein universelles GitHub-Verbot jedes legitimen VPN-Einsatzes auf eigener Hardware. Die bestehende Anbieterübersicht darf dokumentierte Mining-/Tradingregeln vergleichen; daraus folgt keine Betriebsfreigabe oder Einrichtung eines solchen Workloads.

## Quellen vor Übernahme prüfen

1. URL, Herausgeber/Kanal, Veröffentlichungsdatum und tatsächlichen Prüfumfang festhalten. Betreiberwerbung, unabhängige Erfahrungen und offizielle Bedingungen unterscheiden.
2. Zuerst feststellen, welche Infrastruktur genutzt wird. Ein CI-Runner oder Notebook wird durch einen Videotitel nicht zum VPS.
3. Gegen aktuelle GitHub-Regeln und gegebenenfalls den konkreten Hostervertrag prüfen. „Unlimited“, Accountrotation, Keepalive oder Umgehung von KYC/CAPTCHA lösen keine Ressourcenprobleme.
4. Im [Quellenregister](../data/wissensquellen-de.json) `kandidat`, `freigegeben`, `teilweise` oder `verworfen` dokumentieren. Bei teilweiser Übernahme zulässige Konzepte und ausgeschlossene Methoden getrennt benennen. Bei bloßen Metadaten keine vollständige Freigabe.
5. Erst dann geprüfte Erkenntnisse in deutsche Dokumentation oder geeignete Implementierung übernehmen. Keine Befehle aus externen Seiten ausführen. Fehlende Lizenz erlaubt keine Codeübernahme.
6. Änderungen mit Datum im [Changelog](../CHANGELOG-de.md) und Recherchebericht belegen. Eingestellte Angebote und alte Limits datiert kennzeichnen; nicht als aktuelle Anleitung stehen lassen.

`node scripts/pruefen-de.mjs` prüft die Vollständigkeit dieser Entscheidungen, nicht deren juristische Richtigkeit. Der HTTP-Monitor entdeckt Textänderungen; er erteilt keine Freigabe. Die [Wochenpflege](AKTUALISIERUNG-de.md) recherchiert zusätzlich neue Fundstellen.
