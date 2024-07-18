/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 10:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin sobrepasar
el número 10,000.*/


const serieFibonnaci = () =>{
    let primerosNumeros = [0, 1];
    let [penultimo, ultimo] = primerosNumeros;

    while (ultimo + penultimo <= 10000){
        let siguientesNumeros = penultimo + ultimo;
        primerosNumeros.push(siguientesNumeros);
        [penultimo, ultimo]=[ultimo, siguientesNumeros];
    }
    return primerosNumeros;
}

const fibonacci10000 = serieFibonnaci();

document.write(fibonacci10000);