import {StorageManager,QuestionPool,AnswerChecker,ComboManager,ScreenManager} from 'https://tt-sensei.github.io/edu-components/index.js';
import {soundList} from 'https://tt-sensei.github.io/sounds-recipe-/sounds.js';

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const SOURCE=window.KANJI_READING_SOURCE;
const ASSET='https://tt-sensei.github.io/navi-character-/assets/web/fantasy/';
const BACKGROUNDS=['forest','grassland','cave','riverbank','ruins','sky-island'];
const CHARACTERS={
  sora:{name:'そら',stand:'sora-swordsman',role:'sora-swordsman'},riku:{name:'りく',stand:'riku-ninja',role:'riku-ninja'},kai:{name:'かい',stand:'kai-mage',role:'kai-mage'},
  tsuki:{name:'つき',stand:'tsuki-archer',role:'tsuki-archer'},nami:{name:'なみ',stand:'nami-guardian-knight',role:'nami-knight'},saku:{name:'さく',stand:'saku-cleric-healer',role:'saku-cleric'}
};
const MONSTER_DATA=window.KANJI_MONSTER_DATA;
const MONSTERS=MONSTER_DATA.all;
const MONSTER_ASSET=MONSTER_DATA.basePath;
const MONSTER_GROUPS=MONSTER_DATA.byGroup;
const MONSTER_KIND_ORDER=['zako','evolved','boss'];
const MONSTER_KIND_LABELS={zako:'ザコ',evolved:'ザコ進化',boss:'ボス'};
const MONSTER_GROUP_LABELS={1:'はじまりの森',2:'ひろがる大地',3:'天空と深淵'};
const LEGACY_MONSTER_ID_MAP={
  purun:'purun-little-magic-slime',komorin:'komorin-little-night-bat',kinoko:'kinoko-apple-mushroom',
  wolf:'mofu-wolf-frost-pup',golem:'koro-golem-pebble-golem',squirrel:'happa-squirrel-leafy',
  newt:'hinoko-ember-newt',owl:'dusk-feather-owl',slimeking:'aqua-slime-king',hornking:'forest-horn-king',
  boar:'bakuretsu-boar',crystal:'crystal-golem',griffon:'thunder-griffon',catmage:'twilight-cat-mage',
  dragon:'azure-sky-dragon',phoenix:'lumina-moon-phoenix'
};
const BADGE_ASSET='https://tt-sensei.github.io/edu-assets/assets/web/badges/japanese/';
const BADGES=[
  ['first','はじめての正解','word-sprout',s=>s.totalCorrect>=1],['ten','10問正解','reading-aloud',s=>s.totalCorrect>=10],['combo10','10コンボ','language-rhythm',s=>s.maxCombo>=10],
  ['read50','50読み習得','word-tree',s=>masteredKeys().length>=50],['read100','100読み習得','book-lover',s=>masteredKeys().length>=100],
  ['overcome5','苦手5こ克服','self-correction',s=>s.overcomeCount>=5],['train10','特訓10回','careful-writing',s=>s.trainingCount>=10],
  ['allstage','全24ステージ挑戦','language-explorer',s=>Object.keys(s.stageProgress).length>=24],['monster10','モンスター10体撃破','deeper-reading',s=>Object.keys(s.monsterBook).length>=10]
];
const DEFAULT={schemaVersion:3,selectedCharacter:'sora',selectedGrade:1,selectedStage:1,inputMode:'palette',playerLevel:1,exp:0,readingStats:{},nigateReadings:{},tokkunReadings:{},reviewQueue:[],stageProgress:{},stageMastery:{},maxCombo:0,monsterBook:{},monsterDefeatCounts:{},badges:{},sharedKanjiScope:null,settings:{sound:true},totalCorrect:0,totalWrong:0,overcomeCount:0,trainingCount:0};
const storage=new StorageManager('kanji-reading-fantasy');
let state={...DEFAULT,...storage.load('state',{})};
for(const key of ['readingStats','nigateReadings','tokkunReadings','stageProgress','stageMastery','monsterBook','monsterDefeatCounts','badges','settings']) state[key]={...DEFAULT[key],...(state[key]||{})};
const checker=new AnswerChecker({ignoreCase:false,trim:true});
const combo=new ComboManager({milestones:[5,10,15,20,25,30]});
const screens=new ScreenManager({screens:$$('.screen'),onBack:()=>showHome()});
let audioContext=null,battle=null,answer='',locked=false,lastQuestionIds=[];

