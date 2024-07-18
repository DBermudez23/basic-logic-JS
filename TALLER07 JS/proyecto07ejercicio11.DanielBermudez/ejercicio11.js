/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 18:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA HORAS, MINUTOS Y SEGUNDOS COMO DATOS DE ENTRADA Y MUESTRE EL TOTAL DE MILISEGUNDOS*/

//Variable que almacenara el total de horas que digite el usuario
let horas = prompt("Ingrese el total de horas");
//Variable que almacenara el total de minutos
let minutos = prompt("Ingrese el total de minutos");
//Variable que almacenara el total de segundos
let segundos = prompt("ingrese total de segundos");
//Variable que guardara el total de la conversión de cada dato a milisegundos 
let milisegundos = ((parseInt(horas)*3600000)+(parseInt(minutos)*60000)+(parseInt(segundos)*1000));

document.write (`la cantidad de milisegundos totales de ${horas} horas, ${minutos} minutos y ${segundos} segundos es de: ${milisegundos} milisegundos`);
