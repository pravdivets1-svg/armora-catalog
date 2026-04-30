
/* ============ Р”РђРќРќР«Р• РљРђР›Р¬РљРЈР›РЇРўРћР Рђ (СЃРёРЅС…СЂРѕРЅРёР·РёСЂРѕРІР°РЅРѕ СЃ catalog.html) ============ */
const PRICES={
  ext:{
    'РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕР»РёРјРµСЂРЅРѕРµ РїРѕРєСЂС‹С‚РёРµ':4500,
    'Р’РёРЅРёР»РёСЃРєРѕР¶Р°':2500,
    'Р›Р°РјРёРЅР°С‚':4500,
    'РџР’РҐ':6500,
    'РњР”Р¤':9500,
    'Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°':17000,
    '3D РїР°РЅРµР»СЊ':27000
  },
  int:{
    'РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕР»РёРјРµСЂРЅРѕРµ РїРѕРєСЂС‹С‚РёРµ':8000,
    'Р’РёРЅРёР»РёСЃРєРѕР¶Р°':2500,
    'Р›Р°РјРёРЅР°С‚':4500,
    'РџР’РҐ':6500,
    'РњР”Р¤':9500,
    'Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°':17000
  },
  glass:{
    'Р‘РµР· РІСЃС‚Р°РІРєРё':0,
    'Р—РµСЂРєР°Р»Рѕ':5500,
    'РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№':5500,
    'РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°':7500,
    'Р—РµСЂРєР°Р»СЊРЅР°СЏ С‚РѕРЅРёСЂРѕРІРєР°':8500,
    'РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№':12000,
    'РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶':25000
  },
  seal:{
    'РћРґРёРЅР°СЂРЅС‹Р№ РєРѕРЅС‚СѓСЂ':0,
    'Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ':2500,
    'РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ':12000
  },
  lock:{
    '1 Р·Р°РјРѕРє СЃС‚Р°РЅРґР°СЂС‚':0,
    '2 Р·Р°РјРєР° Guardian':3500,
    '2 Р·Р°РјРєР° Kale':6500,
    'Р—Р°РјРѕРє Cisa':13000,
    'Р—Р°РјРѕРє Mottura':19500,
    'Р‘РёРѕРјРµС‚СЂРёС‡РµСЃРєРёР№':25000
  },
  handle:{
    'MSM':0,
    'Apex':3000,
    'Armadillo':4500,
    'Guardian Premium':6500,
    'Р‘СѓРіРµР»СЊРЅР°СЏ':16500
  },
  extras:{
    'Р’РёРґРµРѕРіР»Р°Р·РѕРє':6500,
    'Р”РѕРІРѕРґС‡РёРє':5500,
    'РўРµСЂРјРѕСЂР°Р·СЂС‹РІ':10500,
    'РџРѕСЂРѕРі РёР· РЅРµСЂР¶Р°РІРµР№РєРё':5500,
    'Р‘СЂРѕРЅРµРЅР°РєР»Р°РґРєР°':5500,
    'РќРѕС‡РЅР°СЏ Р·Р°РґРІРёР¶РєР°':3200,
    'РЁСѓРјРѕРёР·РѕР»СЏС†РёСЏ':5500,
    'РЎРєСЂС‹С‚С‹Рµ РїРµС‚Р»Рё':23000
  }
};
const METAL_BASE={'1.2':12900,'1.5':19900,'1.8':24900,'2.0':29900};
const PURPOSE=['РєРІР°СЂС‚РёСЂР°','РґРѕРј','С‚Р°РјР±СѓСЂ','РѕС„РёСЃ','РґР°С‡Р°'];
/* Р¦РІРµС‚ РѕС‚РґРµР»РєРё СѓР±СЂР°РЅ РёР· UI вЂ” РїРѕР»Рµ finish_color РѕСЃС‚Р°С‘С‚СЃСЏ РІ РґР°РЅРЅС‹С…, РЅРѕ РІ С‚Р°Р±Р»РёС†Рµ РЅРµ РїРѕРєР°Р·С‹РІР°РµС‚СЃСЏ */
const FLAGS=['','РҐРёС‚','РќРѕРІРёРЅРєР°','Р­Р»РёС‚','Р РµРєРѕРјРµРЅРґСѓРµРј'];

