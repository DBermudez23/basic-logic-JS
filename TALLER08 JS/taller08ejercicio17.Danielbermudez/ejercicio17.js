/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
Construir un programa que calcule el índice de masa corporal de una persona*/

const masaCorporal = () =>{
    let peso = parseInt(prompt("Digite su peso en Kg.(Kilo-gramos)"));
    let altura = parseFloat(prompt("Digite su altura en m.(Metros)"));
    let IMC = (peso/(altura**2)).toFixed(2);
    if (IMC <= 18.5){
        alert(`El resultado de tú indice de masa corporal es ${IMC}, menor de 18.5 por lo que te encuentras en estado de desnutrición, ¡CUIDA DE TÚ SALUD!`);
    } else if (18.5 < IMC && IMC <= 24.9){
        alert(`El resultado de tú indice de masa corporal es ${IMC}, es menor de 25 y mayor a 18.5 por lo que te encuentras en estado totalmente saludable ¡SIGUE ASÍ!`);
    } else if (25 <= IMC && IMC <= 29.9){
        alert(`El resultado de tú indice de masa corporal es ${IMC}, menor de 30 pero mayor a 25 por lo que te encuentras en estado de sobrepeso ¡CUIDA TÚ SALUD!`);
    }else{
        alert(`El resultado de tú indice de masa corporal es ${IMC}, mayor que 30 por lo que te encuentras en estado de OBESIDAD ¡CUIDA TÚ SALUD, VISITA UN MÉDICO!`);
    }
}

masaCorporal();