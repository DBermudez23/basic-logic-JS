/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
En un estacionamiento cobran $1.800 por hora o fracción. Diseñe un algoritmo que determine cuanto debe pagar un cliente por el estacionamiento de su vehículo, conociendo el tiempo de estacionamiento en horas y minutos*/

const estacionamiento = () =>{
    let horas = parseInt(prompt("Que número de horas (sin minutos) tuvo parqueado el carro?"));
    let minutos = parseInt (prompt("Que cantidad de minutos adicionales tuvo el carro parqueado?"));
    let cobroHoras = horas*1800;
    let cobroMinutos = ((1800/60)*minutos);
    let cobroTotal = (cobroHoras + cobroMinutos);
    alert (`El cobro por ${horas} horas y ${minutos} minutos es de un total de:  ${cobroTotal}`);
}

estacionamiento();