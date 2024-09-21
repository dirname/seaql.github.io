"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[54626],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},i="\u81ea\u5b9a\u4e49\u9009\u62e9",o={unversionedId:"advanced-query/custom-select",id:"version-1.0.x/advanced-query/custom-select",title:"\u81ea\u5b9a\u4e49\u9009\u62e9",description:"\u611f\u8c22\u60a8\u4f7f\u7528 SeaORM\u3002\u8bf7\u5728\u6211\u4eec\u7684 GitHub \u4ed3\u5e93 \u4e0a\u7ed9\u6211\u4eec\u52a0\u661f\uff01\u60a8\u7684\u652f\u6301\u5bf9 SeaORM \u7684\u6301\u7eed\u5f00\u53d1\u548c\u7ef4\u62a4\u81f3\u5173\u91cd\u8981\u3002",source:"@site/versioned_docs/version-1.0.x/08-advanced-query/01-custom-select.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-select",permalink:"/SeaORM/docs/advanced-query/custom-select",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-1.0.x/08-advanced-query/01-custom-select.md",tags:[],version:"1.0.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833108,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 SQLite",permalink:"/SeaORM/docs/write-test/sqlite"},next:{title:"\u6761\u4ef6\u8868\u8fbe\u5f0f",permalink:"/SeaORM/docs/advanced-query/conditional-expression"}},u={},s=[{value:"\u9009\u62e9\u90e8\u5206\u5c5e\u6027",id:"\u9009\u62e9\u90e8\u5206\u5c5e\u6027",level:2},{value:"\u53ef\u9009\u5b57\u6bb5",id:"\u53ef\u9009\u5b57\u6bb5",level:3},{value:"\u9009\u62e9\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f",id:"\u9009\u62e9\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f",level:2},{value:"\u5904\u7406\u9009\u62e9\u7ed3\u679c",id:"\u5904\u7406\u9009\u62e9\u7ed3\u679c",level:2},{value:"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53",id:"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53",level:3},{value:"\u975e\u7ed3\u6784\u5316\u5143\u7ec4",id:"\u975e\u7ed3\u6784\u5316\u5143\u7ec4",level:3},{value:"\u9009\u62e9\u90e8\u5206\u6a21\u578b",id:"\u9009\u62e9\u90e8\u5206\u6a21\u578b",level:2}],c={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u81ea\u5b9a\u4e49\u9009\u62e9"},"\u81ea\u5b9a\u4e49\u9009\u62e9"),(0,r.yg)("admonition",{title:"\u6211\u4eec\u9700\u8981\u60a8\u7684\u652f\u6301\uff01\u2b50",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"\u611f\u8c22\u60a8\u4f7f\u7528 SeaORM\u3002\u8bf7\u5728\u6211\u4eec\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"GitHub \u4ed3\u5e93")," \u4e0a\u7ed9\u6211\u4eec\u52a0\u661f\uff01\u60a8\u7684\u652f\u6301\u5bf9 SeaORM \u7684\u6301\u7eed\u5f00\u53d1\u548c\u7ef4\u62a4\u81f3\u5173\u91cd\u8981\u3002")),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSeaORM \u5c06\u9009\u62e9 ",(0,r.yg)("inlineCode",{parentName:"p"},"Column")," \u679a\u4e3e\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u5217\u3002\u5982\u679c\u60a8\u53ea\u60f3\u9009\u62e9\u67d0\u4e9b\u5217\uff0c\u53ef\u4ee5\u8986\u76d6\u9ed8\u8ba4\u8bbe\u7f6e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'// \u9009\u62e9\u6240\u6709\u5217\nassert_eq!(\n    cake::Entity::find()\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,r.yg)("h2",{id:"\u9009\u62e9\u90e8\u5206\u5c5e\u6027"},"\u9009\u62e9\u90e8\u5206\u5c5e\u6027"),(0,r.yg)("p",null,"\u901a\u8fc7\u8c03\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"select_only")," \u65b9\u6cd5\u6e05\u9664\u9ed8\u8ba4\u9009\u62e9\u3002\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u67d0\u4e9b\u5c5e\u6027\u6216\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'// \u4ec5\u9009\u62e9 name \u5217\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u4e00\u6b21\u9009\u62e9\u591a\u4e2a\u5c5e\u6027\uff0c\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .columns([cake::Column::Id, cake::Column::Name])\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,r.yg)("p",null,"\u9ad8\u7ea7\u793a\u4f8b\uff1a\u6709\u6761\u4ef6\u5730\u9009\u62e9\u9664\u7279\u5b9a\u5217\u5916\u7684\u6240\u6709\u5217\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .columns(cake::Column::iter().filter(|col| match col {\n            cake::Column::Id => false,\n            _ => true,\n        }))\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,r.yg)("h3",{id:"\u53ef\u9009\u5b57\u6bb5"},"\u53ef\u9009\u5b57\u6bb5"),(0,r.yg)("p",null,"\u4ece 0.12 \u5f00\u59cb\uff0cSeaORM \u652f\u6301\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"p"},"Option<T>")," \u6a21\u578b\u5b57\u6bb5\u7684\u90e8\u5206\u9009\u62e9\u3002\u5f53\u9009\u62e9\u7ed3\u679c\u4e0d\u5305\u542b ",(0,r.yg)("inlineCode",{parentName:"p"},"Option<T>")," \u5b57\u6bb5\u65f6\uff0c\u5c06\u586b\u5145 ",(0,r.yg)("inlineCode",{parentName:"p"},"None")," \u503c\uff0c\u800c\u4e0d\u4f1a\u629b\u51fa\u9519\u8bef\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'customer::ActiveModel {\n    name: Set("Alice".to_owned()),\n    notes: Set(Some("\u60f3\u4e0e Bob \u4ea4\u6d41".to_owned())),\n    ..Default::default()\n}\n.save(db)\n.await?;\n\n// `notes` \u5b57\u6bb5\u88ab\u6545\u610f\u7701\u7565\nlet customer = Customer::find()\n    .select_only()\n    .column(customer::Column::Id)\n    .column(customer::Column::Name)\n    .one(db)\n    .await\n    .unwrap();\n\n// \u9009\u62e9\u7ed3\u679c\u4e0d\u5305\u542b `notes` \u5b57\u6bb5\u3002\n// \u7531\u4e8e\u5b83\u7684\u7c7b\u578b\u662f `Option<String>`\uff0c\u5c06\u4e3a `None`\uff0c\u4e14\u4e0d\u4f1a\u629b\u51fa\u9519\u8bef\u3002\nassert_eq!(customers.notes, None);\n')),(0,r.yg)("h2",{id:"\u9009\u62e9\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f"},"\u9009\u62e9\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f"),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"column_as")," / ",(0,r.yg)("inlineCode",{parentName:"p"},"expr_as")," \u65b9\u6cd5\u9009\u62e9\u4efb\u4f55\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f\uff0c\u5b83\u63a5\u53d7\u4efb\u4f55 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,r.yg)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," \u548c\u4e00\u4e2a\u522b\u540d\u3002\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html"},(0,r.yg)("inlineCode",{parentName:"a"},"sea_query::Expr"))," \u8f85\u52a9\u5de5\u5177\u6765\u6784\u5efa ",(0,r.yg)("inlineCode",{parentName:"p"},"SimpleExpr"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_query::{Alias, Expr, Func};\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(Expr::col(cake::Column::Id).max().sub(Expr::col(cake::Column::Id)), "id_diff")\n        .column_as(Expr::cust("CURRENT_TIMESTAMP"), "current_time")\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name", MAX("id") - "id" AS "id_diff", CURRENT_TIMESTAMP AS "current_time" FROM "cake""#\n);\n\nassert_eq!(\n    cake::Entity::find()\n        .expr_as(Func::upper(Expr::col((cake::Entity, cake::Column::Name))), "name_upper")\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT `cake`.`id`, `cake`.`name`, UPPER(`cake`.`name`) AS `name_upper` FROM `cake`"\n);\n')),(0,r.yg)("h2",{id:"\u5904\u7406\u9009\u62e9\u7ed3\u679c"},"\u5904\u7406\u9009\u62e9\u7ed3\u679c"),(0,r.yg)("h3",{id:"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53"},"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"FromQueryResult")," \u7279\u5f81\u6d3e\u751f\u7684\u81ea\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"p"},"struct")," \u6765\u5904\u7406\u590d\u6742\u67e5\u8be2\u7684\u7ed3\u679c\u3002\u5f53\u5904\u7406\u81ea\u5b9a\u4e49\u5217\u6216\u591a\u4e2a\u8fde\u63a5\u65f6\uff0c\u5c24\u5176\u6709\u7528\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u60c5\u51b5\u65e0\u6cd5\u76f4\u63a5\u8f6c\u6362\u4e3a\u6a21\u578b\u3002\u5b83\u53ef\u7528\u4e8e\u63a5\u6536\u4efb\u4f55\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u751a\u81f3\u662f\u539f\u59cb SQL\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{FromQueryResult, JoinType, RelationTrait};\nuse sea_query::Expr;\n\n#[derive(FromQueryResult)]\nstruct CakeAndFillingCount {\n    id: i32,\n    name: String,\n    count: i32,\n}\n\nlet cake_counts: Vec<CakeAndFillingCount> = cake::Entity::find()\n    .column_as(filling::Column::Id.count(), "count")\n    .join_rev(\n        // \u52a8\u6001\u6784\u5efa `RelationDef`\n        JoinType::InnerJoin,\n        cake_filling::Entity::belongs_to(cake::Entity)\n            .from(cake_filling::Column::CakeId)\n            .to(cake::Column::Id)\n            .into()\n    )\n    // \u91cd\u7528\u6765\u81ea\u73b0\u6709\u5b9e\u4f53\u7684 `Relation`\n    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n    .group_by(cake::Column::Id)\n    .into_model::<CakeAndFillingCount>()\n    .all(db)\n    .await?;\n')),(0,r.yg)("h3",{id:"\u975e\u7ed3\u6784\u5316\u5143\u7ec4"},"\u975e\u7ed3\u6784\u5316\u5143\u7ec4"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"into_tuple")," \u65b9\u6cd5\u9009\u62e9\u4e00\u4e2a\u5143\u7ec4\uff08\u6216\u5355\u4e2a\u503c\uff09\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};\n\nlet res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column(cake::Column::Name)\n    .column(cake::Column::Id.count())\n    .group_by(cake::Column::Name)\n    .into_tuple()\n    .all(&db)\n    .await?;\n")),(0,r.yg)("h2",{id:"\u9009\u62e9\u90e8\u5206\u6a21\u578b"},"\u9009\u62e9\u90e8\u5206\u6a21\u578b"),(0,r.yg)("p",null,"\u5728 0.12 \u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u65b0\u7279\u5f81 ",(0,r.yg)("inlineCode",{parentName:"p"},"PartialModelTrait")," \u548c\u914d\u5bf9\u5b8f ",(0,r.yg)("inlineCode",{parentName:"p"},"DerivePartialModel")," \u6765\u6539\u5584\u81ea\u5b9a\u4e49\u9009\u62e9\u7684\u53ef\u7528\u6027\u3002"),(0,r.yg)("p",null,"\u800c\u4e0d\u662f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"use user::Entity as User;\n\n#[derive(FromQueryResult)]\nstruct PartialUser {\n    pub id: i32,\n    pub avatar: String,\n    pub unique_id: Uuid,\n}\n\nlet query = User::find()\n    .select_only()\n    .column(Column::Id)\n    .column(Column::Avatar)\n    .column(Column::UniqueId)\n    .into_model::<PartialUser>();\n")),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u90e8\u5206\u6a21\u578b\uff0c\u76f8\u5e94\u7684\u5217\u5c06\u88ab\u81ea\u52a8\u9009\u62e9\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(DerivePartialModel, FromQueryResult)]\n#[sea_orm(entity = "User")]\nstruct PartialUser {\n    pub id: i32,\n    pub avatar: String,\n    pub unique_id: Uuid,\n}\n\nlet query = User::find().into_partial_model::<PartialUser>();\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"\u4ece ",(0,r.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"1.0.0-rc.2")," \u5f00\u59cb"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"DerivePartialModel")," \u5b8f\u5c5e\u6027 ",(0,r.yg)("inlineCode",{parentName:"p"},"entity")," \u652f\u6301\u590d\u6742\u7c7b\u578b"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(entity = "<entity::Model as ModelTrait>::Entity")]\nstruct PartialUser {\n    ..\n}\n'))),(0,r.yg)("p",null,"\u9ad8\u7ea7\u7528\u6cd5\u5305\u62ec\u5217\u91cd\u6620\u5c04\u548c\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(DerivePartialModel, FromQueryResult)]\n#[sea_orm(entity = "User")]\nstruct PartialRow {\n    #[sea_orm(from_col = "id")]\n    user_id: i32,\n    #[sea_orm(from_expr = "Expr::col(user::Column::Id).add(1)")]\n    next_id: i32,\n}\n\n// \u4e0a\u8ff0\u5185\u5bb9\u7b49\u4ef7\u4e8e\uff1a\nUser::find()\n    .column_as(user::Column::Id, "user_id")\n    .column_as(Expr::col(user::Column::Id).add(1), "next_id")\n')))}p.isMDXComponent=!0}}]);