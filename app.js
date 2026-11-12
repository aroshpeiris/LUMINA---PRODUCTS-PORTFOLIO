/* ============ EDIT THIS SECTION ============
   whatsapp: your number with country code, digits only (e.g. "94771234567").
   Prices are PLACEHOLDERS: replace with your real prices.
   Real photos: put files in /images and add img:"images/name.jpg" to a product. */
const CONFIG={whatsapp:"94763621801"};
const P=[
 {id:1,name:"Christmas Bauble Set",cat:"Christmas",price:850,badge:"Seasonal",kind:"bauble",desc:"Shiny baubles to bring color and sparkle to your tree.",tags:["Set of 12","Fragile"],colors:[["Red","#A83232"],["Forest Green","#063D2A"],["Gold","#E0A91B"]]},
 {id:2,name:"Warm Fairy Lights",cat:"Christmas",price:1200,badge:"Best Seller",kind:"lights",desc:"A soft, warm glow for your tree, window or wall.",tags:["10 m string","Warm white"],colors:[["Forest Green","#063D2A"],["Gold","#E0A91B"],["Cream","#CDBF9C"]]},
 {id:3,name:"Signature Gift Box",cat:"Gifts",price:2400,badge:"Gift Pick",kind:"gift",desc:"A beautifully wrapped keepsake for birthdays, anniversaries and thank-yous.",tags:["Gift-ready","Ribbon"],colors:[["Forest Green","#063D2A"],["Cream","#CDBF9C"],["Gold","#E0A91B"]]},
 {id:4,name:"Pillar Candle Set",cat:"Home Décor",price:1850,badge:"Signature",kind:"candle",desc:"Soft, calming light for tables, shelves and quiet evenings.",tags:["Set of 3","Long burn"],colors:[["Cream","#CDBF9C"],["Gold","#E0A91B"],["Forest Green","#2F6B4E"]]},
 {id:5,name:"Decorative Lantern",cat:"Home Décor",price:1450,badge:"New",kind:"lantern",desc:"A glowing lantern for windows, tables and entryways.",tags:["Glass panels","Warm glow"],colors:[["Gold","#E0A91B"],["Charcoal","#242424"],["Forest Green","#2F6B4E"]]},
 {id:6,name:"Celebration Centerpiece",cat:"Celebrations",price:2750,badge:"Premium",kind:"vase",desc:"A refined table centerpiece for birthdays, anniversaries and family gatherings.",tags:["Table décor","Statement"],colors:[["Cream","#CDBF9C"],["Forest Green","#2F6B4E"],["Gold","#E0A91B"]]},
 {id:7,name:"Wall Cross",cat:"Faith-Inspired",price:3200,badge:"Faith-Inspired",kind:"cross",desc:"An elegant cross for a prayer corner, hallway or bedroom wall.",tags:["Wall mount","Elegant"],colors:[["Gold","#E0A91B"],["Walnut","#6B4A32"],["Cream","#CDBF9C"]]},
 {id:8,name:"Star of Hope Ornament",cat:"Faith-Inspired",price:950,badge:"Faith-Inspired",kind:"star",desc:"A shining star to hang at home in seasons of light and hope.",tags:["Hanging","Reusable"],colors:[["Gold","#E0A91B"],["Cream","#CDBF9C"],["Forest Green","#2F6B4E"]]}
];
const CATS=["All","Christmas","Gifts","Home Décor","Celebrations","Faith-Inspired"];
/* ============ APP ============ */
const $=s=>document.querySelector(s);
const rs=n=>"Rs. "+n.toLocaleString("en-LK");
const sh=(h,a)=>{const n=parseInt(h.slice(1),16),f=c=>Math.max(0,Math.min(255,Math.round(c*(1+a))));return`rgb(${f(n>>16)},${f(n>>8&255)},${f(n&255)})`};
let store={bag:[],saved:[],info:{name:"",phone:"",area:"",other:"",address:""}};
try{store=Object.assign(store,JSON.parse(localStorage.getItem("lumina")||"{}"))}catch(e){}
const persist=()=>{try{localStorage.setItem("lumina",JSON.stringify(store))}catch(e){}};
const S={cat:"All",q:"",tab:"shop",pick:{}};
const find=id=>P.find(p=>p.id===id);
const ci=p=>S.pick[p.id]||0;
const buzz=()=>{try{navigator.vibrate&&navigator.vibrate(12)}catch(e){}};

