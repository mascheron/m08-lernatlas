import re,io
T=open('/home/claude/lernatlas-betreuungsrecht/index.html',encoding='utf-8').read().split('\n')
L=lambda a,b:'\n'.join(T[a-1:b])  # 1-basiert inklusiv
head=L(1,278); engine=L(1059,1386); footer=L(1389,len(T))
# --- Kopf ---
head=head.replace('<title>Betreuungsrecht Lernatlas</title>','<title>Modul 8 Lernatlas · Sozialrecht 1</title>')
head=head.replace('Betreuungsrecht Lernatlas<small>BGB §§ 1814–1888 · FamFG · Module 1–11</small>','Modul 8 Lernatlas<small>Sozialrecht 1 · SGB I · II · V · VI · X · XI · XII · XIV · SGG · Einheiten 1–10</small>')
head=head.replace('Suchen: 1821, § 1835–1838, Wunsch, Sperrvereinbarung …','Suchen: § 11b, 41, Freibetrag, Widerspruch, Pflegegrad …')
head=head.replace('title="Linke Spalte ein- oder ausblenden"','title="Linke Spalte ein- oder ausblenden (Taste B)"')
head=head.replace('aria-controls="fBody">Filter</button>','aria-controls="fBody" title="Themen- und Filterleiste (Taste T)">Filter</button>')
ren=[('bestellung','grund'),('fuehrung','system'),('aufsicht','verfahren'),('wohnen','mitwirkung'),('zwang','rechtsschutz'),('kommunikation','zugang'),('sozial','leist'),('vermoegen','eink'),('ende','sozhilfe'),('haftung','entsch'),('gesundheit','kv'),('famfg','rv'),('ref','pv'),('sonst','faelle'),('pflegschaft','pfad')]
for a,b in ren: head=head.replace('--c-%s:'%a,'--c-%s:'%b)
css='''
a[data-go]{cursor:pointer;color:var(--accent);text-decoration:underline;text-decoration-style:dotted;text-underline-offset:2px}
a[data-go]:hover{background:var(--accent-soft)}
a.ext{color:var(--muted);text-decoration:underline;text-decoration-style:dotted;text-underline-offset:2px}
.mark{margin:12px 0;padding:10px 14px;border-radius:10px;border-left:4px solid var(--c);background:color-mix(in srgb,var(--c) 9%,var(--panel));max-width:78ch}
details{margin:12px 0;border:1px solid var(--line);border-radius:12px;background:var(--panel2);max-width:78ch}
details>summary{cursor:pointer;padding:9px 14px;font-weight:600;font-size:13.5px}
details>summary:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
details[open]>summary{border-bottom:1px dashed var(--line)}
details>ol,details>p,details>ul{margin:10px 14px}
kbd{font:600 11px var(--f-mono);border:1px solid var(--line);border-bottom-width:2px;border-radius:5px;padding:0 5px;background:var(--panel)}
.prog{height:9px;border-radius:99px;background:var(--line);overflow:hidden;max-width:420px;margin:6px 0 10px}
.prog i{display:block;height:100%;background:var(--ok);border-radius:99px}
.cl{display:flex;flex-direction:column;gap:5px;max-width:78ch;margin:8px 0}
.cl button{display:flex;gap:8px;align-items:center;text-align:left;border:1px solid var(--line);border-left:4px solid var(--c);border-radius:9px;background:var(--panel);padding:6px 10px;cursor:pointer;font-size:13px}
.cl button:hover{background:var(--accent-soft)}
.cl button .ck{width:16px;color:var(--ok);font-weight:700}
.cl button small{margin-left:auto;color:var(--muted);font-family:var(--f-mono);font-size:11px}
.filters.off{display:none}
@media (max-width:700px){.filters.off{display:flex}}
'''
head=head.replace('</style>',css+'</style>',1)
data=''.join(open('/home/claude/m08-lernatlas/src/%s.js'%f,encoding='utf-8').read()+'\n' for f in ['d0','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d00'])
# --- Engine ---
e=engine.replace("'bl-","'m8-")
assert 'repeat(11,' in e
e=e.replace('repeat(11,','repeat(${MODS.length},')
e=e.replace('Zuordnung der Module 1–11','Zuordnung der Einheiten 1–10')
e=e.replace("Themen × Module (Anzahl Normen, Klick filtert)","Themen × Module (Anzahl Lerninhalte, Klick filtert)")
e=e.replace("hasContent=!!n.b;","hasContent=!!n.b;")
e=e.replace("const CONTENT=NODES.filter(n=>n.id!=='root'&&n.hasContent);","const CONTENT=NODES.filter(n=>n.id!=='root'&&n.hasContent&&!hasKids(n.id)&&n.kind!=='einheit');\nconst CSET=new Set(CONTENT.map(n=>n.id));\nconst ORD={};NODES.forEach((n,i)=>{ORD[n.id]=i;});")
e=e.replace("n.src==='BGB'&&n.nums.length&&(!vis||own.has(n.id))).sort((a,b)=>a.nums[0]-b.nums[0]);","CSET.has(n.id)&&(!vis||own.has(n.id)));")
e=e.replace("hit=own?[...own].filter(id=>byId[id].hasContent).length:total","hit=own?[...own].filter(id=>CSET.has(id)).length:total")
e=e.replace("von ${total} Normen","von ${total} Lerninhalten")
e=e.replace("Tipp: Paragrafennummer (1821), Wortteil (vermög) oder Bereich (1835-1838).","Tipp: Paragrafennummer (11b), Wortteil (vermög) oder Stichwort (Widerspruch).")
e=e.replace("<h4>Verwandte Normen</h4>","<h4>Verwandte Themen und Normen</h4>")
e=e.replace("'<div class=\"empty\"><b>Keine Treffer</b>Filter lockern oder zurücksetzen.</div>'","'<div class=\"empty\"><b>Keine Treffer</b>Filter lockern oder zurücksetzen.</div>'")
# regHtml entfernen
i=e.index('function regHtml(){');j=e.index('function seqIds()')
e=e[:i]+e[j:]
e=e.replace("  if(n.kind==='reg')h+=regHtml();\n","")
e=e.replace("if(id!=='root'&&n.hasContent&&n.kind!=='mods'&&n.kind!=='reg')h+=","if(CSET.has(id))h+=")
e=e.replace("  if(n.b)h+=`<div>${n.b}</div>`;","  if(id==='root'||id==='t_pfad'||n.kind==='einheit')h+=pfadHtml(id);\n  if(n.b)h+=`<div>${autolink(n.b,id)}</div>`;\n  if(n.kind==='einheit')h+=einheitHtml(n);")
e=e.replace("<p>Paragrafenüberschriften vor der Prüfung am aktuellen Gesetzestext abgleichen. Die Zusammenfassungen ersetzen weder das Gesetz noch eine Rechtsberatung.</p>","<p>Rechtsstand dieser Seite: 10. November 2026 (einschließlich der SGB-II-Reform zum 1. Juli 2026). Gesetzestexte vor der Prüfung am aktuellen Stand abgleichen. Die Zusammenfassungen und Lösungshinweise ersetzen weder das Gesetz noch eine Rechtsberatung.</p>")
assert 'autolink' in e and 'pfadHtml' in e
helpers=r'''
/* ===== Autolink: Paragrafen und Verweise ===== */
const KEY={};
function addKey(k,id){if(!KEY[k])KEY[k]=id;}
NODES.forEach(n=>{if(n.p==='Fall')return;(n.k||[]).forEach(k=>addKey(k,n.id));});
NODES.forEach(n=>{ // Zusatz: Schlüssel aus der Paragrafenangabe ableiten
  if(n.p==='Fall'||n.kind==='einheit'||!n.p)return;
  const re=/(§§?|Art\.)\s*([0-9a-z ,–-]+?)\s+(SGB [IVX]+|GG|SGG|BGB)\b/g;let m;
  while((m=re.exec(n.p))){const bk=m[3];m[2].split(/\s*,\s*/).forEach(part=>{const r=part.split(/\s*[–-]\s*/);if(r.length===2&&/^\d+$/.test(r[0])&&/^\d+$/.test(r[1])&&+r[1]-+r[0]<12){for(let x=+r[0];x<=+r[1];x++)addKey(bk+'|'+x,n.id);}else r.forEach(x=>{if(/^\d+[a-z]?$/.test(x))addKey(bk+'|'+x,n.id);});});}
});
const BOOKS='SGB\\s+[IVX]+|SGG|BGB|GG|ZPO|WoGG';
const SLUG={'SGB I':'sgb_1','SGB II':'sgb_2','SGB III':'sgb_3','SGB IV':'sgb_4','SGB V':'sgb_5','SGB VI':'sgb_6','SGB VII':'sgb_7','SGB VIII':'sgb_8','SGB IX':'sgb_9','SGB X':'sgb_10','SGB XI':'sgb_11','SGB XII':'sgb_12','SGB XIV':'sgb_14','SGG':'sgg','BGB':'bgb','GG':'gg','ZPO':'zpo','WoGG':'wogg'};
function extHref(bk,num){const s=SLUG[bk];if(!s)return null;return 'https://www.gesetze-im-internet.de/'+s+'/'+(bk==='GG'?'art_':'__')+num+'.html';}
function linkNum(bk,num,txt,cur){
  const id=KEY[bk+'|'+num];
  if(id&&id!==cur)return `<a data-go="${id}" role="button" tabindex="0" title="Zur Erläuterung">${txt}</a>`;
  if(id===cur)return txt;
  const h=extHref(bk,num);return h?`<a class="ext" href="${h}" target="_blank" rel="noopener" title="Gesetzestext (gesetze-im-internet.de)">${txt}</a>`:txt;
}
function autolinkText(t,cur,dflt){
  t=t.replace(new RegExp('(§§?\\s*)((?:\\d+[a-z]?)(?:\\s*(?:Abs\\.|S\\.|Satz|Nr\\.)\\s*\\d+[a-z]?)*(?:\\s*(?:,|und|bis|–|-)\\s*\\d+[a-z]?(?:\\s*(?:Abs\\.|S\\.|Satz|Nr\\.)\\s*\\d+[a-z]?)*)*)(?:\\s+('+BOOKS+')(?![A-Za-z]))?','g'),(m,pre,list,bk)=>{
    if(!bk&&!dflt)return m;
    const bkn=(bk||dflt).replace(/\s+/g,' ');
    const out=list.split(/(\d+[a-z]?)/).map((part,i,arr)=>{
      if(i%2===0)return part;
      const prev=arr[i-1];if(/(Abs\.|S\.|Satz|Nr\.)\s*$/.test(prev))return part;
      return linkNum(bkn,part,part,cur);
    }).join('');
    return pre+out+(bk?' '+bk:'')+(list.match(/\s+$/)?'':'');});
  t=t.replace(/(Art\.\s*)(\d+[a-z]?)((?:\s*Abs\.\s*\d+)?\s+GG)\b/g,(m,pre,num,post)=>pre+linkNum('GG',num,num,cur)+post);
  t=t.replace(/\b(Abschlussfall|Fall)\s+(\d+)\.(\d+)/g,(m,w,a,b)=>{const id='f'+a+'_'+b;return byId[id]&&id!==cur?`<a data-go="${id}" role="button" tabindex="0" title="Zum Fall">${m}</a>`:m;});
  t=t.replace(/\bEinheit\s+(\d+)\b/g,(m,a)=>{const id='e'+a;return byId[id]&&id!==cur?`<a data-go="${id}" role="button" tabindex="0" title="Zur Einheit">${m}</a>`:m;});
  return t;
}
const SRCBOOK={SGBI:'SGB I',SGBII:'SGB II',SGBV:'SGB V',SGBVI:'SGB VI',SGBX:'SGB X',SGBXI:'SGB XI',SGBXII:'SGB XII',SGBXIV:'SGB XIV',SGG:'SGG',GG:'GG'};
function autolink(html,cur){
  const cn=byId[cur],dflt=(cn&&cn.p!=='Fall'&&SRCBOOK[cn.src])||null;let depthA=0;
  return html.split(/(<[^>]+>)/).map(tok=>{
    if(tok[0]==='<'){if(/^<a[\s>]/i.test(tok))depthA++;else if(/^<\/a>/i.test(tok))depthA=Math.max(0,depthA-1);return tok;}
    return depthA?tok:autolinkText(tok,cur,dflt);
  }).join('');
}
/* ===== Lernpfad ===== */
function orderIds(){const seen=new Set(),out=[];MODS.forEach(m=>CONTENT.filter(n=>n.m.includes(m.n)).forEach(n=>{if(!seen.has(n.id)){seen.add(n.id);out.push(n.id);}}));CONTENT.forEach(n=>{if(!seen.has(n.id)){seen.add(n.id);out.push(n.id);}});return out;}
function nextUnlearned(from){const o=orderIds(),i=from?o.indexOf(from):-1;for(let k=1;k<=o.length;k++){const id=o[(i+k+o.length)%o.length];if(!learned.has(id))return id;}return null;}
function pfadHtml(id){
  const o=orderIds(),done=o.filter(x=>learned.has(x)).length,pct=o.length?Math.round(100*done/o.length):0;
  const nx=nextUnlearned(CSET.has(sel)?sel:null);
  let h=`<div class="box" style="max-width:78ch"><h3>Dein Lernstand</h3><div><b>${done}</b> von ${o.length} Lerninhalten gelernt (${pct} %)</div><div class="prog"><i style="width:${pct}%"></i></div>`;
  h+=nx?`<button class="btn on" data-go="${nx}" style="background:var(--accent);border-color:var(--accent);color:var(--accent-fg)">Weiter lernen: ${esc(byId[nx].title)} →</button>`:`<b>Alles gelernt – stark!</b>`;
  if(id==='root')h+=` <button class="btn" data-go="e1">Mit Einheit 1 starten</button>`;
  return h+'</div>';
}
function einheitHtml(n){
  const u=n.m[0],E=EH[u]||{};
  const items=CONTENT.filter(x=>x.m.includes(u));
  const done=items.filter(x=>learned.has(x.id)).length,pct=items.length?Math.round(100*done/items.length):0;
  let h=`<div class="box focus"><h3>Lernziel und Überblick</h3><p>${esc(E.z||'')}</p></div>`;
  if(E.ks&&E.ks.length)h+=`<div class="box"><h3>Kernsätze</h3><ul>${E.ks.map(k=>`<li>${autolinkText(esc(k),n.id)}</li>`).join('')}</ul></div>`;
  h+=`<div class="box" style="max-width:78ch"><h3>Inhalte dieser Einheit (${done}/${items.length} gelernt)</h3><div class="prog"><i style="width:${pct}%"></i></div></div><div class="cl">${items.map(x=>`<button data-go="${x.id}" style="--c:var(--c-${x.th})"><span class="ck">${learned.has(x.id)?'✓':''}</span><span>${esc(x.title)}</span><small>${esc(x.p&&x.p!=='Fall'?x.p:(x.p==='Fall'?'Fall':''))}</small></button>`).join('')}</div>`;
  if(E.kq&&E.kq.length)h+=`<h4>Kontrollfragen</h4>`+E.kq.map((q,i)=>`<div class="box quiz"><h3>Frage ${i+1}</h3><p><b>${esc(q[0])}</b></p><button class="btn rev" data-act="rev">Antwort zeigen</button><div class="ans"><p>${autolinkText(esc(q[1]),n.id)}</p></div></div>`).join('');
  const pv=byId['e'+(u-1)],nx=byId['e'+(u+1)];
  h+=`<div class="nav">${pv?`<button class="btn" data-go="${pv.id}">← Einheit ${u-1}</button>`:'<span></span>'}${nx?`<button class="btn" data-go="${nx.id}">Einheit ${u+1} →</button>`:'<span></span>'}</div>`;
  return h;
}
'''
e=e.replace('/* ===== Detail ===== */',helpers+'\n/* ===== Detail ===== */',1)
# Anker per Tastatur
e=e.replace("$('detail').addEventListener('keydown',e=>{if((e.key==='Enter')&&e.target.matches('tr[data-go]'))select(e.target.dataset.go,true);});","$('detail').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('tr[data-go],a[data-go]')){e.preventDefault();select(e.target.dataset.go,true);}});")
# Tasten T und B
keys=r'''
document.addEventListener('keydown',e=>{
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  const tg=e.target,tn=(tg&&tg.tagName)||'';
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(tn)||(tg&&tg.isContentEditable))return;
  if(e.key==='t'||e.key==='T'){e.preventDefault();toggleFilters();}
  else if(e.key==='b'||e.key==='B'){e.preventDefault();setCollapsed(!mainEl.classList.contains('collapsed'));}
});
function toggleFilters(){
  const f=document.querySelector('.filters');
  const mob=window.matchMedia&&window.matchMedia('(max-width:700px)').matches;
  if(mob){const o=!f.classList.contains('open');f.classList.toggle('open',o);f.classList.remove('off');$('fToggle').setAttribute('aria-expanded',String(o));toast(o?'Filter eingeblendet':'Filter ausgeblendet');}
  else{const off=f.classList.toggle('off');LS.set('m8-foff',off?'1':'0');toast(off?'Themenleiste ausgeblendet (T)':'Themenleiste eingeblendet (T)');}
}
'''
e=e.replace("/* Spalte ausblenden und Breite */",keys+"\n/* Spalte ausblenden und Breite */",1)
e=e.replace("if(LS.get('m8-collapsed')==='1')setCollapsed(true);","if(LS.get('m8-collapsed')==='1')setCollapsed(true);if(LS.get('m8-foff')==='1')document.querySelector('.filters').classList.add('off');")
# Stand
footer=footer.replace('Stand: Oktober 2026','Stand: November 2026')
out=head+'\n'+data+'\n'+e+'\n</script>\n\n'+footer
open('index.html','w',encoding='utf-8').write(out)
print(len(out))
