---
sidebar_position: 9
---

# RellenarFin

Imagina que tienes una `cadena` de texto y quieres agregarle caracteres adicionales al final para que tenga una longitud específica. Por ejemplo, si tienes la palabra "Hola" y quieres que tenga una longitud de 8 caracteres, puedes usar rellenarFin() para agregar espacios en blanco al final y lograr ese resultado.

Dicho metodo te permite añadir caracteres al final de una `cadena` de texto hasta que alcance una longitud determinada. Puedes especificar la longitud deseada y el carácter que deseas agregar.

## Ejemplo

```js title="rellenarFin.dummy"
const palabra = "Hola";
const rellenarPalabra = palabra.rellenarFin(8, "-");

imprimir(palabraPad);
```

En este caso, `rellenarFin(8, "-")` toma la palabra "Hola" y la extiende hasta que tenga una longitud de 8 caracteres agregando el carácter "-" al final. El resultado mostrado en la consola será "Hola----" (la palabra "Hola" seguida de cuatro guiones).

Si la cadena original ya tiene la longitud igual o mayor que la longitud especificada, el método `rellenarFin()` no realizará ninguna modificación y devolverá la cadena original sin cambios.

El método `rellenarFin()` es útil cuando necesitas asegurarte de que una cadena de texto tenga una longitud específica y deseas agregar caracteres adicionales al final.

##Sintaxis
```js
rellenarFin(logitudObjetivo)
rellenarFin(logitudObjetivo, RellenarPalabra)

```
RellenarPalabra es igual al caracter o cadena con la que quieres rellenar.


logitudObjetivo es el tamaño total deseado de la cadena final.


