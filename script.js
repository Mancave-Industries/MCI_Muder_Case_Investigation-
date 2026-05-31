const app = document.getElementById("app");
 
const ASSETS = {
  frontpage: "assets/frontpage/frontpage.PNG",
  casefile: "assets/casefile/casefile.PNG",
  investigation: "assets/investigation/investigation.jpg",
  caseclosed: "assets/caseclosed/caseclosed.PNG",
  vault: "assets/vault/reward_vault.jpg"
};
 
const GAME = {
  player: {
    rank: localStorage.getItem("mci_rank") || "Detective",
    streak: Number(localStorage.getItem("mci_streak") || 0),
    solved: Number(localStorage.getItem("mci_solved") || 0)
  },
 
  case: {
    id: "MCI-260531",
    title: "The Better Model",
    victim: "Velvet Kane",
    victimImg: "assets/suspects/velvet_kane.JPG",
    opening:
      "Velvet Kane has been found dead inside the Blackwood orbit. The Bureau has isolated a narrow circle of suspects, locations, methods and pressures. Early evidence points to secrecy, status and a professional relationship under strain, but the true chain of events remains classified.",
    turns: 6,
    solution: {
      suspect: "dorian_luxe",
      room: "art_vault",
      weapon: "marble_bust",
      motive: "professional_rivalry"
    },
    denouement:
      "Dorian Luxe murdered Velvet Kane after a long-running professional rivalry moved from reputation damage to direct threat. Velvet had begun questioning the authenticity and ownership of valuable work linked to Dorian. The confrontation took place inside the Art Vault. During the argument, Dorian used the Marble Bust as a brutal improvised weapon. The motive was Professional Rivalry."
  },
 
  suspects: [
    ["india_gold", "India Gold", "assets/suspects/India_gold.JPG", ["female","wealthy","glamorous","ambitious","connected","secretive","status","observant"]],
    ["bianca_frost", "Bianca Frost", "assets/suspects/bianca_frost.JPG", ["female","glasses","wealthy","influential","secretive","ambitious","status","observant"]],
    ["cleo_saint", "Cleo Saint", "assets/suspects/cleo_saint.JPG", ["female","tattooed","creative","disciplined","glamorous","secretive","ambitious","volatile"]],
    ["dorian_luxe", "Dorian Luxe", "assets/suspects/dorian_luxe.JPG", ["male","wealthy","influential","secretive","ambitious","status","collector","observant"]],
    ["gideon_pryce", "Gideon Pryce", "assets/suspects/gideon_pryce.JPG", ["male","wealthy","disciplined","secretive","strategic","cold","status","observant"]],
    ["harvey_slate", "Harvey Slate", "assets/suspects/harvey_slate.JPG", ["male","wealthy","influential","observant","ambitious","public","status","secretive"]],
    ["jaxon_vale", "Jaxon Vale", "assets/suspects/jaxon_vale.JPG", ["male","creative","tech","charismatic","reckless","public","ambitious","volatile"]],
    ["milo_vale", "Milo Vale", "assets/suspects/milo-vale.JPG", ["male","tech","intelligent","secretive","young","opportunistic","quiet","observant"]],
    ["nova_wilde", "Nova Wilde", "assets/suspects/nova_wilde.JPG", ["female","creative","glamorous","secretive","public","ambitious","volatile","stylish"]],
    ["otis_blank", "Otis Blank", "assets/suspects/otis_blank.JPG", ["male","quiet","observant","technical","private","nervous","secretive","disciplined"]],
    ["piper_bloom", "Piper Bloom", "assets/suspects/piper_bloom.JPG", ["female","social","romantic","glamorous","impulsive","public","stylish","secretive"]],
    ["rex_branson", "Rex Branson", "assets/suspects/rex_branson.JPG", ["male","athletic","aggressive","wealthy","volatile","status","public","ambitious"]],
    ["saffron_skye", "Saffron Skye", "assets/suspects/saffron_skye.JPG", ["female","creative","public","ambitious","stylish","secretive","glamorous","volatile"]],
    ["sebastian_drift", "Sebastian Drift", "assets/suspects/sebastian_drift.JPG", ["male","wealthy","romantic","obsessive","public","vain","status","glamorous"]],
    ["tilly_chrome", "Tilly Chrome", "assets/suspects/tilly_chrome.JPG", ["female","creative","disciplined","ideological","intense","professional","tattooed","observant"]],
    ["velvet_kane", "Velvet Kane", "assets/suspects/velvet_kane.JPG", ["female","intelligent","ethical","legal","observant","professional","glasses","secretive"]]
  ],
 
  rooms: [
    ["art_vault", "Art Vault", "assets/rooms/art_vault.jpg", ["restricted","private","valuable","quiet","locked","luxury","surveillance","after-hours"]],
    ["billiard_room", "Billiard Room", "assets/rooms/billiard_room.jpg", ["recreational","private","quiet","after-hours","social","low-light","soft","luxury"]],
    ["chefs_table", "Chef's Table", "assets/rooms/chefs_table.jpg", ["food","private","luxury","booked","staffed","social","water","after-hours"]],
    ["cinema", "Cinema", "assets/rooms/cinema.jpg", ["dark","soundproof","screen","private","recreational","seated","low-light","soft"]],
    ["dressing", "Dressing Room", "assets/rooms/dressing.jpg", ["private","mirrors","fashion","quiet","restricted","personal","soft","after-hours"]],
    ["footop", "Rooftop", "assets/rooms/footop.jpg", ["isolated","open-air","high","night","private","restricted","wind","low-light"]],
    ["gym", "Gym", "assets/rooms/gym.jpg", ["wellness","equipment","physical","private","mirrors","after-hours","open","surveillance"]],
    ["kitchen", "Smart Kitchen", "assets/rooms/kitchen.jpg", ["food","tech","water","screen","staffed","private","dining","surveillance"]],
    ["library", "Library", "assets/rooms/library.jpg", ["quiet","knowledge","private","soft","night","prestige","restricted","valuable"]],
    ["lift", "Lift", "assets/rooms/lift.jpg", ["restricted","movement","small","sealed","tech","transit","surveillance","locked"]],
    ["med_suite", "Medical Suite", "assets/rooms/med-suite.jpg", ["medical","restricted","clean","private","equipment","quiet","locked","water"]],
    ["observ", "Observatory", "assets/rooms/observ.jpg", ["isolated","high","tech","quiet","night","restricted","screen","private"]],
    ["panic", "Panic Room", "assets/rooms/panic.jpg", ["locked","secure","hidden","restricted","small","private","surveillance","sealed"]],
    ["podstudio", "Podcast Studio", "assets/rooms/podstudio.jpg", ["soundproof","tech","screen","creative","private","recording","low-light","sealed"]],
    ["pool", "Pool", "assets/rooms/pool.jpg", ["water","wellness","recreational","open","luxury","night","quiet","private"]],
    ["wine_cellar", "Wine Cellar", "assets/rooms/wine_cellar.jpg", ["luxury","restricted","quiet","valuable","private","cold","after-hours","locked"]]
  ],
 
  weapons: [
    ["champagne_sabre", "Champagne Sabre", "assets/weapons/champagne_sabre.png", ["sharp","luxury","ceremonial","metal","collectible","handheld","decorative","fingerprintable"]],
    ["chargeing_cable", "Charging Cable", "assets/weapons/chargeing_cable.png", ["flexible","tech","everyday","concealable","cord","modern","wired","small"]],
    ["chefs_knife", "Chef's Knife", "assets/weapons/chefs_knife.png", ["sharp","kitchen","metal","professional","handheld","practical","fingerprintable","obvious"]],
    ["crystal_award", "Crystal Award", "assets/weapons/crystal_award.PNG", ["blunt","fragile","decorative","luxury","heavy","collectible","fingerprintable","office"]],
    ["drone", "Drone", "assets/weapons/drone.png", ["tech","remote","surveillance","modern","powered","mobile","black","fragile"]],
    ["gold_dumbbell", "Gold Dumbbell", "assets/weapons/gold_dumbbell.png", ["blunt","heavy","luxury","gym","metal","obvious","fingerprintable","decorative"]],
    ["keycard", "Keycard", "assets/weapons/keycard.png", ["access","tech","thin","corporate","concealable","plastic","small","everyday"]],
    ["luxury_pen", "Luxury Pen", "assets/weapons/luxury_pen.png", ["sharp","luxury","small","concealable","professional","metal","office","fingerprintable"]],
    ["mangrenade_candle", "Mangrenade Candle", "assets/weapons/mangreneade_candle.png", ["fire","brand","collectible","decorative","small","luxury","everyday","fragile"]],
    ["marble_bust", "Marble Bust", "assets/weapons/marble_bust.PNG", ["blunt","heavy","decorative","luxury","art","solid","fingerprintable","office"]],
    ["mci_original_artwork", "MCI Original Artwork", "assets/weapons/mci_original_artwork.PNG", ["collectible","art","decorative","valuable","fragile","brand","luxury","office"]],
    ["ring_light_stand", "Ring Light Stand", "assets/weapons/ring_light_stand.png", ["metal","creative","tech","long","studio","portable","fingerprintable","blunt"]],
    ["smart_speaker", "Smart Speaker", "assets/weapons/smart_speaker.png", ["tech","powered","black","blunt","small","wired","everyday","office"]],
    ["smart_watch_cable", "Smart Watch Cable", "assets/weapons/smart_watch_cable.png", ["tech","flexible","small","everyday","concealable","cord","wired","modern"]],
    ["sous_vide_weight", "Sous Vide Weight", "assets/weapons/sous_vide_weight.png", ["heavy","kitchen","metal","blunt","professional","small","fingerprintable","practical"]],
    ["stiletto", "Stiletto", "assets/weapons/stiletto.png", ["sharp","fashion","concealable","luxury","personal","handheld","small","fingerprintable"]],
    ["vr_headset", "VR Headset", "assets/weapons/vr_headset.png", ["tech","modern","black","recreational","powered","headset","fragile","everyday"]]
  ],
 
  motives: [
    ["affair", "Affair", "assets/motives/affair.png", ["romantic","secret","personal","impulsive","status","emotional","shame","risk"]],
    ["blackmail", "Blackmail", "assets/motives/blackmail.png", ["secret","control","planned","fear","money","leverage","long-term","corporate"]],
    ["career", "Career", "assets/motives/career.png", ["professional","ambition","status","planned","reputation","competitive","long-term","public"]],
    ["cover_up", "Cover Up", "assets/motives/cover_up.png", ["secret","planned","protective","corporate","fear","control","reputation","long-term"]],
    ["debt_pressure", "Debt Pressure", "assets/motives/debt_pressure.png", ["financial","desperate","pressure","fear","short-term","risk","long-term","control"]],
    ["family_secret", "Family Secret", "assets/motives/family_secret.png", ["family","secret","protective","long-term","shame","emotional","reputation","fear"]],
    ["financial_ruin", "Financial Ruin", "assets/motives/financial_ruin.png", ["financial","desperate","status","fear","collapse","planned","public","reputation"]],
    ["inheritance", "Inheritance", "assets/motives/inheritance.png", ["family","financial","planned","status","long-term","greed","secret","control"]],
    ["jealousy", "Jealousy", "assets/motives/jealousy.png", ["romantic","emotional","impulsive","status","personal","resentment","public","shame"]],
    ["mistaken_id", "Mistaken Identity", "assets/motives/mistaken_id.png", ["error","confusion","impulsive","bad intel","accidental","opportunistic","fear","short-term"]],
    ["obsession", "Obsession", "assets/motives/obsession.png", ["romantic","fixated","emotional","long-term","irrational","personal","secret","control"]],
    ["professional_rivalry", "Professional Rivalry", "assets/motives/professional_rivalry.png", ["professional","status","competition","ambition","reputation","planned","long-term","public"]],
    ["rejection", "Rejection", "assets/motives/rejection.png", ["romantic","emotional","impulsive","personal","humiliation","resentment","status","shame"]],
    ["reputation_protection", "Reputation Protection", "assets/motives/reputation_protection.png", ["status","reputation","protective","planned","public","fear","professional","control"]],
    ["revenge", "Revenge", "assets/motives/revenge.png", ["resentment","justice","planned","personal","long-term","emotional","secret","control"]],
    ["whistleblower_silence", "Whistleblower Silence", "assets/motives/whistleblower_silence.png", ["corporate","secret","planned","protective","reputation","fear","professional","control"]]
  ]
};
 
