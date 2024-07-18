/*FECHA DE PUBLICACIÓN: 12/07/2024
HORA: 
VERSIÓN CÓDIGO:
AUTOR: 
NOMBRE LENGUAJE UTILIZADO:
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE CALCULA SALARIO DE UN OBRERO AL QUE SE LE PAGA $16 LA HORA SI TRABAJA 40HRS A LA SEMANA, SI TRABAJA MÁS DE 40 HRS SE LE PAGA $20 LA HORA EXTRA*/

const salarioObrero = () =>{
    let horasTrabajadas = parseInt(prompt("Cual fue el número de hrs trabajadas"));
    let horasExtras = horasTrabajadas-40;
    let salarioBase = horasTrabajadas*16;
    let salarioExtra = (horasExtras*20)+salarioBase;

    if (horasTrabajadas <=40 ){
        alert(`El total de su salario es de: ${salarioBase}`);
    }else if (horasTrabajadas > 40){
        alert(`El total de su salario, sumando también un total de horas extras el cual fue: ${horasExtras} que se pagan a $20 la hora, es en total un monto de: ${salarioExtra}$`);
    }
}

salarioObrero();