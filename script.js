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

const CARDS={
suspects:[["india_gold","India Gold","assets/suspects/India_gold.JPG",["female","wealthy","glamorous","ambitious","connected","secretive","status","observant"]],["bianca_frost","Bianca Frost","assets/suspects/bianca_frost.JPG",["female","glasses","wealthy","influential","secretive","ambitious","status","observant"]],["cleo_saint","Cleo Saint","assets/suspects/cleo_saint.JPG",["female","tattooed","creative","disciplined","glamorous","secretive","ambitious","volatile"]],["dorian_luxe","Dorian Luxe","assets/suspects/dorian_luxe.JPG",["male","wealthy","influential","secretive","ambitious","status","collector","observant"]],["gideon_pryce","Gideon Pryce","assets/suspects/gideon_pryce.JPG",["male","wealthy","disciplined","secretive","strategic","cold","status","observant"]],["harvey_slate","Harvey Slate","assets/suspects/harvey_slate.JPG",["male","wealthy","influential","observant","ambitious","public","status","secretive"]],["jaxon_vale","Jaxon Vale","assets/suspects/jaxon_vale.JPG",["male","creative","tech","charismatic","reckless","public","ambitious","volatile"]],["milo_vale","Milo Vale","assets/suspects/milo-vale.JPG",["male","tech","intelligent","secretive","young","opportunistic","quiet","observant"]],["nova_wilde","Nova Wilde","assets/suspects/nova_wilde.JPG",["female","creative","glamorous","secretive","public","ambitious","volatile","stylish"]],["otis_blank","Otis Blank","assets/suspects/otis_blank.JPG",["male","quiet","observant","technical","private","nervous","secretive","disciplined"]],["piper_bloom","Piper Bloom","assets/suspects/piper_bloom.JPG",["female","social","romantic","glamorous","impulsive","public","stylish","secretive"]],["rex_branson","Rex Branson","assets/suspects/rex_branson.JPG",["male","athletic","aggressive","wealthy","volatile","status","public","ambitious"]],["saffron_skye","Saffron Skye","assets/suspects/saffron_skye.JPG",["female","creative","public","ambitious","stylish","secretive","glamorous","volatile"]],["sebastian_drift","Sebastian Drift","assets/suspects/sebastian_drift.JPG",["male","wealthy","romantic","obsessive","public","vain","status","glamorous"]],["tilly_chrome","Tilly Chrome","assets/suspects/tilly_chrome.JPG",["female","creative","disciplined","ideological","intense","professional","tattooed","observant"]],["velvet_kane","Velvet Kane","assets/suspects/velvet_kane.JPG",["female","intelligent","ethical","legal","observant","professional","glasses","secretive"]]],
rooms:[["art_vault","Art Vault","assets/rooms/art_vault.jpg",["restricted","private","valuable","quiet","locked","luxury","surveillance","after-hours"]],["billiard_room","Billiard Room","assets/rooms/billiard_room.jpg",["recreational","private","quiet","after-hours","social","low-light","soft","luxury"]],["chefs_table","Chef's Table","assets/rooms/chefs_table.jpg",["food","private","luxury","booked","staffed","social","water","after-hours"]],["cinema","Cinema","assets/rooms/cinema.jpg",["dark","soundproof","screen","private","recreational","seated","low-light","soft"]],["dressing","Dressing Room","assets/rooms/dressing.jpg",["private","mirrors","fashion","quiet","restricted","personal","soft","after-hours"]],["rooftop","Rooftop","assets/rooms/rooftop.jpg",["isolated","open-air","high","night","private","restricted","wind","low-light"]],["gym","Gym","assets/rooms/gym.jpg",["wellness","equipment","physical","private","mirrors","after-hours","open","surveillance"]],["kitchen","Smart Kitchen","assets/rooms/kitchen.jpg",["food","tech","water","screen","staffed","private","dining","surveillance"]],["library","Library","assets/rooms/library.jpg",["quiet","knowledge","private","soft","night","prestige","restricted","valuable"]],["lift","Lift","assets/rooms/lift.jpg",["restricted","movement","small","sealed","tech","transit","surveillance","locked"]],["med_suite","Medical Suite","assets/rooms/med-suite.jpg",["medical","restricted","clean","private","equipment","quiet","locked","water"]],["observ","Observatory","assets/rooms/observ.jpg",["isolated","high","tech","quiet","night","restricted","screen","private"]],["panic","Panic Room","assets/rooms/panic.jpg",["locked","secure","hidden","restricted","small","private","surveillance","sealed"]],["podstudio","Podcast Studio","assets/rooms/podstudio.jpg",["soundproof","tech","screen","creative","private","recording","low-light","sealed"]],["pool","Pool","assets/rooms/pool.jpg",["water","wellness","recreational","open","luxury","night","quiet","private"]],["wine_cellar","Wine Cellar","assets/rooms/wine_cellar.jpg",["luxury","restricted","quiet","valuable","private","cold","after-hours","locked"]]],
weapons:[["champagne_sabre","Champagne Sabre","assets/weapons/champagne_sabre.png",["sharp","luxury","ceremonial","metal","collectible","handheld","decorative","fingerprintable"]],["chargeing_cable","Charging Cable","assets/weapons/chargeing_cable.png",["flexible","tech","everyday","concealable","cord","modern","wired","small"]],["chefs_knife","Chef's Knife","assets/weapons/chefs_knife.png",["sharp","kitchen","metal","professional","handheld","practical","fingerprintable","obvious"]],["crystal_award","Crystal Award","assets/weapons/crystal_award.PNG",["blunt","fragile","decorative","luxury","heavy","collectible","fingerprintable","office"]],["drone","Drone","assets/weapons/drone.png",["tech","remote","surveillance","modern","powered","mobile","black","fragile"]],["gold_dumbbell","Gold Dumbbell","assets/weapons/gold_dumbbell.png",["blunt","heavy","luxury","gym","metal","obvious","fingerprintable","decorative"]],["keycard","Keycard","assets/weapons/keycard.png",["access","tech","thin","corporate","concealable","plastic","small","everyday"]],["luxury_pen","Luxury Pen","assets/weapons/luxury_pen.png",["sharp","luxury","small","concealable","professional","metal","office","fingerprintable"]],["mangrenade_candle","Mangrenade Candle","assets/weapons/mangreneade_candle.png",["fire","brand","collectible","decorative","small","luxury","everyday","fragile"]],["marble_bust","Marble Bust","assets/weapons/marble_bust.PNG",["blunt","heavy","decorative","luxury","art","solid","fingerprintable","office"]],["mci_original_artwork","MCI Original Artwork","assets/weapons/mci_original_artwork.PNG",["collectible","art","decorative","valuable","fragile","brand","luxury","office"]],["ring_light_stand","Ring Light Stand","assets/weapons/ring_light_stand.png",["metal","creative","tech","long","studio","portable","fingerprintable","blunt"]],["smart_speaker","Smart Speaker","assets/weapons/smart_speaker.png",["tech","powered","black","blunt","small","wired","everyday","office"]],["smart_watch_cable","Smart Watch Cable","assets/weapons/smart_watch_cable.png",["tech","flexible","small","everyday","concealable","cord","wired","modern"]],["sous_vide_weight","Sous Vide Weight","assets/weapons/sous_vide_weight.png",["heavy","kitchen","metal","blunt","professional","small","fingerprintable","practical"]],["stiletto","Stiletto","assets/weapons/stiletto.png",["sharp","fashion","concealable","luxury","personal","handheld","small","fingerprintable"]],["vr_headset","VR Headset","assets/weapons/vr_headset.png",["tech","modern","black","recreational","powered","headset","fragile","everyday"]]],
motives:[["affair","Affair","assets/motives/affair.png",["romantic","secret","personal","impulsive","status","emotional","shame","risk"]],["blackmail","Blackmail","assets/motives/blackmail.png",["secret","control","planned","fear","money","leverage","long-term","corporate"]],["career","Career","assets/motives/career.png",["professional","ambition","status","planned","reputation","competitive","long-term","public"]],["cover_up","Cover Up","assets/motives/cover_up.png",["secret","planned","protective","corporate","fear","control","reputation","long-term"]],["debt_pressure","Debt Pressure","assets/motives/debt_pressure.png",["financial","desperate","pressure","fear","short-term","risk","long-term","control"]],["family_secret","Family Secret","assets/motives/family_secret.png",["family","secret","protective","long-term","shame","emotional","reputation","fear"]],["financial_ruin","Financial Ruin","assets/motives/financial_ruin.png",["financial","desperate","status","fear","collapse","planned","public","reputation"]],["inheritance","Inheritance","assets/motives/inheritance.png",["family","financial","planned","status","long-term","greed","secret","control"]],["jealousy","Jealousy","assets/motives/jealousy.png",["romantic","emotional","impulsive","status","personal","resentment","public","shame"]],["mistaken_id","Mistaken Identity","assets/motives/mistaken_id.png",["error","confusion","impulsive","bad intel","accidental","opportunistic","fear","short-term"]],["obsession","Obsession","assets/motives/obsession.png",["romantic","fixated","emotional","long-term","irrational","personal","secret","control"]],["professional_rivalry","Professional Rivalry","assets/motives/professional_rivalry.png",["professional","status","competition","ambition","reputation","planned","long-term","public"]],["rejection","Rejection","assets/motives/rejection.png",["romantic","emotional","impulsive","personal","humiliation","resentment","status","shame"]],["reputation_protection","Reputation Protection","assets/motives/reputation_protection.png",["status","reputation","protective","planned","public","fear","professional","control"]],["revenge","Revenge","assets/motives/revenge.png",["resentment","justice","planned","personal","long-term","emotional","secret","control"]],["whistleblower_silence","Whistleblower Silence","assets/motives/whistleblower_silence.png",["corporate","secret","planned","protective","reputation","fear","professional","control"]]]};


