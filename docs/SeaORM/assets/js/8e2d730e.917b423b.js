"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[77955],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79712:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const o={},i="\u671f\u5f85\u672a\u6765",p={unversionedId:"seaography/looking-forward",id:"version-1.0.x/seaography/looking-forward",title:"\u671f\u5f85\u672a\u6765",description:"Seaography \u662f\u4e00\u4e2a\u672a\u77e5\u9886\u57df\u7684\u63a2\u7d22\uff0c\u56e0\u4e3a\u8fd9\u79cd\u64cd\u4f5c\u6a21\u5f0f\u548c\u62bd\u8c61\u65b9\u5f0f\u4e4b\u524d\u4ece\u672a\u5c1d\u8bd5\u8fc7\u3002\u6211\u4eec\u5bf9\u5b83\u4e3a SeaORM \u751f\u6001\u7cfb\u7edf\u5e26\u6765\u7684\u53ef\u80fd\u6027\u611f\u5230\u5174\u594b\u3002",source:"@site/versioned_docs/version-1.0.x/10-seaography/03-looking-forward.md",sourceDirName:"10-seaography",slug:"/seaography/looking-forward",permalink:"/SeaORM/docs/seaography/looking-forward",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-1.0.x/10-seaography/03-looking-forward.md",tags:[],version:"1.0.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833108,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8\u6307\u5357",permalink:"/SeaORM/docs/seaography/getting-started"},next:{title:"Traits and Types",permalink:"/SeaORM/docs/internal-design/trait-and-type"}},s={},l=[],c={toc:l},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u671f\u5f85\u672a\u6765"},"\u671f\u5f85\u672a\u6765"),(0,a.yg)("p",null,"Seaography \u662f\u4e00\u4e2a\u672a\u77e5\u9886\u57df\u7684\u63a2\u7d22\uff0c\u56e0\u4e3a\u8fd9\u79cd\u64cd\u4f5c\u6a21\u5f0f\u548c\u62bd\u8c61\u65b9\u5f0f\u4e4b\u524d\u4ece\u672a\u5c1d\u8bd5\u8fc7\u3002\u6211\u4eec\u5bf9\u5b83\u4e3a SeaORM \u751f\u6001\u7cfb\u7edf\u5e26\u6765\u7684\u53ef\u80fd\u6027\u611f\u5230\u5174\u594b\u3002"),(0,a.yg)("p",null,"\u7136\u800c\uff0cSeaography \u4ecd\u5904\u4e8e\u65e9\u671f\u9636\u6bb5\uff0c\u6211\u4eec\u9700\u8981\u60a8\u7684\u60f3\u6cd5\u3001\u53cd\u9988\u548c\u8d21\u732e\uff01"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u559c\u6b22\u8fd9\u4e2a\u9879\u76ee\uff0c\u8bf7\u7ed9 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"Seaography")," \u4ed3\u5e93\u52a0\u661f\u3002\u5982\u679c\u60a8\u611f\u5230\u6177\u6168\uff0c\u60a8\u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," \u7684\u5c0f\u989d\u6350\u8d60\u5c06\u4e0d\u80dc\u611f\u6fc0\uff0c\u8fd9\u5c06\u6709\u52a9\u4e8e\u8be5\u9879\u76ee\u7684\u6301\u7eed\u53d1\u5c55\u3002"))}y.isMDXComponent=!0}}]);