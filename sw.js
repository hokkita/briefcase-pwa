if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>n(e,o),b={module:{uri:o},exports:d,require:c};i[o]=Promise.all(r.map((e=>b[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"715fc6622b0017d0a114bfed2ad8aea6"},{url:"assets/index-4bb245db.js",revision:null},{url:"assets/index-e1212a73.css",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"briefcase-192x192.png",revision:"35a00db0e211ffd6d58db2569fd2b74c"},{url:"briefcase-512x512.png",revision:"51fb8b43c23d14d9961e72a518b0754e"},{url:"favicon.ico",revision:"53671cd80d4d4ba6f7e64cc75ba6f929"},{url:"favicon.png",revision:"51fb8b43c23d14d9961e72a518b0754e"},{url:"index.html",revision:"3c7ce0aab87182631635b6204029fd48"},{url:"mask-icon.svg",revision:"47bee5391d7c4f75fb6fca702b75ac71"},{url:"favicon.ico",revision:"53671cd80d4d4ba6f7e64cc75ba6f929"},{url:"apple-touch-icon.png",revision:"715fc6622b0017d0a114bfed2ad8aea6"},{url:"briefcase-192x192.png",revision:"35a00db0e211ffd6d58db2569fd2b74c"},{url:"briefcase-512x512.png",revision:"51fb8b43c23d14d9961e72a518b0754e"},{url:"manifest.webmanifest",revision:"0b46ec128b784281b098e3f2e8e32362"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
