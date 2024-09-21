"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[41900],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>c});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),y=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=y(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=y(a),u=t,c=m["".concat(p,".").concat(u)]||m[u]||g[u]||i;return a?r.createElement(c,l(l({ref:n},d),{},{components:a})):r.createElement(c,l({ref:n},d))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:t,l[1]=o;for(var y=2;y<i;y++)l[y]=a[y];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99736:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>y});var r=a(58168),t=(a(96540),a(15680));const i={},l="\u6d3e\u751f\u5b8f",o={unversionedId:"internal-design/derive-macro",id:"version-0.6.x/internal-design/derive-macro",title:"\u6d3e\u751f\u5b8f",description:"EntityModel",source:"@site/versioned_docs/version-0.6.x/10-internal-design/02-derive-macro.md",sourceDirName:"10-internal-design",slug:"/internal-design/derive-macro",permalink:"/SeaORM/docs/0.6.x/internal-design/derive-macro",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/10-internal-design/02-derive-macro.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1644342555,formattedLastUpdatedAt:"Feb 8, 2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Traits and Types",permalink:"/SeaORM/docs/0.6.x/internal-design/trait-and-type"},next:{title:"\u4e0e Diesel \u7684\u6bd4\u8f83",permalink:"/SeaORM/docs/0.6.x/internal-design/diesel"}},p={},y=[{value:"EntityModel",id:"entitymodel",level:2},{value:"Entity",id:"entity",level:2},{value:"Column",id:"column",level:2},{value:"\u4e3b\u952e",id:"\u4e3b\u952e",level:2},{value:"Model",id:"model",level:2},{value:"\u6d3b\u52a8\u6a21\u578b",id:"\u6d3b\u52a8\u6a21\u578b",level:2},{value:"\u6d3b\u52a8\u679a\u4e3e",id:"\u6d3b\u52a8\u679a\u4e3e",level:2},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",level:2},{value:"\u53ef\u8fed\u4ee3",id:"\u53ef\u8fed\u4ee3",level:2}],d={toc:y},m="wrapper";function g(e){let{components:n,...a}=e;return(0,t.yg)(m,(0,r.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u6d3e\u751f\u5b8f"},"\u6d3e\u751f\u5b8f"),(0,t.yg)("h2",{id:"entitymodel"},"EntityModel"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"EntityModel"))," \u6d3e\u751f\u5b8f\u662f\u201c\u5168\u80fd\u201d\u5b8f\uff0c\u5b83\u4f1a\u6839\u636e\u7ed9\u5b9a\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"Model")," \u81ea\u52a8\u751f\u6210 ",(0,t.yg)("inlineCode",{parentName:"p"},"Entity"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"Column")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"PrimaryKey"),"\u3002"),(0,t.yg)("h2",{id:"entity"},"Entity"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"DeriveEntity"))," \u6d3e\u751f\u5b8f\u5c06\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"Entity")," \u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"EntityTrait")),"\uff0c\u5e76\u5047\u8bbe ",(0,t.yg)("inlineCode",{parentName:"p"},"Model"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"Column"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"PrimaryKey")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"Relation")," \u5728\u5f53\u524d\u4f5c\u7528\u57df\u4e2d\u5b58\u5728\u3002\u5b83\u8fd8\u63d0\u4f9b\u4e86\u5bf9 ",(0,t.yg)("inlineCode",{parentName:"p"},"Entity")," \u7684 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"Iden"))," \u548c ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"IdenStatic"))," \u7684\u5b9e\u73b0\u3002"),(0,t.yg)("h2",{id:"column"},"Column"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"DeriveColumn"))," \u6d3e\u751f\u5b8f\u5c06\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"Columns")," \u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"ColumnTrait")),"\u3002\u901a\u8fc7\u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"Iden"))," \u548c ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"IdenStatic"))," \u5b9a\u4e49\u6bcf\u4e00\u5217\u7684\u6807\u8bc6\u7b26\u3002\u8fd8\u6d3e\u751f\u4e86 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"EnumIter")),"\uff0c\u5141\u8bb8\u5bf9\u6240\u6709\u679a\u4e3e\u53d8\u4f53\u8fdb\u884c\u8fed\u4ee3\u3002"),(0,t.yg)("h2",{id:"\u4e3b\u952e"},"\u4e3b\u952e"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"DerivePrimaryKey"))," \u6d3e\u751f\u5b8f\u5c06\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"PrimaryKey")," \u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"PrimaryKeyToColumn")),"\uff0c\u5b9a\u4e49\u4e3b\u952e\u4e0e\u5217\u4e4b\u95f4\u7684\u7e41\u7410\u6620\u5c04\u3002\u8fd8\u6d3e\u751f\u4e86 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"EnumIter")),"\uff0c\u5141\u8bb8\u5bf9\u6240\u6709\u679a\u4e3e\u53d8\u4f53\u8fdb\u884c\u8fed\u4ee3\u3002"),(0,t.yg)("h2",{id:"model"},"Model"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"DeriveModel"))," \u6d3e\u751f\u5b8f\u5c06\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"Model")," \u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"ModelTrait")),"\uff0c\u63d0\u4f9b\u6a21\u578b\u4e2d\u6240\u6709\u5c5e\u6027\u7684\u8bbe\u7f6e\u5668\u548c\u83b7\u53d6\u5668\u3002\u5b83\u8fd8\u5b9e\u73b0\u4e86 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"FromQueryResult")),"\uff0c\u5c06\u67e5\u8be2\u7ed3\u679c\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"Model"),"\u3002"),(0,t.yg)("h2",{id:"\u6d3b\u52a8\u6a21\u578b"},"\u6d3b\u52a8\u6a21\u578b"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"DeriveActiveModel"))," \u6d3e\u751f\u5b8f\u5c06\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"ActiveModel")," \u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"ActiveModelTrait")),"\uff0c\u63d0\u4f9b\u6d3b\u52a8\u6a21\u578b\u4e2d\u6240\u6709\u6d3b\u52a8\u503c\u7684\u8bbe\u7f6e\u5668\u548c\u83b7\u53d6\u5668\u3002"),(0,t.yg)("h2",{id:"\u6d3b\u52a8\u679a\u4e3e"},"\u6d3b\u52a8\u679a\u4e3e"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"DeriveActiveEnum"))," \u6d3e\u751f\u5b8f\u5c06\u4e3a\u4efb\u610f\u679a\u4e3e\u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"ActiveEnum")),"\u3002"),(0,t.yg)("h2",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"DeriveRelation"))," \u6d3e\u751f\u5b8f\u5c06\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"Relation")," \u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"RelationTrait")),"\u3002"),(0,t.yg)("h2",{id:"\u53ef\u8fed\u4ee3"},"\u53ef\u8fed\u4ee3"),(0,t.yg)("p",null,"\u6d3e\u751f\u7684 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"EnumIter"))," \u5b8f\u5c06\u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"#"},(0,t.yg)("inlineCode",{parentName:"a"},"Iterable")),"\uff0c\u4ee5\u5141\u8bb8\u5bf9\u6240\u6709\u679a\u4e3e\u53d8\u4f53\u8fdb\u884c\u8fed\u4ee3\u3002"))}g.isMDXComponent=!0}}]);