const app = document.getElementById("app");

const ASSETS = {
  frontpage: "assets/frontpage/frontpage .PNG",
  casefile: "assets/casefile/casefile.PNG",
  investigation: "assets/investigation/investigation.jpg",
  caseclosed: "assets/caseclosed/caseclosed.PNG"
};

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
    ["rooftop","Rooftop","assets/rooms/fooftop.jpg",["isolated","open-air","high","night","private","restricted","wind","low-light"]],
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
    ["gold_dumbbell","Gold Dumbbell","assets/weapons/gold_dumbell.png",["blunt","heavy","luxury","gym","metal","obvious","fingerprintable","decorative"]],
    ["keycard","Keycard","assets/weapons/keyvard.png",["access","tech","thin","corporate","concealable","plastic","small","everyday"]],
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
    ["debt_pressure","Debt Pressure","assets/motives/debt_pressue.png",["financial","desperate","pressure","fear","short-term","risk","long-term","control"]],
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

const CASES = [
  {
    id:"MCI-001",
    victim:"Velvet Kane",
    victimImg:"assets/suspects/velvet_kane.JPG",
    title:"The Art Vault Killing",
    turns:6,
    pool:{
      suspect:["dorian_luxe","velvet_kane","gideon_pryce","harvey_slate","cleo_saint","nova_wilde","rex_branson","tilly_chrome"],
      weapon:["marble_bust","crystal_award","gold_dumbbell","luxury_pen","mci_original_artwork","stiletto","champagne_sabre","keycard"],
      room:["art_vault","library","wine_cellar","dressing","panic","billiard_room","lift","observ"],
      motive:["professional_rivalry","career","reputation_protection","blackmail","revenge","financial_ruin","whistleblower_silence","jealousy"]
    },
    solution:{suspect:"dorian_luxe",weapon:"marble_bust",room:"art_vault",motive:"professional_rivalry"},
    brief:"Velvet Kane has been found dead inside Blackwood Tower. Evidence suggests a confrontation took place shortly before her death. Identify the murderer, weapon, room and motive.",
    den:"Dorian Luxe murdered Velvet Kane after a long-running professional rivalry escalated into a direct threat. Velvet had begun questioning the authenticity and ownership of valuable artwork linked to Dorian. The confrontation took place inside the Art Vault. During the argument, Dorian used the Marble Bust as an improvised weapon. The motive was Professional Rivalry."
  },
  {
    id:"MCI-002",
    victim:"Otis Blank",
    victimImg:"assets/suspects/otis_blank.JPG",
    title:"Dead Air",
    turns:6,
    pool:{
      suspect:["milo_vale","otis_blank","jaxon_vale","tilly_chrome","gideon_pryce","cleo_saint","harvey_slate","bianca_frost"],
      weapon:["smart_speaker","ring_light_stand","vr_headset","drone","chargeing_cable","smart_watch_cable","keycard","luxury_pen"],
      room:["podstudio","observ","panic","lift","cinema","library","med_suite","kitchen"],
      motive:["cover_up","whistleblower_silence","career","reputation_protection","blackmail","debt_pressure","mistaken_id","revenge"]
    },
    solution:{suspect:"milo_vale",weapon:"smart_speaker",room:"podstudio",motive:"cover_up"},
    brief:"Otis Blank has been found dead after hours inside Blackwood Tower. Initial evidence points to locked doors, recorded audio and a system that should not have been active.",
    den:"Milo Vale murdered Otis Blank inside the Podcast Studio. Otis had discovered evidence of a cover-up linked to MCI systems. Milo used the Smart Speaker as part of the method and tried to make the scene look like a technical accident. The motive was Cover Up."
  },
  {
    id:"MCI-003",
    victim:"India Gold",
    victimImg:"assets/suspects/India_gold.JPG",
    title:"A View From Above",
    turns:6,
    pool:{
      suspect:["saffron_skye","india_gold","piper_bloom","sebastian_drift","nova_wilde","rex_branson","bianca_frost","jaxon_vale"],
      weapon:["champagne_sabre","stiletto","luxury_pen","crystal_award","mangrenade_candle","drone","smart_watch_cable","keycard"],
      room:["rooftop","pool","wine_cellar","billiard_room","cinema","chefs_table","dressing","lift"],
      motive:["blackmail","affair","jealousy","obsession","rejection","reputation_protection","family_secret","revenge"]
    },
    solution:{suspect:"saffron_skye",weapon:"champagne_sabre",room:"rooftop",motive:"blackmail"},
    brief:"India Gold has been found dead at Blackwood Tower. Witness statements place several people near the upper floors shortly before midnight. The evidence points to leverage, fear and a private confrontation.",
    den:"Saffron Skye murdered India Gold on the Rooftop using the Champagne Sabre. India had information Saffron could not allow to surface. Their confrontation escalated when India threatened to expose the blackmail. The motive was Blackmail."
  }
];

