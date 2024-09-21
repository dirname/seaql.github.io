"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[954],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,u=d["".concat(c,".").concat(m)]||d[m]||f[m]||o;return r?n.createElement(u,l(l({ref:t},s),{},{components:r})):n.createElement(u,l({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const o={},l="DataLoader",i={unversionedId:"data-loader",id:"data-loader",title:"DataLoader",description:"\u5f85\u529e\u4e8b\u9879",source:"@site/docs/06-data-loader.md",sourceDirName:".",slug:"/data-loader",permalink:"/Seaography/docs/next/data-loader",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/docs/06-data-loader.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690536402,formattedLastUpdatedAt:"Jul 28, 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b8f\u6587\u6863",permalink:"/Seaography/docs/next/macros-documentation"}},c={},p=[],s={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"dataloader"},"DataLoader"),(0,a.yg)("p",null,"\u5f85\u529e\u4e8b\u9879"),(0,a.yg)("p",null,"\u8003\u8651\u4ee5\u4e0b GraphQL \u67e5\u8be2\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-graphql"},"{\n  film(\n    pagination: { page: { limit: 3, page: 0 } }\n    filters: { releaseYear: { eq: 2006 } }\n    orderBy: { title: ASC }\n  ) {\n    nodes {\n      title\n      description\n      releaseYear\n      actor {\n        nodes {\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n}\n")),(0,a.yg)("p",null,"\u5728\u540e\u53f0\uff0c\u6267\u884c\u4e86\u4ee5\u4e0b SQL \u67e5\u8be2\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  `film`.`film_id`,\n  `film`.`title`,\n  `film`.`description`,\n  `film`.`release_year`,\n  `film`.`language_id`,\n  `film`.`original_language_id`,\n  `film`.`rental_duration`,\n  `film`.`rental_rate`,\n  `film`.`length`,\n  `film`.`replacement_cost`,\n  `film`.`rating`,\n  `film`.`special_features`,\n  `film`.`last_update`\nFROM\n  `film`\nWHERE\n  `film`.`release_year` = ?\nORDER BY\n  `film`.`title` ASC\nLIMIT\n  ? OFFSET ?\n\nSELECT\n  `actor`.`actor_id`,\n  `actor`.`first_name`,\n  `actor`.`last_name`,\n  `actor`.`last_update`\nFROM\n  `actor`\n  INNER JOIN `film_actor` ON `film_actor`.`actor_id` = `actor`.`actor_id`\n  INNER JOIN `film` ON `film`.`film_id` = `film_actor`.`film_id`\nWHERE\n  `film`.`film_id` = ?\n  AND (TRUE)\n")))}f.isMDXComponent=!0}}]);