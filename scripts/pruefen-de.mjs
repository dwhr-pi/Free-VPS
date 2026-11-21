import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { pruefeWissensquellen } from './wissensquellen-de.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const manifest = JSON.parse(await fs.readFile(path.join(root, 'data/originale-manifest.json'), 'utf8'));
for (const o of manifest.dateien) {
  try {
    const data = await fs.readFile(path.join(root, o.archiv));
    if (data.length !== o.bytes || crypto.createHash('sha256').update(data).digest('hex') !== o.sha256) errors.push('Original verändert: ' + o.archiv);
  } catch { errors.push('Original fehlt: ' + o.archiv); }
}
const data = JSON.parse(await fs.readFile(path.join(root, 'data/anbieter-de.json'), 'utf8'));
const required = ['id','name','gruppe','url','art','pruefstatus','geprueft_am','ressourcen','regionen','kreditkarte','kosten','erneuerung','kubernetes','registrierung','agent_registrierung','mehrfachkonten','automatisierung','mining','ki','krypto_tools','validatoren','trading','oeffentliche_tradingplattform','traffic','bandbreite','netz','backup_sla','erlaubt_verboten','erfahrungen','erfahrungsquellen','quellen','pruefumfang','betriebssysteme','gpu','commercial'];
const ids = new Set();
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' }).format(new Date());
const knowledge = JSON.parse(await fs.readFile(path.join(root, 'data/wissensquellen-de.json'), 'utf8'));
const sourceCheck = pruefeWissensquellen(knowledge, today);
errors.push(...sourceCheck.errors);
for (const warning of sourceCheck.warnings) console.warn(warning);
for (const source of knowledge.quellen || []) {
  for (const target of source.eingearbeitet_in || []) {
    if (typeof target !== 'string') continue;
    const resolved = path.resolve(root, target);
    if (!resolved.startsWith(root + path.sep)) continue;
    try { await fs.access(resolved); } catch { errors.push('Quellenziel fehlt: ' + target); }
  }
}
const groups = new Set(['gratis','kandidat','trial','bezahlt','alternative','zweckgebunden','historisch','ausgeschlossen','rueckerstattung']);
for (const o of data.angebote) {
  for (const field of required) if (!(field in o) || o[field] === '') errors.push(o.id + ': Feld fehlt: ' + field);
  if (!/^[a-z0-9-]+$/.test(o.id) || ids.has(o.id)) errors.push('Ungültige/doppelte ID: ' + o.id);
  ids.add(o.id);
  if (!groups.has(o.gruppe)) errors.push('Unbekannte Gruppe: ' + o.id);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(o.geprueft_am) || o.geprueft_am > today) errors.push('Unplausibles Prüfdatum: ' + o.id);
  if (o.regelpruefung_am && (!/^\d{4}-\d{2}-\d{2}$/.test(o.regelpruefung_am) || o.regelpruefung_am > today)) errors.push('Unplausibles Regelprüfdatum: ' + o.id);
  if (!Array.isArray(o.registrierung) || o.registrierung.length < 2) errors.push('Registrierungspfad fehlt: ' + o.id);
  if (!Array.isArray(o.quellen) || !o.quellen.length) errors.push('Quellen fehlen: ' + o.id);
  for (const u of [o.url, ...(o.quellen || []), ...(o.erfahrungsquellen || [])]) {
    try { if (new URL(u).protocol !== 'https:') errors.push('Keine HTTPS-Quelle: ' + o.id); } catch { errors.push('Ungültige URL: ' + o.id); }
  }
}
async function walk(dir) {
  const result = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    if (['.git','.pflege','node_modules'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) result.push(...await walk(p));
    else if (e.name.endsWith('.md') && !e.name.endsWith('-en.md')) result.push(p);
  }
  return result;
}
for (const p of await walk(root)) {
  const contents = await fs.readFile(p, 'utf8');
  for (const match of contents.matchAll(/\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
    const href = match[1].replace(/^<|>$/g, '');
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const rel = decodeURIComponent(href.split('#')[0]);
    if (!rel) continue;
    try { await fs.access(path.resolve(path.dirname(p), rel)); } catch { errors.push('Defekter lokaler Link in ' + path.relative(root, p) + ': ' + href); }
  }
}
for (const o of data.angebote) {
  const catalog = await fs.readFile(path.join(root, 'docs/ANBIETER-de.md'), 'utf8');
  if (!catalog.includes('<a id="' + o.id + '"></a>')) errors.push('Katalog nicht aktuell: ' + o.id);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else console.log('OK: ' + data.angebote.length + ' Angebote, ' + knowledge.quellen.length + ' Wissensquellen, Originalhashes, Pflichtfelder und lokale Dokumentlinks.');
