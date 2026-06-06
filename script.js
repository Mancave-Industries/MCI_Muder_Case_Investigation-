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

const CARD_LABELS = {
  suspect: "SUSPECT",
  weapon: "WEAPON",
  room: "ROOM",
  motive: "MOTIVE"
};

const DETAIL_LABELS = {
  suspect: "Characteristic",
  weapon: "Feature",
  room: "Feature",
  motive: "Driver"
};

const DETAIL_LABELS_PLURAL = {
  suspect: "Characteristics",
  weapon: "Features",
  room: "Features",
  motive: "Drivers"
};

const PLAYABLE_ATTRIBUTE_HEADINGS = {
  suspect: "Suspect Characteristics:",
  weapon: "Weapon Features:",
  room: "Room Features:",
  motive: "Motive Drivers:"
};


const TRUE_CARD_LABELS = {
  suspect: "true suspect",
  weapon: "true weapon",
  room: "true room",
  motive: "true motive"
};


const INFO_DESCRIPTIONS = {
  suspects: {
    harvey_slate: "A powerful strategist who projects calm authority inside Blackwood Tower. Harvey is respected, influential and rarely caught off guard.",
    bianca_frost: "An investigative resident known for persistence and difficult questions. Bianca notices contradictions others prefer to ignore.",
    dorian_luxe: "A refined collector and cultural authority whose world is built on status, reputation and perception.",
    velvet_kane: "An art historian with a methodical eye for inconsistency. Velvet is respected because she refuses to ignore uncomfortable details.",
    india_gold: "A celebrity resident who understands visibility better than almost anyone in the tower. For India, image is work and attention is currency.",
    nova_wilde: "A photographer and observer who notices moments others miss. Nova often becomes important simply because she is paying attention.",
    jaxon_vale: "A charismatic podcaster drawn to the truth beneath the story. Jaxon’s curiosity often puts him close to dangerous information.",
    milo_vale: "A technologist fascinated by systems, data and hidden patterns. Milo is analytical, inventive and rarely satisfied with surface answers.",
    otis_blank: "A doctor and authority figure whose professional history carries weight. Otis represents trust, responsibility and consequence.",
    gideon_pryce: "A former intelligence operative with a disciplined eye for behaviour. Gideon watches more than he says.",
    piper_bloom: "An activist driven by conviction and moral pressure. Piper’s idealism can inspire loyalty and create conflict.",
    rex_branson: "A security specialist used to watching access, movement and risk. Rex is protective, physical and alert to threat.",
    saffron_skye: "A lawyer and investigator focused on accountability. Saffron brings legal pressure into places that prefer secrecy.",
    sebastian_drift: "An archivist and historian who understands the power of records. Sebastian knows that memory can become evidence.",
    tilly_chrome: "A chef, entrepreneur and performer under constant pressure to succeed. Tilly’s ambition makes her visible and vulnerable.",
    cleo_saint: "An heir and social strategist shaped by legacy, inheritance and power. Cleo understands the value of reputation."
  },
  rooms: {
    art_vault: "A secure gallery space where value, status and authenticity intersect.",
    billiard_room: "A private recreational room suited to quiet conversations, rivalries and late-night pressure.",
    chefs_table: "A performance dining space where status, service and social tension meet.",
    cinema: "A dark private screening room built for privacy, projection and observation.",
    dressing: "A personal preparation space connected to image, performance and vulnerability.",
    rooftop: "An exposed high-level space where privacy, danger and spectacle can collide.",
    gym: "A physical training room where movement, timelines and routine can become important.",
    kitchen: "A high-spec smart kitchen where preparation, access and controlled environments matter.",
    library: "A quiet archive of records, research and private knowledge.",
    lift: "A controlled transit space where access, timing and observation become crucial.",
    med_suite: "A calm private suite associated with reflection, vulnerability and emotional pressure.",
    observ: "An isolated room built for distance, perspective and discovery.",
    panic: "A secure hidden space designed for protection, confinement and secrecy.",
    podstudio: "A recording space where voice, exposure and evidence can become dangerous.",
    pool: "A luxury wellness space where calm surfaces can hide risk.",
    wine_cellar: "A restricted private space suited to confession, leverage and trust."
  },
  weapons: {
    champagne_sabre: "A ceremonial luxury object where status and violence sit uncomfortably close.",
    chargeing_cable: "An everyday technology item whose usefulness makes it easy to overlook.",
    chefs_knife: "A professional kitchen tool associated with access, precision and opportunity.",
    crystal_award: "A symbol of recognition and status with dangerous physical weight.",
    drone: "A remote technology object linked to distance, surveillance and control.",
    gold_dumbbell: "A conspicuous fitness object associated with strength, weight and opportunity.",
    keycard: "A small access object representing privilege, movement and control.",
    luxury_pen: "A symbol of authority and influence, often close to decisions and signatures.",
    mangrenade_candle: "A branded object tied to identity, creativity and personal style.",
    marble_bust: "A prestige art object with weight, value and symbolic force.",
    mci_original_artwork: "A valuable MCI artwork connected to status, authenticity and ownership.",
    ring_light_stand: "A creative tool associated with visibility, influence and performance.",
    smart_speaker: "A connected device tied to privacy, audio and hidden information.",
    smart_watch_cable: "A small everyday technology item associated with opportunity and improvisation.",
    sous_vide_weight: "A kitchen object built for control, weight and preparation.",
    stiletto: "A fashion object associated with status, concealment and improvisation.",
    vr_headset: "A technology object connected to distraction, isolation and altered perception."
  },
  motives: {
    affair: "A motive driven by exposure risk, secrecy and emotional consequence.",
    blackmail: "A motive built on leverage, control and fear of disclosure.",
    career: "A motive driven by ambition, competition and professional advancement.",
    cover_up: "A motive centred on hiding damaging truth before it spreads.",
    debt_pressure: "A motive driven by financial strain, survival and mounting obligation.",
    family_secret: "A motive rooted in protection, shame and private history.",
    financial_ruin: "A motive driven by collapse, desperation and loss of status.",
    inheritance: "A motive connected to legacy, entitlement and financial expectation.",
    jealousy: "A motive powered by comparison, resentment and emotional pressure.",
    mistaken_id: "A motive shaped by error, confusion and bad information.",
    obsession: "A motive driven by fixation, possession and loss of control.",
    professional_rivalry: "A motive rooted in competition, status and career threat.",
    rejection: "A motive driven by humiliation, emotion and personal resentment.",
    reputation_protection: "A motive centred on preserving image, credibility and public standing.",
    revenge: "A motive driven by remembered harm, anger and the desire for retribution.",
    whistleblower_silence: "A motive focused on stopping exposure before truth becomes public."
  }
};

