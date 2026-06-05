const app = document.getElementById("app");

const ASSETS = {
  frontpage: "assets/frontpage/frontpage.PNG",
  casefile: "assets/casefile/casefile.PNG",
  investigation: "assets/investigation/investigation.jpg",
  caseclosed: "assets/caseclosed/caseclosed.PNG"
};

const FEEDBACK_EMAIL = "mancaveman@icloud.com";
const GAME_URL = "https://mancave-industries.github.io/MCI_Muder_Case_Investigation-/";
const PROLOGUE_LENGTH = 16;

const CARDS = {
  suspects: [
    ["india_gold","India Gold","assets/suspects/India_gold.JPG",["female","wealthy","glamorous","ambitious","connected","secretive","status","observant"]],
    ["bianca_frost","Bianca Frost","assets/suspects/bianca_frost.JPG",["female","glasses","wealthy","influential","secretive","ambitious","status","observant"]],
    ["cleo_saint","Cleo Saint","assets/suspects/cleo_saint.JPG",["female","tattooed","creative","disciplined","glamorous","secretive","ambitious","volatile"]],
    ["dorian_luxe","Dorian Luxe","assets/suspects/dorian_luxe.JPG",["male","wealthy","influential","secretive","ambitious","status","collector","observant"]],
    ["gideon_pryce","Gideon Pryce","assets/suspects/gideon_pryce.JPG",["male","wealthy","disciplined","secretive","strategic","cold","status","observant"]],
    ["harvey_slate","Harvey Slate","assets/suspects/harvey_slate.JPG",["male","wealthy","influential","observant","ambitious","public","status","secretive"]],
    ["jaxon_vale","Jaxon Vale","assets/suspects/jaxon_vale.JPG",["male","creative","tech","charismatic","reckless","public","ambitious","volatile"]],
    ["milo_vale","Milo Vale","assets/suspects/milo-vale.JPG",["male","tech","intelligent","secretive","young","opportunistic","quiet","observant"]],
    ["nova_wilde","Nova Wilde","assets/suspects/nova_wilde.JPG",["female","creative","glamorous","secretive","public","ambitious","volatile","stylish"]],
    ["otis_blank","Otis Blank","assets/suspects/otis_blank.JPG",["male","quiet","observant","technical","private","nervous","secretive","disciplined"]],
    ["piper_bloom","Piper Bloom","assets/suspects/piper_bloom.JPG",["female","social","romantic","glamorous","impulsive","public","stylish","secretive"]],
    ["rex_branson","Rex Branson","assets/suspects/rex_branson.JPG",["male","athletic","aggressive","wealthy","volatile","status","public","ambitious"]],
    ["saffron_skye","Saffron Skye","assets/suspects/saffron_skye.JPG",["female","creative","public","ambitious","stylish","secretive","glamorous","volatile"]],
    ["sebastian_drift","Sebastian Drift","assets/suspects/sebastian_drift.JPG",["male","wealthy","romantic","obsessive","public","vain","status","glamorous"]],
    ["tilly_chrome","Tilly Chrome","assets/suspects/tilly_chrome.JPG",["female","creative","disciplined","ideological","intense","professional","tattooed","observant"]],
    ["velvet_kane","Velvet Kane","assets/suspects/velvet_kane.JPG",["female","intelligent","ethical","legal","observant","professional","glasses","secretive"]]
  ],
  rooms: [
    ["art_vault","Art Vault","assets/rooms/art_vault.jpg",["restricted","private","valuable","quiet","locked","luxury","surveillance","after-hours"]],
    ["billiard_room","Billiard Room","assets/rooms/billiard_room.jpg",["recreational","private","quiet","after-hours","social","low-light","soft","luxury"]],
    ["chefs_table","Chef's Table","assets/rooms/chefs_table.jpg",["food","private","luxury","booked","staffed","social","water","after-hours"]],
    ["cinema","Cinema","assets/rooms/cinema.jpg",["dark","soundproof","screen","private","recreational","seated","low-light","soft"]],
    ["dressing","Dressing Room","assets/rooms/dressing.jpg",["private","mirrors","fashion","quiet","restricted","personal","soft","after-hours"]],
    ["rooftop","Rooftop","assets/rooms/rooftop.jpg",["isolated","open-air","high","night","private","restricted","wind","low-light"]],
    ["gym","Gym","assets/rooms/gym.jpg",["wellness","equipment","physical","private","mirrors","after-hours","open","surveillance"]],
    ["kitchen","Smart Kitchen","assets/rooms/kitchen.jpg",["food","tech","water","screen","staffed","private","dining","surveillance"]],
    ["library","Library","assets/rooms/library.jpg",["quiet","knowledge","private","soft","night","prestige","restricted","valuable"]],
    ["lift","Lift","assets/rooms/lift.jpg",["restricted","movement","small","sealed","tech","transit","surveillance","locked"]],
    ["med_suite","Medical Suite","assets/rooms/med-suite.jpg",["medical","restricted","clean","private","equipment","quiet","locked","water"]],
    ["observ","Observatory","assets/rooms/observ.jpg",["isolated","high","tech","quiet","night","restricted","screen","private"]],
    ["panic","Panic Room","assets/rooms/panic.jpg",["locked","secure","hidden","restricted","small","private","surveillance","sealed"]],
    ["podstudio","Podcast Studio","assets/rooms/podstudio.jpg",["soundproof","tech","screen","creative","private","recording","low-light","sealed"]],
    ["pool","Pool","assets/rooms/pool.jpg",["water","wellness","recreational","open","luxury","night","quiet","private"]],
    ["wine_cellar","Wine Cellar","assets/rooms/wine_cellar.jpg",["luxury","restricted","quiet","valuable","private","cold","after-hours","locked"]]
  ],
  weapons: [
    ["champagne_sabre","Champagne Sabre","assets/weapons/champagne_sabre.png",["sharp","luxury","ceremonial","metal","collectible","handheld","decorative","fingerprintable"]],
    ["chargeing_cable","Charging Cable","assets/weapons/chargeing_cable.png",["flexible","tech","everyday","concealable","cord","modern","wired","small"]],
    ["chefs_knife","Chef's Knife","assets/weapons/chefs_knife.png",["sharp","kitchen","metal","professional","handheld","practical","fingerprintable","obvious"]],
    ["crystal_award","Crystal Award","assets/weapons/crystal_award.PNG",["blunt","fragile","decorative","luxury","heavy","collectible","fingerprintable","office"]],
    ["drone","Drone","assets/weapons/drone.png",["tech","remote","surveillance","modern","powered","mobile","black","fragile"]],
    ["gold_dumbbell","Gold Dumbbell","assets/weapons/gold_dumbbell.png",["blunt","heavy","luxury","gym","metal","obvious","fingerprintable","decorative"]],
    ["keycard","Keycard","assets/weapons/keycard.png",["access","tech","thin","corporate","concealable","plastic","small","everyday"]],
    ["luxury_pen","Luxury Pen","assets/weapons/luxury_pen.png",["sharp","luxury","small","concealable","professional","metal","office","fingerprintable"]],
    ["mangrenade_candle","Mangrenade Candle","assets/weapons/mangreneade_candle.png",["fire","brand","collectible","decorative","small","luxury","everyday","fragile"]],
    ["marble_bust","Marble Bust","assets/weapons/marble_bust.PNG",["blunt","heavy","decorative","luxury","art","solid","fingerprintable","office"]],
    ["mci_original_artwork","MCI Original Artwork","assets/weapons/mci_original_artwork.PNG",["collectible","art","decorative","valuable","fragile","brand","luxury","office"]],
    ["ring_light_stand","Ring Light Stand","assets/weapons/ring_light_stand.png",["metal","creative","tech","long","studio","portable","fingerprintable","blunt"]],
    ["smart_speaker","Smart Speaker","assets/weapons/smart_speaker.png",["tech","powered","black","blunt","small","wired","everyday","office"]],
    ["smart_watch_cable","Smart Watch Cable","assets/weapons/smart_watch_cable.png",["tech","flexible","small","everyday","concealable","cord","wired","modern"]],
    ["sous_vide_weight","Sous Vide Weight","assets/weapons/sous_vide_weight.png",["heavy","kitchen","metal","blunt","professional","small","fingerprintable","practical"]],
    ["stiletto","Stiletto","assets/weapons/stiletto.png",["sharp","fashion","concealable","luxury","personal","handheld","small","fingerprintable"]],
    ["vr_headset","VR Headset","assets/weapons/vr_headset.png",["tech","modern","black","recreational","powered","headset","fragile","everyday"]]
  ],
  motives: [
    ["affair","Affair","assets/motives/affair.png",["romantic","secret","personal","impulsive","status","emotional","shame","risk"]],
    ["blackmail","Blackmail","assets/motives/blackmail.png",["secret","control","planned","fear","money","leverage","long-term","corporate"]],
    ["career","Career","assets/motives/career.png",["professional","ambition","status","planned","reputation","competitive","long-term","public"]],
    ["cover_up","Cover Up","assets/motives/cover_up.png",["secret","planned","protective","corporate","fear","control","reputation","long-term"]],
    ["debt_pressure","Debt Pressure","assets/motives/debt_pressure.png",["financial","desperate","pressure","fear","short-term","risk","long-term","control"]],
    ["family_secret","Family Secret","assets/motives/family_secret.png",["family","secret","protective","long-term","shame","emotional","reputation","fear"]],
    ["financial_ruin","Financial Ruin","assets/motives/financial_ruin.png",["financial","desperate","status","fear","collapse","planned","public","reputation"]],
    ["inheritance","Inheritance","assets/motives/inheritance.png",["family","financial","planned","status","long-term","greed","secret","control"]],
    ["jealousy","Jealousy","assets/motives/jealousy.png",["romantic","emotional","impulsive","status","personal","resentment","public","shame"]],
    ["mistaken_id","Mistaken Identity","assets/motives/mistaken_id.png",["error","confusion","impulsive","bad intel","accidental","opportunistic","fear","short-term"]],
    ["obsession","Obsession","assets/motives/obsession.png",["romantic","fixated","emotional","long-term","irrational","personal","secret","control"]],
    ["professional_rivalry","Professional Rivalry","assets/motives/professional_rivalry.png",["professional","status","competition","ambition","reputation","planned","long-term","public"]],
    ["rejection","Rejection","assets/motives/rejection.png",["romantic","emotional","impulsive","personal","humiliation","resentment","status","shame"]],
    ["reputation_protection","Reputation Protection","assets/motives/reputation_protection.png",["status","reputation","protective","planned","public","fear","professional","control"]],
    ["revenge","Revenge","assets/motives/revenge.png",["resentment","justice","planned","personal","long-term","emotional","secret","control"]],
    ["whistleblower_silence","Whistleblower Silence","assets/motives/whistleblower_silence.png",["corporate","secret","planned","protective","reputation","fear","professional","control"]]
  ]
};

