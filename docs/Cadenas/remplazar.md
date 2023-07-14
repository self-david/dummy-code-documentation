---
sidebar_position: 12
---

# Reemplazar

Este se utiliza para buscar y reemplazar una parte específica de una cadena de texto por otra cadena o valor. Imagina que tienes una frase y quieres cambiar una palabra en particular por otra. 

## Ejemplo

```js title="reemplazar.dummy"

global frase = "Hola amigo";
var nuevaFrase = frase.reemplazar("amigo", "compañero");
imprimir(nuevaFrase);

```
En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola amigo", luego utilizamos el método reemplazar() en la cadena frase para buscar la palabra "amigo" y reemplazarla por "compañero".

El resultado es una nueva cadena que contiene "Hola compañero" y la imprimimos en la consola.

## Sintaxis

``` js
reemplazar(palabraInicial, palabraReemplazante)
```
palabraInicial seria la palabra o cadena original de la frase y palabraReemplazante seria la palabra por la que se quiere cambiar.