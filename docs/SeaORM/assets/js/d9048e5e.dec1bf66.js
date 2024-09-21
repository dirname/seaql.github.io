"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[83769],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const i={},o="\u6d41\u5f0f\u5904\u7406",c={unversionedId:"advanced-query/streaming",id:"version-0.4.x/advanced-query/streaming",title:"\u6d41\u5f0f\u5904\u7406",description:"\u5728\u4efb\u4f55 Select \u4e0a\u4f7f\u7528\u5f02\u6b65\u6d41\u4ee5\u51cf\u5c11\u5185\u5b58\u5206\u914d\uff0c\u63d0\u9ad8\u6548\u7387\u3002",source:"@site/versioned_docs/version-0.4.x/08-advanced-query/07-streaming.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/streaming",permalink:"/SeaORM/docs/0.4.x/advanced-query/streaming",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/08-advanced-query/07-streaming.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1640968085,formattedLastUpdatedAt:"Dec 31, 2021",sidebarPosition:7,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"\u4e8b\u52a1",permalink:"/SeaORM/docs/0.4.x/advanced-query/transaction"},next:{title:"\u81ea\u5b9a\u4e49\u6d3b\u52a8\u6a21\u578b",permalink:"/SeaORM/docs/0.4.x/advanced-query/custom-active-model"}},l={},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6d41\u5f0f\u5904\u7406"},"\u6d41\u5f0f\u5904\u7406"),(0,a.yg)("p",null,"\u5728\u4efb\u4f55 ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," \u4e0a\u4f7f\u7528\u5f02\u6b65\u6d41\u4ee5\u51cf\u5c11\u5185\u5b58\u5206\u914d\uff0c\u63d0\u9ad8\u6548\u7387\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"// \u6d41\u5f0f\u83b7\u53d6\u6240\u6709\u6c34\u679c\nlet mut stream = Fruit::find().stream(db).await?;\n\nwhile let Some(item) = stream.try_next().await? {\n    let item: fruit::ActiveModel = item.into();\n    // \u5bf9 item \u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'// \u6d41\u5f0f\u83b7\u53d6\u6240\u6709\u540d\u79f0\u5305\u542b\u5b57\u7b26 "a" \u7684\u6c34\u679c\nlet mut stream = Fruit::find()\n    .filter(fruit::Column::Name.contains("a"))\n    .order_by_asc(fruit::Column::Name)\n    .stream(db)\n    .await?;\n')),(0,a.yg)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6d41\u5bf9\u8c61\u5c06\u5728\u88ab\u91ca\u653e\u4e4b\u524d\u72ec\u5360\u8fde\u63a5\uff0c\u9632\u6b62\u8fde\u63a5\u88ab\u5176\u4ed6\u5730\u65b9\u501f\u7528\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"{\n    let s1 = Fruit::find().stream(db).await?;\n    let s2 = Fruit::find().stream(db).await?;\n    let s3 = Fruit::find().stream(db).await?;\n    // \u6301\u6709 3 \u4e2a\u8fde\u63a5\n}\n// \u6240\u6709\u6d41\u88ab\u91ca\u653e\uff0c\u8fde\u63a5\u8fd4\u56de\u8fde\u63a5\u6c60\n")))}p.isMDXComponent=!0}}]);