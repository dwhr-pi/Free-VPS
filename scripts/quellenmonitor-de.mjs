// Öffentliche Quellen beobachten; keine fachliche Tarifprüfung und kein Login.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(await fs.readFile(path.join(root, 'data/anbieter-de.json'), 'utf8'));
const maxArg = process.argv.find(x => x.startsWith('--max='));
const max = maxArg ? Number(maxArg.slice(6)) : Infinity;
if (!(max >= 1)) throw new Error('Ungültiges --max');
const urls = [...new Set(data.angebote.flatMap(o => [...o.quellen, ...o.erfahrungsquellen]))].slice(0, max);
let old = {};
try { old = JSON.parse(await fs.readFile(path.join(root, '.pflege/quellenzustand.json'), 'utf8')); }
catch (e) { if (e.code !== 'ENOENT') throw e; }
const now = new Date().toISOString();
const current = { ...old };
const results = [];
async function readLimited(response) {
  if (!response.body) return '';
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 2_000_000) throw new Error('Quelle größer als 2 MB; nicht vollständig geprüft');
      chunks.push(Buffer.from(value));
    }
  } finally { await reader.cancel().catch(() => {}); }
  return Buffer.concat(chunks).toString('utf8');
}
async function check(url) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'Free-VPS-Quellenmonitor/1.0 (public documentation research)' } });
    const item = { url, abgerufen_am: now, http_status: response.status, ziel: response.url, fachlich_geprueft: false };
    if (!response.ok) {
      item.status = 'Abruf fehlgeschlagen; keine inhaltliche Bestätigung';
      item.letzter_erfolgreicher_hash = old[url]?.hash || old[url]?.letzter_erfolgreicher_hash || null;
    } else {
      const type = response.headers.get('content-type') || '';
      if (!/text\/|json|xml/.test(type)) throw new Error('Kein unterstützter Textinhalt');
      const raw = await readLimited(response);
      const stable = raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (stable.length < 50) throw new Error('Keine aussagekräftige Textseite');
      item.hash = crypto.createHash('sha256').update(stable).digest('hex');
      const previous = old[url]?.hash || old[url]?.letzter_erfolgreicher_hash;
      item.status = previous ? (previous === item.hash ? 'Textfingerabdruck unverändert' : 'Textänderung: fachliche Prüfung erforderlich') : 'Erste Textreferenz; fachliche Prüfung erforderlich';
    }
    current[url] = item;
    results.push(item);
  } catch (error) {
    const item = { url, abgerufen_am: now, status: 'Abruf fehlgeschlagen', fehler: String(error.message).slice(0,200), fachlich_geprueft: false, letzter_erfolgreicher_hash: old[url]?.hash || old[url]?.letzter_erfolgreicher_hash || null };
    current[url] = item;
    results.push(item);
  }
}
// Höchstens drei öffentliche Seiten gleichzeitig; keine CAPTCHA-/Loginumgehung.
for (let i = 0; i < urls.length; i += 3) await Promise.all(urls.slice(i,i+3).map(check));
await fs.mkdir(path.join(root, '.pflege'), { recursive: true });
await fs.mkdir(path.join(root, 'berichte'), { recursive: true });
await fs.writeFile(path.join(root, '.pflege/quellenzustand.json'), JSON.stringify(current,null,2)+'\n');
const filename = 'quellenmonitor-' + now.replaceAll(':','-') + '.json';
await fs.writeFile(path.join(root, 'berichte', filename), JSON.stringify({lauf:now,quellen_geprueft:results.length,hinweis:'Nur öffentlicher Abruf/Textänderung; Anbieter-Prüfdatum und Tarif-/AUP-Bewertung werden nicht verändert.',ergebnisse:results},null,2)+'\n');
console.log(results.length + ' Quellen beobachtet; Bericht: berichte/' + filename);
