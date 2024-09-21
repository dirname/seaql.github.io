"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2138],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,y=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return t?n.createElement(y,l(l({ref:r},c),{},{components:t})):n.createElement(y,l({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8494:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(8168),a=(t(6540),t(5680));const i={},l="SeaStreamer \u6982\u5ff5",o={unversionedId:"introduction/sea-streamer",id:"introduction/sea-streamer",title:"SeaStreamer \u6982\u5ff5",description:"Streamer",source:"@site/docs/01-introduction/03-sea-streamer.md",sourceDirName:"01-introduction",slug:"/introduction/sea-streamer",permalink:"/SeaStreamer/docs/next/introduction/sea-streamer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/01-introduction/03-sea-streamer.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680343373,formattedLastUpdatedAt:"Apr 1, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rust \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b",permalink:"/SeaStreamer/docs/next/introduction/async-programming"},next:{title:"\u914d\u7f6e\u529f\u80fd",permalink:"/SeaStreamer/docs/next/getting-started/configuration"}},u={},p=[{value:"Streamer",id:"streamer",level:2},{value:"\u96c6\u7fa4",id:"\u96c6\u7fa4",level:3},{value:"\u6d41",id:"\u6d41",level:2},{value:"\u6d41 URL",id:"\u6d41-url",level:3},{value:"\u6d88\u8d39\u8005",id:"\u6d88\u8d39\u8005",level:2},{value:"\u6d88\u8d39\u8005\u6a21\u5f0f",id:"\u6d88\u8d39\u8005\u6a21\u5f0f",level:3},{value:"\u751f\u4ea7\u8005",id:"\u751f\u4ea7\u8005",level:2},{value:"\u5904\u7406\u5668",id:"\u5904\u7406\u5668",level:2},{value:"\u6d41\u8bed\u4e49",id:"\u6d41\u8bed\u4e49",level:2}],c={toc:p},s="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"seastreamer-\u6982\u5ff5"},"SeaStreamer \u6982\u5ff5"),(0,a.yg)("h2",{id:"streamer"},"Streamer"),(0,a.yg)("p",null,"\u6d41\u5a92\u4f53\u670d\u52a1\u5668\u3002\u5b83\u901a\u8fc7 URI \u8fdb\u884c\u6807\u8bc6\uff0c\u6240\u6709\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u90fd\u53ef\u4ee5\u8fde\u63a5\u5230\u8be5 URI\u3002"),(0,a.yg)("h3",{id:"\u96c6\u7fa4"},"\u96c6\u7fa4"),(0,a.yg)("p",null,"\u6d41\u5a92\u4f53\u670d\u52a1\u5668\u88ab\u89c6\u4e3a\u96c6\u7fa4\uff1a\u5b83\u53ef\u4ee5\u5728\u591a\u4e2a\u8282\u70b9\u95f4\u8fdb\u884c\u6a2a\u5411\u6269\u5c55\u3002"),(0,a.yg)("h2",{id:"\u6d41"},"\u6d41"),(0,a.yg)("p",null,"\u6d41\u7531\u4e00\u7cfb\u5217\u5171\u4eab\u76f8\u540c\u952e\uff08\u5728 Kafka \u4e2d\u79f0\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"topic"),"\uff09\u7684\u6d88\u606f\u7ec4\u6210\u3002\u6bcf\u6761\u6d88\u606f\u90fd\u5305\u542b\u4e00\u4e2a\u65f6\u95f4\u6233\u3001\u5e8f\u5217\u53f7\uff08\u5728 Kafka \u4e2d\u79f0\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"offset"),"\uff09\u3001\u5206\u7247 ID\uff08\u5728 Kafka \u4e2d\u79f0\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"partition number"),"\uff09\u548c\u6709\u6548\u8f7d\u8377\u3002\u6d88\u606f\u7531 (\u6d41\u952e, \u5206\u7247 ID, \u5e8f\u5217\u53f7) \u5143\u7ec4\u552f\u4e00\u6807\u8bc6\u3002"),(0,a.yg)("h3",{id:"\u6d41-url"},"\u6d41 URL"),(0,a.yg)("p",null,"\u5728 SeaStreamer \u4e2d\uff0c\u6d41\u662f\u8d44\u6e90\uff0c\u53ef\u4ee5\u901a\u8fc7\u5305\u542b (\u534f\u8bae, \u4e3b\u673a, \u6d41) \u7684 URL \u8bbf\u95ee\u3002\u793a\u4f8b\u6d41 URL \u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"kafka://streamer.sea-ql.org:12345/my_stream"),"\u3002"),(0,a.yg)("h2",{id:"\u6d88\u8d39\u8005"},"\u6d88\u8d39\u8005"),(0,a.yg)("p",null,"\u6d41\u6d88\u8d39\u65b9\u8ba2\u9605\u4e00\u4e2a\u6216\u591a\u4e2a\u6d41\uff0c\u5e76\u4ece\u96c6\u7fa4\u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\u63a5\u6536\u6d88\u606f\u3002"),(0,a.yg)("p",null,"\u6d88\u8d39\u8005\u53ef\u4ee5\u5c06\u6d41\u56de\u653e\u5230\u4efb\u610f\u65f6\u95f4\u70b9\uff08\u901a\u8fc7\u65f6\u95f4\u6233\u6216\u5e8f\u5217\u53f7\u6807\u8bc6\uff09\uff0c\u7136\u540e\u7ee7\u7eed\u6d41\u5f0f\u4f20\u8f93\u3002"),(0,a.yg)("h3",{id:"\u6d88\u8d39\u8005\u6a21\u5f0f"},"\u6d88\u8d39\u8005\u6a21\u5f0f"),(0,a.yg)("p",null,"\u6709\u4e09\u79cd\u6d88\u8d39\u6a21\u5f0f\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5b9e\u65f6\uff1a\u6211\u4eec\u53ea\u5173\u5fc3\u6700\u65b0\u7684\u6d88\u606f\uff0c\u9519\u8fc7\u65e7\u6570\u636e\u4e5f\u6ca1\u5173\u7cfb"),(0,a.yg)("li",{parentName:"ol"},"\u53ef\u6062\u590d\uff1a\u5f53\u6d88\u8d39\u8005\u91cd\u65b0\u8ba2\u9605\u65f6\uff0c\u5c06\u4ece\u6700\u540e\u6d88\u8d39\u7684\u6d88\u606f\u7ee7\u7eed"),(0,a.yg)("li",{parentName:"ol"},"\u8d1f\u8f7d\u5747\u8861\uff1a\u7c7b\u4f3c\u4e8e\u53ef\u6062\u590d\u6a21\u5f0f\uff0c\u4f46\u6709\u591a\u4e2a\u6d88\u8d39\u8005\u5171\u4eab\u540c\u4e00\u7ec4\u6d41")),(0,a.yg)("h2",{id:"\u751f\u4ea7\u8005"},"\u751f\u4ea7\u8005"),(0,a.yg)("p",null,"\u6d41\u751f\u4ea7\u8005\u5c06\u6d88\u606f\u53d1\u9001\u5230\u6d41\u5a92\u4f53\u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u4f1a\u5728\u96c6\u7fa4\u4e2d\u5b58\u50a8\u6d88\u606f\uff0c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,a.yg)("p",null,"\u751f\u4ea7\u8005\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u6d41\u952e\u53d1\u9001\u6d88\u606f\uff0c\u4f46\u5728 SeaStreamer \u4e2d\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5c06\u6bcf\u4e2a\u751f\u4ea7\u8005\u56fa\u5b9a\u5728\u7279\u5b9a\u7684\u6d41\u952e\u4e0a\u3002"),(0,a.yg)("h2",{id:"\u5904\u7406\u5668"},"\u5904\u7406\u5668"),(0,a.yg)("p",null,"\u6d41\u5904\u7406\u5668\u540c\u65f6\u662f\u6d88\u8d39\u8005\u548c\u751f\u4ea7\u8005\u3002\u5b83\u6d88\u8d39\u6d88\u606f\uff0c\u8f6c\u6362\u8fd9\u4e9b\u6d88\u606f\u5e76\u751f\u6210\u53e6\u4e00\u4e2a\u6d41\u3002"),(0,a.yg)("p",null,"SeaStreamer \u65e8\u5728\u4f7f\u5f00\u53d1\u548c\u64cd\u4f5c\u6d41\u5904\u7406\u5668\u7b80\u5355\u7075\u6d3b\u3002"),(0,a.yg)("h2",{id:"\u6d41\u8bed\u4e49"},"\u6d41\u8bed\u4e49"),(0,a.yg)("p",null,"\u4e00\u4e9b\u9ad8\u7ea7\u6982\u5ff5\uff0c\u5982\u5206\u7247\u3001\u8d1f\u8f7d\u5747\u8861\u548c\u4e8b\u52a1\u662f\u540e\u7aef\u7279\u5b9a\u7684\uff0c\u60a8\u5e94\u8be5\u9605\u8bfb\u76f8\u5173\u7684\u6d41\u5a92\u4f53\u540e\u7aef\u6587\u6863\u3002"))}d.isMDXComponent=!0}}]);