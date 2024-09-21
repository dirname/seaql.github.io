"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[45437],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),l=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,y=u["".concat(o,".").concat(d)]||u[d]||p[d]||m;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var m=t.length,i=new Array(m);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<m;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>m,metadata:()=>s,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const m={},i="\u521b\u5efa\u679a\u4e3e",s={unversionedId:"generate-database-schema/create-enum",id:"version-0.5.x/generate-database-schema/create-enum",title:"\u521b\u5efa\u679a\u4e3e",description:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Schema \u8f85\u52a9\u7ed3\u6784\u751f\u6210 SQL \u8bed\u53e5\u4ee5\u521b\u5efa\u5177\u6709\u679a\u4e3e\u5217\u7684\u6570\u636e\u5e93\u8868\u3002",source:"@site/versioned_docs/version-0.5.x/04-generate-database-schema/02-create-enum.md",sourceDirName:"04-generate-database-schema",slug:"/generate-database-schema/create-enum",permalink:"/SeaORM/docs/0.5.x/generate-database-schema/create-enum",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/04-generate-database-schema/02-create-enum.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1641018762,formattedLastUpdatedAt:"Jan 1, 2022",sidebarPosition:2,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"\u521b\u5efa\u8868",permalink:"/SeaORM/docs/0.5.x/generate-database-schema/create-table"},next:{title:"\u9009\u62e9",permalink:"/SeaORM/docs/0.5.x/basic-crud/select"}},o={},l=[{value:"\u5b57\u7b26\u4e32\u548c\u6574\u6570\u679a\u4e3e",id:"\u5b57\u7b26\u4e32\u548c\u6574\u6570\u679a\u4e3e",level:2},{value:"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e",id:"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"MySQL",id:"mysql",level:3},{value:"SQLite",id:"sqlite",level:3}],c={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u521b\u5efa\u679a\u4e3e"},"\u521b\u5efa\u679a\u4e3e"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/schema/struct.Schema.html"},(0,r.yg)("inlineCode",{parentName:"a"},"Schema"))," \u8f85\u52a9\u7ed3\u6784\u751f\u6210 SQL \u8bed\u53e5\u4ee5\u521b\u5efa\u5177\u6709\u679a\u4e3e\u5217\u7684\u6570\u636e\u5e93\u8868\u3002"),(0,r.yg)("h2",{id:"\u5b57\u7b26\u4e32\u548c\u6574\u6570\u679a\u4e3e"},"\u5b57\u7b26\u4e32\u548c\u6574\u6570\u679a\u4e3e"),(0,r.yg)("p",null,"\u8fd9\u53ea\u662f\u4e00\u4e2a\u666e\u901a\u7684\u5b57\u7b26\u4e32/\u6574\u6570\u5217\uff0c\u6620\u5c04\u5230 Rust \u679a\u4e3e\uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u5730\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.yg)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity"))," \u65b9\u6cd5\u6784\u5efa\u4e0e\u524d\u4e00\u90e8\u5206\u76f8\u540c\u7684\u521b\u5efa\u8868\u8bed\u53e5\u3002"),(0,r.yg)("p",null,"\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," \u548c\u679a\u4e3e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'pub mod active_enum {\n    use sea_orm::entity::prelude::*;\n    \n    #[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n    #[sea_orm(schema_name = "public", table_name = "active_enum")]\n    pub struct Model {\n        #[sea_orm(primary_key)]\n        pub id: i32,\n        pub category: Option<Category>,\n        pub color: Option<Color>,\n    }\n    \n    #[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n    #[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\n    pub enum Category {\n        #[sea_orm(string_value = "B")]\n        Big,\n        #[sea_orm(string_value = "S")]\n        Small,\n    }\n    \n    #[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n    #[sea_orm(rs_type = "i32", db_type = "Integer")]\n    pub enum Color {\n        #[sea_orm(num_value = 0)]\n        Black,\n        #[sea_orm(num_value = 1)]\n        White,\n    }\n    \n    #[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\n    pub enum Relation {}\n    \n    impl ActiveModelBehavior for ActiveModel {}\n}\n')),(0,r.yg)("p",null,"\u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," \u751f\u6210 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,r.yg)("inlineCode",{parentName:"a"},"TableCreateStatement")),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{sea_query, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nassert_eq!(\n    builder.build(&schema.create_table_from_entity(active_enum::Entity)),\n    builder.build(\n        &sea_query::Table::create()\n            .table(active_enum::Entity.table_ref())\n            .col(\n                sea_query::ColumnDef::new(active_enum::Column::Id)\n                    .integer()\n                    .not_null()\n                    .auto_increment()\n                    .primary_key(),\n            )\n            .col(sea_query::ColumnDef::new(active_enum::Column::Category).string_len(1))\n            .col(sea_query::ColumnDef::new(active_enum::Column::Color).integer())\n            .to_owned()\n    )\n);\n")),(0,r.yg)("h2",{id:"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e"},"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e"),(0,r.yg)("p",null,"\u4e0d\u540c\u6570\u636e\u5e93\u7684\u679a\u4e3e\u652f\u6301\u4e0d\u540c\u3002\u6211\u4eec\u5c06\u9010\u4e00\u89e3\u91ca\u5982\u4f55\u4e3a\u6bcf\u4e2a\u6570\u636e\u5e93\u521b\u5efa\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e\u3002"),(0,r.yg)("p",null,"\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," \u548c\u679a\u4e3e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'pub mod active_enum {\n    use sea_orm::entity::prelude::*;\n    \n    #[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n    #[sea_orm(schema_name = "public", table_name = "active_enum")]\n    pub struct Model {\n        #[sea_orm(primary_key)]\n        pub id: i32,\n        pub tea: Option<Tea>,\n    }\n    \n    #[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n    #[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\n    pub enum Tea {\n        #[sea_orm(string_value = "EverydayTea")]\n        EverydayTea,\n        #[sea_orm(string_value = "BreakfastTea")]\n        BreakfastTea,\n    }\n    \n    #[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\n    pub enum Relation {}\n    \n    impl ActiveModelBehavior for ActiveModel {}\n}\n')),(0,r.yg)("h3",{id:"postgresql"},"PostgreSQL"),(0,r.yg)("p",null,"\u5728 PostgreSQL \u4e2d\uff0c\u679a\u4e3e\u88ab\u5b9a\u4e49\u4e3a\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/schema/struct.Schema.html#method.create_enum_from_entity"},(0,r.yg)("inlineCode",{parentName:"a"},"Schema::create_enum_from_entity"))," \u65b9\u6cd5\u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," \u521b\u5efa\u3002"),(0,r.yg)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u76f4\u63a5\u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"ActiveEnum")," \u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/schema/struct.Schema.html#method.create_enum_from_active_enum"},(0,r.yg)("inlineCode",{parentName:"a"},"Schema::create_enum_from_active_enum"))," \u65b9\u6cd5\u521b\u5efa\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_postgres = DbBackend::Postgres;\nlet schema = Schema::new(db_postgres);\n\nassert_eq!(\n    schema\n        .create_enum_from_entity(active_enum::Entity)\n        .iter()\n        .map(|stmt| db_postgres.build(stmt))\n        .collect::<Vec<_>>(),\n    vec![Statement::from_string(\n        db_postgres,\n        r#"CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')"#.to_owned()\n    ),]\n);\n\nassert_eq!(\n    db_postgres.build(&schema.create_enum_from_active_enum::<Tea>()),\n    Statement::from_string(\n        db_postgres,\n        r#"CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')"#.to_owned()\n    )\n);\n\nassert_eq!(\n    db_postgres.build(&schema.create_table_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_postgres,\n        vec![\n            r#"CREATE TABLE "public"."active_enum" ("#,\n            r#""id" serial NOT NULL PRIMARY KEY,"#,\n            r#""tea" tea"#,\n            r#")"#,\n        ]\n        .join(" ")\n    ),\n);\n')),(0,r.yg)("h3",{id:"mysql"},"MySQL"),(0,r.yg)("p",null,"\u5728 MySQL \u4e2d\uff0c\u679a\u4e3e\u5728\u8868\u521b\u5efa\u65f6\u5b9a\u4e49\uff0c\u56e0\u6b64\u60a8\u53ea\u9700\u8981 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.yg)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity"))," \u65b9\u6cd5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_mysql = DbBackend::MySql;\nlet schema = Schema::new(db_mysql);\n\nassert_eq!(\n    db_mysql.build(&schema.create_table_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_mysql,\n        vec![\n            "CREATE TABLE `active_enum` (",\n            "`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,",\n            "`tea` ENUM(\'EverydayTea\', \'BreakfastTea\')",\n            ")",\n        ]\n        .join(" ")\n    ),\n);\n')),(0,r.yg)("h3",{id:"sqlite"},"SQLite"),(0,r.yg)("p",null,"SQLite \u4e0d\u652f\u6301\u679a\u4e3e\uff0c\u56e0\u6b64\u5b83\u5c06\u4f5c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"TEXT")," \u7c7b\u578b\u5b58\u50a8\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_sqlite = DbBackend::Sqlite;\nlet schema = Schema::new(db_sqlite);\n\nassert_eq!(\n    db_sqlite.build(&schema.create_table_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_sqlite,\n        vec![\n            "CREATE TABLE `active_enum` (",\n            "`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,",\n            "`tea` text",\n            ")",\n        ]\n        .join(" ")\n    ),\n);\n')))}p.isMDXComponent=!0}}]);