let state = {
  screen: "home",
  guessesLeft: GAME.case.turns,
  selected: {},
  locked: {},
  wrong: {},
  feedback: [],
  revealed: {}
};
 
let scrollMemory = {};
 
function haptic(pattern = 10) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}
 
function saveScrolls() {
  document.querySelectorAll(".carousel").forEach(el => {
    scrollMemory[el.dataset.type] = el.scrollLeft;
  });
}
 
function restoreScrolls() {
  requestAnimationFrame(() => {
    document.querySelectorAll(".carousel").forEach(el => {
      const type = el.dataset.type;
      if (scrollMemory[type] != null) el.scrollLeft = scrollMemory[type];
      if (state.selected[type]) {
        const chosen = el.querySelector(`[data-card-id="${state.selected[type]}"]`);
        if (chosen) chosen.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      }
    });
  });
}
 
function render() {
  saveScrolls();
 
  if (state.screen === "home") renderHome();
  if (state.screen === "casefile") renderCaseFile();
  if (state.screen === "investigation") renderInvestigation();
  if (state.screen === "closed") renderClosed(false);
  if (state.screen === "failed") renderClosed(true);
 
  restoreScrolls();
}
 
function bg(path) {
  return `style="background-image:url('${path}')"`;
}
 
function renderHome() {
  app.innerHTML = `
    <section class="screen" ${bg(ASSETS.frontpage)}>
      <div class="content">
        <h1>MCI</h1>
        <h2>One victim. One killer. Four truths.</h2>
 
        <div class="stats">
          <div class="stat-box"><div class="stat-label">Rank</div><div class="stat-value">${GAME.player.rank}</div></div>
          <div class="stat-box"><div class="stat-label">Streak</div><div class="stat-value">${GAME.player.streak}<br>days</div></div>
          <div class="stat-box"><div class="stat-label">Solved</div><div class="stat-value">${GAME.player.solved}</div></div>
        </div>
 
        <button class="primary-btn" onclick="go('casefile')">OPEN CASE FILE</button>
        <button class="secondary-btn" onclick="alert('Information Base coming next build')">INFORMATION BASE</button>
      </div>
    </section>
  `;
}
 
