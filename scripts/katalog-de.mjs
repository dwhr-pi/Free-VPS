import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(await fs.readFile(path.join(root, 'data/anbieter-de.json'), 'utf8'));
const labels = { gratis: 'Dauerhafte Freikontingente und Community-Angebote', kandidat: 'Unbestätigte oder widersprüchliche Kandidaten', trial: 'Zeitlich begrenzte Tests und Guthaben', rueckerstattung: 'Kostenpflichtig mit Rückerstattung', bezahlt: 'Günstige Bezahlangebote', alternative: 'App-Hosting und Entwicklungsumgebungen', zweckgebunden: 'Brokergebundene Trading-Angebote', historisch: 'Historische oder ausgeschiedene Angebote', ausgeschlossen: 'Nicht als eigener Gratisanbieter bestätigt' };
const escape = value => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const link = (title, url) => '[' + title + '](' + url + ')';
let out = '# Anbieter, Bedingungen und Einrichtung\n\n';
out += 'Recherche: **' + data.recherchiert_am + '**. ' + data.hinweis + '\n\n';
out += 'Diese Datei wird aus [anbieter-de.json](../data/anbieter-de.json) mit `node scripts/katalog-de.mjs` erzeugt. Inhaltliche Änderungen dort pflegen. Alle Anmeldeschritte sind Anleitungen, keine erfolgreich durchgeführten Registrierungen. Nach der Bereitstellung folgt der [gemeinsame SSH-/Setup-Pfad](EINRICHTUNG-de.md).\n\n';
out += '**Bewertung:** „gratis“ bezeichnet das Angebotsmodell, keine Vertrauensgarantie oder heutige freie Kapazität. „Kandidat“ wird nicht als bestätigter kostenloser Root-VPS gezählt. „Nicht belegt“ ist keine Erlaubnis und kein nachgewiesenes Verbot. Preise sind Momentaufnahmen mit jeweils genannter Währung; ohne eindeutige Steuerangabe ist der Checkout zu prüfen.\n\n';
for (const [group, title] of Object.entries(labels)) {
  const items = data.angebote.filter(o => o.gruppe === group);
  out += '## ' + title + ' (' + items.length + ')\n\n';
  out += '| Angebot | Art / Prüfstatus | Kreditkarte / Identität | Kosten und Ablauf |\n| --- | --- | --- | --- |\n';
  for (const o of items) out += '| ' + link(o.name, '#' + o.id) + ' | ' + escape(o.art + '; ' + o.pruefstatus) + ' | ' + escape(o.kreditkarte) + ' | ' + escape(o.kosten) + ' |\n';
  out += '\n';
}
const fields = [['art', 'Typ / Rootgrenze'], ['pruefstatus', 'Nachweisstand'], ['ressourcen', 'CPU / RAM / Disk'], ['betriebssysteme', 'OS / Architektur'], ['regionen', 'Standorte'], ['kreditkarte', 'Karte / Verifikation'], ['kosten', 'Kosten / Folgepreis'], ['erneuerung', 'Laufzeit / Verlängerung'], ['traffic', 'Inklusivtraffic'], ['bandbreite', 'Port / Drosselung'], ['netz', 'IP / NAT / Kernel'], ['gpu', 'GPU'], ['kubernetes', 'Kubernetes-Eignung'], ['mehrfachkonten', 'Mehrere Konten'], ['agent_registrierung', 'Registrierung ohne Menschen'], ['automatisierung', 'Einrichtung automatisierbar'], ['mining', 'Mining'], ['ki', 'KI / Inferenz / Training'], ['krypto_tools', 'Krypto-Werkzeuge / Full Nodes'], ['validatoren', 'Staking / Validatoren'], ['trading', 'Trading-Bots / Analyse'], ['oeffentliche_tradingplattform', 'Öffentliche Tradingplattform'], ['commercial', 'Kommerzielle Nutzung'], ['erlaubt_verboten', 'Weitere Erlaubnisse / Verbote'], ['backup_sla', 'Backup / SLA']];
for (const o of data.angebote) {
  out += '<a id="' + o.id + '"></a>\n\n## ' + o.name + '\n\n';
  out += link('Offizieller Einstieg', o.url) + ' · recherchiert ' + o.geprueft_am + '\n\n';
  if (o.regelpruefung_am) out += 'Teilprüfung der GitHub-Nutzungsregeln: **' + o.regelpruefung_am + '**. Andere Angaben behalten ihren oben genannten Prüfstand.\n\n';
  out += '| Merkmal | Einordnung |\n| --- | --- |\n';
  for (const [key, title] of fields) out += '| ' + title + ' | ' + escape(o[key]) + ' |\n';
  out += '\n### Von der Registrierung bis zum ersten Dienst\n\n';
  o.registrierung.forEach((step, i) => { out += (i + 1) + '. ' + step + '\n'; });
  out += '\n### Erfahrungen und Quellen\n\n' + o.erfahrungen + '\n\n';
  out += 'Angebots-/Regelbelege: ' + o.quellen.map((url, i) => link('Quelle ' + (i + 1), url)).join(' · ') + '.\n\n';
  if (o.erfahrungsquellen.length) out += 'Erfahrungs-/Diskussionsbelege: ' + o.erfahrungsquellen.map((url, i) => link('Bericht ' + (i + 1), url)).join(' · ') + '. Einzelberichte und Betreiberbeiträge getrennt bewerten.\n\n';
  out += o.pruefumfang + '\n\n';
}
await fs.mkdir(path.join(root, 'docs'), { recursive: true });
await fs.writeFile(path.join(root, 'docs/ANBIETER-de.md'), out);
let policies = '# Mining, KI, Krypto, Trading und Netzwerk\n\n';
policies += 'Stand der Recherche: ' + data.recherchiert_am + '. Detailbelege und Registrierungswege stehen im [Anbieterkatalog](ANBIETER-de.md). Keine belegte Mining-Erlaubnis wird aus dem Fehlen eines Verbots abgeleitet. CPU-Mining, Full Node, Validator, Kursanalyse und Live-Trading sind unterschiedliche Nutzungen. Eine Hosting-Erlaubnis ist keine Börsen-/Broker-/Finanzaufsichtserlaubnis.\n\n';
policies += '„KI“ umfasst hier getrennt API-Client/Agentenkoordination, eigene Inferenz und Training. Dass ein Anbieter OpenClaw bewirbt, erlaubt weder dauerhafte CPU-Volllast noch jeden KI-Inhalt. Kein Eintrag verspricht eine kostenlose GPU.\n\n';
policies += '| Angebot / Belege | Mining | KI | Krypto / Nodes | Trading | Traffic / Port |\n| --- | --- | --- | --- | --- | --- |\n';
for (const o of data.angebote) policies += '| ' + link(o.name, 'ANBIETER-de.md#' + o.id) + ' | ' + escape(o.mining) + ' | ' + escape(o.ki) + ' | ' + escape(o.krypto_tools) + ' | ' + escape(o.trading) + ' | ' + escape(o.traffic + ' ' + o.bandbreite) + ' |\n';
policies += '\n## Was vor einem konkreten Einsatz entschieden werden muss\n\n';
policies += '- **Mining:** Nur bei ausdrücklicher, auf genau diesen Tarif bezogener Erlaubnis einsetzen. Für diese Auswahl wurde kein allgemein freigegebener Gratis-Miningtarif bestätigt.\n- **Nodes/Validatoren:** Netzwerk, Diskwachstum, CPU, Staking- und Krypto-Regeln separat prüfen. Zahlung in Kryptowährung belegt keine Erlaubnis für Krypto-Workloads.\n- **Trading:** Ein privater Backtest oder ein Paper-Trading-Dashboard ist keine öffentliche Handelsplattform. Echte Orders benötigen außerdem die Freigabe/Regeln der Börse und des Kontoinhabers.\n- **Öffentliche Plattform:** Hoster-AUP, gewerbliche Nutzung, Datenschutz und erforderliche aufsichtsrechtliche Voraussetzungen konkret prüfen; keine pauschale Freigabe aus einem normalen VPS-Tarif.\n- **Traffic:** Monatsvolumen in GB/TB und Geschwindigkeit in Mbit/s/Gbit/s unterscheiden. 1 Gbit/s bedeutet nicht unbegrenzten Transfer; „unmetered“ bedeutet keinen garantierten dauerhaften Vollport. VPN-/Overlay- und Replikationstraffic mitrechnen.\n- **Verbote:** Spam, Angriffe, offene Relays/Proxys, TOR, Scanner, Weiterverkauf und Dauerlast unterscheiden sich je Anbieter. Nur ausdrücklich recherchierte Regeln sind oben bzw. in den Karten als Anbieterregel markiert.\n';
await fs.writeFile(path.join(root, 'docs/NUTZUNGSREGELN-de.md'), policies);
console.log(data.angebote.length + ' Angebote und Regelmatrix erzeugt.');
