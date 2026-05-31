const app = document.getElementById('app');

const ASSET = {
  bg: {
    front: 'assets/frontpage/frontpage.PNG',
    casefile: 'assets/casefile/casefile.PNG',
    investigation: 'assets/investigation/investigation.jpg',
    closed: 'assets/caseclosed/caseclosed.PNG'
  }
};

const state = {
  screen: 'home',
  guessesLeft: 6,
  solved: { suspect: false, room: false, weapon: false, motive: false },
  selected: {},
  feedback: null,
  revealed: { suspect: {}, room: {}, weapon: {}, motive: {} }
};

const caseData = {
  id: 'MCI-260531',
  rank: 'Detective',
  victim: 'Velvet Kane',
  title: 'The Better Model',
  opening: 'Velvet Kane has been found dead inside the Blackwood orbit. The Bureau has isolated a narrow circle of suspects, locations, methods and pressures. Early evidence points to secrecy, status and a professional relationship under strain, but the true chain of events remains classified.',
  denouement: 'Dorian Luxe murdered Velvet Kane after a long-running professional rivalry moved from reputation damage to direct threat. Velvet had begun questioning the authenticity and ownership of valuable work linked to Dorian. The confrontation took place inside the Art Vault. During the argument, Dorian used the Marble Bust as a brutal improvised weapon. The motive was Professional Rivalry.',
  solution: {
    suspect: 'dorian_luxe',
    room: 'art_vault',
    weapon: 'marble_bust',
    motive: 'professional_rivalry'
  }
};

