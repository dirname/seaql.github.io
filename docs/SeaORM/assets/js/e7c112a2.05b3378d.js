"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[43991],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,c=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return t?r.createElement(c,o(o({ref:n},y),{},{components:t})):r.createElement(c,o({ref:n},y))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const i={},o="\u4e00\u5bf9\u4e00",l={unversionedId:"relation/one-to-one",id:"version-1.0.x/relation/one-to-one",title:"\u4e00\u5bf9\u4e00",description:"\u611f\u8c22\u60a8\u9605\u8bfb\u6b64\u6587\u6863\u3002\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u8bf7\u82b1\u51e0\u5206\u949f\u65f6\u95f4\u5b8c\u6210\u6211\u4eec\u7684 SeaQL \u793e\u533a\u8c03\u67e5\u3002\u8fd9\u5bf9 SeaORM \u7684\u6301\u7eed\u5f00\u53d1\u548c\u7ef4\u62a4\u81f3\u5173\u91cd\u8981\u3002",source:"@site/versioned_docs/version-1.0.x/06-relation/01-one-to-one.md",sourceDirName:"06-relation",slug:"/relation/one-to-one",permalink:"/SeaORM/docs/relation/one-to-one",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-1.0.x/06-relation/01-one-to-one.md",tags:[],version:"1.0.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833108,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u539f\u59cb SQL",permalink:"/SeaORM/docs/basic-crud/raw-sql"},next:{title:"\u4e00\u5bf9\u591a",permalink:"/SeaORM/docs/relation/one-to-many"}},p={},u=[{value:"\u5b9a\u4e49\u5173\u7cfb",id:"\u5b9a\u4e49\u5173\u7cfb",level:2},{value:"\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb",id:"\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb",level:2}],y={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4e00\u5bf9\u4e00"},"\u4e00\u5bf9\u4e00"),(0,a.yg)("admonition",{title:"\u6211\u4eec\u9700\u8981\u4f60\u7684\u5e2e\u52a9\uff01\ud83d\udcdd",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u611f\u8c22\u60a8\u9605\u8bfb\u6b64\u6587\u6863\u3002\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u8bf7\u82b1\u51e0\u5206\u949f\u65f6\u95f4\u5b8c\u6210\u6211\u4eec\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/community-survey"},"SeaQL \u793e\u533a\u8c03\u67e5"),"\u3002\u8fd9\u5bf9 SeaORM \u7684\u6301\u7eed\u5f00\u53d1\u548c\u7ef4\u62a4\u81f3\u5173\u91cd\u8981\u3002")),(0,a.yg)("p",null,"\u4e00\u5bf9\u4e00\u5173\u7cfb\u662f\u6570\u636e\u5e93\u5173\u7cfb\u4e2d\u6700\u57fa\u672c\u7684\u4e00\u79cd\u7c7b\u578b\u3002\u5047\u8bbe ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u6700\u591a\u6709\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Fruit")," \u914d\u6599\u3002"),(0,a.yg)("h2",{id:"\u5b9a\u4e49\u5173\u7cfb"},"\u5b9a\u4e49\u5173\u7cfb"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u4e0a\u5b9a\u4e49\u5173\u7cfb\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5411 ",(0,a.yg)("inlineCode",{parentName:"li"},"Relation")," \u679a\u4e3e\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u53d8\u4f53 ",(0,a.yg)("inlineCode",{parentName:"li"},"Fruit"),"\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"Entity::has_one()")," \u5b9a\u4e49\u5b83\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,a.yg)("inlineCode",{parentName:"li"},"Related<Entity>")," \u7279\u6027\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'{3,9,14} title="entity/cake.rs"',"{3,9,14}":!0,title:'"entity/cake.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_one(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,a.yg)("p",null,"\u6216\u8005\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"DeriveRelation")," \u5b8f\u7b80\u5316\u5b9a\u4e49\uff0c\u4ee5\u4e0b\u4ee3\u7801\u7701\u7565\u4e86\u4e0a\u9762 ",(0,a.yg)("inlineCode",{parentName:"p"},"RelationTrait")," \u7684\u5b9e\u73b0\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_one = "super::fruit::Entity")]\n    Fruit,\n}\n\n// `Related` \u7279\u6027\u9700\u8981\u624b\u52a8\u5b9e\u73b0\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n')),(0,a.yg)("h2",{id:"\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb"},"\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"Fruit")," \u5b9e\u4f53\u4e2d\uff0c\u5b83\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"cake_id")," \u5c5e\u6027\u5f15\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u7684\u4e3b\u952e\u3002"),(0,a.yg)("p",null,"\u8981\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5411 ",(0,a.yg)("inlineCode",{parentName:"li"},"Fruit")," \u5b9e\u4f53\u6dfb\u52a0\u4e00\u4e2a\u65b0\u679a\u4e3e\u53d8\u4f53 ",(0,a.yg)("inlineCode",{parentName:"li"},"Relation::Cake"),"\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"Entity::belongs_to()")," \u65b9\u6cd5\u7f16\u5199\u5176\u5b9a\u4e49\uff0c\u6211\u4eec\u59cb\u7ec8\u4f7f\u7528\u6b64\u65b9\u6cd5\u5b9a\u4e49\u53cd\u5411\u5173\u7cfb\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,a.yg)("inlineCode",{parentName:"li"},"Related<cake::Entity>")," \u7279\u6027\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")),(0,a.yg)("p",null,"\u6216\u8005\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"DeriveRelation")," \u5b8f\u7b80\u5316\u5b9a\u4e49\uff0c\u4ee5\u4e0b\u4ee3\u7801\u7701\u7565\u4e86\u4e0a\u9762 ",(0,a.yg)("inlineCode",{parentName:"p"},"RelationTrait")," \u7684\u5b9e\u73b0\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n}\n\n// `Related` \u7279\u6027\u9700\u8981\u624b\u52a8\u5b9e\u73b0\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n')))}m.isMDXComponent=!0}}]);