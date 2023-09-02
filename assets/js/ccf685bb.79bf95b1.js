"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[3566],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(t),p=r,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return t?n.createElement(b,o(o({ref:a},c),{},{components:t})):n.createElement(b,o({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var u={};for(var s in a)hasOwnProperty.call(a,s)&&(u[s]=a[s]);u.originalType=e,u[d]="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(7462),r=t(7294),l=t(6010),o=t(2466),u=t(6550),s=t(1980),i=t(7392),c=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const n=(0,u.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=m(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[s,i]=b({queryString:t,groupId:n}),[d,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),y=(()=>{const e=s??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var y=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:t,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),n=i[t].value;n!==u&&(d(a),s(n))},p=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},i.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===a?0:-1,"aria-selected":u===a,key:a,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":u===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(h,(0,n.Z)({},e,a)),r.createElement(g,(0,n.Z)({},e,a)))}function k(e){const a=(0,y.Z)();return r.createElement(w,(0,n.Z)({key:String(a)},e))}},5730:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(6010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:a,minHeight:t="auto",style:o,bodyStyle:u,title:s}=e;return n.createElement("div",{className:l.browserWindow,style:{...o,minHeight:t}},n.createElement("div",{className:(0,r.Z)(l.browserWindowHeader,"text--truncate")},s),n.createElement("div",{className:l.browserWindowBody,style:u},a))}},6474:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));t(5730),t(4866),t(5162);const l={sidebar_position:17},o="aMinusculas",u={unversionedId:"Cadenas/aMinusculas",id:"Cadenas/aMinusculas",title:"aMinusculas",description:"Se utiliza para convertir una cadena de texto a min\xfasculas. Imagina que tienes una palabra o una frase en may\xfasculas y quieres convertirla a min\xfasculas.",source:"@site/docs/Cadenas/aMinusculas.mdx",sourceDirName:"Cadenas",slug:"/Cadenas/aMinusculas",permalink:"/methods/Cadenas/aMinusculas",draft:!1,editUrl:"https://github.com/self-david/dummy-code-documentation/tree/main/docs/Cadenas/aMinusculas.mdx",tags:[],version:"current",lastUpdatedBy:"Noe",lastUpdatedAt:1691640771,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Subcadena",permalink:"/methods/Cadenas/subcadena"},next:{title:"aMayusculas",permalink:"/methods/Cadenas/aMayusculas"}},s={},i=[{value:"Ejemplos\ud83d\udcdd",id:"ejemplos",level:2},{value:"Sintaxis\ud83d\udd24",id:"sintaxis",level:2}],c={toc:i},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aminusculas"},"aMinusculas"),(0,r.kt)("p",null,"Se utiliza para convertir una cadena de texto a min\xfasculas. Imagina que tienes una palabra o una frase en may\xfasculas y quieres convertirla a min\xfasculas."),(0,r.kt)("h2",{id:"ejemplos"},"Ejemplos\ud83d\udcdd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},'global palabra = "Hola Mundo";\nvar palabraMinuscula = palabra.aMinusculas();\nimprimir(palabraMinuscula);\n')),(0,r.kt)("p",null,"Salida:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},"//hola mundo\n")),(0,r.kt)("p",null,'En este ejemplo, hemos creado una variable llamada palabra que contiene la cadena "Hola Mundo". Luego utilizamos el m\xe9todo aMinusculas() en la cadena palabra para convertirla a min\xfasculas. El resultado es la cadena "hola mundo", que se imprime en la consola.'),(0,r.kt)("p",null,"El m\xe9todo aMinusculas() no afecta a los caracteres que ya est\xe1n en min\xfasculas. Solo convierte los caracteres que est\xe1n en may\xfasculas a su equivalente en min\xfasculas."),(0,r.kt)("h2",{id:"sintaxis"},"Sintaxis\ud83d\udd24"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},"aMinusculas()\n")))}m.isMDXComponent=!0}}]);