const DATA = {
  suspect: {
    label: 'SUSPECT', singular: 'suspect', traitWord: 'characteristics', discloseWord: 'characteristic', trueWord: 'true suspect',
    cards: [
      card('bianca_frost','Bianca Frost','assets/suspects/bianca_frost.JPG',['female','glasses','wealthy','influential','secretive','ambitious','status','observant']),
      card('cleo_saint','Cleo Saint','assets/suspects/cleo_saint.JPG',['female','tattooed','creative','disciplined','glamorous','secretive','ambitious','volatile']),
      card('dorian_luxe','Dorian Luxe','assets/suspects/dorian_luxe.JPG',['male','wealthy','influential','secretive','ambitious','status','observant','manipulative']),
      card('harvey_slate','Harvey Slate','assets/suspects/harvey_slate.JPG',['male','wealthy','influential','ambitious','status','manipulative','disciplined','public image']),
      card('jaxon_vale','Jaxon Vale','assets/suspects/jaxon_vale.JPG',['male','tech','wealthy','secretive','observant','ambitious','disciplined','cold']),
      card('saffron_skye','Saffron Skye','assets/suspects/saffron_skye.JPG',['female','creative','glamorous','volatile','secretive','ambitious','status','jealous']),
      card('tilly_chrome','Tilly Chrome','assets/suspects/tilly_chrome.JPG',['female','tattooed','creative','disciplined','volatile','ethical','status','intense']),
      card('velvet_kane','Velvet Kane','assets/suspects/velvet_kane.JPG',['female','glasses','intelligent','observant','ethical','influential','secretive','status'])
    ]
  },
  room: {
    label: 'ROOM', singular: 'location', traitWord: 'features', discloseWord: 'feature', trueWord: 'true location',
    cards: [
      card('art_vault','Art Vault','assets/rooms/art_vault.jpg',['restricted','private','valuable','quiet','locked','luxury','surveillance','after-hours']),
      card('billiard_room','Billiard Room','assets/rooms/billiard_room.jpg',['recreational','private','luxury','quiet','after-hours','soft furnished','low light','social']),
      card('chefs_table','Chef’s Table','assets/rooms/chefs_table.jpg',['food','private','booking required','luxury','staffed','after-hours','bright','social']),
      card('cinema','Cinema','assets/rooms/cinema.jpg',['screen','dark','soundproof','soft furnished','private','recreational','seated','low visibility']),
      card('dressing','Dressing Room','assets/rooms/dressing.jpg',['private','mirror','soft furnished','glamour','restricted','quiet','personal','concealed']),
      card('library','Library','assets/rooms/library.jpg',['quiet','private','knowledge','soft furnished','low light','locked','status','after-hours']),
      card('panic','Panic Room','assets/rooms/panic.jpg',['locked','restricted','secure','isolated','surveillance','no windows','private','technical']),
      card('wine_cellar','Wine Cellar','assets/rooms/wine_cellar.jpg',['private','luxury','valuable','low light','temperature controlled','restricted','after-hours','quiet'])
    ]
  },
  weapon: {
    label: 'WEAPON', singular: 'weapon', traitWord: 'features', discloseWord: 'feature', trueWord: 'true weapon',
    cards: [
      card('champagne_sabre','Champagne Sabre','assets/weapons/champagne_sabre.png',['sharp','luxury','collectible','decorative','metal','handheld','ceremonial','room agnostic']),
      card('chefs_knife','Chef’s Knife','assets/weapons/chefs_knife.png',['sharp','professional','metal','handheld','kitchen','practical','fingerprintable','room specific']),
      card('crystal_award','Crystal Award','assets/weapons/crystal_award.PNG',['blunt','fragile','decorative','luxury','heavy','collectible','fingerprintable','office']),
      card('drone','Drone','assets/weapons/drone.png',['tech','powered','surveillance','remote','fragile','modern','unusual','room agnostic']),
      card('luxury_pen','Luxury Pen','assets/weapons/luxury_pen.png',['small','luxury','concealable','everyday','sharp point','professional','fingerprintable','room agnostic']),
      card('marble_bust','Marble Bust','assets/weapons/marble_bust.PNG',['blunt','heavy','decorative','luxury','collectible','historic','fingerprintable','art object']),
      card('ring_light_stand','Ring Light Stand','assets/weapons/ring_light_stand.png',['blunt','metal','professional','creative','powered','tall','studio','fingerprintable']),
      card('smart_speaker','Smart Speaker','assets/weapons/smart_speaker.png',['tech','powered','everyday','black','small','surveillance','modern','room agnostic'])
    ]
  },
  motive: {
    label: 'MOTIVE', singular: 'motive', traitWord: 'drivers', discloseWord: 'driver', trueWord: 'true motive',
    cards: [
      card('blackmail','Blackmail','assets/motives/blackmail.png',['secret','coercive','planned','fear','control','status','personal','exposure']),
      card('debt_pressure','Debt Pressure','assets/motives/debt_pressure.png',['financial','pressure','desperate','long-term','fear','status','practical','escalating']),
      card('family_secret','Family Secret','assets/motives/family_secret.png',['family','secret','protective','long-term','emotional','status','exposure','historic']),
      card('jealousy','Jealousy','assets/motives/jealousy.png',['romantic','emotional','impulsive','status','personal','volatile','envy','possessive']),
      card('obsession','Obsession','assets/motives/obsession.png',['personal','long-term','emotional','fixated','secret','possessive','irrational','status']),
      card('professional_rivalry','Professional Rivalry','assets/motives/professional_rivalry.png',['professional','status','ambition','long-term','exposure','competitive','reputation','planned']),
      card('reputation_protection','Reputation Protection','assets/motives/reputation_protection.png',['status','protective','exposure','professional','planned','fear','public image','control']),
      card('revenge','Revenge','assets/motives/revenge.png',['personal','vindictive','long-term','emotional','justice','planned','anger','historic'])
    ]
  }
};

function card(id, name, image, traits) {
  return { id, name, image, traits };
}

function setBg(name) {
  const bg = ASSET.bg[name] || '';
  return `style="background-image:url('${bg}')"`;
}

