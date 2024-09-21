"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[15064],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>g});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),p=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=p(e.components);return r.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},f=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=n,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(g,o(o({ref:a},s),{},{components:t})):r.createElement(g,o({ref:a},s))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45716:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const i={},o="\u6570\u636e\u52a0\u8f7d\u5668",l={unversionedId:"relation/data-loader",id:"version-0.11.x/relation/data-loader",title:"\u6570\u636e\u52a0\u8f7d\u5668",description:'\u5982\u679c\u60a8\u6b63\u5728\u6784\u5efa\u4e00\u4e2a\u5e7f\u6cdb\u67e5\u8be2\u5d4c\u5957\u5173\u7cfb\u7684 Web API\uff0c\u8003\u8651\u6784\u5efa\u4e00\u4e2a GraphQL \u670d\u52a1\u5668\u3002Seaography \u662f\u4e00\u4e2a\u4f7f\u7528 SeaORM \u5b9e\u4f53\u6784\u5efa GraphQL \u89e3\u6790\u5668\u7684 GraphQL \u6846\u67b6\u3002\u9605\u8bfb "\u5f00\u59cb\u4f7f\u7528 Seaography" \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002',source:"@site/versioned_docs/version-0.11.x/06-relation/07-data-loader.md",sourceDirName:"06-relation",slug:"/relation/data-loader",permalink:"/SeaORM/docs/0.11.x/relation/data-loader",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/06-relation/07-data-loader.md",tags:[],version:"0.11.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1675423514,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8fde\u63a5\u6761\u4ef6",permalink:"/SeaORM/docs/0.11.x/relation/custom-join-condition"},next:{title:"Bakery Schema",permalink:"/SeaORM/docs/0.11.x/relation/bakery-schema"}},c={},p=[],s={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u6570\u636e\u52a0\u8f7d\u5668"},"\u6570\u636e\u52a0\u8f7d\u5668"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u6b63\u5728\u6784\u5efa\u4e00\u4e2a\u5e7f\u6cdb\u67e5\u8be2\u5d4c\u5957\u5173\u7cfb\u7684 Web API\uff0c\u8003\u8651\u6784\u5efa\u4e00\u4e2a GraphQL \u670d\u52a1\u5668\u3002",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/Seaography/"},"Seaography"),' \u662f\u4e00\u4e2a\u4f7f\u7528 SeaORM \u5b9e\u4f53\u6784\u5efa GraphQL \u89e3\u6790\u5668\u7684 GraphQL \u6846\u67b6\u3002\u9605\u8bfb "',(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2022-09-27-getting-started-with-seaography/"},"\u5f00\u59cb\u4f7f\u7528 Seaography"),'" \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002')),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html"},"LoaderTrait")," \u63d0\u4f9b\u4e86\u4e00\u4e2a API\uff0c\u7528\u4e8e\u6279\u91cf\u52a0\u8f7d\u76f8\u5173\u5b9e\u4f53\u3002"),(0,n.yg)("p",null,"\u8003\u8651\u4e0b\u9762\u8fd9\u4e2a\u4e00\u5bf9\u591a\u5173\u7cfb\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;\n")),(0,n.yg)("p",null,"\u751f\u6210\u7684 SQL \u67e5\u8be2\u4e3a\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT\n    "cake"."id" AS "A_id",\n    "cake"."name" AS "A_name",\n    "fruit"."id" AS "B_id",\n    "fruit"."name" AS "B_name",\n    "fruit"."cake_id" AS "B_cake_id"\nFROM "cake"\nLEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id"\nORDER BY "cake"."id" ASC\n')),(0,n.yg)("p",null,"\u8fd9\u5f88\u597d\uff0c\u4f46\u5982\u679c N \u662f\u4e00\u4e2a\u8f83\u5927\u7684\u6570\u5b57\uff0c1 \u65b9\uff08Cake\uff09\u7684\u6570\u636e\u5c06\u4f1a\u5927\u91cf\u91cd\u590d\u3002\u8fd9\u5bfc\u81f4\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u7684\u6570\u636e\u589e\u591a\u3002\u5728\u591a\u5bf9\u591a\u60c5\u51b5\u4e0b\uff0c\u53cc\u65b9\u90fd\u53ef\u80fd\u4f1a\u91cd\u590d\u3002\u4f7f\u7528 Loader \u5c06\u786e\u4fdd\u6bcf\u4e2a\u6a21\u578b\u4ec5\u88ab\u4f20\u8f93\u4e00\u6b21\u3002\u57fa\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0cSeaORM \u76ee\u524d\u4e0d\u80fd\u4e00\u6b21\u6027 eager load \u8d85\u8fc7 2 \u4e2a\u5b9e\u4f53\u3002"),(0,n.yg)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u52a0\u8f7d\u4e0e\u4e0a\u9762\u76f8\u540c\u7684\u6570\u636e\uff0c\u4f46\u9700\u8981\u4e24\u4e2a\u67e5\u8be2\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\n\nfor (cake, fruits) in cakes.into_iter().zip(fruits.into_iter()) { .. }\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT "cake"."id", "cake"."name" FROM "cake"\nSELECT "fruit"."id", "fruit"."name", "fruit"."cake_id" FROM "fruit" WHERE "fruit"."cake_id" IN (..)\n')),(0,n.yg)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u67e5\u8be2\u53e0\u52a0\u5728\u4e00\u8d77\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\nlet fillings: Vec<Vec<filling::Model>> = cakes.load_many_to_many(Filling, CakeFilling, db).await?;\n")),(0,n.yg)("p",null,"\u5728\u4e00\u4e2a\u9ad8\u7ea7\u7528\u4f8b\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5bf9\u76f8\u5173\u5b9e\u4f53\u5e94\u7528\u8fc7\u6ee4\u5668\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let fruits_in_stock: Vec<Vec<fruit::Model>> = cakes.load_many(\n    fruit::Entity::find().filter(fruit::Column::Stock.gt(0i32))\n    db\n).await?;\n")))}u.isMDXComponent=!0}}]);