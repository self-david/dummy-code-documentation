---
sidebar_position: 21
---

# LimpiarFinal
Se utiliza para eliminar los espacios en blanco al final de una cadena de texto. Imagina que tienes una cadena de texto con espacios en blanco al final y deseas eliminarlos.

Por ejemplo, supongamos que tienes la siguiente cadena de texto: "Hola, soy un texto con espacios en blanco. " Quieres eliminar los espacios en blanco al final para que quede así: "Hola, soy un texto con espacios en blanco."

## Ejemplo

```js title="limpiarFinal.dummy"
var texto = "Hola, soy un texto con espacios en blanco.    ";
var textoLimpio = texto.limpiarFinal();
imprimir(textoLimpio);
```

En este caso, utilizamos el método limpiarFinal() en la variable texto para eliminar los espacios en blanco al final. El resultado es la cadena de texto sin los espacios en blanco al final.

El método limpiarFinal() es útil cuando necesitas eliminar los espacios en blanco innecesarios al final de una cadena, por ejemplo, al procesar datos o validar entradas.

## Sintaxis

```js
limpiarFinal()
```