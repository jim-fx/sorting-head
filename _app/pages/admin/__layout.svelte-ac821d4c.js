import{S as w,i as D,s as N,e as d,t as y,c as m,a as v,g as S,d as _,b as E,a6 as T,f as h,G as j,N as M,h as U,H as g,ae as B,aj as C,l as $,u as b,w as F,x as k,a7 as z,A as G,r as H,I as J,k as A,j as K,n as I,m as R,o as V,J as Y,K as P,L as Q,v as W}from"../../chunks/vendor-4d1406ba.js";import{g as X}from"../../chunks/navigation-51f4a605.js";import{p as Z,s as x}from"../../chunks/index-d0b67739.js";import{g as tt,u as O}from"../../chunks/index-5d576dff.js";import"../../chunks/singletons-12a22614.js";function q(r,t,s){const e=r.slice();return e[5]=t[s],e}function L(r){let t,s=r[5]+"",e,l,c;function n(){return r[3](r[5])}return{c(){t=d("button"),e=y(s),this.h()},l(i){t=m(i,"BUTTON",{class:!0});var o=v(t);e=S(o,s),o.forEach(_),this.h()},h(){E(t,"class","svelte-18febzl"),T(t,"selected",r[5]===r[0])},m(i,o){h(i,t,o),j(t,e),l||(c=M(t,"click",n),l=!0)},p(i,o){r=i,o&2&&s!==(s=r[5]+"")&&U(e,s),o&3&&T(t,"selected",r[5]===r[0])},d(i){i&&_(t),l=!1,c()}}}function et(r){let t,s=r[1],e=[];for(let l=0;l<s.length;l+=1)e[l]=L(q(r,s,l));return{c(){t=d("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=m(l,"DIV",{class:!0});var c=v(t);for(let n=0;n<e.length;n+=1)e[n].l(c);c.forEach(_),this.h()},h(){E(t,"class","wrapper svelte-18febzl")},m(l,c){h(l,t,c);for(let n=0;n<e.length;n+=1)e[n].m(t,null)},p(l,[c]){if(c&7){s=l[1];let n;for(n=0;n<s.length;n+=1){const i=q(l,s,n);e[n]?e[n].p(i,c):(e[n]=L(i),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:g,o:g,d(l){l&&_(t),B(e,l)}}}function st(r,t,s){let{values:e=[]}=t,{value:l=e[0]}=t;const c=C();function n(o){s(0,l=o),c("select",o)}const i=o=>n(o);return r.$$set=o=>{"values"in o&&s(1,e=o.values),"value"in o&&s(0,l=o.value)},[l,e,n,i]}class lt extends w{constructor(t){super();D(this,t,st,et,N,{values:1,value:0})}}function nt(r){let t,s;return{c(){t=d("a"),s=y("login"),this.h()},l(e){t=m(e,"A",{href:!0});var l=v(t);s=S(l,"login"),l.forEach(_),this.h()},h(){E(t,"href","/auth/login")},m(e,l){h(e,t,l),j(t,s)},p:g,i:g,o:g,d(e){e&&_(t)}}}function ot(r){let t,s,e,l,c,n,i;const o=r[6].default,f=J(o,r,r[5],null);return e=new lt({props:{values:r[3],value:r[1].state}}),e.$on("select",r[7]),{c(){f&&f.c(),t=A(),s=d("footer"),K(e.$$.fragment),l=A(),c=d("style"),n=y(`footer {
			position: fixed;
			bottom: 0px;
			left: 0px;
			width: 100%;
			padding: 20px;
			background-color: white;
		}`)},l(a){f&&f.l(a),t=I(a),s=m(a,"FOOTER",{});var u=v(s);R(e.$$.fragment,u),u.forEach(_),l=I(a),c=m(a,"STYLE",{});var p=v(c);n=S(p,`footer {
			position: fixed;
			bottom: 0px;
			left: 0px;
			width: 100%;
			padding: 20px;
			background-color: white;
		}`),p.forEach(_)},m(a,u){f&&f.m(a,u),h(a,t,u),h(a,s,u),V(e,s,null),h(a,l,u),h(a,c,u),j(c,n),i=!0},p(a,u){f&&f.p&&(!i||u&32)&&Y(f,o,a,a[5],i?Q(o,a[5],u,null):P(a[5]),null);const p={};u&2&&(p.value=a[1].state),e.$set(p)},i(a){i||(k(f,a),k(e.$$.fragment,a),i=!0)},o(a){b(f,a),b(e.$$.fragment,a),i=!1},d(a){f&&f.d(a),a&&_(t),a&&_(s),W(e),a&&_(l),a&&_(c)}}}function at(r){let t,s,e,l;const c=[ot,nt],n=[];function i(o,f){return o[0].role==="ADMIN"?0:1}return t=i(r),s=n[t]=c[t](r),{c(){s.c(),e=$()},l(o){s.l(o),e=$()},m(o,f){n[t].m(o,f),h(o,e,f),l=!0},p(o,[f]){let a=t;t=i(o),t===a?n[t].p(o,f):(H(),b(n[a],1,1,()=>{n[a]=null}),F(),s=n[t],s?s.p(o,f):(s=n[t]=c[t](o),s.c()),k(s,1),s.m(e.parentNode,e))},i(o){l||(k(s),l=!0)},o(o){b(s),l=!1},d(o){n[t].d(o),o&&_(e)}}}function rt(r,t,s){let e,l;z(r,O,u=>s(0,e=u));let{$$slots:c={},$$scope:n}=t;const i=tt();z(r,i,u=>s(1,l=u));const o=["quiz","points"];function f(u){Z("api/state",{state:u}),X("/admin/"+u)}G(()=>{x(O)});const a=({detail:u})=>f(u);return r.$$set=u=>{"$$scope"in u&&s(5,n=u.$$scope)},[e,l,i,o,f,n,c,a]}class ht extends w{constructor(t){super();D(this,t,rt,at,N,{})}}export{ht as default};