const parseKanji=s=>s.split('|').map(x=>{const [char,reading]=x.split(':');return{char,reading}});
const kanjiByGrade=Object.fromEntries([1,2,3,4,5,6].map(g=>[g,parseKanji(SOURCE.compressedKanjiData[g])]));
const gradeChars=g=>kanjiByGrade[g].map(x=>x.char);
function stageChars(g,stage){const chars=gradeChars(g),start=Math.floor(chars.length*(stage-1)/4),end=Math.floor(chars.length*stage/4);return chars.slice(start,end)}
function questionsForChars(chars,grade=null){const set=new Set(chars),grades=grade?[grade]:[1,2,3,4,5,6],out=[];for(const g of grades)for(const char of gradeChars(g)){if(!set.has(char))continue;(SOURCE.examples[g][char]||[]).forEach((e,i)=>{if(e.reading)out.push({id:`${g}:${char}:${e.reading}:${i}`,key:`${char}::${normalizeReading(e.reading)}`,grade:g,char,sentence:e.sentence,reading:normalizeReading(e.reading),level:e.level||1})})}return out}
function stageQuestions(g,s){return questionsForChars(stageChars(g,s),g)}
const allQuestions=[1,2,3,4,5,6].flatMap(g=>questionsForChars(gradeChars(g),g));
function normalizeReading(v){return String(v||'').trim().replace(/\s+/g,'').replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60))}
function save(){state.playerLevel=Math.min(100,Math.floor(state.exp/30)+1);storage.save('state',state);updateHeader()}
function migrateMonsterState(){
  let changed=state.schemaVersion<3;
  for(const [legacyId,canonicalId] of Object.entries(LEGACY_MONSTER_ID_MAP)){
    if(state.monsterBook[legacyId]){
      if(!state.monsterBook[canonicalId])state.monsterBook[canonicalId]=state.monsterBook[legacyId];
      delete state.monsterBook[legacyId];changed=true;
    }
    if(state.monsterDefeatCounts[legacyId]!=null){
      state.monsterDefeatCounts[canonicalId]=(state.monsterDefeatCounts[canonicalId]||0)+state.monsterDefeatCounts[legacyId];
      delete state.monsterDefeatCounts[legacyId];changed=true;
    }
  }
  if(changed){state.schemaVersion=3;save()}
}
function readingStat(key){return state.readingStats[key]||(state.readingStats[key]={attempts:0,correct:0,wrong:0,recent:[],lastAsked:0,streak:0,reviewCorrects:0,lastReviewAt:0,overcome:false})}
function isMastered(key){const s=state.readingStats[key];return !!s&&s.attempts>=3&&s.correct/s.attempts>=.8&&s.streak>=2&&!state.nigateReadings[key]}
function masteredKeys(){return Object.keys(state.readingStats).filter(isMastered)}
function masteryMark(key){const s=state.readingStats[key];if(isMastered(key))return['◎','mark-good'];if(!s||s.attempts===0)return['－',''];if(state.nigateReadings[key]||s.correct/s.attempts<.7)return['△','mark-low'];return['○','mark-mid']}
function getStageMetrics(g,s){const keys=[...new Set(stageQuestions(g,s).map(q=>q.key))],covered=keys.filter(k=>(state.readingStats[k]?.correct||0)>=1).length,mastered=keys.filter(isMastered).length,percent=keys.length?Math.round(covered/keys.length*100):0,masteryPercent=keys.length?Math.round(mastered/keys.length*100):0;return{total:keys.length,covered,mastered,percent,masteryPercent,master:masteryPercent>=90&&!keys.some(k=>state.nigateReadings[k])}}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function updateHeader(){$('#level-chip').textContent=`Lv.${state.playerLevel}`;$('#exp-chip').textContent=`EXP ${state.exp}`;$('#sound-btn').textContent=state.settings.sound?'🔊':'🔇'}
function showHome(){battle=null;screens.show('home-screen');renderHome()}
function renderHome(){
  $('#grade-filter').innerHTML=[1,2,3,4,5,6].map(g=>`<option value="${g}" ${g===+state.selectedGrade?'selected':''}>${g}年</option>`).join('');
  const g=+state.selectedGrade,bg=BACKGROUNDS[g-1];$('#stage-grid').innerHTML=[1,2,3,4].map(s=>{const m=getStageMetrics(g,s);return`<button class="stage-card ${m.master?'master':''}" data-stage="${s}" style="background-image:url('${ASSET}backgrounds/${bg}.webp')"><h3>${g}年 ${'①②③④'[s-1]}</h3><span class="percent">${m.percent}%</span><small>${m.covered}/${m.total}読み 正解</small></button>`}).join('');
  $('#grade-progress').innerHTML=[1,2,3,4,5,6].map(grade=>{const chars=gradeChars(grade),keys=[...new Set(questionsForChars(chars,grade).map(q=>q.key))],done=keys.filter(k=>(state.readingStats[k]?.correct||0)>=1).length,p=keys.length?Math.round(done/keys.length*100):0;return`<div class="progress-tile"><b>${grade}年</b><span>${done}/${keys.length}読み 正解</span><div class="progress-track"><i style="width:${p}%"></i></div></div>`}).join('');
  const sc=$('#shared-card');if(state.sharedKanjiScope?.chars?.length){sc.hidden=false;sc.innerHTML=`<h2>📘 先生からの範囲</h2><p>${state.sharedKanjiScope.grade?state.sharedKanjiScope.grade+'年　':''}${state.sharedKanjiScope.chars.length}字</p><button data-shared="battle">⚔️ 範囲バトル</button><button data-shared="training">🏋️ 範囲特訓</button><button data-shared="clear">範囲をけす</button>`}else sc.hidden=true;
}
function chooseQuestions(pool,count=10){
  const now=Date.now(),rank=q=>{const s=state.readingStats[q.key];if(!s)return 0;if(state.reviewQueue.some(r=>r.key===q.key&&r.due<=state.totalCorrect+state.totalWrong))return 1;if(state.nigateReadings[q.key])return 2;if(s.recent?.slice(-3).filter(Boolean).length<2)return 3;if(isMastered(q.key))return 6;return 4};
  const sorted=[...pool].filter(q=>!lastQuestionIds.includes(q.id)).sort((a,b)=>rank(a)-rank(b)||((state.readingStats[a.key]?.lastAsked||0)-(state.readingStats[b.key]?.lastAsked||0))||(Math.random()-.5));
  const qp=new QuestionPool(sorted,{mode:'sequential'}),picked=qp.take(Math.min(count,sorted.length));if(picked.length<count){const extra=new QuestionPool(pool.filter(q=>!picked.includes(q)),{mode:'random'});picked.push(...extra.take(count-picked.length))}lastQuestionIds=picked.slice(-3).map(q=>q.id);return picked
}
function startStage(g,s){state.selectedGrade=+g;state.selectedStage=+s;save();startSession({mode:'battle',grade:+g,stage:+s,questions:chooseQuestions(stageQuestions(+g,+s))})}
function startShared(mode){const sc=state.sharedKanjiScope;if(!sc)return;const pool=questionsForChars(sc.chars,sc.grade||null);startSession({mode,grade:sc.grade||0,stage:0,label:'先生の範囲',questions:chooseQuestions(pool)})}
function startTraining(kind='auto',customQuestions=null){let pool=customQuestions||allQuestions;if(!customQuestions){if(kind==='weak')pool=allQuestions.filter(q=>state.nigateReadings[q.key]);if(kind==='tokkun')pool=allQuestions.filter(q=>state.tokkunReadings[q.key]);if(kind==='stage')pool=stageQuestions(state.selectedGrade,state.selectedStage);if(kind==='auto')pool=allQuestions.filter(q=>state.nigateReadings[q.key]||state.tokkunReadings[q.key]||!isMastered(q.key))}if(!pool.length){toast('特訓する読みがまだありません');return}state.trainingCount++;save();startSession({mode:'training',grade:0,stage:0,label:'特訓',questions:chooseQuestions(pool)})}
function monsterGroupForGrade(grade){return +grade<=2?1:+grade<=4?2:3}
function pickMonsterKind(stage){
  const weights=stage===1?[['zako',70],['evolved',25],['boss',5]]:stage===2?[['zako',45],['evolved',40],['boss',15]]:stage===3?[['zako',28],['evolved',47],['boss',25]]:[['zako',18],['evolved',42],['boss',40]],
    total=weights.reduce((sum,item)=>sum+item[1],0);
  let roll=Math.random()*total;
  for(const [kind,weight] of weights){roll-=weight;if(roll<0)return kind}
  return 'zako'
}
function pickMonsterForBattle(grade,stage){
  const group=monsterGroupForGrade(grade),candidates=MONSTER_GROUPS[group]||MONSTERS,kind=pickMonsterKind(+stage||1),kindPool=candidates.filter(monster=>monster.kind===kind),
    unseenKind=kindPool.filter(monster=>!state.monsterBook[monster.id]),unseenGroup=candidates.filter(monster=>!state.monsterBook[monster.id]);
  if(unseenKind.length)return unseenKind[Math.floor(Math.random()*unseenKind.length)];
  if(unseenGroup.length&&Math.random()<.45)return unseenGroup[Math.floor(Math.random()*unseenGroup.length)];
  const pool=kindPool.length?kindPool:candidates;
  return pool[Math.floor(Math.random()*pool.length)]
}
function startSession(config){
  const monster=config.mode==='training'?null:pickMonsterForBattle(config.grade,config.stage);combo.reset();answer='';locked=false;
  const partners=Object.keys(CHARACTERS).filter(id=>id!==state.selectedCharacter),trainingPartner=partners[Math.floor(Math.random()*partners.length)];
  battle={...config,index:0,playerHP:5,enemyHP:10,maxEnemyHP:10,correct:0,wrong:0,mistakes:[],newMastered:[],newWeak:[],overcome:[],monster,trainingPartner,finished:false};
  screens.show('battle-screen');$('#battle-screen').classList.toggle('training-mode',config.mode==='training');$('#battle-label').textContent=config.label||`${config.grade}年${'①②③④'[config.stage-1]}`;
  $('#battle-field').style.setProperty('--battle-bg',`url('${ASSET}backgrounds/${config.mode==='training'?'training-ground':BACKGROUNDS[(config.grade||1)-1]}.webp')`);renderQuestion()
}
function charImage(stateName='stand',characterId=state.selectedCharacter){const c=CHARACTERS[characterId]||CHARACTERS.sora;return stateName==='stand'?`${ASSET}${c.stand}.webp`:`${ASSET}${stateName}/${c.role}-${stateName}.webp`}
function renderQuestion(){
  if(!battle||battle.index>=battle.questions.length||battle.playerHP<=0||battle.enemyHP<=0){finishSession();return}const q=battle.questions[battle.index];answer='';locked=false;
  $('#question-count').textContent=`${battle.index+1}/${battle.questions.length}`;$('#combo-count').textContent=combo.getCurrent();$('#player-hp').textContent=battle.mode==='training'?'特訓中':`${battle.playerHP}/5`;$('#player-hpbar').style.width=`${battle.playerHP*20}%`;$('#enemy-hpbar').style.width=`${battle.enemyHP/battle.maxEnemyHP*100}%`;
  $('#player-img').src=charImage('stand');$('#enemy-img').src=battle.mode==='training'?charImage('stand',battle.trainingPartner):MONSTER_ASSET+battle.monster.path;$('#enemy-img').alt=battle.mode==='training'?'いっしょに特訓する仲間':'モンスター';$('.enemy').hidden=false;$('.fighter.player').hidden=false;$('.fighter.player .hpbar').hidden=battle.mode==='training';$('.fighter.enemy .hpbar').hidden=battle.mode==='training';
  const at=q.sentence.indexOf(q.char),before=at>=0?q.sentence.slice(0,at):q.sentence,after=at>=0?q.sentence.slice(at+q.char.length):'';$('#sentence').innerHTML=at>=0?`${escapeHtml(before)}<mark class="target-kanji">${escapeHtml(q.char)}</mark>${escapeHtml(after)}`:escapeHtml(q.sentence);
  $('#prompt').textContent=`「${q.char}」の よみは？`;updateTokkunButton(q);$('#feedback').textContent='';$('#feedback').className='feedback';$('#submit-btn').textContent='こたえる';renderInput(q);updateBattleHud()
}
function renderInput(q){const keyboard=state.inputMode==='keyboard';$('#keyboard-answer').hidden=!keyboard;$('#palette').hidden=keyboard;$('#answer-display').hidden=keyboard;$('#input-mode-btn').textContent=keyboard?'▦ 9マス文字パッドでこたえる':'⌨️ キーボードでこたえる';$('#keyboard-answer').placeholder='ひらがなで よみを入力';if(keyboard){$('#keyboard-answer').value='';setTimeout(()=>$('#keyboard-answer').focus(),50)}else{$('#palette').innerHTML=makePalette(q.reading).map(k=>`<button type="button" data-kana="${k}">${k}</button>`).join('');updateAnswerDisplay()}}
const KANA_ROWS=['あいうえおぁぃぅぇぉ','かきくけこがぎぐげご','さしすせそざじずぜぞ','たちつてとだぢづでどっ','なにぬねの','はひふへほばびぶべぼぱぴぷぺぽ','まみむめも','やゆよゃゅょ','らりるれろ','わをんー'];
function makePalette(reading){const needed=[...new Set(Array.from(normalizeReading(reading)))],candidates=[];for(const ch of needed){const row=KANA_ROWS.find(r=>r.includes(ch));if(row)candidates.push(...row)}const vowelGroups=['あかさたなはまやらわがざだばぱゃぁ','いきしちにひみりぎじぢびぴぃ','うくすつぬふむゆるぐずづぶぷゅぅ','えけせてねへめれげぜでべぺぇ','おこそとのほもよろをごぞどぼぽょぉ'];for(const ch of needed){const v=vowelGroups.find(r=>r.includes(ch));if(v)candidates.push(...v)}candidates.push(...'あいうえおかきくけこしじつっやゃゆゅよょん');const out=[...needed];for(const c of shuffle(candidates))if(out.length<9&&!out.includes(c))out.push(c);while(out.length<9)out.push('ん');return shuffle(out.slice(0,9))}
function shuffle(a){return[...a].sort(()=>Math.random()-.5)}
function updateAnswerDisplay(){const el=$('#answer-display');el.innerHTML=answer?escapeHtml(answer):'<span class="placeholder">よみを つくろう</span>'}
function updateTokkunButton(q){const active=!!state.tokkunReadings[q.key],b=$('#tokkun-toggle');b.classList.toggle('active',active);b.textContent=active?'★ 特訓中':'☆ 特訓する'}
function submitAnswer(){
  if(!battle)return;if(locked){battle.index++;renderQuestion();return}const q=battle.questions[battle.index],given=state.inputMode==='keyboard'?normalizeReading($('#keyboard-answer').value):normalizeReading(answer);if(!given){toast('よみを 入れてね');return}
  locked=true;const beforeMaster=isMastered(q.key),s=readingStat(q.key),correct=checker.check(given,q.reading);s.attempts++;s.lastAsked=Date.now();s.recent=[...(s.recent||[]).slice(-9),correct];
  if(correct){s.correct++;s.streak++;state.totalCorrect++;battle.correct++;state.exp+=2;const current=combo.correct();state.maxCombo=Math.max(state.maxCombo,current);$('#feedback').textContent='せいかい！';$('#feedback').className='feedback good';play(current>=10&&current%5===0?'combo10':current===5?'combo5':'correct');if(battle.mode!=='training')battle.enemyHP--;animateFighter('.fighter.player',current>=10&&current%5===0?'special':'attack');handleReviewCorrect(q.key,s);if(!beforeMaster&&isMastered(q.key))battle.newMastered.push(q.key);save();updateBattleHud();setTimeout(()=>{if(!battle)return;battle.index++;renderQuestion()},520)}
  else{s.wrong++;s.streak=0;state.totalWrong++;battle.wrong++;combo.wrong();if(battle.mode!=='training')battle.playerHP--;battle.mistakes.push(q);if(!state.nigateReadings[q.key])battle.newWeak.push(q.key);state.nigateReadings[q.key]=true;queueReview(q);scheduleInSessionReview(q);$('#feedback').textContent=`もういちど！ 正解は「${q.reading}」`;$('#feedback').className='feedback bad';$('#submit-btn').textContent='つぎへ';play('softFail');animateFighter('.fighter.player','damage');save();updateBattleHud()}
}
function queueReview(q){const count=state.totalCorrect+state.totalWrong;if(!state.reviewQueue.some(r=>r.key===q.key))state.reviewQueue.push({key:q.key,due:count+3})}
function scheduleInSessionReview(q){const target=battle.index+3;if(target>=battle.questions.length)return;const alternate=allQuestions.find(x=>x.key===q.key&&x.id!==q.id&&x.id!==battle.questions[target].id);if(alternate)battle.questions[target]=alternate}
function handleReviewCorrect(key,s){const count=state.totalCorrect+state.totalWrong,entry=state.reviewQueue.find(r=>r.key===key);if(!entry||entry.due>count)return;if(count-s.lastReviewAt>=2){s.reviewCorrects=(s.reviewCorrects||0)+1;s.lastReviewAt=count}if(s.reviewCorrects>=2){const wasWeak=!!state.nigateReadings[key];delete state.nigateReadings[key];state.reviewQueue=state.reviewQueue.filter(r=>r.key!==key);s.overcome=true;if(wasWeak){state.overcomeCount++;battle?.overcome.push(key)}}else entry.due=count+3}
function updateBattleHud(){$('#combo-count').textContent=combo.getCurrent();$('#player-hpbar').style.width=`${battle.playerHP*20}%`;$('#enemy-hpbar').style.width=`${battle.enemyHP/battle.maxEnemyHP*100}%`;$('#player-hp').textContent=battle.mode==='training'?'じっくり':`${battle.playerHP}/5`}
function animateFighter(selector,type){const el=$(selector),img=el.querySelector('img'),isSpecial=type==='special',duration=isSpecial?820:380;if(isSpecial)img.src=charImage('special');else if(type==='attack')img.src=charImage('attack');else if(type==='damage')img.src=charImage('damage');el.classList.add(type==='damage'?'damage':isSpecial?'special':'attack');if(isSpecial)$('#battle-field').classList.add('special-flash');setTimeout(()=>{el.classList.remove('damage','attack','special');$('#battle-field').classList.remove('special-flash');img.src=charImage('stand')},duration)}
function finishSession(){if(!battle||battle.finished)return;battle.finished=true;const won=battle.mode==='training'||battle.enemyHP<=0||battle.correct>=8,stageKey=`${battle.grade}-${battle.stage}`;if(battle.mode==='battle'){const p=state.stageProgress[stageKey]||(state.stageProgress[stageKey]={attempts:0,clears:0,best:0});p.attempts++;p.best=Math.max(p.best,battle.correct);if(won){p.clears++;registerMonster(battle.monster)}}if(battle.grade&&battle.stage){const m=getStageMetrics(battle.grade,battle.stage);state.stageMastery[stageKey]=m.master}const newBadges=checkBadges();state.exp+=won?10:4;save();renderResult(won,newBadges)}
function registerMonster(monster){if(!monster)return;const id=monster.id,today=new Date().toLocaleDateString('ja-JP');if(!state.monsterBook[id])state.monsterBook[id]={found:true,defeated:true,firstDefeat:today};state.monsterDefeatCounts[id]=(state.monsterDefeatCounts[id]||0)+1}
function checkBadges(){const gained=[];for(const [id,name] of BADGES)if(!state.badges[id]&&BADGES.find(b=>b[0]===id)[3](state)){state.badges[id]={earned:true,date:new Date().toISOString()};gained.push(name);play('badge')}return gained}
function renderResult(won,newBadges){const b=battle;screens.show('result-screen');$('#result-card').innerHTML=`<p class="eyebrow">${b.mode==='training'?'TRAINING':'BATTLE RESULT'}</p><h1>${won?(b.mode==='training'?'特訓おわり！':'STAGE CLEAR'):'もう一度ちょうせん！'}</h1><div class="result-summary"><div><b>${b.correct}</b><span>正解</span></div><div><b>${b.wrong}</b><span>ミス</span></div><div><b>${combo.getMax()}</b><span>最大コンボ</span></div><div><b>+${won?10:4}</b><span>EXP</span></div></div>${b.newMastered.length?`<p>✨ 新しく習得 ${b.newMastered.length}読み</p>`:''}${b.overcome.length?`<p>🌈 苦手克服 ${b.overcome.length}読み</p>`:''}${newBadges.length?`<p>🏅 新バッジ：${newBadges.join('、')}</p>`:''}<div class="result-actions">${b.mistakes.length?'<button class="primary-btn" data-result="mistakes">まちがえた読みを特訓</button>':''}<button data-result="retry">もう一度</button><button data-result="home">ホームへ</button></div>`}
function openPanel(type){screens.show('panel-screen');const title=$('#panel-title'),kick=$('#panel-kicker'),content=$('#panel-content');if(type==='training'){kick.textContent='読むことに集中';title.textContent='特訓';content.innerHTML=`<div class="panel-grid"><article class="panel-card"><h3>おまかせ特訓</h3><p>苦手・最近のミス・未習得を優先。</p><button data-train="auto">はじめる</button></article><article class="panel-card"><h3>苦手特訓</h3><p>${Object.keys(state.nigateReadings).length}読み</p><button data-train="weak">はじめる</button></article><article class="panel-card"><h3>★ 特訓したい</h3><p>${Object.keys(state.tokkunReadings).length}読み</p><button data-train="tokkun">はじめる</button></article><article class="panel-card"><h3>${state.selectedGrade}年${'①②③④'[state.selectedStage-1]} 特訓</h3><p>いま選んでいるステージ。</p><button data-train="stage">はじめる</button></article></div>`}if(type==='map')renderMap(title,kick,content);if(type==='collection')renderCollection(title,kick,content);if(type==='share')renderShare(title,kick,content)}
function renderMap(title,kick,content){kick.textContent='漢字×読みの記録';title.textContent='読みマップ';content.innerHTML=`<div class="section-heading"><label>学年 <select id="map-grade">${[1,2,3,4,5,6].map(g=>`<option ${g===+state.selectedGrade?'selected':''}>${g}</option>`).join('')}</select></label><span>◎ 習得　○ 練習中　△ 苦手</span></div><div id="map-list"></div>`;renderMapList(+state.selectedGrade)}
function renderMapList(g){const box=$('#map-list');box.className='panel-grid';box.innerHTML=gradeChars(g).map(char=>{const qs=questionsForChars([char],g),keys=[...new Set(qs.map(q=>q.key))];return`<article class="panel-card"><h3>${char}</h3>${keys.map(k=>{const [mark,cls]=masteryMark(k),reading=k.split('::')[1];return`<div class="reading-row"><span>${reading}</span><b class="${cls}">${mark}</b></div>`}).join('')}</article>`}).join('')}
function showCollectionTab(tab){
  const monsters=$('#collection-monsters'),badges=$('#collection-badges');if(!monsters||!badges)return;
  const isMonster=tab==='monsters';monsters.hidden=!isMonster;badges.hidden=isMonster;
  $$('[data-collection-tab]').forEach(button=>{const active=button.dataset.collectionTab===tab;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active))})
}
function monsterCardMarkup(monster){
  const found=!!state.monsterBook[monster.id],count=state.monsterDefeatCounts[monster.id]||0,record=state.monsterBook[monster.id];
  return `<article class='monster-card ${found?'found':'locked'}'><img src='${MONSTER_ASSET}${monster.path}' alt='${found?escapeHtml(monster.name):'未発見のモンスター'}' loading='lazy' decoding='async'><b>${found?escapeHtml(monster.name):'？？？'}</b><small>${found?`${count}回撃破<br>${escapeHtml(record.firstDefeat||'発見済み')}`:'未発見'}</small></article>`
}
function renderMonsterBook(){
  const box=$('#collection-monsters');if(!box)return;
  const found=MONSTERS.filter(monster=>state.monsterBook[monster.id]).length;
  box.innerHTML=`<div class='collection-summary'><div><strong>${found}</strong><span> / ${MONSTERS.length}体 発見</span></div><p>学年グループごとに出会えるモンスターが分かれています。</p></div>${[1,2,3].map(group=>{const groupEntries=MONSTER_GROUPS[group]||[],groupFound=groupEntries.filter(monster=>state.monsterBook[monster.id]).length;return `<section class='monster-group'><div class='monster-group-heading'><h2>グループ${group}・${MONSTER_GROUP_LABELS[group]}</h2><span>${groupFound}/${groupEntries.length}体</span></div>${MONSTER_KIND_ORDER.map(kind=>{const entries=groupEntries.filter(monster=>monster.kind===kind),kindFound=entries.filter(monster=>state.monsterBook[monster.id]).length;return `<section class='monster-section'><div class='monster-section-head'><h3>${MONSTER_KIND_LABELS[kind]}</h3><span>${kindFound}/${entries.length}体</span></div><div class='monster-grid'>${entries.map(monsterCardMarkup).join('')}</div></section>`}).join('')}</section>`}).join('')}`
}
function renderBadgeList(){
  const box=$('#collection-badges');if(!box)return;
  box.innerHTML=`<h2>学習バッジ一覧</h2><p class='panel-note'>学習の積み重ねで手に入るバッジです。</p><div class='badge-grid'>${BADGES.map(([id,name,image])=>`<div class='badge-card ${state.badges[id]?'':'locked'}'>${state.badges[id]?`<img src='${BADGE_ASSET}${image}/badge.webp' alt='' loading='lazy'>`:'<div class="badge-icon">🔒</div>'}<b>${state.badges[id]?escapeHtml(name):'？？？'}</b></div>`).join('')}</div>`
}
function renderCollection(title,kick,content){
  kick.textContent='冒険のきろく';title.textContent='図鑑・バッジ';
  content.innerHTML=`<div class='collection-tabs' role='tablist' aria-label='冒険の記録'><button type='button' class='collection-tab active' data-collection-tab='monsters' role='tab' aria-selected='true'>モンスター図鑑 <span>${MONSTERS.length}</span></button><button type='button' class='collection-tab' data-collection-tab='badges' role='tab' aria-selected='false'>バッジ一覧 <span>${BADGES.length}</span></button></div><div id='collection-monsters' class='collection-view'></div><div id='collection-badges' class='collection-view' hidden></div>`;
  renderMonsterBook();renderBadgeList();showCollectionTab('monsters')
}
function renderShare(title,kick,content){kick.textContent='通常24ステージとは別に保存';title.textContent='先生の範囲';content.innerHTML=`<div class="panel-grid"><article class="panel-card share-box"><h3>範囲を読みこむ</h3><p>先生からもらった範囲コードをはりつけます。</p><textarea id="scope-input" placeholder="範囲コード"></textarea><button data-share-action="load">読みこむ</button></article><article class="panel-card share-box"><h3>範囲をつくる</h3><label>学年 <select id="share-grade">${[1,2,3,4,5,6].map(g=>`<option>${g}</option>`).join('')}</select></label><label>ステージ <select id="share-stage"><option value="0">個別にえらぶ</option><option value="1">①ぜんぶ</option><option value="2">②ぜんぶ</option><option value="3">③ぜんぶ</option><option value="4">④ぜんぶ</option></select></label><div id="kanji-picker" class="kanji-picker"></div><button data-share-action="make">コードをつくる</button><textarea id="scope-output" readonly placeholder="ここにコードが出ます"></textarea></article></div>`;renderKanjiPicker(1)}
function renderKanjiPicker(g,stage=0){const chars=stage?stageChars(g,stage):gradeChars(g);$('#kanji-picker').innerHTML=chars.map(c=>`<label><input type="checkbox" value="${c}"> ${c}</label>`).join('')}
function openCharacters(){const modal=$('#modal'),c=$('#modal-content');c.innerHTML=`<p class="eyebrow">主人公をえらぶ</p><h2>だれと冒険する？</h2><div class="character-grid">${Object.entries(CHARACTERS).map(([id,x])=>`<button type="button" class="character-option ${id===state.selectedCharacter?'selected':''}" data-character="${id}"><img src="${ASSET+x.stand}.webp" alt="${x.name}"><b>${x.name}</b></button>`).join('')}</div>`;modal.showModal()}
function toggleTokkun(){if(!battle)return;const q=battle.questions[battle.index];if(state.tokkunReadings[q.key])delete state.tokkunReadings[q.key];else state.tokkunReadings[q.key]=true;save();updateTokkunButton(q);toast(state.tokkunReadings[q.key]?'特訓に入れました':'特訓から外しました')}
function toast(text){const t=$('#toast');t.textContent=text;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),1700)}
async function play(id){if(!state.settings.sound)return;try{audioContext||=new(window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')await audioContext.resume();soundList.find(s=>s.id===id)?.play(audioContext,.2)}catch{}}
function migrateOld(){if(storage.has('migration-v1'))return;try{const oldTok=JSON.parse(localStorage.getItem('kanjiMasterTokkun')||'{}'),oldWeak=JSON.parse(localStorage.getItem('kanjiMasterNigate')||'{}');for(const q of allQuestions){if(oldTok[q.char])state.tokkunReadings[q.key]=true;if(oldWeak[q.char])state.nigateReadings[q.key]=true}storage.save('migration-v1',true);save()}catch{storage.save('migration-v1',true)}}
function loadScope(code){try{const json=decodeURIComponent(escape(atob(code.trim()))),scope=JSON.parse(json);if(!Array.isArray(scope.chars)||!scope.chars.length)throw Error();const valid=new Set(gradeChars(+scope.grade));scope.chars=scope.chars.filter(c=>valid.has(c));if(!scope.chars.length)throw Error();state.sharedKanjiScope={grade:+scope.grade,chars:[...new Set(scope.chars)]};save();showHome();toast('先生の範囲を読みこみました')}catch{toast('範囲コードを確認してください')}}

document.addEventListener('click',e=>{
  const action=e.target.closest('[data-action]')?.dataset.action;if(action==='quick')startStage(state.selectedGrade,state.selectedStage);if(['training','map','collection','share'].includes(action))openPanel(action);if(action==='character')openCharacters();
  const stage=e.target.closest('[data-stage]')?.dataset.stage;if(stage)startStage(state.selectedGrade,stage);
  const kana=e.target.closest('[data-kana]')?.dataset.kana;if(kana&&!locked){answer+=kana;updateAnswerDisplay()}
  const collectionTab=e.target.closest('[data-collection-tab]')?.dataset.collectionTab;if(collectionTab)showCollectionTab(collectionTab);
  const shared=e.target.closest('[data-shared]')?.dataset.shared;if(shared==='battle'||shared==='training')startShared(shared);if(shared==='clear'){state.sharedKanjiScope=null;save();renderHome()}
  const train=e.target.closest('[data-train]')?.dataset.train;if(train)startTraining(train);
  const result=e.target.closest('[data-result]')?.dataset.result;if(result==='home')showHome();if(result==='retry'){const b=battle;b.mode==='battle'?startStage(b.grade,b.stage):startTraining('auto')}if(result==='mistakes')startTraining('mistakes',battle.mistakes);
  const character=e.target.closest('[data-character]')?.dataset.character;if(character){state.selectedCharacter=character;save();$('#modal').close();toast('主人公をかえました')}
  const share=e.target.closest('[data-share-action]')?.dataset.shareAction;if(share==='load')loadScope($('#scope-input').value);if(share==='make'){const grade=+$('#share-grade').value,stage=+$('#share-stage').value,chars=stage?stageChars(grade,stage):$$('#kanji-picker input:checked').map(x=>x.value);if(!chars.length){toast('漢字をえらんでください');return}const code=btoa(unescape(encodeURIComponent(JSON.stringify({v:1,grade,chars}))));$('#scope-output').value=code;$('#scope-output').select();navigator.clipboard?.writeText(code).then(()=>toast('コードをコピーしました')).catch(()=>toast('コードができました'))}
});
$('#grade-filter').addEventListener('change',e=>{state.selectedGrade=+e.target.value;save();renderHome()});$('#home-btn').addEventListener('click',showHome);$('#panel-back').addEventListener('click',showHome);$('#submit-btn').addEventListener('click',submitAnswer);$('#keyboard-answer').addEventListener('keydown',e=>{if(e.key==='Enter')submitAnswer()});$('#backspace-btn').addEventListener('click',()=>{if(locked)return;if(state.inputMode==='keyboard'){$('#keyboard-answer').value=$('#keyboard-answer').value.slice(0,-1);$('#keyboard-answer').focus()}else{answer=answer.slice(0,-1);updateAnswerDisplay()}});$('#clear-btn').addEventListener('click',()=>{if(locked)return;if(state.inputMode==='keyboard'){$('#keyboard-answer').value='';$('#keyboard-answer').focus()}else{answer='';updateAnswerDisplay()}});$('#input-mode-btn').addEventListener('click',()=>{state.inputMode=state.inputMode==='palette'?'keyboard':'palette';save();renderInput(battle.questions[battle.index])});$('#tokkun-toggle').addEventListener('click',toggleTokkun);$('#sound-btn').addEventListener('click',()=>{state.settings.sound=!state.settings.sound;save();toast(state.settings.sound?'音をオンにしました':'音をオフにしました')});
$('#keyboard-answer').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.isComposing)e.stopImmediatePropagation()},true);
$('#panel-content').addEventListener('change',e=>{if(e.target.id==='map-grade'){state.selectedGrade=+e.target.value;save();renderMapList(+e.target.value)}if(e.target.id==='share-grade')renderKanjiPicker(+e.target.value,+$('#share-stage').value);if(e.target.id==='share-stage')renderKanjiPicker(+$('#share-grade').value,+e.target.value)});
window.addEventListener('popstate',()=>showHome());
const scopeParam=new URLSearchParams(location.search).get('scope');migrateOld();migrateMonsterState();updateHeader();showHome();if(scopeParam)loadScope(scopeParam);
