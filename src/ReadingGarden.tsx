import {
  Button,
  Column,
  Divider,
  Heading,
  Html,
  Link,
  Page,
  Row,
  Section,
  Span,
  Svg,
  Ellipse,
  Text,
  defineTheme,
  token,
} from "@hyper-elements/react";

/**
 * Reading Garden — native Hyper Elements edition
 *
 * Page structure, theme, typography, content, responsive layout and decorative
 * landscape are built with Hyper Elements. Html is deliberately limited to
 * the interactive reading-game controls and their browser-only behavior.
 */

const gardenTheme = defineTheme({
  colors: {
    background: "#F7F5E9",
    foreground: "#252A30",
    primary: "#E9D65B",
    primaryForeground: "#252A30",
    muted: "#656A68",
    border: "#D8D4C5",
  },
  fonts: {
    body: '"DM Sans", "Trebuchet MS", sans-serif',
    heading: '"Chillax", "Trebuchet MS", ui-rounded, sans-serif',
  },
  fontSizes: {
    body: 16,
  },
  lineHeights: {
    body: 1.55,
  },
  elements: {
    Heading: {
      fontFamily: '"Chillax", "Trebuchet MS", ui-rounded, sans-serif',
      color: "#252A30",
      fontWeight: 600,
      lineHeight: 1.04,
      by: {
        level: {
          1: { fontSize: 68, mobile: { fontSize: 43 } },
          2: { fontSize: 52, mobile: { fontSize: 36 } },
          3: { fontSize: 30, mobile: { fontSize: 25 } },
        },
      },
    },
    Button: {
      borderRadius: 14,
      backgroundColor: "#E9D65B",
      color: "#252A30",
      fontWeight: 700,
      padding: [14, 21],
      hover: { backgroundColor: "#F0E18A" },
    },
  },
  styles: {
    eyebrow: {
      color: "#A56A32",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 1.8,
      textTransform: "uppercase",
    },
    lead: {
      color: "#41484C",
      fontSize: 19,
      lineHeight: 1.5,
    },
    card: {
      backgroundColor: "#FFFDF5",
      border: { width: 1, style: "solid", color: "#E2DECF" },
      borderRadius: 22,
      padding: 26,
      gap: 16,
    },
    smallLabel: {
      color: "#656A68",
      fontSize: 13,
      lineHeight: 1.45,
    },
  },
});

