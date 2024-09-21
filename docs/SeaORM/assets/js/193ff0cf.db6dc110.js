"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[75479],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,y=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const i={},s="\u521b\u5efa\u7d22\u5f15",o={unversionedId:"generate-sea-query-statement/create-index",id:"version-0.9.x/generate-sea-query-statement/create-index",title:"\u521b\u5efa\u7d22\u5f15",description:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Schema::createindexfromentity \u4ece\u5b9e\u4f53\u521b\u5efa\u7d22\u5f15\uff0c\u6216\u8005\u624b\u52a8\u6784\u9020 IndexCreateStatement\u3002",source:"@site/versioned_docs/version-0.9.x/09-generate-sea-query-statement/03-create-index.md",sourceDirName:"09-generate-sea-query-statement",slug:"/generate-sea-query-statement/create-index",permalink:"/SeaORM/docs/0.9.x/generate-sea-query-statement/create-index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/09-generate-sea-query-statement/03-create-index.md",tags:[],version:"0.9.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1658132012,formattedLastUpdatedAt:"Jul 18, 2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u679a\u4e3e",permalink:"/SeaORM/docs/0.9.x/generate-sea-query-statement/create-enum"},next:{title:"Traits and Types",permalink:"/SeaORM/docs/0.9.x/internal-design/trait-and-type"}},d={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u521b\u5efa\u7d22\u5f15"},"\u521b\u5efa\u7d22\u5f15"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.9/sea_orm/schema/struct.Schema.html#method.create_index_from_entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Schema::create_index_from_entity"))," \u4ece\u5b9e\u4f53\u521b\u5efa\u7d22\u5f15\uff0c\u6216\u8005\u624b\u52a8\u6784\u9020 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/0.9/sea_query/index/struct.IndexCreateStatement.html"},(0,a.yg)("inlineCode",{parentName:"a"},"IndexCreateStatement")),"\u3002"),(0,a.yg)("p",null,"\u793a\u4f8b ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/indexes.rs"},(0,a.yg)("inlineCode",{parentName:"a"},"Indexes"))," \u5b9e\u4f53\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="indexes.rs"',title:'"indexes.rs"'},"impl ColumnTrait for Column {\n    type EntityName = Entity;\n\n    fn def(&self) -> ColumnDef {\n        match self {\n            Self::Index1Attr => ColumnType::Integer.def().indexed(), // \u521b\u5efa\u666e\u901a\u7d22\u5f15\n            Self::Index2Attr => ColumnType::Integer.def().indexed().unique(), // \u521b\u5efa\u552f\u4e00\u7d22\u5f15\n        }\n    }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{sea_query, tests_cfg::*, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nlet stmts = schema.create_index_from_entity(indexes::Entity);\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index1_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index1Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[0]), builder.build(&idx));\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index2_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index2Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[1]), builder.build(&idx));\n')))}m.isMDXComponent=!0}}]);