/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA UN NÚMERO E IMPRIMA SI ES PAR O NO*/

const numerosParImpar = () =>{
    //esta variable almacenara el número que el usuario ingrese para evaluar
    let numero = prompt("Digite un número para evaluar si es par o no");
    if (((numero % 2) == 0)){
        alert ("El número es par");
    }else{
        alert ("El número es impar");
    }
}

numerosParImpar();