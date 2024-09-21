"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[81835],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),y=a,f=m["".concat(s,".").concat(y)]||m[y]||u[y]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},41296:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const o={},i="Bakery Schema",c={unversionedId:"relation/bakery-schema",id:"version-0.5.x/relation/bakery-schema",title:"Bakery Schema",description:"Bakery Schema ERD",source:"@site/versioned_docs/version-0.5.x/06-relation/06-bakery-schema.md",sourceDirName:"06-relation",slug:"/relation/bakery-schema",permalink:"/SeaORM/docs/0.5.x/relation/bakery-schema",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/06-relation/06-bakery-schema.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1640968558,formattedLastUpdatedAt:"Dec 31, 2021",sidebarPosition:6,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"\u81ea\u5f15\u7528",permalink:"/SeaORM/docs/0.5.x/relation/self-referencing"},next:{title:"\u9c81\u68d2\u6027\u4e0e\u6b63\u786e\u6027",permalink:"/SeaORM/docs/0.5.x/write-test/testing"}},s={},l=[],p={toc:l},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(m,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bakery-schema"},"Bakery Schema"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/SeaQL/sea-orm/master/tests/common/bakery_chain/bakery_chain_erd.svg",alt:"Bakery Schema ERD"})),(0,a.yg)("p",null,"\u5bf9\u4e8e\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u548c\u5173\u7cfb\u7684\u5b8c\u6574\u6a21\u5f0f\u793a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003 SeaORM \u6d4b\u8bd5\u5957\u4ef6\u4e2d\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/tests/common/bakery_chain"},"Bakery Schema"),"\u3002"))}u.isMDXComponent=!0}}]);