let CASES = [];
let DATA_READY = false;
let scrollMemory = {};
let liveCardMemory = {};
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
  caseIndex: +(localStorage.getItem("mci_current_case_index") || 0),
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

async function loadCases() {
  try {
    const res = await fetch("data/cases.json", { cache: "no-store" });
    if (!res.ok) throw new Error("data/cases.json missing");
    const data = await res.json();
    CASES = normaliseCases(data.cases || []);
  } catch (e) {
    console.warn(e);
    CASES = fallbackCases();
  }

  DATA_READY = true;
  state.caseIndex = clampCaseIndex(state.caseIndex);
  resetForCase(state.caseIndex, true);
  render({ preservePageScroll: false });
}

function normaliseCases(cases) {
  return cases.map((c, i) => {
    const solution = {
      suspect: c.solution?.suspect?.id || c.murdererId || "",
      room: c.solution?.room?.id || c.roomId || "",
      weapon: c.solution?.weapon?.id || c.weaponId || "",
      motive: c.solution?.motive?.id || c.motiveId || ""
    };

    return {
      id: c.id || `P${String(i + 1).padStart(3, "0")}`,
      title: c.title || "Untitled Case",
      turns: 6,
      victim: c.victim?.name || c.victim || "Unknown Victim",
      victimId: c.victim?.id || "",
      victimImg: imageFor("suspect", c.victim?.id),
      solution,
      narrative: {
        opening: c.narrative?.opening || c.opening_text || "A body has been discovered inside Blackwood Tower.",
        officialFindings: c.narrative?.officialFindings || officialFindingsFromSolution(solution),
        reconstruction: c.narrative?.reconstruction || c.den || "The investigation has concluded.",
        aftermath: c.narrative?.aftermath || "Blackwood Tower adjusts around the consequences of the case. Trust shifts, pressure rises and the next secret moves closer to the surface.",
        informationEvent: c.narrative?.informationEvent || "",
        revealEvent: c.narrative?.revealEvent || c.revealEvent || "",
        careerProgression: c.narrative?.careerProgression || "Your case record has been updated.",
        tomorrowHook: c.narrative?.tomorrowHook || ""
      },
      canon: c.canon || {}
    };
  }).filter(c => c.solution.suspect && c.solution.room && c.solution.weapon && c.solution.motive);
}