let state = {
  screen:"home",
  caseIndex:0,
  guessesLeft:6,
  selected:{},
  locked:{},
  wrong:{},
  revealed:{},
  evidence:{suspect:[],weapon:[],room:[],motive:[]},
  lastFeedback:[],
  lastScore:null,
  history:[],
  carouselIndex:{suspect:0,weapon:0,room:0,motive:0}
};

const player = {
  rank:localStorage.getItem("mci_rank") || "Detective",
  streak:Number(localStorage.getItem("mci_streak") || 0),
  solved:Number(localStorage.getItem("mci_solved") || 0)
};

function currentCase(){
  return CASES[state.caseIndex];
}

function haptic(pattern){
  if(navigator.vibrate) navigator.vibrate(pattern || 10);
}

function bg(path){
  return `style="background-image:url('${path}')"`;
}

function go(screen){
  state.screen = screen;
  render();
}

function cardList(type){
  const c = currentCase();
  const sourceKey = type === "suspect" ? "suspects" : type === "weapon" ? "weapons" : type === "room" ? "rooms" : "motives";
  return c.pool[type].map(id => CARDS[sourceKey].find(card => card[0] === id)).filter(Boolean);
}

function getItem(type,id){
  const sourceKey = type === "suspect" ? "suspects" : type === "weapon" ? "weapons" : type === "room" ? "rooms" : "motives";
  return CARDS[sourceKey].find(card => card[0] === id);
}

function displayName(type,id){
  if(!id) return "Not selected";
  const item = getItem(type,id);
  return item ? item[1] : "Not selected";
}

function isRevealed(type,id,trait){
  return state.revealed?.[type]?.[id]?.includes(trait);
}

function resetForCase(index){
  state = {
    screen:state.screen,
    caseIndex:index,
    guessesLeft:CASES[index].turns,
    selected:{},
    locked:{},
    wrong:{},
    revealed:{},
    evidence:{suspect:[],weapon:[],room:[],motive:[]},
    lastFeedback:[],
    lastScore:null,
    history:[],
    carouselIndex:{suspect:0,weapon:0,room:0,motive:0}
  };
}

function render(){
  if(state.screen === "home") renderHome();
  if(state.screen === "casefile") renderCaseFile();
  if(state.screen === "investigation") renderInvestigation();
  if(state.screen === "analysis") renderAnalysis();
  if(state.screen === "solved") renderEnd(false);
  if(state.screen === "failed") renderEnd(true);

  requestAnimationFrame(() => {
    updateLiveCards();
    if(state.screen === "analysis") animateProgressBar();
  });
}

function renderHome(){
  app.innerHTML = `
    <section class="screen" ${bg(ASSETS.frontpage)}>
      <div class="content">
        <h1>MCI</h1>
        <h2>MURDER CASE INVESTIGATION</h2>

        <div class="statgrid">
          <div class="stat"><div class="label">Rank</div><div class="value">${player.rank}</div></div>
          <div class="stat"><div class="label">Streak</div><div class="value">${player.streak}</div></div>
          <div class="stat"><div class="label">Solved</div><div class="value">${player.solved}</div></div>
        </div>

        <div class="panel">
          <h2>ONE VICTIM. ONE KILLER. FOUR TRUTHS.</h2>
          <p>Open the case file. Study the evidence cards. Identify the suspect, weapon, room and motive before your accusations run out.</p>
        </div>

        <div class="panel">
          <h2>MVP TEST DAYS</h2>
          <div class="case-list">
            ${CASES.map((c,i) => `<div class="case-pill ${i < state.caseIndex ? "done" : ""}"><b>${c.id}</b><br>${c.title}</div>`).join("")}
          </div>
        </div>

        <button class="primary" onclick="openCase()">OPEN CASE FILE</button>
        <button class="secondary" onclick="alert('Information Base comes next')">INFORMATION BASE</button>
      </div>
    </section>
  `;
}

function openCase(){
  resetForCase(state.caseIndex);
  go("casefile");
}

