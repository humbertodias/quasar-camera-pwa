(()=>{"use strict";var e={4188:(e,r,o)=>{var t=o(1957),n=o(1947),a=o(499),i=o(9835);function s(e,r,o,t,n,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var c=o(1639);const u=(0,c.Z)(l,[["render",s]]),d=u;var p=o(3340),f=o(8339);const v=[{path:"/",component:()=>Promise.all([o.e(736),o.e(273)]).then(o.bind(o,273)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(944)]).then(o.bind(o,1944))},{path:"camera",component:()=>Promise.all([o.e(736),o.e(118)]).then(o.bind(o,1118))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(862)]).then(o.bind(o,1862))}],h=v,b=(0,p.BC)((function(){const e=f.r5,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return r}));async function m(e,r){const o=e(d);o.use(n.Z,r);const t=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:o,router:t}}var g=o(432);const y={config:{},plugins:{Notify:g.Z}};var w=o(368);(0,w.z)("service-worker.js",{ready(){console.log("Service worker is active.")},registered(){console.log("Service worker has been registered.")},cached(){},updatefound(){},updated(){g.Z.create({message:"New update avaiable",icon:"mdi-cloud-download-outline",closeBtn:"Update",timeout:1e4,onDismiss(){location.reload(!0)}})},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});async function k({app:e,router:r}){e.use(r),e.mount("#q-app")}m(t.ri,y).then(k)}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(r,t,n,a)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,n,a]=e[u],s=!0,l=0;l<t.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](t[l])))?t.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,n,a]}})(),(()=>{o.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(r,{a:r}),r}})(),(()=>{o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{118:"105f709f",273:"50059704",862:"584b16c3",944:"3030b3db"}[e]+".js"})(),(()=>{o.miniCssF=e=>{}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="quasar-pwa:";o.l=(t,n,a,i)=>{if(e[t])e[t].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",r+a),s.src=t),e[t]=[n];var p=(r,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),r)return r(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e={143:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((o,t)=>n=e[r]=[o,t]));t.push(n[2]=a);var i=o.p+o.u(r),s=new Error,l=t=>{if(o.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};o.l(i,l,"chunk-"+r,r)}},o.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[i,s,l]=t,c=0;if(i.some((r=>0!==e[r]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var u=l(o)}for(r&&r(t);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},t=globalThis["webpackChunkquasar_pwa"]=globalThis["webpackChunkquasar_pwa"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var t=o.O(void 0,[736],(()=>o(4188)));t=o.O(t)})();