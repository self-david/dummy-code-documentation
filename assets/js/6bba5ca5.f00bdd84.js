"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[9292],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,b=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return t?n.createElement(b,l(l({ref:r},s),{},{components:t})):n.createElement(b,l({ref:r},s))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6234:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));t(5730),t(4866),t(5162);const o={sidebar_position:7},l="terminar",i={unversionedId:"terminar",id:"terminar",title:"terminar",description:"se utiliza en bucles para salir inmediatamente del bucle y continuar con la ejecuci\xf3n del c\xf3digo despu\xe9s del bucle.",source:"@site/reservedWords/terminar.mdx",sourceDirName:".",slug:"/terminar",permalink:"/reservedWords/terminar",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"continuar",permalink:"/reservedWords/continuar"},next:{title:"predeterminado",permalink:"/reservedWords/predeterminado"}},u={},c=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],s={toc:c},d="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminar"},"terminar"),(0,a.kt)("p",null,"se utiliza en bucles para salir inmediatamente del bucle y continuar con la ejecuci\xf3n del c\xf3digo despu\xe9s del bucle."),(0,a.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},'funcion ejemploTerminarEnHacerMientras() {\n  imprimir("Ejemplo de terminar en un bucle hacer mientras en dummycode:");\n\n  var i = 0;\n  hacer {\n    si (i === 4) {\n      imprimir("Se encontr\xf3 el valor 4. Terminando el bucle.");\n      terminar;\n    }\n    imprimir("Valor de i: " + i);\n    i++;\n  } mientras (i < 5);\n\n  imprimir("El bucle hacer mientras ha terminado.");\n}\n\nejemploTerminarEnHacerMientras();\n')),(0,a.kt)("p",null,"Salida:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},"// Ejemplo de terminar en un bucle 'hacer mientras' en dummycode:\n// Valor de i: 0\n// Valor de i: 1\n// Valor de i: 2\n// Valor de i: 3\n// Se encontr\xf3 el valor 4. Terminando el bucle.\n// El bucle hacer mientras ha terminado.\n")))}m.isMDXComponent=!0},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(7294),a=t(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:r,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:t},r)}},4866:(e,r,t)=>{t.d(r,{Z:()=>E});var n=t(7462),a=t(7294),o=t(6010),l=t(2466),i=t(6550),u=t(1980),c=t(7392),s=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function m(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[u,c]=b({queryString:t,groupId:n}),[d,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,s.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),y=(()=>{const e=u??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var y=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:r,block:t,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const r=e.currentTarget,t=s.indexOf(r),n=c[t].value;n!==i&&(d(r),u(n))},p=e=>{let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1];break}}r?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},c.map((e=>{let{value:r,label:t,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:e=>s.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===r})}),t??r)})))}function g(e){let{lazy:r,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function w(e){const r=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(h,(0,n.Z)({},e,r)),a.createElement(g,(0,n.Z)({},e,r)))}function E(e){const r=(0,y.Z)();return a.createElement(w,(0,n.Z)({key:String(r)},e))}},5730:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(7294),a=t(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:r,minHeight:t="auto",style:l,bodyStyle:i,title:u}=e;return n.createElement("div",{className:o.browserWindow,style:{...l,minHeight:t}},n.createElement("div",{className:(0,a.Z)(o.browserWindowHeader,"text--truncate")},u),n.createElement("div",{className:o.browserWindowBody,style:i},r))}}}]);