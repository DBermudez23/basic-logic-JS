/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 10:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
SERIE DE CATALÁN */

const factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

const calcularCatalan = (n) => {
    return factorial(2 * n) / (factorial(n) * factorial(n + 1));
}

const generarSerieCatalan = (n) => {
    let serie = [];
    for (let i = 0; i < n; i++) {
        serie.push(calcularCatalan(i));
    }
    return serie;
}
const pedirNumeroTerminos = () => {
    let n = parseInt(prompt("Digite el número de términos deseados en la serie de Catalán:"));
    while (isNaN(n) || n <= 0) {
        n = parseInt(prompt("Por favor, ingrese un número entero positivo:"));
    }
    return n;
}


const numeroTerminos = pedirNumeroTerminos();
const serieCatalan = generarSerieCatalan(numeroTerminos);


document.write(`La serie de Catalán con ${numeroTerminos} términos es: ${serieCatalan.join(', ')}`);