
/* ====== Р”РђРќРќР«Р• РљРђРўРђР›РћР“Рђ ====== */
/* Р§С‚РѕР±С‹ Р·Р°РјРµРЅРёС‚СЊ РєР°СЂС‚РёРЅРєРё РЅР° СЂРµР°Р»СЊРЅС‹Рµ С„РѕС‚Рѕ вЂ” РїРѕРјРµРЅСЏР№ "img":svgRender(...) РЅР° "img":'<img src="...">'  */

const FINISHES={
  'graphite':{label:'Р“СЂР°С„РёС‚',body:'#2a2724',accent:'#3d3a30'},
  'venge':{label:'Р’РµРЅРіРµ',body:'#3a2a1e',accent:'#52382a'},
  'oak':{label:'Р”СѓР± Р·РѕР»РѕС‚РѕР№',body:'#a47a2c',accent:'#c89c4d'},
  'white':{label:'Р‘РµР»С‹Р№',body:'#f4ede0',accent:'#d9cfb4'},
  'walnut':{label:'РћСЂРµС…',body:'#5a3e2a',accent:'#7a5a3e'},
  'concrete':{label:'Р‘РµС‚РѕРЅ',body:'#7a7468',accent:'#9a9384'},
  'cream':{label:'РЎР»РѕРЅРѕРІР°СЏ РєРѕСЃС‚СЊ',body:'#e8dfc8',accent:'#d9cfb4'},
  'black':{label:'Р§С‘СЂРЅС‹Р№ РјР°С‚РѕРІС‹Р№',body:'#15140f',accent:'#3d3a30'}
};

function svgDoor(o,view){
  const f=FINISHES[o.finish]||FINISHES.graphite;
  view=view||'front';
  const handle=o.handle==='long'
    ? `<rect x="74" y="55" width="3" height="22" rx="1" fill="#c89c4d"/>`
    : `<rect x="74" y="62" width="3" height="8" rx="1" fill="#c89c4d"/><circle cx="75.5" cy="66" r="2.2" fill="#c89c4d"/>`;
  let inset='';
  if(o.glass==='rect') inset=`<rect x="14" y="20" width="42" height="46" rx="2" fill="#cfd8d9" stroke="${f.accent}" stroke-width=".8" opacity=".55"/><line x1="35" y1="20" x2="35" y2="66" stroke="${f.accent}" stroke-width=".4" opacity=".4"/>`;
  else if(o.glass==='arch') inset=`<path d="M 14 32 Q 14 20 35 20 Q 56 20 56 32 L 56 66 L 14 66 Z" fill="#cfd8d9" stroke="${f.accent}" stroke-width=".8" opacity=".55"/>`;
  else if(o.glass==='mirror') inset=`<rect x="14" y="20" width="42" height="56" rx="2" fill="url(#mir-${o.id}-${view})" stroke="${f.accent}" stroke-width=".8"/>`;
  else if(o.glass==='forge') inset=`<rect x="14" y="20" width="42" height="46" rx="2" fill="#cfd8d9" opacity=".5"/><path d="M20 30 Q35 22 50 30 M20 45 Q35 37 50 45 M20 58 Q35 50 50 58" stroke="${f.accent}" stroke-width="1" fill="none"/>`;
  else if(o.glass==='vitrage') inset=`<rect x="14" y="20" width="42" height="46" rx="2" fill="#cfd8d9" opacity=".4"/><path d="M14 43 L56 43 M35 20 L35 66" stroke="${f.accent}" stroke-width=".6"/><circle cx="24" cy="32" r="4" fill="${f.accent}" opacity=".4"/><circle cx="46" cy="54" r="4" fill="${f.accent}" opacity=".4"/>`;
  else if(o.glass==='panel') inset=`<rect x="14" y="20" width="42" height="22" rx="2" fill="${f.accent}" opacity=".4"/><rect x="14" y="46" width="42" height="22" rx="2" fill="${f.accent}" opacity=".4"/>`;

  // Different views вЂ” same door from different angles/details
  let extras='',label='';
  if(view==='inside'){
    // Inside view вЂ” Р±РµР· РІСЃС‚Р°РІРѕРє, СЃ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ С„Р°РєС‚СѓСЂРѕР№ Рё Р·Р°РјРєРѕРј
    inset='';
    extras=`<rect x="14" y="20" width="72" height="100" rx="1" fill="none" stroke="${f.accent}" stroke-width=".4" opacity=".4"/>
      <rect x="20" y="26" width="60" height="42" rx="1" fill="none" stroke="${f.accent}" stroke-width=".4" opacity=".4"/>
      <rect x="20" y="74" width="60" height="42" rx="1" fill="none" stroke="${f.accent}" stroke-width=".4" opacity=".4"/>
      <rect x="22" y="58" width="14" height="4" rx="1" fill="${f.accent}" opacity=".7"/>`;
    label=`<text x="50" y="128" text-anchor="middle" font-family="Manrope" font-size="4.5" fill="#7a7466" letter-spacing=".3">Р’РќРЈРўР Р</text>`;
  } else if(view==='detail'){
    // Detail / closeup of lock & handle area
    extras=`<rect x="0" y="0" width="100" height="130" fill="${f.body}"/>
      <rect x="20" y="40" width="60" height="50" rx="2" fill="${f.accent}" opacity=".22"/>
      <rect x="55" y="55" width="6" height="22" rx="1" fill="#c89c4d"/>
      <circle cx="58" cy="44" r="3" fill="#0a0a08"/>
      <rect x="40" y="62" width="14" height="6" rx="1" fill="#0a0a08" opacity=".6"/>
      <rect x="40" y="70" width="14" height="2" rx="1" fill="#c89c4d" opacity=".7"/>
      <text x="50" y="120" text-anchor="middle" font-family="Manrope" font-size="4.5" fill="#fbf7ec" opacity=".7" letter-spacing=".3">Р¤РЈР РќРРўРЈР Рђ</text>`;
    return `<svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">${extras}</svg>`;
  }

  return `<svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="mir-${o.id}-${view}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8e0e2"/><stop offset="50%" stop-color="#aab2b5"/><stop offset="100%" stop-color="#d8e0e2"/>
      </linearGradient>
      <linearGradient id="bg-${o.id}-${view}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${f.body}"/><stop offset="100%" stop-color="${f.accent}"/>
      </linearGradient>
    </defs>
    <rect x="6" y="10" width="88" height="115" rx="2" fill="#1a1814"/>
    <rect x="8" y="12" width="84" height="111" rx="1.5" fill="url(#bg-${o.id}-${view})"/>
    <rect x="11" y="15" width="78" height="105" rx="1" fill="none" stroke="${f.accent}" stroke-width=".5" opacity=".5"/>
    ${inset}
    ${extras}
    ${view==='front'?handle:''}
    ${view==='front'?`<circle cx="75.5" cy="40" r="1.5" fill="#0a0a08"/>`:''}
    ${label}
  </svg>`;
}

