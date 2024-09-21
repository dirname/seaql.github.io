"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[21788],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},y=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=c(t),s=a,d=u["".concat(p,".").concat(s)]||u[s]||g[s]||i;return t?r.createElement(d,l(l({ref:n},y),{},{components:t})):r.createElement(d,l({ref:n},y))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},44011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={},l="\u67b6\u6784",o={unversionedId:"internal-design/architecture",id:"version-0.11.x/internal-design/architecture",title:"\u67b6\u6784",description:"\u8ba9\u6211\u4eec\u6f5c\u5165\u6d77\u6d0b \ud83e\udd3f",source:"@site/versioned_docs/version-0.11.x/10-internal-design/04-architecture.md",sourceDirName:"10-internal-design",slug:"/internal-design/architecture",permalink:"/SeaORM/docs/0.11.x/internal-design/architecture",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/10-internal-design/04-architecture.md",tags:[],version:"0.11.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1675506094,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e0e Diesel \u7684\u6bd4\u8f83",permalink:"/SeaORM/docs/0.11.x/internal-design/diesel"}},p={},c=[],y={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u8ba9\u6211\u4eec\u6f5c\u5165\u6d77\u6d0b \ud83e\udd3f")),(0,a.yg)("img",{width:"100%",src:"/SeaORM/img/SeaORM Architecture.svg"}),(0,a.yg)("p",null,"\u8981\u7406\u89e3 SeaORM \u7684\u67b6\u6784\uff0c\u6211\u4eec\u9700\u8981\u8ba8\u8bba\u4ec0\u4e48\u662f ORM\u3002ORM \u7684\u5b58\u5728\u662f\u4e3a\u4e86\u63d0\u4f9b\u5bf9\u60a8\u5728\u6570\u636e\u5e93\u4e0a\u6267\u884c\u7684\u5e38\u89c1\u64cd\u4f5c\u7684\u62bd\u8c61\uff0c\u5e76\u9690\u85cf\u5b9e\u73b0\u7ec6\u8282\uff0c\u6bd4\u5982\u5b9e\u9645\u7684 SQL \u67e5\u8be2\u3002"),(0,a.yg)("p",null,"\u4f7f\u7528\u4e00\u4e2a\u597d\u7684 ORM\uff0c\u60a8\u4e0d\u5e94\u8be5\u4e3a API \u7684\u8868\u9762\u4e0b\u7684\u5185\u5bb9\u800c\u70e6\u607c\u3002\u76f4\u5230\u60a8\u4e0d\u5f97\u4e0d\u8fd9\u6837\u505a\u3002\u6211\u542c\u5230\u4f60\u8bf4 ",(0,a.yg)("em",{parentName:"p"},"'\u62bd\u8c61\u6cc4\u6f0f'"),"\uff0c\u7684\u786e\uff0c\u5b83\u662f\u8fd9\u6837\u7684\u3002"),(0,a.yg)("p",null,"SeaORM \u91c7\u53d6\u7684\u65b9\u5f0f\u662f ",(0,a.yg)("strong",{parentName:"p"},"'\u5206\u5c42\u62bd\u8c61'"),"\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5411\u4e0b\u6316\u6398\u4e00\u5c42\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6211\u4eec\u628a SeaQuery \u505a\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u4ed3\u5e93\u3002\u5b83\u672c\u8eab\u5f88\u6709\u7528\uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u516c\u5f00\u7684 API \u63a5\u53e3\u548c\u5355\u72ec\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u8fd9\u4f7f\u5f97\u521b\u5efa\u6df7\u6dc6\u7684\u5185\u90e8 API \u6bd4\u5355\u4f53\u65b9\u6cd5\u8981\u56f0\u96be\u5f97\u591a\u3002"),(0,a.yg)("p",null,"SeaORM \u7684\u4e2d\u5fc3\u601d\u60f3\u662f\u51e0\u4e4e\u6240\u6709\u5185\u5bb9\u90fd\u662f\u53ef\u5728\u8fd0\u884c\u65f6\u914d\u7f6e\u7684\u3002\u5728\u7f16\u8bd1\u65f6\uff0c\u5b83\u5e76\u4e0d\u77e5\u9053\u5e95\u5c42\u7684\u6570\u636e\u5e93\u662f\u4ec0\u4e48\u3002"),(0,a.yg)("p",null,"\u6570\u636e\u5e93\u65e0\u5173\u6027\u5e26\u6765\u4e86\u4ec0\u4e48\u597d\u5904\uff1f\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8ba9\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u4efb\u4f55\u6570\u636e\u5e93\u4e0a\u8fd0\u884c\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u8fd0\u884c\u65f6\u914d\u7f6e"),(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u76f8\u540c\u7684\u6a21\u578b\u5e76\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u4e4b\u95f4\u8f6c\u79fb"),(0,a.yg)("li",{parentName:"ol"},"\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a '\u6570\u636e\u7ed3\u6784 crate' \u6765\u5171\u4eab\u4e0d\u540c\u9879\u76ee\u4e4b\u95f4\u7684\u5b9e\u4f53\uff0c\u6570\u636e\u5e93\u7531\u4e0b\u6e38\u7684 '\u884c\u4e3a crate' \u9009\u62e9")),(0,a.yg)("p",null,"SeaORM \u7684 API \u4e0d\u662f\u4e00\u4e2a\u8584\u8584\u7684\u5916\u58f3\uff0c\u800c\u662f\u7531\u5c42\u7ec4\u6210\uff0c\u5176\u4e2d\u6bcf\u4e00\u5c42\u4e0b\u9762\u7684\u62bd\u8c61\u7a0b\u5ea6\u8f83\u4f4e\u3002"),(0,a.yg)("p",null,"\u5728\u4f7f\u7528 API \u65f6\uff0c\u6709\u4e0d\u540c\u7684\u9636\u6bb5\u3002"),(0,a.yg)("p",null,"\u56e0\u6b64\uff0c\u6709\u4e24\u4e2a\u7ef4\u5ea6\u53ef\u4ee5\u6d4f\u89c8 SeaORM \u4ee3\u7801\u5e93\uff0c",(0,a.yg)("strong",{parentName:"p"},"'\u9636\u6bb5'")," \u548c ",(0,a.yg)("strong",{parentName:"p"},"'\u62bd\u8c61\u7a0b\u5ea6'"),"\u3002"),(0,a.yg)("p",null,"\u7b2c\u4e00\u4e2a\u662f\u58f0\u660e\u9636\u6bb5\u3002\u5b9e\u4f53\u53ca\u5176\u4e4b\u95f4\u7684\u5173\u7cfb\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"EntityTrait"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"ColumnTrait")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"RelationTrait")," \u7b49\u8fdb\u884c\u5b9a\u4e49\u3002"),(0,a.yg)("p",null,"\u7b2c\u4e8c\u4e2a\u662f\u67e5\u8be2\u6784\u5efa\u9636\u6bb5\u3002"),(0,a.yg)("p",null,"\u6700\u4e0a\u5c42\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"Entity")," \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"find*"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"insert"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"update")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"delete")," \u65b9\u6cd5\uff0c\u60a8\u53ef\u4ee5\u76f4\u89c2\u5730\u6267\u884c\u57fa\u672c\u7684 CRUD \u64cd\u4f5c\u3002"),(0,a.yg)("p",null,"\u4e0b\u4e00\u5c42\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"Select"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"Insert"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"Update")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"Delete")," \u7ed3\u6784\u4f53\uff0c\u6bcf\u4e2a\u90fd\u6709\u81ea\u5df1\u7684 API \u4ee5\u5b9e\u73b0\u66f4\u9ad8\u7ea7\u7684\u64cd\u4f5c\u3002"),(0,a.yg)("p",null,"\u518d\u4e0b\u4e00\u5c42\u662f SeaQuery \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"SelectStatement"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"InsertStatement"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"UpdateStatement")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"DeleteStatement"),"\uff0c\u5b83\u4eec\u6709\u4e30\u5bcc\u7684 API \u4f9b\u60a8\u73a9\u5f04 SQL \u8bed\u6cd5\u6811\u3002"),(0,a.yg)("p",null,"\u7b2c\u4e09\u4e2a\u662f\u6267\u884c\u9636\u6bb5\u3002\u4e00\u7ec4\u72ec\u7acb\u7684\u7ed3\u6784\u4f53 ",(0,a.yg)("inlineCode",{parentName:"p"},"Selector"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"Inserter"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"Updater")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"Deleter")," \u8d1f\u8d23\u5728\u6570\u636e\u5e93\u8fde\u63a5\u4e0a\u6267\u884c\u8bed\u53e5\u3002"),(0,a.yg)("p",null,"\u6700\u540e\u662f\u89e3\u6790\u9636\u6bb5\uff0c\u5f53\u67e5\u8be2\u7ed3\u679c\u88ab\u8f6c\u6362\u4e3a Rust \u7c7b\u578b\u5e76\u586b\u5145\u5230\u7ed3\u6784\u4f53\u4e2d\u3002\u5982\u679c\u8fd9\u662f\u4e00\u4e2a\u5173\u7cfb\u67e5\u8be2\uff0c\u8fd9\u4e9b\u7ed3\u6784\u4f53\u5c06\u6839\u636e\u5b83\u4eec\u7684\u5173\u7cfb\u88ab\u62fc\u63a5\u5728\u4e00\u8d77\u3002"),(0,a.yg)("p",null,"\u56e0\u4e3a\u53ea\u6709\u6267\u884c\u548c\u89e3\u6790\u9636\u6bb5\u662f\u7279\u5b9a\u4e8e\u6570\u636e\u5e93\u7684\uff0c\u6211\u4eec\u6709\u53ef\u80fd\u901a\u8fc7\u66ff\u6362\u5b83\u4eec\u6765\u4f7f\u7528\u4e0d\u540c\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,a.yg)("p",null,"\u6211\u8bbe\u60f3\u6709\u4e00\u5929\uff0c\u6211\u4eec\u5c06\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff0c\u5177\u6709\u4e0d\u540c\u7684\u8bed\u6cd5\u3001\u534f\u8bae\u548c\u5f62\u5f0f\u56e0\u7d20\u7684\u77e9\u9635\u3002"))}g.isMDXComponent=!0}}]);