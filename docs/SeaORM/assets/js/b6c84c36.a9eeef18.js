"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[87398],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(58168),o=(r(96540),r(15680));const i={},a="\u4ec0\u4e48\u662f ORM",c={unversionedId:"introduction/orm",id:"version-1.0.x/introduction/orm",title:"\u4ec0\u4e48\u662f ORM",description:"\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\uff08ORM\uff09\u662f\u4e00\u4e2a\u7f16\u7a0b\u5e93\uff0c\u7528\u4e8e\u5e2e\u52a9\u60a8\u4ece\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff08OOP\uff09\u8bed\u8a00\u4e2d\u4e0e\u5173\u7cfb\u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\u3002",source:"@site/versioned_docs/version-1.0.x/01-introduction/01-orm.md",sourceDirName:"01-introduction",slug:"/introduction/orm",permalink:"/SeaORM/docs/introduction/orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-1.0.x/01-introduction/01-orm.md",tags:[],version:"1.0.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833108,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7d22\u5f15",permalink:"/SeaORM/docs/index"},next:{title:"\u5f02\u6b65\u7f16\u7a0b",permalink:"/SeaORM/docs/introduction/async"}},l={},u=[],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u4ec0\u4e48\u662f-orm"},"\u4ec0\u4e48\u662f ORM"),(0,o.yg)("p",null,"\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\uff08ORM\uff09\u662f\u4e00\u4e2a\u7f16\u7a0b\u5e93\uff0c\u7528\u4e8e\u5e2e\u52a9\u60a8\u4ece\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff08OOP\uff09\u8bed\u8a00\u4e2d\u4e0e\u5173\u7cfb\u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,o.yg)("p",null,"\u6570\u636e\u5e93\u4e2d\u7684\u8868\u548c\u5217\u88ab\u6620\u5c04\u5230\u5bf9\u8c61\u548c\u5c5e\u6027\uff0c\u800c\u9644\u52a0\u7684\u65b9\u6cd5\u5141\u8bb8\u60a8\u4ece\u6570\u636e\u5e93\u52a0\u8f7d\u548c\u5b58\u50a8\u6570\u636e\u3002"),(0,o.yg)("p",null,"\u7528 Rust \u6784\u5efa\u7684\u670d\u52a1\u662f\u8f7b\u91cf\u7ea7\u7684\uff08\u5c0f\u4e8c\u8fdb\u5236\u5927\u5c0f\uff0c\u4f4e\u5185\u5b58\u4f7f\u7528\uff09\uff0c\u5b89\u5168\u7684\uff08\u5177\u6709\u7f16\u8bd1\u65f6\u4fdd\u8bc1\uff09\uff0c\u6b63\u786e\u7684\uff08\u5982\u679c\u5355\u5143\u6d4b\u8bd5\u8bbe\u8ba1\u826f\u597d\uff09\uff0c\u4ee5\u53ca\u5feb\u901f\u7684\uff08\u7f16\u8bd1\u65f6\u4f18\u5316\u6700\u5c0f\u5316\u4e86\u8fd0\u884c\u65f6\u5f00\u9500\uff09\u3002"),(0,o.yg)("p",null,"\u7531\u4e8e Rust \u662f\u4e00\u79cd\u9759\u6001\u3001\u5f3a\u7c7b\u578b\u3001\u7f16\u8bd1\u578b\u3001\u7ebf\u7a0b\u5b89\u5168\u7684\u3001\u975e\u5783\u573e\u56de\u6536\u548c\u975e\u5e38\u89c4\u7684\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\uff0c\u5728 Rust \u4e2d\u4f7f\u7528 ORM \u4e0e\u60a8\u5df2\u7ecf\u719f\u6089\u7684\u5176\u4ed6\u811a\u672c\u8bed\u8a00\u6709\u6240\u4e0d\u540c\u3002"),(0,o.yg)("p",null,"SeaORM \u5c1d\u8bd5\u5e2e\u52a9\u60a8\u5728\u4eab\u53d7\u4e0a\u8ff0\u597d\u5904\u7684\u540c\u65f6\uff0c\u907f\u514d\u5728 Rust \u7f16\u7a0b\u65f6\u9047\u5230\u7684\u96be\u9898\u3002"),(0,o.yg)("p",null,"\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\u3002"))}d.isMDXComponent=!0}}]);