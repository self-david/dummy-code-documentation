"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[3890],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>f});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),s=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=t,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(f,i(i({ref:n},u),{},{components:a})):r.createElement(f,i({ref:n},u))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1625:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),t=(a(7294),a(3905));const o={sidebar_position:28},i="CamelCase",l={unversionedId:"camelcase",id:"camelcase",title:"CamelCase",description:"Este error se produce cuando los identificadores en tu c\xf3digo no siguen la convenci\xf3n camelCase.",source:"@site/errors/28-camelcase.mdx",sourceDirName:".",slug:"/camelcase",permalink:"/errors/camelcase",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28},sidebar:"tutorialSidebar",previous:{title:"No Es Numero (NeN)",permalink:"/errors/use-isnan"},next:{title:"Bloques inconsistentes",permalink:"/errors/consistent-return"}},c={},s=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],u={toc:s},p="wrapper";function m(e){let{components:n,...a}=e;return(0,t.kt)(p,(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"camelcase"},"CamelCase"),(0,t.kt)("p",null,"Este error se produce cuando los identificadores en tu c\xf3digo no siguen la convenci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"camelCase"),".\n",(0,t.kt)("inlineCode",{parentName:"p"},"CamelCase")," es un estilo de escritura en el que las palabras est\xe1n unidas y cada palabra despu\xe9s de la primera comienza con una letra may\xfascula,\ncomo ",(0,t.kt)("inlineCode",{parentName:"p"},"miVariable"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"nombreDeFuncion"),", etc."),(0,t.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"let mi_variable = 42;\n")),(0,t.kt)("p",null,"En este ejemplo, el identificadores mi_variable no sigue la convenci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"camelcase")," y, por lo tanto, generan el error."),(0,t.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,t.kt)("p",null,"La convenci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"camelcase")," es ampliamente adoptada en la programaci\xf3n y ayuda a que el c\xf3digo sea m\xe1s legible y consistente.\nLos identificadores que no siguen esta convenci\xf3n pueden dificultar la lectura y el mantenimiento del c\xf3digo."),(0,t.kt)("h2",{id:"causa"},"Causa"),(0,t.kt)("p",null,"Este error suele ocurrir cuando se eligen nombres de variables o funciones que no cumplen con la convenci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"camelcase")," o cuando se importa c\xf3digo\nde otras fuentes que no siguen esta convenci\xf3n."),(0,t.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,t.kt)("p",null,"Para solucionar el error ",(0,t.kt)("inlineCode",{parentName:"p"},"camelcase"),", simplemente debes renombrar los identificadores para que sigan la convenci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"camelcase"),". Por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},'let miVariable = 42; // Cambio de "mi_variable" a "miVariable"\n')))}m.isMDXComponent=!0}}]);