const{VITE_API_URL:a=""}={VITE_API_URL:"https://si21.herokuapp.com",VITE_SVELTEKIT_AMP:"",BASE_URL:"/_app/",MODE:"production",DEV:!1,PROD:!0};let s;const n={};function p(e){if(e in n)return n[e].forEach(o=>o());try{const{type:o,data:t}=JSON.parse(e);if(console.groupCollapsed("ws:received "+o,o in n),console.log(t),console.log(n),console.groupEnd(),o in n)return n[o].forEach(c=>c(t))}catch(o){console.error(o)}}let l;function i(){if(!("WebSocket"in globalThis))return;let e=a||window.location.host;const o=window.location.protocol.includes("s");let t=new WebSocket(`ws${o?"s":""}://`+e.replace("https://","").replace("http://",""));t.onmessage=r=>{p(r.data)};let c;return l=new Promise(r=>{c=r}),t.onopen=()=>{console.log("Websocket Connected"),setTimeout(()=>{c()},50),c()},t.onclose=()=>{setTimeout(async()=>{console.log("Reconnecting"),s=i()},500)},t}function u(e,o){return s||(s=i()),n[e]=e in n?[...n[e],o]:[o],()=>{n[e]=n[e].filter(t=>t!==o)}}async function f(e,o){s||(s=i()),await l,s.send(JSON.stringify({type:e,data:o}))}export{f as e,u as o};