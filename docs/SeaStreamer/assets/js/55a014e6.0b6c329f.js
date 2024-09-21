"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2092],{5680:(e,a,r)=>{r.d(a,{xA:()=>m,yg:()=>g});var t=r(6540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),p=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},m=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,g=d["".concat(o,".").concat(y)]||d[y]||c[y]||s;return r?t.createElement(g,i(i({ref:a},m),{},{components:r})):t.createElement(g,i({ref:a},m))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=y;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4469:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=r(8168),n=(r(6540),r(5680));const s={},i="SeaStreamer \u67b6\u6784",l={unversionedId:"getting-started/architecture",id:"version-0.3.x/getting-started/architecture",title:"SeaStreamer \u67b6\u6784",description:"sea-streamer \u7684\u67b6\u6784\u7531\u591a\u4e2a\u5b50 crate \u6784\u6210\uff1a",source:"@site/versioned_docs/version-0.3.x/02-getting-started/02-architecture.md",sourceDirName:"02-getting-started",slug:"/getting-started/architecture",permalink:"/SeaStreamer/docs/getting-started/architecture",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.3.x/02-getting-started/02-architecture.md",tags:[],version:"0.3.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1692042392,formattedLastUpdatedAt:"Aug 14, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u7279\u6027",permalink:"/SeaStreamer/docs/getting-started/configuration"},next:{title:"\u793a\u4f8b\u5904\u7406\u5668",permalink:"/SeaStreamer/docs/getting-started/examples"}},o={},p=[{value:"<code>sea-streamer-types</code>: \u7279\u5f81\u4e0e\u7c7b\u578b",id:"sea-streamer-types-\u7279\u5f81\u4e0e\u7c7b\u578b",level:3},{value:"<code>sea-streamer-socket</code>: \u540e\u7aef\u65e0\u5173\u7684 Socket API",id:"sea-streamer-socket-\u540e\u7aef\u65e0\u5173\u7684-socket-api",level:3},{value:"<code>sea-streamer-kafka</code>: Kafka / Redpanda \u540e\u7aef",id:"sea-streamer-kafka-kafka--redpanda-\u540e\u7aef",level:3},{value:"<code>sea-streamer-redis</code>: Redis \u540e\u7aef",id:"sea-streamer-redis-redis-\u540e\u7aef",level:3},{value:"<code>sea-streamer-stdio</code>: \u6807\u51c6\u8f93\u5165/\u8f93\u51fa\u540e\u7aef",id:"sea-streamer-stdio-\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u540e\u7aef",level:3},{value:"<code>sea-streamer-file</code>: \u6587\u4ef6\u540e\u7aef",id:"sea-streamer-file-\u6587\u4ef6\u540e\u7aef",level:3},{value:"<code>sea-streamer-runtime</code>: \u5f02\u6b65\u8fd0\u884c\u65f6\u62bd\u8c61",id:"sea-streamer-runtime-\u5f02\u6b65\u8fd0\u884c\u65f6\u62bd\u8c61",level:3}],m={toc:p},d="wrapper";function c(e){let{components:a,...r}=e;return(0,n.yg)(d,(0,t.A)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"seastreamer-\u67b6\u6784"},"SeaStreamer \u67b6\u6784"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-streamer"},(0,n.yg)("inlineCode",{parentName:"a"},"sea-streamer"))," \u7684\u67b6\u6784\u7531\u591a\u4e2a\u5b50 crate \u6784\u6210\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-types"},(0,n.yg)("inlineCode",{parentName:"a"},"sea-streamer-types"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-socket"},(0,n.yg)("inlineCode",{parentName:"a"},"sea-streamer-socket")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-kafka"},(0,n.yg)("inlineCode",{parentName:"a"},"sea-streamer-kafka"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-redis"},(0,n.yg)("inlineCode",{parentName:"a"},"sea-streamer-redis"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-stdio"},(0,n.yg)("inlineCode",{parentName:"a"},"sea-streamer-stdio"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-file"},(0,n.yg)("inlineCode",{parentName:"a"},"sea-streamer-file"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-runtime"},(0,n.yg)("inlineCode",{parentName:"a"},"sea-streamer-runtime")))),(0,n.yg)("h3",{id:"sea-streamer-types-\u7279\u5f81\u4e0e\u7c7b\u578b"},(0,n.yg)("inlineCode",{parentName:"h3"},"sea-streamer-types"),": \u7279\u5f81\u4e0e\u7c7b\u578b"),(0,n.yg)("p",null,"\u8fd9\u4e2a crate \u5b9a\u4e49\u4e86 SeaStreamer API \u7684\u6240\u6709\u7279\u5f81\u548c\u7c7b\u578b\uff0c\u4f46\u4e0d\u63d0\u4f9b\u4efb\u4f55\u5b9e\u73b0\u3002"),(0,n.yg)("h3",{id:"sea-streamer-socket-\u540e\u7aef\u65e0\u5173\u7684-socket-api"},(0,n.yg)("inlineCode",{parentName:"h3"},"sea-streamer-socket"),": \u540e\u7aef\u65e0\u5173\u7684 Socket API"),(0,n.yg)("p",null,"\u7c7b\u4f3c\u4e8e SeaORM \u5141\u8bb8\u4f60\u4e3a\u4e0d\u540c\u6570\u636e\u5e93\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0cSeaStreamer \u5141\u8bb8\u4f60\u4e3a\u4e0d\u540c\u7684\u6d41\u5904\u7406\u670d\u52a1\u5668\u6784\u5efa\u6d41\u5904\u7406\u5668\u3002"),(0,n.yg)("p",null,"\u867d\u7136 ",(0,n.yg)("inlineCode",{parentName:"p"},"sea-streamer-types")," crate \u63d0\u4f9b\u4e86\u826f\u597d\u7684\u57fa\u4e8e\u7279\u5f81\u7684\u62bd\u8c61\uff0c\u4f46\u8fd9\u4e2a crate \u63d0\u4f9b\u4e86\u5177\u4f53\u7c7b\u578b\u7684 API\uff0c\u5141\u8bb8\u4f60\u7684\u7a0b\u5e8f\u5728\u8fd0\u884c\u65f6\u4ece\u7528\u6237\u9009\u62e9\u7684\u4efb\u4f55 SeaStreamer \u540e\u7aef\u8fdb\u884c\u6d41\u5904\u7406\u3002"),(0,n.yg)("p",null,"\u8fd9\u4f7f\u5f97\u4f60\u80fd\u591f\u505a\u4e00\u4e9b\u5f88\u9177\u7684\u4e8b\u60c5\uff0c\u4f8b\u5982\u5728\u672c\u5730\u751f\u6210\u6570\u636e\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u6d41\u5f0f\u4f20\u8f93\u5230 Redis / Kafka\u3002\u6216\u8005\u53cd\u5411\u64cd\u4f5c\uff0c\u4ece\u670d\u52a1\u5668\u5c06\u6570\u636e\u4f20\u8f93\u5230\u672c\u5730\u5904\u7406\u3002\u6240\u6709\u8fd9\u4e9b\u64cd\u4f5c\u90fd\u662f ",(0,n.yg)("em",{parentName:"p"},"\u4e0d\u9700\u8981\u91cd\u65b0\u7f16\u8bd1")," \u6d41\u5904\u7406\u5668\u7684\u3002"),(0,n.yg)("h3",{id:"sea-streamer-kafka-kafka--redpanda-\u540e\u7aef"},(0,n.yg)("inlineCode",{parentName:"h3"},"sea-streamer-kafka"),": Kafka / Redpanda \u540e\u7aef"),(0,n.yg)("p",null,"\u8fd9\u662f\u4e3a SeaStreamer \u63d0\u4f9b\u7684 Kafka / Redpanda \u540e\u7aef\u5b9e\u73b0\u3002\u8fd9\u4e2a crate \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u9762\u7684\u7c7b\u578b\u7cfb\u7edf\uff0c\u4f7f\u5f97\u4e0e Kafka \u7684\u4ea4\u4e92\u66f4\u52a0\u7b80\u5355\u548c\u5b89\u5168\u3002"),(0,n.yg)("p",null,"\u6240\u6709 API\uff08\u8bb8\u591a\u662f\u540c\u6b65\u7684\uff09\u90fd\u88ab\u6b63\u786e\u5730\u5305\u88c5\u4e3a\u5f02\u6b65\u3002\u65b9\u6cd5\u4e5f\u6807\u8bb0\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"&mut"),"\uff0c\u4ee5\u6d88\u9664\u53ef\u80fd\u7684\u7ade\u4e89\u6761\u4ef6\u3002"),(0,n.yg)("p",null,"\u8fd9\u4e2a crate \u4f9d\u8d56\u4e8e ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/rdkafka"},(0,n.yg)("inlineCode",{parentName:"a"},"rdkafka")),"\uff0c\u800c\u5b83\u53c8\u4f9d\u8d56\u4e8e ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/librdkafka-sys"},"librdkafka-sys"),"\uff0c\u8fd9\u4e2a\u662f ",(0,n.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/clients/librdkafka/html/index.html"},"librdkafka")," \u7684\u4e00\u4e2a\u5305\u88c5\u3002"),(0,n.yg)("h3",{id:"sea-streamer-redis-redis-\u540e\u7aef"},(0,n.yg)("inlineCode",{parentName:"h3"},"sea-streamer-redis"),": Redis \u540e\u7aef"),(0,n.yg)("p",null,"\u8fd9\u662f\u4e3a SeaStreamer \u63d0\u4f9b\u7684 Redis \u540e\u7aef\u5b9e\u73b0\u3002\u8fd9\u4e2a crate \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ad8\u5c42\u6b21\u7684\u5f02\u6b65 API\uff0c\u786e\u4fdd\u4e0e Redis Streams \u7684\u4ea4\u4e92\u5b89\u5168\u65e0\u8bef\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u719f\u6089\u7684 SeaStreamer \u62bd\u8c61\u63a5\u53e3"),(0,n.yg)("li",{parentName:"ul"},"\u4e00\u4e2a\u5168\u9762\u7684\u7c7b\u578b\u7cfb\u7edf\u6765\u6307\u5bfc/\u9650\u5236\u4f60\u4f7f\u7528 API"),(0,n.yg)("li",{parentName:"ul"},"\u9ad8\u5c42\u6b21\u7684 API\uff0c\u56e0\u6b64\u4f60\u4e0d\u518d\u9700\u8981\u8c03\u7528 XADD\u3001XREAD \u6216 XACK"),(0,n.yg)("li",{parentName:"ul"},"\u65e0\u9700\u4e92\u65a5\u9501\u7684\u5b9e\u73b0\uff1a\u901a\u8fc7\u6d88\u606f\u4f20\u9012\u5b9e\u73b0\u5e76\u53d1")),(0,n.yg)("p",null,"\u8fd9\u4e2a crate \u57fa\u4e8e ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/redis"},(0,n.yg)("inlineCode",{parentName:"a"},"redis")),"\u3002"),(0,n.yg)("h3",{id:"sea-streamer-stdio-\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u540e\u7aef"},(0,n.yg)("inlineCode",{parentName:"h3"},"sea-streamer-stdio"),": \u6807\u51c6\u8f93\u5165/\u8f93\u51fa\u540e\u7aef"),(0,n.yg)("p",null,"\u8fd9\u662f\u4e3a SeaStreamer \u63d0\u4f9b\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"stdio")," \u540e\u7aef\u5b9e\u73b0\u3002\u5b83\u8bbe\u8ba1\u7528\u4e8e\u901a\u8fc7 Unix \u7ba1\u9053\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5728\u5f00\u53d1\u6d41\u5904\u7406\u5668\u6216\u5728\u672c\u5730\u5904\u7406\u6570\u636e\u65f6\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u7075\u6d3b\u6027\u3002"),(0,n.yg)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u5904\u7406\u5668\u901a\u8fc7\u7ba1\u9053\u8fde\u63a5\u5728\u4e00\u8d77\uff1a",(0,n.yg)("inlineCode",{parentName:"p"},"processor_a | processor_b"),"\u3002"),(0,n.yg)("h3",{id:"sea-streamer-file-\u6587\u4ef6\u540e\u7aef"},(0,n.yg)("inlineCode",{parentName:"h3"},"sea-streamer-file"),": \u6587\u4ef6\u540e\u7aef"),(0,n.yg)("p",null,"\u8fd9\u4e0e ",(0,n.yg)("inlineCode",{parentName:"p"},"sea-streamer-stdio")," \u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u533a\u522b\u5728\u4e8e Stdio \u662f\u5b9e\u65f6\u5de5\u4f5c\u7684\uff0c\u800c ",(0,n.yg)("inlineCode",{parentName:"p"},"sea-streamer-file")," \u65e2\u53ef\u4ee5\u5b9e\u65f6\u5de5\u4f5c\u4e5f\u53ef\u4ee5\u91cd\u653e\u3002\u8fd9\u610f\u5473\u7740\uff0cFile \u80fd\u591f\u904d\u5386 ",(0,n.yg)("inlineCode",{parentName:"p"},".ss"),"\uff08sea-stream\uff09\u6587\u4ef6\u5e76\u5bfb\u5740/\u56de\u6eaf\u5230\u7279\u5b9a\u7684\u65f6\u95f4\u6233/\u504f\u79fb\u3002"),(0,n.yg)("p",null,"\u6b64\u5916\uff0cStdio \u53ea\u80fd\u5904\u7406 UTF-8 \u6587\u672c\u6570\u636e\uff0c\u800c File \u80fd\u591f\u5904\u7406\u4e8c\u8fdb\u5236\u6570\u636e\u3002"),(0,n.yg)("h3",{id:"sea-streamer-runtime-\u5f02\u6b65\u8fd0\u884c\u65f6\u62bd\u8c61"},(0,n.yg)("inlineCode",{parentName:"h3"},"sea-streamer-runtime"),": \u5f02\u6b65\u8fd0\u884c\u65f6\u62bd\u8c61"),(0,n.yg)("p",null,"\u8fd9\u4e2a crate \u63d0\u4f9b\u4e86\u4e00\u5c0f\u7ec4\u51fd\u6570\uff0c\u4ee5\u5bf9\u9f50 ",(0,n.yg)("inlineCode",{parentName:"p"},"async-std")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"tokio")," \u4e4b\u95f4\u7684\u7c7b\u578b\u7b7e\u540d\uff0c\u4ece\u800c\u8ba9\u4f60\u80fd\u591f\u6784\u5efa\u5bf9\u8fd9\u4e24\u79cd\u8fd0\u884c\u65f6\u901a\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"))}c.isMDXComponent=!0}}]);