function fallbackCases() {
  return [{
    id: "P001",
    victim: "Bianca Frost",
    victimId: "bianca_frost",
    victimImg: imageFor("suspect", "bianca_frost"),
    title: "The Missing Hour",
    turns: 6,
    solution: { suspect: "harvey_slate", weapon: "luxury_pen", room: "library", motive: "family_secret" },
    narrative: {
      opening: "Bianca Frost is dead. A single page appears to have been removed from her notebook shortly before her death.",
      officialFindings: "Suspect: Harvey Slate\nRoom: Library\nWeapon: Luxury Pen\nMotive: Family Secret",
      reconstruction: "Harvey Slate murdered Bianca Frost in the Library using the Luxury Pen. The motive was Family Secret.",
      aftermath: "Blackwood Tower becomes less trusting after Bianca's death.",
      informationEvent: "A fragment of the missing notebook page is discovered.",
      revealEvent: "",
      careerProgression: "Your case record has been updated.",
      tomorrowHook: "The next case will test what Blackwood is hiding."
    },
    canon: {}
  }];
}

function clampCaseIndex(i) {
  return Math.max(0, Math.min((CASES.length || 1) - 1, +i || 0));
}

function currentCase() {
  return CASES[state.caseIndex] || fallbackCases()[0];
}

function completedCases() {
  try {
    return new Set(JSON.parse(localStorage.getItem("mci_completed_cases") || "[]"));
  } catch (e) {
    return new Set();
  }
}

function saveCompletedCases(set) {
  localStorage.setItem("mci_completed_cases", JSON.stringify([...set]));
}

function allPrologueCasesComplete() {
  const done = completedCases();
  return CASES.slice(0, PROLOGUE_LENGTH).every(c => done.has(c.id));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function sleuthIndex() {
  const accuracyBonus = state.history.length ? Math.max(0, 100 - ((state.history.length - 1) * 10)) : 0;
  return (player.solved * 100) + (player.streak * 25) + accuracyBonus;
}

function bg(p) {
  return `style="background-image:url('${p}')"`;
}

function escapeHTML(s = "") {
  return String(s).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[m]));
}