const GAME_ISLAND = String.raw`
<style>
@import url('https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&f[]=dm-sans@400,500,600,700&display=swap');
.rg-game,.rg-garden,.rg-plan{font-family:'DM Sans','Trebuchet MS',sans-serif;color:#252a30}
.rg-game *,.rg-garden *,.rg-plan *{box-sizing:border-box}
.rg-game{position:relative;padding:25px 27px 20px;border-radius:22px;background:#fffdf5;border:1px solid rgba(37,42,48,.09);box-shadow:0 1px 2px rgba(37,42,48,.08),0 14px 28px -14px rgba(37,42,48,.25);transform:rotate(.35deg)}
.rg-game:before{content:'';position:absolute;z-index:-1;inset:-13px -16px -21px -11px;background:#dce9c5;rotate:-2deg;clip-path:polygon(1% 2%,98% 0,100% 96%,95% 100%,2% 98%,0 8%)}
.rg-game-top{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.rg-tag{display:inline-flex;align-items:center;min-height:31px;padding:0 11px;border-radius:10px;background:#efeddf;font-size:11px;font-weight:700;letter-spacing:.04em;white-space:nowrap}
.rg-timer{display:flex;align-items:center;gap:9px;flex:1;min-width:125px}
.rg-track{height:12px;flex:1;overflow:hidden;border-radius:99px;background:#e5e1d1;box-shadow:inset 0 1px 2px #252a3020}
.rg-fill{height:100%;width:100%;border-radius:inherit;background:#d6b477;transition:width .8s linear}
.rg-time{font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap}
.rg-sticker{position:absolute;right:-17px;top:-26px;width:96px;height:96px;display:grid;place-content:center;text-align:center;rotate:8deg;background:#e9795f;color:#fff;clip-path:polygon(50% 0,61% 8%,76% 3%,83% 17%,98% 24%,92% 40%,100% 52%,89% 64%,94% 80%,77% 84%,68% 99%,51% 91%,36% 100%,27% 86%,9% 84%,13% 67%,0 54%,10% 40%,4% 24%,22% 18%,30% 3%)}
.rg-sticker b{font:700 22px/1 'Chillax','Trebuchet MS',sans-serif}.rg-sticker span{font-size:9px;font-weight:700;line-height:1.2;margin-top:4px}
.rg-strip{margin:19px -10px 12px;padding:21px 16px 24px;background:#f0e3b9;rotate:-.8deg;clip-path:polygon(0 3%,7% 0,15% 2%,25% 0,38% 3%,50% 0,65% 2%,78% 0,90% 3%,100% 1%,99% 95%,91% 100%,78% 97%,64% 100%,51% 97%,36% 100%,22% 97%,9% 100%,0 96%)}
.rg-words{display:flex;flex-wrap:wrap;gap:12px 10px;rotate:.8deg}
.rg-tile{--tile:#e9d65b;--edge:#bba82f;position:relative;min-height:53px;padding:2px 13px 5px;border:0;border-radius:12px;background:#fffdf5;color:#252a30;font:600 clamp(24px,3vw,39px)/1 'Chillax','Trebuchet MS',sans-serif;letter-spacing:-.04em;box-shadow:inset 0 0 0 1px #252a3020,0 5px 0 var(--edge),2px 8px 8px #252a301f;cursor:pointer;transition:transform .16s ease,box-shadow .16s ease;overflow:hidden}
.rg-tile:before{content:'';position:absolute;inset:0;background:var(--tile);transform:scaleX(0);transform-origin:left;transition:transform .3s ease}
.rg-tile span{position:relative;z-index:1}.rg-tile:hover{transform:translateY(-2px)}
.rg-tile[data-tone=coral]{--tile:#e9795f;--edge:#b94f3b}.rg-tile[data-tone=mint]{--tile:#a9d6b4;--edge:#548c68}.rg-tile[data-tone=blue]{--tile:#456db2;--edge:#294c88}
.rg-tile[aria-pressed=true]:before{transform:scaleX(1)}.rg-tile[aria-pressed=true]{transform:translateY(3px);box-shadow:inset 0 0 0 1px #252a3020,0 1px 0 var(--edge)}.rg-tile[data-tone=blue][aria-pressed=true]{color:#fff}
.rg-tile.is-next{outline:2px solid #252a30;outline-offset:4px}.rg-tile.is-wrong{animation:rg-shake .3s ease}
@keyframes rg-shake{25%{translate:-4px 0}50%{translate:4px 0}75%{translate:-2px 0}}
.rg-game-bottom{display:flex;align-items:center;gap:9px;flex-wrap:wrap;min-height:42px}.rg-say{font-size:13px;color:#41484c;margin-right:auto}.rg-small-btn{border:0;border-radius:10px;padding:10px 12px;background:#efeddf;color:#252a30;font-size:12px;font-weight:700;cursor:pointer}.rg-small-btn:hover{background:#e5e1d1}.rg-small-btn:focus-visible,.rg-tile:focus-visible,.rg-stage:focus-visible,.rg-minutes:focus-visible{outline:2px solid #456db2;outline-offset:3px}
.rg-garden{padding:20px;border-radius:20px;background:#fffdf5;border:1px solid #d8d4c5}.rg-garden-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.rg-garden-title{font:600 21px/1.2 'Chillax','Trebuchet MS',sans-serif}.rg-count{font-size:12px;color:#656a68;font-weight:700}.rg-stages,.rg-minutes-row{display:flex;flex-wrap:wrap;gap:7px}.rg-stage,.rg-minutes{border:1px solid #d8d4c5;border-radius:10px;padding:9px 13px;background:#f7f5e9;color:#41484c;font-size:12px;font-weight:700;cursor:pointer}.rg-stage[aria-pressed=true],.rg-minutes[aria-pressed=true]{background:#e9d65b;border-color:#bba82f;color:#252a30}.rg-beds{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin-top:15px}.rg-bed{min-height:90px;padding:12px 10px;border-radius:12px;background:#efeddf;display:flex;flex-direction:column;gap:4px}.rg-bed b{font-size:12px}.rg-bed small{font-size:10px;color:#656a68}.rg-plant{margin-top:auto;color:#548c68;font:600 24px/1 'Chillax',sans-serif}
.rg-plan{padding:19px;border-radius:18px;background:#fffdf5;border:1px solid #d8d4c5}.rg-plan-result{margin-top:12px;font-size:13px;color:#41484c}.rg-plan-result mark{background:#f0e3b9;padding:2px 5px;border-radius:4px}
@media(max-width:560px){.rg-game{padding:20px 17px 16px}.rg-sticker{width:76px;height:76px;right:-8px;top:-22px}.rg-sticker b{font-size:18px}.rg-tag{max-width:100%;font-size:10px}.rg-tile{min-height:47px;padding-inline:10px}.rg-beds{grid-template-columns:repeat(2,minmax(0,1fr))}.rg-game-bottom{align-items:flex-start}.rg-say{width:100%;min-height:20px}}
@media(prefers-reduced-motion:reduce){.rg-game *,.rg-garden *,.rg-plan *{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
</style>

<article class="rg-game" aria-label="Interactive reading round">
  <div class="rg-sticker" aria-hidden="true"><div><b>5 min</b><span>one small round<br>each day</span></div></div>
  <div class="rg-game-top">
    <span class="rg-tag">TODAY'S LITTLE ROUND</span>
    <div class="rg-timer" aria-label="Reading timer">
      <div class="rg-track"><div class="rg-fill" data-rg-fill></div></div>
      <span class="rg-time" data-rg-time>5:00</span>
    </div>
  </div>
  <div class="rg-strip"><div class="rg-words" aria-label="Read each word in order">
    <button class="rg-tile is-next" data-rg-word data-tone="pear" aria-pressed="false"><span>The</span></button>
    <button class="rg-tile" data-rg-word data-tone="coral" aria-pressed="false"><span>little</span></button>
    <button class="rg-tile" data-rg-word data-tone="mint" aria-pressed="false"><span>seed</span></button>
    <button class="rg-tile" data-rg-word data-tone="blue" aria-pressed="false"><span>grew</span></button>
    <button class="rg-tile" data-rg-word data-tone="pear" aria-pressed="false"><span>into</span></button>
    <button class="rg-tile" data-rg-word data-tone="coral" aria-pressed="false"><span>a</span></button>
    <button class="rg-tile" data-rg-word data-tone="mint" aria-pressed="false"><span>flower.</span></button>
  </div></div>
  <div class="rg-game-bottom">
    <p class="rg-say" data-rg-say aria-live="polite">Tap the first word when you're ready.</p>
    <button class="rg-small-btn" data-rg-hear type="button" hidden>Listen</button>
    <button class="rg-small-btn" data-rg-again type="button" hidden>Read again</button>
  </div>
</article>

<script>
(function(){
  var root=document.currentScript&&document.currentScript.previousElementSibling;
  // Html blocks may be mounted more than once in a preview; scope each island.
  var scripts=document.querySelectorAll('.rg-game');
  var card=scripts[scripts.length-1];
  if(!card||card.dataset.rgReady)return;
  card.dataset.rgReady='1';
  var tiles=Array.prototype.slice.call(card.querySelectorAll('[data-rg-word]'));
  var say=card.querySelector('[data-rg-say]'),time=card.querySelector('[data-rg-time]'),fill=card.querySelector('[data-rg-fill]');
  var again=card.querySelector('[data-rg-again]'),hear=card.querySelector('[data-rg-hear]');
  var total=300,left=300,next=0,interval=null;
  function fmt(s){return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
  function paint(){time.textContent=fmt(left);fill.style.width=(left/total*100)+'%'}
  function stop(){if(interval){clearInterval(interval);interval=null}}
  function tick(){if(left<=0){stop();say.textContent='That is time. Lovely reading today.';return}left--;paint();if(left===0){stop();say.textContent='That is time. Lovely reading today.'}}
  function start(){if(!interval&&left>0)interval=setInterval(tick,1000)}
  function reset(){stop();next=0;left=total;paint();tiles.forEach(function(t,i){t.setAttribute('aria-pressed','false');t.classList.toggle('is-next',i===0)});say.textContent='Tap the first word when you are ready.';again.hidden=true}
  card.addEventListener('rg:duration',function(event){total=Number(event.detail)||300;left=total;reset();say.textContent='Your '+Math.round(total/60)+' minute round is ready.'});
  tiles.forEach(function(tile,index){tile.addEventListener('click',function(){if(index<next)return;if(index>next){tile.classList.remove('is-wrong');void tile.offsetWidth;tile.classList.add('is-wrong');say.textContent='First, “'+tiles[next].textContent.trim()+'”.';return}tile.setAttribute('aria-pressed','true');tile.classList.remove('is-next');next++;if(tiles[next]){tiles[next].classList.add('is-next');say.textContent=next+' of '+tiles.length+' words read. Keep going.'}else{say.textContent='All the words read. Look what you grew!';again.hidden=false;stop()}start()});tile.addEventListener('animationend',function(){tile.classList.remove('is-wrong')})});
  again.addEventListener('click',reset);
  if('speechSynthesis'in window&&'SpeechSynthesisUtterance'in window){hear.hidden=false;hear.addEventListener('click',function(){window.speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(tiles.map(function(t){return t.textContent.trim()}).join(' '));u.lang='en-GB';u.rate=.82;window.speechSynthesis.speak(u)})}
  reset();
  document.addEventListener('visibilitychange',function(){if(document.hidden)stop();else if(next>0&&next<tiles.length&&left>0)start()});
})();
(function(){
  var root=document.querySelector('.rg-garden');if(!root||root.dataset.rgReady)return;root.dataset.rgReady='1';
  var stages={today:{title:"Today's garden",count:'7 little plants',days:[['Today','7 words'],['Seed','just planted'],['Sprout','coming soon'],['Rest','a quiet day'],['Bloom','one flower'],['Grow','getting taller'],['Next','room to grow']]},week:{title:'One week of reading',count:'35 little plants',days:[['Monday','7 words'],['Tuesday','5 words'],['Wednesday','6 words'],['Thursday','4 words'],['Friday','7 words'],['Saturday','5 words'],['Sunday','6 words']]},fortnight:{title:'Two weeks of reading',count:'78 little plants',days:[['Week 1','35 words'],['Week 2','43 words'],['Day 8','6 words'],['Day 9','8 words'],['Day 10','5 words'],['Day 11','7 words'],['Day 12','9 words']]}};
  var title=root.querySelector('[data-rg-garden-title]'),count=root.querySelector('[data-rg-garden-count]'),beds=root.querySelector('[data-rg-beds]');
  root.querySelectorAll('[data-rg-stage]').forEach(function(btn){btn.addEventListener('click',function(){var s=stages[btn.dataset.rgStage];root.querySelectorAll('[data-rg-stage]').forEach(function(b){b.setAttribute('aria-pressed',String(b===btn))});title.textContent=s.title;count.textContent=s.count;beds.innerHTML=s.days.map(function(d,i){return '<div class="rg-bed"><b>'+d[0]+'</b><small>'+d[1]+'</small><span class="rg-plant">'+(i%2?'✿':'ll')+'</span></div>'}).join('')})});
})();
(function(){
  var root=document.querySelector('.rg-plan');if(!root||root.dataset.rgReady)return;root.dataset.rgReady='1';
  var result=root.querySelector('[data-rg-plan-result]');
  root.querySelectorAll('[data-rg-minutes]').forEach(function(btn){btn.addEventListener('click',function(){root.querySelectorAll('[data-rg-minutes]').forEach(function(b){b.setAttribute('aria-pressed',String(b===btn))});var mins=btn.dataset.rgMinutes;result.innerHTML='Just <mark>'+mins+' minutes</mark> can grow something lovely.';var game=document.querySelector('.rg-game');if(game){var time=game.querySelector('[data-rg-time]'),fill=game.querySelector('[data-rg-fill]'),tiles=game.querySelectorAll('[data-rg-word]'),say=game.querySelector('[data-rg-say]'),again=game.querySelector('[data-rg-again]');var seconds=Number(mins)*60;game.dispatchEvent(new CustomEvent('rg:duration',{detail:seconds}))}})})
})();
</script>
`;