const CARDS = {
  suspects: [
    ["india_gold", "India Gold", "assets/suspects/India_gold.JPG", ["female", "wealthy", "glamorous", "ambitious", "connected", "secretive", "status", "observant"]],
    ["bianca_frost", "Bianca Frost", "assets/suspects/bianca_frost.JPG", ["female", "glasses", "wealthy", "influential", "secretive", "ambitious", "status", "observant"]],
    ["cleo_saint", "Cleo Saint", "assets/suspects/cleo_saint.JPG", ["female", "tattooed", "creative", "disciplined", "glamorous", "secretive", "ambitious", "volatile"]],
    ["dorian_luxe", "Dorian Luxe", "assets/suspects/dorian_luxe.JPG", ["male", "wealthy", "influential", "secretive", "ambitious", "status", "collector", "observant"]],
    ["gideon_pryce", "Gideon Pryce", "assets/suspects/gideon_pryce.JPG", ["male", "wealthy", "disciplined", "secretive", "strategic", "cold", "status", "observant"]],
    ["harvey_slate", "Harvey Slate", "assets/suspects/harvey_slate.JPG", ["male", "wealthy", "influential", "observant", "ambitious", "public", "status", "secretive"]],
    ["jaxon_vale", "Jaxon Vale", "assets/suspects/jaxon_vale.JPG", ["male", "creative", "tech", "charismatic", "reckless", "public", "ambitious", "volatile"]],
    ["milo_vale", "Milo Vale", "assets/suspects/milo-vale.JPG", ["male", "tech", "intelligent", "secretive", "young", "opportunistic", "quiet", "observant"]],
    ["nova_wilde", "Nova Wilde", "assets/suspects/nova_wilde.JPG", ["female", "creative", "glamorous", "secretive", "public", "ambitious", "volatile", "stylish"]],
    ["otis_blank", "Otis Blank", "assets/suspects/otis_blank.JPG", ["male", "quiet", "observant", "technical", "private", "nervous", "secretive", "disciplined"]],
    ["piper_bloom", "Piper Bloom", "assets/suspects/piper_bloom.JPG", ["female", "social", "romantic", "glamorous", "impulsive", "public", "stylish", "secretive"]],
    ["rex_branson", "Rex Branson", "assets/suspects/rex_branson.JPG", ["male", "athletic", "aggressive", "wealthy", "volatile", "status", "public", "ambitious"]],
    ["saffron_skye", "Saffron Skye", "assets/suspects/saffron_skye.JPG", ["female", "creative", "public", "ambitious", "stylish", "secretive", "glamorous", "volatile"]],
    ["sebastian_drift", "Sebastian Drift", "assets/suspects/sebastian_drift.JPG", ["male", "wealthy", "romantic", "obsessive", "public", "vain", "status", "glamorous"]],
    ["tilly_chrome", "Tilly Chrome", "assets/suspects/tilly_chrome.JPG", ["female", "creative", "disciplined", "ideological", "intense", "professional", "tattooed", "observant"]],
    ["velvet_kane", "Velvet Kane", "assets/suspects/velvet_kane.JPG", ["female", "intelligent", "ethical", "legal", "observant", "professional", "glasses", "secretive"]]
  ],
  rooms: [
    ["art_vault", "Art Vault", "assets/rooms/art_vault.jpg", ["restricted", "private", "valuable", "quiet", "locked", "luxury", "surveillance", "after-hours"]],
    ["billiard_room", "Billiard Room", "assets/rooms/billiard_room.jpg", ["recreational", "private", "quiet", "after-hours", "social", "low-light", "soft", "luxury"]],
    ["chefs_table", "Chef's Table", "assets/rooms/chefs_table.jpg", ["food", "private", "luxury", "booked", "staffed", "social", "water", "after-hours"]],
    ["cinema", "Cinema", "assets/rooms/cinema.jpg", ["dark", "soundproof", "screen", "private", "recreational", "seated", "low-light", "soft"]],
    ["dressing", "Dressing Room", "assets/rooms/dressing.jpg", ["private", "mirrors", "fashion", "quiet", "restricted", "personal", "soft", "after-hours"]],
    ["rooftop", "Rooftop", "assets/rooms/rooftop.jpg", ["isolated", "open-air", "high", "night", "private", "restricted", "wind", "low-light"]],
    ["gym", "Gym", "assets/rooms/gym.jpg", ["wellness", "equipment", "physical", "private", "mirrors", "after-hours", "open", "surveillance"]],
    ["kitchen", "Smart Kitchen", "assets/rooms/kitchen.jpg", ["food", "tech", "water", "screen", "staffed", "private", "dining", "surveillance"]],
    ["library", "Library", "assets/rooms/library.jpg", ["quiet", "knowledge", "private", "soft", "night", "prestige", "restricted", "valuable"]],
    ["lift", "Lift", "assets/rooms/lift.jpg", ["restricted", "movement", "small", "sealed", "tech", "transit", "surveillance", "locked"]],
    ["med_suite", "Medical Suite", "assets/rooms/med-suite.jpg", ["medical", "restricted", "clean", "private", "equipment", "quiet", "locked", "water"]],
    ["observ", "Observatory", "assets/rooms/observ.jpg", ["isolated", "high", "tech", "quiet", "night", "restricted", "screen", "private"]],
    ["panic", "Panic Room", "assets/rooms/panic.jpg", ["locked", "secure", "hidden", "restricted", "small", "private", "surveillance", "sealed"]],
    ["podstudio", "Podcast Studio", "assets/rooms/podstudio.jpg", ["soundproof", "tech", "screen", "creative", "private", "recording", "low-light", "sealed"]],
    ["pool", "Pool", "assets/rooms/pool.jpg", ["water", "wellness", "recreational", "open", "luxury", "night", "quiet", "private"]],
    ["wine_cellar", "Wine Cellar", "assets/rooms/wine_cellar.jpg", ["luxury", "restricted", "quiet", "valuable", "private", "cold", "after-hours", "locked"]]
  ],
  weapons: [
    ["champagne_sabre", "Champagne Sabre", "assets/weapons/champagne_sabre.png", ["sharp", "luxury", "ceremonial", "metal", "collectible", "handheld", "decorative", "fingerprintable"]],
    ["chargeing_cable", "Charging Cable", "assets/weapons/chargeing_cable.png", ["flexible", "tech", "everyday", "concealable", "cord", "modern", "wired", "small"]],
    ["chefs_knife", "Chef's Knife", "assets/weapons/chefs_knife.png", ["sharp", "kitchen", "metal", "professional", "handheld", "practical", "fingerprintable", "obvious"]],
    ["crystal_award", "Crystal Award", "assets/weapons/crystal_award.PNG", ["blunt", "fragile", "decorative", "luxury", "heavy", "collectible", "fingerprintable", "office"]],
    ["drone", "Drone", "assets/weapons/drone.png", ["tech", "remote", "surveillance", "modern", "powered", "mobile", "black", "fragile"]],
    ["gold_dumbbell", "Gold Dumbbell", "assets/weapons/gold_dumbbell.png", ["blunt", "heavy", "luxury", "gym", "metal", "obvious", "fingerprintable", "decorative"]],
    ["keycard", "Keycard", "assets/weapons/keycard.png", ["access", "tech", "thin", "corporate", "concealable", "plastic", "small", "everyday"]],
    ["luxury_pen", "Luxury Pen", "assets/weapons/luxury_pen.png", ["sharp", "luxury", "small", "concealable", "professional", "metal", "office", "fingerprintable"]],
    ["mangrenade_candle", "Mangrenade Candle", "assets/weapons/mangreneade_candle.png", ["fire", "brand", "collectible", "decorative", "small", "luxury", "everyday", "fragile"]],
    ["marble_bust", "Marble Bust", "assets/weapons/marble_bust.PNG", ["blunt", "heavy", "decorative", "luxury", "art", "solid", "fingerprintable", "office"]],
    ["mci_original_artwork", "MCI Original Artwork", "assets/weapons/mci_original_artwork.PNG", ["collectible", "art", "decorative", "valuable", "fragile", "brand", "luxury", "office"]],
    ["ring_light_stand", "Ring Light Stand", "assets/weapons/ring_light_stand.png", ["metal", "creative", "tech", "long", "studio", "portable", "fingerprintable", "blunt"]],
    ["smart_speaker", "Smart Speaker", "assets/weapons/smart_speaker.png", ["tech", "powered", "black", "blunt", "small", "wired", "everyday", "office"]],
    ["smart_watch_cable", "Smart Watch Cable", "assets/weapons/smart_watch_cable.png", ["tech", "flexible", "small", "everyday", "concealable", "cord", "wired", "modern"]],
    ["sous_vide_weight", "Sous Vide Weight", "assets/weapons/sous_vide_weight.png", ["heavy", "kitchen", "metal", "blunt", "professional", "small", "fingerprintable", "practical"]],
    ["stiletto", "Stiletto", "assets/weapons/stiletto.png", ["sharp", "fashion", "concealable", "luxury", "personal", "handheld", "small", "fingerprintable"]],
    ["vr_headset", "VR Headset", "assets/weapons/vr_headset.png", ["tech", "modern", "black", "recreational", "powered", "headset", "fragile", "everyday"]]
  ],
  motives: [
    ["affair", "Affair", "assets/motives/affair.png", ["romantic", "secret", "personal", "impulsive", "status", "emotional", "shame", "risk"]],
    ["blackmail", "Blackmail", "assets/motives/blackmail.png", ["secret", "control", "planned", "fear", "money", "leverage", "long-term", "corporate"]],
    ["career", "Career", "assets/motives/career.png", ["professional", "ambition", "status", "planned", "reputation", "competitive", "long-term", "public"]],
    ["cover_up", "Cover Up", "assets/motives/cover_up.png", ["secret", "planned", "protective", "corporate", "fear", "control", "reputation", "long-term"]],
    ["debt_pressure", "Debt Pressure", "assets/motives/debt_pressure.png", ["financial", "desperate", "pressure", "fear", "short-term", "risk", "long-term", "control"]],
    ["family_secret", "Family Secret", "assets/motives/family_secret.png", ["family", "secret", "protective", "long-term", "shame", "emotional", "reputation", "fear"]],
    ["financial_ruin", "Financial Ruin", "assets/motives/financial_ruin.png", ["financial", "desperate", "status", "fear", "collapse", "planned", "public", "reputation"]],
    ["inheritance", "Inheritance", "assets/motives/inheritance.png", ["family", "financial", "planned", "status", "long-term", "greed", "secret", "control"]],
    ["jealousy", "Jealousy", "assets/motives/jealousy.png", ["romantic", "emotional", "impulsive", "status", "personal", "resentment", "public", "shame"]],
    ["mistaken_id", "Mistaken Identity", "assets/motives/mistaken_id.png", ["error", "confusion", "impulsive", "bad intel", "accidental", "opportunistic", "fear", "short-term"]],
    ["obsession", "Obsession", "assets/motives/obsession.png", ["romantic", "fixated", "emotional", "long-term", "irrational", "personal", "secret", "control"]],
    ["professional_rivalry", "Professional Rivalry", "assets/motives/professional_rivalry.png", ["professional", "status", "competition", "ambition", "reputation", "planned", "long-term", "public"]],
    ["rejection", "Rejection", "assets/motives/rejection.png", ["romantic", "emotional", "impulsive", "personal", "humiliation", "resentment", "status", "shame"]],
    ["reputation_protection", "Reputation Protection", "assets/motives/reputation_protection.png", ["status", "reputation", "protective", "planned", "public", "fear", "professional", "control"]],
    ["revenge", "Revenge", "assets/motives/revenge.png", ["resentment", "justice", "planned", "personal", "long-term", "emotional", "secret", "control"]],
    ["whistleblower_silence", "Whistleblower Silence", "assets/motives/whistleblower_silence.png", ["corporate", "secret", "planned", "protective", "reputation", "fear", "professional", "control"]]
  ]
};

