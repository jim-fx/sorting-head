var y=Object.defineProperty;var S=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&b(e,n,t[n]);if(S)for(var n of S(t))E.call(t,n)&&b(e,n,t[n]);return e};import{o as i,m as q,g as z}from"./index-d0b67739.js";import{C as s}from"./vendor-453c144d.js";var O=(e,t)=>{e="local-store-"+e;{let n=t;if(e in localStorage)try{n=JSON.parse(localStorage.getItem(e))}catch(d){console.log(d)}n=l(l({},t),n);const m=s(n);return m.subscribe(d=>{localStorage.setItem(e,JSON.stringify(d))}),m}};let u=0,c=0,w=500,f=500,p,g;function v({alpha:e,beta:t}){p||(p=e),g||(g=t),u=(g-t)/80*-1,c=(p-e)/80*-2,a.set({x:u,y:c})}function j(){w=window.innerHeight,f=window.innerWidth}function L({clientX:e,clientY:t}){u=e/f*2-1,c=t/w*2-1,a.set({x:u,y:c})}const a=s({x:0,y:0});function Q(){w=window.innerHeight,f=window.innerWidth,window.addEventListener("resize",j),window.addEventListener("mousemove",L),window.DeviceOrientationEvent?window.addEventListener("deviceorientation",v,!0):window.DeviceMotionEvent?window.addEventListener("devicemotion",function(e){v({alpha:e.acceleration.x*2,beta:e.acceleration.y*2})},!0):window.addEventListener("MozOrientation",function(){v({alpha:orientation.x*50,beta:orientation.y*50})},!0)}Object.defineProperty(a,"x",{get:()=>u});Object.defineProperty(a,"y",{get:()=>c});Object.defineProperty(a,"init",{get:()=>Q});const P=a,o=s();o.subscribe(e=>{"window"in globalThis&&(window.q=e)});function h(e){i("quiz."+e,t=>{o.update(n=>(n[e]=t,n))})}i("question.state",e=>{o.update(t=>(t.activeQuestion.state=e,t))});i("question.active",e=>{o.update(t=>(t.activeQuestion=e,t))});i("question",e=>{console.log("got question",e),o.update(t=>(t.activeQuestion=e,t))});i("question.correctAnswer",e=>{o.update(t=>(t.activeQuestion.correctAnswer=e,t))});h("users");h("startsAt");h("state");i("question.answers",e=>{o.update(t=>(console.log("question.answers",e),t.activeQuestion.answers=e,t))});i("quiz",e=>{o.update((t={})=>q(t,e))});const W=O("user-data",{name:"",confidence:-1,house:"",role:"USER"}),A=s({users:{},house:{ravenclaw:0,gryffindor:0,slytherin:0,hufflepuff:0}});i("quiz.points",e=>{A.set(e)});const I=s(!1);let r;function J(){return r||(r=s({}),r.init=async()=>{const e=await z("api/state");r.set(await e.json())},i("state.state",e=>{r.update(t=>(t.state=e,t))}),i("state.points",e=>{r.update(t=>(t.points=e,t))}),r)}export{P as e,I as f,J as g,O as l,A as p,o as q,W as u};