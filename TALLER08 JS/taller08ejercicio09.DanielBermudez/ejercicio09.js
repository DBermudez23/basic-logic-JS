/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN 
ESTE PROGRAMA TOMA DOS VALORES,EL PRIMERO ES EL % DE INTERES QUE TENDRA SU INVERSIÓN Y EL SEGUNDO EL CAPITAL A INVERTIR, SI LA GANACIA EN INTERESES ES MAYOR A 7.000 SE LE DEBERA DECIR AL USUARIO QUE PUEDE INVERTIR Y SE LE DIRA EL TOTAL DE LA GANANCIA, EN CASO DE QUE NO SUPERE ESTE MONTO SE LE INDICARA QUE NO INVIERTA*/



const inversion = () =>{
    alert("ESTE PROGRAMA TOMA DOS VALORES,EL PRIMERO ES EL % DE INTERES QUE TENDRA SU INVERSIÓN Y EL SEGUNDO EL CAPITAL A INVERTIR, SI LA GANACIA EN INTERESES ES MAYOR A 7.000 SE LE DEBERA DECIR AL USUARIO QUE PUEDE INVERTIR Y SE LE DIRA EL TOTAL DE LA GANANCIA, EN CASO DE QUE NO SUPERE ESTE MONTO SE LE INDICARA QUE NO INVIERTA");
    let interes = parseInt(prompt("Digite cual sera la tasa de interés que generara su inversión"));
    let capital = parseInt(prompt("Digite cual será el capital que invertira en total"));
    let total = (capital*(interes*0.01));

    if (total > 7000){
        alert (`¡INVIERTE! Tú saldo sera de: ${total}`);
    }else{
        alert ("NO INVIERTA");
    }
}
inversion();