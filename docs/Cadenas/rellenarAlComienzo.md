---
sidebar_position: 10
---

# RellenarInicio

Imagina que tienes una `cadena` de texto y deseas agregar caracteres adicionales al inicio para que tenga una longitud específica. Por ejemplo, si tienes el número "5" y deseas que tenga una longitud de 4 dígitos, puedes usar rellenarInicio() para agregar ceros al inicio y lograr ese resultado.

Este permite agregar caracteres al inicio de una `cadena` de texto hasta que alcance una longitud determinada. Puedes especificar la longitud deseada y el carácter que deseas agregar.

## Ejemplo
```js title="rellenarInicio.dummy"
const numero = "5";
const rellenarPalabra = numero.rellenarInicio(4, "0");

imprimir(numeroPad);

```
En este caso, `rellenarInicio(4, "0")` toma el número "5" y lo extiende hasta que tenga una longitud de 4 dígitos agregando el carácter "0" al inicio. El resultado mostrado en la consola será "0005" (tres ceros seguidos del número "5").

Si la cadena original ya tiene una longitud igual o mayor que la longitud especificada, el método `rellenarInicio()` no realizará ninguna modificación y devolverá la cadena original sin cambios.

El método `rellenarInicio()` es útil cuando necesitas asegurarte de que una cadena de texto tenga una longitud específica y deseas agregar caracteres adicionales al inicio.

## Sintaxis

```js
rellenarInicio(logitudObjetivo)
rellenarInicio(logitudObjetivo, RellenarPalabra)

```
RellenarPalabra es igual al caracter o cadena con la que quieres rellenar

logitudObjetivo es el tamaño total deseado de la cadena final