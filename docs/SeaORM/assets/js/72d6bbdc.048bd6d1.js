"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[87573],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=p(t),d=a,g=y["".concat(u,".").concat(d)]||y[d]||m[d]||l;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={},i="\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784",o={unversionedId:"generate-entity/expanded-entity-structure",id:"version-0.10.x/generate-entity/expanded-entity-structure",title:"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784",description:"SeaORM \u662f\u52a8\u6001\u7684\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u7075\u6d3b\u914d\u7f6e\u3002\u5982\u679c\u60a8\u60f3\u6df1\u5165\u4e86\u89e3 DeriveEntityModel \u6269\u5c55\u7684\u5185\u5bb9\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u3002\u5426\u5219\uff0c\u60a8\u53ef\u4ee5\u5148\u8df3\u8fc7\u8fd9\u90e8\u5206\u3002",source:"@site/versioned_docs/version-0.10.x/04-generate-entity/03-expanded-entity-structure.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/expanded-entity-structure",permalink:"/SeaORM/docs/0.10.x/generate-entity/expanded-entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/04-generate-entity/03-expanded-entity-structure.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1672731792,formattedLastUpdatedAt:"Jan 3, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u4f53\u7ed3\u6784",permalink:"/SeaORM/docs/0.10.x/generate-entity/entity-structure"},next:{title:"\u679a\u4e3e",permalink:"/SeaORM/docs/0.10.x/generate-entity/enumeration"}},u={},p=[{value:"\u5b9e\u4f53",id:"\u5b9e\u4f53",level:2},{value:"\u5217",id:"\u5217",level:2},{value:"\u9644\u52a0\u5c5e\u6027",id:"\u9644\u52a0\u5c5e\u6027",level:3},{value:"\u4e3b\u952e",id:"\u4e3b\u952e",level:2},{value:"\u6a21\u578b",id:"\u6a21\u578b",level:2},{value:"\u53ef\u7a7a\u5c5e\u6027",id:"\u53ef\u7a7a\u5c5e\u6027",level:3},{value:"\u6d3b\u52a8\u6a21\u578b",id:"\u6d3b\u52a8\u6a21\u578b",level:2},{value:"\u6d3b\u52a8\u6a21\u578b\u884c\u4e3a",id:"\u6d3b\u52a8\u6a21\u578b\u884c\u4e3a",level:3},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",level:2},{value:"\u76f8\u5173",id:"\u76f8\u5173",level:2}],s={toc:p},y="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784"},"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784"),(0,a.yg)("p",null,"SeaORM \u662f\u52a8\u6001\u7684\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u7075\u6d3b\u914d\u7f6e\u3002\u5982\u679c\u60a8\u60f3\u6df1\u5165\u4e86\u89e3 ",(0,a.yg)("inlineCode",{parentName:"p"},"DeriveEntityModel")," \u6269\u5c55\u7684\u5185\u5bb9\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u3002\u5426\u5219\uff0c\u60a8\u53ef\u4ee5\u5148\u8df3\u8fc7\u8fd9\u90e8\u5206\u3002"),(0,a.yg)("p",null,"\u6269\u5c55\u7684\u5b9e\u4f53\u683c\u5f0f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"sea-orm-cli")," \u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"--expanded-format")," \u9009\u9879\u751f\u6210\u3002"),(0,a.yg)("p",null,"\u8ba9\u6211\u4eec\u4e00\u8d77\u770b\u770b\u6269\u5c55\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_expanded.rs"},"Cake")," \u5b9e\u4f53\u7684\u5404\u4e2a\u90e8\u5206\u3002"),(0,a.yg)("h2",{id:"\u5b9e\u4f53"},"\u5b9e\u4f53"),(0,a.yg)("p",null,"\u901a\u8fc7\u5b9e\u73b0 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityTrait")),"\uff0c\u60a8\u53ef\u4ee5\u5bf9\u7ed9\u5b9a\u7684\u8868\u6267\u884c CRUD \u64cd\u4f5c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Default, Debug, DeriveEntity)]\npub struct Entity;\n\nimpl EntityName for Entity {\n    fn schema_name(&self) -> Option<&str> {\n        None\n    }\n\n    fn table_name(&self) -> &str {\n        "cake"\n    }\n}\n')),(0,a.yg)("h2",{id:"\u5217"},"\u5217"),(0,a.yg)("p",null,"\u8868\u793a\u6b64\u8868\u4e2d\u6240\u6709\u5217\u7684\u679a\u4e3e\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\npub enum Column {\n    Id,\n    Name,\n}\n\nimpl ColumnTrait for Column {\n    type EntityName = Entity;\n\n    fn def(&self) -> ColumnDef {\n        match self {\n            Self::Id => ColumnType::Integer.def(),\n            Self::Name => ColumnType::String(None).def(),\n        }\n    }\n}\n")),(0,a.yg)("p",null,"\u6240\u6709\u5217\u540d\u79f0\u5047\u8bbe\u4e3a\u86c7\u5f62\u547d\u540d\u6cd5\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"column_name")," \u5c5e\u6027\u6765\u91cd\u5199\u5217\u540d\u79f0\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'pub enum Column {\n    Id,      // \u6620\u5c04\u5230 SQL \u4e2d\u7684 "id"\n    Name,    // \u6620\u5c04\u5230 SQL \u4e2d\u7684 "name"\n    #[sea_orm(column_name = "create_at")]\n    CreateAt // \u6620\u5c04\u5230 SQL \u4e2d\u7684 "create_at"\n}\n')),(0,a.yg)("p",null,"\u8981\u6307\u5b9a\u6bcf\u5217\u7684\u6570\u636e\u7c7b\u578b\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,a.yg)("inlineCode",{parentName:"a"},"ColumnType"))," \u679a\u4e3e\u3002"),(0,a.yg)("h3",{id:"\u9644\u52a0\u5c5e\u6027"},"\u9644\u52a0\u5c5e\u6027"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c"),(0,a.yg)("li",{parentName:"ul"},"\u552f\u4e00"),(0,a.yg)("li",{parentName:"ul"},"\u7d22\u5f15"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u7a7a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'ColumnType::String(None).def().default_value("Sam").unique().indexed().nullable()\n')),(0,a.yg)("h2",{id:"\u4e3b\u952e"},"\u4e3b\u952e"),(0,a.yg)("p",null,"\u8868\u793a\u6b64\u8868\u4e3b\u952e\u7684\u679a\u4e3e\u3002\u590d\u5408\u952e\u7531\u5177\u6709\u591a\u4e2a\u53d8\u4f53\u7684\u679a\u4e3e\u8868\u793a\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ValueType")," \u5b9a\u4e49 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.InsertResult.html"},(0,a.yg)("inlineCode",{parentName:"a"},"InsertResult"))," \u4e2d\u7684 last_insert_id \u7c7b\u578b\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"auto_increment")," \u5b9a\u4e49\u4e3b\u952e\u662f\u5426\u5177\u6709\u81ea\u52a8\u751f\u6210\u7684\u503c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]\npub enum PrimaryKey {\n    #[sea_orm(column_name = "id")] // \u91cd\u5199\u9ed8\u8ba4\u5217\u540d\n    Id,  // \u6620\u5c04\u5230 SQL \u4e2d\u7684 "id"\n}\n\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = i32;\n\n    fn auto_increment() -> bool {\n        true\n    }\n}\n')),(0,a.yg)("p",null,"\u793a\u4f8b\u590d\u5408\u952e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub enum PrimaryKey {\n    CakeId,\n    FruitId,\n}\n\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = (i32, i32);\n\n    fn auto_increment() -> bool {\n        false\n    }\n}\n")),(0,a.yg)("h2",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,a.yg)("p",null,"\u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684 Rust \u7ed3\u6784\u4f53\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, PartialEq, DeriveModel, DeriveActiveModel)]\npub struct Model {\n    pub id: i32,\n    pub name: String,\n}\n")),(0,a.yg)("h3",{id:"\u53ef\u7a7a\u5c5e\u6027"},"\u53ef\u7a7a\u5c5e\u6027"),(0,a.yg)("p",null,"\u5982\u679c\u8868\u7684\u5217\u662f\u53ef\u7a7a\u7684\uff0c\u8bf7\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"Option")," \u5305\u88f9\u5b83\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:"{3}","{3}":!0},"pub struct Model {\n    pub id: i32,\n    pub name: Option<String>,\n}\n")),(0,a.yg)("h2",{id:"\u6d3b\u52a8\u6a21\u578b"},"\u6d3b\u52a8\u6a21\u578b"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ActiveModel")," \u5305\u542b\u5176\u5bf9\u5e94 ",(0,a.yg)("inlineCode",{parentName:"p"},"Model")," \u7684\u6240\u6709\u5c5e\u6027\uff0c\u4f46\u6240\u6709\u5c5e\u6027\u90fd\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ActiveValue.html"},(0,a.yg)("inlineCode",{parentName:"a"},"ActiveValue"))," \u5305\u88f9\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, PartialEq)]\npub struct ActiveModel {\n    pub id: ActiveValue<i32>,\n    pub name: ActiveValue<Option<String>>,\n}\n")),(0,a.yg)("h3",{id:"\u6d3b\u52a8\u6a21\u578b\u884c\u4e3a"},"\u6d3b\u52a8\u6a21\u578b\u884c\u4e3a"),(0,a.yg)("p",null,"\u5904\u7406\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"ActiveModel")," \u4e0a\u89e6\u53d1\u7684\u4e0d\u540c\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u903b\u8f91\uff0c\u9632\u6b62\u6a21\u578b\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\u3002\u60a8\u751a\u81f3\u53ef\u4ee5\u5728\u4e8b\u52a1\u4e2d\u4e2d\u6b62\u64cd\u4f5c\uff0c\u5373\u4f7f\u64cd\u4f5c\u5df2\u5b8c\u6210\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'impl ActiveModelBehavior for ActiveModel {\n    /// \u521b\u5efa\u4e00\u4e2a\u5177\u6709\u9ed8\u8ba4\u503c\u7684\u65b0 ActiveModel\u3002\u4e5f\u53ef\u4ee5\u7531 `Default::default()` \u4f7f\u7528\u3002\n    fn new() -> Self {\n        Self {\n            uuid: Set(Uuid::new_v4()),\n            ..ActiveModelTrait::default()\n        }\n    }\n\n    /// \u5728\u63d2\u5165 / \u66f4\u65b0\u4e4b\u524d\u89e6\u53d1\n    fn before_save(self, insert: bool) -> Result<Self, DbErr> {\n        if self.price.as_ref() <= &0.0 {\n            Err(DbErr::Custom(format!(\n                "[before_save] \u65e0\u6548\u4ef7\u683c\uff0c\u63d2\u5165: {}",\n                insert\n            )))\n        } else {\n            Ok(self)\n        }\n    }\n\n    /// \u5728\u63d2\u5165 / \u66f4\u65b0\u4e4b\u540e\u89e6\u53d1\n    fn after_save(model: Model, insert: bool) -> Result<Model, DbErr> {\n        Ok(model)\n    }\n\n    /// \u5728\u5220\u9664\u4e4b\u524d\u89e6\u53d1\n    fn before_delete(self) -> Result<Self, DbErr> {\n        Ok(self)\n    }\n\n    /// \u5728\u5220\u9664\u4e4b\u540e\u89e6\u53d1\n    fn after_delete(self) -> Result<Self, DbErr> {\n        Ok(self)\n    }\n}\n')),(0,a.yg)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u81ea\u5b9a\u4e49\uff0c\u53ea\u9700\u5199\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"impl ActiveModelBehavior for ActiveModel {}\n")),(0,a.yg)("h2",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,a.yg)("p",null,"\u6307\u5b9a\u4e0e\u5176\u4ed6\u5b9e\u4f53\u7684\u5173\u7cfb\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,a.yg)("h2",{id:"\u76f8\u5173"},"\u76f8\u5173"),(0,a.yg)("p",null,"\u5b9a\u4e49\u7279\u5f81\u7ea6\u675f\uff0c\u4ee5\u5e2e\u52a9\u60a8\u4e00\u8d77\u67e5\u8be2\u76f8\u5173\u5b9e\u4f53\uff0c\u5c24\u5176\u5728\u591a\u5bf9\u591a\u5173\u7cfb\u4e2d\u975e\u5e38\u6709\u7528\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"impl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n\nimpl Related<super::filling::Entity> for Entity {\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Filling.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        Some(super::cake_filling::Relation::Cake.def().rev())\n    }\n}\n")))}m.isMDXComponent=!0}}]);