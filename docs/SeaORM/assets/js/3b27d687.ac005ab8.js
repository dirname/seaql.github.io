"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[24692],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>d});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),g=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},y=function(e){var n=g(e.components);return i.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),m=g(t),u=a,d=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return t?i.createElement(d,r(r({ref:n},y),{},{components:t})):i.createElement(d,r({ref:n},y))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var g=2;g<l;g++)r[g]=t[g];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var i=t(58168),a=(t(96540),t(15680));const l={},r="\u591a\u5bf9\u591a",o={unversionedId:"relation/many-to-many",id:"version-0.9.x/relation/many-to-many",title:"\u591a\u5bf9\u591a",description:"\u591a\u5bf9\u591a\u5173\u7cfb\u7531\u4e09\u5f20\u8868\u6784\u6210\uff0c\u5176\u4e2d\u4e24\u5f20\u8868\u901a\u8fc7\u4e00\u5f20\u8fde\u63a5\u8868\u5173\u8054\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a Cake \u53ef\u4ee5\u6709\u591a\u4e2a Filling\uff0c\u5e76\u4e14\u591a\u4e2a Cake \u901a\u8fc7\u4e00\u4e2a\u4e2d\u95f4\u5b9e\u4f53 CakeFilling \u5171\u4eab Filling\u3002",source:"@site/versioned_docs/version-0.9.x/06-relation/03-many-to-many.md",sourceDirName:"06-relation",slug:"/relation/many-to-many",permalink:"/SeaORM/docs/0.9.x/relation/many-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/06-relation/03-many-to-many.md",tags:[],version:"0.9.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1658050411,formattedLastUpdatedAt:"Jul 17, 2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u5bf9\u591a",permalink:"/SeaORM/docs/0.9.x/relation/one-to-many"},next:{title:"\u94fe\u63a5\u5173\u7cfb",permalink:"/SeaORM/docs/0.9.x/relation/chained-relations"}},p={},g=[{value:"\u5b9a\u4e49\u5173\u7cfb",id:"\u5b9a\u4e49\u5173\u7cfb",level:2},{value:"\u5b9a\u4e49\u9006\u5173\u7cfb",id:"\u5b9a\u4e49\u9006\u5173\u7cfb",level:2}],y={toc:g},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,i.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u591a\u5bf9\u591a"},"\u591a\u5bf9\u591a"),(0,a.yg)("p",null,"\u591a\u5bf9\u591a\u5173\u7cfb\u7531\u4e09\u5f20\u8868\u6784\u6210\uff0c\u5176\u4e2d\u4e24\u5f20\u8868\u901a\u8fc7\u4e00\u5f20\u8fde\u63a5\u8868\u5173\u8054\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u53ef\u4ee5\u6709\u591a\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Filling"),"\uff0c\u5e76\u4e14\u591a\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u901a\u8fc7\u4e00\u4e2a\u4e2d\u95f4\u5b9e\u4f53 ",(0,a.yg)("inlineCode",{parentName:"p"},"CakeFilling")," \u5171\u4eab ",(0,a.yg)("inlineCode",{parentName:"p"},"Filling"),"\u3002"),(0,a.yg)("h2",{id:"\u5b9a\u4e49\u5173\u7cfb"},"\u5b9a\u4e49\u5173\u7cfb"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u4e0a\uff0c\u5b9e\u73b0 ",(0,a.yg)("inlineCode",{parentName:"p"},"Related<filling::Entity>")," \u7279\u5f81\u3002\u9996\u5148\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"cake_filling::Relation::Cake")," \u5173\u7cfb\u7684\u9006\u5173\u7cfb\u8fde\u63a5\u4e2d\u95f4\u8868 ",(0,a.yg)("inlineCode",{parentName:"p"},"via"),"\uff0c\u7136\u540e\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"cake_filling::Relation::Filling")," \u5173\u7cfb\u8fde\u63a5 ",(0,a.yg)("inlineCode",{parentName:"p"},"Filling")," \u5b9e\u4f53\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'{4,10} title="entity/cake.rs"',"{4,10}":!0,title:'"entity/cake.rs"'},"impl Related<super::filling::Entity> for Entity {\n    // \u6700\u7ec8\u5173\u7cfb\u662f Cake -> CakeFilling -> Filling\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Filling.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        // \u539f\u59cb\u5173\u7cfb\u662f CakeFilling -> Cake\uff0c\n        // \u7ecf\u8fc7 `rev` \u540e\u53d8\u4e3a Cake -> CakeFilling\n        Some(super::cake_filling::Relation::Cake.def().rev())\n    }\n}\n")),(0,a.yg)("p",null,"\u540c\u6837\uff0c\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"Filling")," \u5b9e\u4f53\u4e0a\uff0c\u5b9e\u73b0 ",(0,a.yg)("inlineCode",{parentName:"p"},"Related<cake::Entity>")," \u7279\u5f81\u3002\u9996\u5148\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"cake_filling::Relation::Filling")," \u5173\u7cfb\u7684\u9006\u5173\u7cfb\u8fde\u63a5\u4e2d\u95f4\u8868 ",(0,a.yg)("inlineCode",{parentName:"p"},"via"),"\uff0c\u7136\u540e\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"cake_filling::Relation::Cake")," \u5173\u7cfb\u8fde\u63a5 ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'{3,7} title="entity/filling.rs"',"{3,7}":!0,title:'"entity/filling.rs"'},"impl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Cake.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        Some(super::cake_filling::Relation::Filling.def().rev())\n    }\n}\n")),(0,a.yg)("h2",{id:"\u5b9a\u4e49\u9006\u5173\u7cfb"},"\u5b9a\u4e49\u9006\u5173\u7cfb"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"CakeFilling")," \u5b9e\u4f53\u4e2d\uff0c\u5176 ",(0,a.yg)("inlineCode",{parentName:"p"},"cake_id")," \u5c5e\u6027\u5f15\u7528\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u7684\u4e3b\u952e\uff0c\u800c\u5176 ",(0,a.yg)("inlineCode",{parentName:"p"},"filling_id")," \u5c5e\u6027\u5f15\u7528\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"Filling")," \u5b9e\u4f53\u7684\u4e3b\u952e\u3002"),(0,a.yg)("p",null,"\u8981\u5b9a\u4e49\u9006\u5173\u7cfb\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5728 ",(0,a.yg)("inlineCode",{parentName:"li"},"Relation")," \u679a\u4e3e\u4e2d\u6dfb\u52a0\u4e24\u4e2a\u65b0\u53d8\u4f53 ",(0,a.yg)("inlineCode",{parentName:"li"},"Cake")," \u548c ",(0,a.yg)("inlineCode",{parentName:"li"},"Filling"),"\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"Entity::belongs_to()")," \u5b9a\u4e49\u8fd9\u4e24\u4e2a\u5173\u7cfb\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/cake_filling.rs"',title:'"entity/cake_filling.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n    Filling,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n            Self::Filling => Entity::belongs_to(super::filling::Entity)\n                .from(Column::FillingId)\n                .to(super::filling::Column::Id)\n                .into(),\n        }\n    }\n}\n")),(0,a.yg)("p",null,"\u53e6\u4e00\u79cd\u7b80\u5316\u5b9a\u4e49\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"DeriveRelation")," \u5b8f\uff0c\u8fd9\u6837\u53ef\u4ee5\u7701\u7565\u4e0a\u9762 ",(0,a.yg)("inlineCode",{parentName:"p"},"RelationTrait")," \u7684\u5b9e\u73b0\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n    #[sea_orm(\n        belongs_to = "super::filling::Entity",\n        from = "Column::FillingId",\n        to = "super::filling::Column::Id"\n    )]\n    Filling,\n}\n')))}s.isMDXComponent=!0}}]);