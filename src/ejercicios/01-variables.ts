// Ejercicio 1: Variables y Alcance

// Una variable constante no puede cambiar su valor
const nombreEstudiante: string = "Juan Pérez";

// Una variable declarada con let sí puede cambiar
let edad: number = 20;
edad = 21; // actualización del valor

console.log("Nombre:", nombreEstudiante);
console.log("Edad:", edad);

/*
Explicación:
- const: se usa para valores que NO deben cambiar, como el nombre.
- let: permite reasignación, útil para valores que pueden variar.
*/
