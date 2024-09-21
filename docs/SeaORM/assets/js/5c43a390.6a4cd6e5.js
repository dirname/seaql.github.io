"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[80855],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const o={},i="\u805a\u5408\u51fd\u6570",c={unversionedId:"advanced-query/aggregate-function",id:"advanced-query/aggregate-function",title:"\u805a\u5408\u51fd\u6570",description:"\u60a8\u53ef\u4ee5\u4f7f\u7528 group_by \u65b9\u6cd5\u5bf9\u4ece SeaORM \u67e5\u627e\u4e2d\u9009\u62e9\u7684\u7ed3\u679c\u8fdb\u884c\u5206\u7ec4\u3002\u5982\u679c\u60a8\u5e0c\u671b\u8fdb\u4e00\u6b65\u9650\u5236\u5206\u7ec4\u7ed3\u679c\u96c6\uff0chaving \u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002",source:"@site/docs/08-advanced-query/03-aggregate-function.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/aggregate-function",permalink:"/SeaORM/docs/next/advanced-query/aggregate-function",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/08-advanced-query/03-aggregate-function.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1714104453,formattedLastUpdatedAt:"Apr 26, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6761\u4ef6\u8868\u8fbe\u5f0f",permalink:"/SeaORM/docs/next/advanced-query/conditional-expression"},next:{title:"\u81ea\u5b9a\u4e49\u8fde\u63a5",permalink:"/SeaORM/docs/next/advanced-query/custom-joins"}},l={},u=[{value:"\u5206\u7ec4",id:"\u5206\u7ec4",level:2},{value:"Having",id:"having",level:2}],d={toc:u},p="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u805a\u5408\u51fd\u6570"},"\u805a\u5408\u51fd\u6570"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"group_by")," \u65b9\u6cd5\u5bf9\u4ece SeaORM \u67e5\u627e\u4e2d\u9009\u62e9\u7684\u7ed3\u679c\u8fdb\u884c\u5206\u7ec4\u3002\u5982\u679c\u60a8\u5e0c\u671b\u8fdb\u4e00\u6b65\u9650\u5236\u5206\u7ec4\u7ed3\u679c\u96c6\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"having")," \u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"),(0,r.yg)("h2",{id:"\u5206\u7ec4"},"\u5206\u7ec4"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"group_by")," \u65b9\u6cd5\u53ef\u4ee5\u63a5\u6536\u5b9e\u4f53\u7684\u5217\u6216\u590d\u6742\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,r.yg)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr")),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .group_by(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name""#\n);\n\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column_as(cake::Column::Id.count(), "count")\n        .column_as(cake::Column::Id.sum(), "sum_of_id")\n        .group_by(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT COUNT("cake"."id") AS "count", SUM("cake"."id") AS "sum_of_id" FROM "cake" GROUP BY "cake"."name""#\n);\n')),(0,r.yg)("h2",{id:"having"},"Having"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"having")," \u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7\u5728\u4e0a\u4e00\u8282\u4e2d\u4ecb\u7ecd\u7684\u4efb\u4f55\u6761\u4ef6\u8868\u8fbe\u5f0f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .having(cake::Column::Id.eq(4))\n        .having(cake::Column::Id.eq(5))\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT `cake`.`id`, `cake`.`name` FROM `cake` HAVING `cake`.`id` = 4 AND `cake`.`id` = 5"\n);\n\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column_as(cake::Column::Id.count(), "count")\n        .column_as(cake::Column::Id.sum(), "sum_of_id")\n        .group_by(cake::Column::Name)\n        .having(Expr::col(Alias::new("count")).gt(6))\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT COUNT(`cake`.`id`) AS `count`, SUM(`cake`.`id`) AS `sum_of_id` FROM `cake` GROUP BY `cake`.`name` HAVING `count` > 6"\n);\n')),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"\u805a\u5408\u51fd\u6570\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"max"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"min"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"sum"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"count")," \u53ef\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.ColumnTrait.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ColumnTrait"))," \u4e2d\u4f7f\u7528\u3002")))}s.isMDXComponent=!0}}]);