let CASES = [];
let DATA_READY = false;
let scrollMemory = {};
let pageScrollBeforeSelection = 0;
let accusationPending = null;
let lastLiveCard = {};

const player = {
  name: localStorage.getItem("mci_player_name") || "",
  rank: localStorage.getItem("mci_rank") || "Detective",
  streak: +(localStorage.getItem("mci_streak") || 0),
  solved: +(localStorage.getItem("mci_solved") || 0),
  sleuthIndex: +(localStorage.getItem("mci_sleuth_index") || 0),
  lastSolvedDate: localStorage.getItem("mci_last_solved_date") || "",
  haptics: localStorage.getItem("mci_haptics") !== "off"
};

let state = {
  screen: player.name ? "home" : "name",
  infoTab: "residents",
  caseIndex: +(localStorage.getItem("mci_current_case_index") || 0),
  guessesLeft: 6,
  selected: {},
  locked: {},
  wrong: {},
  revealed: {},
  evidence: { suspect: [], weapon: [], room: [], motive: [] },
  feedback: [],
  history: [],
  completedCases: loadCompletedCases(),
  lastScore: null,
  lastAccusation: null,
  loadingScore: null,
  expandedInfo: {}
};

loadCases();

async function loadCases() {
  try {
    const res = await fetch("data/cases.json", { cache: "no-store" });
    if (!res.ok) throw new Error("data/cases.json missing");
    const data = await res.json();
    CASES = normaliseCases(data.cases || data || []);
  } catch (e) {
    console.warn(e);
    CASES = fallbackCases();
  }

  DATA_READY = true;
  state.caseIndex = Math.max(0, Math.min(CASES.length - 1, state.caseIndex));
  resetForCase(state.caseIndex, true);
  render();
}

