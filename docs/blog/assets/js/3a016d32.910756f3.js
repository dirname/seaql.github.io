"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[4063],{5680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>y});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),m=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=m(e.components);return r.createElement(s.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=m(t),c=n,y=g["".concat(s,".").concat(c)]||g[c]||u[c]||l;return t?r.createElement(y,i(i({ref:a},p),{},{components:t})):r.createElement(y,i({ref:a},p))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6463:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=t(8168),n=(t(6540),t(5680));const l={slug:"2023-02-08-whats-new-in-seaorm-0.11.0",title:"SeaORM 0.11.0 \u7684\u65b0\u529f\u80fd",author:"SeaQL \u56e2\u961f",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,o={permalink:"/blog/2023-02-08-whats-new-in-seaorm-0.11.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2023-02-08-whats-new-in-seaorm-0.11.0.md",source:"@site/blog/2023-02-08-whats-new-in-seaorm-0.11.0.md",title:"SeaORM 0.11.0 \u7684\u65b0\u529f\u80fd",description:"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u53d1\u5e03 SeaORM 0.11.0!",date:"2023-02-08T00:00:00.000Z",formattedDate:"February 8, 2023",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:11.31,hasTruncateMarker:!1,authors:[{name:"SeaQL \u56e2\u961f",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2023-02-08-whats-new-in-seaorm-0.11.0",title:"SeaORM 0.11.0 \u7684\u65b0\u529f\u80fd",author:"SeaQL \u56e2\u961f",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"\u4ecb\u7ecd SeaStreamer \ud83c\udf0a",permalink:"/blog/2023-04-03-intro-sea-streamer"},nextItem:{title:"SeaORM FAQ.02",permalink:"/blog/2023-02-05-faq-02"}},s={authorsImageUrls:[void 0]},m=[{value:"\u6570\u636e\u52a0\u8f7d\u5668",id:"\u6570\u636e\u52a0\u8f7d\u5668",level:2},{value:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u548c\u8bbf\u95ee\u6a21\u5f0f",id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u548c\u8bbf\u95ee\u6a21\u5f0f",level:2},{value:"\u5728\u9009\u62e9\u548c\u4fdd\u5b58\u65f6\u8f6c\u6362\u5217\u7c7b\u578b",id:"\u5728\u9009\u62e9\u548c\u4fdd\u5b58\u65f6\u8f6c\u6362\u5217\u7c7b\u578b",level:2},{value:"\u5bf9 <code>ActiveModelBehavior</code> \u7684\u66f4\u6539",id:"\u5bf9-activemodelbehavior-\u7684\u66f4\u6539",level:2},{value:"\u6267\u884c\u672a\u51c6\u5907\u7684 SQL \u8bed\u53e5",id:"\u6267\u884c\u672a\u51c6\u5907\u7684-sql-\u8bed\u53e5",level:2},{value:"\u9009\u62e9\u5230\u5143\u7ec4",id:"\u9009\u62e9\u5230\u5143\u7ec4",level:2},{value:"\u539f\u5b50\u8fc1\u79fb",id:"\u539f\u5b50\u8fc1\u79fb",level:2},{value:"\u7c7b\u578b\u652f\u6301",id:"\u7c7b\u578b\u652f\u6301",level:2},{value:"\u53ef\u9009\u62e9\u7684\u4e0d\u7a33\u5b9a\u5185\u90e8 API",id:"\u53ef\u9009\u62e9\u7684\u4e0d\u7a33\u5b9a\u5185\u90e8-api",level:2},{value:"\u7834\u574f\u6027\u66f4\u6539",id:"\u7834\u574f\u6027\u66f4\u6539",level:2},{value:"SeaORM \u589e\u5f3a",id:"seaorm-\u589e\u5f3a",level:2},{value:"CLI \u589e\u5f3a",id:"cli-\u589e\u5f3a",level:2},{value:"\u96c6\u6210\u793a\u4f8b",id:"\u96c6\u6210\u793a\u4f8b",level:2},{value:"\u8d5e\u52a9\u5546",id:"\u8d5e\u52a9\u5546",level:2},{value:"\u4e0b\u4e00\u6b65\uff1f",id:"\u4e0b\u4e00\u6b65",level:2}],p={toc:m},g="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u53d1\u5e03 SeaORM ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.11.0"},(0,n.yg)("inlineCode",{parentName:"a"},"0.11.0")),"!"),(0,n.yg)("h2",{id:"\u6570\u636e\u52a0\u8f7d\u5668"},"\u6570\u636e\u52a0\u8f7d\u5668"),(0,n.yg)("p",null,"[[#1443](https://github.com/SeaQL/sea-orm/pull/1443), [#1238](https://github.com/SeaQL/sea-orm/pull/1238)][LoaderTrait]","(",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html"},"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html"),") \u63d0\u4f9b\u4e86\u4e00\u4e2a API\uff0c\u7528\u4e8e\u6279\u91cf\u52a0\u8f7d\u76f8\u5173\u5b9e\u4f53\u3002"),(0,n.yg)("p",null,"\u8003\u8651\u8fd9\u79cd\u4e00\u5bf9\u591a\u5173\u7cfb\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;\n")),(0,n.yg)("p",null,"\u751f\u6210\u7684 SQL \u4e3a\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT\n    "cake"."id" AS "A_id",\n    "cake"."name" AS "A_name",\n    "fruit"."id" AS "B_id",\n    "fruit"."name" AS "B_name",\n    "fruit"."cake_id" AS "B_cake_id"\nFROM "cake"\nLEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id"\nORDER BY "cake"."id" ASC\n')),(0,n.yg)("p",null,"1 \u7aef\uff08\u86cb\u7cd5\uff09\u7684\u6570\u636e\u5c06\u4f1a\u91cd\u590d\u3002\u5982\u679c N \u7684\u503c\u5f88\u5927\uff0c\u8fd9\u5c06\u5bfc\u81f4\u66f4\u591a\u7684\u6570\u636e\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u3002\u4f7f\u7528 Loader \u5c06\u786e\u4fdd\u6bcf\u4e2a\u6a21\u578b\u4ec5\u4f20\u8f93\u4e00\u6b21\u3002"),(0,n.yg)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u52a0\u8f7d\u4e0e\u4e0a\u9762\u76f8\u540c\u7684\u6570\u636e\uff0c\u4f46\u4f7f\u7528\u4e86\u4e24\u4e2a\u67e5\u8be2\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\n\nfor (cake, fruits) in cakes.into_iter().zip(fruits.into_iter()) { .. }\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT "cake"."id", "cake"."name" FROM "cake"\nSELECT "fruit"."id", "fruit"."name", "fruit"."cake_id" FROM "fruit" WHERE "fruit"."cake_id" IN (..)\n')),(0,n.yg)("p",null,"\u60a8\u751a\u81f3\u53ef\u4ee5\u5728\u76f8\u5173\u5b9e\u4f53\u4e0a\u5e94\u7528\u8fc7\u6ee4\u5668\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let fruits_in_stock: Vec<Vec<fruit::Model>> = cakes.load_many(\n    fruit::Entity::find().filter(fruit::Column::Stock.gt(0i32)),\n    db\n).await?;\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT "fruit"."id", "fruit"."name", "fruit"."cake_id" FROM "fruit"\nWHERE "fruit"."stock" > 0 AND "fruit"."cake_id" IN (..)\n')),(0,n.yg)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/relation/data-loader/"},"\u5173\u7cfb\u6587\u6863"),"\u3002"),(0,n.yg)("h2",{id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u548c\u8bbf\u95ee\u6a21\u5f0f"},"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u548c\u8bbf\u95ee\u6a21\u5f0f"),(0,n.yg)("p",null,"[[#1230](https://github.com/SeaQL/sea-orm/pull/1230)][`transaction_with_config`]","(",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.transaction_with_config"},"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.transaction_with_config"),") \u548c ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.begin_with_config"},(0,n.yg)("inlineCode",{parentName:"a"},"begin_with_config"))," \u5141\u8bb8\u60a8\u6307\u5b9a ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.IsolationLevel.html"},"IsolationLevel")," \u548c ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.AccessMode.html"},"AccessMode"),"\u3002"),(0,n.yg)("p",null,"\u76ee\u524d\uff0c\u5b83\u4eec\u4ec5\u5728 MySQL \u548c Postgres \u4e2d\u5b9e\u73b0\u3002\u4e3a\u4e86\u5bf9\u9f50\u5b83\u4eec\u7684\u8bed\u4e49\u5dee\u5f02\uff0cMySQL \u4f1a\u5728\u5f00\u59cb\u4e8b\u52a1\u4e4b\u524d\u6267\u884c ",(0,n.yg)("inlineCode",{parentName:"p"},"SET TRANSACTION")," \u547d\u4ee4\uff0c\u800c Postgres \u5219\u5728\u5f00\u59cb\u4e8b\u52a1\u4e4b\u540e\u6267\u884c ",(0,n.yg)("inlineCode",{parentName:"p"},"SET TRANSACTION")," \u547d\u4ee4\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"db.transaction_with_config::<_, _, DbErr>(\n    |txn| { ... },\n    Some(IsolationLevel::ReadCommitted),\n    Some(AccessMode::ReadOnly),\n)\n.await?;\n\nlet transaction = db\n    .begin_with_config(IsolationLevel::ReadCommitted, AccessMode::ReadOnly)\n    .await?;\n")),(0,n.yg)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/advanced-query/transaction/"},"\u4e8b\u52a1\u6587\u6863"),"\u3002"),(0,n.yg)("h2",{id:"\u5728\u9009\u62e9\u548c\u4fdd\u5b58\u65f6\u8f6c\u6362\u5217\u7c7b\u578b"},"\u5728\u9009\u62e9\u548c\u4fdd\u5b58\u65f6\u8f6c\u6362\u5217\u7c7b\u578b"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1304"},"#1304"),"] \u5982\u679c\u60a8\u9700\u8981\u9009\u62e9\u4e00\u4e2a\u5217\u4e3a\u4e00\u79cd\u7c7b\u578b\uff0c\u4f46\u5c06\u5176\u4fdd\u5b58\u4e3a\u53e6\u4e00\u79cd\u7c7b\u578b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,n.yg)("inlineCode",{parentName:"p"},"select_as")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"save_as")," \u5c5e\u6027\u6765\u5b8c\u6210\u8f6c\u6362\u3002\u4e00\u4e2a\u5178\u578b\u7684\u7528\u4f8b\u662f\u9009\u62e9 ",(0,n.yg)("inlineCode",{parentName:"p"},"citext"),"\uff08\u533a\u5206\u5927\u5c0f\u5199\u7684\u6587\u672c\uff09\u7c7b\u578b\u7684\u5217\u4f5c\u4e3a Rust \u4e2d\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"String"),"\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"citext"),"\u3002\u60a8\u5e94\u5982\u4e0b\u5b9a\u4e49\u6a21\u578b\u5b57\u6bb5\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "ci_table")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    #[sea_orm(select_as = "text", save_as = "citext")]\n    pub case_insensitive_text: String\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,n.yg)("h2",{id:"\u5bf9-activemodelbehavior-\u7684\u66f4\u6539"},"\u5bf9 ",(0,n.yg)("inlineCode",{parentName:"h2"},"ActiveModelBehavior")," \u7684\u66f4\u6539"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1328"},"#1328"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1145"},"#1145"),"] ",(0,n.yg)("inlineCode",{parentName:"p"},"ActiveModelBehavior")," \u7684\u65b9\u6cd5\u73b0\u5728\u6709\u4e00\u4e2a ",(0,n.yg)("inlineCode",{parentName:"p"},"Connection")," \u4f5c\u4e3a\u989d\u5916\u53c2\u6570\u3002\u8fd9\u4f7f\u60a8\u80fd\u591f\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u4f8b\u5982\uff0c\u8bb0\u5f55\u5bf9\u73b0\u6709\u6a21\u578b\u6240\u505a\u7684\u66f4\u6539\u6216\u5728\u63d2\u5165\u4e4b\u524d\u9a8c\u8bc1\u6570\u636e\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'#[async_trait]\nimpl ActiveModelBehavior for ActiveModel {\n    /// \u521b\u5efa\u4e00\u4e2a\u5177\u6709\u9ed8\u8ba4\u503c\u7684\u65b0 ActiveModel\uff0c\u4e5f\u7528\u4e8e `Default::default()`\u3002\n    fn new() -> Self {\n        Self {\n            uuid: Set(Uuid::new_v4()),\n            ..ActiveModelTrait::default()\n        }\n    }\n\n    /// \u5c06\u5728\u63d2\u5165/\u66f4\u65b0\u4e4b\u524d\u89e6\u53d1\n    async fn before_save<C>(self, db: &C, insert: bool) -> Result<Self, DbErr>\n    where\n        C: ConnectionTrait,\n    {\n        // \u8bb0\u5f55\u53d8\u66f4\n        edit_log::ActiveModel {\n            action: Set("before_save".into()),\n            values: Set(serde_json::json!(model)),\n            ..Default::default()\n        }\n        .insert(db)\n        .await?;\n\n        Ok(self)\n    }\n}\n')),(0,n.yg)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/generate-entity/entity-structure/#active-model-behavior"},"\u5b9e\u4f53\u6587\u6863"),"\u3002"),(0,n.yg)("h2",{id:"\u6267\u884c\u672a\u51c6\u5907\u7684-sql-\u8bed\u53e5"},"\u6267\u884c\u672a\u51c6\u5907\u7684 SQL \u8bed\u53e5"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1327"},"#1327"),"] \u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.ConnectionTrait.html#tymethod.execute_unprepared"},(0,n.yg)("inlineCode",{parentName:"a"},"ConnectionTrait::execute_unprepared"))," \u6267\u884c\u672a\u51c6\u5907\u7684 SQL \u8bed\u53e5\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'// \u5982\u679c SQL \u8bed\u53e5\u6ca1\u6709\u503c\u7ed1\u5b9a\uff0c\u5219\u4f7f\u7528 `execute_unprepared`\ndb.execute_unprepared(\n    "CREATE TABLE `cake` (\n        `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,\n        `name` varchar(255) NOT NULL\n    )"\n)\n.await?;\n\n// \u5982\u679c SQL \u5305\u542b\u503c\u7ed1\u5b9a\uff0c\u5219\u6784\u9020 `Statement`\nlet stmt = Statement::from_sql_and_values(\n    manager.get_database_backend(),\n    r#"INSERT INTO `cake` (`name`) VALUES (?)"#,\n    ["Cheese Cake".into()]\n);\ndb.execute(stmt).await?;\n')),(0,n.yg)("h2",{id:"\u9009\u62e9\u5230\u5143\u7ec4"},"\u9009\u62e9\u5230\u5143\u7ec4"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1311"},"#1311"),"] \u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.Selector.html#method.into_tuple"},(0,n.yg)("inlineCode",{parentName:"a"},"into_tuple"))," \u65b9\u6cd5\u9009\u62e9\u5143\u7ec4\uff08\u6216\u5355\u4e2a\u503c\uff09\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column(cake::Column::Name)\n    .column(cake::Column::Id.count())\n    .group_by(cake::Column::Name)\n    .into_tuple()\n    .all(&db)\n    .await?;\n")),(0,n.yg)("h2",{id:"\u539f\u5b50\u8fc1\u79fb"},"\u539f\u5b50\u8fc1\u79fb"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1379"},"#1379"),"] \u8fc1\u79fb\u5c06\u5728 Postgres \u4e2d\u539f\u5b50\u6267\u884c\uff0c\u8fd9\u610f\u5473\u7740\u8fc1\u79fb\u811a\u672c\u5c06\u5728\u4e8b\u52a1\u4e2d\u6267\u884c\u3002\u5982\u679c\u8fc1\u79fb\u5931\u8d25\uff0c\u5bf9\u6570\u636e\u5e93\u6240\u505a\u7684\u66f4\u6539\u5c06\u56de\u6eda\u3002\u7136\u800c\uff0cMySQL \u548c SQLite \u4e0d\u652f\u6301\u539f\u5b50\u8fc1\u79fb\u3002"),(0,n.yg)("p",null,"\u60a8\u53ef\u4ee5\u5728\u6bcf\u4e2a\u8fc1\u79fb\u5185\u542f\u52a8\u4e00\u4e2a\u4e8b\u52a1\uff0c\u4ee5\u6267\u884c\u8bf8\u5982\u4e3a\u65b0\u521b\u5efa\u7684\u8868 ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/migration/seeding-data/#seeding-data-transactionally"},"\u586b\u5145\u793a\u4f8b\u6570\u636e")," \u7684\u64cd\u4f5c\u3002"),(0,n.yg)("h2",{id:"\u7c7b\u578b\u652f\u6301"},"\u7c7b\u578b\u652f\u6301"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1325"},"#1325"),"] \u652f\u6301 ",(0,n.yg)("inlineCode",{parentName:"li"},"uuid::fmt")," \u6a21\u5757\u4e2d\u53ef\u7528\u7684\u5404\u79cd UUID \u683c\u5f0f")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "uuid_fmt")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub uuid: Uuid,\n    pub uuid_braced: uuid::fmt::Braced,\n    pub uuid_hyphenated: uuid::fmt::Hyphenated,\n    pub uuid_simple: uuid::fmt::Simple,\n    pub uuid_urn: uuid::fmt::Urn,\n}\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1210"},"#1210"),"] \u5bf9 Postgres \u7684\u679a\u4e3e\u5411\u91cf\u652f\u6301")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "enum_vec")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub teas: Vec<Tea>,\n    pub teas_opt: Option<Vec<Tea>>,\n}\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1414"},"#1414"),"] \u652f\u6301\u5c06 ",(0,n.yg)("inlineCode",{parentName:"li"},"ActiveEnum")," \u5b57\u6bb5\u7528\u4f5c\u4e3b\u952e")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "enum_primary_key")]\npub struct Model {\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub id: Tea,\n    pub category: Option<Category>,\n    pub color: Option<Color>,\n}\n')),(0,n.yg)("h2",{id:"\u53ef\u9009\u62e9\u7684\u4e0d\u7a33\u5b9a\u5185\u90e8-api"},"\u53ef\u9009\u62e9\u7684\u4e0d\u7a33\u5b9a\u5185\u90e8 API"),(0,n.yg)("p",null,"\u901a\u8fc7\u542f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"sea-orm-internal")," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4e0d\u7a33\u5b9a\u7684\u5185\u90e8 API\uff0c\u5305\u62ec\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-orm/*/sea_orm/enum.DatabaseConnection.html#impl-DatabaseConnection-2"},(0,n.yg)("inlineCode",{parentName:"a"},"get_*_connection_pool"))," \u65b9\u6cd5\u8bbf\u95ee SQLx \u7684\u5185\u90e8\u8fde\u63a5\u6c60"),(0,n.yg)("li",{parentName:"ul"},"\u91cd\u65b0\u5bfc\u51fa ",(0,n.yg)("a",{parentName:"li",href:"https://docs.rs/sea-orm/*/sea_orm/error/index.html"},"SQLx \u9519\u8bef\u7c7b\u578b"),"\uff1a",(0,n.yg)("inlineCode",{parentName:"li"},"SqlxError"),"\u3001",(0,n.yg)("inlineCode",{parentName:"li"},"SqlxMySqlError"),"\u3001",(0,n.yg)("inlineCode",{parentName:"li"},"SqlxPostgresError")," \u548c ",(0,n.yg)("inlineCode",{parentName:"li"},"SqlxSqliteError"))),(0,n.yg)("h2",{id:"\u7834\u574f\u6027\u66f4\u6539"},"\u7834\u574f\u6027\u66f4\u6539"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1366"},"#1366"),"] ",(0,n.yg)("inlineCode",{parentName:"p"},"sea-query")," \u5df2\u5347\u7ea7\u5230 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/releases/tag/0.28.0"},(0,n.yg)("inlineCode",{parentName:"a"},"0.28.x")),"\uff0c\u8fd9\u5e26\u6765\u4e86\u4e00\u4e9b\u6539\u8fdb\u548c\u7834\u574f\u6027\u66f4\u6539\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u53d1\u5e03\u8bf4\u660e")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1420"},"#1420"),"] sea-orm-cli\uff1a",(0,n.yg)("inlineCode",{parentName:"p"},"generate entity")," \u547d\u4ee4\u9ed8\u8ba4\u542f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"--universal-time")," \u6807\u5fd7")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1425"},"#1425"),"] \u5411 ",(0,n.yg)("inlineCode",{parentName:"p"},"DbErr")," \u6dfb\u52a0 ",(0,n.yg)("inlineCode",{parentName:"p"},"RecordNotInserted")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"RecordNotUpdated"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1327"},"#1327"),"] \u6dfb\u52a0\u4e86 ",(0,n.yg)("inlineCode",{parentName:"p"},"ConnectionTrait::execute_unprepared")," \u65b9\u6cd5")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1311"},"#1311"),"] ",(0,n.yg)("inlineCode",{parentName:"p"},"TryGetable")," \u7684\u8981\u6c42\u65b9\u6cd5\u5df2\u66f4\u6539\uff1a"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"// \u7136\u540e\nfn try_get(res: &QueryResult, pre: &str, col: &str) -> Result<Self, TryGetError>;\n// \u73b0\u5728; ColIdx \u53ef\u4ee5\u662f `&str` \u6216 `usize`\nfn try_get_by<I: ColIdx>(res: &QueryResult, index: I) -> Result<Self, TryGetError>;\n")),(0,n.yg)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u81ea\u5df1\u5b9e\u73b0\u4e86\u5b83\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-diff"},"impl TryGetable for XXX {\n-   fn try_get(res: &QueryResult, pre: &str, col: &str) -> Result<Self, TryGetError> {\n+   fn try_get_by<I: sea_orm::ColIdx>(res: &QueryResult, idx: I) -> Result<Self, TryGetError> {\n-       let value: YYY = res.try_get(pre, col).map_err(TryGetError::DbErr)?;\n+       let value: YYY = res.try_get_by(idx).map_err(TryGetError::DbErr)?;\n        ..\n    }\n}\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1328"},"#1328"),"] ",(0,n.yg)("inlineCode",{parentName:"li"},"ActiveModelBehavior")," \u7279\u6027\u53d8\u4e3a\u5f02\u6b65\u7279\u6027\u3002\n\u5982\u679c\u60a8\u91cd\u5199\u4e86\u9ed8\u8ba4 ",(0,n.yg)("inlineCode",{parentName:"li"},"ActiveModelBehavior")," \u7684\u5b9e\u73b0\uff1a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"#[async_trait::async_trait]\nimpl ActiveModelBehavior for ActiveModel {\n    async fn before_save<C>(self, db: &C, insert: bool) -> Result<Self, DbErr>\n    where\n        C: ConnectionTrait,\n    {\n        // ...\n    }\n\n    // ...\n}\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1425"},"#1425"),"] ",(0,n.yg)("inlineCode",{parentName:"li"},'DbErr::RecordNotFound("\u6ca1\u6709\u5f71\u54cd\u6570\u636e\u5e93\u884c")')," \u88ab\u79fb\u81f3\u4e13\u7528\u9519\u8bef\u53d8\u4f53 ",(0,n.yg)("inlineCode",{parentName:"li"},"DbErr::RecordNotUpdated"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'let res = Update::one(cake::ActiveModel {\n        name: Set("Cheese Cake".to_owned()),\n        ..model.into_active_model()\n    })\n    .exec(&db)\n    .await;\n\n// \u7136\u540e\nassert_eq!(\n    res,\n    Err(DbErr::RecordNotFound(\n        "\u6ca1\u6709\u5f71\u54cd\u6570\u636e\u5e93\u884c".to_owned()\n    ))\n);\n\n// \u73b0\u5728\nassert_eq!(res, Err(DbErr::RecordNotUpdated));\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1395"},"#1395"),"] ",(0,n.yg)("inlineCode",{parentName:"li"},"sea_orm::ColumnType")," \u88ab\u66ff\u6362\u4e3a ",(0,n.yg)("inlineCode",{parentName:"li"},"sea_query::ColumnType"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u65b9\u6cd5 ",(0,n.yg)("inlineCode",{parentName:"li"},"ColumnType::def")," \u88ab\u79fb\u52a8\u5230 ",(0,n.yg)("inlineCode",{parentName:"li"},"ColumnTypeTrait")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"ColumnType::Binary")," \u6210\u4e3a\u4e00\u4e2a\u5143\u7ec4\u53d8\u4f53\uff0c\u63a5\u53d7\u989d\u5916\u9009\u9879 ",(0,n.yg)("inlineCode",{parentName:"li"},"sea_query::BlobSize")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"ColumnType::Custom")," \u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"li"},"sea_query::DynIden")," \u800c\u4e0d\u662f ",(0,n.yg)("inlineCode",{parentName:"li"},"String"),"\uff0c\u5e76\u56e0\u6b64\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u65b9\u6cd5 ",(0,n.yg)("inlineCode",{parentName:"li"},"custom"),"\uff08\u6ce8\u610f\u5c0f\u5199\uff09")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-diff"},'// \u7cbe\u7b80\u5b9e\u4f53\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "fruit")]\npub struct Model {\n-   #[sea_orm(column_type = r#"Custom("citext".to_owned())"#)]\n+   #[sea_orm(column_type = r#"custom("citext")"#)]\n    pub column: String,\n}\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-diff"},'// \u6269\u5c55\u5b9e\u4f53\nimpl ColumnTrait for Column {\n    type EntityName = Entity;\n\n    fn def(&self) -> ColumnDef {\n        match self {\n-           Self::Column => ColumnType::Custom("citext".to_owned()).def(),\n+           Self::Column => ColumnType::custom("citext").def(),\n        }\n    }\n}\n')),(0,n.yg)("h2",{id:"seaorm-\u589e\u5f3a"},"SeaORM \u589e\u5f3a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1256"},"#1256"),"] \u91cd\u6784 schema \u6a21\u5757\u4ee5\u516c\u5f00\u6570\u636e\u5e93\u4fee\u6539\u529f\u80fd"),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1346"},"#1346"),"] \u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"li"},'#[sea_orm(column_type = "JsonBinary")]')," \u5b8f\u5c5e\u6027\u751f\u6210\u7d27\u51d1\u5b9e\u4f53"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"MockDatabase::append_exec_results()"),"\u3001",(0,n.yg)("inlineCode",{parentName:"li"},"MockDatabase::append_query_results()"),"\u3001",(0,n.yg)("inlineCode",{parentName:"li"},"MockDatabase::append_exec_errors()")," \u548c ",(0,n.yg)("inlineCode",{parentName:"li"},"MockDatabase::append_query_errors()")," [",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1367"},"#1367"),"] \u63a5\u53d7\u4efb\u4f55\u5b9e\u73b0\u4e86 ",(0,n.yg)("inlineCode",{parentName:"li"},"IntoIterator")," \u7279\u6027\u7684\u7c7b\u578b"),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1362"},"#1362"),"] ",(0,n.yg)("inlineCode",{parentName:"li"},"find_by_id")," \u548c ",(0,n.yg)("inlineCode",{parentName:"li"},"delete_by_id")," \u63a5\u53d7\u4efb\u4f55 ",(0,n.yg)("inlineCode",{parentName:"li"},"Into")," \u4e3b\u952e\u503c"),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1410"},"#1410"),"] ",(0,n.yg)("inlineCode",{parentName:"li"},"QuerySelect::offset")," \u548c ",(0,n.yg)("inlineCode",{parentName:"li"},"QuerySelect::limit")," \u63a5\u53d7 ",(0,n.yg)("inlineCode",{parentName:"li"},"Into<Option<u64>>"),"\uff0c\u5176\u4e2d ",(0,n.yg)("inlineCode",{parentName:"li"},"None")," \u5c06\u91cd\u7f6e\u5b83\u4eec"),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1236"},"#1236"),"] \u6dfb\u52a0\u4e86 ",(0,n.yg)("inlineCode",{parentName:"li"},"DatabaseConnection::close")),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1381"},"#1381"),"] \u4e3a ",(0,n.yg)("inlineCode",{parentName:"li"},"ColumnDef")," \u6dfb\u52a0\u4e86 ",(0,n.yg)("inlineCode",{parentName:"li"},"is_null")," getter"),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1177"},"#1177"),"] \u6dfb\u52a0\u4e86 ",(0,n.yg)("inlineCode",{parentName:"li"},"ActiveValue::reset")," \u7528\u4e8e\u5c06 ",(0,n.yg)("inlineCode",{parentName:"li"},"Unchanged")," \u8f6c\u6362\u4e3a ",(0,n.yg)("inlineCode",{parentName:"li"},"Set")),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1415"},"#1415"),"] \u6dfb\u52a0\u4e86 ",(0,n.yg)("inlineCode",{parentName:"li"},"QueryTrait::apply_if")," \u53ef\u9009\u62e9\u5730\u5e94\u7528\u8fc7\u6ee4\u5668"),(0,n.yg)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e86 ",(0,n.yg)("inlineCode",{parentName:"li"},"sea-orm-internal")," \u529f\u80fd\u6807\u5fd7\u4ee5\u516c\u5f00\u67d0\u4e9b SQLx \u7c7b\u578b",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1297"},"#1297"),"] \u6dfb\u52a0\u4e86 ",(0,n.yg)("inlineCode",{parentName:"li"},"DatabaseConnection::get_*_connection_pool()")," \u7528\u4e8e\u8bbf\u95ee\u5185\u90e8 SQLx \u8fde\u63a5\u6c60"),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1434"},"#1434"),"] \u91cd\u65b0\u5bfc\u51fa SQLx \u9519\u8bef")))),(0,n.yg)("h2",{id:"cli-\u589e\u5f3a"},"CLI \u589e\u5f3a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/846"},"#846"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1186"},"#1186"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1318"},"#1318"),"] \u4e3a\u4e3b\u952e\u5217\u751f\u6210 ",(0,n.yg)("inlineCode",{parentName:"li"},"#[serde(skip_deserializing)]")),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1171"},"#1171"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1320"},"#1320"),"] \u4e3a\u9690\u85cf\u5217\u751f\u6210 ",(0,n.yg)("inlineCode",{parentName:"li"},"#[serde(skip)]")),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1124"},"#1124"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1321"},"#1321"),"] \u4e3a\u6a21\u578b\u7ed3\u6784\u751f\u6210\u989d\u5916\u7684\u6d3e\u751f\u548c\u5c5e\u6027")),(0,n.yg)("h2",{id:"\u96c6\u6210\u793a\u4f8b"},"\u96c6\u6210\u793a\u4f8b"),(0,n.yg)("p",null,"SeaORM \u4e0e\u5f02\u6b65\u751f\u6001\u7cfb\u7edf\u4e2d\u7684\u5176\u4ed6 crate \u534f\u8c03\u826f\u597d\u3002\u6211\u4eec\u7ef4\u62a4\u4e86\u4e00\u7cfb\u5217\u793a\u4f8b\u9879\u76ee\uff0c\u7528\u4e8e\u6784\u5efa REST\u3001GraphQL \u548c gRPC \u670d\u52a1\u3002\u66f4\u591a\u793a\u4f8b ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/issues/269"},"\u6b22\u8fce"),"!"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix v4 \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/salvo_example"},"Salvo \u793a\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic \u793a\u4f8b"))),(0,n.yg)("h2",{id:"\u8d5e\u52a9\u5546"},"\u8d5e\u52a9\u5546"),(0,n.yg)("p",null,"\u6211\u4eec\u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," \u8d44\u6599\u5df2\u4e0a\u7ebf\uff01SeaQL.org \u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5f00\u6e90\u7ec4\u7ec7\uff0c\u7531\u70ed\u60c5\u7684\u5f00\u53d1\u8005\u8fd0\u8425\u3002\u5982\u679c\u60a8\u559c\u6b22\u4f7f\u7528 SeaORM\uff0c\u8bf7\u4e3a\u6211\u4eec\u7684\u5e93\u70b9\u8d5e\u5e76\u5206\u4eab\u3002\u5982\u679c\u60a8\u613f\u610f\uff0c\u5c11\u91cf\u6350\u6b3e\u5c06\u4e0d\u80dc\u611f\u6fc0\uff0c\u5e76\u5927\u5927\u6709\u52a9\u4e8e\u652f\u6301\u8be5\u9879\u76ee\u3002"),(0,n.yg)("p",null,"\u7279\u522b\u611f\u8c22\u6211\u4eec\u7684\u8d5e\u52a9\u5546 \ud83d\ude07\uff1a"),(0,n.yg)("div",{class:"row"},(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tugascript"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/64930104?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Afonso Barracha")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/deansheather"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/11241812?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Dean Sheather")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Shane Sveller")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/DominoTree"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/5438118?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Nick Price")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/rgoracz"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/6758092?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Roland Gor\xe1cz")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/hgiesel"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/7188844?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Henrik Giesel")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/trueb2"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/8592049?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Jacob Trueb")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/siketyan"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/12772118?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Naoki Ikeguchi")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/manfredcml"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/27536502?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Manfred Lee")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/marcusbuffett"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/1834328?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Marcus Buffett")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/efrain2007"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/65697999?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"efrain2007"))))),(0,n.yg)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65\uff1f"),(0,n.yg)("p",null,"SeaQL \u662f\u4e00\u4e2a\u793e\u533a\u9a71\u52a8\u7684\u9879\u76ee\u3002\u6211\u4eec\u6b22\u8fce\u60a8\u53c2\u4e0e\u3001\u8d21\u732e\u5e76\u5171\u540c\u5efa\u8bbe Rust \u7684\u672a\u6765\u3002"),(0,n.yg)("p",null,"\u8fd9\u662f SeaORM ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/12"},(0,n.yg)("inlineCode",{parentName:"a"},"0.12.x"))," \u7684\u8def\u7ebf\u56fe\u3002"))}u.isMDXComponent=!0}}]);