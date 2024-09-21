"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[70252],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={},i="\u6a21\u5f0f\u7ba1\u7406",c={unversionedId:"install-and-config/schema",id:"version-0.7.x/install-and-config/schema",title:"\u6a21\u5f0f\u7ba1\u7406",description:"\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u4e00\u4e2a\u5305\u542b\u8868\u548c\u6570\u636e\u7684\u6570\u636e\u5e93\uff0c\u60a8\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u90e8\u5206\uff0c\u76f4\u63a5\u67e5\u770b \u751f\u6210 SeaORM \u5b9e\u4f53\u3002",source:"@site/versioned_docs/version-0.7.x/02-install-and-config/02-schema.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/schema",permalink:"/SeaORM/docs/0.7.x/install-and-config/schema",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/02-install-and-config/02-schema.md",tags:[],version:"0.7.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677055524,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u4e0e\u5f02\u6b65\u8fd0\u884c\u65f6",permalink:"/SeaORM/docs/0.7.x/install-and-config/database-and-async-runtime"},next:{title:"\u8fde\u63a5\u6c60",permalink:"/SeaORM/docs/0.7.x/install-and-config/connection"}},l={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6a21\u5f0f\u7ba1\u7406"},"\u6a21\u5f0f\u7ba1\u7406"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u4e00\u4e2a\u5305\u542b\u8868\u548c\u6570\u636e\u7684\u6570\u636e\u5e93\uff0c\u60a8\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u90e8\u5206\uff0c\u76f4\u63a5\u67e5\u770b ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/sea-orm-cli"},"\u751f\u6210 SeaORM \u5b9e\u4f53"),"\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u662f\u4ece\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u5e93\u5f00\u59cb\uff0c\u5b9e\u9645\u4e0a\u4f7f\u7528\u8fc1\u79fb\u5de5\u5177\u5bf9\u60a8\u7684\u6570\u636e\u5e93\u6a21\u5f0f\u8fdb\u884c\u7248\u672c\u63a7\u5236\u662f\u66f4\u597d\u7684\u9009\u62e9\u3002\u8bf7\u6309\u7167 ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/migration/setting-up-migration"},"\u8fc1\u79fb\u6587\u6863")," \u4e2d\u7684\u6b65\u9aa4\u7f16\u5199\u8fc1\u79fb\uff0c\u5e76\u8fd0\u884c\u5b83\u4ee5\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868\u3002\u7136\u540e\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/sea-orm-cli"},"\u751f\u6210 SeaORM \u5b9e\u4f53"),"\u3002"))}u.isMDXComponent=!0}}]);