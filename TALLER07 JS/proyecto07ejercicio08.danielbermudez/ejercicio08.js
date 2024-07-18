/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA COMO DATOS DE ENTRADA DOS NÚMEROS Y REALICE LAS OPERACIONES DE SUMA, RESTA, MULT Y DIVISIÓN Y LUEGO MUESTRE LOS RESULTADOS DE FORMA ORDENADA EN PANTALLA*/


//Defino un objeto el cual me realice las operaciones

class Calculadora{
    constructor(){
    
    }
    sumar(num1, num2){
        return parseInt(num1)+parseInt(num2);
    }
    restar (num1, num2){
        return parseInt(num1)-parseInt(num2);
    }
    multiplicar (num1, num2){
        return parseInt(num1)*parseInt(num2);
    }
    dividir(num1, num2){
        return parseInt(num1)/parseInt(num2);
    }
}

const calculadora = new Calculadora();
//variable donde se almacenara el primer digito a operar
var numero1 = prompt ("Digite el primer número");
//Variable donde se almacenara el segundo digito a operar
var numero2 = prompt ("Digite el segundo número");
//variables donde realizaremos y almacenaremos el resultado de las operaciones realizadas
var resultadoSuma = calculadora.sumar(numero1, numero2);
var resultadoResta = calculadora.restar(numero1, numero2);
var resultadoMultiplicacion = calculadora.multiplicar(numero1, numero2);
var resultadoDivision = calculadora.dividir(numero1, numero2);

//imprimimos en pantalla los resultados 
document.write(`Suma: ${resultadoSuma}<br>Resta: ${resultadoResta}<br>Multiplicación: ${resultadoMultiplicacion}<br>División: ${resultadoDivision}`);