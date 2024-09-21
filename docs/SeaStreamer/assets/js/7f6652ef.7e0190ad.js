"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[572],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=g(e,["components","mdxType","originalType","parentName"]),p=d(r),s=a,y=p["".concat(c,".").concat(s)]||p[s]||m[s]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var g={};for(var c in t)hasOwnProperty.call(t,c)&&(g[c]=t[c]);g.originalType=e,g[p]="string"==typeof e?e:a,o[1]=g;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>d});var n=r(8168),a=(r(6540),r(5680));const i={},o="\u914d\u7f6e\u529f\u80fd",g={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"\u914d\u7f6e\u529f\u80fd",description:"Cargo",source:"@site/docs/02-getting-started/01-configuration.md",sourceDirName:"02-getting-started",slug:"/getting-started/configuration",permalink:"/SeaStreamer/docs/next/getting-started/configuration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/02-getting-started/01-configuration.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1692042392,formattedLastUpdatedAt:"Aug 14, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaStreamer \u6982\u5ff5",permalink:"/SeaStreamer/docs/next/introduction/sea-streamer"},next:{title:"SeaStreamer \u67b6\u6784",permalink:"/SeaStreamer/docs/next/getting-started/architecture"}},c={},d=[{value:"Cargo",id:"cargo",level:2},{value:"BACKEND: <code>kafka</code>, <code>redis</code>, <code>file</code>, <code>stdio</code> \u548c <code>socket</code>",id:"backend-kafka-redis-file-stdio-\u548c-socket",level:2},{value:"ASYNC_RUNTIME: <code>runtime-async-std</code> \u548c <code>runtime-tokio</code>",id:"async_runtime-runtime-async-std-\u548c-runtime-tokio",level:2}],l={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u914d\u7f6e\u529f\u80fd"},"\u914d\u7f6e\u529f\u80fd"),(0,a.yg)("h2",{id:"cargo"},"Cargo"),(0,a.yg)("p",null,"\u9996\u5148\uff0c\u8bf7\u7ed9\u6211\u4eec\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer"},"GitHub repo")," \u70b9\u4e2a\u661f\uff01\u60a8\u7684\u652f\u6301\u5bf9 SeaStreamer \u7684\u6301\u7eed\u5f00\u53d1\u81f3\u5173\u91cd\u8981\u3002"),(0,a.yg)("p",null,"\u7136\u540e\uff0c\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"sea-streamer")," \u6dfb\u52a0\u5230\u60a8\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"Cargo.toml")," \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"[dependencies]")," \u90e8\u5206\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-streamer = { version = "0.3", features = [ <BACKEND>, <ASYNC_RUNTIME> ] }\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sea-streamer")," \u662f\u4e00\u4e2a\u5916\u89c2 crate\u3002\u5982\u679c\u60a8\u4e0d\u542f\u7528\u4efb\u4f55\u529f\u80fd\uff0c\u5b83\u5c06\u53ea\u5bfc\u51fa\u6765\u81ea ",(0,a.yg)("inlineCode",{parentName:"p"},"sea-streamer-types")," \u7684\u7c7b\u578b\uff0c\u8fd9\u4f7f\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u7279\u6027\u548c\u7c7b\u578b\u5f00\u53d1 ",(0,a.yg)("em",{parentName:"p"},"\u7eaf crates"),"\uff0c\u800c\u65e0\u9700\u5c06\u4efb\u4f55\u540e\u7aef crates \u62c9\u5165\u4f9d\u8d56\u6811\u4e2d\u3002"),(0,a.yg)("p",null,"\u6240\u6709 crates \u5171\u4eab\u76f8\u540c\u7684\u4e3b\u8981\u7248\u672c\u3002\u56e0\u6b64\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"0.1")," \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"sea-streamer")," \u4f9d\u8d56\u4e8e ",(0,a.yg)("inlineCode",{parentName:"p"},"0.1")," \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"sea-streamer-socket"),"\u3002"),(0,a.yg)("h2",{id:"backend-kafka-redis-file-stdio-\u548c-socket"},"BACKEND: ",(0,a.yg)("inlineCode",{parentName:"h2"},"kafka"),", ",(0,a.yg)("inlineCode",{parentName:"h2"},"redis"),", ",(0,a.yg)("inlineCode",{parentName:"h2"},"file"),", ",(0,a.yg)("inlineCode",{parentName:"h2"},"stdio")," \u548c ",(0,a.yg)("inlineCode",{parentName:"h2"},"socket")),(0,a.yg)("p",null,"SeaStreamer \u76ee\u524d\u652f\u6301\u56db\u79cd\u540e\u7aef\uff0cKafka\u3001Redis\u3001\u6587\u4ef6\u548c Stdio\u3002\n\u6bcf\u79cd\u540e\u7aef\u90fd\u6709\u5176\u81ea\u5df1\u7684\u652f\u6301 crate\uff0c\u5e76\u4e14\u5b83\u4eec\u90fd\u5b9e\u73b0\u76f8\u540c\u7684\u4e00\u7ec4\u62bd\u8c61\u7279\u6027\u3002\n\u4e0d\u540c crate \u4e4b\u95f4\u7684\u7b26\u53f7\u6613\u4e8e\u533a\u5206\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u4ee5\u524d\u7f00\u5f00\u5934\u3002"),(0,a.yg)("p",null,"\u4e0d\u8fc7\uff0c\u8fd9\u4e9b\u62bd\u8c61\u662f\u9759\u6001\u7684\uff1a\u60a8\u5fc5\u987b\u5728\u7f16\u8bd1\u65f6\u6307\u5b9a\u5177\u4f53\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"Streamer")," \u7c7b\u578b\u3002\n\u8981\u5b9e\u73b0 ",(0,a.yg)("em",{parentName:"p"},"\u8fd0\u884c\u65f6\u62bd\u8c61"),"\uff0c\u60a8\u53ef\u4ee5\u542f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"socket")," \u6807\u5fd7\u5e76\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"Sea*")," \u7c7b\u578b\u3002"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u662f\u7c7b\u578b\u540d\u79f0\u7684\u603b\u7ed3\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"\u7279\u6027"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Kafka"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Redis"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u6587\u4ef6"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Stdio"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Socket"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Streamer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"KafkaStreamer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"RedisStreamer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"FileStreamer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"StdioStreamer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"SeaStreamer")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Producer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"KafkaProducer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"RedisProducer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"FileProducer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"StdioProducer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"SeaProducer")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Consumer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"KafkaConsumer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"RedisConsumer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"FileConsumer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"StdioConsumer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"SeaConsumer")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Message"),(0,a.yg)("td",{parentName:"tr",align:"center"},"KafkaMessage"),(0,a.yg)("td",{parentName:"tr",align:"center"},"RedisMessage"),(0,a.yg)("td",{parentName:"tr",align:"center"},"FileMessage"),(0,a.yg)("td",{parentName:"tr",align:"center"},"StdioMessage"),(0,a.yg)("td",{parentName:"tr",align:"center"},"SeaMessage")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"ConnectOptions"),(0,a.yg)("td",{parentName:"tr",align:"center"},"KafkaConnectOptions"),(0,a.yg)("td",{parentName:"tr",align:"center"},"RedisConnectOptions"),(0,a.yg)("td",{parentName:"tr",align:"center"},"FileConnectOptions"),(0,a.yg)("td",{parentName:"tr",align:"center"},"StdioConnectOptions"),(0,a.yg)("td",{parentName:"tr",align:"center"},"SeaConnectOptions")))),(0,a.yg)("h2",{id:"async_runtime-runtime-async-std-\u548c-runtime-tokio"},"ASYNC_RUNTIME: ",(0,a.yg)("inlineCode",{parentName:"h2"},"runtime-async-std")," \u548c ",(0,a.yg)("inlineCode",{parentName:"h2"},"runtime-tokio")),(0,a.yg)("p",null,"SeaStreamer \u76ee\u524d\u652f\u6301\u4e24\u79cd\u5f02\u6b65\u8fd0\u884c\u65f6\uff0casync-std \u548c Tokio\u3002\u542f\u7528\u60a8\u9700\u8981\u7684\u90a3\u4e00\u79cd\u3002\n\u8fd8\u6709\u4e00\u4e9b\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime")," \u6807\u5fd7\u66b4\u9732\u7684\u8fd0\u884c\u65f6\u901a\u7528\u529f\u80fd\uff0c\u4ee5\u5e2e\u52a9\u60a8\u6784\u5efa\u652f\u6301\u8fd9\u4e24\u79cd\u8fd0\u884c\u65f6\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"))}m.isMDXComponent=!0}}]);