---
sidebar_position: 6
---

# UltimoIndiceDe

Imagina que tienes un libro y quieres encontrar en qué página aparece la última vez una palabra específica. En lugar de comenzar desde la primera página y revisar página por página, esta vez puedes empezar desde la última página y retroceder hasta encontrar la última aparición de la palabra. Una vez que encuentras la palabra, puedes decir en qué página está ubicada.

Dicho método funciona de manera similar. Puedes usarlo para encontrar la posición de la última aparición de una `subcadena` en una `cadena` de texto. Si la `subcadena` está presente, el método retorna el índice de la última ocurrencia; de lo contrario, retorna -1.

## Ejemplo📝

```js title="ultimoIndiceDe.dummy"
const frase = "Hola, cómo estás? Estoy bien, gracias.";
console.log(frase.ultimoIndiceDe("estás")); // 12
```
En este caso, `lastIndexOf("estás")` retorna 12 porque la última aparición de la palabra "estás" comienza en el índice 12 de la cadena.

Si la subcadena no se encuentra en la cadena, el método `lastIndexOf()` retorna -1. Por ejemplo:
```js
const frase = "Hola, cómo estás? Estoy bien, gracias.";
console.log(frase.ultimoIndiceDe("adiós")); // -1

```

## Sintaxis🔤

```js
ultimoIndiceDe(cadena de búsqueda)
ultimoIndiceDe(cadena de búsqueda, posición)
```