function para(text = "") {
  return String(text)
    .split(/\n\n+/)
    .filter(Boolean)
    .map(x => `<p>${escapeHTML(x).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function highlightedPara(text = "") {
  const c = currentCase();
  const words = [
    item("suspect", c.solution.suspect)?.[1],
    item("weapon", c.solution.weapon)?.[1],
    item("room", c.solution.room)?.[1],
    item("motive", c.solution.motive)?.[1]
  ].filter(Boolean);

  return String(text)
    .split(/\n\n+/)
    .filter(Boolean)
    .map(block => {
      let safe = escapeHTML(block).replace(/\n/g, "<br>");
      words.forEach(w => {
        safe = safe.replaceAll(escapeHTML(w), `<mark>${escapeHTML(w)}</mark>`);
      });
      return `<p>${safe}</p>`;
    })
    .join("");
}

function imageFor(type, id) {
  const it = item(type, id);
  return it ? it[2] : "";
}

function haptic(p = 10) {
  if (!player.haptics) return;
  if (navigator.vibrate) navigator.vibrate(p);
}

function saveScrolls() {
  document.querySelectorAll(".carousel").forEach(e => scrollMemory[e.dataset.type] = e.scrollLeft);
}

function restoreScrolls(pageY) {
  requestAnimationFrame(() => {
    document.querySelectorAll(".carousel").forEach(e => {
      if (scrollMemory[e.dataset.type] != null) e.scrollLeft = scrollMemory[e.dataset.type];
    });
    if (typeof pageY === "number") window.scrollTo(0, pageY);
    updateLiveCards(false);
    animateProgressBars();
  });
}

function updateLiveCards(allowHaptic = true) {
  document.querySelectorAll(".carousel").forEach(car => {
    const mid = car.getBoundingClientRect().left + car.clientWidth / 2;
    let best = null;
    let dist = Infinity;

    car.querySelectorAll(".card").forEach(card => {
      card.classList.remove("live");
      const r = card.getBoundingClientRect();
      const d = Math.abs((r.left + r.width / 2) - mid);
      if (d < dist) {
        dist = d;
        best = card;
      }
    });

    if (best) {
      best.classList.add("live");
      const key = car.dataset.type;
      const id = best.dataset.cardId;
      if (allowHaptic && liveCardMemory[key] && liveCardMemory[key] !== id) haptic(4);
      liveCardMemory[key] = id;
    }
  });
}

function render(options = {}) {
  const preservePageScroll = options.preservePageScroll !== false;
  const pageY = preservePageScroll ? window.scrollY : undefined;

  if (!DATA_READY) {
    loadingHome();
    return;
  }

  saveScrolls();

  if (state.screen === "name") nameScreen();
  if (state.screen === "home") home();
  if (state.screen === "how") howToPlay();
  if (state.screen === "settings") settings();
  if (state.screen === "info") informationBase();
  if (state.screen === "casefile") casefile();
  if (state.screen === "investigation") investigation();
  if (state.screen === "solved") end(false);
  if (state.screen === "failed") end(true);

  restoreScrolls(pageY);
}

function loadingHome() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.frontpage)}><div class="content tight"><h1>MCI</h1><div class="panel"><h2>LOADING CASE FILES</h2><p>Preparing Blackwood Tower...</p></div></div></section>`;
}

function nameScreen() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.frontpage)}><div class="content tight"><h1>MCI</h1><h2>MURDER CASE INVESTIGATION</h2><div class="panel dark"><h2>REGISTER DETECTIVE</h2><p>No login. No account. Your name is stored only on this device.</p><input id="playerName" class="name-input" maxlength="22" placeholder="Your name" autocomplete="off" /><button class="primary" onclick="savePlayerName()">BEGIN</button></div></div></section>`;
}

function savePlayerName() {
  const input = document.getElementById("playerName");
  const name = (input?.value || "").trim();
  if (!name) {
    haptic([20, 40, 20]);
    alert("Enter your detective name.");
    return;
  }
  player.name = name;
  localStorage.setItem("mci_player_name", name);
  haptic(25);
  go("home");
}

function home() {
  const c = currentCase();
  const done = completedCases();
  const count = Math.min(PROLOGUE_LENGTH, CASES.length);

  app.innerHTML = `<section class="screen" ${bg(ASSETS.frontpage)}><div class="content"><h1>MCI</h1><h2>MURDER CASE INVESTIGATION</h2><div class="statgrid"><div class="stat"><div class="label">Detective Rank</div><div class="value">${escapeHTML(player.rank)}</div></div><div class="stat"><div class="label">Streak</div><div class="value">${player.streak}</div></div><div class="stat"><div class="label">Cases Solved</div><div class="value">${player.solved}</div></div><div class="stat"><div class="label">Sleuth Index</div><div class="value">${sleuthIndex()}</div></div></div><div class="panel"><h2>TODAY'S CASE</h2><h3>${c.id} — ${escapeHTML(c.title)}</h3><p>Victim: ${escapeHTML(c.victim)}</p><p class="small">Prologue case ${state.caseIndex + 1} of ${count}</p></div><button class="primary" onclick="openCase()">OPEN CASE FILE</button><div class="button-row"><button class="secondary" onclick="go('info')">INFORMATION BASE</button><button class="secondary" onclick="go('how')">HOW TO PLAY</button></div><button class="secondary" onclick="go('settings')">SETTINGS</button><div class="panel dark"><h2>PLAYTEST CASE ACCESS</h2><div class="case-list">${CASES.slice(0, count).map((x, i) => `<button class="case-pill ${done.has(x.id) ? "done" : ""} ${i === state.caseIndex ? "current" : ""}" onclick="selectCase(${i})"><b>${x.id}</b> — ${escapeHTML(x.title)}<br><span class="small">${done.has(x.id) ? "Solved" : "Available"}</span></button>`).join("")}</div></div></div></section>`;
}