function renderCaseFile(){
  const c = currentCase();

  app.innerHTML = `
    <section class="screen" ${bg(ASSETS.casefile)}>
      <div class="content">
        <div class="panel">
          <h2>VICTIM FILE OPENED</h2>
          <h2>${c.victim}</h2>
          <h3>${c.id} — ${c.title}</h3>
          <p>${c.brief}</p>
          <h2>${c.turns} ACCUSATIONS AUTHORISED</h2>
        </div>

        <button class="primary" onclick="go('investigation')">BEGIN INVESTIGATION</button>
      </div>
    </section>
  `;
}

function renderTopHud(){
  const c = currentCase();

  return `
    <div class="fixedhud">
      <div class="hudrow">
        <div>${player.rank}</div>
        <div>${c.id}</div>
        <div>${state.guessesLeft} left</div>
      </div>
      <div class="theory">
        Suspect: ${displayName("suspect",state.selected.suspect)}
        | Weapon: ${displayName("weapon",state.selected.weapon)}
        | Room: ${displayName("room",state.selected.room)}
        | Motive: ${displayName("motive",state.selected.motive)}
        | ${Object.keys(state.locked).length}/4 confirmed
      </div>
    </div>
  `;
}

function renderBottomHud(){
  const labels = {
    suspect:"SUSPECT",
    weapon:"WEAPON",
    room:"ROOM",
    motive:"MOTIVE"
  };

  return `
    <div class="bottomhud">
      <div class="bottomgrid">
        ${["suspect","weapon","room","motive"].map(type => `
          <div class="evidence-mini">
            <div class="evidence-mini-title">${labels[type]}</div>
            ${
              state.evidence[type].length
              ? state.evidence[type].slice(-3).map(x => `<span class="evidence-chip">${x}</span>`).join("")
              : `<span class="evidence-chip">none</span>`
            }
          </div>
        `).join("")}
      </div>
      <button class="bottom-submit" onclick="accuse()">SUBMIT ACCUSATION</button>
    </div>
  `;
}

function renderInvestigation(){
  app.innerHTML = `
    ${renderTopHud()}
    <section class="screen investigation" ${bg(ASSETS.investigation)}>
      <div class="content">
        ${carouselHTML("suspect","SUSPECTS")}
        ${carouselHTML("weapon","WEAPONS")}
        ${carouselHTML("room","ROOMS")}
        ${carouselHTML("motive","MOTIVES")}
      </div>
    </section>
    ${renderBottomHud()}
  `;

  requestAnimationFrame(() => {
    ["suspect","weapon","room","motive"].forEach(type => {
      scrollCarouselToIndex(type,state.carouselIndex[type] || 0,false);
    });
  });
}

function carouselHTML(type,title){
  const items = cardList(type);
  const locked = Boolean(state.locked[type]);

  return `
    <div class="carousel-block ${locked ? "locked" : ""}">
      <div class="carousel-title">${title}${locked ? " — CONFIRMED" : ""}</div>
      <div class="carousel ${locked ? "locked" : ""}" data-type="${type}">
        ${items.map((item,index) => cardHTML(type,item,index)).join("")}
      </div>
    </div>
  `;
}

function cardHTML(type,itemData,index){
  const [id,name,img,traits] = itemData;

  const classes = [
    state.selected[type] === id ? "selected" : "",
    state.locked[type] === id ? "correct" : "",
    state.wrong[type]?.includes(id) ? "incorrect" : ""
  ].join(" ");

  const contain = id === "marble_bust" ? "contain" : "";

  return `
    <div class="card ${classes}" data-card-id="${id}" data-index="${index}" onclick="selectCard('${type}','${id}',${index})">
      <img class="${contain}" src="${img}" onerror="this.style.opacity=.15">
      <div class="card-name">${name}</div>
      <div class="traits">
        ${traits.slice(0,8).map(trait => `<span class="trait ${isRevealed(type,id,trait) ? "revealed" : ""}">${trait}</span>`).join("")}
      </div>
    </div>
  `;
}

function selectCard(type,id,index){
  if(state.locked[type]) return;

  haptic(10);
  state.selected[type] = id;
  state.carouselIndex[type] = index;

  render();

  requestAnimationFrame(() => {
    scrollCarouselToIndex(type,index,true);
  });
}

function scrollCarouselToIndex(type,index,smooth){
  const carousel = document.querySelector(`.carousel[data-type="${type}"]`);
  if(!carousel) return;

  const card = carousel.querySelector(`.card[data-index="${index}"]`);
  if(!card) return;

  const left = card.offsetLeft - (carousel.clientWidth / 2) + (card.clientWidth / 2);

  carousel.scrollTo({
    left,
    behavior:smooth ? "smooth" : "auto"
  });
}

