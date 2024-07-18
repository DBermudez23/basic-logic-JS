/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 10:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
SERIE DE Narayana*/

const serieNarayana = (n) => {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    }else if (n === 3){
        return [1, 1, 1];
    }

    let serie = [1, 1, 1];

    for (let i = 3; i < n; i++) {
        let numerosNuevos = (serie[i - 1]) + serie[i - 3];
        serie.push(numerosNuevos);
    }
    return serie;
}

const n = parseInt(prompt("Digite el número de términos deseados en la serie de Narayana"));
const serieDeNarayana = serieNarayana(n);

document.write(`La serie de Narayana
con ${n} términos es: ${serieDeNarayana.join(', ')}`);