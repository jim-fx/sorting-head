var de=Object.defineProperty;var x=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var ee=(i,e,l)=>e in i?de(i,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[e]=l,te=(i,e)=>{for(var l in e||(e={}))pe.call(e,l)&&ee(i,l,e[l]);if(x)for(var l of x(e))me.call(e,l)&&ee(i,l,e[l]);return i};import{S as I,i as M,s as X,e as y,t as z,k as A,c as $,a as w,g as N,d as _,n as q,b as Q,f as T,G as g,h as O,H as U,ae as C,r as G,u as j,w as K,x as H,aj as ve,N as V,l as L,O as be,j as F,m as J,o as W,v as Y,a7 as le,A as ke}from"../../chunks/vendor-4d1406ba.js";import{g as ge,p as Ee,e as Te}from"../../chunks/index-d0b67739.js";/* empty css                                                             */import{T as ye}from"../../chunks/Timer-d5988874.js";import{u as $e,q as we}from"../../chunks/index-5d576dff.js";function se(i,e,l){const t=i.slice();return t[1]=e[l],t}function ne(i){let e,l,t=i[1].name+"",n,s,r,a=i[1].house+"",o,c;return{c(){e=y("tr"),l=y("td"),n=z(t),s=A(),r=y("td"),o=z(a),c=A(),this.h()},l(h){e=$(h,"TR",{class:!0});var f=w(e);l=$(f,"TD",{class:!0});var d=w(l);n=N(d,t),d.forEach(_),s=q(f),r=$(f,"TD",{class:!0});var v=w(r);o=N(v,a),v.forEach(_),c=q(f),f.forEach(_),this.h()},h(){Q(l,"class","svelte-g1t6o9"),Q(r,"class","svelte-g1t6o9"),Q(e,"class","svelte-g1t6o9")},m(h,f){T(h,e,f),g(e,l),g(l,n),g(e,s),g(e,r),g(r,o),g(e,c)},p(h,f){f&1&&t!==(t=h[1].name+"")&&O(n,t),f&1&&a!==(a=h[1].house+"")&&O(o,a)},d(h){h&&_(e)}}}function ze(i){let e,l,t,n,s,r,a,o,c,h,f=i[0].length+"",d,v,u=i[0],k=[];for(let b=0;b<u.length;b+=1)k[b]=ne(se(i,u,b));return{c(){e=y("table"),l=y("thead"),t=y("td"),n=z("Name"),s=A(),r=y("td"),a=z("House"),o=A();for(let b=0;b<k.length;b+=1)k[b].c();c=A(),h=y("p"),d=z(f),v=z(" registrations"),this.h()},l(b){e=$(b,"TABLE",{class:!0});var D=w(e);l=$(D,"THEAD",{});var p=w(l);t=$(p,"TD",{class:!0});var m=w(t);n=N(m,"Name"),m.forEach(_),s=q(p),r=$(p,"TD",{class:!0});var S=w(r);a=N(S,"House"),S.forEach(_),p.forEach(_),o=q(D);for(let B=0;B<k.length;B+=1)k[B].l(D);D.forEach(_),c=q(b),h=$(b,"P",{});var E=w(h);d=N(E,f),v=N(E," registrations"),E.forEach(_),this.h()},h(){Q(t,"class","svelte-g1t6o9"),Q(r,"class","svelte-g1t6o9"),Q(e,"class","svelte-g1t6o9")},m(b,D){T(b,e,D),g(e,l),g(l,t),g(t,n),g(l,s),g(l,r),g(r,a),g(e,o);for(let p=0;p<k.length;p+=1)k[p].m(e,null);T(b,c,D),T(b,h,D),g(h,d),g(h,v)},p(b,[D]){if(D&1){u=b[0];let p;for(p=0;p<u.length;p+=1){const m=se(b,u,p);k[p]?k[p].p(m,D):(k[p]=ne(m),k[p].c(),k[p].m(e,null))}for(;p<k.length;p+=1)k[p].d(1);k.length=u.length}D&1&&f!==(f=b[0].length+"")&&O(d,f)},i:U,o:U,d(b){b&&_(e),C(k,b),b&&_(c),b&&_(h)}}}function Ne(i,e,l){let{users:t}=e;return i.$$set=n=>{"users"in n&&l(0,t=n.users)},[t]}class De extends I{constructor(e){super();M(this,e,Ne,ze,X,{users:0})}}function re(i,e,l){const t=i.slice();return t[5]=e[l],t}function ie(i,e,l){const t=i.slice();return t[8]=e[l],t}function oe(i,e,l){const t=i.slice();return t[11]=e[l],t}function ce(i){let e,l=i[11].value+"",t;return{c(){e=y("td"),t=z(l),this.h()},l(n){e=$(n,"TD",{class:!0});var s=w(e);t=N(s,l),s.forEach(_),this.h()},h(){Q(e,"class","svelte-177xkck")},m(n,s){T(n,e,s),g(e,t)},p(n,s){s&1&&l!==(l=n[11].value+"")&&O(t,l)},d(n){n&&_(e)}}}function ae(i){let e,l=(i[8].votes.includes(i[5].id)?"X":" ")+"",t;return{c(){e=y("td"),t=z(l),this.h()},l(n){e=$(n,"TD",{class:!0});var s=w(e);t=N(s,l),s.forEach(_),this.h()},h(){Q(e,"class","svelte-177xkck")},m(n,s){T(n,e,s),g(e,t)},p(n,s){s&5&&l!==(l=(n[8].votes.includes(n[5].id)?"X":" ")+"")&&O(t,l)},d(n){n&&_(e)}}}function ue(i){let e,l,t=i[5].name+"",n,s,r,a=i[0],o=[];for(let c=0;c<a.length;c+=1)o[c]=ae(ie(i,a,c));return{c(){e=y("tr"),l=y("td"),n=z(t),s=A();for(let c=0;c<o.length;c+=1)o[c].c();r=A(),this.h()},l(c){e=$(c,"TR",{class:!0});var h=w(e);l=$(h,"TD",{class:!0});var f=w(l);n=N(f,t),f.forEach(_),s=q(h);for(let d=0;d<o.length;d+=1)o[d].l(h);r=q(h),h.forEach(_),this.h()},h(){Q(l,"class","svelte-177xkck"),Q(e,"class","svelte-177xkck")},m(c,h){T(c,e,h),g(e,l),g(l,n),g(e,s);for(let f=0;f<o.length;f+=1)o[f].m(e,null);g(e,r)},p(c,h){if(h&4&&t!==(t=c[5].name+"")&&O(n,t),h&5){a=c[0];let f;for(f=0;f<a.length;f+=1){const d=ie(c,a,f);o[f]?o[f].p(d,h):(o[f]=ae(d),o[f].c(),o[f].m(e,r))}for(;f<o.length;f+=1)o[f].d(1);o.length=a.length}},d(c){c&&_(e),C(o,c)}}}function Qe(i){let e,l,t,n,s,r,a,o,c,h,f,d=Math.floor(i[1]/i[2].length*100)+"",v,u,k=i[0],b=[];for(let m=0;m<k.length;m+=1)b[m]=ce(oe(i,k,m));let D=i[2],p=[];for(let m=0;m<D.length;m+=1)p[m]=ue(re(i,D,m));return{c(){e=y("div"),l=y("table"),t=y("thead"),n=y("td"),s=z("User"),r=A();for(let m=0;m<b.length;m+=1)b[m].c();a=A();for(let m=0;m<p.length;m+=1)p[m].c();o=A(),c=y("p"),h=z(i[1]),f=z(" answers ("),v=z(d),u=z("%)"),this.h()},l(m){e=$(m,"DIV",{class:!0});var S=w(e);l=$(S,"TABLE",{class:!0});var E=w(l);t=$(E,"THEAD",{class:!0});var B=w(t);n=$(B,"TD",{class:!0});var Z=w(n);s=N(Z,"User"),Z.forEach(_),r=q(B);for(let P=0;P<b.length;P+=1)b[P].l(B);B.forEach(_),a=q(E);for(let P=0;P<p.length;P+=1)p[P].l(E);E.forEach(_),S.forEach(_),o=q(m),c=$(m,"P",{});var R=w(c);h=N(R,i[1]),f=N(R," answers ("),v=N(R,d),u=N(R,"%)"),R.forEach(_),this.h()},h(){Q(n,"class","svelte-177xkck"),Q(t,"class","svelte-177xkck"),Q(l,"class","svelte-177xkck"),Q(e,"class","w-wrapper svelte-177xkck")},m(m,S){T(m,e,S),g(e,l),g(l,t),g(t,n),g(n,s),g(t,r);for(let E=0;E<b.length;E+=1)b[E].m(t,null);g(l,a);for(let E=0;E<p.length;E+=1)p[E].m(l,null);T(m,o,S),T(m,c,S),g(c,h),g(c,f),g(c,v),g(c,u)},p(m,[S]){if(S&1){k=m[0];let E;for(E=0;E<k.length;E+=1){const B=oe(m,k,E);b[E]?b[E].p(B,S):(b[E]=ce(B),b[E].c(),b[E].m(t,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=k.length}if(S&5){D=m[2];let E;for(E=0;E<D.length;E+=1){const B=re(m,D,E);p[E]?p[E].p(B,S):(p[E]=ue(B),p[E].c(),p[E].m(l,null))}for(;E<p.length;E+=1)p[E].d(1);p.length=D.length}S&2&&O(h,m[1]),S&6&&d!==(d=Math.floor(m[1]/m[2].length*100)+"")&&O(v,d)},i:U,o:U,d(m){m&&_(e),C(b,m),C(p,m),m&&_(o),m&&_(c)}}}function Se(i,e,l){let t,n,s,r,{quiz:a}=e;return i.$$set=o=>{"quiz"in o&&l(3,a=o.quiz)},i.$$.update=()=>{i.$$.dirty&8&&l(4,t=a==null?void 0:a.activeQuestion),i.$$.dirty&16&&l(0,n=(t==null?void 0:t.answers)||[]),i.$$.dirty&8&&l(2,s=(a==null?void 0:a.users)||[]),i.$$.dirty&17&&l(1,r=(t==null?void 0:t.type)==="multiple"?(n==null?void 0:n.map(o=>o.votes).flat().length)||0:t.state!=="closed"?n.length:(n==null?void 0:n.map(o=>o.votes).flat().length)||0)},[n,r,s,a,t]}class Ae extends I{constructor(e){super();M(this,e,Se,Qe,X,{quiz:3})}}function qe(i){let e,l,t,n;return{c(){e=y("button"),l=z("End Quiz"),this.h()},l(s){e=$(s,"BUTTON",{class:!0});var r=w(e);l=N(r,"End Quiz"),r.forEach(_),this.h()},h(){Q(e,"class","svelte-pg62n")},m(s,r){T(s,e,r),g(e,l),t||(n=V(e,"click",i[14]),t=!0)},p:U,i:U,o:U,d(s){s&&_(e),t=!1,n()}}}function Ue(i){let e,l,t,n,s;function r(c,h){if(c[2]==="open")return je;if(c[2]==="voting-open")return He;if(c[2]==="closed")return Oe}let a=r(i),o=a&&a(i);return{c(){o&&o.c(),e=A(),l=y("button"),t=z("End Quiz"),this.h()},l(c){o&&o.l(c),e=q(c),l=$(c,"BUTTON",{class:!0});var h=w(l);t=N(h,"End Quiz"),h.forEach(_),this.h()},h(){Q(l,"class","svelte-pg62n")},m(c,h){o&&o.m(c,h),T(c,e,h),T(c,l,h),g(l,t),n||(s=V(l,"click",i[13]),n=!0)},p(c,h){a===(a=r(c))&&o?o.p(c,h):(o&&o.d(1),o=a&&a(c),o&&(o.c(),o.m(e.parentNode,e)))},i:U,o:U,d(c){o&&o.d(c),c&&_(e),c&&_(l),n=!1,s()}}}function Be(i){let e,l,t,n,s,r,a,o,c;const h=[Re,Pe],f=[];function d(v,u){return v[0].startsAt?0:v[0].startsAt?-1:1}return~(n=d(i))&&(s=f[n]=h[n](i)),{c(){e=y("button"),l=z("Start Quiz"),t=A(),s&&s.c(),r=L(),this.h()},l(v){e=$(v,"BUTTON",{class:!0});var u=w(e);l=N(u,"Start Quiz"),u.forEach(_),t=q(v),s&&s.l(v),r=L(),this.h()},h(){Q(e,"class","svelte-pg62n")},m(v,u){T(v,e,u),g(e,l),T(v,t,u),~n&&f[n].m(v,u),T(v,r,u),a=!0,o||(c=V(e,"click",i[5]),o=!0)},p(v,u){let k=n;n=d(v),n===k?~n&&f[n].p(v,u):(s&&(G(),j(f[k],1,1,()=>{f[k]=null}),K()),~n?(s=f[n],s?s.p(v,u):(s=f[n]=h[n](v),s.c()),H(s,1),s.m(r.parentNode,r)):s=null)},i(v){a||(H(s),a=!0)},o(v){j(s),a=!1},d(v){v&&_(e),v&&_(t),~n&&f[n].d(v),v&&_(r),o=!1,c()}}}function Oe(i){let e;function l(s,r){var a;return((a=s[1])==null?void 0:a.index)===s[0].amount-1?Le:Ve}let t=l(i),n=t(i);return{c(){n.c(),e=L()},l(s){n.l(s),e=L()},m(s,r){n.m(s,r),T(s,e,r)},p(s,r){t===(t=l(s))&&n?n.p(s,r):(n.d(1),n=t(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n.d(s),s&&_(e)}}}function He(i){let e,l,t,n;return{c(){e=y("button"),l=z("Close Voting"),this.h()},l(s){e=$(s,"BUTTON",{class:!0});var r=w(e);l=N(r,"Close Voting"),r.forEach(_),this.h()},h(){Q(e,"class","svelte-pg62n")},m(s,r){T(s,e,r),g(e,l),t||(n=V(e,"click",i[10]),t=!0)},p:U,d(s){s&&_(e),t=!1,n()}}}function je(i){var r;let e,l=(((r=i[1])==null?void 0:r.type)==="voting"?"Start Voting":"End Question")+"",t,n,s;return{c(){e=y("button"),t=z(l),this.h()},l(a){e=$(a,"BUTTON",{class:!0});var o=w(e);t=N(o,l),o.forEach(_),this.h()},h(){Q(e,"class","svelte-pg62n")},m(a,o){T(a,e,o),g(e,t),n||(s=V(e,"click",i[9]),n=!0)},p(a,o){var c;o&2&&l!==(l=(((c=a[1])==null?void 0:c.type)==="voting"?"Start Voting":"End Question")+"")&&O(t,l)},d(a){a&&_(e),n=!1,s()}}}function Ve(i){let e,l,t,n;return{c(){e=y("button"),l=z("Next Question"),this.h()},l(s){e=$(s,"BUTTON",{class:!0});var r=w(e);l=N(r,"Next Question"),r.forEach(_),this.h()},h(){Q(e,"class","svelte-pg62n")},m(s,r){T(s,e,r),g(e,l),t||(n=V(e,"click",i[12]),t=!0)},p:U,d(s){s&&_(e),t=!1,n()}}}function Le(i){let e,l,t,n;return{c(){e=y("button"),l=z("Show Results"),this.h()},l(s){e=$(s,"BUTTON",{class:!0});var r=w(e);l=N(r,"Show Results"),r.forEach(_),this.h()},h(){Q(e,"class","svelte-pg62n")},m(s,r){T(s,e,r),g(e,l),t||(n=V(e,"click",i[11]),t=!0)},p:U,d(s){s&&_(e),t=!1,n()}}}function Pe(i){let e,l,t,n,s,r,a,o,c,h;return{c(){e=y("button"),l=z("Start in 10s"),t=A(),n=y("button"),s=z("Start in 1m"),r=A(),a=y("button"),o=z("Start in 5m"),this.h()},l(f){e=$(f,"BUTTON",{class:!0});var d=w(e);l=N(d,"Start in 10s"),d.forEach(_),t=q(f),n=$(f,"BUTTON",{class:!0});var v=w(n);s=N(v,"Start in 1m"),v.forEach(_),r=q(f),a=$(f,"BUTTON",{class:!0});var u=w(a);o=N(u,"Start in 5m"),u.forEach(_),this.h()},h(){Q(e,"class","svelte-pg62n"),Q(n,"class","svelte-pg62n"),Q(a,"class","svelte-pg62n")},m(f,d){T(f,e,d),g(e,l),T(f,t,d),T(f,n,d),g(n,s),T(f,r,d),T(f,a,d),g(a,o),c||(h=[V(e,"click",i[6]),V(n,"click",i[7]),V(a,"click",i[8])],c=!0)},p:U,i:U,o:U,d(f){f&&_(e),f&&_(t),f&&_(n),f&&_(r),f&&_(a),c=!1,be(h)}}}function Re(i){let e,l;return e=new ye({props:{endsAt:i[0].startsAt}}),{c(){F(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){W(e,t,n),l=!0},p(t,n){const s={};n&1&&(s.endsAt=t[0].startsAt),e.$set(s)},i(t){l||(H(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Ce(i){let e,l,t,n=(i[2]?"."+i[2]:"")+"",s,r,a,o,c,h;const f=[Be,Ue,qe],d=[];function v(u,k){return u[3]==="registration"?0:u[3]==="running"?1:u[3]==="results"?2:-1}return~(o=v(i))&&(c=d[o]=f[o](i)),{c(){e=y("header"),l=y("h1"),t=z(i[3]),s=z(n),r=A(),a=y("div"),c&&c.c(),this.h()},l(u){e=$(u,"HEADER",{class:!0});var k=w(e);l=$(k,"H1",{class:!0});var b=w(l);t=N(b,i[3]),s=N(b,n),b.forEach(_),r=q(k),a=$(k,"DIV",{class:!0});var D=w(a);c&&c.l(D),D.forEach(_),k.forEach(_),this.h()},h(){Q(l,"class","svelte-pg62n"),Q(a,"class","scroller svelte-pg62n"),Q(e,"class","svelte-pg62n")},m(u,k){T(u,e,k),g(e,l),g(l,t),g(l,s),g(e,r),g(e,a),~o&&d[o].m(a,null),h=!0},p(u,[k]){(!h||k&8)&&O(t,u[3]),(!h||k&4)&&n!==(n=(u[2]?"."+u[2]:"")+"")&&O(s,n);let b=o;o=v(u),o===b?~o&&d[o].p(u,k):(c&&(G(),j(d[b],1,1,()=>{d[b]=null}),K()),~o?(c=d[o],c?c.p(u,k):(c=d[o]=f[o](u),c.c()),H(c,1),c.m(a,null)):c=null)},i(u){h||(H(c),h=!0)},o(u){j(c),h=!1},d(u){u&&_(e),~o&&d[o].d()}}}function Ie(i,e,l){let t,n,s;const r=ve();let{quiz:a}=e;function o(m,S){r("action",{type:m,data:S})}const c=()=>o("start-quiz"),h=()=>o("start-quiz-timer",{time:10*1e3}),f=()=>o("start-quiz-timer",{time:60*1e3}),d=()=>o("start-quiz-timer",{time:60*1e3*5}),v=()=>o("close-question"),u=()=>o("close-voting"),k=()=>o("end-question"),b=()=>o("end-question"),D=()=>confirm("End Quiz?")&&o("end-quiz"),p=()=>confirm("End Quiz?")&&o("end-quiz");return i.$$set=m=>{"quiz"in m&&l(0,a=m.quiz)},i.$$.update=()=>{i.$$.dirty&1&&l(1,t=a==null?void 0:a.activeQuestion),i.$$.dirty&1&&l(3,n=a==null?void 0:a.state),i.$$.dirty&2&&l(2,s=t==null?void 0:t.state)},[a,t,s,n,o,c,h,f,d,v,u,k,b,D,p]}class Me extends I{constructor(e){super();M(this,e,Ie,Ce,X,{quiz:0})}}function fe(i,e,l){const t=i.slice();return t[9]=e[l],t}function Xe(i){let e,l;return{c(){e=y("p"),l=z("results")},l(t){e=$(t,"P",{});var n=w(e);l=N(n,"results"),n.forEach(_)},m(t,n){T(t,e,n),g(e,l)},p:U,i:U,o:U,d(t){t&&_(e)}}}function Ge(i){var k,b,D;let e,l=((k=i[2])==null?void 0:k.index)+1+"",t,n,s=i[0].amount+"",r,a,o,c=((b=i[2])==null?void 0:b.description)+"",h,f,d,v,u=((D=i[2])==null?void 0:D.answers)&&_e(i);return{c(){e=y("p"),t=z(l),n=z("/"),r=z(s),a=A(),o=y("p"),h=z(c),f=A(),u&&u.c(),d=L()},l(p){e=$(p,"P",{});var m=w(e);t=N(m,l),n=N(m,"/"),r=N(m,s),m.forEach(_),a=q(p),o=$(p,"P",{});var S=w(o);h=N(S,c),S.forEach(_),f=q(p),u&&u.l(p),d=L()},m(p,m){T(p,e,m),g(e,t),g(e,n),g(e,r),T(p,a,m),T(p,o,m),g(o,h),T(p,f,m),u&&u.m(p,m),T(p,d,m),v=!0},p(p,m){var S,E,B;(!v||m&4)&&l!==(l=((S=p[2])==null?void 0:S.index)+1+"")&&O(t,l),(!v||m&1)&&s!==(s=p[0].amount+"")&&O(r,s),(!v||m&4)&&c!==(c=((E=p[2])==null?void 0:E.description)+"")&&O(h,c),((B=p[2])==null?void 0:B.answers)?u?(u.p(p,m),m&4&&H(u,1)):(u=_e(p),u.c(),H(u,1),u.m(d.parentNode,d)):u&&(G(),j(u,1,1,()=>{u=null}),K())},i(p){v||(H(u),v=!0)},o(p){j(u),v=!1},d(p){p&&_(e),p&&_(a),p&&_(o),p&&_(f),u&&u.d(p),p&&_(d)}}}function Ke(i){let e,l,t,n=i[0].types,s=[];for(let r=0;r<n.length;r+=1)s[r]=he(fe(i,n,r));return l=new De({props:{users:i[1]}}),{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=A(),F(l.$$.fragment)},l(r){for(let a=0;a<s.length;a+=1)s[a].l(r);e=q(r),J(l.$$.fragment,r)},m(r,a){for(let o=0;o<s.length;o+=1)s[o].m(r,a);T(r,e,a),W(l,r,a),t=!0},p(r,a){if(a&33){n=r[0].types;let c;for(c=0;c<n.length;c+=1){const h=fe(r,n,c);s[c]?s[c].p(h,a):(s[c]=he(h),s[c].c(),s[c].m(e.parentNode,e))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}const o={};a&2&&(o.users=r[1]),l.$set(o)},i(r){t||(H(l.$$.fragment,r),t=!0)},o(r){j(l.$$.fragment,r),t=!1},d(r){C(s,r),r&&_(e),Y(l,r)}}}function _e(i){let e,l;return e=new Ae({props:{quiz:i[0]}}),{c(){F(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){W(e,t,n),l=!0},p(t,n){const s={};n&1&&(s.quiz=t[0]),e.$set(s)},i(t){l||(H(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function he(i){let e,l,t=i[9]+"",n,s,r;function a(){return i[7](i[9])}return{c(){e=y("button"),l=z("Load "),n=z(t)},l(o){e=$(o,"BUTTON",{});var c=w(e);l=N(c,"Load "),n=N(c,t),c.forEach(_)},m(o,c){T(o,e,c),g(e,l),g(e,n),s||(r=V(e,"click",a),s=!0)},p(o,c){i=o,c&1&&t!==(t=i[9]+"")&&O(n,t)},d(o){o&&_(e),s=!1,r()}}}function Fe(i){let e,l,t,n,s,r,a,o,c,h;e=new Me({props:{quiz:i[0]}}),e.$on("action",i[6]);const f=[Ke,Ge,Xe],d=[];function v(u,k){return u[3]==="registration"?0:u[3]==="running"?1:u[3]==="results"?2:-1}return~(s=v(i))&&(r=d[s]=f[s](i)),{c(){F(e.$$.fragment),l=A(),t=y("div"),n=A(),r&&r.c(),a=L(),this.h()},l(u){J(e.$$.fragment,u),l=q(u),t=$(u,"DIV",{id:!0,class:!0}),w(t).forEach(_),n=q(u),r&&r.l(u),a=L(),this.h()},h(){Q(t,"id","spacer"),Q(t,"class","svelte-18vhzys")},m(u,k){W(e,u,k),T(u,l,k),T(u,t,k),T(u,n,k),~s&&d[s].m(u,k),T(u,a,k),o=!0,c||(h=V(window,"keydown",i[4]),c=!0)},p(u,[k]){const b={};k&1&&(b.quiz=u[0]),e.$set(b);let D=s;s=v(u),s===D?~s&&d[s].p(u,k):(r&&(G(),j(d[D],1,1,()=>{d[D]=null}),K()),~s?(r=d[s],r?r.p(u,k):(r=d[s]=f[s](u),r.c()),H(r,1),r.m(a.parentNode,a)):r=null)},i(u){o||(H(e.$$.fragment,u),H(r),o=!0)},o(u){j(e.$$.fragment,u),j(r),o=!1},d(u){Y(e,u),u&&_(l),u&&_(t),u&&_(n),~s&&d[s].d(u),u&&_(a),c=!1,h()}}}function Je(i,e,l){let t,n,s,r,a;le(i,$e,d=>l(8,r=d)),le(i,we,d=>l(0,a=d));async function o({key:d}){if(d==="L"){const v=await ge("api/quiz");console.log(await v.json())}}function c(d,v){Ee("api/quiz",te({action:d},v))}ke(()=>{Te("quiz.admin",r)});const h=({detail:{type:d,data:v}})=>c(d,v),f=d=>c("load-type",{type:d});return i.$$.update=()=>{i.$$.dirty&1&&l(3,t=a==null?void 0:a.state),i.$$.dirty&1&&l(2,n=a==null?void 0:a.activeQuestion),i.$$.dirty&1&&l(1,s=a==null?void 0:a.users)},[a,s,n,t,o,c,h,f]}class lt extends I{constructor(e){super();M(this,e,Je,Fe,X,{})}}export{lt as default};