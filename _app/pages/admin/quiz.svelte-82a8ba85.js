import{S as O,i as j,s as w,e as v,t as d,k as y,l as z,c as E,a as Q,g as m,d as _,n as N,f as p,G as b,h as q,H as T,N as B,A as D,P as S,Z as H}from"../../chunks/vendor-1794dca4.js";import{e as I,o as R,p as U}from"../../chunks/index-e98830f3.js";import{q as C,u as V}from"../../chunks/stores-7a7e5634.js";function P(a,t,s){const o=a.slice();return o[11]=t[s],o}function G(a){let t,s;return{c(){t=v("p"),s=d("results")},l(o){t=E(o,"P",{});var c=Q(t);s=m(c,"results"),c.forEach(_)},m(o,c){p(o,t,c),b(t,s)},p:T,d(o){o&&_(t)}}}function L(a){let t,s,o=a[3].activeQuestion.description+"",c,u,r;function f(e,l){if(e[1]==="open")return F;if(e[1]==="voting-open")return g;if(e[1]==="closed")return Z}let n=f(a),i=n&&n(a);return{c(){t=v("p"),s=d("Active Question: "),c=d(o),u=y(),i&&i.c(),r=z()},l(e){t=E(e,"P",{});var l=Q(t);s=m(l,"Active Question: "),c=m(l,o),l.forEach(_),u=N(e),i&&i.l(e),r=z()},m(e,l){p(e,t,l),b(t,s),b(t,c),p(e,u,l),i&&i.m(e,l),p(e,r,l)},p(e,l){l&8&&o!==(o=e[3].activeQuestion.description+"")&&q(c,o),n===(n=f(e))&&i?i.p(e,l):(i&&i.d(1),i=n&&n(e),i&&(i.c(),i.m(r.parentNode,r)))},d(e){e&&_(t),e&&_(u),i&&i.d(e),e&&_(r)}}}function M(a){let t,s,o=a[3].users.length+"",c,u,r,f,n,i;return{c(){t=v("p"),s=d("User Registration "),c=d(o),u=y(),r=v("button"),f=d("Start Quiz")},l(e){t=E(e,"P",{});var l=Q(t);s=m(l,"User Registration "),c=m(l,o),l.forEach(_),u=N(e),r=E(e,"BUTTON",{});var k=Q(r);f=m(k,"Start Quiz"),k.forEach(_)},m(e,l){p(e,t,l),b(t,s),b(t,c),p(e,u,l),p(e,r,l),b(r,f),n||(i=S(r,"click",a[5]),n=!0)},p(e,l){l&8&&o!==(o=e[3].users.length+"")&&q(c,o)},d(e){e&&_(t),e&&_(u),e&&_(r),n=!1,i()}}}function Z(a){let t,s,o,c;return{c(){t=v("button"),s=d("End Question")},l(u){t=E(u,"BUTTON",{});var r=Q(t);s=m(r,"End Question"),r.forEach(_)},m(u,r){p(u,t,r),b(t,s),o||(c=S(t,"click",a[8]),o=!0)},p:T,d(u){u&&_(t),o=!1,c()}}}function g(a){let t,s,o,c;return{c(){t=v("button"),s=d("Close Voting")},l(u){t=E(u,"BUTTON",{});var r=Q(t);s=m(r,"Close Voting"),r.forEach(_)},m(u,r){p(u,t,r),b(t,s),o||(c=S(t,"click",a[7]),o=!0)},p:T,d(u){u&&_(t),o=!1,c()}}}function F(a){let t,s,o,c,u,r,f=a[0],n=[];for(let i=0;i<f.length;i+=1)n[i]=A(P(a,f,i));return{c(){t=v("table");for(let i=0;i<n.length;i+=1)n[i].c();s=y(),o=v("button"),c=d("Close Question")},l(i){t=E(i,"TABLE",{});var e=Q(t);for(let k=0;k<n.length;k+=1)n[k].l(e);e.forEach(_),s=N(i),o=E(i,"BUTTON",{});var l=Q(o);c=m(l,"Close Question"),l.forEach(_)},m(i,e){p(i,t,e);for(let l=0;l<n.length;l+=1)n[l].m(t,null);p(i,s,e),p(i,o,e),b(o,c),u||(r=S(o,"click",a[6]),u=!0)},p(i,e){if(e&1){f=i[0];let l;for(l=0;l<f.length;l+=1){const k=P(i,f,l);n[l]?n[l].p(k,e):(n[l]=A(k),n[l].c(),n[l].m(t,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=f.length}},d(i){i&&_(t),H(n,i),i&&_(s),i&&_(o),u=!1,r()}}}function A(a){let t,s=a[11].userId+"",o,c,u=a[11].value+"",r;return{c(){t=v("p"),o=d(s),c=d(" | "),r=d(u)},l(f){t=E(f,"P",{});var n=Q(t);o=m(n,s),c=m(n," | "),r=m(n,u),n.forEach(_)},m(f,n){p(f,t,n),b(t,o),b(t,c),b(t,r)},p(f,n){n&1&&s!==(s=f[11].userId+"")&&q(o,s),n&1&&u!==(u=f[11].value+"")&&q(r,u)},d(f){f&&_(t)}}}function J(a){let t,s,o,c,u,r;function f(e,l){if(e[2]==="registration")return M;if(e[2]==="running")return L;if(e[2]==="results")return G}let n=f(a),i=n&&n(a);return{c(){t=v("h1"),s=d(a[2]),o=d("."),c=d(a[1]),u=y(),i&&i.c(),r=z()},l(e){t=E(e,"H1",{});var l=Q(t);s=m(l,a[2]),o=m(l,"."),c=m(l,a[1]),l.forEach(_),u=N(e),i&&i.l(e),r=z()},m(e,l){p(e,t,l),b(t,s),b(t,o),b(t,c),p(e,u,l),i&&i.m(e,l),p(e,r,l)},p(e,[l]){l&4&&q(s,e[2]),l&2&&q(c,e[1]),n===(n=f(e))&&i?i.p(e,l):(i&&i.d(1),i=n&&n(e),i&&(i.c(),i.m(r.parentNode,r)))},i:T,o:T,d(e){e&&_(t),e&&_(u),i&&i.d(e),e&&_(r)}}}function K(a,t,s){let o,c,u,r,f;B(a,C,h=>s(3,u=h)),B(a,V,h=>s(10,r=h)),B(a,C,h=>s(4,f=h));let n=[];D(()=>{I("quiz.admin",r),R("question.answer",h=>{u.activeQuestion.id===h.id&&s(0,n=[...n,...h.answers])})});const i=()=>{U("api/quiz",{action:"start-quiz"})},e=()=>{U("api/quiz",{action:"close-question"})},l=()=>{U("api/quiz",{action:"close-voting"})},k=()=>{U("api/quiz",{action:"end-question"})};return a.$$.update=()=>{var h;a.$$.dirty&16&&s(2,o=f==null?void 0:f.state),a.$$.dirty&16&&s(1,c=((h=f==null?void 0:f.activeQuestion)==null?void 0:h.state)||""),a.$$.dirty&16&&(f==null||f.users)},[n,c,o,u,f,i,e,l,k]}class x extends O{constructor(t){super();j(this,t,K,J,w,{})}}export{x as default};
