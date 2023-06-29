---
sidebar_position: 7
---

# Coincidir

Imagina que tienes una bolsa llena de cartas y quieres encontrar todas las cartas que tienen un número específico. En lugar de revisar una por una, puedes usar un filtro para buscar todas las cartas que coinciden con ese número en particular. Al final, obtendrás todas las cartas que cumplen con el criterio de búsqueda.

Este método funciona de manera similar. Puedes usarlo para buscar todas las coincidencias de un patrón específico en una `cadena` de texto y obtener un arreglo con todas las coincidencias encontradas.

## Ejemplo📝

```js title="coincidir.dummy"

const frase = "Hola, mi nombre es Juan y tengo 30 años.";
const coincidencias = frase.coincidir(/J\w+/g);
imprimir(coincidencias); // ["Juan"]

```
En este caso, `coincidir(/J\w+/g)` busca todas las palabras que comienzan con la letra "J" y retorna un arreglo con todas las coincidencias encontradas. En este ejemplo, solo hay una coincidencia, que es la palabra "Juan".

Si no se encuentra ninguna coincidencia, el método `coincidir()` retorna null. Por ejemplo:

```js
const frase = "Hola, mi nombre es Juan y tengo 30 años.";
const coincidencias = frase.match(/Z\w+/g);
imprimir(coincidencias); // null
```

En este caso, como no hay ninguna palabra que comience con la letra "Z", el método `coincidir()` retorna null.

## Sintaxis🔤

```js
coincidir(expresion regular)
```