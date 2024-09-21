"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[51375],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>c});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),m=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},y=function(e){var n=m(e.components);return t.createElement(p.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=m(a),d=r,c=g["".concat(p,".").concat(d)]||g[d]||s[d]||i;return a?t.createElement(c,l(l({ref:n},y),{},{components:a})):t.createElement(c,l({ref:n},y))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54100:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=a(58168),r=(a(96540),a(15680));const i={},l="\u4f7f\u7528 sea-orm-cli",o={unversionedId:"generate-entity/sea-orm-cli",id:"generate-entity/sea-orm-cli",title:"\u4f7f\u7528 sea-orm-cli",description:"\u9996\u5148\uff0c\u4f7f\u7528 cargo \u5b89\u88c5 sea-orm-cli\u3002",source:"@site/docs/04-generate-entity/01-sea-orm-cli.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/sea-orm-cli",permalink:"/SeaORM/docs/next/generate-entity/sea-orm-cli",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/04-generate-entity/01-sea-orm-cli.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1718711178,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u521d\u59cb\u5316",permalink:"/SeaORM/docs/next/migration/seeding-data"},next:{title:"\u5b9e\u4f53\u7ed3\u6784",permalink:"/SeaORM/docs/next/generate-entity/entity-structure"}},p={},m=[{value:"\u914d\u7f6e\u73af\u5883",id:"\u914d\u7f6e\u73af\u5883",level:2},{value:"\u83b7\u53d6\u5e2e\u52a9",id:"\u83b7\u53d6\u5e2e\u52a9",level:2},{value:"\u751f\u6210\u5b9e\u4f53\u6587\u4ef6",id:"\u751f\u6210\u5b9e\u4f53\u6587\u4ef6",level:2}],y={toc:m},g="wrapper";function s(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u4f7f\u7528-sea-orm-cli"},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"h1"},"sea-orm-cli")),(0,r.yg)("p",null,"\u9996\u5148\uff0c\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"cargo")," \u5b89\u88c5 ",(0,r.yg)("inlineCode",{parentName:"p"},"sea-orm-cli"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cargo install sea-orm-cli@1.0.0-rc.5\n")),(0,r.yg)("admonition",{title:"SQL Server (MSSQL) \u540e\u7aef",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u6709\u5173\u652f\u6301 MSSQL \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"sea-orm-cli")," \u7684\u5b89\u88c5\u548c\u4f7f\u7528\uff0c\u8bf7\u53c2\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM-X/docs/generate-entity/sea-orm-cli/"},"\u8fd9\u91cc"),"\u3002")),(0,r.yg)("h2",{id:"\u914d\u7f6e\u73af\u5883"},"\u914d\u7f6e\u73af\u5883"),(0,r.yg)("p",null,"\u5728\u60a8\u7684\u73af\u5883\u4e2d\u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"p"},"DATABASE_URL"),"\uff0c\u6216\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa ",(0,r.yg)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u3002\u6307\u5b9a\u60a8\u7684\u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"DATABASE_URL=protocol://username:password@localhost/database\n")),(0,r.yg)("h2",{id:"\u83b7\u53d6\u5e2e\u52a9"},"\u83b7\u53d6\u5e2e\u52a9"),(0,r.yg)("p",null,"\u5728\u4efb\u4f55 CLI \u547d\u4ee4\u6216\u5b50\u547d\u4ee4\u4e0a\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"-h")," \u6807\u5fd7\u83b7\u53d6\u5e2e\u52a9\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5217\u51fa\u6240\u6709\u53ef\u7528\u547d\u4ee4\nsea-orm-cli -h\n\n# \u5217\u51fa\u5728 `generate` \u547d\u4ee4\u4e2d\u53ef\u7528\u7684\u6240\u6709\u5b50\u547d\u4ee4\nsea-orm-cli generate -h\n\n# \u663e\u793a\u5982\u4f55\u4f7f\u7528 `generate entity` \u5b50\u547d\u4ee4\nsea-orm-cli generate entity -h\n")),(0,r.yg)("h2",{id:"\u751f\u6210\u5b9e\u4f53\u6587\u4ef6"},"\u751f\u6210\u5b9e\u4f53\u6587\u4ef6"),(0,r.yg)("p",null,"\u67e5\u627e\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u8868\u751f\u6210\u76f8\u5e94\u7684 SeaORM \u5b9e\u4f53\u6587\u4ef6\u3002"),(0,r.yg)("p",null,"\u652f\u6301\u7684\u6570\u636e\u5e93\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"MySQL"),(0,r.yg)("li",{parentName:"ul"},"PostgreSQL"),(0,r.yg)("li",{parentName:"ul"},"SQLite")),(0,r.yg)("p",null,"\u547d\u4ee4\u884c\u9009\u9879\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-u")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"--database-url"),": \u6570\u636e\u5e93 URL\uff08\u9ed8\u8ba4\uff1a\u73af\u5883\u53d8\u91cf\u4e2d\u6307\u5b9a\u7684 DATABASE_URL\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-s")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"--database-schema"),": \u6570\u636e\u5e93\u6a21\u5f0f\uff08\u9ed8\u8ba4\uff1a\u73af\u5883\u53d8\u91cf\u4e2d\u6307\u5b9a\u7684 DATABASE_SCHEMA\uff09",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e MySQL \u548c SQLite\uff0c\u6b64\u53c2\u6570\u88ab\u5ffd\u7565"),(0,r.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e PostgreSQL\uff0c\u6b64\u53c2\u6570\u662f\u53ef\u9009\u7684\uff0c\u9ed8\u8ba4\u503c\u4e3a 'public'"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-o")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"--output-dir"),": \u5b9e\u4f53\u6587\u4ef6\u8f93\u51fa\u76ee\u5f55\uff08\u9ed8\u8ba4\uff1a\u5f53\u524d\u76ee\u5f55\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-v")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"--verbose"),": \u6253\u5370\u8c03\u8bd5\u4fe1\u606f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-l")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"--lib"),": \u751f\u6210\u7d22\u5f15\u6587\u4ef6\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"lib.rs")," \u800c\u4e0d\u662f ",(0,r.yg)("inlineCode",{parentName:"li"},"mod.rs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--include-hidden-tables"),": \u4ece\u9690\u85cf\u7684\u8868\u4e2d\u751f\u6210\u5b9e\u4f53\u6587\u4ef6\uff08\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"li"},"_")," \u5f00\u5934\u7684\u8868\u540d\u662f\u9690\u85cf\u7684\uff0c\u9ed8\u8ba4\u5ffd\u7565\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--ignore-tables"),": \u8df3\u8fc7\u6307\u5b9a\u8868\u7684\u5b9e\u4f53\u6587\u4ef6\u751f\u6210\uff08\u9ed8\u8ba4\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"seaql_migrations"),"\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--compact-format"),": \u751f\u6210 ",(0,r.yg)("a",{parentName:"li",href:"/SeaORM/docs/next/generate-entity/entity-structure"},"\u7d27\u51d1\u683c\u5f0f")," \u7684\u5b9e\u4f53\u6587\u4ef6\uff08\u9ed8\u8ba4\uff1atrue\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--expanded-format"),": \u751f\u6210 ",(0,r.yg)("a",{parentName:"li",href:"/SeaORM/docs/next/generate-entity/expanded-entity-structure"},"\u6269\u5c55\u683c\u5f0f")," \u7684\u5b9e\u4f53\u6587\u4ef6"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--with-serde"),": \u81ea\u52a8\u5bfc\u51fa serde Serialize / Deserialize traits \uff08",(0,r.yg)("inlineCode",{parentName:"li"},"none"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"serialize"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"deserialize"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"both"),"\uff09\uff08\u9ed8\u8ba4\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"none"),"\uff09",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--serde-skip-deserializing-primary-key"),": \u751f\u6210\u4e3b\u952e\u5b57\u6bb5\u6807\u8bb0\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"#[serde(skip_deserializing)]")," \u7684\u5b9e\u4f53\u6a21\u578b"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--serde-skip-hidden-column"),": \u751f\u6210\u9690\u85cf\u5217\uff08\u5217\u540d\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"li"},"_")," \u5f00\u5934\uff09\u5b57\u6bb5\u6807\u8bb0\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"#[serde(skip)]")," \u7684\u5b9e\u4f53\u6a21\u578b"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--date-time-crate"),": \u7528\u4e8e\u751f\u6210\u5b9e\u4f53\u7684\u65e5\u671f\u65f6\u95f4\u5e93\uff08",(0,r.yg)("inlineCode",{parentName:"li"},"chrono"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"time"),"\uff09\uff08\u9ed8\u8ba4\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"chrono"),"\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--max-connections"),": \u5728\u8fde\u63a5\u6c60\u4e2d\u521d\u59cb\u5316\u7684\u6700\u5927\u6570\u636e\u5e93\u8fde\u63a5\u6570\uff08\u9ed8\u8ba4\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"1"),"\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--model-extra-derives"),": \u4e3a\u751f\u6210\u7684\u6a21\u578b\u7ed3\u6784\u9644\u52a0\u989d\u5916\u7684\u6d3e\u751f\u5b8f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--model-extra-attributes"),": \u4e3a\u751f\u6210\u7684\u6a21\u578b\u7ed3\u6784\u9644\u52a0\u989d\u5916\u7684\u5c5e\u6027"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--enum-extra-derives"),": \u4e3a\u751f\u6210\u7684\u679a\u4e3e\u9644\u52a0\u989d\u5916\u7684\u6d3e\u751f\u5b8f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--enum-extra-attributes"),": \u4e3a\u751f\u6210\u7684\u679a\u4e3e\u9644\u52a0\u989d\u5916\u7684\u5c5e\u6027"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--seaography"),": \u4e3a seaography \u96c6\u6210\u5728\u5b9e\u4f53\u4e2d\u751f\u6210\u9644\u52a0\u7ed3\u6784\u4f53")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06\u6570\u636e\u5e93 `bakery` \u7684\u5b9e\u4f53\u6587\u4ef6\u751f\u6210\u5230 `entity/src`\nsea-orm-cli generate entity -u protocol://username:password@localhost/bakery -o entity/src\n")))}s.isMDXComponent=!0}}]);