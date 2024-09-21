"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7334],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,m=u["".concat(i,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(8168),n=(r(6540),r(5680));const o={},l="\u793a\u4f8b\u5904\u7406\u5668",s={unversionedId:"getting-started/examples",id:"version-0.2.x/getting-started/examples",title:"\u793a\u4f8b\u5904\u7406\u5668",description:"\u6211\u4eec\u7ef4\u62a4\u4e86\u4e00\u7ec4\u793a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3a\u5f00\u53d1\u6d41\u5904\u7406\u5668\u7684\u8d77\u70b9\u3002",source:"@site/versioned_docs/version-0.2.x/02-getting-started/03-examples.md",sourceDirName:"02-getting-started",slug:"/getting-started/examples",permalink:"/SeaStreamer/docs/0.2.x/getting-started/examples",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.2.x/02-getting-started/03-examples.md",tags:[],version:"0.2.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680343373,formattedLastUpdatedAt:"Apr 1, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaStreamer \u67b6\u6784",permalink:"/SeaStreamer/docs/0.2.x/getting-started/architecture"},next:{title:"Streamer",permalink:"/SeaStreamer/docs/0.2.x/streamer/streamer"}},i={},c=[{value:"\u8fd0\u884c\u57fa\u672c\u5904\u7406\u5668\u793a\u4f8b",id:"\u8fd0\u884c\u57fa\u672c\u5904\u7406\u5668\u793a\u4f8b",level:2},{value:"\u8fd0\u884c\u53ef\u91cd\u542f\u5904\u7406\u5668\u793a\u4f8b",id:"\u8fd0\u884c\u53ef\u91cd\u542f\u5904\u7406\u5668\u793a\u4f8b",level:2},{value:"\u8fd0\u884c\u7f13\u51b2\u5904\u7406\u5668\u793a\u4f8b",id:"\u8fd0\u884c\u7f13\u51b2\u5904\u7406\u5668\u793a\u4f8b",level:2},{value:"\u8fd0\u884c\u963b\u585e\u5904\u7406\u5668\u793a\u4f8b",id:"\u8fd0\u884c\u963b\u585e\u5904\u7406\u5668\u793a\u4f8b",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u793a\u4f8b\u5904\u7406\u5668"},"\u793a\u4f8b\u5904\u7406\u5668"),(0,n.yg)("p",null,"\u6211\u4eec\u7ef4\u62a4\u4e86\u4e00\u7ec4",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/tree/main/examples"},"\u793a\u4f8b"),"\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3a\u5f00\u53d1\u6d41\u5904\u7406\u5668\u7684\u8d77\u70b9\u3002"),(0,n.yg)("p",null,"\u8fd9\u4e9b\u793a\u4f8b\u9002\u7528\u4e8e ",(0,n.yg)("inlineCode",{parentName:"p"},"tokio")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"async-std"),"\uff0c\u5e76\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"sea-streamer-socket")," API\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/consumer.rs"},(0,n.yg)("inlineCode",{parentName:"a"},"consumer")),"\uff1a\u4e00\u4e2a\u57fa\u672c\u7684\u6d88\u8d39\u8005"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/producer.rs"},(0,n.yg)("inlineCode",{parentName:"a"},"producer")),"\uff1a\u4e00\u4e2a\u57fa\u672c\u7684\u751f\u4ea7\u8005"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/processor.rs"},(0,n.yg)("inlineCode",{parentName:"a"},"processor")),"\uff1a\u4e00\u4e2a\u57fa\u672c\u7684\u6d41\u5904\u7406\u5668"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/resumable.rs"},(0,n.yg)("inlineCode",{parentName:"a"},"resumable")),"\uff1a\u4e00\u4e2a\u53ef\u91cd\u542f\u7684\u6d41\u5904\u7406\u5668\uff0c\u4ece\u4e2d\u65ad\u5904\u7ee7\u7eed\u8fd0\u884c"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/buffered.rs"},(0,n.yg)("inlineCode",{parentName:"a"},"buffered")),"\uff1a\u4e00\u4e2a\u5177\u6709\u5185\u90e8\u7f13\u51b2\u548c\u6279\u5904\u7406\u7684\u9ad8\u7ea7\u6d41\u5904\u7406\u5668"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/blocking.rs"},(0,n.yg)("inlineCode",{parentName:"a"},"blocking")),"\uff1a\u4e00\u4e2a\u7528\u4e8e\u5904\u7406\u963b\u585e/CPU \u5bc6\u96c6\u578b\u4efb\u52a1\u7684\u9ad8\u7ea7\u6d41\u5904\u7406\u5668")),(0,n.yg)("h2",{id:"\u8fd0\u884c\u57fa\u672c\u5904\u7406\u5668\u793a\u4f8b"},"\u8fd0\u884c\u57fa\u672c\u5904\u7406\u5668\u793a\u4f8b"),(0,n.yg)("p",null,"\u4f7f\u7528 Kafka\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210\u4e00\u4e9b\u8f93\u5165\ncargo run --bin producer -- --stream kafka://localhost:9092/hello1 &\n# \u542f\u52a8\u5904\u7406\u5668\uff0c\u751f\u6210\u4e00\u4e9b\u8f93\u51fa\ncargo run --bin processor -- --input kafka://localhost:9092/hello1 --output kafka://localhost:9092/hello2 &\n# \u91cd\u653e\u8f93\u51fa\ncargo run --bin consumer -- --stream kafka://localhost:9092/hello2\n# \u8bb0\u5f97\u505c\u6b62\u8fdb\u7a0b\nkill %1 %2\n")),(0,n.yg)("p",null,"\u4f7f\u7528 Redis\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210\u4e00\u4e9b\u8f93\u5165\ncargo run --bin producer -- --stream redis://localhost:6379/hello1 &\n# \u542f\u52a8\u5904\u7406\u5668\uff0c\u751f\u6210\u4e00\u4e9b\u8f93\u51fa\ncargo run --bin processor -- --input redis://localhost:6379/hello1 --output redis://localhost:6379/hello2 &\n# \u91cd\u653e\u8f93\u51fa\ncargo run --bin consumer -- --stream redis://localhost:6379/hello2\n# \u8bb0\u5f97\u505c\u6b62\u8fdb\u7a0b\nkill %1 %2\n")),(0,n.yg)("p",null,"\u4f7f\u7528 Stdio\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u751f\u4ea7\u8005\u7684\u8f93\u51fa\u7ba1\u9053\u4f20\u8f93\u5230\u5904\u7406\u5668\ncargo run --bin producer -- --stream stdio:///hello1 | \\\ncargo run --bin processor -- --input stdio:///hello1 --output stdio:///hello2\n")),(0,n.yg)("h2",{id:"\u8fd0\u884c\u53ef\u91cd\u542f\u5904\u7406\u5668\u793a\u4f8b"},"\u8fd0\u884c\u53ef\u91cd\u542f\u5904\u7406\u5668\u793a\u4f8b"),(0,n.yg)("p",null,"\u53ef\u91cd\u542f\u7684\u5904\u7406\u5668\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u88ab\u7ec8\u6b62\uff0c\u5e76\u5c06\u4ece\u4e2d\u65ad\u5904\u7ee7\u7eed\u8fd0\u884c\u3002\n\u8fd9\u901a\u5e38\u88ab\u79f0\u4e3a \u201c\u81f3\u5c11\u4e00\u6b21\u201d \u7684\u5904\u7406\uff0c\u8fd9\u610f\u5473\u7740\u4e0d\u4f1a\u8df3\u8fc7\u4efb\u4f55\u6d88\u606f\uff0c\n\u4f46\u540c\u4e00\u6761\u6d88\u606f\u53ef\u80fd\u4f1a\u88ab\u5904\u7406\u4e24\u6b21\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'STREAMER_URI="kafka://localhost:9092"\nSTREAMER_URI="redis://localhost:6379"\n# \u751f\u6210\u5927\u91cf\u8f93\u5165\ncargo run --bin producer -- --stream $STREAMER_URI/hello1\n# \u8fd0\u884c\u5904\u7406\u5668\uff0c\u4f46\u5728\u5b83\u5904\u7406\u5b8c\u5168\u6d41\u4e4b\u524d\u7ec8\u6b62\u5b83\ncargo run --bin resumable -- --input $STREAMER_URI/hello1 --output stdio:///hello2 | head -n 10\ncargo run --bin resumable -- --input $STREAMER_URI/hello1 --output stdio:///hello2 | head -n 10\ncargo run --bin resumable -- --input $STREAMER_URI/hello1 --output stdio:///hello2 | head -n 10\n')),(0,n.yg)("p",null,"\u8f93\u51fa\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-log"},'[2023-02-28T10:13:59 | hello2 | 0] "tick 0" processed\n[2023-02-28T10:13:59 | hello2 | 1] "tick 1" processed\n[2023-02-28T10:13:59 | hello2 | 2] "tick 2" processed\n...\n[2023-02-28T10:13:59 | hello2 | 9] "tick 9" processed\n\u7ebf\u7a0b \'sea-streamer-stdio-stdout\' \u6050\u614c\u4e8e \'\u6253\u5370\u5230stdout\u5931\u8d25: \u7ba1\u9053\u7834\u88c2 (os error 32)\', library/std/src/io/stdio.rs:1009:9\n\n[2023-02-28T10:14:08 | hello2 | 0] "tick 10" processed\n...\n[2023-02-28T10:14:08 | hello2 | 9] "tick 19" processed\n\u7ebf\u7a0b \'sea-streamer-stdio-stdout\' \u6050\u614c\u4e8e \'\u6253\u5370\u5230stdout\u5931\u8d25: \u7ba1\u9053\u7834\u88c2 (os error 32)\', library/std/src/io/stdio.rs:1009:9\n\n...\n')),(0,n.yg)("h2",{id:"\u8fd0\u884c\u7f13\u51b2\u5904\u7406\u5668\u793a\u4f8b"},"\u8fd0\u884c\u7f13\u51b2\u5904\u7406\u5668\u793a\u4f8b"),(0,n.yg)("p",null,"\u65f6\u949f\u7684\u8fd0\u884c\u901f\u5ea6\u662f\u5904\u7406\u5668\u7684 10 \u500d\uff0c\u56e0\u6b64\u6211\u4eec\u9884\u8ba1\u6bcf\u4e2a\u6279\u6b21\u5927\u7ea6\u5305\u542b 10 \u6761\u6d88\u606f\u3002"),(0,n.yg)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u5728\u8f93\u5165\u6d41\u9891\u7387\u5f88\u9ad8\uff0c\u4f46\u5904\u7406\u5668\u7684\u963b\u6297\u5f88\u9ad8\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,n.yg)("details",null,(0,n.yg)("summary",null,"\u4e00\u4e2a\u66f4\u8be6\u7ec6\u7684\u6280\u672f\u8ba8\u8bba\uff1a"),"\u4f8b\u5982\uff0c\u5728\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u8bb0\u5f55\u65f6\uff0c\u6279\u91cf\u63d2\u5165\u66f4\u6709\u6548\u3002\u4f46\u4e0d\u80fd\u7b80\u5355\u5730\u5c06\u6279\u91cf\u5927\u5c0f\u56fa\u5b9a\u4e3a 10 \u6216 100\uff0c\u56e0\u4e3a\u53ef\u80fd\u5df2\u7f13\u51b2\u4e86 9 \u6761\u6d88\u606f\u5e76\u4e14\u5728\u7b49\u5f85\u7b2c 10 \u6761\uff0c\u800c\u65e0\u6cd5\u5904\u7406\u6d88\u606f\u7684\u7a81\u53d1\u3002",(0,n.yg)("p",null,"\u90a3\u4e48\uff0c\u5982\u4f55\u6700\u5c0f\u5316\u6574\u4f53\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u5462\uff1f\u60a8\u53ef\u4ee5\u89e3\u8026\u8fd9\u4e24\u4e2a\u5fd9\u788c\u7684\u5faa\u73af\uff0c\u5e76\u4f7f\u7528\u961f\u5217\u5c06\u5176\u677e\u6563\u8fde\u63a5\uff1a\u73b0\u5728\u4e24\u4e2a\u5faa\u73af\u53ef\u4ee5\u4ee5\u5176\u6700\u4f73\u9891\u7387\u8fd0\u884c\uff0c\u4ece\u800c\u6700\u5927\u5316\u5904\u7406\u5668\u7684\u6574\u4f53\u541e\u5410\u91cf\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"alias clock='cargo run --package sea-streamer-stdio --features=executables --bin clock'\nclock -- --stream clock --interval 100ms | \\\ncargo run --bin buffered -- --input stdio:///clock --output stdio:///output\n")),(0,n.yg)("p",null,"\u8f93\u51fa\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-log"},'[2023-02-27T10:43:58 | output | 0] [batch 0] { "tick": 0 } processed\n[2023-02-27T10:43:59 | output | 1] [batch 1] { "tick": 1 } processed\n[2023-02-27T10:43:59 | output | 2] [batch 1] { "tick": 2 } processed\n[2023-02-27T10:43:59 | output | 3] [batch 1] { "tick": 3 } processed\n[2023-02-27T10:43:59 | output | 4] [batch 1] { "tick": 4 } processed\n[2023-02-27T10:43:59 | output | 5] [batch 1] { "tick": 5 } processed\n[2023-02-27T10:43:59 | output | 6] [batch 1] { "tick": 6 } processed\n[2023-02-27T10:43:59 | output | 7] [batch 1] { "tick": 7 } processed\n[2023-02-27T10:43:59 | output | 8] [batch 1] { "tick": 8 } processed\n...\n')),(0,n.yg)("h2",{id:"\u8fd0\u884c\u963b\u585e\u5904\u7406\u5668\u793a\u4f8b"},"\u8fd0\u884c\u963b\u585e\u5904\u7406\u5668\u793a\u4f8b"),(0,n.yg)("p",null,"\u65f6\u949f\u7684\u8fd0\u884c\u901f\u5ea6\u662f\u5904\u7406\u5668\u7684 3 \u500d\uff0c\u4f46\u6211\u4eec\u6709 4 \u4e2a\u7ebf\u7a0b\uff0c\u56e0\u6b64\u6211\u4eec\u9884\u8ba1\u5b83\u53ef\u4ee5\u5b9e\u65f6\u8ddf\u4e0a\u3002\u4efb\u52a1\u968f\u673a\u5206\u914d\u7ed9\u7ebf\u7a0b\uff0c\u4e5f\u5c31\u662f \u201c\u53d1\u6563\u201d \u6a21\u5f0f\u3002"),(0,n.yg)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u5728\u60a8\u9700\u8981\u8fdb\u884c\u963b\u585e IO \u6216 CPU \u5bc6\u96c6\u578b\u8ba1\u7b97\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"alias clock='cargo run --package sea-streamer-stdio --features=executables --bin clock'\nclock -- --stream clock --interval 333ms | \\\ncargo run --bin blocking -- --input stdio:///clock --output stdio:///output\n")),(0,n.yg)("p",null,"\u8f93\u51fa\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-log"},'[2023-03-07T06:00:52 | output | 0] [thread 0] { "tick": 0 } processed\n[2023-03-07T06:00:53 | output | 1] [thread 1] { "tick": 1 } processed\n[2023-03-07T06:00:53 | output | 2] [thread 2] { "tick": 2 } processed\n[2023-03-07T06:00:53 | output | 3] [thread 3] { "tick": 3 } processed\n[2023-03-07T06:00:54 | output | 4] [thread 0] { "tick": 4 } processed\n[2023-03-07T06:00:54 | output | 5] [thread 1] { "tick": 5 } processed\n[2023-03-07T06:00:54 | output | 6] [thread 2] { "tick": 6 } processed\n')))}d.isMDXComponent=!0}}]);