// Split the island into its stylesheet, interactive markup and behavior.
// This keeps the visible page content in the native Hyper Elements tree.
const GAME_STYLES = GAME_ISLAND.slice(0, GAME_ISLAND.indexOf('<article class="rg-game"'));
const GAME_MARKUP = GAME_ISLAND.slice(
  GAME_ISLAND.indexOf('<article class="rg-game"'),
  GAME_ISLAND.indexOf('<div class="rg-garden"'),
);
const GARDEN_MARKUP = GAME_ISLAND.slice(
  GAME_ISLAND.indexOf('<div class="rg-garden"'),
  GAME_ISLAND.indexOf('<div class="rg-plan"'),
);
const PLAN_MARKUP = GAME_ISLAND.slice(
  GAME_ISLAND.indexOf('<div class="rg-plan"'),
  GAME_ISLAND.indexOf('<script>'),
);
const GAME_SCRIPT = GAME_ISLAND.slice(GAME_ISLAND.indexOf('<script>'));

const Eyebrow = ({ children }: { children: string }) => (
  <Text style={{ apply: ["eyebrow"] }}>{children}</Text>
);

export default function ReadingGardenPage() {
  return (
    <Page
      theme={gardenTheme}
      width={1440}
      lang="en"
      title="Paper Garden — Every word helps something grow"
      description="A gentle reading ritual that turns every word into a little plant."
      style={{ backgroundColor: token("colors.background"), gap: 0 }}
    >
      {/* Font loading and browser-only reading interactions. */}
      <Html html={GAME_STYLES} />
      <Html html={'<span id="top"></span>'} />

      {/* Navigation */}
      <Section style={{ backgroundColor: "#FFFDF5", padding: [18, 42], border: { bottom: { width: 1, style: "solid", color: "#E4E0D3" } } }}>
        <Row style={{ alignItems: "center", justifyContent: "space-between", gap: 18 }}>
          <Text style={{ fontFamily: '"Chillax", sans-serif', fontSize: 27, fontWeight: 700, letterSpacing: -1.4 }}>
            paper<Span style={{ color: "#548C68" }}>garden</Span><Span style={{ color: "#E9795F" }}>.</Span>
          </Text>
          <Row stackOnMobile style={{ alignItems: "center", justifyContent: "end", gap: 22 }}>
            <Link href="#how" style={{ color: "#41484C", fontSize: 13, textDecoration: "none" }}>How it works</Link>
            <Link href="#garden" style={{ color: "#41484C", fontSize: 13, textDecoration: "none" }}>The garden</Link>
            <Link href="#grown" style={{ color: "#41484C", fontSize: 13, textDecoration: "none" }}>For grown-ups</Link>
            <Button href="#start">Start a reading round</Button>
          </Row>
        </Row>
      </Section>

      {/* Hero */}
      <Section style={{ padding: [76, 42, 54], gap: 30 }}>
        <Row stackOnMobile style={{ alignItems: "center", gap: 58 }}>
          <Column style={{ flex: 0.95, gap: 22 }}>
            <Eyebrow>A little reading ritual, a little paper magic</Eyebrow>
            <Heading level={1} style={{ fontSize: 68, mobile: { fontSize: 44 }, maxWidth: 560, letterSpacing: -3.2 }}>
              Every word helps something <Span style={{ color: "#548C68" }}>grow.</Span>
            </Heading>
            <Text style={{ apply: ["lead"], maxWidth: 510 }}>
              Five gentle minutes of reading. One word at a time. Watch a tiny paper garden grow as your child reads.
            </Text>
            <Row stackOnMobile style={{ gap: 12, alignItems: "center" }}>
              <Button href="#start">Grow your first garden</Button>
              <Button href="#how" style={{ backgroundColor: "#FFFDF5", color: "#252A30", border: { width: 1, style: "solid", color: "#D8D4C5" } }}>See how it works</Button>
            </Row>
            <Text style={{ color: "#656A68", fontSize: 12 }}>Made for small readers and the people who read beside them.</Text>
          </Column>
          <Column style={{ flex: 1.05, gap: 8 }}>
            <Html html={GAME_MARKUP} />
          </Column>
        </Row>
        <Svg width={1320} height={170} viewBox="0 0 1320 170" title="Layered paper garden landscape">
          <Ellipse cx={660} cy={170} rx={730} ry={115} style={{ fill: "#DCE8B9" }} />
          <Ellipse cx={650} cy={178} rx={690} ry={95} style={{ fill: "#A9D6B4" }} />
          <Ellipse cx={680} cy={195} rx={610} ry={78} style={{ fill: "#6F9B72" }} />
        </Svg>
      </Section>

      {/* How it works */}
      <Section style={{ padding: [88, 42], gap: 42 }}>
        <Html html={'<span id="how"></span>'} />
        <Row stackOnMobile style={{ alignItems: "end", gap: 54 }}>
          <Column style={{ flex: 1.4, gap: 14 }}>
            <Eyebrow>The reading round</Eyebrow>
            <Heading level={2}>Small steps make a lovely difference.</Heading>
          </Column>
          <Column style={{ flex: 1, gap: 8 }}>
            <Text style={{ apply: ["lead"], fontSize: 17 }}>A short sentence. A few words. A little time together. Every word read becomes a new plant in the garden.</Text>
          </Column>
        </Row>
        <Row stackOnMobile style={{ gap: 18 }}>
          <Column style={{ flex: 1, backgroundColor: "#FFFDF5", border: { width: 1, style: "solid", color: "#E2DECF" }, borderRadius: 20, padding: 22, gap: 13 }}>
            <Text style={{ color: "#A56A32", fontSize: 11, fontWeight: 700, letterSpacing: 1.4 }}>01 / READ</Text>
            <Heading level={3}>The little seed grew.</Heading>
            <Text style={{ color: "#656A68", fontSize: 13 }}>One word at a time. Find the next word and tap it when you're ready.</Text>
            <Text style={{ color: "#548C68", fontSize: 28 }}>✳   ⌁   ✳</Text>
          </Column>
          <Column style={{ flex: 1, backgroundColor: "#F0E3B9", borderRadius: 20, padding: 22, gap: 13 }}>
            <Text style={{ color: "#A56A32", fontSize: 11, fontWeight: 700, letterSpacing: 1.4 }}>02 / GROW</Text>
            <Heading level={3}>A new leaf appears.</Heading>
            <Text style={{ color: "#41484C", fontSize: 13 }}>Each word becomes a little sign of progress. No points, no pressure.</Text>
            <Text style={{ color: "#548C68", fontSize: 28 }}>♧　✿　♧</Text>
          </Column>
          <Column style={{ flex: 1, backgroundColor: "#DCE9C5", borderRadius: 20, padding: 22, gap: 13 }}>
            <Text style={{ color: "#A56A32", fontSize: 11, fontWeight: 700, letterSpacing: 1.4 }}>03 / PAUSE</Text>
            <Heading level={3}>That's enough.</Heading>
            <Text style={{ color: "#41484C", fontSize: 13 }}>Five gentle minutes. Celebrate the effort, not the speed.</Text>
            <Text style={{ color: "#548C68", fontSize: 28 }}>☼　✿　⌁</Text>
          </Column>
        </Row>
      </Section>

      {/* Garden progress */}
      <Section style={{ backgroundColor: "#EFEDDF", padding: [82, 42], gap: 26 }}>
        <Html html={'<span id="garden"></span>'} />
        <Row stackOnMobile style={{ alignItems: "center", gap: 38 }}>
          <Column style={{ flex: 0.9, gap: 15 }}>
            <Eyebrow>A garden that remembers</Eyebrow>
            <Heading level={2}>Look how much has grown.</Heading>
            <Text style={{ apply: ["lead"], fontSize: 17 }}>Choose a day to see the garden change. The little plants stay, making every reading round part of a bigger story.</Text>
            <Text style={{ color: "#548C68", fontSize: 28 }}>⌁　✿　⌁　✿</Text>
          </Column>
          <Column style={{ flex: 1.1, gap: 0 }}>
            <Html html={GARDEN_MARKUP} />
          </Column>
        </Row>
      </Section>

      {/* For grown-ups */}
      <Section style={{ padding: [88, 42], gap: 20 }}>
        <Html html={'<span id="grown"></span>'} />
        <Row stackOnMobile style={{ alignItems: "center", gap: 48 }}>
          <Column style={{ flex: 1, gap: 10 }}>
            <Eyebrow>For the people beside them</Eyebrow>
            <Heading level={2}>A calmer way to build a reading habit.</Heading>
          </Column>
          <Column style={{ flex: 1, gap: 16 }}>
            <Column style={{ gap: 5 }}>
              <Heading level={3} style={{ color: "#548C68" }}>5 minutes</Heading>
              <Text style={{ color: "#656A68", fontSize: 14 }}>A small, manageable daily ritual.</Text>
            </Column>
            <Divider style={{ borderTop: { width: 1, style: "solid", color: "#D8D4C5" } }} />
            <Column style={{ gap: 5 }}>
              <Heading level={3} style={{ color: "#548C68" }}>One word at a time</Heading>
              <Text style={{ color: "#656A68", fontSize: 14 }}>A clear next step without pressure.</Text>
            </Column>
            <Divider style={{ borderTop: { width: 1, style: "solid", color: "#D8D4C5" } }} />
            <Column style={{ gap: 5 }}>
              <Heading level={3} style={{ color: "#548C68" }}>Progress you can see</Heading>
              <Text style={{ color: "#656A68", fontSize: 14 }}>A garden that celebrates showing up.</Text>
            </Column>
          </Column>
        </Row>
      </Section>

      {/* CTA */}
      <Section style={{ backgroundColor: "#252A30", padding: [72, 42], gap: 22 }}>
        <Html html={'<span id="start"></span>'} />
        <Row stackOnMobile style={{ alignItems: "center", gap: 38 }}>
          <Column style={{ flex: 1, gap: 14 }}>
            <Text style={{ color: "#E9D65B", fontSize: 12, fontWeight: 700, letterSpacing: 1.6 }}>BEGIN WITH ONE LITTLE WORD</Text>
            <Heading level={2} style={{ color: "#FFFDF5" }}>Plant the first seed today.</Heading>
            <Text style={{ color: "#E4E0D3", fontSize: 16, lineHeight: 1.55 }}>Pick a gentle starting point. There's no score to chase and no race to finish. Just a few words, a little time, and a garden that grows.</Text>
            <Button href="#top">Start today's reading round</Button>
          </Column>
          <Column style={{ flex: 0.8, gap: 12 }}>
            <Heading level={3} style={{ color: "#FFFDF5" }}>Choose your little round</Heading>
            <Html html={PLAN_MARKUP} />
          </Column>
        </Row>
      </Section>

      {/* Bind the interactive islands after their markup has been rendered. */}
      <Html html={GAME_SCRIPT} />

      {/* Footer */}
      <Section style={{ backgroundColor: "#FFFDF5", padding: [25, 42], gap: 13 }}>
        <Row stackOnMobile style={{ alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <Text style={{ fontFamily: '"Chillax", sans-serif', fontSize: 25, fontWeight: 700 }}>paper<Span style={{ color: "#548C68" }}>garden</Span><Span style={{ color: "#E9795F" }}>.</Span></Text>
          <Row stackOnMobile style={{ gap: 18 }}>
            <Link href="#how" style={{ color: "#41484C", fontSize: 12 }}>How it works</Link>
            <Link href="#garden" style={{ color: "#41484C", fontSize: 12 }}>The garden</Link>
            <Link href="#grown" style={{ color: "#41484C", fontSize: 12 }}>For grown-ups</Link>
            <Link href="#start" style={{ color: "#41484C", fontSize: 12 }}>Begin</Link>
          </Row>
        </Row>
        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#E4E0D3" } }} />
        <Text style={{ color: "#656A68", fontSize: 11 }}>A small reading ritual, made with care. Sample experience and illustrative progress data.</Text>
      </Section>
    </Page>
  );
}