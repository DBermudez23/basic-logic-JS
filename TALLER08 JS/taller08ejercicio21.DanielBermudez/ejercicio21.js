/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
21-Diseñe un algoritmo y operacionalícelo, tal que lea un número entero positivo, de tres cifras (N <= 999 Y N>=100) y determine si el número es capicúo (es igual al revés del número original)*/

const capicuo = () =>{
    let num = parseInt(prompt("Digite un número de 3 cifrás para evaluar si es un número capicúo o no:"));
    if (num >= 100 && num <= 999){
        //Convierte en string el número
        let numStr = num.toString();
        //Convertimos la cadena en un array, le cambiamos su dirección y volvemos a convertir para poder comparar
        let numReverse = numStr.split('').reverse().join('');

        if (numStr === numReverse){
            alert("El número es capicúo");
        } else{
            alert("El número no es capicúo");
        }
    }else{
        alert("El número no contiene 3 cifras");
    }
    
}
capicuo();