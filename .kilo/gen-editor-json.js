// Скрипт для генерации doors-armora.json (запускается через Node)
const fs = require('fs');
const path = require('path');

const urls = fs.readFileSync(path.join(__dirname, 'photos.txt'), 'utf8')
  .split(/\r?\n/).map(s=>s.trim()).filter(Boolean);

const names = [
  'Прага','Вена','Рим','Милан','Турин','Верона','Сиена','Пиза','Парма','Лукка',
  'Лион','Ницца','Канны','Бордо','Реймс','Тулуза','Авиньон','Версаль','Шамони',
  'Мадрид','Толедо','Гранада','Севилья','Малага','Валенсия','Барселона','Жирона',
  'Порту','Лиссабон','Эвора','Синтра','Брюгге','Гент','Антверпен','Амстердам',
  'Утрехт','Дельфт','Берлин','Мюнхен','Бонн','Кёльн','Дрезден','Лейпциг',
  'Цюрих','Берн','Базель','Люцерн','Женева','Зальцбург','Грац','Линц',
  'Будапешт','Сегед','Печ'
];

const finishes = ['graphite','venge','oak','white','walnut','concrete','cream','black'];
const glassesCat = ['none','rect','arch','mirror','panel','forge','vitrage'];
const purposes = ['квартира','дом','тамбур','офис'];
const flagsList = ['','Хит','Новинка','Рекомендуем'];

const glassMap = {
  none:'Без вставки', rect:'Стеклопакет прямой', arch:'Стеклопакет арка',
  mirror:'Зеркало', panel:'Без вставки', forge:'Стеклопакет с ковкой',
  vitrage:'Художественный витраж'
};
const handleMap = { short:'MSM', long:'Apex' };
const metalBySeries = {Эконом:'1.2',Стандарт:'1.5',Комфорт:'1.5',Премиум:'1.8',Элит:'2.0'};
const lockBySeries  = {Эконом:'1 замок стандарт',Стандарт:'2 замка Guardian',Комфорт:'2 замка Guardian',Премиум:'2 замка Kale',Элит:'Замок Cisa'};
const sealBySeries  = {Эконом:'Одинарный контур',Стандарт:'Двойной контур',Комфорт:'Двойной контур',Премиум:'Двойной контур',Элит:'Тройной контур'};
const extBySeries   = {Эконом:'Винилискожа',Стандарт:'Ламинат',Комфорт:'ПВХ',Премиум:'МДФ',Элит:'Влагостойкая фанера'};
const intBySeries   = {Эконом:'Винилискожа',Стандарт:'Ламинат',Комфорт:'Ламинат',Премиум:'МДФ',Элит:'МДФ'};

function getSeries(p){
  if (p>=65000) return 'Элит';
  if (p>=45000) return 'Премиум';
  if (p>=30000) return 'Комфорт';
  if (p>=20000) return 'Стандарт';
  return 'Эконом';
}

// Простой seeded PRNG (LCG) для воспроизводимости
let seed = 42;
const rnd = () => { seed = (seed * 1664525 + 1013904223) % 2**32; return seed / 2**32; };
const ri = (lo, hi) => Math.floor(rnd() * (hi - lo)) + lo;
const pick = arr => arr[Math.floor(rnd() * arr.length)];

const rows = [];
for (let i = 0; i < 54; i++) {
  const id = i + 1;
  let price = 19900 + ri(0,30) * 4500;
  price = Math.round(price/100)*100;
  const series = getSeries(price);
  const finish = pick(finishes);
  const glass = pick(glassesCat);
  const handle = ri(0,2) === 0 ? 'long' : 'short';
  rows.push({
    id, name: names[i],
    purpose: pick(purposes),
    metal: metalBySeries[series],
    ext: extBySeries[series],
    int: intBySeries[series],
    glass: glassMap[glass],
    seal: sealBySeries[series],
    lock: lockBySeries[series],
    handle: handleMap[handle],
    extras: [],
    oversize: false,
    double: false,
    finish_color: finish,
    flag: pick(flagsList),
    popular: ri(5,140),
    photos: urls[i]
  });
}

const json = JSON.stringify(rows, null, 2);
fs.writeFileSync(path.join(__dirname, '..', 'doors-armora.json'), json, 'utf8');
console.log('Wrote doors-armora.json (' + rows.length + ' rows, ' + json.length + ' bytes)');