/* ============ РџР Р•РЎР•Рў Р“РћР РћР”РћР’ ============ */
const CITY_PRESETS=[
  // Р•РІСЂРѕРїР°
  'РџСЂР°РіР°','Р’РµРЅР°','Р РёРј','РњРёР»Р°РЅ','РўСѓСЂРёРЅ','Р’РµСЂРѕРЅР°','РЎРёРµРЅР°','РџРёР·Р°','РџР°СЂРјР°','Р›СѓРєРєР°',
  'Р›РёРѕРЅ','РќРёС†С†Р°','РљР°РЅРЅС‹','Р‘РѕСЂРґРѕ','Р РµР№РјСЃ','РўСѓР»СѓР·Р°','РђРІРёРЅСЊРѕРЅ','Р’РµСЂСЃР°Р»СЊ','РЁР°РјРѕРЅРё',
  'РњР°РґСЂРёРґ','РўРѕР»РµРґРѕ','Р“СЂР°РЅР°РґР°','РЎРµРІРёР»СЊСЏ','РњР°Р»Р°РіР°','Р’Р°Р»РµРЅСЃРёСЏ','Р‘Р°СЂСЃРµР»РѕРЅР°','Р–РёСЂРѕРЅР°',
  'РџРѕСЂС‚Сѓ','Р›РёСЃСЃР°Р±РѕРЅ','Р­РІРѕСЂР°','РЎРёРЅС‚СЂР°','Р‘СЂСЋРіРіРµ','Р“РµРЅС‚','РђРЅС‚РІРµСЂРїРµРЅ','РђРјСЃС‚РµСЂРґР°Рј',
  'РЈС‚СЂРµС…С‚','Р”РµР»СЊС„С‚','Р‘РµСЂР»РёРЅ','РњСЋРЅС…РµРЅ','Р‘РѕРЅРЅ','РљС‘Р»СЊРЅ','Р”СЂРµР·РґРµРЅ','Р›РµР№РїС†РёРі',
  'Р¦СЋСЂРёС…','Р‘РµСЂРЅ','Р‘Р°Р·РµР»СЊ','Р›СЋС†РµСЂРЅ','Р–РµРЅРµРІР°','Р—Р°Р»СЊС†Р±СѓСЂРі','Р“СЂР°С†','Р›РёРЅС†',
  'Р‘СѓРґР°РїРµС€С‚','РЎРµРіРµРґ','РџРµС‡','РљСЂР°РєРѕРІ','Р“РґР°РЅСЊСЃРє','Р’Р°СЂС€Р°РІР°','РџРѕР·РЅР°РЅСЊ','Р’СЂРѕС†Р»Р°РІ',
  'Р‘СЂРЅРѕ','РЎРѕС„РёСЏ','РџР»РѕРІРґРёРІ','Р‘СѓС…Р°СЂРµСЃС‚','РЎРёР±РёСѓ','Р‘СЂР°С€РѕРІ','РЎРїР»РёС‚','Р—Р°РіСЂРµР±',
  'Р”СѓР±СЂРѕРІРЅРёРє','РџСѓР»Р°','РљРѕС‚РѕСЂ','Р‘СѓРґРІР°','РўРёРІР°С‚','РђС„РёРЅС‹','Р РѕРґРѕСЃ','РљРѕСЂС„Сѓ','РЎР°РЅС‚РѕСЂРёРЅРё',
  'РЎС‚РѕРєРіРѕР»СЊРј','РњР°Р»СЊРјС‘','Р“С‘С‚РµР±РѕСЂРі','Р‘РµСЂРіРµРЅ','РћСЃР»Рѕ','РўСЂРѕРјСЃС‘','РћСЂС…СѓСЃ','РљРѕРїРµРЅРіР°РіРµРЅ',
  'РҐРµР»СЊСЃРёРЅРєРё','РўСѓСЂРєСѓ','РўР°Р»Р»РёРЅ','Р РёРіР°','Р’РёР»СЊРЅСЋСЃ','Р”СѓР±Р»РёРЅ','РљРѕСЂРє','Р­РґРёРЅР±СѓСЂРі','Р™РѕСЂРє',
  // РђР·РёСЏ
  'РљРёРѕС‚Рѕ','РћСЃР°РєР°','РќР°СЂР°','РљРѕР±СЌ','РќРёРєРєРѕ','РЎР°РїРїРѕСЂРѕ','РЎРµСѓР»','РџСѓСЃР°РЅ','РўР°Р№Р±СЌР№',
  'РЁР°РЅС…Р°Р№','РЎСѓС‡Р¶РѕСѓ','РҐР°РЅС‡Р¶РѕСѓ','Р“РѕРЅРєРѕРЅРі','РЎРёРЅРіР°РїСѓСЂ','Р‘Р°РЅРіРєРѕРє','Р§РёР°РЅРіРјР°Р№',
  'Р‘Р°Р»Рё','Р”Р¶Р°РєР°СЂС‚Р°','РњР°РЅРёР»Р°','РЎРµР±Сѓ','РҐР°РЅРѕР№','Р”Р°РЅР°РЅРі','РЎР°Р№РіРѕРЅ','Р›СѓР°РЅРіРїСЂР°Р±Р°РЅРі',
  'Р”РµР»Рё','РђРіСЂР°','Р”Р¶Р°Р№РїСѓСЂ','Р“РѕР°','РњСѓРјР±Р°Рё','РљРѕР»РѕРјР±Рѕ','Р”СѓР±Р°Р№','Р”РѕС…Р°','РњР°СЃРєР°С‚',
  'РЎС‚Р°РјР±СѓР»','РђРЅС‚Р°Р»РёСЏ','РР·РјРёСЂ','Р‘РѕРґСЂСѓРј','РљР°РїРїР°РґРѕРєРёСЏ','Р‘РµР№СЂСѓС‚','РРµСЂСѓСЃР°Р»РёРј',
  // РђРјРµСЂРёРєР°
  'Р“Р°РІР°РЅР°','РљР°РЅРєСѓРЅ','РўСѓР»СѓРј','РљР°СЂС‚Р°С…РµРЅР°','Р›РёРјР°','РљСѓСЃРєРѕ','РљРёС‚Рѕ','Р‘РѕРіРѕС‚Р°',
  'Р РёРѕ','РЎР°Р»СЊРІР°РґРѕСЂ','Р‘СЂР°Р·РёР»РёР°','Р‘СѓСЌРЅРѕСЃ-РђР№СЂРµСЃ','РњРµРЅРґРѕСЃР°','РЎР°РЅС‚СЊСЏРіРѕ','РњРѕРЅС‚РµРІРёРґРµРѕ',
  // РђС„СЂРёРєР° / РїСЂРѕС‡РµРµ
  'РљР°РёСЂ','Р›СѓРєСЃРѕСЂ','РђР»РµРєСЃР°РЅРґСЂРёСЏ','РљР°СЃР°Р±Р»Р°РЅРєР°','РњР°СЂСЂР°РєРµС€','Р¤РµСЃ','РўР°РЅР¶РµСЂ',
  'РљРµР№РїС‚Р°СѓРЅ','РќР°Р№СЂРѕР±Рё','Р—Р°РЅР·РёР±Р°СЂ','РўСѓРЅРёСЃ','РљР°СЂС„Р°РіРµРЅ'
];

/* ============ РђР›Р“РћР РРўРњ Р¦Р•РќР« Р РЎР•Р РР ============ */
function compute(row){
  const errs=[];
  let price=0;
  const base=METAL_BASE[row.metal];
  if(base==null){errs.push('metal');} else price+=base;

  ['ext','int','glass','seal','lock','handle'].forEach(k=>{
    if(!row[k]){errs.push(k);return}
    const p=PRICES[k][row[k]];
    if(p==null){errs.push(k);return}
    price+=p;
  });
  (row.extras||[]).forEach(e=>{
    const p=PRICES.extras[e];
    if(p==null){errs.push('extras:'+e);return}
    price+=p;
  });

  if(row.oversize) price*=1.20;
  if(row.double)   price*=1.40;
  price=Math.round(price);

  let series='Р­РєРѕРЅРѕРј';
  if(price>=20000) series='РЎС‚Р°РЅРґР°СЂС‚';
  if(price>=30000) series='РљРѕРјС„РѕСЂС‚';
  if(price>=45000) series='РџСЂРµРјРёСѓРј';
  if(price>=65000) series='Р­Р»РёС‚';

  return {price,series,errs};
}

