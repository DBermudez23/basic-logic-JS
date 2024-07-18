/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA PARA UNA PERSONA ENFERMA PARA MEDIR SUS CALORIAS EN MEDIDAD DEL TIEMPO QUE ESTA REALIZANDO UNA DE DOS ACTIVIDADES, DORMIR O ESTAR SENTADO QUE SON LAS UNICAS ACTIVIDADES QUE TIENE PERMITIDO HACER*/

const calorias = () =>{
    let actividad = prompt("¡Que actividad estuvo realizando? dormir//estar sentado");
    let tiempo = parseInt(prompt("¿Durante cuantos minutos realizó dicha actividad?"));
    let caloriasD = tiempo*1.08;
    let caloriasS = tiempo*1.66;
    if (actividad == "Dormir" || actividad == "dormir"){
        alert (`Las calorias que consumió fueron de: ${caloriasD}`);
    }else if (actividad == "estar sentado" || actividad == "Estar sentado" || actividad == "Estar Sentado" || actividad == "Sentado" || actividad == "sentado"){
        alert (`Las calorias que se consumieron fueron en total: ${caloriasS}`);
    }else {
        alert("ha ingresado una opción inexistente o la ha ingresado erroneamente, reinicie la página de nuevo");
    }
}

calorias();