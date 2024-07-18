/*FECHA DE PUBLICACIÓN: 13/07/2024
HORA: 22:30
VERSIÓN CÓDIGO: 1.0
AUTOR: Daniel Bermudez Florez
NOMBRE LENGUAJE UTILIZADO: Emascript 6.0 JavaScript
UNIVERSIDAD TECNÓLOGICA DE PEREIRA
ING. DE SISTEMAS Y COMPUTACIÓN
PROGRAMA QUE DETERMINA SI UN ALUMNO APRUEBA O NO UN CURSO CON UN PROMEDIO DE 3 CALIFICACIONES QUE SEA MAYOR A 3.0*/

alert("Este programa tomara 3 notas de exámenes para evaluar si el alumno aprueba o reprueba un curso");

const notasAlumno = () =>{
    let nota1 = parseFloat (prompt("Digite la primer nota"));
    let nota2 = parseFloat (prompt("Digite la segunda nota"));
    let nota3 = parseFloat (prompt("Digite la tercer nota"));
    let promedio = ((nota1+nota2+nota3)/3);
    if (promedio >= 3.0){
        alert("Curso aprobado");
    } else{
        alert("Curso NO aprobado");
    }
}
notasAlumno();