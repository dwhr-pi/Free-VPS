// Validate editorial evidence records; this cannot determine legal compliance.
export function pruefeWissensquellen(data, today) {
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const statuses = new Set(['kandidat', 'freigegeben', 'teilweise', 'verworfen']);
  const types = new Set(['bedingungen', 'dokumentation', 'repository', 'artikel', 'video']);
  const isDate = value => {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(value + 'T00:00:00Z');
    return Number.isFinite(date.valueOf()) && date.toISOString().slice(0, 10) === value && value <= today;
  };
  const https = value => {
    try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password; }
    catch { return false; }
  };
  if (data?.schema_version !== 1 || !Array.isArray(data?.quellen)) {
    return { errors: ['Quellenregister: Schema oder Quellenliste fehlt.'], warnings };
  }
  for (const q of data.quellen) {
    const fail = message => errors.push((q?.id || 'Quelle') + ': ' + message);
    if (!q || typeof q !== 'object') { fail('Kein Quelldatensatz.'); continue; }
    if (typeof q.id !== 'string' || !/^[a-z0-9-]+$/.test(q.id) || ids.has(q.id)) fail('Ungültige/doppelte Quellen-ID.');
    ids.add(q.id);
    for (const field of ['titel', 'herausgeber', 'begruendung']) {
      if (typeof q[field] !== 'string' || !q[field].trim()) fail('Pflichttext fehlt: ' + field);
    }
    if (!https(q.url)) fail('Öffentliche HTTPS-URL ohne Zugangsdaten erforderlich.');
    if (!statuses.has(q.status)) fail('Unbekannter Prüfstatus.');
    if (!types.has(q.art)) fail('Unbekannte Quellenart.');
    if (!['inhalte', 'metadaten', 'offen'].includes(q.pruefumfang)) fail('Prüfumfang fehlt.');
    if (q.veroeffentlicht_am !== null && !isDate(q.veroeffentlicht_am)) fail('Ungültiges Veröffentlichungsdatum.');
    if (q.geprueft_am !== null && !isDate(q.geprueft_am)) fail('Ungültiges Prüfdatum.');
    for (const field of ['uebernehmen', 'ausschliessen', 'belege', 'eingearbeitet_in']) {
      if (!Array.isArray(q[field]) || !q[field].every(x => typeof x === 'string' && x.trim())) fail('Textliste fehlt/ungültig: ' + field);
    }
    if (!Array.isArray(q.belege) || !q.belege.length || !q.belege.every(https)) fail('HTTPS-Nachweise fehlen.');
    const approved = q.status === 'freigegeben' || q.status === 'teilweise';
    if (approved) {
      if (!isDate(q.geprueft_am) || q.pruefumfang === 'offen') fail('Übernahme ohne abgeschlossene Prüfung.');
      if (!q.uebernehmen?.length || !q.eingearbeitet_in?.length) fail('Übernommene Idee und Dokumentziel erforderlich.');
      if (q.status === 'freigegeben' && q.pruefumfang !== 'inhalte') fail('Metadaten erlauben keine vollständige Freigabe.');
      if (q.status === 'teilweise' && !q.ausschliessen?.length) fail('Teilweise Übernahme braucht ausgeschlossene Methoden/Grenzen.');
      if (isDate(q.geprueft_am) && (Date.parse(today) - Date.parse(q.geprueft_am)) / 86400000 > 30) warnings.push(q.id + ': Prüfung älter als 30 Tage; vor neuer Übernahme erneut prüfen.');
    } else if (q.uebernehmen?.length || q.eingearbeitet_in?.length) {
      fail('Ungeprüfte/verworfene Quelle darf keine übernommenen Ideen oder aktiven Dokumentziele haben.');
    }
    for (const target of Array.isArray(q.eingearbeitet_in) ? q.eingearbeitet_in : []) {
      if (!/^(?:docs|prompts|examples|\.devcontainer)\/[a-zA-Z0-9_./-]+$/.test(target) || target.split('/').includes('..')) fail('Ungültiges lokales Dokumentziel.');
    }
  }
  return { errors, warnings };
}