function howToPlay() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>HOW TO PLAY</h2><p>Each day there is one murder inside Blackwood Tower.</p><p>You must identify four truths:</p><ul><li>Suspect</li><li>Weapon</li><li>Room</li><li>Motive</li></ul><p>Choose one card from each category and submit an accusation.</p><p>The loading bar shows how many of the four categories are correct: red for zero, amber as you get closer, green for all four.</p><p>The bottom display compares your latest accusation with the true cards. For each wrong card, it reveals one matching characteristic, feature or driver and tells you how many matched in total.</p><p>Previously revealed characteristics, features and drivers remain highlighted on the cards.</p><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function informationBase() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>INFORMATION BASE</h2><p>MCI is a daily deduction game set inside Blackwood Tower.</p><p>Every case has two jobs:</p><ul><li>Solve the murder.</li><li>Learn something new about Blackwood Tower.</li></ul><h2>NARRATIVE FLOW</h2><ul><li>Case Opening</li><li>Investigation</li><li>Investigation Outcome</li><li>Official Findings</li><li>Reconstruction</li><li>Aftermath</li><li>Information Event</li><li>Reveal Event</li><li>Career Progression</li><li>Next Case</li></ul><p class="small">Backend data such as difficulty, arc and internal narrative classifications are not shown to players.</p><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function settings() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>SETTINGS</h2><div class="toggle-row"><div><h3>Haptic Feedback</h3><p class="small">Small vibration taps on supported phones.</p></div><button class="switch ${player.haptics ? "on" : ""}" aria-label="Toggle haptics" onclick="toggleHaptics()"></button></div><div class="panel"><h3>Detective Name</h3><p>${escapeHTML(player.name)}</p><button class="ghost" onclick="renamePlayer()">CHANGE NAME</button></div><button class="ghost" onclick="resetPlaytestProgress()">RESET PLAYTEST PROGRESS</button><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function toggleHaptics() {
  player.haptics = !player.haptics;
  localStorage.setItem("mci_haptics", player.haptics ? "on" : "off");
  haptic(20);
  render();
}

function renamePlayer() {
  const name = prompt("Enter detective name", player.name || "");
  if (!name) return;
  player.name = name.trim().slice(0, 22) || player.name;
  localStorage.setItem("mci_player_name", player.name);
  render();
}

function resetPlaytestProgress() {
  if (!confirm("Reset solved cases and return to Case 1?")) return;
  localStorage.removeItem("mci_completed_cases");
  localStorage.removeItem("mci_current_case_index");
  state.caseIndex = 0;
  resetForCase(0);
  go("home");
}

function selectCase(i) {
  state.caseIndex = clampCaseIndex(i);
  localStorage.setItem("mci_current_case_index", state.caseIndex);
  resetForCase(state.caseIndex);
  go("casefile", false);
}

function openCase() {
  resetForCase(state.caseIndex);
  go("casefile", false);
}

