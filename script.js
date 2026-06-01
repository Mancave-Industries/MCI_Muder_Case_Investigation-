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
  feedback:[],
  history:[],
  lastScore:null
};

let scrollMemory = {};

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

function saveScrolls(){
  document.querySelectorAll(".carousel").forEach(el => {
    scrollMemory[el.dataset.type] = el.scrollLeft;
  });
}

function restoreScrolls(){
  requestAnimationFrame(() => {
    document.querySelectorAll(".carousel").forEach(el => {
      if(scrollMemory[el.dataset.type] != null) {
        el.scrollLeft = scrollMemory[el.dataset.type];
      }

      if(state.selected[el.dataset.type]) {
        const selectedCard = el.querySelector(`[data-card-id="${state.selected[el.dataset.type]}"]`);
        if(selectedCard) {
          selectedCard.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"});
        }
      }
    });

    updateLiveCards();
  });
}

function updateLiveCards(){
  document.querySelectorAll(".carousel").forEach(carousel => {
    const middle = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    let best = null;
    let bestDistance = Infinity;

    carousel.querySelectorAll(".card").forEach(card => {
      card.classList.remove("live");
      const rect = card.getBoundingClientRect();
      const cardMiddle = rect.left + rect.width / 2;
      const distance = Math.abs(cardMiddle - middle);

      if(distance < bestDistance){
        bestDistance = distance;
        best = card;
      }
    });

    if(best) best.classList.add("live");
  });
}

function render(){
  saveScrolls();

  if(state.screen === "home") renderHome();
  if(state.screen === "casefile") renderCaseFile();
  if(state.screen === "investigation") renderInvestigation();
  if(state.screen === "solved") renderEnd(false);
  if(state.screen === "failed") renderEnd(true);

  restoreScrolls();
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
    feedback:[],
    history:[],
    lastScore:null
  };

  scrollMemory = {};
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

function renderInvestigation(){
  const c = currentCase();

  app.innerHTML = `
    <div class="fixedhud">
      <div class="hudrow">
        <div>${player.rank}</div>
        <div>${c.id}</div>
        <div>${state.guessesLeft} left</div>
      </div>
      <div class="theory">
        Suspect: ${displayName("suspects",state.selected.suspect)}
        | Weapon: ${displayName("weapons",state.selected.weapon)}
        | Room: ${displayName("rooms",state.selected.room)}
        | Motive: ${displayName("motives",state.selected.motive)}
        | ${Object.keys(state.locked).length}/4 confirmed
      </div>
    </div>

    <section class="screen investigation" ${bg(ASSETS.investigation)}>
      <div class="content">
        ${progressHTML()}
        ${evidenceBoardHTML()}
        ${carouselHTML("suspect","SUSPECTS",CARDS.suspects)}
        ${carouselHTML("weapon","WEAPONS",CARDS.weapons)}
        ${carouselHTML("room","ROOMS",CARDS.rooms)}
        ${carouselHTML("motive","MOTIVES",CARDS.motives)}
        ${feedbackHTML()}

        <div class="panel">
          <h2>MAKE ACCUSATION</h2>
          <p>Select one suspect, weapon, room and motive.</p>
          <button class="primary" onclick="accuse()">SUBMIT ACCUSATION</button>
        </div>
      </div>
    </section>
  `;

  setTimeout(updateLiveCards,50);
}

