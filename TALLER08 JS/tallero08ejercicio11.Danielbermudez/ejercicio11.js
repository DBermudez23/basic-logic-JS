/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA DE UN ALMACEN QUE HACE DESCUENTO DE 20% POR COMPRAS SUPERIORES A 100.000, RETORNAA LA CANTIDAD QUE PAGARA EL CLIENTE CON EL DESCUENTO Y HARA LA VERIFICACIÓN*/ 


const descuentoAlmacen = () =>{
    let valorCompra = parseInt(prompt("Ingrese el valor de la compra:"));
    let descuento = (valorCompra-(valorCompra*0.2));
    if(valorCompra >= 100000){
        alert(`Por compras superiores a 100.000 se aplicara un descuento del 20% por lo que el valor de su compra es de un total de: ${descuento}`);
    }else {
        alert(`Su compra no excede los 100.000 por lo que no se le aplicara ningún descuento el valor de su compra es de: ${valorCompra}`);
    }
}

descuentoAlmacen();