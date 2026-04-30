#!/usr/bin/env node
// update-door.js — атомарно обновить дверь в doors-armora.json,
// пересобрать catalog.html через sync-catalog.js и вывести цену/серию.
//
// Использование:
//   node update-door.js <id> <json-patch>            # patch как аргумент
//   node update-door.js <id> --file patch.json       # patch из файла
//   node update-door.js <id> --stdin                 # patch из stdin
//
// На Windows PowerShell кавычки внутри JSON ломаются — используй --file.
//
// Поля, которые НЕ трогаем: id, name, popular, photos, finish_color (если не передали).

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const JSON_PATH = path.join(ROOT, 'doors-armora.json');
const CATALOG = path.join(ROOT, 'catalog.html');
const SYNC = path.join(ROOT, 'sync-catalog.js');

const id = parseInt(process.argv[2], 10);
const arg = process.argv[3];
if (!id || !arg) {
  console.error('usage: node update-door.js <id> <json|--file path|--stdin>');
  process.exit(1);
}

let patchStr;
if (arg === '--file') {
  patchStr = fs.readFileSync(process.argv[4], 'utf8');
} else if (arg === '--stdin') {
  patchStr = fs.readFileSync(0, 'utf8');
} else {
  patchStr = arg;
}

let patch;
try { patch = JSON.parse(patchStr); }
catch (e) { console.error('bad JSON patch:', e.message); process.exit(1); }

const doors = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
const door = doors.find(d => d.id === id);
if (!door) { console.error('door id', id, 'not found'); process.exit(1); }

const before = JSON.stringify(door);
Object.assign(door, patch);
fs.writeFileSync(JSON_PATH, JSON.stringify(doors, null, 2) + '\n', 'utf8');

execFileSync('node', [SYNC], { stdio: 'inherit' });

const cat = fs.readFileSync(CATALOG, 'utf8');
const re = new RegExp(`\\{id:${id},[^}]*?series:'([^']+)'[^}]*?price:(\\d+)`);
const m = cat.match(re);
const price = m ? parseInt(m[2], 10) : null;
const series = m ? m[1] : null;

console.log('---');
console.log(`Дверь #${id} ${door.name}`);
console.log(`Цена: ${price ? price.toLocaleString('ru-RU') + ' ₽' : '?'}`);
console.log(`Серия: ${series || '?'}`);
if (before === JSON.stringify(door)) console.log('(без изменений)');
