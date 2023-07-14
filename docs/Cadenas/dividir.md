---
sidebar_position: 14
---

# Dividir

Se utiliza para dividir una cadena de texto en un arreglo de subcadenas, utilizando un separador especificado. Imagina que tienes una frase y quieres dividirla en palabras individuales.

## Ejemplo

```js title="dividir.dummy"
global frase = "Hola mundo";
var palabras = frase.dividir(" ");
imprimir(palabras);
```
En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola mundo", luego utilizamos el método dividir() en la cadena frase y le pasamos un espacio en blanco como separador. El resultado es un arreglo llamado palabras que contiene las palabras individuales de la frase: ["Hola", "mundo"]. El arreglo se imprime en la consola.

También puedes utilizar el método dividir() con otros separadores, como comas, puntos o guiones:

```js title="dividir2.dummy"
global texto = "Manzana,Naranja,Limón";
var frutas = texto.dividir(",");
imprimir(frutas);
```
En este ejemplo, utilizamos dividir(",") para dividir la cadena texto en un arreglo de frutas, utilizando la coma como separador. El resultado es un arreglo llamado frutas que contiene las frutas individuales: ["Manzana", "Naranja", "Limón"].

Otro metodo que se puede utilizar es añadiendo un limite al dividir:

```js title="dividir2.dummy"
global frase = "Hola,mundo,bienvenido,a,todos";
var palabras = frase.dividir(",", 3);
imprimir(palabras);
```
En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola,mundo,bienvenido,a,todos". Utilizamos el método dividir() en la cadena frase y le pasamos una coma como separador y el número 3 como límite. El resultado es un arreglo llamado palabras que contiene las tres primeras palabras separadas por coma: ["Hola", "mundo", "bienvenido"].

En este caso, el parámetro limite especifica el número máximo de elementos que se deben incluir en el arreglo resultante. En este ejemplo, se incluyen las tres primeras palabras y las siguientes palabras se omiten.

## Sintaxis
```js
dividir(separador)
dividir(separador, limite)
```
