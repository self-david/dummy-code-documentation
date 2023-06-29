---
sidebar_position: 4
---

# Incluye

Imagina que tienes una caja de juguetes y quieres saber si esa caja contiene un juguete específico. Para hacerlo, puedes revisar uno por uno los juguetes de la caja hasta encontrar el que estás buscando. Si lo encuentras, puedes decir que la caja contiene ese juguete.

Este método funciona de manera similar. Puedes usarlo para verificar si una `cadena` de texto contiene otra `cadena` específica. Si la `cadena` está presente, el método retorna verdadero; de lo contrario, retorna falso.

## Ejemplo📝

```js title="incluye.dummy"

const frase = "Hola, cómo estás?";
console.log(frase.incluye("estás")); // verdadero

```
En este caso, `incluye("estás")` retorna true porque la palabra "estás" está presente en la frase.

## Sintaxis🔤

```js
incluye (cadena de búsqueda)
incluye (cadena de búsqueda, posición)
```

