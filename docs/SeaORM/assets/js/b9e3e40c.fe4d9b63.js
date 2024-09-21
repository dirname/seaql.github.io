"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[49616],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(58168),o=(r(96540),r(15680));const a={},i="\u4ec0\u4e48\u662f ORM",c={unversionedId:"introduction/orm",id:"introduction/orm",title:"\u4ec0\u4e48\u662f ORM",description:"\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\u5668\uff08ORM\uff09\u662f\u4e00\u4e2a\u7f16\u7a0b\u5e93\uff0c\u5e2e\u52a9\u60a8\u4f7f\u7528\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff08OOP\uff09\u8bed\u8a00\u4e0e\u5173\u7cfb\u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\u3002",source:"@site/docs/01-introduction/01-orm.md",sourceDirName:"01-introduction",slug:"/introduction/orm",permalink:"/SeaORM/docs/next/introduction/orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/01-introduction/01-orm.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1647163570,formattedLastUpdatedAt:"Mar 13, 2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7d22\u5f15",permalink:"/SeaORM/docs/next/index"},next:{title:"\u5f02\u6b65\u7f16\u7a0b",permalink:"/SeaORM/docs/next/introduction/async"}},l={},u=[],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u4ec0\u4e48\u662f-orm"},"\u4ec0\u4e48\u662f ORM"),(0,o.yg)("p",null,"\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\u5668\uff08ORM\uff09\u662f\u4e00\u4e2a\u7f16\u7a0b\u5e93\uff0c\u5e2e\u52a9\u60a8\u4f7f\u7528\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff08OOP\uff09\u8bed\u8a00\u4e0e\u5173\u7cfb\u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,o.yg)("p",null,"\u6570\u636e\u5e93\u4e2d\u7684\u8868\u548c\u5217\u6620\u5c04\u5230\u5bf9\u8c61\u548c\u5c5e\u6027\uff0c\u540c\u65f6\u9644\u52a0\u7684\u65b9\u6cd5\u5141\u8bb8\u60a8\u4ece\u6570\u636e\u5e93\u4e2d\u52a0\u8f7d\u548c\u5b58\u50a8\u6570\u636e\u3002"),(0,o.yg)("p",null,"\u7528 Rust \u6784\u5efa\u7684\u670d\u52a1\u8f7b\u91cf\u7ea7\uff08\u5c0f\u4e8c\u8fdb\u5236\u5927\u5c0f\uff0c\u4f4e\u5185\u5b58\u4f7f\u7528\uff09\u3001\u5b89\u5168\uff08\u5177\u6709\u7f16\u8bd1\u65f6\u4fdd\u8bc1\uff09\u3001\u6b63\u786e\uff08\u5982\u679c\u5355\u5143\u6d4b\u8bd5\u8bbe\u8ba1\u826f\u597d\uff09\u4ee5\u53ca\u5feb\u901f\uff08\u7f16\u8bd1\u65f6\u4f18\u5316\u6700\u5c0f\u5316\u8fd0\u884c\u65f6\u5f00\u9500\uff09\u3002"),(0,o.yg)("p",null,"\u7531\u4e8e Rust \u662f\u4e00\u79cd\u9759\u6001\u3001\u5f3a\u7c7b\u578b\u3001\u7f16\u8bd1\u578b\u3001\u7ebf\u7a0b\u5b89\u5168\u3001\u4e0d\u8fdb\u884c\u5783\u573e\u56de\u6536\u4e14\u4e0d\u4f20\u7edf\u7684\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\uff0c\u5728 Rust \u4e2d\u4f7f\u7528 ORM \u4e0e\u60a8\u5df2\u7ecf\u719f\u6089\u7684\u5176\u4ed6\u811a\u672c\u8bed\u8a00\u6709\u6240\u4e0d\u540c\u3002"),(0,o.yg)("p",null,"SeaORM \u5c1d\u8bd5\u5e2e\u52a9\u60a8\u5145\u5206\u5229\u7528\u4e0a\u8ff0\u4f18\u70b9\uff0c\u540c\u65f6\u907f\u514d\u5728 Rust \u7f16\u7a0b\u65f6\u9047\u5230\u7684\u56f0\u96be\u3002"),(0,o.yg)("p",null,"\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\u3002"))}d.isMDXComponent=!0}}]);