import{S as Ee,i as qe,s as ye,e as m,t as D,k as N,l as Ae,c as b,a as w,g as I,d as u,n as P,b as p,f as E,G as v,h as Y,H as U,ab as ce,al as vt,ai as Ue,ap as Z,Y as De,aa as G,O as ue,N as We,P as mt,A as bt,_ as le,$ as _e,I as Ie,j as oe,m as re,F as ie,o as ae,a0 as de,J as Te,K as ze,L as je,x as B,U as Qe,X as gt,W as wt,u as M,v as fe,ah as kt,w as He,V as Je,r as Ke,ag as Le}from"../chunks/vendor-4e2f73f3.js";import{q as Xe,l as Ge,u as Et}from"../chunks/stores-182682cd.js";import{p as Re,d as qt}from"../chunks/index-21c51c30.js";import{s as Ye}from"../chunks/pointerStore-e22cf63f.js";import{T as yt}from"../chunks/Crest.svelte_svelte_type_style_lang-238b461c.js";import{C as At}from"../chunks/Crest-665c9bfc.js";function Ze(l,e,s){const t=l.slice();return t[19]=e[s],t[23]=s,t}function xe(l,e,s){const t=l.slice();return t[19]=e[s],t}function et(l,e,s){const t=l.slice();return t[16]=e[s],t}function Vt(l){let e,s=l[1].answers.sort(lt),t=[];for(let n=0;n<s.length;n+=1)t[n]=tt(Ze(l,s,n));return{c(){e=m("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=b(n,"DIV",{class:!0});var i=w(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(u),this.h()},h(){p(e,"class","vote-wrapper svelte-13h57us")},m(n,i){E(n,e,i);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(n,i){if(i&130){s=n[1].answers.sort(lt);let o;for(o=0;o<s.length;o+=1){const a=Ze(n,s,o);t[o]?t[o].p(a,i):(t[o]=tt(a),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(n){n&&u(e),De(t,n)}}}function St(l){let e,s,t,n,i=l[1].answers,o=[];for(let a=0;a<i.length;a+=1)o[a]=st(xe(l,i,a));return{c(){e=m("p"),s=D("Vote for the best answer"),t=N(),n=m("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=b(a,"P",{class:!0});var f=w(e);s=I(f,"Vote for the best answer"),f.forEach(u),t=P(a),n=b(a,"DIV",{class:!0});var r=w(n);for(let c=0;c<o.length;c+=1)o[c].l(r);r.forEach(u),this.h()},h(){p(e,"class","svelte-13h57us"),p(n,"class","vote-wrapper svelte-13h57us")},m(a,f){E(a,e,f),v(e,s),E(a,t,f),E(a,n,f);for(let r=0;r<o.length;r+=1)o[r].m(n,null)},p(a,f){if(f&74){i=a[1].answers;let r;for(r=0;r<i.length;r+=1){const c=xe(a,i,r);o[r]?o[r].p(c,f):(o[r]=st(c),o[r].c(),o[r].m(n,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=i.length}},d(a){a&&u(e),a&&u(t),a&&u(n),De(o,a)}}}function $t(l){let e,s,t,n,i,o,a;return{c(){e=m("textarea"),s=N(),t=m("button"),n=D("abschicken"),this.h()},l(f){e=b(f,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),w(e).forEach(u),s=P(f),t=b(f,"BUTTON",{});var r=w(t);n=I(r,"abschicken"),r.forEach(u),this.h()},h(){var f;p(e,"name",""),p(e,"id",""),p(e,"cols","30"),p(e,"rows","10"),p(e,"class","svelte-13h57us"),t.disabled=i=!((f=l[0])==null?void 0:f.length)},m(f,r){E(f,e,r),We(e,l[0]),E(f,s,r),E(f,t,r),v(t,n),o||(a=[ue(e,"input",l[10]),ue(t,"click",l[11])],o=!0)},p(f,r){var c;r&1&&We(e,f[0]),r&1&&i!==(i=!((c=f[0])==null?void 0:c.length))&&(t.disabled=i)},d(f){f&&u(e),f&&u(s),f&&u(t),o=!1,mt(a)}}}function Ct(l){let e,s=l[1].answers,t=[];for(let n=0;n<s.length;n+=1)t[n]=nt(et(l,s,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=Ae()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);e=Ae()},m(n,i){for(let o=0;o<t.length;o+=1)t[o].m(n,i);E(n,e,i)},p(n,i){if(i&26){s=n[1].answers;let o;for(o=0;o<s.length;o+=1){const a=et(n,s,o);t[o]?t[o].p(a,i):(t[o]=nt(a),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(n){De(t,n),n&&u(e)}}}function Nt(l){let e,s,t=l[7](l[19].userId)+"",n,i;return{c(){e=m("br"),s=D(`
					(`),n=D(t),i=D(")")},l(o){e=b(o,"BR",{}),s=I(o,`
					(`),n=I(o,t),i=I(o,")")},m(o,a){E(o,e,a),E(o,s,a),E(o,n,a),E(o,i,a)},p(o,a){a&2&&t!==(t=o[7](o[19].userId)+"")&&Y(n,t)},d(o){o&&u(e),o&&u(s),o&&u(n),o&&u(i)}}}function tt(l){let e,s=l[19].votes.length+"",t,n,i,o=l[19].value+"",a,f,r,c=l[23]===0&&Nt(l);return{c(){e=m("p"),t=D(s),n=N(),i=m("p"),a=D(o),f=N(),c&&c.c(),r=N(),this.h()},l(_){e=b(_,"P",{class:!0});var h=w(e);t=I(h,s),h.forEach(u),n=P(_),i=b(_,"P",{class:!0});var g=w(i);a=I(g,o),f=P(g),c&&c.l(g),r=P(g),g.forEach(u),this.h()},h(){p(e,"class","vote-amount svelte-13h57us"),p(i,"class","vote-value svelte-13h57us")},m(_,h){E(_,e,h),v(e,t),E(_,n,h),E(_,i,h),v(i,a),v(i,f),c&&c.m(i,null),v(i,r)},p(_,h){h&2&&s!==(s=_[19].votes.length+"")&&Y(t,s),h&2&&o!==(o=_[19].value+"")&&Y(a,o),_[23]===0&&c.p(_,h)},d(_){_&&u(e),_&&u(n),_&&u(i),c&&c.d()}}}function st(l){let e,s=(l[3].vote!==l[19].id?"\u2610":"\u2612")+"",t,n,i,o=l[19].value+"",a,f,r;function c(){return l[12](l[19])}return{c(){e=m("button"),t=D(s),n=N(),i=m("p"),a=D(o),this.h()},l(_){e=b(_,"BUTTON",{class:!0});var h=w(e);t=I(h,s),h.forEach(u),n=P(_),i=b(_,"P",{class:!0});var g=w(i);a=I(g,o),g.forEach(u),this.h()},h(){p(e,"class","vote-button svelte-13h57us"),G(e,"selected",l[3].vote===l[19].id),p(i,"class","vote-value svelte-13h57us")},m(_,h){E(_,e,h),v(e,t),E(_,n,h),E(_,i,h),v(i,a),f||(r=ue(e,"click",c),f=!0)},p(_,h){l=_,h&10&&s!==(s=(l[3].vote!==l[19].id?"\u2610":"\u2612")+"")&&Y(t,s),h&10&&G(e,"selected",l[3].vote===l[19].id),h&2&&o!==(o=l[19].value+"")&&Y(a,o)},d(_){_&&u(e),_&&u(n),_&&u(i),f=!1,r()}}}function nt(l){let e,s=l[16].value+"",t,n,i;function o(){return l[9](l[16])}return{c(){e=m("button"),t=D(s),this.h()},l(a){e=b(a,"BUTTON",{class:!0});var f=w(e);t=I(f,s),f.forEach(u),this.h()},h(){var a,f,r;p(e,"class","answer svelte-13h57us"),G(e,"showAnswer",(a=l[1])==null?void 0:a.correctAnswer),G(e,"correct",l[16].id===((f=l[1])==null?void 0:f.correctAnswer)),G(e,"selected",((r=l[3])==null?void 0:r.aid)===l[16].id)},m(a,f){E(a,e,f),v(e,t),n||(i=ue(e,"click",o),n=!0)},p(a,f){var r,c,_;l=a,f&2&&s!==(s=l[16].value+"")&&Y(t,s),f&2&&G(e,"showAnswer",(r=l[1])==null?void 0:r.correctAnswer),f&2&&G(e,"correct",l[16].id===((c=l[1])==null?void 0:c.correctAnswer)),f&10&&G(e,"selected",((_=l[3])==null?void 0:_.aid)===l[16].id)},d(a){a&&u(e),n=!1,i()}}}function Pt(l){let e,s=l[1].description+"",t,n,i;function o(r,c){if(r[1].type==="multiple")return Ct;if(r[1].state==="open")return $t;if(r[1].state==="voting-open")return St;if(r[1].state==="closed")return Vt}let a=o(l),f=a&&a(l);return{c(){e=m("p"),t=D(s),n=N(),f&&f.c(),i=Ae(),this.h()},l(r){e=b(r,"P",{class:!0});var c=w(e);t=I(c,s),c.forEach(u),n=P(r),f&&f.l(r),i=Ae(),this.h()},h(){p(e,"class","description svelte-13h57us")},m(r,c){E(r,e,c),v(e,t),E(r,n,c),f&&f.m(r,c),E(r,i,c)},p(r,[c]){c&2&&s!==(s=r[1].description+"")&&Y(t,s),a===(a=o(r))&&f?f.p(r,c):(f&&f.d(1),f=a&&a(r),f&&(f.c(),f.m(i.parentNode,i)))},i:U,o:U,d(r){r&&u(e),r&&u(n),f&&f.d(r),r&&u(i)}}}const lt=(l,e)=>l.votes.length>e.votes.length?-1:1;function Dt(l,e,s){let t,n,i=U,o=()=>(i(),i=Ue(c,q=>s(3,n=q)),c),a;ce(l,Xe,q=>s(8,a=q)),l.$$.on_destroy.push(()=>i());const f=vt();let{question:r}=e;const c=Ge("active-question",{qid:"",aid:"",value:"",vote:""});o();let{textValue:_}=e;function h(q){q!==n.qid&&r.state==="open"&&(Z(c,n.qid=r.id,n),Z(c,n.aid=q,n),f("answer",q))}function g(q){f("text",q)}function d(q){Z(c,n.vote=q,n),f("vote",q)}function S(q){const z=t.find($=>$.id===q);return z?z==null?void 0:z.name:""}const V=q=>h(q.id);function T(){_=this.value,s(0,_)}const A=()=>g(_),R=q=>d(q.id);return l.$$set=q=>{"question"in q&&s(1,r=q.question),"textValue"in q&&s(0,_=q.textValue)},l.$$.update=()=>{l.$$.dirty&256&&(t=a.users),l.$$.dirty&10&&(r==null||r.correctAnswer,n.aid)},[_,r,c,n,h,g,d,S,a,V,T,A,R]}class It extends Ee{constructor(e){super();qe(this,e,Dt,Pt,ye,{question:1,questionStore:2,textValue:0})}get questionStore(){return this.$$.ctx[2]}}function Tt(l){let e;return{c(){e=m("canvas"),this.h()},l(s){e=b(s,"CANVAS",{width:!0,height:!0,style:!0,class:!0}),w(e).forEach(u),this.h()},h(){p(e,"width",l[0]),p(e,"height",l[1]),p(e,"style","transform: translateZ(var(--z))"),p(e,"class","svelte-m0dfni")},m(s,t){E(s,e,t),l[5](e)},p(s,[t]){t&1&&p(e,"width",s[0]),t&2&&p(e,"height",s[1])},i:U,o:U,d(s){s&&u(e),l[5](null)}}}const he=9;function zt(l,e,s){let t,n;ce(l,Ye,A=>s(9,n=A));let{width:i=200}=e,{height:o=400}=e,{amount:a=200}=e,f,r;function c(A,R){t.splice(A,R.length,...R)}function _(A){return t.slice(A,A+he)}const h=()=>Math.random();function g(){for(let A=0;A<t.length-he;A+=he){const R=i/2,q=o-10,z=5+Math.random()*7,$=z/12,W=(h()-.5)*($*$)*5,Q=1+Math.random()*5,F=1+Math.random()*5,H=Math.random(),y=Math.random()*.1,j=.1+Math.random()*.4;c(A,[R,q,W,z,Q,F,H,y,j])}d||(d=!0,V())}let d=!1;function S(){g()}function V(){if(d)requestAnimationFrame(V);else{r.clearRect(0,0,i,o);return}r.clearRect(0,0,i,o);const A=n.x;n.y;let R=0;for(let q=0;q<a;q++){let[z,$,W,Q,F,H,y,j,O]=_(q*he);if(z===0)continue;R++;const pe=O+y/10%.5;r.fillStyle=`hsl(34, 100%, ${pe*100}%, 1)`,r.save(),r.translate(z+F/2,$+H/2),r.rotate(y),r.fillRect(-F/2,-H/2,F,H),r.restore(),z-=W-A,$-=Q-.2,Q>-2&&(Q-=.2),y+=j,$>o&&(z=0),c(q*he,[z,$,W,Q,F,H,y,j])}d=R>1}bt(()=>{r=f.getContext("2d")});function T(A){le[A?"unshift":"push"](()=>{f=A,s(2,f)})}return l.$$set=A=>{"width"in A&&s(0,i=A.width),"height"in A&&s(1,o=A.height),"amount"in A&&s(3,a=A.amount)},l.$$.update=()=>{l.$$.dirty&8&&(t=new Array(a*he).fill(null))},[i,o,f,a,S,T]}class ot extends Ee{constructor(e){super();qe(this,e,zt,Tt,ye,{width:0,height:1,amount:3,show:4})}get show(){return this.$$.ctx[4]}}const jt=l=>({}),rt=l=>({}),Rt=l=>({}),it=l=>({}),Bt=l=>({}),at=l=>({});function Ft(l){let e,s;return{c(){e=m("p"),s=D("No Frontside")},l(t){e=b(t,"P",{});var n=w(e);s=I(n,"No Frontside"),n.forEach(u)},m(t,n){E(t,e,n),v(e,s)},d(t){t&&u(e)}}}function Mt(l){let e;return{c(){e=m("p")},l(s){e=b(s,"P",{}),w(e).forEach(u)},m(s,t){E(s,e,t)},d(s){s&&u(e)}}}function Ot(l){let e;return{c(){e=m("span")},l(s){e=b(s,"SPAN",{}),w(e).forEach(u)},m(s,t){E(s,e,t)},d(s){s&&u(e)}}}function Ut(l){let e,s,t,n,i,o,a,f,r,c,_,h,g,d,S,V,T,A,R,q,z,$,W,Q,F,H,y,j,O,pe,se,Ve,ne,ve,Se,$e,J;function ht(k){l[8](k)}let Be={amount:200};l[1]!==void 0&&(Be.show=l[1]),s=new ot({props:Be}),le.push(()=>_e(s,"show",ht));function pt(k){l[9](k)}let Fe={amount:50};l[2]!==void 0&&(Fe.show=l[2]),a=new ot({props:Fe}),le.push(()=>_e(a,"show",pt));const Ce=l[7].front,me=Ie(Ce,l,l[6],at),K=me||Ft(),Ne=l[7].back,be=Ie(Ne,l,l[6],it),L=be||Mt(),Pe=l[7].info,ge=Ie(Pe,l,l[6],rt),X=ge||Ot();return{c(){e=m("div"),t=m("div"),oe(s.$$.fragment),o=N(),f=m("div"),oe(a.$$.fragment),_=N(),h=m("div"),g=m("div"),d=m("span"),S=N(),V=m("span"),T=N(),A=m("span"),R=N(),q=m("span"),z=N(),$=m("div"),W=m("span"),Q=N(),F=m("span"),H=N(),y=m("span"),j=N(),O=m("span"),pe=N(),se=m("div"),K&&K.c(),Ve=N(),ne=m("div"),L&&L.c(),Se=N(),X&&X.c(),this.h()},l(k){e=b(k,"DIV",{class:!0});var C=w(e);t=b(C,"DIV",{style:!0});var we=w(t);re(s.$$.fragment,we),o=P(C),f=b(C,"DIV",{style:!0});var ke=w(f);re(a.$$.fragment,ke),_=P(C),h=b(C,"DIV",{class:!0,style:!0});var x=w(h);g=b(x,"DIV",{class:!0});var ee=w(g);d=b(ee,"SPAN",{class:!0}),w(d).forEach(u),S=P(ee),V=b(ee,"SPAN",{class:!0}),w(V).forEach(u),T=P(ee),A=b(ee,"SPAN",{class:!0}),w(A).forEach(u),R=P(ee),q=b(ee,"SPAN",{class:!0}),w(q).forEach(u),ee.forEach(u),z=P(x),$=b(x,"DIV",{class:!0});var te=w($);W=b(te,"SPAN",{class:!0}),w(W).forEach(u),Q=P(te),F=b(te,"SPAN",{class:!0}),w(F).forEach(u),H=P(te),y=b(te,"SPAN",{class:!0}),w(y).forEach(u),j=P(te),O=b(te,"SPAN",{class:!0}),w(O).forEach(u),te.forEach(u),pe=P(x),se=b(x,"DIV",{class:!0,id:!0});var Me=w(se);K&&K.l(Me),Me.forEach(u),Ve=P(x),ne=b(x,"DIV",{class:!0,id:!0});var Oe=w(ne);L&&L.l(Oe),Oe.forEach(u),x.forEach(u),Se=P(C),X&&X.l(C),C.forEach(u),this.h()},h(){ie(t,"display","contents"),ie(t,"--opacity","0.4"),ie(t,"--z",i=l[0]?"-30px":"30px"),ie(f,"display","contents"),ie(f,"--z",c=l[0]?"-70px":"70px"),p(d,"class","corner tr svelte-eeqrwg"),p(V,"class","corner tl svelte-eeqrwg"),p(A,"class","corner br svelte-eeqrwg"),p(q,"class","corner bl svelte-eeqrwg"),p(g,"class","corner-wrapper svelte-eeqrwg"),p(W,"class","corner tr svelte-eeqrwg"),p(F,"class","corner tl svelte-eeqrwg"),p(y,"class","corner br svelte-eeqrwg"),p(O,"class","corner bl svelte-eeqrwg"),p($,"class","corner-wrapper back svelte-eeqrwg"),p(se,"class","card-face svelte-eeqrwg"),p(se,"id","front"),p(ne,"class","card-face svelte-eeqrwg"),p(ne,"id","back"),p(h,"class","card svelte-eeqrwg"),p(h,"style",ve=`
		--x:${l[4].x*l[3]}deg;
		--y:${l[4].y*-l[3]}deg;
		`),p(e,"class","scene svelte-eeqrwg"),G(e,"flipped",l[0])},m(k,C){E(k,e,C),v(e,t),ae(s,t,null),v(e,o),v(e,f),ae(a,f,null),v(e,_),v(e,h),v(h,g),v(g,d),v(g,S),v(g,V),v(g,T),v(g,A),v(g,R),v(g,q),v(h,z),v(h,$),v($,W),v($,Q),v($,F),v($,H),v($,y),v($,j),v($,O),v(h,pe),v(h,se),K&&K.m(se,null),v(h,Ve),v(h,ne),L&&L.m(ne,null),v(e,Se),X&&X.m(e,null),J=!0},p(k,[C]){C&1&&i!==(i=k[0]?"-30px":"30px")&&ie(t,"--z",i);const we={};!n&&C&2&&(n=!0,we.show=k[1],de(()=>n=!1)),s.$set(we),C&1&&c!==(c=k[0]?"-70px":"70px")&&ie(f,"--z",c);const ke={};!r&&C&4&&(r=!0,ke.show=k[2],de(()=>r=!1)),a.$set(ke),me&&me.p&&(!J||C&64)&&Te(me,Ce,k,k[6],J?je(Ce,k[6],C,Bt):ze(k[6]),at),be&&be.p&&(!J||C&64)&&Te(be,Ne,k,k[6],J?je(Ne,k[6],C,Rt):ze(k[6]),it),(!J||C&24&&ve!==(ve=`
		--x:${k[4].x*k[3]}deg;
		--y:${k[4].y*-k[3]}deg;
		`))&&p(h,"style",ve),ge&&ge.p&&(!J||C&64)&&Te(ge,Pe,k,k[6],J?je(Pe,k[6],C,jt):ze(k[6]),rt),C&1&&G(e,"flipped",k[0])},i(k){J||(B(s.$$.fragment,k),B(a.$$.fragment,k),B(K,k),B(L,k),B(X,k),$e||Qe(()=>{$e=gt(e,wt,{}),$e.start()}),J=!0)},o(k){M(s.$$.fragment,k),M(a.$$.fragment,k),M(K,k),M(L,k),M(X,k),J=!1},d(k){k&&u(e),fe(s),fe(a),K&&K.d(k),L&&L.d(k),X&&X.d(k)}}}function Wt(l,e,s){let t,n;ce(l,Ye,d=>s(4,n=d));let{$$slots:i={},$$scope:o}=e,{flipped:a=!1}=e,f,r,c;const _=()=>{f==null||f(),r==null||r(),c==null||c()};function h(d){f=d,s(1,f)}function g(d){c=d,s(2,c)}return l.$$set=d=>{"flipped"in d&&s(0,a=d.flipped),"$$scope"in d&&s(6,o=d.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&s(3,t=a?1:10)},[a,f,c,t,n,_,o,i,h,g]}class ft extends Ee{constructor(e){super();qe(this,e,Wt,Ut,ye,{flipped:0,showConfetti:5})}get showConfetti(){return this.$$.ctx[5]}}function Qt(l){let e,s;return{c(){e=m("p"),s=D("Quiz Already started")},l(t){e=b(t,"P",{});var n=w(e);s=I(n,"Quiz Already started"),n.forEach(u)},m(t,n){E(t,e,n),v(e,s)},p:U,i:U,o:U,d(t){t&&u(e)}}}function Ht(l){let e,s;return{c(){e=m("p"),s=D("Results")},l(t){e=b(t,"P",{});var n=w(e);s=I(n,"Results"),n.forEach(u)},m(t,n){E(t,e,n),v(e,s)},p:U,i:U,o:U,d(t){t&&u(e)}}}function Jt(l){let e,s,t;function n(o){l[21](o)}let i={flipped:l[1]!=="closed"&&l[5]&&l[1]!=="voting-open",$$slots:{info:[Gt],back:[Xt],front:[Lt]},$$scope:{ctx:l}};return l[0]!==void 0&&(i.showConfetti=l[0]),e=new ft({props:i}),le.push(()=>_e(e,"showConfetti",n)),{c(){oe(e.$$.fragment)},l(o){re(e.$$.fragment,o)},m(o,a){ae(e,o,a),t=!0},p(o,a){const f={};a&34&&(f.flipped=o[1]!=="closed"&&o[5]&&o[1]!=="voting-open"),a&16777278&&(f.$$scope={dirty:a,ctx:o}),!s&&a&1&&(s=!0,f.showConfetti=o[0],de(()=>s=!1)),e.$set(f)},i(o){t||(B(e.$$.fragment,o),t=!0)},o(o){M(e.$$.fragment,o),t=!1},d(o){fe(e,o)}}}function Kt(l){let e,s,t;function n(o){l[18](o)}let i={flipped:l[6],$$slots:{info:[ss],back:[ts],front:[xt]},$$scope:{ctx:l}};return l[0]!==void 0&&(i.showConfetti=l[0]),e=new ft({props:i}),le.push(()=>_e(e,"showConfetti",n)),{c(){oe(e.$$.fragment)},l(o){re(e.$$.fragment,o)},m(o,a){ae(e,o,a),t=!0},p(o,a){const f={};a&64&&(f.flipped=o[6]),a&16777540&&(f.$$scope={dirty:a,ctx:o}),!s&&a&1&&(s=!0,f.showConfetti=o[0],de(()=>s=!1)),e.$set(f)},i(o){t||(B(e.$$.fragment,o),t=!0)},o(o){M(e.$$.fragment,o),t=!1},d(o){fe(e,o)}}}function Lt(l){let e,s,t,n,i;function o(r){l[19](r)}function a(r){l[20](r)}let f={question:l[2].activeQuestion};return l[4]!==void 0&&(f.textValue=l[4]),l[3]!==void 0&&(f.questionStore=l[3]),s=new It({props:f}),le.push(()=>_e(s,"textValue",o)),le.push(()=>_e(s,"questionStore",a)),s.$on("vote",l[12]),s.$on("answer",l[11]),s.$on("text",l[11]),{c(){e=m("div"),oe(s.$$.fragment),this.h()},l(r){e=b(r,"DIV",{slot:!0,class:!0});var c=w(e);re(s.$$.fragment,c),c.forEach(u),this.h()},h(){p(e,"slot","front"),p(e,"class","svelte-bxr61a")},m(r,c){E(r,e,c),ae(s,e,null),i=!0},p(r,c){const _={};c&4&&(_.question=r[2].activeQuestion),!t&&c&16&&(t=!0,_.textValue=r[4],de(()=>t=!1)),!n&&c&8&&(n=!0,_.questionStore=r[3],de(()=>n=!1)),s.$set(_)},i(r){i||(B(s.$$.fragment,r),i=!0)},o(r){M(s.$$.fragment,r),i=!1},d(r){r&&u(e),fe(s)}}}function ct(l){let e,s;return{c(){e=m("p"),s=D("Vote for the best answer")},l(t){e=b(t,"P",{});var n=w(e);s=I(n,"Vote for the best answer"),n.forEach(u)},m(t,n){E(t,e,n),v(e,s)},d(t){t&&u(e)}}}function Xt(l){let e,s=l[1]==="voting-open"&&ct();return{c(){e=m("div"),s&&s.c(),this.h()},l(t){e=b(t,"DIV",{slot:!0});var n=w(e);s&&s.l(n),n.forEach(u),this.h()},h(){p(e,"slot","back")},m(t,n){E(t,e,n),s&&s.m(e,null)},p(t,n){t[1]==="voting-open"?s||(s=ct(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&u(e),s&&s.d()}}}function ut(l){let e,s;return{c(){e=m("p"),s=D("Warte bis die Frage beendet wird.")},l(t){e=b(t,"P",{});var n=w(e);s=I(n,"Warte bis die Frage beendet wird."),n.forEach(u)},m(t,n){E(t,e,n),v(e,s)},d(t){t&&u(e)}}}function Gt(l){let e,s=l[5]&&l[1]!=="closed"&&l[1]!=="voting-open"&&ut();return{c(){e=m("div"),s&&s.c(),this.h()},l(t){e=b(t,"DIV",{slot:!0});var n=w(e);s&&s.l(n),n.forEach(u),this.h()},h(){p(e,"slot","info")},m(t,n){E(t,e,n),s&&s.m(e,null)},p(t,n){t[5]&&t[1]!=="closed"&&t[1]!=="voting-open"?s||(s=ut(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&u(e),s&&s.d()}}}function Yt(l){let e,s=l[2].description+"",t,n,i,o,a,f;return{c(){e=m("h2"),t=D(s),n=N(),i=m("button"),o=D("Beitreten")},l(r){e=b(r,"H2",{});var c=w(e);t=I(c,s),c.forEach(u),n=P(r),i=b(r,"BUTTON",{});var _=w(i);o=I(_,"Beitreten"),_.forEach(u)},m(r,c){E(r,e,c),v(e,t),E(r,n,c),E(r,i,c),v(i,o),a||(f=ue(i,"click",l[10]),a=!0)},p(r,c){c&4&&s!==(s=r[2].description+"")&&Y(t,s)},d(r){r&&u(e),r&&u(n),r&&u(i),a=!1,f()}}}function Zt(l){let e,s;return{c(){e=m("a"),s=D("Need to input your name"),this.h()},l(t){e=b(t,"A",{href:!0,class:!0});var n=w(e);s=I(n,"Need to input your name"),n.forEach(u),this.h()},h(){p(e,"href","/"),p(e,"class","svelte-bxr61a")},m(t,n){E(t,e,n),v(e,s)},p:U,d(t){t&&u(e)}}}function xt(l){let e,s,t,n;function i(f,r){return!f[8].name||!f[8].house?Zt:Yt}let o=i(l),a=o(l);return{c(){e=m("div"),s=m("h1"),t=D("Registration"),n=N(),a.c(),this.h()},l(f){e=b(f,"DIV",{slot:!0,class:!0});var r=w(e);s=b(r,"H1",{});var c=w(s);t=I(c,"Registration"),c.forEach(u),n=P(r),a.l(r),r.forEach(u),this.h()},h(){p(e,"slot","front"),p(e,"class","svelte-bxr61a")},m(f,r){E(f,e,r),v(e,s),v(s,t),v(e,n),a.m(e,null)},p(f,r){o===(o=i(f))&&a?a.p(f,r):(a.d(1),a=o(f),a&&(a.c(),a.m(e,null)))},d(f){f&&u(e),a.d()}}}function _t(l){let e,s;return e=new yt({props:{endsAt:l[2].startsAt,$$slots:{default:[es,({secondsLeft:t})=>({23:t}),({secondsLeft:t})=>t?8388608:0]},$$scope:{ctx:l}}}),{c(){oe(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,n){ae(e,t,n),s=!0},p(t,n){const i={};n&4&&(i.endsAt=t[2].startsAt),n&25165824&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){fe(e,t)}}}function es(l){let e,s=l[23]+"",t;return{c(){e=m("button"),t=D(s)},l(n){e=b(n,"BUTTON",{});var i=w(e);t=I(i,s),i.forEach(u)},m(n,i){E(n,e,i),v(e,t)},p(n,i){i&8388608&&s!==(s=n[23]+"")&&Y(t,s)},d(n){n&&u(e)}}}function ts(l){let e,s,t=l[2].startsAt&&_t(l);return{c(){e=m("div"),t&&t.c(),this.h()},l(n){e=b(n,"DIV",{slot:!0});var i=w(e);t&&t.l(i),i.forEach(u),this.h()},h(){p(e,"slot","back")},m(n,i){E(n,e,i),t&&t.m(e,null),s=!0},p(n,i){n[2].startsAt?t?(t.p(n,i),i&4&&B(t,1)):(t=_t(n),t.c(),B(t,1),t.m(e,null)):t&&(Ke(),M(t,1,1,()=>{t=null}),He())},i(n){s||(B(t),s=!0)},o(n){M(t),s=!1},d(n){n&&u(e),t&&t.d()}}}function dt(l){let e,s;return{c(){e=m("p"),s=D("Warte bis das Quiz beginnt")},l(t){e=b(t,"P",{});var n=w(e);s=I(n,"Warte bis das Quiz beginnt"),n.forEach(u)},m(t,n){E(t,e,n),v(e,s)},d(t){t&&u(e)}}}function ss(l){let e,s=l[6]&&!l[2].startsAt&&dt();return{c(){e=m("div"),s&&s.c(),this.h()},l(t){e=b(t,"DIV",{slot:!0,id:!0,class:!0});var n=w(e);s&&s.l(n),n.forEach(u),this.h()},h(){p(e,"slot","info"),p(e,"id","registration-success"),p(e,"class","svelte-bxr61a")},m(t,n){E(t,e,n),s&&s.m(e,null)},p(t,n){t[6]&&!t[2].startsAt?s||(s=dt(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&u(e),s&&s.d()}}}function ns(l){let e,s,t,n,i,o,a,f,r,c;const _=[Kt,Jt,Ht,Qt],h=[];function g(d,S){var V,T;return d[7]==="registration"?0:d[7]==="running"&&((T=(V=d[2])==null?void 0:V.activeQuestion)==null?void 0:T.id)&&d[6]?1:d[7]==="results"&&d[6]?2:3}return s=g(l),t=h[s]=_[s](l),o=new At({props:{house:l[8].house}}),{c(){e=N(),t.c(),n=N(),i=m("div"),oe(o.$$.fragment),this.h()},l(d){kt('[data-svelte="svelte-aqh7sr"]',document.head).forEach(u),e=P(d),t.l(d),n=P(d),i=b(d,"DIV",{class:!0});var V=w(i);re(o.$$.fragment,V),V.forEach(u),this.h()},h(){document.title="Dungeon Quiz",p(i,"class","crest svelte-bxr61a")},m(d,S){E(d,e,S),h[s].m(d,S),E(d,n,S),E(d,i,S),ae(o,i,null),f=!0,r||(c=ue(window,"keydown",l[13]),r=!0)},p(d,[S]){let V=s;s=g(d),s===V?h[s].p(d,S):(Ke(),M(h[V],1,1,()=>{h[V]=null}),He(),t=h[s],t?t.p(d,S):(t=h[s]=_[s](d),t.c()),B(t,1),t.m(n.parentNode,n));const T={};S&256&&(T.house=d[8].house),o.$set(T)},i(d){f||(B(t),B(o.$$.fragment,d),Qe(()=>{a||(a=Je(i,Le,{duration:5e3},!0)),a.run(1)}),f=!0)},o(d){M(t),M(o.$$.fragment,d),a||(a=Je(i,Le,{duration:5e3},!1)),a.run(0),f=!1},d(d){d&&u(e),h[s].d(d),d&&u(n),d&&u(i),fe(o),d&&a&&a.end(),r=!1,c()}}}function ls(l,e,s){let t,n,i,o,a,f,r,c,_=U,h=()=>(_(),_=Ue(V,y=>s(16,c=y)),V),g,d;ce(l,Xe,y=>s(2,r=y)),ce(l,Et,y=>s(8,d=y)),l.$$.on_destroy.push(()=>_());let S,V;const T=Ge("quiz-user-data",{id:"",qid:"",token:""});ce(l,T,y=>s(17,g=y));let A;async function R(){const j=await(await Re("api/quiz/register",{name:d.name,house:d.house})).json(),O=qt(j.token);Z(T,g.token=j.token,g),Z(T,g.id=O.id,g),Z(T,g.qid=O.qid,g)}async function q({detail:y}){const j=await Re("api/quiz/answer",y,g.token);if(!j.ok)return;const O=await j.json();Z(V,c.qid=n.id,c),Z(V,c.value=y,c),n.type==="voting"&&O.id&&Z(V,c.aid=O.id,c)}async function z({detail:y}){const j=await Re("api/quiz/vote",y,g.token);console.log(await j.json())}function $({key:y}){y==="L"&&console.log(c,r)}function W(y){S=y,s(0,S)}function Q(y){A=y,s(4,A)}function F(y){V=y,h(s(3,V))}function H(y){S=y,s(0,S)}return l.$$.update=()=>{l.$$.dirty&4&&s(7,t=r==null?void 0:r.state),l.$$.dirty&4&&s(14,n=r==null?void 0:r.activeQuestion),l.$$.dirty&16384&&s(1,i=n==null?void 0:n.state),l.$$.dirty&4&&(r==null||r.users),l.$$.dirty&131076&&s(6,o=(g==null?void 0:g.id)&&(g==null?void 0:g.qid)===(r==null?void 0:r.id)),l.$$.dirty&81920&&s(5,a=(n==null?void 0:n.type)==="multiple"?(c==null?void 0:c.qid)===(n==null?void 0:n.id):(c==null?void 0:c.qid)===(n==null?void 0:n.id)&&(c==null?void 0:c.value)),l.$$.dirty&81920&&s(15,f=(n==null?void 0:n.correctAnswer)===(c==null?void 0:c.aid)),l.$$.dirty&32771&&i==="closed"&&f&&setTimeout(()=>{S()},1e3)},[S,i,r,V,A,a,o,t,d,T,R,q,z,$,n,f,c,g,W,Q,F,H]}class us extends Ee{constructor(e){super();qe(this,e,ls,ns,ye,{})}}export{us as default};