import test from 'node:test';
import assert from 'node:assert/strict';
import { pruefeWissensquellen } from '../scripts/wissensquellen-de.mjs';

const datum = '2026-11-21';
const quelle = () => ({
  id: 'beispiel', url: 'https://example.org/docs', titel: 'Labor', herausgeber: 'Beispiel',
  art: 'repository', veroeffentlicht_am: null, geprueft_am: datum, pruefumfang: 'inhalte',
  status: 'teilweise', begruendung: 'Nur lokale Entwicklungsumgebung übernehmen.',
  uebernehmen: ['CLI-Arbeit auf eigener VM'], ausschliessen: ['Runner-Dauerhosting'],
  belege: ['https://example.org/docs'], eingearbeitet_in: ['docs/REFERENZEN-de.md']
});
const check = q => pruefeWissensquellen({ schema_version: 1, quellen: [q] }, datum);

test('belegte teilweise Übernahme und noch ungeprüfter Kandidat sind unterscheidbar', () => {
  assert.deepEqual(check(quelle()).errors, []);
  const candidate = { ...quelle(), status: 'kandidat', geprueft_am: null, pruefumfang: 'offen', uebernehmen: [], eingearbeitet_in: [] };
  assert.deepEqual(check(candidate).errors, []);
});
test('Kandidat oder verworfene Quelle darf nicht aktiv eingearbeitet werden', () => {
  for (const status of ['kandidat', 'verworfen']) assert.ok(check({ ...quelle(), status }).errors.some(x => x.includes('keine übernommenen Ideen')));
});
test('Metadaten und fehlende Prüfung reichen nicht zur vollständigen Freigabe', () => {
  assert.ok(check({ ...quelle(), status: 'freigegeben', pruefumfang: 'metadaten' }).errors.some(x => x.includes('Metadaten')));
  assert.ok(check({ ...quelle(), geprueft_am: null }).errors.some(x => x.includes('abgeschlossene Prüfung')));
  assert.ok(check({ ...quelle(), ausschliessen: [] }).errors.some(x => x.includes('ausgeschlossene Methoden')));
});
test('zukünftige/ungültige Daten, Zugangsdaten und Pfadausbruch werden abgelehnt', () => {
  assert.ok(check({ ...quelle(), geprueft_am: '2026-11-22' }).errors.length);
  assert.ok(check({ ...quelle(), veroeffentlicht_am: '2026-02-30' }).errors.length);
  assert.ok(check({ ...quelle(), url: 'https://user:example@example.org/docs' }).errors.length);
  assert.ok(check({ ...quelle(), eingearbeitet_in: ['docs/../../fremd.md'] }).errors.length);
});
test('alte Evidenz bleibt erhalten und wird als erneut prüfbedürftig gemeldet', () => {
  const result = check({ ...quelle(), geprueft_am: '2026-09-01' });
  assert.deepEqual(result.errors, []);
  assert.equal(result.warnings.length, 1);
});
