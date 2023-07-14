---
sidebar_position: 20
---

# Limpiar
Se utiliza para eliminar los espacios en blanco al inicio y al final de una cadena de texto. Imagina que tienes una cadena de texto con espacios en blanco extra y quieres eliminarlos.

Por ejemplo, supongamos que tienes la siguiente cadena de texto: " Hola, soy un texto con espacios en blanco. " Quieres eliminar los espacios en blanco al inicio y al final para que quede así: "Hola, soy un texto con espacios en blanco".

## Ejemplo

```js title="limpiar.dummy"
var texto = "   Hola, soy un texto con espacios en blanco.   ";
var textoLimpio = texto.limpiar();
imprimir(textoLimpio);
```
En este caso, utilizamos el método limpiar() en la variable texto para eliminar los espacios en blanco al inicio y al final. El resultado es la cadena de texto sin los espacios en blanco extra.

El método limpiar() es útil cuando recibes entradas de usuarios, ya que puede haber espacios en blanco adicionales que no deseas tener en cuenta.

## Sintaxis

```js
limpiar()
```