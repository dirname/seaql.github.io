"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[30134],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(r),f=n,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(58168),n=(r(96540),r(15680));const i={},l="\u6570\u636e\u52a0\u8f7d\u5668",o={unversionedId:"relation/data-loader",id:"version-1.0.x/relation/data-loader",title:"\u6570\u636e\u52a0\u8f7d\u5668",description:"LoaderTrait \u63d0\u4f9b\u4e86\u4e00\u4e2a API\uff0c\u7528\u4e8e\u6279\u91cf\u52a0\u8f7d\u76f8\u5173\u5b9e\u4f53\u3002",source:"@site/versioned_docs/version-1.0.x/06-relation/07-data-loader.md",sourceDirName:"06-relation",slug:"/relation/data-loader",permalink:"/SeaORM/docs/relation/data-loader",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-1.0.x/06-relation/07-data-loader.md",tags:[],version:"1.0.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833108,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8fde\u63a5\u6761\u4ef6",permalink:"/SeaORM/docs/relation/custom-join-condition"},next:{title:"Bakery Schema",permalink:"/SeaORM/docs/relation/bakery-schema"}},c={},d=[],u={toc:d},s="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(s,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u6570\u636e\u52a0\u8f7d\u5668"},"\u6570\u636e\u52a0\u8f7d\u5668"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html"},"LoaderTrait")," \u63d0\u4f9b\u4e86\u4e00\u4e2a API\uff0c\u7528\u4e8e\u6279\u91cf\u52a0\u8f7d\u76f8\u5173\u5b9e\u4f53\u3002"),(0,n.yg)("p",null,"\u8003\u8651\u8fd9\u4e2a\u4e00\u5bf9\u591a\u5173\u7cfb\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;\n")),(0,n.yg)("p",null,"\u751f\u6210\u7684 SQL \u67e5\u8be2\u662f\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT\n    "cake"."id" AS "A_id",\n    "cake"."name" AS "A_name",\n    "fruit"."id" AS "B_id",\n    "fruit"."name" AS "B_name",\n    "fruit"."cake_id" AS "B_cake_id"\nFROM "cake"\nLEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id"\nORDER BY "cake"."id" ASC\n')),(0,n.yg)("p",null,"\u8fd9\u5f88\u597d\uff0c\u4f46\u5982\u679c N \u662f\u4e00\u4e2a\u8f83\u5927\u7684\u6570\u5b57\uff0c1 \u4e00\u65b9\uff08\u86cb\u7cd5\uff09\u7684\u6570\u636e\u4f1a\u5927\u91cf\u91cd\u590d\u3002\u8fd9\u4f1a\u5bfc\u81f4\u66f4\u591a\u7684\u6570\u636e\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u3002\u5728\u591a\u5bf9\u591a\u7684\u60c5\u51b5\u4e0b\uff0c\u53cc\u65b9\u6570\u636e\u53ef\u80fd\u90fd\u4f1a\u91cd\u590d\u3002\u4f7f\u7528\u52a0\u8f7d\u5668\u53ef\u4ee5\u786e\u4fdd\u6bcf\u4e2a\u6a21\u578b\u53ea\u4f20\u8f93\u4e00\u6b21\u3002\u56e0\u6b64\uff0cSeaORM \u76ee\u524d\u65e0\u6cd5\u540c\u65f6\u6025\u5207\u52a0\u8f7d\u591a\u4e2a\u8d85\u8fc7\u4e24\u4e2a\u7684\u5b9e\u4f53\u3002"),(0,n.yg)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u4f7f\u7528\u4e24\u4e2a\u67e5\u8be2\u52a0\u8f7d\u4e0e\u4e0a\u8ff0\u76f8\u540c\u7684\u6570\u636e\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\n\nfor (cake, fruits) in cakes.into_iter().zip(fruits.into_iter()) { .. }\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT "cake"."id", "cake"."name" FROM "cake"\nSELECT "fruit"."id", "fruit"."name", "fruit"."cake_id" FROM "fruit" WHERE "fruit"."cake_id" IN (..)\n')),(0,n.yg)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u64cd\u4f5c\u53e0\u52a0\u5728\u4e00\u8d77\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\nlet fillings: Vec<Vec<filling::Model>> = cakes.load_many_to_many(Filling, CakeFilling, db).await?;\n")),(0,n.yg)("p",null,"\u5728\u9ad8\u7ea7\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5bf9\u76f8\u5173\u5b9e\u4f53\u5e94\u7528\u7b5b\u9009\u6761\u4ef6\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let fruits_in_stock: Vec<Vec<fruit::Model>> = cakes.load_many(\n    fruit::Entity::find().filter(fruit::Column::Stock.gt(0i32)),\n    db\n).await?;\n")))}p.isMDXComponent=!0}}]);