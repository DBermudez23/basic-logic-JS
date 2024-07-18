/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 18:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA COMO DATOS DE ENTRADA UN NOMBRE, UN APELLIDO, Y AÑO DE NACIMIENTO Y LUEGO LOS IMPRIMA EN PANTALLA*/

//Generamos un array que contenga los datos que el usuario ingresara para luego recorrerlos con un bucle for para imprimirlos en pantalla

const datos = [ (prompt("Digite un nombre")), (prompt("Digite un apellido")), (prompt("Digite un año de nacimiento"))];

for (i=0 ; i < 3; i++){
    document.write (`${datos[i]} `);
}

