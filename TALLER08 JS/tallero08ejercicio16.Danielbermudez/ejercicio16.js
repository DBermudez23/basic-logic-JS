/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
Una empresa quiere hacer una compra de varias piezas de la misma clase a una fabrica de refacciones. La empresa, dependiendo del monto total de la compra, decidirá que hacer para pagar al fabricante.
Si el monto total de la compra excede de $500000 la empresa tendrá la capacidad de invertir de su propio dinero un 55% del monto de la compra, pedir prestado al banco un 30% y el resto lo pagara solicitando un crédito al fabricante.
Si el monto total de la compra no excede de $500000 la empresa tendrá capacidad de invertir de su propio dinero un 70% y el
restante 30% lo pagara solicitando crédito al fabricante. El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le pague a crédito.*/


const compraEmpresa = () =>{
    let numeroPiezas = parseInt(prompt("Digite el número de piezas que se compraran al fabricante: "));
    let valorPiezas = parseInt(prompt("Digite el valor de cada pieza teniendo en cuenta que todas costaran lo mismo: "));
    let valorCompra = (numeroPiezas*valorPiezas);
    let cantidadInvertida = 0;
    let prestamoBanco = 0;
    let creditoFab = 0;
    let interesfab = 0;
    let valorTotal = 0;

    if (valorCompra > 500000){
        cantidadInvertida = (valorCompra*0.55);
        prestamoBanco = (valorCompra*0.3);
        creditoFab = (valorCompra * 0.15);
        interesfab = (creditoFab * 0.2);
        valorTotal += (cantidadInvertida + prestamoBanco + creditoFab + interesfab);
        document.write (`La cantidad total invertida del capital de la empresa será de: ${cantidadInvertida}$ <br>
        La cantidad del prestamo que se le hará al banco será de: ${prestamoBanco}$<br>
        La cantidad de dinero que se deberá a credito con el fabricante será de: ${creditoFab}$<br>
        El fabricante cobrara un 20% de interes del total del credito que se haga directamente con el, la cantidad de este interes será de: ${interesfab}$<br>
        Con todo esto en cuenta, el valor total de la compra, sumada con intereses y de mas será de: ${valorTotal}`);
    }else {
        cantidadInvertida = (valorCompra*0.7);
        creditoFab = (valorCompra * 0.3);
        interesfab = (creditoFab * 0.2);
        valorTotal += (cantidadInvertida + creditoFab + interesfab);
        document.write (`La cantidad total invertida del capital de la empresa será de: ${cantidadInvertida}$ <br>
        La cantidad de dinero que se deberá a credito con el fabricante será de: ${creditoFab}$<br>
        El fabricante cobrara un 20% de interes del total del credito que se haga directamente con el, la cantidad de este interes será de: ${interesfab}$<br>
        Con todo esto en cuenta, el valor total de la compra, sumada con intereses y de mas será de: ${valorTotal}`);
    }
}

compraEmpresa();