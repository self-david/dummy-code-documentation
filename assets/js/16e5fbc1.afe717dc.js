"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[7870],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>f});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=n.createContext({}),i=function(e){var a=n.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},c=function(e){var a=i(e.components);return n.createElement(d.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(r),p=t,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return r?n.createElement(f,l(l({ref:a},c),{},{components:r})):n.createElement(f,l({ref:a},c))}));function f(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[m]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7473:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),t=(r(7294),r(3905));const o={sidebar_position:12.1},l="reemplazarTodo",s={unversionedId:"Cadenas/reemplazarTodo",id:"Cadenas/reemplazarTodo",title:"reemplazarTodo",description:"Este toma dos argumentos: el primer argumento es la subcadena que deseas reemplazar, y el segundo argumento es la subcadena con la que deseas reemplazar todas las ocurrencias de la primera subcadena. Este m\xe9todo busca todas las coincidencias de la primera subcadena en la cadena original y las reemplaza con la segunda subcadena.",source:"@site/docs/Cadenas/reemplazarTodo.mdx",sourceDirName:"Cadenas",slug:"/Cadenas/reemplazarTodo",permalink:"/methods/Cadenas/reemplazarTodo",draft:!1,editUrl:"https://github.com/self-david/dummy-code-documentation/tree/main/docs/Cadenas/reemplazarTodo.mdx",tags:[],version:"current",lastUpdatedBy:"Noe",lastUpdatedAt:1694742589,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:12.1,frontMatter:{sidebar_position:12.1},sidebar:"tutorialSidebar",previous:{title:"Reemplazar",permalink:"/methods/Cadenas/remplazar"},next:{title:"Buscar",permalink:"/methods/Cadenas/buscar"}},d={},i=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],c={toc:i},m="wrapper";function u(e){let{components:a,...r}=e;return(0,t.kt)(m,(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"reemplazartodo"},"reemplazarTodo"),(0,t.kt)("p",null,"Este toma dos argumentos: el primer argumento es la subcadena que deseas reemplazar, y el segundo argumento es la subcadena con la que deseas reemplazar todas las ocurrencias de la primera subcadena. Este m\xe9todo busca todas las coincidencias de la primera subcadena en la cadena original y las reemplaza con la segunda subcadena."),(0,t.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},'var texto = "La manzana es una fruta deliciosa. Me encanta comer manzana.";\n\nvar textoModificado = texto.reemplazarTodo("manzana", "pera");\n\nimprimir("Texto original:", texto);\nimprimir("Texto modificado:", textoModificado);\n')),(0,t.kt)("p",null,"Salida:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"// Texto original: La manzana es una fruta deliciosa. Me encanta comer manzana.\n// Texto modificado: La pera es una fruta deliciosa. Me encanta comer pera.\n")),(0,t.kt)("p",null,"Recuerda que este metodo reemplaza todas las ocurrencias de la subcadena en la cadena original y devuelve una nueva cadena con los cambios. La cadena original no se modifica."))}u.isMDXComponent=!0}}]);