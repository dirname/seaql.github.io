"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[78773],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),g=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=g(r),c=a,m=y["".concat(p,".").concat(c)]||y[c]||u[c]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},96479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=r(58168),a=(r(96540),r(15680));const l={},i="\u7a33\u5065\u4e0e\u6b63\u786e",o={unversionedId:"write-test/testing",id:"version-0.11.x/write-test/testing",title:"\u7a33\u5065\u4e0e\u6b63\u786e",description:"\u6d4b\u8bd5\u662f Rust \u7f16\u7a0b\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u4f60\u770b\uff0c cargo test \u662f\u5185\u7f6e\u7684\u3002",source:"@site/versioned_docs/version-0.11.x/07-write-test/01-testing.md",sourceDirName:"07-write-test",slug:"/write-test/testing",permalink:"/SeaORM/docs/0.11.x/write-test/testing",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/07-write-test/01-testing.md",tags:[],version:"0.11.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1675430515,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bakery Schema",permalink:"/SeaORM/docs/0.11.x/relation/bakery-schema"},next:{title:"Mock \u63a5\u53e3",permalink:"/SeaORM/docs/0.11.x/write-test/mock"}},p={},g=[{value:"\u9519\u8bef\u7c7b\u578b",id:"\u9519\u8bef\u7c7b\u578b",level:2},{value:"1. \u7c7b\u578b\u9519\u8bef",id:"1-\u7c7b\u578b\u9519\u8bef",level:3},{value:"2. \u4e8b\u52a1\u9519\u8bef",id:"2-\u4e8b\u52a1\u9519\u8bef",level:3},{value:"3. \u884c\u4e3a\u9519\u8bef",id:"3-\u884c\u4e3a\u9519\u8bef",level:3},{value:"\u7f13\u89e3\u63aa\u65bd",id:"\u7f13\u89e3\u63aa\u65bd",level:2},{value:"1. \u7c7b\u578b\u9519\u8bef",id:"1-\u7c7b\u578b\u9519\u8bef-1",level:3},{value:"2. \u4e8b\u52a1\u9519\u8bef",id:"2-\u4e8b\u52a1\u9519\u8bef-1",level:3},{value:"3. \u884c\u4e3a\u9519\u8bef",id:"3-\u884c\u4e3a\u9519\u8bef-1",level:3}],s={toc:g},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u7a33\u5065\u4e0e\u6b63\u786e"},"\u7a33\u5065\u4e0e\u6b63\u786e"),(0,a.yg)("p",null,"\u6d4b\u8bd5\u662f Rust \u7f16\u7a0b\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u4f60\u770b\uff0c ",(0,a.yg)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/commands/cargo-test.html"},(0,a.yg)("inlineCode",{parentName:"a"},"cargo test"))," \u662f\u5185\u7f6e\u7684\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u4e0d\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"unsafe")," \u4e14\u4ee3\u7801\u80fd\u591f\u7f16\u8bd1\uff0c\u90a3\u4e48\u4f60\u7684 Rust \u7a0b\u5e8f\u5c31\u662f ",(0,a.yg)("em",{parentName:"p"},"\u5b89\u5168")," \u7684\u3002\u7136\u800c\uff0c\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u5b83\u81ea\u52a8\u53d8\u5f97 ",(0,a.yg)("em",{parentName:"p"},"\u7a33\u5065"),"\u3002\u5982\u679c\u4f60\u4e0d\u5c0f\u5fc3\u5904\u7406\u9519\u8bef\uff0c\u7a0b\u5e8f\u4ecd\u7136\u53ef\u80fd\u610f\u5916\u5730\u5d29\u6e83\u3002"),(0,a.yg)("p",null,"\u5373\u4f7f\u4f60\u7684\u7a0b\u5e8f\u6ca1\u6709\u5d29\u6e83\uff0c\u4e5f\u4e0d\u610f\u5473\u7740\u5b83\u662f ",(0,a.yg)("em",{parentName:"p"},"\u6b63\u786e")," \u7684\u3002\u5b83\u4ecd\u7136\u53ef\u80fd\u4ea7\u751f\u9519\u8bef\u884c\u4e3a\uff0c\u5e76\u9020\u6210\u6570\u636e\u6df7\u4e71\u3002"),(0,a.yg)("p",null,"\u901a\u8fc7\u7f16\u5199\u9002\u5f53\u7684\u6d4b\u8bd5\uff0c\u4f60\u53ef\u4ee5\u63d0\u9ad8\u7a0b\u5e8f\u7684\u6b63\u786e\u6027\u3002"),(0,a.yg)("h2",{id:"\u9519\u8bef\u7c7b\u578b"},"\u9519\u8bef\u7c7b\u578b"),(0,a.yg)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5bf9\u6570\u636e\u9a71\u52a8\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4e0d\u540c\u7684\u9519\u8bef\u539f\u56e0\u8fdb\u884c\u5206\u7c7b\uff1a"),(0,a.yg)("h3",{id:"1-\u7c7b\u578b\u9519\u8bef"},"1. \u7c7b\u578b\u9519\u8bef"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u62fc\u5199\u9519\u8bef\u6216\u4e0d\u5b58\u5728\u7684\u7b26\u53f7\uff08\u8868\u6216\u5217\uff09\u540d\u79f0"),(0,a.yg)("li",{parentName:"ol"},"\u5728\u6570\u636e\u4e0a\u4f7f\u7528\u4e0d\u517c\u5bb9\u7684\u51fd\u6570\u6216\u8fd0\u7b97\u7b26\uff08\u4f8b\u5982\uff0c\u5c1d\u8bd5\u5c06\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u52a0\uff09"),(0,a.yg)("li",{parentName:"ol"},"\u65e0\u6548\u7684 SQL \u67e5\u8be2",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u5728 ",(0,a.yg)("inlineCode",{parentName:"li"},"JOIN")," \u67e5\u8be2\u4e2d\u5b58\u5728\u6a21\u7cca\u7b26\u53f7"),(0,a.yg)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u5fd8\u8bb0\u5728\u4e0d\u53ef\u4e3a\u7a7a\u7684\u5217\u4e0a\u63d2\u5165\u6570\u636e"),(0,a.yg)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u5728 ",(0,a.yg)("inlineCode",{parentName:"li"},"GROUP BY")," \u67e5\u8be2\u4e2d\u5fd8\u8bb0\u5bf9\u6bcf\u4e00\u5217\u8fdb\u884c\u805a\u5408")))),(0,a.yg)("h3",{id:"2-\u4e8b\u52a1\u9519\u8bef"},"2. \u4e8b\u52a1\u9519\u8bef"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u65e0\u6cd5\u7ef4\u62a4\u5b9e\u4f53\u5173\u7cfb"),(0,a.yg)("li",{parentName:"ol"},"\u65e0\u6cd5\u7ef4\u62a4\u6570\u636e\u4e00\u81f4\u6027\u548c\u7ea6\u675f")),(0,a.yg)("h3",{id:"3-\u884c\u4e3a\u9519\u8bef"},"3. \u884c\u4e3a\u9519\u8bef"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5728\u9519\u8bef\u7684\u6761\u4ef6\u4e0b\u8fdb\u884c\u8fde\u63a5\u6216\u8fc7\u6ee4"),(0,a.yg)("li",{parentName:"ol"},"\u4e0d\u5b8c\u6574\u6216\u4e0d\u6b63\u786e\u7684\u67e5\u8be2\u7ed3\u679c"),(0,a.yg)("li",{parentName:"ol"},"\u63d2\u5165\u3001\u66f4\u65b0\u6216\u5220\u9664\u64cd\u4f5c\u5e26\u6765\u610f\u5916\u7684\u526f\u4f5c\u7528"),(0,a.yg)("li",{parentName:"ol"},"\u4efb\u4f55\u5176\u4ed6\u975e\u9884\u671f\u884c\u4e3a")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5173\u4e8e\u201c\u610f\u5916\u526f\u4f5c\u7528\u201d\u7684\u8bf4\u660e\uff1a\u9664\u975e\u5173\u7cfb\u662f\u4e25\u683c\u7684\u7236\u5b50\u5173\u7cfb\uff0c\u5426\u5219\u4e0d\u8981\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"CASCADE"))),(0,a.yg)("h2",{id:"\u7f13\u89e3\u63aa\u65bd"},"\u7f13\u89e3\u63aa\u65bd"),(0,a.yg)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u7f13\u89e3\u8fd9\u4e9b\u9519\u8bef\uff1a"),(0,a.yg)("h3",{id:"1-\u7c7b\u578b\u9519\u8bef-1"},"1. \u7c7b\u578b\u9519\u8bef"),(0,a.yg)("p",null,"\u4f7f\u7528 Rust \u81ea\u52a8\u80fd\u591f\u907f\u514d\u62fc\u5199\u7b26\u53f7\u7684\u9519\u8bef\u3002"),(0,a.yg)("p",null,"\u4f7f\u7528 ",(0,a.yg)("em",{parentName:"p"},"\u5b8c\u5168\u9759\u6001")," \u7684\u67e5\u8be2\u6784\u5efa\u5668\u53ef\u4ee5\u6d88\u9664\u8fd9\u4e00\u7c7b\u6240\u6709\u9519\u8bef\u3002\u7136\u800c\uff0c\u8fd9\u8981\u6c42\u6bcf\u4e2a\u53c2\u6570\u5728\u7f16\u8bd1\u65f6\u9759\u6001\u5b9a\u4e49\u5e76\u53ef\u7528\u3002\u8fd9\u662f\u4e00\u4e2a ",(0,a.yg)("em",{parentName:"p"},"\u82db\u523b")," \u7684\u8981\u6c42\uff0c\u56e0\u4e3a\u603b\u6709\u4e9b\u4e8b\u60c5\u5728\u7a0b\u5e8f\u542f\u52a8\uff08\u73af\u5883\u53d8\u91cf\uff09\u548c\u8fd0\u884c\uff08\u8fd0\u884c\u65f6\u914d\u7f6e\u66f4\u6539\uff09\u4e4b\u524d\u662f\u65e0\u6cd5\u5f97\u77e5\u7684\u3002\u5bf9\u4e8e\u6765\u81ea\u811a\u672c\u8bed\u8a00\u80cc\u666f\u7684\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u8fd9\u5c24\u5176\u5c34\u5c2c\uff0c\u56e0\u4e3a\u7c7b\u578b\u7cfb\u7edf\u4e00\u76f4\u662f\u52a8\u6001\u7684\u3002"),(0,a.yg)("p",null,"\u56e0\u6b64\uff0cSeaORM \u4e0d\u5c1d\u8bd5\u5728\u7f16\u8bd1\u65f6\u68c0\u67e5\u8fd9\u4e9b\u95ee\u9898\u3002\u6211\u4eec\u6253\u7b97\uff08\u4ecd\u5728\u5f00\u53d1\u4e2d\uff09\u63d0\u4f9b\u52a8\u6001\u751f\u6210\u67e5\u8be2\u7684\u8fd0\u884c\u65f6 lint \u68c0\u67e5\uff0c\u4f60\u53ef\u4ee5\u5728\u5355\u5143\u6d4b\u8bd5\u4e2d\u542f\u7528\uff0c\u4f46\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u7981\u7528\u3002"),(0,a.yg)("h3",{id:"2-\u4e8b\u52a1\u9519\u8bef-1"},"2. \u4e8b\u52a1\u9519\u8bef"),(0,a.yg)("p",null,"\u8fd9\u4e9b\u95ee\u9898\u65e0\u6cd5\u6d88\u9664\u3002\u5b83\u4eec\u901a\u5e38\u8868\u660e\u4ee3\u7801\u5b58\u5728\u903b\u8f91\u9519\u8bef\u3002\u5f53\u8fd9\u4e9b\u9519\u8bef\u53d1\u751f\u65f6\uff0c\u901a\u5e38\u5df2\u7ecf\u4e3a\u65f6\u5df2\u665a\uff0c\u4f60\u552f\u4e00\u7684\u9009\u62e9\u662f\u4e2d\u6b62\u3002\u76f8\u53cd\uff0c\u5fc5\u987b\u4e3b\u52a8\u9632\u6b62\u8fd9\u4e9b\u95ee\u9898\uff1a\u5728\u5c1d\u8bd5\u6570\u636e\u64cd\u4f5c\u4e4b\u524d\uff0c\u5148\u68c0\u67e5\u7ea6\u675f\u6761\u4ef6\u3002"),(0,a.yg)("p",null,"\u4f60\u5e94\u8be5\u7f16\u5199\u4e00\u7cfb\u5217\u5355\u5143\u6d4b\u8bd5\uff0c\u80fd\u591f\u62d2\u7edd\u9519\u8bef\u6570\u636e\u5e76\u9632\u6b62\u5176\u8fdb\u5165\u6570\u636e\u5e93\u3002\u4f60\u7684\u5355\u5143\u6d4b\u8bd5\u8fd8\u5e94\u8be5\u9a8c\u8bc1\u6bcf\u4e2a ",(0,a.yg)("em",{parentName:"p"},"\u4e8b\u52a1"),"\uff08\u5728\u4f60\u7684\u5e94\u7528\u9886\u57df\uff0c\u800c\u4e0d\u4e00\u5b9a\u662f\u6570\u636e\u5e93\u4e8b\u52a1\uff09\u90fd\u662f\u5408\u7406\u7684\u3002"),(0,a.yg)("p",null,"SeaORM \u5e2e\u52a9\u4f60\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"Mock")," \u6570\u636e\u5e93\u63a5\u53e3\u7f16\u5199\u8fd9\u4e9b\u5355\u5143\u6d4b\u8bd5\u3002"),(0,a.yg)("h3",{id:"3-\u884c\u4e3a\u9519\u8bef-1"},"3. \u884c\u4e3a\u9519\u8bef"),(0,a.yg)("p",null,"\u8fd9\u57fa\u672c\u4e0a\u662f\u5bf9\u6574\u4e2a\u7a0b\u5e8f\u8fdb\u884c\u57df\u7ea7\u522b\u7684\u6d4b\u8bd5\uff0c\u9700\u8981\u4f60\u63d0\u4f9b\u79cd\u5b50\u6570\u636e\u5e76\u6a21\u62df\u5e38\u89c1\u7684\u7528\u6237\u64cd\u4f5c\u3002\u901a\u5e38\uff0c\u4f60\u4f1a\u5728 CI \u4e2d\u5bf9\u771f\u5b9e\u6570\u636e\u5e93\u8fdb\u884c\u6b64\u64cd\u4f5c\u3002\u7136\u800c\uff0cSeaORM \u9f13\u52b1\u4f60\u7f29\u5c0f\u8fd9\u4e9b\u6d4b\u8bd5\u7684\u89c4\u6a21\uff0c\u4ee5\u4fbf\u901a\u8fc7 Cargo \u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html"},"\u96c6\u6210\u6d4b\u8bd5")," \u6d4b\u8bd5\u6700\u91cd\u8981\u7684\u6570\u636e\u6d41\u3002"),(0,a.yg)("p",null,"\u7531\u4e8e SeaORM \u62bd\u8c61\u4e86 MySQL\u3001PostgreSQL \u548c SQLite\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u4f7f\u7528 SQLite \u4f5c\u4e3a\u540e\u7aef\u6765\u6d4b\u8bd5\u7a0b\u5e8f\u7684\u884c\u4e3a\u3002\u5b83\u8db3\u591f\u8f7b\u91cf\uff0c\u53ef\u4ee5\u9891\u7e41\u5730\u5728\u672c\u5730\u548c CI \u4e0a\u8fd0\u884c\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cSQLite \u7f3a\u5c11 MySQL \u6216 PostgreSQL \u7684\u67d0\u4e9b\u9ad8\u7ea7\u529f\u80fd\uff0c\u56e0\u6b64\u6839\u636e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5e93\u7279\u5b9a\u529f\u80fd\uff0c\u5e76\u975e\u6240\u6709\u903b\u8f91\u90fd\u53ef\u4ee5\u5728 SQLite \u5185\u90e8\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,a.yg)("p",null,"\u6211\u4eec\u6b63\u5728\u5bfb\u627e\u53ef\u4ee5\u6a21\u62df MySQL \u548c PostgreSQL \u66f4\u9ad8\u7ea7\u7279\u6027\u7684 SQLite \u66ff\u4ee3\u54c1\u3002"))}u.isMDXComponent=!0}}]);