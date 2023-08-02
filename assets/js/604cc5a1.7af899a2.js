"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[8010],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),s=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=t,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,o(o({ref:a},u),{},{components:n})):r.createElement(g,o({ref:a},u))}));function g(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:t,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8798:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),t=(n(7294),n(3905));const l={sidebar_position:9},o="RellenarFin",i={unversionedId:"Cadenas/rellenarAlFinal",id:"Cadenas/rellenarAlFinal",title:"RellenarFin",description:'Imagina que tienes una cadena de texto y quieres agregarle caracteres adicionales al final para que tenga una longitud espec\xedfica. Por ejemplo, si tienes la palabra "Hola" y quieres que tenga una longitud de 8 caracteres, puedes usar rellenarFin() para agregar espacios en blanco al final y lograr ese resultado.',source:"@site/docs/Cadenas/rellenarAlFinal.md",sourceDirName:"Cadenas",slug:"/Cadenas/rellenarAlFinal",permalink:"/dummy-code-documentation/docs/Cadenas/rellenarAlFinal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cadenas/rellenarAlFinal.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"CoincidirTodo",permalink:"/dummy-code-documentation/docs/Cadenas/coincidirTodo"},next:{title:"RellenarInicio",permalink:"/dummy-code-documentation/docs/Cadenas/rellenarAlComienzo"}},c={},s=[{value:"Ejemplo",id:"ejemplo",level:2}],u={toc:s},d="wrapper";function p(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"rellenarfin"},"RellenarFin"),(0,t.kt)("p",null,"Imagina que tienes una ",(0,t.kt)("inlineCode",{parentName:"p"},"cadena"),' de texto y quieres agregarle caracteres adicionales al final para que tenga una longitud espec\xedfica. Por ejemplo, si tienes la palabra "Hola" y quieres que tenga una longitud de 8 caracteres, puedes usar rellenarFin() para agregar espacios en blanco al final y lograr ese resultado.'),(0,t.kt)("p",null,"Dicho metodo te permite a\xf1adir caracteres al final de una ",(0,t.kt)("inlineCode",{parentName:"p"},"cadena")," de texto hasta que alcance una longitud determinada. Puedes especificar la longitud deseada y el car\xe1cter que deseas agregar."),(0,t.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rellenarFin.dummy"',title:'"rellenarFin.dummy"'},'const palabra = "Hola";\nconst rellenarPalabra = palabra.rellenarFin(8, "-");\n\nimprimir(palabraPad);\n')),(0,t.kt)("p",null,"En este caso, ",(0,t.kt)("inlineCode",{parentName:"p"},'rellenarFin(8, "-")'),' toma la palabra "Hola" y la extiende hasta que tenga una longitud de 8 caracteres agregando el car\xe1cter "-" al final. El resultado mostrado en la consola ser\xe1 "Hola----" (la palabra "Hola" seguida de cuatro guiones).'),(0,t.kt)("p",null,"Si la cadena original ya tiene la longitud igual o mayor que la longitud especificada, el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"rellenarFin()")," no realizar\xe1 ninguna modificaci\xf3n y devolver\xe1 la cadena original sin cambios."),(0,t.kt)("p",null,"El m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"rellenarFin()")," es \xfatil cuando necesitas asegurarte de que una cadena de texto tenga una longitud espec\xedfica y deseas agregar caracteres adicionales al final."),(0,t.kt)("p",null,"##Sintaxis"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"rellenarFin(logitudObjetivo)\nrellenarFin(logitudObjetivo, RellenarPalabra)\n\n")),(0,t.kt)("p",null,"RellenarPalabra es igual al caracter o cadena con la que quieres rellenar."),(0,t.kt)("p",null,"logitudObjetivo es el tama\xf1o total deseado de la cadena final."))}p.isMDXComponent=!0}}]);