function normaliseCases(cases) {
  return cases.map((c, i) => {
    const solution = c.solution || {};

    return {
      id: c.id || `P${String(i + 1).padStart(3, "0")}`,
      title: c.title || "Untitled Case",
      turns: +(c.turns || 6),
      victim: c.victim?.name || c.victim || "Unknown Victim",
      victimId: c.victim?.id || c.victimId || "",
      victimImg: imageFor("suspect", c.victim?.id || c.victimId),
      solution: {
        suspect: solution.suspect?.id || c.suspectId || c.murdererId || "",
        room: solution.room?.id || c.roomId || "",
        weapon: solution.weapon?.id || c.weaponId || "",
        motive: solution.motive?.id || c.motiveId || ""
      },
      narrative: {
        opening: c.narrative?.opening || c.opening_text || c.openingNarrative || "A body has been discovered inside Blackwood Tower.",
        investigation: c.narrative?.investigation || c.investigation || "Review the available residents, locations, objects and motives. Build a theory from the visible details.",
        outcome: c.narrative?.outcome || c.investigationOutcome || "The accusation has been checked against the Blackwood case file.",
        officialFindings: c.narrative?.officialFindings || c.officialFindings || c.official_findings || "",
        reconstruction: c.narrative?.reconstruction || c.reconstruction || c.den || "The investigation has concluded.",
        aftermath: c.narrative?.aftermath || c.aftermath || "",
        informationEvent: c.narrative?.informationEvent || c.informationEvent || c.information_event || "",
        revealEvent: c.narrative?.revealEvent || c.revealEvent || c.reveal_event || "",
        careerProgression: c.narrative?.careerProgression || c.careerProgression || c.career_progression || "",
        tomorrowHook: c.narrative?.tomorrowHook || c.tomorrowHook || c.tomorrow_hook || ""
      },
      canon: c.canon || {
        knowledgeChange: c.knowledgeChange || c.knowledge_change || "",
        relationshipChange: c.relationshipChange || c.relationship_change || "",
        pressureChange: c.pressureChange || c.pressure_change || "",
        futureDependency: c.futureDependency || c.future_dependency || ""
      }
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
      investigation: "The first sweep of Blackwood Tower narrows the case to a small field of suspects, objects, locations and motives.",
      outcome: "The accusation has been checked against the Blackwood case file.",
      officialFindings: "Bianca Frost died inside Blackwood Tower. The evidence indicates a private confrontation.",
      reconstruction: "Harvey Slate murdered Bianca Frost in the Library using the Luxury Pen. The motive was Family Secret.",
      aftermath: "The Library is sealed. Residents become wary of written records and private archives.",
      informationEvent: "A fragment of the missing notebook is discovered.",
      revealEvent: "",
      careerProgression: "Your case record has been upgraded.",
      tomorrowHook: "The next case begins with a question nobody wants answered."
    },
    canon: {}
  }];
}

function loadCompletedCases() {
  try {
    return JSON.parse(localStorage.getItem("mci_completed_cases") || "[]");
  } catch {
    return [];
  }
}

function saveCompletedCases() {
  localStorage.setItem("mci_completed_cases", JSON.stringify(state.completedCases));
}

function currentCase() {
  return CASES[state.caseIndex] || fallbackCases()[0];
}

function bg(path) {
  return `style="background-image:url('${path}')"`;
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"]/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  }[m]));
}

function stripHTML(value = "") {
  const div = document.createElement("div");
  div.innerHTML = String(value);
  return div.textContent || div.innerText || "";
}

function cleanText(value = "") {
  return stripHTML(value).trim();
}

function para(text = "") {
  const cleaned = cleanText(text);
  return cleaned.split(/\n\n+/).filter(Boolean).map(x => `<p>${escapeHTML(x).replace(/\n/g, "<br>")}</p>`).join("");
}

function imageFor(type, id) {
  const it = item(type, id);
  return it ? it[2] : "";
}

function haptic(pattern = 10) {
  if (!player.haptics) return;
  if (navigator.vibrate) navigator.vibrate(pattern);
}

function saveScrolls() {
  document.querySelectorAll(".carousel").forEach(e => {
    scrollMemory[e.dataset.type] = e.scrollLeft;
  });
}

function restoreScrolls() {
  requestAnimationFrame(() => {
    document.querySelectorAll(".carousel").forEach(e => {
      if (scrollMemory[e.dataset.type] != null) {
        e.scrollLeft = scrollMemory[e.dataset.type];
      }
    });
    updateLiveCards();
  });
}

function preservePageScroll(callback) {
  const y = window.scrollY;
  callback();
  requestAnimationFrame(() => window.scrollTo({ top: y, left: 0, behavior: "auto" }));
}

function updateLiveCards() {
  document.querySelectorAll(".carousel").forEach(car => {
    const type = car.dataset.type;
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
      const id = best.dataset.cardId;
      if (id && lastLiveCard[type] && lastLiveCard[type] !== id) {
        haptic(4);
      }
      lastLiveCard[type] = id;
    }
  });
}

function render() {
  if (!DATA_READY) {
    loadingHome();
    return;
  }

  saveScrolls();

  if (state.screen === "name") nameScreen();
  if (state.screen === "home") home();
  if (state.screen === "how") howToPlay();
  if (state.screen === "settings") settings();
  if (state.screen === "information") informationBase();
  if (state.screen === "audit") dataAudit();
  if (state.screen === "casefile") casefile();
  if (state.screen === "investigation") investigation();
  if (state.screen === "solved") end(false);
  if (state.screen === "failed") end(true);

  if (state.screen === "investigation") {
    restoreScrolls();
  }
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

  player.name = name.slice(0, 22);
  localStorage.setItem("mci_player_name", player.name);
  haptic(25);
  go("home");
}

