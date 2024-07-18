/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 10:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
SERIE DE PELL */

const seriePell = (n) => {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    let serie = [0, 1];

    for (let i = 2; i < n; i++) {
        let numerosNuevos = (2*serie[i - 1]) + serie[i - 2];
        serie.push(numerosNuevos);
    }
    return serie;
}

const n = parseInt(prompt("Digite el número de términos deseados en la serie de Pell:"));
const serieDePell = seriePell(n);

document.write(`La serie de Pell con ${n} términos es: ${serieDePell.join(', ')}`);