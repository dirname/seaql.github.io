"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[382],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(8168),o=(r(6540),r(5680));const a={},s="\u8fdb\u7a0b\u5185\u90e8",c={unversionedId:"processors/intra-process",id:"version-0.2.x/processors/intra-process",title:"\u8fdb\u7a0b\u5185\u90e8",description:"\u4ee5\u4e0b\u662f\u5982\u4f55\u7ec4\u7ec7\u4e2d\u5927\u578b\u6d41\u5904\u7406\u9879\u76ee\u7684\u4e00\u79cd\u65b9\u6cd5\u3002\u60a8\u62e5\u6709\u591a\u4e2a\u5b9e\u73b0\u4e0d\u540c\u5904\u7406\u5668\u7684 crate\uff0c\u6bcf\u4e2a crate \u90fd\u4f9d\u8d56\u4e8e sea-streamer\uff0c\u5e76\u5728\u4e00\u4e2a\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u3002\u73b0\u5728\uff0c\u60a8\u60f3\u6784\u5efa\u4e00\u4e2a\u4e0b\u6e38 crate\uff0c\u5c06\u51e0\u4e2a\u5904\u7406\u5668\u8fde\u63a5\u5728\u4e00\u8d77\u8fdb\u884c\u6d4b\u8bd5\u3002",source:"@site/versioned_docs/version-0.2.x/04-processors/02-intra-process.md",sourceDirName:"04-processors",slug:"/processors/intra-process",permalink:"/SeaStreamer/docs/0.2.x/processors/intra-process",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.2.x/04-processors/02-intra-process.md",tags:[],version:"0.2.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680281123,formattedLastUpdatedAt:"Mar 31, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u7a0b\u95f4",permalink:"/SeaStreamer/docs/0.2.x/processors/inter-process"},next:{title:"\u8def\u7ebf\u56fe",permalink:"/SeaStreamer/docs/0.2.x/whats-next/roadmap"}},i={},p=[],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(m,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u8fdb\u7a0b\u5185\u90e8"},"\u8fdb\u7a0b\u5185\u90e8"),(0,o.yg)("p",null,"\u4ee5\u4e0b\u662f\u5982\u4f55\u7ec4\u7ec7\u4e2d\u5927\u578b\u6d41\u5904\u7406\u9879\u76ee\u7684\u4e00\u79cd\u65b9\u6cd5\u3002\u60a8\u62e5\u6709\u591a\u4e2a\u5b9e\u73b0\u4e0d\u540c\u5904\u7406\u5668\u7684 crate\uff0c\u6bcf\u4e2a crate \u90fd\u4f9d\u8d56\u4e8e ",(0,o.yg)("inlineCode",{parentName:"p"},"sea-streamer"),"\uff0c\u5e76\u5728\u4e00\u4e2a\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u3002\u73b0\u5728\uff0c\u60a8\u60f3\u6784\u5efa\u4e00\u4e2a\u4e0b\u6e38 crate\uff0c\u5c06\u51e0\u4e2a\u5904\u7406\u5668\u8fde\u63a5\u5728\u4e00\u8d77\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,o.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e Stdio \u7684 ",(0,o.yg)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConnectOptions.html#method.set_loopback"},"loopback")," \u9009\u9879\u6765\u6267\u884c\u6d89\u53ca\u591a\u4e2a\u5904\u7406\u5668\u7684\u6d4b\u8bd5\uff0c\u5728\u6b64\u9009\u9879\u4e0b\uff0c\u4ea7\u751f\u7684\u6d88\u606f\u5c06\u53cd\u9988\u7ed9\u540c\u4e00\u8fdb\u7a0b\u4e2d\u7684\u6d88\u8d39\u8005\u3002"),(0,o.yg)("p",null,"\u4ee5\u4e0b\u662f\u884c\u4e3a\u7684\u793a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-stdio/tests/loopback.rs"},"\u5b8c\u6574\u793a\u4f8b"),"\u3002\u53ea\u9700\u8981\u8fd0\u884c ",(0,o.yg)("inlineCode",{parentName:"p"},"cargo test"),"\uff0c\u4e0d\u9700\u8981\u4efb\u4f55\u524d\u63d0\u6761\u4ef6\u3002\u5982\u679c\u6d4b\u8bd5\u5931\u8d25\uff0c\u60a8\u53ef\u4ee5\u4ece stdout \u65e5\u5fd7\u4e2d\u8bca\u65ad\u95ee\u9898\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},'let stream = StreamKey::new("hello")?;\nlet mut options = StdioConnectOptions::default();\noptions.set_loopback(true);\nlet streamer = StdioStreamer::connect(StreamerUri::zero(), options).await?;\nlet producer = streamer.create_producer(stream.clone(), Default::default()).await?;\nlet mut consumer = streamer.create_consumer(&[stream.clone()], Default::default()).await?;\n\nfor i in 0..5 {\n    let mess = format!("{}", i);\n    producer.send(mess)?;\n}\n\nlet seq = collect(&mut consumer, 5).await;\nassert_eq!(seq, [0, 1, 2, 3, 4]);\n')))}u.isMDXComponent=!0}}]);