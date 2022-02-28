var A=Object.defineProperty;var S=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var b=(e,n,o)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,s=(e,n)=>{for(var o in n||(n={}))N.call(n,o)&&b(e,o,n[o]);if(S)for(var o of S(n))z.call(n,o)&&b(e,o,n[o]);return e};import{E as l}from"./emulatorMessageHandler.2af1efb8.js";import{j as t,a as c,T as C,S as u,C as w,R as D,A as O,b as k,B as E,c as L,d as P,e as M,f as F,g as T,h as W,W as j,i as q,k as H,l as _,P as G,m as U,n as J,o as K,r as i,D as Q,p as I,I as d,q as V,s as X,t as Y,L as y,u as Z,v as $,w as ee,x as te,y as ne,F as re,z as oe,E as ce,G as ae,H as ie,J as se}from"./vendor.77b8c1b9.js";function m(e){return t("div",{className:e.direction==="vertical"?" mt-auto":"ml-auto"})}function p({icon:e,text:n}){return c(k,{className:"flex gap-1",color:"text.primary",children:[t(e,{}),n]})}function le(){return c(C,{children:[t(m,{direction:"horizontal"}),c(u,{spacing:3,direction:"row",children:[t(p,{icon:w,text:"Open"}),t(p,{icon:w,text:"Go Back"}),t(p,{icon:D,text:"Menu Bar"}),t(p,{icon:O,text:"Options"})]})]})}const ue=e=>t(E,{className:"flex w-screen h-screen overflow-hidden",sx:{backgroundColor:"background.default"},children:e.children}),de=e=>t("div",{className:"flex grow overflow-hidden",children:e.children}),me=e=>c("div",{className:"flex grow flex-col",children:[e.top,t(de,{children:e.center}),e.bottom]});function fe(e){return c(ue,{children:[e.left,t(me,{top:e.top,center:e.children,bottom:e.bottom})]})}const v={key:"account",icon:L,activeIcon:P,color:"info"},he=[{key:"games",icon:M,activeIcon:F,color:"success"},{key:"consoles",icon:T,activeIcon:W,color:"error"},{key:"recent",icon:j,activeIcon:q,color:"primary"},{key:"favorites",icon:H,activeIcon:_,color:"warning"}],pe=[{key:"power",icon:G,activeIcon:U,color:"info"},{key:"settings",icon:J,activeIcon:K,color:"info"}];function x({active:e,item:n,onClick:o}){const r=e?n.activeIcon:n.icon;return t(d,{color:e?n.color:"info",sx:{width:"64px",height:"64px"},onClick:()=>o(n.key),children:t(r,{fontSize:"large"})})}function ge(){const[e,n]=i.exports.useState("games"),o=r=>n(r);return t(Q,{variant:"persistent",anchor:"left",sx:{width:"78px"},open:!0,children:c(E,{className:"flex flex-col grow items-center p-2",children:[c(u,{children:[t(x,{item:v,onClick:o,active:e===v.key},v.key),t(I,{sx:{margin:"16px 0"}}),t(u,{spacing:1,children:he.map(r=>t(x,{item:r,active:e===r.key,onClick:o},r.key))})]}),t(m,{direction:"vertical"}),t(u,{spacing:1,direction:"column",children:pe.map(r=>t(x,{item:r,active:e===r.key,onClick:o},r.key))})]})})}var ye="/retroid/assets/retroid_t.28b3dbb3.png";function ve(){const[e,n]=i.exports.useState(new Date);return i.exports.useEffect(()=>{setInterval(()=>n(new Date),3e4)},[]),c(u,{direction:"row",spacing:2,className:"flex items-center",children:[t(k,{variant:"h6",color:"text.primary",children:e.toLocaleString("en-US",{hour:"numeric",minute:"numeric"})}),t(k,{variant:"h6",color:"text.primary",className:"flex items-center",children:t(V,{})})]})}function xe(){return t(X,{position:"relative",color:"transparent",elevation:0,children:c(C,{children:[c(Y,{"aria-label":"breadcrumb",children:[t(y,{underline:"hover",color:"inherit",href:"/",children:t(Z,{variant:"square",src:ye,sx:{width:56,height:48}})}),t(y,{underline:"hover",color:"inherit",href:"/",children:"Snes"}),t(y,{underline:"hover",color:"inherit",href:"/",children:"Super Mario World"})]}),t(m,{direction:"horizontal"}),t("div",{className:"gap-1 flex items-center",children:t(ve,{})})]})})}const R="emulator-container",ke=()=>{var e;return document.fullscreenElement?document.exitFullscreen():(e=document.getElementById(R))==null?void 0:e.requestFullscreen()},Se=({onStart:e,onPause:n,onResume:o})=>{const[r,a]=i.exports.useState(null);return t(d,{onClick:r!==null?()=>{r?n():o(),a(!r)}:()=>{e(),a(!0)},size:"small",color:"primary","aria-label":"Play",component:"span",children:t(r?te:ne,{fontSize:"large"})})},be=({onRestart:e})=>t(d,{size:"small",color:"primary","aria-label":"fullscreen",component:"span",onClick:e,children:t($,{fontSize:"large"})}),we=()=>{const[e,n]=i.exports.useState(!1);return i.exports.useEffect(()=>{const r="fullscreenchange",a=()=>n(!!document.fullscreenElement);return document.addEventListener(r,a),()=>document.removeEventListener(r,a)},[]),t(d,{onClick:ke,size:"small",color:"primary","aria-label":"fullscreen",component:"span",children:t(e?re:oe,{fontSize:"large"})})},Ce=()=>t(d,{onClick:()=>{},size:"small",color:"primary","aria-label":"Aspect Ration",component:"span",children:t(ee,{fontSize:"large"})}),Ee=e=>t("div",{className:"absolute inset-0 flex flex-col rounded",children:e.children}),Ie=e=>c("div",{className:"bg-black bg-opacity-60 w-full flex p-2",children:[t(I,{}),t(Se,s({},e)),t(be,s({},e)),t(m,{direction:"horizontal"}),t(Ce,{}),t(we,{})]});function Re(e){return c(Ee,{children:[t(m,{direction:"vertical"}),t(Ie,s({},e))]})}const Be=e=>{var n;return(n=e.current)==null?void 0:n.contentWindow};function Ae(e,n){window.onmessage=function({data:o}){var r;o.type==="ready"&&((r=Be(e))==null||r.postMessage(n,"*"))}}function Ne(e){const n={type:l.initialize,payload:{rom:e.rom,core:e.core}};i.exports.useEffect(()=>{Ae(e.iframeRef,n)},[e.iframeRef])}function ze(e){const n={type:l.start},o={type:l.pause},r={type:l.resume},a={type:l.restart};return{onStart:()=>e(n),onPause:()=>e(o),onResume:()=>e(r),onRestart:()=>e(a)}}function De(e){const n=i.exports.useRef(null),o=i.exports.useRef(null),r=g=>{var f,h;return(h=(f=n.current)==null?void 0:f.contentWindow)==null?void 0:h.postMessage(g,"*")};Ne(s({iframeRef:n},e));const a=ze(r);return c("figure",{ref:o,id:R,className:"relative w-full h-full flex items-center justify-center select-none bg-black",children:[t("iframe",{id:"iframe-id",className:"w-full h-full",ref:n,src:"emulator.html",title:"Emulator"}),t(Re,s({},a))]})}function Oe(){return t("div",{className:"flex m-6 flex-grow",children:t(De,{rom:"smw.sfc",core:"snes9x"})})}function Le(){return t(fe,{left:t(ge,{}),top:t(xe,{}),bottom:t(le,{}),children:t(Oe,{})})}const Pe=ce({palette:{mode:"dark",primary:{main:"#37B6FF"},info:{main:"#D9D9D8"},warning:{main:"#ffde5a"},success:{main:"#80cb2b"},error:{main:"#eb1d29"},text:{primary:"#D9D9D8"},background:{default:"#1e3c65",paper:"#1e1e1e"}}});ae.render(t(ie.StrictMode,{children:t(se,{theme:Pe,children:t(Le,{})})}),document.getElementById("root"));
