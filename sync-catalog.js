// Генерирует DOORS[] и PHOTOS{} для catalog.html из doors-armora.json (реплика того, что лежит в editor)
const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/Mi/armora';
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'doors-armora.json'), 'utf8'));

// Маппинги editor → catalog
const glassRev  = {
  'Без вставки':'none','Стеклопакет прямой':'rect','Стеклопакет арка':'arch',
  'Зеркало':'mirror','Стеклопакет с ковкой':'forge','Художественный витраж':'vitrage',
  'Зеркальная тонировка':'mirror'
};
const handleRev = {
  'MSM':'short','Apex':'long','Armadillo':'long','Guardian Premium':'long','Бугельная':'long'
};
const finishMap = {
  graphite:'graphite',venge:'venge',oak:'oak',white:'white',
  walnut:'walnut',concrete:'concrete',cream:'cream',black:'black'
};

const PRICES = {
  ext:{'Порошковое полимерное покрытие':4500,'Винилискожа':2500,'Ламинат':4500,'ПВХ':6500,'МДФ':9500,'Влагостойкая фанера':17000,'3D панель':27000},
  int:{'Порошковое полимерное покрытие':8000,'Винилискожа':2500,'Ламинат':4500,'ПВХ':6500,'МДФ':9500,'Влагостойкая фанера':17000},
  glass:{'Без вставки':0,'Зеркало':5500,'Стеклопакет прямой':5500,'Стеклопакет арка':7500,'Зеркальная тонировка':8500,'Стеклопакет с ковкой':12000,'Художественный витраж':25000},
  seal:{'Одинарный контур':0,'Двойной контур':2500,'Тройной контур':12000},
  lock:{'1 замок стандарт':0,'2 замка Guardian':3500,'2 замка Kale':6500,'Замок Cisa':13000,'Замок Mottura':19500,'Биометрический':25000},
  handle:{'MSM':0,'Apex':3000,'Armadillo':4500,'Guardian Premium':6500,'Бугельная':16500},
  extras:{'Видеоглазок':6500,'Доводчик':5500,'Терморазрыв':10500,'Порог из нержавейки':5500,'Броненакладка':5500,'Ночная задвижка':3200,'Шумоизоляция':5500,'Скрытые петли':23000}
};
const METAL_BASE = {'1.2':12900,'1.5':19900,'1.8':24900,'2.0':29900};

function compute(r){
  let p = METAL_BASE[r.metal] || 0;
  ['ext','int','glass','seal','lock','handle'].forEach(k=>{ p += (PRICES[k][r[k]]||0); });
  (r.extras||[]).forEach(e=>{ p += (PRICES.extras[e]||0); });
  if (r.oversize) p *= 1.20;
  if (r.double)   p *= 1.40;
  p = Math.round(p);
  let s='Эконом';
  if (p>=20000) s='Стандарт';
  if (p>=30000) s='Комфорт';
  if (p>=45000) s='Премиум';
  if (p>=65000) s='Элит';
  return {price:p, series:s};
}

function jsStr(s){ return "'" + String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'") + "'"; }

const doors = data.map(r=>{
  const c = compute(r);

  // Сборка чипов-характеристик: панель / замок / фурнитура / терморазрыв
  const chips = [];

  // 1. Толщина металла
  if (r.metal) chips.push(`Сталь ${r.metal} мм`);

  // 2. Внешняя отделка (панель)
  if (r.ext && r.ext !== 'Винилискожа') chips.push(`Панель: ${r.ext}`);

  // 3. Стекло/вставка (если не «Без вставки»)
  if (r.glass && r.glass !== 'Без вставки') chips.push(r.glass);

  // 4. Замок (короткое имя)
  if (r.lock) {
    const lockShort = r.lock
      .replace('1 замок ','')
      .replace('2 замка ','2× ')
      .replace('Замок ','');
    chips.push(`Замок: ${lockShort}`);
  }

  // 5. Уплотнение (если не одинарный)
  if (r.seal && r.seal !== 'Одинарный контур') chips.push(r.seal);

  // 6. Фурнитура — только если не базовая MSM
  if (r.handle && r.handle !== 'MSM') chips.push(`Ручка: ${r.handle}`);

  // 7. Опции из extras
  const extras = r.extras || [];
  if (extras.includes('Терморазрыв'))   chips.push('Терморазрыв');
  if (extras.includes('Скрытые петли')) chips.push('Скрытые петли');
  if (extras.includes('Шумоизоляция'))  chips.push('Шумоизоляция');
  if (extras.includes('Биометрический')) chips.push('Биометрия');

  // Берём первые 4 чипа для карточки
  const tags = chips.slice(0, 4);
  const tagsJs = tags.map(jsStr).join(',');
  const flagJs = r.flag ? jsStr(r.flag) : 'null';

  return `  {id:${r.id}, name:${jsStr(r.name)}, series:${jsStr(c.series)}, purpose:${jsStr(r.purpose)}, price:${c.price}, finish:${jsStr(finishMap[r.finish_color]||'graphite')}, glass:${jsStr(glassRev[r.glass]||'none')}, handle:${jsStr(handleRev[r.handle]||'long')}, flag:${flagJs}, popular:${r.popular||0}, tags:[${tagsJs}]}`;
});

const photos = data.map(r=>{
  const arr = String(r.photos||'').split(';').map(s=>s.trim()).filter(Boolean);
  return `  ${r.id}:[${arr.map(jsStr).join(',')}]`;
});

const doorsBlock  = 'const DOORS=[\n' + doors.join(',\n') + '\n];';
const photosBlock = 'const PHOTOS={\n' + photos.join(',\n') + '\n};';

let html = fs.readFileSync(path.join(ROOT,'catalog.html'), 'utf8');
const before = html.length;

if (!/const DOORS=\[[\s\S]*?\];/.test(html))   { console.error('DOORS block not found'); process.exit(1); }
if (!/const PHOTOS=\{[\s\S]*?\};/.test(html))  { console.error('PHOTOS block not found'); process.exit(1); }

html = html.replace(/const DOORS=\[[\s\S]*?\];/, doorsBlock);
html = html.replace(/const PHOTOS=\{[\s\S]*?\};/, photosBlock);

fs.writeFileSync(path.join(ROOT,'catalog.html'), html, 'utf8');
console.log(`OK. ${data.length} doors. catalog.html ${before} -> ${html.length} bytes`);
