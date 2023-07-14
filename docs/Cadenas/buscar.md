---
sidebar_position: 13
---

# Buscar

Se utiliza para buscar un patrón en una cadena de texto y devuelve la posición de la primera coincidencia. Imagina que tienes una frase y quieres encontrar la posición de una palabra específica dentro de esa frase.

## Ejemplo

```js title="buscar.dummy"

global frase = "Hola mundo";
var posicion = frase.buscar("mundo");
imprimir(posicion);

```

En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola mundo", luego utilizamos el método buscar() en la cadena frase para buscar la palabra "mundo". El resultado es la posición de la primera ocurrencia de la palabra "mundo" en la cadena, que en este caso es el número 5 (ya que la posición se cuenta desde cero). La posición se imprime en la consola.

## Sintaxis

```js

Buscar(Palabra)

```