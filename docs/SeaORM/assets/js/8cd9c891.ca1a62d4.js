"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[77154],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=g(n),u=a,y=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var g=2;g<i;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const i={},o="\u8bbe\u7f6e\u8fc1\u79fb",l={unversionedId:"migration/setting-up-migration",id:"version-0.9.x/migration/setting-up-migration",title:"\u8bbe\u7f6e\u8fc1\u79fb",description:"\u4f7f\u7528 SeaQuery \u6216 SQL \u7f16\u5199\u7684\u8fc1\u79fb\u6765\u7248\u672c\u63a7\u5236\u60a8\u7684\u6570\u636e\u5e93\u6a21\u5f0f\u3002",source:"@site/versioned_docs/version-0.9.x/03-migration/01-setting-up-migration.md",sourceDirName:"03-migration",slug:"/migration/setting-up-migration",permalink:"/SeaORM/docs/0.9.x/migration/setting-up-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/03-migration/01-setting-up-migration.md",tags:[],version:"0.9.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1658914813,formattedLastUpdatedAt:"Jul 27, 2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u8bd5\u65e5\u5fd7",permalink:"/SeaORM/docs/0.9.x/install-and-config/debug-log"},next:{title:"\u7f16\u5199\u8fc1\u79fb",permalink:"/SeaORM/docs/0.9.x/migration/writing-migration"}},s={},g=[{value:"\u8fc1\u79fb\u8868",id:"\u8fc1\u79fb\u8868",level:2},{value:"\u521b\u5efa\u8fc1\u79fb\u76ee\u5f55",id:"\u521b\u5efa\u8fc1\u79fb\u76ee\u5f55",level:2},{value:"\u5de5\u4f5c\u533a\u7ed3\u6784",id:"\u5de5\u4f5c\u533a\u7ed3\u6784",level:2},{value:"\u8fc1\u79fb Crate",id:"\u8fc1\u79fb-crate",level:3},{value:"\u5b9e\u4f53 Crate",id:"\u5b9e\u4f53-crate",level:3},{value:"\u5e94\u7528 Crate",id:"\u5e94\u7528-crate",level:3}],m={toc:g},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u8bbe\u7f6e\u8fc1\u79fb"},"\u8bbe\u7f6e\u8fc1\u79fb"),(0,a.yg)("p",null,"\u4f7f\u7528 SeaQuery \u6216 SQL \u7f16\u5199\u7684\u8fc1\u79fb\u6765\u7248\u672c\u63a7\u5236\u60a8\u7684\u6570\u636e\u5e93\u6a21\u5f0f\u3002"),(0,a.yg)("h2",{id:"\u8fc1\u79fb\u8868"},"\u8fc1\u79fb\u8868"),(0,a.yg)("p",null,"\u6570\u636e\u5e93\u4e2d\u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"seaql_migrations")," \u7684\u8868\uff0c\u7528\u4e8e\u8ddf\u8e2a\u5df2\u5e94\u7528\u7684\u8fc1\u79fb\u3002\u5f53\u60a8\u8fd0\u884c\u8fc1\u79fb\u65f6\uff0c\u5b83\u5c06\u81ea\u52a8\u521b\u5efa\u3002"),(0,a.yg)("h2",{id:"\u521b\u5efa\u8fc1\u79fb\u76ee\u5f55"},"\u521b\u5efa\u8fc1\u79fb\u76ee\u5f55"),(0,a.yg)("p",null,"\u9996\u5148\uff0c\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"cargo")," \u5b89\u88c5 ",(0,a.yg)("inlineCode",{parentName:"p"},"sea-orm-cli"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ cargo install sea-orm-cli\n")),(0,a.yg)("p",null,"\u7136\u540e\uff0c\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"sea-orm-cli migrate init")," \u6765\u8bbe\u7f6e\u8fc1\u79fb\u76ee\u5f55\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5728 `./migration` \u4e2d\u8bbe\u7f6e\u8fc1\u79fb\u76ee\u5f55\n$ sea-orm-cli migrate init\nInitializing migration directory...\nCreating file `./migration/src/lib.rs`\nCreating file `./migration/src/m20220101_000001_create_table.rs`\nCreating file `./migration/src/main.rs`\nCreating file `./migration/Cargo.toml`\nCreating file `./migration/README.md`\nDone!\n\n# \u5982\u679c\u60a8\u60f3\u5728\u5176\u4ed6\u5730\u65b9\u8bbe\u7f6e\u8fc1\u79fb\u76ee\u5f55\n$ sea-orm-cli migrate init -d ./other/migration/dir\n")),(0,a.yg)("p",null,"\u60a8\u5e94\u8be5\u83b7\u5f97\u4e00\u4e2a\u5982\u4e0b\u7ed3\u6784\u7684\u8fc1\u79fb\u76ee\u5f55\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"migration\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 lib.rs                              # Migrator API\uff0c\u7528\u4e8e\u96c6\u6210\n    \u251c\u2500\u2500 m20220101_000001_create_table.rs    # \u4e00\u4e2a\u793a\u4f8b\u8fc1\u79fb\u6587\u4ef6\n    \u2514\u2500\u2500 main.rs                             # Migrator CLI\uff0c\u7528\u4e8e\u624b\u52a8\u8fd0\u884c\n")),(0,a.yg)("h2",{id:"\u5de5\u4f5c\u533a\u7ed3\u6784"},"\u5de5\u4f5c\u533a\u7ed3\u6784"),(0,a.yg)("p",null,"\u5efa\u8bae\u5c06\u60a8\u7684 Cargo \u5de5\u4f5c\u533a\u7ed3\u6784\u5316\u5982\u4e0b\uff0c\u4ee5\u4fbf\u5728\u5e94\u7528\u7a0b\u5e8f crate \u548c\u8fc1\u79fb crate \u4e4b\u95f4\u5171\u4eab SeaORM \u5b9e\u4f53\u3002\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples"},"\u96c6\u6210\u793a\u4f8b")," \u8fdb\u884c\u6f14\u793a\u3002"),(0,a.yg)("h3",{id:"\u8fc1\u79fb-crate"},"\u8fc1\u79fb Crate"),(0,a.yg)("p",null,"\u5bfc\u5165 ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/sea-orm-migration"},(0,a.yg)("inlineCode",{parentName:"a"},"sea-orm-migration"))," \u548c ",(0,a.yg)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,a.yg)("inlineCode",{parentName:"a"},"async-std"))," crate\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml",metastring:'title="migration/Cargo.toml"',title:'"migration/Cargo.toml"'},'[dependencies]\nasync-std = { version = "^1", features = ["attributes", "tokio1"] }\n\n[dependencies.sea-orm-migration]\nversion = "^0"\nfeatures = [\n  # \u5982\u679c\u60a8\u60f3\u901a\u8fc7 CLI \u8fd0\u884c\u8fc1\u79fb\uff0c\u8bf7\u542f\u7528\u81f3\u5c11\u4e00\u4e2a `ASYNC_RUNTIME` \u548c `DATABASE_DRIVER` \u7279\u6027\u3002\n  # \u5728 https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime \u67e5\u770b\u652f\u6301\u7684\u7279\u6027\u5217\u8868\u3002\n  # \u4f8b\u5982\uff1a\n  # "runtime-tokio-rustls",  # `ASYNC_RUNTIME` \u7279\u6027\n  # "sqlx-postgres",         # `DATABASE_DRIVER` \u7279\u6027\n]\n')),(0,a.yg)("p",null,"\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u8fc1\u79fb\u3002\u8be6\u7ec6\u8bf4\u660e\u5728\u4e0b\u4e00\u8282\u4e2d\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/m20220120_000001_create_post_table.rs"',title:'"migration/src/m20220120_000001_create_post_table.rs"'},"use sea_orm_migration::prelude::*;\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        // \u5c06\u4ee5\u4e0b\u793a\u4f8b\u66ff\u6362\u4e3a\u60a8\u81ea\u5df1\u7684\u8fc1\u79fb\u811a\u672c\n        todo!();\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        // \u5c06\u4ee5\u4e0b\u793a\u4f8b\u66ff\u6362\u4e3a\u60a8\u81ea\u5df1\u7684\u8fc1\u79fb\u811a\u672c\n        todo!();\n    }\n}\n")),(0,a.yg)("h3",{id:"\u5b9e\u4f53-crate"},"\u5b9e\u4f53 Crate"),(0,a.yg)("p",null,"\u5728\u60a8\u7684\u6839\u5de5\u4f5c\u533a\u4e2d\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f53 crate\u3002"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"\u60a8\u8fd8\u6ca1\u6709\u5b9a\u4e49 SeaORM \u5b9e\u4f53\uff1f"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u6ca1\u6709\u4efb\u4f55\u5b9e\u4f53\u6587\u4ef6\u7684\u5b9e\u4f53 crate\u3002\u7136\u540e\uff0c\u7f16\u5199\u8fc1\u79fb\u5e76\u8fd0\u884c\u5b83\u4ee5\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868\u3002\u6700\u540e\uff0c\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"sea-orm-cli")," ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.9.x/generate-entity/sea-orm-cli"},"\u751f\u6210 SeaORM \u5b9e\u4f53"),"\uff0c\u5e76\u5c06\u5b9e\u4f53\u6587\u4ef6\u8f93\u51fa\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"entity/src/entities")," \u6587\u4ef6\u5939\u3002"),(0,a.yg)("p",null,"\u751f\u6210\u5b9e\u4f53\u6587\u4ef6\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"entity/src/lib.rs")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u884c\u6765\u91cd\u65b0\u5bfc\u51fa\u751f\u6210\u7684\u5b9e\u4f53\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"mod entities;\npub use entities::*;\n"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"entity\n\u251c\u2500\u2500 Cargo.toml      # \u5305\u62ec SeaORM \u4f9d\u8d56\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 lib.rs      # \u91cd\u65b0\u5bfc\u51fa SeaORM \u548c\u5b9e\u4f53\n    \u2514\u2500\u2500 post.rs     # \u5b9a\u4e49 `post` \u5b9e\u4f53\n")),(0,a.yg)("p",null,"\u6307\u5b9a SeaORM \u4f9d\u8d56\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml",metastring:'title="entity/Cargo.toml"',title:'"entity/Cargo.toml"'},'[dependencies]\nsea-orm = { version = "^0" }\n')),(0,a.yg)("h3",{id:"\u5e94\u7528-crate"},"\u5e94\u7528 Crate"),(0,a.yg)("p",null,"\u8fd9\u91cc\u662f\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\u6240\u5728\u7684\u4f4d\u7f6e\u3002"),(0,a.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u5e94\u7528\u7a0b\u5e8f\u3001\u5b9e\u4f53\u548c\u8fc1\u79fb crates \u7684\u5de5\u4f5c\u533a\uff0c\u5e76\u5c06\u5b9e\u4f53 crate \u5bfc\u5165\u5e94\u7528\u7a0b\u5e8f crate\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u5c06\u8fc1\u79fb\u5de5\u5177\u4f5c\u4e3a\u5e94\u7528\u7684\u4e00\u90e8\u5206\u8fdb\u884c\u6253\u5305\uff0c\u60a8\u8fd8\u9700\u8981\u5bfc\u5165\u8fc1\u79fb crate\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml",metastring:'title="./Cargo.toml"',title:'"./Cargo.toml"'},'[workspace]\nmembers = [".", "entity", "migration"]\n\n[dependencies]\nentity = { path = "entity" }\nmigration = { path = "migration" } # \u6839\u636e\u60a8\u7684\u9700\u6c42\u800c\u5b9a\n\n[dependencies.sea-orm]\nversion = "^0"\nfeatures = [ ... ]\n')),(0,a.yg)("p",null,"\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728\u542f\u52a8\u65f6\u8fd0\u884c\u8fc1\u79fb\u5668\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use migration::{Migrator, MigratorTrait};\n\nlet connection = sea_orm::Database::connect(&database_url).await?;\nMigrator::up(&connection, None).await?;\n")))}p.isMDXComponent=!0}}]);