function art(p,c){
 if(p.img)return`<img src="${p.img}" alt="${p.name}" loading="lazy">`;
 const d=sh(c,-.4),l=sh(c,.3),g="#FFC928",w=b=>`<svg viewBox="0 0 300 220" role="img" aria-label="${p.name}">${b}</svg>`,sd='<ellipse cx="150" cy="204" rx="100" ry="9" fill="#0003"/>';
 if(p.kind==="bauble"){const b=(x,y,r)=>`<rect x="${x-9}" y="${y-r-12}" width="18" height="14" rx="3" fill="${g}"/><circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${d}" stroke-width="3" opacity=".4"/><ellipse cx="${x-r*.35}" cy="${y-r*.4}" rx="${r*.22}" ry="${r*.34}" fill="#fff" opacity=".45" transform="rotate(30 ${x-r*.35} ${y-r*.4})"/>`;return w(sd+b(100,125,62)+b(200,140,46))}
 if(p.kind==="lights")return w(`<path d="M10 40Q75 120 150 70T290 60" fill="none" stroke="#2b2b2b" stroke-width="3"/>`+[[40,88],[85,106],[130,92],[175,76],[220,86],[262,72]].map(([x,y],i)=>`<circle cx="${x}" cy="${y+18}" r="22" fill="${g}" opacity=".2"/><circle cx="${x}" cy="${y+18}" r="${i%2?11:13}" fill="${i%2?l:g}"/><rect x="${x-4}" y="${y}" width="8" height="8" fill="#2b2b2b"/>`).join(""));
 if(p.kind==="candle"){const k=(x,h,wd)=>`<rect x="${x-wd/2}" y="${200-h}" width="${wd}" height="${h}" rx="4" fill="${c}"/><rect x="${x-wd/2}" y="${200-h}" width="${wd*.35}" height="${h}" rx="3" fill="${l}" opacity=".45"/><ellipse cx="${x}" cy="${200-h}" rx="${wd/2}" ry="7" fill="${l}"/><rect x="${x-1.5}" y="${200-h-14}" width="3" height="12" fill="#333"/><path d="M${x} ${200-h-52}c9 14 13 20 13 28a13 13 0 0 1-26 0c0-8 5-12 7-18 2 4 3 6 6 7z" fill="${g}"/><circle cx="${x}" cy="${200-h-30}" r="30" fill="${g}" opacity=".16"/>`;return w(sd+k(100,100,46)+k(160,140,52)+k(215,80,40))}
 if(p.kind==="cross")return w(sd+`<rect x="128" y="22" width="44" height="176" rx="6" fill="${c}"/><rect x="62" y="64" width="176" height="44" rx="6" fill="${c}"/><rect x="128" y="22" width="14" height="176" rx="5" fill="${l}" opacity=".45"/><rect x="62" y="64" width="176" height="12" rx="5" fill="${l}" opacity=".45"/><circle cx="150" cy="86" r="10" fill="${d}" opacity=".5"/>`);
 if(p.kind==="lantern")return w(sd+`<path d="M110 40a40 40 0 0 1 80 0" fill="none" stroke="${d}" stroke-width="5"/><rect x="104" y="40" width="92" height="14" rx="5" fill="${c}"/><path d="M110 54h80l8 128h-96z" fill="${g}" opacity=".35"/><path d="M110 54h80l8 128h-96z" fill="none" stroke="${c}" stroke-width="6"/><path d="M150 54v128" stroke="${c}" stroke-width="4"/><rect x="96" y="182" width="108" height="16" rx="5" fill="${c}"/><path d="M150 100c8 12 12 16 12 24a12 12 0 0 1-24 0c0-7 4-10 6-16 2 3 3 5 6 6z" fill="${g}"/>`);
 if(p.kind==="star")return w(`<path d="M150 0v44" stroke="#666" stroke-width="3"/><path d="m150 48 20 42 46 6-34 32 9 46-41-23-41 23 9-46-34-32 46-6z" fill="${c}"/><path d="m150 48 20 42 46 6-34 32-32-30z" fill="${l}" opacity=".5"/><circle cx="150" cy="112" r="8" fill="#fff" opacity=".4"/>`);
 if(p.kind==="vase")return w(sd+`<path d="M110 100c-18 30-14 74 6 98h68c20-24 24-68 6-98z" fill="${c}"/><path d="M110 100c-18 30-14 74 6 98h20c-18-26-20-66-4-98z" fill="${l}" opacity=".4"/><rect x="118" y="88" width="64" height="14" rx="5" fill="${d}"/><path d="M135 90C120 60 110 40 100 30M150 90V22M165 90c15-30 25-50 35-60" stroke="#3f5b45" stroke-width="4" fill="none"/>`+[[100,28],[150,18],[200,28],[125,52],[178,52]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="14" fill="${g}"/><circle cx="${x}" cy="${y}" r="6" fill="#fff" opacity=".6"/>`).join(""));
 return w(sd+`<rect x="70" y="100" width="160" height="98" rx="8" fill="${c}"/><rect x="62" y="84" width="176" height="30" rx="8" fill="${l}"/><rect x="138" y="84" width="24" height="114" fill="${g}"/><path d="M150 84C120 40 80 58 112 84zM150 84c30-44 70-26 38 0z" fill="${g}"/><circle cx="150" cy="84" r="9" fill="${d}"/>`)}
const tint=c=>`background:linear-gradient(160deg,${sh(c,.18)},${sh(c,-.38)})`;
const heartSvg='<svg viewBox="0 0 24 24"><path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/></svg>';

function renderChips(){$("#chips").innerHTML=CATS.map(c=>`<button class="chip" data-cat="${c}" aria-pressed="${c===S.cat}">${c}</button>`).join("")}
function renderGrid(){
 const list=P.filter(p=>(S.tab!=="saved"||store.saved.includes(p.id))&&(S.cat==="All"||p.cat===S.cat)&&(p.name+p.cat+p.tags.join()).toLowerCase().includes(S.q.trim().toLowerCase()));
 $("#grid").innerHTML=list.length?list.map(p=>{const c=p.colors[ci(p)][1];
  return`<div class="card" data-open="${p.id}" role="button" tabindex="0" aria-label="${p.name}, ${rs(p.price)}">
  <div class="pic" style="${tint(c)}">${art(p,c)}<span class="badge">${p.badge}</span>
  <button class="heart" data-save="${p.id}" aria-label="Save ${p.name}" aria-pressed="${store.saved.includes(p.id)}"><span>${heartSvg}</span></button></div>
  <div class="meta"><h3>${p.name}</h3><small>${p.cat}</small><div class="buy"><b>${rs(p.price)}</b><button class="plus" data-quick="${p.id}" aria-label="Add ${p.name} to bag">+</button></div></div></div>`}).join("")
  :`<p class="empty">${S.tab==="saved"?"Nothing saved yet. Tap the heart on a decoration you love.":"No decorations match your search. Try another word or category."}</p>`}
function renderCount(){const n=store.bag.reduce((a,b)=>a+b.q,0);const e=$("#cnt");e.hidden=!n;e.textContent=n}
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("on"),2200)}

/* sheet */
const sheet=$("#sheet"),scrim=$("#scrim");let lastFocus=null;
function openSheet(html){
 $("#sheetBody").innerHTML=html;
 if(sheet.hidden){lastFocus=document.activeElement;sheet.hidden=false;sheet.style.transform="";requestAnimationFrame(()=>requestAnimationFrame(()=>{sheet.classList.add("on");scrim.classList.add("on")}));document.body.classList.add("lock")}
 const f=$("#sheetBody").querySelector("button");f&&f.focus({preventScroll:true})}
function closeSheet(){
 if(sheet.hidden)return;sheet.classList.remove("on");scrim.classList.remove("on");document.body.classList.remove("lock");
 setTimeout(()=>{sheet.hidden=true;$("#sheetBody").innerHTML=""},320);setTab(S.tab==="saved"?"saved":"shop",true);lastFocus&&lastFocus.focus&&lastFocus.focus({preventScroll:true})}
let sel={id:0,qty:1};
function productSheet(id,keep){
 const p=find(id);if(!keep)sel={id,qty:1};const i=ci(p),[cn,c]=p.colors[i];
 openSheet(`<button class="x" data-close aria-label="Close">×</button>
 <div class="big" style="${tint(c)}">${art(p,c)}<span class="badge" style="left:16px;top:16px">${p.badge}</span></div>
 <div class="pbody"><div class="prow"><h2>${p.name}</h2><span class="pprice">${rs(p.price)}</span></div>
 <p>${p.desc}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
 <div class="lbl">Color: ${cn}</div><div class="swatches">${p.colors.map((x,k)=>`<button class="sw" data-color="${k}" aria-pressed="${k===i}"><i style="background:${x[1]}"></i>${x[0]}</button>`).join("")}</div></div>
 <div class="stick"><div class="qty"><button data-qty="-1" aria-label="Fewer">−</button><b>${sel.qty}</b><button data-qty="1" aria-label="More">+</button></div>
 <button class="cta" data-addsel>Add to Bag · ${rs(p.price*sel.qty)}</button></div>`)}
function addToBag(id,c,q){const f=store.bag.find(x=>x.id===id&&x.c===c);f?f.q+=q:store.bag.push({id,c,q});persist();renderCount();buzz()}
const total=()=>store.bag.reduce((a,b)=>a+b.q*find(b.id).price,0);
const AREAS=["Panadura","Moratuwa","Nearby area"];
const esc=s=>String(s||"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
function bagSheet(){
 const b=store.bag;
 openSheet(`<button class="x" data-close aria-label="Close">×</button><h2 class="sh-title">Your bag</h2>`+(b.length?
 b.map((x,i)=>{const p=find(x.id);return`<div class="line"><span class="sw2" style="${tint(p.colors[x.c][1])}"></span><div><b>${p.name}</b><small>${p.colors[x.c][0]} · ${rs(p.price)}</small></div><div class="step"><button data-step="${i}:-1" aria-label="Fewer ${p.name}">−</button><b>${x.q}</b><button data-step="${i}:1" aria-label="More ${p.name}">+</button></div></div>`}).join("")
 +`<div class="sum"><span>Items total</span><span>${rs(total())}</span></div><p class="fine">Delivery charge is separate and paid by the customer. For nearby areas we confirm availability and the charge first. We also confirm stock and your delivery date.</p>
 <div class="form"><div class="lbl2">Delivery details</div>
 <label class="fld">Your name<input data-f="name" value="${esc(store.info.name)}" autocomplete="name" placeholder="Full name"></label>
 <label class="fld">Phone number<input data-f="phone" value="${esc(store.info.phone)}" type="tel" inputmode="tel" autocomplete="tel" placeholder="07X XXX XXXX"></label>
 <div class="lbl2" style="margin-top:6px">Delivery area</div>
 <div class="areas" role="group" aria-label="Delivery area">${AREAS.map(a=>`<button data-area="${a}" aria-pressed="${store.info.area===a}">${a}</button>`).join("")}</div>
 <label class="fld" id="otherWrap" ${store.info.area==="Nearby area"?"":"hidden"}>Which area?<input data-f="other" value="${esc(store.info.other)}" placeholder="Town or area name"></label>
 <label class="fld">Address<textarea data-f="address" rows="2" autocomplete="street-address" placeholder="House no., street, landmark">${esc(store.info.address)}</textarea></label></div>
 <div class="acts"><button class="cta" data-order>Order on WhatsApp</button><button class="link" data-clear>Clear bag</button></div>`
 :`<p class="empty" style="padding:40px 24px">Your bag is empty.<br>Bring a little light into your home!</p><div class="acts"><button class="cta green" data-close>Keep shopping</button></div>`))}
function helpSheet(){
 openSheet(`<button class="x" data-close aria-label="Close">×</button><h2 class="sh-title" style="padding-top:8px;text-align:center">Delivery &amp; help</h2><div class="info">
 <div><b>Where we deliver</b>Panadura, Moratuwa and nearby areas, by local delivery. For nearby areas we confirm availability and the delivery charge first.</div>
 <div><b>When</b>4–5 business days, Monday to Friday. Saturdays and Sundays are not counted.</div>
 <div><b>How to order</b>Fill your bag and send it on WhatsApp. We confirm stock, price and your delivery date.</div>
 <div><b>Delivery charge</b>Charged separately and paid by the customer.</div>
 <div><b>LUMINA</b>Bringing Light to Every Moment.</div></div>`)}
function orderText(){
 const i=store.info,area=i.area==="Nearby area"?(i.other.trim()||"Nearby area"):i.area;
 const items=store.bag.map((x,n)=>{const p=find(x.id);return`${n+1}. *${p.name}* (${p.colors[x.c][0]})\n    ${x.q} × ${rs(p.price)} = ${rs(x.q*p.price)}`}).join("\n");
 return`*LUMINA – New Order*\n\nHello LUMINA! I would like to place an order.\n\n*Items*\n${items}\n\n*Items total:* ${rs(total())}\n_Delivery charge is separate._\n\n*Delivery details*\nName: ${i.name.trim()}\nPhone: ${i.phone.trim()||"-"}\nArea: ${area}\nAddress: ${i.address.trim()||"-"}\n\nThank you!\n_Bringing Light to Every Moment._`}
async function order(){
 const i=store.info;
 if(!i.name.trim()){toast("Please enter your name");const f=document.querySelector('[data-f="name"]');f&&f.focus();return}
 if(!i.area){toast("Please choose your delivery area");return}
 if(i.area==="Nearby area"&&!i.other.trim()){toast("Please tell us your area");const f=document.querySelector('[data-f="other"]');f&&f.focus();return}
 const m=orderText();
 try{navigator.clipboard&&navigator.clipboard.writeText(m).catch(()=>{})}catch(x){}
 const num=String(CONFIG.whatsapp||"").replace(/\D/g,"");
 window.location.href=`https://wa.me/${num}?text=${encodeURIComponent(m)}`}
function setTab(t,quiet){
 if(t==="shop"||t==="saved"){S.tab=t;renderGrid();window.scrollTo({top:0,behavior:quiet?"auto":"smooth"})}
 document.querySelectorAll("#tabs [data-tab]").forEach(b=>b.toggleAttribute("aria-current",b.dataset.tab===(sheet.hidden?S.tab:t)));
 document.querySelectorAll("#tabs [data-tab]").forEach(b=>{if(b.hasAttribute("aria-current"))b.setAttribute("aria-current","page")})}

document.addEventListener("click",e=>{
 const t=e.target;let b;
 if(b=t.closest("[data-save]")){e.stopPropagation();const id=+b.dataset.save,i=store.saved.indexOf(id);i<0?store.saved.push(id):store.saved.splice(i,1);persist();renderGrid();toast(i<0?"Saved":"Removed from saved");buzz()}
 else if(b=t.closest("[data-quick]")){e.stopPropagation();const p=find(+b.dataset.quick);addToBag(p.id,ci(p),1);toast(`${p.name} added to your bag`)}
 else if(b=t.closest("[data-open]"))productSheet(+b.dataset.open);
 else if(b=t.closest("[data-cat]")){S.cat=b.dataset.cat;renderChips();renderGrid()}
 else if(b=t.closest("[data-color]")){S.pick[sel.id]=+b.dataset.color;renderGrid();productSheet(sel.id,true)}
 else if(b=t.closest("[data-qty]")){sel.qty=Math.max(1,sel.qty+ +b.dataset.qty);productSheet(sel.id,true)}
 else if(t.closest("[data-addsel]")){const p=find(sel.id);addToBag(p.id,ci(p),sel.qty);toast(`${sel.qty} × ${p.name} added`);closeSheet()}
 else if(b=t.closest("[data-step]")){const[i,d]=b.dataset.step.split(":");store.bag[i].q+=+d;if(store.bag[i].q<1)store.bag.splice(i,1);persist();renderCount();bagSheet()}
 else if(t.closest("[data-clear]")){store.bag=[];persist();renderCount();bagSheet()}
 else if(b=t.closest("[data-area]")){store.info.area=b.dataset.area;persist();document.querySelectorAll("[data-area]").forEach(x=>x.setAttribute("aria-pressed",x===b));$("#otherWrap").hidden=store.info.area!=="Nearby area"}
 else if(t.closest("[data-order]"))order();
 else if(t.closest("[data-close]")||t===scrim)closeSheet();
 else if(b=t.closest("[data-tab]")){const k=b.dataset.tab;if(k==="bag"){bagSheet();setTab("bag")}else if(k==="help"){helpSheet();setTab("help")}else{if(!sheet.hidden)closeSheet();setTab(k)}}});
document.addEventListener("keydown",e=>{
 if(e.key==="Escape")closeSheet();
 if((e.key==="Enter"||e.key===" ")&&e.target.matches(".card")){e.preventDefault();productSheet(+e.target.dataset.open)}});
document.addEventListener("input",e=>{const f=e.target.dataset&&e.target.dataset.f;if(f){store.info[f]=e.target.value;persist()}});
$("#q").addEventListener("input",e=>{S.q=e.target.value;renderGrid()});
/* swipe down to close */
(()=>{const g=$("#grab");let y0=null,dy=0;
 g.addEventListener("pointerdown",e=>{y0=e.clientY;dy=0;sheet.style.transition="none";g.setPointerCapture(e.pointerId)});
 g.addEventListener("pointermove",e=>{if(y0===null)return;dy=Math.max(0,e.clientY-y0);sheet.style.transform=`translateY(${dy}px)`});
 const end=()=>{if(y0===null)return;y0=null;sheet.style.transition="";if(dy>110)closeSheet();sheet.style.transform=""};
 g.addEventListener("pointerup",end);g.addEventListener("pointercancel",end)})();
renderChips();renderGrid();renderCount();
