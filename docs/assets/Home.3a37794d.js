import{u as y,w as F,N as x}from"./app.8dc86e7d.js";import{_ as m,u as h,n as i,z as e,x as o,y as a,D as c,A as r,C as l,F as g,M as I,N as L,T as A,O as d,P as k}from"./plugin-vue_export-helper.74e6e36f.js";const C={key:0,class:"home-hero"},N={key:0,class:"figure"},B=["src","alt"],w={key:1,id:"main-title",class:"title"},D={key:2,class:"tagline"},V=h({setup(p){const{site:s,frontmatter:t}=y(),_=i(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return n||u||$||H&&T}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(n,u)=>e(_)?(o(),a("header",C,[e(t).heroImage?(o(),a("figure",N,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,B)])):r("",!0),e(v)?(o(),a("h1",w,l(e(v)),1)):r("",!0),e(f)?(o(),a("p",D,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var b=m(V,[["__scopeId","data-v-370f18c0"]]);const S={key:0,class:"home-features"},z={class:"wrapper"},E={class:"container"},M={class:"features"},O={key:0,class:"title"},P={key:1,class:"details"},j=h({setup(p){const{frontmatter:s}=y(),t=i(()=>s.value.features&&s.value.features.length>0),_=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",S,[c("div",z,[c("div",E,[c("div",M,[(o(!0),a(I,null,L(e(_),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",O,l(n.title),1)):r("",!0),n.details?(o(),a("p",P,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var q=m(j,[["__scopeId","data-v-e39c13e0"]]);const G={key:0,class:"footer"},J={class:"container"},K={class:"text"},Q=h({setup(p){const{frontmatter:s}=y();return(t,_)=>e(s).footer?(o(),a("footer",G,[c("div",J,[c("p",K,l(e(s).footer),1)])])):r("",!0)}});var R=m(Q,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=h({setup(p){return(s,t)=>{const _=A("Content");return o(),a("main",U,[d(b),k(s.$slots,"hero",{},void 0,!0),d(q),c("div",W,[d(_)]),k(s.$slots,"features",{},void 0,!0),d(R),k(s.$slots,"footer",{},void 0,!0)])}}});var ee=m(X,[["__scopeId","data-v-10122c92"]]);export{ee as default};