function resetForCase(i, keepScreen = false) {
  const nextScreen = keepScreen ? state.screen : state.screen;
  state = {
    ...state,
    screen: nextScreen,
    caseIndex: clampCaseIndex(i),
    guessesLeft: currentCase()?.turns || 6,
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
  scrollMemory = {};
  liveCardMemory = {};
}

function casefile() {
  const c = currentCase();
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content"><div class="panel dark"><h2>CASE FILE OPENED</h2><h2>${escapeHTML(c.victim)}</h2><h3>${c.id} — ${escapeHTML(c.title)}</h3>${para(c.narrative.opening)}<h2>${c.turns} accusations authorised</h2></div><button class="primary" onclick="go('investigation', false)">BEGIN INVESTIGATION</button><button class="secondary" onclick="go('home', false)">RETURN HOME</button></div></section>`;
}

function investigation() {
  const c = currentCase();
  app.innerHTML = `<div class="topbar"><div class="hudrow"><div class="hudbox"><span class="hud-label">Detective:</span><span class="hud-value">${escapeHTML(player.name || player.rank)}</span></div><div class="hudbox"><span class="hud-label">Case:</span><span class="hud-value">${state.caseIndex + 1}</span></div><div class="hudbox"><span class="hud-label">Accusations Remaining:</span><span class="hud-value">${state.guessesLeft}</span></div></div><div class="selection-grid"><div class="selection-cell">Suspect: ${name("suspects", state.selected.suspect)}</div><div class="selection-cell">Weapon: ${name("weapons", state.selected.weapon)}</div><div class="selection-cell">Room: ${name("rooms", state.selected.room)}</div><div class="selection-cell">Motive: ${name("motives", state.selected.motive)}</div></div></div><section class="screen investigation" ${bg(ASSETS.investigation)}><div class="content">${progressHTML()}${evidenceBoard()}${carousel("suspect", "SUSPECT", visibleCards("suspect"))}${carousel("weapon", "WEAPON", visibleCards("weapon"))}${carousel("room", "ROOM", visibleCards("room"))}${carousel("motive", "MOTIVE", visibleCards("motive"))}<div class="panel"><h2>MAKE ACCUSATION</h2><p>Select one suspect, weapon, room and motive.</p><button class="primary" onclick="accuse()">SUBMIT ACCUSATION</button></div>${bottomHUD()}</div></section>${accusationPending ? loaderOverlay() : ""}`;
  setTimeout(() => updateLiveCards(false), 50);
}

function visibleCards(type) {
  const map = { suspect: "suspects", weapon: "weapons", room: "rooms", motive: "motives" };
  const all = CARDS[map[type]];
  const sol = currentCase().solution[type];
  const chosen = new Set([sol]);
  const seed = currentCase().id + type;
  seededShuffle(all.map(x => x[0]), seed).forEach(id => {
    if (chosen.size < 8) chosen.add(id);
  });
  return all.filter(x => chosen.has(x[0]));
}

function seededShuffle(arr, seed) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    const j = Math.abs(h) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function evidenceBoard() {
  const labels = { suspect: "CHARACTERISTICS", weapon: "WEAPON FEATURES", room: "ROOM FEATURES", motive: "DRIVERS" };
  return `<div class="panel"><h2>EVIDENCE BOARD</h2><div class="evidence-board">${["suspect", "weapon", "room", "motive"].map(k => `<div class="evidence-box"><h4>${labels[k]}</h4>${state.evidence[k].length ? state.evidence[k].map(x => `<span class="evidence-tag">${escapeHTML(x)}</span>`).join("") : "<span class='evidence-tag'>Awaiting evidence</span>"}</div>`).join("")}</div></div>`;
}

function progressHTML() {
  if (state.lastScore === null) return "";
  const pct = [18, 35, 58, 80, 100][state.lastScore];
  const col = ["var(--red)", "var(--amber1)", "var(--amber2)", "var(--amber3)", "var(--green)"][state.lastScore];
  return `<div class="panel"><div class="progress-label">${state.lastScore}/4 CATEGORIES MATCH</div><div class="progress-shell"><div class="progress-bar" data-target="${pct}" style="width:0%;background:${col}"></div></div></div>`;
}

function animateProgressBars() {
  document.querySelectorAll(".progress-bar[data-target]").forEach(bar => {
    const target = bar.getAttribute("data-target");
    requestAnimationFrame(() => {
      bar.style.width = `${target}%`;
    });
  });
}

function carousel(type, title, items) {
  const loop = [...items, ...items, ...items];
  return `<div class="carousel-block"><div class="carousel-title">${title}</div><div class="carousel" data-type="${type}" onscroll="loopCarousel(this);updateLiveCards()">${loop.map(itemData => card(type, itemData)).join("")}</div></div>`;
}

function card(type, itemData) {
  const [id, n, img, tags] = itemData;
  const cls = [state.selected[type] === id ? "selected" : "", state.locked[type] === id ? "correct" : "", state.wrong[type]?.includes(id) ? "incorrect" : ""].join(" ");
  const contain = ["marble_bust", "crystal_award", "mci_original_artwork"].includes(id) ? "contain" : "";
  return `<div class="card ${cls}" data-card-id="${id}" onclick="selectCard('${type}','${id}')"><img class="${contain}" src="${img}" alt="${escapeHTML(n)}" onerror="this.style.opacity=.15"><div class="card-category">${labelFor(type)}</div><div class="card-tags">${tags.slice(0, 8).map(t => `<span class="card-tag ${isRev(type, id, t) ? "revealed" : ""}">${escapeHTML(t)}</span>`).join("")}</div></div>`;
}

function selectCard(type, id) {
  if (state.locked[type]) return;
  const y = window.scrollY;
  saveScrolls();
  haptic(10);
  state.selected[type] = id;
  render({ preservePageScroll: true });
  requestAnimationFrame(() => window.scrollTo(0, y));
}

function accuse() {
  const keys = ["suspect", "weapon", "room", "motive"];
  if (!keys.every(k => state.selected[k])) {
    haptic([20, 50, 20]);
    alert("Select one suspect, weapon, room and motive.");
    return;
  }

  haptic(25);
  const result = evaluateAccusation();
  accusationPending = result;
  state.loadingScore = result.correct;
  render({ preservePageScroll: true });

  setTimeout(() => {
    applyAccusation(result);
    accusationPending = null;
    if (result.correct === 4) {
      markSolved();
      haptic([60, 90, 60]);
      go("solved", false);
      return;
    }
    if (state.guessesLeft <= 0) {
      haptic([100, 100, 100]);
      go("failed", false);
      return;
    }
    render({ preservePageScroll: true });
  }, 1450);
}

function evaluateAccusation() {
  const keys = ["suspect", "weapon", "room", "motive"];
  const c = currentCase();
  const feedback = [];
  let correct = 0;
  const row = [];
  const snapshot = { ...state.selected };

  keys.forEach(k => {
    const guess = state.selected[k];
    const sol = c.solution[k];
    const ok = guess === sol;
    row.push(ok);

    if (ok) {
      correct++;
      feedback.push({ type: k, ok: true, name: item(k, guess)[1], total: 8, disclosed: "CONFIRMED" });
    } else {
      const guessTags = item(k, guess)?.[3] || [];
      const solTags = item(k, sol)?.[3] || [];
      const matches = guessTags.filter(t => solTags.includes(t));
      const already = state.revealed[k]?.[guess] || [];
      const disclosed = matches.find(t => !already.includes(t)) || matches[0] || "No visible match";
      feedback.push({ type: k, ok: false, name: item(k, guess)[1], disclosed, total: matches.length });
    }
  });

  return { correct, row, feedback, snapshot };
}

function applyAccusation(result) {
  state.feedback = [];
  const keys = ["suspect", "weapon", "room", "motive"];
  const c = currentCase();

  keys.forEach(k => {
    const guess = result.snapshot[k];
    const sol = c.solution[k];
    const fb = result.feedback.find(x => x.type === k);

    if (guess === sol) {
      state.locked[k] = guess;
    } else {
      state.wrong[k] = state.wrong[k] || [];
      if (!state.wrong[k].includes(guess)) state.wrong[k].push(guess);
      if (fb.disclosed !== "No visible match") {
        state.revealed[k] = state.revealed[k] || {};
        state.revealed[k][guess] = state.revealed[k][guess] || [];
        if (!state.revealed[k][guess].includes(fb.disclosed)) state.revealed[k][guess].push(fb.disclosed);
        if (!state.evidence[k].includes(fb.disclosed)) state.evidence[k].push(fb.disclosed);
      }
    }
  });

  state.feedback = result.feedback;
  state.history.push(result.row);
  state.lastScore = result.correct;
  state.lastAccusation = result.snapshot;
  state.guessesLeft--;
}

function loaderOverlay() {
  const score = state.loadingScore ?? 0;
  const pct = [18, 35, 58, 80, 100][score];
  const col = ["var(--red)", "var(--amber1)", "var(--amber2)", "var(--amber3)", "var(--green)"][score];
  return `<div class="overlay"><div class="loader-card"><div class="loader-title">ANALYSING ACCUSATION</div><p class="loader-text">Comparing your theory against the Blackwood case file.</p><div class="progress-shell"><div class="progress-bar" data-target="${pct}" style="width:0%;background:${col}"></div></div><p class="loader-text">${score}/4 categories match</p></div></div>`;
}

function bottomHUD() {
  if (!state.feedback.length) {
    return `<div class="bottomhud"><h2>HEADS-UP DISPLAY</h2><p class="small">Submit an accusation to reveal evidence. Each wrong card can reveal one aligned characteristic, feature or driver and the total number of matches.</p></div>`;
  }

  return `<div class="bottomhud"><h2>LAST ACCUSATION FEEDBACK</h2><div class="feedback-grid">${state.feedback.map(f => {
    if (f.ok) return `<div class="feedback-line"><b>${labelFor(f.type)}</b><br><span class="green">CONFIRMED:</span> ${escapeHTML(f.name)}</div>`;
    return `<div class="feedback-line"><b>${labelFor(f.type)}</b><br>${escapeHTML(f.name)} is wrong.<br><span class="green">${revealLabel(f.type)}:</span> ${escapeHTML(f.disclosed)}<br><span>${f.total} ${matchLabel(f.type, f.total)} matched the true card.</span></div>`;
  }).join("")}</div></div>`;
}

function revealLabel(type) {
  return ({
    suspect: "Characteristic Revealed",
    weapon: "Feature Revealed",
    room: "Feature Revealed",
    motive: "Driver Revealed"
  })[type];
}

function matchLabel(type, count) {
  const plural = count === 1 ? "" : "s";
  return ({
    suspect: `characteristic${plural}`,
    weapon: `feature${plural}`,
    room: `feature${plural}`,
    motive: `driver${plural}`
  })[type];
}

function labelFor(type) {
  return ({ suspect: "SUSPECT", weapon: "WEAPON", room: "ROOM", motive: "MOTIVE" })[type];
}

function markSolved() {
  const c = currentCase();
  const done = completedCases();

  if (!done.has(c.id)) {
    done.add(c.id);
    saveCompletedCases(done);
    player.solved++;
    localStorage.setItem("mci_solved", player.solved);
  }

  const today = todayKey();
  if (player.lastSolvedDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);
    player.streak = player.lastSolvedDate === yKey ? player.streak + 1 : Math.max(player.streak, 1);
    player.lastSolvedDate = today;
    localStorage.setItem("mci_streak", player.streak);
    localStorage.setItem("mci_last_solved_date", player.lastSolvedDate);
  }
}