function home() {
  const c = currentCase();
  const prologueComplete = hasCompletedPrologue();

  app.innerHTML = `<section class="screen" ${bg(ASSETS.frontpage)}><div class="content"><h1>MCI</h1><h2>MURDER CASE INVESTIGATION</h2><div class="statgrid"><div class="stat"><div class="label">Detective Rank</div><div class="value">${escapeHTML(player.rank)}</div></div><div class="stat"><div class="label">Current Streak</div><div class="value">${player.streak}</div></div><div class="stat"><div class="label">Cases Solved</div><div class="value">${player.solved}</div></div><div class="stat"><div class="label">Sleuth Index</div><div class="value">${player.sleuthIndex}</div></div></div><div class="panel"><h2>TODAY'S CASE</h2><h3>${c.id} — ${escapeHTML(c.title)}</h3><p>Victim: ${escapeHTML(c.victim)}</p><p class="small">Prologue case ${state.caseIndex + 1} of ${Math.min(PROLOGUE_LENGTH, CASES.length)}</p>${prologueComplete ? "<p class='green'>Prologue complete. Season One is coming soon.</p>" : ""}</div><button class="primary" onclick="openCase()">OPEN CASE FILE</button><button class="secondary" onclick="go('information')">INFORMATION BASE</button><div class="button-row"><button class="secondary" onclick="go('how')">HOW TO PLAY</button><button class="secondary" onclick="go('settings')">SETTINGS</button></div></div></section>`;
}

function howToPlay() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>HOW TO PLAY</h2><p>Each case has one victim and four truths.</p><ul><li>Suspect</li><li>Weapon</li><li>Room</li><li>Motive</li></ul><p>Choose one card from each category and submit an accusation.</p><p>The progress bar shows how many of the four categories are correct: red for zero, amber as you get closer, green for all four.</p><p>The bottom display compares your latest accusation with the true answers. For each wrong card, it reveals one aligned characteristic, feature or driver and tells you how many characteristics, features or drivers matched in total.</p><p>Previously revealed characteristics, features and drivers remain highlighted on the cards.</p><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function settings() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>SETTINGS</h2><div class="toggle-row"><div><h3>Haptic Feedback</h3><p class="small">Small vibration taps on supported phones.</p></div><button class="switch ${player.haptics ? "on" : ""}" aria-label="Toggle haptics" onclick="toggleHaptics()"></button></div><div class="panel"><h3>Detective Name</h3><p>${escapeHTML(player.name)}</p><button class="ghost" onclick="renamePlayer()">CHANGE NAME</button></div><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
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

function informationBase() {
  const tabs = [
    ["residents", "Residents"],
    ["rooms", "Rooms"],
    ["weapons", "Weapons"],
    ["motives", "Motives"]
  ];

  const items = infoItemsForTab(state.infoTab);

  app.innerHTML = `<section class="screen information-screen" ${bg(ASSETS.casefile)}>
    <div class="sticky-return"><button class="secondary" onclick="go('home')">RETURN HOME</button></div>
    <div class="content info-content">
      <div class="panel dark">
        <h2>INFORMATION BASE</h2>
        <p>A spoiler-safe Blackwood reference file for deduction.</p>
        <div class="info-tabs">${tabs.map(([id, label]) => `<button onclick="setInfoTab('${id}')" class="${state.infoTab === id ? "active" : ""}">${label}</button>`).join("")}</div>
      </div>
      <div class="info-grid">${items.map(renderInfoEntry).join("")}</div>
    </div>
  </section>`;
}

function setInfoTab(tab) {
  state.infoTab = tab;
  render();
}

function infoItemsForTab(tab) {
  if (tab === "residents") return CARDS.suspects.map(x => ({ type: "suspect", data: x }));
  if (tab === "rooms") return CARDS.rooms.map(x => ({ type: "room", data: x }));
  if (tab === "weapons") return CARDS.weapons.map(x => ({ type: "weapon", data: x }));
  return CARDS.motives.map(x => ({ type: "motive", data: x }));
}

function renderInfoEntry(entry) {
  const [id, name, img, details] = entry.data;
  const group = infoDescriptionGroup(entry.type);
  const label = DETAIL_LABELS_PLURAL[entry.type];
  const description = INFO_DESCRIPTIONS[group]?.[id] || "Blackwood reference entry.";
  const key = `${entry.type}:${id}`;
  const expanded = state.expandedInfo?.[key] ? "expanded" : "";

  return `<div class="info-entry ${expanded}">
    <button class="info-image-button" onclick="toggleInfoEntry('${entry.type}', '${id}')" aria-label="Expand ${escapeHTML(name)}">
      <img src="${img}" alt="${escapeHTML(name)}" onerror="this.style.opacity=.15">
    </button>
    <div>
      <h3>${escapeHTML(name)}</h3>
      <p>${escapeHTML(description)}</p>
      <p class="small">${label}</p>
      <div class="playable-attributes">${details.map(d => `<span class="playable-attribute">${escapeHTML(d)}</span>`).join("")}</div>
    </div>
  </div>`;
}


function toggleInfoEntry(type, id) {
  state.expandedInfo = state.expandedInfo || {};
  const key = `${type}:${id}`;
  state.expandedInfo[key] = !state.expandedInfo[key];
  render();
}

function infoDescriptionGroup(type) {
  if (type === "suspect") return "suspects";
  if (type === "room") return "rooms";
  if (type === "weapon") return "weapons";
  return "motives";
}

