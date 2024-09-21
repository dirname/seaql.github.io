"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[31081],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),y=r,g=d["".concat(s,".").concat(y)]||d[y]||p[y]||l;return a?t.createElement(g,i(i({ref:n},u),{},{components:a})):t.createElement(g,i({ref:n},u))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},62971:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=a(58168),r=(a(96540),a(15680));const l={},i="\u539f\u59cb SQL",o={unversionedId:"basic-crud/raw-sql",id:"version-0.12.x/basic-crud/raw-sql",title:"\u539f\u59cb SQL",description:"\u901a\u8fc7\u539f\u59cb SQL \u67e5\u8be2",source:"@site/versioned_docs/version-0.12.x/05-basic-crud/08-raw-sql.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/raw-sql",permalink:"/SeaORM/docs/0.12.x/basic-crud/raw-sql",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/05-basic-crud/08-raw-sql.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690464322,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/SeaORM/docs/0.12.x/basic-crud/json"},next:{title:"\u4e00\u5bf9\u4e00",permalink:"/SeaORM/docs/0.12.x/relation/one-to-one"}},s={},c=[{value:"\u901a\u8fc7\u539f\u59cb SQL \u67e5\u8be2",id:"\u901a\u8fc7\u539f\u59cb-sql-\u67e5\u8be2",level:2},{value:"\u83b7\u53d6\u539f\u59cb SQL \u67e5\u8be2",id:"\u83b7\u53d6\u539f\u59cb-sql-\u67e5\u8be2",level:2},{value:"\u4f7f\u7528\u539f\u59cb\u67e5\u8be2\u548c\u6267\u884c\u63a5\u53e3",id:"\u4f7f\u7528\u539f\u59cb\u67e5\u8be2\u548c\u6267\u884c\u63a5\u53e3",level:2},{value:"\u4f7f\u7528 <code>query_one</code> \u548c <code>query_all</code> \u65b9\u6cd5\u83b7\u53d6\u81ea\u5b9a\u4e49\u7ed3\u679c",id:"\u4f7f\u7528-query_one-\u548c-query_all-\u65b9\u6cd5\u83b7\u53d6\u81ea\u5b9a\u4e49\u7ed3\u679c",level:3},{value:"\u4f7f\u7528 <code>execute</code> \u65b9\u6cd5\u6267\u884c\u67e5\u8be2",id:"\u4f7f\u7528-execute-\u65b9\u6cd5\u6267\u884c\u67e5\u8be2",level:3},{value:"\u6267\u884c\u672a\u51c6\u5907\u7684 SQL \u8bed\u53e5",id:"\u6267\u884c\u672a\u51c6\u5907\u7684-sql-\u8bed\u53e5",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u539f\u59cb-sql"},"\u539f\u59cb SQL"),(0,r.yg)("h2",{id:"\u901a\u8fc7\u539f\u59cb-sql-\u67e5\u8be2"},"\u901a\u8fc7\u539f\u59cb SQL \u67e5\u8be2"),(0,r.yg)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u539f\u59cb\u67e5\u8be2\u9009\u62e9 ",(0,r.yg)("inlineCode",{parentName:"p"},"Model"),"\uff0c\u4f7f\u7528\u9002\u5f53\u7684\u53c2\u6570\u7ed1\u5b9a\u8bed\u6cd5\uff0c\u5373 ",(0,r.yg)("inlineCode",{parentName:"p"},"?")," \u7528\u4e8e MySQL \u548c SQLite\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"$N")," \u7528\u4e8e PostgreSQL\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'let cheese: Option<cake::Model> = cake::Entity::find()\n    .from_raw_sql(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,\n        [1.into()],\n    ))\n    .one(&db)\n    .await?;\n')),(0,r.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u81ea\u5b9a\u4e49\u6a21\u578b\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u9009\u62e9\u6240\u6709\u72ec\u7279\u7684\u86cb\u7cd5\u540d\u79f0\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, FromQueryResult)]\npub struct UniqueCake {\n    name: String,\n}\n\nlet unique: Vec<UniqueCake> = UniqueCake::find_by_statement(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name"#,\n        [],\n    ))\n    .all(&db)\n    .await?;\n')),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u4e8b\u5148\u4e0d\u77e5\u9053\u6a21\u578b\u7684\u6837\u5b50\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonValue"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'let unique: Vec<JsonValue> = JsonValue::find_by_statement(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name"#,\n        [],\n    ))\n    .all(&db)\n    .await?;\n')),(0,r.yg)("p",null,"\u4f60\u53ef\u4ee5\u5206\u9875 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.SelectorRaw.html"},(0,r.yg)("inlineCode",{parentName:"a"},"SelectorRaw")),"\uff0c\u5e76\u6279\u91cf\u83b7\u53d6 ",(0,r.yg)("inlineCode",{parentName:"p"},"Model"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'let mut cake_pages = cake::Entity::find()\n    .from_raw_sql(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,\n        [1.into()],\n    ))\n    .paginate(db, 50);\n \nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // \u5bf9 cakes \u8fdb\u884c\u64cd\u4f5c: Vec<cake::Model>\n}\n')),(0,r.yg)("h2",{id:"\u83b7\u53d6\u539f\u59cb-sql-\u67e5\u8be2"},"\u83b7\u53d6\u539f\u59cb SQL \u67e5\u8be2"),(0,r.yg)("p",null,"\u5728\u4efb\u4f55 CRUD \u64cd\u4f5c\u4e0a\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"build")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"to_string")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u83b7\u53d6\u7279\u5b9a\u4e8e\u6570\u636e\u5e93\u7684\u539f\u59cb SQL\uff0c\u4ee5\u4fbf\u4e8e\u8c03\u8bd5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::DatabaseBackend;\n\nassert_eq!(\n    cake_filling::Entity::find_by_id((6, 8))\n        .build(DatabaseBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake_filling`.`cake_id`, `cake_filling`.`filling_id` FROM `cake_filling`",\n        "WHERE `cake_filling`.`cake_id` = 6 AND `cake_filling`.`filling_id` = 8",\n    ].join(" ")\n);\n')),(0,r.yg)("h2",{id:"\u4f7f\u7528\u539f\u59cb\u67e5\u8be2\u548c\u6267\u884c\u63a5\u53e3"},"\u4f7f\u7528\u539f\u59cb\u67e5\u8be2\u548c\u6267\u884c\u63a5\u53e3"),(0,r.yg)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"sea-query")," \u6784\u5efa SQL \u8bed\u53e5\uff0c\u5e76\u76f4\u63a5\u5728 SeaORM \u5185\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"DatabaseConnection")," \u63a5\u53e3\u4e0a\u67e5\u8be2 / \u6267\u884c\u5b83\u3002"),(0,r.yg)("h3",{id:"\u4f7f\u7528-query_one-\u548c-query_all-\u65b9\u6cd5\u83b7\u53d6\u81ea\u5b9a\u4e49\u7ed3\u679c"},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"h3"},"query_one")," \u548c ",(0,r.yg)("inlineCode",{parentName:"h3"},"query_all")," \u65b9\u6cd5\u83b7\u53d6\u81ea\u5b9a\u4e49\u7ed3\u679c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'let query_res: Option<QueryResult> = db\n    .query_one(Statement::from_string(\n        DatabaseBackend::MySql,\n        "SELECT * FROM `cake`;",\n    ))\n    .await?;\nlet query_res = query_res.unwrap();\nlet id: i32 = query_res.try_get("", "id")?;\n\nlet query_res_vec: Vec<QueryResult> = db\n    .query_all(Statement::from_string(\n        DatabaseBackend::MySql,\n        "SELECT * FROM `cake`;",\n    ))\n    .await?;\n')),(0,r.yg)("h3",{id:"\u4f7f\u7528-execute-\u65b9\u6cd5\u6267\u884c\u67e5\u8be2"},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"h3"},"execute")," \u65b9\u6cd5\u6267\u884c\u67e5\u8be2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'let exec_res: ExecResult = db\n    .execute(Statement::from_string(\n        DatabaseBackend::MySql,\n        "DROP DATABASE IF EXISTS `sea`;",\n    ))\n    .await?;\nassert_eq!(exec_res.rows_affected(), 1);\n')),(0,r.yg)("h2",{id:"\u6267\u884c\u672a\u51c6\u5907\u7684-sql-\u8bed\u53e5"},"\u6267\u884c\u672a\u51c6\u5907\u7684 SQL \u8bed\u53e5"),(0,r.yg)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.ConnectionTrait.html#tymethod.execute_unprepared"},(0,r.yg)("inlineCode",{parentName:"a"},"ConnectionTrait::execute_unprepared"))," \u6267\u884c\u672a\u51c6\u5907\u7684 SQL \u8bed\u53e5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'let exec_res: ExecResult =\n    db.execute_unprepared("CREATE EXTENSION IF NOT EXISTS citext").await?;\n')))}p.isMDXComponent=!0}}]);