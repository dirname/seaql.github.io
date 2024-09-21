"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[34234],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||g[f]||r;return t?i.createElement(m,l(l({ref:n},s),{},{components:t})):i.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(58168),a=(t(96540),t(15680));const r={},l="\u94fe\u63a5\u5173\u7cfb",o={unversionedId:"relation/chained-relations",id:"version-0.7.x/relation/chained-relations",title:"\u94fe\u63a5\u5173\u7cfb",description:"Related \u7279\u5f81\u662f\u6211\u4eec\u5728\u5b9e\u4f53\u5173\u7cfb\u56fe\u4e2d\u7ed8\u5236\u7684\u7bad\u5934 (1-1, 1-N, M-N) \u7684\u8868\u793a\u3002\u4e00\u4e2a Linked \u7531\u4e00\u7cfb\u5217\u5173\u7cfb\u7ec4\u6210\uff0c\u5e76\u4e14\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u975e\u5e38\u6709\u7528\uff1a",source:"@site/versioned_docs/version-0.7.x/07-relation/04-chained-relations.md",sourceDirName:"07-relation",slug:"/relation/chained-relations",permalink:"/SeaORM/docs/0.7.x/relation/chained-relations",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/07-relation/04-chained-relations.md",tags:[],version:"0.7.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1648353945,formattedLastUpdatedAt:"Mar 27, 2022",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u5bf9\u591a\u5173\u7cfb",permalink:"/SeaORM/docs/0.7.x/relation/many-to-many"},next:{title:"\u81ea\u5f15\u7528",permalink:"/SeaORM/docs/0.7.x/relation/self-referencing"}},c={},d=[{value:"\u61d2\u52a0\u8f7d",id:"\u61d2\u52a0\u8f7d",level:3},{value:"\u6025\u5207\u52a0\u8f7d",id:"\u6025\u5207\u52a0\u8f7d",level:3}],s={toc:d},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,i.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u94fe\u63a5\u5173\u7cfb"},"\u94fe\u63a5\u5173\u7cfb"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Related")," \u7279\u5f81\u662f\u6211\u4eec\u5728\u5b9e\u4f53\u5173\u7cfb\u56fe\u4e2d\u7ed8\u5236\u7684\u7bad\u5934 (1-1, 1-N, M-N) \u7684\u8868\u793a\u3002\u4e00\u4e2a ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/entity/trait.Linked.html"},(0,a.yg)("inlineCode",{parentName:"a"},"Linked"))," \u7531\u4e00\u7cfb\u5217\u5173\u7cfb\u7ec4\u6210\uff0c\u5e76\u4e14\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u975e\u5e38\u6709\u7528\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5b58\u5728\u591a\u6761\u8fde\u63a5\u8def\u5f84\u5728\u4e00\u5bf9\u5b9e\u4f53\u4e4b\u95f4"),(0,a.yg)("li",{parentName:"ol"},"\u5728\u5173\u7cfb\u67e5\u8be2\u4e2d\u8de8\u591a\u4e2a\u5b9e\u4f53\u8fdb\u884c\u8fde\u63a5")),(0,a.yg)("p",null,"\u4ee5 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"\u8fd9\u4e2a")," \u7b80\u5355\u793a\u4f8b\u4e3a\u4f8b\uff0c\u6211\u4eec\u901a\u8fc7\u4e2d\u95f4\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"cake_filling")," \u8868\u8fde\u63a5\u86cb\u7cd5\u548c\u9985\u6599\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\npub struct CakeToFilling;\n\nimpl Linked for CakeToFilling {\n    type FromEntity = cake::Entity;\n\n    type ToEntity = filling::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            cake_filling::Relation::Cake.def().rev(),\n            cake_filling::Relation::Filling.def(),\n        ]\n    }\n}\n")),(0,a.yg)("p",null,"\u53e6\u5916\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"RelationDef")," \u53ef\u4ee5\u52a8\u6001\u5b9a\u4e49\uff0c\u4ee5\u4e0b\u4ee3\u7801\u4e0e\u4e0a\u9762\u7684\u793a\u4f8b\u7b49\u4ef7\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\npub struct CakeToFilling;\n\nimpl Linked for CakeToFilling {\n    type FromEntity = cake::Entity;\n\n    type ToEntity = filling::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            cake_filling::Relation::Cake.def().rev(),\n            cake_filling::Entity::belongs_to(filling::Entity)\n                .from(cake_filling::Column::FillingId)\n                .to(filling::Column::Id)\n                .into(),\n        ]\n    }\n}\n")),(0,a.yg)("h3",{id:"\u61d2\u52a0\u8f7d"},"\u61d2\u52a0\u8f7d"),(0,a.yg)("p",null,"\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_linked"},(0,a.yg)("inlineCode",{parentName:"a"},"find_linked"))," \u65b9\u6cd5\u67e5\u627e\u53ef\u4ee5\u586b\u5145\u5230\u86cb\u7cd5\u4e2d\u7684\u9985\u6599\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let cake_model = cake::Model {\n    id: 12,\n    name: "".to_owned(),\n};\n\nassert_eq!(\n    cake_model\n        .find_linked(cake::CakeToFilling)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        r#"SELECT `filling`.`id`, `filling`.`name`"#,\n        r#"FROM `filling`"#,\n        r#"INNER JOIN `cake_filling` ON `cake_filling`.`filling_id` = `filling`.`id`"#,\n        r#"INNER JOIN `cake` ON `cake`.`id` = `cake_filling`.`cake_id`"#,\n        r#"WHERE `cake`.`id` = 12"#,\n    ]\n    .join(" ")\n);\n')),(0,a.yg)("h3",{id:"\u6025\u5207\u52a0\u8f7d"},"\u6025\u5207\u52a0\u8f7d"),(0,a.yg)("p",null,"\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/entity/prelude/struct.Select.html#method.find_also_linked"},(0,a.yg)("inlineCode",{parentName:"a"},"find_also_linked"))," \u65b9\u6cd5\u5728\u5355\u6b21\u9009\u62e9\u4e2d\u67e5\u627e\u6240\u6709\u86cb\u7cd5\u548c\u9985\u6599\u7684\u914d\u5bf9\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .find_also_linked(cake::CakeToFilling)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,",\n        "`filling`.`id` AS `B_id`, `filling`.`name` AS `B_name`",\n        "FROM `cake`",\n        "LEFT JOIN `cake_filling` ON `cake`.`id` = `cake_filling`.`cake_id`",\n        "LEFT JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",\n    ]\n    .join(" ")\n);\n')))}g.isMDXComponent=!0}}]);