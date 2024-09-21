"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[57946],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>c});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),o=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=o(e.components);return t.createElement(m.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=o(a),p=r,c=g["".concat(m,".").concat(p)]||g[p]||y[p]||l;return a?t.createElement(c,i(i({ref:n},s),{},{components:a})):t.createElement(c,i({ref:n},s))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var u={};for(var m in n)hasOwnProperty.call(n,m)&&(u[m]=n[m]);u.originalType=e,u[g]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=a[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},38289:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var t=a(58168),r=(a(96540),a(15680));const l={},i="\u679a\u4e3e",u={unversionedId:"generate-entity/enumeration",id:"generate-entity/enumeration",title:"\u679a\u4e3e",description:"\u60a8\u53ef\u4ee5\u5728\u6a21\u578b\u4e2d\u4f7f\u7528 Rust \u679a\u4e3e\uff0c\u5176\u4e2d\u8fd9\u4e9b\u503c\u6620\u5c04\u5230\u6570\u636e\u5e93\u5b57\u7b26\u4e32\u3001\u6574\u6570\u6216\u672c\u5730\u679a\u4e3e\u3002",source:"@site/docs/04-generate-entity/04-enumeration.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/enumeration",permalink:"/SeaORM/docs/next/generate-entity/enumeration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/04-generate-entity/04-enumeration.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1717256837,formattedLastUpdatedAt:"Jun 1, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784",permalink:"/SeaORM/docs/next/generate-entity/expanded-entity-structure"},next:{title:"\u65b0\u7c7b\u578b",permalink:"/SeaORM/docs/next/generate-entity/newtype"}},m={},o=[{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:3},{value:"\u624b\u52a8\u5b57\u7b26\u4e32\u503c",id:"\u624b\u52a8\u5b57\u7b26\u4e32\u503c",level:4},{value:"\u4ece\u53d8\u4f53\u6d3e\u751f\u5b57\u7b26\u4e32\u503c",id:"\u4ece\u53d8\u4f53\u6d3e\u751f\u5b57\u7b26\u4e32\u503c",level:4},{value:"\u6574\u6570",id:"\u6574\u6570",level:3},{value:"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e",id:"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e",level:2},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3},{value:"1. <code>TYPE</code> \u8bed\u53e5",id:"1-type-\u8bed\u53e5",level:4},{value:"2. <code>create_enum_from_active_enum</code>",id:"2-create_enum_from_active_enum",level:4},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"\u5728\u6a21\u578b\u4e0a\u4f7f\u7528 ActiveEnum",id:"\u5728\u6a21\u578b\u4e0a\u4f7f\u7528-activeenum",level:2}],s={toc:o},g="wrapper";function y(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u679a\u4e3e"},"\u679a\u4e3e"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u5728\u6a21\u578b\u4e2d\u4f7f\u7528 Rust \u679a\u4e3e\uff0c\u5176\u4e2d\u8fd9\u4e9b\u503c\u6620\u5c04\u5230\u6570\u636e\u5e93\u5b57\u7b26\u4e32\u3001\u6574\u6570\u6216\u672c\u5730\u679a\u4e3e\u3002"),(0,r.yg)("h3",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,r.yg)("p",null,"\u5bf9\u4e8e\u5b57\u7b26\u4e32\u679a\u4e3e\uff0c\u9664\u4e86\u80fd\u591f\u4e3a\u6bcf\u4e2a\u53d8\u4f53\u6307\u5b9a\u5b57\u7b26\u4e32\u503c\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728\u679a\u4e3e\u4e0a\u6307\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"rename_all")," \u5c5e\u6027\uff0c\u4ee5\u4fbf\u6839\u636e\u5927\u5c0f\u5199\u8f6c\u6362\u4e3a\u6240\u6709\u503c\u751f\u6210\u5b57\u7b26\u4e32\u503c\u3002"),(0,r.yg)("h4",{id:"\u624b\u52a8\u5b57\u7b26\u4e32\u503c"},"\u624b\u52a8\u5b57\u7b26\u4e32\u503c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::N(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n')),(0,r.yg)("h4",{id:"\u4ece\u53d8\u4f53\u6d3e\u751f\u5b57\u7b26\u4e32\u503c"},"\u4ece\u53d8\u4f53\u6d3e\u751f\u5b57\u7b26\u4e32\u503c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::None)")]\npub enum Category {\n    #[sea_orm(string_value = "bigTask")]\n    BigTask,\n    #[sea_orm(string_value = "smallBreak")]\n    SmallWork,\n}\n')),(0,r.yg)("p",null,"\u4e0a\u8ff0\u7b49\u540c\u4e8e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::None)", rename_all = "camelCase")]\npub enum Category {\n    BigTask,\n    SmallWork,\n}\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,"\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u627e\u5230 `rename_all` \u5c5e\u6027\u7684\u6709\u6548\u503c\u5217\u8868"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"camelCase"),(0,r.yg)("li",{parentName:"ul"},"kebab-case"),(0,r.yg)("li",{parentName:"ul"},"mixed_case"),(0,r.yg)("li",{parentName:"ul"},"SCREAMING_SNAKE_CASE"),(0,r.yg)("li",{parentName:"ul"},"snake_case"),(0,r.yg)("li",{parentName:"ul"},"title_case"),(0,r.yg)("li",{parentName:"ul"},"UPPERCASE"),(0,r.yg)("li",{parentName:"ul"},"lowercase"),(0,r.yg)("li",{parentName:"ul"},"SCREAMING-KEBAB-CASE"),(0,r.yg)("li",{parentName:"ul"},"PascalCase"))),(0,r.yg)("h3",{id:"\u6574\u6570"},"\u6574\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    #[sea_orm(num_value = 0)]\n    Black,\n    #[sea_orm(num_value = 1)]\n    White,\n}\n')),(0,r.yg)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    Black = 0,\n    White = 1,\n}\n')),(0,r.yg)("h2",{id:"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e"},"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')),(0,r.yg)("h3",{id:"mysql"},"MySQL"),(0,r.yg)("p",null,"MySQL \u7684\u679a\u4e3e\u4ec5\u662f\u5217\u5b9a\u4e49\u7684\u4e00\u90e8\u5206\uff0c\u4e0d\u80fd\u5728\u4e0d\u540c\u8868\u4e2d\u91cd\u7528\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'Table::create()\n    .table(Posts::TableName)\n    .col(\n        ColumnDef::new(Posts::ColumnName)\n            .enumeration(Alias::new("tea"), [Alias::new("EverydayTea"), Alias::new("BreakfastTea")]),\n    )\n\n"CREATE TABLE `table_name` (`column_name` ENUM(\'EverydayTea\', \'BreakfastTea\'))",\n')),(0,r.yg)("h3",{id:"postgres"},"Postgres"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 Postgres\uff0c\u679a\u4e3e\u5fc5\u987b\u5728\u8fc1\u79fb\u4e2d\u7684\u5355\u72ec ",(0,r.yg)("inlineCode",{parentName:"p"},"Type")," \u8bed\u53e5\u4e2d\u521b\u5efa\uff0c\u60a8\u53ef\u4ee5\u5982\u4e0b\u521b\u5efa\uff1a"),(0,r.yg)("h4",{id:"1-type-\u8bed\u53e5"},"1. ",(0,r.yg)("inlineCode",{parentName:"h4"},"TYPE")," \u8bed\u53e5"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/sea-orm-migration/tests/common/migration/m20220118_000004_create_tea_enum.rs"},"\u5b8c\u6574\u793a\u4f8b"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'// \u5728\u8fc1\u79fb\u4e2d\u8fd0\u884c\uff1a\n\nmanager\n    .create_type(\n        // CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')\n        Type::create()\n            .as_enum(Alias::new("tea"))\n            .values([Alias::new("EverydayTea"), Alias::new("BreakfastTea")])\n            .to_owned(),\n    )\n    .await?;\n')),(0,r.yg)("h4",{id:"2-create_enum_from_active_enum"},"2. ",(0,r.yg)("inlineCode",{parentName:"h4"},"create_enum_from_active_enum")),(0,r.yg)("p",null,"\u8be5\u65b9\u6cd5\u5c06\u63d0\u4f9b\u4e00\u4e2a\u63a5\u53e3\uff0c\u7528\u4e8e\u5c06\u7c7b\u578b\u6dfb\u52a0\u5230\u6570\u636e\u5e93\u3001\u5728\u8868\u5217\u4e2d\u4f7f\u7528\u8be5\u7c7b\u578b\u4ee5\u53ca\u5728\u586b\u5145\u6570\u636e\u65f6\u5c06\u8be5\u7c7b\u578b\u7684\u503c\u6dfb\u52a0\u5230\u884c\u4e2d\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveEnum"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea_type")]\npub enum TeaType {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8be5\u7c7b\u578b")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{Schema, DbBackend};\n\n// \u5728\u8fc1\u79fb\u4e2d\uff1a\nlet schema = Schema::new(DbBackend::Postgres);\n\nmanager\n    .create_type(\n        // CREATE TYPE \"tea_type\" AS ENUM ('EverydayTea', 'BreakfastTea')\n        schema.create_enum_from_active_enum::<TeaType>(),\n    )\n    .await?;\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u5728\u521b\u5efa\u8868\u65f6\u5c06\u8be5\u7c7b\u578b\u7528\u4f5c\u8868\u5217\u7c7b\u578b")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust",metastring:"diff",diff:!0},"// \u5728\u8fc1\u79fb\u4e2d\uff1a\n\nmanager::create()\n    .table(Tea::Table)\n    .if_not_exists()\n    .col(Column::new(Tea::Type).custom(TeaType::name())) // \u4f7f\u7528\u8be5\u7c7b\u578b\u4f5c\u4e3a\u8868\u5217\n    // ... \u66f4\u591a\u5217\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u53e6\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/migration/writing-migration/#schema-creation-methods"},"Schema Creation Methods - Create Table"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u5728\u586b\u5145\u6570\u636e\u5e93\u65f6\u4f7f\u7528\u8be5\u7c7b\u578b")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"// \u5728\u8fc1\u79fb\u4e2d\n\nlet insert = Query::insert()\n    .into_table(Tea::Table)\n    .columns([Tea::TeaType])\n    .values_panic([TeaType::EverydayTea.as_enum()]) // \u8c03\u7528 `as_enum` \u5c06\u53d8\u4f53\u8f6c\u6362\u4e3a SimpleExpr\n    .to_owned();\n\nmanager.exec_stmt(insert).await?;\n// ...\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u53e6\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/migration/seeding-data/#:~:text=write%20SeaQuery%20statement%20to%20seed%20the%20table"},"Seeding Data - with sea_query statement"))),(0,r.yg)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.ActiveEnum.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ActiveEnum"))," \u6765\u5b9e\u73b0\u5b83\uff0c\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/derive.DeriveActiveEnum.html"},(0,r.yg)("inlineCode",{parentName:"a"},"DeriveActiveEnum"))," \u5b8f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Debug, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(\n    rs_type = "String",\n    db_type = "String(StringLen::N(1))",\n    enum_name = "category"\n)]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,"\u4e3a\u4e86\u8bf4\u660e\uff0c\u8fd9\u5927\u81f4\u662f\u5b8f\u5b9e\u73b0\u7684\u5185\u5bb9\uff1a"),(0,r.yg)("div",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Debug, PartialEq, Eq, EnumIter)]\npub enum Category {\n    Big,\n    Small,\n}\n\n// \u624b\u52a8\u5b9e\u73b0\nimpl ActiveEnum for Category {\n    // \u5b8f\u5c5e\u6027 `rs_type` \u5728\u6b64\u7c98\u8d34\n    type Value = String;\n\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u6ca1\u6709\u663e\u5f0f\u63d0\u4f9b `enum_name`\uff0cRust \u679a\u4e3e\u7684\u540d\u79f0\u5c06\u662f\u9a7c\u5cf0\u5f62\u5f0f\n    fn name() -> String {\n        "category".to_owned()\n    }\n\n    // \u5c06 Rust \u679a\u4e3e\u53d8\u4f53\u6620\u5c04\u5230\u76f8\u5e94\u7684 `num_value` \u6216 `string_value`\n    fn to_value(&self) -> Self::Value {\n        match self {\n            Self::Big => "B",\n            Self::Small => "S",\n        }\n        .to_owned()\n    }\n\n    // \u5c06 `num_value` \u6216 `string_value` \u6620\u5c04\u5230\u76f8\u5e94\u7684 Rust \u679a\u4e3e\u53d8\u4f53\n    fn try_from_value(v: &Self::Value) -> Result<Self, DbErr> {\n        match v.as_ref() {\n            "B" => Ok(Self::Big),\n            "S" => Ok(Self::Small),\n            _ => Err(DbErr::Type(format!(\n                "Category \u679a\u4e3e\u7684\u610f\u5916\u503c: {}",\n                v\n            ))),\n        }\n    }\n\n    // \u5b8f\u5c5e\u6027 `db_type` \u5728\u6b64\u7c98\u8d34\n    fn db_type() -> ColumnDef {\n        ColumnType::String(Some(1)).def()\n    }\n}\n')))),(0,r.yg)("h2",{id:"\u5728\u6a21\u578b\u4e0a\u4f7f\u7528-activeenum"},"\u5728\u6a21\u578b\u4e0a\u4f7f\u7528 ActiveEnum"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// \u5b9a\u4e49 `Category` \u6d3b\u52a8\u679a\u4e3e\n#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::N(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "active_enum")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // \u4f7f\u7528 `Category` \u6d3b\u52a8\u679a\u4e3e\u8868\u793a\u6570\u636e\u5e93\u5217\n    pub category: Category,\n    pub category_opt: Option<Category>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')))}y.isMDXComponent=!0}}]);