let CASES = [];
let DATA_READY = false;
let scrollMemory = {};
let accusationPending = null;

const player = {
  name: localStorage.getItem("mci_player_name") || "",
  rank: localStorage.getItem("mci_rank") || "Detective",
  streak: +(localStorage.getItem("mci_streak") || 0),
  solved: +(localStorage.getItem("mci_solved") || 0),
  lastSolvedDate: localStorage.getItem("mci_last_solved_date") || "",
  haptics: localStorage.getItem("mci_haptics") !== "off"
};

let state = {
  screen: player.name ? "home" : "name",
  caseIndex: 0,
  guessesLeft: 6,
  selected: {},
  locked: {},
  wrong: {},
  revealed: {},
  evidence: { suspect: [], weapon: [], room: [], motive: [] },
  feedback: [],
  history: [],
  lastScore: null,
  lastAccusation: null,
  loadingScore: null
};

loadCases();

async function loadCases(){
  try{
    const res = await fetch("data/cases.json", { cache: "no-store" });
    if(!res.ok) throw new Error("data/cases.json missing");
    const data = await res.json();
    CASES = normaliseCases(data.cases || []);
  }catch(e){
    console.warn(e);
    CASES = fallbackCases();
  }
  DATA_READY = true;
  state.caseIndex = getDailyCaseIndex();
  resetForCase(state.caseIndex, true);
  render();
}

