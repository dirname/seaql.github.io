"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[47547],{15680:(e,a,r)=>{r.d(a,{xA:()=>y,yg:()=>d});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function p(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?p(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),m=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},y=function(e){var a=m(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},s=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),c=m(r),s=n,d=c["".concat(l,".").concat(s)]||c[s]||g[s]||p;return r?t.createElement(d,i(i({ref:a},y),{},{components:r})):t.createElement(d,i({ref:a},y))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=s;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<p;m++)i[m]=r[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},87553:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var t=r(58168),n=(r(96540),r(15680));const p={},i="\u7d22\u5f15",o={unversionedId:"index",id:"version-0.7.x/index",title:"\u7d22\u5f15",description:"SeaORM \u6559\u7a0b",source:"@site/versioned_docs/version-0.7.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/SeaORM/docs/0.7.x/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/01-index.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1648286882,formattedLastUpdatedAt:"Mar 26, 2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"\u4ec0\u4e48\u662f ORM",permalink:"/SeaORM/docs/0.7.x/introduction/orm"}},l={},m=[{value:"SeaORM \u6559\u7a0b",id:"seaorm-\u6559\u7a0b",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528",level:2},{value:"\u4e86\u89e3\u66f4\u591a",id:"\u4e86\u89e3\u66f4\u591a",level:2}],y={toc:m},c="wrapper";function g(e){let{components:a,...r}=e;return(0,n.yg)(c,(0,t.A)({},y,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,n.yg)("h2",{id:"seaorm-\u6559\u7a0b"},"SeaORM \u6559\u7a0b"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u66f4\u559c\u6b22\u9010\u6b65\u6559\u7a0b\u6765\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 SeaORM\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-tutorial/"},"SeaORM Tutorials"),"\uff01"),(0,n.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/introduction/orm"},"\u4ec0\u4e48\u662f ORM"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/introduction/async"},"Rust \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/introduction/sea-orm"},"SeaORM \u6982\u5ff5")))),(0,n.yg)("h2",{id:"\u5f00\u59cb\u4f7f\u7528"},"\u5f00\u59cb\u4f7f\u7528"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5b89\u88c5\u4e0e\u914d\u7f6e"),(0,n.yg)("p",{parentName:"li"},"1.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/install-and-config/database-and-async-runtime"},"\u9009\u62e9\u6570\u636e\u5e93\u4e0e\u5f02\u6b65\u8fd0\u884c\u65f6")),(0,n.yg)("p",{parentName:"li"},"1.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/install-and-config/schema"},"\u6a21\u5f0f\u7ba1\u7406")),(0,n.yg)("p",{parentName:"li"},"1.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/install-and-config/connection"},"\u8fde\u63a5\u6c60")),(0,n.yg)("p",{parentName:"li"},"1.4 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/install-and-config/debug-log"},"\u8c03\u8bd5\u65e5\u5fd7"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u751f\u6210\u5b9e\u4f53"),(0,n.yg)("p",{parentName:"li"},"2.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/sea-orm-cli"},"\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,n.yg)("p",{parentName:"li"},"2.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/entity-structure"},"\u5b9e\u4f53\u7ed3\u6784")),(0,n.yg)("p",{parentName:"li"},"2.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/expanded-entity-structure"},"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784")),(0,n.yg)("p",{parentName:"li"},"2.4 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/enumeration"},"\u679a\u4e3e"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u751f\u6210\u6570\u636e\u5e93\u6a21\u5f0f"),(0,n.yg)("p",{parentName:"li"},"3.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-database-schema/create-table"},"\u521b\u5efa\u8868")),(0,n.yg)("p",{parentName:"li"},"3.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-database-schema/create-enum"},"\u521b\u5efa\u679a\u4e3e")),(0,n.yg)("p",{parentName:"li"},"3.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-database-schema/create-index"},"\u521b\u5efa\u7d22\u5f15"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u8fc1\u79fb"),(0,n.yg)("p",{parentName:"li"},"4.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/migration/setting-up-migration"},"\u8bbe\u7f6e\u8fc1\u79fb")),(0,n.yg)("p",{parentName:"li"},"4.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/migration/writing-migration"},"\u7f16\u5199\u8fc1\u79fb")),(0,n.yg)("p",{parentName:"li"},"4.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/migration/running-migration"},"\u8fd0\u884c\u8fc1\u79fb"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u57fa\u672c CRUD"),(0,n.yg)("p",{parentName:"li"},"5.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/select"},"SELECT\uff1a\u67e5\u627e\u3001\u8fc7\u6ee4\u3001\u6392\u5e8f\u3001\u5206\u9875")),(0,n.yg)("p",{parentName:"li"},"5.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/insert"},"INSERT\uff1a\u6a21\u578b\u4e0e ActiveModel\uff0c\u6279\u91cf\u63d2\u5165")),(0,n.yg)("p",{parentName:"li"},"5.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/update"},"UPDATE\uff1a\u67e5\u627e\u4e0e\u4fdd\u5b58\uff0c\u6279\u91cf\u66f4\u65b0")),(0,n.yg)("p",{parentName:"li"},"5.4 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/save"},"SAVE\uff1a\u63d2\u5165\u6216\u66f4\u65b0")),(0,n.yg)("p",{parentName:"li"},"5.5 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/delete"},"DELETE\uff1a\u5220\u9664\u4e00\u6761\u4e0e\u6279\u91cf\u5220\u9664")),(0,n.yg)("p",{parentName:"li"},"5.6 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/json"},"JSON")),(0,n.yg)("p",{parentName:"li"},"5.7 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/raw-sql"},"\u539f\u59cb SQL \u67e5\u8be2")))),(0,n.yg)("h2",{id:"\u4e86\u89e3\u66f4\u591a"},"\u4e86\u89e3\u66f4\u591a"),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5173\u7cfb"),(0,n.yg)("p",{parentName:"li"},"6.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/one-to-one"},"\u4e00\u5bf9\u4e00")),(0,n.yg)("p",{parentName:"li"},"6.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/one-to-many"},"\u4e00\u5bf9\u591a")),(0,n.yg)("p",{parentName:"li"},"6.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/many-to-many"},"\u591a\u5bf9\u591a")),(0,n.yg)("p",{parentName:"li"},"6.4 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/chained-relations"},"\u94fe\u5f0f\u5173\u7cfb")),(0,n.yg)("p",{parentName:"li"},"6.5 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/self-referencing"},"\u81ea\u5f15\u7528")),(0,n.yg)("p",{parentName:"li"},"6.6 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/bakery-schema"},"\u70d8\u7119\u6a21\u5f0f"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u7f16\u5199\u6d4b\u8bd5"),(0,n.yg)("p",{parentName:"li"},"7.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/write-test/testing"},"\u5065\u58ee\u4e0e\u6b63\u786e")),(0,n.yg)("p",{parentName:"li"},"7.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/write-test/mock"},"\u6a21\u62df\u63a5\u53e3")),(0,n.yg)("p",{parentName:"li"},"7.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/write-test/sqlite"},"\u4f7f\u7528 SQLite"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u9ad8\u7ea7\u67e5\u8be2"),(0,n.yg)("p",{parentName:"li"},"8.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/custom-select"},"\u81ea\u5b9a\u4e49\u9009\u62e9")),(0,n.yg)("p",{parentName:"li"},"8.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/conditional-expression"},"\u6761\u4ef6\u8868\u8fbe\u5f0f")),(0,n.yg)("p",{parentName:"li"},"8.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/aggregate-function"},"\u805a\u5408\u51fd\u6570")),(0,n.yg)("p",{parentName:"li"},"8.4 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/custom-joins"},"\u81ea\u5b9a\u4e49\u8fde\u63a5")),(0,n.yg)("p",{parentName:"li"},"8.5 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/subquery"},"\u5b50\u67e5\u8be2")),(0,n.yg)("p",{parentName:"li"},"8.6 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/transaction"},"\u4e8b\u52a1")),(0,n.yg)("p",{parentName:"li"},"8.7 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/streaming"},"\u6d41\u5f0f\u5904\u7406")),(0,n.yg)("p",{parentName:"li"},"8.8 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/custom-active-model"},"\u81ea\u5b9a\u4e49 Active Model"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5185\u90e8\u8bbe\u8ba1"),(0,n.yg)("p",{parentName:"li"},"9.1 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/internal-design/trait-and-type"},"\u7279\u5f81\u4e0e\u7c7b\u578b")),(0,n.yg)("p",{parentName:"li"},"9.2 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/internal-design/derive-macro"},"\u6d3e\u751f\u5b8f")),(0,n.yg)("p",{parentName:"li"},"9.3 ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/internal-design/diesel"},"\u4e0e Diesel \u7684\u6bd4\u8f83")))))}g.isMDXComponent=!0}}]);