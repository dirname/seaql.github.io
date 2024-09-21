"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[64897],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={},i="\u5f02\u6b65\u7f16\u7a0b",s={unversionedId:"introduction/async",id:"version-0.10.x/introduction/async",title:"\u5f02\u6b65\u7f16\u7a0b",description:"Rust \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b\u662f\u4e00\u4e2a\u6700\u8fd1\u7684\u53d1\u5c55\uff0c\u4ec5\u5728 Rust 1.39 \u4e2d\u5f97\u5230\u7a33\u5b9a\u3002\u5f02\u6b65\u751f\u6001\u7cfb\u7edf\u6b63\u5728\u8fc5\u901f\u53d1\u5c55\uff0c\u800c SeaORM \u662f\u4e3a\u652f\u6301\u5f02\u6b65\u800c\u4ece\u96f6\u5f00\u59cb\u6784\u5efa\u7684\u9996\u6279 crate \u4e4b\u4e00\u3002",source:"@site/versioned_docs/version-0.10.x/01-introduction/02-async.md",sourceDirName:"01-introduction",slug:"/introduction/async",permalink:"/SeaORM/docs/0.10.x/introduction/async",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/01-introduction/02-async.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1667313808,formattedLastUpdatedAt:"Nov 1, 2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f ORM",permalink:"/SeaORM/docs/0.10.x/introduction/orm"},next:{title:"SeaORM \u6982\u5ff5",permalink:"/SeaORM/docs/0.10.x/introduction/sea-orm"}},c={},p=[],l={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u5f02\u6b65\u7f16\u7a0b"},"\u5f02\u6b65\u7f16\u7a0b"),(0,a.yg)("p",null,"Rust \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b\u662f\u4e00\u4e2a\u6700\u8fd1\u7684\u53d1\u5c55\uff0c\u4ec5\u5728 Rust ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/rust-lang/rust/releases/tag/1.39.0"},(0,a.yg)("inlineCode",{parentName:"a"},"1.39"))," \u4e2d\u5f97\u5230\u7a33\u5b9a\u3002\u5f02\u6b65\u751f\u6001\u7cfb\u7edf\u6b63\u5728\u8fc5\u901f\u53d1\u5c55\uff0c\u800c SeaORM \u662f\u4e3a\u652f\u6301\u5f02\u6b65\u800c\u4ece\u96f6\u5f00\u59cb\u6784\u5efa\u7684\u9996\u6279 crate \u4e4b\u4e00\u3002"),(0,a.yg)("p",null,"\u9996\u5148\u8981\u5b66\u4e60\u7684\u662f ",(0,a.yg)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/02_execution/02_future.html"},(0,a.yg)("inlineCode",{parentName:"a"},"Future"))," trait\u3002\u5b83\u662f\u4e00\u4e2a\u5360\u4f4d\u7b26\uff0c\u4ee3\u8868\u4e00\u4e2a\u5c06\u5728\u672a\u6765\u8ba1\u7b97\u548c\u8fd4\u56de\u67d0\u4e2a\u503c\u7684\u51fd\u6570\u3002\u5b83\u662f\u60f0\u6027\u6c42\u503c\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5fc5\u987b\u8c03\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},".await")," \u624d\u4f1a\u5b9e\u9645\u6267\u884c\u4efb\u4f55\u5de5\u4f5c\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"Future")," \u4f7f\u6211\u4eec\u80fd\u591f\u4ee5\u8f83\u5c11\u7684\u7f16\u7a0b\u5de5\u4f5c\u5b9e\u73b0\u5e76\u53d1\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/futures/latest/futures/future/fn.join_all.html"},(0,a.yg)("inlineCode",{parentName:"a"},"future::join_all"))," \u6765\u5e76\u884c\u6267\u884c\u591a\u4e2a\u67e5\u8be2\u3002"),(0,a.yg)("p",null,"\u5176\u6b21\uff0cRust \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"async")," \u662f ",(0,a.yg)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/03_async_await/01_chapter.html"},"\u591a\u7ebf\u7a0b\u7f16\u7a0b"),"\uff0c\u5e26\u6709\u8bed\u6cd5\u7cd6\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"Future")," \u53ef\u4ee5\u5728\u7ebf\u7a0b\u4e4b\u95f4\u79fb\u52a8\uff0c\u56e0\u6b64\u5728\u5f02\u6b65\u4f53\u4e2d\u4f7f\u7528\u7684\u4efb\u4f55\u53d8\u91cf\u90fd\u5fc5\u987b\u80fd\u591f\u5728\u7ebf\u7a0b\u4e4b\u95f4\u4f20\u9012\uff0c\u4e5f\u5c31\u662f\u8bf4\u9700\u8981\u5b9e\u73b0 ",(0,a.yg)("a",{parentName:"p",href:"https://doc.rust-lang.org/nomicon/send-and-sync.html"},(0,a.yg)("inlineCode",{parentName:"a"},"Send")),"\u3002"),(0,a.yg)("p",null,"\u7b2c\u4e09\uff0cRust \u4e2d\u6709\u591a\u4e2a\u5f02\u6b65\u8fd0\u884c\u65f6\u3002\u53ef\u4ee5\u8bf4\uff0c",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/actix"},(0,a.yg)("inlineCode",{parentName:"a"},"actix")),"\u3001",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,a.yg)("inlineCode",{parentName:"a"},"async-std"))," \u548c ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/tokio"},(0,a.yg)("inlineCode",{parentName:"a"},"tokio"))," \u662f\u6700\u5e7f\u6cdb\u4f7f\u7528\u7684\u4e09\u79cd\u3002SeaORM \u7684\u5e95\u5c42\u9a71\u52a8 ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/sqlx"},(0,a.yg)("inlineCode",{parentName:"a"},"SQLx"))," \u652f\u6301\u8fd9\u4e09\u8005\u3002"),(0,a.yg)("p",null,"\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u5bf9\u4f60\u5728\u5f02\u6b65 Rust \u4e2d\u8fc5\u901f\u4e0a\u624b\u81f3\u5173\u91cd\u8981\u3002"))}y.isMDXComponent=!0}}]);