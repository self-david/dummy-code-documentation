---
sidebar_position: 15
---

# IniciaCon

Se utiliza para verificar si una cadena de texto comienza con un valor específico. Imagina que tienes una palabra y quieres saber si empieza con una letra o un conjunto de letras en particular.

## Ejemplo

```js title="iniciaCon.dummy"
global palabra = "Hola mundo";
var resultado = palabra.iniciaCon("Hola");
imprimir(resultado);
```
En este ejemplo, hemos creado una variable llamada palabra que contiene la cadena "Hola mundo". Luego utilizamos el método iniciaCon() en la cadena palabra para verificar si comienza con la palabra "Hola". El resultado es un valor booleano, que indica si la cadena comienza con el valor especificado. En este caso, el resultado es [cierto|verdadero], lo cual indica que la cadena palabra comienza con "Hola".

También puedes utilizar el método iniciaCon() con un índice opcional para especificar la posición a partir de la cual se debe realizar la comprobación:

```js title="iniciaCon2.dummy"
global palabra = "Hola mundo";
var resultado = palabra.iniciaCon("mundo", 5);
imprimir(resultado);
```

En este ejemplo, utilizamos iniciaCon("mundo", 5) para comprobar si la cadena palabra comienza con "mundo" a partir de la posición 5. El resultado es [falso], ya que la cadena no cumple con esa condición.

## Sintaxis
```js
iniciaCon(palabraBuscada)
startsWith(palabraBuscada, posicion)
```
