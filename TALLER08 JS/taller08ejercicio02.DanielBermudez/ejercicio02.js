/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
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