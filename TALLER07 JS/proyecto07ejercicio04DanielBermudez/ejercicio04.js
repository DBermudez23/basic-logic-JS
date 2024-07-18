/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 18:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE CONVIERTA km/h A mph*/

//Vamos a crear una variable para almacenar el dato que el usuario nos dara donde vamos almacenar los KM que convertiremos a MPH



const conversionKMaMPH = () =>{
    let kilometrosPH = prompt("¿Que número de kilometros/hora deseas convertir a millas por hora? (MPH)");
    const millasPorHora = kilometrosPH * 0.621371;
    if (kilometrosPH > 0){
        alert(`El total de MPH de ${kilometrosPH}KM es: ${millasPorHora}`);
    }else{
        alert("No es posible calcular una velocidad negativa");
    }
}

conversionKMaMPH();