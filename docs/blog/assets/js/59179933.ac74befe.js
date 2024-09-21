"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[65],{5680:(a,t,e)=>{e.d(t,{xA:()=>c,yg:()=>y});var r=e(6540);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function o(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function l(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function s(a,t){if(null==a)return{};var e,r,n=function(a,t){if(null==a)return{};var e,r,n={},o=Object.keys(a);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var i=r.createContext({}),g=function(a){var t=r.useContext(i),e=t;return a&&(e="function"==typeof a?a(t):l(l({},t),a)),e},c=function(a){var t=g(a.components);return r.createElement(i.Provider,{value:t},a.children)},m="mdxType",p={inlineCode:"code",wrapper:function(a){var t=a.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(a,t){var e=a.components,n=a.mdxType,o=a.originalType,i=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),m=g(e),v=n,y=m["".concat(i,".").concat(v)]||m[v]||p[v]||o;return e?r.createElement(y,l(l({ref:t},c),{},{components:e})):r.createElement(y,l({ref:t},c))}));function y(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var o=e.length,l=new Array(o);l[0]=v;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=a,s[m]="string"==typeof a?a:n,l[1]=s;for(var g=2;g<o;g++)l[g]=e[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}v.displayName="MDXCreateElement"},9671:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var r=e(8168),n=(e(6540),e(5680));const o={slug:"2022-02-07-whats-new-in-0.6.0",title:"SeaORM 0.6.0 \u65b0\u7279\u6027",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},l=void 0,s={permalink:"/blog/2022-02-07-whats-new-in-0.6.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-02-07-whats-new-in-0.6.0.md",source:"@site/blog/2022-02-07-whats-new-in-0.6.0.md",title:"SeaORM 0.6.0 \u65b0\u7279\u6027",description:"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03\u4eca\u5929\u53d1\u5e03\u4e86 SeaORM 0.6.0\uff01\u4ee5\u4e0b\u662f\u4e00\u4e9b\u7279\u6027\u4eae\u70b9 \ud83c\udf1f\uff1a",date:"2022-02-07T00:00:00.000Z",formattedDate:"February 7, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:5.165,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-02-07-whats-new-in-0.6.0",title:"SeaORM 0.6.0 \u65b0\u7279\u6027",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Google Summer of Code 2022",permalink:"/blog/gsoc-2022"},nextItem:{title:"SeaORM 0.5.0 \u66f4\u65b0\u5185\u5bb9",permalink:"/blog/2022-01-01-whats-new-in-0.5.0"}},i={authorsImageUrls:[void 0]},g=[{value:"\u6570\u636e\u8fc1\u79fb",id:"\u6570\u636e\u8fc1\u79fb",level:2},{value:"\u6a21\u578b\u4e2d\u652f\u6301 DateTimeUtc \u548c DateTimeLocal",id:"\u6a21\u578b\u4e2d\u652f\u6301-datetimeutc-\u548c-datetimelocal",level:2},{value:"\u6a21\u62df\u8fde\u63a5\u7ed3\u679c",id:"\u6a21\u62df\u8fde\u63a5\u7ed3\u679c",level:2},{value:"\u652f\u6301\u6700\u5927\u8fde\u63a5\u751f\u547d\u5468\u671f\u9009\u9879",id:"\u652f\u6301\u6700\u5927\u8fde\u63a5\u751f\u547d\u5468\u671f\u9009\u9879",level:2},{value:"SeaORM CLI \u4e0e\u4ee3\u7801\u751f\u6210\u66f4\u65b0",id:"seaorm-cli-\u4e0e\u4ee3\u7801\u751f\u6210\u66f4\u65b0",level:2},{value:"\u8d5e\u52a9",id:"\u8d5e\u52a9",level:2},{value:"\u793e\u533a",id:"\u793e\u533a",level:2}],c={toc:g},m="wrapper";function p(a){let{components:t,...e}=a;return(0,n.yg)(m,(0,r.A)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03\u4eca\u5929\u53d1\u5e03\u4e86 SeaORM ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.6.0"},(0,n.yg)("inlineCode",{parentName:"a"},"0.6.0")),"\uff01\u4ee5\u4e0b\u662f\u4e00\u4e9b\u7279\u6027\u4eae\u70b9 \ud83c\udf1f\uff1a"),(0,n.yg)("h2",{id:"\u6570\u636e\u8fc1\u79fb"},"\u6570\u636e\u8fc1\u79fb"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/335"},"#335"),"] \u4f7f\u7528 SeaQuery \u6216\u539f\u59cb SQL \u7f16\u5199\u7684\u8fc1\u79fb\u6765\u8fdb\u884c\u6570\u636e\u5e93\u67b6\u6784\u7684\u7248\u672c\u63a7\u5236\u3002\u67e5\u770b ",(0,n.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/migration/setting-up-migration"},"\u8fc1\u79fb\u6587\u6863")," \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u901a\u8fc7\u6267\u884c ",(0,n.yg)("inlineCode",{parentName:"p"},"sea-orm-cli migrate init")," \u8bbe\u7f6e\u8fc1\u79fb\u76ee\u5f55\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"migration\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 m20220101_000001_create_table.rs\n    \u2514\u2500\u2500 main.rs\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728 SeaQuery \u4e2d\u5b9a\u4e49\u8fc1\u79fb\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_schema::migration::prelude::*;\n\npub struct Migration;\n\nimpl MigrationName for Migration {\n    fn name(&self) -> &str {\n        "m20220101_000001_create_table"\n    }\n}\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table( ... )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table( ... )\n            .await\n    }\n}\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u901a\u8fc7\u6267\u884c ",(0,n.yg)("inlineCode",{parentName:"p"},"sea-orm-cli migrate")," \u5e94\u7528\u8fc1\u79fb\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate\n\u5e94\u7528\u6240\u6709\u5f85\u5904\u7406\u7684\u8fc1\u79fb\n\u5e94\u7528\u8fc1\u79fb 'm20220101_000001_create_table'\n\u8fc1\u79fb 'm20220101_000001_create_table' \u5df2\u6210\u529f\u5e94\u7528\n")))),(0,n.yg)("div",{class:"row"},(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8bbe\u8ba1\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Chris Tsang")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8d21\u732e\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.yg)("h2",{id:"\u6a21\u578b\u4e2d\u652f\u6301-datetimeutc-\u548c-datetimelocal"},"\u6a21\u578b\u4e2d\u652f\u6301 DateTimeUtc \u548c DateTimeLocal"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/489"},"#489"),"] \u5728\u6a21\u578b\u4e2d\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"DateTimeLocal")," (",(0,n.yg)("inlineCode",{parentName:"p"},"chrono::DateTime<Local>"),") \u6216 ",(0,n.yg)("inlineCode",{parentName:"p"},"DateTimeUtc")," (",(0,n.yg)("inlineCode",{parentName:"p"},"chrono::DateTime<Utc>"),") \u7c7b\u578b\u5c5e\u6027\u8868\u793a\u6570\u636e\u5e93\u7684\u65f6\u95f4\u6233\u5217\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "satellite")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub satellite_name: String,\n    pub launch_date: DateTimeUtc,\n    pub deployment_date: DateTimeLocal,\n}\n')),(0,n.yg)("div",{class:"row"},(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u63d0\u8bae\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/lz1998"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/9082086?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"lz1998"))),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Chris Tsang")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8d21\u732e\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/charleschege"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/33346042?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Charles\xb7Chege"))),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.yg)("h2",{id:"\u6a21\u62df\u8fde\u63a5\u7ed3\u679c"},"\u6a21\u62df\u8fde\u63a5\u7ed3\u679c"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/455"},"#455"),"] \u6784\u5efa\u76f8\u5173\u6a21\u578b\u7684\u6a21\u62df\u7ed3\u679c\uff0c\u4f7f\u7528\u6a21\u578b\u7684\u5143\u7ec4\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'let db = MockDatabase::new(DbBackend::Postgres)\n    // \u6a21\u62df\u86cb\u7cd5\u4e0e\u5176\u76f8\u5173\u6c34\u679c\u7684\u7ed3\u679c\n    .append_query_results(vec![vec![(\n        cake::Model {\n            id: 1,\n            name: "\u82f9\u679c\u86cb\u7cd5".to_owned(),\n        },\n        fruit::Model {\n            id: 2,\n            name: "\u82f9\u679c".to_owned(),\n            cake_id: Some(1),\n        },\n    )]])\n    .into_connection();\n\nassert_eq!(\n    cake::Entity::find()\n        .find_also_related(fruit::Entity)\n        .all(&db)\n        .await?,\n    vec![(\n        cake::Model {\n            id: 1,\n            name: "\u82f9\u679c\u86cb\u7cd5".to_owned(),\n        },\n        Some(fruit::Model {\n            id: 2,\n            name: "\u82f9\u679c".to_owned(),\n            cake_id: Some(1),\n        })\n    )]\n);\n')),(0,n.yg)("div",{class:"row"},(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u63d0\u8bae\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/cemoktra"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/15634263?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Bastian")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8d21\u732e\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/cemoktra"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/15634263?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Bastian"))),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.yg)("h2",{id:"\u652f\u6301\u6700\u5927\u8fde\u63a5\u751f\u547d\u5468\u671f\u9009\u9879"},"\u652f\u6301\u6700\u5927\u8fde\u63a5\u751f\u547d\u5468\u671f\u9009\u9879"),(0,n.yg)("p",null,"[",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/493"},"#493"),"] \u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"max_lifetime")," \u65b9\u6cd5\u8bbe\u7f6e\u5355\u4e2a\u8fde\u63a5\u7684\u6700\u5927\u751f\u547d\u5468\u671f\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt.max_lifetime(Duration::from_secs(8))\n    .max_connections(100)\n    .min_connections(5)\n    .connect_timeout(Duration::from_secs(8))\n    .idle_timeout(Duration::from_secs(8))\n    .sqlx_logging(true);\n\nlet db = Database::connect(opt).await?;\n')),(0,n.yg)("div",{class:"row"},(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u63d0\u8bae\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8d21\u732e\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.yg)("h2",{id:"seaorm-cli-\u4e0e\u4ee3\u7801\u751f\u6210\u66f4\u65b0"},"SeaORM CLI \u4e0e\u4ee3\u7801\u751f\u6210\u66f4\u65b0"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/433"},"#433"),"] \u4e3a\u672a\u4ee5\u86c7\u5f62\u547d\u540d\u7684\u5217\u751f\u6210 ",(0,n.yg)("inlineCode",{parentName:"li"},"column_name")," \u5b8f\u5c5e\u6027"),(0,n.yg)("li",{parentName:"ul"},"[",(0,n.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/335"},"#335"),"] \u5f15\u5165\u8fc1\u79fb\u5b50\u547d\u4ee4 ",(0,n.yg)("inlineCode",{parentName:"li"},"sea-orm-cli migrate"))),(0,n.yg)("div",{class:"row"},(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u63d0\u8bae\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Gabriel-Paulucci"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/43076727?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Gabriel Paulucci")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8d21\u732e\u8005\uff1a",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.yg)("h2",{id:"\u8d5e\u52a9"},"\u8d5e\u52a9"),(0,n.yg)("p",null,"\u6211\u4eec\u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," \u8d44\u6599\u5df2\u4e0a\u7ebf\uff01\u5982\u679c\u60a8\u613f\u610f\uff0c\u5c0f\u989d\u6350\u6b3e\u5c06\u4e0d\u80dc\u611f\u6fc0\u3002"),(0,n.yg)("p",null,"\u7279\u522b\u611f\u8c22\u6211\u4eec\u7684\u8d5e\u52a9\u5546 \ud83d\ude07\uff1a"),(0,n.yg)("div",{class:"row"},(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Shane Sveller")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,n.yg)("div",{class:"col col--6 margin-bottom--md"},(0,n.yg)("div",{class:"avatar"},(0,n.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,n.yg)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,n.yg)("div",{class:"avatar__intro"},(0,n.yg)("div",{class:"avatar__name"},"\u672a\u547d\u540d\u8d5e\u52a9\u5546"))))),(0,n.yg)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,n.yg)("p",null,"SeaQL \u662f\u4e00\u4e2a\u793e\u533a\u9a71\u52a8\u7684\u9879\u76ee\u3002\u6211\u4eec\u6b22\u8fce\u60a8\u53c2\u4e0e\u3001\u8d21\u732e\uff0c\u5e76\u5171\u540c\u4e3a Rust \u7684\u672a\u6765\u800c\u52aa\u529b\u3002"),(0,n.yg)("p",null,"\u8fd9\u662f SeaORM ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/7"},(0,n.yg)("inlineCode",{parentName:"a"},"0.7.x"))," \u7684\u8def\u7ebf\u56fe\u3002"))}p.isMDXComponent=!0}}]);