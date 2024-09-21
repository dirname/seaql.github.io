"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[18401],{50242:(e,t,a)=>{a.r(t),a.d(t,{default:()=>pe});var n=a(96540),l=a(69024),r=a(89532);const o=n.createContext(null);function s(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(o.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(o);if(null===e)throw new r.dV("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(20053),m=a(24581),u=a(58168),b=a(21312),p=a(75489);function E(e){const{permalink:t,title:a,subLabel:l,isNext:r}=e;return n.createElement(p.A,{className:(0,d.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function h(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(E,(0,u.A)({},t,{subLabel:n.createElement(b.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(E,(0,u.A)({},a,{subLabel:n.createElement(b.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=c();return n.createElement(h,{previous:e.previous,next:e.next})}var g=a(44586),f=a(44070),A=a(17559),_=a(55597),N=a(32252);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){const t=C[e.versionMetadata.banner];return n.createElement(t,e)}function T(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(b.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(p.A,{to:a,onClick:l},n.createElement(b.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function k(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,g.A)(),{pluginId:r}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,_.g1)(r),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,f.HW)(r),i=s??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.A)(t,A.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(L,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(T,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function U(e){let{className:t}=e;const a=(0,N.r)();return a.banner?n.createElement(k,{className:t,versionMetadata:a}):null}function w(e){let{className:t}=e;const a=(0,N.r)();return a.badge?n.createElement("span",{className:(0,d.A)(t,A.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(b.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(b.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){let{lastUpdatedBy:t}=e;return n.createElement(b.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:A.G.common.lastUpdated},n.createElement(b.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const B={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...a}=e;return n.createElement("svg",(0,u.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.A)(B.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function V(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:A.G.common.editThisPage},n.createElement(I,null),n.createElement(b.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const H={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function P(e){let{permalink:t,label:a,count:l}=e;return n.createElement(p.A,{href:t,className:(0,d.A)(H.tag,l?H.tagWithCount:H.tagRegular)},a,l&&n.createElement("span",null,l))}const G={tags:"tags_jXut",tag:"tag_QGVx"};function D(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(b.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.A)(G.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:G.tag},n.createElement(P,{label:t,permalink:a}))}))))}const S={lastUpdated:"lastUpdated_vwxv"};function F(e){return n.createElement("div",{className:(0,d.A)(A.G.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(D,e)))}function R(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.A)(A.G.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(V,{editUrl:t})),n.createElement("div",{className:(0,d.A)("col",S.lastUpdated)},(a||l)&&n.createElement(M,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function O(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||a||r);return s||i?n.createElement("footer",{className:(0,d.A)(A.G.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(F,{tags:o}),i&&n.createElement(R,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var z=a(41422),j=a(65195);const W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function q(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.A)({type:"button"},a,{className:(0,d.A)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,a.className)}),n.createElement(b.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Q(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,z.u)({initialState:!0});return n.createElement("div",{className:(0,d.A)(Z.tocCollapsible,!o&&Z.tocCollapsibleExpanded,a)},n.createElement(q,{collapsed:o,onClick:s}),n.createElement(z.N,{lazy:!0,className:Z.tocCollapsibleContent,collapsed:o},n.createElement(j.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const X={tocMobile:"tocMobile_ITEo"};function Y(){const{toc:e,frontMatter:t}=c();return n.createElement(Q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(A.G.docs.docTocMobile,X.tocMobile)})}var $=a(67763);function J(){const{toc:e,frontMatter:t}=c();return n.createElement($.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:A.G.docs.docTocDesktop})}var K=a(51107),ee=a(30062);function te(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.A)(A.G.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(K.A,{as:"h1"},a)),n.createElement(ee.A,null,t))}var ae=a(84142),ne=a(99169),le=a(86025);function re(e){return n.createElement("svg",(0,u.A)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const oe={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function se(){const e=(0,le.A)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(p.A,{"aria-label":(0,b.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(re,{className:oe.breadcrumbHomeIcon})))}const ce={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ie(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(p.A,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function de(e){let{children:t,active:a,index:l,addMicrodata:r}=e;return n.createElement("li",(0,u.A)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function me(){const e=(0,ae.OF)(),t=(0,ne.Dt)();return e?n.createElement("nav",{className:(0,d.A)(A.G.docs.docBreadcrumbs,ce.breadcrumbsContainer),"aria-label":(0,b.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(se,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(de,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(ie,{href:t.href,isLast:l},t.label))})))):null}const ue={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function be(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.l)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(Y,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(J,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.A)("col",!a.hidden&&ue.docItemCol)},n.createElement(U,null),n.createElement("div",{className:ue.docItemContainer},n.createElement("article",null,n.createElement(me,null),n.createElement(w,null),a.mobile,n.createElement(te,null,t),n.createElement(O,null)),n.createElement(v,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function pe(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.e3,{className:t},n.createElement(i,null),n.createElement(be,null,n.createElement(a,null))))}},32252:(e,t,a)=>{a.d(t,{n:()=>o,r:()=>s});var n=a(96540),l=a(89532);const r=n.createContext(null);function o(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.dV("DocsVersionProvider");return e}}}]);