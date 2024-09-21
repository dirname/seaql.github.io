"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[63893],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={},s="SeaORM \u7684\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48\uff1f",i={unversionedId:"whats-next/whats-next",id:"whats-next/whats-next",title:"SeaORM \u7684\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48\uff1f",description:"\u6211\u4eec\u4ecd\u7136\u8bb0\u5f97\u4e24\u5e74\u524d\u9996\u6b21 \u4ecb\u7ecd SeaORM \u7ed9 Rust \u793e\u533a\u7684\u60c5\u666f\u3002",source:"@site/docs/12-whats-next/01-whats-next.md",sourceDirName:"12-whats-next",slug:"/whats-next/whats-next",permalink:"/SeaORM/docs/next/whats-next/whats-next",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/12-whats-next/01-whats-next.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1713548768,formattedLastUpdatedAt:"Apr 19, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/SeaORM/docs/next/internal-design/architecture"}},p={},l=[],c={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"seaorm-\u7684\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"},"SeaORM \u7684\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48\uff1f"),(0,a.yg)("p",null,"\u6211\u4eec\u4ecd\u7136\u8bb0\u5f97\u4e24\u5e74\u524d\u9996\u6b21 ",(0,a.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2021-09-20-introducing-sea-orm/"},"\u4ecb\u7ecd SeaORM")," \u7ed9 Rust \u793e\u533a\u7684\u60c5\u666f\u3002"),(0,a.yg)("p",null,"\u5982\u4eca\uff0c\u8bb8\u591a\u5f00\u6e90\u9879\u76ee\u3001\u521d\u521b\u4f01\u4e1a\u548c\u516c\u53f8\u6b63\u5728\u4f7f\u7528 SeaORM\u3002\u5982\u679c\u60a8\u7684\u516c\u53f8\u6b63\u5728\u4f7f\u7528 SeaORM \u5e76\u5e0c\u671b\u88ab\u63a8\u8350\uff0c\u8bf7 ",(0,a.yg)("a",{parentName:"p",href:"https://forms.office.com/r/YbeqfTAgkJ"},"\u63d0\u4ea4\u63a8\u8350\u4fe1"),"\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528 SeaORM\uff0c\u8bf7\u53c2\u4e0e ",(0,a.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/community-survey"},"\u793e\u533a\u8c03\u67e5"),"\u3002\u60a8\u7684\u53cd\u9988\u5c06\u5f71\u54cd\u6211\u4eec\u5bf9\u9879\u76ee\u672a\u6765\u7684\u51b3\u7b56\u3002\u7279\u522b\u662f\uff0c\u5f53\u524d\u7684\u529f\u80fd\u96c6\u662f\u5426\u8db3\u591f\u597d\uff0c\u53ef\u4ee5\u88ab\u89c6\u4e3a\u201c\u7a33\u5b9a\u201d\uff1f\u6211\u4eec\u5e94\u8be5\u5c06\u6b64\u6b21\u53d1\u5e03\u547d\u540d\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"1.0")," \u5417\uff1f\u8fd8\u662f\u5e94\u8be5\u5c06\u6b64\u6b21\u53d1\u5e03\u6807\u8bb0\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"LTS"),"\uff0c\u5e76\u957f\u671f\u652f\u6301\u5b83\uff1f\u8fd9\u4f1a\u4fc3\u8fdb\u91c7\u7528\uff0c\u8fd8\u662f\u4f1a\u59a8\u788d\u8fdb\u5c55\uff1f"),(0,a.yg)("p",null,"\u5f00\u6e90\u9879\u76ee\u662f\u4e00\u4e2a\u6c38\u65e0\u6b62\u5883\u7684\u5de5\u4f5c\uff0c\u6211\u4eec\u6b63\u5728\u79ef\u6781\u5bfb\u627e\u65b9\u6cd5\u4ee5\u6301\u7eed\u53d1\u5c55\u9879\u76ee\u3002SeaQL.org \u662f\u4e00\u4e2a\u7531\u5145\u6ee1\u70ed\u60c5\u7684\u5f00\u53d1\u8005\u8fd0\u8425\u7684\u72ec\u7acb\u5f00\u6e90\u7ec4\u7ec7\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u7ed9\u6211\u4eec\u7684\u4ee3\u7801\u5e93\u52a0\u661f\u3001\u5206\u4eab\u4ee5\u53ca\u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," \u8fdb\u884c\u6350\u8d60\u6765\u652f\u6301\u6211\u4eec\u3002"),(0,a.yg)("p",null,"\u6211\u4eec\u6b63\u5728\u8003\u8651\u591a\u79cd\u65b9\u5411\u4e3a\u7ec4\u7ec7\u521b\u9020\u6536\u5165\u3002\u65e0\u8bba\u6211\u4eec\u505a\u4ec0\u4e48\uff0c\u6211\u4eec\u90fd\u5e0c\u671b\u4fdd\u6301\u4f5c\u4e3a\u4e00\u4e2a\u975e\u8425\u5229\u7ec4\u7ec7\u3002\u5982\u679c\u60a8\u6709\u4efb\u4f55\u5efa\u8bae\uff0c\u6216\u8005\u60f3\u52a0\u5165\u6216\u4e0e\u6211\u4eec\u5408\u4f5c\uff0c\u8bf7\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"hello[at]sea-ql.org")," \u544a\u8bc9\u6211\u4eec\u3002"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u8fc4\u4eca\u4e3a\u6b62\u7684\u652f\u6301\uff0c\u643a\u624b\u5171\u8fdb\uff0c\u6211\u4eec\u80fd\u591f\u4f7f\u5f00\u6e90\u4e8b\u4e1a\u53ef\u6301\u7eed\u53d1\u5c55\u3002"))}f.isMDXComponent=!0}}]);