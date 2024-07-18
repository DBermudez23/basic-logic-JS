/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA DOS VALORES E INDIQUE SI AMBOS SON PARES Y SI AMBOS SON IMPAREs*/

const imparPar = () => {
    alert ("Este programa toma dos números e informa si son ambos pares o ambos son impares")
    let num1 = parseInt (prompt("Digite el primer número:"));
    let num2 = parseInt (prompt("Digite el segundo número:"));
    if ((num1%2)==0 && (num2%2)==0){
        alert("ambos números son pares");
    } else if ((num1%2)!=0 && (num2%2)!= 0){
        alert("Ambos números son impares");
    } else{
        alert ("Hay un número impar y otro par");
    }
}

imparPar();