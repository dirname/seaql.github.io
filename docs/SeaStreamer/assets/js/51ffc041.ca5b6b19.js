"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[9549],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),y=a,m=c["".concat(s,".").concat(y)]||c[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const o={},i="\u6d41\u5904\u7406\u7b80\u4ecb",l={unversionedId:"introduction/intro-to-streams",id:"introduction/intro-to-streams",title:"\u6d41\u5904\u7406\u7b80\u4ecb",description:'"\u5c06\u6570\u636e\u5e93\u7ffb\u8f6c" \u662f\u6570\u636e\u5de5\u7a0b\u9886\u57df\u7684\u4e00\u7bc7\u5f71\u54cd\u6df1\u8fdc\u7684\u6587\u7ae0\uff0c\u4fc3\u6210\u4e86 Kafka \u7684\u6210\u7acb\u3002\u81ea\u90a3\u4ee5\u540e\uff0c\u50cf Redpanda \u548c Redis Streams \u7684\u5b9e\u73b0\u76f8\u7ee7\u51fa\u73b0\uff0c\u63a8\u52a8\u4e86\u5b9e\u65f6\u6570\u636e\u5904\u7406\u751f\u6001\u7cfb\u7edf\u7684\u53d1\u5c55\u3002',source:"@site/docs/01-introduction/01-intro-to-streams.md",sourceDirName:"01-introduction",slug:"/introduction/intro-to-streams",permalink:"/SeaStreamer/docs/next/introduction/intro-to-streams",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/01-introduction/01-intro-to-streams.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680343373,formattedLastUpdatedAt:"Apr 1, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7d22\u5f15",permalink:"/SeaStreamer/docs/next/index"},next:{title:"Rust \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b",permalink:"/SeaStreamer/docs/next/introduction/async-programming"}},s={},u=[{value:"\u4e0e\u57fa\u4e8e\u4e8b\u4ef6\u7684\u7f16\u7a0b\u7684\u6bd4\u8f83",id:"\u4e0e\u57fa\u4e8e\u4e8b\u4ef6\u7684\u7f16\u7a0b\u7684\u6bd4\u8f83",level:2},{value:"\u4e0e\u6279\u5904\u7406\u7684\u6bd4\u8f83",id:"\u4e0e\u6279\u5904\u7406\u7684\u6bd4\u8f83",level:2},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Rust\uff1f",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-rust",level:2},{value:"\u591a\u7ebf\u7a0b\u5f02\u6b65",id:"\u591a\u7ebf\u7a0b\u5f02\u6b65",level:3},{value:"\u53ef\u9884\u6d4b\u7684\u5ef6\u8fdf",id:"\u53ef\u9884\u6d4b\u7684\u5ef6\u8fdf",level:3},{value:"\u81ea\u5305\u542b",id:"\u81ea\u5305\u542b",level:3},{value:"\u4f4e\u8d44\u6e90\u4f7f\u7528",id:"\u4f4e\u8d44\u6e90\u4f7f\u7528",level:3},{value:"\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u5b89\u5168\u6027",id:"\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u5b89\u5168\u6027",level:3},{value:"\u751f\u6001\u7cfb\u7edf",id:"\u751f\u6001\u7cfb\u7edf",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6d41\u5904\u7406\u7b80\u4ecb"},"\u6d41\u5904\u7406\u7b80\u4ecb"),(0,a.yg)("p",null,'"',(0,a.yg)("a",{parentName:"p",href:"https://www.confluent.io/blog/turning-the-database-inside-out-with-apache-samza/"},"\u5c06\u6570\u636e\u5e93\u7ffb\u8f6c"),'" \u662f\u6570\u636e\u5de5\u7a0b\u9886\u57df\u7684\u4e00\u7bc7\u5f71\u54cd\u6df1\u8fdc\u7684\u6587\u7ae0\uff0c\u4fc3\u6210\u4e86 ',(0,a.yg)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka")," \u7684\u6210\u7acb\u3002\u81ea\u90a3\u4ee5\u540e\uff0c\u50cf ",(0,a.yg)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpanda")," \u548c ",(0,a.yg)("a",{parentName:"p",href:"https://redis.io/docs/manual/data-types/streams/"},"Redis Streams")," \u7684\u5b9e\u73b0\u76f8\u7ee7\u51fa\u73b0\uff0c\u63a8\u52a8\u4e86\u5b9e\u65f6\u6570\u636e\u5904\u7406\u751f\u6001\u7cfb\u7edf\u7684\u53d1\u5c55\u3002"),(0,a.yg)("h2",{id:"\u4e0e\u57fa\u4e8e\u4e8b\u4ef6\u7684\u7f16\u7a0b\u7684\u6bd4\u8f83"},"\u4e0e\u57fa\u4e8e\u4e8b\u4ef6\u7684\u7f16\u7a0b\u7684\u6bd4\u8f83"),(0,a.yg)("p",null,"\u4e0e\u57fa\u4e8e\u4e8b\u4ef6\u7684\u7f16\u7a0b\u7c7b\u4f3c\uff0c\u6d41\u5904\u7406\u662f\u4e00\u79cd\u7f16\u7a0b\u8303\u5f0f\uff0c\u65e8\u5728\u5904\u7406\u8fd1\u5b9e\u65f6\u6216\u4e8b\u4ef6\u53d1\u751f\u5373\u523b\u7684\u4e8b\u4ef6\u3002\u4e00\u79cd\u533a\u5206\u8fd9\u4e24\u8005\u7684\u65b9\u6cd5\u53ef\u80fd\u662f\u9891\u7387\u3002\u6d41\u662f\u4e00\u7cfb\u5217\u8fde\u7eed\u7684\u4e8b\u4ef6\uff0c\u5177\u6709\u9ad8\u541e\u5410\u91cf\uff1a\u4e0e\u5176\u4f7f\u7528\u8bb8\u591a\u77ed\u6682\u7684\u8fde\u63a5\uff0c\u4e0d\u5982\u4fdd\u6301\u4e00\u4e2a\u8fde\u63a5\u6253\u5f00\uff0c\u7b49\u5f85\u4e8b\u4ef6\u7684\u5230\u6765\u3002"),(0,a.yg)("h2",{id:"\u4e0e\u6279\u5904\u7406\u7684\u6bd4\u8f83"},"\u4e0e\u6279\u5904\u7406\u7684\u6bd4\u8f83"),(0,a.yg)("p",null,"\u6d41\u5904\u7406\u53ef\u4ee5\u770b\u4f5c\u662f\u6279\u5904\u7406\uff0c\u5177\u6709\u6781\u5c0f\u7684\u6279\u5927\u5c0f\u3002\u6279\u5927\u5c0f\u4e0d\u4e00\u5b9a\u8981\u662f1\u3002\u6839\u636e\u60a8\u7684\u5ef6\u8fdf\u8981\u6c42\u548c\u5904\u7406\u80fd\u529b\uff0c\u6d88\u606f\u53ef\u4ee5\u6309\u6beb\u79d2\u6216\u79d2\u8fdb\u884c\u5fae\u6279\u5904\u7406\u3002\u4f46\u201c\u6b64\u66f4\u6539\u53ef\u80fd\u6700\u591a\u9700\u8981 24 \u5c0f\u65f6\u624d\u80fd\u53cd\u6620\u201d\u7684\u65f6\u4ee3\u5df2\u7ecf\u8fc7\u53bb\uff01"),(0,a.yg)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-rust"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Rust\uff1f"),(0,a.yg)("p",null,"\u6211\u4eec\u5e0c\u671b\u6784\u5efa\u4e00\u4e2a\u6700\u4f73\u7684\u6d41\u5904\u7406\u5e73\u53f0\uff0c\u8ba9 Rust \u7684\u72ec\u7279\u7279\u6027\u771f\u6b63\u53d1\u6325\u4f5c\u7528\uff1a"),(0,a.yg)("h3",{id:"\u591a\u7ebf\u7a0b\u5f02\u6b65"},"\u591a\u7ebf\u7a0b\u5f02\u6b65"),(0,a.yg)("p",null,"\u4e0e\u5176\u4ed6\u8bed\u8a00\u4e0d\u540c\uff0cRust \u7684\u5f02\u6b65\u6267\u884c\u662f\u591a\u7ebf\u7a0b\u7684\u3002\u5b83\u5141\u8bb8\u60a8\u4f7f\u7528\u6240\u9700\u7684\u7ebf\u7a0b\u6570\u91cf\u6269\u5c55\u8fdb\u7a0b\uff0c\u4ee5\u5145\u5206\u5229\u7528 CPU \u5b9e\u73b0\u6700\u5927\u5e76\u53d1\u6027\u3002",(0,a.yg)("strong",{parentName:"p"},"\u60a8\u65e0\u9700\u8bbe\u7f6e\u5916\u90e8\u961f\u5217\u7cfb\u7edf"),"\uff01"),(0,a.yg)("h3",{id:"\u53ef\u9884\u6d4b\u7684\u5ef6\u8fdf"},"\u53ef\u9884\u6d4b\u7684\u5ef6\u8fdf"),(0,a.yg)("p",null,"\u4f5c\u4e3a\u4e00\u79cd\u6ca1\u6709\u5783\u573e\u56de\u6536\u7684\u8bed\u8a00\uff0c\u4e0d\u4f1a\u5728\u968f\u673a\u65f6\u95f4\u70b9\u89e6\u53d1\u5783\u573e\u56de\u6536\u5668\u5e76\u5f15\u8d77\u6296\u52a8\u3002\u5f53\u60a8\u62e5\u6709\u4e00\u4e2a\u8f83\u957f\u7684\u7ba1\u9053\u65f6\uff0c\u8fd9\u4e9b\u6296\u52a8\u5f80\u5f80\u4f1a\u4f20\u64ad\u5e76\u5728\u4e0b\u6e38\u653e\u5927\u3002\u4e0d\u8fc7\uff0cRust \u672c\u8eab\u5e76\u4e0d\u662f\u81ea\u52a8\u4f4e\u5ef6\u8fdf\u7684 - \u60a8\u4ecd\u9700\u6295\u5165\u76f8\u5f53\u591a\u7684\u52aa\u529b\u8fdb\u884c\u4f18\u5316\u3002\u4f46\u60a8\u4f1a\u6709\u4e00\u4e2a\u826f\u597d\u7684\u8d77\u70b9\u3002"),(0,a.yg)("h3",{id:"\u81ea\u5305\u542b"},"\u81ea\u5305\u542b"),(0,a.yg)("p",null,"\u4e0e\u5176\u4ed6\u8bed\u8a00\u4e0d\u540c\uff0c\u63a8\u8350\u5c06 Rust \u7a0b\u5e8f\u6253\u5305\u4e3a\u9759\u6001\u94fe\u63a5\u7684\u5355\u4e2a\u53ef\u6267\u884c\u6587\u4ef6 - \u5176\u5927\u5c0f\u901a\u5e38\u53ea\u6709\u51e0\u5146\u5b57\u8282\u3002\u800c\u4e14\u65e0\u9700\u5b89\u88c5\u6216\u9884\u70ed - \u5b83\u4f1a\u7acb\u5373\u542f\u52a8\uff0c\u8fd9\u5bf9\u6d41\u5904\u7406\u6765\u8bf4\u662f\u4e00\u4e2a\u4f18\u52bf\u3002"),(0,a.yg)("h3",{id:"\u4f4e\u8d44\u6e90\u4f7f\u7528"},"\u4f4e\u8d44\u6e90\u4f7f\u7528"),(0,a.yg)("p",null,"\u50cf\u5176\u4ed6\u7f16\u8bd1\u8bed\u8a00\u4e00\u6837\uff0cRust \u4f7f\u7528\u7684\u5185\u5b58\u8fdc\u4f4e\u4e8e\u57fa\u4e8e VM \u7684\u8bed\u8a00\u3002\u5e76\u4e14\u65e0\u9700 JIT\uff0cRust \u4e5f\u51cf\u5c11\u4e86 CPU \u7684\u5f00\u9500\u3002"),(0,a.yg)("h3",{id:"\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u5b89\u5168\u6027"},"\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u5b89\u5168\u6027"),(0,a.yg)("p",null,"\u540c\u6837\uff0c\u7531\u4e8e\u6ca1\u6709 GC\uff0cRust \u7a0b\u5e8f\u4e0d\u6613\u53d7\u5230\u201c\u957f\u65f6\u95f4\u5185\u5b58\u81a8\u80c0\u201d\u7684\u5f71\u54cd\uff08\u6280\u672f\u4e0a\uff0c\u8fd9\u4e0d\u662f\u6cc4\u9732\uff09\u3002\u5185\u5b58\u4e0d\u8db3\u5d29\u6e83\u7684\u98ce\u9669\u66f4\u5c0f\uff0c\u56e0\u6b64\u60a8\u4e0d\u5fc5\u201c\u6bcf\u5468\u91cd\u542f\u4e00\u6b21\u8fdb\u7a0b\u201d\u3002\u5c3d\u7ba1\u5982\u6b64\uff0c\u60a8\u4ecd\u9700\u5bf9\u5806\u5206\u914d\u4fdd\u6301\u8c28\u614e\u3002"),(0,a.yg)("h3",{id:"\u751f\u6001\u7cfb\u7edf"},"\u751f\u6001\u7cfb\u7edf"),(0,a.yg)("p",null,"\u6700\u540e\uff0cRust \u62e5\u6709\u4e30\u5bcc\u7684\u5f02\u6b65\u7f16\u7a0b\u5e93\u751f\u6001\u7cfb\u7edf\uff1a\u57fa\u4e8e\u5f02\u6b65 IO \u7684\u7f51\u7edc\u5e93\u3001\u65e0\u9501\u901a\u9053\u548c\u5176\u4ed6\u6570\u636e\u7ed3\u6784\uff0c\u8ba9\u5f02\u6b65\u7f16\u7a0b\u53d8\u5f97\u66f4\u4e3a\u4fbf\u6377\u548c\u6709\u8da3\u3002"),(0,a.yg)("p",null,"\u4e0d\u518d\u8d58\u8ff0\uff0c\u6211\u4eec\u5f00\u59cb\u5427\uff01"))}d.isMDXComponent=!0}}]);