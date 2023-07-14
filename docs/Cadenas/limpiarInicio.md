---
sidebar_position: 21
---

# LimpiarInicio
Se utiliza para eliminar los espacios en blanco al inicio de una cadena de texto. Imagina que tienes una cadena de texto con espacios en blanco al inicio y deseas eliminarlos.

Por ejemplo, supongamos que tienes la siguiente cadena de texto: " Hola, soy un texto con espacios en blanco." Quieres eliminar los espacios en blanco al inicio para que quede así: "Hola, soy un texto con espacios en blanco."

## Ejemplo

```js title="limpiarInicio.dummy"
var texto = "   Hola, soy un texto con espacios en blanco.";
var textoLimpio = texto.limpiarInicio();
imprimir(textoLimpio);
```
En este caso, utilizamos el método limpiarInicio() en la variable texto para eliminar los espacios en blanco al inicio. El resultado es la cadena de texto sin los espacios en blanco al inicio.

El método limpiarInicio() es útil cuando necesitas eliminar los espacios en blanco innecesarios al inicio de una cadena, por ejemplo, al procesar datos o validar entradas.

## Sintaxi

```js
limpiarInicio()
```