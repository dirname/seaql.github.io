"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[30176],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67030:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(58168),i=(t(96540),t(15680));const a={},o="\u81ea\u5b9a\u4e49\u8fde\u63a5",l={unversionedId:"advanced-query/custom-joins",id:"version-0.12.x/advanced-query/custom-joins",title:"\u81ea\u5b9a\u4e49\u8fde\u63a5",description:"\u60a8\u53ef\u4ee5\u4f7f\u7528 join \u65b9\u6cd5\u6784\u5efa\u590d\u6742\u7684\u8fde\u63a5\u9009\u62e9\u67e5\u8be2\u3002\u5b83\u63a5\u53d7\u5728\u5b9e\u4f53\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u4efb\u4f55 RelationDef\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 belongs_to \u65b9\u6cd5\u5b9a\u4e49\u5173\u7cfb\u3002\u8fde\u63a5\u7c7b\u578b\u4f7f\u7528 JoinType \u6307\u5b9a\uff0c\u4f8b\u5982\u5185\u90e8\u8fde\u63a5\u3001\u5de6\u8fde\u63a5\u548c\u53f3\u8fde\u63a5\u3002",source:"@site/versioned_docs/version-0.12.x/08-advanced-query/04-custom-joins.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-joins",permalink:"/SeaORM/docs/0.12.x/advanced-query/custom-joins",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/08-advanced-query/04-custom-joins.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1716536332,formattedLastUpdatedAt:"May 24, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u805a\u5408\u51fd\u6570",permalink:"/SeaORM/docs/0.12.x/advanced-query/aggregate-function"},next:{title:"\u5b50\u67e5\u8be2",permalink:"/SeaORM/docs/0.12.x/advanced-query/subquery"}},c={},u=[],s={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u81ea\u5b9a\u4e49\u8fde\u63a5"},"\u81ea\u5b9a\u4e49\u8fde\u63a5"),(0,i.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"join")," \u65b9\u6cd5\u6784\u5efa\u590d\u6742\u7684\u8fde\u63a5\u9009\u62e9\u67e5\u8be2\u3002\u5b83\u63a5\u53d7\u5728\u5b9e\u4f53\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u4efb\u4f55 ",(0,i.yg)("inlineCode",{parentName:"p"},"RelationDef"),"\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"belongs_to")," \u65b9\u6cd5\u5b9a\u4e49\u5173\u7cfb\u3002\u8fde\u63a5\u7c7b\u578b\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"JoinType")," \u6307\u5b9a\uff0c\u4f8b\u5982\u5185\u90e8\u8fde\u63a5\u3001\u5de6\u8fde\u63a5\u548c\u53f3\u8fde\u63a5\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{JoinType, RelationTrait};\nuse sea_query::Expr;\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(filling::Column::Id.count(), "count")\n        .column_as(\n            Expr::col((Alias::new("fruit_alias"), fruit::Column::Name)).into_simple_expr(),\n            "fruit_name"\n        )\n        // \u52a8\u6001\u6784\u5efa `RelationDef`\n        .join_rev(\n            JoinType::InnerJoin,\n            cake_filling::Entity::belongs_to(cake::Entity)\n                .from(cake_filling::Column::CakeId)\n                .to(cake::Column::Id)\n                .into()\n        )\n        // \u590d\u7528\u73b0\u6709\u5b9e\u4f53\u4e2d\u7684 `Relation`\n        .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n        // \u4f7f\u7528\u8868\u522b\u540d\u548c\u81ea\u5b9a\u4e49\u6761\u4ef6\u8fde\u63a5\n        .join_as(\n            JoinType::LeftJoin,\n            cake::Relation::Fruit\n                .def()\n                .on_condition(|_left, right| {\n                    Expr::col((right, fruit::Column::Name))\n                        .like("%tropical%")\n                        .into_condition()\n                }),\n            Alias::new("fruit_alias")\n        )\n        .group_by(cake::Column::Id)\n        .having(filling::Column::Id.count().equals(Expr::value(2)))\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name`, COUNT(`filling`.`id`) AS `count`, `fruit_alias`.`name` AS `fruit_name` FROM `cake`",\n        "INNER JOIN `cake_filling` ON `cake_filling`.`cake_id` = `cake`.`id`",\n        "INNER JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",\n        "LEFT JOIN `fruit` AS `fruit_alias` ON `cake`.`id` = `fruit_alias`.`cake_id` AND `fruit_alias`.`name` LIKE \'%tropical%\'",\n        "GROUP BY `cake`.`id`",\n        "HAVING COUNT(`filling`.`id`) = 2",\n    ]\n    .join(" ")\n);\n')),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ece ",(0,i.yg)("inlineCode",{parentName:"p"},"FromQueryResult")," trait \u6d3e\u751f\u7684\u81ea\u5b9a\u4e49 ",(0,i.yg)("inlineCode",{parentName:"p"},"struct")," \u6765\u5904\u7406\u6b64\u7c7b\u590d\u6742\u67e5\u8be2\u7684\u7ed3\u679c\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,i.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.12.x/advanced-query/custom-select#handling-custom-selects"},"\u8fd9\u91cc"),"\u3002")))}p.isMDXComponent=!0}}]);