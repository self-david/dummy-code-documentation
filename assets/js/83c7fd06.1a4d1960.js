"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[6113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:n,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(7294),n=r(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var o=r(7462),n=r(7294),a=r(6010),l=r(2466),u=r(6550),i=r(1980),s=r(7392),c=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:n}}=e;return{value:t,label:r,attributes:o,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const o=(0,u.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[i,s]=m({queryString:r,groupId:o}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),v=(()=>{const e=i??d;return b({value:e,tabValues:a})?e:null})();(0,n.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,a]),tabValues:a}}var v=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),o=s[r].value;o!==u&&(d(t),i(o))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},l,{className:(0,a.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function j(e){const t=f(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},n.createElement(h,(0,o.Z)({},e,t)),n.createElement(g,(0,o.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return n.createElement(j,(0,o.Z)({key:String(t)},e))}},5730:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(7294),n=r(6010);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:t,minHeight:r="auto",style:l,bodyStyle:u,title:i}=e;return o.createElement("div",{className:a.browserWindow,style:{...l,minHeight:r}},o.createElement("div",{className:(0,n.Z)(a.browserWindowHeader,"text--truncate")},i),o.createElement("div",{className:a.browserWindowBody,style:u},t))}},4520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));r(5730),r(4866),r(5162);const a={sidebar_position:2},l="crear",u={unversionedId:"Objeto/crear",id:"Objeto/crear",title:"crear",description:"Se utiliza para crear un nuevo objeto que tiene un prototipo espec\xedfico (objeto prototipo) y, opcionalmente, puede contener propiedades adicionales. Es una forma de crear un objeto que hereda propiedades y m\xe9todos de otro objeto.",source:"@site/docs/Objeto/crear.mdx",sourceDirName:"Objeto",slug:"/Objeto/crear",permalink:"/methods/Objeto/crear",draft:!1,editUrl:"https://github.com/self-david/dummy-code-documentation/tree/main/docs/Objeto/crear.mdx",tags:[],version:"current",lastUpdatedBy:"Noe",lastUpdatedAt:1695619692,formattedLastUpdatedAt:"Sep 25, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"asignar",permalink:"/methods/Objeto/asignar"},next:{title:"bloquear",permalink:"/methods/Objeto/bloquear"}},i={},s=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crear"},"crear"),(0,n.kt)("p",null,"Se utiliza para crear un nuevo objeto que tiene un prototipo espec\xedfico (objeto prototipo) y, opcionalmente, puede contener propiedades adicionales. Es una forma de crear un objeto que hereda propiedades y m\xe9todos de otro objeto.\nAl ser un objeto, si solo se asigna como b = a se creara una referencia y no una copia, por lo que si cambias un valor de b tambien se cambiara en a y viseversa"),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'var objetoPrototipo = { a: 1, b: 2 };\n\nvar nuevoObjeto = Objeto.crear(objetoPrototipo);\n\nimprimir("Nuevo objeto:", nuevoObjeto);\nimprimir("Propiedad \'a\' en el nuevo objeto:", nuevoObjeto.a);\nimprimir("Propiedad \'b\' en el nuevo objeto:", nuevoObjeto.b);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// Nuevo objeto: {}\n// Propiedad 'a' en el nuevo objeto: 1\n// Propiedad 'b' en el nuevo objeto: 2\n")),(0,n.kt)("p",null,"En este ejemplo, creamos un nuevo objeto nuevoObjeto utilizando el m\xe9todo crear y pasando objetoPrototipo como argumento. El objeto resultante hereda las propiedades a y b del objetoPrototipo."),(0,n.kt)("p",null,"Es importante destacar que el nuevo objeto creado no tiene propiedades propias adicionales. Solo hereda las propiedades del objeto prototipo."))}p.isMDXComponent=!0}}]);