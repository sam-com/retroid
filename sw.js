if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const t=e=>r(e,n),u={module:{uri:n},exports:o,require:t};s[n]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-3c99db12"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/emulator.16baa320.js",revision:null},{url:"assets/emulator.758a9439.css",revision:null},{url:"assets/main.b2ad277d.js",revision:null},{url:"assets/main.fb3319df.css",revision:null},{url:"assets/modulepreload-polyfill.b7f2da20.js",revision:null},{url:"assets/vendor.0c425e59.js",revision:null},{url:"cores/snes9x_libretro.js",revision:"4c29e627d23791358c4a13e27ab3b68b"},{url:"emulator.html",revision:"453c702940222079a281fb7bd10439e2"},{url:"index.html",revision:"d5adf57a5953f241ff62ee55ddcb274e"},{url:"registerSW.js",revision:"fd73f7cbc61f4172621380d389a74d27"},{url:"manifest.webmanifest",revision:"c9ce65ecc5b3c2f8734f0349c3221775"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
