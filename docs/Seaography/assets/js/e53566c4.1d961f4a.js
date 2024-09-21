"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[132],{5680:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>N});var r=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,r,l=function(e,a){if(null==e)return{};var n,r,l={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),g=function(e){var a=r.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},i=function(e){var a=g(e.components);return r.createElement(o.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var n=e.components,l=e.mdxType,t=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=g(n),y=l,N=m["".concat(o,".").concat(y)]||m[y]||c[y]||t;return n?r.createElement(N,s(s({ref:a},i),{},{components:n})):r.createElement(N,s({ref:a},i))}));function N(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var t=n.length,s=new Array(t);s[0]=y;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[m]="string"==typeof e?e:l,s[1]=p;for(var g=2;g<t;g++)s[g]=n[g];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8833:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>p,toc:()=>g});var r=n(8168),l=(n(6540),n(5680));const t={},s="\u8fd0\u884c\u793a\u4f8b",p={unversionedId:"running-example",id:"version-0.2.x/running-example",title:"\u8fd0\u884c\u793a\u4f8b",description:"\u9879\u76ee\u4ee3\u7801\u5e93\u5305\u542b\u4e00\u4e2a\u793a\u4f8b\u6570\u636e\u5e93\uff0c\u60a8\u53ef\u4ee5\u7528\u4e8e\u8fd0\u884c\u793a\u4f8b\u9879\u76ee\u3002",source:"@site/versioned_docs/version-0.2.x/02-running-example.md",sourceDirName:".",slug:"/running-example",permalink:"/Seaography/docs/0.2.x/running-example",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/versioned_docs/version-0.2.x/02-running-example.md",tags:[],version:"0.2.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1669888475,formattedLastUpdatedAt:"Dec 1, 2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8",permalink:"/Seaography/docs/0.2.x/getting-started"},next:{title:"\u751f\u6210\u7684\u9879\u76ee\u7ed3\u6784",permalink:"/Seaography/docs/0.2.x/generated-project-structure"}},o={},g=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u4ece Cargo \u5b89\u88c5",id:"\u4ece-cargo-\u5b89\u88c5",level:3},{value:"\u4ece\u6e90\u4ee3\u7801\u5b89\u88c5",id:"\u4ece\u6e90\u4ee3\u7801\u5b89\u88c5",level:3},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3},{value:"SQLite",id:"sqlite",level:3},{value:"\u6269\u5c55\u548c\u914d\u7f6e\u4ee3\u7801",id:"\u6269\u5c55\u548c\u914d\u7f6e\u4ee3\u7801",level:2},{value:"\u8fd0\u884c\u670d\u52a1\u5668",id:"\u8fd0\u884c\u670d\u52a1\u5668",level:2},{value:"\u91cd\u65b0\u751f\u6210\u4ee3\u7801",id:"\u91cd\u65b0\u751f\u6210\u4ee3\u7801",level:2},{value:"\u67e5\u8be2\u793a\u4f8b",id:"\u67e5\u8be2\u793a\u4f8b",level:2},{value:"\u83b7\u53d6\u5f71\u7247\u53ca\u5176\u6f14\u5458",id:"\u83b7\u53d6\u5f71\u7247\u53ca\u5176\u6f14\u5458",level:4},{value:"\u83b7\u53d6\u5546\u5e97\u53ca\u5176\u5458\u5de5",id:"\u83b7\u53d6\u5546\u5e97\u53ca\u5176\u5458\u5de5",level:4},{value:"\u83b7\u53d6\u975e\u6d3b\u8dc3\u5ba2\u6237\uff0c\u5e26\u5206\u9875",id:"\u83b7\u53d6\u975e\u6d3b\u8dc3\u5ba2\u6237\u5e26\u5206\u9875",level:3},{value:"\u4e0a\u8ff0\u67e5\u8be2\u4f7f\u7528\u6e38\u6807\u5206\u9875",id:"\u4e0a\u8ff0\u67e5\u8be2\u4f7f\u7528\u6e38\u6807\u5206\u9875",level:3}],i={toc:g},m="wrapper";function c(e){let{components:a,...n}=e;return(0,l.yg)(m,(0,r.A)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u8fd0\u884c\u793a\u4f8b"},"\u8fd0\u884c\u793a\u4f8b"),(0,l.yg)("p",null,"\u9879\u76ee\u4ee3\u7801\u5e93\u5305\u542b\u4e00\u4e2a\u793a\u4f8b\u6570\u636e\u5e93\uff0c\u60a8\u53ef\u4ee5\u7528\u4e8e\u8fd0\u884c\u793a\u4f8b\u9879\u76ee\u3002"),(0,l.yg)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u6309\u7167\u8bf4\u660e\u8bbe\u7f6e\u793a\u4f8b\u9879\u76ee\uff0c\u5e76\u4e14\u53ef\u4ee5\u6267\u884c\u4e00\u4e9b\u6709\u7528\u7684\u67e5\u8be2\u3002"),(0,l.yg)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"rustup: ",(0,l.yg)("a",{parentName:"li",href:"https://rustup.rs/"},"https://rustup.rs/")),(0,l.yg)("li",{parentName:"ol"},"mysql / postgres \u6570\u636e\u5e93\uff08\u53ef\u9009\uff09")),(0,l.yg)("h3",{id:"\u4ece-cargo-\u5b89\u88c5"},"\u4ece Cargo \u5b89\u88c5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cargo install seaography-cli\n")),(0,l.yg)("h3",{id:"\u4ece\u6e90\u4ee3\u7801\u5b89\u88c5"},"\u4ece\u6e90\u4ee3\u7801\u5b89\u88c5"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u514b\u9686\u9879\u76ee"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:SeaQL/seaography.git\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6784\u5efa\u9879\u76ee"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./seaography/cli\ncargo install --path .\n")))),(0,l.yg)("h3",{id:"mysql"},"MySQL"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5b9a\u4f4d\u5230\u9879\u76ee"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./examples/mysql\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mysql -uroot -p -h 127.0.0.1 mysql -e 'CREATE DATABASE `sakila`'\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5bfc\u5165\u67b6\u6784"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mysql -uroot -p -h 127.0.0.1 sakila < sakila-schema.sql\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mysql -uroot -p -h 127.0.0.1 sakila < sakila-data.sql\n")))),(0,l.yg)("h3",{id:"postgres"},"Postgres"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5b9a\u4f4d\u5230\u9879\u76ee"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./examples/postgres\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"psql -q postgres://postgres:postgres@localhost/postgres -c 'CREATE DATABASE \"sakila\"'\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5bfc\u5165\u67b6\u6784"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"psql -q postgres://postgres:postgres@localhost/sakila < sakila-schema.sql\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"psql -q postgres://postgres:postgres@localhost/sakila < sakila-data.sql\n")))),(0,l.yg)("h3",{id:"sqlite"},"SQLite"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5b9a\u4f4d\u5230\u9879\u76ee",(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./examples/sqlite\n")))),(0,l.yg)("h2",{id:"\u6269\u5c55\u548c\u914d\u7f6e\u4ee3\u7801"},"\u6269\u5c55\u548c\u914d\u7f6e\u4ee3\u7801"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u81ea\u7531\u4fee\u6539\u4ee3\u7801\uff0c\u66f4\u6539\u4ee5\u7b26\u5408\u60a8\u7684\u9700\u6c42\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"/docs/extending-code"},"\u5982\u4f55\u6269\u5c55\u751f\u6210\u7684\u4ee3\u7801"),"\u3002"),(0,l.yg)("h2",{id:"\u8fd0\u884c\u670d\u52a1\u5668"},"\u8fd0\u884c\u670d\u52a1\u5668"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cargo run\n")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"http://127.0.0.1:8000/"},"http://127.0.0.1:8000/")),(0,l.yg)("h2",{id:"\u91cd\u65b0\u751f\u6210\u4ee3\u7801"},"\u91cd\u65b0\u751f\u6210\u4ee3\u7801"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u662f\u4ece\u5934\u751f\u6210\u793a\u4f8b\u7684\u8bf4\u660e\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55\u4e3a Seaography \u6587\u4ef6\u5939"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ cd ./seaography\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6784\u5efa\u9879\u76ee"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cargo build\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6e05\u7406\u751f\u6210\u7684\u4ee3\u7801"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"rm -rf ./examples/{mysql|sqlite|postgres}/src\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u751f\u6210\u4ee3\u7801"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./examples/{mysql|sqlite|postgres}\nseaography-cli <database_url> seaography-example .\n")),(0,l.yg)("p",{parentName:"li"},"*",' \u793a\u4f8b\u6570\u636e\u5e93 URL "sqlite://sakila.db", "mysql://username:',(0,l.yg)("a",{parentName:"p",href:"mailto:password@127.0.0.1"},"password@127.0.0.1"),'/sakila"'))),(0,l.yg)("h2",{id:"\u67e5\u8be2\u793a\u4f8b"},"\u67e5\u8be2\u793a\u4f8b"),(0,l.yg)("h4",{id:"\u83b7\u53d6\u5f71\u7247\u53ca\u5176\u6f14\u5458"},"\u83b7\u53d6\u5f71\u7247\u53ca\u5176\u6f14\u5458"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"{\n  film(pagination: { pages: { limit: 2, page: 0 } }, orderBy: { title: ASC }) {\n    nodes {\n      title\n      description\n      releaseYear\n      filmActor {\n        actor {\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n}\n\n")),(0,l.yg)("p",null,"\u54cd\u5e94"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "film": {\n      "nodes": [\n        {\n          "title": "ACADEMY DINOSAUR",\n          "description": "\u4e00\u90e8\u5173\u4e8e\u5973\u6743\u4e3b\u4e49\u8005\u4e0e\u75af\u72c2\u79d1\u5b66\u5bb6\u5fc5\u987b\u5728\u52a0\u62ff\u5927\u843d\u57fa\u5c71\u8109\u4e0e\u8001\u5e08\u5bf9\u6297\u7684\u53f2\u8bd7\u5267",\n          "releaseYear": "2006",\n          "filmActor": [\n            {\n              "actor": {\n                "firstName": "PENELOPE",\n                "lastName": "GUINESS"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "CHRISTIAN",\n                "lastName": "GABLE"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "LUCILLE",\n                "lastName": "TRACY"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "SANDRA",\n                "lastName": "PECK"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "JOHNNY",\n                "lastName": "CAGE"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "MENA",\n                "lastName": "TEMPLE"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "WARREN",\n                "lastName": "NOLTE"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "OPRAH",\n                "lastName": "KILMER"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "ROCK",\n                "lastName": "DUKAKIS"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "MARY",\n                "lastName": "KEITEL"\n              }\n            }\n          ]\n        },\n        {\n          "title": "ACE GOLDFINGER",\n          "description": "\u5173\u4e8e\u6570\u636e\u5e93\u7ba1\u7406\u5458\u4e0e\u63a2\u9669\u8005\u5fc5\u987b\u5728\u53e4\u4ee3\u4e2d\u56fd\u5bfb\u627e\u4e00\u8f86\u8f66\u7684\u60ca\u4eba\u542f\u793a",\n          "releaseYear": "2006",\n          "filmActor": [\n            {\n              "actor": {\n                "firstName": "BOB",\n                "lastName": "FAWCETT"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "MINNIE",\n                "lastName": "ZELLWEGER"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "SEAN",\n                "lastName": "GUINESS"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "CHRIS",\n                "lastName": "DEPP"\n              }\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,l.yg)("h4",{id:"\u83b7\u53d6\u5546\u5e97\u53ca\u5176\u5458\u5de5"},"\u83b7\u53d6\u5546\u5e97\u53ca\u5176\u5458\u5de5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"{\n  store(filters: { storeId: { eq: 1 } }) {\n    nodes {\n      storeId\n      address {\n        address\n        address2\n      }\n      staff {\n        firstName\n        lastName\n      }\n    }\n  }\n}\n")),(0,l.yg)("p",null,"\u54cd\u5e94"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "store": {\n      "nodes": [\n        {\n          "storeId": 1,\n          "address": {\n            "address": "47 MySakila Drive",\n            "address2": null\n          },\n          "staff": {\n            "firstName": "Mike",\n            "lastName": "Hillyer"\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"\u83b7\u53d6\u975e\u6d3b\u8dc3\u5ba2\u6237\u5e26\u5206\u9875"},"\u83b7\u53d6\u975e\u6d3b\u8dc3\u5ba2\u6237\uff0c\u5e26\u5206\u9875"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"{\n  customer(\n    filters: { active: { eq: 0 } }\n    pagination: { pages: { page: 2, limit: 3 } }\n  ) {\n    nodes {\n      customerId\n      lastName\n      email\n    }\n    pages\n    current\n  }\n}\n")),(0,l.yg)("p",null,"\u54cd\u5e94"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "nodes": [\n        {\n          "customerId": 315,\n          "lastName": "GOODEN",\n          "email": "KENNETH.GOODEN@sakilacustomer.org"\n        },\n        {\n          "customerId": 368,\n          "lastName": "ARCE",\n          "email": "HARRY.ARCE@sakilacustomer.org"\n        },\n        {\n          "customerId": 406,\n          "lastName": "RUNYON",\n          "email": "NATHAN.RUNYON@sakilacustomer.org"\n        }\n      ],\n      "pages": 5,\n      "current": 2\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"\u4e0a\u8ff0\u67e5\u8be2\u4f7f\u7528\u6e38\u6807\u5206\u9875"},"\u4e0a\u8ff0\u67e5\u8be2\u4f7f\u7528\u6e38\u6807\u5206\u9875"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},'{\n  customer(\n    filters: { active: { eq: 0 } }\n    pagination: { cursor: { limit: 3, cursor: "Int[3]:271" } }\n  ) {\n    nodes {\n      customerId\n      lastName\n      email\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      endCursor\n    }\n  }\n}\n')),(0,l.yg)("p",null,"\u54cd\u5e94"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "nodes": [\n        {\n          "customerId": 315,\n          "lastName": "GOODEN",\n          "email": "KENNETH.GOODEN@sakilacustomer.org"\n        },\n        {\n          "customerId": 368,\n          "lastName": "ARCE",\n          "email": "HARRY.ARCE@sakilacustomer.org"\n        },\n        {\n          "customerId": 406,\n          "lastName": "RUNYON",\n          "email": "NATHAN.RUNYON@sakilacustomer.org"\n        }\n      ],\n      "pageInfo": {\n        "hasPreviousPage": true,\n        "hasNextPage": true,\n        "endCursor": "Int[3]:406"\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);