"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[2067],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>v});var a=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function t(e,n){if(null==e)return{};var r,a,i=function(e,n){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=t(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(v,l(l({ref:n},u),{},{components:r})):a.createElement(v,l({ref:n},u))}));function v(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var t={};for(var s in n)hasOwnProperty.call(n,s)&&(t[s]=n[s]);t.originalType=e,t[p]="string"==typeof e?e:i,l[1]=t;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8757:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const o={sidebar_position:30},l="Sin llaves",t={unversionedId:"curly",id:"curly",title:"Sin llaves",description:"Este error ocurre cuando una declaraci\xf3n condicional no envuelve su bloque de c\xf3digo en llaves {}.",source:"@site/errors/30-curly.mdx",sourceDirName:".",slug:"/curly",permalink:"/errors/curly",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Bloques inconsistentes",permalink:"/errors/consistent-return"},next:{title:"Variable sin usar",permalink:"/errors/no-unused-vars"}},s={},c=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sin-llaves"},"Sin llaves"),(0,i.kt)("p",null,"Este error ocurre cuando una declaraci\xf3n condicional no envuelve su bloque de c\xf3digo en llaves {}.\nEn la mayoria de lenguajes las llaves son opcionales para bloques de una sola l\xednea,\npero omitirlas puede llevar a comportamientos inesperados y errores si se agrega m\xe1s c\xf3digo en el futuro."),(0,i.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dummy"},"si (condicion)\n  imprimir('Mensaje A'); // Falta llaves en el bloque\n  imprimir('Mensaje B');\n")),(0,i.kt)("p",null,"En este ejemplo, la declaraci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"si")," no utiliza llaves para delimitar su bloque de c\xf3digo, lo que significa que solo la primera\ninstrucci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"imprimir('Mensaje A');")," est\xe1 condicionada por el ",(0,i.kt)("inlineCode",{parentName:"p"},"si"),", mientras que la segunda instrucci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"imprimir('Mensaje B');"),"\nno lo est\xe1, lo que podr\xeda no ser lo deseado."),(0,i.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,i.kt)("p",null,"El uso de llaves {} para delimitar los bloques de c\xf3digo en las declaraciones condicionales ayuda a clarificar cu\xe1l es el alcance\nde las instrucciones condicionadas y previene errores potenciales al agregar m\xe1s c\xf3digo."),(0,i.kt)("h2",{id:"causa"},"Causa"),(0,i.kt)("p",null,"Este error suele ocurrir debido a una falta de atenci\xf3n al escribir el c\xf3digo o cuando se busca ahorrar espacio utilizando una sola l\xednea\nsin llaves en una declaraci\xf3n condicional."),(0,i.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,i.kt)("p",null,"Para solucionar el error, siempre debes utilizar llaves {} para delimitar los bloques de c\xf3digo en las declaraciones condicionales,\nincluso si el bloque tiene una sola l\xednea. Aqu\xed tienes un ejemplo corregido:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dummy"},"si (condicion) {\n  imprimir('Mensaje A');\n}\nimprimir('Mensaje B');\n")),(0,i.kt)("p",null,"En este caso, hemos agregado llaves para delimitar el bloque de c\xf3digo dentro del ",(0,i.kt)("inlineCode",{parentName:"p"},"si"),", lo que asegura que ambas instrucciones est\xe9n\ncondicionadas por la expresi\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"si")," y evita el error."))}d.isMDXComponent=!0}}]);