/* ============ РЎРћРЎРўРћРЇРќРР• ============ */
const STORE_KEY='armora_doors_v1';
let DATA=[];
DATA=load();

function load(){
  try{
    const raw=localStorage.getItem(STORE_KEY);
    if(raw){
      const arr=JSON.parse(raw);
      if(Array.isArray(arr)&&arr.length)return arr;
    }
  }catch(e){}
  return [emptyRow()];
}
function save(){localStorage.setItem(STORE_KEY,JSON.stringify(DATA))}

function emptyRow(name=''){
  return {
    id:nextId(),name,purpose:'РєРІР°СЂС‚РёСЂР°',metal:'1.5',
    ext:'',int:'',glass:'Р‘РµР· РІСЃС‚Р°РІРєРё',seal:'РћРґРёРЅР°СЂРЅС‹Р№ РєРѕРЅС‚СѓСЂ',
    lock:'1 Р·Р°РјРѕРє СЃС‚Р°РЅРґР°СЂС‚',handle:'MSM',extras:[],
    oversize:false,double:false,
    finish_color:'graphite',flag:'',popular:0,photos:''
  };
}
function nextId(){
  let max=0;
  if(Array.isArray(DATA))DATA.forEach(r=>{if(r&&r.id>max)max=r.id});
  return max+1;
}

/* ============ Р’РР”Р–Р•РўР« ============ */
function selectCell(row,key,opts,placeholder){
  const sel=document.createElement('select');
  if(placeholder!==undefined){
    const o=document.createElement('option');o.value='';o.textContent=placeholder;sel.appendChild(o);
  }
  opts.forEach(v=>{
    const o=document.createElement('option');o.value=v;o.textContent=v||'(РїСѓСЃС‚Рѕ)';
    if(row[key]===v)o.selected=true;sel.appendChild(o);
  });
  sel.onchange=()=>{row[key]=sel.value;save();renderRow(row);updateStats()};
  return sel;
}
function inputCell(row,key,type='text',placeholder=''){
  const inp=document.createElement('input');
  inp.type=type;inp.value=row[key]??'';inp.placeholder=placeholder;
  inp.oninput=()=>{
    row[key]=type==='number'?(+inp.value||0):inp.value;
    save();renderRow(row);updateStats();
  };
  return inp;
}
function checkboxCell(row,key){
  const inp=document.createElement('input');inp.type='checkbox';inp.checked=!!row[key];
  inp.onchange=()=>{row[key]=inp.checked;save();renderRow(row);updateStats()};
  return inp;
}
function extrasCell(row){
  const wrap=document.createElement('div');wrap.style.position='relative';
  const btn=document.createElement('button');btn.className='extras-btn';btn.type='button';
  const draw=()=>{
    const arr=row.extras||[];
    btn.innerHTML=arr.length
      ? arr.map(x=>`<span style="display:inline-block;background:#2a2e38;color:#bef264;border-radius:4px;padding:1px 6px;font-size:11px;margin:1px 2px">${x}</span>`).join('')
      : '<span class="empty">вЂ” РІС‹Р±СЂР°С‚СЊ вЂ”</span>';
  };
  draw();
  btn.onclick=e=>{
    e.stopPropagation();
    document.querySelectorAll('.multi').forEach(m=>m.remove());
    const m=document.createElement('div');m.className='multi';
    Object.keys(PRICES.extras).forEach(name=>{
      const lbl=document.createElement('label');
      const cb=document.createElement('input');cb.type='checkbox';
      cb.checked=(row.extras||[]).includes(name);
      cb.onchange=()=>{
        if(!row.extras)row.extras=[];
        if(cb.checked&&!row.extras.includes(name))row.extras.push(name);
        if(!cb.checked)row.extras=row.extras.filter(x=>x!==name);
        save();draw();renderRow(row);updateStats();
      };
      lbl.appendChild(cb);
      lbl.appendChild(document.createTextNode(' '+name+' (+'+PRICES.extras[name].toLocaleString('ru-RU')+' в‚Ѕ)'));
      m.appendChild(lbl);
    });
    wrap.appendChild(m);
    setTimeout(()=>document.addEventListener('click',function h(ev){
      if(!m.contains(ev.target)){m.remove();document.removeEventListener('click',h)}
    }),0);
  };
  wrap.appendChild(btn);
  return wrap;
}

