---
sidebar_position: 16
---

# Subcadena
Se utiliza para extraer una parte específica de una cadena de texto. Imagina que tienes una frase y quieres obtener una porción determinada de esa frase. 

## Ejemplo

```js title="subcadena.dummy"
global frase = "Hola mundo";
var subcadenita = frase.subcadena(5);
imprimir(subcadenita);
```

En este ejemplo, hemos creado una variable llamada frase que contiene la cadena "Hola mundo". Luego utilizamos el método subcadena() en la cadena frase para extraer una subcadena a partir de la posición 5. El resultado es la subcadena "mundo", que se imprime en la consola.

También puedes utilizar el método subcadena() con dos índices para especificar el inicio y fin de la subcadena que deseas extraer:

```js title="subcadena2.dummy"
global frase = "Hola mundo";
var subcadena = frase.subcadena(5, 9);
imprimir(subcadena);
```

En este ejemplo, utilizamos subcadena(5, 9) para extraer la subcadena desde la posición 5 hasta la posición 9 (sin incluir la posición 9). El resultado es la subcadena "mund".

## Sintaxis 

```js
subcadena(indiceInicio)
substring(indiceInicio, indiceFin)
```
indiceInicio indica que desde esa posicion se tomara la subcadena. indiceFin indica que hasta esa posicion se tomara la subcadena