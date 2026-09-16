// Minimal interactive implementation for the powers UI described.

const ALL_TRADITIONS = ['Iron Storm', 'Dance of Ruin', 'Burning Sands'];

// Only Burning Sands has powers for this prototype per spec
const POWERS = {
  'Burning Sands': [
  { id: 'brimstone-stance', name: 'Brimstone Stance', type: 'stance', tier: 1, kai:0, ap:0, maint:0, pillar:'Fazyr',
    desc: "The beginner's stance for sorcerers of this tradition carries several benefits. Not only does it offer protection from sorcery, but also ranged weapon attacks. It is an aggressive stance for sorcerers and will enhance damage from strikes as well as increasing area effect powers slightly. \nTier 1: Stance: +2 to parray actions w/ Sorcery skill.\nTier 2: +1 damage w/all health attacks from the Sorcery skills.\nTier 3: +2 to parry actions w/ Ranged Weapons skill.\nTier4: +1 tier to any AoE magical effects."},
  
  { id: 'shape-fire-earth', name: 'Shape Fire & Earth', tier: 1, kai:2, ap:1, maint:1, pillar:'Fazyr-Urkut', 
    desc: 'Adepts using this ability can shape the environment around them to their wishes. Any fire or earth elements can be resahped as if they were fully malleable, depending upon the tier of ability unlocked. Note that while shaes can be created, they must still obey physical laws like gravity, occupied spaces, etc. A sorcerer cannot float a ball of sand in the air, but with enough expertise he could stack sand into a column. The size of the area grows as the adepts knowledge does. All effets end when the caster ends the maintenance. Stone/earth shapes will crumble or resume their natural shapes and free-floating fires will go out when the power ends. Any flammable object already on fire will continue to burn normally. Any earth shapes made with this power should follow the construct rules where possible. The construct tier will depend on the power used, see below. These shaping powers can be used in a multitude of ways. When used as an attack against an enemy it costs 2ap instead of 1ap. This reflects the need for balance by charging extra for the concentration needed to target and hit an enemy in combat.\nTier 1: Fire shaping: AoE any (1 space/tier) \nTier 3: Earth mover: AoE any (1space/tier). This power will affet dirt, sand and rocks less than one space in size. If necessary, treat these formations as tier 4 helath constructs. \nTier 7: Stone Molding: AoE any (1 spcae/2 tiers). All stone shapes will resume their natural forms when this effect ends. Treat these as tier 6 health constructs if needed.'},
  { id: 'conjure-rhokin', name: 'Conjure Rhokin', tier: 2, kai:5, ap:2, maint:1, pillar:'Fazyr', 
    desc: 'This power allows one to conjur rhokin connected to the Burning Sands tradition. This will bring them from their home dimension and bind them in service as well. \nTier 2: Banish rhokin (see conjuration rules). \nTier2: Conjure (Kai: 5) a single creature of rank 2. \nTier 3: Conjure (Kai: 6) a single creatue of Rank 3. \nTier 4: Conjure (Kai: 7) a single creature of up to rank 4. '},
  { id: 'inferno-bolt', name: 'Inferno Bolt', tier: 2, kai:2, ap:2, maint:-1, pillar:'Fazyr', 
    desc: 'Almost all Burning Sands initiates learn to focus fire as a weapon. While modest at first, the adept will soon learn to perform truly terrifying feats that can sway any battle. Increasing amounts of damage witll be unlocked as the adept advances through this tradition. Later the adept will learn to blast outward from her hands in a sweeping fan of flames that can bathe a nearby area. This AoE attack can be combined with the damage enhancing boosts to create several versions of this attack power.\nProfile: 2d6/Health/Forces/Altcrit: Fire \nTier 4: K+2, Area of Effect Cone (4). \nTier 5: K+2 and +2 DI. \nTier 6: K+2, Area of Effect: Cone (+2) (6 total). \nTier 7: K+2 and +2 DI (total +4 DI). \nTier 9: K+2 and +2 DI (total +6 DI).'},
  { id: 'desert-monarch', name: 'Desert Monarch', type: 'aspect', tier: 3, kai:0, ap:0, maint: -1, Pillar: 'Fazyr-Urkut',
    desc: 'With this aspect the adept can move through the desert as though a native. In addition they can charge this aspect by using magic to cause damage. In this way they will prime themselves to release sorceries again to even greater effect. \nPassive effect: Familiar Terrain (Desert), Endurance - Can make a forced march one day without fatigue penalities while on land. \nCharging Catalysts: This aspect requires 3 counters to charge. 1# - Absorb the casting of a Urkut power (not maint) 1# - successfully parry a sorcery or thaumaturdy attack. 3# - Damage two enemies w/sorcery in 1 round.'},
  { id: 'earthstrike', name: 'Earthstrike', tier: 3, kai:4, ap:2, maint:-1, pillar:'Urkut', 
    desc: 'With this ability the character can cause the earth itself to explode upwards to injur her enemies. It also ignores all cover modifiers like walls, since the attack comes from eblow. Shards of rock will strike upwards three spaces high, so can even be used to damage low flying opponents. \nTier 3: Earthstrike: Profile 2D6/Health/Armor/AoE Line (5). \nTier 5: Fracture: At this tier the caster can cause structural damage to stone (objects/constructs). This attack only affects the objects/constructs, and it can crit those targets. Profile: 3d6/Health/Defense (forces)/Altcrit: Perforate. \n Tier 6: AoE line +3 spaces (8 total) (No additional Kai). \nTier 7: K+2 and +2 DI (toal +2 DI). \nTier 9: K+2 and +2 DI (total +4 DI).'}
  ],
  // other traditions start empty for now
  'Iron Storm': [
  {id: 'vanguard-stance', name: 'Vanguard Stance', type: 'stance', tier: 1, kai:0, ap:0, maint:0, pillar:'Fazyr', 
    desc: 'Stances provide a chaacter with some defensive bonuses and advantages against certain types of attacks. This stance is symbolic of the traditions apporach to fighting. Hit hard, aggressive, and fast. This stance provides the rare combination of melee weapons and sorcery defensive bonuses. It also increases melee damage and provides some extra flexibility for charges or other attacks that might be used to gain ground.'},
  {id: 'war-cry', name: 'War Cry', tier: 1, kai:1, ap:0, maint:-1, pillar:'Fazyr-Vispec',
     desc: 'The Iron Storm pushes its adherents to ever increasingly aggressive tactics. With a warrior shout, the adept can inspire their nearby allies to greator valor. This empowering support talent increases the effectiveness of aggressive tactics. The adept and all allies nearby will gain several benefits that increase as the adept increases in tier. All allies within 5 spaces of the caster will be affected, at higher tiers this will increase to seven spaces radius. First they gain one extra space for movement actions and for charges. Later they can gain extra damage on any charge attacks. This effect only lasts for the round it is activated and only affects those who charge or move towards the enemy.'},
  {id: 'staggering-strike', name: 'Staggering Strike', tier: 2, kai:2, ap:2, maint:-1, pillar:'Fazyr-Neptis', 
    desc: "The Iron Strom teaches to strike and strike hard. Possible striking again just to be usre. This level of overt violence can catch some nemies by surprise, leaving them vulnerable by getting right up in the enemy's face aggressively the character can force the enemies back on their heels. This attack may inflict an alternate stagger crit if it hits. If this attack inflicts this crit the enemy will face a temporary negative modifier to their skills."},
  {id: 'early-strike', name: 'Early Strike', tier: 2, kai:1, ap:0, maint:-1, pillar:'Fazyr', 
    desc: "The Iron Storm teaches to never wait defensively. An aggressive offense is the mantra all storm masters live and fight by. This power assists in this practice by allowing the character to act before their enemies. As the adept increases his knowledge of the Iron Storm this advantage will grow. This power functions quite simply, each time it is used it increases the initiative of the character for that round. The character's initia"},
  { id: 'iron-aspect', name: 'Iron Aspect', type: 'aspect', tier: 3, kai:0, ap:0, maint:-1, pillar:'IDK',  
    desc: 'This is an aspect. Charge by doing some things. Discharge does some other things.'},
  { id: 'try-again', name: 'Try Again', tier: 3, kai:2, ap:0, maint:-1, pillar:'IDK', 
    desc: 'When you miss a melee attack, make another melee attack.'}
  ],
  'Dance of Ruin': [
  {id: 'cotillion-stance', name: 'Cotillion Stance', type: 'stance', tier: 1, kai:0, ap:0, maint:0, pillar:'Fazyr', 
    desc: "This stance reflects the Dance of Ruin's history regarding duels of honor. It provides several benefits to a melee combatant. Increased defensive capabilities with melee weapons and ranged weapons is just the start. It trains combatants in vital strikes which adds to the damage done in melee. Lastly it incorporates a balanced form that aids in movement through a variety of difficult situations. \nTier 1: Stance: +2 to parry actions w/ Melee Weapons skill. \nTier 2: +1 damage w/melee weapons. \nTier 3: +2 to parry actions w/Ranged Weapons skill. \nTier 4: Rule of Two for movement. This character can always move at least 2 spaces."},
  {id: 'light-footed', name: 'Light Footed', tier: 1, kai:1, ap:0, maint:1, pillar:'Vispec', 
    desc: 'The Dance of Ruin starts by teaching adepts to always maintain their balance. This is shown in the stance and early powers. Among them is this talent, which is taught to almost all initiates. It is designed to provide the adept with almost unlimited choice of movement in combat. This power allows the adept to move over the most fragile of objects. While most people fight on the ground these adepts can run over a tightrope at full speed. An adept could also use this power to run and jup from branch to branch, even if some of the branches were finger thin. If used creatively, a light footed character might even be able to avoid difficult terrain penalities such as running over fallen trees and branches in swamps or forests. This power lasts for the current actions when cast (up to three ap). As a zero action talent it takes no ap to cast, and can be activated before any actions are taken. It cannot be used to assist with a response action until later tiers. \nTier 1: Light Footed. \nTier 4: Can be used as a response support to benefit response moves.' },
  {id: 'debilitating-wound', name: 'Debilitating Wound', tier: 2, kai:2, ap:2, maint:-1, pillar:'Nekrarch', 
    desc: 'Students of the Dance train rigorously to inflict painful wounds upon their enemies. By charging their weapon with entropic energies from the Nekrarch Pillar they are able to strike directly at their enemies life-force. Their enemies feel the chill of the grave strike them as their vital energies leave their bodies. The main advantage of this power is that it damages through the vitality defense instead of armor. This will be of particular use against heavily armored enemies who may not have an equally high attribute defense. The added damage increment is another small bonus. \nProfile: Normal Strike +1 DI/Helath/Vitality. \nTier 5: K+2 and +2 DI. \nTier 7: K+2 and +2 DI (total +4 DI). \nTier 9 K+2 and +2 DI (total +6 DI).'},
  {id: 'diving-reponse', name: 'Diving Response', tier: 2, kai:1, ap:0, maint:-1, pillar:'Fazyr', 
    desc: "This is where the Dance of Ruin begins to outmaneuer slower foes. Here the adept gains the ability to skirmish around lesser enemies by using their own failures as opportunities to reposition themselves. Every missed melee strike against the adept is a chance to change position. This talent allows a character to gain some free movement while defending against melee attacks. This power can be activated when the adept is attackedin melee. If the attack doesnt hit this response move can be activated. The reason for the miss doesn't matter, it can fail to hit the adept's skill dodge, or it can be parried, etc... The adept may choose to not use this, as with ay other talent. Sometimes the adept is best served by remaining where they are. At other times it proivdes the perfect way to alter battle lines or even to escape a bad situation. It is up to the adept to decide when to use it."},
  {id: 'motivated-by-pain', name: 'Motivated by Pain', type: 'aspect', tier: 3, kai:0, ap:0, maint:-1, pillar:'Fazyr',
     desc: "This aspect allows the adept to utilize pain to power their movement. Whenever they receive or cause a crit the aspect will charge. Adepts with this aspect chosen will also fight harder when wounded. They will gain enough motivation to sometimes swing the balance their way in melee. \nPassive effect: This character will always win melee weapon skill ties, but only while their health is below their normal maximum. This applies to hitting a target's melee skill dodge, getting hit in melee yourself, or making a melee parry. \nCharging Catalysts: This aspect requires 3 counters to charge. 1# - Absorb the casting of a Fazyr power (not maint). \n1 # - Take damage in melee. \n3 # - Inflict/Take a melee crit. \n Discharge effect: Usign a charge will allow the character to make a zero-action move during their turn. This move can be used like any normal move action, but takes no AP."},
  {id: 'slashing-sidestep', name: 'Slashing Sidestep', tier: 3, kai:3, ap:1, maint:-1, pillar:'Fazyr',
     desc: "Sometimes all a fighter needs is a short step to engage an enemy. Spending precious ap on a partial move can limit a character's options for a given combat round. This talent hopes to overcome that cost. This power allows the adept to move with supernatural speed. In a blur of motion, he will dash forward and make a quick strike at an nemy. This power includes a three space move followed by a quick strike, for a single ap. This move must be made before the attack, not during or after the attack. This is not a full move, it is a set amount of movement provided by the talent. \nProfile: Quick Strike/Health/Armor/ move before the attack. \n Tier 5: K+2 and +2 DI \n K + 2 and +2 DI. \n Tier 7: K+2 and +2 DI (total +4 DI). \n Tier 9: K+2 and +2 DI (total +6 DI)."}

  ]
};


