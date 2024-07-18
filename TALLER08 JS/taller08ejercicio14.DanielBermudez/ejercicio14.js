/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMNA QUE PIDA DOS DATOS DE UN ARTICULO, SU CLAVE Y SU PRECIO ORIGINAL, LA CLAVE ES 1 QUE CORRESPONDE AL 10% DE DESCUENTO Y EL 2 QUE CORRESPONDE AL 20% DE DESCUENTO, IMPRIMIRA EN PANTALLA PRECIO ORIGINAL, PRECIO CON DESCUENTO Y CLAVE*/

const claveDescuento = () =>{
    let precioOrg = parseInt (prompt("Digite el precio original del producto: "));
    let clave = parseInt(prompt("Digite la calve del producto: "));
    let precioClave1 = (precioOrg -(precioOrg * 0.1));
    let precioClave2 = (precioOrg - (precioOrg * 0.2));
    if (clave ==1){
        alert(`El producto tiene un precio de: ${precioOrg}, se ha ingresado la clave (1) por lo que se aplicara el 10% de descuento <br>
        El precio actual del producto será de: ${precioClave1}$`);
    }else if (clave ==2){
        alert(`El producto tiene un precio de: ${precioOrg}, se ha ingresado la clave (2) por lo que se aplicara el 20% de descuento
        El precio actual del producto será de: ${precioClave2}$`);
    }else {
        alert ("Ingreso una clave incorrecta, por lo que el precio de el articulo no se modificara.");
    }
}

claveDescuento();