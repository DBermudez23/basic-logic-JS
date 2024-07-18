/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA 3 NÚMEROS Y EVALUE SI EL RESULTADO  DE LA MULTIPLICACIÓN DE LOS DOS PRIMEROS NÚMEROS ES EL TERCER NÚMERO*/

alert("Este programa evalua solicita tres números, multiplica los dos primeros ingresados y verifica si el tercer número corresponde a el resultado de dicha multiplicación");

const resultadoMult = () =>{
    let num1 = parseInt (prompt("Digite el primer número"));
    let num2 =  parseInt (prompt("Digite el segundo número"));
    let num3 = parseInt (prompt("Digite el tercer número"));
    let resultado = parseInt (num1*num2);
    if ((num1*num2)===num3){
        alert("El tercer número ingresado efectivamente corresponde al resultado de la multiplicación de los dos primeros números");
    } else {
        alert (`El tercer número no corresponde al resultado de la multiplicación de los dos primeros números ingredos , el resultado de dicha multiplicación es: ${resultado} y el tecrer número que ingresaste fue: ${num3}`);
    }
}

resultadoMult();