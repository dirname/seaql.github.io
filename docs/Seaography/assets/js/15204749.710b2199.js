"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[541],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(r),m=n,u=g["".concat(i,".").concat(m)]||g[m]||y[m]||o;return r?a.createElement(u,p(p({ref:t},c),{},{components:r})):a.createElement(u,p({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[g]="string"==typeof e?e:n,p[1]=l;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(8168),n=(r(6540),r(5680));const o={},p="\u5165\u95e8",l={unversionedId:"getting-started",id:"getting-started",title:"\u5165\u95e8",description:"\u5b89\u88c5 SeaORM \u548c Seaography CLI",source:"@site/docs/01-getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/Seaography/docs/next/getting-started",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/docs/01-getting-started.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690536402,formattedLastUpdatedAt:"Jul 28, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"\u8fd0\u884c\u793a\u4f8b",permalink:"/Seaography/docs/next/running-example"}},i={},s=[{value:"\u5b89\u88c5 SeaORM \u548c Seaography CLI",id:"\u5b89\u88c5-seaorm-\u548c-seaography-cli",level:2},{value:"CLI \u53c2\u6570",id:"cli-\u53c2\u6570",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2}],c={toc:s},g="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u5165\u95e8"},"\u5165\u95e8"),(0,n.yg)("h2",{id:"\u5b89\u88c5-seaorm-\u548c-seaography-cli"},"\u5b89\u88c5 SeaORM \u548c Seaography CLI"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"cargo install sea-orm-cli@^0.12\ncargo install seaography-cli@1\n")),(0,n.yg)("h2",{id:"cli-\u53c2\u6570"},"CLI \u53c2\u6570"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\ud83e\udded SeaORM \u7684 GraphQL \u6846\u67b6\u548c\u4ee3\u7801\u751f\u6210\u5668\n\nUsage: seaography-cli [OPTIONS] <DESTINATION> <ENTITIES> <DATABASE_URL> <CRATE_NAME>\n\nArguments:\n  <DESTINATION>   \u9879\u76ee\u76ee\u6807\u6587\u4ef6\u5939\n  <ENTITIES>      SeaORM \u5b9e\u4f53\u6587\u4ef6\u5939\n  <DATABASE_URL>  \u5199\u5165 .env \u7684\u6570\u636e\u5e93 URL\n  <CRATE_NAME>    \u751f\u6210\u9879\u76ee\u7684 crate \u540d\u79f0\n\nOptions:\n  -f, --framework <FRAMEWORK>\n          \u4f7f\u7528\u54ea\u4e2a web \u6846\u67b6 [\u9ed8\u8ba4: poem] [\u53ef\u9009\u503c: actix, poem]\n      --depth-limit <DEPTH_LIMIT>\n          GraphQL \u6df1\u5ea6\u9650\u5236\n      --complexity-limit <COMPLEXITY_LIMIT>\n          GraphQL \u590d\u6742\u5ea6\u9650\u5236\n  -h, --help\n          \u6253\u5370\u5e2e\u52a9\u4fe1\u606f\n  -V, --version\n          \u6253\u5370\u7248\u672c\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"DATABASE_URL")," \u793a\u4f8b: ",(0,n.yg)("inlineCode",{parentName:"li"},"mysql://user:pass@127.0.0.1:1235/database_name"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"postgres://user:pass@127.0.0.1/base_name"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"sqlite://my_db.db"))),(0,n.yg)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.yg)("p",null,"\u4e3a\u4e86\u7406\u89e3\u751f\u6210\u7684\u4ee3\u7801\u5982\u4f55\u5de5\u4f5c\uff0c\u5efa\u8bae\u5b66\u4e60\u4ee5\u4e0b\u8d44\u6e90\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/async-graphql/latest/async_graphql/"},"async-graphql")),(0,n.yg)("p",{parentName:"li"},"\u662f\u4e00\u4e2a\u7528\u4e8e Rust \u7684\u670d\u52a1\u7aef GraphQL \u5e93\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/latest/sea_orm/"},"sea-orm")),(0,n.yg)("p",{parentName:"li"},"SeaORM \u662f\u4e00\u4e2a\u5173\u7cfb\u578b ORM\uff0c\u5e2e\u52a9\u60a8\u5728 Rust \u4e2d\u6784\u5efa web \u670d\u52a1\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u751f\u6210\u9879\u76ee\u7684 web API"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/crate/poem/latest"},"poem"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/crate/actix/latest"},"actix"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/tokio/latest/tokio/"},"tokio*")),(0,n.yg)("p",{parentName:"li"},"\u4e00\u4e2a\u7528\u4e8e\u7f16\u5199\u53ef\u9760\u7684\u3001\u5f02\u6b65\u7684\u3001\u8f7b\u91cf\u7ea7\u5e94\u7528\u7a0b\u5e8f\u7684 Rust \u8fd0\u884c\u65f6\u3002"))))}y.isMDXComponent=!0}}]);