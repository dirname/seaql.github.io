"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[63827],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),y=a,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5952:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={},i="SeaORM \u6982\u5ff5",p={unversionedId:"introduction/sea-orm",id:"version-0.12.x/introduction/sea-orm",title:"SeaORM \u6982\u5ff5",description:"\u5728 SeaORM \u4e2d\uff0c\u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u8868\u7684\u6570\u636e\u5e93\u79f0\u4e3a Schema\u3002",source:"@site/versioned_docs/version-0.12.x/01-introduction/03-sea-orm.md",sourceDirName:"01-introduction",slug:"/introduction/sea-orm",permalink:"/SeaORM/docs/0.12.x/introduction/sea-orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/01-introduction/03-sea-orm.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690464322,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f02\u6b65\u7f16\u7a0b",permalink:"/SeaORM/docs/0.12.x/introduction/async"},next:{title:"\u6559\u7a0b\u4e0e\u793a\u4f8b",permalink:"/SeaORM/docs/0.12.x/introduction/tutorial"}},c={},l=[],s={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"seaorm-\u6982\u5ff5"},"SeaORM \u6982\u5ff5"),(0,a.yg)("p",null,"\u5728 SeaORM \u4e2d\uff0c\u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u8868\u7684\u6570\u636e\u5e93\u79f0\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"Schema"),"\u3002"),(0,a.yg)("p",null,"\u6bcf\u4e2a\u8868\u5bf9\u5e94\u4e8e SeaORM \u4e2d\u7684\u4e00\u4e2a ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.12.x/generate-entity/entity-structure#entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Entity")),"\uff0c\u5b83\u5e2e\u52a9\u4f60\u5bf9\u76f8\u5173\u8868\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"CRUD"),"\uff08\u521b\u5efa\u3001\u8bfb\u53d6\u3001\u66f4\u65b0\u548c\u5220\u9664\uff09\u64cd\u4f5c\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Entity")," \u7279\u5f81\u63d0\u4f9b\u4e86\u4e00\u4e2a API \u8ba9\u4f60\u5728\u8fd0\u884c\u65f6\u68c0\u67e5\u5176\u5c5e\u6027\uff08",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.12.x/generate-entity/entity-structure#column"},(0,a.yg)("inlineCode",{parentName:"a"},"Column")),"\u3001",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.12.x/generate-entity/entity-structure#relation"},(0,a.yg)("inlineCode",{parentName:"a"},"Relation"))," \u548c ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.12.x/generate-entity/entity-structure#primary-key"},(0,a.yg)("inlineCode",{parentName:"a"},"PrimaryKey")),"\uff09\u3002"),(0,a.yg)("p",null,"\u6bcf\u4e2a\u8868\u90fd\u6709\u591a\u4e2a\u5217\uff0c\u8fd9\u4e9b\u5217\u79f0\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"attribute"),"\u3002"),(0,a.yg)("p",null,"\u8fd9\u4e9b\u5c5e\u6027\u53ca\u5176\u503c\u88ab\u7ec4\u5408\u6210\u4e00\u4e2a Rust \u7ed3\u6784\u4f53\uff08\u4e00\u4e2a ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.12.x/generate-entity/expanded-entity-structure#model"},(0,a.yg)("inlineCode",{parentName:"a"},"Model")),"\uff09\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u64cd\u4f5c\u5b83\u4eec\u3002"),(0,a.yg)("p",null,"\u7136\u800c\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"Model")," \u4ec5\u7528\u4e8e\u8bfb\u53d6\u64cd\u4f5c\u3002\u8981\u6267\u884c\u63d2\u5165\u3001\u66f4\u65b0\u6216\u5220\u9664\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.12.x/generate-entity/expanded-entity-structure#active-model"},(0,a.yg)("inlineCode",{parentName:"a"},"ActiveModel")),"\uff0c\u5b83\u4f1a\u5728\u6bcf\u4e2a\u5c5e\u6027\u4e0a\u9644\u52a0\u5143\u6570\u636e\u3002"),(0,a.yg)("p",null,"\u6700\u540e\uff0cSeaORM \u4e2d\u6ca1\u6709\u5355\u4f8b\uff08\u5168\u5c40\u4e0a\u4e0b\u6587\uff09\u3002\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u8d1f\u8d23\u7ba1\u7406 ",(0,a.yg)("inlineCode",{parentName:"p"},"DatabaseConnection")," \u7684\u6240\u6709\u6743\u3002\u6211\u4eec\u786e\u5b9e\u63d0\u4f9b\u4e86\u4e00\u4e9b\u4e0e\u7f51\u9875\u6846\u67b6\u7684\u96c6\u6210\u793a\u4f8b\uff0c\u5305\u62ec ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket"),"\u3001",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix"),"\u3001",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"axum")," \u548c ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"poem"),"\uff0c\u5e2e\u52a9\u4f60\u5feb\u901f\u5165\u95e8\u3002"))}u.isMDXComponent=!0}}]);