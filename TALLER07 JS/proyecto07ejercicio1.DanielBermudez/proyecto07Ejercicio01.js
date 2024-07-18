/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
EL SIGUIENTE PROGRAMA RECIBE UN DATO QUE ES UNA TEMPERATURA EN GRADOS CENTIGRADOS Y LO CONVIERTE EN GRADOS FAHRENHEIT */

//esta ariable almaceara el valor que nos de el usuario que sera el de los grados centigrados 
var gradosCentigrados = prompt("¿Cual es la temperatura en grados centigrados que desea convertir?");


//Esta variable aplicara tomara la variable gradosCentigrados y mediante la formula de conversión nos retornara el valor de los grados fahrenheit  
var gradosFahrenheit = (gradosCentigrados*(9/5))+32;


//Le dira al usuario cual es la conversión de grados centigrados a grados fahrenheit
alert(`${gradosCentigrados}° grados centigrados son ${gradosFahrenheit}° grados fahrenheit` );