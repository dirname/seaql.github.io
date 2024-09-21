"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[76899],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=p(n),c=r,g=y["".concat(s,".").concat(c)]||y[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={},l="\u6570\u636e\u5e93 & \u5f02\u6b65\u8fd0\u884c\u65f6",o={unversionedId:"install-and-config/database-and-async-runtime",id:"version-0.5.x/install-and-config/database-and-async-runtime",title:"\u6570\u636e\u5e93 & \u5f02\u6b65\u8fd0\u884c\u65f6",description:"\u9996\u5148\uff0c\u5c06 sea-orm \u6dfb\u52a0\u5230\u60a8\u7684 Cargo.toml \u7684 [dependencies] \u90e8\u5206\u3002",source:"@site/versioned_docs/version-0.5.x/02-install-and-config/01-database-and-async-runtime.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/database-and-async-runtime",permalink:"/SeaORM/docs/0.5.x/install-and-config/database-and-async-runtime",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/02-install-and-config/01-database-and-async-runtime.md",tags:[],version:"0.5.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1714104260,formattedLastUpdatedAt:"Apr 26, 2024",sidebarPosition:1,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"SeaORM \u6982\u5ff5",permalink:"/SeaORM/docs/0.5.x/introduction/sea-orm"},next:{title:"\u67b6\u6784\u7ba1\u7406",permalink:"/SeaORM/docs/0.5.x/install-and-config/schema"}},s={},p=[{value:"DATABASE_DRIVER",id:"database_driver",level:2},{value:"ASYNC_RUNTIME",id:"async_runtime",level:2},{value:"\u989d\u5916\u529f\u80fd",id:"\u989d\u5916\u529f\u80fd",level:2}],d={toc:p},y="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u6570\u636e\u5e93--\u5f02\u6b65\u8fd0\u884c\u65f6"},"\u6570\u636e\u5e93 & \u5f02\u6b65\u8fd0\u884c\u65f6"),(0,r.yg)("p",null,"\u9996\u5148\uff0c\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"sea-orm")," \u6dfb\u52a0\u5230\u60a8\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Cargo.toml")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"[dependencies]")," \u90e8\u5206\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-orm = { version = "^0.5", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ], default-features = false }\n')),(0,r.yg)("p",null,"\u60a8\u5fc5\u987b\u9009\u62e9\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"DATABASE_DRIVER")," \u548c\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"ASYNC_RUNTIME"),"\u3002\u5982\u679c\u60a8\u4f7f\u7528 SeaORM \u751f\u6210\u7684\u5b9e\u4f53\uff08\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff09\uff0c\u5219\u9700\u8981 ",(0,r.yg)("inlineCode",{parentName:"p"},"macros"),"\u3002"),(0,r.yg)("h2",{id:"database_driver"},"DATABASE_DRIVER"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u4ee5\u4e0b\u9009\u9879\u4e2d\u9009\u62e9\u4e00\u4e2a\u6216\u591a\u4e2a\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sqlx-mysql")," - SQLx MySQL \u548c MariaDB"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sqlx-postgres")," - SQLx PostgreSQL"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sqlx-sqlite")," - SQLx SQLite")),(0,r.yg)("p",null,"\u53e6\u8bf7\u53c2\u89c1\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/crate/sqlx/latest/features"},"SQLx \u6587\u6863"),"\u3002"),(0,r.yg)("h2",{id:"async_runtime"},"ASYNC_RUNTIME"),(0,r.yg)("p",null,"\u60a8\u5fc5\u987b\u4ece\u4ee5\u4e0b\u9009\u9879\u4e2d\u9009\u62e9\u4e00\u4e2a\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"runtime-actix-native-tls"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"runtime-async-std-native-tls"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"runtime-tokio-native-tls"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"runtime-actix-rustls"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"runtime-async-std-rustls"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"runtime-tokio-rustls")),(0,r.yg)("p",null,"\u57fa\u672c\u4e0a\uff0c\u5b83\u4eec\u7684\u5f62\u5f0f\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"runtime-ASYNC_RUNTIME-TLS_LIB"),"\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ASYNC_RUNTIME")," \u53ef\u4ee5\u662f ",(0,r.yg)("a",{parentName:"li",href:"https://crates.io/crates/actix"},(0,r.yg)("inlineCode",{parentName:"a"},"actix")),"\u3001",(0,r.yg)("a",{parentName:"li",href:"https://crates.io/crates/async-std"},(0,r.yg)("inlineCode",{parentName:"a"},"async-std"))," \u6216 ",(0,r.yg)("a",{parentName:"li",href:"https://crates.io/crates/tokio"},(0,r.yg)("inlineCode",{parentName:"a"},"tokio"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TLS_LIB")," \u53ef\u4ee5\u662f ",(0,r.yg)("a",{parentName:"li",href:"https://crates.io/crates/native-tls"},(0,r.yg)("inlineCode",{parentName:"a"},"native-tls"))," \u6216 ",(0,r.yg)("a",{parentName:"li",href:"https://crates.io/crates/rustls"},(0,r.yg)("inlineCode",{parentName:"a"},"rustls")))),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u9009\u62e9\u4e0e\u60a8\u7684 Rust Web \u6846\u67b6\u5bf9\u5e94\u7684 ASYNC_RUNTIME\uff1a")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"ASYNC_RUNTIME"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Web \u6846\u67b6"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"actix")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://actix.rs/"},(0,r.yg)("inlineCode",{parentName:"a"},"Actix")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"async-std")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://docs.rs/tide"},(0,r.yg)("inlineCode",{parentName:"a"},"Tide")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"tokio")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://rocket.rs/"},(0,r.yg)("inlineCode",{parentName:"a"},"Rocket")))))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"native-tls")," \u4f7f\u7528\u5e73\u53f0\u7684\u539f\u751f\u5b89\u5168\u8bbe\u65bd\uff0c\u800c ",(0,r.yg)("inlineCode",{parentName:"li"},"rustls")," \u662f\u7eaf Rust \u7684\u5b9e\u73b0\u3002")),(0,r.yg)("h2",{id:"\u989d\u5916\u529f\u80fd"},"\u989d\u5916\u529f\u80fd"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"debug-print")," - \u5c06\u6bcf\u4e2a SQL \u8bed\u53e5\u6253\u5370\u5230\u65e5\u5fd7\u4e2d"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"mock")," - \u5355\u5143\u6d4b\u8bd5\u7684\u6a21\u62df\u63a5\u53e3"))}m.isMDXComponent=!0}}]);