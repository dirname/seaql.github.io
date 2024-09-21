"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[6323],{5680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,y=m["".concat(i,".").concat(u)]||m[u]||c[u]||l;return t?r.createElement(y,o(o({ref:a},g),{},{components:t})):r.createElement(y,o({ref:a},g))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3164:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(8168),n=(t(6540),t(5680));const l={slug:"2022-09-27-getting-started-with-seaography",title:"\u5f00\u59cb\u4f7f\u7528 Seaography",author:"SeaQL \u56e2\u961f",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},o=void 0,s={permalink:"/blog/2022-09-27-getting-started-with-seaography",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-09-27-getting-started-with-seaography.md",source:"@site/blog/2022-09-27-getting-started-with-seaography.md",title:"\u5f00\u59cb\u4f7f\u7528 Seaography",description:"Seaography \u662f\u4e00\u4e2a\u57fa\u4e8e SeaORM \u6784\u5efa GraphQL \u89e3\u6790\u5668\u7684\u6846\u67b6\u3002\u5b83\u9644\u5e26\u4e00\u4e2a CLI \u5de5\u5177\uff0c\u53ef\u4ee5\u4ece\u73b0\u6709\u7684 MySQL\u3001Postgres \u548c SQLite \u6570\u636e\u5e93\u751f\u6210\u53ef\u7f16\u8bd1\u7684 Rust \u9879\u76ee\u3002",date:"2022-09-27T00:00:00.000Z",formattedDate:"September 27, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:6.475,hasTruncateMarker:!1,authors:[{name:"SeaQL \u56e2\u961f",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-09-27-getting-started-with-seaography",title:"\u5f00\u59cb\u4f7f\u7528 Seaography",author:"SeaQL \u56e2\u961f",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"SeaQuery 0.27.0 \u7684\u65b0\u7279\u6027",permalink:"/blog/2022-10-31-whats-new-in-seaquery-0.27.0"},nextItem:{title:"\u4ecb\u7ecd Seaography \ud83e\udded",permalink:"/blog/2022-09-17-introducing-seaography"}},i={authorsImageUrls:[void 0]},p=[{value:"\u6269\u5c55 SeaORM \u9879\u76ee",id:"\u6269\u5c55-seaorm-\u9879\u76ee",level:2},{value:"\u4ece\u6570\u636e\u5e93\u751f\u6210\u9879\u76ee",id:"\u4ece\u6570\u636e\u5e93\u751f\u6210\u9879\u76ee",level:2},{value:"\u67e5\u770b\u793a\u4f8b\u9879\u76ee",id:"\u67e5\u770b\u793a\u4f8b\u9879\u76ee",level:2},{value:"\u542f\u52a8 GraphQL \u670d\u52a1\u5668",id:"\u542f\u52a8-graphql-\u670d\u52a1\u5668",level:2},{value:"\u901a\u8fc7 GraphQL \u67e5\u8be2\u6570\u636e",id:"\u901a\u8fc7-graphql-\u67e5\u8be2\u6570\u636e",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2},{value:"\u4eba\u5458",id:"\u4eba\u5458",level:2}],g={toc:p},m="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"Seaography")," \u662f\u4e00\u4e2a\u57fa\u4e8e ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"SeaORM")," \u6784\u5efa GraphQL \u89e3\u6790\u5668\u7684\u6846\u67b6\u3002\u5b83\u9644\u5e26\u4e00\u4e2a CLI \u5de5\u5177\uff0c\u53ef\u4ee5\u4ece\u73b0\u6709\u7684 MySQL\u3001Postgres \u548c SQLite \u6570\u636e\u5e93\u751f\u6210\u53ef\u7f16\u8bd1\u7684 Rust \u9879\u76ee\u3002"),(0,n.yg)("p",null,"\u5173\u4e8e Seaography \u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\uff0c\u53ef\u53c2\u8003\u6211\u4eec\u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2022-09-17-introducing-seaography/"},"\u53d1\u5e03\u535a\u5ba2\u6587\u7ae0")," \u548c ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/Seaography/"},"\u6587\u6863")," \u3002"),(0,n.yg)("h2",{id:"\u6269\u5c55-seaorm-\u9879\u76ee"},"\u6269\u5c55 SeaORM \u9879\u76ee"),(0,n.yg)("p",null,"\u7531\u4e8e Seaography \u6784\u5efa\u5728 SeaORM \u4e4b\u4e0a\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u4ece SeaORM \u9879\u76ee\u6784\u5efa\u4e00\u4e2a GraphQL \u670d\u52a1\u5668\u3002"),(0,n.yg)("p",null,"\u9996\u5148\uff0c\u5c06 Seaography \u548c GraphQL \u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u60a8\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"Cargo.toml")," \u4e2d\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-diff",metastring:"title=Cargo.toml",title:"Cargo.toml"},'[dependencies]\nsea-orm = { version = "^0.9", features = [ ... ] }\n+ seaography = { version = "^0.1", features = [ "with-decimal", "with-chrono" ] }\n+ async-graphql = { version = "4.0.10", features = ["decimal", "chrono", "dataloader"] }\n+ async-graphql-poem = { version = "4.0.10" }\n')),(0,n.yg)("p",null,"\u7136\u540e\uff0c\u5728 SeaORM \u5b9e\u4f53\u4e0a\u6d3e\u751f\u51e0\u4e2a\u5b8f\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-diff",metastring:"title=src/entities/film_actor.rs",title:"src/entities/film_actor.rs"},'use sea_orm::entity::prelude::*;\n\n#[derive(\n    Clone,\n    Debug,\n    PartialEq,\n    DeriveEntityModel,\n+   async_graphql::SimpleObject,\n+   seaography::macros::Filter,\n)]\n+ #[graphql(complex)]\n+ #[graphql(name = "FilmActor")]\n#[sea_orm(table_name = "film_actor")]\npub struct Model {\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub actor_id: i32,\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub film_id: i32,\n    pub last_update: DateTimeUtc,\n}\n\n#[derive(\n    Copy,\n    Clone,\n    Debug,\n    EnumIter,\n    DeriveRelation,\n+   seaography::macros::RelationsCompact,\n)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::film::Entity",\n        from = "Column::FilmId",\n        to = "super::film::Column::FilmId",\n        on_update = "Cascade",\n        on_delete = "NoAction"\n    )]\n    Film,\n    #[sea_orm(\n        belongs_to = "super::actor::Entity",\n        from = "Column::ActorId",\n        to = "super::actor::Column::ActorId",\n        on_update = "Cascade",\n        on_delete = "NoAction"\n    )]\n    Actor,\n}\n')),(0,n.yg)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u4e3a GraphQL \u670d\u52a1\u5668\u5b9a\u4e49 ",(0,n.yg)("inlineCode",{parentName:"p"},"QueryRoot"),"\u3002\u8fd9\u5b9a\u4e49\u4e86 GraphQL \u67b6\u6784\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/query_root.rs",title:"src/query_root.rs"},'#[derive(Debug, seaography::macros::QueryRoot)]\n#[seaography(entity = "crate::entities::actor")]\n#[seaography(entity = "crate::entities::film")]\n#[seaography(entity = "crate::entities::film_actor")]\npub struct QueryRoot;\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/lib.rs",title:"src/lib.rs"},"use sea_orm::prelude::*;\n\npub mod entities;\npub mod query_root;\n\npub use query_root::QueryRoot;\n\npub struct OrmDataloader {\n    pub db: DatabaseConnection,\n}\n")),(0,n.yg)("p",null,"\u6700\u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\u6765\u9a71\u52a8 GraphQL \u670d\u52a1\u5668\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},'use async_graphql::{\n    dataloader::DataLoader,\n    http::{playground_source, GraphQLPlaygroundConfig},\n    EmptyMutation, EmptySubscription, Schema,\n};\nuse async_graphql_poem::GraphQL;\nuse poem::{handler, listener::TcpListener, web::Html, IntoResponse, Route, Server};\nuse sea_orm::Database;\nuse seaography_example_project::*;\n// ...\n\n#[handler]\nasync fn graphql_playground() -> impl IntoResponse {\n    Html(playground_source(GraphQLPlaygroundConfig::new("/")))\n}\n\n#[tokio::main]\nasync fn main() {\n    // ...\n\n    let database = Database::connect(db_url).await.unwrap();\n    let orm_dataloader: DataLoader<OrmDataloader> = DataLoader::new(\n        OrmDataloader { db: database.clone() },\n        tokio::spawn,\n    );\n\n    let schema = Schema::build(QueryRoot, EmptyMutation, EmptySubscription)\n        .data(database)\n        .data(orm_dataloader)\n        .finish();\n\n    let app = Route::new()\n        .at("/", get(graphql_playground)\n        .post(GraphQL::new(schema)));\n\n    Server::new(TcpListener::bind("0.0.0.0:8000"))\n        .run(app)\n        .await\n        .unwrap();\n}\n')),(0,n.yg)("h2",{id:"\u4ece\u6570\u636e\u5e93\u751f\u6210\u9879\u76ee"},"\u4ece\u6570\u636e\u5e93\u751f\u6210\u9879\u76ee"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u53ea\u6709\u4e00\u4e2a\u6570\u636e\u5e93\u67b6\u6784\uff0c\u606d\u559c\u60a8\uff01\u60a8\u53ef\u4ee5\u5728\u4e0d\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u8bbe\u7f6e GraphQL \u670d\u52a1\u5668\u3002"),(0,n.yg)("p",null,"\u5b89\u88c5 ",(0,n.yg)("inlineCode",{parentName:"p"},"seaography-cli"),"\uff0c\u5b83\u5e2e\u52a9\u60a8\u751f\u6210 SeaORM \u5b9e\u4f53\u4ee5\u53ca\u57fa\u4e8e\u6570\u636e\u5e93\u67b6\u6784\u7684\u5b8c\u6574 Rust \u9879\u76ee\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"cargo install seaography-cli\n")),(0,n.yg)("p",null,"\u8fd0\u884c ",(0,n.yg)("inlineCode",{parentName:"p"},"seaography-cli")," \u6765\u4e3a GraphQL \u670d\u52a1\u5668\u751f\u6210\u4ee3\u7801\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"# \u8be5\u547d\u4ee4\u9700\u8981\u4e09\u4e2a\u53c2\u6570\nseaography-cli <DATABASE_URL> <CRATE_NAME> <DESTINATION>\n\n# MySQL\nseaography-cli mysql://root:root@localhost/sakila seaography-mysql-example examples/mysql\n# PostgreSQL\nseaography-cli postgres://root:root@localhost/sakila seaography-postgres-example examples/postgres\n# SQLite\nseaography-cli sqlite://examples/sqlite/sakila.db seaography-sqlite-example examples/sqliteql\n")),(0,n.yg)("h2",{id:"\u67e5\u770b\u793a\u4f8b\u9879\u76ee"},"\u67e5\u770b\u793a\u4f8b\u9879\u76ee"),(0,n.yg)("p",null,"\u6211\u4eec\u4e3a\u60a8\u51c6\u5907\u4e86\u4ee5\u4e0b\u793a\u4f8b\uff0c\u5e76\u9644\u6709\u521d\u59cb\u5316\u6570\u636e\u5e93\u7684 SQL \u811a\u672c\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/mysql"},"MySQL")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/postgres"},"PostgreSQL")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/sqlite"},"SQLite"))),(0,n.yg)("p",null,"\u6240\u6709\u793a\u4f8b\u5728\u8fd0\u884c\u65f6\u90fd\u63d0\u4f9b\u57fa\u4e8e Web \u7684 GraphQL playground\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b GraphQL \u67b6\u6784\u5e76\u8fdb\u884c\u67e5\u8be2\u3002\u5982\u679c\u60a8\u7b49\u4e0d\u53ca\u60f3\u73a9\uff0c\u53ef\u4ee5\u8bbf\u95ee\u6211\u4eec\u6258\u7ba1\u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://playground.sea-ql.org/seaography"},"demo GraphQL playground")," \u3002"),(0,n.yg)("h2",{id:"\u542f\u52a8-graphql-\u670d\u52a1\u5668"},"\u542f\u52a8 GraphQL \u670d\u52a1\u5668"),(0,n.yg)("p",null,"\u60a8\u7684 GraphQL \u670d\u52a1\u5668\u5df2\u51c6\u5907\u597d\u542f\u52a8\uff01\u8fdb\u5165 Rust \u9879\u76ee\u6839\u76ee\u5f55\uff0c\u7136\u540e\u6267\u884c ",(0,n.yg)("inlineCode",{parentName:"p"},"cargo run")," \u542f\u52a8\u5b83\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ cargo run\n\nPlayground: http://localhost:8000\n")),(0,n.yg)("p",null,"\u8bbf\u95ee GraphQL playground ",(0,n.yg)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://www.sea-ql.org/Seaography/img/playground_example_database.png",alt:"GraphQL Playground"})),(0,n.yg)("h2",{id:"\u901a\u8fc7-graphql-\u67e5\u8be2\u6570\u636e"},"\u901a\u8fc7 GraphQL \u67e5\u8be2\u6570\u636e"),(0,n.yg)("p",null,"\u5047\u8bbe\u6211\u4eec\u60f3\u83b7\u53d6\u5728 2006 \u5e74\u6216\u4e4b\u540e\u4e0a\u6620\u7684\u524d 3 \u90e8\u5f71\u7247\uff0c\u5e76\u6309\u6807\u9898\u5347\u5e8f\u6392\u5217\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-graphql"},'{\n  film(\n    pagination: { limit: 3, page: 0 }\n    filters: { releaseYear: { gte: "2006" } }\n    orderBy: { title: ASC }\n  ) {\n    data {\n      filmId\n      title\n      description\n      releaseYear\n      filmActor {\n        actor {\n          actorId\n          firstName\n          lastName\n        }\n      }\n    }\n    pages\n    current\n  }\n}\n')),(0,n.yg)("p",null,"\u5728\u6267\u884c GraphQL \u67e5\u8be2\u540e\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u4ee5\u4e0b JSON \u7ed3\u679c\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "film": {\n      "data": [\n        {\n          "filmId": 1,\n          "title": "ACADEMY DINOSAUR",\n          "description": "\u4e00\u4f4d\u5973\u6743\u4e3b\u4e49\u8005\u548c\u4e00\u4f4d\u75af\u72c2\u79d1\u5b66\u5bb6\u5728\u52a0\u62ff\u5927\u843d\u57fa\u5c71\u8109\u4e0e\u8001\u5e08\u6218\u6597\u7684\u53f2\u8bd7\u5267",\n          "releaseYear": "2006",\n          "filmActor": [\n            {\n              "actor": {\n                "actorId": 1,\n                "firstName": "PENELOPE",\n                "lastName": "GUINESS"\n              }\n            },\n            {\n              "actor": {\n                "actorId": 10,\n                "firstName": "CHRISTIAN",\n                "lastName": "GABLE"\n              }\n            },\n            // ...\n          ]\n        },\n        {\n          "filmId": 2,\n          "title": "ACE GOLDFINGER",\n          "description": "\u4e00\u4f4d\u6570\u636e\u5e93\u7ba1\u7406\u5458\u548c\u4e00\u4f4d\u63a2\u9669\u5bb6\u5728\u53e4\u4e2d\u56fd\u5bfb\u627e\u4e00\u8f86\u8f66\u7684\u60ca\u4eba\u4fe1\u4ef6",\n          "releaseYear": "2006",\n          "filmActor": [\n            // ...\n          ]\n        },\n        // ...\n      ],\n      "pages": 334,\n      "current": 0\n    }\n  }\n}\n')),(0,n.yg)("p",null,"\u5728\u540e\u53f0\uff0c\u67e5\u8be2\u4e86\u4ee5\u4e0b SQL\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT "film"."film_id",\n       "film"."title",\n       "film"."description",\n       "film"."release_year",\n       "film"."language_id",\n       "film"."original_language_id",\n       "film"."rental_duration",\n       "film"."rental_rate",\n       "film"."length",\n       "film"."replacement_cost",\n       "film"."rating",\n       "film"."special_features",\n       "film"."last_update"\nFROM "film"\nWHERE "film"."release_year" >= \'2006\'\nORDER BY "film"."title" ASC\nLIMIT 3 OFFSET 0\n\nSELECT "film_actor"."actor_id", "film_actor"."film_id", "film_actor"."last_update"\nFROM "film_actor"\nWHERE "film_actor"."film_id" IN (1, 3, 2)\n\nSELECT "actor"."actor_id", "actor"."first_name", "actor"."last_name", "actor"."last_update"\nFROM "actor"\nWHERE "actor"."actor_id" IN (24, 162, 20, 160, 1, 188, 123, 30, 53, 40, 2, 64, 85, 198, 10, 19, 108, 90)\n')),(0,n.yg)("p",null,"\u5728\u80cc\u540e\uff0cSeaography \u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/async-graphql/latest/async_graphql/dataloader/index.html"},"async_graphql::dataloader")," \u5728\u67e5\u8be2\u5d4c\u5957\u5bf9\u8c61\u65f6\u89e3\u51b3 N+1 \u95ee\u9898\u3002"),(0,n.yg)("p",null,"\u60f3\u8981\u4e86\u89e3\u66f4\u591a\uff0c\u67e5\u770b ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/Seaography/docs/data-loader/"},"Seaography \u6587\u6863")," \u3002"),(0,n.yg)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,n.yg)("p",null,"Seaography \u662f\u4e00\u4e2a\u4eba\u6027\u5316\u7684\u5e93\uff0c\u5c06 SeaORM \u5b9e\u4f53\u8f6c\u6362\u4e3a GraphQL \u8282\u70b9\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u7ec4\u5b9e\u7528\u5de5\u5177\uff0c\u5e76\u7ed3\u5408\u4ee3\u7801\u751f\u6210\u5668\uff0c\u4f7f GraphQL API \u7684\u6784\u5efa\u53d8\u5f97\u8f7b\u800c\u6613\u4e3e\u3002"),(0,n.yg)("p",null,"\u7136\u800c\uff0cSeaography \u4ecd\u7136\u662f\u4e00\u4e2a\u65b0\u751f\u4e8b\u7269\u3002\u548c\u5176\u4ed6\u7531\u70ed\u60c5\u7684 Rust \u5f00\u53d1\u8005\u5f00\u53d1\u7684\u5f00\u6e90\u9879\u76ee\u4e00\u6837\uff0c\u5982\u679c\u60a8\u89c9\u5f97\u8fd9\u4e2a\u6982\u5ff5\u6709\u8da3\uff0c\u60a8\u53ef\u4ee5\u4e3a\u6b64\u505a\u51fa\u8d21\u732e\u3002\u968f\u7740\u5b83\u7684\u52a0\u5165\uff0c\u6211\u4eec\u79bb Rust \u6210\u4e3a\u6570\u636e\u5de5\u7a0b\u6700\u4f73\u5de5\u5177\u7684\u613f\u666f\u53c8\u8fd1\u4e86\u4e00\u6b65\u3002"),(0,n.yg)("h2",{id:"\u4eba\u5458"},"\u4eba\u5458"),(0,n.yg)("p",null,"Seaography \u7531\u4ee5\u4e0b\u4eba\u5458\u521b\u5efa\uff1a"),(0,n.yg)("div",{className:"container"},(0,n.yg)("div",{className:"row"},(0,n.yg)("div",{className:"col col--12 margin-bottom--md"},(0,n.yg)("div",{className:"avatar"},(0,n.yg)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/karatakis"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/7329022?v=4"})),(0,n.yg)("div",{className:"avatar__intro"},(0,n.yg)("div",{className:"avatar__name"},"Panagiotis Karatakis"),"\u5b9e\u4e60\u751f\uff1bSeaography \u7684\u5f00\u53d1\u8005"))),(0,n.yg)("div",{className:"col col--12 margin-bottom--md"},(0,n.yg)("div",{className:"avatar"},(0,n.yg)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.yg)("div",{className:"avatar__intro"},(0,n.yg)("div",{className:"avatar__name"},"Chris Tsang"),"\u5b9e\u4e60\u5bfc\u5e08\uff1bSeaQL \u7684\u9996\u5e2d\u5f00\u53d1\u8005"))),(0,n.yg)("div",{className:"col col--12 margin-bottom--md"},(0,n.yg)("div",{className:"avatar"},(0,n.yg)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.yg)("div",{className:"avatar__intro"},(0,n.yg)("div",{className:"avatar__name"},"Billy Chan"),"\u5b9e\u4e60\u5bfc\u5e08\uff1bSeaQL \u6838\u5fc3\u6210\u5458"))))))}c.isMDXComponent=!0}}]);