/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 18:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
ESCRIBIR UN PROGRAMA QUE CONVIERTA MILLAS POR HORA A METROS POR SEGUNDO*/

var millasPH = prompt("Digite las MPH que desea convertir a m/s");

var metrosPS = (parseInt(millasPH))*0.44704;

document.write (`${millasPH}MPH equivalen a ${metrosPS} m/s`);