function renderCaseFile() {
  app.innerHTML = `
    <section class="screen" ${bg(ASSETS.casefile)}>
      <div class="content">
        <div class="panel">
          <h2>VICTIM FILE OPENED</h2>
          <h2>${GAME.case.victim}</h2>
          <h3>${GAME.case.title}</h3>
          <p>${GAME.case.opening}</p>
          <h2>CASE ${GAME.case.id}</h2>
          <h2>${GAME.case.turns} turns authorised</h2>
        </div>
        <button class="primary-btn" onclick="go('investigation')">BEGIN INVESTIGATION</button>
      </div>
    </section>
  `;
}
 
function renderInvestigation() {
  app.innerHTML = `
    <div class="sticky-top">
      <div class="hud">
        <div>${GAME.player.rank}</div>
        <div>${GAME.case.id}</div>
        <div>${state.guessesLeft} turns</div>
      </div>
      <div class="suspicion-strip">
        Suspect: ${nameOf("suspects", state.selected.suspect)} |
        Weapon: ${nameOf("weapons", state.selected.weapon)} |
        Room: ${nameOf("rooms", state.selected.room)} |
        Motive: ${nameOf("motives", state.selected.motive)} |
        ${Object.keys(state.locked).length}/4 locked
      </div>
    </div>
 
    <section class="screen" ${bg(ASSETS.investigation)}>
      <div class="content">
        ${carousel("suspect", "SUSPECT", GAME.suspects, "characteristics")}
        ${carousel("weapon", "WEAPON", GAME.weapons, "features")}
        ${carousel("room", "ROOM", GAME.rooms, "features")}
        ${carousel("motive", "MOTIVE", GAME.motives, "drivers")}
 
        ${feedbackHtml()}
 
        <div class="panel">
          <h2>YOUR SUSPICION</h2>
          <p><b>SUSPECT:</b> ${nameOf("suspects", state.selected.suspect)}</p>
          <p><b>WEAPON:</b> ${nameOf("weapons", state.selected.weapon)}</p>
          <p><b>ROOM:</b> ${nameOf("rooms", state.selected.room)}</p>
          <p><b>MOTIVE:</b> ${nameOf("motives", state.selected.motive)}</p>
          <h2>${Object.keys(state.locked).length}/4 evidence categories locked.</h2>
          <button class="primary-btn" onclick="submitAccusation()">SUBMIT ACCUSATION</button>
        </div>
      </div>
    </section>
  `;
}
 
