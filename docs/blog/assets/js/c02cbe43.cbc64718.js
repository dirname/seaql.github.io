"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[6783],{5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>h});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),i=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},g=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),c=i(a),m=t,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(h,l(l({ref:n},g),{},{components:a})):r.createElement(h,l({ref:n},g))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:t,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4063:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=a(8168),t=(a(6540),a(5680));const o={},l=void 0,p={permalink:"/blog/2024/07/01/graphql-support-with-loco-seaography",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2024-07-01-graphql-support-with-loco-seaography.md",source:"@site/blog/2024-07-01-graphql-support-with-loco-seaography.md",title:"graphql-support-with-loco-seaography",description:'seaography = { version = "1.0.0-rc.4", features = ["with-decimal", "with-chrono"] }',date:"2024-07-01T00:00:00.000Z",formattedDate:"July 1, 2024",tags:[],readingTime:9.375,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"sea-orm-1.0",permalink:"/blog/2024/08/04/sea-orm-1.0"},nextItem:{title:"getting-started-with-loco-seaorm",permalink:"/blog/2024/05/28/getting-started-with-loco-seaorm"}},s={authorsImageUrls:[]},i=[{value:"\u4e3a Seaography \u8bbe\u7f6e SeaORM \u5b9e\u4f53",id:"\u4e3a-seaography-\u8bbe\u7f6e-seaorm-\u5b9e\u4f53",level:2},{value:"\u5b9e\u73b0 GraphQL \u67e5\u8be2\u6839",id:"\u5b9e\u73b0-graphql-\u67e5\u8be2\u6839",level:2},{value:"\u7f16\u5199 Loco \u63a7\u5236\u5668\u4ee5\u5904\u7406 GraphQL \u7aef\u70b9",id:"\u7f16\u5199-loco-\u63a7\u5236\u5668\u4ee5\u5904\u7406-graphql-\u7aef\u70b9",level:2},{value:"\u6253\u5f00 GraphQL Playground",id:"\u6253\u5f00-graphql-playground",level:2},{value:"\u521b\u5efa\u7b14\u8bb0",id:"\u521b\u5efa\u7b14\u8bb0",level:2},{value:"\u67e5\u8be2\u7b14\u8bb0",id:"\u67e5\u8be2\u7b14\u8bb0",level:2},{value:"\u5411 GraphQL \u7aef\u70b9\u6dfb\u52a0\u7528\u6237\u8ba4\u8bc1",id:"\u5411-graphql-\u7aef\u70b9\u6dfb\u52a0\u7528\u6237\u8ba4\u8bc1",level:2},{value:"\u5411 GraphQL Playground \u6dfb\u52a0\u8ba4\u8bc1\u5934",id:"\u5411-graphql-playground-\u6dfb\u52a0\u8ba4\u8bc1\u5934",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2},{value:"SQL Server \u652f\u6301",id:"sql-server-\u652f\u6301",level:2}],g={toc:i},c="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,r.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-markdown"},'---\nslug: 2024-07-01-graphql-support-with-loco-seaography\ntitle: \u4f7f\u7528 Seaography \u4e3a Loco \u6dfb\u52a0 GraphQL \u652f\u6301\nauthor: Billy Chan\nauthor_title: SeaQL \u56e2\u961f\nauthor_url: https://github.com/billy1624\nauthor_image_url: https://avatars.githubusercontent.com/u/30400950?v=4\nimage: https://www.sea-ql.org/blog/img/Loco%20x%20SeaORM.png\ntags: [news]\n---\n\n<img src="/blog/img/Loco%20x%20SeaORM.png" />\n\n\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 [Seaography](https://github.com/SeaQL/seaography) \u4e3a\u6211\u4eec\u7684 Loco \u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u6dfb\u52a0\u4e00\u4e2a GraphQL \u7aef\u70b9\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u9605\u8bfb\u8be5\u7cfb\u5217\u7684\u7b2c\u4e00\u6559\u7a0b [Loco & SeaORM \u5165\u95e8](https://www.sea-ql.org/blog/2024-05-28-getting-started-with-loco-seaorm/)\uff0c\u8bf7\u5148\u9605\u8bfb\u3002\n\n\u5b8c\u6574\u7684\u6e90\u4ee3\u7801\u53ef\u4ee5\u5728 [\u8fd9\u91cc](https://github.com/SeaQL/sea-orm/tree/master/examples/loco_seaography) \u627e\u5230\u3002\n\n## \u4ec0\u4e48\u662f Seaography\n\nSeaography \u662f\u4e00\u4e2a GraphQL \u6846\u67b6\uff0c\u53ef\u4ee5\u4f7f\u7528 SeaORM \u5b9e\u4f53\u6784\u5efa GraphQL \u89e3\u6790\u5668\u3002\u5b83\u9644\u5e26\u4e00\u4e2a CLI \u5de5\u5177\uff0c\u53ef\u4ee5\u4ece\u73b0\u6709\u7684 MySQL\u3001Postgres \u548c SQLite \u6570\u636e\u5e93\u751f\u6210\u53ef\u7f16\u8bd1\u7684 Rust GraphQL \u670d\u52a1\u5668\u3002\n\n## \u6dfb\u52a0\u4f9d\u8d56\n\n\u4fee\u6539 `Cargo.toml` \u5e76\u6dfb\u52a0\u51e0\u4e2a\u4f9d\u8d56\u9879\uff1a`seaography`\u3001`async-graphql`\u3001`async-graphql-axum` \u548c `lazy_static`\u3002\n\n```toml title="loco_seaography/Cargo.toml"\nseaography = { version = "1.0.0-rc.4", features = ["with-decimal", "with-chrono"] }\nasync-graphql = { version = "7.0", features = ["decimal", "chrono", "dataloader", "dynamic-schema"] }\nasync-graphql-axum = { version = "7.0" }\nlazy_static = { version = "1.4" }\ntower-service = { version = "0.3" }\n')),(0,t.yg)("h2",{id:"\u4e3a-seaography-\u8bbe\u7f6e-seaorm-\u5b9e\u4f53"},"\u4e3a Seaography \u8bbe\u7f6e SeaORM \u5b9e\u4f53"),(0,t.yg)("p",null,"Seaography \u5b9e\u4f53\u57fa\u672c\u4e0a\u662f\u5e26\u6709\u4e00\u4e9b\u9644\u52a0\u9879\u7684 SeaORM \u5b9e\u4f53\u3002\u5b83\u4eec\u4e0e SeaORM \u5b8c\u5168\u517c\u5bb9\u3002"),(0,t.yg)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"sea-orm-cli")," \u5e76\u5e26\u4e0a\u989d\u5916\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"--seaography")," \u6807\u5fd7\u6765\u751f\u6210 Seaography \u5b9e\u4f53\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"sea-orm-cli generate entity -o src/models/_entities -u postgres://loco:loco@localhost:5432/loco_seaography_development --seaography\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="loco_seaography/src/models/_entities/notes.rs"',title:'"loco_seaography/src/models/_entities/notes.rs"'},'use sea_orm::entity::prelude::*;\nuse serde::{Serialize, Deserialize};\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]\n#[sea_orm(table_name = "notes")]\npub struct Model {\n    pub created_at: DateTime,\n    pub updated_at: DateTime,\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub title: Option<String>,\n    pub content: Option<String>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::files::Entity")]\n    Files,\n}\n\nimpl Related<super::files::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Files.def()\n    }\n}\n\n+ // \u5b9a\u4e49 `RelatedEntity` \u4ee5\u5c06\u4e00\u4e2a\u5b9e\u4f53\u4e0e\u53e6\u4e00\u4e2a\u5b9e\u4f53\u5173\u8054\n+ #[derive(Copy, Clone, Debug, EnumIter, DeriveRelatedEntity)]\n+ pub enum RelatedEntity {\n+     #[sea_orm(entity = "super::files::Entity")]\n+     Files,\n+ }\n')),(0,t.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5728\u5b9e\u4f53\u6587\u4ef6\u4e2d\u751f\u6210\u4e86\u4e00\u4e2a\u65b0\u7684\u679a\u4e3e ",(0,t.yg)("inlineCode",{parentName:"p"},"RelatedEntity"),"\u3002\u8fd9\u5e2e\u52a9 Seaography \u627e\u5230\u76f8\u5173\u5b9e\u4f53\u4ee5\u8fdb\u884c\u5173\u7cfb\u67e5\u8be2\u3002"),(0,t.yg)("h2",{id:"\u5b9e\u73b0-graphql-\u67e5\u8be2\u6839"},"\u5b9e\u73b0 GraphQL \u67e5\u8be2\u6839"),(0,t.yg)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86 SeaORM \u5b9e\u4f53\u7684\u8bbe\u7f6e\uff0c\u73b0\u5728\u6211\u4eec\u6765\u5b9e\u73b0 Seaography \u7684\u67e5\u8be2\u6839\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u5c06 SeaORM \u548c Async GraphQL \u8fdb\u884c\u8fde\u63a5\uff0c\u5e76\u501f\u52a9 Seaography \u6765\u5b9e\u73b0\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_seaography/src/graphql/query_root.rs"',title:'"loco_seaography/src/graphql/query_root.rs"'},"use async_graphql::dynamic::*;\nuse sea_orm::DatabaseConnection;\nuse seaography::{Builder, BuilderContext};\n\nuse crate::models::_entities::*;\n\nlazy_static::lazy_static! { static ref CONTEXT: BuilderContext = BuilderContext::default(); }\n\npub fn schema(\n    database: DatabaseConnection,\n    depth: usize,\n    complexity: usize,\n) -> Result<Schema, SchemaError> {\n    // Seaography \u67e5\u8be2\u6839\u7684\u6784\u5efa\u5668\n    let mut builder = Builder::new(&CONTEXT, database.clone());\n    // \u6ce8\u518c SeaORM \u5b9e\u4f53\n    seaography::register_entities!(\n        builder,\n        // \u5728\u6b64\u5904\u5217\u51fa\u6211\u4eec\u60f3\u8981\u5305\u542b\u5728 GraphQL \u7aef\u70b9\u4e2d\u7684\u6240\u6709\u6a21\u578b\n        [files, notes, users]\n    );\n    // \u914d\u7f6e async GraphQL \u9650\u5236\n    let schema = builder\n        .schema_builder()\n        // \u6df1\u5ea6\u662f\u5b57\u6bb5\u7684\u5d4c\u5957\u7ea7\u522b\u6570\u91cf\n        .limit_depth(depth)\n        // \u590d\u6742\u5ea6\u662f\u67e5\u8be2\u4e2d\u7684\u5b57\u6bb5\u6570\u91cf\n        .limit_complexity(complexity);\n    // \u6700\u540e\u5305\u62ec SeaORM \u6570\u636e\u5e93\u8fde\u63a5\n    schema.data(database).finish()\n}\n")),(0,t.yg)("h2",{id:"\u7f16\u5199-loco-\u63a7\u5236\u5668\u4ee5\u5904\u7406-graphql-\u7aef\u70b9"},"\u7f16\u5199 Loco \u63a7\u5236\u5668\u4ee5\u5904\u7406 GraphQL \u7aef\u70b9"),(0,t.yg)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"async-graphql")," \u4e2d\u5185\u7f6e\u7684 GraphQL playground UI \u6765\u6d4b\u8bd5 GraphQL \u7aef\u70b9\u3002\u5e76\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"async_graphql_axum")," \u548c Seaography \u6765\u5904\u7406 GraphQL \u8bf7\u6c42\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_seaography/src/controllers/graphql.rs"',title:'"loco_seaography/src/controllers/graphql.rs"'},'use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};\nuse axum::{body::Body, extract::Request};\nuse loco_rs::prelude::*;\nuse tower_service::Service;\n\nuse crate::graphql::query_root;\n\n// GraphQL playground UI\nasync fn graphql_playground() -> Result<Response> {\n    // `GraphQLPlaygroundConfig` \u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\n    // \u5373 GraphQL \u5904\u7406\u7a0b\u5e8f\u7684 URL: `/api/graphql`\n    let res = playground_source(GraphQLPlaygroundConfig::new("/api/graphql"));\n\n    Ok(Response::new(res.into()))\n}\n\nasync fn graphql_handler(\n    State(ctx): State<AppContext>,\n    req: Request<Body>,\n) -> Result<Response> {\n    const DEPTH: usize = 10;\n    const COMPLEXITY: usize = 100;\n    // \u6784\u5efa GraphQL \u67e5\u8be2\u6839\n    let schema = query_root::schema(ctx.db.clone(), DEPTH, COMPLEXITY).unwrap();\n    // GraphQL \u5904\u7406\u7a0b\u5e8f\n    let mut graphql_handler = async_graphql_axum::GraphQL::new(schema);\n    // \u6267\u884c GraphQL \u8bf7\u6c42\u5e76\u83b7\u53d6\u7ed3\u679c\n    let res = graphql_handler.call(req).await.unwrap();\n\n    Ok(res)\n}\n\npub fn routes() -> Routes {\n    // \u5b9a\u4e49\u8def\u7531\n    Routes::new()\n        // \u6211\u4eec\u5c06\u6240\u6709 GraphQL \u8def\u7531\u653e\u5728 `graphql` \u524d\u7f00\u540e\u9762\n        .prefix("graphql")\n        // GraphQL playground \u9875\u9762\u662f GET \u8bf7\u6c42\n        .add("/", get(graphql_playground))\n        // GraphQL \u5904\u7406\u7a0b\u5e8f\u662f POST \u8bf7\u6c42\n        .add("/", post(graphql_handler))\n}\n')),(0,t.yg)("h2",{id:"\u6253\u5f00-graphql-playground"},"\u6253\u5f00 GraphQL Playground"),(0,t.yg)("p",null,"\u7f16\u8bd1\u5e76\u8fd0\u884c Loco \u5e94\u7528\u7a0b\u5e8f\uff0c\u7136\u540e\u8bbf\u95ee ",(0,t.yg)("a",{parentName:"p",href:"http://localhost:3000/api/graphql"},"http://localhost:3000/api/graphql"),"\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},'$ cargo run start\n\n    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.60s\n     Running `target/debug/loco_seaography-cli start`\n2024-06-24T08:04:52.173924Z  INFO app: loco_rs::config: loading environment from selected_path="config/development.yaml" environment=development\n2024-06-24T08:04:52.180447Z  WARN app: loco_rs::boot: pretty backtraces are enabled (this is great for development but has a runtime cost for production. disable with `logger.pretty_backtrace` in your config yaml) environment=development\n2024-06-24T08:04:52.272392Z  INFO app: loco_rs::db: auto migrating environment=development\n2024-06-24T08:04:52.275198Z  INFO app: sea_orm_migration::migrator: Applying all pending migrations environment=development\n2024-06-24T08:04:52.280720Z  INFO app: sea_orm_migration::migrator: No pending migrations environment=development\n2024-06-24T08:04:52.281280Z  INFO app: loco_rs::boot: initializers loaded initializers="" environment=development\n2024-06-24T08:04:52.308827Z  INFO app: loco_rs::controller::app_routes: [GET] /api/_ping environment=development\n2024-06-24T08:04:52.308936Z  INFO app: loco_rs::controller::app_routes: [GET] /api/_health environment=development\n2024-06-24T08:04:52.309021Z  INFO app: loco_rs::controller::app_routes: [GET] /api/notes environment=development\n2024-06-24T08:04:52.309088Z  INFO app: loco_rs::controller::app_routes: [POST] /api/notes environment=development\n2024-06-24T08:04:52.309158Z  INFO app: loco_rs::controller::app_routes: [GET] /api/notes/:id environment=development\n2024-06-24T08:04:52.309234Z  INFO app: loco_rs::controller::app_routes: [DELETE] /api/notes/:id environment=development\n2024-06-24T08:04:52.309286Z  INFO app: loco_rs::controller::app_routes: [POST] /api/notes/:id environment=development\n2024-06-24T08:04:52.309334Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/register environment=development\n2024-06-24T08:04:52.309401Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/verify environment=development\n2024-06-24T08:04:52.309471Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/login environment=development\n2024-06-24T08:04:52.309572Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/forgot environment=development\n2024-06-24T08:04:52.309662Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/reset environment=development\n2024-06-24T08:04:52.309752Z  INFO app: loco_rs::controller::app_routes: [GET] /api/user/current environment=development\n2024-06-24T08:04:52.309827Z  INFO app: loco_rs::controller::app_routes: [POST] /api/files/upload/:notes_id environment=development\n2024-06-24T08:04:52.309910Z  INFO app: loco_rs::controller::app_routes: [GET] /api/files/list/:notes_id environment=development\n2024-06-24T08:04:52.309997Z  INFO app: loco_rs::controller::app_routes: [GET] /api/files/view/:files_id environment=development\n2024-06-24T08:04:52.310088Z  INFO app: loco_rs::controller::app_routes: [GET] /api/graphql environment=development\n2024-06-24T08:04:52.310172Z  INFO app: loco_rs::controller::app_routes: [POST] /api/graphql environment=development\n2024-06-24T08:04:52.310469Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding limit payload data="5mb" environment=development\n2024-06-24T08:04:52.310615Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding log trace id environment=development\n2024-06-24T08:04:52.310934Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding cors environment=development\n2024-06-24T08:04:52.311008Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding etag layer environment=development\n\n                      \u2584     \u2580\n                                 \u2580  \u2584\n                  \u2584       \u2580     \u2584  \u2584 \u2584\u2580\n                                    \u2584 \u2580\u2584\u2584\n                        \u2584     \u2580    \u2580  \u2580\u2584\u2580\u2588\u2584\n                                          \u2580\u2588\u2584\n\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584   \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2580\u2580\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2580\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2580\u2580\u2580 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2584\u2588\u2584\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2584\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2584\u2584\u2584 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588  \u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2580\n   \u2580\u2580\u2580\u2588\u2588\u2584 \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2588\u2588\u2580\n       \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\n                https://loco.rs\n\nenvironment: development\n   database: automigrate\n     logger: debug\ncompilation: debug\n      modes: server\n\nlistening on [::]:3000\n')),(0,t.yg)("h2",{id:"\u521b\u5efa\u7b14\u8bb0"},"\u521b\u5efa\u7b14\u8bb0"),(0,t.yg)("p",null,"\u4f7f\u7528 GraphQL \u53d8\u5f02\u521b\u5efa\u65b0\u7684\u7b14\u8bb0\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  notesCreateOne(\n    data: {\n      id: 1\n      title: "Notes 001"\n      content: "Content 001"\n      createdAt: "2024-06-24 00:00:00"\n      updatedAt: "2024-06-24 00:00:00"\n    }\n  ) {\n    id\n    title\n    content\n    createdAt\n    updatedAt\n  }\n}\n')),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20create.png",alt:null})),(0,t.yg)("h2",{id:"\u67e5\u8be2\u7b14\u8bb0"},"\u67e5\u8be2\u7b14\u8bb0"),(0,t.yg)("p",null,"\u67e5\u8be2\u5305\u542b\u76f8\u5173\u6587\u4ef6\u7684\u7b14\u8bb0\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-graphql"},"query {\n  notes {\n    nodes {\n      id\n      title\n      content\n      files {\n        nodes {\n          id\n          filePath\n        }\n      }\n    }\n  }\n}\n")),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20query.png",alt:null})),(0,t.yg)("h2",{id:"\u5411-graphql-\u7aef\u70b9\u6dfb\u52a0\u7528\u6237\u8ba4\u8bc1"},"\u5411 GraphQL \u7aef\u70b9\u6dfb\u52a0\u7528\u6237\u8ba4\u8bc1"),(0,t.yg)("p",null,"\u6211\u4eec\u7684 GraphQL \u5904\u7406\u7a0b\u5e8f\u53ef\u4ee5\u5728\u6ca1\u6709\u7528\u6237\u8ba4\u8bc1\u7684\u60c5\u51b5\u4e0b\u8bbf\u95ee\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5e0c\u671b\u53ea\u5141\u8bb8\u5df2\u767b\u5f55\u7528\u6237\u8bbf\u95ee GraphQL \u5904\u7406\u7a0b\u5e8f\u3002"),(0,t.yg)("p",null,"\u4e3a\u6b64\uff0c\u6211\u4eec\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"_auth: auth::JWT")," \u6dfb\u52a0\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"graphql_handler")," \u51fd\u6570\u4e2d\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="loco_seaography/src/controllers/graphql.rs"',title:'"loco_seaography/src/controllers/graphql.rs"'},"async fn graphql_handler(\n+   _auth: auth::JWT,\n    State(ctx): State<AppContext>,\n    req: Request<Body>,\n) -> Result<Response> {\n    const DEPTH: usize = 10;\n    const COMPLEXITY: usize = 100;\n    // \u6784\u5efa GraphQL \u67e5\u8be2\u6839\n    let schema = query_root::schema(ctx.db.clone(), DEPTH, COMPLEXITY).unwrap();\n    // GraphQL \u5904\u7406\u7a0b\u5e8f\n    let mut graphql_handler = async_graphql_axum::GraphQL::new(schema);\n    // \u6267\u884c GraphQL \u8bf7\u6c42\u5e76\u83b7\u53d6\u7ed3\u679c\n    let res = graphql_handler.call(req).await.unwrap();\n\n    Ok(res)\n}\n")),(0,t.yg)("p",null,"\u7136\u540e\uff0c\u8fd0\u884c Loco \u5e94\u7528\u7a0b\u5e8f\u5e76\u518d\u6b21\u8bbf\u95ee GraphQL playground\u3002\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u672a\u6388\u6743\u9519\u8bef\u3002"),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20unauthorize.png",alt:null})),(0,t.yg)("h2",{id:"\u5411-graphql-playground-\u6dfb\u52a0\u8ba4\u8bc1\u5934"},"\u5411 GraphQL Playground \u6dfb\u52a0\u8ba4\u8bc1\u5934"),(0,t.yg)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u901a\u8fc7\u7528\u76f8\u5e94\u7684\u7535\u5b50\u90ae\u4ef6\u548c\u5bc6\u7801\u767b\u5f55\u7528\u6237\u5e10\u6237\u751f\u6210\u4e00\u4e2a\u6709\u6548\u7684\u6388\u6743\u4ee4\u724c\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},'$ curl --location \'http://localhost:3000/api/auth/login\' \\\n--data-raw \'{\n    "email": "cwchan.billy@gmail.com",\n    "password": "password"\n}\'\n\n{\n    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiIwN2NjMDk5Ni03YWYxLTQ5YmYtYmY2NC01OTg4ZjFhODM2OTkiLCJleHAiOjE3MTk4MjIzMzN9.CgKp_aE-DyAuBJIvFGJ6l68ooAlEiJGhjWeaetDtHrupaYDm0ldVxf24vj3fPgkCqZ_njv2129n2pSCzHOjaow",\n    "pid": "07cc0996-7af1-49bf-bf64-5988f1a83699",\n    "name": "Billy",\n    "is_verified": true\n}\n')),(0,t.yg)("p",null,"\u8f6c\u5230 GraphQL playground \u7684\u8bbe\u7f6e\u9875\u9762\u3002\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"request.globalHeaders")," \u4e0b\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u5934\uff1a"),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20authorization.png",alt:null})),(0,t.yg)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u5f80\u5e38\u4e00\u6837\u8bbf\u95ee GraphQL \u5904\u7406\u7a0b\u5e8f\u3002"),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20query.png",alt:null})),(0,t.yg)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,t.yg)("p",null,"\u5728 Loco \u5e94\u7528\u7a0b\u5e8f\u4e2d\u6dfb\u52a0 GraphQL \u652f\u6301\u975e\u5e38\u7b80\u5355\uff0c\u5f97\u76ca\u4e8e Seaography\u3002\u8fd9\u662f\u4e00\u4e2a\u4eba\u6027\u5316\u7684\u5e93\uff0c\u5c06 SeaORM \u5b9e\u4f53\u8f6c\u6362\u4e3a GraphQL \u8282\u70b9\uff0c\u5e76\u63d0\u4f9b\u4e00\u7cfb\u5217\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7ed3\u5408\u4ee3\u7801\u751f\u6210\u5668\uff0c\u4f7f GraphQL API \u7684\u6784\u5efa\u53d8\u5f97\u8f7b\u800c\u6613\u4e3e\u3002"),(0,t.yg)("h2",{id:"sql-server-\u652f\u6301"},"SQL Server \u652f\u6301"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM-X/"},"SeaORM \u7684 SQL Server")," \u73b0\u5df2\u4f5c\u4e3a\u95ed\u6d4b\u8bd5\u7248\u63d0\u4f9b\u3002\u5982\u679c\u4f60\u611f\u5174\u8da3\uff0c\u8bf7\u5728 ",(0,t.yg)("a",{parentName:"p",href:"https://forms.office.com/r/1MuRPJmYBR"},"\u8fd9\u91cc")," \u6ce8\u518c\u3002"),(0,t.yg)("p",null,"\u4ece ",(0,t.yg)("inlineCode",{parentName:"p"},"sea-orm")," \u8fc1\u79fb\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"sea-orm-x")," \u5341\u5206\u7b80\u5355\uff0c\u53ea\u9700\u4e24\u6b65\u3002\u9996\u5148\uff0c\u5c06\u73b0\u6709\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"sea-orm")," \u4f9d\u8d56\u9879\u66f4\u65b0\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"sea-orm-x")," \u5e76\u542f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"sqlz-mssql")," \u7279\u6027\u3002\u8bf7\u6ce8\u610f\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4e3a\u4e0a\u6e38\u4f9d\u8d56\u9879\u6253\u8865\u4e01 SeaORM \u4f9d\u8d56\u9879\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-orm = { path = "<SEA_ORM_X_ROOT>/sea-orm-x", features = ["runtime-async-std-rustls", "sqlz-mssql"] }\nsea-orm-migration = { path = "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-migration" }\n\n# \u4e3a\u4e0a\u6e38\u4f9d\u8d56\u9879\u8865\u4e01 SeaORM \u4f9d\u8d56\u9879\n[patch.crates-io]\nsea-orm = { path = "<SEA_ORM_X_ROOT>/sea-orm-x" }\nsea-orm-migration = { path = "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-migration" }\n')),(0,t.yg)("p",null,"\u5176\u6b21\uff0c\u66f4\u65b0\u8fde\u63a5\u5b57\u7b26\u4e32\u4ee5\u8fde\u63a5\u5230 MSSQL \u6570\u636e\u5e93\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# \u5982\u679c\u6a21\u5f0f\u662f `dbo`\uff0c\u53ea\u9700\u5199\uff1a\nmssql://username:password@host/database\n\n# \u6216\u8005\uff0c\u901a\u8fc7\u63d0\u4f9b\u989d\u5916\u7684 `currentSchema` \u67e5\u8be2\u53c2\u6570\u6307\u5b9a\u6a21\u5f0f\u540d\u79f0\u3002\nmssql://username:password@host/database?currentSchema=my_schema\n\n# \u4f60\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u989d\u5916\u7684 trustCertificate \u67e5\u8be2\u53c2\u6570\u6765\u4fe1\u4efb\u5bf9\u7b49\u8bc1\u4e66\u3002\nmssql://username:password@host/database?trustCertificate=true\n")),(0,t.yg)("p",null,"SeaORM X \u5b8c\u5168\u652f\u6301 Loco \u5e76\u4e0e\u8bb8\u591a Web \u6846\u67b6\u65e0\u7f1d\u96c6\u6210\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Actix"),(0,t.yg)("li",{parentName:"ul"},"Axum"),(0,t.yg)("li",{parentName:"ul"},"Async GraphQL"),(0,t.yg)("li",{parentName:"ul"},"jsonrpsee"),(0,t.yg)("li",{parentName:"ul"},"Loco"),(0,t.yg)("li",{parentName:"ul"},"Poem"),(0,t.yg)("li",{parentName:"ul"},"Salvo"),(0,t.yg)("li",{parentName:"ul"},"Tonic")),(0,t.yg)("p",null,"\u795d\u7f16\u7801\u6109\u5feb\uff01"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0}}]);