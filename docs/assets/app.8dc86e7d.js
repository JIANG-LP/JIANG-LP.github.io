import{e as nt,i as D,a as st,b as ot,c as rt,d as at,f as Ee,h as Ae,g as it,j as ct,k as lt,l as Pe,m as ut,s as dt,n as h,o as Te,r as ft,p as J,t as pt,w as ht,u as w,v as T,_ as x,x as d,y as p,z as l,A as b,B as ne,C as A,D as f,E as Re,F as E,G as Ne,H as Ie,I as Be,J as z,K as W,L as M,M as F,N as se,O as g,P as k,Q as H,R as _t,S as He,T as Q,U as vt,V as P}from"./plugin-vue_export-helper.74e6e36f.js";const mt="modulepreload",le={},gt="/",Oe=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${gt}${s}`,s in le)return;le[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":mt,o||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),o)return new Promise((i,c)=>{r.addEventListener("load",i),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},bt="http://www.w3.org/2000/svg",I=typeof document!="undefined"?document:null,ue=I&&I.createElement("template"),wt={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?I.createElementNS(bt,e):I.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>I.createTextNode(e),createComment:e=>I.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>I.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,o,a){const r=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{ue.innerHTML=s?`<svg>${e}</svg>`:e;const i=ue.content;if(s){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $t(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function kt(e,t,n){const s=e.style,o=D(n);if(n&&!o){for(const a in n)Z(s,a,n[a]);if(t&&!D(t))for(const a in t)n[a]==null&&Z(s,a,"")}else{const a=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const de=/\s*!important$/;function Z(e,t,n){if(Ee(n))n.forEach(s=>Z(e,t,s));else if(t.startsWith("--"))e.setProperty(t,n);else{const s=xt(e,t);de.test(n)?e.setProperty(Ae(s),n.replace(de,""),"important"):e[s]=n}}const fe=["Webkit","Moz","ms"],V={};function xt(e,t){const n=V[t];if(n)return n;let s=it(t);if(s!=="filter"&&s in e)return V[t]=s;s=ct(s);for(let o=0;o<fe.length;o++){const a=fe[o]+s;if(a in e)return V[t]=a}return t}const pe="http://www.w3.org/1999/xlink";function Lt(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(pe,t.slice(6,t.length)):e.setAttributeNS(pe,t,n);else{const a=lt(t);n==null||a&&!Pe(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function yt(e,t,n,s,o,a,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const i=n==null?"":n;(e.value!==i||e.tagName==="OPTION")&&(e.value=i),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const i=typeof e[t];if(i==="boolean"){e[t]=Pe(n);return}else if(n==null&&i==="string"){e[t]="",e.removeAttribute(t);return}else if(i==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let U=Date.now,De=!1;if(typeof window!="undefined"){U()>document.createEvent("Event").timeStamp&&(U=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);De=!!(e&&Number(e[1])<=53)}let ee=0;const St=Promise.resolve(),Ct=()=>{ee=0},Et=()=>ee||(St.then(Ct),ee=U());function At(e,t,n,s){e.addEventListener(t,n,s)}function Pt(e,t,n,s){e.removeEventListener(t,n,s)}function Tt(e,t,n,s,o=null){const a=e._vei||(e._vei={}),r=a[t];if(s&&r)r.value=s;else{const[i,c]=Rt(t);if(s){const u=a[t]=Nt(s,o);At(e,i,u,c)}else r&&(Pt(e,i,r,c),a[t]=void 0)}}const he=/(?:Once|Passive|Capture)$/;function Rt(e){let t;if(he.test(e)){t={};let n;for(;n=e.match(he);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ae(e.slice(2)),t]}function Nt(e,t){const n=s=>{const o=s.timeStamp||U();(De||o>=n.attached-1)&&ut(It(s,n.value),t,5,[s])};return n.value=e,n.attached=Et(),n}function It(e,t){if(Ee(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const _e=/^on[a-z]/,Bt=(e,t,n,s,o=!1,a,r,i,c)=>{t==="class"?$t(e,s,o):t==="style"?kt(e,n,s):st(t)?ot(t)||Tt(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ht(e,t,s,o))?yt(e,t,s,a,r,i,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Lt(e,t,s,o))};function Ht(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&_e.test(t)&&rt(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_e.test(t)&&D(n)?!1:t in e}const Ot=nt({patchProp:Bt},wt);let X,ve=!1;function Dt(){return X=ve?X:at(Ot),ve=!0,X}const Mt=(...e)=>{const t=Dt().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ut(s);if(o)return n(o,!0,o instanceof SVGElement)},t};function Ut(e){return D(e)?document.querySelector(e):e}var jt='{"lang":"zh-cn","title":"\u4E2A\u4EBA\u7B80\u5386","description":"Try my best, then, let it be.","base":"/","head":[],"themeConfig":{"repo":"/blog","logo":"/logo.png","docsDir":"docs","docsBranch":"main","nav":[{"text":"\u4E2A\u4EBA\u7B80\u5386","link":"/about/"},{"text":"\u9762\u8BD5\u603B\u7ED3","link":"/interview/"},{"text":"\u7B97\u6CD5","link":"/algorithm/"},{"text":"\u95EE\u9898\u8BB0\u5F55","link":"/debug/"},{"text":"\u5E38\u7528\u7F51\u5740","items":[{"text":"\u77E5\u4E4E","link":"https://www.zhihu.com/"},{"text":"\u6398\u91D1","link":"https://juejin.cn/"},{"text":"vue\u5B98\u7F51","link":"https://vuejs.org/"},{"text":"vite\u5B98\u7F51","link":"https://vitejs.dev/"},{"text":"antd\u5B98\u7F51","link":"https://antdv.com/"},{"text":"react\u5B98\u7F51","link":"https://reactjs.org/"},{"text":"flutter\u5B98\u7F51","link":"https://flutter.dev/"},{"text":"uni-app\u5B98\u7F51","link":"https://uniapp.dcloud.net.cn/"},{"text":"element-plus\u5B98\u7F51","link":"https://element-plus.gitee.io/zh-CN/component"}]}]},"locales":{},"langs":{},"scrollOffset":90}';const Me=/^https?:/i,S=typeof window!="undefined";function qt(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function me(e,t){const n=qt(t,Object.keys(e));return n?e[n]:void 0}function zt(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,o)=>(s[o]={label:t[o].label,lang:n[o].lang},s),{}):{}}function Wt(e,t){t=Ft(e,t);const n=me(e.locales||{},t),s=me(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:zt(e)})}function Ft(e,t){if(!S)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const Ue=Symbol(),G=dt(Gt(jt));function Gt(e){return JSON.parse(e)}function Kt(e){const t=h(()=>Wt(G.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{langs:n,lang:s}=t.value,o=Object.keys(n).find(a=>n[a].lang===s);return B(o||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function C(){const e=Te(Ue);if(!e)throw new Error("vitepress data not properly injected in app");return e}function Jt(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function B(e){return Me.test(e)?e:Jt(G.value.base,e)}function je(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),S){const n="/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const qe=Symbol(),ge="http://a.com",Vt=()=>({path:"/",component:null,data:{frontmatter:{}}});function Xt(e,t){const n=ft(Vt());function s(r=S?location.href:"/"){const i=new URL(r,ge);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",r=i.pathname+i.search+i.hash),S&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",r)),a(r)}let o=null;async function a(r,i=0){const c=new URL(r,ge),u=o=c.pathname;try{let _=e(u);if("then"in _&&typeof _.then=="function"&&(_=await _),o===u){o=null;const{default:v,__pageData:L}=_;if(!v)throw new Error(`Invalid route component: ${v}`);n.path=u,n.component=J(v),n.data=J(JSON.parse(L)),S&&pt(()=>{if(c.hash&&!i){let $=null;try{$=document.querySelector(decodeURIComponent(c.hash))}catch(y){console.warn(y)}if($){be($,c.hash);return}}window.scrollTo(0,i)})}}catch(_){_.message.match(/fetch/)||console.error(_),o===u&&(o=null,n.path=u,n.component=t?J(t):null)}}return S&&(window.addEventListener("click",r=>{const i=r.target.closest("a");if(i){const{href:c,protocol:u,hostname:_,pathname:v,hash:L,target:$}=i,y=window.location,N=v.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&$!=="_blank"&&u===y.protocol&&_===y.hostname&&!(N&&N[0]!==".html")&&(r.preventDefault(),v===y.pathname?L&&L!==y.hash&&(history.pushState(null,"",L),window.dispatchEvent(new Event("hashchange")),be(i,L,i.classList.contains("header-anchor"))):s(c))}},{capture:!0}),window.addEventListener("popstate",r=>{a(location.href,r.state&&r.state.scrollPosition||0)}),window.addEventListener("hashchange",r=>{r.preventDefault()})),{route:n,go:s}}function Yt(){const e=Te(qe);if(!e)throw new Error("useRouter() is called without provider.");return e}function R(){return Yt().route}function be(e,t,n=!1){let s=null;try{s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(o){console.warn(o)}if(s){let o=G.value.scrollOffset;typeof o=="string"&&(o=document.querySelector(o).getBoundingClientRect().bottom+24);const a=parseInt(window.getComputedStyle(s).paddingTop,10),r=window.scrollY+s.getBoundingClientRect().top-o+a;!n||Math.abs(r-window.scrollY)>window.innerHeight?window.scrollTo(0,r):window.scrollTo({left:0,top:r,behavior:"smooth"})}}function Qt(e,t){let n=[],s=!0;const o=a=>{if(s){s=!1;return}const r=[],i=Math.min(n.length,a.length);for(let c=0;c<i;c++){let u=n[c];const[_,v,L=""]=a[c];if(u.tagName.toLocaleLowerCase()===_){for(const $ in v)u.getAttribute($)!==v[$]&&u.setAttribute($,v[$]);for(let $=0;$<u.attributes.length;$++){const y=u.attributes[$].name;y in v||u.removeAttribute(y)}u.innerHTML!==L&&(u.innerHTML=L)}else document.head.removeChild(u),u=we(a[c]),document.head.append(u);r.push(u)}n.slice(i).forEach(c=>document.head.removeChild(c)),a.slice(i).forEach(c=>{const u=we(c);document.head.appendChild(u),r.push(u)}),n=r};ht(()=>{const a=e.data,r=t.value,i=a&&a.title,c=a&&a.description,u=a&&a.frontmatter.head;document.title=(i?i+" | ":"")+r.title,document.querySelector("meta[name=description]").setAttribute("content",c||r.description),o([...u?en(u):[]])})}function we([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function Zt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function en(e){return e.filter(t=>!Zt(t))}const tn=w({name:"VitePressContent",setup(){const e=R();return()=>T("div",{style:{position:"relative"}},[e.component?T(e.component):null])}});const nn=/#.*$/,sn=/(index)?\.(md|html)$/,j=/\/$/,on=/^[a-z]+:/i;function oe(e){return Array.isArray(e)}function re(e){return on.test(e)}function rn(e,t){if(t===void 0)return!1;const n=$e(`/${e.data.relativePath}`),s=$e(t);return n===s}function $e(e){return decodeURI(e).replace(nn,"").replace(sn,"")}function an(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function te(e){return/^\//.test(e)?e:`/${e}`}function ze(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function cn(e){return e===!1||e==="auto"||oe(e)}function ln(e){return e.children!==void 0}function un(e){return oe(e)?e.length===0:!e}function ae(e,t){if(cn(e))return e;t=te(t);for(const n in e)if(t.startsWith(te(n)))return e[n];return"auto"}function We(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:ze(n.link)}),ln(n)&&(t=[...t,...We(n.children)]),t),[])}const dn=["href","aria-label"],fn=["src"],pn=w({setup(e){const{site:t,theme:n,localePath:s}=C();return(o,a)=>(d(),p("a",{class:"nav-bar-title",href:l(s),"aria-label":`${l(t).title}, back to home`},[l(n).logo?(d(),p("img",{key:0,class:"logo",src:l(B)(l(n).logo),alt:"Logo"},null,8,fn)):b("",!0),ne(" "+A(l(t).title),1)],8,dn))}});var hn=x(pn,[["__scopeId","data-v-cc01ef16"]]);function _n(){const{site:e,localePath:t,theme:n}=C();return h(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const r=R().path.replace(t.value,""),i=o.map(u=>({text:s[u].label,link:`${u}${r}`}));return{text:n.value.selectText||"Languages",items:i}})}const vn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function mn(){const{site:e}=C();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=gn(n);return{text:bn(s,t.repoLabel),link:s}})}function gn(e){return Me.test(e)?e:`https://github.com/${e}`}function bn(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=vn.find(([o,a])=>a.test(n[0]));return s&&s[0]?s[0]:"Source"}function Fe(e){const t=R(),n=re(e.value.link);return{props:h(()=>{const o=ke(`/${t.data.relativePath}`);let a=!1;if(e.value.activeMatch)a=new RegExp(e.value.activeMatch).test(o);else{const r=ke(e.value.link);a=r==="/"?r===o:o.startsWith(r)}return{class:{active:a,isExternal:n},href:n?e.value.link:B(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function ke(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const wn={},$n={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},kn=f("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),xn=f("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Ln=[kn,xn];function yn(e,t){return d(),p("svg",$n,Ln)}var ie=x(wn,[["render",yn]]);const Sn={class:"nav-link"},Cn=w({props:{item:null},setup(e){const n=Re(e),{props:s,isExternal:o}=Fe(n.item);return(a,r)=>(d(),p("div",Sn,[f("a",Ne({class:"item"},l(s)),[ne(A(e.item.text)+" ",1),l(o)?(d(),E(ie,{key:0})):b("",!0)],16)]))}});var xe=x(Cn,[["__scopeId","data-v-b8818f8c"]]);const En=e=>(Ie("data-v-bbc27490"),e=e(),Be(),e),An={class:"nav-dropdown-link-item"},Pn=En(()=>f("span",{class:"arrow"},null,-1)),Tn={class:"text"},Rn={class:"icon"},Nn=w({props:{item:null},setup(e){const n=Re(e),{props:s,isExternal:o}=Fe(n.item);return(a,r)=>(d(),p("div",An,[f("a",Ne({class:"item"},l(s)),[Pn,f("span",Tn,A(e.item.text),1),f("span",Rn,[l(o)?(d(),E(ie,{key:0})):b("",!0)])],16)]))}});var In=x(Nn,[["__scopeId","data-v-bbc27490"]]);const Bn=["aria-label"],Hn={class:"button-text"},On={class:"dialog"},Dn=w({props:{item:null},setup(e){const t=R(),n=z(!1);W(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,a)=>(d(),p("div",{class:M(["nav-dropdown-link",{open:n.value}])},[f("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[f("span",Hn,A(e.item.text),1),f("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,Bn),f("ul",On,[(d(!0),p(F,null,se(e.item.items,r=>(d(),p("li",{key:r.text,class:"dialog-item"},[g(In,{item:r},null,8,["item"])]))),128))])],2))}});var Le=x(Dn,[["__scopeId","data-v-56bf3a3f"]]);const Mn={key:0,class:"nav-links"},Un={key:1,class:"item"},jn={key:2,class:"item"},qn=w({setup(e){const{theme:t}=C(),n=_n(),s=mn(),o=h(()=>t.value.nav||s.value||n.value);return(a,r)=>l(o)?(d(),p("nav",Mn,[l(t).nav?(d(!0),p(F,{key:0},se(l(t).nav,i=>(d(),p("div",{key:i.text,class:"item"},[i.items?(d(),E(Le,{key:0,item:i},null,8,["item"])):(d(),E(xe,{key:1,item:i},null,8,["item"]))]))),128)):b("",!0),l(n)?(d(),p("div",Un,[g(Le,{item:l(n)},null,8,["item"])])):b("",!0),l(s)?(d(),p("div",jn,[g(xe,{item:l(s)},null,8,["item"])])):b("",!0)])):b("",!0)}});var Ge=x(qn,[["__scopeId","data-v-eab3edfe"]]);const zn={emits:["toggle"]},Wn=f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Fn=[Wn];function Gn(e,t,n,s,o,a){return d(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=r=>e.$emit("toggle"))},Fn)}var Kn=x(zn,[["render",Gn]]);const Jn=e=>(Ie("data-v-675d8756"),e=e(),Be(),e),Vn={class:"nav-bar"},Xn=Jn(()=>f("div",{class:"flex-grow"},null,-1)),Yn={class:"nav"},Qn=w({emits:["toggle"],setup(e){return(t,n)=>(d(),p("header",Vn,[g(Kn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),g(hn),Xn,f("div",Yn,[g(Ge)]),k(t.$slots,"search",{},void 0,!0)]))}});var Zn=x(Qn,[["__scopeId","data-v-675d8756"]]);function es(){let e=null,t=null;const n=rs(s,300);function s(){const r=ts(),i=ns(r);for(let c=0;c<i.length;c++){const u=i[c],_=i[c+1],[v,L]=os(c,u,_);if(v){history.replaceState(null,document.title,L||" "),o(L);return}}}function o(r){if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${r}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function a(r){r&&r.classList.remove("active")}H(()=>{s(),window.addEventListener("scroll",n)}),_t(()=>{o(decodeURIComponent(location.hash))}),He(()=>{window.removeEventListener("scroll",n)})}function ts(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function ns(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function ss(){return document.querySelector(".nav-bar").offsetHeight}function ye(e){const t=ss();return e.parentElement.offsetTop-t-15}function os(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<ye(t)?[!1,null]:!n||s<ye(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function rs(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function as(){const e=R(),{site:t}=C();return es(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Se(n,o);const a=ae(t.value.themeConfig.sidebar,e.data.relativePath);return a===!1?[]:a==="auto"?Se(n,o):a})}function Se(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:a,slug:r})=>{if(o-1>t)return;const i={text:a,link:`#${r}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const Ke=e=>{const t=R(),{site:n,frontmatter:s}=C(),o=e.depth||1,a=s.value.sidebarDepth||1/0,r=t.data.headers,i=e.item.text,c=is(n.value.base,e.item.link),u=e.item.children,_=rn(t,e.item.link),v=o<a?Je(_,u,r,o+1):null;return T("li",{class:"sidebar-link"},[T(c?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:c},i),v])};function is(e,t){return t===void 0||t.startsWith("#")?t:an(e,t)}function Je(e,t,n,s=1){return t&&t.length>0?T("ul",{class:"sidebar-links"},t.map(o=>T(Ke,{item:o,depth:s}))):e&&n?Je(!1,cs(n),void 0,s):null}function cs(e){return Ve(ls(e))}function ls(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ve(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ve(t.children):void 0}))}const us={key:0,class:"sidebar-links"},ds=w({setup(e){const t=as();return(n,s)=>l(t).length>0?(d(),p("ul",us,[(d(!0),p(F,null,se(l(t),o=>(d(),E(l(Ke),{item:o},null,8,["item"]))),256))])):b("",!0)}});const fs=w({props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),p("aside",{class:M(["sidebar",{open:e.open}])},[g(Ge,{class:"nav"}),k(t.$slots,"sidebar-top",{},void 0,!0),g(ds),k(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var ps=x(fs,[["__scopeId","data-v-83e92a68"]]);const hs=/bitbucket.org/;function _s(){const{page:e,theme:t,frontmatter:n}=C(),s=h(()=>{const{repo:a,docsDir:r="",docsBranch:i="master",docsRepo:c=a,editLinks:u}=t.value,_=n.value.editLink!=null?n.value.editLink:u,{relativePath:v}=e.value;return!_||!v||!a?null:vs(a,c,r,i,v)}),o=h(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function vs(e,t,n,s,o){return hs.test(e)?gs(e,t,n,s,o):ms(e,t,n,s,o)}function ms(e,t,n,s,o){return(re(t)?t:`https://github.com/${t}`).replace(j,"")+`/edit/${s}/`+(n?n.replace(j,"")+"/":"")+o}function gs(e,t,n,s,o){return(re(t)?t:e).replace(j,"")+`/src/${s}/`+(n?n.replace(j,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const bs={class:"edit-link"},ws=["href"],$s=w({setup(e){const{url:t,text:n}=_s();return(s,o)=>(d(),p("div",bs,[l(t)?(d(),p("a",{key:0,class:"link",href:l(t),target:"_blank",rel:"noopener noreferrer"},[ne(A(l(n))+" ",1),g(ie,{class:"icon"})],8,ws)):b("",!0)]))}});var ks=x($s,[["__scopeId","data-v-1ed99556"]]);const xs={key:0,class:"last-updated"},Ls={class:"prefix"},ys={class:"datetime"},Ss=w({setup(e){const{theme:t,page:n}=C(),s=h(()=>{const r=t.value.lastUpdated;return r!==void 0&&r!==!1}),o=h(()=>{const r=t.value.lastUpdated;return r===!0?"Last Updated":r}),a=z("");return H(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(r,i)=>l(s)?(d(),p("p",xs,[f("span",Ls,A(l(o))+":",1),f("span",ys,A(a.value),1)])):b("",!0)}});var Cs=x(Ss,[["__scopeId","data-v-5797b537"]]);const Es={class:"page-footer"},As={class:"edit"},Ps={class:"updated"},Ts=w({setup(e){return(t,n)=>(d(),p("footer",Es,[f("div",As,[g(ks)]),f("div",Ps,[g(Cs)])]))}});var Rs=x(Ts,[["__scopeId","data-v-fb8d84c6"]]);function Ns(){const{page:e,theme:t}=C(),n=h(()=>ze(te(e.value.relativePath))),s=h(()=>{const c=ae(t.value.sidebar,n.value);return oe(c)?We(c):[]}),o=h(()=>s.value.findIndex(c=>c.link===n.value)),a=h(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),r=h(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=h(()=>!!a.value||!!r.value);return{next:a,prev:r,hasLinks:i}}const Is={},Bs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Hs=f("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Os=[Hs];function Ds(e,t){return d(),p("svg",Bs,Os)}var Ms=x(Is,[["render",Ds]]);const Us={},js={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},qs=f("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),zs=[qs];function Ws(e,t){return d(),p("svg",js,zs)}var Fs=x(Us,[["render",Ws]]);const Gs={key:0,class:"next-and-prev-link"},Ks={class:"container"},Js={class:"prev"},Vs=["href"],Xs={class:"text"},Ys={class:"next"},Qs=["href"],Zs={class:"text"},eo=w({setup(e){const{hasLinks:t,prev:n,next:s}=Ns();return(o,a)=>l(t)?(d(),p("div",Gs,[f("div",Ks,[f("div",Js,[l(n)?(d(),p("a",{key:0,class:"link",href:l(B)(l(n).link)},[g(Ms,{class:"icon icon-prev"}),f("span",Xs,A(l(n).text),1)],8,Vs)):b("",!0)]),f("div",Ys,[l(s)?(d(),p("a",{key:0,class:"link",href:l(B)(l(s).link)},[f("span",Zs,A(l(s).text),1),g(Fs,{class:"icon icon-next"})],8,Qs)):b("",!0)])])])):b("",!0)}});var to=x(eo,[["__scopeId","data-v-38ede35f"]]);const no={class:"page"},so={class:"container"},oo=w({setup(e){return(t,n)=>{const s=Q("Content");return d(),p("main",no,[f("div",so,[k(t.$slots,"top",{},void 0,!0),g(s,{class:"content"}),g(Rs),g(to),k(t.$slots,"bottom",{},void 0,!0)])])}}});var ro=x(oo,[["__scopeId","data-v-7eddb2c4"]]);const ao={key:0,id:"ads-container"},io=w({setup(e){const t=vt(()=>Oe(()=>import("./Home.3a37794d.js"),["assets/Home.3a37794d.js","assets/plugin-vue_export-helper.74e6e36f.js"])),n=()=>null,s=n,o=n,a=n,r=R(),{site:i,page:c,theme:u,frontmatter:_}=C(),v=h(()=>!!_.value.customLayout),L=h(()=>!!_.value.home),$=h(()=>Object.keys(i.value.langs).length>1),y=h(()=>{const m=u.value;return _.value.navbar===!1||m.navbar===!1?!1:i.value.title||m.logo||m.repo||m.nav}),N=z(!1),Ye=h(()=>_.value.home||_.value.sidebar===!1?!1:!un(ae(u.value.sidebar,r.data.relativePath))),K=m=>{N.value=typeof m=="boolean"?m:!N.value},Qe=K.bind(null,!1);W(r,Qe);const Ze=h(()=>[{"no-navbar":!y.value,"sidebar-open":N.value,"no-sidebar":!Ye.value}]);return(m,ce)=>{const et=Q("Content"),tt=Q("Debug");return d(),p(F,null,[f("div",{class:M(["theme",l(Ze)])},[l(y)?(d(),E(Zn,{key:0,onToggle:K},{search:P(()=>[k(m.$slots,"navbar-search",{},()=>[l(u).algolia?(d(),E(l(a),{key:0,options:l(u).algolia,multilang:l($)},null,8,["options","multilang"])):b("",!0)])]),_:3})):b("",!0),g(ps,{open:N.value},{"sidebar-top":P(()=>[k(m.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[k(m.$slots,"sidebar-bottom")]),_:3},8,["open"]),f("div",{class:"sidebar-mask",onClick:ce[0]||(ce[0]=xo=>K(!1))}),l(v)?(d(),E(et,{key:1})):l(L)?k(m.$slots,"home",{key:2},()=>[g(l(t),null,{hero:P(()=>[k(m.$slots,"home-hero")]),features:P(()=>[k(m.$slots,"home-features")]),footer:P(()=>[k(m.$slots,"home-footer")]),_:3})]):(d(),E(ro,{key:3},{top:P(()=>[k(m.$slots,"page-top-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.carbon?(d(),p("div",ao,[(d(),E(l(s),{key:"carbon"+l(c).relativePath,code:l(u).carbonAds.carbon,placement:l(u).carbonAds.placement},null,8,["code","placement"]))])):b("",!0)]),k(m.$slots,"page-top")]),bottom:P(()=>[k(m.$slots,"page-bottom"),k(m.$slots,"page-bottom-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.custom?(d(),E(l(o),{key:"custom"+l(c).relativePath,code:l(u).carbonAds.custom,placement:l(u).carbonAds.placement},null,8,["code","placement"])):b("",!0)])]),_:3}))],2),g(tt)],64)}}}),co={class:"theme"},lo=f("h1",null,"404",-1),uo=["href"],fo=w({setup(e){const{site:t}=C(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,a)=>(d(),p("div",co,[lo,f("blockquote",null,A(s()),1),f("a",{href:l(t).base,"aria-label":"go to home"},"Take me home.",8,uo)]))}}),Ce={Layout:io,NotFound:fo};var q={...Ce,Layout(){return T(Ce.Layout,null,{})}};const Y=new Set,Xe=()=>document.createElement("link"),po=e=>{const t=Xe();t.rel="prefetch",t.href=e,document.head.appendChild(t)},ho=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let O;const _o=S&&(O=Xe())&&O.relList&&O.relList.supports&&O.relList.supports("prefetch")?po:ho;function vo(){if(!S||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(r=>{if(r.isIntersecting){const i=r.target;n.unobserve(i);const{pathname:c}=i;if(!Y.has(c)){Y.add(c);const u=je(c);_o(u)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:r,hostname:i,pathname:c}=a,u=c.match(/\.\w+$/);u&&u[0]!==".html"||r!=="_blank"&&i===location.hostname&&(c!==location.pathname?n.observe(a):Y.add(c))})})};H(s);const o=R();W(()=>o.path,s),He(()=>{n&&n.disconnect()})}const mo=w({setup(e,{slots:t}){const n=z(!1);return H(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),go=q.NotFound||(()=>"404 Not Found"),bo={name:"VitePressApp",setup(){const{site:e}=C();return H(()=>{W(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),vo(),()=>T(q.Layout)}};function wo(){const e=ko(),t=$o();t.provide(qe,e);const n=Kt(e.route);return t.provide(Ue,n),S&&Qt(e.route,n.site),t.component("Content",tn),t.component("ClientOnly",mo),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),q.enhanceApp&&q.enhanceApp({app:t,router:e,siteData:G}),{app:t,router:e}}function $o(){return Mt(bo)}function ko(){let e=S,t;return Xt(n=>{let s=je(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),S?(e=!1,Oe(()=>import(s),[])):require(s)},go)}if(S){const{app:e,router:t}=wo();t.go().then(()=>{e.mount("#app")})}export{xe as N,wo as createApp,C as u,B as w};
