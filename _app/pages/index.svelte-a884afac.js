var at=Object.defineProperty,lt=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var Ve=(s,e,t)=>e in s?at(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,we=(s,e)=>{for(var t in e||(e={}))ct.call(e,t)&&Ve(s,t,e[t]);if(Se)for(var t of Se(e))ut.call(e,t)&&Ve(s,t,e[t]);return s},Ne=(s,e)=>lt(s,ot(e));import{S as G,i as j,s as W,e as v,c as w,a as k,d as u,b as m,f as x,I as A,t as H,k as D,g as L,n as S,H as g,J as Re,K as B,L as ye,h as be,M as ht,l as U,N as ft,x as z,u as V,A as ke,O as te,P as ue,Q as He,R as he,T as Ee,U as xe,V as dt,W as fe,X as Ae,j as K,m as X,Y as Z,o as J,Z as Le,v as Q,C as ze,_ as _t,$ as pt,a0 as mt,a1 as gt,a2 as vt,a3 as wt,a4 as yt,a5 as bt,a6 as kt,a7 as de,a8 as _e,a9 as Et,w as pe,aa as xt,ab as Be,ac as At,ad as zt,ae as $e,af as $t,ag as Tt,ah as Mt,r as me,ai as It,aj as Dt}from"../chunks/vendor-dd92b9bc.js";function St(s){let e,t,n,i,r,a,o,l,c,d,_;return{c(){e=v("p"),t=H("Ganzen Namen eingeben:"),n=D(),i=v("input"),r=D(),a=v("br"),o=D(),l=v("button"),c=H("fertig"),this.h()},l(f){e=w(f,"P",{});var p=k(e);t=L(p,"Ganzen Namen eingeben:"),p.forEach(u),n=S(f),i=w(f,"INPUT",{placeholder:!0,type:!0}),r=S(f),a=w(f,"BR",{}),o=S(f),l=w(f,"BUTTON",{});var E=k(l);c=L(E,"fertig"),E.forEach(u),this.h()},h(){m(i,"placeholder","Namen..."),m(i,"type","text")},m(f,p){x(f,e,p),g(e,t),x(f,n,p),x(f,i,p),Re(i,s[1]),x(f,r,p),x(f,a,p),x(f,o,p),x(f,l,p),g(l,c),d||(_=[B(i,"input",s[6]),B(i,"keydown",s[3]),B(l,"click",s[7])],d=!0)},p(f,p){p&2&&i.value!==f[1]&&Re(i,f[1])},d(f){f&&u(e),f&&u(n),f&&u(i),f&&u(r),f&&u(a),f&&u(o),f&&u(l),d=!1,ye(_)}}}function Vt(s){let e,t,n,i,r,a,o,l,c,d,_,f,p,E,h,y;return{c(){e=v("p"),t=H("Alles klar, "),n=v("b"),i=H(s[1]),r=H(", ist dass der richtige Name?"),a=D(),o=v("br"),l=D(),c=v("div"),d=v("button"),_=H("Ja"),f=D(),p=v("button"),E=H("Nein")},l(b){e=w(b,"P",{});var T=k(e);t=L(T,"Alles klar, "),n=w(T,"B",{});var q=k(n);i=L(q,s[1]),q.forEach(u),r=L(T,", ist dass der richtige Name?"),T.forEach(u),a=S(b),o=w(b,"BR",{}),l=S(b),c=w(b,"DIV",{});var R=k(c);d=w(R,"BUTTON",{});var P=k(d);_=L(P,"Ja"),P.forEach(u),f=S(R),p=w(R,"BUTTON",{});var F=k(p);E=L(F,"Nein"),F.forEach(u),R.forEach(u)},m(b,T){x(b,e,T),g(e,t),g(e,n),g(n,i),g(e,r),x(b,a,T),x(b,o,T),x(b,l,T),x(b,c,T),g(c,d),g(d,_),g(c,f),g(c,p),g(p,E),h||(y=[B(d,"click",s[4]),B(p,"click",s[5])],h=!0)},p(b,T){T&2&&be(i,b[1])},d(b){b&&u(e),b&&u(a),b&&u(o),b&&u(l),b&&u(c),h=!1,ye(y)}}}function Nt(s){let e;function t(r,a){return r[2]?Vt:St}let n=t(s),i=n(s);return{c(){e=v("div"),i.c(),this.h()},l(r){e=w(r,"DIV",{class:!0});var a=k(e);i.l(a),a.forEach(u),this.h()},h(){m(e,"class","wrapper svelte-1terpu9")},m(r,a){x(r,e,a),i.m(e,null)},p(r,[a]){n===(n=t(r))&&i?i.p(r,a):(i.d(1),i=n(r),i&&(i.c(),i.m(e,null)))},i:A,o:A,d(r){r&&u(e),i.d()}}}function Rt(s,e,t){let{callback:n}=e,i,r=!1;function a({key:_}){_==="Enter"&&t(2,r=!0)}const o=()=>n(i),l=()=>{t(2,r=!1)};function c(){i=this.value,t(1,i)}const d=()=>{t(2,r=!0)};return s.$$set=_=>{"callback"in _&&t(0,n=_.callback)},[n,i,r,a,o,l,c,d]}class Ht extends G{constructor(e){super();j(this,e,Rt,Nt,W,{callback:0})}}const{VITE_API_URL:Te=""}={VITE_API_URL:"https://si21.herokuapp.com",VITE_SVELTEKIT_AMP:"",BASE_URL:"/sorting-hat/_app/",MODE:"production",DEV:!1,PROD:!0};async function Ce(s,e,t){const n={method:e};t&&(n.body=JSON.stringify(t),n.headers={"Content-Type":"application/json"});let i=Te+s;return Te&&Te.length&&(i="https://thingproxy.freeboard.io/fetch/"+i),fetch(i,n)}function Oe(s){return Ce(s,"GET")}Oe("api/houses");function Lt(s,e){return Ce(s,"POST",e)}function Bt(s){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function Ct(s){let e,t=s[6]+"",n,i,r,a,o,l,c,d,_,f,p;function E(){return s[3](s[6])}return{c(){e=v("h1"),n=H(t),i=D(),r=v("img"),l=D(),c=v("button"),d=H("Okay"),this.h()},l(h){e=w(h,"H1",{class:!0});var y=k(e);n=L(y,t),y.forEach(u),i=S(h),r=w(h,"IMG",{src:!0,alt:!0,class:!0}),l=S(h),c=w(h,"BUTTON",{});var b=k(c);d=L(b,"Okay"),b.forEach(u),this.h()},h(){m(e,"class","svelte-16th1rs"),te(r.src,a="icons/"+s[6]+".svg")||m(r,"src",a),m(r,"alt","crest of house "+s[1]),m(r,"class","svelte-16th1rs")},m(h,y){x(h,e,y),g(e,n),x(h,i,y),x(h,r,y),x(h,l,y),x(h,c,y),g(c,d),_=!0,f||(p=B(c,"click",E),f=!0)},p(h,y){s=h},i(h){_||(ue(()=>{o||(o=He(r,he,{},!0)),o.run(1)}),_=!0)},o(h){o||(o=He(r,he,{},!1)),o.run(0),_=!1},d(h){h&&u(e),h&&u(i),h&&u(r),h&&o&&o.end(),h&&u(l),h&&u(c),f=!1,p()}}}function Ot(s){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function Ft(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:Ot,then:Ct,catch:Bt,value:6,blocks:[,,,]};return ht(s[1],n),{c(){e=U(),n.block.c()},l(i){e=U(),n.block.l(i)},m(i,r){x(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[r]){s=i,ft(n,s,r)},i(i){t||(z(n.block),t=!0)},o(i){for(let r=0;r<3;r+=1){const a=n.blocks[r];V(a)}t=!1},d(i){i&&u(e),n.block.d(i),n.token=null,n=null}}}function qt(s,e,t){const n=!1,i=["ravenclaw","gryffindor","slytherin","hufflepuff"];async function r(){const c=await(await Oe("api/houses")).text();return c.length>20?i[Math.floor(Math.random()*i.length)]:c}let a=r(),{callback:o}=e;ke(async()=>{const c=await a,d=new Audio("audio/"+c+".mp3");d.play();const _=new Audio("audio/cheers.mp3"),f=setInterval(()=>{d.currentTime/d.duration>.2&&_.paused&&(_.play(),clearInterval(f))},50);d.addEventListener("progress",()=>{})});const l=c=>o(c);return s.$$set=c=>{"callback"in c&&t(0,o=c.callback)},[o,a,n,l]}class Pt extends G{constructor(e){super();j(this,e,qt,Ft,W,{showText:2,callback:0})}get showText(){return this.$$.ctx[2]}}function Fe(s,e,t){const n=s.slice();return n[4]=e[t],n[6]=t,n}function qe(s){let e,t,n,i,r,a;function o(){return s[3](s[4])}return{c(){e=v("img"),this.h()},l(l){e=w(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){te(e.src,t="icons/"+s[4]+".svg")||m(e,"src",t),m(e,"alt",n="crest of house "+s[4]),m(e,"class","svelte-c29sve")},m(l,c){x(l,e,c),r||(a=B(e,"click",o),r=!0)},p(l,c){s=l},i(l){i||ue(()=>{i=Ee(e,he,{delay:s[6]*200,duration:1200}),i.start()})},o:A,d(l){l&&u(e),r=!1,a()}}}function Ut(s){let e,t=s[0],n=[];for(let i=0;i<t.length;i+=1)n[i]=qe(Fe(s,t,i));return{c(){e=v("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=w(i,"DIV",{class:!0});var r=k(e);for(let a=0;a<n.length;a+=1)n[a].l(r);r.forEach(u),this.h()},h(){m(e,"class","wrapper svelte-c29sve")},m(i,r){x(i,e,r);for(let a=0;a<n.length;a+=1)n[a].m(e,null)},p(i,[r]){if(r&3){t=i[0];let a;for(a=0;a<t.length;a+=1){const o=Fe(i,t,a);n[a]?(n[a].p(o,r),z(n[a],1)):(n[a]=qe(o),n[a].c(),z(n[a],1),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},i(i){for(let r=0;r<t.length;r+=1)z(n[r])},o:A,d(i){i&&u(e),xe(n,i)}}}function Gt(s,e,t){let{callback:n}=e;const i=["ravenclaw","gryffindor","slytherin","hufflepuff"];function r(o){const l=new Audio("audio/"+o+".mp3");l.play(),l.addEventListener("ended",()=>{setTimeout(()=>{n(o)},200)})}const a=o=>r(o);return s.$$set=o=>{"callback"in o&&t(2,n=o.callback)},[i,r,n,a]}class jt extends G{constructor(e){super();j(this,e,Gt,Ut,W,{callback:2})}}function Wt(s){let e,t,n,i,r,a,o,l,c,d,_;function f(E){s[3](E)}let p={max:10,pips:!0,id:"range-slider",all:"label"};return s[1]!==void 0&&(p.values=s[1]),n=new dt({props:p}),fe.push(()=>Ae(n,"values",f)),{c(){e=v("div"),t=v("div"),i=v("div"),K(n.$$.fragment),a=D(),o=v("button"),l=H("Okay"),this.h()},l(E){e=w(E,"DIV",{class:!0});var h=k(e);t=w(h,"DIV",{class:!0});var y=k(t);i=w(y,"DIV",{style:!0});var b=k(i);X(n.$$.fragment,b),y.forEach(u),a=S(h),o=w(h,"BUTTON",{});var T=k(o);l=L(T,"Okay"),T.forEach(u),h.forEach(u),this.h()},h(){Z(i,"display","contents"),Z(i,"--handle-focus","white"),Z(i,"--range-slider","black"),Z(i,"--range-handle","black"),Z(i,"--range-float-text","white"),m(t,"class","range-wrapper svelte-1ni4obk"),m(e,"class","wrapper svelte-1ni4obk")},m(E,h){x(E,e,h),g(e,t),g(t,i),J(n,i,null),g(e,a),g(e,o),g(o,l),c=!0,d||(_=B(o,"click",s[4]),d=!0)},p(E,[h]){const y={};!r&&h&2&&(r=!0,y.values=E[1],Le(()=>r=!1)),n.$set(y)},i(E){c||(z(n.$$.fragment,E),c=!0)},o(E){V(n.$$.fragment,E),c=!1},d(E){E&&u(e),Q(n),d=!1,_()}}}function Kt(s,e,t){let{callback:n}=e;const i=!0;let r=[5];function a(l){r=l,t(1,r)}const o=()=>n(r[0]);return s.$$set=l=>{"callback"in l&&t(0,n=l.callback)},[n,r,i,a,o]}class Jt extends G{constructor(e){super();j(this,e,Kt,Wt,W,{callback:0,showText:2})}get showText(){return this.$$.ctx[2]}}function Qt(s){let e,t,n,i,r,a;return{c(){e=v("video"),t=v("source"),i=v("source"),a=v("track"),this.h()},l(o){e=w(o,"VIDEO",{width:!0,height:!0,class:!0});var l=k(e);t=w(l,"SOURCE",{src:!0,type:!0}),i=w(l,"SOURCE",{src:!0,type:!0}),a=w(l,"TRACK",{kind:!0}),l.forEach(u),this.h()},h(){te(t.src,n=""+(s[0]+"video/video.webm"))||m(t,"src",n),m(t,"type","video/webm"),te(i.src,r=""+(s[0]+"video/video.mp4"))||m(i,"src",r),m(i,"type","video/mp4"),m(a,"kind","captions"),m(e,"width","500"),m(e,"height","281"),e.controls=!0,e.autoplay=!0,m(e,"class","svelte-k2j555")},m(o,l){x(o,e,l),g(e,t),g(e,i),g(e,a)},p(o,[l]){l&1&&!te(t.src,n=""+(o[0]+"video/video.webm"))&&m(t,"src",n),l&1&&!te(i.src,r=""+(o[0]+"video/video.mp4"))&&m(i,"src",r)},i:A,o:A,d(o){o&&u(e)}}}function Yt(s,e,t){const n=!1;let i="";return ke(()=>{t(0,i=window.location.pathname)}),[i,n]}class Xt extends G{constructor(e){super();j(this,e,Yt,Qt,W,{showText:1})}get showText(){return this.$$.ctx[1]}}const Pe=ze();class C{constructor({audioFile:e,element:t,text:n}){this.duration=5,this.state=ze("suspended"),this.nextActions=[],this.events={},this.text=n,this.element=t,e&&(this.audio=new Audio("audio/"+e))}async start(){if(this.setActive(),await _t(),this.emit("start"),this.audio){this.duration=this.audio.duration,this.state.set("running"),this.audio.play(),C.anim.params.wiggleMouth=1;const e=setInterval(()=>{this.emit("progress",this.audio.currentTime/this.audio.duration)},200);this.audio.addEventListener("ended",()=>{clearInterval(e),setTimeout(()=>{this.speechEnded()},500)},{once:!0})}else this.duration=5,this.text&&(this.duration=Math.max(this.text.split(" ").length*.08,2),console.log(this.duration)),this.state.set("running"),setTimeout(()=>{this.speechEnded()},this.duration*1e3)}speechEnded(){this.emit("speech-ended"),C.anim.params.wiggleMouth=0,this.element?this.state.set("input"):this.finish()}handleElementCallback(e){console.log("Got Data: ",e),this.data=e,this.emit("data",e),this.finish()}finish(){this.state.set("finished"),this.emit("end"),console.log("Finished",this.nextActions),this.nextActions.length===1&&!("name"in this.nextActions[0])&&this.nextActions[0].action.start()}emit(e,t){e in this.events&&this.events[e].forEach(n=>n(t))}addEventListener(e,t){return this.events[e]=e in this.events?[...this.events[e],t]:[t],()=>{this.events[e]=this.events[e].filter(n=>n!==t)}}setActive(){Pe.set(this)}addAction(e,t){typeof e!="string"?this.nextActions.push({action:e}):this.nextActions.push({name:e,action:t})}}var Zt=(s,e)=>{s="local-store-"+s;{let t=e;if(s in localStorage)try{t=JSON.parse(localStorage.getItem(s))}catch(i){console.log(i)}const n=ze(t);return n.subscribe(i=>{localStorage.setItem(s,JSON.stringify(i))}),n}};const re=Zt("user-data",{name:"",confidence:"",house:""});function en(s){C.anim=s;const e=new C({audioFile:"teilnehmen.mp3",text:"So so, du willst also an der Silvesterparty im Dungeon teilnehmen?"});e.addEventListener("start",()=>{s.params.wiggleMouth=1}),e.addEventListener("end",()=>{s.params.wiggleMouth=0,s.params.wiggleEyes=1});const t=new C({audioFile:"namen.mp3",text:"Sehr sch\xF6n, verstanden, jetzt br\xE4uchte ich noch deinen Namen?",element:Ht});t.addEventListener("data",d=>{console.log("Got Name",d),re.update(_=>(_.name=d,_))});const n=new C({audioFile:"unterhaltung.mp3",text:"Das ist nat\xFCrlich auch in Ordnung, damit du aber trotzdem nicht leer ausgehst habe ich hier etwas Unterhaltung f\xFCr dich:",element:Xt}),i=new C({audioFile:"exzellenter_gast.mp3",text:"Naja, okay, wenn das sooo ist? Dann werden wir mal schauen... Verstanden, du siehst wie ein exzellenter Gast aus."}),r=new C({audioFile:"welches_haus.mp3",text:"Weisst du den schon zu welchem der vier H\xE4user du geh\xF6rst?"});r.addEventListener("data",d=>{re.update(_=>(_.house=d,_))});const a=new C({audioFile:"random_haus.mp3",text:"Okay, um dass herauszufinden bin ich ja hier. Dann werde ich mal  schauen, hmm, ich sehe Mut, aber auch Intelligenz, oh, und hier ist auch noch Empathie. Schwierige Entscheidung, aber ich denke:",element:Pt});a.addEventListener("start",()=>{s.params.wiggleMouth=1}),a.addEventListener("progress",d=>{d>.34&&(s.params.wiggleRim=2,s.params.wiggleHat=2,s.params.wiggleEyes=1)}),a.addEventListener("speech-ended",()=>{s.params.wiggleMouth=0,s.params.wiggleHat=.2,s.params.wiggleEyes=0,s.params.wiggleRim=.2}),a.addEventListener("data",d=>{re.update(_=>(_.house=d,_))});const o=new C({text:"W\xE4hle nun dein Haus aus:",element:jt});o.addEventListener("data",d=>{re.update(_=>(_.house=d,_))});const l=new C({audioFile:"sicherheit.mp3",text:"Nun zu letzten Frage, auf einer Skala von 0 bis 10, wie sicher k\xF6nnen wir mit deinem Erscheinen rechnen?",element:Jt});l.addEventListener("data",d=>{re.update(_=>(_.confidence=d/10,Lt("api",_),_))});const c=new C({audioFile:"final.mp3",text:"So, das war auch schon alles, wir freuen uns dich am 31.12 willkommen zu hei\xDFen, und w\xFCnschen dir bis dahin eine sch\xF6ne Weihnachtszeit."});return e.addAction("Auf jeden Fall!",t),e.addAction("Ne, eher nicht",n),t.addAction(i),i.addAction(r),r.addAction("Aber nat\xFCrlich!",o),r.addAction("Nein, dass wei\xDF ich noch nicht...",a),a.addAction(l),o.addAction(l),l.addAction(c),e}function Ue(s,e=[]){return s.type==="Bone"&&!e.includes(s)&&e.push(s),s.children.forEach(t=>{t.type==="Bone"&&!e.includes(t)&&e.push(t),t.children.length&&Ue(t,e)}),e}function O(s,e,t){return s*t+e*(1-t)}function tn(s){const e={};return s.forEach(t=>{const{userData:{name:n}={}}=t;if(n){e[n]=t;const[i,r]=n.toLowerCase().split("_");r&&(e[i]=i in e?Ne(we({},e[i]),{[r]:t}):{[r]:t},e[i+"Array"]=i+"Array"in e?[...e[i+"Array"],t]:[t])}}),e}function nn(s){let e=!1;return{name:s.name,get dirty(){return e},clear:()=>{e=!1},rotation:{_x:0,ox:s.rotation.x,get x(){return this.ox+this._x},set x(t){t!==this._x&&(this._x=t,e=!0)},_y:0,oy:s.rotation.y,get y(){return this.oy+this._y},set y(t){t!==this._y&&(this._y=t,this._dirty=!0)},_z:0,oz:s.rotation.z,get z(){return this.oz+this._z},set z(t){t!==this._z&&(this._z=t,e=!0)}},position:{ox:s.position.x,_x:0,get x(){return this.ox+this._x},set x(t){t!==this._x&&(this._x=t,e=!0)},oy:s.position.y,_y:0,get y(){return this.oy+this._y},set y(t){t!==this._y&&(this._y=t,e=!0)},oz:s.position.z,_z:0,get z(){return this.oz+this._z},set z(t){t!==this._z&&(this._z=t,e=!0)}},scale:{ox:s.scale.x,_x:0,get x(){return this.ox+this._x},set x(t){t!==this._x&&(this._x=t,e=!0)},oy:s.scale.y,_y:0,get y(){return this.oy+this._y},set y(t){t!==this._y&&(this._y=t,e=!0)},oz:s.scale.z,_z:0,get z(){return this.oz+this._z},set z(t){t!==this._z&&(this._z=t,e=!0)}},id:s.uuid}}function Me(s,e={bones:{}},t=0){if(s instanceof pt){if(s.uuid in e)return e[s.uuid];e.bones[s.uuid]=s;const r=nn(s);return e[s.uuid]=r,r}if(Array.isArray(s))return s.map(r=>Me(r,e,t+1));const n={},i=Object.keys(s);return i.length&&i.forEach(r=>{n[r]=Me(s[r],e,t+1)}),t===0?{obj:n,cache:e}:n}function sn(s){const{obj:e,cache:t}=Me(s);return e._bones=t.bones,delete t.bones,e._all=Object.values(t),e}function rn({_all:s,_bones:e}){s.forEach(t=>{if(!t.dirty)return;const n=e[t.id];!n||(n.rotation.x=O(t.rotation.x,n.rotation.x,.9),n.rotation.y=O(t.rotation.y,n.rotation.y,.9),n.rotation.z=O(t.rotation.z,n.rotation.z,.9),n.position.x=O(t.position.x,n.position.x,.9),n.position.y=O(t.position.y,n.position.y,.9),n.position.z=O(t.position.z,n.position.z,.9),n.scale.x=O(t.scale.x,n.scale.x,.9),n.scale.y=O(t.scale.y,n.scale.y,.9),n.scale.z=O(t.scale.z,n.scale.z,.9),t.clear())})}class an{constructor({scene:e,camera:t,renderer:n}){this.boneArray=[],this._bones={circleArray:[],spineArray:[],mouthArray:[]},this.bones={},this.loaded=!1,this.conf={wiggleRim:.05,wiggleHat:.05,wiggleMouth:.05,wiggleEyes:.05},this.confKeys=[],this.controls=new mt(t,n.domElement),e.add(this.controls),this.params=we({},this.conf),this.confKeys=Object.keys(this.conf),window.c=this.controls,this.setActiveBone=this.setActiveBone.bind(this)}setActiveBone(e){const t=this.boneArray.find(n=>n.userData.name===e);this.controls.attach(t)}setSkeleton(e){!e||(this.boneArray=Ue(e),this._bones=tn(this.boneArray),this.bones=sn(this._bones),this.loaded=!!this.boneArray.length,console.log(this),window.anim=this)}update(e){if(!this.loaded)return;const{bones:t,conf:n,confKeys:i,params:r}=this;if(i.forEach(a=>{r[a]!==n[a]&&(n[a]=O(r[a],n[a],.05))}),n.wiggleRim&&t.circleArray.forEach((a,o)=>{a.position.y=Math.sin(e/300+o*2)/100*n.wiggleRim}),n.wiggleHat&&t.spineArray.forEach((a,o)=>{a.rotation.x=Math.sin(e/300+o*2)/100*n.wiggleHat,a.rotation.y=Math.sin(e/300+o*1)/100*n.wiggleHat,a.rotation.z=Math.sin(e/300+o*0)/100*n.wiggleHat}),n.wiggleMouth&&(t.mouth.r1.scale.x=Math.sin(e/100+10)/10*n.wiggleMouth,t.mouth.l2.scale.x=Math.sin(e/100+5)/10*n.wiggleMouth,t.mouth.l1.scale.x=Math.sin(e/100+1)/4*n.wiggleMouth-.2,t.mouth.r2.scale.x=Math.sin(e/100+2)/4*n.wiggleMouth-.2,t.mouth.l1.position.y=Math.sin(e/100)/300*n.wiggleMouth-.01,t.mouth.r1.position.y=Math.sin(e/100)/300*n.wiggleMouth-.01),n.wiggleEyes){const a=e/400;t.eyes.l1.scale.x=Math.sin(a+1)/4*n.wiggleEyes-.2,t.eyes.r2.scale.x=Math.sin(a+2)/4*n.wiggleEyes-.2,t.eyes.l1.position.y=Math.sin(a)/300*n.wiggleEyes+.01,t.eyes.r1.position.y=Math.sin(e/200)/300*n.wiggleEyes+.01}rn(this.bones)}}const Ge=new gt,je=new vt;je.setDecoderPath("draco/");Ge.setDRACOLoader(je);async function ln(){const s=new wt,e=s.load("textures/SortingHat_col.jpg"),t=s.load("textures/env_map.jpg");t.mapping=yt,e.flipY=!1;const n=new bt({map:e,envMapIntensity:1,normalScale:new kt(1,1)}),i=await Ge.loadAsync("sorting_hat.glb",a=>{console.log(a.loaded/a.total*100+"% loaded")}),r=i.scene.children[0].children[1];return r.material=n,i}function on(s){let e,t,n,i;return{c(){e=de("svg"),t=de("path"),n=de("path"),i=de("path"),this.h()},l(r){e=_e(r,"svg",{viewBox:!0,style:!0,fill:!0,xmlns:!0});var a=k(e);t=_e(a,"path",{d:!0,stroke:!0,"stroke-width":!0}),k(t).forEach(u),n=_e(a,"path",{d:!0,stroke:!0,"stroke-width":!0}),k(n).forEach(u),i=_e(a,"path",{d:!0,stroke:!0,"stroke-width":!0}),k(i).forEach(u),a.forEach(u),this.h()},h(){m(t,"d","M68.8424 -13.5778V5.30176H27.4473C27.4473 18.0806 27.4473 24.2029 27.4473 35.5006C21.9253 42.4032 19.5381 59.3721 19.0348 66.9937V5.30176H7.17095V16.7342C32.6243 16.7342 80.1659 16.7342 66.7059 16.7342C53.2458 16.7342 41.684 22.6302 37.5855 25.5781H7.17095V66.9937H-15.0309"),m(t,"stroke","black"),m(t,"stroke-width","1"),m(n,"d","M55.6489 17.8342C55.6489 36.7637 40.3035 52.1091 21.374 52.1091"),m(n,"stroke","black"),m(n,"stroke-width","1"),m(i,"d","M41.8151 23.0153V39.6404H25.19"),m(i,"stroke","black"),m(i,"stroke-width","1"),m(e,"viewBox","0 0 70 68"),Z(e,"transform","rotate("+s[0]+")"),m(e,"fill","none"),m(e,"xmlns","http://www.w3.org/2000/svg")},m(r,a){x(r,e,a),g(e,t),g(e,n),g(e,i)},p(r,[a]){a&1&&Z(e,"transform","rotate("+r[0]+")")},i:A,o:A,d(r){r&&u(e)}}}function cn(s,e,t){let{rotate:n="0deg"}=e;return s.$$set=i=>{"rotate"in i&&t(0,n=i.rotate)},[n]}class ge extends G{constructor(e){super();j(this,e,cn,on,W,{rotate:0})}}function un(s){let e,t,n,i,r,a,o,l,c,d,_,f,p,E,h,y,b,T,q,R,P,F,N;return n=new ge({}),a=new ge({props:{rotate:"90deg"}}),c=new ge({props:{rotate:"180deg"}}),f=new ge({props:{rotate:"-90deg"}}),{c(){e=v("div"),t=v("div"),K(n.$$.fragment),i=D(),r=v("div"),K(a.$$.fragment),o=D(),l=v("div"),K(c.$$.fragment),d=D(),_=v("div"),K(f.$$.fragment),p=D(),E=v("div"),h=D(),y=v("div"),b=D(),T=v("div"),q=D(),R=v("div"),P=D(),F=v("div"),this.h()},l($){e=w($,"DIV",{class:!0});var M=k(e);t=w(M,"DIV",{class:!0});var ae=k(t);X(n.$$.fragment,ae),ae.forEach(u),i=S(M),r=w(M,"DIV",{class:!0});var le=k(r);X(a.$$.fragment,le),le.forEach(u),o=S(M),l=w(M,"DIV",{class:!0});var oe=k(l);X(c.$$.fragment,oe),oe.forEach(u),d=S(M),_=w(M,"DIV",{class:!0});var ce=k(_);X(f.$$.fragment,ce),ce.forEach(u),p=S(M),E=w(M,"DIV",{class:!0}),k(E).forEach(u),h=S(M),y=w(M,"DIV",{class:!0}),k(y).forEach(u),b=S(M),T=w(M,"DIV",{class:!0}),k(T).forEach(u),q=S(M),R=w(M,"DIV",{class:!0}),k(R).forEach(u),P=S(M),F=w(M,"DIV",{class:!0}),k(F).forEach(u),M.forEach(u),this.h()},h(){m(t,"class","pattern-wrapper svelte-1qzm7t1"),m(r,"class","pattern-wrapper p-tr svelte-1qzm7t1"),m(l,"class","pattern-wrapper p-br svelte-1qzm7t1"),m(_,"class","pattern-wrapper p-bl svelte-1qzm7t1"),m(E,"class","bar b-t svelte-1qzm7t1"),m(y,"class","bar b-r svelte-1qzm7t1"),m(T,"class","bar b-l svelte-1qzm7t1"),m(R,"class","bar b-b svelte-1qzm7t1"),m(F,"class","overlay svelte-1qzm7t1"),m(e,"class","wrapper svelte-1qzm7t1")},m($,M){x($,e,M),g(e,t),J(n,t,null),g(e,i),g(e,r),J(a,r,null),g(e,o),g(e,l),J(c,l,null),g(e,d),g(e,_),J(f,_,null),g(e,p),g(e,E),g(e,h),g(e,y),g(e,b),g(e,T),g(e,q),g(e,R),g(e,P),g(e,F),N=!0},p:A,i($){N||(z(n.$$.fragment,$),z(a.$$.fragment,$),z(c.$$.fragment,$),z(f.$$.fragment,$),N=!0)},o($){V(n.$$.fragment,$),V(a.$$.fragment,$),V(c.$$.fragment,$),V(f.$$.fragment,$),N=!1},d($){$&&u(e),Q(n),Q(a),Q(c),Q(f)}}}class hn extends G{constructor(e){super();j(this,e,null,un,W,{})}}function We(s,e,t){const n=s.slice();return n[5]=e[t],n[7]=t,n}function Ke(s){let e,t=s[0],n=[];for(let i=0;i<t.length;i+=1)n[i]=Je(We(s,t,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=U()},l(i){for(let r=0;r<n.length;r+=1)n[r].l(i);e=U()},m(i,r){for(let a=0;a<n.length;a+=1)n[a].m(i,r);x(i,e,r)},p(i,r){if(r&1){t=i[0];let a;for(a=0;a<t.length;a+=1){const o=We(i,t,a);n[a]?(n[a].p(o,r),z(n[a],1)):(n[a]=Je(o),n[a].c(),z(n[a],1),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},i(i){for(let r=0;r<t.length;r+=1)z(n[r])},o:A,d(i){xe(n,i),i&&u(e)}}}function Je(s){let e,t=s[5]+"",n,i;return{c(){e=v("span"),n=H(t)},l(r){e=w(r,"SPAN",{});var a=k(e);n=L(a,t),a.forEach(u)},m(r,a){x(r,e,a),g(e,n)},p(r,a){s=r,a&1&&t!==(t=s[5]+"")&&be(n,t)},i(r){i||ue(()=>{i=Ee(e,Et,{duration:s[2],delay:s[7]*s[2]}),i.start()})},o:A,d(r){r&&u(e)}}}function fn(s){let e,t=s[1]&&Ke(s);return{c(){e=v("div"),t&&t.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=k(e);t&&t.l(i),i.forEach(u),this.h()},h(){m(e,"class","wrapper svelte-zdezep")},m(n,i){x(n,e,i),t&&t.m(e,null)},p(n,[i]){n[1]?t?(t.p(n,i),i&2&&z(t,1)):(t=Ke(n),t.c(),z(t,1),t.m(e,null)):t&&(t.d(1),t=null)},i(n){z(t)},o:A,d(n){n&&u(e),t&&t.d()}}}function dn(s,e,t){let n,i,r,{text:a}=e,{duration:o}=e;return s.$$set=l=>{"text"in l&&t(3,a=l.text),"duration"in l&&t(4,o=l.duration)},s.$$.update=()=>{s.$$.dirty&8&&t(0,n=a.split(" ").map(l=>" "+l)),s.$$.dirty&17&&t(2,i=(o-.5)/n.length*1e3),s.$$.dirty&1&&t(1,r=!(n==null?void 0:n.length)),s.$$.dirty&1&&n.length&&setTimeout(()=>{t(1,r=!0)},200)},[n,r,i,a,o]}class _n extends G{constructor(e){super();j(this,e,dn,fn,W,{text:3,duration:4})}}function pn(s){window.DeviceOrientationEvent?window.addEventListener("deviceorientation",function(){s([event.beta,event.gamma])},!0):window.DeviceMotionEvent?window.addEventListener("devicemotion",function(){s([event.acceleration.x*2,event.acceleration.y*2])},!0):window.addEventListener("MozOrientation",function(){s([orientation.x*50,orientation.y*50])},!0)}const{window:Qe}=Mt;function Ye(s,e,t){const n=s.slice();return n[29]=e[t],n[31]=t,n}function Xe(s){let e,t;return e=new _n({props:{text:s[1].text,duration:s[1].duration}}),{c(){K(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,i){J(e,n,i),t=!0},p(n,i){const r={};i[0]&2&&(r.text=n[1].text),i[0]&2&&(r.duration=n[1].duration),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){V(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function Ze(s){let e,t,n,i;const r=[vn,gn,mn],a=[];function o(l,c){return l[7]==="suspended"?0:l[7]==="finished"?1:l[7]==="input"?2:-1}return~(e=o(s))&&(t=a[e]=r[e](s)),{c(){t&&t.c(),n=U()},l(l){t&&t.l(l),n=U()},m(l,c){~e&&a[e].m(l,c),x(l,n,c),i=!0},p(l,c){let d=e;e=o(l),e===d?~e&&a[e].p(l,c):(t&&(me(),V(a[d],1,1,()=>{a[d]=null}),pe()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),z(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(z(t),i=!0)},o(l){V(t),i=!1},d(l){~e&&a[e].d(l),l&&u(n)}}}function mn(s){let e,t,n,i;function r(l){s[15](l)}var a=s[1].element;function o(l){let c={callback:l[14]};return l[0]!==void 0&&(c.showText=l[0]),{props:c}}return a&&(e=new a(o(s)),fe.push(()=>Ae(e,"showText",r))),{c(){e&&K(e.$$.fragment),n=U()},l(l){e&&X(e.$$.fragment,l),n=U()},m(l,c){e&&J(e,l,c),x(l,n,c),i=!0},p(l,c){const d={};if(c[0]&2&&(d.callback=l[14]),!t&&c[0]&1&&(t=!0,d.showText=l[0],Le(()=>t=!1)),a!==(a=l[1].element)){if(e){me();const _=e;V(_.$$.fragment,1,0,()=>{Q(_,1)}),pe()}a?(e=new a(o(l)),fe.push(()=>Ae(e,"showText",r)),K(e.$$.fragment),z(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(l){i||(e&&z(e.$$.fragment,l),i=!0)},o(l){e&&V(e.$$.fragment,l),i=!1},d(l){l&&u(n),e&&Q(e,l)}}}function gn(s){var n,i;let e,t=((i=(n=s[1])==null?void 0:n.nextActions)==null?void 0:i.length)&&et(s);return{c(){t&&t.c(),e=U()},l(r){t&&t.l(r),e=U()},m(r,a){t&&t.m(r,a),x(r,e,a)},p(r,a){var o,l;((l=(o=r[1])==null?void 0:o.nextActions)==null?void 0:l.length)?t?(t.p(r,a),a[0]&2&&z(t,1)):(t=et(r),t.c(),z(t,1),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i(r){z(t)},o:A,d(r){t&&t.d(r),r&&u(e)}}}function vn(s){let e,t,n,i;return{c(){e=v("button"),t=H("Starten")},l(r){e=w(r,"BUTTON",{});var a=k(e);t=L(a,"Starten"),a.forEach(u)},m(r,a){x(r,e,a),g(e,t),n||(i=B(e,"click",s[12]),n=!0)},p:A,i:A,o:A,d(r){r&&u(e),n=!1,i()}}}function et(s){let e,t=s[1].nextActions,n=[];for(let i=0;i<t.length;i+=1)n[i]=tt(Ye(s,t,i));return{c(){e=v("div");for(let i=0;i<n.length;i+=1)n[i].c()},l(i){e=w(i,"DIV",{});var r=k(e);for(let a=0;a<n.length;a+=1)n[a].l(r);r.forEach(u)},m(i,r){x(i,e,r);for(let a=0;a<n.length;a+=1)n[a].m(e,null)},p(i,r){if(r[0]&2){t=i[1].nextActions;let a;for(a=0;a<t.length;a+=1){const o=Ye(i,t,a);n[a]?(n[a].p(o,r),z(n[a],1)):(n[a]=tt(o),n[a].c(),z(n[a],1),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},i(i){for(let r=0;r<t.length;r+=1)z(n[r])},o:A,d(i){i&&u(e),xe(n,i)}}}function tt(s){let e,t=s[29].name+"",n,i,r,a;function o(){return s[13](s[29])}return{c(){e=v("button"),n=H(t)},l(l){e=w(l,"BUTTON",{});var c=k(e);n=L(c,t),c.forEach(u)},m(l,c){x(l,e,c),g(e,n),r||(a=B(e,"click",o),r=!0)},p(l,c){s=l,c[0]&2&&t!==(t=s[29].name+"")&&be(n,t)},i(l){i||ue(()=>{i=Ee(e,he,{duration:200,delay:200*s[31]}),i.start()})},o:A,d(l){l&&u(e),r=!1,a()}}}function wn(s){var E;let e,t,n,i,r,a,o,l,c,d,_;t=new hn({});let f=((E=s[1])==null?void 0:E.text)&&(s[7]==="running"||s[7]==="finished"||s[7]==="input")&&s[6]&&Xe(s),p=s[7]&&Ze(s);return{c(){e=D(),K(t.$$.fragment),n=D(),i=v("main"),r=v("canvas"),a=D(),o=v("div"),f&&f.c(),l=D(),p&&p.c(),this.h()},l(h){xt('[data-svelte="svelte-tqpvny"]',document.head).forEach(u),e=S(h),X(t.$$.fragment,h),n=S(h),i=w(h,"MAIN",{class:!0});var b=k(i);r=w(b,"CANVAS",{class:!0}),k(r).forEach(u),a=S(b),o=w(b,"DIV",{class:!0});var T=k(o);f&&f.l(T),l=S(T),p&&p.l(T),T.forEach(u),b.forEach(u),this.h()},h(){document.title="Dungeon Entry",m(r,"class","svelte-in2d0c"),Be(r,"loaded",s[3]),m(o,"class","content svelte-in2d0c"),m(i,"class","svelte-in2d0c")},m(h,y){x(h,e,y),J(t,h,y),x(h,n,y),x(h,i,y),g(i,r),s[10](r),g(i,a),g(i,o),f&&f.m(o,null),g(o,l),p&&p.m(o,null),c=!0,d||(_=[B(Qe,"mousemove",s[8]),B(Qe,"resize",s[9]),B(r,"click",s[11])],d=!0)},p(h,y){var b;y[0]&8&&Be(r,"loaded",h[3]),((b=h[1])==null?void 0:b.text)&&(h[7]==="running"||h[7]==="finished"||h[7]==="input")&&h[6]?f?(f.p(h,y),y[0]&194&&z(f,1)):(f=Xe(h),f.c(),z(f,1),f.m(o,l)):f&&(me(),V(f,1,1,()=>{f=null}),pe()),h[7]?p?(p.p(h,y),y[0]&128&&z(p,1)):(p=Ze(h),p.c(),z(p,1),p.m(o,null)):p&&(me(),V(p,1,1,()=>{p=null}),pe())},i(h){c||(z(t.$$.fragment,h),z(f),z(p),c=!0)},o(h){V(t.$$.fragment,h),V(f),V(p),c=!1},d(h){h&&u(e),Q(t,h),h&&u(n),h&&u(i),s[10](null),f&&f.d(),p&&p.d(),d=!1,ye(_)}}}const ve=500;function yn(s,e,t){let n,i,r,a,o=A,l=()=>(o(),o=Tt(i,I=>t(7,a=I)),i);At(s,Pe,I=>t(1,r=I)),s.$$.on_destroy.push(()=>o());let c;const d=new zt,_=new $e(12626431,.8);_.position.set(2.5,2.5,2),d.add(_);const f=new $e(16765393,.8);f.position.set(-2.5,2.5,2),d.add(f);const p=new $e(16777215,1);p.position.set(1,1,-1.5),d.add(p);let E=!0;const h=ve;let y=ve,b=h,T=0,q=0,R=0,P=0,F=!1;const N=new $t(50,ve/h,.1,1e3);N.position.set(0,0,1);let $;function M({clientX:I,clientY:Y}){R=2-I/b*2-1,P=Y/y*2-1}async function ae(){const I=await ln(),Y=I.scene.children[0].children[1],ne=I.scene.children[0].children[0];$.setSkeleton(ne),Y.geometry.computeBoundingBox();const ie=new Dt,se=Y.geometry.boundingBox;se.getCenter(ie),N.position.x=ie.x,N.position.y=ie.y;const ee=(se.max.y-ie.y)*4/2/Math.tan(Math.PI*N.fov/360);N.position.z=ee,d.add(I.scene),t(3,F=!0)}function le(){y=window.innerHeight,b=window.innerWidth}ke(()=>{y=window.innerHeight,b=window.innerWidth;let I,Y;pn(([ee,De,bn])=>{I||(I=ee),Y||(Y=De),R=(Y-De)/180,P=(I-ee)/180}),ae();const ne=new It({canvas:c,alpha:!0});ne.setSize(ve,h),t(4,$=new an({scene:d,renderer:ne,camera:N})),en($).setActive();function se(ee){requestAnimationFrame(se),$==null||$.update(ee),T=O(R,T,.1),q=O(P,q,.1),N.position.x=T*.8,N.position.y=q*.3+.1,N.lookAt(0,.2,0),Ie()}function Ie(){ne.render(d,N)}se(0)});function oe(I){fe[I?"unshift":"push"](()=>{c=I,t(2,c)})}const ce=()=>{$.params.wiggleRim<1&&(t(4,$.params.wiggleRim=5,$),t(4,$.params.wiggleEyes=1,$),setTimeout(()=>{t(4,$.params.wiggleRim=0,$),t(4,$.params.wiggleEyes=0,$)},1e3))},nt=()=>r.start(),it=I=>I.action.start(),st=I=>{r.handleElementCallback(I)};function rt(I){E=I,t(0,E)}return s.$$.update=()=>{s.$$.dirty[0]&1&&t(6,n=E===!0||E===void 0),s.$$.dirty[0]&2&&l(t(5,i=r&&r.state))},[E,r,c,F,$,i,n,a,M,le,oe,ce,nt,it,st,rt]}class xn extends G{constructor(e){super();j(this,e,yn,wn,W,{},null,[-1,-1])}}export{xn as default};
