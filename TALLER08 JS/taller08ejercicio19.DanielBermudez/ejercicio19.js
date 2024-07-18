/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, el monto a pagar y el
número de unidades de obsequio por la compra de cierta cantidad de docenas del producto.*/


const descuentoProducto = () =>{
    let numeroDocenas = parseInt(prompt("Que cantidad de docenas llevará"));
    let numeroUnidades = numeroDocenas*12;
    let precioDocena = parseInt (prompt("Indique el precio de la docena del producto: "));
    let precioTotal = numeroDocenas*precioDocena;
    let descuento = 0;
    let unidadesObsequio = 0;

    if (numeroDocenas >=3){
        for (i=0; i < numeroDocenas; i++){
            unidadesObsequio ++;
        }
        numeroUnidades += unidadesObsequio;
        descuento = (precioTotal * 0.15)
        precioTotal -= descuento;
        document.write(`Compra de: ${numeroDocenas} docenas<br>
        Por cada docena se le obsequiara un producto adicional, en este caso se obsequian: ${unidadesObsequio}<br>
        Por más de 3 docenas se esta dando un descuento del 15% en esta caso su descuento fue de: ${descuento}, por lo que el valor total de su compra fue de: ${precioTotal}$ `);
    }else{
        descuento = (precioTotal * 0.1);
        precioTotal -= descuento;
        document.write(`Monto de la compra de ${numeroDocenas} docenas con un descuento del 10% en su comrpa, fue de: ${precioTotal}`);
    }
}
descuentoProducto();