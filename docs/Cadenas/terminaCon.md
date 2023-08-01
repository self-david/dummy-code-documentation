---
sidebar_position: 3
---

# TerminaCon

El método determina si una `cadena` termina con los caracteres de una `cadena` específica, devolviendo verdadero o falso según corresponda.

## Ejemplo📝

```js title="terminaCon.dummy"
const cadena = "Hola, mundo!";

consola.log(cadena.terminaCon("!")); // Resultado: verdadero
consola.log(cadena.terminaCon("mundo")); // Resultado: falso
consola.log(cadena.terminaCon("mundo!")); // Resultado: verdadero
```

te puedes dar cuenta de que puedes usar desde uno hasta n caracteres, pero estos deben coincidir al 100% para que regrese verdadero.

## Sintaxis🔤

```js
terminaCon(cadena de búsqueda)
terminaCon(cadena de búsqueda, posición final)
```

