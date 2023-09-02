"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[5193],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?t.createElement(f,l(l({ref:r},u),{},{components:n})):t.createElement(f,l({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4830:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const o={sidebar_position:21},l="Listas con huecos",s={unversionedId:"no-sparse-arrays",id:"no-sparse-arrays",title:"Listas con huecos",description:"Este error ocurre cuando creas una lista y dejas elementos faltantes entre las comas,",source:"@site/errors/21-no-sparse-arrays.mdx",sourceDirName:".",slug:"/no-sparse-arrays",permalink:"/errors/no-sparse-arrays",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"AutoComparaci\xf3n",permalink:"/errors/no-self-compare"},next:{title:"Codig\xf3 inalcanzable",permalink:"/errors/no-unreachable"}},i={},c=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],u={toc:c},p="wrapper";function d(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"listas-con-huecos"},"Listas con huecos"),(0,a.kt)("p",null,'Este error ocurre cuando creas una lista y dejas elementos faltantes entre las comas,\nlo que resulta en una estructura de arreglo con "huecos" en lugar de elementos definidos.'),(0,a.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},"const miLista = [1, , 3];\n")),(0,a.kt)("p",null,"En este ejemplo, el segundo elemento de la lista est\xe1 ausente entre las comas, lo que provoca el error."),(0,a.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,a.kt)("p",null,"Las listas deben definirse con elementos concretos en cada posici\xf3n. Dejar elementos faltantes crea listas ",(0,a.kt)("inlineCode",{parentName:"p"},"sparse")," o con ",(0,a.kt)("inlineCode",{parentName:"p"},"huecos"),",\nlo que puede causar comportamientos inesperados y dificultar la manipulaci\xf3n de los datos en el arreglo."),(0,a.kt)("h2",{id:"causa"},"Causa"),(0,a.kt)("p",null,"Este error suele ocurrir debido a un error tipogr\xe1fico o a una falta de atenci\xf3n al definir un arreglo."),(0,a.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,a.kt)("p",null,"Para solucionar el error, aseg\xfarate de definir todos los elementos del arreglo de manera expl\xedcita y sin dejar huecos.\nPuedes utilizar ",(0,a.kt)("inlineCode",{parentName:"p"},"nulo")," o cualquier otro valor para representar elementos vac\xedos si es necesario. Aqu\xed tienes un ejemplo corregido:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},"const miArray = [1, nulo, 3]; // Definimos elementos vac\xedos con 'nulo'\n")),(0,a.kt)("p",null,"En este caso, hemos reemplazado el hueco con ",(0,a.kt)("inlineCode",{parentName:"p"},"nulo")," para asegurarnos de que el arreglo tenga elementos definidos en cada posici\xf3n.\nEsto elimina el error y hace que el arreglo sea m\xe1s predecible y f\xe1cil de trabajar."))}d.isMDXComponent=!0}}]);