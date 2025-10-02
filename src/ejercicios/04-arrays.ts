// Ejercicio 4: Arreglos

const calificaciones: number[] = [4.5, 3.8, 5.0, 4.2, 3.9];

let suma: number = 0;
for (let i = 0; i < calificaciones.length; i++) {
  suma += calificaciones[i];
}

const promedio: number = suma / calificaciones.length;

console.log("Calificaciones:", calificaciones);
console.log("Promedio:", promedio.toFixed(2));