// state
let state = {
  exp: 60,
  maxExp: 60,
  openTabs: [],
  selectedTradition: '',
  owned: {
    // tradition -> array of power ids
    'Iron Storm': [],
    'Burning Sands': [],
    'Dance of Ruin': [],
  },
  selectedPowerId: null
};

// Explanatory glossary for key terms used in power descriptions.
const TERMS = {
  'parry': "When you are hit with an attack, you may spend 1 AP to parry. Roll 3d6 and add your skill modifier from the skill that was used to attack you. If your total is higher than the enemy's attack roll, you take no damage. Otherwise, decrease the damage you take by 1 DI",
  'stance': "A defensive posture that gives you several benefits. You may only use one stance at a time and may switch your stance once on your turn.",
  'aspect': "A special power that featues a passive ability and can also be charged and discharged for powerful effects. You gain charges by performing certain actions, and once you gain 3 charges, you can discharge them for a special benefit. You can select 1 Aspect each day when you finish a rest.",
  'attack' : "An action where you attempt to damage a target. You make an attack roll by rolling 3d6 and adding the modifier for the skill you are using for the attack (melee, ranged, sorcery, or thaumaturgy). If the total is greater than or equal to than 10 + the target's skill, the attack hits, and you deal the listed damage.",
  'melee weapons' : "A skill associated with close-quarters combat using physical weapons. Primarily used for making attacks with melee weapons, such as swords and spears.",
  'ranged weapons' : "A skill associated with attacking targets at a distance using weapons such as bows, crossbows, and thrown weapons.",
  'sorcery' : "A skill associated with harnessing magical energies to cast spells.",
  'thaumaturgy' : "A skill associated with manipulating mystical forces to produce supernatural effects.",
  'maint' : "Short for 'Maintainence'. When you use a Maint power, you may maintain its effects for multiple rounds, but must pay Kai equal to the maint cost at each end-of-turn phase to do so.",
  'ap' : "Action Points. A resource used to perform various actions during your turn in combat. You have 3 AP each round.",
  'kai' : "A resource that represents your character's magical energy. Kai is used to activate and maintain various powers and abilities.",
  'idk' : "Placeholder tooltip.",
  'vispec' : "A pillar of magic associated with insight and enlightenment.",
  'urkut' : "A pillar of magic associated with earth and defense.",
  'pillar' : "A pillar refers to a type of magical energy.",
  'fazyr' : "A pillar of magic associated with explosive aggression.",
  'construct' : "A construct is an constructed object that can be destroyed by dealing damage to it.",
  'health' : "A physical attribute that represents a creature's ability to resist physical harm. Reducing health to 0 results in death.",
  'armor' : "A defense attribute defined by the armor you are wearing. Attacks that go through armor subtract the armor value from their damage.",
  'altcrit: fire' : "When you score a crit, you may choose to use the fire crit instead of rolling on the crit table.",
  'aoe' : "Area of effect.",
  'di' : "Damage Increment. Determines the number and type of dice rolled for damage.",
  'forces' : "A defense attribute that represents your resistance to elemental forces."
};