/* ============ Р Р•РќР”Р•Р  ============ */
function renderAll(){
  const tb=document.getElementById('tb');tb.innerHTML='';
  DATA.forEach(r=>tb.appendChild(makeRow(r)));
  updateStats();
}
function makeRow(row){
  const tr=document.createElement('tr');tr.dataset.id=row.id;
  tr.appendChild(td('pin',document.createTextNode(DATA.indexOf(row)+1)));
  tr.appendChild(td('',inputCell(row,'name','text','РќР°Р·РІР°РЅРёРµ')));
  tr.appendChild(td('',selectCell(row,'purpose',PURPOSE)));
  tr.appendChild(td('',selectCell(row,'metal',Object.keys(METAL_BASE))));
  tr.appendChild(td('',selectCell(row,'ext',Object.keys(PRICES.ext),'вЂ” РІС‹Р±СЂР°С‚СЊ вЂ”')));
  tr.appendChild(td('',selectCell(row,'int',Object.keys(PRICES.int),'вЂ” РІС‹Р±СЂР°С‚СЊ вЂ”')));
  tr.appendChild(td('',selectCell(row,'glass',Object.keys(PRICES.glass))));
  tr.appendChild(td('',selectCell(row,'seal',Object.keys(PRICES.seal))));
  tr.appendChild(td('',selectCell(row,'lock',Object.keys(PRICES.lock))));
  tr.appendChild(td('',selectCell(row,'handle',Object.keys(PRICES.handle))));
  tr.appendChild(td('extras',extrasCell(row)));
  tr.appendChild(td('checkbox',checkboxCell(row,'oversize')));
  tr.appendChild(td('checkbox',checkboxCell(row,'double')));
  tr.appendChild(td('',selectCell(row,'flag',FLAGS)));
  tr.appendChild(td('',inputCell(row,'popular','number','0')));
  tr.appendChild(td('photos',inputCell(row,'photos','text','https://...; https://...')));
  const calcTd=document.createElement('td');calcTd.className='calc';calcTd.dataset.calc='1';
  tr.appendChild(calcTd);
  const act=document.createElement('td');act.className='actions';
  const del=document.createElement('button');del.textContent='вњ•';del.title='РЈРґР°Р»РёС‚СЊ';
  del.onclick=()=>{DATA=DATA.filter(x=>x!==row);save();renderAll()};
  act.appendChild(del);
  tr.appendChild(act);
  drawCalc(tr,row);
  return tr;
}
function td(cls,child){const t=document.createElement('td');if(cls)t.className=cls;if(child)t.appendChild(child);return t}
function renderRow(row){
  const tr=document.querySelector(`tr[data-id="${row.id}"]`);
  if(!tr)return;
  drawCalc(tr,row);
}
function drawCalc(tr,row){
  const r=compute(row);
  const td=tr.querySelector('td.calc');
  td.classList.toggle('invalid',r.errs.length>0);
  td.innerHTML=`<div class="price">${r.price.toLocaleString('ru-RU')} в‚Ѕ</div><div class="series">${r.series}${r.errs.length?' В· вљ  '+r.errs.join(','):''}</div>`;
  // РїРѕРґСЃРІРµС‚РєР° РѕС€РёР±РѕС‡РЅС‹С… СЃРµР»РµРєС‚РѕРІ
  ['ext','int','glass','seal','lock','handle','metal'].forEach((k,i)=>{
    const cell=tr.children[3+i] || tr.children[3+i-1];
  });
}

/* ============ РЎРўРђРўРРЎРўРРљРђ ============ */
function updateStats(){
  document.getElementById('cnt').textContent=DATA.length;
  let errs=0;DATA.forEach(r=>{if(compute(r).errs.length)errs++});
  document.getElementById('errs').textContent=errs;
}

/* ============ Р”Р•Р™РЎРўР’РРЇ ============ */
function addRow(name){
  DATA.push(emptyRow(name||''));save();renderAll();
  setTimeout(()=>{
    const last=document.querySelector('#tb tr:last-child input');
    last?.focus();
  },0);
}
function addPreset(){
  const used=new Set(DATA.map(r=>r.name));
  const free=CITY_PRESETS.filter(c=>!used.has(c));
  // РїРµСЂРµРјРµС€Р°С‚СЊ
  for(let i=free.length-1;i>0;i--){const j=(Math.random()*(i+1))|0;[free[i],free[j]]=[free[j],free[i]];}
  free.slice(0,10).forEach(c=>DATA.push(emptyRow(c)));
  save();renderAll();
}
function clearAll(){
  if(!confirm('РЈРґР°Р»РёС‚СЊ РІСЃРµ РґРІРµСЂРё?'))return;
  DATA=[];save();renderAll();
}