function render() {
  if (state.screen === 'home') return renderHome();
  if (state.screen === 'casefile') return renderCaseFile();
  if (state.screen === 'investigation') return renderInvestigation();
  if (state.screen === 'closed') return renderClosed();
}

function renderHome() {
  app.innerHTML = `
    <section class="screen" ${setBg('front')}>
      <div class="layer">
        <div class="brand">MCI</div>
        <div class="subline">One victim. One killer. Four truths.</div>
        <div class="stat-grid">
          <div class="stat">Rank<strong>${caseData.rank}</strong></div>
          <div class="stat">Streak<strong>0 days</strong></div>
          <div class="stat">Solved<strong>0</strong></div>
        </div>
        <button class="btn" onclick="go('casefile')">OPEN CASE FILE</button>
        <button class="btn secondary" onclick="alert('Information Base coming next.')">INFORMATION BASE</button>
      </div>
    </section>`;
}

function renderCaseFile() {
  app.innerHTML = `
    <section class="screen" ${setBg('casefile')}>
      <div class="layer panel">
        <div class="case-title">VICTIM FILE OPENED</div>
        <div class="case-copy">
          <p><strong>${caseData.victim}</strong></p>
          <p>${caseData.title}</p>
          <p>${caseData.opening}</p>
          <p><span style="color:var(--gold-soft)">CASE ${caseData.id}</span></p>
          <p><span style="color:var(--gold-soft)">${state.guessesLeft} turns authorised</span></p>
        </div>
        <button class="btn" onclick="go('investigation')">BEGIN INVESTIGATION</button>
      </div>
    </section>`;
}

function renderInvestigation() {
  app.innerHTML = `
    <section class="screen" ${setBg('investigation')}>
      <div class="layer">
        <div class="hud">
          <div>${caseData.rank}</div>
          <div>${caseData.id}</div>
          <div>${state.guessesLeft} turns</div>
        </div>
        ${categoryHTML('suspect')}
        ${categoryHTML('weapon')}
        ${categoryHTML('room')}
        ${categoryHTML('motive')}
        ${feedbackHTML()}
      </div>
      <div class="accusation-bar">
        <div class="accusation-summary">${summaryHTML()}</div>
        <button class="btn" onclick="submitAccusation()">SUBMIT ACCUSATION</button>
      </div>
    </section>`;
}

function categoryHTML(type) {
  const cat = DATA[type];
  return `
    <section class="category ${state.solved[type] ? 'locked' : ''}">
      <h2>${cat.label}</h2>
      <div class="carousel">
        ${cat.cards.map(c => cardHTML(type, c)).join('')}
      </div>
    </section>`;
}

function cardHTML(type, c) {
  const selected = state.selected[type] === c.id;
  const correct = state.solved[type] && c.id === caseData.solution[type];
  const wrong = state.feedback && state.feedback[type]?.selected === c.id && !state.feedback[type]?.correct;
  const cls = ['card', selected ? 'selected' : '', correct ? 'correct' : '', wrong ? 'wrong' : ''].join(' ');
  const revealed = state.revealed[type][c.id];
  return `
    <article class="${cls}" onclick="selectCard('${type}','${c.id}')">
      <img src="${c.image}" alt="${c.name}" onerror="this.style.opacity=.25;this.alt='Missing image';" />
      <div class="card-name">${c.name}</div>
      <div class="traits">
        ${c.traits.map(t => `<span class="trait ${revealed === t ? 'revealed' : ''}">${t}</span>`).join('')}
      </div>
    </article>`;
}

function selectCard(type, id) {
  if (state.solved[type]) return;
  state.selected[type] = id;
  render();
}

function summaryHTML() {
  const line = ['suspect','weapon','room','motive'].map(type => {
    const id = state.selected[type];
    const name = id ? findCard(type, id).name : '—';
    return `${DATA[type].label}: ${name}`;
  }).join('<br>');
  const locked = Object.values(state.solved).filter(Boolean).length;
  return `<strong>YOUR SUSPICION</strong><br>${line}<br><span style="color:var(--gold-soft)">${locked}/4 evidence categories locked.</span>`;
}

