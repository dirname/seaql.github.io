"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[58019],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,g=m["".concat(o,".").concat(d)]||m[d]||y[d]||l;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const l={},i="\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784",p={unversionedId:"generate-entity/expanded-entity-structure",id:"version-0.11.x/generate-entity/expanded-entity-structure",title:"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784",description:"SeaORM \u662f\u52a8\u6001\u7684\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u7075\u6d3b\u914d\u7f6e\u3002\u5982\u679c\u60a8\u60f3\u77e5\u9053 DeriveEntityModel \u6269\u5c55\u4e86\u4ec0\u4e48\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u3002\u5426\u5219\uff0c\u60a8\u53ef\u4ee5\u6682\u65f6\u8df3\u8fc7\u8fd9\u4e00\u90e8\u5206\u3002",source:"@site/versioned_docs/version-0.11.x/04-generate-entity/03-expanded-entity-structure.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/expanded-entity-structure",permalink:"/SeaORM/docs/0.11.x/generate-entity/expanded-entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/04-generate-entity/03-expanded-entity-structure.md",tags:[],version:"0.11.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1714104357,formattedLastUpdatedAt:"Apr 26, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u4f53\u7ed3\u6784",permalink:"/SeaORM/docs/0.11.x/generate-entity/entity-structure"},next:{title:"\u679a\u4e3e",permalink:"/SeaORM/docs/0.11.x/generate-entity/enumeration"}},o={},u=[{value:"\u5b9e\u4f53",id:"\u5b9e\u4f53",level:2},{value:"\u5217",id:"\u5217",level:2},{value:"\u989d\u5916\u5c5e\u6027",id:"\u989d\u5916\u5c5e\u6027",level:3},{value:"\u9009\u62e9\u548c\u4fdd\u5b58\u65f6\u8f6c\u6362\u5217\u7c7b\u578b",id:"\u9009\u62e9\u548c\u4fdd\u5b58\u65f6\u8f6c\u6362\u5217\u7c7b\u578b",level:3},{value:"\u4e3b\u952e",id:"\u4e3b\u952e",level:2},{value:"\u6a21\u578b",id:"\u6a21\u578b",level:2},{value:"\u53ef\u7a7a\u5c5e\u6027",id:"\u53ef\u7a7a\u5c5e\u6027",level:3},{value:"\u6d3b\u52a8\u6a21\u578b",id:"\u6d3b\u52a8\u6a21\u578b",level:2},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",level:2},{value:"\u76f8\u5173",id:"\u76f8\u5173",level:2}],s={toc:u},m="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784"},"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784"),(0,r.yg)("p",null,"SeaORM \u662f\u52a8\u6001\u7684\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u7075\u6d3b\u914d\u7f6e\u3002\u5982\u679c\u60a8\u60f3\u77e5\u9053 ",(0,r.yg)("inlineCode",{parentName:"p"},"DeriveEntityModel")," \u6269\u5c55\u4e86\u4ec0\u4e48\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u3002\u5426\u5219\uff0c\u60a8\u53ef\u4ee5\u6682\u65f6\u8df3\u8fc7\u8fd9\u4e00\u90e8\u5206\u3002"),(0,r.yg)("p",null,"\u6269\u5c55\u7684\u5b9e\u4f53\u683c\u5f0f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"sea-orm-cli")," \u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"--expanded-format")," \u9009\u9879\u751f\u6210\u3002"),(0,r.yg)("p",null,"\u8ba9\u6211\u4eec\u9010\u6b65\u6df1\u5165\u6269\u5c55\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_expanded.rs"},"Cake")," \u5b9e\u4f53\u7684\u5404\u4e2a\u90e8\u5206\u3002"),(0,r.yg)("h2",{id:"\u5b9e\u4f53"},"\u5b9e\u4f53"),(0,r.yg)("p",null,"\u901a\u8fc7\u5b9e\u73b0 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityTrait")),"\uff0c\u60a8\u53ef\u4ee5\u5bf9\u7ed9\u5b9a\u8868\u6267\u884c CRUD \u64cd\u4f5c\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Default, Debug, DeriveEntity)]\npub struct Entity;\n\nimpl EntityName for Entity {\n    fn schema_name(&self) -> Option<&str> {\n        None\n    }\n\n    fn table_name(&self) -> &str {\n        "cake"\n    }\n}\n')),(0,r.yg)("h2",{id:"\u5217"},"\u5217"),(0,r.yg)("p",null,"\u4e00\u4e2a\u8868\u793a\u6b64\u8868\u4e2d\u6240\u6709\u5217\u7684\u679a\u4e3e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\npub enum Column {\n    Id,\n    Name,\n}\n\nimpl ColumnTrait for Column {\n    type EntityName = Entity;\n\n    fn def(&self) -> ColumnDef {\n        match self {\n            Self::Id => ColumnType::Integer.def(),\n            Self::Name => ColumnType::String(None).def(),\n        }\n    }\n}\n")),(0,r.yg)("p",null,"\u6240\u6709\u5217\u540d\u5047\u5b9a\u4e3a\u86c7\u5f62\u547d\u540d\u6cd5\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"column_name")," \u5c5e\u6027\u6765\u8986\u76d6\u5217\u540d\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'pub enum Column {\n    Id,      // \u6620\u5c04\u5230 SQL \u4e2d\u7684 "id"\n    Name,    // \u6620\u5c04\u5230 SQL \u4e2d\u7684 "name"\n    #[sea_orm(column_name = "create_at")]\n    CreateAt // \u6620\u5c04\u5230 SQL \u4e2d\u7684 "create_at"\n}\n')),(0,r.yg)("p",null,"\u8981\u6307\u5b9a\u6bcf\u5217\u7684\u6570\u636e\u7c7b\u578b\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ColumnType"))," \u679a\u4e3e\u3002"),(0,r.yg)("h3",{id:"\u989d\u5916\u5c5e\u6027"},"\u989d\u5916\u5c5e\u6027"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c"),(0,r.yg)("li",{parentName:"ul"},"\u552f\u4e00"),(0,r.yg)("li",{parentName:"ul"},"\u7d22\u5f15"),(0,r.yg)("li",{parentName:"ul"},"\u53ef\u4e3a\u7a7a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'ColumnType::String(None).def().default_value("Sam").unique().indexed().nullable()\n')),(0,r.yg)("h3",{id:"\u9009\u62e9\u548c\u4fdd\u5b58\u65f6\u8f6c\u6362\u5217\u7c7b\u578b"},"\u9009\u62e9\u548c\u4fdd\u5b58\u65f6\u8f6c\u6362\u5217\u7c7b\u578b"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u5c06\u5217\u9009\u62e9\u4e3a\u4e00\u79cd\u7c7b\u578b\uff0c\u4f46\u5c06\u5176\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u65f6\u4e3a\u53e6\u4e00\u79cd\u7c7b\u578b\uff0c\u5219\u53ef\u4ee5\u8986\u76d6 ",(0,r.yg)("inlineCode",{parentName:"p"},"select_as")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"save_as")," \u65b9\u6cd5\u4ee5\u6267\u884c\u8f6c\u6362\u3002\u4e00\u4e2a\u5178\u578b\u7684\u7528\u4f8b\u662f\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"citext"),"\uff08\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\u6587\u672c\uff09\u7c7b\u578b\u7684\u5217\u9009\u62e9\u4e3a Rust \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"String"),"\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\u4f5c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"citext"),"\u3002\u60a8\u5e94\u5982\u4e0b\u8986\u76d6 ",(0,r.yg)("inlineCode",{parentName:"p"},"ColumnTrait")," \u7684\u65b9\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::sea_query::{Expr, SimpleExpr, Alias}\n\nimpl ColumnTrait for Column {\n    // \u88ab\u7701\u7565\u7684\u90e8\u5206...\n\n    /// \u5728\u9009\u62e9\u8bed\u53e5\u4e2d\u4f7f\u7528\u7684\u5217\u8868\u8fbe\u5f0f\u8f6c\u6362\u3002\n    fn select_as(&self, expr: Expr) -> SimpleExpr {\n        match self {\n            Column::CaseInsensitiveText => expr.cast_as(Alias::new("text")),\n            _ => self.select_enum_as(expr),\n        }\n    }\n\n    /// \u5c06\u5217\u7684\u503c\u8f6c\u6362\u4e3a\u6570\u636e\u5e93\u5b58\u50a8\u7684\u6b63\u786e\u7c7b\u578b\u3002\n    fn save_as(&self, val: Expr) -> SimpleExpr {\n        match self {\n            Column::CaseInsensitiveText => val.cast_as(Alias::new("citext")),\n            _ => self.save_enum_as(val),\n        }\n    }\n}\n')),(0,r.yg)("h2",{id:"\u4e3b\u952e"},"\u4e3b\u952e"),(0,r.yg)("p",null,"\u8868\u793a\u6b64\u8868\u4e3b\u952e\u7684\u679a\u4e3e\u3002\u590d\u5408\u952e\u7531\u5177\u6709\u591a\u4e2a\u53d8\u4f53\u7684\u679a\u4e3e\u8868\u793a\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ValueType")," \u5b9a\u4e49\u4e86 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.InsertResult.html"},(0,r.yg)("inlineCode",{parentName:"a"},"InsertResult"))," \u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"last_insert_id")," \u7684\u7c7b\u578b\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"auto_increment")," \u5b9a\u4e49\u4e3b\u952e\u662f\u5426\u5177\u6709\u81ea\u52a8\u751f\u6210\u7684\u503c\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]\npub enum PrimaryKey {\n    #[sea_orm(column_name = "id")] // \u8986\u76d6\u9ed8\u8ba4\u5217\u540d\n    Id,  // \u6620\u5c04\u5230 SQL \u4e2d\u7684 "id"\n}\n\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = i32;\n\n    fn auto_increment() -> bool {\n        true\n    }\n}\n')),(0,r.yg)("p",null,"\u793a\u4f8b\u590d\u5408\u952e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"pub enum PrimaryKey {\n    CakeId,\n    FruitId,\n}\n\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = (i32, i32);\n\n    fn auto_increment() -> bool {\n        false\n    }\n}\n")),(0,r.yg)("h2",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,r.yg)("p",null,"\u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684 Rust \u7ed3\u6784\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, PartialEq, Eq, DeriveModel, DeriveActiveModel)]\npub struct Model {\n    pub id: i32,\n    pub name: String,\n}\n")),(0,r.yg)("h3",{id:"\u53ef\u7a7a\u5c5e\u6027"},"\u53ef\u7a7a\u5c5e\u6027"),(0,r.yg)("p",null,"\u5982\u679c\u8868\u5217\u662f\u53ef\u7a7a\u7684\uff0c\u8bf7\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Option")," \u5305\u88f9\u5b83\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust",metastring:"{3}","{3}":!0},"pub struct Model {\n    pub id: i32,\n    pub name: Option<String>,\n}\n")),(0,r.yg)("h2",{id:"\u6d3b\u52a8\u6a21\u578b"},"\u6d3b\u52a8\u6a21\u578b"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ActiveModel")," \u62e5\u6709\u5176\u5bf9\u5e94 ",(0,r.yg)("inlineCode",{parentName:"p"},"Model")," \u7684\u6240\u6709\u5c5e\u6027\uff0c\u4f46\u6240\u6709\u5c5e\u6027\u90fd\u88ab\u5305\u88f9\u5728\u4e00\u4e2a ",(0,r.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ActiveValue.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ActiveValue"))," \u4e2d\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, PartialEq)]\npub struct ActiveModel {\n    pub id: ActiveValue<i32>,\n    pub name: ActiveValue<Option<String>>,\n}\n")),(0,r.yg)("h2",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,r.yg)("p",null,"\u6307\u5b9a\u4e0e\u5176\u4ed6\u5b9e\u4f53\u7684\u5173\u7cfb\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,r.yg)("h2",{id:"\u76f8\u5173"},"\u76f8\u5173"),(0,r.yg)("p",null,"\u5b9a\u4e49\u7279\u5f81\u8fb9\u754c\u4ee5\u5e2e\u52a9\u60a8\u5c06\u76f8\u5173\u5b9e\u4f53\u4e00\u8d77\u67e5\u8be2\uff0c\u7279\u522b\u662f\u5728\u591a\u5bf9\u591a\u5173\u7cfb\u4e2d\u975e\u5e38\u6709\u7528\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"impl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n\nimpl Related<super::filling::Entity> for Entity {\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Filling.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        Some(super::cake_filling::Relation::Cake.def().rev())\n    }\n}\n")))}y.isMDXComponent=!0}}]);