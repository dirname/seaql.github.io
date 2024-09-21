"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[56426],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),c=a,d=m["".concat(p,".").concat(c)]||m[c]||y[c]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const o={},i="\u4e00\u5bf9\u591a\u5173\u7cfb",l={unversionedId:"relation/one-to-many",id:"version-0.7.x/relation/one-to-many",title:"\u4e00\u5bf9\u591a\u5173\u7cfb",description:"\u4e00\u5bf9\u591a\u5173\u7cfb\u4e0e\u4e00\u5bf9\u4e00\u5173\u7cfb\u7c7b\u4f3c\u3002\u5728\u4e0a\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u201c\u4e00\u4e2a Cake \u5b9e\u4f53\u81f3\u591a\u6709\u4e00\u4e2a Fruit \u914d\u6599\u201d\u7684\u4f8b\u5b50\u3002\u8981\u5c06\u5176\u8f6c\u53d8\u4e3a\u4e00\u5bf9\u591a\u5173\u7cfb\uff0c\u6211\u4eec\u53bb\u6389\u201c\u81f3\u591a\u4e00\u4e2a\u201d\u7684\u9650\u5236\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u6709\u4e00\u4e2a Cake \u5b9e\u4f53\uff0c\u5b83\u53ef\u4ee5\u6709\u591a\u4e2a Fruit \u914d\u6599\u3002",source:"@site/versioned_docs/version-0.7.x/07-relation/02-one-to-many.md",sourceDirName:"07-relation",slug:"/relation/one-to-many",permalink:"/SeaORM/docs/0.7.x/relation/one-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/07-relation/02-one-to-many.md",tags:[],version:"0.7.x",lastUpdatedBy:"Brandon Konkle",lastUpdatedAt:1650777137,formattedLastUpdatedAt:"Apr 24, 2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u5bf9\u4e00",permalink:"/SeaORM/docs/0.7.x/relation/one-to-one"},next:{title:"\u591a\u5bf9\u591a\u5173\u7cfb",permalink:"/SeaORM/docs/0.7.x/relation/many-to-many"}},p={},u=[{value:"\u5b9a\u4e49\u5173\u7cfb",id:"\u5b9a\u4e49\u5173\u7cfb",level:2},{value:"\u5b9a\u4e49\u9006\u5173\u7cfb",id:"\u5b9a\u4e49\u9006\u5173\u7cfb",level:2}],s={toc:u},m="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4e00\u5bf9\u591a\u5173\u7cfb"},"\u4e00\u5bf9\u591a\u5173\u7cfb"),(0,a.yg)("p",null,"\u4e00\u5bf9\u591a\u5173\u7cfb\u4e0e\u4e00\u5bf9\u4e00\u5173\u7cfb\u7c7b\u4f3c\u3002\u5728\u4e0a\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u201c\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\u81f3\u591a\u6709\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Fruit")," \u914d\u6599\u201d\u7684\u4f8b\u5b50\u3002\u8981\u5c06\u5176\u8f6c\u53d8\u4e3a\u4e00\u5bf9\u591a\u5173\u7cfb\uff0c\u6211\u4eec\u53bb\u6389\u201c\u81f3\u591a\u4e00\u4e2a\u201d\u7684\u9650\u5236\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u6709\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Cake")," \u5b9e\u4f53\uff0c\u5b83\u53ef\u4ee5\u6709\u591a\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Fruit")," \u914d\u6599\u3002"),(0,a.yg)("h2",{id:"\u5b9a\u4e49\u5173\u7cfb"},"\u5b9a\u4e49\u5173\u7cfb"),(0,a.yg)("p",null,"\u8fd9\u4e0e\u5b9a\u4e49\u4e00\u5bf9\u4e00\u5173\u7cfb\u51e0\u4e4e\u76f8\u540c\uff1b\u552f\u4e00\u7684\u533a\u522b\u662f\u6211\u4eec\u5728\u8fd9\u91cc\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"Entity::has_many()")," \u65b9\u6cd5\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'{3,9,14} title="entity/cake.rs"',"{3,9,14}":!0,title:'"entity/cake.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,a.yg)("p",null,"\u53e6\u5916\uff0c\u5b9a\u4e49\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"DeriveRelation")," \u5b8f\u6765\u7b80\u5316\uff0c\u4ee5\u4e0b\u5185\u5bb9\u6d88\u9664\u4e86\u5bf9\u4e0a\u9762 ",(0,a.yg)("inlineCode",{parentName:"p"},"RelationTrait")," \u5b9e\u73b0\u7684\u9700\u6c42\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,a.yg)("h2",{id:"\u5b9a\u4e49\u9006\u5173\u7cfb"},"\u5b9a\u4e49\u9006\u5173\u7cfb"),(0,a.yg)("p",null,"\u8fd9\u4e0e\u5b9a\u4e49\u4e00\u5bf9\u4e00\u7684\u9006\u5173\u7cfb\u76f8\u540c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")),(0,a.yg)("p",null,"\u540c\u6837\uff0c\u5b9a\u4e49\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"DeriveRelation")," \u5b8f\u6765\u7b80\u5316\uff0c\u4ee5\u4e0b\u5185\u5bb9\u6d88\u9664\u4e86\u5bf9\u4e0a\u9762 ",(0,a.yg)("inlineCode",{parentName:"p"},"RelationTrait")," \u5b9e\u73b0\u7684\u9700\u6c42\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n}\n')))}y.isMDXComponent=!0}}]);