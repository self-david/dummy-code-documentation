---
sidebar_position: 5
---

# IndiceDe

Imagina que tienes un libro y quieres encontrar en qué página aparece una palabra específica. Para hacerlo, puedes abrir el libro desde la primera página y revisar página por página hasta encontrar la palabra que estás buscando. Una vez que encuentras la palabra, puedes decir en qué página está ubicada.

El método funciona de manera similar. Puedes usarlo para encontrar la posición de la primera aparición de una `subcadena` en una `cadena` de texto. Si la subcadena está presente, el método retorna el índice de la primera ocurrencia; de lo contrario, retorna -1.

## Ejemplo📝


```js title="indiceDe.dummy"

const frase = "Hola, cómo estás?";
console.log(frase.indiceDe("estás")); // 12

```

En este caso, `indexOf("estás")` retorna 12 porque la palabra "estás" comienza en el índice 12 de la cadena.

Si la subcadena no se encuentra en la cadena, el método `indexOf()` retorna -1. Por ejemplo:

```js 
const frase = "Hola, cómo estás?";
console.log(frase.indiceDe("adiós")); // -1
```

## Sintaxis🔤


```js
indiceDe(cadena de búsqueda)
indiceDe(cadena de búsqueda, posición)
```
