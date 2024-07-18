/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA UN NÚMERO DEL 1 AL 7 Y DIGA A QUE DÍA DE LA SEMANA CORRESPONDE*/


const diaSemana = () =>{
    //Variable que almacenara como un entero el numero que el usuario ingrese para evaluar que día de la semana corresponde
    let numero = parseInt(prompt("Digite un número del 1 al 7 correspondiente a un día de la semana"));
    if (numero > 0 && numero <=7){
        switch(numero){
            case 1:
                alert ("El numero 1 corresponde al día Lunes");
                break;

            case 2:
                alert ("El número 2 corresponde al día martes");
                break;

            case 3:
                alert ("El número 3 corresponde al día miercoles");
                break;

            case 4:
                alert ("El número 4 corresponde al día jueves");
                break;

            case 5:
                alert ("El número 5 corresponde al día viernes");
                break;

            case 6:
                alert ("El número 6 corresponde al día sabado");
                break;

            case 7:
                alert ("El número 7 corresponde al día domingo");
                break; 
        }   
    }else {
        alert ("Debe ser un número entre 1 y 7");
    }
}

diaSemana();
