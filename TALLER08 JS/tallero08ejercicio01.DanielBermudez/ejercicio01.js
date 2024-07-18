/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA UN NÚMERO DEL 1 AL 5 E IMPRIMA SI ES PRIMO O NO*/

const numerosPrimos = () =>{
    let numero = prompt("Digite un numero del 1 al 5 para evalauar si es primo o si no lo es");
    if (numero > 0 && numero <=5){
        if (numero != 1){
            if (((numero % numero)==0)&&((numero%1)==0)){
                if((numero%2)==0 && numero != 2){
                    alert("El número no es primo");
                }else{
                    alert("El número es primo");
                }
            }
        }else{
            alert("El número no es primo")
        }
    }else{
        alert("El número debe estar entre 1 y 5")
    }
}

numerosPrimos();