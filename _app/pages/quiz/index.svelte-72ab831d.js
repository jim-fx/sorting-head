import{S as Se,i as Ce,s as Pe,e as g,t as I,k as P,l as ne,c as w,a as E,g as N,d as a,n as T,b as A,f as q,G as p,h as H,H as R,a7 as ge,aj as dt,ag as Je,ak as x,ae as Te,a6 as z,N as he,M as Ke,O as pt,X as oe,Y as re,I as je,j as fe,m as ae,F as ue,o as ce,Z as _e,J as $e,K as Fe,L as ze,x as $,u as F,v as de,af as ht,w as Be,T as mt,A as vt,r as Qe,ac as bt,ad as kt}from"../../chunks/vendor-453c144d.js";import{q as Re,l as Le,e as gt,u as wt}from"../../chunks/index-8850a410.js";import{p as Oe,d as Et}from"../../chunks/index-d0b67739.js";import{a as Me,C as At}from"../../chunks/Confetti-7f0441a6.js";import{T as qt}from"../../chunks/Crest.svelte_svelte_type_style_lang-cff3bd29.js";import{g as Vt}from"../../chunks/navigation-51f4a605.js";import"../../chunks/singletons-12a22614.js";function Xe(n,e,s){const t=n.slice();return t[20]=e[s],t[24]=s,t}function Ge(n,e,s){const t=n.slice();return t[20]=e[s],t}function Ye(n,e,s){const t=n.slice();return t[17]=e[s],t}function Dt(n){let e,s=n[1].answers.sort(st),t=[];for(let l=0;l<s.length;l+=1)t[l]=Ze(Xe(n,s,l));return{c(){e=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=w(l,"DIV",{class:!0});var r=E(e);for(let i=0;i<t.length;i+=1)t[i].l(r);r.forEach(a),this.h()},h(){A(e,"class","vote-wrapper svelte-13h57us")},m(l,r){q(l,e,r);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(l,r){if(r&514){s=l[1].answers.sort(st);let i;for(i=0;i<s.length;i+=1){const f=Xe(l,s,i);t[i]?t[i].p(f,r):(t[i]=Ze(f),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(l){l&&a(e),Te(t,l)}}}function yt(n){let e,s=n[1].answers,t=[];for(let l=0;l<s.length;l+=1)t[l]=et(Ge(n,s,l));return{c(){e=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=w(l,"DIV",{class:!0});var r=E(e);for(let i=0;i<t.length;i+=1)t[i].l(r);r.forEach(a),this.h()},h(){A(e,"class","vote-wrapper svelte-13h57us")},m(l,r){q(l,e,r);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(l,r){if(r&278){s=l[1].answers;let i;for(i=0;i<s.length;i+=1){const f=Ge(l,s,i);t[i]?t[i].p(f,r):(t[i]=et(f),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(l){l&&a(e),Te(t,l)}}}function It(n){let e,s,t,l,r,i,f;return{c(){e=g("textarea"),s=P(),t=g("button"),l=I("abschicken"),this.h()},l(o){e=w(o,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),E(e).forEach(a),s=T(o),t=w(o,"BUTTON",{});var _=E(t);l=N(_,"abschicken"),_.forEach(a),this.h()},h(){var o;A(e,"name",""),A(e,"id",""),A(e,"cols","30"),A(e,"rows","10"),A(e,"class","svelte-13h57us"),t.disabled=r=!((o=n[0])==null?void 0:o.length)},m(o,_){q(o,e,_),Ke(e,n[0]),q(o,s,_),q(o,t,_),p(t,l),i||(f=[he(e,"input",n[11]),he(t,"click",n[12])],i=!0)},p(o,_){var d;_&1&&Ke(e,o[0]),_&1&&r!==(r=!((d=o[0])==null?void 0:d.length))&&(t.disabled=r)},d(o){o&&a(e),o&&a(s),o&&a(t),i=!1,pt(f)}}}function Nt(n){let e,s=n[1].answers,t=[];for(let l=0;l<s.length;l+=1)t[l]=tt(Ye(n,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=ne()},l(l){for(let r=0;r<t.length;r+=1)t[r].l(l);e=ne()},m(l,r){for(let i=0;i<t.length;i+=1)t[i].m(l,r);q(l,e,r)},p(l,r){if(r&82){s=l[1].answers;let i;for(i=0;i<s.length;i+=1){const f=Ye(l,s,i);t[i]?t[i].p(f,r):(t[i]=tt(f),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(l){Te(t,l),l&&a(e)}}}function St(n){let e,s,t=n[9](n[20].userId)+"",l,r;return{c(){e=g("br"),s=I(`
					(`),l=I(t),r=I(")")},l(i){e=w(i,"BR",{}),s=N(i,`
					(`),l=N(i,t),r=N(i,")")},m(i,f){q(i,e,f),q(i,s,f),q(i,l,f),q(i,r,f)},p(i,f){f&2&&t!==(t=i[9](i[20].userId)+"")&&H(l,t)},d(i){i&&a(e),i&&a(s),i&&a(l),i&&a(r)}}}function Ze(n){let e,s=n[20].votes.length+"",t,l,r,i=n[20].value+"",f,o,_,d=n[24]===0&&St(n);return{c(){e=g("p"),t=I(s),l=P(),r=g("p"),f=I(i),o=P(),d&&d.c(),_=P(),this.h()},l(c){e=w(c,"P",{class:!0});var u=E(e);t=N(u,s),u.forEach(a),l=T(c),r=w(c,"P",{class:!0});var V=E(r);f=N(V,i),o=T(V),d&&d.l(V),_=T(V),V.forEach(a),this.h()},h(){A(e,"class","vote-amount svelte-13h57us"),A(r,"class","vote-value svelte-13h57us")},m(c,u){q(c,e,u),p(e,t),q(c,l,u),q(c,r,u),p(r,f),p(r,o),d&&d.m(r,null),p(r,_)},p(c,u){u&2&&s!==(s=c[20].votes.length+"")&&H(t,s),u&2&&i!==(i=c[20].value+"")&&H(f,i),c[24]===0&&d.p(c,u)},d(c){c&&a(e),c&&a(l),c&&a(r),d&&d.d()}}}function xe(n){let e,s=(n[4].vote!==n[20].id?"\u2610":"\u2612")+"",t,l,r,i=n[20].value+"",f,o,_;function d(){return n[13](n[20])}return{c(){e=g("button"),t=I(s),l=P(),r=g("p"),f=I(i),this.h()},l(c){e=w(c,"BUTTON",{class:!0});var u=E(e);t=N(u,s),u.forEach(a),l=T(c),r=w(c,"P",{class:!0});var V=E(r);f=N(V,i),V.forEach(a),this.h()},h(){A(e,"class","vote-button svelte-13h57us"),z(e,"selected",n[4].vote===n[20].id),A(r,"class","vote-value svelte-13h57us")},m(c,u){q(c,e,u),p(e,t),q(c,l,u),q(c,r,u),p(r,f),o||(_=he(e,"click",d),o=!0)},p(c,u){n=c,u&18&&s!==(s=(n[4].vote!==n[20].id?"\u2610":"\u2612")+"")&&H(t,s),u&18&&z(e,"selected",n[4].vote===n[20].id),u&2&&i!==(i=n[20].value+"")&&H(f,i)},d(c){c&&a(e),c&&a(l),c&&a(r),o=!1,_()}}}function et(n){let e,s=n[20].userId!==n[2].id&&xe(n);return{c(){s&&s.c(),e=ne()},l(t){s&&s.l(t),e=ne()},m(t,l){s&&s.m(t,l),q(t,e,l)},p(t,l){t[20].userId!==t[2].id?s?s.p(t,l):(s=xe(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&a(e)}}}function tt(n){let e,s=n[17].value+"",t,l,r;function i(){return n[10](n[17])}return{c(){e=g("button"),t=I(s),this.h()},l(f){e=w(f,"BUTTON",{class:!0});var o=E(e);t=N(o,s),o.forEach(a),this.h()},h(){var f,o,_;A(e,"class","answer svelte-13h57us"),z(e,"showAnswer",(f=n[1])==null?void 0:f.correctAnswer),z(e,"correct",n[17].id===((o=n[1])==null?void 0:o.correctAnswer)),z(e,"selected",((_=n[4])==null?void 0:_.aid)===n[17].id)},m(f,o){q(f,e,o),p(e,t),l||(r=he(e,"click",i),l=!0)},p(f,o){var _,d,c;n=f,o&2&&s!==(s=n[17].value+"")&&H(t,s),o&2&&z(e,"showAnswer",(_=n[1])==null?void 0:_.correctAnswer),o&2&&z(e,"correct",n[17].id===((d=n[1])==null?void 0:d.correctAnswer)),o&18&&z(e,"selected",((c=n[4])==null?void 0:c.aid)===n[17].id)},d(f){f&&a(e),l=!1,r()}}}function Ct(n){let e,s,t=n[1].index+1+"",l,r,i=n[5].amount+"",f,o,_=n[1].description+"",d,c,u;function V(m,b){if(m[1].type==="multiple")return Nt;if(m[1].state==="open")return It;if(m[1].state==="voting-open")return yt;if(m[1].state==="closed")return Dt}let v=V(n),h=v&&v(n);return{c(){e=g("p"),s=I("("),l=I(t),r=I("/"),f=I(i),o=I(") "),d=I(_),c=P(),h&&h.c(),u=ne(),this.h()},l(m){e=w(m,"P",{class:!0});var b=E(e);s=N(b,"("),l=N(b,t),r=N(b,"/"),f=N(b,i),o=N(b,") "),d=N(b,_),b.forEach(a),c=T(m),h&&h.l(m),u=ne(),this.h()},h(){A(e,"class","description svelte-13h57us")},m(m,b){q(m,e,b),p(e,s),p(e,l),p(e,r),p(e,f),p(e,o),p(e,d),q(m,c,b),h&&h.m(m,b),q(m,u,b)},p(m,[b]){b&2&&t!==(t=m[1].index+1+"")&&H(l,t),b&32&&i!==(i=m[5].amount+"")&&H(f,i),b&2&&_!==(_=m[1].description+"")&&H(d,_),v===(v=V(m))&&h?h.p(m,b):(h&&h.d(1),h=v&&v(m),h&&(h.c(),h.m(u.parentNode,u)))},i:R,o:R,d(m){m&&a(e),m&&a(c),h&&h.d(m),m&&a(u)}}}const st=(n,e)=>n.votes.length>e.votes.length?-1:1;function Pt(n,e,s){let t,l,r=R,i=()=>(r(),r=Je(c,y=>s(4,l=y)),c),f;ge(n,Re,y=>s(5,f=y)),n.$$.on_destroy.push(()=>r());const o=dt();let{question:_}=e,{userData:d}=e;const c=Le("active-question",{qid:"",aid:"",value:"",vote:""});i();let{textValue:u}=e;function V(y){y!==l.qid&&_.state==="open"&&(x(c,l.qid=_.id,l),x(c,l.aid=y,l),o("answer",y))}function v(y){o("text",y)}function h(y){x(c,l.vote=y,l),o("vote",y)}function m(y){const j=t.find(G=>G.id===y);return j?j==null?void 0:j.name:""}const b=y=>V(y.id);function B(){u=this.value,s(0,u)}const X=()=>v(u),Q=y=>h(y.id);return n.$$set=y=>{"question"in y&&s(1,_=y.question),"userData"in y&&s(2,d=y.userData),"textValue"in y&&s(0,u=y.textValue)},n.$$.update=()=>{n.$$.dirty&32&&(t=f.users),n.$$.dirty&18&&(_==null||_.correctAnswer,l.aid)},[u,_,d,c,l,f,V,v,h,m,b,B,X,Q]}class Tt extends Se{constructor(e){super();Ce(this,e,Pt,Ct,Pe,{question:1,userData:2,questionStore:3,textValue:0})}get questionStore(){return this.$$.ctx[3]}}const jt=n=>({}),lt=n=>({}),$t=n=>({}),nt=n=>({}),Ft=n=>({}),it=n=>({});function zt(n){let e,s;return{c(){e=g("p"),s=I("No Frontside")},l(t){e=w(t,"P",{});var l=E(e);s=N(l,"No Frontside"),l.forEach(a)},m(t,l){q(t,e,l),p(e,s)},d(t){t&&a(e)}}}function Bt(n){let e;return{c(){e=g("p")},l(s){e=w(s,"P",{}),E(e).forEach(a)},m(s,t){q(s,e,t)},d(s){s&&a(e)}}}function Qt(n){let e;return{c(){e=g("span")},l(s){e=w(s,"SPAN",{}),E(e).forEach(a)},m(s,t){q(s,e,t)},d(s){s&&a(e)}}}function Rt(n){let e,s,t,l,r,i,f,o,_,d,c,u,V,v,h,m,b,B,X,Q,y,j,G,me,O,U,ie,ee,W,ve,Y,be,Z,pe,D,C;function J(k){n[11](k)}let ke={amount:200};n[1]!==void 0&&(ke.show=n[1]),s=new Me({props:ke}),oe.push(()=>re(s,"show",J));function De(k){n[12](k)}let We={amount:50};n[2]!==void 0&&(We.show=n[2]),f=new Me({props:We}),oe.push(()=>re(f,"show",De));const ye=n[10].front,we=je(ye,n,n[9],it),K=we||zt(),Ie=n[10].back,Ee=je(Ie,n,n[9],nt),L=Ee||Bt(),Ne=n[10].info,Ae=je(Ne,n,n[9],lt),M=Ae||Qt();return{c(){e=g("div"),t=g("div"),fe(s.$$.fragment),i=P(),o=g("div"),fe(f.$$.fragment),c=P(),u=g("div"),V=g("div"),v=g("span"),h=P(),m=g("span"),b=P(),B=g("span"),X=P(),Q=g("span"),y=P(),j=g("div"),G=g("span"),me=P(),O=g("span"),U=P(),ie=g("span"),ee=P(),W=g("span"),ve=P(),Y=g("div"),K&&K.c(),be=P(),Z=g("div"),L&&L.c(),D=P(),M&&M.c(),this.h()},l(k){e=w(k,"DIV",{class:!0});var S=E(e);t=w(S,"DIV",{style:!0});var qe=E(t);ae(s.$$.fragment,qe),i=T(S),o=w(S,"DIV",{style:!0});var Ve=E(o);ae(f.$$.fragment,Ve),c=T(S),u=w(S,"DIV",{class:!0,style:!0});var te=E(u);V=w(te,"DIV",{class:!0});var se=E(V);v=w(se,"SPAN",{class:!0}),E(v).forEach(a),h=T(se),m=w(se,"SPAN",{class:!0}),E(m).forEach(a),b=T(se),B=w(se,"SPAN",{class:!0}),E(B).forEach(a),X=T(se),Q=w(se,"SPAN",{class:!0}),E(Q).forEach(a),se.forEach(a),y=T(te),j=w(te,"DIV",{class:!0});var le=E(j);G=w(le,"SPAN",{class:!0}),E(G).forEach(a),me=T(le),O=w(le,"SPAN",{class:!0}),E(O).forEach(a),U=T(le),ie=w(le,"SPAN",{class:!0}),E(ie).forEach(a),ee=T(le),W=w(le,"SPAN",{class:!0}),E(W).forEach(a),le.forEach(a),ve=T(te),Y=w(te,"DIV",{class:!0,id:!0});var He=E(Y);K&&K.l(He),He.forEach(a),be=T(te),Z=w(te,"DIV",{class:!0,id:!0});var Ue=E(Z);L&&L.l(Ue),Ue.forEach(a),te.forEach(a),D=T(S),M&&M.l(S),S.forEach(a),this.h()},h(){ue(t,"display","contents"),ue(t,"--opacity","0.4"),ue(t,"--z",r=n[0]?"-30px":"30px"),ue(o,"display","contents"),ue(o,"--z",d=n[0]?"-70px":"70px"),A(v,"class","corner tr svelte-csk182"),A(m,"class","corner tl svelte-csk182"),A(B,"class","corner br svelte-csk182"),A(Q,"class","corner bl svelte-csk182"),A(V,"class","corner-wrapper svelte-csk182"),A(G,"class","corner tr svelte-csk182"),A(O,"class","corner tl svelte-csk182"),A(ie,"class","corner br svelte-csk182"),A(W,"class","corner bl svelte-csk182"),A(j,"class","corner-wrapper back svelte-csk182"),A(Y,"class","card-face svelte-csk182"),A(Y,"id","front"),A(Z,"class","card-face svelte-csk182"),A(Z,"id","back"),A(u,"class","card svelte-csk182"),A(u,"style",pe=`
		--x:${n[6].x*n[5]}deg;
		--y:${n[6].y*-n[5]}deg;
		`),A(e,"class","scene svelte-csk182"),z(e,"flipped",n[0]),z(e,"flip",n[3]),z(e,"hideAnimations",n[4])},m(k,S){q(k,e,S),p(e,t),ce(s,t,null),p(e,i),p(e,o),ce(f,o,null),p(e,c),p(e,u),p(u,V),p(V,v),p(V,h),p(V,m),p(V,b),p(V,B),p(V,X),p(V,Q),p(u,y),p(u,j),p(j,G),p(j,me),p(j,O),p(j,U),p(j,ie),p(j,ee),p(j,W),p(u,ve),p(u,Y),K&&K.m(Y,null),p(u,be),p(u,Z),L&&L.m(Z,null),p(e,D),M&&M.m(e,null),C=!0},p(k,[S]){S&1&&r!==(r=k[0]?"-30px":"30px")&&ue(t,"--z",r);const qe={};!l&&S&2&&(l=!0,qe.show=k[1],_e(()=>l=!1)),s.$set(qe),S&1&&d!==(d=k[0]?"-70px":"70px")&&ue(o,"--z",d);const Ve={};!_&&S&4&&(_=!0,Ve.show=k[2],_e(()=>_=!1)),f.$set(Ve),we&&we.p&&(!C||S&512)&&$e(we,ye,k,k[9],C?ze(ye,k[9],S,Ft):Fe(k[9]),it),Ee&&Ee.p&&(!C||S&512)&&$e(Ee,Ie,k,k[9],C?ze(Ie,k[9],S,$t):Fe(k[9]),nt),(!C||S&96&&pe!==(pe=`
		--x:${k[6].x*k[5]}deg;
		--y:${k[6].y*-k[5]}deg;
		`))&&A(u,"style",pe),Ae&&Ae.p&&(!C||S&512)&&$e(Ae,Ne,k,k[9],C?ze(Ne,k[9],S,jt):Fe(k[9]),lt),S&1&&z(e,"flipped",k[0]),S&8&&z(e,"flip",k[3]),S&16&&z(e,"hideAnimations",k[4])},i(k){C||($(s.$$.fragment,k),$(f.$$.fragment,k),$(K,k),$(L,k),$(M,k),C=!0)},o(k){F(s.$$.fragment,k),F(f.$$.fragment,k),F(K,k),F(L,k),F(M,k),C=!1},d(k){k&&a(e),de(s),de(f),K&&K.d(k),L&&L.d(k),M&&M.d(k)}}}function Ot(n,e,s){let t,l;ge(n,gt,b=>s(6,l=b));let{$$slots:r={},$$scope:i}=e,{flipped:f=!1}=e,o,_,d,c=!1,u=!1;const V=()=>{s(3,c=!0),setTimeout(()=>{s(4,u=!0),setTimeout(()=>{s(3,c=!1),setTimeout(()=>{s(4,u=!1)},1e3)},50)},2e3)},v=()=>{o==null||o(),_==null||_(),d==null||d()};function h(b){o=b,s(1,o)}function m(b){d=b,s(2,d)}return n.$$set=b=>{"flipped"in b&&s(0,f=b.flipped),"$$scope"in b&&s(9,i=b.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&s(5,t=f?1:10)},[f,o,d,c,u,t,l,V,v,i,r,h,m]}class ot extends Se{constructor(e){super();Ce(this,e,Ot,Rt,Pe,{flipped:0,doAflip:7,showConfetti:8})}get doAflip(){return this.$$.ctx[7]}get showConfetti(){return this.$$.ctx[8]}}function Wt(n){let e,s;return{c(){e=g("p"),s=I("Quiz Already started")},l(t){e=w(t,"P",{});var l=E(e);s=N(l,"Quiz Already started"),l.forEach(a)},m(t,l){q(t,e,l),p(e,s)},p:R,i:R,o:R,d(t){t&&a(e)}}}function Ht(n){let e,s;return{c(){e=g("p"),s=I("Results")},l(t){e=w(t,"P",{});var l=E(e);s=N(l,"Results"),l.forEach(a)},m(t,l){q(t,e,l),p(e,s)},p:R,i:R,o:R,d(t){t&&a(e)}}}function Ut(n){let e,s,t,l;function r(o){n[26](o)}function i(o){n[27](o)}let f={flipped:n[1]!=="closed"&&n[10]&&n[1]!=="voting-open",$$slots:{info:[Mt],back:[Lt],front:[Kt]},$$scope:{ctx:n}};return n[7]!==void 0&&(f.doAflip=n[7]),n[0]!==void 0&&(f.showConfetti=n[0]),e=new ot({props:f}),oe.push(()=>re(e,"doAflip",r)),oe.push(()=>re(e,"showConfetti",i)),{c(){fe(e.$$.fragment)},l(o){ae(e.$$.fragment,o)},m(o,_){ce(e,o,_),l=!0},p(o,_){const d={};_[0]&1026&&(d.flipped=o[1]!=="closed"&&o[10]&&o[1]!=="voting-open"),_[0]&1338|_[1]&2&&(d.$$scope={dirty:_,ctx:o}),!s&&_[0]&128&&(s=!0,d.doAflip=o[7],_e(()=>s=!1)),!t&&_[0]&1&&(t=!0,d.showConfetti=o[0],_e(()=>t=!1)),e.$set(d)},i(o){l||($(e.$$.fragment,o),l=!0)},o(o){F(e.$$.fragment,o),l=!1},d(o){de(e,o)}}}function Jt(n){let e,s,t;function l(i){n[23](i)}let r={flipped:n[9],$$slots:{info:[es],back:[xt],front:[Yt]},$$scope:{ctx:n}};return n[0]!==void 0&&(r.showConfetti=n[0]),e=new ot({props:r}),oe.push(()=>re(e,"showConfetti",l)),{c(){fe(e.$$.fragment)},l(i){ae(e.$$.fragment,i)},m(i,f){ce(e,i,f),t=!0},p(i,f){const o={};f[0]&512&&(o.flipped=i[9]),f[0]&4676|f[1]&2&&(o.$$scope={dirty:f,ctx:i}),!s&&f[0]&1&&(s=!0,o.showConfetti=i[0],_e(()=>s=!1)),e.$set(o)},i(i){t||($(e.$$.fragment,i),t=!0)},o(i){F(e.$$.fragment,i),t=!1},d(i){de(e,i)}}}function rt(n){let e,s,t,l;function r(o){n[24](o)}function i(o){n[25](o)}let f={userData:n[3],question:n[8]};return n[5]!==void 0&&(f.textValue=n[5]),n[4]!==void 0&&(f.questionStore=n[4]),e=new Tt({props:f}),oe.push(()=>re(e,"textValue",r)),oe.push(()=>re(e,"questionStore",i)),e.$on("vote",n[16]),e.$on("answer",n[15]),e.$on("text",n[15]),{c(){fe(e.$$.fragment)},l(o){ae(e.$$.fragment,o)},m(o,_){ce(e,o,_),l=!0},p(o,_){const d={};_[0]&8&&(d.userData=o[3]),_[0]&256&&(d.question=o[8]),!s&&_[0]&32&&(s=!0,d.textValue=o[5],_e(()=>s=!1)),!t&&_[0]&16&&(t=!0,d.questionStore=o[4],_e(()=>t=!1)),e.$set(d)},i(o){l||($(e.$$.fragment,o),l=!0)},o(o){F(e.$$.fragment,o),l=!1},d(o){de(e,o)}}}function Kt(n){let e,s,t=n[8]&&rt(n);return{c(){e=g("div"),t&&t.c(),this.h()},l(l){e=w(l,"DIV",{slot:!0,class:!0});var r=E(e);t&&t.l(r),r.forEach(a),this.h()},h(){A(e,"slot","front"),A(e,"class","svelte-1ek19qe")},m(l,r){q(l,e,r),t&&t.m(e,null),s=!0},p(l,r){l[8]?t?(t.p(l,r),r[0]&256&&$(t,1)):(t=rt(l),t.c(),$(t,1),t.m(e,null)):t&&(Qe(),F(t,1,1,()=>{t=null}),Be())},i(l){s||($(t),s=!0)},o(l){F(t),s=!1},d(l){l&&a(e),t&&t.d()}}}function ft(n){let e,s;return{c(){e=g("p"),s=I("Vote for the best answer")},l(t){e=w(t,"P",{});var l=E(e);s=N(l,"Vote for the best answer"),l.forEach(a)},m(t,l){q(t,e,l),p(e,s)},d(t){t&&a(e)}}}function Lt(n){let e,s=n[1]==="voting-open"&&ft();return{c(){e=g("div"),s&&s.c(),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var l=E(e);s&&s.l(l),l.forEach(a),this.h()},h(){A(e,"slot","back"),A(e,"class","svelte-1ek19qe")},m(t,l){q(t,e,l),s&&s.m(e,null)},p(t,l){t[1]==="voting-open"?s||(s=ft(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&a(e),s&&s.d()}}}function at(n){let e,s;return{c(){e=g("p"),s=I("Warte bis die Frage beendet wird.")},l(t){e=w(t,"P",{});var l=E(e);s=N(l,"Warte bis die Frage beendet wird."),l.forEach(a)},m(t,l){q(t,e,l),p(e,s)},d(t){t&&a(e)}}}function Mt(n){let e,s=n[10]&&n[1]!=="closed"&&n[1]!=="voting-open"&&at();return{c(){e=g("div"),s&&s.c(),this.h()},l(t){e=w(t,"DIV",{slot:!0});var l=E(e);s&&s.l(l),l.forEach(a),this.h()},h(){A(e,"slot","info")},m(t,l){q(t,e,l),s&&s.m(e,null)},p(t,l){t[10]&&t[1]!=="closed"&&t[1]!=="voting-open"?s||(s=at(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&a(e),s&&s.d()}}}function Xt(n){let e,s=n[2].description+"",t,l,r,i=!n[6]&&!n[9]&&ut(n);return{c(){e=g("h2"),t=I(s),l=P(),i&&i.c(),r=ne()},l(f){e=w(f,"H2",{});var o=E(e);t=N(o,s),o.forEach(a),l=T(f),i&&i.l(f),r=ne()},m(f,o){q(f,e,o),p(e,t),q(f,l,o),i&&i.m(f,o),q(f,r,o)},p(f,o){o[0]&4&&s!==(s=f[2].description+"")&&H(t,s),!f[6]&&!f[9]?i?i.p(f,o):(i=ut(f),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},d(f){f&&a(e),f&&a(l),i&&i.d(f),f&&a(r)}}}function Gt(n){let e,s;return{c(){e=g("a"),s=I("Need to input your name"),this.h()},l(t){e=w(t,"A",{href:!0,class:!0});var l=E(e);s=N(l,"Need to input your name"),l.forEach(a),this.h()},h(){A(e,"href","/"),A(e,"class","svelte-1ek19qe")},m(t,l){q(t,e,l),p(e,s)},p:R,d(t){t&&a(e)}}}function ut(n){let e,s,t,l;return{c(){e=g("button"),s=I("Beitreten")},l(r){e=w(r,"BUTTON",{});var i=E(e);s=N(i,"Beitreten"),i.forEach(a)},m(r,i){q(r,e,i),p(e,s),t||(l=he(e,"click",n[14]),t=!0)},p:R,d(r){r&&a(e),t=!1,l()}}}function Yt(n){let e,s,t,l;function r(o,_){return!o[12].name||!o[12].house?Gt:Xt}let i=r(n),f=i(n);return{c(){e=g("div"),s=g("h1"),t=I("Registration"),l=P(),f.c(),this.h()},l(o){e=w(o,"DIV",{slot:!0,class:!0});var _=E(e);s=w(_,"H1",{});var d=E(s);t=N(d,"Registration"),d.forEach(a),l=T(_),f.l(_),_.forEach(a),this.h()},h(){A(e,"slot","front"),A(e,"class","svelte-1ek19qe")},m(o,_){q(o,e,_),p(e,s),p(s,t),p(e,l),f.m(e,null)},p(o,_){i===(i=r(o))&&f?f.p(o,_):(f.d(1),f=i(o),f&&(f.c(),f.m(e,null)))},d(o){o&&a(e),f.d()}}}function ct(n){let e,s;return e=new qt({props:{endsAt:n[2].startsAt,$$slots:{default:[Zt,({secondsLeft:t})=>({31:t}),({secondsLeft:t})=>[0,t?1:0]]},$$scope:{ctx:n}}}),{c(){fe(e.$$.fragment)},l(t){ae(e.$$.fragment,t)},m(t,l){ce(e,t,l),s=!0},p(t,l){const r={};l[0]&4&&(r.endsAt=t[2].startsAt),l[1]&3&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){F(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function Zt(n){let e,s=n[31]+"",t;return{c(){e=g("h1"),t=I(s)},l(l){e=w(l,"H1",{});var r=E(e);t=N(r,s),r.forEach(a)},m(l,r){q(l,e,r),p(e,t)},p(l,r){r[1]&1&&s!==(s=l[31]+"")&&H(t,s)},d(l){l&&a(e)}}}function xt(n){let e,s,t=n[2].startsAt&&ct(n);return{c(){e=g("div"),t&&t.c(),this.h()},l(l){e=w(l,"DIV",{slot:!0,class:!0});var r=E(e);t&&t.l(r),r.forEach(a),this.h()},h(){A(e,"slot","back"),A(e,"class","svelte-1ek19qe")},m(l,r){q(l,e,r),t&&t.m(e,null),s=!0},p(l,r){l[2].startsAt?t?(t.p(l,r),r[0]&4&&$(t,1)):(t=ct(l),t.c(),$(t,1),t.m(e,null)):t&&(Qe(),F(t,1,1,()=>{t=null}),Be())},i(l){s||($(t),s=!0)},o(l){F(t),s=!1},d(l){l&&a(e),t&&t.d()}}}function _t(n){let e,s;return{c(){e=g("p"),s=I("Warte bis das Quiz beginnt")},l(t){e=w(t,"P",{});var l=E(e);s=N(l,"Warte bis das Quiz beginnt"),l.forEach(a)},m(t,l){q(t,e,l),p(e,s)},d(t){t&&a(e)}}}function es(n){let e,s=n[9]&&!n[2].startsAt&&_t();return{c(){e=g("div"),s&&s.c(),this.h()},l(t){e=w(t,"DIV",{slot:!0,id:!0,class:!0});var l=E(e);s&&s.l(l),l.forEach(a),this.h()},h(){A(e,"slot","info"),A(e,"id","registration-success"),A(e,"class","svelte-1ek19qe")},m(t,l){q(t,e,l),s&&s.m(e,null)},p(t,l){t[9]&&!t[2].startsAt?s||(s=_t(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&a(e),s&&s.d()}}}function ts(n){let e,s,t,l,r,i,f,o,_,d;const c=[Jt,Ut,Ht,Wt],u=[];function V(v,h){var m,b;return v[11]==="registration"?0:v[11]==="running"&&((b=(m=v[2])==null?void 0:m.activeQuestion)==null?void 0:b.id)&&v[9]?1:v[11]==="results"&&v[9]?2:3}return s=V(n),t=u[s]=c[s](n),i=new At({props:{house:n[12].house}}),{c(){e=P(),t.c(),l=P(),r=g("div"),fe(i.$$.fragment),this.h()},l(v){ht('[data-svelte="svelte-aqh7sr"]',document.head).forEach(a),e=T(v),t.l(v),l=T(v),r=w(v,"DIV",{class:!0});var m=E(r);ae(i.$$.fragment,m),m.forEach(a),this.h()},h(){document.title="Dungeon Quiz",A(r,"class","crest svelte-1ek19qe")},m(v,h){q(v,e,h),u[s].m(v,h),q(v,l,h),q(v,r,h),ce(i,r,null),o=!0,_||(d=he(window,"keydown",n[17]),_=!0)},p(v,h){let m=s;s=V(v),s===m?u[s].p(v,h):(Qe(),F(u[m],1,1,()=>{u[m]=null}),Be(),t=u[s],t?t.p(v,h):(t=u[s]=c[s](v),t.c()),$(t,1),t.m(l.parentNode,l));const b={};h[0]&4096&&(b.house=v[12].house),i.$set(b)},i(v){o||($(t),$(i.$$.fragment,v),f||mt(()=>{f=bt(r,kt,{duration:5e3}),f.start()}),o=!0)},o(v){F(t),F(i.$$.fragment,v),o=!1},d(v){v&&a(e),u[s].d(v),v&&a(l),v&&a(r),de(i),_=!1,d()}}}function ss(n,e,s){let t,l,r,i,f,o,_,d,c,u,V=R,v=()=>(V(),V=Je(b,D=>s(22,u=D)),b),h;ge(n,wt,D=>s(12,d=D)),ge(n,Re,D=>s(2,c=D)),n.$$.on_destroy.push(()=>V());let m,b;const B=Le("quiz-user-data",{id:"",qid:"",token:""});ge(n,B,D=>s(3,h=D));let X,Q=!1;async function y(){if(Q||i)return;s(6,Q=!0);const C=await(await Oe("api/quiz/register",{name:d.name,house:d.house})).json(),J=Et(C.token);x(B,h.token=C.token,h),x(B,h.id=J.id,h),x(B,h.qid=J.qid,h),s(6,Q=!1)}async function j({detail:D}){const C=await Oe("api/quiz/answer",D,h.token);if(!C.ok)return;const J=await C.json();x(b,u.qid=l.id,u),x(b,u.value=D,u),l.type==="voting"&&J.id&&x(b,u.aid=J.id,u)}async function G({detail:D}){const C=await Oe("api/quiz/vote",D,h.token);console.log(await C.json())}function me({key:D}){D==="L"&&console.log(u,c)}let O=!1,U;function ie(){s(18,O=!0),U==null||U(),setTimeout(()=>{s(18,O=!1)},1e3)}let ee,W=null;Re.subscribe(D=>{var ke;if(O)return;let C=(ke=D==null?void 0:D.activeQuestion)==null?void 0:ke.id,J=C!==W;!J||(W&&(s(19,ee=c==null?void 0:c.questions.find(De=>De.id===W)),console.table({lastId:W,id:C,lastQuestion:ee})),J&&ie(),W=C)}),vt(()=>{(!d.name||!d.house)&&Vt("/quiz/register")});function ve(D){m=D,s(0,m)}function Y(D){X=D,s(5,X)}function be(D){b=D,v(s(4,b))}function Z(D){U=D,s(7,U)}function pe(D){m=D,s(0,m)}return n.$$.update=()=>{n.$$.dirty[0]&4&&s(11,t=c==null?void 0:c.state),n.$$.dirty[0]&4&&s(20,l=c==null?void 0:c.activeQuestion),n.$$.dirty[0]&1048576&&s(1,r=l==null?void 0:l.state),n.$$.dirty[0]&4&&(c==null||c.users),n.$$.dirty[0]&12&&s(9,i=(h==null?void 0:h.id)&&(h==null?void 0:h.qid)===(c==null?void 0:c.id)),n.$$.dirty[0]&5242880&&s(10,f=(l==null?void 0:l.type)==="multiple"?(u==null?void 0:u.qid)===(l==null?void 0:l.id):(u==null?void 0:u.qid)===(l==null?void 0:l.id)&&(u==null?void 0:u.value)),n.$$.dirty[0]&5242880&&s(21,o=(l==null?void 0:l.correctAnswer)===(u==null?void 0:u.aid)),n.$$.dirty[0]&2097155&&r==="closed"&&o&&setTimeout(()=>{m()},1e3),n.$$.dirty[0]&786436&&s(8,_=O?ee||(c==null?void 0:c.activeQuestion):c.activeQuestion)},[m,r,c,h,b,X,Q,U,_,i,f,t,d,B,y,j,G,me,O,ee,l,o,u,ve,Y,be,Z,pe]}class us extends Se{constructor(e){super();Ce(this,e,ss,ts,Pe,{},null,[-1,-1])}}export{us as default};