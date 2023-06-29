---
sidebar_position: 9
---

# RellenarAlFinal

Imagina que tienes una `cadena` de texto y quieres agregarle caracteres adicionales al final para que tenga una longitud específica. Por ejemplo, si tienes la palabra "Hola" y quieres que tenga una longitud de 8 caracteres, puedes usar rellenarAlFinal() para agregar espacios en blanco al final y lograr ese resultado.

Dicho metodo te permite añadir caracteres al final de una `cadena` de texto hasta que alcance una longitud determinada. Puedes especificar la longitud deseada y el carácter que deseas agregar.

## Ejemplo

```js title="rellenarAlFinal.dummy"
const palabra = "Hola";
const rellenarPalabra = palabra.rellenarAlFinal(8, "-");

imprimir(palabraPad);
```

En este caso, `rellenarAlFinal(8, "-")` toma la palabra "Hola" y la extiende hasta que tenga una longitud de 8 caracteres agregando el carácter "-" al final. El resultado mostrado en la consola será "Hola----" (la palabra "Hola" seguida de cuatro guiones).

Si la cadena original ya tiene la longitud igual o mayor que la longitud especificada, el método `rellenarAlFinal()` no realizará ninguna modificación y devolverá la cadena original sin cambios.

El método `rellenarAlFinal()` es útil cuando necesitas asegurarte de que una cadena de texto tenga una longitud específica y deseas agregar caracteres adicionales al final.

##Sintaxis
```js
rellenarAlFinal(logitudObjetivo)
rellenarAlFinal(logitudObjetivo, RellenarPalabra)

//RellenarPalabra es igual al caracter o cadena con la que quieres rellenar
//logitudObjetivo es el tamaño total deseado de la cadena final

```



