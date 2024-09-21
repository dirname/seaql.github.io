"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[36952],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),m=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(t),y=a,c=p["".concat(u,".").concat(y)]||p[y]||g[y]||i;return t?r.createElement(c,o(o({ref:n},s),{},{components:t})):r.createElement(c,o({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},48770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=t(58168),a=(t(96540),t(15680));const i={},o="\u679a\u4e3e",l={unversionedId:"generate-entity/enumeration",id:"version-0.8.x/generate-entity/enumeration",title:"\u679a\u4e3e",description:"\u60a8\u53ef\u4ee5\u5728\u6a21\u578b\u4e2d\u4f7f\u7528 Rust \u679a\u4e3e\uff0c\u5176\u4e2d\u7684\u503c\u4e0e\u6570\u636e\u5e93\u5b57\u7b26\u4e32\u3001\u6574\u6570\u6216\u672c\u5730\u679a\u4e3e\u76f8\u6620\u5c04\u3002",source:"@site/versioned_docs/version-0.8.x/03-generate-entity/04-enumeration.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/enumeration",permalink:"/SeaORM/docs/0.8.x/generate-entity/enumeration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/03-generate-entity/04-enumeration.md",tags:[],version:"0.8.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1658132004,formattedLastUpdatedAt:"Jul 18, 2022",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6269\u5c55\u7684\u5b9e\u4f53\u7ed3\u6784",permalink:"/SeaORM/docs/0.8.x/generate-entity/expanded-entity-structure"},next:{title:"\u521b\u5efa\u8868",permalink:"/SeaORM/docs/0.8.x/generate-database-schema/create-table"}},u={},m=[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"\u6d3e\u751f\u5b9e\u73b0",id:"\u6d3e\u751f\u5b9e\u73b0",level:3},{value:"\u624b\u52a8\u5b9e\u73b0",id:"\u624b\u52a8\u5b9e\u73b0",level:3},{value:"\u5728\u6a21\u578b\u4e2d\u4f7f\u7528 ActiveEnum",id:"\u5728\u6a21\u578b\u4e2d\u4f7f\u7528-activeenum",level:2}],s={toc:m},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u679a\u4e3e"},"\u679a\u4e3e"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u5728\u6a21\u578b\u4e2d\u4f7f\u7528 Rust \u679a\u4e3e\uff0c\u5176\u4e2d\u7684\u503c\u4e0e\u6570\u636e\u5e93\u5b57\u7b26\u4e32\u3001\u6574\u6570\u6216\u672c\u5730\u679a\u4e3e\u76f8\u6620\u5c04\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5b57\u7b26\u4e32"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6574\u6570"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    #[sea_orm(num_value = 0)]\n    Black,\n    #[sea_orm(num_value = 1)]\n    White,\n}\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u672c\u5730\u6570\u636e\u5e93\u679a\u4e3e"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')))),(0,a.yg)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u624b\u52a8\u5b9e\u73b0 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/entity/trait.ActiveEnum.html"},(0,a.yg)("inlineCode",{parentName:"a"},"ActiveEnum"))," \u6216\u4f7f\u7528\u6d3e\u751f\u5b8f ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/derive.DeriveActiveEnum.html"},(0,a.yg)("inlineCode",{parentName:"a"},"DeriveActiveEnum")),"\u3002"),(0,a.yg)("h3",{id:"\u6d3e\u751f\u5b9e\u73b0"},"\u6d3e\u751f\u5b9e\u73b0"),(0,a.yg)("p",null,"\u6709\u5173\u5b8f\u5c5e\u6027\u7684\u5b8c\u6574\u89c4\u8303\uff0c\u8bf7\u53c2\u89c1 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/derive.DeriveActiveEnum.html"},(0,a.yg)("inlineCode",{parentName:"a"},"DeriveActiveEnum")),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// \u4f7f\u7528\u6d3e\u751f\u5b8f\n#[derive(Debug, PartialEq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(\n    rs_type = "String",\n    db_type = "String(Some(1))",\n    enum_name = "category"\n)]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n')),(0,a.yg)("h3",{id:"\u624b\u52a8\u5b9e\u73b0"},"\u624b\u52a8\u5b9e\u73b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// \u624b\u52a8\u5b9e\u73b0\n#[derive(Debug, PartialEq, EnumIter)]\npub enum Category {\n    Big,\n    Small,\n}\n\nimpl ActiveEnum for Category {\n    // \u5b8f\u5c5e\u6027 `rs_type` \u5728\u8fd9\u91cc\u88ab\u7c98\u8d34\n    type Value = String;\n\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u672a\u663e\u5f0f\u63d0\u4f9b `enum_name` \uff0cRust \u679a\u4e3e\u7684\u540d\u79f0\u91c7\u7528\u9a7c\u5cf0\u547d\u540d\n    fn name() -> String {\n        "category".to_owned()\n    }\n\n    // \u5c06 Rust \u679a\u4e3e\u53d8\u4f53\u6620\u5c04\u5230\u5bf9\u5e94\u7684 `num_value` \u6216 `string_value`\n    fn to_value(&self) -> Self::Value {\n        match self {\n            Self::Big => "B",\n            Self::Small => "S",\n        }\n        .to_owned()\n    }\n\n    // \u5c06 `num_value` \u6216 `string_value` \u6620\u5c04\u5230\u5bf9\u5e94\u7684 Rust \u679a\u4e3e\u53d8\u4f53\n    fn try_from_value(v: &Self::Value) -> Result<Self, DbErr> {\n        match v.as_ref() {\n            "B" => Ok(Self::Big),\n            "S" => Ok(Self::Small),\n            _ => Err(DbErr::Type(format!(\n                "Category \u679a\u4e3e\u7684\u610f\u5916\u503c: {}",\n                v\n            ))),\n        }\n    }\n\n    // \u5b8f\u5c5e\u6027 `db_type` \u5728\u8fd9\u91cc\u88ab\u7c98\u8d34\n    fn db_type() -> ColumnDef {\n        ColumnType::String(Some(1)).def()\n    }\n}\n')),(0,a.yg)("h2",{id:"\u5728\u6a21\u578b\u4e2d\u4f7f\u7528-activeenum"},"\u5728\u6a21\u578b\u4e2d\u4f7f\u7528 ActiveEnum"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// \u5b9a\u4e49 `Category` \u6d3b\u8dc3\u679a\u4e3e\n#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "active_enum")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // \u4f7f\u7528 `Category` \u6d3b\u8dc3\u679a\u4e3e\u8868\u793a\u6570\u636e\u5e93\u5217\n    pub category: Category,\n    pub category_opt: Option<Category>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')))}g.isMDXComponent=!0}}]);