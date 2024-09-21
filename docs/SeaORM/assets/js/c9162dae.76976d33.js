"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[84450],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>_});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),g=s(t),d=r,_=g["".concat(o,".").concat(d)]||g[d]||p[d]||i;return t?a.createElement(_,l(l({ref:n},m),{},{components:t})):a.createElement(_,l({ref:n},m))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[g]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={},l="\u521b\u5efa\u8868",c={unversionedId:"generate-database-schema/create-table",id:"version-0.4.x/generate-database-schema/create-table",title:"\u521b\u5efa\u8868",description:"\u8981\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868\uff0c\u800c\u4e0d\u662f\u624b\u52a8\u7f16\u5199 TableCreateStatement\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 Schema::createtablefromentity \u4ece Entity \u751f\u6210\u3002\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u60a8\u521b\u5efa\u6570\u636e\u5e93\u8868\uff0c\u5305\u62ec\u5728 Entity \u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u5217\u548c\u5916\u952e\u7ea6\u675f\u3002",source:"@site/versioned_docs/version-0.4.x/04-generate-database-schema/01-create-table.md",sourceDirName:"04-generate-database-schema",slug:"/generate-database-schema/create-table",permalink:"/SeaORM/docs/0.4.x/generate-database-schema/create-table",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/04-generate-database-schema/01-create-table.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1640968088,formattedLastUpdatedAt:"Dec 31, 2021",sidebarPosition:1,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"\u679a\u4e3e",permalink:"/SeaORM/docs/0.4.x/generate-entity/enumeration"},next:{title:"\u521b\u5efa\u679a\u4e3e",permalink:"/SeaORM/docs/0.4.x/generate-database-schema/create-enum"}},o={},s=[],m={toc:s},g="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u521b\u5efa\u8868"},"\u521b\u5efa\u8868"),(0,r.yg)("p",null,"\u8981\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868\uff0c\u800c\u4e0d\u662f\u624b\u52a8\u7f16\u5199 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,r.yg)("inlineCode",{parentName:"a"},"TableCreateStatement")),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.4/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.yg)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity"))," \u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," \u751f\u6210\u3002\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u60a8\u521b\u5efa\u6570\u636e\u5e93\u8868\uff0c\u5305\u62ec\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," \u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u5217\u548c\u5916\u952e\u7ea6\u675f\u3002"),(0,r.yg)("p",null,"\u4e0b\u9762\u6211\u4eec\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_filling_price.rs"},(0,r.yg)("inlineCode",{parentName:"a"},"CakeFillingPrice"))," \u5b9e\u4f53\u6765\u6f14\u793a\u5b83\u751f\u6210\u7684 SQL \u8bed\u53e5\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,r.yg)("inlineCode",{parentName:"a"},"TableCreateStatement"))," \u6784\u9020\u76f8\u540c\u7684\u8bed\u53e5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{sea_query::*, tests_cfg::*, EntityName, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nassert_eq!(\n    builder.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    builder.build(\n        &Table::create()\n            .table(CakeFillingPrice.table_ref())\n            .col(\n                ColumnDef::new(cake_filling_price::Column::CakeId)\n                    .integer()\n                    .not_null(),\n            )\n            .col(\n                ColumnDef::new(cake_filling_price::Column::FillingId)\n                    .integer()\n                    .not_null(),\n            )\n            .col(\n                ColumnDef::new(cake_filling_price::Column::Price)\n                    .decimal()\n                    .not_null(),\n            )\n            .primary_key(\n                Index::create()\n                    .name("pk-cake_filling_price")\n                    .col(cake_filling_price::Column::CakeId)\n                    .col(cake_filling_price::Column::FillingId)\n                    .primary(),\n            )\n            .foreign_key(\n                ForeignKeyCreateStatement::new()\n                    .name("fk-cake_filling_price-cake_filling")\n                    .from_tbl(CakeFillingPrice)\n                    .from_col(cake_filling_price::Column::CakeId)\n                    .from_col(cake_filling_price::Column::FillingId)\n                    .to_tbl(CakeFilling)\n                    .to_col(cake_filling::Column::CakeId)\n                    .to_col(cake_filling::Column::FillingId),\n            )\n            .to_owned()\n    )\n);\n')),(0,r.yg)("p",null,"\u4e3a\u4e86\u8fdb\u4e00\u6b65\u8bf4\u660e\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u9762\u5c55\u793a SQL \u8bed\u53e5\u4f5c\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"PostgreSQL"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_postgres = DbBackend::Postgres;\nlet schema = Schema::new(db_postgres);\n\nassert_eq!(\n    db_postgres.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_postgres,\n        vec![\n            r#"CREATE TABLE "public"."cake_filling_price" ("#,\n            r#""cake_id" integer NOT NULL,"#,\n            r#""filling_id" integer NOT NULL,"#,\n            r#""price" decimal NOT NULL,"#,\n            r#"CONSTRAINT "pk-cake_filling_price" PRIMARY KEY ("cake_id", "filling_id"),"#,\n            r#"CONSTRAINT "fk-cake_filling_price-cake_filling" FOREIGN KEY ("cake_id", "filling_id") REFERENCES "cake_filling" ("cake_id", "filling_id")"#,\n            r#")"#,\n        ]\n        .join(" ")\n    )\n);\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MySQL"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_mysql = DbBackend::MySql;\nlet schema = Schema::new(db_mysql);\n\nassert_eq!(\n    db_mysql.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_mysql,\n        vec![\n            "CREATE TABLE `cake_filling_price` (",\n            "`cake_id` int NOT NULL,",\n            "`filling_id` int NOT NULL,",\n            "`price` decimal NOT NULL,",\n            "PRIMARY KEY `pk-cake_filling_price` (`cake_id`, `filling_id`),",\n            "CONSTRAINT `fk-cake_filling_price-cake_filling` FOREIGN KEY (`cake_id`, `filling_id`) REFERENCES `cake_filling` (`cake_id`, `filling_id`)",\n            ")",\n        ]\n        .join(" ")\n    )\n);\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"SQLite"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_sqlite = DbBackend::Sqlite;\nlet schema = Schema::new(db_sqlite);\n\nassert_eq!(\n    db_sqlite.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_sqlite,\n        vec![\n            "CREATE TABLE `cake_filling_price` (",\n            "`cake_id` integer NOT NULL,",\n            "`filling_id` integer NOT NULL,",\n            "`price` real NOT NULL,",\n            "CONSTRAINT `pk-cake_filling_price` PRIMARY KEY (`cake_id`, `filling_id`),",\n            "FOREIGN KEY (`cake_id`, `filling_id`) REFERENCES `cake_filling` (`cake_id`, `filling_id`)",\n            ")",\n        ]\n        .join(" ")\n    )\n);\n')))))}p.isMDXComponent=!0}}]);