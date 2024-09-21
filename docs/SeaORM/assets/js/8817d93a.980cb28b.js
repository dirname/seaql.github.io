"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[48554],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),s=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(d.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),y=n,m=p["".concat(d,".").concat(y)]||p[y]||u[y]||l;return t?r.createElement(m,i(i({ref:a},c),{},{components:t})):r.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},33380:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(58168),n=(t(96540),t(15680));const l={},i="\u9009\u62e9",o={unversionedId:"basic-crud/select",id:"version-1.0.x/basic-crud/select",title:"\u9009\u62e9",description:"\u5b9a\u4e49\u597d\u5b9e\u4f53\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u4ece\u6570\u636e\u5e93\u4e2d\u68c0\u7d22\u6570\u636e\u3002\u6570\u636e\u5e93\u4e2d\u7684\u6bcf\u4e00\u884c\u6570\u636e\u5bf9\u5e94\u4e00\u4e2a Model\u3002",source:"@site/versioned_docs/version-1.0.x/05-basic-crud/02-select.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/select",permalink:"/SeaORM/docs/basic-crud/select",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-1.0.x/05-basic-crud/02-select.md",tags:[],version:"1.0.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833108,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u67b6\u6784",permalink:"/SeaORM/docs/basic-crud/basic-schema"},next:{title:"\u63d2\u5165",permalink:"/SeaORM/docs/basic-crud/insert"}},d={},s=[{value:"\u901a\u8fc7\u4e3b\u952e\u67e5\u627e",id:"\u901a\u8fc7\u4e3b\u952e\u67e5\u627e",level:2},{value:"\u6309\u6761\u4ef6\u548c\u987a\u5e8f\u67e5\u627e",id:"\u6309\u6761\u4ef6\u548c\u987a\u5e8f\u67e5\u627e",level:2},{value:"\u67e5\u627e\u76f8\u5173\u6a21\u578b",id:"\u67e5\u627e\u76f8\u5173\u6a21\u578b",level:2},{value:"\u5ef6\u8fdf\u52a0\u8f7d",id:"\u5ef6\u8fdf\u52a0\u8f7d",level:3},{value:"\u6025\u5207\u52a0\u8f7d",id:"\u6025\u5207\u52a0\u8f7d",level:3},{value:"\u4e00\u5bf9\u4e00",id:"\u4e00\u5bf9\u4e00",level:4},{value:"\u4e00\u5bf9\u591a / \u591a\u5bf9\u591a",id:"\u4e00\u5bf9\u591a--\u591a\u5bf9\u591a",level:4},{value:"\u6279\u91cf\u52a0\u8f7d",id:"\u6279\u91cf\u52a0\u8f7d",level:3},{value:"\u4e00\u5bf9\u4e00",id:"\u4e00\u5bf9\u4e00-1",level:4},{value:"\u4e00\u5bf9\u591a",id:"\u4e00\u5bf9\u591a",level:4},{value:"\u591a\u5bf9\u591a",id:"\u591a\u5bf9\u591a",level:4},{value:"\u7ed3\u679c\u5206\u9875",id:"\u7ed3\u679c\u5206\u9875",level:2},{value:"\u6e38\u6807\u5206\u9875",id:"\u6e38\u6807\u5206\u9875",level:2},{value:"\u81ea\u5b9a\u4e49\u9009\u62e9",id:"\u81ea\u5b9a\u4e49\u9009\u62e9",level:2}],c={toc:s},p="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(p,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u9009\u62e9"},"\u9009\u62e9"),(0,n.yg)("p",null,"\u5b9a\u4e49\u597d\u5b9e\u4f53\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u4ece\u6570\u636e\u5e93\u4e2d\u68c0\u7d22\u6570\u636e\u3002\u6570\u636e\u5e93\u4e2d\u7684\u6bcf\u4e00\u884c\u6570\u636e\u5bf9\u5e94\u4e00\u4e2a ",(0,n.yg)("inlineCode",{parentName:"p"},"Model"),"\u3002"),(0,n.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSeaORM \u5c06\u9009\u62e9\u5728 ",(0,n.yg)("inlineCode",{parentName:"p"},"Column")," \u679a\u4e3e\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u5217\u3002"),(0,n.yg)("h2",{id:"\u901a\u8fc7\u4e3b\u952e\u67e5\u627e"},"\u901a\u8fc7\u4e3b\u952e\u67e5\u627e"),(0,n.yg)("p",null,"\u901a\u8fc7\u4e3b\u952e\u67e5\u627e\u6a21\u578b\uff0c\u53ef\u4ee5\u662f\u5355\u4e2a\u952e\u6216\u590d\u5408\u952e\u3002\u6211\u4eec\u9996\u5148\u8c03\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html#method.find_by_id"},(0,n.yg)("inlineCode",{parentName:"a"},"find_by_id"))," \u65b9\u6cd5\u5728 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html"},(0,n.yg)("inlineCode",{parentName:"a"},"Entity"))," \u4e0a\u81ea\u52a8\u6784\u5efa\u9009\u62e9\u67e5\u8be2\u548c\u6761\u4ef6\u3002\u7136\u540e\uff0c\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"one")," \u65b9\u6cd5\u4ece\u6570\u636e\u5e93\u4e2d\u83b7\u53d6\u5355\u4e2a\u6a21\u578b\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"use super::cake::Entity as Cake;\nuse super::cake_filling::Entity as CakeFilling;\n\n// \u901a\u8fc7\u4e3b\u952e\u67e5\u627e\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\n\n// \u901a\u8fc7\u590d\u5408\u4e3b\u952e\u67e5\u627e\nlet vanilla: Option<cake_filling::Model> = CakeFilling::find_by_id((6, 8)).one(db).await?;\n")),(0,n.yg)("h2",{id:"\u6309\u6761\u4ef6\u548c\u987a\u5e8f\u67e5\u627e"},"\u6309\u6761\u4ef6\u548c\u987a\u5e8f\u67e5\u627e"),(0,n.yg)("p",null,"\u9664\u4e86\u901a\u8fc7\u4e3b\u952e\u68c0\u7d22\u6a21\u578b\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u6839\u636e\u7279\u5b9a\u6761\u4ef6\u6309\u4e00\u5b9a\u987a\u5e8f\u68c0\u7d22\u4e00\u4e2a\u6216\u591a\u4e2a\u6a21\u578b\u3002",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html#method.find"},(0,n.yg)("inlineCode",{parentName:"a"},"find"))," \u65b9\u6cd5\u4f7f\u60a8\u53ef\u4ee5\u8bbf\u95ee SeaORM \u4e2d\u7684\u67e5\u8be2\u6784\u5efa\u5668\u3002\u5b83\u652f\u6301\u6784\u5efa\u6240\u6709\u5e38\u89c1\u7684\u9009\u62e9\u8868\u8fbe\u5f0f\uff0c\u5982 ",(0,n.yg)("inlineCode",{parentName:"p"},"where")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"order by"),"\u3002\u53ef\u4ee5\u5206\u522b\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.QueryFilter.html#method.filter"},(0,n.yg)("inlineCode",{parentName:"a"},"filter"))," \u548c ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.QueryOrder.html#method.order_by"},(0,n.yg)("inlineCode",{parentName:"a"},"order_by_*"))," \u65b9\u6cd5\u6784\u5efa\u3002"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/advanced-query/conditional-expression"},"\u6761\u4ef6\u8868\u8fbe\u5f0f"),"\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},'let chocolate: Vec<cake::Model> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .order_by_asc(cake::Column::Name)\n    .all(db)\n    .await?;\n')),(0,n.yg)("h2",{id:"\u67e5\u627e\u76f8\u5173\u6a21\u578b"},"\u67e5\u627e\u76f8\u5173\u6a21\u578b"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u9605\u8bfb\u5173\u4e8e ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/relation/one-to-one"},"\u5173\u7cfb")," \u7ae0\u8282\u7684\u66f4\u591a\u4fe1\u606f\u3002")),(0,n.yg)("h3",{id:"\u5ef6\u8fdf\u52a0\u8f7d"},"\u5ef6\u8fdf\u52a0\u8f7d"),(0,n.yg)("p",null,"\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_related"},(0,n.yg)("inlineCode",{parentName:"a"},"find_related"))," \u65b9\u6cd5\u3002"),(0,n.yg)("p",null,"\u76f8\u5173\u6a21\u578b\u5728\u60a8\u8bf7\u6c42\u65f6\u6309\u9700\u52a0\u8f7d\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u6839\u636e\u67d0\u4e9b\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\u52a0\u8f7d\u76f8\u5173\u6a21\u578b\uff0c\u5219\u66f4\u53ef\u53d6\u3002\u8bf7\u6ce8\u610f\uff0c\u4e0e\u6025\u5207\u52a0\u8f7d\u76f8\u6bd4\uff0c\u5ef6\u8fdf\u52a0\u8f7d\u5c06\u589e\u52a0\u6570\u636e\u5e93\u5f80\u8fd4\u6b21\u6570\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"// \u9996\u5148\u67e5\u627e\u86cb\u7cd5\u6a21\u578b\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\nlet cheese: cake::Model = cheese.unwrap();\n\n// \u7136\u540e\uff0c\u67e5\u627e\u6b64\u86cb\u7cd5\u7684\u6240\u6709\u76f8\u5173\u6c34\u679c\nlet fruits: Vec<fruit::Model> = cheese.find_related(Fruit).all(db).await?;\n")),(0,n.yg)("h3",{id:"\u6025\u5207\u52a0\u8f7d"},"\u6025\u5207\u52a0\u8f7d"),(0,n.yg)("p",null,"\u6240\u6709\u76f8\u5173\u6a21\u578b\u4e00\u6b21\u6027\u52a0\u8f7d\u3002\u4e0e\u5ef6\u8fdf\u52a0\u8f7d\u76f8\u6bd4\uff0c\u8fd9\u63d0\u4f9b\u4e86\u6700\u5c11\u7684\u6570\u636e\u5e93\u5f80\u8fd4\u3002"),(0,n.yg)("h4",{id:"\u4e00\u5bf9\u4e00"},"\u4e00\u5bf9\u4e00"),(0,n.yg)("p",null,"\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.Select.html#method.find_also_related"},(0,n.yg)("inlineCode",{parentName:"a"},"find_also_related"))," \u65b9\u6cd5\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let fruits_and_cakes: Vec<(fruit::Model, Option<cake::Model>)> = Fruit::find().find_also_related(Cake).all(db).await?;\n")),(0,n.yg)("h4",{id:"\u4e00\u5bf9\u591a--\u591a\u5bf9\u591a"},"\u4e00\u5bf9\u591a / \u591a\u5bf9\u591a"),(0,n.yg)("p",null,"\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.Select.html#method.find_with_related"},(0,n.yg)("inlineCode",{parentName:"a"},"find_with_related"))," \u65b9\u6cd5\uff0c\u76f8\u5173\u6a21\u578b\u5c06\u6309\u7236\u6a21\u578b\u5206\u7ec4\u3002\u8be5\u65b9\u6cd5\u5904\u7406 1-N \u548c M-N \u7684\u60c5\u51b5\uff0c\u5e76\u5728\u6d89\u53ca\u8fde\u63a5\u8868\u65f6\u6267\u884c 2 \u6b21\u8fde\u63a5\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;\n")),(0,n.yg)("h3",{id:"\u6279\u91cf\u52a0\u8f7d"},"\u6279\u91cf\u52a0\u8f7d"),(0,n.yg)("p",null,"\u81ea 0.11 \u7248\u672c\u4ee5\u6765\uff0c\u6211\u4eec\u5f15\u5165\u4e86 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html"},"LoaderTrait")," \u4ee5\u6279\u91cf\u52a0\u8f7d\u76f8\u5173\u5b9e\u4f53\u3002"),(0,n.yg)("p",null,"\u4e0e\u6025\u5207\u52a0\u8f7d\u76f8\u6bd4\uff0c\u5b83\u8282\u7701\u5e26\u5bbd\uff08\u8003\u8651\u4e00\u5bf9\u591a\u7684\u60c5\u51b5\uff0c\u4e00\u65b9\u7684\u884c\u53ef\u80fd\u91cd\u590d\uff09\u4f46\u4ee3\u4ef7\u662f\u589e\u52a0\u4e00\u6b21\uff08\u6216\u5728\u591a\u5bf9\u591a\u7684\u60c5\u51b5\u4e0b\u589e\u52a0\u4e24\u6b21\uff09\u6570\u636e\u5e93\u5f80\u8fd4\u3002"),(0,n.yg)("h4",{id:"\u4e00\u5bf9\u4e00-1"},"\u4e00\u5bf9\u4e00"),(0,n.yg)("p",null,"\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html#tymethod.load_one"},"load_one")," \u65b9\u6cd5\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let fruits: Vec<fruit::Model> = Fruit::find().all(db).await?;\nlet cakes: Vec<Option<cake::Model>> = fruits.load_one(Cake, db).await?;\n")),(0,n.yg)("h4",{id:"\u4e00\u5bf9\u591a"},"\u4e00\u5bf9\u591a"),(0,n.yg)("p",null,"\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html#tymethod.load_many"},"load_many")," \u65b9\u6cd5\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\n")),(0,n.yg)("h4",{id:"\u591a\u5bf9\u591a"},"\u591a\u5bf9\u591a"),(0,n.yg)("p",null,"\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html#tymethod.load_many_to_many"},"load_many_to_many")," \u65b9\u6cd5\u3002\u60a8\u5fc5\u987b\u63d0\u4f9b\u8fde\u63a5\u5b9e\u4f53\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fillings: Vec<Vec<filling::Model>> = cakes.load_many_to_many(Filling, CakeFilling, db).await?;\n")),(0,n.yg)("h2",{id:"\u7ed3\u679c\u5206\u9875"},"\u7ed3\u679c\u5206\u9875"),(0,n.yg)("p",null,"\u5c06\u4efb\u4f55 SeaORM \u9009\u62e9\u8f6c\u6362\u4e3a\u5177\u6709\u81ea\u5b9a\u4e49\u9875\u9762\u5927\u5c0f\u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.Paginator.html"},"\u5206\u9875\u5668"),"\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake};\nlet mut cake_pages = cake::Entity::find()\n    .order_by_asc(cake::Column::Id)\n    .paginate(db, 50);\n \nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // \u5bf9 cakes: Vec<cake::Model> \u505a\u4e00\u4e9b\u64cd\u4f5c\n}\n")),(0,n.yg)("h2",{id:"\u6e38\u6807\u5206\u9875"},"\u6e38\u6807\u5206\u9875"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u6839\u636e\u5217\uff08\u5982\u4e3b\u952e\uff09\u5206\u9875\u884c\uff0c\u8bf7\u4f7f\u7528\u6e38\u6807\u5206\u9875\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake};\n// \u521b\u5efa\u6309 `cake`.`id` \u6392\u5e8f\u7684\u6e38\u6807\nlet mut cursor = cake::Entity::find().cursor_by(cake::Column::Id);\n\n// \u6839\u636e `cake`.`id` > 1 \u4e14 `cake`.`id` < 100 \u8fc7\u6ee4\u5206\u9875\u7ed3\u679c\ncursor.after(1).before(100);\n\n// \u83b7\u53d6\u524d 10 \u884c\uff08\u6309 `cake`.`id` ASC \u6392\u5e8f\uff09\nfor cake in cursor.first(10).all(db).await? {\n    // \u5bf9 cake: cake::Model \u505a\u4e00\u4e9b\u64cd\u4f5c\n}\n\n// \u83b7\u53d6\u6700\u540e 10 \u884c\uff08\u6309 `cake`.`id` DESC \u6392\u5e8f\uff0c\u4f46\u884c\u4ee5\u5347\u5e8f\u8fd4\u56de\uff09\nfor cake in cursor.last(10).all(db).await? {\n    // \u5bf9 cake: cake::Model \u505a\u4e00\u4e9b\u64cd\u4f5c\n}\n")),(0,n.yg)("p",null,"\u57fa\u4e8e\u590d\u5408\u4e3b\u952e\u8fdb\u884c\u884c\u5206\u9875\u4e5f\u662f\u53ef\u7528\u7684\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake_filling};\nlet rows = cake_filling::Entity::find()\n    .cursor_by((cake_filling::Column::CakeId, cake_filling::Column::FillingId))\n    .after((0, 1))\n    .before((10, 11))\n    .first(3)\n    .all(&db)\n    .await?;\n")),(0,n.yg)("h2",{id:"\u81ea\u5b9a\u4e49\u9009\u62e9"},"\u81ea\u5b9a\u4e49\u9009\u62e9"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u9009\u62e9\u81ea\u5b9a\u4e49\u5217\u548c\u8868\u8fbe\u5f0f\uff0c\u8bf7\u9605\u8bfb ",(0,n.yg)("a",{parentName:"p",href:"/SeaORM/docs/advanced-query/custom-select"},"\u81ea\u5b9a\u4e49\u9009\u62e9")," \u90e8\u5206\u3002"))}u.isMDXComponent=!0}}]);