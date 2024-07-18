/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE SOLICITE AL USUARIO ANTIGÜEDAD EN AÑOS QUE LLEVA EN UNA EMPRESA Y RESPECTO A ESO CALCULAR SU INGRESO*/ 


const porcentajeAumento = () => {
    //Variable donde se almacenara el número de años de antiüedad del usuario
    let años = parseInt(prompt("Digite el número de años que lleva trabajando en la empresa para darle el valor de su nuevo salario según el porcentaje de aumento que se evidencia en la tabla"), 10);

    if (años > 10) {
        alert("Su aumento será del 10% por lo que su nuevo sueldo será de 44.000 Euros");
    } else if (años > 5) {
        alert("Su aumento será del 7% por lo que su nuevo sueldo será de 42.800 Euros");
    } else if (años > 3) {
        alert("Su aumento será del 5% por lo que su nuevo sueldo será de 42.000 Euros");
    } else {
        alert("Su aumento será del 3% por lo que su nuevo sueldo será de 41.200 Euros");
    }
}

porcentajeAumento();