function dataAudit() {
  const rows = [
    ["Opening Narrative", "Scene setting", "Case Opening", "Before investigation", "Always"],
    ["Investigation", "Gameplay framing", "Investigation", "During play", "Always"],
    ["Investigation Outcome", "Accusation validation", "Result screen", "After accusation", "Case completed or failed"],
    ["Official Findings", "Formal conclusion", "Result screen", "After case", "Case completed or failed"],
    ["Reconstruction", "Solution story", "Result screen", "After case", "Case completed or failed"],
    ["Aftermath", "World-state change", "Result screen", "After case", "Case completed or failed"],
    ["Blackwood Facts", "Knowledge transfer", "Result screen", "After case", "If present"],
    ["Reveal Event", "Major canon advancement", "Result screen", "After case", "If present"],
    ["Career Progression", "Player advancement", "Result screen", "After case", "Case completed"],
    ["Tomorrow Hook", "Next case teaser", "Result screen", "After case", "If present"],
    ["Knowledge Change", "Narrative progression", "Internal + future unlocks", "After case", "Case completed"],
    ["Relationship Change", "Narrative progression", "Internal + future unlocks", "After case", "Case completed"],
    ["Pressure Change", "Narrative progression", "Internal + future unlocks", "After case", "Case completed"]
  ];

  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content"><div class="panel dark"><h2>DATA INTEGRATION AUDIT</h2><p>This screen is for playtest review. It maps master data fields to their player-facing destination.</p></div><div class="audit-table">${rows.map(r => `<div class="audit-row"><h3>${escapeHTML(r[0])}</h3><p><b>Purpose:</b> ${escapeHTML(r[1])}<br><b>Where Displayed:</b> ${escapeHTML(r[2])}<br><b>When Displayed:</b> ${escapeHTML(r[3])}<br><b>Unlock Condition:</b> ${escapeHTML(r[4])}</p></div>`).join("")}</div><button class="primary" onclick="go('settings')">RETURN SETTINGS</button></div></section>`;
}

function openCase() {
  resetForCase(state.caseIndex);
  go("casefile");
}