function escapeAttr(s){
  return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// helper to check whether Variant B is active
function isVariantB(){
  try{ return localStorage.getItem('prototype_variant') === 'B'; }catch(e){ return false; }
}

// selection delay helpers: simulate network lag when retrieving power rules
let _pendingPowerId = null;
let _pendingTimeout = null;
let _loadingPower = false;
function selectPowerWithDelay(id, delay = 200){
  // clear any existing pending selection
  if(_pendingTimeout){ clearTimeout(_pendingTimeout); _pendingTimeout = null; }
  _pendingPowerId = id;
  _loadingPower = true;
  // select immediately so buttons appear selected and buy/sell works instantly
  state.selectedPowerId = id;
  // update the right panel to show loading for this selected power
  renderRightPanel();
  _pendingTimeout = setTimeout(() => {
    _pendingTimeout = null;
    _loadingPower = false;
    // clear pending marker (selection already set)
    _pendingPowerId = null;
    // re-render now that rules are available
    renderAll();
  }, delay);
}

// tab-opening delay helpers: simulate network lag when opening a new tradition tab
let _pendingOpenTrad = null;
let _pendingOpenTimeout = null;
let _loadingTab = null;
function openTraditionWithDelay(trad, delay = 400){
  // cancel any existing pending open
  if(_pendingOpenTimeout){ clearTimeout(_pendingOpenTimeout); _pendingOpenTimeout = null; }
  _pendingOpenTrad = trad;
  _loadingTab = trad;
  // ensure tab exists in list so user sees it appear; don't select immediately
  if(!state.openTabs.includes(trad)) state.openTabs.push(trad);
  // clear selection so right panel/loading states are visible
  state.selectedTradition = null; state.selectedPowerId = null;
  renderAll();
  _pendingOpenTimeout = setTimeout(() => {
    _pendingOpenTimeout = null;
    _loadingTab = null;
    _pendingOpenTrad = null;
    state.selectedTradition = trad;
    renderAll();
  }, delay);
}
function cancelPendingOpen(){
  if(_pendingOpenTimeout){ clearTimeout(_pendingOpenTimeout); _pendingOpenTimeout = null; }
  _pendingOpenTrad = null;
  _loadingTab = null;
}

function cancelPendingSelection(){
  if(_pendingTimeout){ clearTimeout(_pendingTimeout); _pendingTimeout = null; }
  _pendingPowerId = null;
  _loadingPower = false;
}

// Replace occurrences of glossary terms in a text with annotated spans that show tooltips on hover.
function annotateTerms(text){
  if(!text) return '';
  // build regex from TERMS keys (word-boundary, case-insensitive)
  const keys = Object.keys(TERMS).map(k => k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  if(keys.length === 0) return escapeAttr(text);
  const re = new RegExp('\\b(' + keys.join('|') + ')\\b', 'gi');
  // replace, preserving original case for display but using lowercase to lookup tooltip
    return escapeAttr(text).replace(re, (match) => {
    const key = match.toLowerCase();
    const tip = TERMS[key] ? escapeAttr(TERMS[key]) : '';
    // make terms focusable for keyboard users (tabindex=0)
    return `<span class="term" tabindex="0" data-tooltip="${tip}">${match}</span>`;
  });
}

// Floating tooltip element (appended to document.body) to avoid clipping inside scroll containers
let floatingTooltip = null;
function ensureFloatingTooltip(){
  if(!floatingTooltip){
    floatingTooltip = document.createElement('div');
    floatingTooltip.id = 'floatingTooltip';
    floatingTooltip.className = 'tooltip-floating';
    floatingTooltip.style.display = 'none';
    document.body.appendChild(floatingTooltip);
  }
  return floatingTooltip;
}

function showFloatingTooltip(target){
  if(!target) return;
  const tip = target.getAttribute('data-tooltip') || '';
  if(!tip) return;
  const el = ensureFloatingTooltip();
  el.textContent = tip;
  el.style.display = 'block';
  el.style.opacity = '0';
  // avoid double-counting views for the same target while it's still visible
  if(el._currentTarget === target) return;
  // increment metric for tooltip views
  try{
    const run = getCurrentRun();
    if(run){ run.tooltips = (run.tooltips || 0) + 1; setCurrentRun(run); }
  }catch(e){}
  el._currentTarget = target;
  // allow styles to apply then measure and position
  requestAnimationFrame(() => {
    // clamp tooltip width
    const maxW = Math.min(window.innerWidth - 36, 360);
    el.style.maxWidth = maxW + 'px';
    el.style.left = '0px'; el.style.top = '0px';
    // force reflow to measure
    const m = el.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    let left = rect.left + rect.width/2 - m.width/2;
    left = Math.max(12, Math.min(left, window.innerWidth - m.width - 12));
    // position above, unless not enough space
    let top = rect.top - m.height - 10;
    if(top < 8){
      top = rect.bottom + 10;
    }
    el.style.left = left + 'px';
    el.style.top = top + 'px';
    el.style.opacity = '1';
  });
}

function hideFloatingTooltip(){
  if(floatingTooltip){ floatingTooltip.style.display = 'none'; floatingTooltip._currentTarget = null; }
}

/* Metrics helpers (stored in localStorage under 'prototype_run' and 'prototype_metrics_csv')
   prototype_run holds the current run object: { startTime: number, bought: number, sold: number }
   prototype_metrics_csv holds an accumulating CSV string with header: time_ms,powers_bought,powers_sold,timestamp
*/
function getCurrentRun(){
  try{
    const raw = localStorage.getItem('prototype_run');
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
function setCurrentRun(obj){
  localStorage.setItem('prototype_run', JSON.stringify(obj));
}
function clearCurrentRun(){
  localStorage.removeItem('prototype_run');
}
function appendMetricsCsv(timeMs, bought, sold, tooltipsViewed = 0, missingTier2 = 0, missingTraditions = 0){
  // write metrics to an experiment-specific CSV key so experiments are separated
  let exp = '1';
  try{ exp = localStorage.getItem('prototype_experiment') || '1'; }catch(e){ exp = '1'; }
  // include variant (A/B) in the key so we keep separate CSVs per experiment+variant
  let variant = 'A';
  try{ variant = (localStorage.getItem('prototype_variant') || 'A').toUpperCase(); }catch(e){ variant = 'A'; }
  const key = `prototype_metrics_csv_exp${exp}_v${variant}`;
  const now = new Date().toISOString();
  // include missing_tier2 and missing_traditions as separate columns
  const header = 'time_ms,powers_bought,powers_sold,tooltips_viewed,missing_tier2,missing_traditions,timestamp';
  let csv = localStorage.getItem(key) || '';
  if(!csv){
    csv = header + '\n';
  }
  // last column is timestamp for the run
  csv += `${timeMs},${bought},${sold},${tooltipsViewed || 0},${missingTier2 || 0},${missingTraditions || 0},${now}\n`;
  localStorage.setItem(key, csv);
}

// Compute "errors made" for the start task: "Buy two Tier 2 Powers from two different Traditions".
// Rules implemented:
// - Missing Tier 2 purchases: each missing Tier 2 (out of 2) counts as 1 error.
// - Missing added Traditions: user should have added/opened 2 traditions; each missing tradition counts as 1 error.
// We evaluate the current `state` at finish time.
function computeTaskErrors(){
  // returns an object { missingTier2, missingTraditions, total }
  // count unique traditions that have at least one Tier-2 power owned
  let uniqueTradWithTier2 = 0;
  for(const trad of Object.keys(state.owned || {})){
    const ownedIds = state.owned[trad] || [];
    const allP = POWERS[trad] || [];
    let foundInThisTrad = false;
    for(const id of ownedIds){
      const p = allP.find(x => x.id === id);
      if(p && Number(p.tier) === 2){ foundInThisTrad = true; break; }
    }
    if(foundInThisTrad) uniqueTradWithTier2++;
  }
  const missingTier2 = Math.max(0, 2 - uniqueTradWithTier2);

  // count how many traditions the user has added (open tabs)
  const traditionsAdded = Array.isArray(state.openTabs) ? state.openTabs.length : 0;
  const missingTraditions = Math.max(0, 2 - traditionsAdded);

  return { missingTier2, missingTraditions, total: missingTier2 + missingTraditions };
}

/* helpers */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

// Hide the add-tab menu (central helper used by the menu and outside clicks)
function hideAddMenu(){
  const addMenu = document.getElementById('addMenu');
  if(addMenu) addMenu.hidden = true;
}

function formatPowerLabel(p){ return `${p.name} |${p.tier}|`; }
function costForTier(t){ return 5 * t; }

// Check whether the given power has its prerequisite met in the given tradition.
// Rule: a power of tier T requires at least one owned power of every tier < T in the same tradition.
// e.g. Tier 3 requires at least one Tier 1 AND one Tier 2 power owned in that tradition.
function hasPrerequisite(trad, power){
  if(!power || !power.tier) return true;
  const tier = Number(power.tier) || 0;
  if(tier <= 1) return true; // tier 1 has no prerequisite
  const owned = state.owned[trad] || [];
  const allP = POWERS[trad] || [];
  // build a set of owned tiers
  const ownedTiers = new Set();
  for(const id of owned){
    const p = allP.find(x => x.id === id);
    if(p && p.tier) ownedTiers.add(Number(p.tier));
  }
  // ensure every tier from 1 .. tier-1 is present
  for(let t = 1; t < tier; t++){
    if(!ownedTiers.has(t)) return false;
  }
  return true;
}

// Return an array of missing prerequisite tiers (e.g. [1,2]) for a power in a tradition.
function missingPrereqTiers(trad, power){
  const res = [];
  if(!power || !power.tier) return res;
  const tier = Number(power.tier) || 0;
  if(tier <= 1) return res;
  const owned = state.owned[trad] || [];
  const allP = POWERS[trad] || [];
  const ownedTiers = new Set();
  for(const id of owned){
    const p = allP.find(x => x.id === id);
    if(p && p.tier) ownedTiers.add(Number(p.tier));
  }
  for(let t = 1; t < tier; t++){
    if(!ownedTiers.has(t)) res.push(t);
  }
  return res;
}

/* render tabs */
function renderTabs(){
  const container = document.getElementById('tabsContainer');
  container.innerHTML = '';
  state.openTabs.forEach(trad => {
    const tab = document.createElement('div');
    tab.className = 'tab' + (trad === state.selectedTradition ? ' active' : '');
    tab.setAttribute('role','tab');
    // always show the tradition name
    tab.textContent = trad;
    // if this tab is currently being opened with delay, add a small loading indicator
    if(_loadingTab && _loadingTab === trad){
      tab.classList.add('loading');
      const ell = document.createElement('span'); ell.className = 'tab-loading-dots'; ell.textContent = ' …';
      tab.appendChild(ell);
    }

    const close = document.createElement('button');
    close.className = 'close';
    close.title = 'Close tradition';
    close.innerHTML = '✕';
    // ask to confirm closing if any powers are owned in this tradition
    close.addEventListener('click', (ev) => {
      ev.stopPropagation();
      attemptCloseTab(trad);
    });
    tab.appendChild(close);

    // If any owned power in this tradition is missing its prerequisite, show a badge on the tab
    const ownedIds = state.owned[trad] || [];
    let anyMissing = false;
    if(ownedIds.length > 0){
      const allP = POWERS[trad] || [];
      for(const id of ownedIds){
        const p = allP.find(x => x.id === id);
        if(p && !hasPrerequisite(trad, p)) { anyMissing = true; break; }
      }
    }
    if(anyMissing){
      const b = document.createElement('span');
      b.className = 'prereq';
      b.setAttribute('data-tooltip', escapeAttr('One or more owned powers missing prerequisites in this tradition'));
      b.setAttribute('tabindex','0');
      b.setAttribute('aria-label','One or more owned powers missing prerequisites in this tradition');
      b.textContent = '!';
      tab.appendChild(b);
    }

    tab.addEventListener('click', () => {
      cancelPendingSelection();
      state.selectedTradition = trad;
      state.selectedPowerId = null;
      renderAll();
    });

    container.appendChild(tab);
  });
}

// Attempt to close a tradition tab. If the user owns powers in the tradition,
// show a confirmation modal explaining how many powers will be sold and how
// much EXP they'll gain. If none are owned, just remove the tab immediately.
function attemptCloseTab(trad){
  const owned = state.owned[trad] || [];
  if(!owned || owned.length === 0){
    // no owned powers: just remove the tab
    removeTab(trad);
    return;
  }
  const allP = POWERS[trad] || [];
  let totalGain = 0;
  owned.forEach(id => {
    const p = allP.find(x => x.id === id);
    if(p) totalGain += costForTier(p.tier);
  });
  showCloseTabModal(trad, owned.length, totalGain);
}

function showCloseTabModal(trad, count, expGain){
  const modal = document.getElementById('closeTabModal');
  const msg = document.getElementById('closeTabMsg');
  const title = document.getElementById('closeTabTitle');
  const confirm = document.getElementById('closeTabConfirm');
  const cancel = document.getElementById('closeTabCancel');
  if(!modal || !msg || !confirm || !cancel) return;
  title.textContent = `Remove "${trad}"?`;
  msg.textContent = `Removing this tradition will automatically sell ${count} power${count===1? '':'s'} and restore ${expGain} EXP.`;
  modal.hidden = false;
  modal.setAttribute('aria-hidden','false');
  // wire actions - use onclick to avoid accumulating listeners
  cancel.onclick = () => { hideCloseTabModal(); };
  confirm.onclick = () => { hideCloseTabModal(); closeTabAndSell(trad); };
  // focus the cancel button by default for a safer action
  cancel.focus && cancel.focus();
}

function hideCloseTabModal(){
  const modal = document.getElementById('closeTabModal');
  if(!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden','true');
  // clear handlers
  const confirm = document.getElementById('closeTabConfirm');
  const cancel = document.getElementById('closeTabCancel');
  if(confirm) confirm.onclick = null;
  if(cancel) cancel.onclick = null;
}

// Sell all owned powers in the tradition, update EXP (capped), update metrics,
// and then remove the tradition tab.
function closeTabAndSell(trad){
  const owned = state.owned[trad] || [];
  if(!owned || owned.length === 0){
    removeTab(trad);
    return;
  }
  const allP = POWERS[trad] || [];
  let totalGain = 0;
  let soldCount = 0;
  const run = getCurrentRun();
  // iterate over a copy since we'll clear the array
  for(const id of Array.from(owned)){
    const p = allP.find(x => x.id === id);
    if(!p) continue;
    const gain = costForTier(p.tier);
    totalGain += gain;
    soldCount++;
    if(run){ run.sold = (run.sold||0) + 1; }
  }
  if(run) setCurrentRun(run);
  // clear owned powers for this tradition
  state.owned[trad] = [];
  // credit EXP and cap at maxExp
  state.exp += totalGain;
  if(state.exp > state.maxExp) state.exp = state.maxExp;
  // remove the tab from openTabs and update selection
  removeTab(trad);
  // re-render to show updated EXP and badges
  renderAll();
}

/* add menu */
function renderAddMenu(){
  const menuList = document.getElementById('addMenuList');
  menuList.innerHTML = '';
  const available = ALL_TRADITIONS.filter(t => !state.openTabs.includes(t));
  if(available.length === 0){
    const li = document.createElement('li');
    li.textContent = '(no more traditions)';
    li.style.opacity = '.6';
    menuList.appendChild(li);
  } else {
    available.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      li.addEventListener('click', (ev) => {
      // prevent the document click handler from closing the menu before we update state
      ev.stopPropagation();
      // open with simulated delay
      openTraditionWithDelay(t);
      cancelPendingSelection();
      hideAddMenu();
      });
      menuList.appendChild(li);
    });
  }
}

/* remove tab */
function removeTab(trad){
  cancelPendingSelection();
  const idx = state.openTabs.indexOf(trad);
  if(idx === -1) return;
  state.openTabs.splice(idx,1);
  if(state.selectedTradition === trad){
    state.selectedTradition = state.openTabs[ Math.max(0, idx-1) ] || null;
    state.selectedPowerId = null;
  }
  renderAll();
}

/* render lists and right panel */
function renderAll(){
  renderTabs();
  renderAddMenu();
  renderLists();
  renderRightPanel();
  renderExp();
}

function renderLists(){
  const ownedEl = document.getElementById('ownedList');
  const buyEl = document.getElementById('buyList');
  ownedEl.innerHTML = '';
  buyEl.innerHTML = '';

  // If a tradition is currently being opened with delay, treat that as the
  // "effective" tradition so we can show a loading placeholder in the lists.
  const loadingFor = (typeof _loadingTab !== 'undefined' && _loadingTab) ? _loadingTab : null;
  const trad = state.selectedTradition || loadingFor;
  const allP = POWERS[trad] || [];
  const ownedIds = new Set(state.owned[trad] || []);
  // Determine whether we're rendering Variant B tier panels
  let variantB = false;
  try{ variantB = (localStorage.getItem('prototype_variant') === 'B'); }catch(e){ variantB = false; }

  // If we're currently opening a tradition, show a loading placeholder in both lists
  if(loadingFor){
    const loadingHtml = '<div class="placeholder" style="padding:11px"><em>Loading…</em></div>';
    ownedEl.innerHTML = loadingHtml;
    buyEl.innerHTML = loadingHtml;
    return;
  }

  if(!variantB){
    // Default rendering (Version A) - original behavior
    // Owned (left)
    if(allP.length === 0 || state.owned[trad].length === 0){
      ownedEl.innerHTML = '<div class="placeholder" style="padding:11px">No powers owned in this tradition.</div>';
    } else {
      const powerMap = new Map((POWERS[state.selectedTradition] || []).map(p => [p.id, p]));
      state.owned[trad].sort((idA,idB) => {
        const aTier = powerMap.get(idA)?.tier || 0;
        const bTier = powerMap.get(idB)?.tier || 0;
        if (aTier !== bTier) return aTier - bTier;
        const aName = powerMap.get(idA)?.name || idA;
        const bName = powerMap.get(idB)?.name || idB;
        return aName.localeCompare(bName);
      });
      state.owned[trad].forEach(pid => {
        const p = allP.find(x => x.id === pid) || { id: pid, name: pid, tier: '?' };
        const btn = document.createElement('button');
        btn.className = 'power-btn owned' + (state.selectedPowerId === p.id ? ' selected' : '');
        // add type-based class for styling (normal, stance, aspect) only in Variant B
        if(isVariantB()){ try{ const t = (p && p.type) ? p.type : 'normal'; btn.classList.add('type-' + t); }catch(e){} }
        const prereqMet = hasPrerequisite(trad, p);
        if(prereqMet){
          btn.innerHTML = `${formatPowerLabel(p)}`;
        } else {
          const missing = missingPrereqTiers(trad, p);
          const msg = missing.length === 1 ? `Missing Tier ${missing[0]}` : `Missing Tiers ${missing.join(', ')}`;
          const safe = escapeAttr(msg);
          btn.innerHTML = `${formatPowerLabel(p)} <span class="prereq" data-tooltip="${safe}" aria-label="${safe}" tabindex="0">!</span>`;
        }
        btn.addEventListener('click', () => {
          // if clicking the same power twice, toggle sell immediately
          if(state.selectedPowerId === p.id){ handleSell(); }
          else { selectPowerWithDelay(p.id); }
        });
        ownedEl.appendChild(btn);
      });
    }

    // Buy list (middle)
    const toBuy = allP.filter(p => !ownedIds.has(p.id));
    if(toBuy.length === 0){
      buyEl.innerHTML = '<div class="placeholder" style="padding:11px">No powers available to buy in this tradition.</div>';
    } else {
      toBuy.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'power-btn' + (state.selectedPowerId === p.id ? ' selected' : '');
        if(isVariantB()){ try{ const t = (p && p.type) ? p.type : 'normal'; btn.classList.add('type-' + t); }catch(e){} }
        btn.textContent = formatPowerLabel(p);
        btn.addEventListener('click', () => {
          // if clicking the same power twice, buy it immediately
          if(state.selectedPowerId === p.id){ handleBuy(); }
          else { selectPowerWithDelay(p.id); }
        });
        buyEl.appendChild(btn);
      });
    }
  } else {
    // Variant B rendering: group powers by tier into "tier panels".
    // Build a map tier -> [powers]
    const tiers = new Map();
    for(const p of allP){
      const t = Number(p.tier) || 0;
      if(!tiers.has(t)) tiers.set(t, []);
      tiers.get(t).push(p);
    }
    // For Owned list: only include powers that are owned
    if(allP.length === 0){
      ownedEl.innerHTML = '<div class="placeholder" style="padding:11px">No powers available in this tradition.</div>';
    } else {
      const sortedTiers = Array.from(tiers.keys()).sort((a,b) => a-b);
      let anyOwned = false;
      for(const t of sortedTiers){
        const allOptions = tiers.get(t) || [];
        // show panel only if there's at least one owned power in this tier
        const ownedInThisTier = allOptions.some(p => ownedIds.has(p.id));
        if(!ownedInThisTier) continue;
        anyOwned = true;
        const panel = document.createElement('div'); panel.className = 'tier-panel';
        panel.innerHTML = `<div class="tier-label">Tier ${t}</div>`;
        // determine if any previous tier (lower number) has no owned powers
        const missingPreviousTier = sortedTiers.some(pt => (pt < t) && !(tiers.get(pt) || []).some(p => ownedIds.has(p.id)));
        if(missingPreviousTier){
          const badge = document.createElement('span');
          badge.className = 'tier-prereq';
          badge.setAttribute('data-tooltip', escapeAttr('One or more previous tiers missing owned powers'));
          badge.setAttribute('tabindex','0');
          badge.setAttribute('aria-label','One or more previous tiers missing owned powers');
          badge.textContent = '!';
          panel.appendChild(badge);
        }
        const row = document.createElement('div'); row.className = 'tier-row';
        // render exactly two slots (or fewer if fewer total powers in this tier)
        const slotCount = Math.min(2, allOptions.length);
        for(let i=0;i<slotCount;i++){
          const p = allOptions[i];
          if(p && ownedIds.has(p.id)){
            const btn = document.createElement('button');
            btn.className = 'power-btn power-mini owned' + (state.selectedPowerId === p.id ? ' selected' : '');
            if(isVariantB()){ try{ const ttype = (p && p.type) ? p.type : 'normal'; btn.classList.add('type-' + ttype); }catch(e){} }
            btn.textContent = p.name;
            btn.addEventListener('click', () => {
              if(state.selectedPowerId === p.id){ handleSell(); }
              else { selectPowerWithDelay(p.id); }
            });
            row.appendChild(btn);
          } else if(p){
            // placeholder occupies the slot for a non-owned power
            const ph = document.createElement('button');
            ph.className = 'power-btn power-mini placeholder';
            ph.disabled = true; ph.setAttribute('aria-hidden','true');
            if(isVariantB()){ try{ const ttype = (p && p.type) ? p.type : 'normal'; ph.classList.add('type-' + ttype); }catch(e){} }
            ph.textContent = '';
            row.appendChild(ph);
          }
        }
        panel.appendChild(row);
        ownedEl.appendChild(panel);
      }
      if(!anyOwned) ownedEl.innerHTML = '<div class="placeholder" style="padding:11px">No powers owned in this tradition.</div>';
    }

    // For Buy list: only include powers not owned
    if(allP.length === 0){
      buyEl.innerHTML = '<div class="placeholder" style="padding:11px">No powers available in this tradition.</div>';
    } else {
      const sortedTiers = Array.from(tiers.keys()).sort((a,b) => a-b);
      let anyToBuy = false;
      for(const t of sortedTiers){
        const allOptions = tiers.get(t) || [];
        // show panel only if there's at least one purchasable (not owned) power in this tier
        const notOwnedInThisTier = allOptions.some(p => !ownedIds.has(p.id));
        if(!notOwnedInThisTier) continue;
        anyToBuy = true;
        const panel = document.createElement('div'); panel.className = 'tier-panel';
        panel.innerHTML = `<div class="tier-label">Tier ${t}</div>`;
        const row = document.createElement('div'); row.className = 'tier-row';
        const slotCount = Math.min(2, allOptions.length);
        for(let i=0;i<slotCount;i++){
          const p = allOptions[i];
          if(p && !ownedIds.has(p.id)){
            const btn = document.createElement('button');
            btn.className = 'power-btn power-mini' + (state.selectedPowerId === p.id ? ' selected' : '');
            if(isVariantB()){ try{ const ttype = (p && p.type) ? p.type : 'normal'; btn.classList.add('type-' + ttype); }catch(e){} }
            btn.textContent = p.name;
            btn.addEventListener('click', () => {
              if(state.selectedPowerId === p.id){ handleBuy(); }
              else { selectPowerWithDelay(p.id); }
            });
            row.appendChild(btn);
          } else if(p){
            const ph = document.createElement('button');
            ph.className = 'power-btn power-mini placeholder';
            ph.disabled = true; ph.setAttribute('aria-hidden','true');
            if(isVariantB()){ try{ const ttype = (p && p.type) ? p.type : 'normal'; ph.classList.add('type-' + ttype); }catch(e){} }
            ph.textContent = '';
            row.appendChild(ph);
          }
        }
        panel.appendChild(row);
        buyEl.appendChild(panel);
      }
      if(!anyToBuy) buyEl.innerHTML = '<div class="placeholder" style="padding:11px">No powers available to buy in this tradition.</div>';
    }
  }
}

/* exp display */
function renderExp(){
  const el = document.getElementById('expCount');
  const el2 = document.getElementById('expMax');
  el.textContent = state.exp;
  el2.textContent = state.maxExp;
  const wrap = document.querySelector('.exp-wrap');
  const progress = document.getElementById('expProgress');
  // If exp is negative, indicate overspend: show red state and fill the bar
  if(state.exp < 0){
    if(wrap) wrap.classList.add('over');
    // fill the bar to 100% to indicate problem
    progress.style.width = '100%';
  } else {
    if(wrap) wrap.classList.remove('over');
    const pct = Math.max(0, Math.min(100, Math.round(state.exp / state.maxExp * 100)));
    progress.style.width = pct + '%';
  }
}

/* render right rules and buy/sell button */
function renderRightPanel(){
  const title = document.getElementById('powerTitle');
  const meta = document.getElementById('powerMeta');
  const rules = document.getElementById('powerRules');
  const buyBtn = document.getElementById('buyBtn');
  const sellBtn = document.getElementById('sellBtn');

  // If we are currently loading rules for the selected power, show a lightweight
  // loading placeholder for the rules, but keep the power selected and allow
  // immediate buy/sell actions.
  if(_loadingPower && _pendingPowerId && state.selectedPowerId === _pendingPowerId){
    const trad = state.selectedTradition;
    const allP = POWERS[trad] || [];
    const p = allP.find(x => x.id === state.selectedPowerId);
    title.textContent = p ? p.name : 'Loading...';
    meta.innerHTML = '<p class="placeholder"><em>Loading power rules…</em></p>';
    rules.hidden = true;
    // show buy/sell so immediate actions are possible while rules fetch
    const ownedIds = new Set(state.owned[trad] || []);
    if(p && ownedIds.has(p.id)){
      buyBtn.hidden = true; sellBtn.hidden = false; sellBtn.textContent = `SELL — ${costForTier(p.tier)} EXP`; sellBtn.disabled = false;
    } else {
      sellBtn.hidden = true; buyBtn.hidden = false; buyBtn.textContent = `BUY — ${costForTier(p?.tier||0)} EXP`; buyBtn.disabled = false;
    }
    return;
  }

  if(!state.selectedPowerId){
    title.textContent = 'Select a power';
    meta.innerHTML = '<p class="placeholder">Select a power from the lists to view its rules and buy it.</p>';
    rules.hidden = true;
    buyBtn.hidden = true;
    sellBtn.hidden = true;
    return;
  }

  const trad = state.selectedTradition;
  const allP = POWERS[trad] || [];
  const p = allP.find(x => x.id === state.selectedPowerId);
  if(!p){
    title.textContent = '(power not found)';
    rules.innerHTML = '';
    buyBtn.hidden = true;
    sellBtn.hidden = true;
    return;
  }

  title.textContent = p.name;
      rules.hidden = false;

  // Annotate key terms in the description so they show explanatory tooltips on hover
  const annotated = annotateTerms(p.desc);
  // Show kai/ap/maint/pillar summary above the description
  const statsHtml = `
      <strong><span class="boldterm" tabindex="0" data-tooltip="${escapeAttr(TERMS['kai'])}">Kai:</span></strong> ${p.kai} &nbsp;
      <strong><span class="boldterm" tabindex="0" data-tooltip="${escapeAttr(TERMS['ap'])}">AP:</span></strong> ${p.ap} &nbsp;
      <strong><span class="boldterm" tabindex="0" data-tooltip="${escapeAttr(TERMS['maint'])}">Maint:</span></strong> ${(p.maint >= 0) ? p.maint : 'No'} &nbsp;
      <strong><span class="boldterm" tabindex="0" data-tooltip="${escapeAttr(TERMS['pillar'])}">Pillar:</span></strong> ${annotateTerms(p.pillar)}`;
  meta.innerHTML = `<p>${statsHtml}</p>`;
  rules.innerHTML = `<p>${annotated}</p>`;

  const ownedIds = new Set(state.owned[trad] || []);
  if(ownedIds.has(p.id)){
    // Show Sell button when the power is owned
    buyBtn.hidden = true;
    sellBtn.hidden = false;
    sellBtn.textContent = `SELL — ${costForTier(p.tier)} EXP`;
    sellBtn.disabled = false;
    rules.insertAdjacentHTML('beforeend', '<p style="margin-top:12px;font-weight:700;color:green">You already own this power.</p>');
  } else {
    // Show Buy button for not-yet-owned
    sellBtn.hidden = true;
    buyBtn.hidden = false;
    buyBtn.textContent = `BUY — ${costForTier(p.tier)} EXP`;
    // Allow buying even when exp is insufficient (user may overspend temporarily).
    buyBtn.disabled = false;
    buyBtn.style.opacity = '1';
    // mark visually if this purchase would overspend
    if(state.exp < costForTier(p.tier)){
      buyBtn.classList.add('overspend');
    } else {
      buyBtn.classList.remove('overspend');
    }
  }
}

/* buy handler */
function handleBuy(){
  const trad = state.selectedTradition;
  const allP = POWERS[trad] || [];
  const p = allP.find(x => x.id === state.selectedPowerId);
  if(!p) return;
  const cost = costForTier(p.tier);
  state.exp -= cost;
  state.owned[trad].push(p.id);
  // metrics: increment bought count for current run
  const run = getCurrentRun();
  if(run){ run.bought = (run.bought||0) + 1; setCurrentRun(run); }
  renderAll();
}

/* sell handler */
function handleSell(){
  const trad = state.selectedTradition;
  const allP = POWERS[trad] || [];
  const p = allP.find(x => x.id === state.selectedPowerId);
  if(!p) return;
  const cost = costForTier(p.tier);
  // remove one instance of the power id from owned list
  const arr = state.owned[trad] || [];
  const idx = arr.indexOf(p.id);
  if(idx !== -1){
    arr.splice(idx, 1);
    state.exp += cost;
    if(state.exp > state.maxExp) state.exp = state.maxExp;
    // metrics: increment sold count for current run
    const run = getCurrentRun();
    if(run){ run.sold = (run.sold||0) + 1; setCurrentRun(run); }
  }
  renderAll();
}

/* wire up UI controls */
function initUI(){
  // add menu toggle
  const addBtn = document.getElementById('addTabBtn');
  const addMenu = document.getElementById('addMenu');
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    addMenu.hidden = !addMenu.hidden;
  });
  // click outside closes the menu
  document.addEventListener('click', () => { addMenu.hidden = true; });

  // buy button
  document.getElementById('buyBtn').addEventListener('click', handleBuy);
  // sell button
  document.getElementById('sellBtn').addEventListener('click', handleSell);

  // Tooltip handlers: use event delegation so dynamically-created elements with data-tooltip are supported
  document.addEventListener('mouseover', (e) => {
    const t = e.target.closest && e.target.closest('[data-tooltip]');
    if(t) showFloatingTooltip(t);
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target.closest && e.target.closest('[data-tooltip]');
    if(t) hideFloatingTooltip();
  });
  // keyboard accessibility (focus/blur)
  document.addEventListener('focusin', (e) => { if(e.target && e.target.closest && e.target.closest('[data-tooltip]')) showFloatingTooltip(e.target.closest('[data-tooltip]')); });
  document.addEventListener('focusout', (e) => { if(e.target && e.target.closest && e.target.closest('[data-tooltip]')) hideFloatingTooltip(); });

  // finish button: compute metrics and navigate to end page
  const finish = document.getElementById('finishBtn');
  if(finish){
    finish.addEventListener('click', () => {
      // clear any previous finish error
      const errEl = document.getElementById('finishError');
      if(errEl){ errEl.hidden = true; errEl.textContent = ''; }

      // First, check EXP overspend state
      if(typeof state.exp === 'number' && state.exp < 0){
        if(errEl){
          errEl.textContent = 'Cannot finish character sheet, spent EXP is outside of max EXP limit. Try selling some powers.';
          errEl.hidden = false;
          errEl.focus && errEl.focus();
        } else {
          alert('Cannot finish character sheet, spent EXP is outside of max EXP limit. Try selling some powers.');
        }
        // re-render exp visuals
        renderExp();
        return;
      }

      // Validate all owned powers across traditions: ensure prerequisites are met
      let invalidFound = false;
      const invalidList = [];
      const traditions = Object.keys(state.owned || {});
      for(const trad of traditions){
        const ownedIds = state.owned[trad] || [];
        const allP = POWERS[trad] || [];
        for(const id of ownedIds){
          const p = allP.find(x => x.id === id);
          if(p && !hasPrerequisite(trad, p)){
            invalidFound = true;
            invalidList.push({ trad, id, name: p.name });
          }
        }
      }
      if(invalidFound){
        // Show error and block finishing
        if(errEl){
          errEl.textContent = 'Cannot finish character sheet, some Powers do not have their prerequisites met.';
          errEl.hidden = false;
          // focus for accessibility so screen readers announce it
          errEl.focus && errEl.focus();
        } else {
          alert('Cannot finish character sheet, some Powers do not have their prerequisites met.');
        }
        // Also re-render tabs so any tab-level badges appear
        renderTabs();
        return;
      }
      const run = getCurrentRun();
      let duration = 0; let bought = 0; let sold = 0;
      // compute task-specific errors at finish time (breakdown)
      const errorsBreakdown = computeTaskErrors();
      const currentExp = (function(){ try{ return localStorage.getItem('prototype_experiment') || '1'; }catch(e){ return '1'; } })();
      let runSnapshot = null;
      if(run && run.startTime){
        duration = Date.now() - run.startTime;
        bought = run.bought || 0;
        sold = run.sold || 0;
        // capture a snapshot of the current run metrics before we clear it
        try{ runSnapshot = Object.assign({}, run); }catch(e){ runSnapshot = null; }
        // append to CSV and clear current run (include tooltips count and error breakdown)
        appendMetricsCsv(duration, bought, sold, run.tooltips || 0, errorsBreakdown.missingTier2, errorsBreakdown.missingTraditions);
        // For experiment 1 persist a final_run summary including breakdown so end.html can show it.
        // For experiment 2, do not persist the error breakdown (we still write CSV but won't store breakdown for UI).
        if(currentExp !== '2'){
          const finalRun = Object.assign({}, run, { duration, bought, sold, errorsBreakdown });
          localStorage.setItem('prototype_last_run', JSON.stringify(finalRun));
        } else {
          const finalRun = Object.assign({}, run, { duration, bought, sold });
          localStorage.setItem('prototype_last_run', JSON.stringify(finalRun));
        }
        clearCurrentRun();
      } else {
        // no run registered: still append a zero-duration entry (include breakdown)
        appendMetricsCsv(0,0,0,0, errorsBreakdown.missingTier2, errorsBreakdown.missingTraditions);
        if(currentExp !== '2'){
          const finalRun = { duration:0, bought:0, sold:0, errorsBreakdown };
          localStorage.setItem('prototype_last_run', JSON.stringify(finalRun));
        } else {
          const finalRun = { duration:0, bought:0, sold:0 };
          localStorage.setItem('prototype_last_run', JSON.stringify(finalRun));
        }
      }
      // save a full snapshot of state so preview can render the character sheet and so we can restore full app state
      try{
        const variant = (localStorage.getItem('prototype_variant') || 'A').toUpperCase();
        const key = `prototype_owned_snapshot_exp${currentExp}_v${variant}`;
        // build a richer snapshot with power names and tiers so preview doesn't depend on global POWERS
        const snapOwned = {};
        for(const trad of Object.keys(state.owned || {})){
          const list = state.owned[trad] || [];
          const allP = POWERS[trad] || [];
          snapOwned[trad] = list.map(id => {
            const p = allP.find(x => x.id === id);
            return p ? { id: p.id, name: p.name, tier: Number(p.tier) || 0 } : { id };
          });
        }
        const snap = {
          experiment: currentExp,
          variant: variant,
          exp: state.exp,
          selectedTradition: state.selectedTradition,
          openTabs: state.openTabs,
          owned: snapOwned,
          runSnapshot: runSnapshot
        };
        localStorage.setItem(key, JSON.stringify(snap));
      }catch(e){ /* ignore storage errors */ }
      // navigate to the preview page (user will choose to finish experiment from there)
      if(currentExp === '2') window.location.href = 'preview2.html';
      else window.location.href = 'preview.html';
    });
  }

  // initial rendering
  renderAll();
}

