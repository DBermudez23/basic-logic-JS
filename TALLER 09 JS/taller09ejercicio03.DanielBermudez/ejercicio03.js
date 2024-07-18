/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 10:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Lucas: Es similar a la serie de Fibonacci, pero comienza con los números 2 y 1
en lugar de 0 y 1. Es decir, los dos primeros términos de la serie son 2 y 1, y los siguientes términos se
calculan como la suma de los dos términos anteriores.*/


const serieLucas = (n) => {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [2];
    } else if (n === 2) {
        return [2, 1];
    }

    let serie = [2, 1];

    for (let i = 2; i < n; i++) {
        let numerosNuevos = serie[i - 1] + serie[i - 2];
        serie.push(numerosNuevos);
    }
    return serie;
}

const n = parseInt(prompt("Digite el número de términos deseados en la serie de Lucas:"));
const serieDeLucas = serieLucas(n);

document.write(`La serie de Lucas con ${n} términos es: ${serieDeLucas.join(', ')}`);
