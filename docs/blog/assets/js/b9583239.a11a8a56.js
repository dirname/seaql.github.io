"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[836],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>c});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=p(r),y=n,c=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return r?a.createElement(c,i(i({ref:t},g),{},{components:r})):a.createElement(c,i({ref:t},g))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(8168),n=(r(6540),r(5680));const l={slug:"2023-09-06-whats-new-in-sea-streamer-0.3",title:"SeaStreamer 0.3 \u4e2d\u7684\u65b0\u529f\u80fd",author:"Chris Tsang",author_title:"SeaQL \u56e2\u961f",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",image:"https://www.sea-ql.org/SeaStreamer/img/SeaStreamer%20banner.png",tags:["news"]},i=void 0,s={permalink:"/blog/2023-09-06-whats-new-in-sea-streamer-0.3",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2023-09-06-whats-new-in-sea-streamer-0.3.md",source:"@site/blog/2023-09-06-whats-new-in-sea-streamer-0.3.md",title:"SeaStreamer 0.3 \u4e2d\u7684\u65b0\u529f\u80fd",description:"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u5730\u53d1\u5e03\u4e86 SeaStreamer 0.3.x!",date:"2023-09-06T00:00:00.000Z",formattedDate:"September 6, 2023",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:6.63,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL \u56e2\u961f",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2023-09-06-whats-new-in-sea-streamer-0.3",title:"SeaStreamer 0.3 \u4e2d\u7684\u65b0\u529f\u80fd",author:"Chris Tsang",author_title:"SeaQL \u56e2\u961f",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",image:"https://www.sea-ql.org/SeaStreamer/img/SeaStreamer%20banner.png",tags:["news"]},prevItem:{title:"\u7f16\u5199 Async \u8fd0\u884c\u65f6\u901a\u7528\u5e93",permalink:"/blog/2023-11-22-async-runtime-generic"},nextItem:{title:"\u5ba3\u5e03 SeaORM 0.12",permalink:"/blog/2023-08-12-announcing-seaorm-0.12"}},o={authorsImageUrls:[void 0]},p=[{value:"\u6587\u4ef6\u540e\u7aef",id:"\u6587\u4ef6\u540e\u7aef",level:2},{value:"\u65e0\u7f16\u7801",id:"\u65e0\u7f16\u7801",level:3},{value:"\u9ad8\u6548\u67e5\u627e",id:"\u9ad8\u6548\u67e5\u627e",level:3},{value:"\u6d41\u5f0f\u53cb\u597d\u6027",id:"\u6d41\u5f0f\u53cb\u597d\u6027",level:3},{value:"\u7efc\u8ff0",id:"\u7efc\u8ff0",level:4},{value:"Redis \u540e\u7aef",id:"redis-\u540e\u7aef",level:2},{value:"\u57fa\u51c6\u6d4b\u8bd5",id:"\u57fa\u51c6\u6d4b\u8bd5",level:2},{value:"\u751f\u4ea7\u8005",id:"\u751f\u4ea7\u8005",level:4},{value:"\u6d88\u8d39\u8005",id:"\u6d88\u8d39\u8005",level:4},{value:"\u793e\u533a",id:"\u793e\u533a",level:2}],g={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("a",{href:"https://www.sea-ql.org/SeaStreamer/"},(0,n.yg)("img",{src:"https://www.sea-ql.org/SeaStreamer/img/SeaStreamer%20banner.png"})),(0,n.yg)("p",null,"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u5730\u53d1\u5e03\u4e86 SeaStreamer ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/releases/0.3.0"},(0,n.yg)("inlineCode",{parentName:"a"},"0.3.x")),"!"),(0,n.yg)("h2",{id:"\u6587\u4ef6\u540e\u7aef"},"\u6587\u4ef6\u540e\u7aef"),(0,n.yg)("p",null,"SeaStreamer ",(0,n.yg)("inlineCode",{parentName:"p"},"0.3")," \u7684\u4e00\u4e2a\u91cd\u8981\u66f4\u65b0\u662f\u6587\u4ef6\u540e\u7aef\u3002\u5b83\u5b9e\u73b0\u4e86\u76f8\u540c\u7684\u9ad8\u7ea7 MPMC API\uff0c\u5141\u8bb8\u6587\u4ef6\u4e4b\u95f4\u7684\u6d41\u5f0f\u4f20\u8f93\u3002\u6709\u591a\u79cd\u4f7f\u7528\u573a\u666f\u3002\u4f8b\u5982\uff0c\u5b83\u53ef\u4ee5\u7528\u4e8e\u4ece Redis/Kafka \u8f6c\u50a8\u6570\u636e\u5e76\u5728\u672c\u5730\u5904\u7406\uff0c\u6216\u4f5c\u4e3a\u5b58\u50a8\u6216\u4f20\u8f93\u7684\u4e2d\u95f4\u6587\u4ef6\u683c\u5f0f\u3002"),(0,n.yg)("p",null,"SeaStreamer \u6587\u4ef6\u683c\u5f0f ",(0,n.yg)("inlineCode",{parentName:"p"},".ss")," \u975e\u5e38\u7b80\u5355\u3002\u5b83\u975e\u5e38\u50cf ",(0,n.yg)("inlineCode",{parentName:"p"},".ndjson"),"\uff0c\u4f46\u5c5e\u4e8e\u4e8c\u8fdb\u5236\u683c\u5f0f\u3002\u6587\u4ef6\u683c\u5f0f\u7684\u8bbe\u8ba1\u76ee\u6807\u5982\u4e0b\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u652f\u6301\u4e8c\u8fdb\u5236\u6570\u636e\u800c\u6ca1\u6709\u7f16\u7801\u5f00\u9500"),(0,n.yg)("li",{parentName:"ol"},"\u9ad8\u6548\u5730\u8fdb\u884c\u5927\u8f6c\u50a8\u7684\u56de\u6eaf/\u67e5\u627e"),(0,n.yg)("li",{parentName:"ol"},"\u6d41\u5f0f\u53cb\u597d\u6027 - \u6587\u4ef6\u53ef\u4ee5\u88ab\u622a\u65ad\u800c\u4e0d\u4e22\u5931\u5b8c\u6574\u6027")),(0,n.yg)("p",null,"\u8ba9\u6211\u8be6\u7ec6\u89e3\u91ca\u3002"),(0,n.yg)("p",null,"\u9996\u5148\uff0cSeaStreamer \u6587\u4ef6\u662f\u4e00\u4e2a\u5bb9\u5668\u683c\u5f0f\u3002\u5b83\u53ea\u5173\u6ce8\u6d88\u606f\u6d41\u548c\u6846\u67b6\uff0c\u800c\u4e0d\u5173\u6ce8\u6709\u6548\u8d1f\u8f7d\u3002\u5b83\u662f\u4e3a\u4e86\u4e0e\u50cf Protobuf \u6216 BSON \u8fd9\u6837\u7684\u4e8c\u8fdb\u5236\u6d88\u606f\u683c\u5f0f\u914d\u5bf9\u800c\u8bbe\u8ba1\u7684\u3002"),(0,n.yg)("h3",{id:"\u65e0\u7f16\u7801"},"\u65e0\u7f16\u7801"),(0,n.yg)("p",null,"JSON \u548c CSV \u662f\u5f88\u597d\u7684\u7eaf\u6587\u672c\u6587\u4ef6\u683c\u5f0f\uff0c\u4f46\u5b83\u4eec\u5bf9\u4e8c\u8fdb\u5236\u4e0d\u53cb\u597d\u3002\u901a\u5e38\uff0c\u4e3a\u4e86\u7f16\u7801\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u4eba\u4eec\u4f1a\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"base64"),"\u3002\u8fd9\u4f1a\u4ea7\u751f\u9ad8\u6602\u7684\u7f16\u7801/\u89e3\u7801\u5f00\u9500\u3002\u5728\u4e8c\u8fdb\u5236\u534f\u8bae\u4e2d\uff0c",(0,n.yg)("em",{parentName:"p"},"\u5206\u9694\u7b26")," \u901a\u5e38\u7528\u4e8e\u8868\u793a\u6d88\u606f\u8fb9\u754c\u3002\u56e0\u6b64\uff0c\u9700\u8981\u5b57\u8282\u586b\u5145\u6765\u8f6c\u4e49\u5b57\u8282\u3002"),(0,n.yg)("p",null,"\u5728 SeaStreamer \u4e2d\uff0c\u6211\u4eec\u5e0c\u671b\u5b8c\u5168\u907f\u514d\u7f16\u7801\u5f00\u9500\u3002\u6709\u6548\u8d1f\u8f7d\u5e94\u8be5\u9010\u5b57\u5199\u5165\u78c1\u76d8\u3002\u56e0\u6b64\uff0c\u6587\u4ef6\u683c\u5f0f\u56f4\u7ed5\u6784\u9020\u6d88\u606f\u5e27\u548c\u653e\u7f6e\u6821\u9a8c\u548c\u6765\u786e\u4fdd\u6570\u636e\u88ab\u6b63\u786e\u89e3\u91ca\u3002"),(0,n.yg)("h3",{id:"\u9ad8\u6548\u67e5\u627e"},"\u9ad8\u6548\u67e5\u627e"),(0,n.yg)("p",null,"\u57fa\u4e8e\u5206\u9694\u7b26\u7684\u534f\u8bae\u6709\u4e00\u4e2a\u4f18\u70b9\uff1a\u5b57\u8282\u6d41\u53ef\u4ee5\u968f\u673a\u67e5\u627e\uff0c\u6211\u4eec\u603b\u662f\u53ef\u4ee5\u65e0\u969c\u788d\u5730\u8bfb\u53d6\u4e0b\u4e00\u4e2a\u6d88\u606f\u3002"),(0,n.yg)("p",null,"\u7531\u4e8e SeaStreamer \u4e0d\u4f9d\u8d56\u5206\u9694\u7b26\uff0c\u6211\u4eec\u65e0\u6cd5\u8f7b\u6613\u5730\u5728\u968f\u673a\u67e5\u627e\u540e\u5bf9\u9f50\u5230\u6d88\u606f\u5e27\u3002\u6211\u4eec\u901a\u8fc7\u5728\u6574\u4e2a\u6587\u4ef6\u7684\u56fa\u5b9a\u4f4d\u7f6e\u5b9a\u671f\u653e\u7f6e\u4fe1\u6807\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u4f8b\u5982\uff0c\u5047\u8bbe ",(0,n.yg)("inlineCode",{parentName:"p"},"\u4fe1\u6807\u95f4\u9694")," \u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"1024"),"\uff0c\u90a3\u4e48\u5728\u7b2c 1024 \u4e2a\u5b57\u8282\u3001\u7b2c 2048 \u4e2a\u5b57\u8282\u7b49\u4f4d\u7f6e\u4f1a\u6709\u4e00\u4e2a\u4fe1\u6807\u3002\u7136\u540e\uff0c\u6bcf\u6b21\u6211\u4eec\u60f3\u8981\u67e5\u627e\u4e00\u4e2a\u968f\u673a\u4f4d\u7f6e\u65f6\uff0c\u6211\u4eec\u5c31\u4f1a\u67e5\u627e\u6700\u63a5\u8fd1\u7684 N * 1024 \u5b57\u8282\u5e76\u4ece\u90a3\u91cc\u5f00\u59cb\u8bfb\u53d6\u3002"),(0,n.yg)("p",null,"\u8fd9\u4e9b\u4fe1\u6807\u4e5f\u5145\u5f53\u7d22\u5f15\uff1a\u5b83\u4eec\u5305\u542b\u6bcf\u4e2a\u5355\u72ec\u6d41\u7684\u6458\u8981\u3002\u56e0\u6b64\uff0c\u7ed9\u5b9a\u4e00\u4e2a\u7279\u5b9a\u7684\u6d41\u952e\u548c\u5e8f\u5217\u53f7\uff08\u6216\u65f6\u95f4\u6233\uff09\u8fdb\u884c\u641c\u7d22\uff0cSeaStreamer \u53ef\u4ee5\u901a\u8fc7\u8bfb\u53d6\u4fe1\u6807\u5feb\u901f\u5b9a\u4f4d\u6d88\u606f\u3002\u65e0\u8bba\u6d41\u4e2d\u7684\u6d88\u606f\u662f\u7a00\u758f\u7684\u8fd8\u662f\u5bc6\u96c6\u7684\uff0c\u8fd9\u4e00\u70b9\u90fd\u6ca1\u6709\u5173\u7cfb\uff01"),(0,n.yg)("h3",{id:"\u6d41\u5f0f\u53cb\u597d\u6027"},"\u6d41\u5f0f\u53cb\u597d\u6027"),(0,n.yg)("p",null,"\u622a\u65ad\u6587\u4ef6\u5e94\u8be5\u59cb\u7ec8\u662f\u5b89\u5168\u7684\u3002\u5c06\u6587\u4ef6\u5206\u5272\u6210\u5757\u5e94\u8be5\u76f8\u5bf9\u7b80\u5355\u3002\u6211\u4eec\u5e94\u8be5\u80fd\u591f\u5224\u65ad\u6570\u636e\u662f\u5426\u635f\u574f\u3002"),(0,n.yg)("p",null,"SeaStreamer \u901a\u8fc7\u4e3a\u6bcf\u4e2a\u6d88\u606f\u8ba1\u7b97\u6821\u9a8c\u548c\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u6d41\u7684\u6821\u9a8c\u548c\u7684\u8fd0\u884c\u6821\u9a8c\u548c\u6765\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\u3002\u76ee\u524d\u8fd9\u5e76\u4e0d\u662f\u5f3a\u5236\u8981\u6c42\uff0c\u4f46\u7406\u8bba\u4e0a\u6211\u4eec\u53ef\u4ee5\u68c0\u6d4b\u5230\u6d41\u4e2d\u662f\u5426\u7f3a\u5c11\u4efb\u4f55\u6d88\u606f\u3002"),(0,n.yg)("h4",{id:"\u7efc\u8ff0"},"\u7efc\u8ff0"),(0,n.yg)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u683c\u5f0f\u4e5f\u6613\u4e8e\u5728\u4e0d\u540c\u8bed\u8a00\u4e2d\u5b9e\u73b0\uff0c\u56e0\u4e3a\u6211\u4eec\u521a\u521a\u5728\uff08\u5b9e\u9a8c\u6027\uff09 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/tree/main/sea-streamer-file/sea-streamer-file-reader"},"TypeScript \u4e2d")," \u7f16\u5199\u4e86\u4e00\u4e2a\u8bfb\u53d6\u5668\u3002"),(0,n.yg)("p",null,"\u5c31\u8fd9\u4e9b\uff01\u5982\u679c\u4f60\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u770b\u770b ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-file/latest/sea_streamer_file/format/index.html"},"\u683c\u5f0f\u63cf\u8ff0"),"\u3002"),(0,n.yg)("h2",{id:"redis-\u540e\u7aef"},"Redis \u540e\u7aef"),(0,n.yg)("p",null,"Redis Streams \u88ab\u4f4e\u4f30\u4e86\uff01\u5b83\u4eec\u5177\u6709\u9ad8\u541e\u5410\u91cf\u548c\u5e76\u53d1\u6027\uff0c\u6700\u9002\u5408\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\u6216\u9760\u8fd1\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u975e\u6301\u4e45\u6d41\u5904\u7406\u3002"),(0,n.yg)("p",null,"\u969c\u788d\u53ef\u80fd\u5728\u4e8e\u5e93\u652f\u6301\u3002Redis Streams \u7684 API \u76f8\u5bf9\u4f4e\u7ea7\uff0c\u5e76\u4e14\u6ca1\u6709\u5f88\u591a\u9ad8\u7ea7\u5e93\u6765\u5e2e\u52a9\u7f16\u7a0b\uff0c\u800c Kafka \u5219\u6709\u591a\u79cd\u5b98\u65b9\u7f16\u7a0b\u5e93\u3002"),(0,n.yg)("p",null,"\u9677\u9631\u662f\uff0c\u4f7f\u7528\u539f\u59cb Redis API \u5f88\u96be\u6700\u5927\u5316\u5e76\u53d1\u3002\u9996\u5148\uff0c\u4f60\u9700\u8981\u5bf9 ",(0,n.yg)("inlineCode",{parentName:"p"},"XADD")," \u547d\u4ee4\u8fdb\u884c\u6d41\u6c34\u7ebf\u5904\u7406\u3002\u4f60\u8fd8\u9700\u8981\u5b9a\u65f6\u548c\u6279\u91cf\u5904\u7406 ",(0,n.yg)("inlineCode",{parentName:"p"},"XACK"),"\uff0c\u4ee5\u514d\u963b\u585e\u8bfb\u53d6\u548c\u8ba1\u7b97\u3002\u5f53\u7136\uff0c\u4f60\u60f3\u5c06\u8bfb\u53d6\u548c\u5199\u5165\u5206\u5f00\u5230\u4e0d\u540c\u7684\u7ebf\u7a0b\u4e2d\u3002"),(0,n.yg)("p",null,"SeaStreamer \u4e3a\u4f60\u6253\u7834\u4e86\u8fd9\u4e9b\u969c\u788d\uff0c\u63d0\u4f9b\u4e86\u7c7b\u4f3c Kafka \u7684 API \u4f53\u9a8c\uff01"),(0,n.yg)("h2",{id:"\u57fa\u51c6\u6d4b\u8bd5"},"\u57fa\u51c6\u6d4b\u8bd5"),(0,n.yg)("p",null,"\u5728 ",(0,n.yg)("inlineCode",{parentName:"p"},"0.3")," \u4e2d\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u4e00\u4e9b\u4f18\u5316\uff0c\u4ee5\u63d0\u9ad8 Redis \u548c\u6587\u4ef6\u540e\u7aef\u7684\u541e\u5410\u91cf\u3002\u6211\u4eec\u5c06\u521d\u59cb\u57fa\u51c6\u8bbe\u7f6e\u4e3a\u6bcf\u79d2 100,000 \u6761\u6d88\u606f\uff0c\u5e0c\u671b\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u80fd\u591f\u8fdb\u4e00\u6b65\u6539\u8fdb\u3002"),(0,n.yg)("p",null,"\u6211\u4eec\u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/tree/main/benchmark"},"\u5fae\u57fa\u51c6\u6d4b\u8bd5")," \u6d89\u53ca\u4e00\u4e2a\u7b80\u5355\u7684\u7a0b\u5e8f\uff0c\u751f\u6210\u6216\u6d88\u8d39 100,000 \u6761\u6d88\u606f\uff0c\u5176\u4e2d\u6bcf\u6761\u6d88\u606f\u7684\u6709\u6548\u8f7d\u8377\u4e3a 256 \u5b57\u8282\u3002"),(0,n.yg)("p",null,"\u5bf9\u4e8e Redis\uff0c\u5b83\u5728\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u7684 Docker \u4e2d\u8fd0\u884c\u3002\u5728\u6211\u8fd9\u53f0\u4e0d\u7b97\u51fa\u8272\u7684\u642d\u8f7d\u7b2c\u5341\u4ee3\u82f1\u7279\u5c14 i7 \u7684\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\uff0c\u6570\u5b57\u5927\u6982\u5982\u4e0b\uff1a"),(0,n.yg)("h4",{id:"\u751f\u4ea7\u8005"},"\u751f\u4ea7\u8005"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"redis    0.5s\nstdio    0.5s\nfile     0.5s\n")),(0,n.yg)("h4",{id:"\u6d88\u8d39\u8005"},"\u6d88\u8d39\u8005"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"redis    1.0s\nstdio    1.0s\nfile     1.1s\n")),(0,n.yg)("p",null,"\u8fd9\u5b9e\u9645\u4e0a\u610f\u5473\u7740\u6211\u4eec\u5728 ",(0,n.yg)("em",{parentName:"p"},"\u751f\u4ea7")," \u6bcf\u79d2 100,000 \u6761\u6d88\u606f\u7684\u9886\u57df\u4e2d\u6e38\u5203\u6709\u4f59\uff0c\u4f46\u4ec5\u80fd\u5728 1 \u79d2\u5185 ",(0,n.yg)("em",{parentName:"p"},"\u6d88\u8d39")," 100,000 \u6761\u6d88\u606f\u3002\u6b22\u8fce\u63d0\u51fa\u6027\u80fd\u6539\u8fdb\u5efa\u8bae\uff01"),(0,n.yg)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,n.yg)("p",null,"SeaQL.org \u662f\u4e00\u4e2a\u7531\u70ed\u60c5\u7684\u5f00\u53d1\u8005\u8fd0\u8425\u7684\u72ec\u7acb\u5f00\u6e90\u7ec4\u7ec7\u3002\u5982\u679c\u4f60\u559c\u6b22\u6211\u4eec\u7684\u9879\u76ee\uff0c\u8bf7 \u2b50 \u5173\u6ce8\u5e76\u5206\u4eab\u6211\u4eec\u7684\u4ee3\u7801\u5e93\u3002\u5982\u679c\u4f60\u611f\u5230\u6177\u6168\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," \u8fdb\u884c\u5c0f\u989d\u6350\u8d60\uff0c\u8fd9\u5c06\u5f97\u5230\u6781\u5927\u7684\u8d5e\u8d4f\uff0c\u5e76\u5bf9\u652f\u6301\u8be5\u7ec4\u7ec7\u6709\u5f88\u5927\u5e2e\u52a9 \ud83d\udea2\u3002"),(0,n.yg)("p",null,"SeaStreamer \u662f\u4e00\u4e2a\u793e\u533a\u9a71\u52a8\u7684\u9879\u76ee\u3002\u6211\u4eec\u6b22\u8fce\u4f60\u53c2\u4e0e\u3001\u8d21\u732e\uff0c\u5171\u540c\u4e3a Rust \u7684\u672a\u6765\u5efa\u8bbe \ud83e\udd80\u3002"))}u.isMDXComponent=!0}}]);