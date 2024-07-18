/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
Una compañía dedicada al alquiler de automóviles cobra un monto fijo de $400000 para los primeros 300 km de recorrido. Para más de 300 km y hasta 1000 km, cobra un monto adicional de $ 15.000 por cada kilómetro en exceso sobre 300. Para más de 1000 km cobra un monto adicional de $ 10.000 por cada kilómetro en exceso sobre 1000. Los precios ya incluyen el 20% del impuesto general a las ventas, IVA. Diseñe un algoritmo que determine el monto a pagar por el alquiler de un vehículo y el monto incluido del impuesto*/


const rentaCarro = () =>{
    let kilometrosTotales = parseInt(prompt("Cual fue el total de los kilometros recorridos?"));
    let kmAdicionales = 0;
    let costoTotal = 0;
    let iva = 0;
    if (kilometrosTotales > 300 && kilometrosTotales < 1000){
        kmAdicionales = kilometrosTotales-300;
        costoTotal = 400000 + (kmAdicionales*10000);
        iva =  (costoTotal * 0.2);
        alert (`Por un total de: ${kilometrosTotales}km andados, se le cobrara la tarifa báse de $400000 por hasta 300km andados, adicional se le cobraran $10000 por km adicional que recorra, el # de km adicionales fue de: ${kmAdicionales}km, por lo que el costo total de su renta fue de: $${costoTotal}, IVA incluido (costo del IVA: $${iva}) `);
    }else if (kilometrosTotales > 1000){
        kmAdicionales = kilometrosTotales - 1000;
        costoTotal = 7000000 + (kmAdicionales * 15000);
        iva = (costoTotal * 0.2);
        alert (`Por un total de: ${kilometrosTotales}km andados, se le cobrara la tarifa báse de $400000 por hasta 300km andados, adicional se le cobraran $10000 por km adicional que recorra hasta los 1000 km, a partir de ese kilometraje se le cobraran $15000 por km adicional, el # de km a partir de 1000 km fue de: ${kmAdicionales}km, por lo que el costo total de su renta fue de: $${costoTotal}, IVA incluido (costo del IVA: $${iva}) )`);
    }else {
        costoTotal = 400000;
        iva = (costoTotal * 0.2);
        alert(`No excedio los 300km por lo que su tarifa es la estandar de: $${costoTotal}, IVA incluido (costo IVA: $${iva})`);
    }
}

rentaCarro();