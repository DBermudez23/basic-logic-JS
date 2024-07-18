/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE RECIBA UN NÚMERO DE MINUTOS E IMPRIMA EN PANTALLA EL TOTAL DE HRS Y MINUTOS*/

const calcularHoras = ()=>{
    //defino una variable para que el usuario ingrese el numero total de minutos y se almacene en esta
    let cantidadMinutos = prompt("Por favor ingrese número total de minutos para convertirlos a minutos y horas");
    //defino una variable donde se convertira y almacenara el total de horas redondeadas que se imprimira en pantalla para el usuario 
    let totalHoras = Math.round(parseInt (cantidadMinutos) / 60);
    //defino una variable donde se almacenara el total de minutos a partir de un reminder
    let totalMinutos = (parseInt (cantidadMinutos) % 60);

    document.write(`La conversión de ${cantidadMinutos} minutos a hrs:min es = ${totalHoras} hrs y ${totalMinutos}min`)
}

calcularHoras();