function end(failed) {
  const c = currentCase();
  const s = c.solution;
  const finalPrologue = !failed && allPrologueCasesComplete();

  app.innerHTML = `<section class="screen" ${bg(ASSETS.caseclosed)}><div class="content"><div class="end-title">${failed ? "THEY GOT AWAY WITH IT" : "CASE SOLVED"}</div><div class="subtitle">${failed ? "The killer walks free." : "Great work, Detective."}</div><div class="panel dark"><h2>VICTIM: ${escapeHTML(c.victim)}</h2><div class="result-grid">${res("SUSPECT", "suspect", s.suspect)}${res("WEAPON", "weapon", s.weapon)}${res("ROOM", "room", s.room)}${res("MOTIVE", "motive", s.motive)}</div><h2>INVESTIGATION OUTCOME</h2><p>${failed ? "The official case file remains unresolved in your record." : "The accusation has been verified against the Blackwood case file."}</p><h2>OFFICIAL FINDINGS</h2>${officialFindingsHTML(c)}<h2>RECONSTRUCTION</h2>${highlightedPara(c.narrative.reconstruction)}${c.narrative.aftermath ? `<h2>AFTERMATH</h2>${para(c.narrative.aftermath)}` : ""}${c.narrative.informationEvent ? `<div class="panel"><h2>INFORMATION EVENT</h2>${para(c.narrative.informationEvent)}</div>` : ""}${c.narrative.revealEvent ? `<div class="panel reveal-event"><h2>REVEAL EVENT</h2>${para(c.narrative.revealEvent)}</div>` : ""}<h2>CAREER PROGRESSION</h2><p>${escapeHTML(c.narrative.careerProgression || "Your case record has been updated.")}</p>${finalPrologue ? prologueEndHTML() : teaserHTML(c)}<button class="primary" onclick="share(${failed})">SHARE RESULT</button><button class="secondary" onclick="feedbackEmail()">EMAIL FEEDBACK</button><p class="email-note">Help Blackwood Tower grow. Share your result with 10 friends.</p>${nextCaseButton()}<button class="ghost" onclick="go('home', false)">RETURN HOME</button></div></div></section>`;
}

