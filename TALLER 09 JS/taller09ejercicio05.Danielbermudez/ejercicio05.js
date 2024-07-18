/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
SERIE DE PERRIN*/

const seriePerrin = (n) => {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [3];
    } else if (n === 2) {
        return [3, 0];
    }else if (n === 3){
        return [3, 0, 2]
    }

    let serie = [3, 0, 2];

    for (let i = 3; i < n; i++) {
        let numerosNuevos = (serie[i - 2]) + serie[i - 3];
        serie.push(numerosNuevos);
    }
    return serie;
}

const n = parseInt(prompt("Digite el número de términos deseados en la serie de Perrin:"));
const serieDePerrin = seriePerrin(n);

document.write(`La serie de Perrin con ${n} términos es: ${serieDePerrin.join(', ')}`);