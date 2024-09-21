"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[729],{5680:(a,e,t)=>{t.d(e,{xA:()=>c,yg:()=>u});var n=t(6540);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var s=n.createContext({}),g=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},c=function(a){var e=g(a.components);return n.createElement(s.Provider,{value:e},a.children)},m="mdxType",p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},v=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,l=a.originalType,s=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),m=g(t),v=r,u=m["".concat(s,".").concat(v)]||m[v]||p[v]||l;return t?n.createElement(u,i(i({ref:e},c),{},{components:t})):n.createElement(u,i({ref:e},c))}));function u(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var l=t.length,i=new Array(l);i[0]=v;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o[m]="string"==typeof a?a:r,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},3285:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=t(8168),r=(t(6540),t(5680));const l={slug:"2022-01-01-whats-new-in-0.5.0",title:"SeaORM 0.5.0 \u66f4\u65b0\u5185\u5bb9",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,o={permalink:"/blog/2022-01-01-whats-new-in-0.5.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-01-01-whats-new-in-0.5.0.md",source:"@site/blog/2022-01-01-whats-new-in-0.5.0.md",title:"SeaORM 0.5.0 \u66f4\u65b0\u5185\u5bb9",description:"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03\u4eca\u5929\u53d1\u5e03 SeaORM 0.5.0\uff01\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4e3b\u8981\u529f\u80fd\u4eae\u70b9 \ud83c\udf1f\uff1a",date:"2022-01-01T00:00:00.000Z",formattedDate:"January 1, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:5.015,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-01-01-whats-new-in-0.5.0",title:"SeaORM 0.5.0 \u66f4\u65b0\u5185\u5bb9",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"SeaORM 0.6.0 \u65b0\u7279\u6027",permalink:"/blog/2022-02-07-whats-new-in-0.6.0"},nextItem:{title:"SeaORM 0.4.0 \u4e2d\u7684\u65b0\u7279\u6027",permalink:"/blog/2021-11-19-whats-new-in-0.4.0"}},s={authorsImageUrls:[void 0]},g=[{value:"\u63d2\u5165\u548c\u66f4\u65b0\u8fd4\u56de <code>Model</code>",id:"\u63d2\u5165\u548c\u66f4\u65b0\u8fd4\u56de-model",level:2},{value:"<code>ActiveValue</code> \u5b8c\u5168\u91cd\u6784",id:"activevalue-\u5b8c\u5168\u91cd\u6784",level:2},{value:"SeaORM CLI &amp; \u4ee3\u7801\u751f\u6210\u66f4\u65b0",id:"seaorm-cli--\u4ee3\u7801\u751f\u6210\u66f4\u65b0",level:2},{value:"\u8ffd\u8e2a",id:"\u8ffd\u8e2a",level:2},{value:"\u8d5e\u52a9\u5546",id:"\u8d5e\u52a9\u5546",level:2},{value:"\u793e\u533a",id:"\u793e\u533a",level:2}],c={toc:g},m="wrapper";function p(a){let{components:e,...t}=a;return(0,r.yg)(m,(0,n.A)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\ud83c\udf89 \u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03\u4eca\u5929\u53d1\u5e03 SeaORM ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.5.0"},(0,r.yg)("inlineCode",{parentName:"a"},"0.5.0")),"\uff01\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4e3b\u8981\u529f\u80fd\u4eae\u70b9 \ud83c\udf1f\uff1a"),(0,r.yg)("h2",{id:"\u63d2\u5165\u548c\u66f4\u65b0\u8fd4\u56de-model"},"\u63d2\u5165\u548c\u66f4\u65b0\u8fd4\u56de ",(0,r.yg)("inlineCode",{parentName:"h2"},"Model")),(0,r.yg)("p",null,"[",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/339"},"#339"),"] \u6839\u636e\u6211\u4eec\u793e\u533a\u6210\u5458\u7684\u8981\u6c42\uff0c\u60a8\u73b0\u5728\u53ef\u4ee5\u5728\u63d2\u5165\u6216\u66f4\u65b0\u64cd\u4f5c\u540e\u83b7\u53d6\u66f4\u65b0\u540e\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Model"),"\u3002\u5982\u679c\u60a8\u60f3\u4fee\u6539\u6a21\u578b\u5e76\u5c06\u5176\u4fdd\u5b58\u56de\u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"into_active_model")," \u65b9\u6cd5\u5c06\u5176\u8f6c\u6362\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"ActiveModel"),"\u3002"),(0,r.yg)("p",null,"\u7834\u574f\u6027\u66f4\u6539\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ActiveModel::insert")," \u548c ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveModel::update")," \u8fd4\u56de ",(0,r.yg)("inlineCode",{parentName:"li"},"Model")," \u800c\u4e0d\u662f ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveModel")),(0,r.yg)("li",{parentName:"ul"},"\u65b9\u6cd5 ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveModelBehavior::after_save")," \u63a5\u53d7 ",(0,r.yg)("inlineCode",{parentName:"li"},"Model")," \u4f5c\u4e3a\u8f93\u5165\uff0c\u800c\u4e0d\u662f ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveModel"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'// \u6784\u5efa\u4e00\u4e2a `ActiveModel`\nlet active_model = ActiveModel {\n    name: Set("\u7ecf\u5178\u9999\u8349\u86cb\u7cd5".to_owned()),\n    ..Default::default()\n};\n// \u6267\u884c\u63d2\u5165\nlet cake: Model = active_model.insert(db).await?;\nassert_eq!(\n    cake,\n    Model {\n        id: 1,\n        name: "\u7ecf\u5178\u9999\u8349\u86cb\u7cd5".to_owned(),\n    }\n);\n\n// \u5c06 `Model` \u8f6c\u6362\u4e3a `ActiveModel`\nlet mut active_model = cake.into_active_model();\n// \u66f4\u6539\u86cb\u7cd5\u7684\u540d\u79f0\nactive_model.name = Set("\u5de7\u514b\u529b\u86cb\u7cd5".to_owned());\n// \u6267\u884c\u66f4\u65b0\nlet cake: Model = active_model.update(db).await?;\nassert_eq!(\n    cake,\n    Model {\n        id: 1,\n        name: "\u5de7\u514b\u529b\u86cb\u7cd5".to_owned(),\n    }\n);\n\n// \u6267\u884c\u5220\u9664\ncake.delete(db).await?;\n')),(0,r.yg)("div",{class:"row"},(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},"\u63d0\u8bae\u8005\uff1a",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nicoulaj"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/3162?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Julien Nicoulaud"))),(0,r.yg)("br",null),(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/edg-l"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/15859336?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Edgar")))),(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8d21\u732e\u8005\uff1a",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Billy Chan"))))),(0,r.yg)("h2",{id:"activevalue-\u5b8c\u5168\u91cd\u6784"},(0,r.yg)("inlineCode",{parentName:"h2"},"ActiveValue")," \u5b8c\u5168\u91cd\u6784"),(0,r.yg)("p",null,"[",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/340"},"#340"),"] ",(0,r.yg)("inlineCode",{parentName:"p"},"ActiveValue")," \u73b0\u5728\u88ab\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u679a\u4e3e\u800c\u4e0d\u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\u3002\u5b83\u7684\u516c\u5171 API \u4fdd\u6301\u4e0d\u53d8\uff0c\u9664\u4e86 ",(0,r.yg)("inlineCode",{parentName:"p"},"Unset")," \u88ab\u5f03\u7528\uff0c\u5e94\u8be5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"ActiveValue::NotSet"),"\u3002"),(0,r.yg)("p",null,"\u7834\u574f\u6027\u66f4\u6539\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5c06\u65b9\u6cd5 ",(0,r.yg)("inlineCode",{parentName:"li"},"sea_orm::unchanged_active_value_not_intended_for_public_use")," \u91cd\u547d\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"sea_orm::Unchanged")),(0,r.yg)("li",{parentName:"ul"},"\u5c06\u65b9\u6cd5 ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveValue::unset")," \u91cd\u547d\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveValue::not_set")),(0,r.yg)("li",{parentName:"ul"},"\u5c06\u65b9\u6cd5 ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveValue::is_unset")," \u91cd\u547d\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"ActiveValue::is_not_set")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ActiveValue")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"PartialEq")," \u5c06\u68c0\u67e5\u72b6\u6001\u7684\u76f8\u7b49\u6027\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u503c\u7684\u76f8\u7b49\u6027")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"/// \u5b9a\u4e49 ActiveModel \u4e2d\u4f7f\u7528\u7684\u6709\u72b6\u6001\u503c\u3002\npub enum ActiveValue<V>\nwhere\n    V: Into<Value>,\n{\n    /// \u4e00\u4e2a\u5df2\u5b9a\u4e49\u7684 [Value] \u6b63\u5728\u88ab\u6fc0\u6d3b\u8bbe\u7f6e\n    Set(V),\n    /// \u4e00\u4e2a\u5df2\u5b9a\u4e49\u7684 [Value] \u4fdd\u6301\u4e0d\u53d8\n    Unchanged(V),\n    /// \u4e00\u4e2a\u672a\u5b9a\u4e49\u7684 [Value]\n    NotSet,\n}\n")),(0,r.yg)("div",{class:"row"},(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8bbe\u8ba1\u8005\uff1a",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Chris Tsang")))),(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8d21\u732e\u8005\uff1a",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Billy Chan"))))),(0,r.yg)("h2",{id:"seaorm-cli--\u4ee3\u7801\u751f\u6210\u66f4\u65b0"},"SeaORM CLI & \u4ee3\u7801\u751f\u6210\u66f4\u65b0"),(0,r.yg)("p",null,"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"sea-orm-cli"),"\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cargo install sea-orm-cli\n")),(0,r.yg)("p",null,"\u4e0e\u5b9e\u4f53\u6587\u4ef6\u751f\u6210\u76f8\u5173\u7684\u66f4\u65b0 (",(0,r.yg)("inlineCode",{parentName:"p"},"cargo generate entity"),")\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[",(0,r.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/348"},"#348"),"] \u53d1\u73b0\u5e76\u5b9a\u4e49 PostgreSQL \u679a\u4e3e"),(0,r.yg)("li",{parentName:"ul"},"[",(0,r.yg)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/386"},"#386"),"] \u652f\u6301 SQLite \u6570\u636e\u5e93\uff0c\u60a8\u53ef\u4ee5\u4ece\u6240\u6709\u652f\u6301\u7684\u6570\u636e\u5e93\uff08\u5305\u62ec MySQL\u3001PostgreSQL \u548c SQLite\uff09\u751f\u6210\u5b9e\u4f53\u6587\u4ef6")),(0,r.yg)("div",{class:"row"},(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},"\u63d0\u8bae\u8005\uff1a",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},"\u8d21\u732e\u8005\uff1a",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/charleschege"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/33346042?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Charles\xb7Chege"))),(0,r.yg)("br",null),(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Billy Chan"))))),(0,r.yg)("h2",{id:"\u8ffd\u8e2a"},"\u8ffd\u8e2a"),(0,r.yg)("p",null,"[",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/373"},"#373"),"] \u60a8\u53ef\u4ee5\u4f7f\u7528\u542f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"debug-print")," \u529f\u80fd\u548c\u8fd0\u884c\u4e2d\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,r.yg)("inlineCode",{parentName:"a"},"tracing-subscriber"))," \u6765\u8ffd\u8e2a SeaORM \u6267\u884c\u7684\u67e5\u8be2\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,r.yg)("p",null,"\u8d21\u732e\u8005\uff1a"),(0,r.yg)("div",{class:"row"},(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nappa85"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/7566389?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Marco Napetti"))))),(0,r.yg)("h2",{id:"\u8d5e\u52a9\u5546"},"\u8d5e\u52a9\u5546"),(0,r.yg)("p",null,"\u6211\u4eec\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," \u8d44\u6599\u5df2\u7ecf\u4e0a\u7ebf\uff01\u5982\u679c\u60a8\u613f\u610f\uff0c\u4efb\u4f55\u5c0f\u989d\u6350\u8d60\u5c06\u4e0d\u80dc\u611f\u6fc0\u3002"),(0,r.yg)("p",null,"\u5411\u6211\u4eec\u7684\u8d5e\u52a9\u5546\u81f4\u4ee5\u8877\u5fc3\u7684\u611f\u8c22 \ud83d\ude07\uff1a"),(0,r.yg)("div",{class:"row"},(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Shane Sveller")))),(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/praveenperera"},(0,r.yg)("img",{src:"https://avatars.githubusercontent.com/u/1775346?v=4"})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"Praveen Perera")))),(0,r.yg)("div",{class:"col col--6 margin-bottom--md"},(0,r.yg)("div",{class:"avatar"},(0,r.yg)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,r.yg)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,r.yg)("div",{class:"avatar__intro"},(0,r.yg)("div",{class:"avatar__name"},"\u672a\u547d\u540d\u8d5e\u52a9\u5546"))))),(0,r.yg)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,r.yg)("p",null,"SeaQL \u662f\u4e00\u4e2a\u7531\u793e\u533a\u9a71\u52a8\u7684\u9879\u76ee\u3002\u6211\u4eec\u6b22\u8fce\u60a8\u53c2\u4e0e\u3001\u8d21\u732e\uff0c\u5e76\u5171\u540c\u4e3a Rust \u7684\u672a\u6765\u800c\u52aa\u529b\u3002"),(0,r.yg)("p",null,"\u8fd9\u662f SeaORM ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/6"},(0,r.yg)("inlineCode",{parentName:"a"},"0.6.x"))," \u7684\u8def\u7ebf\u56fe\u3002"))}p.isMDXComponent=!0}}]);