/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
15- Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o mas se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%.*/

const promoCamisas = () =>{
    let numeroPrendas = parseInt(prompt("Digite el número de camisas que llevara"));
    let precioPrendas = [];
    
    for (i=0 ; i < numeroPrendas; i++){
        precioPrendas[i] = parseInt(prompt("Digite el precio de la camisa " + (i+1)));
    }

    let precioTotal = 0;

    for (i=0 ; i < numeroPrendas; i++){
        parseInt(precioTotal);
        precioTotal += precioPrendas[i];
    }

    let precio3Mas = (precioTotal - (precioTotal * 0.2));
    let precio3Menos = (precioTotal - (precioTotal * 0.1));
    
    if (numeroPrendas >= 3){
        alert (`Al llevarse 3 prendas o más de nuestro almacen tiene derecho a un descuento del 20% del total de la compra que fue de: ${precioTotal}, lo que debera pagar con descuento aplicado será de: ${precio3Mas}$`);
    } else {
        alert(`Tiene derecho a un 10% de descuento del total de la compra que fue de: ${precioTotal}$, con descuento del 10% aplicado debera pagar un total de: ${precio3Menos}$`);
    }
}

promoCamisas()