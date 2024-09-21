"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[15225],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,y=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const i={},s="\u521b\u5efa\u7d22\u5f15",o={unversionedId:"schema-statement/create-index",id:"version-0.12.x/schema-statement/create-index",title:"\u521b\u5efa\u7d22\u5f15",description:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Schema::createindexfromentity \u4ece\u5b9e\u4f53\u521b\u5efa\u7d22\u5f15\uff0c\u6216\u624b\u52a8\u6784\u9020 IndexCreateStatement\u3002",source:"@site/versioned_docs/version-0.12.x/09-schema-statement/03-create-index.md",sourceDirName:"09-schema-statement",slug:"/schema-statement/create-index",permalink:"/SeaORM/docs/0.12.x/schema-statement/create-index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/09-schema-statement/03-create-index.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690464322,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u679a\u4e3e",permalink:"/SeaORM/docs/0.12.x/schema-statement/create-enum"},next:{title:"\ud83e\udded Seaography \u4ecb\u7ecd",permalink:"/SeaORM/docs/0.12.x/seaography/seaography-intro"}},c={},d=[],l={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u521b\u5efa\u7d22\u5f15"},"\u521b\u5efa\u7d22\u5f15"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_index_from_entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Schema::create_index_from_entity"))," \u4ece\u5b9e\u4f53\u521b\u5efa\u7d22\u5f15\uff0c\u6216\u624b\u52a8\u6784\u9020 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/index/struct.IndexCreateStatement.html"},(0,a.yg)("inlineCode",{parentName:"a"},"IndexCreateStatement")),"\u3002"),(0,a.yg)("p",null,"\u793a\u4f8b ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/indexes.rs"},(0,a.yg)("inlineCode",{parentName:"a"},"Indexes"))," \u5b9e\u4f53\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="indexes.rs"',title:'"indexes.rs"'},"impl ColumnTrait for Column {\n    type EntityName = Entity;\n\n    fn def(&self) -> ColumnDef {\n        match self {\n            Self::Index1Attr => ColumnType::Integer.def().indexed(), // \u5b9a\u4e49\u7d22\u5f151\u5c5e\u6027\n            Self::Index2Attr => ColumnType::Integer.def().indexed().unique(), // \u5b9a\u4e49\u7d22\u5f152\u5c5e\u6027\u4e14\u552f\u4e00\n        }\n    }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{sea_query, tests_cfg::*, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nlet stmts = schema.create_index_from_entity(indexes::Entity);\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index1_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index1Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[0]), builder.build(&idx));\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index2_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index2Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[1]), builder.build(&idx));\n')))}u.isMDXComponent=!0}}]);