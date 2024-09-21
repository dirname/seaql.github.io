"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3277],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function m(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=d(a),u=r,g=l["".concat(s,".").concat(u)]||l[u]||y[u]||i;return a?t.createElement(g,o(o({ref:n},p),{},{components:a})):t.createElement(g,o({ref:n},p))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m[l]="string"==typeof e?e:r,o[1]=m;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},632:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var t=a(8168),r=(a(6540),a(5680));const i={},o="Consumer",m={unversionedId:"streamer/consumer",id:"version-0.2.x/streamer/consumer",title:"Consumer",description:"Consumer \u7279\u6027\u5b9a\u4e49\u4e86\u6d41\u6d88\u8d39\u8005\u7684\u901a\u7528\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-0.2.x/03-streamer/03-consumer.md",sourceDirName:"03-streamer",slug:"/streamer/consumer",permalink:"/SeaStreamer/docs/0.2.x/streamer/consumer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.2.x/03-streamer/03-consumer.md",tags:[],version:"0.2.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680281123,formattedLastUpdatedAt:"Mar 31, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Producer",permalink:"/SeaStreamer/docs/0.2.x/streamer/producer"},next:{title:"\u8fdb\u7a0b\u95f4",permalink:"/SeaStreamer/docs/0.2.x/processors/inter-process"}},s={},d=[{value:"<code>ConsumerOptions</code>",id:"consumeroptions",level:2},{value:"<code>ConsumerMode</code>",id:"consumermode",level:3},{value:"<code>RealTime</code>",id:"realtime",level:4},{value:"<code>Resumable</code>",id:"resumable",level:4},{value:"<code>LoadBalanced</code>",id:"loadbalanced",level:4},{value:"<code>ConsumerGroup</code>",id:"consumergroup",level:3},{value:"<code>next</code>",id:"next",level:2},{value:"<code>stream</code>",id:"stream",level:2},{value:"<code>assign</code>",id:"assign",level:2},{value:"<code>unassign</code>",id:"unassign",level:2},{value:"<code>rewind</code>",id:"rewind",level:2},{value:"<code>seek</code>",id:"seek",level:2}],p={toc:d},l="wrapper";function y(e){let{components:n,...a}=e;return(0,r.yg)(l,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"consumer"},"Consumer"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-streamer/*/sea_streamer/trait.Consumer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"Consumer"))," \u7279\u6027\u5b9a\u4e49\u4e86\u6d41\u6d88\u8d39\u8005\u7684\u901a\u7528\u63a5\u53e3\u3002"),(0,r.yg)("p",null,"\u7531\u4ee5\u4e0b\u5b9e\u73b0\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaConsumer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"KafkaConsumer"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisConsumer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"RedisConsumer"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConsumer.html"},(0,r.yg)("inlineCode",{parentName:"a"},"StdioConsumer")))),(0,r.yg)("h2",{id:"consumeroptions"},(0,r.yg)("inlineCode",{parentName:"h2"},"ConsumerOptions")),(0,r.yg)("h3",{id:"consumermode"},(0,r.yg)("inlineCode",{parentName:"h3"},"ConsumerMode")),(0,r.yg)("p",null,"\u6709 3 \u79cd\u6a21\u5f0f\uff1a"),(0,r.yg)("h4",{id:"realtime"},(0,r.yg)("inlineCode",{parentName:"h4"},"RealTime")),(0,r.yg)("p",null,"\u8fd9\u662f\u201c\u57fa\u672c\u201d\u7684\u6d41\u6d88\u8d39\u8005\u3002\u5b83\u4e0d\u4f1a\u81ea\u52a8\u63d0\u4ea4\uff0c\u56e0\u6b64\u53ea\u4ece\u73b0\u5728\u5f00\u59cb\u6d88\u8d39\u6d88\u606f\u3002"),(0,r.yg)("h4",{id:"resumable"},(0,r.yg)("inlineCode",{parentName:"h4"},"Resumable")),(0,r.yg)("p",null,"\u5f53\u8fdb\u7a0b\u91cd\u542f\u65f6\uff0c\u5b83\u5c06\u4ece\u4e0a\u4e00\u4e2a\u5df2\u63d0\u4ea4\u5e8f\u5217\u6062\u590d\u6d41\u3002"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"redis--kafka-\u8bed\u4e49"},"Redis / Kafka \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u5b83\u5c06\u4f7f\u7528\u6b64\u4e3b\u673a\u7684\u552f\u4e00\u7ec4 ID\uff1a\u5728\u7269\u7406\u673a\u5668\u4e0a\uff0c\u5b83\u5c06\u4f7f\u7528 MAC \u5730\u5740\u3002\n\u5728 Docker \u5bb9\u5668\u5185\uff0c\u5b83\u5c06\u4f7f\u7528\u5bb9\u5668 ID\u3002")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"redis-\u8bed\u4e49"},"Redis \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"Redis \u8981\u6c42\u6d88\u8d39\u8005\u81ea\u5206\u914d\u6d88\u8d39\u8005 ID\u3002\u5982\u679c\u672a\u8bbe\u7f6e\uff0cSeaStreamer \u5c06\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"host id")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"process id")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"thread id")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"timestamp")," \u7684\u7ec4\u5408\u3002")),(0,r.yg)("h4",{id:"loadbalanced"},(0,r.yg)("inlineCode",{parentName:"h4"},"LoadBalanced")),(0,r.yg)("p",null,"\u60a8\u5e94\u624b\u52a8\u5206\u914d\u4e00\u4e2a\u6d88\u8d39\u8005\u7ec4\u3002\u8d1f\u8f7d\u5747\u8861\u673a\u5236\u662f\u7279\u5b9a\u4e8e\u5b9e\u73b0\u7684\u3002"),(0,r.yg)("h3",{id:"consumergroup"},(0,r.yg)("inlineCode",{parentName:"h3"},"ConsumerGroup")),(0,r.yg)("p",null,"\u6d88\u8d39\u8005\u7ec4\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f9b\u5ba2\u6237\u7aef\u5411\u6d41\u5a92\u4f53\u670d\u52a1\u5668\u8bc6\u522b\u81ea\u5df1\u3002\u56e0\u6b64\uff0c\u5f53\u60a8\u91cd\u65b0\u8fde\u63a5\u65f6\uff0c\u53ef\u4ee5\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u72b6\u6001\u3002\u4ece\u4ee3\u7406\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u8fd9\u624d\u662f\u6700\u91cd\u8981\u7684\u3002\u5ba2\u6237\u7aef\u53ef\u4ee5\u4ece\u4efb\u4f55\u4e3b\u673a\u6216\u7f51\u7edc\u8fde\u63a5\u3002"),(0,r.yg)("p",null,"\u591a\u4e2a\u6d88\u8d39\u8005\u53ef\u4ee5\u5171\u4eab\u76f8\u540c\u7684\u6d88\u8d39\u8005\u7ec4\uff0c\u5e76\u540c\u65f6\u4fdd\u6301\u4e0e\u670d\u52a1\u5668\u7684\u8fde\u63a5\u3002\u901a\u5e38\uff0c\u76ee\u7684\u662f\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u3002\u786e\u5207\u7684\u8bed\u4e49\u662f\u7279\u5b9a\u4e8e\u540e\u7aef\u7684\u3002"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"kafka-\u8bed\u4e49"},"Kafka \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u4eab\u76f8\u540c\u7684\u7ec4\uff0c\u7ec4\u5185\u53ea\u6709\u4e00\u4e2a\u6d88\u8d39\u8005\u4f1a\u63a5\u6536\u4e00\u6761\u6d88\u606f\uff0c\u5373\u5b9e\u73b0\u4e86\u8d1f\u8f7d\u5747\u8861\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u8d1f\u8f7d\u5747\u8861\u673a\u5236\u4f7f Kafka \u4e0d\u540c\uff1a"),(0,r.yg)("p",{parentName:"admonition"},"\u6bcf\u4e2a\u6d41\u88ab\u5206\u6210\u591a\u4e2a\u5206\u7247\uff08\u79f0\u4e3a\u5206\u533a\uff09\uff0c\u6bcf\u4e2a\u5206\u533a\u5c06\u53ea\u5206\u914d\u7ed9\u7ec4\u5185\u7684\u4e00\u4e2a\u6d88\u8d39\u8005\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u5047\u8bbe\u6709 2 \u4e2a\u6d88\u8d39\u8005\uff08\u5728\u7ec4\u5185\uff09\u548c 2 \u4e2a\u5206\u533a\uff0c\u5219\u6bcf\u4e2a\u6d88\u8d39\u8005\u5c06\u63a5\u6536\u6765\u81ea\u4e00\u4e2a\u5206\u533a\u7684\u6d88\u606f\uff0c\u56e0\u6b64\u5b9e\u73b0\u4e86\u8d1f\u8f7d\u5747\u8861\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u6709 2 \u4e2a\u6d88\u8d39\u8005\u548c 3 \u4e2a\u5206\u533a\uff0c\u5219\u4e00\u4e2a\u6d88\u8d39\u8005\u5c06\u88ab\u5206\u914d 2 \u4e2a\u5206\u533a\uff0c\u800c\u53e6\u4e00\u4e2a\u6d88\u8d39\u8005\u5c06\u53ea\u5206\u914d 1 \u4e2a\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u4f46\u662f\uff0c\u5982\u679c\u6d41\u53ea\u6709 1 \u4e2a\u5206\u533a\uff0c\u5c3d\u7ba1\u6709\u591a\u4e2a\u6d88\u8d39\u8005\uff0c\u8fd9\u4e9b\u6d88\u606f\u5c06\u53ea\u4f1a\u88ab\u5206\u914d\u7684\u6d88\u8d39\u8005\u63a5\u6536\uff0c\u5176\u4ed6\u6d88\u8d39\u8005\u5c06\u5904\u4e8e\u5f85\u673a\u72b6\u6001\uff0c\u4ece\u800c\u5bfc\u81f4\u70ed\u5907\u4efd\u8bbe\u7f6e\u3002")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"redis-\u8bed\u4e49-1"},"Redis \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u540c\u4e00\u7ec4\u5185\u7684\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u4eab\u76f8\u540c\u7684\u6d41\u3002\u8fd9\u662f\u6309\u5148\u6765\u5148\u670d\u52a1\u7684\u65b9\u5f0f\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002\u8fd9\u53ef\u4ee5\u89c6\u4e3a\u52a8\u6001\u8d1f\u8f7d\u5747\u8861\uff1a\u66f4\u5feb\u7684\u6d88\u8d39\u8005\u5c06\u6d88\u8d39\u66f4\u591a\u7684\u6d88\u606f\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"ack")," \u5fc5\u987b\u9010\u6761\u6d88\u606f\u8fdb\u884c\u3002\u8fd9\u5728 SeaStreamer \u4e2d\u53d8\u6210\u4e24\u4e2a\u6b65\u9aa4\uff0cack \u548c\u63d0\u4ea4\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"ack")," \u662f\u975e\u963b\u585e\u7684\uff0c\u5b83\u5c06\u5185\u90e8\u7f13\u51b2 acks\uff0c\u5e76\u5728\u5b9a\u671f\u95f4\u9694\u63d0\u4ea4\u5230 Redis\uff0c\u6216\u6839\u636e\u60a8\u7684\u8bf7\u6c42\u63d0\u4ea4\u3002\u6709\u591a\u4e2a ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/enum.AutoCommit.html"},"\u81ea\u52a8 ack / \u63d0\u4ea4\u673a\u5236")," \u53ef\u4f9b\u9009\u62e9\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"Immediate"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Delayed"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Rolling")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"Disabled"),"\u3002"),(0,r.yg)("p",{parentName:"admonition"},"SeaStreamer \u8fd8\u5b9e\u73b0\u4e86\u81ea\u52a8\u6545\u969c\u8f6c\u79fb\uff0c\u5176\u4ed6\u6d88\u8d39\u8005\u7684\u5269\u4f59\u6d88\u606f\u53ef\u4ee5\u5728\u8bbe\u5b9a\u65f6\u95f4\u540e\u88ab\u201c\u58f0\u660e\u201d\uff0c\u5047\u8bbe\u5b83\u4eec\u5df2\u7ecf\u6b7b\u4ea1\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisConsumerOptions.html#method.set_auto_claim_interval"},"auto claim")," \u9009\u9879\u8fdb\u884c\u914d\u7f6e\u3002")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"stdio-\u8bed\u4e49"},"Stdio \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u4eab\u76f8\u540c\u7684\u7ec4\uff0c\u5219\u7ec4\u5185\u53ea\u6709\u4e00\u4e2a\u6d88\u8d39\u8005\u4f1a\u63a5\u6536\u4e00\u6761\u6d88\u606f\u3002\n\u8fd9\u662f\u4ee5\u8f6e\u8be2\u7684\u65b9\u5f0f\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002")),(0,r.yg)("h2",{id:"next"},(0,r.yg)("inlineCode",{parentName:"h2"},"next")),(0,r.yg)("p",null,"\u8f6e\u8be2\u5e76\u63a5\u6536\u4e00\u6761\u6d88\u606f\uff1a\u5b83\u5c06\u7b49\u5f85\u76f4\u5230\u6709\u65b0\u6d88\u606f\u3002\n\u6b64\u65b9\u6cd5\u53ef\u4ee5\u4ece\u591a\u4e2a\u7ebf\u7a0b\u8c03\u7528\u3002"),(0,r.yg)("h2",{id:"stream"},(0,r.yg)("inlineCode",{parentName:"h2"},"stream")),(0,r.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5b9e\u73b0\u4e86 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/futures-core/*/futures_core/stream/trait.Stream.html"},"Stream Trait")," \u7684\u5f02\u6b65\u6d41\u3002\u60a8\u4e0d\u80fd\u4ece\u540c\u4e00\u6d88\u8d39\u8005\u521b\u5efa\u591a\u4e2a\u6d41\uff0c\u4e5f\u65e0\u6cd5\u5728\u6d41\u4e2d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"),(0,r.yg)("p",null,"\u5b83\u5141\u8bb8\u60a8\u505a\u4e00\u4e9b\u6709\u8da3\u7684\u4e8b\u60c5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"let items = consumer\n    .stream()\n    .take(num)\n    .map(process_message)\n    .collect::<Vec<_>>()\n    .await\n")),(0,r.yg)("h2",{id:"assign"},(0,r.yg)("inlineCode",{parentName:"h2"},"assign")),(0,r.yg)("p",null,"\u5c06\u6b64\u6d88\u8d39\u8005\u5206\u914d\u7ed9\u7279\u5b9a\u7684\u5206\u7247\u3002\u53ef\u4ee5\u591a\u6b21\u8c03\u7528\u4ee5\u5206\u914d\n\u591a\u4e2a\u5206\u7247\u3002\u60a8\u4e0d\u80fd\u5206\u914d\u672a\u8ba2\u9605\u7684\u6d41\u3002"),(0,r.yg)("p",null,"\u5b83\u5c06\u4ec5\u5728\u4e0b\u4e00\u6b21 ",(0,r.yg)("inlineCode",{parentName:"p"},"Consumer::seek")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"Consumer::rewind")," \u65f6\u751f\u6548\u3002"),(0,r.yg)("h2",{id:"unassign"},(0,r.yg)("inlineCode",{parentName:"h2"},"unassign")),(0,r.yg)("p",null,"\u53d6\u6d88\u5206\u914d\u4e00\u4e2a\u5206\u7247\u3002\u5982\u679c\u8be5\u6d88\u8d39\u8005\u5c1a\u672a\u5206\u914d\u5230\u6b64\u6d41\u6216\u5206\u7247\uff0c\u5219\u8fd4\u56de ",(0,r.yg)("inlineCode",{parentName:"p"},"ConsumerNotAssigned"),"\u3002"),(0,r.yg)("h2",{id:"rewind"},(0,r.yg)("inlineCode",{parentName:"h2"},"rewind")),(0,r.yg)("p",null,"\u5c06\u6d41\u91cd\u7f6e\u5230\u7279\u5b9a\u5e8f\u5217\u53f7\u3002"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"kafka-\u8bed\u4e49-1"},"Kafka \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u6d88\u8d39\u8005\u5c1a\u672a\u5206\u914d\uff0c\u5219\u5c06\u4f7f\u7528\u5206\u7247 0\u3002\u6b64\u5f02\u6b65\u65b9\u6cd5\u4e0d\u652f\u6301\u53d6\u6d88\u5b89\u5168\u3002\u60a8\u5fc5\u987b\u7b49\u5f85\u6b64\u672a\u6765\u5b8c\u6210\uff0c\u800c\u5728\u6b64\u671f\u95f4\u6b64\u6d88\u8d39\u5c06\u65e0\u6cd5\u7528\u4e8e\u4efb\u4f55\u64cd\u4f5c\u3002")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"redis-\u8bed\u4e49-2"},"Redis \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u5728 Redis \u4e2d\uff0c\u5e8f\u5217\u53f7\u7531\u65f6\u95f4\u6233\u7ec4\u6210\uff0c\u56e0\u6b64\u91cd\u7f6e\u51e0\u4e4e\u4e0e\u5bfb\u5740\u76f8\u540c\uff0c\u4f46\u66f4\u7cbe\u786e\uff1a\u60a8\u53ef\u4ee5\u91cd\u7f6e\u5230\u6beb\u79d2\u5185\u7684\u7279\u5b9a\u65f6\u523b\u3002")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("h4",{parentName:"admonition",id:"stdio-\u8bed\u4e49-1"},"Stdio \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u6b64\u529f\u80fd\u672a\u5728 Stdio \u540e\u7aef\u5b9e\u73b0\u3002")),(0,r.yg)("h2",{id:"seek"},(0,r.yg)("inlineCode",{parentName:"h2"},"seek")),(0,r.yg)("p",null,"\u5c06\u6240\u6709\u6d41\u5bfb\u5740\u5230\u7ed9\u5b9a\u7684\u65f6\u95f4\u70b9\u3002\u5b83\u5c06\u5f00\u59cb\u6d88\u8d39\u6700\u65e9\u7684\u65f6\u95f4\u6233\u665a\u4e8e ",(0,r.yg)("inlineCode",{parentName:"p"},"to")," \u7684\u6d88\u606f\u3002"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"kafka-\u8bed\u4e49-2"},"Kafka \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u8fd9\u5c06\u81ea\u6211\u5206\u914d\u6240\u6709\u5206\u7247\u3002\u6b64\u5f02\u6b65\u65b9\u6cd5\u4e0d\u652f\u6301\u53d6\u6d88\u5b89\u5168\u3002\u60a8\u5fc5\u987b\u7b49\u5f85\u6b64\u672a\u6765\u5b8c\u6210\uff0c\u800c\u5728\u6b64\u671f\u95f4\u6b64\u6d88\u8d39\u5c06\u65e0\u6cd5\u7528\u4e8e\u4efb\u4f55\u64cd\u4f5c\u3002")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("h4",{parentName:"admonition",id:"redis-\u8bed\u4e49-3"},"Redis \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u5bf9\u6d88\u8d39\u8005\u5bfb\u5740\u5c06\u4f7f\u5176\u4e0e\u6d88\u8d39\u8005\u7ec4\u65ad\u5f00\u8fde\u63a5\uff0c\u5982\u679c\u5df2\u7ecf\u5206\u914d\u4e86\u4e00\u4e2a\u3002\u8fd9\u5b9e\u9645\u4e0a\u4f7f\u5176\u6210\u4e3a\u5b9e\u65f6\u6d88\u8d39\u8005\u3002")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("h4",{parentName:"admonition",id:"stdio-\u8bed\u4e49-2"},"Stdio \u8bed\u4e49"),(0,r.yg)("p",{parentName:"admonition"},"\u6b64\u529f\u80fd\u672a\u5728 Stdio \u540e\u7aef\u5b9e\u73b0\u3002")))}y.isMDXComponent=!0}}]);