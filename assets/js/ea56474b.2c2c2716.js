"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[5553],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(u.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(b,i(i({ref:a},c),{},{components:t})):n.createElement(b,i({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),r=t(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(7462),r=t(7294),o=t(6010),i=t(2466),l=t(6550),u=t(1980),s=t(7392),c=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[u,s]=b({queryString:t,groupId:n}),[d,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),v=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var v=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:t,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),n=s[t].value;n!==l&&(d(a),u(n))},m=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},s.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(h,(0,n.Z)({},e,a)),r.createElement(g,(0,n.Z)({},e,a)))}function k(e){const a=(0,v.Z)();return r.createElement(w,(0,n.Z)({key:String(a)},e))}},5730:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),r=t(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:a,minHeight:t="auto",style:i,bodyStyle:l,title:u}=e;return n.createElement("div",{className:o.browserWindow,style:{...i,minHeight:t}},n.createElement("div",{className:(0,r.Z)(o.browserWindowHeader,"text--truncate")},u),n.createElement("div",{className:o.browserWindowBody,style:l},a))}},6591:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var n=t(7462),r=(t(7294),t(3905)),o=t(5730),i=t(4866),l=t(5162);const u={sidebar_position:15},s="IniciaCon",c={unversionedId:"Cadenas/iniciaCon",id:"Cadenas/iniciaCon",title:"IniciaCon",description:"Se utiliza para verificar si una cadena de texto comienza con un valor espec\xedfico. Imagina que tienes una palabra y quieres saber si empieza con una letra o un conjunto de letras en particular.",source:"@site/docs/Cadenas/iniciaCon.mdx",sourceDirName:"Cadenas",slug:"/Cadenas/iniciaCon",permalink:"/methods/Cadenas/iniciaCon",draft:!1,editUrl:"https://github.com/self-david/dummy-code-documentation/tree/main/docs/Cadenas/iniciaCon.mdx",tags:[],version:"current",lastUpdatedBy:"Noe",lastUpdatedAt:1694742589,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Dividir",permalink:"/methods/Cadenas/dividir"},next:{title:"Subcadena",permalink:"/methods/Cadenas/subcadena"}},d={},p=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Sintaxis\ud83d\udd24",id:"sintaxis",level:2}],m={toc:p},b="wrapper";function f(e){let{components:a,...t}=e;return(0,r.kt)(b,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iniciacon"},"IniciaCon"),(0,r.kt)("p",null,"Se utiliza para verificar si una cadena de texto comienza con un valor espec\xedfico. Imagina que tienes una palabra y quieres saber si empieza con una letra o un conjunto de letras en particular."),(0,r.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,r.kt)(o.Z,{title:"",mdxType:"BrowserWindow"},(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"var1",label:"Variante 1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},'var palabra = "Hola mundo";\nvar resultado = palabra.iniciaCon("Hola");\nimprimir(resultado);\n')),(0,r.kt)("p",null,"Salida:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},"// verdadero\n")),(0,r.kt)("p",null,'En este ejemplo, hemos creado una variable llamada palabra que contiene la cadena "Hola mundo". Luego utilizamos el m\xe9todo iniciaCon() en la cadena palabra para verificar si comienza con la palabra "Hola". El resultado es un valor logico, que indica si la cadena comienza con el valor especificado.')),(0,r.kt)(l.Z,{value:"var2",label:"Variante 2",mdxType:"TabItem"},(0,r.kt)("p",null,"Tambi\xe9n puedes utilizar el m\xe9todo iniciaCon() con un \xedndice opcional para especificar la posici\xf3n a partir de la cual se debe realizar la comprobaci\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},'var palabra = "Hola mundo";\nvar resultado = palabra.iniciaCon("mundo", 0);\nimprimir(resultado);\n')),(0,r.kt)("p",null,"Salida:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},"// falso\n")),(0,r.kt)("p",null,'En este ejemplo, utilizamos iniciaCon("mundo", 5) para comprobar si la cadena palabra comienza con "mundo" a partir de la posici\xf3n 5.')))),(0,r.kt)("h2",{id:"sintaxis"},"Sintaxis\ud83d\udd24"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},"iniciaCon(palabraBuscada)\nstartsWith(palabraBuscada, posicion)\n")))}f.isMDXComponent=!0}}]);