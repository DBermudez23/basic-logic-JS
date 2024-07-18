/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE SOLICITE AL USUARIO UN NÚMERO Y VERIFIQUE SI ES MAYOR DE 100*/

const mayor100 = () =>{
    let numero =  parseInt(prompt("Digite un número para verificar si es mayor de 100"));

    if (numero > 100 ){
        alert("El número es mayor a 100");
    }else{
        alert("El número es menor que 100");
    }
}

mayor100();