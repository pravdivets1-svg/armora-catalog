#!/usr/bin/env node
// apply-drafts.js — применить все накопленные патчи из _drafts.json
// к doors-armora.json и пересобрать catalog.html одним прогоном.
//
// Формат _drafts.json:
//   { "13": { "purpose":"дом", ... }, "14": { ... }, ... }

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const DRAFTS = path.join(ROOT, '_drafts.json');
const JSON_PATH = path.join(ROOT, 'doors-armora.json');
const CATALOG = path.join(ROOT, 'catalog.html');
const SYNC = path.join(ROOT, 'sync-catalog.js');

if (!fs.existsSync(DRAFTS)) {
  console.error('no _drafts.json — нечего применять');
  process.exit(1);
}
const drafts = JSON.parse(fs.readFileSync(DRAFTS, 'utf8'));
const ids = Object.keys(drafts).map(Number).sort((a,b)=>a-b);
if (!ids.length) { console.log('drafts пустые'); process.exit(0); }

const doors = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
const applied = [];
for (const id of ids) {
  const d = doors.find(x => x.id === id);
  if (!d) { console.warn('skip: door', id, 'not found'); continue; }
  Object.assign(d, drafts[id]);
  applied.push({ id, name: d.name });
}
fs.writeFileSync(JSON_PATH, JSON.stringify(doors, null, 2) + '\n', 'utf8');
execFileSync('node', [SYNC], { stdio: 'inherit' });

const cat = fs.readFileSync(CATALOG, 'utf8');
console.log('---');
for (const a of applied) {
  const re = new RegExp(`\\{id:${a.id},[^}]*?series:'([^']+)'[^}]*?price:(\\d+)`);
  const m = cat.match(re);
  const price = m ? parseInt(m[2], 10).toLocaleString('ru-RU') + ' ₽' : '?';
  const series = m ? m[1] : '?';
  console.log(`#${a.id} ${a.name} — ${price} — ${series}`);
}

// архивируем драфты, чтобы случайно не применить дважды
fs.renameSync(DRAFTS, DRAFTS.replace('.json', `.${Date.now()}.applied.json`));
console.log('drafts archived');
