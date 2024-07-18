/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 10:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos de la serie de Fibonacci entre 0 y 100.*/

const serieFibonnaci = () =>{
    let primerosNumeros = [0, 1];
    let [penultimo, ultimo] = primerosNumeros;

    while (ultimo + penultimo <= 100){
        let siguientesNumeros = penultimo + ultimo;
        primerosNumeros.push(siguientesNumeros);
        [penultimo, ultimo]=[ultimo, siguientesNumeros];
    }
    let sumaTotal = primerosNumeros.reduce((previousValue,currentValue) => {
        return previousValue+currentValue;
    });

    let array = primerosNumeros.join(" + ");

    document.write(`${array} = ${sumaTotal}`);
}

serieFibonnaci();