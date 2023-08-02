"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[5832],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>v});var i=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,i,n=function(e,a){if(null==e)return{};var r,i,n={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=i.createContext({}),s=function(e){var a=i.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},u=function(e){var a=s(e.components);return i.createElement(d.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),p=n,v=c["".concat(d,".").concat(p)]||c[p]||m[p]||t;return r?i.createElement(v,o(o({ref:a},u),{},{components:r})):i.createElement(v,o({ref:a},u))}));function v(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,o=new Array(t);o[0]=p;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<t;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6058:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const t={sidebar_position:14},o="Dividir",l={unversionedId:"Cadenas/dividir",id:"Cadenas/dividir",title:"Dividir",description:"Se utiliza para dividir una cadena de texto en un arreglo de subcadenas, utilizando un separador especificado. Imagina que tienes una frase y quieres dividirla en palabras individuales.",source:"@site/docs/Cadenas/dividir.md",sourceDirName:"Cadenas",slug:"/Cadenas/dividir",permalink:"/docs/Cadenas/dividir",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cadenas/dividir.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Cortar",permalink:"/docs/Cadenas/cortar"},next:{title:"IniciaCon",permalink:"/docs/Cadenas/iniciaCon"}},d={},s=[{value:"Ejemplo",id:"ejemplo",level:2},{value:"Sintaxis",id:"sintaxis",level:2}],u={toc:s},c="wrapper";function m(e){let{components:a,...r}=e;return(0,n.kt)(c,(0,i.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dividir"},"Dividir"),(0,n.kt)("p",null,"Se utiliza para dividir una cadena de texto en un arreglo de subcadenas, utilizando un separador especificado. Imagina que tienes una frase y quieres dividirla en palabras individuales."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dividir.dummy"',title:'"dividir.dummy"'},'global frase = "Hola mundo";\nvar palabras = frase.dividir(" ");\nimprimir(palabras);\n')),(0,n.kt)("p",null,'En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola mundo", luego utilizamos el m\xe9todo dividir() en la cadena frase y le pasamos un espacio en blanco como separador. El resultado es un arreglo llamado palabras que contiene las palabras individuales de la frase: ','["Hola", "mundo"]',". El arreglo se imprime en la consola."),(0,n.kt)("p",null,"Tambi\xe9n puedes utilizar el m\xe9todo dividir() con otros separadores, como comas, puntos o guiones:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dividir2.dummy"',title:'"dividir2.dummy"'},'global texto = "Manzana,Naranja,Lim\xf3n";\nvar frutas = texto.dividir(",");\nimprimir(frutas);\n')),(0,n.kt)("p",null,'En este ejemplo, utilizamos dividir(",") para dividir la cadena texto en un arreglo de frutas, utilizando la coma como separador. El resultado es un arreglo llamado frutas que contiene las frutas individuales: ','["Manzana", "Naranja", "Lim\xf3n"]',"."),(0,n.kt)("p",null,"Otro metodo que se puede utilizar es a\xf1adiendo un limite al dividir:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dividir2.dummy"',title:'"dividir2.dummy"'},'global frase = "Hola,mundo,bienvenido,a,todos";\nvar palabras = frase.dividir(",", 3);\nimprimir(palabras);\n')),(0,n.kt)("p",null,'En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola,mundo,bienvenido,a,todos". Utilizamos el m\xe9todo dividir() en la cadena frase y le pasamos una coma como separador y el n\xfamero 3 como l\xedmite. El resultado es un arreglo llamado palabras que contiene las tres primeras palabras separadas por coma: ','["Hola", "mundo", "bienvenido"]',"."),(0,n.kt)("p",null,"En este caso, el par\xe1metro limite especifica el n\xfamero m\xe1ximo de elementos que se deben incluir en el arreglo resultante. En este ejemplo, se incluyen las tres primeras palabras y las siguientes palabras se omiten."),(0,n.kt)("h2",{id:"sintaxis"},"Sintaxis"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"dividir(separador)\ndividir(separador, limite)\n")))}m.isMDXComponent=!0}}]);