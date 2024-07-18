/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 18:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
ESCRIBIR UN PROGRAMA QUE PIDA AL USUARIO UNA CANTIDAD DE HORAS Y UNA CANTIDAD DE MINUTOS Y RETORNE LA CANTIDAD DE MINUTOS EN TOTAL*/



const calcularMinutos = () => {
    let cantidadHoras = prompt("Digite una cantidad de horas");//definimos variable local donde se almacene la cantidad de horas que el usuario desea cambiar a segundos
    let cantidadMinutos = prompt("Digite una cantidad de minutos");//Definimos variable donde se almacenara los minutos que el usuario ingrese
    let cantidadTotal =  ((parseInt (cantidadHoras) *60) + parseInt (cantidadMinutos));//Definimos variable para almacenar la cantidad total de minutos y especificamos que las variables de horas y minutos deben ser un entero

    if (cantidadHoras >= 0){
        if (cantidadMinutos < 60){
            alert (`La cantidad de minutos a la que equivalen ${cantidadHoras} horas y ${cantidadMinutos} minutos es de: ${cantidadTotal} minutos`);
        } else{
            alert (`La cantidad de minutos es superior a 60, por lo que cuenta cómo una hora más, por favor reinicie`);
        }
    } else {
        alert (`No se puede calcular la cantidad de minutos de una hora negativa`);
    }
}

calcularMinutos();