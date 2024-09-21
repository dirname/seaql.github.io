"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[20787],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={},s="JSON",i={unversionedId:"basic-crud/json",id:"version-0.12.x/basic-crud/json",title:"JSON",description:"\u9009\u62e9 JSON \u7ed3\u679c",source:"@site/versioned_docs/version-0.12.x/05-basic-crud/07-json.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/json",permalink:"/SeaORM/docs/0.12.x/basic-crud/json",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/05-basic-crud/07-json.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690464322,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5220\u9664",permalink:"/SeaORM/docs/0.12.x/basic-crud/delete"},next:{title:"\u539f\u59cb SQL",permalink:"/SeaORM/docs/0.12.x/basic-crud/raw-sql"}},c={},l=[{value:"\u9009\u62e9 JSON \u7ed3\u679c",id:"\u9009\u62e9-json-\u7ed3\u679c",level:2}],d={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"json"},"JSON"),(0,a.yg)("h2",{id:"\u9009\u62e9-json-\u7ed3\u679c"},"\u9009\u62e9 JSON \u7ed3\u679c"),(0,a.yg)("p",null,"\u6240\u6709 SeaORM \u7684\u9009\u62e9\u64cd\u4f5c\u90fd\u80fd\u591f\u8fd4\u56de ",(0,a.yg)("inlineCode",{parentName:"p"},"serde_json::Value"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'// \u901a\u8fc7 id \u67e5\u627e\nlet cake: Option<serde_json::Value> = Cake::find_by_id(1)\n    .into_json()\n    .one(db)\n    .await?;\n\nassert_eq!(\n    cake,\n    Some(serde_json::json!({\n        "id": 1,\n        "name": "\u829d\u58eb\u86cb\u7cd5"\n    }))\n);\n\n// \u5e26\u8fc7\u6ee4\u5668\u67e5\u627e\nlet cakes: Vec<serde_json::Value> = Cake::find()\n    .filter(cake::Column::Name.contains("\u5de7\u514b\u529b"))\n    .order_by_asc(cake::Column::Name)\n    .into_json()\n    .all(db)\n    .await?;\n\nassert_eq!(\n    cakes,\n    [\n        serde_json::json!({\n            "id": 2,\n            "name": "\u5de7\u514b\u529b\u68ee\u6797"\n        }),\n        serde_json::json!({\n            "id": 8,\n            "name": "\u5de7\u514b\u529b\u676f\u5b50\u86cb\u7cd5"\n        }),\n    ]\n);\n\n// \u5206\u9875 json \u7ed3\u679c\nlet cake_pages: Paginator<_> = Cake::find()\n    .filter(cake::Column::Name.contains("\u5de7\u514b\u529b"))\n    .order_by_asc(cake::Column::Name)\n    .into_json()\n    .paginate(db, 50);\n\nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // \u5bf9 cakes: Vec<serde_json::Value> \u505a\u4e00\u4e9b\u64cd\u4f5c\n}\n')))}p.isMDXComponent=!0}}]);