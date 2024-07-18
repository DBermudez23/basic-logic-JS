/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE PIDA UN NÚMERO DEL 1 AL 12 Y DIGA A QUE MES DEL AÑO CORRESPONDE*/

const mesAño = () =>{
    //Variable que almacenara como un entero el numero que el usuario ingrese para evaluar que mes del año corresponde
    let numero = parseInt(prompt("Digite un número del 1 al 12 correspondiente a un més del año"));
    if (numero > 0 && numero <=12){
        switch(numero){
            case 1:
                alert ("El numero 1 corresponde al mes del año: Enero");
                break;

            case 2:
                alert ("El número 2 corresponde al mes del año: Febrero");
                break;

            case 3:
                alert ("El número 3 corresponde al mes del año: Marzo");
                break;

            case 4:
                alert ("El número 4 corresponde al mes del año: Abril");
                break;

            case 5:
                alert ("El número 5 corresponde al mes del año: Mayo");
                break;

            case 6:
                alert ("El número 6 corresponde al mes del año: Junio");
                break;

            case 7:
                alert ("El número 7 corresponde al mes del año: Julio");
                break; 

            case 8:
                alert ("El número 3 corresponde al mes del año: Agoto");
                break;
    
            case 9:
                alert ("El número 4 corresponde al mes del año: septiembre");
                break;
    
            case 10:
                alert ("El número 5 corresponde al mes del año: Octubre");
                break;
    
            case 11:
                alert ("El número 6 corresponde al mes del año: Noviembre");
                break;
    
            case 12:
                alert ("El número 7 corresponde al mes del año: Diciembre");
                break; 
        }   
    }else {
        alert ("Debe ser un número entre 1 y 12");
    }
}
mesAño();