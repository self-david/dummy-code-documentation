---
sidebar_position: 11
---

# Repetir

Este método te permite crear una nueva cadena de texto al repetir una cadena existente múltiples veces. Imagina que tienes una palabra y quieres duplicarla varias veces para formar una nueva cadena más larga. 

## Ejemplo

```js title="repetir.dummy"

global texto = "Hola ";
var repeticiones = 3;
global nuevaCadena = texto.repetir(repeticiones);
imprimir(nuevaCadena);

```

En este ejemplo, hemos creado una variable llamada texto que contiene la cadena "Hola ", luego hemos declarado una variable repeticiones para indicar cuántas veces queremos repetir la cadena. 

Finalmente, utilizamos el método repetir() en la cadena texto y le pasamos el número de repeticiones como argumento. El resultado es la creación de una nueva cadena que contiene "Hola Hola Hola " y la imprimimos en la consola.

## Sintaxis

```js
repetir(contador)

//En contador va la cantidad de veces que se hara la repeticion de la cadena

```
