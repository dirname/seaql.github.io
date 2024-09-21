"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[25282],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={},i="\u8c03\u8bd5\u65e5\u5fd7",c={unversionedId:"install-and-config/debug-log",id:"version-0.7.x/install-and-config/debug-log",title:"\u8c03\u8bd5\u65e5\u5fd7",description:"SeaORM\uff08\u5f00\u542f debug-print \u7279\u6027\uff09\u901a\u8fc7 tracing crate \u8bb0\u5f55\u8c03\u8bd5\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-0.7.x/02-install-and-config/04-debug-log.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/debug-log",permalink:"/SeaORM/docs/0.7.x/install-and-config/debug-log",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/02-install-and-config/04-debug-log.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1648286882,formattedLastUpdatedAt:"Mar 26, 2022",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u6c60",permalink:"/SeaORM/docs/0.7.x/install-and-config/connection"},next:{title:"\u4f7f\u7528 sea-orm-cli",permalink:"/SeaORM/docs/0.7.x/generate-entity/sea-orm-cli"}},l={},s=[],p={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u8c03\u8bd5\u65e5\u5fd7"},"\u8c03\u8bd5\u65e5\u5fd7"),(0,a.yg)("p",null,"SeaORM\uff08\u5f00\u542f ",(0,a.yg)("inlineCode",{parentName:"p"},"debug-print")," \u7279\u6027\uff09\u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/tracing"},(0,a.yg)("inlineCode",{parentName:"a"},"tracing"))," crate \u8bb0\u5f55\u8c03\u8bd5\u4fe1\u606f\u3002"),(0,a.yg)("p",null,"\u60a8\u9700\u8981\u8bbe\u7f6e ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,a.yg)("inlineCode",{parentName:"a"},"tracing-subscriber"))," \u6765\u6355\u83b7\u548c\u67e5\u770b\u8c03\u8bd5\u65e5\u5fd7\u3002\u8bf7\u53c2\u8003\u4e0b\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u548c\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs"},"here"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,a.yg)("p",null,"\u8981\u8fc7\u6ee4\u6765\u81ea ",(0,a.yg)("inlineCode",{parentName:"p"},"sea_orm")," \u7684\u8c03\u8bd5\u65e5\u5fd7\uff0c\u60a8\u53ef\u4ee5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"$ RUST_LOG=debug cargo run 2>&1 | grep sea_orm\n[2021-02-02T20:20:20Z DEBUG sea_orm::driver::sqlx_mysql] SELECT `cake`.`id`, `cake`.`name` FROM `cake` LIMIT 1\n")))}g.isMDXComponent=!0}}]);