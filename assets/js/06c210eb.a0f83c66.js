"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[3839],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),c=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=t,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:r},p),{},{components:n})):a.createElement(f,i({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7797:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),t=(n(7294),n(3905));const o={sidebar_position:9},i="Parentesis innecesarios",s={unversionedId:"no-extra-parens",id:"no-extra-parens",title:"Parentesis innecesarios",description:"Esto se produce cuando utilizas par\xe9ntesis que no son esenciales para la operaci\xf3n que est\xe1s realizando en tu c\xf3digo.",source:"@site/errors/9-no-extra-parens.mdx",sourceDirName:".",slug:"/no-extra-parens",permalink:"/errors/no-extra-parens",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Desestructuraci\xf3n vac\xeda",permalink:"/errors/no-empty-pattern"},next:{title:"Variables en una linea",permalink:"/errors/one-var"}},l={},c=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],p={toc:c},u="wrapper";function d(e){let{components:r,...n}=e;return(0,t.kt)(u,(0,a.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"parentesis-innecesarios"},"Parentesis innecesarios"),(0,t.kt)("p",null,"Esto se produce cuando utilizas par\xe9ntesis que no son esenciales para la operaci\xf3n que est\xe1s realizando en tu c\xf3digo.\nLos par\xe9ntesis suelen utilizarse para agrupar expresiones y establecer el orden de ejecuci\xf3n,\npero cuando se utilizan de forma innecesaria, pueden complicar el c\xf3digo sin a\xf1adir valor."),(0,t.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"var resultado = (5 + 3);\n")),(0,t.kt)("p",null,"En este ejemplo, los par\xe9ntesis alrededor de la expresi\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"5 + 3")," son innecesarios y provocan el error."),(0,t.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,t.kt)("p",null,"En programaci\xf3n, los par\xe9ntesis son \xfatiles para aclarar la prioridad de las operaciones o para agrupar expresiones en casos espec\xedficos.\nSin embargo, cuando se usan sin motivo, pueden dificultar la lectura y comprensi\xf3n del c\xf3digo."),(0,t.kt)("h2",{id:"causa"},"Causa"),(0,t.kt)("p",null,"Esto suele ocurrir debido a un error tipogr\xe1fico o a una confusi\xf3n sobre la necesidad de los par\xe9ntesis en una expresi\xf3n."),(0,t.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,t.kt)("p",null," Para solucionar esto, simplemente elimina los par\xe9ntesis innecesarios y deja solo aquellos que son esenciales para la operaci\xf3n que deseas realizar.\nAqu\xed tienes un ejemplo corregido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"var resultado = 5 + 3; // Hemos eliminado los par\xe9ntesis innecesarios.\n")))}d.isMDXComponent=!0}}]);