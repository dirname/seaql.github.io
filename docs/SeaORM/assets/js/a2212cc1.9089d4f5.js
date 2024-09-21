"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[67760],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>v});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,v=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={},i="\u81ea\u5b9a\u4e49\u6d3b\u52a8\u6a21\u578b",c={unversionedId:"advanced-query/custom-active-model",id:"version-0.6.x/advanced-query/custom-active-model",title:"\u81ea\u5b9a\u4e49\u6d3b\u52a8\u6a21\u578b",description:"\u521b\u5efa\u60a8\u81ea\u5df1\u7684\u7ed3\u6784\u4f53\uff0c\u5305\u542b\u6a21\u578b\u7684\u90e8\u5206\u5b57\u6bb5\uff0c\u8be5\u7ed3\u6784\u4f53\u5b9e\u73b0 IntoActiveModel\uff0c\u53ef\u4ee5\u4f7f\u7528 intoactivemodel \u65b9\u6cd5\u8f6c\u6362\u4e3a ActiveModel\u3002\u4f8b\u5982\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c REST API \u4e2d\u7684\u8868\u5355\u63d0\u4ea4\u3002",source:"@site/versioned_docs/version-0.6.x/09-advanced-query/08-custom-active-model.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/custom-active-model",permalink:"/SeaORM/docs/0.6.x/advanced-query/custom-active-model",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/09-advanced-query/08-custom-active-model.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1644342555,formattedLastUpdatedAt:"Feb 8, 2022",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6d41\u5f0f\u5904\u7406",permalink:"/SeaORM/docs/0.6.x/advanced-query/streaming"},next:{title:"Traits and Types",permalink:"/SeaORM/docs/0.6.x/internal-design/trait-and-type"}},d={},l=[],p={toc:l},u="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u81ea\u5b9a\u4e49\u6d3b\u52a8\u6a21\u578b"},"\u81ea\u5b9a\u4e49\u6d3b\u52a8\u6a21\u578b"),(0,a.yg)("p",null,"\u521b\u5efa\u60a8\u81ea\u5df1\u7684\u7ed3\u6784\u4f53\uff0c\u5305\u542b\u6a21\u578b\u7684\u90e8\u5206\u5b57\u6bb5\uff0c\u8be5\u7ed3\u6784\u4f53\u5b9e\u73b0 ",(0,a.yg)("inlineCode",{parentName:"p"},"IntoActiveModel"),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"into_active_model")," \u65b9\u6cd5\u8f6c\u6362\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"ActiveModel"),"\u3002\u4f8b\u5982\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c REST API \u4e2d\u7684\u8868\u5355\u63d0\u4ea4\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"IntoActiveValue")," trait \u5141\u8bb8\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"into_active_value")," \u65b9\u6cd5\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"Option<T>")," \u8f6c\u6362\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"ActiveValue<T>"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'// \u50cf\u5f80\u5e38\u4e00\u6837\u5b9a\u4e49\u5e38\u89c4\u6a21\u578b\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "fruit")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n    pub cake_id: Option<i32>,\n}\n')),(0,a.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7ed3\u6784\u4f53\uff0c\u7701\u7565\u67d0\u4e9b\u5b57\u6bb5\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::ActiveValue::NotSet;\n\n#[derive(DeriveIntoActiveModel)]\npub struct NewFruit {\n    // id \u88ab\u7701\u7565\n    pub name: String,\n    // \u4e0e\u6a21\u578b\u4e2d\u7684\u53ef\u9009\u9879\u76f8\u53cd\uff0c\u5b83\u662f\u5fc5\u9700\u7684\n    pub cake_id: i32,\n}\n\nassert_eq!(\n    NewFruit {\n        name: "Apple".to_owned(),\n        cake_id: 1,\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: NotSet,\n        name: Set("Apple".to_owned()),\n        cake_id: Set(Some(1)),\n    }\n);\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Option<Option<T>>")," \u5141\u8bb8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Some(None)")," \u5c06\u5217\u66f4\u65b0\u4e3a NULL\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::ActiveValue::NotSet;\n\n#[derive(DeriveIntoActiveModel)]\npub struct UpdateFruit {\n    pub cake_id: Option<Option<i32>>,\n}\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: Some(Some(1)),\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: NotSet,\n        name: NotSet,\n        cake_id: Set(Some(1)),\n    }\n);\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: Some(None),\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: NotSet,\n        name: NotSet,\n        cake_id: Set(None),\n    }\n);\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: None,\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: NotSet,\n        name: NotSet,\n        cake_id: NotSet,\n    }\n);\n")))}s.isMDXComponent=!0}}]);