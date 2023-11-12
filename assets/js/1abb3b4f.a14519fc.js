"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[7642],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2544:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=r(7462),a=(r(7294),r(3905));r(5730),r(4866),r(5162);const o={sidebar_position:6},i="si-osi-sino",l={unversionedId:"si-osi-sino",id:"si-osi-sino",title:"si-osi-sino",description:"se utiliza para tomar decisiones basadas en condiciones. Consiste en una condici\xf3n que se eval\xfaa como verdadera o falsa y un bloque de c\xf3digo que se ejecuta si la condici\xf3n es verdadera.",source:"@site/estruct/si-osi-sino.mdx",sourceDirName:".",slug:"/si-osi-sino",permalink:"/estruct/si-osi-sino",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"para",permalink:"/estruct/para"}},s={},u=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Ejemplo\ud83d\udcdd",id:"ejemplo-1",level:2},{value:"Ejemplo\ud83d\udcdd",id:"ejemplo-2",level:2}],c={toc:u},d="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"si-osi-sino"},"si-osi-sino"),(0,a.kt)("h1",{id:"si"},"si"),(0,a.kt)("p",null,"se utiliza para tomar decisiones basadas en condiciones. Consiste en una condici\xf3n que se eval\xfaa como verdadera o falsa y un bloque de c\xf3digo que se ejecuta si la condici\xf3n es verdadera."),(0,a.kt)("p",null,"Se eval\xfaa una expresi\xf3n o condici\xf3n en el if.\nSi la condici\xf3n es verdadera, el c\xf3digo dentro del bloque if se ejecuta.\nSi la condici\xf3n es falsa, el c\xf3digo dentro del bloque if se omite o no se ejecuta."),(0,a.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},'var edad = 18;\n\nsi (edad >= 18) {\n  imprimir("Eres mayor de edad.");\n} sino {\n  imprimir("Eres menor de edad.");\n}\n\n')),(0,a.kt)("p",null,"Salida:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},"// Eres mayor de edad.\n")),(0,a.kt)("h1",{id:"osi"},"osi"),(0,a.kt)("p",null,"Se utiliza para manejar m\xfaltiples condiciones de manera escalonada o secuencial despu\xe9s de un bloque if. Permite evaluar diferentes condiciones y ejecutar un bloque de c\xf3digo correspondiente al primer else if que sea verdadero. "),(0,a.kt)("p",null,"Se eval\xfaa la condici\xf3n del if.\nSi la condici\xf3n del if es verdadera, se ejecuta su bloque de c\xf3digo y el resto del else if se ignora.\nSi la condici\xf3n del if es falsa, se pasa a la siguiente condici\xf3n else if.\nSe eval\xfaa la primera condici\xf3n else if. Si es verdadera, se ejecuta su bloque de c\xf3digo y se omite el resto de los else if.\nEste proceso contin\xfaa hasta que se encuentre una condici\xf3n verdadera o hasta que se alcance el else final."),(0,a.kt)("h2",{id:"ejemplo-1"},"Ejemplo\ud83d\udcdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},'var puntaje = 85;\n\nsi (puntaje >= 90) {\n  imprimir("Aprobado con A");\n} osi (puntaje >= 80) {\n  imprimir("Aprobado con B");\n} osi (puntaje >= 70) {\n  imprimir("Aprobado con C");\n} sino {\n  imprimir("Reprobado");\n}\n')),(0,a.kt)("p",null,"Salida:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},"// Aprobado con B\n")),(0,a.kt)("h1",{id:"sino"},"sino"),(0,a.kt)("p",null,"se utiliza en combinaci\xf3n con la estructura if para manejar un caso por defecto o una alternativa cuando la condici\xf3n del if es falsa. "),(0,a.kt)("p",null,"Se eval\xfaa la condici\xf3n en el if.\nSi la condici\xf3n del if es verdadera, se ejecuta el bloque de c\xf3digo dentro del if.\nSi la condici\xf3n del if es falsa, se ejecuta el bloque de c\xf3digo dentro del else."),(0,a.kt)("h2",{id:"ejemplo-2"},"Ejemplo\ud83d\udcdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},'var edad = 16;\n\nsi (edad >= 18) {\n  imprimir("Eres mayor de edad.");\n} sino {\n  imprimir("Eres menor de edad.");\n}\n\n')),(0,a.kt)("p",null,"Salida:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},"// Eres menor de edad.\n")))}p.isMDXComponent=!0},5162:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:r,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},n)}},4866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(7462),a=r(7294),o=r(6010),i=r(2466),l=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}function p(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??d(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[s,u]=f({queryString:r,groupId:t}),[d,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,c.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),v=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var v=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const n=e.currentTarget,r=c.indexOf(n),t=u[r].value;t!==l&&(d(n),s(t))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},n)},u.map((e=>{let{value:n,label:r,attributes:i}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===n})}),r??n)})))}function h(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function w(e){const n=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(g,(0,t.Z)({},e,n)),a.createElement(h,(0,t.Z)({},e,n)))}function k(e){const n=(0,v.Z)();return a.createElement(w,(0,t.Z)({key:String(n)},e))}},5730:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(7294),a=r(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:n,minHeight:r="auto",style:i,bodyStyle:l,title:s}=e;return t.createElement("div",{className:o.browserWindow,style:{...i,minHeight:r}},t.createElement("div",{className:(0,a.Z)(o.browserWindowHeader,"text--truncate")},s),t.createElement("div",{className:o.browserWindowBody,style:l},n))}}}]);