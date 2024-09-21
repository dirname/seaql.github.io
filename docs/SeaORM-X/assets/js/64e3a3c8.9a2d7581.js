"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[208],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>N});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),y=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=y(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),p=y(n),u=r,N=p["".concat(m,".").concat(u)]||p[u]||o[u]||l;return n?a.createElement(N,i(i({ref:t},d),{},{components:n})):a.createElement(N,i({ref:t},d))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var g={};for(var m in t)hasOwnProperty.call(t,m)&&(g[m]=t[m]);g.originalType=e,g[p]="string"==typeof e?e:r,i[1]=g;for(var y=2;y<l;y++)i[y]=n[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>g,toc:()=>y});var a=n(8168),r=(n(6540),n(5680));const l={},i="\u5b9e\u4f53\u7ed3\u6784",g={unversionedId:"generate-entity/entity-structure",id:"generate-entity/entity-structure",title:"\u5b9e\u4f53\u7ed3\u6784",description:"\u5217",source:"@site/docs/04-generate-entity/02-entity-structure.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/entity-structure",permalink:"/SeaORM-X/docs/generate-entity/entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/04-generate-entity/02-entity-structure.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712557834,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 sea-orm-cli",permalink:"/SeaORM-X/docs/generate-entity/sea-orm-cli"},next:{title:"\u63d2\u5165",permalink:"/SeaORM-X/docs/basic-crud/insert"}},m={},y=[{value:"\u5217",id:"\u5217",level:2},{value:"\u5217\u7c7b\u578b",id:"\u5217\u7c7b\u578b",level:3}],d={toc:y},p="wrapper";function o(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u5b9e\u4f53\u7ed3\u6784"},"\u5b9e\u4f53\u7ed3\u6784"),(0,r.yg)("h2",{id:"\u5217"},"\u5217"),(0,r.yg)("h3",{id:"\u5217\u7c7b\u578b"},"\u5217\u7c7b\u578b"),(0,r.yg)("p",null,"\u5217\u7c7b\u578b\u5c06\u901a\u8fc7\u4ee5\u4e0b\u6620\u5c04\u81ea\u52a8\u63a8\u5bfc\uff1a"),(0,r.yg)("p",null,"Rust \u539f\u59cb\u6570\u636e\u7c7b\u578b\u7684\u6620\u5c04\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Rust \u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7c7b\u578b ",(0,r.yg)("br",null)," (",(0,r.yg)("a",{parentName:"th",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ColumnType")),")"),(0,r.yg)("th",{parentName:"tr",align:null},"MSSQL ",(0,r.yg)("br",null)," \u6570\u636e\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Char"),(0,r.yg)("td",{parentName:"tr",align:null},"nchar")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"nvarchar")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"i8")),(0,r.yg)("td",{parentName:"tr",align:null},"TinyInteger"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"u8")),(0,r.yg)("td",{parentName:"tr",align:null},"TinyUnsigned"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"i16")),(0,r.yg)("td",{parentName:"tr",align:null},"SmallInteger"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"u16")),(0,r.yg)("td",{parentName:"tr",align:null},"SmallUnsigned"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"i32")),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"u32")),(0,r.yg)("td",{parentName:"tr",align:null},"Unsigned"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"i64")),(0,r.yg)("td",{parentName:"tr",align:null},"BigInteger"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"u64")),(0,r.yg)("td",{parentName:"tr",align:null},"BigUnsigned"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"f32")),(0,r.yg)("td",{parentName:"tr",align:null},"Float"),(0,r.yg)("td",{parentName:"tr",align:null},"real")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"f64")),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bool")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"bit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Vec<u8>")),(0,r.yg)("td",{parentName:"tr",align:null},"Binary"),(0,r.yg)("td",{parentName:"tr",align:null},"binary")))),(0,r.yg)("p",null,"Rust \u975e\u539f\u59cb\u6570\u636e\u7c7b\u578b\u7684\u6620\u5c04\u3002\u60a8\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs"},(0,r.yg)("inlineCode",{parentName:"a"},"entity/prelude.rs"))," \u4ee5\u83b7\u53d6\u6240\u6709\u91cd\u65b0\u5bfc\u51fa\u7684\u7c7b\u578b\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Rust \u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7c7b\u578b ",(0,r.yg)("br",null)," (",(0,r.yg)("a",{parentName:"th",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,r.yg)("inlineCode",{parentName:"a"},"ColumnType")),")"),(0,r.yg)("th",{parentName:"tr",align:null},"MSSQL ",(0,r.yg)("br",null)," \u6570\u636e\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Date"),": chrono::NaiveDate ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"TimeDate"),": time::Date"),(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Time"),": chrono::NaiveTime ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"TimeTime"),": time::Time"),(0,r.yg)("td",{parentName:"tr",align:null},"Time"),(0,r.yg)("td",{parentName:"tr",align:null},"time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DateTime"),": chrono::NaiveDateTime ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"TimeDateTime"),": time::PrimitiveDateTime"),(0,r.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DateTimeLocal"),": chrono::DateTime","<","Local",">"," ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"DateTimeUtc"),": chrono::DateTime","<","Utc",">"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DateTimeWithTimeZone"),": chrono::DateTime","<","FixedOffset",">"," ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"TimeDateTimeWithTimeZone"),": time::OffsetDateTime"),(0,r.yg)("td",{parentName:"tr",align:null},"TimestampWithTimeZone"),(0,r.yg)("td",{parentName:"tr",align:null},"datetimeoffset")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Uuid"),": uuid::Uuid, uuid::fmt::Braced, uuid::fmt::Hyphenated, uuid::fmt::Simple, uuid::fmt::Urn"),(0,r.yg)("td",{parentName:"tr",align:null},"Uuid"),(0,r.yg)("td",{parentName:"tr",align:null},"uniqueidentifier")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Json"),": serde_json::Value"),(0,r.yg)("td",{parentName:"tr",align:null},"Json"),(0,r.yg)("td",{parentName:"tr",align:null},"nvarchar(max)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Decimal"),": rust_decimal::Decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"Decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal")))))}o.isMDXComponent=!0}}]);