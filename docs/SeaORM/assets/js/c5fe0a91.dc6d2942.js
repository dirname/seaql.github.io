"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[62947],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>s});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),y=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=y(e.components);return a.createElement(g.Provider,{value:n},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=y(t),u=r,s=o["".concat(g,".").concat(u)]||o[u]||d[u]||l;return t?a.createElement(s,i(i({ref:n},m),{},{components:t})):a.createElement(s,i({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var p={};for(var g in n)hasOwnProperty.call(n,g)&&(p[g]=n[g]);p.originalType=e,p[o]="string"==typeof e?e:r,i[1]=p;for(var y=2;y<l;y++)i[y]=t[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>y});var a=t(58168),r=(t(96540),t(15680));const l={},i="\u5b9e\u4f53\u7ed3\u6784",p={unversionedId:"generate-entity/entity-structure",id:"version-0.7.x/generate-entity/entity-structure",title:"\u5b9e\u4f53\u7ed3\u6784",description:"\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u7b80\u5355\u7684 Cake \u5b9e\u4f53\u3002",source:"@site/versioned_docs/version-0.7.x/03-generate-entity/02-entity-structure.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/entity-structure",permalink:"/SeaORM/docs/0.7.x/generate-entity/entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/03-generate-entity/02-entity-structure.md",tags:[],version:"0.7.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1663232320,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 sea-orm-cli",permalink:"/SeaORM/docs/0.7.x/generate-entity/sea-orm-cli"},next:{title:"\u6269\u5c55\u5b9e\u4f53\u7ed3\u6784",permalink:"/SeaORM/docs/0.7.x/generate-entity/expanded-entity-structure"}},g={},y=[{value:"\u5b9e\u4f53",id:"\u5b9e\u4f53",level:2},{value:"\u8868\u540d",id:"\u8868\u540d",level:3},{value:"\u5217",id:"\u5217",level:2},{value:"\u5217\u540d",id:"\u5217\u540d",level:3},{value:"\u5217\u7c7b\u578b",id:"\u5217\u7c7b\u578b",level:3},{value:"\u989d\u5916\u5c5e\u6027",id:"\u989d\u5916\u5c5e\u6027",level:3},{value:"\u5ffd\u7565\u5c5e\u6027",id:"\u5ffd\u7565\u5c5e\u6027",level:3},{value:"\u4e3b\u952e",id:"\u4e3b\u952e",level:2},{value:"\u81ea\u589e",id:"\u81ea\u589e",level:3},{value:"\u590d\u5408\u952e",id:"\u590d\u5408\u952e",level:3},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",level:2}],m={toc:y},o="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(o,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u5b9e\u4f53\u7ed3\u6784"},"\u5b9e\u4f53\u7ed3\u6784"),(0,r.yg)("p",null,"\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"Cake")," \u5b9e\u4f53\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,r.yg)("h2",{id:"\u5b9e\u4f53"},"\u5b9e\u4f53"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"DeriveEntityModel")," \u5b8f\u8d1f\u8d23\u5b9a\u4e49\u4e00\u4e2a\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"Model"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Column")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"PrimaryKey")," \u76f8\u5173\u8054\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity"),"\u3002"),(0,r.yg)("h3",{id:"\u8868\u540d"},"\u8868\u540d"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"table_name")," \u5c5e\u6027\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u5bf9\u5e94\u7684\u8868\u540d\u3002\u53ef\u9009\u5730\uff0c\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"schema_name")," \u6307\u5b9a\u6570\u636e\u5e93\u6a21\u5f0f\u6216\u6570\u636e\u5e93\u540d\u79f0\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(table_name = "cake", schema_name = "public")]\npub struct Model { ... }\n')),(0,r.yg)("h2",{id:"\u5217"},"\u5217"),(0,r.yg)("h3",{id:"\u5217\u540d"},"\u5217\u540d"),(0,r.yg)("p",null,"\u6240\u6709\u5217\u540d\u5047\u5b9a\u4e3a\u86c7\u5f62\u547d\u540d\u3002\u5982\u679c\u60a8\u60f3\u8986\u76d6\u5217\u540d\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"column_name")," \u5c5e\u6027\u6765\u5b9e\u73b0\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_name = "name")]\npub name: String\n')),(0,r.yg)("h3",{id:"\u5217\u7c7b\u578b"},"\u5217\u7c7b\u578b"),(0,r.yg)("p",null,"\u5217\u7c7b\u578b\u5c06\u6839\u636e\u4ee5\u4e0b\u6620\u5c04\u81ea\u52a8\u63a8\u5bfc\uff1a"),(0,r.yg)("p",null,"Rust \u539f\u59cb\u6570\u636e\u7c7b\u578b\u7684\u6620\u5c04\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Rust \u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7c7b\u578b ",(0,r.yg)("br",null)," (",(0,r.yg)("a",{parentName:"th",href:"https://docs.rs/sea-orm/0.7/sea_orm/entity/enum.ColumnType.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ColumnType")),")"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Char")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"i8")),(0,r.yg)("td",{parentName:"tr",align:null},"TinyInteger")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"u8")),(0,r.yg)("td",{parentName:"tr",align:null},"TinyUnsigned")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"i16")),(0,r.yg)("td",{parentName:"tr",align:null},"SmallInteger")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"u16")),(0,r.yg)("td",{parentName:"tr",align:null},"SmallUnsigned")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"i32")),(0,r.yg)("td",{parentName:"tr",align:null},"Integer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"u32")),(0,r.yg)("td",{parentName:"tr",align:null},"Unsigned")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"i64")),(0,r.yg)("td",{parentName:"tr",align:null},"BigInteger")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"u64")),(0,r.yg)("td",{parentName:"tr",align:null},"BigUnsigned")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"f32")),(0,r.yg)("td",{parentName:"tr",align:null},"Float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"f64")),(0,r.yg)("td",{parentName:"tr",align:null},"Double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bool")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Vec<u8>")),(0,r.yg)("td",{parentName:"tr",align:null},"Binary")))),(0,r.yg)("p",null,"Rust \u975e\u539f\u59cb\u6570\u636e\u7c7b\u578b\u7684\u6620\u5c04\u3002\u60a8\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs"},(0,r.yg)("inlineCode",{parentName:"a"},"entity/prelude.rs"))," \u83b7\u53d6\u6240\u6709\u91cd\u65b0\u5bfc\u51fa\u7684\u7c7b\u578b\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Rust \u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7c7b\u578b ",(0,r.yg)("br",null)," (",(0,r.yg)("a",{parentName:"th",href:"https://docs.rs/sea-orm/0.7/sea_orm/entity/enum.ColumnType.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ColumnType")),")"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Date"),": chrono::NaiveDate ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"TimeDate"),": time::Date"),(0,r.yg)("td",{parentName:"tr",align:null},"Date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Time"),": chrono::NaiveTime ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"TimeTime"),": time::Time"),(0,r.yg)("td",{parentName:"tr",align:null},"Time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DateTime"),": chrono::NaiveDateTime ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"TimeDateTime"),": time::PrimitiveDateTime"),(0,r.yg)("td",{parentName:"tr",align:null},"DateTime")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DateTimeLocal"),": chrono::DateTime","<","Local",">"," ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"DateTimeUtc"),": chrono::DateTime","<","Utc",">"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DateTimeWithTimeZone"),": chrono::DateTime","<","FixedOffset",">"," ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"TimeDateTimeWithTimeZone"),": time::OffsetDateTime"),(0,r.yg)("td",{parentName:"tr",align:null},"TimestampWithTimeZone")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Uuid"),": uuid::Uuid"),(0,r.yg)("td",{parentName:"tr",align:null},"Uuid")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Json"),": serde_json::Value"),(0,r.yg)("td",{parentName:"tr",align:null},"Json")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Decimal"),": rust_decimal::Decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"Decimal")))),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"column_type")," \u5c5e\u6027\u8986\u76d6 Rust \u7c7b\u578b\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"ColumnType")," \u4e4b\u95f4\u7684\u9ed8\u8ba4\u6620\u5c04\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text")]\npub name: String\n')),(0,r.yg)("h3",{id:"\u989d\u5916\u5c5e\u6027"},"\u989d\u5916\u5c5e\u6027"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u4e3a\u5217\u6dfb\u52a0\u989d\u5916\u7684\u5c5e\u6027 ",(0,r.yg)("inlineCode",{parentName:"p"},"default_value"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"unique"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"indexed")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"nullable"),"\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u4e3a\u53ef\u9009\u5c5e\u6027\u6307\u5b9a\u4e86\u81ea\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"p"},"column_type"),"\uff0c\u60a8\u8fd8\u5fc5\u987b\u6307\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"nullable"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]\npub name: Option<String>\n')),(0,r.yg)("h3",{id:"\u5ffd\u7565\u5c5e\u6027"},"\u5ffd\u7565\u5c5e\u6027"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u5ffd\u7565\u7279\u5b9a\u7684\u6a21\u578b\u5c5e\u6027\uff0c\u4f7f\u5176\u4e0d\u6620\u5c04\u5230\u4efb\u4f55\u6570\u636e\u5e93\u5217\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"ignore")," \u6ce8\u91ca\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(ignore)]\npub ignore_me: String\n")),(0,r.yg)("h2",{id:"\u4e3b\u952e"},"\u4e3b\u952e"),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"primary_key")," \u5c5e\u6027\u5c06\u5217\u6807\u8bb0\u4e3a\u4e3b\u952e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key)]\npub id: i32\n")),(0,r.yg)("h3",{id:"\u81ea\u589e"},"\u81ea\u589e"),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"primary_key")," \u5217\u9690\u542b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"auto_increment"),"\u3002\u901a\u8fc7\u6307\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," \u53ef\u4ee5\u8986\u76d6\u6b64\u8bbe\u7f6e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key, auto_increment = false)]\npub id: i32\n")),(0,r.yg)("h3",{id:"\u590d\u5408\u952e"},"\u590d\u5408\u952e"),(0,r.yg)("p",null,"\u8fd9\u901a\u5e38\u53d1\u751f\u5728\u8fde\u63a5\u8868\u4e2d\uff0c\u5176\u4e2d\u4e00\u4e2a\u4e24\u5217\u5143\u7ec4\u7528\u4f5c\u4e3b\u952e\u3002\u53ea\u9700\u6ce8\u91ca\u591a\u4e2a\u5217\u4ee5\u5b9a\u4e49\u590d\u5408\u4e3b\u952e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u590d\u5408\u952e\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"auto_increment")," \u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct Model {\n    #[sea_orm(primary_key)]\n    pub cake_id: i32,\n    #[sea_orm(primary_key)]\n    pub fruit_id: i32,\n}\n")),(0,r.yg)("h2",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"DeriveRelation")," \u5b8f\u662f\u5b9e\u73b0 ",(0,r.yg)("inlineCode",{parentName:"p"},"RelationTrait")," \u7684\u7b80\u5355\u5305\u88c5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,r.yg)("p",null,"\u5c55\u5f00\u4e3a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"impl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,r.yg)("p",null,"\u5728\u4e0b\u4e00\u8282\u4e2d\u4e86\u89e3\u6709\u5173\u5173\u7cfb\u7684\u66f4\u591a\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);