function carousel(type, title, items, label) {
  const looped = [...items, ...items, ...items];
  return `
    <div class="carousel-block">
      <div class="carousel-title">${title}</div>
      <div class="carousel" data-type="${type}" onscroll="loopCarousel(this)">
        ${looped.map((item, i) => card(type, item, label, i)).join("")}
      </div>
    </div>
  `;
}
 
function loopCarousel(el) {
  const third = el.scrollWidth / 3;
  if (el.scrollLeft < third * 0.25) el.scrollLeft += third;
  if (el.scrollLeft > third * 1.75) el.scrollLeft -= third;
  scrollMemory[el.dataset.type] = el.scrollLeft;
}
 
function card(type, item, label, i) {
  const [id, name, img, traits] = item;
  const selected = state.selected[type] === id ? "selected" : "";
  const correct = state.locked[type] === id ? "correct" : "";
  const incorrect = state.wrong[type]?.includes(id) ? "incorrect" : "";
  const contain = id === "marble_bust" ? "contain" : "";
 
  return `
    <div class="card ${selected} ${correct} ${incorrect}" data-card-id="${id}" onclick="selectCard('${type}','${id}')">
      <img class="${contain}" src="${img}" onerror="this.style.opacity=.18" />
      <div class="card-name">${name}</div>
      <div class="traits">
        ${traits.slice(0, 8).map(t => `<span class="trait ${isRevealed(type,id,t) ? "revealed" : ""}">${t}</span>`).join("")}
      </div>
    </div>
  `;
}
 