function updateLiveCards(){
  document.querySelectorAll(".carousel").forEach(carousel => {
    const type = carousel.dataset.type;
    const middle = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    let best = null;
    let bestDistance = Infinity;
    let bestIndex = 0;

    carousel.querySelectorAll(".card").forEach(card => {
      card.classList.remove("live");
      const rect = card.getBoundingClientRect();
      const cardMiddle = rect.left + rect.width / 2;
      const distance = Math.abs(cardMiddle - middle);

      if(distance < bestDistance){
        bestDistance = distance;
        best = card;
        bestIndex = Number(card.dataset.index || 0);
      }
    });

    if(best) best.classList.add("live");

    if(!state.locked[type]){
      state.carouselIndex[type] = bestIndex;
    }
  });
}

let scrollTimers = {};

document.addEventListener("scroll", () => updateLiveCards(), true);

document.addEventListener("touchend", () => {
  document.querySelectorAll(".carousel").forEach(carousel => {
    const type = carousel.dataset.type;
    if(!type || state.locked[type]) return;

    clearTimeout(scrollTimers[type]);
    scrollTimers[type] = setTimeout(() => {
      updateLiveCards();
      scrollCarouselToIndex(type,state.carouselIndex[type] || 0,true);
    },80);
  });
}, true);

function accuse(){
  const keys = ["suspect","weapon","room","motive"];
  const c = currentCase();

  if(!keys.every(key => state.selected[key])){
    haptic([20,50,20]);
    alert("Select one suspect, weapon, room and motive.");
    return;
  }

  haptic(25);

  let correct = 0;
  const feedback = [];
  const shareRow = [];

  keys.forEach(key => {
    const guess = state.selected[key];
    const solution = c.solution[key];
    const isCorrect = guess === solution;

    shareRow.push(isCorrect);

    if(isCorrect){
      correct++;
      state.locked[key] = guess;
      feedback.push({
        type:key,
        ok:true,
        name:getItem(key,guess)[1],
        disclosed:null,
        hidden:0
      });
    } else {
      if(!state.wrong[key]) state.wrong[key] = [];
      if(!state.wrong[key].includes(guess)) state.wrong[key].push(guess);

      const guessTraits = getItem(key,guess)[3];
      const solutionTraits = getItem(key,solution)[3];
      const matches = guessTraits.filter(trait => solutionTraits.includes(trait));
      const disclosed = matches[0] || "none";
      const hidden = disclosed === "none" ? 0 : Math.max(matches.length - 1,0);

      if(!state.revealed[key]) state.revealed[key] = {};
      if(!state.revealed[key][guess]) state.revealed[key][guess] = [];

      if(disclosed !== "none" && !state.revealed[key][guess].includes(disclosed)){
        state.revealed[key][guess].push(disclosed);
      }

      if(disclosed !== "none" && !state.evidence[key].includes(disclosed)){
        state.evidence[key].push(disclosed);
      }

      feedback.push({
        type:key,
        ok:false,
        name:getItem(key,guess)[1],
        disclosed,
        hidden
      });
    }
  });

  state.lastFeedback = feedback;
  state.lastScore = correct;
  state.history.push(shareRow);
  state.guessesLeft--;

  go("analysis");
}

function renderAnalysis(){
  const score = state.lastScore || 0;
  const pct = [0,25,50,75,100][score];
  const colour = ["var(--red)","var(--amber1)","var(--amber2)","var(--amber3)","var(--green)"][score];

  app.innerHTML = `
    <section class="screen analysis-screen" ${bg(ASSETS.caseclosed)}>
      <div class="content">
        <div class="analysis-card">
          <div class="analysis-status">ACCUSATION ANALYSIS</div>
          <div class="progress-label">${score}/4 CATEGORIES MATCH</div>
          <div class="progress-shell">
            <div class="progress-bar" id="analysisBar" data-width="${pct}" style="background:${colour}"></div>
          </div>

          <div class="feedback-grid">
            ${state.lastFeedback.map(feedbackCardHTML).join("")}
          </div>

          ${analysisButtonHTML()}
        </div>
      </div>
    </section>
  `;
}

function animateProgressBar(){
  const bar = document.getElementById("analysisBar");
  if(!bar) return;

  setTimeout(() => {
    bar.style.width = `${bar.dataset.width}%`;
  },180);
}