function normaliseCases(cases){
  return cases.map((c,i)=>({
    id: c.id || `P${String(i+1).padStart(3,"0")}`,
    title: c.title || "Untitled Case",
    difficulty: c.difficulty || "Standard",
    arc: c.arc || "Blackwood",
    turns: 6,
    victim: c.victim?.name || c.victim || "Unknown Victim",
    victimId: c.victim?.id || "",
    victimImg: imageFor("suspect", c.victim?.id),
    solution: {
      suspect: c.solution?.suspect?.id || c.murdererId || "",
      room: c.solution?.room?.id || c.roomId || "",
      weapon: c.solution?.weapon?.id || c.weaponId || "",
      motive: c.solution?.motive?.id || c.motiveId || ""
    },
    narrative: {
      opening: c.narrative?.opening || c.opening_text || "A body has been discovered inside Blackwood Tower.",
      clues: c.narrative?.clues || [],
      officialFindings: c.narrative?.officialFindings || "",
      reconstruction: c.narrative?.reconstruction || c.den || "The investigation has concluded.",
      aftermath: c.narrative?.aftermath || "",
      informationEvent: c.narrative?.informationEvent || "",
      tomorrowHook: c.narrative?.tomorrowHook || ""
    },
    canon: c.canon || {}
  })).filter(c=>c.solution.suspect && c.solution.room && c.solution.weapon && c.solution.motive);
}

