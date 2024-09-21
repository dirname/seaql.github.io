"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[67397],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const l={},i="\u4f7f\u7528 SQLite",s={unversionedId:"write-test/sqlite",id:"write-test/sqlite",title:"\u4f7f\u7528 SQLite",description:"\u5982\u679c\u60a8\u60f3\u6d4b\u8bd5\u4e0d\u9700\u8981\u7279\u5b9a\u4e8e\u6570\u636e\u5e93\u529f\u80fd\u7684\u5e94\u7528\u903b\u8f91\uff0cSQLite \u5c06\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002",source:"@site/docs/07-write-test/03-sqlite.md",sourceDirName:"07-write-test",slug:"/write-test/sqlite",permalink:"/SeaORM/docs/next/write-test/sqlite",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/07-write-test/03-sqlite.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1658049747,formattedLastUpdatedAt:"Jul 17, 2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mock \u63a5\u53e3",permalink:"/SeaORM/docs/next/write-test/mock"},next:{title:"\u81ea\u5b9a\u4e49\u9009\u62e9",permalink:"/SeaORM/docs/next/advanced-query/custom-select"}},o={},c=[{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:2},{value:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6a21\u5f0f",id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6a21\u5f0f",level:2},{value:"\u6267\u884c\u6d4b\u8bd5",id:"\u6267\u884c\u6d4b\u8bd5",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4f7f\u7528-sqlite"},"\u4f7f\u7528 SQLite"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u6d4b\u8bd5\u4e0d\u9700\u8981\u7279\u5b9a\u4e8e\u6570\u636e\u5e93\u529f\u80fd\u7684\u5e94\u7528\u903b\u8f91\uff0cSQLite \u5c06\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002"),(0,a.yg)("p",null,"\u53ef\u4ee5\u67e5\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/tests/basic.rs"},"\u8fd9\u91cc"),"\u3002"),(0,a.yg)("h2",{id:"\u96c6\u6210\u6d4b\u8bd5"},"\u96c6\u6210\u6d4b\u8bd5"),(0,a.yg)("p",null,"\u5efa\u8bae\u5728 ",(0,a.yg)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html"},"\u96c6\u6210\u6d4b\u8bd5")," \u4e2d\u6267\u884c\u66f4\u590d\u6742\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u5c55\u793a\u4e86\u8fde\u63a5\u5230\u6570\u636e\u5e93\u3001\u8bbe\u7f6e\u6a21\u5f0f\u548c\u6267\u884c\u6d4b\u8bd5\u7684\u6b65\u9aa4\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'async fn main() -> Result<(), DbErr> {\n    // \u8fde\u63a5\u5230 SQLite\n    let db = Database::connect("sqlite::memory:").await?;\n\n    // \u8bbe\u7f6e\u6570\u636e\u5e93\u6a21\u5f0f\n    setup_schema(&db).await?;\n\n    // \u6267\u884c\u6d4b\u8bd5\n    testcase(&db).await?;\n\n    Ok(())\n}\n')),(0,a.yg)("h2",{id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6a21\u5f0f"},"\u8bbe\u7f6e\u6570\u636e\u5e93\u6a21\u5f0f"),(0,a.yg)("p",null,"\u4e3a\u4e86\u5728 SQLite \u6570\u636e\u5e93\u4e2d\u521b\u5efa\u7528\u4e8e\u6d4b\u8bd5\u7684\u8868\uff0c\u800c\u4e0d\u662f\u624b\u52a8\u7f16\u5199 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,a.yg)("inlineCode",{parentName:"a"},"TableCreateStatement")),"\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity"))," \u4ece ",(0,a.yg)("inlineCode",{parentName:"p"},"Entity")," \u4e2d\u6d3e\u751f\u5b83\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"async fn setup_schema(db: &DbConn) {\n\n    // \u8bbe\u7f6e\u6a21\u5f0f\u52a9\u624b\n    let schema = Schema::new(DbBackend::Sqlite);\n\n    // \u4ece Entity \u6d3e\u751f\n    let stmt: TableCreateStatement = schema.create_table_from_entity(MyEntity);\n\n    // \u6216\u8005\u624b\u52a8\u8bbe\u7f6e\n    assert_eq!(\n        stmt.build(SqliteQueryBuilder),\n        Table::create()\n            .table(MyEntity)\n            .col(\n                ColumnDef::new(MyEntity::Column::Id)\n                    .integer()\n                    .not_null()\n            )\n            //...\n            .build(SqliteQueryBuilder)\n    );\n\n    // \u6267\u884c\u521b\u5efa\u8868\u8bed\u53e5\n    let result = db\n        .execute(db.get_database_backend().build(&stmt))\n        .await;\n}\n")),(0,a.yg)("h2",{id:"\u6267\u884c\u6d4b\u8bd5"},"\u6267\u884c\u6d4b\u8bd5"),(0,a.yg)("p",null,"\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u5e76\u5bf9\u7ed3\u679c\u8fdb\u884c\u65ad\u8a00\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'async fn testcase(db: &DbConn) -> Result<(), DbErr> {\n\n    let baker_bob = baker::ActiveModel {\n        name: Set("Baker Bob".to_owned()),\n        contact_details: Set(serde_json::json!({\n            "mobile": "+61424000000",\n            "home": "0395555555",\n            "address": "12 Test St, Testville, Vic, Australia"\n        })),\n        bakery_id: Set(2),\n        ..Default::default()\n    };\n\n    let baker_insert_res = Baker::insert(baker_bob)\n        .exec(db)\n        .await\n        .expect("\u65e0\u6cd5\u63d2\u5165\u9762\u5305\u5e08");\n\n    assert_eq!(baker_insert_res.last_insert_id, 1);\n\n    Ok(())\n}\n')))}m.isMDXComponent=!0}}]);