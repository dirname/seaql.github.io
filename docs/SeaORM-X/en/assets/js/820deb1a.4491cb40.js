"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[338],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=s(t),p=a,y=g["".concat(c,".").concat(p)]||g[p]||u[p]||o;return t?r.createElement(y,i(i({ref:n},m),{},{components:t})):r.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const o={},i="Running Migration",l={unversionedId:"migration/running-migration",id:"migration/running-migration",title:"Running Migration",description:"Running Migration on Any MSSQL Schema",source:"@site/docs/03-migration/03-running-migration.md",sourceDirName:"03-migration",slug:"/migration/running-migration",permalink:"/SeaORM-X/en/docs/migration/running-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/03-migration/03-running-migration.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712557834,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up Migration",permalink:"/SeaORM-X/en/docs/migration/setting-up-migration"},next:{title:"Using sea-orm-cli",permalink:"/SeaORM-X/en/docs/generate-entity/sea-orm-cli"}},c={},s=[{value:"Running Migration on Any MSSQL Schema",id:"running-migration-on-any-mssql-schema",level:2}],m={toc:s},g="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"running-migration"},"Running Migration"),(0,a.yg)("h2",{id:"running-migration-on-any-mssql-schema"},"Running Migration on Any MSSQL Schema"),(0,a.yg)("p",null,"By default migration will be run on the ",(0,a.yg)("inlineCode",{parentName:"p"},"dbo")," schema, you can now override it when running migration on the CLI or programmatically."),(0,a.yg)("p",null,"For CLI, you can specify the target schema with ",(0,a.yg)("inlineCode",{parentName:"p"},"-s")," / ",(0,a.yg)("inlineCode",{parentName:"p"},"--database_schema")," option:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"via sea-orm-cli: ",(0,a.yg)("inlineCode",{parentName:"li"},"sea-orm-cli migrate -u mssql://root:root@localhost/database -s my_schema")),(0,a.yg)("li",{parentName:"ul"},"via SeaORM migrator: ",(0,a.yg)("inlineCode",{parentName:"li"},"cargo run -- -u mssql://root:root@localhost/database -s my_schema"))),(0,a.yg)("p",null,"You can also run the migration on the target schema programmatically:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'// With the default `dbo` schema\nlet connect_options = ConnectOptions::new("mssql://root:root@localhost/database");\n// Or, override the default schema\nlet connect_options = ConnectOptions::new("mssql://root:root@localhost/database?currentSchema=my_schema");\n\nlet db = Database::connect(connect_options).await?\n\nmigration::Migrator::up(&db, None).await?;\n')))}u.isMDXComponent=!0}}]);