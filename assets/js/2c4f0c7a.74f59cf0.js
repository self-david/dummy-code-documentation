"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[9621],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>v});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),s=function(e){var a=n.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},u=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=t,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(v,i(i({ref:a},u),{},{components:r})):n.createElement(v,i({ref:a},u))}));function v(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[d]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2516:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),t=(r(7294),r(3905));const l={sidebar_position:10},i="Variables en una linea",o={unversionedId:"one-var",id:"one-var",title:"Variables en una linea",description:"Esta regla se produce cuando declaras varias variables en una sola l\xednea de c\xf3digo en lugar de declararlas por separado en l\xedneas individuales.",source:"@site/errors/10-one-var.mdx",sourceDirName:".",slug:"/one-var",permalink:"/errors/one-var",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Parentesis innecesarios",permalink:"/errors/no-extra-parens"},next:{title:"bucle invertido",permalink:"/errors/for-direction"}},c={},s=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],u={toc:s},d="wrapper";function p(e){let{components:a,...r}=e;return(0,t.kt)(d,(0,n.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"variables-en-una-linea"},"Variables en una linea"),(0,t.kt)("p",null,"Esta regla se produce cuando declaras varias variables en una sola l\xednea de c\xf3digo en lugar de declararlas por separado en l\xedneas individuales."),(0,t.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"var variable1, variable2, variable3;\n")),(0,t.kt)("p",null,"En este ejemplo, has declarado tres variables en una sola l\xednea, lo que dificulta la legibilidad en el codigo."),(0,t.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,t.kt)("p",null,"La idea detr\xe1s de esta regla es mejorar la legibilidad del c\xf3digo y facilitar su mantenimiento.\nDeclarar cada variable en su propia l\xednea hace que el c\xf3digo sea m\xe1s claro y facilita la identificaci\xf3n y modificaci\xf3n de variables en el futuro."),(0,t.kt)("h2",{id:"causa"},"Causa"),(0,t.kt)("p",null,'Este "error" se produce cuando no sigues la convenci\xf3n de estilo que recomienda declarar variables por separado en l\xedneas individuales.'),(0,t.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,t.kt)("p",null,"Para seguir la convenci\xf3n de escritura, simplemente declara cada variable en su propia l\xednea.\nAqu\xed tienes un ejemplo corregido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"var variable1;\nvar variable2;\nvar variable3;\n")),(0,t.kt)("p",null,"Ahora, las variables se declaran en l\xedneas separadas, lo que sigue la convenci\xf3n de escritura y hace que el c\xf3digo sea m\xe1s legible y mantenible."))}p.isMDXComponent=!0}}]);