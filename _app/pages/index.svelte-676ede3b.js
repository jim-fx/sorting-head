var ht=Object.defineProperty,_t=Object.defineProperties;var pt=Object.getOwnPropertyDescriptors;var De=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var _e=(s,e,t)=>e in s?ht(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,pe=(s,e)=>{for(var t in e||(e={}))gt.call(e,t)&&_e(s,t,e[t]);if(De)for(var t of De(e))mt.call(e,t)&&_e(s,t,e[t]);return s},Ne=(s,e)=>_t(s,pt(e));var D=(s,e,t)=>(_e(s,typeof e!="symbol"?e+"":e,t),t);import{S as U,i as j,s as P,e as v,c as y,a as T,d as _,b,f as m,H as w,t as I,k as $,g as H,n as F,G as z,O as Se,P as O,Q as Ie,h as ge,R as wt,l as B,T as vt,x as k,u as S,A as re,U as Q,V as ce,W as He,X as J,Y as me,Z as we,_ as yt,$ as X,a0 as ve,j as Z,m as ue,F as ee,o as te,a1 as $e,v as ne,C as Fe,a2 as bt,a3 as kt,a4 as xt,a5 as Et,a6 as At,a7 as zt,a8 as Tt,a9 as Be,aa as Mt,ab as fe,N as ye,ac as Ce,ad as Y,ae as Oe,af as Ve,ag as Lt,ah as Rt,w as ie,ai as Dt,r as se,aj as Nt,ak as St}from"../chunks/vendor-1794dca4.js";import{g as It,p as Ht}from"../chunks/index-e98830f3.js";import{f as Ue,u as G}from"../chunks/stores-7a7e5634.js";/* empty css                                                      */function $t(s){let e,t,n,i,o,a,r,l,c,u,f;return{c(){e=v("p"),t=I("Ganzen Namen eingeben:"),n=$(),i=v("input"),o=$(),a=v("br"),r=$(),l=v("button"),c=I("fertig"),this.h()},l(d){e=y(d,"P",{});var h=T(e);t=H(h,"Ganzen Namen eingeben:"),h.forEach(_),n=F(d),i=y(d,"INPUT",{placeholder:!0,type:!0}),o=F(d),a=y(d,"BR",{}),r=F(d),l=y(d,"BUTTON",{});var p=T(l);c=H(p,"fertig"),p.forEach(_),this.h()},h(){b(i,"placeholder","Namen..."),b(i,"type","text")},m(d,h){m(d,e,h),z(e,t),m(d,n,h),m(d,i,h),Se(i,s[1]),m(d,o,h),m(d,a,h),m(d,r,h),m(d,l,h),z(l,c),u||(f=[O(i,"input",s[6]),O(i,"keydown",s[3]),O(l,"click",s[7])],u=!0)},p(d,h){h&2&&i.value!==d[1]&&Se(i,d[1])},d(d){d&&_(e),d&&_(n),d&&_(i),d&&_(o),d&&_(a),d&&_(r),d&&_(l),u=!1,Ie(f)}}}function Ft(s){let e,t,n,i,o,a,r,l,c,u,f,d,h,p,g,A;return{c(){e=v("p"),t=I("Alles klar, "),n=v("b"),i=I(s[1]),o=I(", ist das der richtige Name?"),a=$(),r=v("br"),l=$(),c=v("div"),u=v("button"),f=I("Ja"),d=$(),h=v("button"),p=I("Nein")},l(x){e=y(x,"P",{});var E=T(e);t=H(E,"Alles klar, "),n=y(E,"B",{});var V=T(n);i=H(V,s[1]),V.forEach(_),o=H(E,", ist das der richtige Name?"),E.forEach(_),a=F(x),r=y(x,"BR",{}),l=F(x),c=y(x,"DIV",{});var L=T(c);u=y(L,"BUTTON",{});var R=T(u);f=H(R,"Ja"),R.forEach(_),d=F(L),h=y(L,"BUTTON",{});var W=T(h);p=H(W,"Nein"),W.forEach(_),L.forEach(_)},m(x,E){m(x,e,E),z(e,t),z(e,n),z(n,i),z(e,o),m(x,a,E),m(x,r,E),m(x,l,E),m(x,c,E),z(c,u),z(u,f),z(c,d),z(c,h),z(h,p),g||(A=[O(u,"click",s[4]),O(h,"click",s[5])],g=!0)},p(x,E){E&2&&ge(i,x[1])},d(x){x&&_(e),x&&_(a),x&&_(r),x&&_(l),x&&_(c),g=!1,Ie(A)}}}function Bt(s){let e;function t(o,a){return o[2]?Ft:$t}let n=t(s),i=n(s);return{c(){e=v("div"),i.c(),this.h()},l(o){e=y(o,"DIV",{class:!0});var a=T(e);i.l(a),a.forEach(_),this.h()},h(){b(e,"class","wrapper svelte-1terpu9")},m(o,a){m(o,e,a),i.m(e,null)},p(o,[a]){n===(n=t(o))&&i?i.p(o,a):(i.d(1),i=n(o),i&&(i.c(),i.m(e,null)))},i:w,o:w,d(o){o&&_(e),i.d()}}}function Ct(s,e,t){let{callback:n}=e,i,o=!1;function a({key:f}){f==="Enter"&&t(2,o=!0)}const r=()=>n(i),l=()=>{t(2,o=!1)};function c(){i=this.value,t(1,i)}const u=()=>{t(2,o=!0)};return s.$$set=f=>{"callback"in f&&t(0,n=f.callback)},[n,i,o,a,r,l,c,u]}class Ot extends U{constructor(e){super();j(this,e,Ct,Bt,P,{callback:0})}}function Vt(s){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function Ut(s){let e,t=s[6]+"",n,i,o,a,r,l,c,u,f,d,h;function p(){return s[3](s[6])}return{c(){e=v("h1"),n=I(t),i=$(),o=v("img"),l=$(),c=v("button"),u=I("Okay"),this.h()},l(g){e=y(g,"H1",{class:!0});var A=T(e);n=H(A,t),A.forEach(_),i=F(g),o=y(g,"IMG",{src:!0,alt:!0,class:!0}),l=F(g),c=y(g,"BUTTON",{});var x=T(c);u=H(x,"Okay"),x.forEach(_),this.h()},h(){b(e,"class","svelte-16th1rs"),Q(o.src,a="icons/"+s[6]+".svg")||b(o,"src",a),b(o,"alt","crest of house "+s[1]),b(o,"class","svelte-16th1rs")},m(g,A){m(g,e,A),z(e,n),m(g,i,A),m(g,o,A),m(g,l,A),m(g,c,A),z(c,u),f=!0,d||(h=O(c,"click",p),d=!0)},p(g,A){s=g},i(g){f||(ce(()=>{r||(r=He(o,J,{},!0)),r.run(1)}),f=!0)},o(g){r||(r=He(o,J,{},!1)),r.run(0),f=!1},d(g){g&&_(e),g&&_(i),g&&_(o),g&&r&&r.end(),g&&_(l),g&&_(c),d=!1,h()}}}function jt(s){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function Pt(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:jt,then:Ut,catch:Vt,value:6,blocks:[,,,]};return wt(s[1],n),{c(){e=B(),n.block.c()},l(i){e=B(),n.block.l(i)},m(i,o){m(i,e,o),n.block.m(i,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[o]){s=i,vt(n,s,o)},i(i){t||(k(n.block),t=!0)},o(i){for(let o=0;o<3;o+=1){const a=n.blocks[o];S(a)}t=!1},d(i){i&&_(e),n.block.d(i),n.token=null,n=null}}}function Gt(s,e,t){const n=!1,i=["ravenclaw","gryffindor","slytherin","hufflepuff"];async function o(){const c=await(await It("api/houses")).text();return c.length>20?i[Math.floor(Math.random()*i.length)]:c}let a=o(),{callback:r}=e;re(async()=>{const c=await a,u=new Audio("audio/"+c+".mp3");u.play();const f=new Audio("audio/cheers.mp3"),d=setInterval(()=>{u.currentTime/u.duration>.2&&f.paused&&(f.play(),clearInterval(d))},50);u.addEventListener("progress",()=>{})});const l=c=>r(c);return s.$$set=c=>{"callback"in c&&t(0,r=c.callback)},[r,a,n,l]}class Wt extends U{constructor(e){super();j(this,e,Gt,Pt,P,{showText:2,callback:0})}get showText(){return this.$$.ctx[2]}}function je(s,e,t){const n=s.slice();return n[4]=e[t],n[6]=t,n}function Pe(s){let e,t,n,i,o,a;function r(){return s[3](s[4])}return{c(){e=v("img"),this.h()},l(l){e=y(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Q(e.src,t="icons/"+s[4]+".svg")||b(e,"src",t),b(e,"alt",n="crest of house "+s[4]),b(e,"class","svelte-16fuc7d")},m(l,c){m(l,e,c),o||(a=O(e,"click",r),o=!0)},p(l,c){s=l},i(l){i||ce(()=>{i=me(e,J,{delay:s[6]*200,duration:1200}),i.start()})},o:w,d(l){l&&_(e),o=!1,a()}}}function qt(s){let e,t=s[0],n=[];for(let i=0;i<t.length;i+=1)n[i]=Pe(je(s,t,i));return{c(){e=v("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=y(i,"DIV",{class:!0});var o=T(e);for(let a=0;a<n.length;a+=1)n[a].l(o);o.forEach(_),this.h()},h(){b(e,"class","wrapper svelte-16fuc7d")},m(i,o){m(i,e,o);for(let a=0;a<n.length;a+=1)n[a].m(e,null)},p(i,[o]){if(o&3){t=i[0];let a;for(a=0;a<t.length;a+=1){const r=je(i,t,a);n[a]?(n[a].p(r,o),k(n[a],1)):(n[a]=Pe(r),n[a].c(),k(n[a],1),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},i(i){for(let o=0;o<t.length;o+=1)k(n[o])},o:w,d(i){i&&_(e),we(n,i)}}}function Kt(s,e,t){let{callback:n}=e;const i=["ravenclaw","gryffindor","slytherin","hufflepuff"];function o(r){const l=new Audio("audio/"+r+".mp3");l.play(),l.addEventListener("ended",()=>{setTimeout(()=>{n(r)},200)})}const a=r=>o(r);return s.$$set=r=>{"callback"in r&&t(2,n=r.callback)},[i,o,n,a]}class Qt extends U{constructor(e){super();j(this,e,Kt,qt,P,{callback:2})}}function Yt(s){let e,t,n,i,o,a,r,l,c,u,f;function d(p){s[3](p)}let h={max:10,pips:!0,id:"range-slider",all:"label"};return s[1]!==void 0&&(h.values=s[1]),n=new yt({props:h}),X.push(()=>ve(n,"values",d)),{c(){e=v("div"),t=v("div"),i=v("div"),Z(n.$$.fragment),a=$(),r=v("button"),l=I("Okay"),this.h()},l(p){e=y(p,"DIV",{class:!0});var g=T(e);t=y(g,"DIV",{class:!0});var A=T(t);i=y(A,"DIV",{style:!0});var x=T(i);ue(n.$$.fragment,x),A.forEach(_),a=F(g),r=y(g,"BUTTON",{});var E=T(r);l=H(E,"Okay"),E.forEach(_),g.forEach(_),this.h()},h(){ee(i,"display","contents"),ee(i,"--handle-focus","white"),ee(i,"--range-slider","black"),ee(i,"--range-handle","black"),ee(i,"--range-float-text","white"),b(t,"class","range-wrapper svelte-1ni4obk"),b(e,"class","wrapper svelte-1ni4obk")},m(p,g){m(p,e,g),z(e,t),z(t,i),te(n,i,null),z(e,a),z(e,r),z(r,l),c=!0,u||(f=O(r,"click",s[4]),u=!0)},p(p,[g]){const A={};!o&&g&2&&(o=!0,A.values=p[1],$e(()=>o=!1)),n.$set(A)},i(p){c||(k(n.$$.fragment,p),c=!0)},o(p){S(n.$$.fragment,p),c=!1},d(p){p&&_(e),ne(n),u=!1,f()}}}function Jt(s,e,t){let{callback:n}=e;const i=!0;let o=[5];function a(l){o=l,t(1,o)}const r=()=>n(o[0]);return s.$$set=l=>{"callback"in l&&t(0,n=l.callback)},[n,o,i,a,r]}class Xt extends U{constructor(e){super();j(this,e,Jt,Yt,P,{callback:0,showText:2})}get showText(){return this.$$.ctx[2]}}function Zt(s){let e,t,n,i,o,a;return{c(){e=v("video"),t=v("source"),i=v("source"),a=v("track"),this.h()},l(r){e=y(r,"VIDEO",{width:!0,height:!0,class:!0});var l=T(e);t=y(l,"SOURCE",{src:!0,type:!0}),i=y(l,"SOURCE",{src:!0,type:!0}),a=y(l,"TRACK",{kind:!0}),l.forEach(_),this.h()},h(){Q(t.src,n=""+(s[0]+"video/video.webm"))||b(t,"src",n),b(t,"type","video/webm"),Q(i.src,o=""+(s[0]+"video/video.mp4"))||b(i,"src",o),b(i,"type","video/mp4"),b(a,"kind","captions"),b(e,"width","500"),b(e,"height","281"),e.controls=!0,e.autoplay=!0,b(e,"class","svelte-k2j555")},m(r,l){m(r,e,l),z(e,t),z(e,i),z(e,a)},p(r,[l]){l&1&&!Q(t.src,n=""+(r[0]+"video/video.webm"))&&b(t,"src",n),l&1&&!Q(i.src,o=""+(r[0]+"video/video.mp4"))&&b(i,"src",o)},i:w,o:w,d(r){r&&_(e)}}}function en(s,e,t){const n=!1;let i="";return re(()=>{t(0,i=window.location.pathname)}),[i,n]}class tn extends U{constructor(e){super();j(this,e,en,Zt,P,{showText:1})}get showText(){return this.$$.ctx[1]}}const Ge=Fe(),de=class{constructor({audioFile:e,element:t,text:n}){D(this,"audio");D(this,"text");D(this,"duration",5);D(this,"isLast",!0);D(this,"state",Fe("suspended"));D(this,"nextActions",[]);D(this,"data");D(this,"element");D(this,"events",{});this.text=n,this.element=t,e&&(this.audio=new Audio("audio/"+e))}async start(){if(this.setActive(),await bt(),this.emit("start"),this.audio){this.duration=this.audio.duration,this.state.set("running"),this.audio.play(),de.anim.params.wiggleMouth=1;const e=setInterval(()=>{this.emit("progress",this.audio.currentTime/this.audio.duration)},200);this.audio.addEventListener("ended",()=>{clearInterval(e),setTimeout(()=>{this.speechEnded()},500)},{once:!0})}else this.duration=5,this.text&&(this.duration=Math.max(this.text.split(" ").length*.08,2),console.log(this.duration)),this.state.set("running"),setTimeout(()=>{this.speechEnded()},this.duration*1e3)}speechEnded(){this.emit("speech-ended"),de.anim.params.wiggleMouth=0,this.element?this.state.set("input"):this.finish()}handleElementCallback(e){console.log("Got Data: ",e),this.data=e,this.emit("data",e),this.finish()}finish(){this.state.set("finished"),this.emit("end"),console.log("Finished",this.nextActions),this.nextActions.length===1&&!("name"in this.nextActions[0])&&this.nextActions[0].action.start(),this.nextActions.length||Ue.set(!0)}emit(e,t){e in this.events&&this.events[e].forEach(n=>n(t))}addEventListener(e,t){return this.events[e]=e in this.events?[...this.events[e],t]:[t],()=>{this.events[e]=this.events[e].filter(n=>n!==t)}}setActive(){Ge.set(this)}addAction(e,t){this.isLast=!1,typeof e!="string"?this.nextActions.push({action:e}):this.nextActions.push({name:e,action:t})}};let C=de;D(C,"anim");function nn(s){C.anim=s;const e=new C({audioFile:"teilnehmen.mp3",text:"So so, du willst also an der Silvesterparty im Dungeon teilnehmen?"});e.addEventListener("start",()=>{s.params.wiggleMouth=1}),e.addEventListener("end",()=>{s.params.wiggleMouth=0,s.params.wiggleEyes=1});const t=new C({audioFile:"namen.mp3",text:"Sehr sch\xF6n, verstanden, jetzt br\xE4uchte ich noch deinen Namen?",element:Ot});t.addEventListener("data",f=>{console.log("Got Name",f),G.update(d=>(d.name=f,d))});const n=new C({audioFile:"unterhaltung.mp3",text:"Das ist nat\xFCrlich auch in Ordnung, damit du aber trotzdem nicht leer ausgehst habe ich hier etwas Unterhaltung f\xFCr dich:",element:tn}),i=new C({audioFile:"exzellenter_gast.mp3",text:"Naja, okay, wenn das sooo ist? Dann werden wir mal schauen... Verstanden, du siehst wie ein exzellenter Gast aus."}),o=new C({audioFile:"welches_haus.mp3",text:"Weisst du den schon zu welchem der vier H\xE4user du geh\xF6rst?"});o.addEventListener("data",f=>{G.update(d=>(d.house=f,d))});const a=new C({audioFile:"random_haus.mp3",text:"Okay, um das herauszufinden bin ich ja hier. Dann werde ich mal  schauen, hmm, ich sehe Mut, aber auch Intelligenz, oh, und hier ist auch noch Empathie. Schwierige Entscheidung, aber ich denke:",element:Wt});a.addEventListener("start",()=>{s.params.wiggleMouth=1}),a.addEventListener("progress",f=>{f>.34&&(s.params.wiggleRim=2,s.params.wiggleHat=2,s.params.wiggleEyes=1)}),a.addEventListener("speech-ended",()=>{s.params.wiggleMouth=0,s.params.wiggleHat=.2,s.params.wiggleEyes=0,s.params.wiggleRim=.2}),a.addEventListener("data",f=>{G.update(d=>(d.house=f,d))});const r=new C({text:"W\xE4hle nun dein Haus aus:",element:Qt});r.addEventListener("data",f=>{G.update(d=>(d.house=f,d))});const l=new C({audioFile:"sicherheit.mp3",text:"Nun zu letzten Frage, auf einer Skala von 0 bis 10, wie sicher k\xF6nnen wir mit deinem Erscheinen rechnen?",element:Xt});l.addEventListener("data",f=>{G.update(d=>(d.confidence=f/10,Ht("api",d),d))});const c=new C({audioFile:"final.mp3",text:"So, das war auch schon alles. Wir freuen uns, dich am 31.12 willkommen zu hei\xDFen, und w\xFCnschen dir bis dahin eine sch\xF6ne Weihnachtszeit."});e.addAction("Auf jeden Fall!",t),e.addAction("Ne, eher nicht",n),t.addAction(i),i.addAction(o),o.addAction("Aber nat\xFCrlich!",r),o.addAction("Nein, dass wei\xDF ich noch nicht...",a),a.addAction(l),r.addAction(l),l.addAction(c);const u=kt(G);return u.name&&u.house&&"confidence"in u?c:e}function We(s,e=[]){return s.type==="Bone"&&!e.includes(s)&&e.push(s),s.children.forEach(t=>{t.type==="Bone"&&!e.includes(t)&&e.push(t),t.children.length&&We(t,e)}),e}function N(s,e,t){return s*t+e*(1-t)}function sn(s){const e={};return s.forEach(t=>{const{userData:{name:n}={}}=t;if(n){e[n]=t;const[i,o]=n.toLowerCase().split("_");o&&(e[i]=i in e?Ne(pe({},e[i]),{[o]:t}):{[o]:t},e[i+"Array"]=i+"Array"in e?[...e[i+"Array"],t]:[t])}}),e}function on(s){let e=!1;return{name:s.name,get dirty(){return e},clear:()=>{e=!1},rotation:{_x:0,ox:s.rotation.x,get x(){return this.ox+this._x},set x(t){t!==this._x&&(this._x=t,e=!0)},_y:0,oy:s.rotation.y,get y(){return this.oy+this._y},set y(t){t!==this._y&&(this._y=t,this._dirty=!0)},_z:0,oz:s.rotation.z,get z(){return this.oz+this._z},set z(t){t!==this._z&&(this._z=t,e=!0)}},position:{ox:s.position.x,_x:0,get x(){return this.ox+this._x},set x(t){t!==this._x&&(this._x=t,e=!0)},oy:s.position.y,_y:0,get y(){return this.oy+this._y},set y(t){t!==this._y&&(this._y=t,e=!0)},oz:s.position.z,_z:0,get z(){return this.oz+this._z},set z(t){t!==this._z&&(this._z=t,e=!0)}},scale:{ox:s.scale.x,_x:0,get x(){return this.ox+this._x},set x(t){t!==this._x&&(this._x=t,e=!0)},oy:s.scale.y,_y:0,get y(){return this.oy+this._y},set y(t){t!==this._y&&(this._y=t,e=!0)},oz:s.scale.z,_z:0,get z(){return this.oz+this._z},set z(t){t!==this._z&&(this._z=t,e=!0)}},id:s.uuid}}function be(s,e={bones:{}},t=0){if(s instanceof xt){if(s.uuid in e)return e[s.uuid];e.bones[s.uuid]=s;const o=on(s);return e[s.uuid]=o,o}if(Array.isArray(s))return s.map(o=>be(o,e,t+1));const n={},i=Object.keys(s);return i.length&&i.forEach(o=>{n[o]=be(s[o],e,t+1)}),t===0?{obj:n,cache:e}:n}function an(s){const{obj:e,cache:t}=be(s);return e._bones=t.bones,delete t.bones,e._all=Object.values(t),e}function ln({_all:s,_bones:e}){s.forEach(t=>{if(!t.dirty)return;const n=e[t.id];!n||(n.rotation.x=N(t.rotation.x,n.rotation.x,.9),n.rotation.y=N(t.rotation.y,n.rotation.y,.9),n.rotation.z=N(t.rotation.z,n.rotation.z,.9),n.position.x=N(t.position.x,n.position.x,.9),n.position.y=N(t.position.y,n.position.y,.9),n.position.z=N(t.position.z,n.position.z,.9),n.scale.x=N(t.scale.x,n.scale.x,.9),n.scale.y=N(t.scale.y,n.scale.y,.9),n.scale.z=N(t.scale.z,n.scale.z,.9),t.clear())})}class rn{constructor({scene:e,camera:t,renderer:n}){D(this,"boneArray",[]);D(this,"_bones",{circleArray:[],spineArray:[],mouthArray:[]});D(this,"bones",{});D(this,"loaded",!1);D(this,"controls");D(this,"conf",{wiggleRim:.05,wiggleHat:.05,wiggleMouth:.05,wiggleEyes:.05});D(this,"confKeys",[]);D(this,"params");this.controls=new Et(t,n.domElement),e.add(this.controls),this.params=pe({},this.conf),this.confKeys=Object.keys(this.conf),window.c=this.controls,this.setActiveBone=this.setActiveBone.bind(this)}setActiveBone(e){const t=this.boneArray.find(n=>n.userData.name===e);this.controls.attach(t)}setSkeleton(e){!e||(this.boneArray=We(e),this._bones=sn(this.boneArray),this.bones=an(this._bones),this.loaded=!!this.boneArray.length)}update(e){if(!this.loaded)return;const{bones:t,conf:n,confKeys:i,params:o}=this;if(i.forEach(a=>{o[a]!==n[a]&&(n[a]=N(o[a],n[a],.05))}),n.wiggleRim&&t.circleArray.forEach((a,r)=>{a.position.y=Math.sin(e/300+r*2)/100*n.wiggleRim}),n.wiggleHat&&t.spineArray.forEach((a,r)=>{a.rotation.x=Math.sin(e/300+r*2)/100*n.wiggleHat,a.rotation.y=Math.sin(e/300+r*1)/100*n.wiggleHat,a.rotation.z=Math.sin(e/300+r*0)/100*n.wiggleHat}),n.wiggleMouth&&(t.mouth.r1.scale.x=Math.sin(e/100+10)/10*n.wiggleMouth,t.mouth.l2.scale.x=Math.sin(e/100+5)/10*n.wiggleMouth,t.mouth.l1.scale.x=Math.sin(e/100+1)/4*n.wiggleMouth-.2,t.mouth.r2.scale.x=Math.sin(e/100+2)/4*n.wiggleMouth-.2,t.mouth.l1.position.y=Math.sin(e/100)/300*n.wiggleMouth-.01,t.mouth.r1.position.y=Math.sin(e/100)/300*n.wiggleMouth-.01),n.wiggleEyes){const a=e/400;t.eyes.l1.scale.x=Math.sin(a+1)/4*n.wiggleEyes-.2,t.eyes.r2.scale.x=Math.sin(a+2)/4*n.wiggleEyes-.2,t.eyes.l1.position.y=Math.sin(a)/300*n.wiggleEyes+.01,t.eyes.r1.position.y=Math.sin(e/200)/300*n.wiggleEyes+.01}ln(this.bones)}}const qe=new At,cn=new zt,Ke=new Tt;Ke.setDecoderPath("draco/");qe.setDRACOLoader(Ke);function un(s){return cn.load(s)}function Qe(s,e){return qe.loadAsync(s,e)}async function fn(){const s=un("textures/SortingHat_col.jpg");s.flipY=!1;const e=new Be({map:s}),t=await Qe("sorting_hat.glb",i=>{console.log(i.loaded/i.total*100+"% loaded")}),n=t.scene.children[0].children[1];return n.material=e,t}function Ye(s){return new Promise((e,t)=>{const n=new Image;n.src=s,n.onerror=i=>t(i),n.onload=()=>e(n)})}async function dn(s,e){const t=new FontFace(s,`url(${e})`);return await t.loaded,t}async function hn({name:s="",house:e=""}={}){console.log(s,e);const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),i=new Mt(t);i.flipY=!1;function o(){n.textAlign="center",n.font="10px Chantelli",n.fillText("Herzlich Willkommen",325,390),n.font="15px Chantelli bold",n.fillText(s,325,420),i.needsUpdate=!0}dn("Chantelli","fonts/Chantelli_Antiqua-webfont.woff").then(()=>o()),Ye("textures/book_col.jpg").then(async c=>{n.drawImage(c,0,0,512,512),o();const u=await Ye(`icons/${e}.svg`);n.drawImage(u,270,240,120,120),o()});const a=new Be({map:i}),r=await Qe("book.glb",c=>{console.log(c.loaded/c.total*100+"% loaded")}),l=r.scene.children[0].children[1];return l.material=a,r}var Je={loadHat:fn,loadBook:hn};let ke=0,xe=0,Ee=500,Ae=500,ze,Te;function Me({alpha:s,beta:e}){ze||(ze=s),Te||(Te=e),ke=(Te-e)/80*-1,xe=(ze-s)/80*-2}function _n(){Ee=window.innerHeight,Ae=window.innerWidth}function pn({clientX:s,clientY:e}){ke=s/Ae*2-1,xe=e/Ee*2-1}var oe={get x(){return ke},get y(){return xe},init(){Ee=window.innerHeight,Ae=window.innerWidth,window.addEventListener("resize",_n),window.addEventListener("mousemove",pn),window.DeviceOrientationEvent?window.addEventListener("deviceorientation",Me,!0):window.DeviceMotionEvent?window.addEventListener("devicemotion",function(s){Me({alpha:s.acceleration.x*2,beta:s.acceleration.y*2})},!0):window.addEventListener("MozOrientation",function(){Me({alpha:orientation.x*50,beta:orientation.y*50})},!0)}};function gn(s){let e,t;return{c(){e=v("canvas"),this.h()},l(n){e=y(n,"CANVAS",{style:!0,class:!0}),T(e).forEach(_),this.h()},h(){b(e,"style",t=`visibility:${s[1]!=="loading"?"visible":"hidden"}`),b(e,"class","svelte-rl5rk3"),fe(e,"loaded",s[1]!=="loading")},m(n,i){m(n,e,i),s[2](e)},p(n,[i]){i&2&&t!==(t=`visibility:${n[1]!=="loading"?"visible":"hidden"}`)&&b(e,"style",t),i&2&&fe(e,"loaded",n[1]!=="loading")},i:w,o:w,d(n){n&&_(e),s[2](null)}}}const Le=500;function Xe(s){return s<.5?16*s*s*s*s*s:1-Math.pow(-2*s+2,5)/2}function mn(s,e,t){let n;ye(s,G,E=>t(8,n=E));let i;const o=new Ce,a=new Y(12626431,.8);a.position.set(2.5,2.5,2),o.add(a);const r=new Y(16765393,.8);r.position.set(-2.5,2.5,2),o.add(r);const l=new Y(16777215,1);l.position.set(1,1,-1.5),o.add(l);const c=Le;let u=0,f=0,d="loading";const h=new Oe(50,Le/c,.1,1e3);h.position.set(-.2,.8,-.1);const p={};async function g(){const E=await Je.loadBook(n);E.scene.children[0].children[1].skeleton.bones.forEach(L=>{p[L.userData.name]=L}),p.Left.rotation.z=0,p.Left.position.x=-.02,p.Right.rotation.z=0,p.Right.position.x=.02,p.Root.rotation.z=-1.5-Math.PI*2,o.add(E.scene.children[0]),setTimeout(()=>{t(1,d="rotating")},500),window.skeleton=p}let A=0;re(()=>{g();const E=new Ve({canvas:i,alpha:!0});E.setSize(Le,c);function V(R){switch(requestAnimationFrame(V),u=N(oe.x/-5,u,.1),f=N(oe.y/-5,f,.1)+.03,h.position.x=u,h.position.z=f,h.lookAt(0,0,0),d){case"rotating":A++;const W=Xe(A/120);p.Root.rotation.z=N(-1.5-Math.PI*2,0,1-W),A>120&&(A=0,t(1,d="opening"));break;case"opening":A++;const q=Xe(A/120);p.Left.rotation.z=N(1.67,0,q),p.Left.position.x=N(-.05,-.02,q),p.Right.rotation.z=N(-1.67,0,q),p.Right.position.x=N(.05,.02,q),A>120&&t(1,d="opened");break}L()}function L(){E.render(o,h)}V()});function x(E){X[E?"unshift":"push"](()=>{i=E,t(0,i)})}return[i,d,x]}class wn extends U{constructor(e){super();j(this,e,mn,gn,P,{})}}function Ze(s,e,t){const n=s.slice();return n[5]=e[t],n[7]=t,n}function et(s){let e,t=s[0],n=[];for(let i=0;i<t.length;i+=1)n[i]=tt(Ze(s,t,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=B()},l(i){for(let o=0;o<n.length;o+=1)n[o].l(i);e=B()},m(i,o){for(let a=0;a<n.length;a+=1)n[a].m(i,o);m(i,e,o)},p(i,o){if(o&1){t=i[0];let a;for(a=0;a<t.length;a+=1){const r=Ze(i,t,a);n[a]?(n[a].p(r,o),k(n[a],1)):(n[a]=tt(r),n[a].c(),k(n[a],1),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},i(i){for(let o=0;o<t.length;o+=1)k(n[o])},o:w,d(i){we(n,i),i&&_(e)}}}function tt(s){let e,t=s[5]+"",n,i;return{c(){e=v("span"),n=I(t)},l(o){e=y(o,"SPAN",{});var a=T(e);n=H(a,t),a.forEach(_)},m(o,a){m(o,e,a),z(e,n)},p(o,a){s=o,a&1&&t!==(t=s[5]+"")&&ge(n,t)},i(o){i||ce(()=>{i=me(e,Lt,{duration:s[2],delay:s[7]*s[2]}),i.start()})},o:w,d(o){o&&_(e)}}}function vn(s){let e,t=s[1]&&et(s);return{c(){e=v("div"),t&&t.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var i=T(e);t&&t.l(i),i.forEach(_),this.h()},h(){b(e,"class","wrapper svelte-zdezep")},m(n,i){m(n,e,i),t&&t.m(e,null)},p(n,[i]){n[1]?t?(t.p(n,i),i&2&&k(t,1)):(t=et(n),t.c(),k(t,1),t.m(e,null)):t&&(t.d(1),t=null)},i(n){k(t)},o:w,d(n){n&&_(e),t&&t.d()}}}function yn(s,e,t){let n,i,o,{text:a}=e,{duration:r}=e;return s.$$set=l=>{"text"in l&&t(3,a=l.text),"duration"in l&&t(4,r=l.duration)},s.$$.update=()=>{s.$$.dirty&8&&t(0,n=a.split(" ").map(l=>" "+l)),s.$$.dirty&17&&t(2,i=(r-.5)/n.length*1e3),s.$$.dirty&1&&t(1,o=!(n==null?void 0:n.length)),s.$$.dirty&1&&n.length&&setTimeout(()=>{t(1,o=!0)},200)},[n,o,i,a,r]}class bn extends U{constructor(e){super();j(this,e,yn,vn,P,{text:3,duration:4})}}function nt(s,e,t){const n=s.slice();return n[24]=e[t],n[26]=t,n}function kn(s){var d;let e,t,n,i,o,a,r,l,c,u=((d=s[1])==null?void 0:d.text)&&(s[8]==="running"||s[8]==="finished"||s[8]==="input")&&s[6]&&it(s),f=s[8]&&st(s);return{c(){e=v("canvas"),i=$(),o=v("div"),u&&u.c(),a=$(),f&&f.c(),this.h()},l(h){e=y(h,"CANVAS",{style:!0,class:!0}),T(e).forEach(_),i=F(h),o=y(h,"DIV",{class:!0});var p=T(o);u&&u.l(p),a=F(p),f&&f.l(p),p.forEach(_),this.h()},h(){b(e,"style",t=`visibility:${s[3]?"visible":"hidden"}`),b(e,"class","svelte-1gtioab"),fe(e,"loaded",s[3]),b(o,"class","content svelte-1gtioab")},m(h,p){m(h,e,p),s[9](e),m(h,i,p),m(h,o,p),u&&u.m(o,null),z(o,a),f&&f.m(o,null),r=!0,l||(c=O(e,"click",s[10]),l=!0)},p(h,p){var g;(!r||p&8&&t!==(t=`visibility:${h[3]?"visible":"hidden"}`))&&b(e,"style",t),p&8&&fe(e,"loaded",h[3]),((g=h[1])==null?void 0:g.text)&&(h[8]==="running"||h[8]==="finished"||h[8]==="input")&&h[6]?u?(u.p(h,p),p&322&&k(u,1)):(u=it(h),u.c(),k(u,1),u.m(o,a)):u&&(se(),S(u,1,1,()=>{u=null}),ie()),h[8]?f?(f.p(h,p),p&256&&k(f,1)):(f=st(h),f.c(),k(f,1),f.m(o,null)):f&&(se(),S(f,1,1,()=>{f=null}),ie())},i(h){r||(n&&n.end(1),k(u),k(f),r=!0)},o(h){n=Nt(e,J,{}),S(u),S(f),r=!1},d(h){h&&_(e),s[9](null),h&&n&&n.end(),h&&_(i),h&&_(o),u&&u.d(),f&&f.d(),l=!1,c()}}}function xn(s){let e,t;return e=new wn({}),{c(){Z(e.$$.fragment)},l(n){ue(e.$$.fragment,n)},m(n,i){te(e,n,i),t=!0},p:w,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function it(s){let e,t;return e=new bn({props:{text:s[1].text,duration:s[1].duration}}),{c(){Z(e.$$.fragment)},l(n){ue(e.$$.fragment,n)},m(n,i){te(e,n,i),t=!0},p(n,i){const o={};i&2&&(o.text=n[1].text),i&2&&(o.duration=n[1].duration),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function st(s){let e,t,n,i;const o=[zn,An,En],a=[];function r(l,c){return l[8]==="suspended"?0:l[8]==="finished"?1:l[8]==="input"?2:-1}return~(e=r(s))&&(t=a[e]=o[e](s)),{c(){t&&t.c(),n=B()},l(l){t&&t.l(l),n=B()},m(l,c){~e&&a[e].m(l,c),m(l,n,c),i=!0},p(l,c){let u=e;e=r(l),e===u?~e&&a[e].p(l,c):(t&&(se(),S(a[u],1,1,()=>{a[u]=null}),ie()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=o[e](l),t.c()),k(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(k(t),i=!0)},o(l){S(t),i=!1},d(l){~e&&a[e].d(l),l&&_(n)}}}function En(s){let e,t,n,i;function o(l){s[14](l)}var a=s[1].element;function r(l){let c={callback:l[13]};return l[0]!==void 0&&(c.showText=l[0]),{props:c}}return a&&(e=new a(r(s)),X.push(()=>ve(e,"showText",o))),{c(){e&&Z(e.$$.fragment),n=B()},l(l){e&&ue(e.$$.fragment,l),n=B()},m(l,c){e&&te(e,l,c),m(l,n,c),i=!0},p(l,c){const u={};if(c&2&&(u.callback=l[13]),!t&&c&1&&(t=!0,u.showText=l[0],$e(()=>t=!1)),a!==(a=l[1].element)){if(e){se();const f=e;S(f.$$.fragment,1,0,()=>{ne(f,1)}),ie()}a?(e=new a(r(l)),X.push(()=>ve(e,"showText",o)),Z(e.$$.fragment),k(e.$$.fragment,1),te(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(l){i||(e&&k(e.$$.fragment,l),i=!0)},o(l){e&&S(e.$$.fragment,l),i=!1},d(l){l&&_(n),e&&ne(e,l)}}}function An(s){var n,i;let e,t=((i=(n=s[1])==null?void 0:n.nextActions)==null?void 0:i.length)&&ot(s);return{c(){t&&t.c(),e=B()},l(o){t&&t.l(o),e=B()},m(o,a){t&&t.m(o,a),m(o,e,a)},p(o,a){var r,l;((l=(r=o[1])==null?void 0:r.nextActions)==null?void 0:l.length)?t?(t.p(o,a),a&2&&k(t,1)):(t=ot(o),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i(o){k(t)},o:w,d(o){t&&t.d(o),o&&_(e)}}}function zn(s){let e,t,n,i;return{c(){e=v("button"),t=I("Starten")},l(o){e=y(o,"BUTTON",{});var a=T(e);t=H(a,"Starten"),a.forEach(_)},m(o,a){m(o,e,a),z(e,t),n||(i=O(e,"click",s[11]),n=!0)},p:w,i:w,o:w,d(o){o&&_(e),n=!1,i()}}}function ot(s){let e,t=s[1].nextActions,n=[];for(let i=0;i<t.length;i+=1)n[i]=at(nt(s,t,i));return{c(){e=v("div");for(let i=0;i<n.length;i+=1)n[i].c()},l(i){e=y(i,"DIV",{});var o=T(e);for(let a=0;a<n.length;a+=1)n[a].l(o);o.forEach(_)},m(i,o){m(i,e,o);for(let a=0;a<n.length;a+=1)n[a].m(e,null)},p(i,o){if(o&2){t=i[1].nextActions;let a;for(a=0;a<t.length;a+=1){const r=nt(i,t,a);n[a]?(n[a].p(r,o),k(n[a],1)):(n[a]=at(r),n[a].c(),k(n[a],1),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},i(i){for(let o=0;o<t.length;o+=1)k(n[o])},o:w,d(i){i&&_(e),we(n,i)}}}function at(s){let e,t=s[24].name+"",n,i,o,a;function r(){return s[12](s[24])}return{c(){e=v("button"),n=I(t)},l(l){e=y(l,"BUTTON",{});var c=T(e);n=H(c,t),c.forEach(_)},m(l,c){m(l,e,c),z(e,n),o||(a=O(e,"click",r),o=!0)},p(l,c){s=l,c&2&&t!==(t=s[24].name+"")&&ge(n,t)},i(l){i||ce(()=>{i=me(e,J,{duration:200,delay:200*s[26]}),i.start()})},o:w,d(l){l&&_(e),o=!1,a()}}}function Tn(s){let e,t,n,i,o;const a=[xn,kn],r=[];function l(c,u){return c[7]?0:1}return t=l(s),n=r[t]=a[t](s),{c(){e=$(),n.c(),i=B(),this.h()},l(c){Rt('[data-svelte="svelte-tqpvny"]',document.head).forEach(_),e=F(c),n.l(c),i=B(),this.h()},h(){document.title="Dungeon Entry"},m(c,u){m(c,e,u),r[t].m(c,u),m(c,i,u),o=!0},p(c,[u]){let f=t;t=l(c),t===f?r[t].p(c,u):(se(),S(r[f],1,1,()=>{r[f]=null}),ie(),n=r[t],n?n.p(c,u):(n=r[t]=a[t](c),n.c()),k(n,1),n.m(i.parentNode,i))},i(c){o||(k(n),o=!0)},o(c){S(n),o=!1},d(c){c&&_(e),r[t].d(c),c&&_(i)}}}const Re=500;function Mn(s,e,t){let n,i,o,a,r,l=w,c=()=>(l(),l=Dt(i,M=>t(8,r=M)),i);ye(s,Ge,M=>t(1,o=M)),ye(s,Ue,M=>t(7,a=M)),s.$$.on_destroy.push(()=>l());let u;const f=new Ce,d=new Y(12626431,.8);d.position.set(2.5,2.5,2),f.add(d);const h=new Y(16765393,.8);h.position.set(-2.5,2.5,2),f.add(h);const p=new Y(16777215,1);p.position.set(1,1,-1.5),f.add(p);let g=!0;const A=Re;let x=0,E=0,V=!1;const L=new Oe(50,Re/A,.1,1e3);L.position.set(0,0,1);let R;async function W(){const M=await Je.loadHat(),he=M.scene.children[0].children[1],ae=M.scene.children[0].children[0];R.setSkeleton(ae),he.geometry.computeBoundingBox();const K=new St,le=he.geometry.boundingBox;le.getCenter(K),L.position.x=K.x,L.position.y=K.y;const dt=(le.max.y-K.y)*4/2/Math.tan(Math.PI*L.fov/360);L.position.z=dt,f.add(M.scene),t(3,V=!0)}re(()=>{oe.init(),W();const M=new Ve({canvas:u,alpha:!0});M.setSize(Re,A),t(4,R=new rn({scene:f,renderer:M,camera:L})),nn(R).setActive();function ae(le){requestAnimationFrame(ae),R==null||R.update(le),x=N(oe.x,x,.1),E=N(oe.y,E,.1),L.position.x=x*-.8,L.position.y=E*.3+.1,L.lookAt(0,.2,0),K()}function K(){M.render(f,L)}ae(0)});function q(M){X[M?"unshift":"push"](()=>{u=M,t(2,u)})}const lt=()=>{R.params.wiggleRim<1&&(t(4,R.params.wiggleRim=5,R),t(4,R.params.wiggleEyes=1,R),setTimeout(()=>{t(4,R.params.wiggleRim=0,R),t(4,R.params.wiggleEyes=0,R)},1e3))},rt=()=>o.start(),ct=M=>M.action.start(),ut=M=>{o.handleElementCallback(M)};function ft(M){g=M,t(0,g)}return s.$$.update=()=>{s.$$.dirty&1&&t(6,n=g===!0||g===void 0),s.$$.dirty&2&&c(t(5,i=o&&o.state))},[g,o,u,V,R,i,n,a,r,q,lt,rt,ct,ut,ft]}class Hn extends U{constructor(e){super();j(this,e,Mn,Tn,P,{})}}export{Hn as default};
