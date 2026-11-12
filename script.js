const places = [
 {name:"Centro de Saúde Modelo",type:"saude",category:"Saúde",address:"Endereço demonstrativo • Natal/RN",description:"Exemplo de unidade com informações de acesso para consulta.",features:["rampa","banheiro","piso"],labels:["Rampa de acesso","Banheiro acessível","Piso tátil"]},
 {name:"Biblioteca Comunitária Modelo",type:"cultura",category:"Cultura",address:"Endereço demonstrativo • Natal/RN",description:"Exemplo de espaço cultural com acesso e circulação sinalizados.",features:["rampa","elevador","piso"],labels:["Rampa de acesso","Elevador","Piso tátil"]},
 {name:"Centro de Atendimento Cidadão",type:"servico",category:"Serviço público",address:"Endereço demonstrativo • Natal/RN",description:"Exemplo de atendimento público com estrutura acessível.",features:["rampa","banheiro","elevador"],labels:["Rampa de acesso","Banheiro acessível","Elevador"]},
 {name:"Parque Modelo",type:"lazer",category:"Lazer",address:"Endereço demonstrativo • Natal/RN",description:"Exemplo de área de lazer com rota acessível planejada.",features:["rampa","piso"],labels:["Rampa de acesso","Piso tátil"]},
 {name:"Clínica Escola Modelo",type:"saude",category:"Saúde",address:"Endereço demonstrativo • Natal/RN",description:"Exemplo de serviço de saúde com entrada acessível.",features:["rampa","banheiro","elevador"],labels:["Rampa de acesso","Banheiro acessível","Elevador"]},
 {name:"Museu Modelo",type:"cultura",category:"Cultura",address:"Endereço demonstrativo • Natal/RN",description:"Exemplo de equipamento cultural com recursos de circulação.",features:["elevador","piso"],labels:["Elevador","Piso tátil"]}
];
const placeList=document.getElementById("placeList");
function renderPlaces(){
 const q=document.getElementById("placeSearch").value.trim().toLocaleLowerCase("pt-BR");
 const type=document.getElementById("placeType").value;
 const feature=document.getElementById("placeFeature").value;
 const filtered=places.filter(p=>(type==="todos"||p.type===type)&&(feature==="todos"||p.features.includes(feature))&&(p.name+" "+p.description+" "+p.labels.join(" ")).toLocaleLowerCase("pt-BR").includes(q));
 placeList.innerHTML="";
 if(!filtered.length){placeList.innerHTML='<div class="empty-state">Nenhum exemplo encontrado. Tente mudar os filtros.</div>';return;}
 filtered.forEach(p=>{
  const card=document.createElement("article");card.className="place-card";
  const tags=p.labels.map(label=>`<span>${label}</span>`).join("");
  const query=encodeURIComponent(p.name+" "+p.address);
  card.innerHTML=`<div class="place-top"><span class="place-category">${p.category}</span><span aria-hidden="true">⌖</span></div><h3>${p.name}</h3><p>${p.description}<br>${p.address}</p><div class="place-tags">${tags}</div><a href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener">Pesquisar no mapa ↗</a>`;
  placeList.appendChild(card);
 });
}
["placeSearch","placeType","placeFeature"].forEach(id=>document.getElementById(id).addEventListener(id==="placeSearch"?"input":"change",renderPlaces));
renderPlaces();

const panel=document.getElementById("accessPanel"),backdrop=document.getElementById("panelBackdrop");
const openPanel=()=>{panel.hidden=false;backdrop.hidden=false;document.getElementById("closeAccess").focus();};
const closePanel=()=>{panel.hidden=true;backdrop.hidden=true;document.getElementById("openAccess").focus();};
document.getElementById("openAccess").addEventListener("click",openPanel);
document.getElementById("closeAccess").addEventListener("click",closePanel);
backdrop.addEventListener("click",closePanel);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.hidden)closePanel();});
let fontSize=16;
const root=document.documentElement;
function updateFont(){root.style.setProperty("--base",fontSize+"px");}
function setContrast(value){document.body.classList.toggle("high-contrast",value);document.getElementById("contrastToggle").setAttribute("aria-pressed",String(value));document.getElementById("contrastToggle").textContent=value?"Ativado":"Desativado";}
function setReadable(value){document.body.classList.toggle("readable-font",value);document.getElementById("fontToggle").setAttribute("aria-pressed",String(value));document.getElementById("fontToggle").textContent=value?"Ativada":"Desativada";}
document.getElementById("fontUp").addEventListener("click",()=>{fontSize=Math.min(22,fontSize+1);updateFont();});
document.getElementById("fontDown").addEventListener("click",()=>{fontSize=Math.max(14,fontSize-1);updateFont();});
document.getElementById("contrastToggle").addEventListener("click",()=>setContrast(!document.body.classList.contains("high-contrast")));
document.getElementById("fontToggle").addEventListener("click",()=>setReadable(!document.body.classList.contains("readable-font")));
document.getElementById("resetAccess").addEventListener("click",()=>{fontSize=16;updateFont();setContrast(false);setReadable(false);showToast("Configurações restauradas.");});
document.querySelector('[data-action="font-up"]').addEventListener("click",()=>{fontSize=Math.min(22,fontSize+1);updateFont();showToast("Texto ampliado.");});
document.querySelector('[data-action="contrast"]').addEventListener("click",()=>{setContrast(!document.body.classList.contains("high-contrast"));showToast("Preferência de contraste atualizada.");});

document.getElementById("readPage").addEventListener("click",()=>{
 if(!("speechSynthesis" in window)){showToast("A leitura por voz não está disponível neste navegador.");return;}
 if(window.speechSynthesis.speaking){window.speechSynthesis.cancel();document.getElementById("readPage").textContent="Ouvir conteúdo";return;}
 const text=document.querySelector("main").innerText;
 const utterance=new SpeechSynthesisUtterance(text);utterance.lang="pt-BR";utterance.rate=0.95;
 utterance.onend=()=>document.getElementById("readPage").textContent="Ouvir conteúdo";
 document.getElementById("readPage").textContent="Parar leitura";
 utterance.onstart=()=>{};window.speechSynthesis.speak(utterance);
});

document.getElementById("reportForm").addEventListener("submit",e=>{
 e.preventDefault();const form=e.currentTarget;
 if(!form.reportValidity())return;
 const data=Object.fromEntries(new FormData(form).entries());
 const reports=JSON.parse(localStorage.getItem("incluimais_reports")||"[]");
 reports.push({...data,date:new Date().toLocaleString("pt-BR")});
 localStorage.setItem("incluimais_reports",JSON.stringify(reports));
 form.reset();document.getElementById("formMessage").textContent="Relato salvo neste dispositivo. Obrigado por contribuir!";
 showToast("Relato salvo localmente.");
});

const menu=document.getElementById("mainNav"),menuToggle=document.getElementById("menuToggle");
menuToggle.addEventListener("click",()=>{const opened=menu.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(opened));menuToggle.setAttribute("aria-label",opened?"Fechar menu":"Abrir menu");menuToggle.textContent=opened?"×":"☰";});
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰";}));
let toastTimer;
function showToast(message){const toast=document.getElementById("toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);}