function selectCard(type, id) {
  if (state.locked[type]) return;
  haptic(8);
  state.selected[type] = id;
  render();
}
 
function submitAccusation() {
  const required = ["suspect", "weapon", "room", "motive"];
  if (!required.every(k => state.selected[k])) {
    haptic([20, 80, 20]);
    alert("Select one suspect, weapon, room and motive.");
    return;
  }
 
  haptic(20);
  state.feedback = [];
 
  required.forEach(type => {
    if (state.locked[type]) {
      state.feedback.push({ type, correct: true, name: getItem(type, state.locked[type])[1] });
      return;
    }
 
    const guess = state.selected[type];
    const correct = GAME.case.solution[type];
 
    if (guess === correct) {
      state.locked[type] = guess;
      state.feedback.push({ type, correct: true, name: getItem(type, guess)[1] });
      haptic([30, 50, 30]);
    } else {
      if (!state.wrong[type]) state.wrong[type] = [];
      if (!state.wrong[type].includes(guess)) state.wrong[type].push(guess);
 
      const guessTraits = getItem(type, guess)[3];
      const trueTraits = getItem(type, correct)[3];
      const matches = guessTraits.filter(t => trueTraits.includes(t));
      const disclosed = matches[0] || "none";
 
      if (!state.revealed[type]) state.revealed[type] = {};
      if (!state.revealed[type][guess]) state.revealed[type][guess] = [];
      if (disclosed !== "none" && !state.revealed[type][guess].includes(disclosed)) {
        state.revealed[type][guess].push(disclosed);
      }
 
      state.feedback.push({
        type,
        correct: false,
        name: getItem(type, guess)[1],
        disclosed,
        hidden: Math.max(matches.length - (matches.length ? 1 : 0), 0)
      });
    }
  });
 
  state.guessesLeft--;
 
  if (required.every(k => state.locked[k])) {
    GAME.player.solved++;
    GAME.player.streak++;
    localStorage.setItem("mci_solved", GAME.player.solved);
    localStorage.setItem("mci_streak", GAME.player.streak);
    haptic([50, 80, 50]);
    go("closed");
    return;
  }
 
  if (state.guessesLeft <= 0) {
    haptic([80, 120, 80]);
    go("failed");
    return;
  }
 
  render();
}
 
