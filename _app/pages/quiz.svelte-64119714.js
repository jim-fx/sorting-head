import{S as Ee,i as qe,s as Ve,e as b,t as C,k as N,l as ie,c as g,a as w,g as D,d as u,n as P,b as p,f as k,G as v,h as ne,H as F,N as re,al as ct,ai as We,am as Y,Z as Ie,ab as X,P as ae,O as Je,Q as ut,A as _t,$ as le,a0 as fe,J as je,j as de,m as he,F as oe,o as pe,a1 as ce,K as ze,L as Te,M as Re,x as Z,V as dt,Y as ht,X as pt,u as G,v as ve,ah as vt,w as mt,r as bt}from"../chunks/vendor-ed08ca3a.js";import{q as Ue,l as He,u as gt}from"../chunks/stores-7a010574.js";import{p as Me,d as wt}from"../chunks/index-c3c6fb1e.js";import{s as Ke}from"../chunks/pointerStore-ee6945fb.js";import"../chunks/ws-9a419573.js";function Le(l,e,t){const s=l.slice();return s[19]=e[t],s[23]=t,s}function Xe(l,e,t){const s=l.slice();return s[19]=e[t],s}function Ze(l,e,t){const s=l.slice();return s[16]=e[t],s}function kt(l){let e,t=l[1].answers.sort(xe),s=[];for(let n=0;n<t.length;n+=1)s[n]=Ge(Le(l,t,n));return{c(){e=b("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=g(n,"DIV",{class:!0});var f=w(e);for(let o=0;o<s.length;o+=1)s[o].l(f);f.forEach(u),this.h()},h(){p(e,"class","vote-wrapper svelte-e8ido8")},m(n,f){k(n,e,f);for(let o=0;o<s.length;o+=1)s[o].m(e,null)},p(n,f){if(f&130){t=n[1].answers.sort(xe);let o;for(o=0;o<t.length;o+=1){const r=Le(n,t,o);s[o]?s[o].p(r,f):(s[o]=Ge(r),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(n){n&&u(e),Ie(s,n)}}}function yt(l){let e,t,s,n,f=l[1].answers,o=[];for(let r=0;r<f.length;r+=1)o[r]=Ye(Xe(l,f,r));return{c(){e=b("p"),t=C("Vote for the best answer"),s=N(),n=b("div");for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=g(r,"P",{class:!0});var a=w(e);t=D(a,"Vote for the best answer"),a.forEach(u),s=P(r),n=g(r,"DIV",{class:!0});var i=w(n);for(let c=0;c<o.length;c+=1)o[c].l(i);i.forEach(u),this.h()},h(){p(e,"class","svelte-e8ido8"),p(n,"class","vote-wrapper svelte-e8ido8")},m(r,a){k(r,e,a),v(e,t),k(r,s,a),k(r,n,a);for(let i=0;i<o.length;i+=1)o[i].m(n,null)},p(r,a){if(a&74){f=r[1].answers;let i;for(i=0;i<f.length;i+=1){const c=Xe(r,f,i);o[i]?o[i].p(c,a):(o[i]=Ye(c),o[i].c(),o[i].m(n,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=f.length}},d(r){r&&u(e),r&&u(s),r&&u(n),Ie(o,r)}}}function Et(l){let e,t,s,n,f,o,r;return{c(){e=b("textarea"),t=N(),s=b("button"),n=C("abschicken"),this.h()},l(a){e=g(a,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),w(e).forEach(u),t=P(a),s=g(a,"BUTTON",{});var i=w(s);n=D(i,"abschicken"),i.forEach(u),this.h()},h(){var a;p(e,"name",""),p(e,"id",""),p(e,"cols","30"),p(e,"rows","10"),p(e,"class","svelte-e8ido8"),s.disabled=f=!((a=l[0])==null?void 0:a.length)},m(a,i){k(a,e,i),Je(e,l[0]),k(a,t,i),k(a,s,i),v(s,n),o||(r=[ae(e,"input",l[10]),ae(s,"click",l[11])],o=!0)},p(a,i){var c;i&1&&Je(e,a[0]),i&1&&f!==(f=!((c=a[0])==null?void 0:c.length))&&(s.disabled=f)},d(a){a&&u(e),a&&u(t),a&&u(s),o=!1,ut(r)}}}function qt(l){let e,t=l[1].answers,s=[];for(let n=0;n<t.length;n+=1)s[n]=$e(Ze(l,t,n));return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=ie()},l(n){for(let f=0;f<s.length;f+=1)s[f].l(n);e=ie()},m(n,f){for(let o=0;o<s.length;o+=1)s[o].m(n,f);k(n,e,f)},p(n,f){if(f&26){t=n[1].answers;let o;for(o=0;o<t.length;o+=1){const r=Ze(n,t,o);s[o]?s[o].p(r,f):(s[o]=$e(r),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(n){Ie(s,n),n&&u(e)}}}function Vt(l){let e,t,s=l[7](l[19].userId)+"",n,f;return{c(){e=b("br"),t=C(`
					(`),n=C(s),f=C(")")},l(o){e=g(o,"BR",{}),t=D(o,`
					(`),n=D(o,s),f=D(o,")")},m(o,r){k(o,e,r),k(o,t,r),k(o,n,r),k(o,f,r)},p(o,r){r&2&&s!==(s=o[7](o[19].userId)+"")&&ne(n,s)},d(o){o&&u(e),o&&u(t),o&&u(n),o&&u(f)}}}function Ge(l){let e,t=l[19].votes.length+"",s,n,f,o=l[19].value+"",r,a,i,c=l[23]===0&&Vt(l);return{c(){e=b("p"),s=C(t),n=N(),f=b("p"),r=C(o),a=N(),c&&c.c(),i=N(),this.h()},l(_){e=g(_,"P",{class:!0});var d=w(e);s=D(d,t),d.forEach(u),n=P(_),f=g(_,"P",{class:!0});var h=w(f);r=D(h,o),a=P(h),c&&c.l(h),i=P(h),h.forEach(u),this.h()},h(){p(e,"class","vote-amount svelte-e8ido8"),p(f,"class","vote-value svelte-e8ido8")},m(_,d){k(_,e,d),v(e,s),k(_,n,d),k(_,f,d),v(f,r),v(f,a),c&&c.m(f,null),v(f,i)},p(_,d){d&2&&t!==(t=_[19].votes.length+"")&&ne(s,t),d&2&&o!==(o=_[19].value+"")&&ne(r,o),_[23]===0&&c.p(_,d)},d(_){_&&u(e),_&&u(n),_&&u(f),c&&c.d()}}}function Ye(l){let e,t=(l[3].vote!==l[19].id?"\u2610":"\u2612")+"",s,n,f,o=l[19].value+"",r,a,i;function c(){return l[12](l[19])}return{c(){e=b("button"),s=C(t),n=N(),f=b("p"),r=C(o),this.h()},l(_){e=g(_,"BUTTON",{class:!0});var d=w(e);s=D(d,t),d.forEach(u),n=P(_),f=g(_,"P",{class:!0});var h=w(f);r=D(h,o),h.forEach(u),this.h()},h(){p(e,"class","vote-button svelte-e8ido8"),X(e,"selected",l[3].vote===l[19].id),p(f,"class","vote-value svelte-e8ido8")},m(_,d){k(_,e,d),v(e,s),k(_,n,d),k(_,f,d),v(f,r),a||(i=ae(e,"click",c),a=!0)},p(_,d){l=_,d&10&&t!==(t=(l[3].vote!==l[19].id?"\u2610":"\u2612")+"")&&ne(s,t),d&10&&X(e,"selected",l[3].vote===l[19].id),d&2&&o!==(o=l[19].value+"")&&ne(r,o)},d(_){_&&u(e),_&&u(n),_&&u(f),a=!1,i()}}}function $e(l){let e,t=l[16].value+"",s,n,f;function o(){return l[9](l[16])}return{c(){e=b("button"),s=C(t),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var a=w(e);s=D(a,t),a.forEach(u),this.h()},h(){var r,a,i;p(e,"class","answer svelte-e8ido8"),X(e,"showAnswer",(r=l[1])==null?void 0:r.correctAnswer),X(e,"correct",l[16].id===((a=l[1])==null?void 0:a.correctAnswer)),X(e,"selected",((i=l[3])==null?void 0:i.aid)===l[16].id)},m(r,a){k(r,e,a),v(e,s),n||(f=ae(e,"click",o),n=!0)},p(r,a){var i,c,_;l=r,a&2&&t!==(t=l[16].value+"")&&ne(s,t),a&2&&X(e,"showAnswer",(i=l[1])==null?void 0:i.correctAnswer),a&2&&X(e,"correct",l[16].id===((c=l[1])==null?void 0:c.correctAnswer)),a&10&&X(e,"selected",((_=l[3])==null?void 0:_.aid)===l[16].id)},d(r){r&&u(e),n=!1,f()}}}function At(l){let e,t=l[1].description+"",s,n,f;function o(i,c){if(i[1].type==="multiple")return qt;if(i[1].state==="open")return Et;if(i[1].state==="voting-open")return yt;if(i[1].state==="closed")return kt}let r=o(l),a=r&&r(l);return{c(){e=b("p"),s=C(t),n=N(),a&&a.c(),f=ie(),this.h()},l(i){e=g(i,"P",{class:!0});var c=w(e);s=D(c,t),c.forEach(u),n=P(i),a&&a.l(i),f=ie(),this.h()},h(){p(e,"class","description svelte-e8ido8")},m(i,c){k(i,e,c),v(e,s),k(i,n,c),a&&a.m(i,c),k(i,f,c)},p(i,[c]){c&2&&t!==(t=i[1].description+"")&&ne(s,t),r===(r=o(i))&&a?a.p(i,c):(a&&a.d(1),a=r&&r(i),a&&(a.c(),a.m(f.parentNode,f)))},i:F,o:F,d(i){i&&u(e),i&&u(n),a&&a.d(i),i&&u(f)}}}const xe=(l,e)=>l.votes.length>e.votes.length?-1:1;function St(l,e,t){let s,n,f=F,o=()=>(f(),f=We(c,y=>t(3,n=y)),c),r;re(l,Ue,y=>t(8,r=y)),l.$$.on_destroy.push(()=>f());const a=ct();let{question:i}=e;const c=He("active-question",{qid:"",aid:"",value:"",vote:""});o();let{textValue:_}=e;function d(y){y!==n.qid&&i.state==="open"&&(Y(c,n.qid=i.id,n),Y(c,n.aid=y,n),a("answer",y))}function h(y){a("text",y)}function V(y){Y(c,n.vote=y,n),a("vote",y)}function R(y){const j=s.find(A=>A.id===y);return j?j==null?void 0:j.name:""}const I=y=>d(y.id);function B(){_=this.value,t(0,_)}const q=()=>h(_),T=y=>V(y.id);return l.$$set=y=>{"question"in y&&t(1,i=y.question),"textValue"in y&&t(0,_=y.textValue)},l.$$.update=()=>{l.$$.dirty&256&&(s=r.users),l.$$.dirty&10&&(i==null||i.correctAnswer,n.aid)},[_,i,c,n,d,h,V,R,r,I,B,q,T]}class Nt extends Ee{constructor(e){super();qe(this,e,St,At,Ve,{question:1,questionStore:2,textValue:0})}get questionStore(){return this.$$.ctx[2]}}function Pt(l){let e;return{c(){e=b("canvas"),this.h()},l(t){e=g(t,"CANVAS",{width:!0,height:!0,style:!0,class:!0}),w(e).forEach(u),this.h()},h(){p(e,"width",l[0]),p(e,"height",l[1]),p(e,"style","transform: translateZ(var(--z))"),p(e,"class","svelte-m0dfni")},m(t,s){k(t,e,s),l[5](e)},p(t,[s]){s&1&&p(e,"width",t[0]),s&2&&p(e,"height",t[1])},i:F,o:F,d(t){t&&u(e),l[5](null)}}}const ue=9;function Ct(l,e,t){let s,n;re(l,Ke,q=>t(9,n=q));let{width:f=200}=e,{height:o=400}=e,{amount:r=200}=e,a,i;function c(q,T){s.splice(q,T.length,...T)}function _(q){return s.slice(q,q+ue)}const d=()=>Math.random();function h(){console.log("INit Particles");for(let q=0;q<s.length-ue;q+=ue){const T=f/2,y=o-10,j=5+Math.random()*7,A=j/12,Q=(d()-.5)*(A*A)*5,W=1+Math.random()*5,M=1+Math.random()*5,J=Math.random(),E=Math.random()*.1,z=.1+Math.random()*.4;c(q,[T,y,Q,j,W,M,J,E,z])}V||(V=!0,I())}let V=!1;function R(){h()}function I(){if(V)requestAnimationFrame(I);else{i.clearRect(0,0,f,o);return}i.clearRect(0,0,f,o);const q=n.x;n.y;let T=0;for(let y=0;y<r;y++){let[j,A,Q,W,M,J,E,z,O]=_(y*ue);if(j===0)continue;T++;const _e=O+E/10%.5;i.fillStyle=`hsl(34, 100%, ${_e*100}%, 1)`,i.save(),i.translate(j+M/2,A+J/2),i.rotate(E),i.fillRect(-M/2,-J/2,M,J),i.restore(),j-=Q-q,A-=W-.2,W>-2&&(W-=.2),E+=z,A>o&&(j=0),c(y*ue,[j,A,Q,W,M,J,E,z])}V=T>1}_t(()=>{i=a.getContext("2d")});function B(q){le[q?"unshift":"push"](()=>{a=q,t(2,a)})}return l.$$set=q=>{"width"in q&&t(0,f=q.width),"height"in q&&t(1,o=q.height),"amount"in q&&t(3,r=q.amount)},l.$$.update=()=>{l.$$.dirty&8&&(s=new Array(r*ue).fill(null))},[f,o,a,r,R,B]}class et extends Ee{constructor(e){super();qe(this,e,Ct,Pt,Ve,{width:0,height:1,amount:3,show:4})}get show(){return this.$$.ctx[4]}}const Dt=l=>({}),tt=l=>({}),It=l=>({}),st=l=>({}),jt=l=>({}),nt=l=>({});function zt(l){let e,t;return{c(){e=b("p"),t=C("No Frontside")},l(s){e=g(s,"P",{});var n=w(e);t=D(n,"No Frontside"),n.forEach(u)},m(s,n){k(s,e,n),v(e,t)},d(s){s&&u(e)}}}function Tt(l){let e;return{c(){e=b("p")},l(t){e=g(t,"P",{}),w(e).forEach(u)},m(t,s){k(t,e,s)},d(t){t&&u(e)}}}function Rt(l){let e;return{c(){e=b("span")},l(t){e=g(t,"SPAN",{}),w(e).forEach(u)},m(t,s){k(t,e,s)},d(t){t&&u(e)}}}function Mt(l){let e,t,s,n,f,o,r,a,i,c,_,d,h,V,R,I,B,q,T,y,j,A,Q,W,M,J,E,z,O,_e,te,Ae,se,me,Se,Ne,U;function at(m){l[8](m)}let Fe={amount:200};l[1]!==void 0&&(Fe.show=l[1]),t=new et({props:Fe}),le.push(()=>fe(t,"show",at));function ft(m){l[9](m)}let Be={amount:50};l[2]!==void 0&&(Be.show=l[2]),r=new et({props:Be}),le.push(()=>fe(r,"show",ft));const Pe=l[7].front,be=je(Pe,l,l[6],nt),H=be||zt(),Ce=l[7].back,ge=je(Ce,l,l[6],st),K=ge||Tt(),De=l[7].info,we=je(De,l,l[6],tt),L=we||Rt();return{c(){e=b("div"),s=b("div"),de(t.$$.fragment),o=N(),a=b("div"),de(r.$$.fragment),_=N(),d=b("div"),h=b("div"),V=b("span"),R=N(),I=b("span"),B=N(),q=b("span"),T=N(),y=b("span"),j=N(),A=b("div"),Q=b("span"),W=N(),M=b("span"),J=N(),E=b("span"),z=N(),O=b("span"),_e=N(),te=b("div"),H&&H.c(),Ae=N(),se=b("div"),K&&K.c(),Se=N(),L&&L.c(),this.h()},l(m){e=g(m,"DIV",{class:!0});var S=w(e);s=g(S,"DIV",{style:!0});var ke=w(s);he(t.$$.fragment,ke),o=P(S),a=g(S,"DIV",{style:!0});var ye=w(a);he(r.$$.fragment,ye),_=P(S),d=g(S,"DIV",{class:!0,style:!0});var $=w(d);h=g($,"DIV",{class:!0});var x=w(h);V=g(x,"SPAN",{class:!0}),w(V).forEach(u),R=P(x),I=g(x,"SPAN",{class:!0}),w(I).forEach(u),B=P(x),q=g(x,"SPAN",{class:!0}),w(q).forEach(u),T=P(x),y=g(x,"SPAN",{class:!0}),w(y).forEach(u),x.forEach(u),j=P($),A=g($,"DIV",{class:!0});var ee=w(A);Q=g(ee,"SPAN",{class:!0}),w(Q).forEach(u),W=P(ee),M=g(ee,"SPAN",{class:!0}),w(M).forEach(u),J=P(ee),E=g(ee,"SPAN",{class:!0}),w(E).forEach(u),z=P(ee),O=g(ee,"SPAN",{class:!0}),w(O).forEach(u),ee.forEach(u),_e=P($),te=g($,"DIV",{class:!0,id:!0});var Oe=w(te);H&&H.l(Oe),Oe.forEach(u),Ae=P($),se=g($,"DIV",{class:!0,id:!0});var Qe=w(se);K&&K.l(Qe),Qe.forEach(u),$.forEach(u),Se=P(S),L&&L.l(S),S.forEach(u),this.h()},h(){oe(s,"display","contents"),oe(s,"--opacity","0.4"),oe(s,"--z",f=l[0]?"-30px":"30px"),oe(a,"display","contents"),oe(a,"--z",c=l[0]?"-70px":"70px"),p(V,"class","corner tr svelte-14m8728"),p(I,"class","corner tl svelte-14m8728"),p(q,"class","corner br svelte-14m8728"),p(y,"class","corner bl svelte-14m8728"),p(h,"class","corner-wrapper svelte-14m8728"),p(Q,"class","corner tr svelte-14m8728"),p(M,"class","corner tl svelte-14m8728"),p(E,"class","corner br svelte-14m8728"),p(O,"class","corner bl svelte-14m8728"),p(A,"class","corner-wrapper back svelte-14m8728"),p(te,"class","card-face svelte-14m8728"),p(te,"id","front"),p(se,"class","card-face svelte-14m8728"),p(se,"id","back"),p(d,"class","card svelte-14m8728"),p(d,"style",me=`
		--x:${l[4].x*l[3]}deg;
		--y:${l[4].y*-l[3]}deg;
		`),p(e,"class","scene svelte-14m8728"),X(e,"flipped",l[0])},m(m,S){k(m,e,S),v(e,s),pe(t,s,null),v(e,o),v(e,a),pe(r,a,null),v(e,_),v(e,d),v(d,h),v(h,V),v(h,R),v(h,I),v(h,B),v(h,q),v(h,T),v(h,y),v(d,j),v(d,A),v(A,Q),v(A,W),v(A,M),v(A,J),v(A,E),v(A,z),v(A,O),v(d,_e),v(d,te),H&&H.m(te,null),v(d,Ae),v(d,se),K&&K.m(se,null),v(e,Se),L&&L.m(e,null),U=!0},p(m,[S]){S&1&&f!==(f=m[0]?"-30px":"30px")&&oe(s,"--z",f);const ke={};!n&&S&2&&(n=!0,ke.show=m[1],ce(()=>n=!1)),t.$set(ke),S&1&&c!==(c=m[0]?"-70px":"70px")&&oe(a,"--z",c);const ye={};!i&&S&4&&(i=!0,ye.show=m[2],ce(()=>i=!1)),r.$set(ye),be&&be.p&&(!U||S&64)&&ze(be,Pe,m,m[6],U?Re(Pe,m[6],S,jt):Te(m[6]),nt),ge&&ge.p&&(!U||S&64)&&ze(ge,Ce,m,m[6],U?Re(Ce,m[6],S,It):Te(m[6]),st),(!U||S&24&&me!==(me=`
		--x:${m[4].x*m[3]}deg;
		--y:${m[4].y*-m[3]}deg;
		`))&&p(d,"style",me),we&&we.p&&(!U||S&64)&&ze(we,De,m,m[6],U?Re(De,m[6],S,Dt):Te(m[6]),tt),S&1&&X(e,"flipped",m[0])},i(m){U||(Z(t.$$.fragment,m),Z(r.$$.fragment,m),Z(H,m),Z(K,m),Z(L,m),Ne||dt(()=>{Ne=ht(e,pt,{}),Ne.start()}),U=!0)},o(m){G(t.$$.fragment,m),G(r.$$.fragment,m),G(H,m),G(K,m),G(L,m),U=!1},d(m){m&&u(e),ve(t),ve(r),H&&H.d(m),K&&K.d(m),L&&L.d(m)}}}function Ft(l,e,t){let s,n;re(l,Ke,V=>t(4,n=V));let{$$slots:f={},$$scope:o}=e,{flipped:r=!1}=e,a,i,c;const _=()=>{a==null||a(),i==null||i(),c==null||c()};function d(V){a=V,t(1,a)}function h(V){c=V,t(2,c)}return l.$$set=V=>{"flipped"in V&&t(0,r=V.flipped),"$$scope"in V&&t(6,o=V.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&t(3,s=r?1:10)},[r,a,c,s,n,_,o,f,d,h]}class lt extends Ee{constructor(e){super();qe(this,e,Ft,Mt,Ve,{flipped:0,showConfetti:5})}get showConfetti(){return this.$$.ctx[5]}}function Bt(l){let e,t;return{c(){e=b("p"),t=C("Quiz Already started")},l(s){e=g(s,"P",{});var n=w(e);t=D(n,"Quiz Already started"),n.forEach(u)},m(s,n){k(s,e,n),v(e,t)},p:F,i:F,o:F,d(s){s&&u(e)}}}function Ot(l){let e,t;return{c(){e=b("p"),t=C("Results")},l(s){e=g(s,"P",{});var n=w(e);t=D(n,"Results"),n.forEach(u)},m(s,n){k(s,e,n),v(e,t)},p:F,i:F,o:F,d(s){s&&u(e)}}}function Qt(l){let e,t,s;function n(o){l[21](o)}let f={flipped:l[1]!=="closed"&&l[5]&&l[1]!=="voting-open",$$slots:{info:[Ht],back:[Ut],front:[Jt]},$$scope:{ctx:l}};return l[0]!==void 0&&(f.showConfetti=l[0]),e=new lt({props:f}),le.push(()=>fe(e,"showConfetti",n)),{c(){de(e.$$.fragment)},l(o){he(e.$$.fragment,o)},m(o,r){pe(e,o,r),s=!0},p(o,r){const a={};r&34&&(a.flipped=o[1]!=="closed"&&o[5]&&o[1]!=="voting-open"),r&8388670&&(a.$$scope={dirty:r,ctx:o}),!t&&r&1&&(t=!0,a.showConfetti=o[0],ce(()=>t=!1)),e.$set(a)},i(o){s||(Z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){ve(e,o)}}}function Wt(l){let e,t,s;function n(o){l[18](o)}let f={flipped:l[6],$$slots:{info:[Zt],front:[Xt]},$$scope:{ctx:l}};return l[0]!==void 0&&(f.showConfetti=l[0]),e=new lt({props:f}),le.push(()=>fe(e,"showConfetti",n)),{c(){de(e.$$.fragment)},l(o){he(e.$$.fragment,o)},m(o,r){pe(e,o,r),s=!0},p(o,r){const a={};r&64&&(a.flipped=o[6]),r&8388928&&(a.$$scope={dirty:r,ctx:o}),!t&&r&1&&(t=!0,a.showConfetti=o[0],ce(()=>t=!1)),e.$set(a)},i(o){s||(Z(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){ve(e,o)}}}function Jt(l){let e,t,s,n,f;function o(i){l[19](i)}function r(i){l[20](i)}let a={question:l[2].activeQuestion};return l[4]!==void 0&&(a.textValue=l[4]),l[3]!==void 0&&(a.questionStore=l[3]),t=new Nt({props:a}),le.push(()=>fe(t,"textValue",o)),le.push(()=>fe(t,"questionStore",r)),t.$on("vote",l[12]),t.$on("answer",l[11]),t.$on("text",l[11]),{c(){e=b("div"),de(t.$$.fragment),this.h()},l(i){e=g(i,"DIV",{slot:!0,class:!0});var c=w(e);he(t.$$.fragment,c),c.forEach(u),this.h()},h(){p(e,"slot","front"),p(e,"class","svelte-1jxik5q")},m(i,c){k(i,e,c),pe(t,e,null),f=!0},p(i,c){const _={};c&4&&(_.question=i[2].activeQuestion),!s&&c&16&&(s=!0,_.textValue=i[4],ce(()=>s=!1)),!n&&c&8&&(n=!0,_.questionStore=i[3],ce(()=>n=!1)),t.$set(_)},i(i){f||(Z(t.$$.fragment,i),f=!0)},o(i){G(t.$$.fragment,i),f=!1},d(i){i&&u(e),ve(t)}}}function ot(l){let e,t;return{c(){e=b("p"),t=C("Vote for the best answer")},l(s){e=g(s,"P",{});var n=w(e);t=D(n,"Vote for the best answer"),n.forEach(u)},m(s,n){k(s,e,n),v(e,t)},d(s){s&&u(e)}}}function Ut(l){let e,t=l[1]==="voting-open"&&ot();return{c(){e=b("div"),t&&t.c(),this.h()},l(s){e=g(s,"DIV",{slot:!0});var n=w(e);t&&t.l(n),n.forEach(u),this.h()},h(){p(e,"slot","back")},m(s,n){k(s,e,n),t&&t.m(e,null)},p(s,n){s[1]==="voting-open"?t||(t=ot(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&u(e),t&&t.d()}}}function it(l){let e,t;return{c(){e=b("p"),t=C("Warte bis die Frage beendet wird.")},l(s){e=g(s,"P",{});var n=w(e);t=D(n,"Warte bis die Frage beendet wird."),n.forEach(u)},m(s,n){k(s,e,n),v(e,t)},d(s){s&&u(e)}}}function Ht(l){let e,t=l[5]&&l[1]!=="closed"&&l[1]!=="voting-open"&&it();return{c(){e=b("div"),t&&t.c(),this.h()},l(s){e=g(s,"DIV",{slot:!0});var n=w(e);t&&t.l(n),n.forEach(u),this.h()},h(){p(e,"slot","info")},m(s,n){k(s,e,n),t&&t.m(e,null)},p(s,n){s[5]&&s[1]!=="closed"&&s[1]!=="voting-open"?t||(t=it(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&u(e),t&&t.d()}}}function Kt(l){let e,t,s,n;return{c(){e=b("button"),t=C("Join the quiz")},l(f){e=g(f,"BUTTON",{});var o=w(e);t=D(o,"Join the quiz"),o.forEach(u)},m(f,o){k(f,e,o),v(e,t),s||(n=ae(e,"click",l[10]),s=!0)},p:F,d(f){f&&u(e),s=!1,n()}}}function Lt(l){let e,t;return{c(){e=b("a"),t=C("Need to input your name"),this.h()},l(s){e=g(s,"A",{href:!0,class:!0});var n=w(e);t=D(n,"Need to input your name"),n.forEach(u),this.h()},h(){p(e,"href","/"),p(e,"class","svelte-1jxik5q")},m(s,n){k(s,e,n),v(e,t)},p:F,d(s){s&&u(e)}}}function Xt(l){let e,t,s,n;function f(a,i){return!a[8].name||!a[8].house?Lt:Kt}let o=f(l),r=o(l);return{c(){e=b("div"),t=b("h1"),s=C("Registration"),n=N(),r.c(),this.h()},l(a){e=g(a,"DIV",{slot:!0,class:!0});var i=w(e);t=g(i,"H1",{});var c=w(t);s=D(c,"Registration"),c.forEach(u),n=P(i),r.l(i),i.forEach(u),this.h()},h(){p(e,"slot","front"),p(e,"class","svelte-1jxik5q")},m(a,i){k(a,e,i),v(e,t),v(t,s),v(e,n),r.m(e,null)},p(a,i){o===(o=f(a))&&r?r.p(a,i):(r.d(1),r=o(a),r&&(r.c(),r.m(e,null)))},d(a){a&&u(e),r.d()}}}function rt(l){let e,t;return{c(){e=b("p"),t=C("Warte bis das Quiz beginnt")},l(s){e=g(s,"P",{});var n=w(e);t=D(n,"Warte bis das Quiz beginnt"),n.forEach(u)},m(s,n){k(s,e,n),v(e,t)},d(s){s&&u(e)}}}function Zt(l){let e,t=l[6]&&rt();return{c(){e=b("div"),t&&t.c(),this.h()},l(s){e=g(s,"DIV",{slot:!0,id:!0,class:!0});var n=w(e);t&&t.l(n),n.forEach(u),this.h()},h(){p(e,"slot","info"),p(e,"id","registration-success"),p(e,"class","svelte-1jxik5q")},m(s,n){k(s,e,n),t&&t.m(e,null)},p(s,n){s[6]?t||(t=rt(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&u(e),t&&t.d()}}}function Gt(l){let e,t,s,n,f,o,r;const a=[Wt,Qt,Ot,Bt],i=[];function c(_,d){var h,V;return _[7]==="registration"?0:_[7]==="running"&&((V=(h=_[2])==null?void 0:h.activeQuestion)==null?void 0:V.id)&&_[6]?1:_[7]==="results"&&_[6]?2:3}return t=c(l),s=i[t]=a[t](l),{c(){e=N(),s.c(),n=ie(),this.h()},l(_){vt('[data-svelte="svelte-aqh7sr"]',document.head).forEach(u),e=P(_),s.l(_),n=ie(),this.h()},h(){document.title="Dungeon Quiz"},m(_,d){k(_,e,d),i[t].m(_,d),k(_,n,d),f=!0,o||(r=ae(window,"keydown",l[13]),o=!0)},p(_,[d]){let h=t;t=c(_),t===h?i[t].p(_,d):(bt(),G(i[h],1,1,()=>{i[h]=null}),mt(),s=i[t],s?s.p(_,d):(s=i[t]=a[t](_),s.c()),Z(s,1),s.m(n.parentNode,n))},i(_){f||(Z(s),f=!0)},o(_){G(s),f=!1},d(_){_&&u(e),i[t].d(_),_&&u(n),o=!1,r()}}}function Yt(l,e,t){let s,n,f,o,r,a,i,c,_=F,d=()=>(_(),_=We(I,E=>t(16,c=E)),I),h,V;re(l,Ue,E=>t(2,i=E)),re(l,gt,E=>t(8,V=E)),l.$$.on_destroy.push(()=>_());let R,I;const B=He("quiz-user-data",{id:"",qid:"",token:""});re(l,B,E=>t(17,h=E));let q;async function T(){const z=await(await Me("api/quiz/register",{name:V.name,house:V.house})).json(),O=wt(z.token);Y(B,h.token=z.token,h),Y(B,h.id=O.id,h),Y(B,h.qid=O.qid,h)}async function y({detail:E}){const z=await Me("api/quiz/answer",E,h.token);if(!z.ok)return;const O=await z.json();Y(I,c.qid=n.id,c),Y(I,c.value=E,c),n.type==="voting"&&O.id&&Y(I,c.aid=O.id,c)}async function j({detail:E}){const z=await Me("api/quiz/vote",E,h.token);console.log(await z.json())}function A({key:E}){E==="L"&&console.log(c,i)}function Q(E){R=E,t(0,R)}function W(E){q=E,t(4,q)}function M(E){I=E,d(t(3,I))}function J(E){R=E,t(0,R)}return l.$$.update=()=>{l.$$.dirty&4&&t(7,s=i==null?void 0:i.state),l.$$.dirty&4&&t(14,n=i==null?void 0:i.activeQuestion),l.$$.dirty&16384&&t(1,f=n==null?void 0:n.state),l.$$.dirty&4&&(i==null||i.users),l.$$.dirty&131076&&t(6,o=(h==null?void 0:h.id)&&(h==null?void 0:h.qid)===(i==null?void 0:i.id)),l.$$.dirty&81920&&t(5,r=(n==null?void 0:n.type)==="multiple"?(c==null?void 0:c.qid)===(n==null?void 0:n.id):(c==null?void 0:c.qid)===(n==null?void 0:n.id)&&(c==null?void 0:c.value)),l.$$.dirty&81920&&t(15,a=(n==null?void 0:n.correctAnswer)===(c==null?void 0:c.aid)),l.$$.dirty&32771&&f==="closed"&&a&&setTimeout(()=>{R()},1e3)},[R,f,i,I,q,r,o,s,V,B,T,y,j,A,n,a,c,h,Q,W,M,J]}class ns extends Ee{constructor(e){super();qe(this,e,Yt,Gt,Ve,{})}}export{ns as default};
