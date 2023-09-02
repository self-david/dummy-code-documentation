"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[987],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>b});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),s=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=s(e.components);return r.createElement(u.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),p=n,b=c["".concat(u,".").concat(p)]||c[p]||m[p]||o;return t?r.createElement(b,i(i({ref:a},d),{},{components:t})):r.createElement(b,i({ref:a},d))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(7294),n=t(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>w});var r=t(7462),n=t(7294),o=t(6010),i=t(2466),l=t(6550),u=t(1980),s=t(7392),d=t(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function m(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[u,s]=b({queryString:t,groupId:r}),[c,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,d.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),v=(()=>{const e=u??c;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var v=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:a,block:t,selectedValue:l,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const a=e.currentTarget,t=d.indexOf(a),r=s[t].value;r!==l&&(c(a),u(r))},p=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},s.map((e=>{let{value:a,label:t,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>d.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function k(e){const a=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(g,(0,r.Z)({},e,a)),n.createElement(h,(0,r.Z)({},e,a)))}function w(e){const a=(0,v.Z)();return n.createElement(k,(0,r.Z)({key:String(a)},e))}},5730:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(7294),n=t(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:a,minHeight:t="auto",style:i,bodyStyle:l,title:u}=e;return r.createElement("div",{className:o.browserWindow,style:{...i,minHeight:t}},r.createElement("div",{className:(0,n.Z)(o.browserWindowHeader,"text--truncate")},u),r.createElement("div",{className:o.browserWindowBody,style:l},a))}},9584:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=t(7462),n=(t(7294),t(3905)),o=t(5730),i=t(4866),l=t(5162);const u={sidebar_position:14},s="Dividir",d={unversionedId:"Cadenas/dividir",id:"Cadenas/dividir",title:"Dividir",description:"Se utiliza para dividir una cadena de texto en un arreglo de subcadenas, utilizando un separador especificado. Imagina que tienes una frase y quieres dividirla en palabras individuales.",source:"@site/docs/Cadenas/dividir.mdx",sourceDirName:"Cadenas",slug:"/Cadenas/dividir",permalink:"/methods/Cadenas/dividir",draft:!1,editUrl:"https://github.com/self-david/dummy-code-documentation/tree/main/docs/Cadenas/dividir.mdx",tags:[],version:"current",lastUpdatedBy:"Noe",lastUpdatedAt:1691640771,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Cortar",permalink:"/methods/Cadenas/cortar"},next:{title:"IniciaCon",permalink:"/methods/Cadenas/iniciaCon"}},c={},m=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Sintaxis\ud83d\udd24",id:"sintaxis",level:2}],p={toc:m},b="wrapper";function f(e){let{components:a,...t}=e;return(0,n.kt)(b,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dividir"},"Dividir"),(0,n.kt)("p",null,"Se utiliza para dividir una cadena de texto en un arreglo de subcadenas, utilizando un separador especificado. Imagina que tienes una frase y quieres dividirla en palabras individuales."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)(o.Z,{title:"",mdxType:"BrowserWindow"},(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"var1",label:"Variante 1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'global frase = "Hola mundo";\nvar palabras = frase.dividir(" ");\nimprimir(palabras);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'//["Hola", "mundo"]\n')),(0,n.kt)("p",null,'En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola mundo", luego utilizamos el m\xe9todo dividir() en la cadena frase y le pasamos un espacio en blanco como separador. ')),(0,n.kt)(l.Z,{value:"var2",label:"Variante 2",mdxType:"TabItem"},(0,n.kt)("p",null,"Tambi\xe9n puedes utilizar el m\xe9todo dividir() con otros separadores, como comas, puntos o guiones:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'global texto = "Manzana,Naranja,Lim\xf3n";\nvar frutas = texto.dividir(",");\nimprimir(frutas);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'//["Manzana", "Naranja", "Lim\xf3n"]\n')),(0,n.kt)("p",null,'En este otro ejemplo, utilizamos dividir(",") para dividir la cadena texto en un arreglo de frutas, utilizando la coma como separador.')),(0,n.kt)(l.Z,{value:"var3",label:"Variante 3",mdxType:"TabItem"},(0,n.kt)("p",null,"Otro metodo que se puede utilizar es a\xf1adiendo un limite al dividir:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'global frase = "Hola,mundo,bienvenido,a,todos";\nvar palabras = frase.dividir(",", 3);\nimprimir(palabras);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'//["Hola", "mundo", "bienvenido"]\n')),(0,n.kt)("p",null,'En este ejemplo final, hemos creado una variable llamada frase que contiene la cadena "Hola,mundo,bienvenido,a,todos". Utilizamos el m\xe9todo dividir() en la cadena frase y le pasamos una coma como separador y el n\xfamero 3 como l\xedmite.')))),(0,n.kt)("p",null,"En el caso de la variante 3, el par\xe1metro limite especifica el n\xfamero m\xe1ximo de elementos que se deben incluir en el arreglo resultante. En este ejemplo, se incluyen las tres primeras palabras y las siguientes palabras se omiten."),(0,n.kt)("h2",{id:"sintaxis"},"Sintaxis\ud83d\udd24"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"dividir(separador)\ndividir(separador, limite)\n")))}f.isMDXComponent=!0}}]);