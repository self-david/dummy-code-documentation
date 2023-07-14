---
sidebar_position: 14
---

# Cortar

Se utiliza para extraer una parte específica de una cadena de texto sin modificar la cadena original. Imagina que tienes una frase y quieres obtener una parte específica de esa frase. 

## Ejemplo

```js title="cortar.dummy"
global frase = "Hola mundo";
var subcadena = frase.cortar(5);
imprimir(subcadena);
```
En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola mundo", luego utilizamos el método cortar() en la cadena frase para extraer una subcadena a partir de la posición 5. El resultado es la subcadena "mundo", que se imprime en la consola.

También puedes utilizar el método cortar() con dos argumentos para especificar el inicio y fin de la subcadena que deseas extraer:

```js title="cortar2.dummy"
global frase = "Hola mundo";
var subcadena = frase.cortar(5, 9);
imprimir(subcadena);

```
En este ejemplo, utilizamos cortar(5, 9) para extraer la subcadena desde la posición 5 hasta la posición 9 (sin incluir la posición 9). El resultado es la subcadena "mund".

## Sintaxis

```js
cortar(indiceInicio)
cortar(indiceInicio, indiceFin)
```
indiceInicio indica a partir de que posicion se va a extraer la cadena

indiceFin indica hasta que posicion se va a extraer la cadena