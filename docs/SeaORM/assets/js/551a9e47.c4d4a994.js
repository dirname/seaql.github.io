"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1758],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),y=a,m=u["".concat(c,".").concat(y)]||u[y]||s[y]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},62:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={},i="\u4e8b\u52a1",l={unversionedId:"advanced-query/transaction",id:"version-0.4.x/advanced-query/transaction",title:"\u4e8b\u52a1",description:"\u4e8b\u52a1\u662f\u4e00\u7ec4\u5177\u6709 ACID \u4fdd\u8bc1\u7684 SQL \u8bed\u53e5\u6267\u884c\u3002\u8fd9\u91cc\u6709\u4e24\u4e2a\u4e8b\u52a1 API\u3002",source:"@site/versioned_docs/version-0.4.x/08-advanced-query/06-transaction.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/transaction",permalink:"/SeaORM/docs/0.4.x/advanced-query/transaction",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/08-advanced-query/06-transaction.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1640968085,formattedLastUpdatedAt:"Dec 31, 2021",sidebarPosition:6,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"\u5b50\u67e5\u8be2",permalink:"/SeaORM/docs/0.4.x/advanced-query/subquery"},next:{title:"\u6d41\u5f0f\u5904\u7406",permalink:"/SeaORM/docs/0.4.x/advanced-query/streaming"}},c={},d=[{value:"\u5728 <code>Closure</code> \u4e2d",id:"\u5728-closure-\u4e2d",level:2},{value:"<code>begin</code> &amp; <code>commit</code> / <code>rollback</code>",id:"begin--commit--rollback",level:2}],p={toc:d},u="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4e8b\u52a1"},"\u4e8b\u52a1"),(0,a.yg)("p",null,"\u4e8b\u52a1\u662f\u4e00\u7ec4\u5177\u6709 ACID \u4fdd\u8bc1\u7684 SQL \u8bed\u53e5\u6267\u884c\u3002\u8fd9\u91cc\u6709\u4e24\u4e2a\u4e8b\u52a1 API\u3002"),(0,a.yg)("h2",{id:"\u5728-closure-\u4e2d"},"\u5728 ",(0,a.yg)("inlineCode",{parentName:"h2"},"Closure")," \u4e2d"),(0,a.yg)("p",null,"\u5982\u679c\u95ed\u5305\u8fd4\u56de ",(0,a.yg)("inlineCode",{parentName:"p"},"Ok"),"\uff0c\u4e8b\u52a1\u5c06\u88ab\u63d0\u4ea4\uff1b\u5982\u679c\u8fd4\u56de ",(0,a.yg)("inlineCode",{parentName:"p"},"Err"),"\uff0c\u5219\u4f1a\u56de\u6eda\u3002\u7b2c\u4e8c\u548c\u7b2c\u4e09\u4e2a\u7c7b\u578b\u53c2\u6570\u5206\u522b\u662f Ok \u548c Err \u7c7b\u578b\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'// <Fn, A, B> -> Result<A, B>\ndb.transaction::<_, (), DbErr>(|txn| {\n    Box::pin(async move {\n        bakery::ActiveModel {\n            name: Set("SeaSide Bakery".to_owned()), // \u8bbe\u7f6e\u540d\u79f0\u4e3a "SeaSide Bakery"\n            profit_margin: Set(10.4), // \u8bbe\u7f6e\u5229\u6da6\u7387\u4e3a 10.4\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        bakery::ActiveModel {\n            name: Set("Top Bakery".to_owned()), // \u8bbe\u7f6e\u540d\u79f0\u4e3a "Top Bakery"\n            profit_margin: Set(15.0), // \u8bbe\u7f6e\u5229\u6da6\u7387\u4e3a 15.0\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        Ok(())\n    })\n})\n.await;\n')),(0,a.yg)("p",null,"\u8fd9\u662f\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u9996\u9009\u7684\u65b9\u5f0f\u3002\u7136\u800c\uff0c\u5982\u679c\u60a8\u5728\u5c1d\u8bd5\u5728\u5f02\u6b65\u5757\u4e2d\u6355\u83b7\u4e00\u4e2a\u5f15\u7528\u65f6\u9047\u5230\u4e86 ",(0,a.yg)("em",{parentName:"p"},"\u4e0d\u53ef\u80fd\u7684\u751f\u547d\u5468\u671f")," \u95ee\u9898\uff0c\u90a3\u4e48\u4e0b\u9762\u7684 API \u662f\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.yg)("h2",{id:"begin--commit--rollback"},(0,a.yg)("inlineCode",{parentName:"h2"},"begin")," & ",(0,a.yg)("inlineCode",{parentName:"h2"},"commit")," / ",(0,a.yg)("inlineCode",{parentName:"h2"},"rollback")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"begin")," \u4e8b\u52a1\uff0c\u7136\u540e\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"commit")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"rollback"),"\u3002\u5982\u679c ",(0,a.yg)("inlineCode",{parentName:"p"},"txn")," \u8d85\u51fa\u4f5c\u7528\u57df\uff0c\u5b83\u4f1a\u81ea\u52a8\u56de\u6eda\u8be5\u4e8b\u52a1\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let txn = db.begin().await?;\n\nbakery::ActiveModel {\n    name: Set("SeaSide Bakery".to_owned()), // \u8bbe\u7f6e\u540d\u79f0\u4e3a "SeaSide Bakery"\n    profit_margin: Set(10.4), // \u8bbe\u7f6e\u5229\u6da6\u7387\u4e3a 10.4\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\nbakery::ActiveModel {\n    name: Set("Top Bakery".to_owned()), // \u8bbe\u7f6e\u540d\u79f0\u4e3a "Top Bakery"\n    profit_margin: Set(15.0), // \u8bbe\u7f6e\u5229\u6da6\u7387\u4e3a 15.0\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\ntxn.commit().await?;\n')))}s.isMDXComponent=!0}}]);