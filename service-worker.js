if(!self.define){let n,i={};const e=(e,o)=>(e=new URL(e+".js",o).href,i[e]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=i,document.head.appendChild(n)}else n=e,importScripts(e),i()})).then((()=>{let n=i[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(o,f)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const c=n=>e(n,s),l={module:{uri:s},exports:r,require:c};i[s]=Promise.all(o.map((n=>l[n]||c(n)))).then((n=>(f(...n),r)))}}define(["./workbox-eef3c273"],(function(n){"use strict";n.setCacheNameDetails({prefix:"quasar-pwa"}),self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.ea9e1ed3.css",revision:null},{url:"domain.crt",revision:"b3e69b6059792c349b9d893ed1f0d45b"},{url:"domain.csr",revision:"adfafbbca2fd6fe3ccc8d16a894ffc27"},{url:"domain.key",revision:"57df2e8d61a6a3b462794f2aff0cbbf1"},{url:"domain.pem",revision:"1fcf1c9d4c4e1bdc87021d6d25264882"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"fonts/materialdesignicons-webfont.d8e8e0f7.woff",revision:null},{url:"fonts/materialdesignicons-webfont.e9db4005.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"a0932fa17706401538597811e12e2ea6"},{url:"js/273.b4f3c177.js",revision:null},{url:"js/862.584b16c3.js",revision:null},{url:"js/944.3030b3db.js",revision:null},{url:"js/973.3aa1146c.js",revision:null},{url:"js/app.9f908565.js",revision:null},{url:"js/vendor.a633a1ba.js",revision:null},{url:"manifest.json",revision:"ed991d13cac8676d465021214ebfd7ff"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));