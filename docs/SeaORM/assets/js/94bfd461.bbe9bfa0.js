"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[98835],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>d});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=t.createContext({}),m=function(e){var n=t.useContext(g),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=m(e.components);return t.createElement(g.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(r),u=a,d=s["".concat(g,".").concat(u)]||s[u]||c[u]||i;return r?t.createElement(d,o(o({ref:n},p),{},{components:r})):t.createElement(d,o({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7574:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=r(58168),a=(r(96540),r(15680));const i={},o="\u8fd0\u884c\u8fc1\u79fb",l={unversionedId:"migration/running-migration",id:"version-0.9.x/migration/running-migration",title:"\u8fd0\u884c\u8fc1\u79fb",description:"\u5728\u5b9a\u4e49\u4e86\u8fc1\u79fb\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u7ec8\u7aef\u6216\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u5e94\u7528\u6216\u56de\u6eda\u8fc1\u79fb\u3002",source:"@site/versioned_docs/version-0.9.x/03-migration/03-running-migration.md",sourceDirName:"03-migration",slug:"/migration/running-migration",permalink:"/SeaORM/docs/0.9.x/migration/running-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/03-migration/03-running-migration.md",tags:[],version:"0.9.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1658132012,formattedLastUpdatedAt:"Jul 18, 2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u5199\u8fc1\u79fb",permalink:"/SeaORM/docs/0.9.x/migration/writing-migration"},next:{title:"\u586b\u5145\u6570\u636e",permalink:"/SeaORM/docs/0.9.x/migration/seeding-data"}},g={},m=[{value:"\u547d\u4ee4\u884c\u754c\u9762 (CLI)",id:"\u547d\u4ee4\u884c\u754c\u9762-cli",level:2},{value:"\u901a\u8fc7 <code>sea-orm-cli</code>",id:"\u901a\u8fc7-sea-orm-cli",level:3},{value:"\u901a\u8fc7 SeaSchema Migrator CLI",id:"\u901a\u8fc7-seaschema-migrator-cli",level:3},{value:"\u7a0b\u5e8f\u5316\u8fc1\u79fb",id:"\u7a0b\u5e8f\u5316\u8fc1\u79fb",level:2}],p={toc:m},s="wrapper";function c(e){let{components:n,...r}=e;return(0,a.yg)(s,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u8fd0\u884c\u8fc1\u79fb"},"\u8fd0\u884c\u8fc1\u79fb"),(0,a.yg)("p",null,"\u5728\u5b9a\u4e49\u4e86\u8fc1\u79fb\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u7ec8\u7aef\u6216\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u5e94\u7528\u6216\u56de\u6eda\u8fc1\u79fb\u3002"),(0,a.yg)("h2",{id:"\u547d\u4ee4\u884c\u754c\u9762-cli"},"\u547d\u4ee4\u884c\u754c\u9762 (CLI)"),(0,a.yg)("p",null,"\u8fc1\u79fb\u53ef\u4ee5\u5728\u7ec8\u7aef\u624b\u52a8\u8fd0\u884c\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"DATABASE_URL")," \u5fc5\u987b\u5728\u60a8\u7684\u73af\u5883\u4e2d\u8bbe\u7f6e\uff0c\u6309\u7167 ",(0,a.yg)("a",{parentName:"p",href:"/SeaORM/docs/0.9.x/generate-entity/sea-orm-cli#configure-environment"},"\u8fd9\u91cc")," \u7684\u8bf4\u660e\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.yg)("p",null,"\u652f\u6301\u7684\u547d\u4ee4\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"init"),": \u521d\u59cb\u5316\u8fc1\u79fb\u76ee\u5f55"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"generate"),": \u751f\u6210\u4e00\u4e2a\u65b0\u7684\u8fc1\u79fb\u6587\u4ef6"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"up"),": \u5e94\u7528\u6240\u6709\u5f85\u5904\u7406\u7684\u8fc1\u79fb"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"up -n 10"),": \u5e94\u7528 10 \u4e2a\u5f85\u5904\u7406\u7684\u8fc1\u79fb"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"down"),": \u56de\u6eda\u6700\u540e\u5e94\u7528\u7684\u8fc1\u79fb"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"down -n 10"),": \u56de\u6eda\u6700\u540e 10 \u4e2a\u5e94\u7528\u7684\u8fc1\u79fb"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"status"),": \u68c0\u67e5\u6240\u6709\u8fc1\u79fb\u7684\u72b6\u6001"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"fresh"),": \u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u6240\u6709\u8868\uff0c\u7136\u540e\u91cd\u65b0\u5e94\u7528\u6240\u6709\u8fc1\u79fb"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"refresh"),": \u56de\u6eda\u6240\u6709\u5df2\u5e94\u7528\u7684\u8fc1\u79fb\uff0c\u7136\u540e\u91cd\u65b0\u5e94\u7528\u6240\u6709\u8fc1\u79fb"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"reset"),": \u56de\u6eda\u6240\u6709\u5df2\u5e94\u7528\u7684\u8fc1\u79fb")),(0,a.yg)("h3",{id:"\u901a\u8fc7-sea-orm-cli"},"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"h3"},"sea-orm-cli")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sea-orm-cli")," \u5728\u5e95\u5c42\u5c06\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"cargo run --manifest-path ./migration/Cargo.toml -- COMMAND"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND\n")),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6e05\u5355\u8def\u5f84\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND -d ./other/migration/dir\n")),(0,a.yg)("h3",{id:"\u901a\u8fc7-seaschema-migrator-cli"},"\u901a\u8fc7 SeaSchema Migrator CLI"),(0,a.yg)("p",null,"\u8fd0\u884c\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"migration/main.rs")," \u4e2d\u5b9a\u4e49\u7684\u8fc1\u79fb\u5668 CLI\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ cd migration\n$ cargo run -- COMMAND\n")),(0,a.yg)("h2",{id:"\u7a0b\u5e8f\u5316\u8fc1\u79fb"},"\u7a0b\u5e8f\u5316\u8fc1\u79fb"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"Migrator")," \u6267\u884c\u8fc1\u79fb\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"Migrator")," \u5b9e\u73b0\u4e86 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm-migration/0.9/sea_orm_migration/migrator/trait.MigratorTrait.html"},(0,a.yg)("inlineCode",{parentName:"a"},"MigratorTrait")),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use migration::{Migrator, MigratorTrait};\n\n/// \u5e94\u7528\u6240\u6709\u5f85\u5904\u7406\u7684\u8fc1\u79fb\nMigrator::up(db, None).await?;\n\n/// \u5e94\u7528 10 \u4e2a\u5f85\u5904\u7406\u7684\u8fc1\u79fb\nMigrator::up(db, Some(10)).await?;\n\n/// \u56de\u6eda\u6700\u540e\u5e94\u7528\u7684\u8fc1\u79fb\nMigrator::down(db, None).await?;\n\n/// \u56de\u6eda\u6700\u540e 10 \u4e2a\u5e94\u7528\u7684\u8fc1\u79fb\nMigrator::down(db, Some(10)).await?;\n\n/// \u68c0\u67e5\u6240\u6709\u8fc1\u79fb\u7684\u72b6\u6001\nMigrator::status(db).await?;\n\n/// \u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u6240\u6709\u8868\uff0c\u7136\u540e\u91cd\u65b0\u5e94\u7528\u6240\u6709\u8fc1\u79fb\nMigrator::fresh(db).await?;\n\n/// \u56de\u6eda\u6240\u6709\u5df2\u5e94\u7528\u7684\u8fc1\u79fb\uff0c\u7136\u540e\u91cd\u65b0\u5e94\u7528\u6240\u6709\u8fc1\u79fb\nMigrator::refresh(db).await?;\n\n/// \u56de\u6eda\u6240\u6709\u5df2\u5e94\u7528\u7684\u8fc1\u79fb\nMigrator::reset(db).await?;\n")))}c.isMDXComponent=!0}}]);