function fallbackCases(){
  return [{
    id:"P001", victim:"Bianca Frost", victimId:"bianca_frost", victimImg:imageFor("suspect","bianca_frost"), title:"The Missing Hour", turns:6, difficulty:"Easy", arc:"Parentage",
    solution:{suspect:"harvey_slate", weapon:"luxury_pen", room:"library", motive:"family_secret"},
    narrative:{opening:"Bianca Frost is dead. A single page appears to have been removed from her notebook shortly before her death.", clues:["A routine object may have been used in an unexpected way.","A location associated with knowledge becomes significant."], reconstruction:"Harvey Slate murdered Bianca Frost in the Library using the Luxury Pen. The motive was Family Secret.", aftermath:"", informationEvent:"", tomorrowHook:"The next death will ask a sharper question."},
    canon:{}
  }];
}

function getDailyCaseIndex(){
  const saved = localStorage.getItem("mci_debug_case_index");
  if(saved !== null && !Number.isNaN(+saved)) return Math.max(0, Math.min(CASES.length-1, +saved));
  const start = new Date("2026-06-05T00:00:00");
  const now = new Date();
  const diff = Math.floor((stripTime(now) - stripTime(start)) / 86400000);
  return Math.max(0, Math.min(CASES.length-1, diff));
}

function stripTime(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function currentCase(){ return CASES[state.caseIndex] || fallbackCases()[0]; }
function bg(p){ return `style="background-image:url('${p}')"`; }
function escapeHTML(s=""){ return String(s).replace(/[&<>"]/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[m])); }
function para(text=""){ return String(text).split(/\n\n+/).filter(Boolean).map(x=>`<p>${escapeHTML(x).replace(/\n/g,"<br>")}</p>`).join(""); }
function imageFor(type,id){ const it = item(type,id); return it ? it[2] : ""; }

function haptic(p=10){
  if(!player.haptics) return;
  if(navigator.vibrate) navigator.vibrate(p);
}

function saveScrolls(){
  document.querySelectorAll(".carousel").forEach(e => scrollMemory[e.dataset.type] = e.scrollLeft);
}

function restoreScrolls(){
  requestAnimationFrame(()=>{
    document.querySelectorAll(".carousel").forEach(e=>{
      if(scrollMemory[e.dataset.type] != null) e.scrollLeft = scrollMemory[e.dataset.type];
      if(state.selected[e.dataset.type]){
        const c = e.querySelector(`[data-card-id="${state.selected[e.dataset.type]}"]`);
        if(c) c.scrollIntoView({ inline:"center", block:"nearest", behavior:"auto" });
      }
    });
    updateLiveCards();
  });
}

function updateLiveCards(){
  document.querySelectorAll(".carousel").forEach(car=>{
    const mid = car.getBoundingClientRect().left + car.clientWidth/2;
    let best = null, dist = Infinity;
    car.querySelectorAll(".card").forEach(card=>{
      card.classList.remove("live");
      const r = card.getBoundingClientRect();
      const d = Math.abs((r.left + r.width/2) - mid);
      if(d < dist){ dist = d; best = card; }
    });
    if(best) best.classList.add("live");
  });
}

function render(){
  if(!DATA_READY){ loadingHome(); return; }
  saveScrolls();
  if(state.screen === "name") nameScreen();
  if(state.screen === "home") home();
  if(state.screen === "how") howToPlay();
  if(state.screen === "settings") settings();
  if(state.screen === "casefile") casefile();
  if(state.screen === "investigation") investigation();
  if(state.screen === "solved") end(false);
  if(state.screen === "failed") end(true);
  restoreScrolls();
}

function loadingHome(){
  app.innerHTML = `<section class="screen" ${bg(ASSETS.frontpage)}><div class="content tight"><h1>MCI</h1><div class="panel"><h2>LOADING CASE FILES</h2><p>Preparing Blackwood Tower...</p></div></div></section>`;
}

function nameScreen(){
  app.innerHTML = `<section class="screen" ${bg(ASSETS.frontpage)}><div class="content tight"><h1>MCI</h1><h2>MURDER CASE INVESTIGATION</h2><div class="panel dark"><h2>REGISTER DETECTIVE</h2><p>No login. No account. Your name is stored only on this device.</p><input id="playerName" class="name-input" maxlength="22" placeholder="Your name" autocomplete="off" /><button class="primary" onclick="savePlayerName()">BEGIN</button></div></div></section>`;
}

function savePlayerName(){
  const input = document.getElementById("playerName");
  const name = (input?.value || "").trim();
  if(!name){ haptic([20,40,20]); alert("Enter your detective name."); return; }
  player.name = name;
  localStorage.setItem("mci_player_name", name);
  haptic(25);
  go("home");
}

function home(){
  const c = currentCase();
  app.innerHTML = `<section class="screen" ${bg(ASSETS.frontpage)}><div class="content"><h1>MCI</h1><h2>MURDER CASE INVESTIGATION</h2><div class="statgrid"><div class="stat"><div class="label">Detective</div><div class="value">${escapeHTML(player.name)}</div></div><div class="stat"><div class="label">Streak</div><div class="value">${player.streak}</div></div><div class="stat"><div class="label">Solved</div><div class="value">${player.solved}</div></div></div><div class="panel"><h2>TODAY'S CASE</h2><h3>${c.id} — ${escapeHTML(c.title)}</h3><p>Victim: ${escapeHTML(c.victim)}</p><p class="small">Prologue case ${state.caseIndex+1} of ${Math.min(PROLOGUE_LENGTH, CASES.length)}</p></div><button class="primary" onclick="openCase()">OPEN CASE FILE</button><div class="button-row"><button class="secondary" onclick="go('how')">HOW TO PLAY</button><button class="secondary" onclick="go('settings')">SETTINGS</button></div></div></section>`;
}

function howToPlay(){
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>HOW TO PLAY</h2><p>Each day there is one murder inside Blackwood Tower.</p><p>You must identify four truths:</p><ul><li>Murderer</li><li>Weapon</li><li>Room</li><li>Motive</li></ul><p>Choose one card from each category and submit an accusation.</p><p>The loading bar shows how many of the four categories are correct: red for zero, amber as you get closer, green for all four.</p><p>The bottom display compares your latest accusation with the true cards. For each wrong card, it reveals one matching trait and tells you how many traits matched in total.</p><p>Previously revealed traits remain highlighted on the cards.</p><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function settings(){
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>SETTINGS</h2><div class="toggle-row"><div><h3>Haptic Feedback</h3><p class="small">Small vibration taps on supported phones.</p></div><button class="switch ${player.haptics ? "on" : ""}" aria-label="Toggle haptics" onclick="toggleHaptics()"></button></div><div class="panel"><h3>Detective Name</h3><p>${escapeHTML(player.name)}</p><button class="ghost" onclick="renamePlayer()">CHANGE NAME</button></div><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function toggleHaptics(){
  player.haptics = !player.haptics;
  localStorage.setItem("mci_haptics", player.haptics ? "on" : "off");
  haptic(20);
  render();
}

function renamePlayer(){
  const name = prompt("Enter detective name", player.name || "");
  if(!name) return;
  player.name = name.trim().slice(0,22) || player.name;
  localStorage.setItem("mci_player_name", player.name);
  render();
}

function openCase(){ resetForCase(state.caseIndex); go("casefile"); }

function resetForCase(i, keepScreen=false){
  const nextScreen = keepScreen ? state.screen : state.screen;
  state = {
    ...state,
    screen: nextScreen,
    caseIndex: i,
    guessesLeft: currentCase()?.turns || 6,
    selected: {}, locked: {}, wrong: {}, revealed: {},
    evidence: { suspect: [], weapon: [], room: [], motive: [] },
    feedback: [], history: [], lastScore: null, lastAccusation: null, loadingScore: null
  };
  scrollMemory = {};
}

function casefile(){
  const c = currentCase();
  const clues = (c.narrative.clues || []).map(x=>`<li>${escapeHTML(x)}</li>`).join("");
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content"><div class="panel dark"><h2>VICTIM FILE OPENED</h2><h2>${escapeHTML(c.victim)}</h2><h3>${c.id} — ${escapeHTML(c.title)}</h3><p class="small">Difficulty: ${escapeHTML(c.difficulty)} | Arc: ${escapeHTML(c.arc)}</p>${para(c.narrative.opening)}${clues ? `<h3>Initial Leads</h3><ul>${clues}</ul>` : ""}<h2>${c.turns} accusations authorised</h2></div><button class="primary" onclick="go('investigation')">BEGIN INVESTIGATION</button><button class="secondary" onclick="go('home')">RETURN HOME</button></div></section>`;
}

function investigation(){
  const c = currentCase();
  app.innerHTML = `<div class="topbar"><div class="hudrow"><div>${escapeHTML(player.name || player.rank)}</div><div>${c.id}</div><div>${state.guessesLeft} left</div></div><div class="theory">Murderer: ${name("suspects",state.selected.suspect)} | Weapon: ${name("weapons",state.selected.weapon)} | Room: ${name("rooms",state.selected.room)} | Motive: ${name("motives",state.selected.motive)} | ${Object.keys(state.locked).length}/4 locked</div></div><section class="screen investigation" ${bg(ASSETS.investigation)}><div class="content">${progressHTML()}${evidenceBoard()}${carousel("suspect","MURDERER",visibleCards("suspect"))}${carousel("weapon","WEAPON",visibleCards("weapon"))}${carousel("room","ROOM",visibleCards("room"))}${carousel("motive","MOTIVE",visibleCards("motive"))}<div class="panel"><h2>MAKE ACCUSATION</h2><p>Select one murderer, weapon, room and motive.</p><button class="primary" onclick="accuse()">SUBMIT ACCUSATION</button></div>${bottomHUD()}</div></section>${accusationPending ? loaderOverlay() : ""}`;
  setTimeout(updateLiveCards,50);
}

function visibleCards(type){
  const map = { suspect:"suspects", weapon:"weapons", room:"rooms", motive:"motives" };
  const all = CARDS[map[type]];
  const sol = currentCase().solution[type];
  const chosen = new Set([sol]);
  const seed = currentCase().id + type;
  seededShuffle(all.map(x=>x[0]), seed).forEach(id=>{ if(chosen.size < 8) chosen.add(id); });
  return all.filter(x=>chosen.has(x[0]));
}

function seededShuffle(arr, seed){
  let h = 2166136261;
  for(const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    const j = Math.abs(h) % (i+1);
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function evidenceBoard(){
  const labels = { suspect:"CHARACTERISTICS", weapon:"WEAPON FEATURES", room:"ROOM FEATURES", motive:"DRIVERS" };
  return `<div class="panel"><h2>EVIDENCE BOARD</h2><div class="evidence-board">${["suspect","weapon","room","motive"].map(k=>`<div class="evidence-box"><h4>${labels[k]}</h4>${state.evidence[k].length ? state.evidence[k].map(x=>`<span class="evidence-tag">${escapeHTML(x)}</span>`).join("") : "<span class='evidence-tag'>Awaiting evidence</span>"}</div>`).join("")}</div></div>`;
}

function progressHTML(){
  if(state.lastScore === null) return "";
  const pct = [18,35,58,80,100][state.lastScore];
  const col = ["var(--red)","var(--amber1)","var(--amber2)","var(--amber3)","var(--green)"][state.lastScore];
  return `<div class="panel"><div class="progress-label">${state.lastScore}/4 CATEGORIES MATCH</div><div class="progress-shell"><div class="progress-bar" style="width:${pct}%;background:${col}"></div></div></div>`;
}

function carousel(type,title,items){
  const loop = [...items, ...items, ...items];
  return `<div class="carousel-block"><div class="carousel-title">${title}</div><div class="carousel" data-type="${type}" onscroll="loopCarousel(this);updateLiveCards()">${loop.map(item=>card(type,item)).join("")}</div></div>`;
}

function card(type,itemData){
  const [id,n,img,traits] = itemData;
  const cls = [state.selected[type] === id ? "selected" : "", state.locked[type] === id ? "correct" : "", state.wrong[type]?.includes(id) ? "incorrect" : ""].join(" ");
  const contain = ["marble_bust","crystal_award","mci_original_artwork"].includes(id) ? "contain" : "";
  return `<div class="card ${cls}" data-card-id="${id}" onclick="selectCard('${type}','${id}')"><img class="${contain}" src="${img}" alt="${escapeHTML(n)}" onerror="this.style.opacity=.15"><div class="card-name">${escapeHTML(n)}</div><div class="traits">${traits.slice(0,8).map(t=>`<span class="trait ${isRev(type,id,t) ? "revealed" : ""}">${escapeHTML(t)}</span>`).join("")}</div></div>`;
}

function selectCard(type,id){
  if(state.locked[type]) return;
  haptic(10);
  state.selected[type] = id;
  render();
}

function accuse(){
  const keys = ["suspect","weapon","room","motive"];
  if(!keys.every(k=>state.selected[k])){ haptic([20,50,20]); alert("Select one murderer, weapon, room and motive."); return; }
  haptic(25);
  const result = evaluateAccusation();
  accusationPending = result;
  state.loadingScore = result.correct;
  render();
  setTimeout(()=>{
    applyAccusation(result);
    accusationPending = null;
    if(result.correct === 4){ markSolved(); haptic([60,90,60]); go("solved"); return; }
    if(state.guessesLeft <= 0){ haptic([100,100,100]); go("failed"); return; }
    render();
  }, 1450);
}

function evaluateAccusation(){
  const keys = ["suspect","weapon","room","motive"];
  const c = currentCase();
  const feedback = [];
  let correct = 0;
  const row = [];
  const snapshot = { ...state.selected };
  keys.forEach(k=>{
    const guess = state.selected[k], sol = c.solution[k], ok = guess === sol;
    row.push(ok);
    if(ok){ correct++; feedback.push({ type:k, ok:true, name:item(k,guess)[1], total:8, disclosed:"CONFIRMED" }); }
    else{
      const guessTraits = item(k,guess)?.[3] || [];
      const solTraits = item(k,sol)?.[3] || [];
      const matches = guessTraits.filter(t=>solTraits.includes(t));
      const already = state.revealed[k]?.[guess] || [];
      const disclosed = matches.find(t=>!already.includes(t)) || matches[0] || "No visible trait match";
      feedback.push({ type:k, ok:false, name:item(k,guess)[1], disclosed, total:matches.length });
    }
  });
  return { correct, row, feedback, snapshot };
}

function applyAccusation(result){
  state.feedback = [];
  const keys = ["suspect","weapon","room","motive"];
  const c = currentCase();
  keys.forEach(k=>{
    const guess = result.snapshot[k], sol = c.solution[k];
    const fb = result.feedback.find(x=>x.type === k);
    if(guess === sol){
      state.locked[k] = guess;
    }else{
      state.wrong[k] = state.wrong[k] || [];
      if(!state.wrong[k].includes(guess)) state.wrong[k].push(guess);
      if(fb.disclosed !== "No visible trait match"){
        state.revealed[k] = state.revealed[k] || {};
        state.revealed[k][guess] = state.revealed[k][guess] || [];
        if(!state.revealed[k][guess].includes(fb.disclosed)) state.revealed[k][guess].push(fb.disclosed);
        if(!state.evidence[k].includes(fb.disclosed)) state.evidence[k].push(fb.disclosed);
      }
    }
  });
  state.feedback = result.feedback;
  state.history.push(result.row);
  state.lastScore = result.correct;
  state.lastAccusation = result.snapshot;
  state.guessesLeft--;
}

function loaderOverlay(){
  const score = state.loadingScore ?? 0;
  const pct = [18,35,58,80,100][score];
  const col = ["var(--red)","var(--amber1)","var(--amber2)","var(--amber3)","var(--green)"][score];
  return `<div class="overlay"><div class="loader-card"><div class="loader-title">ANALYSING ACCUSATION</div><p class="loader-text">Comparing your theory against the Blackwood case file.</p><div class="progress-shell"><div class="progress-bar" style="width:${pct}%;background:${col}"></div></div><p class="loader-text">${score}/4 categories match</p></div></div>`;
}

function bottomHUD(){
  if(!state.feedback.length) return `<div class="bottomhud"><h2>HEADS-UP DISPLAY</h2><p class="small">Submit an accusation to reveal trait evidence. Each wrong card can reveal one aligned trait and the total number of matching traits.</p></div>`;
  return `<div class="bottomhud"><h2>LAST ACCUSATION FEEDBACK</h2><div class="feedback-grid">${state.feedback.map(f=>{
    if(f.ok) return `<div class="feedback-line"><b>${labelFor(f.type)}</b><br><span class="green">CONFIRMED:</span> ${escapeHTML(f.name)}</div>`;
    return `<div class="feedback-line"><b>${labelFor(f.type)}</b><br>${escapeHTML(f.name)} is wrong.<br><span class="green">Trait revealed:</span> ${escapeHTML(f.disclosed)}<br><span>${f.total} correct trait${f.total === 1 ? "" : "s"} matched the true card.</span></div>`;
  }).join("")}</div></div>`;
}

function labelFor(type){ return ({ suspect:"MURDERER", weapon:"WEAPON", room:"ROOM", motive:"MOTIVE" })[type]; }

function markSolved(){
  const today = todayKey();
  if(player.lastSolvedDate !== today){
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    const yKey = yesterday.toISOString().slice(0,10);
    player.streak = player.lastSolvedDate === yKey ? player.streak + 1 : 1;
    player.solved++;
    player.lastSolvedDate = today;
    localStorage.setItem("mci_streak", player.streak);
    localStorage.setItem("mci_solved", player.solved);
    localStorage.setItem("mci_last_solved_date", player.lastSolvedDate);
  }
}

function end(failed){
  const c = currentCase(), s = c.solution;
  const finalPrologue = state.caseIndex === Math.min(PROLOGUE_LENGTH, CASES.length) - 1;
  app.innerHTML = `<section class="screen" ${bg(ASSETS.caseclosed)}><div class="content"><div class="end-title">${failed ? "THEY GOT AWAY WITH IT" : "CASE SOLVED"}</div><div class="subtitle">${failed ? "The killer walks free." : "Great work, Detective."}</div><div class="panel dark"><h2>VICTIM: ${escapeHTML(c.victim)}</h2><div class="result-grid">${res("MURDERER","suspect",s.suspect)}${res("WEAPON","weapon",s.weapon)}${res("ROOM","room",s.room)}${res("MOTIVE","motive",s.motive)}</div><h2>RECONSTRUCTION</h2>${para(highlight(c.narrative.reconstruction))}${c.narrative.aftermath ? `<h2>AFTERMATH</h2>${para(c.narrative.aftermath)}` : ""}${c.narrative.informationEvent ? `<h2>INFORMATION EVENT</h2>${para(c.narrative.informationEvent)}` : ""}${finalPrologue ? prologueEndHTML() : teaserHTML(c)}<button class="primary" onclick="share(${failed})">SHARE RESULT</button><button class="secondary" onclick="feedbackEmail()">EMAIL FEEDBACK</button><p class="email-note">Please share this with 10 friends.</p><button class="ghost" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function teaserHTML(c){
  if(!c.narrative.tomorrowHook) return "";
  return `<div class="panel"><h2>TOMORROW</h2>${para(c.narrative.tomorrowHook)}</div>`;
}

function prologueEndHTML(){
  return `<div class="panel prologue-banner"><h2>PROLOGUE COMPLETE</h2><p>Blackwood Tower has not given up its secrets. It has only shown you where the bodies are buried.</p><p>The full season of MCI is coming soon.</p><p>Season One will open the wider case file.</p></div>`;
}

function res(label,type,id){
  const it = item(type,id);
  if(!it) return "";
  const contain = ["marble_bust","crystal_award","mci_original_artwork"].includes(id) ? "contain" : "";
  return `<div class="result-card"><img class="${contain}" src="${it[2]}" alt="${escapeHTML(it[1])}"><h2>${label}</h2><p>${escapeHTML(it[1])}</p></div>`;
}

function highlight(txt){
  let out = escapeHTML(txt || "");
  const c = currentCase(), s = c.solution;
  [item("suspect",s.suspect)?.[1], item("weapon",s.weapon)?.[1], item("room",s.room)?.[1], item("motive",s.motive)?.[1]].filter(Boolean).forEach(w=>{
    out = out.replaceAll(escapeHTML(w), `<mark>${escapeHTML(w)}</mark>`);
  });
  return out;
}

function share(failed){
  const c = currentCase();
  const used = c.turns - state.guessesLeft;
  const grid = state.history.map(r=>r.map(x=>x ? "🟩" : "⬛").join("")).join("\n") || "⬛⬛⬛⬛";
  const text = `MCI Prologue ${c.id}\n${c.title}\n\n${grid}\n\n${failed ? "They got away with it." : `Solved in ${used} accusation${used === 1 ? "" : "s"}.`}\nDetective: ${player.name || player.rank}\nDaily streak: ${player.streak}\nCases solved: ${player.solved}\n\nPlease share this with 10 friends.\n${GAME_URL}`;
  if(navigator.share) navigator.share({ text });
  else { navigator.clipboard.writeText(text); alert("Result copied."); }
}

function feedbackEmail(){
  const c = currentCase();
  const subject = encodeURIComponent(`MCI Prologue Feedback — ${c.id}`);
  const body = encodeURIComponent(`Thank you for playing MCI Prologue. We greatly value your feedback. Could you please answer these 10 questions with as much detail as possible?\n\n1. On a scale of 0 to 10, how likely are you to recommend MCI to a friend?\n\n2. Do you play other daily online puzzle games? Yes or No.\n\n3. If yes, please list the daily online puzzle games you play.\n\n4. What did you enjoy most about solving the daily cases?\n\n5. Were the trait clues clear and helpful in guiding your deductions?\n\n6. Was the accusation feedback easy to understand, including the revealed trait and total matching traits?\n\n7. How did you find the difficulty level of this case and the prologue overall?\n\n8. Did the story and narrative between cases make you want to return the next day?\n\n9. How would you improve the interface, card selection, or game flow?\n\n10. What features or improvements would you most like to see in the full season?\n\nOptional notes:\n\nCase played: ${c.id} — ${c.title}\nDetective name: ${player.name}\nDaily streak: ${player.streak}\nCases solved: ${player.solved}\n`);
  window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
}

function nextCaseDebug(){
  const n = Math.min(CASES.length-1, state.caseIndex + 1);
  localStorage.setItem("mci_debug_case_index", n);
  state.caseIndex = n;
  resetForCase(n);
  go("casefile");
}

function go(x){ state.screen = x; render(); }
function item(type,id){ return ({ suspect:CARDS.suspects, weapon:CARDS.weapons, room:CARDS.rooms, motive:CARDS.motives }[type] || []).find(x=>x[0] === id); }
function name(group,id){ if(!id) return "Not selected"; return ({ suspects:CARDS.suspects, weapons:CARDS.weapons, rooms:CARDS.rooms, motives:CARDS.motives }[group] || []).find(x=>x[0] === id)?.[1] || "Not selected"; }
function isRev(type,id,t){ return state.revealed?.[type]?.[id]?.includes(t); }
function loopCarousel(el){ const third = el.scrollWidth/3; if(el.scrollLeft < third*.18) el.scrollLeft += third; if(el.scrollLeft > third*1.82) el.scrollLeft -= third; scrollMemory[el.dataset.type] = el.scrollLeft; }
