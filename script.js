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

// Season One launch date. Case PROLOGUE_LENGTH+1 (P017) unlocks on this date,
// one further case unlocks per day after. A 240-case season starting here runs
// 2026-10-01 -> 2027-05-28, covering Halloween (day 31), Thanksgiving (day 57),
// Christmas (day 86), New Year (day 93), Valentine's (day 137) and beyond —
// case content for those day numbers should be written to match the date.
const SEASON_START_DATE = "2026-10-01T00:00:00Z";

const EMBEDDED_CASES = [
  {
    "id": "P001",
    "title": "The Missing Hour",
    "difficulty": "Easy",
    "openingType": "Recovered Document",
    "caseFunction": "Secret Case",
    "arc": "Parentage",
    "informationEventId": "IE01",
    "victim": {
      "id": "bianca_frost",
      "name": "Bianca Frost"
    },
    "solution": {
      "suspect": {
        "id": "harvey_slate",
        "name": "Harvey Slate"
      },
      "room": {
        "id": "library",
        "name": "Library"
      },
      "weapon": {
        "id": "luxury_pen",
        "name": "Luxury Pen"
      },
      "motive": {
        "id": "family_secret",
        "name": "Family Secret"
      }
    },
    "narrative": {
      "opening": "Bianca Frost is dead.\n\nInvestigators recovered a notebook from her apartment.\n\nMost pages remain intact.\n\nOne page does not.\n\nA single sheet appears to have been removed shortly before her death.\n\nNo trace of the missing page has been found.\n\nResidents interviewed by investigators disagree about Bianca's behaviour during her final days.\n\nSome describe her as distracted.\n\nOthers insist she appeared unusually optimistic.\n\nSeveral report that she was pursuing something she believed to be important.\n\nNobody knows what she discovered.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "The victim had recently become interested in information rather than people.",
        "One resident appears unusually eager to assist investigators.",
        "A routine object may have been used in an unexpected way.",
        "A location associated with knowledge becomes significant."
      ],
      "officialFindings": "Murderer: Harvey Slate\nRoom: Library\nWeapon: Luxury Pen\nMotive: Family Secret",
      "reconstruction": "Bianca's investigation brought her dangerously close to information that had remained hidden for years.\n\nThe secret itself was not new.\n\nHer discovery of it was.\n\nAs Bianca moved closer to confirmation, the risk to another resident increased dramatically.\n\nTheir final meeting took place inside the Library.\n\nWhat began as an attempt to control information became an attempt to prevent exposure.\n\nBy the time the meeting ended, Bianca Frost was dead.",
      "aftermath": "Nova Wilde learns Bianca had been researching a subject unrelated to her public work.\n\nFor the first time, several residents begin wondering whether important information is being concealed inside Blackwood Tower.",
      "informationEvent": "A fragment of the missing notebook page is discovered.\n\nOnly four words remain visible:\n\n\"It changes everything if...\"\n\nThe remainder is missing.",
      "tomorrowHook": "Why was Velvet Kane requesting access to records that nobody else appeared interested in reviewing?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Nova becomes aware that Bianca was investigating a hidden issue before her death.",
      "relationshipChange": "Trust between several residents decreases as speculation spreads.",
      "pressureChange": "Parentage Arc +3",
      "canonImpact": "Parentage pressure introduced",
      "futureDependency": "P002",
      "sharedTrait": "Observant"
    },
    "turns": 6
  },
  {
    "id": "P002",
    "title": "A Question Too Far",
    "difficulty": "Easy",
    "openingType": "Missing Property",
    "caseFunction": "Secret Case",
    "arc": "Forgery",
    "informationEventId": "IE02",
    "victim": {
      "id": "velvet_kane",
      "name": "Velvet Kane"
    },
    "solution": {
      "suspect": {
        "id": "dorian_luxe",
        "name": "Dorian Luxe"
      },
      "room": {
        "id": "art_vault",
        "name": "Art Vault"
      },
      "weapon": {
        "id": "marble_bust",
        "name": "Marble Bust"
      },
      "motive": {
        "id": "professional_rivalry",
        "name": "Professional Rivalry"
      }
    },
    "narrative": {
      "opening": "Velvet Kane is dead.\n\nInvestigators were called after staff reported an item missing from a secured collection.\n\nThe disappearance initially appeared unrelated.\n\nHours later, Velvet's body was discovered.\n\nThe missing object has still not been recovered.\n\nResidents interviewed by investigators provide conflicting explanations for why Velvet had recently become interested in the collection.\n\nSome believe it was routine research.\n\nOthers disagree.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "The victim had become focused on establishing whether something was genuine.",
        "A resident appeared unusually concerned by recent questions.",
        "Status may be more important than truth.",
        "The missing object may be more valuable than it appears."
      ],
      "officialFindings": "Murderer: Dorian Luxe\nRoom: Art Vault\nWeapon: Marble Bust\nMotive: Professional Rivalry",
      "reconstruction": "Velvet's expertise allowed her to recognise inconsistencies others overlooked.\n\nWhat began as professional curiosity evolved into professional conflict.\n\nThe closer she came to proving her suspicions, the more dangerous the situation became.\n\nInside the Art Vault, the disagreement stopped being academic.\n\nFor one resident, reputation depended upon uncertainty surviving.\n\nVelvet represented certainty.\n\nShe never left the vault alive.",
      "aftermath": "Jaxon Vale becomes interested in rumours surrounding Blackwood's most valuable collection.\n\nQuestions that once circulated privately begin spreading more widely.",
      "informationEvent": "An unsigned authentication report is discovered inside a storage cabinet.\n\nSeveral pages are missing.",
      "tomorrowHook": "Who commissioned a report that somebody worked so hard to conceal?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Jaxon becomes aware that a dispute existed regarding authenticity.",
      "relationshipChange": "Dorian becomes increasingly wary of residents asking questions.",
      "pressureChange": "Forgery Arc +3",
      "canonImpact": "Forgery pressure introduced",
      "futureDependency": "P009",
      "sharedTrait": "Disciplined"
    },
    "turns": 6
  },
  {
    "id": "P003",
    "title": "Pressure Point",
    "difficulty": "Easy",
    "openingType": "Witness Statement",
    "caseFunction": "Pressure Case",
    "arc": "Experiment",
    "informationEventId": "IE03",
    "victim": {
      "id": "tilly_chrome",
      "name": "Tilly Chrome"
    },
    "solution": {
      "suspect": {
        "id": "otis_blank",
        "name": "Otis Blank"
      },
      "room": {
        "id": "chefs_table",
        "name": "Chef's Table"
      },
      "weapon": {
        "id": "chefs_knife",
        "name": "Chef Knife"
      },
      "motive": {
        "id": "whistleblower_silence",
        "name": "Whistleblower Silence"
      }
    },
    "narrative": {
      "opening": "Tilly Chrome is dead.\n\nInvestigators interviewed multiple residents who attended a private gathering shortly before her death.\n\nOne witness recalls an argument.\n\nA second insists no argument occurred.\n\nA third claims someone left the room visibly distressed.\n\nNo two accounts fully agree.\n\nInvestigators believe the truth lies somewhere between them.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "The victim recently expressed concerns about another resident.",
        "A disclosure may have been imminent.",
        "A professional reputation was under threat.",
        "Several witnesses appear reluctant to speak openly."
      ],
      "officialFindings": "Murderer: Otis Blank\nRoom: Chef's Table\nWeapon: Chef Knife\nMotive: Whistleblower Silence",
      "reconstruction": "Tilly learned information that was never intended to become public.\n\nAt first she treated it as gossip.\n\nLater she realised it was something far more serious.\n\nThe decision to speak out created immediate pressure.\n\nInside the Chef's Table dining area, a confrontation took place between someone prepared to reveal information and someone determined to stop it.\n\nOnly one left the conversation alive.",
      "aftermath": "Milo Vex learns Tilly had been planning to expose something significant.\n\nHe begins quietly searching for evidence.",
      "informationEvent": "A deleted email is recovered from a backup server.\n\nThe draft was never sent.\n\nThe subject line reads:\n\n\"People deserve to know.\" ",
      "tomorrowHook": "What information was important enough to kill for?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Milo becomes aware that Tilly was preparing a disclosure.",
      "relationshipChange": "Suspicion surrounding Otis increases.",
      "pressureChange": "Experiment Arc +2",
      "canonImpact": "Experiment arc seeded",
      "futureDependency": "P012",
      "sharedTrait": "Intelligent"
    },
    "turns": 6
  },
  {
    "id": "P004",
    "title": "What Nobody Noticed",
    "difficulty": "Easy",
    "openingType": "Deleted Photographs",
    "caseFunction": "Character Case",
    "arc": "Exposure",
    "informationEventId": "IE04",
    "victim": {
      "id": "nova_wilde",
      "name": "Nova Wilde"
    },
    "solution": {
      "suspect": {
        "id": "jaxon_vale",
        "name": "Jaxon Vale"
      },
      "room": {
        "id": "cinema",
        "name": "Home Cinema"
      },
      "weapon": {
        "id": "smart_speaker",
        "name": "Smart Speaker"
      },
      "motive": {
        "id": "reputation_protection",
        "name": "Reputation Protection"
      }
    },
    "narrative": {
      "opening": "Nova Wilde is dead.\n\nInvestigators reviewing her camera equipment discovered that several photographs had been deleted shortly before her death.\n\nThe images cannot currently be recovered.\n\nNo one knows what they showed.\n\nFriends describe Nova as excited during her final days.\n\nInvestigators are attempting to determine whether the missing photographs are connected to her death.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "The victim had recently witnessed something unexpected.",
        "Public image may be relevant.",
        "Missing digital evidence forms part of the investigation.",
        "A resident appears unusually interested in the deleted files."
      ],
      "officialFindings": "Murderer: Jaxon Vale\nRoom: Home Cinema\nWeapon: Smart Speaker\nMotive: Reputation Protection",
      "reconstruction": "Nova's habit of observing rather than participating frequently placed her in possession of information others missed.\n\nThis time, she captured something that threatened another resident's carefully maintained image.\n\nThe discovery itself was accidental.\n\nThe consequences were not.\n\nA private meeting inside the Home Cinema became an attempt to contain a growing problem.\n\nBy the end of the evening, Nova was dead and the photographs were gone.",
      "aftermath": "Several residents begin questioning what Nova may have seen before her death.\n\nInterest in the missing photographs spreads rapidly.",
      "informationEvent": "A damaged memory card is recovered from beneath a cinema seat.\n\nSpecialists believe partial data may still exist.",
      "tomorrowHook": "What was important enough to delete from every device connected to the investigation?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Cleo learns Nova was documenting something sensitive.",
      "relationshipChange": "Trust within the tower continues to weaken.",
      "pressureChange": "Exposure Arc +2",
      "canonImpact": "Observation network introduced",
      "futureDependency": "P005",
      "sharedTrait": "Creative"
    },
    "turns": 6
  },
  {
    "id": "P005",
    "title": "The Third Witness",
    "difficulty": "Easy",
    "openingType": "Resident Gossip",
    "caseFunction": "Relationship Case",
    "arc": "Social",
    "informationEventId": "IE05",
    "victim": {
      "id": "india_gold",
      "name": "India Gold"
    },
    "solution": {
      "suspect": {
        "id": "cleo_saint",
        "name": "Cleo Saint"
      },
      "room": {
        "id": "dressing",
        "name": "Dressing Room"
      },
      "weapon": {
        "id": "stiletto",
        "name": "Stiletto Heel"
      },
      "motive": {
        "id": "jealousy",
        "name": "Jealousy"
      }
    },
    "narrative": {
      "opening": "India Gold is dead.\n\nInvestigators have identified three residents who spoke with her shortly before her death.\n\nEach account differs.\n\nEach witness insists their version is accurate.\n\nThe timelines do not align.\n\nThe statements do not align.\n\nAt least one witness is lying.\n\nPossibly more.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "A long-running rivalry existed beneath the surface.",
        "The victim's popularity created resentment.",
        "Appearance mattered to both victim and killer.",
        "One witness appears more concerned with perception than truth."
      ],
      "officialFindings": "Murderer: Cleo Saint\nRoom: Dressing Room\nWeapon: Stiletto Heel\nMotive: Jealousy",
      "reconstruction": "India and Cleo occupied similar social space within Blackwood Tower.\n\nBoth attracted attention.\n\nBoth understood influence.\n\nBoth valued status.\n\nWhat appeared friendly on the surface concealed years of comparison and resentment.\n\nInside the Dressing Room, an argument exposed frustrations that had remained hidden for far too long.\n\nBy the time emotions cooled, India Gold was dead.",
      "aftermath": "Residents begin noticing rivalries that previously appeared harmless.\n\nSeveral relationships become noticeably strained.",
      "informationEvent": "A deleted message thread is recovered.\n\nMost of the conversation is missing.\n\nOne surviving message reads:\n\n\"She's always one step ahead of me.\" ",
      "tomorrowHook": "Who sent the message?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Residents learn India and Cleo's relationship was less friendly than believed.",
      "relationshipChange": "Social trust across the tower decreases.",
      "pressureChange": "Social Pressure +2",
      "canonImpact": "Social rivalry established",
      "futureDependency": "P006",
      "sharedTrait": "Charismatic"
    },
    "turns": 6
  },
  {
    "id": "P006",
    "title": "Unwanted Attention",
    "difficulty": "Medium",
    "openingType": "Security Review",
    "caseFunction": "Secret Case",
    "arc": "MCI",
    "informationEventId": "IE06",
    "victim": {
      "id": "sebastian_drift",
      "name": "Sebastian Drift"
    },
    "solution": {
      "suspect": {
        "id": "gideon_pryce",
        "name": "Gideon Pryce"
      },
      "room": {
        "id": "observ",
        "name": "Observatory"
      },
      "weapon": {
        "id": "keycard",
        "name": "Keycard"
      },
      "motive": {
        "id": "cover_up",
        "name": "Corporate Cover-Up"
      }
    },
    "narrative": {
      "opening": "Sebastian Drift is dead.\n\nInvestigators reviewing building access records discovered unusual activity in the hours before his death.\n\nSeveral movements cannot be explained.\n\nOne resident appears in locations they later claimed not to have visited.\n\nThe discrepancies remain unresolved.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "Historical records may be important.",
        "The victim recently accessed archived material.",
        "Someone feared old information becoming public.",
        "Access privileges played a role."
      ],
      "officialFindings": "Murderer: Gideon Pryce\nRoom: Observatory\nWeapon: Keycard\nMotive: Corporate Cover-Up",
      "reconstruction": "Sebastian's work as an archivist occasionally brought forgotten information back into circulation.\n\nThis time, what he found threatened to expose something that should have remained buried.\n\nAs his investigation progressed, another resident became increasingly concerned about the consequences.\n\nA meeting in the Observatory became an attempt to contain a problem.\n\nThe problem did not survive the night.\n\nNeither did Sebastian.",
      "aftermath": "Interest in Blackwood's history increases.\n\nResidents begin searching old records for themselves.",
      "informationEvent": "A storage archive contains a gap where one file should be.\n\nNo one can explain its disappearance.",
      "tomorrowHook": "What was important enough to remove from the historical record?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Rex becomes aware that Sebastian found something significant.",
      "relationshipChange": "Trust between Gideon and Rex weakens.",
      "pressureChange": "MCI Arc +2",
      "canonImpact": "Historical record pressure introduced",
      "futureDependency": "P007",
      "sharedTrait": "Observant"
    },
    "turns": 6
  },
  {
    "id": "P007",
    "title": "A Matter Of Timing",
    "difficulty": "Medium",
    "openingType": "Unfinished Recording",
    "caseFunction": "Pressure Case",
    "arc": "MCI",
    "informationEventId": "IE07",
    "victim": {
      "id": "jaxon_vale",
      "name": "Jaxon Vale"
    },
    "solution": {
      "suspect": {
        "id": "harvey_slate",
        "name": "Harvey Slate"
      },
      "room": {
        "id": "podstudio",
        "name": "Podcast Studio"
      },
      "weapon": {
        "id": "chargeing_cable",
        "name": "Charging Cable"
      },
      "motive": {
        "id": "blackmail",
        "name": "Blackmail"
      }
    },
    "narrative": {
      "opening": "Jaxon Vale is dead.\n\nInvestigators recovered an audio recording created shortly before his death.\n\nThe recording ends unexpectedly.\n\nNo explanation is provided.\n\nThe final sentence remains unfinished.\n\nExperts believe the interruption occurred moments before the murder.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "The victim believed he possessed leverage.",
        "A powerful resident felt threatened.",
        "Information had become a bargaining tool.",
        "The incomplete recording is central to the case."
      ],
      "officialFindings": "Murderer: Harvey Slate\nRoom: Podcast Studio\nWeapon: Charging Cable\nMotive: Blackmail",
      "reconstruction": "Jaxon believed he had acquired information valuable enough to force concessions.\n\nRather than publish it, he attempted to use it.\n\nThe strategy created immediate danger.\n\nInside the Podcast Studio, a conversation intended to negotiate power instead became a struggle over it.\n\nThe recording stopped.\n\nJaxon's investigation stopped.\n\nEverything else continued.",
      "aftermath": "Residents begin searching for copies of Jaxon's unpublished material.\n\nNobody knows how much he learned before his death.",
      "informationEvent": "A second audio file is discovered.\n\nIt is password protected.",
      "tomorrowHook": "What was Jaxon planning to reveal?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Saffron learns Jaxon had leverage over someone.",
      "relationshipChange": "Harvey and Saffron become increasingly opposed.",
      "pressureChange": "Harvey Pressure +3",
      "canonImpact": "Blackmail pressure escalates",
      "futureDependency": "P008",
      "sharedTrait": "Influential"
    },
    "turns": 6
  },
  {
    "id": "P008",
    "title": "The Shape Of Doubt",
    "difficulty": "Medium",
    "openingType": "Anonymous Tip",
    "caseFunction": "Relationship Case",
    "arc": "Security",
    "informationEventId": "IE08",
    "victim": {
      "id": "piper_bloom",
      "name": "Piper Bloom"
    },
    "solution": {
      "suspect": {
        "id": "rex_branson",
        "name": "Rex Branson"
      },
      "room": {
        "id": "lift",
        "name": "Glass Lift"
      },
      "weapon": {
        "id": "smart_watch_cable",
        "name": "Smart Watch Cable"
      },
      "motive": {
        "id": "obsession",
        "name": "Obsession"
      }
    },
    "narrative": {
      "opening": "Piper Bloom is dead.\n\nHours after her death, investigators received an anonymous message.\n\nThe sender has not been identified.\n\nThe message contains building locations, times and access references.\n\nNo explanation accompanies the information.\n\nInvestigators are attempting to determine whether the sender witnessed something or participated in it.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "Someone paid unusual attention to Piper's movements.",
        "Access records matter.",
        "The victim recently rejected a proposal.",
        "Surveillance forms part of the investigation."
      ],
      "officialFindings": "Murderer: Rex Branson\nRoom: Glass Lift\nWeapon: Smart Watch Cable\nMotive: Obsession",
      "reconstruction": "What began as admiration became fixation.\n\nWhat became fixation eventually became expectation.\n\nWhen Piper made clear she did not share Rex's feelings, reality collided with obsession.\n\nThe confrontation occurred inside the Glass Lift.\n\nThere was nowhere to walk away.\n\nNo way to escape the situation.\n\nOnly consequences.",
      "aftermath": "Residents begin reviewing their own assumptions about personal relationships.\n\nSeveral become noticeably more guarded.",
      "informationEvent": "An unexplained access-log anomaly is discovered near Piper's apartment.",
      "tomorrowHook": "Why was Rex repeatedly visiting locations unrelated to his responsibilities?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Gideon learns Rex had been monitoring Piper.",
      "relationshipChange": "Gideon's trust in Rex declines.",
      "pressureChange": "Surveillance Pressure +2",
      "canonImpact": "Surveillance pressure introduced",
      "futureDependency": "P009",
      "sharedTrait": "Independent"
    },
    "turns": 6
  },
  {
    "id": "P009",
    "title": "Inherited Consequences",
    "difficulty": "Medium",
    "openingType": "Authentication Dispute",
    "caseFunction": "Reveal Case",
    "arc": "Forgery",
    "informationEventId": "IE09",
    "victim": {
      "id": "dorian_luxe",
      "name": "Dorian Luxe"
    },
    "solution": {
      "suspect": {
        "id": "velvet_kane",
        "name": "Velvet Kane"
      },
      "room": {
        "id": "wine_cellar",
        "name": "Wine Cellar"
      },
      "weapon": {
        "id": "crystal_award",
        "name": "Crystal Award"
      },
      "motive": {
        "id": "revenge",
        "name": "Revenge"
      }
    },
    "narrative": {
      "opening": "Dorian Luxe is dead.\n\nThe investigation began with a disagreement.\n\nNot about murder.\n\nAbout authenticity.\n\nExperts reviewing a valuable item reached completely different conclusions.\n\nThe dispute attracted attention from multiple residents.\n\nWithin days, Dorian was dead.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "Questions regarding authenticity became increasingly serious.",
        "Professional credibility was at stake.",
        "The victim had reason to fear certainty.",
        "The murder weapon symbolised achievement and status."
      ],
      "officialFindings": "Murderer: Velvet Kane\nRoom: Wine Cellar\nWeapon: Crystal Award\nMotive: Revenge",
      "reconstruction": "For months, Velvet believed Dorian had benefited from deception.\n\nEvery challenge was dismissed.\n\nEvery concern was ignored.\n\nAs evidence accumulated, so did resentment.\n\nThe final confrontation took place in the Wine Cellar.\n\nThe truth finally emerged.\n\nDorian never had the opportunity to respond to it.",
      "aftermath": "Rumours surrounding forgery spread throughout Blackwood.\n\nThe issue can no longer be contained.",
      "informationEvent": "An expert report surfaces anonymously.\n\nIts conclusions are explosive.",
      "tomorrowHook": "If the report is genuine, what else inside Blackwood might be false?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Bianca learns forgery allegations may be legitimate.",
      "relationshipChange": "Supporters and critics of Dorian become divided.",
      "pressureChange": "Forgery Arc +4",
      "canonImpact": "Forgery arc escalates",
      "futureDependency": "P010",
      "sharedTrait": "Ethical"
    },
    "turns": 6
  },
  {
    "id": "P010",
    "title": "The Wrong Record",
    "difficulty": "Medium",
    "openingType": "Lawyer's Letter",
    "caseFunction": "Secret Case",
    "arc": "Parentage",
    "informationEventId": "IE10",
    "victim": {
      "id": "cleo_saint",
      "name": "Cleo Saint"
    },
    "solution": {
      "suspect": {
        "id": "harvey_slate",
        "name": "Harvey Slate"
      },
      "room": {
        "id": "rooftop",
        "name": "Roof Terrace"
      },
      "weapon": {
        "id": "champagne_sabre",
        "name": "Champagne Sabre"
      },
      "motive": {
        "id": "inheritance",
        "name": "Inheritance Dispute"
      }
    },
    "narrative": {
      "opening": "Cleo Saint is dead.\n\nInvestigators recovered a legal document delivered shortly before her death.\n\nThe letter references ownership, entitlement and a previously unknown discrepancy.\n\nSeveral pages are missing.\n\nNo one knows whether Cleo received the complete document.\n\nThe missing pages have not been found.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "A dispute existed before the murder occurred.",
        "The victim recently became unusually confident.",
        "Legacy and ownership are central to the case.",
        "The weapon was intended for celebration rather than violence."
      ],
      "officialFindings": "Murderer: Harvey Slate\nRoom: Roof Terrace\nWeapon: Champagne Sabre\nMotive: Inheritance Dispute",
      "reconstruction": "Cleo believed she had discovered information capable of changing an important inheritance outcome.\n\nIf true, the consequences would extend far beyond money.\n\nThe discovery threatened existing expectations and future plans.\n\nThe discussion moved to the Roof Terrace.\n\nNeither resident left with what they wanted.\n\nOnly one left alive.",
      "aftermath": "Questions regarding ownership and legacy begin circulating throughout Blackwood.\n\nSeveral residents quietly review historical records.",
      "informationEvent": "A sealed envelope addressed to Cleo is discovered inside a safe.\n\nIt has never been opened.",
      "tomorrowHook": "Who sent the envelope, and why was it hidden?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Saffron becomes aware of a possible inheritance conflict.",
      "relationshipChange": "Harvey and Saffron become increasingly opposed.",
      "pressureChange": "Parentage Arc +2",
      "canonImpact": "Inheritance pressure introduced",
      "futureDependency": "P011",
      "sharedTrait": "Strategic"
    },
    "turns": 6
  },
  {
    "id": "P011",
    "title": "Collateral Damage",
    "difficulty": "Medium",
    "openingType": "Missing Briefcase",
    "caseFunction": "Pressure Case",
    "arc": "MCI",
    "informationEventId": "IE11",
    "victim": {
      "id": "saffron_skye",
      "name": "Saffron Skye"
    },
    "solution": {
      "suspect": {
        "id": "dorian_luxe",
        "name": "Dorian Luxe"
      },
      "room": {
        "id": "panic",
        "name": "Panic Room"
      },
      "weapon": {
        "id": "ring_light_stand",
        "name": "Ring Light Stand"
      },
      "motive": {
        "id": "career",
        "name": "Career Advancement"
      }
    },
    "narrative": {
      "opening": "Saffron Skye is dead.\n\nA briefcase known to belong to the victim cannot be located.\n\nInvestigators believe it disappeared before the murder.\n\nNo witness can confirm its contents.\n\nSeveral residents appear unusually interested in whether it is recovered.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "The victim was pursuing an investigation.",
        "Ambition and opportunity both played a role.",
        "Missing documents may be more important than the murder itself.",
        "The crime scene was designed for protection and secrecy."
      ],
      "officialFindings": "Murderer: Dorian Luxe\nRoom: Panic Room\nWeapon: Ring Light Stand\nMotive: Career Advancement",
      "reconstruction": "Saffron's investigation threatened to elevate one resident while damaging another.\n\nAs opportunities shifted, pressure increased.\n\nThe missing briefcase became a symbol of what was at stake.\n\nInside the Panic Room, a confrontation about the future became a fight over it.\n\nThe winner inherited the opportunity.\n\nThe loser became the victim.",
      "aftermath": "Residents begin questioning whether the briefcase mattered more than the murder.",
      "informationEvent": "A confidential file index is recovered.\n\nThe files themselves remain missing.",
      "tomorrowHook": "What was important enough to disappear twice?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Harvey learns Saffron had gathered evidence.",
      "relationshipChange": "Harvey and Dorian become uneasy allies.",
      "pressureChange": "MCI Arc +3",
      "canonImpact": "MCI evidence displaced",
      "futureDependency": "P012",
      "sharedTrait": "Influential"
    },
    "turns": 6
  },
  {
    "id": "P012",
    "title": "What Was Overheard",
    "difficulty": "Medium",
    "openingType": "Financial Audit",
    "caseFunction": "Secret Case",
    "arc": "Experiment",
    "informationEventId": "IE12",
    "victim": {
      "id": "milo_vale",
      "name": "Milo Vex"
    },
    "solution": {
      "suspect": {
        "id": "otis_blank",
        "name": "Otis Blank"
      },
      "room": {
        "id": "kitchen",
        "name": "Smart Kitchen"
      },
      "weapon": {
        "id": "sous_vide_weight",
        "name": "Sous Vide Weight"
      },
      "motive": {
        "id": "debt_pressure",
        "name": "Debt Pressure"
      }
    },
    "narrative": {
      "opening": "Milo Vex is dead.\n\nInvestigators discovered that he had recently been examining financial records unrelated to his professional responsibilities.\n\nNobody knows why.\n\nThe records appear incomplete.\n\nSeveral transactions remain unexplained.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "Financial pressure is central to the case.",
        "The victim learned something unexpectedly.",
        "Several transactions lack supporting records.",
        "A preparation tool became a weapon."
      ],
      "officialFindings": "Murderer: Otis Blank\nRoom: Smart Kitchen\nWeapon: Sous Vide Weight\nMotive: Debt Pressure",
      "reconstruction": "Milo's curiosity led him into someone else's problems.\n\nThe deeper he looked, the worse those problems appeared.\n\nFinancial pressure became fear.\n\nFear became desperation.\n\nInside the Smart Kitchen, an uncomfortable conversation became an irreversible decision.",
      "aftermath": "Financial concerns begin attracting attention across the tower.\n\nResidents become noticeably defensive when questioned about money.",
      "informationEvent": "An encrypted spreadsheet is discovered among Milo's files.\n\nNobody has accessed it.",
      "tomorrowHook": "Why was Milo tracking payments that had nothing to do with him?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Nova learns Milo was investigating financial irregularities.",
      "relationshipChange": "Confidence in Otis begins to weaken.",
      "pressureChange": "Experiment Arc +3",
      "canonImpact": "Experiment financial links introduced",
      "futureDependency": "P013",
      "sharedTrait": "Analytical"
    },
    "turns": 6
  },
  {
    "id": "P013",
    "title": "Lines In The Sand",
    "difficulty": "Hard",
    "openingType": "Timeline Discrepancy",
    "caseFunction": "Relationship Case",
    "arc": "Security",
    "informationEventId": "IE13",
    "victim": {
      "id": "rex_branson",
      "name": "Rex Branson"
    },
    "solution": {
      "suspect": {
        "id": "gideon_pryce",
        "name": "Gideon Pryce"
      },
      "room": {
        "id": "billiard_room",
        "name": "Billiard Room"
      },
      "weapon": {
        "id": "gold_dumbbell",
        "name": "Gold Dumbbell"
      },
      "motive": {
        "id": "mistaken_id",
        "name": "Mistaken Identity"
      }
    },
    "narrative": {
      "opening": "Rex Branson is dead.\n\nInvestigators have reconstructed the final hours before his death.\n\nThe timeline makes no sense.\n\nOne key witness places Rex in two different locations within minutes of each other.\n\nAt least one account is wrong.\n\nPossibly all of them.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "The killer acted on certainty.",
        "The certainty was misplaced.",
        "The victim may have been mistaken for somebody else.",
        "Witness confidence exceeds witness reliability."
      ],
      "officialFindings": "Murderer: Gideon Pryce\nRoom: Billiard Room\nWeapon: Gold Dumbbell\nMotive: Mistaken Identity",
      "reconstruction": "Gideon became convinced Rex was responsible for something he had not done.\n\nThe evidence appeared convincing.\n\nThe conclusion appeared obvious.\n\nBoth were wrong.\n\nBy the time the mistake became clear, events had moved beyond correction.\n\nRex died because certainty arrived before truth.",
      "aftermath": "Several residents begin questioning conclusions they previously accepted without evidence.",
      "informationEvent": "A new witness comes forward.\n\nTheir statement contradicts almost everything investigators currently believe.",
      "tomorrowHook": "If Rex wasn't the target, who was?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Residents learn the murder may have targeted the wrong person.",
      "relationshipChange": "Trust in Gideon's judgement collapses.",
      "pressureChange": "Trust Crisis +2",
      "canonImpact": "Security confidence damaged",
      "futureDependency": "P014",
      "sharedTrait": "Observant"
    },
    "turns": 6
  },
  {
    "id": "P014",
    "title": "The Weight Of Silence",
    "difficulty": "Hard",
    "openingType": "Personal Diary",
    "caseFunction": "Reveal Case",
    "arc": "Parentage",
    "informationEventId": "IE14",
    "victim": {
      "id": "harvey_slate",
      "name": "Harvey Slate"
    },
    "solution": {
      "suspect": {
        "id": "bianca_frost",
        "name": "Bianca Frost"
      },
      "room": {
        "id": "med_suite",
        "name": "Meditation Suite"
      },
      "weapon": {
        "id": "mangrenade_candle",
        "name": "Mangrenade Candle"
      },
      "motive": {
        "id": "affair",
        "name": "Hidden Affair"
      }
    },
    "narrative": {
      "opening": "Harvey Slate is dead.\n\nInvestigators recovered a diary containing references to meetings, locations and initials.\n\nNames were never written.\n\nThe final entry ends mid-sentence.\n\nNo explanation follows.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "A private relationship played a role.",
        "The victim concealed significant aspects of his life.",
        "Several diary entries reference the same unidentified person.",
        "An object associated with identity became important."
      ],
      "officialFindings": "Murderer: Bianca Frost\nRoom: Meditation Suite\nWeapon: Mangrenade Candle\nMotive: Hidden Affair",
      "reconstruction": "A hidden relationship remained concealed for years.\n\nThe truth eventually emerged.\n\nWhat followed was not a sudden conflict but the release of years of frustration, disappointment and deception.\n\nThe final conversation took place in the Meditation Suite.\n\nA room designed for peace.\n\nIt achieved the opposite.",
      "aftermath": "Residents begin wondering how many other private relationships remain hidden.",
      "informationEvent": "A photograph is recovered from inside Harvey's diary.\n\nOne face has been deliberately removed.",
      "tomorrowHook": "Who was standing beside Harvey?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Nova learns Harvey maintained a secret personal life.",
      "relationshipChange": "Trust throughout the tower deteriorates further.",
      "pressureChange": "Parentage Arc +4",
      "canonImpact": "Hidden relationship pressure escalates",
      "futureDependency": "P015",
      "sharedTrait": "Curious"
    },
    "turns": 6
  },
  {
    "id": "P015",
    "title": "The Beginning Of Trouble",
    "difficulty": "Hard",
    "openingType": "Bank Statement",
    "caseFunction": "Pressure Case",
    "arc": "Experiment",
    "informationEventId": "IE15",
    "victim": {
      "id": "otis_blank",
      "name": "Otis Blank"
    },
    "solution": {
      "suspect": {
        "id": "milo_vale",
        "name": "Milo Vex"
      },
      "room": {
        "id": "gym",
        "name": "Home Gym"
      },
      "weapon": {
        "id": "vr_headset",
        "name": "VR Headset"
      },
      "motive": {
        "id": "financial_ruin",
        "name": "Financial Ruin"
      }
    },
    "narrative": {
      "opening": "Otis Blank is dead.\n\nInvestigators recovered financial documents showing a pattern of unexplained activity.\n\nThe records raise questions.\n\nThey answer none.\n\nSeveral transactions appear designed to conceal their true purpose.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "Financial collapse appeared increasingly likely.",
        "The victim had become desperate.",
        "A technology-based distraction became important.",
        "The investigation extends beyond simple debt."
      ],
      "officialFindings": "Murderer: Milo Vex\nRoom: Home Gym\nWeapon: VR Headset\nMotive: Financial Ruin",
      "reconstruction": "As financial pressure increased, so did conflict.\n\nMilo came to believe Otis was responsible for a chain of events threatening his future.\n\nThe consequences became impossible to ignore.\n\nInside the Home Gym, frustration finally overwhelmed restraint.\n\nNeither resident escaped the outcome.",
      "aftermath": "Financial stability becomes one of Blackwood's most discussed subjects.",
      "informationEvent": "An offshore account linked to the investigation is discovered.\n\nIts owner remains unknown.",
      "tomorrowHook": "Who controlled the account?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Saffron learns Otis faced severe financial problems.",
      "relationshipChange": "Remaining trust in Otis disappears.",
      "pressureChange": "Financial Pressure +3",
      "canonImpact": "Financial pressure escalates",
      "futureDependency": "P016",
      "sharedTrait": "Intelligent"
    },
    "turns": 6
  },
  {
    "id": "P016",
    "title": "The Final Question",
    "difficulty": "Hard",
    "openingType": "Anonymous Message",
    "caseFunction": "Endgame Case",
    "arc": "MCI",
    "informationEventId": "IE16",
    "victim": {
      "id": "gideon_pryce",
      "name": "Gideon Pryce"
    },
    "solution": {
      "suspect": {
        "id": "saffron_skye",
        "name": "Saffron Skye"
      },
      "room": {
        "id": "pool",
        "name": "Indoor Pool"
      },
      "weapon": {
        "id": "drone",
        "name": "Drone"
      },
      "motive": {
        "id": "rejection",
        "name": "Romantic Rejection"
      }
    },
    "narrative": {
      "opening": "Gideon Pryce is dead.\n\nHours before his death, multiple residents received the same anonymous message.\n\nThe sender remains unidentified.\n\nThe message contained only one sentence.\n\nNo explanation.\n\nNo threat.\n\nNo demand.\n\nJust a statement.\n\nInvestigators believe the message is connected to Gideon's death.\n\nYour task is to determine:\n- Who committed the murder\n- Where the murder occurred\n- Which weapon was used\n- Why the victim was targeted\n\nThe investigation remains active.",
      "clues": [
        "Personal disappointment became something darker.",
        "The victim underestimated the impact of a decision.",
        "A surveillance device became a weapon.",
        "The anonymous message matters."
      ],
      "officialFindings": "Murderer: Saffron Skye\nRoom: Indoor Pool\nWeapon: Drone\nMotive: Romantic Rejection",
      "reconstruction": "Not every motive begins with hatred.\n\nSome begin with hope.\n\nA rejection that might have ended as disappointment instead evolved into resentment.\n\nResentment became obsession.\n\nObsession became action.\n\nThe final confrontation occurred beside the Indoor Pool.\n\nThe consequences reached far beyond two residents.",
      "aftermath": "The Prologue ends.\n\nBlackwood Tower remains standing.\n\nIts residents remain unaware of how much they still do not know.",
      "informationEvent": "The anonymous message is finally revealed:\n\n\"You still don't know the whole story.\" ",
      "tomorrowHook": "MCI SEASON ONE COMING SOON\n\n- What is Harvey Slate hiding?\n- What is the truth behind the Forgery Arc?\n- What happened in the Experiment?\n- What is MCI protecting?\n- Who sent the anonymous message?",
      "outcome": "The accusation has been checked against the Blackwood case file.",
      "revealEvent": "",
      "careerProgression": "Your case record has been upgraded."
    },
    "canon": {
      "knowledgeChange": "Multiple residents receive the same warning.",
      "relationshipChange": "The entire tower becomes more suspicious.",
      "pressureChange": "MCI +5",
      "canonImpact": "Season One triggered",
      "futureDependency": "MCI Season One",
      "sharedTrait": "Independent"
    },
    "turns": 6
  }
];


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
  haptics: localStorage.getItem("mci_haptics") !== "off",
  // Placeholder until real subscription/payment integration lands. Grants catch-up on missed Season One days only —
  // it never lifts the seasonMaxUnlockedIndex() ceiling, so it cannot get anyone ahead of the daily release.
  isSubscriber: localStorage.getItem("mci_subscriber") === "yes"
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
  let loadedFrom = "embedded";

  try {
    const res = await fetch("cases.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`cases.json missing: ${res.status}`);
    const data = await res.json();
    const sourceCases = data.cases || data || [];
    CASES = normaliseCases(sourceCases);
    loadedFrom = "cases.json";
  } catch (e) {
    console.warn("MCI case JSON (cases.json) failed to load. Falling back to embedded 16-case prologue.", e);
    CASES = normaliseCases(EMBEDDED_CASES);
  }

  if (!CASES || CASES.length < PROLOGUE_LENGTH) {
    console.warn("MCI case load incomplete. Forcing embedded 16-case prologue.", {
      loadedFrom,
      caseCount: CASES ? CASES.length : 0
    });
    CASES = normaliseCases(EMBEDDED_CASES);
  }

  DATA_READY = true;
  state.caseIndex = Math.max(0, Math.min(CASES.length - 1, state.caseIndex));
  console.log("MCI CASE LOAD", {
    loadedFrom,
    caseCount: CASES.length,
    currentCaseIndex: state.caseIndex,
    currentCaseId: CASES[state.caseIndex]?.id,
    completedCases: state.completedCases
  });

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
  const cases = normaliseCases(EMBEDDED_CASES || []);
  if (cases.length) return cases;

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

function imageFallback(img) {
  const src = img.getAttribute("src") || "";
  const fallbacks = {
    "assets/weapons/gold_dumbbell.png": "assets/weapons/gold_dumbbell.PNG",
    "assets/weapons/gold_dumbbell.PNG": "assets/weapons/Gold_dumbbell.png",
    "assets/weapons/Gold_dumbbell.png": "assets/weapons/Gold_Dumbbell.png",
    "assets/weapons/keycard.png": "assets/weapons/keycard.PNG",
    "assets/weapons/keycard.PNG": "assets/weapons/Keycard.png",
    "assets/motives/debt_pressure.png": "assets/motives/debt_pressure.PNG",
    "assets/motives/debt_pressure.PNG": "assets/motives/Debt_pressure.png",
    "assets/weapons/mangreneade_candle.png": "assets/weapons/mangrenade_candle.png",
    "assets/weapons/mangrenade_candle.png": "assets/weapons/mangreneade_candle.png"
  };

  const next = fallbacks[src];
  if (next && img.dataset.fallbackTried !== next) {
    img.dataset.fallbackTried = next;
    img.src = next;
    return;
  }

  img.style.opacity = ".15";
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
  if (hasCompletedPrologue()) {
    seasonHome();
    return;
  }

  const c = currentCase();

  app.innerHTML = `<section class="screen home-screen" ${bg(ASSETS.frontpage)}><div class="content"><div class="home-spacer"></div><h2>MURDER CASE INVESTIGATION</h2><div class="statgrid"><div class="stat"><div class="label">Detective Rank</div><div class="value">${escapeHTML(player.rank)}</div></div><div class="stat"><div class="label">Current Streak</div><div class="value">${player.streak}</div></div><div class="stat"><div class="label">Cases Solved</div><div class="value">${player.solved}</div></div><div class="stat"><div class="label">Sleuth Index</div><div class="value">${player.sleuthIndex}</div></div></div><div class="panel"><h2>TODAY'S CASE</h2><h3>${c.id} — ${escapeHTML(c.title)}</h3><p>Victim: ${escapeHTML(c.victim)}</p><p class="small">Prologue case ${state.caseIndex + 1} of ${Math.min(PROLOGUE_LENGTH, CASES.length)}</p></div><button class="primary" onclick="openCase()">OPEN CASE FILE</button><button class="secondary" onclick="go('information')">INFORMATION BASE</button><div class="button-row"><button class="secondary" onclick="go('how')">HOW TO PLAY</button><button class="secondary" onclick="go('settings')">SETTINGS</button></div></div></section>`;

  console.log("MCI HOME", {
    caseIndex: state.caseIndex,
    caseId: c.id,
    totalCases: CASES.length,
    completedCases: state.completedCases,
    prologueComplete: false
  });
}

function seasonHome() {
  const total = seasonCaseCount();
  const unlocked = seasonUnlockedCount();

  const statgrid = `<div class="statgrid"><div class="stat"><div class="label">Detective Rank</div><div class="value">${escapeHTML(player.rank)}</div></div><div class="stat"><div class="label">Current Streak</div><div class="value">${player.streak}</div></div><div class="stat"><div class="label">Cases Solved</div><div class="value">${player.solved}</div></div><div class="stat"><div class="label">Sleuth Index</div><div class="value">${player.sleuthIndex}</div></div></div>`;

  if (!unlocked) {
    const launchDate = new Date(SEASON_START_DATE).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
    app.innerHTML = `<section class="screen home-screen" ${bg(ASSETS.frontpage)}><div class="content"><div class="home-spacer"></div><h2>MURDER CASE INVESTIGATION</h2>${statgrid}<div class="panel prologue-banner"><h2>PROLOGUE COMPLETE</h2><p class="green">Season One launches ${escapeHTML(launchDate)}. One new case unlocks every day — come back then.</p></div><button class="secondary" onclick="go('information')">INFORMATION BASE</button><div class="button-row"><button class="secondary" onclick="go('how')">HOW TO PLAY</button><button class="secondary" onclick="go('settings')">SETTINGS</button></div></div></section>`;
    return;
  }

  const todayIdx = todaysSeasonIndex();
  const todayCase = CASES[todayIdx];
  const todaySolved = state.completedCases.includes(todayCase.id);
  const dayNumber = todayIdx - PROLOGUE_LENGTH + 1;
  const missed = missedSeasonIndexes();

  const todayPanel = todaySolved
    ? `<div class="panel"><h2>TODAY'S CASE</h2><h3>${todayCase.id} — ${escapeHTML(todayCase.title)}</h3><p class="green">Case closed. The next case unlocks tomorrow.</p></div>`
    : `<div class="panel"><h2>TODAY'S CASE</h2><h3>${todayCase.id} — ${escapeHTML(todayCase.title)}</h3><p>Victim: ${escapeHTML(todayCase.victim)}</p><p class="small">Season One, Day ${dayNumber} of ${total}</p></div><button class="primary" onclick="openSeasonCase(${todayIdx})">OPEN CASE FILE</button>`;

  let catchUpPanel = "";
  if (missed.length && player.isSubscriber) {
    const rows = missed.map(i => `<button class="secondary season-case-row" onclick="openSeasonCase(${i})">${CASES[i].id} — ${escapeHTML(CASES[i].title)}</button>`).join("");
    catchUpPanel = `<div class="panel dark"><h2>CATCH UP</h2><p class="small">Missed cases stay open to subscribers. You can never get ahead of today's release, only catch up on the past.</p><div class="season-list">${rows}</div></div>`;
  } else if (missed.length) {
    catchUpPanel = `<div class="panel dark"><h2>CATCH UP</h2><p>You have ${missed.length} missed case${missed.length === 1 ? "" : "s"} waiting.</p><p class="small">Subscribers can catch up on missed days. Nobody can ever play ahead of today's release.</p><button class="ghost" onclick="go('settings')">SUBSCRIBER ACCESS</button></div>`;
  }

  app.innerHTML = `<section class="screen home-screen" ${bg(ASSETS.frontpage)}><div class="content"><div class="home-spacer"></div><h2>MURDER CASE INVESTIGATION</h2>${statgrid}${todayPanel}${catchUpPanel}<button class="secondary" onclick="go('information')">INFORMATION BASE</button><div class="button-row"><button class="secondary" onclick="go('how')">HOW TO PLAY</button><button class="secondary" onclick="go('settings')">SETTINGS</button></div></div></section>`;

  console.log("MCI SEASON HOME", {
    todayIdx,
    todayCaseId: todayCase.id,
    todaySolved,
    missed,
    isSubscriber: player.isSubscriber
  });
}

function openSeasonCase(i) {
  if (!canPlayCase(i)) {
    haptic([20, 40, 20]);
    alert("That case isn't available yet.");
    return;
  }

  resetForCase(i);
  go("casefile");
}

function howToPlay() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>HOW TO PLAY</h2><p>Each case has one victim and four truths.</p><ul><li>Suspect</li><li>Weapon</li><li>Room</li><li>Motive</li></ul><p>Choose one card from each category and submit an accusation.</p><p>The progress bar shows how many of the four categories are correct: red for zero, amber as you get closer, green for all four.</p><p>The bottom display compares your latest accusation with the true answers. For each wrong card, it reveals one aligned characteristic, feature or driver and tells you how many characteristics, features or drivers matched in total.</p><p>Previously revealed characteristics, features and drivers remain highlighted on the cards.</p><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function settings() {
  app.innerHTML = `<section class="screen" ${bg(ASSETS.casefile)}><div class="content tight"><div class="panel dark"><h2>SETTINGS</h2><div class="toggle-row"><div><h3>Haptic Feedback</h3><p class="small">Small vibration taps on supported phones.</p></div><button class="switch ${player.haptics ? "on" : ""}" aria-label="Toggle haptics" onclick="toggleHaptics()"></button></div><div class="toggle-row"><div><h3>Season Catch-Up Access</h3><p class="small">Test toggle only — this stands in for real subscription checkout. It only unlocks missed past days, never today's ceiling.</p></div><button class="switch ${player.isSubscriber ? "on" : ""}" aria-label="Toggle subscriber access" onclick="toggleSubscriber()"></button></div><div class="panel"><h3>Detective Name</h3><p>${escapeHTML(player.name)}</p><button class="ghost" onclick="renamePlayer()">CHANGE NAME</button></div><button class="primary" onclick="go('home')">RETURN HOME</button></div></div></section>`;
}

function toggleHaptics() {
  player.haptics = !player.haptics;
  localStorage.setItem("mci_haptics", player.haptics ? "on" : "off");
  haptic(20);
  render();
}

function toggleSubscriber() {
  player.isSubscriber = !player.isSubscriber;
  localStorage.setItem("mci_subscriber", player.isSubscriber ? "yes" : "no");
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

  return `<button class="info-entry ${expanded}" onclick="toggleInfoEntry('${entry.type}', '${id}')" aria-expanded="${expanded ? "true" : "false"}">
    <img src="${img}" alt="${escapeHTML(name)}" onerror="imageFallback(this)">
    <div>
      <h3>${escapeHTML(name)}</h3>
      <p>${escapeHTML(description)}</p>
      <div class="info-expanded">
        <p class="small">${label}</p>
        <div class="playable-attributes">${details.map(d => `<span class="playable-attribute">${escapeHTML(d)}</span>`).join("")}</div>
      </div>
    </div>
  </button>`;
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
  const lastIndex = CASES.length - 1;
  state = {
    ...state,
    screen: nextScreen,
    caseIndex: Math.max(0, Math.min(lastIndex, i)),
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
    loadingScore: null,
    expandedInfo: state.expandedInfo || {}
  };

  localStorage.setItem("mci_current_case_index", String(state.caseIndex));
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

  setTimeout(() => {
    document.querySelectorAll(".progress-bar[data-target-width]").forEach(bar => {
      bar.style.width = bar.dataset.targetWidth;
    });
  }, 80);

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
    <img src="${img}" alt="${escapeHTML(displayName)}" onerror="imageFallback(this)">
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
  const prologueLast = CASES[Math.min(PROLOGUE_LENGTH, CASES.length) - 1];
  return !!prologueLast && state.completedCases.includes(prologueLast.id);
}

// Season One cases (index >= PROLOGUE_LENGTH) unlock one per day from SEASON_START_DATE.
// This ceiling is absolute: nobody, subscriber or not, can ever play past it.
function seasonCaseCount() {
  return Math.max(0, CASES.length - PROLOGUE_LENGTH);
}

function seasonDaysElapsed() {
  const start = new Date(SEASON_START_DATE).getTime();
  return Math.floor((Date.now() - start) / 86400000);
}

// Number of season cases unlocked so far (0 = season hasn't started yet).
function seasonUnlockedCount() {
  const total = seasonCaseCount();
  if (!total) return 0;
  return Math.max(0, Math.min(total, seasonDaysElapsed() + 1));
}

// Highest CASES index anyone is currently allowed to play, or -1 if season hasn't started.
function seasonMaxUnlockedIndex() {
  const unlocked = seasonUnlockedCount();
  return unlocked ? PROLOGUE_LENGTH + unlocked - 1 : -1;
}

// Today's case is always the most recently unlocked one.
function todaysSeasonIndex() {
  return seasonMaxUnlockedIndex();
}

// Season indices between PROLOGUE_LENGTH and today's that the player hasn't solved yet.
function missedSeasonIndexes() {
  const todayIdx = todaysSeasonIndex();
  if (todayIdx < 0) return [];

  const missed = [];
  for (let i = PROLOGUE_LENGTH; i < todayIdx; i++) {
    if (!state.completedCases.includes(CASES[i]?.id)) missed.push(i);
  }
  return missed;
}

// Single gate every season case-open goes through: today's case is open to everyone,
// earlier missed cases are catch-up only for subscribers, nothing beyond today's is ever playable.
function canPlayCase(i) {
  if (i < PROLOGUE_LENGTH) return true;

  const maxUnlocked = seasonMaxUnlockedIndex();
  if (maxUnlocked < 0 || i > maxUnlocked) return false;
  if (i === maxUnlocked) return true;

  return !!player.isSubscriber;
}

function end(failed) {
  const c = currentCase();
  const s = c.solution;
  const lastIndex = Math.min(PROLOGUE_LENGTH, CASES.length) - 1;
  const isPrologueCase = state.caseIndex < PROLOGUE_LENGTH;
  const isLastPrologueCase = state.caseIndex === lastIndex;
  const finalPrologue = !failed && isLastPrologueCase && state.completedCases.includes(c.id);
  const nextButton = isPrologueCase && !isLastPrologueCase
    ? `<button class="secondary" onclick="nextCase()">NEXT DAY</button>`
    : "";

  app.innerHTML = `<section class="screen result-screen" ${bg(ASSETS.caseclosed)}><div class="content"><div class="end-title">${failed ? "THEY GOT AWAY WITH IT" : "CASE SOLVED"}</div><div class="subtitle">${failed ? "The suspect walks free." : "Great work, Detective."}</div><div class="panel dark"><h2>VICTIM: ${escapeHTML(c.victim)}</h2><div class="result-grid">${res("SUSPECT", "suspect", s.suspect)}${res("WEAPON", "weapon", s.weapon)}${res("ROOM", "room", s.room)}${res("MOTIVE", "motive", s.motive)}</div>${narrativeOutcomeHTML(c, failed)}${finalPrologue ? prologueEndHTML() : teaserHTML(c)}<div class="end-buttons"><button class="primary" onclick="share(${failed})">SHARE RESULT</button><button class="secondary" onclick="feedbackEmail()">EMAIL FEEDBACK</button><p class="email-note">Help Blackwood Tower grow. Share your result with 10 friends.</p>${nextButton}<button class="ghost" onclick="go('home')">RETURN HOME</button></div></div></div></section>`;

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
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

  return `<div class="result-card"><img class="${contain}" src="${it[2]}" alt="${escapeHTML(it[1])}" onerror="imageFallback(this)"><h2>${label}</h2><p>${escapeHTML(it[1])}</p></div>`;
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
  const lastIndex = Math.min(PROLOGUE_LENGTH, CASES.length) - 1;
  const next = Math.min(lastIndex, state.caseIndex + 1);

  console.log("MCI NEXT DAY", {
    previousCaseIndex: state.caseIndex,
    nextCaseIndex: next,
    totalCases: CASES.length,
    nextCaseId: CASES[next]?.id
  });

  state.caseIndex = next;
  localStorage.setItem("mci_current_case_index", String(next));
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
