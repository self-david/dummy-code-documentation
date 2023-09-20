"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[7918],{1310:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),l=n(7294),r=n(6010),o=n(5281),c=n(3438),s=n(8596),i=n(9960),m=n(5999),d=n(4996);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}const g={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function h(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(i.Z,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function p(e){let{children:t,active:n,index:o,addMicrodata:c}=e;return l.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(o+1)}))}function E(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,g.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(p,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:a},t.label))})))):null}},4364:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010),r=n(5999),o=n(5281),c=n(4477);function s(e){let{className:t}=e;const n=(0,c.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),l=n(6010),r=n(2263),o=n(9960),c=n(5999),s=n(143),i=n(5281),m=n(373),d=n(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:l},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,r.Z)(),{pluginId:c}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:g}=(0,s.Jo)(c),h=u??(p=g).docs.find((e=>e.id===p.mainDocId));var p;return a.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:g.label,to:h.path,onClick:()=>d(g.name)})))}function h(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(g,{className:t,versionMetadata:n}):null}},2244:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010),r=n(9960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:c}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},3743:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7462),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=i(c,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:u,...b}=e;const g=(0,r.L)(),h=m??g.tableOfContents.minHeadingLevel,p=u??g.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return d((0,l.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:p}}),[s,i,h,p])),l.createElement(v,(0,a.Z)({toc:E,className:n,linkClassName:s},b))}},9407:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(3743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(c.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:s,linkActiveClassName:i})))}},3008:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(6010),r=n(9960);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){let{permalink:t,label:n,count:c}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(o.tag,c?o.tagWithCount:o.tagRegular)},n,c&&a.createElement("span",null,c))}},1526:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010),r=n(5999),o=n(3008);const c={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(c.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:c.tag},a.createElement(o.Z,{label:t,permalink:n}))}))))}},2910:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(7294),l=n(1944),r=n(902);const o=a.createContext(null);function c(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(6010),d=n(7524),u=n(64);function v(){const{metadata:e}=s();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var b=n(3120),g=n(4364),h=n(5281),p=n(1526);const E={lastUpdated:"lastUpdated_VsjB"},f=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];function L(){return a.createElement("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:"iconEdit_node_modules-@docusaurus-theme-classic-lib-theme-Icon-Edit-styles-module","aria-hidden":"true"},a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}const _=e=>{const t=new Date(1e3*e),n=t.getDate(),a=t.getMonth(),l=t.getFullYear();return`${n} de ${f[a]} de ${l}`};function C(e){return a.createElement("div",{className:(0,m.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(p.Z,e)))}function N(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("div",{className:(0,m.Z)(h.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:"theme-edit-this-page"},a.createElement(L,null),"Editar esta pagina")),a.createElement("div",{className:(0,m.Z)("col",E.lastUpdated)},(n||l)&&a.createElement("span",{className:"theme-last-updated"},"Ultima actualizaci\xf3n el ",a.createElement("b",null,a.createElement("time",{dateTime:"2018-10-14T07:27:35.000Z"},_(n)))," por ",a.createElement("b",null,l))))}function Z(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,c=o.length>0,i=!!(t||n||r);return c||i?a.createElement("footer",{className:(0,m.Z)(h.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(C,{tags:o}),i&&a.createElement(N,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var k=n(6043),x=n(3743),T=n(7462),H=n(5999);const M={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function I(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,T.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",M.tocCollapsibleButton,!t&&M.tocCollapsibleButtonExpanded,n.className)}),a.createElement(H.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const y={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function w(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:c}=(0,k.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(y.tocCollapsible,!o&&y.tocCollapsibleExpanded,n)},a.createElement(I,{collapsed:o,onClick:c}),a.createElement(k.z,{lazy:!0,className:y.tocCollapsibleContent,collapsed:o},a.createElement(x.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const A={tocMobile:"tocMobile_bxCs"};function B(){const{toc:e,frontMatter:t}=s();return a.createElement(w,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(h.k.docs.docTocMobile,A.tocMobile)})}var U=n(9407);function O(){const{toc:e,frontMatter:t}=s();return a.createElement(U.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var V=n(2503),R=n(3946);function S(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(h.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(V.Z,{as:"h1"},n)),a.createElement(R.Z,null,t))}var z=n(1310);const F={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function P(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,d.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(B,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(O,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",!n.hidden&&F.docItemCol)},a.createElement(b.Z,null),a.createElement("div",{className:F.docItemContainer},a.createElement("article",null,a.createElement(z.Z,null),a.createElement(g.Z,null),n.mobile,a.createElement(S,null,t),a.createElement(Z,null)),a.createElement(v,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function j(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(P,null,a.createElement(n,null))))}},64:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),l=n(7294),r=n(5999),o=n(2244);function c(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o.Z,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Anterior")})),n&&l.createElement(o.Z,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Siguiente"),isNext:!0})))}}}]);