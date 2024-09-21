"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[81666],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(r),g=n,y=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return r?a.createElement(y,i(i({ref:t},m),{},{components:r})):a.createElement(y,i({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const o={},i="\u6559\u7a0b\u4e0e\u793a\u4f8b",l={unversionedId:"introduction/tutorial",id:"version-0.10.x/introduction/tutorial",title:"\u6559\u7a0b\u4e0e\u793a\u4f8b",description:"\u5982\u679c\u60a8\u559c\u6b22\u9010\u6b65\u7684\u6559\u7a0b\u6765\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 SeaORM\uff0c\u53ef\u4ee5\u67e5\u770b\u6211\u4eec\u7684 SeaORM \u6559\u7a0b\u3002",source:"@site/versioned_docs/version-0.10.x/01-introduction/04-tutorial.md",sourceDirName:"01-introduction",slug:"/introduction/tutorial",permalink:"/SeaORM/docs/0.10.x/introduction/tutorial",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/01-introduction/04-tutorial.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1710305593,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaORM \u6982\u5ff5",permalink:"/SeaORM/docs/0.10.x/introduction/sea-orm"},next:{title:"\u6570\u636e\u5e93\u4e0e\u5f02\u6b65\u8fd0\u884c\u65f6",permalink:"/SeaORM/docs/0.10.x/install-and-config/database-and-async-runtime"}},p={},s=[],m={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u6559\u7a0b\u4e0e\u793a\u4f8b"},"\u6559\u7a0b\u4e0e\u793a\u4f8b"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u559c\u6b22\u9010\u6b65\u7684\u6559\u7a0b\u6765\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 SeaORM\uff0c\u53ef\u4ee5\u67e5\u770b\u6211\u4eec\u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-tutorial/"},"SeaORM \u6559\u7a0b"),"\u3002"),(0,n.yg)("p",null,"\u9996\u5148\u4e86\u89e3\u57fa\u672c\u6982\u5ff5\u662f\u4e2a\u597d\u4e3b\u610f\uff0c\u56e0\u6b64\u8ba9\u6211\u4eec\u7ee7\u7eed\u3002"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u975e\u5e38\u8feb\u5207\u5e76\u5e0c\u671b\u5feb\u901f\u4e0a\u624b\uff0cSeaQL \u7ef4\u62a4\u4e86\u4e00\u5957\u5b98\u65b9\u793a\u4f8b\uff0c\u7531\u793e\u533a\u8d21\u732e\uff08\u6211\u4eec\u6b22\u8fce\u66f4\u591a\u7684\u8d21\u732e\uff01\uff09\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix v4 \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/salvo_example"},"Salvo \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic \u793a\u4f8b"))),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u6784\u5efa\u4e00\u4e2a\u5e7f\u6cdb\u6267\u884c\u5d4c\u5957\u5173\u7cfb\u9009\u62e9\u7684 Web API\uff0c\u8003\u8651\u63d0\u4f9b\u4e00\u4e2a GraphQL \u670d\u52a1\u5668\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"seaography"),' \u662f\u4e00\u4e2a\u57fa\u4e8e SeaORM \u5b9e\u4f53\u6784\u5efa GraphQL \u89e3\u6790\u5668\u7684 GraphQL \u6846\u67b6\u3002\u6709\u4e86 GraphQL \u89e3\u6790\u5668\uff0c\u9009\u62e9\u4e0a\u8ff0\u5d4c\u5957\u5173\u7cfb\u53d8\u5f97\u7b80\u5355\u6613\u884c\u3002\u67e5\u770b "',(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2022-09-27-getting-started-with-seaography/#query-data-via-graphql"},"\u4f7f\u7528 Seaography \u5165\u95e8"),'" \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002'),(0,n.yg)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u67e5\u770b ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-cookbook/"},"SeaORM Cookbook")," \u4ee5\u83b7\u53d6\u5e38\u89c1\u95ee\u9898\u548c SeaORM \u7684\u6700\u4f73\u5b9e\u8df5\u3002"))}u.isMDXComponent=!0}}]);