function submitAccusation() {
  if (!['suspect','room','weapon','motive'].every(t => state.selected[t])) {
    alert('Select one suspect, weapon, room and motive first.');
    return;
  }

  const feedback = {};
  ['suspect','room','weapon','motive'].forEach(type => {
    const selectedId = state.selected[type];
    const trueId = caseData.solution[type];
    const selected = findCard(type, selectedId);
    const trueCard = findCard(type, trueId);
    const correct = selectedId === trueId;
    if (correct) state.solved[type] = true;

    const overlap = selected.traits.filter(t => trueCard.traits.includes(t));
    const disclosed = overlap[0] || null;
    if (disclosed && !correct) state.revealed[type][selectedId] = disclosed;

    feedback[type] = {
      selected: selectedId,
      name: selected.name,
      correct,
      disclosed,
      hidden: correct ? 'complete match' : Math.max(overlap.length - (disclosed ? 1 : 0), 0),
      total: overlap.length
    };
  });

  state.feedback = feedback;
  state.guessesLeft -= 1;

  const allSolved = Object.values(state.solved).every(Boolean);
  if (allSolved) {
    setTimeout(() => { state.screen = 'closed'; render(); }, 500);
  } else if (state.guessesLeft <= 0) {
    setTimeout(() => { state.screen = 'closed'; render(); }, 500);
  } else {
    render();
  }
}

function feedbackHTML() {
  if (!state.feedback) return '';
  return `<div class="feedback-grid">${['suspect','weapon','room','motive'].map(type => {
    const cat = DATA[type];
    const f = state.feedback[type];
    if (f.correct) {
      return `<div class="feedback-card ok"><h3>${cat.label}</h3>${f.name}<br>CONFIRMED. Evidence locked.</div>`;
    }
    const line1 = f.disclosed ? `Disclosed ${cat.discloseWord}: <span style="color:var(--green)">${f.disclosed}</span>` : `No disclosed ${cat.discloseWord}.`;
    return `<div class="feedback-card"><h3>${cat.label}</h3>${f.name}<br>${line1}<br>${f.hidden} additional ${cat.traitWord} match the ${cat.trueWord}.</div>`;
  }).join('')}</div>`;
}

function renderClosed() {
  const s = caseData.solution;
  app.innerHTML = `
    <section class="screen" ${setBg('closed')}>
      <div class="layer panel">
        <div class="case-title">CASE CLOSED</div>
        <div class="closed-grid">
          ${closedItem('KILLER', 'suspect', s.suspect)}
          ${closedItem('VICTIM', 'suspect', 'velvet_kane')}
          ${closedItem('WEAPON', 'weapon', s.weapon)}
          ${closedItem('ROOM', 'room', s.room)}
        </div>
        <div class="case-copy">
          <p><span style="color:var(--gold-soft)">MOTIVE: ${findCard('motive', s.motive).name}</span></p>
          <p>${caseData.denouement}</p>
        </div>
        <button class="btn" onclick="restart()">NEW CASE</button>
      </div>
    </section>`;
}

function closedItem(label, type, id) {
  const c = findCard(type, id);
  return `<div class="closed-item"><img src="${c.image}" alt="${c.name}" /><div class="closed-label">${label}</div><div>${c.name}</div></div>`;
}

function findCard(type, id) {
  return DATA[type].cards.find(c => c.id === id);
}

function go(screen) {
  state.screen = screen;
  render();
}

function restart() {
  state.screen = 'home';
  state.guessesLeft = 6;
  state.solved = { suspect: false, room: false, weapon: false, motive: false };
  state.selected = {};
  state.feedback = null;
  state.revealed = { suspect: {}, room: {}, weapon: {}, motive: {} };
  render();
}

render();