function resetForCase(i, keepScreen = false) {
  const nextScreen = keepScreen ? state.screen : state.screen;
  state = {
    ...state,
    screen: nextScreen,
    caseIndex: Math.max(0, Math.min(CASES.length - 1, i)),
    guessesLeft: CASES[i]?.turns || 6,
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

  localStorage.setItem("mci_current_case_index", state.caseIndex);
  scrollMemory = {};
}

function casefile() {
  const c = currentCase();

  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content"><div class="panel dark"><h2>CASE FILE OPENED</h2><h2>${escapeHTML(c.victim)}</h2><h3>${c.id} — ${escapeHTML(c.title)}</h3>${para(c.narrative.opening)}<h2>${c.turns} accusations authorised</h2></div><button class="primary" onclick="go('investigation')">BEGIN INVESTIGATION</button><button class="secondary" onclick="go('home')">RETURN HOME</button></div></section>`;
}

function investigation() {
  app.innerHTML = `<section class="screen investigation-screen" ${bg(ASSETS.investigation)}>
    <div class="topbar compact-hud">
      <div class="hudline">Accusations Remaining: ${state.guessesLeft}</div>
      <div class="hudselections">
        <span>Suspect: ${escapeHTML(name("suspects", state.selected.suspect))}</span>
        <span>Weapon: ${escapeHTML(name("weapons", state.selected.weapon))}</span>
        <span>Room: ${escapeHTML(name("rooms", state.selected.room))}</span>
        <span>Motive: ${escapeHTML(name("motives", state.selected.motive))}</span>
      </div>
    </div>
    <div class="content investigation-content">
      ${progressHTML()}
      ${evidenceBoard()}
      ${carousel("suspect", "SUSPECT", visibleCards("suspect"))}
      ${carousel("weapon", "WEAPON", visibleCards("weapon"))}
      ${carousel("room", "ROOM", visibleCards("room"))}
      ${carousel("motive", "MOTIVE", visibleCards("motive"))}
      <div class="panel">
        <h2>MAKE ACCUSATION</h2>
        ${accusationGrid()}
        <p>Select one suspect, weapon, room and motive.</p>
        <button class="primary" onclick="accuse()">SUBMIT ACCUSATION</button>
      </div>
      ${bottomHUD()}
    </div>
  </section>${accusationPending ? loaderOverlay() : ""}`;

  setTimeout(updateLiveCards, 50);
}

function accusationGrid() {
  const data = [
    ["Suspect", "suspects", "suspect"],
    ["Weapon", "weapons", "weapon"],
    ["Room", "rooms", "room"],
    ["Motive", "motives", "motive"]
  ];

  return `<div class="panel"><h2>ACCUSATION</h2><div class="theory-grid">${data.map(([label, group, type]) => `<div class="theory-card"><h4>${label}</h4><p>${escapeHTML(name(group, state.selected[type]))}</p></div>`).join("")}</div></div>`;
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

  for (const ch of seed) {
    h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  }

  const a = [...arr];

  for (let i = a.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    const j = Math.abs(h) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

function evidenceBoard() {
  const labels = {
    suspect: "Suspect Characteristics",
    weapon: "Weapon Features",
    room: "Room Features",
    motive: "Motive Drivers"
  };

  return `<div class="panel"><h2>EVIDENCE BOARD</h2><div class="evidence-board">${["suspect", "weapon", "room", "motive"].map(k => `<div class="evidence-box"><h4>${labels[k]}</h4>${state.evidence[k].length ? state.evidence[k].map(x => `<span class="evidence-tag">${escapeHTML(x)}</span>`).join("") : "<span class='evidence-tag'>Awaiting evidence</span>"}</div>`).join("")}</div></div>`;
}

function progressHTML() {
  if (state.lastScore === null) return "";
  const pct = [18, 35, 58, 80, 100][state.lastScore];
  const col = ["var(--red)", "var(--amber1)", "var(--amber2)", "var(--amber3)", "var(--green)"][state.lastScore];

  requestAnimationFrame(() => {
    document.querySelectorAll(".progress-bar[data-target-width]").forEach(bar => {
      bar.style.width = bar.dataset.targetWidth;
    });
  });

  return `<div class="panel"><div class="progress-label">${state.lastScore}/4 CATEGORIES MATCH</div><div class="progress-shell"><div class="progress-bar" data-target-width="${pct}%" style="width:0%;background:${col}"></div></div></div>`;
}

function carousel(type, title, items) {
  const loop = [...items, ...items, ...items];

  return `<div class="carousel-block"><div class="carousel-title">${title}</div><div class="carousel" data-type="${type}" onscroll="loopCarousel(this);updateLiveCards()">${loop.map(itemData => card(type, itemData)).join("")}</div></div>`;
}

function card(type, itemData) {
  const [id, displayName, img, playableAttributes] = itemData;
  const cls = [
    state.selected[type] === id ? "selected" : "",
    state.locked[type] === id ? "correct" : "",
    state.wrong[type]?.includes(id) ? "incorrect" : ""
  ].join(" ");

  const visiblePlayableAttributes = playableAttributes.slice(0, 8);

  const attributeHTML = visiblePlayableAttributes
    .map(attribute => `<span class="playable-attribute ${isRev(type, id, attribute) ? "revealed" : ""}">${escapeHTML(attribute)}</span>`)
    .join("");

  return `<div class="card ${cls}" data-card-id="${id}" onclick="selectCard('${type}','${id}')">
    <img src="${img}" alt="${escapeHTML(displayName)}" onerror="this.style.opacity=.15">
    <div class="attribute-heading">${PLAYABLE_ATTRIBUTE_HEADINGS[type]}</div>
    <div class="playable-attributes">${attributeHTML}</div>
  </div>`;
}

function selectCard(type, id) {
  if (state.locked[type]) return;

  pageScrollBeforeSelection = window.scrollY;
  haptic(10);

  preservePageScroll(() => {
    state.selected[type] = id;
    render();
  });
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
  render();

  setTimeout(() => {
    applyAccusation(result);
    accusationPending = null;

    if (result.correct === 4) {
      markSolved();
      haptic([60, 90, 60]);
      go("solved");
      return;
    }

    if (state.guessesLeft <= 0) {
      haptic([100, 100, 100]);
      go("failed");
      return;
    }

    render();
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
      feedback.push({
        type: k,
        ok: true,
        name: item(k, guess)[1],
        total: 8,
        disclosed: "CONFIRMED"
      });
    } else {
      const guessDetails = item(k, guess)?.[3] || [];
      const solDetails = item(k, sol)?.[3] || [];
      const matches = guessDetails.filter(d => solDetails.includes(d));
      const already = state.revealed[k]?.[guess] || [];
      const disclosed = matches.find(d => !already.includes(d)) || matches[0] || "No visible attribute match";

      feedback.push({
        type: k,
        ok: false,
        name: item(k, guess)[1],
        disclosed,
        total: matches.length
      });
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

      if (!state.wrong[k].includes(guess)) {
        state.wrong[k].push(guess);
      }

      if (fb.disclosed !== "No visible attribute match") {
        state.revealed[k] = state.revealed[k] || {};
        state.revealed[k][guess] = state.revealed[k][guess] || [];

        if (!state.revealed[k][guess].includes(fb.disclosed)) {
          state.revealed[k][guess].push(fb.disclosed);
        }

        if (!state.evidence[k].includes(fb.disclosed)) {
          state.evidence[k].push(fb.disclosed);
        }
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

  setTimeout(() => {
    const bar = document.querySelector(".overlay .progress-bar");
    if (bar) bar.style.width = `${pct}%`;
  }, 60);

  return `<div class="overlay"><div class="loader-card"><div class="loader-title">ANALYSING ACCUSATION</div><p class="loader-text">Comparing your theory against the Blackwood case file.</p><div class="progress-shell"><div class="progress-bar" style="width:0%;background:${col}"></div></div><p class="loader-text">${score}/4 categories match</p></div></div>`;
}

function bottomHUD() {
  if (!state.feedback.length) {
    return `<div class="bottomhud"><p class="small">Submit an accusation to reveal aligned characteristics, features and drivers.</p></div>`;
  }

  return `<div class="bottomhud"><h2>LAST ACCUSATION FEEDBACK</h2><div class="feedback-grid">${state.feedback.map(f => {
    if (f.ok) {
      return `<div class="feedback-line confirmed"><b>${labelFor(f.type)}</b><br><span class="green">${labelFor(f.type)} confirmed:</span> ${escapeHTML(f.name)}</div>`;
    }

    const singular = DETAIL_LABELS[f.type];
    const plural = DETAIL_LABELS_PLURAL[f.type];
    const trueCard = TRUE_CARD_LABELS[f.type];

    return `<div class="feedback-line"><b>${labelFor(f.type)}</b><br>${escapeHTML(f.name)} is wrong.<br><span class="green">${singular} revealed:</span> ${escapeHTML(f.disclosed)}<br><span>${f.total} ${plural.toLowerCase()} match the ${trueCard.toLowerCase()}.</span></div>`;
  }).join("")}</div></div>`;
}

function labelFor(type) {
  return ({ suspect: "SUSPECT", weapon: "WEAPON", room: "ROOM", motive: "MOTIVE" })[type];
}

function markSolved() {
  const id = currentCase().id;

  if (!state.completedCases.includes(id)) {
    state.completedCases.push(id);
    saveCompletedCases();

    player.solved++;
    player.sleuthIndex += 10 + Math.max(0, state.guessesLeft) * 2;
    player.rank = rankFromIndex(player.sleuthIndex);

    const today = todayKey();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);

    player.streak = player.lastSolvedDate === yKey ? player.streak + 1 : Math.max(player.streak, 1);
    player.lastSolvedDate = today;

    localStorage.setItem("mci_streak", player.streak);
    localStorage.setItem("mci_solved", player.solved);
    localStorage.setItem("mci_sleuth_index", player.sleuthIndex);
    localStorage.setItem("mci_rank", player.rank);
    localStorage.setItem("mci_last_solved_date", player.lastSolvedDate);
  }
}

function rankFromIndex(index) {
  if (index >= 220) return "Superintendent";
  if (index >= 160) return "Chief Inspector";
  if (index >= 100) return "Inspector";
  if (index >= 50) return "Senior Detective";
  if (index >= 15) return "Detective";
  return "Trainee Detective";
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function hasCompletedPrologue() {
  const required = CASES.slice(0, Math.min(PROLOGUE_LENGTH, CASES.length)).map(c => c.id);
  return required.length > 0 && required.every(id => state.completedCases.includes(id));
}

function end(failed) {
  const c = currentCase();
  const s = c.solution;
  const finalPrologue = hasCompletedPrologue();

  app.innerHTML = `<section class="screen result-screen" ${bg(ASSETS.caseclosed)}><div class="content"><div class="end-title">${failed ? "THEY GOT AWAY WITH IT" : "CASE SOLVED"}</div><div class="subtitle">${failed ? "The suspect walks free." : "Great work, Detective."}</div><div class="panel dark"><h2>VICTIM: ${escapeHTML(c.victim)}</h2><div class="result-grid">${res("SUSPECT", "suspect", s.suspect)}${res("WEAPON", "weapon", s.weapon)}${res("ROOM", "room", s.room)}${res("MOTIVE", "motive", s.motive)}</div>${narrativeOutcomeHTML(c, failed)}${finalPrologue ? prologueEndHTML() : teaserHTML(c)}<button class="primary" onclick="share(${failed})">SHARE RESULT</button><button class="secondary" onclick="feedbackEmail()">EMAIL FEEDBACK</button><p class="email-note">Help Blackwood Tower grow. Share your result with 10 friends.</p>${state.caseIndex < Math.min(PROLOGUE_LENGTH, CASES.length) - 1 ? `<button class="secondary" onclick="nextCase()">NEXT DAY</button>` : ""}<button class="ghost" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function narrativeOutcomeHTML(c, failed) {
  const sections = [
    ["INVESTIGATION OUTCOME", c.narrative.outcome],
    ["OFFICIAL FINDINGS", c.narrative.officialFindings],
    ["RECONSTRUCTION", highlight(c.narrative.reconstruction), true],
    ["AFTERMATH", expandAftermath(c)],
    ["BLACKWOOD FACTS", c.narrative.informationEvent],
    ["REVEAL EVENT", c.narrative.revealEvent, false, true],
    ["CAREER PROGRESSION", c.narrative.careerProgression || `Sleuth Index increased to ${player.sleuthIndex}. Current rank: ${player.rank}.`]
  ];

  return sections.map(([title, text, isHTML, isReveal]) => {
    if (!text) return "";
    const cls = isReveal ? "panel reveal" : "panel";
    return `<div class="${cls}"><h2>${title}</h2>${isHTML ? `<p>${text}</p>` : para(text)}</div>`;
  }).join("");
}

function expandAftermath(c) {
  const base = cleanText(c.narrative.aftermath);
  const canon = c.canon || {};
  const changes = [canon.knowledgeChange, canon.relationshipChange, canon.pressureChange].filter(Boolean).map(cleanText);

  if (!base && !changes.length) {
    return "Blackwood Tower changes after the case. Residents adjust their behaviour, private trust is damaged and new pressure builds behind closed doors.";
  }

  return [base, ...changes].filter(Boolean).join("\n\n");
}

function teaserHTML(c) {
  if (!c.narrative.tomorrowHook) return "";
  return `<div class="panel"><h2>NEXT CASE</h2>${para(c.narrative.tomorrowHook)}</div>`;
}

function prologueEndHTML() {
  return `<div class="panel prologue-banner"><h2>PROLOGUE COMPLETE</h2><p>Blackwood Tower has not given up its secrets. It has only shown you where the bodies are buried.</p><p>The full season of MCI is coming soon.</p><p>Season One will open the wider case file.</p></div>`;
}

function res(label, type, id) {
  const it = item(type, id);
  if (!it) return "";
  const contain = shouldContain(id) ? "contain" : "";

  return `<div class="result-card"><img class="${contain}" src="${it[2]}" alt="${escapeHTML(it[1])}" onerror="this.style.opacity=.15"><h2>${label}</h2><p>${escapeHTML(it[1])}</p></div>`;
}

function highlight(text) {
  let out = escapeHTML(cleanText(text || ""));
  const c = currentCase();
  const s = c.solution;

  [item("suspect", s.suspect)?.[1], item("weapon", s.weapon)?.[1], item("room", s.room)?.[1], item("motive", s.motive)?.[1]].filter(Boolean).forEach(word => {
    out = out.replaceAll(escapeHTML(word), `<mark>${escapeHTML(word)}</mark>`);
  });

  return out;
}

function share(failed) {
  const c = currentCase();
  const used = c.turns - state.guessesLeft;
  const grid = state.history.map(r => r.map(x => x ? "🟩" : "⬛").join("")).join("\n") || "⬛⬛⬛⬛";
  const text = `MCI Prologue ${c.id}\n${c.title}\n\n${grid}\n\n${failed ? "The suspect walked free." : `Solved in ${used} accusation${used === 1 ? "" : "s"}.`}\nDetective: ${player.name || player.rank}\nRank: ${player.rank}\nDaily streak: ${player.streak}\nCases solved: ${player.solved}\nSleuth Index: ${player.sleuthIndex}\n\nHelp Blackwood Tower grow. Share your result with 10 friends.\n${GAME_URL}`;

  if (navigator.share) navigator.share({ text });
  else {
    navigator.clipboard.writeText(text);
    alert("Result copied.");
  }
}

function feedbackEmail() {
  const c = currentCase();
  const subject = encodeURIComponent(`MCI Prologue Feedback — ${c.id}`);
  const body = encodeURIComponent(`Thank you for playing MCI Prologue. We greatly value your feedback. Could you please answer these questions with as much detail as possible?\n\n1. On a scale of 0 to 10, how likely are you to recommend MCI to a friend?\n\n2. Do you play other daily online puzzle games? Yes or No.\n\n3. If yes, please list the daily online puzzle games you play.\n\n4. What did you enjoy most about solving the daily cases?\n\n5. Were the characteristics, features and drivers clear and helpful in guiding your deductions?\n\n6. Was the accusation feedback easy to understand, including the revealed attribute and total matching attributes?\n\n7. How did you find the difficulty level of this case and the prologue overall?\n\n8. Did the story and narrative between cases make you want to return to the next case?\n\n9. Which case did you enjoy most, and why?\n\n10. How would you improve the interface, card selection, or game flow?\n\n11. What features or improvements would you most like to see in the full season?\n\nOptional notes:\n\nCase played: ${c.id} — ${c.title}\nDetective name: ${player.name}\nRank: ${player.rank}\nDaily streak: ${player.streak}\nCases solved: ${player.solved}\nSleuth Index: ${player.sleuthIndex}\n`);

  window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
}

function nextCase() {
  const next = Math.min(CASES.length - 1, state.caseIndex + 1);
  state.caseIndex = next;
  localStorage.setItem("mci_current_case_index", next);
  resetForCase(next);
  go("casefile");
}

function shouldContain(id) {
  return ["marble_bust", "crystal_award", "mci_original_artwork"].includes(id);
}

function go(screen) {
  state.screen = screen;
  render();
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

function item(type, id) {
  return ({
    suspect: CARDS.suspects,
    weapon: CARDS.weapons,
    room: CARDS.rooms,
    motive: CARDS.motives
  }[type] || []).find(x => x[0] === id);
}

function name(group, id) {
  if (!id) return "Not selected";

  return ({
    suspects: CARDS.suspects,
    weapons: CARDS.weapons,
    rooms: CARDS.rooms,
    motives: CARDS.motives
  }[group] || []).find(x => x[0] === id)?.[1] || "Not selected";
}

function isRev(type, id, detail) {
  return state.revealed?.[type]?.[id]?.includes(detail);
}

function loopCarousel(el) {
  const third = el.scrollWidth / 3;

  if (el.scrollLeft < third * 0.18) {
    el.scrollLeft += third;
  }

  if (el.scrollLeft > third * 1.82) {
    el.scrollLeft -= third;
  }

  scrollMemory[el.dataset.type] = el.scrollLeft;
}