function officialFindingsFromSolution(solution) {
  return `Suspect: ${item("suspect", solution.suspect)?.[1] || "Unknown"}\nRoom: ${item("room", solution.room)?.[1] || "Unknown"}\nWeapon: ${item("weapon", solution.weapon)?.[1] || "Unknown"}\nMotive: ${item("motive", solution.motive)?.[1] || "Unknown"}`;
}

function officialFindingsHTML(c) {
  const s = c.solution;
  return `<p>Suspect: ${escapeHTML(item("suspect", s.suspect)?.[1] || "Unknown")}<br>Room: ${escapeHTML(item("room", s.room)?.[1] || "Unknown")}<br>Weapon: ${escapeHTML(item("weapon", s.weapon)?.[1] || "Unknown")}<br>Motive: ${escapeHTML(item("motive", s.motive)?.[1] || "Unknown")}</p>`;
}

function teaserHTML(c) {
  if (!c.narrative.tomorrowHook) return "";
  return `<div class="panel"><h2>NEXT CASE</h2>${para(c.narrative.tomorrowHook)}</div>`;
}

function prologueEndHTML() {
  return `<div class="panel prologue-banner"><h2>PROLOGUE COMPLETE</h2><p>Blackwood Tower has not given up its secrets. It has only shown you where the bodies are buried.</p><p>The full season of MCI is coming soon.</p><p>Season One will open the wider case file.</p></div>`;
}

function nextCaseButton() {
  if (state.caseIndex >= Math.min(PROLOGUE_LENGTH, CASES.length) - 1) return "";
  return `<button class="secondary" onclick="nextCase()">NEXT CASE</button>`;
}

function nextCase() {
  const n = Math.min(CASES.length - 1, state.caseIndex + 1);
  state.caseIndex = n;
  localStorage.setItem("mci_current_case_index", n);
  resetForCase(n);
  go("casefile", false);
}

function res(label, type, id) {
  const it = item(type, id);
  if (!it) return "";
  const contain = ["marble_bust", "crystal_award", "mci_original_artwork"].includes(id) ? "contain" : "";
  return `<div class="result-card"><img class="${contain}" src="${it[2]}" alt="${escapeHTML(it[1])}"><h2>${label}</h2><p>${escapeHTML(it[1])}</p></div>`;
}

function share(failed) {
  const c = currentCase();
  const used = c.turns - state.guessesLeft;
  const grid = state.history.map(r => r.map(x => x ? "🟩" : "⬛").join("")).join("\n") || "⬛⬛⬛⬛";
  const text = `MCI Prologue ${c.id}\n${c.title}\n\n${grid}\n\n${failed ? "They got away with it." : `Solved in ${used} accusation${used === 1 ? "" : "s"}.`}\nDetective: ${player.name || player.rank}\nDaily streak: ${player.streak}\nCases solved: ${player.solved}\nSleuth Index: ${sleuthIndex()}\n\nHelp Blackwood Tower grow. Share your result with 10 friends.\n${GAME_URL}`;

  if (navigator.share) navigator.share({ text });
  else {
    navigator.clipboard.writeText(text);
    alert("Result copied.");
  }
}

function feedbackEmail() {
  const c = currentCase();
  const subject = encodeURIComponent(`MCI Prologue Feedback — ${c.id}`);
  const body = encodeURIComponent(`Thank you for playing MCI Prologue. We greatly value your feedback. Could you please answer these 10 questions with as much detail as possible?\n\n1. On a scale of 0 to 10, how likely are you to recommend MCI to a friend?\n\n2. Do you play other daily online puzzle games? Yes or No.\n\n3. If yes, please list the daily online puzzle games you play.\n\n4. Which case did you enjoy most, and why?\n\n5. What did you enjoy most about solving the daily cases?\n\n6. Were the characteristics, features and drivers clear and helpful in guiding your deductions?\n\n7. Was the accusation feedback easy to understand, including the revealed characteristic, feature or driver and the total number of matches?\n\n8. How did you find the difficulty level of this case and the prologue overall?\n\n9. Did the story and narrative between cases make you want to return for the next case?\n\n10. How would you improve the interface, card selection, or game flow?\n\nOptional notes:\n\nCase played: ${c.id} — ${c.title}\nDetective name: ${player.name}\nDaily streak: ${player.streak}\nCases solved: ${player.solved}\nSleuth Index: ${sleuthIndex()}\n`);
  window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
}

function go(x, preserveScroll = true) {
  state.screen = x;
  render({ preservePageScroll: preserveScroll });
}

function item(type, id) {
  return ({ suspect: CARDS.suspects, weapon: CARDS.weapons, room: CARDS.rooms, motive: CARDS.motives }[type] || []).find(x => x[0] === id);
}

function name(group, id) {
  if (!id) return "Not selected";
  return ({ suspects: CARDS.suspects, weapons: CARDS.weapons, rooms: CARDS.rooms, motives: CARDS.motives }[group] || []).find(x => x[0] === id)?.[1] || "Not selected";
}

function isRev(type, id, t) {
  return state.revealed?.[type]?.[id]?.includes(t);
}

function loopCarousel(el) {
  const third = el.scrollWidth / 3;
  if (el.scrollLeft < third * 0.18) el.scrollLeft += third;
  if (el.scrollLeft > third * 1.82) el.scrollLeft -= third;
  scrollMemory[el.dataset.type] = el.scrollLeft;
}
