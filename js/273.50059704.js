"use strict";(globalThis["webpackChunkquasar_pwa"]=globalThis["webpackChunkquasar_pwa"]||[]).push([[273],{273:(e,a,t)=>{t.r(a),t.d(a,{default:()=>j});var r=t(9835),n=t(6970);function i(e,a,t,i,s,o){const l=(0,r.up)("q-btn"),u=(0,r.up)("q-toolbar-title"),p=(0,r.up)("q-toolbar"),c=(0,r.up)("q-header"),d=(0,r.up)("q-item-label"),m=(0,r.up)("EssentialLink"),w=(0,r.up)("q-list"),v=(0,r.up)("q-drawer"),f=(0,r.up)("router-view"),k=(0,r.up)("q-page-container"),b=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.j4)(b,{view:"lHh Lpr lFf"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{elevated:""},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Quasar App ")])),_:1}),(0,r._)("div",null,"Quasar v"+(0,n.zw)(e.$q.version)+" / "+(0,n.zw)(e.appVersion),1)])),_:1})])),_:1}),(0,r.Wm)(v,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=a=>e.leftDrawerOpen=a),"show-if-above":"",bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{header:""},{default:(0,r.w5)((()=>[(0,r.Uk)(" Essential Links ")])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.essentialLinks,(e=>((0,r.wg)(),(0,r.j4)(m,(0,r.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f)])),_:1})])),_:1})}var s=t(499);function o(e,a,t,i,s,o){const l=(0,r.up)("q-icon"),u=(0,r.up)("q-item-section"),p=(0,r.up)("q-item-label"),c=(0,r.up)("q-item");return(0,r.wg)(),(0,r.j4)(c,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:(0,r.w5)((()=>[e.icon?((0,r.wg)(),(0,r.j4)(u,{key:0,avatar:""},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{name:e.icon},null,8,["name"])])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(e.title),1)])),_:1}),(0,r.Wm)(p,{caption:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const l=(0,r.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var u=t(1639),p=t(490),c=t(1233),d=t(2857),m=t(3115),w=t(9984),v=t.n(w);const f=(0,u.Z)(l,[["render",o]]),k=f;v()(l,"components",{QItem:p.Z,QItemSection:c.Z,QIcon:d.Z,QItemLabel:m.Z});const{version:b}=t(4147),q=[{title:"Camera",icon:"camera",link:"#camera"},{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],h=(0,r.aZ)({name:"MainLayout",components:{EssentialLink:k},setup(){const e=(0,s.iH)(!1);return{essentialLinks:q,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},data(){return{appVersion:b}}});var g=t(7605),Q=t(6602),_=t(1663),Z=t(7065),L=t(1973),W=t(1585),y=t(3246),C=t(2133);const D=(0,u.Z)(h,[["render",i]]),j=D;v()(h,"components",{QLayout:g.Z,QHeader:Q.Z,QToolbar:_.Z,QBtn:Z.Z,QToolbarTitle:L.Z,QDrawer:W.Z,QList:y.Z,QItemLabel:m.Z,QPageContainer:C.Z})},4147:e=>{e.exports=JSON.parse('{"name":"quasar-pwa","version":"main:7c5b61b","description":"A Quasar Project","productName":"Quasar App","author":"Humberto Dias <hldtux@gmail.com>","private":true,"scripts":{"lint":"eslint --ext .js,.vue ./","format":"prettier --write \\"**/*.{js,vue,scss,html,md,json}\\" --ignore-path .gitignore","test":"echo \\"No test specified\\" && exit 0","build":"quasar build"},"dependencies":{"@quasar/extras":"^1.0.0","core-js":"^3.6.5","quasar":"^2.6.0","vue":"^3.0.0","vue-router":"^4.0.0"},"devDependencies":{"@babel/eslint-parser":"^7.13.14","@quasar/app-webpack":"^3.0.0","eslint":"^8.10.0","eslint-config-prettier":"^8.1.0","eslint-plugin-vue":"^9.0.0","eslint-webpack-plugin":"^3.1.1","prettier":"^2.5.1","workbox-webpack-plugin":"^6.6.0"},"browserslist":["last 10 Chrome versions","last 10 Firefox versions","last 4 Edge versions","last 7 Safari versions","last 8 Android versions","last 8 ChromeAndroid versions","last 8 FirefoxAndroid versions","last 10 iOS versions","last 5 Opera versions"],"engines":{"node":">= 12.22.1","npm":">= 6.13.4","yarn":">= 1.21.1"}}')}}]);