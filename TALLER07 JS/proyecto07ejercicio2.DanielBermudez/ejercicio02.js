/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
EL SIGUIENTE PROGRAMA RECIBE UN DATO QUE SERA EL RADIO DE UNA ESFERA Y RETORNARA EL VOLUMEN DE DICHA ESFERA  */


//Creamos una función que reciba como parametros la constante PI y el radio que será el que el usuario nos digite y calcularemos el volúmen de la esfera validando que el radio sea un número entero positivo

const calcularEsfera = () =>{
    const pi = 3.1416;
    let radio = prompt("¿Cual es el radio de la esfera de la cual calcularemos el volumen?");
    const volumen = ((4/3)*(pi*(radio**3)));
    if(radio > 0){
        alert(`El volumen de la esfera con radio ${radio} es: ${volumen} unidades cúbicas `); 
    }else{
        alert("No se puede calcular el volumén de una esfera con radio negativo");
    }

}

calcularEsfera();