function feedbackHtml() {
  if (!state.feedback.length) return "";
  return `
    <div class="panel">
      <h2>EVIDENCE FEEDBACK</h2>
      ${state.feedback.map(f => {
        if (f.correct) {
          return `
            <div class="feedback-card correct">
              <h3>${f.type.toUpperCase()}</h3>
              <p>${f.name}</p>
              <p class="green">CONFIRMED</p>
            </div>
          `;
        }
 
        const word = f.type === "suspect" ? "characteristic" : f.type === "motive" ? "driver" : "feature";
        return `
          <div class="feedback-card">
            <h3>${f.type.toUpperCase()}</h3>
            <p>${f.name}</p>
            <p>Disclosed ${word}:</p>
            <p class="green">${f.disclosed}</p>
            <p>${f.hidden} additional ${word}${f.hidden === 1 ? "" : "s"} match the true ${labelTrue(f.type)}.</p>
          </div>
        `;
      }).join("")}
    </div>
  `;
}
 
function renderClosed(failed) {
  const s = GAME.case.solution;
  const used = GAME.case.turns - state.guessesLeft;
  const title = failed ? "INVESTIGATION FAILED" : "CASE CLOSED";
 
  app.innerHTML = `
    <section class="screen" ${bg(ASSETS.caseclosed)}>
      <div class="content">
        <div class="end-state">${title}</div>
        <div class="panel">
          <div class="result-grid">
            <div class="result-card">
              <img src="${getItem("suspect", s.suspect)[2]}" />
              <h2>KILLER</h2>
              <p>${getItem("suspect", s.suspect)[1]}</p>
            </div>
            <div class="result-card">
              <img src="${GAME.case.victimImg}" />
              <h2>VICTIM</h2>
              <p>${GAME.case.victim}</p>
            </div>
            <div class="result-card">
              <img class="contain" src="${getItem("weapon", s.weapon)[2]}" />
              <h2>WEAPON</h2>
              <p>${getItem("weapon", s.weapon)[1]}</p>
            </div>
            <div class="result-card">
              <img src="${getItem("room", s.room)[2]}" />
              <h2>ROOM</h2>
              <p>${getItem("room", s.room)[1]}</p>
            </div>
          </div>
 
          <h2>MOTIVE: ${getItem("motive", s.motive)[1]}</h2>
          <p>${GAME.case.denouement}</p>
 
          <button class="primary-btn" onclick="shareResult(${failed})">SHARE RESULT</button>
          <button class="secondary-btn" onclick="go('home')">RETURN HOME</button>
        </div>
      </div>
    </section>
  `;
}
 
function shareResult(failed) {
  const used = GAME.case.turns - state.guessesLeft;
  const locked = Object.keys(state.locked).length;
  const outcome = failed ? "I investigated" : "I solved";
  const text = `${outcome} today's MCI case ${GAME.case.id} in ${used} accusation${used === 1 ? "" : "s"}.\n${locked}/4 evidence categories locked.\nRank: ${GAME.player.rank}.\nhttps://mancave-industries.github.io/MCI_Muder_Case_Investigation-/`;
 
  if (navigator.share) {
    navigator.share({ text });
  } else {
    navigator.clipboard.writeText(text);
    alert("Result copied.");
  }
}
 
function go(screen) {
  state.screen = screen;
  render();
}
 
function getItem(type, id) {
  const map = { suspect: GAME.suspects, room: GAME.rooms, weapon: GAME.weapons, motive: GAME.motives };
  return map[type].find(x => x[0] === id);
}
 
function nameOf(group, id) {
  if (!id) return "Not selected";
  const map = { suspects: GAME.suspects, rooms: GAME.rooms, weapons: GAME.weapons, motives: GAME.motives };
  return map[group].find(x => x[0] === id)?.[1] || "Not selected";
}
 
function isRevealed(type, id, trait) {
  return state.revealed?.[type]?.[id]?.includes(trait);
}
 
function labelTrue(type) {
  if (type === "suspect") return "suspect";
  if (type === "room") return "location";
  if (type === "weapon") return "weapon";
  return "motive";
}
 
render();
