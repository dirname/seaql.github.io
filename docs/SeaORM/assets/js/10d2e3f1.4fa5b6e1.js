"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[88897],{15680:(e,n,i)=>{i.d(n,{xA:()=>s,yg:()=>d});var l=i(96540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,l,t=function(e,n){if(null==e)return{};var i,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var p=l.createContext({}),g=function(e){var n=l.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},s=function(e){var n=g(e.components);return l.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=g(i),m=t,d=u["".concat(p,".").concat(m)]||u[m]||y[m]||a;return i?l.createElement(d,r(r({ref:n},s),{},{components:i})):l.createElement(d,r({ref:n},s))}));function d(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,r=new Array(a);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:t,r[1]=o;for(var g=2;g<a;g++)r[g]=i[g];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}m.displayName="MDXCreateElement"},68381:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var l=i(58168),t=(i(96540),i(15680));const a={},r="\u591a\u5bf9\u591a\u5173\u7cfb",o={unversionedId:"relation/many-to-many",id:"relation/many-to-many",title:"\u591a\u5bf9\u591a\u5173\u7cfb",description:"\u591a\u5bf9\u591a\u5173\u7cfb\u7531\u4e09\u4e2a\u8868\u5f62\u6210\uff0c\u5176\u4e2d\u4e24\u4e2a\u8868\u901a\u8fc7\u8fde\u63a5\u8868\u76f8\u5173\u8054\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a Cake \u53ef\u4ee5\u6709\u591a\u4e2a Filling\uff0c\u800c Filling \u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u4e2d\u95f4\u5b9e\u4f53 CakeFilling \u5171\u4eab\u591a\u4e2a Cake\u3002",source:"@site/docs/06-relation/03-many-to-many.md",sourceDirName:"06-relation",slug:"/relation/many-to-many",permalink:"/SeaORM/docs/next/relation/many-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/06-relation/03-many-to-many.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690392735,formattedLastUpdatedAt:"Jul 26, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u5bf9\u591a",permalink:"/SeaORM/docs/next/relation/one-to-many"},next:{title:"\u94fe\u63a5\u5173\u7cfb",permalink:"/SeaORM/docs/next/relation/chained-relations"}},p={},g=[{value:"\u5b9a\u4e49\u5173\u7cfb",id:"\u5b9a\u4e49\u5173\u7cfb",level:2},{value:"\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb",id:"\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb",level:2}],s={toc:g},u="wrapper";function y(e){let{components:n,...i}=e;return(0,t.yg)(u,(0,l.A)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u591a\u5bf9\u591a\u5173\u7cfb"},"\u591a\u5bf9\u591a\u5173\u7cfb"),(0,t.yg)("p",null,"\u591a\u5bf9\u591a\u5173\u7cfb\u7531\u4e09\u4e2a\u8868\u5f62\u6210\uff0c\u5176\u4e2d\u4e24\u4e2a\u8868\u901a\u8fc7\u8fde\u63a5\u8868\u76f8\u5173\u8054\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a ",(0,t.yg)("inlineCode",{parentName:"p"},"Cake")," \u53ef\u4ee5\u6709\u591a\u4e2a ",(0,t.yg)("inlineCode",{parentName:"p"},"Filling"),"\uff0c\u800c ",(0,t.yg)("inlineCode",{parentName:"p"},"Filling")," \u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u4e2d\u95f4\u5b9e\u4f53 ",(0,t.yg)("inlineCode",{parentName:"p"},"CakeFilling")," \u5171\u4eab\u591a\u4e2a ",(0,t.yg)("inlineCode",{parentName:"p"},"Cake"),"\u3002"),(0,t.yg)("h2",{id:"\u5b9a\u4e49\u5173\u7cfb"},"\u5b9a\u4e49\u5173\u7cfb"),(0,t.yg)("p",null,"\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u4e0a\uff0c\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"Related<filling::Entity>")," \u7279\u6027\u3002"),(0,t.yg)("p",null,"\u5728 SeaORM \u4e2d\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"Relation")," \u662f\u4e00\u4e2a\u7bad\u5934\uff1a\u5b83\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"from")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"to"),"\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"cake_filling::Relation::Cake")," \u5b9a\u4e49\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"CakeFilling -> Cake"),"\u3002\u8c03\u7528 ",(0,t.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.RelationDef.html#method.rev"},(0,t.yg)("inlineCode",{parentName:"a"},"rev"))," \u5c06\u5176\u53cd\u8f6c\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"Cake -> CakeFilling"),"\u3002"),(0,t.yg)("p",null,"\u5c06\u5176\u4e0e\u5b9a\u4e49\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"cake_filling::Relation::Filling")," \u94fe\u63a5\u5728\u4e00\u8d77\uff0c\u5f62\u6210 ",(0,t.yg)("inlineCode",{parentName:"p"},"Cake -> CakeFilling -> Filling"),"\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-rust",metastring:'{4,10} title="entity/cake.rs"',"{4,10}":!0,title:'"entity/cake.rs"'},"impl Related<super::filling::Entity> for Entity {\n    // \u6700\u7ec8\u5173\u7cfb\u4e3a Cake -> CakeFilling -> Filling\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Filling.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        // \u539f\u59cb\u5173\u7cfb\u4e3a CakeFilling -> Cake,\n        // \u7ecf\u8fc7 `rev` \u540e\u6210\u4e3a Cake -> CakeFilling\n        Some(super::cake_filling::Relation::Cake.def().rev())\n    }\n}\n")),(0,t.yg)("p",null,"\u540c\u6837\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"Filling")," \u5b9e\u4f53\u4e0a\uff0c\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"Related<cake::Entity>")," \u7279\u6027\u3002\u9996\u5148\uff0c\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"via")," \u4e0e ",(0,t.yg)("inlineCode",{parentName:"p"},"cake_filling::Relation::Filling")," \u5173\u7cfb\u7684\u53cd\u5411\u5173\u8054\u8fde\u63a5\uff0c\u7136\u540e\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"to")," \u8fde\u63a5 ",(0,t.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u4e0e ",(0,t.yg)("inlineCode",{parentName:"p"},"cake_filling::Relation::Cake")," \u5173\u7cfb\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-rust",metastring:'{3,7} title="entity/filling.rs"',"{3,7}":!0,title:'"entity/filling.rs"'},"impl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Cake.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        Some(super::cake_filling::Relation::Filling.def().rev())\n    }\n}\n")),(0,t.yg)("h2",{id:"\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb"},"\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb"),(0,t.yg)("p",null,"\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"CakeFilling")," \u5b9e\u4f53\u4e2d\uff0c\u5b83\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"cake_id")," \u5c5e\u6027\u5f15\u7528\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u7684\u4e3b\u952e\uff0c\u800c\u5b83\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"filling_id")," \u5c5e\u6027\u5f15\u7528\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"Filling")," \u5b9e\u4f53\u7684\u4e3b\u952e\u3002"),(0,t.yg)("p",null,"\u8981\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5728 ",(0,t.yg)("inlineCode",{parentName:"li"},"Relation")," \u679a\u4e3e\u4e2d\u6dfb\u52a0\u4e24\u4e2a\u65b0\u53d8\u4f53 ",(0,t.yg)("inlineCode",{parentName:"li"},"Cake")," \u548c ",(0,t.yg)("inlineCode",{parentName:"li"},"Filling"),"\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"li"},"Entity::belongs_to()")," \u5b9a\u4e49\u8fd9\u4e24\u4e2a\u5173\u7cfb\u3002")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/cake_filling.rs"',title:'"entity/cake_filling.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n    Filling,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n            Self::Filling => Entity::belongs_to(super::filling::Entity)\n                .from(Column::FillingId)\n                .to(super::filling::Column::Id)\n                .into(),\n        }\n    }\n}\n")),(0,t.yg)("p",null,"\u53e6\u5916\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"DeriveRelation")," \u5b8f\u7b80\u5316\u5b9a\u4e49\uff0c\u5176\u4e2d\u4ee5\u4e0b\u4ee3\u7801\u6d88\u9664\u4e86\u5bf9\u4e0a\u9762 ",(0,t.yg)("inlineCode",{parentName:"p"},"RelationTrait")," \u5b9e\u73b0\u7684\u9700\u6c42\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n    #[sea_orm(\n        belongs_to = "super::filling::Entity",\n        from = "Column::FillingId",\n        to = "super::filling::Column::Id"\n    )]\n    Filling,\n}\n')),(0,t.yg)("details",null,(0,t.yg)("summary",null,"\u6ce8\u610f\uff0c\u5982\u679c\u901a\u8fc7\u4e2d\u95f4\u8868\u5b58\u5728\u591a\u6761\u8def\u5f84\uff0c\u5c06\u4e0d\u4f1a\u751f\u6210\u5e26\u6709 `via` \u548c `to` \u65b9\u6cd5\u7684 `Related` \u5b9e\u73b0\u3002"),(0,t.yg)("p",null,"\u4f8b\u5982\uff0c\u5728\u4e0b\u9762\u5b9a\u4e49\u7684\u6a21\u5f0f\u4e2d\uff0c\u6709\u4e24\u6761\u8def\u5f84\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8def\u5f84 1. ",(0,t.yg)("inlineCode",{parentName:"li"},"users <-> users_votes <-> bills")),(0,t.yg)("li",{parentName:"ul"},"\u8def\u5f84 2. ",(0,t.yg)("inlineCode",{parentName:"li"},"users <-> users_saved_bills <-> bills"))),(0,t.yg)("p",null,"\u56e0\u6b64\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"Related<R>")," \u7684\u5b9e\u73b0\u5c06\u4e0d\u4f1a\u751f\u6210\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users\n(\n  id uuid  PRIMARY KEY  DEFAULT uuid_generate_v1mc(),\n  email TEXT UNIQUE NOT NULL,\n  ...\n);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE bills\n(\n  id uuid  PRIMARY KEY  DEFAULT uuid_generate_v1mc(),\n  ...\n);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users_votes\n(\n  user_id uuid REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,\n  bill_id uuid REFERENCES bills (id) ON UPDATE CASCADE ON DELETE CASCADE,\n  vote boolean NOT NULL,\n  CONSTRAINT users_bills_pkey PRIMARY KEY (user_id, bill_id)\n);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users_saved_bills\n(\n  user_id uuid REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,\n  bill_id uuid REFERENCES bills (id) ON UPDATE CASCADE ON DELETE CASCADE,\n  CONSTRAINT users_saved_bills_pkey PRIMARY KEY (user_id, bill_id)\n);\n"))))}y.isMDXComponent=!0}}]);