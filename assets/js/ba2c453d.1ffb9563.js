"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[4705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return a?r.createElement(f,l(l({ref:t},i),{},{components:a})):r.createElement(f,l({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:n,l[1]=u;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),u=a(6550),s=a(1980),c=a(7392),i=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var h=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=i.indexOf(t),r=c[a].value;r!==u&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":u===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},5730:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:t,minHeight:a="auto",style:l,bodyStyle:u,title:s}=e;return r.createElement("div",{className:o.browserWindow,style:{...l,minHeight:a}},r.createElement("div",{className:(0,n.Z)(o.browserWindowHeader,"text--truncate")},s),r.createElement("div",{className:o.browserWindowBody,style:u},t))}},5963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));a(5730),a(4866),a(5162);const o={sidebar_position:13},l="actualizarA\xf1o",u={unversionedId:"fecha/actualizarA\xf1o",id:"fecha/actualizarA\xf1o",title:"actualizarA\xf1o",description:"Se utiliza para establecer el a\xf1o en un objeto Date. Puedes usar este m\xe9todo para cambiar el a\xf1o de una fecha existente o para crear una nueva fecha con el a\xf1o deseado.",source:"@site/docs/fecha/actualizarA\xf1o.mdx",sourceDirName:"fecha",slug:"/fecha/actualizarA\xf1o",permalink:"/methods/fecha/actualizarA\xf1o",draft:!1,editUrl:"https://github.com/self-david/dummy-code-documentation/tree/main/docs/fecha/actualizarA\xf1o.mdx",tags:[],version:"current",lastUpdatedBy:"self-david",lastUpdatedAt:1694897580,formattedLastUpdatedAt:"Sep 16, 2023",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"actualizarFecha",permalink:"/methods/fecha/actualizarFecha"},next:{title:"actualizarHora",permalink:"/methods/fecha/actualizarHora"}},s={},c=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],i={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"actualizara\xf1o"},"actualizarA\xf1o"),(0,n.kt)("p",null,"Se utiliza para establecer el a\xf1o en un objeto Date. Puedes usar este m\xe9todo para cambiar el a\xf1o de una fecha existente o para crear una nueva fecha con el a\xf1o deseado."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)("p",null,"El m\xe9todo actualizarA\xf1o toma uno, dos o tres argumentos. Si se pasa solo un argumento, este se interpreta como el a\xf1o y cambia el a\xf1o de la fecha. Si se pasan dos argumentos, el primero se interpreta como el a\xf1o y el segundo como el mes (de 0 a 11). Si se pasan tres argumentos, el primero es el a\xf1o, el segundo es el mes y el tercero es el d\xeda del mes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'var fecha = crear Fecha("2023-07-15");\n\n// Establecer el a\xf1o en 2025\nfecha.actualizarA\xf1o(2025);\n\nimprimir("Fecha despu\xe9s de establecer el a\xf1o:", fecha);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// Fecha despu\xe9s de establecer el a\xf1o: Fri Jul 15 2025 00:00:00 GMT-0700 (Pacific Daylight Time)\n")),(0,n.kt)("p",null,"Es \xfatil cuando necesitas ajustar el a\xf1o en un objeto Fecha, como cuando trabajas con fechas futuras o pasadas."))}m.isMDXComponent=!0}}]);