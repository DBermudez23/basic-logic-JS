/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
SE DEBERA HACER UN PROGRAMA QUE IMPRIMA EL PERIMETRO DE UN RECTÁNGULO TOMANDO SU LARGO Y ANCHO QUE EL USUARIO DIGITARA*/


//Generamos una variable para almacenar el largo del triángulo que sera dado por el usuario
var largo = prompt("Digite el largo del triángulo");

//Genereamos una variable para que el usuario ingrese el valor de el ancho de el triángulo
var ancho = prompt("Digite el ancho de el triángulo");

//La constante perimetro es donde se almacenara el valor total de el périmetro de el triángulo 
const perimetro = (ancho*2)+(largo*2);

alert(`El perimetro total de el triángulo de largo: ${largo} y ancho: ${ancho} es de: ${perimetro}`)