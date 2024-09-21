"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[81653],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,m=u["".concat(c,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},91779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={},i="\u4fdd\u5b58",l={unversionedId:"basic-crud/save",id:"version-0.5.x/basic-crud/save",title:"\u4fdd\u5b58",description:"\u8fd9\u662f\u4e00\u4e2a\u5e2e\u52a9\u65b9\u6cd5\uff0c\u7528\u4e8e\u5c06 ActiveModel \u4fdd\u5b58\uff08\u63d2\u5165/\u66f4\u65b0\uff09\u5230\u6570\u636e\u5e93\u4e2d\u3002",source:"@site/versioned_docs/version-0.5.x/05-basic-crud/04-save.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/save",permalink:"/SeaORM/docs/0.5.x/basic-crud/save",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/05-basic-crud/04-save.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1640968558,formattedLastUpdatedAt:"Dec 31, 2021",sidebarPosition:4,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"\u66f4\u65b0",permalink:"/SeaORM/docs/0.5.x/basic-crud/update"},next:{title:"\u5220\u9664",permalink:"/SeaORM/docs/0.5.x/basic-crud/delete"}},c={},s=[{value:"\u4fdd\u5b58\u884c\u4e3a",id:"\u4fdd\u5b58\u884c\u4e3a",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4fdd\u5b58"},"\u4fdd\u5b58"),(0,a.yg)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5e2e\u52a9\u65b9\u6cd5\uff0c\u7528\u4e8e\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"ActiveModel")," \u4fdd\u5b58\uff08\u63d2\u5165/\u66f4\u65b0\uff09\u5230\u6570\u636e\u5e93\u4e2d\u3002"),(0,a.yg)("h2",{id:"\u4fdd\u5b58\u884c\u4e3a"},"\u4fdd\u5b58\u884c\u4e3a"),(0,a.yg)("p",null,"\u5728\u4fdd\u5b58 ",(0,a.yg)("inlineCode",{parentName:"p"},"ActiveModel")," \u65f6\uff0c\u5b83\u5c06\u6839\u636e\u4e3b\u952e\u5c5e\u6027\u6267\u884c\u63d2\u5165\u6216\u66f4\u65b0\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u4e3b\u952e\u4e3a ",(0,a.yg)("inlineCode",{parentName:"li"},"NotSet"),"\uff0c\u5219\u63d2\u5165"),(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u4e3b\u952e\u4e3a ",(0,a.yg)("inlineCode",{parentName:"li"},"Set")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"li"},"Unchanged"),"\uff0c\u5219\u66f4\u65b0")),(0,a.yg)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.yg)("p",null,"\u8c03\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"save")," \u6765\u63d2\u5165\u6216\u66f4\u65b0 ",(0,a.yg)("inlineCode",{parentName:"p"},"ActiveModel"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::ActiveValue::NotSet;\n\nlet banana = fruit::ActiveModel {\n    id: NotSet, // \u4e3b\u952e\u4e3a NotSet\n    name: Set("Banana".to_owned()),\n    ..Default::default() // \u6240\u6709\u5176\u4ed6\u5c5e\u6027\u4e3a `NotSet`\n};\n\n// \u63d2\u5165\uff0c\u56e0\u4e3a\u4e3b\u952e `id` \u4e3a `NotSet`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// \u66f4\u65b0\uff0c\u56e0\u4e3a\u4e3b\u952e `id` \u4e3a `Unchanged`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n')))}p.isMDXComponent=!0}}]);