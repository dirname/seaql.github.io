"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[3292],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,y=m["".concat(i,".").concat(p)]||m[p]||g[p]||o;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(8168),r=(a(6540),a(5680));const o={slug:"2021-10-01-whats-new-in-0.2.4",title:"SeaORM 0.2.4 \u65b0\u7279\u6027",author:"SeaQL \u56e2\u961f",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},s=void 0,l={permalink:"/blog/2021-10-01-whats-new-in-0.2.4",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2021-10-01-whats-new-in-0.2.4.md",source:"@site/blog/2021-10-01-whats-new-in-0.2.4.md",title:"SeaORM 0.2.4 \u65b0\u7279\u6027",description:"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u5730\u53d1\u5e03 SeaORM 0.2.4\uff01\u4ee5\u4e0b\u662f\u4e00\u4e9b\u529f\u80fd\u4eae\u70b9\uff1a",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:2.085,hasTruncateMarker:!1,authors:[{name:"SeaQL \u56e2\u961f",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2021-10-01-whats-new-in-0.2.4",title:"SeaORM 0.2.4 \u65b0\u7279\u6027",author:"SeaQL \u56e2\u961f",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"SeaORM 0.3.0 \u65b0\u7279\u6027",permalink:"/blog/2021-10-15-whats-new-in-0.3.0"},nextItem:{title:"\u4ecb\u7ecd SeaORM \ud83d\udc1a",permalink:"/blog/2021-09-20-introducing-sea-orm"}},i={authorsImageUrls:[void 0]},u=[{value:"\u81ea\u5b9a\u4e49\u9009\u62e9\u5217\u8868\u7684\u66f4\u597d\u4f53\u9a8c",id:"\u81ea\u5b9a\u4e49\u9009\u62e9\u5217\u8868\u7684\u66f4\u597d\u4f53\u9a8c",level:2},{value:"\u91cd\u547d\u540d\u5217\u540d\u548c\u5217\u679a\u4e3e\u53d8\u4f53",id:"\u91cd\u547d\u540d\u5217\u540d\u548c\u5217\u679a\u4e3e\u53d8\u4f53",level:2},{value:"\u6761\u4ef6\u6811\u4e2d\u7684 <code>not</code>",id:"\u6761\u4ef6\u6811\u4e2d\u7684-not",level:2},{value:"\u793e\u533a",id:"\u793e\u533a",level:2}],c={toc:u},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u5730\u53d1\u5e03 SeaORM ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.2.4"},(0,r.yg)("inlineCode",{parentName:"a"},"0.2.4")),"\uff01\u4ee5\u4e0b\u662f\u4e00\u4e9b\u529f\u80fd\u4eae\u70b9\uff1a"),(0,r.yg)("h2",{id:"\u81ea\u5b9a\u4e49\u9009\u62e9\u5217\u8868\u7684\u66f4\u597d\u4f53\u9a8c"},"\u81ea\u5b9a\u4e49\u9009\u62e9\u5217\u8868\u7684\u66f4\u597d\u4f53\u9a8c"),(0,r.yg)("p",null,"[",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/208"},"#208"),"] \u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.2.4/sea_orm/entity/prelude/struct.Select.html#method.into_values"},"Select::into_values")," \u5feb\u901f\u9009\u62e9\u81ea\u5b9a\u4e49\u5217\u5217\u8868\u5e76\u89e3\u6784\u4e3a\u5143\u7ec4\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\nenum QueryAs {\n    CakeName, // \u86cb\u7cd5\u540d\u79f0\n    NumOfCakes, // \u86cb\u7cd5\u6570\u91cf\n}\n\nlet res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column_as(cake::Column::Name, QueryAs::CakeName)\n    .column_as(cake::Column::Id.count(), QueryAs::NumOfCakes)\n    .group_by(cake::Column::Name)\n    .into_values::<_, QueryAs>()\n    .all(&db)\n    .await?;\n\nassert_eq!(\n    res,\n    vec![("Chocolate Forest".to_owned(), 2i64)]\n);\n')),(0,r.yg)("p",null,"\u8d21\u732e\u8005\uff1a"),(0,r.yg)("div",{class:"col col--3 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/MuhannadAlrusayni"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/14802524?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Muhannad")))),(0,r.yg)("h2",{id:"\u91cd\u547d\u540d\u5217\u540d\u548c\u5217\u679a\u4e3e\u53d8\u4f53"},"\u91cd\u547d\u540d\u5217\u540d\u548c\u5217\u679a\u4e3e\u53d8\u4f53"),(0,r.yg)("p",null,"[",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/209"},"#209"),"] \u91cd\u547d\u540d\u6a21\u578b\u5c5e\u6027\u7684\u5217\u540d\u548c\u679a\u4e3e\u53d8\u4f53\uff0c\u7279\u522b\u662f\u5728\u5217\u540d\u662f Rust \u5173\u952e\u5b57\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'mod my_entity {\n    use sea_orm::entity::prelude::*;\n\n    #[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n    #[sea_orm(table_name = "my_entity")]\n    pub struct Model {\n        #[sea_orm(primary_key, enum_name = "IdentityColumn", column_name = "id")]\n        pub id: i32, // \u4e3b\u952e ID\n        #[sea_orm(column_name = "type")]\n        pub type_: String, // \u7c7b\u578b\n    }\n\n    //...\n}\n\nassert_eq!(my_entity::Column::IdentityColumn.to_string().as_str(), "id");\nassert_eq!(my_entity::Column::Type.to_string().as_str(), "type");\n')),(0,r.yg)("p",null,"\u8d21\u732e\u8005\uff1a"),(0,r.yg)("div",{class:"container"},(0,r.yg)("div",{class:"row"},(0,r.yg)("div",{class:"col col--3 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Billy Chan")))))),(0,r.yg)("h2",{id:"\u6761\u4ef6\u6811\u4e2d\u7684-not"},"\u6761\u4ef6\u6811\u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"h2"},"not")),(0,r.yg)("p",null,"[",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/145"},"#145"),"] \u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/0.16.5/sea_query/query/struct.Condition.html"},"Condition")," \u6784\u5efa\u590d\u6742\u7684\u6761\u4ef6\u6811\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, sea_query::Expr, DbBackend};\n\nassert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::all()\n                .add(\n                    Condition::all()\n                        .not()\n                        .add(Expr::val(1).eq(1))\n                        .add(Expr::val(2).eq(2))\n                )\n                .add(\n                    Condition::any()\n                        .add(Expr::val(3).eq(3))\n                        .add(Expr::val(4).eq(4))\n                )\n        )\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE (NOT (1 = 1 AND 2 = 2)) AND (3 = 3 OR 4 = 4)"#\n);\n')),(0,r.yg)("p",null,"\u8d21\u732e\u8005\uff1a"),(0,r.yg)("div",{class:"container"},(0,r.yg)("div",{class:"row"},(0,r.yg)("div",{class:"col col--3 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nitnelave"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/796633?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"nitnelave")))),(0,r.yg)("div",{class:"col col--3 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/6xzo"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/36180574?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"6xzo")))))),(0,r.yg)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,r.yg)("p",null,"SeaQL \u662f\u4e00\u4e2a\u793e\u533a\u9a71\u52a8\u7684\u9879\u76ee\u3002\u6211\u4eec\u6b22\u8fce\u60a8\u53c2\u4e0e\u3001\u8d21\u732e\uff0c\u5171\u540c\u4e3a Rust \u7684\u672a\u6765\u6784\u5efa\u3002"),(0,r.yg)("p",null,"\u8fd9\u662f SeaORM ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/3"},(0,r.yg)("inlineCode",{parentName:"a"},"0.3.x"))," \u7684\u8def\u7ebf\u56fe\u3002"))}g.isMDXComponent=!0}}]);