/* ============ Р’РЎРўР РћР•РќРќР«Р• ARMORA-Р”Р’Р•Р Р (54) ============ */
const ARMORA_DATA=[{"id":1,"name":"РџСЂР°РіР°","purpose":"РґРѕРј","metal":"1.8","ext":"РњР”Р¤","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Kale","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"","popular":65,"photos":"https://radika1.link/2026/04/26/019d9238-c415-74b8-877c-892e7f891b3e13cfbe8765c31f61.png"},{"id":2,"name":"Р’РµРЅР°","purpose":"С‚Р°РјР±СѓСЂ","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"cream","flag":"Р­Р»РёС‚","popular":121,"photos":"https://s1.radikal.cloud/2026/04/26/019d9233-69a7-7dbb-b00b-98dbed7781bb52d6e4e1e19dc81e.png"},{"id":3,"name":"Р РёРј","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":79,"photos":"https://radika1.link/2026/04/26/019d9243-43b0-7730-9061-ea70e88bd633a87ee1c4e348cbcb.png"},{"id":4,"name":"РњРёР»Р°РЅ","purpose":"РґР°С‡Р°","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"walnut","flag":"","popular":116,"photos":"https://s2.radikal.cloud/2026/04/26/cnLMAPnPpP0Cw3UIFIWIykTDsIPLV-OWZF-wwyouua04K5P-zgiQvAnPVykAe_a4wVdNPqiwSjchAztf3pK6kUTbe73e06f35f22357f.jpg"},{"id":5,"name":"РўСѓСЂРёРЅ","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":96,"photos":"https://s3.radikal.cloud/2026/04/26/d3TjPtPCv0iNagFkeJch9qRqCThcijkpj0zESMuCnsUQcv29kxWq-HUBnXTbSyRnG5-Gqdra7v7SEE7jlPn5fSqbfd1354007c9f8d39.jpg"},{"id":6,"name":"Р’РµСЂРѕРЅР°","purpose":"РѕС„РёСЃ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"walnut","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":65,"photos":"https://s1.radikal.cloud/2026/04/26/e4194e23-ef1c-4644-9daa-8aeaab3371daef0b5a6e32831cf1.png"},{"id":7,"name":"РЎРёРµРЅР°","purpose":"РѕС„РёСЃ","metal":"1.5","ext":"Р›Р°РјРёРЅР°С‚","int":"Р›Р°РјРёРЅР°С‚","glass":"Р—РµСЂРєР°Р»Рѕ","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"venge","flag":"РќРѕРІРёРЅРєР°","popular":113,"photos":"https://radika1.link/2026/04/26/IMG_5765-11776fdb932d4a86f.jpeg"},{"id":8,"name":"РџРёР·Р°","purpose":"РґРѕРј","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"venge","flag":"РҐРёС‚","popular":124,"photos":"https://s2.radikal.cloud/2026/04/26/IMG_5784e2dde65540a9ab9f.jpg"},{"id":9,"name":"РџР°СЂРјР°","purpose":"РґРѕРј","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"venge","flag":"РҐРёС‚","popular":22,"photos":"https://radika1.link/2026/04/26/IMG_58549f4747fc41d13fe4.jpg"},{"id":10,"name":"Р›СѓРєРєР°","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"Р­Р»РёС‚","popular":46,"photos":"https://s1.radikal.cloud/2026/04/26/IMG_5930f66fe87b7582a438.jpg"},{"id":11,"name":"Р›РёРѕРЅ","purpose":"РѕС„РёСЃ","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"walnut","flag":"Р­Р»РёС‚","popular":71,"photos":"https://radika1.link/2026/04/26/IMG_593572168dbdd7d17466.png"},{"id":12,"name":"РќРёС†С†Р°","purpose":"РґР°С‡Р°","metal":"1.8","ext":"РњР”Р¤","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Kale","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"venge","flag":"Р­Р»РёС‚","popular":118,"photos":"https://s3.radikal.cloud/2026/04/26/IMG_5957e7a2be7857fe6dab.jpg"},{"id":13,"name":"РљР°РЅРЅС‹","purpose":"РѕС„РёСЃ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"venge","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":62,"photos":"https://s2.radikal.cloud/2026/04/26/IMG_6485e8af4064820ab5b5.jpg"},{"id":14,"name":"Р‘РѕСЂРґРѕ","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":112,"photos":"https://s1.radikal.cloud/2026/04/26/IMG_64869b2e71c209d1e8c7.jpg"},{"id":15,"name":"Р РµР№РјСЃ","purpose":"РґР°С‡Р°","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":31,"photos":"https://s3.radikal.cloud/2026/04/26/IMG_64872e2069876dd8f68f.jpg"},{"id":16,"name":"РўСѓР»СѓР·Р°","purpose":"РєРІР°СЂС‚РёСЂР°","metal":"1.8","ext":"РњР”Р¤","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Kale","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"walnut","flag":"Р­Р»РёС‚","popular":54,"photos":"https://radika1.link/2026/04/26/IMG_6488b3829e05382c937e.jpg"},{"id":17,"name":"РђРІРёРЅСЊРѕРЅ","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"oak","flag":"Р­Р»РёС‚","popular":36,"photos":"https://radika1.link/2026/04/26/IMG_6489989b87134fd1a890.jpg"},{"id":18,"name":"Р’РµСЂСЃР°Р»СЊ","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":82,"photos":"https://s3.radikal.cloud/2026/04/26/IMG_64906166dbc0d42561a7.jpg"},{"id":19,"name":"РЁР°РјРѕРЅРё","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":137,"photos":"https://s2.radikal.cloud/2026/04/26/IMG_64914f6f2d6bbcb41c0d.jpg"},{"id":20,"name":"РњР°РґСЂРёРґ","purpose":"РѕС„РёСЃ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"cream","flag":"","popular":50,"photos":"https://s3.radikal.cloud/2026/04/26/IMG_6492-2f7a4200c2944aa07.jpg"},{"id":21,"name":"РўРѕР»РµРґРѕ","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"cream","flag":"РҐРёС‚","popular":92,"photos":"https://radika1.link/2026/04/26/IMG_7278b2ad929d3bc45764.jpg"},{"id":22,"name":"Р“СЂР°РЅР°РґР°","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"","popular":119,"photos":"https://s2.radikal.cloud/2026/04/26/IMG_730266900c8b26b1f897.jpg"},{"id":23,"name":"РЎРµРІРёР»СЊСЏ","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"black","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":88,"photos":"https://radika1.link/2026/04/26/IMG_7305c8c6c930883d9a75.png"},{"id":24,"name":"РњР°Р»Р°РіР°","purpose":"РґРѕРј","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р—РµСЂРєР°Р»Рѕ","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"Р­Р»РёС‚","popular":8,"photos":"https://radika1.link/2026/04/26/IMG_7308-25b6330ff495f2f10.jpg"},{"id":25,"name":"Р’Р°Р»РµРЅСЃРёСЏ","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"","popular":60,"photos":"https://s3.radikal.cloud/2026/04/26/IMG_7306ea1caedcb7b96ba9.png"},{"id":26,"name":"Р‘Р°СЂСЃРµР»РѕРЅР°","purpose":"РґРѕРј","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"РҐРёС‚","popular":80,"photos":"https://radika1.link/2026/04/26/IMG_73372df11a1432a200b5.jpg"},{"id":27,"name":"Р–РёСЂРѕРЅР°","purpose":"РґРѕРј","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"black","flag":"Р­Р»РёС‚","popular":42,"photos":"https://s1.radikal.cloud/2026/04/26/IMG_7339e1cb5f27b1d0f130.jpeg"},{"id":28,"name":"РџРѕСЂС‚Сѓ","purpose":"РѕС„РёСЃ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р—РµСЂРєР°Р»Рѕ","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"black","flag":"РќРѕРІРёРЅРєР°","popular":42,"photos":"https://s3.radikal.cloud/2026/04/26/IMG_7344955372066ae84786.jpeg"},{"id":29,"name":"Р›РёСЃСЃР°Р±РѕРЅ","purpose":"С‚Р°РјР±СѓСЂ","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"venge","flag":"Р­Р»РёС‚","popular":91,"photos":"https://s2.radikal.cloud/2026/04/26/IMG_73651c8476dffc656e41.png"},{"id":30,"name":"Р­РІРѕСЂР°","purpose":"РґРѕРј","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"oak","flag":"Р­Р»РёС‚","popular":75,"photos":"https://radika1.link/2026/04/26/IMG_73890ae148d77a42daad.png"},{"id":31,"name":"РЎРёРЅС‚СЂР°","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"concrete","flag":"Р­Р»РёС‚","popular":123,"photos":"https://s2.radikal.cloud/2026/04/26/IMG_7391e44f652f5beb3611.png"},{"id":32,"name":"Р‘СЂСЋРіРіРµ","purpose":"РєРІР°СЂС‚РёСЂР°","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"Р—РµСЂРєР°Р»Рѕ","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"walnut","flag":"РќРѕРІРёРЅРєР°","popular":12,"photos":"https://radika1.link/2026/04/26/IMG_7398140e371cfb8bca4d.png"},{"id":33,"name":"Р“РµРЅС‚","purpose":"РѕС„РёСЃ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"venge","flag":"Р­Р»РёС‚","popular":21,"photos":"https://s3.radikal.cloud/2026/04/26/IMG_7400fe2b69253c4d090c.png"},{"id":34,"name":"РђРЅС‚РІРµСЂРїРµРЅ","purpose":"РєРІР°СЂС‚РёСЂР°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"walnut","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":135,"photos":"https://radika1.link/2026/04/26/IMG_7402aff4a5881899d4cc.png"},{"id":35,"name":"РђРјСЃС‚РµСЂРґР°Рј","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":120,"photos":"https://s3.radikal.cloud/2026/04/26/IMG_74983a704f2e3ae50a81.png"},{"id":36,"name":"РЈС‚СЂРµС…С‚","purpose":"С‚Р°РјР±СѓСЂ","metal":"1.5","ext":"Р›Р°РјРёРЅР°С‚","int":"Р›Р°РјРёРЅР°С‚","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"concrete","flag":"Р РµРєРѕРјРµРЅРґСѓРµРј","popular":107,"photos":"https://s1.radikal.cloud/2026/04/26/IMG_7530c890921b1d9f62b8.jpg"},{"id":37,"name":"Р”РµР»СЊС„С‚","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"РќРѕРІРёРЅРєР°","popular":37,"photos":"https://radika1.link/2026/04/26/j8cDWprdNNz3HnguWMuvrEUIo1_vzcqL-sp13OueEPGV-ZwZvMbvB5XxsmjmMeS5LK9lwbGkClEM7VbnBHMkKC4Pe2411a487bcd3be4.jpg"},{"id":38,"name":"Р‘РµСЂР»РёРЅ","purpose":"РѕС„РёСЃ","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"РҐРёС‚","popular":36,"photos":"https://s2.radikal.cloud/2026/04/26/photo_2026-03-06_11-16-130f7eb3e097b65fe7.jpg"},{"id":39,"name":"РњСЋРЅС…РµРЅ","purpose":"С‚Р°РјР±СѓСЂ","metal":"1.5","ext":"Р›Р°РјРёРЅР°С‚","int":"Р›Р°РјРёРЅР°С‚","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"cream","flag":"","popular":19,"photos":"https://s1.radikal.cloud/2026/04/26/lfs3J8IqzwF7BJ8gyxqMAULMOkFdn06UygKHffg1Q4z7RBN0j_LwvjvtpEIl2AqMmc5H5f4MyQwRbTo6r44n_v_C81206747391915ed.jpg"},{"id":40,"name":"Р‘РѕРЅРЅ","purpose":"РґРѕРј","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р—РµСЂРєР°Р»Рѕ","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"oak","flag":"Р­Р»РёС‚","popular":44,"photos":"https://radika1.link/2026/04/26/photo_2026-03-06_11-16-1740632e4ff0d55f28.jpg"},{"id":41,"name":"РљС‘Р»СЊРЅ","purpose":"РґР°С‡Р°","metal":"1.8","ext":"РњР”Р¤","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Kale","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"black","flag":"","popular":46,"photos":"https://s3.radikal.cloud/2026/04/26/photo_2026-03-06_11-20-25000f88a017f70d60.jpg"},{"id":42,"name":"Р”СЂРµР·РґРµРЅ","purpose":"РєРІР°СЂС‚РёСЂР°","metal":"1.8","ext":"РњР”Р¤","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Kale","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"black","flag":"Р­Р»РёС‚","popular":63,"photos":"https://s2.radikal.cloud/2026/04/26/photo_2026-03-24_10-45-1309e0bd2f24b12171.jpg"},{"id":43,"name":"Р›РµР№РїС†РёРі","purpose":"РѕС„РёСЃ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"РҐРёС‚","popular":39,"photos":"https://s3.radikal.cloud/2026/04/26/photo_2026-03-24_10-45-31a0bc1c07c45600c2.jpg"},{"id":44,"name":"Р¦СЋСЂРёС…","purpose":"РєРІР°СЂС‚РёСЂР°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"concrete","flag":"РҐРёС‚","popular":104,"photos":"https://s2.radikal.cloud/2026/04/26/photo_2026-03-24_10-45-3534be24a338859395.jpg"},{"id":45,"name":"Р‘РµСЂРЅ","purpose":"С‚Р°РјР±СѓСЂ","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"РќРѕРІРёРЅРєР°","popular":101,"photos":"https://radika1.link/2026/04/26/photo_2026-03-24_10-45-387ad216540cce0e62.jpg"},{"id":46,"name":"Р‘Р°Р·РµР»СЊ","purpose":"РґР°С‡Р°","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"Р—РµСЂРєР°Р»Рѕ","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"graphite","flag":"РҐРёС‚","popular":56,"photos":"https://s3.radikal.cloud/2026/04/26/photo_2026-04-13_21-18-5468e90c0567ea697c.jpg"},{"id":47,"name":"Р›СЋС†РµСЂРЅ","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"walnut","flag":"Р­Р»РёС‚","popular":92,"photos":"https://radika1.link/2026/04/26/photo_2026-04-13_21-19-040e923d2a430b0f8f.jpg"},{"id":48,"name":"Р–РµРЅРµРІР°","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"oak","flag":"","popular":15,"photos":"https://s1.radikal.cloud/2026/04/26/photo_2026-04-13_21-19-16d85c2c40554d02df.jpg"},{"id":49,"name":"Р—Р°Р»СЊС†Р±СѓСЂРі","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"cream","flag":"Р­Р»РёС‚","popular":22,"photos":"https://radika1.link/2026/04/26/photo_2026-04-13_21-19-212c3a9205acb91dbf.jpg"},{"id":50,"name":"Р“СЂР°С†","purpose":"РґРѕРј","metal":"1.5","ext":"РџР’РҐ","int":"Р›Р°РјРёРЅР°С‚","glass":"Р—РµСЂРєР°Р»Рѕ","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Guardian","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"","popular":9,"photos":"https://radika1.link/2026/04/26/photo_2026-04-13_21-19-39c4471170c1c0c1c1.jpg"},{"id":51,"name":"Р›РёРЅС†","purpose":"РґР°С‡Р°","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р—РµСЂРєР°Р»Рѕ","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"oak","flag":"РҐРёС‚","popular":78,"photos":"https://s3.radikal.cloud/2026/04/26/photo_2026-04-13_21-19-59a59b652786607797.jpg"},{"id":52,"name":"Р‘СѓРґР°РїРµС€С‚","purpose":"С‚Р°РјР±СѓСЂ","metal":"2.0","ext":"Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°","int":"РњР”Р¤","glass":"Р‘РµР· РІСЃС‚Р°РІРєРё","seal":"РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"Р—Р°РјРѕРє Cisa","handle":"Apex","extras":[],"oversize":false,"double":false,"finish_color":"oak","flag":"РҐРёС‚","popular":69,"photos":"https://radika1.link/2026/04/26/photo_2026-04-13_21-20-147a099755cc4eca15.jpg"},{"id":53,"name":"РЎРµРіРµРґ","purpose":"РґР°С‡Р°","metal":"1.8","ext":"РњР”Р¤","int":"РњР”Р¤","glass":"РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Kale","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"black","flag":"РќРѕРІРёРЅРєР°","popular":116,"photos":"https://s2.radikal.cloud/2026/04/26/photo_2026-04-13_21-20-237e0994297dba9601.jpg"},{"id":54,"name":"РџРµС‡","purpose":"РґРѕРј","metal":"1.8","ext":"РњР”Р¤","int":"РњР”Р¤","glass":"РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶","seal":"Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ","lock":"2 Р·Р°РјРєР° Kale","handle":"MSM","extras":[],"oversize":false,"double":false,"finish_color":"white","flag":"РќРѕРІРёРЅРєР°","popular":46,"photos":"https://s3.radikal.cloud/2026/04/26/snapedit_17695184894915cfc0e77067fcc70.jpeg"}];

function loadArmoraJSON(){
  if(DATA.length>1 && !confirm('Р—Р°РјРµРЅРёС‚СЊ С‚РµРєСѓС‰РёР№ РєР°С‚Р°Р»РѕРі 54 РґРІРµСЂСЏРјРё ARMORA?'))return;
  DATA = ARMORA_DATA.map(r=>Object.assign(emptyRow(),r));
  save();renderAll();
  alert('Р—Р°РіСЂСѓР¶РµРЅРѕ '+DATA.length+' РґРІРµСЂРµР№. Р’СЃРµ РїРѕР»СЏ СЂРµРґР°РєС‚РёСЂСѓСЋС‚СЃСЏ вЂ” РЅР°СЃС‚СЂРѕР№ Рё РЅР°Р¶РјРё В«РЎРєР°С‡Р°С‚СЊ JSONВ».');
}

/* ============ Р­РљРЎРџРћР Рў ============ */
function csvEscape(s){
  s=String(s??'');
  if(/[,;"\n]/.test(s))return '"'+s.replace(/"/g,'""')+'"';
  return s;
}
function exportCSV(){
  const cols=['id','name','purpose','metal','ext','int','glass','seal','lock','handle','extras','oversize','double','flag','popular','photos'];
  const head=cols.join(',');
  const rows=DATA.map(r=>cols.map(c=>{
    const v=r[c];
    if(Array.isArray(v))return csvEscape(v.join(';'));
    if(typeof v==='boolean')return v?'true':'';
    return csvEscape(v);
  }).join(','));
  download('doors.csv',[head,...rows].join('\r\n'),'text/csv');
}
function exportJSON(){
  const out=DATA.map(r=>{
    const c=compute(r);
    return {...r, _price:c.price, _series:c.series, _errs:c.errs};
  });
  download('doors.json',JSON.stringify(out,null,2),'application/json');
}
function copyJSON(){
  const out=DATA.map(r=>{const c=compute(r);return {...r,_price:c.price,_series:c.series}});
  navigator.clipboard.writeText(JSON.stringify(out,null,2))
    .then(()=>alert('JSON СЃРєРѕРїРёСЂРѕРІР°РЅ РІ Р±СѓС„РµСЂ РѕР±РјРµРЅР° ('+DATA.length+' РґРІРµСЂРµР№)'));
}
function download(name,content,type){
  const blob=new Blob([content],{type:type+';charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download=name;a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

/* ============ РђР’РўРћРЎРћРҐР РђРќР•РќРР• Р’ Р¤РђР™Р› (File System Access API) ============ */
let __fileHandle=null;
let __saveTimer=0;
let __saveBusy=false;

const FS_SUPPORTED='showSaveFilePicker' in window;

function buildExportJSON(){
  return JSON.stringify(DATA.map(r=>{
    const c=compute(r);
    return {...r, _price:c.price, _series:c.series};
  }), null, 2);
}

async function linkAutosave(){
  if(!FS_SUPPORTED){
    alert('Р‘СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ File System Access API.\nРСЃРїРѕР»СЊР·СѓР№ РєРЅРѕРїРєСѓ В«РЎРєР°С‡Р°С‚СЊ JSONВ» РІСЂСѓС‡РЅСѓСЋ РёР»Рё РѕС‚РєСЂРѕР№ СЃС‚СЂР°РЅРёС†Сѓ РІ Chrome/Edge.');
    return;
  }
  try{
    __fileHandle = await window.showSaveFilePicker({
      suggestedName:'doors.json',
      types:[{description:'JSON РєР°С‚Р°Р»РѕРіР° ARMORA',accept:{'application/json':['.json']}}]
    });
    document.getElementById('autosaveBtn').textContent='рџ’ѕ вњ“ '+__fileHandle.name;
    document.getElementById('autosaveBtn').classList.add('primary');
    await writeAutosave();
    toastSave('РђРІС‚РѕСЃРѕС…СЂР°РЅРµРЅРёРµ РІ '+__fileHandle.name+' РІРєР»СЋС‡РµРЅРѕ');
  }catch(e){
    if(e && e.name!=='AbortError') alert('РќРµ СѓРґР°Р»РѕСЃСЊ РїСЂРёРІСЏР·Р°С‚СЊ С„Р°Р№Р»: '+e.message);
  }
}

async function writeAutosave(){
  if(!__fileHandle || __saveBusy) return;
  __saveBusy=true;
  try{
    const w=await __fileHandle.createWritable();
    await w.write(buildExportJSON());
    await w.close();
  }catch(e){
    console.warn('autosave fail',e);
  }finally{
    __saveBusy=false;
  }
}

function scheduleAutosave(){
  if(!__fileHandle) return;
  clearTimeout(__saveTimer);
  __saveTimer=setTimeout(writeAutosave, 600);
}

function toastSave(msg){
  let el=document.getElementById('save-toast');
  if(!el){
    el=document.createElement('div');el.id='save-toast';
    el.style.cssText='position:fixed;bottom:20px;right:20px;background:#0f0f10;color:#bef264;padding:10px 16px;border-radius:8px;font-size:13px;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,.4);transition:opacity .3s';
    document.body.appendChild(el);
  }
  el.textContent=msg;el.style.opacity='1';
  clearTimeout(el._t);
  el._t=setTimeout(()=>{el.style.opacity='0'},2000);
}

/* РџРµСЂРµС…РІР°С‚С‹РІР°РµРј save() вЂ” РїРѕСЃР»Рµ localStorage РїРёС€РµРј Рё РІ С„Р°Р№Р», РµСЃР»Рё РїСЂРёРІСЏР·Р°РЅ */
const __origSave = save;
save = function(){
  __origSave.apply(this, arguments);
  scheduleAutosave();
};

/* ============ РџР РРњР•РќРРўР¬ Рљ РљРђРўРђР›РћР“РЈ (РіРµРЅРµСЂРёСЂСѓРµС‚ patch РґР»СЏ catalog.html) ============ */
async function applyToCatalog(){
  if(!FS_SUPPORTED){
    alert('РќСѓР¶РµРЅ Chrome/Edge СЃ File System Access API.');return;
  }
  if(!confirm('Р—Р°РїРёСЃР°С‚СЊ С‚РµРєСѓС‰РёРµ РґРІРµСЂРё РІ catalog.html?\n\nР‘СѓРґСѓС‚ Р·Р°РјРµРЅРµРЅС‹ РјР°СЃСЃРёРІС‹ DOORS Рё PHOTOS.\nРџРµСЂРµРґ СЌС‚РёРј СЃРґРµР»Р°Р№ СЂРµР·РµСЂРІРЅСѓСЋ РєРѕРїРёСЋ.'))return;
  try{
    const handle = await window.showOpenFilePicker({
      types:[{description:'catalog.html',accept:{'text/html':['.html']}}]
    });
    const fh = handle[0];
    const file = await fh.getFile();
    let html = await file.text();

    // РЎР±РѕСЂРєР° РЅРѕРІРѕРіРѕ DOORS
    const doors = DATA.map(r=>{
      const c=compute(r);
      const finishMap={graphite:'graphite',venge:'venge',oak:'oak',white:'white',walnut:'walnut',concrete:'concrete',cream:'cream',black:'black'};
      const glassRev={'Р‘РµР· РІСЃС‚Р°РІРєРё':'none','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№':'rect','РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°':'arch','Р—РµСЂРєР°Р»Рѕ':'mirror','РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№':'forge','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶':'vitrage','Р—РµСЂРєР°Р»СЊРЅР°СЏ С‚РѕРЅРёСЂРѕРІРєР°':'mirror','РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№':'forge'};
      const handleRev={'MSM':'short','Apex':'long','Armadillo':'long','Guardian Premium':'long','Р‘СѓРіРµР»СЊРЅР°СЏ':'long'};
      const tags=[];
      if(c.price>=65000) tags.push('РЎРєСЂС‹С‚С‹Рµ РїРµС‚Р»Рё');
      if(r.glass==='Р—РµСЂРєР°Р»Рѕ') tags.push('Р—РµСЂРєР°Р»Рѕ');
      if(r.glass==='РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶') tags.push('Р’РёС‚СЂР°Р¶');
      if((r.extras||[]).includes('РўРµСЂРјРѕСЂР°Р·СЂС‹РІ')) tags.push('РўРµСЂРјРѕСЂР°Р·СЂС‹РІ');
      if(!tags.length) tags.push('Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ',r.lock||'Guardian');
      const flagJs = r.flag ? `'${r.flag}'` : 'null';
      const tagsJs = tags.slice(0,2).map(t=>`'${t.replace(/'/g,"\\'")}'`).join(',');
      return `  {id:${r.id}, name:'${r.name.replace(/'/g,"\\'")}', series:'${c.series==='Р­РєРѕРЅРѕРј'?'Р­РєРѕРЅРѕРј':c.series}', purpose:'${r.purpose}', price:${c.price}, finish:'${finishMap[r.finish_color]||'graphite'}', glass:'${glassRev[r.glass]||'none'}', handle:'${handleRev[r.handle]||'long'}', flag:${flagJs}, popular:${r.popular||0}, tags:[${tagsJs}]}`;
    });
    const doorsBlock = 'const DOORS=[\n' + doors.join(',\n') + '\n];';

    const photoRows = DATA.map(r=>{
      const arr = (r.photos||'').split(';').map(s=>s.trim()).filter(Boolean);
      const arrJs = arr.map(u=>`'${u.replace(/'/g,"\\'")}'`).join(',');
      return `  ${r.id}:[${arrJs}]`;
    });
    const photosBlock = 'const PHOTOS={\n' + photoRows.join(',\n') + '\n};';

    html = html.replace(/const DOORS=\[[\s\S]*?\];/, doorsBlock);
    html = html.replace(/const PHOTOS=\{[\s\S]*?\};/, photosBlock);

    const w = await fh.createWritable();
    await w.write(html);
    await w.close();
    alert('Р“РѕС‚РѕРІРѕ. Р—Р°РїРёСЃР°РЅРѕ '+DATA.length+' РґРІРµСЂРµР№ РІ '+fh.name);
  }catch(e){
    if(e && e.name!=='AbortError') alert('РћС€РёР±РєР°: '+e.message);
  }
}

/* ============ INIT ============ */
// Р•СЃР»Рё СЂРµРґР°РєС‚РѕСЂ РїСѓСЃС‚РѕР№ (РЅРё РѕРґРЅРѕР№ Р·Р°РїРѕР»РЅРµРЅРЅРѕР№ РґРІРµСЂРё) вЂ” РїРѕРґРіСЂСѓР¶Р°РµРј 54 ARMORA Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё
if(!DATA || DATA.length===0 || (DATA.length===1 && !DATA[0].name)){
  DATA = ARMORA_DATA.map(r=>Object.assign(emptyRow(),r));
  save();
}
renderAll();