function feedbackCardHTML(f){
  const labels = {
    suspect:"SUSPECT",
    weapon:"WEAPON",
    room:"ROOM",
    motive:"MOTIVE"
  };

  if(f.ok){
    return `
      <div class="feedback-card correct">
        <h3>${labels[f.type]}</h3>
        <p>${f.name}</p>
        <p class="green">CONFIRMED</p>
      </div>
    `;
  }

  const noun = f.type === "suspect" ? "characteristic" : f.type === "motive" ? "driver" : "feature";

  return `
    <div class="feedback-card">
      <h3>${labels[f.type]}</h3>
      <p>${f.name}</p>
      <p>Shared ${noun}:</p>
      <p class="green">${f.disclosed}</p>
      <p>+${f.hidden} hidden ${noun}${f.hidden === 1 ? "" : "s"}</p>
    </div>
  `;
}

function analysisButtonHTML(){
  if(state.lastScore === 4){
    return `<button class="primary" onclick="finishSolved()">CLOSE CASE</button>`;
  }

  if(state.guessesLeft <= 0){
    return `<button class="primary" onclick="finishFailed()">REVEAL SOLUTION</button>`;
  }

  return `<button class="primary" onclick="go('investigation')">CONTINUE INVESTIGATION</button>`;
}

function finishSolved(){
  player.solved++;
  player.streak++;
  localStorage.setItem("mci_solved",player.solved);
  localStorage.setItem("mci_streak",player.streak);
  haptic([60,90,60]);
  go("solved");
}

function finishFailed(){
  player.streak = 0;
  localStorage.setItem("mci_streak",player.streak);
  haptic([100,100,100]);
  go("failed");
}

function renderEnd(failed){
  const c = currentCase();
  const solution = c.solution;

  app.innerHTML = `
    <section class="screen" ${bg(ASSETS.caseclosed)}>
      <div class="content">
        <div class="end-title">${failed ? "THEY GOT AWAY WITH IT" : "CASE SOLVED"}</div>
        <div class="subtitle">${failed ? "The case has gone cold." : "Great work, Detective."}</div>

        <div class="panel">
          <h2>VICTIM: ${c.victim}</h2>

          <div class="result-stack">
            ${resultCardHTML("MURDERER","suspect",solution.suspect)}
            ${resultCardHTML("WEAPON","weapon",solution.weapon)}
            ${resultCardHTML("ROOM","room",solution.room)}
            ${resultCardHTML("MOTIVE","motive",solution.motive)}
          </div>

          <h2>RECONSTRUCTION</h2>
          <p>${highlightSolution(c.den)}</p>

          <button class="primary" onclick="shareResult(${failed})">SHARE RESULT</button>
          ${
            state.caseIndex < CASES.length - 1
            ? `<button class="secondary" onclick="nextCase()">NEXT MVP DAY</button>`
            : `<button class="secondary" onclick="go('home')">RETURN HOME</button>`
          }
        </div>
      </div>
    </section>
  `;
}

function resultCardHTML(label,type,id){
  const data = getItem(type,id);
  const contain = id === "marble_bust" ? "contain" : "";

  return `
    <div class="result-card">
      <img class="${contain}" src="${data[2]}" onerror="this.style.opacity=.15">
      <h2>${label}</h2>
      <p>${data[1]}</p>
    </div>
  `;
}

function highlightSolution(text){
  const c = currentCase();
  const solution = c.solution;

  [
    getItem("suspect",solution.suspect)[1],
    getItem("weapon",solution.weapon)[1],
    getItem("room",solution.room)[1],
    getItem("motive",solution.motive)[1]
  ].forEach(word => {
    text = text.replaceAll(word,`<mark>${word}</mark>`);
  });

  return text;
}

function shareResult(failed){
  const c = currentCase();
  const used = c.turns - state.guessesLeft;
  const grid = state.history.map(row => row.map(x => x ? "🟩" : "⬛").join("")).join("\n") || "⬛⬛⬛⬛";

  const text = `${c.id}
${failed ? "X/6" : `${used}/6`}

${grid}

${failed ? "THEY GOT AWAY WITH IT" : "CASE SOLVED"}
Rank: ${player.rank}
https://mancave-industries.github.io/MCI_Muder_Case_Investigation-/`;

  if(navigator.share){
    navigator.share({text});
  } else if(navigator.clipboard){
    navigator.clipboard.writeText(text);
    alert("Result copied.");
  } else {
    alert(text);
  }
}

function nextCase(){
  const nextIndex = state.caseIndex + 1;
  resetForCase(nextIndex);
  go("casefile");
}

render();
