"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[8009],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),s=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(u.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:a},c),{},{components:t})):r.createElement(f,l({ref:a},c))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(7294),n=t(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>k});var r=t(7462),n=t(7294),o=t(6010),l=t(2466),i=t(6550),u=t(1980),s=t(7392),c=t(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[u,s]=f({queryString:t,groupId:r}),[d,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,c.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),y=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var y=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:a,block:t,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),r=s[t].value;r!==i&&(d(a),u(r))},m=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},s.map((e=>{let{value:a,label:t,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function w(e){const a=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(g,(0,r.Z)({},e,a)),n.createElement(h,(0,r.Z)({},e,a)))}function k(e){const a=(0,y.Z)();return n.createElement(w,(0,r.Z)({key:String(a)},e))}},5730:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(7294),n=t(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:a,minHeight:t="auto",style:l,bodyStyle:i,title:u}=e;return r.createElement("div",{className:o.browserWindow,style:{...l,minHeight:t}},r.createElement("div",{className:(0,n.Z)(o.browserWindowHeader,"text--truncate")},u),r.createElement("div",{className:o.browserWindowBody,style:i},a))}},7692:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=t(7462),n=(t(7294),t(3905)),o=t(5730),l=t(4866),i=t(5162);const u={sidebar_position:14},s="Cortar",c={unversionedId:"Cadenas/cortar",id:"Cadenas/cortar",title:"Cortar",description:"Se utiliza para extraer una parte espec\xedfica de una cadena de texto sin modificar la cadena original. Imagina que tienes una frase y quieres obtener una parte espec\xedfica de esa frase.",source:"@site/docs/Cadenas/cortar.mdx",sourceDirName:"Cadenas",slug:"/Cadenas/cortar",permalink:"/methods/Cadenas/cortar",draft:!1,editUrl:"https://github.com/self-david/dummy-code-documentation/tree/main/docs/Cadenas/cortar.mdx",tags:[],version:"current",lastUpdatedBy:"Noe",lastUpdatedAt:1694742589,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Buscar",permalink:"/methods/Cadenas/buscar"},next:{title:"Dividir",permalink:"/methods/Cadenas/dividir"}},d={},p=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Sintaxis\ud83d\udd24",id:"sintaxis",level:2}],m={toc:p},f="wrapper";function b(e){let{components:a,...t}=e;return(0,n.kt)(f,(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cortar"},"Cortar"),(0,n.kt)("p",null,"Se utiliza para extraer una parte espec\xedfica de una cadena de texto sin modificar la cadena original. Imagina que tienes una frase y quieres obtener una parte espec\xedfica de esa frase. "),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)(o.Z,{title:"",mdxType:"BrowserWindow"},(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"var1",label:"Variante 1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'global frase = "Hola mundo";\nvar subcadena = frase.cortar(5);\nimprimir(subcadena);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// mundo\n")),(0,n.kt)("p",null,'En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola mundo", luego utilizamos el m\xe9todo cortar() en la cadena frase para extraer una subcadena a partir de la posici\xf3n 5.')),(0,n.kt)(i.Z,{value:"var2",label:"Variante 2",mdxType:"TabItem"},(0,n.kt)("p",null,"Tambi\xe9n puedes utilizar el m\xe9todo cortar() con dos argumentos para especificar el inicio y fin de la subcadena que deseas extraer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'global frase = "Hola mundo";\nvar subcadena = frase.cortar(5, 9);\nimprimir(subcadena);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// mund\n")),(0,n.kt)("p",null,"En este otro ejemplo, utilizamos cortar(5, 9) para extraer la subcadena desde la posici\xf3n 5 hasta la posici\xf3n 9 (sin incluir la posici\xf3n 9).")))),(0,n.kt)("h2",{id:"sintaxis"},"Sintaxis\ud83d\udd24"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"cortar(indiceInicio)\ncortar(indiceInicio, indiceFin)\n\n//indiceInicio indica a partir de que posicion se va a extraer la cadena\n//indiceFin indica hasta que posicion se va a extraer la cadena\n")))}b.isMDXComponent=!0}}]);