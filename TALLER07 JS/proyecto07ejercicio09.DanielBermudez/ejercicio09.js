/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
ESCRIBIR UN PROGRAMA QUE ENCUENTRE EL ANGULO FALTANTE DE UN TRIANGULO, TOMANDO COMO ANGULOS DE ENTRADA DOS DE SUS ANGULOS */

const angulosTriangulo = () =>{
    let angulo1 = prompt("¿Cual es el valor de el primero de los ángulos conocidos?");
    let angulo2 = prompt("¿Cual es el valor de el segundo de los ángulos conocidos?");
    if((angulo1 > 0 && angulo1 < 178) && (angulo2 > 0 && angulo2 < 178)){
        let anguloDesconocido = (180 - (parseInt (angulo1) + parseInt (angulo2)));
        alert(`El valor de el tercer ángulo de el triangulo con angulos de ${angulo1}° y ${angulo2}° es de: ${anguloDesconocido}°`)
    }else{
        alert("No existe un tríangulo con medidas de estos ángulos en su interior ");
    }
}

angulosTriangulo();