"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[75454],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i="\u5220\u9664",l={unversionedId:"basic-crud/delete",id:"version-0.11.x/basic-crud/delete",title:"\u5220\u9664",description:"\u5220\u9664\u4e00\u6761",source:"@site/versioned_docs/version-0.11.x/05-basic-crud/06-delete.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/delete",permalink:"/SeaORM/docs/0.11.x/basic-crud/delete",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/05-basic-crud/06-delete.md",tags:[],version:"0.11.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1675423514,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4fdd\u5b58",permalink:"/SeaORM/docs/0.11.x/basic-crud/save"},next:{title:"JSON",permalink:"/SeaORM/docs/0.11.x/basic-crud/json"}},s={},c=[{value:"\u5220\u9664\u4e00\u6761",id:"\u5220\u9664\u4e00\u6761",level:2},{value:"\u6839\u636e\u4e3b\u952e\u5220\u9664",id:"\u6839\u636e\u4e3b\u952e\u5220\u9664",level:2},{value:"\u5220\u9664\u591a\u6761",id:"\u5220\u9664\u591a\u6761",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u5220\u9664"},"\u5220\u9664"),(0,a.yg)("h2",{id:"\u5220\u9664\u4e00\u6761"},"\u5220\u9664\u4e00\u6761"),(0,a.yg)("p",null,"\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u627e\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Model"),"\uff0c\u7136\u540e\u5220\u9664\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u884c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::entity::ModelTrait;\n\nlet orange: Option<fruit::Model> = Fruit::find_by_id(30).one(db).await?;\nlet orange: fruit::Model = orange.unwrap();\n\nlet res: DeleteResult = orange.delete(db).await?;\nassert_eq!(res.rows_affected, 1);\n")),(0,a.yg)("h2",{id:"\u6839\u636e\u4e3b\u952e\u5220\u9664"},"\u6839\u636e\u4e3b\u952e\u5220\u9664"),(0,a.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u4e3b\u952e\u5220\u9664\u6570\u636e\u5e93\u4e2d\u7684\u4e00\u884c\uff0c\u800c\u4e0d\u662f\u5148\u9009\u62e9 ",(0,a.yg)("inlineCode",{parentName:"p"},"Model")," \u518d\u8fdb\u884c\u5220\u9664\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let res: DeleteResult = Fruit::delete_by_id(38).exec(db).await?;\nassert_eq!(res.rows_affected, 1);\n")),(0,a.yg)("h2",{id:"\u5220\u9664\u591a\u6761"},"\u5220\u9664\u591a\u6761"),(0,a.yg)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5728\u4e0d\u67e5\u627e\u6bcf\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Model")," \u7684\u60c5\u51b5\u4e0b\uff0c\u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u591a\u6761\u8bb0\u5f55\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"// DELETE FROM `fruit` WHERE `fruit`.`name` LIKE '%Orange%'\nlet res: DeleteResult = fruit::Entity::delete_many()\n    .filter(fruit::Column::Name.contains(\"Orange\"))\n    .exec(db)\n    .await?;\n\nassert_eq!(res.rows_affected, 2);\n")))}p.isMDXComponent=!0}}]);