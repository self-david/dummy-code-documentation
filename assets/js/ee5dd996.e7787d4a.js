"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[8847],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>v});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,v=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return n?t.createElement(v,l(l({ref:a},d),{},{components:n})):t.createElement(v,l({ref:a},d))}));function v(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4057:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var t=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},l="Tipos de datos",i={unversionedId:"index",id:"index",title:"Tipos de datos",description:"Los tipos de datos son una parte fundamental de cualquier lenguaje de programaci\xf3n, ya que determinan qu\xe9 tipo de valores pueden ser almacenados en una variable o utilizado en una operaci\xf3n. Los tipos de datos definen c\xf3mo se almacena y se manipula la informaci\xf3n en un programa. De este mismo modo dummy code utiliza una serie de tipos de datos los cuales son:",source:"@site/datatypes/index.mdx",sourceDirName:".",slug:"/",permalink:"/datatypes/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Texto",permalink:"/datatypes/Texto"}},s={},u=[{value:"Texto",id:"texto",level:2},{value:"Lista",id:"lista",level:2},{value:"N\xfamero",id:"n\xfamero",level:2},{value:"Logico",id:"logico",level:2},{value:"Fecha",id:"fecha",level:2},{value:"Mate",id:"mate",level:2},{value:"Objeto",id:"objeto",level:2}],d={toc:u},m="wrapper";function p(e){let{components:a,...n}=e;return(0,o.kt)(m,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tipos-de-datos"},"Tipos de datos"),(0,o.kt)("p",null,"Los tipos de datos son una parte fundamental de cualquier lenguaje de programaci\xf3n, ya que determinan qu\xe9 tipo de valores pueden ser almacenados en una variable o utilizado en una operaci\xf3n. Los tipos de datos definen c\xf3mo se almacena y se manipula la informaci\xf3n en un programa. De este mismo modo dummy code utiliza una serie de tipos de datos los cuales son:"),(0,o.kt)("h2",{id:"texto"},"Texto"),(0,o.kt)("p",null,"Se utiliza para representar texto, como palabras, frases o caracteres."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},'nombre = "nuevo usuario"\nimprimir("Hola, " + nombre)\n')),(0,o.kt)("p",null,"Salida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"// Hola nuevo usuario\n")),(0,o.kt)("h2",{id:"lista"},"Lista"),(0,o.kt)("p",null,"Permite almacenar una colecci\xf3n ordenada de valores, que pueden ser de cualquier tipo. Los elementos en un arreglo se acceden mediante un \xedndice num\xe9rico."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"numeros = [1, 2, 3, 4, 5]\nimprimir(numeros[2])\n")),(0,o.kt)("p",null,"Salida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"// 3\n")),(0,o.kt)("h2",{id:"n\xfamero"},"N\xfamero"),(0,o.kt)("p",null,"Representa valores num\xe9ricos, ya sean enteros o de punto flotante."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},'const numero1 = 5;\nconst numero2 = 10;\nconst suma = numero1 + numero2;\n\nimprimir("La suma de", numero1, "y", numero2, "es igual a", suma);\n')),(0,o.kt)("p",null,"Salida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"// 15\n")),(0,o.kt)("h2",{id:"logico"},"Logico"),(0,o.kt)("p",null,"Solo puede tener dos valores: verdadero o falso. Se utiliza para representar valores de verdad en la l\xf3gica de programaci\xf3n y en las decisiones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},'var activo = verdadero\n\nsi (activo) {\n    imprimir("El sistema est\xe1 activo")\n} sino {\n    imprimir("El sistema est\xe1 inactivo")\n}\n')),(0,o.kt)("p",null,"Salida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"// El sistema est\xe1 activo\n")),(0,o.kt)("h2",{id:"fecha"},"Fecha"),(0,o.kt)("p",null,"Se utiliza para representar fechas y horas. Permite trabajar con informaci\xf3n relacionada al tiempo, como fechas de calendario y marcas de tiempo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},'var fechaActual = crear Fecha();\n\nvar diaDelMes = fechaActual.dia();\n\nimprimir("D\xeda del mes:", diaDelMes);\n')),(0,o.kt)("p",null,"Salida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"//D\xeda del mes: 17\n")),(0,o.kt)("h2",{id:"mate"},"Mate"),(0,o.kt)("p",null,"No es un tipo de dato en s\xed, sino un objeto o m\xf3dulo que proporciona funciones y constantes matem\xe1ticas en muchos lenguajes de programaci\xf3n. Se utiliza para realizar operaciones matem\xe1ticas avanzadas, como c\xe1lculos trigonom\xe9tricos o exponenciaci\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},'var anguloEnRadianes = 0.5; // aproximadamente 30 grados en radianes\n\nvar senoDelAngulo = Mate.sen(anguloEnRadianes);\n\nimprimir("El seno de " + anguloEnRadianes + " radianes es: " + senoDelAngulo);\n')),(0,o.kt)("p",null,"Salida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"// El seno de 0.5 radianes es: 0.479425538604203\n")),(0,o.kt)("h2",{id:"objeto"},"Objeto"),(0,o.kt)("p",null,"Se utiliza para crear estructuras de datos complejas que pueden contener m\xfaltiples valores de diferentes tipos. Los objetos se componen de propiedades (claves) y valores asociados."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},'var objetoPrototipo = { a: 1, b: 2 };\n\nvar nuevoObjeto = Objeto.crear(objetoPrototipo);\n\nimprimir("Nuevo objeto:", nuevoObjeto);\nimprimir("Propiedad \'a\' en el nuevo objeto:", nuevoObjeto.a);\nimprimir("Propiedad \'b\' en el nuevo objeto:", nuevoObjeto.b);\n')),(0,o.kt)("p",null,"Salida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"// Nuevo objeto: {}\n// Propiedad 'a' en el nuevo objeto: 1\n// Propiedad 'b' en el nuevo objeto: 2\n")))}p.isMDXComponent=!0}}]);