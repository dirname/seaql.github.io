"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[94445],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),d=a,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={},i="\u8c03\u8bd5\u65e5\u5fd7",l={unversionedId:"install-and-config/debug-log",id:"version-1.0.x/install-and-config/debug-log",title:"\u8c03\u8bd5\u65e5\u5fd7",description:"SeaORM \u901a\u8fc7 tracing crate \u8bb0\u5f55\u8c03\u8bd5\u6d88\u606f\u3002",source:"@site/versioned_docs/version-1.0.x/02-install-and-config/03-debug-log.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/debug-log",permalink:"/SeaORM/docs/install-and-config/debug-log",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-1.0.x/02-install-and-config/03-debug-log.md",tags:[],version:"1.0.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833108,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u8fde\u63a5",permalink:"/SeaORM/docs/install-and-config/connection"},next:{title:"\u8bbe\u7f6e\u8fc1\u79fb",permalink:"/SeaORM/docs/migration/setting-up-migration"}},c={},s=[{value:"SQLx \u65e5\u5fd7",id:"sqlx-\u65e5\u5fd7",level:2}],p={toc:s},g="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u8c03\u8bd5\u65e5\u5fd7"},"\u8c03\u8bd5\u65e5\u5fd7"),(0,a.yg)("p",null,"SeaORM \u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/tracing"},(0,a.yg)("inlineCode",{parentName:"a"},"tracing"))," crate \u8bb0\u5f55\u8c03\u8bd5\u6d88\u606f\u3002"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"debug-print")," \u529f\u80fd\u6807\u5fd7\u542f\u7528 SeaORM \u7684\u65e5\u5fd7\u8bb0\u5f55\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml"},'[dependencies.sea-orm]\nversion = "1.0.0-rc.5"\nfeatures = ["debug-print"]\n')),(0,a.yg)("p",null,"\u60a8\u9700\u8981\u8bbe\u7f6e ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,a.yg)("inlineCode",{parentName:"a"},"tracing-subscriber"))," \u6765\u6355\u83b7\u548c\u67e5\u770b\u8c03\u8bd5\u65e5\u5fd7\u3002\u8bf7\u53c2\u89c1\u4e0b\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u4ee5\u53ca\u5b8c\u6574\u793a\u4f8b ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs"},"here"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,a.yg)("p",null,"SeaORM \u7684\u8c03\u8bd5\u6253\u5370\u5c06\u53c2\u6570\u6ce8\u5165\u5230 SQL \u5b57\u7b26\u4e32\u4e2d\uff0c\u4f7f\u5176\u66f4\u6613\u4e8e\u9605\u8bfb\u3002\u60a8\u5c06\u770b\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},'SELECT "chef"."name" FROM "chef" WHERE "chef"."id" = 100'),"\uff0c\u800c\u4e0d\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},'SELECT "chef"."name" FROM "chef" WHERE "chef"."id" = $1'),"\u3002"),(0,a.yg)("h2",{id:"sqlx-\u65e5\u5fd7"},"SQLx \u65e5\u5fd7"),(0,a.yg)("p",null,"SQLx \u9ed8\u8ba4\u4e5f\u4f1a\u8bb0\u5f55\u65e5\u5fd7\u3002\u5982\u679c\u60a8\u542f\u7528\u4e86 SeaORM \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"debug-print"),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html"},(0,a.yg)("inlineCode",{parentName:"a"},"ConnectOptions"))," \u4f20\u9012\u7ed9 ",(0,a.yg)("inlineCode",{parentName:"p"},"connect()")," \u6765\u7981\u7528 SQLx \u7684\u65e5\u5fd7\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt\n    .sqlx_logging(false) // \u7981\u7528 SQLx \u65e5\u5fd7\n    .sqlx_logging_level(log::LevelFilter::Info); // \u6216\u8bbe\u7f6e SQLx \u65e5\u5fd7\u7ea7\u522b\n\nlet db = Database::connect(opt).await?;\n')))}u.isMDXComponent=!0}}]);