function evidenceBoardHTML(){
  const labels = {
    suspect:"SUSPECT CHARACTERISTICS",
    weapon:"WEAPON FEATURES",
    room:"ROOM FEATURES",
    motive:"MOTIVE DRIVERS"
  };

  return `
    <div class="panel">
      <h2>EVIDENCE BOARD</h2>
      <div class="evidence-board">
        ${["suspect","weapon","room","motive"].map(key => `
          <div class="evidence-box">
            <h4>${labels[key]}</h4>
            ${
              state.evidence[key].length
              ? state.evidence[key].map(x => `<span class="evidence-tag">${x}</span>`).join("")
              : "<span class='evidence-tag'>Awaiting evidence</span>"
            }
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function progressHTML(){
  if(state.lastScore === null) return "";

  const percentage = [0,25,50,75,100][state.lastScore];
  const colour = ["var(--red)","var(--amber1)","var(--amber2)","var(--amber3)","var(--green)"][state.lastScore];

  return `
    <div class="panel">
      <div class="progress-label">${state.lastScore}/4 CATEGORIES MATCH</div>
      <div class="progress-shell">
        <div class="progress-bar" style="width:${percentage}%;background:${colour}"></div>
      </div>
    </div>
  `;
}

function carouselHTML(type,title,items){
  const loopedItems = [...items,...items,...items];

  return `
    <div class="carousel-block">
      <div class="carousel-title">${title}</div>
      <div class="carousel" data-type="${type}" onscroll="loopCarousel(this);updateLiveCards()">
        ${loopedItems.map(item => cardHTML(type,item)).join("")}
      </div>
    </div>
  `;
}

function cardHTML(type,itemData){
  const [id,name,img,traits] = itemData;

  const classes = [
    state.selected[type] === id ? "selected" : "",
    state.locked[type] === id ? "correct" : "",
    state.wrong[type]?.includes(id) ? "incorrect" : ""
  ].join(" ");

  const contain = id === "marble_bust" ? "contain" : "";

  return `
    <div class="card ${classes}" data-card-id="${id}" onclick="selectCard('${type}','${id}')">
      <img class="${contain}" src="${img}" onerror="this.style.opacity=.15">
      <div class="card-name">${name}</div>
      <div class="traits">
        ${traits.slice(0,8).map(trait => `<span class="trait ${isRevealed(type,id,trait) ? "revealed" : ""}">${trait}</span>`).join("")}
      </div>
    </div>
  `;
}

function selectCard(type,id){
  if(state.locked[type]) return;

  haptic(10);
  state.selected[type] = id;
  render();
}

function accuse(){
  const keys = ["suspect","weapon","room","motive"];
  const c = currentCase();

  if(!keys.every(key => state.selected[key])){
    haptic([20,50,20]);
    alert("Select one suspect, weapon, room and motive.");
    return;
  }

  haptic(25);

  state.feedback = [];
  let correct = 0;
  const shareRow = [];

  keys.forEach(key => {
    const guess = state.selected[key];
    const solution = c.solution[key];
    const isCorrect = guess === solution;

    shareRow.push(isCorrect);

    if(isCorrect){
      correct++;
      state.locked[key] = guess;
      state.feedback.push({type:key,ok:true,name:getItem(key,guess)[1]});
      haptic([25,45,25]);
    } else {
      if(!state.wrong[key]) state.wrong[key] = [];
      if(!state.wrong[key].includes(guess)) state.wrong[key].push(guess);

      const guessTraits = getItem(key,guess)[3];
      const solutionTraits = getItem(key,solution)[3];
      const matches = guessTraits.filter(trait => solutionTraits.includes(trait));
      const disclosed = matches[0] || "none";

      if(!state.revealed[key]) state.revealed[key] = {};
      if(!state.revealed[key][guess]) state.revealed[key][guess] = [];

      if(disclosed !== "none" && !state.revealed[key][guess].includes(disclosed)){
        state.revealed[key][guess].push(disclosed);
      }

      if(disclosed !== "none" && !state.evidence[key].includes(disclosed)){
        state.evidence[key].push(disclosed);
      }

      state.feedback.push({
        type:key,
        ok:false,
        name:getItem(key,guess)[1],
        disclosed,
        hidden:Math.max(matches.length - (matches.length ? 1 : 0),0)
      });
    }
  });

  state.history.push(shareRow);
  state.lastScore = correct;
  state.guessesLeft--;

  if(correct === 4){
    player.solved++;
    player.streak++;
    localStorage.setItem("mci_solved",player.solved);
    localStorage.setItem("mci_streak",player.streak);
    haptic([60,90,60]);
    go("solved");
    return;
  }

  if(state.guessesLeft <= 0){
    player.streak = 0;
    localStorage.setItem("mci_streak",player.streak);
    haptic([100,100,100]);
    go("failed");
    return;
  }

  render();
}

function feedbackHTML(){
  if(!state.feedback.length) return "";

  return `
    <div class="panel">
      <h2>EVIDENCE FEEDBACK</h2>
      ${state.feedback.map(f => {
        if(f.ok){
          return `
            <div class="feedback-card correct">
              <h3>${f.type.toUpperCase()}</h3>
              <p>${f.name}</p>
              <p class="green">CONFIRMED</p>
            </div>
          `;
        }

        const label = f.type === "suspect" ? "characteristic" : f.type === "motive" ? "driver" : "feature";

        return `
          <div class="feedback-card">
            <h3>${f.type.toUpperCase()}</h3>
            <p>${f.name}</p>
            <p>Disclosed ${label}:</p>
            <p class="green">${f.disclosed}</p>
            <p>${f.hidden} additional ${label}${f.hidden === 1 ? "" : "s"} match.</p>
          </div>
        `;
      }).join("")}
    </div>
  `;
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

          <div class="result-grid">
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

function go(screen){
  state.screen = screen;
  render();
}

function getItem(type,id){
  const map = {
    suspect:CARDS.suspects,
    weapon:CARDS.weapons,
    room:CARDS.rooms,
    motive:CARDS.motives
  };

  return map[type].find(item => item[0] === id);
}

function displayName(group,id){
  if(!id) return "Not selected";

  const map = {
    suspects:CARDS.suspects,
    weapons:CARDS.weapons,
    rooms:CARDS.rooms,
    motives:CARDS.motives
  };

  return map[group].find(item => item[0] === id)?.[1] || "Not selected";
}

function isRevealed(type,id,trait){
  return state.revealed?.[type]?.[id]?.includes(trait);
}

function loopCarousel(el){
  const third = el.scrollWidth / 3;

  if(el.scrollLeft < third * .25) {
    el.scrollLeft += third;
  }

  if(el.scrollLeft > third * 1.75) {
    el.scrollLeft -= third;
  }

  scrollMemory[el.dataset.type] = el.scrollLeft;
}

render();
```
