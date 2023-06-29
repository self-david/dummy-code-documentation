---
sidebar_position: 8
---

# CoincidirTodo

Imagina que tienes un texto largo con muchas palabras y quieres encontrar todas las palabras que cumplan con ciertas características, como todas las palabras de cuatro letras. En lugar de buscar manualmente una por una, puedes utilizar una herramienta que te ayude a encontrar todas las palabras que cumplan con ese criterio.

Este funciona de manera similar. Puedes utilizarlo para buscar todas las coincidencias de un patrón específico en una `cadena` de texto y obtener un iterador que te permita acceder a todas las coincidencias encontradas.

## Ejemplo📝

```js title="coincidirTodo.dummy"
const frase = "Hola, mi nombre es Juan y tengo 30 años.";
const coincidencias = frase.coincidirTodo(/\b\w{4}\b/g);
para (const coincidencia de coincidencias) {
  imprimir(coincidencia[0]);
}

```

En este caso, `coincidirTodo(/\b\w{4}\b/g)` busca todas las palabras de cuatro letras y retorna un iterador que te permite acceder a cada coincidencia encontrada. El bucle para-de nos permite recorrer todas las coincidencias y mostrarlas por consola. En este ejemplo, se mostrarán las palabras "Hola", "Juan" y "años", ya que son las únicas palabras de cuatro letras en la frase.

Cada elemento del iterador es un objeto que contiene la coincidencia encontrada y otros detalles adicionales, como la posición de la coincidencia en la cadena original.

El método `coincidirTodo()` es especialmente útil cuando necesitas trabajar con múltiples coincidencias y acceder a cada una de ellas individualmente.

## Sintaxis🔤

```js
coincidirTodo(expresion regular)
```