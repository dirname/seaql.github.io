"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[25521],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>y});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,y=s["".concat(l,".").concat(g)]||s[g]||d[g]||o;return r?t.createElement(y,i(i({ref:n},p),{},{components:r})):t.createElement(y,i({ref:n},p))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},62778:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(58168),a=(r(96540),r(15680));const o={},i="\u805a\u5408\u51fd\u6570",c={unversionedId:"advanced-query/aggregate-function",id:"version-0.10.x/advanced-query/aggregate-function",title:"\u805a\u5408\u51fd\u6570",description:"\u60a8\u53ef\u4ee5\u4f7f\u7528 group_by \u65b9\u6cd5\u5bf9\u4ece SeaORM \u67e5\u8be2\u4e2d\u9009\u62e9\u7684\u7ed3\u679c\u8fdb\u884c\u5206\u7ec4\u3002\u5982\u679c\u60a8\u5e0c\u671b\u8fdb\u4e00\u6b65\u9650\u5236\u5206\u7ec4\u7ed3\u679c\u96c6\uff0chaving \u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002",source:"@site/versioned_docs/version-0.10.x/08-advanced-query/03-aggregate-function.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/aggregate-function",permalink:"/SeaORM/docs/0.10.x/advanced-query/aggregate-function",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/08-advanced-query/03-aggregate-function.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1667313808,formattedLastUpdatedAt:"Nov 1, 2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6761\u4ef6\u8868\u8fbe\u5f0f",permalink:"/SeaORM/docs/0.10.x/advanced-query/conditional-expression"},next:{title:"\u81ea\u5b9a\u4e49\u8fde\u63a5",permalink:"/SeaORM/docs/0.10.x/advanced-query/custom-joins"}},l={},u=[{value:"\u5206\u7ec4",id:"\u5206\u7ec4",level:2},{value:"Having",id:"having",level:2}],p={toc:u},s="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(s,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u805a\u5408\u51fd\u6570"},"\u805a\u5408\u51fd\u6570"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"group_by")," \u65b9\u6cd5\u5bf9\u4ece SeaORM \u67e5\u8be2\u4e2d\u9009\u62e9\u7684\u7ed3\u679c\u8fdb\u884c\u5206\u7ec4\u3002\u5982\u679c\u60a8\u5e0c\u671b\u8fdb\u4e00\u6b65\u9650\u5236\u5206\u7ec4\u7ed3\u679c\u96c6\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"having")," \u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"),(0,a.yg)("h2",{id:"\u5206\u7ec4"},"\u5206\u7ec4"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"group_by")," \u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7\u5b9e\u4f53\u7684\u5217\u6216\u4e00\u4e2a\u590d\u6742\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,a.yg)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr")),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .group_by(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name""#\n);\n')),(0,a.yg)("h2",{id:"having"},"Having"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"having")," \u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7\u5728\u524d\u4e00\u8282\u4e2d\u4ecb\u7ecd\u7684\u4efb\u4f55\u6761\u4ef6\u8868\u8fbe\u5f0f\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .having(cake::Column::Id.eq(4)) // \u6761\u4ef6\u8868\u8fbe\u5f0f\n        .having(cake::Column::Id.eq(5)) // \u6761\u4ef6\u8868\u8fbe\u5f0f\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT `cake`.`id`, `cake`.`name` FROM `cake` HAVING `cake`.`id` = 4 AND `cake`.`id` = 5"\n);\n')))}d.isMDXComponent=!0}}]);