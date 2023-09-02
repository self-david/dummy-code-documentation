"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[4253],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>g});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),u=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=t,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(g,i(i({ref:n},s),{},{components:r})):a.createElement(g,i({ref:n},s))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:t,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7605:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(7462),t=(r(7294),r(3905));const o={sidebar_position:22},i="Codig\xf3 inalcanzable",c={unversionedId:"no-unreachable",id:"no-unreachable",title:"Codig\xf3 inalcanzable",description:"Este error ocurre cuando tienes c\xf3digo que se encuentra en una posici\xf3n inalcanzable en tu programa. Es decir,",source:"@site/errors/22-no-unreachable.mdx",sourceDirName:".",slug:"/no-unreachable",permalink:"/errors/no-unreachable",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Listas con huecos",permalink:"/errors/no-sparse-arrays"},next:{title:"Ciclo inalcanzable",permalink:"/errors/no-unreachable-loop"}},l={},u=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,t.kt)(p,(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"codig\xf3-inalcanzable"},"Codig\xf3 inalcanzable"),(0,t.kt)("p",null,"Este error ocurre cuando tienes c\xf3digo que se encuentra en una posici\xf3n inalcanzable en tu programa. Es decir,\ndicho c\xf3digo nunca se ejecutar\xe1 debido a que una sentencia de ",(0,t.kt)("inlineCode",{parentName:"p"},"regresar")," se encuentra antes y finaliza la ejecuci\xf3n de la funci\xf3n"),(0,t.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},'funcion suma(a, b) {\n  regresar a + b;\n  imprimir("Este mensaje nunca se muestra");\n}\n')),(0,t.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,t.kt)("p",null,"El c\xf3digo inalcanzable se considera un error porque no tiene ning\xfan prop\xf3sito y puede indicar un problema en la l\xf3gica del programa.\nLas sentencias de ",(0,t.kt)("inlineCode",{parentName:"p"},"regresar")," finalizan la ejecuci\xf3n de una funci\xf3n, por lo que cualquier c\xf3digo que se encuentre despu\xe9s de ellas nunca se ejecutar\xe1."),(0,t.kt)("h2",{id:"causa"},"Causa"),(0,t.kt)("p",null," Este error suele ocurrir debido a un error l\xf3gico en el c\xf3digo, como la ubicaci\xf3n incorrecta de una sentencia ",(0,t.kt)("inlineCode",{parentName:"p"},"regresar"),", o una falta de atenci\xf3n al escribir el c\xf3digo."),(0,t.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,t.kt)("p",null,"Para solucionar el error, debes revisar la ubicaci\xf3n de las sentencias de ",(0,t.kt)("inlineCode",{parentName:"p"},"regresar")," en tu c\xf3digo y asegurarte de que no haya c\xf3digo inalcanzable despu\xe9s de ellas.\nEn caso de ser necesario, reorganiza tu c\xf3digo para que tenga sentido y aseg\xfarate de que todas las partes del mismo sean ejecutables y \xfatiles.\nAqu\xed tienes un ejemplo corregido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},'funcion suma(a, b) {\n  imprimir("Este mensaje siempre se muestra");\n  regresar a + b;\n}\n')),(0,t.kt)("p",null,"En este caso, hemos reorganizado el c\xf3digo para que el mensaje se muestre antes del ",(0,t.kt)("inlineCode",{parentName:"p"},"regresar"),", de modo que sea alcanzable y \xfatil.\nEsto elimina el error y asegura que el c\xf3digo funcione correctamente."))}d.isMDXComponent=!0}}]);