const DOORS=[
  {id:1, name:'РџСЂР°РіР°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:80280, finish:'graphite', glass:'rect', handle:'long', flag:null, popular:65, tags:['РЎС‚Р°Р»СЊ 1.8 РјРј','РџР°РЅРµР»СЊ: РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕР»РёРјРµСЂРЅРѕРµ РїРѕРєСЂС‹С‚РёРµ','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:2, name:'Р’РµРЅР°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:81900, finish:'cream', glass:'rect', handle:'long', flag:'РҐРёС‚', popular:121, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕР»РёРјРµСЂРЅРѕРµ РїРѕРєСЂС‹С‚РёРµ','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:3, name:'Р РёРј', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:81400, finish:'graphite', glass:'none', handle:'short', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:79, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:4, name:'РњРёР»Р°РЅ', series:'РљРѕРјС„РѕСЂС‚', purpose:'РґРѕРј', price:42400, finish:'walnut', glass:'rect', handle:'short', flag:null, popular:116, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:5, name:'РўСѓСЂРёРЅ', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:81400, finish:'graphite', glass:'none', handle:'short', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:96, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:6, name:'Р’РµСЂРѕРЅР°', series:'Р­Р»РёС‚', purpose:'РѕС„РёСЃ', price:81400, finish:'walnut', glass:'none', handle:'short', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:65, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:7, name:'РЎРёРµРЅР°', series:'РљРѕРјС„РѕСЂС‚', purpose:'РѕС„РёСЃ', price:43400, finish:'venge', glass:'mirror', handle:'long', flag:'РќРѕРІРёРЅРєР°', popular:113, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: Р›Р°РјРёРЅР°С‚','Р—РµСЂРєР°Р»Рѕ','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:8, name:'РџРёР·Р°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:89900, finish:'venge', glass:'rect', handle:'long', flag:'РҐРёС‚', popular:124, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:9, name:'РџР°СЂРјР°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:106400, finish:'venge', glass:'vitrage', handle:'short', flag:'РҐРёС‚', popular:22, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: Cisa']},
  {id:10, name:'Р›СѓРєРєР°', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:106400, finish:'graphite', glass:'vitrage', handle:'short', flag:'Р­Р»РёС‚', popular:46, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: Cisa']},
  {id:11, name:'Р›РёРѕРЅ', series:'РљРѕРјС„РѕСЂС‚', purpose:'РѕС„РёСЃ', price:39900, finish:'walnut', glass:'none', handle:'long', flag:'Р­Р»РёС‚', popular:71, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','Р—Р°РјРѕРє: 2Г— Guardian','Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:12, name:'РќРёС†С†Р°', series:'РџСЂРµРјРёСѓРј', purpose:'РґРѕРј', price:52900, finish:'venge', glass:'none', handle:'short', flag:'Р­Р»РёС‚', popular:118, tags:['РЎС‚Р°Р»СЊ 1.8 РјРј','РџР°РЅРµР»СЊ: РњР”Р¤','Р—Р°РјРѕРє: 2Г— Kale','Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:13, name:'РљР°РЅРЅС‹', series:'Р­Р»РёС‚', purpose:'РѕС„РёСЃ', price:81400, finish:'venge', glass:'none', handle:'short', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:62, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:14, name:'Р‘РѕСЂРґРѕ', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:84400, finish:'white', glass:'none', handle:'long', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:112, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:15, name:'Р РµР№РјСЃ', series:'РџСЂРµРјРёСѓРј', purpose:'РґРѕРј', price:45400, finish:'white', glass:'rect', handle:'long', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:31, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:16, name:'РўСѓР»СѓР·Р°', series:'РџСЂРµРјРёСѓРј', purpose:'РєРІР°СЂС‚РёСЂР°', price:61400, finish:'walnut', glass:'rect', handle:'long', flag:'Р­Р»РёС‚', popular:54, tags:['РЎС‚Р°Р»СЊ 1.8 РјРј','РџР°РЅРµР»СЊ: РњР”Р¤','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: 2Г— Kale']},
  {id:17, name:'РђРІРёРЅСЊРѕРЅ', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:81400, finish:'oak', glass:'none', handle:'short', flag:'Р­Р»РёС‚', popular:36, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:18, name:'Р’РµСЂСЃР°Р»СЊ', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:109400, finish:'white', glass:'vitrage', handle:'long', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:82, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: Cisa']},
  {id:19, name:'РЁР°РјРѕРЅРё', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:86900, finish:'graphite', glass:'rect', handle:'short', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:137, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:20, name:'РњР°РґСЂРёРґ', series:'Р­Р»РёС‚', purpose:'РѕС„РёСЃ', price:88900, finish:'cream', glass:'arch', handle:'short', flag:null, popular:50, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°','Р—Р°РјРѕРє: Cisa']},
  {id:21, name:'РўРѕР»РµРґРѕ', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:109400, finish:'cream', glass:'vitrage', handle:'long', flag:'РҐРёС‚', popular:92, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: Cisa']},
  {id:22, name:'Р“СЂР°РЅР°РґР°', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:86900, finish:'white', glass:'rect', handle:'short', flag:null, popular:119, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:23, name:'РЎРµРІРёР»СЊСЏ', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:93400, finish:'black', glass:'forge', handle:'short', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:88, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:24, name:'РњР°Р»Р°РіР°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:86900, finish:'graphite', glass:'mirror', handle:'short', flag:'Р­Р»РёС‚', popular:8, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—РµСЂРєР°Р»Рѕ','Р—Р°РјРѕРє: Cisa']},
  {id:25, name:'Р’Р°Р»РµРЅСЃРёСЏ', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:88900, finish:'white', glass:'arch', handle:'short', flag:null, popular:60, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°','Р—Р°РјРѕРє: Cisa']},
  {id:26, name:'Р‘Р°СЂСЃРµР»РѕРЅР°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:84400, finish:'graphite', glass:'none', handle:'long', flag:'РҐРёС‚', popular:80, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:27, name:'Р–РёСЂРѕРЅР°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:81400, finish:'black', glass:'none', handle:'short', flag:'Р­Р»РёС‚', popular:42, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:28, name:'РџРѕСЂС‚Сѓ', series:'Р­Р»РёС‚', purpose:'РѕС„РёСЃ', price:86900, finish:'black', glass:'mirror', handle:'short', flag:'РќРѕРІРёРЅРєР°', popular:42, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—РµСЂРєР°Р»Рѕ','Р—Р°РјРѕРє: Cisa']},
  {id:29, name:'Р›РёСЃСЃР°Р±РѕРЅ', series:'РљРѕРјС„РѕСЂС‚', purpose:'С‚Р°РјР±СѓСЂ', price:39900, finish:'venge', glass:'none', handle:'long', flag:'Р­Р»РёС‚', popular:91, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','Р—Р°РјРѕРє: 2Г— Guardian','Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:30, name:'Р­РІРѕСЂР°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:84400, finish:'oak', glass:'none', handle:'long', flag:'Р­Р»РёС‚', popular:75, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:31, name:'РЎРёРЅС‚СЂР°', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:86900, finish:'concrete', glass:'rect', handle:'short', flag:'Р­Р»РёС‚', popular:123, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:32, name:'Р‘СЂСЋРіРіРµ', series:'РљРѕРјС„РѕСЂС‚', purpose:'РєРІР°СЂС‚РёСЂР°', price:42400, finish:'walnut', glass:'mirror', handle:'short', flag:'РќРѕРІРёРЅРєР°', popular:12, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','Р—РµСЂРєР°Р»Рѕ','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:33, name:'Р“РµРЅС‚', series:'Р­Р»РёС‚', purpose:'РѕС„РёСЃ', price:88900, finish:'venge', glass:'arch', handle:'short', flag:'Р­Р»РёС‚', popular:21, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°','Р—Р°РјРѕРє: Cisa']},
  {id:34, name:'РђРЅС‚РІРµСЂРїРµРЅ', series:'Р­Р»РёС‚', purpose:'РєРІР°СЂС‚РёСЂР°', price:109400, finish:'walnut', glass:'vitrage', handle:'long', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:135, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: Cisa']},
  {id:35, name:'РђРјСЃС‚РµСЂРґР°Рј', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:86900, finish:'graphite', glass:'rect', handle:'short', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:120, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:36, name:'РЈС‚СЂРµС…С‚', series:'РџСЂРµРјРёСѓРј', purpose:'С‚Р°РјР±СѓСЂ', price:59900, finish:'concrete', glass:'vitrage', handle:'short', flag:'Р РµРєРѕРјРµРЅРґСѓРµРј', popular:107, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: Р›Р°РјРёРЅР°С‚','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:37, name:'Р”РµР»СЊС„С‚', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:96400, finish:'white', glass:'forge', handle:'long', flag:'РќРѕРІРёРЅРєР°', popular:37, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:38, name:'Р‘РµСЂР»РёРЅ', series:'РљРѕРјС„РѕСЂС‚', purpose:'РѕС„РёСЃ', price:36900, finish:'white', glass:'none', handle:'short', flag:'РҐРёС‚', popular:36, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','Р—Р°РјРѕРє: 2Г— Guardian','Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:39, name:'РњСЋРЅС…РµРЅ', series:'РџСЂРµРјРёСѓРј', purpose:'С‚Р°РјР±СѓСЂ', price:62900, finish:'cream', glass:'vitrage', handle:'long', flag:null, popular:19, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: Р›Р°РјРёРЅР°С‚','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:40, name:'Р‘РѕРЅРЅ', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:86900, finish:'oak', glass:'mirror', handle:'short', flag:'Р­Р»РёС‚', popular:44, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—РµСЂРєР°Р»Рѕ','Р—Р°РјРѕРє: Cisa']},
  {id:41, name:'РљС‘Р»СЊРЅ', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:67900, finish:'black', glass:'forge', handle:'long', flag:null, popular:46, tags:['РЎС‚Р°Р»СЊ 1.8 РјРј','РџР°РЅРµР»СЊ: РњР”Р¤','РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№','Р—Р°РјРѕРє: 2Г— Kale']},
  {id:42, name:'Р”СЂРµР·РґРµРЅ', series:'Р­Р»РёС‚', purpose:'РєРІР°СЂС‚РёСЂР°', price:67900, finish:'black', glass:'forge', handle:'long', flag:'Р­Р»РёС‚', popular:63, tags:['РЎС‚Р°Р»СЊ 1.8 РјРј','РџР°РЅРµР»СЊ: РњР”Р¤','РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№','Р—Р°РјРѕРє: 2Г— Kale']},
  {id:43, name:'Р›РµР№РїС†РёРі', series:'Р­Р»РёС‚', purpose:'РѕС„РёСЃ', price:84400, finish:'graphite', glass:'none', handle:'long', flag:'РҐРёС‚', popular:39, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:44, name:'Р¦СЋСЂРёС…', series:'Р­Р»РёС‚', purpose:'РєРІР°СЂС‚РёСЂР°', price:81400, finish:'concrete', glass:'none', handle:'short', flag:'РҐРёС‚', popular:104, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:45, name:'Р‘РµСЂРЅ', series:'РџСЂРµРјРёСѓРј', purpose:'С‚Р°РјР±СѓСЂ', price:61900, finish:'white', glass:'vitrage', handle:'short', flag:'РќРѕРІРёРЅРєР°', popular:101, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:46, name:'Р‘Р°Р·РµР»СЊ', series:'РљРѕРјС„РѕСЂС‚', purpose:'РґРѕРј', price:42400, finish:'graphite', glass:'mirror', handle:'short', flag:'РҐРёС‚', popular:56, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','Р—РµСЂРєР°Р»Рѕ','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:47, name:'Р›СЋС†РµСЂРЅ', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:86900, finish:'walnut', glass:'rect', handle:'short', flag:'Р­Р»РёС‚', popular:92, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:48, name:'Р–РµРЅРµРІР°', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:86900, finish:'oak', glass:'rect', handle:'short', flag:null, popular:15, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№','Р—Р°РјРѕРє: Cisa']},
  {id:49, name:'Р—Р°Р»СЊС†Р±СѓСЂРі', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:81400, finish:'cream', glass:'none', handle:'short', flag:'Р­Р»РёС‚', popular:22, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:50, name:'Р“СЂР°С†', series:'РџСЂРµРјРёСѓРј', purpose:'РґРѕРј', price:45400, finish:'white', glass:'mirror', handle:'long', flag:null, popular:9, tags:['РЎС‚Р°Р»СЊ 1.5 РјРј','РџР°РЅРµР»СЊ: РџР’РҐ','Р—РµСЂРєР°Р»Рѕ','Р—Р°РјРѕРє: 2Г— Guardian']},
  {id:51, name:'Р›РёРЅС†', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:89900, finish:'oak', glass:'mirror', handle:'long', flag:'РҐРёС‚', popular:78, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—РµСЂРєР°Р»Рѕ','Р—Р°РјРѕРє: Cisa']},
  {id:52, name:'Р‘СѓРґР°РїРµС€С‚', series:'Р­Р»РёС‚', purpose:'С‚Р°РјР±СѓСЂ', price:84400, finish:'oak', glass:'none', handle:'long', flag:'РҐРёС‚', popular:69, tags:['РЎС‚Р°Р»СЊ 2.0 РјРј','РџР°РЅРµР»СЊ: Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°','Р—Р°РјРѕРє: Cisa','РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ']},
  {id:53, name:'РЎРµРіРµРґ', series:'РџСЂРµРјРёСѓРј', purpose:'РґРѕРј', price:60400, finish:'black', glass:'arch', handle:'short', flag:'РќРѕРІРёРЅРєР°', popular:116, tags:['РЎС‚Р°Р»СЊ 1.8 РјРј','РџР°РЅРµР»СЊ: РњР”Р¤','РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°','Р—Р°РјРѕРє: 2Г— Kale']},
  {id:54, name:'РџРµС‡', series:'Р­Р»РёС‚', purpose:'РґРѕРј', price:77900, finish:'white', glass:'vitrage', handle:'short', flag:'РќРѕРІРёРЅРєР°', popular:46, tags:['РЎС‚Р°Р»СЊ 1.8 РјРј','РџР°РЅРµР»СЊ: РњР”Р¤','РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶','Р—Р°РјРѕРє: 2Г— Kale']}
];


/* === Р Р•РђР›Р¬РќР«Р• Р¤РћРўРћ (radikal.cloud вЂ” id 1-20, 2-3 С„РѕС‚Рѕ РЅР° РґРІРµСЂСЊ) === */
const PHOTOS={
  1:['https://radika1.link/2026/04/26/019d9238-c415-74b8-877c-892e7f891b3e13cfbe8765c31f61.png'],
  2:['https://s1.radikal.cloud/2026/04/26/019d9233-69a7-7dbb-b00b-98dbed7781bb52d6e4e1e19dc81e.png'],
  3:['https://radika1.link/2026/04/26/019d9243-43b0-7730-9061-ea70e88bd633a87ee1c4e348cbcb.png'],
  4:['https://s2.radikal.cloud/2026/04/26/cnLMAPnPpP0Cw3UIFIWIykTDsIPLV-OWZF-wwyouua04K5P-zgiQvAnPVykAe_a4wVdNPqiwSjchAztf3pK6kUTbe73e06f35f22357f.jpg'],
  5:['https://s3.radikal.cloud/2026/04/26/d3TjPtPCv0iNagFkeJch9qRqCThcijkpj0zESMuCnsUQcv29kxWq-HUBnXTbSyRnG5-Gqdra7v7SEE7jlPn5fSqbfd1354007c9f8d39.jpg'],
  6:['https://s1.radikal.cloud/2026/04/26/e4194e23-ef1c-4644-9daa-8aeaab3371daef0b5a6e32831cf1.png'],
  7:['https://radika1.link/2026/04/26/IMG_5765-11776fdb932d4a86f.jpeg'],
  8:['https://s2.radikal.cloud/2026/04/26/IMG_5784e2dde65540a9ab9f.jpg'],
  9:['https://radika1.link/2026/04/26/IMG_58549f4747fc41d13fe4.jpg'],
  10:['https://s1.radikal.cloud/2026/04/26/IMG_5930f66fe87b7582a438.jpg'],
  11:['https://radika1.link/2026/04/26/IMG_593572168dbdd7d17466.png'],
  12:['https://s3.radikal.cloud/2026/04/26/IMG_5957e7a2be7857fe6dab.jpg'],
  13:['https://s2.radikal.cloud/2026/04/26/IMG_6485e8af4064820ab5b5.jpg'],
  14:['https://s1.radikal.cloud/2026/04/26/IMG_64869b2e71c209d1e8c7.jpg'],
  15:['https://s3.radikal.cloud/2026/04/26/IMG_64872e2069876dd8f68f.jpg'],
  16:['https://radika1.link/2026/04/26/IMG_6488b3829e05382c937e.jpg'],
  17:['https://radika1.link/2026/04/26/IMG_6489989b87134fd1a890.jpg'],
  18:['https://s3.radikal.cloud/2026/04/26/IMG_64906166dbc0d42561a7.jpg'],
  19:['https://s2.radikal.cloud/2026/04/26/IMG_64914f6f2d6bbcb41c0d.jpg'],
  20:['https://s3.radikal.cloud/2026/04/26/IMG_6492-2f7a4200c2944aa07.jpg'],
  21:['https://radika1.link/2026/04/26/IMG_7278b2ad929d3bc45764.jpg'],
  22:['https://s2.radikal.cloud/2026/04/26/IMG_730266900c8b26b1f897.jpg'],
  23:['https://radika1.link/2026/04/26/IMG_7305c8c6c930883d9a75.png'],
  24:['https://radika1.link/2026/04/26/IMG_7308-25b6330ff495f2f10.jpg'],
  25:['https://s3.radikal.cloud/2026/04/26/IMG_7306ea1caedcb7b96ba9.png'],
  26:['https://radika1.link/2026/04/26/IMG_73372df11a1432a200b5.jpg'],
  27:['https://s1.radikal.cloud/2026/04/26/IMG_7339e1cb5f27b1d0f130.jpeg'],
  28:['https://s3.radikal.cloud/2026/04/26/IMG_7344955372066ae84786.jpeg'],
  29:['https://s2.radikal.cloud/2026/04/26/IMG_73651c8476dffc656e41.png'],
  30:['https://radika1.link/2026/04/26/IMG_73890ae148d77a42daad.png'],
  31:['https://s2.radikal.cloud/2026/04/26/IMG_7391e44f652f5beb3611.png'],
  32:['https://radika1.link/2026/04/26/IMG_7398140e371cfb8bca4d.png'],
  33:['https://s3.radikal.cloud/2026/04/26/IMG_7400fe2b69253c4d090c.png'],
  34:['https://radika1.link/2026/04/26/IMG_7402aff4a5881899d4cc.png'],
  35:['https://s3.radikal.cloud/2026/04/26/IMG_74983a704f2e3ae50a81.png'],
  36:['https://s1.radikal.cloud/2026/04/26/IMG_7530c890921b1d9f62b8.jpg'],
  37:['https://radika1.link/2026/04/26/j8cDWprdNNz3HnguWMuvrEUIo1_vzcqL-sp13OueEPGV-ZwZvMbvB5XxsmjmMeS5LK9lwbGkClEM7VbnBHMkKC4Pe2411a487bcd3be4.jpg'],
  38:['https://s2.radikal.cloud/2026/04/26/photo_2026-03-06_11-16-130f7eb3e097b65fe7.jpg'],
  39:['https://s1.radikal.cloud/2026/04/26/lfs3J8IqzwF7BJ8gyxqMAULMOkFdn06UygKHffg1Q4z7RBN0j_LwvjvtpEIl2AqMmc5H5f4MyQwRbTo6r44n_v_C81206747391915ed.jpg'],
  40:['https://radika1.link/2026/04/26/photo_2026-03-06_11-16-1740632e4ff0d55f28.jpg'],
  41:['https://s3.radikal.cloud/2026/04/26/photo_2026-03-06_11-20-25000f88a017f70d60.jpg'],
  42:['https://s2.radikal.cloud/2026/04/26/photo_2026-03-24_10-45-1309e0bd2f24b12171.jpg'],
  43:['https://s3.radikal.cloud/2026/04/26/photo_2026-03-24_10-45-31a0bc1c07c45600c2.jpg'],
  44:['https://s2.radikal.cloud/2026/04/26/photo_2026-03-24_10-45-3534be24a338859395.jpg'],
  45:['https://radika1.link/2026/04/26/photo_2026-03-24_10-45-387ad216540cce0e62.jpg'],
  46:['https://s3.radikal.cloud/2026/04/26/photo_2026-04-13_21-18-5468e90c0567ea697c.jpg'],
  47:['https://radika1.link/2026/04/26/photo_2026-04-13_21-19-040e923d2a430b0f8f.jpg'],
  48:['https://s1.radikal.cloud/2026/04/26/photo_2026-04-13_21-19-16d85c2c40554d02df.jpg'],
  49:['https://radika1.link/2026/04/26/photo_2026-04-13_21-19-212c3a9205acb91dbf.jpg'],
  50:['https://radika1.link/2026/04/26/photo_2026-04-13_21-19-39c4471170c1c0c1c1.jpg'],
  51:['https://s3.radikal.cloud/2026/04/26/photo_2026-04-13_21-19-59a59b652786607797.jpg'],
  52:['https://radika1.link/2026/04/26/photo_2026-04-13_21-20-147a099755cc4eca15.jpg'],
  53:['https://s2.radikal.cloud/2026/04/26/photo_2026-04-13_21-20-237e0994297dba9601.jpg'],
  54:['https://s3.radikal.cloud/2026/04/26/snapedit_17695184894915cfc0e77067fcc70.jpeg']
};



DOORS.forEach(d=>{
  if(PHOTOS[d.id]){
    d.images=PHOTOS[d.id];
    return;
  }
  // РџРѕ СѓРјРѕР»С‡Р°РЅРёСЋ вЂ” 3 SVG-РІРёРґР° (С„Р°СЃР°Рґ / РёРЅС‚РµСЂСЊРµСЂ / РґРµС‚Р°Р»Рё).
  // Р§С‚РѕР±С‹ Р·Р°РјРµРЅРёС‚СЊ РЅР° СЂРµР°Р»СЊРЅС‹Рµ С„РѕС‚Рѕ вЂ” РїСЂРёСЃРІРѕР№ d.images = ['url1.jpg','url2.jpg', ...]
  // РџРѕРґРґРµСЂР¶РёРІР°СЋС‚СЃСЏ Рё SVG-СЃС‚СЂРѕРєРё, Рё URL РєР°СЂС‚РёРЅРѕРє.
  if(!d.images){
    d.images=[
      svgDoor(d,'front'),
      svgDoor(d,'inside'),
      svgDoor(d,'detail')
    ];
  }
});

function slideHtml(src, alt, isFirst){
  const safeAlt = (alt||'Р’С…РѕРґРЅР°СЏ РґРІРµСЂСЊ ARMORA').replace(/"/g,'&quot;');
  const cls = 'slide' + (isFirst?' active':'');
  // SVG-СЃС‚СЂРѕРєР° РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃ '<svg', URL вЂ” СЃ http/data/РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅС‹Р№ РїСѓС‚СЊ
  if(typeof src==='string' && src.trim().startsWith('<svg')) return `<div class="${cls}" role="img" aria-label="${safeAlt}">${src}</div>`;
  // РїРµСЂРІР°СЏ РєР°СЂС‚РёРЅРєР° вЂ” РїСЂРёРѕСЂРёС‚РµС‚РЅР°СЏ Рё Р±РµР· lazy (РґР»СЏ LCP), РѕСЃС‚Р°Р»СЊРЅС‹Рµ вЂ” lazy
  const lazyAttrs = isFirst
    ? `decoding="async" fetchpriority="high"`
    : `loading="lazy" decoding="async" fetchpriority="low"`;
  return `<div class="${cls}"><img src="${src}" alt="${safeAlt}" width="600" height="800" ${lazyAttrs}></div>`;
}

/* ====== Р¤РР›Р¬РўР Р« ====== */

const FILTERS={
  purpose:new Set(),
  series:new Set(),
  finish:new Set(),
  glass:new Set(), // РєР»СЋС‡Рё РёР· GLASS_OPTS: none/mirror/rect/arch/forge/vitrage
  search:'',
  priceMax:200000
};

const PURPOSES=['РєРІР°СЂС‚РёСЂР°','РґРѕРј','С‚Р°РјР±СѓСЂ','РѕС„РёСЃ'];
const SERIES_LIST=['Р­РєРѕРЅРѕРј','РЎС‚Р°РЅРґР°СЂС‚','РљРѕРјС„РѕСЂС‚','РџСЂРµРјРёСѓРј','Р­Р»РёС‚'];

/* Р’РЅРµС€РЅСЏСЏ РѕС‚РґРµР»РєР° вЂ” Р±РµСЂС‘Рј СЃРїРёСЃРѕРє РёР· С€Р°РіР° В«extВ» РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР° (CALC_STEPS).
   РџСЂРёРІСЏР·РєР° Рє РјРѕРґРµР»СЏРј вЂ” РїРѕ С‚РµРіР°Рј РґРІРµСЂРё (d.tags) РёР»Рё РїРѕ СЃРµСЂРёРё РґР»СЏ Р­РєРѕРЅРѕРјР°. */
const FINISH_OPTS=[
  {k:'powder',  l:'РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕРєСЂС‹С‚РёРµ', tags:['РїРѕСЂРѕС€РѕРє','РїРѕСЂРѕС€РєРѕРІРѕРµ']},
  {k:'vinyl',   l:'Р’РёРЅРёР»РёСЃРєРѕР¶Р°',         tags:['РІРёРЅРёР»РёСЃРєРѕР¶Р°','РІРёРЅРёР»']},
  {k:'laminate',l:'Р›Р°РјРёРЅР°С‚',             tags:['Р»Р°РјРёРЅР°С‚']},
  {k:'pvc',     l:'РџР’РҐ',                 tags:['РїРІС…']},
  {k:'mdf',     l:'РњР”Р¤',                 tags:['РјРґС„']},
  {k:'plywood', l:'Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°', tags:['С„Р°РЅРµСЂР°']}
];
/* РЎРµСЂРёСЏ в†’ РѕС‚РґРµР»РєР° РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ (РµСЃР»Рё РІ С‚РµРіР°С… РЅРёС‡РµРіРѕ РЅРµ РЅР°С€Р»Рё) */
const SERIES_DEFAULT_FINISH={
  'Р­РєРѕРЅРѕРј':['vinyl'],
  'РЎС‚Р°РЅРґР°СЂС‚':['laminate'],
  'РљРѕРјС„РѕСЂС‚':['pvc'],
  'РџСЂРµРјРёСѓРј':['mdf'],
  'Р­Р»РёС‚':['plywood','mdf']
};
function doorFinishKeys(d){
  const hay=((d.tags||[]).join(' ')+' '+(d.name||'')).toLowerCase();
  const found=FINISH_OPTS.filter(o=>o.tags.some(t=>hay.includes(t))).map(o=>o.k);
  return found.length?found:(SERIES_DEFAULT_FINISH[d.series]||[]);
}

/* РЎС‚РµРєР»Рѕ / РІСЃС‚Р°РІРєР° вЂ” РІР°СЂРёР°РЅС‚С‹ РёР· С€Р°РіР° В«glassВ» РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР° */
const GLASS_OPTS=[
  {k:'none',    l:'Р‘РµР· РІСЃС‚Р°РІРєРё',  match:['none']},
  {k:'mirror',  l:'Р—РµСЂРєР°Р»Рѕ',      match:['mirror']},
  {k:'rect',    l:'РЎС‚РµРєР»РѕРїР°РєРµС‚',  match:['rect','panel']},
  {k:'arch',    l:'РђСЂРєР°',         match:['arch']},
  {k:'forge',   l:'РљРѕРІРєР°',        match:['forge']},
  {k:'vitrage', l:'Р’РёС‚СЂР°Р¶',       match:['vitrage']}
];
function glassMatchesDoor(optKey, doorGlass){
  const o=GLASS_OPTS.find(x=>x.k===optKey); if(!o) return false;
  return o.match.includes(doorGlass);
}

function renderChips(){
  document.getElementById('chipsPurpose').innerHTML=PURPOSES.map(p=>`<button class="chip${FILTERS.purpose.has(p)?' on':''}" onclick="toggleFilter('purpose','${p}')">${p}</button>`).join('');
  document.getElementById('chipsSeries').innerHTML=SERIES_LIST.map(s=>`<button class="chip${FILTERS.series.has(s)?' on':''}" onclick="toggleFilter('series','${s}')">${s}</button>`).join('');

  // Р’РЅРµС€РЅСЏСЏ РѕС‚РґРµР»РєР° вЂ” С‡РµРєР±РѕРєСЃС‹, РІР°СЂРёР°РЅС‚С‹ РёР· РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР°
  const fEl=document.getElementById('checksFinish');
  if(fEl){
    fEl.innerHTML=FINISH_OPTS.map(o=>{
      const cnt=DOORS.filter(d=>doorFinishKeys(d).includes(o.k)).length;
      const on=FILTERS.finish.has(o.k);
      return `<button class="flt-check${on?' on':''}" onclick="toggleFilter('finish','${o.k}')" aria-pressed="${on}">
        <span class="flt-check-box">${on?'вњ“':''}</span>
        <span class="flt-check-name">${o.l}</span>
        <span class="flt-check-cnt">${cnt}</span>
      </button>`;
    }).join('');
  }

  // РЎС‚РµРєР»Рѕ вЂ” С‡РµРєР±РѕРєСЃС‹
  const gEl=document.getElementById('checksGlass');
  if(gEl){
    gEl.innerHTML=GLASS_OPTS.map(g=>{
      const cnt=DOORS.filter(d=>g.match.includes(d.glass)).length;
      const on=FILTERS.glass.has(g.k);
      return `<button class="flt-check${on?' on':''}" onclick="toggleGlass('${g.k}')" aria-pressed="${on}">
        <span class="flt-check-box">${on?'вњ“':''}</span>
        <span class="flt-check-name">${g.l}</span>
        <span class="flt-check-cnt">${cnt}</span>
      </button>`;
    }).join('');
  }
}

function toggleFilter(key,val){
  const s=FILTERS[key];
  if(s.has(val))s.delete(val);else s.add(val);
  renderChips();render();
}
function toggleGlass(k){
  if(FILTERS.glass.has(k))FILTERS.glass.delete(k); else FILTERS.glass.add(k);
  renderChips();render();
}
function resetFilters(){
  FILTERS.purpose.clear();FILTERS.series.clear();FILTERS.finish.clear();
  FILTERS.glass.clear();FILTERS.search='';FILTERS.priceMax=200000;
  document.getElementById('searchInput').value='';
  document.getElementById('priceMax').value=200000;
  document.getElementById('priceMaxLbl').textContent='120 000+';
  renderChips();render();
}

document.getElementById('searchInput').addEventListener('input',e=>{FILTERS.search=e.target.value.trim().toLowerCase();render();});
document.getElementById('priceMax').addEventListener('input',e=>{
  FILTERS.priceMax=+e.target.value;
  document.getElementById('priceMaxLbl').textContent=FILTERS.priceMax>=200000?'200 000+':FILTERS.priceMax.toLocaleString('ru-RU');
  render();
});

/* ====== Р Р•РќР”Р•Р  ====== */

function applyFilters(list){
  return list.filter(d=>{
    if(FILTERS.purpose.size && !FILTERS.purpose.has(d.purpose))return false;
    if(FILTERS.series.size && !FILTERS.series.has(d.series))return false;
    if(FILTERS.finish.size){
      const fkeys=doorFinishKeys(d);
      const ok=[...FILTERS.finish].some(k=>fkeys.includes(k));
      if(!ok) return false;
    }
    if(FILTERS.glass.size){
      const ok=[...FILTERS.glass].some(k=>glassMatchesDoor(k,d.glass));
      if(!ok) return false;
    }
    if(d.price>FILTERS.priceMax && FILTERS.priceMax<200000)return false;
    if(FILTERS.search){
      const hay=(d.name+' '+d.series+' '+d.purpose+' '+(d.tags||[]).join(' ')).toLowerCase();
      if(!hay.includes(FILTERS.search))return false;
    }
    return true;
  });
}

function applySort(list){
  const s=document.getElementById('sortSel').value;
  const c=[...list];
  if(s==='cheap')c.sort((a,b)=>a.price-b.price);
  else if(s==='expensive')c.sort((a,b)=>b.price-a.price);
  else if(s==='new')c.sort((a,b)=>(b.flag==='РќРѕРІРёРЅРєР°'?1:0)-(a.flag==='РќРѕРІРёРЅРєР°'?1:0)||b.popular-a.popular);
  else c.sort((a,b)=>b.popular-a.popular);
  return c;
}

function flagClass(f){
  if(!f)return '';
  if(f==='РҐРёС‚'||f==='Р РµРєРѕРјРµРЅРґСѓРµРј')return ' hit';
  if(f==='РќРѕРІРёРЅРєР°')return ' new';
  if(f==='Р­Р»РёС‚')return ' elite';
  return '';
}

function cardHtml(d,idx){
  const imgs=d.images||[];
  const multi=imgs.length>1;
  const dotsHtml=multi?`<div class="car-dots">${imgs.map((_,i)=>`<button class="car-dot${i===0?' on':''}" data-go="${i}" aria-label="РЎР»Р°Р№Рґ ${i+1}"></button>`).join('')}</div>`:'';
  const counterHtml=multi?`<div class="car-counter"><span class="cur">1</span>/${imgs.length}</div>`:'';
  const arrowsHtml=multi?`
    <button class="car-arrow prev disabled" data-dir="-1" aria-label="РџСЂРµРґС‹РґСѓС‰РµРµ"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
    <button class="car-arrow next" data-dir="1" aria-label="РЎР»РµРґСѓСЋС‰РµРµ"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>`:'';

  return `<article class="card reveal" data-id="${d.id}" style="animation-delay:${(idx||0)*40}ms">
    <div class="card-img" data-carousel data-len="${imgs.length}" data-idx="0">
      ${d.flag?`<div class="card-flag${flagClass(d.flag)}">${d.flag}</div>`:''}
      <div class="card-actions">
        <button class="card-act wish" data-id="${d.id}" onclick="event.stopPropagation();toggleWish(${d.id},this)" aria-label="Р’ РёР·Р±СЂР°РЅРЅРѕРµ"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
        <button class="card-act cmp" data-id="${d.id}" onclick="event.stopPropagation();toggleCmp(${d.id},this)" aria-label="РЎСЂР°РІРЅРёС‚СЊ"><svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="9" y2="18"/></svg></button>
      </div>
      ${counterHtml}
      <div class="slides">${imgs.map((s,i)=>slideHtml(s, `${d.name} В· СЃРµСЂРёСЏ ${d.series}${imgs.length>1?` (С„РѕС‚Рѕ ${i+1})`:''}`, i===0)).join('')}</div>
      ${arrowsHtml}
      ${dotsHtml}
    </div>
    <div class="card-body">
      <div class="card-series">РЎРµСЂРёСЏ В· ${d.series}</div>
      <h2 class="card-name">${d.name}</h2>
      <div class="card-purpose">Р”Р»СЏ ${d.purpose}</div>
      <div class="card-tags">${(d.tags||[]).map(t=>`<span class="ctag">${t}</span>`).join('')}</div>
      <div class="card-bottom">
        <div class="card-price">
          <span class="card-price-from">РѕС‚</span>
          <span class="card-price-val">${d.price.toLocaleString('ru-RU')} в‚Ѕ</span>
        </div>
        <button class="card-cta" onclick="openCalc(${d.id})">Р Р°СЃСЃС‡РёС‚Р°С‚СЊ в†’</button>
      </div>
    </div>
  </article>`;
}

/* Subtle 3D tilt on hover вЂ” РѕС‚РєР»СЋС‡РµРЅРѕ (С‚СЏР¶РµР»Рѕ РїСЂРё backdrop-filter РЅР° .card).
   Hover-СЌС„С„РµРєС‚ РѕСЃС‚Р°С‘С‚СЃСЏ С‡РµСЂРµР· CSS :hover (translateY + glow). */
function bindCardTilt(){return}

/* Stagger reveal on scroll */
function bindReveal(){
  if(!('IntersectionObserver' in window))return;
  const els=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver(es=>{
    es.forEach(en=>{
      if(en.isIntersecting){en.target.style.opacity='1';en.target.style.transform='';io.unobserve(en.target);}
    });
  },{threshold:.08,rootMargin:'0px 0px -50px 0px'});
  els.forEach(el=>{el.style.opacity='0';io.observe(el);});
}

function bindCarousels(){
  document.querySelectorAll('[data-carousel]').forEach(car=>{
    const len=+car.dataset.len;
    const slidesEls=car.querySelectorAll('.slide');
    const slides=car.querySelector('.slides');
    const dots=car.querySelectorAll('.car-dot');
    const counter=car.querySelector('.car-counter .cur');
    const prev=car.querySelector('.car-arrow.prev');
    const next=car.querySelector('.car-arrow.next');

    const setActive=i=>{
      slidesEls.forEach((s,j)=>s.classList.toggle('active',j===i));
    };

    const go=i=>{
      i=Math.max(0,Math.min(len-1,i));
      car.dataset.idx=i;
      if(slides) slides.style.transform=`translateX(-${i*100}%)`;
      dots.forEach((d,j)=>d.classList.toggle('on',j===i));
      if(counter)counter.textContent=i+1;
      if(prev)prev.classList.toggle('disabled',i===0);
      if(next)next.classList.toggle('disabled',i===len-1);
      setActive(i);
    };

    if(len>1){
      prev.addEventListener('click',e=>{e.stopPropagation();go(+car.dataset.idx-1);});
      next.addEventListener('click',e=>{e.stopPropagation();go(+car.dataset.idx+1);});
      dots.forEach(d=>d.addEventListener('click',e=>{e.stopPropagation();go(+d.dataset.go);}));

      // Touch swipe
      let sx=0,sy=0,dx=0,active=false;
      car.addEventListener('touchstart',e=>{const t=e.touches[0];sx=t.clientX;sy=t.clientY;dx=0;active=true;},{passive:true});
      car.addEventListener('touchmove',e=>{if(!active)return;const t=e.touches[0];dx=t.clientX-sx;},{passive:true});
      car.addEventListener('touchend',e=>{
        if(!active)return;active=false;
        if(Math.abs(dx)>40){e.stopPropagation();go(+car.dataset.idx+(dx<0?1:-1));}
      });
    }

    // Tap-to-zoom: РєР»РёРє РїРѕ С„РѕС‚Рѕ = РЅРµР±РѕР»СЊС€РѕРµ СѓРІРµР»РёС‡РµРЅРёРµ, РїРѕРІС‚РѕСЂРЅС‹Р№ РєР»РёРє/СѓС…РѕРґ вЂ” РЅР°Р·Р°Рґ
    slidesEls.forEach(s=>{
      s.addEventListener('click',e=>{
        e.stopPropagation();
        car.classList.toggle('zoomed');
      });
    });
    car.addEventListener('mouseleave',()=>car.classList.remove('zoomed'));
  });
}

function render(){
  const list=applySort(applyFilters(DOORS));
  document.getElementById('countNum').textContent=list.length;
  const g=document.getElementById('grid');
  if(!list.length){
    g.innerHTML=`<div class="empty" style="grid-column:1/-1">
      <div class="empty-title">РќРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ</div>
      <div class="empty-sub">РџРѕРїСЂРѕР±СѓР№С‚Рµ СЃР±СЂРѕСЃРёС‚СЊ С„РёР»СЊС‚СЂС‹ РёР»Рё РёР·РјРµРЅРёС‚СЊ РїР°СЂР°РјРµС‚СЂС‹ РїРѕРёСЃРєР°</div>
    </div>`;return;
  }
  g.innerHTML=list.map((d,i)=>cardHtml(d,i)).join('');
  bindCarousels();
  bindCardTilt();
  bindReveal();
}

function openCalc(id){
  const d=DOORS.find(x=>x.id===id);
  if(!d)return;
  CALC.door=d;
  CALC.cur=0;
  // Reset selections, then preset based on door
  CALC.sel={base:null,ext:null,int:null,glass:null,seal:null,lock:null,handle:null,extras:[],install:[]};
  presetFromDoor(d);
  document.getElementById('calcDoorName').innerHTML=`${d.name} <em style="opacity:.5;font-size:.85em">В· ${d.series}</em>`;
  const bg=document.getElementById('calcBg');
  bg.classList.add('show');bg.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  renderCalc();
}
function closeCalc(){
  const bg=document.getElementById('calcBg');
  bg.classList.remove('show');bg.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  // РџСЂРёРѕСЂРёС‚РµС‚: РѕС‚РєСЂС‹С‚С‹Р№ drawer Р·Р°РєСЂС‹РІР°РµРј РїРµСЂРІС‹Рј, Р·Р°С‚РµРј РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ
  const drawerOpen=document.querySelector('.drawer.open');
  if(drawerOpen){ if(typeof closeDrawer==='function') closeDrawer(); return; }
  if(document.getElementById('calcBg').classList.contains('show')) closeCalc();
});

function toggleFiltersMobile(){document.getElementById('filters').classList.toggle('open');}

// Category strip в†” purpose filter sync
document.querySelectorAll('.catbtn').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.catbtn').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');
    const cat=b.dataset.cat;
    FILTERS.purpose.clear();
    if(cat!=='all')FILTERS.purpose.add(cat);
    renderChips();render();
    const r=document.querySelector('.results');
    if(r)window.scrollTo({top:r.offsetTop-80,behavior:'smooth'});
  });
});

// Apple-style mega-menu items в†’ filter
document.querySelectorAll('.tb-mega-item').forEach(it=>{
  it.addEventListener('click',e=>{
    e.preventDefault();
    const cat=it.dataset.cat,ser=it.dataset.series;
    if(cat){FILTERS.purpose.clear();FILTERS.purpose.add(cat);}
    if(ser){FILTERS.series.clear();FILTERS.series.add(ser);}
    renderChips();render();
    document.querySelector('.results')?.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

/* Р›С‘РіРєРёР№ РіР»РѕР±Р°Р»СЊРЅС‹Р№ mousemove С‚РѕР»СЊРєРѕ РґР»СЏ С„РѕРЅРѕРІРѕРіРѕ СЂР°РґРёР°Р»-РіСЂР°РґРёРµРЅС‚Р° (--mx/--my).
   Throttle РґРѕ ~30 fps + РѕС‚РєР»СЋС‡РµРЅРёРµ РІРѕ РІСЂРµРјСЏ СЃРєСЂРѕР»Р»Р° + skip РµСЃР»Рё РЅРёС‡РµРіРѕ РЅРµ РґРІРёРЅСѓР»РѕСЃСЊ. */
(function(){
  let raf=0,lastX=0,lastY=0,scrolling=false,prevX=-1,prevY=-1,lastTs=0;
  const root=document.documentElement;
  const FPS_INTERVAL=33; // ~30fps
  document.addEventListener('mousemove',e=>{
    lastX=e.clientX;lastY=e.clientY;
    if(scrolling||raf)return;
    const now=performance.now();
    if(now-lastTs<FPS_INTERVAL)return;
    raf=requestAnimationFrame(()=>{
      raf=0;lastTs=performance.now();
      if(lastX===prevX&&lastY===prevY)return;
      prevX=lastX;prevY=lastY;
      root.style.setProperty('--mx',lastX+'px');
      root.style.setProperty('--my',lastY+'px');
    });
  },{passive:true});
  // РЅРµ РѕР±РЅРѕРІР»СЏРµРј С„РѕРЅ РІРѕ РІСЂРµРјСЏ РїСЂРѕРєСЂСѓС‚РєРё
  window.addEventListener('scroll',()=>{
    scrolling=true;
    clearTimeout(window.__bgScrT);
    window.__bgScrT=setTimeout(()=>scrolling=false,180);
  },{passive:true});

  // РўРѕС‡РµС‡РЅР°СЏ РїРѕРґСЃРІРµС‚РєР° РїРѕРґ РєСѓСЂСЃРѕСЂРѕРј РЅР°Рґ .card вЂ” С‚РѕР¶Рµ throttled
  let cardRaf=0,cardEl=null,cardX=0,cardY=0;
  document.addEventListener('pointermove',e=>{
    if(scrolling||cardRaf)return;
    const card=e.target.closest && e.target.closest('.card');
    if(!card)return;
    cardEl=card;cardX=e.clientX;cardY=e.clientY;
    cardRaf=requestAnimationFrame(()=>{
      cardRaf=0;
      const r=cardEl.getBoundingClientRect();
      cardEl.style.setProperty('--cx',(cardX-r.left)+'px');
      cardEl.style.setProperty('--cy',(cardY-r.top)+'px');
    });
  },{passive:true});
})();

/* initial render moved to end of init block to avoid double rendering */

/* ============================================================
   CALCULATOR LOGIC
   ============================================================ */

const CALC_STEPS=[
  {key:'base',type:'radio',title:'РЎРµСЂРёСЏ <em>РґРІРµСЂРё</em>',hint:'РЎРµСЂРёСЏ РѕРїСЂРµРґРµР»СЏРµС‚ РєРѕРЅСЃС‚СЂСѓРєС†РёСЋ: С‚РѕР»С‰РёРЅСѓ РјРµС‚Р°Р»Р»Р°, РєР»Р°СЃСЃ Р·Р°РјРєРѕРІ, РєРѕР»РёС‡РµСЃС‚РІРѕ РєРѕРЅС‚СѓСЂРѕРІ. РЈР¶Рµ РІС‹Р±СЂР°РЅР° РїРѕРґ РјРѕРґРµР»СЊ РёР· РєР°С‚Р°Р»РѕРіР° вЂ” РЅРѕ РјРѕР¶РЅРѕ СЃРјРµРЅРёС‚СЊ.',
   options:[
    {name:'Р­РєРѕРЅРѕРј',price:12900,desc:'Р”Р»СЏ РґР°С‡, РіР°СЂР°Р¶РµР№, РЅРµР¶РёР»С‹С… РїРѕРјРµС‰РµРЅРёР№.',inc:'РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕРєСЂС‹С‚РёРµ В· Р’РёРЅРёР»РёСЃРєРѕР¶Р°'},
    {name:'РЎС‚Р°РЅРґР°СЂС‚',price:24900,desc:'Р‘Р°Р·РѕРІС‹Р№ РІР°СЂРёР°РЅС‚ РґР»СЏ РєРІР°СЂС‚РёСЂС‹.',inc:'РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕРєСЂС‹С‚РёРµ В· Р›Р°РјРёРЅР°С‚ В· 2 РєРѕРЅС‚СѓСЂР°'},
    {name:'РљРѕРјС„РѕСЂС‚',price:34900,desc:'РџРѕРІС‹С€РµРЅРЅР°СЏ С‚РµРїР»Рѕ- Рё С€СѓРјРѕРёР·РѕР»СЏС†РёСЏ.',inc:'РџР’РҐ В· 2 РєРѕРЅС‚СѓСЂР° В· Guardian В· Armadillo'},
    {name:'РџСЂРµРјРёСѓРј',price:54900,desc:'РћРїС‚РёРјР°Р»СЊРЅС‹Р№ РІС‹Р±РѕСЂ РґР»СЏ РјРѕСЃРєРѕРІСЃРєРёС… РєРІР°СЂС‚РёСЂ.',inc:'РњР”Р¤ В· 2 РєРѕРЅС‚СѓСЂР° В· Guardian В· Armadillo В· РќРѕС‡РЅР°СЏ Р·Р°РґРІРёР¶РєР°'},
    {name:'Р­Р»РёС‚',price:89900,desc:'РРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРµ РїСЂРѕРёР·РІРѕРґСЃС‚РІРѕ.',inc:'Р¤Р°РЅРµСЂР° В· РњР”Р¤ В· 3 РєРѕРЅС‚СѓСЂР° В· 2 Р·Р°РјРєР° В· РўРµСЂРјРѕСЂР°Р·СЂС‹РІ'}
  ]},
  {key:'ext',type:'radio',title:'РћС‚РґРµР»РєР° <em>СЃРЅР°СЂСѓР¶Рё</em>',hint:'Р­С‚Сѓ СЃС‚РѕСЂРѕРЅСѓ РІРёРґСЏС‚ СЃРѕСЃРµРґРё. Р’Р°СЂРёР°РЅС‚С‹ РґРµС€РµРІР»Рµ РІРєР»СЋС‡С‘РЅРЅРѕРіРѕ РІ СЃРµСЂРёСЋ вЂ” Р±РµСЃРїР»Р°С‚РЅС‹.',
   options:[
    {name:'РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕР»РёРјРµСЂРЅРѕРµ РїРѕРєСЂС‹С‚РёРµ',price:4500,desc:'РњР°С‚РѕРІРѕРµ РёР·РЅРѕСЃРѕСЃС‚РѕР№РєРѕРµ РїРѕРєСЂС‹С‚РёРµ. 20+ С†РІРµС‚РѕРІ.'},
    {name:'Р’РёРЅРёР»РёСЃРєРѕР¶Р°',price:2500,desc:'РњСЏРіРєР°СЏ С„Р°РєС‚СѓСЂР°, СЃРєСЂС‹РІР°РµС‚ РјРµР»РєРёРµ С†Р°СЂР°РїРёРЅС‹.'},
    {name:'Р›Р°РјРёРЅР°С‚',price:4500,desc:'РРјРёС‚Р°С†РёСЏ РґРµСЂРµРІР°. РќРµ РІС‹С†РІРµС‚Р°РµС‚ РЅР° СЃРѕР»РЅС†Рµ.'},
    {name:'РџР’РҐ',price:6500,desc:'Р’Р»Р°РіРѕСЃС‚РѕР№РєРёР№ РјР°С‚РµСЂРёР°Р».'},
    {name:'РњР”Р¤',price:9500,desc:'Р‘Р»Р°РіРѕСЂРѕРґРЅС‹Р№ РІРёРґ. РџРѕРєСЂР°СЃРєР° РІ Р»СЋР±РѕР№ РѕС‚С‚РµРЅРѕРє.'},
    {name:'Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°',price:17000,desc:'РџСЂРѕС‡РЅР°СЏ РѕСЃРЅРѕРІР°, РЅРµ Р±РѕРёС‚СЃСЏ РїРµСЂРµРїР°РґРѕРІ С‚РµРјРїРµСЂР°С‚СѓСЂС‹.'},
    {name:'3D РїР°РЅРµР»СЊ',price:27000,desc:'РћР±СЉС‘РјРЅС‹Р№ С„СЂРµР·РµСЂРѕРІР°РЅРЅС‹Р№ СЂРёСЃСѓРЅРѕРє. РџСЂРµРјРёР°Р»СЊРЅС‹Р№ С„Р°СЃР°Рґ.'}
  ]},
  {key:'int',type:'radio',title:'РћС‚РґРµР»РєР° <em>РІРЅСѓС‚СЂРё</em>',hint:'РЎС‚РѕСЂРѕРЅР°, РєРѕС‚РѕСЂСѓСЋ РІРёРґРёС‚Рµ РІС‹ РєР°Р¶РґС‹Р№ РґРµРЅСЊ.',
   options:[
    {name:'РџРѕСЂРѕС€РєРѕРІРѕРµ РїРѕР»РёРјРµСЂРЅРѕРµ РїРѕРєСЂС‹С‚РёРµ',price:8000,desc:'РњР°С‚РѕРІР°СЏ РѕРєСЂР°СЃРєР° РјРµС‚Р°Р»Р»Р°. Р›РѕС„С‚.'},
    {name:'Р’РёРЅРёР»РёСЃРєРѕР¶Р°',price:2500,desc:'РўС‘РїР»Р°СЏ РЅР° РѕС‰СѓРїСЊ. РљР»Р°СЃСЃРёРєР° СѓСЋС‚Р°.'},
    {name:'Р›Р°РјРёРЅР°С‚',price:4500,desc:'РРјРёС‚Р°С†РёСЏ РґРµСЂРµРІР°. Р›РµРіРєРѕ РјРѕРµС‚СЃСЏ.'},
    {name:'РџР’РҐ',price:6500,desc:'РџСЂР°РєС‚РёС‡РЅС‹Р№, РІР»Р°РіРѕСЃС‚РѕР№РєРёР№.'},
    {name:'РњР”Р¤',price:9500,desc:'Р‘Р»Р°РіРѕСЂРѕРґРЅС‹Р№ РІРёРґ.'},
    {name:'Р’Р»Р°РіРѕСЃС‚РѕР№РєР°СЏ С„Р°РЅРµСЂР°',price:17000,desc:'РњР°РєСЃРёРјР°Р»СЊРЅР°СЏ РїСЂРѕС‡РЅРѕСЃС‚СЊ.'}
  ]},
  {key:'glass',type:'radio',title:'Р’СЃС‚Р°РІРєР° / <em>СЃС‚РµРєР»РѕРїР°РєРµС‚</em>',hint:'Р”РµРєРѕСЂР°С‚РёРІРЅС‹Р№ СЌР»РµРјРµРЅС‚ РІ РїРѕР»РѕС‚РЅРµ. Р•СЃР»Рё РЅРµ РЅСѓР¶РµРЅ вЂ” РѕСЃС‚Р°РІСЊС‚Рµ В«Р‘РµР· РІСЃС‚Р°РІРєРёВ».',
   options:[
    {name:'Р‘РµР· РІСЃС‚Р°РІРєРё',price:0,desc:'Р“Р»СѓС…РѕРµ РїРѕР»РѕС‚РЅРѕ. РњР°РєСЃРёРјР°Р»СЊРЅР°СЏ С‚РµРїР»РѕРёР·РѕР»СЏС†РёСЏ.'},
    {name:'Р—РµСЂРєР°Р»Рѕ',price:5500,desc:'Р—РµСЂРєР°Р»Рѕ РІ РґРІРµСЂСЊ. РЈРґРѕР±РЅРѕ РїРµСЂРµРґ РІС‹С…РѕРґРѕРј.'},
    {name:'РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№',price:5500,desc:'Р—Р°РєР°Р»С‘РЅРЅРѕРµ СЃС‚РµРєР»Рѕ 6 РјРј.'},
    {name:'РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°',price:7500,desc:'РђСЂРѕС‡РЅС‹Р№ РїСЂРѕС‘Рј, РёР·СЏС‰РЅРµРµ.'},
    {name:'Р—РµСЂРєР°Р»СЊРЅР°СЏ С‚РѕРЅРёСЂРѕРІРєР°',price:8500,desc:'РЎРЅР°СЂСѓР¶Рё вЂ” Р·РµСЂРєР°Р»Рѕ, РёР·РЅСѓС‚СЂРё РїСЂРѕР·СЂР°С‡РЅРѕРµ.'},
    {name:'РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№',price:12000,desc:'РљРѕРІР°РЅР°СЏ СЂРµС€С‘С‚РєР° РІРЅСѓС‚СЂРё СЃС‚РµРєР»Р°.'},
    {name:'РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶',price:25000,desc:'Р¦РІРµС‚РЅРѕРµ СЃС‚РµРєР»Рѕ СЂСѓС‡РЅРѕР№ СЂР°Р±РѕС‚С‹.'}
  ]},
  {key:'seal',type:'radio',title:'РљРѕРЅС‚СѓСЂС‹ <em>СѓРїР»РѕС‚РЅРµРЅРёСЏ</em>',hint:'РљР°Р¶РґС‹Р№ РєРѕРЅС‚СѓСЂ вЂ” СЌС‚Рѕ С‚РёС€РёРЅР° Рё С‚РµРїР»Рѕ.',
   options:[
    {name:'РћРґРёРЅР°СЂРЅС‹Р№ РєРѕРЅС‚СѓСЂ',price:0,desc:'РЎС‚Р°РЅРґР°СЂС‚ РґР»СЏ РЅРѕРІРѕСЃС‚СЂРѕРµРє СЃ С‚Р°РјР±СѓСЂРѕРј.'},
    {name:'Р”РІРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ',price:2500,desc:'Р—Р°РјРµС‚РЅРѕ СЃРЅРёР¶Р°РµС‚ С€СѓРј Рё СЃРєРІРѕР·РЅСЏРєРё.'},
    {name:'РўСЂРѕР№РЅРѕР№ РєРѕРЅС‚СѓСЂ',price:12000,desc:'РњР°РєСЃРёРјР°Р»СЊРЅР°СЏ С€СѓРјРѕ- Рё С‚РµРїР»РѕРёР·РѕР»СЏС†РёСЏ.'}
  ]},
  {key:'lock',type:'radio',title:'Р—Р°РјРѕРє Рё <em>Р·Р°С‰РёС‚Р°</em>',hint:'РћС‚ СЃС‚Р°РЅРґР°СЂС‚РЅРѕРіРѕ С†РёР»РёРЅРґСЂР° РґРѕ Р±РёРѕРјРµС‚СЂРёРё.',
   options:[
    {name:'1 Р·Р°РјРѕРє СЃС‚Р°РЅРґР°СЂС‚',price:0,desc:'Р¦РёР»РёРЅРґСЂРѕРІС‹Р№ 3-РіРѕ РєР»Р°СЃСЃР° Р·Р°С‰РёС‚С‹.'},
    {name:'2 Р·Р°РјРєР° Guardian',price:3500,desc:'Р¦РёР»РёРЅРґСЂРѕРІС‹Р№ + СЃСѓРІР°Р»СЊРґРЅС‹Р№.'},
    {name:'2 Р·Р°РјРєР° Kale',price:6500,desc:'РўСѓСЂРµС†РєРѕРµ РєР°С‡РµСЃС‚РІРѕ.'},
    {name:'Р—Р°РјРѕРє Cisa',price:13000,desc:'РС‚Р°Р»СЊСЏРЅСЃРєРёР№ СЃРµСЂС‚РёС„РёС†РёСЂРѕРІР°РЅРЅС‹Р№.'},
    {name:'Р—Р°РјРѕРє Mottura',price:19500,desc:'РџСЂРµРјРёСѓРј РёС‚Р°Р»СЊСЏРЅСЃРєРёР№.'},
    {name:'Р‘РёРѕРјРµС‚СЂРёС‡РµСЃРєРёР№',price:25000,desc:'РћС‚РїРµС‡Р°С‚РѕРє РїР°Р»СЊС†Р°, PIN, РєР»СЋС‡.'}
  ]},
  {key:'handle',type:'radio',title:'Р СѓС‡РєР° Рё <em>С„СѓСЂРЅРёС‚СѓСЂР°</em>',hint:'Р”РµС‚Р°Р»СЊ, Рє РєРѕС‚РѕСЂРѕР№ РїСЂРёРєР°СЃР°РµС‚РµСЃСЊ С‚С‹СЃСЏС‡Рё СЂР°Р· РІ РіРѕРґ.',
   options:[
    {name:'MSM',price:0,desc:'РњР°С‚РѕРІС‹Р№ С…СЂРѕРј, РЅР°РґС‘Р¶РЅС‹Р№ Р±Р°Р·РѕРІС‹Р№ РІР°СЂРёР°РЅС‚.'},
    {name:'Apex',price:3000,desc:'Р›Р°РєРѕРЅРёС‡РЅС‹Р№ РґРёР·Р°Р№РЅ.'},
    {name:'Armadillo',price:4500,desc:'РЁРёСЂРѕРєР°СЏ Р»РёРЅРµР№РєР° СЃС‚РёР»РµР№.'},
    {name:'Guardian Premium',price:6500,desc:'РҐСЂРѕРј, Р·РѕР»РѕС‚Рѕ, Р°РЅС‚РёРє. РЈСЃРёР»РµРЅРЅРѕРµ РєСЂРµРїР»РµРЅРёРµ.'},
    {name:'Р‘СѓРіРµР»СЊРЅР°СЏ',price:16500,desc:'РњР°СЃСЃРёРІРЅР°СЏ СЂСѓС‡РєР°-СЃРєРѕР±Р° РІРѕ РІСЃСЋ РІС‹СЃРѕС‚Сѓ РїРѕР»РѕС‚РЅР°.'}
  ]},
  {key:'extras',type:'multi',title:'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ <em>РѕРїС†РёРё</em>',hint:'Р›СЋР±РѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ. Р’РёРґРµРѕРіР»Р°Р·РѕРє вЂ” РІ РїРѕРґР°СЂРѕРє РїСЂРё Р·Р°РєР°Р·Рµ РїРѕСЃР»Рµ Р·Р°РјРµСЂР°.',
   options:[
    {name:'Р’РёРґРµРѕРіР»Р°Р·РѕРє',price:6500,desc:'180В°, Р·Р°РїРёСЃСЊ РЅР° СЃРјР°СЂС‚С„РѕРЅ.',isGift:true},
    {name:'Р”РѕРІРѕРґС‡РёРє',price:5500,desc:'Р—Р°РєСЂС‹РІР°РµС‚СЃСЏ СЃР°РјР° вЂ” РїР»Р°РІРЅРѕ Рё С‚РёС…Рѕ.'},
    {name:'РўРµСЂРјРѕСЂР°Р·СЂС‹РІ',price:10500,desc:'РЈСЃС‚СЂР°РЅСЏРµС‚ РёРЅРµР№ Рё РєРѕРЅРґРµРЅСЃР°С‚.'},
    {name:'РџРѕСЂРѕРі РёР· РЅРµСЂР¶Р°РІРµР№РєРё',price:5500,desc:'РќРµС‚ СЃРєРІРѕР·РЅСЏРєРѕРІ СЃРЅРёР·Сѓ.'},
    {name:'Р‘СЂРѕРЅРµРЅР°РєР»Р°РґРєР°',price:5500,desc:'Р—Р°С‰РёС‚Р° Р·Р°РјРєР° РѕС‚ РІС‹СЃРІРµСЂР»РёРІР°РЅРёСЏ.'},
    {name:'РќРѕС‡РЅР°СЏ Р·Р°РґРІРёР¶РєР°',price:3200,desc:'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ Р·Р°РїРѕСЂ РёР·РЅСѓС‚СЂРё.'},
    {name:'РЁСѓРјРѕРёР·РѕР»СЏС†РёСЏ',price:5500,desc:'Р’РёР±СЂРѕРїР»Р°СЃС‚ STP + СѓС‚РµРїР»РёС‚РµР»СЊ.'},
    {name:'РЎРєСЂС‹С‚С‹Рµ РїРµС‚Р»Рё',price:23000,desc:'Р”РІРµСЂСЊ РєР°Рє РµРґРёРЅР°СЏ РїР»РёС‚Р°.'}
  ]}
];

const CALC_ICONS={
  'Р’РёРґРµРѕРіР»Р°Р·РѕРє':`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/></svg>`,
  'Р”РѕРІРѕРґС‡РёРє':`<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 16-5.7"/><polyline points="19 2 19 7 14 7"/><circle cx="12" cy="12" r="2"/></svg>`,
  'РўРµСЂРјРѕСЂР°Р·СЂС‹РІ':`<svg viewBox="0 0 24 24"><path d="M12 2v10m0 0c-2.5 0-4 1.5-4 3.5S9.5 19 12 19s4-1.5 4-3.5S14.5 12 12 12z"/></svg>`,
  'РџРѕСЂРѕРі РёР· РЅРµСЂР¶Р°РІРµР№РєРё':`<svg viewBox="0 0 24 24"><rect x="2" y="17" width="20" height="4" rx="1"/><path d="M5 17V7m14 10V7"/></svg>`,
  'Р‘СЂРѕРЅРµРЅР°РєР»Р°РґРєР°':`<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="11" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.5"/></svg>`,
  'РќРѕС‡РЅР°СЏ Р·Р°РґРІРёР¶РєР°':`<svg viewBox="0 0 24 24"><rect x="3" y="10" width="13" height="8" rx="1.5"/><path d="M16 14h5"/><circle cx="9.5" cy="14" r="1.5"/></svg>`,
  'РЁСѓРјРѕРёР·РѕР»СЏС†РёСЏ':`<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  'РЎРєСЂС‹С‚С‹Рµ РїРµС‚Р»Рё':`<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="9" r="1.5"/><circle cx="8" cy="15" r="1.5"/></svg>`
};

const CALC={
  door:null,
  cur:0,
  sel:{base:null,ext:null,int:null,glass:null,seal:null,lock:null,handle:null,extras:[],install:[]},
  leadInfo:null
};

/* Map catalog door в†’ calculator preset */
function presetFromDoor(d){
  const baseStep=CALC_STEPS[0];
  CALC.sel.base=baseStep.options.find(o=>o.name===d.series)||baseStep.options[1];

  // Glass mapping
  const glassMap={none:'Р‘РµР· РІСЃС‚Р°РІРєРё',rect:'РЎС‚РµРєР»РѕРїР°РєРµС‚ РїСЂСЏРјРѕР№',arch:'РЎС‚РµРєР»РѕРїР°РєРµС‚ Р°СЂРєР°',mirror:'Р—РµСЂРєР°Р»Рѕ',forge:'РЎС‚РµРєР»РѕРїР°РєРµС‚ СЃ РєРѕРІРєРѕР№',vitrage:'РҐСѓРґРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІРёС‚СЂР°Р¶',panel:'Р‘РµР· РІСЃС‚Р°РІРєРё'};
  const glassName=glassMap[d.glass]||'Р‘РµР· РІСЃС‚Р°РІРєРё';
  const glassStep=CALC_STEPS.find(s=>s.key==='glass');
  CALC.sel.glass=glassStep.options.find(o=>o.name===glassName)||glassStep.options[0];

  // Default ext/int/seal/lock/handle to first option of step
  ['ext','int','seal','lock','handle'].forEach(k=>{
    const s=CALC_STEPS.find(x=>x.key===k);
    CALC.sel[k]=s.options[0];
  });
}

function calcTotal(){
  let t=CALC.sel.base?CALC.sel.base.price:0;
  ['ext','int','glass','seal','lock','handle'].forEach(k=>{if(CALC.sel[k])t+=CALC.sel[k].price;});
  CALC.sel.extras.forEach(e=>{if(CALC.leadInfo&&e.isGift)return;t+=e.price;});
  return t;
}
const fmtRu=n=>n.toLocaleString('ru-RU')+' в‚Ѕ';

function renderCalc(){
  const total=CALC.sel.base?calcTotal():0;
  document.getElementById('calcPriceVal').textContent=total>0?fmtRu(total):'вЂ”';
  const totalSteps=CALC_STEPS.length;
  document.getElementById('calcStepNum').textContent=CALC.cur+1;
  document.getElementById('calcStepTotal').textContent=totalSteps;
  const pct=Math.round(((CALC.cur+1)/totalSteps)*100);
  document.getElementById('calcPct').textContent=pct+'%';
  document.getElementById('calcProgFill').style.width=pct+'%';

  // === step nav (С‚РѕС‡РєРё С€Р°РіРѕРІ СЃРІРµСЂС…Сѓ) ===
  let stepsNav=document.getElementById('calcStepsNav');
  if(!stepsNav){
    stepsNav=document.createElement('div');
    stepsNav.id='calcStepsNav';stepsNav.className='calc-steps-nav';
    document.querySelector('.calc-head').after(stepsNav);
  }
  const stepLabels={base:'РЎРµСЂРёСЏ',ext:'РЎРЅР°СЂСѓР¶Рё',int:'Р’РЅСѓС‚СЂРё',glass:'РЎС‚РµРєР»Рѕ',seal:'РЈРїР»РѕС‚РЅРµРЅРёРµ',lock:'Р—Р°РјРѕРє',handle:'Р СѓС‡РєР°',extras:'РћРїС†РёРё'};
  stepsNav.innerHTML=CALC_STEPS.map((st,i)=>{
    const cls=i<CALC.cur?'done':(i===CALC.cur?'cur':'');
    return `<button class="calc-step-btn ${cls}" data-label="${stepLabels[st.key]||st.key}" aria-label="РЁР°Рі ${i+1}" onclick="goCalcStep(${i})"></button>`;
  }).join('');

  // === sticky summary (РІС‹Р±СЂР°РЅРЅС‹Рµ РїР°СЂР°РјРµС‚СЂС‹) ===
  let sum=document.getElementById('calcSummary');
  if(!sum){
    sum=document.createElement('div');sum.id='calcSummary';sum.className='calc-summary';
    stepsNav.after(sum);
  }
  const sumChips=[];
  ['base','ext','int','glass','seal','lock','handle'].forEach(k=>{
    const v=CALC.sel[k];if(!v)return;
    const lbl=stepLabels[k];
    const stIdx=CALC_STEPS.findIndex(s=>s.key===k);
    sumChips.push(`<span class="calc-sumchip" onclick="goCalcStep(${stIdx})"><span style="color:rgba(255,255,255,.5)">${lbl}:</span><strong>${v.name.length>22?v.name.slice(0,20)+'вЂ¦':v.name}</strong></span>`);
  });
  CALC.sel.extras.forEach((e,i)=>{
    sumChips.push(`<span class="calc-sumchip" style="color:#fff">+ ${e.name}<span class="x" onclick="event.stopPropagation();removeExtra('${e.name.replace(/'/g,'\\\'')}')">Г—</span></span>`);
  });
  sum.innerHTML=sumChips.join('');

  const isLast=CALC.cur===totalSteps-1;
  if(isLast && CALC.cur===CALC_STEPS.length-1 && false){
    // reserved
  }

  const s=CALC_STEPS[CALC.cur];
  let bodyHtml=`<div class="step-eyebrow">РЁР°Рі ${String(CALC.cur+1).padStart(2,'0')} / ${String(totalSteps).padStart(2,'0')}</div>
    <h2 class="step-title">${s.title}</h2>
    <p class="step-hint">${s.hint}</p>`;

  if(s.type==='multi'){
    bodyHtml+=`<div class="opt-extras">`;
    s.options.forEach((o,i)=>{
      const sel=CALC.sel.extras.some(x=>x.name===o.name);
      const ic=CALC_ICONS[o.name]||`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`;
      const ph=o.isGift?'<div class="opt-tile-price gift">рџЋЃ РІ РїРѕРґР°СЂРѕРє</div>':`<div class="opt-tile-price">+${o.price.toLocaleString('ru-RU')} в‚Ѕ</div>`;
      bodyHtml+=`<div class="opt-tile${sel?' sel':''}" onclick="toggleExtra(${i})" role="checkbox" aria-checked="${sel}">
        <div class="opt-tile-chk">${sel?'вњ“':''}</div>
        <div class="opt-tile-icon">${ic}</div>
        <div class="opt-tile-name">${o.name}</div>
        ${ph}
      </div>`;
    });
    bodyHtml+=`</div>`;
  } else {
    bodyHtml+=`<div class="opt-cards">`;
    s.options.forEach((o,i)=>{
      const sel=CALC.sel[s.key]&&CALC.sel[s.key].name===o.name;
      const big=s.key==='base';
      let priceHtml;
      if(big){
        priceHtml=`<div class="opt-price-row"><span class="opt-price-from">РѕС‚</span><span class="opt-price-val">${fmtRu(o.price)}</span></div>`;
      } else if(o.price===0){
        priceHtml=`<div class="opt-price-row"><span class="opt-free">РІРєР»СЋС‡РµРЅРѕ</span></div>`;
      } else {
        priceHtml=`<div class="opt-price-row"><span class="opt-add">+${o.price.toLocaleString('ru-RU')} в‚Ѕ</span></div>`;
      }
      bodyHtml+=`<div class="opt-card${sel?' sel':''}" onclick="selOption('${s.key}',${i})" role="radio" aria-checked="${sel}">
        <div class="opt-chk">${sel?'вњ“':''}</div>
        ${priceHtml}
        <div class="${big?'opt-name-big':'opt-name'}">${o.name}</div>
        <div class="opt-desc">${o.desc}</div>
        ${big&&o.inc?`<div class="opt-inc">${o.inc}</div>`:''}
      </div>`;
    });
    bodyHtml+=`</div>`;
  }

  // РќР° РїРѕСЃР»РµРґРЅРµРј С€Р°РіРµ (extras=8-Р№, С‚.Рµ. last) РґРѕР±Р°РІР»СЏРµРј С„РѕСЂРјСѓ Р·Р°С…РІР°С‚Р°
  if(isLast){
    bodyHtml+=`<div class="lead-wrap">
      <div class="measure-invite">
        <div class="measure-kicker">РљРѕРЅС„РёРіСѓСЂР°С†РёСЏ СЃРѕР±СЂР°РЅР°</div>
        <div class="measure-title">РџСЂРёС€Р»С‘Рј <em>СЌРєСЃРїРµСЂС‚Р°</em> РЅР° Р±РµСЃРїР»Р°С‚РЅС‹Р№ Р·Р°РјРµСЂ</div>
        <div class="measure-sub">РЎРµСЂРёСЏ В«<strong>${CALC.sel.base.name}</strong>В» вЂ” РѕСЂРёРµРЅС‚РёСЂРѕРІРѕС‡РЅРѕ <strong>${fmtRu(total)}</strong>. РўРѕС‡РЅР°СЏ С†РµРЅР° вЂ” РїРѕСЃР»Рµ Р·Р°РјРµСЂР°: СЌРєСЃРїРµСЂС‚ РѕС†РµРЅРёС‚ РїСЂРѕС‘Рј, РїРѕРєР°Р¶РµС‚ РѕР±СЂР°Р·С†С‹ Рё Р·Р°С„РёРєСЃРёСЂСѓРµС‚ СЃС‚РѕРёРјРѕСЃС‚СЊ РІ РґРѕРіРѕРІРѕСЂРµ.</div>
        <div class="measure-benefits">
          <div class="measure-benefit"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Р—Р°РјРµСЂ Р±РµСЃРїР»Р°С‚РЅРѕ</strong> В· Р±РµР· РѕР±СЏР·Р°С‚РµР»СЊСЃС‚РІ</span></div>
          <div class="measure-benefit"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span><strong>РћР±СЂР°Р·С†С‹ СЃ СЃРѕР±РѕР№</strong> В· РѕС‚РґРµР»РєР° РІР¶РёРІСѓСЋ</span></div>
          <div class="measure-benefit"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span><strong>РўРѕС‡РЅР°СЏ СЃРјРµС‚Р°</strong> В· РІ РґРѕРіРѕРІРѕСЂРµ</span></div>
          <div class="measure-benefit"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span><strong>РЈРґРѕР±РЅРѕРµ РІСЂРµРјСЏ</strong> В· РґР°Р¶Рµ РІ РІС‹С…РѕРґРЅС‹Рµ</span></div>
        </div>
      </div>
      <form id="leadForm" onsubmit="event.preventDefault();submitLead()" novalidate>
        <div class="fields">
          <input class="linput" id="ln" placeholder="Р’Р°С€Рµ РёРјСЏ" type="text" autocomplete="name" required>
          <input class="linput" id="lp" placeholder="+7 (___) ___-__-__" type="tel" autocomplete="tel" required>
        </div>
        <div class="lerr" id="lerr" role="alert"></div>
        <button type="submit" class="lsubmit">Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° Р±РµСЃРїР»Р°С‚РЅС‹Р№ Р·Р°РјРµСЂ</button>
      </form>
      <div class="lead-proof"><svg viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>РќРёРєР°РєРѕРіРѕ СЃРїР°РјР°. Р—РІРѕРЅРѕРє С‚РѕР»СЊРєРѕ РґР»СЏ СЃРѕРіР»Р°СЃРѕРІР°РЅРёСЏ Р·Р°РјРµСЂР°.</div>
    </div>`;
  }

  document.getElementById('calcBody').innerHTML=bodyHtml;

  // Nav
  let navHtml='';
  if(CALC.cur>0)navHtml+=`<button class="btn-back" onclick="calcPrev()">в†ђ РќР°Р·Р°Рґ</button>`;
  if(!isLast)navHtml+=`<button class="btn-next" onclick="calcNext()">РџСЂРѕРґРѕР»Р¶РёС‚СЊ в†’</button>`;
  document.getElementById('calcNav').innerHTML=navHtml;

  if(isLast)setTimeout(()=>{const p=document.getElementById('lp');if(p)attachPhoneMask(p);},80);
}

function selOption(key,idx){
  const s=CALC_STEPS.find(x=>x.key===key);
  CALC.sel[key]=s.options[idx];
  renderCalc();
}
function toggleExtra(idx){
  const o=CALC_STEPS.find(s=>s.key==='extras').options[idx];
  const i=CALC.sel.extras.findIndex(x=>x.name===o.name);
  if(i>=0)CALC.sel.extras.splice(i,1);else CALC.sel.extras.push(o);
  renderCalc();
}
function calcNext(){if(CALC.cur<CALC_STEPS.length-1){CALC.cur++;renderCalc();}}
function calcPrev(){if(CALC.cur>0){CALC.cur--;renderCalc();}}
function goCalcStep(i){if(i>=0&&i<CALC_STEPS.length){CALC.cur=i;renderCalc();}}
function removeExtra(name){
  const i=CALC.sel.extras.findIndex(x=>x.name===name);
  if(i>=0){CALC.sel.extras.splice(i,1);renderCalc();}
}

function formatPhone(v){
  const d=v.replace(/\D/g,'');let x=d;
  if(x.length&&(x[0]==='8'||x[0]==='9')){if(x[0]==='8')x='7'+x.slice(1);else if(x[0]==='9')x='7'+x;}
  x=x.slice(0,11);let r='+7';
  if(x.length>1)r+=' ('+x.slice(1,4);
  if(x.length>=5)r+=') '+x.slice(4,7);
  if(x.length>=8)r+='-'+x.slice(7,9);
  if(x.length>=10)r+='-'+x.slice(9,11);
  return r;
}
function attachPhoneMask(i){
  if(!i || i.dataset.maskBound) return;
  i.dataset.maskBound = '1';
  i.addEventListener('input',e=>{e.target.value=formatPhone(e.target.value);});
  i.addEventListener('focus',e=>{if(!e.target.value)e.target.value='+7 ';});
  i.addEventListener('blur',e=>{if(e.target.value==='+7 '||e.target.value==='+7')e.target.value='';});
}

function submitLead(){
  const n=document.getElementById('ln'),p=document.getElementById('lp'),errBox=document.getElementById('lerr');
  const btn=document.querySelector('.lsubmit');
  const name=n.value.trim(),phone=p.value.trim();
  let errs=[];
  if(!name){n.classList.add('err');setTimeout(()=>n.classList.remove('err'),450);errs.push('РёРјСЏ');}
  if(phone.replace(/\D/g,'').length<11){p.classList.add('err');setTimeout(()=>p.classList.remove('err'),450);errs.push('РєРѕСЂСЂРµРєС‚РЅС‹Р№ С‚РµР»РµС„РѕРЅ');}
  if(errs.length){errBox.textContent='Р—Р°РїРѕР»РЅРёС‚Рµ: '+errs.join(', ');return;}
  errBox.textContent='';btn.disabled=true;btn.textContent='РћС‚РїСЂР°РІР»СЏРµРј...';
  const total=calcTotal();
  CALC.leadInfo={name,phone,total,door:CALC.door?.name};
  if(window.__ARMORA_DEV__) console.log('[ARMORA LEAD]',{name,phone,total,door:CALC.door?.name,series:CALC.sel.base?.name,sel:CALC.sel});
    setTimeout(()=>{
      const body=document.getElementById('calcBody');
      body.innerHTML='';
      const wrap=document.createElement('div');
      wrap.className='success';
      wrap.innerHTML=`<div class="s-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div class="s-title">Р—Р°СЏРІРєР° РїСЂРёРЅСЏС‚Р°, <em></em>!</div>
      <div class="s-sub">РњРµРЅРµРґР¶РµСЂ ARMORA РїРµСЂРµР·РІРѕРЅРёС‚ РІ С‚РµС‡РµРЅРёРµ <strong>15 РјРёРЅСѓС‚</strong>, С‡С‚РѕР±С‹ СЃРѕРіР»Р°СЃРѕРІР°С‚СЊ СѓРґРѕР±РЅРѕРµ РІСЂРµРјСЏ Р±РµСЃРїР»Р°С‚РЅРѕРіРѕ Р·Р°РјРµСЂР°. Р­РєСЃРїРµСЂС‚ РїСЂРёРµРґРµС‚ СЃ РѕР±СЂР°Р·С†Р°РјРё Рё СЂР°СЃСЃС‡РёС‚Р°РµС‚ С‚РѕС‡РЅСѓСЋ С†РµРЅСѓ РЅР° РјРµСЃС‚Рµ.</div>`;
      wrap.querySelector('.s-title em').textContent = name;
      body.appendChild(wrap);
      document.getElementById('calcNav').innerHTML=`<button class="btn-next" onclick="closeCalc()">Р’РµСЂРЅСѓС‚СЊСЃСЏ РІ РєР°С‚Р°Р»РѕРі</button>`;
    },600);
}

renderChips();render();

/* ============================================================
   FEATURES: wishlist, compare, ticker, FAQ, sound, URL-state, PDF
   ============================================================ */
const LS={get:(k,d)=>{try{return JSON.parse(localStorage.getItem('armora_'+k))||d}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem('armora_'+k,JSON.stringify(v))}catch(e){/* private mode / quota */}}};
let WISH=new Set(LS.get('wish',[]));
let CMP=new Set(LS.get('cmp',[]));
const CMP_MAX=3;

function syncFabBadges(){
  const w=document.getElementById('wishCnt'),c=document.getElementById('cmpCnt');
  if(w){w.style.display=WISH.size?'block':'none';w.textContent=WISH.size;}
  if(c){c.style.display=CMP.size?'block':'none';c.textContent=CMP.size;}
  document.querySelectorAll('.card-act.wish').forEach(b=>b.classList.toggle('on',WISH.has(+b.dataset.id)));
  document.querySelectorAll('.card-act.cmp').forEach(b=>b.classList.toggle('on',CMP.has(+b.dataset.id)));
}
function toggleWish(id,btn){
  if(WISH.has(id))WISH.delete(id);else WISH.add(id);
  LS.set('wish',[...WISH]);syncFabBadges();renderWishDrawer();
}
function toggleCmp(id,btn){
  if(CMP.has(id))CMP.delete(id);
  else if(CMP.size>=CMP_MAX){toast('РњР°РєСЃРёРјСѓРј '+CMP_MAX+' РјРѕРґРµР»Рё РґР»СЏ СЃСЂР°РІРЅРµРЅРёСЏ');return;}
  else CMP.add(id);
  LS.set('cmp',[...CMP]);syncFabBadges();renderCmpDrawer();
}
function openDrawer(t){
  closeDrawer();
  // РїСЂСЏС‡РµРј РєРЅРѕРїРєСѓ В«РџРµСЂРµР№С‚Рё РЅР° СЃР°Р№С‚В» РєРѕРіРґР° РѕС‚РєСЂС‹С‚ drawer
  const gs=document.getElementById('gotoSite');if(gs)gs.style.display='none';
  if(t==='wish'){renderWishDrawer();document.getElementById('wishDrawer').classList.add('open');}
  else if(t==='cmp'){renderCmpDrawer();document.getElementById('cmpDrawer').classList.add('open');}
}
function closeDrawer(){
  document.querySelectorAll('.drawer').forEach(d=>d.classList.remove('open'));
  const gs=document.getElementById('gotoSite');if(gs)gs.style.display='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){/* РѕР±СЉРµРґРёРЅРµРЅРѕ РІ РѕР±С‰РёР№ РѕР±СЂР°Р±РѕС‚С‡РёРє РІС‹С€Рµ */}});

function drawerCard(d,t){
  const img=(d.images&&d.images[0])||'';
  const safeAlt=`${d.name} В· СЃРµСЂРёСЏ ${d.series}`.replace(/"/g,'&quot;');
  const imgHtml=img.trim().startsWith('<svg')?img:`<img src="${img}" alt="${safeAlt}" width="54" height="72" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover">`;
  return `<div class="drawer-item"><div class="drawer-item-img">${imgHtml}</div><div class="drawer-item-info"><h3 class="drawer-item-name">${d.name}</h3><div class="drawer-item-price">РѕС‚ ${d.price.toLocaleString('ru-RU')} в‚Ѕ В· ${d.series}</div></div><button class="drawer-item-rm" onclick="rmFromDrawer('${t}',${d.id})" aria-label="РЈРґР°Р»РёС‚СЊ">Г—</button></div>`;
}
function renderWishDrawer(){
  const list=[...WISH].map(id=>DOORS.find(x=>x.id===id)).filter(Boolean);
  const body=document.getElementById('wishBody');if(!body)return;
  if(!list.length){body.innerHTML='<div class="drawer-empty">Р—РґРµСЃСЊ Р±СѓРґСѓС‚ СЃРѕС…СЂР°РЅС‘РЅРЅС‹Рµ РјРѕРґРµР»Рё<small>РќР°Р¶РјРёС‚Рµ РЅР° вќ¤ РІ РєР°СЂС‚РѕС‡РєРµ</small></div>';return;}
  body.innerHTML=list.map(d=>drawerCard(d,'wish')).join('')+'<button class="pdf-btn" onclick="shareWishlist()" style="margin-top:14px"><svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>РџРѕРґРµР»РёС‚СЊСЃСЏ РїРѕРґР±РѕСЂРєРѕР№</button>';
}
function renderCmpDrawer(){
  const list=[...CMP].map(id=>DOORS.find(x=>x.id===id)).filter(Boolean);
  const body=document.getElementById('cmpBody');if(!body)return;
  if(!list.length){body.innerHTML='<div class="drawer-empty">РЎСЂР°РІРЅРёС‚Рµ РґРѕ 3 РјРѕРґРµР»РµР№<small>РќР°Р¶РјРёС‚Рµ РЅР° в° РІ РєР°СЂС‚РѕС‡РєРµ</small></div>';return;}
  const rows=[
    ['РЎРµСЂРёСЏ',d=>d.series],
    ['РќР°Р·РЅР°С‡РµРЅРёРµ',d=>d.purpose],
    ['РћС‚РґРµР»РєР°',d=>FINISHES[d.finish]?.label||'-'],
    ['РЎС‚РµРєР»Рѕ',d=>{const m={none:'Р±РµР· РІСЃС‚Р°РІРєРё',rect:'РїСЂСЏРјРѕРµ',arch:'Р°СЂРєР°',mirror:'Р·РµСЂРєР°Р»Рѕ',forge:'РєРѕРІРєР°',vitrage:'РІРёС‚СЂР°Р¶',panel:'РїР°РЅРµР»СЊ'};return m[d.glass]||'-';}],
    ['Р¦РµРЅР° РѕС‚',d=>d.price.toLocaleString('ru-RU')+' в‚Ѕ'],
    ['РћСЃРѕР±РµРЅРЅРѕСЃС‚Рё',d=>(d.tags||[]).join(', ')]
  ];
  let html='<table class="cmp-table"><tr><th></th>';
  list.forEach(d=>{html+='<th>'+d.name+'<button class="cmp-rm" onclick="rmFromDrawer(\'cmp\','+d.id+')">Г—</button></th>';});
  html+='</tr>';
  rows.forEach(r=>{html+='<tr><td>'+r[0]+'</td>';list.forEach(d=>{html+='<td>'+r[1](d)+'</td>';});html+='</tr>';});
  html+='</table>';
  body.innerHTML=html;
}
function rmFromDrawer(t,id){
  if(t==='wish')WISH.delete(id);else CMP.delete(id);
  LS.set(t,t==='wish'?[...WISH]:[...CMP]);syncFabBadges();
  if(t==='wish')renderWishDrawer();else renderCmpDrawer();
}
function shareWishlist(){
  const ids=[...WISH].join(',');
  const url=location.origin+location.pathname+'?wish='+ids;
  if(navigator.share){navigator.share({title:'РњРѕСЏ РїРѕРґР±РѕСЂРєР° ARMORA',url});}
  else{navigator.clipboard?.writeText(url);toast('РЎСЃС‹Р»РєР° СЃРєРѕРїРёСЂРѕРІР°РЅР°');}
}

let toastTimer;
function toast(msg){
  const t=document.getElementById('sndToast');if(!t)return;
  t.querySelector('span').textContent=msg;
  t.classList.add('show');clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),1800);
}

function playDoorSound(){/* removed */}

/* TICKS / tickStep вЂ” СѓРґР°Р»РµРЅРѕ: order-ticker СЃРєСЂС‹С‚ display:none, С‚Р°Р№РјРµСЂ РІРїСѓСЃС‚СѓСЋ РєСЂСѓС‚РёР» DOM */

let __saveCalcT=0;
function saveCalcToURL(){
  if(!CALC.door)return;
  clearTimeout(__saveCalcT);
  __saveCalcT=setTimeout(()=>{
    const p=new URLSearchParams();
    p.set('door',CALC.door.id);
    ['base','ext','int','glass','seal','lock','handle'].forEach(k=>{if(CALC.sel[k])p.set(k,CALC.sel[k].name);});
    if(CALC.sel.extras.length)p.set('extras',CALC.sel.extras.map(e=>e.name).join('|'));
    try{ history.replaceState(null,'','?'+p.toString()); }catch(e){}
  },300);
}
function restoreFromURL(){
  const p=new URLSearchParams(location.search);
  const wish=p.get('wish');
  if(wish){wish.split(',').filter(Boolean).forEach(id=>WISH.add(+id));LS.set('wish',[...WISH]);}
  const did=+p.get('door');
  if(did&&DOORS.find(d=>d.id===did)){
    setTimeout(()=>{
      openCalc(did);
      ['base','ext','int','glass','seal','lock','handle'].forEach(k=>{
        const name=p.get(k);if(!name)return;
        const step=CALC_STEPS.find(s=>s.key===k);if(!step)return;
        const opt=step.options.find(o=>o.name===name);if(opt)CALC.sel[k]=opt;
      });
      const ex=p.get('extras');
      if(ex){const exStep=CALC_STEPS.find(s=>s.key==='extras');CALC.sel.extras=ex.split('|').map(n=>exStep.options.find(o=>o.name===n)).filter(Boolean);}
      renderCalc();
    },300);
  }
}

if(!renderCalc.__armoraWrapped){
  const _origRenderCalc=renderCalc;
  renderCalc=function(){
    _origRenderCalc.apply(this,arguments);
    saveCalcToURL();
    const nav=document.getElementById('calcNav');
    if(nav&&CALC.door&&!nav.querySelector('.pdf-btn')&&!nav.querySelector('.success')){
      const pdfBtn=document.createElement('button');
      pdfBtn.className='pdf-btn';pdfBtn.style.flex='0 0 auto';
      pdfBtn.innerHTML='<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>РЎРјРµС‚Р°';
      pdfBtn.onclick=downloadEstimate;
      nav.insertBefore(pdfBtn,nav.firstChild);
      const shareBtn=document.createElement('button');
      shareBtn.className='share-btn';shareBtn.style.flex='0 0 auto';
      shareBtn.innerHTML='<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>РЎСЃС‹Р»РєР°';
      shareBtn.onclick=()=>{navigator.clipboard?.writeText(location.href);toast('РЎСЃС‹Р»РєР° СЃРєРѕРїРёСЂРѕРІР°РЅР°');};
      nav.insertBefore(shareBtn,nav.firstChild);
    }
  };
  renderCalc.__armoraWrapped=true;
}

function downloadEstimate(){
  if(!CALC.door)return;
  const total=calcTotal();
  const lines=[
    'ARMORA В· Р Р°СЃС‡С‘С‚ СЃС‚РѕРёРјРѕСЃС‚Рё',
    'в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ',
    'РњРѕРґРµР»СЊ: '+CALC.door.name+' В· '+CALC.door.series,
    'Р”Р°С‚Р°: '+new Date().toLocaleDateString('ru-RU'),
    'в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ',
    'РЎРџР•Р¦РР¤РРљРђР¦РРЇ:',''
  ];
  const labels={base:'РЎРµСЂРёСЏ',ext:'РћС‚РґРµР»РєР° СЃРЅР°СЂСѓР¶Рё',int:'РћС‚РґРµР»РєР° РІРЅСѓС‚СЂРё',glass:'Р’СЃС‚Р°РІРєР°',seal:'РЈРїР»РѕС‚РЅРµРЅРёРµ',lock:'Р—Р°РјРѕРє',handle:'Р¤СѓСЂРЅРёС‚СѓСЂР°'};
  Object.keys(labels).forEach(k=>{
    const v=CALC.sel[k];if(!v)return;
    lines.push((labels[k]+':').padEnd(22,' ')+' '+v.name+'  '+(v.price?'+'+v.price.toLocaleString('ru-RU')+' в‚Ѕ':'РІРєР»СЋС‡РµРЅРѕ'));
  });
  if(CALC.sel.extras.length){
    lines.push('','Р”РћРџ. РћРџР¦РР:');
    CALC.sel.extras.forEach(e=>lines.push('  В· '+e.name+'  +'+e.price.toLocaleString('ru-RU')+' в‚Ѕ'));
  }
  lines.push('в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ','РРўРћР“Рћ (РѕСЂРёРµРЅС‚РёСЂ): '+total.toLocaleString('ru-RU')+' в‚Ѕ','','РўРѕС‡РЅР°СЏ С†РµРЅР° вЂ” РїРѕСЃР»Рµ Р±РµСЃРїР»Р°С‚РЅРѕРіРѕ Р·Р°РјРµСЂР°.','Р“Р°СЂР°РЅС‚РёСЏ 10 Р»РµС‚ В· РџСЂРѕРёР·РІРѕРґСЃС‚РІРѕ РІ РљР»РёРЅСѓ');
  const blob=new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='ARMORA_smeta_'+CALC.door.name+'_'+Date.now()+'.txt';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1500);
  toast('РЎРјРµС‚Р° СЃРєР°С‡Р°РЅР°');
}

const _origRender=render;
render=function(){_origRender.apply(this,arguments);syncFabBadges();};

restoreFromURL();
syncFabBadges();

/* === Custom glass dropdown sort === */
function _sortMenu(){return document.querySelector('.sort-glass-menu');}
function closeSortMenu(){
  const sg=document.getElementById('sortGlass');
  const m=_sortMenu();
  sg&&sg.classList.remove('open');
  m&&m.classList.remove('open');
}
function toggleSortMenu(e){
  e&&e.stopPropagation();
  const sg=document.getElementById('sortGlass');
  const menu=_sortMenu();
  const btn=sg.querySelector('.sort-glass-btn');
  const willOpen=!sg.classList.contains('open');
  if(willOpen){
    if(menu.parentElement!==document.body)document.body.appendChild(menu);
    const r=btn.getBoundingClientRect();
    menu.style.top=(r.bottom+6)+'px';
    menu.style.left=r.left+'px';
    menu.style.width=r.width+'px';
    sg.classList.add('open');menu.classList.add('open');
  } else {
    closeSortMenu();
  }
}
function pickSort(val,label){
  document.getElementById('sortSel').value=val;
  document.getElementById('sortLabel').textContent=label;
  document.querySelectorAll('.sort-glass-menu li').forEach(li=>li.classList.toggle('on',li.dataset.val===val));
  closeSortMenu();
  render();
}
document.addEventListener('click',e=>{
  const sg=document.getElementById('sortGlass');if(!sg)return;
  const menu=_sortMenu();
  if(!sg.contains(e.target) && (!menu || !menu.contains(e.target))){
    closeSortMenu();
  }
});
window.addEventListener('scroll',()=>{
  const sg=document.getElementById('sortGlass');
  if(sg && sg.classList.contains('open'))closeSortMenu();
},{passive:true});

/* === РџР»Р°РІРЅРѕСЃС‚СЊ СЃРєСЂРѕР»Р»Р°: РіР»СѓС€РёРј С‚СЏР¶С‘Р»С‹Рµ СЌС„С„РµРєС‚С‹ РІРѕ РІСЂРµРјСЏ РїСЂРѕРєСЂСѓС‚РєРё === */
(function(){
  const root=document.documentElement;
  let t=0, scrolling=false, rafId=0;
  const onScroll=()=>{
    if(!scrolling){scrolling=true;root.classList.add('is-scrolling');}
    clearTimeout(t);
    t=setTimeout(()=>{
      scrolling=false;
      root.classList.remove('is-scrolling');
    },180);
  };
  window.addEventListener('scroll',()=>{
    if(rafId)return;
    rafId=requestAnimationFrame(()=>{rafId=0;onScroll();});
  },{passive:true});
  // wheel вЂ” СЃР°РјРѕРµ СЂР°РЅРЅРµРµ СЃРѕР±С‹С‚РёРµ, РїРѕРјРѕРіР°РµС‚ РјРіРЅРѕРІРµРЅРЅРѕ РѕС‚РєР»СЋС‡РёС‚СЊ СЌС„С„РµРєС‚С‹
  window.addEventListener('wheel',onScroll,{passive:true});
  window.addEventListener('touchmove',onScroll,{passive:true});
})();

