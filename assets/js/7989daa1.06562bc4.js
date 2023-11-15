"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[5306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),u=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var g=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(d(t),u(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(h,(0,r.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},5730:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:t,minHeight:a="auto",style:o,bodyStyle:i,title:u}=e;return r.createElement("div",{className:l.browserWindow,style:{...o,minHeight:a}},r.createElement("div",{className:(0,n.Z)(l.browserWindowHeader,"text--truncate")},u),r.createElement("div",{className:l.browserWindowBody,style:i},t))}},7743:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));a(5730),a(4866),a(5162);const l={sidebar_position:10},o="RellenarInicio",i={unversionedId:"Cadenas/rellenarAlComienzo",id:"Cadenas/rellenarAlComienzo",title:"RellenarInicio",description:"Este permite agregar caracteres al inicio de una cadena de texto hasta que alcance una longitud determinada. Debes especificar la longitud deseada y el car\xe1cter que deseas agregar.",source:"@site/docs/Cadenas/rellenarAlComienzo.mdx",sourceDirName:"Cadenas",slug:"/Cadenas/rellenarAlComienzo",permalink:"/methods/Cadenas/rellenarAlComienzo",draft:!1,editUrl:"https://github.com/self-david/dummy-code-documentation/tree/main/docs/Cadenas/rellenarAlComienzo.mdx",tags:[],version:"current",lastUpdatedBy:"Noe",lastUpdatedAt:1694742589,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"RellenarFin",permalink:"/methods/Cadenas/rellenarAlFinal"},next:{title:"Repetir",permalink:"/methods/Cadenas/repetir"}},u={},s=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Sintaxis\ud83d\udd24",id:"sintaxis",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rellenarinicio"},"RellenarInicio"),(0,n.kt)("p",null,"Este permite agregar caracteres al inicio de una ",(0,n.kt)("inlineCode",{parentName:"p"},"cadena")," de texto hasta que alcance una longitud determinada. Debes especificar la longitud deseada y el car\xe1cter que deseas agregar."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'const numero = "5";\nconst rellenarPalabra = numero.rellenarInicio(4, "0");\n\nimprimir(numeroPad);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// 0005\n")),(0,n.kt)("p",null,"En este caso, ",(0,n.kt)("inlineCode",{parentName:"p"},'rellenarInicio(4, "0")'),' toma el n\xfamero "5" y lo extiende hasta que tenga una longitud de 4 d\xedgitos agregando el car\xe1cter "0" al inicio.'),(0,n.kt)("p",null,"Si la cadena original ya tiene una longitud igual o mayor que la longitud especificada, el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"rellenarInicio()")," no realizar\xe1 ninguna modificaci\xf3n y devolver\xe1 la cadena original sin cambios."),(0,n.kt)("p",null,"El m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"rellenarInicio()")," es \xfatil cuando necesitas asegurarte de que una cadena de texto tenga una longitud espec\xedfica y deseas agregar caracteres adicionales al inicio."),(0,n.kt)("h2",{id:"sintaxis"},"Sintaxis\ud83d\udd24"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"rellenarInicio(logitudObjetivo)\nrellenarInicio(logitudObjetivo, RellenarPalabra)\n\n//RellenarPalabra es igual al caracter o cadena con la que quieres rellenar\n//logitudObjetivo es el tama\xf1o total deseado de la cadena final\n")))}m.isMDXComponent=!0}}]);