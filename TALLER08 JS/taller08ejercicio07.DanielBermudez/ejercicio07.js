/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
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