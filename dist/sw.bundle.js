if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const c=e=>a(e,n),d={module:{uri:n},exports:r,require:c};i[n]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(f(...e),r)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"39.bundle.js",revision:"c63cdec1edb749941b081f5e783e1fc7"},{url:"608.bundle.js",revision:"585a9a8a8d827fd69e73ed3fe5939ea4"},{url:"app.webmanifest",revision:"5e248ce87b9d89c9010b38921fab1a71"},{url:"app~39697611.bundle.js",revision:"49f04328376f248cec66e9af1439396f"},{url:"app~9ff54fbd.bundle.js",revision:"404430c395f65037bbd38c0e87543c72"},{url:"app~a51fa3f5.bundle.js",revision:"441dfcce16acf24094f519d4d1452448"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"513378bfc87979a4013facacc312ef36"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"ead674ec69afc44c741b8d98c9819b6d"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/icons/16x16.png",revision:"8584019c1e83482145c41be1ccabe16b"},{url:"images/icons/256x256.png",revision:"2a9dcaae8de5420ecb79e21c78df42f7"},{url:"images/icons/32x32.png",revision:"6d2ad2d530af820050be6829504a2ac8"},{url:"index.html",revision:"0a2df47f467ef8db684466b6b2f23e83"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