/* init */
document.addEventListener('DOMContentLoaded', () => {
  // ensure owned object has arrays for any tradition opened
  ALL_TRADITIONS.forEach(t => state.owned[t] = state.owned[t] || []);
  // If the preview handed off a full state snapshot, restore it now
  try{
    const raw = localStorage.getItem('prototype_state_restore');
    if(raw){
      const obj = JSON.parse(raw);
      // restore experiment/variant flags
      try{ if(obj.experiment) localStorage.setItem('prototype_experiment', String(obj.experiment)); }catch(e){}
      try{ if(obj.variant) localStorage.setItem('prototype_variant', String(obj.variant)); }catch(e){}
      // restore EXP count
      try{ if(typeof obj.exp !== 'undefined') state.exp = Number(obj.exp); }catch(e){}
      // restore selected tab
      try{ if(obj.selectedTradition) state.selectedTradition = obj.selectedTradition; }catch(e){}
      // restore openTabs
      try{ if(Array.isArray(obj.openTabs)) state.openTabs = obj.openTabs.slice(); }catch(e){}
      // restore owned powers (snapshot stores objects with id/name/tier)
      try{
        if(obj.owned){
          for(const trad of Object.keys(obj.owned || {})){
            const arr = obj.owned[trad] || [];
            state.owned[trad] = arr.map(x => (x && x.id) ? x.id : x).filter(Boolean);
          }
        }
      }catch(e){}
      // restore current run metrics if present
      try{ if(obj.runSnapshot){ setCurrentRun(obj.runSnapshot); } }catch(e){}
      // remove the restore key after applying
      try{ localStorage.removeItem('prototype_state_restore'); }catch(e){}
    }
  }catch(e){}
  // If this session was started as Experiment 2, auto-purchase a small preset
  // of Powers so the participant begins with them already owned.
  try{
    const exp = localStorage.getItem('prototype_experiment') || '1';
    if(exp === '2'){
      const run = getCurrentRun();
      let boughtNow = 0;
      const addIfMissing = (trad, id) => {
        state.owned[trad] = state.owned[trad] || [];
        if(!state.owned[trad].includes(id)){
          state.owned[trad].push(id);
          const p = (POWERS[trad] || []).find(x => x.id === id);
          if(p) state.exp -= costForTier(p.tier);
          boughtNow++;
        }
      };
      // Dance of Ruin: Cotillion Stance, Diving Response, Slashing Sidestep
      addIfMissing('Dance of Ruin', 'cotillion-stance');
      addIfMissing('Dance of Ruin', 'diving-reponse');
      addIfMissing('Dance of Ruin', 'slashing-sidestep');
      // Burning Sands: Brimstone Stance, Inferno Bolt
      addIfMissing('Burning Sands', 'brimstone-stance');
      addIfMissing('Burning Sands', 'inferno-bolt');

      // record these as bought in the current run metrics if a run exists
      if(run && boughtNow > 0){ run.bought = (run.bought || 0) + boughtNow; setCurrentRun(run); }

      // make sure the tabs for these traditions are open so the participant sees them
      ['Dance of Ruin','Burning Sands'].forEach(t => { if(!state.openTabs.includes(t)) state.openTabs.push(t); });
      state.selectedTradition = state.selectedTradition || 'Dance of Ruin';
    }
  }catch(e){ /* ignore storage errors */ }

  initUI();
});