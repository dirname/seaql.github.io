"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[96208],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={},o="\u66f4\u65b0",l={unversionedId:"basic-crud/update",id:"version-0.9.x/basic-crud/update",title:"\u66f4\u65b0",description:"\u66f4\u65b0\u5355\u4e2a",source:"@site/versioned_docs/version-0.9.x/05-basic-crud/03-update.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/update",permalink:"/SeaORM/docs/0.9.x/basic-crud/update",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/05-basic-crud/03-update.md",tags:[],version:"0.9.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1658050411,formattedLastUpdatedAt:"Jul 17, 2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u5165",permalink:"/SeaORM/docs/0.9.x/basic-crud/insert"},next:{title:"\u4fdd\u5b58",permalink:"/SeaORM/docs/0.9.x/basic-crud/save"}},c={},p=[{value:"\u66f4\u65b0\u5355\u4e2a",id:"\u66f4\u65b0\u5355\u4e2a",level:2},{value:"\u66f4\u65b0\u591a\u4e2a",id:"\u66f4\u65b0\u591a\u4e2a",level:2}],u={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,a.yg)("h2",{id:"\u66f4\u65b0\u5355\u4e2a"},"\u66f4\u65b0\u5355\u4e2a"),(0,a.yg)("p",null,"\u4f60\u5c06\u4ece\u67e5\u8be2\u7ed3\u679c\u4e2d\u83b7\u5f97\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Model"),"\u3002\u5982\u679c\u4f60\u60f3\u5c06\u8be5\u6a21\u578b\u4fdd\u5b58\u56de\u6570\u636e\u5e93\uff0c\u4f60\u9700\u8981 ",(0,a.yg)("em",{parentName:"p"},"\u9996\u5148")," \u5c06\u5176\u8f6c\u6362\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"ActiveModel"),"\u3002\u751f\u6210\u7684\u67e5\u8be2\u5c06\u4ec5\u5305\u62ec ",(0,a.yg)("inlineCode",{parentName:"p"},"Set")," \u5c5e\u6027\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;\n\n// \u8f6c\u6362\u4e3a ActiveModel\nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\n\n// \u66f4\u65b0\u540d\u79f0\u5c5e\u6027\npear.name = Set("\u751c\u68a8".to_owned());\n\n// \u4f7f\u7528\u4e3b\u952e\u503c\u66f4\u65b0\u6570\u636e\u5e93\u4e2d\u5bf9\u5e94\u7684\u884c\nlet pear: fruit::Model = pear.update(db).await?;\n')),(0,a.yg)("h2",{id:"\u66f4\u65b0\u591a\u4e2a"},"\u66f4\u65b0\u591a\u4e2a"),(0,a.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u6570\u636e\u5e93\u4e2d\u66f4\u65b0\u591a\u884c\uff0c\u800c\u65e0\u9700\u901a\u8fc7 SeaORM \u9009\u62e9\u9010\u4e2a\u67e5\u627e\u6bcf\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Model"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"// \u4f7f\u7528 ActiveModel \u6279\u91cf\u8bbe\u7f6e\u5c5e\u6027\nlet update_result: UpdateResult = Fruit::update_many()\n    .set(pear)\n    .filter(fruit::Column::Id.eq(1))\n    .exec(db)\n    .await?;\n\n// \u66f4\u65b0 `fruit` \u8868\uff1a\u5c06 `cake_id` \u8bbe\u7f6e\u4e3a 1\uff0c\u6761\u4ef6\u662f `fruit`.`name` \u5305\u542b 'Apple'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(1))\n    .filter(fruit::Column::Name.contains(\"\u82f9\u679c\"))\n    .exec(db)\n    .await?;\n")))}s.isMDXComponent=!0}}]);