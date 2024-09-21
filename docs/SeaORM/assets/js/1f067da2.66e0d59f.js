"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[19648],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,g=c["".concat(o,".").concat(y)]||c[y]||d[y]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},24317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={},l="\u4e0e Diesel \u7684\u6bd4\u8f83",s={unversionedId:"internal-design/diesel",id:"version-0.4.x/internal-design/diesel",title:"\u4e0e Diesel \u7684\u6bd4\u8f83",description:"SeaORM \u548c Diesel \u5177\u6709\u76f8\u540c\u7684\u76ee\u6807\uff1a\u4e3a\u60a8\u63d0\u4f9b\u4e0e\u6570\u636e\u5e93\u4ea4\u4e92\u7684\u5b8c\u6574\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/versioned_docs/version-0.4.x/09-internal-design/03-diesel.md",sourceDirName:"09-internal-design",slug:"/internal-design/diesel",permalink:"/SeaORM/docs/0.4.x/internal-design/diesel",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/09-internal-design/03-diesel.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1640968085,formattedLastUpdatedAt:"Dec 31, 2021",sidebarPosition:3,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"\u6d3e\u751f\u5b8f",permalink:"/SeaORM/docs/0.4.x/internal-design/derive-macro"}},o={},p=[{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u7f16\u7a0b\u8303\u5f0f",id:"\u7f16\u7a0b\u8303\u5f0f",level:2},{value:"\u7ed3\u6784\u751f\u6210\u5668",id:"\u7ed3\u6784\u751f\u6210\u5668",level:2},{value:"\u76f8\u4f3c\u4e4b\u5904",id:"\u76f8\u4f3c\u4e4b\u5904",level:2},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4e0e-diesel-\u7684\u6bd4\u8f83"},"\u4e0e Diesel \u7684\u6bd4\u8f83"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"SeaORM")," \u548c ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/diesel-rs/diesel"},"Diesel")," \u5177\u6709\u76f8\u540c\u7684\u76ee\u6807\uff1a\u4e3a\u60a8\u63d0\u4f9b\u4e0e\u6570\u636e\u5e93\u4ea4\u4e92\u7684\u5b8c\u6574\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.yg)("p",null,"SeaORM \u548c Diesel \u90fd\u652f\u6301 MySQL\u3001Postgres \u548c SQLite\uff0c\u56e0\u6b64\u60a8\u5728\u9009\u62e9\u65f6\u4e0d\u4f1a\u53d7\u5230\u9650\u5236\u3002\u5c3d\u7ba1 Diesel \u5141\u8bb8\u7b2c\u4e09\u65b9\u5b9e\u73b0\u81ea\u5b9a\u4e49\u540e\u7aef\uff0c\u4f46 SeaORM \u5e76\u4e0d\u652f\u6301\u8fd9\u4e00\u70b9\u3002"),(0,a.yg)("p",null,"\u6211\u4eec\u8fd8\u9009\u62e9\u4e86\u4e00\u4e9b\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"),(0,a.yg)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,a.yg)("p",null,"\u9996\u5148\uff0c\u4e5f\u8bb8\u662f\u8bf7\u6c42\u6700\u591a\u7684\u529f\u80fd\uff0c\u5f02\u6b65 Rust \u652f\u6301\u3002\u867d\u7136\u4f7f\u7528\u5f02\u6b65\u4eca\u5929\u53ef\u80fd\u4e0d\u4f1a\u4e3a\u60a8\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\uff0c\u4f46\u5728\u65e9\u671f\u9636\u6bb5\u505a\u51fa\u5f02\u6b65\u7f16\u7a0b\u7684\u67b6\u6784\u51b3\u7b56\u662f\u5fc5\u8981\u7684\u3002\u9009\u62e9 SeaORM\uff0c\u6211\u4eec\u5171\u540c\u671f\u5f85 Rust \u7684\u5f02\u6b65\u751f\u6001\u7cfb\u7edf\u4e0d\u65ad\u6210\u719f\u3002"),(0,a.yg)("p",null,"\u5728\u5e95\u5c42\uff0cSeaORM \u4e0e ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/sqlx"},"SQLx")," \u4e00\u540c\u4e3a\u60a8\u63d0\u4f9b\u4e00\u4e2a\u7eaf Rust \u6280\u672f\u6808\u3002Diesel \u9ed8\u8ba4\u4f7f\u7528\u539f\u751f\u9a71\u52a8\u7a0b\u5e8f\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u52aa\u529b\u624d\u80fd\u5c06\u5176\u66ff\u6362\u4e3a\u7eaf Rust \u9a71\u52a8\u7a0b\u5e8f\u3002\u4e24\u8005\u5404\u6709\u5229\u5f0a\uff0c\u56e0\u6b64\u8fd9\u53d6\u51b3\u4e8e\u60a8\u7684\u504f\u597d\u3002"),(0,a.yg)("p",null,"SeaORM \u91c7\u7528\u6a21\u5757\u5316\u8bbe\u8ba1\u3002\u5982\u679c\u60a8\u4e0d\u559c\u6b22 ORM \u7684\u6982\u5ff5\uff0c\u60a8\u4ecd\u7136\u4f1a\u5e0c\u671b\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/sea-query"},"SeaQuery"),"\uff0c\u8fd9\u662f\u5e95\u5c42\u7684\u67e5\u8be2\u6784\u5efa\u5668\u3002\u5b83\u8f7b\u91cf\u4e14\u53ef\u4ee5\u8f7b\u677e\u96c6\u6210\u5230\u4efb\u4f55\u9879\u76ee\u4e2d\u3002\u5f53\u60a8\u4f7f\u7528 SeaORM \u65f6\uff0cSeaQuery API \u4e5f\u5bf9\u60a8\u5f00\u653e\uff0c\u56e0\u6b64\u60a8\u5728\u4eab\u53d7\u9ad8\u5c42\u62bd\u8c61\u5e26\u6765\u7684\u597d\u5904\u7684\u540c\u65f6\uff0c\u4f9d\u7136\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u4f7f\u7528\u7075\u6d3b\u7684\u67e5\u8be2\u6784\u5efa\u5668\u7684\u5f3a\u5927\u529f\u80fd\u3002"),(0,a.yg)("h2",{id:"\u7f16\u7a0b\u8303\u5f0f"},"\u7f16\u7a0b\u8303\u5f0f"),(0,a.yg)("p",null,"\u9664\u4e86\u540c\u6b65\u4e0e\u5f02\u6b65\u7684\u57fa\u7840\uff0cDiesel \u548c SeaORM \u4e4b\u95f4\u7684\u6700\u5927\u533a\u522b\u662f\u9759\u6001\u4e0e\u52a8\u6001\u3002"),(0,a.yg)("p",null,"Diesel \u63d0\u4f9b\u4e00\u4e2a\u5b8c\u5168\u5728\u7f16\u8bd1\u65f6\u7684 API\uff0c\u7c7b\u578b\u53ef\u4ee5\u5b8c\u5168\u9759\u6001\u68c0\u67e5\u3002\u60a8\u4e5f\u53ef\u4ee5\u5728 Diesel \u4e2d\u8fdb\u884c\u52a8\u6001\u67e5\u8be2\uff0c\u4f46\u60a8\u5c06\u5931\u53bb\u4e00\u4e9b\u7f16\u8bd1\u65f6\u7c7b\u578b\u68c0\u67e5\u7684\u4f18\u52bf\u3002"),(0,a.yg)("p",null,"SeaORM \u662f\u52a8\u6001\u7684\uff0c\u5176\u4e2d\u7684\u5185\u5bb9\u5728\u8fd0\u884c\u65f6\u786e\u7acb\u3002\u5b83\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u7075\u6d3b\u6027\u3002\u867d\u7136\u60a8\u5931\u53bb\u4e86\u4e00\u4e9b\u7f16\u8bd1\u65f6\u68c0\u67e5\uff0cSeaORM \u901a\u8fc7\u6d4b\u8bd5\u5e2e\u52a9\u60a8\u8bc1\u660e\u6b63\u786e\u6027\u3002"),(0,a.yg)("p",null,"\u4e24\u4e2a\u5e93\u90fd\u5927\u91cf\u4f7f\u7528\u7279\u5f81\u548c\u6cdb\u578b\uff0c\u4f46 SeaORM \u751f\u6210\u7684\u7c7b\u578b\u8f83\u5c11\uff1aDiesel \u4e2d\u7684\u6bcf\u4e00\u5217\u90fd\u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\uff08\u6bcf\u4e2a\u7ed3\u6784\u4f53\u5b9e\u73b0\u591a\u4e2a\u7279\u5f81\uff09\uff0c\u800c SeaORM \u4e2d\u7684\u6bcf\u4e00\u5217\u662f\u4e00\u4e2a\u679a\u4e3e\u53d8\u4f53\uff08\u5b9e\u4f53\u7684\u6240\u6709\u5217\u4e00\u8d77\u5f62\u6210\u4e00\u4e2a\u679a\u4e3e\uff0c\u5e76\u5b9e\u73b0\u4e00\u4e9b\u7279\u5f81\uff09\u3002"),(0,a.yg)("p",null,"SeaORM \u4e2d\u4e5f\u6ca1\u6709\u6df1\u5ea6\u5d4c\u5957\u7684\u6cdb\u578b\uff08\u4f8b\u5982 ",(0,a.yg)("inlineCode",{parentName:"p"},"A<B<C<D<E>>>>"),"\uff09\u3002"),(0,a.yg)("h2",{id:"\u7ed3\u6784\u751f\u6210\u5668"},"\u7ed3\u6784\u751f\u6210\u5668"),(0,a.yg)("p",null,"\u5728 Diesel \u751f\u6001\u7cfb\u7edf\u4e2d\uff0c\u6709\u50cf ",(0,a.yg)("a",{parentName:"p",href:"https://git.irde.st/spacekookie/barrel"},"barrel")," \u8fd9\u6837\u4f18\u79c0\u7684\u5e93\uff0cSeaQL \u5219\u7ef4\u62a4\u4e86\u7528\u4e8e\u7ed3\u6784\u751f\u6210 (SeaQuery) \u548c\u7ba1\u7406\u7684\u5de5\u5177 (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-schema"},"SeaSchema"),")\u3002\u8fd9\u610f\u5473\u7740\u719f\u6089\u7684 API \u548c\u7edf\u4e00\u7684\u4f53\u9a8c\u3002"),(0,a.yg)("h2",{id:"\u76f8\u4f3c\u4e4b\u5904"},"\u76f8\u4f3c\u4e4b\u5904"),(0,a.yg)("p",null,"Diesel \u548c SeaORM \u90fd\u662f\u4ee5\u7ed3\u6784\u4e3a\u5148\uff0c\u8fd9\u610f\u5473\u7740\u4e00\u5207\u90fd\u59cb\u4e8e\u60a8\u73b0\u6709\u7684\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u800c\u4e0d\u662f\u4ece\u60a8\u7684 OOP \u7c7b\u5f00\u59cb\u3002"),(0,a.yg)("p",null,"Diesel \u548c SeaORM \u90fd\u662f\u5173\u7cfb\u578b\u7684\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u7684\u5173\u7cfb\u8fdb\u884c\u590d\u6742\u7684\u8054\u63a5\u3002"),(0,a.yg)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,a.yg)("p",null,"Diesel \u662f Rust \u751f\u6001\u7cfb\u7edf\u4e2d\u4e00\u4e2a\u6210\u719f\u7684\u5e93\u3002SeaORM \u662f\u4e00\u4e2a\u5168\u65b0\u7684\u9879\u76ee\u3002\u4e24\u8005\u4e0d\u80fd\u76f8\u4e92\u66ff\u4ee3\u3002\u6211\u4eec\u5e0c\u671b Rust \u793e\u533a\u80fd\u591f\u4e00\u8d77\u4e0d\u65ad\u58ee\u5927\u3002"))}d.isMDXComponent=!0}}]);